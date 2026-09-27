import { expect, test } from 'bun:test';
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
