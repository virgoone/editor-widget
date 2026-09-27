function o(i) {
  const t = new DOMParser().parseFromString(i, "image/svg+xml").documentElement;
  if (t.localName !== "svg") throw new Error("Invalid SVG");
  const e = t.getAttribute("viewBox")?.trim().split(/[\s,]+/).map(Number);
  return e?.length === 4 && e.every(Number.isFinite) && e[2] > 0 && e[3] > 0 && (t.setAttribute("width", String(e[2])), t.setAttribute("height", String(e[3]))), `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(t))}`;
}
let s = Promise.resolve();
async function l(i, n) {
  if (!n.trim()) return "";
  if (n.length > 1e5) throw new Error("图表源码过长，请拆分图表");
  switch (i) {
    case "Mermaid": {
      const t = s.then(async () => {
        const { default: e } = await import("./chunks/mermaid.core-BgJgbWyA.js").then((a) => a.aj);
        e.initialize({ startOnLoad: !1, securityLevel: "strict", theme: "default", suppressErrorRendering: !0 });
        const { svg: r } = await e.render(`diagram-${crypto.randomUUID()}`, n);
        return o(r);
      });
      return s = t.catch(() => {
      }), t;
    }
    case "Graphviz": {
      const [{ default: t }, { Module: e, render: r }] = await Promise.all([import("./chunks/viz.es-CV8r5n5G.js"), import("./chunks/full.render-CepBzpzV.js").then((a) => a.f)]);
      return o(await new t({ Module: e, render: r }).renderString(n, { format: "svg", engine: "dot" }));
    }
    case "Flowchart": {
      const { default: t } = await import("./chunks/index-BtiRv-lg.js").then((r) => r.i), e = document.createElement("div");
      e.style.cssText = "position:absolute;left:-100000px;top:0;visibility:hidden", document.body.append(e);
      try {
        t.parse(n).drawSVG(e);
        const r = e.querySelector("svg");
        if (!r) throw new Error("图表未生成");
        return o(r.outerHTML);
      } finally {
        e.remove();
      }
    }
    case "PlantUml": {
      const { default: t } = await import("./chunks/browser-index-CeDGC_TT.js").then((r) => r.b), e = await fetch(`https://www.plantuml.com/plantuml/svg/${t.encode(n)}`, { signal: AbortSignal.timeout(15e3), credentials: "omit", referrerPolicy: "no-referrer" });
      if (!e.ok) throw new Error("PlantUML 渲染失败，请检查语法或稍后重试");
      return o(await e.text());
    }
    default:
      throw new Error("不支持的图表格式");
  }
}
async function c(i) {
  const { exportToSvg: n, restoreElements: t } = await import("./chunks/percentages-BXMCSKIN-BkyJl3sn.js").then((r) => r.i), e = await n({
    elements: t(i.elements ?? [], null),
    appState: { ...i.state, exportBackground: !0, exportWithDarkMode: !1 },
    files: i.files ?? {},
    exportPadding: 20
  });
  return o(e.outerHTML);
}
export {
  l as renderDiagram,
  c as renderExcalidraw
};
