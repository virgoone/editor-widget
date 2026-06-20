var D = Object.defineProperty;
var P = (t) => {
  throw TypeError(t);
};
var F = (t, i, e) => i in t ? D(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var _ = (t, i, e) => F(t, typeof i != "symbol" ? i + "" : i, e), N = (t, i, e) => i.has(t) || P("Cannot " + e);
var $ = (t, i, e) => (N(t, i, "read from private field"), e ? e.call(t) : i.get(t)), A = (t, i, e) => i.has(t) ? P("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), C = (t, i, e, s) => (N(t, i, "write to private field"), s ? s.call(t, e) : i.set(t, e), e);
import { R as W } from "./client-B4hRd8ix.js";
import { M as U, C as I } from "./mixin-P5CcgD5e.js";
var M;
class k extends U(I) {
  constructor() {
    super(...arguments);
    A(this, M);
  }
  attributeChangedCallback(e, s, n) {
    e !== "src" && super.attributeChangedCallback(e, s, n), e === "src" && s != n && this.load();
  }
  async _initThumbnails(e) {
    const s = async (d, v) => {
      const g = [], h = e.timescale || 1, E = e.startNumber || 1, R = e.presentationTimeOffset ? e.presentationTimeOffset / h : 0, m = e.segmentDuration;
      for (let b = 0; b < d; b++) {
        const y = K({
          thIndex: b,
          thduration: v,
          ttiles: d,
          tduration: m,
          startNumber: E,
          pto: R
        }), S = y + v, f = new Promise((w, a) => {
          this.api.provideThumbnail(y, ({ url: r, width: l, height: p, x: T, y: O }) => {
            try {
              const L = new VTTCue(
                y,
                S,
                `${r}#xywh=${T},${O},${l},${p}`
              );
              w(L);
            } catch (L) {
              a(L);
            }
          });
        });
        g.push(f);
      }
      return await Promise.all(g).catch((b) => console.error("Error processing thumbnails", b));
    }, { totalThumbnails: n, thumbnailDuration: o } = j(e), u = await s(n, o);
    let c = this.nativeEl.querySelector('track[label="thumbnails"]');
    if (!c) {
      c = q(), this.nativeEl.appendChild(c);
      const d = z(u);
      c.src = d, c.dispatchEvent(new Event("change"));
    }
  }
  async load() {
    if ($(this, M)) {
      this.api.attachSource(this.src);
      return;
    }
    C(this, M, !0);
    const e = await import("./dash.all.min-D0CnDcFa.js");
    this.api = e.MediaPlayer().create(), this.api.initialize(this.nativeEl, this.src, this.autoplay), this.api.on(e.MediaPlayer.events.STREAM_INITIALIZED, () => {
      const s = this.api.getRepresentationsByType("video");
      let n = this.videoTracks.getTrackById("main");
      n || (n = this.addVideoTrack("main"), n.id = "main", n.selected = !0), s.forEach((o) => {
        const u = o.bandwidth ?? o.bitrate ?? (Number.isFinite(o.bitrateInKbit) ? o.bitrateInKbit * 1e3 : void 0), c = n.addRendition(o.id, o.width, o.height, o.mimeType ?? o.codec, u);
        c.id = o.id;
      }), this.videoRenditions.addEventListener("change", () => {
        const o = this.videoRenditions[this.videoRenditions.selectedIndex];
        o?.id ? (this.api.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: !1 } } } }), this.api.setRepresentationForTypeById("video", o.id, !0)) : this.api.updateSettings({ streaming: { abr: { autoSwitchBitrate: { video: !0 } } } });
      }), this.api.isDynamic() || this.api.getRepresentationsByType("image").forEach(async (u, c) => {
        c > 0 || this._initThumbnails(u);
      });
    });
  }
}
M = new WeakMap(), _(k, "shadowRootOptions", { ...I.shadowRootOptions }), _(k, "getTemplateHTML", (e) => {
  const { src: s, ...n } = e;
  return I.getTemplateHTML(n);
});
function j(t) {
  var i, e;
  const s = t.essentialProperties[0], [n, o] = s.value.split("x").map(Number), u = n * o, c = ((e = (i = t.adaptation) == null ? void 0 : i.period) == null ? void 0 : e.duration) || null, d = t.segmentDuration, v = t.timescale || 1, h = d / v / u;
  return { totalThumbnails: c != null ? Math.ceil(c / h) : Math.ceil(d / h), thumbnailDuration: h };
}
function K({ thIndex: t, tduration: i, thduration: e, ttiles: s, startNumber: n, pto: o }) {
  const u = Math.floor(t / s) + n, c = t % s + 1, d = (u - 1) * i - o, v = (c - 1) * e;
  return d + v;
}
function q() {
  const t = document.createElement("track");
  return t.kind = "metadata", t.label = "thumbnails", t.srclang = "en", t.mode = "hidden", t.default = !0, t;
}
function z(t) {
  let i = `WEBVTT

`;
  for (const n of t)
    i += `${s(n.startTime)} --> ${s(n.endTime)}
`, i += `${n.text}

`;
  const e = new Blob([i], { type: "text/vtt" });
  return URL.createObjectURL(e);
  function s(n) {
    const o = String(Math.floor(n / 3600)).padStart(2, "0"), u = String(Math.floor(n % 3600 / 60)).padStart(2, "0"), c = (n % 60).toFixed(3).padStart(6, "0");
    return `${o}:${u}:${c}`;
  }
}
globalThis.customElements && !globalThis.customElements.get("dash-video") && globalThis.customElements.define("dash-video", k);
var Z = k, G = /* @__PURE__ */ new Set([
  "style",
  "children",
  "ref",
  "key",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "dangerouslySetInnerHTML"
]), J = {
  className: "class",
  htmlFor: "for"
};
function H(t) {
  return t.toLowerCase();
}
function x(t) {
  if (typeof t == "boolean") return t ? "" : void 0;
  if (typeof t != "function" && !(typeof t == "object" && t !== null))
    return t;
}
function Q({
  react: t,
  tagName: i,
  elementClass: e,
  events: s,
  displayName: n,
  defaultProps: o,
  toAttributeName: u = H,
  toAttributeValue: c = x
}) {
  const d = Number.parseInt(t.version) >= 19, v = t.forwardRef((g, h) => {
    var E, R;
    const m = t.useRef(null), b = t.useRef(/* @__PURE__ */ new Map()), y = {}, S = {}, f = {}, w = {};
    for (const [a, r] of Object.entries(g)) {
      if (G.has(a)) {
        f[a] = r;
        continue;
      }
      const l = u(J[a] ?? a);
      if (e.prototype && a in e.prototype && !(a in (((E = globalThis.HTMLElement) == null ? void 0 : E.prototype) ?? {})) && !((R = e.observedAttributes) != null && R.some((T) => T === l))) {
        w[a] = r;
        continue;
      }
      if (a.startsWith("on")) {
        y[a] = r;
        continue;
      }
      const p = c(r);
      if (l && p != null && (S[l] = String(p), d || (f[l] = p)), l && d) {
        const T = x(r);
        p !== T ? f[l] = p : f[l] = r;
      }
    }
    if (typeof window < "u") {
      for (const a in y) {
        const r = y[a], l = a.endsWith("Capture"), p = (s?.[a] ?? a.slice(2).toLowerCase()).slice(
          0,
          l ? -7 : void 0
        );
        t.useLayoutEffect(() => {
          const T = m?.current;
          if (!(!T || typeof r != "function"))
            return T.addEventListener(p, r, l), () => {
              T.removeEventListener(p, r, l);
            };
        }, [m?.current, r]);
      }
      t.useLayoutEffect(() => {
        if (m.current === null) return;
        const a = /* @__PURE__ */ new Map();
        for (const r in w)
          B(m.current, r, w[r]), b.current.delete(r), a.set(r, w[r]);
        for (const [r, l] of b.current)
          B(m.current, r, void 0);
        b.current = a;
      });
    }
    if (typeof window > "u" && e?.getTemplateHTML && e?.shadowRootOptions) {
      const { mode: a, delegatesFocus: r } = e.shadowRootOptions, l = t.createElement("template", {
        shadowrootmode: a,
        shadowrootdelegatesfocus: r,
        dangerouslySetInnerHTML: {
          __html: e.getTemplateHTML(S, g)
        },
        key: "ce-la-react-ssr-template-shadow-root"
      });
      f.children = [l, f.children];
    }
    return t.createElement(i, {
      ...o,
      ...f,
      ref: t.useCallback(
        (a) => {
          m.current = a, typeof h == "function" ? h(a) : h !== null && (h.current = a);
        },
        [h]
      )
    }, f.children);
  });
  return v.displayName = n ?? e.name, v;
}
function B(t, i, e) {
  var s;
  t[i] = e, e == null && i in (((s = globalThis.HTMLElement) == null ? void 0 : s.prototype) ?? {}) && t.removeAttribute(i);
}
var tt = Q({
  react: W,
  tagName: "dash-video",
  elementClass: Z,
  toAttributeName(t) {
    return t === "muted" ? "" : t === "defaultMuted" ? "muted" : H(t);
  }
});
export {
  tt as default
};
