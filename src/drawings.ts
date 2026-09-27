// Standalone, lazy browser renderers shared by the editor and article reader.
export type DrawingType = 'PlantUml' | 'Graphviz' | 'Flowchart' | 'Mermaid';
export type ExcalidrawData = { elements?: any[]; state?: Record<string, any>; files?: Record<string, any> };

function svgUrl(svg: string) {
  const document = new DOMParser().parseFromString(svg, 'image/svg+xml');
  const root = document.documentElement;
  if (root.localName !== 'svg') throw new Error('Invalid SVG');
  const box = root.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number);
  if (box?.length === 4 && box.every(Number.isFinite) && box[2] > 0 && box[3] > 0) {
    // Mermaid emits width="100%"; pin intrinsic dimensions before using <img>.
    root.setAttribute('width', String(box[2]));
    root.setAttribute('height', String(box[3]));
  }
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(root))}`;
}
let mermaidQueue: Promise<unknown> = Promise.resolve();

export async function renderDiagram(type: DrawingType, code: string): Promise<string> {
  if (!code.trim()) return '';
  if (code.length > 100_000) throw new Error('图表源码过长，请拆分图表');
  switch (type) {
    case 'Mermaid': {
      // Mermaid has global DOM/config state: serialize renders across blocks.
      const job = mermaidQueue.then(async () => {
        const { default: mermaid } = await import('mermaid');
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'default', suppressErrorRendering: true });
        const { svg } = await mermaid.render(`diagram-${crypto.randomUUID()}`, code);
        return svgUrl(svg);
      });
      mermaidQueue = job.catch(() => {});
      return job;
    }
    case 'Graphviz': {
      const [{ default: Viz }, { Module, render }] = await Promise.all([import('viz.js'), import('viz.js/full.render.js')]);
      return svgUrl(await new Viz({ Module, render }).renderString(code, { format: 'svg', engine: 'dot' }));
    }
    case 'Flowchart': {
      const { default: flowchart } = await import('flowchart.js');
      const container = document.createElement('div');
      container.style.cssText = 'position:absolute;left:-100000px;top:0;visibility:hidden';
      document.body.append(container);
      try {
        flowchart.parse(code).drawSVG(container);
        const svg = container.querySelector('svg');
        if (!svg) throw new Error('图表未生成');
        return svgUrl(svg.outerHTML);
      } finally { container.remove(); }
    }
    case 'PlantUml': {
      const { default: encoder } = await import('plantuml-encoder');
      const response = await fetch(`https://www.plantuml.com/plantuml/svg/${encoder.encode(code)}`, { signal: AbortSignal.timeout(15000), credentials: 'omit', referrerPolicy: 'no-referrer' });
      if (!response.ok) throw new Error('PlantUML 渲染失败，请检查语法或稍后重试');
      return svgUrl(await response.text());
    }
    default: throw new Error('不支持的图表格式');
  }
}

export async function renderExcalidraw(data: ExcalidrawData): Promise<string> {
  const { exportToSvg, restoreElements } = await import('@excalidraw/excalidraw');
  const svg = await exportToSvg({
    elements: restoreElements(data.elements ?? [], null),
    appState: { ...data.state, exportBackground: true, exportWithDarkMode: false },
    files: data.files ?? {},
    exportPadding: 20,
  });
  return svgUrl(svg.outerHTML);
}
