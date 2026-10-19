import { s as tt } from "./5THPTBWS-DHWr3hlB.js";
import { H as et } from "./KQOEJWJY-XpoKsT0f.js";
import { c as at, h as rt } from "./DKTLEL5E-BCFlW8pF.js";
import { x as it, D as lt, G as X, M as st, $ as ot, v as nt, w as ct, V as ht, W as ft, O as dt, P as pt, j as bt, Y as mt, z as $t, U as kt, H as xt } from "./VMV7XPHP-EL-PB13G.js";
import { _ as gt, a as ut, x as $, f as A, b as Mt, $ as wt } from "./RZSVICHU-DoNHkG46.js";
import { x as vt, H as yt, $ as L } from "./lazy-CehDEl4q.js";
var Pt = 1e4;
function R(e, t, a, r, i) {
  let p = e.packet?.[t];
  return typeof p == "number" && p >= r ? Math.min(p, i) : a;
}
function N(e) {
  return new vt(e, "semantic", { type: "packet" });
}
function zt(e, t, a) {
  let r = Math.floor(R(t, "bitsPerRow", 32, 1, 4096)), i = [], p = -1, k = [], y = 1;
  for (let x of e.blocks) {
    let { start: s, end: b, bits: h } = x;
    if (s !== void 0 && b !== void 0 && b < s) throw N(`Packet block ${s} - ${b} is invalid. End must be greater than start.`);
    if (s ?? (s = p + 1), s !== p + 1) throw N(`Packet block ${s} - ${b ?? s} is not contiguous. It should start from ${p + 1}.`);
    if (h === 0) throw N(`Packet block ${s} is invalid. Cannot have a zero bit field.`);
    for (b ?? (b = s + (h ?? 1) - 1), h ?? (h = b - s + 1), p = b; k.length <= r + 1 && i.length < Pt; ) {
      let w = y * r - 1;
      if (b <= w) {
        k.push({ start: s, end: b, bits: h, label: x.label }), b === w && (i.push(k), k = [], y++);
        break;
      }
      k.push({ start: s, end: w, bits: w - s, label: x.label }), i.push(k), k = [], y++, s = w + 1, h = b - s;
    }
  }
  return k.length > 0 && i.push(k), { type: "packet", title: e.title || a, accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0, accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, `
`) : void 0, bitsPerRow: r, rows: i };
}
var S = [{ name: "packet-beta", pattern: "packet-beta" }, xt("packet"), { name: "-", pattern: "-", longer: [X] }, { name: "+", pattern: "+" }, { name: ":", pattern: ":" }, st, ot, nt, { name: "INT", pattern: /0|[1-9][0-9]*(?!\.)/y }, ct, ht, ft, X, dt, pt];
function Ht(e) {
  let t = new it(lt(e, S, "packet"), S, "packet"), a = { $type: "Packet", blocks: [] }, r = () => {
    if (t.kind !== -1) for (t.kind !== 10 && t.fail("a line break or the end of input"); t.kind === 10; ) t.i++;
  };
  for (; t.kind === 10; ) t.i++;
  for (t.accept(0) || t.expect(1); t.kind !== -1; ) switch (t.kind) {
    case 10:
      t.i++;
      break;
    case 5:
      a.accDescr = kt(t.take()), r();
      break;
    case 6:
      a.accTitle = $t(t.take()), r();
      break;
    case 7:
      a.title = mt(t.take()), r();
      break;
    case 8:
    case 3: {
      let i = { $type: "PacketBlock", label: "" };
      t.accept(3) ? i.bits = Number(t.expect(8)) : (i.start = Number(t.take()), t.accept(2) && (i.end = Number(t.expect(8)))), t.expect(4), i.label = bt(t.expect(9)), a.blocks.push(i), r();
      break;
    }
    default:
      t.fail("a field, a title, or a line break");
  }
  return a;
}
function Rt(e, t, a) {
  return at(a, (r) => Tt(e, t, a, r));
}
function Tt(e, t, a, r) {
  let i = a.fontSize ?? 16, p = Math.round(i * 0.875), k = Math.round(i * 0.625), y = a.measurer ?? yt(a.fontFamily), x = a.padding ?? 8, s = t.packet ?? {}, b = R(t, "rowHeight", 32, 1, 400), h = R(t, "bitWidth", 32, 1, 400), w = R(t, "paddingX", 5, 0, 400), C = R(t, "paddingY", 5, 0, 400), I = s.showBits !== !1, _ = s.bitOrder === "descending", g = e.bitsPerRow, v = e.rows;
  if (r) {
    let m = Math.max(1, Math.floor(((a.maxWidth ?? 320) - 2 * x) / Math.min(h, 18)));
    g = Math.min(g, Math.max(8, 2 ** Math.floor(Math.log2(m))));
    let l = e.rows[e.rows.length - 1], o = l?.[l.length - 1]?.end ?? 0;
    Math.ceil((o + 1) / g) > 1e4 && (g = e.bitsPerRow), h = Math.min(h, Math.max(18, ((a.maxWidth ?? 320) - 2 * x) / g));
    let u = (d) => d.bits === d.end - d.start, c = [];
    for (let d of e.rows) for (let f of d) {
      let n = c[c.length - 1];
      n && u(n) && u(f) && n.label === f.label && f.start === n.end + 1 && f.start % e.bitsPerRow === 0 ? (n.end = f.end, n.bits = n.end - n.start) : c.push({ ...f });
    }
    v = [];
    for (let d of c) for (let f = d.start; f <= d.end; ) {
      let n = Math.min(d.end, (Math.floor(f / g) + 1) * g - 1), M = Math.floor(f / g);
      (v[M] ?? (v[M] = [])).push({ ...d, start: f, end: n }), f = n + 1;
    }
  }
  let D = /* @__PURE__ */ new Map();
  if (r) for (let m of v) for (let l of m) {
    let o = Math.max(1, (l.end - l.start + 1) * h - Math.min(w, h - 1) - 6), u = et(L(l.label).trim(), y, p, o);
    D.set(l, u);
  }
  let O = I ? k + 4 : 0, Y = v.map((m) => {
    let l = b;
    if (r) for (let o of m) l = Math.max(l, D.get(o).height + 10);
    return l;
  }), j = [], H = 0;
  for (let m of Y) j.push(H), H += O + m + C;
  v.length && (H -= C);
  let F = Math.min(w, h - 1), G = v.length > 0 ? g * h - F : 0, P = gt(e.title, !1, y, i, r ? rt(a) : 4e3, 1), q = P.height > 0 ? P.height + (H > 0 ? 12 : 0) : 0, U = /* @__PURE__ */ new Map(), J = (m, l) => {
    let o = U.get(m);
    return o || U.set(m, o = /* @__PURE__ */ new Map()), o.has(l) || o.set(l, tt(L(m).trim(), l, p, Math.round(i * 0.5), y)), o.get(l);
  }, K = x + Math.max(0, (P.width - G) / 2), W = "", T = "";
  v.forEach((m, l) => {
    let o = x + j[l] + O, u = Y[l];
    for (let c of m) {
      let d = c.end - c.start + 1, f = c.start % g, n = K + (_ ? g - f - d : f) * h, M = d * h - F, z = r ? void 0 : J(c.label, M - 6);
      if (W += `<g class="pele-node" data-id="${c.start}-${c.end}"><rect x="${$(n)}" y="${$(o)}" width="${$(M)}" height="${$(u)}" rx="${ut}" fill="var(--_s)" stroke="var(--_b)"/>` + (r ? A(D.get(c), n + M / 2, o + u / 2, "") : z && z.size <= u ? `<text x="${$(n + M / 2)}" y="${$(o + u / 2 + z.size * 0.35)}"${z.size === p ? "" : ` font-size="${$(z.size)}"`}>${Mt(z.text)}</text>` : "") + "</g>", !I) continue;
      let V = _ ? c.end : c.start, Z = _ ? c.start : c.end;
      d === 1 ? T += `<text x="${$(n + M / 2)}" y="${$(o - 4)}" text-anchor="middle">${V}</text>` : T += `<text x="${$(n)}" y="${$(o - 4)}">${V}</text><text x="${$(n + M)}" y="${$(o - 4)}" text-anchor="end">${Z}</text>`;
    }
  });
  let B = Math.ceil(Math.max(G, P.width) + 2 * x), E = Math.ceil(H + q + 2 * x), Q = (W ? `<g class="pele-packet-fields" font-size="${p}" text-anchor="middle">${W}</g>` : "") + (T ? `<g class="pele-packet-bits" font-size="${k}" fill="var(--_m)">${T}</g>` : "") + A(P, B / 2, E - x - P.height / 2, ' class="pele-title" font-weight="var(--_tw)"');
  return { svg: wt("packet", B, E, i, a, e, Q), width: B, height: E, links: [] };
}
var Ct = { type: "packet", parse: (e, t, a) => zt(Ht(e), t, a), render: Rt };
export {
  Ct as packet
};
