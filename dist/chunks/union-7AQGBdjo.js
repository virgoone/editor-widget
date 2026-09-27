import { K as y, L as l, M as v, N as E, O, P as G, Q as L, R as j, T as M, V as u, W as N, X as R, Y as K, Z as V, _ as W, $ as Y, D as q, a0 as Q, a1 as X, a2 as Z } from "./isEmpty-BO6FiAO3.js";
import { k as p, g as U, s as H, j as J, l as z, m as k, n as rr, e as er, o as tr, b as nr } from "./_baseUniq-CjFLd3Ed.js";
function ar(r, e) {
  return r && y(e, p(e), r);
}
function or(r, e) {
  return r && y(e, l(e), r);
}
function sr(r, e) {
  return y(r, U(r), e);
}
var cr = Object.getOwnPropertySymbols, h = cr ? function(r) {
  for (var e = []; r; )
    J(e, U(r)), r = v(r);
  return e;
} : H;
function ir(r, e) {
  return y(r, h(r), e);
}
function fr(r) {
  return z(r, l, h);
}
var br = Object.prototype, gr = br.hasOwnProperty;
function ur(r) {
  var e = r.length, n = new r.constructor(e);
  return e && typeof r[0] == "string" && gr.call(r, "index") && (n.index = r.index, n.input = r.input), n;
}
function yr(r, e) {
  var n = e ? E(r.buffer) : r.buffer;
  return new r.constructor(n, r.byteOffset, r.byteLength);
}
var Tr = /\w*$/;
function lr(r) {
  var e = new r.constructor(r.source, Tr.exec(r));
  return e.lastIndex = r.lastIndex, e;
}
var I = O ? O.prototype : void 0, w = I ? I.valueOf : void 0;
function jr(r) {
  return w ? Object(w.call(r)) : {};
}
var pr = "[object Boolean]", Ar = "[object Date]", dr = "[object Map]", mr = "[object Number]", $r = "[object RegExp]", Sr = "[object Set]", Or = "[object String]", Ir = "[object Symbol]", wr = "[object ArrayBuffer]", Fr = "[object DataView]", Cr = "[object Float32Array]", Er = "[object Float64Array]", Lr = "[object Int8Array]", Mr = "[object Int16Array]", Ur = "[object Int32Array]", hr = "[object Uint8Array]", Br = "[object Uint8ClampedArray]", xr = "[object Uint16Array]", Pr = "[object Uint32Array]";
function Dr(r, e, n) {
  var f = r.constructor;
  switch (e) {
    case wr:
      return E(r);
    case pr:
    case Ar:
      return new f(+r);
    case Fr:
      return yr(r, n);
    case Cr:
    case Er:
    case Lr:
    case Mr:
    case Ur:
    case hr:
    case Br:
    case xr:
    case Pr:
      return G(r, n);
    case dr:
      return new f();
    case mr:
    case Or:
      return new f(r);
    case $r:
      return lr(r);
    case Sr:
      return new f();
    case Ir:
      return jr(r);
  }
}
var _r = "[object Map]";
function vr(r) {
  return L(r) && j(r) == _r;
}
var F = u && u.isMap, Gr = F ? M(F) : vr, Nr = "[object Set]";
function Rr(r) {
  return L(r) && j(r) == Nr;
}
var C = u && u.isSet, Kr = C ? M(C) : Rr, Vr = 1, Wr = 2, Yr = 4, B = "[object Arguments]", qr = "[object Array]", Qr = "[object Boolean]", Xr = "[object Date]", Zr = "[object Error]", x = "[object Function]", Hr = "[object GeneratorFunction]", Jr = "[object Map]", zr = "[object Number]", P = "[object Object]", kr = "[object RegExp]", re = "[object Set]", ee = "[object String]", te = "[object Symbol]", ne = "[object WeakMap]", ae = "[object ArrayBuffer]", oe = "[object DataView]", se = "[object Float32Array]", ce = "[object Float64Array]", ie = "[object Int8Array]", fe = "[object Int16Array]", be = "[object Int32Array]", ge = "[object Uint8Array]", ue = "[object Uint8ClampedArray]", ye = "[object Uint16Array]", Te = "[object Uint32Array]", t = {};
t[B] = t[qr] = t[ae] = t[oe] = t[Qr] = t[Xr] = t[se] = t[ce] = t[ie] = t[fe] = t[be] = t[Jr] = t[zr] = t[P] = t[kr] = t[re] = t[ee] = t[te] = t[ge] = t[ue] = t[ye] = t[Te] = !0;
t[Zr] = t[x] = t[ne] = !1;
function T(r, e, n, f, A, s) {
  var a, b = e & Vr, g = e & Wr, D = e & Yr;
  if (a !== void 0)
    return a;
  if (!N(r))
    return r;
  var d = q(r);
  if (d) {
    if (a = ur(r), !b)
      return R(r, a);
  } else {
    var i = j(r), m = i == x || i == Hr;
    if (K(r))
      return V(r, b);
    if (i == P || i == B || m && !A) {
      if (a = g || m ? {} : W(r), !b)
        return g ? ir(r, or(a, r)) : sr(r, ar(a, r));
    } else {
      if (!t[i])
        return A ? r : {};
      a = Dr(r, i, b);
    }
  }
  s || (s = new Y());
  var $ = s.get(r);
  if ($)
    return $;
  s.set(r, a), Kr(r) ? r.forEach(function(o) {
    a.add(T(o, e, n, o, r, s));
  }) : Gr(r) && r.forEach(function(o, c) {
    a.set(c, T(o, e, n, c, r, s));
  });
  var _ = D ? g ? fr : rr : g ? l : p, S = d ? void 0 : _(r);
  return k(S || r, function(o, c) {
    S && (c = o, o = r[c]), Q(a, c, T(o, e, n, c, r, s));
  }), a;
}
function le(r, e) {
  return er(e, function(n) {
    return r[n];
  });
}
function Ae(r) {
  return r == null ? [] : le(r, p(r));
}
function de(r) {
  return r === void 0;
}
var me = X(function(r) {
  return tr(nr(r, 1, Z, !0));
});
export {
  T as b,
  de as i,
  me as u,
  Ae as v
};
