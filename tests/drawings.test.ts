import { expect, test } from 'bun:test';
import { renderDiagram } from '../src/drawings';
import { createPlateEditor } from 'platejs/react';
import { KEYS } from 'platejs';
import { CodeDrawingPlugin } from '@platejs/code-drawing/react';
import { insertCodeDrawing } from '@platejs/code-drawing';
import { ExcalidrawPlugin } from '@platejs/excalidraw/react';
import { insertExcalidraw } from '@platejs/excalidraw';
import { normalizeValue, cloneValue } from '../src/value';

test('the installed core recognizes both drawing plugins and preserves void scene data', () => {
  expect(KEYS.codeDrawing).toBe('code_drawing');
  const editor = createPlateEditor({plugins: [CodeDrawingPlugin, ExcalidrawPlugin], value: [{type:'p', children:[{text:'intro'}]}]});
  editor.tf.select({path:[0,0],offset:0});
  insertCodeDrawing(editor, {data:{drawingType:'Mermaid',drawingMode:'Both',code:'graph TD; A-->B'}});
  expect(editor.children[1].type).toBe('code_drawing');
  expect(editor.api.isVoid(editor.children[1])).toBe(true);
  editor.tf.select({path:[0,0],offset:0});
  insertExcalidraw(editor, {data:{elements:[],state:{viewBackgroundColor:'#fff'}}});
  expect(editor.children[1].type).toBe('excalidraw');
  expect(editor.api.isVoid(editor.children[1])).toBe(true);
  const value = cloneValue(normalizeValue(JSON.stringify(editor.children)));
  expect(value).toEqual(editor.children);
});

test.each([
  ['graph TD; A[开始]-->B[结束]', 'pele-flowchart', '结束'],
  ['classDiagram\nAnimal <|-- Duck\nAnimal : +int age', 'pele-class', 'Duck'],
  ['sequenceDiagram\nAlice->>Bob: 你好\nBob-->>Alice: 收到', 'pele-sequence', '你好'],
  ['stateDiagram-v2\n[*] --> Ready\nReady --> [*]', 'pele-state', 'Ready'],
  ['pie title 比例\n"完成": 8\n"等待": 2', 'pele-pie', '完成'],
])('renders existing Mermaid syntax as a standalone Pele image: %s', async (source, type, label) => {
  const image = await renderDiagram('Mermaid', source);
  expect(image).toStartWith('data:image/svg+xml;charset=utf-8,');
  const svg = decodeURIComponent(image.split(',')[1]);
  expect(svg).toContain(type);
  expect(svg).toContain(label);
  expect(svg).toMatch(/<svg[^>]+width="[\d.]+"/);
  expect(svg).toMatch(/<svg[^>]+height="[\d.]+"/);
  expect(svg).not.toContain('foreignObject');
});

test('Pele failures remain retryable and source size limits are preserved', async () => {
  await expect(renderDiagram('Mermaid', 'flowchart TD\nA[')).rejects.toThrow();
  await expect(renderDiagram('Mermaid', 'graph TD; A-->B\n' + ' '.repeat(100_000))).rejects.toThrow('图表源码过长');
  expect(await renderDiagram('Mermaid', ' \n ')).toBe('');
  expect(await renderDiagram('Mermaid', 'graph TD; A-->B')).toStartWith('data:image/svg+xml;');
});

test('Mermaid image exports escape labels and disable active links and external images', async () => {
  const image = await renderDiagram('Mermaid', `flowchart TD
  A["<script>alert(1)</script>"] --> B["安全 & Unicode 中文"]
  click B "https://example.com/"
  C@{ img: "https://example.com/tracker.png", label: "image" }`);
  const svg = decodeURIComponent(image.split(',')[1]);
  expect(svg).not.toContain('<script');
  expect(svg).not.toContain('<image');
  expect(svg).not.toContain('href=');
  expect(svg).toContain('中文');
});
