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

## Roadmap

- Publish versioned ESM bundles to GitHub Releases or R2 for direct CDN loading.
- Add a GitHub Packages release workflow.
- Migrate the full Plate-based Bunship editor into this package behind the same API.
- Add upload, AI command, slash menu, and media integrations through explicit config.
