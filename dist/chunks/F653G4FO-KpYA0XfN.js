var ft = Object.defineProperty;
var ut = (t, r, a) => r in t ? ft(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var U = (t, r, a) => ut(t, typeof r != "symbol" ? r + "" : r, a);
import { i as ht, a as pt } from "./FTXIJQGB-DEOy2_zI.js";
import { q as je, x as me, H as gt, $ as bt, e as le, L as Xe, i as We } from "./lazy-CehDEl4q.js";
import { h as mt } from "./7WLXJQOR-C_9BAVZ4.js";
import { x as Ye, h as yt } from "./ELSXBIJH-BYqGUTHN.js";
import { b as He, d as Ce, m as kt, p as wt } from "./FKCDD66M-BxR87HMc.js";
import { A as At, M as vt, L as Tt, O as Ct, N as St } from "./JZWSX6AR-CTa5XBC9.js";
import { o as xt, i as Et, P as $t, B as Se, E as Lt } from "./URA2L2QI-BZvG0umE.js";
import { m as _t, c as It } from "./DKTLEL5E-BCFlW8pF.js";
import { F as qe, w as xe, L as Mt, D as Nt, S as Rt } from "./HWDLEDTA-Ctstf22F.js";
import { g as Je, _ as ue, h as Ze, y as Ee, a as Qe, x as q, f as $e, m as Oe, b as Le, $ as Dt } from "./RZSVICHU-DoNHkG46.js";
var Ot = /* @__PURE__ */ new Map([["task", "roundedRect"], ["tool", "subroutine"], ["input", "lean-right"], ["decision", "diamond"], ["refdoc", "lin-doc"], ["action", "hexagon"], ["round", "rect"]]), Gt = /* @__PURE__ */ new Set(["doc", "stadium", "terminal", "circle", "trapezoid", "inv_trapezoid", "inv-trapezoid", "doublecircle", "double-circle", "typeDeclaration", "procs", "lean_left", "lean-left", "in-out", "cylinder", "ellipse", "odd", "tag-rect", "tagged-rectangle", "delay", "half-rounded-rectangle", "lin-rect", "lined-rectangle", "win-pane", "window-pane", "curv-trap", "curved-trapezoid"]), Ut = /* @__PURE__ */ new Set(["roundedRect", "subroutine", "subprocess", "subproc", "framed-rectangle", "lean-right", "diamond", "lin-doc", "lined-document", "hexagon", "hex", "connector", "collapsedGroup"]), he = "roundedRect";
function Ae(t) {
  return t && (Ot.get(t) ?? t);
}
function Bt(t) {
  return pt(t) || t === "constructor";
}
function Pt(t, r) {
  for (let a of t) a.isGroup || ((!a.shape || a.shape === "squareRect" || a.shape === "rect") && (a.shape = he), Gt.has(a.shape) ? (r.emitError("SHAPE_REMOVED", `shape "${a.shape}" was removed in v0.8.1, using "${he}"`, { nodeId: a.id }), a.shape = he) : Ut.has(a.shape) || (r.emitWarning("SHAPE_UNSUPPORTED", `shape "${a.shape}" is not supported, using "${he}"`, { nodeId: a.id }), a.shape = he));
}
var Vt = /* @__PURE__ */ new Set(["shape", "view", "icon", "img", "form", "pos", "w", "h", "class", "style", "labelType"]), Kt = /* @__PURE__ */ new Set(["subroutine", "subprocess", "subproc", "framed-rectangle", "tool"]);
function Ft(t) {
  return Kt.has(t.type);
}
function _e(t) {
  return t === "markdown" || t === "string" || t === "text" ? t : "markdown";
}
function et(t) {
  return t.startsWith('"') && t.endsWith('"') ? t.substring(1, t.length - 1) : t;
}
function Ge(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function zt(t) {
  let r = (i) => Array.isArray(i) ? [] : Ge(i) ? {} : i, a = r(t), c = [[t, a]];
  for (; c.length > 0; ) {
    let [i, l] = c.pop();
    if (Array.isArray(i)) for (let h of i) {
      let y = r(h);
      l.push(y), typeof h == "object" && h !== null && c.push([h, y]);
    }
    else if (Ge(i)) for (let h of Object.keys(i)) {
      if (h === "__proto__" || h === "constructor" || h === "prototype") continue;
      let y = i[h], e = r(y);
      l[h] = e, typeof y == "object" && y !== null && c.push([y, e]);
    }
  }
  return a;
}
function ye(t, r) {
  return Object.assign(t ?? {}, r);
}
var jt = /:\s*[>|][\d+-]*\s*$/, Xt = /,([\t ]*)$/;
function Wt(t) {
  let r = !1, a = !1, c = 0, i, l = [];
  for (let h of t.split(`
`)) {
    if (i !== void 0) {
      let A = h.length - h.trimStart().length;
      if (h.trim() === "" || A > i) {
        l.push(h);
        continue;
      }
      i = void 0;
    }
    let y = -1;
    for (let A = 0; A < h.length; A++) {
      let I = h[A];
      if (a) I === "\\" ? A++ : I === '"' && (a = !1);
      else if (r) I === "'" && (r = !1);
      else if (I === '"') a = !0;
      else if (I === "'") r = !0;
      else if (I === "#" && (A === 0 || h[A - 1] === " " || h[A - 1] === "	")) {
        y = A;
        break;
      } else I === "[" || I === "{" ? c++ : (I === "]" || I === "}") && (c = Math.max(0, c - 1));
    }
    if (r || a || c > 0) {
      l.push(h);
      continue;
    }
    let e = y >= 0 ? h.slice(0, y) : h, S = y >= 0 ? h.slice(y) : "";
    if (jt.test(e)) {
      i = h.length - h.trimStart().length, l.push(h);
      continue;
    }
    l.push(e.replace(Xt, "$1") + S);
  }
  return l.join(`
`);
}
function Yt(t, r) {
  if (t === "arrow_point" && r === "normal") return "sequence";
  if (t === "arrow_cross" && r === "normal") return "failure";
  if (t === "arrow_open" && r === "dotted") return "reference";
}
function Ht(t) {
  let r = t.trim(), a = r.slice(0, -1), c = "arrow_open";
  switch (r.slice(-1)) {
    case "x":
      c = "arrow_cross";
      break;
    case ">":
      c = "arrow_point";
      break;
    case "-":
    case ".":
      a = r;
      break;
  }
  let i = "normal", l = a.length - 1, h = 0;
  for (let y = 0; y < a.length; y++) a[y] === "." && h++;
  return h > 0 && (i = "dotted", l = h), { type: c, stroke: i, length: l };
}
function tt(t) {
  if (!t) return;
  let r = {}, a = !1;
  for (let c of Object.keys(t)) Vt.has(c) || (r[c] = t[c], a = !0);
  return a ? r : void 0;
}
var qt = class {
  constructor(t = {}) {
    U(this, "type", "agentflow");
    U(this, "direction");
    U(this, "nodes", /* @__PURE__ */ new Map());
    U(this, "edges", []);
    U(this, "subgraphs", []);
    U(this, "connectors", /* @__PURE__ */ new Map());
    U(this, "classes", /* @__PURE__ */ new Map());
    U(this, "tooltips", /* @__PURE__ */ new Map());
    U(this, "defaultEdgeStyle");
    U(this, "defaultInterpolate");
    U(this, "mappings", []);
    U(this, "diagnostics", []);
    U(this, "title");
    U(this, "accTitle");
    U(this, "accDescr");
    U(this, "lineOffset");
    U(this, "subgraphLookup", /* @__PURE__ */ new Map());
    U(this, "globalNodes", /* @__PURE__ */ new Set());
    U(this, "members", /* @__PURE__ */ new Set());
    U(this, "edgeById", /* @__PURE__ */ new Map());
    U(this, "pairCount", /* @__PURE__ */ new Map());
    U(this, "subCount", 0);
    U(this, "bareMappings", /* @__PURE__ */ new Set());
    U(this, "firstMapping", /* @__PURE__ */ new Map());
    U(this, "reported", /* @__PURE__ */ new Map());
    U(this, "options");
    this.options = t, this.lineOffset = t.lineOffset ?? 0;
  }
  metadata(t, r, a) {
    let c = r.includes(`
`), i;
    try {
      i = je(c ? r + `
` : `{
` + r + `
}`);
    } catch (l) {
      let h = c ? Wt(r) : r, y;
      if (h !== r) try {
        y = je(h + `
`);
      } catch {
        y = void 0;
      }
      if (y === void 0) {
        let e = a ? ` (${a.first_line + this.lineOffset}:${a.first_column + 1})` : "";
        throw new me(`Metadata of "${t}" is not valid YAML. ${l.message}${e}`, "syntax", { type: "agentflow", line: a ? a.first_line + this.lineOffset : 0, column: a ? a.first_column + 1 : 0 });
      }
      i = y;
    }
    return zt(i ?? {});
  }
  shapeError(t, r) {
    return new me(t, "semantic", { type: "agentflow", line: r ? r.first_line + this.lineOffset : 0, column: r ? r.first_column + 1 : 0 });
  }
  addVertex(t, r, a, c, i, l, h = {}, y, e) {
    if (!t || t.trim().length === 0) return;
    let S, A, I;
    y !== void 0 && (S = this.metadata(t, y, e), Ge(S) && (A = S, typeof S.shape == "string" && (I = S.shape, S.shape = Ae(S.shape))));
    let L = this.subgraphLookup.get(t);
    if (L && S) {
      L.metadata = ye(L.metadata, S);
      return;
    }
    let x = this.connectors.get(t);
    if (x && S) {
      x.metadata = ye(x.metadata, S);
      return;
    }
    if (t === "connectors") return;
    let m = this.edgeById.get(t);
    if (m) {
      A?.animate !== void 0 && (m.animate = A.animate), A?.animation !== void 0 && (m.animation = A.animation), A?.curve !== void 0 && (m.interpolate = A.curve), S && (m.metadata = ye(m.metadata, S));
      return;
    }
    let _ = this.nodes.get(t);
    if (_ === void 0 && (_ = { id: t, labelType: "text", styles: [], classes: [] }, this.nodes.set(t, _)), r !== void 0 ? (_.labelType = r.type, _.text = et(r.text.trim())) : _.text === void 0 && (_.text = t), a !== void 0 && (_.type = a), c != null) for (let O of c) _.styles.push(O);
    if (i != null) for (let O of i) _.classes.push(O);
    if (l !== void 0 && (_.dir = l), _.props === void 0 ? _.props = h : h !== void 0 && Object.assign(_.props, h), !!S && (_.metadata = ye(_.metadata, S), A !== void 0)) {
      if (A.shape) {
        let O = I ?? A.shape;
        if (typeof O != "string") throw this.shapeError(`No such shape: ${JSON.stringify(O)}.`, e);
        if (O !== O.toLowerCase() || O.includes("_")) throw this.shapeError(`No such shape: ${O}. Shape names should be lowercase.`, e);
        let p = A.shape;
        if (!Bt(p)) throw this.shapeError(`No such shape: ${p}.`, e);
        _.type = p;
      }
      A.label && (_.text = String(A.label), _.labelType = _e(A.labelType));
    }
  }
  addSingleLink(t, r, a, c) {
    let i = { start: t, end: r, type: void 0, text: "", labelType: "text", classes: [], isUserDefinedId: !1, interpolate: this.defaultInterpolate }, l = a?.text;
    l !== void 0 && (i.text = et(l.text.trim()), i.labelType = _e(l.type)), a !== void 0 && (i.type = a.type, i.stroke = a.stroke, i.length = a.length > 10 ? 10 : a.length, a.edgeSemantic && (i.edgeSemantic = a.edgeSemantic));
    let h = t + "\0" + r, y = this.pairCount.get(h) ?? 0;
    c && !this.edgeById.has(c) ? (i.id = c, i.isUserDefinedId = !0) : i.id = `L_${t}_${r}_${y === 0 ? 0 : y + 1}`;
    let e = this.options.maxEdges;
    if (e !== void 0 && this.edges.length >= e) throw new me(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${e}.`, "limit", { type: "agentflow" });
    this.edges.push(i), this.pairCount.set(h, y + 1), this.edgeById.has(i.id) || this.edgeById.set(i.id, i);
  }
  addLink(t, r, a) {
    let c = typeof a?.id == "string" ? a.id.replace("@", "") : void 0, i = t[t.length - 1], l = r[0];
    for (let h of t) for (let y of r) this.addSingleLink(h, y, a, h === i && y === l ? c : void 0);
  }
  updateLinkInterpolate(t, r) {
    for (let a of t) a === "default" ? this.defaultInterpolate = r : this.edgeAt(a).interpolate = r;
  }
  updateLink(t, r) {
    for (let a of t) {
      if (a === "default") {
        this.defaultEdgeStyle = r;
        continue;
      }
      let c = this.edgeAt(a);
      c.style = r, r.length > 0 && !r.some((i) => i?.startsWith("fill")) && r.push("fill:none");
    }
  }
  edgeAt(t) {
    let r = this.edges[Number(t)];
    if (r === void 0) throw new me(`The index ${t} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`, "semantic", { type: "agentflow" });
    return r;
  }
  addClass(t, r) {
    let a = r.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
    for (let c of t.split(",")) {
      let i = this.classes.get(c);
      i === void 0 && (i = { id: c, styles: [], textStyles: [] }, this.classes.set(c, i));
      for (let l of a) l.includes("color") && i.textStyles.push(l.replace("fill", "bgFill")), i.styles.push(l);
    }
  }
  setDirection(t) {
    let r = t.trim();
    r.includes("<") && (r = "RL"), r.includes("^") && (r = "BT"), r.includes(">") && (r = "LR"), r.includes("v") && (r = "TB"), r === "TD" && (r = "TB"), this.direction = r;
  }
  setClass(t, r) {
    for (let a of t.split(",")) this.nodes.get(a)?.classes.push(r), this.edgeById.get(a)?.classes.push(r), this.subgraphLookup.get(a)?.classes.push(r);
  }
  setTooltip(t, r) {
    if (r !== void 0) for (let a of t.split(",")) this.tooltips.set(a, r);
  }
  setLink(t, r, a) {
    let c = r.trim();
    for (let i of t.split(",")) {
      let l = this.nodes.get(i);
      l !== void 0 && (l.link = c ? At(c) : void 0, l.linkTarget = a);
    }
    this.setClass(t, "clickable");
  }
  setClickEvent(t, r, a) {
    this.setClass(t, "clickable");
  }
  setAccTitle(t) {
    this.accTitle = t.replace(/^\s+/g, "");
  }
  setAccDescription(t) {
    this.accDescr = t.replace(/\n\s+/g, `
`);
  }
  addSubGraph(t, r, a, c) {
    let i = t?.text?.trim(), l = a?.text || "";
    t !== void 0 && t === a && /\s/.test(l) && (i = void 0);
    let h = /* @__PURE__ */ new Set(), y = [], e;
    for (let x of r) if (typeof x == "string") x.trim() !== "" && !h.has(x) && (h.add(x), y.push(x));
    else if (Array.isArray(x)) for (let m of x) m.trim() !== "" && !h.has(m) && (h.add(m), y.push(m));
    else e = x.value;
    e ?? (e = this.options.inheritDir ? this.direction ?? this.options.direction : void 0), i ?? (i = "subGraph" + this.subCount), this.subCount++;
    let S = this.members, A = y.filter((x) => x !== i && !this.globalNodes.has(x) && !S.has(x));
    for (let x of A) S.add(x);
    let I = this.subgraphLookup.get(i);
    if (I) {
      for (let x of A) I.nodes.push(x);
      return l.trim() && (I.title = l.trim()), e && (I.dir = e), i;
    }
    let L = { id: i, nodes: A, title: l.trim(), classes: [], dir: e, labelType: _e(a?.type), type: "flow" };
    return this.subgraphs.push(L), this.subgraphLookup.set(i, L), i;
  }
  addGlobal(t) {
    let r = !1, a = (c) => {
      let i = c.trim();
      i !== "" && (this.globalNodes.add(i), this.members.delete(i) && (r = !0));
    };
    for (let c of t) if (typeof c == "string") a(c);
    else if (Array.isArray(c)) for (let i of c) a(i);
    if (r) for (let c of this.subgraphs) c.nodes = c.nodes.filter((i) => !this.globalNodes.has(i));
  }
  addConnector(t, r) {
    let a = t?.text?.trim();
    if (!a) return "";
    let c = r?.text?.trim() ?? "", i = this.connectors.get(a);
    if (i) c.length > 0 && (i.text = c);
    else {
      let l = { id: a, labelType: "text", styles: [], classes: [], isConnector: !0, text: c.length > 0 ? c : a };
      this.connectors.set(a, l), this.nodes.set(a, l);
    }
    return a;
  }
  destructLink(t, r) {
    let a = Ht(t);
    return r && (r.includes(".") ? "dotted" : "normal") !== a.stroke ? { type: "INVALID", stroke: "INVALID" } : { ...a, edgeSemantic: Yt(a.type, a.stroke) };
  }
  subgraph(t) {
    return this.subgraphLookup.get(t);
  }
  vertexKind(t) {
    if (Ft(t)) return "tool";
    let r = Ae(t.type);
    return r === "hexagon" || r === "hex" ? "action" : r === "lean-right" || r === "lean_right" ? "input" : r === "lin-doc" || r === "lined-document" ? "refdoc" : r === "diamond" ? "decision" : "task";
  }
  semanticModel() {
    let t = [], r = [];
    for (let [l, h] of this.nodes) {
      if (this.subgraphLookup.has(l)) continue;
      let y = tt(h.metadata);
      if (h.isConnector) {
        let A = { id: l };
        h.text !== void 0 && h.text !== l && (A.title = h.text), y && (A.metadata = y), r.push(A);
        continue;
      }
      let e = { id: l };
      h.text !== void 0 && (e.label = h.text);
      let S = Ae(h.type);
      S !== void 0 && (e.shape = S), e.vertexKind = this.vertexKind(h), y && (e.metadata = y), t.push(e);
    }
    let a = this.edges.map((l) => {
      let h = { start: l.start, end: l.end };
      return l.id !== void 0 && (h.id = l.id), l.text.length > 0 && (h.label = l.text), l.type !== void 0 && (h.type = l.type), l.stroke !== void 0 && (h.stroke = l.stroke), l.edgeSemantic !== void 0 && (h.edgeSemantic = l.edgeSemantic), l.length !== void 0 && (h.length = l.length), l.metadata && Object.keys(l.metadata).length > 0 && (h.metadata = { ...l.metadata }), h;
    }), c = this.subgraphs.map((l) => {
      let h = { id: l.id, nodes: [...l.nodes], type: l.type, title: l.title };
      l.dir !== void 0 && (h.direction = l.dir);
      let y = tt(l.metadata);
      return y && (h.metadata = y), h;
    }), i = { vertices: t, edges: a, subGraphs: c, connectors: r, diagnostics: this.diagnostics };
    return this.direction !== void 0 && (i.direction = this.direction), i;
  }
  position(t) {
    let r = t?.first_line ?? 0, a = t?.first_column ?? 0;
    return { startLine: r + this.lineOffset, startColumn: a, endLine: (t?.last_line ?? r) + this.lineOffset, endColumn: t?.last_column ?? a, startIndex: 0, endIndex: 0 };
  }
  pushMapping(t, r, a) {
    let c = { id: t, type: r, position: a };
    return this.mappings.push(c), this.firstMapping.has(t) || this.firstMapping.set(t, c), c;
  }
  addVertexMapping(t, r, a, c) {
    if (!t) return;
    let i = this.pushMapping(t, "vertex", this.position(c));
    a == null && this.bareMappings.add(i);
  }
  extendVertexMapping(t, r) {
    if (!t || !r) return;
    let a = this.position(r);
    for (let c = this.mappings.length - 1; c >= 0; c--) {
      let i = this.mappings[c];
      if (i.type !== "vertex" || i.id !== t) continue;
      this.bareMappings.delete(i) && (i.type = "attachment");
      let l = i.position;
      (a.endLine > l.endLine || a.endLine === l.endLine && a.endColumn > l.endColumn) && (l.endLine = a.endLine, l.endColumn = a.endColumn);
      return;
    }
    this.pushMapping(t, "attachment", a);
  }
  addEdgeMapping(t, r, a, c) {
    let i = Array.isArray(r) ? r.filter((l) => typeof l == "string" && l !== "") : [];
    this.pushMapping(i.length > 0 ? i.join(">") : "edge", "edge", this.position(c));
  }
  blockMapping(t, r, a, c) {
    if (!t) return;
    let i = this.position(a), l = c ? this.position(c) : i;
    this.pushMapping(t, r, { startLine: i.startLine, startColumn: i.startColumn, endLine: l.endLine, endColumn: l.endColumn, startIndex: 0, endIndex: 0 });
  }
  addSubgraphMapping(t, r, a, c) {
    let i = typeof t == "string" ? t : t?.text;
    this.blockMapping(i ?? "", "subgraph", a, c);
  }
  addConnectorMapping(t, r, a, c) {
    this.blockMapping(t?.text?.trim() ?? "", "connector", a, c);
  }
  emit(t, r, a, c) {
    let i = c?.nodeId ?? c?.edgeId, l = { id: t, severity: r, message: a };
    c?.nodeId ? l.nodeId = c.nodeId : c?.edgeId && (l.edgeId = c.edgeId);
    let h = i ? this.firstMapping.get(i) : void 0;
    h && (l.position = h.position);
    let y = i ?? "", e = this.reported.get(y);
    if (e === void 0) this.reported.set(y, [l]);
    else {
      for (let S of e) if (S.id === t && S.severity === r && S.message === a && S.nodeId === l.nodeId && S.edgeId === l.edgeId) return;
      e.push(l);
    }
    this.diagnostics.push(l), this.options.log?.(r, `agentflow[${t}]: ${a}`);
  }
  emitWarning(t, r, a) {
    this.emit(t, "warning", r, a);
  }
  emitError(t, r, a) {
    this.emit(t, "error", r, a);
  }
}, rt = ["$end", "INVALID", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "SHAPE_DATA", "CALLBACKNAME", "CALLBACKARGS", "MD_STR", "STR", "STYLE", "DEFAULT", "LINKSTYLE", "INTERPOLATE", "CLASSDEF", "CLASS", "HREF", "CLICK", "GRAPH", "flow", "connector", "global", "end", "LINK_TARGET", "NODIR", "DIR", "direction_tb", "direction_bt", "direction_rl", "direction_lr", "direction_td", "LINK_ID", "NUM", "BRKT", "STYLE_SEPARATOR", "COLON", "AMP", "SEMI", "COMMA", "MULT", "LINK", "START_LINK", "EDGE_TEXT", "-)", "TEXT", "(-", "STADIUMEND", "STADIUMSTART", "SUBROUTINEEND", "SUBROUTINESTART", "VERTEX_WITH_PROPS_START", "TAGEND", "CYLINDEREND", "CYLINDERSTART", "DOUBLECIRCLEEND", "DOUBLECIRCLESTART", "TRAPEND", "INVTRAPEND", "TRAPSTART", "INVTRAPSTART", "TAGSTART", "UP", "SEP", "DOWN", "COMMENT", "NODE_STRING", "MINUS", "UNICODE_TEXT", "PIPE", "PE", "PS", "SQE", "SQS", "DIAMOND_STOP", "DIAMOND_START", "NEWLINE", "SPACE", "EOF"], nt = new Uint8Array(128);
for (let t of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'*+.`?\\_/") nt[t.charCodeAt(0)] = 1;
var Jt = /accTitle\s*:\s*/y, Zt = /accDescr\s*:\s*/y, Qt = /accDescr\s*\{\s*/y, er = /call\s+/y, tr = /click\s+/y, rr = /(?:\r?\n)*\s*\n/y, sr = /\s*(?:LR|RL|TB|BT|TD|BR)\b/y, ir = /\s*[<>^]/y, ar = /\s*v\b/y, lr = [/.*direction\s+TB[^\n]*/y, /.*direction\s+BT[^\n]*/y, /.*direction\s+RL[^\n]*/y, /.*direction\s+LR[^\n]*/y, /.*direction\s+TD[^\n]*/y], Ie = /[\n\r\u2028\u2029]/g, or = /\(\s*\)/y, nr = /\n\s*/g;
function dr(t) {
  let r = t.length, a = [], c = [], i = [], l = [], h = [], y = 0, e = 0, S = 1, A = 0, I = !0, L = t.indexOf("direction"), x = t.indexOf("@"), m = -1, _ = 0, O = 0, p = -1, b = -1, v = -1, E = -1, G = -1, Z = -1, te = -1, B = (n) => {
    let u = -1;
    for (let s = e; s < n; s++) {
      let o = t.charCodeAt(s);
      o === 10 ? (S++, u = s) : o === 13 && (s + 1 < n && t.charCodeAt(s + 1) === 10 && s++, S++, u = s);
    }
    if (u < 0) A += n - e;
    else {
      let s = u + 1;
      for (; s < n; ) {
        let o = t.charCodeAt(s);
        if (o === 8232 || o === 8233) break;
        s++;
      }
      A = s - u - 1;
    }
    e = n;
  }, M = (n, u) => {
    a.push(n), c.push(t.slice(e, u)), i.push(e), l.push(S, A), B(u), l.push(S, A);
  }, k = (n, u) => {
    a.push(n), c.push(t.slice(e, u)), i.push(e), l.push(S, A), A += u - e, e = u, l.push(S, A);
  }, se = (n, u) => {
    a.push(n), c.push(t.slice(e, u)), i.push(e), l.push(S, A);
    for (let s = e; s < u; s++) {
      let o = t.charCodeAt(s);
      o === 10 || o === 13 ? (S++, A = 0) : A++;
    }
    e = u, l.push(S, A);
  }, ne = (n, u, s) => {
    a.push(n), c.push(u), i.push(e), l.push(S, A), B(s), l.push(S, A);
  }, N = (n) => {
    h.push(y), y = n;
  }, R = () => {
    h.length > 0 && (y = h.pop());
  }, X = (n, u) => (n.lastIndex = u, n.test(t) ? n.lastIndex : -1), F = (n) => t.startsWith(n, e) && !We(t.charCodeAt(e + n.length)), Q = (n) => {
    if (n >= b && n <= v) return v;
    let u = n;
    for (; u < r && le(t.charCodeAt(u)); ) u++;
    return b = n, v = u, u;
  }, oe = (n) => {
    if (n >= E && n <= G) return G;
    let u = n;
    for (; u < r; ) {
      let s = t.charCodeAt(u);
      if (s !== 32 && s !== 9) break;
      u++;
    }
    return E = n, G = u, u;
  }, ie = (n) => {
    let u = Q(n);
    if (u === te || t.charCodeAt(u) !== 45 || t.charCodeAt(u + 1) !== 45) return -1;
    let s = u + 2;
    for (; t.charCodeAt(s) === 45; ) s++;
    let o = t.charCodeAt(s);
    return o === 120 || o === 62 ? Q(s + 1) : (te = u, -1);
  }, de = () => {
    let n = Q(e);
    if (n === Z || t.charCodeAt(n) !== 45) return !1;
    let u = t.charCodeAt(n + 1), s = n + 2;
    if (u === 45) {
      for (; t.charCodeAt(s) === 45; ) s++;
      let o = t.charCodeAt(s);
      return o === 120 || o === 62 ? M(42, Q(s + 1)) : (N(10), M(43, Q(n + 2))), !0;
    }
    if (u === 46) {
      for (; t.charCodeAt(s) === 46; ) s++;
      if (t.charCodeAt(s) === 45) return M(42, Q(s + 1)), !0;
    }
    return Z = n, !1;
  }, re = (n) => {
    if (t.charCodeAt(n) !== 37 || t.charCodeAt(n + 1) !== 37 || t.charCodeAt(n + 2) === 123) return -1;
    let u = t.indexOf(`
`, n + 2);
    return u === -1 ? r : u;
  }, f = () => {
    t.charCodeAt(e + 1) === 96 ? (N(2), B(e + 2)) : (N(1), B(e + 1));
  }, d = (n) => {
    let u = t.charCodeAt(e + 1);
    return n === 40 ? (u === 45 ? (N(8), k(47, e + 2)) : u === 91 ? (N(7), k(49, e + 2)) : u === 40 && t.charCodeAt(e + 2) === 40 ? (N(7), k(57, e + 3)) : (N(7), k(72, e + 1)), !0) : n === 91 ? (u === 91 ? (N(7), k(51, e + 2)) : u === 40 ? (N(7), k(55, e + 2)) : u === 47 ? (N(9), k(60, e + 2)) : u === 92 ? (N(9), k(61, e + 2)) : (N(7), k(74, e + 1)), !0) : n === 124 ? (N(7), k(70, e + 1), !0) : n === 123 ? (N(7), k(76, e + 1), !0) : !1;
  }, w = () => {
    let n = e;
    for (; n < r; ) {
      let u = t.charCodeAt(n);
      if (u < 128 && nt[u] === 1) n++;
      else if (u === 45 && n + 1 < r) {
        let s = t.charCodeAt(n + 1);
        if (s === 62 || s === 45 || s === 46) break;
        n++;
      } else break;
    }
    return n === e ? !1 : (k(67, n), !0);
  }, T = (n) => {
    let u = n;
    for (; u < r; ) {
      let s = t.charCodeAt(u);
      if (s !== 32 && s !== 9) break;
      u++;
    }
    return u;
  }, $ = (n) => {
    let u;
    switch (n) {
      case 97:
        if (t.startsWith("acc", e)) {
          if ((u = X(Jt, e)) >= 0) return N(3), M(2, u), !0;
          if ((u = X(Zt, e)) >= 0) return N(4), M(4, u), !0;
          if ((u = X(Qt, e)) >= 0) return N(5), B(u), !0;
        }
        if (F("agentflow-beta")) return I && (I = !1, N(6)), k(20, e + 14), !0;
        break;
      case 64:
        if (t.charCodeAt(e + 1) === 123) return N(14), ne(7, "", e + 2), !0;
        break;
      case 99:
        if ((u = X(er, e)) >= 0) return N(12), B(u), !0;
        if (F("classDef")) return k(16, e + 8), !0;
        if (F("class")) return k(17, e + 5), !0;
        if ((u = X(tr, e)) >= 0) return N(11), B(u), !0;
        if (F("connector")) return k(22, e + 9), !0;
        break;
      case 34:
        return f(), !0;
      case 115:
        if (F("style")) return k(12, e + 5), !0;
        break;
      case 100:
        if (F("default")) return k(13, e + 7), !0;
        break;
      case 108:
        if (F("linkStyle")) return k(14, e + 9), !0;
        break;
      case 105:
        if (F("interpolate")) return k(15, e + 11), !0;
        break;
      case 104:
        if (t.startsWith("href", e) && le(t.charCodeAt(e + 4))) return M(18, e + 5), !0;
        break;
      case 102:
        if (F("flow")) return k(21, e + 4), !0;
        break;
      case 103:
        if (F("global")) return k(23, T(e + 6)), !0;
        break;
      case 101:
        if (F("end")) return k(24, T(e + 3)), !0;
        break;
      case 95:
        if (F("_self")) return k(25, e + 5), !0;
        if (F("_blank")) return k(25, e + 6), !0;
        if (F("_parent")) return k(25, e + 7), !0;
        if (F("_top")) return k(25, e + 4), !0;
        break;
    }
    if (L !== -1 && e >= _ && (L < e && (L = t.indexOf("direction", e)), L !== -1 && (m < e && (Ie.lastIndex = e, m = Ie.test(t) ? Ie.lastIndex - 1 : r), L < m))) {
      for (let s = 0; s < 5; s++) if ((u = X(lr[s], e)) >= 0) return M(28 + s, u), !0;
      _ = m;
    }
    if (x !== -1 && n !== 34 && !le(n)) {
      if (e >= O) {
        x < e && (x = t.indexOf("@", e));
        let s = e;
        for (; s < r; ) {
          let o = t.charCodeAt(s);
          if (o === 34 || le(o)) break;
          s++;
        }
        if (O = s, p = -1, x !== -1 && x < s) for (let o = Math.min(s, r - 1) - 1; o >= x; o--) {
          if (t.charCodeAt(o) !== 64) continue;
          let g = t.charCodeAt(o + 1);
          if (g !== 123 && g !== 34) {
            p = o;
            break;
          }
        }
      }
      if (p > e) return k(33, p + 1), !0;
    }
    if (n >= 48 && n <= 57) {
      let s = e + 1;
      for (; s < r; ) {
        let o = t.charCodeAt(s);
        if (o < 48 || o > 57) break;
        s++;
      }
      return k(34, s), !0;
    }
    switch (n) {
      case 35:
        return k(35, e + 1), !0;
      case 58:
        return t.charCodeAt(e + 1) === 58 && t.charCodeAt(e + 2) === 58 ? k(36, e + 3) : k(37, e + 1), !0;
      case 38:
        return k(38, e + 1), !0;
      case 59:
        return k(39, e + 1), !0;
      case 44:
        return k(40, e + 1), !0;
      case 42:
        return k(41, e + 1), !0;
      case 60:
        return k(62, e + 1), !0;
      case 45:
        return de() || w() || k(68, e + 1), !0;
      case 40:
        return d(n);
      case 91:
        return t.charCodeAt(e + 1) === 124 ? (k(52, e + 2), !0) : d(n);
      case 124:
      case 123:
        return d(n);
      case 62:
        return N(7), k(53, e + 1), !0;
      case 94:
        return k(63, e + 1), !0;
      case 92:
        return t.charCodeAt(e + 1) === 124 ? (k(64, e + 2), !0) : w();
      case 118:
        return We(t.charCodeAt(e + 1)) ? w() : (k(65, e + 1), !0);
      case 37:
        return (u = re(e)) >= 0 ? (M(66, u), !0) : w();
    }
    if (le(n)) {
      if (de()) return !0;
      if ((n === 32 || n === 9) && (u = re(oe(e))) >= 0) return M(66, u), !0;
      for (u = e; ; ) {
        let s = t.charCodeAt(u);
        if (s === 10) u++;
        else if (s === 13 && t.charCodeAt(u + 1) === 10) u += 2;
        else break;
      }
      return u > e ? M(77, u) : M(78, e + 1), !0;
    }
    return n < 128 ? w() : mt(n) ? (k(69, e + 1), !0) : !1;
  };
  e: for (; ; ) {
    if (e >= r) {
      let s = -1;
      switch (y) {
        case 0:
          s = 79;
          break;
        case 3:
          s = 3;
          break;
        case 4:
          s = 5;
          break;
        case 5:
          s = 6;
          break;
        case 11:
          s = 19;
          break;
        case 12:
          s = 8;
          break;
        case 13:
          s = 9;
          break;
      }
      s !== -1 && k(s, r);
      break;
    }
    let n = t.charCodeAt(e), u = !0;
    switch (y) {
      case 0:
        u = $(n);
        break;
      case 1:
        if (n === 34) t.charCodeAt(e + 1) === 96 ? (N(2), B(e + 2)) : (R(), B(e + 1));
        else {
          let s = t.indexOf('"', e);
          M(11, s === -1 ? r : s);
        }
        break;
      case 2:
        if (n === 96) t.charCodeAt(e + 1) === 34 ? (R(), B(e + 2)) : u = !1;
        else if (n === 34) f();
        else {
          let s = e + 1;
          for (; s < r; ) {
            let o = t.charCodeAt(s);
            if (o === 96 || o === 34) break;
            s++;
          }
          M(10, s);
        }
        break;
      case 3:
      case 4: {
        let s = t.indexOf(`
`, e);
        s === -1 && (s = r);
        let o = y === 3 ? 3 : 5;
        R(), M(o, s);
        break;
      }
      case 5:
        if (n === 125) R(), B(e + 1);
        else {
          let s = t.indexOf("}", e);
          s === -1 && (s = r), M(6, s);
        }
        break;
      case 6: {
        let s;
        n === 34 ? f() : (s = X(rr, e)) >= 0 ? (R(), M(26, s)) : (s = X(sr, e)) >= 0 || (s = X(ir, e)) >= 0 || (s = X(ar, e)) >= 0 ? (R(), M(27, s)) : u = d(n);
        break;
      }
      case 7: {
        let s = t.charCodeAt(e + 1);
        switch (n) {
          case 34:
            f();
            break;
          case 40:
          case 91:
          case 123:
            d(n);
            break;
          case 93:
            R(), s === 41 ? k(48, e + 2) : s === 93 ? k(50, e + 2) : k(73, e + 1);
            break;
          case 41:
            R(), s === 93 ? k(54, e + 2) : s === 41 && t.charCodeAt(e + 2) === 41 ? k(56, e + 3) : k(71, e + 1);
            break;
          case 124:
            R(), k(70, e + 1);
            break;
          case 125:
            R(), k(75, e + 1);
            break;
          case 37: {
            let o = re(e);
            o >= 0 ? B(o) : u = !1;
            break;
          }
          default: {
            let o = e + 1;
            for (; o < r; ) {
              let g = t.charCodeAt(o);
              if (g === 91 || g === 93 || g === 40 || g === 41 || g === 123 || g === 125 || g === 124 || g === 34 || g === 37) break;
              o++;
            }
            M(46, o);
          }
        }
        break;
      }
      case 8: {
        let s = t.charCodeAt(e + 1), o;
        if (n === 34) f();
        else if (n === 37 && (o = re(e)) >= 0) B(o);
        else if ((n === 45 || n === 47 || n === 41) && s === 41) R(), k(45, e + 2);
        else if (n === 40 || n === 91 || n === 123) d(n);
        else if (n === 41 || n === 93 || n === 125) u = !1;
        else {
          let g = e + 1;
          for (; g < r; ) {
            let C = t.charCodeAt(g);
            if (C === 34 || C === 40 || C === 41 || C === 91 || C === 93 || C === 123 || C === 125 || (C === 45 || C === 47) && t.charCodeAt(g + 1) === 41 || C === 37 && t.charCodeAt(g + 1) === 37 && t.charCodeAt(g + 2) !== 123) break;
            g++;
          }
          se(46, g);
        }
        break;
      }
      case 9: {
        let s = t.charCodeAt(e + 1);
        if (n === 34) {
          f();
          break;
        }
        switch (n) {
          case 40:
            s === 45 || s === 91 || s === 40 && t.charCodeAt(e + 2) === 40 ? d(n) : s === 93 ? (R(), k(58, e + 2)) : d(n);
            break;
          case 91:
          case 123:
            d(n);
            break;
          case 92:
            s === 93 ? (R(), k(58, e + 2)) : k(46, e + 1);
            break;
          case 47:
            s === 93 ? (R(), k(59, e + 2)) : k(46, e + 1);
            break;
          case 93:
          case 41:
            s === 93 ? (R(), k(58, e + 2)) : u = !1;
            break;
          case 125:
            u = !1;
            break;
          case 37: {
            let o = re(e);
            o >= 0 ? B(o) : u = !1;
            break;
          }
          default: {
            if ((n === 63 || n === 61) && s === 93) {
              R(), k(58, e + 2);
              break;
            }
            let o = e + 1;
            for (; o < r; ) {
              let g = t.charCodeAt(o);
              if (g === 92 || g === 91 || g === 93 || g === 40 || g === 41 || g === 123 || g === 125 || g === 47 || g === 37) break;
              o++;
            }
            M(46, o);
          }
        }
        break;
      }
      case 10: {
        if (n === 34) {
          f();
          break;
        }
        let s = ie(e);
        if (s >= 0) {
          R(), M(42, s);
          break;
        }
        if (n === 45 && t.charCodeAt(e + 1) === 45) {
          u = !1;
          break;
        }
        let o = e + 1;
        for (; o < r; ) {
          let g = t.charCodeAt(o);
          if (g === 34) break;
          if (g === 45) {
            if (t.charCodeAt(o + 1) === 45) break;
          } else if (le(g) && ie(o) >= 0) break;
          o++;
        }
        se(44, o);
        break;
      }
      case 11:
        if (n === 34) f();
        else if (le(n)) R(), B(e + 1);
        else {
          let s = e + 1;
          for (; s < r && !le(t.charCodeAt(s)); ) s++;
          k(19, s);
        }
        break;
      case 12:
        if (n === 40) {
          let s = X(or, e);
          R(), s >= 0 ? B(s) : (N(13), B(e + 1));
        } else {
          let s = t.indexOf("(", e);
          s === -1 && (s = r), M(8, s);
        }
        break;
      case 13:
        if (n === 41) R(), B(e + 1);
        else {
          let s = t.indexOf(")", e);
          s === -1 && (s = r), M(9, s);
        }
        break;
      case 14:
        if (n === 34) N(15), k(7, e + 1);
        else if (n === 125) R(), B(e + 1);
        else if (n === 94) u = !1;
        else {
          let s = e + 1;
          for (; s < r; ) {
            let o = t.charCodeAt(s);
            if (o === 125 || o === 94 || o === 34) break;
            s++;
          }
          M(7, s);
        }
        break;
      case 15:
        if (n === 34) R(), k(7, e + 1);
        else {
          let s = t.indexOf('"', e);
          s === -1 && (s = r), ne(7, t.slice(e, s).replace(nr, "<br/>"), s);
        }
        break;
    }
    if (!u) return a.push(1), c.push(""), i.push(e), l.push(S, A, S, A), { types: a, texts: c, starts: i, locs: l };
    continue e;
  }
  return a.push(0), c.push(""), i.push(r), l.push(S, A, S, A), { types: a, texts: c, starts: i, locs: l };
}
var ve = new Uint8Array(80);
for (let t of [34, 67, 65, 68, 13, 40, 37, 38, 35, 41, 69]) ve[t] = 1;
var Ue = new Uint8Array(80);
for (let t of [34, 69, 67, 27, 65, 68, 40, 37, 38, 35, 41]) Ue[t] = 1;
var Be = new Uint8Array(80);
for (let t of [34, 67, 78, 68, 38, 69, 37, 41, 35, 12, 14, 16, 17, 19, 20, 27, 21, 22, 23, 24, 65, 63, 43]) Be[t] = 1;
var Pe = new Uint8Array(80);
for (let t of [34, 67, 37, 78, 35, 12]) Pe[t] = 1;
var Te = new Uint8Array(80);
for (let t of [77, 39, 79, 66]) Te[t] = 1;
var st = "'UNICODE_TEXT', 'TEXT', 'TAGSTART'", Me = "'COMMENT', 'SEMI', 'NEWLINE', 'EOF'", pe = [], cr = /}[^\S\n]*\n/g;
function fr(t, r, a = !1) {
  let c = !a && t.includes("}") ? t.replace(cr, `}
`) : t, { types: i, texts: l, starts: h, locs: y } = dr(c), e = 0, S, A = 0, I = 0, L = (f) => {
    let d = i[e];
    throw d === 1 ? Xe("agentflow", c, h[e], "", !0) : Xe("agentflow", c, h[e], `Expecting ${f}, got '${rt[d]}'`);
  }, x = (f, d) => ({ first_line: y[4 * f], first_column: y[4 * f + 1], last_line: y[4 * d + 2], last_column: y[4 * d + 3] }), m = (f, d = "") => (i[e] !== f && L(`'${rt[f]}'${d ? ", " + d : ""}`), l[e++]), _ = () => {
    Te[i[e]] === 0 && L(Me), e++;
  }, O = () => {
    ve[i[e]] === 0 && L("'NODE_STRING'");
    let f = l[e++];
    for (; ve[i[e]] === 1; ) f += l[e++];
    return f;
  }, p = () => {
    Ue[i[e]] === 0 && L("'NODE_STRING'");
    let f = l[e++];
    for (; Ue[i[e]] === 1; ) f += l[e++];
    return f;
  }, b = () => {
    let f = i[e], d;
    if (f === 11) d = "string";
    else if (f === 10) d = "markdown";
    else if (f === 46 || f === 62 || f === 53 || f === 69) d = "text";
    else return L(`${st}, 'TAGEND', 'STR', 'MD_STR'`);
    let w = l[e++];
    for (; ; ) {
      let T = i[e];
      if (T !== 46 && T !== 62 && T !== 53 && T !== 69) break;
      w += l[e++];
    }
    return { text: w, type: d };
  }, v = (f) => {
    m(f, st);
  }, E = () => {
    let f = i[e], d;
    if (f === 11) d = "string";
    else if (f === 10) d = "markdown";
    else if (f === 44 || f === 69) d = "text";
    else return L("'EDGE_TEXT', 'STR', 'MD_STR'");
    let w = l[e++];
    for (; i[e] === 44 || i[e] === 69; ) w += l[e++];
    return { text: w, type: d };
  }, G = () => {
    let f = i[e], d;
    if (f === 11) d = "text";
    else if (f === 10) d = "markdown";
    else if (Be[f] === 1) d = "text";
    else return L("'NODE_STRING', 'STR', 'MD_STR'");
    let w = l[e++];
    for (; Be[i[e]] === 1; ) w += l[e++];
    return { text: w, type: d };
  }, Z = () => {
    A = e;
    let f = l[e++];
    for (; i[e] === 7; ) f += l[e++];
    return I = e - 1, f;
  }, te = (f, d, w, T) => {
    let $ = x(w, T);
    r.addVertex(f, void 0, void 0, void 0, void 0, void 0, void 0, d, $), r.extendVertexMapping(f, $);
  }, B = (f, d) => {
    d.data !== void 0 && r.addVertex(f, void 0, void 0, void 0, void 0, void 0, void 0, d.data, x(d.dataFrom, d.dataTo));
  }, M = () => {
    let f = e, d = O(), w, T, $;
    switch (i[e]) {
      case 74:
        e++, w = b(), v(73), T = "square";
        break;
      case 57:
        e++, w = b(), v(56), T = "doublecircle";
        break;
      case 72:
        e++, i[e] === 72 ? (e++, w = b(), v(71), m(71), T = "circle") : (w = b(), v(71), T = "round");
        break;
      case 47:
        e++, w = b(), v(45), T = "ellipse";
        break;
      case 49:
        e++, w = b(), v(48), T = "stadium";
        break;
      case 51:
        e++, w = b(), v(50), T = "subroutine";
        break;
      case 52: {
        e++;
        let n = m(67);
        m(37);
        let u = m(67);
        m(70), w = b(), v(73), T = "rect", $ = { [n]: u };
        break;
      }
      case 55:
        e++, w = b(), v(54), T = "cylinder";
        break;
      case 76:
        e++, i[e] === 76 ? (e++, w = b(), v(75), m(75), T = "hexagon") : (w = b(), v(75), T = "diamond");
        break;
      case 53:
        e++, w = b(), v(73), T = "odd";
        break;
      case 60:
        e++, w = b(), i[e] === 59 ? (e++, T = "lean_right") : (v(58), T = "trapezoid");
        break;
      case 61:
        e++, w = b(), i[e] === 58 ? (e++, T = "lean_left") : (v(59), T = "inv_trapezoid");
        break;
    }
    return $ !== void 0 ? r.addVertex(d, w, T, void 0, void 0, void 0, $) : T !== void 0 ? r.addVertex(d, w, T) : r.addVertex(d), r.addVertexMapping(d, w, T, x(f, e - 1)), d;
  }, k = () => {
    let f = M();
    return i[e] === 36 && (e++, r.setClass(f, O())), f;
  }, se = () => {
    let f = [k()];
    for (S = void 0; ; ) {
      let d = i[e] === 7 ? Z() : void 0, w = A, T = I;
      if (i[e] !== 78) return S = d, f;
      do
        e++;
      while (i[e] === 78);
      if (i[e] !== 38) return d !== void 0 && L("'AMP'"), f;
      e++, i[e] !== 78 && L("'SPACE'");
      do
        e++;
      while (i[e] === 78);
      let $ = k();
      d !== void 0 && te(f[f.length - 1], d, w, T), f.push($);
    }
  }, ne = () => {
    let f;
    if (i[e] === 33 && (f = l[e++]), i[e] === 42) {
      let d = r.destructLink(l[e++]);
      return f !== void 0 && (d.id = f), i[e] === 70 && (e++, d.text = b(), v(70), i[e] === 78 && e++), d;
    }
    if (i[e] === 43) {
      let d = l[e++], w = E(), T = m(42, "'EDGE_TEXT'"), $ = r.destructLink(T, d);
      return $.text = w, f !== void 0 && ($.id = f), $;
    }
    return L("'LINK', 'START_LINK'");
  }, N = () => {
    let f = e, d = se();
    S !== void 0 && te(d[d.length - 1], S, A, I);
    let w = d;
    for (; ; ) {
      let T = i[e];
      if (T !== 42 && T !== 43 && T !== 33) return w;
      let $ = ne(), n = se();
      S !== void 0 && te(n[n.length - 1], S, A, I), r.addLink(d, n, $), r.addEdgeMapping(d, n, $, x(f, e - 1)), w = n.concat(w), d = n;
    }
  }, R = () => {
    Pe[i[e]] === 0 && L("'NODE_STRING', 'NUM', 'COLON', 'BRKT'");
    let f = l[e++];
    for (; Pe[i[e]] === 1; ) f += l[e++];
    return f;
  }, X = () => {
    let f = [R()];
    for (; i[e] === 40; ) e++, f.push(R());
    return f;
  }, F = () => {
    e++, m(78);
    let f;
    if (i[e] === 13) f = [l[e++]];
    else for (f = [m(34, "'DEFAULT'")]; i[e] === 40; ) e++, f.push(m(34));
    if (m(78), i[e] !== 15) {
      r.updateLink(f, X());
      return;
    }
    e++, m(78);
    let d = p();
    if (i[e] === 78) {
      e++;
      let w = X();
      r.updateLinkInterpolate(f, d), r.updateLink(f, w);
    } else r.updateLinkInterpolate(f, d);
  }, Q = (f, d) => {
    if (i[e] !== 78) {
      r.setLink(f, d);
      return;
    }
    if (e++, i[e] === 25) {
      r.setLink(f, d, l[e++]);
      return;
    }
    let w = m(11, "'LINK_TARGET'");
    i[e] === 78 ? (e++, r.setLink(f, d, m(25))) : r.setLink(f, d), r.setTooltip(f, w);
  }, oe = () => {
    let f = l[e++];
    switch (i[e]) {
      case 8: {
        let d = l[e++], w = i[e] === 9, T = w ? l[e++] : void 0, $;
        i[e] === 78 && (e++, $ = m(11)), w ? r.setClickEvent(f, d, T) : r.setClickEvent(f, d), $ !== void 0 && r.setTooltip(f, $);
        return;
      }
      case 18:
        e++, Q(f, m(11));
        return;
      case 11:
        Q(f, l[e++]);
        return;
      default: {
        let d = p();
        if (i[e] === 78) {
          e++;
          let w = m(11);
          r.setClickEvent(f, d), r.setTooltip(f, w);
        } else r.setClickEvent(f, d);
      }
    }
  }, ie = (f) => {
    m(78, Me);
    let d = G(), w = { text: "", type: "text" };
    i[e] === 74 && (e++, w = b(), v(73));
    let T = i[e] === 7 ? Z() : void 0;
    return Te[i[e]] === 0 && L(`${Me}, 'SHAPE_DATA'`), { global: !1, at: f, id: d, title: w, data: T, dataFrom: A, dataTo: I, list: [], collect: !1 };
  }, de = () => {
    let f = i[e];
    switch (f) {
      case 12: {
        e++, m(78);
        let d = O();
        return m(78), r.addVertex(d, void 0, void 0, X()), _(), pe;
      }
      case 14:
        return F(), _(), pe;
      case 16: {
        e++, m(78);
        let d = O();
        return m(78), r.addClass(d, X()), _(), pe;
      }
      case 17: {
        e++, m(78);
        let d = O();
        return m(78), r.setClass(d, O()), _(), pe;
      }
      case 19:
        return oe(), _(), pe;
      case 22: {
        let d = ie(e++), w = e++, T = r.addConnector(d.id, d.title);
        return B(T, d), r.addConnectorMapping(d.id, d.title, x(d.at, d.at), x(w, w)), T;
      }
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
        return e++, { stmt: "dir", value: ur[f - 28] };
      case 2: {
        e++;
        let d = m(3).trim();
        return r.setAccTitle(d), d;
      }
      case 4: {
        e++;
        let d = m(5).trim();
        return r.setAccDescription(d), d;
      }
      case 6: {
        let d = l[e++].trim();
        return r.setAccDescription(d), d;
      }
      default: {
        ve[f] === 0 && L(it);
        let d = N();
        return _(), d;
      }
    }
  }, re = () => {
    let f = [], d = [], w = !1;
    for (; ; ) {
      let T = i[e];
      if (T === 0) break;
      if (T === 24) {
        let $ = f.pop();
        if ($ === void 0) break;
        let n = e++;
        if ($.global) {
          r.addGlobal(d), d = $.list, w = $.collect;
          continue;
        }
        let u = r.addSubGraph($.id, d, $.title, "flow");
        B(u, $), r.addSubgraphMapping($.id, $.title, x($.at, $.at), x(n, n)), d = $.list, w = $.collect, w && d.push(u);
      } else if (T === 39 || T === 77 || T === 78 || T === 79) w && d.push(l[e]), e++;
      else if (T === 66) e++;
      else if (T === 21 || T === 23) {
        let $ = e++, n;
        T === 23 || Te[i[e]] === 1 ? (n = { global: T === 23, at: $, id: void 0, title: void 0, data: void 0, dataFrom: 0, dataTo: 0, list: d, collect: w }, _()) : (n = ie($), n.list = d, n.collect = w, e++), f.push(n), d = [], w = !0;
      } else {
        let $ = de();
        w && (!Array.isArray($) || $.length > 0) && d.push($);
      }
    }
    f.length > 0 && L("'end'");
  };
  for (; i[e] === 78 || i[e] === 77 || i[e] === 66; ) e++;
  if (m(20, "'SPACE', 'NEWLINE', 'COMMENT'"), i[e] === 26) e++, r.setDirection("TB");
  else {
    let f = m(27, "'NODIR'"), d = i[e];
    if (d === 78) {
      do
        e++;
      while (i[e] === 78);
      d = i[e], d !== 77 && L("'NEWLINE', 'SPACE'");
    } else d !== 39 && d !== 77 && d !== 66 && L("'COMMENT', 'SEMI', 'NEWLINE', 'SPACE'");
    e++, r.setDirection(f);
  }
  re(), i[e] !== 0 && L(it);
}
var ur = ["TB", "BT", "RL", "LR", "TD"], it = "'COMMENT', 'SEMI', 'NEWLINE', 'SPACE', 'EOF', 'flow', 'global', 'connector', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'STYLE', 'LINKSTYLE', 'CLASSDEF', 'CLASS', 'CLICK', 'NODE_STRING'", fe = /* @__PURE__ */ new Map([["tool", 0], ["task", 1], ["decision", 2], ["input", 3], ["refdoc", 4], ["connector", 5], ["action", 6]]), dt = fe.size, hr = (t) => Math.max(1, t - dt), pr = (t, r) => {
  let a = dt + t % hr(r);
  return r > 0 ? a % r : a;
};
function gr(t, r, a, c) {
  let i = a.size;
  for (let l of t) {
    if (l.isGroup || l.shape === "collapsedGroup") {
      l.colorIndex = pr(a.get(l.id) ?? i++, c);
      continue;
    }
    let h = r(l.id);
    h && fe.has(h) && (l.kind = h);
  }
}
function br(t, r, a) {
  let c = [], i = [], l = t.subgraphs, h = (p) => {
    let b = [];
    for (let v of p) {
      let E = t.classes.get(v);
      E?.styles && (b = [...b, ...E.styles].map((G) => G.trim())), E?.textStyles && (b = [...b, ...E.textStyles].map((G) => G.trim()));
    }
    return b;
  }, y = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set();
  for (let p of l) {
    if (p.metadata?.view !== "collapsed" || y.has(p.id)) continue;
    let b = [p.id];
    for (; b.length > 0; ) {
      let v = t.subgraph(b.pop())?.nodes;
      if (v !== void 0) for (let E of v) E === p.id || y.has(E) || (y.add(E), e.set(E, p.id), S.has(E) || b.push(E));
    }
    S.add(p.id);
  }
  let A = /* @__PURE__ */ new Map();
  for (let p of y) {
    let b = [p], v = e.get(p);
    for (; ; ) {
      let E = A.get(v), G = E ?? e.get(v);
      if (G === void 0 || (E === void 0 && b.push(v), v = G, E !== void 0)) break;
    }
    for (let E of b) A.set(E, v);
  }
  let I = /* @__PURE__ */ new Map();
  l.forEach((p, b) => I.set(p.id, b));
  let L = /* @__PURE__ */ new Map(), x = (p, b, v) => {
    let E = I.get(p);
    if (E === void 0 || E < v) return !1;
    let G = b;
    for (let Z = 0; G !== void 0 && Z <= l.length; Z++) {
      if (G === p) return !0;
      G = L.get(G);
    }
    return !1;
  };
  for (let p = l.length - 1; p >= 0; p--) {
    let b = l[p];
    if (!y.has(b.id)) for (let v of b.nodes) {
      if (x(v, b.id, p)) {
        t.emitWarning("CONTAINMENT_VIOLATION", `Container "${b.id}" cannot contain "${v}" because "${v}" already contains it. The nesting that would close the loop is dropped.`, { nodeId: v });
        continue;
      }
      L.set(v, b.id);
    }
  }
  let m = /* @__PURE__ */ new Map();
  for (let p = l.length - 1; p >= 0; p--) {
    let b = l[p];
    if (y.has(b.id)) continue;
    let v = b.metadata?.view === "collapsed", E = { id: b.id, label: b.title, labelType: b.labelType, parentId: L.get(b.id), cssStyles: [], cssCompiledStyles: h(b.classes), cssClasses: b.classes.join(" "), shape: v ? "collapsedGroup" : "flowGroup", dir: b.dir, isGroup: !v, metadata: v ? { ...b.metadata, containerType: b.type } : b.metadata };
    c.push(E), m.set(b.id, E);
  }
  for (let p of t.nodes.values()) {
    if (y.has(p.id)) continue;
    let b = m.get(p.id);
    if (b) {
      b.cssStyles = p.styles, b.cssCompiledStyles = h(p.classes), b.cssClasses = p.classes.join(" ");
      continue;
    }
    let v = Ae(p.type), E = { id: p.id, label: p.text, labelType: p.labelType, parentId: L.get(p.id), cssStyles: p.styles, cssCompiledStyles: h(["default", "node", ...p.classes]), cssClasses: "default " + p.classes.join(" "), dir: p.dir, link: p.link, linkTarget: p.linkTarget, tooltip: t.tooltips.get(p.id), metadata: p.metadata, isGroup: !1, shape: v === "square" || v === void 0 ? "squareRect" : v };
    c.push(E), m.set(p.id, E);
  }
  t.edges.forEach((p, b) => {
    let v = A.get(p.start) ?? p.start, E = A.get(p.end) ?? p.end;
    if (v === E && p.start !== p.end) return;
    let G = [...t.defaultEdgeStyle ?? []];
    p.style && G.push(...p.style);
    let Z = p.type === "arrow_open" ? "none" : p.type === "arrow_cross" || p.type === "arrow_point" ? p.type : "arrow_point";
    i.push({ id: p.id || `L_${v}_${E}_${b}`, isUserDefinedId: p.isUserDefinedId, start: v, end: E, type: p.type ?? "normal", label: p.text, labelType: p.labelType, thickness: p.stroke, pattern: p.stroke, minlen: p.length, classes: "edge-thickness-normal edge-pattern-solid flowchart-link", arrowTypeStart: "none", arrowTypeEnd: Z, cssCompiledStyles: h(p.classes), style: G, animate: p.animate, animation: p.animation, curve: p.interpolate || t.defaultInterpolate || a, metadata: p.metadata });
  }), Pt(c, t);
  let _ = /* @__PURE__ */ new Map();
  for (let p of l) {
    let b = L.get(p.id);
    if (b === void 0) continue;
    let v = _.get(b);
    v ? v.push(p.id) : _.set(b, [p.id]);
  }
  let O = /* @__PURE__ */ new Map();
  for (let p of l) {
    if (L.get(p.id) !== void 0) continue;
    let b = [p.id];
    for (; b.length > 0; ) {
      let v = b.pop();
      if (O.has(v)) continue;
      O.set(v, O.size);
      let E = _.get(v);
      if (E) for (let G = E.length - 1; G >= 0; G--) b.push(E[G]);
    }
  }
  return gr(c, (p) => {
    if (t.connectors.has(p)) return "connector";
    let b = t.nodes.get(p);
    return b ? t.vertexKind(b) : void 0;
  }, O, r), { nodes: c, edges: i };
}
var mr = 8, yr = 40, kr = 16, wr = 48, ge = 20, Ne = 26, ke = 14, at = "collapsed", Ar = { TB: 2, RL: 3, BT: 0, LR: 1 }, lt = /* @__PURE__ */ new WeakMap();
function ct(t, r) {
  let a = lt.get(t);
  if (a === void 0) {
    let c = r.flowchart?.curve;
    a = br(t, mr, typeof c == "string" ? c : void 0), lt.set(t, a);
  }
  return a;
}
function we(t, r, a) {
  let c = t.agentflow?.[r];
  return typeof c == "number" && c > 0 ? Math.min(c, 2e3) : a;
}
var vr = /[";]fill:/;
function Re(t, r, a) {
  let c = Oe(t);
  return ` fill="${c}"${vr.test(a.shape) ? "" : ` fill-opacity="${r}"`} stroke="${c}"`;
}
function Tr(t, r, a) {
  return _t(t.direction) ? It(a, (c) => ot(t, r, a, c)) : ot(t, r, a, !1);
}
function ot(t, r, a, c) {
  let i = ct(t, r), l = a.fontSize ?? 16, h = Math.round(l * 0.875), y = a.measurer ?? gt(a.fontFamily), e = we(r, "wrappingWidth", 120), S = we(r, "minNodeWidth", 120), A = a.padding ?? 8, I = a.icons, L = /* @__PURE__ */ new Map(), x = [], m = [];
  i.nodes.forEach((s, o) => L.set(s.id, o));
  for (let s of i.nodes) {
    let o = s.cssStyles.length > 0 ? s.cssCompiledStyles.concat(s.cssStyles) : s.cssCompiledStyles, g = Je(o), C = (g.bold ? 1 : 0) | (g.italic ? 2 : 0), Y = s.labelType === "markdown", j = g.fontSize ?? l, V, D;
    if (s.isGroup) {
      let K = ue(s.label, Y, y, j, 4e3, C);
      V = { node: s, style: g, label: K, shape: "group", w: 0, h: 0, dy: 0, loops: 0 }, D = Ce(0, 0), D.isGroup = !0, D.dir = s.dir ? He(s.dir) : void 0, D.padX = ge, D.padTop = K.height > 0 ? K.height + 16 : ge, D.padBottom = ge, D.minW = K.width + 2 * ge - 12;
    } else if (s.shape === "collapsedGroup") {
      let K = ue(s.label, Y, y, j, e, C), W = Math.max(K.width, S) + 2 * xt, J = K.height + 2 * Et + ke;
      V = { node: s, style: g, label: K, shape: at, w: W, h: J, dy: -ke / 2, loops: 0 }, D = Ce(W, J);
    } else {
      let K = ht(s.shape), W = ue(s.label, Y, y, j, e, C), J = $t(K, K === "diam" ? W.width : Math.max(W.width, S), W.height);
      V = { node: s, style: g, label: W, shape: K, w: J.w, h: J.h, dy: J.dy, loops: 0 }, D = Ce(J.w, J.h);
    }
    D.seq = x.length, x.push(V), m.push(D);
  }
  i.nodes.forEach((s, o) => {
    m[o].parent = s.parentId !== void 0 ? L.get(s.parentId) ?? -1 : -1;
  });
  let _ = c ? "TB" : He(t.direction), O = (s) => {
    let o;
    for (let g = m[s].parent, C = 0; g >= 0 && o === void 0 && C < 1e4; g = m[g].parent, C++) o = m[g].dir;
    return o ?? _;
  }, p = (s) => {
    let o = O(s);
    return o === "LR" || o === "RL";
  }, b = new Int32Array(m.length).fill(-1);
  for (let s = 0; s < m.length; s++) {
    let o = [], g = s;
    for (; g >= 0 && b[g] < 0 && o.length <= m.length; ) o.push(g), g = m[g].parent;
    let C = g >= 0 ? b[g] + 1 : 0;
    for (let Y = o.length - 1; Y >= 0; Y--) b[o[Y]] = C++;
  }
  let v = (s, o) => {
    let g = o;
    for (let C = b[o]; C > b[s]; C--) g = m[g].parent;
    return g === s && o !== s;
  }, E = [], G = [], Z = [], te = [];
  for (let s of i.edges) {
    let o = L.get(s.start), g = L.get(s.end);
    if (o === void 0 || g === void 0) continue;
    let C = ue(s.label, s.labelType === "markdown", y, h, e);
    if (v(o, g) || v(g, o)) {
      te.push({ edge: s, label: C, src: o, dst: g });
      continue;
    }
    o === g && (x[o].loops++, p(o) ? m[o].h += 2 * (Ne + (C.height > 0 ? C.height + 8 : 0)) : m[o].w += 2 * (Ne + (C.width > 0 ? C.width + 12 : 0))), Z.push(s), G.push(C), E.push({ src: o, dst: g, minlen: s.minlen ?? 1, labelW: C.width > 0 ? C.width + 12 : 0, labelH: C.height > 0 ? C.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let B = kt(m, E, _, { nodeSep: we(r, "nodeSpacing", yr), edgeSep: kr, rankSep: we(r, "rankSpacing", wr), portSep: 20 }), M = ue(t.title, !1, y, l, 4e3, 1), k = M.height > 0 ? M.height + 12 : 0, se = Math.max(B.width, M.width), ne = A + (se - B.width) / 2, N = A + k;
  wt(m, E, ne, N);
  let R = Math.ceil(se + 2 * A), X = Math.ceil(B.height + k + 2 * A), F = [], Q = [], oe = [], ie = [], de = te.length * m.length < 2e6;
  for (let { edge: s, src: o, dst: g } of te) {
    let C = v(g, o), Y = C ? g : o, j = C ? o : g, V = m[Y], D = m[j], K = Ar[V.dir ?? O(Y)], W = C ? K : K + 2 & 3, J = (P) => {
      let H = (P & 1) === 0, z = P === 0 || P === 3 ? -1 : 1, Ve = H ? D.x : D.x + z * D.w / 2, Ke = H ? D.y + z * D.h / 2 : D.y, Fe = H ? D.x : V.x + z * V.w / 2, ze = H ? V.y + z * V.h / 2 : D.y, be = H ? 0 : 1;
      return C ? [Ve, Ke, be, Fe, ze, be] : [Fe, ze, be, Ve, Ke, be];
    }, ce = (P) => {
      for (let H = 0; H < m.length; H++) {
        let z = m[H];
        if (H !== j && !z.isGroup && z.x + z.w / 2 > Math.min(P[0], P[3]) - 1 && z.x - z.w / 2 < Math.max(P[0], P[3]) + 1 && z.y + z.h / 2 > Math.min(P[1], P[4]) - 1 && z.y - z.h / 2 < Math.max(P[1], P[4]) + 1) return !0;
      }
      return !1;
    }, ee = J(W);
    if (de && ce(ee)) for (let P of [W + 1 & 3, W + 3 & 3, W + 2 & 3]) {
      let H = J(P);
      if (!ce(H)) {
        ee = H;
        break;
      }
    }
    ie.push(ee), oe.push((ee[0] + ee[3]) / 2, (ee[1] + ee[4]) / 2);
    let ae = ee.slice();
    Se(ae, C ? 0 : 3, x[j], D), Q.push(qe(ae, "linear", 0, xe(s.arrowTypeEnd)));
  }
  let re = /* @__PURE__ */ new Map(), f = !1;
  for (let s of m) s.isGroup && (f = !0);
  if (f) {
    for (let s of E) Ye(re, s.route);
    for (let s of ie) Ye(re, s);
  }
  let d = "", w = "";
  for (let s = 0; s < x.length; s++) {
    let o = x[s], g = m[s], C = o.node, Y = g.x, j = g.y, V = Ze(C.cssClasses.replace(/^default\s?/, "")), D = Ee(C.id);
    if (g.isGroup) {
      let P = yt(g, o.label.width, re, ge);
      d += `<g class="pele-cluster pele-flow${V}" data-id="${D}"><rect x="${q(Y - g.w / 2)}" y="${q(j - g.h / 2)}" width="${q(g.w)}" height="${q(g.h)}" rx="${Qe}"${Re(C.colorIndex ?? fe.size, "0.06", o.style)}${o.style.shape}/>` + $e(o.label, P, j - g.h / 2 + 8 + o.label.height / 2, ` class="pele-cluster-label" fill="var(--_m)"${o.style.text}`, I) + "</g>";
      continue;
    }
    let K = o.w, W = o.h, J = "", ce;
    if (o.shape === at) {
      let P = Oe(C.colorIndex ?? fe.size), H = W / 2 - ke - 2, z = H + (ke + 2) / 2;
      ce = `<rect x="${q(-K / 2)}" y="${q(-W / 2)}" width="${q(K)}" height="${q(W)}" rx="${Qe}"${Re(C.colorIndex ?? fe.size, "0.06", o.style)}${o.style.shape}/><path d="M${q(-K / 2 + 10)},${q(H)}H${q(K / 2 - 10)}" fill="none" stroke="${P}" stroke-dasharray="3 3"${o.style.line}/><path class="pele-collapsed-mark" d="${De(-9, z)}${De(0, z)}${De(9, z)}" fill="${P}" stroke="none"/>`;
    } else {
      let P = fe.get(C.kind ?? "task") ?? 1;
      J = ` pele-kind-${C.kind ?? "task"}`, ce = Lt(o.shape, K, W, Re(P, "0.14", o.style) + o.style.shape, ` stroke="${Oe(P)}"` + o.style.line);
    }
    let ee = $e(o.label, 0, o.dy, ` class="pele-label"${o.style.text}`, I);
    if (/ internal-link(?: |$)/.test(V + " ") && C.label && a.links !== !1) {
      let P = bt(C.label), H = vt(Tt(P), a) !== void 0, z = Le(P);
      ee = `<a class="internal-link"${H ? ` href="${z}"${Ct(a)}` : ""} data-href="${z}">${ee}</a>`, F.push({ id: C.id, href: P, internal: !0 });
    }
    let ae = ce + ee;
    C.tooltip && (ae = `<title>${Ee(C.tooltip)}</title>` + ae), C.link && (ae = St(ae, C.link, C.id, F, a, C.linkTarget ? ` target="${Le(C.linkTarget)}"` : "")), w += `<g class="pele-node pele-shape-${o.shape}${J}${V}" data-id="${D}" transform="translate(${q(Y)},${q(j)})">${ae}</g>`;
  }
  let T = "", $ = "", n = (s, o, g, C, Y) => {
    let j = s.style.length > 0 || s.cssCompiledStyles.length > 0 ? Je(s.cssCompiledStyles.concat(s.style)) : void 0, V = s.arrowTypeEnd, D = j?.stroke ? Le(j.stroke) : "var(--_l)", K = s.thickness === "dotted" ? "reference" : V === "arrow_cross" ? "failure" : "sequence", W = Ze(s.classes.replace(/edge-thickness-normal|edge-pattern-solid|flowchart-link/g, ""));
    T += `<g class="pele-edge pele-edge-${K}${W}" data-id="${Ee(s.id)}"${j?.line ?? ""}><path d="${g.d}"${s.thickness === "dotted" ? ' stroke-dasharray="3 4"' : ""}/>` + Nt(V, g.ex, g.ey, g.edx, g.edy, D) + "</g>", o.width > 0 && ($ += Rt(s.id, o, C, Y, j?.text ?? "", I));
  }, u = /* @__PURE__ */ new Map();
  for (let s = 0; s < E.length; s++) {
    let o = E[s], g = Z[s], C = G[s], Y = g.arrowTypeEnd, j;
    if (o.src === o.dst) {
      let V = x[o.src], D = u.get(o.src) ?? 0;
      u.set(o.src, D + 1), j = Mt(m[o.src], V.w, V.h, D, p(o.src), Ne, xe(Y), o);
    } else {
      let V = o.route.slice();
      Se(V, 0, x[o.src], m[o.src]), Se(V, V.length - 3, x[o.dst], m[o.dst]), j = qe(V, g.curve, 0, xe(Y));
    }
    n(g, C, j, o.labelX, o.labelY);
  }
  return te.forEach((s, o) => n(s.edge, s.label, Q[o], oe[2 * o], oe[2 * o + 1])), { svg: Dt("agentflow", R, X, l, a, t, $e(M, R / 2, A + M.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (d ? `<g class="pele-clusters">${d}</g>` : "") + (T ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${T}</g>` : "") + ($ ? `<g class="pele-edge-labels" font-size="${h}">${$}</g>` : "") + `<g class="pele-nodes">${w}</g>`), width: R, height: X, links: F };
}
function De(t, r) {
  return `M${q(t - 1.75)},${q(r)}a1.75,1.75 0 1 0 3.5,0a1.75,1.75 0 1 0 -3.5,0Z`;
}
var Dr = { type: "agentflow", keepComments: !0, parse(t, r, a, c, i) {
  let l = r.flowchart ?? {}, h = new qt({ inheritDir: l.inheritDir === !0, direction: typeof r.direction == "string" ? r.direction : void 0, lineOffset: c, maxEdges: i.maxEdges });
  return a && (h.title = a), fr(t, h), ct(h, r), h;
}, render: Tr };
export {
  Dr as agentflow
};
