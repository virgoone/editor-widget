"use client";
import type { TExcalidrawElement } from '@platejs/excalidraw';
import { PlateElement, type PlateElementProps, useReadOnly } from 'platejs/react';
import { useEffect, useRef, useState } from 'react';
import type { ExcalidrawData } from '../../../src/drawings';
import '@excalidraw/excalidraw/index.css';

export function ExcalidrawElement(props: PlateElementProps<TExcalidrawElement>) {
  const { editor, element, children } = props;
  const readOnly = useReadOnly();
  const [module, setModule] = useState<typeof import('@excalidraw/excalidraw')>();
  const [error, setError] = useState(false);
  const initialData = useRef(element.data as ExcalidrawData | undefined).current;
  const lastSaved = useRef('');
  useEffect(() => {
    let active = true;
    import('@excalidraw/excalidraw').then(value => { if (active) setModule(value); }).catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, []);
  const Canvas = module?.Excalidraw;
  return <PlateElement {...props}>
    <div contentEditable={false} className="bwe-excalidraw">
      {Canvas ? <Canvas
        initialData={{ elements: initialData?.elements ?? [], appState: initialData?.state, files: initialData?.files ?? {}, scrollToContent: true }}
        viewModeEnabled={readOnly}
        autoFocus={false}
        onChange={readOnly ? undefined : (elements, state, files) => {
          // Excalidraw's serializer keeps durable scene state and embedded files,
          // excluding pointer/selection state that otherwise causes update loops.
          const serialized = module.serializeAsJSON(elements, state, files, 'local');
          if (serialized === lastSaved.current) return;
          const saved = JSON.parse(serialized);
          const at = editor.api.findPath(element);
          if (!at) return;
          lastSaved.current = serialized;
          editor.tf.setNodes({ data: { elements: saved.elements, state: saved.appState, files: saved.files } }, { at });
        }}
      /> : <p>{error ? '画布加载失败，请刷新重试。' : '正在加载画布…'}</p>}
    </div>{children}
  </PlateElement>;
}
