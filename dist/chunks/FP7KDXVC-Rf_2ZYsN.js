var Pe = Object.defineProperty;
var Qe = (e, a, s) => a in e ? Pe(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[a] = s;
var $ = (e, a, s) => Qe(e, typeof a != "symbol" ? a + "" : a, s);
import { g as Ue, s as P, a as Ze, A as Be } from "./WEVWDWVA-kxUC7Kjw.js";
import { s as Le, T as B } from "./UEXXS2NB-DJl7Gurv.js";
import { x as Ge, H as Je, i as Ne, e as G, L as Xe } from "./lazy-CehDEl4q.js";
import { c as Ye } from "./DKTLEL5E-BCFlW8pF.js";
import { D as He, a as J } from "./HWDLEDTA-Ctstf22F.js";
import { x as c, f as X, $ as je, y as Ve, m as de, a as et } from "./RZSVICHU-DoNHkG46.js";
var tt = class {
  constructor() {
    $(this, "type", "timeline");
    $(this, "title");
    $(this, "accTitle");
    $(this, "accDescr");
    $(this, "direction", "LR");
    $(this, "sections", []);
    $(this, "periods", []);
    $(this, "currentSection", "");
  }
  getCommonDb() {
    return this;
  }
  setDiagramTitle(e) {
    this.title = e;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  setDirection(e) {
    this.direction = e;
  }
  addSection(e) {
    this.currentSection = e, this.sections.push(e);
  }
  addTask(e, a, s) {
    this.periods.push({ text: e, events: s ? [s] : [], section: this.currentSection, sectionIndex: this.sections.length - 1 });
  }
  addEvent(e) {
    let a = this.periods[this.periods.length - 1];
    if (!a) throw new Ge("An event needs a time period before it.", "semantic", { type: "timeline" });
    a.events.push(e);
  }
}, it = ["$end", "EOF", "INVALID", "NEWLINE", "timeline", "timeline_lr", "timeline_td", "title", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "section", "period", "event"];
function rt(e) {
  let a = e.length, s = [], d = [], p = [], v = { types: s, texts: d, starts: p }, r = 0, o = (u, i) => {
    s.push(u), d.push(e.slice(r, i)), p.push(r), r = i;
  };
  for (; r = Ue(e, r), !(r >= a); ) {
    let u = e.charCodeAt(r), i = r + 1;
    if (u === 10) {
      for (; e.charCodeAt(i) === 10; ) i++;
      o(3, i);
      continue;
    }
    if (P(e, r, "timeline")) {
      for (i = r + 8; e.charCodeAt(i) === 32 || e.charCodeAt(i) === 9; ) i++;
      let x = P(e, i, "lr");
      if (i > r + 8 && (x || P(e, i, "td")) && !Ne(e.charCodeAt(i + 2))) {
        o(x ? 5 : 6, i + 2);
        continue;
      }
      if (!Ne(e.charCodeAt(r + 8))) {
        o(4, r + 8);
        continue;
      }
    }
    if (P(e, r, "title") && G(e.charCodeAt(r + 5)) && r + 6 < a && e.charCodeAt(r + 6) !== 10) {
      o(7, Ze(e, r + 6));
      continue;
    }
    if (i = Be(e, r, v, 8), i !== r) {
      r = i;
      continue;
    }
    if (P(e, r, "section") && G(e.charCodeAt(r + 7))) {
      for (i = r + 8; i < a && e.charCodeAt(i) !== 58 && e.charCodeAt(i) !== 10; ) i++;
      if (i > r + 8) {
        o(13, i);
        continue;
      }
    }
    if (u !== 58) {
      i = r + 1;
      for (let x = e.charCodeAt(i); i < a && x !== 35 && x !== 58 && x !== 10; x = e.charCodeAt(++i)) ;
      o(14, i);
      continue;
    }
    if (G(e.charCodeAt(r + 1))) {
      for (i = r + 2; i < a; i++) {
        let x = e.charCodeAt(i);
        if (x === 10 || x === 58 && G(e.charCodeAt(i + 1))) break;
      }
      if (i > r + 2) {
        o(15, i);
        continue;
      }
    }
    o(2, r + 1);
  }
  return (p.length === 0 || p[p.length - 1] < a) && o(1, a), o(0, a), v;
}
var at = "'EOF', 'SPACE', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'period', 'event'";
function st(e, a) {
  let { types: s, texts: d, starts: p } = rt(e), v = (o, u) => {
    let i = s[o] === 0 ? "1" : it[s[o]];
    throw Xe("timeline", e, p[o], `Expecting ${u}, got '${i}'`);
  }, r = s[0];
  r !== 4 && r !== 5 && r !== 6 && v(0, "'timeline', 'timeline_lr', 'timeline_td'"), r !== 4 && a.setDirection(r === 5 ? "LR" : "TD");
  for (let o = 1; ; o++) {
    let u = d[o];
    switch (s[o]) {
      case 3:
        break;
      case 7:
        a.getCommonDb().setDiagramTitle(u.substring(6));
        break;
      case 8:
        a.getCommonDb().setAccTitle(d[++o].trim());
        break;
      case 10:
        a.getCommonDb().setAccDescription(d[++o].trim());
        break;
      case 12:
        a.getCommonDb().setAccDescription(u.trim());
        break;
      case 13:
        a.addSection(u.substring(8));
        break;
      case 14:
        a.addTask(u, 0, "");
        break;
      case 15:
        a.addEvent(u.substring(2));
        break;
      case 1:
        return;
      default:
        v(o, at);
    }
  }
}
var Y = 12, We = 8, ot = 152, nt = 216, lt = 264, T = 20, W = 20, j = 14, Q = 8, me = 8, ee = 12, Fe = ' fill="var(--_bg)"', Oe = ' fill="none" stroke="var(--_b)"';
function fe(e, a, s, d, p) {
  return `<rect x="${c(e)}" y="${c(a)}" width="${c(s)}" height="${c(d)}" rx="${et}"${p}/>`;
}
function ct(e, a, s) {
  return e.direction === "TD" ? Re(e, a, s, !0) : Ye(s, (d) => Re(e, a, s, d));
}
function Re(e, a, s, d) {
  let p = s.fontSize ?? 16, v = Math.round(p * 0.875), r = s.measurer ?? Je(s.fontFamily), o = s.padding ?? 8, u = a.timeline?.disableMulticolor !== !0, i = e.periods, x = e.sections.length > 0, C = e.sections.map((t, n) => ({ section: n, periods: [] })), te = { section: -1, periods: [] };
  i.forEach((t, n) => (C[t.sectionIndex] ?? te).periods.push(n)), te.periods.length > 0 && C.unshift(te);
  let ie = d && s.maxWidth !== void 0 && s.maxWidth > 0 ? s.maxWidth - 2 * o : 1 / 0, pe = W + j * 2 + 4 * Y, U = Math.min(ot, Math.max(80, Math.round((ie - pe) * 0.38))), ge = Math.min(lt, Math.max(110, ie - pe - U)), E = U, re = () => d ? ge : E, F = i.map((t) => Le(t.text, r, p, E)), w = i.map((t) => t.events.map((n) => Le(n, r, v, re()))), S = 0;
  for (let t of F) S = Math.max(S, t.width);
  if (!d) for (let t of w) for (let n of t) S = Math.max(S, n.width);
  let ue = S > E;
  if (d) for (let t of w) for (let n of t) ue || (ue = n.width > ge);
  ue && (E = Math.min(Math.max(Math.ceil(S), U), ie === 1 / 0 ? nt : U), F = i.map((t) => B(t.text, r, p, E)), w = i.map((t) => t.events.map((n) => B(n, r, v, re()))));
  let qe = Math.round(p * 1.5), D = E + 2 * Y, ae = re() + 2 * Y, Z = (t) => Math.max(t.height, qe) + 2 * We, xe = (t) => Math.max(t.height, Math.round(v * 1.5)) + 2 * We, Me = (t, n) => t.section >= 0 ? de(t.section) : x ? "var(--_m)" : de(u ? n : 0), ve = !1;
  for (let t of w) t.length > 0 && (ve = !0);
  let se = 0;
  for (let t of C) se += Math.max(t.periods.length, 1);
  let O = D + T, R = i.length > 0, I = d ? D + (ve ? W + j * 2 + ae : R ? W + ee : 0) : se > 0 ? se * O - T + (R ? ee + J : 0) : 0, q = B(e.title, r, p, Math.max(I, 320), 1), ze = q.height > 0 ? q.height + 16 : 0, _e = Math.max(I, q.width), k = o + (_e - I) / 2, z = o + ze, $e = (t, n) => B(e.sections[t.section], r, p, n - 2 * Y, 1), be = (t, n, m, h, l, g) => fe(m, h, l, g, ` fill="${de(t.section)}"`) + X(n, m + l / 2, h + g / 2, ' font-weight="var(--_hw)"' + Fe), Ae = (t, n, m, h, l) => fe(m, h, D, l, ` fill="${n}"`) + X(F[t], m + D / 2, h + l / 2, Fe), Ce = (t, n, m, h, l) => '<g class="pele-node pele-event">' + fe(m, h, ae, l, ` fill="${n}" fill-opacity="0.16"`) + X(t, m + ae / 2, h + l / 2, ` font-size="${v}"`) + "</g>", we = (t, n, m) => `<circle class="pele-dot" cx="${c(t)}" cy="${c(n)}" r="4" fill="${m}" stroke="var(--_bg)" stroke-width="2"/>`, De = (t) => t.section >= 0 ? `<g class="pele-cluster pele-section" data-id="${Ve(e.sections[t.section].trim())}">` : "", ke = (t) => `<g class="pele-node pele-period" data-id="${Ve(i[t].text.trim())}">`, M = "", oe;
  if (d) {
    let t = k + D + W, n = t + j, m = n + j, h = z;
    for (let l of C) {
      if (M += De(l), l.section >= 0) {
        let g = $e(l, I), _ = Z(g);
        M += be(l, g, k, h, I, _), h += _ + me + 4;
      }
      for (let g of l.periods) {
        let _ = Me(l, g), L = Z(F[g]), f = h + L / 2, b = `M${c(k + D)},${c(f)}H${c(t)}`, N = "", y = h, H = f;
        for (let A of w[g]) {
          let K = xe(A);
          H = y + K / 2, b += `M${c(n)},${c(H)}H${c(m)}`, N += Ce(A, _, m, y, K), y += K + Q;
        }
        N && (b += `M${c(t)},${c(f)}H${c(n)}V${c(H)}`), M += ke(g) + Ae(g, _, k, h, L) + `<path class="pele-edge" d="${b}"${Oe}/>` + we(t, f, _) + N + "</g>", h = Math.max(h + L, y - Q) + T;
      }
      l.periods.length === 0 && (h += T - me - 4), l.section >= 0 && (M += "</g>");
    }
    if (C.length > 0 && (h -= T), R) {
      let l = h + ee + J;
      M = `<path class="pele-axis" d="M${c(t)},${c(z)}V${c(l - J + 1)}" fill="none" stroke="var(--_l)"/>` + He("arrow_point", t, l, 0, 1, "var(--_l)") + M, h = l;
    }
    oe = h + o;
  } else {
    let t = 0, n = C.map((f) => {
      if (f.section < 0) return;
      let b = $e(f, Math.max(f.periods.length, 1) * O - T);
      return t = Math.max(t, Z(b)), b;
    }), m = 0;
    for (let f of F) m = Math.max(m, Z(f));
    let h = z + (x ? t + me : 0), l = h + m + (m > 0 ? W : 0), g = l + W, _ = R ? l + ee : z + t, L = 0;
    if (C.forEach((f, b) => {
      let N = Math.max(f.periods.length, 1), y = k + L * O;
      M += De(f);
      let H = n[b];
      H && (M += be(f, H, y, z, N * O - T, t)), f.periods.forEach((A, K) => {
        let le = Me(f, A), ce = y + K * O, he = ce + D / 2, Te = `M${c(he)},${c(h + m)}V${c(w[A].length > 0 ? g : l)}`, Ee = "", V = g;
        for (let Se of w[A]) {
          let Ie = xe(Se);
          V > g && (Te += `M${c(he)},${c(V - Q)}V${c(V)}`), Ee += Ce(Se, le, ce, V, Ie), V += Ie + Q;
        }
        _ = Math.max(_, V - Q), M += ke(A) + Ae(A, le, ce, h, m) + `<path class="pele-edge" d="${Te}"${Oe}/>` + we(he, l, le) + Ee + "</g>";
      }), f.section >= 0 && (M += "</g>"), L += N;
    }), R) {
      let f = k + I;
      M = `<path class="pele-axis" d="M${c(k)},${c(l)}H${c(f - J + 1)}" fill="none" stroke="var(--_l)"/>` + He("arrow_point", f, l, 1, 0, "var(--_l)") + M;
    }
    oe = _ + o;
  }
  let ne = Math.ceil(_e + 2 * o), ye = Math.ceil(Math.max(oe, o * 2)), Ke = X(q, ne / 2, o + q.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + M;
  return { svg: je("timeline", ne, ye, p, s, e, Ke), width: ne, height: ye, links: [] };
}
var xt = { type: "timeline", parse(e, a, s) {
  let d = new tt();
  return d.title = s, st(e, d), d;
}, render: ct };
export {
  xt as timeline
};
