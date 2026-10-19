var $t = Object.defineProperty;
var Xt = (t, i, a) => i in t ? $t(t, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[i] = a;
var w = (t, i, a) => Xt(t, typeof i != "symbol" ? i + "" : i, a);
import { s as Q } from "./RVARI57O-BWFKlejV.js";
import { H as Bt, x as St, i as nt, e as Mt, u as _t, t as lt, L as Nt, o as Ht } from "./lazy-CehDEl4q.js";
import { l as Wt } from "./DKTLEL5E-BCFlW8pF.js";
import { _ as kt, a as Ft, x as $, f as J, h as Yt, y as zt, g as Kt, $ as jt, m as Gt } from "./RZSVICHU-DoNHkG46.js";
var Vt = /^\d+$/, bt = /^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/, Jt = /^\d+px$/;
function ct(t, i, a) {
  return new St(`value for ${t} ${i} is invalid, please use a valid ${a}`, "semantic", { type: "quadrantChart" });
}
function Zt(t) {
  let i = t.trim(), a = i.indexOf(":");
  if (a === -1) return [i, "undefined"];
  let n = i.slice(a + 1).trimStart(), c = n.indexOf(":");
  return [i.slice(0, a).trimEnd(), c === -1 ? n : n.slice(0, c).trimEnd()];
}
function Et(t) {
  let i = {};
  for (let a of t) {
    let [n, c] = Zt(a);
    if (n === "radius") {
      if (!Vt.test(c)) throw ct(n, c, "number");
      i.radius = parseInt(c);
    } else if (n === "color") {
      if (!bt.test(c)) throw ct(n, c, "hex code");
      i.color = c;
    } else if (n === "stroke-color") {
      if (!bt.test(c)) throw ct(n, c, "hex code");
      i.strokeColor = c;
    } else if (n === "stroke-width") {
      if (!Jt.test(c)) throw ct(n, c, "number of pixels (eg. 10px)");
      i.strokeWidth = c;
    } else throw new St(`style named ${n} is not supported.`, "semantic", { type: "quadrantChart" });
  }
  return i;
}
function X(t) {
  return { text: t.text.trim(), type: t.type };
}
var te = class {
  constructor() {
    w(this, "type", "quadrantChart");
    w(this, "title");
    w(this, "accTitle");
    w(this, "accDescr");
    w(this, "quadrants", [void 0, void 0, void 0, void 0]);
    w(this, "xAxisLeft");
    w(this, "xAxisRight");
    w(this, "yAxisBottom");
    w(this, "yAxisTop");
    w(this, "points", []);
    w(this, "classes", /* @__PURE__ */ new Map());
  }
  setQuadrant1Text(t) {
    this.quadrants[0] = X(t);
  }
  setQuadrant2Text(t) {
    this.quadrants[1] = X(t);
  }
  setQuadrant3Text(t) {
    this.quadrants[2] = X(t);
  }
  setQuadrant4Text(t) {
    this.quadrants[3] = X(t);
  }
  setXAxisLeftText(t) {
    this.xAxisLeft = X(t);
  }
  setXAxisRightText(t) {
    this.xAxisRight = X(t);
  }
  setYAxisBottomText(t) {
    this.yAxisBottom = X(t);
  }
  setYAxisTopText(t) {
    this.yAxisTop = X(t);
  }
  addPoint(t, i, a, n, c) {
    this.points.push({ x: Number(a), y: Number(n), text: X(t), className: i, ...Et(c) });
  }
  addClass(t, i) {
    this.classes.set(t, Et(i));
  }
  setDiagramTitle(t) {
    this.title = t;
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
}, wt = ["$end", "INVALID", "NEWLINE", "title", "title_value", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "X-AXIS", "Y-AXIS", "AXIS-TEXT-DELIMITER", "QUADRANT_1", "QUADRANT_2", "QUADRANT_3", "QUADRANT_4", "CLASSDEF", "MD_STR", "STR", "class_name", "point_start", "point_x", "point_y", "QUADRANT", "ALPHA", "UNICODE_TEXT", "COLON", "PLUS", "COMMA", "EQUALS", "MULT", "BRKT", "UNDERSCORE", "DOT", "AMP", "MINUS", "NUM", "SPACE", "SEMI", "PUNCTUATION", "EOF"], ft = [41, 4, 6, 8, 9, 19], xt = new Uint8Array(128);
for (let [t, i] of [[":", 27], ["+", 28], [",", 29], ["=", 30], ["*", 31], ["#", 32], ["_", 33], [".", 34], ["&", 35], ["-", 36], [" 	\v\f", 38], [";", 39], ["!$%'`?\\/", 40]]) for (let a = 0; a < t.length; a++) xt[t.charCodeAt(a)] = i;
function ee(t) {
  let i = t.length, a = [], n = [], c = [], s = [], M = 0, e = 0, k = 0, b = 0, v = 0, h = 0, u = 0, N = 0, R = 0, U = 0, A = (o, C, y) => {
    a.push(o), n.push(t.slice(C, y)), c.push(C), e = y;
  }, D = (o) => {
    s.push(M), M = o;
  }, q = () => {
    s.length > 0 && (M = s.pop());
  }, j = (o) => {
    let C = t.indexOf(`
`, o);
    return C === -1 ? i : C;
  }, G = (o) => {
    for (; t.charCodeAt(o) === 32; ) o++;
    return o;
  }, E = (o) => {
    for (; o < i && Mt(t.charCodeAt(o)); ) o++;
    return o;
  }, W = (o) => {
    let C = t.charCodeAt(o);
    if (C === 49) return o + 1;
    if (C !== 48) return -1;
    let y = o + 1;
    if (y < i && !Ht(t.charCodeAt(y)) && lt(t.charCodeAt(y + 1))) for (y += 2; lt(t.charCodeAt(y)); ) y++;
    return y;
  };
  t: for (; e < i; ) {
    let o = t.charCodeAt(e), C = t.charCodeAt(e + 1);
    switch (M) {
      case 0:
        break;
      case 1:
      case 2:
      case 3:
        A(ft[M], e, j(e)), q();
        continue;
      case 4:
        if (o === 125) e++, q();
        else {
          let r = t.indexOf("}", e);
          A(9, e, r === -1 ? i : r);
        }
        continue;
      case 5:
        if (o === 34) e++, q();
        else {
          let r = t.indexOf('"', e);
          A(19, e, r === -1 ? i : r);
        }
        continue;
      case 6:
        if (o === 96 && C === 34) {
          e += 2, q();
          continue;
        }
        if (o !== 96 && o !== 34) {
          let r = e + 1;
          for (let d = t.charCodeAt(r); r < i && d !== 96 && d !== 34; d = t.charCodeAt(++r)) ;
          A(18, e, r);
          continue;
        }
        break t;
      case 7:
        if (nt(o)) {
          let r = e + 1;
          for (; nt(t.charCodeAt(r)); ) r++;
          A(20, e, r), q();
          continue;
        }
        break t;
      case 8: {
        let r = W(e);
        if (r !== -1) {
          A(22, e, r), D(9);
          continue;
        }
        let d = E(e);
        if (t.charCodeAt(d) === 93) {
          e = G(d + 1), q();
          continue;
        }
        break t;
      }
      case 9: {
        let r = E(e);
        if (t.charCodeAt(r) === 44) {
          e = E(r + 1), M = 10;
          continue;
        }
        break t;
      }
      case 10: {
        let r = W(e);
        if (r !== -1) {
          A(23, e, r), q();
          continue;
        }
        break t;
      }
    }
    if (o === 37 && C === 37) {
      e = j(e + 2);
      continue;
    }
    if (o !== 125 && C === 37 && t.charCodeAt(e + 2) === 37) {
      e = j(e + 3);
      continue;
    }
    if (o === 10 || o === 13) {
      let r = e + 1;
      for (let d = t.charCodeAt(r); d === 10 || d === 13; d = t.charCodeAt(++r)) ;
      A(2, e, r);
      continue;
    }
    let y = o | 32;
    if (y === 116 && Q(t, e, "title") && !nt(t.charCodeAt(e + 5))) {
      A(3, e, e + 5), D(1);
      continue;
    }
    if (y === 97 && Q(t, e, "acc")) {
      let r = Q(t, e + 3, "descr");
      if (r || Q(t, e + 3, "title")) {
        let d = E(e + 8), _ = t.charCodeAt(d);
        if (_ === 58) {
          A(r ? 7 : 5, e, E(d + 1)), D(r ? 3 : 2);
          continue;
        }
        if (_ === 123 && r) {
          e = E(d + 1), D(4);
          continue;
        }
      }
    }
    let p = e;
    o === 32 && ((e < k || e >= b) && (k = e, b = G(e)), p = b);
    let F = t.charCodeAt(p), Y = F | 32, L = 0, P = 0;
    if (Y === 120 && Q(t, p, "x-axis")) L = 10, P = p + 6;
    else if (Y === 121 && Q(t, p, "y-axis")) L = 11, P = p + 6;
    else if (F === 45) {
      if (p < v || p >= h) for (v = p, h = p; t.charCodeAt(h) === 45; ) h++;
      h - p >= 2 && t.charCodeAt(h) === 62 && (L = 12, P = h + 1);
    } else if (Y === 113 && Q(t, p, "quadrant")) {
      let r = t.charCodeAt(p + 9);
      t.charCodeAt(p + 8) === 45 && r >= 49 && r <= 52 ? (L = 13 + r - 49, P = p + 10) : Q(t, p + 8, "chart") && (L = 24, P = p + 13);
    }
    if (L !== 0) {
      A(L, e, G(P));
      continue;
    }
    if (y === 99 && Q(t, e, "classdef") && !nt(t.charCodeAt(e + 8))) {
      A(17, e, e + 8);
      continue;
    }
    if (o === 34) {
      C === 96 ? (e += 2, D(6)) : (e++, D(5));
      continue;
    }
    if (o === 58 && C === 58 && t.charCodeAt(e + 2) === 58) {
      e += 3, D(7);
      continue;
    }
    if (o === 58 || Mt(o)) {
      let r = e;
      if (o !== 58 && ((e < u || e >= N) && (u = e, N = E(e)), r = N), t.charCodeAt(r) === 58 && ((r + 1 < R || r + 1 >= U) && (R = r + 1, U = E(r + 1)), t.charCodeAt(U) === 91)) {
        A(21, e, E(U + 1)), D(8);
        continue;
      }
    }
    if (_t(o)) {
      let r = e + 1;
      for (; _t(t.charCodeAt(r)); ) r++;
      A(25, e, r);
      continue;
    }
    if (o >= 128) {
      let r = e + 1;
      for (; t.charCodeAt(r) >= 128; ) r++;
      A(26, e, r);
      continue;
    }
    if (lt(o)) {
      let r = e + 1;
      for (; lt(t.charCodeAt(r)); ) r++;
      A(37, e, r);
      continue;
    }
    if (xt[o] !== 0) {
      A(xt[o], e, e + 1);
      continue;
    }
    break;
  }
  return e < i ? (a.push(1), n.push(""), c.push(e), { types: a, texts: n, starts: c }) : (M < ft.length && (a.push(ft[M]), n.push(""), c.push(i)), a.push(0), n.push(""), c.push(i), { types: a, texts: n, starts: c });
}
function ht(...t) {
  let i = new Uint8Array(42);
  for (let a of t) i[a] = 1;
  return i;
}
var vt = ht(40, 35, 37, 25, 29, 28, 30, 31, 34, 32, 33, 26), Rt = ht(25, 37, 36, 29, 27, 35, 32, 31, 26), ut = ht(25, 37, 27, 38, 32, 36), Ut = ht(2, 39, 41), ie = ["setQuadrant1Text", "setQuadrant2Text", "setQuadrant3Text", "setQuadrant4Text"], ae = "'STR', 'MD_STR', 'ALPHA', 'NUM', 'UNICODE_TEXT', 'PUNCTUATION'";
function re(t, i) {
  let { types: a, texts: n, starts: c } = ee(t), s = 0, M = (h) => {
    let u = a[s];
    throw u === 1 ? Nt("quadrantChart", t, c[s], "", !0) : Nt("quadrantChart", t, c[s], `Expecting ${h}, got '${wt[u]}'`);
  }, e = (h) => (a[s] !== h && M(`'${wt[h]}'`), n[s++]), k = (h) => h === 19 || h === 18 || vt[h] === 1, b = () => {
    let h = a[s];
    k(h) || M(ae);
    let u = n[s++];
    for (; vt[a[s]] === 1 || a[s] === 38 || a[s] === 36; ) u += n[s++];
    return { text: u, type: h === 18 ? "markdown" : "text" };
  }, v = () => {
    let h = [];
    for (; ; ) {
      ut[a[s]] === 0 && M("'ALPHA', 'NUM', 'COLON', 'SPACE', 'BRKT', 'MINUS'");
      let u = n[s++];
      for (; ut[a[s]] === 1; ) u += n[s++];
      if (h.push(u.trim()), a[s] !== 29) return h;
      s++;
    }
  };
  for (; Ut[a[s]] === 1 || a[s] === 38; ) s++;
  for (e(24); a[s] !== 0; ) {
    for (; a[s] === 38; ) s++;
    let h = a[s];
    switch (h) {
      case 17: {
        s++, e(38), Rt[a[s]] === 0 && M("'ALPHA', 'NUM', 'UNICODE_TEXT'");
        let u = n[s++];
        for (; Rt[a[s]] === 1; ) u += n[s++];
        e(38), i.addClass(u, v());
        break;
      }
      case 10:
      case 11: {
        s++;
        let u = b(), N;
        a[s] === 12 && (s++, k(a[s]) ? N = b() : u.text += " ⟶ "), h === 10 ? (i.setXAxisLeftText(u), N && i.setXAxisRightText(N)) : (i.setYAxisBottomText(u), N && i.setYAxisTopText(N));
        break;
      }
      case 13:
      case 14:
      case 15:
      case 16:
        s++, i[ie[h - 13]](b());
        break;
      case 3:
        s++, i.setDiagramTitle(e(4).trim());
        break;
      case 5:
        s++, i.setAccTitle(e(6).trim());
        break;
      case 7:
        s++, i.setAccDescription(e(8).trim());
        break;
      case 9:
        i.setAccDescription(n[s++].trim());
        break;
      default:
        if (k(h)) {
          let u = b(), N = a[s] === 20 ? n[s++] : "";
          e(21);
          let R = e(22), U = e(23);
          i.addPoint(u, N, R, U, ut[a[s]] === 1 ? v() : []);
        }
    }
    Ut[a[s]] === 0 && M("'NEWLINE', 'SEMI', 'EOF'"), s++;
  }
}
var Dt = 4, se = 300;
function At(t, i) {
  return t.quadrantChart?.[i];
}
function B(t, i, a, n) {
  let c = At(t, i);
  return typeof c == "number" && c >= 0 ? Math.min(c, n) : a;
}
function Lt(t) {
  return t.startsWith("#") ? t : "#" + t;
}
function oe(t, i, a) {
  let n = a.fontSize ?? 16, c = Math.round(n * 0.875), s = Math.round(n * 0.75), M = a.measurer ?? Bt(a.fontFamily), e = Math.round(Math.max(100, B(i, "chartWidth", 500, 4e3))), k = Math.round(Wt(a, e, 280)), b = Math.round(Math.max(100, B(i, "chartHeight", 500, 4e3)) * k / e), v = B(i, "quadrantPadding", a.padding ?? 8, 200), h = B(i, "xAxisLabelPadding", 5, 200), u = B(i, "yAxisLabelPadding", 5, 200), N = t.points.length > 0, R = (l, x, g) => kt(l?.text, l?.type === "markdown", M, x, Math.max(g, 40)), U = kt(t.title, !1, M, n, Math.max(k - 2 * v, 40), 1), A = B(i, "titlePadding", 10, 200), D = U.height > 0 ? U.height + A : 0, q = !!(t.xAxisLeft?.text || t.xAxisRight?.text), j = !!(t.yAxisBottom?.text || t.yAxisTop?.text), G = N || At(i, "xAxisPosition") === "bottom", E = At(i, "yAxisPosition") === "right", W = k - 2 * v, o = R(t.xAxisLeft, c, t.xAxisRight ? W / 2 - 16 : W), C = R(t.xAxisRight, c, W / 2 - 16), y = Math.max(o.height, C.height), p = q ? y + h : 0, F = b - 2 * v - D - p, Y = R(t.yAxisBottom, c, t.yAxisTop ? F / 2 - 16 : F), L = R(t.yAxisTop, c, F / 2 - 16), P = Math.max(Y.height, L.height), r = j ? P + u : 0, d = v + (E ? 0 : r), _ = v + D + (G ? 0 : p), S = Math.max(0, W - r), I = Math.max(0, F), V = Math.max(0, (S - Dt) / 2), Z = Math.max(0, (I - Dt) / 2), H = [d + V, _, d + S - V, _ + I, d, _ + Z, d + S, _ + I - Z], qt = (l, x, g, m, T) => {
    for (let f = l; f < H.length; f += 4) if (x < H[f + 2] && m > H[f] && g < H[f + 3] && T > H[f + 1]) return !1;
    return !0;
  }, Pt = B(i, "quadrantTextTopPadding", 5, 200), pt = "";
  for (let l = 0; l < 4; l++) {
    let x = l === 0 || l === 3 ? d + S - V : d, g = l < 2 ? _ : _ + I - Z, m = R(t.quadrants[l], n, V - 16), T = x + V / 2, f = N ? g + Pt + m.height / 2 : g + Z / 2;
    H.push(T - m.width / 2, f - m.height / 2, T + m.width / 2, f + m.height / 2), pt += `<g class="pele-quadrant" data-id="${l + 1}"><rect x="${$(x)}" y="${$(g)}" width="${$(V)}" height="${$(Z)}" rx="${Ft}"/>` + J(m, T, f, ' class="pele-label" fill="var(--_fg)" stroke="none"') + "</g>";
  }
  let at = "";
  if (q) {
    let l = G ? _ + I + h + y / 2 : _ - h - y / 2;
    at += J(o, C.height > 0 ? d + S / 4 : d + o.width / 2, l, "") + J(C, d + S * 3 / 4, l, "");
  }
  if (j) {
    let l = E ? d + S + u + P / 2 : d - u - P / 2, x = (g, m) => g.height > 0 ? `<g transform="translate(${$(l)},${$(m)}) rotate(-90)">${J(g, 0, 0, "")}</g>` : "";
    at += x(Y, L.height > 0 ? _ + I * 3 / 4 : _ + I - Y.width / 2) + x(L, _ + I / 4);
  }
  let It = B(i, "pointRadius", 5, 200), Ot = B(i, "pointTextPadding", 5, 200), gt = Gt(0), tt = [], mt = [];
  for (let l of t.points) {
    if (!(l.x >= 0 && l.x <= 1 && l.y >= 0 && l.y <= 1)) continue;
    let x = t.classes.get(l.className), g = Math.min(l.radius ?? x?.radius ?? It, 2e3), m = l.color ?? x?.color, T = l.strokeColor ?? x?.strokeColor, f = l.strokeWidth ?? x?.strokeWidth, O = [];
    m && O.push("fill:" + Lt(m)), f && (T && O.push("stroke:" + Lt(T)), O.push("stroke-width:" + f));
    let z = d + l.x * S, K = _ + (1 - l.y) * I;
    tt.push({ cx: z, cy: K, reach: g + (f ? Math.min(parseInt(f), 400) / 2 : 0), text: R(l.text, s, 200) }), mt.push(`<circle class="pele-point${Yt(l.className)}" data-id="${zt(l.text.text)}" cx="${$(z)}" cy="${$(K)}" r="${$(g)}"${f && !T ? ` stroke="${gt}"` : ""}${Kt(O).shape}/>`);
  }
  let dt = tt.length <= se;
  if (dt) for (let { cx: l, cy: x, reach: g } of tt) H.push(l - g, x - g, l + g, x + g);
  let Tt = "";
  for (let { cx: l, cy: x, reach: g, text: m } of tt) {
    let T = m.width / 2, f = m.size * 0.6 + (m.height - m.lineHeight) / 2, O = g + Ot, z = [l, x + O + f, l, x - O - f, l + O + T, x, l - O - T, x], K = l, rt = z[1], Ct = !1;
    for (let st = 0; st < 16; st += 2) {
      let ot = st % 8, et = ot < 4 && m.width < S ? Math.min(Math.max(z[ot], d + T), d + S - T) : z[ot], it = z[ot + 1];
      if (et - T < d || et + T > d + S || it - f < _ || it + f > _ + I) continue;
      let yt = !dt || qt(st < 8 ? 0 : 8, et - T, it - f, et + T, it + f);
      if ((!Ct || yt) && (K = et, rt = it, Ct = !0), yt) break;
    }
    dt && H.push(K - T, rt - f, K + T, rt + f), Tt += J(m, K, rt, ' class="pele-label"');
  }
  let Qt = J(U, k / 2, A / 2 + U.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g class="pele-quadrants" fill="var(--_s)" stroke="var(--_b)">${pt}</g>` + (at ? `<g class="pele-axis-labels" font-size="${c}" fill="var(--_m)">${at}</g>` : "") + (tt.length > 0 ? `<g class="pele-points" fill="${gt}">${mt.reverse().join("")}</g><g class="pele-point-labels" font-size="${s}">${Tt}</g>` : "");
  return { svg: jt("quadrantChart", k, b, n, a, t, Qt), width: k, height: b, links: [] };
}
var fe = { type: "quadrantChart", parse(t, i, a) {
  let n = new te();
  return n.title = a, re(t, n), n;
}, render: oe };
export {
  fe as quadrantChart
};
