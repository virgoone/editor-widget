import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";

import { FullEditor } from "./full-editor";
import type {
  EditorApi,
  EditorOptions,
  EditorStylePreset,
  EditorTheme,
  EditorValue,
} from "./types";
import { cloneValue, normalizeValue } from "./value";

const tagName = "bunship-editor";
const STYLE_ID = "bunship-editor-widget-styles";

/**
 * The full Plate editor renders Radix/Plate portals (toolbars, menus,
 * popovers) to `document.body`, so the widget renders in the light DOM and
 * loads its compiled stylesheet (the sibling `style.css` produced by the
 * build) into `<head>` once. Shadow DOM would leave those portals unstyled.
 */
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  try {
    const href = new URL("./style.css", import.meta.url).href;
    const link = document.createElement("link");
    link.id = STYLE_ID;
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  } catch {
    // import.meta.url unavailable (e.g. dev); styles are injected by the bundler.
  }
}

class BunshipEditorElement extends HTMLElement {
  static observedAttributes = [
    "readonly",
    "placeholder",
    "theme",
    "style-preset",
    "accent-color",
    "upload-api",
    "upload-url-base",
    "min-height",
  ];

  private root: Root | null = null;
  private editorApi: EditorApi | null = null;
  private mountNode: HTMLDivElement | null = null;
  private currentValue: EditorValue | string | undefined;

  connectedCallback() {
    ensureStyles();
    if (!this.mountNode) {
      this.mountNode = document.createElement("div");
      this.mountNode.style.display = "block";
      this.appendChild(this.mountNode);
    }
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
    this.editorApi = null;
  }

  attributeChangedCallback() {
    this.render();
  }

  get value(): EditorValue {
    return this.editorApi?.getValue() ?? normalizeValue(this.currentValue);
  }

  set value(nextValue: EditorValue | string) {
    this.currentValue = nextValue;
    if (this.editorApi) {
      this.editorApi.setValue(nextValue);
    } else {
      this.render();
    }
  }

  focus() {
    this.editorApi?.focus();
  }

  private getOptions(): EditorOptions {
    const accent = this.getAttribute("accent-color") ?? undefined;
    const minHeightAttr = this.getAttribute("min-height");
    const minHeight = minHeightAttr ? Number(minHeightAttr) : undefined;

    return {
      value: this.currentValue ?? this.getAttribute("value") ?? undefined,
      readOnly: this.hasAttribute("readonly"),
      placeholder: this.getAttribute("placeholder") ?? undefined,
      theme: (this.getAttribute("theme") ?? "system") as EditorTheme,
      stylePreset: (this.getAttribute("style-preset") ??
        "fluxship") as EditorStylePreset,
      tokens: accent ? { accent } : undefined,
      minHeight: Number.isFinite(minHeight) ? minHeight : undefined,
      upload: {
        api: this.getAttribute("upload-api") ?? undefined,
        urlBase: this.getAttribute("upload-url-base") ?? undefined,
        credentials: "include",
      },
      onChange: (nextValue) => {
        this.currentValue = cloneValue(nextValue);
        this.dispatchEvent(
          new CustomEvent("change", {
            bubbles: true,
            composed: true,
            detail: { value: cloneValue(nextValue) },
          }),
        );
      },
      onReady: (api) => {
        this.editorApi = api;
        this.dispatchEvent(
          new CustomEvent("ready", { bubbles: true, composed: true }),
        );
      },
    };
  }

  private render() {
    if (!this.isConnected || !this.mountNode) return;
    this.root ??= createRoot(this.mountNode);
    this.root.render(createElement(FullEditor, this.getOptions()));
  }
}

export function defineBunshipEditor(customTagName = tagName) {
  if (typeof window === "undefined") return;
  if (!customElements.get(customTagName)) {
    customElements.define(customTagName, BunshipEditorElement);
  }
}

defineBunshipEditor();

export { BunshipEditorElement };
