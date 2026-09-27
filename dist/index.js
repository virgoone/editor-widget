import { c as n, F as u } from "./chunks/client-CAMWir_w.js";
import { a as p, b as V, n as E } from "./chunks/client-CAMWir_w.js";
import { r as s } from "./chunks/extends-BgBmP6Lp.js";
function m(l, a = {}) {
  let t = null, e = null;
  const r = {
    getValue: () => e?.getValue() ?? [],
    setValue: (o) => e?.setValue(o),
    focus: () => e?.focus(),
    destroy: () => {
      t?.unmount(), t = null, e = null;
    }
  };
  return t = n.createRoot(l), t.render(
    s.createElement(u, {
      ...a,
      onReady: (o) => {
        e = o, a.onReady?.(r);
      }
    })
  ), r;
}
export {
  u as BunshipEditor,
  u as FullEditor,
  p as cloneValue,
  V as createDefaultValue,
  m as mountEditor,
  E as normalizeValue
};
