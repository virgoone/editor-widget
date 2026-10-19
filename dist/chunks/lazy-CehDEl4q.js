var rt = Object.defineProperty;
var nt = (t, e, n) => e in t ? rt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var p = (t, e, n) => nt(t, typeof e != "symbol" ? e + "" : e, n);
var y = class {
  constructor(e) {
    p(this, "message");
    this.message = e;
  }
}, V = 64;
function M(t, e, n) {
  e === "__proto__" ? Object.defineProperty(t, e, { value: n, enumerable: !0, writable: !0, configurable: !0 }) : t[e] = n;
}
var it = class {
  constructor(e) {
    p(this, "lines");
    p(this, "i", 0);
    this.lines = e.replace(/\r\n?/g, `
`).split(`
`);
  }
  skipBlank() {
    for (; this.i < this.lines.length; ) {
      let e = this.lines[this.i].trim();
      if (e !== "" && e[0] !== "#" && e !== "---") break;
      this.i++;
    }
  }
  indent() {
    let e = this.lines[this.i], n = 0;
    for (; n < e.length && e[n] === " "; ) n++;
    if (e[n] === "	") throw new Error("YAML: tabs are not allowed for indentation");
    return n;
  }
}, lt = /^[-+]?(?:0|[1-9][0-9]*)$/, at = /^[-+]?0x[0-9a-fA-F]+$/, ot = /^[-+]?0o[0-7]+$/, st = /^[-+]?0b[01]+$/, ft = /^[-+]?(?:[0-9][0-9]*(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][-+]?[0-9]+)?$/, ut = /[\s#:,[\]{}&*!|>'"%@`]/;
function x(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function E(t) {
  let e = t[0], n, r;
  if (e === '"' || e === "'") {
    let l = 1;
    for (; ; ) {
      if (l >= t.length) return null;
      let i = t[l];
      if (e === '"' && i === "\\") l += 2;
      else if (i === e) {
        if (e === '"' || t[l + 1] !== "'") break;
        l += 2;
      } else l++;
    }
    for (n = l + 1, r = n; x(t[r]); ) r++;
    if (t[r] !== ":") return null;
  } else {
    if (e === void 0 || ut.test(e) || e === "-" && (t.length < 2 || x(t[1]) || t[1] === ":" || t[1] === "#")) return null;
    for (r = 1; r < t.length && t[r] !== ":" && t[r] !== "#"; ) r++;
    if (t[r] !== ":") return null;
    for (n = r; x(t[n - 1]); ) n--;
  }
  let a = r + 1;
  if (a < t.length && !x(t[a])) return null;
  for (; x(t[a]); ) a++;
  return { key: t.slice(0, n), length: a };
}
function D(t) {
  let e = t.trim();
  if (e === "" || e === "~" || e === "null" || e === "Null" || e === "NULL") return null;
  if (e === "true" || e === "True" || e === "TRUE") return !0;
  if (e === "false" || e === "False" || e === "FALSE") return !1;
  if (lt.test(e) || ft.test(e)) return Number(e);
  if (at.test(e) || ot.test(e) || st.test(e)) {
    let n = e[0] === "-", r = Number(n || e[0] === "+" ? e.slice(1) : e);
    return n ? -r : r;
  }
  return /^[-+]?\.(?:inf|Inf|INF)$/.test(e) ? e[0] === "-" ? -1 / 0 : 1 / 0 : /^\.(?:nan|NaN|NAN)$/.test(e) ? NaN : e;
}
var _ = { 0: "\0", a: "\x07", b: "\b", t: "	", n: `
`, v: "\v", f: "\f", r: "\r", e: "\x1B", " ": " ", '"': '"', "/": "/", "\\": "\\", N: "", _: " ", L: "\u2028", P: "\u2029" };
function j(t) {
  if (!t.includes(`
`)) return t;
  let e = t.split(`
`), n = e.length - 1;
  for (let r = 0; r <= n; r++) {
    let a = e[r], l = 0, i = a.length;
    if (r > 0) for (; l < i && (a.charCodeAt(l) === 32 || a.charCodeAt(l) === 9); ) l++;
    if (r < n) for (; i > l && (a.charCodeAt(i - 1) === 32 || a.charCodeAt(i - 1) === 9); ) i--;
    e[r] = a.slice(l, i);
  }
  return e.join(`
`).replace(/\n+/g, (r) => r.length === 1 ? " " : `
`.repeat(r.length - 1));
}
function ct(t) {
  let e = "", n = j(t.replace(/\\\n[ \t]*/g, ""));
  for (let r = 0; r < n.length; r++) {
    let a = n[r];
    if (a !== "\\") {
      e += a;
      continue;
    }
    let l = n[++r];
    if (l === "x" || l === "u" || l === "U") {
      let i = l === "x" ? 2 : l === "u" ? 4 : 8;
      e += String.fromCodePoint(parseInt(n.slice(r + 1, r + 1 + i), 16)), r += i;
    } else if (l in _) e += _[l];
    else throw new Error("YAML: unknown escape sequence");
  }
  return e;
}
function d(t, e, n) {
  for (; e < t.length; ) {
    let r = t[e];
    if (r === " " || r === `
` || r === "	" || r === "\r" || n) e++;
    else if (r === "#" && (e === 0 || /\s/.test(t[e - 1]))) {
      let a = t.indexOf(`
`, e);
      e = a === -1 ? t.length : a;
    } else break;
  }
  return e;
}
function T(t, e) {
  if (!e) throw new Error("YAML: missed comma between flow collection entries");
  if (t === ",") throw new Error("YAML: expected the node content, but found ','");
}
function k(t, e, n, r = 0) {
  if (r > V) throw new Error("YAML: nesting is too deep");
  e = d(t, e, !1);
  let a = t[e];
  if (a === "{") {
    let i = {};
    e++;
    let o = !0;
    for (; ; ) {
      if (e = d(t, e, !1), e >= t.length) throw new y("YAML: unexpected end of the stream within a flow collection");
      if (t[e] === "}") return [i, e + 1];
      T(t[e], o);
      let f;
      [f, e] = k(t, e, ":,}", r + 1), e = d(t, e, !1);
      let s = null;
      t[e] === ":" && ([s, e] = k(t, e + 1, ",}", r + 1)), M(i, String(f), s), e = d(t, e, !1), o = t[e] === ",", o && e++;
    }
  }
  if (a === "[") {
    let i = [];
    e++;
    let o = !0;
    for (; ; ) {
      if (e = d(t, e, !1), e >= t.length) throw new y("YAML: unexpected end of the stream within a flow collection");
      if (t[e] === "]") return [i, e + 1];
      T(t[e], o);
      let f;
      [f, e] = k(t, e, ",]", r + 1), i.push(f), e = d(t, e, !1), o = t[e] === ",", o && e++;
    }
  }
  if (a === '"') {
    let i = e + 1;
    for (; i < t.length && t[i] !== '"'; ) i += t[i] === "\\" ? 2 : 1;
    if (i >= t.length) throw new y("YAML: unexpected end of the stream within a double quoted scalar");
    return [ct(t.slice(e + 1, i)), i + 1];
  }
  if (a === "'") {
    let i = e + 1;
    for (; i < t.length; ) {
      if (t[i] === "'") {
        if (t[i + 1] !== "'") break;
        i++;
      }
      i++;
    }
    if (i >= t.length) throw new y("YAML: unexpected end of the stream within a single quoted scalar");
    return [j(t.slice(e + 1, i)).replace(/''/g, "'"), i + 1];
  }
  let l = e;
  for (; l < t.length; ) {
    let i = t[l];
    if (n.includes(i) && (i !== ":" || l + 1 >= t.length || /[\s,[\]{}]/.test(t[l + 1]))) break;
    if (i === "#" && l > e && /\s/.test(t[l - 1])) {
      let o = t.indexOf(`
`, l);
      return [D(j(t.slice(e, l).trim())), o === -1 ? t.length : o];
    }
    l++;
  }
  return [D(j(t.slice(e, l).trim())), l];
}
function v(t) {
  let e = "";
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e) r === "\\" && e === '"' ? n++ : r === e && (e = "");
    else if (r === '"' || r === "'") e = r;
    else if (r === "#" && (n === 0 || t[n - 1] === " " || t[n - 1] === "	")) return t.slice(0, n);
  }
  return t;
}
function gt(t, e, n) {
  let r = e[0] === ">", a = e.includes("-") ? "-" : e.includes("+") ? "+" : "", l = /[1-9]/.exec(e), i = l ? n + Number(l[0]) : -1, o = [];
  for (; t.i < t.lines.length; ) {
    let c = t.lines[t.i];
    if (c.trim() === "") {
      o.push(""), t.i++;
      continue;
    }
    let u = c.length - c.trimStart().length;
    if (i === -1) {
      if (u <= n) break;
      i = u;
    }
    if (u < i) break;
    o.push(c.slice(i)), t.i++;
  }
  let f = 0;
  for (; o.length > 0 && o[o.length - 1] === ""; ) o.pop(), f++;
  let s;
  if (r) {
    s = "";
    for (let c = 0; c < o.length; c++) {
      let u = o[c];
      if (c > 0) {
        let g = o[c - 1];
        u === "" ? s += `
` : g !== "" && (s += /^[ \t]/.test(g) || /^[ \t]/.test(u) ? `
` : " ");
      }
      s += u;
    }
  } else s = o.join(`
`);
  return o.length === 0 ? a === "+" ? `
`.repeat(f) : "" : a === "-" ? s : a === "+" ? s + `
`.repeat(f + 1) : s + `
`;
}
function L(t, e, n) {
  let r = e[0];
  if ((r === "|" || r === ">") && /^[|>][-+0-9]*\s*(?:#.*)?$/.test(e)) return gt(t, e, n);
  if (r === "{" || r === "[" || r === '"' || r === "'") {
    let l = t.i, i = e, o = 0, f = 1;
    for (; ; ) try {
      let [s, c] = k(i, 0, ""), u = 0;
      for (let h = i.indexOf(`
`); h !== -1 && h < c; h = i.indexOf(`
`, h + 1)) u++;
      let g = i.indexOf(`
`, c);
      if (v(i.slice(c, g === -1 ? i.length : g)).trim() !== "") throw new Error("YAML: unexpected content after a value");
      return t.i = l + u, s;
    } catch (s) {
      if (!(s instanceof y)) throw s;
      if (l + o >= t.lines.length) throw new Error(s.message);
      let c = t.lines.slice(l + o, l + o + f);
      i += `
` + c.join(`
`), o += c.length, f *= 2;
    }
  }
  let a = v(e).trim();
  for (; t.i < t.lines.length; ) {
    let l = t.lines[t.i];
    if (l.trim() === "") {
      let o = t.i;
      for (; o < t.lines.length && t.lines[o].trim() === ""; ) o++;
      if (o >= t.lines.length || t.lines[o].length - t.lines[o].trimStart().length <= n) break;
      a += `
`.repeat(o - t.i), t.i = o;
      continue;
    }
    if (l.length - l.trimStart().length <= n) break;
    let i = v(l).trim();
    a += (a.endsWith(`
`) ? "" : " ") + i, t.i++;
  }
  return D(a);
}
function C(t, e, n = 0) {
  if (n > V) throw new Error("YAML: nesting is too deep");
  if (t.skipBlank(), t.i >= t.lines.length) return null;
  let r = t.indent();
  if (r < e) return null;
  let a = t.lines[t.i].slice(r);
  if (a === "-" || a.startsWith("- ")) {
    let i = [];
    for (; t.i < t.lines.length && (t.skipBlank(), !(t.i >= t.lines.length || t.indent() !== r)); ) {
      let o = t.lines[t.i].slice(r);
      if (o !== "-" && !o.startsWith("- ")) break;
      let f = o.slice(1), s = f.length - f.trimStart().length + 1, c = v(f).trim();
      c === "" ? (t.i++, i.push(C(t, r + 1, n + 1))) : E(c) !== null ? (t.lines[t.i] = " ".repeat(r + s) + f.trimStart(), i.push(C(t, r + s, n + 1))) : (t.i++, i.push(L(t, f.trim(), r)));
    }
    return i;
  }
  if (E(a) === null) return t.i++, L(t, a.trim(), r - 1);
  let l = {};
  for (; t.i < t.lines.length && (t.skipBlank(), !(t.i >= t.lines.length)); ) {
    let i = t.indent();
    if (i < r) break;
    if (i > r) throw new Error("YAML: bad indentation of a mapping entry");
    let o = t.lines[t.i].slice(r), f = E(o);
    if (!f) throw new Error("YAML: can not read a block mapping entry");
    let s = String(k(f.key, 0, "")[0]), c = o.slice(f.length);
    if (t.i++, v(c).trim() === "") if (t.skipBlank(), t.i < t.lines.length) {
      let u = t.indent(), g = t.lines[t.i].slice(u), h = g === "-" || g.startsWith("- ");
      M(l, s, u > r || h && u === r ? C(t, h ? r : r + 1, n + 1) : null);
    } else M(l, s, null);
    else M(l, s, L(t, c.trim(), r));
  }
  return l;
}
function ht(t) {
  let e = t.trim();
  if (e[0] === "{" || e[0] === "[") try {
    let [a, l] = k(e, 0, "");
    if (d(e, l, !1) === e.length) return a;
  } catch (a) {
    throw a instanceof y ? new Error(a.message) : a;
  }
  let n = new it(t), r = C(n, 0);
  if (n.skipBlank(), n.i < n.lines.length && n.lines[n.i].trim() !== "...") throw new Error("YAML: end of the stream or a document separator is expected");
  return r;
}
function pt(t) {
  return t < 128 ? t === 32 || t >= 9 && t <= 13 : t === 160 || t === 5760 || t >= 8192 && t <= 8202 || t === 8232 || t === 8233 || t === 8239 || t === 8287 || t === 12288 || t === 65279;
}
function ee(t) {
  return t === 32 || t === 9;
}
function re(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function ne(t) {
  return t >= 48 && t <= 57;
}
function ie(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
function le(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function ae(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t === 95;
}
var m = class extends Error {
  constructor(e, n = "syntax", r = {}) {
    super(e);
    p(this, "code");
    p(this, "type");
    p(this, "line");
    p(this, "column");
    p(this, "snippet");
    this.name = "PeleError", this.code = n, this.type = r.type ?? null, this.line = r.line ?? 0, this.column = r.column ?? 0, this.snippet = r.snippet ?? "";
  }
};
function mt(t, e) {
  let n = 1, r = 0;
  for (let o = t.indexOf(`
`); o !== -1 && o < e; o = t.indexOf(`
`, o + 1)) n++, r = o + 1;
  let a = t.indexOf(`
`, e);
  a === -1 && (a = t.length);
  let l = e - r + 1, i = t.slice(r, a);
  return { line: n, column: l, snippet: i + `
` + "-".repeat(l - 1) + "^" };
}
function oe(t, e, n, r, a = !1) {
  let l = mt(e, n), i = a ? `Lexical error on line ${l.line}. Unrecognized text.` : `Parse error on line ${l.line}:`, o = a ? `${i}
${l.snippet}` : `${i}
${l.snippet}
${r}`;
  return new m(o, "syntax", { type: t, ...l });
}
var dt = "amp:38,lt:60,gt:62,quot:34,apos:39,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,sect:167,copy:169,laquo:171,not:172,reg:174,deg:176,plusmn:177,sup2:178,sup3:179,micro:181,para:182,middot:183,sup1:185,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,euro:8364,trade:8482,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,radic:8730,infin:8734,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830,check:10003,cross:10007,equals:61,colon:58,semi:59,num:35,percnt:37,lpar:40,rpar:41,lbrack:91,rbrack:93,lbrace:123,rbrace:125,vert:124,sol:47,bsol:92,quest:63,excl:33,ast:42,plus:43,comma:44,period:46,dollar:36,commat:64,grave:96,hat:94,lowbar:95,tilde:126,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969", $;
function X(t) {
  if (!$) {
    $ = /* @__PURE__ */ new Map();
    for (let e of dt.split(",")) {
      let n = e.indexOf(":");
      $.set(e.slice(0, n), String.fromCodePoint(Number(e.slice(n + 1))));
    }
  }
  return $.get(t);
}
function I(t, e) {
  return t > 0 && t <= 1114111 && (t < 55296 || t > 57343) ? String.fromCodePoint(t) : e;
}
var wt = /&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|(\w+));/g, B = "ﬂ°", bt = "¶ß";
function yt(t) {
  let e = "", n = 0, r = t.indexOf(B);
  for (; r !== -1; ) {
    let a = t.indexOf("¶", r + 2);
    if (a === -1) break;
    if (t[a + 1] === "ß") {
      let l = t[r + 2] === "°", i = t.slice(r + (l ? 3 : 2), a), o = t.slice(r, a + 2);
      e += t.slice(n, r) + (l ? I(Number(i), o) : X(i) ?? "&" + i + ";"), n = a + 2;
    }
    r = t.indexOf(B, a + 1);
  }
  return n === 0 ? t : e + t.slice(n);
}
function W(t) {
  return t.includes(bt) && (t = yt(t)), t.includes("&") && (t = t.replace(wt, (e, n, r, a) => n ? I(Number(n), e) : r ? I(parseInt(r, 16), e) : X(a) ?? e)), t;
}
var q, A = /* @__PURE__ */ new Map();
function kt(t, e) {
  let n = q, r = A;
  q = t, A = /* @__PURE__ */ new Map();
  try {
    return e();
  } finally {
    q = n, A = r;
  }
}
function se(t) {
  if (q === void 0) return "";
  let e = A.get(t);
  return e === void 0 && (e = q(t) ?? "", A.set(t, e)), e;
}
var xt = "7q7q9vfgfgopij5b9999atg87q997q7qfgfgfgfgfgfgfgfgfgfg7q7qg8g8g8fgs7ijijk2k2ijgzlmk27qdwijfgn5k2lmijlmk2ijgzk2ijq8ijijgz7q7q7qd1fg99fgfgdwfgfg7qfgfg6666dw66n5fgfgfgfg99dw7qfgdwk2dwdwdw9a789ag8", vt = "7q99d6fgfgopk26m9999atg87q997q7qfgfgfgfgfgfgfgfgfgfg9999g8g8g8gzr3k2k2k2k2ijgzlmk27qfgk2gzn5k2lmijlmk2ijgzk2ijq8ijijgz997q99g8fg99fggzfggzfg99gzgz7q7qfg7qopgzgzgzgzatfg99gzfglmfgfgdwat7satg8";
function R(t) {
  let e = new Uint16Array(95);
  for (let n = 0; n < 95; n++) e[n] = parseInt(t.substr(n * 2, 2), 36);
  return e;
}
var qt, At;
function $t(t) {
  return t >= 4352 && t <= 4447 || t >= 11904 && t <= 42191 || t >= 44032 && t <= 55203 || t >= 63744 && t <= 64255 || t >= 65072 && t <= 65103 || t >= 65280 && t <= 65376 || t >= 65504 && t <= 65510 || t >= 55296 && t <= 56319;
}
function Ot(t) {
  return t >= 768 && t <= 879 || t >= 8203 && t <= 8207 || t >= 56320 && t <= 57343 || t >= 65024 && t <= 65039 || t === 65279;
}
var Mt = { width(t, e, n) {
  let r = (n & 4) !== 0, a = n & 1 ? At ?? (At = R(vt)) : qt ?? (qt = R(xt)), l = 0;
  for (let i = 0; i < t.length; i++) {
    let o = t.charCodeAt(i);
    if (!(o < 32)) if (o < 127) l += r ? 600 : a[o - 32];
    else {
      if (Ot(o)) continue;
      $t(o) ? l += r ? 1200 : 1e3 : l += r ? 600 : 580;
    }
  }
  return l * e / 1e3;
} };
function jt() {
  let t = globalThis;
  try {
    if (t.OffscreenCanvas) return new t.OffscreenCanvas(1, 1).getContext("2d");
    if (t.document) return t.document.createElement("canvas").getContext("2d");
  } catch {
    return null;
  }
  return null;
}
var Ct = 2e4;
function F() {
  let t = globalThis;
  return t.document?.fonts ?? t.fonts;
}
function zt(t, e, n) {
  try {
    return t?.check(e, n) ?? !0;
  } catch {
    return !0;
  }
}
function Et(t, e = "monospace") {
  let n = jt();
  if (!n) return null;
  let r = /* @__PURE__ */ new Map(), a = "", l = F()?.size;
  return { width(i, o, f) {
    let s = F();
    s?.size !== l && (l = s?.size, r.clear());
    let c = (f & 2 ? "italic " : "") + (f & 1 ? "bold " : "") + o + "px " + (f & 4 ? e : t), u = r.get(c);
    u || r.set(c, u = /* @__PURE__ */ new Map());
    let g = u.get(i);
    return g === void 0 && (c !== a && (n.font = a = c), g = n.measureText(i).width, zt(s, c, i) && (u.size >= Ct && u.clear(), u.set(i, g))), g;
  } };
}
var U = /* @__PURE__ */ new Map();
function fe(t = "sans-serif", e = "monospace") {
  let n = t + `
` + e, r = U.get(n);
  return r || (r = Et(t, e) ?? Mt, U.set(n, r)), r;
}
var Lt = [["flowchart", /^\s*flowchart-elk/], ["mindmap", /^\s*mindmap/], ["architecture", /^\s*architecture/], ["agentflow", /^\s*agentflow-beta\b/], ["c4", /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/], ["kanban", /^\s*kanban/], ["class", /^\s*classDiagram/], ["er", /^\s*erDiagram/], ["gantt", /^\s*gantt/], ["info", /^\s*info/], ["pie", /^\s*pie/], ["requirement", /^\s*requirement(Diagram)?/], ["sequence", /^\s*sequenceDiagram/], ["swimlane", /^\s*swimlane-beta\b/], ["flowchart", /^\s*(graph|flowchart)/], ["timeline", /^\s*timeline/], ["gitGraph", /^\s*gitGraph/], ["state", /^\s*stateDiagram/], ["journey", /^\s*journey/], ["quadrantChart", /^\s*quadrantChart/], ["sankey", /^\s*sankey(-beta)?/], ["packet", /^\s*packet(-beta)?/], ["xychart", /^\s*xychart(-beta)?/], ["block", /^\s*block(-beta)?/], ["eventmodeling", /^\s*eventmodeling/], ["treeView", /^\s*treeView-beta/], ["radar", /^\s*radar-beta/], ["ishikawa", /^\s*ishikawa(-beta)?\b/i], ["treemap", /^\s*treemap/], ["railroad", /^\s*railroad-(?:ebnf-|abnf-|peg-)?beta/i], ["venn", /^\s*venn-beta/], ["wardley", /^\s*wardley-beta/i], ["cynefin", /^\s*cynefin-beta(?:[\s:]|$)/], ["usecase", /^\s*usecase-beta(?:\s|$)/]];
function Z(t) {
  for (let [e, n] of Lt) if (n.test(t)) return e;
  return null;
}
var St = /^\s*%%(?!{)[^\n]+\n?/gm, b = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Nt = /<(\w+)([^>]*)>/g, Pt = /="([^"]*)"/g, Dt = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function It(t) {
  return (t.includes("%%") ? t.replace(St, "") : t).trimStart();
}
function O(t) {
  return t === `
` || t === "\r";
}
function S(t) {
  return t !== void 0 && /\s/.test(t);
}
function Yt(t) {
  let e = 0;
  for (; e < t.length && S(t[e]) && !O(t[e]); ) e++;
  let n = t.slice(0, e);
  if (!t.startsWith("---", e)) return;
  let r = [];
  for (let u = e + 3; u < t.length && S(t[u]); u++) O(t[u]) && r.push(u);
  if (r.length === 0) return;
  let a = n + "---", l = (u) => {
    if (!O(t[u]) || !t.startsWith(a, u + 1)) return -1;
    let g = -1;
    for (let h = u + 1 + a.length; h < t.length && S(t[h]); h++) O(t[h]) && (g = h);
    return g;
  }, i = `
` + a, o = -1;
  for (let u = t.lastIndexOf(i); u > r[0]; u = t.lastIndexOf(i, u - 1)) if (l(u) !== -1) {
    o = u;
    break;
  }
  if (o === -1) return;
  let f = r[0];
  for (let u of r) u < o && (f = u);
  let s = f + 1, c = s > 0 ? s - 1 : 0;
  for (let u = t.indexOf(i, c); u !== -1 && u <= o; u = t.indexOf(i, u + 1)) {
    if (u < s) continue;
    let g = l(u);
    if (g !== -1) return { indent: n, body: t.slice(s, u), length: g + 1 };
  }
}
function w(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function z(t, e) {
  for (let n of Object.keys(e)) {
    if (Dt.has(n)) continue;
    let r = e[n], a = t[n];
    w(r) && w(a) ? z(a, r) : w(r) ? t[n] = z({}, r) : t[n] = r;
  }
  return t;
}
function _t(t, e) {
  if (!t.includes("%%{")) return t;
  let n = t.trim().replace(/'/g, '"');
  b.lastIndex = 0;
  let r;
  for (; (r = b.exec(n)) !== null; ) {
    r.index === b.lastIndex && b.lastIndex++;
    let a = r[1] ?? r[2];
    if (a === "wrap") e.wrap = !0;
    else if ((a === "init" || a === "initialize") && r[4]) try {
      let l = JSON.parse(r[4].trim());
      w(l) && z(e, l);
    } catch {
    }
  }
  return b.lastIndex = 0, t.replace(b, "");
}
function H(t) {
  let e = t.includes("\r") ? t.replace(/\r\n?/g, `
`) : t, n = e.includes("<") ? e.lastIndexOf(">") : -1;
  n > 0 && (e = e.slice(0, n + 1).replace(Nt, (o, f, s) => "<" + f + s.replace(Pt, "='$1'") + ">") + e.slice(n + 1));
  let r = {}, a, l = 0, i = e.includes("---") ? Yt(e) : void 0;
  if (i) {
    let o = i.indent ? i.body.split(`
`).map((s) => s.startsWith(i.indent) ? s.slice(i.indent.length) : s).join(`
`) : i.body, f;
    try {
      f = ht(o);
    } catch (s) {
      throw new m(`Front matter is not valid YAML. ${s.message}`, "syntax");
    }
    if (w(f) && (f.title && (a = String(f.title)), w(f.config) && z(r, f.config), f.displayMode)) {
      let s = w(r.gantt) ? r.gantt : r.gantt = {};
      s.displayMode = String(f.displayMode);
    }
    for (let s = e.indexOf(`
`); s !== -1 && s < i.length; s = e.indexOf(`
`, s + 1)) l++;
    e = e.slice(i.length);
  }
  return e = _t(e, r), { text: It(e), title: a, config: r, withComments: e, lineOffset: l };
}
var Tt = /#\w+;/g, Bt = /^\+?\d+$/, N = new RegExp("[\\n\\r\u2028\u2029]", "g");
function G(t, e) {
  let n = t.indexOf(e);
  if (n === -1) return t;
  let r = "", a = 0;
  for (; n !== -1; ) {
    N.lastIndex = n;
    let l = N.test(t) ? N.lastIndex - 1 : t.length, i = !1, o = -1;
    for (let f = n + e.length; f < l; f++) {
      let s = t.charCodeAt(f);
      if (s === 58) i = !0;
      else if (s === 35) {
        if (i) {
          o = f;
          break;
        }
      } else pt(s) && (i = !1);
    }
    if (o !== -1) {
      let f = t.lastIndexOf(";", l - 1);
      f > o && (r += t.slice(a, f), a = f + 1);
    }
    n = l >= t.length ? -1 : t.indexOf(e, l + 1);
  }
  return a === 0 ? t : r + t.slice(a);
}
function Wt(t) {
  return t.includes("#") ? G(G(t, "style"), "classDef").replace(Tt, (e) => {
    let n = e.substring(1, e.length - 1);
    return (Bt.test(n) ? "ﬂ°°" : "ﬂ°") + n + "¶ß";
  }) : t;
}
Math.random().toString(36).slice(2, 7);
var Y = /* @__PURE__ */ new Map();
function K(...t) {
  for (let e of t) Y.set(e.type, e);
}
function J(t) {
  return Y.has(t);
}
var Rt = 5e4, Ft = 4e6, Ut = 5e3;
function Gt(t) {
  try {
    return t();
  } catch (e) {
    throw e instanceof RangeError ? new m("Diagram is nested too deeply.", "limit") : e;
  }
}
var Vt = /* @__PURE__ */ new WeakMap();
function Xt(t, e = Rt, n = Ut, r) {
  if (t.length > e) throw new m(`Diagram source is longer than the limit of ${e} characters.`, "limit");
  let a = H(t), l = Z(a.text);
  if (l === null) throw new m("No diagram type detected for the given text.", "unsupported-diagram");
  let i = Y.get(l);
  if (i === void 0) throw new m(`Diagram type "${l}" is not supported yet.`, "unsupported-diagram", { type: l });
  let o = r ? { ...r, ...a.config } : a.config, f = i.keepComments ? a.withComments : a.text, s = i.parse(Wt(f) + `
`, o, a.title, a.lineOffset, { maxEdges: n });
  return { type: l, diagram: i, model: s, config: o };
}
function Zt(t, e) {
  if (typeof t == "string") return Xt(t, e.limit, e.maxEdges, e.config);
  let n = Vt.get(t);
  if (n === void 0) throw new TypeError("render() takes diagram text or a model that parse() returned.");
  return n;
}
function Q(t) {
  return Z(H(t).text);
}
function tt(t, e = {}) {
  return Gt(() => {
    let { type: n, diagram: r, model: a, config: l } = Zt(t, e), i = l[r.section ?? n], o = typeof i == "object" && i !== null && !Array.isArray(i) && i.useMaxWidth === !1, f = e.responsive ?? !o, s = e.icons, c = s && ((h) => s(W(h))), u = kt(c, () => r.render(a, l, { ...e, responsive: f, icons: c })), g = e.outputLimit ?? Ft;
    if (u.svg.length > g) throw new m(`Diagram output is longer than the limit of ${g} characters.`, "limit", { type: n });
    for (let h of u.links) h.id = W(h.id);
    return { type: n, ...u };
  });
}
var Ht = /* @__PURE__ */ new Map([["flowchart", () => import("./NV4XNBIS-DGeSrbpm.js").then((t) => t.N).then((t) => t.flowchart)], ["pie", () => import("./XRRJ35LF-CELp_WDa.js").then((t) => t.pie)], ["er", () => import("./BNMLP6AG-BgcArcTc.js").then((t) => t.er)], ["mindmap", () => import("./KS3BB3KE-D7fHeK3M.js").then((t) => t.mindmap)], ["kanban", () => import("./UHTQJXKL-CEyoojC2.js").then((t) => t.kanban)], ["timeline", () => import("./FP7KDXVC-Rf_2ZYsN.js").then((t) => t.timeline)], ["journey", () => import("./MXGNCBL2-h5Tquvu5.js").then((t) => t.journey)], ["class", () => import("./QYHQDLKZ-DkqjdONr.js").then((t) => t.classDiagram)], ["quadrantChart", () => import("./ZF3OVT4B-B3ml1Vfw.js").then((t) => t.quadrantChart)], ["xychart", () => import("./4TTDE5I4-D2S5Btsn.js").then((t) => t.xychart)], ["state", () => import("./AAXQQPKT-8OW698D_.js").then((t) => t.state)], ["gantt", () => import("./YFKBLVVN-BRJE1eMy.js").then((t) => t.gantt)], ["architecture", () => import("./PU4ISKXV-vqEtyt3E.js").then((t) => t.architecture)], ["requirement", () => import("./Q3IYVLG5-CEtG9q1x.js").then((t) => t.requirement)], ["sankey", () => import("./DR6PKOQU-BECR6QYf.js").then((t) => t.sankey)], ["packet", () => import("./NU5M23IW-ByYuZ419.js").then((t) => t.packet)], ["radar", () => import("./ERTIBQVS-CHqO4vEL.js").then((t) => t.radar)], ["treemap", () => import("./GY35JXOZ-DT3Y2xqT.js").then((t) => t.treemap)], ["info", () => import("./4UF3HTLV-TTqxwf0S.js").then((t) => t.info)], ["sequence", () => import("./MWY2J62P-B-rE498X.js").then((t) => t.sequence)], ["gitGraph", () => import("./OGLU4SIR-BOUN9nzT.js").then((t) => t.gitGraph)], ["c4", () => import("./YHRE5QGZ-DS9zk8zS.js").then((t) => t.c4)], ["block", () => import("./46IJ22JX-D-A-0c0D.js").then((t) => t.block)], ["railroad", () => import("./2DXBBFLN-CCgLircv.js").then((t) => t.railroad)], ["agentflow", () => import("./F653G4FO-KpYA0XfN.js").then((t) => t.agentflow)], ["treeView", () => import("./VKNV3BUX-d18AcGwy.js").then((t) => t.treeView)], ["cynefin", () => import("./AKE5O7KZ-BMK5yYNf.js").then((t) => t.cynefin)], ["wardley", () => import("./E4RJ7UJB-DQJ-ibMt.js").then((t) => t.wardley)], ["eventmodeling", () => import("./FT5I3RHX-CAoRi0jQ.js").then((t) => t.eventmodeling)], ["usecase", () => import("./OUNS5N76-BtwGBb4s.js").then((t) => t.usecase)], ["venn", () => import("./KXJRRZHI-DnxRSJrv.js").then((t) => t.venn)], ["ishikawa", () => import("./UXCHDUKG-CJ04Dt9v.js").then((t) => t.ishikawa)], ["swimlane", () => import("./H5EEJPP2-aalckjVn.js").then((t) => t.swimlane)]]), P = /* @__PURE__ */ new Map();
function et(t) {
  if (t === null) return Promise.resolve(!1);
  if (J(t)) return Promise.resolve(!0);
  let e = P.get(t);
  if (e === void 0) {
    let n = Ht.get(t);
    if (n === void 0) return Promise.resolve(!1);
    e = n().then((r) => (K(r), !0), (r) => {
      throw P.delete(t), r;
    }), P.set(t, e);
  }
  return e;
}
async function Kt(t, e = {}) {
  let n = null;
  try {
    n = Q(t);
  } catch {
  }
  return await et(n), tt(t, e);
}
const ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PeleError: m,
  detectType: Q,
  load: et,
  register: K,
  registered: J,
  render: tt,
  renderAsync: Kt
}, Symbol.toStringTag, { value: "Module" }));
export {
  W as $,
  mt as C,
  fe as H,
  oe as L,
  se as W,
  le as a,
  pt as e,
  ae as i,
  ue as l,
  re as o,
  ht as q,
  ee as r,
  ne as t,
  ie as u,
  m as x
};
