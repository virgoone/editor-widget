var ys = Object.defineProperty;
var bs = (e, t, a) => t in e ? ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var Ct = (e, t, a) => bs(e, typeof t != "symbol" ? t + "" : t, a);
import { x as $s } from "./ELSXBIJH-BYqGUTHN.js";
import { b as gs, d as mt, m as As, p as Cs } from "./FKCDD66M-BxR87HMc.js";
import { H as ms, r as $e, t as z, u as St, a as Ss, x as Ke } from "./lazy-CehDEl4q.js";
import { m as Es, c as Ts } from "./DKTLEL5E-BCFlW8pF.js";
import { F as ws, S as Rs, D as xs, w as Is } from "./HWDLEDTA-Ctstf22F.js";
import { g as Et, _ as Pt, h as Tt, y as at, x as g, f as q, a as je, b as _s, $ as Os } from "./RZSVICHU-DoNHkG46.js";
var Gt = "EOF USECASE ACTOR SYSTEM_BOUNDARY END DIRECTION TD TB BT LR RL NOTE FOR JSON CLASS_DEF CLASS STYLE INCLUDE EXTEND TRUE FALSE IDENTIFIER NUMBER AT COMMA COLON HASH_COLOR CSS_IDENTIFIER CSS_ESCAPED_COMMA DASH DOT PERCENT CSS_PUNCTUATION LABEL_PUNCTUATION LABEL_SYMBOL PLAIN_STRING MARKDOWN_STRING UNCLOSED_MARKDOWN_STRING COMMENT NEWLINE ACC_DESCR_BLOCK ACC_TITLE_LINE ACC_DESCR_LINE JSON_DECLARATION_START JSON_OBJECT_LITERAL UNCLOSED_JSON_OBJECT_LITERAL GENERALIZATION DEPENDENCY_ARROW STEREOTYPE_START STEREOTYPE_END STEREOTYPE_TEXT UNCLOSED_STEREOTYPE_TEXT CLASS_SEPARATOR FORWARD_SOLID BACKWARD_SOLID FORWARD_CIRCLE BACKWARD_CIRCLE FORWARD_CROSS BACKWARD_CROSS MARKERLESS_SOLID METADATA_START LBRACE RBRACE LBRACKET RBRACKET LPAREN RPAREN".split(" "), we = 1, Ht = 2, le = new Uint8Array(128);
for (let e = 48; e <= 57; e++) le[e] = we;
for (let e = 65; e <= 90; e++) le[e] = le[e + 32] = we;
le[95] = we;
for (let e of "!#$&*+/=?^|~") le[e.charCodeAt(0)] = Ht;
var wt = [0, 12, 5, 14, 3, 9, 2, 2, 2, 2, 2, 4, 3, 4, 8, 5, 5, 7, 6, 4, 5];
function Le(e) {
  return e < 128 && (le[e] & we) !== 0;
}
function ze(e, t, a) {
  for (let r = 0; r < a.length; r++) if ((e.charCodeAt(t + r) | 32) !== a.charCodeAt(r)) return !1;
  return !0;
}
function ks(e, t, a) {
  switch (a) {
    case 97:
      return e.startsWith("actor", t) ? 2 : 0;
    case 115:
      return e.startsWith("systemBoundary", t) ? 3 : e.startsWith("style", t) ? 16 : 0;
    case 101:
      return e.startsWith("end", t) ? 4 : ze(e, t, "extend") ? 18 : 0;
    case 69:
      return ze(e, t, "extend") ? 18 : 0;
    case 100:
      return e.startsWith("direction", t) ? 5 : 0;
    case 84:
      return e.startsWith("TD", t) ? 6 : e.startsWith("TB", t) ? 7 : 0;
    case 66:
      return e.startsWith("BT", t) ? 8 : 0;
    case 76:
      return e.startsWith("LR", t) ? 9 : 0;
    case 82:
      return e.startsWith("RL", t) ? 10 : 0;
    case 110:
      return e.startsWith("note", t) ? 11 : 0;
    case 102:
      return e.startsWith("for", t) ? 12 : e.startsWith("false", t) ? 20 : 0;
    case 106:
      return e.startsWith("json", t) ? 13 : 0;
    case 99:
      return e.startsWith("classDef", t) ? 14 : e.startsWith("class", t) ? 15 : 0;
    case 105:
    case 73:
      return ze(e, t, "include") ? 17 : 0;
    case 116:
      return e.startsWith("true", t) ? 19 : 0;
    case 117:
      return e.startsWith("usecase-beta", t) ? 1 : 0;
    default:
      return 0;
  }
}
function Re(e, t) {
  let a = 1, r = 0;
  for (let n = 0; n < t; n++) {
    let l = e.charCodeAt(n);
    l !== 10 && l !== 13 || (l === 13 && n + 1 < t && e.charCodeAt(n + 1) === 10 && n++, a++, r = n + 1);
  }
  return [a, t - r + 1];
}
function Ns(e, t, a) {
  let [r, n] = Re(e, t);
  return `line ${r}, column ${n} [${t},${a})`;
}
function Kt(e, t, a) {
  for (let r = t + 1; r < e.length; r++) {
    let n = e.charCodeAt(r);
    if (n === a) return r + 1;
    if (n === 10 || n === 13) return -1;
  }
  return -1;
}
function vs(e, t) {
  let a = e.charCodeAt(t);
  return a !== 34 && a !== 39 ? !0 : a === 34 && e.charCodeAt(t + 1) === 96 || Kt(e, t, a) !== -1;
}
function Rt(e, t, a) {
  let [r, n] = Re(e, t);
  return new Ke(`Error lexing usecase diagram: unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${a} characters. at line ${r}, column ${n} [${t},${t + a})`, "syntax", { type: "usecase", line: r, column: n });
}
function Ls(e) {
  let t = [], a = [], r = [], n = e.length, l = 0, c = !0, b = !1;
  for (; l < n; ) {
    let h = e.charCodeAt(l);
    if (h === 32 || h === 9) {
      l++;
      continue;
    }
    let u, d = l + 1, w = !1;
    if (h < 128 && (le[h] & we) !== 0) {
      if (u = 0, h === 97 && c && e.startsWith("acc", l)) {
        let i = e.startsWith("Descr", l + 3);
        if (i || e.startsWith("Title", l + 3)) {
          let A = l + 8;
          for (; $e(e.charCodeAt(A)); ) A++;
          let O = e.charCodeAt(A);
          if (O === 58) for (u = i ? 42 : 41, d = A + 1; d < n && e.charCodeAt(d) !== 10 && e.charCodeAt(d) !== 13; ) d++;
          else if (O === 123 && i && !b) {
            let _ = e.indexOf("}", A + 1);
            _ === -1 ? b = !0 : (u = 40, d = _ + 1);
          }
        }
      } else if (h === 106 && e.startsWith("json", l) && $e(e.charCodeAt(l + 4))) {
        let i = l + 5;
        for (; $e(e.charCodeAt(i)); ) i++;
        let A = i;
        for (; Le(e.charCodeAt(i)); ) i++;
        if (i > A) {
          for (; $e(e.charCodeAt(i)); ) i++;
          if (e.charCodeAt(i) === 64) {
            for (i++; $e(e.charCodeAt(i)); ) i++;
            if (e.charCodeAt(i) === 123) {
              t.push(43), a.push(l), r.push(i), l = i;
              let O = 0, _ = !1, v = !1, R = i;
              for (; R < n; R++) {
                let W = e.charCodeAt(R);
                if (_) v ? v = !1 : W === 92 ? v = !0 : W === 34 && (_ = !1);
                else if (W === 34) _ = !0;
                else if (W === 123) O++;
                else if (W === 125 && --O === 0) break;
              }
              t.push(R < n ? 44 : 45), a.push(i), l = R < n ? R + 1 : n, r.push(l), c = !1;
              continue;
            }
          }
        }
      }
      if (u === 0) {
        for (; d < n && Le(e.charCodeAt(d)); ) d++;
        let i = ks(e, l, h);
        if (i !== 0) i === 1 || d - l === wt[i] ? (u = i, d = l + wt[i]) : u = 21;
        else if ((h === 111 || h === 120) && e.charCodeAt(l + 1) === 45 && e.charCodeAt(l + 2) === 45) u = h === 111 ? 56 : 58, d = l + 3;
        else if (z(h)) {
          let A = l + 1;
          for (; z(e.charCodeAt(A)); ) A++;
          if (e.charCodeAt(A) === 46 && z(e.charCodeAt(A + 1))) {
            for (u = 22, d = A + 2; z(e.charCodeAt(d)); ) d++;
            for (; St(e.charCodeAt(d)); ) d++;
          } else u = 21;
        } else for (u = 21; e.charCodeAt(d) === 45 && Le(e.charCodeAt(d + 1)); ) for (u = 27, d += 2; Le(e.charCodeAt(d)); ) d++;
      }
    } else if (h === 10) u = 39, w = !0;
    else if (h === 13) u = 39, w = !0, e.charCodeAt(d) === 10 && d++;
    else if (h === 34 || h === 39) {
      if (h === 34 && e.charCodeAt(l + 1) === 96) {
        let i = e.indexOf('`"', l + 2);
        u = i === -1 ? 37 : 36, d = i === -1 ? n : i + 2;
      } else if (u = 35, d = Kt(e, l, h), d === -1) {
        let i = l + 1;
        for (; i < n && !vs(e, i); ) i++;
        throw Rt(e, l, i - l);
      }
    } else if (h === 37) if (c && e.charCodeAt(d) === 37) for (u = 38; d < n && e.charCodeAt(d) !== 10 && e.charCodeAt(d) !== 13; ) d++;
    else u = 31;
    else if (h === 45) if (e.charCodeAt(d) !== 45) u = 29;
    else {
      for (; e.charCodeAt(d) === 45; ) d++;
      let i = e.charCodeAt(d), A = d - l === 2;
      A && i === 124 && e.charCodeAt(d + 1) === 62 ? (u = 46, d += 2) : i === 62 ? (u = 53, d++) : A && (i === 111 || i === 120) ? (u = i === 111 ? 55 : 57, d++) : u = 59;
    }
    else if (h === 46) {
      let i = e.charCodeAt(d);
      if (i === 46 && e.charCodeAt(d + 1) === 62) u = 47, d += 2;
      else if (z(i)) {
        for (u = 22; z(e.charCodeAt(d)); ) d++;
        for (; St(e.charCodeAt(d)); ) d++;
      } else u = 30;
    } else if (h === 60) if (e.charCodeAt(d) === 60) {
      if (t.push(48), a.push(l), r.push(l + 2), c = !1, l += 2, l >= n) break;
      if (e.charCodeAt(l) === 62 && e.charCodeAt(l + 1) === 62) u = 49, d = l + 2;
      else {
        let i = l, A = !1;
        for (; i < n; i++) {
          let O = e.charCodeAt(i);
          if (O === 10 || O === 13) break;
          if (O === 62 && e.charCodeAt(i + 1) === 62) {
            A = !0;
            break;
          }
        }
        if (A && e.slice(l, i).trim() !== "") t.push(50), a.push(l), r.push(i), u = 49, l = i, d = i + 2;
        else {
          for (; i < n && e.charCodeAt(i) !== 10 && e.charCodeAt(i) !== 13; ) i++;
          if (i === l) {
            for (; i < n && (e.charCodeAt(i) === 10 || e.charCodeAt(i) === 13); ) i++;
            throw Rt(e, l, i - l);
          }
          u = 51, d = i;
        }
      }
    } else if (e.charCodeAt(d) === 45 && e.charCodeAt(d + 1) === 45) for (u = 54, d += 2; e.charCodeAt(d) === 45; ) d++;
    else u = 33;
    else if (h === 58) e.charCodeAt(d) === 58 && e.charCodeAt(d + 1) === 58 ? (u = 52, d += 2) : u = 25;
    else if (h === 64) e.charCodeAt(d) === 123 ? (u = 60, d++) : u = 23;
    else if (h === 123) u = 61;
    else if (h === 125) u = 62;
    else if (h === 91) u = 63;
    else if (h === 93) u = 64;
    else if (h === 40) u = 65;
    else if (h === 41) u = 66;
    else if (h === 44) u = 24;
    else if (h === 35) {
      for (; Ss(e.charCodeAt(d)); ) d++;
      u = d > l + 1 ? 26 : 32;
    } else if (h === 92) e.charCodeAt(d) === 44 ? (u = 28, d++) : u = 33;
    else if (h < 127 && h > 32) u = (le[h] & Ht) !== 0 ? 32 : 33;
    else for (u = 34; d < n; ) {
      let i = e.charCodeAt(d);
      if (i >= 32 && i < 127 || i === 9 || i === 10 || i === 13) break;
      d++;
    }
    t.push(u), a.push(l), r.push(d), l = d, c = w;
  }
  for (let h = 0; h < 3; h++) t.push(0), a.push(n), r.push(n);
  return { types: t, starts: a, ends: r };
}
function Ds() {
  return { type: "usecase", actors: /* @__PURE__ */ new Map(), useCases: /* @__PURE__ */ new Map(), systemBoundaries: /* @__PURE__ */ new Map(), relationships: [], notes: /* @__PURE__ */ new Map(), jsonNodes: /* @__PURE__ */ new Map(), classDefs: /* @__PURE__ */ new Map(), direction: "LR", title: void 0, accTitle: "", accDescr: "", accDescription: "", source: "", headerSpan: [0, 0], statements: [] };
}
function Ms() {
  return { elements: [], boundaries: [], jsons: [], relationships: [], notes: [], metadata: [], classes: [], styles: [], classDefs: [], direction: void 0, accTitle: "", accDescription: "" };
}
function Ve(e, t) {
  if (t.length === 0) return;
  let a = new Set(e);
  for (let r of t) a.has(r) || (a.add(r), e.push(r));
}
function Ws(e) {
  let t = /* @__PURE__ */ new Set(["actor", "usecase", "boundary", "edge"]);
  for (let { key: a, value: r } of e) if (a === "icon") t.clear(), t.add("actor");
  else if (a === "animate" || a === "animation") t.clear(), t.add("edge");
  else if (a === "type") t.clear(), r === "rect" || r === "package" ? t.add("boundary") : (r === "normal" || r === "hollow" || r === "awesome") && t.add("actor");
  else if (a === "business") t.delete("boundary"), t.delete("edge");
  else return;
  return t.size === 1 ? [...t][0] : void 0;
}
function Bs(e, t, a, r, n) {
  let l = Ds(), { actors: c, useCases: b, systemBoundaries: h } = l, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), O = (s) => Ns(e, s[0], s[1]), _ = (s, p) => {
    let [f, y] = Re(e, p[0]);
    return new Ke(s, "semantic", { type: "usecase", line: f, column: y });
  }, v = (s, p) => {
    throw _(`${s} at ${O(p)}`, p);
  }, R = (s, p, f, y, S) => {
    let E = (x) => x === void 0 ? "" : ` (label "${x}")`;
    throw _(`${s} at ${O(p)}${E(y)}; previous declaration at ${O(f)}${E(S)}`, p);
  }, W = (s, p, f) => v(`Metadata property '${f.key}' is invalid for ${p} '${s}'`, f.keySpan), Y = (s, p) => {
    let f = A.get(s);
    (f === void 0 || p < f) && A.set(s, p);
  }, te = (s) => [...s].sort((p, f) => (A.get(p.id) ?? 0) - (A.get(f.id) ?? 0)), pe = (s, p) => {
    u.set(s.id, { kind: p, span: s.span, generated: s.generated, label: s.label.text });
  }, he = (s, p) => {
    let f = u.get(s.id);
    if (!f) return;
    let y = s.generated ? s.label.text : void 0, S = f.generated ? f.label : void 0;
    f.kind !== p && R(`ID '${s.id}' is declared as both ${f.kind} and ${p}`, s.span, f.span, y, S), (f.generated || s.generated) && R(`Generated ID '${s.id}' collides with another declaration`, s.span, f.span, y, S);
  }, xe = (s, p, f) => {
    let y = u.get(s);
    y && R(`ID '${s}' is declared more than once (${y.kind} and ${p})`, f, y.span, void 0, y.generated ? y.label : void 0), u.set(s, { kind: p, span: f, generated: !1 });
  }, Xe = (s, p, f) => {
    let { key: y, value: S } = p, E = (x) => {
      !f && x !== void 0 && x !== S && R(`Actor '${s.id}' has conflicting ${y} metadata`, p.keySpan, s.span);
    };
    y === "type" && (S === "normal" || S === "hollow" || S === "awesome") ? (E(s.actorType), s.actorType = S) : y === "icon" && typeof S == "string" ? (E(s.icon), s.icon = S) : y === "business" && typeof S == "boolean" ? (E(s.business), s.business = S) : W(s.id, "actor", p);
  }, ne = (s, p, f) => {
    for (let y of p ?? []) s.kind === "actor" ? Xe(s, y, f) : y.key === "business" && typeof y.value == "boolean" ? (!f && s.business !== void 0 && s.business !== y.value && R(`Use case '${s.id}' has conflicting business metadata`, y.keySpan, s.span), s.business = y.value) : W(s.id, "usecase", y);
  }, de = (s) => {
    let p;
    if (s.kind === "actor") {
      b.delete(s.id);
      let f = { id: s.id, label: s.label.text, labelType: s.label.type, business: s.business ?? !1, classes: [...s.classes], type: s.icon ? "icon" : s.actorType ?? "normal", styles: c.get(s.id)?.styles ?? [] };
      s.icon && (f.icon = s.icon), c.set(s.id, f), p = f;
    } else c.delete(s.id), p = { id: s.id, label: s.label.text, labelType: s.label.type, business: s.business ?? !1, classes: [...s.classes], shape: s.shape ?? "ellipse", styles: b.get(s.id)?.styles ?? [] }, b.set(s.id, p);
    s.stereotype && (p.stereotype = s.stereotype), s.parent?.id && (p.parentId = s.parent.id);
  }, Ie = (s) => {
    he(s, s.kind);
    let p = s.parent?.id ? s.parent : void 0, f = d.get(s.id);
    if (!f) {
      let y = { kind: s.kind, id: s.id, label: s.label, span: s.span, generated: s.generated, classes: [...s.classes], parent: p, shape: s.shape, stereotype: s.stereotype, stereotypeSpan: s.stereotype ? s.span : void 0 };
      ne(y, s.metadata, !1), d.set(s.id, y), pe(s, s.kind);
      return;
    }
    (f.label.text !== s.label.text || f.label.type !== s.label.type) && R(`ID '${s.id}' has conflicting labels`, s.span, f.span), s.shape && f.shape && s.shape !== f.shape && R(`Use case '${s.id}' has conflicting shapes`, s.span, f.span), p && f.parent?.id && p.id !== f.parent.id && R(`Element '${s.id}' belongs to more than one system boundary`, p.span, f.parent.span), s.stereotype && f.stereotype && s.stereotype !== f.stereotype && R(`Element '${s.id}' has conflicting stereotypes`, s.span, f.stereotypeSpan ?? f.span), f.shape ?? (f.shape = s.shape), f.parent ?? (f.parent = s.parent), f.stereotype ?? (f.stereotype = s.stereotype), f.stereotypeSpan ?? (f.stereotypeSpan = s.stereotype ? s.span : void 0), Ve(f.classes, s.classes), ne(f, s.metadata, !1);
  }, ye = (s) => {
    he(s, "boundary");
    let p = w.get(s.id);
    if (p) {
      (p.label.text !== s.label.text || p.label.type !== s.label.type) && R(`Boundary '${s.id}' has conflicting titles`, s.span, p.span), Ve(p.classes, s.classes);
      return;
    }
    w.set(s.id, { ...s, classes: [...s.classes], members: [] }), pe(s, "boundary");
  }, be = (s) => {
    s.classed && !s.declares && v(`Relationship endpoint '${s.id}' uses ::: without declaring the node`, s.span);
    let p = u.get(s.id);
    return p ? p.kind : (d.set(s.id, { ...s, kind: "usecase", shape: "ellipse", classes: [] }), pe(s, "usecase"), Y(s.id, s.span[0]), "usecase");
  }, ce = (s, p) => {
    let f = u.get(s)?.kind;
    return (f === "actor" ? c.get(s) : f === "usecase" ? b.get(s) : f === "boundary" ? h.get(s) : f === "json" ? l.jsonNodes.get(s) : i.get(s)) ?? v(`Class/style target '${s}' is unresolved or anonymous`, p);
  }, se = [];
  for (let { source: s, target: p } of t.relationships) Y(s.id, s.span[0]), Y(p.id, p.span[0]);
  for (let s of t.elements) Y(s.id, s.span[0]), se.push({ offset: s.span[0], run: () => Ie(s) });
  for (let s of t.boundaries) Y(s.id, s.span[0]), se.push({ offset: s.span[0], run: () => ye(s) });
  for (let s of t.jsons) Y(s.id, s.span[0]), se.push({ offset: s.span[0], run: () => xe(s.id, "json", s.span) });
  for (let { id: s, idSpan: p } of t.relationships) s && p && se.push({ offset: p[0], run: () => xe(s, "edge", p) });
  se.sort((s, p) => s.offset - p.offset);
  for (let s of se) s.run();
  for (let s of te(d.values())) de(s);
  for (let s of te(w.values())) h.set(s.id, { id: s.id, label: s.label.text, labelType: s.label.type, type: "rect", members: [], classes: [], styles: [] });
  for (let s of te(t.jsons)) l.jsonNodes.set(s.id, { id: s.id, value: s.value, propertyOrder: s.propertyOrder, classes: [...s.classes], styles: [] });
  let _e = 0;
  for (let s of t.relationships) {
    let { source: p, target: f, type: y } = s, S = be(p), E = be(f), x = (k) => k === "actor" || k === "usecase" || k === "json";
    x(S) || R(`Relationship source '${p.id}' cannot be ${S}`, p.span, u.get(p.id).span), x(E) || R(`Relationship target '${f.id}' cannot be ${E}`, f.span, u.get(f.id).span), (y === "include" || y === "extend") && (S !== "usecase" || E !== "usecase") && v(`${y} relationship requires use-case endpoints`, s.span), y === "generalization" && (S === "json" || S !== E) && v("Generalization requires actor-to-actor or use-case-to-use-case endpoints", s.span), y === "association" && (S === "json" || E === "json") && s.arrowType > 2 && v(`JSON relationship '${p.id}' to '${f.id}' permits only point, reversed-point, or markerless solid association`, s.span);
    let D = s.id ?? `edge-${_e++}`, N = { id: D, explicitId: !!s.id, source: p.id, target: f.id, type: y, arrowType: s.arrowType, minlen: s.minlen, classes: [], styles: [], animate: !1 };
    s.label && (N.label = s.label.text, N.labelType = s.label.type), l.relationships.push(N), i.set(D, N);
  }
  let m = new Map(c), $ = new Map(b);
  c.clear(), b.clear();
  for (let s of te(d.values())) {
    let p = m.get(s.id), f = $.get(s.id);
    p ? c.set(s.id, p) : f ? b.set(s.id, f) : de(s);
  }
  for (let { target: s, span: p, properties: f, statement: y } of t.metadata) {
    let S = u.get(s);
    if (!S) {
      let N = Ws(f);
      return v(`Metadata target '${s}' is unresolved${N ? ` (metadata implies ${N})` : ""}`, p);
    }
    let E = S.kind;
    E === "actor" || E === "usecase" ? ne(d.get(s), f, !0) : E === "edge" && (y.kind = "edgeMetadata", y.edges = [{ id: s, span: y.span, idSpan: p, metadata: y.metadata }], delete y.nodes);
    let x = w.get(s), D = i.get(s);
    for (let N of E === "actor" || E === "usecase" ? [] : f) {
      let { key: k, value: I } = N;
      E === "boundary" && x && k === "type" && (I === "rect" || I === "package") ? x.type = I : E === "edge" && D && k === "animate" && typeof I == "boolean" ? D.animate = I : E === "edge" && D && k === "animation" && (I === "fast" || I === "slow") ? (D.animation = I, D.animate = !0) : W(s, E, N);
    }
  }
  for (let s of l.relationships) s.animation && (s.animate = !0);
  for (let s of d.values()) s.kind === "actor" ? (s.icon && s.actorType && s.actorType !== "normal" && v(`Actor '${s.id}' cannot combine icon with type '${s.actorType}'`, s.span), s.business && (s.icon || s.actorType === "awesome") && v(`Business actor '${s.id}' must use normal or hollow geometry`, s.span)) : s.shape === "rect" && s.business && v(`Rectangular use case '${s.id}' cannot be a business use case`, s.span), de(s);
  for (let s of [...t.elements].sort((p, f) => p.span[0] - f.span[0])) {
    if (!s.parent?.id) continue;
    let p = w.get(s.parent.id).members;
    p.includes(s.id) || p.push(s.id);
  }
  for (let s of w.values()) {
    let p = h.get(s.id);
    p.type = s.type ?? "rect", p.members = s.members, p.classes = [...s.classes];
  }
  let T = 0;
  for (let s of t.notes) {
    let p = u.get(s.target);
    if (!p) return v(`Note target '${s.target}' is unresolved`, s.span);
    p.kind !== "actor" && p.kind !== "usecase" && R(`Note target '${s.target}' must be an actor or use case, not ${p.kind}`, s.span, p.span);
    let f = `note-${T++}`;
    l.notes.set(f, { id: f, target: s.target, label: s.label.text, labelType: s.label.type });
  }
  for (let s of t.classDefs) for (let p of s.ids) l.classDefs.set(p, { id: p, styles: [...s.styles] });
  for (let s of t.classes) for (let p of s.targets) Ve(ce(p.id, p.span).classes, s.classes);
  for (let s of t.styles) ce(s.target, s.span).styles.push(...s.styles);
  return l.direction = t.direction ?? l.direction, l.title = n, l.accTitle = t.accTitle, l.accDescription = t.accDescription, l.accDescr = t.accDescription.replace(/\n\s+/g, `
`), l.source = e, l.headerSpan = a, l.statements = r, l;
}
var K = class extends Error {
  constructor(t) {
    super("Invalid JSON token");
    Ct(this, "offset");
    this.offset = t;
  }
};
function xt(e) {
  let t = /* @__PURE__ */ new Map(), a = [], r = [], n = e.length, l = 0, c = "", b = 0, h = () => {
    for (; l < n; ) {
      let i = e.charCodeAt(l);
      if (i !== 32 && i !== 9 && i !== 10 && i !== 13) return;
      l++;
    }
  }, u = (i) => {
    l++;
    let A = "";
    for (; l < n; ) {
      let O = l, _ = e[l++];
      if (_ === '"') return A;
      if (_.charCodeAt(0) < 32) throw new K(O);
      if (_ !== "\\") {
        i && (A += _);
        continue;
      }
      let v = l, R = e[l++], W;
      if (R === '"' || R === "\\" || R === "/") W = R;
      else if (R === "b") W = "\b";
      else if (R === "f") W = "\f";
      else if (R === "n") W = `
`;
      else if (R === "r") W = "\r";
      else if (R === "t") W = "	";
      else if (R === "u") {
        let Y = e.slice(l, l + 4);
        if (!/^[\dA-Fa-f]{4}$/.test(Y)) throw new K(l);
        W = String.fromCharCode(parseInt(Y, 16)), l += 4;
      } else throw new K(v);
      i && (A += W);
    }
    throw new K(l);
  }, d = (i) => {
    for (let A = 0; A < i.length; A++) if (e[l + A] !== i[A]) throw new K(l + A);
    l += i.length;
  }, w = () => {
    if (e.charCodeAt(l) === 45 && l++, e.charCodeAt(l) === 48) l++;
    else if (z(e.charCodeAt(l))) for (; z(e.charCodeAt(l)); ) l++;
    else throw new K(l);
    if (e.charCodeAt(l) === 46) {
      if (l++, !z(e.charCodeAt(l))) throw new K(l);
      for (; z(e.charCodeAt(l)); ) l++;
    }
    if ((e.charCodeAt(l) | 32) === 101) {
      if (l++, (e.charCodeAt(l) === 43 || e.charCodeAt(l) === 45) && l++, !z(e.charCodeAt(l))) throw new K(l);
      for (; z(e.charCodeAt(l)); ) l++;
    }
  };
  for (h(); ; ) if (b === 0) {
    h();
    let i = e.charCodeAt(l);
    if (b = 2, i === 123) {
      l++;
      let A = [];
      t.set(c, A), a.push(c), h(), e.charCodeAt(l) === 125 ? l++ : (r.push({ object: !0, pointer: c, keys: A, ranges: /* @__PURE__ */ new Map(), key: "", from: 0, index: 0 }), b = 1);
    } else if (i === 91) l++, h(), e.charCodeAt(l) === 93 ? l++ : (r.push({ object: !1, pointer: c, keys: [], ranges: /* @__PURE__ */ new Map(), key: "", from: 0, index: 0 }), c += "/0", b = 0);
    else if (i === 34) u(!1);
    else if (i === 116) d("true");
    else if (i === 102) d("false");
    else if (i === 110) d("null");
    else if (i === 45 || z(i)) w();
    else throw new K(l);
  } else if (b === 1) {
    let i = r[r.length - 1];
    if (e.charCodeAt(l) !== 34) throw new K(l);
    let A = u(!0), O = i.ranges.get(A);
    if (O === void 0) i.keys.push(A);
    else for (let _ = O[0]; _ < O[1]; _++) t.delete(a[_]);
    if (i.key = A, i.from = a.length, h(), e.charCodeAt(l) !== 58) throw new K(l);
    l++, c = `${i.pointer}/${A.replaceAll("~", "~0").replaceAll("/", "~1")}`, b = 0;
  } else {
    let i = r[r.length - 1];
    if (i === void 0) break;
    i.object ? i.ranges.set(i.key, [i.from, a.length]) : i.index++, h();
    let A = e.charCodeAt(l);
    if (A === (i.object ? 125 : 93)) l++, r.pop();
    else {
      if (A !== 44) throw new K(l);
      l++, h(), c = `${i.pointer}/${i.index}`, b = i.object ? 1 : 0;
    }
  }
  if (h(), l !== n) throw new K(l);
  return t;
}
function lt(e, t, a, r) {
  let n = Math.min(Math.max(t, 0), e.length);
  for (let l = 0; l < n; l++) {
    let c = e.charCodeAt(l);
    c === 13 ? (a++, r = 1) : c === 10 ? (l === 0 || e.charCodeAt(l - 1) !== 13) && (a++, r = 1) : r++;
  }
  return [a, r];
}
function js(e, t, a, r) {
  let n = /\bposition (\d+)\b/.exec(e);
  if (n) return lt(t, parseInt(n[1], 10), a, r);
  let l = /\bline (\d+) column (\d+)\b/.exec(e);
  if (l) {
    let c = parseInt(l[1], 10), b = parseInt(l[2], 10);
    return [a + c - 1, c === 1 ? r + b - 1 : b];
  }
  if (/unexpected end|end of json input/i.test(e)) return lt(t, t.length, a, r);
}
function It(e, t, a) {
  return new Ke(`${e} (line ${t}, column ${a})`, "syntax", { type: "usecase", line: t, column: a });
}
function Fs(e, t) {
  let a;
  try {
    a = JSON.parse(e);
  } catch (r) {
    let n = r instanceof Error ? r.message : String(r), [l, c] = t(), b = js(n, e, l, c);
    if (!b) {
      let h = 0;
      try {
        xt(e);
      } catch (u) {
        u instanceof K && (h = u.offset);
      }
      b = lt(e, h, l, c);
    }
    throw It(`Invalid JSON: ${n}`, b[0], b[1]);
  }
  if (typeof a != "object" || a === null || Array.isArray(a)) {
    let [r, n] = t();
    throw It("JSON value must have an object root", r, n);
  }
  return { value: a, propertyOrder: xt(e) };
}
var Ut = 1, ot = 2, nt = 4, Yt = 8, Jt = 16, Xt = 32, zt = 64, Ue = "DEPENDENCY_ARROW|GENERALIZATION|FORWARD_SOLID|BACKWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|BACKWARD_CIRCLE|FORWARD_CROSS|BACKWARD_CROSS", Ye = "IDENTIFIER|PLAIN_STRING|MARKDOWN_STRING", Ps = "PLAIN_STRING|MARKDOWN_STRING|LABEL_TEXT", Vt = "ACC_TITLE_LINE|ACC_DESCR_LINE|ACC_DESCR_BLOCK|DIRECTION|ACTOR|SYSTEM_BOUNDARY|NOTE|JSON_DECLARATION_START|CLASS_DEF|CLASS|STYLE", Zt = "WORD|PLAIN_STRING|NUMBER|HASH_COLOR|CSS_IDENTIFIER|CSS_ESCAPED_COMMA|DASH|DOT|PERCENT|CSS_PUNCTUATION|COLON|LPAREN|RPAREN|LBRACKET|RBRACKET|LBRACE|RBRACE|AT|MARKERLESS_SOLID", ee = new Uint8Array(67);
function oe(e, t) {
  for (let a of e.split("|")) if (a === "WORD") for (let r = 1; r <= 21; r++) ee[r] |= t;
  else ee[Gt.indexOf(a)] |= t;
}
oe(`NEWLINE|COMMENT|${Vt}|${Ye}`, Ut);
oe(`IDENTIFIER|${Ue}`, ot);
oe(Zt, nt);
oe(`STEREOTYPE_START|CLASS_SEPARATOR|IDENTIFIER|${Ue}|NEWLINE|EOF`, Yt);
oe(`NEWLINE|COMMENT|ACTOR|${Ye}`, Jt);
oe("FORWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|FORWARD_CROSS", Xt);
oe("NEWLINE|IDENTIFIER|PLAIN_STRING|RBRACE", zt);
var Gs = /* @__PURE__ */ new Set(["allowmixing", "newpage", "package", "rectangle", "skinparam"]), U = "", C = [], P = [], H = [], o = 0, qt = 0, F, Ge, Fe = [], Qt = 0, es = 0;
function B(e) {
  return U.slice(P[e], H[e]);
}
function V(e) {
  return [P[e], H[e]];
}
function Je(e) {
  let [t, a] = Re(U, P[o]);
  throw new Ke(`Error parsing usecase diagram: ${e} at line ${t}, column ${a} [${P[o]},${H[o]})`, "syntax", { type: "usecase", line: t, column: a });
}
function ts(e) {
  Je(`Expecting token of type --> ${e} <-- but found --> '${B(o)}' <--`);
}
function j(e) {
  return C[o] !== e && ts(Gt[e]), o++;
}
function Z(e) {
  let t = e.split("|").map((a, r) => `  ${r + 1}. [${a}]`);
  Je(`Expecting: one of these possible Token sequences:
${t.join(`
`)}
but found: '${B(o)}'`);
}
function _t() {
  let e = Ye.split("|"), t = e.flatMap((n) => ["NEWLINE", "IDENTIFIER", "PLAIN_STRING", "RBRACE"].map((l) => `${n}, METADATA_START, ${l}`)), a = `STEREOTYPE_START|CLASS_SEPARATOR|IDENTIFIER|${Ue}|NEWLINE|EOF`.split("|"), r = e.flatMap((n, l) => (l === 0 ? ["LPAREN", "LBRACKET", ...a] : a).map((c) => `${n}, ${c}`));
  return [Vt, ...t, ...r, ...t].join("|");
}
function Ot(e) {
  return e >= 1 && e <= 21;
}
function kt(e) {
  return e >= 1 && e <= 34;
}
function ie() {
  qt = H[o - 1], C[o] === 39 ? o++ : C[o] !== 0 && Z("NEWLINE|EOF");
}
function Te(e) {
  let t = C[e] === 36 ? 2 : C[e] === 35 ? 1 : 0;
  return [P[e] + t, H[e] - t];
}
function rt(e) {
  let t = Te(e);
  return { text: U.slice(t[0], t[1]), type: C[e] === 36 ? "markdown" : "text", span: t };
}
function ss(e) {
  return e.replace(/\W/g, "_");
}
function me() {
  let e = C[o];
  if (e === 35 || e === 36) return rt(o++);
  kt(e) || Z(Ps);
  let t = o;
  for (; kt(C[o]); ) o++;
  let a = [P[t], H[o - 1]];
  return { text: U.slice(a[0], a[1]), type: "text", span: a };
}
function re(e) {
  return e === 21 || e === 35;
}
function Nt() {
  let e = o;
  re(C[o]) || Z("IDENTIFIER|PLAIN_STRING"), o++, j(25);
  let t = o, a = C[o];
  !re(a) && a !== 19 && a !== 20 && Z("IDENTIFIER|PLAIN_STRING|TRUE|FALSE"), o++;
  let r = Te(e), n = Te(t);
  return { key: U.slice(r[0], r[1]), value: a === 19 ? !0 : a === 20 ? !1 : U.slice(n[0], n[1]), span: [P[e], H[t]], keySpan: r, valueSpan: n };
}
function Hs() {
  let e = C[o], t = C[o + 1], a = C[o + 2];
  return e === 24 ? re(t) || t === 39 && (a === 39 || re(a)) : e !== 39 ? !1 : t === 24 || re(t) || t === 39 && (a === 39 || a === 24 || re(a));
}
function pt() {
  j(60);
  let e = [];
  for (; C[o] === 39; ) o++;
  if (re(C[o])) {
    for (e.push(Nt()); Hs(); ) {
      if (C[o] === 24) o++;
      else {
        for (; C[o] === 39; ) o++;
        C[o] === 24 && o++;
      }
      for (; C[o] === 39; ) o++;
      e.push(Nt());
    }
    for (C[o] === 24 && o++; C[o] === 39; ) o++;
  }
  return j(62), e;
}
function dt(e) {
  return e.map(({ key: t, span: a, keySpan: r, valueSpan: n }) => ({ key: t, span: a, keySpan: r, valueSpan: n }));
}
function ct(e, t) {
  do {
    o++;
    let a = j(21);
    e.push(B(a)), t.push(V(a));
  } while (C[o] === 24);
}
function as(e) {
  let t = o, a = C[o], r = { id: "", label: void 0, span: Te(t), generated: a !== 21, classes: [], classSpans: [], explicit: !1, nodeSpan: [0, 0] };
  if (a === 21) {
    o++, r.id = B(t);
    let n = C[o];
    n === 65 || e && n === 63 ? (o++, r.label = me(), j(n === 65 ? 66 : 64), r.shape = n === 65 ? "ellipse" : "rect") : r.label = rt(t);
  } else a === 35 || a === 36 ? (o++, r.label = rt(t), r.id = ss(r.label.text)) : Z(Ye);
  return r;
}
function He(e) {
  let t = o, a = as(!e);
  if (e && (a.shape = void 0), C[o] === 60 && (a.metadata = pt()), C[o] === 48) {
    o++;
    let r = j(50);
    j(49), a.stereotype = B(r).trim(), a.stereotypeSpan = V(r);
  }
  return C[o] === 52 && ct(a.classes, a.classSpans), a.explicit = !!(a.shape || a.metadata || a.stereotype), a.nodeSpan = [P[t], H[o - 1]], a;
}
function ut(e, t) {
  return { id: e.id, kind: t, label: e.label, span: e.span, generated: e.generated, parent: Ge, shape: e.shape, metadata: e.metadata, stereotype: e.stereotype, classes: e.classes };
}
function vt(e, t) {
  return { id: e.id, label: e.label, span: e.span, generated: e.generated, declares: t, classed: e.classes.length > 0 };
}
function ft(e, t) {
  let a = { id: e.id, span: e.nodeSpan, idSpan: e.span, labelSpan: e.label.span };
  return t && (a.defines = !0), e.stereotypeSpan && (a.stereotypeSpan = e.stereotypeSpan), e.metadata && (a.metadata = dt(e.metadata)), e.classSpans.length > 0 && (a.classSpans = e.classSpans), a;
}
function Ze(e) {
  if (C[o] < 1 || C[o] > 36) return !1;
  for (let t = o + 1; ; t++) {
    let a = C[t];
    if (a === 59 || (ee[a] & e) !== 0) return !0;
    if (a < 1 || a > 36) return !1;
  }
}
function ge(e) {
  let t = H[e] - P[e] - (C[e] === 59 ? 0 : 1);
  return Math.max(1, t - 1);
}
function ls() {
  let e = o, t = { type: "association", arrowType: 0, minlen: 1, target: void 0, span: [0, 0] };
  C[o] === 21 && C[o + 1] === 23 && (t.explicitId = B(o), t.explicitIdSpan = V(o), o += 2);
  let a = o, r = C[o++];
  if (r === 47) j(25), C[o] !== 17 && C[o] !== 18 && Z("INCLUDE|EXTEND"), t.type = C[o] === 17 ? "include" : "extend", t.label = { text: t.type, type: "text", span: V(o) }, o++;
  else if (r === 46) t.type = "generalization";
  else if (r === 53) t.minlen = ge(a);
  else if (r === 54) t.arrowType = 1, H[a] - P[a] === 3 && Ze(0) ? (t.label = me(), t.minlen = ge(j(59))) : t.minlen = ge(a);
  else if (r === 59) if (t.arrowType = 2, H[a] - P[a] === 2 && Ze(Xt)) {
    t.label = me();
    let n = C[o];
    n === 53 ? t.arrowType = 0 : n === 55 ? t.arrowType = 3 : n === 57 ? t.arrowType = 4 : n !== 59 && Z("FORWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|FORWARD_CROSS"), (t.arrowType === 0 || t.arrowType === 2) && (t.minlen = ge(o)), o++;
  } else t.minlen = ge(a);
  else r === 55 ? t.arrowType = 3 : r === 57 ? t.arrowType = 4 : r === 56 || r === 58 ? (t.arrowType = r === 56 ? 5 : 6, Ze(0) && (t.label = me(), j(59))) : (o--, Z(Ue));
  return t.target = He(!1), t.span = [P[e], H[o - 1]], t;
}
function Q(e) {
  return { kind: e, span: [0, 0] };
}
function ns(e, t, a, r) {
  let n = a.target;
  n.explicit && F.elements.push(ut(n, "usecase")), F.relationships.push({ source: vt(e, t), target: vt(n, n.explicit), span: a.span, id: a.explicitId, idSpan: a.explicitIdSpan, type: a.type, arrowType: a.arrowType, label: a.label, minlen: a.minlen }), r.push(ft(n, n.explicit));
  let l = Q("edge");
  return l.nodes = r, l.edges = [{ id: a.explicitId ?? `edge-${Qt++}`, span: l.span }], a.explicitIdSpan && (l.edges[0].idSpan = a.explicitIdSpan), a.label && (l.edges[0].labelSpan = a.label.span), l;
}
function rs(e) {
  let t = Q("node");
  return t.nodes = e, t;
}
function is(e) {
  o++;
  let t = [He(!0)], a;
  if (C[o] === 24) do
    o++, t.push(He(!0));
  while (C[o] === 24);
  else e && (ee[C[o]] & ot) !== 0 && (a = ls());
  ie();
  for (let n of t) F.elements.push(ut(n, "actor"));
  let r = t.map((n) => ft(n, !0));
  return a ? ns(t[0], !0, a, r) : rs(r);
}
function os(e) {
  let t = He(!1), a = e && (ee[C[o]] & ot) !== 0 ? ls() : void 0;
  ie(), a || (t.explicit = !0, t.shape ?? (t.shape = "ellipse")), t.explicit && F.elements.push(ut(t, "usecase"));
  let r = [ft(t, t.explicit)];
  return a ? ns(t, t.explicit, a, r) : rs(r);
}
function Ks() {
  o++;
  let e = as(!0), t = { id: e.id, label: e.label, span: e.span, generated: e.generated, classes: e.classes }, a = C[o] === 60 ? pt() : void 0;
  C[o] === 52 && ct(e.classes, e.classSpans), ie(), F.boundaries.push(t), Ge = t;
  let r = [];
  for (; (ee[C[o]] & Jt) !== 0; ) r.push(ps(!1));
  Ge = void 0;
  let n = j(4);
  ie();
  let l = Q("group");
  return l.group = t.id, l.idSpan = t.span, l.titleSpan = t.label.span, l.endSpan = V(n), l.classSpans = e.classSpans, r.length > 0 && (l.children = r), a && (l.metadata = dt(a), F.metadata.push({ target: t.id, span: t.span, properties: a, statement: l })), l;
}
function Lt() {
  let e = o, t = C[o];
  for (Ot(t) || t === 27 ? o++ : t === 59 ? (o++, Ot(C[o]) || ts("WORD"), o++) : Z("WORD|CSS_IDENTIFIER|MARKERLESS_SOLID"), j(25), (ee[C[o]] & nt) === 0 && Je(`Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <[${Zt.replaceAll("|", "] ,[")}]>
but found: '${B(o)}'`); (ee[C[o]] & nt) !== 0; ) o++;
  return U.slice(P[e], H[o - 1]).replaceAll("\\,", ",");
}
function Dt() {
  let e = [Lt()];
  for (; C[o] === 24; ) o++, e.push(Lt());
  return e;
}
function qe() {
  let e = [j(21)];
  for (; C[o] === 24; ) o++, e.push(j(21));
  return e;
}
function De(e) {
  let t = Te(e);
  return { id: B(e), span: t, idSpan: t };
}
function Us() {
  let e = o, t = C[o], a;
  if (t === 41 || t === 42 || t === 40) {
    o++;
    let r = B(e);
    t === 40 ? F.accDescription = r.slice(r.indexOf("{") + 1, r.lastIndexOf("}")).trim() : t === 42 ? F.accDescription = r.slice(r.indexOf(":") + 1).trim() : F.accTitle = r.slice(r.indexOf(":") + 1).trim(), a = Q(t === 41 ? "accTitle" : "accDescr");
  } else if (t === 5) {
    o++;
    let r = C[o];
    (r < 6 || r > 10) && Z("TD|TB|BT|LR|RL"), F.direction = r === 6 ? "TB" : B(o), o++, a = Q("direction");
  } else {
    if (t === 2) return is(!0);
    if (t === 3) return Ks();
    if (t === 11) {
      o++, j(12);
      let r = j(21), n = me();
      F.notes.push({ target: B(r), span: V(r), label: n }), a = Q("note"), a.ref = `note-${es++}`, a.refSpan = n.span, a.nodes = [De(r)];
    } else if (t === 43) {
      o++;
      let r = j(44), n = [], l = [];
      C[o] === 52 && ct(n, l);
      let c = P[e] + 4;
      for (; U.charCodeAt(c) === 32 || U.charCodeAt(c) === 9; ) c++;
      let b = c;
      for (; /\w/.test(U.charAt(b)); ) b++;
      let h = { id: U.slice(c, b), value: {}, propertyOrder: /* @__PURE__ */ new Map(), span: [c, b], classes: n };
      F.jsons.push(h), Fe.push([h, r]), a = Q("json"), a.nodes = [{ id: h.id, span: h.span, idSpan: h.span, defines: !0, classSpans: l }], a.classSpans = l;
    } else if (t === 14) {
      o++;
      let r = qe();
      F.classDefs.push({ ids: r.map(B), styles: Dt() }), a = Q("classDef"), a.ref = B(r[0]), a.refSpan = V(r[0]);
    } else if (t === 15) {
      o++;
      let r = qe(), n = qe();
      F.classes.push({ targets: r.map((l) => ({ id: B(l), span: V(l) })), classes: n.map(B) }), a = Q("classAssign"), a.ref = B(n[0]), a.refSpan = V(n[0]), a.nodes = r.map(De);
    } else if (t === 16) {
      o++;
      let r = j(21);
      F.styles.push({ target: B(r), span: V(r), styles: Dt() }), a = Q("style"), a.nodes = [De(r)];
    } else {
      let r = C[o + 1];
      if (r === 60) {
        (ee[C[o + 2]] & zt) === 0 && Z(_t()), o++;
        let n = De(e);
        t !== 21 && (n.id = ss(U.slice(n.span[0], n.span[1])));
        let l = pt();
        a = Q("metadata"), a.nodes = [n], a.metadata = dt(l), F.metadata.push({ target: n.id, span: n.span, properties: l, statement: a });
      } else return (!((ee[r] & Yt) !== 0 || t === 21 && (r === 65 || r === 63)) || t === 21 && Gs.has(B(e).toLowerCase())) && Z(_t()), os(!0);
    }
  }
  return ie(), a;
}
function ps(e) {
  let t = o, a = C[o];
  if (a === 39) return o++, { kind: "blank", span: V(t) };
  if (a === 38) return o++, ie(), { kind: "comment", span: V(t) };
  let r = e ? Us() : a === 2 ? is(!1) : os(!1);
  if (r.span = [P[t], qt], r.edges) for (let n of r.edges) n.span = r.span;
  return r;
}
function Ys(e, t) {
  U = e, { types: C, starts: P, ends: H } = Ls(e), o = 0, F = Ms(), Ge = void 0, Fe = [], Qt = 0, es = 0;
  try {
    let a = j(1);
    ie();
    let r = [];
    for (; (ee[C[o]] & Ut) !== 0; ) r.push(ps(!0));
    C[o] !== 0 && Je(`Redundant input, expecting EOF but found: ${B(o)}`);
    for (let [n, l] of Fe) {
      let c = Fs(B(l), () => Re(e, P[l]));
      n.value = c.value, n.propertyOrder = c.propertyOrder;
    }
    return Bs(e, F, V(a), r, t);
  } finally {
    U = "", C = P = H = Fe = [];
  }
}
var Js = { normal: "usecaseActor", hollow: "usecaseActorHollow", awesome: "usecaseActorAwesome", icon: "usecaseActorIcon" }, Qe = [["none", "arrow_point"], ["arrow_point", "none"], ["none", "none"], ["none", "arrow_circle"], ["none", "arrow_cross"], ["arrow_circle", "none"], ["arrow_cross", "none"]];
function Mt(e) {
  return typeof e == "string" ? e : e === null ? "null" : String(e);
}
function Xs(e) {
  let t = [], a = [[e.value, "", ""]], r = [];
  for (; a.length > 0; ) {
    let [n, l, c] = a.pop();
    if (r.length = 0, Array.isArray(n)) n.length === 0 ? t.push({ key: l, accessibleKey: l, value: "[]" }) : n.every((b) => b === null || typeof b != "object") ? n.forEach((b, h) => t.push({ key: h === 0 ? l : "", accessibleKey: l, value: Mt(b) })) : n.forEach((b, h) => r.push([b, `${l}[${h}]`, `${c}/${h}`]));
    else if (n !== null && typeof n == "object") {
      let b = n, h = e.propertyOrder.get(c) ?? Object.keys(b);
      h.length === 0 && t.push({ key: l, accessibleKey: l, value: "{}" });
      for (let u of h) r.push([Object.prototype.hasOwnProperty.call(b, u) ? b[u] : void 0, l ? `${l}.${u}` : u, `${c}/${u.replaceAll("~", "~0").replaceAll("/", "~1")}`]);
    } else t.push({ key: l, accessibleKey: l, value: Mt(n) });
    for (let b = r.length - 1; b >= 0; b--) a.push(r[b]);
  }
  return t;
}
function Ae(...e) {
  return e.filter(Boolean).join(" ");
}
function zs(e) {
  return e.type === "generalization" ? ["none", "extension"] : e.type !== "association" ? Qe[0] : Qe[e.arrowType] ?? Qe[2];
}
function Vs(e) {
  let t = [], a = [], r = (n) => {
    let l = /* @__PURE__ */ new Map();
    for (let c of ["default", ...n]) {
      let b = e.classDefs.get(c);
      if (b) for (let h of b.styles) {
        let u = h.trim(), d = u.indexOf(":"), w = (d === -1 ? u : u.slice(0, d)).trim();
        w && l.set(w, u);
      }
    }
    return [...l.values()];
  };
  for (let n of e.actors.values()) t.push({ id: n.id, label: n.label, labelType: n.labelType, shape: Js[n.type], isGroup: !1, padding: 10, cssClasses: Ae("default", "usecase-actor", `usecase-actor-${n.type}`, n.business && "usecase-business", ...n.classes), cssStyles: [...n.styles], cssCompiledStyles: r(n.classes), actorType: n.type, business: n.business, icon: n.icon || void 0, stereotype: n.stereotype || void 0, parentId: n.parentId || void 0 });
  for (let n of e.useCases.values()) {
    let l = n.shape === "ellipse";
    t.push({ id: n.id, label: n.label, labelType: n.labelType, shape: l ? n.business ? "usecaseBusiness" : "usecaseEllipse" : "rect", isGroup: !1, padding: l ? 20 : 10, cssClasses: Ae("default", "usecase-element", `usecase-${n.shape}`, n.business && "usecase-business", ...n.classes), cssStyles: [...n.styles], cssCompiledStyles: r(n.classes), business: n.business, stereotype: n.stereotype || void 0, parentId: n.parentId || void 0 });
  }
  for (let n of e.notes.values()) t.push({ id: n.id, label: n.label, labelType: n.labelType, shape: "note", isGroup: !1, padding: 10, cssClasses: "default usecase-note", cssStyles: [], cssCompiledStyles: r([]), noteTarget: n.target });
  for (let n of e.jsonNodes.values()) t.push({ id: n.id, label: n.id, labelType: "text", shape: "usecaseJsonTable", isGroup: !1, padding: 10, cssClasses: Ae("default", "usecase-json-table", ...n.classes), cssStyles: [...n.styles], cssCompiledStyles: r(n.classes), jsonRows: Xs(n) });
  for (let n of e.systemBoundaries.values()) t.push({ id: n.id, label: n.label, labelType: n.labelType, shape: "usecaseSystemBoundary", isGroup: !0, padding: 20, cssClasses: Ae("default", "system-boundary", `system-boundary-${n.type}`, ...n.classes), cssStyles: [...n.styles], cssCompiledStyles: r(n.classes), boundaryType: n.type });
  for (let n of e.relationships) {
    let l = n.type === "include" || n.type === "extend", [c, b] = zs(n), h = n.animate || n.animation !== void 0, u = { id: n.id, start: n.source, end: n.target, relationshipType: n.type, pattern: l ? "dotted" : "solid", arrowTypeStart: c, arrowTypeEnd: b, classes: Ae("default", "relationship", `relationship-${n.type}`, ...n.classes, h && `edge-animation-${n.animation ?? "fast"}`), style: [...n.styles], cssCompiledStyles: r(n.classes), animate: n.animate, animation: n.animation, minlen: n.minlen, explicitId: n.explicitId, internal: !1 };
    l ? (u.label = n.type, u.labelType = "text") : n.type === "association" && (n.label && (u.label = n.label), n.labelType && (u.labelType = n.labelType)), a.push(u);
  }
  for (let n of e.notes.values()) a.push({ id: `${n.id}-edge`, start: n.id, end: n.target, relationshipType: "note", pattern: "dotted", arrowTypeStart: "none", arrowTypeEnd: "none", classes: "default relationship relationship-note", style: [], cssCompiledStyles: r([]), animate: !1, minlen: 1, explicitId: !1, internal: !0 });
  return { nodes: t, edges: a };
}
var Zs = 32, qs = 16, Qs = 72, Me = 20, et = 26, ht = 40, Se = 60, Wt = 6, tt = 6, Ce = 10, st = 8, We = 9, Pe = 12, ea = 14, Ee = ' fill="var(--_s)" stroke="var(--_b)"';
function Bt(e, t, a) {
  let r = e.usecase?.[t];
  return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : a;
}
function ta(e) {
  return e.replace(/[&<>\\]/g, (t) => `&#${t.charCodeAt(0)};`);
}
function ae(e, t, a, r, n, l = 0) {
  return Pt(e && !t ? ta(e) : e, t, a, r, n, l);
}
function it(e, t, a, r) {
  let n = a === 1 || a === 2 ? 1 : -1, l = a === 1 || a === 3, c = (l ? e.w : e.h) / 2, b = 0;
  if (e.kind === 0) l ? (c = ht / 2 + 3, b = (Se - e.h) / 2) : c += 2;
  else if (e.kind === 1) {
    let h = (l ? e.h : e.w) / 2;
    c *= Math.sqrt(Math.max(1 - (r / h) ** 2, 0));
  }
  return l ? [t.x + n * c, t.y + b + r] : [t.x + r, t.y + n * c];
}
function ds(e, t) {
  let a = t === 1 || t === 3;
  if (e.kind === 0) return a ? Se * 0.5 : ht * 0.6;
  let r = a ? e.h : e.w;
  return e.kind === 1 ? r * 0.6 : r - 16;
}
function sa(e, t, a) {
  let r = /* @__PURE__ */ new Map(), n = (l, c, b, h) => {
    let u = t[l];
    if (u.isGroup) return;
    let d = c[b] - u.x, w = c[b + 1] - u.y, i;
    if (Math.abs(Math.abs(w) - u.h / 2) < 0.5) i = w < 0 ? 0 : 2;
    else if (Math.abs(Math.abs(d) - u.w / 2) < 0.5) i = d < 0 ? 3 : 1;
    else return;
    let A = l * 4 + i, O = { route: c, at: b, toward: c[h + (i & 1 ? 1 : 0)] }, _ = r.get(A);
    _ ? _.push(O) : r.set(A, [O]);
  };
  for (let l of e) {
    let c = l.route.length - 3;
    l.src === l.dst || c < 3 || (n(l.src, l.route, 0, 3), n(l.dst, l.route, c, c - 3));
  }
  for (let [l, c] of r) {
    let b = l >> 2, h = l & 3, u = a[b], d = c.length > 1 ? Math.min(ea, ds(u, h) / (c.length - 1)) : 0;
    c.sort((w, i) => w.toward - i.toward);
    for (let w = 0; w < c.length; w++) {
      let [i, A] = it(u, t[b], h, (w - (c.length - 1) / 2) * d);
      c[w].route[c[w].at] = i, c[w].route[c[w].at + 1] = A;
    }
  }
}
function aa(e, t, a, r, n) {
  let l = e - a * Pe, c = t - r * Pe, b = Pe * 0.5;
  return `<path class="pele-marker" d="M${g(e)},${g(t)}L${g(l - r * b)},${g(c + a * b)}L${g(l + r * b)},${g(c - a * b)}Z" fill="var(--_bg)" stroke="${n}" stroke-linejoin="round"/>`;
}
function Be(e) {
  return e === "extension" ? Pe : Is(e);
}
function jt(e, t, a, r, n, l) {
  return e === "extension" ? aa(t, a, r, n, l) : xs(e, t, a, r, n, l);
}
function la(e, t) {
  let a = e.node, r = e.style.shape, n = ` fill="none" stroke="var(--_b)"${e.style.line}`, l = -21, c = 9, b;
  return a.actorType === "hollow" ? (c = 8, b = `<circle cy="-21" r="8" fill="var(--_bg)" stroke="var(--_b)"${r}/><path d="M-20,-9H20V0H5.5L20,15.5L12,25.5L0,12L-12,25.5L-20,15.5L-5.5,0H-20Z" fill="var(--_bg)" stroke="var(--_b)" stroke-linejoin="round"${r}/>`) : a.actorType === "awesome" ? b = `<path d="M0,-30A11,11 0 1 1 0,-8A11,11 0 1 1 0,-30ZM-20,25C-20,9 -12,-3 0,-3C12,-3 20,9 20,25C20,28 18,30 15,30H-15C-18,30 -20,28 -20,25Z" fill="var(--_b)"${r}/>` : a.actorType === "icon" ? (l = -14, c = 12, b = `<rect x="-22" y="-26" width="44" height="44" rx="${je}"${Ee}${r}/><svg class="pele-icon" data-icon="${at(a.icon ?? "")}" x="-14" y="-18" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t?.(a.icon ?? "") ?? ""}</svg>`) : b = `<circle cy="-21" r="9"${Ee}${r}/><path d="M0,-12V10M-14,-3H14M0,10L-12,30M0,10L12,30"${n}/>`, a.business && (b += `<path class="pele-business" d="M${g(0.12 * c)},${g(l + 0.99 * c)}L${g(0.92 * c)},${g(l - 0.39 * c)}"${n}/>`), b;
}
function na(e, t, a) {
  return Es(e.direction) ? Ts(a, (r) => Ft(e, t, a, r)) : Ft(e, t, a, !1);
}
function Ft(e, t, a, r) {
  let n = Vs(e), l = a.fontSize ?? 16, c = Math.round(l * 0.875), b = Math.round(l * 0.8125), h = a.measurer ?? ms(a.fontFamily), u = a.padding ?? 8, d = a.icons, w = r ? "TB" : gs(e.direction), i = w === "LR" || w === "RL", A = /* @__PURE__ */ new Map(), O = [], _ = [];
  n.nodes.forEach((m, $) => A.set(m.id, $));
  for (let m of n.nodes) {
    let $ = Et(m.cssStyles.length > 0 ? m.cssCompiledStyles.concat(m.cssStyles) : m.cssCompiledStyles), T = ($.bold ? 1 : 0) | ($.italic ? 2 : 0), s = $.fontSize ?? l, p = m.labelType === "markdown", f = ae(m.stereotype && `«${m.stereotype}»`, !1, h, b, 200, T), y = { node: m, kind: 2, style: $, label: f, stereotype: f, w: 0, h: 0, rows: [], keyW: 0, headH: 0, loops: 0 }, S;
    if (m.isGroup) {
      y.kind = 4, y.label = ae(m.label, p, h, s, 4e3, T);
      let E = y.label.height;
      S = mt(0, 0), S.isGroup = !0, S.padX = Me, S.padBottom = Me, S.padTop = m.boundaryType === "package" ? E + 2 * tt + 16 : E > 0 ? E + 16 : Me, S.minW = y.label.width + 2 * Me;
    } else {
      if (m.jsonRows) {
        y.kind = 3, y.label = ae(m.label, !1, h, s, 4e3, T | 1);
        let E = 0;
        for (let x of m.jsonRows) {
          let D = ae(x.key, !1, h, c, 4e3, T), N = ae(x.value, !1, h, c, 260, T);
          y.rows.push([D, N]), y.keyW = Math.max(y.keyW, D.width), E = Math.max(E, N.width), y.h += Math.max(N.height, Math.round(c * 1.5)) + st;
        }
        y.keyW > 0 && (y.keyW += 2 * Ce), y.headH = Math.max(y.label.height, Math.round(s * 1.5)) + st, y.w = Math.max(y.label.width + 2 * Ce, y.rows.length > 0 ? y.keyW + E + 2 * Ce : 0, 72), y.h += y.headH;
      } else if (m.actorType) y.kind = 0, y.label = ae(m.label, p, h, s, 140, T), y.w = Math.max(ht, y.label.width, f.width), y.h = Se + Wt + f.height + y.label.height;
      else {
        y.label = ae(m.label, p, h, m.shape === "note" ? c : s, 180, T);
        let E = Math.max(y.label.width, f.width), x = y.label.height + f.height;
        m.shape === "usecaseEllipse" || m.shape === "usecaseBusiness" ? (y.kind = 1, y.w = Math.max(E + 2 * m.padding + (m.business ? 16 : 4), 88), y.h = Math.max(x + 28, 48)) : m.shape === "note" ? (y.w = E + 2 * m.padding + 6, y.h = x + 18) : (y.w = Math.max(E + 2 * m.padding + 12, 80), y.h = Math.max(x + 24, 44));
      }
      S = mt(y.w, y.h);
    }
    S.seq = O.length, O.push(y), _.push(S);
  }
  n.nodes.forEach((m, $) => {
    _[$].parent = m.parentId !== void 0 ? A.get(m.parentId) ?? -1 : -1;
  });
  let v = [], R = [], W = [];
  for (let m of n.edges) {
    let $ = A.get(m.start), T = A.get(m.end);
    if ($ === void 0 || T === void 0) continue;
    let s = m.relationshipType === "include" || m.relationshipType === "extend", p = ae(s ? `«${m.label}»` : m.label, m.labelType === "markdown", h, c, 200);
    $ === T && (O[$].loops++, i ? _[$].h += 2 * (et + (p.height > 0 ? p.height + 8 : 0)) : _[$].w += 2 * (et + (p.width > 0 ? p.width + 12 : 0))), W.push(m), R.push(p), v.push({ src: $, dst: T, minlen: m.minlen, labelW: p.width > 0 ? p.width + 12 : 0, labelH: p.height > 0 ? p.height + 4 : 0, route: [], labelX: 0, labelY: 0 });
  }
  let Y = As(_, v, w, { nodeSep: Bt(t, "nodeSpacing", Zs), edgeSep: qs, rankSep: Bt(t, "rankSpacing", Qs), portSep: 20 }), te = Pt(e.title, !1, h, l, 4e3, 1), pe = te.height > 0 ? te.height + 12 : 0, he = Math.max(Y.width, te.width), xe = u + (he - Y.width) / 2, Xe = u + pe;
  Cs(_, v, xe, Xe);
  let ne = Math.ceil(he + 2 * u), de = Math.ceil(Y.height + pe + 2 * u), Ie = /* @__PURE__ */ new Map();
  for (let m of v) $s(Ie, m.route);
  sa(v, _, O);
  let ye = "", be = "";
  for (let m = 0; m < O.length; m++) {
    let $ = O[m], T = _[m], s = $.node, p = Tt(s.cssClasses.replace(/^default\s?/, "")), f = at(s.id), y = $.style.text, S = $.style.shape, E = $.w, x = $.h;
    if ($.kind === 4) {
      let k = T.x - T.w / 2, I = T.y - T.h / 2, L = ` fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${S}`, M = ` class="pele-cluster-label" fill="var(--_m)"${y}`, G;
      if (s.boundaryType === "package") {
        let J = Math.min($.label.width + 2 * tt + 8, T.w), X = $.label.height + 2 * tt;
        G = `<rect class="pele-boundary-tab" x="${g(k)}" y="${g(I)}" width="${g(J)}" height="${g(X)}"${L}/><rect x="${g(k)}" y="${g(I + X)}" width="${g(T.w)}" height="${g(T.h - X)}"${L}/>` + q($.label, k + J / 2, I + X / 2, M, d);
      } else G = `<rect x="${g(k)}" y="${g(I)}" width="${g(T.w)}" height="${g(T.h)}" rx="${je}"${L}/>` + q($.label, ra(T, $.label.width, Ie), I + 8 + $.label.height / 2, M, d);
      ye += `<g class="pele-cluster pele-boundary${p}" data-id="${f}">${G}</g>`;
      continue;
    }
    let D, N;
    if ($.kind === 0) {
      N = "pele-actor";
      let k = -x / 2, I = k + Se + Wt + $.stereotype.height / 2;
      D = `<g class="pele-actor-figure" transform="translate(0,${g(k + Se / 2)})">${la($, d)}</g>` + q($.stereotype, 0, I, ` class="pele-stereotype" font-size="${b}" fill="var(--_m)"`, d) + q($.label, 0, x / 2 - $.label.height / 2, ` class="pele-label"${y}`, d);
    } else if ($.kind === 3) {
      N = "pele-json";
      let k = -E / 2, I = -x / 2 + $.headH, L = "", M = `M${g(k)},${g(I)}H${g(k + E)}`;
      $.keyW > 0 && (M += `M${g(k + $.keyW)},${g(I)}V${g(x / 2)}`);
      for (let [G, J] of $.rows) {
        let X = Math.max(J.height, Math.round(c * 1.5)) + st;
        L += q(G, k + Ce + G.width / 2, I + X / 2, ' class="pele-json-key" fill="var(--_m)"', d) + ia(J, k + $.keyW + Ce, I + X / 2, ` class="pele-json-value"${y}`, d), I += X;
      }
      D = `<rect x="${g(k)}" y="${g(-x / 2)}" width="${g(E)}" height="${g(x)}" rx="${je}"${Ee}${S}/><path class="pele-json-lines" d="${M}" fill="none" stroke="var(--_b)"${$.style.line}/>` + q($.label, 0, -x / 2 + $.headH / 2, ` class="pele-label" font-weight="var(--_hw)"${y}`, d) + `<g font-size="${c}">${L}</g>`;
    } else {
      let k = $.stereotype.height / 2, I;
      if ($.kind === 1) {
        if (N = "pele-usecase", I = `<ellipse rx="${g(E / 2)}" ry="${g(x / 2)}"${Ee}${S}/>`, s.business) {
          let L = E / 2 - 15, M = E / 2 - 5, G = (J) => x / 2 * Math.sqrt(1 - (J / (E / 2)) ** 2);
          I += `<path class="pele-business" d="M${g(L)},${g(G(L))}L${g(M)},${g(-G(M))}" fill="none" stroke="var(--_b)"${$.style.line}/>`;
        }
      } else if (s.shape === "note") {
        N = "pele-note";
        let L = E / 2, M = x / 2;
        I = `<path d="M${g(-L)},${g(-M)}H${g(L - We)}L${g(L)},${g(We - M)}V${g(M)}H${g(-L)}Z" fill="var(--_a)" stroke="var(--_b)" stroke-linejoin="round"${S}/><path d="M${g(L - We)},${g(-M)}V${g(We - M)}H${g(L)}" fill="none" stroke="var(--_b)" stroke-linejoin="round"${$.style.line}/>`;
      } else N = "pele-usecase", I = `<rect x="${g(-E / 2)}" y="${g(-x / 2)}" width="${g(E)}" height="${g(x)}" rx="${je}"${Ee}${S}/>`;
      D = I + q($.stereotype, 0, -$.label.height / 2, ` class="pele-stereotype" font-size="${b}" fill="var(--_m)"`, d) + q($.label, 0, k, ` class="pele-label"${s.shape === "note" ? ` font-size="${c}"` : ""}${y}`, d);
    }
    be += `<g class="pele-node ${N}${p}" data-id="${f}" transform="translate(${g(T.x)},${g(T.y)})">${D}</g>`;
  }
  let ce = "", se = "", _e = /* @__PURE__ */ new Map();
  for (let m = 0; m < v.length; m++) {
    let $ = v[m], T = W[m], s = R[m], p = T.style.length > 0 || T.cssCompiledStyles.length > 0 ? Et(T.cssCompiledStyles.concat(T.style)) : void 0, f = T.arrowTypeStart, y = T.arrowTypeEnd, S;
    if ($.src === $.dst) {
      let D = _[$.src], N = O[$.src], k = _e.get($.src) ?? 0;
      _e.set($.src, k + 1);
      let I = i ? 2 : 1, L = Math.min(ds(N, I) / 2, 8 + k * 6), M = et + k * 8, [G, J] = it(N, D, I, -L), [X, Oe] = it(N, D, I, L), ke = Math.hypot(M, L) || 1, ue = i ? L / ke : M / ke, fe = i ? M / ke : L / ke, Ne = Be(f), yt = Be(y), bt = ($t, gt, At, ve) => i ? `${g($t + At * L * (ve ? 1 : 0))},${g(gt + ve)}` : `${g($t + ve)},${g(gt + At * L * (ve ? 1 : 0))}`, cs = i ? G - ue * Ne : G + ue * Ne, us = i ? J + fe * Ne : J - fe * Ne, fs = X + ue * yt, hs = Oe + fe * yt;
      S = { d: `M${g(cs)},${g(us)}C${bt(G, J, -1, M)} ${bt(X, Oe, 1, M)} ${g(fs)},${g(hs)}`, sx: G, sy: J, sdx: i ? ue : -ue, sdy: i ? -fe : fe, ex: X, ey: Oe, edx: -ue, edy: -fe }, i ? ($.labelX = D.x, $.labelY = Math.max(J, Oe) + M * 0.75 + 6 + s.height / 2) : ($.labelX = Math.max(G, X) + M * 0.75 + 8 + s.width / 2, $.labelY = D.y);
    } else {
      if ($.route.length < 6) continue;
      S = ws($.route, void 0, Be(f), Be(y));
    }
    let E = p?.stroke ? _s(p.stroke) : "var(--_l)", x = T.internal ? "2 3" : T.pattern === "dotted" ? "5 4" : T.animate ? "9 5" : "";
    if (ce += `<g class="pele-edge pele-${T.relationshipType}${Tt(T.classes.replace(/^default relationship relationship-\S+\s?/, ""))}" data-id="${at(T.id)}"${p?.line ?? ""}><path d="${S.d}"${x ? ` stroke-dasharray="${x}"` : ""}/>` + jt(f, S.sx, S.sy, S.sdx, S.sdy, E) + jt(y, S.ex, S.ey, S.edx, S.edy, E) + "</g>", s.width > 0) {
      let D = $.labelX, N = $.labelY, k = T.relationshipType === "include" || T.relationshipType === "extend";
      se += Rs(T.id, s, D, N, (k ? ' fill="var(--_m)"' : "") + (p?.text ?? ""), d);
    }
  }
  return { svg: Os("usecase", ne, de, l, a, e, q(te, ne / 2, u + te.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (ye ? `<g class="pele-clusters">${ye}</g>` : "") + (ce ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${ce}</g>` : "") + (se ? `<g class="pele-edge-labels" font-size="${c}">${se}</g>` : "") + `<g class="pele-nodes">${be}</g>`), width: ne, height: de, links: [] };
}
function ra(e, t, a) {
  let r = a.get(Math.round(e.y - e.h / 2));
  if (t === 0 || r === void 0) return e.x;
  let n = e.x - e.w / 2 + 6, l = e.x + e.w / 2 - 6, c = r.filter((i) => i > n && i < l).sort((i, A) => i - A);
  c.push(l);
  let b = t / 2 + 6, h = e.x, u = 1 / 0, d = 0, w = n;
  for (let i of c) {
    if (i - w >= 2 * b) {
      let A = Math.min(Math.max(e.x, w + b), i - b);
      Math.abs(A - e.x) < u && (u = Math.abs(A - e.x), h = A);
    } else u === 1 / 0 && i - w > d && (d = i - w, h = (w + i) / 2);
    w = i;
  }
  return h;
}
function ia(e, t, a, r, n) {
  if (e.lines.length < 2) return q(e, t + e.width / 2, a, r, n);
  let l = "";
  for (let c = 0; c < e.lines.length; c++) {
    let b = { ...e, lines: [e.lines[c]], widths: [e.widths[c]], height: e.lineHeight };
    l += q(b, t + e.widths[c] / 2, a - e.height / 2 + (c + 0.5) * e.lineHeight, r, n);
  }
  return l;
}
var ya = { type: "usecase", parse: (e, t, a) => Ys(e, a), render: na };
export {
  ya as usecase
};
