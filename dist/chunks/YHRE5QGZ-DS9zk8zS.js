var ft = Object.defineProperty;
var dt = (e, t, r) => t in e ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var D = (e, t, r) => dt(e, typeof t != "symbol" ? t + "" : t, r);
import { A as Re } from "./KQOEJWJY-XpoKsT0f.js";
import { N as ct, L as pt } from "./JZWSX6AR-CTa5XBC9.js";
import { E as ut } from "./URA2L2QI-BZvG0umE.js";
import { e as xe, i as ze, L as Fe, H as yt, x as xt } from "./lazy-CehDEl4q.js";
import { p as mt, h as gt } from "./DKTLEL5E-BCFlW8pF.js";
import { a as te, D as He, w as _t } from "./HWDLEDTA-Ctstf22F.js";
import { b as Mt, y as he, _ as j, x as v, f as ne, a as bt, $ as Ct, g as Et } from "./RZSVICHU-DoNHkG46.js";
var wt = /* @__PURE__ */ new Set(["label", "type", "descr", "techn", "sprite", "tags", "link", "bgColor", "fontColor", "borderColor", "shadowing", "shape", "legendText", "legendSprite"]), $t = /* @__PURE__ */ new Set(["label", "descr", "techn", "sprite", "tags", "link", "textColor", "lineColor"]);
function de(e, t) {
  let { key: r, value: i } = t;
  "from" in e && (r === "offsetX" || r === "offsetY") ? e[r] = parseInt(i) : ("from" in e ? $t : wt).has(r) ? e[r] = i : (e.extra ?? (e.extra = /* @__PURE__ */ new Map())).set(r, i);
}
function k(e, t, r) {
  r !== void 0 && (typeof r == "string" ? e[t] = r : de(e, r));
}
function le(e, t, r) {
  r === void 0 ? e[t] ?? (e[t] = "") : k(e, t, r);
}
function Ke(e, t) {
  e.labelAttr = void 0, typeof t == "object" ? (e.label = "", e.labelAttr = t, de(e, t)) : e.label = t ?? "";
}
var Tt = class {
  constructor() {
    D(this, "type", "c4");
    D(this, "c4Type");
    D(this, "title");
    D(this, "accTitle");
    D(this, "accDescr");
    D(this, "shapes", []);
    D(this, "boundaries", [{ alias: "global", label: "global", type: "global", parent: void 0 }]);
    D(this, "rels", []);
    D(this, "shapeInRow", 4);
    D(this, "boundaryInRow", 2);
    D(this, "shapeIndex", /* @__PURE__ */ new Map());
    D(this, "boundaryIndex", /* @__PURE__ */ new Map());
    D(this, "relIndex", /* @__PURE__ */ new Map());
    D(this, "current", this.boundaries[0]);
    D(this, "stack", []);
  }
  setC4Type(e) {
    this.c4Type = e;
  }
  setTitle(e) {
    this.title = e;
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  element(e, t, r, i) {
    let h = typeof r == "string" ? t.get(r) : void 0;
    return h === void 0 && (h = { alias: "", label: "", parent: void 0 }, e.push(h), typeof r == "string" ? (h.alias = r, t.set(r, h)) : (h.aliasAttr = r, de(h, r))), Ke(h, i), h;
  }
  addPersonOrSystem(e, t) {
    let r = this.element(this.shapes, this.shapeIndex, t[0], t[1]);
    le(r, "descr", t[2]), this.finishShape(r, e, t, 3);
  }
  addContainer(e, t) {
    let r = this.element(this.shapes, this.shapeIndex, t[0], t[1]);
    le(r, "techn", t[2]), le(r, "descr", t[3]), this.finishShape(r, e, t, 4);
  }
  addComponent(e, t) {
    this.addContainer(e, t);
  }
  finishShape(e, t, r, i) {
    k(e, "sprite", r[i]), k(e, "tags", r[i + 1]), k(e, "link", r[i + 2]), e.kind = t, e.parent = this.current;
  }
  boundary(e, t) {
    let r = this.element(this.boundaries, this.boundaryIndex, e[0], e[1]);
    return e[2] === void 0 ? r.type = t : k(r, "type", e[2]), r;
  }
  open(e) {
    e.parent = this.current, this.stack.push(this.current), this.current = e;
  }
  addPersonOrSystemBoundary(e, t = "system") {
    let r = this.boundary(e, t);
    k(r, "tags", e[3]), k(r, "link", e[4]), this.open(r);
  }
  addContainerBoundary(e) {
    this.addPersonOrSystemBoundary(e, "container");
  }
  addDeploymentNode(e, t) {
    let r = this.boundary(t, "node");
    le(r, "descr", t[3]), k(r, "sprite", t[4]), k(r, "tags", t[5]), k(r, "link", t[6]), r.nodeType = e, this.open(r);
  }
  popBoundaryParseStack() {
    this.current = this.stack.pop() ?? this.boundaries[0];
  }
  addRel(e, t) {
    let r = t[0], i = t[1];
    if (r === void 0 || i === void 0 || t[2] === void 0) return;
    let h = typeof r == "string" && typeof i == "string", n = h ? this.relIndex.get(r)?.get(i) : void 0;
    if (n === void 0) {
      if (n = { type: e, from: "", to: "", label: "" }, this.rels.push(n), h) {
        let f = this.relIndex.get(r);
        f === void 0 && this.relIndex.set(r, f = /* @__PURE__ */ new Map()), f.set(i, n);
      }
      typeof r == "string" ? n.from = r : n.fromAttr = r, typeof i == "string" ? n.to = i : n.toAttr = i;
    }
    n.type = e, Ke(n, t[2]), le(n, "techn", t[3]), le(n, "descr", t[4]), k(n, "sprite", t[5]), k(n, "tags", t[6]), k(n, "link", t[7]);
  }
  getC4Shape(e) {
    return this.shapeIndex.get(e) ?? this.boundaryIndex.get(e);
  }
  updateElStyle(e, t) {
    let r = typeof t[0] == "string" ? this.getC4Shape(t[0]) : void 0;
    r !== void 0 && (k(r, "bgColor", t[1]), k(r, "fontColor", t[2]), k(r, "borderColor", t[3]), k(r, "shadowing", t[4]), k(r, "shape", t[5]), k(r, "sprite", t[6]), k(r, "techn", t[7]), k(r, "legendText", t[8]), k(r, "legendSprite", t[9]));
  }
  updateRelStyle(e, t) {
    let r = t[0], i = t[1], h = typeof r == "string" && typeof i == "string" ? this.relIndex.get(r)?.get(i) : void 0;
    if (h === void 0) return;
    k(h, "textColor", t[2]), k(h, "lineColor", t[3]);
    let n = t[4], f = t[5];
    typeof n == "string" ? h.offsetX = parseInt(n) : n !== void 0 && de(h, n), typeof f == "string" ? h.offsetY = parseInt(f) : f !== void 0 && de(h, f);
  }
  updateLayoutConfig(e, t) {
    let r = (n) => n === void 0 ? NaN : parseInt(typeof n == "string" ? n : n.value), i = r(t[0]), h = r(t[1]);
    i >= 1 && (this.shapeInRow = i), h >= 1 && (this.boundaryInRow = h);
  }
}, Ve = ["$end", "INVALID", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "title", "accDescription", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "NEWLINE", "C4_CONTEXT", "C4_CONTAINER", "C4_COMPONENT", "C4_DYNAMIC", "C4_DEPLOYMENT", "PERSON", "PERSON_EXT", "SYSTEM", "SYSTEM_DB", "SYSTEM_QUEUE", "SYSTEM_EXT", "SYSTEM_EXT_DB", "SYSTEM_EXT_QUEUE", "CONTAINER", "CONTAINER_DB", "CONTAINER_QUEUE", "CONTAINER_EXT", "CONTAINER_EXT_DB", "CONTAINER_EXT_QUEUE", "COMPONENT", "COMPONENT_DB", "COMPONENT_QUEUE", "COMPONENT_EXT", "COMPONENT_EXT_DB", "COMPONENT_EXT_QUEUE", "ENTERPRISE_BOUNDARY", "SYSTEM_BOUNDARY", "BOUNDARY", "CONTAINER_BOUNDARY", "NODE", "NODE_L", "NODE_R", "REL", "BIREL", "REL_U", "REL_D", "REL_L", "REL_R", "REL_B", "REL_INDEX", "UPDATE_EL_STYLE", "UPDATE_REL_STYLE", "UPDATE_LAYOUT_CONFIG", "EOF_IN_STRUCT", "ATTRIBUTE_EMPTY", "STR", "STR_KEY", "STR_VALUE", "LBRACE", "RBRACE", "EOF"], Nt = /* @__PURE__ */ new Map([["C4Context", 14], ["C4Container", 15], ["C4Component", 16], ["C4Dynamic", 17], ["C4Deployment", 18], ["Person", 19], ["Person_Ext", 20], ["System", 21], ["SystemDb", 22], ["SystemQueue", 23], ["System_Ext", 24], ["SystemDb_Ext", 25], ["SystemQueue_Ext", 26], ["Container", 27], ["ContainerDb", 28], ["ContainerQueue", 29], ["Container_Ext", 30], ["ContainerDb_Ext", 31], ["ContainerQueue_Ext", 32], ["Component", 33], ["ComponentDb", 34], ["ComponentQueue", 35], ["Component_Ext", 36], ["ComponentDb_Ext", 37], ["ComponentQueue_Ext", 38], ["Enterprise_Boundary", 39], ["System_Boundary", 40], ["Boundary", 41], ["Container_Boundary", 42], ["Deployment_Node", 43], ["Node", 43], ["Node_L", 44], ["Node_R", 45], ["Rel", 46], ["BiRel", 47], ["Rel_Up", 48], ["Rel_U", 48], ["Rel_Down", 49], ["Rel_D", 49], ["Rel_Left", 50], ["Rel_L", 50], ["Rel_Right", 51], ["Rel_R", 51], ["Rel_Back", 52], ["RelIndex", 53], ["UpdateElementStyle", 54], ["UpdateRelStyle", 55], ["UpdateLayoutConfig", 56]]), ve = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y], Ae = /[\n\r\u2028\u2029]/g;
function Rt(e) {
  let t = e.length, r = [], i = [], h = [], n = 0, f = 9, a = 0, s = !1, d = -2, c = -1, p = 0, _ = (l, u, x) => {
    r.push(l), i.push(u), h.push(x), a = x;
  }, A = (l) => {
    for (; l < t && xe(e.charCodeAt(l)); ) l++;
    return l;
  }, $ = (l, u) => {
    let x = e.indexOf(l, u);
    return x === -1 ? t : x;
  }, o = (l, u) => {
    let x = a + l.length;
    if (!e.startsWith(l, a) || !xe(e.charCodeAt(x))) return !1;
    let g = ++x;
    for (; x < t; ) {
      let T = e.charCodeAt(x);
      if (T === 35 || T === 10 || T === 59) break;
      x++;
    }
    return x === g ? !1 : (_(u, a, x), !0);
  };
  for (; ; ) {
    if (s) {
      _(0, t, t);
      break;
    }
    a >= t && (s = !0);
    let l = e.charCodeAt(a);
    if (n === 0) {
      if (a >= t) {
        _(64, t, t);
        continue;
      }
      if (d !== -1 && a >= p && (d < a && (d = e.indexOf("direction", a)), d !== -1 && (c < a && (Ae.lastIndex = a, c = Ae.test(e) ? Ae.lastIndex - 1 : t), d < c))) {
        let u = !1;
        for (let x = 0; x < 4 && !u; x++) ve[x].lastIndex = a, ve[x].test(e) && (_(2 + x, a, ve[x].lastIndex), u = !0);
        if (u) continue;
        p = c;
      }
      if (l === 116 && o("title", 6)) continue;
      if (l === 97) {
        if (o("accDescription", 7)) continue;
        let u = e.startsWith("accTitle", a);
        if (u || e.startsWith("accDescr", a)) {
          let x = A(a + 8), g = e.charCodeAt(x);
          if (g === 58) {
            _(u ? 8 : 10, a, A(x + 1)), f = u ? 9 : 11, n = 7;
            continue;
          }
          if (g === 123 && !u) {
            a = A(x + 1), n = 8;
            continue;
          }
        }
      }
      if (l === 37 && e.charCodeAt(a + 1) === 37) {
        let u = $(`
`, a + 2);
        for (; u < t && (e.charCodeAt(u) === 10 || e.charCodeAt(u) === 13); ) u++;
        a = u;
        continue;
      }
      if (xe(l)) {
        let u = a, x = -1;
        for (; u < t; ) {
          let g = e.charCodeAt(u);
          if (!xe(g)) break;
          g === 10 && (x = u), u++;
        }
        x !== -1 ? _(13, a, x + 1) : a = u;
        continue;
      }
      if (l === 123) {
        _(62, a, a + 1);
        continue;
      }
      if (l === 125) {
        _(63, a, a + 1);
        continue;
      }
      if (ze(l)) {
        let u = a + 1;
        for (; u < t && ze(e.charCodeAt(u)); ) u++;
        let x = u - a <= 19 ? Nt.get(e.slice(a, u)) : void 0;
        if (x !== void 0) {
          x > 18 && (n = 1), _(x, a, u);
          continue;
        }
      }
      _(1, a, a);
      break;
    }
    if (n === 1) {
      if (a >= t) _(57, t, t);
      else if (l === 40) {
        let u = a + 1;
        for (; e.charCodeAt(u) === 32; ) u++;
        e.charCodeAt(u) === 44 ? _(58, a, u + 1) : a++, n = 2;
      } else if (l === 41) a++, n = 0;
      else {
        _(1, a, a);
        break;
      }
      continue;
    }
    if (n === 2) {
      if (a >= t) continue;
      if (l === 41) a++, n = 0;
      else if (l === 44) e.charCodeAt(a + 1) === 44 ? _(58, a, a + 2) : a++;
      else {
        let u = a;
        for (; e.charCodeAt(u) === 32; ) u++;
        let x = e.charCodeAt(u);
        x === 34 ? e.charCodeAt(u + 1) === 34 ? _(58, a, u + 2) : (a = u + 1, n = 3) : x === 36 ? (a = u + 1, n = 4) : _(59, a, $(",", a));
      }
      continue;
    }
    if (n === 3) {
      l === 34 ? (a++, n = 2) : _(59, a, $('"', a));
      continue;
    }
    if (n === 4) {
      _(60, a, $("=", a)), n = 5;
      continue;
    }
    if (n === 5) {
      if (a >= t) continue;
      let u = a + 1;
      if (l === 61) for (; e.charCodeAt(u) === 32; ) u++;
      if (l !== 61 || e.charCodeAt(u) !== 34) {
        _(1, a, a);
        break;
      }
      a = u + 1, n = 6;
      continue;
    }
    if (n === 6) {
      if (a >= t) continue;
      l === 34 ? (a++, n = 2) : _(61, a, $('"', a));
      continue;
    }
    if (n === 7) {
      _(f, a, $(`
`, a)), n = 0;
      continue;
    }
    l === 125 ? (a++, n = 0) : _(12, a, $("}", a));
  }
  return { types: r, starts: i, ends: h };
}
var Se = ["person", "external_person", "system", "system_db", "system_queue", "external_system", "external_system_db", "external_system_queue", "container", "container_db", "container_queue", "external_container", "external_container_db", "external_container_queue", "component", "component_db", "component_queue", "external_component", "external_component_db", "external_component_queue"], vt = ["rel", "birel", "rel_u", "rel_d", "rel_l", "rel_r", "rel_b", "rel"], At = ["node", "nodeL", "nodeR"], St = "'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'C4_CONTEXT', 'C4_CONTAINER', 'C4_COMPONENT', 'C4_DYNAMIC', 'C4_DEPLOYMENT'", kt = "'STR', 'STR_KEY', 'ATTRIBUTE', 'ATTRIBUTE_EMPTY'";
function It(e) {
  return e === 6 || e === 7 || e === 8 || e === 10 || e === 12;
}
function je(e) {
  return e >= 19 && e <= 56;
}
function Dt(e, t) {
  let { types: r, starts: i, ends: h } = Rt(e), n = 0, f = (o) => e.slice(i[o], h[o]), a = (o) => {
    let l = r[n];
    throw l === 1 ? Fe("c4", e, i[n], "", !0) : Fe("c4", e, i[n], `Expecting ${o}, got '${Ve[l]}'`);
  }, s = (o) => {
    r[n] !== o && a(`'${Ve[o]}'`), n++;
  }, d = () => {
    let o = [];
    for (; ; ) {
      let l = r[n];
      if (l === 59) o.push(f(n++).trim());
      else if (l === 58) o.push(""), n++;
      else if (l === 60) n++, r[n] !== 61 && a("'STR_VALUE'"), o.push({ key: f(n - 1).trim(), value: f(n).trim() }), n++;
      else break;
    }
    return o.length === 0 && a(kt), o;
  }, c = (o) => {
    o === 6 ? t.setTitle(f(n++).substring(6)) : o === 7 ? t.setAccDescription(f(n++).substring(15)) : o === 12 ? t.setAccDescription(f(n++).trim()) : (n++, o === 8 ? (r[n] !== 9 && a("'acc_title_value'"), t.setTitle(f(n++).trim())) : (r[n] !== 11 && a("'acc_descr_value'"), t.setAccDescription(f(n++).trim())));
  }, p = (o) => {
    n++;
    let l = d();
    if (o <= 26) t.addPersonOrSystem(Se[o - 19], l);
    else if (o <= 32) t.addContainer(Se[o - 19], l);
    else if (o <= 38) t.addComponent(Se[o - 19], l);
    else {
      if (o <= 45) return o === 39 ? l.splice(2, 0, "ENTERPRISE") : o === 40 ? l.splice(2, 0, "SYSTEM") : o === 42 && l.splice(2, 0, "CONTAINER"), o >= 43 ? t.addDeploymentNode(At[o - 43], l) : o === 42 ? t.addContainerBoundary(l) : t.addPersonOrSystemBoundary(l), r[n] === 62 ? (n++, s(13)) : r[n] === 13 ? (n++, s(62), r[n] === 13 && n++) : a("'NEWLINE', 'LBRACE'"), !0;
      o <= 53 ? (o === 53 && l.splice(0, 1), t.addRel(vt[o - 46], l)) : o === 54 ? t.updateElStyle("update_el_style", l) : o === 55 ? t.updateRelStyle("update_rel_style", l) : t.updateLayoutConfig("update_layout_config", l);
    }
    return !1;
  }, _ = r[n];
  (_ < 14 || _ > 18) && a(St), n++, s(13);
  let A = 0, $ = 0;
  for (; ; ) {
    let o = r[n];
    if ($ === 3 || $ === 4) {
      if (o === 13) {
        n++, $ = 2;
        continue;
      }
      if ($ === 3 && je(o)) {
        $ = 1;
        continue;
      }
    } else if (je(o)) {
      p(o) ? (A++, $ = 1) : $ = 4;
      continue;
    } else if (It(o) && $ !== 1) {
      c(o), $ = 3;
      continue;
    } else $ !== 2 && a("'title', 'accDescription', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'PERSON', 'REL'");
    if (A > 0) o !== 63 && a("'NEWLINE', 'RBRACE'"), n++, t.popBoundaryParseStack(), A--, $ = 4;
    else {
      o !== 64 && a("'NEWLINE', 'EOF'"), n++, s(0), t.setC4Type(f(0));
      return;
    }
  }
}
var ie = 28, pe = 20, at = 7, Lt = 8, Ot = 30, Oe = 88, be = 160, Ye = 26, nt = (e) => Math.min(12, Math.max(6, e / 14)), ot = (e) => Math.min(12, e / 4);
function oe(e, t, r, i, h, n, f, a) {
  let s = 0, d = 1;
  if (f === 0) {
    if (h < e || h > r) return 1 / 0;
  } else {
    let c = (e - h) / f, p = (r - h) / f;
    s = Math.max(s, Math.min(c, p)), d = Math.min(d, Math.max(c, p));
  }
  if (a === 0) {
    if (n < t || n > i) return 1 / 0;
  } else {
    let c = (t - n) / a, p = (i - n) / a;
    s = Math.max(s, Math.min(c, p)), d = Math.min(d, Math.max(c, p));
  }
  return s <= d ? s : 1 / 0;
}
function fe(e, t, r, i, h, n, f, a) {
  let s = f / r, d = a / i, c = (h - e) / r, p = (n - t) / i, _ = s * s + d * d, A = 2 * (s * c + d * p), $ = c * c + p * p - 1, o = A * A - 4 * _ * $;
  if (_ === 0 || o < 0) return 1 / 0;
  let l = (-A - Math.sqrt(o)) / (2 * _);
  return l >= 0 && l <= 1 ? l : $ <= 0 ? 0 : 1 / 0;
}
function Q(e, t, r, i, h) {
  let { x: n, y: f, w: a, h: s } = e, d = i - t, c = h - r;
  if (e.form === "person") return Math.min(oe(n, f + Ye, n + a, f + s, t, r, d, c), fe(n + a / 2, f + 14, 13, 13, t, r, d, c));
  if (e.form === "cyl") {
    let p = nt(a);
    return Math.min(oe(n, f + p, n + a, f + s - p, t, r, d, c), fe(n + a / 2, f + p, a / 2, p, t, r, d, c), fe(n + a / 2, f + s - p, a / 2, p, t, r, d, c));
  }
  if (e.form === "h-cyl") {
    let p = ot(s);
    return Math.min(oe(n + p, f, n + a - p, f + s, t, r, d, c), fe(n + p, f + s / 2, p, s / 2, t, r, d, c), fe(n + a - p, f + s / 2, p, s / 2, t, r, d, c));
  }
  return oe(n, f, n + a, f + s, t, r, d, c);
}
function lt(e, t, r, i, h) {
  for (let n = 2; n < e.length; n += 2) {
    let f = e[n - 2], a = e[n - 1];
    if (oe(t, r, i, h, f, a, e[n] - f, e[n + 1] - a) <= 1) return !0;
  }
  return !1;
}
function Ce(e, t) {
  return e.x <= t.x && e.y <= t.y && e.x + e.w >= t.x + t.w && e.y + e.h >= t.y + t.h;
}
function Bt(e, t, r) {
  let i = e.x + e.w / 2, h = e.y + e.h / 2, n = t.x + t.w / 2, f = t.y + t.h / 2, a = Ce(e, t);
  if (a || Ce(t, e)) {
    let M = a ? e : t, S = a ? t : e, U = S.x + S.w / 2, L = S.y + S.h / 2, Y = S.x - M.x, O = M.x + M.w - S.x - S.w, H = S.y - M.y, X = M.y + M.h - S.y - S.h, P = Math.min(Y, O, H, X), W = P === Y ? M.x : P === O ? M.x + M.w : U, q = P === Y || P === O ? L : P === X ? M.y + M.h : M.y, K = Math.min(Q(S, W, q, U, L), 1), J = W + (U - W) * K, Z = q + (L - q) * K;
    return a ? [W, q, J, Z] : [J, Z, W, q];
  }
  let s = i, d = h, c = n, p = f, _ = Math.max(e.x, t.x), A = Math.min(e.x + e.w, t.x + t.w), $ = Math.max(e.y, t.y), o = Math.min(e.y + e.h, t.y + t.h);
  _ < A ? s = c = (_ + A) / 2 : $ < o && (d = p = ($ + o) / 2);
  let l = Math.hypot(c - s, p - d) || 1, u = -(p - d) / l * r, x = (c - s) / l * r, g = Q(e, c + u, p + x, s + u, d + x), T = Q(t, s + u, d + x, c + u, p + x);
  return g <= 1 && T <= 1 ? (s += u, d += x, c += u, p += x) : (s = i, d = h, c = n, p = f, g = Math.min(Q(e, c, p, s, d), 1), T = Math.min(Q(t, s, d, c, p), 1)), [c + (s - c) * g, p + (d - p) * g, s + (c - s) * T, d + (p - d) * T];
}
var Be = 6, Ut = 3, Ge = 12, Pt = class {
  constructor() {
    D(this, "upright", []);
    D(this, "level", []);
    D(this, "frames", [[], []]);
    D(this, "taken", /* @__PURE__ */ new Map());
    D(this, "squeezed", 0);
  }
  free(e, t, r, i) {
    let h = Math.min(r, i), n = Math.max(r, i), f = (a, s) => {
      for (let d = 0; d < a.length; d += 3) if (Math.abs(a[d] - t) < s && a[d + 1] < n && a[d + 2] > h) return !0;
      return !1;
    };
    return !f(e ? this.upright : this.level, Be) && !f(this.frames[e ? 0 : 1], Ut);
  }
  crossings(e) {
    let t = 0;
    for (let r = 2; r < e.length; r += 2) {
      let i = e[r] === e[r - 2], h = i ? e[r] : e[r + 1], n = Math.min(i ? e[r - 1] : e[r - 2], i ? e[r + 1] : e[r]), f = Math.max(i ? e[r - 1] : e[r - 2], i ? e[r + 1] : e[r]), a = i ? this.level : this.upright;
      for (let s = 0; s < a.length; s += 3) a[s] > n && a[s] < f && a[s + 1] < h && a[s + 2] > h && t++;
    }
    return t;
  }
  frame(e) {
    this.frames[0].push(e.x, e.y, e.y + e.h, e.x + e.w, e.y, e.y + e.h), this.frames[1].push(e.y, e.x, e.x + e.w, e.y + e.h, e.x, e.x + e.w);
  }
  take(e) {
    for (let t = 2; t < e.length; t += 2) e[t] === e[t - 2] ? this.upright.push(e[t], Math.min(e[t - 1], e[t + 1]), Math.max(e[t - 1], e[t + 1])) : e[t + 1] === e[t - 1] && this.level.push(e[t + 1], Math.min(e[t - 2], e[t]), Math.max(e[t - 2], e[t]));
  }
  ports(e, t, r, i, h) {
    let n = this.taken.get(e) ?? [], f = [];
    for (let a = 0; a < 9 && f.length < 4; a++) {
      let s = r + (a & 1 ? 1 : -1) * Math.ceil(a / 2) * Ge;
      if (s < i || s > h) continue;
      let d = !0;
      for (let c = 0; c < n.length; c += 2) n[c] === t && Math.abs(n[c + 1] - s) < Ge && (d = !1);
      d && f.push(s);
    }
    return f.length ? f : [r];
  }
  claim(e, t, r) {
    let i = this.taken.get(e);
    i ? i.push(t, r) : this.taken.set(e, [t, r]);
  }
};
function Yt(e, t, r) {
  let i = e.length, h = Math.sign(e[2] - e[0]), n = Math.sign(e[3] - e[1]), f = `M${v(e[0] + h * t)},${v(e[1] + n * t)}`;
  for (let d = 2; d < i - 2; d += 2) {
    let c = e[d], p = e[d + 1], _ = Math.sign(c - e[d - 2]), A = Math.sign(p - e[d - 1]), $ = Math.sign(e[d + 2] - c), o = Math.sign(e[d + 3] - p), l = Math.min(Lt, Math.abs(c - e[d - 2] + p - e[d - 1]) / 2, Math.abs(e[d + 2] - c + e[d + 3] - p) / 2);
    f += `${_ ? "H" + v(c - _ * l) : "V" + v(p - A * l)}Q${v(c)},${v(p)} ${v(c + $ * l)},${v(p + o * l)}`;
  }
  let a = Math.sign(e[i - 2] - e[i - 4]), s = Math.sign(e[i - 1] - e[i - 3]);
  return f + (a ? "H" + v(e[i - 2] - a * r) : "V" + v(e[i - 1] - s * r));
}
function it(e, t, r, i) {
  for (let h of t) if (h !== r && h !== i && lt(e, h.x, h.y, h.x + h.w, h.y + h.h)) return !1;
  return !0;
}
function st(e, t, r, i, h) {
  let n = e.length;
  return { d: Yt(e, r, i), sx: e[0], sy: e[1], sdx: -Math.sign(e[2] - e[0]), sdy: -Math.sign(e[3] - e[1]), ex: e[n - 2], ey: e[n - 1], edx: Math.sign(e[n - 2] - e[n - 4]), edy: Math.sign(e[n - 1] - e[n - 3]), x0: e[t], y0: e[t + 1], x1: e[t + 2], y1: e[t + 3], nx: 0, ny: 0, lean: 0, room: be, ...h, points: e };
}
function Je(e, t) {
  let r = [], i = (e + t) / 2, h = Math.max(at, (t - e) / 4);
  for (let n = 0; n < 9; n++) {
    let f = i + (n & 1 ? 1 : -1) * Math.ceil(n / 2) * h;
    f >= e + Be && f <= t - Be && r.push(f);
  }
  return r;
}
function Wt(e, t, r, i, h, n) {
  let f = e.x + e.w / 2, a = e.y + e.h / 2, s = t.x + t.w / 2, d = t.y + t.h / 2, c, p = (o, l, u) => {
    if (!it(o, r, e, t)) return;
    for (let g = 2; g < o.length; g += 2) {
      let T = o[g] === o[g - 2];
      if (!i.free(T, T ? o[g] : o[g + 1], T ? o[g - 1] : o[g - 2], T ? o[g + 1] : o[g])) return;
    }
    let x = i.crossings(o) * 1e6;
    for (let g = 2; g < o.length; g += 2) x += Math.abs(o[g] - o[g - 2]) + Math.abs(o[g + 1] - o[g - 1]);
    (!c || x < c.cost) && (c = { points: o, cost: x, upright: l, sides: u });
  };
  if (e.x + e.w <= t.x || t.x + t.w <= e.x) {
    let o = s > f, l = Math.sign(d - a), u = o ? [1, 0] : [0, 1], x = Je(o ? e.x + e.w : t.x + t.w, o ? t.x : e.x);
    e: for (let g of i.ports(e, u[0], a + l * e.h / 4, e.y + 8, e.y + e.h - 8)) for (let T of i.ports(t, u[1], d - l * t.h / 4, t.y + 8, t.y + t.h - 8)) for (let M of x) {
      let S = M + (f - M) * Math.min(Q(e, M, g, f, g), 1), U = M + (s - M) * Math.min(Q(t, M, T, s, T), 1), L = c;
      if (p([S, g, M, g, M, T, U, T], !0, u), c !== L) break e;
    }
  }
  if (e.y + e.h <= t.y || t.y + t.h <= e.y) {
    let o = d > a, l = Math.sign(s - f), u = o ? [3, 2] : [2, 3], x = Je(o ? e.y + e.h : t.y + t.h, o ? t.y : e.y);
    e: for (let g of i.ports(e, u[0], f + l * e.w / 4, e.x + 8, e.x + e.w - 8)) for (let T of i.ports(t, u[1], s - l * t.w / 4, t.x + 8, t.x + t.w - 8)) for (let M of x) {
      let S = M + (a - M) * Math.min(Q(e, g, M, g, a), 1), U = M + (d - M) * Math.min(Q(t, T, M, T, d), 1), L = c;
      if (p([g, S, g, M, T, M, T, U], !1, u), c !== L) break e;
    }
  }
  if (!c) return;
  let { points: _, upright: A, sides: $ } = c;
  return i.take(_), i.claim(e, $[0], A ? _[1] : _[0]), i.claim(t, $[1], A ? _[7] : _[6]), st(_, 2, h, n, { room: A ? Oe : be });
}
function Qt(e, t, r, i, h, n, f) {
  if (e === t) {
    let l = Math.min(e.h / 2 - 4, 10), u = Math.hypot(ie, l), x = e.x + e.w, g = e.y + e.h / 2, T = ie / u, M = l / u;
    return { d: `M${v(x + T * n)},${v(g - l - M * n)}C${v(x + ie)},${v(g - l * 2)} ${v(x + ie)},${v(g + l * 2)} ${v(x + T * f)},${v(g + l + M * f)}`, sx: x, sy: g - l, sdx: -T, sdy: M, ex: x, ey: g + l, edx: -T, edy: -M, x0: x + ie + 4, y0: g, x1: x + ie + 4, y1: g, nx: 1, ny: 0, lean: 0, room: 64, points: [] };
  }
  let [a, s, d, c] = Bt(e, t, r), p = a === d, _ = !1;
  if (i && !Ce(e, t) && !Ce(t, e)) for (let l of i) l !== e && l !== t && oe(l.x, l.y, l.x + l.w, l.y + l.h, a, s, d - a, c - s) <= 1 && (_ = !0);
  if (i && _ && !p && s !== c) {
    let l = Wt(e, t, i, h, n, f);
    if (l) return l;
    h.squeezed++;
  }
  if (i && _ && (p || s === c)) {
    let l = (y) => {
      let E = y ? -1 / 0 : 1 / 0, m = (C) => {
        let w = p ? C.x : C.y;
        E = y ? Math.max(E, w + (p ? C.w : C.h)) : Math.min(E, w);
      };
      m(e), m(t);
      for (let C of i) C !== e && C !== t && oe(C.x, C.y, C.x + C.w, C.y + C.h, a, s, d - a, c - s) <= 1 && m(C);
      return E;
    }, u = p ? Math.min(e.y, t.y) : Math.min(e.x, t.x), x = p ? Math.max(e.y + e.h, t.y + t.h) : Math.max(e.x + e.w, t.x + t.w), g = (y, E) => {
      for (let m of i) {
        if (m === e || m === t) continue;
        let C = p ? m.y < x && m.y + m.h > u : m.x < x && m.x + m.w > u, w = p ? m.x : m.y, N = w + (p ? m.w : m.h);
        if (C && (y ? N > E : w < E)) return !1;
      }
      return !0;
    }, T = e.x + e.w / 2, M = e.y + e.h / 2, S = t.x + t.w / 2, U = t.y + t.h / 2, L = Math.sign(p ? U - M : S - T), Y = (y) => {
      let E = l(y), m = y ? 1 : -1, C = p ? y ? 1 : 0 : y ? 3 : 2, w = p ? h.ports(e, C, M + L * e.h / 4, e.y + 8, e.y + e.h - 8)[0] : h.ports(e, C, T + L * e.w / 4, e.x + 8, e.x + e.w - 8)[0], N = p ? h.ports(t, C, U - L * t.h / 4, t.y + 8, t.y + t.h - 8)[0] : h.ports(t, C, S - L * t.w / 4, t.x + 8, t.x + t.w - 8)[0], I = (R) => {
        if (p) {
          let V = R + (T - R) * Math.min(Q(e, R, w, T, w), 1), G = R + (S - R) * Math.min(Q(t, R, N, S, N), 1);
          return [V, w, R, w, R, N, G, N];
        }
        let b = R + (M - R) * Math.min(Q(e, w, R, w, M), 1), z = R + (U - R) * Math.min(Q(t, N, R, N, U), 1);
        return [w, b, w, R, N, R, N, z];
      }, B = I(E + m * pe);
      for (let R = 0; R <= 4; R++) {
        let b = E + m * (pe + R * at), z = I(b);
        if (it(z, i, e, t) && (B = z, h.free(p, b, w, N))) return { points: B, side: C, p0: w, p1: N, step: R };
      }
      return { points: B, side: C, p0: w, p1: N, step: 5 };
    }, O = p ? c > s : d < a, H = g(O, l(O)), X = g(!O, l(!O)), P = Y(O), W = H === X ? Y(!O) : void 0, q = (y) => h.crossings(y.points) * 8 + y.step, K = X && !H || W && q(W) < q(P) ? !O : O, { points: J, side: Z, p0: se, p1: ue, step: Ee } = K === O ? P : W ?? Y(!O), we = K ? 1 : -1;
    return Ee > 4 && h.squeezed++, h.take(J), h.claim(e, Z, se), h.claim(t, Z, ue), st(J, 2, n, f, p ? { nx: we, lean: Ot, room: Oe } : { room: be });
  }
  let A = Math.hypot(d - a, c - s) || 1, $ = (d - a) / A, o = (c - s) / A;
  return (p || s === c) && h.take([a, s, d, c]), { d: `M${v(a + $ * n)},${v(s + o * n)}L${v(d - $ * f)},${v(c - o * f)}`, sx: a, sy: s, sdx: -$, sdy: -o, ex: d, ey: c, edx: $, edy: o, x0: a, y0: s, x1: d, y1: c, nx: r ? -o : 0, ny: r ? $ : 0, lean: 0, room: Math.abs($) > Math.abs(o) ? Oe : be, points: [a, s, d, c] };
}
var Ue = 216, Xt = 64, Ze = 14, qt = 12, zt = 100, Ft = 88, et = pe + 8, me = 48, ce = 16, Pe = 10, ke = /* @__PURE__ */ new Map([["person", "person"], ["box", "rect"], ["rounded", "rect"], ["component", "rect"], ["cylinder", "cyl"], ["database", "cyl"], ["db", "cyl"], ["queue", "h-cyl"], ["pipe", "h-cyl"]]);
function Ht(e) {
  let t = ke.get((e.shape ?? "").toLowerCase()) ?? ke.get((e.sprite ?? "").toLowerCase());
  if (t) return t;
  if (e.tags) for (let i of e.tags.split(",")) {
    let h = ke.get(i.trim().toLowerCase());
    if (h) return h;
  }
  let r = e.kind;
  return r.endsWith("person") ? "person" : r.endsWith("_db") ? "cyl" : r.endsWith("_queue") ? "h-cyl" : "rect";
}
function Kt(e, t, r, i, h = Ue) {
  let n = Ht(e), f = n === "h-cyl" ? 36 : 0, a = n === "person" ? Ye : n === "cyl" ? 24 : 0, s = h - 2 * Ze - f, d = [j("«" + e.kind.replace(/_/g, " ") + "»", !1, t, i - 1, s), j(e.label, !1, t, r, s, 1), j(e.techn ? `[${e.techn}]` : void 0, !1, t, i, s), j(e.descr, !1, t, i, s)], c = 0, p = d[3].height > 0 ? 4 : 0;
  for (let _ of d) c = Math.max(c, _.width), p += _.height;
  return { shape: e, form: n, labels: d, textH: p, x: 0, y: 0, w: Math.max(h, c + 2 * Ze + f), h: Math.max(Xt, p + 2 * qt + a) };
}
function tt(e, t, r, i, h) {
  let n = 0, f = 0;
  for (let a = 0; a < e.length; a += t) {
    let s = Math.min(e.length, a + t), d = 0, c = 0;
    for (let p = a; p < s; p++) c = Math.max(c, e[p].h);
    for (let p = a; p < s; p++) {
      let _ = e[p];
      _.x = d, _.y = f, h && (_.h = c), d += _.w + r;
    }
    n = Math.max(n, d - r), f += c + i;
  }
  return [n, e.length > 0 ? f - i : 0];
}
function Vt(e, t, r, i, h, n) {
  let f = h === void 0 ? et : 12, a = /* @__PURE__ */ new Map();
  for (let o of e.boundaries) {
    let l = h === void 0 ? 4e3 : Math.max(80, h - 2 * ce - 2 * et * 2), u = o.parent ? [j(o.label, !1, t, r, l, 1), j(o.type ? `[${o.type}]` : void 0, !1, t, i, l), j(o.descr, !1, t, i, l)] : [], x = 0, g = 0;
    for (let T of u) x += T.height, g = Math.max(g, T.width);
    a.set(o, { boundary: o, kids: [], nodes: [], labels: u, head: x > 0 ? x + Pe + 6 + pe : f, headW: g, headX: ce, x: 0, y: 0, w: 0, h: 0, form: "rect" });
  }
  let s = a.get(e.boundaries[0]);
  for (let o of a.values()) {
    let l = o.boundary.parent;
    l && a.get(l)?.kids.push(o);
  }
  let d = [s], c = /* @__PURE__ */ new Map([[s.boundary, 0]]);
  for (let o = 0; o < d.length; o++) for (let l of d[o].kids) c.set(l.boundary, c.get(d[o].boundary) + 1), d.push(l);
  for (let o of e.shapes) if (o.parent) {
    let l = c.get(o.parent) ?? 0, u = h === void 0 ? Ue : Math.max(100, Math.min(Ue, h - 2 * l * f - 32));
    a.get(o.parent)?.nodes.push(Kt(o, t, r, i, u));
  }
  let p = Math.max(1, e.shapeInRow), _ = Math.max(1, e.boundaryInRow), A = /* @__PURE__ */ new Map();
  for (let o = d.length - 1; o >= 0; o--) {
    let l = d[o], u = h === void 0 ? zt : n, x = (Y, O, H) => {
      if (h === void 0) return O;
      let X = 1;
      for (let P of Y) X = Math.max(X, P.w);
      return Math.max(1, Math.min(O, Math.floor((h + H - 2 * f) / (X + H))));
    }, [g, T] = tt(l.nodes, x(l.nodes, p, u), u, Ft, !0), [M, S] = tt(l.kids, x(l.kids, _, me), me, me, !1), U = T > 0 && S > 0 ? me : 0, L = l === s ? 0 : f;
    A.set(l, T + U), l.w = Math.max(g, M, l.headW + 2 * ce - 2 * L) + 2 * L, l.h = (L && l.head) + T + U + S + L;
  }
  let $ = /* @__PURE__ */ new Map();
  for (let o of d) {
    let l = o.x + (o === s ? 0 : f), u = o.y + (o === s ? 0 : o.head);
    for (let x of o.nodes) x.x += l, x.y += u, $.set(x.shape, x);
    for (let x of o.kids) x.x += l, x.y += u + A.get(o);
    o !== s && $.set(o.boundary, o);
  }
  return { order: d, boxes: $ };
}
var jt = 7, Me = 36, Ie = 24, rt = 2e3, ge = 8, Gt = [0.5, 0.4, 0.6, 0.3, 0.7, 0.2, 0.8], Jt = 2e6;
function _e(e, t, r) {
  let i = [];
  return e && i.push("fill:" + e), t && i.push("stroke:" + t), r && i.push("color:" + r), Et(i);
}
function De(e, t, r, i, h) {
  return t ? ct(e, pt(t.includes("¶ß") ? t.replace(/\ufb02\u00b0\u00b0?/g, "#").replace(/\u00b6\u00df/g, ";") : t), r, i, h) : e;
}
function Zt(e, t, r) {
  return mt(r, (i) => {
    if (!i) return Le(e, t, r, !1)[0];
    let [h, n] = Le(e, t, r, !0, Me);
    for (let f = Me + Ie; n > 0 && f <= Me + 3 * Ie; f += Ie) {
      let [a, s] = Le(e, t, r, !0, f);
      s < n && ([h, n] = [a, s]);
    }
    return h;
  });
}
function Le(e, t, r, i, h = Me) {
  let n = r.fontSize ?? 16, f = Math.round(n * 0.8125), a = r.measurer ?? yt(r.fontFamily), s = r.padding ?? 8, d = [], { order: c, boxes: p } = Vt(e, a, n, f, i ? Math.max(80, (r.maxWidth ?? 320) - 2 * s) : void 0, h), _ = c[0], A = 0, $ = 0, o = _.w, l = _.h, u = (y, E, m, C) => {
    A = Math.min(A, y), $ = Math.min($, E), o = Math.max(o, m), l = Math.max(l, C);
  }, x = [], g = /* @__PURE__ */ new Map();
  for (let y of e.rels) {
    let E = y.fromAttr ? void 0 : e.getC4Shape(y.from), m = y.toAttr ? void 0 : e.getC4Shape(y.to), C = E && p.get(E), w = m && p.get(m);
    if (!C || !w) throw new xt(`C4 rel "${y.from}" -> "${y.to}" references an unknown shape or boundary`, "semantic", { type: "c4" });
    x.push(C, w);
    let N = g.get(C);
    N || g.set(C, N = /* @__PURE__ */ new Set()), N.add(w);
  }
  let T = [], M = [];
  for (let y of c) for (let E of y.nodes) T.push(E), M.push(E.x + ge, E.y + ge, E.x + E.w - ge, E.y + E.h - ge);
  let S = e.rels.length * (T.length + c.length + 3 * e.rels.length) <= Jt, U = (y, E, m, C) => {
    let w = 0;
    for (let N = 0; N < M.length; N += 4) {
      let I = Math.min(m, M[N + 2]) - Math.max(y, M[N]);
      if (I <= 0) continue;
      let B = Math.min(C, M[N + 3]) - Math.max(E, M[N + 1]);
      B > 0 && (w += I * B);
    }
    return w;
  }, L = (y) => y ? Math.max(-rt, Math.min(rt, y)) : 0, Y = "", O = _t("arrow_point"), H = new Pt();
  for (let y of c) y !== _ && H.frame(y);
  let X = e.rels.map((y, E) => {
    let m = x[E * 2], C = x[E * 2 + 1], w = _e(void 0, y.lineColor, void 0), N = w.stroke ? Mt(w.stroke) : "var(--_l)", I = y.type === "birel" || y.type === "rel_b", B = y.type !== "rel_b", R = m !== C && g.get(C)?.has(m) === !0, b = Qt(m, C, R ? jt : 0, S ? T : void 0, H, I ? O : 0, B ? O : 0);
    return u(Math.min(b.x0, b.x1), Math.min(b.y0, b.y1), Math.max(b.x0, b.x1), Math.max(b.y0, b.y1)), I && S && M.push(b.sx - te, b.sy - te, b.sx + te, b.sy + te), B && S && M.push(b.ex - te, b.ey - te, b.ex + te, b.ey + te), Y += `<g class="pele-edge" data-id="${he(y.from + "-" + y.to)}"${w.line}><path d="${b.d}"/>` + (I ? He("arrow_point", b.sx, b.sy, b.sdx, b.sdy, N) : "") + (B ? He("arrow_point", b.ex, b.ey, b.edx, b.edy, N) : "") + "</g>", b;
  });
  for (let y of c) {
    if (!S || y.headW === 0) continue;
    let E = y.y + Pe, m = y.y + y.head - pe, C = 1 / 0;
    for (let w of [ce, (y.w - y.headW) / 2, y.w - ce - y.headW]) {
      let N = 0;
      for (let I of X) lt(I.points, y.x + w - 4, E, y.x + w + y.headW + 4, m) && N++;
      if (N < C && (C = N, y.headX = w), N === 0) break;
    }
    M.push(y.x + y.headX - 4, E, y.x + y.headX + y.headW + 4, m);
  }
  let P = "";
  e.rels.forEach((y, E) => {
    let m = X[E], C = y.from + "-" + y.to, w = _e(void 0, void 0, y.textColor), N = (e.c4Type === "C4Dynamic" ? E + 1 + ": " : "") + y.label, I = j(N, !1, a, f, m.room), B = j(y.techn ? `[${y.techn}]` : void 0, !1, a, f, m.room, 2), R = Math.max(I.width, B.width) + 8, b = I.height + B.height;
    if (b === 0) return;
    let z = Math.abs(m.nx) * (R / 2) + Math.abs(m.ny) * (b / 2) + 2, V = m.lean ? Math.max(0, Math.min(m.lean, z - 14)) : z, G = m.nx * V + (i ? 0 : L(y.offsetX)), F = m.ny * V + (i ? 0 : L(y.offsetY)), ee = 0.5;
    if (S) {
      let $e = 1 / 0, ht = G !== m.nx * V || F !== m.ny * V;
      for (let ye = 0; ye < (ht ? 2 : 1) && $e > 0; ye++) {
        let We = ye ? m.nx * V : G, Qe = ye ? m.ny * V : F;
        for (let Te of Gt) {
          let Xe = m.x0 + (m.x1 - m.x0) * Te + We, qe = m.y0 + (m.y1 - m.y0) * Te + Qe, Ne = U(Xe - R / 2, qe - b / 2, Xe + R / 2, qe + b / 2);
          if (Ne < $e && ($e = Ne, ee = Te, G = We, F = Qe), Ne === 0) break;
        }
      }
    }
    let re = m.x0 + (m.x1 - m.x0) * ee + G, ae = m.y0 + (m.y1 - m.y0) * ee + F - b / 2;
    S && M.push(re - R / 2, ae, re + R / 2, ae + b), u(re - R / 2, ae, re + R / 2, ae + b), P += `<g class="pele-edge-label" data-id="${he(C)}">` + (y.descr ? `<title>${he(y.descr)}</title>` : "") + `<rect x="${v(re - R / 2)}" y="${v(ae)}" width="${v(R)}" height="${v(b)}" rx="3" fill="var(--_bg)"/>` + De(ne(I, re, ae + I.height / 2, w.text) + ne(B, re, ae + I.height + B.height / 2, ` class="pele-c4-techn" fill="var(--_m)"${w.text}`), y.link, C, d, r) + "</g>";
  });
  let W = "", q = "";
  for (let y of c) {
    if (y !== _) {
      let E = y.boundary, m = _e(E.bgColor, E.borderColor, E.fontColor), C = y.x + y.headX, w = y.y + Pe, N = Re(y.labels[0], C, w, ` class="pele-cluster-label" font-weight="var(--_hw)"${m.text}`);
      w += y.labels[0].height, N += Re(y.labels[1], C, w, ` class="pele-c4-type" font-size="${f}" fill="var(--_m)"${m.text}`), w += y.labels[1].height, N += Re(y.labels[2], C, w, ` class="pele-c4-descr" font-size="${f}" fill="var(--_m)"${m.text}`), W += `<g class="pele-cluster pele-c4-${E.nodeType ? "node" : "boundary"}" data-id="${he(E.alias)}"><rect x="${v(y.x)}" y="${v(y.y)}" width="${v(y.w)}" height="${v(y.h)}" rx="${bt}" fill="none" stroke="var(--_b)"${E.nodeType ? "" : ' stroke-dasharray="6 4"'}${m.shape}/>` + De(N, E.link, E.alias, d, r) + "</g>";
    }
    for (let E of y.nodes) {
      let m = E.shape, C = m.kind.startsWith("external"), w = _e(m.bgColor, m.borderColor, m.fontColor), N = ' stroke="var(--_b)"' + (C ? ' stroke-dasharray="4 3"' : ""), { w: I, h: B, form: R, labels: b } = E, z = R === "h-cyl" ? -ot(B) / 2 : 0, V = R === "person" ? Ye / 2 : R === "cyl" ? nt(I) / 2 : 0, G = ` fill="var(--_m)"${w.text}`, F = V - E.textH / 2, ee = ne(b[0], z, F + b[0].height / 2, ` class="pele-c4-type" font-size="${f - 1}"${G}`);
      F += b[0].height, ee += ne(b[1], z, F + b[1].height / 2, ` class="pele-label" font-weight="var(--_hw)"${w.text}`), F += b[1].height, ee += ne(b[2], z, F + b[2].height / 2, ` class="pele-c4-techn" font-size="${f}"${G}`), F += b[2].height + 4, ee += ne(b[3], z, F + b[3].height / 2, ` class="pele-c4-descr" font-size="${f}"${w.text}`), q += `<g class="pele-node pele-shape-${R} pele-c4-${m.kind}${C ? " pele-c4-external" : ""}" data-id="${he(m.alias)}" transform="translate(${v(E.x + I / 2)},${v(E.y + B / 2)})">` + De(ut(R, I, B, ` fill="var(${C ? "--_bg" : "--_s"})"${N}${w.shape}`, N + w.line) + ee, m.link, m.alias, d, r) + "</g>";
    }
  }
  let K = j(e.title, !1, a, n, i ? gt(r) : 4e3, 1), J = K.height > 0 ? K.height + 12 : 0, Z = Math.max(o - A, K.width), se = Math.ceil(Z + 2 * s), ue = Math.ceil(l - $ + J + 2 * s), Ee = s - A + (Z - (o - A)) / 2, we = s + J - $;
  return [{ svg: Ct("c4", se, ue, n, r, e, ne(K, se / 2, s + K.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${v(Ee)},${v(we)})">` + (W ? `<g class="pele-clusters">${W}</g>` : "") + (Y ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${Y}</g>` : "") + (q ? `<g class="pele-nodes">${q}</g>` : "") + (P ? `<g class="pele-edge-labels" font-size="${f}">${P}</g>` : "") + "</g>"), width: se, height: ue, links: d }, H.squeezed];
}
var sr = { type: "c4", parse(e, t, r) {
  let i = new Tt();
  return r && (i.title = r), Dt(e, i), i;
}, render: Zt };
export {
  sr as c4
};
