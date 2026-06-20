var ot = Object.defineProperty;
var Fe = (n) => {
  throw TypeError(n);
};
var at = (n, t, e) => t in n ? ot(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var pe = (n, t, e) => at(n, typeof t != "symbol" ? t + "" : t, e), Oe = (n, t, e) => t.has(n) || Fe("Cannot " + e);
var C = (n, t, e) => (Oe(n, t, "read from private field"), e ? e.call(n) : t.get(n)), L = (n, t, e) => t.has(n) ? Fe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), k = (n, t, e, r) => (Oe(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e), Ce = (n, t, e) => (Oe(n, t, "access private method"), e);
import { R as ut } from "./client-DeHBg55h.js";
import { M as st } from "./index-Dj9rqWcU.js";
function qe(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Ve(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qe(Object(e), !0).forEach(function(r) {
      be(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : qe(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function I() {
  I = function() {
    return n;
  };
  var n = {}, t = Object.prototype, e = t.hasOwnProperty, r = Object.defineProperty || function(c, l, d) {
    c[l] = d.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
  function h(c, l, d) {
    return Object.defineProperty(c, l, {
      value: d,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), c[l];
  }
  try {
    h({}, "");
  } catch {
    h = function(l, d, S) {
      return l[d] = S;
    };
  }
  function s(c, l, d, S) {
    var w = l && l.prototype instanceof M ? l : M, _ = Object.create(w.prototype), R = new V(S || []);
    return r(_, "_invoke", {
      value: v(c, d, R)
    }), _;
  }
  function P(c, l, d) {
    try {
      return {
        type: "normal",
        arg: c.call(l, d)
      };
    } catch (S) {
      return {
        type: "throw",
        arg: S
      };
    }
  }
  n.wrap = s;
  var E = {};
  function M() {
  }
  function T() {
  }
  function m() {
  }
  var N = {};
  h(N, o, function() {
    return this;
  });
  var A = Object.getPrototypeOf, j = A && A(A(x([])));
  j && j !== t && e.call(j, o) && (N = j);
  var g = m.prototype = M.prototype = Object.create(N);
  function p(c) {
    ["next", "throw", "return"].forEach(function(l) {
      h(c, l, function(d) {
        return this._invoke(l, d);
      });
    });
  }
  function f(c, l) {
    function d(w, _, R, $) {
      var D = P(c[w], c, _);
      if (D.type !== "throw") {
        var oe = D.arg, de = oe.value;
        return de && typeof de == "object" && e.call(de, "__await") ? l.resolve(de.__await).then(function(J) {
          d("next", J, R, $);
        }, function(J) {
          d("throw", J, R, $);
        }) : l.resolve(de).then(function(J) {
          oe.value = J, R(oe);
        }, function(J) {
          return d("throw", J, R, $);
        });
      }
      $(D.arg);
    }
    var S;
    r(this, "_invoke", {
      value: function(w, _) {
        function R() {
          return new l(function($, D) {
            d(w, _, $, D);
          });
        }
        return S = S ? S.then(R, R) : R();
      }
    });
  }
  function v(c, l, d) {
    var S = "suspendedStart";
    return function(w, _) {
      if (S === "executing") throw new Error("Generator is already running");
      if (S === "completed") {
        if (w === "throw") throw _;
        return Se();
      }
      for (d.method = w, d.arg = _; ; ) {
        var R = d.delegate;
        if (R) {
          var $ = b(R, d);
          if ($) {
            if ($ === E) continue;
            return $;
          }
        }
        if (d.method === "next") d.sent = d._sent = d.arg;
        else if (d.method === "throw") {
          if (S === "suspendedStart") throw S = "completed", d.arg;
          d.dispatchException(d.arg);
        } else d.method === "return" && d.abrupt("return", d.arg);
        S = "executing";
        var D = P(c, l, d);
        if (D.type === "normal") {
          if (S = d.done ? "completed" : "suspendedYield", D.arg === E) continue;
          return {
            value: D.arg,
            done: d.done
          };
        }
        D.type === "throw" && (S = "completed", d.method = "throw", d.arg = D.arg);
      }
    };
  }
  function b(c, l) {
    var d = l.method, S = c.iterator[d];
    if (S === void 0) return l.delegate = null, d === "throw" && c.iterator.return && (l.method = "return", l.arg = void 0, b(c, l), l.method === "throw") || d !== "return" && (l.method = "throw", l.arg = new TypeError("The iterator does not provide a '" + d + "' method")), E;
    var w = P(S, c.iterator, l.arg);
    if (w.type === "throw") return l.method = "throw", l.arg = w.arg, l.delegate = null, E;
    var _ = w.arg;
    return _ ? _.done ? (l[c.resultName] = _.value, l.next = c.nextLoc, l.method !== "return" && (l.method = "next", l.arg = void 0), l.delegate = null, E) : _ : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, E);
  }
  function O(c) {
    var l = {
      tryLoc: c[0]
    };
    1 in c && (l.catchLoc = c[1]), 2 in c && (l.finallyLoc = c[2], l.afterLoc = c[3]), this.tryEntries.push(l);
  }
  function y(c) {
    var l = c.completion || {};
    l.type = "normal", delete l.arg, c.completion = l;
  }
  function V(c) {
    this.tryEntries = [{
      tryLoc: "root"
    }], c.forEach(O, this), this.reset(!0);
  }
  function x(c) {
    if (c) {
      var l = c[o];
      if (l) return l.call(c);
      if (typeof c.next == "function") return c;
      if (!isNaN(c.length)) {
        var d = -1, S = function w() {
          for (; ++d < c.length; ) if (e.call(c, d)) return w.value = c[d], w.done = !1, w;
          return w.value = void 0, w.done = !0, w;
        };
        return S.next = S;
      }
    }
    return {
      next: Se
    };
  }
  function Se() {
    return {
      value: void 0,
      done: !0
    };
  }
  return T.prototype = m, r(g, "constructor", {
    value: m,
    configurable: !0
  }), r(m, "constructor", {
    value: T,
    configurable: !0
  }), T.displayName = h(m, u, "GeneratorFunction"), n.isGeneratorFunction = function(c) {
    var l = typeof c == "function" && c.constructor;
    return !!l && (l === T || (l.displayName || l.name) === "GeneratorFunction");
  }, n.mark = function(c) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(c, m) : (c.__proto__ = m, h(c, u, "GeneratorFunction")), c.prototype = Object.create(g), c;
  }, n.awrap = function(c) {
    return {
      __await: c
    };
  }, p(f.prototype), h(f.prototype, a, function() {
    return this;
  }), n.AsyncIterator = f, n.async = function(c, l, d, S, w) {
    w === void 0 && (w = Promise);
    var _ = new f(s(c, l, d, S), w);
    return n.isGeneratorFunction(l) ? _ : _.next().then(function(R) {
      return R.done ? R.value : _.next();
    });
  }, p(g), h(g, u, "Generator"), h(g, o, function() {
    return this;
  }), h(g, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(c) {
    var l = Object(c), d = [];
    for (var S in l) d.push(S);
    return d.reverse(), function w() {
      for (; d.length; ) {
        var _ = d.pop();
        if (_ in l) return w.value = _, w.done = !1, w;
      }
      return w.done = !0, w;
    };
  }, n.values = x, V.prototype = {
    constructor: V,
    reset: function(c) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(y), !c) for (var l in this) l.charAt(0) === "t" && e.call(this, l) && !isNaN(+l.slice(1)) && (this[l] = void 0);
    },
    stop: function() {
      this.done = !0;
      var c = this.tryEntries[0].completion;
      if (c.type === "throw") throw c.arg;
      return this.rval;
    },
    dispatchException: function(c) {
      if (this.done) throw c;
      var l = this;
      function d(D, oe) {
        return _.type = "throw", _.arg = c, l.next = D, oe && (l.method = "next", l.arg = void 0), !!oe;
      }
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var w = this.tryEntries[S], _ = w.completion;
        if (w.tryLoc === "root") return d("end");
        if (w.tryLoc <= this.prev) {
          var R = e.call(w, "catchLoc"), $ = e.call(w, "finallyLoc");
          if (R && $) {
            if (this.prev < w.catchLoc) return d(w.catchLoc, !0);
            if (this.prev < w.finallyLoc) return d(w.finallyLoc);
          } else if (R) {
            if (this.prev < w.catchLoc) return d(w.catchLoc, !0);
          } else {
            if (!$) throw new Error("try statement without catch or finally");
            if (this.prev < w.finallyLoc) return d(w.finallyLoc);
          }
        }
      }
    },
    abrupt: function(c, l) {
      for (var d = this.tryEntries.length - 1; d >= 0; --d) {
        var S = this.tryEntries[d];
        if (S.tryLoc <= this.prev && e.call(S, "finallyLoc") && this.prev < S.finallyLoc) {
          var w = S;
          break;
        }
      }
      w && (c === "break" || c === "continue") && w.tryLoc <= l && l <= w.finallyLoc && (w = null);
      var _ = w ? w.completion : {};
      return _.type = c, _.arg = l, w ? (this.method = "next", this.next = w.finallyLoc, E) : this.complete(_);
    },
    complete: function(c, l) {
      if (c.type === "throw") throw c.arg;
      return c.type === "break" || c.type === "continue" ? this.next = c.arg : c.type === "return" ? (this.rval = this.arg = c.arg, this.method = "return", this.next = "end") : c.type === "normal" && l && (this.next = l), E;
    },
    finish: function(c) {
      for (var l = this.tryEntries.length - 1; l >= 0; --l) {
        var d = this.tryEntries[l];
        if (d.finallyLoc === c) return this.complete(d.completion, d.afterLoc), y(d), E;
      }
    },
    catch: function(c) {
      for (var l = this.tryEntries.length - 1; l >= 0; --l) {
        var d = this.tryEntries[l];
        if (d.tryLoc === c) {
          var S = d.completion;
          if (S.type === "throw") {
            var w = S.arg;
            y(d);
          }
          return w;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(c, l, d) {
      return this.delegate = {
        iterator: x(c),
        resultName: l,
        nextLoc: d
      }, this.method === "next" && (this.arg = void 0), E;
    }
  }, n;
}
function $e(n, t, e, r, i, o, a) {
  try {
    var u = n[o](a), h = u.value;
  } catch (s) {
    e(s);
    return;
  }
  u.done ? t(h) : Promise.resolve(h).then(r, i);
}
function K(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, i) {
      var o = n.apply(t, e);
      function a(h) {
        $e(o, r, i, a, u, "next", h);
      }
      function u(h) {
        $e(o, r, i, a, u, "throw", h);
      }
      a(void 0);
    });
  };
}
function Ue(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lt(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Je(r.key), r);
  }
}
function Qe(n, t, e) {
  return t && lt(n.prototype, t), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function be(n, t, e) {
  return t = Je(t), t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function ct(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(n, "prototype", {
    writable: !1
  }), t && ye(n, t);
}
function me(n) {
  return me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, me(n);
}
function ye(n, t) {
  return ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ye(n, t);
}
function Ye() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ke(n, t, e) {
  return Ye() ? ke = Reflect.construct.bind() : ke = function(i, o, a) {
    var u = [null];
    u.push.apply(u, o);
    var h = Function.bind.apply(i, u), s = new h();
    return a && ye(s, a.prototype), s;
  }, ke.apply(null, arguments);
}
function ft(n) {
  return Function.toString.call(n).indexOf("[native code]") !== -1;
}
function Le(n) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Le = function(r) {
    if (r === null || !ft(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, i);
    }
    function i() {
      return ke(r, arguments, me(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ye(i, r);
  }, Le(n);
}
function Ee(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function ht(n, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ee(n);
}
function dt(n) {
  var t = Ye();
  return function() {
    var r = me(n), i;
    if (t) {
      var o = me(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else
      i = r.apply(this, arguments);
    return ht(this, i);
  };
}
function pt(n, t) {
  if (typeof n != "object" || n === null) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
function Je(n) {
  var t = pt(n, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Xe = typeof globalThis < "u" && {}.toString.call(globalThis) === "[object global]";
function De(n, t) {
  return n.indexOf(t.toLowerCase()) === 0 ? n : "".concat(t.toLowerCase()).concat(n.substr(0, 1).toUpperCase()).concat(n.substr(1));
}
function vt(n) {
  return !!(n && n.nodeType === 1 && "nodeName" in n && n.ownerDocument && n.ownerDocument.defaultView);
}
function gt(n) {
  return !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n;
}
function ie(n) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(n);
}
function Ke(n) {
  var t = /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return t.test(n);
}
function mt(n) {
  for (var t = (n || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/), e = (t && t[1] || "").replace("player.", ""), r = [".videoji.hk", ".vimeo.work", ".videoji.cn"], i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (e.endsWith(a))
      return e;
  }
  return "vimeo.com";
}
function Ze() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.id, e = n.url, r = t || e;
  if (!r)
    throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
  if (gt(r))
    return "https://vimeo.com/".concat(r);
  if (ie(r))
    return r.replace("http:", "https:");
  throw t ? new TypeError("“".concat(t, "” is not a valid video id.")) : new TypeError("“".concat(r, "” is not a vimeo.com url."));
}
var xe = function(t, e, r) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "addEventListener", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "removeEventListener", a = typeof e == "string" ? [e] : e;
  return a.forEach(function(u) {
    t[i](u, r);
  }), {
    cancel: function() {
      return a.forEach(function(h) {
        return t[o](h, r);
      });
    }
  };
}, yt = typeof Array.prototype.indexOf < "u", wt = typeof window < "u" && typeof window.postMessage < "u";
if (!Xe && (!yt || !wt))
  throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function bt(n, t) {
  return t = { exports: {} }, n(t, t.exports), t.exports;
}
(function(n) {
  if (n.WeakMap)
    return;
  var t = Object.prototype.hasOwnProperty, e = Object.defineProperty && (function() {
    try {
      return Object.defineProperty({}, "x", {
        value: 1
      }).x === 1;
    } catch {
    }
  })(), r = function(o, a, u) {
    e ? Object.defineProperty(o, a, {
      configurable: !0,
      writable: !0,
      value: u
    }) : o[a] = u;
  };
  n.WeakMap = (function() {
    function o() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if (r(this, "_id", u("_WeakMap")), arguments.length > 0)
        throw new TypeError("WeakMap iterable is not supported");
    }
    r(o.prototype, "delete", function(s) {
      if (a(this, "delete"), !i(s))
        return !1;
      var P = s[this._id];
      return P && P[0] === s ? (delete s[this._id], !0) : !1;
    }), r(o.prototype, "get", function(s) {
      if (a(this, "get"), !!i(s)) {
        var P = s[this._id];
        if (P && P[0] === s)
          return P[1];
      }
    }), r(o.prototype, "has", function(s) {
      if (a(this, "has"), !i(s))
        return !1;
      var P = s[this._id];
      return !!(P && P[0] === s);
    }), r(o.prototype, "set", function(s, P) {
      if (a(this, "set"), !i(s))
        throw new TypeError("Invalid value used as weak map key");
      var E = s[this._id];
      return E && E[0] === s ? (E[1] = P, this) : (r(s, this._id, [s, P]), this);
    });
    function a(s, P) {
      if (!i(s) || !t.call(s, "_id"))
        throw new TypeError(P + " method called on incompatible receiver " + typeof s);
    }
    function u(s) {
      return s + "_" + h() + "." + h();
    }
    function h() {
      return Math.random().toString().substring(2);
    }
    return r(o, "_polyfill", !0), o;
  })();
  function i(o) {
    return Object(o) === o;
  }
})(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ue);
var W = bt(function(n) {
  (function(e, r, i) {
    r[e] = r[e] || i(), n.exports && (n.exports = r[e]);
  })("Promise", ue, function() {
    var e, r, i, o = Object.prototype.toString, a = typeof setImmediate < "u" ? function(p) {
      return setImmediate(p);
    } : setTimeout;
    try {
      Object.defineProperty({}, "x", {}), e = function(p, f, v, b) {
        return Object.defineProperty(p, f, {
          value: v,
          writable: !0,
          configurable: b !== !1
        });
      };
    } catch {
      e = function(f, v, b) {
        return f[v] = b, f;
      };
    }
    i = /* @__PURE__ */ (function() {
      var p, f, v;
      function b(O, y) {
        this.fn = O, this.self = y, this.next = void 0;
      }
      return {
        add: function(y, V) {
          v = new b(y, V), f ? f.next = v : p = v, f = v, v = void 0;
        },
        drain: function() {
          var y = p;
          for (p = f = r = void 0; y; )
            y.fn.call(y.self), y = y.next;
        }
      };
    })();
    function u(g, p) {
      i.add(g, p), r || (r = a(i.drain));
    }
    function h(g) {
      var p, f = typeof g;
      return g != null && (f == "object" || f == "function") && (p = g.then), typeof p == "function" ? p : !1;
    }
    function s() {
      for (var g = 0; g < this.chain.length; g++)
        P(this, this.state === 1 ? this.chain[g].success : this.chain[g].failure, this.chain[g]);
      this.chain.length = 0;
    }
    function P(g, p, f) {
      var v, b;
      try {
        p === !1 ? f.reject(g.msg) : (p === !0 ? v = g.msg : v = p.call(void 0, g.msg), v === f.promise ? f.reject(TypeError("Promise-chain cycle")) : (b = h(v)) ? b.call(v, f.resolve, f.reject) : f.resolve(v));
      } catch (O) {
        f.reject(O);
      }
    }
    function E(g) {
      var p, f = this;
      if (!f.triggered) {
        f.triggered = !0, f.def && (f = f.def);
        try {
          (p = h(g)) ? u(function() {
            var v = new m(f);
            try {
              p.call(g, function() {
                E.apply(v, arguments);
              }, function() {
                M.apply(v, arguments);
              });
            } catch (b) {
              M.call(v, b);
            }
          }) : (f.msg = g, f.state = 1, f.chain.length > 0 && u(s, f));
        } catch (v) {
          M.call(new m(f), v);
        }
      }
    }
    function M(g) {
      var p = this;
      p.triggered || (p.triggered = !0, p.def && (p = p.def), p.msg = g, p.state = 2, p.chain.length > 0 && u(s, p));
    }
    function T(g, p, f, v) {
      for (var b = 0; b < p.length; b++)
        (function(y) {
          g.resolve(p[y]).then(function(x) {
            f(y, x);
          }, v);
        })(b);
    }
    function m(g) {
      this.def = g, this.triggered = !1;
    }
    function N(g) {
      this.promise = g, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
    }
    function A(g) {
      if (typeof g != "function")
        throw TypeError("Not a function");
      if (this.__NPO__ !== 0)
        throw TypeError("Not a promise");
      this.__NPO__ = 1;
      var p = new N(this);
      this.then = function(v, b) {
        var O = {
          success: typeof v == "function" ? v : !0,
          failure: typeof b == "function" ? b : !1
        };
        return O.promise = new this.constructor(function(V, x) {
          if (typeof V != "function" || typeof x != "function")
            throw TypeError("Not a function");
          O.resolve = V, O.reject = x;
        }), p.chain.push(O), p.state !== 0 && u(s, p), O.promise;
      }, this.catch = function(v) {
        return this.then(void 0, v);
      };
      try {
        g.call(void 0, function(v) {
          E.call(p, v);
        }, function(v) {
          M.call(p, v);
        });
      } catch (f) {
        M.call(p, f);
      }
    }
    var j = e(
      {},
      "constructor",
      A,
      /*configurable=*/
      !1
    );
    return A.prototype = j, e(
      j,
      "__NPO__",
      0,
      /*configurable=*/
      !1
    ), e(A, "resolve", function(p) {
      var f = this;
      return p && typeof p == "object" && p.__NPO__ === 1 ? p : new f(function(b, O) {
        if (typeof b != "function" || typeof O != "function")
          throw TypeError("Not a function");
        b(p);
      });
    }), e(A, "reject", function(p) {
      return new this(function(v, b) {
        if (typeof v != "function" || typeof b != "function")
          throw TypeError("Not a function");
        b(p);
      });
    }), e(A, "all", function(p) {
      var f = this;
      return o.call(p) != "[object Array]" ? f.reject(TypeError("Not an array")) : p.length === 0 ? f.resolve([]) : new f(function(b, O) {
        if (typeof b != "function" || typeof O != "function")
          throw TypeError("Not a function");
        var y = p.length, V = Array(y), x = 0;
        T(f, p, function(c, l) {
          V[c] = l, ++x === y && b(V);
        }, O);
      });
    }), e(A, "race", function(p) {
      var f = this;
      return o.call(p) != "[object Array]" ? f.reject(TypeError("Not an array")) : new f(function(b, O) {
        if (typeof b != "function" || typeof O != "function")
          throw TypeError("Not a function");
        T(f, p, function(V, x) {
          b(x);
        }, O);
      });
    }), A;
  });
}), B = /* @__PURE__ */ new WeakMap();
function ve(n, t, e) {
  var r = B.get(n.element) || {};
  t in r || (r[t] = []), r[t].push(e), B.set(n.element, r);
}
function Pe(n, t) {
  var e = B.get(n.element) || {};
  return e[t] || [];
}
function Te(n, t, e) {
  var r = B.get(n.element) || {};
  if (!r[t])
    return !0;
  if (!e)
    return r[t] = [], B.set(n.element, r), !0;
  var i = r[t].indexOf(e);
  return i !== -1 && r[t].splice(i, 1), B.set(n.element, r), r[t] && r[t].length === 0;
}
function kt(n, t) {
  var e = Pe(n, t);
  if (e.length < 1)
    return !1;
  var r = e.shift();
  return Te(n, t, r), r;
}
function Et(n, t) {
  var e = B.get(n);
  B.set(t, e), B.delete(n);
}
function Me(n) {
  if (typeof n == "string")
    try {
      n = JSON.parse(n);
    } catch (t) {
      return console.warn(t), {};
    }
  return n;
}
function X(n, t, e) {
  if (!(!n.element.contentWindow || !n.element.contentWindow.postMessage)) {
    var r = {
      method: t
    };
    e !== void 0 && (r.value = e);
    var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    i >= 8 && i < 10 && (r = JSON.stringify(r)), n.element.contentWindow.postMessage(r, n.origin);
  }
}
function Pt(n, t) {
  t = Me(t);
  var e = [], r;
  if (t.event) {
    if (t.event === "error") {
      var i = Pe(n, t.data.method);
      i.forEach(function(a) {
        var u = new Error(t.data.message);
        u.name = t.data.name, a.reject(u), Te(n, t.data.method, a);
      });
    }
    e = Pe(n, "event:".concat(t.event)), r = t.data;
  } else if (t.method) {
    var o = kt(n, t.method);
    o && (e.push(o), r = t.value);
  }
  e.forEach(function(a) {
    try {
      if (typeof a == "function") {
        a.call(n, r);
        return;
      }
      a.resolve(r);
    } catch {
    }
  });
}
var Tt = ["airplay", "audio_tracks", "audiotrack", "autopause", "autoplay", "background", "byline", "cc", "chapter_id", "chapters", "chromecast", "color", "colors", "controls", "dnt", "end_time", "fullscreen", "height", "id", "initial_quality", "interactive_params", "keyboard", "loop", "maxheight", "max_quality", "maxwidth", "min_quality", "muted", "play_button_position", "playsinline", "portrait", "preload", "progress_bar", "quality", "quality_selector", "responsive", "skipping_forward", "speed", "start_time", "texttrack", "thumbnail_id", "title", "transcript", "transparent", "unmute_button", "url", "vimeo_logo", "volume", "watch_full_video", "width"];
function et(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Tt.reduce(function(e, r) {
    var i = n.getAttribute("data-vimeo-".concat(r));
    return (i || i === "") && (e[r] = i === "" ? 1 : i), e;
  }, t);
}
function je(n, t) {
  var e = n.html;
  if (!t)
    throw new TypeError("An element must be provided");
  if (t.getAttribute("data-vimeo-initialized") !== null)
    return t.querySelector("iframe");
  var r = document.createElement("div");
  return r.innerHTML = e, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe");
}
function tt(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function(r, i) {
    if (!ie(n))
      throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
    var o = mt(n), a = "https://".concat(o, "/api/oembed.json?url=").concat(encodeURIComponent(n));
    for (var u in t)
      t.hasOwnProperty(u) && (a += "&".concat(u, "=").concat(encodeURIComponent(t[u])));
    var h = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    h.open("GET", a, !0), h.onload = function() {
      if (h.status === 404) {
        i(new Error("“".concat(n, "” was not found.")));
        return;
      }
      if (h.status === 403) {
        i(new Error("“".concat(n, "” is not embeddable.")));
        return;
      }
      try {
        var s = JSON.parse(h.responseText);
        if (s.domain_status_code === 403) {
          je(s, e), i(new Error("“".concat(n, "” is not embeddable.")));
          return;
        }
        r(s);
      } catch (P) {
        i(P);
      }
    }, h.onerror = function() {
      var s = h.status ? " (".concat(h.status, ")") : "";
      i(new Error("There was an error fetching the embed code from Vimeo".concat(s, ".")));
    }, h.send();
  });
}
function Mt() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, t = [].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), e = function(i) {
    "console" in window && console.error && console.error("There was an error creating an embed: ".concat(i));
  };
  t.forEach(function(r) {
    try {
      if (r.getAttribute("data-vimeo-defer") !== null)
        return;
      var i = et(r), o = Ze(i);
      tt(o, i, r).then(function(a) {
        return je(a, r);
      }).catch(e);
    } catch (a) {
      e(a);
    }
  });
}
function St() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var t = function(r) {
      if (ie(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
        for (var i = n.querySelectorAll("iframe"), o = 0; o < i.length; o++)
          if (i[o].contentWindow === r.source) {
            var a = i[o].parentElement;
            a.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
            break;
          }
      }
    };
    window.addEventListener("message", t);
  }
}
function Ot() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var t = function(r) {
      if (ie(r.origin)) {
        var i = Me(r.data);
        if (!(!i || i.event !== "ready"))
          for (var o = n.querySelectorAll("iframe"), a = 0; a < o.length; a++) {
            var u = o[a], h = u.contentWindow === r.source;
            if (Ke(u.src) && h) {
              var s = new Ie(u);
              s.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    };
    window.addEventListener("message", t);
  }
}
function Ct() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var t = function(i) {
      "console" in window && console.error && console.error("There was an error getting video Id: ".concat(i));
    }, e = function(i) {
      if (ie(i.origin)) {
        var o = Me(i.data);
        if (!(!o || o.event !== "ready"))
          for (var a = n.querySelectorAll("iframe"), u = function() {
            var P = a[h], E = P.contentWindow === i.source;
            if (Ke(P.src) && E) {
              var M = new Ie(P);
              M.getVideoId().then(function(T) {
                var m = new RegExp("[?&]vimeo_t_".concat(T, "=([^&#]*)")).exec(window.location.href);
                if (m && m[1]) {
                  var N = decodeURI(m[1]);
                  M.setCurrentTime(N);
                }
              }).catch(t);
            }
          }, h = 0; h < a.length; h++)
            u();
      }
    };
    window.addEventListener("message", e);
  }
}
function _t() {
  var n = (function() {
    for (var r, i = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // New WebKit
      ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
      // Old WebKit
      ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
      ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ], o = 0, a = i.length, u = {}; o < a; o++)
      if (r = i[o], r && r[1] in document) {
        for (o = 0; o < r.length; o++)
          u[i[0][o]] = r[o];
        return u;
      }
    return !1;
  })(), t = {
    fullscreenchange: n.fullscreenchange,
    fullscreenerror: n.fullscreenerror
  }, e = {
    request: function(i) {
      return new Promise(function(o, a) {
        var u = function s() {
          e.off("fullscreenchange", s), o();
        };
        e.on("fullscreenchange", u), i = i || document.documentElement;
        var h = i[n.requestFullscreen]();
        h instanceof Promise && h.then(u).catch(a);
      });
    },
    exit: function() {
      return new Promise(function(i, o) {
        if (!e.isFullscreen) {
          i();
          return;
        }
        var a = function h() {
          e.off("fullscreenchange", h), i();
        };
        e.on("fullscreenchange", a);
        var u = document[n.exitFullscreen]();
        u instanceof Promise && u.then(a).catch(o);
      });
    },
    on: function(i, o) {
      var a = t[i];
      a && document.addEventListener(a, o);
    },
    off: function(i, o) {
      var a = t[i];
      a && document.removeEventListener(a, o);
    }
  };
  return Object.defineProperties(e, {
    isFullscreen: {
      get: function() {
        return !!document[n.fullscreenElement];
      }
    },
    element: {
      enumerable: !0,
      get: function() {
        return document[n.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: !0,
      get: function() {
        return !!document[n.fullscreenEnabled];
      }
    }
  }), e;
}
var At = {
  role: "viewer",
  autoPlayMuted: !0,
  allowedDrift: 0.3,
  maxAllowedDrift: 1,
  minCheckInterval: 0.1,
  maxRateAdjustment: 0.2,
  maxTimeToCatchUp: 1
}, Nt = /* @__PURE__ */ (function(n) {
  ct(e, n);
  var t = dt(e);
  function e(r, i) {
    var o, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
    return Ue(this, e), o = t.call(this), be(Ee(o), "logger", void 0), be(Ee(o), "speedAdjustment", 0), be(Ee(o), "adjustSpeed", /* @__PURE__ */ (function() {
      var h = K(/* @__PURE__ */ I().mark(function s(P, E) {
        var M;
        return I().wrap(function(m) {
          for (; ; ) switch (m.prev = m.next) {
            case 0:
              if (o.speedAdjustment !== E) {
                m.next = 2;
                break;
              }
              return m.abrupt("return");
            case 2:
              return m.next = 4, P.getPlaybackRate();
            case 4:
              return m.t0 = m.sent, m.t1 = o.speedAdjustment, m.t2 = m.t0 - m.t1, m.t3 = E, M = m.t2 + m.t3, o.log("New playbackRate:  ".concat(M)), m.next = 12, P.setPlaybackRate(M);
            case 12:
              o.speedAdjustment = E;
            case 13:
            case "end":
              return m.stop();
          }
        }, s);
      }));
      return function(s, P) {
        return h.apply(this, arguments);
      };
    })()), o.logger = u, o.init(i, r, Ve(Ve({}, At), a)), o;
  }
  return Qe(e, [{
    key: "disconnect",
    value: function() {
      this.dispatchEvent(new Event("disconnect"));
    }
    /**
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */
  }, {
    key: "init",
    value: (function() {
      var r = K(/* @__PURE__ */ I().mark(function o(a, u, h) {
        var s = this, P, E, M;
        return I().wrap(function(m) {
          for (; ; ) switch (m.prev = m.next) {
            case 0:
              return m.next = 2, this.waitForTOReadyState(a, "open");
            case 2:
              if (h.role !== "viewer") {
                m.next = 10;
                break;
              }
              return m.next = 5, this.updatePlayer(a, u, h);
            case 5:
              P = xe(a, "change", function() {
                return s.updatePlayer(a, u, h);
              }), E = this.maintainPlaybackPosition(a, u, h), this.addEventListener("disconnect", function() {
                E.cancel(), P.cancel();
              }), m.next = 14;
              break;
            case 10:
              return m.next = 12, this.updateTimingObject(a, u);
            case 12:
              M = xe(u, ["seeked", "play", "pause", "ratechange"], function() {
                return s.updateTimingObject(a, u);
              }, "on", "off"), this.addEventListener("disconnect", function() {
                return M.cancel();
              });
            case 14:
            case "end":
              return m.stop();
          }
        }, o, this);
      }));
      function i(o, a, u) {
        return r.apply(this, arguments);
      }
      return i;
    })()
    /**
     * Sets the TimingObject's state to reflect that of the player
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @return {Promise<void>}
     */
  }, {
    key: "updateTimingObject",
    value: (function() {
      var r = K(/* @__PURE__ */ I().mark(function o(a, u) {
        return I().wrap(function(s) {
          for (; ; ) switch (s.prev = s.next) {
            case 0:
              return s.t0 = a, s.next = 3, u.getCurrentTime();
            case 3:
              return s.t1 = s.sent, s.next = 6, u.getPaused();
            case 6:
              if (!s.sent) {
                s.next = 10;
                break;
              }
              s.t2 = 0, s.next = 13;
              break;
            case 10:
              return s.next = 12, u.getPlaybackRate();
            case 12:
              s.t2 = s.sent;
            case 13:
              s.t3 = s.t2, s.t4 = {
                position: s.t1,
                velocity: s.t3
              }, s.t0.update.call(s.t0, s.t4);
            case 16:
            case "end":
              return s.stop();
          }
        }, o);
      }));
      function i(o, a) {
        return r.apply(this, arguments);
      }
      return i;
    })()
    /**
     * Sets the player's timing state to reflect that of the TimingObject
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */
  }, {
    key: "updatePlayer",
    value: (function() {
      var r = K(/* @__PURE__ */ I().mark(function o(a, u, h) {
        var s, P, E;
        return I().wrap(function(T) {
          for (; ; ) switch (T.prev = T.next) {
            case 0:
              if (s = a.query(), P = s.position, E = s.velocity, typeof P == "number" && u.setCurrentTime(P), typeof E != "number") {
                T.next = 25;
                break;
              }
              if (E !== 0) {
                T.next = 11;
                break;
              }
              return T.next = 6, u.getPaused();
            case 6:
              if (T.t0 = T.sent, T.t0 !== !1) {
                T.next = 9;
                break;
              }
              u.pause();
            case 9:
              T.next = 25;
              break;
            case 11:
              if (!(E > 0)) {
                T.next = 25;
                break;
              }
              return T.next = 14, u.getPaused();
            case 14:
              if (T.t1 = T.sent, T.t1 !== !0) {
                T.next = 19;
                break;
              }
              return T.next = 18, u.play().catch(/* @__PURE__ */ (function() {
                var m = K(/* @__PURE__ */ I().mark(function N(A) {
                  return I().wrap(function(g) {
                    for (; ; ) switch (g.prev = g.next) {
                      case 0:
                        if (!(A.name === "NotAllowedError" && h.autoPlayMuted)) {
                          g.next = 5;
                          break;
                        }
                        return g.next = 3, u.setMuted(!0);
                      case 3:
                        return g.next = 5, u.play().catch(function(p) {
                          return console.error("Couldn't play the video from TimingSrcConnector. Error:", p);
                        });
                      case 5:
                      case "end":
                        return g.stop();
                    }
                  }, N);
                }));
                return function(N) {
                  return m.apply(this, arguments);
                };
              })());
            case 18:
              this.updatePlayer(a, u, h);
            case 19:
              return T.next = 21, u.getPlaybackRate();
            case 21:
              if (T.t2 = T.sent, T.t3 = E, T.t2 === T.t3) {
                T.next = 25;
                break;
              }
              u.setPlaybackRate(E);
            case 25:
            case "end":
              return T.stop();
          }
        }, o, this);
      }));
      function i(o, a, u) {
        return r.apply(this, arguments);
      }
      return i;
    })()
    /**
     * Since video players do not play with 100% time precision, we need to closely monitor
     * our player to be sure it remains in sync with the TimingObject.
     *
     * If out of sync, we use the current conditions and the options provided to determine
     * whether to re-sync via setting currentTime or adjusting the playbackRate
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {{cancel: (function(): void)}}
     */
  }, {
    key: "maintainPlaybackPosition",
    value: function(i, o, a) {
      var u = this, h = a.allowedDrift, s = a.maxAllowedDrift, P = a.minCheckInterval, E = a.maxRateAdjustment, M = a.maxTimeToCatchUp, T = Math.min(M, Math.max(P, s)) * 1e3, m = /* @__PURE__ */ (function() {
        var A = K(/* @__PURE__ */ I().mark(function j() {
          var g, p, f, v, b;
          return I().wrap(function(y) {
            for (; ; ) switch (y.prev = y.next) {
              case 0:
                if (y.t0 = i.query().velocity === 0, y.t0) {
                  y.next = 6;
                  break;
                }
                return y.next = 4, o.getPaused();
              case 4:
                y.t1 = y.sent, y.t0 = y.t1 === !0;
              case 6:
                if (!y.t0) {
                  y.next = 8;
                  break;
                }
                return y.abrupt("return");
              case 8:
                return y.t2 = i.query().position, y.next = 11, o.getCurrentTime();
              case 11:
                if (y.t3 = y.sent, g = y.t2 - y.t3, p = Math.abs(g), u.log("Drift: ".concat(g)), !(p > s)) {
                  y.next = 22;
                  break;
                }
                return y.next = 18, u.adjustSpeed(o, 0);
              case 18:
                o.setCurrentTime(i.query().position), u.log("Resync by currentTime"), y.next = 29;
                break;
              case 22:
                if (!(p > h)) {
                  y.next = 29;
                  break;
                }
                return f = p / M, v = E, b = f < v ? (v - f) / 2 : v, y.next = 28, u.adjustSpeed(o, b * Math.sign(g));
              case 28:
                u.log("Resync by playbackRate");
              case 29:
              case "end":
                return y.stop();
            }
          }, j);
        }));
        return function() {
          return A.apply(this, arguments);
        };
      })(), N = setInterval(function() {
        return m();
      }, T);
      return {
        cancel: function() {
          return clearInterval(N);
        }
      };
    }
    /**
     * @param {string} msg
     */
  }, {
    key: "log",
    value: function(i) {
      var o;
      (o = this.logger) === null || o === void 0 || o.call(this, "TimingSrcConnector: ".concat(i));
    }
  }, {
    key: "waitForTOReadyState",
    value: (
      /**
       * @param {TimingObject} timingObject
       * @param {TConnectionState} state
       * @return {Promise<void>}
       */
      (function(i, o) {
        return new Promise(function(a) {
          var u = function h() {
            i.readyState === o ? a() : i.addEventListener("readystatechange", h, {
              once: !0
            });
          };
          u();
        });
      })
    )
  }]), e;
})(/* @__PURE__ */ Le(EventTarget)), ae = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), F = {}, Ie = /* @__PURE__ */ (function() {
  function n(t) {
    var e = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Ue(this, n), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), typeof document < "u" && typeof t == "string" && (t = document.getElementById(t)), !vt(t))
      throw new TypeError("You must pass either a valid element or a valid id.");
    if (t.nodeName !== "IFRAME") {
      var i = t.querySelector("iframe");
      i && (t = i);
    }
    if (t.nodeName === "IFRAME" && !ie(t.getAttribute("src") || ""))
      throw new Error("The player element passed isn’t a Vimeo embed.");
    if (ae.has(t))
      return ae.get(t);
    this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*";
    var o = new W(function(u, h) {
      if (e._onMessage = function(E) {
        if (!(!ie(E.origin) || e.element.contentWindow !== E.source)) {
          e.origin === "*" && (e.origin = E.origin);
          var M = Me(E.data), T = M && M.event === "error", m = T && M.data && M.data.method === "ready";
          if (m) {
            var N = new Error(M.data.message);
            N.name = M.data.name, h(N);
            return;
          }
          var A = M && M.event === "ready", j = M && M.method === "ping";
          if (A || j) {
            e.element.setAttribute("data-ready", "true"), u();
            return;
          }
          Pt(e, M);
        }
      }, e._window.addEventListener("message", e._onMessage), e.element.nodeName !== "IFRAME") {
        var s = et(t, r), P = Ze(s);
        tt(P, s, t).then(function(E) {
          var M = je(E, t);
          return e.element = M, e._originalElement = t, Et(t, M), ae.set(e.element, e), E;
        }).catch(h);
      }
    });
    if (_e.set(this, o), ae.set(this.element, this), this.element.nodeName === "IFRAME" && X(this, "ping"), F.isEnabled) {
      var a = function() {
        return F.exit();
      };
      this.fullscreenchangeHandler = function() {
        F.isFullscreen ? ve(e, "event:exitFullscreen", a) : Te(e, "event:exitFullscreen", a), e.ready().then(function() {
          X(e, "fullscreenchange", F.isFullscreen);
        });
      }, F.on("fullscreenchange", this.fullscreenchangeHandler);
    }
    return this;
  }
  return Qe(n, [{
    key: "callMethod",
    value: function(e) {
      for (var r = this, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
        o[a - 1] = arguments[a];
      if (e == null)
        throw new TypeError("You must pass a method name.");
      return new W(function(u, h) {
        return r.ready().then(function() {
          ve(r, e, {
            resolve: u,
            reject: h
          }), X(r, e, o);
        }).catch(h);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */
  }, {
    key: "get",
    value: function(e) {
      var r = this;
      return new W(function(i, o) {
        return e = De(e, "get"), r.ready().then(function() {
          ve(r, e, {
            resolve: i,
            reject: o
          }), X(r, e);
        }).catch(o);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */
  }, {
    key: "set",
    value: function(e, r) {
      var i = this;
      return new W(function(o, a) {
        if (e = De(e, "set"), r == null)
          throw new TypeError("There must be a value to set.");
        return i.ready().then(function() {
          ve(i, e, {
            resolve: o,
            reject: a
          }), X(i, e, r);
        }).catch(a);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */
  }, {
    key: "on",
    value: function(e, r) {
      if (!e)
        throw new TypeError("You must pass an event name.");
      if (!r)
        throw new TypeError("You must pass a callback function.");
      if (typeof r != "function")
        throw new TypeError("The callback must be a function.");
      var i = Pe(this, "event:".concat(e));
      i.length === 0 && this.callMethod("addEventListener", e).catch(function() {
      }), ve(this, "event:".concat(e), r);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */
  }, {
    key: "off",
    value: function(e, r) {
      if (!e)
        throw new TypeError("You must pass an event name.");
      if (r && typeof r != "function")
        throw new TypeError("The callback must be a function.");
      var i = Te(this, "event:".concat(e), r);
      i && this.callMethod("removeEventListener", e).catch(function(o) {
      });
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id or url successfully loaded.
     * @reject {TypeError} The id was not a number.
     */
    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */
  }, {
    key: "loadVideo",
    value: function(e) {
      return this.callMethod("loadVideo", e);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */
    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */
  }, {
    key: "ready",
    value: function() {
      var e = _e.get(this) || new W(function(r, i) {
        i(new Error("Unknown player. Probably unloaded."));
      });
      return W.resolve(e);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */
    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */
  }, {
    key: "addCuePoint",
    value: function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.callMethod("addCuePoint", {
        time: e,
        data: r
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */
    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */
  }, {
    key: "removeCuePoint",
    value: function(e) {
      return this.callMethod("removeCuePoint", e);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */
    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */
    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */
  }, {
    key: "enableTextTrack",
    value: function(e, r) {
      if (!e)
        throw new TypeError("You must pass a language.");
      return this.callMethod("enableTextTrack", {
        language: e,
        kind: r
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */
    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */
  }, {
    key: "disableTextTrack",
    value: function() {
      return this.callMethod("disableTextTrack");
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */
    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */
  }, {
    key: "pause",
    value: function() {
      return this.callMethod("pause");
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */
    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */
  }, {
    key: "play",
    value: function() {
      return this.callMethod("play");
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */
  }, {
    key: "requestFullscreen",
    value: function() {
      return F.isEnabled ? F.request(this.element) : this.callMethod("requestFullscreen");
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */
  }, {
    key: "exitFullscreen",
    value: function() {
      return F.isEnabled ? F.exit() : this.callMethod("exitFullscreen");
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */
  }, {
    key: "getFullscreen",
    value: function() {
      return F.isEnabled ? W.resolve(F.isFullscreen) : this.get("fullscreen");
    }
    /**
     * Request that the player enters picture-in-picture.
     * @return {Promise}
     */
  }, {
    key: "requestPictureInPicture",
    value: function() {
      return this.callMethod("requestPictureInPicture");
    }
    /**
     * Request that the player exits picture-in-picture.
     * @return {Promise}
     */
  }, {
    key: "exitPictureInPicture",
    value: function() {
      return this.callMethod("exitPictureInPicture");
    }
    /**
     * Returns true if the player is currently picture-in-picture.
     * @return {Promise}
     */
  }, {
    key: "getPictureInPicture",
    value: function() {
      return this.get("pictureInPicture");
    }
    /**
     * A promise to prompt the viewer to initiate remote playback.
     *
     * @promise RemotePlaybackPromptPromise
     * @fulfill {void}
     * @reject {NotFoundError} No remote playback device is available.
     */
    /**
     * Request to prompt the user to initiate remote playback.
     *
     * @return {RemotePlaybackPromptPromise}
     */
  }, {
    key: "remotePlaybackPrompt",
    value: function() {
      return this.callMethod("remotePlaybackPrompt");
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */
    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */
  }, {
    key: "unload",
    value: function() {
      return this.callMethod("unload");
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */
  }, {
    key: "destroy",
    value: function() {
      var e = this;
      return new W(function(r) {
        if (_e.delete(e), ae.delete(e.element), e._originalElement && (ae.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && e.element.nodeName === "IFRAME" && e.element.parentNode && (e.element.parentNode.parentNode && e._originalElement && e._originalElement !== e.element.parentNode ? e.element.parentNode.parentNode.removeChild(e.element.parentNode) : e.element.parentNode.removeChild(e.element)), e.element && e.element.nodeName === "DIV" && e.element.parentNode) {
          e.element.removeAttribute("data-vimeo-initialized");
          var i = e.element.querySelector("iframe");
          i && i.parentNode && (i.parentNode.parentNode && e._originalElement && e._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i));
        }
        e._window.removeEventListener("message", e._onMessage), F.isEnabled && F.off("fullscreenchange", e.fullscreenchangeHandler), r();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */
    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */
  }, {
    key: "getAutopause",
    value: function() {
      return this.get("autopause");
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */
    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */
  }, {
    key: "setAutopause",
    value: function(e) {
      return this.set("autopause", e);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */
    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */
  }, {
    key: "getBuffered",
    value: function() {
      return this.get("buffered");
    }
    /**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */
    /**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     */
    /**
     * For 360° videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */
  }, {
    key: "getCameraProps",
    value: function() {
      return this.get("cameraProps");
    }
    /**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     */
    /**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */
  }, {
    key: "setCameraProps",
    value: function(e) {
      return this.set("cameraProps", e);
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */
    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */
    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */
  }, {
    key: "getChapters",
    value: function() {
      return this.get("chapters");
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */
    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */
  }, {
    key: "getCurrentChapter",
    value: function() {
      return this.get("currentChapter");
    }
    /**
     * A promise to get the accent color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */
    /**
     * Get the accent color for this player. Note this is deprecated in place of `getColorTwo`.
     *
     * @return {GetColorPromise}
     */
  }, {
    key: "getColor",
    value: function() {
      return this.get("color");
    }
    /**
     * A promise to get all colors for the player in an array.
     *
     * @promise GetColorsPromise
     * @fulfill {string[]} The hex colors of the player.
     */
    /**
     * Get all the colors for this player in an array: [colorOne, colorTwo, colorThree, colorFour]
     *
     * @return {GetColorPromise}
     */
  }, {
    key: "getColors",
    value: function() {
      return W.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")]);
    }
    /**
     * A promise to set the accent color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */
    /**
     * Set the accent color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * Note this is deprecated in place of `setColorTwo`.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */
  }, {
    key: "setColor",
    value: function(e) {
      return this.set("color", e);
    }
    /**
     * A promise to set all colors for the player.
     *
     * @promise SetColorsPromise
     * @fulfill {string[]} The colors were successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */
    /**
     * Set the colors of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
     * If a color should not be set, the index in the array can be left as null.
     *
     * @param {string[]} colors Array of the hex or rgb color strings to set.
     * @return {SetColorsPromise}
     */
  }, {
    key: "setColors",
    value: function(e) {
      if (!Array.isArray(e))
        return new W(function(o, a) {
          return a(new TypeError("Argument must be an array."));
        });
      var r = new W(function(o) {
        return o(null);
      }), i = [e[0] ? this.set("colorOne", e[0]) : r, e[1] ? this.set("colorTwo", e[1]) : r, e[2] ? this.set("colorThree", e[2]) : r, e[3] ? this.set("colorFour", e[3]) : r];
      return W.all(i);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */
    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */
    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */
  }, {
    key: "getCuePoints",
    value: function() {
      return this.get("cuePoints");
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */
    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */
  }, {
    key: "getCurrentTime",
    value: function() {
      return this.get("currentTime");
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */
    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */
  }, {
    key: "setCurrentTime",
    value: function(e) {
      return this.set("currentTime", e);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */
    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */
  }, {
    key: "getDuration",
    value: function() {
      return this.get("duration");
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */
    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */
  }, {
    key: "getEnded",
    value: function() {
      return this.get("ended");
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */
    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */
  }, {
    key: "getLoop",
    value: function() {
      return this.get("loop");
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */
    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */
  }, {
    key: "setLoop",
    value: function(e) {
      return this.set("loop", e);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */
    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */
  }, {
    key: "setMuted",
    value: function(e) {
      return this.set("muted", e);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */
    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */
  }, {
    key: "getMuted",
    value: function() {
      return this.get("muted");
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */
    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */
  }, {
    key: "getPaused",
    value: function() {
      return this.get("paused");
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0 to 2.
     */
    /**
     * Get the playback rate of the player on a scale from `0` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */
  }, {
    key: "getPlaybackRate",
    value: function() {
      return this.get("playbackRate");
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0 or greater than 2.
     */
    /**
     * Set the playback rate of the player on a scale from `0` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */
  }, {
    key: "setPlaybackRate",
    value: function(e) {
      return this.set("playbackRate", e);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */
    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */
  }, {
    key: "getPlayed",
    value: function() {
      return this.get("played");
    }
    /**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     */
    /**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */
  }, {
    key: "getQualities",
    value: function() {
      return this.get("qualities");
    }
    /**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     */
    /**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */
  }, {
    key: "getQuality",
    value: function() {
      return this.get("quality");
    }
    /**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     */
    /**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */
  }, {
    key: "setQuality",
    value: function(e) {
      return this.set("quality", e);
    }
    /**
     * A promise to get the remote playback availability.
     *
     * @promise RemotePlaybackAvailabilityPromise
     * @fulfill {boolean} Whether remote playback is available.
     */
    /**
     * Get the availability of remote playback.
     *
     * @return {RemotePlaybackAvailabilityPromise}
     */
  }, {
    key: "getRemotePlaybackAvailability",
    value: function() {
      return this.get("remotePlaybackAvailability");
    }
    /**
     * A promise to get the current remote playback state.
     *
     * @promise RemotePlaybackStatePromise
     * @fulfill {string} The state of the remote playback: connecting, connected, or disconnected.
     */
    /**
     * Get the current remote playback state.
     *
     * @return {RemotePlaybackStatePromise}
     */
  }, {
    key: "getRemotePlaybackState",
    value: function() {
      return this.get("remotePlaybackState");
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */
    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */
  }, {
    key: "getSeekable",
    value: function() {
      return this.get("seekable");
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */
    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */
  }, {
    key: "getSeeking",
    value: function() {
      return this.get("seeking");
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */
    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */
  }, {
    key: "getTextTracks",
    value: function() {
      return this.get("textTracks");
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */
    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */
  }, {
    key: "getVideoEmbedCode",
    value: function() {
      return this.get("videoEmbedCode");
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */
    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */
  }, {
    key: "getVideoId",
    value: function() {
      return this.get("videoId");
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */
    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */
  }, {
    key: "getVideoTitle",
    value: function() {
      return this.get("videoTitle");
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */
    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */
  }, {
    key: "getVideoWidth",
    value: function() {
      return this.get("videoWidth");
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */
    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */
  }, {
    key: "getVideoHeight",
    value: function() {
      return this.get("videoHeight");
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */
    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */
  }, {
    key: "getVideoUrl",
    value: function() {
      return this.get("videoUrl");
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */
    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */
  }, {
    key: "getVolume",
    value: function() {
      return this.get("volume");
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */
    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */
  }, {
    key: "setVolume",
    value: function(e) {
      return this.set("volume", e);
    }
    /** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject */
    /** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
    /** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector */
    /**
     * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
     *
     * @param {TimingObject} timingObject
     * @param {TimingSrcConnectorOptions} options
     *
     * @return {Promise<TimingSrcConnector>}
     */
  }, {
    key: "setTimingSrc",
    value: (function() {
      var t = K(/* @__PURE__ */ I().mark(function r(i, o) {
        var a = this, u;
        return I().wrap(function(s) {
          for (; ; ) switch (s.prev = s.next) {
            case 0:
              if (i) {
                s.next = 2;
                break;
              }
              throw new TypeError("A Timing Object must be provided.");
            case 2:
              return s.next = 4, this.ready();
            case 4:
              return u = new Nt(this, i, o), X(this, "notifyTimingObjectConnect"), u.addEventListener("disconnect", function() {
                return X(a, "notifyTimingObjectDisconnect");
              }), s.abrupt("return", u);
            case 8:
            case "end":
              return s.stop();
          }
        }, r, this);
      }));
      function e(r, i) {
        return t.apply(this, arguments);
      }
      return e;
    })()
  }]), n;
})();
Xe || (F = _t(), Mt(), St(), Ot(), Ct());
const Rt = "https://player.vimeo.com/video", Lt = "https://vimeo.com/event", jt = /vimeo\.com\/(video\/|event\/)?(\d+)(?:\/([\w-]+))?/;
function We(n, t = {}) {
  var e;
  const r = {
    src: It(n, t),
    frameborder: 0,
    width: "100%",
    height: "100%",
    allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
  };
  return t.config && (r["data-config"] = JSON.stringify(t.config)), (e = t.config) != null && e.referrerpolicy && (r.referrerpolicy = t.config.referrerpolicy), /*html*/
  `
    <style>
      :host {
        display: inline-block;
        min-width: 300px;
        min-height: 150px;
        position: relative;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
      }
      :host(:not([controls])) {
        pointer-events: none;
      }
    </style>
    <iframe${Ft(r)}></iframe>
  `;
}
function It(n, t) {
  if (!n.src) return;
  let e = new URL(n.src);
  const r = n.src.match(jt), i = r?.[1], o = r?.[2], a = e.searchParams.get("h") || r?.[3], u = {
    // ?controls=true is enabled by default in the iframe
    controls: n.controls === "" ? null : 0,
    autoplay: n.autoplay,
    loop: n.loop,
    muted: n.muted,
    playsinline: n.playsinline,
    preload: n.preload ?? "metadata",
    transparent: !1,
    autopause: n.autopause,
    h: a,
    // This param is required when the video is Unlisted.
    ...t.config
  };
  if (i === "event/") {
    const h = a ? `/${a}` : "";
    return delete u.h, `${Lt}/${o}/embed${h}?${He(u)}`;
  }
  return `${Rt}/${o}?${He(u)}`;
}
var Z, se, le, H, G, U, q, ee, te, Q, re, Y, ce, fe, z, ne, we, he, rt, nt;
class ge extends st(globalThis.HTMLElement ?? class {
}) {
  constructor() {
    super();
    L(this, he);
    pe(this, "loadComplete", new Ne());
    L(this, Z);
    L(this, se);
    L(this, le);
    L(this, H, 0);
    L(this, G, NaN);
    L(this, U, !1);
    L(this, q, !this.autoplay);
    L(this, ee, 1);
    L(this, te, 0);
    L(this, Q, 0);
    L(this, re, !1);
    L(this, Y, 1);
    L(this, ce, NaN);
    L(this, fe, NaN);
    L(this, z, null);
    /**  Distinguishes a remount from SSR hydration.
     * See load()
     */
    L(this, ne, !1);
    L(this, we, async () => {
      k(this, Q, 1), this.dispatchEvent(new Event("loadedmetadata")), this.api && (k(this, U, await this.api.getMuted()), k(this, Y, await this.api.getVolume()), this.dispatchEvent(new Event("volumechange")), k(this, G, await this.api.getDuration()), this.dispatchEvent(new Event("durationchange"))), this.dispatchEvent(new Event("loadcomplete")), this.loadComplete.resolve();
    });
    Ce(this, he, nt).call(this, "config");
  }
  requestFullscreen() {
    var e, r;
    return (r = (e = this.api) == null ? void 0 : e.requestFullscreen) == null ? void 0 : r.call(e);
  }
  exitFullscreen() {
    var e, r;
    return (r = (e = this.api) == null ? void 0 : e.exitFullscreen) == null ? void 0 : r.call(e);
  }
  requestPictureInPicture() {
    var e, r;
    return (r = (e = this.api) == null ? void 0 : e.requestPictureInPicture) == null ? void 0 : r.call(e);
  }
  exitPictureInPicture() {
    var e, r;
    return (r = (e = this.api) == null ? void 0 : e.exitPictureInPicture) == null ? void 0 : r.call(e);
  }
  get config() {
    return C(this, z);
  }
  set config(e) {
    JSON.stringify(C(this, z)) !== JSON.stringify(e) && (k(this, z, e), this.load());
  }
  async load() {
    var e;
    if (C(this, Z)) return;
    await k(this, Z, Promise.resolve()), k(this, Z, null), k(this, H, 0), k(this, G, NaN), k(this, U, !1), k(this, q, !this.autoplay), k(this, ee, 1), k(this, te, 0), k(this, Q, 0), k(this, re, !1), k(this, Y, 1), k(this, Q, 0), k(this, ce, NaN), k(this, fe, NaN), this.dispatchEvent(new Event("emptied"));
    let r = this.api;
    if (this.api = null, !this.src)
      return;
    C(this, se) && (this.loadComplete = new Ne()), k(this, se, !0), this.dispatchEvent(new Event("loadstart"));
    const i = {
      autoplay: this.autoplay,
      controls: this.controls,
      loop: this.loop,
      muted: this.defaultMuted,
      playsinline: this.playsInline,
      preload: this.preload ?? "metadata",
      transparent: !1,
      autopause: this.hasAttribute("autopause"),
      ...C(this, z)
    };
    if (C(this, le)) {
      this.api = r, await this.api.loadVideo({
        ...i,
        url: this.src
      }), await C(this, we).call(this), await this.loadComplete;
      return;
    }
    k(this, le, !0), this.shadowRoot || this.attachShadow({ mode: "open" });
    const o = this.shadowRoot.querySelector("iframe");
    o && !C(this, ne) ? C(this, z) || k(this, z, JSON.parse(o.getAttribute("data-config") || "{}")) : this.shadowRoot.innerHTML = We(Vt(this.attributes), this), k(this, ne, !1), (e = r?.destroy) == null || e.call(r);
    const u = this.shadowRoot.querySelector("iframe");
    this.api = new Ie(u), Ce(this, he, rt).call(this), await this.loadComplete;
  }
  connectedCallback() {
    var e;
    C(this, ne) && this.load(), (e = super.connectedCallback) == null || e.call(this);
  }
  disconnectedCallback() {
    var e, r, i;
    k(this, ne, !0), k(this, Z, null), k(this, se, null), k(this, le, null), this.loadComplete = new Ne(), (r = (e = this.api) == null ? void 0 : e.destroy) == null || r.call(e), this.api = null, (i = super.disconnectedCallback) == null || i.call(this);
  }
  async attributeChangedCallback(e, r, i) {
    if (r !== i) {
      switch (e) {
        case "autoplay":
        case "controls":
        case "src": {
          this.load();
          return;
        }
      }
      await this.loadComplete, e === "loop" && this.api.setLoop(this.loop);
    }
  }
  async play() {
    var e;
    k(this, q, !1), this.dispatchEvent(new Event("play")), await this.loadComplete;
    try {
      await ((e = this.api) == null ? void 0 : e.play());
    } catch (r) {
      throw k(this, q, !0), this.dispatchEvent(new Event("pause")), r;
    }
  }
  async pause() {
    var e;
    return await this.loadComplete, (e = this.api) == null ? void 0 : e.pause();
  }
  get ended() {
    return C(this, H) >= C(this, G);
  }
  get seeking() {
    return C(this, re);
  }
  get readyState() {
    return C(this, Q);
  }
  get videoWidth() {
    return C(this, ce);
  }
  get videoHeight() {
    return C(this, fe);
  }
  get src() {
    return this.getAttribute("src");
  }
  set src(e) {
    this.src != e && this.setAttribute("src", e);
  }
  get paused() {
    return C(this, q);
  }
  get duration() {
    return C(this, G);
  }
  get autoplay() {
    return this.hasAttribute("autoplay");
  }
  set autoplay(e) {
    this.autoplay != e && this.toggleAttribute("autoplay", !!e);
  }
  get buffered() {
    return C(this, te) > 0 ? ze(0, C(this, te)) : ze();
  }
  get controls() {
    return this.hasAttribute("controls");
  }
  set controls(e) {
    this.controls != e && this.toggleAttribute("controls", !!e);
  }
  get currentTime() {
    return C(this, H);
  }
  set currentTime(e) {
    this.currentTime != e && (k(this, H, e), this.loadComplete.then(() => {
      var r;
      (r = this.api) == null || r.setCurrentTime(e).catch(() => {
      });
    }));
  }
  get defaultMuted() {
    return this.hasAttribute("muted");
  }
  set defaultMuted(e) {
    this.defaultMuted != e && this.toggleAttribute("muted", !!e);
  }
  get loop() {
    return this.hasAttribute("loop");
  }
  set loop(e) {
    this.loop != e && this.toggleAttribute("loop", !!e);
  }
  get muted() {
    return C(this, U);
  }
  set muted(e) {
    this.muted != e && (k(this, U, e), this.loadComplete.then(() => {
      var r;
      (r = this.api) == null || r.setMuted(e).catch(() => {
      });
    }));
  }
  get playbackRate() {
    return C(this, ee);
  }
  set playbackRate(e) {
    this.playbackRate != e && (k(this, ee, e), this.loadComplete.then(() => {
      var r;
      (r = this.api) == null || r.setPlaybackRate(e).catch(() => {
      });
    }));
  }
  get playsInline() {
    return this.hasAttribute("playsinline");
  }
  set playsInline(e) {
    this.playsInline != e && this.toggleAttribute("playsinline", !!e);
  }
  get poster() {
    return this.getAttribute("poster");
  }
  set poster(e) {
    this.poster != e && this.setAttribute("poster", `${e}`);
  }
  get volume() {
    return C(this, Y);
  }
  set volume(e) {
    this.volume != e && (k(this, Y, e), this.loadComplete.then(() => {
      var r;
      (r = this.api) == null || r.setVolume(e).catch(() => {
      });
    }));
  }
}
Z = new WeakMap(), se = new WeakMap(), le = new WeakMap(), H = new WeakMap(), G = new WeakMap(), U = new WeakMap(), q = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), Q = new WeakMap(), re = new WeakMap(), Y = new WeakMap(), ce = new WeakMap(), fe = new WeakMap(), z = new WeakMap(), ne = new WeakMap(), we = new WeakMap(), he = new WeakSet(), rt = function() {
  const e = document.createElement("video");
  this.textTracks = e.textTracks, this.api.getTextTracks().then((i) => {
    i.forEach((o) => {
      e.addTextTrack(o.kind, o.label, o.language);
    });
  }), this.textTracks.addEventListener("change", () => {
    const i = Array.from(this.textTracks).find((o) => o.mode === "showing");
    i ? this.api.enableTextTrack(i.language, i.kind) : this.api.disableTextTrack();
  });
  const r = () => {
    this.api.off("loaded", r), C(this, we).call(this);
  };
  this.api.on("loaded", r), this.api.on("bufferstart", () => {
    C(this, q) && (k(this, q, !1), this.dispatchEvent(new Event("play"))), this.dispatchEvent(new Event("waiting"));
  }), this.api.on("play", () => {
    C(this, q) && (k(this, q, !1), this.dispatchEvent(new Event("play")));
  }), this.api.on("playing", () => {
    k(this, Q, 3), k(this, q, !1), this.dispatchEvent(new Event("playing"));
  }), this.api.on("seeking", () => {
    k(this, re, !0), this.onSeeking(), this.dispatchEvent(new Event("seeking"));
  }), this.api.on("seeked", async () => {
    k(this, re, !1), k(this, H, await this.api.getCurrentTime().catch(() => C(this, H))), this.dispatchEvent(new Event("seeked"));
  }), this.api.on("pause", () => {
    k(this, q, !0), this.dispatchEvent(new Event("pause"));
  }), this.api.on("ended", () => {
    k(this, q, !0), this.dispatchEvent(new Event("ended"));
  }), this.api.on("ratechange", ({ playbackRate: i }) => {
    k(this, ee, i), this.dispatchEvent(new Event("ratechange"));
  }), this.api.on("volumechange", async ({ volume: i }) => {
    k(this, Y, i), this.api && k(this, U, await this.api.getMuted()), this.dispatchEvent(new Event("volumechange"));
  }), this.api.on("durationchange", ({ duration: i }) => {
    k(this, G, i), this.dispatchEvent(new Event("durationchange"));
  }), this.api.on("timeupdate", ({ seconds: i }) => {
    const o = Math.round(i * 100) / 100;
    k(this, H, o), this.dispatchEvent(new Event("timeupdate"));
  }), this.api.on("progress", ({ seconds: i }) => {
    k(this, te, i), this.dispatchEvent(new Event("progress"));
  }), this.api.on("resize", ({ videoWidth: i, videoHeight: o }) => {
    k(this, ce, i), k(this, fe, o), this.dispatchEvent(new Event("resize"));
  });
}, // This is a pattern to update property values that are set before
// the custom element is upgraded.
// https://web.dev/custom-elements-best-practices/#make-properties-lazy
nt = function(e) {
  if (Object.prototype.hasOwnProperty.call(this, e)) {
    const r = this[e];
    delete this[e], this[e] = r;
  }
}, pe(ge, "getTemplateHTML", We), pe(ge, "shadowRootOptions", { mode: "open" }), pe(ge, "observedAttributes", [
  "autoplay",
  "controls",
  "crossorigin",
  "loop",
  "muted",
  "playsinline",
  "poster",
  "preload",
  "src"
]);
function Ft(n) {
  let t = "";
  for (const e in n) {
    const r = n[e];
    r === "" ? t += ` ${Ae(e)}` : t += ` ${Ae(e)}="${Ae(`${r}`)}"`;
  }
  return t;
}
function Ae(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/`/g, "&#x60;");
}
function He(n) {
  return String(new URLSearchParams(qt(n)));
}
function qt(n) {
  let t = {};
  for (let e in n) {
    let r = n[e];
    r === !0 || r === "" ? t[e] = 1 : r === !1 ? t[e] = 0 : r != null && (t[e] = r);
  }
  return t;
}
function Vt(n) {
  let t = {};
  for (let e of n)
    t[e.name] = e.value;
  return t;
}
class Ne extends Promise {
  constructor(t = () => {
  }) {
    let e, r;
    super((i, o) => {
      t(i, o), e = i, r = o;
    }), this.resolve = e, this.reject = r;
  }
}
function ze(n, t) {
  return Array.isArray(n) ? Re(n) : n == null || t == null || n === 0 && t === 0 ? Re([[0, 0]]) : Re([[n, t]]);
}
function Re(n) {
  return Object.defineProperties(n, {
    start: {
      value: (t) => n[t][0]
    },
    end: {
      value: (t) => n[t][1]
    }
  }), n;
}
globalThis.customElements && !globalThis.customElements.get("vimeo-video") && globalThis.customElements.define("vimeo-video", ge);
var $t = ge, Dt = /* @__PURE__ */ new Set([
  "style",
  "children",
  "ref",
  "key",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "dangerouslySetInnerHTML"
]), xt = {
  className: "class",
  htmlFor: "for"
};
function it(n) {
  return n.toLowerCase();
}
function Be(n) {
  if (typeof n == "boolean") return n ? "" : void 0;
  if (typeof n != "function" && !(typeof n == "object" && n !== null))
    return n;
}
function Wt({
  react: n,
  tagName: t,
  elementClass: e,
  events: r,
  displayName: i,
  defaultProps: o,
  toAttributeName: a = it,
  toAttributeValue: u = Be
}) {
  const h = Number.parseInt(n.version) >= 19, s = n.forwardRef((P, E) => {
    var M, T;
    const m = n.useRef(null), N = n.useRef(/* @__PURE__ */ new Map()), A = {}, j = {}, g = {}, p = {};
    for (const [f, v] of Object.entries(P)) {
      if (Dt.has(f)) {
        g[f] = v;
        continue;
      }
      const b = a(xt[f] ?? f);
      if (e.prototype && f in e.prototype && !(f in (((M = globalThis.HTMLElement) == null ? void 0 : M.prototype) ?? {})) && !((T = e.observedAttributes) != null && T.some((y) => y === b))) {
        p[f] = v;
        continue;
      }
      if (f.startsWith("on")) {
        A[f] = v;
        continue;
      }
      const O = u(v);
      if (b && O != null && (j[b] = String(O), h || (g[b] = O)), b && h) {
        const y = Be(v);
        O !== y ? g[b] = O : g[b] = v;
      }
    }
    if (typeof window < "u") {
      for (const f in A) {
        const v = A[f], b = f.endsWith("Capture"), O = (r?.[f] ?? f.slice(2).toLowerCase()).slice(
          0,
          b ? -7 : void 0
        );
        n.useLayoutEffect(() => {
          const y = m?.current;
          if (!(!y || typeof v != "function"))
            return y.addEventListener(O, v, b), () => {
              y.removeEventListener(O, v, b);
            };
        }, [m?.current, v]);
      }
      n.useLayoutEffect(() => {
        if (m.current === null) return;
        const f = /* @__PURE__ */ new Map();
        for (const v in p)
          Ge(m.current, v, p[v]), N.current.delete(v), f.set(v, p[v]);
        for (const [v, b] of N.current)
          Ge(m.current, v, void 0);
        N.current = f;
      });
    }
    if (typeof window > "u" && e?.getTemplateHTML && e?.shadowRootOptions) {
      const { mode: f, delegatesFocus: v } = e.shadowRootOptions, b = n.createElement("template", {
        shadowrootmode: f,
        shadowrootdelegatesfocus: v,
        dangerouslySetInnerHTML: {
          __html: e.getTemplateHTML(j, P)
        },
        key: "ce-la-react-ssr-template-shadow-root"
      });
      g.children = [b, g.children];
    }
    return n.createElement(t, {
      ...o,
      ...g,
      ref: n.useCallback(
        (f) => {
          m.current = f, typeof E == "function" ? E(f) : E !== null && (E.current = f);
        },
        [E]
      )
    }, g.children);
  });
  return s.displayName = i ?? e.name, s;
}
function Ge(n, t, e) {
  var r;
  n[t] = e, e == null && t in (((r = globalThis.HTMLElement) == null ? void 0 : r.prototype) ?? {}) && n.removeAttribute(t);
}
var Gt = Wt({
  react: ut,
  tagName: "vimeo-video",
  elementClass: $t,
  toAttributeName(n) {
    return n === "muted" ? "" : n === "defaultMuted" ? "muted" : it(n);
  }
});
export {
  Gt as default
};
