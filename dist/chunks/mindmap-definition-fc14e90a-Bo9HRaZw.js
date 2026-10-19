import { l as kr, c as ns, A as mf, Y as bf, P as Cn, i as Dn, a3 as wf, a4 as Ef, a5 as xf, d as Tf, T as Cf } from "./index-CIJqdh0V.js";
import { g as Df } from "./_commonjsHelpers-CqEciG1_.js";
import { c as Sf } from "./createText-2e5e7dd3-DrDwyfTC.js";
import "./percentages-BXMCSKIN-w8KgaW-L.js";
function Fo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function Af(t) {
  if (Array.isArray(t)) return t;
}
function Lf(t) {
  if (Array.isArray(t)) return Fo(t);
}
function pr(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Rf(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, hv(a.key), a);
  }
}
function yr(t, e, r) {
  return e && Rf(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Ct(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = is(t)) || e) {
      r && (t = r);
      var a = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return a >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[a++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var l = r.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, i = l;
    },
    f: function() {
      try {
        o || r.return == null || r.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function fv(t, e, r) {
  return (e = hv(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function If(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Mf(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var a, n, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (a = i.call(r)).done) && (s.push(a.value), s.length !== e); l = !0) ;
    } catch (v) {
      u = !0, n = v;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw n;
      }
    }
    return s;
  }
}
function Pf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Of() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qe(t, e) {
  return Af(t) || Mf(t, e) || is(t, e) || Pf();
}
function Sn(t) {
  return Lf(t) || If(t) || is(t) || Of();
}
function kf(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(t, e);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function hv(t) {
  var e = kf(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function rt(t) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rt(t);
}
function is(t, e) {
  if (t) {
    if (typeof t == "string") return Fo(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Fo(t, e) : void 0;
  }
}
var je = typeof window > "u" ? null : window, Ns = je ? je.navigator : null;
je && je.document;
var Nf = rt(""), dv = rt({}), Bf = rt(function() {
}), Ff = typeof HTMLElement > "u" ? "undefined" : rt(HTMLElement), Ba = function(e) {
  return e && e.instanceString && He(e.instanceString) ? e.instanceString() : null;
}, de = function(e) {
  return e != null && rt(e) == Nf;
}, He = function(e) {
  return e != null && rt(e) === Bf;
}, Ge = function(e) {
  return !Dt(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, Pe = function(e) {
  return e != null && rt(e) === dv && !Ge(e) && e.constructor === Object;
}, _f = function(e) {
  return e != null && rt(e) === dv;
}, ne = function(e) {
  return e != null && rt(e) === rt(1) && !isNaN(e);
}, Gf = function(e) {
  return ne(e) && Math.floor(e) === e;
}, An = function(e) {
  if (Ff !== "undefined")
    return e != null && e instanceof HTMLElement;
}, Dt = function(e) {
  return Fa(e) || gv(e);
}, Fa = function(e) {
  return Ba(e) === "collection" && e._private.single;
}, gv = function(e) {
  return Ba(e) === "collection" && !e._private.single;
}, os = function(e) {
  return Ba(e) === "core";
}, pv = function(e) {
  return Ba(e) === "stylesheet";
}, zf = function(e) {
  return Ba(e) === "event";
}, ur = function(e) {
  return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, Vf = function(e) {
  return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
}, Uf = function(e) {
  return Pe(e) && ne(e.x1) && ne(e.x2) && ne(e.y1) && ne(e.y2);
}, qf = function(e) {
  return _f(e) && He(e.then);
}, Yf = function() {
  return Ns && Ns.userAgent.match(/msie|trident|edge/i);
}, jr = function(e, r) {
  r || (r = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var i = [], o = 0; o < arguments.length; o++)
      i.push(arguments[o]);
    return i.join("$");
  });
  var a = function() {
    var i = this, o = arguments, s, l = r.apply(i, o), u = a.cache;
    return (s = u[l]) || (s = u[l] = e.apply(i, o)), s;
  };
  return a.cache = {}, a;
}, ss = jr(function(t) {
  return t.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), zn = jr(function(t) {
  return t.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), yv = jr(function(t, e) {
  return t + e[0].toUpperCase() + e.substring(1);
}, function(t, e) {
  return t + "$" + e;
}), Bs = function(e) {
  return ur(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, nr = function(e, r) {
  return e.slice(-1 * r.length) === r;
}, tt = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", Hf = "rgb[a]?\\((" + tt + "[%]?)\\s*,\\s*(" + tt + "[%]?)\\s*,\\s*(" + tt + "[%]?)(?:\\s*,\\s*(" + tt + "))?\\)", Xf = "rgb[a]?\\((?:" + tt + "[%]?)\\s*,\\s*(?:" + tt + "[%]?)\\s*,\\s*(?:" + tt + "[%]?)(?:\\s*,\\s*(?:" + tt + "))?\\)", $f = "hsl[a]?\\((" + tt + ")\\s*,\\s*(" + tt + "[%])\\s*,\\s*(" + tt + "[%])(?:\\s*,\\s*(" + tt + "))?\\)", Wf = "hsl[a]?\\((?:" + tt + ")\\s*,\\s*(?:" + tt + "[%])\\s*,\\s*(?:" + tt + "[%])(?:\\s*,\\s*(?:" + tt + "))?\\)", Kf = "\\#[0-9a-fA-F]{3}", Zf = "\\#[0-9a-fA-F]{6}", mv = function(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}, Qf = function(e, r) {
  return -1 * mv(e, r);
}, ye = Object.assign != null ? Object.assign.bind(Object) : function(t) {
  for (var e = arguments, r = 1; r < e.length; r++) {
    var a = e[r];
    if (a != null)
      for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var o = n[i];
        t[o] = a[o];
      }
  }
  return t;
}, Jf = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var r = e.length === 4, a, n, i, o = 16;
    return r ? (a = parseInt(e[1] + e[1], o), n = parseInt(e[2] + e[2], o), i = parseInt(e[3] + e[3], o)) : (a = parseInt(e[1] + e[2], o), n = parseInt(e[3] + e[4], o), i = parseInt(e[5] + e[6], o)), [a, n, i];
  }
}, jf = function(e) {
  var r, a, n, i, o, s, l, u;
  function v(d, g, p) {
    return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? d + (g - d) * 6 * p : p < 1 / 2 ? g : p < 2 / 3 ? d + (g - d) * (2 / 3 - p) * 6 : d;
  }
  var c = new RegExp("^" + $f + "$").exec(e);
  if (c) {
    if (a = parseInt(c[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(c[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(c[3]), i < 0 || i > 100) || (i = i / 100, o = c[4], o !== void 0 && (o = parseFloat(o), o < 0 || o > 1)))
      return;
    if (n === 0)
      s = l = u = Math.round(i * 255);
    else {
      var f = i < 0.5 ? i * (1 + n) : i + n - i * n, h = 2 * i - f;
      s = Math.round(255 * v(h, f, a + 1 / 3)), l = Math.round(255 * v(h, f, a)), u = Math.round(255 * v(h, f, a - 1 / 3));
    }
    r = [s, l, u, o];
  }
  return r;
}, eh = function(e) {
  var r, a = new RegExp("^" + Hf + "$").exec(e);
  if (a) {
    r = [];
    for (var n = [], i = 1; i <= 3; i++) {
      var o = a[i];
      if (o[o.length - 1] === "%" && (n[i] = !0), o = parseFloat(o), n[i] && (o = o / 100 * 255), o < 0 || o > 255)
        return;
      r.push(Math.floor(o));
    }
    var s = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
    if (s && !l)
      return;
    var u = a[4];
    if (u !== void 0) {
      if (u = parseFloat(u), u < 0 || u > 1)
        return;
      r.push(u);
    }
  }
  return r;
}, th = function(e) {
  return rh[e.toLowerCase()];
}, bv = function(e) {
  return (Ge(e) ? e : null) || th(e) || Jf(e) || eh(e) || jf(e);
}, rh = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, wv = function(e) {
  for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var o = a[i];
    if (Pe(o))
      throw Error("Tried to set map with object key");
    i < a.length - 1 ? (r[o] == null && (r[o] = {}), r = r[o]) : r[o] = e.value;
  }
}, Ev = function(e) {
  for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var o = a[i];
    if (Pe(o))
      throw Error("Tried to get map with object key");
    if (r = r[o], r == null)
      return r;
  }
  return r;
}, Za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function _a(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var oi, Fs;
function Ga() {
  if (Fs) return oi;
  Fs = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return oi = t, oi;
}
var si, _s;
function ah() {
  if (_s) return si;
  _s = 1;
  var t = typeof Za == "object" && Za && Za.Object === Object && Za;
  return si = t, si;
}
var li, Gs;
function Vn() {
  if (Gs) return li;
  Gs = 1;
  var t = ah(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return li = r, li;
}
var ui, zs;
function nh() {
  if (zs) return ui;
  zs = 1;
  var t = Vn(), e = function() {
    return t.Date.now();
  };
  return ui = e, ui;
}
var vi, Vs;
function ih() {
  if (Vs) return vi;
  Vs = 1;
  var t = /\s/;
  function e(r) {
    for (var a = r.length; a-- && t.test(r.charAt(a)); )
      ;
    return a;
  }
  return vi = e, vi;
}
var ci, Us;
function oh() {
  if (Us) return ci;
  Us = 1;
  var t = ih(), e = /^\s+/;
  function r(a) {
    return a && a.slice(0, t(a) + 1).replace(e, "");
  }
  return ci = r, ci;
}
var fi, qs;
function ls() {
  if (qs) return fi;
  qs = 1;
  var t = Vn(), e = t.Symbol;
  return fi = e, fi;
}
var hi, Ys;
function sh() {
  if (Ys) return hi;
  Ys = 1;
  var t = ls(), e = Object.prototype, r = e.hasOwnProperty, a = e.toString, n = t ? t.toStringTag : void 0;
  function i(o) {
    var s = r.call(o, n), l = o[n];
    try {
      o[n] = void 0;
      var u = !0;
    } catch {
    }
    var v = a.call(o);
    return u && (s ? o[n] = l : delete o[n]), v;
  }
  return hi = i, hi;
}
var di, Hs;
function lh() {
  if (Hs) return di;
  Hs = 1;
  var t = Object.prototype, e = t.toString;
  function r(a) {
    return e.call(a);
  }
  return di = r, di;
}
var gi, Xs;
function xv() {
  if (Xs) return gi;
  Xs = 1;
  var t = ls(), e = sh(), r = lh(), a = "[object Null]", n = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? n : a : i && i in Object(s) ? e(s) : r(s);
  }
  return gi = o, gi;
}
var pi, $s;
function uh() {
  if ($s) return pi;
  $s = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return pi = t, pi;
}
var yi, Ws;
function za() {
  if (Ws) return yi;
  Ws = 1;
  var t = xv(), e = uh(), r = "[object Symbol]";
  function a(n) {
    return typeof n == "symbol" || e(n) && t(n) == r;
  }
  return yi = a, yi;
}
var mi, Ks;
function vh() {
  if (Ks) return mi;
  Ks = 1;
  var t = oh(), e = Ga(), r = za(), a = NaN, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function l(u) {
    if (typeof u == "number")
      return u;
    if (r(u))
      return a;
    if (e(u)) {
      var v = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = e(v) ? v + "" : v;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = t(u);
    var c = i.test(u);
    return c || o.test(u) ? s(u.slice(2), c ? 2 : 8) : n.test(u) ? a : +u;
  }
  return mi = l, mi;
}
var bi, Zs;
function ch() {
  if (Zs) return bi;
  Zs = 1;
  var t = Ga(), e = nh(), r = vh(), a = "Expected a function", n = Math.max, i = Math.min;
  function o(s, l, u) {
    var v, c, f, h, d, g, p = 0, y = !1, b = !1, m = !0;
    if (typeof s != "function")
      throw new TypeError(a);
    l = r(l) || 0, t(u) && (y = !!u.leading, b = "maxWait" in u, f = b ? n(r(u.maxWait) || 0, l) : f, m = "trailing" in u ? !!u.trailing : m);
    function E(R) {
      var M = v, P = c;
      return v = c = void 0, p = R, h = s.apply(P, M), h;
    }
    function T(R) {
      return p = R, d = setTimeout(x, l), y ? E(R) : h;
    }
    function S(R) {
      var M = R - g, P = R - p, N = l - M;
      return b ? i(N, f - P) : N;
    }
    function w(R) {
      var M = R - g, P = R - p;
      return g === void 0 || M >= l || M < 0 || b && P >= f;
    }
    function x() {
      var R = e();
      if (w(R))
        return C(R);
      d = setTimeout(x, S(R));
    }
    function C(R) {
      return d = void 0, m && v ? E(R) : (v = c = void 0, h);
    }
    function D() {
      d !== void 0 && clearTimeout(d), p = 0, v = g = c = d = void 0;
    }
    function A() {
      return d === void 0 ? h : C(e());
    }
    function L() {
      var R = e(), M = w(R);
      if (v = arguments, c = this, g = R, M) {
        if (d === void 0)
          return T(g);
        if (b)
          return clearTimeout(d), d = setTimeout(x, l), E(g);
      }
      return d === void 0 && (d = setTimeout(x, l)), h;
    }
    return L.cancel = D, L.flush = A, L;
  }
  return bi = o, bi;
}
var fh = ch(), Va = /* @__PURE__ */ _a(fh), wi = je ? je.performance : null, Tv = wi && wi.now ? function() {
  return wi.now();
} : function() {
  return Date.now();
}, hh = (function() {
  if (je) {
    if (je.requestAnimationFrame)
      return function(t) {
        je.requestAnimationFrame(t);
      };
    if (je.mozRequestAnimationFrame)
      return function(t) {
        je.mozRequestAnimationFrame(t);
      };
    if (je.webkitRequestAnimationFrame)
      return function(t) {
        je.webkitRequestAnimationFrame(t);
      };
    if (je.msRequestAnimationFrame)
      return function(t) {
        je.msRequestAnimationFrame(t);
      };
  }
  return function(t) {
    t && setTimeout(function() {
      t(Tv());
    }, 1e3 / 60);
  };
})(), Ln = function(e) {
  return hh(e);
}, Zt = Tv, Sr = 9261, Cv = 65599, Hr = 5381, Dv = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Sr, a = r, n; n = e.next(), !n.done; )
    a = a * Cv + n.value | 0;
  return a;
}, Sa = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Sr;
  return r * Cv + e | 0;
}, Aa = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Hr;
  return (r << 5) + r + e | 0;
}, dh = function(e, r) {
  return e * 2097152 + r;
}, tr = function(e) {
  return e[0] * 2097152 + e[1];
}, Qa = function(e, r) {
  return [Sa(e[0], r[0]), Aa(e[1], r[1])];
}, Qs = function(e, r) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, o = {
    next: function() {
      return n < i ? a.value = e[n++] : a.done = !0, a;
    }
  };
  return Dv(o, r);
}, Rr = function(e, r) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, o = {
    next: function() {
      return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
    }
  };
  return Dv(o, r);
}, Sv = function() {
  return gh(arguments);
}, gh = function(e) {
  for (var r, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? r = Rr(n) : r = Rr(n, r);
  }
  return r;
};
function ph(t, e, r, a, n) {
  var i = n * Math.PI / 180, o = Math.cos(i) * (t - r) - Math.sin(i) * (e - a) + r, s = Math.sin(i) * (t - r) + Math.cos(i) * (e - a) + a;
  return {
    x: o,
    y: s
  };
}
var yh = function(e, r, a, n, i, o) {
  return {
    x: (e - a) * i + a,
    y: (r - n) * o + n
  };
};
function mh(t, e, r) {
  if (r === 0) return t;
  var a = (e.x1 + e.x2) / 2, n = (e.y1 + e.y2) / 2, i = e.w / e.h, o = 1 / i, s = ph(t.x, t.y, a, n, r), l = yh(s.x, s.y, a, n, i, o);
  return {
    x: l.x,
    y: l.y
  };
}
var Js = !0, bh = console.warn != null, wh = console.trace != null, us = Number.MAX_SAFE_INTEGER || 9007199254740991, Av = function() {
  return !0;
}, Rn = function() {
  return !1;
}, js = function() {
  return 0;
}, vs = function() {
}, qe = function(e) {
  throw new Error(e);
}, Lv = function(e) {
  if (e !== void 0)
    Js = !!e;
  else
    return Js;
}, Fe = function(e) {
  Lv() && (bh ? console.warn(e) : (console.log(e), wh && console.trace()));
}, Eh = function(e) {
  return ye({}, e);
}, qt = function(e) {
  return e == null ? e : Ge(e) ? e.slice() : Pe(e) ? Eh(e) : e;
}, xh = function(e) {
  return e.slice();
}, Rv = function(e, r) {
  for (
    // loop :)
    r = e = "";
    // b - result , a - numeric letiable
    e++ < 36;
    //
    r += e * 51 & 52 ? (
      //  return a random number or 4
      (e ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (e ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  ) ;
  return r;
}, Th = {}, Iv = function() {
  return Th;
}, ct = function(e) {
  var r = Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < r.length; i++) {
      var o = r[i], s = a?.[o];
      n[o] = s === void 0 ? e[o] : s;
    }
    return n;
  };
}, vr = function(e, r, a) {
  for (var n = e.length - 1; n >= 0; n--)
    e[n] === r && e.splice(n, 1);
}, cs = function(e) {
  e.splice(0, e.length);
}, Ch = function(e, r) {
  for (var a = 0; a < r.length; a++) {
    var n = r[a];
    e.push(n);
  }
}, mt = function(e, r, a) {
  return a && (r = yv(a, r)), e[r];
}, Ut = function(e, r, a, n) {
  a && (r = yv(a, r)), e[r] = n;
}, Dh = /* @__PURE__ */ (function() {
  function t() {
    pr(this, t), this._obj = {};
  }
  return yr(t, [{
    key: "set",
    value: function(r, a) {
      return this._obj[r] = a, this;
    }
  }, {
    key: "delete",
    value: function(r) {
      return this._obj[r] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] !== void 0;
    }
  }, {
    key: "get",
    value: function(r) {
      return this._obj[r];
    }
  }]);
})(), Kt = typeof Map < "u" ? Map : Dh, Sh = "undefined", Ah = /* @__PURE__ */ (function() {
  function t(e) {
    if (pr(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var r;
      e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
      for (var a = 0; a < r.length; a++)
        this.add(r[a]);
    }
  }
  return yr(t, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(r) {
      var a = this._obj;
      a[r] !== 1 && (a[r] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(r) {
      var a = this._obj;
      a[r] === 1 && (a[r] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var r = this;
      return Object.keys(this._obj).filter(function(a) {
        return r.has(a);
      });
    }
  }, {
    key: "forEach",
    value: function(r, a) {
      return this.toArray().forEach(r, a);
    }
  }]);
})(), na = (typeof Set > "u" ? "undefined" : rt(Set)) !== Sh ? Set : Ah, Un = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (e === void 0 || r === void 0 || !os(e)) {
    qe("An element must have a core reference and parameters set");
    return;
  }
  var n = r.group;
  if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    qe("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i = this._private = {
    cy: e,
    single: !0,
    // indicates this is an element
    data: r.data || {},
    // data object
    position: r.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: !1,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: n,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: !0,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: !!r.selected,
    // whether it's selected
    selectable: r.selectable === void 0 ? !0 : !!r.selectable,
    // whether it's selectable
    locked: !!r.locked,
    // whether the element is locked (cannot be moved)
    grabbed: !1,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: r.grabbable === void 0 ? !0 : !!r.grabbable,
    // whether the element can be grabbed
    pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
    // whether the element has passthrough panning enabled
    active: !1,
    // whether the element is active from user interaction
    classes: new na(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: r.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: r.parent && r.parent.isNode() ? r.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: !1,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
    var o = r.renderedPosition, s = e.pan(), l = e.zoom();
    i.position = {
      x: (o.x - s.x) / l,
      y: (o.y - s.y) / l
    };
  }
  var u = [];
  Ge(r.classes) ? u = r.classes : de(r.classes) && (u = r.classes.split(/\s+/));
  for (var v = 0, c = u.length; v < c; v++) {
    var f = u[v];
    !f || f === "" || i.classes.add(f);
  }
  this.createEmitter(), (a === void 0 || a) && this.restore();
  var h = r.style || r.css;
  h && (Fe("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h));
}, el = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(a, n, i) {
    var o;
    Pe(a) && !Dt(a) && (o = a, a = o.roots || o.root, n = o.visit, i = o.directed), i = arguments.length === 2 && !He(n) ? n : i, n = He(n) ? n : function() {
    };
    for (var s = this._private.cy, l = a = de(a) ? this.filter(a) : a, u = [], v = [], c = {}, f = {}, h = {}, d = 0, g, p = this.byGroup(), y = p.nodes, b = p.edges, m = 0; m < l.length; m++) {
      var E = l[m], T = E.id();
      E.isNode() && (u.unshift(E), e.bfs && (h[T] = !0, v.push(E)), f[T] = 0);
    }
    for (var S = function() {
      var R = e.bfs ? u.shift() : u.pop(), M = R.id();
      if (e.dfs) {
        if (h[M])
          return 0;
        h[M] = !0, v.push(R);
      }
      var P = f[M], N = c[M], O = N != null ? N.source() : null, k = N != null ? N.target() : null, F = N == null ? void 0 : R.same(O) ? k[0] : O[0], _;
      if (_ = n(R, N, F, d++, P), _ === !0)
        return g = R, 1;
      if (_ === !1)
        return 1;
      for (var B = R.connectedEdges().filter(function(K) {
        return (!i || K.source().same(R)) && b.has(K);
      }), G = 0; G < B.length; G++) {
        var H = B[G], X = H.connectedNodes().filter(function(K) {
          return !K.same(R) && y.has(K);
        }), $ = X.id();
        X.length !== 0 && !h[$] && (X = X[0], u.push(X), e.bfs && (h[$] = !0, v.push(X)), c[$] = H, f[$] = f[M] + 1);
      }
    }, w; u.length !== 0 && (w = S(), !(w !== 0 && w === 1)); )
      ;
    for (var x = s.collection(), C = 0; C < v.length; C++) {
      var D = v[C], A = c[D.id()];
      A != null && x.push(A), x.push(D);
    }
    return {
      path: s.collection(x),
      found: s.collection(g)
    };
  };
}, La = {
  breadthFirstSearch: el({
    bfs: !0
  }),
  depthFirstSearch: el({
    dfs: !0
  })
};
La.bfs = La.breadthFirstSearch;
La.dfs = La.depthFirstSearch;
var vn = { exports: {} }, Lh = vn.exports, tl;
function Rh() {
  return tl || (tl = 1, (function(t, e) {
    (function() {
      var r, a, n, i, o, s, l, u, v, c, f, h, d, g, p;
      n = Math.floor, c = Math.min, a = function(y, b) {
        return y < b ? -1 : y > b ? 1 : 0;
      }, v = function(y, b, m, E, T) {
        var S;
        if (m == null && (m = 0), T == null && (T = a), m < 0)
          throw new Error("lo must be non-negative");
        for (E == null && (E = y.length); m < E; )
          S = n((m + E) / 2), T(b, y[S]) < 0 ? E = S : m = S + 1;
        return [].splice.apply(y, [m, m - m].concat(b)), b;
      }, s = function(y, b, m) {
        return m == null && (m = a), y.push(b), g(y, 0, y.length - 1, m);
      }, o = function(y, b) {
        var m, E;
        return b == null && (b = a), m = y.pop(), y.length ? (E = y[0], y[0] = m, p(y, 0, b)) : E = m, E;
      }, u = function(y, b, m) {
        var E;
        return m == null && (m = a), E = y[0], y[0] = b, p(y, 0, m), E;
      }, l = function(y, b, m) {
        var E;
        return m == null && (m = a), y.length && m(y[0], b) < 0 && (E = [y[0], b], b = E[0], y[0] = E[1], p(y, 0, m)), b;
      }, i = function(y, b) {
        var m, E, T, S, w, x;
        for (b == null && (b = a), S = (function() {
          x = [];
          for (var C = 0, D = n(y.length / 2); 0 <= D ? C < D : C > D; 0 <= D ? C++ : C--)
            x.push(C);
          return x;
        }).apply(this).reverse(), w = [], E = 0, T = S.length; E < T; E++)
          m = S[E], w.push(p(y, m, b));
        return w;
      }, d = function(y, b, m) {
        var E;
        if (m == null && (m = a), E = y.indexOf(b), E !== -1)
          return g(y, 0, E, m), p(y, E, m);
      }, f = function(y, b, m) {
        var E, T, S, w, x;
        if (m == null && (m = a), T = y.slice(0, b), !T.length)
          return T;
        for (i(T, m), x = y.slice(b), S = 0, w = x.length; S < w; S++)
          E = x[S], l(T, E, m);
        return T.sort(m).reverse();
      }, h = function(y, b, m) {
        var E, T, S, w, x, C, D, A, L;
        if (m == null && (m = a), b * 10 <= y.length) {
          if (S = y.slice(0, b).sort(m), !S.length)
            return S;
          for (T = S[S.length - 1], D = y.slice(b), w = 0, C = D.length; w < C; w++)
            E = D[w], m(E, T) < 0 && (v(S, E, 0, null, m), S.pop(), T = S[S.length - 1]);
          return S;
        }
        for (i(y, m), L = [], x = 0, A = c(b, y.length); 0 <= A ? x < A : x > A; 0 <= A ? ++x : --x)
          L.push(o(y, m));
        return L;
      }, g = function(y, b, m, E) {
        var T, S, w;
        for (E == null && (E = a), T = y[m]; m > b; ) {
          if (w = m - 1 >> 1, S = y[w], E(T, S) < 0) {
            y[m] = S, m = w;
            continue;
          }
          break;
        }
        return y[m] = T;
      }, p = function(y, b, m) {
        var E, T, S, w, x;
        for (m == null && (m = a), T = y.length, x = b, S = y[b], E = 2 * b + 1; E < T; )
          w = E + 1, w < T && !(m(y[E], y[w]) < 0) && (E = w), y[b] = y[E], b = E, E = 2 * b + 1;
        return y[b] = S, g(y, x, b, m);
      }, r = (function() {
        y.push = s, y.pop = o, y.replace = u, y.pushpop = l, y.heapify = i, y.updateItem = d, y.nlargest = f, y.nsmallest = h;
        function y(b) {
          this.cmp = b ?? a, this.nodes = [];
        }
        return y.prototype.push = function(b) {
          return s(this.nodes, b, this.cmp);
        }, y.prototype.pop = function() {
          return o(this.nodes, this.cmp);
        }, y.prototype.peek = function() {
          return this.nodes[0];
        }, y.prototype.contains = function(b) {
          return this.nodes.indexOf(b) !== -1;
        }, y.prototype.replace = function(b) {
          return u(this.nodes, b, this.cmp);
        }, y.prototype.pushpop = function(b) {
          return l(this.nodes, b, this.cmp);
        }, y.prototype.heapify = function() {
          return i(this.nodes, this.cmp);
        }, y.prototype.updateItem = function(b) {
          return d(this.nodes, b, this.cmp);
        }, y.prototype.clear = function() {
          return this.nodes = [];
        }, y.prototype.empty = function() {
          return this.nodes.length === 0;
        }, y.prototype.size = function() {
          return this.nodes.length;
        }, y.prototype.clone = function() {
          var b;
          return b = new y(), b.nodes = this.nodes.slice(0), b;
        }, y.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, y.prototype.insert = y.prototype.push, y.prototype.top = y.prototype.peek, y.prototype.front = y.prototype.peek, y.prototype.has = y.prototype.contains, y.prototype.copy = y.prototype.clone, y;
      })(), (function(y, b) {
        return t.exports = b();
      })(this, function() {
        return r;
      });
    }).call(Lh);
  })(vn)), vn.exports;
}
var Ei, rl;
function Ih() {
  return rl || (rl = 1, Ei = Rh()), Ei;
}
var Mh = Ih(), Ua = /* @__PURE__ */ _a(Mh), Ph = ct({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1
}), Oh = {
  dijkstra: function(e) {
    if (!Pe(e)) {
      var r = arguments;
      e = {
        root: r[0],
        weight: r[1],
        directed: r[2]
      };
    }
    var a = Ph(e), n = a.root, i = a.weight, o = a.directed, s = this, l = i, u = de(n) ? this.filter(n)[0] : n[0], v = {}, c = {}, f = {}, h = this.byGroup(), d = h.nodes, g = h.edges;
    g.unmergeBy(function(P) {
      return P.isLoop();
    });
    for (var p = function(N) {
      return v[N.id()];
    }, y = function(N, O) {
      v[N.id()] = O, b.updateItem(N);
    }, b = new Ua(function(P, N) {
      return p(P) - p(N);
    }), m = 0; m < d.length; m++) {
      var E = d[m];
      v[E.id()] = E.same(u) ? 0 : 1 / 0, b.push(E);
    }
    for (var T = function(N, O) {
      for (var k = (o ? N.edgesTo(O) : N.edgesWith(O)).intersect(g), F = 1 / 0, _, B = 0; B < k.length; B++) {
        var G = k[B], H = l(G);
        (H < F || !_) && (F = H, _ = G);
      }
      return {
        edge: _,
        dist: F
      };
    }; b.size() > 0; ) {
      var S = b.pop(), w = p(S), x = S.id();
      if (f[x] = w, w !== 1 / 0)
        for (var C = S.neighborhood().intersect(d), D = 0; D < C.length; D++) {
          var A = C[D], L = A.id(), R = T(S, A), M = w + R.dist;
          M < p(A) && (y(A, M), c[L] = {
            node: S,
            edge: R.edge
          });
        }
    }
    return {
      distanceTo: function(N) {
        var O = de(N) ? d.filter(N)[0] : N[0];
        return f[O.id()];
      },
      pathTo: function(N) {
        var O = de(N) ? d.filter(N)[0] : N[0], k = [], F = O, _ = F.id();
        if (O.length > 0)
          for (k.unshift(O); c[_]; ) {
            var B = c[_];
            k.unshift(B.edge), k.unshift(B.node), F = B.node, _ = F.id();
          }
        return s.spawn(k);
      }
    };
  }
}, kh = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(m) {
      return 1;
    };
    for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, o = new Array(i), s = a, l = function(E) {
      for (var T = 0; T < o.length; T++) {
        var S = o[T];
        if (S.has(E))
          return T;
      }
    }, u = 0; u < i; u++)
      o[u] = this.spawn(a[u]);
    for (var v = n.sort(function(m, E) {
      return e(m) - e(E);
    }), c = 0; c < v.length; c++) {
      var f = v[c], h = f.source()[0], d = f.target()[0], g = l(h), p = l(d), y = o[g], b = o[p];
      g !== p && (s.merge(f), y.merge(b), o.splice(p, 1));
    }
    return s;
  }
}, Nh = ct({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: !1
}), Bh = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var r = this.cy(), a = Nh(e), n = a.root, i = a.goal, o = a.heuristic, s = a.directed, l = a.weight;
    n = r.collection(n)[0], i = r.collection(i)[0];
    var u = n.id(), v = i.id(), c = {}, f = {}, h = {}, d = new Ua(function(_, B) {
      return f[_.id()] - f[B.id()];
    }), g = new na(), p = {}, y = {}, b = function(B, G) {
      d.push(B), g.add(G);
    }, m, E, T = function() {
      m = d.pop(), E = m.id(), g.delete(E);
    }, S = function(B) {
      return g.has(B);
    };
    b(n, u), c[u] = 0, f[u] = o(n);
    for (var w = 0; d.size() > 0; ) {
      if (T(), w++, E === v) {
        for (var x = [], C = i, D = v, A = y[D]; x.unshift(C), A != null && x.unshift(A), C = p[D], C != null; )
          D = C.id(), A = y[D];
        return {
          found: !0,
          distance: c[E],
          path: this.spawn(x),
          steps: w
        };
      }
      h[E] = !0;
      for (var L = m._private.edges, R = 0; R < L.length; R++) {
        var M = L[R];
        if (this.hasElementWithId(M.id()) && !(s && M.data("source") !== E)) {
          var P = M.source(), N = M.target(), O = P.id() !== E ? P : N, k = O.id();
          if (this.hasElementWithId(k) && !h[k]) {
            var F = c[E] + l(M);
            if (!S(k)) {
              c[k] = F, f[k] = F + o(O), b(O, k), p[k] = m, y[k] = M;
              continue;
            }
            F < c[k] && (c[k] = F, f[k] = F + o(O), p[k] = m, y[k] = M);
          }
        }
      }
    }
    return {
      found: !1,
      distance: void 0,
      path: void 0,
      steps: w
    };
  }
}, Fh = ct({
  weight: function(e) {
    return 1;
  },
  directed: !1
}), _h = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var r = this.cy(), a = Fh(e), n = a.weight, i = a.directed, o = n, s = this.byGroup(), l = s.nodes, u = s.edges, v = l.length, c = v * v, f = function(H) {
      return l.indexOf(H);
    }, h = function(H) {
      return l[H];
    }, d = new Array(c), g = 0; g < c; g++) {
      var p = g % v, y = (g - p) / v;
      y === p ? d[g] = 0 : d[g] = 1 / 0;
    }
    for (var b = new Array(c), m = new Array(c), E = 0; E < u.length; E++) {
      var T = u[E], S = T.source()[0], w = T.target()[0];
      if (S !== w) {
        var x = f(S), C = f(w), D = x * v + C, A = o(T);
        if (d[D] > A && (d[D] = A, b[D] = C, m[D] = T), !i) {
          var L = C * v + x;
          !i && d[L] > A && (d[L] = A, b[L] = x, m[L] = T);
        }
      }
    }
    for (var R = 0; R < v; R++)
      for (var M = 0; M < v; M++)
        for (var P = M * v + R, N = 0; N < v; N++) {
          var O = M * v + N, k = R * v + N;
          d[P] + d[k] < d[O] && (d[O] = d[P] + d[k], b[O] = b[P]);
        }
    var F = function(H) {
      return (de(H) ? r.filter(H) : H)[0];
    }, _ = function(H) {
      return f(F(H));
    }, B = {
      distance: function(H, X) {
        var $ = _(H), K = _(X);
        return d[$ * v + K];
      },
      path: function(H, X) {
        var $ = _(H), K = _(X), ee = h($);
        if ($ === K)
          return ee.collection();
        if (b[$ * v + K] == null)
          return r.collection();
        var ae = r.collection(), Z = $, V;
        for (ae.merge(ee); $ !== K; )
          Z = $, $ = b[$ * v + K], V = m[Z * v + $], ae.merge(V), ae.merge(h($));
        return ae;
      }
    };
    return B;
  }
  // floydWarshall
}, Gh = ct({
  weight: function(e) {
    return 1;
  },
  directed: !1,
  root: null
}), zh = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var r = this, a = Gh(e), n = a.weight, i = a.directed, o = a.root, s = n, l = this, u = this.cy(), v = this.byGroup(), c = v.edges, f = v.nodes, h = f.length, d = new Kt(), g = !1, p = [];
    o = u.collection(o)[0], c.unmergeBy(function(we) {
      return we.isLoop();
    });
    for (var y = c.length, b = function(me) {
      var ge = d.get(me.id());
      return ge || (ge = {}, d.set(me.id(), ge)), ge;
    }, m = function(me) {
      return (de(me) ? u.$(me) : me)[0];
    }, E = function(me) {
      return b(m(me)).dist;
    }, T = function(me) {
      for (var ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, oe = m(me), he = [], fe = oe; ; ) {
        if (fe == null)
          return r.spawn();
        var Ee = b(fe), be = Ee.edge, De = Ee.pred;
        if (he.unshift(fe[0]), fe.same(ge) && he.length > 0)
          break;
        be != null && he.unshift(be), fe = De;
      }
      return l.spawn(he);
    }, S = 0; S < h; S++) {
      var w = f[S], x = b(w);
      w.same(o) ? x.dist = 0 : x.dist = 1 / 0, x.pred = null, x.edge = null;
    }
    for (var C = !1, D = function(me, ge, oe, he, fe, Ee) {
      var be = he.dist + Ee;
      be < fe.dist && !oe.same(he.edge) && (fe.dist = be, fe.pred = me, fe.edge = oe, C = !0);
    }, A = 1; A < h; A++) {
      C = !1;
      for (var L = 0; L < y; L++) {
        var R = c[L], M = R.source(), P = R.target(), N = s(R), O = b(M), k = b(P);
        D(M, P, R, O, k, N), i || D(P, M, R, k, O, N);
      }
      if (!C)
        break;
    }
    if (C)
      for (var F = [], _ = 0; _ < y; _++) {
        var B = c[_], G = B.source(), H = B.target(), X = s(B), $ = b(G).dist, K = b(H).dist;
        if ($ + X < K || !i && K + X < $)
          if (g || (Fe("Graph contains a negative weight cycle for Bellman-Ford"), g = !0), e.findNegativeWeightCycles !== !1) {
            var ee = [];
            $ + X < K && ee.push(G), !i && K + X < $ && ee.push(H);
            for (var ae = ee.length, Z = 0; Z < ae; Z++) {
              var V = ee[Z], q = [V];
              q.push(b(V).edge);
              for (var Y = b(V).pred; q.indexOf(Y) === -1; )
                q.push(Y), q.push(b(Y).edge), Y = b(Y).pred;
              q = q.slice(q.indexOf(Y));
              for (var Q = q[0].id(), re = 0, ue = 2; ue < q.length; ue += 2)
                q[ue].id() < Q && (Q = q[ue].id(), re = ue);
              q = q.slice(re).concat(q.slice(0, re)), q.push(q[0]);
              var Ae = q.map(function(we) {
                return we.id();
              }).join(",");
              F.indexOf(Ae) === -1 && (p.push(l.spawn(q)), F.push(Ae));
            }
          } else
            break;
      }
    return {
      distanceTo: E,
      pathTo: T,
      hasNegativeWeightCycle: g,
      negativeWeightCycles: p
    };
  }
  // bellmanFord
}, Vh = Math.sqrt(2), Uh = function(e, r, a) {
  a.length === 0 && qe("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], o = n[2], s = r[i], l = r[o], u = a, v = u.length - 1; v >= 0; v--) {
    var c = u[v], f = c[1], h = c[2];
    (r[f] === s && r[h] === l || r[f] === l && r[h] === s) && u.splice(v, 1);
  }
  for (var d = 0; d < u.length; d++) {
    var g = u[d];
    g[1] === l ? (u[d] = g.slice(), u[d][1] = s) : g[2] === l && (u[d] = g.slice(), u[d][2] = s);
  }
  for (var p = 0; p < r.length; p++)
    r[p] === l && (r[p] = s);
  return u;
}, xi = function(e, r, a, n) {
  for (; a > n; ) {
    var i = Math.floor(Math.random() * r.length);
    r = Uh(i, e, r), a--;
  }
  return r;
}, qh = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
    n.unmergeBy(function(k) {
      return k.isLoop();
    });
    var i = a.length, o = n.length, s = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / Vh);
    if (i < 2) {
      qe("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var u = [], v = 0; v < o; v++) {
      var c = n[v];
      u.push([v, a.indexOf(c.source()), a.indexOf(c.target())]);
    }
    for (var f = 1 / 0, h = [], d = new Array(i), g = new Array(i), p = new Array(i), y = function(F, _) {
      for (var B = 0; B < i; B++)
        _[B] = F[B];
    }, b = 0; b <= s; b++) {
      for (var m = 0; m < i; m++)
        g[m] = m;
      var E = xi(g, u.slice(), i, l), T = E.slice();
      y(g, p);
      var S = xi(g, E, l, 2), w = xi(p, T, l, 2);
      S.length <= w.length && S.length < f ? (f = S.length, h = S, y(g, d)) : w.length <= S.length && w.length < f && (f = w.length, h = w, y(p, d));
    }
    for (var x = this.spawn(h.map(function(k) {
      return n[k[0]];
    })), C = this.spawn(), D = this.spawn(), A = d[0], L = 0; L < d.length; L++) {
      var R = d[L], M = a[L];
      R === A ? C.merge(M) : D.merge(M);
    }
    var P = function(F) {
      var _ = e.spawn();
      return F.forEach(function(B) {
        _.merge(B), B.connectedEdges().forEach(function(G) {
          e.contains(G) && !x.contains(G) && _.merge(G);
        });
      }), _;
    }, N = [P(C), P(D)], O = {
      cut: x,
      components: N,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: C,
      partition2: D
    };
    return O;
  }
}, Ti, Yh = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, qn = function(e, r, a) {
  return {
    x: e.x * r + a.x,
    y: e.y * r + a.y
  };
}, Mv = function(e, r, a) {
  return {
    x: (e.x - a.x) / r,
    y: (e.y - a.y) / r
  };
}, Xr = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, Hh = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
    var o = e[i];
    isFinite(o) && (n = Math.min(o, n));
  }
  return n;
}, Xh = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
    var o = e[i];
    isFinite(o) && (n = Math.max(o, n));
  }
  return n;
}, $h = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, o = r; o < a; o++) {
    var s = e[o];
    isFinite(s) && (n += s, i++);
  }
  return n / i;
}, Wh = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
  n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
  for (var s = 0, l = e.length - 1; l >= 0; l--) {
    var u = e[l];
    o ? isFinite(u) || (e[l] = -1 / 0, s++) : e.splice(l, 1);
  }
  i && e.sort(function(f, h) {
    return f - h;
  });
  var v = e.length, c = Math.floor(v / 2);
  return v % 2 !== 0 ? e[c + 1 + s] : (e[c - 1 + s] + e[c + s]) / 2;
}, Kh = function(e) {
  return Math.PI * e / 180;
}, Ja = function(e, r) {
  return Math.atan2(r, e) - Math.PI / 2;
}, fs = Math.log2 || function(t) {
  return Math.log(t) / Math.log(2);
}, hs = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, Ir = function(e, r) {
  return Math.sqrt(Cr(e, r));
}, Cr = function(e, r) {
  var a = r.x - e.x, n = r.y - e.y;
  return a * a + n * n;
}, Zh = function(e) {
  for (var r = e.length, a = 0, n = 0; n < r; n++)
    a += e[n];
  for (var i = 0; i < r; i++)
    e[i] = e[i] / a;
  return e;
}, it = function(e, r, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
}, Kr = function(e, r, a, n) {
  return {
    x: it(e.x, r.x, a.x, n),
    y: it(e.y, r.y, a.y, n)
  };
}, Qh = function(e, r, a, n) {
  var i = {
    x: r.x - e.x,
    y: r.y - e.y
  }, o = Ir(e, r), s = {
    x: i.x / o,
    y: i.y / o
  };
  return a = a ?? 0, n = n ?? a * o, {
    x: e.x + s.x * n,
    y: e.y + s.y * n
  };
}, Ra = function(e, r, a) {
  return Math.max(e, Math.min(a, r));
}, bt = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
}, Jh = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, jh = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, ed = function(e, r) {
  e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
}, Pv = function(e, r, a) {
  e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, cn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, fn = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, o;
  if (r.length === 1)
    a = n = i = o = r[0];
  else if (r.length === 2)
    a = i = r[0], o = n = r[1];
  else if (r.length === 4) {
    var s = Qe(r, 4);
    a = s[0], n = s[1], i = s[2], o = s[3];
  }
  return e.x1 -= o, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, al = function(e, r) {
  e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, ds = function(e, r) {
  return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
}, ir = function(e, r, a) {
  return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
}, nl = function(e, r) {
  return ir(e, r.x, r.y);
}, Ov = function(e, r) {
  return ir(e, r.x1, r.y1) && ir(e, r.x2, r.y2);
}, td = (Ti = Math.hypot) !== null && Ti !== void 0 ? Ti : function(t, e) {
  return Math.sqrt(t * t + e * e);
};
function rd(t, e) {
  if (t.length < 3)
    throw new Error("Need at least 3 vertices");
  var r = function(x, C) {
    return {
      x: x.x + C.x,
      y: x.y + C.y
    };
  }, a = function(x, C) {
    return {
      x: x.x - C.x,
      y: x.y - C.y
    };
  }, n = function(x, C) {
    return {
      x: x.x * C,
      y: x.y * C
    };
  }, i = function(x, C) {
    return x.x * C.y - x.y * C.x;
  }, o = function(x) {
    var C = td(x.x, x.y);
    return C === 0 ? {
      x: 0,
      y: 0
    } : {
      x: x.x / C,
      y: x.y / C
    };
  }, s = function(x) {
    for (var C = 0, D = 0; D < x.length; D++) {
      var A = x[D], L = x[(D + 1) % x.length];
      C += A.x * L.y - L.x * A.y;
    }
    return C / 2;
  }, l = function(x, C, D, A) {
    var L = a(C, x), R = a(A, D), M = i(L, R);
    if (Math.abs(M) < 1e-9)
      return r(x, n(L, 0.5));
    var P = i(a(D, x), R) / M;
    return r(x, n(L, P));
  }, u = t.map(function(w) {
    return {
      x: w.x,
      y: w.y
    };
  });
  s(u) < 0 && u.reverse();
  for (var v = u.length, c = [], f = 0; f < v; f++) {
    var h = u[f], d = u[(f + 1) % v], g = a(d, h), p = o({
      x: g.y,
      y: -g.x
    });
    c.push(p);
  }
  for (var y = c.map(function(w, x) {
    var C = r(u[x], n(w, e)), D = r(u[(x + 1) % v], n(w, e));
    return {
      p1: C,
      p2: D
    };
  }), b = [], m = 0; m < v; m++) {
    var E = y[(m - 1 + v) % v], T = y[m], S = l(E.p1, E.p2, T.p1, T.p2);
    b.push(S);
  }
  return b;
}
function ad(t, e, r, a, n, i) {
  var o = fd(t, e, r, a, n), s = rd(o, i), l = bt();
  return s.forEach(function(u) {
    return Pv(l, u.x, u.y);
  }), l;
}
var kv = function(e, r, a, n, i, o, s) {
  var l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", u = l === "auto" ? cr(i, o) : l, v = i / 2, c = o / 2;
  u = Math.min(u, v, c);
  var f = u !== v, h = u !== c, d;
  if (f) {
    var g = a - v + u - s, p = n - c - s, y = a + v - u + s, b = p;
    if (d = or(e, r, a, n, g, p, y, b, !1), d.length > 0)
      return d;
  }
  if (h) {
    var m = a + v + s, E = n - c + u - s, T = m, S = n + c - u + s;
    if (d = or(e, r, a, n, m, E, T, S, !1), d.length > 0)
      return d;
  }
  if (f) {
    var w = a - v + u - s, x = n + c + s, C = a + v - u + s, D = x;
    if (d = or(e, r, a, n, w, x, C, D, !1), d.length > 0)
      return d;
  }
  if (h) {
    var A = a - v - s, L = n - c + u - s, R = A, M = n + c - u + s;
    if (d = or(e, r, a, n, A, L, R, M, !1), d.length > 0)
      return d;
  }
  var P;
  {
    var N = a - v + u, O = n - c + u;
    if (P = wa(e, r, a, n, N, O, u + s), P.length > 0 && P[0] <= N && P[1] <= O)
      return [P[0], P[1]];
  }
  {
    var k = a + v - u, F = n - c + u;
    if (P = wa(e, r, a, n, k, F, u + s), P.length > 0 && P[0] >= k && P[1] <= F)
      return [P[0], P[1]];
  }
  {
    var _ = a + v - u, B = n + c - u;
    if (P = wa(e, r, a, n, _, B, u + s), P.length > 0 && P[0] >= _ && P[1] >= B)
      return [P[0], P[1]];
  }
  {
    var G = a - v + u, H = n + c - u;
    if (P = wa(e, r, a, n, G, H, u + s), P.length > 0 && P[0] <= G && P[1] >= H)
      return [P[0], P[1]];
  }
  return [];
}, nd = function(e, r, a, n, i, o, s) {
  var l = s, u = Math.min(a, i), v = Math.max(a, i), c = Math.min(n, o), f = Math.max(n, o);
  return u - l <= e && e <= v + l && c - l <= r && r <= f + l;
}, id = function(e, r, a, n, i, o, s, l, u) {
  var v = {
    x1: Math.min(a, s, i) - u,
    x2: Math.max(a, s, i) + u,
    y1: Math.min(n, l, o) - u,
    y2: Math.max(n, l, o) + u
  };
  return !(e < v.x1 || e > v.x2 || r < v.y1 || r > v.y2);
}, od = function(e, r, a, n) {
  a -= n;
  var i = r * r - 4 * e * a;
  if (i < 0)
    return [];
  var o = Math.sqrt(i), s = 2 * e, l = (-r + o) / s, u = (-r - o) / s;
  return [l, u];
}, sd = function(e, r, a, n, i) {
  var o = 1e-5;
  e === 0 && (e = o), r /= e, a /= e, n /= e;
  var s, l, u, v, c, f, h, d;
  if (l = (3 * a - r * r) / 9, u = -(27 * n) + r * (9 * a - 2 * (r * r)), u /= 54, s = l * l * l + u * u, i[1] = 0, h = r / 3, s > 0) {
    c = u + Math.sqrt(s), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), f = u - Math.sqrt(s), f = f < 0 ? -Math.pow(-f, 1 / 3) : Math.pow(f, 1 / 3), i[0] = -h + c + f, h += (c + f) / 2, i[4] = i[2] = -h, h = Math.sqrt(3) * (-f + c) / 2, i[3] = h, i[5] = -h;
    return;
  }
  if (i[5] = i[3] = 0, s === 0) {
    d = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -h + 2 * d, i[4] = i[2] = -(d + h);
    return;
  }
  l = -l, v = l * l * l, v = Math.acos(u / Math.sqrt(v)), d = 2 * Math.sqrt(l), i[0] = -h + d * Math.cos(v / 3), i[2] = -h + d * Math.cos((v + 2 * Math.PI) / 3), i[4] = -h + d * Math.cos((v + 4 * Math.PI) / 3);
}, ld = function(e, r, a, n, i, o, s, l) {
  var u = 1 * a * a - 4 * a * i + 2 * a * s + 4 * i * i - 4 * i * s + s * s + n * n - 4 * n * o + 2 * n * l + 4 * o * o - 4 * o * l + l * l, v = 9 * a * i - 3 * a * a - 3 * a * s - 6 * i * i + 3 * i * s + 9 * n * o - 3 * n * n - 3 * n * l - 6 * o * o + 3 * o * l, c = 3 * a * a - 6 * a * i + a * s - a * e + 2 * i * i + 2 * i * e - s * e + 3 * n * n - 6 * n * o + n * l - n * r + 2 * o * o + 2 * o * r - l * r, f = 1 * a * i - a * a + a * e - i * e + n * o - n * n + n * r - o * r, h = [];
  sd(u, v, c, f, h);
  for (var d = 1e-7, g = [], p = 0; p < 6; p += 2)
    Math.abs(h[p + 1]) < d && h[p] >= 0 && h[p] <= 1 && g.push(h[p]);
  g.push(1), g.push(0);
  for (var y = -1, b, m, E, T = 0; T < g.length; T++)
    b = Math.pow(1 - g[T], 2) * a + 2 * (1 - g[T]) * g[T] * i + g[T] * g[T] * s, m = Math.pow(1 - g[T], 2) * n + 2 * (1 - g[T]) * g[T] * o + g[T] * g[T] * l, E = Math.pow(b - e, 2) + Math.pow(m - r, 2), y >= 0 ? E < y && (y = E) : y = E;
  return y;
}, ud = function(e, r, a, n, i, o) {
  var s = [e - a, r - n], l = [i - a, o - n], u = l[0] * l[0] + l[1] * l[1], v = s[0] * s[0] + s[1] * s[1], c = s[0] * l[0] + s[1] * l[1], f = c * c / u;
  return c < 0 ? v : f > u ? (e - i) * (e - i) + (r - o) * (r - o) : v - f;
}, Tt = function(e, r, a) {
  for (var n, i, o, s, l, u = 0, v = 0; v < a.length / 2; v++)
    if (n = a[v * 2], i = a[v * 2 + 1], v + 1 < a.length / 2 ? (o = a[(v + 1) * 2], s = a[(v + 1) * 2 + 1]) : (o = a[(v + 1 - a.length / 2) * 2], s = a[(v + 1 - a.length / 2) * 2 + 1]), !(n == e && o == e)) if (n >= e && e >= o || n <= e && e <= o)
      l = (e - n) / (o - n) * (s - i) + i, l > r && u++;
    else
      continue;
  return u % 2 !== 0;
}, Qt = function(e, r, a, n, i, o, s, l, u) {
  var v = new Array(a.length), c;
  l[0] != null ? (c = Math.atan(l[1] / l[0]), l[0] < 0 ? c = c + Math.PI / 2 : c = -c - Math.PI / 2) : c = l;
  for (var f = Math.cos(-c), h = Math.sin(-c), d = 0; d < v.length / 2; d++)
    v[d * 2] = o / 2 * (a[d * 2] * f - a[d * 2 + 1] * h), v[d * 2 + 1] = s / 2 * (a[d * 2 + 1] * f + a[d * 2] * h), v[d * 2] += n, v[d * 2 + 1] += i;
  var g;
  if (u > 0) {
    var p = Mn(v, -u);
    g = In(p);
  } else
    g = v;
  return Tt(e, r, g);
}, vd = function(e, r, a, n, i, o, s, l) {
  for (var u = new Array(a.length * 2), v = 0; v < l.length; v++) {
    var c = l[v];
    u[v * 4 + 0] = c.startX, u[v * 4 + 1] = c.startY, u[v * 4 + 2] = c.stopX, u[v * 4 + 3] = c.stopY;
    var f = Math.pow(c.cx - e, 2) + Math.pow(c.cy - r, 2);
    if (f <= Math.pow(c.radius, 2))
      return !0;
  }
  return Tt(e, r, u);
}, In = function(e) {
  for (var r = new Array(e.length / 2), a, n, i, o, s, l, u, v, c = 0; c < e.length / 4; c++) {
    a = e[c * 4], n = e[c * 4 + 1], i = e[c * 4 + 2], o = e[c * 4 + 3], c < e.length / 4 - 1 ? (s = e[(c + 1) * 4], l = e[(c + 1) * 4 + 1], u = e[(c + 1) * 4 + 2], v = e[(c + 1) * 4 + 3]) : (s = e[0], l = e[1], u = e[2], v = e[3]);
    var f = or(a, n, i, o, s, l, u, v, !0);
    r[c * 2] = f[0], r[c * 2 + 1] = f[1];
  }
  return r;
}, Mn = function(e, r) {
  for (var a = new Array(e.length * 2), n, i, o, s, l = 0; l < e.length / 2; l++) {
    n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (o = e[(l + 1) * 2], s = e[(l + 1) * 2 + 1]) : (o = e[0], s = e[1]);
    var u = s - i, v = -(o - n), c = Math.sqrt(u * u + v * v), f = u / c, h = v / c;
    a[l * 4] = n + f * r, a[l * 4 + 1] = i + h * r, a[l * 4 + 2] = o + f * r, a[l * 4 + 3] = s + h * r;
  }
  return a;
}, cd = function(e, r, a, n, i, o) {
  var s = a - e, l = n - r;
  s /= i, l /= o;
  var u = Math.sqrt(s * s + l * l), v = u - 1;
  if (v < 0)
    return [];
  var c = v / u;
  return [(a - e) * c + e, (n - r) * c + r];
}, Lr = function(e, r, a, n, i, o, s) {
  return e -= i, r -= o, e /= a / 2 + s, r /= n / 2 + s, e * e + r * r <= 1;
}, wa = function(e, r, a, n, i, o, s) {
  var l = [a - e, n - r], u = [e - i, r - o], v = l[0] * l[0] + l[1] * l[1], c = 2 * (u[0] * l[0] + u[1] * l[1]), f = u[0] * u[0] + u[1] * u[1] - s * s, h = c * c - 4 * v * f;
  if (h < 0)
    return [];
  var d = (-c + Math.sqrt(h)) / (2 * v), g = (-c - Math.sqrt(h)) / (2 * v), p = Math.min(d, g), y = Math.max(d, g), b = [];
  if (p >= 0 && p <= 1 && b.push(p), y >= 0 && y <= 1 && b.push(y), b.length === 0)
    return [];
  var m = b[0] * l[0] + e, E = b[0] * l[1] + r;
  if (b.length > 1) {
    if (b[0] == b[1])
      return [m, E];
    var T = b[1] * l[0] + e, S = b[1] * l[1] + r;
    return [m, E, T, S];
  } else
    return [m, E];
}, Ci = function(e, r, a) {
  return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
}, or = function(e, r, a, n, i, o, s, l, u) {
  var v = e - i, c = a - e, f = s - i, h = r - o, d = n - r, g = l - o, p = f * h - g * v, y = c * h - d * v, b = g * c - f * d;
  if (b !== 0) {
    var m = p / b, E = y / b, T = 1e-3, S = 0 - T, w = 1 + T;
    return S <= m && m <= w && S <= E && E <= w ? [e + m * c, r + m * d] : u ? [e + m * c, r + m * d] : [];
  } else
    return p === 0 || y === 0 ? Ci(e, a, s) === s ? [s, l] : Ci(e, a, i) === i ? [i, o] : Ci(i, s, a) === a ? [a, n] : [] : [];
}, fd = function(e, r, a, n, i) {
  var o = [], s = n / 2, l = i / 2, u = r, v = a;
  o.push({
    x: u + s * e[0],
    y: v + l * e[1]
  });
  for (var c = 1; c < e.length / 2; c++)
    o.push({
      x: u + s * e[c * 2],
      y: v + l * e[c * 2 + 1]
    });
  return o;
}, Ia = function(e, r, a, n, i, o, s, l) {
  var u = [], v, c = new Array(a.length), f = !0;
  o == null && (f = !1);
  var h;
  if (f) {
    for (var d = 0; d < c.length / 2; d++)
      c[d * 2] = a[d * 2] * o + n, c[d * 2 + 1] = a[d * 2 + 1] * s + i;
    if (l > 0) {
      var g = Mn(c, -l);
      h = In(g);
    } else
      h = c;
  } else
    h = a;
  for (var p, y, b, m, E = 0; E < h.length / 2; E++)
    p = h[E * 2], y = h[E * 2 + 1], E < h.length / 2 - 1 ? (b = h[(E + 1) * 2], m = h[(E + 1) * 2 + 1]) : (b = h[0], m = h[1]), v = or(e, r, n, i, p, y, b, m), v.length !== 0 && u.push(v[0], v[1]);
  return u;
}, hd = function(e, r, a, n, i, o, s, l, u) {
  var v = [], c, f = new Array(a.length * 2);
  u.forEach(function(b, m) {
    m === 0 ? (f[f.length - 2] = b.startX, f[f.length - 1] = b.startY) : (f[m * 4 - 2] = b.startX, f[m * 4 - 1] = b.startY), f[m * 4] = b.stopX, f[m * 4 + 1] = b.stopY, c = wa(e, r, n, i, b.cx, b.cy, b.radius), c.length !== 0 && v.push(c[0], c[1]);
  });
  for (var h = 0; h < f.length / 4; h++)
    c = or(e, r, n, i, f[h * 4], f[h * 4 + 1], f[h * 4 + 2], f[h * 4 + 3], !1), c.length !== 0 && v.push(c[0], c[1]);
  if (v.length > 2) {
    for (var d = [v[0], v[1]], g = Math.pow(d[0] - e, 2) + Math.pow(d[1] - r, 2), p = 1; p < v.length / 2; p++) {
      var y = Math.pow(v[p * 2] - e, 2) + Math.pow(v[p * 2 + 1] - r, 2);
      y <= g && (d[0] = v[p * 2], d[1] = v[p * 2 + 1], g = y);
    }
    return d;
  }
  return v;
}, ja = function(e, r, a) {
  var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), o = (i - a) / i;
  return o < 0 && (o = 1e-5), [r[0] + o * n[0], r[1] + o * n[1]];
}, yt = function(e, r) {
  var a = _o(e, r);
  return a = Nv(a), a;
}, Nv = function(e) {
  for (var r, a, n = e.length / 2, i = 1 / 0, o = 1 / 0, s = -1 / 0, l = -1 / 0, u = 0; u < n; u++)
    r = e[2 * u], a = e[2 * u + 1], i = Math.min(i, r), s = Math.max(s, r), o = Math.min(o, a), l = Math.max(l, a);
  for (var v = 2 / (s - i), c = 2 / (l - o), f = 0; f < n; f++)
    r = e[2 * f] = e[2 * f] * v, a = e[2 * f + 1] = e[2 * f + 1] * c, i = Math.min(i, r), s = Math.max(s, r), o = Math.min(o, a), l = Math.max(l, a);
  if (o < -1)
    for (var h = 0; h < n; h++)
      a = e[2 * h + 1] = e[2 * h + 1] + (-1 - o);
  return e;
}, _o = function(e, r) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += r;
  for (var i = new Array(e * 2), o, s = 0; s < e; s++)
    o = s * a + n, i[2 * s] = Math.cos(o), i[2 * s + 1] = Math.sin(-o);
  return i;
}, cr = function(e, r) {
  return Math.min(e / 4, r / 4, 8);
}, Bv = function(e, r) {
  return Math.min(e / 10, r / 10, 8);
}, gs = function() {
  return 8;
}, dd = function(e, r, a) {
  return [e - 2 * r + a, 2 * (r - e), e];
}, Go = function(e, r) {
  return {
    heightOffset: Math.min(15, 0.05 * r),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
};
function Di(t, e) {
  function r(c) {
    for (var f = [], h = 0; h < c.length; h++) {
      var d = c[h], g = c[(h + 1) % c.length], p = {
        x: g.x - d.x,
        y: g.y - d.y
      }, y = {
        x: -p.y,
        y: p.x
      }, b = Math.sqrt(y.x * y.x + y.y * y.y);
      f.push({
        x: y.x / b,
        y: y.y / b
      });
    }
    return f;
  }
  function a(c, f) {
    var h = 1 / 0, d = -1 / 0, g = Ct(c), p;
    try {
      for (g.s(); !(p = g.n()).done; ) {
        var y = p.value, b = y.x * f.x + y.y * f.y;
        h = Math.min(h, b), d = Math.max(d, b);
      }
    } catch (m) {
      g.e(m);
    } finally {
      g.f();
    }
    return {
      min: h,
      max: d
    };
  }
  function n(c, f) {
    return !(c.max < f.min || f.max < c.min);
  }
  var i = [].concat(Sn(r(t)), Sn(r(e))), o = Ct(i), s;
  try {
    for (o.s(); !(s = o.n()).done; ) {
      var l = s.value, u = a(t, l), v = a(e, l);
      if (!n(u, v))
        return !1;
    }
  } catch (c) {
    o.e(c);
  } finally {
    o.f();
  }
  return !0;
}
var gd = ct({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), pd = {
  pageRank: function(e) {
    for (var r = gd(e), a = r.dampingFactor, n = r.precision, i = r.iterations, o = r.weight, s = this._private.cy, l = this.byGroup(), u = l.nodes, v = l.edges, c = u.length, f = c * c, h = v.length, d = new Array(f), g = new Array(c), p = (1 - a) / c, y = 0; y < c; y++) {
      for (var b = 0; b < c; b++) {
        var m = y * c + b;
        d[m] = 0;
      }
      g[y] = 0;
    }
    for (var E = 0; E < h; E++) {
      var T = v[E], S = T.data("source"), w = T.data("target");
      if (S !== w) {
        var x = u.indexOfId(S), C = u.indexOfId(w), D = o(T), A = C * c + x;
        d[A] += D, g[x] += D;
      }
    }
    for (var L = 1 / c + p, R = 0; R < c; R++)
      if (g[R] === 0)
        for (var M = 0; M < c; M++) {
          var P = M * c + R;
          d[P] = L;
        }
      else
        for (var N = 0; N < c; N++) {
          var O = N * c + R;
          d[O] = d[O] / g[R] + p;
        }
    for (var k = new Array(c), F = new Array(c), _, B = 0; B < c; B++)
      k[B] = 1;
    for (var G = 0; G < i; G++) {
      for (var H = 0; H < c; H++)
        F[H] = 0;
      for (var X = 0; X < c; X++)
        for (var $ = 0; $ < c; $++) {
          var K = X * c + $;
          F[X] += d[K] * k[$];
        }
      Zh(F), _ = k, k = F, F = _;
      for (var ee = 0, ae = 0; ae < c; ae++) {
        var Z = _[ae] - k[ae];
        ee += Z * Z;
      }
      if (ee < n)
        break;
    }
    var V = {
      rank: function(Y) {
        return Y = s.collection(Y)[0], k[u.indexOf(Y)];
      }
    };
    return V;
  }
  // pageRank
}, il = ct({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1,
  alpha: 0
}), Zr = {
  degreeCentralityNormalized: function(e) {
    e = il(e);
    var r = this.cy(), a = this.nodes(), n = a.length;
    if (e.directed) {
      for (var v = {}, c = {}, f = 0, h = 0, d = 0; d < n; d++) {
        var g = a[d], p = g.id();
        e.root = g;
        var y = this.degreeCentrality(e);
        f < y.indegree && (f = y.indegree), h < y.outdegree && (h = y.outdegree), v[p] = y.indegree, c[p] = y.outdegree;
      }
      return {
        indegree: function(m) {
          return f == 0 ? 0 : (de(m) && (m = r.filter(m)), v[m.id()] / f);
        },
        outdegree: function(m) {
          return h === 0 ? 0 : (de(m) && (m = r.filter(m)), c[m.id()] / h);
        }
      };
    } else {
      for (var i = {}, o = 0, s = 0; s < n; s++) {
        var l = a[s];
        e.root = l;
        var u = this.degreeCentrality(e);
        o < u.degree && (o = u.degree), i[l.id()] = u.degree;
      }
      return {
        degree: function(m) {
          return o === 0 ? 0 : (de(m) && (m = r.filter(m)), i[m.id()] / o);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = il(e);
    var r = this.cy(), a = this, n = e, i = n.root, o = n.weight, s = n.directed, l = n.alpha;
    if (i = r.collection(i)[0], s) {
      for (var h = i.connectedEdges(), d = h.filter(function(S) {
        return S.target().same(i) && a.has(S);
      }), g = h.filter(function(S) {
        return S.source().same(i) && a.has(S);
      }), p = d.length, y = g.length, b = 0, m = 0, E = 0; E < d.length; E++)
        b += o(d[E]);
      for (var T = 0; T < g.length; T++)
        m += o(g[T]);
      return {
        indegree: Math.pow(p, 1 - l) * Math.pow(b, l),
        outdegree: Math.pow(y, 1 - l) * Math.pow(m, l)
      };
    } else {
      for (var u = i.connectedEdges().intersection(a), v = u.length, c = 0, f = 0; f < u.length; f++)
        c += o(u[f]);
      return {
        degree: Math.pow(v, 1 - l) * Math.pow(c, l)
      };
    }
  }
  // degreeCentrality
};
Zr.dc = Zr.degreeCentrality;
Zr.dcn = Zr.degreeCentralityNormalised = Zr.degreeCentralityNormalized;
var ol = ct({
  harmonic: !0,
  weight: function() {
    return 1;
  },
  directed: !1,
  root: null
}), Qr = {
  closenessCentralityNormalized: function(e) {
    for (var r = ol(e), a = r.harmonic, n = r.weight, i = r.directed, o = this.cy(), s = {}, l = 0, u = this.nodes(), v = this.floydWarshall({
      weight: n,
      directed: i
    }), c = 0; c < u.length; c++) {
      for (var f = 0, h = u[c], d = 0; d < u.length; d++)
        if (c !== d) {
          var g = v.distance(h, u[d]);
          a ? f += 1 / g : f += g;
        }
      a || (f = 1 / f), l < f && (l = f), s[h.id()] = f;
    }
    return {
      closeness: function(y) {
        return l == 0 ? 0 : (de(y) ? y = o.filter(y)[0].id() : y = y.id(), s[y] / l);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var r = ol(e), a = r.root, n = r.weight, i = r.directed, o = r.harmonic;
    a = this.filter(a)[0];
    for (var s = this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), l = 0, u = this.nodes(), v = 0; v < u.length; v++) {
      var c = u[v];
      if (!c.same(a)) {
        var f = s.distanceTo(c);
        o ? l += 1 / f : l += f;
      }
    }
    return o ? l : 1 / l;
  }
  // closenessCentrality
};
Qr.cc = Qr.closenessCentrality;
Qr.ccn = Qr.closenessCentralityNormalised = Qr.closenessCentralityNormalized;
var yd = ct({
  weight: null,
  directed: !1
}), zo = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var r = yd(e), a = r.directed, n = r.weight, i = n != null, o = this.cy(), s = this.nodes(), l = {}, u = {}, v = 0, c = {
      set: function(m, E) {
        u[m] = E, E > v && (v = E);
      },
      get: function(m) {
        return u[m];
      }
    }, f = 0; f < s.length; f++) {
      var h = s[f], d = h.id();
      a ? l[d] = h.outgoers().nodes() : l[d] = h.openNeighborhood().nodes(), c.set(d, 0);
    }
    for (var g = function() {
      for (var m = s[p].id(), E = [], T = {}, S = {}, w = {}, x = new Ua(function(X, $) {
        return w[X] - w[$];
      }), C = 0; C < s.length; C++) {
        var D = s[C].id();
        T[D] = [], S[D] = 0, w[D] = 1 / 0;
      }
      for (S[m] = 1, w[m] = 0, x.push(m); !x.empty(); ) {
        var A = x.pop();
        if (E.push(A), i)
          for (var L = 0; L < l[A].length; L++) {
            var R = l[A][L], M = o.getElementById(A), P = void 0;
            M.edgesTo(R).length > 0 ? P = M.edgesTo(R)[0] : P = R.edgesTo(M)[0];
            var N = n(P);
            R = R.id(), w[R] > w[A] + N && (w[R] = w[A] + N, x.nodes.indexOf(R) < 0 ? x.push(R) : x.updateItem(R), S[R] = 0, T[R] = []), w[R] == w[A] + N && (S[R] = S[R] + S[A], T[R].push(A));
          }
        else
          for (var O = 0; O < l[A].length; O++) {
            var k = l[A][O].id();
            w[k] == 1 / 0 && (x.push(k), w[k] = w[A] + 1), w[k] == w[A] + 1 && (S[k] = S[k] + S[A], T[k].push(A));
          }
      }
      for (var F = {}, _ = 0; _ < s.length; _++)
        F[s[_].id()] = 0;
      for (; E.length > 0; ) {
        for (var B = E.pop(), G = 0; G < T[B].length; G++) {
          var H = T[B][G];
          F[H] = F[H] + S[H] / S[B] * (1 + F[B]);
        }
        B != s[p].id() && c.set(B, c.get(B) + F[B]);
      }
    }, p = 0; p < s.length; p++)
      g();
    var y = {
      betweenness: function(m) {
        var E = o.collection(m).id();
        return c.get(E);
      },
      betweennessNormalized: function(m) {
        if (v == 0)
          return 0;
        var E = o.collection(m).id();
        return c.get(E) / v;
      }
    };
    return y.betweennessNormalised = y.betweennessNormalized, y;
  }
  // betweennessCentrality
};
zo.bc = zo.betweennessCentrality;
var md = ct({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(t) {
      return 1;
    }
  ]
}), bd = function(e) {
  return md(e);
}, wd = function(e, r) {
  for (var a = 0, n = 0; n < r.length; n++)
    a += r[n](e);
  return a;
}, Ed = function(e, r, a) {
  for (var n = 0; n < r; n++)
    e[n * r + n] = a;
}, Fv = function(e, r) {
  for (var a, n = 0; n < r; n++) {
    a = 0;
    for (var i = 0; i < r; i++)
      a += e[i * r + n];
    for (var o = 0; o < r; o++)
      e[o * r + n] = e[o * r + n] / a;
  }
}, xd = function(e, r, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var o = 0; o < a; o++)
      n[i * a + o] = 0;
    for (var s = 0; s < a; s++)
      for (var l = 0; l < a; l++)
        n[i * a + l] += e[i * a + s] * r[s * a + l];
  }
  return n;
}, Td = function(e, r, a) {
  for (var n = e.slice(0), i = 1; i < a; i++)
    e = xd(e, n, r);
  return e;
}, Cd = function(e, r, a) {
  for (var n = new Array(r * r), i = 0; i < r * r; i++)
    n[i] = Math.pow(e[i], a);
  return Fv(n, r), n;
}, Dd = function(e, r, a, n) {
  for (var i = 0; i < a; i++) {
    var o = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), s = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (o !== s)
      return !1;
  }
  return !0;
}, Sd = function(e, r, a, n) {
  for (var i = [], o = 0; o < r; o++) {
    for (var s = [], l = 0; l < r; l++)
      Math.round(e[o * r + l] * 1e3) / 1e3 > 0 && s.push(a[l]);
    s.length !== 0 && i.push(n.collection(s));
  }
  return i;
}, Ad = function(e, r) {
  for (var a = 0; a < e.length; a++)
    if (!r[a] || e[a].id() !== r[a].id())
      return !1;
  return !0;
}, Ld = function(e) {
  for (var r = 0; r < e.length; r++)
    for (var a = 0; a < e.length; a++)
      r != a && Ad(e[r], e[a]) && e.splice(a, 1);
  return e;
}, sl = function(e) {
  for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = bd(e), o = {}, s = 0; s < r.length; s++)
    o[r[s].id()] = s;
  for (var l = r.length, u = l * l, v = new Array(u), c, f = 0; f < u; f++)
    v[f] = 0;
  for (var h = 0; h < a.length; h++) {
    var d = a[h], g = o[d.source().id()], p = o[d.target().id()], y = wd(d, i.attributes);
    v[g * l + p] += y, v[p * l + g] += y;
  }
  Ed(v, l, i.multFactor), Fv(v, l);
  for (var b = !0, m = 0; b && m < i.maxIterations; )
    b = !1, c = Td(v, l, i.expandFactor), v = Cd(c, l, i.inflateFactor), Dd(v, c, u, 4) || (b = !0), m++;
  var E = Sd(v, l, r, n);
  return E = Ld(E), E;
}, Rd = {
  markovClustering: sl,
  mcl: sl
}, Id = function(e) {
  return e;
}, _v = function(e, r) {
  return Math.abs(r - e);
}, ll = function(e, r, a) {
  return e + _v(r, a);
}, ul = function(e, r, a) {
  return e + Math.pow(a - r, 2);
}, Md = function(e) {
  return Math.sqrt(e);
}, Pd = function(e, r, a) {
  return Math.max(e, _v(r, a));
}, ha = function(e, r, a, n, i) {
  for (var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Id, s = n, l, u, v = 0; v < e; v++)
    l = r(v), u = a(v), s = i(s, l, u);
  return o(s);
}, ea = {
  euclidean: function(e, r, a) {
    return e >= 2 ? ha(e, r, a, 0, ul, Md) : ha(e, r, a, 0, ll);
  },
  squaredEuclidean: function(e, r, a) {
    return ha(e, r, a, 0, ul);
  },
  manhattan: function(e, r, a) {
    return ha(e, r, a, 0, ll);
  },
  max: function(e, r, a) {
    return ha(e, r, a, -1 / 0, Pd);
  }
};
ea["squared-euclidean"] = ea.squaredEuclidean;
ea.squaredeuclidean = ea.squaredEuclidean;
function Yn(t, e, r, a, n, i) {
  var o;
  return He(t) ? o = t : o = ea[t] || ea.euclidean, e === 0 && He(t) ? o(n, i) : o(e, r, a, n, i);
}
var Od = ct({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: !1,
  testCentroids: null
}), ps = function(e) {
  return Od(e);
}, Pn = function(e, r, a, n, i) {
  var o = i !== "kMedoids", s = o ? function(c) {
    return a[c];
  } : function(c) {
    return n[c](a);
  }, l = function(f) {
    return n[f](r);
  }, u = a, v = r;
  return Yn(e, n.length, s, l, u, v);
}, Si = function(e, r, a) {
  for (var n = a.length, i = new Array(n), o = new Array(n), s = new Array(r), l = null, u = 0; u < n; u++)
    i[u] = e.min(a[u]).value, o[u] = e.max(a[u]).value;
  for (var v = 0; v < r; v++) {
    l = [];
    for (var c = 0; c < n; c++)
      l[c] = Math.random() * (o[c] - i[c]) + i[c];
    s[v] = l;
  }
  return s;
}, Gv = function(e, r, a, n, i) {
  for (var o = 1 / 0, s = 0, l = 0; l < r.length; l++) {
    var u = Pn(a, e, r[l], n, i);
    u < o && (o = u, s = l);
  }
  return s;
}, zv = function(e, r, a) {
  for (var n = [], i = null, o = 0; o < r.length; o++)
    i = r[o], a[i.id()] === e && n.push(i);
  return n;
}, kd = function(e, r, a) {
  return Math.abs(r - e) <= a;
}, Nd = function(e, r, a) {
  for (var n = 0; n < e.length; n++)
    for (var i = 0; i < e[n].length; i++) {
      var o = Math.abs(e[n][i] - r[n][i]);
      if (o > a)
        return !1;
    }
  return !0;
}, Bd = function(e, r, a) {
  for (var n = 0; n < a; n++)
    if (e === r[n]) return !0;
  return !1;
}, vl = function(e, r) {
  var a = new Array(r);
  if (e.length < 50)
    for (var n = 0; n < r; n++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; Bd(i, a, n); )
        i = e[Math.floor(Math.random() * e.length)];
      a[n] = i;
    }
  else
    for (var o = 0; o < r; o++)
      a[o] = e[Math.floor(Math.random() * e.length)];
  return a;
}, cl = function(e, r, a) {
  for (var n = 0, i = 0; i < r.length; i++)
    n += Pn("manhattan", r[i], e, a, "kMedoids");
  return n;
}, Fd = function(e) {
  var r = this.cy(), a = this.nodes(), n = null, i = ps(e), o = new Array(i.k), s = {}, l;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = Si(a, i.k, i.attributes)) : rt(i.testCentroids) === "object" ? l = i.testCentroids : l = Si(a, i.k, i.attributes) : l = Si(a, i.k, i.attributes);
  for (var u = !0, v = 0; u && v < i.maxIterations; ) {
    for (var c = 0; c < a.length; c++)
      n = a[c], s[n.id()] = Gv(n, l, i.distance, i.attributes, "kMeans");
    u = !1;
    for (var f = 0; f < i.k; f++) {
      var h = zv(f, a, s);
      if (h.length !== 0) {
        for (var d = i.attributes.length, g = l[f], p = new Array(d), y = new Array(d), b = 0; b < d; b++) {
          y[b] = 0;
          for (var m = 0; m < h.length; m++)
            n = h[m], y[b] += i.attributes[b](n);
          p[b] = y[b] / h.length, kd(p[b], g[b], i.sensitivityThreshold) || (u = !0);
        }
        l[f] = p, o[f] = r.collection(h);
      }
    }
    v++;
  }
  return o;
}, _d = function(e) {
  var r = this.cy(), a = this.nodes(), n = null, i = ps(e), o = new Array(i.k), s, l = {}, u, v = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (rt(i.testCentroids) === "object" ? s = i.testCentroids : s = vl(a, i.k)) : s = vl(a, i.k);
  for (var c = !0, f = 0; c && f < i.maxIterations; ) {
    for (var h = 0; h < a.length; h++)
      n = a[h], l[n.id()] = Gv(n, s, i.distance, i.attributes, "kMedoids");
    c = !1;
    for (var d = 0; d < s.length; d++) {
      var g = zv(d, a, l);
      if (g.length !== 0) {
        v[d] = cl(s[d], g, i.attributes);
        for (var p = 0; p < g.length; p++)
          u = cl(g[p], g, i.attributes), u < v[d] && (v[d] = u, s[d] = g[p], c = !0);
        o[d] = r.collection(g);
      }
    }
    f++;
  }
  return o;
}, Gd = function(e, r, a, n, i) {
  for (var o, s, l = 0; l < r.length; l++)
    for (var u = 0; u < e.length; u++)
      n[l][u] = Math.pow(a[l][u], i.m);
  for (var v = 0; v < e.length; v++)
    for (var c = 0; c < i.attributes.length; c++) {
      o = 0, s = 0;
      for (var f = 0; f < r.length; f++)
        o += n[f][v] * i.attributes[c](r[f]), s += n[f][v];
      e[v][c] = o / s;
    }
}, zd = function(e, r, a, n, i) {
  for (var o = 0; o < e.length; o++)
    r[o] = e[o].slice();
  for (var s, l, u, v = 2 / (i.m - 1), c = 0; c < a.length; c++)
    for (var f = 0; f < n.length; f++) {
      s = 0;
      for (var h = 0; h < a.length; h++)
        l = Pn(i.distance, n[f], a[c], i.attributes, "cmeans"), u = Pn(i.distance, n[f], a[h], i.attributes, "cmeans"), s += Math.pow(l / u, v);
      e[f][c] = 1 / s;
    }
}, Vd = function(e, r, a, n) {
  for (var i = new Array(a.k), o = 0; o < i.length; o++)
    i[o] = [];
  for (var s, l, u = 0; u < r.length; u++) {
    s = -1 / 0, l = -1;
    for (var v = 0; v < r[0].length; v++)
      r[u][v] > s && (s = r[u][v], l = v);
    i[l].push(e[u]);
  }
  for (var c = 0; c < i.length; c++)
    i[c] = n.collection(i[c]);
  return i;
}, fl = function(e) {
  var r = this.cy(), a = this.nodes(), n = ps(e), i, o, s, l, u;
  l = new Array(a.length);
  for (var v = 0; v < a.length; v++)
    l[v] = new Array(n.k);
  s = new Array(a.length);
  for (var c = 0; c < a.length; c++)
    s[c] = new Array(n.k);
  for (var f = 0; f < a.length; f++) {
    for (var h = 0, d = 0; d < n.k; d++)
      s[f][d] = Math.random(), h += s[f][d];
    for (var g = 0; g < n.k; g++)
      s[f][g] = s[f][g] / h;
  }
  o = new Array(n.k);
  for (var p = 0; p < n.k; p++)
    o[p] = new Array(n.attributes.length);
  u = new Array(a.length);
  for (var y = 0; y < a.length; y++)
    u[y] = new Array(n.k);
  for (var b = !0, m = 0; b && m < n.maxIterations; )
    b = !1, Gd(o, a, s, u, n), zd(s, l, o, a, n), Nd(s, l, n.sensitivityThreshold) || (b = !0), m++;
  return i = Vd(a, s, n, r), {
    clusters: i,
    degreeOfMembership: s
  };
}, Ud = {
  kMeans: Fd,
  kMedoids: _d,
  fuzzyCMeans: fl,
  fcm: fl
}, qd = ct({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: 1 / 0,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: !1,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
}), Yd = {
  single: "min",
  complete: "max"
}, Hd = function(e) {
  var r = qd(e), a = Yd[r.linkage];
  return a != null && (r.linkage = a), r;
}, hl = function(e, r, a, n, i) {
  for (var o = 0, s = 1 / 0, l, u = i.attributes, v = function(C, D) {
    return Yn(i.distance, u.length, function(A) {
      return u[A](C);
    }, function(A) {
      return u[A](D);
    }, C, D);
  }, c = 0; c < e.length; c++) {
    var f = e[c].key, h = a[f][n[f]];
    h < s && (o = f, s = h);
  }
  if (i.mode === "threshold" && s >= i.threshold || i.mode === "dendrogram" && e.length === 1)
    return !1;
  var d = r[o], g = r[n[o]], p;
  i.mode === "dendrogram" ? p = {
    left: d,
    right: g,
    key: d.key
  } : p = {
    value: d.value.concat(g.value),
    key: d.key
  }, e[d.index] = p, e.splice(g.index, 1), r[d.key] = p;
  for (var y = 0; y < e.length; y++) {
    var b = e[y];
    d.key === b.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[d.key][b.key], a[d.key][b.key] > a[g.key][b.key] && (l = a[g.key][b.key])) : i.linkage === "max" ? (l = a[d.key][b.key], a[d.key][b.key] < a[g.key][b.key] && (l = a[g.key][b.key])) : i.linkage === "mean" ? l = (a[d.key][b.key] * d.size + a[g.key][b.key] * g.size) / (d.size + g.size) : i.mode === "dendrogram" ? l = v(b.value, d.value) : l = v(b.value[0], d.value[0]), a[d.key][b.key] = a[b.key][d.key] = l;
  }
  for (var m = 0; m < e.length; m++) {
    var E = e[m].key;
    if (n[E] === d.key || n[E] === g.key) {
      for (var T = E, S = 0; S < e.length; S++) {
        var w = e[S].key;
        a[E][w] < a[E][T] && (T = w);
      }
      n[E] = T;
    }
    e[m].index = m;
  }
  return d.key = g.key = d.index = g.index = null, !0;
}, $r = function(e, r, a) {
  e && (e.value ? r.push(e.value) : (e.left && $r(e.left, r), e.right && $r(e.right, r)));
}, Vo = function(e, r) {
  if (!e) return "";
  if (e.left && e.right) {
    var a = Vo(e.left, r), n = Vo(e.right, r), i = r.add({
      group: "nodes",
      data: {
        id: a + "," + n
      }
    });
    return r.add({
      group: "edges",
      data: {
        source: a,
        target: i.id()
      }
    }), r.add({
      group: "edges",
      data: {
        source: n,
        target: i.id()
      }
    }), i.id();
  } else if (e.value)
    return e.value.id();
}, Uo = function(e, r, a) {
  if (!e) return [];
  var n = [], i = [], o = [];
  return r === 0 ? (e.left && $r(e.left, n), e.right && $r(e.right, i), o = n.concat(i), [a.collection(o)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && $r(e.left, n), e.right && $r(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = Uo(e.left, r - 1, a)), e.right && (i = Uo(e.right, r - 1, a)), n.concat(i));
}, dl = function(e) {
  for (var r = this.cy(), a = this.nodes(), n = Hd(e), i = n.attributes, o = function(m, E) {
    return Yn(n.distance, i.length, function(T) {
      return i[T](m);
    }, function(T) {
      return i[T](E);
    }, m, E);
  }, s = [], l = [], u = [], v = [], c = 0; c < a.length; c++) {
    var f = {
      value: n.mode === "dendrogram" ? a[c] : [a[c]],
      key: c,
      index: c
    };
    s[c] = f, v[c] = f, l[c] = [], u[c] = 0;
  }
  for (var h = 0; h < s.length; h++)
    for (var d = 0; d <= h; d++) {
      var g = void 0;
      n.mode === "dendrogram" ? g = h === d ? 1 / 0 : o(s[h].value, s[d].value) : g = h === d ? 1 / 0 : o(s[h].value[0], s[d].value[0]), l[h][d] = g, l[d][h] = g, g < l[h][u[h]] && (u[h] = d);
    }
  for (var p = hl(s, v, l, u, n); p; )
    p = hl(s, v, l, u, n);
  var y;
  return n.mode === "dendrogram" ? (y = Uo(s[0], n.dendrogramDepth, r), n.addDendrogram && Vo(s[0], r)) : (y = new Array(s.length), s.forEach(function(b, m) {
    b.key = b.index = null, y[m] = r.collection(b.value);
  })), y;
}, Xd = {
  hierarchicalClustering: dl,
  hca: dl
}, $d = ct({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
}), Wd = function(e) {
  var r = e.damping, a = e.preference;
  0.5 <= r && r < 1 || qe("Damping must range on [0.5, 1).  Got: ".concat(r));
  var n = ["median", "mean", "min", "max"];
  return n.some(function(i) {
    return i === a;
  }) || ne(a) || qe("Preference must be one of [".concat(n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), $d(e);
}, Kd = function(e, r, a, n) {
  var i = function(s, l) {
    return n[l](s);
  };
  return -Yn(e, n.length, function(o) {
    return i(r, o);
  }, function(o) {
    return i(a, o);
  }, r, a);
}, Zd = function(e, r) {
  var a = null;
  return r === "median" ? a = Wh(e) : r === "mean" ? a = $h(e) : r === "min" ? a = Hh(e) : r === "max" ? a = Xh(e) : a = r, a;
}, Qd = function(e, r, a) {
  for (var n = [], i = 0; i < e; i++)
    r[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, gl = function(e, r, a) {
  for (var n = [], i = 0; i < e; i++) {
    for (var o = -1, s = -1 / 0, l = 0; l < a.length; l++) {
      var u = a[l];
      r[i * e + u] > s && (o = u, s = r[i * e + u]);
    }
    o > 0 && n.push(o);
  }
  for (var v = 0; v < a.length; v++)
    n[a[v]] = a[v];
  return n;
}, Jd = function(e, r, a) {
  for (var n = gl(e, r, a), i = 0; i < a.length; i++) {
    for (var o = [], s = 0; s < n.length; s++)
      n[s] === a[i] && o.push(s);
    for (var l = -1, u = -1 / 0, v = 0; v < o.length; v++) {
      for (var c = 0, f = 0; f < o.length; f++)
        c += r[o[f] * e + o[v]];
      c > u && (l = v, u = c);
    }
    a[i] = o[l];
  }
  return n = gl(e, r, a), n;
}, pl = function(e) {
  for (var r = this.cy(), a = this.nodes(), n = Wd(e), i = {}, o = 0; o < a.length; o++)
    i[a[o].id()] = o;
  var s, l, u, v, c, f;
  s = a.length, l = s * s, u = new Array(l);
  for (var h = 0; h < l; h++)
    u[h] = -1 / 0;
  for (var d = 0; d < s; d++)
    for (var g = 0; g < s; g++)
      d !== g && (u[d * s + g] = Kd(n.distance, a[d], a[g], n.attributes));
  v = Zd(u, n.preference);
  for (var p = 0; p < s; p++)
    u[p * s + p] = v;
  c = new Array(l);
  for (var y = 0; y < l; y++)
    c[y] = 0;
  f = new Array(l);
  for (var b = 0; b < l; b++)
    f[b] = 0;
  for (var m = new Array(s), E = new Array(s), T = new Array(s), S = 0; S < s; S++)
    m[S] = 0, E[S] = 0, T[S] = 0;
  for (var w = new Array(s * n.minIterations), x = 0; x < w.length; x++)
    w[x] = 0;
  var C;
  for (C = 0; C < n.maxIterations; C++) {
    for (var D = 0; D < s; D++) {
      for (var A = -1 / 0, L = -1 / 0, R = -1, M = 0, P = 0; P < s; P++)
        m[P] = c[D * s + P], M = f[D * s + P] + u[D * s + P], M >= A ? (L = A, A = M, R = P) : M > L && (L = M);
      for (var N = 0; N < s; N++)
        c[D * s + N] = (1 - n.damping) * (u[D * s + N] - A) + n.damping * m[N];
      c[D * s + R] = (1 - n.damping) * (u[D * s + R] - L) + n.damping * m[R];
    }
    for (var O = 0; O < s; O++) {
      for (var k = 0, F = 0; F < s; F++)
        m[F] = f[F * s + O], E[F] = Math.max(0, c[F * s + O]), k += E[F];
      k -= E[O], E[O] = c[O * s + O], k += E[O];
      for (var _ = 0; _ < s; _++)
        f[_ * s + O] = (1 - n.damping) * Math.min(0, k - E[_]) + n.damping * m[_];
      f[O * s + O] = (1 - n.damping) * (k - E[O]) + n.damping * m[O];
    }
    for (var B = 0, G = 0; G < s; G++) {
      var H = f[G * s + G] + c[G * s + G] > 0 ? 1 : 0;
      w[C % n.minIterations * s + G] = H, B += H;
    }
    if (B > 0 && (C >= n.minIterations - 1 || C == n.maxIterations - 1)) {
      for (var X = 0, $ = 0; $ < s; $++) {
        T[$] = 0;
        for (var K = 0; K < n.minIterations; K++)
          T[$] += w[K * s + $];
        (T[$] === 0 || T[$] === n.minIterations) && X++;
      }
      if (X === s)
        break;
    }
  }
  for (var ee = Qd(s, c, f), ae = Jd(s, u, ee), Z = {}, V = 0; V < ee.length; V++)
    Z[ee[V]] = [];
  for (var q = 0; q < a.length; q++) {
    var Y = i[a[q].id()], Q = ae[Y];
    Q != null && Z[Q].push(a[q]);
  }
  for (var re = new Array(ee.length), ue = 0; ue < ee.length; ue++)
    re[ue] = r.collection(Z[ee[ue]]);
  return re;
}, jd = {
  affinityPropagation: pl,
  ap: pl
}, eg = ct({
  root: void 0,
  directed: !1
}), tg = {
  hierholzer: function(e) {
    if (!Pe(e)) {
      var r = arguments;
      e = {
        root: r[0],
        directed: r[1]
      };
    }
    var a = eg(e), n = a.root, i = a.directed, o = this, s = !1, l, u, v;
    n && (v = de(n) ? this.filter(n)[0].id() : n[0].id());
    var c = {}, f = {};
    i ? o.forEach(function(b) {
      var m = b.id();
      if (b.isNode()) {
        var E = b.indegree(!0), T = b.outdegree(!0), S = E - T, w = T - E;
        S == 1 ? l ? s = !0 : l = m : w == 1 ? u ? s = !0 : u = m : (w > 1 || S > 1) && (s = !0), c[m] = [], b.outgoers().forEach(function(x) {
          x.isEdge() && c[m].push(x.id());
        });
      } else
        f[m] = [void 0, b.target().id()];
    }) : o.forEach(function(b) {
      var m = b.id();
      if (b.isNode()) {
        var E = b.degree(!0);
        E % 2 && (l ? u ? s = !0 : u = m : l = m), c[m] = [], b.connectedEdges().forEach(function(T) {
          return c[m].push(T.id());
        });
      } else
        f[m] = [b.source().id(), b.target().id()];
    });
    var h = {
      found: !1,
      trail: void 0
    };
    if (s) return h;
    if (u && l)
      if (i) {
        if (v && u != v)
          return h;
        v = u;
      } else {
        if (v && u != v && l != v)
          return h;
        v || (v = u);
      }
    else
      v || (v = o[0].id());
    var d = function(m) {
      for (var E = m, T = [m], S, w, x; c[E].length; )
        S = c[E].shift(), w = f[S][0], x = f[S][1], E != x ? (c[x] = c[x].filter(function(C) {
          return C != S;
        }), E = x) : !i && E != w && (c[w] = c[w].filter(function(C) {
          return C != S;
        }), E = w), T.unshift(S), T.unshift(E);
      return T;
    }, g = [], p = [];
    for (p = d(v); p.length != 1; )
      c[p[0]].length == 0 ? (g.unshift(o.getElementById(p.shift())), g.unshift(o.getElementById(p.shift()))) : p = d(p.shift()).concat(p);
    g.unshift(o.getElementById(p.shift()));
    for (var y in c)
      if (c[y].length)
        return h;
    return h.found = !0, h.trail = this.spawn(g, !0), h;
  }
}, en = function() {
  var e = this, r = {}, a = 0, n = 0, i = [], o = [], s = {}, l = function(f, h) {
    for (var d = o.length - 1, g = [], p = e.spawn(); o[d].x != f || o[d].y != h; )
      g.push(o.pop().edge), d--;
    g.push(o.pop().edge), g.forEach(function(y) {
      var b = y.connectedNodes().intersection(e);
      p.merge(y), b.forEach(function(m) {
        var E = m.id(), T = m.connectedEdges().intersection(e);
        p.merge(m), r[E].cutVertex ? p.merge(T.filter(function(S) {
          return S.isLoop();
        })) : p.merge(T);
      });
    }), i.push(p);
  }, u = function(f, h, d) {
    f === d && (n += 1), r[h] = {
      id: a,
      low: a++,
      cutVertex: !1
    };
    var g = e.getElementById(h).connectedEdges().intersection(e);
    if (g.size() === 0)
      i.push(e.spawn(e.getElementById(h)));
    else {
      var p, y, b, m;
      g.forEach(function(E) {
        p = E.source().id(), y = E.target().id(), b = p === h ? y : p, b !== d && (m = E.id(), s[m] || (s[m] = !0, o.push({
          x: h,
          y: b,
          edge: E
        })), b in r ? r[h].low = Math.min(r[h].low, r[b].id) : (u(f, b, h), r[h].low = Math.min(r[h].low, r[b].low), r[h].id <= r[b].low && (r[h].cutVertex = !0, l(h, b))));
      });
    }
  };
  e.forEach(function(c) {
    if (c.isNode()) {
      var f = c.id();
      f in r || (n = 0, u(f, f), r[f].cutVertex = n > 1);
    }
  });
  var v = Object.keys(r).filter(function(c) {
    return r[c].cutVertex;
  }).map(function(c) {
    return e.getElementById(c);
  });
  return {
    cut: e.spawn(v),
    components: i
  };
}, rg = {
  hopcroftTarjanBiconnected: en,
  htbc: en,
  htb: en,
  hopcroftTarjanBiconnectedComponents: en
}, tn = function() {
  var e = this, r = {}, a = 0, n = [], i = [], o = e.spawn(e), s = function(u) {
    i.push(u), r[u] = {
      index: a,
      low: a++,
      explored: !1
    };
    var v = e.getElementById(u).connectedEdges().intersection(e);
    if (v.forEach(function(g) {
      var p = g.target().id();
      p !== u && (p in r || s(p), r[p].explored || (r[u].low = Math.min(r[u].low, r[p].low)));
    }), r[u].index === r[u].low) {
      for (var c = e.spawn(); ; ) {
        var f = i.pop();
        if (c.merge(e.getElementById(f)), r[f].low = r[u].index, r[f].explored = !0, f === u)
          break;
      }
      var h = c.edgesWith(c), d = c.merge(h);
      n.push(d), o = o.difference(d);
    }
  };
  return e.forEach(function(l) {
    if (l.isNode()) {
      var u = l.id();
      u in r || s(u);
    }
  }), {
    cut: o,
    components: n
  };
}, ag = {
  tarjanStronglyConnected: tn,
  tsc: tn,
  tscc: tn,
  tarjanStronglyConnectedComponents: tn
}, Vv = {};
[La, Oh, kh, Bh, _h, zh, qh, pd, Zr, Qr, zo, Rd, Ud, Xd, jd, tg, rg, ag].forEach(function(t) {
  ye(Vv, t);
});
var Uv = 0, qv = 1, Yv = 2, Ft = function(e) {
  if (!(this instanceof Ft)) return new Ft(e);
  this.id = "Thenable/1.0.7", this.state = Uv, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Ft.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return yl(this, qv, "fulfillValue", e);
  },
  reject: function(e) {
    return yl(this, Yv, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, r) {
    var a = this, n = new Ft();
    return a.onFulfilled.push(bl(e, n, "fulfill")), a.onRejected.push(bl(r, n, "reject")), Hv(a), n.proxy;
  }
};
var yl = function(e, r, a, n) {
  return e.state === Uv && (e.state = r, e[a] = n, Hv(e)), e;
}, Hv = function(e) {
  e.state === qv ? ml(e, "onFulfilled", e.fulfillValue) : e.state === Yv && ml(e, "onRejected", e.rejectReason);
}, ml = function(e, r, a) {
  if (e[r].length !== 0) {
    var n = e[r];
    e[r] = [];
    var i = function() {
      for (var s = 0; s < n.length; s++) n[s](a);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, bl = function(e, r, a) {
  return function(n) {
    if (typeof e != "function")
      r[a].call(r, n);
    else {
      var i;
      try {
        i = e(n);
      } catch (o) {
        r.reject(o);
        return;
      }
      Xv(r, i);
    }
  };
}, Xv = function(e, r) {
  if (e === r || e.proxy === r) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (rt(r) === "object" && r !== null || typeof r == "function")
    try {
      a = r.then;
    } catch (i) {
      e.reject(i);
      return;
    }
  if (typeof a == "function") {
    var n = !1;
    try {
      a.call(
        r,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(i) {
          n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : Xv(e, i));
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(i) {
          n || (n = !0, e.reject(i));
        }
      );
    } catch (i) {
      n || e.reject(i);
    }
    return;
  }
  e.fulfill(r);
};
Ft.all = function(t) {
  return new Ft(function(e, r) {
    for (var a = new Array(t.length), n = 0, i = function(l, u) {
      a[l] = u, n++, n === t.length && e(a);
    }, o = 0; o < t.length; o++)
      (function(s) {
        var l = t[s], u = l != null && l.then != null;
        if (u)
          l.then(function(c) {
            i(s, c);
          }, function(c) {
            r(c);
          });
        else {
          var v = l;
          i(s, v);
        }
      })(o);
  });
};
Ft.resolve = function(t) {
  return new Ft(function(e, r) {
    e(t);
  });
};
Ft.reject = function(t) {
  return new Ft(function(e, r) {
    r(t);
  });
};
var ia = typeof Promise < "u" ? Promise : Ft, qo = function(e, r, a) {
  var n = os(e), i = !n, o = this._private = ye({
    duration: 1e3
  }, r, a);
  if (o.target = e, o.style = o.style || o.css, o.started = !1, o.playing = !1, o.hooked = !1, o.applying = !1, o.progress = 0, o.completes = [], o.frames = [], o.complete && He(o.complete) && o.completes.push(o.complete), i) {
    var s = e.position();
    o.startPosition = o.startPosition || {
      x: s.x,
      y: s.y
    }, o.startStyle = o.startStyle || e.cy().style().getAnimationStartStyle(e, o.style);
  }
  if (n) {
    var l = e.pan();
    o.startPan = {
      x: l.x,
      y: l.y
    }, o.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
}, Mr = qo.prototype;
ye(Mr, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var r, a = e.target._private.animation;
      e.queue ? r = a.queue : r = a.current, r.push(this), Dt(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, e.stopped = !0, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var r = this._private;
    return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
  },
  progress: function(e) {
    var r = this._private, a = r.playing;
    return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = !1, a && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, r = e.playing;
    r && this.pause(), e.progress = 1 - e.progress, e.started = !1;
    var a = function(u, v) {
      var c = e[u];
      c != null && (e[u] = e[v], e[v] = c);
    };
    if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
      for (var n = 0; n < e.style.length; n++) {
        var i = e.style[n], o = i.name, s = e.startStyle[o];
        e.startStyle[o] = i, e.style[n] = s;
      }
    return r && this.play(), this;
  },
  promise: function(e) {
    var r = this._private, a;
    switch (e) {
      case "frame":
        a = r.frames;
        break;
      default:
      case "complete":
      case "completed":
        a = r.completes;
    }
    return new ia(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }
});
Mr.complete = Mr.completed;
Mr.run = Mr.play;
Mr.running = Mr.playing;
var ng = {
  animated: function() {
    return function() {
      var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return !1;
      var o = n[0];
      if (o)
        return o._private.animation.current.length > 0;
    };
  },
  // animated
  clearQueue: function() {
    return function() {
      var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        s._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function() {
    return function(r, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: r,
        duration: r,
        complete: a
      }) : this;
    };
  },
  // delay
  delayAnimation: function() {
    return function(r, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: r,
        duration: r,
        complete: a
      }) : this;
    };
  },
  // delay
  animation: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, o = i ? n : [n], s = this._private.cy || this, l = !i, u = !l;
      if (!s.styleEnabled())
        return this;
      var v = s.style();
      r = ye({}, r, a);
      var c = Object.keys(r).length === 0;
      if (c)
        return new qo(o[0], r);
      switch (r.duration === void 0 && (r.duration = 400), r.duration) {
        case "slow":
          r.duration = 600;
          break;
        case "fast":
          r.duration = 200;
          break;
      }
      if (u && (r.style = v.getPropsList(r.style || r.css), r.css = void 0), u && r.renderedPosition != null) {
        var f = r.renderedPosition, h = s.pan(), d = s.zoom();
        r.position = Mv(f, d, h);
      }
      if (l && r.panBy != null) {
        var g = r.panBy, p = s.pan();
        r.pan = {
          x: p.x + g.x,
          y: p.y + g.y
        };
      }
      var y = r.center || r.centre;
      if (l && y != null) {
        var b = s.getCenterPan(y.eles, r.zoom);
        b != null && (r.pan = b);
      }
      if (l && r.fit != null) {
        var m = r.fit, E = s.getFitViewport(m.eles || m.boundingBox, m.padding);
        E != null && (r.pan = E.pan, r.zoom = E.zoom);
      }
      if (l && Pe(r.zoom)) {
        var T = s.getZoomedViewport(r.zoom);
        T != null ? (T.zoomed && (r.zoom = T.zoom), T.panned && (r.pan = T.pan)) : r.zoom = null;
      }
      return new qo(o[0], r);
    };
  },
  // animate
  animate: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, o = i ? n : [n], s = this._private.cy || this;
      if (!s.styleEnabled())
        return this;
      a && (r = ye({}, r, a));
      for (var l = 0; l < o.length; l++) {
        var u = o[l], v = u.animated() && (r.queue === void 0 || r.queue), c = u.animation(r, v ? {
          queue: !0
        } : void 0);
        c.play();
      }
      return this;
    };
  },
  // animate
  stop: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, o = i ? n : [n], s = this._private.cy || this;
      if (!s.styleEnabled())
        return this;
      for (var l = 0; l < o.length; l++) {
        for (var u = o[l], v = u._private, c = v.animation.current, f = 0; f < c.length; f++) {
          var h = c[f], d = h._private;
          a && (d.duration = 0);
        }
        r && (v.animation.queue = []), a || (v.animation.current = []);
      }
      return s.notify("draw"), this;
    };
  }
  // stop
}, Ai, wl;
function Hn() {
  if (wl) return Ai;
  wl = 1;
  var t = Array.isArray;
  return Ai = t, Ai;
}
var Li, El;
function ig() {
  if (El) return Li;
  El = 1;
  var t = Hn(), e = za(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
  function n(i, o) {
    if (t(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || e(i) ? !0 : a.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return Li = n, Li;
}
var Ri, xl;
function og() {
  if (xl) return Ri;
  xl = 1;
  var t = xv(), e = Ga(), r = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!e(s))
      return !1;
    var l = t(s);
    return l == a || l == n || l == r || l == i;
  }
  return Ri = o, Ri;
}
var Ii, Tl;
function sg() {
  if (Tl) return Ii;
  Tl = 1;
  var t = Vn(), e = t["__core-js_shared__"];
  return Ii = e, Ii;
}
var Mi, Cl;
function lg() {
  if (Cl) return Mi;
  Cl = 1;
  var t = sg(), e = (function() {
    var a = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  })();
  function r(a) {
    return !!e && e in a;
  }
  return Mi = r, Mi;
}
var Pi, Dl;
function ug() {
  if (Dl) return Pi;
  Dl = 1;
  var t = Function.prototype, e = t.toString;
  function r(a) {
    if (a != null) {
      try {
        return e.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  return Pi = r, Pi;
}
var Oi, Sl;
function vg() {
  if (Sl) return Oi;
  Sl = 1;
  var t = og(), e = lg(), r = Ga(), a = ug(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, l = o.toString, u = s.hasOwnProperty, v = RegExp(
    "^" + l.call(u).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(f) {
    if (!r(f) || e(f))
      return !1;
    var h = t(f) ? v : i;
    return h.test(a(f));
  }
  return Oi = c, Oi;
}
var ki, Al;
function cg() {
  if (Al) return ki;
  Al = 1;
  function t(e, r) {
    return e?.[r];
  }
  return ki = t, ki;
}
var Ni, Ll;
function ys() {
  if (Ll) return Ni;
  Ll = 1;
  var t = vg(), e = cg();
  function r(a, n) {
    var i = e(a, n);
    return t(i) ? i : void 0;
  }
  return Ni = r, Ni;
}
var Bi, Rl;
function Xn() {
  if (Rl) return Bi;
  Rl = 1;
  var t = ys(), e = t(Object, "create");
  return Bi = e, Bi;
}
var Fi, Il;
function fg() {
  if (Il) return Fi;
  Il = 1;
  var t = Xn();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Fi = e, Fi;
}
var _i, Ml;
function hg() {
  if (Ml) return _i;
  Ml = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return _i = t, _i;
}
var Gi, Pl;
function dg() {
  if (Pl) return Gi;
  Pl = 1;
  var t = Xn(), e = "__lodash_hash_undefined__", r = Object.prototype, a = r.hasOwnProperty;
  function n(i) {
    var o = this.__data__;
    if (t) {
      var s = o[i];
      return s === e ? void 0 : s;
    }
    return a.call(o, i) ? o[i] : void 0;
  }
  return Gi = n, Gi;
}
var zi, Ol;
function gg() {
  if (Ol) return zi;
  Ol = 1;
  var t = Xn(), e = Object.prototype, r = e.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return t ? i[n] !== void 0 : r.call(i, n);
  }
  return zi = a, zi;
}
var Vi, kl;
function pg() {
  if (kl) return Vi;
  kl = 1;
  var t = Xn(), e = "__lodash_hash_undefined__";
  function r(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = t && n === void 0 ? e : n, this;
  }
  return Vi = r, Vi;
}
var Ui, Nl;
function yg() {
  if (Nl) return Ui;
  Nl = 1;
  var t = fg(), e = hg(), r = dg(), a = gg(), n = pg();
  function i(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var u = o[s];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, Ui = i, Ui;
}
var qi, Bl;
function mg() {
  if (Bl) return qi;
  Bl = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return qi = t, qi;
}
var Yi, Fl;
function $v() {
  if (Fl) return Yi;
  Fl = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Yi = t, Yi;
}
var Hi, _l;
function $n() {
  if (_l) return Hi;
  _l = 1;
  var t = $v();
  function e(r, a) {
    for (var n = r.length; n--; )
      if (t(r[n][0], a))
        return n;
    return -1;
  }
  return Hi = e, Hi;
}
var Xi, Gl;
function bg() {
  if (Gl) return Xi;
  Gl = 1;
  var t = $n(), e = Array.prototype, r = e.splice;
  function a(n) {
    var i = this.__data__, o = t(i, n);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Xi = a, Xi;
}
var $i, zl;
function wg() {
  if (zl) return $i;
  zl = 1;
  var t = $n();
  function e(r) {
    var a = this.__data__, n = t(a, r);
    return n < 0 ? void 0 : a[n][1];
  }
  return $i = e, $i;
}
var Wi, Vl;
function Eg() {
  if (Vl) return Wi;
  Vl = 1;
  var t = $n();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return Wi = e, Wi;
}
var Ki, Ul;
function xg() {
  if (Ul) return Ki;
  Ul = 1;
  var t = $n();
  function e(r, a) {
    var n = this.__data__, i = t(n, r);
    return i < 0 ? (++this.size, n.push([r, a])) : n[i][1] = a, this;
  }
  return Ki = e, Ki;
}
var Zi, ql;
function Tg() {
  if (ql) return Zi;
  ql = 1;
  var t = mg(), e = bg(), r = wg(), a = Eg(), n = xg();
  function i(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var u = o[s];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, Zi = i, Zi;
}
var Qi, Yl;
function Cg() {
  if (Yl) return Qi;
  Yl = 1;
  var t = ys(), e = Vn(), r = t(e, "Map");
  return Qi = r, Qi;
}
var Ji, Hl;
function Dg() {
  if (Hl) return Ji;
  Hl = 1;
  var t = yg(), e = Tg(), r = Cg();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return Ji = a, Ji;
}
var ji, Xl;
function Sg() {
  if (Xl) return ji;
  Xl = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return ji = t, ji;
}
var eo, $l;
function Wn() {
  if ($l) return eo;
  $l = 1;
  var t = Sg();
  function e(r, a) {
    var n = r.__data__;
    return t(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return eo = e, eo;
}
var to, Wl;
function Ag() {
  if (Wl) return to;
  Wl = 1;
  var t = Wn();
  function e(r) {
    var a = t(this, r).delete(r);
    return this.size -= a ? 1 : 0, a;
  }
  return to = e, to;
}
var ro, Kl;
function Lg() {
  if (Kl) return ro;
  Kl = 1;
  var t = Wn();
  function e(r) {
    return t(this, r).get(r);
  }
  return ro = e, ro;
}
var ao, Zl;
function Rg() {
  if (Zl) return ao;
  Zl = 1;
  var t = Wn();
  function e(r) {
    return t(this, r).has(r);
  }
  return ao = e, ao;
}
var no, Ql;
function Ig() {
  if (Ql) return no;
  Ql = 1;
  var t = Wn();
  function e(r, a) {
    var n = t(this, r), i = n.size;
    return n.set(r, a), this.size += n.size == i ? 0 : 1, this;
  }
  return no = e, no;
}
var io, Jl;
function Mg() {
  if (Jl) return io;
  Jl = 1;
  var t = Dg(), e = Ag(), r = Lg(), a = Rg(), n = Ig();
  function i(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var u = o[s];
      this.set(u[0], u[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = a, i.prototype.set = n, io = i, io;
}
var oo, jl;
function Pg() {
  if (jl) return oo;
  jl = 1;
  var t = Mg(), e = "Expected a function";
  function r(a, n) {
    if (typeof a != "function" || n != null && typeof n != "function")
      throw new TypeError(e);
    var i = function() {
      var o = arguments, s = n ? n.apply(this, o) : o[0], l = i.cache;
      if (l.has(s))
        return l.get(s);
      var u = a.apply(this, o);
      return i.cache = l.set(s, u) || l, u;
    };
    return i.cache = new (r.Cache || t)(), i;
  }
  return r.Cache = t, oo = r, oo;
}
var so, eu;
function Og() {
  if (eu) return so;
  eu = 1;
  var t = Pg(), e = 500;
  function r(a) {
    var n = t(a, function(o) {
      return i.size === e && i.clear(), o;
    }), i = n.cache;
    return n;
  }
  return so = r, so;
}
var lo, tu;
function Wv() {
  if (tu) return lo;
  tu = 1;
  var t = Og(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, a = t(function(n) {
    var i = [];
    return n.charCodeAt(0) === 46 && i.push(""), n.replace(e, function(o, s, l, u) {
      i.push(l ? u.replace(r, "$1") : s || o);
    }), i;
  });
  return lo = a, lo;
}
var uo, ru;
function Kv() {
  if (ru) return uo;
  ru = 1;
  function t(e, r) {
    for (var a = -1, n = e == null ? 0 : e.length, i = Array(n); ++a < n; )
      i[a] = r(e[a], a, e);
    return i;
  }
  return uo = t, uo;
}
var vo, au;
function kg() {
  if (au) return vo;
  au = 1;
  var t = ls(), e = Kv(), r = Hn(), a = za(), n = t ? t.prototype : void 0, i = n ? n.toString : void 0;
  function o(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return e(s, o) + "";
    if (a(s))
      return i ? i.call(s) : "";
    var l = s + "";
    return l == "0" && 1 / s == -1 / 0 ? "-0" : l;
  }
  return vo = o, vo;
}
var co, nu;
function Zv() {
  if (nu) return co;
  nu = 1;
  var t = kg();
  function e(r) {
    return r == null ? "" : t(r);
  }
  return co = e, co;
}
var fo, iu;
function Qv() {
  if (iu) return fo;
  iu = 1;
  var t = Hn(), e = ig(), r = Wv(), a = Zv();
  function n(i, o) {
    return t(i) ? i : e(i, o) ? [i] : r(a(i));
  }
  return fo = n, fo;
}
var ho, ou;
function ms() {
  if (ou) return ho;
  ou = 1;
  var t = za();
  function e(r) {
    if (typeof r == "string" || t(r))
      return r;
    var a = r + "";
    return a == "0" && 1 / r == -1 / 0 ? "-0" : a;
  }
  return ho = e, ho;
}
var go, su;
function Ng() {
  if (su) return go;
  su = 1;
  var t = Qv(), e = ms();
  function r(a, n) {
    n = t(n, a);
    for (var i = 0, o = n.length; a != null && i < o; )
      a = a[e(n[i++])];
    return i && i == o ? a : void 0;
  }
  return go = r, go;
}
var po, lu;
function Bg() {
  if (lu) return po;
  lu = 1;
  var t = Ng();
  function e(r, a, n) {
    var i = r == null ? void 0 : t(r, a);
    return i === void 0 ? n : i;
  }
  return po = e, po;
}
var Fg = Bg(), _g = /* @__PURE__ */ _a(Fg), yo, uu;
function Gg() {
  if (uu) return yo;
  uu = 1;
  var t = ys(), e = (function() {
    try {
      var r = t(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return yo = e, yo;
}
var mo, vu;
function zg() {
  if (vu) return mo;
  vu = 1;
  var t = Gg();
  function e(r, a, n) {
    a == "__proto__" && t ? t(r, a, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : r[a] = n;
  }
  return mo = e, mo;
}
var bo, cu;
function Vg() {
  if (cu) return bo;
  cu = 1;
  var t = zg(), e = $v(), r = Object.prototype, a = r.hasOwnProperty;
  function n(i, o, s) {
    var l = i[o];
    (!(a.call(i, o) && e(l, s)) || s === void 0 && !(o in i)) && t(i, o, s);
  }
  return bo = n, bo;
}
var wo, fu;
function Ug() {
  if (fu) return wo;
  fu = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(a, n) {
    var i = typeof a;
    return n = n ?? t, !!n && (i == "number" || i != "symbol" && e.test(a)) && a > -1 && a % 1 == 0 && a < n;
  }
  return wo = r, wo;
}
var Eo, hu;
function qg() {
  if (hu) return Eo;
  hu = 1;
  var t = Vg(), e = Qv(), r = Ug(), a = Ga(), n = ms();
  function i(o, s, l, u) {
    if (!a(o))
      return o;
    s = e(s, o);
    for (var v = -1, c = s.length, f = c - 1, h = o; h != null && ++v < c; ) {
      var d = n(s[v]), g = l;
      if (d === "__proto__" || d === "constructor" || d === "prototype")
        return o;
      if (v != f) {
        var p = h[d];
        g = u ? u(p, d, h) : void 0, g === void 0 && (g = a(p) ? p : r(s[v + 1]) ? [] : {});
      }
      t(h, d, g), h = h[d];
    }
    return o;
  }
  return Eo = i, Eo;
}
var xo, du;
function Yg() {
  if (du) return xo;
  du = 1;
  var t = qg();
  function e(r, a, n) {
    return r == null ? r : t(r, a, n);
  }
  return xo = e, xo;
}
var Hg = Yg(), Xg = /* @__PURE__ */ _a(Hg), To, gu;
function $g() {
  if (gu) return To;
  gu = 1;
  function t(e, r) {
    var a = -1, n = e.length;
    for (r || (r = Array(n)); ++a < n; )
      r[a] = e[a];
    return r;
  }
  return To = t, To;
}
var Co, pu;
function Wg() {
  if (pu) return Co;
  pu = 1;
  var t = Kv(), e = $g(), r = Hn(), a = za(), n = Wv(), i = ms(), o = Zv();
  function s(l) {
    return r(l) ? t(l, i) : a(l) ? [l] : e(n(o(l)));
  }
  return Co = s, Co;
}
var Kg = Wg(), Zg = /* @__PURE__ */ _a(Kg), Qg = {
  // access data field
  data: function(e) {
    var r = {
      field: "data",
      bindingEvent: "data",
      allowBinding: !1,
      allowSetting: !1,
      allowGetting: !1,
      settingEvent: "data",
      settingTriggersEvent: !1,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: !1,
      beforeGet: function(n) {
      },
      beforeSet: function(n, i) {
      },
      onSet: function(n) {
      },
      canSet: function(n) {
        return !0;
      }
    };
    return e = ye({}, r, e), function(n, i) {
      var o = e, s = this, l = s.length !== void 0, u = l ? s : [s], v = l ? s[0] : s;
      if (de(n)) {
        var c = n.indexOf(".") !== -1, f = c && Zg(n);
        if (o.allowGetting && i === void 0) {
          var h;
          return v && (o.beforeGet(v), f && v._private[o.field][n] === void 0 ? h = _g(v._private[o.field], f) : h = v._private[o.field][n]), h;
        } else if (o.allowSetting && i !== void 0) {
          var d = !o.immutableKeys[n];
          if (d) {
            var g = fv({}, n, i);
            o.beforeSet(s, g);
            for (var p = 0, y = u.length; p < y; p++) {
              var b = u[p];
              o.canSet(b) && (f && v._private[o.field][n] === void 0 ? Xg(b._private[o.field], f, i) : b._private[o.field][n] = i);
            }
            o.updateStyle && s.updateStyle(), o.onSet(s), o.settingTriggersEvent && s[o.triggerFnName](o.settingEvent);
          }
        }
      } else if (o.allowSetting && Pe(n)) {
        var m = n, E, T, S = Object.keys(m);
        o.beforeSet(s, m);
        for (var w = 0; w < S.length; w++) {
          E = S[w], T = m[E];
          var x = !o.immutableKeys[E];
          if (x)
            for (var C = 0; C < u.length; C++) {
              var D = u[C];
              o.canSet(D) && (D._private[o.field][E] = T);
            }
        }
        o.updateStyle && s.updateStyle(), o.onSet(s), o.settingTriggersEvent && s[o.triggerFnName](o.settingEvent);
      } else if (o.allowBinding && He(n)) {
        var A = n;
        s.on(o.bindingEvent, A);
      } else if (o.allowGetting && n === void 0) {
        var L;
        return v && (o.beforeGet(v), L = v._private[o.field]), L;
      }
      return s;
    };
  },
  // data
  // remove data field
  removeData: function(e) {
    var r = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: !1,
      immutableKeys: {}
      // key => true if immutable
    };
    return e = ye({}, r, e), function(n) {
      var i = e, o = this, s = o.length !== void 0, l = s ? o : [o];
      if (de(n)) {
        for (var u = n.split(/\s+/), v = u.length, c = 0; c < v; c++) {
          var f = u[c];
          if (!ur(f)) {
            var h = !i.immutableKeys[f];
            if (h)
              for (var d = 0, g = l.length; d < g; d++)
                l[d]._private[i.field][f] = void 0;
          }
        }
        i.triggerEvent && o[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var p = 0, y = l.length; p < y; p++)
          for (var b = l[p]._private[i.field], m = Object.keys(b), E = 0; E < m.length; E++) {
            var T = m[E], S = !i.immutableKeys[T];
            S && (b[T] = void 0);
          }
        i.triggerEvent && o[i.triggerFnName](i.event);
      }
      return o;
    };
  }
  // removeData
}, Jg = {
  eventAliasesOn: function(e) {
    var r = e;
    r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
      var i = this, o = Array.prototype.slice.call(arguments, 0);
      return new ia(function(s, l) {
        var u = function(h) {
          i.off.apply(i, c), s(h);
        }, v = o.concat([u]), c = v.concat([]);
        i.on.apply(i, v);
      });
    };
  }
}, Be = {};
[ng, Qg, Jg].forEach(function(t) {
  ye(Be, t);
});
var jg = {
  animate: Be.animate(),
  animation: Be.animation(),
  animated: Be.animated(),
  clearQueue: Be.clearQueue(),
  delay: Be.delay(),
  delayAnimation: Be.delayAnimation(),
  stop: Be.stop()
}, hn = {
  classes: function(e) {
    var r = this;
    if (e === void 0) {
      var a = [];
      return r[0]._private.classes.forEach(function(d) {
        return a.push(d);
      }), a;
    } else Ge(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new na(e), o = 0; o < r.length; o++) {
      for (var s = r[o], l = s._private, u = l.classes, v = !1, c = 0; c < e.length; c++) {
        var f = e[c], h = u.has(f);
        if (!h) {
          v = !0;
          break;
        }
      }
      v || (v = u.size !== e.length), v && (l.classes = i, n.push(s));
    }
    return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
  },
  addClass: function(e) {
    return this.toggleClass(e, !0);
  },
  hasClass: function(e) {
    var r = this[0];
    return r != null && r._private.classes.has(e);
  },
  toggleClass: function(e, r) {
    Ge(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = r === void 0, i = [], o = 0, s = a.length; o < s; o++)
      for (var l = a[o], u = l._private.classes, v = !1, c = 0; c < e.length; c++) {
        var f = e[c], h = u.has(f), d = !1;
        r || n && !h ? (u.add(f), d = !0) : (!r || n && h) && (u.delete(f), d = !0), !v && d && (i.push(l), v = !0);
      }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
  },
  removeClass: function(e) {
    return this.toggleClass(e, !1);
  },
  flashClass: function(e, r) {
    var a = this;
    if (r == null)
      r = 250;
    else if (r === 0)
      return a;
    return a.addClass(e), setTimeout(function() {
      a.removeClass(e);
    }, r), a;
  }
};
hn.className = hn.classNames = hn.classes;
var Me = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: tt,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Me.variable = "(?:[\\w-.]|(?:\\\\" + Me.metaChar + "))+";
Me.className = "(?:[\\w-]|(?:\\\\" + Me.metaChar + "))+";
Me.value = Me.string + "|" + Me.number;
Me.id = Me.variable;
(function() {
  var t, e, r;
  for (t = Me.comparatorOp.split("|"), r = 0; r < t.length; r++)
    e = t[r], Me.comparatorOp += "|@" + e;
  for (t = Me.comparatorOp.split("|"), r = 0; r < t.length; r++)
    e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (Me.comparatorOp += "|\\!" + e);
})();
var _e = function() {
  return {
    checks: []
  };
}, le = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
}, Yo = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(t, e) {
  return Qf(t.selector, e.selector);
}), ep = (function() {
  for (var t = {}, e, r = 0; r < Yo.length; r++)
    e = Yo[r], t[e.selector] = e.matches;
  return t;
})(), tp = function(e, r) {
  return ep[e](r);
}, rp = "(" + Yo.map(function(t) {
  return t.selector;
}).join("|") + ")", Fr = function(e) {
  return e.replace(new RegExp("\\\\(" + Me.metaChar + ")", "g"), function(r, a) {
    return a;
  });
}, rr = function(e, r, a) {
  e[e.length - 1] = a;
}, Ho = [{
  name: "group",
  // just used for identifying when debugging
  query: !0,
  regex: "(" + Me.group + ")",
  populate: function(e, r, a) {
    var n = Qe(a, 1), i = n[0];
    r.checks.push({
      type: le.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: !0,
  regex: rp,
  populate: function(e, r, a) {
    var n = Qe(a, 1), i = n[0];
    r.checks.push({
      type: le.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: !0,
  regex: "\\#(" + Me.id + ")",
  populate: function(e, r, a) {
    var n = Qe(a, 1), i = n[0];
    r.checks.push({
      type: le.ID,
      value: Fr(i)
    });
  }
}, {
  name: "className",
  query: !0,
  regex: "\\.(" + Me.className + ")",
  populate: function(e, r, a) {
    var n = Qe(a, 1), i = n[0];
    r.checks.push({
      type: le.CLASS,
      value: Fr(i)
    });
  }
}, {
  name: "dataExists",
  query: !0,
  regex: "\\[\\s*(" + Me.variable + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = Qe(a, 1), i = n[0];
    r.checks.push({
      type: le.DATA_EXIST,
      field: Fr(i)
    });
  }
}, {
  name: "dataCompare",
  query: !0,
  regex: "\\[\\s*(" + Me.variable + ")\\s*(" + Me.comparatorOp + ")\\s*(" + Me.value + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = Qe(a, 3), i = n[0], o = n[1], s = n[2], l = new RegExp("^" + Me.string + "$").exec(s) != null;
    l ? s = s.substring(1, s.length - 1) : s = parseFloat(s), r.checks.push({
      type: le.DATA_COMPARE,
      field: Fr(i),
      operator: o,
      value: s
    });
  }
}, {
  name: "dataBool",
  query: !0,
  regex: "\\[\\s*(" + Me.boolOp + ")\\s*(" + Me.variable + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = Qe(a, 2), i = n[0], o = n[1];
    r.checks.push({
      type: le.DATA_BOOL,
      field: Fr(o),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: !0,
  regex: "\\[\\[\\s*(" + Me.meta + ")\\s*(" + Me.comparatorOp + ")\\s*(" + Me.number + ")\\s*\\]\\]",
  populate: function(e, r, a) {
    var n = Qe(a, 3), i = n[0], o = n[1], s = n[2];
    r.checks.push({
      type: le.META_COMPARE,
      field: Fr(i),
      operator: o,
      value: parseFloat(s)
    });
  }
}, {
  name: "nextQuery",
  separator: !0,
  regex: Me.separator,
  populate: function(e, r) {
    var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, o = e[e.length - 1];
    a != null && (o.subject = a, e.currentSubject = null), o.edgeCount = n, o.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var s = e[e.length++] = _e();
    return s;
  }
}, {
  name: "directedEdge",
  separator: !0,
  regex: Me.directedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = _e(), n = r, i = _e();
      return a.checks.push({
        type: le.DIRECTED_EDGE,
        source: n,
        target: i
      }), rr(e, r, a), e.edgeCount++, i;
    } else {
      var o = _e(), s = r, l = _e();
      return o.checks.push({
        type: le.NODE_SOURCE,
        source: s,
        target: l
      }), rr(e, r, o), e.edgeCount++, l;
    }
  }
}, {
  name: "undirectedEdge",
  separator: !0,
  regex: Me.undirectedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = _e(), n = r, i = _e();
      return a.checks.push({
        type: le.UNDIRECTED_EDGE,
        nodes: [n, i]
      }), rr(e, r, a), e.edgeCount++, i;
    } else {
      var o = _e(), s = r, l = _e();
      return o.checks.push({
        type: le.NODE_NEIGHBOR,
        node: s,
        neighbor: l
      }), rr(e, r, o), l;
    }
  }
}, {
  name: "child",
  separator: !0,
  regex: Me.child,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = _e(), n = _e(), i = e[e.length - 1];
      return a.checks.push({
        type: le.CHILD,
        parent: i,
        child: n
      }), rr(e, r, a), e.compoundCount++, n;
    } else if (e.currentSubject === r) {
      var o = _e(), s = e[e.length - 1], l = _e(), u = _e(), v = _e(), c = _e();
      return o.checks.push({
        type: le.COMPOUND_SPLIT,
        left: s,
        right: l,
        subject: u
      }), u.checks = r.checks, r.checks = [{
        type: le.TRUE
      }], c.checks.push({
        type: le.TRUE
      }), l.checks.push({
        type: le.PARENT,
        // type is swapped on right side queries
        parent: c,
        child: v
        // empty for now
      }), rr(e, s, o), e.currentSubject = u, e.compoundCount++, v;
    } else {
      var f = _e(), h = _e(), d = [{
        type: le.PARENT,
        parent: f,
        child: h
      }];
      return f.checks = r.checks, r.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "descendant",
  separator: !0,
  regex: Me.descendant,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = _e(), n = _e(), i = e[e.length - 1];
      return a.checks.push({
        type: le.DESCENDANT,
        ancestor: i,
        descendant: n
      }), rr(e, r, a), e.compoundCount++, n;
    } else if (e.currentSubject === r) {
      var o = _e(), s = e[e.length - 1], l = _e(), u = _e(), v = _e(), c = _e();
      return o.checks.push({
        type: le.COMPOUND_SPLIT,
        left: s,
        right: l,
        subject: u
      }), u.checks = r.checks, r.checks = [{
        type: le.TRUE
      }], c.checks.push({
        type: le.TRUE
      }), l.checks.push({
        type: le.ANCESTOR,
        // type is swapped on right side queries
        ancestor: c,
        descendant: v
        // empty for now
      }), rr(e, s, o), e.currentSubject = u, e.compoundCount++, v;
    } else {
      var f = _e(), h = _e(), d = [{
        type: le.ANCESTOR,
        ancestor: f,
        descendant: h
      }];
      return f.checks = r.checks, r.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "subject",
  modifier: !0,
  regex: Me.subject,
  populate: function(e, r) {
    if (e.currentSubject != null && e.currentSubject !== r)
      return Fe("Redefinition of subject in selector `" + e.toString() + "`"), !1;
    e.currentSubject = r;
    var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
    i === le.DIRECTED_EDGE ? n.type = le.NODE_TARGET : i === le.UNDIRECTED_EDGE && (n.type = le.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
  }
}];
Ho.forEach(function(t) {
  return t.regexObj = new RegExp("^" + t.regex);
});
var ap = function(e) {
  for (var r, a, n, i = 0; i < Ho.length; i++) {
    var o = Ho[i], s = o.name, l = e.match(o.regexObj);
    if (l != null) {
      a = l, r = o, n = s;
      var u = l[0];
      e = e.substring(u.length);
      break;
    }
  }
  return {
    expr: r,
    match: a,
    name: n,
    remaining: e
  };
}, np = function(e) {
  var r = e.match(/^\s+/);
  if (r) {
    var a = r[0];
    e = e.substring(a.length);
  }
  return e;
}, ip = function(e) {
  var r = this, a = r.inputText = e, n = r[0] = _e();
  for (r.length = 1, a = np(a); ; ) {
    var i = ap(a);
    if (i.expr == null)
      return Fe("The selector `" + e + "`is invalid"), !1;
    var o = i.match.slice(1), s = i.expr.populate(r, n, o);
    if (s === !1)
      return !1;
    if (s != null && (n = s), a = i.remaining, a.match(/^\s*$/))
      break;
  }
  var l = r[r.length - 1];
  r.currentSubject != null && (l.subject = r.currentSubject), l.edgeCount = r.edgeCount, l.compoundCount = r.compoundCount;
  for (var u = 0; u < r.length; u++) {
    var v = r[u];
    if (v.compoundCount > 0 && v.edgeCount > 0)
      return Fe("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
    if (v.edgeCount > 1)
      return Fe("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
    v.edgeCount === 1 && Fe("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return !0;
}, op = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(v) {
    return v ?? "";
  }, r = function(v) {
    return de(v) ? '"' + v + '"' : e(v);
  }, a = function(v) {
    return " " + v + " ";
  }, n = function(v, c) {
    var f = v.type, h = v.value;
    switch (f) {
      case le.GROUP: {
        var d = e(h);
        return d.substring(0, d.length - 1);
      }
      case le.DATA_COMPARE: {
        var g = v.field, p = v.operator;
        return "[" + g + a(e(p)) + r(h) + "]";
      }
      case le.DATA_BOOL: {
        var y = v.operator, b = v.field;
        return "[" + e(y) + b + "]";
      }
      case le.DATA_EXIST: {
        var m = v.field;
        return "[" + m + "]";
      }
      case le.META_COMPARE: {
        var E = v.operator, T = v.field;
        return "[[" + T + a(e(E)) + r(h) + "]]";
      }
      case le.STATE:
        return h;
      case le.ID:
        return "#" + h;
      case le.CLASS:
        return "." + h;
      case le.PARENT:
      case le.CHILD:
        return i(v.parent, c) + a(">") + i(v.child, c);
      case le.ANCESTOR:
      case le.DESCENDANT:
        return i(v.ancestor, c) + " " + i(v.descendant, c);
      case le.COMPOUND_SPLIT: {
        var S = i(v.left, c), w = i(v.subject, c), x = i(v.right, c);
        return S + (S.length > 0 ? " " : "") + w + x;
      }
      case le.TRUE:
        return "";
    }
  }, i = function(v, c) {
    return v.checks.reduce(function(f, h, d) {
      return f + (c === v && d === 0 ? "$" : "") + n(h, c);
    }, "");
  }, o = "", s = 0; s < this.length; s++) {
    var l = this[s];
    o += i(l, l.subject), this.length > 1 && s < this.length - 1 && (o += ", ");
  }
  return this.toStringCache = o, o;
}, sp = {
  parse: ip,
  toString: op
}, Jv = function(e, r, a) {
  var n, i = de(e), o = ne(e), s = de(a), l, u, v = !1, c = !1, f = !1;
  switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), c = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), v = !0), (i || s || v) && (l = !i && !o ? "" : "" + e, u = "" + a), v && (e = l = l.toLowerCase(), a = u = u.toLowerCase()), r) {
    case "*=":
      n = l.indexOf(u) >= 0;
      break;
    case "$=":
      n = l.indexOf(u, l.length - u.length) >= 0;
      break;
    case "^=":
      n = l.indexOf(u) === 0;
      break;
    case "=":
      n = e === a;
      break;
    case ">":
      f = !0, n = e > a;
      break;
    case ">=":
      f = !0, n = e >= a;
      break;
    case "<":
      f = !0, n = e < a;
      break;
    case "<=":
      f = !0, n = e <= a;
      break;
    default:
      n = !1;
      break;
  }
  return c && (e != null || !f) && (n = !n), n;
}, lp = function(e, r) {
  switch (r) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, up = function(e) {
  return e !== void 0;
}, bs = function(e, r) {
  return e.data(r);
}, vp = function(e, r) {
  return e[r]();
}, We = [], Ue = function(e, r) {
  return e.checks.every(function(a) {
    return We[a.type](a, r);
  });
};
We[le.GROUP] = function(t, e) {
  var r = t.value;
  return r === "*" || r === e.group();
};
We[le.STATE] = function(t, e) {
  var r = t.value;
  return tp(r, e);
};
We[le.ID] = function(t, e) {
  var r = t.value;
  return e.id() === r;
};
We[le.CLASS] = function(t, e) {
  var r = t.value;
  return e.hasClass(r);
};
We[le.META_COMPARE] = function(t, e) {
  var r = t.field, a = t.operator, n = t.value;
  return Jv(vp(e, r), a, n);
};
We[le.DATA_COMPARE] = function(t, e) {
  var r = t.field, a = t.operator, n = t.value;
  return Jv(bs(e, r), a, n);
};
We[le.DATA_BOOL] = function(t, e) {
  var r = t.field, a = t.operator;
  return lp(bs(e, r), a);
};
We[le.DATA_EXIST] = function(t, e) {
  var r = t.field;
  return t.operator, up(bs(e, r));
};
We[le.UNDIRECTED_EDGE] = function(t, e) {
  var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
  return Ue(r, n) && Ue(a, i) || Ue(a, n) && Ue(r, i);
};
We[le.NODE_NEIGHBOR] = function(t, e) {
  return Ue(t.node, e) && e.neighborhood().some(function(r) {
    return r.isNode() && Ue(t.neighbor, r);
  });
};
We[le.DIRECTED_EDGE] = function(t, e) {
  return Ue(t.source, e.source()) && Ue(t.target, e.target());
};
We[le.NODE_SOURCE] = function(t, e) {
  return Ue(t.source, e) && e.outgoers().some(function(r) {
    return r.isNode() && Ue(t.target, r);
  });
};
We[le.NODE_TARGET] = function(t, e) {
  return Ue(t.target, e) && e.incomers().some(function(r) {
    return r.isNode() && Ue(t.source, r);
  });
};
We[le.CHILD] = function(t, e) {
  return Ue(t.child, e) && Ue(t.parent, e.parent());
};
We[le.PARENT] = function(t, e) {
  return Ue(t.parent, e) && e.children().some(function(r) {
    return Ue(t.child, r);
  });
};
We[le.DESCENDANT] = function(t, e) {
  return Ue(t.descendant, e) && e.ancestors().some(function(r) {
    return Ue(t.ancestor, r);
  });
};
We[le.ANCESTOR] = function(t, e) {
  return Ue(t.ancestor, e) && e.descendants().some(function(r) {
    return Ue(t.descendant, r);
  });
};
We[le.COMPOUND_SPLIT] = function(t, e) {
  return Ue(t.subject, e) && Ue(t.left, e) && Ue(t.right, e);
};
We[le.TRUE] = function() {
  return !0;
};
We[le.COLLECTION] = function(t, e) {
  var r = t.value;
  return r.has(e);
};
We[le.FILTER] = function(t, e) {
  var r = t.value;
  return r(e);
};
var cp = function(e) {
  var r = this;
  if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === le.ID)
    return e.getElementById(r[0].checks[0].value).collection();
  var a = function(i) {
    for (var o = 0; o < r.length; o++) {
      var s = r[o];
      if (Ue(s, i))
        return !0;
    }
    return !1;
  };
  return r.text() == null && (a = function() {
    return !0;
  }), e.filter(a);
}, fp = function(e) {
  for (var r = this, a = 0; a < r.length; a++) {
    var n = r[a];
    if (Ue(n, e))
      return !0;
  }
  return !1;
}, hp = {
  matches: fp,
  filter: cp
}, fr = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || de(e) && e.match(/^\s*$/) || (Dt(e) ? this.addQuery({
    checks: [{
      type: le.COLLECTION,
      value: e.collection()
    }]
  }) : He(e) ? this.addQuery({
    checks: [{
      type: le.FILTER,
      value: e
    }]
  }) : de(e) ? this.parse(e) || (this.invalid = !0) : qe("A selector must be created from a string; found "));
}, hr = fr.prototype;
[sp, hp].forEach(function(t) {
  return ye(hr, t);
});
hr.text = function() {
  return this.inputText;
};
hr.size = function() {
  return this.length;
};
hr.eq = function(t) {
  return this[t];
};
hr.sameText = function(t) {
  return !this.invalid && !t.invalid && this.text() === t.text();
};
hr.addQuery = function(t) {
  this[this.length++] = t;
};
hr.selector = hr.toString;
var sr = {
  allAre: function(e) {
    var r = new fr(e);
    return this.every(function(a) {
      return r.matches(a);
    });
  },
  is: function(e) {
    var r = new fr(e);
    return this.some(function(a) {
      return r.matches(a);
    });
  },
  some: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
      if (n)
        return !0;
    }
    return !1;
  },
  every: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
      if (!n)
        return !1;
    }
    return !0;
  },
  same: function(e) {
    if (this === e)
      return !0;
    e = this.cy().collection(e);
    var r = this.length, a = e.length;
    return r !== a ? !1 : r === 1 ? this[0] === e[0] : this.every(function(n) {
      return e.hasElementWithId(n.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(r) {
      return e.hasElementWithId(r.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var r = this.neighborhood();
    return e.every(function(a) {
      return r.hasElementWithId(a.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var r = this;
    return e.every(function(a) {
      return r.hasElementWithId(a.id());
    });
  }
};
sr.allAreNeighbours = sr.allAreNeighbors;
sr.has = sr.contains;
sr.equal = sr.equals = sr.same;
var Rt = function(e, r) {
  return function(n, i, o, s) {
    var l = n, u = this, v;
    if (l == null ? v = "" : Dt(l) && l.length === 1 && (v = l.id()), u.length === 1 && v) {
      var c = u[0]._private, f = c.traversalCache = c.traversalCache || {}, h = f[r] = f[r] || [], d = Rr(v), g = h[d];
      return g || (h[d] = e.call(u, n, i, o, s));
    } else
      return e.call(u, n, i, o, s);
  };
}, ta = {
  parent: function(e) {
    var r = [];
    if (this.length === 1) {
      var a = this[0]._private.parent;
      if (a)
        return a;
    }
    for (var n = 0; n < this.length; n++) {
      var i = this[n], o = i._private.parent;
      o && r.push(o);
    }
    return this.spawn(r, !0).filter(e);
  },
  parents: function(e) {
    for (var r = [], a = this.parent(); a.nonempty(); ) {
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        r.push(i);
      }
      a = a.parent();
    }
    return this.spawn(r, !0).filter(e);
  },
  commonAncestors: function(e) {
    for (var r, a = 0; a < this.length; a++) {
      var n = this[a], i = n.parents();
      r = r || i, r = r.intersect(i);
    }
    return r.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isChild();
    }).filter(e);
  },
  children: Rt(function(t) {
    for (var e = [], r = 0; r < this.length; r++)
      for (var a = this[r], n = a._private.children, i = 0; i < n.length; i++)
        e.push(n[i]);
    return this.spawn(e, !0).filter(t);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var r = [];
    function a(n) {
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        r.push(o), o.children().nonempty() && a(o.children());
      }
    }
    return a(this.children()), this.spawn(r, !0).filter(e);
  }
};
function ws(t, e, r, a) {
  for (var n = [], i = new na(), o = t.cy(), s = o.hasCompoundNodes(), l = 0; l < t.length; l++) {
    var u = t[l];
    r ? n.push(u) : s && a(n, i, u);
  }
  for (; n.length > 0; ) {
    var v = n.shift();
    e(v), i.add(v.id()), s && a(n, i, v);
  }
  return t;
}
function jv(t, e, r) {
  if (r.isParent())
    for (var a = r._private.children, n = 0; n < a.length; n++) {
      var i = a[n];
      e.has(i.id()) || t.push(i);
    }
}
ta.forEachDown = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ws(this, t, e, jv);
};
function ec(t, e, r) {
  if (r.isChild()) {
    var a = r._private.parent;
    e.has(a.id()) || t.push(a);
  }
}
ta.forEachUp = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ws(this, t, e, ec);
};
function dp(t, e, r) {
  ec(t, e, r), jv(t, e, r);
}
ta.forEachUpAndDown = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return ws(this, t, e, dp);
};
ta.ancestors = ta.parents;
var Ma, tc;
Ma = tc = {
  data: Be.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  removeData: Be.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  scratch: Be.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Be.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  rscratch: Be.data({
    field: "rscratch",
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !0
  }),
  removeRscratch: Be.removeData({
    field: "rscratch",
    triggerEvent: !1
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
Ma.attr = Ma.data;
Ma.removeAttr = Ma.removeData;
var gp = tc, Kn = {};
function Do(t) {
  return function(e) {
    var r = this;
    if (e === void 0 && (e = !0), r.length !== 0)
      if (r.isNode() && !r.removed()) {
        for (var a = 0, n = r[0], i = n._private.edges, o = 0; o < i.length; o++) {
          var s = i[o];
          !e && s.isLoop() || (a += t(n, s));
        }
        return a;
      } else
        return;
  };
}
ye(Kn, {
  degree: Do(function(t, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: Do(function(t, e) {
    return e.target().same(t) ? 1 : 0;
  }),
  outdegree: Do(function(t, e) {
    return e.source().same(t) ? 1 : 0;
  })
});
function _r(t, e) {
  return function(r) {
    for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
      var o = n[i], s = o[t](r);
      s !== void 0 && (a === void 0 || e(s, a)) && (a = s);
    }
    return a;
  };
}
ye(Kn, {
  minDegree: _r("degree", function(t, e) {
    return t < e;
  }),
  maxDegree: _r("degree", function(t, e) {
    return t > e;
  }),
  minIndegree: _r("indegree", function(t, e) {
    return t < e;
  }),
  maxIndegree: _r("indegree", function(t, e) {
    return t > e;
  }),
  minOutdegree: _r("outdegree", function(t, e) {
    return t < e;
  }),
  maxOutdegree: _r("outdegree", function(t, e) {
    return t > e;
  })
});
ye(Kn, {
  totalDegree: function(e) {
    for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
      r += a[n].degree(e);
    return r;
  }
});
var Nt, rc, ac = function(e, r, a) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (!i.locked()) {
      var o = i._private.position, s = {
        x: r.x != null ? r.x - o.x : 0,
        y: r.y != null ? r.y - o.y : 0
      };
      i.isParent() && !(s.x === 0 && s.y === 0) && i.children().shift(s, a), i.dirtyBoundingBoxCache();
    }
  }
}, yu = {
  field: "position",
  bindingEvent: "position",
  allowBinding: !0,
  allowSetting: !0,
  settingEvent: "position",
  settingTriggersEvent: !0,
  triggerFnName: "emitAndNotify",
  allowGetting: !0,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, r) {
    ac(e, r, !1);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
Nt = rc = {
  position: Be.data(yu),
  // position but no notification to renderer
  silentPosition: Be.data(ye({}, yu, {
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !1,
    beforeSet: function(e, r) {
      ac(e, r, !0);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, r) {
    if (Pe(e))
      r ? this.silentPosition(e) : this.position(e);
    else if (He(e)) {
      var a = e, n = this.cy();
      n.startBatch();
      for (var i = 0; i < this.length; i++) {
        var o = this[i], s = void 0;
        (s = a(o, i)) && (r ? o.silentPosition(s) : o.position(s));
      }
      n.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, !0);
  },
  shift: function(e, r, a) {
    var n;
    if (Pe(e) ? (n = {
      x: ne(e.x) ? e.x : 0,
      y: ne(e.y) ? e.y : 0
    }, a = r) : de(e) && ne(r) && (n = {
      x: 0,
      y: 0
    }, n[e] = r), n != null) {
      var i = this.cy();
      i.startBatch();
      for (var o = 0; o < this.length; o++) {
        var s = this[o];
        if (!(i.hasCompoundNodes() && s.isChild() && s.ancestors().anySame(this))) {
          var l = s.position(), u = {
            x: l.x + n.x,
            y: l.y + n.y
          };
          a ? s.silentPosition(u) : s.position(u);
        }
      }
      i.endBatch();
    }
    return this;
  },
  silentShift: function(e, r) {
    return Pe(e) ? this.shift(e, !0) : de(e) && ne(r) && this.shift(e, r, !0), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, r) {
    var a = this[0], n = this.cy(), i = n.zoom(), o = n.pan(), s = Pe(e) ? e : void 0, l = s !== void 0 || r !== void 0 && de(e);
    if (a && a.isNode())
      if (l)
        for (var u = 0; u < this.length; u++) {
          var v = this[u];
          r !== void 0 ? v.position(e, (r - o[e]) / i) : s !== void 0 && v.position(Mv(s, i, o));
        }
      else {
        var c = a.position();
        return s = qn(c, i, o), e === void 0 ? s : s[e];
      }
    else if (!l)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, r) {
    var a = this[0], n = this.cy(), i = Pe(e) ? e : void 0, o = i !== void 0 || r !== void 0 && de(e), s = n.hasCompoundNodes();
    if (a && a.isNode())
      if (o)
        for (var l = 0; l < this.length; l++) {
          var u = this[l], v = s ? u.parent() : null, c = v && v.length > 0, f = c;
          c && (v = v[0]);
          var h = f ? v.position() : {
            x: 0,
            y: 0
          };
          r !== void 0 ? u.position(e, r + h[e]) : i !== void 0 && u.position({
            x: i.x + h.x,
            y: i.y + h.y
          });
        }
      else {
        var d = a.position(), g = s ? a.parent() : null, p = g && g.length > 0, y = p;
        p && (g = g[0]);
        var b = y ? g.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: d.x - b.x,
          y: d.y - b.y
        }, e === void 0 ? i : i[e];
      }
    else if (!o)
      return;
    return this;
  }
};
Nt.modelPosition = Nt.point = Nt.position;
Nt.modelPositions = Nt.points = Nt.positions;
Nt.renderedPoint = Nt.renderedPosition;
Nt.relativePoint = Nt.relativePosition;
var pp = rc, ra = function(e) {
  switch (e) {
    case "left":
    case "right-inside":
      return "left";
    case "right":
    case "left-inside":
      return "right";
    default:
      return "center";
  }
}, aa = function(e) {
  switch (e) {
    case "top":
    case "bottom-inside":
      return "top";
    case "bottom":
    case "top-inside":
      return "bottom";
    default:
      return "center";
  }
}, yp = function(e) {
  switch (e) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "left-inside":
      return "left";
    case "right-inside":
      return "right";
    default:
      return "center";
  }
}, Jr, mr;
Jr = mr = {};
mr.renderedBoundingBox = function(t) {
  var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, o = e.x2 * a + n.x, s = e.y1 * a + n.y, l = e.y2 * a + n.y;
  return {
    x1: i,
    x2: o,
    y1: s,
    y2: l,
    w: o - i,
    h: l - s
  };
};
mr.dirtyCompoundBoundsCache = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
    if (r.isParent()) {
      var a = r._private;
      a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
    }
  }), this);
};
mr.updateCompoundBounds = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes())
    return this;
  if (!t && e.batching())
    return this;
  function r(o) {
    if (!o.isParent())
      return;
    var s = o._private, l = o.children(), u = o.pstyle("compound-sizing-wrt-labels").value === "include", v = {
      width: {
        val: o.pstyle("min-width").pfValue,
        left: o.pstyle("min-width-bias-left"),
        right: o.pstyle("min-width-bias-right")
      },
      height: {
        val: o.pstyle("min-height").pfValue,
        top: o.pstyle("min-height-bias-top"),
        bottom: o.pstyle("min-height-bias-bottom")
      }
    }, c = l.boundingBox({
      includeLabels: u,
      includeOverlays: !1,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: !1
    }), f = s.position;
    (c.w === 0 || c.h === 0) && (c = {
      w: o.pstyle("width").pfValue,
      h: o.pstyle("height").pfValue
    }, c.x1 = f.x - c.w / 2, c.x2 = f.x + c.w / 2, c.y1 = f.y - c.h / 2, c.y2 = f.y + c.h / 2);
    function h(C, D, A) {
      var L = 0, R = 0, M = D + A;
      return C > 0 && M > 0 && (L = D / M * C, R = A / M * C), {
        biasDiff: L,
        biasComplementDiff: R
      };
    }
    function d(C, D, A, L) {
      if (A.units === "%")
        switch (L) {
          case "width":
            return C > 0 ? A.pfValue * C : 0;
          case "height":
            return D > 0 ? A.pfValue * D : 0;
          case "average":
            return C > 0 && D > 0 ? A.pfValue * (C + D) / 2 : 0;
          case "min":
            return C > 0 && D > 0 ? C > D ? A.pfValue * D : A.pfValue * C : 0;
          case "max":
            return C > 0 && D > 0 ? C > D ? A.pfValue * C : A.pfValue * D : 0;
          default:
            return 0;
        }
      else return A.units === "px" ? A.pfValue : 0;
    }
    var g = v.width.left.value;
    v.width.left.units === "px" && v.width.val > 0 && (g = g * 100 / v.width.val);
    var p = v.width.right.value;
    v.width.right.units === "px" && v.width.val > 0 && (p = p * 100 / v.width.val);
    var y = v.height.top.value;
    v.height.top.units === "px" && v.height.val > 0 && (y = y * 100 / v.height.val);
    var b = v.height.bottom.value;
    v.height.bottom.units === "px" && v.height.val > 0 && (b = b * 100 / v.height.val);
    var m = h(v.width.val - c.w, g, p), E = m.biasDiff, T = m.biasComplementDiff, S = h(v.height.val - c.h, y, b), w = S.biasDiff, x = S.biasComplementDiff;
    s.autoPadding = d(c.w, c.h, o.pstyle("padding"), o.pstyle("padding-relative-to").value), s.autoWidth = Math.max(c.w, v.width.val), f.x = (-E + c.x1 + c.x2 + T) / 2, s.autoHeight = Math.max(c.h, v.height.val), f.y = (-w + c.y1 + c.y2 + x) / 2;
  }
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
  }
  return this;
};
var Lt = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, kt = function(e, r, a, n, i) {
  n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, ar = function(e, r) {
  return r == null ? e : kt(e, r.x1, r.y1, r.x2, r.y2);
}, da = function(e, r, a) {
  return mt(e, r, a);
}, rn = function(e, r, a) {
  if (!r.cy().headless()) {
    var n = r._private, i = n.rstyle, o = i.arrowWidth / 2, s = r.pstyle(a + "-arrow-shape").value, l, u;
    if (s !== "none") {
      a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
      var v = n.arrowBounds = n.arrowBounds || {}, c = v[a] = v[a] || {};
      c.x1 = l - o, c.y1 = u - o, c.x2 = l + o, c.y2 = u + o, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, cn(c, 1), kt(e, c.x1, c.y1, c.x2, c.y2);
    }
  }
}, So = function(e, r, a) {
  if (!r.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = r._private, o = i.rstyle, s = r.pstyle(n + "label").strValue;
    if (s) {
      var l = r.pstyle("text-halign"), u = r.pstyle("text-valign"), v = da(o, "labelWidth", a), c = da(o, "labelHeight", a), f = da(o, "labelX", a), h = da(o, "labelY", a), d = r.pstyle(n + "text-margin-x").pfValue, g = r.pstyle(n + "text-margin-y").pfValue, p = r.isEdge(), y = r.pstyle(n + "text-rotation"), b = r.pstyle("text-outline-width").pfValue, m = r.pstyle("text-border-width").pfValue, E = m / 2, T = r.pstyle("text-background-padding").pfValue, S = 2, w = c, x = v, C = x / 2, D = w / 2, A, L, R, M;
      if (p)
        A = f - C, L = f + C, R = h - D, M = h + D;
      else {
        switch (ra(l.value)) {
          case "left":
            A = f - x, L = f;
            break;
          case "center":
            A = f - C, L = f + C;
            break;
          case "right":
            A = f, L = f + x;
            break;
        }
        switch (aa(u.value)) {
          case "top":
            R = h - w, M = h;
            break;
          case "center":
            R = h - D, M = h + D;
            break;
          case "bottom":
            R = h, M = h + w;
            break;
        }
      }
      var P = d - Math.max(b, E) - T - S, N = d + Math.max(b, E) + T + S, O = g - Math.max(b, E) - T - S, k = g + Math.max(b, E) + T + S;
      A += P, L += N, R += O, M += k;
      var F = a || "main", _ = i.labelBounds, B = _[F] = _[F] || {};
      B.x1 = A, B.y1 = R, B.x2 = L, B.y2 = M, B.w = L - A, B.h = M - R, B.leftPad = P, B.rightPad = N, B.topPad = O, B.botPad = k;
      var G = p && y.strValue === "autorotate", H = y.pfValue != null && y.pfValue !== 0;
      if (G || H) {
        var X = G ? da(i.rstyle, "labelAngle", a) : y.pfValue, $ = Math.cos(X), K = Math.sin(X), ee = (A + L) / 2, ae = (R + M) / 2;
        if (!p) {
          switch (ra(l.value)) {
            case "left":
              ee = L;
              break;
            case "right":
              ee = A;
              break;
          }
          switch (aa(u.value)) {
            case "top":
              ae = M;
              break;
            case "bottom":
              ae = R;
              break;
          }
        }
        var Z = function(we, me) {
          return we = we - ee, me = me - ae, {
            x: we * $ - me * K + ee,
            y: we * K + me * $ + ae
          };
        }, V = Z(A, R), q = Z(A, M), Y = Z(L, R), Q = Z(L, M);
        A = Math.min(V.x, q.x, Y.x, Q.x), L = Math.max(V.x, q.x, Y.x, Q.x), R = Math.min(V.y, q.y, Y.y, Q.y), M = Math.max(V.y, q.y, Y.y, Q.y);
      }
      var re = F + "Rot", ue = _[re] = _[re] || {};
      ue.x1 = A, ue.y1 = R, ue.x2 = L, ue.y2 = M, ue.w = L - A, ue.h = M - R, kt(e, A, R, L, M), kt(i.labelBounds.all, A, R, L, M);
    }
    return e;
  }
}, mu = function(e, r) {
  if (!r.cy().headless()) {
    var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value, i = r.pstyle("outline-offset").value, o = n + i;
    nc(e, r, a, o, "outside", o / 2);
  }
}, nc = function(e, r, a, n, i, o) {
  if (!(a === 0 || n <= 0 || i === "inside")) {
    var s = r.cy(), l = s.renderer(), u = l.nodeShapes[l.getNodeShape(r)];
    if (u) {
      var v = r.position(), c = v.x, f = v.y, h = r.width(), d = r.height();
      if (u.hasMiterBounds) {
        i === "center" && (n /= 2);
        var g = u.miterBounds(c, f, h, d, n);
        ar(e, g);
      } else o != null && o > 0 && fn(e, [o, o, o, o]);
    }
  }
}, mp = function(e, r) {
  if (!r.cy().headless()) {
    var a = r.pstyle("border-opacity").value, n = r.pstyle("border-width").pfValue, i = r.pstyle("border-position").value;
    nc(e, r, a, n, i);
  }
}, bp = function(e, r) {
  var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), o = bt(), s = e._private, l = e.isNode(), u = e.isEdge(), v, c, f, h, d, g, p = s.rstyle, y = l && n ? e.pstyle("bounds-expansion").pfValue : [0], b = function(Ae) {
    return Ae.pstyle("display").value !== "none";
  }, m = !n || b(e) && (!u || b(e.source()) && b(e.target()));
  if (m) {
    var E = 0, T = 0;
    n && r.includeOverlays && (E = e.pstyle("overlay-opacity").value, E !== 0 && (T = e.pstyle("overlay-padding").value));
    var S = 0, w = 0;
    n && r.includeUnderlays && (S = e.pstyle("underlay-opacity").value, S !== 0 && (w = e.pstyle("underlay-padding").value));
    var x = Math.max(T, w), C = 0, D = 0;
    if (n && (C = e.pstyle("width").pfValue, D = C / 2), l && r.includeNodes) {
      var A = e.position();
      d = A.x, g = A.y;
      var L = e.outerWidth(), R = L / 2, M = e.outerHeight(), P = M / 2;
      v = d - R, c = d + R, f = g - P, h = g + P, kt(o, v, f, c, h), n && mu(o, e), n && r.includeOutlines && !i && mu(o, e), n && mp(o, e);
    } else if (u && r.includeEdges)
      if (n && !i) {
        var N = e.pstyle("curve-style").strValue;
        if (v = Math.min(p.srcX, p.midX, p.tgtX), c = Math.max(p.srcX, p.midX, p.tgtX), f = Math.min(p.srcY, p.midY, p.tgtY), h = Math.max(p.srcY, p.midY, p.tgtY), v -= D, c += D, f -= D, h += D, kt(o, v, f, c, h), N === "haystack") {
          var O = p.haystackPts;
          if (O && O.length === 2) {
            if (v = O[0].x, f = O[0].y, c = O[1].x, h = O[1].y, v > c) {
              var k = v;
              v = c, c = k;
            }
            if (f > h) {
              var F = f;
              f = h, h = F;
            }
            kt(o, v - D, f - D, c + D, h + D);
          }
        } else if (N === "bezier" || N === "unbundled-bezier" || nr(N, "segments") || nr(N, "taxi")) {
          var _;
          switch (N) {
            case "bezier":
            case "unbundled-bezier":
              _ = p.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              _ = p.linePts;
              break;
          }
          if (_ != null)
            for (var B = 0; B < _.length; B++) {
              var G = _[B];
              v = G.x - D, c = G.x + D, f = G.y - D, h = G.y + D, kt(o, v, f, c, h);
            }
        }
      } else {
        var H = e.source(), X = H.position(), $ = e.target(), K = $.position();
        if (v = X.x, c = K.x, f = X.y, h = K.y, v > c) {
          var ee = v;
          v = c, c = ee;
        }
        if (f > h) {
          var ae = f;
          f = h, h = ae;
        }
        v -= D, c += D, f -= D, h += D, kt(o, v, f, c, h);
      }
    if (n && r.includeEdges && u && (rn(o, e, "mid-source"), rn(o, e, "mid-target"), rn(o, e, "source"), rn(o, e, "target")), n) {
      var Z = e.pstyle("ghost").value === "yes";
      if (Z) {
        var V = e.pstyle("ghost-offset-x").pfValue, q = e.pstyle("ghost-offset-y").pfValue;
        kt(o, o.x1 + V, o.y1 + q, o.x2 + V, o.y2 + q);
      }
    }
    var Y = s.bodyBounds = s.bodyBounds || {};
    al(Y, o), fn(Y, y), cn(Y, 1), n && (v = o.x1, c = o.x2, f = o.y1, h = o.y2, kt(o, v - x, f - x, c + x, h + x));
    var Q = s.overlayBounds = s.overlayBounds || {};
    al(Q, o), fn(Q, y), cn(Q, 1);
    var re = s.labelBounds = s.labelBounds || {};
    re.all != null ? jh(re.all) : re.all = bt(), n && r.includeLabels && (r.includeMainLabels && So(o, e, null), u && (r.includeSourceLabels && So(o, e, "source"), r.includeTargetLabels && So(o, e, "target")));
  }
  return o.x1 = Lt(o.x1), o.y1 = Lt(o.y1), o.x2 = Lt(o.x2), o.y2 = Lt(o.y2), o.w = Lt(o.x2 - o.x1), o.h = Lt(o.y2 - o.y1), o.w > 0 && o.h > 0 && m && (fn(o, y), cn(o, 1)), o;
}, ic = function(e) {
  var r = 0, a = function(o) {
    return (o ? 1 : 0) << r++;
  }, n = 0;
  return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
}, oc = function(e) {
  var r = function(s) {
    return Math.round(s);
  };
  if (e.isEdge()) {
    var a = e.source().position(), n = e.target().position();
    return Qs([r(a.x), r(a.y), r(n.x), r(n.y)]);
  } else {
    var i = e.position();
    return Qs([r(i.x), r(i.y)]);
  }
}, bu = function(e, r) {
  var a = e._private, n, i = e.isEdge(), o = r == null ? wu : ic(r), s = o === wu;
  if (a.bbCache == null ? (n = bp(e, Pa), a.bbCache = n, a.bbCachePosKey = oc(e)) : n = a.bbCache, !s) {
    var l = e.isNode();
    n = bt(), (r.includeNodes && l || r.includeEdges && !l) && (r.includeOverlays ? ar(n, a.overlayBounds) : ar(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? ar(n, a.labelBounds.all) : (r.includeMainLabels && ar(n, a.labelBounds.mainRot), r.includeSourceLabels && ar(n, a.labelBounds.sourceRot), r.includeTargetLabels && ar(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, Pa = {
  includeNodes: !0,
  includeEdges: !0,
  includeLabels: !0,
  includeMainLabels: !0,
  includeSourceLabels: !0,
  includeTargetLabels: !0,
  includeOverlays: !0,
  includeUnderlays: !0,
  includeOutlines: !0,
  useCache: !0
}, wu = ic(Pa), Eu = ct(Pa);
mr.boundingBox = function(t) {
  var e, r = t === void 0 || t.useCache === void 0 || t.useCache === !0, a = jr(function(v) {
    var c = v._private;
    return c.bbCache == null || c.styleDirty || c.bbCachePosKey !== oc(v);
  }, function(v) {
    return v.id();
  });
  if (r && this.length === 1 && !a(this[0]))
    t === void 0 ? t = Pa : t = Eu(t), e = bu(this[0], t);
  else {
    e = bt(), t = t || Pa;
    var n = Eu(t), i = this, o = i.cy(), s = o.styleEnabled();
    this.edges().forEach(a), this.nodes().forEach(a), s && this.recalculateRenderedStyle(r), this.updateCompoundBounds(!r);
    for (var l = 0; l < i.length; l++) {
      var u = i[l];
      a(u) && u.dirtyBoundingBoxCache(), ar(e, bu(u, n));
    }
  }
  return e.x1 = Lt(e.x1), e.y1 = Lt(e.y1), e.x2 = Lt(e.x2), e.y2 = Lt(e.y2), e.w = Lt(e.x2 - e.x1), e.h = Lt(e.y2 - e.y1), e;
};
mr.dirtyBoundingBoxCache = function() {
  for (var t = 0; t < this.length; t++) {
    var e = this[t]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
mr.boundingBoxAt = function(t) {
  var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
  if (a && (n = e.filter(function(u) {
    return u.isParent();
  }), e = e.not(n)), Pe(t)) {
    var i = t;
    t = function() {
      return i;
    };
  }
  var o = function(v, c) {
    return v._private.bbAtOldPos = t(v, c);
  }, s = function(v) {
    return v._private.bbAtOldPos;
  };
  r.startBatch(), e.forEach(o).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
  var l = Jh(this.boundingBox({
    useCache: !1
  }));
  return e.silentPositions(s), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), l;
};
Jr.boundingbox = Jr.bb = Jr.boundingBox;
Jr.renderedBoundingbox = Jr.renderedBoundingBox;
var wp = mr, Ea, qa;
Ea = qa = {};
var sc = function(e) {
  e.uppercaseName = Bs(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Bs(e.outerName), Ea[e.name] = function() {
    var a = this[0], n = a._private, i = n.cy, o = i._private.styleEnabled;
    if (a)
      if (o) {
        if (a.isParent())
          return a.updateCompoundBounds(), n[e.autoName] || 0;
        var s = a.pstyle(e.name);
        return s.strValue === "label" ? (a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0) : s.pfValue;
      } else
        return 1;
  }, Ea["outer" + e.uppercaseName] = function() {
    var a = this[0], n = a._private, i = n.cy, o = i._private.styleEnabled;
    if (a)
      if (o) {
        var s = a[e.name](), l = a.pstyle("border-position").value, u;
        l === "center" ? u = a.pstyle("border-width").pfValue : l === "outside" ? u = 2 * a.pstyle("border-width").pfValue : u = 0;
        var v = 2 * a.padding();
        return s + u + v;
      } else
        return 1;
  }, Ea["rendered" + e.uppercaseName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.name]();
      return n * this.cy().zoom();
    }
  }, Ea["rendered" + e.uppercaseOuterName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
sc({
  name: "width"
});
sc({
  name: "height"
});
qa.padding = function() {
  var t = this[0], e = t._private;
  return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
};
qa.paddedHeight = function() {
  var t = this[0];
  return t.height() + 2 * t.padding();
};
qa.paddedWidth = function() {
  var t = this[0];
  return t.width() + 2 * t.padding();
};
var Ep = qa, xp = function(e, r) {
  if (e.isEdge() && e.takesUpSpace())
    return r(e);
}, Tp = function(e, r) {
  if (e.isEdge() && e.takesUpSpace()) {
    var a = e.cy();
    return qn(r(e), a.zoom(), a.pan());
  }
}, Cp = function(e, r) {
  if (e.isEdge() && e.takesUpSpace()) {
    var a = e.cy(), n = a.pan(), i = a.zoom();
    return r(e).map(function(o) {
      return qn(o, i, n);
    });
  }
}, Dp = function(e) {
  return e.renderer().getControlPoints(e);
}, Sp = function(e) {
  return e.renderer().getSegmentPoints(e);
}, Ap = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, Lp = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, Rp = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, xu = {
  controlPoints: {
    get: Dp,
    mult: !0
  },
  segmentPoints: {
    get: Sp,
    mult: !0
  },
  sourceEndpoint: {
    get: Ap
  },
  targetEndpoint: {
    get: Lp
  },
  midpoint: {
    get: Rp
  }
}, Ip = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, Mp = Object.keys(xu).reduce(function(t, e) {
  var r = xu[e], a = Ip(e);
  return t[e] = function() {
    return xp(this, r.get);
  }, r.mult ? t[a] = function() {
    return Cp(this, r.get);
  } : t[a] = function() {
    return Tp(this, r.get);
  }, t;
}, {}), Pp = ye({}, pp, wp, Ep, Mp);
var lc = function(e, r) {
  this.recycle(e, r);
};
function ga() {
  return !1;
}
function an() {
  return !0;
}
lc.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, r) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = ga, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? an : ga) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = an;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = an;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = an, this.stopPropagation();
  },
  isDefaultPrevented: ga,
  isPropagationStopped: ga,
  isImmediatePropagationStopped: ga
};
var uc = /^([^.]+)(\.(?:[^.]+))?$/, Op = ".*", vc = {
  qualifierCompare: function(e, r) {
    return e === r;
  },
  eventMatches: function() {
    return !0;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return !1;
  },
  parent: function() {
    return null;
  },
  context: null
}, Tu = Object.keys(vc), kp = {};
function Zn() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kp, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Tu.length; r++) {
    var a = Tu[r];
    this[a] = t[a] || vc[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var dr = Zn.prototype, cc = function(e, r, a, n, i, o, s) {
  He(n) && (i = n, n = null), s && (o == null ? o = s : o = ye({}, o, s));
  for (var l = Ge(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++) {
    var v = l[u];
    if (!ur(v)) {
      var c = v.match(uc);
      if (c) {
        var f = c[1], h = c[2] ? c[2] : null, d = r(e, v, f, h, n, i, o);
        if (d === !1)
          break;
      }
    }
  }
}, Cu = function(e, r) {
  return e.addEventFields(e.context, r), new lc(r.type, r);
}, Np = function(e, r, a) {
  if (zf(a)) {
    r(e, a);
    return;
  } else if (Pe(a)) {
    r(e, Cu(e, a));
    return;
  }
  for (var n = Ge(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var o = n[i];
    if (!ur(o)) {
      var s = o.match(uc);
      if (s) {
        var l = s[1], u = s[2] ? s[2] : null, v = Cu(e, {
          type: l,
          namespace: u,
          target: e.context
        });
        r(e, v);
      }
    }
  }
};
dr.on = dr.addListener = function(t, e, r, a, n) {
  return cc(this, function(i, o, s, l, u, v, c) {
    He(v) && i.listeners.push({
      event: o,
      // full event string
      callback: v,
      // callback to run
      type: s,
      // the event type (e.g. 'click')
      namespace: l,
      // the event namespace (e.g. ".foo")
      qualifier: u,
      // a restriction on whether to match this emitter
      conf: c
      // additional configuration
    });
  }, t, e, r, a, n), this;
};
dr.one = function(t, e, r, a) {
  return this.on(t, e, r, a, {
    one: !0
  });
};
dr.removeListener = dr.off = function(t, e, r, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = xh(this.listeners));
  for (var i = this.listeners, o = function(u) {
    var v = i[u];
    cc(n, function(c, f, h, d, g, p) {
      if ((v.type === h || t === "*") && (!d && v.namespace !== ".*" || v.namespace === d) && (!g || c.qualifierCompare(v.qualifier, g)) && (!p || v.callback === p))
        return i.splice(u, 1), !1;
    }, t, e, r, a);
  }, s = i.length - 1; s >= 0; s--)
    o(s);
  return this;
};
dr.removeAllListeners = function() {
  return this.removeListener("*");
};
dr.emit = dr.trigger = function(t, e, r) {
  var a = this.listeners, n = a.length;
  return this.emitting++, Ge(e) || (e = [e]), Np(this, function(i, o) {
    r != null && (a = [{
      event: o.event,
      type: o.type,
      namespace: o.namespace,
      callback: r
    }], n = a.length);
    for (var s = function() {
      var v = a[l];
      if (v.type === o.type && (!v.namespace || v.namespace === o.namespace || v.namespace === Op) && i.eventMatches(i.context, v, o)) {
        var c = [o];
        e != null && Ch(c, e), i.beforeEmit(i.context, v, o), v.conf && v.conf.one && (i.listeners = i.listeners.filter(function(d) {
          return d !== v;
        }));
        var f = i.callbackContext(i.context, v, o), h = v.callback.apply(f, c);
        i.afterEmit(i.context, v, o), h === !1 && (o.stopPropagation(), o.preventDefault());
      }
    }, l = 0; l < n; l++)
      s();
    i.bubble(i.context) && !o.isPropagationStopped() && i.parent(i.context).emit(o, e);
  }, t), this.emitting--, this;
};
var Bp = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, a) {
    var n = r.qualifier;
    return n != null ? e !== a.target && Fa(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, r) {
    r.cy = e.cy(), r.target = e;
  },
  callbackContext: function(e, r, a) {
    return r.qualifier != null ? a.target : e;
  },
  beforeEmit: function(e, r) {
    r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
  },
  bubble: function() {
    return !0;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
}, nn = function(e) {
  return de(e) ? new fr(e) : e;
}, fc = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e], a = r._private;
      a.emitter || (a.emitter = new Zn(Bp, r));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, a) {
    for (var n = nn(r), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().on(e, n, a);
    }
    return this;
  },
  removeListener: function(e, r, a) {
    for (var n = nn(r), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().removeListener(e, n, a);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e];
      r.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, r, a) {
    for (var n = nn(r), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().one(e, n, a);
    }
    return this;
  },
  once: function(e, r, a) {
    for (var n = nn(r), i = 0; i < this.length; i++) {
      var o = this[i];
      o.emitter().on(e, n, a, {
        once: !0,
        onceCollection: this
      });
    }
  },
  emit: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = this[a];
      n.emitter().emit(e, r);
    }
    return this;
  },
  emitAndNotify: function(e, r) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, r), this;
  }
};
Be.eventAliasesOn(fc);
var hc = {
  nodes: function(e) {
    return this.filter(function(r) {
      return r.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(r) {
      return r.isEdge();
    }).filter(e);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function() {
    for (var e = this.spawn(), r = this.spawn(), a = 0; a < this.length; a++) {
      var n = this[a];
      n.isNode() ? e.push(n) : r.push(n);
    }
    return {
      nodes: e,
      edges: r
    };
  },
  filter: function(e, r) {
    if (e === void 0)
      return this;
    if (de(e) || Dt(e))
      return new fr(e).filter(this);
    if (He(e)) {
      for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
        var o = n[i], s = r ? e.apply(r, [o, i, n]) : e(o, i, n);
        s && a.push(o);
      }
      return a;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      de(e) && (e = this.filter(e));
      for (var r = this.spawn(), a = 0; a < this.length; a++) {
        var n = this[a], i = e.has(n);
        i || r.push(n);
      }
      return r;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (de(e)) {
      var r = e;
      return this.filter(r);
    }
    for (var a = this.spawn(), n = this, i = e, o = this.length < e.length, s = o ? n : i, l = o ? i : n, u = 0; u < s.length; u++) {
      var v = s[u];
      l.has(v) && a.push(v);
    }
    return a;
  },
  xor: function(e) {
    var r = this._private.cy;
    de(e) && (e = r.$(e));
    var a = this.spawn(), n = this, i = e, o = function(l, u) {
      for (var v = 0; v < l.length; v++) {
        var c = l[v], f = c._private.data.id, h = u.hasElementWithId(f);
        h || a.push(c);
      }
    };
    return o(n, i), o(i, n), a;
  },
  diff: function(e) {
    var r = this._private.cy;
    de(e) && (e = r.$(e));
    var a = this.spawn(), n = this.spawn(), i = this.spawn(), o = this, s = e, l = function(v, c, f) {
      for (var h = 0; h < v.length; h++) {
        var d = v[h], g = d._private.data.id, p = c.hasElementWithId(g);
        p ? i.merge(d) : f.push(d);
      }
    };
    return l(o, s, a), l(s, o, n), {
      left: a,
      right: n,
      both: i
    };
  },
  add: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (de(e)) {
      var a = e;
      e = r.mutableElements().filter(a);
    }
    for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
      var o = e[i], s = !this.has(o);
      s && n.push(o);
    }
    return n;
  },
  // in place merge on calling collection
  merge: function(e) {
    var r = this._private, a = r.cy;
    if (!e)
      return this;
    if (e && de(e)) {
      var n = e;
      e = a.mutableElements().filter(n);
    }
    for (var i = r.map, o = 0; o < e.length; o++) {
      var s = e[o], l = s._private.data.id, u = !i.has(l);
      if (u) {
        var v = this.length++;
        this[v] = s, i.set(l, {
          ele: s,
          index: v
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var r = this[e], a = r.id(), n = this._private, i = n.map;
    this[e] = void 0, i.delete(a);
    var o = e === this.length - 1;
    if (this.length > 1 && !o) {
      var s = this.length - 1, l = this[s], u = l._private.data.id;
      this[s] = void 0, this[e] = l, i.set(u, {
        ele: l,
        index: e
      });
    }
    return this.length--, this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function(e) {
    e = e[0];
    var r = this._private, a = e._private.data.id, n = r.map, i = n.get(a);
    if (!i)
      return this;
    var o = i.index;
    return this.unmergeAt(o), this;
  },
  // remove eles in place on calling collection
  unmerge: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (e && de(e)) {
      var a = e;
      e = r.mutableElements().filter(a);
    }
    for (var n = 0; n < e.length; n++)
      this.unmergeOne(e[n]);
    return this;
  },
  unmergeBy: function(e) {
    for (var r = this.length - 1; r >= 0; r--) {
      var a = this[r];
      e(a) && this.unmergeAt(r);
    }
    return this;
  },
  map: function(e, r) {
    for (var a = [], n = this, i = 0; i < n.length; i++) {
      var o = n[i], s = r ? e.apply(r, [o, i, n]) : e(o, i, n);
      a.push(s);
    }
    return a;
  },
  reduce: function(e, r) {
    for (var a = r, n = this, i = 0; i < n.length; i++)
      a = e(a, n[i], i, n);
    return a;
  },
  max: function(e, r) {
    for (var a = -1 / 0, n, i = this, o = 0; o < i.length; o++) {
      var s = i[o], l = r ? e.apply(r, [s, o, i]) : e(s, o, i);
      l > a && (a = l, n = s);
    }
    return {
      value: a,
      ele: n
    };
  },
  min: function(e, r) {
    for (var a = 1 / 0, n, i = this, o = 0; o < i.length; o++) {
      var s = i[o], l = r ? e.apply(r, [s, o, i]) : e(s, o, i);
      l < a && (a = l, n = s);
    }
    return {
      value: a,
      ele: n
    };
  }
}, ke = hc;
ke.u = ke["|"] = ke["+"] = ke.union = ke.or = ke.add;
ke["\\"] = ke["!"] = ke["-"] = ke.difference = ke.relativeComplement = ke.subtract = ke.not;
ke.n = ke["&"] = ke["."] = ke.and = ke.intersection = ke.intersect;
ke["^"] = ke["(+)"] = ke["(-)"] = ke.symmetricDifference = ke.symdiff = ke.xor;
ke.fnFilter = ke.filterFn = ke.stdFilter = ke.filter;
ke.complement = ke.abscomp = ke.absoluteComplement;
var Fp = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
}, dc = function(e, r) {
  var a = e.cy(), n = a.hasCompoundNodes();
  function i(v) {
    var c = v.pstyle("z-compound-depth");
    return c.value === "auto" ? n ? v.zDepth() : 0 : c.value === "bottom" ? -1 : c.value === "top" ? us : 0;
  }
  var o = i(e) - i(r);
  if (o !== 0)
    return o;
  function s(v) {
    var c = v.pstyle("z-index-compare");
    return c.value === "auto" && v.isNode() ? 1 : 0;
  }
  var l = s(e) - s(r);
  if (l !== 0)
    return l;
  var u = e.pstyle("z-index").value - r.pstyle("z-index").value;
  return u !== 0 ? u : e.poolIndex() - r.poolIndex();
}, On = {
  forEach: function(e, r) {
    if (He(e))
      for (var a = this.length, n = 0; n < a; n++) {
        var i = this[n], o = r ? e.apply(r, [i, n, this]) : e(i, n, this);
        if (o === !1)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], r = 0; r < this.length; r++)
      e.push(this[r]);
    return e;
  },
  slice: function(e, r) {
    var a = [], n = this.length;
    r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
    for (var i = e; i >= 0 && i < r && i < n; i++)
      a.push(this[i]);
    return this.spawn(a);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!He(e))
      return this;
    var r = this.toArray().sort(e);
    return this.spawn(r);
  },
  sortByZIndex: function() {
    return this.sort(dc);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var r = e._private, a = r.group;
      if (a === "nodes") {
        var n = r.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : us - 1;
      } else {
        var i = r.source, o = r.target, s = i.zDepth(), l = o.zDepth();
        return Math.max(s, l, 0);
      }
    }
  }
};
On.each = On.forEach;
var _p = function() {
  var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : rt(Symbol)) != e && rt(Symbol.iterator) != e;
  r && (On[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: !1
    }, i = 0, o = this.length;
    return fv({
      next: function() {
        return i < o ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
_p();
var Gp = ct({
  nodeDimensionsIncludeLabels: !1
}), dn = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = Gp(e);
    var r;
    if (!this.takesUpSpace())
      r = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var a = this.boundingBox();
      r = {
        w: a.w,
        h: a.h
      };
    } else
      r = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function(e, r, a) {
    var n = this.nodes().filter(function(T) {
      return !T.isParent();
    }), i = this.cy(), o = r.eles, s = function(S) {
      return S.id();
    }, l = jr(a, s);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var u = function(S, w, x) {
      var C = {
        x: w.x1 + w.w / 2,
        y: w.y1 + w.h / 2
      }, D = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (x.x - C.x) * S,
        y: (x.y - C.y) * S
      };
      return {
        x: C.x + D.x,
        y: C.y + D.y
      };
    }, v = r.spacingFactor && r.spacingFactor !== 1, c = function() {
      if (!v)
        return null;
      for (var S = bt(), w = 0; w < n.length; w++) {
        var x = n[w], C = l(x, w);
        Pv(S, C.x, C.y);
      }
      return S;
    }, f = c(), h = jr(function(T, S) {
      var w = l(T, S);
      if (v) {
        var x = Math.abs(r.spacingFactor);
        w = u(x, f, w);
      }
      return r.transform != null && (w = r.transform(T, w)), w;
    }, s);
    if (r.animate) {
      for (var d = 0; d < n.length; d++) {
        var g = n[d], p = h(g, d), y = r.animateFilter == null || r.animateFilter(g, d);
        if (y) {
          var b = g.animation({
            position: p,
            duration: r.animationDuration,
            easing: r.animationEasing
          });
          e.animations.push(b);
        } else
          g.position(p);
      }
      if (r.fit) {
        var m = i.animation({
          fit: {
            boundingBox: o.boundingBoxAt(h),
            padding: r.padding
          },
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(m);
      } else if (r.zoom !== void 0 && r.pan !== void 0) {
        var E = i.animation({
          zoom: r.zoom,
          pan: r.pan,
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(E);
      }
      e.animations.forEach(function(T) {
        return T.play();
      }), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), ia.all(e.animations.map(function(T) {
        return T.promise();
      })).then(function() {
        e.one("layoutstop", r.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      n.positions(h), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", r.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var r = this.cy();
    return r.makeLayout(ye({}, e, {
      eles: this
    }));
  }
};
dn.createLayout = dn.makeLayout = dn.layout;
function gc(t, e, r) {
  var a = r._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[t]) != null || (i = n[t] = e(r)), i;
}
function Qn(t, e) {
  return t = Rr(t), function(a) {
    return gc(t, e, a);
  };
}
function Jn(t, e) {
  t = Rr(t);
  var r = function(n) {
    return e.call(n);
  };
  return function() {
    var n = this[0];
    if (n)
      return gc(t, r, n);
  };
}
var ut = {
  recalculateRenderedStyle: function(e) {
    var r = this.cy(), a = r.renderer(), n = r.styleEnabled();
    return a && n && a.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), r = function(i) {
      return i._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var a;
      a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(r);
    } else
      this.forEach(function(n) {
        r(n), n.connectedEdges().forEach(r);
      });
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function(e) {
    var r = this._private.cy;
    if (!r.styleEnabled())
      return this;
    if (r.batching()) {
      var a = r._private.batchStyleEles;
      return a.merge(this), this;
    }
    var n = r.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var o = i;
    return e ? o.emitAndNotify("style") : o.emit("style"), i.forEach(function(s) {
      return s._private.styleDirty = !0;
    }), this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function() {
    var e = this.cy();
    if (e.styleEnabled())
      for (var r = 0; r < this.length; r++) {
        var a = this[r];
        a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
      }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
    if (n.styleEnabled() && a) {
      a._private.styleDirty && (a._private.styleDirty = !1, n.style().apply(a));
      var i = a._private.style[e];
      return i ?? (r ? n.style().getDefaultProperty(e) : null);
    }
  },
  numericStyle: function(e) {
    var r = this[0];
    if (r.cy().styleEnabled() && r) {
      var a = r.pstyle(e);
      return a.pfValue !== void 0 ? a.pfValue : a.value;
    }
  },
  numericStyleUnits: function(e) {
    var r = this[0];
    if (r.cy().styleEnabled() && r)
      return r.pstyle(e).units;
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var a = this[0];
    if (a)
      return r.style().getRenderedStyle(a, e);
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function(e, r) {
    var a = this.cy();
    if (!a.styleEnabled())
      return this;
    var n = !1, i = a.style();
    if (Pe(e)) {
      var o = e;
      i.applyBypass(this, o, n), this.emitAndNotify("style");
    } else if (de(e))
      if (r === void 0) {
        var s = this[0];
        return s ? i.getStylePropertyValue(s, e) : void 0;
      } else
        i.applyBypass(this, e, r, n), this.emitAndNotify("style");
    else if (e === void 0) {
      var l = this[0];
      return l ? i.getRawStyle(l) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var a = !1, n = r.style(), i = this;
    if (e === void 0)
      for (var o = 0; o < i.length; o++) {
        var s = i[o];
        n.removeAllBypasses(s, a);
      }
    else {
      e = e.split(/\s+/);
      for (var l = 0; l < i.length; l++) {
        var u = i[l];
        n.removeBypasses(u, e, a);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var r = e.hasCompoundNodes(), a = this[0];
    if (a) {
      var n = a._private, i = a.pstyle("opacity").value;
      if (!r)
        return i;
      var o = n.data.parent ? a.parents() : null;
      if (o)
        for (var s = 0; s < o.length; s++) {
          var l = o[s], u = l.pstyle("opacity").value;
          i = u * i;
        }
      return i;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var r = this[0], a = r.cy().hasCompoundNodes();
    if (r)
      return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var r = this[0];
    return !!r._private.backgrounding;
  }
};
function Ao(t, e) {
  var r = t._private, a = r.data.parent ? t.parents() : null;
  if (a)
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      if (!e(i))
        return !1;
    }
  return !0;
}
function Es(t) {
  var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
  return function() {
    var n = this.cy();
    if (!n.styleEnabled())
      return !0;
    var i = this[0], o = n.hasCompoundNodes();
    if (i) {
      var s = i._private;
      if (!e(i))
        return !1;
      if (i.isNode())
        return !o || Ao(i, a);
      var l = s.source, u = s.target;
      return r(l) && (!o || Ao(l, r)) && (l === u || r(u) && (!o || Ao(u, r)));
    }
  };
}
var oa = Qn("eleTakesUpSpace", function(t) {
  return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
});
ut.takesUpSpace = Jn("takesUpSpace", Es({
  ok: oa
}));
var zp = Qn("eleInteractive", function(t) {
  return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && oa(t);
}), Vp = Qn("parentInteractive", function(t) {
  return t.pstyle("visibility").value === "visible" && oa(t);
});
ut.interactive = Jn("interactive", Es({
  ok: zp,
  parentOk: Vp,
  edgeOkViaNode: oa
}));
ut.noninteractive = function() {
  var t = this[0];
  if (t)
    return !t.interactive();
};
var Up = Qn("eleVisible", function(t) {
  return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && oa(t);
}), qp = oa;
ut.visible = Jn("visible", Es({
  ok: Up,
  edgeOkViaNode: qp
}));
ut.hidden = function() {
  var t = this[0];
  if (t)
    return !t.visible();
};
ut.isBundledBezier = Jn("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
});
ut.bypass = ut.css = ut.style;
ut.renderedCss = ut.renderedStyle;
ut.removeBypass = ut.removeCss = ut.removeStyle;
ut.pstyle = ut.parsedStyle;
var lr = {};
function Du(t) {
  return function() {
    var e = arguments, r = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(t.event, a, n);
    } else if (e.length === 1 && He(e[0])) {
      var i = e[0];
      this.on(t.event, i);
    } else if (e.length === 0 || e.length === 1 && Ge(e[0])) {
      for (var o = e.length === 1 ? e[0] : null, s = 0; s < this.length; s++) {
        var l = this[s], u = !t.ableField || l._private[t.ableField], v = l._private[t.field] != t.value;
        if (t.overrideAble) {
          var c = t.overrideAble(l);
          if (c !== void 0 && (u = c, !c))
            return this;
        }
        u && (l._private[t.field] = t.value, v && r.push(l));
      }
      var f = this.spawn(r);
      f.updateStyle(), f.emit(t.event), o && f.emit(o);
    }
    return this;
  };
}
function sa(t) {
  lr[t.field] = function() {
    var e = this[0];
    if (e) {
      if (t.overrideField) {
        var r = t.overrideField(e);
        if (r !== void 0)
          return r;
      }
      return e._private[t.field];
    }
  }, lr[t.on] = Du({
    event: t.on,
    field: t.field,
    ableField: t.ableField,
    overrideAble: t.overrideAble,
    value: !0
  }), lr[t.off] = Du({
    event: t.off,
    field: t.field,
    ableField: t.ableField,
    overrideAble: t.overrideAble,
    value: !1
  });
}
sa({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? !0 : void 0;
  },
  on: "lock",
  off: "unlock"
});
sa({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
sa({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "select",
  off: "unselect"
});
sa({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
lr.deselect = lr.unselect;
lr.grabbed = function() {
  var t = this[0];
  if (t)
    return t._private.grabbed;
};
sa({
  field: "active",
  on: "activate",
  off: "unactivate"
});
sa({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
lr.inactive = function() {
  var t = this[0];
  if (t)
    return !t._private.active;
};
var dt = {}, Su = function(e) {
  return function(a) {
    for (var n = this, i = [], o = 0; o < n.length; o++) {
      var s = n[o];
      if (s.isNode()) {
        for (var l = !1, u = s.connectedEdges(), v = 0; v < u.length; v++) {
          var c = u[v], f = c.source(), h = c.target();
          if (e.noIncomingEdges && h === s && f !== s || e.noOutgoingEdges && f === s && h !== s) {
            l = !0;
            break;
          }
        }
        l || i.push(s);
      }
    }
    return this.spawn(i, !0).filter(a);
  };
}, Au = function(e) {
  return function(r) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var o = a[i];
      if (o.isNode())
        for (var s = o.connectedEdges(), l = 0; l < s.length; l++) {
          var u = s[l], v = u.source(), c = u.target();
          e.outgoing && v === o ? (n.push(u), n.push(c)) : e.incoming && c === o && (n.push(u), n.push(v));
        }
    }
    return this.spawn(n, !0).filter(r);
  };
}, Lu = function(e) {
  return function(r) {
    for (var a = this, n = [], i = {}; ; ) {
      var o = e.outgoing ? a.outgoers() : a.incomers();
      if (o.length === 0)
        break;
      for (var s = !1, l = 0; l < o.length; l++) {
        var u = o[l], v = u.id();
        i[v] || (i[v] = !0, n.push(u), s = !0);
      }
      if (!s)
        break;
      a = o;
    }
    return this.spawn(n, !0).filter(r);
  };
};
dt.clearTraversalCache = function() {
  for (var t = 0; t < this.length; t++)
    this[t]._private.traversalCache = null;
};
ye(dt, {
  // get the root nodes in the DAG
  roots: Su({
    noIncomingEdges: !0
  }),
  // get the leaf nodes in the DAG
  leaves: Su({
    noOutgoingEdges: !0
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: Rt(Au({
    outgoing: !0
  }), "outgoers"),
  // aka DAG descendants
  successors: Lu({
    outgoing: !0
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: Rt(Au({
    incoming: !0
  }), "incomers"),
  // aka DAG ancestors
  predecessors: Lu({})
});
ye(dt, {
  neighborhood: Rt(function(t) {
    for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
      for (var n = r[a], i = n.connectedEdges(), o = 0; o < i.length; o++) {
        var s = i[o], l = s.source(), u = s.target(), v = n === l ? u : l;
        v.length > 0 && e.push(v[0]), e.push(s[0]);
      }
    return this.spawn(e, !0).filter(t);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
dt.neighbourhood = dt.neighborhood;
dt.closedNeighbourhood = dt.closedNeighborhood;
dt.openNeighbourhood = dt.openNeighborhood;
ye(dt, {
  source: Rt(function(e) {
    var r = this[0], a;
    return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
  }, "source"),
  target: Rt(function(e) {
    var r = this[0], a;
    return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
  }, "target"),
  sources: Ru({
    attr: "source"
  }),
  targets: Ru({
    attr: "target"
  })
});
function Ru(t) {
  return function(r) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], o = i._private[t.attr];
      o && a.push(o);
    }
    return this.spawn(a, !0).filter(r);
  };
}
ye(dt, {
  edgesWith: Rt(Iu(), "edgesWith"),
  edgesTo: Rt(Iu({
    thisIsSrc: !0
  }), "edgesTo")
});
function Iu(t) {
  return function(r) {
    var a = [], n = this._private.cy, i = t || {};
    de(r) && (r = n.$(r));
    for (var o = 0; o < r.length; o++)
      for (var s = r[o]._private.edges, l = 0; l < s.length; l++) {
        var u = s[l], v = u._private.data, c = this.hasElementWithId(v.source) && r.hasElementWithId(v.target), f = r.hasElementWithId(v.source) && this.hasElementWithId(v.target), h = c || f;
        h && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !c || i.thisIsTgt && !f) || a.push(u));
      }
    return this.spawn(a, !0);
  };
}
ye(dt, {
  connectedEdges: Rt(function(t) {
    for (var e = [], r = this, a = 0; a < r.length; a++) {
      var n = r[a];
      if (n.isNode())
        for (var i = n._private.edges, o = 0; o < i.length; o++) {
          var s = i[o];
          e.push(s);
        }
    }
    return this.spawn(e, !0).filter(t);
  }, "connectedEdges"),
  connectedNodes: Rt(function(t) {
    for (var e = [], r = this, a = 0; a < r.length; a++) {
      var n = r[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, !0).filter(t);
  }, "connectedNodes"),
  parallelEdges: Rt(Mu(), "parallelEdges"),
  codirectedEdges: Rt(Mu({
    codirected: !0
  }), "codirectedEdges")
});
function Mu(t) {
  var e = {
    codirected: !1
  };
  return t = ye({}, e, t), function(a) {
    for (var n = [], i = this.edges(), o = t, s = 0; s < i.length; s++)
      for (var l = i[s], u = l._private, v = u.source, c = v._private.data.id, f = u.data.target, h = v._private.edges, d = 0; d < h.length; d++) {
        var g = h[d], p = g._private.data, y = p.target, b = p.source, m = y === f && b === c, E = c === y && f === b;
        (o.codirected && m || !o.codirected && (m || E)) && n.push(g);
      }
    return this.spawn(n, !0).filter(a);
  };
}
ye(dt, {
  components: function(e) {
    var r = this, a = r.cy(), n = a.collection(), i = e == null ? r.nodes() : e.nodes(), o = [];
    e != null && i.empty() && (i = e.sources());
    var s = function(v, c) {
      n.merge(v), i.unmerge(v), c.merge(v);
    };
    if (i.empty())
      return r.spawn();
    var l = function() {
      var v = a.collection();
      o.push(v);
      var c = i[0];
      s(c, v), r.bfs({
        directed: !1,
        roots: c,
        visit: function(h) {
          return s(h, v);
        }
      }), v.forEach(function(f) {
        f.connectedEdges().forEach(function(h) {
          r.has(h) && v.has(h.source()) && v.has(h.target()) && v.merge(h);
        });
      });
    };
    do
      l();
    while (i.length > 0);
    return o;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
dt.componentsOf = dt.components;
var vt = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === void 0) {
    qe("A collection must have a reference to the core");
    return;
  }
  var i = new Kt(), o = !1;
  if (!r)
    r = [];
  else if (r.length > 0 && Pe(r[0]) && !Fa(r[0])) {
    o = !0;
    for (var s = [], l = new na(), u = 0, v = r.length; u < v; u++) {
      var c = r[u];
      c.data == null && (c.data = {});
      var f = c.data;
      if (f.id == null)
        f.id = Rv();
      else if (e.hasElementWithId(f.id) || l.has(f.id))
        continue;
      var h = new Un(e, c, !1);
      s.push(h), l.add(f.id);
    }
    r = s;
  }
  this.length = 0;
  for (var d = 0, g = r.length; d < g; d++) {
    var p = r[d][0];
    if (p != null) {
      var y = p._private.data.id;
      (!a || !i.has(y)) && (a && i.set(y, {
        index: this.length,
        ele: p
      }), this[this.length] = p, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(b) {
      this.lazyMap = b;
    },
    rebuildMap: function() {
      for (var m = this.lazyMap = new Kt(), E = this.eles, T = 0; T < E.length; T++) {
        var S = E[T];
        m.set(S.id(), {
          index: T,
          ele: S
        });
      }
    }
  }, a && (this._private.map = i), o && !n && this.restore();
}, Ve = Un.prototype = vt.prototype = Object.create(Array.prototype);
Ve.instanceString = function() {
  return "collection";
};
Ve.spawn = function(t, e) {
  return new vt(this.cy(), t, e);
};
Ve.spawnSelf = function() {
  return this.spawn(this);
};
Ve.cy = function() {
  return this._private.cy;
};
Ve.renderer = function() {
  return this._private.cy.renderer();
};
Ve.element = function() {
  return this[0];
};
Ve.collection = function() {
  return gv(this) ? this : new vt(this._private.cy, [this]);
};
Ve.unique = function() {
  return new vt(this._private.cy, this, !0);
};
Ve.hasElementWithId = function(t) {
  return t = "" + t, this._private.map.has(t);
};
Ve.getElementById = function(t) {
  t = "" + t;
  var e = this._private.cy, r = this._private.map.get(t);
  return r ? r.ele : new vt(e);
};
Ve.$id = Ve.getElementById;
Ve.poolIndex = function() {
  var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
  return e._private.map.get(r).index;
};
Ve.indexOf = function(t) {
  var e = t[0]._private.data.id;
  return this._private.map.get(e).index;
};
Ve.indexOfId = function(t) {
  return t = "" + t, this._private.map.get(t).index;
};
Ve.json = function(t) {
  var e = this.element(), r = this.cy();
  if (e == null && t)
    return this;
  if (e != null) {
    var a = e._private;
    if (Pe(t)) {
      if (r.startBatch(), t.data) {
        e.data(t.data);
        var n = a.data;
        if (e.isEdge()) {
          var i = !1, o = {}, s = t.data.source, l = t.data.target;
          s != null && s != n.source && (o.source = "" + s, i = !0), l != null && l != n.target && (o.target = "" + l, i = !0), i && (e = e.move(o));
        } else {
          var u = "parent" in t.data, v = t.data.parent;
          u && (v != null || n.parent != null) && v != n.parent && (v === void 0 && (v = null), v != null && (v = "" + v), e = e.move({
            parent: v
          }));
        }
      }
      t.position && e.position(t.position);
      var c = function(g, p, y) {
        var b = t[g];
        b != null && b !== a[g] && (b ? e[p]() : e[y]());
      };
      return c("removed", "remove", "restore"), c("selected", "select", "unselect"), c("selectable", "selectify", "unselectify"), c("locked", "lock", "unlock"), c("grabbable", "grabify", "ungrabify"), c("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
    } else if (t === void 0) {
      var f = {
        data: qt(a.data),
        position: qt(a.position),
        group: a.group,
        removed: a.removed,
        selected: a.selected,
        selectable: a.selectable,
        locked: a.locked,
        grabbable: a.grabbable,
        pannable: a.pannable,
        classes: null
      };
      f.classes = "";
      var h = 0;
      return a.classes.forEach(function(d) {
        return f.classes += h++ === 0 ? d : " " + d;
      }), f;
    }
  }
};
Ve.jsons = function() {
  for (var t = [], e = 0; e < this.length; e++) {
    var r = this[e], a = r.json();
    t.push(a);
  }
  return t;
};
Ve.clone = function() {
  for (var t = this.cy(), e = [], r = 0; r < this.length; r++) {
    var a = this[r], n = a.json(), i = new Un(t, n, !1);
    e.push(i);
  }
  return new vt(t, e);
};
Ve.copy = Ve.clone;
Ve.restore = function() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = r.cy(), n = a._private, i = [], o = [], s, l = 0, u = r.length; l < u; l++) {
    var v = r[l];
    e && !v.removed() || (v.isNode() ? i.push(v) : o.push(v));
  }
  s = i.concat(o);
  var c, f = function() {
    s.splice(c, 1), c--;
  };
  for (c = 0; c < s.length; c++) {
    var h = s[c], d = h._private, g = d.data;
    if (h.clearTraversalCache(), !(!e && !d.removed)) {
      if (g.id === void 0)
        g.id = Rv();
      else if (ne(g.id))
        g.id = "" + g.id;
      else if (ur(g.id) || !de(g.id)) {
        qe("Can not create element with invalid string ID `" + g.id + "`"), f();
        continue;
      } else if (a.hasElementWithId(g.id)) {
        qe("Can not create second element with ID `" + g.id + "`"), f();
        continue;
      }
    }
    var p = g.id;
    if (h.isNode()) {
      var y = d.position;
      y.x == null && (y.x = 0), y.y == null && (y.y = 0);
    }
    if (h.isEdge()) {
      for (var b = h, m = ["source", "target"], E = m.length, T = !1, S = 0; S < E; S++) {
        var w = m[S], x = g[w];
        ne(x) && (x = g[w] = "" + g[w]), x == null || x === "" ? (qe("Can not create edge `" + p + "` with unspecified " + w), T = !0) : a.hasElementWithId(x) || (qe("Can not create edge `" + p + "` with nonexistent " + w + " `" + x + "`"), T = !0);
      }
      if (T) {
        f();
        continue;
      }
      var C = a.getElementById(g.source), D = a.getElementById(g.target);
      C.same(D) ? C._private.edges.push(b) : (C._private.edges.push(b), D._private.edges.push(b)), b._private.source = C, b._private.target = D;
    }
    d.map = new Kt(), d.map.set(p, {
      ele: h,
      index: 0
    }), d.removed = !1, e && a.addToPool(h);
  }
  for (var A = 0; A < i.length; A++) {
    var L = i[A], R = L._private.data;
    ne(R.parent) && (R.parent = "" + R.parent);
    var M = R.parent, P = M != null;
    if (P || L._private.parent) {
      var N = L._private.parent ? a.collection().merge(L._private.parent) : a.getElementById(M);
      if (N.empty())
        R.parent = void 0;
      else if (N[0].removed())
        Fe("Node added with missing parent, reference to parent removed"), R.parent = void 0, L._private.parent = null;
      else {
        for (var O = !1, k = N; !k.empty(); ) {
          if (L.same(k)) {
            O = !0, R.parent = void 0;
            break;
          }
          k = k.parent();
        }
        O || (N[0]._private.children.push(L), L._private.parent = N[0], n.hasCompoundNodes = !0);
      }
    }
  }
  if (s.length > 0) {
    for (var F = s.length === r.length ? r : new vt(a, s), _ = 0; _ < F.length; _++) {
      var B = F[_];
      B.isNode() || (B.parallelEdges().clearTraversalCache(), B.source().clearTraversalCache(), B.target().clearTraversalCache());
    }
    var G;
    n.hasCompoundNodes ? G = a.collection().merge(F).merge(F.connectedNodes()).merge(F.parent()) : G = F, G.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? F.emitAndNotify("add") : e && F.emit("add");
  }
  return r;
};
Ve.removed = function() {
  var t = this[0];
  return t && t._private.removed;
};
Ve.inside = function() {
  var t = this[0];
  return t && !t._private.removed;
};
Ve.remove = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = [], n = {}, i = r._private.cy;
  function o(M) {
    for (var P = M._private.edges, N = 0; N < P.length; N++)
      l(P[N]);
  }
  function s(M) {
    for (var P = M._private.children, N = 0; N < P.length; N++)
      l(P[N]);
  }
  function l(M) {
    var P = n[M.id()];
    e && M.removed() || P || (n[M.id()] = !0, M.isNode() ? (a.push(M), o(M), s(M)) : a.unshift(M));
  }
  for (var u = 0, v = r.length; u < v; u++) {
    var c = r[u];
    l(c);
  }
  function f(M, P) {
    var N = M._private.edges;
    vr(N, P), M.clearTraversalCache();
  }
  function h(M) {
    M.clearTraversalCache();
  }
  var d = [];
  d.ids = {};
  function g(M, P) {
    P = P[0], M = M[0];
    var N = M._private.children, O = M.id();
    vr(N, P), P._private.parent = null, d.ids[O] || (d.ids[O] = !0, d.push(M));
  }
  r.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var p = 0; p < a.length; p++) {
    var y = a[p];
    if (y.isEdge()) {
      var b = y.source()[0], m = y.target()[0];
      f(b, y), f(m, y);
      for (var E = y.parallelEdges(), T = 0; T < E.length; T++) {
        var S = E[T];
        h(S), S.isBundledBezier() && S.dirtyBoundingBoxCache();
      }
    } else {
      var w = y.parent();
      w.length !== 0 && g(w, y);
    }
    e && (y._private.removed = !0);
  }
  var x = i._private.elements;
  i._private.hasCompoundNodes = !1;
  for (var C = 0; C < x.length; C++) {
    var D = x[C];
    if (D.isParent()) {
      i._private.hasCompoundNodes = !0;
      break;
    }
  }
  var A = new vt(this.cy(), a);
  A.size() > 0 && (t ? A.emitAndNotify("remove") : e && A.emit("remove"));
  for (var L = 0; L < d.length; L++) {
    var R = d[L];
    (!e || !R.removed()) && R.updateStyle();
  }
  return A;
};
Ve.move = function(t) {
  var e = this._private.cy, r = this, a = !1, n = !1, i = function(d) {
    return d == null ? d : "" + d;
  };
  if (t.source !== void 0 || t.target !== void 0) {
    var o = i(t.source), s = i(t.target), l = o != null && e.hasElementWithId(o), u = s != null && e.hasElementWithId(s);
    (l || u) && (e.batch(function() {
      r.remove(a, n), r.emitAndNotify("moveout");
      for (var h = 0; h < r.length; h++) {
        var d = r[h], g = d._private.data;
        d.isEdge() && (l && (g.source = o), u && (g.target = s));
      }
      r.restore(a, n);
    }), r.emitAndNotify("move"));
  } else if (t.parent !== void 0) {
    var v = i(t.parent), c = v === null || e.hasElementWithId(v);
    if (c) {
      var f = v === null ? void 0 : v;
      e.batch(function() {
        var h = r.remove(a, n);
        h.emitAndNotify("moveout");
        for (var d = 0; d < r.length; d++) {
          var g = r[d], p = g._private.data;
          g.isNode() && (p.parent = f);
        }
        h.restore(a, n);
      }), r.emitAndNotify("move");
    }
  }
  return this;
};
[Vv, jg, hn, sr, ta, gp, Kn, Pp, fc, hc, Fp, On, dn, ut, lr, dt].forEach(function(t) {
  ye(Ve, t);
});
var Yp = {
  add: function(e) {
    var r, a = this;
    if (Dt(e)) {
      var n = e;
      if (n._private.cy === a)
        r = n.restore();
      else {
        for (var i = [], o = 0; o < n.length; o++) {
          var s = n[o];
          i.push(s.json());
        }
        r = new vt(a, i);
      }
    } else if (Ge(e)) {
      var l = e;
      r = new vt(a, l);
    } else if (Pe(e) && (Ge(e.nodes) || Ge(e.edges))) {
      for (var u = e, v = [], c = ["nodes", "edges"], f = 0, h = c.length; f < h; f++) {
        var d = c[f], g = u[d];
        if (Ge(g))
          for (var p = 0, y = g.length; p < y; p++) {
            var b = ye({
              group: d
            }, g[p]);
            v.push(b);
          }
      }
      r = new vt(a, v);
    } else {
      var m = e;
      r = new Un(a, m).collection();
    }
    return r;
  },
  remove: function(e) {
    if (!Dt(e)) {
      if (de(e)) {
        var r = e;
        e = this.$(r);
      }
    }
    return e.remove();
  }
};
function Hp(t, e, r, a) {
  var n = 4, i = 1e-3, o = 1e-7, s = 10, l = 11, u = 1 / (l - 1), v = typeof Float32Array < "u";
  if (arguments.length !== 4)
    return !1;
  for (var c = 0; c < 4; ++c)
    if (typeof arguments[c] != "number" || isNaN(arguments[c]) || !isFinite(arguments[c]))
      return !1;
  t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
  var f = v ? new Float32Array(l) : new Array(l);
  function h(D, A) {
    return 1 - 3 * A + 3 * D;
  }
  function d(D, A) {
    return 3 * A - 6 * D;
  }
  function g(D) {
    return 3 * D;
  }
  function p(D, A, L) {
    return ((h(A, L) * D + d(A, L)) * D + g(A)) * D;
  }
  function y(D, A, L) {
    return 3 * h(A, L) * D * D + 2 * d(A, L) * D + g(A);
  }
  function b(D, A) {
    for (var L = 0; L < n; ++L) {
      var R = y(A, t, r);
      if (R === 0)
        return A;
      var M = p(A, t, r) - D;
      A -= M / R;
    }
    return A;
  }
  function m() {
    for (var D = 0; D < l; ++D)
      f[D] = p(D * u, t, r);
  }
  function E(D, A, L) {
    var R, M, P = 0;
    do
      M = A + (L - A) / 2, R = p(M, t, r) - D, R > 0 ? L = M : A = M;
    while (Math.abs(R) > o && ++P < s);
    return M;
  }
  function T(D) {
    for (var A = 0, L = 1, R = l - 1; L !== R && f[L] <= D; ++L)
      A += u;
    --L;
    var M = (D - f[L]) / (f[L + 1] - f[L]), P = A + M * u, N = y(P, t, r);
    return N >= i ? b(D, P) : N === 0 ? P : E(D, A, A + u);
  }
  var S = !1;
  function w() {
    S = !0, (t !== e || r !== a) && m();
  }
  var x = function(A) {
    return S || w(), t === e && r === a ? A : A === 0 ? 0 : A === 1 ? 1 : p(T(A), e, a);
  };
  x.getControlPoints = function() {
    return [{
      x: t,
      y: e
    }, {
      x: r,
      y: a
    }];
  };
  var C = "generateBezier(" + [t, e, r, a] + ")";
  return x.toString = function() {
    return C;
  }, x;
}
var Xp = /* @__PURE__ */ (function() {
  function t(a) {
    return -a.tension * a.x - a.friction * a.v;
  }
  function e(a, n, i) {
    var o = {
      x: a.x + i.dx * n,
      v: a.v + i.dv * n,
      tension: a.tension,
      friction: a.friction
    };
    return {
      dx: o.v,
      dv: t(o)
    };
  }
  function r(a, n) {
    var i = {
      dx: a.v,
      dv: t(a)
    }, o = e(a, n * 0.5, i), s = e(a, n * 0.5, o), l = e(a, n, s), u = 1 / 6 * (i.dx + 2 * (o.dx + s.dx) + l.dx), v = 1 / 6 * (i.dv + 2 * (o.dv + s.dv) + l.dv);
    return a.x = a.x + u * n, a.v = a.v + v * n, a;
  }
  return function a(n, i, o) {
    var s = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, l = [0], u = 0, v = 1 / 1e4, c = 16 / 1e3, f, h, d;
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, o = o || null, s.tension = n, s.friction = i, f = o !== null, f ? (u = a(n, i), h = u / o * c) : h = c; d = r(d || s, h), l.push(1 + d.x), u += 16, Math.abs(d.x) > v && Math.abs(d.v) > v; )
      ;
    return f ? function(g) {
      return l[g * (l.length - 1) | 0];
    } : u;
  };
})(), ze = function(e, r, a, n) {
  var i = Hp(e, r, a, n);
  return function(o, s, l) {
    return o + (s - o) * i(l);
  };
}, gn = {
  linear: function(e, r, a) {
    return e + (r - e) * a;
  },
  // default easings
  ease: ze(0.25, 0.1, 0.25, 1),
  "ease-in": ze(0.42, 0, 1, 1),
  "ease-out": ze(0, 0, 0.58, 1),
  "ease-in-out": ze(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": ze(0.47, 0, 0.745, 0.715),
  "ease-out-sine": ze(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": ze(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": ze(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": ze(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": ze(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": ze(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": ze(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": ze(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": ze(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": ze(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": ze(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": ze(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": ze(0.23, 1, 0.32, 1),
  "ease-in-out-quint": ze(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": ze(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": ze(0.19, 1, 0.22, 1),
  "ease-in-out-expo": ze(1, 0, 0, 1),
  // circ
  "ease-in-circ": ze(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": ze(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": ze(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, r, a) {
    if (a === 0)
      return gn.linear;
    var n = Xp(e, r, a);
    return function(i, o, s) {
      return i + (o - i) * n(s);
    };
  },
  "cubic-bezier": ze
};
function Pu(t, e, r, a, n) {
  if (a === 1 || e === r)
    return r;
  var i = n(e, r, a);
  return t == null || ((t.roundValue || t.color) && (i = Math.round(i)), t.min !== void 0 && (i = Math.max(i, t.min)), t.max !== void 0 && (i = Math.min(i, t.max))), i;
}
function Ou(t, e) {
  return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
}
function Gr(t, e, r, a, n) {
  var i = n != null ? n.type : null;
  r < 0 ? r = 0 : r > 1 && (r = 1);
  var o = Ou(t, n), s = Ou(e, n);
  if (ne(o) && ne(s))
    return Pu(i, o, s, r, a);
  if (Ge(o) && Ge(s)) {
    for (var l = [], u = 0; u < s.length; u++) {
      var v = o[u], c = s[u];
      if (v != null && c != null) {
        var f = Pu(i, v, c, r, a);
        l.push(f);
      } else
        l.push(c);
    }
    return l;
  }
}
function $p(t, e, r, a) {
  var n = !a, i = t._private, o = e._private, s = o.easing, l = o.startTime, u = a ? t : t.cy(), v = u.style();
  if (!o.easingImpl)
    if (s == null)
      o.easingImpl = gn.linear;
    else {
      var c;
      if (de(s)) {
        var f = v.parse("transition-timing-function", s);
        c = f.value;
      } else
        c = s;
      var h, d;
      de(c) ? (h = c, d = []) : (h = c[1], d = c.slice(2).map(function(F) {
        return +F;
      })), d.length > 0 ? (h === "spring" && d.push(o.duration), o.easingImpl = gn[h].apply(null, d)) : o.easingImpl = gn[h];
    }
  var g = o.easingImpl, p;
  if (o.duration === 0 ? p = 1 : p = (r - l) / o.duration, o.applying && (p = o.progress), p < 0 ? p = 0 : p > 1 && (p = 1), o.delay == null) {
    var y = o.startPosition, b = o.position;
    if (b && n && !t.locked()) {
      var m = {};
      pa(y.x, b.x) && (m.x = Gr(y.x, b.x, p, g)), pa(y.y, b.y) && (m.y = Gr(y.y, b.y, p, g)), t.position(m);
    }
    var E = o.startPan, T = o.pan, S = i.pan, w = T != null && a;
    w && (pa(E.x, T.x) && (S.x = Gr(E.x, T.x, p, g)), pa(E.y, T.y) && (S.y = Gr(E.y, T.y, p, g)), t.emit("pan"));
    var x = o.startZoom, C = o.zoom, D = C != null && a;
    D && (pa(x, C) && (i.zoom = Ra(i.minZoom, Gr(x, C, p, g), i.maxZoom)), t.emit("zoom")), (w || D) && t.emit("viewport");
    var A = o.style;
    if (A && A.length > 0 && n) {
      for (var L = 0; L < A.length; L++) {
        var R = A[L], M = R.name, P = R, N = o.startStyle[M], O = v.properties[N.name], k = Gr(N, P, p, g, O);
        v.overrideBypass(t, M, k);
      }
      t.emit("style");
    }
  }
  return o.progress = p, p;
}
function pa(t, e) {
  return t == null || e == null ? !1 : ne(t) && ne(e) ? !0 : !!(t && e);
}
function Wp(t, e, r, a) {
  var n = e._private;
  n.started = !0, n.startTime = r - n.progress * n.duration;
}
function ku(t, e) {
  var r = e._private.aniEles, a = [];
  function n(v, c) {
    var f = v._private, h = f.animation.current, d = f.animation.queue, g = !1;
    if (h.length === 0) {
      var p = d.shift();
      p && h.push(p);
    }
    for (var y = function(S) {
      for (var w = S.length - 1; w >= 0; w--) {
        var x = S[w];
        x();
      }
      S.splice(0, S.length);
    }, b = h.length - 1; b >= 0; b--) {
      var m = h[b], E = m._private;
      if (E.stopped) {
        h.splice(b, 1), E.hooked = !1, E.playing = !1, E.started = !1, y(E.frames);
        continue;
      }
      !E.playing && !E.applying || (E.playing && E.applying && (E.applying = !1), E.started || Wp(v, m, t), $p(v, m, t, c), E.applying && (E.applying = !1), y(E.frames), E.step != null && E.step(t), m.completed() && (h.splice(b, 1), E.hooked = !1, E.playing = !1, E.started = !1, y(E.completes)), g = !0);
    }
    return !c && h.length === 0 && d.length === 0 && a.push(v), g;
  }
  for (var i = !1, o = 0; o < r.length; o++) {
    var s = r[o], l = n(s);
    i = i || l;
  }
  var u = n(e, !0);
  (i || u) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(a), e.emit("step");
}
var Kp = {
  // pull in animation functions
  animate: Be.animate(),
  animation: Be.animation(),
  animated: Be.animated(),
  clearQueue: Be.clearQueue(),
  delay: Be.delay(),
  delayAnimation: Be.delayAnimation(),
  stop: Be.stop(),
  addToAnimationPool: function(e) {
    var r = this;
    r.styleEnabled() && r._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = !1;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = !0, !e.styleEnabled())
      return;
    function r() {
      e._private.animationsRunning && Ln(function(i) {
        ku(i, e), r();
      });
    }
    var a = e.renderer();
    a && a.beforeRender ? a.beforeRender(function(i, o) {
      ku(o, e);
    }, a.beforeRenderPriorities.animations) : r();
  }
}, Zp = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, a) {
    var n = r.qualifier;
    return n != null ? e !== a.target && Fa(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, r) {
    r.cy = e, r.target = e;
  },
  callbackContext: function(e, r, a) {
    return r.qualifier != null ? a.target : e;
  }
}, on = function(e) {
  return de(e) ? new fr(e) : e;
}, pc = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new Zn(Zp, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, a) {
    return this.emitter().on(e, on(r), a), this;
  },
  removeListener: function(e, r, a) {
    return this.emitter().removeListener(e, on(r), a), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, r, a) {
    return this.emitter().one(e, on(r), a), this;
  },
  once: function(e, r, a) {
    return this.emitter().one(e, on(r), a), this;
  },
  emit: function(e, r) {
    return this.emitter().emit(e, r), this;
  },
  emitAndNotify: function(e, r) {
    return this.emit(e), this.notify(e, r), this;
  }
};
Be.eventAliasesOn(pc);
var Xo = {
  png: function(e) {
    var r = this._private.renderer;
    return e = e || {}, r.png(e);
  },
  jpg: function(e) {
    var r = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
  }
};
Xo.jpeg = Xo.jpg;
var pn = {
  layout: function(e) {
    var r = this;
    if (e == null) {
      qe("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      qe("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = r.extension("layout", a);
    if (n == null) {
      qe("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    de(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
    var o = new n(ye({}, e, {
      cy: r,
      eles: i
    }));
    return o;
  }
};
pn.createLayout = pn.makeLayout = pn.layout;
var Qp = {
  notify: function(e, r) {
    var a = this._private;
    if (this.batching()) {
      a.batchNotifications = a.batchNotifications || {};
      var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
      r != null && n.merge(r);
      return;
    }
    if (a.notificationsEnabled) {
      var i = this.renderer();
      this.destroyed() || !i || i.notify(e, r);
    }
  },
  notifications: function(e) {
    var r = this._private;
    return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(!1), e(), this.notifications(!0);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var r = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(a) {
        var n = e.batchNotifications[a];
        n.empty() ? r.notify(a) : r.notify(a, n);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  // for backwards compatibility
  batchData: function(e) {
    var r = this;
    return this.batch(function() {
      for (var a = Object.keys(e), n = 0; n < a.length; n++) {
        var i = a[n], o = e[i], s = r.getElementById(i);
        s.data(o);
      }
    });
  }
}, Jp = ct({
  hideEdgesOnViewport: !1,
  textureOnViewport: !1,
  motionBlur: !1,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: !1,
  showFps: !1,
  // webgl options
  webgl: !1,
  webglDebug: !1,
  webglDebugShowAtlases: !1,
  // defaults good for mobile
  webglTexSize: 2048,
  webglTexRows: 36,
  webglTexRowsNodes: 18,
  webglBatchSize: 2048,
  webglTexPerBatch: 14,
  webglBgColor: [255, 255, 255]
}), $o = {
  renderTo: function(e, r, a, n) {
    var i = this._private.renderer;
    return i.renderTo(e, r, a, n), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var r = this, a = r.extension("renderer", e.name);
    if (a == null) {
      qe("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Fe("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = Jp(e);
    n.cy = r, r._private.renderer = new a(n), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var r = e.container();
    if (r)
      for (r._cyreg = null; r.childNodes.length > 0; )
        r.removeChild(r.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(a) {
      var n = a._private;
      n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
$o.invalidateDimensions = $o.resize;
var yn = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, r) {
    return de(e) ? this.$(e) : Dt(e) ? e.collection() : Ge(e) ? (r || (r = {}), new vt(this, e, r.unique, r.removed)) : new vt(this);
  },
  nodes: function(e) {
    var r = this.$(function(a) {
      return a.isNode();
    });
    return e ? r.filter(e) : r;
  },
  edges: function(e) {
    var r = this.$(function(a) {
      return a.isEdge();
    });
    return e ? r.filter(e) : r;
  },
  // search the graph like jQuery
  $: function(e) {
    var r = this._private.elements;
    return e ? r.filter(e) : r.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
yn.elements = yn.filter = yn.$;
var st = {}, Ta = "t", jp = "f";
st.apply = function(t) {
  for (var e = this, r = e._private, a = r.cy, n = a.collection(), i = 0; i < t.length; i++) {
    var o = t[i], s = e.getContextMeta(o);
    if (!s.empty) {
      var l = e.getContextStyle(s), u = e.applyContextStyle(s, l, o);
      o._private.appliedInitStyle ? e.updateTransitions(o, u.diffProps) : o._private.appliedInitStyle = !0;
      var v = e.updateStyleHints(o);
      v && n.push(o);
    }
  }
  return n;
};
st.getPropertiesDiff = function(t, e) {
  var r = this, a = r._private.propDiffs = r._private.propDiffs || {}, n = t + "-" + e, i = a[n];
  if (i)
    return i;
  for (var o = [], s = {}, l = 0; l < r.length; l++) {
    var u = r[l], v = t[l] === Ta, c = e[l] === Ta, f = v !== c, h = u.mappedProperties.length > 0;
    if (f || c && h) {
      var d = void 0;
      f && h || f ? d = u.properties : h && (d = u.mappedProperties);
      for (var g = 0; g < d.length; g++) {
        for (var p = d[g], y = p.name, b = !1, m = l + 1; m < r.length; m++) {
          var E = r[m], T = e[m] === Ta;
          if (T && (b = E.properties[p.name] != null, b))
            break;
        }
        !s[y] && !b && (s[y] = !0, o.push(y));
      }
    }
  }
  return a[n] = o, o;
};
st.getContextMeta = function(t) {
  for (var e = this, r = "", a, n = t._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var o = e[i], s = o.selector && o.selector.matches(t);
    s ? r += Ta : r += jp;
  }
  return a = e.getPropertiesDiff(n, r), t._private.styleCxtKey = r, {
    key: r,
    diffPropNames: a,
    empty: a.length === 0
  };
};
st.getContextStyle = function(t) {
  var e = t.key, r = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e])
    return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < r.length; i++) {
    var o = r[i], s = e[i] === Ta;
    if (s)
      for (var l = 0; l < o.properties.length; l++) {
        var u = o.properties[l];
        n[u.name] = u;
      }
  }
  return a[e] = n, n;
};
st.applyContextStyle = function(t, e, r) {
  for (var a = this, n = t.diffPropNames, i = {}, o = a.types, s = 0; s < n.length; s++) {
    var l = n[s], u = e[l], v = r.pstyle(l);
    if (!u)
      if (v)
        v.bypass ? u = {
          name: l,
          deleteBypassed: !0
        } : u = {
          name: l,
          delete: !0
        };
      else continue;
    if (v !== u) {
      if (u.mapped === o.fn && v != null && v.mapping != null && v.mapping.value === u.value) {
        var c = v.mapping, f = c.fnValue = u.value(r);
        if (f === c.prevFnValue)
          continue;
      }
      var h = i[l] = {
        prev: v
      };
      a.applyParsedProperty(r, u), h.next = r.pstyle(l), h.next && h.next.bypass && (h.next = h.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
st.updateStyleHints = function(t) {
  var e = t._private, r = this, a = r.propertyGroupNames, n = r.propertyGroupKeys, i = function(Y, Q, re) {
    return r.getPropertiesHash(Y, Q, re);
  }, o = e.styleKey;
  if (t.removed())
    return !1;
  var s = e.group === "nodes", l = t._private.style;
  a = Object.keys(l);
  for (var u = 0; u < n.length; u++) {
    var v = n[u];
    e.styleKeys[v] = [Sr, Hr];
  }
  for (var c = function(Y, Q) {
    return e.styleKeys[Q][0] = Sa(Y, e.styleKeys[Q][0]);
  }, f = function(Y, Q) {
    return e.styleKeys[Q][1] = Aa(Y, e.styleKeys[Q][1]);
  }, h = function(Y, Q) {
    c(Y, Q), f(Y, Q);
  }, d = function(Y, Q) {
    for (var re = 0; re < Y.length; re++) {
      var ue = Y.charCodeAt(re);
      c(ue, Q), f(ue, Q);
    }
  }, g = 2e9, p = function(Y) {
    return -128 < Y && Y < 128 && Math.floor(Y) !== Y ? g - (Y * 1024 | 0) : Y;
  }, y = 0; y < a.length; y++) {
    var b = a[y], m = l[b];
    if (m != null) {
      var E = this.properties[b], T = E.type, S = E.groupKey, w = void 0;
      E.hashOverride != null ? w = E.hashOverride(t, m) : m.pfValue != null && (w = m.pfValue);
      var x = E.enums == null ? m.value : null, C = w != null, D = x != null, A = C || D, L = m.units;
      if (T.number && A && !T.multiple) {
        var R = C ? w : x;
        h(p(R), S), !C && L != null && d(L, S);
      } else
        d(m.strValue, S);
    }
  }
  for (var M = [Sr, Hr], P = 0; P < n.length; P++) {
    var N = n[P], O = e.styleKeys[N];
    M[0] = Sa(O[0], M[0]), M[1] = Aa(O[1], M[1]);
  }
  e.styleKey = dh(M[0], M[1]);
  var k = e.styleKeys;
  e.labelDimsKey = tr(k.labelDimensions);
  var F = i(t, ["label"], k.labelDimensions);
  if (e.labelKey = tr(F), e.labelStyleKey = tr(Qa(k.commonLabel, F)), !s) {
    var _ = i(t, ["source-label"], k.labelDimensions);
    e.sourceLabelKey = tr(_), e.sourceLabelStyleKey = tr(Qa(k.commonLabel, _));
    var B = i(t, ["target-label"], k.labelDimensions);
    e.targetLabelKey = tr(B), e.targetLabelStyleKey = tr(Qa(k.commonLabel, B));
  }
  if (s) {
    var G = e.styleKeys, H = G.nodeBody, X = G.nodeBorder, $ = G.nodeOutline, K = G.backgroundImage, ee = G.compound, ae = G.pie, Z = G.stripe, V = [H, X, $, K, ee, ae, Z].filter(function(q) {
      return q != null;
    }).reduce(Qa, [Sr, Hr]);
    e.nodeKey = tr(V), e.hasPie = ae != null && ae[0] !== Sr && ae[1] !== Hr, e.hasStripe = Z != null && Z[0] !== Sr && Z[1] !== Hr;
  }
  return o !== e.styleKey;
};
st.clearStyleHints = function(t) {
  var e = t._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null, e.hasStripe = null;
};
st.applyParsedProperty = function(t, e) {
  var r = this, a = e, n = t._private.style, i, o = r.types, s = r.properties[a.name].type, l = a.bypass, u = n[a.name], v = u && u.bypass, c = t._private, f = "mapping", h = function(H) {
    return H == null ? null : H.pfValue != null ? H.pfValue : H.value;
  }, d = function() {
    var H = h(u), X = h(a);
    r.checkTriggers(t, a.name, H, X);
  };
  if (e.name === "curve-style" && t.isEdge() && // loops must be bundled beziers
  (e.value !== "bezier" && t.isLoop() || // edges connected to compound nodes can not be haystacks
  e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (a = e = this.parse(e.name, "bezier", l)), a.delete)
    return n[a.name] = void 0, d(), !0;
  if (a.deleteBypassed)
    return u ? u.bypass ? (u.bypassed = void 0, d(), !0) : !1 : (d(), !0);
  if (a.deleteBypass)
    return u ? u.bypass ? (n[a.name] = u.bypassed, d(), !0) : !1 : (d(), !0);
  var g = function() {
    Fe("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  };
  switch (a.mapped) {
    // flatten the property if mapped
    case o.mapData: {
      for (var p = a.field.split("."), y = c.data, b = 0; b < p.length && y; b++) {
        var m = p[b];
        y = y[m];
      }
      if (y == null)
        return g(), !1;
      var E;
      if (ne(y)) {
        var T = a.fieldMax - a.fieldMin;
        T === 0 ? E = 0 : E = (y - a.fieldMin) / T;
      } else
        return Fe("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + y + "` for `" + t.id() + "` is non-numeric)"), !1;
      if (E < 0 ? E = 0 : E > 1 && (E = 1), s.color) {
        var S = a.valueMin[0], w = a.valueMax[0], x = a.valueMin[1], C = a.valueMax[1], D = a.valueMin[2], A = a.valueMax[2], L = a.valueMin[3] == null ? 1 : a.valueMin[3], R = a.valueMax[3] == null ? 1 : a.valueMax[3], M = [Math.round(S + (w - S) * E), Math.round(x + (C - x) * E), Math.round(D + (A - D) * E), Math.round(L + (R - L) * E)];
        i = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: a.bypass,
          // we're a bypass if the mapping property is a bypass
          name: a.name,
          value: M,
          strValue: "rgb(" + M[0] + ", " + M[1] + ", " + M[2] + ")"
        };
      } else if (s.number) {
        var P = a.valueMin + (a.valueMax - a.valueMin) * E;
        i = this.parse(a.name, P, a.bypass, f);
      } else
        return !1;
      if (!i)
        return g(), !1;
      i.mapping = a, a = i;
      break;
    }
    // direct mapping
    case o.data: {
      for (var N = a.field.split("."), O = c.data, k = 0; k < N.length && O; k++) {
        var F = N[k];
        O = O[F];
      }
      if (O != null && (i = this.parse(a.name, O, a.bypass, f)), !i)
        return g(), !1;
      i.mapping = a, a = i;
      break;
    }
    case o.fn: {
      var _ = a.value, B = a.fnValue != null ? a.fnValue : _(t);
      if (a.prevFnValue = B, B == null)
        return Fe("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + t.id() + "` is null)"), !1;
      if (i = this.parse(a.name, B, a.bypass, f), !i)
        return Fe("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + t.id() + "` is invalid)"), !1;
      i.mapping = qt(a), a = i;
      break;
    }
    case void 0:
      break;
    // just set the property
    default:
      return !1;
  }
  return l ? (v ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : v ? u.bypassed = a : n[a.name] = a, d(), !0;
};
st.cleanElements = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
      a._private.style = {};
    else
      for (var n = a._private.style, i = Object.keys(n), o = 0; o < i.length; o++) {
        var s = i[o], l = n[s];
        l != null && (l.bypass ? l.bypassed = null : n[s] = null);
      }
  }
};
st.update = function() {
  var t = this._private.cy, e = t.mutableElements();
  e.updateStyle();
};
st.updateTransitions = function(t, e) {
  var r = this, a = t._private, n = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, o = t.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var s = {}, l = !1, u = 0; u < n.length; u++) {
      var v = n[u], c = t.pstyle(v), f = e[v];
      if (f) {
        var h = f.prev, d = h, g = f.next != null ? f.next : c, p = !1, y = void 0, b = 1e-6;
        d && (ne(d.pfValue) && ne(g.pfValue) ? (p = g.pfValue - d.pfValue, y = d.pfValue + b * p) : ne(d.value) && ne(g.value) ? (p = g.value - d.value, y = d.value + b * p) : Ge(d.value) && Ge(g.value) && (p = d.value[0] !== g.value[0] || d.value[1] !== g.value[1] || d.value[2] !== g.value[2], y = d.strValue), p && (s[v] = g.strValue, this.applyBypass(t, v, y), l = !0));
      }
    }
    if (!l)
      return;
    a.transitioning = !0, new ia(function(m) {
      o > 0 ? t.delayAnimation(o).play().promise().then(m) : m();
    }).then(function() {
      return t.animation({
        style: s,
        duration: i,
        easing: t.pstyle("transition-timing-function").value,
        queue: !1
      }).play().promise();
    }).then(function() {
      r.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1;
    });
  } else a.transitioning && (this.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1);
};
st.checkTrigger = function(t, e, r, a, n, i) {
  var o = this.properties[e], s = n(o);
  t.removed() || s != null && s(r, a, t) && i(o);
};
st.checkZOrderTrigger = function(t, e, r, a) {
  var n = this;
  this.checkTrigger(t, e, r, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", t);
  });
};
st.checkBoundsTrigger = function(t, e, r, a) {
  this.checkTrigger(t, e, r, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache();
  });
};
st.checkConnectedEdgesBoundsTrigger = function(t, e, r, a) {
  this.checkTrigger(t, e, r, a, function(n) {
    return n.triggersBoundsOfConnectedEdges;
  }, function(n) {
    t.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
st.checkParallelEdgesBoundsTrigger = function(t, e, r, a) {
  this.checkTrigger(t, e, r, a, function(n) {
    return n.triggersBoundsOfParallelEdges;
  }, function(n) {
    t.parallelEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
st.checkTriggers = function(t, e, r, a) {
  t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, a), this.checkBoundsTrigger(t, e, r, a), this.checkConnectedEdgesBoundsTrigger(t, e, r, a), this.checkParallelEdgesBoundsTrigger(t, e, r, a);
};
var Ya = {};
Ya.applyBypass = function(t, e, r, a) {
  var n = this, i = [], o = !0;
  if (e === "*" || e === "**") {
    if (r !== void 0)
      for (var s = 0; s < n.properties.length; s++) {
        var l = n.properties[s], u = l.name, v = this.parse(u, r, !0);
        v && i.push(v);
      }
  } else if (de(e)) {
    var c = this.parse(e, r, !0);
    c && i.push(c);
  } else if (Pe(e)) {
    var f = e;
    a = r;
    for (var h = Object.keys(f), d = 0; d < h.length; d++) {
      var g = h[d], p = f[g];
      if (p === void 0 && (p = f[zn(g)]), p !== void 0) {
        var y = this.parse(g, p, !0);
        y && i.push(y);
      }
    }
  } else
    return !1;
  if (i.length === 0)
    return !1;
  for (var b = !1, m = 0; m < t.length; m++) {
    for (var E = t[m], T = {}, S = void 0, w = 0; w < i.length; w++) {
      var x = i[w];
      if (a) {
        var C = E.pstyle(x.name);
        S = T[x.name] = {
          prev: C
        };
      }
      b = this.applyParsedProperty(E, qt(x)) || b, a && (S.next = E.pstyle(x.name));
    }
    b && this.updateStyleHints(E), a && this.updateTransitions(E, T, o);
  }
  return b;
};
Ya.overrideBypass = function(t, e, r) {
  e = ss(e);
  for (var a = 0; a < t.length; a++) {
    var n = t[a], i = n._private.style[e], o = this.properties[e].type, s = o.color, l = o.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), s ? i.strValue = "rgb(" + r.join(",") + ")" : l ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(n)), this.checkTriggers(n, e, u, r);
  }
};
Ya.removeAllBypasses = function(t, e) {
  return this.removeBypasses(t, this.propertyNames, e);
};
Ya.removeBypasses = function(t, e, r) {
  for (var a = !0, n = 0; n < t.length; n++) {
    for (var i = t[n], o = {}, s = 0; s < e.length; s++) {
      var l = e[s], u = this.properties[l], v = i.pstyle(u.name);
      if (!(!v || !v.bypass)) {
        var c = "", f = this.parse(l, c, !0), h = o[u.name] = {
          prev: v
        };
        this.applyParsedProperty(i, f), h.next = i.pstyle(u.name);
      }
    }
    this.updateStyleHints(i), r && this.updateTransitions(i, o, a);
  }
};
var xs = {};
xs.getEmSizeInPixels = function() {
  var t = this.containerCss("font-size");
  return t != null ? parseFloat(t) : 1;
};
xs.containerCss = function(t) {
  var e = this._private.cy, r = e.container(), a = e.window();
  if (a && r && a.getComputedStyle)
    return a.getComputedStyle(r).getPropertyValue(t);
};
var Yt = {};
Yt.getRenderedStyle = function(t, e) {
  return e ? this.getStylePropertyValue(t, e, !0) : this.getRawStyle(t, !0);
};
Yt.getRawStyle = function(t, e) {
  var r = this;
  if (t = t[0], t) {
    for (var a = {}, n = 0; n < r.properties.length; n++) {
      var i = r.properties[n], o = r.getStylePropertyValue(t, i.name, e);
      o != null && (a[i.name] = o, a[zn(i.name)] = o);
    }
    return a;
  }
};
Yt.getIndexedStyle = function(t, e, r, a) {
  var n = t.pstyle(e)[r][a];
  return n ?? t.cy().style().getDefaultProperty(e)[r][0];
};
Yt.getStylePropertyValue = function(t, e, r) {
  var a = this;
  if (t = t[0], t) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, o = t.pstyle(n.name);
    if (o) {
      var s = o.value, l = o.units, u = o.strValue;
      if (r && i.number && s != null && ne(s)) {
        var v = t.cy().zoom(), c = function(p) {
          return p * v;
        }, f = function(p, y) {
          return c(p) + y;
        }, h = Ge(s), d = h ? l.every(function(g) {
          return g != null;
        }) : l != null;
        return d ? h ? s.map(function(g, p) {
          return f(g, l[p]);
        }).join(" ") : f(s, l) : h ? s.map(function(g) {
          return de(g) ? g : "" + c(g);
        }).join(" ") : "" + c(s);
      } else if (u != null)
        return u;
    }
    return null;
  }
};
Yt.getAnimationStartStyle = function(t, e) {
  for (var r = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, o = t.pstyle(i);
    o !== void 0 && (Pe(o) ? o = this.parse(i, o.strValue) : o = this.parse(i, o)), o && (r[i] = o);
  }
  return r;
};
Yt.getPropsList = function(t) {
  var e = this, r = [], a = t, n = e.properties;
  if (a)
    for (var i = Object.keys(a), o = 0; o < i.length; o++) {
      var s = i[o], l = a[s], u = n[s] || n[ss(s)], v = this.parse(u.name, l);
      v && r.push(v);
    }
  return r;
};
Yt.getNonDefaultPropertiesHash = function(t, e, r) {
  var a = r.slice(), n, i, o, s, l, u;
  for (l = 0; l < e.length; l++)
    if (n = e[l], i = t.pstyle(n, !1), i != null)
      if (i.pfValue != null)
        a[0] = Sa(s, a[0]), a[1] = Aa(s, a[1]);
      else
        for (o = i.strValue, u = 0; u < o.length; u++)
          s = o.charCodeAt(u), a[0] = Sa(s, a[0]), a[1] = Aa(s, a[1]);
  return a;
};
Yt.getPropertiesHash = Yt.getNonDefaultPropertiesHash;
var jn = {};
jn.appendFromJson = function(t) {
  for (var e = this, r = 0; r < t.length; r++) {
    var a = t[r], n = a.selector, i = a.style || a.css, o = Object.keys(i);
    e.selector(n);
    for (var s = 0; s < o.length; s++) {
      var l = o[s], u = i[l];
      e.css(l, u);
    }
  }
  return e;
};
jn.fromJson = function(t) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(t), e;
};
jn.json = function() {
  for (var t = [], e = this.defaultLength; e < this.length; e++) {
    for (var r = this[e], a = r.selector, n = r.properties, i = {}, o = 0; o < n.length; o++) {
      var s = n[o];
      i[s.name] = s.strValue;
    }
    t.push({
      selector: a ? a.toString() : "core",
      style: i
    });
  }
  return t;
};
var Ts = {};
Ts.appendFromString = function(t) {
  var e = this, r = this, a = "" + t, n, i, o;
  a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function s() {
    a.length > n.length ? a = a.substr(n.length) : a = "";
  }
  function l() {
    i.length > o.length ? i = i.substr(o.length) : i = "";
  }
  for (; ; ) {
    var u = a.match(/^\s*$/);
    if (u)
      break;
    var v = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!v) {
      Fe("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = v[0];
    var c = v[1];
    if (c !== "core") {
      var f = new fr(c);
      if (f.invalid) {
        Fe("Skipping parsing of block: Invalid selector found in string stylesheet: " + c), s();
        continue;
      }
    }
    var h = v[2], d = !1;
    i = h;
    for (var g = []; ; ) {
      var p = i.match(/^\s*$/);
      if (p)
        break;
      var y = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!y) {
        Fe("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + h), d = !0;
        break;
      }
      o = y[0];
      var b = y[1], m = y[2], E = e.properties[b];
      if (!E) {
        Fe("Skipping property: Invalid property name in: " + o), l();
        continue;
      }
      var T = r.parse(b, m);
      if (!T) {
        Fe("Skipping property: Invalid property definition in: " + o), l();
        continue;
      }
      g.push({
        name: b,
        val: m
      }), l();
    }
    if (d) {
      s();
      break;
    }
    r.selector(c);
    for (var S = 0; S < g.length; S++) {
      var w = g[S];
      r.css(w.name, w.val);
    }
    s();
  }
  return r;
};
Ts.fromString = function(t) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(t), e;
};
var Ze = {};
(function() {
  var t = tt, e = Xf, r = Wf, a = Kf, n = Zf, i = function(q) {
    return "^" + q + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, o = function(q) {
    var Y = t + "|\\w+|" + e + "|" + r + "|" + a + "|" + n;
    return "^" + q + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + Y + ")\\s*\\,\\s*(" + Y + ")\\)$";
  }, s = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  Ze.types = {
    time: {
      number: !0,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: !0
    },
    zeroOneNumber: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0
    },
    zeroOneNumbers: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0,
      multiple: !0
    },
    nOneOneNumber: {
      number: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    nonNegativeInt: {
      number: !0,
      min: 0,
      integer: !0,
      unitless: !0
    },
    nonNegativeNumber: {
      number: !0,
      min: 0,
      unitless: !0
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: !0,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: !0,
      unitless: !0
    },
    numbers: {
      number: !0,
      unitless: !0,
      multiple: !0
    },
    positiveNumber: {
      number: !0,
      unitless: !0,
      min: 0,
      strictMin: !0
    },
    size: {
      number: !0,
      min: 0
    },
    bidirectionalSize: {
      number: !0
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: !0,
      allowPercent: !0
    },
    // allows negative
    bidirectionalSizes: {
      number: !0,
      multiple: !0
    },
    // allows negative
    sizeMaybePercent: {
      number: !0,
      min: 0,
      allowPercent: !0
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    axisDirectionExplicit: {
      enums: ["leftward", "rightward", "upward", "downward"]
    },
    axisDirectionPrimary: {
      enums: ["horizontal", "vertical"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: !0,
      min: 0,
      allowPercent: !0,
      enums: ["auto"],
      multiple: !0
    },
    bgPos: {
      number: !0,
      allowPercent: !0,
      multiple: !0
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: !0
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: !0
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: !0
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials", "null"],
      multiple: !0
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: !0
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: !0
    },
    boxSelection: {
      enums: ["contain", "overlap", "none"]
    },
    color: {
      color: !0
    },
    colors: {
      color: !0,
      multiple: !0
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: !0
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    linePosition: {
      enums: ["center", "inside", "outside"]
    },
    lineJoin: {
      enums: ["round", "bevel", "miter"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
    },
    radiusType: {
      enums: ["arc-radius", "influence-radius"],
      multiple: !0
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "circle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    cornerRadius: {
      number: !0,
      min: 0,
      units: "px|em",
      implicitUnits: "px",
      enums: ["auto"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    arrowWidth: {
      number: !0,
      units: "%|px|em",
      implicitUnits: "px",
      enums: ["match-line"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "top-inside", "center", "bottom", "bottom-inside"]
    },
    halign: {
      enums: ["left", "left-inside", "center", "right", "right-inside"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    textMetrics: {
      enums: ["font", "glyph"]
    },
    text: {
      string: !0
    },
    data: {
      mapping: !0,
      regex: i("data")
    },
    layoutData: {
      mapping: !0,
      regex: i("layoutData")
    },
    scratch: {
      mapping: !0,
      regex: i("scratch")
    },
    mapData: {
      mapping: !0,
      regex: o("mapData")
    },
    mapLayoutData: {
      mapping: !0,
      regex: o("mapLayoutData")
    },
    mapScratch: {
      mapping: !0,
      regex: o("mapScratch")
    },
    fn: {
      mapping: !0,
      fn: !0
    },
    url: {
      regexes: s,
      singleRegexMatchValue: !0
    },
    urls: {
      regexes: s,
      singleRegexMatchValue: !0,
      multiple: !0
    },
    propList: {
      propList: !0
    },
    angle: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: !0,
      multiple: !0,
      evenMultiple: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    edgeDistances: {
      enums: ["intersection", "node-position", "endpoints"]
    },
    edgeEndpoint: {
      number: !0,
      multiple: !0,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: !0,
      validate: function(q, Y) {
        switch (q.length) {
          case 2:
            return Y[0] !== "deg" && Y[0] !== "rad" && Y[1] !== "deg" && Y[1] !== "rad";
          case 1:
            return de(q[0]) || Y[0] === "deg" || Y[0] === "rad";
          default:
            return !1;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: !0,
      multiple: !0,
      min: 0,
      validate: function(q) {
        var Y = q.length;
        return Y === 1 || Y === 2 || Y === 4;
      }
    }
  };
  var l = {
    zeroNonZero: function(q, Y) {
      return (q == null || Y == null) && q !== Y || q == 0 && Y != 0 ? !0 : q != 0 && Y == 0;
    },
    any: function(q, Y) {
      return q != Y;
    },
    emptyNonEmpty: function(q, Y) {
      var Q = ur(q), re = ur(Y);
      return Q && !re || !Q && re;
    }
  }, u = Ze.types, v = [{
    name: "label",
    type: u.text,
    triggersBounds: l.any,
    triggersZOrder: l.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }], c = [{
    name: "source-label",
    type: u.text,
    triggersBounds: l.any
  }, {
    name: "source-text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "source-text-offset",
    type: u.size,
    triggersBounds: l.any
  }], f = [{
    name: "target-label",
    type: u.text,
    triggersBounds: l.any
  }, {
    name: "target-text-rotation",
    type: u.textRotation,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-margin-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "target-text-offset",
    type: u.size,
    triggersBounds: l.any
  }], h = [{
    name: "font-family",
    type: u.fontFamily,
    triggersBounds: l.any
  }, {
    name: "font-style",
    type: u.fontStyle,
    triggersBounds: l.any
  }, {
    name: "font-weight",
    type: u.fontWeight,
    triggersBounds: l.any
  }, {
    name: "font-size",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-transform",
    type: u.textTransform,
    triggersBounds: l.any
  }, {
    name: "text-wrap",
    type: u.textWrap,
    triggersBounds: l.any
  }, {
    name: "text-overflow-wrap",
    type: u.textOverflowWrap,
    triggersBounds: l.any
  }, {
    name: "text-max-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-outline-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "line-height",
    type: u.positiveNumber,
    triggersBounds: l.any
  }], d = [{
    name: "text-valign",
    type: u.valign,
    triggersBounds: l.any
  }, {
    name: "text-halign",
    type: u.halign,
    triggersBounds: l.any
  }, {
    name: "color",
    type: u.color
  }, {
    name: "text-outline-color",
    type: u.color
  }, {
    name: "text-outline-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-background-color",
    type: u.color
  }, {
    name: "text-background-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-border-opacity",
    type: u.zeroOneNumber
  }, {
    name: "text-border-color",
    type: u.color
  }, {
    name: "text-border-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "text-border-style",
    type: u.borderStyle,
    triggersBounds: l.any
  }, {
    name: "text-background-shape",
    type: u.textBackgroundShape,
    triggersBounds: l.any
  }, {
    name: "text-justification",
    type: u.justification
  }, {
    name: "text-metrics",
    type: u.textMetrics
  }, {
    name: "box-select-labels",
    type: u.bool,
    triggersBounds: l.any
  }], g = [{
    name: "events",
    type: u.bool,
    triggersZOrder: l.any
  }, {
    name: "text-events",
    type: u.bool,
    triggersZOrder: l.any
  }, {
    name: "box-selection",
    type: u.boxSelection,
    triggersZOrder: l.any
  }], p = [{
    name: "display",
    type: u.display,
    triggersZOrder: l.any,
    triggersBounds: l.any,
    triggersBoundsOfConnectedEdges: l.any,
    triggersBoundsOfParallelEdges: function(q, Y, Q) {
      return q === Y ? !1 : Q.pstyle("curve-style").value === "bezier";
    }
  }, {
    name: "visibility",
    type: u.visibility,
    triggersZOrder: l.any
  }, {
    name: "opacity",
    type: u.zeroOneNumber,
    triggersZOrder: l.zeroNonZero
  }, {
    name: "text-opacity",
    type: u.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: u.size
  }, {
    name: "z-compound-depth",
    type: u.zCompoundDepth,
    triggersZOrder: l.any
  }, {
    name: "z-index-compare",
    type: u.zIndexCompare,
    triggersZOrder: l.any
  }, {
    name: "z-index",
    type: u.number,
    triggersZOrder: l.any
  }], y = [{
    name: "overlay-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "overlay-color",
    type: u.color
  }, {
    name: "overlay-opacity",
    type: u.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "overlay-shape",
    type: u.overlayShape,
    triggersBounds: l.any
  }, {
    name: "overlay-corner-radius",
    type: u.cornerRadius
  }], b = [{
    name: "underlay-padding",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "underlay-color",
    type: u.color
  }, {
    name: "underlay-opacity",
    type: u.zeroOneNumber,
    triggersBounds: l.zeroNonZero
  }, {
    name: "underlay-shape",
    type: u.overlayShape,
    triggersBounds: l.any
  }, {
    name: "underlay-corner-radius",
    type: u.cornerRadius
  }], m = [{
    name: "transition-property",
    type: u.propList
  }, {
    name: "transition-duration",
    type: u.time
  }, {
    name: "transition-delay",
    type: u.time
  }, {
    name: "transition-timing-function",
    type: u.easing
  }], E = function(q, Y) {
    return Y.value === "label" ? -q.poolIndex() : Y.pfValue;
  }, T = [{
    name: "height",
    type: u.nodeSize,
    triggersBounds: l.any,
    hashOverride: E
  }, {
    name: "width",
    type: u.nodeSize,
    triggersBounds: l.any,
    hashOverride: E
  }, {
    name: "shape",
    type: u.nodeShape,
    triggersBounds: l.any
  }, {
    name: "shape-polygon-points",
    type: u.polygonPointList,
    triggersBounds: l.any
  }, {
    name: "corner-radius",
    type: u.cornerRadius
  }, {
    name: "background-color",
    type: u.color
  }, {
    name: "background-fill",
    type: u.fill
  }, {
    name: "background-opacity",
    type: u.zeroOneNumber
  }, {
    name: "background-blacken",
    type: u.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: u.colors
  }, {
    name: "background-gradient-stop-positions",
    type: u.percentages
  }, {
    name: "background-gradient-direction",
    type: u.gradientDirection
  }, {
    name: "padding",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "padding-relative-to",
    type: u.paddingRelativeTo,
    triggersBounds: l.any
  }, {
    name: "bounds-expansion",
    type: u.boundsExpansion,
    triggersBounds: l.any
  }], S = [{
    name: "border-color",
    type: u.color
  }, {
    name: "border-opacity",
    type: u.zeroOneNumber
  }, {
    name: "border-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "border-style",
    type: u.borderStyle
  }, {
    name: "border-cap",
    type: u.lineCap
  }, {
    name: "border-join",
    type: u.lineJoin
  }, {
    name: "border-dash-pattern",
    type: u.numbers
  }, {
    name: "border-dash-offset",
    type: u.number
  }, {
    name: "border-position",
    type: u.linePosition
  }], w = [{
    name: "outline-color",
    type: u.color
  }, {
    name: "outline-opacity",
    type: u.zeroOneNumber
  }, {
    name: "outline-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "outline-style",
    type: u.borderStyle
  }, {
    name: "outline-offset",
    type: u.size,
    triggersBounds: l.any
  }], x = [{
    name: "background-image",
    type: u.urls
  }, {
    name: "background-image-crossorigin",
    type: u.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: u.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: u.bgContainment
  }, {
    name: "background-image-smoothing",
    type: u.bools
  }, {
    name: "background-position-x",
    type: u.bgPos
  }, {
    name: "background-position-y",
    type: u.bgPos
  }, {
    name: "background-width-relative-to",
    type: u.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: u.bgRelativeTo
  }, {
    name: "background-repeat",
    type: u.bgRepeat
  }, {
    name: "background-fit",
    type: u.bgFit
  }, {
    name: "background-clip",
    type: u.bgClip
  }, {
    name: "background-width",
    type: u.bgWH
  }, {
    name: "background-height",
    type: u.bgWH
  }, {
    name: "background-offset-x",
    type: u.bgPos
  }, {
    name: "background-offset-y",
    type: u.bgPos
  }], C = [{
    name: "position",
    type: u.position,
    triggersBounds: l.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: u.compoundIncludeLabels,
    triggersBounds: l.any
  }, {
    name: "min-width",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-left",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-width-bias-right",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-top",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "min-height-bias-bottom",
    type: u.sizeMaybePercent,
    triggersBounds: l.any
  }], D = [{
    name: "line-style",
    type: u.lineStyle
  }, {
    name: "line-color",
    type: u.color
  }, {
    name: "line-fill",
    type: u.fill
  }, {
    name: "line-cap",
    type: u.lineCap
  }, {
    name: "line-opacity",
    type: u.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: u.numbers
  }, {
    name: "line-dash-offset",
    type: u.number
  }, {
    name: "line-outline-width",
    type: u.size
  }, {
    name: "line-outline-color",
    type: u.color
  }, {
    name: "line-gradient-stop-colors",
    type: u.colors
  }, {
    name: "line-gradient-stop-positions",
    type: u.percentages
  }, {
    name: "curve-style",
    type: u.curveStyle,
    triggersBounds: l.any,
    triggersBoundsOfParallelEdges: function(q, Y) {
      return q === Y ? !1 : q === "bezier" || // remove from bundle
      Y === "bezier";
    }
  }, {
    name: "haystack-radius",
    type: u.zeroOneNumber,
    triggersBounds: l.any
  }, {
    name: "source-endpoint",
    type: u.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "target-endpoint",
    type: u.edgeEndpoint,
    triggersBounds: l.any
  }, {
    name: "control-point-step-size",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "control-point-distances",
    type: u.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "control-point-weights",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "segment-distances",
    type: u.bidirectionalSizes,
    triggersBounds: l.any
  }, {
    name: "segment-weights",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "segment-radii",
    type: u.numbers,
    triggersBounds: l.any
  }, {
    name: "radius-type",
    type: u.radiusType,
    triggersBounds: l.any
  }, {
    name: "taxi-turn",
    type: u.bidirectionalSizeMaybePercent,
    triggersBounds: l.any
  }, {
    name: "taxi-turn-min-distance",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "taxi-direction",
    type: u.axisDirection,
    triggersBounds: l.any
  }, {
    name: "taxi-radius",
    type: u.number,
    triggersBounds: l.any
  }, {
    name: "edge-distances",
    type: u.edgeDistances,
    triggersBounds: l.any
  }, {
    name: "arrow-scale",
    type: u.positiveNumber,
    triggersBounds: l.any
  }, {
    name: "loop-direction",
    type: u.angle,
    triggersBounds: l.any
  }, {
    name: "loop-sweep",
    type: u.angle,
    triggersBounds: l.any
  }, {
    name: "source-distance-from-node",
    type: u.size,
    triggersBounds: l.any
  }, {
    name: "target-distance-from-node",
    type: u.size,
    triggersBounds: l.any
  }], A = [{
    name: "ghost",
    type: u.bool,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-x",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-offset-y",
    type: u.bidirectionalSize,
    triggersBounds: l.any
  }, {
    name: "ghost-opacity",
    type: u.zeroOneNumber
  }], L = [{
    name: "selection-box-color",
    type: u.color
  }, {
    name: "selection-box-opacity",
    type: u.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: u.color
  }, {
    name: "selection-box-border-width",
    type: u.size
  }, {
    name: "active-bg-color",
    type: u.color
  }, {
    name: "active-bg-opacity",
    type: u.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: u.size
  }, {
    name: "outside-texture-bg-color",
    type: u.color
  }, {
    name: "outside-texture-bg-opacity",
    type: u.zeroOneNumber
  }], R = [];
  Ze.pieBackgroundN = 16, R.push({
    name: "pie-size",
    type: u.sizeMaybePercent
  }), R.push({
    name: "pie-hole",
    type: u.sizeMaybePercent
  }), R.push({
    name: "pie-start-angle",
    type: u.angle
  });
  for (var M = 1; M <= Ze.pieBackgroundN; M++)
    R.push({
      name: "pie-" + M + "-background-color",
      type: u.color
    }), R.push({
      name: "pie-" + M + "-background-size",
      type: u.percent
    }), R.push({
      name: "pie-" + M + "-background-opacity",
      type: u.zeroOneNumber
    });
  var P = [];
  Ze.stripeBackgroundN = 16, P.push({
    name: "stripe-size",
    type: u.sizeMaybePercent
  }), P.push({
    name: "stripe-direction",
    type: u.axisDirectionPrimary
  });
  for (var N = 1; N <= Ze.stripeBackgroundN; N++)
    P.push({
      name: "stripe-" + N + "-background-color",
      type: u.color
    }), P.push({
      name: "stripe-" + N + "-background-size",
      type: u.percent
    }), P.push({
      name: "stripe-" + N + "-background-opacity",
      type: u.zeroOneNumber
    });
  var O = [], k = Ze.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: u.arrowShape,
    triggersBounds: l.any
  }, {
    name: "arrow-color",
    type: u.color
  }, {
    name: "arrow-fill",
    type: u.arrowFill
  }, {
    name: "arrow-width",
    type: u.arrowWidth
  }].forEach(function(V) {
    k.forEach(function(q) {
      var Y = q + "-" + V.name, Q = V.type, re = V.triggersBounds;
      O.push({
        name: Y,
        type: Q,
        triggersBounds: re
      });
    });
  }, {});
  var F = Ze.properties = [].concat(g, m, p, y, b, A, d, h, v, c, f, T, S, w, x, R, P, C, D, O, L), _ = Ze.propertyGroups = {
    // common to all eles
    behavior: g,
    transition: m,
    visibility: p,
    overlay: y,
    underlay: b,
    ghost: A,
    // labels
    commonLabel: d,
    labelDimensions: h,
    mainLabel: v,
    sourceLabel: c,
    targetLabel: f,
    // node props
    nodeBody: T,
    nodeBorder: S,
    nodeOutline: w,
    backgroundImage: x,
    pie: R,
    stripe: P,
    compound: C,
    // edge props
    edgeLine: D,
    edgeArrow: O,
    core: L
  }, B = Ze.propertyGroupNames = {}, G = Ze.propertyGroupKeys = Object.keys(_);
  G.forEach(function(V) {
    B[V] = _[V].map(function(q) {
      return q.name;
    }), _[V].forEach(function(q) {
      return q.groupKey = V;
    });
  });
  var H = Ze.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "segment-distance",
    pointsTo: "segment-distances"
  }, {
    name: "segment-weight",
    pointsTo: "segment-weights"
  }, {
    name: "segment-radius",
    pointsTo: "segment-radii"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  Ze.propertyNames = F.map(function(V) {
    return V.name;
  });
  for (var X = 0; X < F.length; X++) {
    var $ = F[X];
    F[$.name] = $;
  }
  for (var K = 0; K < H.length; K++) {
    var ee = H[K], ae = F[ee.pointsTo], Z = {
      name: ee.name,
      alias: !0,
      pointsTo: ae
    };
    F.push(Z), F[ee.name] = Z;
  }
})();
Ze.getDefaultProperty = function(t) {
  return this.getDefaultProperties()[t];
};
Ze.getDefaultProperties = function() {
  var t = this._private;
  if (t.defaultProperties != null)
    return t.defaultProperties;
  for (var e = ye({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "box-selection": "contain",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "overlay-corner-radius": "auto",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "underlay-corner-radius": "auto",
    "text-metrics": "font",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    "box-select-labels": "no",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    "border-dash-pattern": [4, 2],
    "border-dash-offset": 0,
    "border-cap": "butt",
    "border-join": "miter",
    "border-position": "center",
    "outline-color": "#999",
    "outline-opacity": 1,
    "outline-width": 0,
    "outline-offset": 0,
    "outline-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "corner-radius": "auto",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%",
    "pie-hole": 0,
    "pie-start-angle": "0deg"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(l, u) {
    for (var v = 1; v <= Ze.pieBackgroundN; v++) {
      var c = u.name.replace("{{i}}", v), f = u.value;
      l[c] = f;
    }
    return l;
  }, {}), {
    // node stripes bg
    "stripe-size": "100%",
    "stripe-direction": "horizontal"
  }, [{
    name: "stripe-{{i}}-background-color",
    value: "black"
  }, {
    name: "stripe-{{i}}-background-size",
    value: "0%"
  }, {
    name: "stripe-{{i}}-background-opacity",
    value: 1
  }].reduce(function(l, u) {
    for (var v = 1; v <= Ze.stripeBackgroundN; v++) {
      var c = u.name.replace("{{i}}", v), f = u.value;
      l[c] = f;
    }
    return l;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-outline-width": 0,
    "line-outline-color": "#000",
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "segment-radii": 15,
    "radius-type": "arc-radius",
    "taxi-turn": "50%",
    "taxi-radius": 15,
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }, {
    name: "arrow-width",
    value: 1
  }].reduce(function(l, u) {
    return Ze.arrowPrefixes.forEach(function(v) {
      var c = v + "-" + u.name, f = u.value;
      l[c] = f;
    }), l;
  }, {})), r = {}, a = 0; a < this.properties.length; a++) {
    var n = this.properties[a];
    if (!n.pointsTo) {
      var i = n.name, o = e[i], s = this.parse(i, o);
      r[i] = s;
    }
  }
  return t.defaultProperties = r, t.defaultProperties;
};
Ze.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var ei = {};
ei.parse = function(t, e, r, a) {
  var n = this;
  if (He(e))
    return n.parseImplWarn(t, e, r, a);
  var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, o = r ? "t" : "f", s = "" + e, l = Sv(t, s, o, i), u = n.propCache = n.propCache || [], v;
  return (v = u[l]) || (v = u[l] = n.parseImplWarn(t, e, r, a)), (r || a === "mapping") && (v = qt(v), v && (v.value = qt(v.value))), v;
};
ei.parseImplWarn = function(t, e, r, a) {
  var n = this.parseImpl(t, e, r, a);
  return !n && e != null && Fe("The style property `".concat(t, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Fe("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
ei.parseImpl = function(t, e, r, a) {
  var n = this;
  t = ss(t);
  var i = n.properties[t], o = e, s = n.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, t = i.name);
  var l = de(e);
  l && (e = e.trim());
  var u = i.type;
  if (!u)
    return null;
  if (r && (e === "" || e === null))
    return {
      name: t,
      value: e,
      bypass: !0,
      deleteBypass: !0
    };
  if (He(e))
    return {
      name: t,
      value: e,
      strValue: "fn",
      mapped: s.fn,
      bypass: r
    };
  var v, c;
  if (!(!l || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (v = new RegExp(s.data.regex).exec(e))) {
      if (r)
        return !1;
      var f = s.data;
      return {
        name: t,
        value: v,
        strValue: "" + e,
        mapped: f,
        field: v[1],
        bypass: r
      };
    } else if (e.length >= 10 && e[0] === "m" && (c = new RegExp(s.mapData.regex).exec(e))) {
      if (r || u.multiple)
        return !1;
      var h = s.mapData;
      if (!(u.color || u.number))
        return !1;
      var d = this.parse(t, c[4]);
      if (!d || d.mapped)
        return !1;
      var g = this.parse(t, c[5]);
      if (!g || g.mapped)
        return !1;
      if (d.pfValue === g.pfValue || d.strValue === g.strValue)
        return Fe("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + d.strValue + "`"), this.parse(t, d.strValue);
      if (u.color) {
        var p = d.value, y = g.value, b = p[0] === y[0] && p[1] === y[1] && p[2] === y[2] && // optional alpha
        (p[3] === y[3] || (p[3] == null || p[3] === 1) && (y[3] == null || y[3] === 1));
        if (b)
          return !1;
      }
      return {
        name: t,
        value: c,
        strValue: "" + e,
        mapped: h,
        field: c[1],
        fieldMin: parseFloat(c[2]),
        // min & max are numeric
        fieldMax: parseFloat(c[3]),
        valueMin: d.value,
        valueMax: g.value,
        bypass: r
      };
    }
  }
  if (u.multiple && a !== "multiple") {
    var m;
    if (l ? m = e.split(/\s+/) : Ge(e) ? m = e : m = [e], u.evenMultiple && m.length % 2 !== 0)
      return null;
    for (var E = [], T = [], S = [], w = "", x = !1, C = 0; C < m.length; C++) {
      var D = n.parse(t, m[C], r, "multiple");
      x = x || de(D.value), E.push(D.value), S.push(D.pfValue != null ? D.pfValue : D.value), T.push(D.units), w += (C > 0 ? " " : "") + D.strValue;
    }
    return u.validate && !u.validate(E, T) ? null : u.singleEnum && x ? E.length === 1 && de(E[0]) ? {
      name: t,
      value: E[0],
      strValue: E[0],
      bypass: r
    } : null : {
      name: t,
      value: E,
      pfValue: S,
      strValue: w,
      bypass: r,
      units: T
    };
  }
  var A = function() {
    for (var Z = 0; Z < u.enums.length; Z++) {
      var V = u.enums[Z];
      if (V === e)
        return {
          name: t,
          value: e,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  };
  if (u.number) {
    var L, R = "px";
    if (u.units && (L = u.units), u.implicitUnits && (R = u.implicitUnits), !u.unitless)
      if (l) {
        var M = "px|em" + (u.allowPercent ? "|\\%" : "");
        L && (M = L);
        var P = e.match("^(" + tt + ")(" + M + ")?$");
        P && (e = P[1], L = P[2] || R);
      } else (!L || u.implicitUnits) && (L = R);
    if (e = parseFloat(e), isNaN(e) && u.enums === void 0)
      return null;
    if (isNaN(e) && u.enums !== void 0)
      return e = o, A();
    if (u.integer && !Gf(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max))
      return null;
    var N = {
      name: t,
      value: e,
      strValue: "" + e + (L || ""),
      units: L,
      bypass: r
    };
    return u.unitless || L !== "px" && L !== "em" ? N.pfValue = e : N.pfValue = L === "px" || !L ? e : this.getEmSizeInPixels() * e, (L === "ms" || L === "s") && (N.pfValue = L === "ms" ? e : 1e3 * e), (L === "deg" || L === "rad") && (N.pfValue = L === "rad" ? e : Kh(e)), L === "%" && (N.pfValue = e / 100), N;
  } else if (u.propList) {
    var O = [], k = "" + e;
    if (k !== "none") {
      for (var F = k.split(/\s*,\s*|\s+/), _ = 0; _ < F.length; _++) {
        var B = F[_].trim();
        n.properties[B] ? O.push(B) : Fe("`" + B + "` is not a valid property name");
      }
      if (O.length === 0)
        return null;
    }
    return {
      name: t,
      value: O,
      strValue: O.length === 0 ? "none" : O.join(" "),
      bypass: r
    };
  } else if (u.color) {
    var G = bv(e);
    return G ? {
      name: t,
      value: G,
      pfValue: G,
      strValue: "rgb(" + G[0] + "," + G[1] + "," + G[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: r
    } : null;
  } else if (u.regex || u.regexes) {
    if (u.enums) {
      var H = A();
      if (H)
        return H;
    }
    for (var X = u.regexes ? u.regexes : [u.regex], $ = 0; $ < X.length; $++) {
      var K = new RegExp(X[$]), ee = K.exec(e);
      if (ee)
        return {
          name: t,
          value: u.singleRegexMatchValue ? ee[1] : ee,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  } else return u.string ? {
    name: t,
    value: "" + e,
    strValue: "" + e,
    bypass: r
  } : u.enums ? A() : null;
};
var ot = function(e) {
  if (!(this instanceof ot))
    return new ot(e);
  if (!os(e)) {
    qe("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, gt = ot.prototype;
gt.instanceString = function() {
  return "style";
};
gt.clear = function() {
  for (var t = this._private, e = t.cy, r = e.elements(), a = 0; a < this.length; a++)
    this[a] = void 0;
  return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, !0), r.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = !0, i.appliedInitStyle = !1;
  }), this;
};
gt.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
gt.core = function(t) {
  return this._private.coreStyle[t] || this.getDefaultProperty(t);
};
gt.selector = function(t) {
  var e = t === "core" ? null : new fr(t), r = this.length++;
  return this[r] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: r
  }, this;
};
gt.css = function() {
  var t = this, e = arguments;
  if (e.length === 1)
    for (var r = e[0], a = 0; a < t.properties.length; a++) {
      var n = t.properties[a], i = r[n.name];
      i === void 0 && (i = r[zn(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
  else e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
gt.style = gt.css;
gt.cssRule = function(t, e) {
  var r = this.parse(t, e);
  if (r) {
    var a = this.length - 1;
    this[a].properties.push(r), this[a].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = !0), r.name.match(/stripe-(\d+)-background-size/) && r.value && (this._private.hasStripe = !0), r.mapped && this[a].mappedProperties.push(r);
    var n = !this[a].selector;
    n && (this._private.coreStyle[r.name] = r);
  }
  return this;
};
gt.append = function(t) {
  return pv(t) ? t.appendToStyle(this) : Ge(t) ? this.appendFromJson(t) : de(t) && this.appendFromString(t), this;
};
ot.fromJson = function(t, e) {
  var r = new ot(t);
  return r.fromJson(e), r;
};
ot.fromString = function(t, e) {
  return new ot(t).fromString(e);
};
[st, Ya, xs, Yt, jn, Ts, Ze, ei].forEach(function(t) {
  ye(gt, t);
});
ot.types = gt.types;
ot.properties = gt.properties;
ot.propertyGroups = gt.propertyGroups;
ot.propertyGroupNames = gt.propertyGroupNames;
ot.propertyGroupKeys = gt.propertyGroupKeys;
var ey = {
  style: function(e) {
    if (e) {
      var r = this.setStyle(e);
      r.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var r = this._private;
    return pv(e) ? r.style = e.generateStyle(this) : Ge(e) ? r.style = ot.fromJson(this, e) : de(e) ? r.style = ot.fromString(this, e) : r.style = ot(this), r.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, ty = "single", Pr = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var r = this._private;
    if (r.selectionType == null && (r.selectionType = ty), e !== void 0)
      (e === "additive" || e === "single") && (r.selectionType = e);
    else
      return r.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, r = this._private.pan, a, n, i, o, s;
    switch (e.length) {
      case 0:
        return r;
      case 1:
        if (de(e[0]))
          return a = e[0], r[a];
        if (Pe(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], o = i.x, s = i.y, ne(o) && (r.x = o), ne(s) && (r.y = s), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ne(n) && (r[a] = n), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, r) {
    var a = arguments, n = this._private.pan, i, o, s, l, u;
    if (!this._private.panningEnabled)
      return this;
    switch (a.length) {
      case 1:
        Pe(e) && (s = a[0], l = s.x, u = s.y, ne(l) && (n.x += l), ne(u) && (n.y += u), this.emit("pan viewport"));
        break;
      case 2:
        i = e, o = r, (i === "x" || i === "y") && ne(o) && (n[i] += o), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  gc: function() {
    this.notify("gc");
  },
  fit: function(e, r) {
    var a = this.getFitViewport(e, r);
    if (a) {
      var n = this._private;
      n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, r) {
    if (ne(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (de(e)) {
        var n = e;
        e = this.$(n);
      } else if (Uf(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else Dt(e) || (e = this.mutableElements());
      if (!(Dt(e) && e.empty())) {
        a = a || e.boundingBox();
        var o = this.width(), s = this.height(), l;
        if (r = ne(r) ? r : 0, !isNaN(o) && !isNaN(s) && o > 0 && s > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
          l = Math.min((o - 2 * r) / a.w, (s - 2 * r) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
          var u = {
            // now pan to middle
            x: (o - l * (a.x1 + a.x2)) / 2,
            y: (s - l * (a.y1 + a.y2)) / 2
          };
          return {
            zoom: l,
            pan: u
          };
        }
      }
    }
  },
  zoomRange: function(e, r) {
    var a = this._private;
    if (r == null) {
      var n = e;
      e = n.min, r = n.max;
    }
    return ne(e) && ne(r) && e <= r ? (a.minZoom = e, a.maxZoom = r) : ne(e) && r === void 0 && e <= a.maxZoom ? a.minZoom = e : ne(r) && e === void 0 && r >= a.minZoom && (a.maxZoom = r), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var r = this._private, a = r.pan, n = r.zoom, i, o, s = !1;
    if (r.zoomingEnabled || (s = !0), ne(e) ? o = e : Pe(e) && (o = e.level, e.position != null ? i = qn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (s = !0)), o = o > r.maxZoom ? r.maxZoom : o, o = o < r.minZoom ? r.minZoom : o, s || !ne(o) || o === n || i != null && (!ne(i.x) || !ne(i.y)))
      return null;
    if (i != null) {
      var l = a, u = n, v = o, c = {
        x: -v / u * (i.x - l.x) + i.x,
        y: -v / u * (i.y - l.y) + i.y
      };
      return {
        zoomed: !0,
        panned: !0,
        zoom: v,
        pan: c
      };
    } else
      return {
        zoomed: !0,
        panned: !1,
        zoom: o,
        pan: a
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var r = this.getZoomedViewport(e), a = this._private;
    return r == null || !r.zoomed ? this : (a.zoom = r.zoom, r.panned && (a.pan.x = r.pan.x, a.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var r = this._private, a = !0, n = !0, i = [], o = !1, s = !1;
    if (!e)
      return this;
    if (ne(e.zoom) || (a = !1), Pe(e.pan) || (n = !1), !a && !n)
      return this;
    if (a) {
      var l = e.zoom;
      l < r.minZoom || l > r.maxZoom || !r.zoomingEnabled ? o = !0 : (r.zoom = l, i.push("zoom"));
    }
    if (n && (!o || !e.cancelOnFailedZoom) && r.panningEnabled) {
      var u = e.pan;
      ne(u.x) && (r.pan.x = u.x, s = !1), ne(u.y) && (r.pan.y = u.y, s = !1), s || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var r = this.getCenterPan(e);
    return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, r) {
    if (this._private.panningEnabled) {
      if (de(e)) {
        var a = e;
        e = this.mutableElements().filter(a);
      } else Dt(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var n = e.boundingBox(), i = this.width(), o = this.height();
        r = r === void 0 ? this._private.zoom : r;
        var s = {
          // middle
          x: (i - r * (n.x1 + n.x2)) / 2,
          y: (o - r * (n.y1 + n.y2)) / 2
        };
        return s;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, r = e.container, a = this;
    return e.sizeCache = e.sizeCache || (r ? (function() {
      var n = a.window().getComputedStyle(r), i = function(s) {
        return parseFloat(n.getPropertyValue(s));
      };
      return {
        width: r.clientWidth - i("padding-left") - i("padding-right"),
        height: r.clientHeight - i("padding-top") - i("padding-bottom")
      };
    })() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, r = this._private.zoom, a = this.renderedExtent(), n = {
      x1: (a.x1 - e.x) / r,
      x2: (a.x2 - e.x) / r,
      y1: (a.y1 - e.y) / r,
      y2: (a.y2 - e.y) / r
    };
    return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
  },
  renderedExtent: function() {
    var e = this.width(), r = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: r,
      w: e,
      h: r
    };
  },
  multiClickDebounceTime: function(e) {
    if (e) this._private.multiClickDebounceTime = e;
    else return this._private.multiClickDebounceTime;
    return this;
  }
};
Pr.centre = Pr.center;
Pr.autolockNodes = Pr.autolock;
Pr.autoungrabifyNodes = Pr.autoungrabify;
var Oa = {
  data: Be.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeData: Be.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  scratch: Be.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Be.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  })
};
Oa.attr = Oa.data;
Oa.removeAttr = Oa.removeData;
var ka = function(e) {
  var r = this;
  e = ye({}, e);
  var a = e.container;
  a && !An(a) && An(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = r;
  var o = je !== void 0 && a !== void 0 && !e.headless, s = e;
  s.layout = ye({
    name: o ? "grid" : "null"
  }, s.layout), s.renderer = ye({
    name: o ? "canvas" : "null"
  }, s.renderer);
  var l = function(d, g, p) {
    return g !== void 0 ? g : p !== void 0 ? p : d;
  }, u = this._private = {
    container: a,
    // html dom ele container
    ready: !1,
    // whether ready has been triggered
    options: s,
    // cached options
    elements: new vt(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new vt(this),
    // elements being animated
    data: s.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: !1,
    // whether destroy was called
    notificationsEnabled: !0,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: l(!0, s.zoomingEnabled),
    userZoomingEnabled: l(!0, s.userZoomingEnabled),
    panningEnabled: l(!0, s.panningEnabled),
    userPanningEnabled: l(!0, s.userPanningEnabled),
    boxSelectionEnabled: l(!0, s.boxSelectionEnabled),
    autolock: l(!1, s.autolock, s.autolockNodes),
    autoungrabify: l(!1, s.autoungrabify, s.autoungrabifyNodes),
    autounselectify: l(!1, s.autounselectify),
    styleEnabled: s.styleEnabled === void 0 ? o : s.styleEnabled,
    zoom: ne(s.zoom) ? s.zoom : 1,
    pan: {
      x: Pe(s.pan) && ne(s.pan.x) ? s.pan.x : 0,
      y: Pe(s.pan) && ne(s.pan.y) ? s.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: !1,
    multiClickDebounceTime: l(250, s.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(s.selectionType), this.zoomRange({
    min: s.minZoom,
    max: s.maxZoom
  });
  var v = function(d, g) {
    var p = d.some(qf);
    if (p)
      return ia.all(d).then(g);
    g(d);
  };
  u.styleEnabled && r.setStyle([]);
  var c = ye({}, s, s.renderer);
  r.initRenderer(c);
  var f = function(d, g, p) {
    r.notifications(!1);
    var y = r.mutableElements();
    y.length > 0 && y.remove(), d != null && (Pe(d) || Ge(d)) && r.add(d), r.one("layoutready", function(m) {
      r.notifications(!0), r.emit(m), r.one("load", g), r.emitAndNotify("load");
    }).one("layoutstop", function() {
      r.one("done", p), r.emit("done");
    });
    var b = ye({}, r._private.options.layout);
    b.eles = r.elements(), r.layout(b).run();
  };
  v([s.style, s.elements], function(h) {
    var d = h[0], g = h[1];
    u.styleEnabled && r.style().append(d), f(g, function() {
      r.startAnimationLoop(), u.ready = !0, He(s.ready) && r.on("ready", s.ready);
      for (var p = 0; p < i.length; p++) {
        var y = i[p];
        r.on("ready", y);
      }
      n && (n.readies = []), r.emit("ready");
    }, s.done);
  });
}, kn = ka.prototype;
ye(kn, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  window: function() {
    var e = this._private.container;
    if (e == null) return je;
    var r = this._private.container.ownerDocument;
    return r === void 0 || r == null ? je : r.defaultView || je;
  },
  mount: function(e) {
    if (e != null) {
      var r = this, a = r._private, n = a.options;
      return !An(e) && An(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), a.container = e, a.styleEnabled = !0, r.invalidateSize(), r.initRenderer(ye({}, n, n.renderer, {
        // allow custom renderer name to be re-used, otherwise use canvas
        name: n.renderer.name === "null" ? "canvas" : n.renderer.name
      })), r.startAnimationLoop(), r.style(n.style), r.emit("mount"), r;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return qt(this._private.options);
  },
  json: function(e) {
    var r = this, a = r._private, n = r.mutableElements(), i = function(E) {
      return r.getElementById(E.id());
    };
    if (Pe(e)) {
      if (r.startBatch(), e.elements) {
        var o = {}, s = function(E, T) {
          for (var S = [], w = [], x = 0; x < E.length; x++) {
            var C = E[x];
            if (!C.data.id) {
              Fe("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var D = "" + C.data.id, A = r.getElementById(D);
            o[D] = !0, A.length !== 0 ? w.push({
              ele: A,
              json: C
            }) : (T && (C.group = T), S.push(C));
          }
          r.add(S);
          for (var L = 0; L < w.length; L++) {
            var R = w[L], M = R.ele, P = R.json;
            M.json(P);
          }
        };
        if (Ge(e.elements))
          s(e.elements);
        else
          for (var l = ["nodes", "edges"], u = 0; u < l.length; u++) {
            var v = l[u], c = e.elements[v];
            Ge(c) && s(c, v);
          }
        var f = r.collection();
        n.filter(function(m) {
          return !o[m.id()];
        }).forEach(function(m) {
          m.isParent() ? f.merge(m) : m.remove();
        }), f.forEach(function(m) {
          return m.children().move({
            parent: null
          });
        }), f.forEach(function(m) {
          return i(m).remove();
        });
      }
      e.style && r.style(e.style), e.zoom != null && e.zoom !== a.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
      for (var h = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], d = 0; d < h.length; d++) {
        var g = h[d];
        e[g] != null && r[g](e[g]);
      }
      return r.endBatch(), this;
    } else {
      var p = !!e, y = {};
      p ? y.elements = this.elements().map(function(m) {
        return m.json();
      }) : (y.elements = {}, n.forEach(function(m) {
        var E = m.group();
        y.elements[E] || (y.elements[E] = []), y.elements[E].push(m.json());
      })), this._private.styleEnabled && (y.style = r.style().json()), y.data = qt(r.data());
      var b = a.options;
      return y.zoomingEnabled = a.zoomingEnabled, y.userZoomingEnabled = a.userZoomingEnabled, y.zoom = a.zoom, y.minZoom = a.minZoom, y.maxZoom = a.maxZoom, y.panningEnabled = a.panningEnabled, y.userPanningEnabled = a.userPanningEnabled, y.pan = qt(a.pan), y.boxSelectionEnabled = a.boxSelectionEnabled, y.renderer = qt(b.renderer), y.hideEdgesOnViewport = b.hideEdgesOnViewport, y.textureOnViewport = b.textureOnViewport, y.wheelSensitivity = b.wheelSensitivity, y.motionBlur = b.motionBlur, y.multiClickDebounceTime = b.multiClickDebounceTime, y;
    }
  }
});
kn.$id = kn.getElementById;
[Yp, Kp, pc, Xo, pn, Qp, $o, yn, ey, Pr, Oa].forEach(function(t) {
  ye(kn, t);
});
var ry = {
  fit: !0,
  // whether to fit the viewport to the graph
  directed: !1,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  direction: "downward",
  // determines the direction in which the tree structure is drawn.  The possible values are 'downward', 'upward', 'rightward', or 'leftward'.
  padding: 30,
  // padding on fit
  circle: !1,
  // put depths in concentric circles if true, put depths top down if false
  grid: !1,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
}, ay = {
  maximal: !1,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: !1
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
}, zr = function(e) {
  return e.scratch("breadthfirst");
}, Nu = function(e, r) {
  return e.scratch("breadthfirst", r);
};
function yc(t) {
  this.options = ye({}, ry, ay, t);
}
yc.prototype.run = function() {
  var t = this.options, e = t.cy, r = t.eles, a = r.nodes().filter(function(ge) {
    return ge.isChildless();
  }), n = r, i = t.directed, o = t.acyclic || t.maximal || t.maximalAdjustments > 0, s = !!t.boundingBox, l = bt(s ? t.boundingBox : structuredClone(e.extent())), u;
  if (Dt(t.roots))
    u = t.roots;
  else if (Ge(t.roots)) {
    for (var v = [], c = 0; c < t.roots.length; c++) {
      var f = t.roots[c], h = e.getElementById(f);
      v.push(h);
    }
    u = e.collection(v);
  } else if (de(t.roots))
    u = e.$(t.roots);
  else if (i)
    u = a.roots();
  else {
    var d = r.components();
    u = e.collection();
    for (var g = function() {
      var oe = d[p], he = oe.maxDegree(!1), fe = oe.filter(function(Ee) {
        return Ee.degree(!1) === he;
      });
      u = u.add(fe);
    }, p = 0; p < d.length; p++)
      g();
  }
  var y = [], b = {}, m = function(oe, he) {
    y[he] == null && (y[he] = []);
    var fe = y[he].length;
    y[he].push(oe), Nu(oe, {
      index: fe,
      depth: he
    });
  }, E = function(oe, he) {
    var fe = zr(oe), Ee = fe.depth, be = fe.index;
    y[Ee][be] = null, oe.isChildless() && m(oe, he);
  };
  n.bfs({
    roots: u,
    directed: t.directed,
    visit: function(oe, he, fe, Ee, be) {
      var De = oe[0], Le = De.id();
      De.isChildless() && m(De, be), b[Le] = !0;
    }
  });
  for (var T = [], S = 0; S < a.length; S++) {
    var w = a[S];
    b[w.id()] || T.push(w);
  }
  var x = function(oe) {
    for (var he = y[oe], fe = 0; fe < he.length; fe++) {
      var Ee = he[fe];
      if (Ee == null) {
        he.splice(fe, 1), fe--;
        continue;
      }
      Nu(Ee, {
        depth: oe,
        index: fe
      });
    }
  }, C = function(oe, he) {
    for (var fe = zr(oe), Ee = oe.incomers().filter(function(j) {
      return j.isNode() && r.has(j);
    }), be = -1, De = oe.id(), Le = 0; Le < Ee.length; Le++) {
      var Ne = Ee[Le], Oe = zr(Ne);
      be = Math.max(be, Oe.depth);
    }
    if (fe.depth <= be) {
      if (!t.acyclic && he[De])
        return null;
      var Ie = be + 1;
      return E(oe, Ie), he[De] = Ie, !0;
    }
    return !1;
  };
  if (i && o) {
    var D = [], A = {}, L = function(oe) {
      return D.push(oe);
    }, R = function() {
      return D.shift();
    };
    for (a.forEach(function(ge) {
      return D.push(ge);
    }); D.length > 0; ) {
      var M = R(), P = C(M, A);
      if (P)
        M.outgoers().filter(function(ge) {
          return ge.isNode() && r.has(ge);
        }).forEach(L);
      else if (P === null) {
        Fe("Detected double maximal shift for node `" + M.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  var N = 0;
  if (t.avoidOverlap)
    for (var O = 0; O < a.length; O++) {
      var k = a[O], F = k.layoutDimensions(t), _ = F.w, B = F.h;
      N = Math.max(N, _, B);
    }
  var G = {}, H = function(oe) {
    if (G[oe.id()])
      return G[oe.id()];
    for (var he = zr(oe).depth, fe = oe.neighborhood(), Ee = 0, be = 0, De = 0; De < fe.length; De++) {
      var Le = fe[De];
      if (!(Le.isEdge() || Le.isParent() || !a.has(Le))) {
        var Ne = zr(Le);
        if (Ne != null) {
          var Oe = Ne.index, Ie = Ne.depth;
          if (!(Oe == null || Ie == null)) {
            var j = y[Ie].length;
            Ie < he && (Ee += Oe / j, be++);
          }
        }
      }
    }
    return be = Math.max(1, be), Ee = Ee / be, be === 0 && (Ee = 0), G[oe.id()] = Ee, Ee;
  }, X = function(oe, he) {
    var fe = H(oe), Ee = H(he), be = fe - Ee;
    return be === 0 ? mv(oe.id(), he.id()) : be;
  };
  t.depthSort !== void 0 && (X = t.depthSort);
  for (var $ = y.length, K = 0; K < $; K++)
    y[K].sort(X), x(K);
  for (var ee = [], ae = 0; ae < T.length; ae++)
    ee.push(T[ae]);
  var Z = function() {
    for (var oe = 0; oe < $; oe++)
      x(oe);
  };
  ee.length && (y.unshift(ee), $ = y.length, Z());
  for (var V = 0, q = 0; q < $; q++)
    V = Math.max(y[q].length, V);
  var Y = {
    x: l.x1 + l.w / 2,
    y: l.y1 + l.h / 2
  }, Q = a.reduce(function(ge, oe) {
    return (function(he) {
      return {
        w: ge.w === -1 ? he.w : (ge.w + he.w) / 2,
        h: ge.h === -1 ? he.h : (ge.h + he.h) / 2
      };
    })(oe.boundingBox({
      includeLabels: t.nodeDimensionsIncludeLabels
    }));
  }, {
    w: -1,
    h: -1
  }), re = Math.max(
    // only one depth
    $ === 1 ? 0 : (
      // inside a bounding box, no need for top & bottom padding
      s ? (l.h - t.padding * 2 - Q.h) / ($ - 1) : (l.h - t.padding * 2 - Q.h) / ($ + 1)
    ),
    N
  ), ue = y.reduce(function(ge, oe) {
    return Math.max(ge, oe.length);
  }, 0), Ae = function(oe) {
    var he = zr(oe), fe = he.depth, Ee = he.index;
    if (t.circle) {
      var be = Math.min(l.w / 2 / $, l.h / 2 / $);
      be = Math.max(be, N);
      var De = be * fe + be - ($ > 0 && y[0].length <= 3 ? be / 2 : 0), Le = 2 * Math.PI / y[fe].length * Ee;
      return fe === 0 && y[0].length === 1 && (De = 1), {
        x: Y.x + De * Math.cos(Le),
        y: Y.y + De * Math.sin(Le)
      };
    } else {
      var Ne = y[fe].length, Oe = Math.max(
        // only one depth
        Ne === 1 ? 0 : (
          // inside a bounding box, no need for left & right padding
          s ? (l.w - t.padding * 2 - Q.w) / ((t.grid ? ue : Ne) - 1) : (l.w - t.padding * 2 - Q.w) / ((t.grid ? ue : Ne) + 1)
        ),
        N
      ), Ie = {
        x: Y.x + (Ee + 1 - (Ne + 1) / 2) * Oe,
        y: Y.y + (fe + 1 - ($ + 1) / 2) * re
      };
      return Ie;
    }
  }, we = {
    downward: 0,
    leftward: 90,
    upward: 180,
    rightward: -90
  };
  Object.keys(we).indexOf(t.direction) === -1 && qe("Invalid direction '".concat(t.direction, "' specified for breadthfirst layout. Valid values are: ").concat(Object.keys(we).join(", ")));
  var me = function(oe) {
    return mh(Ae(oe), l, we[t.direction]);
  };
  return r.nodes().layoutPositions(this, t, me), this;
};
var ny = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function mc(t) {
  this.options = ye({}, ny, t);
}
mc.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var o = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), s = {
    x: o.x1 + o.w / 2,
    y: o.y1 + o.h / 2
  }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), v, c = 0, f = 0; f < i.length; f++) {
    var h = i[f], d = h.layoutDimensions(e), g = d.w, p = d.h;
    c = Math.max(c, g, p);
  }
  if (ne(e.radius) ? v = e.radius : i.length <= 1 ? v = 0 : v = Math.min(o.h, o.w) / 2 - c, i.length > 1 && e.avoidOverlap) {
    c *= 1.75;
    var y = Math.cos(u) - Math.cos(0), b = Math.sin(u) - Math.sin(0), m = Math.sqrt(c * c / (y * y + b * b));
    v = Math.max(m, v);
  }
  var E = function(S, w) {
    var x = e.startAngle + w * u * (n ? 1 : -1), C = v * Math.cos(x), D = v * Math.sin(x), A = {
      x: s.x + C,
      y: s.y + D
    };
    return A;
  };
  return a.nodes().layoutPositions(this, e, E), this;
};
var iy = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: !1,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function bc(t) {
  this.options = ye({}, iy, t);
}
bc.prototype.run = function() {
  for (var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = t.cy, n = e.eles, i = n.nodes().not(":parent"), o = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: a.width(),
    h: a.height()
  }), s = {
    x: o.x1 + o.w / 2,
    y: o.y1 + o.h / 2
  }, l = [], u = 0, v = 0; v < i.length; v++) {
    var c = i[v], f = void 0;
    f = e.concentric(c), l.push({
      value: f,
      node: c
    }), c._private.scratch.concentric = f;
  }
  i.updateStyle();
  for (var h = 0; h < i.length; h++) {
    var d = i[h], g = d.layoutDimensions(e);
    u = Math.max(u, g.w, g.h);
  }
  l.sort(function(re, ue) {
    return ue.value - re.value;
  });
  for (var p = e.levelWidth(i), y = [[]], b = y[0], m = 0; m < l.length; m++) {
    var E = l[m];
    if (b.length > 0) {
      var T = Math.abs(b[0].value - E.value);
      T >= p && (b = [], y.push(b));
    }
    b.push(E);
  }
  var S = u + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var w = y.length > 0 && y[0].length > 1, x = Math.min(o.w, o.h) / 2 - S, C = x / (y.length + w ? 1 : 0);
    S = Math.min(S, C);
  }
  for (var D = 0, A = 0; A < y.length; A++) {
    var L = y[A], R = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / L.length : e.sweep, M = L.dTheta = R / Math.max(1, L.length - 1);
    if (L.length > 1 && e.avoidOverlap) {
      var P = Math.cos(M) - Math.cos(0), N = Math.sin(M) - Math.sin(0), O = Math.sqrt(S * S / (P * P + N * N));
      D = Math.max(O, D);
    }
    L.r = D, D += S;
  }
  if (e.equidistant) {
    for (var k = 0, F = 0, _ = 0; _ < y.length; _++) {
      var B = y[_], G = B.r - F;
      k = Math.max(k, G);
    }
    F = 0;
    for (var H = 0; H < y.length; H++) {
      var X = y[H];
      H === 0 && (F = X.r), X.r = F, F += k;
    }
  }
  for (var $ = {}, K = 0; K < y.length; K++)
    for (var ee = y[K], ae = ee.dTheta, Z = ee.r, V = 0; V < ee.length; V++) {
      var q = ee[V], Y = e.startAngle + (r ? 1 : -1) * ae * V, Q = {
        x: s.x + Z * Math.cos(Y),
        y: s.y + Z * Math.sin(Y)
      };
      $[q.node.id()] = Q;
    }
  return n.nodes().layoutPositions(this, e, function(re) {
    var ue = re.id();
    return $[ue];
  }), this;
};
var Lo, oy = {
  // Called on `layoutready`
  ready: function() {
  },
  // Called on `layoutstop`
  stop: function() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: !0,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function(e, r) {
    return !0;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: !0,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: !1,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: !1,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function(e) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function(e) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function(e) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function ti(t) {
  this.options = ye({}, oy, t), this.options.layout = this;
  var e = this.options.eles.nodes(), r = this.options.eles.edges(), a = r.filter(function(n) {
    var i = n.source().data("id"), o = n.target().data("id"), s = e.some(function(u) {
      return u.data("id") === i;
    }), l = e.some(function(u) {
      return u.data("id") === o;
    });
    return !s || !l;
  });
  this.options.eles = this.options.eles.not(a);
}
ti.prototype.run = function() {
  var t = this.options, e = t.cy, r = this;
  r.stopped = !1, (t.animate === !0 || t.animate === !1) && r.emit({
    type: "layoutstart",
    layout: r
  }), t.debug === !0 ? Lo = !0 : Lo = !1;
  var a = sy(e, r, t);
  Lo && uy(a), t.randomize && vy(a);
  var n = Zt(), i = function() {
    cy(a, e, t), t.fit === !0 && e.fit(t.padding);
  }, o = function(f) {
    return !(r.stopped || f >= t.numIter || (fy(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
  }, s = function() {
    if (t.animate === !0 || t.animate === !1)
      i(), r.one("layoutstop", t.stop), r.emit({
        type: "layoutstop",
        layout: r
      });
    else {
      var f = t.eles.nodes(), h = Ec(a, t, f);
      f.layoutPositions(r, t, h);
    }
  }, l = 0, u = !0;
  if (t.animate === !0) {
    var v = function() {
      for (var f = 0; u && f < t.refresh; )
        u = o(l), l++, f++;
      if (!u)
        Fu(a, t), s();
      else {
        var h = Zt();
        h - n >= t.animationThreshold && i(), Ln(v);
      }
    };
    v();
  } else {
    for (; u; )
      u = o(l), l++;
    Fu(a, t), s();
  }
  return this;
};
ti.prototype.stop = function() {
  return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
ti.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var sy = function(e, r, a) {
  for (var n = a.eles.edges(), i = a.eles.nodes(), o = bt(a.boundingBox ? a.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), s = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: n.size(),
    temperature: a.initialTemp,
    clientWidth: o.w,
    clientHeight: o.h,
    boundingBox: o
  }, l = a.eles.components(), u = {}, v = 0; v < l.length; v++)
    for (var c = l[v], f = 0; f < c.length; f++) {
      var h = c[f];
      u[h.id()] = v;
    }
  for (var v = 0; v < s.nodeSize; v++) {
    var d = i[v], g = d.layoutDimensions(a), p = {};
    p.isLocked = d.locked(), p.id = d.data("id"), p.parentId = d.data("parent"), p.cmptId = u[d.id()], p.children = [], p.positionX = d.position("x"), p.positionY = d.position("y"), p.offsetX = 0, p.offsetY = 0, p.height = g.w, p.width = g.h, p.maxX = p.positionX + p.width / 2, p.minX = p.positionX - p.width / 2, p.maxY = p.positionY + p.height / 2, p.minY = p.positionY - p.height / 2, p.padLeft = parseFloat(d.style("padding")), p.padRight = parseFloat(d.style("padding")), p.padTop = parseFloat(d.style("padding")), p.padBottom = parseFloat(d.style("padding")), p.nodeRepulsion = He(a.nodeRepulsion) ? a.nodeRepulsion(d) : a.nodeRepulsion, s.layoutNodes.push(p), s.idToIndex[p.id] = v;
  }
  for (var y = [], b = 0, m = -1, E = [], v = 0; v < s.nodeSize; v++) {
    var d = s.layoutNodes[v], T = d.parentId;
    T != null ? s.layoutNodes[s.idToIndex[T]].children.push(d.id) : (y[++m] = d.id, E.push(d.id));
  }
  for (s.graphSet.push(E); b <= m; ) {
    var S = y[b++], w = s.idToIndex[S], h = s.layoutNodes[w], x = h.children;
    if (x.length > 0) {
      s.graphSet.push(x);
      for (var v = 0; v < x.length; v++)
        y[++m] = x[v];
    }
  }
  for (var v = 0; v < s.graphSet.length; v++)
    for (var C = s.graphSet[v], f = 0; f < C.length; f++) {
      var D = s.idToIndex[C[f]];
      s.indexToGraph[D] = v;
    }
  for (var v = 0; v < s.edgeSize; v++) {
    var A = n[v], L = {};
    L.id = A.data("id"), L.sourceId = A.data("source"), L.targetId = A.data("target");
    var R = He(a.idealEdgeLength) ? a.idealEdgeLength(A) : a.idealEdgeLength, M = He(a.edgeElasticity) ? a.edgeElasticity(A) : a.edgeElasticity, P = s.idToIndex[L.sourceId], N = s.idToIndex[L.targetId], O = s.indexToGraph[P], k = s.indexToGraph[N];
    if (O != k) {
      for (var F = ly(L.sourceId, L.targetId, s), _ = s.graphSet[F], B = 0, p = s.layoutNodes[P]; _.indexOf(p.id) === -1; )
        p = s.layoutNodes[s.idToIndex[p.parentId]], B++;
      for (p = s.layoutNodes[N]; _.indexOf(p.id) === -1; )
        p = s.layoutNodes[s.idToIndex[p.parentId]], B++;
      R *= B * a.nestingFactor;
    }
    L.idealLength = R, L.elasticity = M, s.layoutEdges.push(L);
  }
  return s;
}, ly = function(e, r, a) {
  var n = wc(e, r, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, wc = function(e, r, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(r))
    return {
      count: 2,
      graph: a
    };
  for (var o = 0, s = 0; s < i.length; s++) {
    var l = i[s], u = n.idToIndex[l], v = n.layoutNodes[u].children;
    if (v.length !== 0) {
      var c = n.indexToGraph[n.idToIndex[v[0]]], f = wc(e, r, c, n);
      if (f.count !== 0)
        if (f.count === 1) {
          if (o++, o === 2)
            break;
        } else
          return f;
    }
  }
  return {
    count: o,
    graph: a
  };
}, uy, vy = function(e, r) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var o = e.layoutNodes[i];
    o.children.length === 0 && !o.isLocked && (o.positionX = Math.random() * a, o.positionY = Math.random() * n);
  }
}, Ec = function(e, r, a) {
  var n = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return r.boundingBox && (a.forEach(function(o) {
    var s = e.layoutNodes[e.idToIndex[o.data("id")]];
    i.x1 = Math.min(i.x1, s.positionX), i.x2 = Math.max(i.x2, s.positionX), i.y1 = Math.min(i.y1, s.positionY), i.y2 = Math.max(i.y2, s.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(o, s) {
    var l = e.layoutNodes[e.idToIndex[o.data("id")]];
    if (r.boundingBox) {
      var u = i.w === 0 ? 0.5 : (l.positionX - i.x1) / i.w, v = i.h === 0 ? 0.5 : (l.positionY - i.y1) / i.h;
      return {
        x: n.x1 + u * n.w,
        y: n.y1 + v * n.h
      };
    } else
      return {
        x: l.positionX,
        y: l.positionY
      };
  };
}, cy = function(e, r, a) {
  var n = a.layout, i = a.eles.nodes(), o = Ec(e, a, i);
  i.positions(o), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, fy = function(e, r, a) {
  hy(e, r), py(e), yy(e, r), my(e), by(e);
}, hy = function(e, r) {
  for (var a = 0; a < e.graphSet.length; a++)
    for (var n = e.graphSet[a], i = n.length, o = 0; o < i; o++)
      for (var s = e.layoutNodes[e.idToIndex[n[o]]], l = o + 1; l < i; l++) {
        var u = e.layoutNodes[e.idToIndex[n[l]]];
        dy(s, u, e, r);
      }
}, Bu = function(e) {
  return -e + 2 * e * Math.random();
}, dy = function(e, r, a, n) {
  var i = e.cmptId, o = r.cmptId;
  if (!(i !== o && !a.isCompound)) {
    var s = r.positionX - e.positionX, l = r.positionY - e.positionY, u = 1;
    s === 0 && l === 0 && (s = Bu(u), l = Bu(u));
    var v = gy(e, r, s, l);
    if (v > 0)
      var c = n.nodeOverlap * v, f = Math.sqrt(s * s + l * l), h = c * s / f, d = c * l / f;
    else
      var g = Nn(e, s, l), p = Nn(r, -1 * s, -1 * l), y = p.x - g.x, b = p.y - g.y, m = y * y + b * b, f = Math.sqrt(m), c = (e.nodeRepulsion + r.nodeRepulsion) / m, h = c * y / f, d = c * b / f;
    e.isLocked || (e.offsetX -= h, e.offsetY -= d), r.isLocked || (r.offsetX += h, r.offsetY += d);
  }
}, gy = function(e, r, a, n) {
  if (a > 0)
    var i = e.maxX - r.minX;
  else
    var i = r.maxX - e.minX;
  if (n > 0)
    var o = e.maxY - r.minY;
  else
    var o = r.maxY - e.minY;
  return i >= 0 && o >= 0 ? Math.sqrt(i * i + o * o) : 0;
}, Nn = function(e, r, a) {
  var n = e.positionX, i = e.positionY, o = e.height || 1, s = e.width || 1, l = a / r, u = o / s, v = {};
  return r === 0 && 0 < a || r === 0 && 0 > a ? (v.x = n, v.y = i + o / 2, v) : 0 < r && -1 * u <= l && l <= u ? (v.x = n + s / 2, v.y = i + s * a / 2 / r, v) : 0 > r && -1 * u <= l && l <= u ? (v.x = n - s / 2, v.y = i - s * a / 2 / r, v) : 0 < a && (l <= -1 * u || l >= u) ? (v.x = n + o * r / 2 / a, v.y = i + o / 2, v) : (0 > a && (l <= -1 * u || l >= u) && (v.x = n - o * r / 2 / a, v.y = i - o / 2), v);
}, py = function(e, r) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], o = e.layoutNodes[i], s = e.idToIndex[n.targetId], l = e.layoutNodes[s], u = l.positionX - o.positionX, v = l.positionY - o.positionY;
    if (!(u === 0 && v === 0)) {
      var c = Nn(o, u, v), f = Nn(l, -1 * u, -1 * v), h = f.x - c.x, d = f.y - c.y, g = Math.sqrt(h * h + d * d), p = Math.pow(n.idealLength - g, 2) / n.elasticity;
      if (g !== 0)
        var y = p * h / g, b = p * d / g;
      else
        var y = 0, b = 0;
      o.isLocked || (o.offsetX += y, o.offsetY += b), l.isLocked || (l.offsetX -= y, l.offsetY -= b);
    }
  }
}, yy = function(e, r) {
  if (r.gravity !== 0)
    for (var a = 1, n = 0; n < e.graphSet.length; n++) {
      var i = e.graphSet[n], o = i.length;
      if (n === 0)
        var s = e.clientHeight / 2, l = e.clientWidth / 2;
      else
        var u = e.layoutNodes[e.idToIndex[i[0]]], v = e.layoutNodes[e.idToIndex[u.parentId]], s = v.positionX, l = v.positionY;
      for (var c = 0; c < o; c++) {
        var f = e.layoutNodes[e.idToIndex[i[c]]];
        if (!f.isLocked) {
          var h = s - f.positionX, d = l - f.positionY, g = Math.sqrt(h * h + d * d);
          if (g > a) {
            var p = r.gravity * h / g, y = r.gravity * d / g;
            f.offsetX += p, f.offsetY += y;
          }
        }
      }
    }
}, my = function(e, r) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var o = a[n++], s = e.idToIndex[o], l = e.layoutNodes[s], u = l.children;
    if (0 < u.length && !l.isLocked) {
      for (var v = l.offsetX, c = l.offsetY, f = 0; f < u.length; f++) {
        var h = e.layoutNodes[e.idToIndex[u[f]]];
        h.offsetX += v, h.offsetY += c, a[++i] = u[f];
      }
      l.offsetX = 0, l.offsetY = 0;
    }
  }
}, by = function(e, r) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = wy(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, xc(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, wy = function(e, r, a) {
  var n = Math.sqrt(e * e + r * r);
  if (n > a)
    var i = {
      x: a * e / n,
      y: a * r / n
    };
  else
    var i = {
      x: e,
      y: r
    };
  return i;
}, xc = function(e, r) {
  var a = e.parentId;
  if (a != null) {
    var n = r.layoutNodes[r.idToIndex[a]], i = !1;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
      return xc(n, r);
  }
}, Fu = function(e, r) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var o = a[i], s = o.cmptId, l = n[s] = n[s] || [];
    l.push(o);
  }
  for (var u = 0, i = 0; i < n.length; i++) {
    var v = n[i];
    if (v) {
      v.x1 = 1 / 0, v.x2 = -1 / 0, v.y1 = 1 / 0, v.y2 = -1 / 0;
      for (var c = 0; c < v.length; c++) {
        var f = v[c];
        v.x1 = Math.min(v.x1, f.positionX - f.width / 2), v.x2 = Math.max(v.x2, f.positionX + f.width / 2), v.y1 = Math.min(v.y1, f.positionY - f.height / 2), v.y2 = Math.max(v.y2, f.positionY + f.height / 2);
      }
      v.w = v.x2 - v.x1, v.h = v.y2 - v.y1, u += v.w * v.h;
    }
  }
  n.sort(function(b, m) {
    return m.w * m.h - b.w * b.h;
  });
  for (var h = 0, d = 0, g = 0, p = 0, y = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
    var v = n[i];
    if (v) {
      for (var c = 0; c < v.length; c++) {
        var f = v[c];
        f.isLocked || (f.positionX += h - v.x1, f.positionY += d - v.y1);
      }
      h += v.w + r.componentSpacing, g += v.w + r.componentSpacing, p = Math.max(p, v.h), g > y && (d += p + r.componentSpacing, h = 0, g = 0, p = 0);
    }
  }
}, Ey = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: !1,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function(e) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function Tc(t) {
  this.options = ye({}, Ey, t);
}
Tc.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().not(":parent");
  e.sort && (n = n.sort(e.sort));
  var i = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  });
  if (i.h === 0 || i.w === 0)
    a.nodes().layoutPositions(this, e, function(H) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var o = n.size(), s = Math.sqrt(o * i.h / i.w), l = Math.round(s), u = Math.round(i.w / i.h * s), v = function(X) {
      if (X == null)
        return Math.min(l, u);
      var $ = Math.min(l, u);
      $ == l ? l = X : u = X;
    }, c = function(X) {
      if (X == null)
        return Math.max(l, u);
      var $ = Math.max(l, u);
      $ == l ? l = X : u = X;
    }, f = e.rows, h = e.cols != null ? e.cols : e.columns;
    if (f != null && h != null)
      l = f, u = h;
    else if (f != null && h == null)
      l = f, u = Math.ceil(o / l);
    else if (f == null && h != null)
      u = h, l = Math.ceil(o / u);
    else if (u * l > o) {
      var d = v(), g = c();
      (d - 1) * g >= o ? v(d - 1) : (g - 1) * d >= o && c(g - 1);
    } else
      for (; u * l < o; ) {
        var p = v(), y = c();
        (y + 1) * p >= o ? c(y + 1) : v(p + 1);
      }
    var b = i.w / u, m = i.h / l;
    if (e.condense && (b = 0, m = 0), e.avoidOverlap)
      for (var E = 0; E < n.length; E++) {
        var T = n[E], S = T._private.position;
        (S.x == null || S.y == null) && (S.x = 0, S.y = 0);
        var w = T.layoutDimensions(e), x = e.avoidOverlapPadding, C = w.w + x, D = w.h + x;
        b = Math.max(b, C), m = Math.max(m, D);
      }
    for (var A = {}, L = function(X, $) {
      return !!A["c-" + X + "-" + $];
    }, R = function(X, $) {
      A["c-" + X + "-" + $] = !0;
    }, M = 0, P = 0, N = function() {
      P++, P >= u && (P = 0, M++);
    }, O = {}, k = 0; k < n.length; k++) {
      var F = n[k], _ = e.position(F);
      if (_ && (_.row !== void 0 || _.col !== void 0)) {
        var B = {
          row: _.row,
          col: _.col
        };
        if (B.col === void 0)
          for (B.col = 0; L(B.row, B.col); )
            B.col++;
        else if (B.row === void 0)
          for (B.row = 0; L(B.row, B.col); )
            B.row++;
        O[F.id()] = B, R(B.row, B.col);
      }
    }
    var G = function(X, $) {
      var K, ee;
      if (X.locked() || X.isParent())
        return !1;
      var ae = O[X.id()];
      if (ae)
        K = ae.col * b + b / 2 + i.x1, ee = ae.row * m + m / 2 + i.y1;
      else {
        for (; L(M, P); )
          N();
        K = P * b + b / 2 + i.x1, ee = M * m + m / 2 + i.y1, R(M, P), N();
      }
      return {
        x: K,
        y: ee
      };
    };
    n.layoutPositions(this, e, G);
  }
  return this;
};
var xy = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function Cs(t) {
  this.options = ye({}, xy, t);
}
Cs.prototype.run = function() {
  var t = this.options, e = t.eles, r = this;
  return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
};
Cs.prototype.stop = function() {
  return this;
};
var Ty = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function Cc(t) {
  this.options = ye({}, Ty, t);
}
Cc.prototype.run = function() {
  var t = this.options, e = t.eles, r = e.nodes(), a = He(t.positions);
  function n(i) {
    if (t.positions == null)
      return Yh(i.position());
    if (a)
      return t.positions(i);
    var o = t.positions[i._private.data.id];
    return o ?? null;
  }
  return r.layoutPositions(this, t, function(i, o) {
    var s = n(i);
    return i.locked() || s == null ? !1 : s;
  }), this;
};
var Cy = {
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function Dc(t) {
  this.options = ye({}, Cy, t);
}
Dc.prototype.run = function() {
  var t = this.options, e = t.cy, r = t.eles, a = bt(t.boundingBox ? t.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), n = function(o, s) {
    return {
      x: a.x1 + Math.round(Math.random() * a.w),
      y: a.y1 + Math.round(Math.random() * a.h)
    };
  };
  return r.nodes().layoutPositions(this, t, n), this;
};
var Dy = [{
  name: "breadthfirst",
  impl: yc
}, {
  name: "circle",
  impl: mc
}, {
  name: "concentric",
  impl: bc
}, {
  name: "cose",
  impl: ti
}, {
  name: "grid",
  impl: Tc
}, {
  name: "null",
  impl: Cs
}, {
  name: "preset",
  impl: Cc
}, {
  name: "random",
  impl: Dc
}];
function Sc(t) {
  this.options = t, this.notifications = 0;
}
var _u = function() {
}, Gu = function() {
  throw new Error("A headless instance can not render images");
};
Sc.prototype = {
  recalculateRenderedStyle: _u,
  notify: function() {
    this.notifications++;
  },
  init: _u,
  isHeadless: function() {
    return !0;
  },
  png: Gu,
  jpg: Gu
};
var Ds = {};
Ds.arrowShapeWidth = 0.3;
Ds.registerArrowShapes = function() {
  var t = this.arrowShapes = {}, e = this, r = function(u, v, c, f, h, d, g) {
    var p = h.x - c / 2 - g, y = h.x + c / 2 + g, b = h.y - c / 2 - g, m = h.y + c / 2 + g, E = p <= u && u <= y && b <= v && v <= m;
    return E;
  }, a = function(u, v, c, f, h) {
    var d = u * Math.cos(f) - v * Math.sin(f), g = u * Math.sin(f) + v * Math.cos(f), p = d * c, y = g * c, b = p + h.x, m = y + h.y;
    return {
      x: b,
      y: m
    };
  }, n = function(u, v, c, f) {
    for (var h = [], d = 0; d < u.length; d += 2) {
      var g = u[d], p = u[d + 1];
      h.push(a(g, p, v, c, f));
    }
    return h;
  }, i = function(u) {
    for (var v = [], c = 0; c < u.length; c++) {
      var f = u[c];
      v.push(f.x, f.y);
    }
    return v;
  }, o = function(u) {
    return u.pstyle("width").pfValue * u.pstyle("arrow-scale").pfValue * 2;
  }, s = function(u, v) {
    de(v) && (v = t[v]), t[u] = ye({
      name: u,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(f, h, d, g, p, y) {
        var b = i(n(this.points, d + 2 * y, g, p)), m = Tt(f, h, b);
        return m;
      },
      roughCollide: r,
      draw: function(f, h, d, g) {
        var p = n(this.points, h, d, g);
        e.arrowShapeImpl("polygon")(f, p);
      },
      spacing: function(f) {
        return 0;
      },
      gap: o
    }, v);
  };
  s("none", {
    collide: Rn,
    roughCollide: Rn,
    draw: vs,
    spacing: js,
    gap: js
  }), s("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), s("arrow", "triangle"), s("triangle-backcurve", {
    points: t.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: r,
    draw: function(u, v, c, f, h) {
      var d = n(this.points, v, c, f), g = this.controlPoint, p = a(g[0], g[1], v, c, f);
      e.arrowShapeImpl(this.name)(u, d, p);
    },
    gap: function(u) {
      return o(u) * 0.8;
    }
  }), s("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(u, v, c, f, h, d, g) {
      var p = i(n(this.points, c + 2 * g, f, h)), y = i(n(this.pointsTee, c + 2 * g, f, h)), b = Tt(u, v, p) || Tt(u, v, y);
      return b;
    },
    draw: function(u, v, c, f, h) {
      var d = n(this.points, v, c, f), g = n(this.pointsTee, v, c, f);
      e.arrowShapeImpl(this.name)(u, d, g);
    }
  }), s("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(u, v, c, f, h, d, g) {
      var p = h, y = Math.pow(p.x - u, 2) + Math.pow(p.y - v, 2) <= Math.pow((c + 2 * g) * this.radius, 2), b = i(n(this.points, c + 2 * g, f, h));
      return Tt(u, v, b) || y;
    },
    draw: function(u, v, c, f, h) {
      var d = n(this.pointsTr, v, c, f);
      e.arrowShapeImpl(this.name)(u, d, f.x, f.y, this.radius * v);
    },
    spacing: function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }
  }), s("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function(u, v) {
      var c = this.baseCrossLinePts.slice(), f = v / u, h = 3, d = 5;
      return c[h] = c[h] - f, c[d] = c[d] - f, c;
    },
    collide: function(u, v, c, f, h, d, g) {
      var p = i(n(this.points, c + 2 * g, f, h)), y = i(n(this.crossLinePts(c, d), c + 2 * g, f, h)), b = Tt(u, v, p) || Tt(u, v, y);
      return b;
    },
    draw: function(u, v, c, f, h) {
      var d = n(this.points, v, c, f), g = n(this.crossLinePts(v, h), v, c, f);
      e.arrowShapeImpl(this.name)(u, d, g);
    }
  }), s("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(u) {
      return o(u) * 0.525;
    }
  }), s("circle", {
    radius: 0.15,
    collide: function(u, v, c, f, h, d, g) {
      var p = h, y = Math.pow(p.x - u, 2) + Math.pow(p.y - v, 2) <= Math.pow((c + 2 * g) * this.radius, 2);
      return y;
    },
    draw: function(u, v, c, f, h) {
      e.arrowShapeImpl(this.name)(u, f.x, f.y, this.radius * v);
    },
    spacing: function(u) {
      return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
    }
  }), s("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(u) {
      return 1;
    },
    gap: function(u) {
      return 1;
    }
  }), s("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), s("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(u) {
      return u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }
  }), s("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(u) {
      return 0.95 * u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
    }
  });
};
var Nr = {};
Nr.projectIntoViewport = function(t, e) {
  var r = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], o = a[4], s = r.pan(), l = r.zoom(), u = ((t - n) / o - s.x) / l, v = ((e - i) / o - s.y) / l;
  return [u, v];
};
Nr.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var t = this.container, e = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), a = function(y) {
    return parseFloat(r.getPropertyValue(y));
  }, n = {
    left: a("padding-left"),
    right: a("padding-right"),
    top: a("padding-top"),
    bottom: a("padding-bottom")
  }, i = {
    left: a("border-left-width"),
    right: a("border-right-width"),
    top: a("border-top-width"),
    bottom: a("border-bottom-width")
  }, o = t.clientWidth, s = t.clientHeight, l = n.left + n.right, u = n.top + n.bottom, v = i.left + i.right, c = e.width / (o + v), f = o - l, h = s - u, d = e.left + n.left + i.left, g = e.top + n.top + i.top;
  return this.containerBB = [d, g, f, h, c];
};
Nr.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
Nr.findNearestElement = function(t, e, r, a) {
  return this.findNearestElements(t, e, r, a)[0];
};
Nr.findNearestElements = function(t, e, r, a) {
  var n = this, i = this, o = i.getCachedZSortedEles(), s = [], l = i.cy.zoom(), u = i.cy.hasCompoundNodes(), v = (a ? 24 : 8) / l, c = (a ? 8 : 2) / l, f = (a ? 8 : 2) / l, h = 1 / 0, d, g;
  r && (o = o.interactive);
  function p(w, x) {
    if (w.isNode()) {
      if (g)
        return;
      g = w, s.push(w);
    }
    if (w.isEdge() && (x == null || x < h))
      if (d) {
        if (d.pstyle("z-compound-depth").value === w.pstyle("z-compound-depth").value && d.pstyle("z-compound-depth").value === w.pstyle("z-compound-depth").value) {
          for (var C = 0; C < s.length; C++)
            if (s[C].isEdge()) {
              s[C] = w, d = w, h = x ?? h;
              break;
            }
        }
      } else
        s.push(w), d = w, h = x ?? h;
  }
  function y(w) {
    var x = w.outerWidth() + 2 * c, C = w.outerHeight() + 2 * c, D = x / 2, A = C / 2, L = w.position(), R = w.pstyle("corner-radius").value === "auto" ? "auto" : w.pstyle("corner-radius").pfValue, M = w._private.rscratch;
    if (L.x - D <= t && t <= L.x + D && L.y - A <= e && e <= L.y + A) {
      var P = i.nodeShapes[n.getNodeShape(w)];
      if (P.checkPoint(t, e, 0, x, C, L.x, L.y, R, M))
        return p(w, 0), !0;
    }
  }
  function b(w) {
    var x = w._private, C = x.rscratch, D = w.pstyle("width").pfValue, A = w.pstyle("arrow-scale").value, L = D / 2 + v, R = L * L, M = L * 2, k = x.source, F = x.target, P;
    if (C.edgeType === "segments" || C.edgeType === "straight" || C.edgeType === "haystack") {
      for (var N = C.allpts, O = 0; O + 3 < N.length; O += 2)
        if (nd(t, e, N[O], N[O + 1], N[O + 2], N[O + 3], M) && R > (P = ud(t, e, N[O], N[O + 1], N[O + 2], N[O + 3])))
          return p(w, P), !0;
    } else if (C.edgeType === "bezier" || C.edgeType === "multibezier" || C.edgeType === "self" || C.edgeType === "compound") {
      for (var N = C.allpts, O = 0; O + 5 < C.allpts.length; O += 4)
        if (id(t, e, N[O], N[O + 1], N[O + 2], N[O + 3], N[O + 4], N[O + 5], M) && R > (P = ld(t, e, N[O], N[O + 1], N[O + 2], N[O + 3], N[O + 4], N[O + 5])))
          return p(w, P), !0;
    }
    for (var k = k || x.source, F = F || x.target, _ = n.getArrowWidth(D, A), B = [{
      name: "source",
      x: C.arrowStartX,
      y: C.arrowStartY,
      angle: C.srcArrowAngle
    }, {
      name: "target",
      x: C.arrowEndX,
      y: C.arrowEndY,
      angle: C.tgtArrowAngle
    }, {
      name: "mid-source",
      x: C.midX,
      y: C.midY,
      angle: C.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: C.midX,
      y: C.midY,
      angle: C.midtgtArrowAngle
    }], O = 0; O < B.length; O++) {
      var G = B[O], H = i.arrowShapes[w.pstyle(G.name + "-arrow-shape").value], X = w.pstyle("width").pfValue;
      if (H.roughCollide(t, e, _, G.angle, {
        x: G.x,
        y: G.y
      }, X, v) && H.collide(t, e, _, G.angle, {
        x: G.x,
        y: G.y
      }, X, v))
        return p(w), !0;
    }
    u && s.length > 0 && (y(k), y(F));
  }
  function m(w, x, C) {
    return mt(w, x, C);
  }
  function E(w, x) {
    var C = w._private, D = f, A;
    x ? A = x + "-" : A = "", w.boundingBox();
    var L = C.labelBounds[x || "main"], R = w.pstyle(A + "label").value, M = w.pstyle("text-events").strValue === "yes";
    if (!(!M || !R)) {
      var P = m(C.rscratch, "labelX", x), N = m(C.rscratch, "labelY", x), O = m(C.rscratch, "labelAngle", x), k = w.pstyle(A + "text-margin-x").pfValue, F = w.pstyle(A + "text-margin-y").pfValue, _ = L.x1 - D - k, B = L.x2 + D - k, G = L.y1 - D - F, H = L.y2 + D - F;
      if (O) {
        var X = Math.cos(O), $ = Math.sin(O), K = function(Q, re) {
          return Q = Q - P, re = re - N, {
            x: Q * X - re * $ + P,
            y: Q * $ + re * X + N
          };
        }, ee = K(_, G), ae = K(_, H), Z = K(B, G), V = K(B, H), q = [
          // with the margin added after the rotation is applied
          ee.x + k,
          ee.y + F,
          Z.x + k,
          Z.y + F,
          V.x + k,
          V.y + F,
          ae.x + k,
          ae.y + F
        ];
        if (Tt(t, e, q))
          return p(w), !0;
      } else if (ir(L, t, e))
        return p(w), !0;
    }
  }
  for (var T = o.length - 1; T >= 0; T--) {
    var S = o[T];
    S.isNode() ? y(S) || E(S) : b(S) || E(S) || E(S, "source") || E(S, "target");
  }
  return s;
};
Nr.getAllInBox = function(t, e, r, a) {
  var n = this.getCachedZSortedEles().interactive, i = this.cy.zoom(), o = 2 / i, s = [], l = Math.min(t, r), u = Math.max(t, r), v = Math.min(e, a), c = Math.max(e, a);
  t = l, r = u, e = v, a = c;
  var f = bt({
    x1: t,
    y1: e,
    x2: r,
    y2: a
  }), h = [{
    x: f.x1,
    y: f.y1
  }, {
    x: f.x2,
    y: f.y1
  }, {
    x: f.x2,
    y: f.y2
  }, {
    x: f.x1,
    y: f.y2
  }], d = [[h[0], h[1]], [h[1], h[2]], [h[2], h[3]], [h[3], h[0]]];
  function g(Q, re, ue) {
    return mt(Q, re, ue);
  }
  function p(Q, re) {
    var ue = Q._private, Ae = o, we = "";
    Q.boundingBox();
    var me = ue.labelBounds.main;
    if (!me)
      return null;
    var ge = g(ue.rscratch, "labelX", re), oe = g(ue.rscratch, "labelY", re), he = g(ue.rscratch, "labelAngle", re), fe = Q.pstyle(we + "text-margin-x").pfValue, Ee = Q.pstyle(we + "text-margin-y").pfValue, be = me.x1 - Ae - fe, De = me.x2 + Ae - fe, Le = me.y1 - Ae - Ee, Ne = me.y2 + Ae - Ee;
    if (he) {
      var Oe = Math.cos(he), Ie = Math.sin(he), j = function(z, U) {
        return z = z - ge, U = U - oe, {
          x: z * Oe - U * Ie + ge,
          y: z * Ie + U * Oe + oe
        };
      };
      return [j(be, Le), j(De, Le), j(De, Ne), j(be, Ne)];
    } else
      return [{
        x: be,
        y: Le
      }, {
        x: De,
        y: Le
      }, {
        x: De,
        y: Ne
      }, {
        x: be,
        y: Ne
      }];
  }
  function y(Q, re, ue, Ae) {
    function we(me, ge, oe) {
      return (oe.y - me.y) * (ge.x - me.x) > (ge.y - me.y) * (oe.x - me.x);
    }
    return we(Q, ue, Ae) !== we(re, ue, Ae) && we(Q, re, ue) !== we(Q, re, Ae);
  }
  for (var b = 0; b < n.length; b++) {
    var m = n[b];
    if (m.isNode()) {
      var E = m, T = E.pstyle("text-events").strValue === "yes", S = E.pstyle("box-selection").strValue, w = E.pstyle("box-select-labels").strValue === "yes";
      if (S === "none")
        continue;
      var x = (S === "overlap" || w) && T, C = E.boundingBox({
        includeNodes: !0,
        includeEdges: !1,
        includeLabels: x
      });
      if (S === "contain") {
        var D = !1;
        if (w && T) {
          var A = p(E);
          A && Di(A, h) && (s.push(E), D = !0);
        }
        !D && Ov(f, C) && s.push(E);
      } else if (S === "overlap" && ds(f, C)) {
        var L = E.boundingBox({
          includeNodes: !0,
          includeEdges: !0,
          includeLabels: !1,
          includeMainLabels: !1,
          includeSourceLabels: !1,
          includeTargetLabels: !1
        }), R = [{
          x: L.x1,
          y: L.y1
        }, {
          x: L.x2,
          y: L.y1
        }, {
          x: L.x2,
          y: L.y2
        }, {
          x: L.x1,
          y: L.y2
        }];
        if (Di(R, h))
          s.push(E);
        else {
          var M = p(E);
          M && Di(M, h) && s.push(E);
        }
      }
    } else {
      var P = m, N = P._private, O = N.rscratch, k = P.pstyle("box-selection").strValue;
      if (k === "none")
        continue;
      if (k === "contain") {
        if (O.startX != null && O.startY != null && !ir(f, O.startX, O.startY) || O.endX != null && O.endY != null && !ir(f, O.endX, O.endY))
          continue;
        if (O.edgeType === "bezier" || O.edgeType === "multibezier" || O.edgeType === "self" || O.edgeType === "compound" || O.edgeType === "segments" || O.edgeType === "haystack") {
          for (var F = N.rstyle.bezierPts || N.rstyle.linePts || N.rstyle.haystackPts, _ = !0, B = 0; B < F.length; B++)
            if (!nl(f, F[B])) {
              _ = !1;
              break;
            }
          _ && s.push(P);
        } else O.edgeType === "straight" && s.push(P);
      } else if (k === "overlap") {
        var G = !1;
        if (O.startX != null && O.startY != null && O.endX != null && O.endY != null && (ir(f, O.startX, O.startY) || ir(f, O.endX, O.endY)))
          s.push(P), G = !0;
        else if (!G && O.edgeType === "haystack") {
          for (var H = N.rstyle.haystackPts, X = 0; X < H.length; X++)
            if (nl(f, H[X])) {
              s.push(P), G = !0;
              break;
            }
        }
        if (!G) {
          var $ = N.rstyle.bezierPts || N.rstyle.linePts || N.rstyle.haystackPts;
          if ((!$ || $.length < 2) && O.edgeType === "straight" && O.startX != null && O.startY != null && O.endX != null && O.endY != null && ($ = [{
            x: O.startX,
            y: O.startY
          }, {
            x: O.endX,
            y: O.endY
          }]), !$ || $.length < 2) continue;
          for (var K = 0; K < $.length - 1; K++) {
            for (var ee = $[K], ae = $[K + 1], Z = 0; Z < d.length; Z++) {
              var V = Qe(d[Z], 2), q = V[0], Y = V[1];
              if (y(ee, ae, q, Y)) {
                s.push(P), G = !0;
                break;
              }
            }
            if (G) break;
          }
        }
      }
    }
  }
  return s;
};
var Bn = {};
Bn.calculateArrowAngles = function(t) {
  var e = t._private.rscratch, r = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", o = e.edgeType === "compound", s = e.edgeType === "self", l, u, v, c, f, h, y, b;
  if (r ? (v = e.haystackPts[0], c = e.haystackPts[1], f = e.haystackPts[2], h = e.haystackPts[3]) : (v = e.arrowStartX, c = e.arrowStartY, f = e.arrowEndX, h = e.arrowEndY), y = e.midX, b = e.midY, i)
    l = v - e.segpts[0], u = c - e.segpts[1];
  else if (n || o || s || a) {
    var d = e.allpts, g = it(d[0], d[2], d[4], 0.1), p = it(d[1], d[3], d[5], 0.1);
    l = v - g, u = c - p;
  } else
    l = v - y, u = c - b;
  e.srcArrowAngle = Ja(l, u);
  var y = e.midX, b = e.midY;
  if (r && (y = (v + f) / 2, b = (c + h) / 2), l = f - v, u = h - c, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 === 0) {
      var m = d.length / 2, E = m - 2;
      l = d[m] - d[E], u = d[m + 1] - d[E + 1];
    } else if (e.isRound)
      l = e.midVector[1], u = -e.midVector[0];
    else {
      var m = d.length / 2 - 1, E = m - 2;
      l = d[m] - d[E], u = d[m + 1] - d[E + 1];
    }
  } else if (n || o || s) {
    var d = e.allpts, T = e.ctrlpts, S, w, x, C;
    if (T.length / 2 % 2 === 0) {
      var D = d.length / 2 - 1, A = D + 2, L = A + 2;
      S = it(d[D], d[A], d[L], 0), w = it(d[D + 1], d[A + 1], d[L + 1], 0), x = it(d[D], d[A], d[L], 1e-4), C = it(d[D + 1], d[A + 1], d[L + 1], 1e-4);
    } else {
      var A = d.length / 2 - 1, D = A - 2, L = A + 2;
      S = it(d[D], d[A], d[L], 0.4999), w = it(d[D + 1], d[A + 1], d[L + 1], 0.4999), x = it(d[D], d[A], d[L], 0.5), C = it(d[D + 1], d[A + 1], d[L + 1], 0.5);
    }
    l = x - S, u = C - w;
  }
  if (e.midtgtArrowAngle = Ja(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 !== 0) {
      if (!e.isRound) {
        var m = d.length / 2 - 1, R = m + 2;
        l = -(d[R] - d[m]), u = -(d[R + 1] - d[m + 1]);
      }
    }
  }
  if (e.midsrcArrowAngle = Ja(l, u), i)
    l = f - e.segpts[e.segpts.length - 2], u = h - e.segpts[e.segpts.length - 1];
  else if (n || o || s || a) {
    var d = e.allpts, M = d.length, g = it(d[M - 6], d[M - 4], d[M - 2], 0.9), p = it(d[M - 5], d[M - 3], d[M - 1], 0.9);
    l = f - g, u = h - p;
  } else
    l = f - y, u = h - b;
  e.tgtArrowAngle = Ja(l, u);
};
Bn.getArrowWidth = Bn.getArrowHeight = function(t, e) {
  var r = this.arrowWidthCache = this.arrowWidthCache || {}, a = r[t + ", " + e];
  return a || (a = Math.max(Math.pow(t * 13.37, 0.9), 29) * e, r[t + ", " + e] = a, a);
};
var Wo, Ko, Vt = {}, At = {}, zu, Vu, Ar, mn, Wt, xr, Dr, Gt, Vr, sn, Ac, Lc, Zo, Qo, Uu, qu = function(e, r, a) {
  a.x = r.x - e.x, a.y = r.y - e.y, a.len = Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = Math.atan2(a.ny, a.nx);
}, Sy = function(e, r) {
  r.x = e.x * -1, r.y = e.y * -1, r.nx = e.nx * -1, r.ny = e.ny * -1, r.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, Ay = function(e, r, a, n, i) {
  if (e !== Uu ? qu(r, e, Vt) : Sy(At, Vt), qu(r, a, At), zu = Vt.nx * At.ny - Vt.ny * At.nx, Vu = Vt.nx * At.nx - Vt.ny * -At.ny, Wt = Math.asin(Math.max(-1, Math.min(1, zu))), Math.abs(Wt) < 1e-6) {
    Wo = r.x, Ko = r.y, Dr = Vr = 0;
    return;
  }
  Ar = 1, mn = !1, Vu < 0 ? Wt < 0 ? Wt = Math.PI + Wt : (Wt = Math.PI - Wt, Ar = -1, mn = !0) : Wt > 0 && (Ar = -1, mn = !0), r.radius !== void 0 ? Vr = r.radius : Vr = n, xr = Wt / 2, sn = Math.min(Vt.len / 2, At.len / 2), i ? (Gt = Math.abs(Math.cos(xr) * Vr / Math.sin(xr)), Gt > sn ? (Gt = sn, Dr = Math.abs(Gt * Math.sin(xr) / Math.cos(xr))) : Dr = Vr) : (Gt = Math.min(sn, Vr), Dr = Math.abs(Gt * Math.sin(xr) / Math.cos(xr))), Zo = r.x + At.nx * Gt, Qo = r.y + At.ny * Gt, Wo = Zo - At.ny * Dr * Ar, Ko = Qo + At.nx * Dr * Ar, Ac = r.x + Vt.nx * Gt, Lc = r.y + Vt.ny * Gt, Uu = r;
};
function Rc(t, e) {
  e.radius === 0 ? t.lineTo(e.cx, e.cy) : t.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
function Ss(t, e, r, a) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
  return a === 0 || e.radius === 0 ? {
    cx: e.x,
    cy: e.y,
    radius: 0,
    startX: e.x,
    startY: e.y,
    stopX: e.x,
    stopY: e.y,
    startAngle: void 0,
    endAngle: void 0,
    counterClockwise: void 0
  } : (Ay(t, e, r, a, n), {
    cx: Wo,
    cy: Ko,
    radius: Dr,
    startX: Ac,
    startY: Lc,
    stopX: Zo,
    stopY: Qo,
    startAngle: Vt.ang + Math.PI / 2 * Ar,
    endAngle: At.ang - Math.PI / 2 * Ar,
    counterClockwise: mn
  });
}
var Na = 0.01, Ly = Math.sqrt(2 * Na), pt = {};
pt.findMidptPtsEtc = function(t, e) {
  var r = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, o = t.pstyle("source-endpoint"), s = t.pstyle("target-endpoint"), l = o.units != null && s.units != null, u = function(T, S, w, x) {
    var C = x - S, D = w - T, A = Math.sqrt(D * D + C * C);
    return {
      x: -C / A,
      y: D / A
    };
  }, v = t.pstyle("edge-distances").value;
  switch (v) {
    case "node-position":
      i = r;
      break;
    case "intersection":
      i = a;
      break;
    case "endpoints": {
      if (l) {
        var c = this.manualEndptToPx(t.source()[0], o), f = Qe(c, 2), h = f[0], d = f[1], g = this.manualEndptToPx(t.target()[0], s), p = Qe(g, 2), y = p[0], b = p[1], m = {
          x1: h,
          y1: d,
          x2: y,
          y2: b
        };
        n = u(h, d, y, b), i = m;
      } else
        Fe("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: n
  };
};
pt.findHaystackPoints = function(t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e], a = r._private, n = a.rscratch;
    if (!n.haystack) {
      var i = Math.random() * 2 * Math.PI;
      n.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, n.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var o = a.source, s = a.target, l = o.position(), u = s.position(), v = o.width(), c = s.width(), f = o.height(), h = s.height(), d = r.pstyle("haystack-radius").value, g = d / 2;
    n.haystackPts = n.allpts = [n.source.x * v * g + l.x, n.source.y * f * g + l.y, n.target.x * c * g + u.x, n.target.y * h * g + u.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
  }
};
pt.findSegmentsPoints = function(t, e) {
  var r = t._private.rscratch, a = t.pstyle("segment-weights"), n = t.pstyle("segment-distances"), i = t.pstyle("segment-radii"), o = t.pstyle("radius-type"), s = Math.min(a.pfValue.length, n.pfValue.length), l = i.pfValue[i.pfValue.length - 1], u = o.pfValue[o.pfValue.length - 1];
  r.edgeType = "segments", r.segpts = [], r.radii = [], r.isArcRadius = [];
  for (var v = 0; v < s; v++) {
    var c = a.pfValue[v], f = n.pfValue[v], h = 1 - c, d = c, g = this.findMidptPtsEtc(t, e), p = g.midptPts, y = g.vectorNormInverse, b = {
      x: p.x1 * h + p.x2 * d,
      y: p.y1 * h + p.y2 * d
    };
    r.segpts.push(b.x + y.x * f, b.y + y.y * f), r.radii.push(i.pfValue[v] !== void 0 ? i.pfValue[v] : l), r.isArcRadius.push((o.pfValue[v] !== void 0 ? o.pfValue[v] : u) === "arc-radius");
  }
};
pt.findLoopPoints = function(t, e, r, a) {
  var n = t._private.rscratch, i = e.dirCounts, o = e.srcPos, s = t.pstyle("control-point-distances"), l = s ? s.pfValue[0] : void 0, u = t.pstyle("loop-direction").pfValue, v = t.pstyle("loop-sweep").pfValue, c = t.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var f = r, h = c;
  a && (f = 0, h = l);
  var d = u - Math.PI / 2, g = d - v / 2, p = d + v / 2, y = u + "_" + v;
  f = i[y] === void 0 ? i[y] = 0 : ++i[y], n.ctrlpts = [o.x + Math.cos(g) * 1.4 * h * (f / 3 + 1), o.y + Math.sin(g) * 1.4 * h * (f / 3 + 1), o.x + Math.cos(p) * 1.4 * h * (f / 3 + 1), o.y + Math.sin(p) * 1.4 * h * (f / 3 + 1)];
};
pt.findCompoundLoopPoints = function(t, e, r, a) {
  var n = t._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, o = e.tgtPos, s = e.srcW, l = e.srcH, u = e.tgtW, v = e.tgtH, c = t.pstyle("control-point-step-size").pfValue, f = t.pstyle("control-point-distances"), h = f ? f.pfValue[0] : void 0, d = r, g = c;
  a && (d = 0, g = h);
  var p = 50, y = {
    x: i.x - s / 2,
    y: i.y - l / 2
  }, b = {
    x: o.x - u / 2,
    y: o.y - v / 2
  }, m = {
    x: Math.min(y.x, b.x),
    y: Math.min(y.y, b.y)
  }, E = 0.5, T = Math.max(E, Math.log(s * Na)), S = Math.max(E, Math.log(u * Na));
  n.ctrlpts = [m.x, m.y - (1 + Math.pow(p, 1.12) / 100) * g * (d / 3 + 1) * T, m.x - (1 + Math.pow(p, 1.12) / 100) * g * (d / 3 + 1) * S, m.y];
};
pt.findStraightEdgePoints = function(t) {
  t._private.rscratch.edgeType = "straight";
};
pt.findBezierPoints = function(t, e, r, a, n) {
  var i = t._private.rscratch, o = t.pstyle("control-point-step-size").pfValue, s = t.pstyle("control-point-distances"), l = t.pstyle("control-point-weights"), u = s && l ? Math.min(s.value.length, l.value.length) : 1, v = s ? s.pfValue[0] : void 0, c = l.value[0], f = a;
  i.edgeType = f ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var h = 0; h < u; h++) {
    var d = (0.5 - e.eles.length / 2 + r) * o * (n ? -1 : 1), g = void 0, p = hs(d);
    f && (v = s ? s.pfValue[h] : o, c = l.value[h]), a ? g = v : g = v !== void 0 ? p * v : void 0;
    var y = g !== void 0 ? g : d, b = 1 - c, m = c, E = this.findMidptPtsEtc(t, e), T = E.midptPts, S = E.vectorNormInverse, w = {
      x: T.x1 * b + T.x2 * m,
      y: T.y1 * b + T.y2 * m
    };
    i.ctrlpts.push(w.x + S.x * y, w.y + S.y * y);
  }
};
pt.findTaxiPoints = function(t, e) {
  var r = t._private.rscratch;
  r.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", o = "rightward", s = "downward", l = "upward", u = "auto", v = e.posPts, c = e.srcW, f = e.srcH, h = e.tgtW, d = e.tgtH, g = t.pstyle("edge-distances").value, p = g !== "node-position", y = t.pstyle("taxi-direction").value, b = y, m = t.pstyle("taxi-turn"), E = m.units === "%", T = m.pfValue, S = T < 0, w = t.pstyle("taxi-turn-min-distance").pfValue, x = p ? (c + h) / 2 : 0, C = p ? (f + d) / 2 : 0, D = v.x2 - v.x1, A = v.y2 - v.y1, L = function(U, W) {
    return U > 0 ? Math.max(U - W, 0) : Math.min(U + W, 0);
  }, R = L(D, x), M = L(A, C), P = !1;
  b === u ? y = Math.abs(R) > Math.abs(M) ? n : a : b === l || b === s ? (y = a, P = !0) : (b === i || b === o) && (y = n, P = !0);
  var N = y === a, O = N ? M : R, k = N ? A : D, F = hs(k), _ = !1;
  !(P && (E || S)) && (b === s && k < 0 || b === l && k > 0 || b === i && k > 0 || b === o && k < 0) && (F *= -1, O = F * Math.abs(O), _ = !0);
  var B;
  if (E) {
    var G = T < 0 ? 1 + T : T;
    B = G * O;
  } else {
    var H = T < 0 ? O : 0;
    B = H + T * F;
  }
  var X = function(U) {
    return Math.abs(U) < w || Math.abs(U) >= Math.abs(O);
  }, $ = X(B), K = X(Math.abs(O) - Math.abs(B)), ee = $ || K;
  if (ee && !_)
    if (N) {
      var ae = Math.abs(k) <= f / 2, Z = Math.abs(D) <= h / 2;
      if (ae) {
        var V = (v.x1 + v.x2) / 2, q = v.y1, Y = v.y2;
        r.segpts = [V, q, V, Y];
      } else if (Z) {
        var Q = (v.y1 + v.y2) / 2, re = v.x1, ue = v.x2;
        r.segpts = [re, Q, ue, Q];
      } else
        r.segpts = [v.x1, v.y2];
    } else {
      var Ae = Math.abs(k) <= c / 2, we = Math.abs(A) <= d / 2;
      if (Ae) {
        var me = (v.y1 + v.y2) / 2, ge = v.x1, oe = v.x2;
        r.segpts = [ge, me, oe, me];
      } else if (we) {
        var he = (v.x1 + v.x2) / 2, fe = v.y1, Ee = v.y2;
        r.segpts = [he, fe, he, Ee];
      } else
        r.segpts = [v.x2, v.y1];
    }
  else if (N) {
    var be = v.y1 + B + (p ? f / 2 * F : 0), De = v.x1, Le = v.x2;
    r.segpts = [De, be, Le, be];
  } else {
    var Ne = v.x1 + B + (p ? c / 2 * F : 0), Oe = v.y1, Ie = v.y2;
    r.segpts = [Ne, Oe, Ne, Ie];
  }
  if (r.isRound) {
    var j = t.pstyle("taxi-radius").value, I = t.pstyle("radius-type").value[0] === "arc-radius";
    r.radii = new Array(r.segpts.length / 2).fill(j), r.isArcRadius = new Array(r.segpts.length / 2).fill(I);
  }
};
pt.tryToCorrectInvalidPoints = function(t, e) {
  var r = t._private.rscratch;
  if (r.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, o = e.srcH, s = e.tgtW, l = e.tgtH, u = e.srcShape, v = e.tgtShape, c = e.srcCornerRadius, f = e.tgtCornerRadius, h = e.srcRs, d = e.tgtRs, g = !ne(r.startX) || !ne(r.startY), p = !ne(r.arrowStartX) || !ne(r.arrowStartY), y = !ne(r.endX) || !ne(r.endY), b = !ne(r.arrowEndX) || !ne(r.arrowEndY), m = 3, E = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, T = m * E, S = Ir({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.startX,
      y: r.startY
    }), w = S < T, x = Ir({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.endX,
      y: r.endY
    }), C = x < T, D = !1;
    if (g || p || w) {
      D = !0;
      var A = {
        // delta
        x: r.ctrlpts[0] - a.x,
        y: r.ctrlpts[1] - a.y
      }, L = Math.sqrt(A.x * A.x + A.y * A.y), R = {
        // normalised delta
        x: A.x / L,
        y: A.y / L
      }, M = Math.max(i, o), P = {
        // *2 radius guarantees outside shape
        x: r.ctrlpts[0] + R.x * 2 * M,
        y: r.ctrlpts[1] + R.y * 2 * M
      }, N = u.intersectLine(a.x, a.y, i, o, P.x, P.y, 0, c, h);
      w ? (r.ctrlpts[0] = r.ctrlpts[0] + R.x * (T - S), r.ctrlpts[1] = r.ctrlpts[1] + R.y * (T - S)) : (r.ctrlpts[0] = N[0] + R.x * T, r.ctrlpts[1] = N[1] + R.y * T);
    }
    if (y || b || C) {
      D = !0;
      var O = {
        // delta
        x: r.ctrlpts[0] - n.x,
        y: r.ctrlpts[1] - n.y
      }, k = Math.sqrt(O.x * O.x + O.y * O.y), F = {
        // normalised delta
        x: O.x / k,
        y: O.y / k
      }, _ = Math.max(i, o), B = {
        // *2 radius guarantees outside shape
        x: r.ctrlpts[0] + F.x * 2 * _,
        y: r.ctrlpts[1] + F.y * 2 * _
      }, G = v.intersectLine(n.x, n.y, s, l, B.x, B.y, 0, f, d);
      C ? (r.ctrlpts[0] = r.ctrlpts[0] + F.x * (T - x), r.ctrlpts[1] = r.ctrlpts[1] + F.y * (T - x)) : (r.ctrlpts[0] = G[0] + F.x * T, r.ctrlpts[1] = G[1] + F.y * T);
    }
    D && this.findEndpoints(t);
  }
};
pt.storeAllpts = function(t) {
  var e = t._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var r = 0; r + 1 < e.ctrlpts.length; r += 2)
      e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = it(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = it(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments") {
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
      e.roundCorners = [];
      for (var i = 2; i + 3 < e.allpts.length; i += 2) {
        var o = e.radii[i / 2 - 1], s = e.isArcRadius[i / 2 - 1];
        e.roundCorners.push(Ss({
          x: e.allpts[i - 2],
          y: e.allpts[i - 1]
        }, {
          x: e.allpts[i],
          y: e.allpts[i + 1],
          radius: o
        }, {
          x: e.allpts[i + 2],
          y: e.allpts[i + 3]
        }, o, s));
      }
    }
    if (e.segpts.length % 4 === 0) {
      var l = e.segpts.length / 2, u = l - 2;
      e.midX = (e.segpts[u] + e.segpts[l]) / 2, e.midY = (e.segpts[u + 1] + e.segpts[l + 1]) / 2;
    } else {
      var v = e.segpts.length / 2 - 1;
      if (!e.isRound)
        e.midX = e.segpts[v], e.midY = e.segpts[v + 1];
      else {
        var c = {
          x: e.segpts[v],
          y: e.segpts[v + 1]
        }, f = e.roundCorners[v / 2];
        if (f.radius === 0) {
          var h = {
            x: e.segpts[v + 2],
            y: e.segpts[v + 3]
          };
          e.midX = c.x, e.midY = c.y, e.midVector = [c.y - h.y, h.x - c.x];
        } else {
          var d = [c.x - f.cx, c.y - f.cy], g = f.radius / Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
          d = d.map(function(p) {
            return p * g;
          }), e.midX = f.cx + d[0], e.midY = f.cy + d[1], e.midVector = d;
        }
      }
    }
  }
};
pt.checkForInvalidEdgeWarning = function(t) {
  var e = t[0]._private.rscratch;
  e.nodesOverlap || ne(e.startX) && ne(e.startY) && ne(e.endX) && ne(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, Fe("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
pt.findEdgeControlPoints = function(t) {
  var e = this;
  if (!(!t || t.length === 0)) {
    for (var r = this, a = r.cy, n = a.hasCompoundNodes(), i = new Kt(), o = function(C, D) {
      return [].concat(Sn(C), [D ? 1 : 0]).join("-");
    }, s = [], l = [], u = 0; u < t.length; u++) {
      var v = t[u], c = v._private, f = v.pstyle("curve-style").value;
      if (!(v.removed() || !v.takesUpSpace())) {
        if (f === "haystack") {
          l.push(v);
          continue;
        }
        var h = f === "unbundled-bezier" || nr(f, "segments") || f === "straight" || f === "straight-triangle" || nr(f, "taxi"), d = f === "unbundled-bezier" || f === "bezier", g = c.source, p = c.target, y = g.poolIndex(), b = p.poolIndex(), m = [y, b].sort(), E = o(m, h), T = i.get(E);
        T == null && (T = {
          eles: []
        }, s.push({
          pairId: m,
          edgeIsUnbundled: h
        }), i.set(E, T)), T.eles.push(v), h && (T.hasUnbundled = !0), d && (T.hasBezier = !0);
      }
    }
    for (var S = function() {
      var C = s[w], D = C.pairId, A = C.edgeIsUnbundled, L = o(D, A), R = i.get(L), M;
      if (!R.hasUnbundled) {
        var P = R.eles[0].parallelEdges().filter(function(I) {
          return I.isBundledBezier();
        });
        cs(R.eles), P.forEach(function(I) {
          return R.eles.push(I);
        }), R.eles.sort(function(I, z) {
          return I.poolIndex() - z.poolIndex();
        });
      }
      var N = R.eles[0], O = N.source(), k = N.target();
      if (O.poolIndex() > k.poolIndex()) {
        var F = O;
        O = k, k = F;
      }
      var _ = R.srcPos = O.position(), B = R.tgtPos = k.position(), G = R.srcW = O.outerWidth(), H = R.srcH = O.outerHeight(), X = R.tgtW = k.outerWidth(), $ = R.tgtH = k.outerHeight(), K = R.srcShape = r.nodeShapes[e.getNodeShape(O)], ee = R.tgtShape = r.nodeShapes[e.getNodeShape(k)], ae = R.srcCornerRadius = O.pstyle("corner-radius").value === "auto" ? "auto" : O.pstyle("corner-radius").pfValue, Z = R.tgtCornerRadius = k.pstyle("corner-radius").value === "auto" ? "auto" : k.pstyle("corner-radius").pfValue, V = R.tgtRs = k._private.rscratch, q = R.srcRs = O._private.rscratch;
      R.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var Y = 0; Y < R.eles.length; Y++) {
        var Q = R.eles[Y], re = Q[0]._private.rscratch, ue = Q.pstyle("curve-style").value, Ae = ue === "unbundled-bezier" || nr(ue, "segments") || nr(ue, "taxi"), we = !O.same(Q.source());
        if (!R.calculatedIntersection && O !== k && (R.hasBezier || R.hasUnbundled)) {
          R.calculatedIntersection = !0;
          var me = K.intersectLine(_.x, _.y, G, H, B.x, B.y, 0, ae, q), ge = R.srcIntn = me, oe = ee.intersectLine(B.x, B.y, X, $, _.x, _.y, 0, Z, V), he = R.tgtIntn = oe, fe = R.intersectionPts = {
            x1: me[0],
            x2: oe[0],
            y1: me[1],
            y2: oe[1]
          }, Ee = R.posPts = {
            x1: _.x,
            x2: B.x,
            y1: _.y,
            y2: B.y
          }, be = oe[1] - me[1], De = oe[0] - me[0], Le = Math.sqrt(De * De + be * be);
          ne(Le) && Le >= Ly || (Le = Math.sqrt(Math.max(De * De, Na) + Math.max(be * be, Na)));
          var Ne = R.vector = {
            x: De,
            y: be
          }, Oe = R.vectorNorm = {
            x: Ne.x / Le,
            y: Ne.y / Le
          }, Ie = {
            x: -Oe.y,
            y: Oe.x
          };
          R.nodesOverlap = !ne(Le) || ee.checkPoint(me[0], me[1], 0, X, $, B.x, B.y, Z, V) || K.checkPoint(oe[0], oe[1], 0, G, H, _.x, _.y, ae, q), R.vectorNormInverse = Ie, M = {
            nodesOverlap: R.nodesOverlap,
            dirCounts: R.dirCounts,
            calculatedIntersection: !0,
            hasBezier: R.hasBezier,
            hasUnbundled: R.hasUnbundled,
            eles: R.eles,
            srcPos: B,
            srcRs: V,
            tgtPos: _,
            tgtRs: q,
            srcW: X,
            srcH: $,
            tgtW: G,
            tgtH: H,
            srcIntn: he,
            tgtIntn: ge,
            srcShape: ee,
            tgtShape: K,
            posPts: {
              x1: Ee.x2,
              y1: Ee.y2,
              x2: Ee.x1,
              y2: Ee.y1
            },
            intersectionPts: {
              x1: fe.x2,
              y1: fe.y2,
              x2: fe.x1,
              y2: fe.y1
            },
            vector: {
              x: -Ne.x,
              y: -Ne.y
            },
            vectorNorm: {
              x: -Oe.x,
              y: -Oe.y
            },
            vectorNormInverse: {
              x: -Ie.x,
              y: -Ie.y
            }
          };
        }
        var j = we ? M : R;
        re.nodesOverlap = j.nodesOverlap, re.srcIntn = j.srcIntn, re.tgtIntn = j.tgtIntn, re.isRound = ue.startsWith("round"), n && (O.isParent() || O.isChild() || k.isParent() || k.isChild()) && (O.parents().anySame(k) || k.parents().anySame(O) || O.same(k) && O.isParent()) ? e.findCompoundLoopPoints(Q, j, Y, Ae) : O === k ? e.findLoopPoints(Q, j, Y, Ae) : ue.endsWith("segments") ? e.findSegmentsPoints(Q, j) : ue.endsWith("taxi") ? e.findTaxiPoints(Q, j) : ue === "straight" || !Ae && R.eles.length % 2 === 1 && Y === Math.floor(R.eles.length / 2) ? e.findStraightEdgePoints(Q) : e.findBezierPoints(Q, j, Y, Ae, we), e.findEndpoints(Q), e.tryToCorrectInvalidPoints(Q, j), e.checkForInvalidEdgeWarning(Q), e.storeAllpts(Q), e.storeEdgeProjections(Q), e.calculateArrowAngles(Q), e.recalculateEdgeLabelProjections(Q), e.calculateLabelAngles(Q);
      }
    }, w = 0; w < s.length; w++)
      S();
    this.findHaystackPoints(l);
  }
};
function Ic(t) {
  var e = [];
  if (t != null) {
    for (var r = 0; r < t.length; r += 2) {
      var a = t[r], n = t[r + 1];
      e.push({
        x: a,
        y: n
      });
    }
    return e;
  }
}
pt.getSegmentPoints = function(t) {
  var e = t[0]._private.rscratch;
  this.recalculateRenderedStyle(t);
  var r = e.edgeType;
  if (r === "segments")
    return Ic(e.segpts);
};
pt.getControlPoints = function(t) {
  var e = t[0]._private.rscratch;
  this.recalculateRenderedStyle(t);
  var r = e.edgeType;
  if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound")
    return Ic(e.ctrlpts);
};
pt.getEdgeMidpoint = function(t) {
  var e = t[0]._private.rscratch;
  return this.recalculateRenderedStyle(t), {
    x: e.midX,
    y: e.midY
  };
};
var Ha = {};
Ha.manualEndptToPx = function(t, e) {
  var r = this, a = t.position(), n = t.outerWidth(), i = t.outerHeight(), o = t._private.rscratch;
  if (e.value.length === 2) {
    var s = [e.pfValue[0], e.pfValue[1]];
    return e.units[0] === "%" && (s[0] = s[0] * n), e.units[1] === "%" && (s[1] = s[1] * i), s[0] += a.x, s[1] += a.y, s;
  } else {
    var l = e.pfValue[0];
    l = -Math.PI / 2 + l;
    var u = 2 * Math.max(n, i), v = [a.x + Math.cos(l) * u, a.y + Math.sin(l) * u];
    return r.nodeShapes[this.getNodeShape(t)].intersectLine(a.x, a.y, n, i, v[0], v[1], 0, t.pstyle("corner-radius").value === "auto" ? "auto" : t.pstyle("corner-radius").pfValue, o);
  }
};
Ha.findEndpoints = function(t) {
  var e, r, a, n, i = this, o, s = t.source()[0], l = t.target()[0], u = s.position(), v = l.position(), c = t.pstyle("target-arrow-shape").value, f = t.pstyle("source-arrow-shape").value, h = t.pstyle("target-distance-from-node").pfValue, d = t.pstyle("source-distance-from-node").pfValue, g = s._private.rscratch, p = l._private.rscratch, y = t.pstyle("curve-style").value, b = t._private.rscratch, m = b.edgeType, E = nr(y, "taxi"), T = m === "self" || m === "compound", S = m === "bezier" || m === "multibezier" || T, w = m !== "bezier", x = m === "straight" || m === "segments", C = m === "segments", D = S || w || x, A = T || E, L = t.pstyle("source-endpoint"), R = A ? "outside-to-node" : L.value, M = s.pstyle("corner-radius").value === "auto" ? "auto" : s.pstyle("corner-radius").pfValue, P = t.pstyle("target-endpoint"), N = A ? "outside-to-node" : P.value, O = l.pstyle("corner-radius").value === "auto" ? "auto" : l.pstyle("corner-radius").pfValue;
  b.srcManEndpt = L, b.tgtManEndpt = P;
  var k, F, _, B, G = (e = (P == null || (r = P.pfValue) === null || r === void 0 ? void 0 : r.length) === 2 ? P.pfValue : null) !== null && e !== void 0 ? e : [0, 0], H = (a = (L == null || (n = L.pfValue) === null || n === void 0 ? void 0 : n.length) === 2 ? L.pfValue : null) !== null && a !== void 0 ? a : [0, 0];
  if (S) {
    var X = [b.ctrlpts[0], b.ctrlpts[1]], $ = w ? [b.ctrlpts[b.ctrlpts.length - 2], b.ctrlpts[b.ctrlpts.length - 1]] : X;
    k = $, F = X;
  } else if (x) {
    var K = C ? b.segpts.slice(0, 2) : [v.x + G[0], v.y + G[1]], ee = C ? b.segpts.slice(b.segpts.length - 2) : [u.x + H[0], u.y + H[1]];
    k = ee, F = K;
  }
  if (N === "inside-to-node")
    o = [v.x, v.y];
  else if (P.units)
    o = this.manualEndptToPx(l, P);
  else if (N === "outside-to-line")
    o = b.tgtIntn;
  else if (N === "outside-to-node" || N === "outside-to-node-or-label" ? _ = k : (N === "outside-to-line" || N === "outside-to-line-or-label") && (_ = [u.x, u.y]), o = i.nodeShapes[this.getNodeShape(l)].intersectLine(v.x, v.y, l.outerWidth(), l.outerHeight(), _[0], _[1], 0, O, p), N === "outside-to-node-or-label" || N === "outside-to-line-or-label") {
    var ae = l._private.rscratch, Z = ae.labelWidth, V = ae.labelHeight, q = ae.labelX, Y = ae.labelY, Q = Z / 2, re = V / 2, ue = l.pstyle("text-valign").value;
    ue = aa(ue), ue === "top" ? Y -= re : ue === "bottom" && (Y += re);
    var Ae = l.pstyle("text-halign").value;
    Ae = ra(Ae), Ae === "left" ? q -= Q : Ae === "right" && (q += Q);
    var we = Ia(_[0], _[1], [q - Q, Y - re, q + Q, Y - re, q + Q, Y + re, q - Q, Y + re], v.x, v.y);
    if (we.length > 0) {
      var me = u, ge = Cr(me, Xr(o)), oe = Cr(me, Xr(we)), he = ge;
      if (oe < ge && (o = we, he = oe), we.length > 2) {
        var fe = Cr(me, {
          x: we[2],
          y: we[3]
        });
        fe < he && (o = [we[2], we[3]]);
      }
    }
  }
  var Ee = ja(o, k, i.arrowShapes[c].spacing(t) + h), be = ja(o, k, i.arrowShapes[c].gap(t) + h);
  if (b.endX = be[0], b.endY = be[1], b.arrowEndX = Ee[0], b.arrowEndY = Ee[1], R === "inside-to-node")
    o = [u.x, u.y];
  else if (L.units)
    o = this.manualEndptToPx(s, L);
  else if (R === "outside-to-line")
    o = b.srcIntn;
  else if (R === "outside-to-node" || R === "outside-to-node-or-label" ? B = F : (R === "outside-to-line" || R === "outside-to-line-or-label") && (B = [v.x, v.y]), o = i.nodeShapes[this.getNodeShape(s)].intersectLine(u.x, u.y, s.outerWidth(), s.outerHeight(), B[0], B[1], 0, M, g), R === "outside-to-node-or-label" || R === "outside-to-line-or-label") {
    var De = s._private.rscratch, Le = De.labelWidth, Ne = De.labelHeight, Oe = De.labelX, Ie = De.labelY, j = Le / 2, I = Ne / 2, z = s.pstyle("text-valign").value;
    z = aa(z), z === "top" ? Ie -= I : z === "bottom" && (Ie += I);
    var U = s.pstyle("text-halign").value;
    U = ra(U), U === "left" ? Oe -= j : U === "right" && (Oe += j);
    var W = Ia(B[0], B[1], [Oe - j, Ie - I, Oe + j, Ie - I, Oe + j, Ie + I, Oe - j, Ie + I], u.x, u.y);
    if (W.length > 0) {
      var J = v, ve = Cr(J, Xr(o)), te = Cr(J, Xr(W)), ie = ve;
      if (te < ve && (o = [W[0], W[1]], ie = te), W.length > 2) {
        var se = Cr(J, {
          x: W[2],
          y: W[3]
        });
        se < ie && (o = [W[2], W[3]]);
      }
    }
  }
  var pe = ja(o, F, i.arrowShapes[f].spacing(t) + d), xe = ja(o, F, i.arrowShapes[f].gap(t) + d);
  b.startX = xe[0], b.startY = xe[1], b.arrowStartX = pe[0], b.arrowStartY = pe[1], D && (!ne(b.startX) || !ne(b.startY) || !ne(b.endX) || !ne(b.endY) ? b.badLine = !0 : b.badLine = !1);
};
Ha.getSourceEndpoint = function(t) {
  var e = t[0]._private.rscratch;
  return this.recalculateRenderedStyle(t), e.edgeType === "haystack" ? {
    x: e.haystackPts[0],
    y: e.haystackPts[1]
  } : {
    x: e.arrowStartX,
    y: e.arrowStartY
  };
};
Ha.getTargetEndpoint = function(t) {
  var e = t[0]._private.rscratch;
  return this.recalculateRenderedStyle(t), e.edgeType === "haystack" ? {
    x: e.haystackPts[2],
    y: e.haystackPts[3]
  } : {
    x: e.arrowEndX,
    y: e.arrowEndY
  };
};
var As = {};
function Ry(t, e, r) {
  for (var a = function(u, v, c, f) {
    return it(u, v, c, f);
  }, n = e._private, i = n.rstyle.bezierPts, o = 0; o < t.bezierProjPcts.length; o++) {
    var s = t.bezierProjPcts[o];
    i.push({
      x: a(r[0], r[2], r[4], s),
      y: a(r[1], r[3], r[5], s)
    });
  }
}
As.storeEdgeProjections = function(t) {
  var e = t._private, r = e.rscratch, a = r.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < r.allpts.length; n += 4)
      Ry(this, t, r.allpts.slice(n, n + 6));
  } else if (a === "segments")
    for (var i = e.rstyle.linePts = [], n = 0; n + 1 < r.allpts.length; n += 2)
      i.push({
        x: r.allpts[n],
        y: r.allpts[n + 1]
      });
  else if (a === "haystack") {
    var o = r.haystackPts;
    e.rstyle.haystackPts = [{
      x: o[0],
      y: o[1]
    }, {
      x: o[2],
      y: o[3]
    }];
  }
  e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
As.recalculateEdgeProjections = function(t) {
  this.findEdgeControlPoints(t);
};
var Ht = {};
Ht.recalculateNodeLabelProjection = function(t) {
  var e = t.pstyle("label").strValue;
  if (!ur(e)) {
    var r, a, n = t._private, i = t.width(), o = t.height(), s = t.padding(), l = t.position(), u = t.pstyle("text-halign").strValue, v = t.pstyle("text-valign").strValue, c = n.rscratch, f = n.rstyle;
    switch (u) {
      case "left":
        r = l.x - i / 2 - s;
        break;
      case "left-inside":
        r = l.x - i / 2 + s;
        break;
      case "right":
        r = l.x + i / 2 + s;
        break;
      case "right-inside":
        r = l.x + i / 2 - s;
        break;
      default:
        r = l.x;
    }
    switch (v) {
      case "top":
        a = l.y - o / 2 - s;
        break;
      case "top-inside":
        a = l.y - o / 2 + s;
        break;
      case "bottom":
        a = l.y + o / 2 + s;
        break;
      case "bottom-inside":
        a = l.y + o / 2 - s;
        break;
      default:
        a = l.y;
    }
    c.labelX = r, c.labelY = a, f.labelX = r, f.labelY = a, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
  }
};
var Mc = function(e, r) {
  var a = Math.atan(r / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, Pc = function(e, r) {
  var a = r.x - e.x, n = r.y - e.y;
  return Mc(a, n);
}, Iy = function(e, r, a, n) {
  var i = Ra(0, n - 1e-3, 1), o = Ra(0, n + 1e-3, 1), s = Kr(e, r, a, i), l = Kr(e, r, a, o);
  return Pc(s, l);
};
Ht.recalculateEdgeLabelProjections = function(t) {
  var e, r = t._private, a = r.rscratch, n = this, i = {
    mid: t.pstyle("label").strValue,
    source: t.pstyle("source-label").strValue,
    target: t.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    e = {
      x: a.midX,
      y: a.midY
    };
    var o = function(c, f, h) {
      Ut(r.rscratch, c, f, h), Ut(r.rstyle, c, f, h);
    };
    o("labelX", null, e.x), o("labelY", null, e.y);
    var s = Mc(a.midDispX, a.midDispY);
    o("labelAutoAngle", null, s);
    var l = function() {
      if (l.cache)
        return l.cache;
      for (var c = [], f = 0; f + 5 < a.allpts.length; f += 4) {
        var h = {
          x: a.allpts[f],
          y: a.allpts[f + 1]
        }, d = {
          x: a.allpts[f + 2],
          y: a.allpts[f + 3]
        }, g = {
          x: a.allpts[f + 4],
          y: a.allpts[f + 5]
        };
        c.push({
          p0: h,
          p1: d,
          p2: g,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var p = r.rstyle.bezierPts, y = n.bezierProjPcts.length;
      function b(w, x, C, D, A) {
        var L = Ir(x, C), R = w.segments[w.segments.length - 1], M = {
          p0: x,
          p1: C,
          t0: D,
          t1: A,
          startDist: R ? R.startDist + R.length : 0,
          length: L
        };
        w.segments.push(M), w.length += L;
      }
      for (var m = 0; m < c.length; m++) {
        var E = c[m], T = c[m - 1];
        T && (E.startDist = T.startDist + T.length), b(E, E.p0, p[m * y], 0, n.bezierProjPcts[0]);
        for (var S = 0; S < y - 1; S++)
          b(E, p[m * y + S], p[m * y + S + 1], n.bezierProjPcts[S], n.bezierProjPcts[S + 1]);
        b(E, p[m * y + y - 1], E.p2, n.bezierProjPcts[y - 1], 1);
      }
      return l.cache = c;
    }, u = function(c) {
      var f, h = c === "source";
      if (i[c]) {
        var d = t.pstyle(c + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var g = l(), p, y = 0, b = 0, m = 0; m < g.length; m++) {
              for (var E = g[h ? m : g.length - 1 - m], T = 0; T < E.segments.length; T++) {
                var S = E.segments[h ? T : E.segments.length - 1 - T], w = m === g.length - 1 && T === E.segments.length - 1;
                if (y = b, b += S.length, b >= d || w) {
                  p = {
                    cp: E,
                    segment: S
                  };
                  break;
                }
              }
              if (p)
                break;
            }
            var x = p.cp, C = p.segment, D = (d - y) / C.length, A = C.t1 - C.t0, L = h ? C.t0 + A * D : C.t1 - A * D;
            L = Ra(0, L, 1), e = Kr(x.p0, x.p1, x.p2, L), f = Iy(x.p0, x.p1, x.p2, L);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var R = 0, M, P, N, O, k = a.allpts.length, F = 0; F + 3 < k && (h ? (N = {
              x: a.allpts[F],
              y: a.allpts[F + 1]
            }, O = {
              x: a.allpts[F + 2],
              y: a.allpts[F + 3]
            }) : (N = {
              x: a.allpts[k - 2 - F],
              y: a.allpts[k - 1 - F]
            }, O = {
              x: a.allpts[k - 4 - F],
              y: a.allpts[k - 3 - F]
            }), M = Ir(N, O), P = R, R += M, !(R >= d)); F += 2)
              ;
            var _ = d - P, B = _ / M;
            B = Ra(0, B, 1), e = Qh(N, O, B), f = Pc(N, O);
            break;
          }
        }
        o("labelX", c, e.x), o("labelY", c, e.y), o("labelAutoAngle", c, f);
      }
    };
    u("source"), u("target"), this.applyLabelDimensions(t);
  }
};
Ht.applyLabelDimensions = function(t) {
  this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
};
Ht.applyPrefixedLabelDimensions = function(t, e) {
  var r = t._private, a = this.getLabelText(t, e), n = Rr(a, t._private.labelDimsKey);
  if (mt(r.rscratch, "prefixedLabelDimsKey", e) !== n) {
    Ut(r.rscratch, "prefixedLabelDimsKey", e, n);
    var i = this.calculateLabelDimensions(t, a), o = t.pstyle("line-height").pfValue, s = t.pstyle("font-size").pfValue, l = t.pstyle("text-wrap").strValue, u = mt(r.rscratch, "labelWrapCachedLines", e) || [], v = l !== "wrap" ? 1 : Math.max(u.length, 1), c = s * o, f = i.width, h = i.height + (v - 1) * (o - 1) * s;
    Ut(r.rstyle, "labelWidth", e, f), Ut(r.rscratch, "labelWidth", e, f), Ut(r.rstyle, "labelHeight", e, h), Ut(r.rscratch, "labelHeight", e, h), Ut(r.rscratch, "labelLineHeight", e, c), Ut(r.rscratch, "labelActualDescent", e, i.labelActualDescent);
  }
};
Ht.getLabelText = function(t, e) {
  var r = t._private, a = e ? e + "-" : "", n = t.pstyle(a + "label").strValue, i = t.pstyle("text-transform").value, o = function(H, X) {
    return X ? (Ut(r.rscratch, H, e, X), X) : mt(r.rscratch, H, e);
  };
  if (!n)
    return "";
  i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
  var s = t.pstyle("text-wrap").value;
  if (s === "wrap") {
    var l = o("labelKey");
    if (l != null && o("labelWrapKey") === l)
      return o("labelWrapCachedText");
    for (var u = "​", v = n.split(`
`), c = t.pstyle("text-max-width").pfValue, f = t.pstyle("text-overflow-wrap").value, h = f === "anywhere", d = [], g = /[\s\u200b]+|$/g, p = 0; p < v.length; p++) {
      var y = v[p], b = this.calculateLabelDimensions(t, y), m = b.width;
      if (h) {
        var E = y.split("").join(u);
        y = E;
      }
      if (m > c) {
        var T = y.matchAll(g), S = "", w = 0, x = Ct(T), C;
        try {
          for (x.s(); !(C = x.n()).done; ) {
            var D = C.value, A = D[0], L = y.substring(w, D.index);
            w = D.index + A.length;
            var R = S.length === 0 ? L : S + L + A, M = this.calculateLabelDimensions(t, R), P = M.width;
            P <= c ? S += L + A : (S && d.push(S), S = L + A);
          }
        } catch (G) {
          x.e(G);
        } finally {
          x.f();
        }
        S.match(/^[\s\u200b]+$/) || d.push(S);
      } else
        d.push(y);
    }
    o("labelWrapCachedLines", d), n = o("labelWrapCachedText", d.join(`
`)), o("labelWrapKey", l);
  } else if (s === "ellipsis") {
    var N = t.pstyle("text-max-width").pfValue, O = "", k = "…", F = !1;
    if (this.calculateLabelDimensions(t, n).width < N)
      return n;
    for (var _ = 0; _ < n.length; _++) {
      var B = this.calculateLabelDimensions(t, O + n[_] + k).width;
      if (B > N)
        break;
      O += n[_], _ === n.length - 1 && (F = !0);
    }
    return F || (O += k), O;
  }
  return n;
};
Ht.getLabelJustification = function(t) {
  var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
  return e === "auto" ? t.isNode() ? yp(r) : "center" : e;
};
Ht.calculateLabelDimensions = function(t, e) {
  var r = this, a = r.cy.window(), n = a.document, i = 0, o = t.pstyle("font-style").strValue, s = t.pstyle("font-size").pfValue, l = t.pstyle("font-family").strValue, u = t.pstyle("font-weight").strValue, v = t.pstyle("text-metrics").strValue || "font", c = this.labelCalcCanvas, f = this.labelCalcCanvasContext;
  if (!c) {
    c = this.labelCalcCanvas = n.createElement("canvas"), f = this.labelCalcCanvasContext = c.getContext("2d");
    var h = c.style;
    h.position = "absolute", h.left = "-9999px", h.top = "-9999px", h.zIndex = "-1", h.visibility = "hidden", h.pointerEvents = "none";
  }
  f.font = "".concat(o, " ").concat(u, " ").concat(s, "px ").concat(l);
  for (var d = 0, g = 0, p = e.split(`
`), y = p.length, b = 0, m = 0, E = 0; E < y; E++) {
    var T = p[E], S = f.measureText(T), w = Math.ceil(S.width), x = s;
    v === "glyph" && (E === 0 && (m = S.actualBoundingBoxAscent), E === y - 1 && (b = S.actualBoundingBoxDescent)), d = Math.max(w, d), g += x;
  }
  return v === "glyph" && (g -= s - m - b), d += i, g += i, {
    width: d,
    height: g,
    labelActualAscent: m,
    labelActualDescent: b
  };
};
Ht.calculateLabelAngle = function(t, e) {
  var r = t._private, a = r.rscratch, n = t.isEdge(), i = e ? e + "-" : "", o = t.pstyle(i + "text-rotation"), s = o.strValue;
  return s === "none" ? 0 : n && s === "autorotate" ? a.labelAutoAngle : s === "autorotate" ? 0 : o.pfValue;
};
Ht.calculateLabelAngles = function(t) {
  var e = this, r = t.isEdge(), a = t._private, n = a.rscratch;
  n.labelAngle = e.calculateLabelAngle(t), r && (n.sourceLabelAngle = e.calculateLabelAngle(t, "source"), n.targetLabelAngle = e.calculateLabelAngle(t, "target"));
};
var Oc = {}, Yu = 28, Hu = !1;
Oc.getNodeShape = function(t) {
  var e = this, r = t.pstyle("shape").value;
  if (r === "cutrectangle" && (t.width() < Yu || t.height() < Yu))
    return Hu || (Fe("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Hu = !0), "rectangle";
  if (t.isParent())
    return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
  if (r === "polygon") {
    var a = t.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return r;
};
var ri = {};
ri.registerCalculationListeners = function() {
  var t = this.cy, e = t.collection(), r = this, a = function(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (e.merge(o), s)
      for (var l = 0; l < o.length; l++) {
        var u = o[l], v = u._private, c = v.rstyle;
        c.clean = !1, c.cleanConnected = !1;
      }
  };
  r.binder(t).on("bounds.* dirty.*", function(o) {
    var s = o.target;
    a(s);
  }).on("style.* background.*", function(o) {
    var s = o.target;
    a(s, !1);
  });
  var n = function(o) {
    if (o) {
      var s = r.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var l = 0; l < e.length; l++) {
        var u = e[l], v = u._private.rstyle;
        u.isNode() && !v.cleanConnected && (a(u.connectedEdges()), v.cleanConnected = !0);
      }
      if (s)
        for (var c = 0; c < s.length; c++) {
          var f = s[c];
          f(o, e);
        }
      r.recalculateRenderedStyle(e), e = t.collection();
    }
  };
  r.flushRenderedStyleQueue = function() {
    n(!0);
  }, r.beforeRender(n, r.beforeRenderPriorities.eleCalcs);
};
ri.onUpdateEleCalcs = function(t) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(t);
};
ri.recalculateRenderedStyle = function(t, e) {
  var r = function(E) {
    return E._private.rstyle.cleanConnected;
  };
  if (t.length !== 0) {
    var a = [], n = [];
    if (!this.destroyed) {
      e === void 0 && (e = !0);
      for (var i = 0; i < t.length; i++) {
        var o = t[i], s = o._private, l = s.rstyle;
        o.isEdge() && (!r(o.source()) || !r(o.target())) && (l.clean = !1), o.isEdge() && o.isBundledBezier() && o.parallelEdges().some(function(m) {
          return !m._private.rstyle.clean && m.isBundledBezier();
        }) && (l.clean = !1), !(e && l.clean || o.removed()) && o.pstyle("display").value !== "none" && (s.group === "nodes" ? n.push(o) : a.push(o), l.clean = !0);
      }
      for (var u = 0; u < n.length; u++) {
        var v = n[u], c = v._private, f = c.rstyle, h = v.position();
        this.recalculateNodeLabelProjection(v), f.nodeX = h.x, f.nodeY = h.y, f.nodeW = v.pstyle("width").pfValue, f.nodeH = v.pstyle("height").pfValue;
      }
      this.recalculateEdgeProjections(a);
      for (var d = 0; d < a.length; d++) {
        var g = a[d], p = g._private, y = p.rstyle, b = p.rscratch;
        y.srcX = b.arrowStartX, y.srcY = b.arrowStartY, y.tgtX = b.arrowEndX, y.tgtY = b.arrowEndY, y.midX = b.midX, y.midY = b.midY, y.labelAngle = b.labelAngle, y.sourceLabelAngle = b.sourceLabelAngle, y.targetLabelAngle = b.targetLabelAngle;
      }
    }
  }
};
var ai = {};
ai.updateCachedGrabbedEles = function() {
  var t = this.cachedZSortedEles;
  if (t) {
    t.drag = [], t.nondrag = [];
    for (var e = [], r = 0; r < t.length; r++) {
      var a = t[r], n = a._private.rscratch;
      a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? t.drag.push(a) : t.nondrag.push(a);
    }
    for (var r = 0; r < e.length; r++) {
      var a = e[r];
      t.drag.push(a);
    }
  }
};
ai.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
ai.getCachedZSortedEles = function(t) {
  if (t || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(dc), e.interactive = e.filter(function(r) {
      return r.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var kc = {};
[Nr, Bn, pt, Ha, As, Ht, Oc, ri, ai].forEach(function(t) {
  ye(kc, t);
});
var Nc = {};
Nc.getCachedImage = function(t, e, r) {
  var a = this, n = a.imageCache = a.imageCache || {}, i = n[t];
  if (i)
    return i.image.complete || i.image.addEventListener("load", r), i.image;
  i = n[t] = n[t] || {};
  var o = i.image = new Image();
  o.addEventListener("load", r), o.addEventListener("error", function() {
    o.error = !0;
  });
  var s = "data:", l = t.substring(0, s.length).toLowerCase() === s;
  return l || (e = e === "null" ? null : e, o.crossOrigin = e), o.src = t, o;
};
var Bc = function(e, r) {
  var a = e[0];
  !a || a._private.grabbed === r || (a._private.grabbed = r, e.updateStyle(!1));
}, My = function(e) {
  Bc(e, !0);
}, Py = function(e) {
  Bc(e, !1);
}, la = {};
la.registerBinding = function(t, e, r, a) {
  var n = Array.prototype.slice.apply(arguments, [1]);
  if (Array.isArray(t)) {
    for (var i = [], o = 0; o < t.length; o++) {
      var s = t[o];
      if (s !== void 0) {
        var l = this.binder(s);
        i.push(l.on.apply(l, n));
      }
    }
    return i;
  }
  var l = this.binder(t);
  return l.on.apply(l, n);
};
la.binder = function(t) {
  var e = this, r = e.cy.window(), a = t === r || t === r.document || t === r.document.body || Vf(t);
  if (e.supportsPassiveEvents == null) {
    var n = !1;
    try {
      var i = Object.defineProperty({}, "passive", {
        get: function() {
          return n = !0, !0;
        }
      });
      r.addEventListener("test", null, i);
    } catch {
    }
    e.supportsPassiveEvents = n;
  }
  var o = function(l, u, v) {
    var c = Array.prototype.slice.call(arguments);
    return a && e.supportsPassiveEvents && (c[2] = {
      capture: v ?? !1,
      passive: !1,
      once: !1
    }), e.bindings.push({
      target: t,
      args: c
    }), (t.addEventListener || t.on).apply(t, c), this;
  };
  return {
    on: o,
    addEventListener: o,
    addListener: o,
    bind: o
  };
};
la.nodeIsDraggable = function(t) {
  return t && t.isNode() && !t.locked() && t.grabbable();
};
la.nodeIsGrabbable = function(t) {
  return this.nodeIsDraggable(t) && t.interactive();
};
la.load = function() {
  var t = this, e = t.cy.window(), r = function(I) {
    return I.selected();
  }, a = function(I) {
    var z = I.getRootNode();
    if (z && z.nodeType === 11 && z.host !== void 0)
      return z;
  }, n = function(I, z, U, W) {
    I == null && (I = t.cy);
    for (var J = 0; J < z.length; J++) {
      var ve = z[J];
      I.emit({
        originalEvent: U,
        type: ve,
        position: W
      });
    }
  }, i = function(I) {
    return I.shiftKey || I.metaKey || I.ctrlKey;
  }, o = function(I, z) {
    var U = !0;
    if (t.cy.hasCompoundNodes() && I && I.pannable())
      for (var W = 0; z && W < z.length; W++) {
        var I = z[W];
        if (I.isNode() && I.isParent() && !I.pannable()) {
          U = !1;
          break;
        }
      }
    else
      U = !0;
    return U;
  }, s = function(I) {
    I[0]._private.rscratch.inDragLayer = !0;
  }, l = function(I) {
    I[0]._private.rscratch.inDragLayer = !1;
  }, u = function(I) {
    I[0]._private.rscratch.isGrabTarget = !0;
  }, v = function(I) {
    I[0]._private.rscratch.isGrabTarget = !1;
  }, c = function(I, z) {
    var U = z.addToList, W = U.has(I);
    !W && I.grabbable() && !I.locked() && (U.merge(I), My(I));
  }, f = function(I, z) {
    if (I.cy().hasCompoundNodes() && !(z.inDragLayer == null && z.addToList == null)) {
      var U = I.descendants();
      z.inDragLayer && (U.forEach(s), U.connectedEdges().forEach(s)), z.addToList && c(U, z);
    }
  }, h = function(I, z) {
    z = z || {};
    var U = I.cy().hasCompoundNodes();
    z.inDragLayer && (I.forEach(s), I.neighborhood().stdFilter(function(W) {
      return !U || W.isEdge();
    }).forEach(s)), z.addToList && I.forEach(function(W) {
      c(W, z);
    }), f(I, z), p(I, {
      inDragLayer: z.inDragLayer
    }), t.updateCachedGrabbedEles();
  }, d = h, g = function(I) {
    I && (t.getCachedZSortedEles().forEach(function(z) {
      Py(z), l(z), v(z);
    }), t.updateCachedGrabbedEles());
  }, p = function(I, z) {
    if (!(z.inDragLayer == null && z.addToList == null) && I.cy().hasCompoundNodes()) {
      var U = I.ancestors().orphans();
      if (!U.same(I)) {
        var W = U.descendants().spawnSelf().merge(U).unmerge(I).unmerge(I.descendants()), J = W.connectedEdges();
        z.inDragLayer && (J.forEach(s), W.forEach(s)), z.addToList && W.forEach(function(ve) {
          c(ve, z);
        });
      }
    }
  }, y = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, b = typeof MutationObserver < "u", m = typeof ResizeObserver < "u";
  b ? (t.removeObserver = new MutationObserver(function(j) {
    for (var I = 0; I < j.length; I++) {
      var z = j[I], U = z.removedNodes;
      if (U)
        for (var W = 0; W < U.length; W++) {
          var J = U[W];
          if (J === t.container) {
            t.destroy();
            break;
          }
        }
    }
  }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
    childList: !0
  })) : t.registerBinding(t.container, "DOMNodeRemoved", function(j) {
    t.destroy();
  });
  var E = Va(function() {
    t.cy.resize();
  }, 100);
  b && (t.styleObserver = new MutationObserver(E), t.styleObserver.observe(t.container, {
    attributes: !0
  })), t.registerBinding(e, "resize", E), m && (t.resizeObserver = new ResizeObserver(E), t.resizeObserver.observe(t.container));
  var T = function(I, z) {
    for (; I != null; )
      z(I), I = I.parentNode;
  }, S = function() {
    t.invalidateContainerClientCoordsCache();
  };
  T(t.container, function(j) {
    t.registerBinding(j, "transitionend", S), t.registerBinding(j, "animationend", S), t.registerBinding(j, "scroll", S);
  }), t.registerBinding(t.container, "contextmenu", function(j) {
    j.preventDefault();
  });
  var w = function() {
    return t.selection[4] !== 0;
  }, x = function(I) {
    for (var z = t.findContainerClientCoords(), U = z[0], W = z[1], J = z[2], ve = z[3], te = I.touches ? I.touches : [I], ie = !1, se = 0; se < te.length; se++) {
      var pe = te[se];
      if (U <= pe.clientX && pe.clientX <= U + J && W <= pe.clientY && pe.clientY <= W + ve) {
        ie = !0;
        break;
      }
    }
    if (!ie)
      return !1;
    for (var xe = t.container, Te = I.target, ce = Te.parentNode, Se = !1; ce; ) {
      if (ce === xe) {
        Se = !0;
        break;
      }
      ce = ce.parentNode;
    }
    return !!Se;
  };
  t.registerBinding(t.container, "mousedown", function(I) {
    if (x(I) && !(t.hoverData.which === 1 && I.which !== 1)) {
      I.preventDefault(), y(), t.hoverData.capture = !0, t.hoverData.which = I.which;
      var z = t.cy, U = [I.clientX, I.clientY], W = t.projectIntoViewport(U[0], U[1]), J = t.selection, ve = t.findNearestElements(W[0], W[1], !0, !1), te = ve[0], ie = t.dragData.possibleDragElements;
      t.hoverData.mdownPos = W, t.hoverData.mdownGPos = U;
      var se = function(Re) {
        return {
          originalEvent: I,
          type: Re,
          position: {
            x: W[0],
            y: W[1]
          }
        };
      }, pe = function() {
        t.hoverData.tapholdCancelled = !1, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = setTimeout(function() {
          if (!t.hoverData.tapholdCancelled) {
            var Re = t.hoverData.down;
            Re ? Re.emit(se("taphold")) : z.emit(se("taphold"));
          }
        }, t.tapholdDuration);
      };
      if (I.which == 3) {
        t.hoverData.cxtStarted = !0;
        var xe = {
          originalEvent: I,
          type: "cxttapstart",
          position: {
            x: W[0],
            y: W[1]
          }
        };
        te ? (te.activate(), te.emit(xe), t.hoverData.down = te) : z.emit(xe), t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), t.hoverData.cxtDragged = !1;
      } else if (I.which == 1) {
        te && te.activate();
        {
          if (te != null && t.nodeIsGrabbable(te)) {
            var Te = function(Re) {
              Re.emit(se("grab"));
            };
            if (u(te), !te.selected())
              ie = t.dragData.possibleDragElements = z.collection(), d(te, {
                addToList: ie
              }), te.emit(se("grabon")).emit(se("grab"));
            else {
              ie = t.dragData.possibleDragElements = z.collection();
              var ce = z.$(function(Se) {
                return Se.isNode() && Se.selected() && t.nodeIsGrabbable(Se);
              });
              h(ce, {
                addToList: ie
              }), te.emit(se("grabon")), ce.forEach(Te);
            }
            t.redrawHint("eles", !0), t.redrawHint("drag", !0);
          }
          t.hoverData.down = te, t.hoverData.downs = ve, t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
        }
        n(te, ["mousedown", "tapstart", "vmousedown"], I, {
          x: W[0],
          y: W[1]
        }), te == null ? (J[4] = 1, t.data.bgActivePosistion = {
          x: W[0],
          y: W[1]
        }, t.redrawHint("select", !0), t.redraw()) : te.pannable() && (J[4] = 1), pe();
      }
      J[0] = J[2] = W[0], J[1] = J[3] = W[1];
    }
  }, !1);
  var C = a(t.container);
  t.registerBinding([e, C], "mousemove", function(I) {
    var z = t.hoverData.capture;
    if (!(!z && !x(I))) {
      var U = !1, W = t.cy, J = W.zoom(), ve = [I.clientX, I.clientY], te = t.projectIntoViewport(ve[0], ve[1]), ie = t.hoverData.mdownPos, se = t.hoverData.mdownGPos, pe = t.selection, xe = null;
      !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (xe = t.findNearestElement(te[0], te[1], !0, !1));
      var Te = t.hoverData.last, ce = t.hoverData.down, Se = [te[0] - pe[2], te[1] - pe[3]], Re = t.dragData.possibleDragElements, nt;
      if (se) {
        var Xe = ve[0] - se[0], It = Xe * Xe, $e = ve[1] - se[1], Ke = $e * $e, Je = It + Ke;
        t.hoverData.isOverThresholdDrag = nt = Je >= t.desktopTapThreshold2;
      }
      var lt = i(I);
      nt && (t.hoverData.tapholdCancelled = !0);
      var _t = function() {
        var St = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
        St.length === 0 ? (St.push(Se[0]), St.push(Se[1])) : (St[0] += Se[0], St[1] += Se[1]);
      };
      U = !0, n(xe, ["mousemove", "vmousemove", "tapdrag"], I, {
        x: te[0],
        y: te[1]
      });
      var Ye = function(St) {
        return {
          originalEvent: I,
          type: St,
          position: {
            x: te[0],
            y: te[1]
          }
        };
      }, $t = function() {
        t.data.bgActivePosistion = void 0, t.hoverData.selecting || W.emit(Ye("boxstart")), pe[4] = 1, t.hoverData.selecting = !0, t.redrawHint("select", !0), t.redraw();
      };
      if (t.hoverData.which === 3) {
        if (nt) {
          var Mt = Ye("cxtdrag");
          ce ? ce.emit(Mt) : W.emit(Mt), t.hoverData.cxtDragged = !0, (!t.hoverData.cxtOver || xe !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit(Ye("cxtdragout")), t.hoverData.cxtOver = xe, xe && xe.emit(Ye("cxtdragover")));
        }
      } else if (t.hoverData.dragging) {
        if (U = !0, W.panningEnabled() && W.userPanningEnabled()) {
          var er;
          if (t.hoverData.justStartedPan) {
            var Wa = t.hoverData.mdownPos;
            er = {
              x: (te[0] - Wa[0]) * J,
              y: (te[1] - Wa[1]) * J
            }, t.hoverData.justStartedPan = !1;
          } else
            er = {
              x: Se[0] * J,
              y: Se[1] * J
            };
          W.panBy(er), W.emit(Ye("dragpan")), t.hoverData.dragged = !0;
        }
        te = t.projectIntoViewport(I.clientX, I.clientY);
      } else if (pe[4] == 1 && (ce == null || ce.pannable())) {
        if (nt) {
          if (!t.hoverData.dragging && W.boxSelectionEnabled() && (lt || !W.panningEnabled() || !W.userPanningEnabled()))
            $t();
          else if (!t.hoverData.selecting && W.panningEnabled() && W.userPanningEnabled()) {
            var Er = o(ce, t.hoverData.downs);
            Er && (t.hoverData.dragging = !0, t.hoverData.justStartedPan = !0, pe[4] = 0, t.data.bgActivePosistion = Xr(ie), t.redrawHint("select", !0), t.redraw());
          }
          ce && ce.pannable() && ce.active() && ce.unactivate();
        }
      } else {
        if (ce && ce.pannable() && ce.active() && ce.unactivate(), (!ce || !ce.grabbed()) && xe != Te && (Te && n(Te, ["mouseout", "tapdragout"], I, {
          x: te[0],
          y: te[1]
        }), xe && n(xe, ["mouseover", "tapdragover"], I, {
          x: te[0],
          y: te[1]
        }), t.hoverData.last = xe), ce)
          if (nt) {
            if (W.boxSelectionEnabled() && lt)
              ce && ce.grabbed() && (g(Re), ce.emit(Ye("freeon")), Re.emit(Ye("free")), t.dragData.didDrag && (ce.emit(Ye("dragfreeon")), Re.emit(Ye("dragfree")))), $t();
            else if (ce && ce.grabbed() && t.nodeIsDraggable(ce)) {
              var Et = !t.dragData.didDrag;
              Et && t.redrawHint("eles", !0), t.dragData.didDrag = !0, t.hoverData.draggingEles || h(Re, {
                inDragLayer: !0
              });
              var ht = {
                x: 0,
                y: 0
              };
              if (ne(Se[0]) && ne(Se[1]) && (ht.x += Se[0], ht.y += Se[1], Et)) {
                var xt = t.hoverData.dragDelta;
                xt && ne(xt[0]) && ne(xt[1]) && (ht.x += xt[0], ht.y += xt[1]);
              }
              t.hoverData.draggingEles = !0, Re.silentShift(ht).emit(Ye("position")).emit(Ye("drag")), t.redrawHint("drag", !0), t.redraw();
            }
          } else
            _t();
        U = !0;
      }
      if (pe[2] = te[0], pe[3] = te[1], U)
        return I.stopPropagation && I.stopPropagation(), I.preventDefault && I.preventDefault(), !1;
    }
  }, !1);
  var D, A, L;
  t.registerBinding(e, "mouseup", function(I) {
    if (!(t.hoverData.which === 1 && I.which !== 1 && t.hoverData.capture)) {
      var z = t.hoverData.capture;
      if (z) {
        t.hoverData.capture = !1;
        var U = t.cy, W = t.projectIntoViewport(I.clientX, I.clientY), J = t.selection, ve = t.findNearestElement(W[0], W[1], !0, !1), te = t.dragData.possibleDragElements, ie = t.hoverData.down, se = i(I);
        t.data.bgActivePosistion && (t.redrawHint("select", !0), t.redraw()), t.hoverData.tapholdCancelled = !0, t.data.bgActivePosistion = void 0, ie && ie.unactivate();
        var pe = function(Xe) {
          return {
            originalEvent: I,
            type: Xe,
            position: {
              x: W[0],
              y: W[1]
            }
          };
        };
        if (t.hoverData.which === 3) {
          var xe = pe("cxttapend");
          if (ie ? ie.emit(xe) : U.emit(xe), !t.hoverData.cxtDragged) {
            var Te = pe("cxttap");
            ie ? ie.emit(Te) : U.emit(Te);
          }
          t.hoverData.cxtDragged = !1, t.hoverData.which = null;
        } else if (t.hoverData.which === 1) {
          if (n(ve, ["mouseup", "tapend", "vmouseup"], I, {
            x: W[0],
            y: W[1]
          }), !t.dragData.didDrag && // didn't move a node around
          !t.hoverData.dragged && // didn't pan
          !t.hoverData.selecting && // not box selection
          !t.hoverData.isOverThresholdDrag && (n(ie, ["click", "tap", "vclick"], I, {
            x: W[0],
            y: W[1]
          }), A = !1, I.timeStamp - L <= U.multiClickDebounceTime() ? (D && clearTimeout(D), A = !0, L = null, n(ie, ["dblclick", "dbltap", "vdblclick"], I, {
            x: W[0],
            y: W[1]
          })) : (D = setTimeout(function() {
            A || n(ie, ["oneclick", "onetap", "voneclick"], I, {
              x: W[0],
              y: W[1]
            });
          }, U.multiClickDebounceTime()), L = I.timeStamp)), ie == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !i(I) && (U.$(r).unselect(["tapunselect"]), te.length > 0 && t.redrawHint("eles", !0), t.dragData.possibleDragElements = te = U.collection()), ve == ie && !t.dragData.didDrag && !t.hoverData.selecting && ve != null && ve._private.selectable && (t.hoverData.dragging || (U.selectionType() === "additive" || se ? ve.selected() ? ve.unselect(["tapunselect"]) : ve.select(["tapselect"]) : se || (U.$(r).unmerge(ve).unselect(["tapunselect"]), ve.select(["tapselect"]))), t.redrawHint("eles", !0)), t.hoverData.selecting) {
            var ce = U.collection(t.getAllInBox(J[0], J[1], J[2], J[3]));
            t.redrawHint("select", !0), ce.length > 0 && t.redrawHint("eles", !0), U.emit(pe("boxend"));
            var Se = function(Xe) {
              return Xe.selectable() && !Xe.selected();
            };
            U.selectionType() === "additive" || se || U.$(r).unmerge(ce).unselect(), ce.emit(pe("box")).stdFilter(Se).select().emit(pe("boxselect")), t.redraw();
          }
          if (t.hoverData.dragging && (t.hoverData.dragging = !1, t.redrawHint("select", !0), t.redrawHint("eles", !0), t.redraw()), !J[4]) {
            t.redrawHint("drag", !0), t.redrawHint("eles", !0);
            var Re = ie && ie.grabbed();
            g(te), Re && (ie.emit(pe("freeon")), te.emit(pe("free")), t.dragData.didDrag && (ie.emit(pe("dragfreeon")), te.emit(pe("dragfree"))));
          }
        }
        J[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = !1, t.hoverData.draggingEles = !1, t.hoverData.selecting = !1, t.hoverData.isOverThresholdDrag = !1, t.dragData.didDrag = !1, t.hoverData.dragged = !1, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null, t.hoverData.which = null;
      }
    }
  }, !1);
  var R = [], M = 4, P, N = 1e5, O = function(I, z) {
    for (var U = 0; U < I.length; U++)
      if (I[U] % z !== 0)
        return !1;
    return !0;
  }, k = function(I) {
    for (var z = Math.abs(I[0]), U = 1; U < I.length; U++)
      if (Math.abs(I[U]) !== z)
        return !1;
    return !0;
  }, F = function(I) {
    var z = !1, U = I.deltaY;
    if (U == null && (I.wheelDeltaY != null ? U = I.wheelDeltaY / 4 : I.wheelDelta != null && (U = I.wheelDelta / 4)), U !== 0) {
      if (P == null)
        if (R.length >= M) {
          var W = R;
          if (P = O(W, 5), !P) {
            var J = Math.abs(W[0]);
            P = k(W) && J > 5;
          }
          if (P)
            for (var ve = 0; ve < W.length; ve++)
              N = Math.min(Math.abs(W[ve]), N);
        } else
          R.push(U), z = !0;
      else P && (N = Math.min(Math.abs(U), N));
      if (!t.scrollingPage) {
        var te = t.cy, ie = te.zoom(), se = te.pan(), pe = t.projectIntoViewport(I.clientX, I.clientY), xe = [pe[0] * ie + se.x, pe[1] * ie + se.y];
        if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || w()) {
          I.preventDefault();
          return;
        }
        if (te.panningEnabled() && te.userPanningEnabled() && te.zoomingEnabled() && te.userZoomingEnabled()) {
          I.preventDefault(), t.data.wheelZooming = !0, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = setTimeout(function() {
            t.data.wheelZooming = !1, t.redrawHint("eles", !0), t.redraw();
          }, 150);
          var Te;
          z && Math.abs(U) > 5 && (U = hs(U) * 5), Te = U / -250, P && (Te /= N, Te *= 3), Te = Te * t.wheelSensitivity;
          var ce = I.deltaMode === 1;
          ce && (Te *= 33);
          var Se = te.zoom() * Math.pow(10, Te);
          I.type === "gesturechange" && (Se = t.gestureStartZoom * I.scale), te.zoom({
            level: Se,
            renderedPosition: {
              x: xe[0],
              y: xe[1]
            }
          }), te.emit({
            type: I.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
            originalEvent: I,
            position: {
              x: pe[0],
              y: pe[1]
            }
          });
        }
      }
    }
  };
  t.registerBinding(t.container, "wheel", F, !0), t.registerBinding(e, "scroll", function(I) {
    t.scrollingPage = !0, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = setTimeout(function() {
      t.scrollingPage = !1;
    }, 250);
  }, !0), t.registerBinding(t.container, "gesturestart", function(I) {
    t.gestureStartZoom = t.cy.zoom(), t.hasTouchStarted || I.preventDefault();
  }, !0), t.registerBinding(t.container, "gesturechange", function(j) {
    t.hasTouchStarted || F(j);
  }, !0), t.registerBinding(t.container, "mouseout", function(I) {
    var z = t.projectIntoViewport(I.clientX, I.clientY);
    t.cy.emit({
      originalEvent: I,
      type: "mouseout",
      position: {
        x: z[0],
        y: z[1]
      }
    });
  }, !1), t.registerBinding(t.container, "mouseover", function(I) {
    var z = t.projectIntoViewport(I.clientX, I.clientY);
    t.cy.emit({
      originalEvent: I,
      type: "mouseover",
      position: {
        x: z[0],
        y: z[1]
      }
    });
  }, !1);
  var _, B, G, H, X, $, K, ee, ae, Z, V, q, Y, Q = function(I, z, U, W) {
    return Math.sqrt((U - I) * (U - I) + (W - z) * (W - z));
  }, re = function(I, z, U, W) {
    return (U - I) * (U - I) + (W - z) * (W - z);
  }, ue;
  t.registerBinding(t.container, "touchstart", ue = function(I) {
    if (t.hasTouchStarted = !0, !!x(I)) {
      y(), t.touchData.capture = !0, t.data.bgActivePosistion = void 0;
      var z = t.cy, U = t.touchData.now, W = t.touchData.earlier;
      if (I.touches[0]) {
        var J = t.projectIntoViewport(I.touches[0].clientX, I.touches[0].clientY);
        U[0] = J[0], U[1] = J[1];
      }
      if (I.touches[1]) {
        var J = t.projectIntoViewport(I.touches[1].clientX, I.touches[1].clientY);
        U[2] = J[0], U[3] = J[1];
      }
      if (I.touches[2]) {
        var J = t.projectIntoViewport(I.touches[2].clientX, I.touches[2].clientY);
        U[4] = J[0], U[5] = J[1];
      }
      var ve = function(lt) {
        return {
          originalEvent: I,
          type: lt,
          position: {
            x: U[0],
            y: U[1]
          }
        };
      };
      if (I.touches[1]) {
        t.touchData.singleTouchMoved = !0, g(t.dragData.touchDragEles);
        var te = t.findContainerClientCoords();
        ae = te[0], Z = te[1], V = te[2], q = te[3], _ = I.touches[0].clientX - ae, B = I.touches[0].clientY - Z, G = I.touches[1].clientX - ae, H = I.touches[1].clientY - Z, Y = 0 <= _ && _ <= V && 0 <= G && G <= V && 0 <= B && B <= q && 0 <= H && H <= q;
        var ie = z.pan(), se = z.zoom();
        X = Q(_, B, G, H), $ = re(_, B, G, H), K = [(_ + G) / 2, (B + H) / 2], ee = [(K[0] - ie.x) / se, (K[1] - ie.y) / se];
        var pe = 200, xe = pe * pe;
        if ($ < xe && !I.touches[2]) {
          var Te = t.findNearestElement(U[0], U[1], !0, !0), ce = t.findNearestElement(U[2], U[3], !0, !0);
          Te && Te.isNode() ? (Te.activate().emit(ve("cxttapstart")), t.touchData.start = Te) : ce && ce.isNode() ? (ce.activate().emit(ve("cxttapstart")), t.touchData.start = ce) : z.emit(ve("cxttapstart")), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !0, t.touchData.cxtDragged = !1, t.data.bgActivePosistion = void 0, t.redraw();
          return;
        }
      }
      if (I.touches[2])
        z.boxSelectionEnabled() && I.preventDefault();
      else if (!I.touches[1]) {
        if (I.touches[0]) {
          var Se = t.findNearestElements(U[0], U[1], !0, !0), Re = Se[0];
          if (Re != null && (Re.activate(), t.touchData.start = Re, t.touchData.starts = Se, t.nodeIsGrabbable(Re))) {
            var nt = t.dragData.touchDragEles = z.collection(), Xe = null;
            t.redrawHint("eles", !0), t.redrawHint("drag", !0), Re.selected() ? (Xe = z.$(function(Je) {
              return Je.selected() && t.nodeIsGrabbable(Je);
            }), h(Xe, {
              addToList: nt
            })) : d(Re, {
              addToList: nt
            }), u(Re), Re.emit(ve("grabon")), Xe ? Xe.forEach(function(Je) {
              Je.emit(ve("grab"));
            }) : Re.emit(ve("grab"));
          }
          n(Re, ["touchstart", "tapstart", "vmousedown"], I, {
            x: U[0],
            y: U[1]
          }), Re == null && (t.data.bgActivePosistion = {
            x: J[0],
            y: J[1]
          }, t.redrawHint("select", !0), t.redraw()), t.touchData.singleTouchMoved = !1, t.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = setTimeout(function() {
            t.touchData.singleTouchMoved === !1 && !t.pinching && !t.touchData.selecting && n(t.touchData.start, ["taphold"], I, {
              x: U[0],
              y: U[1]
            });
          }, t.tapholdDuration);
        }
      }
      if (I.touches.length >= 1) {
        for (var It = t.touchData.startPosition = [null, null, null, null, null, null], $e = 0; $e < U.length; $e++)
          It[$e] = W[$e] = U[$e];
        var Ke = I.touches[0];
        t.touchData.startGPosition = [Ke.clientX, Ke.clientY];
      }
    }
  }, !1);
  var Ae;
  t.registerBinding(e, "touchmove", Ae = function(I) {
    var z = t.touchData.capture;
    if (!(!z && !x(I))) {
      var U = t.selection, W = t.cy, J = t.touchData.now, ve = t.touchData.earlier, te = W.zoom();
      if (I.touches[0]) {
        var ie = t.projectIntoViewport(I.touches[0].clientX, I.touches[0].clientY);
        J[0] = ie[0], J[1] = ie[1];
      }
      if (I.touches[1]) {
        var ie = t.projectIntoViewport(I.touches[1].clientX, I.touches[1].clientY);
        J[2] = ie[0], J[3] = ie[1];
      }
      if (I.touches[2]) {
        var ie = t.projectIntoViewport(I.touches[2].clientX, I.touches[2].clientY);
        J[4] = ie[0], J[5] = ie[1];
      }
      var se = function(yf) {
        return {
          originalEvent: I,
          type: yf,
          position: {
            x: J[0],
            y: J[1]
          }
        };
      }, pe = t.touchData.startGPosition, xe;
      if (z && I.touches[0] && pe) {
        for (var Te = [], ce = 0; ce < J.length; ce++)
          Te[ce] = J[ce] - ve[ce];
        var Se = I.touches[0].clientX - pe[0], Re = Se * Se, nt = I.touches[0].clientY - pe[1], Xe = nt * nt, It = Re + Xe;
        xe = It >= t.touchTapThreshold2;
      }
      if (z && t.touchData.cxt) {
        I.preventDefault();
        var $e = I.touches[0].clientX - ae, Ke = I.touches[0].clientY - Z, Je = I.touches[1].clientX - ae, lt = I.touches[1].clientY - Z, _t = re($e, Ke, Je, lt), Ye = _t / $, $t = 150, Mt = $t * $t, er = 1.5, Wa = er * er;
        if (Ye >= Wa || _t >= Mt) {
          t.touchData.cxt = !1, t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
          var Er = se("cxttapend");
          t.touchData.start ? (t.touchData.start.unactivate().emit(Er), t.touchData.start = null) : W.emit(Er);
        }
      }
      if (z && t.touchData.cxt) {
        var Er = se("cxtdrag");
        t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.touchData.start ? t.touchData.start.emit(Er) : W.emit(Er), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxtDragged = !0;
        var Et = t.findNearestElement(J[0], J[1], !0, !0);
        (!t.touchData.cxtOver || Et !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit(se("cxtdragout")), t.touchData.cxtOver = Et, Et && Et.emit(se("cxtdragover")));
      } else if (z && I.touches[2] && W.boxSelectionEnabled())
        I.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), t.touchData.selecting || W.emit(se("boxstart")), t.touchData.selecting = !0, t.touchData.didSelect = !0, U[4] = 1, !U || U.length === 0 || U[0] === void 0 ? (U[0] = (J[0] + J[2] + J[4]) / 3, U[1] = (J[1] + J[3] + J[5]) / 3, U[2] = (J[0] + J[2] + J[4]) / 3 + 1, U[3] = (J[1] + J[3] + J[5]) / 3 + 1) : (U[2] = (J[0] + J[2] + J[4]) / 3, U[3] = (J[1] + J[3] + J[5]) / 3), t.redrawHint("select", !0), t.redraw();
      else if (z && I.touches[1] && !t.touchData.didSelect && W.zoomingEnabled() && W.panningEnabled() && W.userZoomingEnabled() && W.userPanningEnabled()) {
        I.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
        var ht = t.dragData.touchDragEles;
        if (ht) {
          t.redrawHint("drag", !0);
          for (var xt = 0; xt < ht.length; xt++) {
            var va = ht[xt]._private;
            va.grabbed = !1, va.rscratch.inDragLayer = !1;
          }
        }
        var St = t.touchData.start, $e = I.touches[0].clientX - ae, Ke = I.touches[0].clientY - Z, Je = I.touches[1].clientX - ae, lt = I.touches[1].clientY - Z, Ms = Q($e, Ke, Je, lt), lf = Ms / X;
        if (Y) {
          var uf = $e - _, vf = Ke - B, cf = Je - G, ff = lt - H, hf = (uf + cf) / 2, df = (vf + ff) / 2, ca = W.zoom(), ni = ca * lf, Ka = W.pan(), Ps = ee[0] * ca + Ka.x, Os = ee[1] * ca + Ka.y, gf = {
            x: -ni / ca * (Ps - Ka.x - hf) + Ps,
            y: -ni / ca * (Os - Ka.y - df) + Os
          };
          if (St && St.active()) {
            var ht = t.dragData.touchDragEles;
            g(ht), t.redrawHint("drag", !0), t.redrawHint("eles", !0), St.unactivate().emit(se("freeon")), ht.emit(se("free")), t.dragData.didDrag && (St.emit(se("dragfreeon")), ht.emit(se("dragfree")));
          }
          W.viewport({
            zoom: ni,
            pan: gf,
            cancelOnFailedZoom: !0
          }), W.emit(se("pinchzoom")), X = Ms, _ = $e, B = Ke, G = Je, H = lt, t.pinching = !0;
        }
        if (I.touches[0]) {
          var ie = t.projectIntoViewport(I.touches[0].clientX, I.touches[0].clientY);
          J[0] = ie[0], J[1] = ie[1];
        }
        if (I.touches[1]) {
          var ie = t.projectIntoViewport(I.touches[1].clientX, I.touches[1].clientY);
          J[2] = ie[0], J[3] = ie[1];
        }
        if (I.touches[2]) {
          var ie = t.projectIntoViewport(I.touches[2].clientX, I.touches[2].clientY);
          J[4] = ie[0], J[5] = ie[1];
        }
      } else if (I.touches[0] && !t.touchData.didSelect) {
        var Pt = t.touchData.start, ii = t.touchData.last, Et;
        if (!t.hoverData.draggingEles && !t.swipePanning && (Et = t.findNearestElement(J[0], J[1], !0, !0)), z && Pt != null && I.preventDefault(), z && Pt != null && t.nodeIsDraggable(Pt))
          if (xe) {
            var ht = t.dragData.touchDragEles, ks = !t.dragData.didDrag;
            ks && h(ht, {
              inDragLayer: !0
            }), t.dragData.didDrag = !0;
            var fa = {
              x: 0,
              y: 0
            };
            if (ne(Te[0]) && ne(Te[1]) && (fa.x += Te[0], fa.y += Te[1], ks)) {
              t.redrawHint("eles", !0);
              var Ot = t.touchData.dragDelta;
              Ot && ne(Ot[0]) && ne(Ot[1]) && (fa.x += Ot[0], fa.y += Ot[1]);
            }
            t.hoverData.draggingEles = !0, ht.silentShift(fa).emit(se("position")).emit(se("drag")), t.redrawHint("drag", !0), t.touchData.startPosition[0] == ve[0] && t.touchData.startPosition[1] == ve[1] && t.redrawHint("eles", !0), t.redraw();
          } else {
            var Ot = t.touchData.dragDelta = t.touchData.dragDelta || [];
            Ot.length === 0 ? (Ot.push(Te[0]), Ot.push(Te[1])) : (Ot[0] += Te[0], Ot[1] += Te[1]);
          }
        if (n(Pt || Et, ["touchmove", "tapdrag", "vmousemove"], I, {
          x: J[0],
          y: J[1]
        }), (!Pt || !Pt.grabbed()) && Et != ii && (ii && ii.emit(se("tapdragout")), Et && Et.emit(se("tapdragover"))), t.touchData.last = Et, z)
          for (var xt = 0; xt < J.length; xt++)
            J[xt] && t.touchData.startPosition[xt] && xe && (t.touchData.singleTouchMoved = !0);
        if (z && (Pt == null || Pt.pannable()) && W.panningEnabled() && W.userPanningEnabled()) {
          var pf = o(Pt, t.touchData.starts);
          pf && (I.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = Xr(t.touchData.startPosition)), t.swipePanning ? (W.panBy({
            x: Te[0] * te,
            y: Te[1] * te
          }), W.emit(se("dragpan"))) : xe && (t.swipePanning = !0, W.panBy({
            x: Se * te,
            y: nt * te
          }), W.emit(se("dragpan")), Pt && (Pt.unactivate(), t.redrawHint("select", !0), t.touchData.start = null)));
          var ie = t.projectIntoViewport(I.touches[0].clientX, I.touches[0].clientY);
          J[0] = ie[0], J[1] = ie[1];
        }
      }
      for (var ce = 0; ce < J.length; ce++)
        ve[ce] = J[ce];
      z && I.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.redraw());
    }
  }, !1);
  var we;
  t.registerBinding(e, "touchcancel", we = function(I) {
    var z = t.touchData.start;
    t.touchData.capture = !1, z && z.unactivate();
  });
  var me, ge, oe, he;
  if (t.registerBinding(e, "touchend", me = function(I) {
    var z = t.touchData.start, U = t.touchData.capture;
    if (U)
      I.touches.length === 0 && (t.touchData.capture = !1), I.preventDefault();
    else
      return;
    var W = t.selection;
    t.swipePanning = !1, t.hoverData.draggingEles = !1;
    var J = t.cy, ve = J.zoom(), te = t.touchData.now, ie = t.touchData.earlier;
    if (I.touches[0]) {
      var se = t.projectIntoViewport(I.touches[0].clientX, I.touches[0].clientY);
      te[0] = se[0], te[1] = se[1];
    }
    if (I.touches[1]) {
      var se = t.projectIntoViewport(I.touches[1].clientX, I.touches[1].clientY);
      te[2] = se[0], te[3] = se[1];
    }
    if (I.touches[2]) {
      var se = t.projectIntoViewport(I.touches[2].clientX, I.touches[2].clientY);
      te[4] = se[0], te[5] = se[1];
    }
    var pe = function(Mt) {
      return {
        originalEvent: I,
        type: Mt,
        position: {
          x: te[0],
          y: te[1]
        }
      };
    };
    z && z.unactivate();
    var xe;
    if (t.touchData.cxt) {
      if (xe = pe("cxttapend"), z ? z.emit(xe) : J.emit(xe), !t.touchData.cxtDragged) {
        var Te = pe("cxttap");
        z ? z.emit(Te) : J.emit(Te);
      }
      t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !1, t.touchData.start = null, t.redraw();
      return;
    }
    if (!I.touches[2] && J.boxSelectionEnabled() && t.touchData.selecting) {
      t.touchData.selecting = !1;
      var ce = J.collection(t.getAllInBox(W[0], W[1], W[2], W[3]));
      W[0] = void 0, W[1] = void 0, W[2] = void 0, W[3] = void 0, W[4] = 0, t.redrawHint("select", !0), J.emit(pe("boxend"));
      var Se = function(Mt) {
        return Mt.selectable() && !Mt.selected();
      };
      ce.emit(pe("box")).stdFilter(Se).select().emit(pe("boxselect")), ce.nonempty() && t.redrawHint("eles", !0), t.redraw();
    }
    if (z?.unactivate(), I.touches[2])
      t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
    else if (!I.touches[1]) {
      if (!I.touches[0]) {
        if (!I.touches[0]) {
          t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
          var Re = t.dragData.touchDragEles;
          if (z != null) {
            var nt = z._private.grabbed;
            g(Re), t.redrawHint("drag", !0), t.redrawHint("eles", !0), nt && (z.emit(pe("freeon")), Re.emit(pe("free")), t.dragData.didDrag && (z.emit(pe("dragfreeon")), Re.emit(pe("dragfree")))), n(z, ["touchend", "tapend", "vmouseup", "tapdragout"], I, {
              x: te[0],
              y: te[1]
            }), z.unactivate(), t.touchData.start = null;
          } else {
            var Xe = t.findNearestElement(te[0], te[1], !0, !0);
            n(Xe, ["touchend", "tapend", "vmouseup", "tapdragout"], I, {
              x: te[0],
              y: te[1]
            });
          }
          var It = t.touchData.startPosition[0] - te[0], $e = It * It, Ke = t.touchData.startPosition[1] - te[1], Je = Ke * Ke, lt = $e + Je, _t = lt * ve * ve;
          t.touchData.singleTouchMoved || (z || J.$(":selected").unselect(["tapunselect"]), n(z, ["tap", "vclick"], I, {
            x: te[0],
            y: te[1]
          }), ge = !1, I.timeStamp - he <= J.multiClickDebounceTime() ? (oe && clearTimeout(oe), ge = !0, he = null, n(z, ["dbltap", "vdblclick"], I, {
            x: te[0],
            y: te[1]
          })) : (oe = setTimeout(function() {
            ge || n(z, ["onetap", "voneclick"], I, {
              x: te[0],
              y: te[1]
            });
          }, J.multiClickDebounceTime()), he = I.timeStamp)), z != null && !t.dragData.didDrag && z._private.selectable && _t < t.touchTapThreshold2 && !t.pinching && (J.selectionType() === "single" ? (J.$(r).unmerge(z).unselect(["tapunselect"]), z.select(["tapselect"])) : z.selected() ? z.unselect(["tapunselect"]) : z.select(["tapselect"]), t.redrawHint("eles", !0)), t.touchData.singleTouchMoved = !0;
        }
      }
    }
    for (var Ye = 0; Ye < te.length; Ye++)
      ie[Ye] = te[Ye];
    t.dragData.didDrag = !1, I.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [null, null, null, null, null, null], t.touchData.startGPosition = null, t.touchData.didSelect = !1), I.touches.length < 2 && (I.touches.length === 1 && (t.touchData.startGPosition = [I.touches[0].clientX, I.touches[0].clientY]), t.pinching = !1, t.redrawHint("eles", !0), t.redraw());
  }, !1), typeof TouchEvent > "u") {
    var fe = [], Ee = function(I) {
      return {
        clientX: I.clientX,
        clientY: I.clientY,
        force: 1,
        identifier: I.pointerId,
        pageX: I.pageX,
        pageY: I.pageY,
        radiusX: I.width / 2,
        radiusY: I.height / 2,
        screenX: I.screenX,
        screenY: I.screenY,
        target: I.target
      };
    }, be = function(I) {
      return {
        event: I,
        touch: Ee(I)
      };
    }, De = function(I) {
      fe.push(be(I));
    }, Le = function(I) {
      for (var z = 0; z < fe.length; z++) {
        var U = fe[z];
        if (U.event.pointerId === I.pointerId) {
          fe.splice(z, 1);
          return;
        }
      }
    }, Ne = function(I) {
      var z = fe.filter(function(U) {
        return U.event.pointerId === I.pointerId;
      })[0];
      z.event = I, z.touch = Ee(I);
    }, Oe = function(I) {
      I.touches = fe.map(function(z) {
        return z.touch;
      });
    }, Ie = function(I) {
      return I.pointerType === "mouse" || I.pointerType === 4;
    };
    t.registerBinding(t.container, "pointerdown", function(j) {
      Ie(j) || (j.preventDefault(), De(j), Oe(j), ue(j));
    }), t.registerBinding(t.container, "pointerup", function(j) {
      Ie(j) || (Le(j), Oe(j), me(j));
    }), t.registerBinding(t.container, "pointercancel", function(j) {
      Ie(j) || (Le(j), Oe(j), we(j));
    }), t.registerBinding(t.container, "pointermove", function(j) {
      Ie(j) || (j.preventDefault(), Ne(j), Oe(j), Ae(j));
    });
  }
};
var Jt = {};
Jt.generatePolygon = function(t, e) {
  return this.nodeShapes[t] = {
    renderer: this,
    name: t,
    points: e,
    draw: function(a, n, i, o, s, l) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, o, s, this.points);
    },
    intersectLine: function(a, n, i, o, s, l, u, v) {
      return Ia(s, l, this.points, a, n, i / 2, o / 2, u);
    },
    checkPoint: function(a, n, i, o, s, l, u, v) {
      return Qt(a, n, this.points, l, u, o, s, [0, -1], i);
    },
    hasMiterBounds: t !== "rectangle",
    miterBounds: function(a, n, i, o, s, l) {
      return ad(this.points, a, n, i, o, s);
    }
  };
};
Jt.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, r, a, n, i, o) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, o, s, l) {
      return cd(i, o, e, r, a / 2 + s, n / 2 + s);
    },
    checkPoint: function(e, r, a, n, i, o, s, l) {
      return Lr(e, r, n, i, o, s, a);
    }
  };
};
Jt.generateRoundPolygon = function(t, e) {
  return this.nodeShapes[t] = {
    renderer: this,
    name: t,
    points: e,
    getOrCreateCorners: function(a, n, i, o, s, l, u) {
      if (l[u] !== void 0 && l[u + "-cx"] === a && l[u + "-cy"] === n)
        return l[u];
      l[u] = new Array(e.length / 2), l[u + "-cx"] = a, l[u + "-cy"] = n;
      var v = i / 2, c = o / 2;
      s = s === "auto" ? Bv(i, o) : s;
      for (var f = new Array(e.length / 2), h = 0; h < e.length / 2; h++)
        f[h] = {
          x: a + v * e[h * 2],
          y: n + c * e[h * 2 + 1]
        };
      var d, g, p, y, b = f.length;
      for (g = f[b - 1], d = 0; d < b; d++)
        p = f[d % b], y = f[(d + 1) % b], l[u][d] = Ss(g, p, y, s), g = p, p = y;
      return l[u];
    },
    draw: function(a, n, i, o, s, l, u) {
      this.renderer.nodeShapeImpl("round-polygon", a, n, i, o, s, this.points, this.getOrCreateCorners(n, i, o, s, l, u, "drawCorners"));
    },
    intersectLine: function(a, n, i, o, s, l, u, v, c) {
      return hd(s, l, this.points, a, n, i, o, u, this.getOrCreateCorners(a, n, i, o, v, c, "corners"));
    },
    checkPoint: function(a, n, i, o, s, l, u, v, c) {
      return vd(a, n, this.points, l, u, o, s, this.getOrCreateCorners(l, u, o, s, v, c, "corners"));
    }
  };
};
Jt.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: yt(4, 0),
    draw: function(e, r, a, n, i, o) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, o);
    },
    intersectLine: function(e, r, a, n, i, o, s, l) {
      return kv(i, o, e, r, a, n, s, l);
    },
    checkPoint: function(e, r, a, n, i, o, s, l) {
      var u = n / 2, v = i / 2;
      l = l === "auto" ? cr(n, i) : l, l = Math.min(u, v, l);
      var c = l * 2;
      return !!(Qt(e, r, this.points, o, s, n, i - c, [0, -1], a) || Qt(e, r, this.points, o, s, n - c, i, [0, -1], a) || Lr(e, r, c, c, o - u + l, s - v + l, a) || Lr(e, r, c, c, o + u - l, s - v + l, a) || Lr(e, r, c, c, o + u - l, s + v - l, a) || Lr(e, r, c, c, o - u + l, s + v - l, a));
    }
  };
};
Jt.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: gs(),
    points: yt(4, 0),
    draw: function(e, r, a, n, i, o) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, null, o);
    },
    generateCutTrianglePts: function(e, r, a, n, i) {
      var o = i === "auto" ? this.cornerLength : i, s = r / 2, l = e / 2, u = a - l, v = a + l, c = n - s, f = n + s;
      return {
        topLeft: [u, c + o, u + o, c, u + o, c + o],
        topRight: [v - o, c, v, c + o, v - o, c + o],
        bottomRight: [v, f - o, v - o, f, v - o, f - o],
        bottomLeft: [u + o, f, u, f - o, u + o, f - o]
      };
    },
    intersectLine: function(e, r, a, n, i, o, s, l) {
      var u = this.generateCutTrianglePts(a + 2 * s, n + 2 * s, e, r, l), v = [].concat.apply([], [u.topLeft.splice(0, 4), u.topRight.splice(0, 4), u.bottomRight.splice(0, 4), u.bottomLeft.splice(0, 4)]);
      return Ia(i, o, v, e, r);
    },
    checkPoint: function(e, r, a, n, i, o, s, l) {
      var u = l === "auto" ? this.cornerLength : l;
      if (Qt(e, r, this.points, o, s, n, i - 2 * u, [0, -1], a) || Qt(e, r, this.points, o, s, n - 2 * u, i, [0, -1], a))
        return !0;
      var v = this.generateCutTrianglePts(n, i, o, s);
      return Tt(e, r, v.topLeft) || Tt(e, r, v.topRight) || Tt(e, r, v.bottomRight) || Tt(e, r, v.bottomLeft);
    }
  };
};
Jt.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: yt(4, 0),
    draw: function(e, r, a, n, i, o) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, o, s, l) {
      var u = 0.15, v = 0.5, c = 0.85, f = this.generateBarrelBezierPts(a + 2 * s, n + 2 * s, e, r), h = function(p) {
        var y = Kr({
          x: p[0],
          y: p[1]
        }, {
          x: p[2],
          y: p[3]
        }, {
          x: p[4],
          y: p[5]
        }, u), b = Kr({
          x: p[0],
          y: p[1]
        }, {
          x: p[2],
          y: p[3]
        }, {
          x: p[4],
          y: p[5]
        }, v), m = Kr({
          x: p[0],
          y: p[1]
        }, {
          x: p[2],
          y: p[3]
        }, {
          x: p[4],
          y: p[5]
        }, c);
        return [p[0], p[1], y.x, y.y, b.x, b.y, m.x, m.y, p[4], p[5]];
      }, d = [].concat(h(f.topLeft), h(f.topRight), h(f.bottomRight), h(f.bottomLeft));
      return Ia(i, o, d, e, r);
    },
    generateBarrelBezierPts: function(e, r, a, n) {
      var i = r / 2, o = e / 2, s = a - o, l = a + o, u = n - i, v = n + i, c = Go(e, r), f = c.heightOffset, h = c.widthOffset, d = c.ctrlPtOffsetPct * e, g = {
        topLeft: [s, u + f, s + d, u, s + h, u],
        topRight: [l - h, u, l - d, u, l, u + f],
        bottomRight: [l, v - f, l - d, v, l - h, v],
        bottomLeft: [s + h, v, s + d, v, s, v - f]
      };
      return g.topLeft.isTop = !0, g.topRight.isTop = !0, g.bottomLeft.isBottom = !0, g.bottomRight.isBottom = !0, g;
    },
    checkPoint: function(e, r, a, n, i, o, s, l) {
      var u = Go(n, i), v = u.heightOffset, c = u.widthOffset;
      if (Qt(e, r, this.points, o, s, n, i - 2 * v, [0, -1], a) || Qt(e, r, this.points, o, s, n - 2 * c, i, [0, -1], a))
        return !0;
      for (var f = this.generateBarrelBezierPts(n, i, o, s), h = function(x, C, D) {
        var A = D[4], L = D[2], R = D[0], M = D[5], P = D[1], N = Math.min(A, R), O = Math.max(A, R), k = Math.min(M, P), F = Math.max(M, P);
        if (N <= x && x <= O && k <= C && C <= F) {
          var _ = dd(A, L, R), B = od(_[0], _[1], _[2], x), G = B.filter(function(H) {
            return 0 <= H && H <= 1;
          });
          if (G.length > 0)
            return G[0];
        }
        return null;
      }, d = Object.keys(f), g = 0; g < d.length; g++) {
        var p = d[g], y = f[p], b = h(e, r, y);
        if (b != null) {
          var m = y[5], E = y[3], T = y[1], S = it(m, E, T, b);
          if (y.isTop && S <= r || y.isBottom && r <= S)
            return !0;
        }
      }
      return !1;
    }
  };
};
Jt.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: yt(4, 0),
    draw: function(e, r, a, n, i, o) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, o);
    },
    intersectLine: function(e, r, a, n, i, o, s, l) {
      var u = e - (a / 2 + s), v = r - (n / 2 + s), c = v, f = e + (a / 2 + s), h = or(i, o, e, r, u, v, f, c, !1);
      return h.length > 0 ? h : kv(i, o, e, r, a, n, s, l);
    },
    checkPoint: function(e, r, a, n, i, o, s, l) {
      l = l === "auto" ? cr(n, i) : l;
      var u = 2 * l;
      if (Qt(e, r, this.points, o, s, n, i - u, [0, -1], a) || Qt(e, r, this.points, o, s, n - u, i, [0, -1], a))
        return !0;
      var v = n / 2 + 2 * a, c = i / 2 + 2 * a, f = [o - v, s - c, o - v, s, o + v, s, o + v, s - c];
      return !!(Tt(e, r, f) || Lr(e, r, u, u, o + n / 2 - l, s + i / 2 - l, a) || Lr(e, r, u, u, o - n / 2 + l, s + i / 2 - l, a));
    }
  };
};
Jt.registerNodeShapes = function() {
  var t = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", yt(3, 0)), this.generateRoundPolygon("round-triangle", yt(3, 0)), this.generatePolygon("rectangle", yt(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var r = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
  }
  this.generatePolygon("pentagon", yt(5, 0)), this.generateRoundPolygon("round-pentagon", yt(5, 0)), this.generatePolygon("hexagon", yt(6, 0)), this.generateRoundPolygon("round-hexagon", yt(6, 0)), this.generatePolygon("heptagon", yt(7, 0)), this.generateRoundPolygon("round-heptagon", yt(7, 0)), this.generatePolygon("octagon", yt(8, 0)), this.generateRoundPolygon("round-octagon", yt(8, 0));
  var a = new Array(20);
  {
    var n = _o(5, 0), i = _o(5, Math.PI / 5), o = 0.5 * (3 - Math.sqrt(5));
    o *= 1.57;
    for (var s = 0; s < i.length / 2; s++)
      i[s * 2] *= o, i[s * 2 + 1] *= o;
    for (var s = 0; s < 20 / 4; s++)
      a[s * 4] = n[s * 2], a[s * 4 + 1] = n[s * 2 + 1], a[s * 4 + 2] = i[s * 2], a[s * 4 + 3] = i[s * 2 + 1];
  }
  a = Nv(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
  }
  t.makePolygon = function(u) {
    var v = u.join("$"), c = "polygon-" + v, f;
    return (f = this[c]) ? f : e.generatePolygon(c, u);
  };
};
var Xa = {};
Xa.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
Xa.redraw = function(t) {
  t = t || Iv();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = t;
};
Xa.beforeRender = function(t, e) {
  if (!this.destroyed) {
    e == null && qe("Priority is not optional for beforeRender");
    var r = this.beforeRenderCallbacks;
    r.push({
      fn: t,
      priority: e
    }), r.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var Xu = function(e, r, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
    n[i].fn(r, a);
};
Xa.startRenderLoop = function() {
  var t = this, e = t.cy;
  if (!t.renderLoopStarted) {
    t.renderLoopStarted = !0;
    var r = function(n) {
      if (!t.destroyed) {
        if (!e.batching()) if (t.requestedFrame && !t.skipFrame) {
          Xu(t, !0, n);
          var i = Zt();
          t.render(t.renderOptions);
          var o = t.lastDrawTime = Zt();
          t.averageRedrawTime === void 0 && (t.averageRedrawTime = o - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
          var s = o - i;
          t.redrawTotalTime += s, t.lastRedrawTime = s, t.averageRedrawTime = t.averageRedrawTime / 2 + s / 2, t.requestedFrame = !1;
        } else
          Xu(t, !1, n);
        t.skipFrame = !1, Ln(r);
      }
    };
    Ln(r);
  }
};
var Oy = function(e) {
  this.init(e);
}, Fc = Oy, ua = Fc.prototype;
ua.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
ua.init = function(t) {
  var e = this;
  e.options = t, e.cy = t.cy;
  var r = e.container = t.cy.container(), a = e.cy.window();
  if (a) {
    var n = a.document, i = n.head, o = "__________cytoscape_stylesheet", s = "__________cytoscape_container", l = n.getElementById(o) != null;
    if (r.className.indexOf(s) < 0 && (r.className = (r.className || "") + " " + s), !l) {
      var u = n.createElement("style");
      u.id = o, u.textContent = "." + s + " { position: relative; }", i.insertBefore(u, i.children[0]);
    }
    var v = a.getComputedStyle(r), c = v.getPropertyValue("position");
    c === "static" && Fe("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: !1,
    initialPan: [null, null],
    capture: !1
  }, e.dragData = {
    possibleDragElements: []
  }, e.touchData = {
    start: null,
    capture: !1,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: !0,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.webgl = t.webgl, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = ne(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
ua.notify = function(t, e) {
  var r = this, a = r.cy;
  if (!this.destroyed) {
    if (t === "init") {
      r.load();
      return;
    }
    if (t === "destroy") {
      r.destroy();
      return;
    }
    (t === "add" || t === "remove" || t === "move" && a.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", !0), t === "gc" && r.redrawHint("gc", !0), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", !0), r.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
  }
};
ua.destroy = function() {
  var t = this;
  t.destroyed = !0, t.cy.stopAnimationLoop();
  for (var e = 0; e < t.bindings.length; e++) {
    var r = t.bindings[e], a = r, n = a.target;
    (n.off || n.removeEventListener).apply(n, a.args);
  }
  if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv)
    try {
      document.body.removeChild(t.labelCalcDiv);
    } catch {
    }
};
ua.isHeadless = function() {
  return !1;
};
[Ds, kc, Nc, la, Jt, Xa].forEach(function(t) {
  ye(ua, t);
});
var Ro = 1e3 / 60, _c = {
  setupDequeueing: function(e) {
    return function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = !0;
        var i = Va(function() {
          n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
        }, e.deqRedrawThreshold), o = function(u, v) {
          var c = Zt(), f = n.averageRedrawTime, h = n.lastRedrawTime, d = [], g = n.cy.extent(), p = n.getPixelRatio();
          for (u || n.flushRenderedStyleQueue(); ; ) {
            var y = Zt(), b = y - c, m = y - v;
            if (h < Ro) {
              var E = Ro - (u ? f : 0);
              if (m >= e.deqFastCost * E)
                break;
            } else if (u) {
              if (b >= e.deqCost * h || b >= e.deqAvgCost * f)
                break;
            } else if (m >= e.deqNoDrawCost * Ro)
              break;
            var T = e.deq(a, p, g);
            if (T.length > 0)
              for (var S = 0; S < T.length; S++)
                d.push(T[S]);
            else
              break;
          }
          d.length > 0 && (e.onDeqd(a, d), !u && e.shouldRedraw(a, d, p, g) && i());
        }, s = e.priority || vs;
        n.beforeRender(o, s(a));
      }
    };
  }
}, ky = /* @__PURE__ */ (function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rn;
    pr(this, t), this.idsByKey = new Kt(), this.keyForId = new Kt(), this.cachesByLvl = new Kt(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
  }
  return yr(t, [{
    key: "getIdsFor",
    value: function(r) {
      r == null && qe("Can not get id list for null key");
      var a = this.idsByKey, n = this.idsByKey.get(r);
      return n || (n = new na(), a.set(r, n)), n;
    }
  }, {
    key: "addIdForKey",
    value: function(r, a) {
      r != null && this.getIdsFor(r).add(a);
    }
  }, {
    key: "deleteIdForKey",
    value: function(r, a) {
      r != null && this.getIdsFor(r).delete(a);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(r) {
      return r == null ? 0 : this.getIdsFor(r).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
      this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a);
      this.deleteIdForKey(n, a), this.keyForId.delete(a);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
      return n !== i;
    }
  }, {
    key: "isInvalid",
    value: function(r) {
      return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
    }
  }, {
    key: "getCachesAt",
    value: function(r) {
      var a = this.cachesByLvl, n = this.lvls, i = a.get(r);
      return i || (i = new Kt(), a.set(r, i), n.push(r)), i;
    }
  }, {
    key: "getCache",
    value: function(r, a) {
      return this.getCachesAt(a).get(r);
    }
  }, {
    key: "get",
    value: function(r, a) {
      var n = this.getKey(r), i = this.getCache(n, a);
      return i != null && this.updateKeyMappingFor(r), i;
    }
  }, {
    key: "getForCachedKey",
    value: function(r, a) {
      var n = this.keyForId.get(r.id()), i = this.getCache(n, a);
      return i;
    }
  }, {
    key: "hasCache",
    value: function(r, a) {
      return this.getCachesAt(a).has(r);
    }
  }, {
    key: "has",
    value: function(r, a) {
      var n = this.getKey(r);
      return this.hasCache(n, a);
    }
  }, {
    key: "setCache",
    value: function(r, a, n) {
      n.key = r, this.getCachesAt(a).set(r, n);
    }
  }, {
    key: "set",
    value: function(r, a, n) {
      var i = this.getKey(r);
      this.setCache(i, a, n), this.updateKeyMappingFor(r);
    }
  }, {
    key: "deleteCache",
    value: function(r, a) {
      this.getCachesAt(a).delete(r);
    }
  }, {
    key: "delete",
    value: function(r, a) {
      var n = this.getKey(r);
      this.deleteCache(n, a);
    }
  }, {
    key: "invalidateKey",
    value: function(r) {
      var a = this;
      this.lvls.forEach(function(n) {
        return a.deleteCache(r, n);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a);
      this.deleteKeyMappingFor(r);
      var i = this.doesEleInvalidateKey(r);
      return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
    }
  }]);
})(), $u = 25, ln = 50, bn = -4, Jo = 3, Gc = 7.99, Ny = 8, By = 1024, Fy = 1024, _y = 1024, Gy = 0.2, zy = 0.8, Vy = 10, Uy = 0.15, qy = 0.1, Yy = 0.9, Hy = 0.9, Xy = 100, $y = 1, Wr = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, Wy = ct({
  getKey: null,
  doesEleInvalidateKey: Rn,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: Av,
  allowEdgeTxrCaching: !0,
  allowParentTxrCaching: !0
}), xa = function(e, r) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = Wy(r);
  ye(a, n), a.lookup = new ky(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, at = xa.prototype;
at.reasons = Wr;
at.getTextureQueue = function(t) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
};
at.getRetiredTextureQueue = function(t) {
  var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = r[t] = r[t] || [];
  return a;
};
at.getElementQueue = function() {
  var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new Ua(function(r, a) {
    return a.reqs - r.reqs;
  });
  return e;
};
at.getElementKeyToQueue = function() {
  var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
  return e;
};
at.getElement = function(t, e, r, a, n) {
  var i = this, o = this.renderer, s = o.cy.zoom(), l = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent())
    return null;
  if (a == null && (a = Math.ceil(fs(s * r))), a < bn)
    a = bn;
  else if (s >= Gc || a > Jo)
    return null;
  var u = Math.pow(2, a), v = e.h * u, c = e.w * u, f = o.eleTextBiggerThanMin(t, u);
  if (!this.isVisible(t, f))
    return null;
  var h = l.get(t, a);
  if (h && h.invalidated && (h.invalidated = !1, h.texture.invalidatedWidth -= h.width), h)
    return h;
  var d;
  if (v <= $u ? d = $u : v <= ln ? d = ln : d = Math.ceil(v / ln) * ln, v > _y || c > Fy)
    return null;
  var g = i.getTextureQueue(d), p = g[g.length - 2], y = function() {
    return i.recycleTexture(d, c) || i.addTexture(d, c);
  };
  p || (p = g[g.length - 1]), p || (p = y()), p.width - p.usedWidth < c && (p = y());
  for (var b = function(N) {
    return N && N.scaledLabelShown === f;
  }, m = n && n === Wr.dequeue, E = n && n === Wr.highQuality, T = n && n === Wr.downscale, S, w = a + 1; w <= Jo; w++) {
    var x = l.get(t, w);
    if (x) {
      S = x;
      break;
    }
  }
  var C = S && S.level === a + 1 ? S : null, D = function() {
    p.context.drawImage(C.texture.canvas, C.x, 0, C.width, C.height, p.usedWidth, 0, c, v);
  };
  if (p.context.setTransform(1, 0, 0, 1, 0, 0), p.context.clearRect(p.usedWidth, 0, c, d), b(C))
    D();
  else if (b(S))
    if (E) {
      for (var A = S.level; A > a; A--)
        C = i.getElement(t, e, r, A, Wr.downscale);
      D();
    } else
      return i.queueElement(t, S.level - 1), S;
  else {
    var L;
    if (!m && !E && !T)
      for (var R = a - 1; R >= bn; R--) {
        var M = l.get(t, R);
        if (M) {
          L = M;
          break;
        }
      }
    if (b(L))
      return i.queueElement(t, a), L;
    p.context.translate(p.usedWidth, 0), p.context.scale(u, u), this.drawElement(p.context, t, e, f, !1), p.context.scale(1 / u, 1 / u), p.context.translate(-p.usedWidth, 0);
  }
  return h = {
    x: p.usedWidth,
    texture: p,
    level: a,
    scale: u,
    width: c,
    height: v,
    scaledLabelShown: f
  }, p.usedWidth += Math.ceil(c + Ny), p.eleCaches.push(h), l.set(t, a, h), i.checkTextureFullness(p), h;
};
at.invalidateElements = function(t) {
  for (var e = 0; e < t.length; e++)
    this.invalidateElement(t[e]);
};
at.invalidateElement = function(t) {
  var e = this, r = e.lookup, a = [], n = r.isInvalid(t);
  if (n) {
    for (var i = bn; i <= Jo; i++) {
      var o = r.getForCachedKey(t, i);
      o && a.push(o);
    }
    var s = r.invalidate(t);
    if (s)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], v = u.texture;
        v.invalidatedWidth += u.width, u.invalidated = !0, e.checkTextureUtility(v);
      }
    e.removeFromQueue(t);
  }
};
at.checkTextureUtility = function(t) {
  t.invalidatedWidth >= Gy * t.width && this.retireTexture(t);
};
at.checkTextureFullness = function(t) {
  var e = this, r = e.getTextureQueue(t.height);
  t.usedWidth / t.width > zy && t.fullnessChecks >= Vy ? vr(r, t) : t.fullnessChecks++;
};
at.retireTexture = function(t) {
  var e = this, r = t.height, a = e.getTextureQueue(r), n = this.lookup;
  vr(a, t), t.retired = !0;
  for (var i = t.eleCaches, o = 0; o < i.length; o++) {
    var s = i[o];
    n.deleteCache(s.key, s.level);
  }
  cs(i);
  var l = e.getRetiredTextureQueue(r);
  l.push(t);
};
at.addTexture = function(t, e) {
  var r = this, a = r.getTextureQueue(t), n = {};
  return a.push(n), n.eleCaches = [], n.height = t, n.width = Math.max(By, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = r.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
};
at.recycleTexture = function(t, e) {
  for (var r = this, a = r.getTextureQueue(t), n = r.getRetiredTextureQueue(t), i = 0; i < n.length; i++) {
    var o = n[i];
    if (o.width >= e)
      return o.retired = !1, o.usedWidth = 0, o.invalidatedWidth = 0, o.fullnessChecks = 0, cs(o.eleCaches), o.context.setTransform(1, 0, 0, 1, 0, 0), o.context.clearRect(0, 0, o.width, o.height), vr(n, o), a.push(o), o;
  }
};
at.queueElement = function(t, e) {
  var r = this, a = r.getElementQueue(), n = r.getElementKeyToQueue(), i = this.getKey(t), o = n[i];
  if (o)
    o.level = Math.max(o.level, e), o.eles.merge(t), o.reqs++, a.updateItem(o);
  else {
    var s = {
      eles: t.spawn().merge(t),
      level: e,
      reqs: 1,
      key: i
    };
    a.push(s), n[i] = s;
  }
};
at.dequeue = function(t) {
  for (var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, o = 0; o < $y && r.size() > 0; o++) {
    var s = r.pop(), l = s.key, u = s.eles[0], v = i.hasCache(u, s.level);
    if (a[l] = null, v)
      continue;
    n.push(s);
    var c = e.getBoundingBox(u);
    e.getElement(u, c, t, s.level, Wr.dequeue);
  }
  return n;
};
at.removeFromQueue = function(t) {
  var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(t), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = us, r.updateItem(i), r.pop(), a[n] = null) : i.eles.unmerge(t));
};
at.onDequeue = function(t) {
  this.onDequeues.push(t);
};
at.offDequeue = function(t) {
  vr(this.onDequeues, t);
};
at.setupDequeueing = _c.setupDequeueing({
  deqRedrawThreshold: Xy,
  deqCost: Uy,
  deqAvgCost: qy,
  deqNoDrawCost: Yy,
  deqFastCost: Hy,
  deq: function(e, r, a) {
    return e.dequeue(r, a);
  },
  onDeqd: function(e, r) {
    for (var a = 0; a < e.onDequeues.length; a++) {
      var n = e.onDequeues[a];
      n(r);
    }
  },
  shouldRedraw: function(e, r, a, n) {
    for (var i = 0; i < r.length; i++)
      for (var o = r[i].eles, s = 0; s < o.length; s++) {
        var l = o[s].boundingBox();
        if (ds(l, n))
          return !0;
      }
    return !1;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var Ky = 1, Ca = -4, Fn = 2, Zy = 3.99, Qy = 50, Jy = 50, jy = 0.15, em = 0.1, tm = 0.9, rm = 0.9, am = 1, Wu = 250, nm = 4e3 * 4e3, Ku = 32767, im = !0, zc = function(e) {
  var r = this, a = r.renderer = e, n = a.cy;
  r.layersByLevel = {}, r.firstGet = !0, r.lastInvalidationTime = Zt() - 2 * Wu, r.skipping = !1, r.eleTxrDeqs = n.collection(), r.scheduleElementRefinement = Va(function() {
    r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
  }, Jy), a.beforeRender(function(o, s) {
    s - r.lastInvalidationTime <= Wu ? r.skipping = !0 : r.skipping = !1;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = function(s, l) {
    return l.reqs - s.reqs;
  };
  r.layersQueue = new Ua(i), r.setupDequeueing();
}, ft = zc.prototype, Zu = 0, om = Math.pow(2, 53) - 1;
ft.makeLayer = function(t, e) {
  var r = Math.pow(2, e), a = Math.ceil(t.w * r), n = Math.ceil(t.h * r), i = this.renderer.makeOffscreenCanvas(a, n), o = {
    id: Zu = ++Zu % om,
    bb: t,
    level: e,
    width: a,
    height: n,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, s = o.context, l = -o.bb.x1, u = -o.bb.y1;
  return s.scale(r, r), s.translate(l, u), o;
};
ft.getLayers = function(t, e, r) {
  var a = this, n = a.renderer, i = n.cy, o = i.zoom(), s = a.firstGet;
  if (a.firstGet = !1, r == null) {
    if (r = Math.ceil(fs(o * e)), r < Ca)
      r = Ca;
    else if (o >= Zy || r > Fn)
      return null;
  }
  a.validateLayersElesOrdering(r, t);
  var l = a.layersByLevel, u = Math.pow(2, r), v = l[r] = l[r] || [], c, f = a.levelIsComplete(r, t), h, d = function() {
    var D = function(P) {
      if (a.validateLayersElesOrdering(P, t), a.levelIsComplete(P, t))
        return h = l[P], !0;
    }, A = function(P) {
      if (!h)
        for (var N = r + P; Ca <= N && N <= Fn && !D(N); N += P)
          ;
    };
    A(1), A(-1);
    for (var L = v.length - 1; L >= 0; L--) {
      var R = v[L];
      R.invalid && vr(v, R);
    }
  };
  if (!f)
    d();
  else
    return v;
  var g = function() {
    if (!c) {
      c = bt();
      for (var D = 0; D < t.length; D++)
        ed(c, t[D].boundingBox());
    }
    return c;
  }, p = function(D) {
    D = D || {};
    var A = D.after;
    g();
    var L = Math.ceil(c.w * u), R = Math.ceil(c.h * u);
    if (L > Ku || R > Ku)
      return null;
    var M = L * R;
    if (M > nm)
      return null;
    var P = a.makeLayer(c, r);
    if (A != null) {
      var N = v.indexOf(A) + 1;
      v.splice(N, 0, P);
    } else (D.insert === void 0 || D.insert) && v.unshift(P);
    return P;
  };
  if (a.skipping && !s)
    return null;
  for (var y = null, b = t.length / Ky, m = !s, E = 0; E < t.length; E++) {
    var T = t[E], S = T._private.rscratch, w = S.imgLayerCaches = S.imgLayerCaches || {}, x = w[r];
    if (x) {
      y = x;
      continue;
    }
    if ((!y || y.eles.length >= b || !Ov(y.bb, T.boundingBox())) && (y = p({
      insert: !0,
      after: y
    }), !y))
      return null;
    h || m ? a.queueLayer(y, T) : a.drawEleInLayer(y, T, r, e), y.eles.push(T), w[r] = y;
  }
  return h || (m ? null : v);
};
ft.getEleLevelForLayerLevel = function(t, e) {
  return t;
};
ft.drawEleInLayer = function(t, e, r, a) {
  var n = this, i = this.renderer, o = t.context, s = e.boundingBox();
  s.w === 0 || s.h === 0 || !e.visible() || (r = n.getEleLevelForLayerLevel(r, a), i.setImgSmoothing(o, !1), i.drawCachedElement(o, e, null, null, r, im), i.setImgSmoothing(o, !0));
};
ft.levelIsComplete = function(t, e) {
  var r = this, a = r.layersByLevel[t];
  if (!a || a.length === 0)
    return !1;
  for (var n = 0, i = 0; i < a.length; i++) {
    var o = a[i];
    if (o.reqs > 0 || o.invalid)
      return !1;
    n += o.eles.length;
  }
  return n === e.length;
};
ft.validateLayersElesOrdering = function(t, e) {
  var r = this.layersByLevel[t];
  if (r)
    for (var a = 0; a < r.length; a++) {
      for (var n = r[a], i = -1, o = 0; o < e.length; o++)
        if (n.eles[0] === e[o]) {
          i = o;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(n);
        continue;
      }
      for (var s = i, o = 0; o < n.eles.length; o++)
        if (n.eles[o] !== e[s + o]) {
          this.invalidateLayer(n);
          break;
        }
    }
};
ft.updateElementsInLayers = function(t, e) {
  for (var r = this, a = Fa(t[0]), n = 0; n < t.length; n++)
    for (var i = a ? null : t[n], o = a ? t[n] : t[n].ele, s = o._private.rscratch, l = s.imgLayerCaches = s.imgLayerCaches || {}, u = Ca; u <= Fn; u++) {
      var v = l[u];
      v && (i && r.getEleLevelForLayerLevel(v.level) !== i.level || e(v, o, i));
    }
};
ft.haveLayers = function() {
  for (var t = this, e = !1, r = Ca; r <= Fn; r++) {
    var a = t.layersByLevel[r];
    if (a && a.length > 0) {
      e = !0;
      break;
    }
  }
  return e;
};
ft.invalidateElements = function(t) {
  var e = this;
  t.length !== 0 && (e.lastInvalidationTime = Zt(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, function(a, n, i) {
    e.invalidateLayer(a);
  }));
};
ft.invalidateLayer = function(t) {
  if (this.lastInvalidationTime = Zt(), !t.invalid) {
    var e = t.level, r = t.eles, a = this.layersByLevel[e];
    vr(a, t), t.elesQueue = [], t.invalid = !0, t.replacement && (t.replacement.invalid = !0);
    for (var n = 0; n < r.length; n++) {
      var i = r[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
ft.refineElementTextures = function(t) {
  var e = this;
  e.updateElementsInLayers(t, function(a, n, i) {
    var o = a.replacement;
    if (o || (o = a.replacement = e.makeLayer(a.bb, a.level), o.replaces = a, o.eles = a.eles), !o.reqs)
      for (var s = 0; s < o.eles.length; s++)
        e.queueLayer(o, o.eles[s]);
  });
};
ft.enqueueElementRefinement = function(t) {
  this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
};
ft.queueLayer = function(t, e) {
  var r = this, a = r.layersQueue, n = t.elesQueue, i = n.hasId = n.hasId || {};
  if (!t.replacement) {
    if (e) {
      if (i[e.id()])
        return;
      n.push(e), i[e.id()] = !0;
    }
    t.reqs ? (t.reqs++, a.updateItem(t)) : (t.reqs = 1, a.push(t));
  }
};
ft.dequeue = function(t) {
  for (var e = this, r = e.layersQueue, a = [], n = 0; n < am && r.size() !== 0; ) {
    var i = r.peek();
    if (i.replacement) {
      r.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      r.pop();
      continue;
    }
    if (i.invalid) {
      r.pop();
      continue;
    }
    var o = i.elesQueue.shift();
    o && (e.drawEleInLayer(i, o, i.level, t), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return a;
};
ft.applyLayerReplacement = function(t) {
  var e = this, r = e.layersByLevel[t.level], a = t.replaces, n = r.indexOf(a);
  if (!(n < 0 || a.invalid)) {
    r[n] = t;
    for (var i = 0; i < t.eles.length; i++) {
      var o = t.eles[i]._private, s = o.imgLayerCaches = o.imgLayerCaches || {};
      s && (s[t.level] = t);
    }
    e.requestRedraw();
  }
};
ft.requestRedraw = Va(function() {
  var t = this.renderer;
  t.redrawHint("eles", !0), t.redrawHint("drag", !0), t.redraw();
}, 100);
ft.setupDequeueing = _c.setupDequeueing({
  deqRedrawThreshold: Qy,
  deqCost: jy,
  deqAvgCost: em,
  deqNoDrawCost: tm,
  deqFastCost: rm,
  deq: function(e, r) {
    return e.dequeue(r);
  },
  onDeqd: vs,
  shouldRedraw: Av,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var Vc = {}, Qu;
function sm(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    t.lineTo(a.x, a.y);
  }
}
function lm(t, e, r) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), t.lineTo(i.x, i.y);
  }
  t.quadraticCurveTo(r.x, r.y, a.x, a.y);
}
function Ju(t, e, r) {
  t.beginPath && t.beginPath();
  for (var a = e, n = 0; n < a.length; n++) {
    var i = a[n];
    t.lineTo(i.x, i.y);
  }
  var o = r, s = r[0];
  t.moveTo(s.x, s.y);
  for (var n = 1; n < o.length; n++) {
    var i = o[n];
    t.lineTo(i.x, i.y);
  }
  t.closePath && t.closePath();
}
function um(t, e, r, a, n) {
  t.beginPath && t.beginPath(), t.arc(r, a, n, 0, Math.PI * 2, !1);
  var i = e, o = i[0];
  t.moveTo(o.x, o.y);
  for (var s = 0; s < i.length; s++) {
    var l = i[s];
    t.lineTo(l.x, l.y);
  }
  t.closePath && t.closePath();
}
function vm(t, e, r, a) {
  t.arc(e, r, a, 0, Math.PI * 2, !1);
}
Vc.arrowShapeImpl = function(t) {
  return (Qu || (Qu = {
    polygon: sm,
    "triangle-backcurve": lm,
    "triangle-tee": Ju,
    "circle-triangle": um,
    "triangle-cross": Ju,
    circle: vm
  }))[t];
};
var Xt = {};
Xt.drawElement = function(t, e, r, a, n, i) {
  var o = this;
  e.isNode() ? o.drawNode(t, e, r, a, n, i) : o.drawEdge(t, e, r, a, n, i);
};
Xt.drawElementOverlay = function(t, e) {
  var r = this;
  e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
};
Xt.drawElementUnderlay = function(t, e) {
  var r = this;
  e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
};
Xt.drawCachedElementPortion = function(t, e, r, a, n, i, o, s) {
  var l = this, u = r.getBoundingBox(e);
  if (!(u.w === 0 || u.h === 0)) {
    var v = r.getElement(e, u, a, n, i);
    if (v != null) {
      var c = s(l, e);
      if (c === 0)
        return;
      var f = o(l, e), h = u.x1, d = u.y1, g = u.w, p = u.h, y, b, m, E, T;
      if (f !== 0) {
        var S = r.getRotationPoint(e);
        m = S.x, E = S.y, t.translate(m, E), t.rotate(f), T = l.getImgSmoothing(t), T || l.setImgSmoothing(t, !0);
        var w = r.getRotationOffset(e);
        y = w.x, b = w.y;
      } else
        y = h, b = d;
      var x;
      c !== 1 && (x = t.globalAlpha, t.globalAlpha = x * c), t.drawImage(v.texture.canvas, v.x, 0, v.width, v.height, y, b, g, p), c !== 1 && (t.globalAlpha = x), f !== 0 && (t.rotate(-f), t.translate(-m, -E), T || l.setImgSmoothing(t, !1));
    } else
      r.drawElement(t, e);
  }
};
var cm = function() {
  return 0;
}, fm = function(e, r) {
  return e.getTextAngle(r, null);
}, hm = function(e, r) {
  return e.getTextAngle(r, "source");
}, dm = function(e, r) {
  return e.getTextAngle(r, "target");
}, gm = function(e, r) {
  return r.effectiveOpacity();
}, Io = function(e, r) {
  return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
};
Xt.drawCachedElement = function(t, e, r, a, n, i) {
  var o = this, s = o.data, l = s.eleTxrCache, u = s.lblTxrCache, v = s.slbTxrCache, c = s.tlbTxrCache, f = e.boundingBox(), h = i === !0 ? l.reasons.highQuality : null;
  if (!(f.w === 0 || f.h === 0 || !e.visible()) && (!a || ds(f, a))) {
    var d = e.isEdge(), g = e.element()._private.rscratch.badLine;
    o.drawElementUnderlay(t, e), o.drawCachedElementPortion(t, e, l, r, n, h, cm, gm), (!d || !g) && o.drawCachedElementPortion(t, e, u, r, n, h, fm, Io), d && !g && (o.drawCachedElementPortion(t, e, v, r, n, h, hm, Io), o.drawCachedElementPortion(t, e, c, r, n, h, dm, Io)), o.drawElementOverlay(t, e);
  }
};
Xt.drawElements = function(t, e) {
  for (var r = this, a = 0; a < e.length; a++) {
    var n = e[a];
    r.drawElement(t, n);
  }
};
Xt.drawCachedElements = function(t, e, r, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var o = e[i];
    n.drawCachedElement(t, o, r, a);
  }
};
Xt.drawCachedNodes = function(t, e, r, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var o = e[i];
    o.isNode() && n.drawCachedElement(t, o, r, a);
  }
};
Xt.drawLayeredElements = function(t, e, r, a) {
  var n = this, i = n.data.lyrTxrCache.getLayers(e, r);
  if (i)
    for (var o = 0; o < i.length; o++) {
      var s = i[o], l = s.bb;
      l.w === 0 || l.h === 0 || t.drawImage(s.canvas, l.x1, l.y1, l.w, l.h);
    }
  else
    n.drawCachedElements(t, e, r, a);
};
var jt = {};
jt.drawEdge = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, o = this, s = e._private.rscratch;
  if (!(i && !e.visible()) && !(s.badLine || s.allpts == null || isNaN(s.allpts[0]))) {
    var l;
    r && (l = r, t.translate(-l.x1, -l.y1));
    var u = i ? e.pstyle("opacity").value : 1, v = i ? e.pstyle("line-opacity").value : 1, c = e.pstyle("curve-style").value, f = e.pstyle("line-style").value, h = e.pstyle("width").pfValue, d = e.pstyle("line-cap").value, g = e.pstyle("line-outline-width").value, p = e.pstyle("line-outline-color").value, y = u * v, b = u * v, m = function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
      c === "straight-triangle" ? (o.eleStrokeStyle(t, e, P), o.drawEdgeTrianglePath(e, t, s.allpts)) : (t.lineWidth = h, t.lineCap = d, o.eleStrokeStyle(t, e, P), o.drawEdgePath(e, t, s.allpts, f), t.lineCap = "butt");
    }, E = function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
      if (t.lineWidth = h + g, t.lineCap = d, g > 0)
        o.colorStrokeStyle(t, p[0], p[1], p[2], P);
      else {
        t.lineCap = "butt";
        return;
      }
      c === "straight-triangle" ? o.drawEdgeTrianglePath(e, t, s.allpts) : (o.drawEdgePath(e, t, s.allpts, f), t.lineCap = "butt");
    }, T = function() {
      n && o.drawEdgeOverlay(t, e);
    }, S = function() {
      n && o.drawEdgeUnderlay(t, e);
    }, w = function() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b;
      o.drawArrowheads(t, e, P);
    }, x = function() {
      o.drawElementText(t, e, null, a);
    };
    t.lineJoin = "round";
    var C = e.pstyle("ghost").value === "yes";
    if (C) {
      var D = e.pstyle("ghost-offset-x").pfValue, A = e.pstyle("ghost-offset-y").pfValue, L = e.pstyle("ghost-opacity").value, R = y * L;
      t.translate(D, A), m(R), w(R), t.translate(-D, -A);
    } else
      E();
    S(), m(), w(), T(), x(), r && t.translate(l.x1, l.y1);
  }
};
var Uc = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, a) {
    if (a.visible()) {
      var n = a.pstyle("".concat(e, "-opacity")).value;
      if (n !== 0) {
        var i = this, o = i.usePaths(), s = a._private.rscratch, l = a.pstyle("".concat(e, "-padding")).pfValue, u = 2 * l, v = a.pstyle("".concat(e, "-color")).value;
        r.lineWidth = u, s.edgeType === "self" && !o ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, v[0], v[1], v[2], n), i.drawEdgePath(a, r, s.allpts, "solid");
      }
    }
  };
};
jt.drawEdgeOverlay = Uc("overlay");
jt.drawEdgeUnderlay = Uc("underlay");
jt.drawEdgePath = function(t, e, r, a) {
  var n = t._private.rscratch, i = e, o, s = !1, l = this.usePaths(), u = t.pstyle("line-dash-pattern").pfValue, v = t.pstyle("line-dash-offset").pfValue;
  if (l) {
    var c = r.join("$"), f = n.pathCacheKey && n.pathCacheKey === c;
    f ? (o = e = n.pathCache, s = !0) : (o = e = new Path2D(), n.pathCacheKey = c, n.pathCache = o);
  }
  if (i.setLineDash)
    switch (a) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(u), i.lineDashOffset = v;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!s && !n.badLine)
    switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), n.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var h = 2; h + 3 < r.length; h += 4)
          e.quadraticCurveTo(r[h], r[h + 1], r[h + 2], r[h + 3]);
        break;
      case "straight":
      case "haystack":
        for (var d = 2; d + 1 < r.length; d += 2)
          e.lineTo(r[d], r[d + 1]);
        break;
      case "segments":
        if (n.isRound) {
          var g = Ct(n.roundCorners), p;
          try {
            for (g.s(); !(p = g.n()).done; ) {
              var y = p.value;
              Rc(e, y);
            }
          } catch (m) {
            g.e(m);
          } finally {
            g.f();
          }
          e.lineTo(r[r.length - 2], r[r.length - 1]);
        } else
          for (var b = 2; b + 1 < r.length; b += 2)
            e.lineTo(r[b], r[b + 1]);
        break;
    }
  e = i, l ? e.stroke(o) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
jt.drawEdgeTrianglePath = function(t, e, r) {
  e.fillStyle = e.strokeStyle;
  for (var a = t.pstyle("width").pfValue, n = 0; n + 1 < r.length; n += 2) {
    var i = [r[n + 2] - r[n], r[n + 3] - r[n + 1]], o = Math.sqrt(i[0] * i[0] + i[1] * i[1]), s = [i[1] / o, -i[0] / o], l = [s[0] * a / 2, s[1] * a / 2];
    e.beginPath(), e.moveTo(r[n] - l[0], r[n + 1] - l[1]), e.lineTo(r[n] + l[0], r[n + 1] + l[1]), e.lineTo(r[n + 2], r[n + 3]), e.closePath(), e.fill();
  }
};
jt.drawArrowheads = function(t, e, r) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(t, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, r), n || this.drawArrowhead(t, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, r);
};
jt.drawArrowhead = function(t, e, r, a, n, i, o) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var s = this, l = e.pstyle(r + "-arrow-shape").value;
    if (l !== "none") {
      var u = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", v = e.pstyle(r + "-arrow-fill").value, c = e.pstyle("width").pfValue, f = e.pstyle(r + "-arrow-width"), h = f.value === "match-line" ? c : f.pfValue;
      f.units === "%" && (h *= c);
      var d = e.pstyle("opacity").value;
      o === void 0 && (o = d);
      var g = t.globalCompositeOperation;
      (o !== 1 || v === "hollow") && (t.globalCompositeOperation = "destination-out", s.colorFillStyle(t, 255, 255, 255, 1), s.colorStrokeStyle(t, 255, 255, 255, 1), s.drawArrowShape(e, t, u, c, l, h, a, n, i), t.globalCompositeOperation = g);
      var p = e.pstyle(r + "-arrow-color").value;
      s.colorFillStyle(t, p[0], p[1], p[2], o), s.colorStrokeStyle(t, p[0], p[1], p[2], o), s.drawArrowShape(e, t, v, c, l, h, a, n, i);
    }
  }
};
jt.drawArrowShape = function(t, e, r, a, n, i, o, s, l) {
  var u = this, v = this.usePaths() && n !== "triangle-cross", c = !1, f, h = e, d = {
    x: o,
    y: s
  }, g = t.pstyle("arrow-scale").value, p = this.getArrowWidth(a, g), y = u.arrowShapes[n];
  if (v) {
    var b = u.arrowPathCache = u.arrowPathCache || [], m = Rr(n), E = b[m];
    E != null ? (f = e = E, c = !0) : (f = e = new Path2D(), b[m] = f);
  }
  c || (e.beginPath && e.beginPath(), v ? y.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : y.draw(e, p, l, d, a), e.closePath && e.closePath()), e = h, v && (e.translate(o, s), e.rotate(l), e.scale(p, p)), (r === "filled" || r === "both") && (v ? e.fill(f) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (v ? p : 1), e.lineJoin = "miter", v ? e.stroke(f) : e.stroke()), v && (e.scale(1 / p, 1 / p), e.rotate(-l), e.translate(-o, -s));
};
var Ls = {};
Ls.safeDrawImage = function(t, e, r, a, n, i, o, s, l, u) {
  if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0))
    try {
      t.drawImage(e, r, a, n, i, o, s, l, u);
    } catch (v) {
      Fe(v);
    }
};
Ls.drawInscribedImage = function(t, e, r, a, n) {
  var i = this, o = r.position(), s = o.x, l = o.y, u = r.cy().style(), v = u.getIndexedStyle.bind(u), c = v(r, "background-fit", "value", a), f = v(r, "background-repeat", "value", a), h = r.width(), d = r.height(), g = r.padding() * 2, p = h + (v(r, "background-width-relative-to", "value", a) === "inner" ? 0 : g), y = d + (v(r, "background-height-relative-to", "value", a) === "inner" ? 0 : g), b = r._private.rscratch, m = v(r, "background-clip", "value", a), E = m === "node", T = v(r, "background-image-opacity", "value", a) * n, S = v(r, "background-image-smoothing", "value", a), w = r.pstyle("corner-radius").value;
  w !== "auto" && (w = r.pstyle("corner-radius").pfValue);
  var x = e.width || e.cachedW, C = e.height || e.cachedH;
  (x == null || C == null) && (document.body.appendChild(e), x = e.cachedW = e.width || e.offsetWidth, C = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var D = x, A = C;
  if (v(r, "background-width", "value", a) !== "auto" && (v(r, "background-width", "units", a) === "%" ? D = v(r, "background-width", "pfValue", a) * p : D = v(r, "background-width", "pfValue", a)), v(r, "background-height", "value", a) !== "auto" && (v(r, "background-height", "units", a) === "%" ? A = v(r, "background-height", "pfValue", a) * y : A = v(r, "background-height", "pfValue", a)), !(D === 0 || A === 0)) {
    if (c === "contain") {
      var L = Math.min(p / D, y / A);
      D *= L, A *= L;
    } else if (c === "cover") {
      var L = Math.max(p / D, y / A);
      D *= L, A *= L;
    }
    var R = s - p / 2, M = v(r, "background-position-x", "units", a), P = v(r, "background-position-x", "pfValue", a);
    M === "%" ? R += (p - D) * P : R += P;
    var N = v(r, "background-offset-x", "units", a), O = v(r, "background-offset-x", "pfValue", a);
    N === "%" ? R += (p - D) * O : R += O;
    var k = l - y / 2, F = v(r, "background-position-y", "units", a), _ = v(r, "background-position-y", "pfValue", a);
    F === "%" ? k += (y - A) * _ : k += _;
    var B = v(r, "background-offset-y", "units", a), G = v(r, "background-offset-y", "pfValue", a);
    B === "%" ? k += (y - A) * G : k += G, b.pathCache && (R -= s, k -= l, s = 0, l = 0);
    var H = t.globalAlpha;
    t.globalAlpha = T;
    var X = i.getImgSmoothing(t), $ = !1;
    if (S === "no" && X ? (i.setImgSmoothing(t, !1), $ = !0) : S === "yes" && !X && (i.setImgSmoothing(t, !0), $ = !0), f === "no-repeat")
      E && (t.save(), b.pathCache ? t.clip(b.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, s, l, p, y, w, b), t.clip())), i.safeDrawImage(t, e, 0, 0, x, C, R, k, D, A), E && t.restore();
    else {
      var K = t.createPattern(e, f);
      t.fillStyle = K, i.nodeShapes[i.getNodeShape(r)].draw(t, s, l, p, y, w, b), t.translate(R, k), t.fill(), t.translate(-R, -k);
    }
    t.globalAlpha = H, $ && i.setImgSmoothing(t, X);
  }
};
var Br = {};
Br.eleTextBiggerThanMin = function(t, e) {
  if (!e) {
    var r = t.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(fs(r * a));
    e = Math.pow(2, n);
  }
  var i = t.pstyle("font-size").pfValue * e, o = t.pstyle("min-zoomed-font-size").pfValue;
  return !(i < o);
};
Br.drawElementText = function(t, e, r, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, o = this;
  if (a == null) {
    if (i && !o.eleTextBiggerThanMin(e))
      return;
  } else if (a === !1)
    return;
  if (e.isNode()) {
    var s = e.pstyle("label");
    if (!s || !s.value)
      return;
    var l = o.getLabelJustification(e), u = e.pstyle("text-metrics").strValue === "glyph";
    t.textAlign = l, t.textBaseline = u ? "alphabetic" : "bottom";
  } else {
    var v = e.element()._private.rscratch.badLine, c = e.pstyle("label"), f = e.pstyle("source-label"), h = e.pstyle("target-label");
    if (v || (!c || !c.value) && (!f || !f.value) && (!h || !h.value))
      return;
    t.textAlign = "center", t.textBaseline = "bottom";
  }
  var d = !r, g;
  r && (g = r, t.translate(-g.x1, -g.y1)), n == null ? (o.drawText(t, e, null, d, i), e.isEdge() && (o.drawText(t, e, "source", d, i), o.drawText(t, e, "target", d, i))) : o.drawText(t, e, n, d, i), r && t.translate(g.x1, g.y1);
};
Br.getFontCache = function(t) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var r = 0; r < this.fontCaches.length; r++)
    if (e = this.fontCaches[r], e.context === t)
      return e;
  return e = {
    context: t
  }, this.fontCaches.push(e), e;
};
Br.setupTextStyle = function(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, o = e.pstyle("font-weight").strValue, s = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * s, u = e.pstyle("color").value, v = e.pstyle("text-outline-color").value;
  t.font = a + " " + o + " " + n + " " + i, t.lineJoin = "round", this.colorFillStyle(t, u[0], u[1], u[2], s), this.colorStrokeStyle(t, v[0], v[1], v[2], l);
};
function pm(t, e, r, a, n) {
  var i = Math.min(a, n), o = i / 2, s = e + a / 2, l = r + n / 2;
  t.beginPath(), t.arc(s, l, o, 0, Math.PI * 2), t.closePath();
}
function ju(t, e, r, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, o = Math.min(i, a / 2, n / 2);
  t.beginPath(), t.moveTo(e + o, r), t.lineTo(e + a - o, r), t.quadraticCurveTo(e + a, r, e + a, r + o), t.lineTo(e + a, r + n - o), t.quadraticCurveTo(e + a, r + n, e + a - o, r + n), t.lineTo(e + o, r + n), t.quadraticCurveTo(e, r + n, e, r + n - o), t.lineTo(e, r + o), t.quadraticCurveTo(e, r, e + o, r), t.closePath();
}
Br.getTextAngle = function(t, e) {
  var r, a = t._private, n = a.rscratch, i = e ? e + "-" : "", o = t.pstyle(i + "text-rotation");
  if (o.strValue === "autorotate") {
    var s = mt(n, "labelAngle", e);
    r = t.isEdge() ? s : 0;
  } else o.strValue === "none" ? r = 0 : r = o.pfValue;
  return r;
};
Br.drawText = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, o = i.rscratch, s = n ? e.effectiveOpacity() : 1;
  if (!(n && (s === 0 || e.pstyle("text-opacity").value === 0))) {
    r === "main" && (r = null);
    var l = mt(o, "labelX", r), u = mt(o, "labelY", r), v, c, f = this.getLabelText(e, r);
    if (f != null && f !== "" && !isNaN(l) && !isNaN(u)) {
      this.setupTextStyle(t, e, n);
      var h = r ? r + "-" : "", d = mt(o, "labelWidth", r), g = mt(o, "labelHeight", r), p = mt(o, "labelActualDescent", r), y = e.pstyle(h + "text-margin-x").pfValue, b = e.pstyle(h + "text-margin-y").pfValue, m = e.isEdge(), E = e.pstyle("text-halign").value, T = e.pstyle("text-valign").value;
      m && (E = "center", T = "center"), l += y, u += b;
      var S;
      a ? S = this.getTextAngle(e, r) : S = 0, S !== 0 && (v = l, c = u, t.translate(v, c), t.rotate(S), l = 0, u = 0);
      var w = ra(E), x = aa(T);
      switch (x) {
        case "top":
          break;
        case "center":
          u += g / 2;
          break;
        case "bottom":
          u += g;
          break;
      }
      var C = e.pstyle("text-background-opacity").value, D = e.pstyle("text-border-opacity").value, A = e.pstyle("text-border-width").pfValue, L = e.pstyle("text-background-padding").pfValue, R = e.pstyle("text-background-shape").strValue, M = R === "round-rectangle" || R === "roundrectangle", P = R === "circle", N = 2;
      if (C > 0 || A > 0 && D > 0) {
        var O = t.fillStyle, k = t.strokeStyle, F = t.lineWidth, _ = e.pstyle("text-background-color").value, B = e.pstyle("text-border-color").value, G = e.pstyle("text-border-style").value, H = C > 0, X = A > 0 && D > 0, $ = l - L;
        switch (w) {
          case "left":
            $ -= d;
            break;
          case "center":
            $ -= d / 2;
            break;
        }
        var K = u - g - L, ee = d + 2 * L, ae = g + 2 * L;
        if (H && (t.fillStyle = "rgba(".concat(_[0], ",").concat(_[1], ",").concat(_[2], ",").concat(C * s, ")")), X && (t.strokeStyle = "rgba(".concat(B[0], ",").concat(B[1], ",").concat(B[2], ",").concat(D * s, ")"), t.lineWidth = A, t.setLineDash))
          switch (G) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash([4, 2]);
              break;
            case "double":
              t.lineWidth = A / 4, t.setLineDash([]);
              break;
            default:
              t.setLineDash([]);
              break;
          }
        if (M ? (t.beginPath(), ju(t, $, K, ee, ae, N)) : P ? (t.beginPath(), pm(t, $, K, ee, ae)) : (t.beginPath(), t.rect($, K, ee, ae)), H && t.fill(), X && t.stroke(), X && G === "double") {
          var Z = A / 2;
          t.beginPath(), M ? ju(t, $ + Z, K + Z, ee - 2 * Z, ae - 2 * Z, N) : t.rect($ + Z, K + Z, ee - 2 * Z, ae - 2 * Z), t.stroke();
        }
        t.fillStyle = O, t.strokeStyle = k, t.lineWidth = F, t.setLineDash && t.setLineDash([]);
      }
      var V = 2 * e.pstyle("text-outline-width").pfValue;
      if (V > 0 && (t.lineWidth = V), u -= p, e.pstyle("text-wrap").value === "wrap") {
        var q = mt(o, "labelWrapCachedLines", r), Y = mt(o, "labelLineHeight", r), Q = d / 2, re = this.getLabelJustification(e);
        switch (re === "auto" || (w === "left" ? re === "left" ? l += -d : re === "center" && (l += -Q) : w === "center" ? re === "left" ? l += -Q : re === "right" && (l += Q) : w === "right" && (re === "center" ? l += Q : re === "right" && (l += d))), x) {
          case "top":
            u -= (q.length - 1) * Y;
            break;
          case "center":
          case "bottom":
            u -= (q.length - 1) * Y;
            break;
        }
        for (var ue = 0; ue < q.length; ue++)
          V > 0 && t.strokeText(q[ue], l, u), t.fillText(q[ue], l, u), u += Y;
      } else
        V > 0 && t.strokeText(f, l, u), t.fillText(f, l, u);
      S !== 0 && (t.rotate(-S), t.translate(-v, -c));
    }
  }
};
var br = {};
br.drawNode = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, o = this, s, l, u = e._private, v = u.rscratch, c = e.position();
  if (!(!ne(c.x) || !ne(c.y)) && !(i && !e.visible())) {
    var f = i ? e.effectiveOpacity() : 1, h = o.usePaths(), d, g = !1, p = e.padding();
    s = e.width() + 2 * p, l = e.height() + 2 * p;
    var y;
    r && (y = r, t.translate(-y.x1, -y.y1));
    for (var b = e.pstyle("background-image"), m = b.value, E = new Array(m.length), T = new Array(m.length), S = 0, w = 0; w < m.length; w++) {
      var x = m[w], C = E[w] = x != null && x !== "none";
      if (C) {
        var D = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", w);
        S++, T[w] = o.getCachedImage(x, D, function() {
          u.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var A = e.pstyle("background-blacken").value, L = e.pstyle("border-width").pfValue, R = e.pstyle("background-opacity").value * f, M = e.pstyle("border-color").value, P = e.pstyle("border-style").value, N = e.pstyle("border-join").value, O = e.pstyle("border-cap").value, k = e.pstyle("border-position").value, F = e.pstyle("border-dash-pattern").pfValue, _ = e.pstyle("border-dash-offset").pfValue, B = e.pstyle("border-opacity").value * f, G = e.pstyle("outline-width").pfValue, H = e.pstyle("outline-color").value, X = e.pstyle("outline-style").value, $ = e.pstyle("outline-opacity").value * f, K = e.pstyle("outline-offset").value, ee = e.pstyle("corner-radius").value;
    ee !== "auto" && (ee = e.pstyle("corner-radius").pfValue);
    var ae = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R;
      o.eleFillStyle(t, e, I);
    }, Z = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B;
      o.colorStrokeStyle(t, M[0], M[1], M[2], I);
    }, V = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $;
      o.colorStrokeStyle(t, H[0], H[1], H[2], I);
    }, q = function(I, z, U, W) {
      var J = o.nodePathCache = o.nodePathCache || [], ve = Sv(U === "polygon" ? U + "," + W.join(",") : U, "" + z, "" + I, "" + ee), te = J[ve], ie, se = !1;
      return te != null ? (ie = te, se = !0, v.pathCache = ie) : (ie = new Path2D(), J[ve] = v.pathCache = ie), {
        path: ie,
        cacheHit: se
      };
    }, Y = e.pstyle("shape").strValue, Q = e.pstyle("shape-polygon-points").pfValue;
    if (h) {
      t.translate(c.x, c.y);
      var re = q(s, l, Y, Q);
      d = re.path, g = re.cacheHit;
    }
    var ue = function() {
      if (!g) {
        var I = c;
        h && (I = {
          x: 0,
          y: 0
        }), o.nodeShapes[o.getNodeShape(e)].draw(d || t, I.x, I.y, s, l, ee, v);
      }
      h ? t.fill(d) : t.fill();
    }, Ae = function() {
      for (var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = u.backgrounding, W = 0, J = 0; J < T.length; J++) {
        var ve = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", J);
        if (z && ve === "over" || !z && ve === "inside") {
          W++;
          continue;
        }
        E[J] && T[J].complete && !T[J].error && (W++, o.drawInscribedImage(t, T[J], e, J, I));
      }
      u.backgrounding = W !== S, U !== u.backgrounding && e.updateStyle(!1);
    }, we = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      o.hasPie(e) && (o.drawPie(t, e, z), I && (h || o.nodeShapes[o.getNodeShape(e)].draw(t, c.x, c.y, s, l, ee, v)));
    }, me = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      o.hasStripe(e) && (t.save(), h ? t.clip(v.pathCache) : (o.nodeShapes[o.getNodeShape(e)].draw(t, c.x, c.y, s, l, ee, v), t.clip()), o.drawStripe(t, e, z), t.restore(), I && (h || o.nodeShapes[o.getNodeShape(e)].draw(t, c.x, c.y, s, l, ee, v)));
    }, ge = function() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f, z = (A > 0 ? A : -A) * I, U = A > 0 ? 0 : 255;
      A !== 0 && (o.colorFillStyle(t, U, U, U, z), h ? t.fill(d) : t.fill());
    }, oe = function() {
      if (L > 0) {
        if (t.lineWidth = L, t.lineCap = O, t.lineJoin = N, t.setLineDash)
          switch (P) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash(F), t.lineDashOffset = _;
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
        if (k !== "center") {
          if (t.save(), t.lineWidth *= 2, k === "inside")
            h ? t.clip(d) : t.clip();
          else {
            var I = new Path2D();
            I.rect(-s / 2 - L, -l / 2 - L, s + 2 * L, l + 2 * L), I.addPath(d), t.clip(I, "evenodd");
          }
          h ? t.stroke(d) : t.stroke(), t.restore();
        } else
          h ? t.stroke(d) : t.stroke();
        if (P === "double") {
          t.lineWidth = L / 3;
          var z = t.globalCompositeOperation;
          t.globalCompositeOperation = "destination-out", h ? t.stroke(d) : t.stroke(), t.globalCompositeOperation = z;
        }
        t.setLineDash && t.setLineDash([]);
      }
    }, he = function() {
      if (G > 0) {
        if (t.lineWidth = G, t.lineCap = "butt", t.setLineDash)
          switch (X) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
        var I = c;
        h && (I = {
          x: 0,
          y: 0
        });
        var z = o.getNodeShape(e), U = L;
        k === "inside" && (U = 0), k === "outside" && (U *= 2);
        var W = (s + U + (G + K)) / s, J = (l + U + (G + K)) / l, ve = s * W, te = l * J, ie = o.nodeShapes[z].points, se;
        if (h) {
          var pe = q(ve, te, z, ie);
          se = pe.path;
        }
        if (z === "ellipse")
          o.drawEllipsePath(se || t, I.x, I.y, ve, te);
        else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(z)) {
          var xe = 0, Te = 0, ce = 0;
          z === "round-diamond" ? xe = (U + K + G) * 1.4 : z === "round-heptagon" ? (xe = (U + K + G) * 1.075, ce = -(U / 2 + K + G) / 35) : z === "round-hexagon" ? xe = (U + K + G) * 1.12 : z === "round-pentagon" ? (xe = (U + K + G) * 1.13, ce = -(U / 2 + K + G) / 15) : z === "round-tag" ? (xe = (U + K + G) * 1.12, Te = (U / 2 + G + K) * 0.07) : z === "round-triangle" && (xe = (U + K + G) * (Math.PI / 2), ce = -(U + K / 2 + G) / Math.PI), xe !== 0 && (W = (s + xe) / s, ve = s * W, ["round-hexagon", "round-tag"].includes(z) || (J = (l + xe) / l, te = l * J)), ee = ee === "auto" ? Bv(ve, te) : ee;
          for (var Se = ve / 2, Re = te / 2, nt = ee + (U + G + K) / 2, Xe = new Array(ie.length / 2), It = new Array(ie.length / 2), $e = 0; $e < ie.length / 2; $e++)
            Xe[$e] = {
              x: I.x + Te + Se * ie[$e * 2],
              y: I.y + ce + Re * ie[$e * 2 + 1]
            };
          var Ke, Je, lt, _t, Ye = Xe.length;
          for (Je = Xe[Ye - 1], Ke = 0; Ke < Ye; Ke++)
            lt = Xe[Ke % Ye], _t = Xe[(Ke + 1) % Ye], It[Ke] = Ss(Je, lt, _t, nt), Je = lt, lt = _t;
          o.drawRoundPolygonPath(se || t, I.x + Te, I.y + ce, s * W, l * J, ie, It);
        } else if (["roundrectangle", "round-rectangle"].includes(z))
          ee = ee === "auto" ? cr(ve, te) : ee, o.drawRoundRectanglePath(se || t, I.x, I.y, ve, te, ee + (U + G + K) / 2);
        else if (["cutrectangle", "cut-rectangle"].includes(z))
          ee = ee === "auto" ? gs() : ee, o.drawCutRectanglePath(se || t, I.x, I.y, ve, te, null, ee + (U + G + K) / 4);
        else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(z))
          ee = ee === "auto" ? cr(ve, te) : ee, o.drawBottomRoundRectanglePath(se || t, I.x, I.y, ve, te, ee + (U + G + K) / 2);
        else if (z === "barrel")
          o.drawBarrelPath(se || t, I.x, I.y, ve, te);
        else if (z.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(z)) {
          var $t = (U + G + K) / s;
          ie = In(Mn(ie, $t)), o.drawPolygonPath(se || t, I.x, I.y, s, l, ie);
        } else {
          var Mt = (U + G + K) / s;
          ie = In(Mn(ie, -Mt)), o.drawPolygonPath(se || t, I.x, I.y, s, l, ie);
        }
        if (h ? t.stroke(se) : t.stroke(), X === "double") {
          t.lineWidth = U / 3;
          var er = t.globalCompositeOperation;
          t.globalCompositeOperation = "destination-out", h ? t.stroke(se) : t.stroke(), t.globalCompositeOperation = er;
        }
        t.setLineDash && t.setLineDash([]);
      }
    }, fe = function() {
      n && o.drawNodeOverlay(t, e, c, s, l);
    }, Ee = function() {
      n && o.drawNodeUnderlay(t, e, c, s, l);
    }, be = function() {
      o.drawElementText(t, e, null, a);
    }, De = e.pstyle("ghost").value === "yes";
    if (De) {
      var Le = e.pstyle("ghost-offset-x").pfValue, Ne = e.pstyle("ghost-offset-y").pfValue, Oe = e.pstyle("ghost-opacity").value, Ie = Oe * f;
      t.translate(Le, Ne), V(), he(), ae(Oe * R), ue(), Ae(Ie, !0), Z(Oe * B), oe(), we(A !== 0 || L !== 0), me(A !== 0 || L !== 0), Ae(Ie, !1), ge(Ie), t.translate(-Le, -Ne);
    }
    h && t.translate(-c.x, -c.y), Ee(), h && t.translate(c.x, c.y), V(), he(), ae(), ue(), Ae(f, !0), Z(), oe(), we(A !== 0 || L !== 0), me(A !== 0 || L !== 0), Ae(f, !1), ge(), h && t.translate(-c.x, -c.y), be(), fe(), r && t.translate(y.x1, y.y1);
  }
};
var qc = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, a, n, i, o) {
    var s = this;
    if (a.visible()) {
      var l = a.pstyle("".concat(e, "-padding")).pfValue, u = a.pstyle("".concat(e, "-opacity")).value, v = a.pstyle("".concat(e, "-color")).value, c = a.pstyle("".concat(e, "-shape")).value, f = a.pstyle("".concat(e, "-corner-radius")).value;
      if (u > 0) {
        if (n = n || a.position(), i == null || o == null) {
          var h = a.padding();
          i = a.width() + 2 * h, o = a.height() + 2 * h;
        }
        s.colorFillStyle(r, v[0], v[1], v[2], u), s.nodeShapes[c].draw(r, n.x, n.y, i + l * 2, o + l * 2, f), r.fill();
      }
    }
  };
};
br.drawNodeOverlay = qc("overlay");
br.drawNodeUnderlay = qc("underlay");
br.hasPie = function(t) {
  return t = t[0], t._private.hasPie;
};
br.hasStripe = function(t) {
  return t = t[0], t._private.hasStripe;
};
br.drawPie = function(t, e, r, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = e.pstyle("pie-size"), o = e.pstyle("pie-hole"), s = e.pstyle("pie-start-angle").pfValue, l = a.x, u = a.y, v = e.width(), c = e.height(), f = Math.min(v, c) / 2, h, d = 0, g = this.usePaths();
  if (g && (l = 0, u = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2), o.units === "%" ? h = f * o.pfValue : o.pfValue !== void 0 && (h = o.pfValue / 2), !(h >= f))
    for (var p = 1; p <= n.pieBackgroundN; p++) {
      var y = e.pstyle("pie-" + p + "-background-size").value, b = e.pstyle("pie-" + p + "-background-color").value, m = e.pstyle("pie-" + p + "-background-opacity").value * r, E = y / 100;
      E + d > 1 && (E = 1 - d);
      var T = 1.5 * Math.PI + 2 * Math.PI * d;
      T += s;
      var S = 2 * Math.PI * E, w = T + S;
      y === 0 || d >= 1 || d + E > 1 || (h === 0 ? (t.beginPath(), t.moveTo(l, u), t.arc(l, u, f, T, w), t.closePath()) : (t.beginPath(), t.arc(l, u, f, T, w), t.arc(l, u, h, w, T, !0), t.closePath()), this.colorFillStyle(t, b[0], b[1], b[2], m), t.fill(), d += E);
    }
};
br.drawStripe = function(t, e, r, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = a.x, o = a.y, s = e.width(), l = e.height(), u = 0, v = this.usePaths();
  t.save();
  var c = e.pstyle("stripe-direction").value, f = e.pstyle("stripe-size");
  switch (c) {
    case "vertical":
      break;
    // default
    case "righward":
      t.rotate(-Math.PI / 2);
      break;
  }
  var h = s, d = l;
  f.units === "%" ? (h = h * f.pfValue, d = d * f.pfValue) : f.pfValue !== void 0 && (h = f.pfValue, d = f.pfValue), v && (i = 0, o = 0), o -= h / 2, i -= d / 2;
  for (var g = 1; g <= n.stripeBackgroundN; g++) {
    var p = e.pstyle("stripe-" + g + "-background-size").value, y = e.pstyle("stripe-" + g + "-background-color").value, b = e.pstyle("stripe-" + g + "-background-opacity").value * r, m = p / 100;
    m + u > 1 && (m = 1 - u), !(p === 0 || u >= 1 || u + m > 1) && (t.beginPath(), t.rect(i, o + d * u, h, d * m), t.closePath(), this.colorFillStyle(t, y[0], y[1], y[2], b), t.fill(), u += m);
  }
  t.restore();
};
var wt = {}, ym = 100;
wt.getPixelRatio = function() {
  var t = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = this.cy.window(), r = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
  return (e.devicePixelRatio || 1) / r;
};
wt.paintCache = function(t) {
  for (var e = this.paintCaches = this.paintCaches || [], r = !0, a, n = 0; n < e.length; n++)
    if (a = e[n], a.context === t) {
      r = !1;
      break;
    }
  return r && (a = {
    context: t
  }, e.push(a)), a;
};
wt.createGradientStyleFor = function(t, e, r, a, n) {
  var i, o = this.usePaths(), s = r.pstyle(e + "-gradient-stop-colors").value, l = r.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient")
    if (r.isEdge()) {
      var u = r.sourceEndpoint(), v = r.targetEndpoint(), c = r.midpoint(), f = Ir(u, c), h = Ir(v, c);
      i = t.createRadialGradient(c.x, c.y, 0, c.x, c.y, Math.max(f, h));
    } else {
      var d = o ? {
        x: 0,
        y: 0
      } : r.position(), g = r.paddedWidth(), p = r.paddedHeight();
      i = t.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(g, p));
    }
  else if (r.isEdge()) {
    var y = r.sourceEndpoint(), b = r.targetEndpoint();
    i = t.createLinearGradient(y.x, y.y, b.x, b.y);
  } else {
    var m = o ? {
      x: 0,
      y: 0
    } : r.position(), E = r.paddedWidth(), T = r.paddedHeight(), S = E / 2, w = T / 2, x = r.pstyle("background-gradient-direction").value;
    switch (x) {
      case "to-bottom":
        i = t.createLinearGradient(m.x, m.y - w, m.x, m.y + w);
        break;
      case "to-top":
        i = t.createLinearGradient(m.x, m.y + w, m.x, m.y - w);
        break;
      case "to-left":
        i = t.createLinearGradient(m.x + S, m.y, m.x - S, m.y);
        break;
      case "to-right":
        i = t.createLinearGradient(m.x - S, m.y, m.x + S, m.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = t.createLinearGradient(m.x - S, m.y - w, m.x + S, m.y + w);
        break;
      case "to-top-right":
      case "to-right-top":
        i = t.createLinearGradient(m.x - S, m.y + w, m.x + S, m.y - w);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = t.createLinearGradient(m.x + S, m.y - w, m.x - S, m.y + w);
        break;
      case "to-top-left":
      case "to-left-top":
        i = t.createLinearGradient(m.x + S, m.y + w, m.x - S, m.y - w);
        break;
    }
  }
  if (!i) return null;
  for (var C = l.length === s.length, D = s.length, A = 0; A < D; A++)
    i.addColorStop(C ? l[A] : A / (D - 1), "rgba(" + s[A][0] + "," + s[A][1] + "," + s[A][2] + "," + n + ")");
  return i;
};
wt.gradientFillStyle = function(t, e, r, a) {
  var n = this.createGradientStyleFor(t, "background", e, r, a);
  if (!n) return null;
  t.fillStyle = n;
};
wt.colorFillStyle = function(t, e, r, a, n) {
  t.fillStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
wt.eleFillStyle = function(t, e, r) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientFillStyle(t, e, a, r);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(t, n[0], n[1], n[2], r);
  }
};
wt.gradientStrokeStyle = function(t, e, r, a) {
  var n = this.createGradientStyleFor(t, "line", e, r, a);
  if (!n) return null;
  t.strokeStyle = n;
};
wt.colorStrokeStyle = function(t, e, r, a, n) {
  t.strokeStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
wt.eleStrokeStyle = function(t, e, r) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientStrokeStyle(t, e, a, r);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(t, n[0], n[1], n[2], r);
  }
};
wt.matchCanvasSize = function(t) {
  var e = this, r = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], o = e.getPixelRatio(), s = e.motionBlurPxRatio;
  (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (o = s);
  var l = n * o, u = i * o, v;
  if (!(l === e.canvasWidth && u === e.canvasHeight)) {
    e.fontCaches = null;
    var c = r.canvasContainer;
    c.style.width = n + "px", c.style.height = i + "px";
    for (var f = 0; f < e.CANVAS_LAYERS; f++)
      v = r.canvases[f], v.width = l, v.height = u, v.style.width = n + "px", v.style.height = i + "px";
    for (var f = 0; f < e.BUFFER_COUNT; f++)
      v = r.bufferCanvases[f], v.width = l, v.height = u, v.style.width = n + "px", v.style.height = i + "px";
    e.textureMult = 1, o <= 1 && (v = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, v.width = l * e.textureMult, v.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u, e.pixelRatio = o;
  }
};
wt.renderTo = function(t, e, r, a) {
  this.render({
    forcedContext: t,
    forcedZoom: e,
    forcedPan: r,
    drawAllLayers: !0,
    forcedPxRatio: a
  });
};
wt.clearCanvas = function() {
  var t = this, e = t.data;
  function r(a) {
    a.clearRect(0, 0, t.canvasWidth, t.canvasHeight);
  }
  r(e.contexts[t.NODE]), r(e.contexts[t.DRAG]);
};
wt.render = function(t) {
  var e = this;
  t = t || Iv();
  var r = e.cy, a = t.forcedContext, n = t.drawAllLayers, i = t.drawOnlyNodeLayer, o = t.forcedZoom, s = t.forcedPan, l = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, u = e.data, v = u.canvasNeedsRedraw, c = e.textureOnViewport && !a && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming), f = t.motionBlur !== void 0 ? t.motionBlur : e.motionBlur, h = e.motionBlurPxRatio, d = r.hasCompoundNodes(), g = e.hoverData.draggingEles, p = !!(e.hoverData.selecting || e.touchData.selecting);
  f = f && !a && e.motionBlurEnabled && !p;
  var y = f;
  a || (e.prevPxRatio !== l && (e.invalidateContainerClientCoordsCache(), e.matchCanvasSize(e.container), e.redrawHint("eles", !0), e.redrawHint("drag", !0)), e.prevPxRatio = l), !a && e.motionBlurTimeout && clearTimeout(e.motionBlurTimeout), f && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (y = !1), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry)), e.clearingMotionBlur && (e.motionBlurPxRatio = 1), e.textureDrawLastFrame && !c && (v[e.NODE] = !0, v[e.SELECT_BOX] = !0);
  var b = r.style(), m = r.zoom(), E = o !== void 0 ? o : m, T = r.pan(), S = {
    x: T.x,
    y: T.y
  }, w = {
    zoom: m,
    pan: {
      x: T.x,
      y: T.y
    }
  }, x = e.prevViewport, C = x === void 0 || w.zoom !== x.zoom || w.pan.x !== x.pan.x || w.pan.y !== x.pan.y;
  !C && !(g && !d) && (e.motionBlurPxRatio = 1), s && (S = s), E *= l, S.x *= l, S.y *= l;
  var D = e.getCachedZSortedEles();
  function A(Z, V, q, Y, Q) {
    var re = Z.globalCompositeOperation;
    Z.globalCompositeOperation = "destination-out", e.colorFillStyle(Z, 255, 255, 255, e.motionBlurTransparency), Z.fillRect(V, q, Y, Q), Z.globalCompositeOperation = re;
  }
  function L(Z, V) {
    var q, Y, Q, re;
    !e.clearingMotionBlur && (Z === u.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || Z === u.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]) ? (q = {
      x: T.x * h,
      y: T.y * h
    }, Y = m * h, Q = e.canvasWidth * h, re = e.canvasHeight * h) : (q = S, Y = E, Q = e.canvasWidth, re = e.canvasHeight), Z.setTransform(1, 0, 0, 1, 0, 0), V === "motionBlur" ? A(Z, 0, 0, Q, re) : !a && (V === void 0 || V) && Z.clearRect(0, 0, Q, re), n || (Z.translate(q.x, q.y), Z.scale(Y, Y)), s && Z.translate(s.x, s.y), o && Z.scale(o, o);
  }
  if (c || (e.textureDrawLastFrame = !1), c) {
    if (e.textureDrawLastFrame = !0, !e.textureCache) {
      e.textureCache = {}, e.textureCache.bb = r.mutableElements().boundingBox(), e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
      var R = e.data.bufferContexts[e.TEXTURE_BUFFER];
      R.setTransform(1, 0, 0, 1, 0, 0), R.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult), e.render({
        forcedContext: R,
        drawOnlyNodeLayer: !0,
        forcedPxRatio: l * e.textureMult
      });
      var w = e.textureCache.viewport = {
        zoom: r.zoom(),
        pan: r.pan(),
        width: e.canvasWidth,
        height: e.canvasHeight
      };
      w.mpan = {
        x: (0 - w.pan.x) / w.zoom,
        y: (0 - w.pan.y) / w.zoom
      };
    }
    v[e.DRAG] = !1, v[e.NODE] = !1;
    var M = u.contexts[e.NODE], P = e.textureCache.texture, w = e.textureCache.viewport;
    M.setTransform(1, 0, 0, 1, 0, 0), f ? A(M, 0, 0, w.width, w.height) : M.clearRect(0, 0, w.width, w.height);
    var N = b.core("outside-texture-bg-color").value, O = b.core("outside-texture-bg-opacity").value;
    e.colorFillStyle(M, N[0], N[1], N[2], O), M.fillRect(0, 0, w.width, w.height);
    var m = r.zoom();
    L(M, !1), M.clearRect(w.mpan.x, w.mpan.y, w.width / w.zoom / l, w.height / w.zoom / l), M.drawImage(P, w.mpan.x, w.mpan.y, w.width / w.zoom / l, w.height / w.zoom / l);
  } else e.textureOnViewport && !a && (e.textureCache = null);
  var k = r.extent(), F = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated(), _ = e.hideEdgesOnViewport && F, B = [];
  if (B[e.NODE] = !v[e.NODE] && f && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur, B[e.NODE] && (e.clearedForMotionBlur[e.NODE] = !0), B[e.DRAG] = !v[e.DRAG] && f && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur, B[e.DRAG] && (e.clearedForMotionBlur[e.DRAG] = !0), v[e.NODE] || n || i || B[e.NODE]) {
    var G = f && !B[e.NODE] && h !== 1, M = a || (G ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : u.contexts[e.NODE]), H = f && !G ? "motionBlur" : void 0;
    L(M, H), _ ? e.drawCachedNodes(M, D.nondrag, l, k) : e.drawLayeredElements(M, D.nondrag, l, k), e.debug && e.drawDebugPoints(M, D.nondrag), !n && !f && (v[e.NODE] = !1);
  }
  if (!i && (v[e.DRAG] || n || B[e.DRAG])) {
    var G = f && !B[e.DRAG] && h !== 1, M = a || (G ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : u.contexts[e.DRAG]);
    L(M, f && !G ? "motionBlur" : void 0), _ ? e.drawCachedNodes(M, D.drag, l, k) : e.drawCachedElements(M, D.drag, l, k), e.debug && e.drawDebugPoints(M, D.drag), !n && !f && (v[e.DRAG] = !1);
  }
  if (this.drawSelectionRectangle(t, L), f && h !== 1) {
    var X = u.contexts[e.NODE], $ = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE], K = u.contexts[e.DRAG], ee = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG], ae = function(V, q, Y) {
      V.setTransform(1, 0, 0, 1, 0, 0), Y || !y ? V.clearRect(0, 0, e.canvasWidth, e.canvasHeight) : A(V, 0, 0, e.canvasWidth, e.canvasHeight);
      var Q = h;
      V.drawImage(
        q,
        // img
        0,
        0,
        // sx, sy
        e.canvasWidth * Q,
        e.canvasHeight * Q,
        // sw, sh
        0,
        0,
        // x, y
        e.canvasWidth,
        e.canvasHeight
        // w, h
      );
    };
    (v[e.NODE] || B[e.NODE]) && (ae(X, $, B[e.NODE]), v[e.NODE] = !1), (v[e.DRAG] || B[e.DRAG]) && (ae(K, ee, B[e.DRAG]), v[e.DRAG] = !1);
  }
  e.prevViewport = w, e.clearingMotionBlur && (e.clearingMotionBlur = !1, e.motionBlurCleared = !0, e.motionBlur = !0), f && (e.motionBlurTimeout = setTimeout(function() {
    e.motionBlurTimeout = null, e.clearedForMotionBlur[e.NODE] = !1, e.clearedForMotionBlur[e.DRAG] = !1, e.motionBlur = !1, e.clearingMotionBlur = !c, e.mbFrames = 0, v[e.NODE] = !0, v[e.DRAG] = !0, e.redraw();
  }, ym)), a || r.emit("render");
};
var ya;
wt.drawSelectionRectangle = function(t, e) {
  var r = this, a = r.cy, n = r.data, i = a.style(), o = t.drawOnlyNodeLayer, s = t.drawAllLayers, l = n.canvasNeedsRedraw, u = t.forcedContext;
  if (r.showFps || !o && l[r.SELECT_BOX] && !s) {
    var v = u || n.contexts[r.SELECT_BOX];
    if (e(v), r.selection[4] == 1 && (r.hoverData.selecting || r.touchData.selecting)) {
      var c = r.cy.zoom(), f = i.core("selection-box-border-width").value / c;
      v.lineWidth = f, v.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", v.fillRect(r.selection[0], r.selection[1], r.selection[2] - r.selection[0], r.selection[3] - r.selection[1]), f > 0 && (v.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", v.strokeRect(r.selection[0], r.selection[1], r.selection[2] - r.selection[0], r.selection[3] - r.selection[1]));
    }
    if (n.bgActivePosistion && !r.hoverData.selecting) {
      var c = r.cy.zoom(), h = n.bgActivePosistion;
      v.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", v.beginPath(), v.arc(h.x, h.y, i.core("active-bg-size").pfValue / c, 0, 2 * Math.PI), v.fill();
    }
    var d = r.lastRedrawTime;
    if (r.showFps && d) {
      d = Math.round(d);
      var g = Math.round(1e3 / d), p = "1 frame = " + d + " ms = " + g + " fps";
      if (v.setTransform(1, 0, 0, 1, 0, 0), v.fillStyle = "rgba(255, 0, 0, 0.75)", v.strokeStyle = "rgba(255, 0, 0, 0.75)", v.font = "30px Arial", !ya) {
        var y = v.measureText(p);
        ya = y.actualBoundingBoxAscent;
      }
      v.fillText(p, 0, ya);
      var b = 60;
      v.strokeRect(0, ya + 10, 250, 20), v.fillRect(0, ya + 10, 250 * Math.min(g / b, 1), 20);
    }
    s || (l[r.SELECT_BOX] = !1);
  }
};
function ev(t, e, r) {
  var a = t.createShader(e);
  if (t.shaderSource(a, r), t.compileShader(a), !t.getShaderParameter(a, t.COMPILE_STATUS))
    throw new Error(t.getShaderInfoLog(a));
  return a;
}
function mm(t, e, r) {
  var a = ev(t, t.VERTEX_SHADER, e), n = ev(t, t.FRAGMENT_SHADER, r), i = t.createProgram();
  if (t.attachShader(i, a), t.attachShader(i, n), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS))
    throw new Error("Could not initialize shaders");
  return i;
}
function bm(t, e, r) {
  r === void 0 && (r = e);
  var a = t.makeOffscreenCanvas(e, r), n = a.context = a.getContext("2d");
  return a.clear = function() {
    return n.clearRect(0, 0, a.width, a.height);
  }, a.clear(), a;
}
function Rs(t) {
  var e = t.pixelRatio, r = t.cy.zoom(), a = t.cy.pan();
  return {
    zoom: r * e,
    pan: {
      x: a.x * e,
      y: a.y * e
    }
  };
}
function wm(t) {
  var e = t.pixelRatio, r = t.cy.zoom();
  return r * e;
}
function Em(t, e, r, a, n) {
  var i = a * r + e.x, o = n * r + e.y;
  return o = Math.round(t.canvasHeight - o), [i, o];
}
function xm(t, e) {
  return e.picking ? !0 : t.pstyle("background-fill").value !== "solid" || t.pstyle("background-image").strValue !== "none" ? !1 : t.pstyle("border-width").value === 0 || t.pstyle("border-opacity").value === 0 ? !0 : t.pstyle("border-style").value === "solid";
}
function Tm(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Tr(t, e, r) {
  var a = t[0] / 255, n = t[1] / 255, i = t[2] / 255, o = e, s = r || new Array(4);
  return s[0] = a * o, s[1] = n * o, s[2] = i * o, s[3] = o, s;
}
function Ur(t, e) {
  var r = e || new Array(4);
  return r[0] = (t >> 0 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (t >> 16 & 255) / 255, r[3] = (t >> 24 & 255) / 255, r;
}
function Cm(t) {
  return t[0] + (t[1] << 8) + (t[2] << 16) + (t[3] << 24);
}
function Dm(t, e) {
  var r = t.createTexture();
  return r.buffer = function(a) {
    t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_NEAREST), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, a), t.generateMipmap(t.TEXTURE_2D), t.bindTexture(t.TEXTURE_2D, null);
  }, r.deleteTexture = function() {
    t.deleteTexture(r);
  }, r;
}
function Yc(t, e) {
  switch (e) {
    case "float":
      return [1, t.FLOAT, 4];
    case "vec2":
      return [2, t.FLOAT, 4];
    case "vec3":
      return [3, t.FLOAT, 4];
    case "vec4":
      return [4, t.FLOAT, 4];
    case "int":
      return [1, t.INT, 4];
    case "ivec2":
      return [2, t.INT, 4];
  }
}
function Hc(t, e, r) {
  switch (e) {
    case t.FLOAT:
      return new Float32Array(r);
    case t.INT:
      return new Int32Array(r);
  }
}
function Sm(t, e, r, a, n, i) {
  switch (e) {
    case t.FLOAT:
      return new Float32Array(r.buffer, i * a, n);
    case t.INT:
      return new Int32Array(r.buffer, i * a, n);
  }
}
function Am(t, e, r, a) {
  var n = Yc(t, e), i = Qe(n, 2), o = i[0], s = i[1], l = Hc(t, s, a), u = t.createBuffer();
  return t.bindBuffer(t.ARRAY_BUFFER, u), t.bufferData(t.ARRAY_BUFFER, l, t.STATIC_DRAW), s === t.FLOAT ? t.vertexAttribPointer(r, o, s, !1, 0, 0) : s === t.INT && t.vertexAttribIPointer(r, o, s, 0, 0), t.enableVertexAttribArray(r), t.bindBuffer(t.ARRAY_BUFFER, null), u;
}
function zt(t, e, r, a) {
  var n = Yc(t, r), i = Qe(n, 3), o = i[0], s = i[1], l = i[2], u = Hc(t, s, e * o), v = o * l, c = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, c), t.bufferData(t.ARRAY_BUFFER, e * v, t.DYNAMIC_DRAW), t.enableVertexAttribArray(a), s === t.FLOAT ? t.vertexAttribPointer(a, o, s, !1, v, 0) : s === t.INT && t.vertexAttribIPointer(a, o, s, v, 0), t.vertexAttribDivisor(a, 1), t.bindBuffer(t.ARRAY_BUFFER, null);
  for (var f = new Array(e), h = 0; h < e; h++)
    f[h] = Sm(t, s, u, v, o, h);
  return c.dataArray = u, c.stride = v, c.size = o, c.getView = function(d) {
    return f[d];
  }, c.setPoint = function(d, g, p) {
    var y = f[d];
    y[0] = g, y[1] = p;
  }, c.bufferSubData = function(d) {
    t.bindBuffer(t.ARRAY_BUFFER, c), d ? t.bufferSubData(t.ARRAY_BUFFER, 0, u, 0, d * o) : t.bufferSubData(t.ARRAY_BUFFER, 0, u);
  }, c;
}
function Lm(t, e, r) {
  for (var a = 9, n = new Float32Array(e * a), i = new Array(e), o = 0; o < e; o++) {
    var s = o * a * 4;
    i[o] = new Float32Array(n.buffer, s, a);
  }
  var l = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, l), t.bufferData(t.ARRAY_BUFFER, n.byteLength, t.DYNAMIC_DRAW);
  for (var u = 0; u < 3; u++) {
    var v = r + u;
    t.enableVertexAttribArray(v), t.vertexAttribPointer(v, 3, t.FLOAT, !1, 36, u * 12), t.vertexAttribDivisor(v, 1);
  }
  return t.bindBuffer(t.ARRAY_BUFFER, null), l.getMatrixView = function(c) {
    return i[c];
  }, l.setData = function(c, f) {
    i[f].set(c, 0);
  }, l.bufferSubData = function() {
    t.bindBuffer(t.ARRAY_BUFFER, l), t.bufferSubData(t.ARRAY_BUFFER, 0, n);
  }, l;
}
function Rm(t) {
  var e = t.createFramebuffer();
  t.bindFramebuffer(t.FRAMEBUFFER, e);
  var r = t.createTexture();
  return t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.bindFramebuffer(t.FRAMEBUFFER, null), e.setFramebufferAttachmentSizes = function(a, n) {
    t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, a, n, 0, t.RGBA, t.UNSIGNED_BYTE, null);
  }, e;
}
var tv = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var t = 0, e = arguments.length; e--; )
    t += arguments[e] * arguments[e];
  return Math.sqrt(t);
});
function Mo() {
  var t = new tv(9);
  return tv != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t;
}
function rv(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
}
function Im(t, e, r) {
  var a = e[0], n = e[1], i = e[2], o = e[3], s = e[4], l = e[5], u = e[6], v = e[7], c = e[8], f = r[0], h = r[1], d = r[2], g = r[3], p = r[4], y = r[5], b = r[6], m = r[7], E = r[8];
  return t[0] = f * a + h * o + d * u, t[1] = f * n + h * s + d * v, t[2] = f * i + h * l + d * c, t[3] = g * a + p * o + y * u, t[4] = g * n + p * s + y * v, t[5] = g * i + p * l + y * c, t[6] = b * a + m * o + E * u, t[7] = b * n + m * s + E * v, t[8] = b * i + m * l + E * c, t;
}
function wn(t, e, r) {
  var a = e[0], n = e[1], i = e[2], o = e[3], s = e[4], l = e[5], u = e[6], v = e[7], c = e[8], f = r[0], h = r[1];
  return t[0] = a, t[1] = n, t[2] = i, t[3] = o, t[4] = s, t[5] = l, t[6] = f * a + h * o + u, t[7] = f * n + h * s + v, t[8] = f * i + h * l + c, t;
}
function av(t, e, r) {
  var a = e[0], n = e[1], i = e[2], o = e[3], s = e[4], l = e[5], u = e[6], v = e[7], c = e[8], f = Math.sin(r), h = Math.cos(r);
  return t[0] = h * a + f * o, t[1] = h * n + f * s, t[2] = h * i + f * l, t[3] = h * o - f * a, t[4] = h * s - f * n, t[5] = h * l - f * i, t[6] = u, t[7] = v, t[8] = c, t;
}
function jo(t, e, r) {
  var a = r[0], n = r[1];
  return t[0] = a * e[0], t[1] = a * e[1], t[2] = a * e[2], t[3] = n * e[3], t[4] = n * e[4], t[5] = n * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
}
function Mm(t, e, r) {
  return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
}
var Pm = /* @__PURE__ */ (function() {
  function t(e, r, a, n) {
    pr(this, t), this.debugID = Math.floor(Math.random() * 1e4), this.r = e, this.texSize = r, this.texRows = a, this.texHeight = Math.floor(r / a), this.enableWrapping = !0, this.locked = !1, this.texture = null, this.needsBuffer = !0, this.freePointer = {
      x: 0,
      row: 0
    }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = n(e, r, r), this.scratch = n(e, r, this.texHeight, "scratch");
  }
  return yr(t, [{
    key: "lock",
    value: function() {
      this.locked = !0;
    }
  }, {
    key: "getKeys",
    value: function() {
      return new Set(this.keyToLocation.keys());
    }
  }, {
    key: "getScale",
    value: function(r) {
      var a = r.w, n = r.h, i = this.texHeight, o = this.texSize, s = i / n, l = a * s, u = n * s;
      return l > o && (s = o / a, l = a * s, u = n * s), {
        scale: s,
        texW: l,
        texH: u
      };
    }
  }, {
    key: "draw",
    value: function(r, a, n) {
      var i = this;
      if (this.locked) throw new Error("can't draw, atlas is locked");
      var o = this.texSize, s = this.texRows, l = this.texHeight, u = this.getScale(a), v = u.scale, c = u.texW, f = u.texH, h = function(m, E) {
        if (n && E) {
          var T = E.context, S = m.x, w = m.row, x = S, C = l * w;
          T.save(), T.translate(x, C), T.scale(v, v), n(T, a), T.restore();
        }
      }, d = [null, null], g = function() {
        h(i.freePointer, i.canvas), d[0] = {
          x: i.freePointer.x,
          y: i.freePointer.row * l,
          w: c,
          h: f
        }, d[1] = {
          // create a second location with a width of 0, for convenience
          x: i.freePointer.x + c,
          y: i.freePointer.row * l,
          w: 0,
          h: f
        }, i.freePointer.x += c, i.freePointer.x == o && (i.freePointer.x = 0, i.freePointer.row++);
      }, p = function() {
        var m = i.scratch, E = i.canvas;
        m.clear(), h({
          x: 0,
          row: 0
        }, m);
        var T = o - i.freePointer.x, S = c - T, w = l;
        {
          var x = i.freePointer.x, C = i.freePointer.row * l, D = T;
          E.context.drawImage(m, 0, 0, D, w, x, C, D, w), d[0] = {
            x,
            y: C,
            w: D,
            h: f
          };
        }
        {
          var A = T, L = (i.freePointer.row + 1) * l, R = S;
          E && E.context.drawImage(m, A, 0, R, w, 0, L, R, w), d[1] = {
            x: 0,
            y: L,
            w: R,
            h: f
          };
        }
        i.freePointer.x = S, i.freePointer.row++;
      }, y = function() {
        i.freePointer.x = 0, i.freePointer.row++;
      };
      if (this.freePointer.x + c <= o)
        g();
      else {
        if (this.freePointer.row >= s - 1)
          return !1;
        this.freePointer.x === o ? (y(), g()) : this.enableWrapping ? p() : (y(), g());
      }
      return this.keyToLocation.set(r, d), this.needsBuffer = !0, d;
    }
  }, {
    key: "getOffsets",
    value: function(r) {
      return this.keyToLocation.get(r);
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.freePointer.x === 0 && this.freePointer.row === 0;
    }
  }, {
    key: "canFit",
    value: function(r) {
      if (this.locked) return !1;
      var a = this.texSize, n = this.texRows, i = this.getScale(r), o = i.texW;
      return this.freePointer.x + o > a ? this.freePointer.row < n - 1 : !0;
    }
    // called on every frame
  }, {
    key: "bufferIfNeeded",
    value: function(r) {
      this.texture || (this.texture = Dm(r, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = !1, this.locked && (this.canvas = null, this.scratch = null));
    }
  }, {
    key: "dispose",
    value: function() {
      this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = !0;
    }
  }]);
})(), Om = /* @__PURE__ */ (function() {
  function t(e, r, a, n) {
    pr(this, t), this.r = e, this.texSize = r, this.texRows = a, this.createTextureCanvas = n, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
  }
  return yr(t, [{
    key: "getKeys",
    value: function() {
      return new Set(this.styleKeyToAtlas.keys());
    }
  }, {
    key: "_createAtlas",
    value: function() {
      var r = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas;
      return new Pm(r, a, n, i);
    }
  }, {
    key: "_getScratchCanvas",
    value: function() {
      if (!this.scratch) {
        var r = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas, o = Math.floor(a / n);
        this.scratch = i(r, a, o, "scratch");
      }
      return this.scratch;
    }
  }, {
    key: "draw",
    value: function(r, a, n) {
      var i = this.styleKeyToAtlas.get(r);
      return i || (i = this.atlases[this.atlases.length - 1], (!i || !i.canFit(a)) && (i && i.lock(), i = this._createAtlas(), this.atlases.push(i)), i.draw(r, a, n), this.styleKeyToAtlas.set(r, i)), i;
    }
  }, {
    key: "getAtlas",
    value: function(r) {
      return this.styleKeyToAtlas.get(r);
    }
  }, {
    key: "hasAtlas",
    value: function(r) {
      return this.styleKeyToAtlas.has(r);
    }
  }, {
    key: "markKeyForGC",
    value: function(r) {
      this.markedKeys.add(r);
    }
  }, {
    key: "gc",
    value: function() {
      var r = this, a = this.markedKeys;
      if (a.size === 0) {
        console.log("nothing to garbage collect");
        return;
      }
      var n = [], i = /* @__PURE__ */ new Map(), o = null, s = Ct(this.atlases), l;
      try {
        var u = function() {
          var c = l.value, f = c.getKeys(), h = km(a, f);
          if (h.size === 0)
            return n.push(c), f.forEach(function(T) {
              return i.set(T, c);
            }), 1;
          o || (o = r._createAtlas(), n.push(o));
          var d = Ct(f), g;
          try {
            for (d.s(); !(g = d.n()).done; ) {
              var p = g.value;
              if (!h.has(p)) {
                var y = c.getOffsets(p), b = Qe(y, 2), m = b[0], E = b[1];
                o.canFit({
                  w: m.w + E.w,
                  h: m.h
                }) || (o.lock(), o = r._createAtlas(), n.push(o)), c.canvas && (r._copyTextureToNewAtlas(p, c, o), i.set(p, o));
              }
            }
          } catch (T) {
            d.e(T);
          } finally {
            d.f();
          }
          c.dispose();
        };
        for (s.s(); !(l = s.n()).done; )
          u();
      } catch (v) {
        s.e(v);
      } finally {
        s.f();
      }
      this.atlases = n, this.styleKeyToAtlas = i, this.markedKeys = /* @__PURE__ */ new Set();
    }
  }, {
    key: "_copyTextureToNewAtlas",
    value: function(r, a, n) {
      var i = a.getOffsets(r), o = Qe(i, 2), s = o[0], l = o[1];
      if (l.w === 0)
        n.draw(r, s, function(f) {
          f.drawImage(a.canvas, s.x, s.y, s.w, s.h, 0, 0, s.w, s.h);
        });
      else {
        var u = this._getScratchCanvas();
        u.clear(), u.context.drawImage(a.canvas, s.x, s.y, s.w, s.h, 0, 0, s.w, s.h), u.context.drawImage(a.canvas, l.x, l.y, l.w, l.h, s.w, 0, l.w, l.h);
        var v = s.w + l.w, c = s.h;
        n.draw(r, {
          w: v,
          h: c
        }, function(f) {
          f.drawImage(
            u,
            0,
            0,
            v,
            c,
            0,
            0,
            v,
            c
            // the destination context has already been translated to the correct position
          );
        });
      }
    }
  }, {
    key: "getCounts",
    value: function() {
      return {
        keyCount: this.styleKeyToAtlas.size,
        atlasCount: new Set(this.styleKeyToAtlas.values()).size
      };
    }
  }]);
})();
function km(t, e) {
  return t.intersection ? t.intersection(e) : new Set(Sn(t).filter(function(r) {
    return e.has(r);
  }));
}
var Nm = /* @__PURE__ */ (function() {
  function t(e, r) {
    pr(this, t), this.r = e, this.globalOptions = r, this.atlasSize = r.webglTexSize, this.maxAtlasesPerBatch = r.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
  }
  return yr(t, [{
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "addAtlasCollection",
    value: function(r, a) {
      var n = this.globalOptions, i = n.webglTexSize, o = n.createTextureCanvas, s = a.texRows, l = this._cacheScratchCanvas(o), u = new Om(this.r, i, s, l);
      this.collections.set(r, u);
    }
  }, {
    key: "addRenderType",
    value: function(r, a) {
      var n = a.collection;
      if (!this.collections.has(n)) throw new Error("invalid atlas collection name '".concat(n, "'"));
      var i = this.collections.get(n), o = ye({
        type: r,
        atlasCollection: i
      }, a);
      this.renderTypes.set(r, o);
    }
  }, {
    key: "getRenderTypeOpts",
    value: function(r) {
      return this.renderTypes.get(r);
    }
  }, {
    key: "getAtlasCollection",
    value: function(r) {
      return this.collections.get(r);
    }
  }, {
    key: "_cacheScratchCanvas",
    value: function(r) {
      var a = -1, n = -1, i = null;
      return function(o, s, l, u) {
        return u ? ((!i || s != a || l != n) && (a = s, n = l, i = r(o, s, l)), i) : r(o, s, l);
      };
    }
  }, {
    key: "_key",
    value: function(r, a) {
      return "".concat(r, "-").concat(a);
    }
    /** Marks textues associated with the element for garbage collection. */
  }, {
    key: "invalidate",
    value: function(r) {
      var a = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.forceRedraw, o = i === void 0 ? !1 : i, s = n.filterEle, l = s === void 0 ? function() {
        return !0;
      } : s, u = n.filterType, v = u === void 0 ? function() {
        return !0;
      } : u, c = !1, f = !1, h = Ct(r), d;
      try {
        for (h.s(); !(d = h.n()).done; ) {
          var g = d.value;
          if (l(g)) {
            var p = Ct(this.renderTypes.values()), y;
            try {
              var b = function() {
                var E = y.value, T = E.type;
                if (v(T)) {
                  var S = a.collections.get(E.collection), w = E.getKey(g), x = Array.isArray(w) ? w : [w];
                  if (o)
                    x.forEach(function(L) {
                      return S.markKeyForGC(L);
                    }), f = !0;
                  else {
                    var C = E.getID ? E.getID(g) : g.id(), D = a._key(T, C), A = a.typeAndIdToKey.get(D);
                    A !== void 0 && !Tm(x, A) && (c = !0, a.typeAndIdToKey.delete(D), A.forEach(function(L) {
                      return S.markKeyForGC(L);
                    }));
                  }
                }
              };
              for (p.s(); !(y = p.n()).done; )
                b();
            } catch (m) {
              p.e(m);
            } finally {
              p.f();
            }
          }
        }
      } catch (m) {
        h.e(m);
      } finally {
        h.f();
      }
      return f && (this.gc(), c = !1), c;
    }
    /** Garbage collect */
  }, {
    key: "gc",
    value: function() {
      var r = Ct(this.collections.values()), a;
      try {
        for (r.s(); !(a = r.n()).done; ) {
          var n = a.value;
          n.gc();
        }
      } catch (i) {
        r.e(i);
      } finally {
        r.f();
      }
    }
  }, {
    key: "getOrCreateAtlas",
    value: function(r, a, n, i) {
      var o = this.renderTypes.get(a), s = this.collections.get(o.collection), l = !1, u = s.draw(i, n, function(f) {
        o.drawClipped ? (f.save(), f.beginPath(), f.rect(0, 0, n.w, n.h), f.clip(), o.drawElement(f, r, n, !0, !0), f.restore()) : o.drawElement(f, r, n, !0, !0), l = !0;
      });
      if (l) {
        var v = o.getID ? o.getID(r) : r.id(), c = this._key(a, v);
        this.typeAndIdToKey.has(c) ? this.typeAndIdToKey.get(c).push(i) : this.typeAndIdToKey.set(c, [i]);
      }
      return u;
    }
  }, {
    key: "getAtlasInfo",
    value: function(r, a) {
      var n = this, i = this.renderTypes.get(a), o = i.getKey(r), s = Array.isArray(o) ? o : [o];
      return s.map(function(l) {
        var u = i.getBoundingBox(r, l), v = n.getOrCreateAtlas(r, a, u, l), c = v.getOffsets(l), f = Qe(c, 2), h = f[0], d = f[1];
        return {
          atlas: v,
          tex: h,
          tex1: h,
          tex2: d,
          bb: u
        };
      });
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var r = [], a = Ct(this.collections), n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var i = Qe(n.value, 2), o = i[0], s = i[1], l = s.getCounts(), u = l.keyCount, v = l.atlasCount;
          r.push({
            type: o,
            keyCount: u,
            atlasCount: v
          });
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
      return r;
    }
  }]);
})(), Bm = /* @__PURE__ */ (function() {
  function t(e) {
    pr(this, t), this.globalOptions = e, this.atlasSize = e.webglTexSize, this.maxAtlasesPerBatch = e.webglTexPerBatch, this.batchAtlases = [];
  }
  return yr(t, [{
    key: "getMaxAtlasesPerBatch",
    value: function() {
      return this.maxAtlasesPerBatch;
    }
  }, {
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "getIndexArray",
    value: function() {
      return Array.from({
        length: this.maxAtlasesPerBatch
      }, function(r, a) {
        return a;
      });
    }
  }, {
    key: "startBatch",
    value: function() {
      this.batchAtlases = [];
    }
  }, {
    key: "getAtlasCount",
    value: function() {
      return this.batchAtlases.length;
    }
  }, {
    key: "getAtlases",
    value: function() {
      return this.batchAtlases;
    }
  }, {
    key: "canAddToCurrentBatch",
    value: function(r) {
      return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(r) : !0;
    }
  }, {
    key: "getAtlasIndexForBatch",
    value: function(r) {
      var a = this.batchAtlases.indexOf(r);
      if (a < 0) {
        if (this.batchAtlases.length === this.maxAtlasesPerBatch)
          throw new Error("cannot add more atlases to batch");
        this.batchAtlases.push(r), a = this.batchAtlases.length - 1;
      }
      return a;
    }
  }]);
})(), Fm = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, _m = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, Gm = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, zm = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, Da = {
  SCREEN: {
    name: "screen",
    screen: !0
  },
  PICKING: {
    name: "picking",
    picking: !0
  }
}, _n = {
  // render the texture just like in RENDER_TARGET.SCREEN mode
  IGNORE: 1,
  // don't render the texture at all
  USE_BB: 2
  // render the bounding box as an opaque rectangle
}, Po = 0, nv = 1, iv = 2, Oo = 3, qr = 4, un = 5, ma = 6, ba = 7, Vm = /* @__PURE__ */ (function() {
  function t(e, r, a) {
    pr(this, t), this.r = e, this.gl = r, this.maxInstances = a.webglBatchSize, this.atlasSize = a.webglTexSize, this.bgColor = a.bgColor, this.debug = a.webglDebug, this.batchDebugInfo = [], a.enableWrapping = !0, a.createTextureCanvas = bm, this.atlasManager = new Nm(e, a), this.batchManager = new Bm(a), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(Da.SCREEN), this.pickingProgram = this._createShaderProgram(Da.PICKING), this.vao = this._createVAO();
  }
  return yr(t, [{
    key: "addAtlasCollection",
    value: function(r, a) {
      this.atlasManager.addAtlasCollection(r, a);
    }
    /**
     * @typedef { Object } TextureRenderTypeOpts
     * @property { string } collection - name of atlas collection to render textures to
     * @property { function } getKey - returns the "style key" for an element, may be a single value or an array for multi-line lables
     * @property { function } drawElement - uses a canvas renderer to draw the element to the texture atlas
     * @property { boolean  } drawClipped - if true the context will be clipped to the bounding box before drawElement() is called, may affect performance
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } getRotation
     * @property { function } getRotationPoint
     * @property { function } getRotationOffset
     * @property { function } isVisible - an extra check for visibility in addition to ele.visible()
     * @property { function } getTexPickingMode - returns a value from the TEX_PICKING_MODE enum
     */
    /**
     * @param { string } typeName
     * @param { TextureRenderTypeOpts } opts
     */
  }, {
    key: "addTextureAtlasRenderType",
    value: function(r, a) {
      this.atlasManager.addRenderType(r, a);
    }
    /**
     * @typedef { Object } SimpleShapeRenderTypeOpts
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } isVisible - this is an extra check for visibility in addition to ele.visible()
     * @property { function } isSimple - check if element is a simple shape, or if it needs to fall back to texture rendering
     * @property { ShapeVisualProperties } shapeProps
     */
    /**
     * @typedef { Object } ShapeVisualProperties
     * @property { string } shape
     * @property { string } color
     * @property { string } opacity
     * @property { string } padding
     * @property { string } radius
     * @property { boolean } border
    */
    /**
     * @param { string } typeName
     * @param { SimpleShapeRenderTypeOpts } opts
     */
  }, {
    key: "addSimpleShapeRenderType",
    value: function(r, a) {
      this.simpleShapeOptions.set(r, a);
    }
    /**
     * Inform the atlasManager when element style keys may have changed.
     * The atlasManager can then mark unused textures for "garbage collection".
     */
  }, {
    key: "invalidate",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.type, i = this.atlasManager;
      return n ? i.invalidate(r, {
        filterType: function(s) {
          return s === n;
        },
        forceRedraw: !0
      }) : i.invalidate(r);
    }
    /**
     * Run texture garbage collection.
     */
  }, {
    key: "gc",
    value: function() {
      this.atlasManager.gc();
    }
  }, {
    key: "_createShaderProgram",
    value: function(r) {
      var a = this.gl, n = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(Po, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(qr, " || aVertType == ").concat(ba, ` 
             || aVertType == `).concat(un, " || aVertType == ").concat(ma, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(nv, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(iv, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(Oo, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `), i = this.batchManager.getIndexArray(), o = `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(i.map(function(u) {
        return "uniform sampler2D uTexture".concat(u, ";");
      }).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(Fm, `
      `).concat(_m, `
      `).concat(Gm, `
      `).concat(zm, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(Po, `) {
          // look up the texel from the texture unit
          `).concat(i.map(function(u) {
        return "if(vAtlasId == ".concat(u, ") outColor = texture(uTexture").concat(u, ", vTexCoord);");
      }).join(`
	else `), `
        } 
        else if(vVertType == `).concat(Oo, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(qr, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(qr, " || vVertType == ").concat(ba, ` 
          || vVertType == `).concat(un, " || vVertType == ").concat(ma, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(qr, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(ba, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(ba, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(r.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), s = mm(a, n, o);
      s.aPosition = a.getAttribLocation(s, "aPosition"), s.aIndex = a.getAttribLocation(s, "aIndex"), s.aVertType = a.getAttribLocation(s, "aVertType"), s.aTransform = a.getAttribLocation(s, "aTransform"), s.aAtlasId = a.getAttribLocation(s, "aAtlasId"), s.aTex = a.getAttribLocation(s, "aTex"), s.aPointAPointB = a.getAttribLocation(s, "aPointAPointB"), s.aPointCPointD = a.getAttribLocation(s, "aPointCPointD"), s.aLineWidth = a.getAttribLocation(s, "aLineWidth"), s.aColor = a.getAttribLocation(s, "aColor"), s.aCornerRadius = a.getAttribLocation(s, "aCornerRadius"), s.aBorderColor = a.getAttribLocation(s, "aBorderColor"), s.uPanZoomMatrix = a.getUniformLocation(s, "uPanZoomMatrix"), s.uAtlasSize = a.getUniformLocation(s, "uAtlasSize"), s.uBGColor = a.getUniformLocation(s, "uBGColor"), s.uZoom = a.getUniformLocation(s, "uZoom"), s.uTextures = [];
      for (var l = 0; l < this.batchManager.getMaxAtlasesPerBatch(); l++)
        s.uTextures.push(a.getUniformLocation(s, "uTexture".concat(l)));
      return s;
    }
  }, {
    key: "_createVAO",
    value: function() {
      var r = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
      this.vertexCount = r.length / 2;
      var a = this.maxInstances, n = this.gl, i = this.program, o = n.createVertexArray();
      return n.bindVertexArray(o), Am(n, "vec2", i.aPosition, r), this.transformBuffer = Lm(n, a, i.aTransform), this.indexBuffer = zt(n, a, "vec4", i.aIndex), this.vertTypeBuffer = zt(n, a, "int", i.aVertType), this.atlasIdBuffer = zt(n, a, "int", i.aAtlasId), this.texBuffer = zt(n, a, "vec4", i.aTex), this.pointAPointBBuffer = zt(n, a, "vec4", i.aPointAPointB), this.pointCPointDBuffer = zt(n, a, "vec4", i.aPointCPointD), this.lineWidthBuffer = zt(n, a, "vec2", i.aLineWidth), this.colorBuffer = zt(n, a, "vec4", i.aColor), this.cornerRadiusBuffer = zt(n, a, "vec4", i.aCornerRadius), this.borderColorBuffer = zt(n, a, "vec4", i.aBorderColor), n.bindVertexArray(null), o;
    }
  }, {
    key: "buffers",
    get: function() {
      var r = this;
      return this._buffers || (this._buffers = Object.keys(this).filter(function(a) {
        return nr(a, "Buffer");
      }).map(function(a) {
        return r[a];
      })), this._buffers;
    }
  }, {
    key: "startFrame",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Da.SCREEN;
      this.panZoomMatrix = r, this.renderTarget = a, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
    }
  }, {
    key: "startBatch",
    value: function() {
      this.instanceCount = 0, this.batchManager.startBatch();
    }
  }, {
    key: "endFrame",
    value: function() {
      this.endBatch();
    }
  }, {
    key: "_isVisible",
    value: function(r, a) {
      return r.visible() ? a && a.isVisible ? a.isVisible(r) : !0 : !1;
    }
    /**
     * Draws a texture using the texture atlas.
     */
  }, {
    key: "drawTexture",
    value: function(r, a, n) {
      var i = this.atlasManager, o = this.batchManager, s = i.getRenderTypeOpts(n);
      if (this._isVisible(r, s) && !(r.isEdge() && !this._isValidEdge(r))) {
        if (this.renderTarget.picking && s.getTexPickingMode) {
          var l = s.getTexPickingMode(r);
          if (l === _n.IGNORE)
            return;
          if (l == _n.USE_BB) {
            this.drawPickingRectangle(r, a, n);
            return;
          }
        }
        var u = i.getAtlasInfo(r, n), v = Ct(u), c;
        try {
          for (v.s(); !(c = v.n()).done; ) {
            var f = c.value, h = f.atlas, d = f.tex1, g = f.tex2;
            o.canAddToCurrentBatch(h) || this.endBatch();
            for (var p = o.getAtlasIndexForBatch(h), y = 0, b = [[d, !0], [g, !1]]; y < b.length; y++) {
              var m = Qe(b[y], 2), E = m[0], T = m[1];
              if (E.w != 0) {
                var S = this.instanceCount;
                this.vertTypeBuffer.getView(S)[0] = Po;
                var w = this.indexBuffer.getView(S);
                Ur(a, w);
                var x = this.atlasIdBuffer.getView(S);
                x[0] = p;
                var C = this.texBuffer.getView(S);
                C[0] = E.x, C[1] = E.y, C[2] = E.w, C[3] = E.h;
                var D = this.transformBuffer.getMatrixView(S);
                this.setTransformMatrix(r, D, s, f, T), this.instanceCount++, T || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              }
            }
          }
        } catch (A) {
          v.e(A);
        } finally {
          v.f();
        }
      }
    }
    /**
     * matrix is expected to be a 9 element array
     * this function follows same pattern as CRp.drawCachedElementPortion(...)
     */
  }, {
    key: "setTransformMatrix",
    value: function(r, a, n, i) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = 0;
      if (n.shapeProps && n.shapeProps.padding && (s = r.pstyle(n.shapeProps.padding).pfValue), i) {
        var l = i.bb, u = i.tex1, v = i.tex2, c = u.w / (u.w + v.w);
        o || (c = 1 - c);
        var f = this._getAdjustedBB(l, s, o, c);
        this._applyTransformMatrix(a, f, n, r);
      } else {
        var h = n.getBoundingBox(r), d = this._getAdjustedBB(h, s, !0, 1);
        this._applyTransformMatrix(a, d, n, r);
      }
    }
  }, {
    key: "_applyTransformMatrix",
    value: function(r, a, n, i) {
      var o, s;
      rv(r);
      var l = n.getRotation ? n.getRotation(i) : 0;
      if (l !== 0) {
        var u = n.getRotationPoint(i), v = u.x, c = u.y;
        wn(r, r, [v, c]), av(r, r, l);
        var f = n.getRotationOffset(i);
        o = f.x + (a.xOffset || 0), s = f.y + (a.yOffset || 0);
      } else
        o = a.x1, s = a.y1;
      wn(r, r, [o, s]), jo(r, r, [a.w, a.h]);
    }
    /**
     * Adjusts a node or label BB to accomodate padding and split for wrapped textures.
     * @param bb - the original bounding box
     * @param padding - the padding to add to the bounding box
     * @param first - whether this is the first part of a wrapped texture
     * @param ratio - the ratio of the texture width of part of the text to the entire texture
     */
  }, {
    key: "_getAdjustedBB",
    value: function(r, a, n, i) {
      var o = r.x1, s = r.y1, l = r.w, u = r.h, v = r.yOffset;
      a && (o -= a, s -= a, l += 2 * a, u += 2 * a);
      var c = 0, f = l * i;
      return n && i < 1 ? l = f : !n && i < 1 && (c = l - f, o += c, l = f), {
        x1: o,
        y1: s,
        w: l,
        h: u,
        xOffset: c,
        yOffset: v
      };
    }
    /**
     * Draw a solid opaque rectangle matching the element's Bounding Box.
     * Used by the PICKING mode to make the entire BB of a label clickable.
     */
  }, {
    key: "drawPickingRectangle",
    value: function(r, a, n) {
      var i = this.atlasManager.getRenderTypeOpts(n), o = this.instanceCount;
      this.vertTypeBuffer.getView(o)[0] = qr;
      var s = this.indexBuffer.getView(o);
      Ur(a, s);
      var l = this.colorBuffer.getView(o);
      Tr([0, 0, 0], 1, l);
      var u = this.transformBuffer.getMatrixView(o);
      this.setTransformMatrix(r, u, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
    }
    /**
     * Draw a node using either a texture or a "simple shape".
     */
  }, {
    key: "drawNode",
    value: function(r, a, n) {
      var i = this.simpleShapeOptions.get(n);
      if (this._isVisible(r, i)) {
        var o = i.shapeProps, s = this._getVertTypeForShape(r, o.shape);
        if (s === void 0 || i.isSimple && !i.isSimple(r, this.renderTarget)) {
          this.drawTexture(r, a, n);
          return;
        }
        var l = this.instanceCount;
        if (this.vertTypeBuffer.getView(l)[0] = s, s === un || s === ma) {
          var u = i.getBoundingBox(r), v = this._getCornerRadius(r, o.radius, u), c = this.cornerRadiusBuffer.getView(l);
          c[0] = v, c[1] = v, c[2] = v, c[3] = v, s === ma && (c[0] = 0, c[2] = 0);
        }
        var f = this.indexBuffer.getView(l);
        Ur(a, f);
        var h = this.renderTarget.picking ? 1 : n === "node-body" ? r.effectiveOpacity() : 1, d = this.renderTarget.picking ? 1 : r.pstyle(o.opacity).value * h, g = r.pstyle(o.color).value, p = this.colorBuffer.getView(l);
        Tr(g, d, p);
        var y = this.lineWidthBuffer.getView(l);
        if (y[0] = 0, y[1] = 0, o.border) {
          var b = r.pstyle("border-width").value;
          if (b > 0) {
            var m = r.pstyle("border-color").value, E = h * r.pstyle("border-opacity").value, T = this.borderColorBuffer.getView(l);
            Tr(m, E, T);
            var S = r.pstyle("border-position").value;
            if (S === "inside")
              y[0] = 0, y[1] = -b;
            else if (S === "outside")
              y[0] = b, y[1] = 0;
            else {
              var w = b / 2;
              y[0] = w, y[1] = -w;
            }
          }
        }
        var x = this.transformBuffer.getMatrixView(l);
        this.setTransformMatrix(r, x, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  }, {
    key: "_getVertTypeForShape",
    value: function(r, a) {
      var n = r.pstyle(a).value;
      switch (n) {
        case "rectangle":
          return qr;
        case "ellipse":
          return ba;
        case "roundrectangle":
        case "round-rectangle":
          return un;
        case "bottom-round-rectangle":
          return ma;
        default:
          return;
      }
    }
  }, {
    key: "_getCornerRadius",
    value: function(r, a, n) {
      var i = n.w, o = n.h;
      if (r.pstyle(a).value === "auto")
        return cr(i, o);
      var s = r.pstyle(a).pfValue, l = i / 2, u = o / 2;
      return Math.min(s, u, l);
    }
    /**
     * Only supports drawing triangles at the moment.
     */
  }, {
    key: "drawEdgeArrow",
    value: function(r, a, n) {
      if (r.visible()) {
        var i = r._private.rscratch, o, s, l;
        if (n === "source" ? (o = i.arrowStartX, s = i.arrowStartY, l = i.srcArrowAngle) : (o = i.arrowEndX, s = i.arrowEndY, l = i.tgtArrowAngle), !(isNaN(o) || o == null || isNaN(s) || s == null || isNaN(l) || l == null)) {
          var u = r.pstyle(n + "-arrow-shape").value;
          if (u !== "none") {
            var v = r.pstyle(n + "-arrow-color").value, c = r.pstyle("opacity").value, f = r.pstyle("line-opacity").value, h = c * f, d = r.pstyle("width").pfValue, g = r.pstyle("arrow-scale").value, p = this.r.getArrowWidth(d, g), y = this.instanceCount, b = this.transformBuffer.getMatrixView(y);
            rv(b), wn(b, b, [o, s]), jo(b, b, [p, p]), av(b, b, l), this.vertTypeBuffer.getView(y)[0] = Oo;
            var m = this.indexBuffer.getView(y);
            Ur(a, m);
            var E = this.colorBuffer.getView(y);
            Tr(v, h, E), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          }
        }
      }
    }
    /**
     * Draw straight-line or bezier curve edges.
     */
  }, {
    key: "drawEdgeLine",
    value: function(r, a) {
      if (r.visible()) {
        var n = this._getEdgePoints(r);
        if (n) {
          var i = r.pstyle("opacity").value, o = r.pstyle("line-opacity").value, s = r.pstyle("width").pfValue, l = r.pstyle("line-color").value, u = i * o;
          if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), n.length == 4) {
            var v = this.instanceCount;
            this.vertTypeBuffer.getView(v)[0] = nv;
            var c = this.indexBuffer.getView(v);
            Ur(a, c);
            var f = this.colorBuffer.getView(v);
            Tr(l, u, f);
            var h = this.lineWidthBuffer.getView(v);
            h[0] = s;
            var d = this.pointAPointBBuffer.getView(v);
            d[0] = n[0], d[1] = n[1], d[2] = n[2], d[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          } else
            for (var g = 0; g < n.length - 2; g += 2) {
              var p = this.instanceCount;
              this.vertTypeBuffer.getView(p)[0] = iv;
              var y = this.indexBuffer.getView(p);
              Ur(a, y);
              var b = this.colorBuffer.getView(p);
              Tr(l, u, b);
              var m = this.lineWidthBuffer.getView(p);
              m[0] = s;
              var E = n[g - 2], T = n[g - 1], S = n[g], w = n[g + 1], x = n[g + 2], C = n[g + 3], D = n[g + 4], A = n[g + 5];
              g == 0 && (E = 2 * S - x + 1e-3, T = 2 * w - C + 1e-3), g == n.length - 4 && (D = 2 * x - S + 1e-3, A = 2 * C - w + 1e-3);
              var L = this.pointAPointBBuffer.getView(p);
              L[0] = E, L[1] = T, L[2] = S, L[3] = w;
              var R = this.pointCPointDBuffer.getView(p);
              R[0] = x, R[1] = C, R[2] = D, R[3] = A, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
            }
        }
      }
    }
  }, {
    key: "_isValidEdge",
    value: function(r) {
      var a = r._private.rscratch;
      return !(a.badLine || a.allpts == null || isNaN(a.allpts[0]));
    }
  }, {
    key: "_getEdgePoints",
    value: function(r) {
      var a = r._private.rscratch;
      if (this._isValidEdge(r)) {
        var n = a.allpts;
        if (n.length == 4)
          return n;
        var i = this._getNumSegments(r);
        return this._getCurveSegmentPoints(n, i);
      }
    }
  }, {
    key: "_getNumSegments",
    value: function(r) {
      var a = 15;
      return Math.min(Math.max(a, 5), this.maxInstances);
    }
  }, {
    key: "_getCurveSegmentPoints",
    value: function(r, a) {
      if (r.length == 4)
        return r;
      for (var n = Array((a + 1) * 2), i = 0; i <= a; i++)
        if (i == 0)
          n[0] = r[0], n[1] = r[1];
        else if (i == a)
          n[i * 2] = r[r.length - 2], n[i * 2 + 1] = r[r.length - 1];
        else {
          var o = i / a;
          this._setCurvePoint(r, o, n, i * 2);
        }
      return n;
    }
  }, {
    key: "_setCurvePoint",
    value: function(r, a, n, i) {
      if (r.length <= 2)
        n[i] = r[0], n[i + 1] = r[1];
      else {
        for (var o = Array(r.length - 2), s = 0; s < o.length; s += 2) {
          var l = (1 - a) * r[s] + a * r[s + 2], u = (1 - a) * r[s + 1] + a * r[s + 3];
          o[s] = l, o[s + 1] = u;
        }
        return this._setCurvePoint(o, a, n, i);
      }
    }
  }, {
    key: "endBatch",
    value: function() {
      var r = this.gl, a = this.vao, n = this.vertexCount, i = this.instanceCount;
      if (i !== 0) {
        var o = this.renderTarget.picking ? this.pickingProgram : this.program;
        r.useProgram(o), r.bindVertexArray(a);
        var s = Ct(this.buffers), l;
        try {
          for (s.s(); !(l = s.n()).done; ) {
            var u = l.value;
            u.bufferSubData(i);
          }
        } catch (d) {
          s.e(d);
        } finally {
          s.f();
        }
        for (var v = this.batchManager.getAtlases(), c = 0; c < v.length; c++)
          v[c].bufferIfNeeded(r);
        for (var f = 0; f < v.length; f++)
          r.activeTexture(r.TEXTURE0 + f), r.bindTexture(r.TEXTURE_2D, v[f].texture), r.uniform1i(o.uTextures[f], f);
        r.uniform1f(o.uZoom, wm(this.r)), r.uniformMatrix3fv(o.uPanZoomMatrix, !1, this.panZoomMatrix), r.uniform1i(o.uAtlasSize, this.batchManager.getAtlasSize());
        var h = Tr(this.bgColor, 1);
        r.uniform4fv(o.uBGColor, h), r.drawArraysInstanced(r.TRIANGLES, 0, n, i), r.bindVertexArray(null), r.bindTexture(r.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
          count: i,
          // instance count
          atlasCount: v.length
        }), this.startBatch();
      }
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var r = this.atlasManager.getDebugInfo(), a = r.reduce(function(o, s) {
        return o + s.atlasCount;
      }, 0), n = this.batchDebugInfo, i = n.reduce(function(o, s) {
        return o + s.count;
      }, 0);
      return {
        atlasInfo: r,
        totalAtlases: a,
        wrappedCount: this.wrappedCount,
        simpleCount: this.simpleCount,
        batchCount: n.length,
        batchInfo: n,
        totalInstances: i
      };
    }
  }]);
})(), Xc = {};
Xc.initWebgl = function(t, e) {
  var r = this, a = r.data.contexts[r.WEBGL];
  t.bgColor = Um(r), t.webglTexSize = Math.min(t.webglTexSize, a.getParameter(a.MAX_TEXTURE_SIZE)), t.webglTexRows = Math.min(t.webglTexRows, 54), t.webglTexRowsNodes = Math.min(t.webglTexRowsNodes, 54), t.webglBatchSize = Math.min(t.webglBatchSize, 16384), t.webglTexPerBatch = Math.min(t.webglTexPerBatch, a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), r.webglDebug = t.webglDebug, r.webglDebugShowAtlases = t.webglDebugShowAtlases, r.pickingFrameBuffer = Rm(a), r.pickingFrameBuffer.needsDraw = !0, r.drawing = new Vm(r, a, t);
  var n = function(c) {
    return function(f) {
      return r.getTextAngle(f, c);
    };
  }, i = function(c) {
    return function(f) {
      var h = f.pstyle(c);
      return h && h.value;
    };
  }, o = function(c) {
    return function(f) {
      return f.pstyle("".concat(c, "-opacity")).value > 0;
    };
  }, s = function(c) {
    var f = c.pstyle("text-events").strValue === "yes";
    return f ? _n.USE_BB : _n.IGNORE;
  }, l = function(c) {
    var f = c.position(), h = f.x, d = f.y, g = c.outerWidth(), p = c.outerHeight();
    return {
      w: g,
      h: p,
      x1: h - g / 2,
      y1: d - p / 2
    };
  };
  r.drawing.addAtlasCollection("node", {
    texRows: t.webglTexRowsNodes
  }), r.drawing.addAtlasCollection("label", {
    texRows: t.webglTexRows
  }), r.drawing.addTextureAtlasRenderType("node-body", {
    collection: "node",
    getKey: e.getStyleKey,
    getBoundingBox: e.getElementBox,
    drawElement: e.drawElement
  }), r.drawing.addSimpleShapeRenderType("node-body", {
    getBoundingBox: l,
    isSimple: xm,
    shapeProps: {
      shape: "shape",
      color: "background-color",
      opacity: "background-opacity",
      radius: "corner-radius",
      border: !0
    }
  }), r.drawing.addSimpleShapeRenderType("node-overlay", {
    getBoundingBox: l,
    isVisible: o("overlay"),
    shapeProps: {
      shape: "overlay-shape",
      color: "overlay-color",
      opacity: "overlay-opacity",
      padding: "overlay-padding",
      radius: "overlay-corner-radius"
    }
  }), r.drawing.addSimpleShapeRenderType("node-underlay", {
    getBoundingBox: l,
    isVisible: o("underlay"),
    shapeProps: {
      shape: "underlay-shape",
      color: "underlay-color",
      opacity: "underlay-opacity",
      padding: "underlay-padding",
      radius: "underlay-corner-radius"
    }
  }), r.drawing.addTextureAtlasRenderType("label", {
    // node label or edge mid label
    collection: "label",
    getTexPickingMode: s,
    getKey: ko(e.getLabelKey, null),
    getBoundingBox: No(e.getLabelBox, null),
    drawClipped: !0,
    drawElement: e.drawLabel,
    getRotation: n(null),
    getRotationPoint: e.getLabelRotationPoint,
    getRotationOffset: e.getLabelRotationOffset,
    isVisible: i("label")
  }), r.drawing.addTextureAtlasRenderType("edge-source-label", {
    collection: "label",
    getTexPickingMode: s,
    getKey: ko(e.getSourceLabelKey, "source"),
    getBoundingBox: No(e.getSourceLabelBox, "source"),
    drawClipped: !0,
    drawElement: e.drawSourceLabel,
    getRotation: n("source"),
    getRotationPoint: e.getSourceLabelRotationPoint,
    getRotationOffset: e.getSourceLabelRotationOffset,
    isVisible: i("source-label")
  }), r.drawing.addTextureAtlasRenderType("edge-target-label", {
    collection: "label",
    getTexPickingMode: s,
    getKey: ko(e.getTargetLabelKey, "target"),
    getBoundingBox: No(e.getTargetLabelBox, "target"),
    drawClipped: !0,
    drawElement: e.drawTargetLabel,
    getRotation: n("target"),
    getRotationPoint: e.getTargetLabelRotationPoint,
    getRotationOffset: e.getTargetLabelRotationOffset,
    isVisible: i("target-label")
  });
  var u = Va(function() {
    console.log("garbage collect flag set"), r.data.gc = !0;
  }, 1e4);
  r.onUpdateEleCalcs(function(v, c) {
    var f = !1;
    c && c.length > 0 && (f |= r.drawing.invalidate(c)), f && u();
  }), qm(r);
};
function Um(t) {
  var e = t.cy.container(), r = e && e.style && e.style.backgroundColor || "white";
  return bv(r);
}
function $c(t, e) {
  var r = t._private.rscratch;
  return mt(r, "labelWrapCachedLines", e) || [];
}
var ko = function(e, r) {
  return function(a) {
    var n = e(a), i = $c(a, r);
    return i.length > 1 ? i.map(function(o, s) {
      return "".concat(n, "_").concat(s);
    }) : n;
  };
}, No = function(e, r) {
  return function(a, n) {
    var i = e(a);
    if (typeof n == "string") {
      var o = n.indexOf("_");
      if (o > 0) {
        var s = Number(n.substring(o + 1)), l = $c(a, r), u = i.h / l.length, v = u * s, c = i.y1 + v;
        return {
          x1: i.x1,
          w: i.w,
          y1: c,
          h: u,
          yOffset: v
        };
      }
    }
    return i;
  };
};
function qm(t) {
  {
    var e = t.render;
    t.render = function(i) {
      i = i || {};
      var o = t.cy;
      t.webgl && (o.zoom() > Gc ? (Ym(t), e.call(t, i)) : (Hm(t), Kc(t, i, Da.SCREEN)));
    };
  }
  {
    var r = t.matchCanvasSize;
    t.matchCanvasSize = function(i) {
      r.call(t, i), t.pickingFrameBuffer.setFramebufferAttachmentSizes(t.canvasWidth, t.canvasHeight), t.pickingFrameBuffer.needsDraw = !0;
    };
  }
  t.findNearestElements = function(i, o, s, l) {
    return Qm(t, i, o);
  };
  {
    var a = t.invalidateCachedZSortedEles;
    t.invalidateCachedZSortedEles = function() {
      a.call(t), t.pickingFrameBuffer.needsDraw = !0;
    };
  }
  {
    var n = t.notify;
    t.notify = function(i, o) {
      n.call(t, i, o), i === "viewport" || i === "bounds" ? t.pickingFrameBuffer.needsDraw = !0 : i === "background" && t.drawing.invalidate(o, {
        type: "node-body"
      });
    };
  }
}
function Ym(t) {
  var e = t.data.contexts[t.WEBGL];
  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
}
function Hm(t) {
  var e = function(a) {
    a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, t.canvasWidth, t.canvasHeight), a.restore();
  };
  e(t.data.contexts[t.NODE]), e(t.data.contexts[t.DRAG]);
}
function Xm(t) {
  var e = t.canvasWidth, r = t.canvasHeight, a = Rs(t), n = a.pan, i = a.zoom, o = Mo();
  wn(o, o, [n.x, n.y]), jo(o, o, [i, i]);
  var s = Mo();
  Mm(s, e, r);
  var l = Mo();
  return Im(l, s, o), l;
}
function Wc(t, e) {
  var r = t.canvasWidth, a = t.canvasHeight, n = Rs(t), i = n.pan, o = n.zoom;
  e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, r, a), e.translate(i.x, i.y), e.scale(o, o);
}
function $m(t, e) {
  t.drawSelectionRectangle(e, function(r) {
    return Wc(t, r);
  });
}
function Wm(t) {
  var e = t.data.contexts[t.NODE];
  e.save(), Wc(t, e), e.strokeStyle = "rgba(0, 0, 0, 0.3)", e.beginPath(), e.moveTo(-1e3, 0), e.lineTo(1e3, 0), e.stroke(), e.beginPath(), e.moveTo(0, -1e3), e.lineTo(0, 1e3), e.stroke(), e.restore();
}
function Km(t) {
  var e = function(n, i, o) {
    for (var s = n.atlasManager.getAtlasCollection(i), l = t.data.contexts[t.NODE], u = s.atlases, v = 0; v < u.length; v++) {
      var c = u[v], f = c.canvas;
      if (f) {
        var h = f.width, d = f.height, g = h * v, p = f.height * o, y = 0.4;
        l.save(), l.scale(y, y), l.drawImage(f, g, p), l.strokeStyle = "black", l.rect(g, p, h, d), l.stroke(), l.restore();
      }
    }
  }, r = 0;
  e(t.drawing, "node", r++), e(t.drawing, "label", r++);
}
function Zm(t, e, r, a, n) {
  var i, o, s, l, u = Rs(t), v = u.pan, c = u.zoom;
  {
    var f = Em(t, v, c, e, r), h = Qe(f, 2), d = h[0], g = h[1], p = 6;
    i = d - p / 2, o = g - p / 2, s = p, l = p;
  }
  if (s === 0 || l === 0)
    return [];
  var y = t.data.contexts[t.WEBGL];
  y.bindFramebuffer(y.FRAMEBUFFER, t.pickingFrameBuffer), t.pickingFrameBuffer.needsDraw && (y.viewport(0, 0, y.canvas.width, y.canvas.height), Kc(t, null, Da.PICKING), t.pickingFrameBuffer.needsDraw = !1);
  var b = s * l, m = new Uint8Array(b * 4);
  y.readPixels(i, o, s, l, y.RGBA, y.UNSIGNED_BYTE, m), y.bindFramebuffer(y.FRAMEBUFFER, null);
  for (var E = /* @__PURE__ */ new Set(), T = 0; T < b; T++) {
    var S = m.slice(T * 4, T * 4 + 4), w = Cm(S) - 1;
    w >= 0 && E.add(w);
  }
  return E;
}
function Qm(t, e, r) {
  var a = Zm(t, e, r), n = t.getCachedZSortedEles(), i, o, s = Ct(a), l;
  try {
    for (s.s(); !(l = s.n()).done; ) {
      var u = l.value, v = n[u];
      if (!i && v.isNode() && (i = v), !o && v.isEdge() && (o = v), i && o)
        break;
    }
  } catch (c) {
    s.e(c);
  } finally {
    s.f();
  }
  return [i, o].filter(Boolean);
}
function Bo(t, e, r) {
  var a = t.drawing;
  e += 1, r.isNode() ? (a.drawNode(r, e, "node-underlay"), a.drawNode(r, e, "node-body"), a.drawTexture(r, e, "label"), a.drawNode(r, e, "node-overlay")) : (a.drawEdgeLine(r, e), a.drawEdgeArrow(r, e, "source"), a.drawEdgeArrow(r, e, "target"), a.drawTexture(r, e, "label"), a.drawTexture(r, e, "edge-source-label"), a.drawTexture(r, e, "edge-target-label"));
}
function Kc(t, e, r) {
  var a;
  t.webglDebug && (a = performance.now());
  var n = t.drawing, i = 0;
  if (r.screen && t.data.canvasNeedsRedraw[t.SELECT_BOX] && $m(t, e), t.data.canvasNeedsRedraw[t.NODE] || r.picking) {
    var o = t.data.contexts[t.WEBGL];
    r.screen ? (o.clearColor(0, 0, 0, 0), o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA)) : o.disable(o.BLEND), o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT), o.viewport(0, 0, o.canvas.width, o.canvas.height);
    var s = Xm(t), l = t.getCachedZSortedEles();
    if (i = l.length, n.startFrame(s, r), r.screen) {
      for (var u = 0; u < l.nondrag.length; u++)
        Bo(t, u, l.nondrag[u]);
      for (var v = 0; v < l.drag.length; v++)
        Bo(t, v, l.drag[v]);
    } else if (r.picking)
      for (var c = 0; c < l.length; c++)
        Bo(t, c, l[c]);
    n.endFrame(), r.screen && t.webglDebugShowAtlases && (Wm(t), Km(t)), t.data.canvasNeedsRedraw[t.NODE] = !1, t.data.canvasNeedsRedraw[t.DRAG] = !1;
  }
  if (t.webglDebug) {
    var f = performance.now(), h = !1, d = Math.ceil(f - a), g = n.getDebugInfo(), p = ["".concat(i, " elements"), "".concat(g.totalInstances, " instances"), "".concat(g.batchCount, " batches"), "".concat(g.totalAtlases, " atlases"), "".concat(g.wrappedCount, " wrapped textures"), "".concat(g.simpleCount, " simple shapes")].join(", ");
    if (h)
      console.log("WebGL (".concat(r.name, ") - time ").concat(d, "ms, ").concat(p));
    else {
      console.log("WebGL (".concat(r.name, ") - frame time ").concat(d, "ms")), console.log("Totals:"), console.log("  ".concat(p)), console.log("Texture Atlases Used:");
      var y = g.atlasInfo, b = Ct(y), m;
      try {
        for (b.s(); !(m = b.n()).done; ) {
          var E = m.value;
          console.log("  ".concat(E.type, ": ").concat(E.keyCount, " keys, ").concat(E.atlasCount, " atlases"));
        }
      } catch (T) {
        b.e(T);
      } finally {
        b.f();
      }
      console.log("");
    }
  }
  t.data.gc && (console.log("Garbage Collect!"), t.data.gc = !1, n.gc());
}
var wr = {};
wr.drawPolygonPath = function(t, e, r, a, n, i) {
  var o = a / 2, s = n / 2;
  t.beginPath && t.beginPath(), t.moveTo(e + o * i[0], r + s * i[1]);
  for (var l = 1; l < i.length / 2; l++)
    t.lineTo(e + o * i[l * 2], r + s * i[l * 2 + 1]);
  t.closePath();
};
wr.drawRoundPolygonPath = function(t, e, r, a, n, i, o) {
  o.forEach(function(s) {
    return Rc(t, s);
  }), t.closePath();
};
wr.drawRoundRectanglePath = function(t, e, r, a, n, i) {
  var o = a / 2, s = n / 2, l = i === "auto" ? cr(a, n) : Math.min(i, s, o);
  t.beginPath && t.beginPath(), t.moveTo(e, r - s), t.arcTo(e + o, r - s, e + o, r, l), t.arcTo(e + o, r + s, e, r + s, l), t.arcTo(e - o, r + s, e - o, r, l), t.arcTo(e - o, r - s, e, r - s, l), t.lineTo(e, r - s), t.closePath();
};
wr.drawBottomRoundRectanglePath = function(t, e, r, a, n, i) {
  var o = a / 2, s = n / 2, l = i === "auto" ? cr(a, n) : i;
  t.beginPath && t.beginPath(), t.moveTo(e, r - s), t.lineTo(e + o, r - s), t.lineTo(e + o, r), t.arcTo(e + o, r + s, e, r + s, l), t.arcTo(e - o, r + s, e - o, r, l), t.lineTo(e - o, r - s), t.lineTo(e, r - s), t.closePath();
};
wr.drawCutRectanglePath = function(t, e, r, a, n, i, o) {
  var s = a / 2, l = n / 2, u = o === "auto" ? gs() : o;
  t.beginPath && t.beginPath(), t.moveTo(e - s + u, r - l), t.lineTo(e + s - u, r - l), t.lineTo(e + s, r - l + u), t.lineTo(e + s, r + l - u), t.lineTo(e + s - u, r + l), t.lineTo(e - s + u, r + l), t.lineTo(e - s, r + l - u), t.lineTo(e - s, r - l + u), t.closePath();
};
wr.drawBarrelPath = function(t, e, r, a, n) {
  var i = a / 2, o = n / 2, s = e - i, l = e + i, u = r - o, v = r + o, c = Go(a, n), f = c.widthOffset, h = c.heightOffset, d = c.ctrlPtOffsetPct * f;
  t.beginPath && t.beginPath(), t.moveTo(s, u + h), t.lineTo(s, v - h), t.quadraticCurveTo(s + d, v, s + f, v), t.lineTo(l - f, v), t.quadraticCurveTo(l - d, v, l, v - h), t.lineTo(l, u + h), t.quadraticCurveTo(l - d, u, l - f, u), t.lineTo(s + f, u), t.quadraticCurveTo(s + d, u, s, u + h), t.closePath();
};
var ov = Math.sin(0), sv = Math.cos(0), es = {}, ts = {}, Zc = Math.PI / 40;
for (var Yr = 0 * Math.PI; Yr < 2 * Math.PI; Yr += Zc)
  es[Yr] = Math.sin(Yr), ts[Yr] = Math.cos(Yr);
wr.drawEllipsePath = function(t, e, r, a, n) {
  if (t.beginPath && t.beginPath(), t.ellipse)
    t.ellipse(e, r, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, o, s = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += Zc)
      i = e - s * es[u] * ov + s * ts[u] * sv, o = r + l * ts[u] * ov + l * es[u] * sv, u === 0 ? t.moveTo(i, o) : t.lineTo(i, o);
  t.closePath();
};
var $a = {};
$a.createBuffer = function(t, e) {
  var r = document.createElement("canvas");
  return r.width = t, r.height = e, [r, r.getContext("2d")];
};
$a.bufferCanvasImage = function(t) {
  var e = this.cy, r = e.mutableElements(), a = r.boundingBox(), n = this.findContainerClientCoords(), i = t.full ? Math.ceil(a.w) : n[2], o = t.full ? Math.ceil(a.h) : n[3], s = ne(t.maxWidth) || ne(t.maxHeight), l = this.getPixelRatio(), u = 1;
  if (t.scale !== void 0)
    i *= t.scale, o *= t.scale, u = t.scale;
  else if (s) {
    var v = 1 / 0, c = 1 / 0;
    ne(t.maxWidth) && (v = u * t.maxWidth / i), ne(t.maxHeight) && (c = u * t.maxHeight / o), u = Math.min(v, c), i *= u, o *= u;
  }
  s || (i *= l, o *= l, u *= l);
  var f = document.createElement("canvas");
  f.width = i, f.height = o, f.style.width = i + "px", f.style.height = o + "px";
  var h = f.getContext("2d");
  if (i > 0 && o > 0) {
    h.clearRect(0, 0, i, o), h.globalCompositeOperation = "source-over";
    var d = this.getCachedZSortedEles();
    if (t.full)
      h.translate(-a.x1 * u, -a.y1 * u), h.scale(u, u), this.drawElements(h, d), h.scale(1 / u, 1 / u), h.translate(a.x1 * u, a.y1 * u);
    else {
      var g = e.pan(), p = {
        x: g.x * u,
        y: g.y * u
      };
      u *= e.zoom(), h.translate(p.x, p.y), h.scale(u, u), this.drawElements(h, d), h.scale(1 / u, 1 / u), h.translate(-p.x, -p.y);
    }
    t.bg && (h.globalCompositeOperation = "destination-over", h.fillStyle = t.bg, h.rect(0, 0, i, o), h.fill());
  }
  return f;
};
function Jm(t, e) {
  for (var r = atob(t), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i++)
    n[i] = r.charCodeAt(i);
  return new Blob([a], {
    type: e
  });
}
function lv(t) {
  var e = t.indexOf(",");
  return t.substr(e + 1);
}
function Qc(t, e, r) {
  var a = function() {
    return e.toDataURL(r, t.quality);
  };
  switch (t.output) {
    case "blob-promise":
      return new ia(function(n, i) {
        try {
          e.toBlob(function(o) {
            o != null ? n(o) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, r, t.quality);
        } catch (o) {
          i(o);
        }
      });
    case "blob":
      return Jm(lv(a()), r);
    case "base64":
      return lv(a());
    default:
      return a();
  }
}
$a.png = function(t) {
  return Qc(t, this.bufferCanvasImage(t), "image/png");
};
$a.jpg = function(t) {
  return Qc(t, this.bufferCanvasImage(t), "image/jpeg");
};
var Jc = {};
Jc.nodeShapeImpl = function(t, e, r, a, n, i, o, s) {
  switch (t) {
    case "ellipse":
      return this.drawEllipsePath(e, r, a, n, i);
    case "polygon":
      return this.drawPolygonPath(e, r, a, n, i, o);
    case "round-polygon":
      return this.drawRoundPolygonPath(e, r, a, n, i, o, s);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(e, r, a, n, i, s);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(e, r, a, n, i, o, s);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(e, r, a, n, i, s);
    case "barrel":
      return this.drawBarrelPath(e, r, a, n, i);
  }
};
var jm = jc, Ce = jc.prototype;
Ce.CANVAS_LAYERS = 3;
Ce.SELECT_BOX = 0;
Ce.DRAG = 1;
Ce.NODE = 2;
Ce.WEBGL = 3;
Ce.CANVAS_TYPES = ["2d", "2d", "2d", "webgl2"];
Ce.BUFFER_COUNT = 3;
Ce.TEXTURE_BUFFER = 0;
Ce.MOTIONBLUR_BUFFER_NODE = 1;
Ce.MOTIONBLUR_BUFFER_DRAG = 2;
function jc(t) {
  var e = this, r = e.cy.window(), a = r.document;
  t.webgl && (Ce.CANVAS_LAYERS = e.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), e.data = {
    canvases: new Array(Ce.CANVAS_LAYERS),
    contexts: new Array(Ce.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(Ce.CANVAS_LAYERS),
    bufferCanvases: new Array(Ce.BUFFER_COUNT),
    bufferContexts: new Array(Ce.CANVAS_LAYERS)
  };
  var n = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
  e.data.canvasContainer = a.createElement("div");
  var o = e.data.canvasContainer.style;
  e.data.canvasContainer.style[n] = i, o.position = "relative", o.zIndex = "0", o.overflow = "hidden";
  var s = t.cy.container();
  s.appendChild(e.data.canvasContainer), s.style[n] = i;
  var l = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  Yf() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
  for (var u = 0; u < Ce.CANVAS_LAYERS; u++) {
    var v = e.data.canvases[u] = a.createElement("canvas"), c = Ce.CANVAS_TYPES[u];
    e.data.contexts[u] = v.getContext(c), e.data.contexts[u] || qe("Could not create canvas of type " + c), Object.keys(l).forEach(function(Z) {
      v.style[Z] = l[Z];
    }), v.style.position = "absolute", v.setAttribute("data-id", "layer" + u), v.style.zIndex = String(Ce.CANVAS_LAYERS - u), e.data.canvasContainer.appendChild(v), e.data.canvasNeedsRedraw[u] = !1;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[Ce.NODE].setAttribute("data-id", "layer" + Ce.NODE + "-node"), e.data.canvases[Ce.SELECT_BOX].setAttribute("data-id", "layer" + Ce.SELECT_BOX + "-selectbox"), e.data.canvases[Ce.DRAG].setAttribute("data-id", "layer" + Ce.DRAG + "-drag"), e.data.canvases[Ce.WEBGL] && e.data.canvases[Ce.WEBGL].setAttribute("data-id", "layer" + Ce.WEBGL + "-webgl");
  for (var u = 0; u < Ce.BUFFER_COUNT; u++)
    e.data.bufferCanvases[u] = a.createElement("canvas"), e.data.bufferContexts[u] = e.data.bufferCanvases[u].getContext("2d"), e.data.bufferCanvases[u].style.position = "absolute", e.data.bufferCanvases[u].setAttribute("data-id", "buffer" + u), e.data.bufferCanvases[u].style.zIndex = String(-u - 1), e.data.bufferCanvases[u].style.visibility = "hidden";
  e.pathsEnabled = !0;
  var f = bt(), h = function(V) {
    return {
      x: (V.x1 + V.x2) / 2,
      y: (V.y1 + V.y2) / 2
    };
  }, d = function(V) {
    return {
      x: -V.w / 2,
      y: -V.h / 2
    };
  }, g = function(V) {
    var q = V[0]._private, Y = q.oldBackgroundTimestamp === q.backgroundTimestamp;
    return !Y;
  }, p = function(V) {
    return V[0]._private.nodeKey;
  }, y = function(V) {
    return V[0]._private.labelStyleKey;
  }, b = function(V) {
    return V[0]._private.sourceLabelStyleKey;
  }, m = function(V) {
    return V[0]._private.targetLabelStyleKey;
  }, E = function(V, q, Y, Q, re) {
    return e.drawElement(V, q, Y, !1, !1, re);
  }, T = function(V, q, Y, Q, re) {
    return e.drawElementText(V, q, Y, Q, "main", re);
  }, S = function(V, q, Y, Q, re) {
    return e.drawElementText(V, q, Y, Q, "source", re);
  }, w = function(V, q, Y, Q, re) {
    return e.drawElementText(V, q, Y, Q, "target", re);
  }, x = function(V) {
    return V.boundingBox(), V[0]._private.bodyBounds;
  }, C = function(V) {
    return V.boundingBox(), V[0]._private.labelBounds.main || f;
  }, D = function(V) {
    return V.boundingBox(), V[0]._private.labelBounds.source || f;
  }, A = function(V) {
    return V.boundingBox(), V[0]._private.labelBounds.target || f;
  }, L = function(V, q) {
    return q;
  }, R = function(V) {
    return h(x(V));
  }, M = function(V, q, Y) {
    var Q = V ? V + "-" : "";
    return {
      x: q.x + Y.pstyle(Q + "text-margin-x").pfValue,
      y: q.y + Y.pstyle(Q + "text-margin-y").pfValue
    };
  }, P = function(V, q, Y) {
    var Q = V[0]._private.rscratch;
    return {
      x: Q[q],
      y: Q[Y]
    };
  }, N = function(V) {
    return M("", P(V, "labelX", "labelY"), V);
  }, O = function(V) {
    return M("source", P(V, "sourceLabelX", "sourceLabelY"), V);
  }, k = function(V) {
    return M("target", P(V, "targetLabelX", "targetLabelY"), V);
  }, F = function(V) {
    return d(x(V));
  }, _ = function(V) {
    return d(D(V));
  }, B = function(V) {
    return d(A(V));
  }, G = function(V) {
    var q = C(V), Y = d(C(V));
    if (V.isNode()) {
      switch (ra(V.pstyle("text-halign").value)) {
        case "left":
          Y.x = -q.w - (q.leftPad || 0);
          break;
        case "right":
          Y.x = -(q.rightPad || 0);
          break;
      }
      switch (aa(V.pstyle("text-valign").value)) {
        case "top":
          Y.y = -q.h - (q.topPad || 0);
          break;
        case "bottom":
          Y.y = -(q.botPad || 0);
          break;
      }
    }
    return Y;
  }, H = e.data.eleTxrCache = new xa(e, {
    getKey: p,
    doesEleInvalidateKey: g,
    drawElement: E,
    getBoundingBox: x,
    getRotationPoint: R,
    getRotationOffset: F,
    allowEdgeTxrCaching: !1,
    allowParentTxrCaching: !1
  }), X = e.data.lblTxrCache = new xa(e, {
    getKey: y,
    drawElement: T,
    getBoundingBox: C,
    getRotationPoint: N,
    getRotationOffset: G,
    isVisible: L
  }), $ = e.data.slbTxrCache = new xa(e, {
    getKey: b,
    drawElement: S,
    getBoundingBox: D,
    getRotationPoint: O,
    getRotationOffset: _,
    isVisible: L
  }), K = e.data.tlbTxrCache = new xa(e, {
    getKey: m,
    drawElement: w,
    getBoundingBox: A,
    getRotationPoint: k,
    getRotationOffset: B,
    isVisible: L
  }), ee = e.data.lyrTxrCache = new zc(e);
  e.onUpdateEleCalcs(function(V, q) {
    H.invalidateElements(q), X.invalidateElements(q), $.invalidateElements(q), K.invalidateElements(q), ee.invalidateElements(q);
    for (var Y = 0; Y < q.length; Y++) {
      var Q = q[Y]._private;
      Q.oldBackgroundTimestamp = Q.backgroundTimestamp;
    }
  });
  var ae = function(V) {
    for (var q = 0; q < V.length; q++)
      ee.enqueueElementRefinement(V[q].ele);
  };
  H.onDequeue(ae), X.onDequeue(ae), $.onDequeue(ae), K.onDequeue(ae), t.webgl && e.initWebgl(t, {
    getStyleKey: p,
    getLabelKey: y,
    getSourceLabelKey: b,
    getTargetLabelKey: m,
    drawElement: E,
    drawLabel: T,
    drawSourceLabel: S,
    drawTargetLabel: w,
    getElementBox: x,
    getLabelBox: C,
    getSourceLabelBox: D,
    getTargetLabelBox: A,
    getElementRotationPoint: R,
    getElementRotationOffset: F,
    getLabelRotationPoint: N,
    getSourceLabelRotationPoint: O,
    getTargetLabelRotationPoint: k,
    getLabelRotationOffset: G,
    getSourceLabelRotationOffset: _,
    getTargetLabelRotationOffset: B
  });
}
Ce.redrawHint = function(t, e) {
  var r = this;
  switch (t) {
    case "eles":
      r.data.canvasNeedsRedraw[Ce.NODE] = e;
      break;
    case "drag":
      r.data.canvasNeedsRedraw[Ce.DRAG] = e;
      break;
    case "select":
      r.data.canvasNeedsRedraw[Ce.SELECT_BOX] = e;
      break;
    case "gc":
      r.data.gc = !0;
      break;
  }
};
var e0 = typeof Path2D < "u";
Ce.path2dEnabled = function(t) {
  if (t === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!t;
};
Ce.usePaths = function() {
  return e0 && this.pathsEnabled;
};
Ce.setImgSmoothing = function(t, e) {
  t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
};
Ce.getImgSmoothing = function(t) {
  return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
};
Ce.makeOffscreenCanvas = function(t, e) {
  var r;
  if ((typeof OffscreenCanvas > "u" ? "undefined" : rt(OffscreenCanvas)) !== "undefined")
    r = new OffscreenCanvas(t, e);
  else {
    var a = this.cy.window(), n = a.document;
    r = n.createElement("canvas"), r.width = t, r.height = e;
  }
  return r;
};
[Vc, Xt, jt, Ls, Br, br, wt, Xc, wr, $a, Jc].forEach(function(t) {
  ye(Ce, t);
});
var t0 = [{
  name: "null",
  impl: Sc
}, {
  name: "base",
  impl: Fc
}, {
  name: "canvas",
  impl: jm
}], r0 = [{
  type: "layout",
  extensions: Dy
}, {
  type: "renderer",
  extensions: t0
}], ef = {}, tf = {};
function rf(t, e, r) {
  var a = r, n = function(x) {
    Fe("Can not register `" + e + "` for `" + t + "` since `" + x + "` already exists in the prototype and can not be overridden");
  };
  if (t === "core") {
    if (ka.prototype[e])
      return n(e);
    ka.prototype[e] = r;
  } else if (t === "collection") {
    if (vt.prototype[e])
      return n(e);
    vt.prototype[e] = r;
  } else if (t === "layout") {
    for (var i = function(x) {
      this.options = x, r.call(this, x), Pe(this._private) || (this._private = {}), this._private.cy = x.cy, this._private.listeners = [], this.createEmitter();
    }, o = i.prototype = Object.create(r.prototype), s = [], l = 0; l < s.length; l++) {
      var u = s[l];
      o[u] = o[u] || function() {
        return this;
      };
    }
    o.start && !o.run ? o.run = function() {
      return this.start(), this;
    } : !o.start && o.run && (o.start = function() {
      return this.run(), this;
    });
    var v = r.prototype.stop;
    o.stop = function() {
      var w = this.options;
      if (w && w.animate) {
        var x = this.animations;
        if (x)
          for (var C = 0; C < x.length; C++)
            x[C].stop();
      }
      return v ? v.call(this) : this.emit("layoutstop"), this;
    }, o.destroy || (o.destroy = function() {
      return this;
    }), o.cy = function() {
      return this._private.cy;
    };
    var c = function(x) {
      return x._private.cy;
    }, f = {
      addEventFields: function(x, C) {
        C.layout = x, C.cy = c(x), C.target = x;
      },
      bubble: function() {
        return !0;
      },
      parent: function(x) {
        return c(x);
      }
    };
    ye(o, {
      createEmitter: function() {
        return this._private.emitter = new Zn(f, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(x, C) {
        return this.emitter().on(x, C), this;
      },
      one: function(x, C) {
        return this.emitter().one(x, C), this;
      },
      once: function(x, C) {
        return this.emitter().one(x, C), this;
      },
      removeListener: function(x, C) {
        return this.emitter().removeListener(x, C), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(x, C) {
        return this.emitter().emit(x, C), this;
      }
    }), Be.eventAliasesOn(o), a = i;
  } else if (t === "renderer" && e !== "null" && e !== "base") {
    var h = af("renderer", "base"), d = h.prototype, g = r, p = r.prototype, y = function() {
      h.apply(this, arguments), g.apply(this, arguments);
    }, b = y.prototype;
    for (var m in d) {
      var E = d[m], T = p[m] != null;
      if (T)
        return n(m);
      b[m] = E;
    }
    for (var S in p)
      b[S] = p[S];
    d.clientFunctions.forEach(function(w) {
      b[w] = b[w] || function() {
        qe("Renderer does not implement `renderer." + w + "()` on its prototype");
      };
    }), a = y;
  } else if (t === "__proto__" || t === "constructor" || t === "prototype")
    return qe(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return wv({
    map: ef,
    keys: [t, e],
    value: a
  });
}
function af(t, e) {
  return Ev({
    map: ef,
    keys: [t, e]
  });
}
function a0(t, e, r, a, n) {
  return wv({
    map: tf,
    keys: [t, e, r, a],
    value: n
  });
}
function n0(t, e, r, a) {
  return Ev({
    map: tf,
    keys: [t, e, r, a]
  });
}
var rs = function() {
  if (arguments.length === 2)
    return af.apply(null, arguments);
  if (arguments.length === 3)
    return rf.apply(null, arguments);
  if (arguments.length === 4)
    return n0.apply(null, arguments);
  if (arguments.length === 5)
    return a0.apply(null, arguments);
  qe("Invalid extension access syntax");
};
ka.prototype.extension = rs;
r0.forEach(function(t) {
  t.extensions.forEach(function(e) {
    rf(t.type, e.name, e.impl);
  });
});
var Gn = function() {
  if (!(this instanceof Gn))
    return new Gn();
  this.length = 0;
}, Or = Gn.prototype;
Or.instanceString = function() {
  return "stylesheet";
};
Or.selector = function(t) {
  var e = this.length++;
  return this[e] = {
    selector: t,
    properties: []
  }, this;
};
Or.css = function(t, e) {
  var r = this.length - 1;
  if (de(t))
    this[r].properties.push({
      name: t,
      value: e
    });
  else if (Pe(t))
    for (var a = t, n = Object.keys(a), i = 0; i < n.length; i++) {
      var o = n[i], s = a[o];
      if (s != null) {
        var l = ot.properties[o] || ot.properties[zn(o)];
        if (l != null) {
          var u = l.name, v = s;
          this[r].properties.push({
            name: u,
            value: v
          });
        }
      }
    }
  return this;
};
Or.style = Or.css;
Or.generateStyle = function(t) {
  var e = new ot(t);
  return this.appendToStyle(e);
};
Or.appendToStyle = function(t) {
  for (var e = 0; e < this.length; e++) {
    var r = this[e], a = r.selector, n = r.properties;
    t.selector(a);
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      t.css(o.name, o.value);
    }
  }
  return t;
};
var i0 = "3.34.0", gr = function(e) {
  if (e === void 0 && (e = {}), Pe(e))
    return new ka(e);
  if (de(e))
    return rs.apply(rs, arguments);
};
gr.use = function(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(gr), t.apply(null, e), this;
};
gr.warnings = function(t) {
  return Lv(t);
};
gr.version = i0;
gr.stylesheet = gr.Stylesheet = Gn;
var En = { exports: {} }, xn = { exports: {} }, Tn = { exports: {} }, o0 = Tn.exports, uv;
function s0() {
  return uv || (uv = 1, (function(t, e) {
    (function(a, n) {
      t.exports = n();
    })(o0, function() {
      return (
        /******/
        (function(r) {
          var a = {};
          function n(i) {
            if (a[i])
              return a[i].exports;
            var o = a[i] = {
              /******/
              i,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return r[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
          }
          return n.m = r, n.c = a, n.i = function(i) {
            return i;
          }, n.d = function(i, o, s) {
            n.o(i, o) || Object.defineProperty(i, o, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: s
              /******/
            });
          }, n.n = function(i) {
            var o = i && i.__esModule ? (
              /******/
              (function() {
                return i.default;
              })
            ) : (
              /******/
              (function() {
                return i;
              })
            );
            return n.d(o, "a", o), o;
          }, n.o = function(i, o) {
            return Object.prototype.hasOwnProperty.call(i, o);
          }, n.p = "", n(n.s = 26);
        })([
          /* 0 */
          /***/
          (function(r, a, n) {
            function i() {
            }
            i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, i.DEFAULT_INCREMENTAL = !1, i.DEFAULT_ANIMATION_ON_LAYOUT = !0, i.DEFAULT_ANIMATION_DURING_LAYOUT = !1, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = !1, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, r.exports = i;
          }),
          /* 1 */
          /***/
          (function(r, a, n) {
            var i = n(2), o = n(8), s = n(9);
            function l(v, c, f) {
              i.call(this, f), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = f, this.bendpoints = [], this.source = v, this.target = c;
            }
            l.prototype = Object.create(i.prototype);
            for (var u in i)
              l[u] = i[u];
            l.prototype.getSource = function() {
              return this.source;
            }, l.prototype.getTarget = function() {
              return this.target;
            }, l.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, l.prototype.getLength = function() {
              return this.length;
            }, l.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, l.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, l.prototype.getLca = function() {
              return this.lca;
            }, l.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, l.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, l.prototype.getOtherEnd = function(v) {
              if (this.source === v)
                return this.target;
              if (this.target === v)
                return this.source;
              throw "Node is not incident with this edge";
            }, l.prototype.getOtherEndInGraph = function(v, c) {
              for (var f = this.getOtherEnd(v), h = c.getGraphManager().getRoot(); ; ) {
                if (f.getOwner() == c)
                  return f;
                if (f.getOwner() == h)
                  break;
                f = f.getOwner().getParent();
              }
              return null;
            }, l.prototype.updateLength = function() {
              var v = new Array(4);
              this.isOverlapingSourceAndTarget = o.getIntersection(this.target.getRect(), this.source.getRect(), v), this.isOverlapingSourceAndTarget || (this.lengthX = v[0] - v[2], this.lengthY = v[1] - v[3], Math.abs(this.lengthX) < 1 && (this.lengthX = s.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = s.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, l.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = s.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = s.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, r.exports = l;
          }),
          /* 2 */
          /***/
          (function(r, a, n) {
            function i(o) {
              this.vGraphObject = o;
            }
            r.exports = i;
          }),
          /* 3 */
          /***/
          (function(r, a, n) {
            var i = n(2), o = n(10), s = n(13), l = n(0), u = n(16), v = n(4);
            function c(h, d, g, p) {
              g == null && p == null && (p = d), i.call(this, p), h.graphManager != null && (h = h.graphManager), this.estimatedSize = o.MIN_VALUE, this.inclusionTreeDepth = o.MAX_VALUE, this.vGraphObject = p, this.edges = [], this.graphManager = h, g != null && d != null ? this.rect = new s(d.x, d.y, g.width, g.height) : this.rect = new s();
            }
            c.prototype = Object.create(i.prototype);
            for (var f in i)
              c[f] = i[f];
            c.prototype.getEdges = function() {
              return this.edges;
            }, c.prototype.getChild = function() {
              return this.child;
            }, c.prototype.getOwner = function() {
              return this.owner;
            }, c.prototype.getWidth = function() {
              return this.rect.width;
            }, c.prototype.setWidth = function(h) {
              this.rect.width = h;
            }, c.prototype.getHeight = function() {
              return this.rect.height;
            }, c.prototype.setHeight = function(h) {
              this.rect.height = h;
            }, c.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, c.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, c.prototype.getCenter = function() {
              return new v(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, c.prototype.getLocation = function() {
              return new v(this.rect.x, this.rect.y);
            }, c.prototype.getRect = function() {
              return this.rect;
            }, c.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, c.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, c.prototype.setRect = function(h, d) {
              this.rect.x = h.x, this.rect.y = h.y, this.rect.width = d.width, this.rect.height = d.height;
            }, c.prototype.setCenter = function(h, d) {
              this.rect.x = h - this.rect.width / 2, this.rect.y = d - this.rect.height / 2;
            }, c.prototype.setLocation = function(h, d) {
              this.rect.x = h, this.rect.y = d;
            }, c.prototype.moveBy = function(h, d) {
              this.rect.x += h, this.rect.y += d;
            }, c.prototype.getEdgeListToNode = function(h) {
              var d = [], g = this;
              return g.edges.forEach(function(p) {
                if (p.target == h) {
                  if (p.source != g) throw "Incorrect edge source!";
                  d.push(p);
                }
              }), d;
            }, c.prototype.getEdgesBetween = function(h) {
              var d = [], g = this;
              return g.edges.forEach(function(p) {
                if (!(p.source == g || p.target == g)) throw "Incorrect edge source and/or target";
                (p.target == h || p.source == h) && d.push(p);
              }), d;
            }, c.prototype.getNeighborsList = function() {
              var h = /* @__PURE__ */ new Set(), d = this;
              return d.edges.forEach(function(g) {
                if (g.source == d)
                  h.add(g.target);
                else {
                  if (g.target != d)
                    throw "Incorrect incidency!";
                  h.add(g.source);
                }
              }), h;
            }, c.prototype.withChildren = function() {
              var h = /* @__PURE__ */ new Set(), d, g;
              if (h.add(this), this.child != null)
                for (var p = this.child.getNodes(), y = 0; y < p.length; y++)
                  d = p[y], g = d.withChildren(), g.forEach(function(b) {
                    h.add(b);
                  });
              return h;
            }, c.prototype.getNoOfChildren = function() {
              var h = 0, d;
              if (this.child == null)
                h = 1;
              else
                for (var g = this.child.getNodes(), p = 0; p < g.length; p++)
                  d = g[p], h += d.getNoOfChildren();
              return h == 0 && (h = 1), h;
            }, c.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == o.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, c.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, c.prototype.scatter = function() {
              var h, d, g = -l.INITIAL_WORLD_BOUNDARY, p = l.INITIAL_WORLD_BOUNDARY;
              h = l.WORLD_CENTER_X + u.nextDouble() * (p - g) + g;
              var y = -l.INITIAL_WORLD_BOUNDARY, b = l.INITIAL_WORLD_BOUNDARY;
              d = l.WORLD_CENTER_Y + u.nextDouble() * (b - y) + y, this.rect.x = h, this.rect.y = d;
            }, c.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var h = this.getChild();
                if (h.updateBounds(!0), this.rect.x = h.getLeft(), this.rect.y = h.getTop(), this.setWidth(h.getRight() - h.getLeft()), this.setHeight(h.getBottom() - h.getTop()), l.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var d = h.getRight() - h.getLeft(), g = h.getBottom() - h.getTop();
                  this.labelWidth > d && (this.rect.x -= (this.labelWidth - d) / 2, this.setWidth(this.labelWidth)), this.labelHeight > g && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - g) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - g), this.setHeight(this.labelHeight));
                }
              }
            }, c.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == o.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, c.prototype.transform = function(h) {
              var d = this.rect.x;
              d > l.WORLD_BOUNDARY ? d = l.WORLD_BOUNDARY : d < -l.WORLD_BOUNDARY && (d = -l.WORLD_BOUNDARY);
              var g = this.rect.y;
              g > l.WORLD_BOUNDARY ? g = l.WORLD_BOUNDARY : g < -l.WORLD_BOUNDARY && (g = -l.WORLD_BOUNDARY);
              var p = new v(d, g), y = h.inverseTransformPoint(p);
              this.setLocation(y.x, y.y);
            }, c.prototype.getLeft = function() {
              return this.rect.x;
            }, c.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, c.prototype.getTop = function() {
              return this.rect.y;
            }, c.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, c.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, r.exports = c;
          }),
          /* 4 */
          /***/
          (function(r, a, n) {
            function i(o, s) {
              o == null && s == null ? (this.x = 0, this.y = 0) : (this.x = o, this.y = s);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setX = function(o) {
              this.x = o;
            }, i.prototype.setY = function(o) {
              this.y = o;
            }, i.prototype.getDifference = function(o) {
              return new DimensionD(this.x - o.x, this.y - o.y);
            }, i.prototype.getCopy = function() {
              return new i(this.x, this.y);
            }, i.prototype.translate = function(o) {
              return this.x += o.width, this.y += o.height, this;
            }, r.exports = i;
          }),
          /* 5 */
          /***/
          (function(r, a, n) {
            var i = n(2), o = n(10), s = n(0), l = n(6), u = n(3), v = n(1), c = n(13), f = n(12), h = n(11);
            function d(p, y, b) {
              i.call(this, b), this.estimatedSize = o.MIN_VALUE, this.margin = s.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = p, y != null && y instanceof l ? this.graphManager = y : y != null && y instanceof Layout && (this.graphManager = y.graphManager);
            }
            d.prototype = Object.create(i.prototype);
            for (var g in i)
              d[g] = i[g];
            d.prototype.getNodes = function() {
              return this.nodes;
            }, d.prototype.getEdges = function() {
              return this.edges;
            }, d.prototype.getGraphManager = function() {
              return this.graphManager;
            }, d.prototype.getParent = function() {
              return this.parent;
            }, d.prototype.getLeft = function() {
              return this.left;
            }, d.prototype.getRight = function() {
              return this.right;
            }, d.prototype.getTop = function() {
              return this.top;
            }, d.prototype.getBottom = function() {
              return this.bottom;
            }, d.prototype.isConnected = function() {
              return this.isConnected;
            }, d.prototype.add = function(p, y, b) {
              if (y == null && b == null) {
                var m = p;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(m) > -1)
                  throw "Node already in graph!";
                return m.owner = this, this.getNodes().push(m), m;
              } else {
                var E = p;
                if (!(this.getNodes().indexOf(y) > -1 && this.getNodes().indexOf(b) > -1))
                  throw "Source or target not in graph!";
                if (!(y.owner == b.owner && y.owner == this))
                  throw "Both owners must be this graph!";
                return y.owner != b.owner ? null : (E.source = y, E.target = b, E.isInterGraph = !1, this.getEdges().push(E), y.edges.push(E), b != y && b.edges.push(E), E);
              }
            }, d.prototype.remove = function(p) {
              var y = p;
              if (p instanceof u) {
                if (y == null)
                  throw "Node is null!";
                if (!(y.owner != null && y.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var b = y.edges.slice(), m, E = b.length, T = 0; T < E; T++)
                  m = b[T], m.isInterGraph ? this.graphManager.remove(m) : m.source.owner.remove(m);
                var S = this.nodes.indexOf(y);
                if (S == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(S, 1);
              } else if (p instanceof v) {
                var m = p;
                if (m == null)
                  throw "Edge is null!";
                if (!(m.source != null && m.target != null))
                  throw "Source and/or target is null!";
                if (!(m.source.owner != null && m.target.owner != null && m.source.owner == this && m.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var w = m.source.edges.indexOf(m), x = m.target.edges.indexOf(m);
                if (!(w > -1 && x > -1))
                  throw "Source and/or target doesn't know this edge!";
                m.source.edges.splice(w, 1), m.target != m.source && m.target.edges.splice(x, 1);
                var S = m.source.owner.getEdges().indexOf(m);
                if (S == -1)
                  throw "Not in owner's edge list!";
                m.source.owner.getEdges().splice(S, 1);
              }
            }, d.prototype.updateLeftTop = function() {
              for (var p = o.MAX_VALUE, y = o.MAX_VALUE, b, m, E, T = this.getNodes(), S = T.length, w = 0; w < S; w++) {
                var x = T[w];
                b = x.getTop(), m = x.getLeft(), p > b && (p = b), y > m && (y = m);
              }
              return p == o.MAX_VALUE ? null : (T[0].getParent().paddingLeft != null ? E = T[0].getParent().paddingLeft : E = this.margin, this.left = y - E, this.top = p - E, new f(this.left, this.top));
            }, d.prototype.updateBounds = function(p) {
              for (var y = o.MAX_VALUE, b = -o.MAX_VALUE, m = o.MAX_VALUE, E = -o.MAX_VALUE, T, S, w, x, C, D = this.nodes, A = D.length, L = 0; L < A; L++) {
                var R = D[L];
                p && R.child != null && R.updateBounds(), T = R.getLeft(), S = R.getRight(), w = R.getTop(), x = R.getBottom(), y > T && (y = T), b < S && (b = S), m > w && (m = w), E < x && (E = x);
              }
              var M = new c(y, m, b - y, E - m);
              y == o.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), D[0].getParent().paddingLeft != null ? C = D[0].getParent().paddingLeft : C = this.margin, this.left = M.x - C, this.right = M.x + M.width + C, this.top = M.y - C, this.bottom = M.y + M.height + C;
            }, d.calculateBounds = function(p) {
              for (var y = o.MAX_VALUE, b = -o.MAX_VALUE, m = o.MAX_VALUE, E = -o.MAX_VALUE, T, S, w, x, C = p.length, D = 0; D < C; D++) {
                var A = p[D];
                T = A.getLeft(), S = A.getRight(), w = A.getTop(), x = A.getBottom(), y > T && (y = T), b < S && (b = S), m > w && (m = w), E < x && (E = x);
              }
              var L = new c(y, m, b - y, E - m);
              return L;
            }, d.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, d.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == o.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, d.prototype.calcEstimatedSize = function() {
              for (var p = 0, y = this.nodes, b = y.length, m = 0; m < b; m++) {
                var E = y[m];
                p += E.calcEstimatedSize();
              }
              return p == 0 ? this.estimatedSize = s.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = p / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, d.prototype.updateConnected = function() {
              var p = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var y = new h(), b = /* @__PURE__ */ new Set(), m = this.nodes[0], E, T, S = m.withChildren();
              for (S.forEach(function(L) {
                y.push(L), b.add(L);
              }); y.length !== 0; ) {
                m = y.shift(), E = m.getEdges();
                for (var w = E.length, x = 0; x < w; x++) {
                  var C = E[x];
                  if (T = C.getOtherEndInGraph(m, this), T != null && !b.has(T)) {
                    var D = T.withChildren();
                    D.forEach(function(L) {
                      y.push(L), b.add(L);
                    });
                  }
                }
              }
              if (this.isConnected = !1, b.size >= this.nodes.length) {
                var A = 0;
                b.forEach(function(L) {
                  L.owner == p && A++;
                }), A == this.nodes.length && (this.isConnected = !0);
              }
            }, r.exports = d;
          }),
          /* 6 */
          /***/
          (function(r, a, n) {
            var i, o = n(1);
            function s(l) {
              i = n(5), this.layout = l, this.graphs = [], this.edges = [];
            }
            s.prototype.addRoot = function() {
              var l = this.layout.newGraph(), u = this.layout.newNode(null), v = this.add(l, u);
              return this.setRootGraph(v), this.rootGraph;
            }, s.prototype.add = function(l, u, v, c, f) {
              if (v == null && c == null && f == null) {
                if (l == null)
                  throw "Graph is null!";
                if (u == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(l) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(l), l.parent != null)
                  throw "Already has a parent!";
                if (u.child != null)
                  throw "Already has a child!";
                return l.parent = u, u.child = l, l;
              } else {
                f = v, c = u, v = l;
                var h = c.getOwner(), d = f.getOwner();
                if (!(h != null && h.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(d != null && d.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (h == d)
                  return v.isInterGraph = !1, h.add(v, c, f);
                if (v.isInterGraph = !0, v.source = c, v.target = f, this.edges.indexOf(v) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(v), !(v.source != null && v.target != null))
                  throw "Edge source and/or target is null!";
                if (!(v.source.edges.indexOf(v) == -1 && v.target.edges.indexOf(v) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return v.source.edges.push(v), v.target.edges.push(v), v;
              }
            }, s.prototype.remove = function(l) {
              if (l instanceof i) {
                var u = l;
                if (u.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(u == this.rootGraph || u.parent != null && u.parent.graphManager == this))
                  throw "Invalid parent node!";
                var v = [];
                v = v.concat(u.getEdges());
                for (var c, f = v.length, h = 0; h < f; h++)
                  c = v[h], u.remove(c);
                var d = [];
                d = d.concat(u.getNodes());
                var g;
                f = d.length;
                for (var h = 0; h < f; h++)
                  g = d[h], u.remove(g);
                u == this.rootGraph && this.setRootGraph(null);
                var p = this.graphs.indexOf(u);
                this.graphs.splice(p, 1), u.parent = null;
              } else if (l instanceof o) {
                if (c = l, c == null)
                  throw "Edge is null!";
                if (!c.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(c.source != null && c.target != null))
                  throw "Source and/or target is null!";
                if (!(c.source.edges.indexOf(c) != -1 && c.target.edges.indexOf(c) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var p = c.source.edges.indexOf(c);
                if (c.source.edges.splice(p, 1), p = c.target.edges.indexOf(c), c.target.edges.splice(p, 1), !(c.source.owner != null && c.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (c.source.owner.getGraphManager().edges.indexOf(c) == -1)
                  throw "Not in owner graph manager's edge list!";
                var p = c.source.owner.getGraphManager().edges.indexOf(c);
                c.source.owner.getGraphManager().edges.splice(p, 1);
              }
            }, s.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, s.prototype.getGraphs = function() {
              return this.graphs;
            }, s.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var l = [], u = this.getGraphs(), v = u.length, c = 0; c < v; c++)
                  l = l.concat(u[c].getNodes());
                this.allNodes = l;
              }
              return this.allNodes;
            }, s.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, s.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, s.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, s.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var l = [], u = this.getGraphs();
                u.length;
                for (var v = 0; v < u.length; v++)
                  l = l.concat(u[v].getEdges());
                l = l.concat(this.edges), this.allEdges = l;
              }
              return this.allEdges;
            }, s.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, s.prototype.setAllNodesToApplyGravitation = function(l) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = l;
            }, s.prototype.getRoot = function() {
              return this.rootGraph;
            }, s.prototype.setRootGraph = function(l) {
              if (l.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = l, l.parent == null && (l.parent = this.layout.newNode("Root node"));
            }, s.prototype.getLayout = function() {
              return this.layout;
            }, s.prototype.isOneAncestorOfOther = function(l, u) {
              if (!(l != null && u != null))
                throw "assert failed";
              if (l == u)
                return !0;
              var v = l.getOwner(), c;
              do {
                if (c = v.getParent(), c == null)
                  break;
                if (c == u)
                  return !0;
                if (v = c.getOwner(), v == null)
                  break;
              } while (!0);
              v = u.getOwner();
              do {
                if (c = v.getParent(), c == null)
                  break;
                if (c == l)
                  return !0;
                if (v = c.getOwner(), v == null)
                  break;
              } while (!0);
              return !1;
            }, s.prototype.calcLowestCommonAncestors = function() {
              for (var l, u, v, c, f, h = this.getAllEdges(), d = h.length, g = 0; g < d; g++) {
                if (l = h[g], u = l.source, v = l.target, l.lca = null, l.sourceInLca = u, l.targetInLca = v, u == v) {
                  l.lca = u.getOwner();
                  continue;
                }
                for (c = u.getOwner(); l.lca == null; ) {
                  for (l.targetInLca = v, f = v.getOwner(); l.lca == null; ) {
                    if (f == c) {
                      l.lca = f;
                      break;
                    }
                    if (f == this.rootGraph)
                      break;
                    if (l.lca != null)
                      throw "assert failed";
                    l.targetInLca = f.getParent(), f = l.targetInLca.getOwner();
                  }
                  if (c == this.rootGraph)
                    break;
                  l.lca == null && (l.sourceInLca = c.getParent(), c = l.sourceInLca.getOwner());
                }
                if (l.lca == null)
                  throw "assert failed";
              }
            }, s.prototype.calcLowestCommonAncestor = function(l, u) {
              if (l == u)
                return l.getOwner();
              var v = l.getOwner();
              do {
                if (v == null)
                  break;
                var c = u.getOwner();
                do {
                  if (c == null)
                    break;
                  if (c == v)
                    return c;
                  c = c.getParent().getOwner();
                } while (!0);
                v = v.getParent().getOwner();
              } while (!0);
              return v;
            }, s.prototype.calcInclusionTreeDepths = function(l, u) {
              l == null && u == null && (l = this.rootGraph, u = 1);
              for (var v, c = l.getNodes(), f = c.length, h = 0; h < f; h++)
                v = c[h], v.inclusionTreeDepth = u, v.child != null && this.calcInclusionTreeDepths(v.child, u + 1);
            }, s.prototype.includesInvalidEdge = function() {
              for (var l, u = this.edges.length, v = 0; v < u; v++)
                if (l = this.edges[v], this.isOneAncestorOfOther(l.source, l.target))
                  return !0;
              return !1;
            }, r.exports = s;
          }),
          /* 7 */
          /***/
          (function(r, a, n) {
            var i = n(0);
            function o() {
            }
            for (var s in i)
              o[s] = i[s];
            o.MAX_ITERATIONS = 2500, o.DEFAULT_EDGE_LENGTH = 50, o.DEFAULT_SPRING_STRENGTH = 0.45, o.DEFAULT_REPULSION_STRENGTH = 4500, o.DEFAULT_GRAVITY_STRENGTH = 0.4, o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, o.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, o.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, o.COOLING_ADAPTATION_FACTOR = 0.33, o.ADAPTATION_LOWER_NODE_LIMIT = 1e3, o.ADAPTATION_UPPER_NODE_LIMIT = 5e3, o.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, o.MAX_NODE_DISPLACEMENT = o.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, o.MIN_REPULSION_DIST = o.DEFAULT_EDGE_LENGTH / 10, o.CONVERGENCE_CHECK_PERIOD = 100, o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, o.MIN_EDGE_LENGTH = 1, o.GRID_CALCULATION_CHECK_PERIOD = 10, r.exports = o;
          }),
          /* 8 */
          /***/
          (function(r, a, n) {
            var i = n(12);
            function o() {
            }
            o.calcSeparationAmount = function(s, l, u, v) {
              if (!s.intersects(l))
                throw "assert failed";
              var c = new Array(2);
              this.decideDirectionsForOverlappingNodes(s, l, c), u[0] = Math.min(s.getRight(), l.getRight()) - Math.max(s.x, l.x), u[1] = Math.min(s.getBottom(), l.getBottom()) - Math.max(s.y, l.y), s.getX() <= l.getX() && s.getRight() >= l.getRight() ? u[0] += Math.min(l.getX() - s.getX(), s.getRight() - l.getRight()) : l.getX() <= s.getX() && l.getRight() >= s.getRight() && (u[0] += Math.min(s.getX() - l.getX(), l.getRight() - s.getRight())), s.getY() <= l.getY() && s.getBottom() >= l.getBottom() ? u[1] += Math.min(l.getY() - s.getY(), s.getBottom() - l.getBottom()) : l.getY() <= s.getY() && l.getBottom() >= s.getBottom() && (u[1] += Math.min(s.getY() - l.getY(), l.getBottom() - s.getBottom()));
              var f = Math.abs((l.getCenterY() - s.getCenterY()) / (l.getCenterX() - s.getCenterX()));
              l.getCenterY() === s.getCenterY() && l.getCenterX() === s.getCenterX() && (f = 1);
              var h = f * u[0], d = u[1] / f;
              u[0] < d ? d = u[0] : h = u[1], u[0] = -1 * c[0] * (d / 2 + v), u[1] = -1 * c[1] * (h / 2 + v);
            }, o.decideDirectionsForOverlappingNodes = function(s, l, u) {
              s.getCenterX() < l.getCenterX() ? u[0] = -1 : u[0] = 1, s.getCenterY() < l.getCenterY() ? u[1] = -1 : u[1] = 1;
            }, o.getIntersection2 = function(s, l, u) {
              var v = s.getCenterX(), c = s.getCenterY(), f = l.getCenterX(), h = l.getCenterY();
              if (s.intersects(l))
                return u[0] = v, u[1] = c, u[2] = f, u[3] = h, !0;
              var d = s.getX(), g = s.getY(), p = s.getRight(), y = s.getX(), b = s.getBottom(), m = s.getRight(), E = s.getWidthHalf(), T = s.getHeightHalf(), S = l.getX(), w = l.getY(), x = l.getRight(), C = l.getX(), D = l.getBottom(), A = l.getRight(), L = l.getWidthHalf(), R = l.getHeightHalf(), M = !1, P = !1;
              if (v === f) {
                if (c > h)
                  return u[0] = v, u[1] = g, u[2] = f, u[3] = D, !1;
                if (c < h)
                  return u[0] = v, u[1] = b, u[2] = f, u[3] = w, !1;
              } else if (c === h) {
                if (v > f)
                  return u[0] = d, u[1] = c, u[2] = x, u[3] = h, !1;
                if (v < f)
                  return u[0] = p, u[1] = c, u[2] = S, u[3] = h, !1;
              } else {
                var N = s.height / s.width, O = l.height / l.width, k = (h - c) / (f - v), F = void 0, _ = void 0, B = void 0, G = void 0, H = void 0, X = void 0;
                if (-N === k ? v > f ? (u[0] = y, u[1] = b, M = !0) : (u[0] = p, u[1] = g, M = !0) : N === k && (v > f ? (u[0] = d, u[1] = g, M = !0) : (u[0] = m, u[1] = b, M = !0)), -O === k ? f > v ? (u[2] = C, u[3] = D, P = !0) : (u[2] = x, u[3] = w, P = !0) : O === k && (f > v ? (u[2] = S, u[3] = w, P = !0) : (u[2] = A, u[3] = D, P = !0)), M && P)
                  return !1;
                if (v > f ? c > h ? (F = this.getCardinalDirection(N, k, 4), _ = this.getCardinalDirection(O, k, 2)) : (F = this.getCardinalDirection(-N, k, 3), _ = this.getCardinalDirection(-O, k, 1)) : c > h ? (F = this.getCardinalDirection(-N, k, 1), _ = this.getCardinalDirection(-O, k, 3)) : (F = this.getCardinalDirection(N, k, 2), _ = this.getCardinalDirection(O, k, 4)), !M)
                  switch (F) {
                    case 1:
                      G = g, B = v + -T / k, u[0] = B, u[1] = G;
                      break;
                    case 2:
                      B = m, G = c + E * k, u[0] = B, u[1] = G;
                      break;
                    case 3:
                      G = b, B = v + T / k, u[0] = B, u[1] = G;
                      break;
                    case 4:
                      B = y, G = c + -E * k, u[0] = B, u[1] = G;
                      break;
                  }
                if (!P)
                  switch (_) {
                    case 1:
                      X = w, H = f + -R / k, u[2] = H, u[3] = X;
                      break;
                    case 2:
                      H = A, X = h + L * k, u[2] = H, u[3] = X;
                      break;
                    case 3:
                      X = D, H = f + R / k, u[2] = H, u[3] = X;
                      break;
                    case 4:
                      H = C, X = h + -L * k, u[2] = H, u[3] = X;
                      break;
                  }
              }
              return !1;
            }, o.getCardinalDirection = function(s, l, u) {
              return s > l ? u : 1 + u % 4;
            }, o.getIntersection = function(s, l, u, v) {
              if (v == null)
                return this.getIntersection2(s, l, u);
              var c = s.x, f = s.y, h = l.x, d = l.y, g = u.x, p = u.y, y = v.x, b = v.y, m = void 0, E = void 0, T = void 0, S = void 0, w = void 0, x = void 0, C = void 0, D = void 0, A = void 0;
              return T = d - f, w = c - h, C = h * f - c * d, S = b - p, x = g - y, D = y * p - g * b, A = T * x - S * w, A === 0 ? null : (m = (w * D - x * C) / A, E = (S * C - T * D) / A, new i(m, E));
            }, o.angleOfVector = function(s, l, u, v) {
              var c = void 0;
              return s !== u ? (c = Math.atan((v - l) / (u - s)), u < s ? c += Math.PI : v < l && (c += this.TWO_PI)) : v < l ? c = this.ONE_AND_HALF_PI : c = this.HALF_PI, c;
            }, o.doIntersect = function(s, l, u, v) {
              var c = s.x, f = s.y, h = l.x, d = l.y, g = u.x, p = u.y, y = v.x, b = v.y, m = (h - c) * (b - p) - (y - g) * (d - f);
              if (m === 0)
                return !1;
              var E = ((b - p) * (y - c) + (g - y) * (b - f)) / m, T = ((f - d) * (y - c) + (h - c) * (b - f)) / m;
              return 0 < E && E < 1 && 0 < T && T < 1;
            }, o.HALF_PI = 0.5 * Math.PI, o.ONE_AND_HALF_PI = 1.5 * Math.PI, o.TWO_PI = 2 * Math.PI, o.THREE_PI = 3 * Math.PI, r.exports = o;
          }),
          /* 9 */
          /***/
          (function(r, a, n) {
            function i() {
            }
            i.sign = function(o) {
              return o > 0 ? 1 : o < 0 ? -1 : 0;
            }, i.floor = function(o) {
              return o < 0 ? Math.ceil(o) : Math.floor(o);
            }, i.ceil = function(o) {
              return o < 0 ? Math.floor(o) : Math.ceil(o);
            }, r.exports = i;
          }),
          /* 10 */
          /***/
          (function(r, a, n) {
            function i() {
            }
            i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, r.exports = i;
          }),
          /* 11 */
          /***/
          (function(r, a, n) {
            var i = /* @__PURE__ */ (function() {
              function c(f, h) {
                for (var d = 0; d < h.length; d++) {
                  var g = h[d];
                  g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g);
                }
              }
              return function(f, h, d) {
                return h && c(f.prototype, h), d && c(f, d), f;
              };
            })();
            function o(c, f) {
              if (!(c instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var s = function(f) {
              return { value: f, next: null, prev: null };
            }, l = function(f, h, d, g) {
              return f !== null ? f.next = h : g.head = h, d !== null ? d.prev = h : g.tail = h, h.prev = f, h.next = d, g.length++, h;
            }, u = function(f, h) {
              var d = f.prev, g = f.next;
              return d !== null ? d.next = g : h.head = g, g !== null ? g.prev = d : h.tail = d, f.prev = f.next = null, h.length--, f;
            }, v = (function() {
              function c(f) {
                var h = this;
                o(this, c), this.length = 0, this.head = null, this.tail = null, f?.forEach(function(d) {
                  return h.push(d);
                });
              }
              return i(c, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(h, d) {
                  return l(d.prev, s(h), d, this);
                }
              }, {
                key: "insertAfter",
                value: function(h, d) {
                  return l(d, s(h), d.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(h, d) {
                  return l(d.prev, h, d, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(h, d) {
                  return l(d, h, d.next, this);
                }
              }, {
                key: "push",
                value: function(h) {
                  return l(this.tail, s(h), null, this);
                }
              }, {
                key: "unshift",
                value: function(h) {
                  return l(null, s(h), this.head, this);
                }
              }, {
                key: "remove",
                value: function(h) {
                  return u(h, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return u(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return u(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return u(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return u(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(h) {
                  if (h <= this.length()) {
                    for (var d = 1, g = this.head; d < h; )
                      g = g.next, d++;
                    return g.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(h, d) {
                  if (h <= this.length()) {
                    for (var g = 1, p = this.head; g < h; )
                      p = p.next, g++;
                    p.value = d;
                  }
                }
              }]), c;
            })();
            r.exports = v;
          }),
          /* 12 */
          /***/
          (function(r, a, n) {
            function i(o, s, l) {
              this.x = null, this.y = null, o == null && s == null && l == null ? (this.x = 0, this.y = 0) : typeof o == "number" && typeof s == "number" && l == null ? (this.x = o, this.y = s) : o.constructor.name == "Point" && s == null && l == null && (l = o, this.x = l.x, this.y = l.y);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.getLocation = function() {
              return new i(this.x, this.y);
            }, i.prototype.setLocation = function(o, s, l) {
              o.constructor.name == "Point" && s == null && l == null ? (l = o, this.setLocation(l.x, l.y)) : typeof o == "number" && typeof s == "number" && l == null && (parseInt(o) == o && parseInt(s) == s ? this.move(o, s) : (this.x = Math.floor(o + 0.5), this.y = Math.floor(s + 0.5)));
            }, i.prototype.move = function(o, s) {
              this.x = o, this.y = s;
            }, i.prototype.translate = function(o, s) {
              this.x += o, this.y += s;
            }, i.prototype.equals = function(o) {
              if (o.constructor.name == "Point") {
                var s = o;
                return this.x == s.x && this.y == s.y;
              }
              return this == o;
            }, i.prototype.toString = function() {
              return new i().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, r.exports = i;
          }),
          /* 13 */
          /***/
          (function(r, a, n) {
            function i(o, s, l, u) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, o != null && s != null && l != null && u != null && (this.x = o, this.y = s, this.width = l, this.height = u);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.setX = function(o) {
              this.x = o;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setY = function(o) {
              this.y = o;
            }, i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(o) {
              this.width = o;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(o) {
              this.height = o;
            }, i.prototype.getRight = function() {
              return this.x + this.width;
            }, i.prototype.getBottom = function() {
              return this.y + this.height;
            }, i.prototype.intersects = function(o) {
              return !(this.getRight() < o.x || this.getBottom() < o.y || o.getRight() < this.x || o.getBottom() < this.y);
            }, i.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, i.prototype.getMinX = function() {
              return this.getX();
            }, i.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, i.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, i.prototype.getMinY = function() {
              return this.getY();
            }, i.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, i.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, i.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, r.exports = i;
          }),
          /* 14 */
          /***/
          (function(r, a, n) {
            var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
              return typeof s;
            } : function(s) {
              return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
            };
            function o() {
            }
            o.lastID = 0, o.createID = function(s) {
              return o.isPrimitive(s) ? s : (s.uniqueID != null || (s.uniqueID = o.getString(), o.lastID++), s.uniqueID);
            }, o.getString = function(s) {
              return s == null && (s = o.lastID), "Object#" + s;
            }, o.isPrimitive = function(s) {
              var l = typeof s > "u" ? "undefined" : i(s);
              return s == null || l != "object" && l != "function";
            }, r.exports = o;
          }),
          /* 15 */
          /***/
          (function(r, a, n) {
            function i(g) {
              if (Array.isArray(g)) {
                for (var p = 0, y = Array(g.length); p < g.length; p++)
                  y[p] = g[p];
                return y;
              } else
                return Array.from(g);
            }
            var o = n(0), s = n(6), l = n(3), u = n(1), v = n(5), c = n(4), f = n(17), h = n(27);
            function d(g) {
              h.call(this), this.layoutQuality = o.QUALITY, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = o.DEFAULT_INCREMENTAL, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new s(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, g != null && (this.isRemoteUse = g);
            }
            d.RANDOM_SEED = 1, d.prototype = Object.create(h.prototype), d.prototype.getGraphManager = function() {
              return this.graphManager;
            }, d.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, d.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, d.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, d.prototype.newGraphManager = function() {
              var g = new s(this);
              return this.graphManager = g, g;
            }, d.prototype.newGraph = function(g) {
              return new v(null, this.graphManager, g);
            }, d.prototype.newNode = function(g) {
              return new l(this.graphManager, g);
            }, d.prototype.newEdge = function(g) {
              return new u(null, null, g);
            }, d.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, d.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var g;
              return this.checkLayoutSuccess() ? g = !1 : g = this.layout(), o.ANIMATE === "during" ? !1 : (g && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, g);
            }, d.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, d.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var g = this.graphManager.getAllEdges(), p = 0; p < g.length; p++)
                  g[p];
                for (var y = this.graphManager.getRoot().getNodes(), p = 0; p < y.length; p++)
                  y[p];
                this.update(this.graphManager.getRoot());
              }
            }, d.prototype.update = function(g) {
              if (g == null)
                this.update2();
              else if (g instanceof l) {
                var p = g;
                if (p.getChild() != null)
                  for (var y = p.getChild().getNodes(), b = 0; b < y.length; b++)
                    update(y[b]);
                if (p.vGraphObject != null) {
                  var m = p.vGraphObject;
                  m.update(p);
                }
              } else if (g instanceof u) {
                var E = g;
                if (E.vGraphObject != null) {
                  var T = E.vGraphObject;
                  T.update(E);
                }
              } else if (g instanceof v) {
                var S = g;
                if (S.vGraphObject != null) {
                  var w = S.vGraphObject;
                  w.update(S);
                }
              }
            }, d.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = o.QUALITY, this.animationDuringLayout = o.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = o.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = o.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = o.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = o.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = o.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, d.prototype.transform = function(g) {
              if (g == null)
                this.transform(new c(0, 0));
              else {
                var p = new f(), y = this.graphManager.getRoot().updateLeftTop();
                if (y != null) {
                  p.setWorldOrgX(g.x), p.setWorldOrgY(g.y), p.setDeviceOrgX(y.x), p.setDeviceOrgY(y.y);
                  for (var b = this.getAllNodes(), m, E = 0; E < b.length; E++)
                    m = b[E], m.transform(p);
                }
              }
            }, d.prototype.positionNodesRandomly = function(g) {
              if (g == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var p, y, b = g.getNodes(), m = 0; m < b.length; m++)
                  p = b[m], y = p.getChild(), y == null || y.getNodes().length == 0 ? p.scatter() : (this.positionNodesRandomly(y), p.updateBounds());
            }, d.prototype.getFlatForest = function() {
              for (var g = [], p = !0, y = this.graphManager.getRoot().getNodes(), b = !0, m = 0; m < y.length; m++)
                y[m].getChild() != null && (b = !1);
              if (!b)
                return g;
              var E = /* @__PURE__ */ new Set(), T = [], S = /* @__PURE__ */ new Map(), w = [];
              for (w = w.concat(y); w.length > 0 && p; ) {
                for (T.push(w[0]); T.length > 0 && p; ) {
                  var x = T[0];
                  T.splice(0, 1), E.add(x);
                  for (var C = x.getEdges(), m = 0; m < C.length; m++) {
                    var D = C[m].getOtherEnd(x);
                    if (S.get(x) != D)
                      if (!E.has(D))
                        T.push(D), S.set(D, x);
                      else {
                        p = !1;
                        break;
                      }
                  }
                }
                if (!p)
                  g = [];
                else {
                  var A = [].concat(i(E));
                  g.push(A);
                  for (var m = 0; m < A.length; m++) {
                    var L = A[m], R = w.indexOf(L);
                    R > -1 && w.splice(R, 1);
                  }
                  E = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
                }
              }
              return g;
            }, d.prototype.createDummyNodesForBendpoints = function(g) {
              for (var p = [], y = g.source, b = this.graphManager.calcLowestCommonAncestor(g.source, g.target), m = 0; m < g.bendpoints.length; m++) {
                var E = this.newNode(null);
                E.setRect(new Point(0, 0), new Dimension(1, 1)), b.add(E);
                var T = this.newEdge(null);
                this.graphManager.add(T, y, E), p.add(E), y = E;
              }
              var T = this.newEdge(null);
              return this.graphManager.add(T, y, g.target), this.edgeToDummyNodes.set(g, p), g.isInterGraph() ? this.graphManager.remove(g) : b.remove(g), p;
            }, d.prototype.createBendpointsFromDummyNodes = function() {
              var g = [];
              g = g.concat(this.graphManager.getAllEdges()), g = [].concat(i(this.edgeToDummyNodes.keys())).concat(g);
              for (var p = 0; p < g.length; p++) {
                var y = g[p];
                if (y.bendpoints.length > 0) {
                  for (var b = this.edgeToDummyNodes.get(y), m = 0; m < b.length; m++) {
                    var E = b[m], T = new c(E.getCenterX(), E.getCenterY()), S = y.bendpoints.get(m);
                    S.x = T.x, S.y = T.y, E.getOwner().remove(E);
                  }
                  this.graphManager.add(y, y.source, y.target);
                }
              }
            }, d.transform = function(g, p, y, b) {
              if (y != null && b != null) {
                var m = p;
                if (g <= 50) {
                  var E = p / y;
                  m -= (p - E) / 50 * (50 - g);
                } else {
                  var T = p * b;
                  m += (T - p) / 50 * (g - 50);
                }
                return m;
              } else {
                var S, w;
                return g <= 50 ? (S = 9 * p / 500, w = p / 10) : (S = 9 * p / 50, w = -8 * p), S * g + w;
              }
            }, d.findCenterOfTree = function(g) {
              var p = [];
              p = p.concat(g);
              var y = [], b = /* @__PURE__ */ new Map(), m = !1, E = null;
              (p.length == 1 || p.length == 2) && (m = !0, E = p[0]);
              for (var T = 0; T < p.length; T++) {
                var S = p[T], w = S.getNeighborsList().size;
                b.set(S, S.getNeighborsList().size), w == 1 && y.push(S);
              }
              var x = [];
              for (x = x.concat(y); !m; ) {
                var C = [];
                C = C.concat(x), x = [];
                for (var T = 0; T < p.length; T++) {
                  var S = p[T], D = p.indexOf(S);
                  D >= 0 && p.splice(D, 1);
                  var A = S.getNeighborsList();
                  A.forEach(function(M) {
                    if (y.indexOf(M) < 0) {
                      var P = b.get(M), N = P - 1;
                      N == 1 && x.push(M), b.set(M, N);
                    }
                  });
                }
                y = y.concat(x), (p.length == 1 || p.length == 2) && (m = !0, E = p[0]);
              }
              return E;
            }, d.prototype.setGraphManager = function(g) {
              this.graphManager = g;
            }, r.exports = d;
          }),
          /* 16 */
          /***/
          (function(r, a, n) {
            function i() {
            }
            i.seed = 1, i.x = 0, i.nextDouble = function() {
              return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
            }, r.exports = i;
          }),
          /* 17 */
          /***/
          (function(r, a, n) {
            var i = n(4);
            function o(s, l) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            o.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, o.prototype.setWorldOrgX = function(s) {
              this.lworldOrgX = s;
            }, o.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, o.prototype.setWorldOrgY = function(s) {
              this.lworldOrgY = s;
            }, o.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, o.prototype.setWorldExtX = function(s) {
              this.lworldExtX = s;
            }, o.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, o.prototype.setWorldExtY = function(s) {
              this.lworldExtY = s;
            }, o.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, o.prototype.setDeviceOrgX = function(s) {
              this.ldeviceOrgX = s;
            }, o.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, o.prototype.setDeviceOrgY = function(s) {
              this.ldeviceOrgY = s;
            }, o.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, o.prototype.setDeviceExtX = function(s) {
              this.ldeviceExtX = s;
            }, o.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, o.prototype.setDeviceExtY = function(s) {
              this.ldeviceExtY = s;
            }, o.prototype.transformX = function(s) {
              var l = 0, u = this.lworldExtX;
              return u != 0 && (l = this.ldeviceOrgX + (s - this.lworldOrgX) * this.ldeviceExtX / u), l;
            }, o.prototype.transformY = function(s) {
              var l = 0, u = this.lworldExtY;
              return u != 0 && (l = this.ldeviceOrgY + (s - this.lworldOrgY) * this.ldeviceExtY / u), l;
            }, o.prototype.inverseTransformX = function(s) {
              var l = 0, u = this.ldeviceExtX;
              return u != 0 && (l = this.lworldOrgX + (s - this.ldeviceOrgX) * this.lworldExtX / u), l;
            }, o.prototype.inverseTransformY = function(s) {
              var l = 0, u = this.ldeviceExtY;
              return u != 0 && (l = this.lworldOrgY + (s - this.ldeviceOrgY) * this.lworldExtY / u), l;
            }, o.prototype.inverseTransformPoint = function(s) {
              var l = new i(this.inverseTransformX(s.x), this.inverseTransformY(s.y));
              return l;
            }, r.exports = o;
          }),
          /* 18 */
          /***/
          (function(r, a, n) {
            function i(h) {
              if (Array.isArray(h)) {
                for (var d = 0, g = Array(h.length); d < h.length; d++)
                  g[d] = h[d];
                return g;
              } else
                return Array.from(h);
            }
            var o = n(15), s = n(7), l = n(0), u = n(8), v = n(9);
            function c() {
              o.call(this), this.useSmartIdealEdgeLengthCalculation = s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = s.DEFAULT_EDGE_LENGTH, this.springConstant = s.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = s.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = s.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = s.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = s.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * s.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = s.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = s.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = s.MAX_ITERATIONS;
            }
            c.prototype = Object.create(o.prototype);
            for (var f in o)
              c[f] = o[f];
            c.prototype.initParameters = function() {
              o.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = s.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, c.prototype.calcIdealEdgeLengths = function() {
              for (var h, d, g, p, y, b, m = this.getGraphManager().getAllEdges(), E = 0; E < m.length; E++)
                h = m[E], h.idealLength = this.idealEdgeLength, h.isInterGraph && (g = h.getSource(), p = h.getTarget(), y = h.getSourceInLca().getEstimatedSize(), b = h.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (h.idealLength += y + b - 2 * l.SIMPLE_NODE_SIZE), d = h.getLca().getInclusionTreeDepth(), h.idealLength += s.DEFAULT_EDGE_LENGTH * s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (g.getInclusionTreeDepth() + p.getInclusionTreeDepth() - 2 * d));
            }, c.prototype.initSpringEmbedder = function() {
              var h = this.getAllNodes().length;
              this.incremental ? (h > s.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * s.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (h - s.ADAPTATION_LOWER_NODE_LIMIT) / (s.ADAPTATION_UPPER_NODE_LIMIT - s.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - s.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = s.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (h > s.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(s.COOLING_ADAPTATION_FACTOR, 1 - (h - s.ADAPTATION_LOWER_NODE_LIMIT) / (s.ADAPTATION_UPPER_NODE_LIMIT - s.ADAPTATION_LOWER_NODE_LIMIT) * (1 - s.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = s.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, c.prototype.calcSpringForces = function() {
              for (var h = this.getAllEdges(), d, g = 0; g < h.length; g++)
                d = h[g], this.calcSpringForce(d, d.idealLength);
            }, c.prototype.calcRepulsionForces = function() {
              var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g, p, y, b, m = this.getAllNodes(), E;
              if (this.useFRGridVariant)
                for (this.totalIterations % s.GRID_CALCULATION_CHECK_PERIOD == 1 && h && this.updateGrid(), E = /* @__PURE__ */ new Set(), g = 0; g < m.length; g++)
                  y = m[g], this.calculateRepulsionForceOfANode(y, E, h, d), E.add(y);
              else
                for (g = 0; g < m.length; g++)
                  for (y = m[g], p = g + 1; p < m.length; p++)
                    b = m[p], y.getOwner() == b.getOwner() && this.calcRepulsionForce(y, b);
            }, c.prototype.calcGravitationalForces = function() {
              for (var h, d = this.getAllNodesToApplyGravitation(), g = 0; g < d.length; g++)
                h = d[g], this.calcGravitationalForce(h);
            }, c.prototype.moveNodes = function() {
              for (var h = this.getAllNodes(), d, g = 0; g < h.length; g++)
                d = h[g], d.move();
            }, c.prototype.calcSpringForce = function(h, d) {
              var g = h.getSource(), p = h.getTarget(), y, b, m, E;
              if (this.uniformLeafNodeSizes && g.getChild() == null && p.getChild() == null)
                h.updateLengthSimple();
              else if (h.updateLength(), h.isOverlapingSourceAndTarget)
                return;
              y = h.getLength(), y != 0 && (b = this.springConstant * (y - d), m = b * (h.lengthX / y), E = b * (h.lengthY / y), g.springForceX += m, g.springForceY += E, p.springForceX -= m, p.springForceY -= E);
            }, c.prototype.calcRepulsionForce = function(h, d) {
              var g = h.getRect(), p = d.getRect(), y = new Array(2), b = new Array(4), m, E, T, S, w, x, C;
              if (g.intersects(p)) {
                u.calcSeparationAmount(g, p, y, s.DEFAULT_EDGE_LENGTH / 2), x = 2 * y[0], C = 2 * y[1];
                var D = h.noOfChildren * d.noOfChildren / (h.noOfChildren + d.noOfChildren);
                h.repulsionForceX -= D * x, h.repulsionForceY -= D * C, d.repulsionForceX += D * x, d.repulsionForceY += D * C;
              } else
                this.uniformLeafNodeSizes && h.getChild() == null && d.getChild() == null ? (m = p.getCenterX() - g.getCenterX(), E = p.getCenterY() - g.getCenterY()) : (u.getIntersection(g, p, b), m = b[2] - b[0], E = b[3] - b[1]), Math.abs(m) < s.MIN_REPULSION_DIST && (m = v.sign(m) * s.MIN_REPULSION_DIST), Math.abs(E) < s.MIN_REPULSION_DIST && (E = v.sign(E) * s.MIN_REPULSION_DIST), T = m * m + E * E, S = Math.sqrt(T), w = this.repulsionConstant * h.noOfChildren * d.noOfChildren / T, x = w * m / S, C = w * E / S, h.repulsionForceX -= x, h.repulsionForceY -= C, d.repulsionForceX += x, d.repulsionForceY += C;
            }, c.prototype.calcGravitationalForce = function(h) {
              var d, g, p, y, b, m, E, T;
              d = h.getOwner(), g = (d.getRight() + d.getLeft()) / 2, p = (d.getTop() + d.getBottom()) / 2, y = h.getCenterX() - g, b = h.getCenterY() - p, m = Math.abs(y) + h.getWidth() / 2, E = Math.abs(b) + h.getHeight() / 2, h.getOwner() == this.graphManager.getRoot() ? (T = d.getEstimatedSize() * this.gravityRangeFactor, (m > T || E > T) && (h.gravitationForceX = -this.gravityConstant * y, h.gravitationForceY = -this.gravityConstant * b)) : (T = d.getEstimatedSize() * this.compoundGravityRangeFactor, (m > T || E > T) && (h.gravitationForceX = -this.gravityConstant * y * this.compoundGravityConstant, h.gravitationForceY = -this.gravityConstant * b * this.compoundGravityConstant));
            }, c.prototype.isConverged = function() {
              var h, d = !1;
              return this.totalIterations > this.maxIterations / 3 && (d = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), h = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, h || d;
            }, c.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, c.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var h, d = this.graphManager.getAllNodes(), g = 0; g < d.length; g++)
                h = d[g], h.noOfChildren = h.getNoOfChildren();
            }, c.prototype.calcGrid = function(h) {
              var d = 0, g = 0;
              d = parseInt(Math.ceil((h.getRight() - h.getLeft()) / this.repulsionRange)), g = parseInt(Math.ceil((h.getBottom() - h.getTop()) / this.repulsionRange));
              for (var p = new Array(d), y = 0; y < d; y++)
                p[y] = new Array(g);
              for (var y = 0; y < d; y++)
                for (var b = 0; b < g; b++)
                  p[y][b] = new Array();
              return p;
            }, c.prototype.addNodeToGrid = function(h, d, g) {
              var p = 0, y = 0, b = 0, m = 0;
              p = parseInt(Math.floor((h.getRect().x - d) / this.repulsionRange)), y = parseInt(Math.floor((h.getRect().width + h.getRect().x - d) / this.repulsionRange)), b = parseInt(Math.floor((h.getRect().y - g) / this.repulsionRange)), m = parseInt(Math.floor((h.getRect().height + h.getRect().y - g) / this.repulsionRange));
              for (var E = p; E <= y; E++)
                for (var T = b; T <= m; T++)
                  this.grid[E][T].push(h), h.setGridCoordinates(p, y, b, m);
            }, c.prototype.updateGrid = function() {
              var h, d, g = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), h = 0; h < g.length; h++)
                d = g[h], this.addNodeToGrid(d, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, c.prototype.calculateRepulsionForceOfANode = function(h, d, g, p) {
              if (this.totalIterations % s.GRID_CALCULATION_CHECK_PERIOD == 1 && g || p) {
                var y = /* @__PURE__ */ new Set();
                h.surrounding = new Array();
                for (var b, m = this.grid, E = h.startX - 1; E < h.finishX + 2; E++)
                  for (var T = h.startY - 1; T < h.finishY + 2; T++)
                    if (!(E < 0 || T < 0 || E >= m.length || T >= m[0].length)) {
                      for (var S = 0; S < m[E][T].length; S++)
                        if (b = m[E][T][S], !(h.getOwner() != b.getOwner() || h == b) && !d.has(b) && !y.has(b)) {
                          var w = Math.abs(h.getCenterX() - b.getCenterX()) - (h.getWidth() / 2 + b.getWidth() / 2), x = Math.abs(h.getCenterY() - b.getCenterY()) - (h.getHeight() / 2 + b.getHeight() / 2);
                          w <= this.repulsionRange && x <= this.repulsionRange && y.add(b);
                        }
                    }
                h.surrounding = [].concat(i(y));
              }
              for (E = 0; E < h.surrounding.length; E++)
                this.calcRepulsionForce(h, h.surrounding[E]);
            }, c.prototype.calcRepulsionRange = function() {
              return 0;
            }, r.exports = c;
          }),
          /* 19 */
          /***/
          (function(r, a, n) {
            var i = n(1), o = n(7);
            function s(u, v, c) {
              i.call(this, u, v, c), this.idealLength = o.DEFAULT_EDGE_LENGTH;
            }
            s.prototype = Object.create(i.prototype);
            for (var l in i)
              s[l] = i[l];
            r.exports = s;
          }),
          /* 20 */
          /***/
          (function(r, a, n) {
            var i = n(3);
            function o(l, u, v, c) {
              i.call(this, l, u, v, c), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            o.prototype = Object.create(i.prototype);
            for (var s in i)
              o[s] = i[s];
            o.prototype.setGridCoordinates = function(l, u, v, c) {
              this.startX = l, this.finishX = u, this.startY = v, this.finishY = c;
            }, r.exports = o;
          }),
          /* 21 */
          /***/
          (function(r, a, n) {
            function i(o, s) {
              this.width = 0, this.height = 0, o !== null && s !== null && (this.height = s, this.width = o);
            }
            i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(o) {
              this.width = o;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(o) {
              this.height = o;
            }, r.exports = i;
          }),
          /* 22 */
          /***/
          (function(r, a, n) {
            var i = n(14);
            function o() {
              this.map = {}, this.keys = [];
            }
            o.prototype.put = function(s, l) {
              var u = i.createID(s);
              this.contains(u) || (this.map[u] = l, this.keys.push(s));
            }, o.prototype.contains = function(s) {
              return i.createID(s), this.map[s] != null;
            }, o.prototype.get = function(s) {
              var l = i.createID(s);
              return this.map[l];
            }, o.prototype.keySet = function() {
              return this.keys;
            }, r.exports = o;
          }),
          /* 23 */
          /***/
          (function(r, a, n) {
            var i = n(14);
            function o() {
              this.set = {};
            }
            o.prototype.add = function(s) {
              var l = i.createID(s);
              this.contains(l) || (this.set[l] = s);
            }, o.prototype.remove = function(s) {
              delete this.set[i.createID(s)];
            }, o.prototype.clear = function() {
              this.set = {};
            }, o.prototype.contains = function(s) {
              return this.set[i.createID(s)] == s;
            }, o.prototype.isEmpty = function() {
              return this.size() === 0;
            }, o.prototype.size = function() {
              return Object.keys(this.set).length;
            }, o.prototype.addAllTo = function(s) {
              for (var l = Object.keys(this.set), u = l.length, v = 0; v < u; v++)
                s.push(this.set[l[v]]);
            }, o.prototype.size = function() {
              return Object.keys(this.set).length;
            }, o.prototype.addAll = function(s) {
              for (var l = s.length, u = 0; u < l; u++) {
                var v = s[u];
                this.add(v);
              }
            }, r.exports = o;
          }),
          /* 24 */
          /***/
          (function(r, a, n) {
            var i = /* @__PURE__ */ (function() {
              function u(v, c) {
                for (var f = 0; f < c.length; f++) {
                  var h = c[f];
                  h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(v, h.key, h);
                }
              }
              return function(v, c, f) {
                return c && u(v.prototype, c), f && u(v, f), v;
              };
            })();
            function o(u, v) {
              if (!(u instanceof v))
                throw new TypeError("Cannot call a class as a function");
            }
            var s = n(11), l = (function() {
              function u(v, c) {
                o(this, u), (c !== null || c !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var f = void 0;
                v instanceof s ? f = v.size() : f = v.length, this._quicksort(v, 0, f - 1);
              }
              return i(u, [{
                key: "_quicksort",
                value: function(c, f, h) {
                  if (f < h) {
                    var d = this._partition(c, f, h);
                    this._quicksort(c, f, d), this._quicksort(c, d + 1, h);
                  }
                }
              }, {
                key: "_partition",
                value: function(c, f, h) {
                  for (var d = this._get(c, f), g = f, p = h; ; ) {
                    for (; this.compareFunction(d, this._get(c, p)); )
                      p--;
                    for (; this.compareFunction(this._get(c, g), d); )
                      g++;
                    if (g < p)
                      this._swap(c, g, p), g++, p--;
                    else return p;
                  }
                }
              }, {
                key: "_get",
                value: function(c, f) {
                  return c instanceof s ? c.get_object_at(f) : c[f];
                }
              }, {
                key: "_set",
                value: function(c, f, h) {
                  c instanceof s ? c.set_object_at(f, h) : c[f] = h;
                }
              }, {
                key: "_swap",
                value: function(c, f, h) {
                  var d = this._get(c, f);
                  this._set(c, f, this._get(c, h)), this._set(c, h, d);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(c, f) {
                  return f > c;
                }
              }]), u;
            })();
            r.exports = l;
          }),
          /* 25 */
          /***/
          (function(r, a, n) {
            var i = /* @__PURE__ */ (function() {
              function l(u, v) {
                for (var c = 0; c < v.length; c++) {
                  var f = v[c];
                  f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(u, f.key, f);
                }
              }
              return function(u, v, c) {
                return v && l(u.prototype, v), c && l(u, c), u;
              };
            })();
            function o(l, u) {
              if (!(l instanceof u))
                throw new TypeError("Cannot call a class as a function");
            }
            var s = (function() {
              function l(u, v) {
                var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                o(this, l), this.sequence1 = u, this.sequence2 = v, this.match_score = c, this.mismatch_penalty = f, this.gap_penalty = h, this.iMax = u.length + 1, this.jMax = v.length + 1, this.grid = new Array(this.iMax);
                for (var d = 0; d < this.iMax; d++) {
                  this.grid[d] = new Array(this.jMax);
                  for (var g = 0; g < this.jMax; g++)
                    this.grid[d][g] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var p = 0; p < this.iMax; p++) {
                  this.tracebackGrid[p] = new Array(this.jMax);
                  for (var y = 0; y < this.jMax; y++)
                    this.tracebackGrid[p][y] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return i(l, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var v = 1; v < this.jMax; v++)
                    this.grid[0][v] = this.grid[0][v - 1] + this.gap_penalty, this.tracebackGrid[0][v] = [!1, !1, !0];
                  for (var c = 1; c < this.iMax; c++)
                    this.grid[c][0] = this.grid[c - 1][0] + this.gap_penalty, this.tracebackGrid[c][0] = [!1, !0, !1];
                  for (var f = 1; f < this.iMax; f++)
                    for (var h = 1; h < this.jMax; h++) {
                      var d = void 0;
                      this.sequence1[f - 1] === this.sequence2[h - 1] ? d = this.grid[f - 1][h - 1] + this.match_score : d = this.grid[f - 1][h - 1] + this.mismatch_penalty;
                      var g = this.grid[f - 1][h] + this.gap_penalty, p = this.grid[f][h - 1] + this.gap_penalty, y = [d, g, p], b = this.arrayAllMaxIndexes(y);
                      this.grid[f][h] = y[b[0]], this.tracebackGrid[f][h] = [b.includes(0), b.includes(1), b.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var v = [];
                  for (v.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); v[0]; ) {
                    var c = v[0], f = this.tracebackGrid[c.pos[0]][c.pos[1]];
                    f[0] && v.push({
                      pos: [c.pos[0] - 1, c.pos[1] - 1],
                      seq1: this.sequence1[c.pos[0] - 1] + c.seq1,
                      seq2: this.sequence2[c.pos[1] - 1] + c.seq2
                    }), f[1] && v.push({
                      pos: [c.pos[0] - 1, c.pos[1]],
                      seq1: this.sequence1[c.pos[0] - 1] + c.seq1,
                      seq2: "-" + c.seq2
                    }), f[2] && v.push({
                      pos: [c.pos[0], c.pos[1] - 1],
                      seq1: "-" + c.seq1,
                      seq2: this.sequence2[c.pos[1] - 1] + c.seq2
                    }), c.pos[0] === 0 && c.pos[1] === 0 && this.alignments.push({
                      sequence1: c.seq1,
                      sequence2: c.seq2
                    }), v.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(v, c) {
                  for (var f = [], h = -1; (h = v.indexOf(c, h + 1)) !== -1; )
                    f.push(h);
                  return f;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(v) {
                  return this.getAllIndexes(v, Math.max.apply(null, v));
                }
              }]), l;
            })();
            r.exports = s;
          }),
          /* 26 */
          /***/
          (function(r, a, n) {
            var i = function() {
            };
            i.FDLayout = n(18), i.FDLayoutConstants = n(7), i.FDLayoutEdge = n(19), i.FDLayoutNode = n(20), i.DimensionD = n(21), i.HashMap = n(22), i.HashSet = n(23), i.IGeometry = n(8), i.IMath = n(9), i.Integer = n(10), i.Point = n(12), i.PointD = n(4), i.RandomSeed = n(16), i.RectangleD = n(13), i.Transform = n(17), i.UniqueIDGeneretor = n(14), i.Quicksort = n(24), i.LinkedList = n(11), i.LGraphObject = n(2), i.LGraph = n(5), i.LEdge = n(1), i.LGraphManager = n(6), i.LNode = n(3), i.Layout = n(15), i.LayoutConstants = n(0), i.NeedlemanWunsch = n(25), r.exports = i;
          }),
          /* 27 */
          /***/
          (function(r, a, n) {
            function i() {
              this.listeners = [];
            }
            var o = i.prototype;
            o.addListener = function(s, l) {
              this.listeners.push({
                event: s,
                callback: l
              });
            }, o.removeListener = function(s, l) {
              for (var u = this.listeners.length; u >= 0; u--) {
                var v = this.listeners[u];
                v.event === s && v.callback === l && this.listeners.splice(u, 1);
              }
            }, o.emit = function(s, l) {
              for (var u = 0; u < this.listeners.length; u++) {
                var v = this.listeners[u];
                s === v.event && v.callback(l);
              }
            }, r.exports = i;
          })
          /******/
        ])
      );
    });
  })(Tn)), Tn.exports;
}
var l0 = xn.exports, vv;
function u0() {
  return vv || (vv = 1, (function(t, e) {
    (function(a, n) {
      t.exports = n(s0());
    })(l0, function(r) {
      return (
        /******/
        (function(a) {
          var n = {};
          function i(o) {
            if (n[o])
              return n[o].exports;
            var s = n[o] = {
              /******/
              i: o,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return a[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
          }
          return i.m = a, i.c = n, i.i = function(o) {
            return o;
          }, i.d = function(o, s, l) {
            i.o(o, s) || Object.defineProperty(o, s, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: l
              /******/
            });
          }, i.n = function(o) {
            var s = o && o.__esModule ? (
              /******/
              function() {
                return o.default;
              }
            ) : (
              /******/
              function() {
                return o;
              }
            );
            return i.d(s, "a", s), s;
          }, i.o = function(o, s) {
            return Object.prototype.hasOwnProperty.call(o, s);
          }, i.p = "", i(i.s = 7);
        })([
          /* 0 */
          /***/
          (function(a, n) {
            a.exports = r;
          }),
          /* 1 */
          /***/
          (function(a, n, i) {
            var o = i(0).FDLayoutConstants;
            function s() {
            }
            for (var l in o)
              s[l] = o[l];
            s.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, s.DEFAULT_RADIAL_SEPARATION = o.DEFAULT_EDGE_LENGTH, s.DEFAULT_COMPONENT_SEPERATION = 60, s.TILE = !0, s.TILING_PADDING_VERTICAL = 10, s.TILING_PADDING_HORIZONTAL = 10, s.TREE_REDUCTION_ON_INCREMENTAL = !1, a.exports = s;
          }),
          /* 2 */
          /***/
          (function(a, n, i) {
            var o = i(0).FDLayoutEdge;
            function s(u, v, c) {
              o.call(this, u, v, c);
            }
            s.prototype = Object.create(o.prototype);
            for (var l in o)
              s[l] = o[l];
            a.exports = s;
          }),
          /* 3 */
          /***/
          (function(a, n, i) {
            var o = i(0).LGraph;
            function s(u, v, c) {
              o.call(this, u, v, c);
            }
            s.prototype = Object.create(o.prototype);
            for (var l in o)
              s[l] = o[l];
            a.exports = s;
          }),
          /* 4 */
          /***/
          (function(a, n, i) {
            var o = i(0).LGraphManager;
            function s(u) {
              o.call(this, u);
            }
            s.prototype = Object.create(o.prototype);
            for (var l in o)
              s[l] = o[l];
            a.exports = s;
          }),
          /* 5 */
          /***/
          (function(a, n, i) {
            var o = i(0).FDLayoutNode, s = i(0).IMath;
            function l(v, c, f, h) {
              o.call(this, v, c, f, h);
            }
            l.prototype = Object.create(o.prototype);
            for (var u in o)
              l[u] = o[u];
            l.prototype.move = function() {
              var v = this.graphManager.getLayout();
              this.displacementX = v.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = v.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > v.coolingFactor * v.maxNodeDisplacement && (this.displacementX = v.coolingFactor * v.maxNodeDisplacement * s.sign(this.displacementX)), Math.abs(this.displacementY) > v.coolingFactor * v.maxNodeDisplacement && (this.displacementY = v.coolingFactor * v.maxNodeDisplacement * s.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), v.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, l.prototype.propogateDisplacementToChildren = function(v, c) {
              for (var f = this.getChild().getNodes(), h, d = 0; d < f.length; d++)
                h = f[d], h.getChild() == null ? (h.moveBy(v, c), h.displacementX += v, h.displacementY += c) : h.propogateDisplacementToChildren(v, c);
            }, l.prototype.setPred1 = function(v) {
              this.pred1 = v;
            }, l.prototype.getPred1 = function() {
              return pred1;
            }, l.prototype.getPred2 = function() {
              return pred2;
            }, l.prototype.setNext = function(v) {
              this.next = v;
            }, l.prototype.getNext = function() {
              return next;
            }, l.prototype.setProcessed = function(v) {
              this.processed = v;
            }, l.prototype.isProcessed = function() {
              return processed;
            }, a.exports = l;
          }),
          /* 6 */
          /***/
          (function(a, n, i) {
            var o = i(0).FDLayout, s = i(4), l = i(3), u = i(5), v = i(2), c = i(1), f = i(0).FDLayoutConstants, h = i(0).LayoutConstants, d = i(0).Point, g = i(0).PointD, p = i(0).Layout, y = i(0).Integer, b = i(0).IGeometry, m = i(0).LGraph, E = i(0).Transform;
            function T() {
              o.call(this), this.toBeTiled = {};
            }
            T.prototype = Object.create(o.prototype);
            for (var S in o)
              T[S] = o[S];
            T.prototype.newGraphManager = function() {
              var w = new s(this);
              return this.graphManager = w, w;
            }, T.prototype.newGraph = function(w) {
              return new l(null, this.graphManager, w);
            }, T.prototype.newNode = function(w) {
              return new u(this.graphManager, w);
            }, T.prototype.newEdge = function(w) {
              return new v(null, null, w);
            }, T.prototype.initParameters = function() {
              o.prototype.initParameters.call(this, arguments), this.isSubLayout || (c.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = c.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = c.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = f.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = f.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = f.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = f.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = f.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = f.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / f.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = f.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, T.prototype.layout = function() {
              var w = h.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return w && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, T.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (c.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var x = new Set(this.getAllNodes()), C = this.nodesWithGravity.filter(function(L) {
                    return x.has(L);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(C);
                }
              } else {
                var w = this.getFlatForest();
                if (w.length > 0)
                  this.positionNodesRadially(w);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var x = new Set(this.getAllNodes()), C = this.nodesWithGravity.filter(function(D) {
                    return x.has(D);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(C), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
            }, T.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = !0;
                else
                  return !0;
              if (this.totalIterations % f.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = !0;
                  else
                    return !0;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var w = new Set(this.getAllNodes()), x = this.nodesWithGravity.filter(function(A) {
                      return w.has(A);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(x), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = f.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return !0;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = f.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var C = !this.isTreeGrowing && !this.isGrowthFinished, D = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(C, D), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
            }, T.prototype.getPositionsData = function() {
              for (var w = this.graphManager.getAllNodes(), x = {}, C = 0; C < w.length; C++) {
                var D = w[C].rect, A = w[C].id;
                x[A] = {
                  id: A,
                  x: D.getCenterX(),
                  y: D.getCenterY(),
                  w: D.width,
                  h: D.height
                };
              }
              return x;
            }, T.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var w = !1;
              if (f.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !w; )
                  w = this.tick();
                this.graphManager.updateBounds();
              }
            }, T.prototype.calculateNodesToApplyGravitationTo = function() {
              var w = [], x, C = this.graphManager.getGraphs(), D = C.length, A;
              for (A = 0; A < D; A++)
                x = C[A], x.updateConnected(), x.isConnected || (w = w.concat(x.getNodes()));
              return w;
            }, T.prototype.createBendpoints = function() {
              var w = [];
              w = w.concat(this.graphManager.getAllEdges());
              var x = /* @__PURE__ */ new Set(), C;
              for (C = 0; C < w.length; C++) {
                var D = w[C];
                if (!x.has(D)) {
                  var A = D.getSource(), L = D.getTarget();
                  if (A == L)
                    D.getBendpoints().push(new g()), D.getBendpoints().push(new g()), this.createDummyNodesForBendpoints(D), x.add(D);
                  else {
                    var R = [];
                    if (R = R.concat(A.getEdgeListToNode(L)), R = R.concat(L.getEdgeListToNode(A)), !x.has(R[0])) {
                      if (R.length > 1) {
                        var M;
                        for (M = 0; M < R.length; M++) {
                          var P = R[M];
                          P.getBendpoints().push(new g()), this.createDummyNodesForBendpoints(P);
                        }
                      }
                      R.forEach(function(N) {
                        x.add(N);
                      });
                    }
                  }
                }
                if (x.size == w.length)
                  break;
              }
            }, T.prototype.positionNodesRadially = function(w) {
              for (var x = new d(0, 0), C = Math.ceil(Math.sqrt(w.length)), D = 0, A = 0, L = 0, R = new g(0, 0), M = 0; M < w.length; M++) {
                M % C == 0 && (L = 0, A = D, M != 0 && (A += c.DEFAULT_COMPONENT_SEPERATION), D = 0);
                var P = w[M], N = p.findCenterOfTree(P);
                x.x = L, x.y = A, R = T.radialLayout(P, N, x), R.y > D && (D = Math.floor(R.y)), L = Math.floor(R.x + c.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new g(h.WORLD_CENTER_X - R.x / 2, h.WORLD_CENTER_Y - R.y / 2));
            }, T.radialLayout = function(w, x, C) {
              var D = Math.max(this.maxDiagonalInTree(w), c.DEFAULT_RADIAL_SEPARATION);
              T.branchRadialLayout(x, null, 0, 359, 0, D);
              var A = m.calculateBounds(w), L = new E();
              L.setDeviceOrgX(A.getMinX()), L.setDeviceOrgY(A.getMinY()), L.setWorldOrgX(C.x), L.setWorldOrgY(C.y);
              for (var R = 0; R < w.length; R++) {
                var M = w[R];
                M.transform(L);
              }
              var P = new g(A.getMaxX(), A.getMaxY());
              return L.inverseTransformPoint(P);
            }, T.branchRadialLayout = function(w, x, C, D, A, L) {
              var R = (D - C + 1) / 2;
              R < 0 && (R += 180);
              var M = (R + C) % 360, P = M * b.TWO_PI / 360, N = A * Math.cos(P), O = A * Math.sin(P);
              w.setCenter(N, O);
              var k = [];
              k = k.concat(w.getEdges());
              var F = k.length;
              x != null && F--;
              for (var _ = 0, B = k.length, G, H = w.getEdgesBetween(x); H.length > 1; ) {
                var X = H[0];
                H.splice(0, 1);
                var $ = k.indexOf(X);
                $ >= 0 && k.splice($, 1), B--, F--;
              }
              x != null ? G = (k.indexOf(H[0]) + 1) % B : G = 0;
              for (var K = Math.abs(D - C) / F, ee = G; _ != F; ee = ++ee % B) {
                var ae = k[ee].getOtherEnd(w);
                if (ae != x) {
                  var Z = (C + _ * K) % 360, V = (Z + K) % 360;
                  T.branchRadialLayout(ae, w, Z, V, A + L, L), _++;
                }
              }
            }, T.maxDiagonalInTree = function(w) {
              for (var x = y.MIN_VALUE, C = 0; C < w.length; C++) {
                var D = w[C], A = D.getDiagonal();
                A > x && (x = A);
              }
              return x;
            }, T.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, T.prototype.groupZeroDegreeMembers = function() {
              var w = this, x = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var C = [], D = this.graphManager.getAllNodes(), A = 0; A < D.length; A++) {
                var L = D[A], R = L.getParent();
                this.getNodeDegreeWithChildren(L) === 0 && (R.id == null || !this.getToBeTiled(R)) && C.push(L);
              }
              for (var A = 0; A < C.length; A++) {
                var L = C[A], M = L.getParent().id;
                typeof x[M] > "u" && (x[M] = []), x[M] = x[M].concat(L);
              }
              Object.keys(x).forEach(function(P) {
                if (x[P].length > 1) {
                  var N = "DummyCompound_" + P;
                  w.memberGroups[N] = x[P];
                  var O = x[P][0].getParent(), k = new u(w.graphManager);
                  k.id = N, k.paddingLeft = O.paddingLeft || 0, k.paddingRight = O.paddingRight || 0, k.paddingBottom = O.paddingBottom || 0, k.paddingTop = O.paddingTop || 0, w.idToDummyNode[N] = k;
                  var F = w.getGraphManager().add(w.newGraph(), k), _ = O.getChild();
                  _.add(k);
                  for (var B = 0; B < x[P].length; B++) {
                    var G = x[P][B];
                    _.remove(G), F.add(G);
                  }
                }
              });
            }, T.prototype.clearCompounds = function() {
              var w = {}, x = {};
              this.performDFSOnCompounds();
              for (var C = 0; C < this.compoundOrder.length; C++)
                x[this.compoundOrder[C].id] = this.compoundOrder[C], w[this.compoundOrder[C].id] = [].concat(this.compoundOrder[C].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[C].getChild()), this.compoundOrder[C].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(w, x);
            }, T.prototype.clearZeroDegreeMembers = function() {
              var w = this, x = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(C) {
                var D = w.idToDummyNode[C];
                x[C] = w.tileNodes(w.memberGroups[C], D.paddingLeft + D.paddingRight), D.rect.width = x[C].width, D.rect.height = x[C].height;
              });
            }, T.prototype.repopulateCompounds = function() {
              for (var w = this.compoundOrder.length - 1; w >= 0; w--) {
                var x = this.compoundOrder[w], C = x.id, D = x.paddingLeft, A = x.paddingTop;
                this.adjustLocations(this.tiledMemberPack[C], x.rect.x, x.rect.y, D, A);
              }
            }, T.prototype.repopulateZeroDegreeMembers = function() {
              var w = this, x = this.tiledZeroDegreePack;
              Object.keys(x).forEach(function(C) {
                var D = w.idToDummyNode[C], A = D.paddingLeft, L = D.paddingTop;
                w.adjustLocations(x[C], D.rect.x, D.rect.y, A, L);
              });
            }, T.prototype.getToBeTiled = function(w) {
              var x = w.id;
              if (this.toBeTiled[x] != null)
                return this.toBeTiled[x];
              var C = w.getChild();
              if (C == null)
                return this.toBeTiled[x] = !1, !1;
              for (var D = C.getNodes(), A = 0; A < D.length; A++) {
                var L = D[A];
                if (this.getNodeDegree(L) > 0)
                  return this.toBeTiled[x] = !1, !1;
                if (L.getChild() == null) {
                  this.toBeTiled[L.id] = !1;
                  continue;
                }
                if (!this.getToBeTiled(L))
                  return this.toBeTiled[x] = !1, !1;
              }
              return this.toBeTiled[x] = !0, !0;
            }, T.prototype.getNodeDegree = function(w) {
              w.id;
              for (var x = w.getEdges(), C = 0, D = 0; D < x.length; D++) {
                var A = x[D];
                A.getSource().id !== A.getTarget().id && (C = C + 1);
              }
              return C;
            }, T.prototype.getNodeDegreeWithChildren = function(w) {
              var x = this.getNodeDegree(w);
              if (w.getChild() == null)
                return x;
              for (var C = w.getChild().getNodes(), D = 0; D < C.length; D++) {
                var A = C[D];
                x += this.getNodeDegreeWithChildren(A);
              }
              return x;
            }, T.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, T.prototype.fillCompexOrderByDFS = function(w) {
              for (var x = 0; x < w.length; x++) {
                var C = w[x];
                C.getChild() != null && this.fillCompexOrderByDFS(C.getChild().getNodes()), this.getToBeTiled(C) && this.compoundOrder.push(C);
              }
            }, T.prototype.adjustLocations = function(w, x, C, D, A) {
              x += D, C += A;
              for (var L = x, R = 0; R < w.rows.length; R++) {
                var M = w.rows[R];
                x = L;
                for (var P = 0, N = 0; N < M.length; N++) {
                  var O = M[N];
                  O.rect.x = x, O.rect.y = C, x += O.rect.width + w.horizontalPadding, O.rect.height > P && (P = O.rect.height);
                }
                C += P + w.verticalPadding;
              }
            }, T.prototype.tileCompoundMembers = function(w, x) {
              var C = this;
              this.tiledMemberPack = [], Object.keys(w).forEach(function(D) {
                var A = x[D];
                C.tiledMemberPack[D] = C.tileNodes(w[D], A.paddingLeft + A.paddingRight), A.rect.width = C.tiledMemberPack[D].width, A.rect.height = C.tiledMemberPack[D].height;
              });
            }, T.prototype.tileNodes = function(w, x) {
              var C = c.TILING_PADDING_VERTICAL, D = c.TILING_PADDING_HORIZONTAL, A = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: x,
                // assume minHeight equals to minWidth
                verticalPadding: C,
                horizontalPadding: D
              };
              w.sort(function(M, P) {
                return M.rect.width * M.rect.height > P.rect.width * P.rect.height ? -1 : M.rect.width * M.rect.height < P.rect.width * P.rect.height ? 1 : 0;
              });
              for (var L = 0; L < w.length; L++) {
                var R = w[L];
                A.rows.length == 0 ? this.insertNodeToRow(A, R, 0, x) : this.canAddHorizontal(A, R.rect.width, R.rect.height) ? this.insertNodeToRow(A, R, this.getShortestRowIndex(A), x) : this.insertNodeToRow(A, R, A.rows.length, x), this.shiftToLastRow(A);
              }
              return A;
            }, T.prototype.insertNodeToRow = function(w, x, C, D) {
              var A = D;
              if (C == w.rows.length) {
                var L = [];
                w.rows.push(L), w.rowWidth.push(A), w.rowHeight.push(0);
              }
              var R = w.rowWidth[C] + x.rect.width;
              w.rows[C].length > 0 && (R += w.horizontalPadding), w.rowWidth[C] = R, w.width < R && (w.width = R);
              var M = x.rect.height;
              C > 0 && (M += w.verticalPadding);
              var P = 0;
              M > w.rowHeight[C] && (P = w.rowHeight[C], w.rowHeight[C] = M, P = w.rowHeight[C] - P), w.height += P, w.rows[C].push(x);
            }, T.prototype.getShortestRowIndex = function(w) {
              for (var x = -1, C = Number.MAX_VALUE, D = 0; D < w.rows.length; D++)
                w.rowWidth[D] < C && (x = D, C = w.rowWidth[D]);
              return x;
            }, T.prototype.getLongestRowIndex = function(w) {
              for (var x = -1, C = Number.MIN_VALUE, D = 0; D < w.rows.length; D++)
                w.rowWidth[D] > C && (x = D, C = w.rowWidth[D]);
              return x;
            }, T.prototype.canAddHorizontal = function(w, x, C) {
              var D = this.getShortestRowIndex(w);
              if (D < 0)
                return !0;
              var A = w.rowWidth[D];
              if (A + w.horizontalPadding + x <= w.width) return !0;
              var L = 0;
              w.rowHeight[D] < C && D > 0 && (L = C + w.verticalPadding - w.rowHeight[D]);
              var R;
              w.width - A >= x + w.horizontalPadding ? R = (w.height + L) / (A + x + w.horizontalPadding) : R = (w.height + L) / w.width, L = C + w.verticalPadding;
              var M;
              return w.width < x ? M = (w.height + L) / x : M = (w.height + L) / w.width, M < 1 && (M = 1 / M), R < 1 && (R = 1 / R), R < M;
            }, T.prototype.shiftToLastRow = function(w) {
              var x = this.getLongestRowIndex(w), C = w.rowWidth.length - 1, D = w.rows[x], A = D[D.length - 1], L = A.width + w.horizontalPadding;
              if (w.width - w.rowWidth[C] > L && x != C) {
                D.splice(-1, 1), w.rows[C].push(A), w.rowWidth[x] = w.rowWidth[x] - L, w.rowWidth[C] = w.rowWidth[C] + L, w.width = w.rowWidth[instance.getLongestRowIndex(w)];
                for (var R = Number.MIN_VALUE, M = 0; M < D.length; M++)
                  D[M].height > R && (R = D[M].height);
                x > 0 && (R += w.verticalPadding);
                var P = w.rowHeight[x] + w.rowHeight[C];
                w.rowHeight[x] = R, w.rowHeight[C] < A.height + w.verticalPadding && (w.rowHeight[C] = A.height + w.verticalPadding);
                var N = w.rowHeight[x] + w.rowHeight[C];
                w.height += N - P, this.shiftToLastRow(w);
              }
            }, T.prototype.tilingPreLayout = function() {
              c.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, T.prototype.tilingPostLayout = function() {
              c.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, T.prototype.reduceTrees = function() {
              for (var w = [], x = !0, C; x; ) {
                var D = this.graphManager.getAllNodes(), A = [];
                x = !1;
                for (var L = 0; L < D.length; L++)
                  C = D[L], C.getEdges().length == 1 && !C.getEdges()[0].isInterGraph && C.getChild() == null && (A.push([C, C.getEdges()[0], C.getOwner()]), x = !0);
                if (x == !0) {
                  for (var R = [], M = 0; M < A.length; M++)
                    A[M][0].getEdges().length == 1 && (R.push(A[M]), A[M][0].getOwner().remove(A[M][0]));
                  w.push(R), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = w;
            }, T.prototype.growTree = function(w) {
              for (var x = w.length, C = w[x - 1], D, A = 0; A < C.length; A++)
                D = C[A], this.findPlaceforPrunedNode(D), D[2].add(D[0]), D[2].add(D[1], D[1].source, D[1].target);
              w.splice(w.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, T.prototype.findPlaceforPrunedNode = function(w) {
              var x, C, D = w[0];
              D == w[1].source ? C = w[1].target : C = w[1].source;
              var A = C.startX, L = C.finishX, R = C.startY, M = C.finishY, P = 0, N = 0, O = 0, k = 0, F = [P, O, N, k];
              if (R > 0)
                for (var _ = A; _ <= L; _++)
                  F[0] += this.grid[_][R - 1].length + this.grid[_][R].length - 1;
              if (L < this.grid.length - 1)
                for (var _ = R; _ <= M; _++)
                  F[1] += this.grid[L + 1][_].length + this.grid[L][_].length - 1;
              if (M < this.grid[0].length - 1)
                for (var _ = A; _ <= L; _++)
                  F[2] += this.grid[_][M + 1].length + this.grid[_][M].length - 1;
              if (A > 0)
                for (var _ = R; _ <= M; _++)
                  F[3] += this.grid[A - 1][_].length + this.grid[A][_].length - 1;
              for (var B = y.MAX_VALUE, G, H, X = 0; X < F.length; X++)
                F[X] < B ? (B = F[X], G = 1, H = X) : F[X] == B && G++;
              if (G == 3 && B == 0)
                F[0] == 0 && F[1] == 0 && F[2] == 0 ? x = 1 : F[0] == 0 && F[1] == 0 && F[3] == 0 ? x = 0 : F[0] == 0 && F[2] == 0 && F[3] == 0 ? x = 3 : F[1] == 0 && F[2] == 0 && F[3] == 0 && (x = 2);
              else if (G == 2 && B == 0) {
                var $ = Math.floor(Math.random() * 2);
                F[0] == 0 && F[1] == 0 ? $ == 0 ? x = 0 : x = 1 : F[0] == 0 && F[2] == 0 ? $ == 0 ? x = 0 : x = 2 : F[0] == 0 && F[3] == 0 ? $ == 0 ? x = 0 : x = 3 : F[1] == 0 && F[2] == 0 ? $ == 0 ? x = 1 : x = 2 : F[1] == 0 && F[3] == 0 ? $ == 0 ? x = 1 : x = 3 : $ == 0 ? x = 2 : x = 3;
              } else if (G == 4 && B == 0) {
                var $ = Math.floor(Math.random() * 4);
                x = $;
              } else
                x = H;
              x == 0 ? D.setCenter(C.getCenterX(), C.getCenterY() - C.getHeight() / 2 - f.DEFAULT_EDGE_LENGTH - D.getHeight() / 2) : x == 1 ? D.setCenter(C.getCenterX() + C.getWidth() / 2 + f.DEFAULT_EDGE_LENGTH + D.getWidth() / 2, C.getCenterY()) : x == 2 ? D.setCenter(C.getCenterX(), C.getCenterY() + C.getHeight() / 2 + f.DEFAULT_EDGE_LENGTH + D.getHeight() / 2) : D.setCenter(C.getCenterX() - C.getWidth() / 2 - f.DEFAULT_EDGE_LENGTH - D.getWidth() / 2, C.getCenterY());
            }, a.exports = T;
          }),
          /* 7 */
          /***/
          (function(a, n, i) {
            var o = {};
            o.layoutBase = i(0), o.CoSEConstants = i(1), o.CoSEEdge = i(2), o.CoSEGraph = i(3), o.CoSEGraphManager = i(4), o.CoSELayout = i(6), o.CoSENode = i(5), a.exports = o;
          })
          /******/
        ])
      );
    });
  })(xn)), xn.exports;
}
var v0 = En.exports, cv;
function c0() {
  return cv || (cv = 1, (function(t, e) {
    (function(a, n) {
      t.exports = n(u0());
    })(v0, function(r) {
      return (
        /******/
        (function(a) {
          var n = {};
          function i(o) {
            if (n[o])
              return n[o].exports;
            var s = n[o] = {
              /******/
              i: o,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return a[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
          }
          return i.m = a, i.c = n, i.i = function(o) {
            return o;
          }, i.d = function(o, s, l) {
            i.o(o, s) || Object.defineProperty(o, s, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: l
              /******/
            });
          }, i.n = function(o) {
            var s = o && o.__esModule ? (
              /******/
              (function() {
                return o.default;
              })
            ) : (
              /******/
              (function() {
                return o;
              })
            );
            return i.d(s, "a", s), s;
          }, i.o = function(o, s) {
            return Object.prototype.hasOwnProperty.call(o, s);
          }, i.p = "", i(i.s = 1);
        })([
          /* 0 */
          /***/
          (function(a, n) {
            a.exports = r;
          }),
          /* 1 */
          /***/
          (function(a, n, i) {
            var o = i(0).layoutBase.LayoutConstants, s = i(0).layoutBase.FDLayoutConstants, l = i(0).CoSEConstants, u = i(0).CoSELayout, v = i(0).CoSENode, c = i(0).layoutBase.PointD, f = i(0).layoutBase.DimensionD, h = {
              // Called on `layoutready`
              ready: function() {
              },
              // Called on `layoutstop`
              stop: function() {
              },
              // 'draft', 'default' or 'proof" 
              // - 'draft' fast cooling rate 
              // - 'default' moderate cooling rate 
              // - "proof" slow cooling rate
              quality: "default",
              // include labels in node dimensions
              nodeDimensionsIncludeLabels: !1,
              // number of ticks per frame; higher is faster but more jerky
              refresh: 30,
              // Whether to fit the network view after when done
              fit: !0,
              // Padding on fit
              padding: 10,
              // Whether to enable incremental mode
              randomize: !0,
              // Node repulsion (non overlapping) multiplier
              nodeRepulsion: 4500,
              // Ideal edge (non nested) length
              idealEdgeLength: 50,
              // Divisor to compute edge forces
              edgeElasticity: 0.45,
              // Nesting factor (multiplier) to compute ideal edge length for nested edges
              nestingFactor: 0.1,
              // Gravity force (constant)
              gravity: 0.25,
              // Maximum number of iterations to perform
              numIter: 2500,
              // For enabling tiling
              tile: !0,
              // Type of layout animation. The option set is {'during', 'end', false}
              animate: "end",
              // Duration for animate:end
              animationDuration: 500,
              // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
              tilingPaddingVertical: 10,
              // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
              tilingPaddingHorizontal: 10,
              // Gravity range (constant) for compounds
              gravityRangeCompound: 1.5,
              // Gravity force (constant) for compounds
              gravityCompound: 1,
              // Gravity range (constant)
              gravityRange: 3.8,
              // Initial cooling factor for incremental layout
              initialEnergyOnIncremental: 0.5
            };
            function d(b, m) {
              var E = {};
              for (var T in b)
                E[T] = b[T];
              for (var T in m)
                E[T] = m[T];
              return E;
            }
            function g(b) {
              this.options = d(h, b), p(this.options);
            }
            var p = function(m) {
              m.nodeRepulsion != null && (l.DEFAULT_REPULSION_STRENGTH = s.DEFAULT_REPULSION_STRENGTH = m.nodeRepulsion), m.idealEdgeLength != null && (l.DEFAULT_EDGE_LENGTH = s.DEFAULT_EDGE_LENGTH = m.idealEdgeLength), m.edgeElasticity != null && (l.DEFAULT_SPRING_STRENGTH = s.DEFAULT_SPRING_STRENGTH = m.edgeElasticity), m.nestingFactor != null && (l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = m.nestingFactor), m.gravity != null && (l.DEFAULT_GRAVITY_STRENGTH = s.DEFAULT_GRAVITY_STRENGTH = m.gravity), m.numIter != null && (l.MAX_ITERATIONS = s.MAX_ITERATIONS = m.numIter), m.gravityRange != null && (l.DEFAULT_GRAVITY_RANGE_FACTOR = s.DEFAULT_GRAVITY_RANGE_FACTOR = m.gravityRange), m.gravityCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = m.gravityCompound), m.gravityRangeCompound != null && (l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = m.gravityRangeCompound), m.initialEnergyOnIncremental != null && (l.DEFAULT_COOLING_FACTOR_INCREMENTAL = s.DEFAULT_COOLING_FACTOR_INCREMENTAL = m.initialEnergyOnIncremental), m.quality == "draft" ? o.QUALITY = 0 : m.quality == "proof" ? o.QUALITY = 2 : o.QUALITY = 1, l.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = m.nodeDimensionsIncludeLabels, l.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = !m.randomize, l.ANIMATE = s.ANIMATE = o.ANIMATE = m.animate, l.TILE = m.tile, l.TILING_PADDING_VERTICAL = typeof m.tilingPaddingVertical == "function" ? m.tilingPaddingVertical.call() : m.tilingPaddingVertical, l.TILING_PADDING_HORIZONTAL = typeof m.tilingPaddingHorizontal == "function" ? m.tilingPaddingHorizontal.call() : m.tilingPaddingHorizontal;
            };
            g.prototype.run = function() {
              var b, m, E = this.options;
              this.idToLNode = {};
              var T = this.layout = new u(), S = this;
              S.stopped = !1, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
              var w = T.newGraphManager();
              this.gm = w;
              var x = this.options.eles.nodes(), C = this.options.eles.edges();
              this.root = w.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(x), T);
              for (var D = 0; D < C.length; D++) {
                var A = C[D], L = this.idToLNode[A.data("source")], R = this.idToLNode[A.data("target")];
                if (L !== R && L.getEdgesBetween(R).length == 0) {
                  var M = w.add(T.newEdge(), L, R);
                  M.id = A.id();
                }
              }
              var P = function(k, F) {
                typeof k == "number" && (k = F);
                var _ = k.data("id"), B = S.idToLNode[_];
                return {
                  x: B.getRect().getCenterX(),
                  y: B.getRect().getCenterY()
                };
              }, N = function O() {
                for (var k = function() {
                  E.fit && E.cy.fit(E.eles, E.padding), b || (b = !0, S.cy.one("layoutready", E.ready), S.cy.trigger({ type: "layoutready", layout: S }));
                }, F = S.options.refresh, _, B = 0; B < F && !_; B++)
                  _ = S.stopped || S.layout.tick();
                if (_) {
                  T.checkLayoutSuccess() && !T.isSubLayout && T.doPostLayout(), T.tilingPostLayout && T.tilingPostLayout(), T.isLayoutFinished = !0, S.options.eles.nodes().positions(P), k(), S.cy.one("layoutstop", S.options.stop), S.cy.trigger({ type: "layoutstop", layout: S }), m && cancelAnimationFrame(m), b = !1;
                  return;
                }
                var G = S.layout.getPositionsData();
                E.eles.nodes().positions(function(H, X) {
                  if (typeof H == "number" && (H = X), !H.isParent()) {
                    for (var $ = H.id(), K = G[$], ee = H; K == null && (K = G[ee.data("parent")] || G["DummyCompound_" + ee.data("parent")], G[$] = K, ee = ee.parent()[0], ee != null); )
                      ;
                    return K != null ? {
                      x: K.x,
                      y: K.y
                    } : {
                      x: H.position("x"),
                      y: H.position("y")
                    };
                  }
                }), k(), m = requestAnimationFrame(O);
              };
              return T.addListener("layoutstarted", function() {
                S.options.animate === "during" && (m = requestAnimationFrame(N));
              }), T.runLayout(), this.options.animate !== "during" && (S.options.eles.nodes().not(":parent").layoutPositions(S, S.options, P), b = !1), this;
            }, g.prototype.getTopMostNodes = function(b) {
              for (var m = {}, E = 0; E < b.length; E++)
                m[b[E].id()] = !0;
              var T = b.filter(function(S, w) {
                typeof S == "number" && (S = w);
                for (var x = S.parent()[0]; x != null; ) {
                  if (m[x.id()])
                    return !1;
                  x = x.parent()[0];
                }
                return !0;
              });
              return T;
            }, g.prototype.processChildrenList = function(b, m, E) {
              for (var T = m.length, S = 0; S < T; S++) {
                var w = m[S], x = w.children(), C, D = w.layoutDimensions({
                  nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
                });
                if (w.outerWidth() != null && w.outerHeight() != null ? C = b.add(new v(E.graphManager, new c(w.position("x") - D.w / 2, w.position("y") - D.h / 2), new f(parseFloat(D.w), parseFloat(D.h)))) : C = b.add(new v(this.graphManager)), C.id = w.data("id"), C.paddingLeft = parseInt(w.css("padding")), C.paddingTop = parseInt(w.css("padding")), C.paddingRight = parseInt(w.css("padding")), C.paddingBottom = parseInt(w.css("padding")), this.options.nodeDimensionsIncludeLabels && w.isParent()) {
                  var A = w.boundingBox({ includeLabels: !0, includeNodes: !1 }).w, L = w.boundingBox({ includeLabels: !0, includeNodes: !1 }).h, R = w.css("text-halign");
                  C.labelWidth = A, C.labelHeight = L, C.labelPos = R;
                }
                if (this.idToLNode[w.data("id")] = C, isNaN(C.rect.x) && (C.rect.x = 0), isNaN(C.rect.y) && (C.rect.y = 0), x != null && x.length > 0) {
                  var M;
                  M = E.getGraphManager().add(E.newGraph(), C), this.processChildrenList(M, x, E);
                }
              }
            }, g.prototype.stop = function() {
              return this.stopped = !0, this;
            };
            var y = function(m) {
              m("layout", "cose-bilkent", g);
            };
            typeof cytoscape < "u" && y(cytoscape), a.exports = y;
          })
          /******/
        ])
      );
    });
  })(En)), En.exports;
}
var f0 = c0();
const h0 = /* @__PURE__ */ Df(f0);
var as = (function() {
  var t = function(E, T, S, w) {
    for (S = S || {}, w = E.length; w--; S[E[w]] = T)
      ;
    return S;
  }, e = [1, 4], r = [1, 13], a = [1, 12], n = [1, 15], i = [1, 16], o = [1, 20], s = [1, 19], l = [6, 7, 8], u = [1, 26], v = [1, 24], c = [1, 25], f = [6, 7, 11], h = [1, 6, 13, 15, 16, 19, 22], d = [1, 33], g = [1, 34], p = [1, 6, 7, 11, 13, 15, 16, 19, 22], y = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(T, S, w, x, C, D, A) {
      var L = D.length - 1;
      switch (C) {
        case 6:
        case 7:
          return x;
        case 8:
          x.getLogger().trace("Stop NL ");
          break;
        case 9:
          x.getLogger().trace("Stop EOF ");
          break;
        case 11:
          x.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          x.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          x.getLogger().info("Node: ", D[L].id), x.addNode(D[L - 1].length, D[L].id, D[L].descr, D[L].type);
          break;
        case 16:
          x.getLogger().trace("Icon: ", D[L]), x.decorateNode({ icon: D[L] });
          break;
        case 17:
        case 21:
          x.decorateNode({ class: D[L] });
          break;
        case 18:
          x.getLogger().trace("SPACELIST");
          break;
        case 19:
          x.getLogger().trace("Node: ", D[L].id), x.addNode(0, D[L].id, D[L].descr, D[L].type);
          break;
        case 20:
          x.decorateNode({ icon: D[L] });
          break;
        case 25:
          x.getLogger().trace("node found ..", D[L - 2]), this.$ = { id: D[L - 1], descr: D[L - 1], type: x.getType(D[L - 2], D[L]) };
          break;
        case 26:
          this.$ = { id: D[L], descr: D[L], type: x.nodeType.DEFAULT };
          break;
        case 27:
          x.getLogger().trace("node found ..", D[L - 3]), this.$ = { id: D[L - 3], descr: D[L - 1], type: x.getType(D[L - 2], D[L]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: e }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: e }, { 6: r, 7: [1, 10], 9: 9, 12: 11, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: o, 22: s }, t(l, [2, 3]), { 1: [2, 2] }, t(l, [2, 4]), t(l, [2, 5]), { 1: [2, 6], 6: r, 12: 21, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: o, 22: s }, { 6: r, 9: 22, 12: 11, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: o, 22: s }, { 6: u, 7: v, 10: 23, 11: c }, t(f, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: o, 22: s }), t(f, [2, 18]), t(f, [2, 19]), t(f, [2, 20]), t(f, [2, 21]), t(f, [2, 23]), t(f, [2, 24]), t(f, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: u, 7: v, 10: 32, 11: c }, { 1: [2, 7], 6: r, 12: 21, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: o, 22: s }, t(h, [2, 14], { 7: d, 11: g }), t(p, [2, 8]), t(p, [2, 9]), t(p, [2, 10]), t(f, [2, 15]), t(f, [2, 16]), t(f, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, t(h, [2, 13], { 7: d, 11: g }), t(p, [2, 11]), t(p, [2, 12]), { 21: [1, 37] }, t(f, [2, 25]), t(f, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: function(T, S) {
      if (S.recoverable)
        this.trace(T);
      else {
        var w = new Error(T);
        throw w.hash = S, w;
      }
    },
    parse: function(T) {
      var S = this, w = [0], x = [], C = [null], D = [], A = this.table, L = "", R = 0, M = 0, P = 2, N = 1, O = D.slice.call(arguments, 1), k = Object.create(this.lexer), F = { yy: {} };
      for (var _ in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, _) && (F.yy[_] = this.yy[_]);
      k.setInput(T, F.yy), F.yy.lexer = k, F.yy.parser = this, typeof k.yylloc > "u" && (k.yylloc = {});
      var B = k.yylloc;
      D.push(B);
      var G = k.options && k.options.ranges;
      typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function H() {
        var re;
        return re = x.pop() || k.lex() || N, typeof re != "number" && (re instanceof Array && (x = re, re = x.pop()), re = S.symbols_[re] || re), re;
      }
      for (var X, $, K, ee, ae = {}, Z, V, q, Y; ; ) {
        if ($ = w[w.length - 1], this.defaultActions[$] ? K = this.defaultActions[$] : ((X === null || typeof X > "u") && (X = H()), K = A[$] && A[$][X]), typeof K > "u" || !K.length || !K[0]) {
          var Q = "";
          Y = [];
          for (Z in A[$])
            this.terminals_[Z] && Z > P && Y.push("'" + this.terminals_[Z] + "'");
          k.showPosition ? Q = "Parse error on line " + (R + 1) + `:
` + k.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[X] || X) + "'" : Q = "Parse error on line " + (R + 1) + ": Unexpected " + (X == N ? "end of input" : "'" + (this.terminals_[X] || X) + "'"), this.parseError(Q, {
            text: k.match,
            token: this.terminals_[X] || X,
            line: k.yylineno,
            loc: B,
            expected: Y
          });
        }
        if (K[0] instanceof Array && K.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + X);
        switch (K[0]) {
          case 1:
            w.push(X), C.push(k.yytext), D.push(k.yylloc), w.push(K[1]), X = null, M = k.yyleng, L = k.yytext, R = k.yylineno, B = k.yylloc;
            break;
          case 2:
            if (V = this.productions_[K[1]][1], ae.$ = C[C.length - V], ae._$ = {
              first_line: D[D.length - (V || 1)].first_line,
              last_line: D[D.length - 1].last_line,
              first_column: D[D.length - (V || 1)].first_column,
              last_column: D[D.length - 1].last_column
            }, G && (ae._$.range = [
              D[D.length - (V || 1)].range[0],
              D[D.length - 1].range[1]
            ]), ee = this.performAction.apply(ae, [
              L,
              M,
              R,
              F.yy,
              K[1],
              C,
              D
            ].concat(O)), typeof ee < "u")
              return ee;
            V && (w = w.slice(0, -1 * V * 2), C = C.slice(0, -1 * V), D = D.slice(0, -1 * V)), w.push(this.productions_[K[1]][0]), C.push(ae.$), D.push(ae._$), q = A[w[w.length - 2]][w[w.length - 1]], w.push(q);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, b = /* @__PURE__ */ (function() {
    var E = {
      EOF: 1,
      parseError: function(S, w) {
        if (this.yy.parser)
          this.yy.parser.parseError(S, w);
        else
          throw new Error(S);
      },
      // resets the lexer, sets new input
      setInput: function(T, S) {
        return this.yy = S || this.yy || {}, this._input = T, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var T = this._input[0];
        this.yytext += T, this.yyleng++, this.offset++, this.match += T, this.matched += T;
        var S = T.match(/(?:\r\n?|\n).*/g);
        return S ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), T;
      },
      // unshifts one char (or a string) into the input
      unput: function(T) {
        var S = T.length, w = T.split(/(?:\r\n?|\n)/g);
        this._input = T + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - S), this.offset -= S;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), w.length - 1 && (this.yylineno -= w.length - 1);
        var C = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: w ? (w.length === x.length ? this.yylloc.first_column : 0) + x[x.length - w.length].length - w[0].length : this.yylloc.first_column - S
        }, this.options.ranges && (this.yylloc.range = [C[0], C[0] + this.yyleng - S]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(T) {
        this.unput(this.match.slice(T));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var T = this.matched.substr(0, this.matched.length - this.match.length);
        return (T.length > 20 ? "..." : "") + T.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var T = this.match;
        return T.length < 20 && (T += this._input.substr(0, 20 - T.length)), (T.substr(0, 20) + (T.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var T = this.pastInput(), S = new Array(T.length + 1).join("-");
        return T + this.upcomingInput() + `
` + S + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(T, S) {
        var w, x, C;
        if (this.options.backtrack_lexer && (C = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (C.yylloc.range = this.yylloc.range.slice(0))), x = T[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + T[0].length
        }, this.yytext += T[0], this.match += T[0], this.matches = T, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(T[0].length), this.matched += T[0], w = this.performAction.call(this, this.yy, this, S, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), w)
          return w;
        if (this._backtrack) {
          for (var D in C)
            this[D] = C[D];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var T, S, w, x;
        this._more || (this.yytext = "", this.match = "");
        for (var C = this._currentRules(), D = 0; D < C.length; D++)
          if (w = this._input.match(this.rules[C[D]]), w && (!S || w[0].length > S[0].length)) {
            if (S = w, x = D, this.options.backtrack_lexer) {
              if (T = this.test_match(w, C[D]), T !== !1)
                return T;
              if (this._backtrack) {
                S = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return S ? (T = this.test_match(S, C[x]), T !== !1 ? T : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var S = this.next();
        return S || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(S) {
        this.conditionStack.push(S);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var S = this.conditionStack.length - 1;
        return S > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(S) {
        return S = this.conditionStack.length - 1 - Math.abs(S || 0), S >= 0 ? this.conditionStack[S] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(S) {
        this.begin(S);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(S, w, x, C) {
        switch (x) {
          case 0:
            return S.getLogger().trace("Found comment", w.yytext), 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            S.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return S.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            S.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return S.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return S.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return S.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return S.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            S.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return S.getLogger().trace("description:", w.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), S.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), S.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), S.getLogger().trace("node end ...", w.yytext), "NODE_DEND";
          case 30:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), S.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), S.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return S.getLogger().trace("Long description:", w.yytext), 20;
          case 36:
            return S.getLogger().trace("Long description:", w.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR2: { rules: [22, 23], inclusive: !1 }, NSTR: { rules: [25, 26], inclusive: !1 }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return E;
  })();
  y.lexer = b;
  function m() {
    this.yy = {};
  }
  return m.prototype = y, y.Parser = m, new m();
})();
as.parser = as;
const d0 = as;
let Bt = [], nf = 0, Is = {};
const g0 = () => {
  Bt = [], nf = 0, Is = {};
}, p0 = function(t) {
  for (let e = Bt.length - 1; e >= 0; e--)
    if (Bt[e].level < t)
      return Bt[e];
  return null;
}, y0 = () => Bt.length > 0 ? Bt[0] : null, m0 = (t, e, r, a) => {
  var n, i;
  kr.info("addNode", t, e, r, a);
  const o = ns();
  let s = ((n = o.mindmap) == null ? void 0 : n.padding) ?? Cn.mindmap.padding;
  switch (a) {
    case et.ROUNDED_RECT:
    case et.RECT:
    case et.HEXAGON:
      s *= 2;
  }
  const l = {
    id: nf++,
    nodeId: Dn(e, o),
    level: t,
    descr: Dn(r, o),
    type: a,
    children: [],
    width: ((i = o.mindmap) == null ? void 0 : i.maxNodeWidth) ?? Cn.mindmap.maxNodeWidth,
    padding: s
  }, u = p0(t);
  if (u)
    u.children.push(l), Bt.push(l);
  else if (Bt.length === 0)
    Bt.push(l);
  else
    throw new Error(
      'There can be only one root. No parent could be found for ("' + l.descr + '")'
    );
}, et = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, b0 = (t, e) => {
  switch (kr.debug("In get type", t, e), t) {
    case "[":
      return et.RECT;
    case "(":
      return e === ")" ? et.ROUNDED_RECT : et.CLOUD;
    case "((":
      return et.CIRCLE;
    case ")":
      return et.CLOUD;
    case "))":
      return et.BANG;
    case "{{":
      return et.HEXAGON;
    default:
      return et.DEFAULT;
  }
}, w0 = (t, e) => {
  Is[t] = e;
}, E0 = (t) => {
  if (!t)
    return;
  const e = ns(), r = Bt[Bt.length - 1];
  t.icon && (r.icon = Dn(t.icon, e)), t.class && (r.class = Dn(t.class, e));
}, x0 = (t) => {
  switch (t) {
    case et.DEFAULT:
      return "no-border";
    case et.RECT:
      return "rect";
    case et.ROUNDED_RECT:
      return "rounded-rect";
    case et.CIRCLE:
      return "circle";
    case et.CLOUD:
      return "cloud";
    case et.BANG:
      return "bang";
    case et.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
}, T0 = () => kr, C0 = (t) => Is[t], D0 = {
  clear: g0,
  addNode: m0,
  getMindmap: y0,
  nodeType: et,
  getType: b0,
  setElementForId: w0,
  decorateNode: E0,
  type2Str: x0,
  getLogger: T0,
  getElementById: C0
}, S0 = D0, A0 = 12, L0 = function(t, e, r, a) {
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 ${r.height - 5} v${-r.height + 10} q0,-5 5,-5 h${r.width - 10} q5,0 5,5 v${r.height - 5} H0 Z`
  ), e.append("line").attr("class", "node-line-" + a).attr("x1", 0).attr("y1", r.height).attr("x2", r.width).attr("y2", r.height);
}, R0 = function(t, e, r) {
  e.append("rect").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("height", r.height).attr("width", r.width);
}, I0 = function(t, e, r) {
  const a = r.width, n = r.height, i = 0.15 * a, o = 0.25 * a, s = 0.35 * a, l = 0.2 * a;
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 0 a${i},${i} 0 0,1 ${a * 0.25},${-1 * a * 0.1}
      a${s},${s} 1 0,1 ${a * 0.4},${-1 * a * 0.1}
      a${o},${o} 1 0,1 ${a * 0.35},${1 * a * 0.2}

      a${i},${i} 1 0,1 ${a * 0.15},${1 * n * 0.35}
      a${l},${l} 1 0,1 ${-1 * a * 0.15},${1 * n * 0.65}

      a${o},${i} 1 0,1 ${-1 * a * 0.25},${a * 0.15}
      a${s},${s} 1 0,1 ${-1 * a * 0.5},0
      a${i},${i} 1 0,1 ${-1 * a * 0.25},${-1 * a * 0.15}

      a${i},${i} 1 0,1 ${-1 * a * 0.1},${-1 * n * 0.35}
      a${l},${l} 1 0,1 ${a * 0.1},${-1 * n * 0.65}

    H0 V0 Z`
  );
}, M0 = function(t, e, r) {
  const a = r.width, n = r.height, i = 0.15 * a;
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 0 a${i},${i} 1 0,0 ${a * 0.25},${-1 * n * 0.1}
      a${i},${i} 1 0,0 ${a * 0.25},0
      a${i},${i} 1 0,0 ${a * 0.25},0
      a${i},${i} 1 0,0 ${a * 0.25},${1 * n * 0.1}

      a${i},${i} 1 0,0 ${a * 0.15},${1 * n * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${1 * n * 0.34}
      a${i},${i} 1 0,0 ${-1 * a * 0.15},${1 * n * 0.33}

      a${i},${i} 1 0,0 ${-1 * a * 0.25},${n * 0.15}
      a${i},${i} 1 0,0 ${-1 * a * 0.25},0
      a${i},${i} 1 0,0 ${-1 * a * 0.25},0
      a${i},${i} 1 0,0 ${-1 * a * 0.25},${-1 * n * 0.15}

      a${i},${i} 1 0,0 ${-1 * a * 0.1},${-1 * n * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${-1 * n * 0.34}
      a${i},${i} 1 0,0 ${a * 0.1},${-1 * n * 0.33}

    H0 V0 Z`
  );
}, P0 = function(t, e, r) {
  e.append("circle").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("r", r.width / 2);
};
function O0(t, e, r, a, n) {
  return t.insert("polygon", ":first-child").attr(
    "points",
    a.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("transform", "translate(" + (n.width - e) / 2 + ", " + r + ")");
}
const k0 = function(t, e, r) {
  const a = r.height, i = a / 4, o = r.width - r.padding + 2 * i, s = [
    { x: i, y: 0 },
    { x: o - i, y: 0 },
    { x: o, y: -a / 2 },
    { x: o - i, y: -a },
    { x: i, y: -a },
    { x: 0, y: -a / 2 }
  ];
  O0(e, o, a, s, r);
}, N0 = function(t, e, r) {
  e.append("rect").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("height", r.height).attr("rx", r.padding).attr("ry", r.padding).attr("width", r.width);
}, B0 = function(t, e, r, a, n) {
  const i = n.htmlLabels, o = a % (A0 - 1), s = e.append("g");
  r.section = o;
  let l = "section-" + o;
  o < 0 && (l += " section-root"), s.attr("class", (r.class ? r.class + " " : "") + "mindmap-node " + l);
  const u = s.append("g"), v = s.append("g"), c = r.descr.replace(/(<br\/*>)/g, `
`);
  Sf(v, c, {
    useHtmlLabels: i,
    width: r.width,
    classes: "mindmap-node-label"
  }), i || v.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  const f = v.node().getBBox(), [h] = Cf(n.fontSize);
  if (r.height = f.height + h * 1.1 * 0.5 + r.padding, r.width = f.width + 2 * r.padding, r.icon)
    if (r.type === t.nodeType.CIRCLE)
      r.height += 50, r.width += 50, s.append("foreignObject").attr("height", "50px").attr("width", r.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + o + " " + r.icon), v.attr(
        "transform",
        "translate(" + r.width / 2 + ", " + (r.height / 2 - 1.5 * r.padding) + ")"
      );
    else {
      r.width += 50;
      const d = r.height;
      r.height = Math.max(d, 60);
      const g = Math.abs(r.height - d);
      s.append("foreignObject").attr("width", "60px").attr("height", r.height).attr("style", "text-align: center;margin-top:" + g / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + o + " " + r.icon), v.attr(
        "transform",
        "translate(" + (25 + r.width / 2) + ", " + (g / 2 + r.padding / 2) + ")"
      );
    }
  else if (i) {
    const d = (r.width - f.width) / 2, g = (r.height - f.height) / 2;
    v.attr("transform", "translate(" + d + ", " + g + ")");
  } else {
    const d = r.width / 2, g = r.padding / 2;
    v.attr("transform", "translate(" + d + ", " + g + ")");
  }
  switch (r.type) {
    case t.nodeType.DEFAULT:
      L0(t, u, r, o);
      break;
    case t.nodeType.ROUNDED_RECT:
      N0(t, u, r);
      break;
    case t.nodeType.RECT:
      R0(t, u, r);
      break;
    case t.nodeType.CIRCLE:
      u.attr("transform", "translate(" + r.width / 2 + ", " + +r.height / 2 + ")"), P0(t, u, r);
      break;
    case t.nodeType.CLOUD:
      I0(t, u, r);
      break;
    case t.nodeType.BANG:
      M0(t, u, r);
      break;
    case t.nodeType.HEXAGON:
      k0(t, u, r);
      break;
  }
  return t.setElementForId(r.id, s), r.height;
}, F0 = function(t, e) {
  const r = t.getElementById(e.id), a = e.x || 0, n = e.y || 0;
  r.attr("transform", "translate(" + a + "," + n + ")");
};
gr.use(h0);
function of(t, e, r, a, n) {
  B0(t, e, r, a, n), r.children && r.children.forEach((i, o) => {
    of(t, e, i, a < 0 ? o : a, n);
  });
}
function _0(t, e) {
  e.edges().map((r, a) => {
    const n = r.data();
    if (r[0]._private.bodyBounds) {
      const i = r[0]._private.rscratch;
      kr.trace("Edge: ", a, n), t.insert("path").attr(
        "d",
        `M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `
      ).attr("class", "edge section-edge-" + n.section + " edge-depth-" + n.depth);
    }
  });
}
function sf(t, e, r, a) {
  e.add({
    group: "nodes",
    data: {
      id: t.id.toString(),
      labelText: t.descr,
      height: t.height,
      width: t.width,
      level: a,
      nodeId: t.id,
      padding: t.padding,
      type: t.type
    },
    position: {
      x: t.x,
      y: t.y
    }
  }), t.children && t.children.forEach((n) => {
    sf(n, e, r, a + 1), e.add({
      group: "edges",
      data: {
        id: `${t.id}_${n.id}`,
        source: t.id,
        target: n.id,
        depth: a,
        section: n.section
      }
    });
  });
}
function G0(t, e) {
  return new Promise((r) => {
    const a = Tf("body").append("div").attr("id", "cy").attr("style", "display:none"), n = gr({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    a.remove(), sf(t, n, e, 0), n.nodes().forEach(function(i) {
      i.layoutDimensions = () => {
        const o = i.data();
        return { w: o.width, h: o.height };
      };
    }), n.layout({
      name: "cose-bilkent",
      // @ts-ignore Types for cose-bilkent are not correct?
      quality: "proof",
      styleEnabled: !1,
      animate: !1
    }).run(), n.ready((i) => {
      kr.info("Ready", i), r(n);
    });
  });
}
function z0(t, e) {
  e.nodes().map((r, a) => {
    const n = r.data();
    n.x = r.position().x, n.y = r.position().y, F0(t, n);
    const i = t.getElementById(n.nodeId);
    kr.info("Id:", a, "Position: (", r.position().x, ", ", r.position().y, ")", n), i.attr(
      "transform",
      `translate(${r.position().x - n.width / 2}, ${r.position().y - n.height / 2})`
    ), i.attr("attr", `apa-${a})`);
  });
}
const V0 = async (t, e, r, a) => {
  var n, i;
  kr.debug(`Rendering mindmap diagram
` + t);
  const o = a.db, s = o.getMindmap();
  if (!s)
    return;
  const l = ns();
  l.htmlLabels = !1;
  const u = mf(e), v = u.append("g");
  v.attr("class", "mindmap-edges");
  const c = u.append("g");
  c.attr("class", "mindmap-nodes"), of(o, c, s, -1, l);
  const f = await G0(s, l);
  _0(v, f), z0(o, f), bf(
    void 0,
    u,
    ((n = l.mindmap) == null ? void 0 : n.padding) ?? Cn.mindmap.padding,
    ((i = l.mindmap) == null ? void 0 : i.useMaxWidth) ?? Cn.mindmap.useMaxWidth
  );
}, U0 = {
  draw: V0
}, q0 = (t) => {
  let e = "";
  for (let r = 0; r < t.THEME_COLOR_LIMIT; r++)
    t["lineColor" + r] = t["lineColor" + r] || t["cScaleInv" + r], wf(t["lineColor" + r]) ? t["lineColor" + r] = Ef(t["lineColor" + r], 20) : t["lineColor" + r] = xf(t["lineColor" + r], 20);
  for (let r = 0; r < t.THEME_COLOR_LIMIT; r++) {
    const a = "" + (17 - 3 * r);
    e += `
    .section-${r - 1} rect, .section-${r - 1} path, .section-${r - 1} circle, .section-${r - 1} polygon, .section-${r - 1} path  {
      fill: ${t["cScale" + r]};
    }
    .section-${r - 1} text {
     fill: ${t["cScaleLabel" + r]};
    }
    .node-icon-${r - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + r]};
    }
    .section-edge-${r - 1}{
      stroke: ${t["cScale" + r]};
    }
    .edge-depth-${r - 1}{
      stroke-width: ${a};
    }
    .section-${r - 1} line {
      stroke: ${t["cScaleInv" + r]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return e;
}, Y0 = (t) => `
  .edge {
    stroke-width: 3;
  }
  ${q0(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, H0 = Y0, Q0 = {
  db: S0,
  renderer: U0,
  parser: d0,
  styles: H0
};
export {
  Q0 as diagram
};
