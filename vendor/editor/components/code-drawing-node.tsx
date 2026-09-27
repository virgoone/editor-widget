"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@bunship-ai/ui/components/select';
import type { TCodeDrawingElement } from '@platejs/code-drawing';
import { PlateElement, type PlateElementProps, useReadOnly } from 'platejs/react';
import { useEffect, useRef, useState } from 'react';
import { renderDiagram, type DrawingType } from '../../../src/drawings';

export function CodeDrawingElement(props: PlateElementProps<TCodeDrawingElement>) {
  const { editor, element, children } = props;
  const readOnly = useReadOnly();
  const container = useRef<HTMLDivElement>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  useEffect(() => {
    // Keep portalled menus in this widget's theme while escaping the drawing's clipping.
    setPortalContainer(container.current?.closest<HTMLElement>('.bwe-widget-root') ?? null);
  }, []);
  const { code = '', drawingType = 'Mermaid', drawingMode = 'Both' } = element.data ?? {};
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const update = (next: Partial<NonNullable<TCodeDrawingElement['data']>>) => {
    const at = editor.api.findPath(element);
    if (at) editor.tf.setNodes({ data: { ...element.data, ...next } }, { at });
  };
  useEffect(() => {
    let cancelled = false;
    setImage(''); setError('');
    setLoading(!!code.trim() && drawingMode !== 'Code');
    if (!code.trim() || drawingMode === 'Code') return;
    const timer = setTimeout(() => {
      renderDiagram(drawingType, code).then(result => { if (!cancelled) setImage(result); })
        .catch(() => { if (!cancelled) setError('无法绘制，请检查图表语法或网络连接。'); })
        .finally(() => { if (!cancelled) setLoading(false); });
    }, 500);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [code, drawingType, drawingMode]);
  return <PlateElement {...props}>
    <div ref={container} contentEditable={false} className="bwe-drawing">
      <div className="bwe-drawing-toolbar">
        <Select value={drawingType} disabled={readOnly} onValueChange={value => update({ drawingType: value as DrawingType })}>
          <SelectTrigger className="bwe-drawing-select" aria-label="图表格式"><SelectValue /></SelectTrigger>
          <SelectContent container={portalContainer} className="bwe-drawing-menu" align="end" collisionPadding={12}>
            {['Mermaid', 'PlantUml', 'Graphviz', 'Flowchart'].map(type => <SelectItem className="bwe-drawing-option" key={type} value={type}>{type === 'PlantUml' ? 'PlantUML' : type}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={drawingMode} disabled={readOnly} onValueChange={value => update({ drawingMode: value as 'Both' | 'Code' | 'Image' })}>
          <SelectTrigger className="bwe-drawing-select" aria-label="图表视图"><SelectValue /></SelectTrigger>
          <SelectContent container={portalContainer} className="bwe-drawing-menu" align="end" collisionPadding={12}>
            <SelectItem className="bwe-drawing-option" value="Both">源码与图表</SelectItem>
            <SelectItem className="bwe-drawing-option" value="Code">仅源码</SelectItem>
            <SelectItem className="bwe-drawing-option" value="Image">仅图表</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {drawingType === 'PlantUml' && <p className="bwe-drawing-note">PlantUML 源码由 plantuml.com 渲染。</p>}
      <div className="bwe-drawing-body" data-mode={drawingMode}>
        {drawingMode !== 'Image' && <textarea aria-label="图表源码" value={code} readOnly={readOnly} spellCheck={false} placeholder="粘贴图表语法，例如 graph TD; A-->B" onChange={e => update({ code: e.target.value })} />}
        {drawingMode !== 'Code' && <div className="bwe-drawing-preview" aria-live="polite">
          {image ? <img src={image} alt={`${drawingType} 图表`} /> : <span>{loading ? '正在绘制…' : error || '输入源码后显示图表'}</span>}
        </div>}
      </div>
    </div>{children}
  </PlateElement>;
}
