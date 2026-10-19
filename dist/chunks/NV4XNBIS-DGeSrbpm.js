var je = Object.defineProperty;
var Ye = (r, i, c) => i in r ? je(r, i, { enumerable: !0, configurable: !0, writable: !0, value: c }) : r[i] = c;
var W = (r, i, c) => Ye(r, typeof i != "symbol" ? i + "" : i, c);
import { a as qe, i as ze } from "./FTXIJQGB-DEOy2_zI.js";
import { q as Qe, x as le, e as F, L as _e, i as $e, H as Je, $ as Ze } from "./lazy-CehDEl4q.js";
import { h as et } from "./7WLXJQOR-C_9BAVZ4.js";
import { x as tt, h as rt, y as st, C as it } from "./ELSXBIJH-BYqGUTHN.js";
import { b as Le, d as Ie, m as at, p as lt } from "./FKCDD66M-BxR87HMc.js";
import { A as Ke, H as nt, M as ot, L as dt, O as ct, N as ut } from "./JZWSX6AR-CTa5XBC9.js";
import { j as ht, P as ft, O as pt, E as gt, R as de, B as Ne } from "./URA2L2QI-BZvG0umE.js";
import { m as bt, c as yt, p as kt, h as De } from "./DKTLEL5E-BCFlW8pF.js";
import { L as wt, w as ce, F as mt, D as Re, S as vt, v as Tt } from "./HWDLEDTA-Ctstf22F.js";
import { g as Me, _ as ue, h as Oe, y as he, a as At, x as V, f as ye, b as fe, $ as St } from "./RZSVICHU-DoNHkG46.js";
function ke(r) {
  return r === "markdown" || r === "string" || r === "text" ? r : "markdown";
}
function Ge(r) {
  return r.startsWith('"') && r.endsWith('"') ? r.substring(1, r.length - 1) : r;
}
function Et(r, i) {
  let c = 0;
  for (let a = 0; a < i.length; a++) i[a] === r && c++;
  return c;
}
function xt(r) {
  let i = r.trim(), c = "arrow_open";
  switch (i[0]) {
    case "<":
      c = "arrow_point", i = i.slice(1);
      break;
    case "x":
      c = "arrow_cross", i = i.slice(1);
      break;
    case "o":
      c = "arrow_circle", i = i.slice(1);
      break;
  }
  let a = "normal";
  return i.includes("=") && (a = "thick"), i.includes(".") && (a = "dotted"), { type: c, stroke: a };
}
function Ct(r) {
  let i = r.trim(), c = i.slice(0, -1), a = "arrow_open";
  switch (i.slice(-1)) {
    case "x":
      a = "arrow_cross", i.startsWith("x") && (a = "double_" + a, c = c.slice(1));
      break;
    case ">":
      a = "arrow_point", i.startsWith("<") && (a = "double_" + a, c = c.slice(1));
      break;
    case "o":
      a = "arrow_circle", i.startsWith("o") && (a = "double_" + a, c = c.slice(1));
      break;
  }
  let h = "normal", T = c.length - 1;
  c.startsWith("=") && (h = "thick"), c.startsWith("~") && (h = "invisible");
  let s = Et(".", c);
  return s && (h = "dotted", T = s), { type: a, stroke: h, length: T };
}
var _t = class {
  constructor(r = {}) {
    W(this, "type", "flowchart");
    W(this, "direction");
    W(this, "nodes", /* @__PURE__ */ new Map());
    W(this, "edges", []);
    W(this, "subgraphs", []);
    W(this, "classes", /* @__PURE__ */ new Map());
    W(this, "tooltips", /* @__PURE__ */ new Map());
    W(this, "defaultEdgeStyle");
    W(this, "defaultInterpolate");
    W(this, "title");
    W(this, "accTitle");
    W(this, "accDescr");
    W(this, "subgraphLookup", /* @__PURE__ */ new Map());
    W(this, "members", /* @__PURE__ */ new Set());
    W(this, "edgeById", /* @__PURE__ */ new Map());
    W(this, "pairCount", /* @__PURE__ */ new Map());
    W(this, "subCount", 0);
    W(this, "options");
    this.options = r;
  }
  addVertex(r, i, c, a, h, T, s = {}, e) {
    if (!r || r.trim().length === 0) return;
    let g;
    if (e !== void 0) {
      let C = e.includes(`
`) ? e + `
` : `{
` + e + `
}`, x;
      try {
        x = Qe(C);
      } catch (M) {
        throw new le(`Metadata of "${r}" is not valid YAML. ${M.message}`, "syntax", { type: "flowchart" });
      }
      g = x !== null && typeof x == "object" && !Array.isArray(x) ? x : void 0;
    }
    let v = this.subgraphLookup.get(r);
    if (v && g) {
      v.metadata = { ...v.metadata, ...g };
      return;
    }
    let $ = this.edgeById.get(r);
    if ($) {
      g?.animate !== void 0 && ($.animate = g.animate), g?.animation !== void 0 && ($.animation = g.animation), g?.curve !== void 0 && ($.interpolate = g.curve);
      return;
    }
    let k = this.nodes.get(r);
    if (k === void 0 && (i === void 0 && c === void 0 && a !== void 0 && a !== null && this.options.warn?.(`Style applied to unknown node "${r}". This may indicate a typo. The node will be created automatically.`), k = { id: r, labelType: "text", styles: [], classes: [] }, this.nodes.set(r, k)), i !== void 0 ? (k.labelType = i.type, k.text = Ge(i.text.trim())) : k.text === void 0 && (k.text = r), c !== void 0 && (k.type = c), a != null) for (let C of a) k.styles.push(C);
    if (h != null) for (let C of h) k.classes.push(C);
    if (T !== void 0 && (k.dir = T), k.props === void 0 ? k.props = s : s !== void 0 && Object.assign(k.props, s), g === void 0) return;
    if (g.shape) {
      let C = String(g.shape);
      if (C !== C.toLowerCase() || C.includes("_")) throw new le(`No such shape: ${C}. Shape names should be lowercase.`, "semantic", { type: "flowchart" });
      if (!qe(C)) throw new le(`No such shape: ${C}.`, "semantic", { type: "flowchart" });
      k.type = C;
    }
    let R = typeof g.label == "string" ? g.label : void 0;
    g.label && (k.text = String(g.label), k.labelType = ke(g.labelType)), g.icon && (k.icon = String(g.icon), !R?.trim() && k.text === r && (k.text = "")), g.form && (k.form = String(g.form)), g.pos && (k.pos = String(g.pos)), g.img && (k.img = String(g.img), !R?.trim() && k.text === r && (k.text = "")), g.constraint && (k.constraint = String(g.constraint)), g.w && (k.assetWidth = Number(g.w)), g.h && (k.assetHeight = Number(g.h));
  }
  addSingleLink(r, i, c, a) {
    let h = { start: r, end: i, type: void 0, text: "", labelType: "text", classes: [], isUserDefinedId: !1, interpolate: this.defaultInterpolate }, T = c?.text;
    if (T !== void 0 && (h.text = Ge(T.text.trim()), h.labelType = ke(T.type)), c !== void 0 && (h.type = c.type, h.stroke = c.stroke, h.length = c.length > 10 ? 10 : c.length), a && !this.edgeById.has(a)) h.id = a, h.isUserDefinedId = !0;
    else {
      let g = this.pairCount.get(r + "\0" + i) ?? 0;
      h.id = `L_${r}_${i}_${g === 0 ? 0 : g + 1}`;
    }
    let s = this.options.maxEdges;
    if (s !== void 0 && this.edges.length >= s) throw new le(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${s}.`, "limit", { type: "flowchart" });
    this.edges.push(h);
    let e = r + "\0" + i;
    this.pairCount.set(e, (this.pairCount.get(e) ?? 0) + 1), this.edgeById.has(h.id) || this.edgeById.set(h.id, h);
  }
  addLink(r, i, c) {
    let a = typeof c?.id == "string" ? c.id.replace("@", "") : void 0, h = r[r.length - 1], T = i[0];
    for (let s of r) for (let e of i) this.addSingleLink(s, e, c, s === h && e === T ? a : void 0);
  }
  updateLinkInterpolate(r, i) {
    for (let c of r) c === "default" ? this.defaultInterpolate = i : this.edgeAt(c).interpolate = i;
  }
  updateLink(r, i) {
    for (let c of r) {
      if (c === "default") {
        this.defaultEdgeStyle = i;
        continue;
      }
      let a = this.edgeAt(c);
      a.style = i, i.length > 0 && !i.some((h) => h?.startsWith("fill")) && i.push("fill:none");
    }
  }
  edgeAt(r) {
    let i = this.edges[Number(r)];
    if (i === void 0) throw new le(`The index ${r} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`, "semantic", { type: "flowchart" });
    return i;
  }
  addClass(r, i) {
    let c = i.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    for (let a of r.split(",")) {
      let h = this.classes.get(a);
      h === void 0 && (h = { id: a, styles: [], textStyles: [] }, this.classes.set(a, h));
      for (let T of c) T.includes("color") && h.textStyles.push(T.replace("fill", "bgFill")), h.styles.push(T);
    }
  }
  setDirection(r) {
    let i = r.trim();
    i.includes("<") && (i = "RL"), i.includes("^") && (i = "BT"), i.includes(">") && (i = "LR"), i.includes("v") && (i = "TB"), i === "TD" && (i = "TB"), this.direction = i;
  }
  setClass(r, i) {
    for (let c of r.split(",")) this.nodes.get(c)?.classes.push(i), this.edgeById.get(c)?.classes.push(i), this.subgraphLookup.get(c)?.classes.push(i);
  }
  setTooltip(r, i) {
    if (i !== void 0) for (let c of r.split(",")) this.tooltips.set(c, i);
  }
  setLink(r, i, c) {
    let a = i.trim();
    for (let h of r.split(",")) {
      let T = this.nodes.get(h);
      T !== void 0 && (T.link = a ? Ke(a) : void 0, T.linkTarget = c);
    }
    this.setClass(r, "clickable");
  }
  setClickEvent(r, i, c) {
    this.setClass(r, "clickable");
  }
  setAccTitle(r) {
    this.accTitle = r.replace(/^\s+/g, "");
  }
  setAccDescription(r) {
    this.accDescr = r.replace(/\n\s+/g, `
`);
  }
  addSubGraph(r, i, c) {
    let a = r?.text.trim(), h = c?.text ?? "";
    r !== void 0 && r === c && /\s/.test(h) && (a = void 0);
    let T = /* @__PURE__ */ new Set(), s = [], e;
    for (let k of i) if (typeof k == "string") k.trim() !== "" && !T.has(k) && (T.add(k), s.push(k));
    else if (Array.isArray(k)) for (let R of k) R.trim() !== "" && !T.has(R) && (T.add(R), s.push(R));
    else e = k.value;
    e ?? (e = this.options.inheritDir ? this.direction ?? this.options.direction : void 0), a ?? (a = "subGraph" + this.subCount), h = h || "", this.subCount++;
    let g = { id: a, nodes: s, title: h.trim(), classes: [], dir: e, labelType: ke(c?.type) }, v = this.members;
    g.nodes = s.filter((k) => !v.has(k) && k !== a);
    for (let k of g.nodes) v.add(k);
    let $ = this.subgraphLookup.get(a);
    if ($) for (let k of g.nodes) $.nodes.push(k);
    else this.subgraphs.push(g);
    return this.subgraphLookup.set(a, $ ?? g), a;
  }
  exists(r, i) {
    for (let c of r) if (c.nodes.includes(i)) return !0;
    return !1;
  }
  makeUniq(r, i) {
    let c = /* @__PURE__ */ new Set();
    for (let a of i) for (let h of a.nodes) c.add(h);
    return { nodes: r.nodes.filter((a) => !c.has(a)) };
  }
  destructLink(r, i) {
    let c = Ct(r);
    if (!i) return c;
    let a = xt(i);
    if (a.stroke !== c.stroke) return { type: "INVALID", stroke: "INVALID" };
    if (a.type === "arrow_open") a.type = c.type;
    else {
      if (a.type !== c.type) return { type: "INVALID", stroke: "INVALID" };
      a.type = "double_" + a.type;
    }
    return a.type === "double_arrow" && (a.type = "double_arrow_point"), a.length = c.length, a;
  }
  subgraph(r) {
    return this.subgraphLookup.get(r);
  }
}, Ve = ["$end", "INVALID", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "SHAPE_DATA", "CALLBACKNAME", "CALLBACKARGS", "MD_STR", "STR", "STYLE", "DEFAULT", "LINKSTYLE", "INTERPOLATE", "CLASSDEF", "CLASS", "HREF", "CLICK", "GRAPH", "subgraph", "end", "LINK_TARGET", "NODIR", "DIR", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "direction_td", "LINK_ID", "NUM", "BRKT", "STYLE_SEPARATOR", "COLON", "AMP", "SEMI", "COMMA", "MULT", "LINK", "START_LINK", "EDGE_TEXT", "-)", "TEXT", "(-", "STADIUMEND", "STADIUMSTART", "SUBROUTINEEND", "SUBROUTINESTART", "VERTEX_WITH_PROPS_START", "TAGEND", "CYLINDEREND", "CYLINDERSTART", "DOUBLECIRCLEEND", "DOUBLECIRCLESTART", "TRAPEND", "INVTRAPEND", "TRAPSTART", "INVTRAPSTART", "TAGSTART", "UP", "SEP", "DOWN", "NODE_STRING", "MINUS", "UNICODE_TEXT", "PIPE", "PE", "PS", "SQE", "SQS", "DIAMOND_STOP", "DIAMOND_START", "NEWLINE", "SPACE", "EOF"], Xe = new Uint8Array(128);
for (let r of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'*+.`?\\_/") Xe[r.charCodeAt(0)] = 1;
var $t = /accTitle\s*:\s*/y, Lt = /accDescr\s*:\s*/y, It = /accDescr\s*\{\s*/y, Nt = /call\s+/y, Dt = /click\s+/y, Rt = /(?:\r?\n)*\s*\n/y, Mt = /\s*(?:LR|RL|TB|BT|TD|BR)\b/y, Ot = /\s*[<>^]/y, Gt = /\s*v\b/y, Vt = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y, /.*direction\s+TD[^\n]*/y], we = /[\n\r\u2028\u2029]/g, Pe = /\s*[xo<]?--+[-xo>]\s*/y, Pt = /\s*[xo<]?--\s*/y, We = /\s*[xo<]?==+[=xo>]\s*/y, Wt = /\s*[xo<]?==\s*/y, me = /\s*[xo<]?-?\.+-[xo>]?\s*/y, Bt = /\s*[xo<]?-\.\s*/y, Be = /\s*~~~+\s*/y, Ut = /(?:\r?\n)+/y, Ft = /[^\S\n\r]+/y, Ht = /\(\s*\)/y, Kt = /\n\s*/g;
function Xt(r) {
  let i = r.length, c = [], a = [], h = [], T = [], s = 0, e = 0, g = !0, v = r.indexOf("direction"), $ = r.indexOf("@"), k = -1, R = 0, C = 0, x = -1, M = -1, B = -1, u = (t, o, l) => {
    c.push(t), a.push(r.slice(o, l)), h.push(o), e = l;
  }, m = (t) => {
    T.push(s), s = t;
  }, d = () => {
    T.length > 0 && (s = T.pop());
  }, f = (t, o) => (t.lastIndex = o, t.test(r) ? t.lastIndex : -1), w = (t) => r.startsWith(t, e) && !$e(r.charCodeAt(e + t.length)), _ = (t) => {
    let o = t;
    if (t >= M && t <= B) o = B;
    else if (F(r.charCodeAt(t))) {
      for (; o < i && F(r.charCodeAt(o)); ) o++;
      M = t, B = o;
    }
    let l = r.charCodeAt(o);
    return l === 120 || l === 111 || l === 60 ? r.charCodeAt(o + 1) : l;
  }, I = (t) => {
    let o = t;
    if (t >= M && t <= B) o = B;
    else if (F(r.charCodeAt(t))) {
      for (; o < i && F(r.charCodeAt(o)); ) o++;
      M = t, B = o;
    }
    return r.charCodeAt(o) === 126;
  }, D = () => {
    r.charCodeAt(e + 1) === 96 ? (m(2), e += 2) : (m(1), e++);
  }, H = () => {
    if (!I(e)) return !1;
    let t = f(Be, e);
    return t < 0 ? !1 : (u(40, e, t), !0);
  }, O = (t) => {
    let o = r.charCodeAt(e + 1);
    return t === 40 ? (o === 45 ? (m(8), u(45, e, e + 2)) : o === 91 ? (m(7), u(47, e, e + 2)) : o === 40 && r.charCodeAt(e + 2) === 40 ? (m(7), u(55, e, e + 3)) : (m(7), u(69, e, e + 1)), !0) : t === 91 ? (o === 91 ? (m(7), u(49, e, e + 2)) : o === 40 ? (m(7), u(53, e, e + 2)) : o === 47 ? (m(9), u(58, e, e + 2)) : o === 92 ? (m(9), u(59, e, e + 2)) : (m(7), u(71, e, e + 1)), !0) : t === 124 ? (m(7), u(67, e, e + 1), !0) : t === 123 ? (m(7), u(73, e, e + 1), !0) : !1;
  }, re = (t) => {
    g && (g = !1, m(6)), u(20, e, e + t);
  }, z = () => {
    let t = e;
    for (; t < i; ) {
      let o = r.charCodeAt(t);
      if (o < 128 && Xe[o] === 1) t++;
      else if (o === 45 && t + 1 < i) {
        let l = r.charCodeAt(t + 1);
        if (l === 62 || l === 45 || l === 46) break;
        t++;
      } else break;
    }
    return t === e ? !1 : (u(64, e, t), !0);
  }, Z = (t) => {
    let o = _(e), l;
    if (o === 45) {
      if ((l = f(Pe, e)) >= 0) return u(40, e, l), !0;
      if ((l = f(Pt, e)) >= 0) return m(10), u(41, e, l), !0;
      if ((l = f(me, e)) >= 0) return u(40, e, l), !0;
      if ((l = f(Bt, e)) >= 0) return m(12), u(41, e, l), !0;
    } else if (o === 61) {
      if ((l = f(We, e)) >= 0) return u(40, e, l), !0;
      if ((l = f(Wt, e)) >= 0) return m(11), u(41, e, l), !0;
    } else if (o === 46 && (l = f(me, e)) >= 0) return u(40, e, l), !0;
    return t !== 45 && t !== 61 && t !== 46 && H();
  }, ae = (t) => {
    let o;
    switch (t) {
      case 97:
        if (r.startsWith("acc", e)) {
          if ((o = f($t, e)) >= 0) return m(3), u(2, e, o), !0;
          if ((o = f(Lt, e)) >= 0) return m(4), u(4, e, o), !0;
          if ((o = f(It, e)) >= 0) return m(5), e = o, !0;
        }
        break;
      case 64:
        if (r.charCodeAt(e + 1) === 123) return m(16), c.push(7), a.push(""), h.push(e), e += 2, !0;
        break;
      case 99:
        if ((o = f(Nt, e)) >= 0) return m(14), e = o, !0;
        if (w("classDef")) return u(16, e, e + 8), !0;
        if (w("class")) return u(17, e, e + 5), !0;
        if ((o = f(Dt, e)) >= 0) return m(13), e = o, !0;
        break;
      case 34:
        return D(), !0;
      case 115:
        if (w("style")) return u(12, e, e + 5), !0;
        if (w("swimlane-beta")) return re(13), !0;
        if (w("subgraph")) return u(21, e, e + 8), !0;
        break;
      case 100:
        if (w("default")) return u(13, e, e + 7), !0;
        break;
      case 108:
        if (w("linkStyle")) return u(14, e, e + 9), !0;
        break;
      case 105:
        if (w("interpolate")) return u(15, e, e + 11), !0;
        break;
      case 104:
        if (r.startsWith("href", e) && F(r.charCodeAt(e + 4))) return u(18, e, e + 5), !0;
        break;
      case 102:
        if (w("flowchart-elk")) return re(13), !0;
        if (w("flowchart")) return re(9), !0;
        break;
      case 103:
        if (w("graph")) return re(5), !0;
        break;
      case 101:
        if (w("end")) {
          for (o = e + 3; o < i && F(r.charCodeAt(o)); ) o++;
          return u(22, e, o), !0;
        }
        break;
      case 95:
        if (w("_self")) return u(23, e, e + 5), !0;
        if (w("_blank")) return u(23, e, e + 6), !0;
        if (w("_parent")) return u(23, e, e + 7), !0;
        if (w("_top")) return u(23, e, e + 4), !0;
        break;
    }
    if (v !== -1 && e >= R && (v < e && (v = r.indexOf("direction", e)), v !== -1 && (k < e && (we.lastIndex = e, k = we.test(r) ? we.lastIndex - 1 : i), v < k))) {
      for (let l = 0; l < 5; l++) if ((o = f(Vt[l], e)) >= 0) return u(26 + l, e, o), !0;
      R = k;
    }
    if ($ !== -1 && t !== 34 && !F(t)) {
      if (e >= C) {
        $ < e && ($ = r.indexOf("@", e));
        let l = e;
        for (; l < i; ) {
          let b = r.charCodeAt(l);
          if (b === 34 || F(b)) break;
          l++;
        }
        if (C = l, x = -1, $ !== -1 && $ < l) for (let b = Math.min(l, i - 1) - 1; b >= $; b--) {
          if (r.charCodeAt(b) !== 64) continue;
          let S = r.charCodeAt(b + 1);
          if (S !== 123 && S !== 34) {
            x = b;
            break;
          }
        }
      }
      if (x > e) return u(31, e, x + 1), !0;
    }
    if (t >= 48 && t <= 57) {
      let l = e + 1;
      for (; l < i; ) {
        let b = r.charCodeAt(l);
        if (b < 48 || b > 57) break;
        l++;
      }
      return u(32, e, l), !0;
    }
    switch (t) {
      case 35:
        return u(33, e, e + 1), !0;
      case 58:
        return r.charCodeAt(e + 1) === 58 && r.charCodeAt(e + 2) === 58 ? u(34, e, e + 3) : u(35, e, e + 1), !0;
      case 38:
        return u(36, e, e + 1), !0;
      case 59:
        return u(37, e, e + 1), !0;
      case 44:
        return u(38, e, e + 1), !0;
      case 42:
        return u(39, e, e + 1), !0;
      case 120:
      case 111:
        return Z(t) || z();
      case 60:
        return Z(t) || u(60, e, e + 1), !0;
      case 45:
        return Z(t) || z() || u(65, e, e + 1), !0;
      case 61:
        return Z(t);
      case 46:
        return Z(t) || z();
      case 126:
        return H();
      case 40:
        return O(t);
      case 91:
        return r.charCodeAt(e + 1) === 124 ? (u(50, e, e + 2), !0) : O(t);
      case 124:
      case 123:
        return O(t);
      case 62:
        return m(7), u(51, e, e + 1), !0;
      case 94:
        return u(61, e, e + 1), !0;
      case 92:
        return r.charCodeAt(e + 1) === 124 ? (u(62, e, e + 2), !0) : z();
      case 118:
        return $e(r.charCodeAt(e + 1)) ? z() : (u(63, e, e + 1), !0);
    }
    return F(t) ? Z(t) ? !0 : (o = f(Ut, e)) >= 0 ? (u(74, e, o), !0) : (o = f(Ft, e)) >= 0 ? (u(75, e, o), !0) : !1 : t < 128 ? z() : et(t) ? (u(66, e, e + 1), !0) : !1;
  }, n = (t, o, l, b) => {
    if (t === 34) return D(), !0;
    let S = _(e);
    if (S === l || S === b) {
      let j = f(o, e);
      if (j >= 0) return d(), u(40, e, j), !0;
    }
    if (t === l && (l !== 45 || r.charCodeAt(e + 1) === 45)) return !1;
    let Q = e + 1;
    for (; Q < i; ) {
      let j = r.charCodeAt(Q);
      if (j === 34) break;
      if (j === l) {
        if (l !== 45 || r.charCodeAt(Q + 1) === 45) break;
      } else if (j === 120 || j === 111 || j === 60 || j === b || F(j)) {
        let se = _(Q);
        if ((se === l || se === b) && f(o, Q) >= 0) break;
      }
      Q++;
    }
    return u(42, e, Q), !0;
  };
  e: for (; ; ) {
    if (e >= i) {
      let l = -1;
      switch (s) {
        case 0:
          l = 76;
          break;
        case 3:
          l = 3;
          break;
        case 4:
          l = 5;
          break;
        case 5:
          l = 6;
          break;
        case 13:
          l = 19;
          break;
        case 14:
          l = 8;
          break;
        case 15:
          l = 9;
          break;
      }
      l !== -1 && u(l, i, i);
      break;
    }
    let t = r.charCodeAt(e), o = !0;
    switch (s) {
      case 0:
        o = ae(t);
        break;
      case 1:
        if (t === 34) r.charCodeAt(e + 1) === 96 ? (m(2), e += 2) : (d(), e++);
        else {
          let l = r.indexOf('"', e);
          u(11, e, l === -1 ? i : l);
        }
        break;
      case 2:
        if (t === 96) r.charCodeAt(e + 1) === 34 ? (d(), e += 2) : o = !1;
        else if (t === 34) D();
        else {
          let l = e + 1;
          for (; l < i; ) {
            let b = r.charCodeAt(l);
            if (b === 96 || b === 34) break;
            l++;
          }
          u(10, e, l);
        }
        break;
      case 3:
      case 4: {
        let l = r.indexOf(`
`, e);
        l === -1 && (l = i);
        let b = s === 3 ? 3 : 5;
        d(), u(b, e, l);
        break;
      }
      case 5:
        if (t === 125) d(), e++;
        else {
          let l = r.indexOf("}", e);
          l === -1 && (l = i), u(6, e, l);
        }
        break;
      case 6: {
        let l;
        t === 34 ? D() : (l = f(Rt, e)) >= 0 ? (d(), u(24, e, l)) : (l = f(Mt, e)) >= 0 || (l = f(Ot, e)) >= 0 || (l = f(Gt, e)) >= 0 ? (d(), u(25, e, l)) : o = H() || O(t);
        break;
      }
      case 7: {
        let l = r.charCodeAt(e + 1);
        switch (t) {
          case 34:
            D();
            break;
          case 40:
          case 91:
          case 123:
            O(t);
            break;
          case 93:
            d(), l === 41 ? u(46, e, e + 2) : l === 93 ? u(48, e, e + 2) : u(70, e, e + 1);
            break;
          case 41:
            d(), l === 93 ? u(52, e, e + 2) : l === 41 && r.charCodeAt(e + 2) === 41 ? u(54, e, e + 3) : u(68, e, e + 1);
            break;
          case 124:
            d(), u(67, e, e + 1);
            break;
          case 125:
            d(), u(72, e, e + 1);
            break;
          default: {
            if ((t === 126 || F(t)) && H()) break;
            let b = e + 1;
            for (; b < i; ) {
              let S = r.charCodeAt(b);
              if (S === 91 || S === 93 || S === 40 || S === 41 || S === 123 || S === 125 || S === 124 || S === 34) break;
              b++;
            }
            u(44, e, b);
          }
        }
        break;
      }
      case 8: {
        let l = r.charCodeAt(e + 1);
        if (t === 34) D();
        else {
          if ((t === 126 || F(t)) && H()) break;
          if ((t === 45 || t === 47 || t === 41) && l === 41) d(), u(43, e, e + 2);
          else if (t === 40 || t === 91 || t === 123) O(t);
          else if (t === 41 || t === 93 || t === 125) o = !1;
          else {
            let b = e + 1;
            for (; b < i; ) {
              let S = r.charCodeAt(b);
              if (S === 34 || S === 40 || S === 41 || S === 91 || S === 93 || S === 123 || S === 125 || (S === 45 || S === 47) && r.charCodeAt(b + 1) === 41 || (S === 126 || F(S)) && I(b) && f(Be, b) >= 0) break;
              b++;
            }
            u(44, e, b);
          }
        }
        break;
      }
      case 9: {
        let l = r.charCodeAt(e + 1);
        if (t === 34) {
          D();
          break;
        }
        if ((t === 126 || F(t)) && H()) break;
        switch (t) {
          case 40:
            l === 45 || l === 91 || l === 40 && r.charCodeAt(e + 2) === 40 ? O(t) : l === 93 ? (d(), u(56, e, e + 2)) : O(t);
            break;
          case 91:
          case 123:
            O(t);
            break;
          case 92:
            l === 93 ? (d(), u(56, e, e + 2)) : u(44, e, e + 1);
            break;
          case 47:
            l === 93 ? (d(), u(57, e, e + 2)) : u(44, e, e + 1);
            break;
          case 93:
          case 41:
            l === 93 ? (d(), u(56, e, e + 2)) : o = !1;
            break;
          case 125:
            o = !1;
            break;
          default: {
            if ((t === 63 || t === 61) && l === 93) {
              d(), u(56, e, e + 2);
              break;
            }
            let b = e + 1;
            for (; b < i; ) {
              let S = r.charCodeAt(b);
              if (S === 92 || S === 91 || S === 93 || S === 40 || S === 41 || S === 123 || S === 125 || S === 47) break;
              b++;
            }
            u(44, e, b);
          }
        }
        break;
      }
      case 10:
        o = n(t, Pe, 45, -1);
        break;
      case 11:
        o = n(t, We, 61, -1);
        break;
      case 12:
        o = n(t, me, 46, 45);
        break;
      case 13:
        if (t === 34) D();
        else if (F(t)) d(), e++;
        else {
          let l = e + 1;
          for (; l < i && !F(r.charCodeAt(l)); ) l++;
          u(19, e, l);
        }
        break;
      case 14:
        if (t === 40) {
          let l = f(Ht, e);
          d(), l >= 0 ? e = l : (m(15), e++);
        } else {
          let l = r.indexOf("(", e);
          l === -1 && (l = i), u(8, e, l);
        }
        break;
      case 15:
        if (t === 41) d(), e++;
        else {
          let l = r.indexOf(")", e);
          l === -1 && (l = i), u(9, e, l);
        }
        break;
      case 16:
        if (t === 34) m(17), u(7, e, e + 1);
        else if (t === 125) d(), e++;
        else if (t === 94) o = !1;
        else {
          let l = e + 1;
          for (; l < i; ) {
            let b = r.charCodeAt(l);
            if (b === 125 || b === 94 || b === 34) break;
            l++;
          }
          u(7, e, l);
        }
        break;
      case 17:
        if (t === 34) d(), u(7, e, e + 1);
        else {
          let l = r.indexOf('"', e);
          l === -1 && (l = i), c.push(7), a.push(r.slice(e, l).replace(Kt, "<br/>")), h.push(e), e = l;
        }
        break;
    }
    if (!o) return c.push(1), a.push(""), h.push(e), { types: c, texts: a, starts: h };
    continue e;
  }
  return c.push(0), a.push(""), h.push(i), { types: c, texts: a, starts: h };
}
var pe = new Uint8Array(77);
for (let r of [32, 64, 63, 65, 13, 38, 35, 36, 33, 39, 66]) pe[r] = 1;
var Se = new Uint8Array(77);
for (let r of [32, 66, 64, 25, 63, 65, 38, 35, 36, 33, 39]) Se[r] = 1;
var Ee = new Uint8Array(77);
for (let r of [32, 64, 75, 65, 36, 66, 35, 39, 33, 12, 14, 16, 17, 19, 20, 25, 21, 22, 63, 61, 41]) Ee[r] = 1;
var xe = new Uint8Array(77);
for (let r of [32, 64, 35, 75, 33, 12]) xe[r] = 1;
var Ue = "'UNICODE_TEXT', 'TEXT', 'TAGSTART'", ne = [], jt = /}\s*\n/g;
function Yt(r, i) {
  let c = r.includes("}") ? r.replace(jt, `}
`) : r, { types: a, texts: h, starts: T } = Xt(c), s = 0, e, g = (n) => {
    let t = a[s];
    throw t === 1 ? _e("flowchart", c, T[s], "", !0) : _e("flowchart", c, T[s], `Expecting ${n}, got '${Ve[t]}'`);
  }, v = (n, t = "") => (a[s] !== n && g(`'${Ve[n]}'${t ? ", " + t : ""}`), h[s++]), $ = () => {
    let n = a[s];
    n !== 74 && n !== 37 && n !== 76 && g("'SEMI', 'NEWLINE', 'EOF'"), s++;
  }, k = () => {
    pe[a[s]] === 0 && g("'NODE_STRING'");
    let n = h[s++];
    for (; pe[a[s]] === 1; ) n += h[s++];
    return n;
  }, R = () => {
    Se[a[s]] === 0 && g("'NODE_STRING'");
    let n = h[s++];
    for (; Se[a[s]] === 1; ) n += h[s++];
    return n;
  }, C = () => {
    let n = a[s], t;
    if (n === 11) t = "string";
    else if (n === 10) t = "markdown";
    else if (n === 44 || n === 60 || n === 51 || n === 66) t = "text";
    else return g(`${Ue}, 'TAGEND', 'STR', 'MD_STR'`);
    let o = h[s++];
    for (; ; ) {
      let l = a[s];
      if (l !== 44 && l !== 60 && l !== 51 && l !== 66) break;
      o += h[s++];
    }
    return { text: o, type: t };
  }, x = (n) => {
    v(n, Ue);
  }, M = () => {
    let n = a[s], t;
    if (n === 11) t = "string";
    else if (n === 10) t = "markdown";
    else if (n === 42 || n === 66) t = "text";
    else return g("'EDGE_TEXT', 'STR', 'MD_STR'");
    let o = h[s++];
    for (; a[s] === 42 || a[s] === 66; ) o += h[s++];
    return { text: o, type: t };
  }, B = () => {
    let n = a[s], t;
    if (n === 11) t = "text";
    else if (n === 10) t = "markdown";
    else if (Ee[n] === 1) t = "text";
    else return g("'NODE_STRING', 'STR', 'MD_STR'");
    let o = h[s++];
    for (; Ee[a[s]] === 1; ) o += h[s++];
    return { text: o, type: t };
  }, u = () => {
    let n = h[s++];
    for (; a[s] === 7; ) n += h[s++];
    return n;
  }, m = () => {
    let n = k(), t;
    switch (a[s]) {
      case 71:
        s++, t = C(), x(70), i.addVertex(n, t, "square");
        break;
      case 55:
        s++, t = C(), x(54), i.addVertex(n, t, "doublecircle");
        break;
      case 69:
        s++, a[s] === 69 ? (s++, t = C(), x(68), v(68), i.addVertex(n, t, "circle")) : (t = C(), x(68), i.addVertex(n, t, "round"));
        break;
      case 45:
        s++, t = C(), x(43), i.addVertex(n, t, "ellipse");
        break;
      case 47:
        s++, t = C(), x(46), i.addVertex(n, t, "stadium");
        break;
      case 49:
        s++, t = C(), x(48), i.addVertex(n, t, "subroutine");
        break;
      case 50: {
        s++;
        let o = v(64);
        v(35);
        let l = v(64);
        v(67), t = C(), x(70), i.addVertex(n, t, "rect", void 0, void 0, void 0, { [o]: l });
        break;
      }
      case 53:
        s++, t = C(), x(52), i.addVertex(n, t, "cylinder");
        break;
      case 73:
        s++, a[s] === 73 ? (s++, t = C(), x(72), v(72), i.addVertex(n, t, "hexagon")) : (t = C(), x(72), i.addVertex(n, t, "diamond"));
        break;
      case 51:
        s++, t = C(), x(70), i.addVertex(n, t, "odd");
        break;
      case 58:
        s++, t = C(), a[s] === 57 ? (s++, i.addVertex(n, t, "lean_right")) : (x(56), i.addVertex(n, t, "trapezoid"));
        break;
      case 59:
        s++, t = C(), a[s] === 56 ? (s++, i.addVertex(n, t, "lean_left")) : (x(57), i.addVertex(n, t, "inv_trapezoid"));
        break;
      default:
        i.addVertex(n);
    }
    return n;
  }, d = () => {
    let n = m();
    return a[s] === 34 && (s++, i.setClass(n, k())), n;
  }, f = () => {
    let n = [d()];
    for (e = void 0; ; ) {
      let t = a[s] === 7 ? u() : void 0;
      if (a[s] !== 75) return e = t, n;
      do
        s++;
      while (a[s] === 75);
      if (a[s] !== 36) return t !== void 0 && g("'AMP'"), n;
      s++, a[s] !== 75 && g("'SPACE'");
      do
        s++;
      while (a[s] === 75);
      let o = d();
      t !== void 0 && i.addVertex(n[n.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, t), n.push(o);
    }
  }, w = () => {
    let n;
    if (a[s] === 31 && (n = h[s++]), a[s] === 40) {
      let t = i.destructLink(h[s++]);
      return n !== void 0 && (t.id = n), a[s] === 67 && (s++, t.text = C(), x(67), a[s] === 75 && s++), t;
    }
    if (a[s] === 41) {
      let t = h[s++], o = M(), l = v(40, "'EDGE_TEXT'"), b = i.destructLink(l, t);
      return b.text = o, n !== void 0 && (b.id = n), b;
    }
    return g("'LINK', 'START_LINK'");
  }, _ = () => {
    let n = f();
    e !== void 0 && i.addVertex(n[n.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e);
    let t = n;
    for (; ; ) {
      let o = a[s];
      if (o !== 40 && o !== 41 && o !== 31) return t;
      let l = w(), b = f();
      e !== void 0 && i.addVertex(b[b.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, e), i.addLink(n, b, l), t = b.concat(t), n = b;
    }
  }, I = () => {
    xe[a[s]] === 0 && g("'NODE_STRING', 'NUM', 'COLON', 'BRKT'");
    let n = h[s++];
    for (; xe[a[s]] === 1; ) n += h[s++];
    return n;
  }, D = () => {
    let n = [I()];
    for (; a[s] === 38; ) s++, n.push(I());
    return n;
  }, H = () => {
    s++, v(75);
    let n;
    if (a[s] === 13) n = [h[s++]];
    else for (n = [v(32, "'DEFAULT'")]; a[s] === 38; ) s++, n.push(v(32));
    if (v(75), a[s] !== 15) {
      i.updateLink(n, D());
      return;
    }
    s++, v(75);
    let t = R();
    if (a[s] === 75) {
      s++;
      let o = D();
      i.updateLinkInterpolate(n, t), i.updateLink(n, o);
    } else i.updateLinkInterpolate(n, t);
  }, O = (n, t) => {
    if (a[s] !== 75) {
      i.setLink(n, t);
      return;
    }
    if (s++, a[s] === 23) {
      i.setLink(n, t, h[s++]);
      return;
    }
    let o = v(11, "'LINK_TARGET'");
    a[s] === 75 ? (s++, i.setLink(n, t, v(23))) : i.setLink(n, t), i.setTooltip(n, o);
  }, re = () => {
    let n = h[s++];
    switch (a[s]) {
      case 8: {
        let t = h[s++], o = a[s] === 9, l = o ? h[s++] : void 0, b;
        a[s] === 75 && (s++, b = v(11)), o ? i.setClickEvent(n, t, l) : i.setClickEvent(n, t), b !== void 0 && i.setTooltip(n, b);
        return;
      }
      case 18:
        s++, O(n, v(11));
        return;
      case 11:
        O(n, h[s++]);
        return;
      default: {
        let t = R();
        if (a[s] === 75) {
          s++;
          let o = v(11);
          i.setClickEvent(n, t), i.setTooltip(n, o);
        } else i.setClickEvent(n, t);
      }
    }
  }, z = () => {
    s++;
    let n = a[s];
    if (n === 74 || n === 37 || n === 76) return s++, { id: void 0, title: void 0, list: [], collect: !1 };
    v(75, "'SEMI', 'NEWLINE', 'EOF'");
    let t = B(), o = t;
    return a[s] === 71 && (s++, o = C(), x(70)), n = a[s], n !== 74 && n !== 37 && n !== 76 && g("'SEMI', 'NEWLINE', 'EOF', 'SQS'"), s++, { id: t, title: o, list: [], collect: !1 };
  }, Z = () => {
    let n = a[s];
    switch (n) {
      case 12: {
        s++, v(75);
        let t = k();
        return v(75), i.addVertex(t, void 0, void 0, D()), $(), ne;
      }
      case 14:
        return H(), $(), ne;
      case 16: {
        s++, v(75);
        let t = k();
        return v(75), i.addClass(t, D()), $(), ne;
      }
      case 17: {
        s++, v(75);
        let t = k();
        return v(75), i.setClass(t, k()), $(), ne;
      }
      case 19:
        return re(), $(), ne;
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        return s++, { stmt: "dir", value: qt[n - 26] };
      case 2: {
        s++;
        let t = v(3).trim();
        return i.setAccTitle(t), t;
      }
      case 4: {
        s++;
        let t = v(5).trim();
        return i.setAccDescription(t), t;
      }
      case 6: {
        let t = h[s++].trim();
        return i.setAccDescription(t), t;
      }
      default: {
        pe[n] === 0 && g(Fe);
        let t = _();
        return $(), t;
      }
    }
  }, ae = () => {
    let n = [], t = [], o = !1;
    for (; ; ) {
      let l = a[s];
      if (l === 0) break;
      if (l === 22) {
        let b = n.pop();
        if (b === void 0) break;
        s++;
        let S = i.addSubGraph(b.id, t, b.title);
        t = b.list, o = b.collect, o && t.push(S);
      } else if (l === 37 || l === 74 || l === 75 || l === 76) o && t.push(h[s]), s++;
      else if (l === 21) {
        let b = z();
        b.list = t, b.collect = o, n.push(b), t = [], o = !0;
      } else {
        let b = Z();
        o && (!Array.isArray(b) || b.length > 0) && t.push(b);
      }
    }
    n.length > 0 && g("'end'");
  };
  for (; a[s] === 75 || a[s] === 74; ) s++;
  if (v(20, "'SPACE', 'NEWLINE'"), a[s] === 24) s++, i.setDirection("TB");
  else {
    let n = v(25, "'NODIR'"), t = a[s];
    if (t === 75) {
      do
        s++;
      while (a[s] === 75);
      t = a[s], t !== 74 && g("'NEWLINE', 'SPACE'");
    } else t !== 37 && t !== 74 && g("'SEMI', 'NEWLINE', 'SPACE'");
    s++, i.setDirection(n);
  }
  ae(), a[s] !== 0 && g(Fe);
}
var qt = ["TB", "BT", "RL", "LR", "TD"], Fe = "'SEMI', 'NEWLINE', 'SPACE', 'EOF', 'subgraph', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'STYLE', 'LINKSTYLE', 'CLASSDEF', 'CLASS', 'CLICK', 'NODE_STRING'";
function zt(r) {
  if (r.img) return "imageSquare";
  if (r.icon) return r.form === "circle" ? "iconCircle" : r.form === "square" ? "iconSquare" : r.form === "rounded" ? "iconRounded" : "icon";
  switch (r.type) {
    case "square":
    case void 0:
      return "squareRect";
    case "round":
      return "roundedRect";
    default:
      return r.type;
  }
}
function Qt(r) {
  switch (r) {
    case "arrow_point":
    case "arrow_circle":
    case "arrow_cross":
      return ["none", r];
    case "double_arrow_point":
    case "double_arrow_circle":
    case "double_arrow_cross": {
      let i = r.replace("double_", "");
      return [i, i];
    }
  }
  return ["none", "arrow_point"];
}
function Jt(r, i) {
  let c = [], a = [], h = r.subgraphs, T = (d) => {
    let f = [];
    for (let w of d) {
      let _ = r.classes.get(w);
      _?.styles && (f = [...f, ..._.styles].map((I) => I.trim())), _?.textStyles && (f = [...f, ..._.textStyles].map((I) => I.trim()));
    }
    return f;
  }, s = /* @__PURE__ */ new Map();
  for (let d of h) for (let f of d.nodes) r.subgraph(f) && s.set(f, d.id);
  let e = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
  for (let d of h) {
    let f = s.get(d.id);
    if (f === void 0) continue;
    let w = g.get(f);
    w ? w.push(d.id) : g.set(f, [d.id]);
  }
  let v = 0;
  for (let d of h) {
    if (s.has(d.id)) continue;
    let f = [d.id];
    for (; f.length > 0; ) {
      let w = f.pop();
      if (e.has(w)) continue;
      e.set(w, v++);
      let _ = g.get(w);
      if (_) for (let I = _.length - 1; I >= 0; I--) f.push(_[I]);
    }
  }
  let $ = (d) => r.subgraph(d)?.metadata?.view === "collapsed", k = !1;
  for (let d of h) d.metadata?.view === "collapsed" && (k = !0);
  let R = /* @__PURE__ */ new Map(), C = (d) => {
    let f = [], w = /* @__PURE__ */ new Set(), _ = d;
    for (; _ !== void 0 && !R.has(_) && !w.has(_); ) w.add(_), f.push(_), _ = s.get(_);
    let I = _ !== void 0 ? R.get(_) : void 0;
    for (let D = f.length - 1; D >= 0; D--) I === void 0 && $(f[D]) && (I = f[D]), R.set(f[D], I);
    return I;
  }, x = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map();
  for (let d of k ? h : []) {
    let f = C(d.id);
    if (f !== void 0) {
      d.id !== f && (x.add(d.id), M.set(d.id, f));
      for (let w of d.nodes) w !== f && (x.add(w), M.set(w, f));
    }
  }
  let B = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
  for (let d = h.length - 1; d >= 0; d--) {
    let f = h[d];
    if (!x.has(f.id)) {
      f.nodes.length > 0 && u.add(f.id);
      for (let w of f.nodes) B.set(w, f.id);
    }
  }
  let m = /* @__PURE__ */ new Map();
  for (let d = h.length - 1; d >= 0; d--) {
    let f = h[d];
    if (x.has(f.id)) continue;
    let w = f.metadata?.view === "collapsed", _ = { id: f.id, label: f.title, labelType: f.labelType, parentId: B.get(f.id), cssStyles: [], cssCompiledStyles: T(f.classes), cssClasses: f.classes.join(" "), shape: w ? "collapsedGroup" : "rect", dir: f.dir, isGroup: !w, colorIndex: e.get(f.id) };
    w || (_.metadata = f.metadata), c.push(_), m.set(f.id, _);
  }
  for (let d of r.nodes.values()) {
    if (x.has(d.id)) continue;
    let f = m.get(d.id);
    if (f) {
      f.cssStyles = d.styles, f.cssCompiledStyles = T(d.classes), f.cssClasses = d.classes.join(" ");
      continue;
    }
    let w = u.has(d.id), _ = { id: d.id, label: d.text, labelType: d.labelType, parentId: B.get(d.id), cssStyles: d.styles, cssCompiledStyles: T(["default", "node", ...d.classes]), cssClasses: "default " + d.classes.join(" "), dir: d.dir, link: d.link, linkTarget: d.linkTarget, tooltip: r.tooltips.get(d.id), icon: d.icon, pos: d.pos, img: d.img, assetWidth: d.assetWidth, assetHeight: d.assetHeight, constraint: d.constraint, isGroup: w, shape: w ? "rect" : zt(d) };
    c.push(_), m.set(d.id, _);
  }
  return r.edges.forEach((d, f) => {
    let w = M.get(d.start) ?? d.start, _ = M.get(d.end) ?? d.end;
    if (w === _ && (M.has(d.start) || M.has(d.end))) return;
    let [I, D] = Qt(d.type), H = [...r.defaultEdgeStyle ?? []];
    d.style && H.push(...d.style);
    let O = d.stroke === "invisible" || d.type === "arrow_open";
    a.push({ id: d.id || `L_${w}_${_}_${f}`, isUserDefinedId: d.isUserDefinedId, start: w, end: _, type: d.type ?? "normal", label: d.text, labelType: d.labelType, thickness: d.stroke, pattern: d.stroke, minlen: d.length, classes: d.stroke === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link", arrowTypeStart: O ? "none" : I, arrowTypeEnd: O ? "none" : D, cssCompiledStyles: T(d.classes), style: H, animate: d.animate, animation: d.animation, curve: d.interpolate || r.defaultInterpolate || i });
  }), { nodes: c, edges: a };
}
var Zt = 40, er = 16, tr = 48, He = 20, ve = 26, Te = ' fill="var(--_s)" stroke="var(--_b)"', rr = ' stroke="var(--_b)"';
function Ae(r, i, c) {
  let a = r[i];
  return typeof a == "number" && a > 0 ? Math.min(a, 2e3) : c;
}
function oe(r, i) {
  return r !== void 0 && r > 0 && r <= 4e3 ? r : i;
}
function sr(r, i, c, a) {
  let h = (T) => kt(c, (s) => ir(r, i, c, a, T, s));
  return bt(r.direction) ? yt(c, h) : h(!1);
}
function ir(r, i, c, a, h, T) {
  let s = T ? 12 : He, e = a ? i[a.type] : void 0, g = typeof e == "object" && e !== null && !Array.isArray(e) ? e : i.flowchart ?? {}, v = Jt(r, typeof g.curve == "string" ? g.curve : void 0);
  a?.prepare(v);
  let $ = c.fontSize ?? 16, k = Math.round($ * 0.875), R = c.measurer ?? Je(c.fontFamily), C = Math.min(Ae(g, "wrappingWidth", 200), a && T ? 100 : 1 / 0), x = c.padding ?? 8, M = c.icons, B = /* @__PURE__ */ new Map(), u = [], m = [];
  v.nodes.forEach((y, p) => B.set(y.id, p));
  for (let y of v.nodes) {
    let p = Me(y.cssStyles.length > 0 ? y.cssCompiledStyles.concat(y.cssStyles) : y.cssCompiledStyles), E = (p.bold ? 1 : 0) | (p.italic ? 2 : 0), A = y.labelType === "markdown", ee = p.fontSize ?? $, q, G;
    if (y.isGroup) {
      let N = ue(y.label, A, R, ee, a && T ? Math.max(80, De(c) / 2) : 4e3, E);
      q = { node: y, style: p, label: N, shape: "group", w: 0, h: 0, dy: 0, loops: 0 }, G = Ie(0, 0), G.isGroup = !0, G.dir = y.dir ? Le(y.dir) : void 0, G.padX = s, G.padTop = N.height > 0 ? N.height + 16 : He, G.padBottom = s, G.minW = N.width + 2 * s - 12;
    } else {
      let N = ze(y.shape), ie = y.img || y.icon || ht(N) ? y.label : void 0, U = ue(ie, A, R, ee, C, E), J, P, K = 0;
      if (y.img || y.icon) {
        let L = y.img ? 80 : 48, X = oe(y.assetWidth, L), Y = oe(y.assetHeight, L);
        J = Math.max(X, U.width + 8), P = Y + (U.height > 0 ? U.height + 6 : 0), K = y.pos === "t" ? -Y / 2 : Y / 2, U.height === 0 && (K = 0);
      } else {
        let L = ft(N, U.width, U.height);
        J = L.w, P = L.h, K = L.dy;
      }
      q = { node: y, style: p, label: U, shape: N, w: J, h: P, dy: K, loops: 0 }, G = Ie(J, P);
    }
    G.seq = u.length, u.push(q), m.push(G);
  }
  v.nodes.forEach((y, p) => {
    m[p].parent = y.parentId !== void 0 ? B.get(y.parentId) ?? -1 : -1;
  });
  let d = h ? "TB" : Le(r.direction), f = (y) => {
    let p;
    for (let E = m[y].parent, A = 0; E >= 0 && p === void 0 && A < 1e4; E = m[E].parent, A++) p = m[E].dir;
    return p ?? (p = d), p === "LR" || p === "RL";
  };
  u.forEach((y, p) => {
    y.node.isGroup ? m[p].span = 1 / 0 : !y.node.img && !y.node.icon && (m[p].span = pt(y.shape, y.w, y.h, f(p)));
  });
  let w = [], _ = [], I = [];
  for (let y of v.edges) {
    let p = B.get(y.start), E = B.get(y.end);
    if (p === void 0 || E === void 0) continue;
    let A = ue(y.label, y.labelType === "markdown", R, k, C);
    p === E && (u[p].loops++, f(p) ? m[p].h += 2 * (ve + (A.height > 0 ? A.height + 8 : 0)) : m[p].w += 2 * (ve + (A.width > 0 ? A.width + 12 : 0))), I.push(y), _.push(A), w.push({ src: p, dst: E, minlen: y.minlen ?? 1, labelW: A.width > 0 ? A.width + 12 : 0, labelH: A.height > 0 ? A.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let D = { nodeSep: Ae(g, "nodeSpacing", Zt) * (T ? 0.5 : 1), edgeSep: er, rankSep: Ae(g, "rankSpacing", tr) * (T ? 0.75 : 1), portSep: 20, tracks: typeof g.curve == "string" && /^step/.test(g.curve), straight: g.curve === "linear", headRoom: ce("arrow_point") }, H = a ? a.layout(m, w, d, D, T) : at(m, w, d, D), O = ue(r.title, !1, R, $, T ? De(c) : 4e3, 1), re = O.height > 0 ? O.height + 12 : 0, z = Math.max(H.width, O.width), Z = x + (z - H.width) / 2, ae = x + re;
  lt(m, w, Z, ae);
  let n = Math.ceil(z + 2 * x), t = Math.ceil(H.height + re + 2 * x), o = [], l = /* @__PURE__ */ new Map(), b = !1;
  for (let y of m) y.isGroup && (b = !0);
  if (b) for (let y of w) tt(l, y.route);
  let S = "", Q = "", j = "";
  for (let y = 0; y < u.length; y++) {
    let p = u[y], E = m[y], A = p.node, ee = E.x, q = E.y, G = Oe(A.cssClasses.replace(/^default\s?/, "")), N = he(A.id);
    if (E.isGroup && a?.drawGroup && E.parent < 0) {
      S += a.drawGroup(E, p.label, p.style, G, N, d, M);
      continue;
    }
    if (E.isGroup) {
      let L = rt(E, p.label.width, l, s), X = q - E.h / 2 + 8 + p.label.height / 2, Y = ` class="pele-cluster-label" fill="var(--_m)"${p.style.text}`, te = st(E, p.label.width, L, l);
      te && (Q += it(p.label, L, X, Y, N, m, y, M)), S += `<g class="pele-cluster${G}" data-id="${N}"><rect x="${V(ee - E.w / 2)}" y="${V(q - E.h / 2)}" width="${V(E.w)}" height="${V(E.h)}" rx="${At}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${p.style.shape}/>` + (te ? "" : ye(p.label, L, X, Y, M)) + "</g>";
      continue;
    }
    let ie = p.w, U = p.h, J;
    if (A.img) {
      let L = oe(A.assetWidth, 80), X = oe(A.assetHeight, 80), Y = p.label.height > 0 ? A.pos === "t" ? U / 2 - X : -U / 2 : -X / 2, te = nt(Ke(A.img), c);
      J = te === void 0 ? "" : `<image href="${fe(te)}" x="${V(-L / 2)}" y="${V(Y)}" width="${V(L)}" height="${V(X)}" preserveAspectRatio="${A.constraint === "on" ? "xMidYMid meet" : "none"}"/>`;
    } else if (A.icon) {
      let L = oe(A.assetHeight, 48), X = p.label.height > 0 ? A.pos === "t" ? U / 2 - L : -U / 2 : -L / 2, Y = A.shape === "icon" ? "" : A.shape === "iconCircle" ? `<circle cy="${V(X + L / 2)}" r="${V(L / 2)}"${Te}${p.style.shape}/>` : `<rect x="${V(-L / 2)}" y="${V(X)}" width="${V(L)}" height="${V(L)}" rx="${A.shape === "iconRounded" ? 8 : 0}"${Te}${p.style.shape}/>`, te = L * 0.6;
      J = Y + `<svg class="pele-icon" data-icon="${he(A.icon)}" x="${V(-te / 2)}" y="${V(X + (L - te) / 2)}" width="${V(te)}" height="${V(te)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${M?.(A.icon) ?? ""}</svg>`;
    } else J = gt(p.shape, ie, U, Te + p.style.shape, rr + p.style.line);
    let P = ye(p.label, 0, p.dy, ` class="pele-label"${p.style.text}`, M);
    if (/ internal-link(?: |$)/.test(G + " ") && A.label && c.links !== !1) {
      let L = Ze(A.label), X = ot(dt(L), c) !== void 0, Y = fe(L);
      P = `<a class="internal-link"${X ? ` href="${Y}"${ct(c)}` : ""} data-href="${Y}">${P}</a>`, o.push({ id: A.id, href: L, internal: !0 });
    }
    let K = J + P;
    A.tooltip && (K = `<title>${he(A.tooltip)}</title>` + K), A.link && (K = ut(K, A.link, A.id, o, c, A.linkTarget ? ` target="${fe(A.linkTarget)}"` : "")), j += `<g class="pele-node pele-shape-${p.shape}${G}" data-id="${N}" transform="translate(${V(ee)},${V(q)})">${K}</g>`;
  }
  let se = Tt();
  for (let y = 0; y < w.length; y++) {
    let p = w[y];
    p.src === p.dst || I[y].thickness === "invisible" || p.route.length < 6 || (se.add(p.src, de(p.route, 0, m[p.src]), I[y].arrowTypeStart), se.add(p.dst, de(p.route, p.route.length - 3, m[p.dst]), I[y].arrowTypeEnd));
  }
  let ge = "", be = "", Ce = /* @__PURE__ */ new Map();
  for (let y = 0; y < w.length; y++) {
    let p = w[y], E = I[y], A = _[y], ee = E.style.length > 0 || E.cssCompiledStyles.length > 0 ? Me(E.cssCompiledStyles.concat(E.style)) : void 0;
    if (E.thickness !== "invisible") {
      let q = E.arrowTypeStart, G = E.arrowTypeEnd, N;
      if (p.src === p.dst) {
        let P = u[p.src], K = Ce.get(p.src) ?? 0;
        Ce.set(p.src, K + 1), N = wt(m[p.src], P.w, P.h, K, f(p.src), ve, ce(G), p);
      } else {
        let P = p.route.slice(), K = se.of(p.src, de(P, 0, m[p.src])), L = se.of(p.dst, de(P, P.length - 3, m[p.dst]));
        Ne(P, 0, u[p.src], m[p.src]), Ne(P, P.length - 3, u[p.dst], m[p.dst]), N = mt(P, E.curve, ce(q), ce(G), K, L);
      }
      let ie = ee?.stroke && E.thickness !== "invisible" ? fe(ee.stroke) : "var(--_l)", U = "";
      E.thickness === "thick" ? U += ' stroke-width="2.5"' : E.thickness === "dotted" && (U += ' stroke-dasharray="3 4"');
      let J = Oe(E.classes.replace(/edge-thickness-normal|edge-pattern-solid|flowchart-link/g, ""));
      ge += `<g class="pele-edge${J}" data-id="${he(E.id)}"${ee?.line ?? ""}><path d="${N.d}"${U}/>` + Re(q, N.sx, N.sy, N.sdx, N.sdy, ie) + Re(G, N.ex, N.ey, N.edx, N.edy, ie) + "</g>";
    }
    if (A.width > 0) {
      let q = p.labelX, G = p.labelY;
      be += vt(E.id, A, q, G, ee?.text ?? "", M);
    }
  }
  return { svg: St(a?.type ?? "flowchart", n, t, $, c, r, ye(O, n / 2, x + O.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (S ? `<g class="pele-clusters">${S}</g>` : "") + (ge ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${ge}</g>` : "") + (Q ? `<g class="pele-cluster-titles">${Q}</g>` : "") + (be ? `<g class="pele-edge-labels" font-size="${k}">${be}</g>` : "") + `<g class="pele-nodes">${j}</g>`), width: n, height: t, links: o };
}
var ar = { type: "flowchart", parse(r, i, c, a, h) {
  let T = i.flowchart ?? {}, s = new _t({ inheritDir: T.inheritDir === !0, maxEdges: h.maxEdges });
  return c && (s.title = c), Yt(r, s), s;
}, render: sr };
const yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  flowchart: ar
}, Symbol.toStringTag, { value: "Module" }));
export {
  ar as G,
  yr as N,
  sr as y
};
