var ot = Object.defineProperty;
var lt = (t, e, a) => e in t ? ot(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var z = (t, e, a) => lt(t, typeof e != "symbol" ? e + "" : e, a);
import { i as rt } from "./PUZGS23X-C3CYQ8K_.js";
import { f as nt } from "./DKTLEL5E-BCFlW8pF.js";
import { x as st, D as ct, G as De, $ as dt, v as pt, w as ft, V as ht, W as $t, O as mt, P as yt, j as $e, Y as ut, z as bt, U as gt } from "./VMV7XPHP-EL-PB13G.js";
import { w as Z, D as me } from "./HWDLEDTA-Ctstf22F.js";
import { f as ae, x as n, a as Ke, y as R, _ as Be, $ as xt, Y as wt, T as vt, b as kt, q as _t } from "./RZSVICHU-DoNHkG46.js";
import { x as ue, H as Mt } from "./lazy-CehDEl4q.js";
var Nt = class {
  constructor() {
    z(this, "nodes", /* @__PURE__ */ new Map());
    z(this, "labels");
    z(this, "links", []);
    z(this, "trends", /* @__PURE__ */ new Map());
    z(this, "pipelines", /* @__PURE__ */ new Map());
    z(this, "annotations", []);
    z(this, "notes", []);
    z(this, "accelerators", []);
    z(this, "deaccelerators", []);
    z(this, "annotationsBox");
    z(this, "axes", {});
    z(this, "size");
  }
  addNode(t) {
    let e = this.nodes.get(t.id) ?? { id: t.id, label: t.label };
    this.nodes.set(t.id, { ...e, ...t, className: t.className ?? e.className, labelOffsetX: t.labelOffsetX ?? e.labelOffsetX, labelOffsetY: t.labelOffsetY ?? e.labelOffsetY }), this.labels = void 0;
  }
  addLink(t) {
    this.links.push(t);
  }
  addTrend(t) {
    this.trends.set(t.nodeId, t);
  }
  startPipeline(t) {
    this.pipelines.set(t, { nodeId: t, componentIds: [] });
    let e = this.nodes.get(t);
    e && (e.isPipelineParent = !0);
  }
  addPipelineComponent(t, e) {
    this.pipelines.get(t)?.componentIds.push(e);
    let a = this.nodes.get(e);
    a && (a.inPipeline = !0);
  }
  addAnnotation(t) {
    this.annotations.push(t);
  }
  addNote(t) {
    this.notes.push(t);
  }
  addAccelerator(t) {
    this.accelerators.push(t);
  }
  addDeaccelerator(t) {
    this.deaccelerators.push(t);
  }
  setAnnotationsBox(t, e) {
    this.annotationsBox = { x: t, y: e };
  }
  setAxes(t) {
    this.axes = { ...this.axes, ...t };
  }
  setSize(t, e) {
    this.size = { width: t, height: e };
  }
  getNode(t) {
    return this.nodes.get(t);
  }
  resolveNodeId(t) {
    if (this.nodes.has(t)) return t;
    if (!this.labels) {
      this.labels = /* @__PURE__ */ new Map();
      for (let [e, a] of this.nodes) this.labels.has(a.label) || this.labels.set(a.label, e);
    }
    return this.labels.get(t) ?? t;
  }
  build() {
    let t = [];
    for (let e of this.nodes.values()) {
      if (typeof e.x != "number" || typeof e.y != "number") throw new ue(`Node "${e.label}" is missing coordinates`, "semantic", { type: "wardley" });
      t.push(e);
    }
    return { nodes: t, links: [...this.links], trends: [...this.trends.values()], pipelines: [...this.pipelines.values()], annotations: [...this.annotations], notes: [...this.notes], accelerators: [...this.accelerators], deaccelerators: [...this.deaccelerators], annotationsBox: this.annotationsBox, axes: { ...this.axes }, size: this.size };
  }
};
function oe(t, e) {
  let a = t <= 1 ? t * 100 : t;
  if (a < 0 || a > 100) throw new ue(`${e} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${t}`, "semantic", { type: "wardley" });
  return a;
}
function D(t, e, a) {
  return { x: oe(e, `${a} evolution`), y: oe(t, `${a} visibility`) };
}
function Xe(t) {
  return t === "+<>" ? "bidirectional" : t === "+<" ? "backward" : t === "+>" ? "forward" : void 0;
}
function At(t) {
  if (!t?.startsWith("+")) return {};
  let e = t.indexOf("'", 2), a = t[1] === "'" && e !== -1 ? t.slice(2, e) : void 0;
  return t.includes("<>") ? { flow: "bidirectional", label: a } : t.includes("<") ? { flow: "backward", label: a } : t.includes(">") ? { flow: "forward", label: a } : { label: a };
}
function He(t) {
  return t ? [(t.negX ? -1 : 1) * t.offsetX, (t.negY ? -1 : 1) * t.offsetY] : [void 0, void 0];
}
function Pt(t, e) {
  t.size && e.setSize(t.size.width, t.size.height), t.evolution && e.setAxes({ stages: t.evolution.stages.map((a) => a.secondName ? `${a.name.trim()} / ${a.secondName.trim()}` : a.name.trim()), stageBoundaries: t.evolution.stages.filter((a) => a.boundary !== void 0).map((a) => a.boundary) });
  for (let a of t.anchors) {
    let o = D(a.visibility, a.evolution, `Anchor "${a.name}"`);
    e.addNode({ id: a.name, label: a.name, x: o.x, y: o.y, className: "anchor" });
  }
  for (let a of t.components) {
    let o = D(a.visibility, a.evolution, `Component "${a.name}"`), [w, h] = He(a.label);
    e.addNode({ id: a.name, label: a.name, x: o.x, y: o.y, className: "component", labelOffsetX: w, labelOffsetY: h, inertia: a.inertia, sourceStrategy: a.decorator?.strategy });
  }
  for (let a of t.notes) {
    let o = D(a.visibility, a.evolution, `Note "${a.text}"`);
    e.addNote({ text: a.text, x: o.x, y: o.y });
  }
  for (let a of t.pipelines) {
    let o = e.getNode(a.parent);
    if (!o || typeof o.y != "number") throw new ue(`Pipeline "${a.parent}" must reference an existing component with coordinates.`, "semantic", { type: "wardley" });
    let w = o.y;
    e.startPipeline(a.parent);
    for (let h of a.components) {
      let k = `${a.parent}_${h.name}`, [u, P] = He(h.label), x = oe(h.evolution, `Pipeline component "${h.name}" evolution`);
      e.addNode({ id: k, label: h.name, x, y: w, className: "pipeline-component", labelOffsetX: u, labelOffsetY: P, inertia: void 0, sourceStrategy: void 0 }), e.addPipelineComponent(a.parent, k);
    }
  }
  for (let a of t.links) {
    let o = !!a.arrow && (a.arrow.includes("-.->") || a.arrow.includes(".-.")), w = At(a.arrow), h = Xe(a.fromPort) ?? Xe(a.toPort) ?? w.flow;
    e.addLink({ source: e.resolveNodeId(a.from), target: e.resolveNodeId(a.to), dashed: o, label: w.label ?? a.linkLabel, flow: h });
  }
  for (let a of t.evolves) {
    let o = e.getNode(a.component);
    o?.y !== void 0 && e.addTrend({ nodeId: a.component, targetX: oe(a.target, `Evolve target for "${a.component}"`), targetY: o.y });
  }
  if (t.annotations.length > 0) {
    let a = D(t.annotations[0].x, t.annotations[0].y, "Annotations box");
    e.setAnnotationsBox(a.x, a.y);
  }
  for (let a of t.annotation) {
    let o = D(a.x, a.y, `Annotation ${a.number}`);
    e.addAnnotation({ number: a.number, coordinates: [{ x: o.x, y: o.y }], text: a.text });
  }
  for (let a of t.accelerators) {
    let o = D(a.x, a.y, `Accelerator "${a.name}"`);
    e.addAccelerator({ name: a.name, x: o.x, y: o.y });
  }
  for (let a of t.deaccelerators) {
    let o = D(a.x, a.y, `Deaccelerator "${a.name}"`);
    e.addDeaccelerator({ name: a.name, x: o.x, y: o.y });
  }
}
function It(t, e) {
  let a = new Nt();
  return Pt(t, a), { type: "wardley", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, ...a.build() };
}
function Ve(t, e) {
  let a = e;
  for (let o = t.charCodeAt(a); o >= 48 && o <= 57; o = t.charCodeAt(a)) a++;
  return a;
}
function Ot() {
  let t = 0, e = 0;
  return (a, o) => {
    if ((o < t || o >= e) && (t = o, e = Ve(a, o)), e === o || a.charCodeAt(e) !== 46) return -1;
    let w = Ve(a, e + 1);
    return w > e + 1 ? w : -1;
  };
}
var Ze = { name: "ARROW", pattern: /->/y, first: "-" }, Ge = { name: "LINK_ARROW", pattern: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/y, first: "->+" }, O = (t, e) => ({ name: t, pattern: new RegExp(e, "y"), first: e[0] }), Fe = [{ name: "[", pattern: "[" }, { name: ",", pattern: "," }, { name: "]", pattern: "]" }, { name: "@", pattern: "@" }, { name: "/", pattern: "/" }, { name: "(", pattern: "(" }, { name: ")", pattern: ")" }, { name: "-", pattern: "-", longer: [Ze, Ge, De] }, { name: "{", pattern: "{" }, { name: "}", pattern: "}" }, { name: "WARDLEY_NUMBER", pattern: /[0-9]+\.[0-9]+/y, first: "0123456789", scanner: Ot }, Ze, { name: "LINK_PORT", pattern: /\+<>|\+>|\+</y, first: "+" }, Ge, { name: "LINK_LABEL", pattern: /;[^\n\r]+/y, first: ";" }, { name: "STRATEGY", pattern: /build|buy|outsource|market/y, first: "bom" }, O("KW_WARDLEY", "wardley-beta"), O("KW_SIZE", "size"), O("KW_EVOLUTION", "evolution"), O("KW_ANCHOR", "anchor"), O("KW_COMPONENT", "component"), O("KW_LABEL", "label"), O("KW_INERTIA", "inertia"), O("KW_EVOLVE", "evolve"), O("KW_PIPELINE", "pipeline"), O("KW_NOTE", "note"), O("KW_ANNOTATIONS", "annotations"), O("KW_ANNOTATION", "annotation"), O("KW_ACCELERATOR", "accelerator"), O("KW_DEACCELERATOR", "deaccelerator"), { name: "NAME_WITH_SPACES", pattern: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/y, first: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" }, { name: "WS", pattern: /[ \t]+/y, hidden: !0, first: "	 " }, rt(), dt, pt, { name: "INT", pattern: /0|[1-9][0-9]*(?!\.)/y, first: "0123456789" }, ft, { name: "ID", pattern: /[\w]([-\w]*\w)?/y, first: "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" }, ht, $t, De, mt, yt];
function zt(t) {
  let e = new st(ct(t, Fe, "wardley"), Fe, "wardley"), a = { $type: "Wardley", anchors: [], components: [], links: [], evolves: [], pipelines: [], notes: [], annotations: [], annotation: [], accelerators: [], deaccelerators: [] }, o = (c) => e.kinds[e.i] === c, w = () => o(36) || o(37) || o(30), h = () => o(36) ? $e(e.take()) : o(37) || o(30) ? e.take() : e.fail("a name"), k = () => Number(e.expect(10)), u = () => parseInt(e.expect(35)), P = () => o(10) ? Number(e.take()) : parseInt(e.expect(35)), x = () => {
    if (!o(-1)) for (o(38) || e.fail("a line break or the end of input"); o(38); ) e.i++;
  }, N = (c) => {
    e.expect(0);
    let b = c();
    e.expect(1);
    let v = c();
    return e.expect(2), [b, v];
  }, M = () => {
    e.expect(21), e.expect(0);
    let c = e.accept(7), b = u();
    e.expect(1);
    let v = e.accept(7), T = u();
    return e.expect(2), { $type: "Label", negX: c, offsetX: b, negY: v, offsetY: T };
  }, F = () => {
    let c = { $type: "EvolutionStage", name: h() };
    return e.accept(3) && (c.boundary = k()), e.accept(4) && (c.secondName = h()), c;
  };
  for (; o(38); ) e.i++;
  for (e.expect(16); !o(-1); ) switch (e.kind) {
    case 38:
      e.i++;
      break;
    case 32:
      a.accDescr = gt(e.take()), x();
      break;
    case 33:
      a.accTitle = bt(e.take()), x();
      break;
    case 34:
      a.title = ut(e.take()), x();
      break;
    case 17: {
      e.i++;
      let [c, b] = N(u);
      x(), a.size = { $type: "Size", width: c, height: b };
      break;
    }
    case 18: {
      e.i++;
      let c = [F()];
      for (e.expect(11), c.push(F()); e.accept(11); ) c.push(F());
      x(), a.evolution = { $type: "Evolution", stages: c };
      break;
    }
    case 19: {
      e.i++;
      let c = h(), [b, v] = N(k);
      x(), a.anchors.push({ $type: "Anchor", name: c, visibility: b, evolution: v });
      break;
    }
    case 20: {
      e.i++;
      let c = { $type: "Component", name: h(), visibility: 0, evolution: 0, inertia: !1 };
      [c.visibility, c.evolution] = N(k), o(21) && (c.label = M()), o(5) && e.kinds[e.i + 1] === 15 && (e.i++, c.decorator = { $type: "Decorator", strategy: e.take() }, e.expect(6)), e.accept(22) ? c.inertia = !0 : e.accept(5) && (e.expect(22), e.expect(6), c.inertia = !0), x(), a.components.push(c);
      break;
    }
    case 23: {
      e.i++;
      let c = h(), b = k();
      x(), a.evolves.push({ $type: "Evolve", component: c, target: b });
      break;
    }
    case 24: {
      e.i++;
      let c = h();
      for (e.expect(8), e.expect(38); o(38); ) e.i++;
      let b = [];
      do {
        e.expect(20);
        let v = { $type: "PipelineComponent", name: h(), evolution: 0 };
        e.expect(0), v.evolution = k(), e.expect(2), o(21) && (v.label = M()), x(), b.push(v);
      } while (o(20));
      e.expect(9), x(), a.pipelines.push({ $type: "Pipeline", parent: c, components: b });
      break;
    }
    case 25: {
      e.i++;
      let c = $e(e.expect(36)), [b, v] = N(k);
      x(), a.notes.push({ $type: "Note", text: c, visibility: b, evolution: v });
      break;
    }
    case 26: {
      e.i++;
      let [c, b] = N(P);
      x(), a.annotations.push({ $type: "Annotations", x: c, y: b });
      break;
    }
    case 27: {
      e.i++;
      let c = u();
      e.expect(1);
      let [b, v] = N(P), T = $e(e.expect(36));
      x(), a.annotation.push({ $type: "Annotation", number: c, x: b, y: v, text: T });
      break;
    }
    case 28:
    case 29: {
      let c = e.kind === 29;
      e.i++;
      let b = h(), [v, T] = N(k);
      x(), c ? a.deaccelerators.push({ $type: "Deaccelerator", name: b, x: v, y: T }) : a.accelerators.push({ $type: "Accelerator", name: b, x: v, y: T });
      break;
    }
    default: {
      w() || e.fail("a statement");
      let c = { $type: "Link", from: h(), to: "" };
      o(12) && (c.fromPort = e.take()), (o(13) || o(11)) && (c.arrow = e.take()), c.to = h(), o(12) && (c.toPort = e.take()), o(14) && (c.linkLabel = e.take().substring(1).trim()), x(), a.links.push(c);
    }
  }
  return a;
}
var Lt = ["Genesis", "Custom Built", "Product", "Commodity"], Et = 48, g = 6, K = 10, Tt = 8, ie = 15, U = 60, Wt = 30, je = 20, ye = "var(--_c)", L = "var(--_l)";
function Ct(t, e, a, o, w) {
  let h = t["wardley-beta"]?.[e];
  return typeof h == "number" && h >= o && h <= w ? h : a;
}
function G(t, e, a) {
  return t < e ? e : t > a ? a : t;
}
function Ue(t, e, a, o) {
  let w = wt(t), h = "", k = a;
  for (let u of t.lines) {
    let P = !0;
    for (let x of u) {
      if (x.icon !== void 0) continue;
      let N = vt(x.style & ~w);
      h += `<tspan${P ? ` x="${n(e)}" y="${n(k)}"` : ""}${N}>${kt(x.text)}</tspan>`, P = !1;
    }
    k += t.lineHeight;
  }
  return h === "" ? "" : `<text${_t(o, w)} xml:space="preserve">${h}</text>`;
}
function qe(t, e, a, o) {
  let w = typeof e == "number" && Number.isFinite(e) ? e : Ct(t, a, o, 1, 1e6);
  return G(w, 200, 1e4) - 2 * Et;
}
function St(t, e, a) {
  let o = qe(e, t.size?.width, "width", 900);
  return nt(a, o, 160, (w, h) => Yt(t, e, a, w, o, h));
}
function Yt(t, e, a, o, w, h) {
  let k = a.fontSize ?? 16, u = Math.round(k * 0.8125), P = Math.round(k * 0.6875), x = a.measurer ?? Mt(a.fontFamily), N = a.padding ?? 8, M = qe(e, t.size?.height, "height", 600) * Math.max(0.75, o / w), F = e["wardley-beta"]?.showGrid === !0, c = 0, b = 0, v = o, T = M, C = (i, l, r, s) => {
    i < c && (c = i), l < b && (b = l), r > v && (v = r), s > T && (T = s);
  }, B = (i, l, r, s) => (C(l - i.width / 2, r - i.height / 2, l + i.width / 2, r + i.height / 2), ae(i, l, r, s, a.icons)), le = (i, l, r, s) => (C(l, r - i.size, l + i.width, r - i.size + i.height + 4), Ue(i, l, r, s)), E = (i, l, r = h ? Math.max(64, Math.min(120, o / 2)) : 4e3, s = 0) => Be(i, !1, x, l, r, s), X = (i) => i / 100 * o, H = (i) => M - i / 100 * M, q = t.axes.stages && t.axes.stages.length > 0 ? t.axes.stages : Lt, re = t.axes.stageBoundaries, be = re !== void 0 && re.length === q.length, Q = "", ge = "", J = M, xe = 0;
  if (q.forEach((i, l) => {
    let r = be ? xe : l / q.length, s = be ? G(re[l], 0, 1) : (l + 1) / q.length;
    xe = s, l > 0 && (Q += `<path class="pele-wardley-stage" d="M${n(r * o)},0V${n(M)}" stroke="var(--_b)" stroke-dasharray="4 4"/>`);
    let p = E(i, u, Math.max(48, Math.abs(s - r) * o - 12));
    ge += B(p, (r + s) / 2 * o, M + 8 + p.height / 2, ` class="pele-wardley-stage-label" font-size="${u}" fill="var(--_m)"`), J = Math.max(J, M + 8 + p.height);
  }), F) for (let i = 1; i < 4; i++) Q += `<path class="pele-wardley-grid" d="M${n(o * i / 4)},0V${n(M)}M0,${n(M * i / 4)}H${n(o)}" stroke="var(--_b)" stroke-dasharray="2 6"/>`;
  Q += `<path class="pele-wardley-axis" d="M0,0V${n(M)}H${n(o)}" stroke="${L}"/>`;
  let ne = E(t.axes.xLabel ?? "Evolution", u), we = E(t.axes.yLabel ?? "Visibility", u), ve = ` class="pele-wardley-axis-label" font-size="${u}" font-weight="var(--_hw)"`, Qe = B(ne, o / 2, J + 6 + ne.height / 2, ve) + ae(we, -16, M / 2, `${ve} transform="rotate(-90 -16 ${n(M / 2)})"`);
  C(-16 - we.height / 2, 0, 0, 0);
  let Je = J + 6 + ne.height + 10, Y = /* @__PURE__ */ new Map();
  for (let i of t.nodes) Y.set(i.id, { x: X(i.x), y: H(i.y), node: i });
  let ke = "", _e = /* @__PURE__ */ new Map();
  for (let i of t.pipelines) {
    _e.set(i.nodeId, new Set(i.componentIds));
    let l = [];
    for (let m of i.componentIds) {
      let $ = Y.get(m);
      $ && l.push($);
    }
    if (l.length === 0) continue;
    l.sort((m, $) => m.x - $.x);
    let r = l[0].x, s = l[l.length - 1].x, p = l[0].y, f = p - 2 * g, d = Y.get(i.nodeId);
    d && (d.x = (r + s) / 2, d.y = f - K / 6), C(r - ie, f, s + ie, f + 4 * g), ke += `<g class="pele-wardley-pipeline" data-id="${R(i.nodeId)}"><rect x="${n(r - ie)}" y="${n(f)}" width="${n(s - r + 2 * ie)}" height="${n(4 * g)}" rx="${Ke}" fill="var(--_s)" stroke="var(--_b)"/>` + (l.length > 1 ? `<path d="M${n(r)},${n(p)}H${n(s)}" stroke="${L}" stroke-dasharray="4 4"/>` : "") + "</g>";
  }
  let se = /* @__PURE__ */ new Map(), ce = (i, l, r) => {
    let s = i.node;
    if (s.className === "anchor") {
      let p = se.get(s);
      return p || se.set(s, p = E(s.label, u, h ? Math.max(64, o / 2) : 4e3, 1)), 1 / Math.hypot(l / (p.width / 2 + 5), r / (u * 0.8));
    }
    return s.isPipelineParent ? K / Math.SQRT2 : s.sourceStrategy ? 2 * g : g;
  }, de = /* @__PURE__ */ new Map(), Me = (i, l, r) => {
    Math.abs(l) < 0.25 || Math.abs(r) < 0.25 || de.set(i, (de.get(i) ?? 0) | (l > 0 ? r < 0 ? 1 : 2 : r < 0 ? 4 : 8));
  }, pe = "";
  for (let i of t.links) {
    let l = Y.get(i.source), r = Y.get(i.target);
    if (!l || !r || l === r || _e.get(i.target)?.has(i.source)) continue;
    let s = r.x - l.x, p = r.y - l.y, f = Math.hypot(s, p);
    if (f < 0.01) continue;
    let d = s / f, m = p / f, $ = ce(l, d, m), _ = ce(r, d, m);
    if ($ + _ >= f) continue;
    Me(l, d, m), Me(r, -d, -m);
    let y = l.x + d * $, I = l.y + m * $, A = r.x - d * _, W = r.y - m * _, S = "";
    (i.flow === "forward" || i.flow === "bidirectional") && (S += me("arrow_point", A, W, d, m, L), A -= d * Z("arrow_point"), W -= m * Z("arrow_point")), (i.flow === "backward" || i.flow === "bidirectional") && (S += me("arrow_point", y, I, -d, -m, L), y += d * Z("arrow_point"), I += m * Z("arrow_point"));
    let te = "";
    if (i.label) {
      let j = E(i.label, P + 1, 200), Ce = d >= 0 ? 1 : -1, Se = m * Ce, Ye = -d * Ce, Re = 5 + Math.abs(Se) * j.width / 2 + Math.abs(Ye) * j.height / 2;
      te = B(j, (l.x + r.x) / 2 + Se * Re, (l.y + r.y) / 2 + Ye * Re, ` class="pele-edge-label" font-size="${P + 1}" fill="var(--_m)"`);
    }
    pe += `<g class="pele-edge${i.dashed ? " pele-wardley-dashed" : ""}" data-id="${R(i.source)}-${R(i.target)}"><path d="M${n(y)},${n(I)}L${n(A)},${n(W)}" stroke="${L}"${i.dashed ? ' stroke-dasharray="6 6"' : ""}/>` + S + te + "</g>";
  }
  let fe = "";
  for (let i of t.trends) {
    let l = Y.get(i.nodeId);
    if (!l) continue;
    let r = X(i.targetX), s = H(i.targetY), p = r - l.x, f = s - l.y, d = Math.hypot(p, f), m = "", $ = d > 0 ? ce(l, p / d, f / d) : 0;
    if (d > $ + g + 4) {
      let _ = p / d, y = f / d, I = r - _ * (g + 2), A = s - y * (g + 2);
      m = `<path d="M${n(l.x + _ * $)},${n(l.y + y * $)}L${n(I - _ * Z("arrow_point"))},${n(A - y * Z("arrow_point"))}" stroke="${ye}" stroke-dasharray="4 4"/>` + me("arrow_point", I, A, _, y, ye);
    }
    C(r - g, s - g, r + g, s + g), fe += `<g class="pele-wardley-trend" data-id="${R(i.nodeId)}">${m}<circle cx="${n(r)}" cy="${n(s)}" r="${g}" fill="var(--_bg)" stroke="${ye}"/></g>`;
  }
  let Ne = "", ee = 1.2 * g, et = 0.7 * g;
  for (let i of Y.values()) {
    let l = i.node, { x: r, y: s } = i, p = l.className === "anchor", f = l.sourceStrategy, d = "";
    if (f) {
      let y = f === "outsource" ? "var(--_m)" : f === "buy" ? "var(--_a)" : f === "build" ? "var(--_s)" : "var(--_bg)";
      d += `<circle class="pele-wardley-${f}" cx="${n(r)}" cy="${n(s)}" r="${2 * g}" fill="${y}" stroke="${L}"/>`;
    }
    if (f === "market") {
      let y = ee * Math.cos(Math.PI / 6), I = s + ee * Math.sin(Math.PI / 6);
      d += `<path d="M${n(r)},${n(s - ee)}L${n(r - y)},${n(I)}H${n(r + y)}Z" fill="none" stroke="${L}"/>`;
      for (let [A, W] of [[r, s - ee], [r - y, I], [r + y, I]]) d += `<circle cx="${n(A)}" cy="${n(W)}" r="${n(et)}" fill="var(--_bg)" stroke="${L}"/>`;
    } else l.isPipelineParent ? d += `<rect x="${n(r - K / 2)}" y="${n(s - K / 2)}" width="${K}" height="${K}" fill="var(--_bg)" stroke="${L}"/>` : p || (d += `<circle cx="${n(r)}" cy="${n(s)}" r="${g}" fill="var(--_bg)" stroke="${L}"/>`);
    if (l.inertia === !0) {
      let y = (l.isPipelineParent ? K / 2 : g) + 10 + (f ? g + 4 : 0);
      d += `<rect class="pele-wardley-inertia" x="${n(r + y)}" y="${n(s - g)}" width="4" height="${2 * g}" fill="${L}"/>`;
    }
    let m = l.labelOffsetX === void 0 ? void 0 : G(l.labelOffsetX, -5e3, 5e3), $ = l.labelOffsetY === void 0 ? void 0 : G(l.labelOffsetY, -5e3, 5e3), _;
    if (p) {
      let y = se.get(l) ?? E(l.label, u, h ? Math.max(64, o / 2) : 4e3, 1);
      _ = B(y, r + (m ?? 0), s + ($ ?? -3), ` class="pele-label" font-size="${u}" font-weight="var(--_hw)"`);
    } else {
      let y = E(l.label, u), I = ` class="pele-label" font-size="${u}"`, A = Tt + (f ? 10 : 0);
      if (m !== void 0 || $ !== void 0) _ = le(y, r + (m ?? A), s + ($ ?? -A), I);
      else if (l.inPipeline) _ = B(y, r, s + 2 * g + 4 + y.height / 2, I);
      else {
        let W = de.get(i) ?? 0, S = (W & 1) === 0 ? 1 : (W & 2) === 0 ? 2 : (W & 4) === 0 ? 4 : (W & 8) === 0 ? 8 : 1, te = S === 1 || S === 2, j = S === 1 || S === 4;
        _ = le(y, te ? r + A : r - A - y.width, j ? s - A : s + A + u * 0.75, I);
      }
    }
    C(r - 2 * g, s - 2 * g, r + 2 * g + 20, s + 2 * g), Ne += `<g class="pele-node pele-wardley-${p ? "anchor" : l.isPipelineParent ? "pipeline-parent" : l.inPipeline ? "pipeline-component" : "component"}" data-id="${R(l.id)}">${d}${_}</g>`;
  }
  let he = "";
  for (let i of t.annotations) {
    let l = E(String(i.number), P, 4e3, 1), r = "";
    for (let s of i.coordinates) {
      let p = X(s.x), f = H(s.y), d = Math.max(10, l.width / 2 + 4);
      C(p - d, f - d, p + d, f + d), r += `<circle cx="${n(p)}" cy="${n(f)}" r="${n(d)}" fill="var(--_bg)" stroke="${L}"/>` + ae(l, p, f, ` font-size="${P}" font-weight="var(--_hw)"`);
    }
    he += `<g class="pele-wardley-annotation" data-id="${R(String(i.number))}">${r}</g>`;
  }
  let Ae = t.annotations.filter((i) => i.text).sort((i, l) => i.number - l.number);
  if (Ae.length > 0) {
    let i = Ae.map(($) => E(`${$.number}. ${$.text}`, u, h ? Math.max(80, o - 20) : 320)), l = 0, r = 0;
    for (let $ of i) l = Math.max(l, $.width), r += $.height;
    l += 20, r += 14;
    let s = t.annotationsBox, p = s ? G(X(s.x), 0, Math.max(0, o - l)) : 0, f = s ? G(H(s.y), 0, Math.max(0, M - r)) : Je;
    C(p, f, p + l, f + r);
    let d = "", m = f + 7;
    for (let $ of i) d += Ue($, p + 10, m + $.lineHeight / 2 + u * 0.35, ` font-size="${u}"`), m += $.height;
    he += `<g class="pele-wardley-annotations"><rect x="${n(p)}" y="${n(f)}" width="${n(l)}" height="${n(r)}" rx="${Ke}" fill="var(--_bg)" stroke="var(--_b)"/>${d}</g>`;
  }
  let Pe = "";
  for (let i of t.notes) Pe += le(E(i.text, u, Math.min(360, o * 0.6), 1), X(i.x), H(i.y), ` class="pele-wardley-note" font-size="${u}" font-weight="var(--_hw)"`);
  let Ie = "", Oe = (i, l, r, s) => {
    let p = X(l), f = H(r), d = Wt / 2, m = s ? p + U : p, $ = s ? p : p + U, _ = s ? p + U - je : p + je, y = `M${n($)},${n(f - d)}H${n(_)}V${n(f - d - 8)}L${n(m)},${n(f)}L${n(_)},${n(f + d + 8)}V${n(f + d)}H${n($)}Z`;
    C(p, f - d - 8, p + U, f + d + 8), Ie += `<g class="pele-wardley-${s ? "accelerator" : "deaccelerator"}" data-id="${R(i)}"><path d="${y}" fill="var(--_s)" stroke="${L}"/>` + B(E(i, P + 1, 160, 1), p + U / 2, f + d + 8 + 12, ` font-size="${P + 1}" font-weight="var(--_hw)"`) + "</g>";
  };
  for (let i of t.accelerators) Oe(i.name, i.x, i.y, !0);
  for (let i of t.deaccelerators) Oe(i.name, i.x, i.y, !1);
  let V = Be(t.title, !1, x, k, h ? Math.max(80, o) : 4e3, 1), ze = V.height > 0 ? V.height + 12 : 0, Le = Math.min(c, o / 2 - V.width / 2), tt = Math.max(v, o / 2 + V.width / 2), Ee = N - Le, at = N + ze - b, Te = Math.ceil(tt - Le + 2 * N), We = Math.ceil(T - b + ze + 2 * N), it = ae(V, Ee + o / 2, N + V.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + `<g transform="translate(${n(Ee)},${n(at)})"><g class="pele-wardley-frame" fill="none">${Q}</g>` + ge + Qe + ke + (pe ? `<g class="pele-edges" fill="none">${pe}</g>` : "") + (fe ? `<g class="pele-wardley-trends" fill="none">${fe}</g>` : "") + Ne + he + Pe + Ie + "</g>";
  return { svg: xt("wardley", Te, We, k, a, t, it), width: Te, height: We, links: [] };
}
var Zt = { type: "wardley", section: "wardley-beta", parse: (t, e, a) => It(zt(t), a), render: St };
export {
  Zt as wardley
};
