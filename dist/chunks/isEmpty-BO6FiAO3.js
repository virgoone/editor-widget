import { g as bi } from "./_commonjsHelpers-CqEciG1_.js";
var ae = { exports: {} }, wi = ae.exports, Sn;
function $i() {
  return Sn || (Sn = 1, (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(wi, (function() {
      var n = 1e3, r = 6e4, i = 36e5, s = "millisecond", a = "second", o = "minute", c = "hour", u = "day", h = "week", f = "month", l = "quarter", _ = "year", w = "date", $ = "Invalid Date", O = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, H = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(m) {
        var g = ["th", "st", "nd", "rd"], d = m % 100;
        return "[" + m + (g[(d - 20) % 10] || g[d] || g[0]) + "]";
      } }, S = function(m, g, d) {
        var y = String(m);
        return !y || y.length >= g ? m : "" + Array(g + 1 - y.length).join(d) + m;
      }, F = { s: S, z: function(m) {
        var g = -m.utcOffset(), d = Math.abs(g), y = Math.floor(d / 60), p = d % 60;
        return (g <= 0 ? "+" : "-") + S(y, 2, "0") + ":" + S(p, 2, "0");
      }, m: function m(g, d) {
        if (g.date() < d.date()) return -m(d, g);
        var y = 12 * (d.year() - g.year()) + (d.month() - g.month()), p = g.clone().add(y, f), x = d - p < 0, b = g.clone().add(y + (x ? -1 : 1), f);
        return +(-(y + (d - p) / (x ? p - b : b - p)) || 0);
      }, a: function(m) {
        return m < 0 ? Math.ceil(m) || 0 : Math.floor(m);
      }, p: function(m) {
        return { M: f, y: _, w: h, d: u, D: w, h: c, m: o, s: a, ms: s, Q: l }[m] || String(m || "").toLowerCase().replace(/s$/, "");
      }, u: function(m) {
        return m === void 0;
      } }, B = "en", D = {};
      D[B] = C;
      var q = "$isDayjsObject", T = function(m) {
        return m instanceof te || !(!m || !m[q]);
      }, Qt = function m(g, d, y) {
        var p;
        if (!g) return B;
        if (typeof g == "string") {
          var x = g.toLowerCase();
          D[x] && (p = x), d && (D[x] = d, p = x);
          var b = g.split("-");
          if (!p && b.length > 1) return m(b[0]);
        } else {
          var N = g.name;
          D[N] = g, p = N;
        }
        return !y && p && (B = p), p || !y && B;
      }, P = function(m, g) {
        if (T(m)) return m.clone();
        var d = typeof g == "object" ? g : {};
        return d.date = m, d.args = arguments, new te(d);
      }, k = F;
      k.l = Qt, k.i = T, k.w = function(m, g) {
        return P(m, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
      };
      var te = (function() {
        function m(d) {
          this.$L = Qt(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[q] = !0;
        }
        var g = m.prototype;
        return g.parse = function(d) {
          this.$d = (function(y) {
            var p = y.date, x = y.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (k.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var b = p.match(O);
              if (b) {
                var N = b[2] - 1 || 0, A = (b[7] || "0").substring(0, 3);
                return x ? new Date(Date.UTC(b[1], N, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, A)) : new Date(b[1], N, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, A);
              }
            }
            return new Date(p);
          })(d), this.init();
        }, g.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, g.$utils = function() {
          return k;
        }, g.isValid = function() {
          return this.$d.toString() !== $;
        }, g.isSame = function(d, y) {
          var p = P(d);
          return this.startOf(y) <= p && p <= this.endOf(y);
        }, g.isAfter = function(d, y) {
          return P(d) < this.startOf(y);
        }, g.isBefore = function(d, y) {
          return this.endOf(y) < P(d);
        }, g.$g = function(d, y, p) {
          return k.u(d) ? this[y] : this.set(p, d);
        }, g.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, g.valueOf = function() {
          return this.$d.getTime();
        }, g.startOf = function(d, y) {
          var p = this, x = !!k.u(y) || y, b = k.p(d), N = function(ft, j) {
            var it = k.w(p.$u ? Date.UTC(p.$y, j, ft) : new Date(p.$y, j, ft), p);
            return x ? it : it.endOf(u);
          }, A = function(ft, j) {
            return k.w(p.toDate()[ft].apply(p.toDate("s"), (x ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(j)), p);
          }, R = this.$W, L = this.$M, U = this.$D, bt = "set" + (this.$u ? "UTC" : "");
          switch (b) {
            case _:
              return x ? N(1, 0) : N(31, 11);
            case f:
              return x ? N(1, L) : N(0, L + 1);
            case h:
              var ht = this.$locale().weekStart || 0, Ot = (R < ht ? R + 7 : R) - ht;
              return N(x ? U - Ot : U + (6 - Ot), L);
            case u:
            case w:
              return A(bt + "Hours", 0);
            case c:
              return A(bt + "Minutes", 1);
            case o:
              return A(bt + "Seconds", 2);
            case a:
              return A(bt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, g.endOf = function(d) {
          return this.startOf(d, !1);
        }, g.$set = function(d, y) {
          var p, x = k.p(d), b = "set" + (this.$u ? "UTC" : ""), N = (p = {}, p[u] = b + "Date", p[w] = b + "Date", p[f] = b + "Month", p[_] = b + "FullYear", p[c] = b + "Hours", p[o] = b + "Minutes", p[a] = b + "Seconds", p[s] = b + "Milliseconds", p)[x], A = x === u ? this.$D + (y - this.$W) : y;
          if (x === f || x === _) {
            var R = this.clone().set(w, 1);
            R.$d[N](A), R.init(), this.$d = R.set(w, Math.min(this.$D, R.daysInMonth())).$d;
          } else N && this.$d[N](A);
          return this.init(), this;
        }, g.set = function(d, y) {
          return this.clone().$set(d, y);
        }, g.get = function(d) {
          return this[k.p(d)]();
        }, g.add = function(d, y) {
          var p, x = this;
          d = Number(d);
          var b = k.p(y), N = function(L) {
            var U = P(x);
            return k.w(U.date(U.date() + Math.round(L * d)), x);
          };
          if (b === f) return this.set(f, this.$M + d);
          if (b === _) return this.set(_, this.$y + d);
          if (b === u) return N(1);
          if (b === h) return N(7);
          var A = (p = {}, p[o] = r, p[c] = i, p[a] = n, p)[b] || 1, R = this.$d.getTime() + d * A;
          return k.w(R, this);
        }, g.subtract = function(d, y) {
          return this.add(-1 * d, y);
        }, g.format = function(d) {
          var y = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || $;
          var x = d || "YYYY-MM-DDTHH:mm:ssZ", b = k.z(this), N = this.$H, A = this.$m, R = this.$M, L = p.weekdays, U = p.months, bt = p.meridiem, ht = function(j, it, Pt, ee) {
            return j && (j[it] || j(y, x)) || Pt[it].slice(0, ee);
          }, Ot = function(j) {
            return k.s(N % 12 || 12, j, "0");
          }, ft = bt || function(j, it, Pt) {
            var ee = j < 12 ? "AM" : "PM";
            return Pt ? ee.toLowerCase() : ee;
          };
          return x.replace(H, (function(j, it) {
            return it || (function(Pt) {
              switch (Pt) {
                case "YY":
                  return String(y.$y).slice(-2);
                case "YYYY":
                  return k.s(y.$y, 4, "0");
                case "M":
                  return R + 1;
                case "MM":
                  return k.s(R + 1, 2, "0");
                case "MMM":
                  return ht(p.monthsShort, R, U, 3);
                case "MMMM":
                  return ht(U, R);
                case "D":
                  return y.$D;
                case "DD":
                  return k.s(y.$D, 2, "0");
                case "d":
                  return String(y.$W);
                case "dd":
                  return ht(p.weekdaysMin, y.$W, L, 2);
                case "ddd":
                  return ht(p.weekdaysShort, y.$W, L, 3);
                case "dddd":
                  return L[y.$W];
                case "H":
                  return String(N);
                case "HH":
                  return k.s(N, 2, "0");
                case "h":
                  return Ot(1);
                case "hh":
                  return Ot(2);
                case "a":
                  return ft(N, A, !0);
                case "A":
                  return ft(N, A, !1);
                case "m":
                  return String(A);
                case "mm":
                  return k.s(A, 2, "0");
                case "s":
                  return String(y.$s);
                case "ss":
                  return k.s(y.$s, 2, "0");
                case "SSS":
                  return k.s(y.$ms, 3, "0");
                case "Z":
                  return b;
              }
              return null;
            })(j) || b.replace(":", "");
          }));
        }, g.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, g.diff = function(d, y, p) {
          var x, b = this, N = k.p(y), A = P(d), R = (A.utcOffset() - this.utcOffset()) * r, L = this - A, U = function() {
            return k.m(b, A);
          };
          switch (N) {
            case _:
              x = U() / 12;
              break;
            case f:
              x = U();
              break;
            case l:
              x = U() / 3;
              break;
            case h:
              x = (L - R) / 6048e5;
              break;
            case u:
              x = (L - R) / 864e5;
              break;
            case c:
              x = L / i;
              break;
            case o:
              x = L / r;
              break;
            case a:
              x = L / n;
              break;
            default:
              x = L;
          }
          return p ? x : k.a(x);
        }, g.daysInMonth = function() {
          return this.endOf(f).$D;
        }, g.$locale = function() {
          return D[this.$L];
        }, g.locale = function(d, y) {
          if (!d) return this.$L;
          var p = this.clone(), x = Qt(d, y, !0);
          return x && (p.$L = x), p;
        }, g.clone = function() {
          return k.w(this.$d, this);
        }, g.toDate = function() {
          return new Date(this.valueOf());
        }, g.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, g.toISOString = function() {
          return this.$d.toISOString();
        }, g.toString = function() {
          return this.$d.toUTCString();
        }, m;
      })(), Tn = te.prototype;
      return P.prototype = Tn, [["$ms", s], ["$s", a], ["$m", o], ["$H", c], ["$W", u], ["$M", f], ["$y", _], ["$D", w]].forEach((function(m) {
        Tn[m[1]] = function(g) {
          return this.$g(g, m[0], m[1]);
        };
      })), P.extend = function(m, g) {
        return m.$i || (m(g, te, P), m.$i = !0), P;
      }, P.locale = Qt, P.isDayjs = T, P.unix = function(m) {
        return P(1e3 * m);
      }, P.en = D[B], P.Ls = D, P.p = {}, P;
    }));
  })(ae)), ae.exports;
}
var Ti = $i();
const Jh = /* @__PURE__ */ bi(Ti), oe = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    g: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    b: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    h: (t) => t % 360,
    s: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    l: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    a: (t) => t >= 1 ? 1 : t < 0 ? 0 : t
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t) => {
    const e = t / 255;
    return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t, e, n) => (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t),
  hsl2rgb: ({ h: t, s: e, l: n }, r) => {
    if (!e)
      return n * 2.55;
    t /= 360, e /= 100, n /= 100;
    const i = n < 0.5 ? n * (1 + e) : n + e - n * e, s = 2 * n - i;
    switch (r) {
      case "r":
        return oe.hue2rgb(s, i, t + 1 / 3) * 255;
      case "g":
        return oe.hue2rgb(s, i, t) * 255;
      case "b":
        return oe.hue2rgb(s, i, t - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t, g: e, b: n }, r) => {
    t /= 255, e /= 255, n /= 255;
    const i = Math.max(t, e, n), s = Math.min(t, e, n), a = (i + s) / 2;
    if (r === "l")
      return a * 100;
    if (i === s)
      return 0;
    const o = i - s, c = a > 0.5 ? o / (2 - i - s) : o / (i + s);
    if (r === "s")
      return c * 100;
    switch (i) {
      case t:
        return ((e - n) / o + (e < n ? 6 : 0)) * 60;
      case e:
        return ((n - t) / o + 2) * 60;
      case n:
        return ((t - e) / o + 4) * 60;
      default:
        return -1;
    }
  }
}, Si = {
  /* API */
  clamp: (t, e, n) => e > n ? Math.min(e, Math.max(n, t)) : Math.min(n, Math.max(e, t)),
  round: (t) => Math.round(t * 1e10) / 1e10
}, ki = {
  /* API */
  dec2hex: (t) => {
    const e = Math.round(t).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
}, v = {
  channel: oe,
  lang: Si,
  unit: ki
}, st = {};
for (let t = 0; t <= 255; t++)
  st[t] = v.unit.dec2hex(t);
const I = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Ni {
  constructor() {
    this.type = I.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = I.ALL;
  }
  is(e) {
    return this.type === e;
  }
}
class Mi {
  /* CONSTRUCTOR */
  constructor(e, n) {
    this.color = n, this.changed = !1, this.data = e, this.type = new Ni();
  }
  /* API */
  set(e, n) {
    return this.color = n, this.changed = !1, this.data = e, this.type.type = I.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: n, s: r, l: i } = e;
    n === void 0 && (e.h = v.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = v.channel.rgb2hsl(e, "s")), i === void 0 && (e.l = v.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: n, g: r, b: i } = e;
    n === void 0 && (e.r = v.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = v.channel.hsl2rgb(e, "g")), i === void 0 && (e.b = v.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, n = e.r;
    return !this.type.is(I.HSL) && n !== void 0 ? n : (this._ensureHSL(), v.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, n = e.g;
    return !this.type.is(I.HSL) && n !== void 0 ? n : (this._ensureHSL(), v.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, n = e.b;
    return !this.type.is(I.HSL) && n !== void 0 ? n : (this._ensureHSL(), v.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, n = e.h;
    return !this.type.is(I.RGB) && n !== void 0 ? n : (this._ensureRGB(), v.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, n = e.s;
    return !this.type.is(I.RGB) && n !== void 0 ? n : (this._ensureRGB(), v.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, n = e.l;
    return !this.type.is(I.RGB) && n !== void 0 ? n : (this._ensureRGB(), v.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(I.RGB), this.changed = !0, this.data.r = e;
  }
  set g(e) {
    this.type.set(I.RGB), this.changed = !0, this.data.g = e;
  }
  set b(e) {
    this.type.set(I.RGB), this.changed = !0, this.data.b = e;
  }
  set h(e) {
    this.type.set(I.HSL), this.changed = !0, this.data.h = e;
  }
  set s(e) {
    this.type.set(I.HSL), this.changed = !0, this.data.s = e;
  }
  set l(e) {
    this.type.set(I.HSL), this.changed = !0, this.data.l = e;
  }
  set a(e) {
    this.changed = !0, this.data.a = e;
  }
}
const ke = new Mi({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), wt = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t) => {
    if (t.charCodeAt(0) !== 35)
      return;
    const e = t.match(wt.re);
    if (!e)
      return;
    const n = e[1], r = parseInt(n, 16), i = n.length, s = i % 4 === 0, a = i > 4, o = a ? 1 : 17, c = a ? 8 : 4, u = s ? 0 : -1, h = a ? 255 : 15;
    return ke.set({
      r: (r >> c * (u + 3) & h) * o,
      g: (r >> c * (u + 2) & h) * o,
      b: (r >> c * (u + 1) & h) * o,
      a: s ? (r & h) * o / 255 : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: n, b: r, a: i } = t;
    return i < 1 ? `#${st[Math.round(e)]}${st[Math.round(n)]}${st[Math.round(r)]}${st[Math.round(i * 255)]}` : `#${st[Math.round(e)]}${st[Math.round(n)]}${st[Math.round(r)]}`;
  }
}, _t = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t) => {
    const e = t.match(_t.hueRe);
    if (e) {
      const [, n, r] = e;
      switch (r) {
        case "grad":
          return v.channel.clamp.h(parseFloat(n) * 0.9);
        case "rad":
          return v.channel.clamp.h(parseFloat(n) * 180 / Math.PI);
        case "turn":
          return v.channel.clamp.h(parseFloat(n) * 360);
      }
    }
    return v.channel.clamp.h(parseFloat(t));
  },
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const n = t.match(_t.re);
    if (!n)
      return;
    const [, r, i, s, a, o] = n;
    return ke.set({
      h: _t._hue2deg(r),
      s: v.channel.clamp.s(parseFloat(i)),
      l: v.channel.clamp.l(parseFloat(s)),
      a: a ? v.channel.clamp.a(o ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, t);
  },
  stringify: (t) => {
    const { h: e, s: n, l: r, a: i } = t;
    return i < 1 ? `hsla(${v.lang.round(e)}, ${v.lang.round(n)}%, ${v.lang.round(r)}%, ${i})` : `hsl(${v.lang.round(e)}, ${v.lang.round(n)}%, ${v.lang.round(r)}%)`;
  }
}, jt = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t) => {
    t = t.toLowerCase();
    const e = jt.colors[t];
    if (e)
      return wt.parse(e);
  },
  stringify: (t) => {
    const e = wt.stringify(t);
    for (const n in jt.colors)
      if (jt.colors[n] === e)
        return n;
  }
}, Lt = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const n = t.match(Lt.re);
    if (!n)
      return;
    const [, r, i, s, a, o, c, u, h] = n;
    return ke.set({
      r: v.channel.clamp.r(i ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: v.channel.clamp.g(a ? parseFloat(s) * 2.55 : parseFloat(s)),
      b: v.channel.clamp.b(c ? parseFloat(o) * 2.55 : parseFloat(o)),
      a: u ? v.channel.clamp.a(h ? parseFloat(u) / 100 : parseFloat(u)) : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: n, b: r, a: i } = t;
    return i < 1 ? `rgba(${v.lang.round(e)}, ${v.lang.round(n)}, ${v.lang.round(r)}, ${v.lang.round(i)})` : `rgb(${v.lang.round(e)}, ${v.lang.round(n)}, ${v.lang.round(r)})`;
  }
}, Z = {
  /* VARIABLES */
  format: {
    keyword: jt,
    hex: wt,
    rgb: Lt,
    rgba: Lt,
    hsl: _t,
    hsla: _t
  },
  /* API */
  parse: (t) => {
    if (typeof t != "string")
      return t;
    const e = wt.parse(t) || Lt.parse(t) || _t.parse(t) || jt.parse(t);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t}"`);
  },
  stringify: (t) => !t.changed && t.color ? t.color : t.type.is(I.HSL) || t.data.r === void 0 ? _t.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? Lt.stringify(t) : wt.stringify(t)
}, pr = (t, e) => {
  const n = Z.parse(t);
  for (const r in e)
    n[r] = v.channel.clamp[r](e[r]);
  return Z.stringify(n);
}, Ai = (t, e, n = 0, r = 1) => {
  if (typeof t != "number")
    return pr(t, { a: e });
  const i = ke.set({
    r: v.channel.clamp.r(t),
    g: v.channel.clamp.g(e),
    b: v.channel.clamp.b(n),
    a: v.channel.clamp.a(r)
  });
  return Z.stringify(i);
}, Ci = (t) => {
  const { r: e, g: n, b: r } = Z.parse(t), i = 0.2126 * v.channel.toLinear(e) + 0.7152 * v.channel.toLinear(n) + 0.0722 * v.channel.toLinear(r);
  return v.lang.round(i);
}, Ei = (t) => Ci(t) >= 0.5, Zh = (t) => !Ei(t), gr = (t, e, n) => {
  const r = Z.parse(t), i = r[e], s = v.channel.clamp[e](i + n);
  return i !== s && (r[e] = s), Z.stringify(r);
}, Qh = (t, e) => gr(t, "l", e), tf = (t, e) => gr(t, "l", -e), ef = (t, e) => {
  const n = Z.parse(t), r = {};
  for (const i in e)
    e[i] && (r[i] = n[i] + e[i]);
  return pr(t, r);
}, Oi = (t, e, n = 50) => {
  const { r, g: i, b: s, a } = Z.parse(t), { r: o, g: c, b: u, a: h } = Z.parse(e), f = n / 100, l = f * 2 - 1, _ = a - h, $ = ((l * _ === -1 ? l : (l + _) / (1 + l * _)) + 1) / 2, O = 1 - $, H = r * $ + o * O, C = i * $ + c * O, S = s * $ + u * O, F = a * f + h * (1 - f);
  return Ai(H, C, S, F);
}, nf = (t, e = 100) => {
  const n = Z.parse(t);
  return n.r = 255 - n.r, n.g = 255 - n.g, n.b = 255 - n.b, Oi(n, t, e);
};
var Pi = { value: () => {
} };
function yr() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ce(n);
}
function ce(t) {
  this._ = t;
}
function Ri(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ce.prototype = yr.prototype = {
  constructor: ce,
  on: function(t, e) {
    var n = this._, r = Ri(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Di(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = kn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = kn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ce(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i) r[i].value.apply(e, n);
  }
};
function Di(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function kn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Pi, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ue = "http://www.w3.org/1999/xhtml";
const Nn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ue,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ne(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Nn.hasOwnProperty(e) ? { space: Nn[e], local: t } : t;
}
function Li(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ue && e.documentElement.namespaceURI === Ue ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ii(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function vr(t) {
  var e = Ne(t);
  return (e.local ? Ii : Li)(e);
}
function Fi() {
}
function on(t) {
  return t == null ? Fi : function() {
    return this.querySelector(t);
  };
}
function Hi(t) {
  typeof t != "function" && (t = on(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), c, u, h = 0; h < a; ++h)
      (c = s[h]) && (u = t.call(c, c.__data__, h, s)) && ("__data__" in c && (u.__data__ = c.__data__), o[h] = u);
  return new Y(r, this._parents);
}
function ji(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function zi() {
  return [];
}
function mr(t) {
  return t == null ? zi : function() {
    return this.querySelectorAll(t);
  };
}
function Bi(t) {
  return function() {
    return ji(t.apply(this, arguments));
  };
}
function qi(t) {
  typeof t == "function" ? t = Bi(t) : t = mr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, c, u = 0; u < o; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new Y(r, i);
}
function xr(t) {
  return function() {
    return this.matches(t);
  };
}
function br(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Yi = Array.prototype.find;
function Ui(t) {
  return function() {
    return Yi.call(this.children, t);
  };
}
function Xi() {
  return this.firstElementChild;
}
function Gi(t) {
  return this.select(t == null ? Xi : Ui(typeof t == "function" ? t : br(t)));
}
var Vi = Array.prototype.filter;
function Wi() {
  return Array.from(this.children);
}
function Ki(t) {
  return function() {
    return Vi.call(this.children, t);
  };
}
function Ji(t) {
  return this.selectAll(t == null ? Wi : Ki(typeof t == "function" ? t : br(t)));
}
function Zi(t) {
  typeof t != "function" && (t = xr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], c, u = 0; u < a; ++u)
      (c = s[u]) && t.call(c, c.__data__, u, s) && o.push(c);
  return new Y(r, this._parents);
}
function wr(t) {
  return new Array(t.length);
}
function Qi() {
  return new Y(this._enter || this._groups.map(wr), this._parents);
}
function _e(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
_e.prototype = {
  constructor: _e,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function ts(t) {
  return function() {
    return t;
  };
}
function es(t, e, n, r, i, s) {
  for (var a = 0, o, c = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new _e(t, s[a]);
  for (; a < c; ++a)
    (o = e[a]) && (i[a] = o);
}
function ns(t, e, n, r, i, s, a) {
  var o, c, u = /* @__PURE__ */ new Map(), h = e.length, f = s.length, l = new Array(h), _;
  for (o = 0; o < h; ++o)
    (c = e[o]) && (l[o] = _ = a.call(c, c.__data__, o, e) + "", u.has(_) ? i[o] = c : u.set(_, c));
  for (o = 0; o < f; ++o)
    _ = a.call(t, s[o], o, s) + "", (c = u.get(_)) ? (r[o] = c, c.__data__ = s[o], u.delete(_)) : n[o] = new _e(t, s[o]);
  for (o = 0; o < h; ++o)
    (c = e[o]) && u.get(l[o]) === c && (i[o] = c);
}
function rs(t) {
  return t.__data__;
}
function is(t, e) {
  if (!arguments.length) return Array.from(this, rs);
  var n = e ? ns : es, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ts(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), c = new Array(s), u = 0; u < s; ++u) {
    var h = r[u], f = i[u], l = f.length, _ = ss(t.call(h, h && h.__data__, u, r)), w = _.length, $ = o[u] = new Array(w), O = a[u] = new Array(w), H = c[u] = new Array(l);
    n(h, f, $, O, H, _, e);
    for (var C = 0, S = 0, F, B; C < w; ++C)
      if (F = $[C]) {
        for (C >= S && (S = C + 1); !(B = O[S]) && ++S < w; ) ;
        F._next = B || null;
      }
  }
  return a = new Y(a, r), a._enter = o, a._exit = c, a;
}
function ss(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function as() {
  return new Y(this._exit || this._groups.map(wr), this._parents);
}
function os(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function cs(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), c = 0; c < a; ++c)
    for (var u = n[c], h = r[c], f = u.length, l = o[c] = new Array(f), _, w = 0; w < f; ++w)
      (_ = u[w] || h[w]) && (l[w] = _);
  for (; c < i; ++c)
    o[c] = n[c];
  return new Y(o, this._parents);
}
function us() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function hs(t) {
  t || (t = fs);
  function e(f, l) {
    return f && l ? t(f.__data__, l.__data__) : !f - !l;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, c = i[s] = new Array(o), u, h = 0; h < o; ++h)
      (u = a[h]) && (c[h] = u);
    c.sort(e);
  }
  return new Y(i, this._parents).order();
}
function fs(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ls() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function _s() {
  return Array.from(this);
}
function ds() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ps() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function gs() {
  return !this.node();
}
function ys(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function vs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ms(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function xs(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function bs(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ws(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function $s(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Ts(t, e) {
  var n = Ne(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ms : vs : typeof e == "function" ? n.local ? $s : ws : n.local ? bs : xs)(n, e));
}
function $r(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ss(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ks(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Ns(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Ms(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ss : typeof e == "function" ? Ns : ks)(t, e, n ?? "")) : St(this.node(), t);
}
function St(t, e) {
  return t.style.getPropertyValue(e) || $r(t).getComputedStyle(t, null).getPropertyValue(e);
}
function As(t) {
  return function() {
    delete this[t];
  };
}
function Cs(t, e) {
  return function() {
    this[t] = e;
  };
}
function Es(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Os(t, e) {
  return arguments.length > 1 ? this.each((e == null ? As : typeof e == "function" ? Es : Cs)(t, e)) : this.node()[t];
}
function Tr(t) {
  return t.trim().split(/^|\s+/);
}
function cn(t) {
  return t.classList || new Sr(t);
}
function Sr(t) {
  this._node = t, this._names = Tr(t.getAttribute("class") || "");
}
Sr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function kr(t, e) {
  for (var n = cn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Nr(t, e) {
  for (var n = cn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ps(t) {
  return function() {
    kr(this, t);
  };
}
function Rs(t) {
  return function() {
    Nr(this, t);
  };
}
function Ds(t, e) {
  return function() {
    (e.apply(this, arguments) ? kr : Nr)(this, t);
  };
}
function Ls(t, e) {
  var n = Tr(t + "");
  if (arguments.length < 2) {
    for (var r = cn(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ds : e ? Ps : Rs)(n, e));
}
function Is() {
  this.textContent = "";
}
function Fs(t) {
  return function() {
    this.textContent = t;
  };
}
function Hs(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function js(t) {
  return arguments.length ? this.each(t == null ? Is : (typeof t == "function" ? Hs : Fs)(t)) : this.node().textContent;
}
function zs() {
  this.innerHTML = "";
}
function Bs(t) {
  return function() {
    this.innerHTML = t;
  };
}
function qs(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ys(t) {
  return arguments.length ? this.each(t == null ? zs : (typeof t == "function" ? qs : Bs)(t)) : this.node().innerHTML;
}
function Us() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Xs() {
  return this.each(Us);
}
function Gs() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vs() {
  return this.each(Gs);
}
function Ws(t) {
  var e = typeof t == "function" ? t : vr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ks() {
  return null;
}
function Js(t, e) {
  var n = typeof t == "function" ? t : vr(t), r = e == null ? Ks : typeof e == "function" ? e : on(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Zs() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Qs() {
  return this.each(Zs);
}
function ta() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ea() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function na(t) {
  return this.select(t ? ea : ta);
}
function ra(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ia(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function sa(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function aa(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function oa(t, e, n) {
  return function() {
    var r = this.__on, i, s = ia(e);
    if (r) {
      for (var a = 0, o = r.length; a < o; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), i = { type: t.type, name: t.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function ca(t, e, n) {
  var r = sa(t + ""), i, s = r.length, a;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var c = 0, u = o.length, h; c < u; ++c)
        for (i = 0, h = o[c]; i < s; ++i)
          if ((a = r[i]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (o = e ? oa : aa, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Mr(t, e, n) {
  var r = $r(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ua(t, e) {
  return function() {
    return Mr(this, t, e);
  };
}
function ha(t, e) {
  return function() {
    return Mr(this, t, e.apply(this, arguments));
  };
}
function fa(t, e) {
  return this.each((typeof e == "function" ? ha : ua)(t, e));
}
function* la() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Ar = [null];
function Y(t, e) {
  this._groups = t, this._parents = e;
}
function Kt() {
  return new Y([[document.documentElement]], Ar);
}
function _a() {
  return this;
}
Y.prototype = Kt.prototype = {
  constructor: Y,
  select: Hi,
  selectAll: qi,
  selectChild: Gi,
  selectChildren: Ji,
  filter: Zi,
  data: is,
  enter: Qi,
  exit: as,
  join: os,
  merge: cs,
  selection: _a,
  order: us,
  sort: hs,
  call: ls,
  nodes: _s,
  node: ds,
  size: ps,
  empty: gs,
  each: ys,
  attr: Ts,
  style: Ms,
  property: Os,
  classed: Ls,
  text: js,
  html: Ys,
  raise: Xs,
  lower: Vs,
  append: Ws,
  insert: Js,
  remove: Qs,
  clone: na,
  datum: ra,
  on: ca,
  dispatch: fa,
  [Symbol.iterator]: la
};
function rf(t) {
  return typeof t == "string" ? new Y([[document.querySelector(t)]], [document.documentElement]) : new Y([[t]], Ar);
}
function un(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Cr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Jt() {
}
var qt = 0.7, de = 1 / qt, $t = "\\s*([+-]?\\d+)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", J = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", da = /^#([0-9a-f]{3,8})$/, pa = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), ga = new RegExp(`^rgb\\(${J},${J},${J}\\)$`), ya = new RegExp(`^rgba\\(${$t},${$t},${$t},${Yt}\\)$`), va = new RegExp(`^rgba\\(${J},${J},${J},${Yt}\\)$`), ma = new RegExp(`^hsl\\(${Yt},${J},${J}\\)$`), xa = new RegExp(`^hsla\\(${Yt},${J},${J},${Yt}\\)$`), Mn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
un(Jt, Ut, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: An,
  // Deprecated! Use color.formatHex.
  formatHex: An,
  formatHex8: ba,
  formatHsl: wa,
  formatRgb: Cn,
  toString: Cn
});
function An() {
  return this.rgb().formatHex();
}
function ba() {
  return this.rgb().formatHex8();
}
function wa() {
  return Er(this).formatHsl();
}
function Cn() {
  return this.rgb().formatRgb();
}
function Ut(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = da.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? En(e) : n === 3 ? new z(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ne(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ne(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = pa.exec(t)) ? new z(e[1], e[2], e[3], 1) : (e = ga.exec(t)) ? new z(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ya.exec(t)) ? ne(e[1], e[2], e[3], e[4]) : (e = va.exec(t)) ? ne(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ma.exec(t)) ? Rn(e[1], e[2] / 100, e[3] / 100, 1) : (e = xa.exec(t)) ? Rn(e[1], e[2] / 100, e[3] / 100, e[4]) : Mn.hasOwnProperty(t) ? En(Mn[t]) : t === "transparent" ? new z(NaN, NaN, NaN, 0) : null;
}
function En(t) {
  return new z(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ne(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new z(t, e, n, r);
}
function $a(t) {
  return t instanceof Jt || (t = Ut(t)), t ? (t = t.rgb(), new z(t.r, t.g, t.b, t.opacity)) : new z();
}
function Xe(t, e, n, r) {
  return arguments.length === 1 ? $a(t) : new z(t, e, n, r ?? 1);
}
function z(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
un(z, Xe, Cr(Jt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new z(pt(this.r), pt(this.g), pt(this.b), pe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: On,
  // Deprecated! Use color.formatHex.
  formatHex: On,
  formatHex8: Ta,
  formatRgb: Pn,
  toString: Pn
}));
function On() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}`;
}
function Ta() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}${dt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pn() {
  const t = pe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${pt(this.r)}, ${pt(this.g)}, ${pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function dt(t) {
  return t = pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Rn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new G(t, e, n, r);
}
function Er(t) {
  if (t instanceof G) return new G(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = Ut(t)), !t) return new G();
  if (t instanceof G) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, c = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= c < 0.5 ? s + i : 2 - s - i, a *= 60) : o = c > 0 && c < 1 ? 0 : a, new G(a, o, c, t.opacity);
}
function Sa(t, e, n, r) {
  return arguments.length === 1 ? Er(t) : new G(t, e, n, r ?? 1);
}
function G(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
un(G, Sa, Cr(Jt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new z(
      He(t >= 240 ? t - 240 : t + 120, i, r),
      He(t, i, r),
      He(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new G(Dn(this.h), re(this.s), re(this.l), pe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Dn(this.h)}, ${re(this.s) * 100}%, ${re(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Dn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function re(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function He(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const hn = (t) => () => t;
function Or(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ka(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function sf(t, e) {
  var n = e - t;
  return n ? Or(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : hn(isNaN(t) ? e : t);
}
function Na(t) {
  return (t = +t) == 1 ? Pr : function(e, n) {
    return n - e ? ka(e, n, t) : hn(isNaN(e) ? n : e);
  };
}
function Pr(t, e) {
  var n = e - t;
  return n ? Or(t, n) : hn(isNaN(t) ? e : t);
}
const Ln = (function t(e) {
  var n = Na(e);
  function r(i, s) {
    var a = n((i = Xe(i)).r, (s = Xe(s)).r), o = n(i.g, s.g), c = n(i.b, s.b), u = Pr(i.opacity, s.opacity);
    return function(h) {
      return i.r = a(h), i.g = o(h), i.b = c(h), i.opacity = u(h), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function at(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
var Ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, je = new RegExp(Ge.source, "g");
function Ma(t) {
  return function() {
    return t;
  };
}
function Aa(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ca(t, e) {
  var n = Ge.lastIndex = je.lastIndex = 0, r, i, s, a = -1, o = [], c = [];
  for (t = t + "", e = e + ""; (r = Ge.exec(t)) && (i = je.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, c.push({ i: a, x: at(r, i) })), n = je.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? c[0] ? Aa(c[0].x) : Ma(e) : (e = c.length, function(u) {
    for (var h = 0, f; h < e; ++h) o[(f = c[h]).i] = f.x(u);
    return o.join("");
  });
}
var In = 180 / Math.PI, Ve = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Rr(t, e, n, r, i, s) {
  var a, o, c;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, c /= o), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * In,
    skewX: Math.atan(c) * In,
    scaleX: a,
    scaleY: o
  };
}
var ie;
function Ea(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ve : Rr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Oa(t) {
  return t == null || (ie || (ie = document.createElementNS("http://www.w3.org/2000/svg", "g")), ie.setAttribute("transform", t), !(t = ie.transform.baseVal.consolidate())) ? Ve : (t = t.matrix, Rr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Dr(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, h, f, l, _, w) {
    if (u !== f || h !== l) {
      var $ = _.push("translate(", null, e, null, n);
      w.push({ i: $ - 4, x: at(u, f) }, { i: $ - 2, x: at(h, l) });
    } else (f || l) && _.push("translate(" + f + e + l + n);
  }
  function a(u, h, f, l) {
    u !== h ? (u - h > 180 ? h += 360 : h - u > 180 && (u += 360), l.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: at(u, h) })) : h && f.push(i(f) + "rotate(" + h + r);
  }
  function o(u, h, f, l) {
    u !== h ? l.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: at(u, h) }) : h && f.push(i(f) + "skewX(" + h + r);
  }
  function c(u, h, f, l, _, w) {
    if (u !== f || h !== l) {
      var $ = _.push(i(_) + "scale(", null, ",", null, ")");
      w.push({ i: $ - 4, x: at(u, f) }, { i: $ - 2, x: at(h, l) });
    } else (f !== 1 || l !== 1) && _.push(i(_) + "scale(" + f + "," + l + ")");
  }
  return function(u, h) {
    var f = [], l = [];
    return u = t(u), h = t(h), s(u.translateX, u.translateY, h.translateX, h.translateY, f, l), a(u.rotate, h.rotate, f, l), o(u.skewX, h.skewX, f, l), c(u.scaleX, u.scaleY, h.scaleX, h.scaleY, f, l), u = h = null, function(_) {
      for (var w = -1, $ = l.length, O; ++w < $; ) f[(O = l[w]).i] = O.x(_);
      return f.join("");
    };
  };
}
var Pa = Dr(Ea, "px, ", "px)", "deg)"), Ra = Dr(Oa, ", ", ")", ")"), kt = 0, It = 0, Rt = 0, Lr = 1e3, ge, Ft, ye = 0, gt = 0, Me = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, Ir = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function fn() {
  return gt || (Ir(Da), gt = Xt.now() + Me);
}
function Da() {
  gt = 0;
}
function ve() {
  this._call = this._time = this._next = null;
}
ve.prototype = Fr.prototype = {
  constructor: ve,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? fn() : +n) + (e == null ? 0 : +e), !this._next && Ft !== this && (Ft ? Ft._next = this : ge = this, Ft = this), this._call = t, this._time = n, We();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, We());
  }
};
function Fr(t, e, n) {
  var r = new ve();
  return r.restart(t, e, n), r;
}
function La() {
  fn(), ++kt;
  for (var t = ge, e; t; )
    (e = gt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --kt;
}
function Fn() {
  gt = (ye = Xt.now()) + Me, kt = It = 0;
  try {
    La();
  } finally {
    kt = 0, Fa(), gt = 0;
  }
}
function Ia() {
  var t = Xt.now(), e = t - ye;
  e > Lr && (Me -= e, ye = t);
}
function Fa() {
  for (var t, e = ge, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ge = n);
  Ft = t, We(r);
}
function We(t) {
  if (!kt) {
    It && (It = clearTimeout(It));
    var e = t - gt;
    e > 24 ? (t < 1 / 0 && (It = setTimeout(Fn, t - Xt.now() - Me)), Rt && (Rt = clearInterval(Rt))) : (Rt || (ye = Xt.now(), Rt = setInterval(Ia, Lr)), kt = 1, Ir(Fn));
  }
}
function Hn(t, e, n) {
  var r = new ve();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Ha = yr("start", "end", "cancel", "interrupt"), ja = [], Hr = 0, jn = 1, Ke = 2, ue = 3, zn = 4, Je = 5, he = 6;
function Ae(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  za(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ha,
    tween: ja,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Hr
  });
}
function ln(t, e) {
  var n = W(t, e);
  if (n.state > Hr) throw new Error("too late; already scheduled");
  return n;
}
function Q(t, e) {
  var n = W(t, e);
  if (n.state > ue) throw new Error("too late; already running");
  return n;
}
function W(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function za(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Fr(s, 0, n.time);
  function s(u) {
    n.state = jn, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var h, f, l, _;
    if (n.state !== jn) return c();
    for (h in r)
      if (_ = r[h], _.name === n.name) {
        if (_.state === ue) return Hn(a);
        _.state === zn ? (_.state = he, _.timer.stop(), _.on.call("interrupt", t, t.__data__, _.index, _.group), delete r[h]) : +h < e && (_.state = he, _.timer.stop(), _.on.call("cancel", t, t.__data__, _.index, _.group), delete r[h]);
      }
    if (Hn(function() {
      n.state === ue && (n.state = zn, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ke, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ke) {
      for (n.state = ue, i = new Array(l = n.tween.length), h = 0, f = -1; h < l; ++h)
        (_ = n.tween[h].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = _);
      i.length = f + 1;
    }
  }
  function o(u) {
    for (var h = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Je, 1), f = -1, l = i.length; ++f < l; )
      i[f].call(t, h);
    n.state === Je && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = he, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Ba(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Ke && r.state < Je, r.state = he, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function qa(t) {
  return this.each(function() {
    Ba(this, t);
  });
}
function Ya(t, e) {
  var n, r;
  return function() {
    var i = Q(this, t), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var a = 0, o = r.length; a < o; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ua(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Q(this, t), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var o = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = o;
          break;
        }
      c === u && i.push(o);
    }
    s.tween = i;
  };
}
function Xa(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = W(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ya : Ua)(n, t, e));
}
function _n(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Q(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return W(i, r).value[e];
  };
}
function jr(t, e) {
  var n;
  return (typeof e == "number" ? at : e instanceof Ut ? Ln : (n = Ut(e)) ? (e = n, Ln) : Ca)(t, e);
}
function Ga(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Va(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wa(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Ka(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Ja(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), c;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = o + "", a === c ? null : a === r && c === i ? s : (i = c, s = e(r = a, o)));
  };
}
function Za(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), c;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = o + "", a === c ? null : a === r && c === i ? s : (i = c, s = e(r = a, o)));
  };
}
function Qa(t, e) {
  var n = Ne(t), r = n === "transform" ? Ra : jr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Za : Ja)(n, r, _n(this, "attr." + t, e)) : e == null ? (n.local ? Va : Ga)(n) : (n.local ? Ka : Wa)(n, r, e));
}
function to(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function eo(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function no(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && eo(t, s)), n;
  }
  return i._value = e, i;
}
function ro(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && to(t, s)), n;
  }
  return i._value = e, i;
}
function io(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ne(t);
  return this.tween(n, (r.local ? no : ro)(r, e));
}
function so(t, e) {
  return function() {
    ln(this, t).delay = +e.apply(this, arguments);
  };
}
function ao(t, e) {
  return e = +e, function() {
    ln(this, t).delay = e;
  };
}
function oo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? so : ao)(e, t)) : W(this.node(), e).delay;
}
function co(t, e) {
  return function() {
    Q(this, t).duration = +e.apply(this, arguments);
  };
}
function uo(t, e) {
  return e = +e, function() {
    Q(this, t).duration = e;
  };
}
function ho(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? co : uo)(e, t)) : W(this.node(), e).duration;
}
function fo(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Q(this, t).ease = e;
  };
}
function lo(t) {
  var e = this._id;
  return arguments.length ? this.each(fo(e, t)) : W(this.node(), e).ease;
}
function _o(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Q(this, t).ease = n;
  };
}
function po(t) {
  if (typeof t != "function") throw new Error();
  return this.each(_o(this._id, t));
}
function go(t) {
  typeof t != "function" && (t = xr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], c, u = 0; u < a; ++u)
      (c = s[u]) && t.call(c, c.__data__, u, s) && o.push(c);
  return new nt(r, this._parents, this._name, this._id);
}
function yo(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var c = e[o], u = n[o], h = c.length, f = a[o] = new Array(h), l, _ = 0; _ < h; ++_)
      (l = c[_] || u[_]) && (f[_] = l);
  for (; o < r; ++o)
    a[o] = e[o];
  return new nt(a, this._parents, this._name, this._id);
}
function vo(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function mo(t, e, n) {
  var r, i, s = vo(e) ? ln : Q;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function xo(t, e) {
  var n = this._id;
  return arguments.length < 2 ? W(this.node(), n).on.on(t) : this.each(mo(n, t, e));
}
function bo(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function wo() {
  return this.on("end.remove", bo(this._id));
}
function $o(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = on(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], c = o.length, u = s[a] = new Array(c), h, f, l = 0; l < c; ++l)
      (h = o[l]) && (f = t.call(h, h.__data__, l, o)) && ("__data__" in h && (f.__data__ = h.__data__), u[l] = f, Ae(u[l], e, n, l, u, W(h, n)));
  return new nt(s, this._parents, e, n);
}
function To(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = mr(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var c = r[o], u = c.length, h, f = 0; f < u; ++f)
      if (h = c[f]) {
        for (var l = t.call(h, h.__data__, f, c), _, w = W(h, n), $ = 0, O = l.length; $ < O; ++$)
          (_ = l[$]) && Ae(_, e, n, $, l, w);
        s.push(l), a.push(h);
      }
  return new nt(s, a, e, n);
}
var So = Kt.prototype.constructor;
function ko() {
  return new So(this._groups, this._parents);
}
function No(t, e) {
  var n, r, i;
  return function() {
    var s = St(this, t), a = (this.style.removeProperty(t), St(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function zr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mo(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = St(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Ao(t, e, n) {
  var r, i, s;
  return function() {
    var a = St(this, t), o = n(this), c = o + "";
    return o == null && (c = o = (this.style.removeProperty(t), St(this, t))), a === c ? null : a === r && c === i ? s : (i = c, s = e(r = a, o));
  };
}
function Co(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var c = Q(this, t), u = c.on, h = c.value[s] == null ? o || (o = zr(e)) : void 0;
    (u !== n || i !== h) && (r = (n = u).copy()).on(a, i = h), c.on = r;
  };
}
function Eo(t, e, n) {
  var r = (t += "") == "transform" ? Pa : jr;
  return e == null ? this.styleTween(t, No(t, r)).on("end.style." + t, zr(t)) : typeof e == "function" ? this.styleTween(t, Ao(t, r, _n(this, "style." + t, e))).each(Co(this._id, t)) : this.styleTween(t, Mo(t, r, e), n).on("end.style." + t, null);
}
function Oo(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Po(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Oo(t, a, n)), r;
  }
  return s._value = e, s;
}
function Ro(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Po(t, e, n ?? ""));
}
function Do(t) {
  return function() {
    this.textContent = t;
  };
}
function Lo(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Io(t) {
  return this.tween("text", typeof t == "function" ? Lo(_n(this, "text", t)) : Do(t == null ? "" : t + ""));
}
function Fo(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ho(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Fo(i)), e;
  }
  return r._value = t, r;
}
function jo(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ho(t));
}
function zo() {
  for (var t = this._name, e = this._id, n = Br(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, c, u = 0; u < o; ++u)
      if (c = a[u]) {
        var h = W(c, e);
        Ae(c, t, n, u, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new nt(r, this._parents, t, n);
}
function Bo() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, c = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Q(this, r), h = u.on;
      h !== t && (e = (t = h).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(c)), u.on = e;
    }), i === 0 && s();
  });
}
var qo = 0;
function nt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Br() {
  return ++qo;
}
var et = Kt.prototype;
nt.prototype = {
  constructor: nt,
  select: $o,
  selectAll: To,
  selectChild: et.selectChild,
  selectChildren: et.selectChildren,
  filter: go,
  merge: yo,
  selection: ko,
  transition: zo,
  call: et.call,
  nodes: et.nodes,
  node: et.node,
  size: et.size,
  empty: et.empty,
  each: et.each,
  on: xo,
  attr: Qa,
  attrTween: io,
  style: Eo,
  styleTween: Ro,
  text: Io,
  textTween: jo,
  remove: wo,
  tween: Xa,
  delay: oo,
  duration: ho,
  ease: lo,
  easeVarying: po,
  end: Bo,
  [Symbol.iterator]: et[Symbol.iterator]
};
function Yo(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Uo = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Yo
};
function Xo(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Go(t) {
  var e, n;
  t instanceof nt ? (e = t._id, t = t._name) : (e = Br(), (n = Uo).time = fn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, c, u = 0; u < o; ++u)
      (c = a[u]) && Ae(c, t, e, u, a, n || Xo(c, e));
  return new nt(r, this._parents, t, e);
}
Kt.prototype.interrupt = qa;
Kt.prototype.transition = Go;
const af = Math.abs, of = Math.atan2, cf = Math.cos, uf = Math.max, hf = Math.min, ff = Math.sin, lf = Math.sqrt, Bn = 1e-12, dn = Math.PI, qn = dn / 2, _f = 2 * dn;
function df(t) {
  return t > 1 ? 0 : t < -1 ? dn : Math.acos(t);
}
function pf(t) {
  return t >= 1 ? qn : t <= -1 ? -qn : Math.asin(t);
}
function qr(t) {
  this._context = t;
}
qr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function gf(t) {
  return new qr(t);
}
class Yr {
  constructor(e, n) {
    this._context = e, this._x = n;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, n) {
    switch (e = +e, n = +n, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, n, e, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, e, this._y0, e, n);
        break;
      }
    }
    this._x0 = e, this._y0 = n;
  }
}
function yf(t) {
  return new Yr(t, !0);
}
function vf(t) {
  return new Yr(t, !1);
}
function ct() {
}
function me(t, e, n) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + n) / 6
  );
}
function Ce(t) {
  this._context = t;
}
Ce.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        me(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        me(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function mf(t) {
  return new Ce(t);
}
function Ur(t) {
  this._context = t;
}
Ur.prototype = {
  areaStart: ct,
  areaEnd: ct,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        me(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function xf(t) {
  return new Ur(t);
}
function Xr(t) {
  this._context = t;
}
Xr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        me(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function bf(t) {
  return new Xr(t);
}
function Gr(t, e) {
  this._basis = new Ce(t), this._beta = e;
}
Gr.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t = this._x, e = this._y, n = t.length - 1;
    if (n > 0)
      for (var r = t[0], i = e[0], s = t[n] - r, a = e[n] - i, o = -1, c; ++o <= n; )
        c = o / n, this._basis.point(
          this._beta * t[o] + (1 - this._beta) * (r + c * s),
          this._beta * e[o] + (1 - this._beta) * (i + c * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
const wf = (function t(e) {
  function n(r) {
    return e === 1 ? new Ce(r) : new Gr(r, e);
  }
  return n.beta = function(r) {
    return t(+r);
  }, n;
})(0.85);
function xe(t, e, n) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - e),
    t._y2 + t._k * (t._y1 - n),
    t._x2,
    t._y2
  );
}
function pn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
pn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        xe(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2, this._x1 = t, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        xe(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const $f = (function t(e) {
  function n(r) {
    return new pn(r, e);
  }
  return n.tension = function(r) {
    return t(+r);
  }, n;
})(0);
function gn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
gn.prototype = {
  areaStart: ct,
  areaEnd: ct,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = e;
        break;
      default:
        xe(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Tf = (function t(e) {
  function n(r) {
    return new gn(r, e);
  }
  return n.tension = function(r) {
    return t(+r);
  }, n;
})(0);
function yn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
yn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        xe(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Sf = (function t(e) {
  function n(r) {
    return new yn(r, e);
  }
  return n.tension = function(r) {
    return t(+r);
  }, n;
})(0);
function vn(t, e, n) {
  var r = t._x1, i = t._y1, s = t._x2, a = t._y2;
  if (t._l01_a > Bn) {
    var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
    r = (r * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
  }
  if (t._l23_a > Bn) {
    var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, h = 3 * t._l23_a * (t._l23_a + t._l12_a);
    s = (s * u + t._x1 * t._l23_2a - e * t._l12_2a) / h, a = (a * u + t._y1 * t._l23_2a - n * t._l12_2a) / h;
  }
  t._context.bezierCurveTo(r, i, s, a, t._x2, t._y2);
}
function Vr(t, e) {
  this._context = t, this._alpha = e;
}
Vr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var n = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        vn(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const kf = (function t(e) {
  function n(r) {
    return e ? new Vr(r, e) : new pn(r, 0);
  }
  return n.alpha = function(r) {
    return t(+r);
  }, n;
})(0.5);
function Wr(t, e) {
  this._context = t, this._alpha = e;
}
Wr.prototype = {
  areaStart: ct,
  areaEnd: ct,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var n = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = e;
        break;
      default:
        vn(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Nf = (function t(e) {
  function n(r) {
    return e ? new Wr(r, e) : new gn(r, 0);
  }
  return n.alpha = function(r) {
    return t(+r);
  }, n;
})(0.5);
function Kr(t, e) {
  this._context = t, this._alpha = e;
}
Kr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    if (t = +t, e = +e, this._point) {
      var n = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        vn(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Mf = (function t(e) {
  function n(r) {
    return e ? new Kr(r, e) : new yn(r, 0);
  }
  return n.alpha = function(r) {
    return t(+r);
  }, n;
})(0.5);
function Jr(t) {
  this._context = t;
}
Jr.prototype = {
  areaStart: ct,
  areaEnd: ct,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t, e) {
    t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
  }
};
function Af(t) {
  return new Jr(t);
}
function Yn(t) {
  return t < 0 ? -1 : 1;
}
function Un(t, e, n) {
  var r = t._x1 - t._x0, i = e - t._x1, s = (t._y1 - t._y0) / (r || i < 0 && -0), a = (n - t._y1) / (i || r < 0 && -0), o = (s * i + a * r) / (r + i);
  return (Yn(s) + Yn(a)) * Math.min(Math.abs(s), Math.abs(a), 0.5 * Math.abs(o)) || 0;
}
function Xn(t, e) {
  var n = t._x1 - t._x0;
  return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
}
function ze(t, e, n) {
  var r = t._x0, i = t._y0, s = t._x1, a = t._y1, o = (s - r) / 3;
  t._context.bezierCurveTo(r + o, i + o * e, s - o, a - o * n, s, a);
}
function be(t) {
  this._context = t;
}
be.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ze(this, this._t0, Xn(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    var n = NaN;
    if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ze(this, Xn(this, n = Un(this, t, e)), n);
          break;
        default:
          ze(this, this._t0, n = Un(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
    }
  }
};
function Zr(t) {
  this._context = new Qr(t);
}
(Zr.prototype = Object.create(be.prototype)).point = function(t, e) {
  be.prototype.point.call(this, e, t);
};
function Qr(t) {
  this._context = t;
}
Qr.prototype = {
  moveTo: function(t, e) {
    this._context.moveTo(e, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, e) {
    this._context.lineTo(e, t);
  },
  bezierCurveTo: function(t, e, n, r, i, s) {
    this._context.bezierCurveTo(e, t, r, n, s, i);
  }
};
function Cf(t) {
  return new be(t);
}
function Ef(t) {
  return new Zr(t);
}
function ti(t) {
  this._context = t;
}
ti.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t = this._x, e = this._y, n = t.length;
    if (n)
      if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), n === 2)
        this._context.lineTo(t[1], e[1]);
      else
        for (var r = Gn(t), i = Gn(e), s = 0, a = 1; a < n; ++s, ++a)
          this._context.bezierCurveTo(r[0][s], i[0][s], r[1][s], i[1][s], t[a], e[a]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function Gn(t) {
  var e, n = t.length - 1, r, i = new Array(n), s = new Array(n), a = new Array(n);
  for (i[0] = 0, s[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) i[e] = 1, s[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
  for (i[n - 1] = 2, s[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = i[e] / s[e - 1], s[e] -= r, a[e] -= r * a[e - 1];
  for (i[n - 1] = a[n - 1] / s[n - 1], e = n - 2; e >= 0; --e) i[e] = (a[e] - i[e + 1]) / s[e];
  for (s[n - 1] = (t[n] + i[n - 1]) / 2, e = 0; e < n - 1; ++e) s[e] = 2 * t[e + 1] - i[e + 1];
  return [i, s];
}
function Of(t) {
  return new ti(t);
}
function Ee(t, e) {
  this._context = t, this._t = e;
}
Ee.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t, e);
        else {
          var n = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function Pf(t) {
  return new Ee(t, 0.5);
}
function Rf(t) {
  return new Ee(t, 0);
}
function Df(t) {
  return new Ee(t, 1);
}
function Ht(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Ht.prototype = {
  constructor: Ht,
  scale: function(t) {
    return t === 1 ? this : new Ht(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ht(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ht.prototype;
var ei = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Vo = typeof self == "object" && self && self.Object === Object && self, tt = ei || Vo || Function("return this")(), we = tt.Symbol, ni = Object.prototype, Wo = ni.hasOwnProperty, Ko = ni.toString, Dt = we ? we.toStringTag : void 0;
function Jo(t) {
  var e = Wo.call(t, Dt), n = t[Dt];
  try {
    t[Dt] = void 0;
    var r = !0;
  } catch {
  }
  var i = Ko.call(t);
  return r && (e ? t[Dt] = n : delete t[Dt]), i;
}
var Zo = Object.prototype, Qo = Zo.toString;
function tc(t) {
  return Qo.call(t);
}
var ec = "[object Null]", nc = "[object Undefined]", Vn = we ? we.toStringTag : void 0;
function At(t) {
  return t == null ? t === void 0 ? nc : ec : Vn && Vn in Object(t) ? Jo(t) : tc(t);
}
function vt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var rc = "[object AsyncFunction]", ic = "[object Function]", sc = "[object GeneratorFunction]", ac = "[object Proxy]";
function mn(t) {
  if (!vt(t))
    return !1;
  var e = At(t);
  return e == ic || e == sc || e == rc || e == ac;
}
var Be = tt["__core-js_shared__"], Wn = (function() {
  var t = /[^.]+$/.exec(Be && Be.keys && Be.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function oc(t) {
  return !!Wn && Wn in t;
}
var cc = Function.prototype, uc = cc.toString;
function mt(t) {
  if (t != null) {
    try {
      return uc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var hc = /[\\^$.*+?()[\]{}|]/g, fc = /^\[object .+?Constructor\]$/, lc = Function.prototype, _c = Object.prototype, dc = lc.toString, pc = _c.hasOwnProperty, gc = RegExp(
  "^" + dc.call(pc).replace(hc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yc(t) {
  if (!vt(t) || oc(t))
    return !1;
  var e = mn(t) ? gc : fc;
  return e.test(mt(t));
}
function vc(t, e) {
  return t?.[e];
}
function xt(t, e) {
  var n = vc(t, e);
  return yc(n) ? n : void 0;
}
var Gt = xt(Object, "create");
function mc() {
  this.__data__ = Gt ? Gt(null) : {}, this.size = 0;
}
function xc(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var bc = "__lodash_hash_undefined__", wc = Object.prototype, $c = wc.hasOwnProperty;
function Tc(t) {
  var e = this.__data__;
  if (Gt) {
    var n = e[t];
    return n === bc ? void 0 : n;
  }
  return $c.call(e, t) ? e[t] : void 0;
}
var Sc = Object.prototype, kc = Sc.hasOwnProperty;
function Nc(t) {
  var e = this.__data__;
  return Gt ? e[t] !== void 0 : kc.call(e, t);
}
var Mc = "__lodash_hash_undefined__";
function Ac(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Gt && e === void 0 ? Mc : e, this;
}
function yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = mc;
yt.prototype.delete = xc;
yt.prototype.get = Tc;
yt.prototype.has = Nc;
yt.prototype.set = Ac;
function Cc() {
  this.__data__ = [], this.size = 0;
}
function Oe(t, e) {
  return t === e || t !== t && e !== e;
}
function Pe(t, e) {
  for (var n = t.length; n--; )
    if (Oe(t[n][0], e))
      return n;
  return -1;
}
var Ec = Array.prototype, Oc = Ec.splice;
function Pc(t) {
  var e = this.__data__, n = Pe(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Oc.call(e, n, 1), --this.size, !0;
}
function Rc(t) {
  var e = this.__data__, n = Pe(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Dc(t) {
  return Pe(this.__data__, t) > -1;
}
function Lc(t, e) {
  var n = this.__data__, r = Pe(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function rt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Cc;
rt.prototype.delete = Pc;
rt.prototype.get = Rc;
rt.prototype.has = Dc;
rt.prototype.set = Lc;
var Vt = xt(tt, "Map");
function Ic() {
  this.size = 0, this.__data__ = {
    hash: new yt(),
    map: new (Vt || rt)(),
    string: new yt()
  };
}
function Fc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Re(t, e) {
  var n = t.__data__;
  return Fc(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Hc(t) {
  var e = Re(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function jc(t) {
  return Re(this, t).get(t);
}
function zc(t) {
  return Re(this, t).has(t);
}
function Bc(t, e) {
  var n = Re(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function ut(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ut.prototype.clear = Ic;
ut.prototype.delete = Hc;
ut.prototype.get = jc;
ut.prototype.has = zc;
ut.prototype.set = Bc;
var qc = "Expected a function";
function ri(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(qc);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = t.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (ri.Cache || ut)(), n;
}
ri.Cache = ut;
function Yc() {
  this.__data__ = new rt(), this.size = 0;
}
function Uc(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Xc(t) {
  return this.__data__.get(t);
}
function Gc(t) {
  return this.__data__.has(t);
}
var Vc = 200;
function Wc(t, e) {
  var n = this.__data__;
  if (n instanceof rt) {
    var r = n.__data__;
    if (!Vt || r.length < Vc - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new ut(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Ct(t) {
  var e = this.__data__ = new rt(t);
  this.size = e.size;
}
Ct.prototype.clear = Yc;
Ct.prototype.delete = Uc;
Ct.prototype.get = Xc;
Ct.prototype.has = Gc;
Ct.prototype.set = Wc;
var $e = (function() {
  try {
    var t = xt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})();
function xn(t, e, n) {
  e == "__proto__" && $e ? $e(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Ze(t, e, n) {
  (n !== void 0 && !Oe(t[e], n) || n === void 0 && !(e in t)) && xn(t, e, n);
}
function Kc(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
      var c = a[++i];
      if (n(s[c], c, s) === !1)
        break;
    }
    return e;
  };
}
var Jc = Kc(), ii = typeof exports == "object" && exports && !exports.nodeType && exports, Kn = ii && typeof module == "object" && module && !module.nodeType && module, Zc = Kn && Kn.exports === ii, Jn = Zc ? tt.Buffer : void 0, Zn = Jn ? Jn.allocUnsafe : void 0;
function Qc(t, e) {
  if (e)
    return t.slice();
  var n = t.length, r = Zn ? Zn(n) : new t.constructor(n);
  return t.copy(r), r;
}
var Qn = tt.Uint8Array;
function tu(t) {
  var e = new t.constructor(t.byteLength);
  return new Qn(e).set(new Qn(t)), e;
}
function eu(t, e) {
  var n = e ? tu(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
function nu(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var tr = Object.create, ru = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!vt(e))
      return {};
    if (tr)
      return tr(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
})();
function si(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var ai = si(Object.getPrototypeOf, Object), iu = Object.prototype;
function De(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || iu;
  return t === n;
}
function su(t) {
  return typeof t.constructor == "function" && !De(t) ? ru(ai(t)) : {};
}
function Zt(t) {
  return t != null && typeof t == "object";
}
var au = "[object Arguments]";
function er(t) {
  return Zt(t) && At(t) == au;
}
var oi = Object.prototype, ou = oi.hasOwnProperty, cu = oi.propertyIsEnumerable, Te = er(/* @__PURE__ */ (function() {
  return arguments;
})()) ? er : function(t) {
  return Zt(t) && ou.call(t, "callee") && !cu.call(t, "callee");
}, Se = Array.isArray, uu = 9007199254740991;
function ci(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= uu;
}
function Le(t) {
  return t != null && ci(t.length) && !mn(t);
}
function hu(t) {
  return Zt(t) && Le(t);
}
function fu() {
  return !1;
}
var ui = typeof exports == "object" && exports && !exports.nodeType && exports, nr = ui && typeof module == "object" && module && !module.nodeType && module, lu = nr && nr.exports === ui, rr = lu ? tt.Buffer : void 0, _u = rr ? rr.isBuffer : void 0, bn = _u || fu, du = "[object Object]", pu = Function.prototype, gu = Object.prototype, hi = pu.toString, yu = gu.hasOwnProperty, vu = hi.call(Object);
function mu(t) {
  if (!Zt(t) || At(t) != du)
    return !1;
  var e = ai(t);
  if (e === null)
    return !0;
  var n = yu.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && hi.call(n) == vu;
}
var xu = "[object Arguments]", bu = "[object Array]", wu = "[object Boolean]", $u = "[object Date]", Tu = "[object Error]", Su = "[object Function]", ku = "[object Map]", Nu = "[object Number]", Mu = "[object Object]", Au = "[object RegExp]", Cu = "[object Set]", Eu = "[object String]", Ou = "[object WeakMap]", Pu = "[object ArrayBuffer]", Ru = "[object DataView]", Du = "[object Float32Array]", Lu = "[object Float64Array]", Iu = "[object Int8Array]", Fu = "[object Int16Array]", Hu = "[object Int32Array]", ju = "[object Uint8Array]", zu = "[object Uint8ClampedArray]", Bu = "[object Uint16Array]", qu = "[object Uint32Array]", M = {};
M[Du] = M[Lu] = M[Iu] = M[Fu] = M[Hu] = M[ju] = M[zu] = M[Bu] = M[qu] = !0;
M[xu] = M[bu] = M[Pu] = M[wu] = M[Ru] = M[$u] = M[Tu] = M[Su] = M[ku] = M[Nu] = M[Mu] = M[Au] = M[Cu] = M[Eu] = M[Ou] = !1;
function Yu(t) {
  return Zt(t) && ci(t.length) && !!M[At(t)];
}
function Uu(t) {
  return function(e) {
    return t(e);
  };
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, zt = fi && typeof module == "object" && module && !module.nodeType && module, Xu = zt && zt.exports === fi, qe = Xu && ei.process, ir = (function() {
  try {
    var t = zt && zt.require && zt.require("util").types;
    return t || qe && qe.binding && qe.binding("util");
  } catch {
  }
})(), sr = ir && ir.isTypedArray, wn = sr ? Uu(sr) : Yu;
function Qe(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Gu = Object.prototype, Vu = Gu.hasOwnProperty;
function Wu(t, e, n) {
  var r = t[e];
  (!(Vu.call(t, e) && Oe(r, n)) || n === void 0 && !(e in t)) && xn(t, e, n);
}
function Ku(t, e, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = e.length; ++s < a; ) {
    var o = e[s], c = void 0;
    c === void 0 && (c = t[o]), i ? xn(n, o, c) : Wu(n, o, c);
  }
  return n;
}
function Ju(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Zu = 9007199254740991, Qu = /^(?:0|[1-9]\d*)$/;
function li(t, e) {
  var n = typeof t;
  return e = e ?? Zu, !!e && (n == "number" || n != "symbol" && Qu.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var th = Object.prototype, eh = th.hasOwnProperty;
function nh(t, e) {
  var n = Se(t), r = !n && Te(t), i = !n && !r && bn(t), s = !n && !r && !i && wn(t), a = n || r || i || s, o = a ? Ju(t.length, String) : [], c = o.length;
  for (var u in t)
    (e || eh.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    li(u, c))) && o.push(u);
  return o;
}
function rh(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var ih = Object.prototype, sh = ih.hasOwnProperty;
function ah(t) {
  if (!vt(t))
    return rh(t);
  var e = De(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !sh.call(t, r)) || n.push(r);
  return n;
}
function _i(t) {
  return Le(t) ? nh(t, !0) : ah(t);
}
function oh(t) {
  return Ku(t, _i(t));
}
function ch(t, e, n, r, i, s, a) {
  var o = Qe(t, n), c = Qe(e, n), u = a.get(c);
  if (u) {
    Ze(t, n, u);
    return;
  }
  var h = s ? s(o, c, n + "", t, e, a) : void 0, f = h === void 0;
  if (f) {
    var l = Se(c), _ = !l && bn(c), w = !l && !_ && wn(c);
    h = c, l || _ || w ? Se(o) ? h = o : hu(o) ? h = nu(o) : _ ? (f = !1, h = Qc(c, !0)) : w ? (f = !1, h = eu(c, !0)) : h = [] : mu(c) || Te(c) ? (h = o, Te(o) ? h = oh(o) : (!vt(o) || mn(o)) && (h = su(c))) : f = !1;
  }
  f && (a.set(c, h), i(h, c, r, s, a), a.delete(c)), Ze(t, n, h);
}
function di(t, e, n, r, i) {
  t !== e && Jc(e, function(s, a) {
    if (i || (i = new Ct()), vt(s))
      ch(t, e, a, n, di, r, i);
    else {
      var o = r ? r(Qe(t, a), s, a + "", t, e, i) : void 0;
      o === void 0 && (o = s), Ze(t, a, o);
    }
  }, _i);
}
function pi(t) {
  return t;
}
function uh(t, e, n) {
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
var ar = Math.max;
function hh(t, e, n) {
  return e = ar(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, s = ar(r.length - e, 0), a = Array(s); ++i < s; )
      a[i] = r[e + i];
    i = -1;
    for (var o = Array(e + 1); ++i < e; )
      o[i] = r[i];
    return o[e] = n(a), uh(t, this, o);
  };
}
function fh(t) {
  return function() {
    return t;
  };
}
var lh = $e ? function(t, e) {
  return $e(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fh(e),
    writable: !0
  });
} : pi, _h = 800, dh = 16, ph = Date.now;
function gh(t) {
  var e = 0, n = 0;
  return function() {
    var r = ph(), i = dh - (r - n);
    if (n = r, i > 0) {
      if (++e >= _h)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var yh = gh(lh);
function vh(t, e) {
  return yh(hh(t, e, pi), t + "");
}
function mh(t, e, n) {
  if (!vt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Le(n) && li(e, n.length) : r == "string" && e in n) ? Oe(n[e], t) : !1;
}
function xh(t) {
  return vh(function(e, n) {
    var r = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && mh(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++r < i; ) {
      var o = n[r];
      o && t(e, o, r, s);
    }
    return e;
  });
}
var Lf = xh(function(t, e, n) {
  di(t, e, n);
});
function If(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  var r = Array.from(typeof t == "string" ? [t] : t);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var i = r.reduce(function(o, c) {
    var u = c.match(/\n([\t ]+|(?!\s).)/g);
    return u ? o.concat(u.map(function(h) {
      var f, l;
      return (l = (f = h.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && l !== void 0 ? l : 0;
    })) : o;
  }, []);
  if (i.length) {
    var s = new RegExp(`
[	 ]{`.concat(Math.min.apply(Math, i), "}"), "g");
    r = r.map(function(o) {
      return o.replace(s, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var a = r[0];
  return e.forEach(function(o, c) {
    var u = a.match(/(?:^|\n)( *)$/), h = u ? u[1] : "", f = o;
    typeof o == "string" && o.includes(`
`) && (f = String(o).split(`
`).map(function(l, _) {
      return _ === 0 ? l : "".concat(h).concat(l);
    }).join(`
`)), a += f + r[c + 1];
  }), a;
}
var gi = "comm", yi = "rule", vi = "decl", bh = "@import", wh = "@namespace", $h = "@keyframes", Th = "@layer", Sh = Math.abs, Bt = String.fromCharCode;
function mi(t) {
  return t.trim();
}
function tn(t, e, n) {
  return t.replace(e, n);
}
function Tt(t, e) {
  return t.charCodeAt(e) | 0;
}
function Nt(t, e, n) {
  return t.slice(e, n);
}
function K(t) {
  return t.length;
}
function kh(t) {
  return t.length;
}
function se(t, e) {
  return e.push(t), t;
}
var Ie = 1, Mt = 1, xi = 0, X = 0, E = 0, Et = "";
function $n(t, e, n, r, i, s, a, o) {
  return { value: t, root: e, parent: n, type: r, props: i, children: s, line: Ie, column: Mt, length: a, return: "", siblings: o };
}
function Nh() {
  return E;
}
function Mh() {
  return E = X > 0 ? Tt(Et, --X) : 0, Mt--, E === 10 && (Mt = 1, Ie--), E;
}
function V() {
  return E = X < xi ? Tt(Et, X++) : 0, Mt++, E === 10 && (Mt = 1, Ie++), E;
}
function ot() {
  return Tt(Et, X);
}
function fe() {
  return X;
}
function Fe(t, e) {
  return Nt(Et, t, e);
}
function Wt(t) {
  switch (t) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ah(t) {
  return Ie = Mt = 1, xi = K(Et = t), X = 0, [];
}
function Ch(t) {
  return Et = "", t;
}
function Ye(t) {
  return mi(Fe(X - 1, en(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Eh(t) {
  for (; (E = ot()) && E < 33; )
    V();
  return Wt(t) > 2 || Wt(E) > 3 ? "" : " ";
}
function Oh(t, e) {
  for (; --e && V() && !(E < 48 || E > 102 || E > 57 && E < 65 || E > 70 && E < 97); )
    ;
  return Fe(t, fe() + (e < 6 && ot() == 32 && V() == 32));
}
function en(t) {
  for (; V(); )
    switch (E) {
      // ] ) " '
      case t:
        return X;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && en(E);
        break;
      // (
      case 40:
        t === 41 && en(t);
        break;
      // \
      case 92:
        V();
        break;
    }
  return X;
}
function Ph(t, e) {
  for (; V() && t + E !== 57; )
    if (t + E === 84 && ot() === 47)
      break;
  return "/*" + Fe(e, X - 1) + "*" + Bt(t === 47 ? t : V());
}
function Rh(t) {
  for (; !Wt(ot()); )
    V();
  return Fe(t, X);
}
function Ff(t) {
  return Ch(le("", null, null, null, [""], t = Ah(t), 0, [0], t));
}
function le(t, e, n, r, i, s, a, o, c) {
  for (var u = 0, h = 0, f = a, l = 0, _ = 0, w = 0, $ = 1, O = 1, H = 1, C = 0, S = 0, F = "", B = i, D = s, q = r, T = F; O; )
    switch (w = S, S = V()) {
      // (
      case 40:
        w != 108 && Tt(T, f - 1) == 58 ? (C++, T += "(") : T += Ye(S);
        break;
      // )
      case 41:
        C--, T += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        T += Ye(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (C > 0) {
          T += Bt(S);
          break;
        }
        T += Eh(w);
        break;
      // \
      case 92:
        T += Oh(fe() - 1, 7);
        continue;
      // /
      case 47:
        switch (ot()) {
          case 42:
          case 47:
            se(Dh(Ph(V(), fe()), e, n, c), c), (Wt(w || 1) == 5 || Wt(ot() || 1) == 5) && K(T) && Nt(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * $:
        o[u++] = K(T) * H;
      // } ; \0
      case 125 * $:
      case 59:
      case 0:
        if (C > 0 && S) {
          T += Bt(S);
          break;
        }
        switch (S) {
          // \0 }
          case 0:
          case 125:
            O = 0;
          // ;
          case 59 + h:
            H == -1 && (T = tn(T, /\f/g, "")), _ > 0 && (K(T) - f || $ === 0) && se(_ > 32 ? cr(T + ";", r, n, f - 1, c) : cr(tn(T, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (se(q = or(T, e, n, u, h, i, o, F, B = [], D = [], f, s), s), S === 123)
              if (h === 0)
                le(T, e, q, q, B, s, f, o, D);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (Tt(T, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Tt(T, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? le(t, q, q, r && se(or(t, q, q, 0, 0, i, o, F, i, B = [], f, D), D), i, D, f, o, r ? B : D) : le(T, q, q, q, [""], D, 0, o, D);
              }
        }
        u = h = _ = 0, $ = H = 1, F = T = "", f = a;
        break;
      // :
      case 58:
        f = 1 + K(T), _ = w;
      default:
        if ($ < 1) {
          if (S == 123)
            --$;
          else if (S == 125 && $++ == 0 && Mh() == 125)
            continue;
        }
        switch (T += Bt(S), S * $) {
          // &
          case 38:
            H = h > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            if (C > 0) break;
            o[u++] = (K(T) - 1) * H, H = 1;
            break;
          // @
          case 64:
            ot() === 45 && (T += Ye(V())), l = ot(), h = f = K(F = T += Rh(fe())), S++;
            break;
          // -
          case 45:
            w === 45 && K(T) == 2 && ($ = 0);
        }
    }
  return s;
}
function or(t, e, n, r, i, s, a, o, c, u, h, f) {
  for (var l = i - 1, _ = i === 0 ? s : [""], w = kh(_), $ = 0, O = 0, H = 0; $ < r; ++$)
    for (var C = 0, S = Nt(t, l + 1, l = Sh(O = a[$])), F = t; C < w; ++C)
      (F = mi(O > 0 ? _[C] + " " + S : tn(S, /&\f/g, _[C]))) && (c[H++] = F);
  return $n(t, e, n, i === 0 ? yi : o, c, u, h, f);
}
function Dh(t, e, n, r) {
  return $n(t, e, n, gi, Bt(Nh()), Nt(t, 2, -2), 0, r);
}
function cr(t, e, n, r, i) {
  return $n(t, e, n, vi, Nt(t, 0, r), Nt(t, r + 1, -1), r, i);
}
function ur(t, e) {
  for (var n = "", r = 0; r < t.length; r++)
    n += e(t[r], r, t, e) || "";
  return n;
}
function Hf(t, e, n, r) {
  switch (t.type) {
    case Th:
      if (t.children.length) break;
    case bh:
    case wh:
    case vi:
      return t.return = t.return || t.value;
    case gi:
      return "";
    case $h:
      return t.return = t.value + "{" + ur(t.children, r) + "}";
    case yi:
      if (!K(t.value = t.props.join(","))) return "";
  }
  return K(n = ur(t.children, r)) ? t.return = t.value + "{" + n + "}" : "";
}
var Lh = si(Object.keys, Object), Ih = Object.prototype, Fh = Ih.hasOwnProperty;
function Hh(t) {
  if (!De(t))
    return Lh(t);
  var e = [];
  for (var n in Object(t))
    Fh.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
var nn = xt(tt, "DataView"), rn = xt(tt, "Promise"), sn = xt(tt, "Set"), an = xt(tt, "WeakMap"), hr = "[object Map]", jh = "[object Object]", fr = "[object Promise]", lr = "[object Set]", _r = "[object WeakMap]", dr = "[object DataView]", zh = mt(nn), Bh = mt(Vt), qh = mt(rn), Yh = mt(sn), Uh = mt(an), lt = At;
(nn && lt(new nn(new ArrayBuffer(1))) != dr || Vt && lt(new Vt()) != hr || rn && lt(rn.resolve()) != fr || sn && lt(new sn()) != lr || an && lt(new an()) != _r) && (lt = function(t) {
  var e = At(t), n = e == jh ? t.constructor : void 0, r = n ? mt(n) : "";
  if (r)
    switch (r) {
      case zh:
        return dr;
      case Bh:
        return hr;
      case qh:
        return fr;
      case Yh:
        return lr;
      case Uh:
        return _r;
    }
  return e;
});
var Xh = "[object Map]", Gh = "[object Set]", Vh = Object.prototype, Wh = Vh.hasOwnProperty;
function jf(t) {
  if (t == null)
    return !0;
  if (Le(t) && (Se(t) || typeof t == "string" || typeof t.splice == "function" || bn(t) || wn(t) || Te(t)))
    return !t.length;
  var e = lt(t);
  if (e == Xh || e == Gh)
    return !t.size;
  if (De(t))
    return !Hh(t).length;
  for (var n in t)
    if (Wh.call(t, n))
      return !1;
  return !0;
}
export {
  Ct as $,
  mu as A,
  Le as B,
  Z as C,
  Se as D,
  pi as E,
  hn as F,
  at as G,
  Ut as H,
  Ln as I,
  Ca as J,
  Ku as K,
  _i as L,
  ai as M,
  tu as N,
  we as O,
  eu as P,
  Zt as Q,
  lt as R,
  Y as S,
  Uu as T,
  v as U,
  ir as V,
  vt as W,
  nu as X,
  bn as Y,
  Qc as Z,
  su as _,
  ff as a,
  Wu as a0,
  vh as a1,
  hu as a2,
  If as a3,
  Rf as a4,
  Df as a5,
  Pf as a6,
  Of as a7,
  Ef as a8,
  Cf as a9,
  yh as aA,
  hh as aB,
  mh as aC,
  Oe as aD,
  Jc as aE,
  xn as aF,
  li as aG,
  At as aH,
  nh as aI,
  Hh as aJ,
  Te as aK,
  ut as aL,
  Qn as aM,
  wn as aN,
  ci as aO,
  sn as aP,
  Af as aa,
  kf as ab,
  Mf as ac,
  Nf as ad,
  $f as ae,
  Sf as af,
  Tf as ag,
  wf as ah,
  vf as ai,
  yf as aj,
  bf as ak,
  xf as al,
  Lf as am,
  ri as an,
  ur as ao,
  Hf as ap,
  Ff as aq,
  ef as ar,
  nf as as,
  z as at,
  $a as au,
  un as av,
  Cr as aw,
  Jt as ax,
  Pr as ay,
  sf as az,
  lf as b,
  cf as c,
  af as d,
  Bn as e,
  of as f,
  uf as g,
  qn as h,
  pf as i,
  df as j,
  mf as k,
  fh as l,
  hf as m,
  mn as n,
  jf as o,
  dn as p,
  Zh as q,
  Ai as r,
  rf as s,
  _f as t,
  Qh as u,
  tf as v,
  Jh as w,
  gf as x,
  Ar as y,
  ji as z
};
