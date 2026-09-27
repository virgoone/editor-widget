"use client";
import { CodeDrawingPlugin } from '@platejs/code-drawing/react';
import { ExcalidrawPlugin } from '@platejs/excalidraw/react';
import { CodeDrawingElement } from '../components/code-drawing-node';
import { ExcalidrawElement } from '../components/excalidraw-node';
export const DrawingKit = [CodeDrawingPlugin.withComponent(CodeDrawingElement), ExcalidrawPlugin.withComponent(ExcalidrawElement)];
