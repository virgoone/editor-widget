var a = Object.defineProperty;
var h = (t, e, i) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => h(t, typeof e != "symbol" ? e + "" : e, i);
import { n as c, a as u, c as p, r as m, F as b } from "./chunks/client-B4hRd8ix.js";
const g = "bunship-editor", l = "bunship-editor-widget-styles";
function f() {
  if (!(typeof document > "u") && !document.getElementById(l))
    try {
      const t = new URL("./style.css", import.meta.url).href, e = document.createElement("link");
      e.id = l, e.rel = "stylesheet", e.href = t, document.head.appendChild(e);
    } catch {
    }
}
class d extends HTMLElement {
  constructor() {
    super(...arguments);
    s(this, "root", null);
    s(this, "editorApi", null);
    s(this, "mountNode", null);
    s(this, "currentValue");
  }
  connectedCallback() {
    f(), this.mountNode || (this.mountNode = document.createElement("div"), this.mountNode.style.display = "block", this.appendChild(this.mountNode)), this.render();
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = null, this.editorApi = null;
  }
  attributeChangedCallback() {
    this.render();
  }
  get value() {
    return this.editorApi?.getValue() ?? c(this.currentValue);
  }
  set value(i) {
    this.currentValue = i, this.editorApi ? this.editorApi.setValue(i) : this.render();
  }
  focus() {
    this.editorApi?.focus();
  }
  getOptions() {
    const i = this.getAttribute("accent-color") ?? void 0, o = this.getAttribute("min-height"), r = o ? Number(o) : void 0;
    return {
      value: this.currentValue ?? this.getAttribute("value") ?? void 0,
      readOnly: this.hasAttribute("readonly"),
      placeholder: this.getAttribute("placeholder") ?? void 0,
      theme: this.getAttribute("theme") ?? "system",
      stylePreset: this.getAttribute("style-preset") ?? "fluxship",
      tokens: i ? { accent: i } : void 0,
      minHeight: Number.isFinite(r) ? r : void 0,
      upload: {
        api: this.getAttribute("upload-api") ?? void 0,
        urlBase: this.getAttribute("upload-url-base") ?? void 0,
        credentials: "include"
      },
      onChange: (n) => {
        this.currentValue = u(n), this.dispatchEvent(
          new CustomEvent("change", {
            bubbles: !0,
            composed: !0,
            detail: { value: u(n) }
          })
        );
      },
      onReady: (n) => {
        this.editorApi = n, this.dispatchEvent(
          new CustomEvent("ready", { bubbles: !0, composed: !0 })
        );
      }
    };
  }
  render() {
    !this.isConnected || !this.mountNode || (this.root ?? (this.root = p.createRoot(this.mountNode)), this.root.render(m.createElement(b, this.getOptions())));
  }
}
s(d, "observedAttributes", [
  "readonly",
  "placeholder",
  "theme",
  "style-preset",
  "accent-color",
  "upload-api",
  "upload-url-base",
  "min-height"
]);
function v(t = g) {
  typeof window > "u" || customElements.get(t) || customElements.define(t, d);
}
v();
export {
  d as BunshipEditorElement,
  v as defineBunshipEditor
};
