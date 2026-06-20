import { c as n, r as u, F as s } from "./chunks/client-DGRgnPBO.js";
import { a as V, b as f, n as p } from "./chunks/client-DGRgnPBO.js";
function i(r, l = {}) {
  let t = null, e = null;
  const o = {
    getValue: () => e?.getValue() ?? [],
    setValue: (a) => e?.setValue(a),
    focus: () => e?.focus(),
    destroy: () => {
      t?.unmount(), t = null, e = null;
    }
  };
  return t = n.createRoot(r), t.render(
    u.createElement(s, {
      ...l,
      onReady: (a) => {
        e = a, l.onReady?.(o);
      }
    })
  ), o;
}
export {
  s as BunshipEditor,
  s as FullEditor,
  V as cloneValue,
  f as createDefaultValue,
  i as mountEditor,
  p as normalizeValue
};
