var Cp = Object.defineProperty;
var kp = (t, e, n) => e in t ? Cp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $t = (t, e, n) => kp(t, typeof e != "symbol" ? e + "" : e, n);
import { m as ot, f as Np, a as bp } from "./min-CkWT_XzJ.js";
import { b as Op, o as Lp, d as Pp, f as Mp, r as wl, a as na } from "./_baseUniq-CjFLd3Ed.js";
import { o as Dp } from "./isEmpty-BO6FiAO3.js";
function Fp(t, e) {
  return Op(ot(t, e));
}
function Gp(t, e) {
  return t && t.length ? Lp(t, Pp(e)) : [];
}
function ue(t) {
  return typeof t == "object" && t !== null && typeof t.$type == "string";
}
function ze(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string";
}
function Up(t) {
  return typeof t == "object" && t !== null && typeof t.name == "string" && typeof t.type == "string" && typeof t.path == "string";
}
function _i(t) {
  return typeof t == "object" && t !== null && ue(t.container) && ze(t.reference) && typeof t.message == "string";
}
class Pf {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, n) {
    return ue(e) && this.isSubtype(e.$type, n);
  }
  isSubtype(e, n) {
    if (e === n)
      return !0;
    let r = this.subtypes[e];
    r || (r = this.subtypes[e] = {});
    const i = r[n];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, n);
      return r[n] = s, s;
    }
  }
  getAllSubTypes(e) {
    const n = this.allSubtypes[e];
    if (n)
      return n;
    {
      const r = this.getAllTypes(), i = [];
      for (const s of r)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
}
function Pr(t) {
  return typeof t == "object" && t !== null && Array.isArray(t.content);
}
function Mf(t) {
  return typeof t == "object" && t !== null && typeof t.tokenType == "object";
}
function Df(t) {
  return Pr(t) && typeof t.fullText == "string";
}
class re {
  constructor(e, n) {
    this.startFn = e, this.nextFn = n;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let n = 0, r = e.next();
    for (; !r.done; )
      n++, r = e.next();
    return n;
  }
  toArray() {
    const e = [], n = this.iterator();
    let r;
    do
      r = n.next(), r.value !== void 0 && e.push(r.value);
    while (!r.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, n) {
    const r = this.map((i) => [
      e ? e(i) : i,
      n ? n(i) : i
    ]);
    return new Map(r);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new re(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (n) => {
      let r;
      if (!n.firstDone) {
        do
          if (r = this.nextFn(n.first), !r.done)
            return r;
        while (!r.done);
        n.firstDone = !0;
      }
      do
        if (r = n.iterator.next(), !r.done)
          return r;
      while (!r.done);
      return Ae;
    });
  }
  join(e = ",") {
    const n = this.iterator();
    let r = "", i, s = !1;
    do
      i = n.next(), i.done || (s && (r += e), r += Bp(i.value)), s = !0;
    while (!i.done);
    return r;
  }
  indexOf(e, n = 0) {
    const r = this.iterator();
    let i = 0, s = r.next();
    for (; !s.done; ) {
      if (i >= n && s.value === e)
        return i;
      s = r.next(), i++;
    }
    return -1;
  }
  every(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (!e(r.value))
        return !1;
      r = n.next();
    }
    return !0;
  }
  some(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (e(r.value))
        return !0;
      r = n.next();
    }
    return !1;
  }
  forEach(e) {
    const n = this.iterator();
    let r = 0, i = n.next();
    for (; !i.done; )
      e(i.value, r), i = n.next(), r++;
  }
  map(e) {
    return new re(this.startFn, (n) => {
      const { done: r, value: i } = this.nextFn(n);
      return r ? Ae : { done: !1, value: e(i) };
    });
  }
  filter(e) {
    return new re(this.startFn, (n) => {
      let r;
      do
        if (r = this.nextFn(n), !r.done && e(r.value))
          return r;
      while (!r.done);
      return Ae;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, n) {
    const r = this.iterator();
    let i = n, s = r.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = r.next();
    return i;
  }
  reduceRight(e, n) {
    return this.recursiveReduce(this.iterator(), e, n);
  }
  recursiveReduce(e, n, r) {
    const i = e.next();
    if (i.done)
      return r;
    const s = this.recursiveReduce(e, n, r);
    return s === void 0 ? i.value : n(s, i.value);
  }
  find(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (e(r.value))
        return r.value;
      r = n.next();
    }
  }
  findIndex(e) {
    const n = this.iterator();
    let r = 0, i = n.next();
    for (; !i.done; ) {
      if (e(i.value))
        return r;
      i = n.next(), r++;
    }
    return -1;
  }
  includes(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (r.value === e)
        return !0;
      r = n.next();
    }
    return !1;
  }
  flatMap(e) {
    return new re(() => ({ this: this.startFn() }), (n) => {
      do {
        if (n.iterator) {
          const s = n.iterator.next();
          if (s.done)
            n.iterator = void 0;
          else
            return s;
        }
        const { done: r, value: i } = this.nextFn(n.this);
        if (!r) {
          const s = e(i);
          if (Hi(s))
            n.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
        }
      } while (n.iterator);
      return Ae;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const n = e > 1 ? this.flat(e - 1) : this;
    return new re(() => ({ this: n.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a = r.iterator.next();
          if (a.done)
            r.iterator = void 0;
          else
            return a;
        }
        const { done: i, value: s } = n.nextFn(r.this);
        if (!i)
          if (Hi(s))
            r.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
      } while (r.iterator);
      return Ae;
    });
  }
  head() {
    const n = this.iterator().next();
    if (!n.done)
      return n.value;
  }
  tail(e = 1) {
    return new re(() => {
      const n = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(n).done)
          return n;
      return n;
    }, this.nextFn);
  }
  limit(e) {
    return new re(() => ({ size: 0, state: this.startFn() }), (n) => (n.size++, n.size > e ? Ae : this.nextFn(n.state)));
  }
  distinct(e) {
    return new re(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (n) => {
      let r;
      do
        if (r = this.nextFn(n.internalState), !r.done) {
          const i = e ? e(r.value) : r.value;
          if (!n.set.has(i))
            return n.set.add(i), r;
        }
      while (!r.done);
      return Ae;
    });
  }
  exclude(e, n) {
    const r = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = n ? n(i) : i;
      r.add(s);
    }
    return this.filter((i) => {
      const s = n ? n(i) : i;
      return !r.has(s);
    });
  }
}
function Bp(t) {
  return typeof t == "string" ? t : typeof t > "u" ? "undefined" : typeof t.toString == "function" ? t.toString() : Object.prototype.toString.call(t);
}
function Hi(t) {
  return !!t && typeof t[Symbol.iterator] == "function";
}
const jp = new re(() => {
}, () => Ae), Ae = Object.freeze({ done: !0, value: void 0 });
function ie(...t) {
  if (t.length === 1) {
    const e = t[0];
    if (e instanceof re)
      return e;
    if (Hi(e))
      return new re(() => e[Symbol.iterator](), (n) => n.next());
    if (typeof e.length == "number")
      return new re(() => ({ index: 0 }), (n) => n.index < e.length ? { done: !1, value: e[n.index++] } : Ae);
  }
  return t.length > 1 ? new re(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const n = e.iterator.next();
        if (!n.done)
          return n;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: !1, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < t.length) {
        const n = t[e.collIndex++];
        Hi(n) ? e.iterator = n[Symbol.iterator]() : n && typeof n.length == "number" && (e.array = n);
      }
    } while (e.iterator || e.array || e.collIndex < t.length);
    return Ae;
  }) : jp;
}
class ko extends re {
  constructor(e, n, r) {
    super(() => ({
      iterators: r?.includeRoot ? [[e][Symbol.iterator]()] : [n(e)[Symbol.iterator]()],
      pruned: !1
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = !1); i.iterators.length > 0; ) {
        const a = i.iterators[i.iterators.length - 1].next();
        if (a.done)
          i.iterators.pop();
        else
          return i.iterators.push(n(a.value)[Symbol.iterator]()), a;
      }
      return Ae;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = !0;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
}
var Da;
(function(t) {
  function e(s) {
    return s.reduce((a, o) => a + o, 0);
  }
  t.sum = e;
  function n(s) {
    return s.reduce((a, o) => a * o, 0);
  }
  t.product = n;
  function r(s) {
    return s.reduce((a, o) => Math.min(a, o));
  }
  t.min = r;
  function i(s) {
    return s.reduce((a, o) => Math.max(a, o));
  }
  t.max = i;
})(Da || (Da = {}));
function Fa(t) {
  return new ko(t, (e) => Pr(e) ? e.content : [], { includeRoot: !0 });
}
function Kp(t, e) {
  for (; t.container; )
    if (t = t.container, t === e)
      return !0;
  return !1;
}
function Ga(t) {
  return {
    start: {
      character: t.startColumn - 1,
      line: t.startLine - 1
    },
    end: {
      character: t.endColumn,
      // endColumn uses the correct index
      line: t.endLine - 1
    }
  };
}
function Wi(t) {
  if (!t)
    return;
  const { offset: e, end: n, range: r } = t;
  return {
    range: r,
    offset: e,
    end: n,
    length: n - e
  };
}
var st;
(function(t) {
  t[t.Before = 0] = "Before", t[t.After = 1] = "After", t[t.OverlapFront = 2] = "OverlapFront", t[t.OverlapBack = 3] = "OverlapBack", t[t.Inside = 4] = "Inside", t[t.Outside = 5] = "Outside";
})(st || (st = {}));
function Hp(t, e) {
  if (t.end.line < e.start.line || t.end.line === e.start.line && t.end.character <= e.start.character)
    return st.Before;
  if (t.start.line > e.end.line || t.start.line === e.end.line && t.start.character >= e.end.character)
    return st.After;
  const n = t.start.line > e.start.line || t.start.line === e.start.line && t.start.character >= e.start.character, r = t.end.line < e.end.line || t.end.line === e.end.line && t.end.character <= e.end.character;
  return n && r ? st.Inside : n ? st.OverlapBack : r ? st.OverlapFront : st.Outside;
}
function Wp(t, e) {
  return Hp(t, e) > st.After;
}
const zp = /^[\w\p{L}]$/u;
function Vp(t, e) {
  if (t) {
    const n = qp(t, !0);
    if (n && _l(n, e))
      return n;
    if (Df(t)) {
      const r = t.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = t.content[i];
        if (_l(s, e))
          return s;
      }
    }
  }
}
function _l(t, e) {
  return Mf(t) && e.includes(t.tokenType.name);
}
function qp(t, e = !0) {
  for (; t.container; ) {
    const n = t.container;
    let r = n.content.indexOf(t);
    for (; r > 0; ) {
      r--;
      const i = n.content[r];
      if (e || !i.hidden)
        return i;
    }
    t = n;
  }
}
class Ff extends Error {
  constructor(e, n) {
    super(e ? `${n} at ${e.range.start.line}:${e.range.start.character}` : n);
  }
}
function Hr(t) {
  throw new Error("Error! The input value was not handled.");
}
const ii = "AbstractRule", si = "AbstractType", ra = "Condition", Cl = "TypeDefinition", ia = "ValueLiteral", Xn = "AbstractElement";
function Yp(t) {
  return F.isInstance(t, Xn);
}
const ai = "ArrayLiteral", oi = "ArrayType", Jn = "BooleanLiteral";
function Xp(t) {
  return F.isInstance(t, Jn);
}
const Zn = "Conjunction";
function Jp(t) {
  return F.isInstance(t, Zn);
}
const Qn = "Disjunction";
function Zp(t) {
  return F.isInstance(t, Qn);
}
const li = "Grammar", sa = "GrammarImport", er = "InferredType";
function Gf(t) {
  return F.isInstance(t, er);
}
const tr = "Interface";
function Uf(t) {
  return F.isInstance(t, tr);
}
const aa = "NamedArgument", nr = "Negation";
function Qp(t) {
  return F.isInstance(t, nr);
}
const ui = "NumberLiteral", ci = "Parameter", rr = "ParameterReference";
function em(t) {
  return F.isInstance(t, rr);
}
const ir = "ParserRule";
function Ne(t) {
  return F.isInstance(t, ir);
}
const fi = "ReferenceType", Ci = "ReturnType";
function tm(t) {
  return F.isInstance(t, Ci);
}
const sr = "SimpleType";
function nm(t) {
  return F.isInstance(t, sr);
}
const di = "StringLiteral", fn = "TerminalRule";
function Zt(t) {
  return F.isInstance(t, fn);
}
const ar = "Type";
function Bf(t) {
  return F.isInstance(t, ar);
}
const oa = "TypeAttribute", hi = "UnionType", or = "Action";
function vs(t) {
  return F.isInstance(t, or);
}
const lr = "Alternatives";
function jf(t) {
  return F.isInstance(t, lr);
}
const ur = "Assignment";
function Ht(t) {
  return F.isInstance(t, ur);
}
const cr = "CharacterRange";
function rm(t) {
  return F.isInstance(t, cr);
}
const fr = "CrossReference";
function No(t) {
  return F.isInstance(t, fr);
}
const dr = "EndOfFile";
function im(t) {
  return F.isInstance(t, dr);
}
const hr = "Group";
function bo(t) {
  return F.isInstance(t, hr);
}
const pr = "Keyword";
function Wt(t) {
  return F.isInstance(t, pr);
}
const mr = "NegatedToken";
function sm(t) {
  return F.isInstance(t, mr);
}
const gr = "RegexToken";
function am(t) {
  return F.isInstance(t, gr);
}
const yr = "RuleCall";
function zt(t) {
  return F.isInstance(t, yr);
}
const Tr = "TerminalAlternatives";
function om(t) {
  return F.isInstance(t, Tr);
}
const vr = "TerminalGroup";
function lm(t) {
  return F.isInstance(t, vr);
}
const $r = "TerminalRuleCall";
function um(t) {
  return F.isInstance(t, $r);
}
const Rr = "UnorderedGroup";
function Kf(t) {
  return F.isInstance(t, Rr);
}
const Ar = "UntilToken";
function cm(t) {
  return F.isInstance(t, Ar);
}
const Er = "Wildcard";
function fm(t) {
  return F.isInstance(t, Er);
}
class Hf extends Pf {
  getAllTypes() {
    return [Xn, ii, si, or, lr, ai, oi, ur, Jn, cr, ra, Zn, fr, Qn, dr, li, sa, hr, er, tr, pr, aa, mr, nr, ui, ci, rr, ir, fi, gr, Ci, yr, sr, di, Tr, vr, fn, $r, ar, oa, Cl, hi, Rr, Ar, ia, Er];
  }
  computeIsSubtype(e, n) {
    switch (e) {
      case or:
      case lr:
      case ur:
      case cr:
      case fr:
      case dr:
      case hr:
      case pr:
      case mr:
      case gr:
      case yr:
      case Tr:
      case vr:
      case $r:
      case Rr:
      case Ar:
      case Er:
        return this.isSubtype(Xn, n);
      case ai:
      case ui:
      case di:
        return this.isSubtype(ia, n);
      case oi:
      case fi:
      case sr:
      case hi:
        return this.isSubtype(Cl, n);
      case Jn:
        return this.isSubtype(ra, n) || this.isSubtype(ia, n);
      case Zn:
      case Qn:
      case nr:
      case rr:
        return this.isSubtype(ra, n);
      case er:
      case tr:
      case ar:
        return this.isSubtype(si, n);
      case ir:
        return this.isSubtype(ii, n) || this.isSubtype(si, n);
      case fn:
        return this.isSubtype(ii, n);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const n = `${e.container.$type}:${e.property}`;
    switch (n) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return si;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return ii;
      case "Grammar:usedGrammars":
        return li;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return ci;
      case "TerminalRuleCall:rule":
        return fn;
      default:
        throw new Error(`${n} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case Xn:
        return {
          name: Xn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case ai:
        return {
          name: ai,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case oi:
        return {
          name: oi,
          properties: [
            { name: "elementType" }
          ]
        };
      case Jn:
        return {
          name: Jn,
          properties: [
            { name: "true", defaultValue: !1 }
          ]
        };
      case Zn:
        return {
          name: Zn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Qn:
        return {
          name: Qn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case li:
        return {
          name: li,
          properties: [
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: !1 },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case sa:
        return {
          name: sa,
          properties: [
            { name: "path" }
          ]
        };
      case er:
        return {
          name: er,
          properties: [
            { name: "name" }
          ]
        };
      case tr:
        return {
          name: tr,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case aa:
        return {
          name: aa,
          properties: [
            { name: "calledByName", defaultValue: !1 },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case nr:
        return {
          name: nr,
          properties: [
            { name: "value" }
          ]
        };
      case ui:
        return {
          name: ui,
          properties: [
            { name: "value" }
          ]
        };
      case ci:
        return {
          name: ci,
          properties: [
            { name: "name" }
          ]
        };
      case rr:
        return {
          name: rr,
          properties: [
            { name: "parameter" }
          ]
        };
      case ir:
        return {
          name: ir,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "definition" },
            { name: "entry", defaultValue: !1 },
            { name: "fragment", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: !1 }
          ]
        };
      case fi:
        return {
          name: fi,
          properties: [
            { name: "referenceType" }
          ]
        };
      case Ci:
        return {
          name: Ci,
          properties: [
            { name: "name" }
          ]
        };
      case sr:
        return {
          name: sr,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case di:
        return {
          name: di,
          properties: [
            { name: "value" }
          ]
        };
      case fn:
        return {
          name: fn,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: !1 },
            { name: "hidden", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case ar:
        return {
          name: ar,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case oa:
        return {
          name: oa,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case hi:
        return {
          name: hi,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case or:
        return {
          name: or,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case lr:
        return {
          name: lr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case ur:
        return {
          name: ur,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case cr:
        return {
          name: cr,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case fr:
        return {
          name: fr,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: !1 },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case pr:
        return {
          name: pr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case mr:
        return {
          name: mr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case gr:
        return {
          name: gr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case yr:
        return {
          name: yr,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case Tr:
        return {
          name: Tr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case vr:
        return {
          name: vr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case $r:
        return {
          name: $r,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case Rr:
        return {
          name: Rr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Ar:
        return {
          name: Ar,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Er:
        return {
          name: Er,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}
const F = new Hf();
function dm(t) {
  for (const [e, n] of Object.entries(t))
    e.startsWith("$") || (Array.isArray(n) ? n.forEach((r, i) => {
      ue(r) && (r.$container = t, r.$containerProperty = e, r.$containerIndex = i);
    }) : ue(n) && (n.$container = t, n.$containerProperty = e));
}
function $s(t, e) {
  let n = t;
  for (; n; ) {
    if (e(n))
      return n;
    n = n.$container;
  }
}
function At(t) {
  const n = Ua(t).$document;
  if (!n)
    throw new Error("AST node has no document.");
  return n;
}
function Ua(t) {
  for (; t.$container; )
    t = t.$container;
  return t;
}
function Oo(t, e) {
  if (!t)
    throw new Error("Node must be an AstNode.");
  const n = e?.range;
  return new re(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = t[i];
        if (ue(s)) {
          if (r.keyIndex++, kl(s, n))
            return { done: !1, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a = r.arrayIndex++, o = s[a];
            if (ue(o) && kl(o, n))
              return { done: !1, value: o };
          }
          r.arrayIndex = 0;
        }
      }
      r.keyIndex++;
    }
    return Ae;
  });
}
function Wr(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new ko(t, (n) => Oo(n, e));
}
function hn(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new ko(t, (n) => Oo(n, e), { includeRoot: !0 });
}
function kl(t, e) {
  var n;
  if (!e)
    return !0;
  const r = (n = t.$cstNode) === null || n === void 0 ? void 0 : n.range;
  return r ? Wp(r, e) : !1;
}
function Wf(t) {
  return new re(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const n = e.keys[e.keyIndex];
      if (!n.startsWith("$")) {
        const r = t[n];
        if (ze(r))
          return e.keyIndex++, { done: !1, value: { reference: r, container: t, property: n } };
        if (Array.isArray(r)) {
          for (; e.arrayIndex < r.length; ) {
            const i = e.arrayIndex++, s = r[i];
            if (ze(s))
              return { done: !1, value: { reference: s, container: t, property: n, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return Ae;
  });
}
function hm(t, e) {
  const n = t.getTypeMetaData(e.$type), r = e;
  for (const i of n.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = zf(i.defaultValue));
}
function zf(t) {
  return Array.isArray(t) ? [...t.map(zf)] : t;
}
function C(t) {
  return t.charCodeAt(0);
}
function la(t, e) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.push(n);
  }) : e.push(t);
}
function Wn(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
function cn(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function pm() {
  throw Error("Internal Error - Should never get here!");
}
function Nl(t) {
  return t.type === "Character";
}
const zi = [];
for (let t = C("0"); t <= C("9"); t++)
  zi.push(t);
const Vi = [C("_")].concat(zi);
for (let t = C("a"); t <= C("z"); t++)
  Vi.push(t);
for (let t = C("A"); t <= C("Z"); t++)
  Vi.push(t);
const bl = [
  C(" "),
  C("\f"),
  C(`
`),
  C("\r"),
  C("	"),
  C("\v"),
  C("	"),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C("\u2028"),
  C("\u2029"),
  C(" "),
  C(" "),
  C("　"),
  C("\uFEFF")
], mm = /[0-9a-fA-F]/, pi = /[0-9]/, gm = /[1-9]/;
class Vf {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const n = this.disjunction();
    this.consumeChar("/");
    const r = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          Wn(r, "global");
          break;
        case "i":
          Wn(r, "ignoreCase");
          break;
        case "m":
          Wn(r, "multiLine");
          break;
        case "u":
          Wn(r, "unicode");
          break;
        case "y":
          Wn(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: n,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], n = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(n) };
  }
  alternative() {
    const e = [], n = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(n) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let n;
        switch (this.popChar()) {
          case "=":
            n = "Lookahead";
            break;
          case "!":
            n = "NegativeLookahead";
            break;
        }
        cn(n);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: n,
          value: r,
          loc: this.loc(e)
        };
    }
    return pm();
  }
  quantifier(e = !1) {
    let n;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        n = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        n = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        n = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            n = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), n = {
              atLeast: i,
              atMost: s
            }) : n = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && n === void 0)
          return;
        cn(n);
        break;
    }
    if (!(e === !0 && n === void 0) && cn(n))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), n.greedy = !1) : n.greedy = !0, n.type = "Quantifier", n.loc = this.loc(r), n;
  }
  atom() {
    let e;
    const n = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), cn(e))
      return e.loc = this.loc(n), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [C(`
`), C("\r"), C("\u2028"), C("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, n = !1;
    switch (this.popChar()) {
      case "d":
        e = zi;
        break;
      case "D":
        e = zi, n = !0;
        break;
      case "s":
        e = bl;
        break;
      case "S":
        e = bl, n = !0;
        break;
      case "w":
        e = Vi;
        break;
      case "W":
        e = Vi, n = !0;
        break;
    }
    if (cn(e))
      return { type: "Set", value: e, complement: n };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = C("\f");
        break;
      case "n":
        e = C(`
`);
        break;
      case "r":
        e = C("\r");
        break;
      case "t":
        e = C("	");
        break;
      case "v":
        e = C("\v");
        break;
    }
    if (cn(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: C("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: C(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: C(e) };
    }
  }
  characterClass() {
    const e = [];
    let n = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), n = !0); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, Nl(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, Nl(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          la(r.value, e), e.push(C("-")), la(i.value, e);
      } else
        la(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: n, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        return this.consumeChar("b"), { type: "Character", value: C("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    this.consumeChar("("), this.peekChar(0) === "?" ? (this.consumeChar("?"), this.consumeChar(":"), e = !1) : this.groupIdx++;
    const n = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: n
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (gm.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; pi.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (pi.test(e) === !1)
      throw Error("Expecting an integer");
    for (; pi.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: C(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return pi.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      // '(?=' or '(?!'
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let n = "";
    for (let i = 0; i < e; i++) {
      const s = this.popChar();
      if (mm.test(s) === !1)
        throw Error("Expecting a HexDecimal digits");
      n += s;
    }
    return { type: "Character", value: parseInt(n, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class Rs {
  visitChildren(e) {
    for (const n in e) {
      const r = e[n];
      e.hasOwnProperty(n) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
const ym = /\r?\n/gm, Tm = new Vf();
class vm extends Rs {
  constructor() {
    super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const n = String.fromCharCode(e.value);
    if (!this.multiline && n === `
` && (this.multiline = !0), e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const r = As(n);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const n = this.regex.substring(e.loc.begin, e.loc.end), r = new RegExp(n);
      this.multiline = !!`
`.match(r);
    }
    if (e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const n = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(n), this.isStarting && (this.startRegexp += n);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}
const ua = new vm();
function $m(t) {
  try {
    return typeof t == "string" && (t = new RegExp(t)), t = t.toString(), ua.reset(t), ua.visit(Tm.pattern(t)), ua.multiline;
  } catch {
    return !1;
  }
}
const Rm = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function Ba(t) {
  const e = typeof t == "string" ? new RegExp(t) : t;
  return Rm.some((n) => e.test(n));
}
function As(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Am(t) {
  return Array.prototype.map.call(t, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : As(e)).join("");
}
function Em(t, e) {
  const n = xm(t), r = e.match(n);
  return !!r && r[0].length > 0;
}
function xm(t) {
  typeof t == "string" && (t = new RegExp(t));
  const e = t, n = t.source;
  let r = 0;
  function i() {
    let s = "", a;
    function o(u) {
      s += n.substr(r, u), r += u;
    }
    function l(u) {
      s += "(?:" + n.substr(r, u) + "|$)", r += u;
    }
    for (; r < n.length; )
      switch (n[r]) {
        case "\\":
          switch (n[r + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? n[r + 2] === "{" ? l(n.indexOf("}", r) - r + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(n.indexOf("}", r) - r + 1) : l(2);
              break;
            case "k":
              l(n.indexOf(">", r) - r + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a = /\[(?:\\.|.)*?\]/g, a.lastIndex = r, a = a.exec(n) || [], l(a[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a = /\{\d+,?\d*\}/g, a.lastIndex = r, a = a.exec(n), a ? o(a[0].length) : l(1);
          break;
        case "(":
          if (n[r + 1] === "?")
            switch (n[r + 2]) {
              case ":":
                s += "(?:", r += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", r += 3, s += i() + ")";
                break;
              case "!":
                a = r, r += 3, i(), s += n.substr(a, r - a);
                break;
              case "<":
                switch (n[r + 3]) {
                  case "=":
                  case "!":
                    a = r, r += 4, i(), s += n.substr(a, r - a);
                    break;
                  default:
                    o(n.indexOf(">", r) - r + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++r, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), t.flags);
}
function Sm(t) {
  return t.rules.find((e) => Ne(e) && e.entry);
}
function Im(t) {
  return t.rules.filter((e) => Zt(e) && e.hidden);
}
function qf(t, e) {
  const n = /* @__PURE__ */ new Set(), r = Sm(t);
  if (!r)
    return new Set(t.rules);
  const i = [r].concat(Im(t));
  for (const a of i)
    Yf(a, n, e);
  const s = /* @__PURE__ */ new Set();
  for (const a of t.rules)
    (n.has(a.name) || Zt(a) && a.hidden) && s.add(a);
  return s;
}
function Yf(t, e, n) {
  e.add(t.name), Wr(t).forEach((r) => {
    if (zt(r) || n) {
      const i = r.rule.ref;
      i && !e.has(i.name) && Yf(i, e, n);
    }
  });
}
function wm(t) {
  if (t.terminal)
    return t.terminal;
  if (t.type.ref) {
    const e = Jf(t.type.ref);
    return e?.terminal;
  }
}
function _m(t) {
  return t.hidden && !Ba(Do(t));
}
function Cm(t, e) {
  return !t || !e ? [] : Lo(t, e, t.astNode, !0);
}
function Xf(t, e, n) {
  if (!t || !e)
    return;
  const r = Lo(t, e, t.astNode, !0);
  if (r.length !== 0)
    return n !== void 0 ? n = Math.max(0, Math.min(n, r.length - 1)) : n = 0, r[n];
}
function Lo(t, e, n, r) {
  if (!r) {
    const i = $s(t.grammarSource, Ht);
    if (i && i.feature === e)
      return [t];
  }
  return Pr(t) && t.astNode === n ? t.content.flatMap((i) => Lo(i, e, n, !1)) : [];
}
function km(t, e, n) {
  if (!t)
    return;
  const r = Nm(t, e, t?.astNode);
  if (r.length !== 0)
    return n !== void 0 ? n = Math.max(0, Math.min(n, r.length - 1)) : n = 0, r[n];
}
function Nm(t, e, n) {
  if (t.astNode !== n)
    return [];
  if (Wt(t.grammarSource) && t.grammarSource.value === e)
    return [t];
  const r = Fa(t).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a = i.value;
      a.astNode === n ? Wt(a.grammarSource) && a.grammarSource.value === e && s.push(a) : r.prune();
    }
  while (!i.done);
  return s;
}
function bm(t) {
  var e;
  const n = t.astNode;
  for (; n === ((e = t.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = $s(t.grammarSource, Ht);
    if (r)
      return r;
    t = t.container;
  }
}
function Jf(t) {
  let e = t;
  return Gf(e) && (vs(e.$container) ? e = e.$container.$container : Ne(e.$container) ? e = e.$container : Hr(e.$container)), Zf(t, e, /* @__PURE__ */ new Map());
}
function Zf(t, e, n) {
  var r;
  function i(s, a) {
    let o;
    return $s(s, Ht) || (o = Zf(a, a, n)), n.set(t, o), o;
  }
  if (n.has(t))
    return n.get(t);
  n.set(t, void 0);
  for (const s of Wr(e)) {
    if (Ht(s) && s.feature.toLowerCase() === "name")
      return n.set(t, s), s;
    if (zt(s) && Ne(s.rule.ref))
      return i(s, s.rule.ref);
    if (nm(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function Qf(t) {
  return ed(t, /* @__PURE__ */ new Set());
}
function ed(t, e) {
  if (e.has(t))
    return !0;
  e.add(t);
  for (const n of Wr(t))
    if (zt(n)) {
      if (!n.rule.ref || Ne(n.rule.ref) && !ed(n.rule.ref, e))
        return !1;
    } else {
      if (Ht(n))
        return !1;
      if (vs(n))
        return !1;
    }
  return !!t.definition;
}
function Po(t) {
  if (t.inferredType)
    return t.inferredType.name;
  if (t.dataType)
    return t.dataType;
  if (t.returnType) {
    const e = t.returnType.ref;
    if (e) {
      if (Ne(e))
        return e.name;
      if (Uf(e) || Bf(e))
        return e.name;
    }
  }
}
function Mo(t) {
  var e;
  if (Ne(t))
    return Qf(t) ? t.name : (e = Po(t)) !== null && e !== void 0 ? e : t.name;
  if (Uf(t) || Bf(t) || tm(t))
    return t.name;
  if (vs(t)) {
    const n = Om(t);
    if (n)
      return n;
  } else if (Gf(t))
    return t.name;
  throw new Error("Cannot get name of Unknown Type");
}
function Om(t) {
  var e;
  if (t.inferredType)
    return t.inferredType.name;
  if (!((e = t.type) === null || e === void 0) && e.ref)
    return Mo(t.type.ref);
}
function Lm(t) {
  var e, n, r;
  return Zt(t) ? (n = (e = t.type) === null || e === void 0 ? void 0 : e.name) !== null && n !== void 0 ? n : "string" : (r = Po(t)) !== null && r !== void 0 ? r : t.name;
}
function Do(t) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, n = Bn(t.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(n, r);
}
const Fo = /[\s\S]/.source;
function Bn(t, e) {
  if (om(t))
    return Pm(t);
  if (lm(t))
    return Mm(t);
  if (rm(t))
    return Gm(t);
  if (um(t)) {
    const n = t.rule.ref;
    if (!n)
      throw new Error("Missing rule reference.");
    return lt(Bn(n.definition), {
      cardinality: t.cardinality,
      lookahead: t.lookahead
    });
  } else {
    if (sm(t))
      return Fm(t);
    if (cm(t))
      return Dm(t);
    if (am(t)) {
      const n = t.regex.lastIndexOf("/"), r = t.regex.substring(1, n), i = t.regex.substring(n + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), lt(r, {
        cardinality: t.cardinality,
        lookahead: t.lookahead,
        wrap: !1
      });
    } else {
      if (fm(t))
        return lt(Fo, {
          cardinality: t.cardinality,
          lookahead: t.lookahead
        });
      throw new Error(`Invalid terminal element: ${t?.$type}`);
    }
  }
}
function Pm(t) {
  return lt(t.elements.map((e) => Bn(e)).join("|"), {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Mm(t) {
  return lt(t.elements.map((e) => Bn(e)).join(""), {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Dm(t) {
  return lt(`${Fo}*?${Bn(t.terminal)}`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Fm(t) {
  return lt(`(?!${Bn(t.terminal)})${Fo}*?`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Gm(t) {
  return t.right ? lt(`[${ca(t.left)}-${ca(t.right)}]`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    wrap: !1
  }) : lt(ca(t.left), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    wrap: !1
  });
}
function ca(t) {
  return As(t.value);
}
function lt(t, e) {
  var n;
  return (e.wrap !== !1 || e.lookahead) && (t = `(${(n = e.lookahead) !== null && n !== void 0 ? n : ""}${t})`), e.cardinality ? `${t}${e.cardinality}` : t;
}
function Um(t) {
  const e = [], n = t.Grammar;
  for (const r of n.rules)
    Zt(r) && _m(r) && $m(Do(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: zp
  };
}
var td = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Bm = typeof self == "object" && self && self.Object === Object && self, Ye = td || Bm || Function("return this")(), be = Ye.Symbol, nd = Object.prototype, jm = nd.hasOwnProperty, Km = nd.toString, zn = be ? be.toStringTag : void 0;
function Hm(t) {
  var e = jm.call(t, zn), n = t[zn];
  try {
    t[zn] = void 0;
    var r = !0;
  } catch {
  }
  var i = Km.call(t);
  return r && (e ? t[zn] = n : delete t[zn]), i;
}
var Wm = Object.prototype, zm = Wm.toString;
function Vm(t) {
  return zm.call(t);
}
var qm = "[object Null]", Ym = "[object Undefined]", Ol = be ? be.toStringTag : void 0;
function Nt(t) {
  return t == null ? t === void 0 ? Ym : qm : Ol && Ol in Object(t) ? Hm(t) : Vm(t);
}
function Ue(t) {
  return t != null && typeof t == "object";
}
var Xm = "[object Symbol]";
function Es(t) {
  return typeof t == "symbol" || Ue(t) && Nt(t) == Xm;
}
function xs(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var M = Array.isArray, Ll = be ? be.prototype : void 0, Pl = Ll ? Ll.toString : void 0;
function rd(t) {
  if (typeof t == "string")
    return t;
  if (M(t))
    return xs(t, rd) + "";
  if (Es(t))
    return Pl ? Pl.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Jm = /\s/;
function Zm(t) {
  for (var e = t.length; e-- && Jm.test(t.charAt(e)); )
    ;
  return e;
}
var Qm = /^\s+/;
function eg(t) {
  return t && t.slice(0, Zm(t) + 1).replace(Qm, "");
}
function Oe(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ml = NaN, tg = /^[-+]0x[0-9a-f]+$/i, ng = /^0b[01]+$/i, rg = /^0o[0-7]+$/i, ig = parseInt;
function sg(t) {
  if (typeof t == "number")
    return t;
  if (Es(t))
    return Ml;
  if (Oe(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Oe(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = eg(t);
  var n = ng.test(t);
  return n || rg.test(t) ? ig(t.slice(2), n ? 2 : 8) : tg.test(t) ? Ml : +t;
}
var Dl = 1 / 0, ag = 17976931348623157e292;
function og(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = sg(t), t === Dl || t === -Dl) {
    var e = t < 0 ? -1 : 1;
    return e * ag;
  }
  return t === t ? t : 0;
}
function Ss(t) {
  var e = og(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function On(t) {
  return t;
}
var lg = "[object AsyncFunction]", ug = "[object Function]", cg = "[object GeneratorFunction]", fg = "[object Proxy]";
function ht(t) {
  if (!Oe(t))
    return !1;
  var e = Nt(t);
  return e == ug || e == cg || e == lg || e == fg;
}
var fa = Ye["__core-js_shared__"], Fl = (function() {
  var t = /[^.]+$/.exec(fa && fa.keys && fa.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function dg(t) {
  return !!Fl && Fl in t;
}
var hg = Function.prototype, pg = hg.toString;
function Qt(t) {
  if (t != null) {
    try {
      return pg.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var mg = /[\\^$.*+?()[\]{}|]/g, gg = /^\[object .+?Constructor\]$/, yg = Function.prototype, Tg = Object.prototype, vg = yg.toString, $g = Tg.hasOwnProperty, Rg = RegExp(
  "^" + vg.call($g).replace(mg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ag(t) {
  if (!Oe(t) || dg(t))
    return !1;
  var e = ht(t) ? Rg : gg;
  return e.test(Qt(t));
}
function Eg(t, e) {
  return t?.[e];
}
function en(t, e) {
  var n = Eg(t, e);
  return Ag(n) ? n : void 0;
}
var ja = en(Ye, "WeakMap"), Gl = Object.create, xg = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!Oe(e))
      return {};
    if (Gl)
      return Gl(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
})();
function Sg(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function J() {
}
function Ig(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var wg = 800, _g = 16, Cg = Date.now;
function kg(t) {
  var e = 0, n = 0;
  return function() {
    var r = Cg(), i = _g - (r - n);
    if (n = r, i > 0) {
      if (++e >= wg)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Ng(t) {
  return function() {
    return t;
  };
}
var qi = (function() {
  try {
    var t = en(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), bg = qi ? function(t, e) {
  return qi(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ng(e),
    writable: !0
  });
} : On, Og = kg(bg);
function id(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function sd(t, e, n, r) {
  for (var i = t.length, s = n + -1; ++s < i; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function Lg(t) {
  return t !== t;
}
function Pg(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function Go(t, e, n) {
  return e === e ? Pg(t, e, n) : sd(t, Lg, n);
}
function ad(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && Go(t, e, 0) > -1;
}
var Mg = 9007199254740991, Dg = /^(?:0|[1-9]\d*)$/;
function Is(t, e) {
  var n = typeof t;
  return e = e ?? Mg, !!e && (n == "number" || n != "symbol" && Dg.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Uo(t, e, n) {
  e == "__proto__" && qi ? qi(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function zr(t, e) {
  return t === e || t !== t && e !== e;
}
var Fg = Object.prototype, Gg = Fg.hasOwnProperty;
function ws(t, e, n) {
  var r = t[e];
  (!(Gg.call(t, e) && zr(r, n)) || n === void 0 && !(e in t)) && Uo(t, e, n);
}
function Vr(t, e, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = e.length; ++s < a; ) {
    var o = e[s], l = void 0;
    l === void 0 && (l = t[o]), i ? Uo(n, o, l) : ws(n, o, l);
  }
  return n;
}
var Ul = Math.max;
function Ug(t, e, n) {
  return e = Ul(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, s = Ul(r.length - e, 0), a = Array(s); ++i < s; )
      a[i] = r[e + i];
    i = -1;
    for (var o = Array(e + 1); ++i < e; )
      o[i] = r[i];
    return o[e] = n(a), Sg(t, this, o);
  };
}
function Bo(t, e) {
  return Og(Ug(t, e, On), t + "");
}
var Bg = 9007199254740991;
function jo(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Bg;
}
function Xe(t) {
  return t != null && jo(t.length) && !ht(t);
}
function od(t, e, n) {
  if (!Oe(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Xe(n) && Is(e, n.length) : r == "string" && e in n) ? zr(n[e], t) : !1;
}
function jg(t) {
  return Bo(function(e, n) {
    var r = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && od(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++r < i; ) {
      var o = n[r];
      o && t(e, o, r, s);
    }
    return e;
  });
}
var Kg = Object.prototype;
function qr(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Kg;
  return t === n;
}
function Hg(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Wg = "[object Arguments]";
function Bl(t) {
  return Ue(t) && Nt(t) == Wg;
}
var ld = Object.prototype, zg = ld.hasOwnProperty, Vg = ld.propertyIsEnumerable, _s = Bl(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Bl : function(t) {
  return Ue(t) && zg.call(t, "callee") && !Vg.call(t, "callee");
};
function qg() {
  return !1;
}
var ud = typeof exports == "object" && exports && !exports.nodeType && exports, jl = ud && typeof module == "object" && module && !module.nodeType && module, Yg = jl && jl.exports === ud, Kl = Yg ? Ye.Buffer : void 0, Xg = Kl ? Kl.isBuffer : void 0, Mr = Xg || qg, Jg = "[object Arguments]", Zg = "[object Array]", Qg = "[object Boolean]", ey = "[object Date]", ty = "[object Error]", ny = "[object Function]", ry = "[object Map]", iy = "[object Number]", sy = "[object Object]", ay = "[object RegExp]", oy = "[object Set]", ly = "[object String]", uy = "[object WeakMap]", cy = "[object ArrayBuffer]", fy = "[object DataView]", dy = "[object Float32Array]", hy = "[object Float64Array]", py = "[object Int8Array]", my = "[object Int16Array]", gy = "[object Int32Array]", yy = "[object Uint8Array]", Ty = "[object Uint8ClampedArray]", vy = "[object Uint16Array]", $y = "[object Uint32Array]", B = {};
B[dy] = B[hy] = B[py] = B[my] = B[gy] = B[yy] = B[Ty] = B[vy] = B[$y] = !0;
B[Jg] = B[Zg] = B[cy] = B[Qg] = B[fy] = B[ey] = B[ty] = B[ny] = B[ry] = B[iy] = B[sy] = B[ay] = B[oy] = B[ly] = B[uy] = !1;
function Ry(t) {
  return Ue(t) && jo(t.length) && !!B[Nt(t)];
}
function Cs(t) {
  return function(e) {
    return t(e);
  };
}
var cd = typeof exports == "object" && exports && !exports.nodeType && exports, br = cd && typeof module == "object" && module && !module.nodeType && module, Ay = br && br.exports === cd, da = Ay && td.process, Et = (function() {
  try {
    var t = br && br.require && br.require("util").types;
    return t || da && da.binding && da.binding("util");
  } catch {
  }
})(), Hl = Et && Et.isTypedArray, Ko = Hl ? Cs(Hl) : Ry, Ey = Object.prototype, xy = Ey.hasOwnProperty;
function fd(t, e) {
  var n = M(t), r = !n && _s(t), i = !n && !r && Mr(t), s = !n && !r && !i && Ko(t), a = n || r || i || s, o = a ? Hg(t.length, String) : [], l = o.length;
  for (var u in t)
    (e || xy.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Is(u, l))) && o.push(u);
  return o;
}
function dd(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Sy = dd(Object.keys, Object), Iy = Object.prototype, wy = Iy.hasOwnProperty;
function hd(t) {
  if (!qr(t))
    return Sy(t);
  var e = [];
  for (var n in Object(t))
    wy.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Le(t) {
  return Xe(t) ? fd(t) : hd(t);
}
var _y = Object.prototype, Cy = _y.hasOwnProperty, Ka = jg(function(t, e) {
  if (qr(e) || Xe(e)) {
    Vr(e, Le(e), t);
    return;
  }
  for (var n in e)
    Cy.call(e, n) && ws(t, n, e[n]);
});
function ky(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Ny = Object.prototype, by = Ny.hasOwnProperty;
function Oy(t) {
  if (!Oe(t))
    return ky(t);
  var e = qr(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !by.call(t, r)) || n.push(r);
  return n;
}
function Ho(t) {
  return Xe(t) ? fd(t, !0) : Oy(t);
}
var Ly = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Py = /^\w*$/;
function Wo(t, e) {
  if (M(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Es(t) ? !0 : Py.test(t) || !Ly.test(t) || e != null && t in Object(e);
}
var Dr = en(Object, "create");
function My() {
  this.__data__ = Dr ? Dr(null) : {}, this.size = 0;
}
function Dy(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Fy = "__lodash_hash_undefined__", Gy = Object.prototype, Uy = Gy.hasOwnProperty;
function By(t) {
  var e = this.__data__;
  if (Dr) {
    var n = e[t];
    return n === Fy ? void 0 : n;
  }
  return Uy.call(e, t) ? e[t] : void 0;
}
var jy = Object.prototype, Ky = jy.hasOwnProperty;
function Hy(t) {
  var e = this.__data__;
  return Dr ? e[t] !== void 0 : Ky.call(e, t);
}
var Wy = "__lodash_hash_undefined__";
function zy(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Dr && e === void 0 ? Wy : e, this;
}
function Vt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Vt.prototype.clear = My;
Vt.prototype.delete = Dy;
Vt.prototype.get = By;
Vt.prototype.has = Hy;
Vt.prototype.set = zy;
function Vy() {
  this.__data__ = [], this.size = 0;
}
function ks(t, e) {
  for (var n = t.length; n--; )
    if (zr(t[n][0], e))
      return n;
  return -1;
}
var qy = Array.prototype, Yy = qy.splice;
function Xy(t) {
  var e = this.__data__, n = ks(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Yy.call(e, n, 1), --this.size, !0;
}
function Jy(t) {
  var e = this.__data__, n = ks(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Zy(t) {
  return ks(this.__data__, t) > -1;
}
function Qy(t, e) {
  var n = this.__data__, r = ks(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function pt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
pt.prototype.clear = Vy;
pt.prototype.delete = Xy;
pt.prototype.get = Jy;
pt.prototype.has = Zy;
pt.prototype.set = Qy;
var Fr = en(Ye, "Map");
function eT() {
  this.size = 0, this.__data__ = {
    hash: new Vt(),
    map: new (Fr || pt)(),
    string: new Vt()
  };
}
function tT(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ns(t, e) {
  var n = t.__data__;
  return tT(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function nT(t) {
  var e = Ns(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function rT(t) {
  return Ns(this, t).get(t);
}
function iT(t) {
  return Ns(this, t).has(t);
}
function sT(t, e) {
  var n = Ns(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = eT;
mt.prototype.delete = nT;
mt.prototype.get = rT;
mt.prototype.has = iT;
mt.prototype.set = sT;
var aT = "Expected a function";
function zo(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(aT);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = t.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (zo.Cache || mt)(), n;
}
zo.Cache = mt;
var oT = 500;
function lT(t) {
  var e = zo(t, function(r) {
    return n.size === oT && n.clear(), r;
  }), n = e.cache;
  return e;
}
var uT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cT = /\\(\\)?/g, fT = lT(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(uT, function(n, r, i, s) {
    e.push(i ? s.replace(cT, "$1") : r || n);
  }), e;
});
function dT(t) {
  return t == null ? "" : rd(t);
}
function bs(t, e) {
  return M(t) ? t : Wo(t, e) ? [t] : fT(dT(t));
}
function Yr(t) {
  if (typeof t == "string" || Es(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Vo(t, e) {
  e = bs(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Yr(e[n++])];
  return n && n == r ? t : void 0;
}
function hT(t, e, n) {
  var r = t == null ? void 0 : Vo(t, e);
  return r === void 0 ? n : r;
}
function qo(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Wl = be ? be.isConcatSpreadable : void 0;
function pT(t) {
  return M(t) || _s(t) || !!(Wl && t && t[Wl]);
}
function Yo(t, e, n, r, i) {
  var s = -1, a = t.length;
  for (n || (n = pT), i || (i = []); ++s < a; ) {
    var o = t[s];
    n(o) ? qo(i, o) : r || (i[i.length] = o);
  }
  return i;
}
function Ge(t) {
  var e = t == null ? 0 : t.length;
  return e ? Yo(t) : [];
}
var pd = dd(Object.getPrototypeOf, Object);
function md(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = t[r + e];
  return s;
}
function mT(t, e, n, r) {
  var i = -1, s = t == null ? 0 : t.length;
  for (r && s && (n = t[++i]); ++i < s; )
    n = e(n, t[i], i, t);
  return n;
}
function gT() {
  this.__data__ = new pt(), this.size = 0;
}
function yT(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function TT(t) {
  return this.__data__.get(t);
}
function vT(t) {
  return this.__data__.has(t);
}
var $T = 200;
function RT(t, e) {
  var n = this.__data__;
  if (n instanceof pt) {
    var r = n.__data__;
    if (!Fr || r.length < $T - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new mt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Ve(t) {
  var e = this.__data__ = new pt(t);
  this.size = e.size;
}
Ve.prototype.clear = gT;
Ve.prototype.delete = yT;
Ve.prototype.get = TT;
Ve.prototype.has = vT;
Ve.prototype.set = RT;
function AT(t, e) {
  return t && Vr(e, Le(e), t);
}
function ET(t, e) {
  return t && Vr(e, Ho(e), t);
}
var gd = typeof exports == "object" && exports && !exports.nodeType && exports, zl = gd && typeof module == "object" && module && !module.nodeType && module, xT = zl && zl.exports === gd, Vl = xT ? Ye.Buffer : void 0, ql = Vl ? Vl.allocUnsafe : void 0;
function ST(t, e) {
  var n = t.length, r = ql ? ql(n) : new t.constructor(n);
  return t.copy(r), r;
}
function Xo(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, s = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (s[i++] = a);
  }
  return s;
}
function yd() {
  return [];
}
var IT = Object.prototype, wT = IT.propertyIsEnumerable, Yl = Object.getOwnPropertySymbols, Jo = Yl ? function(t) {
  return t == null ? [] : (t = Object(t), Xo(Yl(t), function(e) {
    return wT.call(t, e);
  }));
} : yd;
function _T(t, e) {
  return Vr(t, Jo(t), e);
}
var CT = Object.getOwnPropertySymbols, Td = CT ? function(t) {
  for (var e = []; t; )
    qo(e, Jo(t)), t = pd(t);
  return e;
} : yd;
function kT(t, e) {
  return Vr(t, Td(t), e);
}
function vd(t, e, n) {
  var r = e(t);
  return M(t) ? r : qo(r, n(t));
}
function Ha(t) {
  return vd(t, Le, Jo);
}
function NT(t) {
  return vd(t, Ho, Td);
}
var Wa = en(Ye, "DataView"), za = en(Ye, "Promise"), pn = en(Ye, "Set"), Xl = "[object Map]", bT = "[object Object]", Jl = "[object Promise]", Zl = "[object Set]", Ql = "[object WeakMap]", eu = "[object DataView]", OT = Qt(Wa), LT = Qt(Fr), PT = Qt(za), MT = Qt(pn), DT = Qt(ja), Ce = Nt;
(Wa && Ce(new Wa(new ArrayBuffer(1))) != eu || Fr && Ce(new Fr()) != Xl || za && Ce(za.resolve()) != Jl || pn && Ce(new pn()) != Zl || ja && Ce(new ja()) != Ql) && (Ce = function(t) {
  var e = Nt(t), n = e == bT ? t.constructor : void 0, r = n ? Qt(n) : "";
  if (r)
    switch (r) {
      case OT:
        return eu;
      case LT:
        return Xl;
      case PT:
        return Jl;
      case MT:
        return Zl;
      case DT:
        return Ql;
    }
  return e;
});
var FT = Object.prototype, GT = FT.hasOwnProperty;
function UT(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && GT.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var Yi = Ye.Uint8Array;
function BT(t) {
  var e = new t.constructor(t.byteLength);
  return new Yi(e).set(new Yi(t)), e;
}
function jT(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var KT = /\w*$/;
function HT(t) {
  var e = new t.constructor(t.source, KT.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var tu = be ? be.prototype : void 0, nu = tu ? tu.valueOf : void 0;
function WT(t) {
  return nu ? Object(nu.call(t)) : {};
}
function zT(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var VT = "[object Boolean]", qT = "[object Date]", YT = "[object Map]", XT = "[object Number]", JT = "[object RegExp]", ZT = "[object Set]", QT = "[object String]", ev = "[object Symbol]", tv = "[object ArrayBuffer]", nv = "[object DataView]", rv = "[object Float32Array]", iv = "[object Float64Array]", sv = "[object Int8Array]", av = "[object Int16Array]", ov = "[object Int32Array]", lv = "[object Uint8Array]", uv = "[object Uint8ClampedArray]", cv = "[object Uint16Array]", fv = "[object Uint32Array]";
function dv(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case tv:
      return BT(t);
    case VT:
    case qT:
      return new r(+t);
    case nv:
      return jT(t);
    case rv:
    case iv:
    case sv:
    case av:
    case ov:
    case lv:
    case uv:
    case cv:
    case fv:
      return zT(t);
    case YT:
      return new r();
    case XT:
    case QT:
      return new r(t);
    case JT:
      return HT(t);
    case ZT:
      return new r();
    case ev:
      return WT(t);
  }
}
function hv(t) {
  return typeof t.constructor == "function" && !qr(t) ? xg(pd(t)) : {};
}
var pv = "[object Map]";
function mv(t) {
  return Ue(t) && Ce(t) == pv;
}
var ru = Et && Et.isMap, gv = ru ? Cs(ru) : mv, yv = "[object Set]";
function Tv(t) {
  return Ue(t) && Ce(t) == yv;
}
var iu = Et && Et.isSet, vv = iu ? Cs(iu) : Tv, $v = 2, $d = "[object Arguments]", Rv = "[object Array]", Av = "[object Boolean]", Ev = "[object Date]", xv = "[object Error]", Rd = "[object Function]", Sv = "[object GeneratorFunction]", Iv = "[object Map]", wv = "[object Number]", Ad = "[object Object]", _v = "[object RegExp]", Cv = "[object Set]", kv = "[object String]", Nv = "[object Symbol]", bv = "[object WeakMap]", Ov = "[object ArrayBuffer]", Lv = "[object DataView]", Pv = "[object Float32Array]", Mv = "[object Float64Array]", Dv = "[object Int8Array]", Fv = "[object Int16Array]", Gv = "[object Int32Array]", Uv = "[object Uint8Array]", Bv = "[object Uint8ClampedArray]", jv = "[object Uint16Array]", Kv = "[object Uint32Array]", G = {};
G[$d] = G[Rv] = G[Ov] = G[Lv] = G[Av] = G[Ev] = G[Pv] = G[Mv] = G[Dv] = G[Fv] = G[Gv] = G[Iv] = G[wv] = G[Ad] = G[_v] = G[Cv] = G[kv] = G[Nv] = G[Uv] = G[Bv] = G[jv] = G[Kv] = !0;
G[xv] = G[Rd] = G[bv] = !1;
function ki(t, e, n, r, i, s) {
  var a, o = e & $v;
  if (a !== void 0)
    return a;
  if (!Oe(t))
    return t;
  var l = M(t);
  if (l)
    return a = UT(t), Ig(t, a);
  var u = Ce(t), c = u == Rd || u == Sv;
  if (Mr(t))
    return ST(t);
  if (u == Ad || u == $d || c && !i)
    return a = c ? {} : hv(t), o ? kT(t, ET(a, t)) : _T(t, AT(a, t));
  if (!G[u])
    return i ? t : {};
  a = dv(t, u), s || (s = new Ve());
  var f = s.get(t);
  if (f)
    return f;
  s.set(t, a), vv(t) ? t.forEach(function(m) {
    a.add(ki(m, e, n, m, t, s));
  }) : gv(t) && t.forEach(function(m, g) {
    a.set(g, ki(m, e, n, g, t, s));
  });
  var d = Ha, h = l ? void 0 : d(t);
  return id(h || t, function(m, g) {
    h && (g = m, m = t[g]), ws(a, g, ki(m, e, n, g, t, s));
  }), a;
}
var Hv = 4;
function ae(t) {
  return ki(t, Hv);
}
function Xr(t) {
  for (var e = -1, n = t == null ? 0 : t.length, r = 0, i = []; ++e < n; ) {
    var s = t[e];
    s && (i[r++] = s);
  }
  return i;
}
var Wv = "__lodash_hash_undefined__";
function zv(t) {
  return this.__data__.set(t, Wv), this;
}
function Vv(t) {
  return this.__data__.has(t);
}
function Ln(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new mt(); ++e < n; )
    this.add(t[e]);
}
Ln.prototype.add = Ln.prototype.push = zv;
Ln.prototype.has = Vv;
function Ed(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Zo(t, e) {
  return t.has(e);
}
var qv = 1, Yv = 2;
function xd(t, e, n, r, i, s) {
  var a = n & qv, o = t.length, l = e.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(t), c = s.get(e);
  if (u && c)
    return u == e && c == t;
  var f = -1, d = !0, h = n & Yv ? new Ln() : void 0;
  for (s.set(t, e), s.set(e, t); ++f < o; ) {
    var m = t[f], g = e[f];
    if (r)
      var T = a ? r(g, m, f, e, t, s) : r(m, g, f, t, e, s);
    if (T !== void 0) {
      if (T)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Ed(e, function(y, R) {
        if (!Zo(h, R) && (m === y || i(m, y, n, r, s)))
          return h.push(R);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === g || i(m, g, n, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), d;
}
function Xv(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Qo(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Jv = 1, Zv = 2, Qv = "[object Boolean]", e$ = "[object Date]", t$ = "[object Error]", n$ = "[object Map]", r$ = "[object Number]", i$ = "[object RegExp]", s$ = "[object Set]", a$ = "[object String]", o$ = "[object Symbol]", l$ = "[object ArrayBuffer]", u$ = "[object DataView]", su = be ? be.prototype : void 0, ha = su ? su.valueOf : void 0;
function c$(t, e, n, r, i, s, a) {
  switch (n) {
    case u$:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case l$:
      return !(t.byteLength != e.byteLength || !s(new Yi(t), new Yi(e)));
    case Qv:
    case e$:
    case r$:
      return zr(+t, +e);
    case t$:
      return t.name == e.name && t.message == e.message;
    case i$:
    case a$:
      return t == e + "";
    case n$:
      var o = Xv;
    case s$:
      var l = r & Jv;
      if (o || (o = Qo), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= Zv, a.set(t, e);
      var c = xd(o(t), o(e), r, i, s, a);
      return a.delete(t), c;
    case o$:
      if (ha)
        return ha.call(t) == ha.call(e);
  }
  return !1;
}
var f$ = 1, d$ = Object.prototype, h$ = d$.hasOwnProperty;
function p$(t, e, n, r, i, s) {
  var a = n & f$, o = Ha(t), l = o.length, u = Ha(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(a ? d in e : h$.call(e, d)))
      return !1;
  }
  var h = s.get(t), m = s.get(e);
  if (h && m)
    return h == e && m == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var T = a; ++f < l; ) {
    d = o[f];
    var y = t[d], R = e[d];
    if (r)
      var v = a ? r(R, y, d, e, t, s) : r(y, R, d, t, e, s);
    if (!(v === void 0 ? y === R || i(y, R, n, r, s) : v)) {
      g = !1;
      break;
    }
    T || (T = d == "constructor");
  }
  if (g && !T) {
    var S = t.constructor, O = e.constructor;
    S != O && "constructor" in t && "constructor" in e && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var m$ = 1, au = "[object Arguments]", ou = "[object Array]", mi = "[object Object]", g$ = Object.prototype, lu = g$.hasOwnProperty;
function y$(t, e, n, r, i, s) {
  var a = M(t), o = M(e), l = a ? ou : Ce(t), u = o ? ou : Ce(e);
  l = l == au ? mi : l, u = u == au ? mi : u;
  var c = l == mi, f = u == mi, d = l == u;
  if (d && Mr(t)) {
    if (!Mr(e))
      return !1;
    a = !0, c = !1;
  }
  if (d && !c)
    return s || (s = new Ve()), a || Ko(t) ? xd(t, e, n, r, i, s) : c$(t, e, l, n, r, i, s);
  if (!(n & m$)) {
    var h = c && lu.call(t, "__wrapped__"), m = f && lu.call(e, "__wrapped__");
    if (h || m) {
      var g = h ? t.value() : t, T = m ? e.value() : e;
      return s || (s = new Ve()), i(g, T, n, r, s);
    }
  }
  return d ? (s || (s = new Ve()), p$(t, e, n, r, i, s)) : !1;
}
function el(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Ue(t) && !Ue(e) ? t !== t && e !== e : y$(t, e, n, r, el, i);
}
var T$ = 1, v$ = 2;
function $$(t, e, n, r) {
  var i = n.length, s = i;
  if (t == null)
    return !s;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < s; ) {
    a = n[i];
    var o = a[0], l = t[o], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(o in t))
        return !1;
    } else {
      var c = new Ve(), f;
      if (!(f === void 0 ? el(u, l, T$ | v$, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Sd(t) {
  return t === t && !Oe(t);
}
function R$(t) {
  for (var e = Le(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Sd(i)];
  }
  return e;
}
function Id(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function A$(t) {
  var e = R$(t);
  return e.length == 1 && e[0][2] ? Id(e[0][0], e[0][1]) : function(n) {
    return n === t || $$(n, t, e);
  };
}
function E$(t, e) {
  return t != null && e in Object(t);
}
function wd(t, e, n) {
  e = bs(e, t);
  for (var r = -1, i = e.length, s = !1; ++r < i; ) {
    var a = Yr(e[r]);
    if (!(s = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return s || ++r != i ? s : (i = t == null ? 0 : t.length, !!i && jo(i) && Is(a, i) && (M(t) || _s(t)));
}
function x$(t, e) {
  return t != null && wd(t, e, E$);
}
var S$ = 1, I$ = 2;
function w$(t, e) {
  return Wo(t) && Sd(e) ? Id(Yr(t), e) : function(n) {
    var r = hT(n, t);
    return r === void 0 && r === e ? x$(n, t) : el(e, r, S$ | I$);
  };
}
function _$(t) {
  return function(e) {
    return e?.[t];
  };
}
function C$(t) {
  return function(e) {
    return Vo(e, t);
  };
}
function k$(t) {
  return Wo(t) ? _$(Yr(t)) : C$(t);
}
function Je(t) {
  return typeof t == "function" ? t : t == null ? On : typeof t == "object" ? M(t) ? w$(t[0], t[1]) : A$(t) : k$(t);
}
function N$(t, e, n, r) {
  for (var i = -1, s = t == null ? 0 : t.length; ++i < s; ) {
    var a = t[i];
    e(r, a, n(a), t);
  }
  return r;
}
function b$(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
      var l = a[++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var O$ = b$();
function L$(t, e) {
  return t && O$(t, e, Le);
}
function P$(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Xe(n))
      return t(n, r);
    for (var i = n.length, s = -1, a = Object(n); ++s < i && r(a[s], s, a) !== !1; )
      ;
    return n;
  };
}
var tn = P$(L$);
function M$(t, e, n, r) {
  return tn(t, function(i, s, a) {
    e(r, i, n(i), a);
  }), r;
}
function D$(t, e) {
  return function(n, r) {
    var i = M(n) ? N$ : M$, s = e ? e() : {};
    return i(n, t, Je(r), s);
  };
}
var _d = Object.prototype, F$ = _d.hasOwnProperty, tl = Bo(function(t, e) {
  t = Object(t);
  var n = -1, r = e.length, i = r > 2 ? e[2] : void 0;
  for (i && od(e[0], e[1], i) && (r = 1); ++n < r; )
    for (var s = e[n], a = Ho(s), o = -1, l = a.length; ++o < l; ) {
      var u = a[o], c = t[u];
      (c === void 0 || zr(c, _d[u]) && !F$.call(t, u)) && (t[u] = s[u]);
    }
  return t;
});
function uu(t) {
  return Ue(t) && Xe(t);
}
var G$ = 200;
function U$(t, e, n, r) {
  var i = -1, s = ad, a = !0, o = t.length, l = [], u = e.length;
  if (!o)
    return l;
  e.length >= G$ && (s = Zo, a = !1, e = new Ln(e));
  e:
    for (; ++i < o; ) {
      var c = t[i], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var d = u; d--; )
          if (e[d] === f)
            continue e;
        l.push(c);
      } else s(e, f, r) || l.push(c);
    }
  return l;
}
var Os = Bo(function(t, e) {
  return uu(t) ? U$(t, Yo(e, 1, uu, !0)) : [];
});
function Pn(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function ne(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : Ss(e), md(t, e < 0 ? 0 : e, r)) : [];
}
function Gr(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : Ss(e), e = r - e, md(t, 0, e < 0 ? 0 : e)) : [];
}
function B$(t) {
  return typeof t == "function" ? t : On;
}
function k(t, e) {
  var n = M(t) ? id : tn;
  return n(t, B$(e));
}
function j$(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (!e(t[n], n, t))
      return !1;
  return !0;
}
function K$(t, e) {
  var n = !0;
  return tn(t, function(r, i, s) {
    return n = !!e(r, i, s), n;
  }), n;
}
function qe(t, e, n) {
  var r = M(t) ? j$ : K$;
  return r(t, Je(e));
}
function Cd(t, e) {
  var n = [];
  return tn(t, function(r, i, s) {
    e(r, i, s) && n.push(r);
  }), n;
}
function Pe(t, e) {
  var n = M(t) ? Xo : Cd;
  return n(t, Je(e));
}
function H$(t) {
  return function(e, n, r) {
    var i = Object(e);
    if (!Xe(e)) {
      var s = Je(n);
      e = Le(e), n = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = t(e, n, r);
    return a > -1 ? i[s ? e[a] : a] : void 0;
  };
}
var W$ = Math.max;
function z$(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : Ss(n);
  return i < 0 && (i = W$(r + i, 0)), sd(t, Je(e), i);
}
var Mn = H$(z$);
function Be(t) {
  return t && t.length ? t[0] : void 0;
}
function V$(t, e) {
  var n = -1, r = Xe(t) ? Array(t.length) : [];
  return tn(t, function(i, s, a) {
    r[++n] = e(i, s, a);
  }), r;
}
function w(t, e) {
  var n = M(t) ? xs : V$;
  return n(t, Je(e));
}
function ke(t, e) {
  return Yo(w(t, e));
}
var q$ = Object.prototype, Y$ = q$.hasOwnProperty, X$ = D$(function(t, e, n) {
  Y$.call(t, n) ? t[n].push(e) : Uo(t, n, [e]);
}), J$ = Object.prototype, Z$ = J$.hasOwnProperty;
function Q$(t, e) {
  return t != null && Z$.call(t, e);
}
function _(t, e) {
  return t != null && wd(t, e, Q$);
}
var eR = "[object String]";
function je(t) {
  return typeof t == "string" || !M(t) && Ue(t) && Nt(t) == eR;
}
function tR(t, e) {
  return xs(e, function(n) {
    return t[n];
  });
}
function Z(t) {
  return t == null ? [] : tR(t, Le(t));
}
var nR = Math.max;
function ge(t, e, n, r) {
  t = Xe(t) ? t : Z(t), n = n ? Ss(n) : 0;
  var i = t.length;
  return n < 0 && (n = nR(i + n, 0)), je(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && Go(t, e, n) > -1;
}
function cu(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = 0;
  return Go(t, e, i);
}
var rR = "[object Map]", iR = "[object Set]", sR = Object.prototype, aR = sR.hasOwnProperty;
function U(t) {
  if (t == null)
    return !0;
  if (Xe(t) && (M(t) || typeof t == "string" || typeof t.splice == "function" || Mr(t) || Ko(t) || _s(t)))
    return !t.length;
  var e = Ce(t);
  if (e == rR || e == iR)
    return !t.size;
  if (qr(t))
    return !hd(t).length;
  for (var n in t)
    if (aR.call(t, n))
      return !1;
  return !0;
}
var oR = "[object RegExp]";
function lR(t) {
  return Ue(t) && Nt(t) == oR;
}
var fu = Et && Et.isRegExp, xt = fu ? Cs(fu) : lR;
function ct(t) {
  return t === void 0;
}
var uR = "Expected a function";
function cR(t) {
  if (typeof t != "function")
    throw new TypeError(uR);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !t.call(this);
      case 1:
        return !t.call(this, e[0]);
      case 2:
        return !t.call(this, e[0], e[1]);
      case 3:
        return !t.call(this, e[0], e[1], e[2]);
    }
    return !t.apply(this, e);
  };
}
function fR(t, e, n, r) {
  if (!Oe(t))
    return t;
  e = bs(e, t);
  for (var i = -1, s = e.length, a = s - 1, o = t; o != null && ++i < s; ) {
    var l = Yr(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = o[l];
      u = void 0, u === void 0 && (u = Oe(c) ? c : Is(e[i + 1]) ? [] : {});
    }
    ws(o, l, u), o = o[l];
  }
  return t;
}
function dR(t, e, n) {
  for (var r = -1, i = e.length, s = {}; ++r < i; ) {
    var a = e[r], o = Vo(t, a);
    n(o, a) && fR(s, bs(a, t), o);
  }
  return s;
}
function hR(t, e) {
  if (t == null)
    return {};
  var n = xs(NT(t), function(r) {
    return [r];
  });
  return e = Je(e), dR(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
function pR(t, e, n, r, i) {
  return i(t, function(s, a, o) {
    n = r ? (r = !1, s) : e(n, s, a, o);
  }), n;
}
function xe(t, e, n) {
  var r = M(t) ? mT : pR, i = arguments.length < 3;
  return r(t, Je(e), n, i, tn);
}
function Ls(t, e) {
  var n = M(t) ? Xo : Cd;
  return n(t, cR(Je(e)));
}
function mR(t, e) {
  var n;
  return tn(t, function(r, i, s) {
    return n = e(r, i, s), !n;
  }), !!n;
}
function gR(t, e, n) {
  var r = M(t) ? Ed : mR;
  return r(t, Je(e));
}
var yR = 1 / 0, TR = pn && 1 / Qo(new pn([, -0]))[1] == yR ? function(t) {
  return new pn(t);
} : J, vR = 200;
function $R(t, e, n) {
  var r = -1, i = ad, s = t.length, a = !0, o = [], l = o;
  if (s >= vR) {
    var u = TR(t);
    if (u)
      return Qo(u);
    a = !1, i = Zo, l = new Ln();
  } else
    l = o;
  e:
    for (; ++r < s; ) {
      var c = t[r], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var d = l.length; d--; )
          if (l[d] === f)
            continue e;
        o.push(c);
      } else i(l, f, n) || (l !== o && l.push(f), o.push(c));
    }
  return o;
}
function nl(t) {
  return t && t.length ? $R(t) : [];
}
function Va(t) {
  console && console.error && console.error(`Error: ${t}`);
}
function kd(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
function Nd(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), n = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: n };
}
function bd(t) {
  function e() {
  }
  e.prototype = t;
  const n = new e();
  function r() {
    return typeof n.bar;
  }
  return r(), r(), t;
}
var Od = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, RR = typeof self == "object" && self && self.Object === Object && self, gt = Od || RR || Function("return this")(), St = gt.Symbol, Ld = Object.prototype, AR = Ld.hasOwnProperty, ER = Ld.toString, Vn = St ? St.toStringTag : void 0;
function xR(t) {
  var e = AR.call(t, Vn), n = t[Vn];
  try {
    t[Vn] = void 0;
    var r = !0;
  } catch {
  }
  var i = ER.call(t);
  return r && (e ? t[Vn] = n : delete t[Vn]), i;
}
var SR = Object.prototype, IR = SR.toString;
function wR(t) {
  return IR.call(t);
}
var _R = "[object Null]", CR = "[object Undefined]", du = St ? St.toStringTag : void 0;
function bt(t) {
  return t == null ? t === void 0 ? CR : _R : du && du in Object(t) ? xR(t) : wR(t);
}
function It(t) {
  return t != null && typeof t == "object";
}
var kR = "[object Symbol]";
function Ps(t) {
  return typeof t == "symbol" || It(t) && bt(t) == kR;
}
function Ms(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var pe = Array.isArray, hu = St ? St.prototype : void 0, pu = hu ? hu.toString : void 0;
function Pd(t) {
  if (typeof t == "string")
    return t;
  if (pe(t))
    return Ms(t, Pd) + "";
  if (Ps(t))
    return pu ? pu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var NR = /\s/;
function bR(t) {
  for (var e = t.length; e-- && NR.test(t.charAt(e)); )
    ;
  return e;
}
var OR = /^\s+/;
function LR(t) {
  return t && t.slice(0, bR(t) + 1).replace(OR, "");
}
function ft(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var mu = NaN, PR = /^[-+]0x[0-9a-f]+$/i, MR = /^0b[01]+$/i, DR = /^0o[0-7]+$/i, FR = parseInt;
function GR(t) {
  if (typeof t == "number")
    return t;
  if (Ps(t))
    return mu;
  if (ft(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ft(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = LR(t);
  var n = MR.test(t);
  return n || DR.test(t) ? FR(t.slice(2), n ? 2 : 8) : PR.test(t) ? mu : +t;
}
var gu = 1 / 0, UR = 17976931348623157e292;
function BR(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = GR(t), t === gu || t === -gu) {
    var e = t < 0 ? -1 : 1;
    return e * UR;
  }
  return t === t ? t : 0;
}
function jR(t) {
  var e = BR(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function Ds(t) {
  return t;
}
var KR = "[object AsyncFunction]", HR = "[object Function]", WR = "[object GeneratorFunction]", zR = "[object Proxy]";
function Md(t) {
  if (!ft(t))
    return !1;
  var e = bt(t);
  return e == HR || e == WR || e == KR || e == zR;
}
var pa = gt["__core-js_shared__"], yu = (function() {
  var t = /[^.]+$/.exec(pa && pa.keys && pa.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function VR(t) {
  return !!yu && yu in t;
}
var qR = Function.prototype, YR = qR.toString;
function nn(t) {
  if (t != null) {
    try {
      return YR.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var XR = /[\\^$.*+?()[\]{}|]/g, JR = /^\[object .+?Constructor\]$/, ZR = Function.prototype, QR = Object.prototype, eA = ZR.toString, tA = QR.hasOwnProperty, nA = RegExp(
  "^" + eA.call(tA).replace(XR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rA(t) {
  if (!ft(t) || VR(t))
    return !1;
  var e = Md(t) ? nA : JR;
  return e.test(nn(t));
}
function iA(t, e) {
  return t?.[e];
}
function rn(t, e) {
  var n = iA(t, e);
  return rA(n) ? n : void 0;
}
var qa = rn(gt, "WeakMap");
function sA(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var aA = 800, oA = 16, lA = Date.now;
function uA(t) {
  var e = 0, n = 0;
  return function() {
    var r = lA(), i = oA - (r - n);
    if (n = r, i > 0) {
      if (++e >= aA)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function cA(t) {
  return function() {
    return t;
  };
}
var Xi = (function() {
  try {
    var t = rn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), fA = Xi ? function(t, e) {
  return Xi(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: cA(e),
    writable: !0
  });
} : Ds, dA = uA(fA);
function hA(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function pA(t, e, n, r) {
  for (var i = t.length, s = n + -1; ++s < i; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function mA(t) {
  return t !== t;
}
function gA(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function yA(t, e, n) {
  return e === e ? gA(t, e, n) : pA(t, mA, n);
}
var TA = 9007199254740991, vA = /^(?:0|[1-9]\d*)$/;
function Fs(t, e) {
  var n = typeof t;
  return e = e ?? TA, !!e && (n == "number" || n != "symbol" && vA.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Dd(t, e, n) {
  e == "__proto__" && Xi ? Xi(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Gs(t, e) {
  return t === e || t !== t && e !== e;
}
var $A = Object.prototype, RA = $A.hasOwnProperty;
function rl(t, e, n) {
  var r = t[e];
  (!(RA.call(t, e) && Gs(r, n)) || n === void 0 && !(e in t)) && Dd(t, e, n);
}
function AA(t, e, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = e.length; ++s < a; ) {
    var o = e[s], l = void 0;
    l === void 0 && (l = t[o]), i ? Dd(n, o, l) : rl(n, o, l);
  }
  return n;
}
var Tu = Math.max;
function EA(t, e, n) {
  return e = Tu(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, s = Tu(r.length - e, 0), a = Array(s); ++i < s; )
      a[i] = r[e + i];
    i = -1;
    for (var o = Array(e + 1); ++i < e; )
      o[i] = r[i];
    return o[e] = n(a), sA(t, this, o);
  };
}
function xA(t, e) {
  return dA(EA(t, e, Ds), t + "");
}
var SA = 9007199254740991;
function il(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= SA;
}
function sn(t) {
  return t != null && il(t.length) && !Md(t);
}
function IA(t, e, n) {
  if (!ft(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? sn(n) && Fs(e, n.length) : r == "string" && e in n) ? Gs(n[e], t) : !1;
}
function wA(t) {
  return xA(function(e, n) {
    var r = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && IA(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++r < i; ) {
      var o = n[r];
      o && t(e, o, r, s);
    }
    return e;
  });
}
var _A = Object.prototype;
function sl(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || _A;
  return t === n;
}
function CA(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var kA = "[object Arguments]";
function vu(t) {
  return It(t) && bt(t) == kA;
}
var Fd = Object.prototype, NA = Fd.hasOwnProperty, bA = Fd.propertyIsEnumerable, Gd = vu(/* @__PURE__ */ (function() {
  return arguments;
})()) ? vu : function(t) {
  return It(t) && NA.call(t, "callee") && !bA.call(t, "callee");
};
function OA() {
  return !1;
}
var Ud = typeof exports == "object" && exports && !exports.nodeType && exports, $u = Ud && typeof module == "object" && module && !module.nodeType && module, LA = $u && $u.exports === Ud, Ru = LA ? gt.Buffer : void 0, PA = Ru ? Ru.isBuffer : void 0, Ya = PA || OA, MA = "[object Arguments]", DA = "[object Array]", FA = "[object Boolean]", GA = "[object Date]", UA = "[object Error]", BA = "[object Function]", jA = "[object Map]", KA = "[object Number]", HA = "[object Object]", WA = "[object RegExp]", zA = "[object Set]", VA = "[object String]", qA = "[object WeakMap]", YA = "[object ArrayBuffer]", XA = "[object DataView]", JA = "[object Float32Array]", ZA = "[object Float64Array]", QA = "[object Int8Array]", eE = "[object Int16Array]", tE = "[object Int32Array]", nE = "[object Uint8Array]", rE = "[object Uint8ClampedArray]", iE = "[object Uint16Array]", sE = "[object Uint32Array]", j = {};
j[JA] = j[ZA] = j[QA] = j[eE] = j[tE] = j[nE] = j[rE] = j[iE] = j[sE] = !0;
j[MA] = j[DA] = j[YA] = j[FA] = j[XA] = j[GA] = j[UA] = j[BA] = j[jA] = j[KA] = j[HA] = j[WA] = j[zA] = j[VA] = j[qA] = !1;
function aE(t) {
  return It(t) && il(t.length) && !!j[bt(t)];
}
function Bd(t) {
  return function(e) {
    return t(e);
  };
}
var jd = typeof exports == "object" && exports && !exports.nodeType && exports, Or = jd && typeof module == "object" && module && !module.nodeType && module, oE = Or && Or.exports === jd, ma = oE && Od.process, Ji = (function() {
  try {
    var t = Or && Or.require && Or.require("util").types;
    return t || ma && ma.binding && ma.binding("util");
  } catch {
  }
})(), Au = Ji && Ji.isTypedArray, Kd = Au ? Bd(Au) : aE, lE = Object.prototype, uE = lE.hasOwnProperty;
function Hd(t, e) {
  var n = pe(t), r = !n && Gd(t), i = !n && !r && Ya(t), s = !n && !r && !i && Kd(t), a = n || r || i || s, o = a ? CA(t.length, String) : [], l = o.length;
  for (var u in t)
    (e || uE.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Fs(u, l))) && o.push(u);
  return o;
}
function Wd(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var cE = Wd(Object.keys, Object), fE = Object.prototype, dE = fE.hasOwnProperty;
function hE(t) {
  if (!sl(t))
    return cE(t);
  var e = [];
  for (var n in Object(t))
    dE.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Jr(t) {
  return sn(t) ? Hd(t) : hE(t);
}
var pE = Object.prototype, mE = pE.hasOwnProperty, Ze = wA(function(t, e) {
  if (sl(e) || sn(e)) {
    AA(e, Jr(e), t);
    return;
  }
  for (var n in e)
    mE.call(e, n) && rl(t, n, e[n]);
});
function gE(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var yE = Object.prototype, TE = yE.hasOwnProperty;
function vE(t) {
  if (!ft(t))
    return gE(t);
  var e = sl(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !TE.call(t, r)) || n.push(r);
  return n;
}
function $E(t) {
  return sn(t) ? Hd(t, !0) : vE(t);
}
var RE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, AE = /^\w*$/;
function al(t, e) {
  if (pe(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ps(t) ? !0 : AE.test(t) || !RE.test(t) || e != null && t in Object(e);
}
var Ur = rn(Object, "create");
function EE() {
  this.__data__ = Ur ? Ur(null) : {}, this.size = 0;
}
function xE(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var SE = "__lodash_hash_undefined__", IE = Object.prototype, wE = IE.hasOwnProperty;
function _E(t) {
  var e = this.__data__;
  if (Ur) {
    var n = e[t];
    return n === SE ? void 0 : n;
  }
  return wE.call(e, t) ? e[t] : void 0;
}
var CE = Object.prototype, kE = CE.hasOwnProperty;
function NE(t) {
  var e = this.__data__;
  return Ur ? e[t] !== void 0 : kE.call(e, t);
}
var bE = "__lodash_hash_undefined__";
function OE(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ur && e === void 0 ? bE : e, this;
}
function qt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = EE;
qt.prototype.delete = xE;
qt.prototype.get = _E;
qt.prototype.has = NE;
qt.prototype.set = OE;
function LE() {
  this.__data__ = [], this.size = 0;
}
function Us(t, e) {
  for (var n = t.length; n--; )
    if (Gs(t[n][0], e))
      return n;
  return -1;
}
var PE = Array.prototype, ME = PE.splice;
function DE(t) {
  var e = this.__data__, n = Us(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : ME.call(e, n, 1), --this.size, !0;
}
function FE(t) {
  var e = this.__data__, n = Us(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function GE(t) {
  return Us(this.__data__, t) > -1;
}
function UE(t, e) {
  var n = this.__data__, r = Us(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = LE;
yt.prototype.delete = DE;
yt.prototype.get = FE;
yt.prototype.has = GE;
yt.prototype.set = UE;
var Br = rn(gt, "Map");
function BE() {
  this.size = 0, this.__data__ = {
    hash: new qt(),
    map: new (Br || yt)(),
    string: new qt()
  };
}
function jE(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Bs(t, e) {
  var n = t.__data__;
  return jE(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function KE(t) {
  var e = Bs(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function HE(t) {
  return Bs(this, t).get(t);
}
function WE(t) {
  return Bs(this, t).has(t);
}
function zE(t, e) {
  var n = Bs(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Tt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Tt.prototype.clear = BE;
Tt.prototype.delete = KE;
Tt.prototype.get = HE;
Tt.prototype.has = WE;
Tt.prototype.set = zE;
var VE = "Expected a function";
function ol(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(VE);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = t.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (ol.Cache || Tt)(), n;
}
ol.Cache = Tt;
var qE = 500;
function YE(t) {
  var e = ol(t, function(r) {
    return n.size === qE && n.clear(), r;
  }), n = e.cache;
  return e;
}
var XE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, JE = /\\(\\)?/g, ZE = YE(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(XE, function(n, r, i, s) {
    e.push(i ? s.replace(JE, "$1") : r || n);
  }), e;
});
function QE(t) {
  return t == null ? "" : Pd(t);
}
function js(t, e) {
  return pe(t) ? t : al(t, e) ? [t] : ZE(QE(t));
}
function Zr(t) {
  if (typeof t == "string" || Ps(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function ll(t, e) {
  e = js(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Zr(e[n++])];
  return n && n == r ? t : void 0;
}
function ex(t, e, n) {
  var r = t == null ? void 0 : ll(t, e);
  return r === void 0 ? n : r;
}
function zd(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var tx = Wd(Object.getPrototypeOf, Object);
function nx() {
  this.__data__ = new yt(), this.size = 0;
}
function rx(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function ix(t) {
  return this.__data__.get(t);
}
function sx(t) {
  return this.__data__.has(t);
}
var ax = 200;
function ox(t, e) {
  var n = this.__data__;
  if (n instanceof yt) {
    var r = n.__data__;
    if (!Br || r.length < ax - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Tt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ut(t) {
  var e = this.__data__ = new yt(t);
  this.size = e.size;
}
ut.prototype.clear = nx;
ut.prototype.delete = rx;
ut.prototype.get = ix;
ut.prototype.has = sx;
ut.prototype.set = ox;
function lx(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, s = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (s[i++] = a);
  }
  return s;
}
function Vd() {
  return [];
}
var ux = Object.prototype, cx = ux.propertyIsEnumerable, Eu = Object.getOwnPropertySymbols, qd = Eu ? function(t) {
  return t == null ? [] : (t = Object(t), lx(Eu(t), function(e) {
    return cx.call(t, e);
  }));
} : Vd, fx = Object.getOwnPropertySymbols, dx = fx ? function(t) {
  for (var e = []; t; )
    zd(e, qd(t)), t = tx(t);
  return e;
} : Vd;
function Yd(t, e, n) {
  var r = e(t);
  return pe(t) ? r : zd(r, n(t));
}
function xu(t) {
  return Yd(t, Jr, qd);
}
function hx(t) {
  return Yd(t, $E, dx);
}
var Xa = rn(gt, "DataView"), Ja = rn(gt, "Promise"), Za = rn(gt, "Set"), Su = "[object Map]", px = "[object Object]", Iu = "[object Promise]", wu = "[object Set]", _u = "[object WeakMap]", Cu = "[object DataView]", mx = nn(Xa), gx = nn(Br), yx = nn(Ja), Tx = nn(Za), vx = nn(qa), Rt = bt;
(Xa && Rt(new Xa(new ArrayBuffer(1))) != Cu || Br && Rt(new Br()) != Su || Ja && Rt(Ja.resolve()) != Iu || Za && Rt(new Za()) != wu || qa && Rt(new qa()) != _u) && (Rt = function(t) {
  var e = bt(t), n = e == px ? t.constructor : void 0, r = n ? nn(n) : "";
  if (r)
    switch (r) {
      case mx:
        return Cu;
      case gx:
        return Su;
      case yx:
        return Iu;
      case Tx:
        return wu;
      case vx:
        return _u;
    }
  return e;
});
var ku = gt.Uint8Array, $x = "__lodash_hash_undefined__";
function Rx(t) {
  return this.__data__.set(t, $x), this;
}
function Ax(t) {
  return this.__data__.has(t);
}
function Zi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Tt(); ++e < n; )
    this.add(t[e]);
}
Zi.prototype.add = Zi.prototype.push = Rx;
Zi.prototype.has = Ax;
function Xd(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Ex(t, e) {
  return t.has(e);
}
var xx = 1, Sx = 2;
function Jd(t, e, n, r, i, s) {
  var a = n & xx, o = t.length, l = e.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(t), c = s.get(e);
  if (u && c)
    return u == e && c == t;
  var f = -1, d = !0, h = n & Sx ? new Zi() : void 0;
  for (s.set(t, e), s.set(e, t); ++f < o; ) {
    var m = t[f], g = e[f];
    if (r)
      var T = a ? r(g, m, f, e, t, s) : r(m, g, f, t, e, s);
    if (T !== void 0) {
      if (T)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Xd(e, function(y, R) {
        if (!Ex(h, R) && (m === y || i(m, y, n, r, s)))
          return h.push(R);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === g || i(m, g, n, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), d;
}
function Ix(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function wx(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var _x = 1, Cx = 2, kx = "[object Boolean]", Nx = "[object Date]", bx = "[object Error]", Ox = "[object Map]", Lx = "[object Number]", Px = "[object RegExp]", Mx = "[object Set]", Dx = "[object String]", Fx = "[object Symbol]", Gx = "[object ArrayBuffer]", Ux = "[object DataView]", Nu = St ? St.prototype : void 0, ga = Nu ? Nu.valueOf : void 0;
function Bx(t, e, n, r, i, s, a) {
  switch (n) {
    case Ux:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Gx:
      return !(t.byteLength != e.byteLength || !s(new ku(t), new ku(e)));
    case kx:
    case Nx:
    case Lx:
      return Gs(+t, +e);
    case bx:
      return t.name == e.name && t.message == e.message;
    case Px:
    case Dx:
      return t == e + "";
    case Ox:
      var o = Ix;
    case Mx:
      var l = r & _x;
      if (o || (o = wx), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= Cx, a.set(t, e);
      var c = Jd(o(t), o(e), r, i, s, a);
      return a.delete(t), c;
    case Fx:
      if (ga)
        return ga.call(t) == ga.call(e);
  }
  return !1;
}
var jx = 1, Kx = Object.prototype, Hx = Kx.hasOwnProperty;
function Wx(t, e, n, r, i, s) {
  var a = n & jx, o = xu(t), l = o.length, u = xu(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(a ? d in e : Hx.call(e, d)))
      return !1;
  }
  var h = s.get(t), m = s.get(e);
  if (h && m)
    return h == e && m == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var T = a; ++f < l; ) {
    d = o[f];
    var y = t[d], R = e[d];
    if (r)
      var v = a ? r(R, y, d, e, t, s) : r(y, R, d, t, e, s);
    if (!(v === void 0 ? y === R || i(y, R, n, r, s) : v)) {
      g = !1;
      break;
    }
    T || (T = d == "constructor");
  }
  if (g && !T) {
    var S = t.constructor, O = e.constructor;
    S != O && "constructor" in t && "constructor" in e && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var zx = 1, bu = "[object Arguments]", Ou = "[object Array]", gi = "[object Object]", Vx = Object.prototype, Lu = Vx.hasOwnProperty;
function qx(t, e, n, r, i, s) {
  var a = pe(t), o = pe(e), l = a ? Ou : Rt(t), u = o ? Ou : Rt(e);
  l = l == bu ? gi : l, u = u == bu ? gi : u;
  var c = l == gi, f = u == gi, d = l == u;
  if (d && Ya(t)) {
    if (!Ya(e))
      return !1;
    a = !0, c = !1;
  }
  if (d && !c)
    return s || (s = new ut()), a || Kd(t) ? Jd(t, e, n, r, i, s) : Bx(t, e, l, n, r, i, s);
  if (!(n & zx)) {
    var h = c && Lu.call(t, "__wrapped__"), m = f && Lu.call(e, "__wrapped__");
    if (h || m) {
      var g = h ? t.value() : t, T = m ? e.value() : e;
      return s || (s = new ut()), i(g, T, n, r, s);
    }
  }
  return d ? (s || (s = new ut()), Wx(t, e, n, r, i, s)) : !1;
}
function ul(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !It(t) && !It(e) ? t !== t && e !== e : qx(t, e, n, r, ul, i);
}
var Yx = 1, Xx = 2;
function Jx(t, e, n, r) {
  var i = n.length, s = i;
  if (t == null)
    return !s;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < s; ) {
    a = n[i];
    var o = a[0], l = t[o], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(o in t))
        return !1;
    } else {
      var c = new ut(), f;
      if (!(f === void 0 ? ul(u, l, Yx | Xx, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Zd(t) {
  return t === t && !ft(t);
}
function Zx(t) {
  for (var e = Jr(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Zd(i)];
  }
  return e;
}
function Qd(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Qx(t) {
  var e = Zx(t);
  return e.length == 1 && e[0][2] ? Qd(e[0][0], e[0][1]) : function(n) {
    return n === t || Jx(n, t, e);
  };
}
function eS(t, e) {
  return t != null && e in Object(t);
}
function tS(t, e, n) {
  e = js(e, t);
  for (var r = -1, i = e.length, s = !1; ++r < i; ) {
    var a = Zr(e[r]);
    if (!(s = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return s || ++r != i ? s : (i = t == null ? 0 : t.length, !!i && il(i) && Fs(a, i) && (pe(t) || Gd(t)));
}
function nS(t, e) {
  return t != null && tS(t, e, eS);
}
var rS = 1, iS = 2;
function sS(t, e) {
  return al(t) && Zd(e) ? Qd(Zr(t), e) : function(n) {
    var r = ex(n, t);
    return r === void 0 && r === e ? nS(n, t) : ul(e, r, rS | iS);
  };
}
function aS(t) {
  return function(e) {
    return e?.[t];
  };
}
function oS(t) {
  return function(e) {
    return ll(e, t);
  };
}
function lS(t) {
  return al(t) ? aS(Zr(t)) : oS(t);
}
function Ks(t) {
  return typeof t == "function" ? t : t == null ? Ds : typeof t == "object" ? pe(t) ? sS(t[0], t[1]) : Qx(t) : lS(t);
}
function uS(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
      var l = a[++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var cS = uS();
function fS(t, e) {
  return t && cS(t, e, Jr);
}
function dS(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!sn(n))
      return t(n, r);
    for (var i = n.length, s = -1, a = Object(n); ++s < i && r(a[s], s, a) !== !1; )
      ;
    return n;
  };
}
var Hs = dS(fS);
function hS(t) {
  return typeof t == "function" ? t : Ds;
}
function pS(t, e) {
  var n = pe(t) ? hA : Hs;
  return n(t, hS(e));
}
function mS(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (!e(t[n], n, t))
      return !1;
  return !0;
}
function gS(t, e) {
  var n = !0;
  return Hs(t, function(r, i, s) {
    return n = !!e(r, i, s), n;
  }), n;
}
function yS(t, e, n) {
  var r = pe(t) ? mS : gS;
  return r(t, Ks(e));
}
function TS(t, e) {
  var n = -1, r = sn(t) ? Array(t.length) : [];
  return Hs(t, function(i, s, a) {
    r[++n] = e(i, s, a);
  }), r;
}
function eh(t, e) {
  var n = pe(t) ? Ms : TS;
  return n(t, Ks(e));
}
var vS = "[object String]";
function Qi(t) {
  return typeof t == "string" || !pe(t) && It(t) && bt(t) == vS;
}
function $S(t, e) {
  return Ms(e, function(n) {
    return t[n];
  });
}
function RS(t) {
  return t == null ? [] : $S(t, Jr(t));
}
var AS = Math.max;
function ES(t, e, n, r) {
  t = sn(t) ? t : RS(t), n = n ? jR(n) : 0;
  var i = t.length;
  return n < 0 && (n = AS(i + n, 0)), Qi(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && yA(t, e, n) > -1;
}
var xS = "[object RegExp]";
function SS(t) {
  return It(t) && bt(t) == xS;
}
var Pu = Ji && Ji.isRegExp, IS = Pu ? Bd(Pu) : SS;
function wS(t, e, n, r) {
  if (!ft(t))
    return t;
  e = js(e, t);
  for (var i = -1, s = e.length, a = s - 1, o = t; o != null && ++i < s; ) {
    var l = Zr(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = o[l];
      u = void 0, u === void 0 && (u = ft(c) ? c : Fs(e[i + 1]) ? [] : {});
    }
    rl(o, l, u), o = o[l];
  }
  return t;
}
function _S(t, e, n) {
  for (var r = -1, i = e.length, s = {}; ++r < i; ) {
    var a = e[r], o = ll(t, a);
    n(o, a) && wS(s, js(a, t), o);
  }
  return s;
}
function Qe(t, e) {
  if (t == null)
    return {};
  var n = Ms(hx(t), function(r) {
    return [r];
  });
  return e = Ks(e), _S(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
function CS(t, e) {
  var n;
  return Hs(t, function(r, i, s) {
    return n = e(r, i, s), !n;
  }), !!n;
}
function kS(t, e, n) {
  var r = pe(t) ? Xd : CS;
  return r(t, Ks(e));
}
function NS(t) {
  return bS(t) ? t.LABEL : t.name;
}
function bS(t) {
  return Qi(t.LABEL) && t.LABEL !== "";
}
class et {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), pS(this.definition, (n) => {
      n.accept(e);
    });
  }
}
class fe extends et {
  constructor(e) {
    super([]), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class jn extends et {
  constructor(e) {
    super(e.definition), this.orgText = "", Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class me extends et {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
let se = class extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
};
class Se extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class Ie extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class q extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class ye extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class Te extends et {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class K {
  constructor(e) {
    this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function OS(t) {
  return eh(t, Ni);
}
function Ni(t) {
  function e(n) {
    return eh(n, Ni);
  }
  if (t instanceof fe) {
    const n = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return Qi(t.label) && (n.label = t.label), n;
  } else {
    if (t instanceof me)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof se)
      return {
        type: "Option",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Se)
      return {
        type: "RepetitionMandatory",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Ie)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: Ni(new K({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof ye)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: Ni(new K({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof q)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Te)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof K) {
      const n = {
        type: "Terminal",
        name: t.terminalType.name,
        label: NS(t.terminalType),
        idx: t.idx
      };
      Qi(t.label) && (n.terminalLabel = t.label);
      const r = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (n.pattern = IS(r) ? r.source : r), n;
    } else {
      if (t instanceof jn)
        return {
          type: "Rule",
          name: t.name,
          orgText: t.orgText,
          definition: e(t.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
class Kn {
  visit(e) {
    const n = e;
    switch (n.constructor) {
      case fe:
        return this.visitNonTerminal(n);
      case me:
        return this.visitAlternative(n);
      case se:
        return this.visitOption(n);
      case Se:
        return this.visitRepetitionMandatory(n);
      case Ie:
        return this.visitRepetitionMandatoryWithSeparator(n);
      case ye:
        return this.visitRepetitionWithSeparator(n);
      case q:
        return this.visitRepetition(n);
      case Te:
        return this.visitAlternation(n);
      case K:
        return this.visitTerminal(n);
      case jn:
        return this.visitRule(n);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function LS(t) {
  return t instanceof me || t instanceof se || t instanceof q || t instanceof Se || t instanceof Ie || t instanceof ye || t instanceof K || t instanceof jn;
}
function es(t, e = []) {
  return t instanceof se || t instanceof q || t instanceof ye ? !0 : t instanceof Te ? kS(t.definition, (r) => es(r, e)) : t instanceof fe && ES(e, t) ? !1 : t instanceof et ? (t instanceof fe && e.push(t), yS(t.definition, (r) => es(r, e))) : !1;
}
function PS(t) {
  return t instanceof Te;
}
function We(t) {
  if (t instanceof fe)
    return "SUBRULE";
  if (t instanceof se)
    return "OPTION";
  if (t instanceof Te)
    return "OR";
  if (t instanceof Se)
    return "AT_LEAST_ONE";
  if (t instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof ye)
    return "MANY_SEP";
  if (t instanceof q)
    return "MANY";
  if (t instanceof K)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class Ws {
  walk(e, n = []) {
    k(e.definition, (r, i) => {
      const s = ne(e.definition, i + 1);
      if (r instanceof fe)
        this.walkProdRef(r, s, n);
      else if (r instanceof K)
        this.walkTerminal(r, s, n);
      else if (r instanceof me)
        this.walkFlat(r, s, n);
      else if (r instanceof se)
        this.walkOption(r, s, n);
      else if (r instanceof Se)
        this.walkAtLeastOne(r, s, n);
      else if (r instanceof Ie)
        this.walkAtLeastOneSep(r, s, n);
      else if (r instanceof ye)
        this.walkManySep(r, s, n);
      else if (r instanceof q)
        this.walkMany(r, s, n);
      else if (r instanceof Te)
        this.walkOr(r, s, n);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
  }
  walkFlat(e, n, r) {
    const i = n.concat(r);
    this.walk(e, i);
  }
  walkOption(e, n, r) {
    const i = n.concat(r);
    this.walk(e, i);
  }
  walkAtLeastOne(e, n, r) {
    const i = [
      new se({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, n, r) {
    const i = Mu(e, n, r);
    this.walk(e, i);
  }
  walkMany(e, n, r) {
    const i = [
      new se({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, i);
  }
  walkManySep(e, n, r) {
    const i = Mu(e, n, r);
    this.walk(e, i);
  }
  walkOr(e, n, r) {
    const i = n.concat(r);
    k(e.definition, (s) => {
      const a = new me({ definition: [s] });
      this.walk(a, i);
    });
  }
}
function Mu(t, e, n) {
  return [
    new se({
      definition: [
        new K({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, n);
}
function Qr(t) {
  if (t instanceof fe)
    return Qr(t.referencedRule);
  if (t instanceof K)
    return FS(t);
  if (LS(t))
    return MS(t);
  if (PS(t))
    return DS(t);
  throw Error("non exhaustive match");
}
function MS(t) {
  let e = [];
  const n = t.definition;
  let r = 0, i = n.length > r, s, a = !0;
  for (; i && a; )
    s = n[r], a = es(s), e = e.concat(Qr(s)), r = r + 1, i = n.length > r;
  return nl(e);
}
function DS(t) {
  const e = w(t.definition, (n) => Qr(n));
  return nl(Ge(e));
}
function FS(t) {
  return [t.terminalType];
}
const th = "_~IN~_";
class GS extends Ws {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
    const i = BS(e.referencedRule, e.idx) + this.topProd.name, s = n.concat(r), a = new me({ definition: s }), o = Qr(a);
    this.follows[i] = o;
  }
}
function US(t) {
  const e = {};
  return k(t, (n) => {
    const r = new GS(n).startWalking();
    Ka(e, r);
  }), e;
}
function BS(t, e) {
  return t.name + e + th;
}
let bi = {};
const jS = new Vf();
function zs(t) {
  const e = t.toString();
  if (bi.hasOwnProperty(e))
    return bi[e];
  {
    const n = jS.pattern(e);
    return bi[e] = n, n;
  }
}
function KS() {
  bi = {};
}
const nh = "Complement Sets are not supported for first char optimization", ts = `Unable to use "first char" lexer optimizations:
`;
function HS(t, e = !1) {
  try {
    const n = zs(t);
    return Qa(n.value, {}, n.flags.ignoreCase);
  } catch (n) {
    if (n.message === nh)
      e && kd(`${ts}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Va(`${ts}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function Qa(t, e, n) {
  switch (t.type) {
    case "Disjunction":
      for (let i = 0; i < t.value.length; i++)
        Qa(t.value[i], e, n);
      break;
    case "Alternative":
      const r = t.value;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        switch (s.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a = s;
        switch (a.type) {
          case "Character":
            yi(a.value, e, n);
            break;
          case "Set":
            if (a.complement === !0)
              throw Error(nh);
            k(a.value, (l) => {
              if (typeof l == "number")
                yi(l, e, n);
              else {
                const u = l;
                if (n === !0)
                  for (let c = u.from; c <= u.to; c++)
                    yi(c, e, n);
                else {
                  for (let c = u.from; c <= u.to && c < Sr; c++)
                    yi(c, e, n);
                  if (u.to >= Sr) {
                    const c = u.from >= Sr ? u.from : Sr, f = u.to, d = wt(c), h = wt(f);
                    for (let m = d; m <= h; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            Qa(a.value, e, n);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && eo(a) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return Z(e);
}
function yi(t, e, n) {
  const r = wt(t);
  e[r] = r, n === !0 && WS(t, e);
}
function WS(t, e) {
  const n = String.fromCharCode(t), r = n.toUpperCase();
  if (r !== n) {
    const i = wt(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = n.toLowerCase();
    if (i !== n) {
      const s = wt(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function Du(t, e) {
  return Mn(t.value, (n) => {
    if (typeof n == "number")
      return ge(e, n);
    {
      const r = n;
      return Mn(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function eo(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? M(t.value) ? qe(t.value, eo) : eo(t.value) : !1;
}
class zS extends Rs {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ge(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? Du(e, this.targetCharCodes) === void 0 && (this.found = !0) : Du(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function cl(t, e) {
  if (e instanceof RegExp) {
    const n = zs(e), r = new zS(t);
    return r.visit(n), r.found;
  } else
    return Mn(e, (n) => ge(t, n.charCodeAt(0))) !== void 0;
}
const Yt = "PATTERN", xr = "defaultMode", Ti = "modes";
let rh = typeof new RegExp("(?:)").sticky == "boolean";
function VS(t, e) {
  e = tl(e, {
    useSticky: rh,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (R, v) => v()
  });
  const n = e.tracer;
  n("initCharCodeToOptimizedIndexMap", () => {
    gI();
  });
  let r;
  n("Reject Lexer.NA", () => {
    r = Ls(t, (R) => R[Yt] === he.NA);
  });
  let i = !1, s;
  n("Transform Patterns", () => {
    i = !1, s = w(r, (R) => {
      const v = R[Yt];
      if (xt(v)) {
        const S = v.source;
        return S.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        S !== "^" && S !== "$" && S !== "." && !v.ignoreCase ? S : S.length === 2 && S[0] === "\\" && // not a meta character
        !ge([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], S[1]) ? S[1] : e.useSticky ? Gu(v) : Fu(v);
      } else {
        if (ht(v))
          return i = !0, { exec: v };
        if (typeof v == "object")
          return i = !0, v;
        if (typeof v == "string") {
          if (v.length === 1)
            return v;
          {
            const S = v.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), O = new RegExp(S);
            return e.useSticky ? Gu(O) : Fu(O);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, l, u, c;
  n("misc mapping", () => {
    a = w(r, (R) => R.tokenTypeIdx), o = w(r, (R) => {
      const v = R.GROUP;
      if (v !== he.SKIPPED) {
        if (je(v))
          return v;
        if (ct(v))
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = w(r, (R) => {
      const v = R.LONGER_ALT;
      if (v)
        return M(v) ? w(v, (O) => cu(r, O)) : [cu(r, v)];
    }), u = w(r, (R) => R.PUSH_MODE), c = w(r, (R) => _(R, "POP_MODE"));
  });
  let f;
  n("Line Terminator Handling", () => {
    const R = ah(e.lineTerminatorCharacters);
    f = w(r, (v) => !1), e.positionTracking !== "onlyOffset" && (f = w(r, (v) => _(v, "LINE_BREAKS") ? !!v.LINE_BREAKS : sh(v, R) === !1 && cl(R, v.PATTERN)));
  });
  let d, h, m, g;
  n("Misc Mapping #2", () => {
    d = w(r, ih), h = w(s, hI), m = xe(r, (R, v) => {
      const S = v.GROUP;
      return je(S) && S !== he.SKIPPED && (R[S] = []), R;
    }, {}), g = w(s, (R, v) => ({
      pattern: s[v],
      longerAlt: l[v],
      canLineTerminator: f[v],
      isCustom: d[v],
      short: h[v],
      group: o[v],
      push: u[v],
      pop: c[v],
      tokenTypeIdx: a[v],
      tokenType: r[v]
    }));
  });
  let T = !0, y = [];
  return e.safeMode || n("First Char Optimization", () => {
    y = xe(r, (R, v, S) => {
      if (typeof v.PATTERN == "string") {
        const O = v.PATTERN.charCodeAt(0), oe = wt(O);
        ya(R, oe, g[S]);
      } else if (M(v.START_CHARS_HINT)) {
        let O;
        k(v.START_CHARS_HINT, (oe) => {
          const Me = typeof oe == "string" ? oe.charCodeAt(0) : oe, ve = wt(Me);
          O !== ve && (O = ve, ya(R, ve, g[S]));
        });
      } else if (xt(v.PATTERN))
        if (v.PATTERN.unicode)
          T = !1, e.ensureOptimizations && Va(`${ts}	Unable to analyze < ${v.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const O = HS(v.PATTERN, e.ensureOptimizations);
          U(O) && (T = !1), k(O, (oe) => {
            ya(R, oe, g[S]);
          });
        }
      else
        e.ensureOptimizations && Va(`${ts}	TokenType: <${v.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), T = !1;
      return R;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: y,
    hasCustom: i,
    canBeOptimized: T
  };
}
function qS(t, e) {
  let n = [];
  const r = XS(t);
  n = n.concat(r.errors);
  const i = JS(r.valid), s = i.valid;
  return n = n.concat(i.errors), n = n.concat(YS(s)), n = n.concat(sI(s)), n = n.concat(aI(s, e)), n = n.concat(oI(s)), n;
}
function YS(t) {
  let e = [];
  const n = Pe(t, (r) => xt(r[Yt]));
  return e = e.concat(QS(n)), e = e.concat(nI(n)), e = e.concat(rI(n)), e = e.concat(iI(n)), e = e.concat(eI(n)), e;
}
function XS(t) {
  const e = Pe(t, (i) => !_(i, Yt)), n = w(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: Y.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = Os(t, e);
  return { errors: n, valid: r };
}
function JS(t) {
  const e = Pe(t, (i) => {
    const s = i[Yt];
    return !xt(s) && !ht(s) && !_(s, "exec") && !je(s);
  }), n = w(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: Y.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = Os(t, e);
  return { errors: n, valid: r };
}
const ZS = /[^\\][$]/;
function QS(t) {
  class e extends Rs {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(s) {
      this.found = !0;
    }
  }
  const n = Pe(t, (i) => {
    const s = i.PATTERN;
    try {
      const a = zs(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return ZS.test(s.source);
    }
  });
  return w(n, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Y.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function eI(t) {
  const e = Pe(t, (r) => r.PATTERN.test(""));
  return w(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: Y.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const tI = /[^\\[][\^]|^\^/;
function nI(t) {
  class e extends Rs {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(s) {
      this.found = !0;
    }
  }
  const n = Pe(t, (i) => {
    const s = i.PATTERN;
    try {
      const a = zs(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return tI.test(s.source);
    }
  });
  return w(n, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Y.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function rI(t) {
  const e = Pe(t, (r) => {
    const i = r[Yt];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return w(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: Y.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function iI(t) {
  const e = [];
  let n = w(t, (s) => xe(t, (a, o) => (s.PATTERN.source === o.PATTERN.source && !ge(e, o) && o.PATTERN !== he.NA && (e.push(o), a.push(o)), a), []));
  n = Xr(n);
  const r = Pe(n, (s) => s.length > 1);
  return w(r, (s) => {
    const a = w(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Be(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,
      type: Y.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function sI(t) {
  const e = Pe(t, (r) => {
    if (!_(r, "GROUP"))
      return !1;
    const i = r.GROUP;
    return i !== he.SKIPPED && i !== he.NA && !je(i);
  });
  return w(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: Y.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function aI(t, e) {
  const n = Pe(t, (i) => i.PUSH_MODE !== void 0 && !ge(e, i.PUSH_MODE));
  return w(n, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: Y.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function oI(t) {
  const e = [], n = xe(t, (r, i, s) => {
    const a = i.PATTERN;
    return a === he.NA || (je(a) ? r.push({ str: a, idx: s, tokenType: i }) : xt(a) && uI(a) && r.push({ str: a.source, idx: s, tokenType: i })), r;
  }, []);
  return k(t, (r, i) => {
    k(n, ({ str: s, idx: a, tokenType: o }) => {
      if (i < a && lI(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: Y.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function lI(t, e) {
  if (xt(e)) {
    const n = e.exec(t);
    return n !== null && n.index === 0;
  } else {
    if (ht(e))
      return e(t, 0, [], {});
    if (_(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
function uI(t) {
  return Mn([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (n) => t.source.indexOf(n) !== -1) === void 0;
}
function Fu(t) {
  const e = t.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${t.source})`, e);
}
function Gu(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
function cI(t, e, n) {
  const r = [];
  return _(t, xr) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + xr + `> property in its definition
`,
    type: Y.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), _(t, Ti) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Ti + `> property in its definition
`,
    type: Y.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), _(t, Ti) && _(t, xr) && !_(t.modes, t.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${xr}: <${t.defaultMode}>which does not exist
`,
    type: Y.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), _(t, Ti) && k(t.modes, (i, s) => {
    k(i, (a, o) => {
      if (ct(a))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: Y.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (_(a, "LONGER_ALT")) {
        const l = M(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        k(l, (u) => {
          !ct(u) && !ge(i, u) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a.name}> outside of mode <${s}>
`,
            type: Y.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function fI(t, e, n) {
  const r = [];
  let i = !1;
  const s = Xr(Ge(Z(t.modes))), a = Ls(s, (l) => l[Yt] === he.NA), o = ah(n);
  return e && k(a, (l) => {
    const u = sh(l, o);
    if (u !== !1) {
      const f = {
        message: mI(l, u),
        type: u.issue,
        tokenType: l
      };
      r.push(f);
    } else
      _(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (i = !0) : cl(o, l.PATTERN) && (i = !0);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: Y.NO_LINE_BREAKS_FLAGS
  }), r;
}
function dI(t) {
  const e = {}, n = Le(t);
  return k(n, (r) => {
    const i = t[r];
    if (M(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function ih(t) {
  const e = t.PATTERN;
  if (xt(e))
    return !1;
  if (ht(e))
    return !0;
  if (_(e, "exec"))
    return !0;
  if (je(e))
    return !1;
  throw Error("non exhaustive match");
}
function hI(t) {
  return je(t) && t.length === 1 ? t.charCodeAt(0) : !1;
}
const pI = {
  // implements /\n|\r\n?/g.test
  test: function(t) {
    const e = t.length;
    for (let n = this.lastIndex; n < e; n++) {
      const r = t.charCodeAt(n);
      if (r === 10)
        return this.lastIndex = n + 1, !0;
      if (r === 13)
        return t.charCodeAt(n + 1) === 10 ? this.lastIndex = n + 2 : this.lastIndex = n + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function sh(t, e) {
  if (_(t, "LINE_BREAKS"))
    return !1;
  if (xt(t.PATTERN)) {
    try {
      cl(e, t.PATTERN);
    } catch (n) {
      return {
        issue: Y.IDENTIFY_TERMINATOR,
        errMsg: n.message
      };
    }
    return !1;
  } else {
    if (je(t.PATTERN))
      return !1;
    if (ih(t))
      return { issue: Y.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function mI(t, e) {
  if (e.issue === Y.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === Y.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function ah(t) {
  return w(t, (n) => je(n) ? n.charCodeAt(0) : n);
}
function ya(t, e, n) {
  t[e] === void 0 ? t[e] = [n] : t[e].push(n);
}
const Sr = 256;
let Oi = [];
function wt(t) {
  return t < Sr ? t : Oi[t];
}
function gI() {
  if (U(Oi)) {
    Oi = new Array(65536);
    for (let t = 0; t < 65536; t++)
      Oi[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
function ei(t, e) {
  const n = t.tokenTypeIdx;
  return n === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[n] === !0;
}
function ns(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
let Uu = 1;
const oh = {};
function ti(t) {
  const e = yI(t);
  TI(e), $I(e), vI(e), k(e, (n) => {
    n.isParent = n.categoryMatches.length > 0;
  });
}
function yI(t) {
  let e = ae(t), n = t, r = !0;
  for (; r; ) {
    n = Xr(Ge(w(n, (s) => s.CATEGORIES)));
    const i = Os(n, e);
    e = e.concat(i), U(i) ? r = !1 : n = i;
  }
  return e;
}
function TI(t) {
  k(t, (e) => {
    uh(e) || (oh[Uu] = e, e.tokenTypeIdx = Uu++), Bu(e) && !M(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Bu(e) || (e.CATEGORIES = []), RI(e) || (e.categoryMatches = []), AI(e) || (e.categoryMatchesMap = {});
  });
}
function vI(t) {
  k(t, (e) => {
    e.categoryMatches = [], k(e.categoryMatchesMap, (n, r) => {
      e.categoryMatches.push(oh[r].tokenTypeIdx);
    });
  });
}
function $I(t) {
  k(t, (e) => {
    lh([], e);
  });
}
function lh(t, e) {
  k(t, (n) => {
    e.categoryMatchesMap[n.tokenTypeIdx] = !0;
  }), k(e.CATEGORIES, (n) => {
    const r = t.concat(e);
    ge(r, n) || lh(r, n);
  });
}
function uh(t) {
  return _(t, "tokenTypeIdx");
}
function Bu(t) {
  return _(t, "CATEGORIES");
}
function RI(t) {
  return _(t, "categoryMatches");
}
function AI(t) {
  return _(t, "categoryMatchesMap");
}
function EI(t) {
  return _(t, "tokenTypeIdx");
}
const to = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, n, r, i) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`;
  }
};
var Y;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(Y || (Y = {}));
const Ir = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: to,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(Ir);
class he {
  constructor(e, n = Ir) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${i}>`);
        const { time: o, value: l } = Nd(s), u = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${a}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof n == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = Ka({}, Ir, n);
    const r = this.config.traceInitPerf;
    r === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Ir.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = pI;
        else if (this.config.lineTerminatorCharacters === Ir.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (n.safeMode && n.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), M(e) ? i = {
          modes: { defaultMode: ae(e) },
          defaultMode: xr
        } : (s = !1, i = ae(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(cI(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(fI(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, k(i.modes, (o, l) => {
        i.modes[l] = Ls(o, (u) => ct(u));
      });
      const a = Le(i.modes);
      if (k(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(qS(o, a));
          }), U(this.lexerDefinitionErrors)) {
            ti(o);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = VS(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: n.positionTracking,
                ensureOptimizations: n.ensureOptimizations,
                safeMode: n.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = u.charCodeToPatternIdxToConfig, this.emptyGroups = Ka({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !U(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = w(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      k(this.lexerDefinitionWarning, (o) => {
        kd(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (rh ? (this.chopInput = On, this.match = this.matchWithTest) : (this.updateLastIndex = J, this.match = this.matchWithExec), s && (this.handleModes = J), this.trackStartLines === !1 && (this.computeNewColumn = On), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = J), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = xe(this.canModeBeOptimized, (l, u, c) => (u === !1 && l.push(c), l), []);
        if (n.ensureOptimizations && !U(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        KS();
      }), this.TRACE_INIT("toFastProperties", () => {
        bd(this);
      });
    });
  }
  tokenize(e, n = this.defaultMode) {
    if (!U(this.lexerDefinitionErrors)) {
      const i = w(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, n);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, n) {
    let r, i, s, a, o, l, u, c, f, d, h, m, g, T, y;
    const R = e, v = R.length;
    let S = 0, O = 0;
    const oe = this.hasCustom ? 0 : Math.floor(e.length / 10), Me = new Array(oe), ve = [];
    let He = this.trackStartLines ? 1 : void 0, we = this.trackStartLines ? 1 : void 0;
    const x = dI(this.emptyGroups), $ = this.trackStartLines, E = this.config.lineTerminatorsPattern;
    let I = 0, L = [], b = [];
    const N = [], $e = [];
    Object.freeze($e);
    let Q;
    function V() {
      return L;
    }
    function Gt(le) {
      const _e = wt(le), un = b[_e];
      return un === void 0 ? $e : un;
    }
    const _p = (le) => {
      if (N.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      le.tokenType.PUSH_MODE === void 0) {
        const _e = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(le);
        ve.push({
          offset: le.startOffset,
          line: le.startLine,
          column: le.startColumn,
          length: le.image.length,
          message: _e
        });
      } else {
        N.pop();
        const _e = Pn(N);
        L = this.patternIdxToConfig[_e], b = this.charCodeToPatternIdxToConfig[_e], I = L.length;
        const un = this.canModeBeOptimized[_e] && this.config.safeMode === !1;
        b && un ? Q = Gt : Q = V;
      }
    };
    function xl(le) {
      N.push(le), b = this.charCodeToPatternIdxToConfig[le], L = this.patternIdxToConfig[le], I = L.length, I = L.length;
      const _e = this.canModeBeOptimized[le] && this.config.safeMode === !1;
      b && _e ? Q = Gt : Q = V;
    }
    xl.call(this, n);
    let De;
    const Sl = this.config.recoveryEnabled;
    for (; S < v; ) {
      l = null;
      const le = R.charCodeAt(S), _e = Q(le), un = _e.length;
      for (r = 0; r < un; r++) {
        De = _e[r];
        const Re = De.pattern;
        u = null;
        const tt = De.short;
        if (tt !== !1 ? le === tt && (l = Re) : De.isCustom === !0 ? (y = Re.exec(R, S, Me, x), y !== null ? (l = y[0], y.payload !== void 0 && (u = y.payload)) : l = null) : (this.updateLastIndex(Re, S), l = this.match(Re, e, S)), l !== null) {
          if (o = De.longerAlt, o !== void 0) {
            const vt = o.length;
            for (s = 0; s < vt; s++) {
              const nt = L[o[s]], Ut = nt.pattern;
              if (c = null, nt.isCustom === !0 ? (y = Ut.exec(R, S, Me, x), y !== null ? (a = y[0], y.payload !== void 0 && (c = y.payload)) : a = null) : (this.updateLastIndex(Ut, S), a = this.match(Ut, e, S)), a && a.length > l.length) {
                l = a, u = c, De = nt;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (f = l.length, d = De.group, d !== void 0 && (h = De.tokenTypeIdx, m = this.createTokenInstance(l, S, h, De.tokenType, He, we, f), this.handlePayload(m, u), d === !1 ? O = this.addToken(Me, O, m) : x[d].push(m)), e = this.chopInput(e, f), S = S + f, we = this.computeNewColumn(we, f), $ === !0 && De.canLineTerminator === !0) {
          let Re = 0, tt, vt;
          E.lastIndex = 0;
          do
            tt = E.test(l), tt === !0 && (vt = E.lastIndex - 1, Re++);
          while (tt === !0);
          Re !== 0 && (He = He + Re, we = f - vt, this.updateTokenEndLineColumnLocation(m, d, vt, Re, He, we, f));
        }
        this.handleModes(De, _p, xl, m);
      } else {
        const Re = S, tt = He, vt = we;
        let nt = Sl === !1;
        for (; nt === !1 && S < v; )
          for (e = this.chopInput(e, 1), S++, i = 0; i < I; i++) {
            const Ut = L[i], ta = Ut.pattern, Il = Ut.short;
            if (Il !== !1 ? R.charCodeAt(S) === Il && (nt = !0) : Ut.isCustom === !0 ? nt = ta.exec(R, S, Me, x) !== null : (this.updateLastIndex(ta, S), nt = ta.exec(e) !== null), nt === !0)
              break;
          }
        if (g = S - Re, we = this.computeNewColumn(we, g), T = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(R, Re, g, tt, vt), ve.push({
          offset: Re,
          line: tt,
          column: vt,
          length: g,
          message: T
        }), Sl === !1)
          break;
      }
    }
    return this.hasCustom || (Me.length = O), {
      tokens: Me,
      groups: x,
      errors: ve
    };
  }
  handleModes(e, n, r, i) {
    if (e.pop === !0) {
      const s = e.push;
      n(i), s !== void 0 && r.call(this, s);
    } else e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, n) {
    return e.substring(n);
  }
  updateLastIndex(e, n) {
    e.lastIndex = n;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, n, r, i, s, a, o) {
    let l, u;
    n !== void 0 && (l = r === o - 1, u = l ? -1 : 0, i === 1 && l === !0 || (e.endLine = s + u, e.endColumn = a - 1 + -u));
  }
  computeNewColumn(e, n) {
    return e + n;
  }
  createOffsetOnlyToken(e, n, r, i) {
    return {
      image: e,
      startOffset: n,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createStartOnlyToken(e, n, r, i, s, a) {
    return {
      image: e,
      startOffset: n,
      startLine: s,
      startColumn: a,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createFullToken(e, n, r, i, s, a, o) {
    return {
      image: e,
      startOffset: n,
      endOffset: n + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a,
      endColumn: a + o - 1,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  addTokenUsingPush(e, n, r) {
    return e.push(r), n;
  }
  addTokenUsingMemberAccess(e, n, r) {
    return e[n] = r, n++, n;
  }
  handlePayloadNoCustom(e, n) {
  }
  handlePayloadWithCustom(e, n) {
    n !== null && (e.payload = n);
  }
  matchWithTest(e, n, r) {
    return e.test(n) === !0 ? n.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, n) {
    const r = e.exec(n);
    return r !== null ? r[0] : null;
  }
}
he.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
he.NA = /NOT_APPLICABLE/;
function mn(t) {
  return ch(t) ? t.LABEL : t.name;
}
function ch(t) {
  return je(t.LABEL) && t.LABEL !== "";
}
const xI = "parent", ju = "categories", Ku = "label", Hu = "group", Wu = "push_mode", zu = "pop_mode", Vu = "longer_alt", qu = "line_breaks", Yu = "start_chars_hint";
function fh(t) {
  return SI(t);
}
function SI(t) {
  const e = t.pattern, n = {};
  if (n.name = t.name, ct(e) || (n.PATTERN = e), _(t, xI))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return _(t, ju) && (n.CATEGORIES = t[ju]), ti([n]), _(t, Ku) && (n.LABEL = t[Ku]), _(t, Hu) && (n.GROUP = t[Hu]), _(t, zu) && (n.POP_MODE = t[zu]), _(t, Wu) && (n.PUSH_MODE = t[Wu]), _(t, Vu) && (n.LONGER_ALT = t[Vu]), _(t, qu) && (n.LINE_BREAKS = t[qu]), _(t, Yu) && (n.START_CHARS_HINT = t[Yu]), n;
}
const _t = fh({ name: "EOF", pattern: he.NA });
ti([_t]);
function fl(t, e, n, r, i, s, a, o) {
  return {
    image: e,
    startOffset: n,
    endOffset: r,
    startLine: i,
    endLine: s,
    startColumn: a,
    endColumn: o,
    tokenTypeIdx: t.tokenTypeIdx,
    tokenType: t
  };
}
function dh(t, e) {
  return ei(t, e);
}
const dn = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: n, ruleName: r }) {
    return `Expecting ${ch(t) ? `--> ${mn(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: n, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Be(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = xe(t, (d, h) => d.concat(h), []), u = w(l, (d) => `[${w(d, (h) => mn(h)).join(", ")}]`), f = `one of these possible Token sequences:
${w(u, (d, h) => `  ${h + 1}. ${d}`).join(`
`)}`;
      return s + f + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: n, ruleName: r }) {
    const i = "Expecting: ", a = `
but found: '` + Be(e).image + "'";
    if (n)
      return i + n + a;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${w(t, (u) => `[${w(u, (c) => mn(c)).join(",")}]`).join(" ,")}>`;
      return i + l + a;
    }
  }
};
Object.freeze(dn);
const II = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, Kt = {
  buildDuplicateFoundError(t, e) {
    function n(c) {
      return c instanceof K ? c.terminalType.name : c instanceof fe ? c.nonTerminalName : "";
    }
    const r = t.name, i = Be(e), s = i.idx, a = We(i), o = n(i), l = s > 0;
    let u = `->${a}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = u.replace(/[ \t]+/g, " "), u = u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(t) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(t) {
    const e = w(t.prefixPath, (i) => mn(i)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = w(t.prefixPath, (i) => mn(i)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(t) {
    let e = We(t.repetition);
    return t.repetition.idx !== 0 && (e += t.repetition.idx), `The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(t) {
    return "deprecated";
  },
  buildEmptyAlternationError(t) {
    return `Ambiguous empty alternative: <${t.emptyChoiceIdx + 1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(t) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(t) {
    const e = t.topLevelRule.name, n = w(t.leftRecursionPath, (s) => s.name), r = `${e} --> ${n.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(t) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(t) {
    let e;
    return t.topLevelRule instanceof jn ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function wI(t, e) {
  const n = new _I(t, e);
  return n.resolveRefs(), n.errors;
}
class _I extends Kn {
  constructor(e, n) {
    super(), this.nameToTopRule = e, this.errMsgProvider = n, this.errors = [];
  }
  resolveRefs() {
    k(Z(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const n = this.nameToTopRule[e.nonTerminalName];
    if (n)
      e.referencedRule = n;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: de.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class CI extends Ws {
  constructor(e, n) {
    super(), this.topProd = e, this.path = n, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = ae(this.path.ruleStack).reverse(), this.occurrenceStack = ae(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, n = []) {
    this.found || super.walk(e, n);
  }
  walkProdRef(e, n, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = n.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    U(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class kI extends CI {
  constructor(e, n) {
    super(e, n), this.path = n, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, n, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = n.concat(r), s = new me({ definition: i });
      this.possibleTokTypes = Qr(s), this.found = !0;
    }
  }
}
class Vs extends Ws {
  constructor(e, n) {
    super(), this.topRule = e, this.occurrence = n, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class NI extends Vs {
  walkMany(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, n, r);
  }
}
class Xu extends Vs {
  walkManySep(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, n, r);
  }
}
class bI extends Vs {
  walkAtLeastOne(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, n, r);
  }
}
class Ju extends Vs {
  walkAtLeastOneSep(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, n, r);
  }
}
function no(t, e, n = []) {
  n = ae(n);
  let r = [], i = 0;
  function s(o) {
    return o.concat(ne(t, i + 1));
  }
  function a(o) {
    const l = no(s(o), e, n);
    return r.concat(l);
  }
  for (; n.length < e && i < t.length; ) {
    const o = t[i];
    if (o instanceof me)
      return a(o.definition);
    if (o instanceof fe)
      return a(o.definition);
    if (o instanceof se)
      r = a(o.definition);
    else if (o instanceof Se) {
      const l = o.definition.concat([
        new q({
          definition: o.definition
        })
      ]);
      return a(l);
    } else if (o instanceof Ie) {
      const l = [
        new me({ definition: o.definition }),
        new q({
          definition: [new K({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(l);
    } else if (o instanceof ye) {
      const l = o.definition.concat([
        new q({
          definition: [new K({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a(l);
    } else if (o instanceof q) {
      const l = o.definition.concat([
        new q({
          definition: o.definition
        })
      ]);
      r = a(l);
    } else {
      if (o instanceof Te)
        return k(o.definition, (l) => {
          U(l.definition) === !1 && (r = a(l.definition));
        }), r;
      if (o instanceof K)
        n.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: n,
    suffixDef: ne(t, i)
  }), r;
}
function hh(t, e, n, r) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a = "EXIT_ALTERNATIVE";
  let o = !1;
  const l = e.length, u = l - r - 1, c = [], f = [];
  for (f.push({
    idx: -1,
    def: t,
    ruleStack: [],
    occurrenceStack: []
  }); !U(f); ) {
    const d = f.pop();
    if (d === a) {
      o && Pn(f).idx <= u && f.pop();
      continue;
    }
    const h = d.def, m = d.idx, g = d.ruleStack, T = d.occurrenceStack;
    if (U(h))
      continue;
    const y = h[0];
    if (y === i) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: Gr(g),
        occurrenceStack: Gr(T)
      };
      f.push(R);
    } else if (y instanceof K)
      if (m < l - 1) {
        const R = m + 1, v = e[R];
        if (n(v, y.terminalType)) {
          const S = {
            idx: R,
            def: ne(h),
            ruleStack: g,
            occurrenceStack: T
          };
          f.push(S);
        }
      } else if (m === l - 1)
        c.push({
          nextTokenType: y.terminalType,
          nextTokenOccurrence: y.idx,
          ruleStack: g,
          occurrenceStack: T
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (y instanceof fe) {
      const R = ae(g);
      R.push(y.nonTerminalName);
      const v = ae(T);
      v.push(y.idx);
      const S = {
        idx: m,
        def: y.definition.concat(s, ne(h)),
        ruleStack: R,
        occurrenceStack: v
      };
      f.push(S);
    } else if (y instanceof se) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(R), f.push(a);
      const v = {
        idx: m,
        def: y.definition.concat(ne(h)),
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(v);
    } else if (y instanceof Se) {
      const R = new q({
        definition: y.definition,
        idx: y.idx
      }), v = y.definition.concat([R], ne(h)), S = {
        idx: m,
        def: v,
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(S);
    } else if (y instanceof Ie) {
      const R = new K({
        terminalType: y.separator
      }), v = new q({
        definition: [R].concat(y.definition),
        idx: y.idx
      }), S = y.definition.concat([v], ne(h)), O = {
        idx: m,
        def: S,
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(O);
    } else if (y instanceof ye) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(R), f.push(a);
      const v = new K({
        terminalType: y.separator
      }), S = new q({
        definition: [v].concat(y.definition),
        idx: y.idx
      }), O = y.definition.concat([S], ne(h)), oe = {
        idx: m,
        def: O,
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(oe);
    } else if (y instanceof q) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(R), f.push(a);
      const v = new q({
        definition: y.definition,
        idx: y.idx
      }), S = y.definition.concat([v], ne(h)), O = {
        idx: m,
        def: S,
        ruleStack: g,
        occurrenceStack: T
      };
      f.push(O);
    } else if (y instanceof Te)
      for (let R = y.definition.length - 1; R >= 0; R--) {
        const v = y.definition[R], S = {
          idx: m,
          def: v.definition.concat(ne(h)),
          ruleStack: g,
          occurrenceStack: T
        };
        f.push(S), f.push(a);
      }
    else if (y instanceof me)
      f.push({
        idx: m,
        def: y.definition.concat(ne(h)),
        ruleStack: g,
        occurrenceStack: T
      });
    else if (y instanceof jn)
      f.push(OI(y, m, g, T));
    else
      throw Error("non exhaustive match");
  }
  return c;
}
function OI(t, e, n, r) {
  const i = ae(n);
  i.push(t.name);
  const s = ae(r);
  return s.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var W;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(W || (W = {}));
function dl(t) {
  if (t instanceof se || t === "Option")
    return W.OPTION;
  if (t instanceof q || t === "Repetition")
    return W.REPETITION;
  if (t instanceof Se || t === "RepetitionMandatory")
    return W.REPETITION_MANDATORY;
  if (t instanceof Ie || t === "RepetitionMandatoryWithSeparator")
    return W.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof ye || t === "RepetitionWithSeparator")
    return W.REPETITION_WITH_SEPARATOR;
  if (t instanceof Te || t === "Alternation")
    return W.ALTERNATION;
  throw Error("non exhaustive match");
}
function Zu(t) {
  const { occurrence: e, rule: n, prodType: r, maxLookahead: i } = t, s = dl(r);
  return s === W.ALTERNATION ? qs(e, n, i) : Ys(e, n, s, i);
}
function LI(t, e, n, r, i, s) {
  const a = qs(t, e, n), o = gh(a) ? ns : ei;
  return s(a, r, o, i);
}
function PI(t, e, n, r, i, s) {
  const a = Ys(t, e, i, n), o = gh(a) ? ns : ei;
  return s(a[0], o, r);
}
function MI(t, e, n, r) {
  const i = t.length, s = qe(t, (a) => qe(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = w(a, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const u = t[l], c = u.length, f = o[l];
        if (!(f !== void 0 && f.call(this) === !1))
          e: for (let d = 0; d < c; d++) {
            const h = u[d], m = h.length;
            for (let g = 0; g < m; g++) {
              const T = this.LA(g + 1);
              if (n(T, h[g]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !r) {
    const a = w(t, (l) => Ge(l)), o = xe(a, (l, u, c) => (k(u, (f) => {
      _(l, f.tokenTypeIdx) || (l[f.tokenTypeIdx] = c), k(f.categoryMatches, (d) => {
        _(l, d) || (l[d] = c);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a = 0; a < i; a++) {
        const o = t[a], l = o.length;
        e: for (let u = 0; u < l; u++) {
          const c = o[u], f = c.length;
          for (let d = 0; d < f; d++) {
            const h = this.LA(d + 1);
            if (n(h, c[d]) === !1)
              continue e;
          }
          return a;
        }
      }
    };
}
function DI(t, e, n) {
  const r = qe(t, (s) => s.length === 1), i = t.length;
  if (r && !n) {
    const s = Ge(t);
    if (s.length === 1 && U(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a = xe(s, (o, l, u) => (o[l.tokenTypeIdx] = !0, k(l.categoryMatches, (c) => {
        o[c] = !0;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a[o.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const a = t[s], o = a.length;
        for (let l = 0; l < o; l++) {
          const u = this.LA(l + 1);
          if (e(u, a[l]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class FI extends Ws {
  constructor(e, n, r) {
    super(), this.topProd = e, this.targetOccurrence = n, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, n, r, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === n ? (this.restDef = r.concat(i), !0) : !1;
  }
  walkOption(e, n, r) {
    this.checkIsTarget(e, W.OPTION, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOne(e, n, r) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOneSep(e, n, r) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
  walkMany(e, n, r) {
    this.checkIsTarget(e, W.REPETITION, n, r) || super.walkOption(e, n, r);
  }
  walkManySep(e, n, r) {
    this.checkIsTarget(e, W.REPETITION_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
}
class ph extends Kn {
  constructor(e, n, r) {
    super(), this.targetOccurrence = e, this.targetProdType = n, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, n) {
    e.idx === this.targetOccurrence && this.targetProdType === n && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, W.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, W.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, W.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, W.ALTERNATION);
  }
}
function Qu(t) {
  const e = new Array(t);
  for (let n = 0; n < t; n++)
    e[n] = [];
  return e;
}
function Ta(t) {
  let e = [""];
  for (let n = 0; n < t.length; n++) {
    const r = t[n], i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      i.push(a + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const l = "_" + r.categoryMatches[o];
        i.push(a + l);
      }
    }
    e = i;
  }
  return e;
}
function GI(t, e, n) {
  for (let r = 0; r < t.length; r++) {
    if (r === n)
      continue;
    const i = t[r];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (i[a] === !0)
        return !1;
    }
  }
  return !0;
}
function mh(t, e) {
  const n = w(t, (a) => no([a], 1)), r = Qu(n.length), i = w(n, (a) => {
    const o = {};
    return k(a, (l) => {
      const u = Ta(l.partialPath);
      k(u, (c) => {
        o[c] = !0;
      });
    }), o;
  });
  let s = n;
  for (let a = 1; a <= e; a++) {
    const o = s;
    s = Qu(o.length);
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      for (let c = 0; c < u.length; c++) {
        const f = u[c].partialPath, d = u[c].suffixDef, h = Ta(f);
        if (GI(i, h, l) || U(d) || f.length === e) {
          const g = r[l];
          if (ro(g, f) === !1) {
            g.push(f);
            for (let T = 0; T < h.length; T++) {
              const y = h[T];
              i[l][y] = !0;
            }
          }
        } else {
          const g = no(d, a + 1, f);
          s[l] = s[l].concat(g), k(g, (T) => {
            const y = Ta(T.partialPath);
            k(y, (R) => {
              i[l][R] = !0;
            });
          });
        }
      }
    }
  }
  return r;
}
function qs(t, e, n, r) {
  const i = new ph(t, W.ALTERNATION, r);
  return e.accept(i), mh(i.result, n);
}
function Ys(t, e, n, r) {
  const i = new ph(t, n);
  e.accept(i);
  const s = i.result, o = new FI(e, t, n).startWalking(), l = new me({ definition: s }), u = new me({ definition: o });
  return mh([l, u], r);
}
function ro(t, e) {
  e: for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r.length === e.length) {
      for (let i = 0; i < r.length; i++) {
        const s = e[i], a = r[i];
        if ((s === a || a.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function UI(t, e) {
  return t.length < e.length && qe(t, (n, r) => {
    const i = e[r];
    return n === i || i.categoryMatchesMap[n.tokenTypeIdx];
  });
}
function gh(t) {
  return qe(t, (e) => qe(e, (n) => qe(n, (r) => U(r.categoryMatches))));
}
function BI(t) {
  const e = t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  });
  return w(e, (n) => Object.assign({ type: de.CUSTOM_LOOKAHEAD_VALIDATION }, n));
}
function jI(t, e, n, r) {
  const i = ke(t, (l) => KI(l, n)), s = tw(t, e, n), a = ke(t, (l) => JI(l, n)), o = ke(t, (l) => zI(l, t, r, n));
  return i.concat(s, a, o);
}
function KI(t, e) {
  const n = new WI();
  t.accept(n);
  const r = n.allProductions, i = X$(r, HI), s = hR(i, (o) => o.length > 1);
  return w(Z(s), (o) => {
    const l = Be(o), u = e.buildDuplicateFoundError(t, o), c = We(l), f = {
      message: u,
      type: de.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: c,
      occurrence: l.idx
    }, d = yh(l);
    return d && (f.parameter = d), f;
  });
}
function HI(t) {
  return `${We(t)}_#_${t.idx}_#_${yh(t)}`;
}
function yh(t) {
  return t instanceof K ? t.terminalType.name : t instanceof fe ? t.nonTerminalName : "";
}
class WI extends Kn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function zI(t, e, n, r) {
  const i = [];
  if (xe(e, (a, o) => o.name === t.name ? a + 1 : a, 0) > 1) {
    const a = r.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: n
    });
    i.push({
      message: a,
      type: de.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return i;
}
function VI(t, e, n) {
  const r = [];
  let i;
  return ge(e, t) || (i = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: de.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), r;
}
function Th(t, e, n, r = []) {
  const i = [], s = Li(e.definition);
  if (U(s))
    return [];
  {
    const a = t.name;
    ge(s, t) && i.push({
      message: n.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: r
      }),
      type: de.LEFT_RECURSION,
      ruleName: a
    });
    const l = Os(s, r.concat([t])), u = ke(l, (c) => {
      const f = ae(r);
      return f.push(c), Th(t, c, n, f);
    });
    return i.concat(u);
  }
}
function Li(t) {
  let e = [];
  if (U(t))
    return e;
  const n = Be(t);
  if (n instanceof fe)
    e.push(n.referencedRule);
  else if (n instanceof me || n instanceof se || n instanceof Se || n instanceof Ie || n instanceof ye || n instanceof q)
    e = e.concat(Li(n.definition));
  else if (n instanceof Te)
    e = Ge(w(n.definition, (s) => Li(s.definition)));
  else if (!(n instanceof K)) throw Error("non exhaustive match");
  const r = es(n), i = t.length > 1;
  if (r && i) {
    const s = ne(t);
    return e.concat(Li(s));
  } else
    return e;
}
class hl extends Kn {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function qI(t, e) {
  const n = new hl();
  t.accept(n);
  const r = n.alternations;
  return ke(r, (s) => {
    const a = Gr(s.definition);
    return ke(a, (o, l) => {
      const u = hh([o], [], ei, 1);
      return U(u) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: t,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: de.NONE_LAST_EMPTY_ALT,
          ruleName: t.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function YI(t, e, n) {
  const r = new hl();
  t.accept(r);
  let i = r.alternations;
  return i = Ls(i, (a) => a.ignoreAmbiguities === !0), ke(i, (a) => {
    const o = a.idx, l = a.maxLookahead || e, u = qs(o, t, l, a), c = QI(u, a, t, n), f = ew(u, a, t, n);
    return c.concat(f);
  });
}
class XI extends Kn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function JI(t, e) {
  const n = new hl();
  t.accept(n);
  const r = n.alternations;
  return ke(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: s
      }),
      type: de.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: s.idx
    }
  ] : []);
}
function ZI(t, e, n) {
  const r = [];
  return k(t, (i) => {
    const s = new XI();
    i.accept(s);
    const a = s.allProductions;
    k(a, (o) => {
      const l = dl(o), u = o.maxLookahead || e, c = o.idx, d = Ys(c, i, l, u)[0];
      if (U(Ge(d))) {
        const h = n.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: h,
          type: de.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function QI(t, e, n, r) {
  const i = [], s = xe(t, (o, l, u) => (e.definition[u].ignoreAmbiguities === !0 || k(l, (c) => {
    const f = [u];
    k(t, (d, h) => {
      u !== h && ro(d, c) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[h].ignoreAmbiguities !== !0 && f.push(h);
    }), f.length > 1 && !ro(i, c) && (i.push(c), o.push({
      alts: f,
      path: c
    }));
  }), o), []);
  return w(s, (o) => {
    const l = w(o.alts, (c) => c + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: n,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: de.AMBIGUOUS_ALTS,
      ruleName: n.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function ew(t, e, n, r) {
  const i = xe(t, (a, o, l) => {
    const u = w(o, (c) => ({ idx: l, path: c }));
    return a.concat(u);
  }, []);
  return Xr(ke(i, (a) => {
    if (e.definition[a.idx].ignoreAmbiguities === !0)
      return [];
    const l = a.idx, u = a.path, c = Pe(i, (d) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[d.idx].ignoreAmbiguities !== !0 && d.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      UI(d.path, u)
    ));
    return w(c, (d) => {
      const h = [d.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: n,
          alternation: e,
          ambiguityIndices: h,
          prefixPath: d.path
        }),
        type: de.AMBIGUOUS_PREFIX_ALTS,
        ruleName: n.name,
        occurrence: m,
        alternatives: h
      };
    });
  }));
}
function tw(t, e, n) {
  const r = [], i = w(e, (s) => s.name);
  return k(t, (s) => {
    const a = s.name;
    if (ge(i, a)) {
      const o = n.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: de.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), r;
}
function nw(t) {
  const e = tl(t, {
    errMsgProvider: II
  }), n = {};
  return k(t.rules, (r) => {
    n[r.name] = r;
  }), wI(n, e.errMsgProvider);
}
function rw(t) {
  return t = tl(t, {
    errMsgProvider: Kt
  }), jI(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName);
}
const vh = "MismatchedTokenException", $h = "NoViableAltException", Rh = "EarlyExitException", Ah = "NotAllInputParsedException", Eh = [
  vh,
  $h,
  Rh,
  Ah
];
Object.freeze(Eh);
function rs(t) {
  return ge(Eh, t.name);
}
class Xs extends Error {
  constructor(e, n) {
    super(e), this.token = n, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class xh extends Xs {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = vh;
  }
}
class iw extends Xs {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = $h;
  }
}
class sw extends Xs {
  constructor(e, n) {
    super(e, n), this.name = Ah;
  }
}
class aw extends Xs {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = Rh;
  }
}
const va = {}, Sh = "InRuleRecoveryException";
class ow extends Error {
  constructor(e) {
    super(e), this.name = Sh;
  }
}
class lw {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = _(e, "recoveryEnabled") ? e.recoveryEnabled : dt.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = uw);
  }
  getTokenToInsert(e) {
    const n = fl(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return n.isInsertedInRecovery = !0, n;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, n, r, i) {
    const s = this.findReSyncTokenType(), a = this.exportLexerState(), o = [];
    let l = !1;
    const u = this.LA(1);
    let c = this.LA(1);
    const f = () => {
      const d = this.LA(0), h = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: d,
        ruleName: this.getCurrRuleFullName()
      }), m = new xh(h, u, this.LA(0));
      m.resyncedTokens = Gr(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(c, i)) {
        f();
        return;
      } else if (r.call(this)) {
        f(), e.apply(this, n);
        return;
      } else this.tokenMatcher(c, s) ? l = !0 : (c = this.SKIP_TOKEN(), this.addToResyncTokens(c, o));
    this.importLexerState(a);
  }
  shouldInRepetitionRecoveryBeTried(e, n, r) {
    return !(r === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, n)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, n) {
    const r = this.getCurrentGrammarPath(e, n);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, n) {
    if (this.canRecoverWithSingleTokenInsertion(e, n))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new ow("sad sad panda");
  }
  canPerformInRuleRecovery(e, n) {
    return this.canRecoverWithSingleTokenInsertion(e, n) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, n) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || U(n))
      return !1;
    const r = this.LA(1);
    return Mn(n, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const n = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(n);
    return ge(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let n = this.LA(1), r = 2;
    for (; ; ) {
      const i = Mn(e, (s) => dh(n, s));
      if (i !== void 0)
        return i;
      n = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return va;
    const e = this.getLastExplicitRuleShortName(), n = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: n,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, n = this.RULE_OCCURRENCE_STACK;
    return w(e, (r, i) => i === 0 ? va : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: n[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = w(this.buildFullFollowKeyStack(), (n) => this.getFollowSetFromFollowKey(n));
    return Ge(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === va)
      return [_t];
    const n = e.ruleName + e.idxInCallingRule + th + e.inRule;
    return this.resyncFollows[n];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, n) {
    return this.tokenMatcher(e, _t) || n.push(e), n;
  }
  reSyncTo(e) {
    const n = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === !1; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, n);
    return Gr(n);
  }
  attemptInRepetitionRecovery(e, n, r, i, s, a, o) {
  }
  getCurrentGrammarPath(e, n) {
    const r = this.getHumanReadableRuleStack(), i = ae(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: n
    };
  }
  getHumanReadableRuleStack() {
    return w(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function uw(t, e, n, r, i, s, a) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const d = this.getCurrRuleFullName(), h = this.getGAstProductions()[d];
    l = new s(h, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let u = l.token, c = l.occurrence;
  const f = l.isEndOfRule;
  this.RULE_STACK.length === 1 && f && u === void 0 && (u = _t, c = 1), !(u === void 0 || c === void 0) && this.shouldInRepetitionRecoveryBeTried(u, c, a) && this.tryInRepetitionRecovery(t, e, n, u);
}
const cw = 4, Ot = 8, Ih = 1 << Ot, wh = 2 << Ot, io = 3 << Ot, so = 4 << Ot, ao = 5 << Ot, Pi = 6 << Ot;
function $a(t, e, n) {
  return n | e | t;
}
class pl {
  constructor(e) {
    var n;
    this.maxLookahead = (n = e?.maxLookahead) !== null && n !== void 0 ? n : dt.maxLookahead;
  }
  validate(e) {
    const n = this.validateNoLeftRecursion(e.rules);
    if (U(n)) {
      const r = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...n,
        ...r,
        ...i,
        ...s
      ];
    }
    return n;
  }
  validateNoLeftRecursion(e) {
    return ke(e, (n) => Th(n, n, Kt));
  }
  validateEmptyOrAlternatives(e) {
    return ke(e, (n) => qI(n, Kt));
  }
  validateAmbiguousAlternationAlternatives(e, n) {
    return ke(e, (r) => YI(r, n, Kt));
  }
  validateSomeNonEmptyLookaheadPath(e, n) {
    return ZI(e, n, Kt);
  }
  buildLookaheadForAlternation(e) {
    return LI(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, MI);
  }
  buildLookaheadForOptional(e) {
    return PI(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, dl(e.prodType), DI);
  }
}
class fw {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = _(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : dt.dynamicTokensEnabled, this.maxLookahead = _(e, "maxLookahead") ? e.maxLookahead : dt.maxLookahead, this.lookaheadStrategy = _(e, "lookaheadStrategy") ? e.lookaheadStrategy : new pl({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    k(e, (n) => {
      this.TRACE_INIT(`${n.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = hw(n);
        k(r, (u) => {
          const c = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${We(u)}${c}`, () => {
            const f = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: n,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), d = $a(this.fullRuleNameToShort[n.name], Ih, u.idx);
            this.setLaFuncCache(d, f);
          });
        }), k(i, (u) => {
          this.computeLookaheadFunc(n, u.idx, io, "Repetition", u.maxLookahead, We(u));
        }), k(s, (u) => {
          this.computeLookaheadFunc(n, u.idx, wh, "Option", u.maxLookahead, We(u));
        }), k(a, (u) => {
          this.computeLookaheadFunc(n, u.idx, so, "RepetitionMandatory", u.maxLookahead, We(u));
        }), k(o, (u) => {
          this.computeLookaheadFunc(n, u.idx, Pi, "RepetitionMandatoryWithSeparator", u.maxLookahead, We(u));
        }), k(l, (u) => {
          this.computeLookaheadFunc(n, u.idx, ao, "RepetitionWithSeparator", u.maxLookahead, We(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, n, r, i, s, a) {
    this.TRACE_INIT(`${a}${n === 0 ? "" : n}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: n,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = $a(this.fullRuleNameToShort[e.name], r, n);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, n) {
    const r = this.getLastExplicitRuleShortName();
    return $a(r, e, n);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, n) {
    this.lookAheadFuncsCache.set(e, n);
  }
}
class dw extends Kn {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const vi = new dw();
function hw(t) {
  vi.reset(), t.accept(vi);
  const e = vi.dslMethods;
  return vi.reset(), e;
}
function ec(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
function tc(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
function pw(t, e, n) {
  t.children[n] === void 0 ? t.children[n] = [e] : t.children[n].push(e);
}
function mw(t, e, n) {
  t.children[e] === void 0 ? t.children[e] = [n] : t.children[e].push(n);
}
const gw = "name";
function _h(t, e) {
  Object.defineProperty(t, gw, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function yw(t, e) {
  const n = Le(t), r = n.length;
  for (let i = 0; i < r; i++) {
    const s = n[i], a = t[s], o = a.length;
    for (let l = 0; l < o; l++) {
      const u = a[l];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function Tw(t, e) {
  const n = function() {
  };
  _h(n, t + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if (M(i) && (i = i[0]), !ct(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = $w(this, e);
      if (!U(i)) {
        const s = w(i, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return n.prototype = r, n.prototype.constructor = n, n._RULE_NAMES = e, n;
}
function vw(t, e, n) {
  const r = function() {
  };
  _h(r, t + "BaseSemanticsWithDefaults");
  const i = Object.create(n.prototype);
  return k(e, (s) => {
    i[s] = yw;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var oo;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(oo || (oo = {}));
function $w(t, e) {
  return Rw(t, e);
}
function Rw(t, e) {
  const n = Pe(e, (i) => ht(t[i]) === !1), r = w(n, (i) => ({
    msg: `Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,
    type: oo.MISSING_METHOD,
    methodName: i
  }));
  return Xr(r);
}
class Aw {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = _(e, "nodeLocationTracking") ? e.nodeLocationTracking : dt.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = J, this.cstFinallyStateUpdate = J, this.cstPostTerminal = J, this.cstPostNonTerminal = J, this.cstPostRule = J;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = tc, this.setNodeLocationFromNode = tc, this.cstPostRule = J, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = J, this.setNodeLocationFromNode = J, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = ec, this.setNodeLocationFromNode = ec, this.cstPostRule = J, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = J, this.setNodeLocationFromNode = J, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = J, this.setNodeLocationFromNode = J, this.cstPostRule = J, this.setInitialNodeLocation = J;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const n = this.LA(1);
    e.location = {
      startOffset: n.startOffset,
      startLine: n.startLine,
      startColumn: n.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const n = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(n), this.CST_STACK.push(n);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const n = this.LA(0), r = e.location;
    r.startOffset <= n.startOffset ? (r.endOffset = n.endOffset, r.endLine = n.endLine, r.endColumn = n.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const n = this.LA(0), r = e.location;
    r.startOffset <= n.startOffset ? r.endOffset = n.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    pw(r, n, e), this.setNodeLocationFromToken(r.location, n);
  }
  cstPostNonTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    mw(r, n, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (ct(this.baseCstVisitorConstructor)) {
      const e = Tw(this.className, Le(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (ct(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = vw(this.className, Le(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}
class Ew {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : ss;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const n = this.currIdx + e;
    return n < 0 || this.tokVectorLength <= n ? ss : this.tokVector[n];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class xw {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, n, r) {
    return this.consumeInternal(n, e, r);
  }
  subrule(e, n, r) {
    return this.subruleInternal(n, e, r);
  }
  option(e, n) {
    return this.optionInternal(n, e);
  }
  or(e, n) {
    return this.orInternal(n, e);
  }
  many(e, n) {
    return this.manyInternal(e, n);
  }
  atLeastOne(e, n) {
    return this.atLeastOneInternal(e, n);
  }
  CONSUME(e, n) {
    return this.consumeInternal(e, 0, n);
  }
  CONSUME1(e, n) {
    return this.consumeInternal(e, 1, n);
  }
  CONSUME2(e, n) {
    return this.consumeInternal(e, 2, n);
  }
  CONSUME3(e, n) {
    return this.consumeInternal(e, 3, n);
  }
  CONSUME4(e, n) {
    return this.consumeInternal(e, 4, n);
  }
  CONSUME5(e, n) {
    return this.consumeInternal(e, 5, n);
  }
  CONSUME6(e, n) {
    return this.consumeInternal(e, 6, n);
  }
  CONSUME7(e, n) {
    return this.consumeInternal(e, 7, n);
  }
  CONSUME8(e, n) {
    return this.consumeInternal(e, 8, n);
  }
  CONSUME9(e, n) {
    return this.consumeInternal(e, 9, n);
  }
  SUBRULE(e, n) {
    return this.subruleInternal(e, 0, n);
  }
  SUBRULE1(e, n) {
    return this.subruleInternal(e, 1, n);
  }
  SUBRULE2(e, n) {
    return this.subruleInternal(e, 2, n);
  }
  SUBRULE3(e, n) {
    return this.subruleInternal(e, 3, n);
  }
  SUBRULE4(e, n) {
    return this.subruleInternal(e, 4, n);
  }
  SUBRULE5(e, n) {
    return this.subruleInternal(e, 5, n);
  }
  SUBRULE6(e, n) {
    return this.subruleInternal(e, 6, n);
  }
  SUBRULE7(e, n) {
    return this.subruleInternal(e, 7, n);
  }
  SUBRULE8(e, n) {
    return this.subruleInternal(e, 8, n);
  }
  SUBRULE9(e, n) {
    return this.subruleInternal(e, 9, n);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, n, r = as) {
    if (ge(this.definedRulesNames, e)) {
      const a = {
        message: Kt.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: de.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, n, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, n, r = as) {
    const i = VI(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, n, r);
    return this[e] = s, s;
  }
  BACKTRACK(e, n) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, n), !0;
      } catch (i) {
        if (rs(i))
          return !1;
        throw i;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return OS(Z(this.gastProductionsCache));
  }
}
class Sw {
  initRecognizerEngine(e, n) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = ns, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, _(n, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (M(e)) {
      if (U(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (M(e))
      this.tokensMap = xe(e, (s, a) => (s[a.name] = a, s), {});
    else if (_(e, "modes") && qe(Ge(Z(e.modes)), EI)) {
      const s = Ge(Z(e.modes)), a = nl(s);
      this.tokensMap = xe(a, (o, l) => (o[l.name] = l, o), {});
    } else if (Oe(e))
      this.tokensMap = ae(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = _t;
    const r = _(e, "modes") ? Ge(Z(e.modes)) : Z(e), i = qe(r, (s) => U(s.categoryMatches));
    this.tokenMatcher = i ? ns : ei, ti(Z(this.tokensMap));
  }
  defineRule(e, n, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = _(r, "resyncEnabled") ? r.resyncEnabled : as.resyncEnabled, s = _(r, "recoveryValueFunc") ? r.recoveryValueFunc : as.recoveryValueFunc, a = this.ruleShortNameIdx << cw + Ot;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
    let o;
    return this.outputCst === !0 ? o = function(...c) {
      try {
        this.ruleInvocationStateUpdate(a, e, this.subruleIdx), n.apply(this, c);
        const f = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(f), f;
      } catch (f) {
        return this.invokeRuleCatch(f, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...c) {
      try {
        return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), n.apply(this, c);
      } catch (f) {
        return this.invokeRuleCatch(f, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: n });
  }
  invokeRuleCatch(e, n, r) {
    const i = this.RULE_STACK.length === 1, s = n && !this.isBackTracking() && this.recoveryEnabled;
    if (rs(e)) {
      const a = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = !0, l;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = !0, a.partialCstResult = l;
          }
          throw a;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), r(e);
        throw a;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(wh, n);
    return this.optionInternalLogic(e, n, r);
  }
  optionInternalLogic(e, n, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a = e.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === !0)
      return s.call(this);
  }
  atLeastOneInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(so, e);
    return this.atLeastOneInternalLogic(e, n, r);
  }
  atLeastOneInternalLogic(e, n, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof n != "function") {
      s = n.DEF;
      const a = n.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = n;
    if (i.call(this) === !0) {
      let a = this.doSingleRepetition(s);
      for (; i.call(this) === !0 && a === !0; )
        a = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, W.REPETITION_MANDATORY, n.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, n], i, so, e, bI);
  }
  atLeastOneSepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Pi, e);
    this.atLeastOneSepFirstInternalLogic(e, n, r);
  }
  atLeastOneSepFirstInternalLogic(e, n, r) {
    const i = n.DEF, s = n.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Ju
      ], o, Pi, e, Ju);
    } else
      throw this.raiseEarlyExitException(e, W.REPETITION_MANDATORY_WITH_SEPARATOR, n.ERR_MSG);
  }
  manyInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(io, e);
    return this.manyInternalLogic(e, n, r);
  }
  manyInternalLogic(e, n, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof n != "function") {
      s = n.DEF;
      const o = n.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = n;
    let a = !0;
    for (; i.call(this) === !0 && a === !0; )
      a = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, n],
      i,
      io,
      e,
      NI,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(ao, e);
    this.manySepFirstInternalLogic(e, n, r);
  }
  manySepFirstInternalLogic(e, n, r) {
    const i = n.DEF, s = n.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Xu
      ], o, ao, e, Xu);
    }
  }
  repetitionSepSecondInternal(e, n, r, i, s) {
    for (; r(); )
      this.CONSUME(n), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      n,
      r,
      i,
      s
    ], r, Pi, e, s);
  }
  doSingleRepetition(e) {
    const n = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > n;
  }
  orInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Ih, n), i = M(e) ? e : e.DEF, a = this.getLaFuncFromCache(r).call(this, i);
    if (a !== void 0)
      return i[a].ALT.call(this);
    this.raiseNoAltException(n, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), n = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new sw(n, e));
    }
  }
  subruleInternal(e, n, r) {
    let i;
    try {
      const s = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = n, i = e.apply(this, s), this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, r, e.ruleName);
    }
  }
  subruleInternalError(e, n, r) {
    throw rs(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, n, r) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === !0 ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, r);
    } catch (s) {
      i = this.consumeInternalRecovery(e, n, s);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i;
  }
  consumeInternalError(e, n, r) {
    let i;
    const s = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? i = r.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: n,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new xh(i, n, s));
  }
  consumeInternalRecovery(e, n, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, n);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === Sh ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, n = ae(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: n,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, n, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(n);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), _t);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class Iw {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = _(e, "errorMessageProvider") ? e.errorMessageProvider : dt.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (rs(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: ae(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return ae(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, n, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = Ys(e, s, n, this.maxLookahead)[0], l = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      l.push(this.LA(c));
    const u = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new aw(u, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, n) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = qs(e, i, this.maxLookahead), a = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      a.push(this.LA(u));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a,
      previous: o,
      customUserDescription: n,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new iw(l, this.LA(1), o));
  }
}
class ww {
  initContentAssist() {
  }
  computeContentAssist(e, n) {
    const r = this.gastProductionsCache[e];
    if (ct(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return hh([r], n, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const n = Be(e.ruleStack), i = this.getGAstProductions()[n];
    return new kI(i, e).startWalking();
  }
}
const Js = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Js);
const nc = !0, rc = Math.pow(2, Ot) - 1, Ch = fh({ name: "RECORDING_PHASE_TOKEN", pattern: he.NA });
ti([Ch]);
const kh = fl(
  Ch,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(kh);
const _w = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class Cw {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const n = e > 0 ? e : "";
        this[`CONSUME${n}`] = function(r, i) {
          return this.consumeInternalRecord(r, e, i);
        }, this[`SUBRULE${n}`] = function(r, i) {
          return this.subruleInternalRecord(r, e, i);
        }, this[`OPTION${n}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${n}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${n}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${n}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${n}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${n}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, n, r) {
        return this.consumeInternalRecord(n, e, r);
      }, this.subrule = function(e, n, r) {
        return this.subruleInternalRecord(n, e, r);
      }, this.option = function(e, n) {
        return this.optionInternalRecord(n, e);
      }, this.or = function(e, n) {
        return this.orInternalRecord(n, e);
      }, this.many = function(e, n) {
        this.manyInternalRecord(e, n);
      }, this.atLeastOne = function(e, n) {
        this.atLeastOneInternalRecord(e, n);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let n = 0; n < 10; n++) {
        const r = n > 0 ? n : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, n) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return ss;
  }
  topLevelRuleRecord(e, n) {
    try {
      const r = new jn({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), n.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== !0)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, n) {
    return qn.call(this, se, e, n);
  }
  atLeastOneInternalRecord(e, n) {
    qn.call(this, Se, n, e);
  }
  atLeastOneSepFirstInternalRecord(e, n) {
    qn.call(this, Ie, n, e, nc);
  }
  manyInternalRecord(e, n) {
    qn.call(this, q, n, e);
  }
  manySepFirstInternalRecord(e, n) {
    qn.call(this, ye, n, e, nc);
  }
  orInternalRecord(e, n) {
    return kw.call(this, e, n);
  }
  subruleInternalRecord(e, n, r) {
    if (is(n), !e || _(e, "ruleName") === !1) {
      const o = new Error(`<SUBRULE${ic(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = Pn(this.recordingProdStack), s = e.ruleName, a = new fe({
      idx: n,
      nonTerminalName: s,
      label: r?.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a), this.outputCst ? _w : Js;
  }
  consumeInternalRecord(e, n, r) {
    if (is(n), !uh(e)) {
      const a = new Error(`<CONSUME${ic(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = !0, a;
    }
    const i = Pn(this.recordingProdStack), s = new K({
      idx: n,
      terminalType: e,
      label: r?.LABEL
    });
    return i.definition.push(s), kh;
  }
}
function qn(t, e, n, r = !1) {
  is(n);
  const i = Pn(this.recordingProdStack), s = ht(e) ? e : e.DEF, a = new t({ definition: [], idx: n });
  return r && (a.separator = e.SEP), _(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), s.call(this), i.definition.push(a), this.recordingProdStack.pop(), Js;
}
function kw(t, e) {
  is(e);
  const n = Pn(this.recordingProdStack), r = M(t) === !1, i = r === !1 ? t : t.DEF, s = new Te({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && t.IGNORE_AMBIGUITIES === !0
  });
  _(t, "MAX_LOOKAHEAD") && (s.maxLookahead = t.MAX_LOOKAHEAD);
  const a = gR(i, (o) => ht(o.GATE));
  return s.hasPredicates = a, n.definition.push(s), k(i, (o) => {
    const l = new me({ definition: [] });
    s.definition.push(l), _(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : _(o, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), Js;
}
function ic(t) {
  return t === 0 ? "" : `${t}`;
}
function is(t) {
  if (t < 0 || t > rc) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${rc + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class Nw {
  initPerformanceTracer(e) {
    if (_(e, "traceInitPerf")) {
      const n = e.traceInitPerf, r = typeof n == "number";
      this.traceInitMaxIdent = r ? n : 1 / 0, this.traceInitPerf = r ? n > 0 : n;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = dt.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, n) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = Nd(n), a = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return n();
  }
}
function bw(t, e) {
  e.forEach((n) => {
    const r = n.prototype;
    Object.getOwnPropertyNames(r).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(r, i);
      s && (s.get || s.set) ? Object.defineProperty(t.prototype, i, s) : t.prototype[i] = n.prototype[i];
    });
  });
}
const ss = fl(_t, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(ss);
const dt = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: dn,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), as = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var de;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(de || (de = {}));
function sc(t = void 0) {
  return function() {
    return t;
  };
}
class ni {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const n = this.className;
      this.TRACE_INIT("toFastProps", () => {
        bd(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), k(this.definedRulesNames, (i) => {
            const a = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, a);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = nw({
          rules: Z(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (U(r) && this.skipValidations === !1) {
          const i = rw({
            rules: Z(this.gastProductionsCache),
            tokenTypes: Z(this.tokensMap),
            errMsgProvider: Kt,
            grammarName: n
          }), s = BI({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: Z(this.gastProductionsCache),
            tokenTypes: Z(this.tokensMap),
            grammarName: n
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), U(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = US(Z(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: Z(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(Z(this.gastProductionsCache));
      })), !ni.DEFER_DEFINITION_ERRORS_HANDLING && !U(this.definitionErrors))
        throw e = w(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, n) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const r = this;
    if (r.initErrorHandler(n), r.initLexerAdapter(), r.initLooksAhead(n), r.initRecognizerEngine(e, n), r.initRecoverable(n), r.initTreeBuilder(n), r.initContentAssist(), r.initGastRecorder(n), r.initPerformanceTracer(n), _(n, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = _(n, "skipValidations") ? n.skipValidations : dt.skipValidations;
  }
}
ni.DEFER_DEFINITION_ERRORS_HANDLING = !1;
bw(ni, [
  lw,
  fw,
  Aw,
  Ew,
  Sw,
  xw,
  Iw,
  ww,
  Cw,
  Nw
]);
class Ow extends ni {
  constructor(e, n = dt) {
    const r = ae(n);
    r.outputCst = !1, super(e, r);
  }
}
function Dn(t, e, n) {
  return `${t.name}_${e}_${n}`;
}
const Ct = 1, Lw = 2, Nh = 4, bh = 5, ri = 7, Pw = 8, Mw = 9, Dw = 10, Fw = 11, Oh = 12;
class ml {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}
class gl extends ml {
  constructor(e, n) {
    super(e), this.tokenType = n;
  }
}
class Lh extends ml {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}
class yl extends ml {
  constructor(e, n, r) {
    super(e), this.rule = n, this.followState = r;
  }
  isEpsilon() {
    return !0;
  }
}
function Gw(t) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  Uw(e, t);
  const n = t.length;
  for (let r = 0; r < n; r++) {
    const i = t[r], s = an(e, i, i);
    s !== void 0 && Jw(e, i, s);
  }
  return e;
}
function Uw(t, e) {
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const i = e[r], s = ee(t, i, void 0, {
      type: Lw
    }), a = ee(t, i, void 0, {
      type: ri
    });
    s.stop = a, t.ruleToStartState.set(i, s), t.ruleToStopState.set(i, a);
  }
}
function Ph(t, e, n) {
  return n instanceof K ? Tl(t, e, n.terminalType, n) : n instanceof fe ? Xw(t, e, n) : n instanceof Te ? Ww(t, e, n) : n instanceof se ? zw(t, e, n) : n instanceof q ? Bw(t, e, n) : n instanceof ye ? jw(t, e, n) : n instanceof Se ? Kw(t, e, n) : n instanceof Ie ? Hw(t, e, n) : an(t, e, n);
}
function Bw(t, e, n) {
  const r = ee(t, e, n, {
    type: bh
  });
  Lt(t, r);
  const i = Hn(t, e, r, n, an(t, e, n));
  return Dh(t, e, n, i);
}
function jw(t, e, n) {
  const r = ee(t, e, n, {
    type: bh
  });
  Lt(t, r);
  const i = Hn(t, e, r, n, an(t, e, n)), s = Tl(t, e, n.separator, n);
  return Dh(t, e, n, i, s);
}
function Kw(t, e, n) {
  const r = ee(t, e, n, {
    type: Nh
  });
  Lt(t, r);
  const i = Hn(t, e, r, n, an(t, e, n));
  return Mh(t, e, n, i);
}
function Hw(t, e, n) {
  const r = ee(t, e, n, {
    type: Nh
  });
  Lt(t, r);
  const i = Hn(t, e, r, n, an(t, e, n)), s = Tl(t, e, n.separator, n);
  return Mh(t, e, n, i, s);
}
function Ww(t, e, n) {
  const r = ee(t, e, n, {
    type: Ct
  });
  Lt(t, r);
  const i = ot(n.definition, (a) => Ph(t, e, a));
  return Hn(t, e, r, n, ...i);
}
function zw(t, e, n) {
  const r = ee(t, e, n, {
    type: Ct
  });
  Lt(t, r);
  const i = Hn(t, e, r, n, an(t, e, n));
  return Vw(t, e, n, i);
}
function an(t, e, n) {
  const r = Mp(ot(n.definition, (i) => Ph(t, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : Yw(t, r);
}
function Mh(t, e, n, r, i) {
  const s = r.left, a = r.right, o = ee(t, e, n, {
    type: Fw
  });
  Lt(t, o);
  const l = ee(t, e, n, {
    type: Oh
  });
  return s.loopback = o, l.loopback = o, t.decisionMap[Dn(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", n.idx)] = o, X(a, o), i === void 0 ? (X(o, s), X(o, l)) : (X(o, l), X(o, i.left), X(i.right, s)), {
    left: s,
    right: l
  };
}
function Dh(t, e, n, r, i) {
  const s = r.left, a = r.right, o = ee(t, e, n, {
    type: Dw
  });
  Lt(t, o);
  const l = ee(t, e, n, {
    type: Oh
  }), u = ee(t, e, n, {
    type: Mw
  });
  return o.loopback = u, l.loopback = u, X(o, s), X(o, l), X(a, u), i !== void 0 ? (X(u, l), X(u, i.left), X(i.right, s)) : X(u, o), t.decisionMap[Dn(e, i ? "RepetitionWithSeparator" : "Repetition", n.idx)] = o, {
    left: o,
    right: l
  };
}
function Vw(t, e, n, r) {
  const i = r.left, s = r.right;
  return X(i, s), t.decisionMap[Dn(e, "Option", n.idx)] = i, r;
}
function Lt(t, e) {
  return t.decisionStates.push(e), e.decision = t.decisionStates.length - 1, e.decision;
}
function Hn(t, e, n, r, ...i) {
  const s = ee(t, e, r, {
    type: Pw,
    start: n
  });
  n.end = s;
  for (const o of i)
    o !== void 0 ? (X(n, o.left), X(o.right, s)) : X(n, s);
  const a = {
    left: n,
    right: s
  };
  return t.decisionMap[Dn(e, qw(r), r.idx)] = n, a;
}
function qw(t) {
  if (t instanceof Te)
    return "Alternation";
  if (t instanceof se)
    return "Option";
  if (t instanceof q)
    return "Repetition";
  if (t instanceof ye)
    return "RepetitionWithSeparator";
  if (t instanceof Se)
    return "RepetitionMandatory";
  if (t instanceof Ie)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function Yw(t, e) {
  const n = e.length;
  for (let s = 0; s < n - 1; s++) {
    const a = e[s];
    let o;
    a.left.transitions.length === 1 && (o = a.left.transitions[0]);
    const l = o instanceof yl, u = o, c = e[s + 1].left;
    a.left.type === Ct && a.right.type === Ct && o !== void 0 && (l && u.followState === a.right || o.target === a.right) ? (l ? u.followState = c : o.target = c, Zw(t, a.right)) : X(a.right, c);
  }
  const r = e[0], i = e[n - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function Tl(t, e, n, r) {
  const i = ee(t, e, r, {
    type: Ct
  }), s = ee(t, e, r, {
    type: Ct
  });
  return vl(i, new gl(s, n)), {
    left: i,
    right: s
  };
}
function Xw(t, e, n) {
  const r = n.referencedRule, i = t.ruleToStartState.get(r), s = ee(t, e, n, {
    type: Ct
  }), a = ee(t, e, n, {
    type: Ct
  }), o = new yl(i, r, a);
  return vl(s, o), {
    left: s,
    right: a
  };
}
function Jw(t, e, n) {
  const r = t.ruleToStartState.get(e);
  X(r, n.left);
  const i = t.ruleToStopState.get(e);
  return X(n.right, i), {
    left: r,
    right: i
  };
}
function X(t, e) {
  const n = new Lh(e);
  vl(t, n);
}
function ee(t, e, n, r) {
  const i = Object.assign({
    atn: t,
    production: n,
    epsilonOnlyTransitions: !1,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: t.states.length
  }, r);
  return t.states.push(i), i;
}
function vl(t, e) {
  t.transitions.length === 0 && (t.epsilonOnlyTransitions = e.isEpsilon()), t.transitions.push(e);
}
function Zw(t, e) {
  t.states.splice(t.states.indexOf(e), 1);
}
const os = {};
class lo {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const n = Fh(e);
    n in this.map || (this.map[n] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return ot(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const n in this.map)
      e += n + ":";
    return e;
  }
}
function Fh(t, e = !0) {
  return `${e ? `a${t.alt}` : ""}s${t.state.stateNumber}:${t.stack.map((n) => n.stateNumber.toString()).join("_")}`;
}
function Qw(t, e) {
  const n = {};
  return (r) => {
    const i = r.toString();
    let s = n[i];
    return s !== void 0 || (s = {
      atnStartState: t,
      decision: e,
      states: {}
    }, n[i] = s), s;
  };
}
class Gh {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, n) {
    this.predicates[e] = n;
  }
  toString() {
    let e = "";
    const n = this.predicates.length;
    for (let r = 0; r < n; r++)
      e += this.predicates[r] === !0 ? "1" : "0";
    return e;
  }
}
const ac = new Gh();
class e_ extends pl {
  constructor(e) {
    var n;
    super(), this.logging = (n = e?.logging) !== null && n !== void 0 ? n : ((r) => console.log(r));
  }
  initialize(e) {
    this.atn = Gw(e.rules), this.dfas = t_(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: n, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Dn(r, "Alternation", n), c = this.atn.decisionMap[l].decision, f = ot(Zu({
      maxLookahead: 1,
      occurrence: n,
      prodType: "Alternation",
      rule: r
    }), (d) => ot(d, (h) => h[0]));
    if (oc(f, !1) && !s) {
      const d = wl(f, (h, m, g) => (na(m, (T) => {
        T && (h[T.tokenTypeIdx] = g, na(T.categoryMatches, (y) => {
          h[y] = g;
        }));
      }), h), {});
      return i ? function(h) {
        var m;
        const g = this.LA(1), T = d[g.tokenTypeIdx];
        if (h !== void 0 && T !== void 0) {
          const y = (m = h[T]) === null || m === void 0 ? void 0 : m.GATE;
          if (y !== void 0 && y.call(this) === !1)
            return;
        }
        return T;
      } : function() {
        const h = this.LA(1);
        return d[h.tokenTypeIdx];
      };
    } else return i ? function(d) {
      const h = new Gh(), m = d === void 0 ? 0 : d.length;
      for (let T = 0; T < m; T++) {
        const y = d?.[T].GATE;
        h.set(T, y === void 0 || y.call(this));
      }
      const g = Ra.call(this, a, c, h, o);
      return typeof g == "number" ? g : void 0;
    } : function() {
      const d = Ra.call(this, a, c, ac, o);
      return typeof d == "number" ? d : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: n, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Dn(r, i, n), c = this.atn.decisionMap[l].decision, f = ot(Zu({
      maxLookahead: 1,
      occurrence: n,
      prodType: i,
      rule: r
    }), (d) => ot(d, (h) => h[0]));
    if (oc(f) && f[0][0] && !s) {
      const d = f[0], h = Np(d);
      if (h.length === 1 && Dp(h[0].categoryMatches)) {
        const g = h[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = wl(h, (g, T) => (T !== void 0 && (g[T.tokenTypeIdx] = !0, na(T.categoryMatches, (y) => {
          g[y] = !0;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const d = Ra.call(this, a, c, ac, o);
      return typeof d == "object" ? !1 : d === 0;
    };
  }
}
function oc(t, e = !0) {
  const n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      if (s === void 0) {
        if (e)
          break;
        return !1;
      }
      const a = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a)
        if (n.has(o)) {
          if (!i.has(o))
            return !1;
        } else
          n.add(o), i.add(o);
    }
  }
  return !0;
}
function t_(t) {
  const e = t.decisionStates.length, n = Array(e);
  for (let r = 0; r < e; r++)
    n[r] = Qw(t.decisionStates[r], r);
  return n;
}
function Ra(t, e, n, r) {
  const i = t[e](n);
  let s = i.start;
  if (s === void 0) {
    const o = d_(i.atnStartState);
    s = Bh(i, Uh(o)), i.start = s;
  }
  return n_.apply(this, [i, s, n, r]);
}
function n_(t, e, n, r) {
  let i = e, s = 1;
  const a = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = l_(i, o);
    if (l === void 0 && (l = r_.apply(this, [t, i, o, s, n, r])), l === os)
      return o_(a, i, o);
    if (l.isAcceptState === !0)
      return l.prediction;
    i = l, a.push(o), o = this.LA(s++);
  }
}
function r_(t, e, n, r, i, s) {
  const a = u_(e.configs, n, i);
  if (a.size === 0)
    return lc(t, e, n, os), os;
  let o = Uh(a);
  const l = f_(a, i);
  if (l !== void 0)
    o.isAcceptState = !0, o.prediction = l, o.configs.uniqueAlt = l;
  else if (g_(a)) {
    const u = bp(a.alts);
    o.isAcceptState = !0, o.prediction = u, o.configs.uniqueAlt = u, i_.apply(this, [t, r, a.alts, s]);
  }
  return o = lc(t, e, n, o), o;
}
function i_(t, e, n, r) {
  const i = [];
  for (let u = 1; u <= e; u++)
    i.push(this.LA(u).tokenType);
  const s = t.atnStartState, a = s.rule, o = s.production, l = s_({
    topLevelRule: a,
    ambiguityIndices: n,
    production: o,
    prefixPath: i
  });
  r(l);
}
function s_(t) {
  const e = ot(t.prefixPath, (i) => mn(i)).join(", "), n = t.production.idx === 0 ? "" : t.production.idx;
  let r = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${a_(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function a_(t) {
  if (t instanceof fe)
    return "SUBRULE";
  if (t instanceof se)
    return "OPTION";
  if (t instanceof Te)
    return "OR";
  if (t instanceof Se)
    return "AT_LEAST_ONE";
  if (t instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof ye)
    return "MANY_SEP";
  if (t instanceof q)
    return "MANY";
  if (t instanceof K)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function o_(t, e, n) {
  const r = Fp(e.configs.elements, (s) => s.state.transitions), i = Gp(r.filter((s) => s instanceof gl).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: n,
    possibleTokenTypes: i,
    tokenPath: t
  };
}
function l_(t, e) {
  return t.edges[e.tokenTypeIdx];
}
function u_(t, e, n) {
  const r = new lo(), i = [];
  for (const a of t.elements) {
    if (n.is(a.alt) === !1)
      continue;
    if (a.state.type === ri) {
      i.push(a);
      continue;
    }
    const o = a.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const u = a.state.transitions[l], c = c_(u, e);
      c !== void 0 && r.add({
        state: c,
        alt: a.alt,
        stack: a.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new lo();
    for (const a of r.elements)
      ls(a, s);
  }
  if (i.length > 0 && !p_(s))
    for (const a of i)
      s.add(a);
  return s;
}
function c_(t, e) {
  if (t instanceof gl && dh(e, t.tokenType))
    return t.target;
}
function f_(t, e) {
  let n;
  for (const r of t.elements)
    if (e.is(r.alt) === !0) {
      if (n === void 0)
        n = r.alt;
      else if (n !== r.alt)
        return;
    }
  return n;
}
function Uh(t) {
  return {
    configs: t,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
function lc(t, e, n, r) {
  return r = Bh(t, r), e.edges[n.tokenTypeIdx] = r, r;
}
function Bh(t, e) {
  if (e === os)
    return e;
  const n = e.configs.key, r = t.states[n];
  return r !== void 0 ? r : (e.configs.finalize(), t.states[n] = e, e);
}
function d_(t) {
  const e = new lo(), n = t.transitions.length;
  for (let r = 0; r < n; r++) {
    const s = {
      state: t.transitions[r].target,
      alt: r,
      stack: []
    };
    ls(s, e);
  }
  return e;
}
function ls(t, e) {
  const n = t.state;
  if (n.type === ri) {
    if (t.stack.length > 0) {
      const i = [...t.stack], a = {
        state: i.pop(),
        alt: t.alt,
        stack: i
      };
      ls(a, e);
    } else
      e.add(t);
    return;
  }
  n.epsilonOnlyTransitions || e.add(t);
  const r = n.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = n.transitions[i], a = h_(t, s);
    a !== void 0 && ls(a, e);
  }
}
function h_(t, e) {
  if (e instanceof Lh)
    return {
      state: e.target,
      alt: t.alt,
      stack: t.stack
    };
  if (e instanceof yl) {
    const n = [...t.stack, e.followState];
    return {
      state: e.target,
      alt: t.alt,
      stack: n
    };
  }
}
function p_(t) {
  for (const e of t.elements)
    if (e.state.type === ri)
      return !0;
  return !1;
}
function m_(t) {
  for (const e of t.elements)
    if (e.state.type !== ri)
      return !1;
  return !0;
}
function g_(t) {
  if (m_(t))
    return !0;
  const e = y_(t.elements);
  return T_(e) && !v_(e);
}
function y_(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const r = Fh(n, !1);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[n.alt] = !0;
  }
  return e;
}
function T_(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
function v_(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
var uc;
(function(t) {
  function e(n) {
    return typeof n == "string";
  }
  t.is = e;
})(uc || (uc = {}));
var uo;
(function(t) {
  function e(n) {
    return typeof n == "string";
  }
  t.is = e;
})(uo || (uo = {}));
var cc;
(function(t) {
  t.MIN_VALUE = -2147483648, t.MAX_VALUE = 2147483647;
  function e(n) {
    return typeof n == "number" && t.MIN_VALUE <= n && n <= t.MAX_VALUE;
  }
  t.is = e;
})(cc || (cc = {}));
var us;
(function(t) {
  t.MIN_VALUE = 0, t.MAX_VALUE = 2147483647;
  function e(n) {
    return typeof n == "number" && t.MIN_VALUE <= n && n <= t.MAX_VALUE;
  }
  t.is = e;
})(us || (us = {}));
var D;
(function(t) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = us.MAX_VALUE), i === Number.MAX_VALUE && (i = us.MAX_VALUE), { line: r, character: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  t.is = n;
})(D || (D = {}));
var P;
(function(t) {
  function e(r, i, s, a) {
    if (p.uinteger(r) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a))
      return { start: D.create(r, i), end: D.create(s, a) };
    if (D.is(r) && D.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`);
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && D.is(i.start) && D.is(i.end);
  }
  t.is = n;
})(P || (P = {}));
var cs;
(function(t) {
  function e(r, i) {
    return { uri: r, range: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  t.is = n;
})(cs || (cs = {}));
var fc;
(function(t) {
  function e(r, i, s, a) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.targetRange) && p.string(i.targetUri) && P.is(i.targetSelectionRange) && (P.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  t.is = n;
})(fc || (fc = {}));
var co;
(function(t) {
  function e(r, i, s, a) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a
    };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  t.is = n;
})(co || (co = {}));
var dc;
(function(t) {
  function e(r, i) {
    return {
      range: r,
      color: i
    };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && P.is(i.range) && co.is(i.color);
  }
  t.is = n;
})(dc || (dc = {}));
var hc;
(function(t) {
  function e(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || Gn.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, Gn.is));
  }
  t.is = n;
})(hc || (hc = {}));
var pc;
(function(t) {
  t.Comment = "comment", t.Imports = "imports", t.Region = "region";
})(pc || (pc = {}));
var mc;
(function(t) {
  function e(r, i, s, a, o, l) {
    const u = {
      startLine: r,
      endLine: i
    };
    return p.defined(s) && (u.startCharacter = s), p.defined(a) && (u.endCharacter = a), p.defined(o) && (u.kind = o), p.defined(l) && (u.collapsedText = l), u;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  t.is = n;
})(mc || (mc = {}));
var fo;
(function(t) {
  function e(r, i) {
    return {
      location: r,
      message: i
    };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && cs.is(i.location) && p.string(i.message);
  }
  t.is = n;
})(fo || (fo = {}));
var gc;
(function(t) {
  t.Error = 1, t.Warning = 2, t.Information = 3, t.Hint = 4;
})(gc || (gc = {}));
var yc;
(function(t) {
  t.Unnecessary = 1, t.Deprecated = 2;
})(yc || (yc = {}));
var Tc;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && p.string(r.href);
  }
  t.is = e;
})(Tc || (Tc = {}));
var fs;
(function(t) {
  function e(r, i, s, a, o, l) {
    let u = { range: r, message: i };
    return p.defined(s) && (u.severity = s), p.defined(a) && (u.code = a), p.defined(o) && (u.source = o), p.defined(l) && (u.relatedInformation = l), u;
  }
  t.create = e;
  function n(r) {
    var i;
    let s = r;
    return p.defined(s) && P.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, fo.is));
  }
  t.is = n;
})(fs || (fs = {}));
var Fn;
(function(t) {
  function e(r, i, ...s) {
    let a = { title: r, command: i };
    return p.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  t.is = n;
})(Fn || (Fn = {}));
var Gn;
(function(t) {
  function e(s, a) {
    return { range: s, newText: a };
  }
  t.replace = e;
  function n(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  t.insert = n;
  function r(s) {
    return { range: s, newText: "" };
  }
  t.del = r;
  function i(s) {
    const a = s;
    return p.objectLiteral(a) && p.string(a.newText) && P.is(a.range);
  }
  t.is = i;
})(Gn || (Gn = {}));
var ho;
(function(t) {
  function e(r, i, s) {
    const a = { label: r };
    return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  t.is = n;
})(ho || (ho = {}));
var Un;
(function(t) {
  function e(n) {
    const r = n;
    return p.string(r);
  }
  t.is = e;
})(Un || (Un = {}));
var vc;
(function(t) {
  function e(s, a, o) {
    return { range: s, newText: a, annotationId: o };
  }
  t.replace = e;
  function n(s, a, o) {
    return { range: { start: s, end: s }, newText: a, annotationId: o };
  }
  t.insert = n;
  function r(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  t.del = r;
  function i(s) {
    const a = s;
    return Gn.is(a) && (ho.is(a.annotationId) || Un.is(a.annotationId));
  }
  t.is = i;
})(vc || (vc = {}));
var po;
(function(t) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && vo.is(i.textDocument) && Array.isArray(i.edits);
  }
  t.is = n;
})(po || (po = {}));
var mo;
(function(t) {
  function e(r, i, s) {
    let a = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Un.is(i.annotationId));
  }
  t.is = n;
})(mo || (mo = {}));
var go;
(function(t) {
  function e(r, i, s, a) {
    let o = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a !== void 0 && (o.annotationId = a), o;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Un.is(i.annotationId));
  }
  t.is = n;
})(go || (go = {}));
var yo;
(function(t) {
  function e(r, i, s) {
    let a = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Un.is(i.annotationId));
  }
  t.is = n;
})(yo || (yo = {}));
var To;
(function(t) {
  function e(n) {
    let r = n;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? mo.is(i) || go.is(i) || yo.is(i) : po.is(i)));
  }
  t.is = e;
})(To || (To = {}));
var $c;
(function(t) {
  function e(r) {
    return { uri: r };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri);
  }
  t.is = n;
})($c || ($c = {}));
var Rc;
(function(t) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  t.is = n;
})(Rc || (Rc = {}));
var vo;
(function(t) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  t.is = n;
})(vo || (vo = {}));
var Ac;
(function(t) {
  function e(r, i, s, a) {
    return { uri: r, languageId: i, version: s, text: a };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  t.is = n;
})(Ac || (Ac = {}));
var $o;
(function(t) {
  t.PlainText = "plaintext", t.Markdown = "markdown";
  function e(n) {
    const r = n;
    return r === t.PlainText || r === t.Markdown;
  }
  t.is = e;
})($o || ($o = {}));
var jr;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(n) && $o.is(r.kind) && p.string(r.value);
  }
  t.is = e;
})(jr || (jr = {}));
var Ec;
(function(t) {
  t.Text = 1, t.Method = 2, t.Function = 3, t.Constructor = 4, t.Field = 5, t.Variable = 6, t.Class = 7, t.Interface = 8, t.Module = 9, t.Property = 10, t.Unit = 11, t.Value = 12, t.Enum = 13, t.Keyword = 14, t.Snippet = 15, t.Color = 16, t.File = 17, t.Reference = 18, t.Folder = 19, t.EnumMember = 20, t.Constant = 21, t.Struct = 22, t.Event = 23, t.Operator = 24, t.TypeParameter = 25;
})(Ec || (Ec = {}));
var xc;
(function(t) {
  t.PlainText = 1, t.Snippet = 2;
})(xc || (xc = {}));
var Sc;
(function(t) {
  t.Deprecated = 1;
})(Sc || (Sc = {}));
var Ic;
(function(t) {
  function e(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i && p.string(i.newText) && P.is(i.insert) && P.is(i.replace);
  }
  t.is = n;
})(Ic || (Ic = {}));
var wc;
(function(t) {
  t.asIs = 1, t.adjustIndentation = 2;
})(wc || (wc = {}));
var _c;
(function(t) {
  function e(n) {
    const r = n;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  t.is = e;
})(_c || (_c = {}));
var Cc;
(function(t) {
  function e(n) {
    return { label: n };
  }
  t.create = e;
})(Cc || (Cc = {}));
var kc;
(function(t) {
  function e(n, r) {
    return { items: n || [], isIncomplete: !!r };
  }
  t.create = e;
})(kc || (kc = {}));
var ds;
(function(t) {
  function e(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  t.fromPlainText = e;
  function n(r) {
    const i = r;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  t.is = n;
})(ds || (ds = {}));
var Nc;
(function(t) {
  function e(n) {
    let r = n;
    return !!r && p.objectLiteral(r) && (jr.is(r.contents) || ds.is(r.contents) || p.typedArray(r.contents, ds.is)) && (n.range === void 0 || P.is(n.range));
  }
  t.is = e;
})(Nc || (Nc = {}));
var bc;
(function(t) {
  function e(n, r) {
    return r ? { label: n, documentation: r } : { label: n };
  }
  t.create = e;
})(bc || (bc = {}));
var Oc;
(function(t) {
  function e(n, r, ...i) {
    let s = { label: n };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  t.create = e;
})(Oc || (Oc = {}));
var Lc;
(function(t) {
  t.Text = 1, t.Read = 2, t.Write = 3;
})(Lc || (Lc = {}));
var Pc;
(function(t) {
  function e(n, r) {
    let i = { range: n };
    return p.number(r) && (i.kind = r), i;
  }
  t.create = e;
})(Pc || (Pc = {}));
var Mc;
(function(t) {
  t.File = 1, t.Module = 2, t.Namespace = 3, t.Package = 4, t.Class = 5, t.Method = 6, t.Property = 7, t.Field = 8, t.Constructor = 9, t.Enum = 10, t.Interface = 11, t.Function = 12, t.Variable = 13, t.Constant = 14, t.String = 15, t.Number = 16, t.Boolean = 17, t.Array = 18, t.Object = 19, t.Key = 20, t.Null = 21, t.EnumMember = 22, t.Struct = 23, t.Event = 24, t.Operator = 25, t.TypeParameter = 26;
})(Mc || (Mc = {}));
var Dc;
(function(t) {
  t.Deprecated = 1;
})(Dc || (Dc = {}));
var Fc;
(function(t) {
  function e(n, r, i, s, a) {
    let o = {
      name: n,
      kind: r,
      location: { uri: s, range: i }
    };
    return a && (o.containerName = a), o;
  }
  t.create = e;
})(Fc || (Fc = {}));
var Gc;
(function(t) {
  function e(n, r, i, s) {
    return s !== void 0 ? { name: n, kind: r, location: { uri: i, range: s } } : { name: n, kind: r, location: { uri: i } };
  }
  t.create = e;
})(Gc || (Gc = {}));
var Uc;
(function(t) {
  function e(r, i, s, a, o, l) {
    let u = {
      name: r,
      detail: i,
      kind: s,
      range: a,
      selectionRange: o
    };
    return l !== void 0 && (u.children = l), u;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && p.string(i.name) && p.number(i.kind) && P.is(i.range) && P.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  t.is = n;
})(Uc || (Uc = {}));
var Bc;
(function(t) {
  t.Empty = "", t.QuickFix = "quickfix", t.Refactor = "refactor", t.RefactorExtract = "refactor.extract", t.RefactorInline = "refactor.inline", t.RefactorRewrite = "refactor.rewrite", t.Source = "source", t.SourceOrganizeImports = "source.organizeImports", t.SourceFixAll = "source.fixAll";
})(Bc || (Bc = {}));
var hs;
(function(t) {
  t.Invoked = 1, t.Automatic = 2;
})(hs || (hs = {}));
var jc;
(function(t) {
  function e(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, fs.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === hs.Invoked || i.triggerKind === hs.Automatic);
  }
  t.is = n;
})(jc || (jc = {}));
var Kc;
(function(t) {
  function e(r, i, s) {
    let a = { title: r }, o = !0;
    return typeof i == "string" ? (o = !1, a.kind = i) : Fn.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, fs.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Fn.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || To.is(i.edit));
  }
  t.is = n;
})(Kc || (Kc = {}));
var Hc;
(function(t) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && P.is(i.range) && (p.undefined(i.command) || Fn.is(i.command));
  }
  t.is = n;
})(Hc || (Hc = {}));
var Wc;
(function(t) {
  function e(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  t.is = n;
})(Wc || (Wc = {}));
var zc;
(function(t) {
  function e(r, i, s) {
    return { range: r, target: i, data: s };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && P.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  t.is = n;
})(zc || (zc = {}));
var Vc;
(function(t) {
  function e(r, i) {
    return { range: r, parent: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.range) && (i.parent === void 0 || t.is(i.parent));
  }
  t.is = n;
})(Vc || (Vc = {}));
var qc;
(function(t) {
  t.namespace = "namespace", t.type = "type", t.class = "class", t.enum = "enum", t.interface = "interface", t.struct = "struct", t.typeParameter = "typeParameter", t.parameter = "parameter", t.variable = "variable", t.property = "property", t.enumMember = "enumMember", t.event = "event", t.function = "function", t.method = "method", t.macro = "macro", t.keyword = "keyword", t.modifier = "modifier", t.comment = "comment", t.string = "string", t.number = "number", t.regexp = "regexp", t.operator = "operator", t.decorator = "decorator";
})(qc || (qc = {}));
var Yc;
(function(t) {
  t.declaration = "declaration", t.definition = "definition", t.readonly = "readonly", t.static = "static", t.deprecated = "deprecated", t.abstract = "abstract", t.async = "async", t.modification = "modification", t.documentation = "documentation", t.defaultLibrary = "defaultLibrary";
})(Yc || (Yc = {}));
var Xc;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  t.is = e;
})(Xc || (Xc = {}));
var Jc;
(function(t) {
  function e(r, i) {
    return { range: r, text: i };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i != null && P.is(i.range) && p.string(i.text);
  }
  t.is = n;
})(Jc || (Jc = {}));
var Zc;
(function(t) {
  function e(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i != null && P.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  t.is = n;
})(Zc || (Zc = {}));
var Qc;
(function(t) {
  function e(r, i) {
    return { range: r, expression: i };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i != null && P.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  t.is = n;
})(Qc || (Qc = {}));
var ef;
(function(t) {
  function e(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.defined(i) && P.is(r.stoppedLocation);
  }
  t.is = n;
})(ef || (ef = {}));
var Ro;
(function(t) {
  t.Type = 1, t.Parameter = 2;
  function e(n) {
    return n === 1 || n === 2;
  }
  t.is = e;
})(Ro || (Ro = {}));
var Ao;
(function(t) {
  function e(r) {
    return { value: r };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || jr.is(i.tooltip)) && (i.location === void 0 || cs.is(i.location)) && (i.command === void 0 || Fn.is(i.command));
  }
  t.is = n;
})(Ao || (Ao = {}));
var tf;
(function(t) {
  function e(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && D.is(i.position) && (p.string(i.label) || p.typedArray(i.label, Ao.is)) && (i.kind === void 0 || Ro.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, Gn.is) && (i.tooltip === void 0 || p.string(i.tooltip) || jr.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  t.is = n;
})(tf || (tf = {}));
var nf;
(function(t) {
  function e(n) {
    return { kind: "snippet", value: n };
  }
  t.createSnippet = e;
})(nf || (nf = {}));
var rf;
(function(t) {
  function e(n, r, i, s) {
    return { insertText: n, filterText: r, range: i, command: s };
  }
  t.create = e;
})(rf || (rf = {}));
var sf;
(function(t) {
  function e(n) {
    return { items: n };
  }
  t.create = e;
})(sf || (sf = {}));
var af;
(function(t) {
  t.Invoked = 0, t.Automatic = 1;
})(af || (af = {}));
var of;
(function(t) {
  function e(n, r) {
    return { range: n, text: r };
  }
  t.create = e;
})(of || (of = {}));
var lf;
(function(t) {
  function e(n, r) {
    return { triggerKind: n, selectedCompletionInfo: r };
  }
  t.create = e;
})(lf || (lf = {}));
var uf;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && uo.is(r.uri) && p.string(r.name);
  }
  t.is = e;
})(uf || (uf = {}));
var cf;
(function(t) {
  function e(s, a, o, l) {
    return new $_(s, a, o, l);
  }
  t.create = e;
  function n(s) {
    let a = s;
    return !!(p.defined(a) && p.string(a.uri) && (p.undefined(a.languageId) || p.string(a.languageId)) && p.uinteger(a.lineCount) && p.func(a.getText) && p.func(a.positionAt) && p.func(a.offsetAt));
  }
  t.is = n;
  function r(s, a) {
    let o = s.getText(), l = i(a, (c, f) => {
      let d = c.range.start.line - f.range.start.line;
      return d === 0 ? c.range.start.character - f.range.start.character : d;
    }), u = o.length;
    for (let c = l.length - 1; c >= 0; c--) {
      let f = l[c], d = s.offsetAt(f.range.start), h = s.offsetAt(f.range.end);
      if (h <= u)
        o = o.substring(0, d) + f.newText + o.substring(h, o.length);
      else
        throw new Error("Overlapping edit");
      u = d;
    }
    return o;
  }
  t.applyEdits = r;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), u = s.slice(o);
    i(l, a), i(u, a);
    let c = 0, f = 0, d = 0;
    for (; c < l.length && f < u.length; )
      a(l[c], u[f]) <= 0 ? s[d++] = l[c++] : s[d++] = u[f++];
    for (; c < l.length; )
      s[d++] = l[c++];
    for (; f < u.length; )
      s[d++] = u[f++];
    return s;
  }
})(cf || (cf = {}));
let $_ = class {
  constructor(e, n, r, i) {
    this._uri = e, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let n = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(n, r);
    }
    return this._content;
  }
  update(e, n) {
    this._content = e.text, this._version = n, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], n = this._content, r = !0;
      for (let i = 0; i < n.length; i++) {
        r && (e.push(i), r = !1);
        let s = n.charAt(i);
        r = s === "\r" || s === `
`, s === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++;
      }
      r && n.length > 0 && e.push(n.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let n = this.getLineOffsets(), r = 0, i = n.length;
    if (i === 0)
      return D.create(0, e);
    for (; r < i; ) {
      let a = Math.floor((r + i) / 2);
      n[a] > e ? i = a : r = a + 1;
    }
    let s = r - 1;
    return D.create(s, e - n[s]);
  }
  offsetAt(e) {
    let n = this.getLineOffsets();
    if (e.line >= n.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let r = n[e.line], i = e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
    return Math.max(Math.min(r + e.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(t) {
  const e = Object.prototype.toString;
  function n(h) {
    return typeof h < "u";
  }
  t.defined = n;
  function r(h) {
    return typeof h > "u";
  }
  t.undefined = r;
  function i(h) {
    return h === !0 || h === !1;
  }
  t.boolean = i;
  function s(h) {
    return e.call(h) === "[object String]";
  }
  t.string = s;
  function a(h) {
    return e.call(h) === "[object Number]";
  }
  t.number = a;
  function o(h, m, g) {
    return e.call(h) === "[object Number]" && m <= h && h <= g;
  }
  t.numberRange = o;
  function l(h) {
    return e.call(h) === "[object Number]" && -2147483648 <= h && h <= 2147483647;
  }
  t.integer = l;
  function u(h) {
    return e.call(h) === "[object Number]" && 0 <= h && h <= 2147483647;
  }
  t.uinteger = u;
  function c(h) {
    return e.call(h) === "[object Function]";
  }
  t.func = c;
  function f(h) {
    return h !== null && typeof h == "object";
  }
  t.objectLiteral = f;
  function d(h, m) {
    return Array.isArray(h) && h.every(m);
  }
  t.typedArray = d;
})(p || (p = {}));
class R_ {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Kh(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const n = new $l();
    return n.grammarSource = e, n.root = this.rootNode, this.current.content.push(n), this.nodeStack.push(n), n;
  }
  buildLeafNode(e, n) {
    const r = new Eo(e.startOffset, e.image.length, Ga(e), e.tokenType, !n);
    return r.grammarSource = n, r.root = this.rootNode, this.current.content.push(r), r;
  }
  removeNode(e) {
    const n = e.container;
    if (n) {
      const r = n.content.indexOf(e);
      r >= 0 && n.content.splice(r, 1);
    }
  }
  addHiddenNodes(e) {
    const n = [];
    for (const s of e) {
      const a = new Eo(s.startOffset, s.image.length, Ga(s), s.tokenType, !0);
      a.root = this.rootNode, n.push(a);
    }
    let r = this.current, i = !1;
    if (r.content.length > 0) {
      r.content.push(...n);
      return;
    }
    for (; r.container; ) {
      const s = r.container.content.indexOf(r);
      if (s > 0) {
        r.container.content.splice(s, 0, ...n), i = !0;
        break;
      }
      r = r.container;
    }
    i || this.rootNode.content.unshift(...n);
  }
  construct(e) {
    const n = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = n;
    const r = this.nodeStack.pop();
    r?.content.length === 0 && this.removeNode(r);
  }
}
class jh {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return !1;
  }
  get astNode() {
    var e, n;
    const r = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (n = this.container) === null || n === void 0 ? void 0 : n.astNode;
    if (!r)
      throw new Error("This node has no associated AST element");
    return r;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}
class Eo extends jh {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, n, r, i, s = !1) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = n, this._range = r;
  }
}
class $l extends jh {
  constructor() {
    super(...arguments), this.content = new Rl(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, n;
    return (n = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && n !== void 0 ? n : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, n;
    return (n = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && n !== void 0 ? n : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, n = this.lastNonHiddenNode;
    if (e && n) {
      if (this._rangeCache === void 0) {
        const { range: r } = e, { range: i } = n;
        this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: D.create(0, 0), end: D.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const n = this.content[e];
      if (!n.hidden)
        return n;
    }
    return this.content[this.content.length - 1];
  }
}
class Rl extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, Rl.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, n, ...r) {
    return this.addParents(r), super.splice(e, n, ...r);
  }
  addParents(e) {
    for (const n of e)
      n.container = this.parent;
  }
}
class Kh extends $l {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}
const xo = /* @__PURE__ */ Symbol("Datatype");
function Aa(t) {
  return t.$type === xo;
}
const ff = "​", Hh = (t) => t.endsWith(ff) ? t : t + ff;
class Wh {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const n = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new I_(n, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, n) {
    this.wrapper.wrapOr(e, n);
  }
  optional(e, n) {
    this.wrapper.wrapOption(e, n);
  }
  many(e, n) {
    this.wrapper.wrapMany(e, n);
  }
  atLeastOne(e, n) {
    this.wrapper.wrapAtLeastOne(e, n);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}
class A_ extends Wh {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new R_(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, n) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(Hh(e.name), this.startImplementation(r, n).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (Qf(e))
        return xo;
      {
        const n = Po(e);
        return n ?? e.name;
      }
    }
  }
  parse(e, n = {}) {
    this.nodeBuilder.buildRootNode(e);
    const r = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = r.tokens;
    const i = n.rule ? this.allRules.get(n.rule) : this.mainRule;
    if (!i)
      throw new Error(n.rule ? `No rule found with name '${n.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(r.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: r.errors,
      lexerReport: r.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, n) {
    return (r) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a = { $type: e };
        this.stack.push(a), e === xo && (a.value = "");
      }
      let s;
      try {
        s = n(r);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const n = this.lexerResult.hidden;
    if (!n.length)
      return [];
    const r = e.startOffset;
    for (let i = 0; i < n.length; i++)
      if (n[i].startOffset > r)
        return n.splice(0, i);
    return n.splice(0, n.length);
  }
  consume(e, n, r) {
    const i = this.wrapper.wrapConsume(e, n);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a = this.nodeBuilder.buildLeafNode(i, r), { assignment: o, isCrossRef: l } = this.getAssignment(r), u = this.current;
      if (o) {
        const c = Wt(r) ? i.image : this.converter.convert(i.image, a);
        this.assign(o.operator, o.feature, c, a, l);
      } else if (Aa(u)) {
        let c = i.image;
        Wt(r) || (c = this.converter.convert(c, a).toString()), u.value += c;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, n, r, i, s) {
    let a;
    !this.isRecording() && !r && (a = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, n, s);
    !this.isRecording() && a && a.length > 0 && this.performSubruleAssignment(o, i, a);
  }
  performSubruleAssignment(e, n, r) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(n);
    if (i)
      this.assign(i.operator, i.feature, e, r, s);
    else if (!i) {
      const a = this.current;
      if (Aa(a))
        a.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, a);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, n) {
    if (!this.isRecording()) {
      let r = this.current;
      if (n.feature && n.operator) {
        r = this.construct(), this.nodeBuilder.removeNode(r.$cstNode), this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);
        const s = { $type: e };
        this.stack.push(s), this.assign(n.operator, n.feature, r, r.$cstNode, !1);
      } else
        r.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return dm(e), this.nodeBuilder.construct(e), this.stack.pop(), Aa(e) ? this.converter.convert(e.value, e.$cstNode) : (hm(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const n = $s(e, Ht);
      this.assignmentMap.set(e, {
        assignment: n,
        isCrossRef: n ? No(n.terminal) : !1
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, n, r, i, s) {
    const a = this.current;
    let o;
    switch (s && typeof r == "string" ? o = this.linker.buildReference(a, n, i, r) : o = r, e) {
      case "=": {
        a[n] = o;
        break;
      }
      case "?=": {
        a[n] = !0;
        break;
      }
      case "+=":
        Array.isArray(a[n]) || (a[n] = []), a[n].push(o);
    }
  }
  assignWithoutOverride(e, n) {
    for (const [i, s] of Object.entries(n)) {
      const a = e[i];
      a === void 0 ? e[i] = s : Array.isArray(a) && Array.isArray(s) && (s.push(...a), e[i] = s);
    }
    const r = e.$cstNode;
    return r && (r.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}
class E_ {
  buildMismatchTokenMessage(e) {
    return dn.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return dn.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return dn.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return dn.buildEarlyExitMessage(e);
  }
}
class zh extends E_ {
  buildMismatchTokenMessage({ expected: e, actual: n }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${n.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class x_ extends Wh {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const n = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = n.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, n) {
    const r = this.wrapper.DEFINE_RULE(Hh(e.name), this.startImplementation(n).bind(this));
    return this.allRules.set(e.name, r), e.entry && (this.mainRule = r), r;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (n) => {
      const r = this.keepStackSize();
      try {
        e(n);
      } finally {
        this.resetStackSize(r);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, n, r) {
    this.wrapper.wrapConsume(e, n), this.isRecording() || (this.lastElementStack = [...this.elementStack, r], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, n, r, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, n, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const n = this.elementStack.lastIndexOf(e);
      n >= 0 && this.elementStack.splice(n);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}
const S_ = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new zh()
};
class I_ extends Ow {
  constructor(e, n) {
    const r = n && "maxLookahead" in n;
    super(e, Object.assign(Object.assign(Object.assign({}, S_), { lookaheadStrategy: r ? new pl({ maxLookahead: n.maxLookahead }) : new e_({
      // If validations are skipped, don't log the lookahead warnings
      logging: n.skipValidations ? () => {
      } : void 0
    }) }), n));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, n) {
    return this.RULE(e, n);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, n) {
    return this.consume(e, n);
  }
  wrapSubrule(e, n, r) {
    return this.subrule(e, n, {
      ARGS: [r]
    });
  }
  wrapOr(e, n) {
    this.or(e, n);
  }
  wrapOption(e, n) {
    this.option(e, n);
  }
  wrapMany(e, n) {
    this.many(e, n);
  }
  wrapAtLeastOne(e, n) {
    this.atLeastOne(e, n);
  }
}
function Vh(t, e, n) {
  return w_({
    parser: e,
    tokens: n,
    ruleNames: /* @__PURE__ */ new Map()
  }, t), e;
}
function w_(t, e) {
  const n = qf(e, !1), r = ie(e.rules).filter(Ne).filter((i) => n.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, t), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    t.parser.rule(i, Xt(s, i.definition));
  }
}
function Xt(t, e, n = !1) {
  let r;
  if (Wt(e))
    r = L_(t, e);
  else if (vs(e))
    r = __(t, e);
  else if (Ht(e))
    r = Xt(t, e.terminal);
  else if (No(e))
    r = qh(t, e);
  else if (zt(e))
    r = C_(t, e);
  else if (jf(e))
    r = N_(t, e);
  else if (Kf(e))
    r = b_(t, e);
  else if (bo(e))
    r = O_(t, e);
  else if (im(e)) {
    const i = t.consume++;
    r = () => t.parser.consume(i, _t, e);
  } else
    throw new Ff(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Yh(t, n ? void 0 : ps(e), r, e.cardinality);
}
function __(t, e) {
  const n = Mo(e);
  return () => t.parser.action(n, e);
}
function C_(t, e) {
  const n = e.rule.ref;
  if (Ne(n)) {
    const r = t.subrule++, i = n.fragment, s = e.arguments.length > 0 ? k_(n, e.arguments) : () => ({});
    return (a) => t.parser.subrule(r, Xh(t, n), i, e, s(a));
  } else if (Zt(n)) {
    const r = t.consume++, i = So(t, n.name);
    return () => t.parser.consume(r, i, e);
  } else if (n)
    Hr();
  else
    throw new Ff(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function k_(t, e) {
  const n = e.map((r) => at(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < n.length; s++) {
      const a = t.parameters[s], o = n[s];
      i[a.name] = o(r);
    }
    return i;
  };
}
function at(t) {
  if (Zp(t)) {
    const e = at(t.left), n = at(t.right);
    return (r) => e(r) || n(r);
  } else if (Jp(t)) {
    const e = at(t.left), n = at(t.right);
    return (r) => e(r) && n(r);
  } else if (Qp(t)) {
    const e = at(t.value);
    return (n) => !e(n);
  } else if (em(t)) {
    const e = t.parameter.ref.name;
    return (n) => n !== void 0 && n[e] === !0;
  } else if (Xp(t)) {
    const e = !!t.true;
    return () => e;
  }
  Hr();
}
function N_(t, e) {
  if (e.elements.length === 1)
    return Xt(t, e.elements[0]);
  {
    const n = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: Xt(t, i, !0)
      }, a = ps(i);
      a && (s.GATE = at(a)), n.push(s);
    }
    const r = t.or++;
    return (i) => t.parser.alternatives(r, n.map((s) => {
      const a = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a.GATE = () => o(i)), a;
    }));
  }
}
function b_(t, e) {
  if (e.elements.length === 1)
    return Xt(t, e.elements[0]);
  const n = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: Xt(t, o, !0)
    }, u = ps(o);
    u && (l.GATE = at(u)), n.push(l);
  }
  const r = t.or++, i = (o, l) => {
    const u = l.getRuleStack().join("-");
    return `uGroup_${o}_${u}`;
  }, s = (o) => t.parser.alternatives(r, n.map((l, u) => {
    const c = { ALT: () => !0 }, f = t.parser;
    c.ALT = () => {
      if (l.ALT(o), !f.isRecording()) {
        const h = i(r, f);
        f.unorderedGroups.get(h) || f.unorderedGroups.set(h, []);
        const m = f.unorderedGroups.get(h);
        typeof m?.[u] > "u" && (m[u] = !0);
      }
    };
    const d = l.GATE;
    return d ? c.GATE = () => d(o) : c.GATE = () => {
      const h = f.unorderedGroups.get(i(r, f));
      return !h?.[u];
    }, c;
  })), a = Yh(t, ps(e), s, "*");
  return (o) => {
    a(o), t.parser.isRecording() || t.parser.unorderedGroups.delete(i(r, t.parser));
  };
}
function O_(t, e) {
  const n = e.elements.map((r) => Xt(t, r));
  return (r) => n.forEach((i) => i(r));
}
function ps(t) {
  if (bo(t))
    return t.guardCondition;
}
function qh(t, e, n = e.terminal) {
  if (n)
    if (zt(n) && Ne(n.rule.ref)) {
      const r = n.rule.ref, i = t.subrule++;
      return (s) => t.parser.subrule(i, Xh(t, r), !1, e, s);
    } else if (zt(n) && Zt(n.rule.ref)) {
      const r = t.consume++, i = So(t, n.rule.ref.name);
      return () => t.parser.consume(r, i, e);
    } else if (Wt(n)) {
      const r = t.consume++, i = So(t, n.value);
      return () => t.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = Jf(e.type.ref), i = r?.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Mo(e.type.ref));
    return qh(t, e, i);
  }
}
function L_(t, e) {
  const n = t.consume++, r = t.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => t.parser.consume(n, r, e);
}
function Yh(t, e, n, r) {
  const i = e && at(e);
  if (!r)
    if (i) {
      const s = t.or++;
      return (a) => t.parser.alternatives(s, [
        {
          ALT: () => n(a),
          GATE: () => i(a)
        },
        {
          ALT: sc(),
          GATE: () => !i(a)
        }
      ]);
    } else
      return n;
  if (r === "*") {
    const s = t.many++;
    return (a) => t.parser.many(s, {
      DEF: () => n(a),
      GATE: i ? () => i(a) : void 0
    });
  } else if (r === "+") {
    const s = t.many++;
    if (i) {
      const a = t.or++;
      return (o) => t.parser.alternatives(a, [
        {
          ALT: () => t.parser.atLeastOne(s, {
            DEF: () => n(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: sc(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a) => t.parser.atLeastOne(s, {
        DEF: () => n(a)
      });
  } else if (r === "?") {
    const s = t.optional++;
    return (a) => t.parser.optional(s, {
      DEF: () => n(a),
      GATE: i ? () => i(a) : void 0
    });
  } else
    Hr();
}
function Xh(t, e) {
  const n = P_(t, e), r = t.parser.getRule(n);
  if (!r)
    throw new Error(`Rule "${n}" not found."`);
  return r;
}
function P_(t, e) {
  if (Ne(e))
    return e.name;
  if (t.ruleNames.has(e))
    return t.ruleNames.get(e);
  {
    let n = e, r = n.$container, i = e.$type;
    for (; !Ne(r); )
      (bo(r) || jf(r) || Kf(r)) && (i = r.elements.indexOf(n).toString() + ":" + i), n = r, r = r.$container;
    return i = r.name + ":" + i, t.ruleNames.set(e, i), i;
  }
}
function So(t, e) {
  const n = t.tokens[e];
  if (!n)
    throw new Error(`Token "${e}" not found."`);
  return n;
}
function M_(t) {
  const e = t.Grammar, n = t.parser.Lexer, r = new x_(t);
  return Vh(e, r, n.definition), r.finalize(), r;
}
function D_(t) {
  const e = F_(t);
  return e.finalize(), e;
}
function F_(t) {
  const e = t.Grammar, n = t.parser.Lexer, r = new A_(t);
  return Vh(e, r, n.definition);
}
class Jh {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, n) {
    const r = ie(qf(e, !1)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, n);
    return i.forEach((a) => {
      const o = a.PATTERN;
      typeof o == "object" && o && "test" in o && Ba(o) ? s.unshift(a) : s.push(a);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Zt).filter((n) => !n.fragment).map((n) => this.buildTerminalToken(n)).toArray();
  }
  buildTerminalToken(e) {
    const n = Do(e), r = this.requiresCustomPattern(n) ? this.regexPatternFunction(n) : n, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = !0), e.hidden && (i.GROUP = Ba(n) ? he.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? !0 : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const n = new RegExp(e, e.flags + "y");
    return (r, i) => (n.lastIndex = i, n.exec(r));
  }
  buildKeywordTokens(e, n, r) {
    return e.filter(Ne).flatMap((i) => Wr(i).filter(Wt)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, n, !!r?.caseInsensitive));
  }
  buildKeywordToken(e, n, r) {
    const i = this.buildKeywordPattern(e, r), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, n)
    };
    return typeof i == "function" && (s.LINE_BREAKS = !0), s;
  }
  buildKeywordPattern(e, n) {
    return n ? new RegExp(Am(e.value)) : e.value;
  }
  findLongerAlt(e, n) {
    return n.reduce((r, i) => {
      const s = i?.PATTERN;
      return s?.source && Em("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
}
class Zh {
  convert(e, n) {
    let r = n.grammarSource;
    if (No(r) && (r = wm(r)), zt(r)) {
      const i = r.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, n);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, n, r) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return rt.convertInt(n);
      case "STRING":
        return rt.convertString(n);
      case "ID":
        return rt.convertID(n);
    }
    switch ((i = Lm(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return rt.convertNumber(n);
      case "boolean":
        return rt.convertBoolean(n);
      case "bigint":
        return rt.convertBigint(n);
      case "date":
        return rt.convertDate(n);
      default:
        return n;
    }
  }
}
var rt;
(function(t) {
  function e(u) {
    let c = "";
    for (let f = 1; f < u.length - 1; f++) {
      const d = u.charAt(f);
      if (d === "\\") {
        const h = u.charAt(++f);
        c += n(h);
      } else
        c += d;
    }
    return c;
  }
  t.convertString = e;
  function n(u) {
    switch (u) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return u;
    }
  }
  function r(u) {
    return u.charAt(0) === "^" ? u.substring(1) : u;
  }
  t.convertID = r;
  function i(u) {
    return parseInt(u);
  }
  t.convertInt = i;
  function s(u) {
    return BigInt(u);
  }
  t.convertBigint = s;
  function a(u) {
    return new Date(u);
  }
  t.convertDate = a;
  function o(u) {
    return Number(u);
  }
  t.convertNumber = o;
  function l(u) {
    return u.toLowerCase() === "true";
  }
  t.convertBoolean = l;
})(rt || (rt = {}));
var Bt = {}, $i = {}, df;
function Qh() {
  if (df) return $i;
  df = 1, Object.defineProperty($i, "__esModule", { value: !0 });
  let t;
  function e() {
    if (t === void 0)
      throw new Error("No runtime abstraction layer installed");
    return t;
  }
  return (function(n) {
    function r(i) {
      if (i === void 0)
        throw new Error("No runtime abstraction layer provided");
      t = i;
    }
    n.install = r;
  })(e || (e = {})), $i.default = e, $i;
}
var te = {}, hf;
function G_() {
  if (hf) return te;
  hf = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.stringArray = te.array = te.func = te.error = te.number = te.string = te.boolean = void 0;
  function t(o) {
    return o === !0 || o === !1;
  }
  te.boolean = t;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  te.string = e;
  function n(o) {
    return typeof o == "number" || o instanceof Number;
  }
  te.number = n;
  function r(o) {
    return o instanceof Error;
  }
  te.error = r;
  function i(o) {
    return typeof o == "function";
  }
  te.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  te.array = s;
  function a(o) {
    return s(o) && o.every((l) => e(l));
  }
  return te.stringArray = a, te;
}
var jt = {}, pf;
function ep() {
  if (pf) return jt;
  pf = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.Emitter = jt.Event = void 0;
  const t = Qh();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (jt.Event = e = {}));
  class n {
    add(s, a = null, o) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(s), this._contexts.push(a), Array.isArray(o) && o.push({ dispose: () => this.remove(s, a) });
    }
    remove(s, a = null) {
      if (!this._callbacks)
        return;
      let o = !1;
      for (let l = 0, u = this._callbacks.length; l < u; l++)
        if (this._callbacks[l] === s)
          if (this._contexts[l] === a) {
            this._callbacks.splice(l, 1), this._contexts.splice(l, 1);
            return;
          } else
            o = !0;
      if (o)
        throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...s) {
      if (!this._callbacks)
        return [];
      const a = [], o = this._callbacks.slice(0), l = this._contexts.slice(0);
      for (let u = 0, c = o.length; u < c; u++)
        try {
          a.push(o[u].apply(l[u], s));
        } catch (f) {
          (0, t.default)().console.error(f);
        }
      return a;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class r {
    constructor(s) {
      this._options = s;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      return this._event || (this._event = (s, a, o) => {
        this._callbacks || (this._callbacks = new n()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(s, a);
        const l = {
          dispose: () => {
            this._callbacks && (this._callbacks.remove(s, a), l.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }
        };
        return Array.isArray(o) && o.push(l), l;
      }), this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(s) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, s);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }
  return jt.Emitter = r, r._noop = function() {
  }, jt;
}
var mf;
function U_() {
  if (mf) return Bt;
  mf = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.CancellationTokenSource = Bt.CancellationToken = void 0;
  const t = Qh(), e = G_(), n = ep();
  var r;
  (function(o) {
    o.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: n.Event.None
    }), o.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: n.Event.None
    });
    function l(u) {
      const c = u;
      return c && (c === o.None || c === o.Cancelled || e.boolean(c.isCancellationRequested) && !!c.onCancellationRequested);
    }
    o.is = l;
  })(r || (Bt.CancellationToken = r = {}));
  const i = Object.freeze(function(o, l) {
    const u = (0, t.default)().timer.setTimeout(o.bind(l), 0);
    return { dispose() {
      u.dispose();
    } };
  });
  class s {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? i : (this._emitter || (this._emitter = new n.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }
  class a {
    get token() {
      return this._token || (this._token = new s()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = r.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof s && this._token.dispose() : this._token = r.None;
    }
  }
  return Bt.CancellationTokenSource = a, Bt;
}
var z = U_();
function B_() {
  return new Promise((t) => {
    typeof setImmediate > "u" ? setTimeout(t, 0) : setImmediate(t);
  });
}
let Mi = 0, j_ = 10;
function K_() {
  return Mi = performance.now(), new z.CancellationTokenSource();
}
const ms = /* @__PURE__ */ Symbol("OperationCancelled");
function Zs(t) {
  return t === ms;
}
async function Ee(t) {
  if (t === z.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - Mi >= j_ && (Mi = e, await B_(), Mi = performance.now()), t.isCancellationRequested)
    throw ms;
}
class Al {
  constructor() {
    this.promise = new Promise((e, n) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (n(r), this);
    });
  }
}
class Kr {
  constructor(e, n, r, i) {
    this._uri = e, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const n = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(n, r);
    }
    return this._content;
  }
  update(e, n) {
    for (const r of e)
      if (Kr.isIncremental(r)) {
        const i = np(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const c = gf(r.text, !1, s);
        if (l - o === c.length)
          for (let d = 0, h = c.length; d < h; d++)
            u[d + o + 1] = c[d];
        else
          c.length < 1e4 ? u.splice(o + 1, l - o, ...c) : this._lineOffsets = u = u.slice(0, o + 1).concat(c, u.slice(l + 1));
        const f = r.text.length - (a - s);
        if (f !== 0)
          for (let d = o + 1 + c.length, h = u.length; d < h; d++)
            u[d] = u[d] + f;
      } else if (Kr.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = gf(this._content, !0)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const n = this.getLineOffsets();
    let r = 0, i = n.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; r < i; ) {
      const a = Math.floor((r + i) / 2);
      n[a] > e ? i = a : r = a + 1;
    }
    const s = r - 1;
    return e = this.ensureBeforeEOL(e, n[s]), { line: s, character: e - n[s] };
  }
  offsetAt(e) {
    const n = this.getLineOffsets();
    if (e.line >= n.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const r = n[e.line];
    if (e.character <= 0)
      return r;
    const i = e.line + 1 < n.length ? n[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
    return this.ensureBeforeEOL(s, r);
  }
  getLineRange(e) {
    const n = this.getLineOffsets();
    if (e >= n.length) {
      const a = n.length - 1;
      return { start: { line: a, character: 0 }, end: { line: a, character: this._content.length - n[a] } };
    } else if (e < 0)
      return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
    const r = n[e], i = e + 1 < n.length ? n[e + 1] : this._content.length, s = this.ensureBeforeEOL(i, r);
    return { start: { line: e, character: 0 }, end: { line: e, character: s - r } };
  }
  getEOLCharacters(e) {
    const n = this.getLineOffsets();
    if (e >= n.length)
      return "";
    if (e < 0)
      return "";
    const r = e + 1 < n.length ? n[e + 1] : this._content.length, i = this.ensureBeforeEOL(r, n[e]);
    return this._content.substring(i, r);
  }
  ensureBeforeEOL(e, n) {
    for (; e > n && tp(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const n = e;
    return n != null && typeof n.text == "string" && n.range !== void 0 && (n.rangeLength === void 0 || typeof n.rangeLength == "number");
  }
  static isFull(e) {
    const n = e;
    return n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0;
  }
}
var Io;
(function(t) {
  function e(i, s, a, o) {
    return new Kr(i, s, a, o);
  }
  t.create = e;
  function n(i, s, a) {
    if (i instanceof Kr)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  t.update = n;
  function r(i, s) {
    const a = i.getText(), o = wo(s.map(H_), (c, f) => {
      const d = c.range.start.line - f.range.start.line;
      return d === 0 ? c.range.start.character - f.range.start.character : d;
    });
    let l = 0;
    const u = [];
    for (const c of o) {
      const f = i.offsetAt(c.range.start);
      if (f < l)
        throw new Error("Overlapping edit");
      f > l && u.push(a.substring(l, f)), c.newText.length && u.push(c.newText), l = i.offsetAt(c.range.end);
    }
    return u.push(a.substr(l)), u.join("");
  }
  t.applyEdits = r;
})(Io || (Io = {}));
function wo(t, e) {
  if (t.length <= 1)
    return t;
  const n = t.length / 2 | 0, r = t.slice(0, n), i = t.slice(n);
  wo(r, e), wo(i, e);
  let s = 0, a = 0, o = 0;
  for (; s < r.length && a < i.length; )
    e(r[s], i[a]) <= 0 ? t[o++] = r[s++] : t[o++] = i[a++];
  for (; s < r.length; )
    t[o++] = r[s++];
  for (; a < i.length; )
    t[o++] = i[a++];
  return t;
}
function gf(t, e, n = 0) {
  const r = e ? [n] : [];
  for (let i = 0; i < t.length; i++) {
    const s = t.charCodeAt(i);
    tp(s) && (s === 13 && i + 1 < t.length && t.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function tp(t) {
  return t === 13 || t === 10;
}
function np(t) {
  const e = t.start, n = t.end;
  return e.line > n.line || e.line === n.line && e.character > n.character ? { start: n, end: e } : t;
}
function H_(t) {
  const e = np(t.range);
  return e !== t.range ? { newText: t.newText, range: e } : t;
}
var rp;
(() => {
  var t = { 470: (i) => {
    function s(l) {
      if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a(l, u) {
      for (var c, f = "", d = 0, h = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length) c = l.charCodeAt(g);
        else {
          if (c === 47) break;
          c = 47;
        }
        if (c === 47) {
          if (!(h === g - 1 || m === 1)) if (h !== g - 1 && m === 2) {
            if (f.length < 2 || d !== 2 || f.charCodeAt(f.length - 1) !== 46 || f.charCodeAt(f.length - 2) !== 46) {
              if (f.length > 2) {
                var T = f.lastIndexOf("/");
                if (T !== f.length - 1) {
                  T === -1 ? (f = "", d = 0) : d = (f = f.slice(0, T)).length - 1 - f.lastIndexOf("/"), h = g, m = 0;
                  continue;
                }
              } else if (f.length === 2 || f.length === 1) {
                f = "", d = 0, h = g, m = 0;
                continue;
              }
            }
            u && (f.length > 0 ? f += "/.." : f = "..", d = 2);
          } else f.length > 0 ? f += "/" + l.slice(h + 1, g) : f = l.slice(h + 1, g), d = g - h - 1;
          h = g, m = 0;
        } else c === 46 && m !== -1 ? ++m : m = -1;
      }
      return f;
    }
    var o = { resolve: function() {
      for (var l, u = "", c = !1, f = arguments.length - 1; f >= -1 && !c; f--) {
        var d;
        f >= 0 ? d = arguments[f] : (l === void 0 && (l = process.cwd()), d = l), s(d), d.length !== 0 && (u = d + "/" + u, c = d.charCodeAt(0) === 47);
      }
      return u = a(u, !c), c ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0) return ".";
      var u = l.charCodeAt(0) === 47, c = l.charCodeAt(l.length - 1) === 47;
      return (l = a(l, !u)).length !== 0 || u || (l = "."), l.length > 0 && c && (l += "/"), u ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var l, u = 0; u < arguments.length; ++u) {
        var c = arguments[u];
        s(c), c.length > 0 && (l === void 0 ? l = c : l += "/" + c);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, u) {
      if (s(l), s(u), l === u || (l = o.resolve(l)) === (u = o.resolve(u))) return "";
      for (var c = 1; c < l.length && l.charCodeAt(c) === 47; ++c) ;
      for (var f = l.length, d = f - c, h = 1; h < u.length && u.charCodeAt(h) === 47; ++h) ;
      for (var m = u.length - h, g = d < m ? d : m, T = -1, y = 0; y <= g; ++y) {
        if (y === g) {
          if (m > g) {
            if (u.charCodeAt(h + y) === 47) return u.slice(h + y + 1);
            if (y === 0) return u.slice(h + y);
          } else d > g && (l.charCodeAt(c + y) === 47 ? T = y : y === 0 && (T = 0));
          break;
        }
        var R = l.charCodeAt(c + y);
        if (R !== u.charCodeAt(h + y)) break;
        R === 47 && (T = y);
      }
      var v = "";
      for (y = c + T + 1; y <= f; ++y) y !== f && l.charCodeAt(y) !== 47 || (v.length === 0 ? v += ".." : v += "/..");
      return v.length > 0 ? v + u.slice(h + T) : (h += T, u.charCodeAt(h) === 47 && ++h, u.slice(h));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0) return ".";
      for (var u = l.charCodeAt(0), c = u === 47, f = -1, d = !0, h = l.length - 1; h >= 1; --h) if ((u = l.charCodeAt(h)) === 47) {
        if (!d) {
          f = h;
          break;
        }
      } else d = !1;
      return f === -1 ? c ? "/" : "." : c && f === 1 ? "//" : l.slice(0, f);
    }, basename: function(l, u) {
      if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
      s(l);
      var c, f = 0, d = -1, h = !0;
      if (u !== void 0 && u.length > 0 && u.length <= l.length) {
        if (u.length === l.length && u === l) return "";
        var m = u.length - 1, g = -1;
        for (c = l.length - 1; c >= 0; --c) {
          var T = l.charCodeAt(c);
          if (T === 47) {
            if (!h) {
              f = c + 1;
              break;
            }
          } else g === -1 && (h = !1, g = c + 1), m >= 0 && (T === u.charCodeAt(m) ? --m == -1 && (d = c) : (m = -1, d = g));
        }
        return f === d ? d = g : d === -1 && (d = l.length), l.slice(f, d);
      }
      for (c = l.length - 1; c >= 0; --c) if (l.charCodeAt(c) === 47) {
        if (!h) {
          f = c + 1;
          break;
        }
      } else d === -1 && (h = !1, d = c + 1);
      return d === -1 ? "" : l.slice(f, d);
    }, extname: function(l) {
      s(l);
      for (var u = -1, c = 0, f = -1, d = !0, h = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47) f === -1 && (d = !1, f = m + 1), g === 46 ? u === -1 ? u = m : h !== 1 && (h = 1) : u !== -1 && (h = -1);
        else if (!d) {
          c = m + 1;
          break;
        }
      }
      return u === -1 || f === -1 || h === 0 || h === 1 && u === f - 1 && u === c + 1 ? "" : l.slice(u, f);
    }, format: function(l) {
      if (l === null || typeof l != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return (function(u, c) {
        var f = c.dir || c.root, d = c.base || (c.name || "") + (c.ext || "");
        return f ? f === c.root ? f + d : f + "/" + d : d;
      })(0, l);
    }, parse: function(l) {
      s(l);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0) return u;
      var c, f = l.charCodeAt(0), d = f === 47;
      d ? (u.root = "/", c = 1) : c = 0;
      for (var h = -1, m = 0, g = -1, T = !0, y = l.length - 1, R = 0; y >= c; --y) if ((f = l.charCodeAt(y)) !== 47) g === -1 && (T = !1, g = y + 1), f === 46 ? h === -1 ? h = y : R !== 1 && (R = 1) : h !== -1 && (R = -1);
      else if (!T) {
        m = y + 1;
        break;
      }
      return h === -1 || g === -1 || R === 0 || R === 1 && h === g - 1 && h === m + 1 ? g !== -1 && (u.base = u.name = m === 0 && d ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && d ? (u.name = l.slice(1, h), u.base = l.slice(1, g)) : (u.name = l.slice(m, h), u.base = l.slice(m, g)), u.ext = l.slice(h, g)), m > 0 ? u.dir = l.slice(0, m - 1) : d && (u.dir = "/"), u;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function n(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var a = e[i] = { exports: {} };
    return t[i](a, a.exports, n), a.exports;
  }
  n.d = (i, s) => {
    for (var a in s) n.o(s, a) && !n.o(i, a) && Object.defineProperty(i, a, { enumerable: !0, get: s[a] });
  }, n.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), n.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
  };
  var r = {};
  (() => {
    let i;
    n.r(r), n.d(r, { URI: () => d, Utils: () => we }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
    function l(x, $) {
      if (!x.scheme && $) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${x.authority}", path: "${x.path}", query: "${x.query}", fragment: "${x.fragment}"}`);
      if (x.scheme && !s.test(x.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (x.path) {
        if (x.authority) {
          if (!a.test(x.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(x.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", c = "/", f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class d {
      constructor($, E, I, L, b, N = !1) {
        $t(this, "scheme");
        $t(this, "authority");
        $t(this, "path");
        $t(this, "query");
        $t(this, "fragment");
        typeof $ == "object" ? (this.scheme = $.scheme || u, this.authority = $.authority || u, this.path = $.path || u, this.query = $.query || u, this.fragment = $.fragment || u) : (this.scheme = /* @__PURE__ */ (function($e, Q) {
          return $e || Q ? $e : "file";
        })($, N), this.authority = E || u, this.path = (function($e, Q) {
          switch ($e) {
            case "https":
            case "http":
            case "file":
              Q ? Q[0] !== c && (Q = c + Q) : Q = c;
          }
          return Q;
        })(this.scheme, I || u), this.query = L || u, this.fragment = b || u, l(this, N));
      }
      static isUri($) {
        return $ instanceof d || !!$ && typeof $.authority == "string" && typeof $.fragment == "string" && typeof $.path == "string" && typeof $.query == "string" && typeof $.scheme == "string" && typeof $.fsPath == "string" && typeof $.with == "function" && typeof $.toString == "function";
      }
      get fsPath() {
        return R(this);
      }
      with($) {
        if (!$) return this;
        let { scheme: E, authority: I, path: L, query: b, fragment: N } = $;
        return E === void 0 ? E = this.scheme : E === null && (E = u), I === void 0 ? I = this.authority : I === null && (I = u), L === void 0 ? L = this.path : L === null && (L = u), b === void 0 ? b = this.query : b === null && (b = u), N === void 0 ? N = this.fragment : N === null && (N = u), E === this.scheme && I === this.authority && L === this.path && b === this.query && N === this.fragment ? this : new m(E, I, L, b, N);
      }
      static parse($, E = !1) {
        const I = f.exec($);
        return I ? new m(I[2] || u, oe(I[4] || u), oe(I[5] || u), oe(I[7] || u), oe(I[9] || u), E) : new m(u, u, u, u, u);
      }
      static file($) {
        let E = u;
        if (i && ($ = $.replace(/\\/g, c)), $[0] === c && $[1] === c) {
          const I = $.indexOf(c, 2);
          I === -1 ? (E = $.substring(2), $ = c) : (E = $.substring(2, I), $ = $.substring(I) || c);
        }
        return new m("file", E, $, u, u);
      }
      static from($) {
        const E = new m($.scheme, $.authority, $.path, $.query, $.fragment);
        return l(E, !0), E;
      }
      toString($ = !1) {
        return v(this, $);
      }
      toJSON() {
        return this;
      }
      static revive($) {
        if ($) {
          if ($ instanceof d) return $;
          {
            const E = new m($);
            return E._formatted = $.external, E._fsPath = $._sep === h ? $.fsPath : null, E;
          }
        }
        return $;
      }
    }
    const h = i ? 1 : void 0;
    class m extends d {
      constructor() {
        super(...arguments);
        $t(this, "_formatted", null);
        $t(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = R(this)), this._fsPath;
      }
      toString(E = !1) {
        return E ? v(this, !0) : (this._formatted || (this._formatted = v(this, !1)), this._formatted);
      }
      toJSON() {
        const E = { $mid: 1 };
        return this._fsPath && (E.fsPath = this._fsPath, E._sep = h), this._formatted && (E.external = this._formatted), this.path && (E.path = this.path), this.scheme && (E.scheme = this.scheme), this.authority && (E.authority = this.authority), this.query && (E.query = this.query), this.fragment && (E.fragment = this.fragment), E;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function T(x, $, E) {
      let I, L = -1;
      for (let b = 0; b < x.length; b++) {
        const N = x.charCodeAt(b);
        if (N >= 97 && N <= 122 || N >= 65 && N <= 90 || N >= 48 && N <= 57 || N === 45 || N === 46 || N === 95 || N === 126 || $ && N === 47 || E && N === 91 || E && N === 93 || E && N === 58) L !== -1 && (I += encodeURIComponent(x.substring(L, b)), L = -1), I !== void 0 && (I += x.charAt(b));
        else {
          I === void 0 && (I = x.substr(0, b));
          const $e = g[N];
          $e !== void 0 ? (L !== -1 && (I += encodeURIComponent(x.substring(L, b)), L = -1), I += $e) : L === -1 && (L = b);
        }
      }
      return L !== -1 && (I += encodeURIComponent(x.substring(L))), I !== void 0 ? I : x;
    }
    function y(x) {
      let $;
      for (let E = 0; E < x.length; E++) {
        const I = x.charCodeAt(E);
        I === 35 || I === 63 ? ($ === void 0 && ($ = x.substr(0, E)), $ += g[I]) : $ !== void 0 && ($ += x[E]);
      }
      return $ !== void 0 ? $ : x;
    }
    function R(x, $) {
      let E;
      return E = x.authority && x.path.length > 1 && x.scheme === "file" ? `//${x.authority}${x.path}` : x.path.charCodeAt(0) === 47 && (x.path.charCodeAt(1) >= 65 && x.path.charCodeAt(1) <= 90 || x.path.charCodeAt(1) >= 97 && x.path.charCodeAt(1) <= 122) && x.path.charCodeAt(2) === 58 ? x.path[1].toLowerCase() + x.path.substr(2) : x.path, i && (E = E.replace(/\//g, "\\")), E;
    }
    function v(x, $) {
      const E = $ ? y : T;
      let I = "", { scheme: L, authority: b, path: N, query: $e, fragment: Q } = x;
      if (L && (I += L, I += ":"), (b || L === "file") && (I += c, I += c), b) {
        let V = b.indexOf("@");
        if (V !== -1) {
          const Gt = b.substr(0, V);
          b = b.substr(V + 1), V = Gt.lastIndexOf(":"), V === -1 ? I += E(Gt, !1, !1) : (I += E(Gt.substr(0, V), !1, !1), I += ":", I += E(Gt.substr(V + 1), !1, !0)), I += "@";
        }
        b = b.toLowerCase(), V = b.lastIndexOf(":"), V === -1 ? I += E(b, !1, !0) : (I += E(b.substr(0, V), !1, !0), I += b.substr(V));
      }
      if (N) {
        if (N.length >= 3 && N.charCodeAt(0) === 47 && N.charCodeAt(2) === 58) {
          const V = N.charCodeAt(1);
          V >= 65 && V <= 90 && (N = `/${String.fromCharCode(V + 32)}:${N.substr(3)}`);
        } else if (N.length >= 2 && N.charCodeAt(1) === 58) {
          const V = N.charCodeAt(0);
          V >= 65 && V <= 90 && (N = `${String.fromCharCode(V + 32)}:${N.substr(2)}`);
        }
        I += E(N, !0, !1);
      }
      return $e && (I += "?", I += E($e, !1, !1)), Q && (I += "#", I += $ ? Q : T(Q, !1, !1)), I;
    }
    function S(x) {
      try {
        return decodeURIComponent(x);
      } catch {
        return x.length > 3 ? x.substr(0, 3) + S(x.substr(3)) : x;
      }
    }
    const O = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function oe(x) {
      return x.match(O) ? x.replace(O, (($) => S($))) : x;
    }
    var Me = n(470);
    const ve = Me.posix || Me, He = "/";
    var we;
    (function(x) {
      x.joinPath = function($, ...E) {
        return $.with({ path: ve.join($.path, ...E) });
      }, x.resolvePath = function($, ...E) {
        let I = $.path, L = !1;
        I[0] !== He && (I = He + I, L = !0);
        let b = ve.resolve(I, ...E);
        return L && b[0] === He && !$.authority && (b = b.substring(1)), $.with({ path: b });
      }, x.dirname = function($) {
        if ($.path.length === 0 || $.path === He) return $;
        let E = ve.dirname($.path);
        return E.length === 1 && E.charCodeAt(0) === 46 && (E = ""), $.with({ path: E });
      }, x.basename = function($) {
        return ve.basename($.path);
      }, x.extname = function($) {
        return ve.extname($.path);
      };
    })(we || (we = {}));
  })(), rp = r;
})();
const { URI: Jt, Utils: Yn } = rp;
var kt;
(function(t) {
  t.basename = Yn.basename, t.dirname = Yn.dirname, t.extname = Yn.extname, t.joinPath = Yn.joinPath, t.resolvePath = Yn.resolvePath;
  function e(i, s) {
    return i?.toString() === s?.toString();
  }
  t.equals = e;
  function n(i, s) {
    const a = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a.split("/").filter((h) => h.length > 0), u = o.split("/").filter((h) => h.length > 0);
    let c = 0;
    for (; c < l.length && l[c] === u[c]; c++)
      ;
    const f = "../".repeat(l.length - c), d = u.slice(c).join("/");
    return f + d;
  }
  t.relative = n;
  function r(i) {
    return Jt.parse(i.toString()).toString();
  }
  t.normalize = r;
})(kt || (kt = {}));
var H;
(function(t) {
  t[t.Changed = 0] = "Changed", t[t.Parsed = 1] = "Parsed", t[t.IndexedContent = 2] = "IndexedContent", t[t.ComputedScopes = 3] = "ComputedScopes", t[t.Linked = 4] = "Linked", t[t.IndexedReferences = 5] = "IndexedReferences", t[t.Validated = 6] = "Validated";
})(H || (H = {}));
class W_ {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, n = z.CancellationToken.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, n);
  }
  fromTextDocument(e, n, r) {
    return n = n ?? Jt.parse(e.uri), z.CancellationToken.is(r) ? this.createAsync(n, e, r) : this.create(n, e, r);
  }
  fromString(e, n, r) {
    return z.CancellationToken.is(r) ? this.createAsync(n, e, r) : this.create(n, e, r);
  }
  fromModel(e, n) {
    return this.create(n, { $model: e });
  }
  create(e, n, r) {
    if (typeof n == "string") {
      const i = this.parse(e, n, r);
      return this.createLangiumDocument(i, e, void 0, n);
    } else if ("$model" in n) {
      const i = { value: n.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, n.getText(), r);
      return this.createLangiumDocument(i, e, n);
    }
  }
  async createAsync(e, n, r) {
    if (typeof n == "string") {
      const i = await this.parseAsync(e, n, r);
      return this.createLangiumDocument(i, e, void 0, n);
    } else {
      const i = await this.parseAsync(e, n.getText(), r);
      return this.createLangiumDocument(i, e, n);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, n, r, i) {
    let s;
    if (r)
      s = {
        parseResult: e,
        uri: n,
        state: H.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a = this.createTextDocumentGetter(n, i);
      s = {
        parseResult: e,
        uri: n,
        state: H.Parsed,
        references: [],
        get textDocument() {
          return a();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, n) {
    var r, i;
    const s = (r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText, a = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a)
      Object.defineProperty(e, "textDocument", {
        value: a
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, n), e.parseResult.value.$document = e), e.state = H.Parsed, e;
  }
  parse(e, n, r) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n, r);
  }
  parseAsync(e, n, r) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n, r);
  }
  createTextDocumentGetter(e, n) {
    const r = this.serviceRegistry;
    let i;
    return () => i ?? (i = Io.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, n ?? ""));
  }
}
class z_ {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return ie(this.documentMap.values());
  }
  addDocument(e) {
    const n = e.uri.toString();
    if (this.documentMap.has(n))
      throw new Error(`A document with the URI '${n}' is already present.`);
    this.documentMap.set(n, e);
  }
  getDocument(e) {
    const n = e.toString();
    return this.documentMap.get(n);
  }
  async getOrCreateDocument(e, n) {
    let r = this.getDocument(e);
    return r || (r = await this.langiumDocumentFactory.fromUri(e, n), this.addDocument(r), r);
  }
  createDocument(e, n, r) {
    if (r)
      return this.langiumDocumentFactory.fromString(n, e, r).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(n, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const n = e.toString(), r = this.documentMap.get(n);
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = H.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const n = e.toString(), r = this.documentMap.get(n);
    return r && (r.state = H.Changed, this.documentMap.delete(n)), r;
  }
}
const Ea = /* @__PURE__ */ Symbol("ref_resolving");
class V_ {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, n = z.CancellationToken.None) {
    for (const r of hn(e.parseResult.value))
      await Ee(n), Wf(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, n) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Ea;
      try {
        const s = this.getCandidate(e);
        if (_i(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a = this.loadAstNode(s);
          i._ref = a ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a = (r = s.message) !== null && r !== void 0 ? r : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a}` });
      }
      n.references.push(i);
    }
  }
  unlink(e) {
    for (const n of e.references)
      delete n._ref, delete n._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    const r = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return r ?? this.createLinkingError(e);
  }
  buildReference(e, n, r, i) {
    const s = this, a = {
      $refNode: r,
      $refText: i,
      get ref() {
        var o;
        if (ue(this._ref))
          return this._ref;
        if (Up(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a, container: e, property: n }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Ea;
          const l = Ua(e).$document, u = s.getLinkedNode({ reference: a, container: e, property: n });
          if (u.error && l && l.state < H.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = u.node) !== null && o !== void 0 ? o : u.error, this._nodeDescription = u.descr, l?.references.push(this);
        } else if (this._ref === Ea)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);
        return ue(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return _i(this._ref) ? this._ref : void 0;
      }
    };
    return a;
  }
  getLinkedNode(e) {
    var n;
    try {
      const r = this.getCandidate(e);
      if (_i(r))
        return { error: r };
      const i = this.loadAstNode(r);
      return i ? { node: i, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const i = (n = r.message) !== null && n !== void 0 ? n : String(r);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const n = this.langiumDocuments().getDocument(e.documentUri);
    if (n)
      return this.astNodeLocator.getAstNode(n.parseResult.value, e.path);
  }
  createLinkingError(e, n) {
    const r = Ua(e.container).$document;
    r && r.state < H.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: n });
  }
}
function q_(t) {
  return typeof t.name == "string";
}
class Y_ {
  getName(e) {
    if (q_(e))
      return e.name;
  }
  getNameNode(e) {
    return Xf(e.$cstNode, "name");
  }
}
class X_ {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const n = bm(e), r = e.astNode;
      if (n && r) {
        const i = r[n.feature];
        if (ze(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (ze(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (r) {
        const i = this.nameProvider.getNameNode(r);
        if (i && (i === e || Kp(e, i)))
          return r;
      }
    }
  }
  findDeclarationNode(e) {
    const n = this.findDeclaration(e);
    if (n?.$cstNode) {
      const r = this.nameProvider.getNameNode(n);
      return r ?? n.$cstNode;
    }
  }
  findReferences(e, n) {
    const r = [];
    if (n.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && r.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return n.documentUri && (i = i.filter((s) => kt.equals(s.sourceUri, n.documentUri))), r.push(...i), ie(r);
  }
  getReferenceToSelf(e) {
    const n = this.nameProvider.getNameNode(e);
    if (n) {
      const r = At(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Wi(n),
        local: !0
      };
    }
  }
}
class gs {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [n, r] of e)
        this.add(n, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Da.sum(ie(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, n) {
    if (n === void 0)
      return this.map.delete(e);
    {
      const r = this.map.get(e);
      if (r) {
        const i = r.indexOf(n);
        if (i >= 0)
          return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), !0;
      }
      return !1;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var n;
    return (n = this.map.get(e)) !== null && n !== void 0 ? n : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, n) {
    if (n === void 0)
      return this.map.has(e);
    {
      const r = this.map.get(e);
      return r ? r.indexOf(n) >= 0 : !1;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, n) {
    return this.map.has(e) ? this.map.get(e).push(n) : this.map.set(e, [n]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, n) {
    return this.map.has(e) ? this.map.get(e).push(...n) : this.map.set(e, Array.from(n)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((n, r) => n.forEach((i) => e(i, r, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ie(this.map.entries()).flatMap(([e, n]) => n.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ie(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ie(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ie(this.map.entries());
  }
}
class yf {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [n, r] of e)
        this.set(n, r);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, n) {
    return this.map.set(e, n), this.inverse.set(n, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const n = this.map.get(e);
    return n !== void 0 ? (this.map.delete(e), this.inverse.delete(n), !0) : !1;
  }
}
class J_ {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, n = z.CancellationToken.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, n);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, n, r = Oo, i = z.CancellationToken.None) {
    const s = [];
    this.exportNode(e, s, n);
    for (const a of r(e))
      await Ee(i), this.exportNode(a, s, n);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, n, r) {
    const i = this.nameProvider.getName(e);
    i && n.push(this.descriptions.createDescription(e, i, r));
  }
  async computeLocalScopes(e, n = z.CancellationToken.None) {
    const r = e.parseResult.value, i = new gs();
    for (const s of Wr(r))
      await Ee(n), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, n, r) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && r.add(i, this.descriptions.createDescription(e, s, n));
    }
  }
}
class Tf {
  constructor(e, n, r) {
    var i;
    this.elements = e, this.outerScope = n, this.caseInsensitive = (i = r?.caseInsensitive) !== null && i !== void 0 ? i : !1;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const n = this.caseInsensitive ? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase()) : this.elements.find((r) => r.name === e);
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
}
class Z_ {
  constructor(e, n, r) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = r?.caseInsensitive) !== null && i !== void 0 ? i : !1;
    for (const s of e) {
      const a = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a, s);
    }
    this.outerScope = n;
  }
  getElement(e) {
    const n = this.caseInsensitive ? e.toLowerCase() : e, r = this.elements.get(n);
    if (r)
      return r;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = ie(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class ip {
  constructor() {
    this.toDispose = [], this.isDisposed = !1;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}
class Q_ extends ip {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, n) {
    this.throwIfDisposed(), this.cache.set(e, n);
  }
  get(e, n) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (n) {
      const r = n();
      return this.cache.set(e, r), r;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}
class eC extends ip {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((n) => n);
  }
  has(e, n) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(n);
  }
  set(e, n, r) {
    this.throwIfDisposed(), this.cacheForContext(e).set(n, r);
  }
  get(e, n, r) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(n))
      return i.get(n);
    if (r) {
      const s = r();
      return i.set(n, s), s;
    } else
      return;
  }
  delete(e, n) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(n);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const n = this.converter(e);
      this.cache.delete(n);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const n = this.converter(e);
    let r = this.cache.get(n);
    return r || (r = /* @__PURE__ */ new Map(), this.cache.set(n, r)), r;
  }
}
class tC extends Q_ {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, n) {
    super(), n ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}
class nC {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new tC(e.shared);
  }
  getScope(e) {
    const n = [], r = this.reflection.getReferenceType(e), i = At(e.container).precomputedScopes;
    if (i) {
      let a = e.container;
      do {
        const o = i.get(a);
        o.length > 0 && n.push(ie(o).filter((l) => this.reflection.isSubtype(l.type, r))), a = a.$container;
      } while (a);
    }
    let s = this.getGlobalScope(r, e);
    for (let a = n.length - 1; a >= 0; a--)
      s = this.createScope(n[a], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, n, r) {
    return new Tf(ie(e), n, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, n, r) {
    const i = ie(e).map((s) => {
      const a = this.nameProvider.getName(s);
      if (a)
        return this.descriptions.createDescription(s, a);
    }).nonNullable();
    return new Tf(i, n, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, n) {
    return this.globalScopeCache.get(e, () => new Z_(this.indexManager.allElements(e)));
  }
}
function rC(t) {
  return typeof t.$comment == "string";
}
function vf(t) {
  return typeof t == "object" && !!t && ("$ref" in t || "$error" in t);
}
class iC {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, n) {
    const r = n ?? {}, i = n?.replacer, s = (o, l) => this.replacer(o, l, r), a = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = At(e), JSON.stringify(e, a, n?.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, n) {
    const r = n ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, r), i;
  }
  replacer(e, n, { refText: r, sourceText: i, textRegions: s, comments: a, uriConverter: o }) {
    var l, u, c, f;
    if (!this.ignoreProperties.has(e))
      if (ze(n)) {
        const d = n.ref, h = r ? n.$refText : void 0;
        if (d) {
          const m = At(d);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, n) : g = m.uri.toString());
          const T = this.astNodeLocator.getAstNodePath(d);
          return {
            $ref: `${g}#${T}`,
            $refText: h
          };
        } else
          return {
            $error: (u = (l = n.error) === null || l === void 0 ? void 0 : l.message) !== null && u !== void 0 ? u : "Could not resolve reference",
            $refText: h
          };
      } else if (ue(n)) {
        let d;
        if (s && (d = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, n)), (!e || n.$document) && d?.$textRegion && (d.$textRegion.documentURI = (c = this.currentDocument) === null || c === void 0 ? void 0 : c.uri.toString())), i && !e && (d ?? (d = Object.assign({}, n)), d.$sourceText = (f = n.$cstNode) === null || f === void 0 ? void 0 : f.text), a) {
          d ?? (d = Object.assign({}, n));
          const h = this.commentProvider.getComment(n);
          h && (d.$comment = h.replace(/\r/g, ""));
        }
        return d ?? n;
      } else
        return n;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const n = (r) => ({
      offset: r.offset,
      end: r.end,
      length: r.length,
      range: r.range
    });
    if (e.$cstNode) {
      const r = e.$textRegion = n(e.$cstNode), i = r.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a = Cm(e.$cstNode, s).map(n);
        a.length !== 0 && (i[s] = a);
      }), e;
    }
  }
  linkNode(e, n, r, i, s, a) {
    for (const [l, u] of Object.entries(e))
      if (Array.isArray(u))
        for (let c = 0; c < u.length; c++) {
          const f = u[c];
          vf(f) ? u[c] = this.reviveReference(e, l, n, f, r) : ue(f) && this.linkNode(f, n, r, e, l, c);
        }
      else vf(u) ? e[l] = this.reviveReference(e, l, n, u, r) : ue(u) && this.linkNode(u, n, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a;
  }
  reviveReference(e, n, r, i, s) {
    let a = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (ue(l))
        return a || (a = this.nameProvider.getName(l)), {
          $refText: a ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a ?? ""
      };
      return l.error = {
        container: e,
        property: n,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, n, r) {
    try {
      const i = n.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, n.substring(1));
        return l || "Could not resolve path: " + n;
      }
      if (i < 0) {
        const l = r ? r(n) : Jt.parse(n), u = this.langiumDocuments.getDocument(l);
        return u ? u.parseResult.value : "Could not find document for URI: " + n;
      }
      const s = r ? r(n.substring(0, i)) : Jt.parse(n.substring(0, i)), a = this.langiumDocuments.getDocument(s);
      if (!a)
        return "Could not find document for URI: " + n;
      if (i === n.length - 1)
        return a.parseResult.value;
      const o = this.astNodeLocator.getAstNode(a.parseResult.value, n.substring(i + 1));
      return o || "Could not resolve URI: " + n;
    } catch (i) {
      return String(i);
    }
  }
}
class sC {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
  }
  register(e) {
    const n = e.LanguageMetaData;
    for (const r of n.fileExtensions)
      this.fileExtensionMap.has(r) && console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`), this.fileExtensionMap.set(r, e);
    this.languageIdMap.set(n.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var n, r;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (r = (n = this.textDocuments) === null || n === void 0 ? void 0 : n.get(e)) === null || r === void 0 ? void 0 : r.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = kt.extname(e), a = this.fileExtensionMap.get(s);
    if (!a)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a;
  }
  hasServices(e) {
    try {
      return this.getServices(e), !0;
    } catch {
      return !1;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}
function wr(t) {
  return { code: t };
}
var ys;
(function(t) {
  t.all = ["fast", "slow", "built-in"];
})(ys || (ys = {}));
class aC {
  constructor(e) {
    this.entries = new gs(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, n = this, r = "fast") {
    if (r === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a = s;
      if (Array.isArray(a))
        for (const o of a) {
          const l = {
            check: this.wrapValidationException(o, n),
            category: r
          };
          this.addEntry(i, l);
        }
      else if (typeof a == "function") {
        const o = {
          check: this.wrapValidationException(a, n),
          category: r
        };
        this.addEntry(i, o);
      } else
        Hr();
    }
  }
  wrapValidationException(e, n) {
    return async (r, i, s) => {
      await this.handleException(() => e.call(n, r, i, s), "An error occurred during validation", i, r);
    };
  }
  async handleException(e, n, r, i) {
    try {
      await e();
    } catch (s) {
      if (Zs(s))
        throw s;
      console.error(`${n}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a = s instanceof Error ? s.message : String(s);
      r("error", `${n}: ${a}`, { node: i });
    }
  }
  addEntry(e, n) {
    if (e === "AstNode") {
      this.entries.add("AstNode", n);
      return;
    }
    for (const r of this.reflection.getAllSubTypes(e))
      this.entries.add(r, n);
  }
  getChecks(e, n) {
    let r = ie(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return n && (r = r.filter((i) => n.includes(i.category))), r.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, n = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", n));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, n = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", n));
  }
  wrapPreparationException(e, n, r) {
    return async (i, s, a, o) => {
      await this.handleException(() => e.call(r, i, s, a, o), n, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}
class oC {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, n = {}, r = z.CancellationToken.None) {
    const i = e.parseResult, s = [];
    if (await Ee(r), (!n.categories || n.categories.includes("built-in")) && (this.processLexingErrors(i, s, n), n.stopAfterLexingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Fe.LexingError;
    }) || (this.processParsingErrors(i, s, n), n.stopAfterParsingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Fe.ParsingError;
    })) || (this.processLinkingErrors(e, s, n), n.stopAfterLinkingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Fe.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, n, r));
    } catch (a) {
      if (Zs(a))
        throw a;
      console.error("An error occurred during validation:", a);
    }
    return await Ee(r), s;
  }
  processLexingErrors(e, n, r) {
    var i, s, a;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const u = (a = l.severity) !== null && a !== void 0 ? a : "error", c = {
        severity: xa(u),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: uC(u),
        source: this.getSource()
      };
      n.push(c);
    }
  }
  processParsingErrors(e, n, r) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a = i.previousToken;
          if (isNaN(a.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a.endLine - 1, character: a.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = Ga(i.token);
      if (s) {
        const a = {
          severity: xa("error"),
          range: s,
          message: i.message,
          data: wr(Fe.ParsingError),
          source: this.getSource()
        };
        n.push(a);
      }
    }
  }
  processLinkingErrors(e, n, r) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: Fe.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        n.push(this.toDiagnostic("error", s.message, a));
      }
    }
  }
  async validateAst(e, n, r = z.CancellationToken.None) {
    const i = [], s = (a, o, l) => {
      i.push(this.toDiagnostic(a, o, l));
    };
    return await this.validateAstBefore(e, n, s, r), await this.validateAstNodes(e, n, s, r), await this.validateAstAfter(e, n, s, r), i;
  }
  async validateAstBefore(e, n, r, i = z.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksBefore;
    for (const o of a)
      await Ee(i), await o(e, r, (s = n.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, n, r, i = z.CancellationToken.None) {
    await Promise.all(hn(e).map(async (s) => {
      await Ee(i);
      const a = this.validationRegistry.getChecks(s.$type, n.categories);
      for (const o of a)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, n, r, i = z.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksAfter;
    for (const o of a)
      await Ee(i), await o(e, r, (s = n.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, n, r) {
    return {
      message: n,
      range: lC(r),
      severity: xa(e),
      code: r.code,
      codeDescription: r.codeDescription,
      tags: r.tags,
      relatedInformation: r.relatedInformation,
      data: r.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}
function lC(t) {
  if (t.range)
    return t.range;
  let e;
  return typeof t.property == "string" ? e = Xf(t.node.$cstNode, t.property, t.index) : typeof t.keyword == "string" && (e = km(t.node.$cstNode, t.keyword, t.index)), e ?? (e = t.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function xa(t) {
  switch (t) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
function uC(t) {
  switch (t) {
    case "error":
      return wr(Fe.LexingError);
    case "warning":
      return wr(Fe.LexingWarning);
    case "info":
      return wr(Fe.LexingInfo);
    case "hint":
      return wr(Fe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
var Fe;
(function(t) {
  t.LexingError = "lexing-error", t.LexingWarning = "lexing-warning", t.LexingInfo = "lexing-info", t.LexingHint = "lexing-hint", t.ParsingError = "parsing-error", t.LinkingError = "linking-error";
})(Fe || (Fe = {}));
class cC {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, n, r) {
    const i = r ?? At(e);
    n ?? (n = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!n)
      throw new Error(`Node at path ${s} has no name.`);
    let a;
    const o = () => {
      var l;
      return a ?? (a = Wi((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: n,
      get nameSegment() {
        return o();
      },
      selectionSegment: Wi(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}
class fC {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, n = z.CancellationToken.None) {
    const r = [], i = e.parseResult.value;
    for (const s of hn(i))
      await Ee(n), Wf(s).filter((a) => !_i(a)).forEach((a) => {
        const o = this.createDescription(a);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const n = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!n || !r)
      return;
    const i = At(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: n.documentUri,
      targetPath: n.path,
      segment: Wi(r),
      local: kt.equals(n.documentUri, i)
    };
  }
}
class dC {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const n = this.getAstNodePath(e.$container), r = this.getPathSegment(e);
      return n + this.segmentSeparator + r;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: n }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return n !== void 0 ? e + this.indexSeparator + n : e;
  }
  getAstNode(e, n) {
    return n.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0)
        return i;
      const a = s.indexOf(this.indexSeparator);
      if (a > 0) {
        const o = s.substring(0, a), l = parseInt(s.substring(a + 1)), u = i[o];
        return u?.[l];
      }
      return i[s];
    }, e);
  }
}
var hC = ep();
class pC {
  constructor(e) {
    this._ready = new Al(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new hC.Emitter(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var n, r;
    this.workspaceConfig = (r = (n = e.capabilities.workspace) === null || n === void 0 ? void 0 : n.configuration) !== null && r !== void 0 ? r : !1;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const n = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: n.map((r) => this.toSectionName(r.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const n = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), r = await e.fetchConfiguration(n);
        n.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, r[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((n) => {
      const r = e.settings[n];
      this.updateSectionConfiguration(n, r), this.onConfigurationSectionUpdateEmitter.fire({ section: n, configuration: r });
    });
  }
  updateSectionConfiguration(e, n) {
    this.settings[e] = n;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, n) {
    await this.ready;
    const r = this.toSectionName(e);
    if (this.settings[r])
      return this.settings[r][n];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}
var Lr;
(function(t) {
  function e(n) {
    return {
      dispose: async () => await n()
    };
  }
  t.create = e;
})(Lr || (Lr = {}));
class mC {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new gs(), this.documentPhaseListeners = new gs(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = H.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, n = {}, r = z.CancellationToken.None) {
    var i, s;
    for (const a of e) {
      const o = a.uri.toString();
      if (a.state === H.Validated) {
        if (typeof n.validation == "boolean" && n.validation)
          a.state = H.IndexedReferences, a.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof n.validation == "object") {
          const l = this.buildState.get(o), u = (i = l?.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            const f = ((s = n.validation.categories) !== null && s !== void 0 ? s : ys.all).filter((d) => !u.includes(d));
            f.length > 0 && (this.buildState.set(o, {
              completed: !1,
              options: {
                validation: Object.assign(Object.assign({}, n.validation), { categories: f })
              },
              result: l.result
            }), a.state = H.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = H.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, n, r);
  }
  async update(e, n, r = z.CancellationToken.None) {
    this.currentState = H.Changed;
    for (const a of n)
      this.langiumDocuments.deleteDocument(a), this.buildState.delete(a.toString()), this.indexManager.remove(a);
    for (const a of e) {
      if (!this.langiumDocuments.invalidateDocument(a)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a);
        l.state = H.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a.toString());
    }
    const i = ie(e).concat(n).map((a) => a.toString()).toSet();
    this.langiumDocuments.all.filter((a) => !i.has(a.uri.toString()) && this.shouldRelink(a, i)).forEach((a) => {
      this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a), a.state = Math.min(a.state, H.ComputedScopes), a.diagnostics = void 0;
    }), await this.emitUpdate(e, n), await Ee(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a) => {
      var o;
      return a.state < H.Linked || !(!((o = this.buildState.get(a.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, r);
  }
  async emitUpdate(e, n) {
    await Promise.all(this.updateListeners.map((r) => r(e, n)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let n = 0, r = e.length - 1;
    for (; n < r; ) {
      for (; n < e.length && this.hasTextDocument(e[n]); )
        n++;
      for (; r >= 0 && !this.hasTextDocument(e[r]); )
        r--;
      n < r && ([e[n], e[r]] = [e[r], e[n]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var n;
    return !!(!((n = this.textDocuments) === null || n === void 0) && n.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, n) {
    return e.references.some((r) => r.error !== void 0) ? !0 : this.indexManager.isAffected(e, n);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), Lr.create(() => {
      const n = this.updateListeners.indexOf(e);
      n >= 0 && this.updateListeners.splice(n, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, n, r) {
    this.prepareBuild(e, n), await this.runCancelable(e, H.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, H.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, H.ComputedScopes, r, async (s) => {
      const a = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a.computeLocalScopes(s, r);
    }), await this.runCancelable(e, H.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, H.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, H.Validated, r, (s) => this.validate(s, r));
    for (const s of e) {
      const a = this.buildState.get(s.uri.toString());
      a && (a.completed = !0);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, n) {
    for (const r of e) {
      const i = r.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: !1,
        options: n,
        result: s?.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, n, r, i) {
    const s = e.filter((o) => o.state < n);
    for (const o of s)
      await Ee(r), await i(o), o.state = n, await this.notifyDocumentPhase(o, n, r);
    const a = e.filter((o) => o.state === n);
    await this.notifyBuildPhase(a, n, r), this.currentState = n;
  }
  onBuildPhase(e, n) {
    return this.buildPhaseListeners.add(e, n), Lr.create(() => {
      this.buildPhaseListeners.delete(e, n);
    });
  }
  onDocumentPhase(e, n) {
    return this.documentPhaseListeners.add(e, n), Lr.create(() => {
      this.documentPhaseListeners.delete(e, n);
    });
  }
  waitUntil(e, n, r) {
    let i;
    if (n && "path" in n ? i = n : r = n, r ?? (r = z.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(ms) : new Promise((s, a) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const u = this.langiumDocuments.getDocument(i);
          s(u?.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a(ms);
      });
    });
  }
  async notifyDocumentPhase(e, n, r) {
    const s = this.documentPhaseListeners.get(n).slice();
    for (const a of s)
      try {
        await a(e, r);
      } catch (o) {
        if (!Zs(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, n, r) {
    if (e.length === 0)
      return;
    const s = this.buildPhaseListeners.get(n).slice();
    for (const a of s)
      await Ee(r), await a(e, r);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, n) {
    var r, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a = this.getBuildOptions(e).validation, o = typeof a == "object" ? a : void 0, l = await s.validateDocument(e, o, n);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const u = this.buildState.get(e.uri.toString());
    if (u) {
      (r = u.result) !== null && r !== void 0 || (u.result = {});
      const c = (i = o?.categories) !== null && i !== void 0 ? i : ys.all;
      u.result.validationChecks ? u.result.validationChecks.push(...c) : u.result.validationChecks = [...c];
    }
  }
  getBuildOptions(e) {
    var n, r;
    return (r = (n = this.buildState.get(e.uri.toString())) === null || n === void 0 ? void 0 : n.options) !== null && r !== void 0 ? r : {};
  }
}
class gC {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new eC(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, n) {
    const r = At(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a) => {
        kt.equals(a.targetUri, r) && a.targetPath === n && i.push(a);
      });
    }), ie(i);
  }
  allElements(e, n) {
    let r = ie(this.symbolIndex.keys());
    return n && (r = r.filter((i) => !n || n.has(i))), r.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, n) {
    var r;
    return n ? this.symbolByTypeIndex.get(e, n, () => {
      var s;
      return ((s = this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((o) => this.astReflection.isSubtype(o.type, n));
    }) : (r = this.symbolIndex.get(e)) !== null && r !== void 0 ? r : [];
  }
  remove(e) {
    const n = e.toString();
    this.symbolIndex.delete(n), this.symbolByTypeIndex.clear(n), this.referenceIndex.delete(n);
  }
  async updateContent(e, n = z.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, n), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, n = z.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, n);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, n) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && n.has(i.targetUri.toString())) : !1;
  }
}
class yC {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Al(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var n;
    this.folders = (n = e.workspaceFolders) !== null && n !== void 0 ? n : void 0;
  }
  initialized(e) {
    return this.mutex.write((n) => {
      var r;
      return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], n);
    });
  }
  async initializeWorkspace(e, n = z.CancellationToken.None) {
    const r = await this.performStartup(e);
    await Ee(n), await this.documentBuilder.build(r, this.initialBuildOptions, n);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const n = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), r = [], i = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, n, i))), this._ready.resolve(), r;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, n) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return Jt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, n, r, i) {
    const s = await this.fileSystemProvider.readDirectory(n);
    await Promise.all(s.map(async (a) => {
      if (this.includeEntry(e, a, r)) {
        if (a.isDirectory)
          await this.traverseFolder(e, a.uri, r, i);
        else if (a.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, n, r) {
    const i = kt.basename(n.uri);
    if (i.startsWith("."))
      return !1;
    if (n.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (n.isFile) {
      const s = kt.extname(n.uri);
      return r.includes(s);
    }
    return !1;
  }
}
class TC {
  buildUnexpectedCharactersMessage(e, n, r, i, s) {
    return to.buildUnexpectedCharactersMessage(e, n, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return to.buildUnableToPopLexerModeMessage(e);
  }
}
const vC = { mode: "full" };
class $C {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const n = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(n);
    const r = $f(n) ? Object.values(n) : n, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new he(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, n = vC) {
    var r, i, s;
    const a = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a.tokens,
      errors: a.errors,
      hidden: (r = a.groups.hidden) !== null && r !== void 0 ? r : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if ($f(e))
      return e;
    const n = sp(e) ? Object.values(e.modes).flat() : e, r = {};
    return n.forEach((i) => r[i.name] = i), r;
  }
}
function RC(t) {
  return Array.isArray(t) && (t.length === 0 || "name" in t[0]);
}
function sp(t) {
  return t && "modes" in t && "defaultMode" in t;
}
function $f(t) {
  return !RC(t) && !sp(t);
}
function AC(t, e, n) {
  let r, i;
  typeof t == "string" ? (i = e, r = n) : (i = t.range.start, r = e), i || (i = D.create(0, 0));
  const s = ap(t), a = El(r), o = SC({
    lines: s,
    position: i,
    options: a
  });
  return kC({
    index: 0,
    tokens: o,
    position: i
  });
}
function EC(t, e) {
  const n = El(e), r = ap(t);
  if (r.length === 0)
    return !1;
  const i = r[0], s = r[r.length - 1], a = n.start, o = n.end;
  return !!a?.exec(i) && !!o?.exec(s);
}
function ap(t) {
  let e = "";
  return typeof t == "string" ? e = t : e = t.text, e.split(ym);
}
const Rf = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, xC = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function SC(t) {
  var e, n, r;
  const i = [];
  let s = t.position.line, a = t.position.character;
  for (let o = 0; o < t.lines.length; o++) {
    const l = o === 0, u = o === t.lines.length - 1;
    let c = t.lines[o], f = 0;
    if (l && t.options.start) {
      const h = (e = t.options.start) === null || e === void 0 ? void 0 : e.exec(c);
      h && (f = h.index + h[0].length);
    } else {
      const h = (n = t.options.line) === null || n === void 0 ? void 0 : n.exec(c);
      h && (f = h.index + h[0].length);
    }
    if (u) {
      const h = (r = t.options.end) === null || r === void 0 ? void 0 : r.exec(c);
      h && (c = c.substring(0, h.index));
    }
    if (c = c.substring(0, CC(c)), _o(c, f) >= c.length) {
      if (i.length > 0) {
        const h = D.create(s, a);
        i.push({
          type: "break",
          content: "",
          range: P.create(h, h)
        });
      }
    } else {
      Rf.lastIndex = f;
      const h = Rf.exec(c);
      if (h) {
        const m = h[0], g = h[1], T = D.create(s, a + f), y = D.create(s, a + f + m.length);
        i.push({
          type: "tag",
          content: g,
          range: P.create(T, y)
        }), f += m.length, f = _o(c, f);
      }
      if (f < c.length) {
        const m = c.substring(f), g = Array.from(m.matchAll(xC));
        i.push(...IC(g, m, s, a + f));
      }
    }
    s++, a = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function IC(t, e, n, r) {
  const i = [];
  if (t.length === 0) {
    const s = D.create(n, r), a = D.create(n, r + e.length);
    i.push({
      type: "text",
      content: e,
      range: P.create(s, a)
    });
  } else {
    let s = 0;
    for (const o of t) {
      const l = o.index, u = e.substring(s, l);
      u.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: P.create(D.create(n, s + r), D.create(n, l + r))
      });
      let c = u.length + 1;
      const f = o[1];
      if (i.push({
        type: "inline-tag",
        content: f,
        range: P.create(D.create(n, s + c + r), D.create(n, s + c + f.length + r))
      }), c += f.length, o.length === 4) {
        c += o[2].length;
        const d = o[3];
        i.push({
          type: "text",
          content: d,
          range: P.create(D.create(n, s + c + r), D.create(n, s + c + d.length + r))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: P.create(D.create(n, s + c + r), D.create(n, s + c + r))
        });
      s = l + o[0].length;
    }
    const a = e.substring(s);
    a.length > 0 && i.push({
      type: "text",
      content: a,
      range: P.create(D.create(n, s + r), D.create(n, s + r + a.length))
    });
  }
  return i;
}
const wC = /\S/, _C = /\s*$/;
function _o(t, e) {
  const n = t.substring(e).match(wC);
  return n ? e + n.index : t.length;
}
function CC(t) {
  const e = t.match(_C);
  if (e && typeof e.index == "number")
    return e.index;
}
function kC(t) {
  var e, n, r, i;
  const s = D.create(t.position.line, t.position.character);
  if (t.tokens.length === 0)
    return new Af([], P.create(s, s));
  const a = [];
  for (; t.index < t.tokens.length; ) {
    const u = NC(t, a[a.length - 1]);
    u && a.push(u);
  }
  const o = (n = (e = a[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && n !== void 0 ? n : s, l = (i = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new Af(a, P.create(o, l));
}
function NC(t, e) {
  const n = t.tokens[t.index];
  if (n.type === "tag")
    return lp(t, !1);
  if (n.type === "text" || n.type === "inline-tag")
    return op(t);
  bC(n, e), t.index++;
}
function bC(t, e) {
  if (e) {
    const n = new cp("", t.range);
    "inlines" in e ? e.inlines.push(n) : e.content.inlines.push(n);
  }
}
function op(t) {
  let e = t.tokens[t.index];
  const n = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(OC(t)), r = e, e = t.tokens[t.index];
  return new Co(i, P.create(n.range.start, r.range.end));
}
function OC(t) {
  return t.tokens[t.index].type === "inline-tag" ? lp(t, !0) : up(t);
}
function lp(t, e) {
  const n = t.tokens[t.index++], r = n.content.substring(1), i = t.tokens[t.index];
  if (i?.type === "text")
    if (e) {
      const s = up(t);
      return new Ia(r, new Co([s], s.range), e, P.create(n.range.start, s.range.end));
    } else {
      const s = op(t);
      return new Ia(r, s, e, P.create(n.range.start, s.range.end));
    }
  else {
    const s = n.range;
    return new Ia(r, new Co([], s), e, s);
  }
}
function up(t) {
  const e = t.tokens[t.index++];
  return new cp(e.content, e.range);
}
function El(t) {
  if (!t)
    return El({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: n, line: r } = t;
  return {
    start: Sa(e, !0),
    end: Sa(n, !1),
    line: Sa(r, !0)
  };
}
function Sa(t, e) {
  if (typeof t == "string" || typeof t == "object") {
    const n = typeof t == "string" ? As(t) : t.source;
    return e ? new RegExp(`^\\s*${n}`) : new RegExp(`\\s*${n}\\s*$`);
  } else
    return t;
}
class Af {
  constructor(e, n) {
    this.elements = e, this.range = n;
  }
  getTag(e) {
    return this.getAllTags().find((n) => n.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((n) => n.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const n of this.elements)
      if (e.length === 0)
        e = n.toString();
      else {
        const r = n.toString();
        e += Ef(e) + r;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let n = "";
    for (const r of this.elements)
      if (n.length === 0)
        n = r.toMarkdown(e);
      else {
        const i = r.toMarkdown(e);
        n += Ef(n) + i;
      }
    return n.trim();
  }
}
class Ia {
  constructor(e, n, r, i) {
    this.name = e, this.content = n, this.inline = r, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const n = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${n}` : this.content.inlines.length > 1 && (e = `${e}
${n}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var n, r;
    return (r = (n = e?.renderTag) === null || n === void 0 ? void 0 : n.call(e, this)) !== null && r !== void 0 ? r : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const n = this.content.toMarkdown(e);
    if (this.inline) {
      const s = LC(this.name, n, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let r = "";
    e?.tag === "italic" || e?.tag === void 0 ? r = "*" : e?.tag === "bold" ? r = "**" : e?.tag === "bold-italic" && (r = "***");
    let i = `${r}@${this.name}${r}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${n}` : this.content.inlines.length > 1 && (i = `${i}
${n}`), this.inline ? `{${i}}` : i;
  }
}
function LC(t, e, n) {
  var r, i;
  if (t === "linkplain" || t === "linkcode" || t === "link") {
    const s = e.indexOf(" ");
    let a = e;
    if (s > 0) {
      const l = _o(e, s);
      a = e.substring(l), e = e.substring(0, s);
    }
    return (t === "linkcode" || t === "link" && n.link === "code") && (a = `\`${a}\``), (i = (r = n.renderLink) === null || r === void 0 ? void 0 : r.call(n, e, a)) !== null && i !== void 0 ? i : PC(e, a);
  }
}
function PC(t, e) {
  try {
    return Jt.parse(t, !0), `[${e}](${t})`;
  } catch {
    return t;
  }
}
class Co {
  constructor(e, n) {
    this.inlines = e, this.range = n;
  }
  toString() {
    let e = "";
    for (let n = 0; n < this.inlines.length; n++) {
      const r = this.inlines[n], i = this.inlines[n + 1];
      e += r.toString(), i && i.range.start.line > r.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let n = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const i = this.inlines[r], s = this.inlines[r + 1];
      n += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (n += `
`);
    }
    return n;
  }
}
class cp {
  constructor(e, n) {
    this.text = e, this.range = n;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}
function Ef(t) {
  return t.endsWith(`
`) ? `
` : `

`;
}
class MC {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const n = this.commentProvider.getComment(e);
    if (n && EC(n))
      return AC(n).toMarkdown({
        renderLink: (i, s) => this.documentationLinkRenderer(e, i, s),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, n, r) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, n)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, n);
    if (s && s.nameSegment) {
      const a = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a},${o}` });
      return `[${r}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, n) {
  }
  findNameInPrecomputedScopes(e, n) {
    const i = At(e).precomputedScopes;
    if (!i)
      return;
    let s = e;
    do {
      const o = i.get(s).find((l) => l.name === n);
      if (o)
        return o;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, n) {
    return this.indexManager.allElements().find((i) => i.name === n);
  }
}
class DC {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var n;
    return rC(e) ? e.$comment : (n = Vp(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || n === void 0 ? void 0 : n.text;
  }
}
class FC {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, n) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class GC {
  constructor() {
    this.previousTokenSource = new z.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const n = K_();
    return this.previousTokenSource = n, this.enqueue(this.writeQueue, e, n.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, n, r = z.CancellationToken.None) {
    const i = new Al(), s = {
      action: n,
      deferred: i,
      cancellationToken: r
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = !1, await Promise.all(e.map(async ({ action: n, deferred: r, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => n(i));
        r.resolve(s);
      } catch (s) {
        Zs(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class UC {
  constructor(e) {
    this.grammarElementIdMap = new yf(), this.tokenTypeIdMap = new yf(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((n) => Object.assign(Object.assign({}, n), { message: n.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i of hn(e))
      n.set(i, {});
    if (e.$cstNode)
      for (const i of Fa(e.$cstNode))
        r.set(i, {});
    return {
      astNodes: n,
      cstNodes: r
    };
  }
  dehydrateAstNode(e, n) {
    const r = n.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, n));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ue(o) ? a.push(this.dehydrateAstNode(o, n)) : ze(o) ? a.push(this.dehydrateReference(o, n)) : a.push(o);
        } else ue(s) ? r[i] = this.dehydrateAstNode(s, n) : ze(s) ? r[i] = this.dehydrateReference(s, n) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, n) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = n.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, n) {
    const r = n.cstNodes.get(e);
    return Df(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = n.astNodes.get(e.astNode), Pr(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, n)) : Mf(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
  }
  hydrate(e) {
    const n = e.value, r = this.createHydrationContext(n);
    return "$cstNode" in n && this.hydrateCstNode(n.$cstNode, r), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(n, r)
    };
  }
  createHydrationContext(e) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const s of hn(e))
      n.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of Fa(e.$cstNode)) {
        let a;
        "fullText" in s ? (a = new Kh(s.fullText), i = a) : "content" in s ? a = new $l() : "tokenType" in s && (a = this.hydrateCstLeafNode(s)), a && (r.set(s, a), a.root = i);
      }
    return {
      astNodes: n,
      cstNodes: r
    };
  }
  hydrateAstNode(e, n) {
    const r = n.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode && (r.$cstNode = n.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ue(o) ? a.push(this.setParent(this.hydrateAstNode(o, n), r)) : ze(o) ? a.push(this.hydrateReference(o, r, i, n)) : a.push(o);
        } else ue(s) ? r[i] = this.setParent(this.hydrateAstNode(s, n), r) : ze(s) ? r[i] = this.hydrateReference(s, r, i, n) : s !== void 0 && (r[i] = s);
    return r;
  }
  setParent(e, n) {
    return e.$container = n, e;
  }
  hydrateReference(e, n, r, i) {
    return this.linker.buildReference(n, r, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, n, r = 0) {
    const i = n.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = n.astNodes.get(e.astNode), Pr(i))
      for (const s of e.content) {
        const a = this.hydrateCstNode(s, n, r++);
        i.content.push(a);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const n = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a = e.startColumn, o = e.endLine, l = e.endColumn, u = e.hidden;
    return new Eo(r, i, {
      start: {
        line: s,
        character: a
      },
      end: {
        line: o,
        character: l
      }
    }, n, u);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const n of hn(this.grammar))
      Yp(n) && this.grammarElementIdMap.set(n, e++);
  }
}
function Pt(t) {
  return {
    documentation: {
      CommentProvider: (e) => new DC(e),
      DocumentationProvider: (e) => new MC(e)
    },
    parser: {
      AsyncParser: (e) => new FC(e),
      GrammarConfig: (e) => Um(e),
      LangiumParser: (e) => D_(e),
      CompletionParser: (e) => M_(e),
      ValueConverter: () => new Zh(),
      TokenBuilder: () => new Jh(),
      Lexer: (e) => new $C(e),
      ParserErrorMessageProvider: () => new zh(),
      LexerErrorMessageProvider: () => new TC()
    },
    workspace: {
      AstNodeLocator: () => new dC(),
      AstNodeDescriptionProvider: (e) => new cC(e),
      ReferenceDescriptionProvider: (e) => new fC(e)
    },
    references: {
      Linker: (e) => new V_(e),
      NameProvider: () => new Y_(),
      ScopeProvider: (e) => new nC(e),
      ScopeComputation: (e) => new J_(e),
      References: (e) => new X_(e)
    },
    serializer: {
      Hydrator: (e) => new UC(e),
      JsonSerializer: (e) => new iC(e)
    },
    validation: {
      DocumentValidator: (e) => new oC(e),
      ValidationRegistry: (e) => new aC(e)
    },
    shared: () => t.shared
  };
}
function Mt(t) {
  return {
    ServiceRegistry: (e) => new sC(e),
    workspace: {
      LangiumDocuments: (e) => new z_(e),
      LangiumDocumentFactory: (e) => new W_(e),
      DocumentBuilder: (e) => new mC(e),
      IndexManager: (e) => new gC(e),
      WorkspaceManager: (e) => new yC(e),
      FileSystemProvider: (e) => t.fileSystemProvider(e),
      WorkspaceLock: () => new GC(),
      ConfigurationProvider: (e) => new pC(e)
    }
  };
}
var xf;
(function(t) {
  t.merge = (e, n) => Ts(Ts({}, e), n);
})(xf || (xf = {}));
function ce(t, e, n, r, i, s, a, o, l) {
  const u = [t, e, n, r, i, s, a, o, l].reduce(Ts, {});
  return fp(u);
}
const BC = /* @__PURE__ */ Symbol("isProxy");
function fp(t, e) {
  const n = new Proxy({}, {
    deleteProperty: () => !1,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === BC ? !0 : If(r, i, t, e || n),
    getOwnPropertyDescriptor: (r, i) => (If(r, i, t, e || n), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in t,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(t)]
    // used by for..in
  });
  return n;
}
const Sf = /* @__PURE__ */ Symbol();
function If(t, e, n, r) {
  if (e in t) {
    if (t[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: t[e] });
    if (t[e] === Sf)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return t[e];
  } else if (e in n) {
    const i = n[e];
    t[e] = Sf;
    try {
      t[e] = typeof i == "function" ? i(r) : fp(i, r);
    } catch (s) {
      throw t[e] = s instanceof Error ? s : void 0, s;
    }
    return t[e];
  } else
    return;
}
function Ts(t, e) {
  if (e) {
    for (const [n, r] of Object.entries(e))
      if (r !== void 0) {
        const i = t[n];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? t[n] = Ts(i, r) : t[n] = r;
      }
  }
  return t;
}
class jC {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}
const Dt = {
  fileSystemProvider: () => new jC()
}, KC = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, HC = {
  AstReflection: () => new Hf()
};
function WC() {
  const t = ce(Mt(Dt), HC), e = ce(Pt({ shared: t }), KC);
  return t.ServiceRegistry.register(e), e;
}
function on(t) {
  var e;
  const n = WC(), r = n.serializer.JsonSerializer.deserialize(t);
  return n.shared.workspace.LangiumDocumentFactory.fromModel(r, Jt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var zC = Object.defineProperty, A = (t, e) => zC(t, "name", { value: e, configurable: !0 }), wf = "Statement", Di = "Architecture";
function VC(t) {
  return Ke.isInstance(t, Di);
}
A(VC, "isArchitecture");
var Ri = "Axis", _r = "Branch";
function qC(t) {
  return Ke.isInstance(t, _r);
}
A(qC, "isBranch");
var Ai = "Checkout", Ei = "CherryPicking", wa = "ClassDefStatement", Cr = "Commit";
function YC(t) {
  return Ke.isInstance(t, Cr);
}
A(YC, "isCommit");
var _a = "Curve", Ca = "Edge", ka = "Entry", kr = "GitGraph";
function XC(t) {
  return Ke.isInstance(t, kr);
}
A(XC, "isGitGraph");
var Na = "Group", Fi = "Info";
function JC(t) {
  return Ke.isInstance(t, Fi);
}
A(JC, "isInfo");
var xi = "Item", ba = "Junction", Nr = "Merge";
function ZC(t) {
  return Ke.isInstance(t, Nr);
}
A(ZC, "isMerge");
var Oa = "Option", Gi = "Packet";
function QC(t) {
  return Ke.isInstance(t, Gi);
}
A(QC, "isPacket");
var Ui = "PacketBlock";
function ek(t) {
  return Ke.isInstance(t, Ui);
}
A(ek, "isPacketBlock");
var Bi = "Pie";
function tk(t) {
  return Ke.isInstance(t, Bi);
}
A(tk, "isPie");
var ji = "PieSection";
function nk(t) {
  return Ke.isInstance(t, ji);
}
A(nk, "isPieSection");
var La = "Radar", Pa = "Service", Ki = "Treemap";
function rk(t) {
  return Ke.isInstance(t, Ki);
}
A(rk, "isTreemap");
var Ma = "TreemapRow", Si = "Direction", Ii = "Leaf", wi = "Section", gn, dp = (gn = class extends Pf {
  getAllTypes() {
    return [Di, Ri, _r, Ai, Ei, wa, Cr, _a, Si, Ca, ka, kr, Na, Fi, xi, ba, Ii, Nr, Oa, Gi, Ui, Bi, ji, La, wi, Pa, wf, Ki, Ma];
  }
  computeIsSubtype(e, n) {
    switch (e) {
      case _r:
      case Ai:
      case Ei:
      case Cr:
      case Nr:
        return this.isSubtype(wf, n);
      case Si:
        return this.isSubtype(kr, n);
      case Ii:
      case wi:
        return this.isSubtype(xi, n);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const n = `${e.container.$type}:${e.property}`;
    if (n === "Entry:axis")
      return Ri;
    throw new Error(`${n} is not a valid reference id.`);
  }
  getTypeMetaData(e) {
    switch (e) {
      case Di:
        return {
          name: Di,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ri:
        return {
          name: Ri,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case _r:
        return {
          name: _r,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case Ai:
        return {
          name: Ai,
          properties: [
            { name: "branch" }
          ]
        };
      case Ei:
        return {
          name: Ei,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case wa:
        return {
          name: wa,
          properties: [
            { name: "className" },
            { name: "styleText" }
          ]
        };
      case Cr:
        return {
          name: Cr,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case _a:
        return {
          name: _a,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case Ca:
        return {
          name: Ca,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: !1 },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: !1 },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: !1 },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case ka:
        return {
          name: ka,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case kr:
        return {
          name: kr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Na:
        return {
          name: Na,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Fi:
        return {
          name: Fi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case xi:
        return {
          name: xi,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      case ba:
        return {
          name: ba,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case Nr:
        return {
          name: Nr,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case Oa:
        return {
          name: Oa,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: !1 }
          ]
        };
      case Gi:
        return {
          name: Gi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ui:
        return {
          name: Ui,
          properties: [
            { name: "bits" },
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Bi:
        return {
          name: Bi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case ji:
        return {
          name: ji,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case La:
        return {
          name: La,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Pa:
        return {
          name: Pa,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Ki:
        return {
          name: Ki,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" },
            { name: "TreemapRows", defaultValue: [] }
          ]
        };
      case Ma:
        return {
          name: Ma,
          properties: [
            { name: "indent" },
            { name: "item" }
          ]
        };
      case Si:
        return {
          name: Si,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ii:
        return {
          name: Ii,
          properties: [
            { name: "classSelector" },
            { name: "name" },
            { name: "value" }
          ]
        };
      case wi:
        return {
          name: wi,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}, A(gn, "MermaidAstReflection"), gn), Ke = new dp(), _f, ik = /* @__PURE__ */ A(() => _f ?? (_f = on(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar"), Cf, sk = /* @__PURE__ */ A(() => Cf ?? (Cf = on(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), kf, ak = /* @__PURE__ */ A(() => kf ?? (kf = on(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar"), Nf, ok = /* @__PURE__ */ A(() => Nf ?? (Nf = on(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar"), bf, lk = /* @__PURE__ */ A(() => bf ?? (bf = on(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), Of, uk = /* @__PURE__ */ A(() => Of ?? (Of = on(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Lf, ck = /* @__PURE__ */ A(() => Lf ?? (Lf = on(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar"), fk = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, dk = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, hk = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, pk = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, mk = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, gk = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, yk = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ln = {
  AstReflection: /* @__PURE__ */ A(() => new dp(), "AstReflection")
}, Tk = {
  Grammar: /* @__PURE__ */ A(() => ik(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => fk, "LanguageMetaData"),
  parser: {}
}, vk = {
  Grammar: /* @__PURE__ */ A(() => sk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => dk, "LanguageMetaData"),
  parser: {}
}, $k = {
  Grammar: /* @__PURE__ */ A(() => ak(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => hk, "LanguageMetaData"),
  parser: {}
}, Rk = {
  Grammar: /* @__PURE__ */ A(() => ok(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => pk, "LanguageMetaData"),
  parser: {}
}, Ak = {
  Grammar: /* @__PURE__ */ A(() => lk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => mk, "LanguageMetaData"),
  parser: {}
}, Ek = {
  Grammar: /* @__PURE__ */ A(() => uk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => gk, "LanguageMetaData"),
  parser: {}
}, xk = {
  Grammar: /* @__PURE__ */ A(() => ck(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => yk, "LanguageMetaData"),
  parser: {}
}, Sk = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Ik = /accTitle[\t ]*:([^\n\r]*)/, wk = /title([\t ][^\n\r]*|)/, _k = {
  ACC_DESCR: Sk,
  ACC_TITLE: Ik,
  TITLE: wk
}, yn, Qs = (yn = class extends Zh {
  runConverter(e, n, r) {
    let i = this.runCommonConverter(e, n, r);
    return i === void 0 && (i = this.runCustomConverter(e, n, r)), i === void 0 ? super.runConverter(e, n, r) : i;
  }
  runCommonConverter(e, n, r) {
    const i = _k[e.name];
    if (i === void 0)
      return;
    const s = i.exec(n);
    if (s !== null) {
      if (s[1] !== void 0)
        return s[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (s[2] !== void 0)
        return s[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, A(yn, "AbstractMermaidValueConverter"), yn), Tn, ea = (Tn = class extends Qs {
  runCustomConverter(e, n, r) {
  }
}, A(Tn, "CommonValueConverter"), Tn), vn, Ft = (vn = class extends Jh {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, n, r) {
    const i = super.buildKeywordTokens(e, n, r);
    return i.forEach((s) => {
      this.keywords.has(s.name) && s.PATTERN !== void 0 && (s.PATTERN = new RegExp(s.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, A(vn, "AbstractMermaidTokenBuilder"), vn), $n;
$n = class extends Ft {
}, A($n, "CommonTokenBuilder");
var Rn, Ck = (Rn = class extends Ft {
  constructor() {
    super(["gitGraph"]);
  }
}, A(Rn, "GitGraphTokenBuilder"), Rn), hp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Ck(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ea(), "ValueConverter")
  }
};
function pp(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    Ak,
    hp
  );
  return e.ServiceRegistry.register(n), { shared: e, GitGraph: n };
}
A(pp, "createGitGraphServices");
var An, kk = (An = class extends Ft {
  constructor() {
    super(["info", "showInfo"]);
  }
}, A(An, "InfoTokenBuilder"), An), mp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new kk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ea(), "ValueConverter")
  }
};
function gp(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    Tk,
    mp
  );
  return e.ServiceRegistry.register(n), { shared: e, Info: n };
}
A(gp, "createInfoServices");
var En, Nk = (En = class extends Ft {
  constructor() {
    super(["packet"]);
  }
}, A(En, "PacketTokenBuilder"), En), yp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Nk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ea(), "ValueConverter")
  }
};
function Tp(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    vk,
    yp
  );
  return e.ServiceRegistry.register(n), { shared: e, Packet: n };
}
A(Tp, "createPacketServices");
var xn, bk = (xn = class extends Ft {
  constructor() {
    super(["pie", "showData"]);
  }
}, A(xn, "PieTokenBuilder"), xn), Sn, Ok = (Sn = class extends Qs {
  runCustomConverter(e, n, r) {
    if (e.name === "PIE_SECTION_LABEL")
      return n.replace(/"/g, "").trim();
  }
}, A(Sn, "PieValueConverter"), Sn), vp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new bk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Ok(), "ValueConverter")
  }
};
function $p(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    $k,
    vp
  );
  return e.ServiceRegistry.register(n), { shared: e, Pie: n };
}
A($p, "createPieServices");
var In, Lk = (In = class extends Ft {
  constructor() {
    super(["architecture"]);
  }
}, A(In, "ArchitectureTokenBuilder"), In), wn, Pk = (wn = class extends Qs {
  runCustomConverter(e, n, r) {
    if (e.name === "ARCH_ICON")
      return n.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return n.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE")
      return n.replace(/[[\]]/g, "").trim();
  }
}, A(wn, "ArchitectureValueConverter"), wn), Rp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Lk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Pk(), "ValueConverter")
  }
};
function Ap(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    Rk,
    Rp
  );
  return e.ServiceRegistry.register(n), { shared: e, Architecture: n };
}
A(Ap, "createArchitectureServices");
var _n, Mk = (_n = class extends Ft {
  constructor() {
    super(["radar-beta"]);
  }
}, A(_n, "RadarTokenBuilder"), _n), Ep = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Mk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ea(), "ValueConverter")
  }
};
function xp(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    Ek,
    Ep
  );
  return e.ServiceRegistry.register(n), { shared: e, Radar: n };
}
A(xp, "createRadarServices");
var Cn, Dk = (Cn = class extends Ft {
  constructor() {
    super(["treemap"]);
  }
}, A(Cn, "TreemapTokenBuilder"), Cn), Fk = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, kn, Gk = (kn = class extends Qs {
  runCustomConverter(e, n, r) {
    if (e.name === "NUMBER2")
      return parseFloat(n.replace(/,/g, ""));
    if (e.name === "SEPARATOR")
      return n.substring(1, n.length - 1);
    if (e.name === "STRING2")
      return n.substring(1, n.length - 1);
    if (e.name === "INDENTATION")
      return n.length;
    if (e.name === "ClassDef") {
      if (typeof n != "string")
        return n;
      const i = Fk.exec(n);
      if (i)
        return {
          $type: "ClassDefStatement",
          className: i[1],
          styleText: i[2] || void 0
        };
    }
  }
}, A(kn, "TreemapValueConverter"), kn);
function Sp(t) {
  const e = t.validation.TreemapValidator, n = t.validation.ValidationRegistry;
  if (n) {
    const r = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    n.register(r, e);
  }
}
A(Sp, "registerValidationChecks");
var Nn, Uk = (Nn = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(e, n) {
    let r;
    for (const i of e.TreemapRows)
      i.item && (r === void 0 && // Check if this is a root node (no indentation)
      i.indent === void 0 ? r = 0 : i.indent === void 0 ? n("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }) : r !== void 0 && r >= parseInt(i.indent, 10) && n("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }));
  }
}, A(Nn, "TreemapValidator"), Nn), Ip = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Dk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Gk(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ A(() => new Uk(), "TreemapValidator")
  }
};
function wp(t = Dt) {
  const e = ce(
    Mt(t),
    ln
  ), n = ce(
    Pt({ shared: e }),
    xk,
    Ip
  );
  return e.ServiceRegistry.register(n), Sp(n), { shared: e, Treemap: n };
}
A(wp, "createTreemapServices");
var it = {}, Bk = {
  info: /* @__PURE__ */ A(async () => {
    const { createInfoServices: t } = await Promise.resolve().then(() => Hk), e = t().Info.parser.LangiumParser;
    it.info = e;
  }, "info"),
  packet: /* @__PURE__ */ A(async () => {
    const { createPacketServices: t } = await Promise.resolve().then(() => Wk), e = t().Packet.parser.LangiumParser;
    it.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ A(async () => {
    const { createPieServices: t } = await Promise.resolve().then(() => zk), e = t().Pie.parser.LangiumParser;
    it.pie = e;
  }, "pie"),
  architecture: /* @__PURE__ */ A(async () => {
    const { createArchitectureServices: t } = await Promise.resolve().then(() => Vk), e = t().Architecture.parser.LangiumParser;
    it.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ A(async () => {
    const { createGitGraphServices: t } = await Promise.resolve().then(() => qk), e = t().GitGraph.parser.LangiumParser;
    it.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ A(async () => {
    const { createRadarServices: t } = await Promise.resolve().then(() => Yk), e = t().Radar.parser.LangiumParser;
    it.radar = e;
  }, "radar"),
  treemap: /* @__PURE__ */ A(async () => {
    const { createTreemapServices: t } = await Promise.resolve().then(() => Xk), e = t().Treemap.parser.LangiumParser;
    it.treemap = e;
  }, "treemap")
};
async function jk(t, e) {
  const n = Bk[t];
  if (!n)
    throw new Error(`Unknown diagram type: ${t}`);
  it[t] || await n();
  const i = it[t].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new Kk(i);
  return i.value;
}
A(jk, "parse");
var bn, Kk = (bn = class extends Error {
  constructor(e) {
    const n = e.lexerErrors.map((i) => i.message).join(`
`), r = e.parserErrors.map((i) => i.message).join(`
`);
    super(`Parsing failed: ${n} ${r}`), this.result = e;
  }
}, A(bn, "MermaidParseError"), bn);
const Hk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: mp,
  createInfoServices: gp
}, Symbol.toStringTag, { value: "Module" })), Wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: yp,
  createPacketServices: Tp
}, Symbol.toStringTag, { value: "Module" })), zk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: vp,
  createPieServices: $p
}, Symbol.toStringTag, { value: "Module" })), Vk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: Rp,
  createArchitectureServices: Ap
}, Symbol.toStringTag, { value: "Module" })), qk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: hp,
  createGitGraphServices: pp
}, Symbol.toStringTag, { value: "Module" })), Yk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: Ep,
  createRadarServices: xp
}, Symbol.toStringTag, { value: "Module" })), Xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreemapModule: Ip,
  createTreemapServices: wp
}, Symbol.toStringTag, { value: "Module" }));
export {
  jk as p
};
