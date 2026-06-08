import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./chunks/client-4Scz1xLl.js";
//#region src/mount.tsx
var s = o(), c = a();
function l(e, t = {}) {
	let r = null, i = null, a = {
		getValue: () => i?.getValue() ?? [],
		setValue: (e) => i?.setValue(e),
		focus: () => i?.focus(),
		destroy: () => {
			r?.unmount(), r = null, i = null;
		}
	};
	return r = (0, s.createRoot)(e), r.render(/* @__PURE__ */ (0, c.jsx)(n, {
		...t,
		onReady: (e) => {
			i = e, t.onReady?.(a);
		}
	})), a;
}
//#endregion
export { n as BunshipEditor, i as cloneValue, t as createDefaultValue, l as mountEditor, e as normalizeValue, r as valueToMarkdown };
