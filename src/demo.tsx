import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BunshipEditor } from "./BunshipEditor";
import type { EditorStylePreset, EditorTheme, EditorValue } from "./types";

const initialValue: EditorValue = [
  {
    type: "h2",
    children: [{ text: "Ship editor widget", bold: true }]
  },
  {
    type: "p",
    children: [{ text: "A standalone editor surface that can run as ESM or a Web Component." }]
  },
  {
    type: "blockquote",
    children: [{ text: "Theme and style presets are owned by the widget, not by the host app." }]
  }
];

function Demo() {
  const [theme, setTheme] = useState<EditorTheme>("system");
  const [stylePreset, setStylePreset] = useState<EditorStylePreset>("fluxship");
  const [value, setValue] = useState<EditorValue>(initialValue);

  return (
    <main className="demo-shell">
      <section className="demo-header">
        <div>
          <p>Editor Widget</p>
          <h1>Standalone rich text surface</h1>
        </div>
        <div className="demo-controls">
          <label>
            Theme
            <select value={theme} onChange={(event) => setTheme(event.target.value as EditorTheme)}>
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <label>
            Style
            <select value={stylePreset} onChange={(event) => setStylePreset(event.target.value as EditorStylePreset)}>
              <option value="fluxship">Fluxship</option>
              <option value="shadcn">shadcn</option>
              <option value="minimal">Minimal</option>
            </select>
          </label>
        </div>
      </section>

      <BunshipEditor value={value} theme={theme} stylePreset={stylePreset} onChange={setValue} />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
