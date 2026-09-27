import { b as p } from "./union-7AQGBdjo.js";
import { W as h, aA as P, aB as G, a1 as w, aC as m, L as A, aD as T, B as N, aE as $, aF as q, E as B, aG as z, a0 as F, D as R, T as S } from "./isEmpty-BO6FiAO3.js";
import { i as O, d as g, k as W, p as Y, q as E, t as L, u as M, v as H, w as C, e as x, x as K, b as U, y as X } from "./_baseUniq-CjFLd3Ed.js";
import { f as Z, b as _, c as D, d as J } from "./min-CkWT_XzJ.js";
var Q = /\s/;
function I(n) {
  for (var r = n.length; r-- && Q.test(n.charAt(r)); )
    ;
  return r;
}
var V = /^\s+/;
function y(n) {
  return n && n.slice(0, I(n) + 1).replace(V, "");
}
var b = NaN, k = /^[-+]0x[0-9a-f]+$/i, j = /^0b[01]+$/i, nn = /^0o[0-7]+$/i, rn = parseInt;
function tn(n) {
  if (typeof n == "number")
    return n;
  if (O(n))
    return b;
  if (h(n)) {
    var r = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = h(r) ? r + "" : r;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = y(n);
  var i = j.test(n);
  return i || nn.test(n) ? rn(n.slice(2), i ? 2 : 8) : k.test(n) ? b : +n;
}
var v = 1 / 0, fn = 17976931348623157e292;
function o(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = tn(n), n === v || n === -v) {
    var r = n < 0 ? -1 : 1;
    return r * fn;
  }
  return n === n ? n : 0;
}
function an(n) {
  var r = o(n), i = r % 1;
  return r === r ? i ? r - i : r : 0;
}
function un(n) {
  return P(G(n, void 0, Z), n + "");
}
var en = 1, sn = 4;
function Gn(n) {
  return p(n, en | sn);
}
var l = Object.prototype, dn = l.hasOwnProperty, Tn = w(function(n, r) {
  n = Object(n);
  var i = -1, t = r.length, a = t > 2 ? r[2] : void 0;
  for (a && m(r[0], r[1], a) && (t = 1); ++i < t; )
    for (var f = r[i], u = A(f), e = -1, s = u.length; ++e < s; ) {
      var d = u[e], c = n[d];
      (c === void 0 || T(c, l[d]) && !dn.call(n, d)) && (n[d] = f[d]);
    }
  return n;
});
function Nn(n) {
  var r = n == null ? 0 : n.length;
  return r ? n[r - 1] : void 0;
}
function cn(n) {
  return function(r, i, t) {
    var a = Object(r);
    if (!N(r)) {
      var f = g(i);
      r = W(r), i = function(e) {
        return f(a[e], e, a);
      };
    }
    var u = n(r, i, t);
    return u > -1 ? a[f ? r[u] : u] : void 0;
  };
}
var gn = Math.max;
function on(n, r, i) {
  var t = n == null ? 0 : n.length;
  if (!t)
    return -1;
  var a = i == null ? 0 : an(i);
  return a < 0 && (a = gn(t + a, 0)), Y(n, g(r), a);
}
var $n = cn(on);
function qn(n, r) {
  return n == null ? n : $(n, E(r), A);
}
function zn(n, r) {
  return n && L(n, E(r));
}
function hn(n, r) {
  return n > r;
}
function Rn(n, r) {
  var i = {};
  return r = g(r), L(n, function(t, a, f) {
    q(i, a, r(t, a, f));
  }), i;
}
function Sn(n) {
  return n && n.length ? _(n, B, hn) : void 0;
}
function Wn(n, r) {
  return n && n.length ? _(n, g(r), D) : void 0;
}
function mn(n, r, i, t) {
  if (!h(n))
    return n;
  r = M(r, n);
  for (var a = -1, f = r.length, u = f - 1, e = n; e != null && ++a < f; ) {
    var s = H(r[a]), d = i;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return n;
    if (a != u) {
      var c = e[s];
      d = void 0, d === void 0 && (d = h(c) ? c : z(r[a + 1]) ? [] : {});
    }
    F(e, s, d), e = e[s];
  }
  return n;
}
function xn(n, r, i) {
  for (var t = -1, a = r.length, f = {}; ++t < a; ) {
    var u = r[t], e = C(n, u);
    i(e, u) && mn(f, M(u, n), e);
  }
  return f;
}
function On(n, r) {
  var i = n.length;
  for (n.sort(r); i--; )
    n[i] = n[i].value;
  return n;
}
function bn(n, r) {
  if (n !== r) {
    var i = n !== void 0, t = n === null, a = n === n, f = O(n), u = r !== void 0, e = r === null, s = r === r, d = O(r);
    if (!e && !d && !f && n > r || f && u && s && !e && !d || t && u && s || !i && s || !a)
      return 1;
    if (!t && !f && !d && n < r || d && i && a && !t && !f || e && i && a || !u && a || !s)
      return -1;
  }
  return 0;
}
function vn(n, r, i) {
  for (var t = -1, a = n.criteria, f = r.criteria, u = a.length, e = i.length; ++t < u; ) {
    var s = bn(a[t], f[t]);
    if (s) {
      if (t >= e)
        return s;
      var d = i[t];
      return s * (d == "desc" ? -1 : 1);
    }
  }
  return n.index - r.index;
}
function wn(n, r, i) {
  r.length ? r = x(r, function(f) {
    return R(f) ? function(u) {
      return C(u, f.length === 1 ? f[0] : f);
    } : f;
  }) : r = [B];
  var t = -1;
  r = x(r, S(g));
  var a = J(n, function(f, u, e) {
    var s = x(r, function(d) {
      return d(f);
    });
    return { criteria: s, index: ++t, value: f };
  });
  return On(a, function(f, u) {
    return vn(f, u, i);
  });
}
function An(n, r) {
  return xn(n, r, function(i, t) {
    return K(n, t);
  });
}
var Yn = un(function(n, r) {
  return n == null ? {} : An(n, r);
}), Bn = Math.ceil, Fn = Math.max;
function En(n, r, i, t) {
  for (var a = -1, f = Fn(Bn((r - n) / (i || 1)), 0), u = Array(f); f--; )
    u[++a] = n, n += i;
  return u;
}
function Ln(n) {
  return function(r, i, t) {
    return t && typeof t != "number" && m(r, i, t) && (i = t = void 0), r = o(r), i === void 0 ? (i = r, r = 0) : i = o(i), t = t === void 0 ? r < i ? 1 : -1 : o(t), En(r, i, t);
  };
}
var Hn = Ln(), Kn = w(function(n, r) {
  if (n == null)
    return [];
  var i = r.length;
  return i > 1 && m(n, r[0], r[1]) ? r = [] : i > 2 && m(r[0], r[1], r[2]) && (r = [r[0]]), wn(n, U(r), []);
}), Mn = 0;
function Un(n) {
  var r = ++Mn;
  return X(n) + r;
}
function Cn(n, r, i) {
  for (var t = -1, a = n.length, f = r.length, u = {}; ++t < a; ) {
    var e = t < f ? r[t] : void 0;
    i(u, n[t], e);
  }
  return u;
}
function Xn(n, r) {
  return Cn(n || [], r || [], F);
}
export {
  Wn as a,
  Rn as b,
  Gn as c,
  Tn as d,
  qn as e,
  $n as f,
  zn as g,
  Nn as l,
  Sn as m,
  Yn as p,
  Hn as r,
  Kn as s,
  Un as u,
  Xn as z
};
