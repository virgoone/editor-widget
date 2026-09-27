import { g as Kt } from "./_commonjsHelpers-CqEciG1_.js";
function Cn(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Ue = { exports: {} }, Ee = {};
var xt;
function An() {
  if (xt) return Ee;
  xt = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      s = {};
      for (var a in o)
        a !== "key" && (s[a] = o[a]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: c,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Ee.Fragment = t, Ee.jsx = n, Ee.jsxs = n, Ee;
}
var St;
function On() {
  return St || (St = 1, Ue.exports = An()), Ue.exports;
}
var ko = On(), Ve = { exports: {} }, T = {};
var bt;
function Tn() {
  if (bt) return T;
  bt = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), c = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), i = /* @__PURE__ */ Symbol.for("react.memo"), f = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.activity"), h = Symbol.iterator;
  function v(u) {
    return u === null || typeof u != "object" ? null : (u = h && u[h] || u["@@iterator"], typeof u == "function" ? u : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, p = Object.assign, b = {};
  function g(u, x, M) {
    this.props = u, this.context = x, this.refs = b, this.updater = M || S;
  }
  g.prototype.isReactComponent = {}, g.prototype.setState = function(u, x) {
    if (typeof u != "object" && typeof u != "function" && u != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, u, x, "setState");
  }, g.prototype.forceUpdate = function(u) {
    this.updater.enqueueForceUpdate(this, u, "forceUpdate");
  };
  function y() {
  }
  y.prototype = g.prototype;
  function E(u, x, M) {
    this.props = u, this.context = x, this.refs = b, this.updater = M || S;
  }
  var m = E.prototype = new y();
  m.constructor = E, p(m, g.prototype), m.isPureReactComponent = !0;
  var R = Array.isArray;
  function _() {
  }
  var w = { H: null, A: null, T: null, S: null }, O = Object.prototype.hasOwnProperty;
  function k(u, x, M) {
    var P = M.ref;
    return {
      $$typeof: e,
      type: u,
      key: x,
      ref: P !== void 0 ? P : null,
      props: M
    };
  }
  function A(u, x) {
    return k(u.type, x, u.props);
  }
  function D(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }
  function L(u) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + u.replace(/[=:]/g, function(M) {
      return x[M];
    });
  }
  var I = /\/+/g;
  function $(u, x) {
    return typeof u == "object" && u !== null && u.key != null ? L("" + u.key) : x.toString(36);
  }
  function X(u) {
    switch (u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw u.reason;
      default:
        switch (typeof u.status == "string" ? u.then(_, _) : (u.status = "pending", u.then(
          function(x) {
            u.status === "pending" && (u.status = "fulfilled", u.value = x);
          },
          function(x) {
            u.status === "pending" && (u.status = "rejected", u.reason = x);
          }
        )), u.status) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw u.reason;
        }
    }
    throw u;
  }
  function B(u, x, M, P, N) {
    var j = typeof u;
    (j === "undefined" || j === "boolean") && (u = null);
    var W = !1;
    if (u === null) W = !0;
    else
      switch (j) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (u.$$typeof) {
            case e:
            case t:
              W = !0;
              break;
            case f:
              return W = u._init, B(
                W(u._payload),
                x,
                M,
                P,
                N
              );
          }
      }
    if (W)
      return N = N(u), W = P === "" ? "." + $(u, 0) : P, R(N) ? (M = "", W != null && (M = W.replace(I, "$&/") + "/"), B(N, x, M, "", function(_n) {
        return _n;
      })) : N != null && (D(N) && (N = A(
        N,
        M + (N.key == null || u && u.key === N.key ? "" : ("" + N.key).replace(
          I,
          "$&/"
        ) + "/") + W
      )), x.push(N)), 1;
    W = 0;
    var K = P === "" ? "." : P + ":";
    if (R(u))
      for (var U = 0; U < u.length; U++)
        P = u[U], j = K + $(P, U), W += B(
          P,
          x,
          M,
          j,
          N
        );
    else if (U = v(u), typeof U == "function")
      for (u = U.call(u), U = 0; !(P = u.next()).done; )
        P = P.value, j = K + $(P, U++), W += B(
          P,
          x,
          M,
          j,
          N
        );
    else if (j === "object") {
      if (typeof u.then == "function")
        return B(
          X(u),
          x,
          M,
          P,
          N
        );
      throw x = String(u), Error(
        "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return W;
  }
  function F(u, x, M) {
    if (u == null) return u;
    var P = [], N = 0;
    return B(u, P, "", "", function(j) {
      return x.call(M, j, N++);
    }), P;
  }
  function H(u) {
    if (u._status === -1) {
      var x = u._result;
      x = x(), x.then(
        function(M) {
          (u._status === 0 || u._status === -1) && (u._status = 1, u._result = M);
        },
        function(M) {
          (u._status === 0 || u._status === -1) && (u._status = 2, u._result = M);
        }
      ), u._status === -1 && (u._status = 0, u._result = x);
    }
    if (u._status === 1) return u._result.default;
    throw u._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(u) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var x = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof u == "object" && u !== null && typeof u.message == "string" ? String(u.message) : String(u),
        error: u
      });
      if (!window.dispatchEvent(x)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", u);
      return;
    }
    console.error(u);
  }, Z = {
    map: F,
    forEach: function(u, x, M) {
      F(
        u,
        function() {
          x.apply(this, arguments);
        },
        M
      );
    },
    count: function(u) {
      var x = 0;
      return F(u, function() {
        x++;
      }), x;
    },
    toArray: function(u) {
      return F(u, function(x) {
        return x;
      }) || [];
    },
    only: function(u) {
      if (!D(u))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return u;
    }
  };
  return T.Activity = d, T.Children = Z, T.Component = g, T.Fragment = n, T.Profiler = o, T.PureComponent = E, T.StrictMode = r, T.Suspense = l, T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, T.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(u) {
      return w.H.useMemoCache(u);
    }
  }, T.cache = function(u) {
    return function() {
      return u.apply(null, arguments);
    };
  }, T.cacheSignal = function() {
    return null;
  }, T.cloneElement = function(u, x, M) {
    if (u == null)
      throw Error(
        "The argument must be a React element, but you passed " + u + "."
      );
    var P = p({}, u.props), N = u.key;
    if (x != null)
      for (j in x.key !== void 0 && (N = "" + x.key), x)
        !O.call(x, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && x.ref === void 0 || (P[j] = x[j]);
    var j = arguments.length - 2;
    if (j === 1) P.children = M;
    else if (1 < j) {
      for (var W = Array(j), K = 0; K < j; K++)
        W[K] = arguments[K + 2];
      P.children = W;
    }
    return k(u.type, N, P);
  }, T.createContext = function(u) {
    return u = {
      $$typeof: c,
      _currentValue: u,
      _currentValue2: u,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, u.Provider = u, u.Consumer = {
      $$typeof: s,
      _context: u
    }, u;
  }, T.createElement = function(u, x, M) {
    var P, N = {}, j = null;
    if (x != null)
      for (P in x.key !== void 0 && (j = "" + x.key), x)
        O.call(x, P) && P !== "key" && P !== "__self" && P !== "__source" && (N[P] = x[P]);
    var W = arguments.length - 2;
    if (W === 1) N.children = M;
    else if (1 < W) {
      for (var K = Array(W), U = 0; U < W; U++)
        K[U] = arguments[U + 2];
      N.children = K;
    }
    if (u && u.defaultProps)
      for (P in W = u.defaultProps, W)
        N[P] === void 0 && (N[P] = W[P]);
    return k(u, j, N);
  }, T.createRef = function() {
    return { current: null };
  }, T.forwardRef = function(u) {
    return { $$typeof: a, render: u };
  }, T.isValidElement = D, T.lazy = function(u) {
    return {
      $$typeof: f,
      _payload: { _status: -1, _result: u },
      _init: H
    };
  }, T.memo = function(u, x) {
    return {
      $$typeof: i,
      type: u,
      compare: x === void 0 ? null : x
    };
  }, T.startTransition = function(u) {
    var x = w.T, M = {};
    w.T = M;
    try {
      var P = u(), N = w.S;
      N !== null && N(M, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(_, Y);
    } catch (j) {
      Y(j);
    } finally {
      x !== null && M.types !== null && (x.types = M.types), w.T = x;
    }
  }, T.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, T.use = function(u) {
    return w.H.use(u);
  }, T.useActionState = function(u, x, M) {
    return w.H.useActionState(u, x, M);
  }, T.useCallback = function(u, x) {
    return w.H.useCallback(u, x);
  }, T.useContext = function(u) {
    return w.H.useContext(u);
  }, T.useDebugValue = function() {
  }, T.useDeferredValue = function(u, x) {
    return w.H.useDeferredValue(u, x);
  }, T.useEffect = function(u, x) {
    return w.H.useEffect(u, x);
  }, T.useEffectEvent = function(u) {
    return w.H.useEffectEvent(u);
  }, T.useId = function() {
    return w.H.useId();
  }, T.useImperativeHandle = function(u, x, M) {
    return w.H.useImperativeHandle(u, x, M);
  }, T.useInsertionEffect = function(u, x) {
    return w.H.useInsertionEffect(u, x);
  }, T.useLayoutEffect = function(u, x) {
    return w.H.useLayoutEffect(u, x);
  }, T.useMemo = function(u, x) {
    return w.H.useMemo(u, x);
  }, T.useOptimistic = function(u, x) {
    return w.H.useOptimistic(u, x);
  }, T.useReducer = function(u, x, M) {
    return w.H.useReducer(u, x, M);
  }, T.useRef = function(u) {
    return w.H.useRef(u);
  }, T.useState = function(u) {
    return w.H.useState(u);
  }, T.useSyncExternalStore = function(u, x, M) {
    return w.H.useSyncExternalStore(
      u,
      x,
      M
    );
  }, T.useTransition = function() {
    return w.H.useTransition();
  }, T.version = "19.2.7", T;
}
var Rt;
function ht() {
  return Rt || (Rt = 1, Ve.exports = Tn()), Ve.exports;
}
var C = ht();
const Qt = /* @__PURE__ */ Kt(C), Do = /* @__PURE__ */ Cn({
  __proto__: null,
  default: Qt
}, [C]);
var qe = { exports: {} }, z = {};
var _t;
function Pn() {
  if (_t) return z;
  _t = 1;
  var e = ht();
  function t(l) {
    var i = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        i += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + l + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var r = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function s(l, i, f) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: d == null ? null : "" + d,
      children: l,
      containerInfo: i,
      implementation: f
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function a(l, i) {
    if (l === "font") return "";
    if (typeof i == "string")
      return i === "use-credentials" ? i : "";
  }
  return z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, z.createPortal = function(l, i) {
    var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!i || i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11)
      throw Error(t(299));
    return s(l, i, null, f);
  }, z.flushSync = function(l) {
    var i = c.T, f = r.p;
    try {
      if (c.T = null, r.p = 2, l) return l();
    } finally {
      c.T = i, r.p = f, r.d.f();
    }
  }, z.preconnect = function(l, i) {
    typeof l == "string" && (i ? (i = i.crossOrigin, i = typeof i == "string" ? i === "use-credentials" ? i : "" : void 0) : i = null, r.d.C(l, i));
  }, z.prefetchDNS = function(l) {
    typeof l == "string" && r.d.D(l);
  }, z.preinit = function(l, i) {
    if (typeof l == "string" && i && typeof i.as == "string") {
      var f = i.as, d = a(f, i.crossOrigin), h = typeof i.integrity == "string" ? i.integrity : void 0, v = typeof i.fetchPriority == "string" ? i.fetchPriority : void 0;
      f === "style" ? r.d.S(
        l,
        typeof i.precedence == "string" ? i.precedence : void 0,
        {
          crossOrigin: d,
          integrity: h,
          fetchPriority: v
        }
      ) : f === "script" && r.d.X(l, {
        crossOrigin: d,
        integrity: h,
        fetchPriority: v,
        nonce: typeof i.nonce == "string" ? i.nonce : void 0
      });
    }
  }, z.preinitModule = function(l, i) {
    if (typeof l == "string")
      if (typeof i == "object" && i !== null) {
        if (i.as == null || i.as === "script") {
          var f = a(
            i.as,
            i.crossOrigin
          );
          r.d.M(l, {
            crossOrigin: f,
            integrity: typeof i.integrity == "string" ? i.integrity : void 0,
            nonce: typeof i.nonce == "string" ? i.nonce : void 0
          });
        }
      } else i == null && r.d.M(l);
  }, z.preload = function(l, i) {
    if (typeof l == "string" && typeof i == "object" && i !== null && typeof i.as == "string") {
      var f = i.as, d = a(f, i.crossOrigin);
      r.d.L(l, f, {
        crossOrigin: d,
        integrity: typeof i.integrity == "string" ? i.integrity : void 0,
        nonce: typeof i.nonce == "string" ? i.nonce : void 0,
        type: typeof i.type == "string" ? i.type : void 0,
        fetchPriority: typeof i.fetchPriority == "string" ? i.fetchPriority : void 0,
        referrerPolicy: typeof i.referrerPolicy == "string" ? i.referrerPolicy : void 0,
        imageSrcSet: typeof i.imageSrcSet == "string" ? i.imageSrcSet : void 0,
        imageSizes: typeof i.imageSizes == "string" ? i.imageSizes : void 0,
        media: typeof i.media == "string" ? i.media : void 0
      });
    }
  }, z.preloadModule = function(l, i) {
    if (typeof l == "string")
      if (i) {
        var f = a(i.as, i.crossOrigin);
        r.d.m(l, {
          as: typeof i.as == "string" && i.as !== "script" ? i.as : void 0,
          crossOrigin: f,
          integrity: typeof i.integrity == "string" ? i.integrity : void 0
        });
      } else r.d.m(l);
  }, z.requestFormReset = function(l) {
    r.d.r(l);
  }, z.unstable_batchedUpdates = function(l, i) {
    return l(i);
  }, z.useFormState = function(l, i, f) {
    return c.H.useFormState(l, i, f);
  }, z.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, z.version = "19.2.7", z;
}
var Ct;
function Mn() {
  if (Ct) return qe.exports;
  Ct = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), qe.exports = Pn(), qe.exports;
}
var en = Mn();
const Lo = /* @__PURE__ */ Kt(en), re = {};
let kn = 0;
function No(e, t) {
  const n = `atom${++kn}`, r = {
    toString() {
      return (re ? "production" : void 0) !== "production" && this.debugLabel ? n + ":" + this.debugLabel : n;
    }
  };
  return typeof e == "function" ? r.read = e : (r.init = e, r.read = Dn, r.write = Ln), t && (r.write = t), r;
}
function Dn(e) {
  return e(this);
}
function Ln(e, t, n) {
  return t(
    this,
    typeof n == "function" ? n(e(this)) : n
  );
}
const At = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e, it = (e) => "init" in e, Xe = (e) => !!e.write, Ne = /* @__PURE__ */ new WeakMap(), st = (e) => {
  var t;
  return ct(e) && !((t = Ne.get(e)) != null && t[1]);
}, Nn = (e, t) => {
  const n = Ne.get(e);
  if (n)
    n[1] = !0, n[0].forEach((r) => r(t));
  else if ((re ? "production" : void 0) !== "production")
    throw new Error("[Bug] cancelable promise not found");
}, Hn = (e) => {
  if (Ne.has(e))
    return;
  const t = [/* @__PURE__ */ new Set(), !1];
  Ne.set(e, t);
  const n = () => {
    t[1] = !0;
  };
  e.then(n, n), e.onCancel = (r) => {
    t[0].add(r);
  };
}, ct = (e) => typeof e?.then == "function", Ot = (e) => "v" in e || "e" in e, Ce = (e) => {
  if ("e" in e)
    throw e.e;
  if ((re ? "production" : void 0) !== "production" && !("v" in e))
    throw new Error("[Bug] atom state is not initialized");
  return e.v;
}, tn = (e, t, n) => {
  n.p.has(e) || (n.p.add(e), t.then(
    () => {
      n.p.delete(e);
    },
    () => {
      n.p.delete(e);
    }
  ));
}, Tt = (e, t, n, r, o) => {
  var s;
  if ((re ? "production" : void 0) !== "production" && r === t)
    throw new Error("[Bug] atom cannot depend on itself");
  n.d.set(r, o.n), st(n.v) && tn(t, n.v, o), (s = o.m) == null || s.t.add(t), e && jn(e, r, t);
}, xe = () => ({
  D: /* @__PURE__ */ new Map(),
  H: /* @__PURE__ */ new Set(),
  M: /* @__PURE__ */ new Set(),
  L: /* @__PURE__ */ new Set()
}), be = (e, t, n) => {
  e[t].add(n);
}, Pt = (e, t, n) => {
  e.D.has(t) || (e.D.set(t, /* @__PURE__ */ new Set()), be(e, "M", () => {
    var r;
    (r = n.m) == null || r.l.forEach((o) => be(e, "M", o));
  }));
}, jn = (e, t, n) => {
  const r = e.D.get(t);
  r && r.add(n);
}, $n = (e, t) => e.D.get(t), ae = (e) => {
  let t, n = !1;
  const r = (o) => {
    try {
      o();
    } catch (s) {
      n || (t = s, n = !0);
    }
  };
  for (; e.H.size || e.M.size || e.L.size; )
    e.D.clear(), e.H.forEach(r), e.H.clear(), e.M.forEach(r), e.M.clear(), e.L.forEach(r), e.L.clear();
  if (n)
    throw t;
}, nn = (...[e, t, n, r]) => {
  const o = (g, y, E) => {
    const m = "v" in y, R = y.v, _ = st(y.v) ? y.v : null;
    if (ct(E)) {
      Hn(E);
      for (const w of y.d.keys())
        tn(g, E, e(w));
      y.v = E;
    } else
      y.v = E;
    delete y.e, delete y.x, (!m || !Object.is(R, y.v)) && (++y.n, _ && Nn(_, E));
  }, s = (g, y) => {
    var E;
    const m = e(y);
    if (Ot(m) && (m.m && !m.x || Array.from(m.d).every(
      ([A, D]) => (
        // Recursively, read the atom state of the dependency, and
        // check if the atom epoch number is unchanged
        s(g, A).n === D
      )
    )))
      return m;
    m.d.clear();
    let R = !0;
    const _ = (A) => {
      if (At(y, A)) {
        const L = e(A);
        if (!Ot(L))
          if (it(A))
            o(A, L, A.init);
          else
            throw new Error("no atom init");
        return Ce(L);
      }
      const D = s(g, A);
      try {
        return Ce(D);
      } finally {
        if (R)
          Tt(g, y, m, A, D);
        else {
          const L = xe();
          Tt(L, y, m, A, D), d(L, y, m), ae(L);
        }
      }
    };
    let w, O;
    const k = {
      get signal() {
        return w || (w = new AbortController()), w.signal;
      },
      get setSelf() {
        return (re ? "production" : void 0) !== "production" && !Xe(y) && console.warn("setSelf function cannot be used with read-only atom"), !O && Xe(y) && (O = (...A) => {
          if ((re ? "production" : void 0) !== "production" && R && console.warn("setSelf function cannot be called in sync"), !R)
            return f(y, ...A);
        }), O;
      }
    };
    try {
      const A = t(y, _, k);
      if (o(y, m, A), ct(A)) {
        (E = A.onCancel) == null || E.call(A, () => w?.abort());
        const D = () => {
          if (m.m) {
            const L = xe();
            d(L, y, m), ae(L);
          }
        };
        A.then(D, D);
      }
      return m;
    } catch (A) {
      return delete m.v, m.e = A, delete m.x, ++m.n, m;
    } finally {
      R = !1;
    }
  }, c = (g) => Ce(s(void 0, g)), a = (g, y, E) => {
    var m, R;
    const _ = /* @__PURE__ */ new Map();
    for (const w of ((m = E.m) == null ? void 0 : m.t) || []) {
      const O = e(w);
      O.m && _.set(w, O);
    }
    for (const w of E.p)
      _.set(
        w,
        e(w)
      );
    return (R = $n(g, y)) == null || R.forEach((w) => {
      _.set(w, e(w));
    }), _;
  }, l = (g, y, E) => {
    const m = [], R = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set(), w = [[y, E]];
    for (; w.length > 0; ) {
      const [O, k] = w[w.length - 1];
      if (_.has(O)) {
        w.pop();
        continue;
      }
      if (R.has(O)) {
        m.push([O, k, k.n]), _.add(O), k.x = !0, w.pop();
        continue;
      }
      R.add(O);
      for (const [A, D] of a(g, O, k))
        O !== A && !R.has(A) && w.push([A, D]);
    }
    be(g, "H", () => {
      const O = /* @__PURE__ */ new Set([y]);
      for (let k = m.length - 1; k >= 0; --k) {
        const [A, D, L] = m[k];
        let I = !1;
        for (const $ of D.d.keys())
          if ($ !== A && O.has($)) {
            I = !0;
            break;
          }
        I && (s(g, A), d(g, A, D), L !== D.n && (Pt(g, A, D), O.add(A))), delete D.x;
      }
    });
  }, i = (g, y, ...E) => {
    let m = !0;
    const R = (w) => Ce(s(g, w)), _ = (w, ...O) => {
      const k = e(w);
      try {
        if (At(y, w)) {
          if (!it(w))
            throw new Error("atom not writable");
          const A = k.n, D = O[0];
          o(w, k, D), d(g, w, k), A !== k.n && (Pt(g, w, k), l(g, w, k));
          return;
        } else
          return i(g, w, ...O);
      } finally {
        m || ae(g);
      }
    };
    try {
      return n(y, R, _, ...E);
    } finally {
      m = !1;
    }
  }, f = (g, ...y) => {
    const E = xe();
    try {
      return i(E, g, ...y);
    } finally {
      ae(E);
    }
  }, d = (g, y, E) => {
    if (E.m && !st(E.v)) {
      for (const m of E.d.keys())
        E.m.d.has(m) || (h(g, m, e(m)).t.add(y), E.m.d.add(m));
      for (const m of E.m.d || [])
        if (!E.d.has(m)) {
          E.m.d.delete(m);
          const R = v(g, m, e(m));
          R?.t.delete(y);
        }
    }
  }, h = (g, y, E) => {
    if (!E.m) {
      s(g, y);
      for (const m of E.d.keys())
        h(g, m, e(m)).t.add(y);
      if (E.m = {
        l: /* @__PURE__ */ new Set(),
        d: new Set(E.d.keys()),
        t: /* @__PURE__ */ new Set()
      }, Xe(y)) {
        const m = E.m;
        let R;
        const _ = (w, O) => {
          let k = !0;
          R = (...A) => {
            try {
              return i(w, y, ...A);
            } finally {
              k || ae(w);
            }
          };
          try {
            return O();
          } finally {
            k = !1;
          }
        };
        be(g, "L", () => {
          const w = _(
            g,
            () => r(y, (...O) => R(...O))
          );
          w && (m.u = (O) => _(O, w));
        });
      }
    }
    return E.m;
  }, v = (g, y, E) => {
    if (E.m && !E.m.l.size && !Array.from(E.m.t).some((m) => {
      var R;
      return (R = e(m).m) == null ? void 0 : R.d.has(y);
    })) {
      const m = E.m.u;
      m && be(g, "L", () => m(g)), delete E.m;
      for (const R of E.d.keys()) {
        const _ = v(g, R, e(R));
        _?.t.delete(y);
      }
      return;
    }
    return E.m;
  };
  return {
    get: c,
    set: f,
    sub: (g, y) => {
      const E = xe(), m = e(g), _ = h(E, g, m).l;
      return _.add(y), ae(E), () => {
        _.delete(y);
        const w = xe();
        v(w, g, m), ae(w);
      };
    },
    unstable_derive: (g) => nn(...g(e, t, n, r))
  };
}, Wn = (e) => {
  const t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new Set();
  let r, o = 0;
  const s = e.unstable_derive(
    (l, i, f, d) => (r = l, [
      (h) => {
        let v = t.get(h);
        if (!v) {
          const S = l(h);
          v = new Proxy(S, {
            set(p, b, g) {
              return b === "m" && n.add(h), Reflect.set(p, b, g);
            },
            deleteProperty(p, b) {
              return b === "m" && n.delete(h), Reflect.deleteProperty(p, b);
            }
          }), t.set(h, v);
        }
        return v;
      },
      i,
      (h, v, S, ...p) => o ? S(h, ...p) : f(h, v, S, ...p),
      d
    ])
  ), c = s.set;
  return Object.assign(s, {
    // store dev methods (these are tentative and subject to change without notice)
    dev4_get_internal_weak_map: () => ({
      get: (l) => {
        const i = r(l);
        if (i.n !== 0)
          return i;
      }
    }),
    dev4_get_mounted_atoms: () => n,
    dev4_restore_atoms: (l) => {
      c({
        read: () => null,
        write: (f, d) => {
          ++o;
          try {
            for (const [h, v] of l)
              it(h) && d(h, v);
          } finally {
            --o;
          }
        }
      });
    }
  });
}, Bn = () => {
  const e = /* @__PURE__ */ new WeakMap(), n = nn(
    (r) => {
      if ((re ? "production" : void 0) !== "production" && !r)
        throw new Error("Atom is undefined or null");
      let o = e.get(r);
      return o || (o = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 }, e.set(r, o)), o;
    },
    (r, ...o) => r.read(...o),
    (r, ...o) => r.write(...o),
    (r, ...o) => {
      var s;
      return (s = r.onMount) == null ? void 0 : s.call(r, ...o);
    }
  );
  return (re ? "production" : void 0) !== "production" ? Wn(n) : n;
};
let Se;
const In = () => (Se || (Se = Bn(), (re ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = Se), globalThis.__JOTAI_DEFAULT_STORE__ !== Se && console.warn(
  "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
))), Se), rn = {}, Fn = C.createContext(
  void 0
), vt = (e) => {
  const t = C.useContext(Fn);
  return e?.store || t || In();
}, ut = (e) => typeof e?.then == "function", on = (e) => {
  e.status = "pending", e.then(
    (t) => {
      e.status = "fulfilled", e.value = t;
    },
    (t) => {
      e.status = "rejected", e.reason = t;
    }
  );
}, Yn = Qt.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (on(e), e);
}), Ge = /* @__PURE__ */ new WeakMap(), Mt = (e) => {
  let t = Ge.get(e);
  return t || (t = new Promise((n, r) => {
    let o = e;
    const s = (l) => (i) => {
      o === l && n(i);
    }, c = (l) => (i) => {
      o === l && r(i);
    }, a = (l) => {
      "onCancel" in l && typeof l.onCancel == "function" && l.onCancel((i) => {
        if ((rn ? "production" : void 0) !== "production" && i === l)
          throw new Error("[Bug] p is not updated even after cancelation");
        ut(i) ? (Ge.set(i, t), o = i, i.then(s(i), c(i)), a(i)) : n(i);
      });
    };
    e.then(s(e), c(e)), a(e);
  }), Ge.set(e, t)), t;
};
function zn(e, t) {
  const n = vt(t), [[r, o, s], c] = C.useReducer(
    (i) => {
      const f = n.get(e);
      return Object.is(i[0], f) && i[1] === n && i[2] === e ? i : [f, n, e];
    },
    void 0,
    () => [n.get(e), n, e]
  );
  let a = r;
  (o !== n || s !== e) && (c(), a = n.get(e));
  const l = t?.delay;
  if (C.useEffect(() => {
    const i = n.sub(e, () => {
      if (typeof l == "number") {
        const f = n.get(e);
        ut(f) && on(Mt(f)), setTimeout(c, l);
        return;
      }
      c();
    });
    return c(), i;
  }, [n, e, l]), C.useDebugValue(a), ut(a)) {
    const i = Mt(a);
    return Yn(i);
  }
  return a;
}
function Un(e, t) {
  const n = vt(t);
  return C.useCallback(
    (...o) => {
      if ((rn ? "production" : void 0) !== "production" && !("write" in e))
        throw new Error("not writable atom");
      return n.set(e, ...o);
    },
    [n, e]
  );
}
function Ho(e, t) {
  return [
    zn(e, t),
    // We do wrong type assertion here, which results in throwing an error.
    Un(e, t)
  ];
}
const kt = /* @__PURE__ */ new WeakMap();
function jo(e, t) {
  const n = vt(t), r = Vn(n);
  for (const [o, s] of e)
    (!r.has(o) || t?.dangerouslyForceHydrate) && (r.add(o), n.set(o, s));
}
const Vn = (e) => {
  let t = kt.get(e);
  return t || (t = /* @__PURE__ */ new WeakSet(), kt.set(e, t)), t;
};
var Q = function() {
  return Q = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Q.apply(this, arguments);
};
function sn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function $o(e, t, n, r) {
  function o(s) {
    return s instanceof n ? s : new n(function(c) {
      c(s);
    });
  }
  return new (n || (n = Promise))(function(s, c) {
    function a(f) {
      try {
        i(r.next(f));
      } catch (d) {
        c(d);
      }
    }
    function l(f) {
      try {
        i(r.throw(f));
      } catch (d) {
        c(d);
      }
    }
    function i(f) {
      f.done ? s(f.value) : o(f.value).then(a, l);
    }
    i((r = r.apply(e, t || [])).next());
  });
}
function Wo(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return c.next = a(0), c.throw = a(1), c.return = a(2), typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function a(i) {
    return function(f) {
      return l([i, f]);
    };
  }
  function l(i) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; c && (c = 0, i[0] && (n = 0)), n; ) try {
      if (r = 1, o && (s = i[0] & 2 ? o.return : i[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, i[1])).done) return s;
      switch (o = 0, s && (i = [i[0] & 2, s.value]), i[0]) {
        case 0:
        case 1:
          s = i;
          break;
        case 4:
          return n.label++, { value: i[1], done: !1 };
        case 5:
          n.label++, o = i[1], i = [0];
          continue;
        case 7:
          i = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (i[0] === 6 || i[0] === 2)) {
            n = 0;
            continue;
          }
          if (i[0] === 3 && (!s || i[1] > s[0] && i[1] < s[3])) {
            n.label = i[1];
            break;
          }
          if (i[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = i;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(i);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      i = t.call(e, n);
    } catch (f) {
      i = [6, f], o = 0;
    } finally {
      r = s = 0;
    }
    if (i[0] & 5) throw i[1];
    return { value: i[0] ? i[1] : void 0, done: !0 };
  }
}
function qn(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, s = [], c;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) s.push(o.value);
  } catch (a) {
    c = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (c) throw c.error;
    }
  }
  return s;
}
function Bo() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(qn(arguments[t]));
  return e;
}
function Xn(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ke = "right-scroll-bar-position", De = "width-before-scroll-bar", Gn = "with-scroll-bars-hidden", Jn = "--removed-body-scroll-bar-size";
function Je(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zn(e, t) {
  var n = C.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Kn = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Dt = /* @__PURE__ */ new WeakMap();
function Qn(e, t) {
  var n = Zn(null, function(r) {
    return e.forEach(function(o) {
      return Je(o, r);
    });
  });
  return Kn(function() {
    var r = Dt.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), c = n.current;
      o.forEach(function(a) {
        s.has(a) || Je(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Je(a, c);
      });
    }
    Dt.set(n, e);
  }, [e]), n;
}
function er(e) {
  return e;
}
function tr(e, t) {
  t === void 0 && (t = er);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var c = t(s, r);
      return n.push(c), function() {
        n = n.filter(function(a) {
          return a !== c;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var c = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), c = n;
      }
      var l = function() {
        var f = c;
        c = [], f.forEach(s);
      }, i = function() {
        return Promise.resolve().then(l);
      };
      i(), n = {
        push: function(f) {
          c.push(f), i();
        },
        filter: function(f) {
          return c = c.filter(f), n;
        }
      };
    }
  };
  return o;
}
function nr(e) {
  e === void 0 && (e = {});
  var t = tr(null);
  return t.options = Q({ async: !0, ssr: !1 }, e), t;
}
var cn = function(e) {
  var t = e.sideCar, n = sn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Q({}, n));
};
cn.isSideCarExport = !0;
function rr(e, t) {
  return e.useMedium(t), cn;
}
var un = nr(), Ze = function() {
}, Be = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ze,
    onWheelCapture: Ze,
    onTouchMoveCapture: Ze
  }), o = r[0], s = r[1], c = e.forwardProps, a = e.children, l = e.className, i = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, v = e.noRelative, S = e.noIsolation, p = e.inert, b = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, E = e.gapMode, m = sn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, _ = Qn([n, t]), w = Q(Q({}, m), o);
  return C.createElement(
    C.Fragment,
    null,
    f && C.createElement(R, { sideCar: un, removeScrollBar: i, shards: d, noRelative: v, noIsolation: S, inert: p, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: E }),
    c ? C.cloneElement(C.Children.only(a), Q(Q({}, w), { ref: _ })) : C.createElement(y, Q({}, w, { className: l, ref: _ }), a)
  );
});
Be.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Be.classNames = {
  fullWidth: De,
  zeroRight: ke
};
var or = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ir() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = or();
  return t && e.setAttribute("nonce", t), e;
}
function sr(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cr(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ur = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ir()) && (sr(t, n), cr(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ar = function() {
  var e = ur();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, an = function() {
  var e = ar(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, lr = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ke = function(e) {
  return parseInt(e || "", 10) || 0;
}, fr = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ke(n), Ke(r), Ke(o)];
}, dr = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return lr;
  var t = fr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, hr = an(), ge = "data-scroll-locked", vr = function(e, t, n, r) {
  var o = e.left, s = e.top, c = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Gn, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ge, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ke, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(De, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ke, " .").concat(ke, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(De, " .").concat(De, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ge, `] {
    `).concat(Jn, ": ").concat(a, `px;
  }
`);
}, Lt = function() {
  var e = parseInt(document.body.getAttribute(ge) || "0", 10);
  return isFinite(e) ? e : 0;
}, gr = function() {
  C.useEffect(function() {
    return document.body.setAttribute(ge, (Lt() + 1).toString()), function() {
      var e = Lt() - 1;
      e <= 0 ? document.body.removeAttribute(ge) : document.body.setAttribute(ge, e.toString());
    };
  }, []);
}, mr = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  gr();
  var s = C.useMemo(function() {
    return dr(o);
  }, [o]);
  return C.createElement(hr, { styles: vr(s, !t, o, n ? "" : "!important") });
}, at = !1;
if (typeof window < "u")
  try {
    var Ae = Object.defineProperty({}, "passive", {
      get: function() {
        return at = !0, !0;
      }
    });
    window.addEventListener("test", Ae, Ae), window.removeEventListener("test", Ae, Ae);
  } catch {
    at = !1;
  }
var de = at ? { passive: !1 } : !1, pr = function(e) {
  return e.tagName === "TEXTAREA";
}, ln = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !pr(e) && n[t] === "visible")
  );
}, yr = function(e) {
  return ln(e, "overflowY");
}, wr = function(e) {
  return ln(e, "overflowX");
}, Nt = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = fn(e, r);
    if (o) {
      var s = dn(e, r), c = s[1], a = s[2];
      if (c > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Er = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xr = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, fn = function(e, t) {
  return e === "v" ? yr(t) : wr(t);
}, dn = function(e, t) {
  return e === "v" ? Er(t) : xr(t);
}, Sr = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, br = function(e, t, n, r, o) {
  var s = Sr(e, window.getComputedStyle(t).direction), c = s * r, a = n.target, l = t.contains(a), i = !1, f = c > 0, d = 0, h = 0;
  do {
    if (!a)
      break;
    var v = dn(e, a), S = v[0], p = v[1], b = v[2], g = p - b - s * S;
    (S || g) && fn(e, a) && (d += g, h += S);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (i = !0), i;
}, Oe = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ht = function(e) {
  return [e.deltaX, e.deltaY];
}, jt = function(e) {
  return e && "current" in e ? e.current : e;
}, Rr = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _r = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Cr = 0, he = [];
function Ar(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(Cr++)[0], s = C.useState(an)[0], c = C.useRef(e);
  C.useEffect(function() {
    c.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Xn([e.lockRef.current], (e.shards || []).map(jt), !0).filter(Boolean);
      return p.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = C.useCallback(function(p, b) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !c.current.allowPinchZoom;
    var g = Oe(p), y = n.current, E = "deltaX" in p ? p.deltaX : y[0] - g[0], m = "deltaY" in p ? p.deltaY : y[1] - g[1], R, _ = p.target, w = Math.abs(E) > Math.abs(m) ? "h" : "v";
    if ("touches" in p && w === "h" && _.type === "range")
      return !1;
    var O = window.getSelection(), k = O && O.anchorNode, A = k ? k === _ || k.contains(_) : !1;
    if (A)
      return !1;
    var D = Nt(w, _);
    if (!D)
      return !0;
    if (D ? R = w : (R = w === "v" ? "h" : "v", D = Nt(w, _)), !D)
      return !1;
    if (!r.current && "changedTouches" in p && (E || m) && (r.current = R), !R)
      return !0;
    var L = r.current || R;
    return br(L, b, p, L === "h" ? E : m);
  }, []), l = C.useCallback(function(p) {
    var b = p;
    if (!(!he.length || he[he.length - 1] !== s)) {
      var g = "deltaY" in b ? Ht(b) : Oe(b), y = t.current.filter(function(R) {
        return R.name === b.type && (R.target === b.target || b.target === R.shadowParent) && Rr(R.delta, g);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var E = (c.current.shards || []).map(jt).filter(Boolean).filter(function(R) {
          return R.contains(b.target);
        }), m = E.length > 0 ? a(b, E[0]) : !c.current.noIsolation;
        m && b.cancelable && b.preventDefault();
      }
    }
  }, []), i = C.useCallback(function(p, b, g, y) {
    var E = { name: p, delta: b, target: g, should: y, shadowParent: Or(g) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(m) {
        return m !== E;
      });
    }, 1);
  }, []), f = C.useCallback(function(p) {
    n.current = Oe(p), r.current = void 0;
  }, []), d = C.useCallback(function(p) {
    i(p.type, Ht(p), p.target, a(p, e.lockRef.current));
  }, []), h = C.useCallback(function(p) {
    i(p.type, Oe(p), p.target, a(p, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return he.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, de), document.addEventListener("touchmove", l, de), document.addEventListener("touchstart", f, de), function() {
      he = he.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", l, de), document.removeEventListener("touchmove", l, de), document.removeEventListener("touchstart", f, de);
    };
  }, []);
  var v = e.removeScrollBar, S = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    S ? C.createElement(s, { styles: _r(o) }) : null,
    v ? C.createElement(mr, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Or(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Tr = rr(un, Ar);
var Pr = C.forwardRef(function(e, t) {
  return C.createElement(Be, Q({}, e, { ref: t, sideCar: Tr }));
});
Pr.classNames = Be.classNames;
var Mr = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ve = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), Pe = {}, Qe = 0, hn = function(e) {
  return e && (e.host || hn(e.parentNode));
}, kr = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = hn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Dr = function(e, t, n, r) {
  var o = kr(t, Array.isArray(e) ? e : [e]);
  Pe[n] || (Pe[n] = /* @__PURE__ */ new WeakMap());
  var s = Pe[n], c = [], a = /* @__PURE__ */ new Set(), l = new Set(o), i = function(d) {
    !d || a.has(d) || (a.add(d), i(d.parentNode));
  };
  o.forEach(i);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        f(h);
      else
        try {
          var v = h.getAttribute(r), S = v !== null && v !== "false", p = (ve.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          ve.set(h, p), s.set(h, b), c.push(h), p === 1 && S && Te.set(h, !0), b === 1 && h.setAttribute(n, "true"), S || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return f(t), a.clear(), Qe++, function() {
    c.forEach(function(d) {
      var h = ve.get(d) - 1, v = s.get(d) - 1;
      ve.set(d, h), s.set(d, v), h || (Te.has(d) || d.removeAttribute(r), Te.delete(d)), v || d.removeAttribute(n);
    }), Qe--, Qe || (ve = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), Pe = {});
  };
}, Io = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Mr(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Dr(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
const Lr = ["top", "right", "bottom", "left"], ce = Math.min, V = Math.max, He = Math.round, Me = Math.floor, te = (e) => ({
  x: e,
  y: e
}), Nr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function lt(e, t, n) {
  return V(e, ce(t, n));
}
function oe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ie(e) {
  return e.split("-")[0];
}
function ye(e) {
  return e.split("-")[1];
}
function gt(e) {
  return e === "x" ? "y" : "x";
}
function mt(e) {
  return e === "y" ? "height" : "width";
}
function ee(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function pt(e) {
  return gt(ee(e));
}
function Hr(e, t, n) {
  n === void 0 && (n = !1);
  const r = ye(e), o = pt(e), s = mt(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (c = je(c)), [c, je(c)];
}
function jr(e) {
  const t = je(e);
  return [ft(e), t, ft(t)];
}
function ft(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const $t = ["left", "right"], Wt = ["right", "left"], $r = ["top", "bottom"], Wr = ["bottom", "top"];
function Br(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Wt : $t : t ? $t : Wt;
    case "left":
    case "right":
      return t ? $r : Wr;
    default:
      return [];
  }
}
function Ir(e, t, n, r) {
  const o = ye(e);
  let s = Br(ie(e), n === "start", r);
  return o && (s = s.map((c) => c + "-" + o), t && (s = s.concat(s.map(ft)))), s;
}
function je(e) {
  const t = ie(e);
  return Nr[t] + e.slice(t.length);
}
function Fr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vn(e) {
  return typeof e != "number" ? Fr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $e(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Bt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ee(t), c = pt(t), a = mt(c), l = ie(t), i = s === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (ye(t)) {
    case "start":
      v[c] -= h * (n && i ? -1 : 1);
      break;
    case "end":
      v[c] += h * (n && i ? -1 : 1);
      break;
  }
  return v;
}
async function Yr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: c,
    elements: a,
    strategy: l
  } = e, {
    boundary: i = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = oe(t, e), S = vn(v), b = a[h ? d === "floating" ? "reference" : "floating" : d], g = $e(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: i,
    rootBoundary: f,
    strategy: l
  })), y = d === "floating" ? {
    x: r,
    y: o,
    width: c.floating.width,
    height: c.floating.height
  } : c.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), m = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = $e(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: E,
    strategy: l
  }) : y);
  return {
    top: (g.top - R.top + S.top) / m.y,
    bottom: (R.bottom - g.bottom + S.bottom) / m.y,
    left: (g.left - R.left + S.left) / m.x,
    right: (R.right - g.right + S.right) / m.x
  };
}
const zr = 50, Ur = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: c
  } = n, a = c.detectOverflow ? c : {
    ...c,
    detectOverflow: Yr
  }, l = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let i = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Bt(i, r, l), h = r, v = 0;
  const S = {};
  for (let p = 0; p < s.length; p++) {
    const b = s[p];
    if (!b)
      continue;
    const {
      name: g,
      fn: y
    } = b, {
      x: E,
      y: m,
      data: R,
      reset: _
    } = await y({
      x: f,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: S,
      rects: i,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = E ?? f, d = m ?? d, S[g] = {
      ...S[g],
      ...R
    }, _ && v < zr && (v++, typeof _ == "object" && (_.placement && (h = _.placement), _.rects && (i = _.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: f,
      y: d
    } = Bt(i, h, l)), p = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: S
  };
}, Vr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: c,
      elements: a,
      middlewareData: l
    } = t, {
      element: i,
      padding: f = 0
    } = oe(e, t) || {};
    if (i == null)
      return {};
    const d = vn(f), h = {
      x: n,
      y: r
    }, v = pt(o), S = mt(v), p = await c.getDimensions(i), b = v === "y", g = b ? "top" : "left", y = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", m = s.reference[S] + s.reference[v] - h[v] - s.floating[S], R = h[v] - s.reference[v], _ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(i));
    let w = _ ? _[E] : 0;
    (!w || !await (c.isElement == null ? void 0 : c.isElement(_))) && (w = a.floating[E] || s.floating[S]);
    const O = m / 2 - R / 2, k = w / 2 - p[S] / 2 - 1, A = ce(d[g], k), D = ce(d[y], k), L = A, I = w - p[S] - D, $ = w / 2 - p[S] / 2 + O, X = lt(L, $, I), B = !l.arrow && ye(o) != null && $ !== X && s.reference[S] / 2 - ($ < L ? A : D) - p[S] / 2 < 0, F = B ? $ < L ? $ - L : $ - I : 0;
    return {
      [v]: h[v] + F,
      data: {
        [v]: X,
        centerOffset: $ - X - F,
        ...B && {
          alignmentOffset: F
        }
      },
      reset: B
    };
  }
}), qr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: c,
        initialPlacement: a,
        platform: l,
        elements: i
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: S = "none",
        flipAlignment: p = !0,
        ...b
      } = oe(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = ie(o), y = ee(a), E = ie(a) === a, m = await (l.isRTL == null ? void 0 : l.isRTL(i.floating)), R = h || (E || !p ? [je(a)] : jr(a)), _ = S !== "none";
      !h && _ && R.push(...Ir(a, p, S, m));
      const w = [a, ...R], O = await l.detectOverflow(t, b), k = [];
      let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && k.push(O[g]), d) {
        const $ = Hr(o, c, m);
        k.push(O[$[0]], O[$[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: k
      }], !k.every(($) => $ <= 0)) {
        var D, L;
        const $ = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, X = w[$];
        if (X && (!(d === "alignment" ? y !== ee(X) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((H) => ee(H.placement) === y ? H.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: A
            },
            reset: {
              placement: X
            }
          };
        let B = (L = A.filter((F) => F.overflows[0] <= 0).sort((F, H) => F.overflows[1] - H.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!B)
          switch (v) {
            case "bestFit": {
              var I;
              const F = (I = A.filter((H) => {
                if (_) {
                  const Y = ee(H.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((Y) => Y > 0).reduce((Y, Z) => Y + Z, 0)]).sort((H, Y) => H[1] - Y[1])[0]) == null ? void 0 : I[0];
              F && (B = F);
              break;
            }
            case "initialPlacement":
              B = a;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function It(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ft(e) {
  return Lr.some((t) => e[t] >= 0);
}
const Xr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = oe(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = It(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ft(a)
            }
          };
        }
        case "escaped": {
          const c = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = It(c, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ft(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gn = /* @__PURE__ */ new Set(["left", "top"]);
async function Gr(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), c = ie(n), a = ye(n), l = ee(n) === "y", i = gn.has(c) ? -1 : 1, f = s && l ? -1 : 1, d = oe(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: S
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof S == "number" && (v = a === "end" ? S * -1 : S), l ? {
    x: v * f,
    y: h * i
  } : {
    x: h * i,
    y: v * f
  };
}
const Jr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: c,
        middlewareData: a
      } = t, l = await Gr(t, e);
      return c === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: c
        }
      };
    }
  };
}, Zr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = t, {
        mainAxis: c = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: y,
              y: E
            } = g;
            return {
              x: y,
              y: E
            };
          }
        },
        ...i
      } = oe(e, t), f = {
        x: n,
        y: r
      }, d = await s.detectOverflow(t, i), h = ee(ie(o)), v = gt(h);
      let S = f[v], p = f[h];
      if (c) {
        const g = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", E = S + d[g], m = S - d[y];
        S = lt(E, S, m);
      }
      if (a) {
        const g = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", E = p + d[g], m = p - d[y];
        p = lt(E, p, m);
      }
      const b = l.fn({
        ...t,
        [v]: S,
        [h]: p
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [v]: c,
            [h]: a
          }
        }
      };
    }
  };
}, Kr = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: c
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: i = !0
      } = oe(e, t), f = {
        x: n,
        y: r
      }, d = ee(o), h = gt(d);
      let v = f[h], S = f[d];
      const p = oe(a, t), b = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const E = h === "y" ? "height" : "width", m = s.reference[h] - s.floating[E] + b.mainAxis, R = s.reference[h] + s.reference[E] - b.mainAxis;
        v < m ? v = m : v > R && (v = R);
      }
      if (i) {
        var g, y;
        const E = h === "y" ? "width" : "height", m = gn.has(ie(o)), R = s.reference[d] - s.floating[E] + (m && ((g = c.offset) == null ? void 0 : g[d]) || 0) + (m ? 0 : b.crossAxis), _ = s.reference[d] + s.reference[E] + (m ? 0 : ((y = c.offset) == null ? void 0 : y[d]) || 0) - (m ? b.crossAxis : 0);
        S < R ? S = R : S > _ && (S = _);
      }
      return {
        [h]: v,
        [d]: S
      };
    }
  };
}, Qr = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: c,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...i
      } = oe(e, t), f = await c.detectOverflow(t, i), d = ie(o), h = ye(o), v = ee(o) === "y", {
        width: S,
        height: p
      } = s.floating;
      let b, g;
      d === "top" || d === "bottom" ? (b = d, g = h === (await (c.isRTL == null ? void 0 : c.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d, b = h === "end" ? "top" : "bottom");
      const y = p - f.top - f.bottom, E = S - f.left - f.right, m = ce(p - f[b], y), R = ce(S - f[g], E), _ = !t.middlewareData.shift;
      let w = m, O = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = E), (r = t.middlewareData.shift) != null && r.enabled.y && (w = y), _ && !h) {
        const A = V(f.left, 0), D = V(f.right, 0), L = V(f.top, 0), I = V(f.bottom, 0);
        v ? O = S - 2 * (A !== 0 || D !== 0 ? A + D : V(f.left, f.right)) : w = p - 2 * (L !== 0 || I !== 0 ? L + I : V(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: O,
        availableHeight: w
      });
      const k = await c.getDimensions(a.floating);
      return S !== k.width || p !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ie() {
  return typeof window < "u";
}
function we(e) {
  return mn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function q(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ne(e) {
  var t;
  return (t = (mn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mn(e) {
  return Ie() ? e instanceof Node || e instanceof q(e).Node : !1;
}
function G(e) {
  return Ie() ? e instanceof Element || e instanceof q(e).Element : !1;
}
function se(e) {
  return Ie() ? e instanceof HTMLElement || e instanceof q(e).HTMLElement : !1;
}
function Yt(e) {
  return !Ie() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof q(e).ShadowRoot;
}
function _e(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = J(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function eo(e) {
  return /^(table|td|th)$/.test(we(e));
}
function Fe(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const to = /transform|translate|scale|rotate|perspective|filter/, no = /paint|layout|strict|content/, le = (e) => !!e && e !== "none";
let et;
function yt(e) {
  const t = G(e) ? J(e) : e;
  return le(t.transform) || le(t.translate) || le(t.scale) || le(t.rotate) || le(t.perspective) || !wt() && (le(t.backdropFilter) || le(t.filter)) || to.test(t.willChange || "") || no.test(t.contain || "");
}
function ro(e) {
  let t = ue(e);
  for (; se(t) && !pe(t); ) {
    if (yt(t))
      return t;
    if (Fe(t))
      return null;
    t = ue(t);
  }
  return null;
}
function wt() {
  return et == null && (et = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), et;
}
function pe(e) {
  return /^(html|body|#document)$/.test(we(e));
}
function J(e) {
  return q(e).getComputedStyle(e);
}
function Ye(e) {
  return G(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ue(e) {
  if (we(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Yt(e) && e.host || // Fallback.
    ne(e)
  );
  return Yt(t) ? t.host : t;
}
function pn(e) {
  const t = ue(e);
  return pe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : se(t) && _e(t) ? t : pn(t);
}
function Re(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = pn(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = q(o);
  if (s) {
    const a = dt(c);
    return t.concat(c, c.visualViewport || [], _e(o) ? o : [], a && n ? Re(a) : []);
  } else
    return t.concat(o, Re(o, [], n));
}
function dt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yn(e) {
  const t = J(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = se(e), s = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, a = He(n) !== s || He(r) !== c;
  return a && (n = s, r = c), {
    width: n,
    height: r,
    $: a
  };
}
function Et(e) {
  return G(e) ? e : e.contextElement;
}
function me(e) {
  const t = Et(e);
  if (!se(t))
    return te(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = yn(t);
  let c = (s ? He(n.width) : n.width) / r, a = (s ? He(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: c,
    y: a
  };
}
const oo = /* @__PURE__ */ te(0);
function wn(e) {
  const t = q(e);
  return !wt() || !t.visualViewport ? oo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function io(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== q(e) ? !1 : t;
}
function fe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Et(e);
  let c = te(1);
  t && (r ? G(r) && (c = me(r)) : c = me(e));
  const a = io(s, n, r) ? wn(s) : te(0);
  let l = (o.left + a.x) / c.x, i = (o.top + a.y) / c.y, f = o.width / c.x, d = o.height / c.y;
  if (s) {
    const h = q(s), v = r && G(r) ? q(r) : r;
    let S = h, p = dt(S);
    for (; p && r && v !== S; ) {
      const b = me(p), g = p.getBoundingClientRect(), y = J(p), E = g.left + (p.clientLeft + parseFloat(y.paddingLeft)) * b.x, m = g.top + (p.clientTop + parseFloat(y.paddingTop)) * b.y;
      l *= b.x, i *= b.y, f *= b.x, d *= b.y, l += E, i += m, S = q(p), p = dt(S);
    }
  }
  return $e({
    width: f,
    height: d,
    x: l,
    y: i
  });
}
function ze(e, t) {
  const n = Ye(e).scrollLeft;
  return t ? t.left + n : fe(ne(e)).left + n;
}
function En(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ze(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function so(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", c = ne(r), a = t ? Fe(t.floating) : !1;
  if (r === c || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = te(1);
  const f = te(0), d = se(r);
  if ((d || !d && !s) && ((we(r) !== "body" || _e(c)) && (l = Ye(r)), d)) {
    const v = fe(r);
    i = me(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  const h = c && !d && !s ? En(c, l) : te(0);
  return {
    width: n.width * i.x,
    height: n.height * i.y,
    x: n.x * i.x - l.scrollLeft * i.x + f.x + h.x,
    y: n.y * i.y - l.scrollTop * i.y + f.y + h.y
  };
}
function co(e) {
  return Array.from(e.getClientRects());
}
function uo(e) {
  const t = ne(e), n = Ye(e), r = e.ownerDocument.body, o = V(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = V(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + ze(e);
  const a = -n.scrollTop;
  return J(r).direction === "rtl" && (c += V(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: c,
    y: a
  };
}
const zt = 25;
function ao(e, t) {
  const n = q(e), r = ne(e), o = n.visualViewport;
  let s = r.clientWidth, c = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, c = o.height;
    const f = wt();
    (!f || f && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const i = ze(r);
  if (i <= 0) {
    const f = r.ownerDocument, d = f.body, h = getComputedStyle(d), v = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, S = Math.abs(r.clientWidth - d.clientWidth - v);
    S <= zt && (s -= S);
  } else i <= zt && (s += i);
  return {
    width: s,
    height: c,
    x: a,
    y: l
  };
}
function lo(e, t) {
  const n = fe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = se(e) ? me(e) : te(1), c = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, i = r * s.y;
  return {
    width: c,
    height: a,
    x: l,
    y: i
  };
}
function Ut(e, t, n) {
  let r;
  if (t === "viewport")
    r = ao(e, n);
  else if (t === "document")
    r = uo(ne(e));
  else if (G(t))
    r = lo(t, n);
  else {
    const o = wn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $e(r);
}
function xn(e, t) {
  const n = ue(e);
  return n === t || !G(n) || pe(n) ? !1 : J(n).position === "fixed" || xn(n, t);
}
function fo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Re(e, [], !1).filter((a) => G(a) && we(a) !== "body"), o = null;
  const s = J(e).position === "fixed";
  let c = s ? ue(e) : e;
  for (; G(c) && !pe(c); ) {
    const a = J(c), l = yt(c);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || _e(c) && !l && xn(e, c)) ? r = r.filter((f) => f !== c) : o = a, c = ue(c);
  }
  return t.set(e, r), r;
}
function ho(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? Fe(t) ? [] : fo(t, this._c) : [].concat(n), r], a = Ut(t, c[0], o);
  let l = a.top, i = a.right, f = a.bottom, d = a.left;
  for (let h = 1; h < c.length; h++) {
    const v = Ut(t, c[h], o);
    l = V(v.top, l), i = ce(v.right, i), f = ce(v.bottom, f), d = V(v.left, d);
  }
  return {
    width: i - d,
    height: f - l,
    x: d,
    y: l
  };
}
function vo(e) {
  const {
    width: t,
    height: n
  } = yn(e);
  return {
    width: t,
    height: n
  };
}
function go(e, t, n) {
  const r = se(t), o = ne(t), s = n === "fixed", c = fe(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = te(0);
  function i() {
    l.x = ze(o);
  }
  if (r || !r && !s)
    if ((we(t) !== "body" || _e(o)) && (a = Ye(t)), r) {
      const v = fe(t, !0, s, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && i();
  s && !r && o && i();
  const f = o && !r && !s ? En(o, a) : te(0), d = c.left + a.scrollLeft - l.x - f.x, h = c.top + a.scrollTop - l.y - f.y;
  return {
    x: d,
    y: h,
    width: c.width,
    height: c.height
  };
}
function tt(e) {
  return J(e).position === "static";
}
function Vt(e, t) {
  if (!se(e) || J(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ne(e) === n && (n = n.ownerDocument.body), n;
}
function Sn(e, t) {
  const n = q(e);
  if (Fe(e))
    return n;
  if (!se(e)) {
    let o = ue(e);
    for (; o && !pe(o); ) {
      if (G(o) && !tt(o))
        return o;
      o = ue(o);
    }
    return n;
  }
  let r = Vt(e, t);
  for (; r && eo(r) && tt(r); )
    r = Vt(r, t);
  return r && pe(r) && tt(r) && !yt(r) ? n : r || ro(e) || n;
}
const mo = async function(e) {
  const t = this.getOffsetParent || Sn, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: go(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function po(e) {
  return J(e).direction === "rtl";
}
const yo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: so,
  getDocumentElement: ne,
  getClippingRect: ho,
  getOffsetParent: Sn,
  getElementRects: mo,
  getClientRects: co,
  getDimensions: vo,
  getScale: me,
  isElement: G,
  isRTL: po
};
function bn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function wo(e, t) {
  let n = null, r;
  const o = ne(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function c(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const i = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: h,
      height: v
    } = i;
    if (a || t(), !h || !v)
      return;
    const S = Me(d), p = Me(o.clientWidth - (f + h)), b = Me(o.clientHeight - (d + v)), g = Me(f), E = {
      rootMargin: -S + "px " + -p + "px " + -b + "px " + -g + "px",
      threshold: V(0, ce(1, l)) || 1
    };
    let m = !0;
    function R(_) {
      const w = _[0].intersectionRatio;
      if (w !== l) {
        if (!m)
          return c();
        w ? c(!1, w) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      w === 1 && !bn(i, e.getBoundingClientRect()) && c(), m = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, E);
    }
    n.observe(e);
  }
  return c(!0), s;
}
function Fo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, i = Et(e), f = o || s ? [...i ? Re(i) : [], ...t ? Re(t) : []] : [];
  f.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const d = i && a ? wo(i, n) : null;
  let h = -1, v = null;
  c && (v = new ResizeObserver((g) => {
    let [y] = g;
    y && y.target === i && v && t && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var E;
      (E = v) == null || E.observe(t);
    })), n();
  }), i && !l && v.observe(i), t && v.observe(t));
  let S, p = l ? fe(e) : null;
  l && b();
  function b() {
    const g = fe(e);
    p && !bn(p, g) && n(), p = g, S = requestAnimationFrame(b);
  }
  return n(), () => {
    var g;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), d?.(), (g = v) == null || g.disconnect(), v = null, l && cancelAnimationFrame(S);
  };
}
const Eo = Jr, xo = Zr, So = qr, bo = Qr, Ro = Xr, qt = Vr, _o = Kr, Co = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yo,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Ur(e, t, {
    ...o,
    platform: s
  });
};
var Ao = typeof document < "u", Oo = function() {
}, Le = Ao ? C.useLayoutEffect : Oo;
function We(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!We(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !We(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xt(e, t) {
  const n = Rn(e);
  return Math.round(t * n) / n;
}
function nt(e) {
  const t = C.useRef(e);
  return Le(() => {
    t.current = e;
  }), t;
}
function Yo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: c
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: i
  } = e, [f, d] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, v] = C.useState(r);
  We(h, r) || v(r);
  const [S, p] = C.useState(null), [b, g] = C.useState(null), y = C.useCallback((H) => {
    H !== _.current && (_.current = H, p(H));
  }, []), E = C.useCallback((H) => {
    H !== w.current && (w.current = H, g(H));
  }, []), m = s || S, R = c || b, _ = C.useRef(null), w = C.useRef(null), O = C.useRef(f), k = l != null, A = nt(l), D = nt(o), L = nt(i), I = C.useCallback(() => {
    if (!_.current || !w.current)
      return;
    const H = {
      placement: t,
      strategy: n,
      middleware: h
    };
    D.current && (H.platform = D.current), Co(_.current, w.current, H).then((Y) => {
      const Z = {
        ...Y,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      $.current && !We(O.current, Z) && (O.current = Z, en.flushSync(() => {
        d(Z);
      }));
    });
  }, [h, t, n, D, L]);
  Le(() => {
    i === !1 && O.current.isPositioned && (O.current.isPositioned = !1, d((H) => ({
      ...H,
      isPositioned: !1
    })));
  }, [i]);
  const $ = C.useRef(!1);
  Le(() => ($.current = !0, () => {
    $.current = !1;
  }), []), Le(() => {
    if (m && (_.current = m), R && (w.current = R), m && R) {
      if (A.current)
        return A.current(m, R, I);
      I();
    }
  }, [m, R, I, A, k]);
  const X = C.useMemo(() => ({
    reference: _,
    floating: w,
    setReference: y,
    setFloating: E
  }), [y, E]), B = C.useMemo(() => ({
    reference: m,
    floating: R
  }), [m, R]), F = C.useMemo(() => {
    const H = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return H;
    const Y = Xt(B.floating, f.x), Z = Xt(B.floating, f.y);
    return a ? {
      ...H,
      transform: "translate(" + Y + "px, " + Z + "px)",
      ...Rn(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: Z
    };
  }, [n, a, B.floating, f.x, f.y]);
  return C.useMemo(() => ({
    ...f,
    update: I,
    refs: X,
    elements: B,
    floatingStyles: F
  }), [f, I, X, B, F]);
}
const To = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? qt({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? qt({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, zo = (e, t) => {
  const n = Eo(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Uo = (e, t) => {
  const n = xo(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Vo = (e, t) => ({
  fn: _o(e).fn,
  options: [e, t]
}), qo = (e, t) => {
  const n = So(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Xo = (e, t) => {
  const n = bo(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Go = (e, t) => {
  const n = Ro(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Jo = (e, t) => {
  const n = To(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var rt = { exports: {} }, ot = {};
var Gt;
function Po() {
  if (Gt) return ot;
  Gt = 1;
  var e = ht();
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, c = e.useDebugValue;
  function a(d, h) {
    var v = h(), S = r({ inst: { value: v, getSnapshot: h } }), p = S[0].inst, b = S[1];
    return s(
      function() {
        p.value = v, p.getSnapshot = h, l(p) && b({ inst: p });
      },
      [d, v, h]
    ), o(
      function() {
        return l(p) && b({ inst: p }), d(function() {
          l(p) && b({ inst: p });
        });
      },
      [d]
    ), c(v), v;
  }
  function l(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var v = h();
      return !n(d, v);
    } catch {
      return !0;
    }
  }
  function i(d, h) {
    return h();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? i : a;
  return ot.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ot;
}
var Jt;
function Zo() {
  return Jt || (Jt = 1, rt.exports = Po()), rt.exports;
}
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zt.apply(null, arguments);
}
export {
  Do as $,
  Eo as A,
  So as B,
  xo as C,
  _o as D,
  qt as E,
  bo as F,
  Wo as G,
  Bo as H,
  G as I,
  Zt as J,
  vt as K,
  Qt as R,
  $o as _,
  ht as a,
  Mn as b,
  Lo as c,
  No as d,
  Bn as e,
  zn as f,
  In as g,
  Ho as h,
  jo as i,
  ko as j,
  en as k,
  Pr as l,
  Io as m,
  Yo as n,
  zo as o,
  qo as p,
  Xo as q,
  C as r,
  Uo as s,
  Jo as t,
  Un as u,
  Go as v,
  Vo as w,
  Fo as x,
  Zo as y,
  Co as z
};
