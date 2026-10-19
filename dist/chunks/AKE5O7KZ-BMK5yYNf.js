var it = Object.defineProperty;
var lt = (t, e, a) => e in t ? it(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var ye = (t, e, a) => lt(t, typeof e != "symbol" ? e + "" : e, a);
import { x as rt, D as st, M as ot, $ as ct, v as ft, w as ht, V as pt, W as $t, G as mt, O as dt, P as ut, j as He, Y as gt, z as yt, U as bt, H as wt } from "./VMV7XPHP-EL-PB13G.js";
import { D as xt, w as We } from "./HWDLEDTA-Ctstf22F.js";
import { _ as Y, x as i, m as je, f as q, $ as Mt, a as kt, y as vt } from "./RZSVICHU-DoNHkG46.js";
import { H as _t } from "./lazy-CehDEl4q.js";
var St = class {
  constructor() {
    ye(this, "domains", /* @__PURE__ */ new Map());
    ye(this, "transitions", []);
  }
  setDomains(t) {
    if (t) for (let e of t) {
      let a = e.domain;
      this.domains.set(a, { name: a, items: (e.items ?? []).map((o) => ({ label: o.label })) });
    }
  }
  setTransitions(t) {
    t && (this.transitions = t.filter((e) => e.from !== e.to).map((e) => ({ from: e.from, to: e.to, label: e.label || void 0 })));
  }
};
function Dt(t, e) {
  let a = new St();
  return a.setDomains(t.domains), a.setTransitions(t.transitions), { type: "cynefin", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, domains: a.domains, transitions: a.transitions };
}
var Ge = [{ name: "cynefin-beta:", pattern: "cynefin-beta:" }, wt("cynefin-beta"), { name: "-->", pattern: "-->" }, { name: ":", pattern: ":" }, { name: "DOMAIN_NAME", pattern: /complex|complicated|clear|chaotic|confusion/y }, ot, ct, ft, ht, pt, $t, mt, dt, ut];
function Ct(t) {
  let e = new rt(st(t, Ge, "cynefin"), Ge, "cynefin"), a = { $type: "Cynefin", domains: [], transitions: [] }, o = () => {
    for (; e.kinds[e.i] === 9; ) e.i++;
  }, f = () => {
    e.kind !== -1 && (e.kind !== 9 && e.fail("a line break or the end of input"), o());
  };
  for (o(), e.kind !== 1 && e.kind !== 0 && e.fail("'cynefin-beta'"), e.i++; e.kind !== -1; ) switch (e.kind) {
    case 9:
      e.i++;
      break;
    case 5:
      a.accDescr = bt(e.take()), f();
      break;
    case 6:
      a.accTitle = yt(e.take()), f();
      break;
    case 7:
      a.title = gt(e.take()), f();
      break;
    case 4: {
      let h = e.take();
      if (e.accept(2)) {
        let p = { $type: "Transition", from: h, to: e.expect(4) };
        e.accept(3) && (p.label = He(e.expect(8))), f(), a.transitions.push(p);
        break;
      }
      let b = { $type: "DomainBlock", domain: h, items: [] };
      for (o(); e.kinds[e.i] === 8; ) b.items.push({ $type: "DomainItem", label: He(e.take()) }), o();
      a.domains.push(b);
      break;
    }
    default:
      e.fail("a domain, a transition, a title, or a line break");
  }
  return a;
}
function Ie(t) {
  let e = t + 1831565813 | 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function At(t) {
  let e = 0;
  for (let a = 0; a < t.length; a++) e = (e << 5) - e + t.charCodeAt(a), e |= 0;
  return e;
}
function Tt(t, e) {
  return typeof t == "number" && Number.isFinite(t) && t !== 0 ? t : At(e);
}
var Et = { segments: 7, vertical: !0, pointStep: 17, controlStep: 31, controlShift: 7 }, Qe = { segments: 7, vertical: !1, pointStep: 23, controlStep: 37, controlShift: 11 };
function be(t, e, a, o, f, h) {
  let b = (e - t) / h.segments, p = [], g = [];
  for (let c = 0; c <= h.segments; c++) {
    let w = c === 0 && h.pinStart || c === h.segments && h.pinEnd;
    p.push(t + c * b), g.push(w ? a : a + Ie(o + c * h.pointStep) * f * 2 - f);
  }
  let F = h.vertical ? [g[0], p[0]] : [p[0], g[0]];
  for (let c = 0; c < h.segments; c++) {
    let w = (p[c] + p[c + 1]) / 2, P = f * 1.5 * (c % 2 === 0 ? 1 : -1) * Ie(o + c * h.controlStep + h.controlShift);
    h.vertical ? F.push(g[c] + P, w, g[c + 1] - P, w, g[c + 1], p[c + 1]) : F.push(w, g[c] + P, w, g[c + 1] - P, p[c + 1], g[c + 1]);
  }
  return F;
}
function Lt(t, e, a, o) {
  let f = a - e;
  return [t, e, t + o, e + f * 0.2, t - o * 1.5, e + f * 0.55, t + o * 0.5, e + f * 0.75, t - o, e + f * 0.85, t + o * 0.3, e + f * 0.95, t, a];
}
function J(t) {
  let e = "";
  for (let a = 2; a < t.length; a += 6) e += `C${i(t[a])},${i(t[a + 1])} ${i(t[a + 2])},${i(t[a + 3])} ${i(t[a + 4])},${i(t[a + 5])}`;
  return e;
}
function re(t) {
  let e = "";
  for (let a = t.length - 6; a >= 2; a -= 6) e += `C${i(t[a + 2])},${i(t[a + 3])} ${i(t[a])},${i(t[a + 1])} ${i(t[a - 2])},${i(t[a - 1])}`;
  return e;
}
function se(t) {
  return `M${i(t[0])},${i(t[1])}${J(t)}`;
}
function Pt(t, e, a, o) {
  let f = `${i(a)},${i(o)}`;
  return `M${i(t - a)},${i(e)}A${f} 0 1,1 ${i(t + a)},${i(e)}A${f} 0 1,1 ${i(t - a)},${i(e)}Z`;
}
var we = [["complex", 0, 0, 0], ["complicated", 1, 0, 1], ["chaotic", 0, 1, 3], ["clear", 1, 1, 2]], Zt = 4, Nt = /* @__PURE__ */ new Map([["complex", ["Complex", "Probe → Sense → Respond", "Emergent Practices"]], ["complicated", ["Complicated", "Sense → Analyse → Respond", "Good Practices"]], ["clear", ["Clear", "Sense → Categorise → Respond", "Best Practices"]], ["chaotic", ["Chaotic", "Act → Sense → Respond", "Novel Practices"]], ["confusion", ["Confusion", "", "Disorder"]]]), Ue = 3, Ve = 200, zt = 10, Rt = 4, oe = 6, Ye = 10, qe = 20, ce = 10;
function fe(t, e, a, o, f) {
  let h = t.cynefin?.[e];
  return typeof h == "number" && h >= o && h <= f ? h : a;
}
function Bt(t, e, a) {
  let o = a.fontSize ?? 16, f = Math.round(o * 0.8125), h = Math.round(o * 0.875), b = a.measurer ?? _t(a.fontFamily), p = a.padding ?? 8, g = a.icons, F = e.cynefin?.showDomainDescriptions !== !1, c = fe(e, "boundaryAmplitude", 8, 0, 50), w = Tt(fe(e, "seed", 0, -1e15, 1e15), a.idPrefix ?? "pele"), P = Math.round(h * 1.5), xe = (n, l) => {
    let r = Y(n, !1, b, h, Ve);
    return { text: n, label: r, w: r.width + 2 * zt, h: Math.max(r.height, P) + 2 * Rt, overflow: l };
  }, Me = (n) => {
    let l = Nt.get(n), r = Y(l[0], !1, b, o, 4e3, 1), s = [];
    if (F) for (let d of [l[1], l[2]]) d && s.push(Y(d, !1, b, f, 4e3, 2));
    let $ = t.domains.get(n)?.items ?? [], T = n === "confusion" && $.length > Ue ? Ue : $.length, x = [];
    for (let d = 0; d < T; d++) x.push(xe($[d].label, !1));
    T < $.length && x.push(xe(`+${$.length - T} more`, !0));
    let D = r.width, E = r.height;
    for (let d of s) D = Math.max(D, d.width), E += d.height;
    x.length > 0 && (E += Ye - oe);
    for (let d of x) D = Math.max(D, d.w), E += oe + d.h;
    return { name: n, title: r, subtitles: s, badges: x, w: D, h: E, cx: 0, cy: 0 };
  }, he = we.map(([n]) => Me(n)), k = Me("confusion"), H = Math.max(88, k.w * 0.71 + 8), W = Math.max(64, k.h * 0.71 + 6), v = fe(e, "width", 640, 100, 1e4) / 2, _ = fe(e, "height", 440, 100, 1e4) / 2;
  for (let n of he) v = Math.max(v, n.w + 2 * qe), _ = Math.max(_, n.h + 2 * qe);
  for (let n of he) {
    let l = (v - n.w) / 2, r = (_ - n.h) / 2;
    if ((l / (H + ce)) ** 2 + (r / (W + ce)) ** 2 >= 1) continue;
    let s = n.w + 2 * (H + ce), $ = n.h + 2 * (W + ce);
    s * _ <= v * $ ? v = Math.max(v, s) : _ = Math.max(_, $);
  }
  let j = Y(t.title, !1, b, o, 4e3, 1), ke = j.height > 0 ? j.height + 12 : 0, K = 2 * v, ve = 2 * _, S = p, Z = p + ke, C = S + v, A = Z + _, X = S + K, pe = Z + ve, G = be(Z, A, C, w, c, { ...Et, segments: 4, pinEnd: !0 }), ee = be(S, C, A, w + 100, c, { ...Qe, segments: 4, pinEnd: !0 }), I = be(C, X, A, w + 200, c, { ...Qe, segments: 4, pinStart: !0 }), te = Lt(C, A, pe, K * 0.03), N = (n, l) => l ? `${i(n[n.length - 2])},${i(n[n.length - 1])}` : `${i(n[0])},${i(n[1])}`, Je = /* @__PURE__ */ new Map([["complex", `M${i(S)},${i(Z)}L${N(G, !1)}${J(G)}${re(ee)}Z`], ["complicated", `M${N(G, !1)}L${i(X)},${i(Z)}L${N(I, !0)}${re(I)}${re(G)}Z`], ["chaotic", `M${N(ee, !1)}${J(ee)}${J(te)}L${i(S)},${i(pe)}Z`], ["clear", `M${N(I, !1)}${J(I)}L${i(X)},${i(pe)}L${N(te, !0)}${re(te)}Z`]]), _e = "";
  for (let [n, , , l] of we) _e += `<path class="pele-cynefin-region" data-id="${n}" d="${Je.get(n)}" fill="${je(l)}" fill-opacity="0.14"/>`;
  let Ke = `<g class="pele-cynefin-boundaries" fill="none" stroke="var(--_b)" stroke-dasharray="6 3"><path d="${se(G)}"/><path d="${se(ee)}"/><path d="${se(I)}"/><path class="pele-cynefin-cliff" d="${se(te)}" stroke="var(--_l)" stroke-width="2" stroke-dasharray="none" stroke-linecap="round"/></g>`, Se = Pt(C, A, H, W), Xe = `<path d="${Se}" fill="var(--_bg)"/><path class="pele-cynefin-region" data-id="confusion" d="${Se}" fill="${je(Zt)}" fill-opacity="0.18" stroke="var(--_b)" stroke-dasharray="4 2"/>`, De = (n) => {
    let l = n.cy - n.h / 2, r = q(n.title, n.cx, l + n.title.height / 2, ' class="pele-label" font-weight="var(--_hw)"');
    l += n.title.height;
    for (let s of n.subtitles) r += q(s, n.cx, l + s.height / 2, ` class="pele-cynefin-subtitle" font-size="${f}" font-style="italic" fill="var(--_m)"`), l += s.height;
    l += Ye - oe;
    for (let s of n.badges) l += oe, r += `<g class="pele-node${s.overflow ? " pele-cynefin-overflow" : ""}"${s.overflow ? "" : ` data-id="${vt(s.text)}"`}><rect x="${i(n.cx - s.w / 2)}" y="${i(l)}" width="${i(s.w)}" height="${i(s.h)}" rx="${kt}" fill="var(--_bg)" stroke="var(--_b)"${s.overflow ? ' stroke-dasharray="3 2"' : ""}/>` + q(s.label, n.cx, l + s.h / 2, ` class="pele-label" font-size="${h}"${s.overflow ? ' fill="var(--_m)"' : ""}`, g) + "</g>", l += s.h;
    return `<g class="pele-cynefin-domain" data-id="${n.name}">${r}</g>`;
  }, ae = /* @__PURE__ */ new Map(), $e = "";
  we.forEach(([n, l, r], s) => {
    let $ = he[s];
    $.cx = S + v * (l + 0.5), $.cy = Z + _ * (r + 0.5), ae.set(n, $), $e += De($);
  }), k.cx = C, k.cy = A, ae.set("confusion", k), $e += De(k);
  let me = (n, l, r) => n === k ? ((l - C) / (H + 4)) ** 2 + ((r - A) / (W + 4)) ** 2 <= 1 : Math.abs(l - n.cx) <= n.w / 2 + 8 && Math.abs(r - n.cy) <= n.h / 2 + 8, de = "", Ce = /* @__PURE__ */ new Map();
  for (let n of t.transitions) {
    let l = ae.get(n.from), r = ae.get(n.to);
    if (!l || !r || l === r) continue;
    let s = n.from < n.to ? `${n.from} ${n.to}` : `${n.to} ${n.from}`, $ = Ce.get(s) ?? 0;
    Ce.set(s, $ + 1);
    let T = r.cx - l.cx, x = r.cy - l.cy, D = Math.hypot(T, x) || 1, E = (l.cx + r.cx) / 2, d = (l.cy + r.cy) / 2, Ee = -x * (E - C) + T * (d - A) >= 0 ? 1 : -1, ne = -x / D * Ee, ie = T / D * Ee, Le = (l !== k && r !== k && Math.abs(T) > 1 && Math.abs(x) > 1 ? 2 * (Math.hypot(H * ne, W * ie) + 16) : D * 0.15) + $ * 56, Pe = E + ne * Le, Ze = d + ie * Le, z = (m) => {
      let u = 1 - m;
      return [u * u * l.cx + 2 * u * m * Pe + m * m * r.cx, u * u * l.cy + 2 * u * m * Ze + m * m * r.cy];
    }, Ne = (m, u, L, le) => {
      for (let O = 0; O < 16; O++) {
        let V = (u + L) / 2;
        me(m, ...z(V)) === le ? u = V : L = V;
      }
      return (u + L) / 2;
    }, M = 48, y = 1;
    for (; y <= M && me(l, ...z(y / M)); ) y++;
    if (y > M) continue;
    let R = Ne(l, (y - 1) / M, y / M, !0);
    for (; y <= M && !me(r, ...z(y / M)); ) y++;
    let B = y > M ? 1 : Ne(r, (y - 1) / M, y / M, !1), [tt, at] = z(R), [Q, U] = z(B), ze = (m, u, L) => (1 - R) * (1 - B) * m + ((1 - R) * B + R * (1 - B)) * u + R * B * L, ue = ze(l.cx, Pe, r.cx), ge = ze(l.cy, Ze, r.cy), Re = Math.hypot(Q - ue, U - ge) || 1, Be = (Q - ue) / Re, Oe = (U - ge) / Re, nt = xt("arrow_point", Q, U, Be, Oe, "var(--_l)");
    Q -= Be * We("arrow_point"), U -= Oe * We("arrow_point");
    let Fe = "";
    if (n.label) {
      let m = Y(n.label, !1, b, f, Ve), [u, L] = z((R + B) / 2), le = Math.abs(ne) * m.width / 2 + Math.abs(ie) * m.height / 2 + 6, O = m.width / 2 + 4, V = Math.min(Math.max(u + ne * le, S + O), Math.max(X - O, S + O));
      Fe = q(m, V, L + ie * le, ` class="pele-edge-label" font-size="${f}"`, g);
    }
    de += `<g class="pele-edge" data-id="${n.from}-${n.to}"><path d="M${i(tt)},${i(at)}Q${i(ue)},${i(ge)} ${i(Q)},${i(U)}" fill="none" stroke="var(--_l)"/>` + nt + Fe + "</g>";
  }
  let Ae = Math.ceil(Math.max(K, j.width) + 2 * p), Te = Math.ceil(ve + ke + 2 * p), et = q(j, S + K / 2, p + j.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g class="pele-cynefin-regions">${_e}</g>` + Ke + Xe + $e + (de ? `<g class="pele-edges">${de}</g>` : "");
  return { svg: Mt("cynefin", Ae, Te, o, a, t, et), width: Ae, height: Te, links: [] };
}
var Gt = { type: "cynefin", parse: (t, e, a) => Dt(Ct(t), a), render: Bt };
export {
  Gt as cynefin
};
