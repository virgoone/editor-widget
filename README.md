# editor-widget

Standalone Bunship editor widget that can be loaded as an ESM SDK or as a Web Component.

This package is designed for apps that must keep the editor out of their own application bundle. The widget owns its React runtime and CSS, so host applications can load it from a CDN at runtime.

The first version is a lightweight standalone rich-text JSON surface. It intentionally avoids Tailwind and monorepo runtime dependencies. The public API is shaped so the full Plate-based Bunship editor can be migrated behind the same `mountEditor()` and `<bunship-editor>` entrypoints later.

## ESM SDK

```html
<link rel="stylesheet" href="https://cdn.example.com/editor-widget/v0.1.0/style.css" />
<div id="editor"></div>
<script type="module">
  import { mountEditor } from "https://cdn.example.com/editor-widget/v0.1.0/index.js";

  const instance = mountEditor(document.getElementById("editor"), {
    theme: "system",
    stylePreset: "fluxship",
    value: [
      { type: "h1", children: [{ text: "Hello" }] },
      { type: "p", children: [{ text: "Start writing..." }] }
    ],
    onChange(value) {
      console.log(value);
    }
  });

  window.destroyEditor = () => instance.destroy();
</script>
```

## Web Component

```html
<script type="module" src="https://cdn.example.com/editor-widget/v0.1.0/web-component.js"></script>

<bunship-editor
  id="editor"
  theme="system"
  style-preset="fluxship"
  accent-color="#ff3300"
></bunship-editor>

<script>
  const editor = document.getElementById("editor");
  editor.value = [{ type: "p", children: [{ text: "Hello" }] }];
  editor.addEventListener("change", (event) => {
    console.log(event.detail.value);
  });
</script>
```

## Themes and styles

The widget supports:

- `theme`: `light`, `dark`, or `system`
- `stylePreset`: `fluxship`, `shadcn`, or `minimal`
- `tokens`: optional CSS token overrides for `accent`, `radius`, `fontFamily`, `borderWidth`, and `shadow`

```ts
mountEditor(node, {
  theme: "dark",
  stylePreset: "shadcn",
  tokens: {
    accent: "#2563eb",
    radius: "0.5rem"
  }
});
```

For Web Components, use attributes:

```html
<bunship-editor theme="dark" style-preset="shadcn" accent-color="#2563eb"></bunship-editor>
```

## Build

```bash
bun install
bun run build
```

Outputs:

- `dist/index.js`
- `dist/web-component.js`
- `dist/style.css`
- `dist/index.d.ts`
- `dist/web-component.d.ts`

## GitHub Packages

The package is published as `@virgoone/editor-widget` on GitHub Packages.

Install from a project that can read `virgoone` packages:

```ini
@virgoone:registry=https://npm.pkg.github.com
```

```bash
bun add @virgoone/editor-widget
```

Publish a new version by bumping `package.json`, committing it, and pushing a matching tag:

```bash
npm version patch
git push origin main --follow-tags
```

The publish workflow only runs for tags matching `v*`. It verifies the tag matches `package.json` before running `npm publish`.

## Roadmap

- Publish versioned ESM bundles to GitHub Releases or R2 for direct CDN loading.
- Migrate the full Plate-based Bunship editor into this package behind the same API.
- Add upload, AI command, slash menu, and media integrations through explicit config.

## Diagrams (0.3.0)

The editor includes Plate Code Drawing and Excalidraw plugins. Use **Insert → Code Drawing** or type `/mermaid` (also `/graphviz`, `/plantuml`, `/flowchart`) to insert a diagram. Choose Mermaid, PlantUml, Graphviz or Flowchart, then paste that format's source. The view selector switches between source, preview and both. ASCII art remains ordinary text; it is not automatically converted to diagram syntax.

Use **Insert → Excalidraw** or `/excalidraw` to draw. Save the complete editor JSON value, including the `data` field. Excalidraw stores its durable scene state and embedded image `files`; transient selections and pointer state are excluded.

Hosts with their own article renderer can load the separate, lazy browser entry without mounting an editor or loading editor CSS:

```ts
import { renderDiagram, renderExcalidraw } from '@virgoone/editor-widget/drawings';
const src = await renderDiagram('Mermaid', 'graph TD; A-->B');
// Render the returned data URL with <img>, not innerHTML.
const sketch = await renderExcalidraw(node.data);
```

Code drawings use Plate's native shape: `{ type: 'code_drawing', data: { drawingType: 'Mermaid', drawingMode: 'Both', code: 'graph TD; A-->B' }, children: [{ text: '' }] }`. Excalidraw uses `{ type: 'excalidraw', data: { elements, state, files }, children: [{ text: '' }] }`.

Mermaid, Graphviz, Flowchart and Excalidraw render in the browser. **PlantUML source is sent to the official `plantuml.com` rendering service**, as in Plate's default renderer. The editor displays that information when PlantUML is selected. Network or syntax failures keep the original source intact.

Run `bun test` and `bun run build` before publishing the source and generated `dist` files together. Consumers should pin the complete commit SHA in CDN URLs; `drawings.js` and `web-component.js` must use the same release directory.
