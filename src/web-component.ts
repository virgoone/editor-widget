import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { BunshipEditor } from "./BunshipEditor";
import type { EditorApi, EditorOptions, EditorStylePreset, EditorTheme, EditorValue } from "./types";
import { cloneValue, normalizeValue } from "./value";
import styles from "./styles.css?inline";

const tagName = "bunship-editor";

class BunshipEditorElement extends HTMLElement {
  static observedAttributes = ["value", "readonly", "placeholder", "theme", "style-preset", "accent-color"];

  private root: Root | null = null;
  private editorApi: EditorApi | null = null;
  private mountNode: HTMLDivElement | null = null;
  private currentValue: EditorValue | string | undefined;

  connectedCallback() {
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = styles;
      this.mountNode = document.createElement("div");
      shadow.append(style, this.mountNode);
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

  get value() {
    return this.editorApi?.getValue() ?? normalizeValue(this.currentValue);
  }

  set value(nextValue: EditorValue | string) {
    this.currentValue = nextValue;
    this.editorApi?.setValue(nextValue);
    this.render();
  }

  focus() {
    this.editorApi?.focus();
  }

  private getOptions(): EditorOptions {
    const value = this.currentValue ?? this.getAttribute("value") ?? undefined;
    const theme = (this.getAttribute("theme") ?? "system") as EditorTheme;
    const stylePreset = (this.getAttribute("style-preset") ?? "fluxship") as EditorStylePreset;
    const accent = this.getAttribute("accent-color") ?? undefined;

    return {
      value,
      readOnly: this.hasAttribute("readonly"),
      placeholder: this.getAttribute("placeholder") ?? undefined,
      theme,
      stylePreset,
      tokens: accent ? { accent } : undefined,
      onChange: (nextValue) => {
        this.currentValue = cloneValue(nextValue);
        this.dispatchEvent(
          new CustomEvent("change", {
            bubbles: true,
            composed: true,
            detail: { value: cloneValue(nextValue) }
          })
        );
      },
      onReady: (api) => {
        this.editorApi = api;
        this.dispatchEvent(new CustomEvent("ready", { bubbles: true, composed: true }));
      }
    };
  }

  private render() {
    if (!this.isConnected || !this.shadowRoot || !this.mountNode) return;

    this.root ??= createRoot(this.mountNode);
    this.root.render(createElement(BunshipEditor, this.getOptions()));
  }
}

export function defineBunshipEditor(customTagName = tagName) {
  if (!customElements.get(customTagName)) {
    customElements.define(customTagName, BunshipEditorElement);
  }
}

defineBunshipEditor();

export { BunshipEditorElement };
