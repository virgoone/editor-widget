var c = Object.defineProperty;
var m = (e, t, i) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var n = (e, t, i) => m(e, typeof t != "symbol" ? t + "" : t, i);
import { n as p, a as l, c as b, r as f, F as g } from "./chunks/client-DGRgnPBO.js";
const y = "bunship-editor", r = "bunship-editor-widget-styles", a = "data-bunship-editor";
let s = 0;
function v() {
  if (!(typeof document > "u") && (s += 1, document.body.setAttribute(a, ""), !document.getElementById(r)))
    try {
      const e = new URL("./style.css", import.meta.url).href, t = document.createElement("link");
      t.id = r, t.rel = "stylesheet", t.href = e, document.head.appendChild(t);
    } catch {
    }
}
function A() {
  typeof document > "u" || (s = Math.max(0, s - 1), !(s > 0) && (document.getElementById(r)?.remove(), document.body.removeAttribute(a)));
}
class h extends HTMLElement {
  constructor() {
    super(...arguments);
    n(this, "root", null);
    n(this, "editorApi", null);
    n(this, "mountNode", null);
    n(this, "currentValue");
  }
  connectedCallback() {
    v(), this.mountNode || (this.mountNode = document.createElement("div"), this.mountNode.style.display = "block", this.appendChild(this.mountNode)), this.render();
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = null, this.editorApi = null, A();
  }
  attributeChangedCallback() {
    this.render();
  }
  get value() {
    return this.editorApi?.getValue() ?? p(this.currentValue);
  }
  set value(i) {
    this.currentValue = i, this.editorApi ? this.editorApi.setValue(i) : this.render();
  }
  focus() {
    this.editorApi?.focus();
  }
  getOptions() {
    const i = this.getAttribute("accent-color") ?? void 0, u = this.getAttribute("min-height"), d = u ? Number(u) : void 0;
    return {
      value: this.currentValue ?? this.getAttribute("value") ?? void 0,
      readOnly: this.hasAttribute("readonly"),
      placeholder: this.getAttribute("placeholder") ?? void 0,
      theme: this.getAttribute("theme") ?? "system",
      stylePreset: this.getAttribute("style-preset") ?? "fluxship",
      tokens: i ? { accent: i } : void 0,
      minHeight: Number.isFinite(d) ? d : void 0,
      upload: {
        api: this.getAttribute("upload-api") ?? void 0,
        urlBase: this.getAttribute("upload-url-base") ?? void 0,
        credentials: "include"
      },
      onChange: (o) => {
        this.currentValue = l(o), this.dispatchEvent(
          new CustomEvent("change", {
            bubbles: !0,
            composed: !0,
            detail: { value: l(o) }
          })
        );
      },
      onReady: (o) => {
        this.editorApi = o, this.dispatchEvent(
          new CustomEvent("ready", { bubbles: !0, composed: !0 })
        );
      }
    };
  }
  render() {
    !this.isConnected || !this.mountNode || (this.root ?? (this.root = b.createRoot(this.mountNode)), this.root.render(f.createElement(g, this.getOptions())));
  }
}
n(h, "observedAttributes", [
  "readonly",
  "placeholder",
  "theme",
  "style-preset",
  "accent-color",
  "upload-api",
  "upload-url-base",
  "min-height"
]);
function E(e = y) {
  typeof window > "u" || customElements.get(e) || customElements.define(e, h);
}
E();
export {
  h as BunshipEditorElement,
  E as defineBunshipEditor
};
