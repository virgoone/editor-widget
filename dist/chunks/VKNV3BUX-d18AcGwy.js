var Ne = Object.defineProperty;
var ve = (t, e, n) => e in t ? Ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var S = (t, e, n) => ve(t, typeof e != "symbol" ? e + "" : e, n);
import { i as Te } from "./PUZGS23X-C3CYQ8K_.js";
import { H as oe, A as le } from "./KQOEJWJY-XpoKsT0f.js";
import { x as Y, r as _, H as ke, $ as W } from "./lazy-CehDEl4q.js";
import { p as Ie, h as be } from "./DKTLEL5E-BCFlW8pF.js";
import { x as Me, D as Oe, $ as _e, v as Ce, U as Ee, z as De, Y as Ve, H as Se } from "./VMV7XPHP-EL-PB13G.js";
import { _ as We, x as s, a as He, y as ae, b as se, h as Le, f as Xe, $ as ze } from "./RZSVICHU-DoNHkG46.js";
var R = /[─━│┃└┗├┣]/, me = /[└┗├┣]/, Pe = /[─━]/, ce = /^[\s│┃]+$/, je = /^[\s─━│┃└┗├┣]+$/, Be = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/, Qe = /^\s*%%/, Ue = "    ";
function Ye(t) {
  return t.some((e) => R.test(e));
}
function Re(t) {
  for (let e of t) {
    let n = me.exec(e);
    if (n?.index && n.index > 0) return n.index;
  }
  return 4;
}
function de(t, e) {
  return t.replace(/\bline\s+(\d+)\b/gi, (n, i) => {
    let o = e.get(parseInt(i, 10));
    return o ? `line ${o}` : n;
  });
}
function he(t, e) {
  throw new Y(`Line ${t}: ${e}`, "syntax", { type: "treeView", line: t });
}
function Ze(t) {
  let e = /* @__PURE__ */ new Map();
  if (!R.test(t)) return { text: t, lineMap: e };
  let n = t.split(`
`), i = -1;
  for (let l = 0; l < n.length; l++) if (n[l].trim() === "treeView-beta") {
    i = l;
    break;
  }
  if (i === -1) return { text: t, lineMap: e };
  let o = (l) => l.trim() === "" || Qe.test(l) || Be.test(l), a = [];
  for (let l = i + 1; l < n.length; l++) {
    let p = n[l];
    o(p) || ce.test(p) || a.push(p.replace(/\t/g, "    "));
  }
  if (!Ye(a)) return { text: t, lineMap: e };
  let d = Re(a), y = [], A = (l, p) => {
    y.push(l), e.set(y.length, p + 1);
  };
  for (let l = 0; l <= i; l++) A(n[l], l);
  for (let l = i + 1; l < n.length; l++) {
    let p = n[l];
    if (o(p)) {
      A(p, l);
      continue;
    }
    if (ce.test(p)) continue;
    let m = p.replace(/\t/g, "    "), T = me.exec(m);
    if (T) {
      let k = Math.round(T.index / d) + 1, x = T.index + 1;
      for (; x < m.length && Pe.test(m[x]); ) x++;
      for (; x < m.length && m[x] === " "; ) x++;
      let I = m.slice(x).trimEnd();
      I || he(l + 1, "Empty node — expected a filename or directory name after the box-drawing prefix"), A(Ue.repeat(k) + I, l);
    } else {
      if (je.test(m)) continue;
      R.test(m) ? A(p, l) : /^\s+/.test(m) ? he(l + 1, "Unexpected indentation without box-drawing characters. In box-drawing format, use ├── or └── prefixes for indented nodes.") : A(p, l);
    }
  }
  return { text: y.join(`
`), lineMap: e };
}
function Fe(t, e) {
  if (t.startsWith("##", e) || t.startsWith("icon(", e)) return !0;
  if (!t.startsWith(":::", e)) return !1;
  let n = e + 3;
  for (; _(t.charCodeAt(n)); ) n++;
  let i = t.charCodeAt(n);
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i === 95;
}
function Je(t, e) {
  let n = t.charCodeAt(e);
  if (_(n) || n === 10 || n === 13 || n === 34 || n === 39 || t.startsWith(":::", e) || t.startsWith("icon(", e) || t.startsWith("##", e)) return -1;
  let i = t.length, o = e + 1;
  for (; o < i; ) {
    let a = t.charCodeAt(o);
    if (a === 10 || a === 13) break;
    if (_(a)) {
      let d = o + 1;
      for (; _(t.charCodeAt(d)); ) d++;
      if (Fe(t, d)) break;
      o = d;
    } else o++;
  }
  return o;
}
var fe = { name: "BARE_NAME", pattern: /(?!:::|icon\(|##)[^ \t\n\r"'](?:(?![ \t]+:::[ \t]*[A-Za-z_]|[ \t]+icon\(|[ \t]+##)[^\n\r])*/y, match: Je }, pe = [{ ...Se("treeView-beta"), longer: [fe] }, Te(), _e, Ce, { name: "CLASS_ANNOTATION", pattern: /[ \t]+:::[ \t]*[A-Za-z_][\w-]*/y }, { name: "ICON_ANNOTATION", pattern: /[ \t]+icon\([\w-]*(?::[\w-]+)?\)/y }, { name: "DESC_ANNOTATION", pattern: /[ \t]+##[^\n\r]*/y }, { name: "INDENTATION", pattern: /[ \t]{1,}/y }, { name: "QUOTED_NAME", pattern: /"[^"]*"|'[^']*'/y }, { name: "WS", pattern: /[ \t]+/y, hidden: !0 }, { name: "ML_COMMENT", pattern: /\%\%[^\n]*/y, hidden: !0 }, { name: "NL", pattern: /\r?\n/y, hidden: !0 }, fe];
function $e(t) {
  let e = t.length;
  for (; e > 0 && _(t.charCodeAt(e - 1)); ) e--;
  return e === t.length ? t : t.slice(0, e);
}
function Q(t, e) {
  switch (t) {
    case "INDENTATION":
      return e?.length || 0;
    case "QUOTED_NAME":
      return e.substring(1, e.length - 1);
    case "BARE_NAME":
      return $e(e);
    case "CLASS_ANNOTATION":
      return e.trim().substring(3).trim();
    case "ICON_ANNOTATION": {
      let n = e.trim();
      return n.substring(5, n.length - 1);
    }
    case "DESC_ANNOTATION":
      return e.trim().substring(2).trim();
    default:
      return;
  }
}
function Ke(t) {
  let e = new Me(Oe(t, pe, "treeView"), pe, "treeView"), n = { $type: "TreeView", nodes: [] };
  for (e.expect(0); ; ) if (e.kind === 1) n.accDescr = Ee(e.take());
  else if (e.kind === 2) n.accTitle = De(e.take());
  else if (e.kind === 3) n.title = Ve(e.take());
  else break;
  for (; e.kind !== -1; ) {
    let i = { $type: "TreeNode", name: "" };
    if (e.kind === 7 && (i.indent = e.take().length), e.kind === 8) {
      let o = e.take();
      i.name = o.substring(1, o.length - 1);
    } else e.kind === 12 ? i.name = $e(e.take()) : e.fail("a name");
    for (; ; ) if (e.kind === 4) i.classAnnotation = Q("CLASS_ANNOTATION", e.take());
    else if (e.kind === 5) i.iconAnnotation = Q("ICON_ANNOTATION", e.take());
    else if (e.kind === 6) i.descAnnotation = Q("DESC_ANNOTATION", e.take());
    else break;
    n.nodes.push(i);
  }
  return n;
}
var qe = class {
  constructor() {
    S(this, "count", 1);
    S(this, "root", { id: 0, level: -1, name: "/", nodeType: "directory", children: [] });
    S(this, "stack", [this.root]);
  }
  addNode(t, e, n, i, o, a) {
    let d = this.stack;
    for (; t <= d[d.length - 1].level; ) d.pop();
    let y = { id: this.count++, level: t, name: e, nodeType: n, icon: o, cssClass: i, description: a, children: [] };
    d[d.length - 1].children.push(y), d.push(y);
  }
};
function Ge(t, e) {
  for (let n of t.nodes) {
    let i = typeof n.indent == "number" ? n.indent : 0, o = n.name, a = o.endsWith("/");
    a && (o = o.slice(0, -1));
    let d = n.iconAnnotation;
    e.addNode(i, o, a ? "directory" : "file", n.classAnnotation || void 0, d !== void 0 ? d || "none" : void 0, n.descAnnotation || void 0);
  }
}
function et(t) {
  let { text: e, lineMap: n } = Ze(t);
  try {
    return Ke(e);
  } catch (i) {
    if (n.size === 0 || !(i instanceof Y)) throw i;
    let o = i.message.indexOf(`
`), a = o === -1 ? de(i.message, n) : de(i.message.slice(0, o), n) + i.message.slice(o);
    throw new Y(a, i.code, { type: i.type, line: n.get(i.line) ?? i.line, column: i.column, snippet: i.snippet });
  }
}
function tt(t, e) {
  let n = new qe();
  return Ge(t, n), { type: "treeView", title: t.title || e, accTitle: t.accTitle ? t.accTitle.replace(/^\s+/g, "") : void 0, accDescr: t.accDescr ? t.accDescr.replace(/\n\s+/g, `
`) : void 0, root: n.root, count: n.count };
}
var X = "mermaid-treeview", Z = /* @__PURE__ */ new Map([["folder", "M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2.4 2.5h8A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"], ["file", "M6.5 3h7L19 8.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19"]]);
function U(t, e) {
  if (t === void 0 || !Object.prototype.hasOwnProperty.call(t, e)) return;
  let n = t[e];
  return typeof n == "string" ? n : void 0;
}
function nt(t, e) {
  let n = U(e?.filenameIcons, t);
  if (n) return n;
  let i = t.lastIndexOf(".");
  if (i > 0) {
    let o = t.substring(i).toLowerCase();
    return U(e?.extensionIcons, o) ?? U(e?.extensionIcons, o.slice(1));
  }
}
function ue(t, e) {
  return t.includes(":") ? t : Z.has(t) || !e ? `${X}:${t}` : `${e}:${t}`;
}
function ge(t, e) {
  if (t.icon !== "none") {
    if (t.icon) return ue(t.icon, e.defaultIconPack);
    if (e.showIcons) {
      if (t.nodeType === "file") {
        let n = nt(t.name, e);
        if (n === "none") return;
        if (n) return ue(n, e.defaultIconPack);
      }
      return `${X}:${t.nodeType === "directory" ? "folder" : "file"}`;
    }
  }
}
function it(t) {
  let e = (i) => typeof i == "object" && i !== null && !Array.isArray(i) ? i : void 0, n = e(t.treeView) ?? {};
  return { showIcons: !!n.showIcons, defaultIconPack: typeof n.defaultIconPack == "string" ? n.defaultIconPack : "", filenameIcons: e(n.filenameIcons), extensionIcons: e(n.extensionIcons) };
}
var rt = 6, ot = 16, lt = 7, at = 4, H = 4;
function L(t, e, n, i, o) {
  let a = t.treeView?.[e];
  return typeof a == "number" && a >= i && a <= o ? a : n;
}
function st(t) {
  return { paddingX: L(t, "paddingX", 5, 0, 100), paddingY: L(t, "paddingY", 2, 0, 100), rowIndent: L(t, "rowIndent", 15, 0, 400), lineThickness: L(t, "lineThickness", 1, 0.25, 12) };
}
function ct(t, e, n) {
  return Ie(n, (i) => dt(t, e, n, i));
}
function dt(t, e, n, i) {
  let o = n.fontSize ?? 16, a = n.measurer ?? ke(n.fontFamily), d = n.padding ?? 8, y = it(e), { paddingX: A, paddingY: l, rowIndent: p, lineThickness: m } = st(e), T = 0, k = t.root.children.map((r) => [r, 0]);
  for (let r = 0; i && r < k.length; r++) {
    let [c, h] = k[r];
    T = Math.max(T, h);
    for (let f of c.children) k.push([f, h + 1]);
  }
  let x = i ? Math.min(p + A, Math.max(2, ((n.maxWidth ?? 320) - 120) / Math.max(1, T))) : p + A, I = Math.round(o * 1.5) + 2 * l, b = o, M = We(t.title, !1, a, o, i ? be(n) : 4e3, 1), xe = M.height > 0 ? M.height + 12 : 0, we = (r) => r.some((c) => ge(c, y) !== void 0), C = [], z = /* @__PURE__ */ new Map(), P = [], F = (r, c) => {
    let h = we(r);
    for (let f = r.length - 1; f >= 0; f--) P.push([r[f], c, h]);
  };
  F(t.root.children, 0);
  let E = 0, J = !1, D = 0;
  for (; P.length > 0; ) {
    let [r, c, h] = P.pop(), f = c * x, u = W(r.name), g = f + (h ? b + rt : 0), v = Math.max(40, (n.maxWidth ?? 320) - 2 * d - 2 * H - g), $ = i ? oe(u, a, o, v, r.nodeType === "directory" ? 1 : 0) : void 0, te = i && r.description ? oe(W(r.description), a, o, v, 2) : void 0, ne = $ ? $.width : a.width(u, o, r.nodeType === "directory" ? 1 : 0);
    g + ne > E && (E = g + ne);
    let ie = r.cssClass !== void 0 && r.cssClass.split(/\s+/).includes("highlight");
    ie && (J = !0);
    let B = i ? Math.max(I, ($?.height ?? 0) + (te?.height ?? 0) + 2 * l) : I, Ae = D + (i ? l + Math.max(b, $?.height ?? 0) / 2 : B / 2), re = { node: r, x: f, cy: Ae, icon: ge(r, y), text: u, labelX: g, highlighted: ie, label: $, description: te, top: D, height: B };
    D += B, C.push(re), z.set(r, re), F(r.children, c + 1);
  }
  let K = E + ot, O = E;
  for (let r of C) {
    let c = r.node.description;
    if (!c) continue;
    let h = r.description ? r.description.width : a.width(W(c), o, 2);
    O = Math.max(O, (i ? r.labelX : K) + h);
  }
  O = Math.max(O, M.width);
  let w = d + (J ? H : 0), N = d + xe, V = Math.ceil(O + 2 * w), q = Math.ceil(N + D + d), j = "";
  for (let r of C) {
    let c = r.node.children;
    if (c.length === 0) continue;
    let h = w + r.x + lt, f = Math.max(h, w + r.x + x - A), u = N + z.get(c[c.length - 1]).cy, g = Math.min(at, f - h), v = `M${s(h)},${s(N + r.top + r.height - 2)}V${s(u - g)}`;
    g > 0 && (v += `Q${s(h)},${s(u)} ${s(h + g)},${s(u)}H${s(f)}`);
    for (let $ = 0; $ < c.length - 1 && f > h; $++) v += `M${s(h)},${s(N + z.get(c[$]).cy)}H${s(f)}`;
    j += `<path d="${v}"/>`;
  }
  let G = o * 0.35, ee = "";
  for (let r of C) {
    let c = r.node, h = N + r.cy, f = c.nodeType === "directory", u = "";
    if (r.highlighted) {
      let g = w + r.x - H;
      u += `<rect class="pele-tree-highlight" x="${s(g)}" y="${s(N + r.top + 1)}" width="${s(V - w + H - g)}" height="${s(r.height - 2)}" rx="${He}" fill="var(--_c)" fill-opacity="0.14"/>`;
    }
    if (r.icon !== void 0) {
      let g = r.icon.startsWith(X + ":") ? r.icon.slice(X.length + 1) : "", v = Z.get(g) ?? Z.get(f ? "folder" : "file"), $ = n.icons?.(r.icon) ?? `<path d="${v}" stroke="var(--_m)" stroke-width="1.5"/>`;
      u += `<svg class="pele-icon" data-icon="${ae(r.icon)}" x="${s(w + r.x)}" y="${s(h - b / 2)}" width="${s(b)}" height="${s(b)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${$}</svg>`;
    }
    r.label ? u += le(r.label, w + r.labelX, N + r.top + l, ` class="pele-label"${f ? ' font-weight="var(--_hw)"' : ""}`) : r.text !== "" && (u += `<text class="pele-label" x="${s(w + r.labelX)}" y="${s(h + G)}"${f ? ' font-weight="var(--_hw)"' : ""} xml:space="preserve">${se(r.text)}</text>`), r.description ? u += le(r.description, w + r.labelX, N + r.top + l + (r.label?.height ?? 0), ' class="pele-tree-description" font-style="italic" fill="var(--_m)"') : c.description && (u += `<text class="pele-tree-description" x="${s(w + K)}" y="${s(h + G)}" font-style="italic" fill="var(--_m)" xml:space="preserve">${se(W(c.description))}</text>`), ee += `<g class="pele-node pele-tree-${f ? "dir" : "file"}${Le(c.cssClass ?? "")}" data-id="${ae(c.name)}">${u}</g>`;
  }
  let ye = Xe(M, V / 2, d + M.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (j ? `<g class="pele-tree-guides" fill="none" stroke="var(--_b)" stroke-width="${s(m)}">${j}</g>` : "") + ee;
  return { svg: ze("treeView", V, q, o, n, t, ye), width: V, height: q, links: [] };
}
var xt = { type: "treeView", parse: (t, e, n) => tt(et(t), n), render: ct };
export {
  xt as treeView
};
