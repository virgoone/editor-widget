"use client";
import type { TCodeDrawingElement } from '@platejs/code-drawing';
import { PlateElement, type PlateElementProps, useReadOnly } from 'platejs/react';
import { useEffect, useState } from 'react';
import { renderDiagram, type DrawingType } from '../../../src/drawings';

export function CodeDrawingElement(props: PlateElementProps<TCodeDrawingElement>) {
  const { editor, element, children } = props;
  const readOnly = useReadOnly();
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
    <div contentEditable={false} className="bwe-drawing">
      <div className="bwe-drawing-toolbar">
        <select aria-label="图表格式" value={drawingType} disabled={readOnly} onChange={e => update({ drawingType: e.target.value as DrawingType })}>
          {['Mermaid', 'PlantUml', 'Graphviz', 'Flowchart'].map(type => <option key={type}>{type}</option>)}
        </select>
        <select aria-label="图表视图" value={drawingMode} disabled={readOnly} onChange={e => update({ drawingMode: e.target.value as 'Both' | 'Code' | 'Image' })}>
          <option value="Both">源码与图表</option><option value="Code">仅源码</option><option value="Image">仅图表</option>
        </select>
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
