import { b, c as m, d, e as h, i as l } from "./_baseUniq-CjFLd3Ed.js";
import { B as g, D as o, E as p } from "./isEmpty-BO6FiAO3.js";
function M(n) {
  var a = n == null ? 0 : n.length;
  return a ? b(n) : [];
}
function v(n, a) {
  var s = -1, t = g(n) ? Array(n.length) : [];
  return m(n, function(f, i, e) {
    t[++s] = a(f, i, e);
  }), t;
}
function k(n, a) {
  var s = o(n) ? h : v;
  return s(n, d(a));
}
function x(n, a) {
  return n < a;
}
function A(n, a, s) {
  for (var t = -1, f = n.length; ++t < f; ) {
    var i = n[t], e = a(i);
    if (e != null && (r === void 0 ? e === e && !l(e) : s(e, r)))
      var r = e, u = i;
  }
  return u;
}
function w(n) {
  return n && n.length ? A(n, p, x) : void 0;
}
export {
  w as a,
  A as b,
  x as c,
  v as d,
  M as f,
  k as m
};
