var It = Object.defineProperty;
var Lt = (n, s, i) => s in n ? It(n, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[s] = i;
var I = (n, s, i) => Lt(n, typeof s != "symbol" ? s + "" : s, i);
import { W as zt, Y as Nt, X as St } from "./N6DAJLIZ-DUNMteWg.js";
import { P as Tt, V as rt, E as wt } from "./URA2L2QI-BZvG0umE.js";
import { c as Vt, h as Xt } from "./DKTLEL5E-BCFlW8pF.js";
import { _ as yt, m as ut, x as h, h as Ct, y as Et, f as et, $ as Qt } from "./RZSVICHU-DoNHkG46.js";
import { x as Rt, H as Ut, W as Yt } from "./lazy-CehDEl4q.js";
var qt = 11, Bt = class {
  constructor() {
    I(this, "type", "mindmap");
    I(this, "title");
    I(this, "nodes", []);
    I(this, "getType", zt);
    I(this, "baseLevel", 0);
    I(this, "open", []);
  }
  addNode(n, s, i, f) {
    let M = this.nodes.length === 0;
    M && (this.baseLevel = n), n -= this.baseLevel;
    let u = this.open, g = u.length;
    for (; g > 0 && u[g - 1].level >= n; ) g--;
    let x = u[g - 1];
    if (!x && !M) throw new Rt(`There can be only one root. No parent could be found for ("${i}")`, "semantic", { type: "mindmap" });
    let b = { id: this.nodes.length, nodeId: s, level: n, descr: i, type: f, children: [], isRoot: M };
    x && (b.section = x.isRoot ? x.children.length % qt : x.section, x.children.push(b)), u.length = g, u.push(b), this.nodes.push(b);
  }
  decorateNode(n) {
    let s = this.nodes[this.nodes.length - 1];
    !n || !s || (n.icon && (s.icon = n.icon), n.class && (s.class = n.class));
  }
};
function Dt(n, s) {
  Nt(n, s, !1);
}
var Gt = ["", "rounded", "rect", "circle", "cloud", "bang", "hex"], Mt = "stadium", Jt = 36, Kt = 8, Pt = 18, Zt = 52, xt = 28, At = 6, jt = 12, Ot = 0.22, at = 6, ot = 28, bt = 12, vt = 8, Ft = 10;
function te(n, s, i, f) {
  if (n.lines.length < 2) return et(n, s + n.width / 2, i, ' class="pele-label"', f);
  let M = "";
  for (let u = 0; u < n.lines.length; u++) {
    let g = n.widths[u], x = { lines: [n.lines[u]], widths: [g], height: n.lineHeight, size: n.size, lineHeight: n.lineHeight };
    M += et(x, s + g / 2, i + (u - (n.lines.length - 1) / 2) * n.lineHeight, ' class="pele-label"', f);
  }
  return M;
}
function ee(n, s, i) {
  return Vt(i, (f) => le(n, s, i, f));
}
function le(n, s, i, f) {
  let M = i.fontSize ?? 16, u = i.measurer ?? Ut(i.fontFamily), g = i.padding ?? 8, x = i.icons, b = s.mindmap?.maxNodeWidth, kt = typeof b == "number" && b > 0 ? Math.min(b, 2e3) : 200, X = M * 1.25, v = n.nodes, r = v.length, W = new Int32Array(r), B = new Int32Array(r);
  for (let e = 0; e < r; e++) for (let t of v[e].children) W[t.id] = e, B[t.id] = B[e] + 1;
  let Ht = f && i.maxWidth !== void 0 && i.maxWidth > 0 ? i.maxWidth - 2 * g : 1 / 0, ht = new Array(r), D = new Array(r), c = new Float64Array(r), $ = new Float64Array(r), G = new Float64Array(r), F = new Float64Array(r), J = new Uint8Array(r);
  for (let e = 0; e < r; e++) {
    let t = v[e];
    J[e] = t.icon !== void 0 && Yt(t.icon) !== "" ? 1 : 0;
    let d = Math.min(kt, Math.max(72, Ht - B[e] * ot - 2 * At - (J[e] ? X + at : 0))), a = ht[e] = yt(t.descr, !0, u, M, d), w = a.width + (J[e] ? X + (a.width > 0 ? at : 0) : 0), y = Math.max(a.height, Math.round(M * 1.5)), l = Gt[t.type] || (e === 0 ? Mt : "");
    if (f && e === 0 && l !== "rect" && l !== "rounded" && (l = Mt), D[e] = l, l === "") {
      let o = t.children.length > 0;
      c[e] = w + 2 * (o ? jt : At), $[e] = y + (o ? 6 : 0), F[e] = $[e] / 2;
    } else {
      let o = Tt(l, w, y);
      c[e] = o.w, $[e] = o.h, G[e] = o.dy, F[e] = o.h / 2;
    }
  }
  let C = new Float64Array(r), E = new Float64Array(r), K = new Float64Array(r), st = new Float64Array(r), dt = 0, ct = (e, t, d, a) => {
    let w = 0, y = 0;
    for (let m = t; m < d; m++) {
      let A = e[m].id;
      E[A] = w, y = e[m].children.length > 0 || m + 1 < d && e[m + 1].children.length > 0 ? Math.max(a, Pt) : a, w += C[A] + y;
    }
    dt = w - y;
    let l = e[t].id, o = e[d - 1].id;
    return (E[l] + K[l] + F[l] + E[o] + K[o] + F[o]) / 2;
  };
  for (let e = r - 1; e > 0; e--) {
    let t = v[e].children;
    if (t.length === 0) {
      C[e] = $[e];
      continue;
    }
    let d = ct(t, 0, t.length, Kt) - F[e], a = Math.min(0, d);
    C[e] = Math.max(dt, d + $[e]) - a, K[e] = d - a, st[e] = -a;
  }
  let L = new Float64Array(r), z = new Float64Array(r), P = new Float64Array(r), Q = new Int8Array(r), $t = new Float64Array(r);
  if (f) {
    let e = 0;
    for (let t = 0; t < r; t++) t > 0 && W[t] === 0 && (e += Ft), L[t] = B[t] * ot + c[t] / 2, z[t] = e, e += $[t] + Ft;
  } else if (r > 0) {
    let e = v[0].children, t = e.length, d = 0;
    for (let l of e) d += C[l.id];
    let a = t, w = 1 / 0, y = 0;
    for (let l = 1; l < t; l++) {
      y += C[e[l - 1].id];
      let o = Math.abs(2 * y - d + (2 * l - t) * xt);
      o < w && (w = o, a = l);
    }
    for (let l = 0, o = a, m = 1; l < t; l = o, o = t, m = -1) {
      let A = ct(e, l, o, xt);
      for (let k = l; k < o; k++) {
        let S = e[k].id;
        P[S] = E[S] - A, Q[S] = m;
      }
    }
    z[0] = -$[0] / 2;
    for (let l = 0; l < r; l++) {
      l > 0 && (z[l] = P[l] + K[l]);
      for (let o of v[l].children) {
        let m = o.id;
        l > 0 && (Q[m] = Q[l], P[m] = P[l] + st[l] + E[m]), L[m] = L[l] + Q[m] * (c[l] / 2 + (l > 0 ? Jt : Zt) + c[m] / 2);
      }
    }
  }
  let R = 0, Z = 0, j = 0, lt = 0, nt = "", O = "", tt = "", N = "", Wt = (e) => {
    tt !== "" && (nt += `<g class="pele-branch pele-section-${e ?? 0}"><g class="pele-edges" fill="none" stroke="${N}" stroke-width="1.5">${O}</g>${tt}</g>`, O = tt = "");
  };
  for (let e = 1; e <= r; e++) {
    let t = e % r, d = v[t], a = D[t], w = ht[t], y = L[t], l = z[t];
    if (R = Math.min(R, y - c[t] / 2), Z = Math.max(Z, y + c[t] / 2), j = Math.min(j, l), lt = Math.max(lt, l + $[t]), (t === 0 || W[t] === 0) && Wt(v[e - 1].section), t > 0 && f) {
      W[t] === 0 && (N = ut(d.section ?? 0));
      let p = W[t], T = p === 0 ? Math.min(Math.max(bt, $[0] / 2), ot - vt) : bt, _ = L[p] - c[p] / 2 + Math.min(T, c[p] / 2), Y = $t[p] || z[p] + $[p], q = y - c[t] / 2 + (a ? rt(a, c[t], $[t], 3) : 0), H = l + F[t], V = Math.max(0, Math.min(vt, q - _, H - Y));
      $t[p] = H - V, O += `<path class="pele-edge" d="M${h(_)},${h(Y)}V${h(H - V)}Q${h(_)},${h(H)} ${h(_ + V)},${h(H)}H${h(q)}"/>`;
    } else if (t > 0) {
      W[t] === 0 && (N = ut(d.section ?? 0));
      let p = W[t], T = Q[t], _ = T > 0 ? 1 : 3, Y = L[p] + T * (c[p] / 2 - (D[p] ? rt(D[p], c[p], $[p], _) : 0)), q = z[p] + F[p], H = y - T * c[t] / 2 + (a ? T * rt(a, c[t], $[t], 4 - _) : 0), V = l + F[t], gt = h((Y + H) / 2);
      O += `<path class="pele-edge" d="M${h(Y)},${h(q)}C${gt},${h(q)} ${gt},${h(V)} ${h(H)},${h(V)}"/>`;
    }
    let o = !a && d.children.length > 0, m = ` fill="${N}" fill-opacity="${Ot}" stroke="${N}"`, A = "";
    a ? A = t > 0 ? wt(a, c[t], $[t], m, ` stroke="${N}"`) : wt(a, c[t], $[t], ' fill="var(--_s)" stroke="var(--_b)"', ' stroke="var(--_b)"') : o && (A = `<rect x="${h(-c[t] / 2)}" y="${h(-$[t] / 2)}" width="${h(c[t])}" height="${h($[t])}" rx="${h($[t] / 2)}"${m}/>`);
    let k = 0;
    d.icon && J[t] && (k = (X + (w.width > 0 ? at : 0)) / 2, A += St(d.icon, -k - w.width / 2, G[t] - X / 2, X, x));
    let S = `<g class="pele-node pele-shape-${a || (o ? "branch" : "text")}${t > 0 ? "" : " pele-root"}${Ct(d.class ?? "")}" data-id="${Et(d.nodeId)}" transform="translate(${h(y)},${h(l + $[t] / 2)})">` + A + (f && !a ? te(w, k - w.width / 2, G[t], x) : et(w, k, G[t], ' class="pele-label"', x)) + "</g>";
    t > 0 ? tt += S : nt += S;
  }
  let U = yt(n.title, !1, u, M, Xt(i), 1), mt = U.height > 0 ? U.height + 16 : 0, pt = Math.max(Z - R, U.width), it = Math.ceil(pt + 2 * g), ft = Math.ceil(lt - j + mt + 2 * g), _t = et(U, it / 2, g + U.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${h(g - R + (pt - Z + R) / 2)},${h(g + mt - j)})">${nt}</g>`;
  return { svg: Qt("mindmap", it, ft, M, i, {}, _t), width: it, height: ft, links: [] };
}
var se = { type: "mindmap", parse(n, s, i) {
  let f = new Bt();
  return f.title = i, Dt(n, f), f;
}, render: ee };
export {
  se as mindmap
};
