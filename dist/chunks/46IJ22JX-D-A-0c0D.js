var jt = Object.defineProperty;
var qt = (t, a, s) => a in t ? jt(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[a] = s;
var D = (t, a, s) => qt(t, typeof a != "symbol" ? a + "" : a, s);
import { E as Vt, P as Qt, V as zt } from "./URA2L2QI-BZvG0umE.js";
import { x as _t, L as Tt, e as kt, i as nt, H as Gt } from "./lazy-CehDEl4q.js";
import { p as Jt, h as Et } from "./DKTLEL5E-BCFlW8pF.js";
import { D as vt, S as Zt, w as ft } from "./HWDLEDTA-Ctstf22F.js";
import { _ as rt, h as Xt, y as Dt, a as te, x as A, f as Mt, $ as ee, g as Lt } from "./RZSVICHU-DoNHkG46.js";
var Ot = 1e5;
function ae(t) {
  switch (t) {
    case "[]":
      return "square";
    case "()":
      return "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
function re(t) {
  switch (t.trim().slice(-1)) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case ">":
      return "arrow_point";
    default:
      return "";
  }
}
function se(t) {
  switch (t.trim().charAt(0)) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case "<":
      return "arrow_point";
    default:
      return "arrow_open";
  }
}
function le(t) {
  return t.includes("==") ? "thick" : "normal";
}
function ie(t) {
  return t.includes(".-") ? "dotted" : "solid";
}
function Nt(t, a) {
  let s = t.flat(), r = -1;
  for (let h of s) if (h.type === "column-setting") {
    r = h.columns ?? -1;
    break;
  }
  return { list: s, at: 0, parent: a, children: [], columns: r };
}
var he = class {
  constructor(t = {}) {
    D(this, "type", "block");
    D(this, "title");
    D(this, "root", { id: "root", type: "composite", children: [], columns: -1 });
    D(this, "blocks", []);
    D(this, "edges", []);
    D(this, "classes", /* @__PURE__ */ new Map());
    D(this, "byId", /* @__PURE__ */ new Map());
    D(this, "typeStr2Type", ae);
    D(this, "edgeStrToEdgeData", re);
    D(this, "edgeStrToEdgeStartData", se);
    D(this, "edgeStrToThickness", le);
    D(this, "edgeStrToPattern", ie);
    D(this, "warn");
    D(this, "pending", /* @__PURE__ */ new Set());
    D(this, "edgeCount", /* @__PURE__ */ new Map());
    D(this, "ids", 0);
    D(this, "colors", 0);
    D(this, "spaces", 0);
    this.warn = t.warn;
  }
  generateId() {
    return "id-" + ++this.ids;
  }
  addStyleClass(t, a = "") {
    let s = this.classes.get(t);
    s || (s = { id: t, styles: [], textStyles: [] }, this.classes.set(t, s));
    for (let r of a.split(",")) {
      let h = r.indexOf(";"), i = (h === -1 ? r : r.slice(0, h) + r.slice(h + 1)).trim();
      r.includes("color") && s.textStyles.push(i.replace("fill", "bgFill").replace("color", "fill")), s.styles.push(i);
    }
  }
  addStyle2Node(t, a = "") {
    this.named(t).styles = a.split(",");
  }
  setCssClass(t, a) {
    var s;
    for (let r of t.split(",")) ((s = this.named(r.trim())).classes ?? (s.classes = [])).push(a);
  }
  named(t) {
    let a = this.byId.get(t);
    return a === void 0 && (a = { id: t, type: "na", children: [] }, this.byId.set(t, a), this.pending.add(t)), a;
  }
  setHierarchy(t) {
    let a = [Nt(t, this.root)];
    for (; a.length > 0; ) {
      let s = a[a.length - 1];
      if (s.at === s.list.length) {
        s.parent.children = s.children, a.pop();
        continue;
      }
      let r = s.list[s.at++];
      switch (s.columns > 0 && r.type !== "column-setting" && typeof r.widthInColumns == "number" && r.widthInColumns > s.columns && this.warn?.(`Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${s.columns}`), r.type) {
        case "classDef":
          this.addStyleClass(r.id, r.css);
          continue;
        case "applyClass":
          this.setCssClass(r.id, r.styleClass ?? "");
          continue;
        case "applyStyles":
          r.stylesStr && this.addStyle2Node(r.id, r.stylesStr);
          continue;
        case "column-setting":
          s.parent.columns = r.columns ?? -1;
          continue;
        case "edge": {
          let e = (this.edgeCount.get(r.id) ?? 0) + 1;
          this.edgeCount.set(r.id, e), r.id = e + "-" + r.id, this.edges.push(r);
          continue;
        }
      }
      r.id ?? (r.id = this.generateId()), r.label || (r.label = r.type === "composite" ? "" : r.id);
      let h = this.byId.get(r.id), i = h === void 0 || this.pending.delete(r.id);
      i ? (h && (r.classes = h.classes, r.styles = h.styles), r.type === "composite" && (r.colorIndex = this.colors++), this.byId.set(r.id, r)) : (r.type !== "na" && (h.type = r.type), r.label !== r.id && (h.label = r.label));
      let l = r.children;
      if (r.children = [], r.type === "space") {
        let e = r.width ?? 1;
        if (!(e <= Ot - this.spaces)) throw new _t(`A block diagram can hold at most ${Ot} space blocks.`, "limit", { type: "block" });
        this.spaces += Math.max(e, 0);
        for (let w = 0; w < e; w++) {
          let d = { ...r, id: r.id + "-" + w, children: [] };
          this.byId.set(d.id, d), s.children.push(d);
        }
      } else i && s.children.push(r);
      l && l.length > 0 && a.push(Nt(l, r));
    }
    this.blocks = this.root.children ?? [];
  }
}, Rt = ["$end", "INVALID", "BLOCK_DIAGRAM_KEY", "id-block", "COLUMNS", "MD_STR", "STR", "SPACE_BLOCK", "DEFAULT", "LINKSTYLE", "INTERPOLATE", "classDef", "DEFAULT_CLASSDEF_ID", "CLASSDEF_ID", "CLASSDEF_STYLEOPTS", "class", "CLASSENTITY_IDS", "STYLECLASS", "style", "STYLE_ENTITY_IDS", "STYLE_DEFINITION_DATA", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "end", "NODE_DSTART", "NODE_DEND", "BLOCK_ARROW_START", "BLOCK_ARROW_END", "DIR", "NODE_ID", "LINK", "START_LINK", "LINK_LABEL", "SIZE", "EOF"], ne = ["right", "left", "x", "y", "up", "down"], Ut = new Uint8Array(128);
for (let t of [9, 10, 11, 12, 13, 32, 40, 41, 45, 58, 60, 61, 62, 91, 123, 125]) Ut[t] = 1;
function ce(t) {
  let a = t.length, s = [], r = [], h = [], i = [], l = 0, e = 0, w = (b, o, n) => (s.push(b), r.push(o), h.push(e), e = n, !0), d = (b, o) => w(b, t.slice(e, o), o), u = (b) => {
    i.push(l), l = b;
  }, f = () => {
    i.length > 0 && (l = i.pop());
  }, c = (b) => {
    for (; b < a && kt(t.charCodeAt(b)); ) b++;
    return b;
  }, x = (b) => {
    for (; b < a; ) {
      let o = t.charCodeAt(b);
      if (o < 48 || o > 57) break;
      b++;
    }
    return b;
  }, m = (b) => {
    for (; b < a && nt(t.charCodeAt(b)); ) b++;
    return b;
  }, k = (b) => t.startsWith(b, e) && !nt(t.charCodeAt(e + b.length)), I = () => (t.charCodeAt(e + 1) === 96 ? (u(2), e += 2) : (u(1), e++), !0), N = (b) => {
    if (t.charCodeAt(b) !== 46) return -1;
    do
      b++;
    while (t.charCodeAt(b) === 46);
    if (t.charCodeAt(b) !== 45) return -1;
    let o = t.charCodeAt(b + 1);
    return o === 120 || o === 111 || o === 62 ? b + 2 : b + 1;
  }, T = (b) => {
    let o = t.charCodeAt(b);
    (o === 120 || o === 111 || o === 60) && b++;
    let n = t.charCodeAt(b);
    if (n === 46) return N(b);
    if (n !== 45 && n !== 61) return -1;
    let y = b + 1;
    for (; t.charCodeAt(y) === n; ) y++;
    if (y - b === 1) return n === 45 ? N(y) : -1;
    let M = t.charCodeAt(y);
    return M === 120 || M === 111 || M === 62 ? y + 1 : y - b >= 3 ? y : -1;
  }, R = () => {
    let b = T(e);
    if (b >= 0) return d(33, c(b));
    let o = t.charCodeAt(e) === 60 ? e + 1 : e, n = t.charCodeAt(o), y = t.charCodeAt(o + 1);
    return n === 45 && (y === 45 || y === 46) || n === 61 && y === 61 ? (u(6), d(34, c(o + 2))) : !1;
  }, L = (b) => {
    let o = t.indexOf(`
`, e);
    return o === -1 && (o = a), f(), d(b, o);
  }, P = (b, o) => {
    let n = m(e);
    if (n === e) return !1;
    for (; t.charCodeAt(n) === 44; ) {
      let y = c(n + 1), M = m(y);
      if (M === y) break;
      n = M;
    }
    return l = o, d(b, n);
  }, F = (b) => {
    if (kt(b)) return e = c(e + 1), !0;
    let o;
    switch (b) {
      case 98:
        if (t.startsWith("block", e)) {
          if (k("block-beta")) return d(2, e + 10);
          if (t.charCodeAt(e + 5) === 58) return d(3, e + 6);
          if (!nt(t.charCodeAt(e + 5))) return d(2, e + 5);
        }
        break;
      case 99:
        if (t.startsWith("columns", e)) {
          if (o = c(e + 7), o > e + 7) {
            if (t.startsWith("auto", o) && !nt(t.charCodeAt(o + 4))) return w(4, "-1", o + 4);
            let n = x(o);
            if (n > o) return w(4, t.slice(o, n), n);
          }
        } else if (t.startsWith("class", e)) {
          let n = t.startsWith("Def", e + 5), y = n ? e + 8 : e + 5;
          if (o = c(y), o > y) return u(n ? 7 : 9), d(n ? 11 : 15, o);
        }
        break;
      case 34:
        return I();
      case 115:
        if (t.startsWith("space", e)) {
          if (t.charCodeAt(e + 5) === 58) {
            let n = x(e + 6);
            if (n > e + 6) return w(7, t.slice(e + 6, n), n);
          }
          if (!nt(t.charCodeAt(e + 5))) return w(7, "1", e + 5);
        } else if (t.startsWith("style", e) && (o = c(e + 5), o > e + 5)) return u(11), d(18, o);
        break;
      case 100:
        if (k("default")) return d(8, e + 7);
        break;
      case 108:
        if (k("linkStyle")) return d(9, e + 9);
        break;
      case 105:
        if (k("interpolate")) return d(10, e + 11);
        break;
      case 97:
        if (t.startsWith("accTitle", e)) {
          if (o = c(e + 8), t.charCodeAt(o) === 58) return u(13), d(21, c(o + 1));
        } else if (t.startsWith("accDescr", e)) {
          o = c(e + 8);
          let n = t.charCodeAt(o);
          if (n === 58) return u(14), d(23, c(o + 1));
          if (n === 123) return u(15), e = c(o + 1), !0;
        }
        break;
      case 101:
        if (k("end")) return d(26, c(e + 3));
        break;
      case 45:
        return t.charCodeAt(e + 1) === 41 ? (u(3), d(27, e + 2)) : R();
      case 61:
        return R();
      case 60:
        return t.charCodeAt(e + 1) === 91 ? (u(4), d(29, e + 2)) : R();
      case 40: {
        let n = t.charCodeAt(e + 1), y = n === 45 || n === 91 ? 2 : n === 40 ? t.charCodeAt(e + 2) === 40 ? 3 : 2 : 1;
        return u(3), d(27, e + y);
      }
      case 41:
      case 123:
        return u(3), d(27, t.charCodeAt(e + 1) === b ? e + 2 : e + 1);
      case 62:
        return u(3), d(27, e + 1);
      case 91: {
        let n = t.charCodeAt(e + 1);
        return u(3), d(27, n === 91 || n === 124 || n === 40 || n === 92 || n === 47 ? e + 2 : e + 1);
      }
      case 58: {
        let n = x(e + 1);
        return n > e + 1 ? w(36, t.slice(e + 1, n), n) : !1;
      }
    }
    for (o = e; o < a; ) {
      let n = t.charCodeAt(o);
      if (n < 128 ? Ut[n] === 1 : kt(n)) break;
      o++;
    }
    return o > e && d(32, o);
  }, z = (b) => {
    let o = t.charCodeAt(e + 1), n = 0;
    switch (b) {
      case 34:
        return I();
      case 40:
        n = o === 45 ? 2 : o === 40 ? t.charCodeAt(e + 2) === 40 ? 3 : 2 : 1;
        break;
      case 41:
        n = o === 41 ? t.charCodeAt(e + 2) === 41 ? 3 : 2 : o === 93 ? 2 : 1;
        break;
      case 125:
        n = o === 125 ? 2 : 1;
        break;
      case 45:
        n = o === 41 ? 2 : 0;
        break;
      case 93:
        n = o === 93 || o === 41 || o === 62 ? 2 : 1;
        break;
      case 92:
      case 47:
        n = o === 93 ? 2 : 0;
        break;
    }
    return n === 0 ? !1 : (f(), d(28, e + n));
  }, q = (b) => {
    if (b === 41) return f(), f(), w(30, "]>", c(e + 1));
    let o = c(b === 44 ? e + 1 : e);
    for (let n of ne) if (t.startsWith(n, o)) {
      let y = c(o + n.length);
      return w(31, t.slice(b === 44 ? o : e, y), y);
    }
    return !1;
  };
  for (; ; ) {
    if (e >= a) {
      let n = -1;
      switch (l) {
        case 0:
          n = 37;
          break;
        case 1:
          n = 6;
          break;
        case 8:
          n = 14;
          break;
        case 10:
          n = 17;
          break;
        case 12:
          n = 20;
          break;
        case 13:
          n = 22;
          break;
        case 14:
          n = 24;
          break;
        case 15:
          n = 25;
          break;
      }
      e = a, n !== -1 && w(n, "", a);
      break;
    }
    let b = t.charCodeAt(e), o = !0;
    switch (l) {
      case 0:
        o = F(b);
        break;
      case 1:
        if (b === 34) f(), e++;
        else {
          let n = t.indexOf('"', e);
          d(6, n === -1 ? a : n);
        }
        break;
      case 2:
        if (b === 96) o = t.charCodeAt(e + 1) === 34, o && (f(), e += 2);
        else if (b === 34) o = !1;
        else {
          let n = e + 1;
          for (; n < a; ) {
            let y = t.charCodeAt(n);
            if (y === 96 || y === 34) break;
            n++;
          }
          d(5, n);
        }
        break;
      case 3:
        o = z(b);
        break;
      case 4:
        if (b === 34) I();
        else if (b === 93 && t.charCodeAt(e + 1) === 62) {
          let n = c(e + 2);
          o = t.charCodeAt(n) === 40, o && (u(5), e = n + 1);
        } else o = !1;
        break;
      case 5:
        o = q(b);
        break;
      case 6:
        if (b === 34) t.charCodeAt(e + 1) === 96 ? I() : (d(35, e + 1), u(1));
        else {
          let n = T(c(e));
          o = n >= 0, o && (f(), d(33, c(n)));
        }
        break;
      case 7: {
        let n = 12, y = t.startsWith("DEFAULT", e) ? e + 7 : e, M = c(y);
        (y === e || M === y) && (n = 13, y = m(e), M = c(y)), o = y > e && M > y, o && (l = 8, d(n, M));
        break;
      }
      case 8:
        L(14);
        break;
      case 9:
        o = P(16, 10);
        break;
      case 10:
        L(17);
        break;
      case 11:
        o = P(19, 12);
        break;
      case 12:
        L(20);
        break;
      case 13:
        L(22);
        break;
      case 14:
        L(24);
        break;
      case 15:
        if (b === 125) f(), e++;
        else {
          let n = t.indexOf("}", e);
          d(25, n === -1 ? a : n);
        }
        break;
    }
    if (!o) return s.push(1), r.push(""), h.push(e), { types: s, texts: r, starts: h };
  }
  return s.push(0), r.push(""), h.push(a), { types: s, texts: r, starts: h };
}
var ct = "'NODE_ID', 'COLUMNS', 'SPACE_BLOCK', 'BLOCK_DIAGRAM_KEY', 'id-block', 'classDef', 'class', 'style'";
function Pt(t) {
  let a = t[t.length - 1];
  return Array.isArray(a) ? (t.pop(), t.concat(a)) : t;
}
function oe(t, a) {
  let { types: s, texts: r, starts: h } = ce(t), i = 0, l = (c) => {
    let x = s[i];
    throw x === 1 ? Tt("block", t, h[i], "", !0) : Tt("block", t, h[i], `Expecting ${c}, got '${Rt[x]}'`);
  }, e = (c) => (s[i] !== c && l(`'${Rt[c]}'`), r[i++]), w = () => {
    let c = e(32);
    if (s[i] === 27) {
      let x = r[i++], m = e(6);
      return { id: c, label: m, typeStr: x + e(28) };
    }
    if (s[i] === 29) {
      let x = r[i++], m = e(6), k = [e(31)];
      for (; s[i] === 31; ) k.push(r[i++]);
      return { id: c, label: m, typeStr: x + e(30), directions: k };
    }
    return { id: c };
  }, d = () => {
    let c = w(), x = s[i] === 36 ? parseInt(r[i++], 10) : 1, m = { id: c.id, label: c.label, type: a.typeStr2Type(c.typeStr), directions: c.directions, widthInColumns: x }, k;
    for (; s[i] === 33 || s[i] === 34; ) {
      let I = "";
      s[i++] === 34 && (e(35), I = e(6), e(33));
      let N = r[i - 1], T = w(), R = a.edgeStrToEdgeData(N), L = a.edgeStrToEdgeStartData(N), P = a.edgeStrToThickness(N), F = a.edgeStrToPattern(N);
      k ?? (k = [{ id: m.id, label: m.label, type: m.type, directions: m.directions }]), m = { id: T.id, label: T.label, type: a.typeStr2Type(T.typeStr), directions: T.directions }, k.push({ id: k[k.length - 1].id + "-" + T.id, start: k[k.length - 1].id, end: T.id, label: I, type: "edge", thickness: P, pattern: F, directions: T.directions, arrowTypeEnd: R, arrowTypeStart: L }, m);
    }
    return k ?? m;
  };
  e(2);
  let u = [], f = [];
  for (; ; ) switch (s[i]) {
    case 32:
      f.push(d());
      break;
    case 4:
      f.push({ type: "column-setting", columns: parseInt(r[i++], 10) });
      break;
    case 7: {
      let c = parseInt(r[i++], 10);
      f.push({ id: a.generateId(), type: "space", label: "", width: c, children: [] });
      break;
    }
    case 2:
      i++, u.push({ list: f, header: void 0 }), f = [];
      break;
    case 3:
      i++, s[i] !== 32 && l("'NODE_ID'"), u.push({ list: f, header: d() }), f = [];
      break;
    case 26: {
      let c = u.pop();
      if (c === void 0 || f.length === 0) return l(ct);
      i++;
      let x = a.generateId(), m = Pt(f);
      f = c.list, f.push(c.header === void 0 ? { id: x, type: "composite", label: "", children: m } : { ...c.header, type: "composite", children: m });
      break;
    }
    case 11: {
      i++;
      let c = e(13).trim();
      f.push({ type: "classDef", id: c, css: e(14).trim() });
      break;
    }
    case 15: {
      i++;
      let c = e(16).trim();
      f.push({ type: "applyClass", id: c, styleClass: e(17).trim() });
      break;
    }
    case 18: {
      i++;
      let c = e(19).trim();
      f.push({ type: "applyStyles", id: c, stylesStr: e(20).trim() });
      break;
    }
    case 37:
      u.length > 0 && l(ct + ", 'end'"), f.length === 0 && l(ct), a.setHierarchy(Pt(f));
      return;
    default:
      l(f.length === 0 ? ct : ct + (u.length > 0 ? ", 'end'" : ", 'EOF'"));
  }
}
var Q = 1, G = 2, J = 4, Z = 8, it = 7, pt = 20, et = 12;
function de(t) {
  let a = 0;
  if (t) for (let s of t) switch (s.trim()) {
    case "right":
      a |= Q;
      break;
    case "left":
      a |= G;
      break;
    case "up":
      a |= J;
      break;
    case "down":
      a |= Z;
      break;
    case "x":
      a |= Q | G;
      break;
    case "y":
      a |= J | Z;
      break;
  }
  return a;
}
var tt = (t, a) => t & a ? 1 : 0;
function bt(t) {
  return t !== 0 && (t & (J | Z)) === 0 ? "x" : t !== 0 && (t & (Q | G)) === 0 ? "y" : "";
}
function Kt(t, a, s) {
  let r = bt(t), h = tt(t, G) - tt(t, Q), i = tt(t, J) - tt(t, Z);
  if (r === "x") {
    let l = Math.max(s + 8, 14) + 2 * it, e = Math.min(l / 2, pt);
    return { w: Math.max(a + 12, 16) + e * (t === (Q | G) ? 2 : 1), h: l, dx: h * e / 2, dy: 0 };
  }
  if (r === "y") {
    let l = Math.max(a + 16, 14) + 2 * it, e = Math.min(l / 2, pt);
    return { w: l, h: Math.max(s + 8, 16) + e * (t === (J | Z) ? 2 : 1), dx: 0, dy: i * e / 2 };
  }
  return { w: Math.max(a + 16, 24) + et * (tt(t, G) + tt(t, Q)), h: Math.max(s + 8, 24) + et * (tt(t, J) + tt(t, Z)), dx: h * et / 2, dy: i * et / 2 };
}
function ue(t, a, s, r) {
  let h = bt(t), i = a / 2, l = s / 2, e;
  if (h === "x") {
    let d = Math.min(l, pt), u = l - it, f = t & G ? -i + d : -i, c = t & Q ? i - d : i;
    e = [f, -u, c, -u], t & Q && e.push(c, -l, i, 0, c, l), e.push(c, u, f, u), t & G && e.push(f, l, -i, 0, f, -l);
  } else if (h === "y") {
    let d = Math.min(i, pt), u = i - it, f = t & J ? -l + d : -l, c = t & Z ? l - d : l;
    e = [u, f, u, c], t & Z && e.push(i, c, 0, l, -i, c), e.push(-u, c, -u, f), t & J && e.push(-i, f, 0, -l, i, f);
  } else {
    let d = t & G ? -i + et : -i, u = t & Q ? i - et : i, f = t & J ? -l + et : -l, c = t & Z ? l - et : l, x = (d + u) / 2, m = (f + c) / 2, k = Math.min(10, (u - d) / 2), I = Math.min(10, (c - f) / 2);
    e = [d, f], t & J && e.push(x - k, f, x, -l, x + k, f), e.push(u, f), t & Q && e.push(u, m - I, i, m, u, m + I), e.push(u, c), t & Z && e.push(x + k, c, x, l, x - k, c), e.push(d, c), t & G && e.push(d, m + I, -i, m, d, m - I);
  }
  let w = "";
  for (let d = 0; d < e.length; d += 2) w += (d ? " " : "") + A(e[d]) + "," + A(e[d + 1]);
  return `<polygon points="${w}" stroke-linejoin="round"${r}/>`;
}
var fe = 1e3;
function pe(t, a) {
  if (t === 0 || !Number.isInteger(t)) throw new _t("Columns must be an integer !== 0.", "semantic", { type: "block" });
  if (a < 0 || !Number.isInteger(a)) throw new _t("Position must be a non-negative integer." + a, "semantic", { type: "block" });
  return t < 0 ? { px: a, py: 0 } : { px: a % t, py: Math.floor(a / t) };
}
function be(t, a, s) {
  let r = t.columns, h = [], i = 0, l = 0, e = 0, w = 0;
  for (let u of t.children) {
    let { px: f, py: c } = pe(r, i), x = u.span >= 1 ? Math.min(u.span, fe) : 1;
    if (r > 0 && x > r - f && (x = r - f), u.span = x, u.col = f, u.row = c, i += x, f + x > l && (l = f + x), c === h.length && h.push(0), u.children.length === 0 ? h[c] = -1 : h[c] >= 0 && u.nh > h[c] && (h[c] = u.nh), u.space) continue;
    let m = (u.nw - a * (x - 1)) / x;
    m > e && (e = m), u.nh > w && (w = u.nh);
  }
  let d = (h.length - 1) * a;
  for (let u = 0; u < h.length; u++) h[u] < 0 && (h[u] = w), d += h[u];
  t.cols = l, t.heights = h, t.nw = Math.max(t.nw, l * e + (l - 1) * a + 2 * s), t.nh = d + 2 * s + t.head;
}
function ye(t, a, s) {
  let { cols: r, heights: h } = t, i = h.length, l = (t.w - 2 * s - (r - 1) * a) / r, e = t.h - 2 * s - t.head - (i - 1) * a, w = 0;
  for (let m of h) w += m;
  let d = w > 0 ? e / w : 0, u = w > 0 ? 0 : e / i, f = t.x - t.w / 2 + s, c = t.y - t.h / 2 + s + t.head, x = 0;
  for (let m of t.children) {
    for (; x < m.row; x++) c += h[x] * d + u + a;
    m.w = l * m.span + a * (m.span - 1), m.h = h[x] * d + u, m.x = f + m.col * (l + a) + m.w / 2, m.y = c + m.h / 2;
  }
}
function ge(t, a) {
  let s = [t];
  for (let r = 0; r < s.length; r++) for (let h of s[r].children) s.push(h);
  for (let r = s.length - 1; r >= 0; r--) {
    let h = s[r];
    h.children.length > 0 && be(h, a, r === 0 ? 0 : a);
  }
  t.w = t.nw, t.h = t.nh, t.x = t.w / 2, t.y = t.h / 2;
  for (let r = 0; r < s.length; r++) {
    let h = s[r];
    h.children.length > 0 && ye(h, a, r === 0 ? 0 : a);
  }
  return { width: t.w, height: t.h };
}
var we = 12, Wt = 200, me = 8, Bt = ' fill="var(--_s)" stroke="var(--_b)"', xe = ' stroke="var(--_b)"', Ft = [], ke = [], Me = [], Se = ["default"], _e = 2e6, Ce = /* @__PURE__ */ new Map([["square", "rect"], ["round", "rounded"], ["circle", "circle"], ["doublecircle", "dbl-circ"], ["diamond", "diam"], ["hexagon", "hex"], ["stadium", "stadium"], ["subroutine", "fr-rect"], ["cylinder", "cyl"], ["rect_left_inv_arrow", "odd"], ["lean_right", "lean-r"], ["lean_left", "lean-l"], ["trapezoid", "trap-b"], ["inv_trapezoid", "trap-t"]]), Ae = /* @__PURE__ */ new Set(["circle", "dbl-circ", "diam"]), Ie = /* @__PURE__ */ new Set(["stadium", "hex", "odd", "lean-r", "lean-l", "trap-b", "trap-t"]);
function yt(t) {
  return t.kind === 0 && (t.shape === "circle" || t.shape === "dbl-circ");
}
function st(t, a, s) {
  let r = t.bw / 2, h = t.bh / 2, i = Math.abs(a - t.x), l = h;
  return yt(t) ? l = Math.sqrt(Math.max(r * r - i * i, 0)) : t.kind === 0 && t.shape === "diam" ? l = h * Math.max(1 - i / r, 0) : t.kind === 0 ? l = h - zt(t.shape, t.bw, t.bh, s > 0 ? 2 : 0) : t.kind === 1 && bt(t.mask) === "x" && (l = h - it), t.y + s * l;
}
function lt(t, a, s) {
  let r = t.bw / 2, h = t.bh / 2, i = Math.abs(a - t.y), l = r;
  return yt(t) ? l = Math.sqrt(Math.max(h * h - i * i, 0)) : t.kind === 0 && t.shape === "diam" ? l = r * Math.max(1 - i / h, 0) : t.kind === 0 ? l = r - zt(t.shape, t.bw, t.bh, s > 0 ? 1 : 3) : t.kind === 1 && bt(t.mask) === "y" && (l = r - it), t.x + s * l;
}
function Yt(t, a, s, r) {
  let h = a - t.x, i = s - t.y, l = t.bw / 2, e = t.bh / 2, w;
  yt(t) ? w = l / (Math.hypot(h, i) || 1) : t.kind === 0 && t.shape === "diam" ? w = 1 / (Math.abs(h) / l + Math.abs(i) / e || 1) : w = Math.min(h === 0 ? 1 / 0 : l / Math.abs(h), i === 0 ? 1 / 0 : e / Math.abs(i)), w === 1 / 0 && (w = 0), r.push(t.x + h * w, t.y + i * w);
}
function Te(t, a, s, r, h) {
  let i = h.x - h.bw / 2 + 1, l = h.x + h.bw / 2 - 1, e = h.y - h.bh / 2 + 1, w = h.y + h.bh / 2 - 1;
  if (t < i && s < i || t > l && s > l || a < e && r < e || a > w && r > w) return !1;
  if (t === s || a === r) return !0;
  let d = s - t, u = r - a, f = (x, m) => Math.sign(d * (m - a) - u * (x - t)), c = f(i, e);
  return c === 0 || f(l, e) !== c || f(l, w) !== c || f(i, w) !== c;
}
function St(t, a, s, r) {
  let h = 0;
  for (let i of r) if (!(i === a || i === s)) {
    for (let l = 0; l + 3 < t.length; l += 2) if (Te(t[l], t[l + 1], t[l + 2], t[l + 3], i)) {
      h++;
      break;
    }
  }
  return h;
}
function Ee(t, a, s, r) {
  let h = t.x - t.bw / 2, i = t.x + t.bw / 2, l = t.y - t.bh / 2, e = t.y + t.bh / 2, w = a.x - a.bw / 2, d = a.x + a.bw / 2, u = a.y - a.bh / 2, f = a.y + a.bh / 2, c = Math.max(h, w), x = Math.min(i, d), m = Math.max(l, u), k = Math.min(e, f), I = x - c > 6, N = k - m > 6;
  if (I && N) {
    let y = t.bw * t.bh <= a.bw * a.bh ? t : a, M = y === t ? a : t, U = y.y - y.bh / 2 - (M.y - M.bh / 2), X = M.y + M.bh / 2 - (y.y + y.bh / 2), ot = y.x - y.bw / 2 - (M.x - M.bw / 2), ht = M.x + M.bw / 2 - (y.x + y.bw / 2), at = Math.min(U, X, ot, ht), B;
    return at === X ? B = [y.x, st(y, y.x, 1), y.x, M.y + M.bh / 2] : at === U ? B = [y.x, st(y, y.x, -1), y.x, M.y - M.bh / 2] : at === ht ? B = [lt(y, y.y, 1), y.y, M.x + M.bw / 2, y.y] : B = [lt(y, y.y, -1), y.y, M.x - M.bw / 2, y.y], y === t ? B : [B[2], B[3], B[0], B[1]];
  }
  if (I) {
    let y = Math.min(6, (x - c) / 2), M = Math.min(Math.max((c + x) / 2 + s, c + y), x - y), U = a.y > t.y ? 1 : -1;
    return [M, st(t, M, U), M, st(a, M, -U)];
  }
  if (N) {
    let y = Math.min(6, (k - m) / 2), M = Math.min(Math.max((m + k) / 2 + s, m + y), k - y), U = a.x > t.x ? 1 : -1;
    return [lt(t, M, U), M, lt(a, M, -U), M];
  }
  let T = a.x > t.x ? 1 : -1, R = a.y > t.y ? 1 : -1, L = [lt(t, t.y, T), t.y, a.x, t.y, a.x, st(a, a.x, -R)], P = [t.x, st(t, t.x, R), t.x, a.y, lt(a, a.y, -T), a.y], F = Math.abs(a.x - t.x) >= Math.abs(a.y - t.y), z = F ? L : P;
  if (r === void 0) return z;
  let q = St(z, t, a, r);
  if (q === 0) return z;
  let b = F ? P : L, o = St(b, t, a, r);
  if (o < q && (z = b, q = o), q === 0) return z;
  let n = [];
  return Yt(t, a.x, a.y, n), Yt(a, t.x, t.y, n), St(n, t, a, r) < q ? n : z;
}
function ve(t, a, s) {
  let r = t.length, h = t[0], i = t[1], l = t[r - 2], e = t[r - 1], w = t[2] - h, d = t[3] - i, u = Math.hypot(w, d);
  w /= u || 1, d /= u || 1;
  let f = l - t[r - 4], c = e - t[r - 3], x = Math.hypot(f, c);
  if (f /= x || 1, c /= x || 1, r === 4 && a + s > u) {
    let k = u / (a + s);
    a *= k, s *= k;
  }
  a = Math.min(a, u), s = Math.min(s, x);
  let m = `M${A(h + w * a)},${A(i + d * a)}`;
  if (r === 6) {
    let k = Math.max(0, Math.min(me, u - a, x - s));
    m += `L${A(t[2] - w * k)},${A(t[3] - d * k)}Q${A(t[2])},${A(t[3])} ${A(t[2] + f * k)},${A(t[3] + c * k)}`;
  }
  return m += `L${A(l - f * s)},${A(e - c * s)}`, { d: m, sx: h, sy: i, sdx: -w, sdy: -d, ex: l, ey: e, edx: f, edy: c };
}
function $t(t, a) {
  let s = t.bw / 2, r = t.bh / 2, h = Math.max(1, Math.min(10 + 5 * (a - 1), s, r));
  if (yt(t)) {
    let i = t.x + s * Math.SQRT1_2, l = t.y - s * Math.SQRT1_2, e = 2 * Math.asin(Math.min(1, h / (2 * s))), w = (d) => Math.atan2(t.y - s * Math.sin(d) - l, t.x + s * Math.cos(d) - i);
    return [i, l, h, w(Math.PI / 4 + e), w(Math.PI / 4 - e)];
  }
  if (t.kind === 0 && t.shape === "diam") {
    let i = Math.atan2(r, s);
    return [t.x + s / 2, t.y - r / 2, h, i + Math.PI, i];
  }
  return [t.x + s, t.y - r, h, Math.PI, Math.PI / 2];
}
function De(t, a, s, r) {
  let [h, i, l, e, w] = $t(t, a), d = e + s / l, u = w - r / l, f = (u - d) % (2 * Math.PI);
  f <= 0 && (f += 2 * Math.PI);
  let c = h + l * Math.cos(d), x = i + l * Math.sin(d), m = h + l * Math.cos(u), k = i + l * Math.sin(u), I = h + l * Math.cos(e), N = i + l * Math.sin(e), T = h + l * Math.cos(w), R = i + l * Math.sin(w), L = Math.hypot(I - c, N - x), P = Math.hypot(T - m, R - k);
  return { d: `M${A(c)},${A(x)}A${A(l)},${A(l)} 0 ${f > Math.PI ? 1 : 0} 1 ${A(m)},${A(k)}`, sx: I, sy: N, sdx: L > 0 ? (I - c) / L : Math.sin(e), sdy: L > 0 ? (N - x) / L : -Math.cos(e), ex: T, ey: R, edx: P > 0 ? (T - m) / P : -Math.sin(w), edy: P > 0 ? (R - k) / P : Math.cos(w) };
}
var Le = [0.5, 0.3, 0.7, 0.15, 0.85];
function Oe(t, a, s, r, h, i, l) {
  if (l === void 0) return 0.5;
  for (let e of Le) {
    let w = t[a] + (t[a + 2] - t[a]) * e, d = t[a + 1] + (t[a + 3] - t[a + 1]) * e, u = !0;
    for (let f of l) if (f !== h && f !== i && Math.abs(w - f.x) < (s + f.bw) / 2 && Math.abs(d - f.y) < (r + f.bh) / 2) {
      u = !1;
      break;
    }
    if (u) return e;
  }
  return 0.5;
}
function Ne(t, a, s) {
  return Jt(s, (r) => Re(t, a, s, r));
}
function Re(t, a, s, r) {
  let h = s.fontSize ?? 16, i = Math.round(h * 0.875), l = s.measurer ?? Gt(s.fontFamily), e = s.padding ?? 8, w = s.icons, d = a.block?.padding, u = Math.min(typeof d == "number" && d >= 0 ? Math.min(d, 200) : we, r ? 6 : 1 / 0), f = r ? 80 : Wt, c = (p) => {
    let g = [], S = (C) => {
      for (let K of C) for (let O of K.split(";")) g.push(O);
    };
    for (let C of p.classes && p.classes.length > 0 ? p.classes : Se) {
      let K = t.classes.get(C);
      K && S(K.styles);
    }
    return p.styles && S(p.styles), Lt(g);
  }, x = (p, g) => {
    let S = p.type, C = S === "space" ? Lt(Ft) : c(p), K = (C.bold ? 1 : 0) | (C.italic ? 2 : 0), O = C.fontSize ?? h, v = 0, _ = "", E, W = 0, $ = 0, Y = 0, H = 0, dt = 0, j = 0;
    if (S === "space") v = 3, E = rt(void 0, !1, l, O, f);
    else if (S === "composite") v = 2, E = rt(p.label, !1, l, O, r ? Et(s) : 4e3, K), Y = E.height > 0 ? E.height + 4 : 0, W = E.width + 2 * u, $ = Y + 2 * u;
    else if (S === "block_arrow") {
      v = 1, E = rt(p.label, !1, l, O, f, K);
      let V = !0;
      for (let Ht of E.lines) for (let It of Ht) (It.icon !== void 0 || It.text.trim() !== "") && (V = !1);
      H = de(p.directions);
      let ut = V ? Kt(H, 0, 0) : Kt(H, E.width, E.height);
      W = ut.w, $ = ut.h, dt = ut.dx, j = ut.dy;
    } else {
      _ = Ce.get(S ?? "") ?? "rect", E = rt(p.label, !1, l, O, f, K);
      let V = Qt(_, E.width, E.height);
      W = V.w, $ = _ === "cyl" ? Math.max(V.h, E.height + 40) : V.h, j = V.dy;
    }
    return { children: [], columns: v === 2 ? p.columns ?? -1 : -1, span: v === 3 ? 1 : p.widthInColumns ?? 1, space: v === 3, head: Y, nw: W, nh: $, col: 0, row: 0, cols: 0, heights: Me, x: 0, y: 0, w: 0, h: 0, block: p, kind: v, index: g, shape: _, label: E, style: C, mask: H, dx: dt, dy: j, bw: 0, bh: 0 };
  }, m = x(t.root, 0);
  m.nw = 0, m.nh = 0;
  let k = [m], I = /* @__PURE__ */ new Map();
  for (let p = 0; p < k.length; p++) {
    let g = k[p];
    if (g.kind === 2) for (let S of g.block.children ?? ke) {
      let C = x(S, k.length);
      g.children.push(C), k.push(C), C.kind !== 3 && I.set(S.id, C);
    }
  }
  let N = ge(m, u), T = [];
  for (let p of k) p.kind === 0 && Ae.has(p.shape) ? (p.bw = p.nw, p.bh = p.nh) : p.kind === 1 ? (p.bw = p.span > 1 ? p.w : p.nw, p.bh = p.nh) : (p.bw = p.w, p.bh = p.kind === 0 && Ie.has(p.shape) ? p.nh : p.h), p.kind === 0 && p.shape === "cyl" && (p.dy = Math.min(12, Math.max(6, p.bw / 14)) / 2), (p.kind === 0 || p.kind === 1) && T.push(p);
  let R = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), P = [], F = [];
  for (let p of t.edges) {
    let g = I.get(p.start ?? ""), S = I.get(p.end ?? "");
    if (g === void 0 || S === void 0) continue;
    let C = Math.min(g.index, S.index) * k.length + Math.max(g.index, S.index);
    R.set(C, (R.get(C) ?? 0) + 1), p.label && L.add(C), P.push([g, S]), F.push(p);
  }
  let z = F.length * T.length <= _e ? T : void 0, q = /* @__PURE__ */ new Map(), b = [], o = 0, n = 0, y = N.width, M = N.height, U = (p, g, S, C) => {
    p - S / 2 < o && (o = p - S / 2), p + S / 2 > y && (y = p + S / 2), g - C / 2 < n && (n = g - C / 2), g + C / 2 > M && (M = g + C / 2);
  };
  for (let p = 0; p < F.length; p++) {
    let [g, S] = P[p], C = Math.min(g.index, S.index) * k.length + Math.max(g.index, S.index), K = R.get(C) ?? 1, O = q.get(C) ?? 0;
    q.set(C, O + 1);
    let v = rt(F[p].label, !1, l, i, Wt), _, E, W;
    if (g === S) {
      let [$, Y, H] = $t(g, O + 1);
      _ = [], U($, Y, 2 * H + 2, 2 * H + 2), E = $ + H + 6 + v.width / 2, W = Y - H / 2;
    } else {
      let $ = L.has(C) ? Math.round(i * 1.5) + 2 : 14;
      _ = Ee(g, S, (O - (K - 1) / 2) * $, z);
      let Y = _.length, H = Math.abs(_[2] - _[0]) + Math.abs(_[3] - _[1]), dt = Math.abs(_[Y - 2] - _[Y - 4]) + Math.abs(_[Y - 1] - _[Y - 3]), j = Y === 6 && dt > H ? 2 : 0, V = v.width > 0 ? Oe(_, j, v.width + 8, v.height, g, S, z) : 0.5;
      E = _[j] + (_[j + 2] - _[j]) * V, W = _[j + 1] + (_[j + 3] - _[j + 1]) * V;
    }
    v.width > 0 && U(E, W, v.width + 8, v.height), b.push({ edge: F[p], points: _, loop: g === S ? O + 1 : 0, label: v, lx: E, ly: W });
  }
  let X = rt(t.title, !1, l, h, r ? Et(s) : 4e3, 1), ot = X.height > 0 ? X.height + 12 : 0, ht = Math.max(y - o, X.width), at = e - o + (ht - (y - o)) / 2, B = e + ot - n;
  for (let p of k) p.x += at, p.y += B;
  let gt = Math.ceil(ht + 2 * e), Ct = Math.ceil(M - n + ot + 2 * e), wt = "", At = "";
  for (let p = 1; p < k.length; p++) {
    let g = k[p];
    if (g.kind === 3) continue;
    let S = Xt((g.block.classes ?? Ft).join(" ")), C = Dt(g.block.id);
    if (g.kind === 2) {
      let O = g.y - g.h / 2;
      wt += `<g class="pele-cluster${S}" data-id="${C}"><rect x="${A(g.x - g.w / 2)}" y="${A(O)}" width="${A(g.w)}" height="${A(g.h)}" rx="${te}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${g.style.shape}/>` + Mt(g.label, g.x, O + (g.head + u) / 2 + 2, ` class="pele-cluster-label" fill="var(--_m)"${g.style.text}`, w) + "</g>";
      continue;
    }
    let K = g.kind === 1;
    At += `<g class="pele-node pele-shape-${K ? "block-arrow" : g.shape}${S}" data-id="${C}" transform="translate(${A(g.x)},${A(g.y)})">` + (K ? ue(g.mask, g.bw, g.bh, Bt + g.style.shape) : Vt(g.shape, g.bw, g.bh, Bt + g.style.shape, xe + g.style.line)) + Mt(g.label, g.dx, g.dy, ` class="pele-label"${g.style.text}`, w) + "</g>";
  }
  let mt = "", xt = "";
  for (let p = 0; p < b.length; p++) {
    let { edge: g, points: S, loop: C, label: K } = b[p], O = g.arrowTypeStart ?? "", v = g.arrowTypeEnd ?? "", _;
    if (C > 0) _ = De(P[p][0], C, ft(O), ft(v));
    else {
      for (let W = 0; W < S.length; W += 2) S[W] += at, S[W + 1] += B;
      _ = ve(S, ft(O), ft(v));
    }
    let E = Dt(g.id);
    if (mt += `<g class="pele-edge" data-id="${E}"><path d="${_.d}"${g.thickness === "thick" ? ' stroke-width="2.5"' : ""}${g.pattern === "dotted" ? ' stroke-dasharray="3 4"' : ""}/>` + vt(O, _.sx, _.sy, _.sdx, _.sdy, "var(--_l)") + vt(v, _.ex, _.ey, _.edx, _.edy, "var(--_l)") + "</g>", K.width > 0) {
      let W = b[p].lx + at, $ = b[p].ly + B;
      xt += Zt(g.id, K, W, $, "", w);
    }
  }
  return { svg: ee("block", gt, Ct, h, s, t, Mt(X, gt / 2, e + X.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (wt ? `<g class="pele-clusters">${wt}</g>` : "") + (mt ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${mt}</g>` : "") + `<g class="pele-nodes">${At}</g>` + (xt ? `<g class="pele-edge-labels" font-size="${i}">${xt}</g>` : "")), width: gt, height: Ct, links: [] };
}
var ze = { type: "block", parse(t, a, s) {
  let r = new he();
  return r.title = s, oe(t, r), r;
}, render: Ne };
export {
  ze as block
};
