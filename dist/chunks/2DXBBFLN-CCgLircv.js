var st = Object.defineProperty;
var ct = (e, t, n) => t in e ? st(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => ct(e, typeof t != "symbol" ? t + "" : t, n);
import { p as pt, h as ut } from "./DKTLEL5E-BCFlW8pF.js";
import { x as ft, D as dt, Y as ht, z as $t, U as mt, H as xt, G as gt, O as yt, P as bt } from "./VMV7XPHP-EL-PB13G.js";
import { _ as kt, y as qe, x as l, b as J, f as Et, $ as wt, p as vt, a as Ie } from "./RZSVICHU-DoNHkG46.js";
import { x as Mt, H as At, $ as Rt } from "./lazy-CehDEl4q.js";
function Ke(e) {
  return e === 32 || e >= 9 && e <= 13 || e > 127 && /\s/.test(String.fromCharCode(e));
}
function _t() {
  let e = 1 / 0;
  return (t, n) => {
    if (!t.startsWith("accDescr", n)) return -1;
    let r = t.length, a = n + 8;
    for (; a < r && (t.charCodeAt(a) === 32 || t.charCodeAt(a) === 9); ) a++;
    if (t.charCodeAt(a) === 58) {
      for (a++; a < r; a++) {
        let i = t.charCodeAt(a);
        if (i === 10 || i === 13 || i === 37 && t.charCodeAt(a + 1) === 37) break;
      }
      return a;
    }
    for (; a < r && Ke(t.charCodeAt(a)); ) a++;
    if (t.charCodeAt(a) !== 123 || a >= e) return -1;
    let o = t.indexOf("}", a + 1);
    return o === -1 && (e = a), o + 1 || -1;
  };
}
var Xe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", le = { name: "TITLE", pattern: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/y, first: "t" }, oe = { name: "ACC_TITLE", pattern: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/y, first: "a" }, se = { name: "ACC_DESCR", pattern: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/y, first: "a", scanner: _t };
function s(e, t) {
  return { name: e, pattern: e, longer: t };
}
function ce(e, t) {
  return { ...xt(e), longer: [t] };
}
function Re(e) {
  return { name: e, pattern: /[A-Z_a-z][\w-]*/y, first: Xe + "_" };
}
function _e(e) {
  return { name: e, pattern: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/y, first: `"'` };
}
function pe(e) {
  return [{ name: e + "_WHITESPACE", pattern: /[\t \r\n]+/y, hidden: !0, first: `	 \r
` }, { ...gt, name: e + "_YAML", first: "-" }, { ...yt, name: e + "_DIRECTIVE", first: "	 %" }, { ...bt, name: e + "_SINGLE_LINE_COMMENT", first: "	 %" }];
}
function j(e) {
  if (!e.includes("\\")) return e.slice(1, -1);
  let t = e.length - 1, n = "";
  for (let r = 1; r < t; r++) {
    let a = e[r];
    a === "\\" && r + 1 < t ? (a = e[++r], n += a === "n" ? `
` : a === "r" ? "\r" : a === "t" ? "	" : a) : n += a;
  }
  return n;
}
function ue(e, t, n, r, a, o) {
  let i = new ft(dt(e, t, "railroad"), t, "railroad"), p = { $type: n, rules: [] };
  for (i.expect(0); ; ) {
    let c = i.kind;
    if (c === r) {
      let y = ht(i.take()), f = y[0];
      p.title = (f === '"' || f === "'") && y.endsWith(f) ? a(y) : y;
    } else if (c === r + 1) p.accTitle = $t(i.take());
    else if (c === r + 2) p.accDescr = mt(i.take());
    else break;
  }
  for (; i.kind !== -1; ) p.rules.push(o(i));
  return p;
}
var je = [];
function Me(e) {
  let t = e, n = t.element ?? t.primary ?? t.suffix, r = t.alternatives ?? t.elements ?? (n ? [n] : je);
  if (t.base) {
    r = [t.base];
    for (let a of t.postfixes) a.except && r.push(a.except);
  }
  return r;
}
var ee = (e) => ({ type: "terminal", value: e }), fe = (e) => ({ type: "nonterminal", name: e }), ae = (e) => ({ type: "special", text: e }), X = (e) => ({ type: "optional", element: e }), te = (e, t, n = 1 / 0) => ({ type: "repetition", element: e, min: t, max: n });
function de(e) {
  return e.length === 1 ? e[0] : { type: "sequence", elements: e };
}
function he(e) {
  return e.length === 1 ? e[0] : { type: "choice", alternatives: e };
}
function $e(e, t) {
  return e.rules.map((n) => ({ name: n.name, definition: Qe(n.definition, Me, t) }));
}
function Qe(e, t, n) {
  let r = [e], a = [t(e)], o = [[]];
  for (; ; ) {
    let i = r.length - 1, p = o[i];
    if (p.length < a[i].length) {
      let c = a[i][p.length];
      r.push(c), a.push(t(c)), o.push([]);
    } else {
      let c = n(r[i], p);
      if (i === 0) return c;
      r.pop(), a.pop(), o.pop(), o[i - 1].push(c);
    }
  }
}
var Ge = "0123456789", Fe = { name: "ABNF_RULENAME", pattern: /[A-Za-z][A-Za-z0-9-]*/y, first: Xe }, Le = { name: "ABNF_COMMENT", pattern: /;[^\n\r]*/y, hidden: !0, first: ";" }, Je = [ce("railroad-abnf-beta", Fe), s("="), s(";", [Le]), s("/"), s("("), s(")"), s("["), s("]"), le, oe, se, Fe, { name: "ABNF_STRING", pattern: /"[^"]*"/y, first: '"' }, { name: "ABNF_NUMVAL", pattern: /%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\.[0-9A-Fa-f]+)*/y, first: "%" }, { name: "ABNF_REPEAT", pattern: /[0-9]*\*[0-9]*/y, first: Ge + "*" }, { name: "ABNF_EXACT_REPEAT", pattern: /[0-9]+/y, first: Ge }, ...pe("ABNF"), Le];
function Be(e, t, n, r) {
  let a = { $type: "AbnfConcatenation", elements: [] };
  return t.alternatives.push(a), { alternation: t, concatenation: a, node: e, close: n, repeat: r };
}
function Pt(e) {
  let t = [], n = Be(void 0, { $type: "AbnfAlternation", alternatives: [] }, -2, void 0);
  for (; ; ) {
    let r = e.kind === 14 || e.kind === 15 ? e.take() : void 0, a, o = e.kind;
    switch (o) {
      case 12:
        a = { $type: "AbnfStringLiteral", value: e.take().slice(1, -1) };
        break;
      case 13:
        a = { $type: "AbnfNumVal", value: e.take() };
        break;
      case 11:
        a = { $type: "AbnfRuleName", name: e.take() };
        break;
      case 4:
      case 6: {
        e.i++;
        let i = { $type: "AbnfAlternation", alternatives: [] };
        t.push(n), n = Be({ $type: o === 4 ? "AbnfGroup" : "AbnfOptionalGroup", element: i }, i, o + 1, r);
        continue;
      }
      default:
        e.fail("a string, a number, a name, or an opening bracket");
    }
    for (; ; ) {
      n.concatenation.elements.push(r === void 0 ? { $type: "AbnfElement", primary: a } : { $type: "AbnfElement", repeat: r, primary: a });
      let i = e.kind;
      if (i === n.close) {
        e.i++, a = n.node, r = n.repeat, n = t.pop();
        continue;
      }
      if (i === 3) e.i++, n.concatenation = { $type: "AbnfConcatenation", elements: [] }, n.alternation.alternatives.push(n.concatenation);
      else if (i !== 12 && i !== 13 && i !== 11 && i !== 4 && i !== 6 && i !== 14 && i !== 15) {
        if (t.length === 0) return n.alternation;
        e.fail(`token of type '${Je[n.close].name}'`);
      }
      break;
    }
  }
}
function Ct(e) {
  return ue(e, Je, "RailroadAbnf", 8, (t) => t.slice(1, -1), (t) => {
    let n = t.expect(11);
    t.expect(1);
    let r = Pt(t);
    return t.expect(2), { $type: "AbnfRule", name: n, definition: r };
  });
}
function Nt(e, t) {
  switch (e.$type) {
    case "AbnfAlternation":
      return he(t);
    case "AbnfConcatenation":
      return de(t);
    case "AbnfElement": {
      let n = e.repeat;
      if (!n) return t[0];
      let r = n.indexOf("*"), a = r === -1, o = r > 0 || a ? parseInt(n, 10) : 0, i = a ? o : r < n.length - 1 ? parseInt(n.slice(r + 1), 10) : 1 / 0;
      return o === 0 && i === 1 ? X(t[0]) : te(t[0], o, i);
    }
    case "AbnfStringLiteral":
    case "AbnfNumVal":
      return ee(e.value);
    case "AbnfRuleName":
      return fe(e.name);
    case "AbnfGroup":
      return t[0];
    case "AbnfOptionalGroup":
      return X(t[0]);
  }
}
var Tt = (e) => $e(e, Nt);
function St(e, t) {
  if (e.charCodeAt(t) !== 63) return -1;
  let n = !1;
  for (let r = t + 1; r < e.length; r++) {
    let a = e.charCodeAt(r);
    if (a === 63) return n ? r + 1 : -1;
    if (a === 59) return -1;
    n || (n = !Ke(a));
  }
  return -1;
}
var ze = Re("EBNF_ID"), De = { name: "EBNF_SPECIAL_SEQUENCE", pattern: /\?(?=[^?;]*[^?\s;][^?;]*\?)[^?;]*\?/y, first: "?", scanner: () => St }, He = pe("EBNF"), Ve = { name: "EBNF_ISO_COMMENT", pattern: /\(\*[\s\S]*?\*\)/y, hidden: !0, first: "(", opener: /\(\*/y }, et = [ce("railroad-ebnf-beta", ze), s("::="), s("="), s(";"), s("|"), s(","), s("(", [Ve]), s(")"), s("["), s("]"), s("{"), s("}"), s("?", [De]), s("*"), s("+"), s("-", [He[1]]), le, oe, se, ze, _e("EBNF_STRING"), De, ...He, { name: "EBNF_BLOCK_COMMENT", pattern: /\/\*[\s\S]*?\*\//y, hidden: !0, first: "/", opener: /\/\*/y }, Ve];
function We(e, t, n, r) {
  let a = { $type: "EbnfSequence", elements: [] };
  return t.alternatives.push(a), { choice: t, sequence: a, term: void 0, node: e, close: n, except: r };
}
var Ot = ["EbnfGroup", "EbnfOptional", "EbnfRepetition"];
function qt(e) {
  let t = [], n = We(void 0, { $type: "EbnfChoice", alternatives: [] }, -2, !1), r = !1;
  for (; ; ) {
    let a, o = e.kind;
    switch (o) {
      case 20:
        a = { $type: "EbnfTerminal", value: j(e.take()) };
        break;
      case 19:
        a = { $type: "EbnfNonTerminal", name: e.take() };
        break;
      case 21:
        a = { $type: "EbnfSpecial", text: e.take().slice(1, -1).trim() };
        break;
      case 6:
      case 8:
      case 10: {
        e.i++;
        let i = { $type: "EbnfChoice", alternatives: [] };
        t.push(n), n = We({ $type: Ot[o - 6 >> 1], element: i }, i, o + 1, r), r = !1;
        continue;
      }
      default:
        e.fail("a terminal, a name, or an opening bracket");
    }
    for (; ; ) {
      r ? (n.term.postfixes.push({ $type: "EbnfExceptionPostfix", except: a }), r = !1) : (n.term = { $type: "EbnfTerm", base: a, postfixes: [] }, n.sequence.elements.push(n.term));
      let i = n.term.postfixes;
      for (; ; ) {
        let c = e.kind;
        if (c === 12) i.push({ $type: "EbnfOptionalPostfix", operator: e.take() });
        else if (c === 13) i.push({ $type: "EbnfZeroOrMorePostfix", operator: e.take() });
        else if (c === 14) i.push({ $type: "EbnfOneOrMorePostfix", operator: e.take() });
        else break;
      }
      let p = e.kind;
      if (p === n.close) {
        e.i++, a = n.node, r = n.except, n = t.pop();
        continue;
      }
      if (p === 15) e.i++, r = !0;
      else if (p === 5) e.i++;
      else if (p === 4) e.i++, n.sequence = { $type: "EbnfSequence", elements: [] }, n.choice.alternatives.push(n.sequence);
      else if (p !== 20 && p !== 19 && p !== 21 && p !== 6 && p !== 8 && p !== 10) {
        if (t.length === 0) return n.choice;
        e.fail(`token of type '${et[n.close].name}'`);
      }
      break;
    }
  }
}
function It(e) {
  return ue(e, et, "RailroadEbnf", 16, j, (t) => {
    let n = t.expect(19);
    t.accept(2) || t.expect(1);
    let r = { $type: "EbnfRule", name: n, definition: qt(t) };
    return t.expect(3), r;
  });
}
function Gt(e, t) {
  switch (e.$type) {
    case "EbnfChoice":
      return he(t);
    case "EbnfSequence":
      return de(t);
    case "EbnfTerm": {
      let n = t[0], r = 1;
      for (let a of e.postfixes) a.$type === "EbnfOptionalPostfix" ? n = X(n) : a.$type === "EbnfExceptionPostfix" ? n = { type: "sequence", elements: [n, ee("-"), t[r++]] } : n = te(n, a.$type === "EbnfOneOrMorePostfix" ? 1 : 0);
      return n;
    }
    case "EbnfTerminal":
      return ee(e.value);
    case "EbnfNonTerminal":
      return fe(e.name);
    case "EbnfSpecial":
      return ae(e.text);
    case "EbnfGroup":
      return t[0];
    case "EbnfOptional":
      return X(t[0]);
    case "EbnfRepetition":
      return te(t[0], 0);
  }
}
var Ft = (e) => $e(e, Gt), Ae = Re("RR_ID"), H = (e) => s(e, [Ae]), Lt = [ce("railroad-beta", Ae), H("nonterminal"), H("zeroOrMore"), H("oneOrMore"), H("sequence"), H("optional"), H("terminal"), H("special"), H("choice"), s("="), s(";"), s("("), s(","), s(")"), le, oe, se, Ae, _e("RR_STRING"), ...pe("RR"), { name: "RR_BLOCK_COMMENT", pattern: /\/\*[\s\S]*?\*\//y, hidden: !0, first: "/", opener: /\/\*/y }];
function ke(e) {
  e.i++, e.expect(11);
  let t = j(e.expect(18));
  return e.expect(13), t;
}
function Ee(e) {
  return { $type: e, element: void 0 };
}
function Bt(e) {
  let t = [];
  for (; ; ) {
    let n;
    switch (e.kind) {
      case 6:
        n = { $type: "RailroadTerminalExpr", value: ke(e) };
        break;
      case 1:
        n = { $type: "RailroadNonTerminalExpr", name: ke(e) };
        break;
      case 7:
        n = { $type: "RailroadSpecialExpr", text: ke(e) };
        break;
      case 4:
        n = { $type: "RailroadSequenceExpr", elements: [] };
        break;
      case 8:
        n = { $type: "RailroadChoiceExpr", alternatives: [] };
        break;
      case 5:
        n = Ee("RailroadOptionalExpr");
        break;
      case 3:
        n = Ee("RailroadOneOrMoreExpr");
        break;
      case 2:
        n = Ee("RailroadZeroOrMoreExpr");
        break;
      default:
        e.fail("an expression");
    }
    if ("elements" in n || "alternatives" in n || "element" in n) {
      e.i++, e.expect(11), t.push(n);
      continue;
    }
    for (; ; ) {
      let r = t[t.length - 1];
      if (r === void 0) return n;
      if ("element" in r) r.element = n;
      else if (("elements" in r ? r.elements : r.alternatives).push(n), e.accept(12)) break;
      e.expect(13), t.pop(), n = r;
    }
  }
}
function zt(e) {
  return ue(e, Lt, "Railroad", 14, j, (t) => {
    let n = t.expect(17);
    t.expect(9);
    let r = Bt(t);
    return t.expect(10), { $type: "RailroadRule", name: n, definition: r };
  });
}
function Dt(e, t) {
  switch (e.$type) {
    case "RailroadTerminalExpr":
      return ee(e.value);
    case "RailroadNonTerminalExpr":
      return fe(e.name);
    case "RailroadSpecialExpr":
      return ae(e.text);
    case "RailroadSequenceExpr":
      return de(t);
    case "RailroadChoiceExpr":
      return he(t);
    case "RailroadOptionalExpr":
      return X(t[0]);
    default:
      return te(t[0], e.$type === "RailroadOneOrMoreExpr" ? 1 : 0);
  }
}
var Ht = (e) => $e(e, Dt), Ue = Re("PEG_ID"), Vt = [ce("railroad-peg-beta", Ue), s("<-"), s(";"), s("/"), s("&"), s("!"), s("?"), s("*"), s("+"), s("("), s(")"), s("."), le, oe, se, Ue, _e("PEG_STRING"), ...pe("PEG"), { name: "PEG_LINE_COMMENT", pattern: /#[^\n\r]*/y, hidden: !0, first: "#" }];
function Ze(e, t, n) {
  let r = { $type: "PegSequence", elements: [] };
  return t.alternatives.push(r), { choice: t, sequence: r, node: e, operator: n };
}
function Wt(e) {
  let t = [], n = Ze(void 0, { $type: "PegOrderedChoice", alternatives: [] }, void 0);
  for (; ; ) {
    let r = e.kind === 4 || e.kind === 5 ? e.take() : void 0, a;
    switch (e.kind) {
      case 16:
        a = { $type: "PegLiteral", value: j(e.take()) };
        break;
      case 15:
        a = { $type: "PegIdentifier", name: e.take() };
        break;
      case 11:
        a = { $type: "PegAny", dot: e.take() };
        break;
      case 9: {
        e.i++;
        let o = { $type: "PegOrderedChoice", alternatives: [] };
        t.push(n), n = Ze({ $type: "PegGroup", element: o }, o, r);
        continue;
      }
      default:
        e.fail("a literal, a name, a dot, or an opening parenthesis");
    }
    for (; ; ) {
      let o = { $type: "PegSuffix", primary: a };
      (e.kind === 6 || e.kind === 7 || e.kind === 8) && (o.operator = e.take()), n.sequence.elements.push(r === void 0 ? { $type: "PegPrefix", suffix: o } : { $type: "PegPrefix", operator: r, suffix: o });
      let i = e.kind;
      if (i === 10 && t.length > 0) {
        e.i++, a = n.node, r = n.operator, n = t.pop();
        continue;
      }
      if (i === 3) e.i++, n.sequence = { $type: "PegSequence", elements: [] }, n.choice.alternatives.push(n.sequence);
      else if (i !== 4 && i !== 5 && i !== 16 && i !== 15 && i !== 11 && i !== 9) {
        if (t.length === 0) return n.choice;
        e.fail("token of type ')'");
      }
      break;
    }
  }
}
function Ut(e) {
  return ue(e, Vt, "RailroadPeg", 12, j, (t) => {
    let n = t.expect(15);
    t.expect(1);
    let r = { $type: "PegRule", name: n, definition: Wt(t) };
    return t.expect(2), r;
  });
}
function Zt(e) {
  switch (e.type) {
    case "terminal":
      return `"${e.value}"`;
    case "nonterminal":
      return e.name;
    case "special":
      return e.text;
    default:
      return "(...)";
  }
}
function Yt(e, t) {
  let n = t[0];
  switch (e.$type) {
    case "PegOrderedChoice":
      return he(t);
    case "PegSequence":
      return de(t);
    case "PegPrefix":
      return e.operator ? ae(e.operator + Zt(n)) : n;
    case "PegSuffix":
      return e.operator ? e.operator === "?" ? X(n) : te(n, e.operator === "+" ? 1 : 0) : n;
    case "PegLiteral":
      return ee(e.value);
    case "PegIdentifier":
      return fe(e.name);
    case "PegAny":
      return ae(e.dot);
    case "PegGroup":
      return n;
  }
}
var Kt = (e) => $e(e, Yt), Xt = class {
  constructor() {
    D(this, "type", "railroad");
    D(this, "notation", "railroad");
    D(this, "title");
    D(this, "accTitle");
    D(this, "accDescr");
    D(this, "rules", []);
    D(this, "byName", /* @__PURE__ */ new Map());
  }
  setTitle(e) {
    this.title = e;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  addRule(e) {
    this.rules.push(e), this.byName.set(e.name, e);
  }
  getRule(e) {
    return this.byName.get(e);
  }
}, jt = /^\s*railroad-(ebnf-|abnf-|peg-)?beta/i;
function Qt(e) {
  let t = jt.exec(e);
  if (t === null) return;
  let n = t[1]?.toLowerCase();
  return n === "ebnf-" ? "ebnf" : n === "abnf-" ? "abnf" : n === "peg-" ? "peg" : "railroad";
}
function Jt(e, t) {
  switch (t) {
    case "ebnf": {
      let n = It(e);
      return [n, Ft(n)];
    }
    case "abnf": {
      let n = Ct(e);
      return [n, Tt(n)];
    }
    case "peg": {
      let n = Ut(e);
      return [n, Kt(n)];
    }
    default: {
      let n = zt(e);
      return [n, Ht(n)];
    }
  }
}
function en(e, t, n) {
  let [r, a] = Jt(t, n);
  e.notation = n, r.accDescr && e.setAccDescription(r.accDescr), r.accTitle && e.setAccTitle(r.accTitle), r.title && e.setTitle(r.title);
  for (let o of a) e.addRule(o);
}
function tn(e, t) {
  let n = Qt(e);
  if (n === void 0) throw new Mt("No railroad diagram keyword found.", "syntax", { type: "railroad" });
  let r = new Xt();
  return t && (r.title = t), en(r, e, n), r;
}
var we = 12, nn = 6, rn = 18, ie = 12, N = 7;
function U(e, t, n, r) {
  let a = e.railroad?.[t];
  return typeof a == "number" && a >= 0 ? Math.min(a, r) : n;
}
var an = /[\n\r\t]/g;
function re(e) {
  return (e.includes("¶ß") ? Rt(e.replace(/&/g, "&amp;")) : e).replace(an, (t) => t === `
` ? "\\n" : t === "\r" ? "\\r" : "\\t");
}
function ne(e, t) {
  for (let n = t, r = e.length - 1; n < r; n++, r--) {
    let a = e[n];
    e[n] = e[r], e[r] = a;
  }
}
function Pe(e) {
  return Math.ceil(e / 2) * 2;
}
function ve(e, t, n, r, a) {
  let o = a.height / 2, i = Math.max(Pe(a.measurer.width(t, a.size, r) + 2 * a.padding), a.height);
  return { kind: e, width: i, up: o, down: o, kids: je, text: t, id: n, reach: 0 };
}
function ln(e, t) {
  if (t === 1 / 0 && e <= 1) return "";
  let n = (r) => Number.isFinite(r) ? String(r) : "∞";
  return e === t ? n(e) + "×" : t === 1 / 0 ? "≥" + n(e) + "×" : e === 0 ? "≤" + n(t) + "×" : n(e) + "–" + n(t) + "×";
}
function tt(e, t, n, r) {
  return Math.max(e + t.down + r.sep + n.up, 2 * r.arc);
}
function Ye(e, t) {
  let n = Math.max(e.up + t.sep, 2 * t.arc);
  return { kind: 5, width: e.width + 4 * t.arc, up: n, down: e.down, kids: [e], text: "", id: "", reach: n };
}
function on(e, t, n = 1 / 0) {
  let r = /* @__PURE__ */ new Map(), a = [[e, n]];
  for (let o = 0; n !== 1 / 0 && o < a.length; o++) {
    let [i, p] = a[o];
    r.set(i, p);
    let c = i.type === "choice" || i.type === "optional" ? 4 * t.arc : i.type === "repetition" ? (i.min === 0 ? 6 : 2) * t.arc : i.type === "sequence" ? 6 * t.arc : 0;
    for (let y of Me(i)) a.push([y, Math.max(40, p - c)]);
  }
  return Qe(e, Me, (o, i) => {
    let p = r.get(o) ?? 1 / 0;
    switch (o.type) {
      case "terminal": {
        let c = re(o.value);
        return ve(0, /^ +$/.test(c) ? "␣".repeat(c.length) : c, "", 4, t);
      }
      case "nonterminal":
        return ve(1, re(o.name), o.name, 0, t);
      case "special":
        return ve(2, "? " + re(o.text) + " ?", "", 2, t);
      case "sequence": {
        let c = Math.max(0, i.length - 1) * t.gap, y = 0, f = 0;
        for (let x of i) c += x.width, y = Math.max(y, x.up), f = Math.max(f, x.down);
        let $ = { kind: 3, width: c, up: y, down: f, kids: i, text: "", id: "", reach: 0 };
        if (c <= p || i.length < 2) return $;
        let w = [], A = [], k = 0, d = () => {
          let x = 0, V = 0;
          for (let Z of A) x = Math.max(x, Z.up), V = Math.max(V, Z.down);
          w.push({ kind: 3, width: k, up: x, down: V, kids: A, text: "", id: "", reach: 0 }), A = [], k = 0;
        };
        for (let x of i) A.length && k + t.gap + x.width > Math.max(40, p - 6 * t.arc) && d(), k += (A.length ? t.gap : 0) + x.width, A.push(x);
        if (d(), w.length < 2) return $;
        let L = 0, q = 0;
        for (let x = 0; x < w.length; x++) L = Math.max(L, w[x].width), x && (q += w[x - 1].down + Math.max(t.sep, 2 * t.arc) + w[x].up);
        return { kind: 7, width: L + 6 * t.arc, up: w[0].up, down: q + w[w.length - 1].down, kids: w, text: "", id: "", reach: 0 };
      }
      case "choice": {
        let c = 0, y = 0;
        for (let $ = 0; $ < i.length; $++) c = Math.max(c, i[$].width), $ > 0 && (y = tt(y, i[$ - 1], i[$], t));
        let f = i[i.length - 1];
        return { kind: 4, width: c + 4 * t.arc, up: i.length > 0 ? i[0].up : 0, down: f ? y + f.down : 0, kids: i, text: "", id: "", reach: 0 };
      }
      case "optional":
        return Ye(i[0], t);
      case "repetition": {
        let { min: c, max: y } = o, f = i[0];
        if (c === 1 && y === 1) return f;
        let $ = ln(c, y), w = Math.max(f.down + t.sep, 2 * t.arc), A = $ === "" ? 0 : Pe(t.measurer.width($, ie, 0)), k = { kind: 6, width: Math.max(f.width, A) + 2 * t.arc, up: f.up, down: w + ($ === "" ? N / 2 + 1 : ie + 6), kids: [f], text: $, id: "", reach: w };
        return c === 0 ? Ye(k, t) : k;
      }
    }
  });
}
function sn(e, t, n) {
  return pt(n, (r) => cn(e, t, n, r));
}
function cn(e, t, n, r) {
  let a = n.fontSize ?? 16, o = U(t, "fontSize", 0, 200), i = o || Math.round(a * 0.875), p = o || a, c = U(t, "padding", -1, 200), y = Math.round(i * 1.5), f = { measurer: n.measurer ?? At(n.fontFamily, n.fontFamilyMono), size: i, padding: c < 0 ? 12 : c, height: Pe(y + (c < 0 ? 9 : 2 * c)), gap: Math.min(U(t, "horizontalSeparation", 16, 500), r ? 12 : 1 / 0), sep: U(t, "verticalSeparation", 10, 500), arc: Math.min(U(t, "arcRadius", 10, 200), r ? 6 : 1 / 0) }, $ = t.railroad?.showMarkers === !1 ? 0 : U(t, "markerRadius", 4, 50), w = U(t, "strokeWidth", 0, 20), A = w > 0 ? ` stroke-width="${l(w)}"` : "", k = n.padding ?? 8, { arc: d } = f, L = l(d), q = (S, P, I) => `a${L},${L} 0 0 ${S} ${P}${L},${I}${L}`, x = q(1, "", ""), V = q(0, "", ""), Z = q(0, "", "-"), Ce = q(1, "", "-"), nt = q(0, "-", ""), rt = q(0, "-", "-"), Y = kt(e.title, !1, f.measurer, a, r ? ut(n) : 4e3, 1), at = Y.height > 0 ? Y.height + 16 : 0, Ne = Math.round(p * 1.5), it = i * 0.35, Te = f.height / 2, B = "", Q = "", K = "", T = (S, P, I) => {
    I > S && (B += `M${l(S)},${l(P)}H${l(I)}`);
  }, lt = (S, P, I) => {
    let E = [S], _ = [P, I];
    for (; E.length > 0; ) {
      let g = E.pop(), u = _.pop(), b = _.pop(), R = g.kids, O = b + g.width;
      switch (g.kind) {
        case 3: {
          let h = O;
          for (let m = R.length - 1; m >= 0; m--) h -= R[m].width, E.push(R[m]), _.push(h, u), m > 0 && T(h - f.gap, u, h), h -= f.gap;
          break;
        }
        case 7: {
          let h = b + 2 * d, m = E.length, M = 0;
          T(b, u, h);
          for (let v = 0; v < R.length; v++) {
            let G = R[v], C = u + M;
            if (E.push(G), _.push(C, h), v + 1 < R.length) {
              let W = R[v + 1], z = M + G.down + Math.max(f.sep, 2 * d) + W.up, F = u + M + G.down + Math.max(f.sep, 2 * d) / 2;
              B += `M${l(h + G.width)},${l(C)}H${l(O - 2 * d)}V${l(F)}H${l(b + d)}V${l(u + z)}H${l(h)}`, Q += `M${l(h - N)},${l(u + z - N / 2)}l${N},${N / 2}l${-N},${N / 2}z`, M = z;
            } else B += `M${l(h + G.width)},${l(C)}H${l(O - d)}V${l(u)}H${l(O)}`;
          }
          ne(E, m), ne(_, 2 * m);
          break;
        }
        case 4: {
          let h = g.width - 4 * d, m = b + d, M = O - d, v = E.length, G = 0;
          for (let C = 0; C < R.length; C++) {
            let W = R[C];
            C > 0 && (G = tt(G, R[C - 1], W, f));
            let z = u + G, F = b + 2 * d + (h - W.width) / 2, Oe = C === R.length - 1;
            C === 0 ? (T(b, u, F), T(F + W.width, u, O)) : B += (Oe ? `M${l(b)},${l(u)}${x}V${l(z - d)}` : `M${l(m)},${l(z - d)}`) + V + (F > m + d ? `H${l(F)}` : "") + `M${l(F + W.width)},${l(z)}` + (F > m + d ? `H${l(M - d)}` : "") + Z + (Oe ? `V${l(u + d)}${Ce}` : ""), E.push(W), _.push(z, F);
          }
          ne(E, v), ne(_, 2 * v);
          break;
        }
        case 5: {
          let h = R[0], m = b + 2 * d;
          T(b, u, m), T(m + h.width, u, O), B += `M${l(b)},${l(u)}${Z}V${l(u - g.reach + d)}${Ce}H${l(O - 2 * d)}${x}V${l(u - d)}${V}`, E.push(h), _.push(m, u);
          break;
        }
        case 6: {
          let h = R[0], m = b + (g.width - h.width) / 2, M = u + g.reach, v = b + g.width / 2;
          T(b, u, m), T(m + h.width, u, O), B += `M${l(b + d)},${l(u)}${nt}V${l(M - d)}${V}H${l(O - d)}${Z}V${l(u + d)}${rt}`, Q += `M${l(v - N / 2)},${l(M)}l${N},${-N / 2}v${N}z`, g.text !== "" && (K += `<text class="pele-edge-label pele-count" x="${l(v)}" y="${l(M + ie + 3)}" font-size="${ie}" fill="var(--_m)">${J(g.text)}</text>`), E.push(h), _.push(m, u);
          break;
        }
        default: {
          let h = g.text, m = h.startsWith(" ") || h.endsWith(" ") || h.includes("  ") ? ' xml:space="preserve"' : "", M = `<rect x="${l(b)}" y="${l(u - Te)}" width="${l(g.width)}" height="${l(f.height)}"`, v = `<text x="${l(b + g.width / 2)}" y="${l(u + it)}"${m}`;
          g.kind === 0 ? K += `<g class="pele-node pele-terminal">${M} rx="${l(Te)}" fill="var(--_s)" stroke="var(--_b)"${A}/>${v} font-family="${vt}">${J(h)}</text></g>` : g.kind === 1 ? K += `<g class="pele-node pele-nonterminal" data-id="${qe(g.id)}">${M} rx="${Ie}" fill="var(--_bg)" stroke="var(--_b)"${A}/>${v}>${J(h)}</text></g>` : K += `<g class="pele-node pele-special">${M} rx="${Ie}" fill="var(--_bg)" stroke="var(--_b)" stroke-dasharray="4 3"${A}/>${v} font-style="italic"><tspan fill="var(--_m)">? </tspan>${J(h.slice(2, -2))}<tspan fill="var(--_m)"> ?</tspan></text></g>`;
        }
      }
    }
  }, me = "", xe = Y.width, ge = k + at, ye = k + Y.height;
  for (let S of e.rules) {
    let P = on(S.definition, f, r ? Math.max(80, (n.maxWidth ?? 320) - 2 * k - 4 * $ - 2 * we - 1) : 1 / 0), I = re(S.name), E = ge + Ne + nn + P.up, _ = k + 2 * $, g = _ + we, u = g + P.width + we;
    B = "", Q = "", K = "", T(_, E, g), T(g + P.width, E, u), lt(P, g, E);
    let b = $ > 0 ? `<circle class="pele-marker pele-start" cx="${l(k + $)}" cy="${l(E)}" r="${l($)}" fill="var(--_l)"/><circle class="pele-marker pele-end" cx="${l(u + $)}" cy="${l(E)}" r="${l($)}" fill="var(--_l)"/>` : "";
    me += `<g class="pele-rule" data-id="${qe(S.name)}"><text class="pele-rule-name" x="${l(k)}" y="${l(ge + Ne / 2 + p * 0.35)}" font-size="${l(p)}" font-weight="var(--_hw)" text-anchor="start">${J(I)}</text><path class="pele-edge pele-track" d="${B}" fill="none" stroke="var(--_l)"${A}/>` + (Q ? `<path class="pele-marker" d="${Q}" fill="var(--_l)"/>` : "") + b + K + "</g>", xe = Math.max(xe, u + 2 * $ - k, f.measurer.width(I, p, 1)), ye = E + P.down, ge = ye + f.sep + rn;
  }
  let be = Math.ceil(xe + 2 * k), Se = Math.ceil(ye + k), ot = Et(Y, be / 2, k + Y.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (me ? `<g class="pele-rules" transform="translate(0.5,0.5)" font-size="${l(i)}" text-anchor="middle">${me}</g>` : "");
  return { svg: wt("railroad", be, Se, a, n, e, ot), width: be, height: Se, links: [] };
}
var $n = { type: "railroad", parse: (e, t, n) => tn(e, n), render: sn };
export {
  $n as railroad
};
