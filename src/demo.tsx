import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { FullEditor } from "./full-editor";
import type { EditorValue } from "./types";

const initialValue: EditorValue = [
  { type: "h1", children: [{ text: "Bunship Editor Widget" }] },
  {
    type: "p",
    children: [
      { text: "A standalone " },
      { text: "Plate", bold: true },
      { text: " editor that runs as an ESM SDK or a " },
      { text: "<bunship-editor>", code: true },
      { text: " Web Component, loaded from a CDN." },
    ],
  },
  {
    type: "blockquote",
    children: [{ text: "Theme, styles and upload are owned by the widget." }],
  },
  { type: "h2", children: [{ text: "Try it" }] },
  {
    type: "p",
    children: [
      { text: "Use the toolbar, press " },
      { text: "/", code: true },
      { text: " for the slash menu, or drop an image to upload." },
    ],
  },
];

function Demo() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <FullEditor
        value={initialValue}
        theme="light"
        stylePreset="fluxship"
        upload={{ api: "/api/media/upload", urlBase: "/api/media/object" }}
        minHeight={560}
        onChange={(value) => {
          // eslint-disable-next-line no-console
          console.log("change", value);
        }}
      />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>,
);
