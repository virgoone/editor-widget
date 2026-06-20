import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";

import { FullEditor } from "./full-editor";
import type { EditorApi, EditorOptions, MountedEditor } from "./types";

export function mountEditor(
  container: Element,
  options: EditorOptions = {},
): MountedEditor {
  let reactRoot: Root | null = null;
  let editorApi: EditorApi | null = null;

  const instance: MountedEditor = {
    getValue: () => editorApi?.getValue() ?? [],
    setValue: (value) => editorApi?.setValue(value),
    focus: () => editorApi?.focus(),
    destroy: () => {
      reactRoot?.unmount();
      reactRoot = null;
      editorApi = null;
    },
  };

  reactRoot = createRoot(container);
  reactRoot.render(
    createElement(FullEditor, {
      ...options,
      onReady: (api) => {
        editorApi = api;
        options.onReady?.(instance);
      },
    }),
  );

  return instance;
}
