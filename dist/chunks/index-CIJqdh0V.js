import { g as Uc } from "./_commonjsHelpers-CqEciG1_.js";
import { d as Xc } from "./percentages-BXMCSKIN-w8KgaW-L.js";
function Gc(t) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t == "string" ? [t] : t);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? a.concat(c.map(function(h) {
      var d, u;
      return (u = (d = h.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && u !== void 0 ? u : 0;
    })) : a;
  }, []);
  if (n.length) {
    var s = new RegExp(`
[	 ]{`.concat(Math.min.apply(Math, n), "}"), "g");
    r = r.map(function(a) {
      return a.replace(s, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var o = r[0];
  return e.forEach(function(a, l) {
    var c = o.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", d = a;
    typeof a == "string" && a.includes(`
`) && (d = String(a).split(`
`).map(function(u, f) {
      return f === 0 ? u : "".concat(h).concat(u);
    }).join(`
`)), o += d + r[l + 1];
  }), o;
}
var Qi = { exports: {} }, Vc = Qi.exports, Go;
function Kc() {
  return Go || (Go = 1, (function(t, e) {
    (function(i, r) {
      t.exports = r();
    })(Vc, (function() {
      var i = 1e3, r = 6e4, n = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", c = "day", h = "week", d = "month", u = "quarter", f = "year", m = "date", y = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
        var k = ["th", "st", "nd", "rd"], x = R % 100;
        return "[" + R + (k[(x - 20) % 10] || k[x] || k[0]) + "]";
      } }, _ = function(R, k, x) {
        var L = String(R);
        return !L || L.length >= k ? R : "" + Array(k + 1 - L.length).join(x) + R;
      }, w = { s: _, z: function(R) {
        var k = -R.utcOffset(), x = Math.abs(k), L = Math.floor(x / 60), S = x % 60;
        return (k <= 0 ? "+" : "-") + _(L, 2, "0") + ":" + _(S, 2, "0");
      }, m: function R(k, x) {
        if (k.date() < x.date()) return -R(x, k);
        var L = 12 * (x.year() - k.year()) + (x.month() - k.month()), S = k.clone().add(L, d), M = x - S < 0, W = k.clone().add(L + (M ? -1 : 1), d);
        return +(-(L + (x - S) / (M ? S - W : W - S)) || 0);
      }, a: function(R) {
        return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
      }, p: function(R) {
        return { M: d, y: f, w: h, d: c, D: m, h: l, m: a, s: o, ms: s, Q: u }[R] || String(R || "").toLowerCase().replace(/s$/, "");
      }, u: function(R) {
        return R === void 0;
      } }, A = "en", Y = {};
      Y[A] = T;
      var G = "$isDayjsObject", N = function(R) {
        return R instanceof At || !(!R || !R[G]);
      }, K = function R(k, x, L) {
        var S;
        if (!k) return A;
        if (typeof k == "string") {
          var M = k.toLowerCase();
          Y[M] && (S = M), x && (Y[M] = x, S = M);
          var W = k.split("-");
          if (!S && W.length > 1) return R(W[0]);
        } else {
          var z = k.name;
          Y[z] = k, S = z;
        }
        return !L && S && (A = S), S || !L && A;
      }, H = function(R, k) {
        if (N(R)) return R.clone();
        var x = typeof k == "object" ? k : {};
        return x.date = R, x.args = arguments, new At(x);
      }, P = w;
      P.l = K, P.i = N, P.w = function(R, k) {
        return H(R, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
      };
      var At = (function() {
        function R(x) {
          this.$L = K(x.locale, null, !0), this.parse(x), this.$x = this.$x || x.x || {}, this[G] = !0;
        }
        var k = R.prototype;
        return k.parse = function(x) {
          this.$d = (function(L) {
            var S = L.date, M = L.utc;
            if (S === null) return /* @__PURE__ */ new Date(NaN);
            if (P.u(S)) return /* @__PURE__ */ new Date();
            if (S instanceof Date) return new Date(S);
            if (typeof S == "string" && !/Z$/i.test(S)) {
              var W = S.match(b);
              if (W) {
                var z = W[2] - 1 || 0, J = (W[7] || "0").substring(0, 3);
                return M ? new Date(Date.UTC(W[1], z, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, J)) : new Date(W[1], z, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, J);
              }
            }
            return new Date(S);
          })(x), this.init();
        }, k.init = function() {
          var x = this.$d;
          this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
        }, k.$utils = function() {
          return P;
        }, k.isValid = function() {
          return this.$d.toString() !== y;
        }, k.isSame = function(x, L) {
          var S = H(x);
          return this.startOf(L) <= S && S <= this.endOf(L);
        }, k.isAfter = function(x, L) {
          return H(x) < this.startOf(L);
        }, k.isBefore = function(x, L) {
          return this.endOf(L) < H(x);
        }, k.$g = function(x, L, S) {
          return P.u(x) ? this[L] : this.set(S, x);
        }, k.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, k.valueOf = function() {
          return this.$d.getTime();
        }, k.startOf = function(x, L) {
          var S = this, M = !!P.u(L) || L, W = P.p(x), z = function(Et, rt) {
            var Lt = P.w(S.$u ? Date.UTC(S.$y, rt, Et) : new Date(S.$y, rt, Et), S);
            return M ? Lt : Lt.endOf(c);
          }, J = function(Et, rt) {
            return P.w(S.toDate()[Et].apply(S.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(rt)), S);
          }, j = this.$W, et = this.$M, X = this.$D, bt = "set" + (this.$u ? "UTC" : "");
          switch (W) {
            case f:
              return M ? z(1, 0) : z(31, 11);
            case d:
              return M ? z(1, et) : z(0, et + 1);
            case h:
              var Bt = this.$locale().weekStart || 0, re = (j < Bt ? j + 7 : j) - Bt;
              return z(M ? X - re : X + (6 - re), et);
            case c:
            case m:
              return J(bt + "Hours", 0);
            case l:
              return J(bt + "Minutes", 1);
            case a:
              return J(bt + "Seconds", 2);
            case o:
              return J(bt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, k.endOf = function(x) {
          return this.startOf(x, !1);
        }, k.$set = function(x, L) {
          var S, M = P.p(x), W = "set" + (this.$u ? "UTC" : ""), z = (S = {}, S[c] = W + "Date", S[m] = W + "Date", S[d] = W + "Month", S[f] = W + "FullYear", S[l] = W + "Hours", S[a] = W + "Minutes", S[o] = W + "Seconds", S[s] = W + "Milliseconds", S)[M], J = M === c ? this.$D + (L - this.$W) : L;
          if (M === d || M === f) {
            var j = this.clone().set(m, 1);
            j.$d[z](J), j.init(), this.$d = j.set(m, Math.min(this.$D, j.daysInMonth())).$d;
          } else z && this.$d[z](J);
          return this.init(), this;
        }, k.set = function(x, L) {
          return this.clone().$set(x, L);
        }, k.get = function(x) {
          return this[P.p(x)]();
        }, k.add = function(x, L) {
          var S, M = this;
          x = Number(x);
          var W = P.p(L), z = function(et) {
            var X = H(M);
            return P.w(X.date(X.date() + Math.round(et * x)), M);
          };
          if (W === d) return this.set(d, this.$M + x);
          if (W === f) return this.set(f, this.$y + x);
          if (W === c) return z(1);
          if (W === h) return z(7);
          var J = (S = {}, S[a] = r, S[l] = n, S[o] = i, S)[W] || 1, j = this.$d.getTime() + x * J;
          return P.w(j, this);
        }, k.subtract = function(x, L) {
          return this.add(-1 * x, L);
        }, k.format = function(x) {
          var L = this, S = this.$locale();
          if (!this.isValid()) return S.invalidDate || y;
          var M = x || "YYYY-MM-DDTHH:mm:ssZ", W = P.z(this), z = this.$H, J = this.$m, j = this.$M, et = S.weekdays, X = S.months, bt = S.meridiem, Bt = function(rt, Lt, Tt, ne) {
            return rt && (rt[Lt] || rt(L, M)) || Tt[Lt].slice(0, ne);
          }, re = function(rt) {
            return P.s(z % 12 || 12, rt, "0");
          }, Et = bt || function(rt, Lt, Tt) {
            var ne = rt < 12 ? "AM" : "PM";
            return Tt ? ne.toLowerCase() : ne;
          };
          return M.replace(E, (function(rt, Lt) {
            return Lt || (function(Tt) {
              switch (Tt) {
                case "YY":
                  return String(L.$y).slice(-2);
                case "YYYY":
                  return P.s(L.$y, 4, "0");
                case "M":
                  return j + 1;
                case "MM":
                  return P.s(j + 1, 2, "0");
                case "MMM":
                  return Bt(S.monthsShort, j, X, 3);
                case "MMMM":
                  return Bt(X, j);
                case "D":
                  return L.$D;
                case "DD":
                  return P.s(L.$D, 2, "0");
                case "d":
                  return String(L.$W);
                case "dd":
                  return Bt(S.weekdaysMin, L.$W, et, 2);
                case "ddd":
                  return Bt(S.weekdaysShort, L.$W, et, 3);
                case "dddd":
                  return et[L.$W];
                case "H":
                  return String(z);
                case "HH":
                  return P.s(z, 2, "0");
                case "h":
                  return re(1);
                case "hh":
                  return re(2);
                case "a":
                  return Et(z, J, !0);
                case "A":
                  return Et(z, J, !1);
                case "m":
                  return String(J);
                case "mm":
                  return P.s(J, 2, "0");
                case "s":
                  return String(L.$s);
                case "ss":
                  return P.s(L.$s, 2, "0");
                case "SSS":
                  return P.s(L.$ms, 3, "0");
                case "Z":
                  return W;
              }
              return null;
            })(rt) || W.replace(":", "");
          }));
        }, k.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, k.diff = function(x, L, S) {
          var M, W = this, z = P.p(L), J = H(x), j = (J.utcOffset() - this.utcOffset()) * r, et = this - J, X = function() {
            return P.m(W, J);
          };
          switch (z) {
            case f:
              M = X() / 12;
              break;
            case d:
              M = X();
              break;
            case u:
              M = X() / 3;
              break;
            case h:
              M = (et - j) / 6048e5;
              break;
            case c:
              M = (et - j) / 864e5;
              break;
            case l:
              M = et / n;
              break;
            case a:
              M = et / r;
              break;
            case o:
              M = et / i;
              break;
            default:
              M = et;
          }
          return S ? M : P.a(M);
        }, k.daysInMonth = function() {
          return this.endOf(d).$D;
        }, k.$locale = function() {
          return Y[this.$L];
        }, k.locale = function(x, L) {
          if (!x) return this.$L;
          var S = this.clone(), M = K(x, L, !0);
          return M && (S.$L = M), S;
        }, k.clone = function() {
          return P.w(this.$d, this);
        }, k.toDate = function() {
          return new Date(this.valueOf());
        }, k.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, k.toISOString = function() {
          return this.$d.toISOString();
        }, k.toString = function() {
          return this.$d.toUTCString();
        }, R;
      })(), ie = At.prototype;
      return H.prototype = ie, [["$ms", s], ["$s", o], ["$m", a], ["$H", l], ["$W", c], ["$M", d], ["$y", f], ["$D", m]].forEach((function(R) {
        ie[R[1]] = function(k) {
          return this.$g(k, R[0], R[1]);
        };
      })), H.extend = function(R, k) {
        return R.$i || (R(k, At, H), R.$i = !0), H;
      }, H.locale = K, H.isDayjs = N, H.unix = function(R) {
        return H(1e3 * R);
      }, H.en = Y[A], H.Ls = Y, H.p = {}, H;
    }));
  })(Qi)), Qi.exports;
}
var Zc = Kc();
const Jc = /* @__PURE__ */ Uc(Zc);
var Qc = { value: () => {
} };
function ma() {
  for (var t = 0, e = arguments.length, i = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in i || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new tr(i);
}
function tr(t) {
  this._ = t;
}
function th(t, e) {
  return t.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i)) throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
tr.prototype = ma.prototype = {
  constructor: tr,
  on: function(t, e) {
    var i = this._, r = th(t + "", i), n, s = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++s < o; ) if ((n = (t = r[s]).type) && (n = eh(i[n], t.name))) return n;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < o; )
      if (n = (t = r[s]).type) i[n] = Vo(i[n], t.name, e);
      else if (e == null) for (n in i) i[n] = Vo(i[n], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var i in e) t[i] = e[i].slice();
    return new tr(t);
  },
  call: function(t, e) {
    if ((n = arguments.length - 2) > 0) for (var i = new Array(n), r = 0, n, s; r < n; ++r) i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, n = s.length; r < n; ++r) s[r].value.apply(e, i);
  },
  apply: function(t, e, i) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], n = 0, s = r.length; n < s; ++n) r[n].value.apply(e, i);
  }
};
function eh(t, e) {
  for (var i = 0, r = t.length, n; i < r; ++i)
    if ((n = t[i]).name === e)
      return n.value;
}
function Vo(t, e, i) {
  for (var r = 0, n = t.length; r < n; ++r)
    if (t[r].name === e) {
      t[r] = Qc, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return i != null && t.push({ name: e, value: i }), t;
}
var bn = "http://www.w3.org/1999/xhtml";
const Ko = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: bn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fr(t) {
  var e = t += "", i = e.indexOf(":");
  return i >= 0 && (e = t.slice(0, i)) !== "xmlns" && (t = t.slice(i + 1)), Ko.hasOwnProperty(e) ? { space: Ko[e], local: t } : t;
}
function ih(t) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === bn && e.documentElement.namespaceURI === bn ? e.createElement(t) : e.createElementNS(i, t);
  };
}
function rh(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ya(t) {
  var e = Fr(t);
  return (e.local ? rh : ih)(e);
}
function nh() {
}
function jn(t) {
  return t == null ? nh : function() {
    return this.querySelector(t);
  };
}
function oh(t) {
  typeof t != "function" && (t = jn(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var s = e[n], o = s.length, a = r[n] = new Array(o), l, c, h = 0; h < o; ++h)
      (l = s[h]) && (c = t.call(l, l.__data__, h, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[h] = c);
  return new Ct(r, this._parents);
}
function sh(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ah() {
  return [];
}
function _a(t) {
  return t == null ? ah : function() {
    return this.querySelectorAll(t);
  };
}
function lh(t) {
  return function() {
    return sh(t.apply(this, arguments));
  };
}
function ch(t) {
  typeof t == "function" ? t = lh(t) : t = _a(t);
  for (var e = this._groups, i = e.length, r = [], n = [], s = 0; s < i; ++s)
    for (var o = e[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (r.push(t.call(l, l.__data__, c, o)), n.push(l));
  return new Ct(r, n);
}
function Ca(t) {
  return function() {
    return this.matches(t);
  };
}
function xa(t) {
  return function(e) {
    return e.matches(t);
  };
}
var hh = Array.prototype.find;
function uh(t) {
  return function() {
    return hh.call(this.children, t);
  };
}
function dh() {
  return this.firstElementChild;
}
function fh(t) {
  return this.select(t == null ? dh : uh(typeof t == "function" ? t : xa(t)));
}
var ph = Array.prototype.filter;
function gh() {
  return Array.from(this.children);
}
function mh(t) {
  return function() {
    return ph.call(this.children, t);
  };
}
function yh(t) {
  return this.selectAll(t == null ? gh : mh(typeof t == "function" ? t : xa(t)));
}
function _h(t) {
  typeof t != "function" && (t = Ca(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var s = e[n], o = s.length, a = r[n] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new Ct(r, this._parents);
}
function ba(t) {
  return new Array(t.length);
}
function Ch() {
  return new Ct(this._enter || this._groups.map(ba), this._parents);
}
function lr(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
lr.prototype = {
  constructor: lr,
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
function xh(t) {
  return function() {
    return t;
  };
}
function bh(t, e, i, r, n, s) {
  for (var o = 0, a, l = e.length, c = s.length; o < c; ++o)
    (a = e[o]) ? (a.__data__ = s[o], r[o] = a) : i[o] = new lr(t, s[o]);
  for (; o < l; ++o)
    (a = e[o]) && (n[o] = a);
}
function Th(t, e, i, r, n, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), h = e.length, d = s.length, u = new Array(h), f;
  for (a = 0; a < h; ++a)
    (l = e[a]) && (u[a] = f = o.call(l, l.__data__, a, e) + "", c.has(f) ? n[a] = l : c.set(f, l));
  for (a = 0; a < d; ++a)
    f = o.call(t, s[a], a, s) + "", (l = c.get(f)) ? (r[a] = l, l.__data__ = s[a], c.delete(f)) : i[a] = new lr(t, s[a]);
  for (a = 0; a < h; ++a)
    (l = e[a]) && c.get(u[a]) === l && (n[a] = l);
}
function vh(t) {
  return t.__data__;
}
function Sh(t, e) {
  if (!arguments.length) return Array.from(this, vh);
  var i = e ? Th : bh, r = this._parents, n = this._groups;
  typeof t != "function" && (t = xh(t));
  for (var s = n.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var h = r[c], d = n[c], u = d.length, f = kh(t.call(h, h && h.__data__, c, r)), m = f.length, y = a[c] = new Array(m), b = o[c] = new Array(m), E = l[c] = new Array(u);
    i(h, d, y, b, E, f, e);
    for (var T = 0, _ = 0, w, A; T < m; ++T)
      if (w = y[T]) {
        for (T >= _ && (_ = T + 1); !(A = b[_]) && ++_ < m; ) ;
        w._next = A || null;
      }
  }
  return o = new Ct(o, r), o._enter = a, o._exit = l, o;
}
function kh(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wh() {
  return new Ct(this._exit || this._groups.map(ba), this._parents);
}
function Ah(t, e, i) {
  var r = this.enter(), n = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? s.remove() : i(s), r && n ? r.merge(n).order() : n;
}
function Bh(t) {
  for (var e = t.selection ? t.selection() : t, i = this._groups, r = e._groups, n = i.length, s = r.length, o = Math.min(n, s), a = new Array(n), l = 0; l < o; ++l)
    for (var c = i[l], h = r[l], d = c.length, u = a[l] = new Array(d), f, m = 0; m < d; ++m)
      (f = c[m] || h[m]) && (u[m] = f);
  for (; l < n; ++l)
    a[l] = i[l];
  return new Ct(a, this._parents);
}
function Eh() {
  for (var t = this._groups, e = -1, i = t.length; ++e < i; )
    for (var r = t[e], n = r.length - 1, s = r[n], o; --n >= 0; )
      (o = r[n]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Lh(t) {
  t || (t = Fh);
  function e(d, u) {
    return d && u ? t(d.__data__, u.__data__) : !d - !u;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), s = 0; s < r; ++s) {
    for (var o = i[s], a = o.length, l = n[s] = new Array(a), c, h = 0; h < a; ++h)
      (c = o[h]) && (l[h] = c);
    l.sort(e);
  }
  return new Ct(n, this._parents).order();
}
function Fh(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Oh() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ih() {
  return Array.from(this);
}
function Mh() {
  for (var t = this._groups, e = 0, i = t.length; e < i; ++e)
    for (var r = t[e], n = 0, s = r.length; n < s; ++n) {
      var o = r[n];
      if (o) return o;
    }
  return null;
}
function $h() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Dh() {
  return !this.node();
}
function Nh(t) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], s = 0, o = n.length, a; s < o; ++s)
      (a = n[s]) && t.call(a, a.__data__, s, n);
  return this;
}
function Rh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ph(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qh(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function zh(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Wh(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t) : this.setAttribute(t, i);
  };
}
function Yh(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, i);
  };
}
function Hh(t, e) {
  var i = Fr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? Ph : Rh : typeof e == "function" ? i.local ? Yh : Wh : i.local ? zh : qh)(i, e));
}
function Ta(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function jh(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Uh(t, e, i) {
  return function() {
    this.style.setProperty(t, e, i);
  };
}
function Xh(t, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, i);
  };
}
function Gh(t, e, i) {
  return arguments.length > 1 ? this.each((e == null ? jh : typeof e == "function" ? Xh : Uh)(t, e, i ?? "")) : qe(this.node(), t);
}
function qe(t, e) {
  return t.style.getPropertyValue(e) || Ta(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Vh(t) {
  return function() {
    delete this[t];
  };
}
function Kh(t, e) {
  return function() {
    this[t] = e;
  };
}
function Zh(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t] : this[t] = i;
  };
}
function Jh(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Vh : typeof e == "function" ? Zh : Kh)(t, e)) : this.node()[t];
}
function va(t) {
  return t.trim().split(/^|\s+/);
}
function Un(t) {
  return t.classList || new Sa(t);
}
function Sa(t) {
  this._node = t, this._names = va(t.getAttribute("class") || "");
}
Sa.prototype = {
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
function ka(t, e) {
  for (var i = Un(t), r = -1, n = e.length; ++r < n; ) i.add(e[r]);
}
function wa(t, e) {
  for (var i = Un(t), r = -1, n = e.length; ++r < n; ) i.remove(e[r]);
}
function Qh(t) {
  return function() {
    ka(this, t);
  };
}
function tu(t) {
  return function() {
    wa(this, t);
  };
}
function eu(t, e) {
  return function() {
    (e.apply(this, arguments) ? ka : wa)(this, t);
  };
}
function iu(t, e) {
  var i = va(t + "");
  if (arguments.length < 2) {
    for (var r = Un(this.node()), n = -1, s = i.length; ++n < s; ) if (!r.contains(i[n])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? eu : e ? Qh : tu)(i, e));
}
function ru() {
  this.textContent = "";
}
function nu(t) {
  return function() {
    this.textContent = t;
  };
}
function ou(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function su(t) {
  return arguments.length ? this.each(t == null ? ru : (typeof t == "function" ? ou : nu)(t)) : this.node().textContent;
}
function au() {
  this.innerHTML = "";
}
function lu(t) {
  return function() {
    this.innerHTML = t;
  };
}
function cu(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function hu(t) {
  return arguments.length ? this.each(t == null ? au : (typeof t == "function" ? cu : lu)(t)) : this.node().innerHTML;
}
function uu() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function du() {
  return this.each(uu);
}
function fu() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function pu() {
  return this.each(fu);
}
function gu(t) {
  var e = typeof t == "function" ? t : ya(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function mu() {
  return null;
}
function yu(t, e) {
  var i = typeof t == "function" ? t : ya(t), r = e == null ? mu : typeof e == "function" ? e : jn(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function _u() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Cu() {
  return this.each(_u);
}
function xu() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function bu() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Tu(t) {
  return this.select(t ? bu : xu);
}
function vu(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Su(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ku(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function wu(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, s; i < n; ++i)
        s = e[i], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Au(t, e, i) {
  return function() {
    var r = this.__on, n, s = Su(e);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((n = r[o]).type === t.type && n.name === t.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = s, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, i), n = { type: t.type, name: t.name, value: e, listener: s, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function Bu(t, e, i) {
  var r = ku(t + ""), n, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, h; l < c; ++l)
        for (n = 0, h = a[l]; n < s; ++n)
          if ((o = r[n]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (a = e ? Au : wu, n = 0; n < s; ++n) this.each(a(r[n], e, i));
  return this;
}
function Aa(t, e, i) {
  var r = Ta(t), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, !1, !1)), t.dispatchEvent(n);
}
function Eu(t, e) {
  return function() {
    return Aa(this, t, e);
  };
}
function Lu(t, e) {
  return function() {
    return Aa(this, t, e.apply(this, arguments));
  };
}
function Fu(t, e) {
  return this.each((typeof e == "function" ? Lu : Eu)(t, e));
}
function* Ou() {
  for (var t = this._groups, e = 0, i = t.length; e < i; ++e)
    for (var r = t[e], n = 0, s = r.length, o; n < s; ++n)
      (o = r[n]) && (yield o);
}
var Ba = [null];
function Ct(t, e) {
  this._groups = t, this._parents = e;
}
function Ii() {
  return new Ct([[document.documentElement]], Ba);
}
function Iu() {
  return this;
}
Ct.prototype = Ii.prototype = {
  constructor: Ct,
  select: oh,
  selectAll: ch,
  selectChild: fh,
  selectChildren: yh,
  filter: _h,
  data: Sh,
  enter: Ch,
  exit: wh,
  join: Ah,
  merge: Bh,
  selection: Iu,
  order: Eh,
  sort: Lh,
  call: Oh,
  nodes: Ih,
  node: Mh,
  size: $h,
  empty: Dh,
  each: Nh,
  attr: Hh,
  style: Gh,
  property: Jh,
  classed: iu,
  text: su,
  html: hu,
  raise: du,
  lower: pu,
  append: gu,
  insert: yu,
  remove: Cu,
  clone: Tu,
  datum: vu,
  on: Bu,
  dispatch: Fu,
  [Symbol.iterator]: Ou
};
function St(t) {
  return typeof t == "string" ? new Ct([[document.querySelector(t)]], [document.documentElement]) : new Ct([[t]], Ba);
}
function Xn(t, e, i) {
  t.prototype = e.prototype = i, i.constructor = t;
}
function Ea(t, e) {
  var i = Object.create(t.prototype);
  for (var r in e) i[r] = e[r];
  return i;
}
function Mi() {
}
var vi = 0.7, cr = 1 / vi, De = "\\s*([+-]?\\d+)\\s*", Si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Mu = /^#([0-9a-f]{3,8})$/, $u = new RegExp(`^rgb\\(${De},${De},${De}\\)$`), Du = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), Nu = new RegExp(`^rgba\\(${De},${De},${De},${Si}\\)$`), Ru = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Si}\\)$`), Pu = new RegExp(`^hsl\\(${Si},${Pt},${Pt}\\)$`), qu = new RegExp(`^hsla\\(${Si},${Pt},${Pt},${Si}\\)$`), Zo = {
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
Xn(Mi, ki, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Jo,
  // Deprecated! Use color.formatHex.
  formatHex: Jo,
  formatHex8: zu,
  formatHsl: Wu,
  formatRgb: Qo,
  toString: Qo
});
function Jo() {
  return this.rgb().formatHex();
}
function zu() {
  return this.rgb().formatHex8();
}
function Wu() {
  return La(this).formatHsl();
}
function Qo() {
  return this.rgb().formatRgb();
}
function ki(t) {
  var e, i;
  return t = (t + "").trim().toLowerCase(), (e = Mu.exec(t)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? ts(e) : i === 3 ? new mt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Hi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Hi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = $u.exec(t)) ? new mt(e[1], e[2], e[3], 1) : (e = Du.exec(t)) ? new mt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Nu.exec(t)) ? Hi(e[1], e[2], e[3], e[4]) : (e = Ru.exec(t)) ? Hi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Pu.exec(t)) ? rs(e[1], e[2] / 100, e[3] / 100, 1) : (e = qu.exec(t)) ? rs(e[1], e[2] / 100, e[3] / 100, e[4]) : Zo.hasOwnProperty(t) ? ts(Zo[t]) : t === "transparent" ? new mt(NaN, NaN, NaN, 0) : null;
}
function ts(t) {
  return new mt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Hi(t, e, i, r) {
  return r <= 0 && (t = e = i = NaN), new mt(t, e, i, r);
}
function Yu(t) {
  return t instanceof Mi || (t = ki(t)), t ? (t = t.rgb(), new mt(t.r, t.g, t.b, t.opacity)) : new mt();
}
function Tn(t, e, i, r) {
  return arguments.length === 1 ? Yu(t) : new mt(t, e, i, r ?? 1);
}
function mt(t, e, i, r) {
  this.r = +t, this.g = +e, this.b = +i, this.opacity = +r;
}
Xn(mt, Tn, Ea(Mi, {
  brighter(t) {
    return t = t == null ? cr : Math.pow(cr, t), new mt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? vi : Math.pow(vi, t), new mt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new mt(Ce(this.r), Ce(this.g), Ce(this.b), hr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: es,
  // Deprecated! Use color.formatHex.
  formatHex: es,
  formatHex8: Hu,
  formatRgb: is,
  toString: is
}));
function es() {
  return `#${ye(this.r)}${ye(this.g)}${ye(this.b)}`;
}
function Hu() {
  return `#${ye(this.r)}${ye(this.g)}${ye(this.b)}${ye((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function is() {
  const t = hr(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ce(this.r)}, ${Ce(this.g)}, ${Ce(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function hr(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ce(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ye(t) {
  return t = Ce(t), (t < 16 ? "0" : "") + t.toString(16);
}
function rs(t, e, i, r) {
  return r <= 0 ? t = e = i = NaN : i <= 0 || i >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ot(t, e, i, r);
}
function La(t) {
  if (t instanceof Ot) return new Ot(t.h, t.s, t.l, t.opacity);
  if (t instanceof Mi || (t = ki(t)), !t) return new Ot();
  if (t instanceof Ot) return t;
  t = t.rgb();
  var e = t.r / 255, i = t.g / 255, r = t.b / 255, n = Math.min(e, i, r), s = Math.max(e, i, r), o = NaN, a = s - n, l = (s + n) / 2;
  return a ? (e === s ? o = (i - r) / a + (i < r) * 6 : i === s ? o = (r - e) / a + 2 : o = (e - i) / a + 4, a /= l < 0.5 ? s + n : 2 - s - n, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Ot(o, a, l, t.opacity);
}
function ju(t, e, i, r) {
  return arguments.length === 1 ? La(t) : new Ot(t, e, i, r ?? 1);
}
function Ot(t, e, i, r) {
  this.h = +t, this.s = +e, this.l = +i, this.opacity = +r;
}
Xn(Ot, ju, Ea(Mi, {
  brighter(t) {
    return t = t == null ? cr : Math.pow(cr, t), new Ot(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? vi : Math.pow(vi, t), new Ot(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new mt(
      on(t >= 240 ? t - 240 : t + 120, n, r),
      on(t, n, r),
      on(t < 120 ? t + 240 : t - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new Ot(ns(this.h), ji(this.s), ji(this.l), hr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = hr(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ns(this.h)}, ${ji(this.s) * 100}%, ${ji(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ns(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ji(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function on(t, e, i) {
  return (t < 60 ? e + (i - e) * t / 60 : t < 180 ? i : t < 240 ? e + (i - e) * (240 - t) / 60 : e) * 255;
}
const Gn = (t) => () => t;
function Fa(t, e) {
  return function(i) {
    return t + i * e;
  };
}
function Uu(t, e, i) {
  return t = Math.pow(t, i), e = Math.pow(e, i) - t, i = 1 / i, function(r) {
    return Math.pow(t + r * e, i);
  };
}
function N1(t, e) {
  var i = e - t;
  return i ? Fa(t, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : Gn(isNaN(t) ? e : t);
}
function Xu(t) {
  return (t = +t) == 1 ? Oa : function(e, i) {
    return i - e ? Uu(e, i, t) : Gn(isNaN(e) ? i : e);
  };
}
function Oa(t, e) {
  var i = e - t;
  return i ? Fa(t, i) : Gn(isNaN(t) ? e : t);
}
const os = (function t(e) {
  var i = Xu(e);
  function r(n, s) {
    var o = i((n = Tn(n)).r, (s = Tn(s)).r), a = i(n.g, s.g), l = i(n.b, s.b), c = Oa(n.opacity, s.opacity);
    return function(h) {
      return n.r = o(h), n.g = a(h), n.b = l(h), n.opacity = c(h), n + "";
    };
  }
  return r.gamma = t, r;
})(1);
function ae(t, e) {
  return t = +t, e = +e, function(i) {
    return t * (1 - i) + e * i;
  };
}
var vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, sn = new RegExp(vn.source, "g");
function Gu(t) {
  return function() {
    return t;
  };
}
function Vu(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ku(t, e) {
  var i = vn.lastIndex = sn.lastIndex = 0, r, n, s, o = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = vn.exec(t)) && (n = sn.exec(e)); )
    (s = n.index) > i && (s = e.slice(i, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (n = n[0]) ? a[o] ? a[o] += n : a[++o] = n : (a[++o] = null, l.push({ i: o, x: ae(r, n) })), i = sn.lastIndex;
  return i < e.length && (s = e.slice(i), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? Vu(l[0].x) : Gu(e) : (e = l.length, function(c) {
    for (var h = 0, d; h < e; ++h) a[(d = l[h]).i] = d.x(c);
    return a.join("");
  });
}
var ss = 180 / Math.PI, Sn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ia(t, e, i, r, n, s) {
  var o, a, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * i + e * r) && (i -= t * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t * r < e * i && (t = -t, e = -e, l = -l, o = -o), {
    translateX: n,
    translateY: s,
    rotate: Math.atan2(e, t) * ss,
    skewX: Math.atan(l) * ss,
    scaleX: o,
    scaleY: a
  };
}
var Ui;
function Zu(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Sn : Ia(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ju(t) {
  return t == null || (Ui || (Ui = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ui.setAttribute("transform", t), !(t = Ui.transform.baseVal.consolidate())) ? Sn : (t = t.matrix, Ia(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ma(t, e, i, r) {
  function n(c) {
    return c.length ? c.pop() + " " : "";
  }
  function s(c, h, d, u, f, m) {
    if (c !== d || h !== u) {
      var y = f.push("translate(", null, e, null, i);
      m.push({ i: y - 4, x: ae(c, d) }, { i: y - 2, x: ae(h, u) });
    } else (d || u) && f.push("translate(" + d + e + u + i);
  }
  function o(c, h, d, u) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), u.push({ i: d.push(n(d) + "rotate(", null, r) - 2, x: ae(c, h) })) : h && d.push(n(d) + "rotate(" + h + r);
  }
  function a(c, h, d, u) {
    c !== h ? u.push({ i: d.push(n(d) + "skewX(", null, r) - 2, x: ae(c, h) }) : h && d.push(n(d) + "skewX(" + h + r);
  }
  function l(c, h, d, u, f, m) {
    if (c !== d || h !== u) {
      var y = f.push(n(f) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: ae(c, d) }, { i: y - 2, x: ae(h, u) });
    } else (d !== 1 || u !== 1) && f.push(n(f) + "scale(" + d + "," + u + ")");
  }
  return function(c, h) {
    var d = [], u = [];
    return c = t(c), h = t(h), s(c.translateX, c.translateY, h.translateX, h.translateY, d, u), o(c.rotate, h.rotate, d, u), a(c.skewX, h.skewX, d, u), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, d, u), c = h = null, function(f) {
      for (var m = -1, y = u.length, b; ++m < y; ) d[(b = u[m]).i] = b.x(f);
      return d.join("");
    };
  };
}
var Qu = Ma(Zu, "px, ", "px)", "deg)"), td = Ma(Ju, ", ", ")", ")"), ze = 0, hi = 0, ii = 0, $a = 1e3, ur, ui, dr = 0, be = 0, Or = 0, wi = typeof performance == "object" && performance.now ? performance : Date, Da = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Vn() {
  return be || (Da(ed), be = wi.now() + Or);
}
function ed() {
  be = 0;
}
function fr() {
  this._call = this._time = this._next = null;
}
fr.prototype = Na.prototype = {
  constructor: fr,
  restart: function(t, e, i) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    i = (i == null ? Vn() : +i) + (e == null ? 0 : +e), !this._next && ui !== this && (ui ? ui._next = this : ur = this, ui = this), this._call = t, this._time = i, kn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, kn());
  }
};
function Na(t, e, i) {
  var r = new fr();
  return r.restart(t, e, i), r;
}
function id() {
  Vn(), ++ze;
  for (var t = ur, e; t; )
    (e = be - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ze;
}
function as() {
  be = (dr = wi.now()) + Or, ze = hi = 0;
  try {
    id();
  } finally {
    ze = 0, nd(), be = 0;
  }
}
function rd() {
  var t = wi.now(), e = t - dr;
  e > $a && (Or -= e, dr = t);
}
function nd() {
  for (var t, e = ur, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (i = e._next, e._next = null, e = t ? t._next = i : ur = i);
  ui = t, kn(r);
}
function kn(t) {
  if (!ze) {
    hi && (hi = clearTimeout(hi));
    var e = t - be;
    e > 24 ? (t < 1 / 0 && (hi = setTimeout(as, t - wi.now() - Or)), ii && (ii = clearInterval(ii))) : (ii || (dr = wi.now(), ii = setInterval(rd, $a)), ze = 1, Da(as));
  }
}
function ls(t, e, i) {
  var r = new fr();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t(n + e);
  }, e, i), r;
}
var od = ma("start", "end", "cancel", "interrupt"), sd = [], Ra = 0, cs = 1, wn = 2, er = 3, hs = 4, An = 5, ir = 6;
function Ir(t, e, i, r, n, s) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (i in o) return;
  ad(t, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: od,
    tween: sd,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: Ra
  });
}
function Kn(t, e) {
  var i = Mt(t, e);
  if (i.state > Ra) throw new Error("too late; already scheduled");
  return i;
}
function Ht(t, e) {
  var i = Mt(t, e);
  if (i.state > er) throw new Error("too late; already running");
  return i;
}
function Mt(t, e) {
  var i = t.__transition;
  if (!i || !(i = i[e])) throw new Error("transition not found");
  return i;
}
function ad(t, e, i) {
  var r = t.__transition, n;
  r[e] = i, i.timer = Na(s, 0, i.time);
  function s(c) {
    i.state = cs, i.timer.restart(o, i.delay, i.time), i.delay <= c && o(c - i.delay);
  }
  function o(c) {
    var h, d, u, f;
    if (i.state !== cs) return l();
    for (h in r)
      if (f = r[h], f.name === i.name) {
        if (f.state === er) return ls(o);
        f.state === hs ? (f.state = ir, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[h]) : +h < e && (f.state = ir, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[h]);
      }
    if (ls(function() {
      i.state === er && (i.state = hs, i.timer.restart(a, i.delay, i.time), a(c));
    }), i.state = wn, i.on.call("start", t, t.__data__, i.index, i.group), i.state === wn) {
      for (i.state = er, n = new Array(u = i.tween.length), h = 0, d = -1; h < u; ++h)
        (f = i.tween[h].value.call(t, t.__data__, i.index, i.group)) && (n[++d] = f);
      n.length = d + 1;
    }
  }
  function a(c) {
    for (var h = c < i.duration ? i.ease.call(null, c / i.duration) : (i.timer.restart(l), i.state = An, 1), d = -1, u = n.length; ++d < u; )
      n[d].call(t, h);
    i.state === An && (i.on.call("end", t, t.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = ir, i.timer.stop(), delete r[e];
    for (var c in r) return;
    delete t.__transition;
  }
}
function ld(t, e) {
  var i = t.__transition, r, n, s = !0, o;
  if (i) {
    e = e == null ? null : e + "";
    for (o in i) {
      if ((r = i[o]).name !== e) {
        s = !1;
        continue;
      }
      n = r.state > wn && r.state < An, r.state = ir, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete i[o];
    }
    s && delete t.__transition;
  }
}
function cd(t) {
  return this.each(function() {
    ld(this, t);
  });
}
function hd(t, e) {
  var i, r;
  return function() {
    var n = Ht(this, t), s = n.tween;
    if (s !== i) {
      r = i = s;
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function ud(t, e, i) {
  var r, n;
  if (typeof i != "function") throw new Error();
  return function() {
    var s = Ht(this, t), o = s.tween;
    if (o !== r) {
      n = (r = o).slice();
      for (var a = { name: e, value: i }, l = 0, c = n.length; l < c; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === c && n.push(a);
    }
    s.tween = n;
  };
}
function dd(t, e) {
  var i = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Mt(this.node(), i).tween, n = 0, s = r.length, o; n < s; ++n)
      if ((o = r[n]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? hd : ud)(i, t, e));
}
function Zn(t, e, i) {
  var r = t._id;
  return t.each(function() {
    var n = Ht(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Mt(n, r).value[e];
  };
}
function Pa(t, e) {
  var i;
  return (typeof e == "number" ? ae : e instanceof ki ? os : (i = ki(e)) ? (e = i, os) : Ku)(t, e);
}
function fd(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function pd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function gd(t, e, i) {
  var r, n = i + "", s;
  return function() {
    var o = this.getAttribute(t);
    return o === n ? null : o === r ? s : s = e(r = o, i);
  };
}
function md(t, e, i) {
  var r, n = i + "", s;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === n ? null : o === r ? s : s = e(r = o, i);
  };
}
function yd(t, e, i) {
  var r, n, s;
  return function() {
    var o, a = i(this), l;
    return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = a + "", o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a)));
  };
}
function _d(t, e, i) {
  var r, n, s;
  return function() {
    var o, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = a + "", o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a)));
  };
}
function Cd(t, e) {
  var i = Fr(t), r = i === "transform" ? td : Pa;
  return this.attrTween(t, typeof e == "function" ? (i.local ? _d : yd)(i, r, Zn(this, "attr." + t, e)) : e == null ? (i.local ? pd : fd)(i) : (i.local ? md : gd)(i, r, e));
}
function xd(t, e) {
  return function(i) {
    this.setAttribute(t, e.call(this, i));
  };
}
function bd(t, e) {
  return function(i) {
    this.setAttributeNS(t.space, t.local, e.call(this, i));
  };
}
function Td(t, e) {
  var i, r;
  function n() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && bd(t, s)), i;
  }
  return n._value = e, n;
}
function vd(t, e) {
  var i, r;
  function n() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && xd(t, s)), i;
  }
  return n._value = e, n;
}
function Sd(t, e) {
  var i = "attr." + t;
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (e == null) return this.tween(i, null);
  if (typeof e != "function") throw new Error();
  var r = Fr(t);
  return this.tween(i, (r.local ? Td : vd)(r, e));
}
function kd(t, e) {
  return function() {
    Kn(this, t).delay = +e.apply(this, arguments);
  };
}
function wd(t, e) {
  return e = +e, function() {
    Kn(this, t).delay = e;
  };
}
function Ad(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? kd : wd)(e, t)) : Mt(this.node(), e).delay;
}
function Bd(t, e) {
  return function() {
    Ht(this, t).duration = +e.apply(this, arguments);
  };
}
function Ed(t, e) {
  return e = +e, function() {
    Ht(this, t).duration = e;
  };
}
function Ld(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Bd : Ed)(e, t)) : Mt(this.node(), e).duration;
}
function Fd(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ht(this, t).ease = e;
  };
}
function Od(t) {
  var e = this._id;
  return arguments.length ? this.each(Fd(e, t)) : Mt(this.node(), e).ease;
}
function Id(t, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function") throw new Error();
    Ht(this, t).ease = i;
  };
}
function Md(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Id(this._id, t));
}
function $d(t) {
  typeof t != "function" && (t = Ca(t));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var s = e[n], o = s.length, a = r[n] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new te(r, this._parents, this._name, this._id);
}
function Dd(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, i = t._groups, r = e.length, n = i.length, s = Math.min(r, n), o = new Array(r), a = 0; a < s; ++a)
    for (var l = e[a], c = i[a], h = l.length, d = o[a] = new Array(h), u, f = 0; f < h; ++f)
      (u = l[f] || c[f]) && (d[f] = u);
  for (; a < r; ++a)
    o[a] = e[a];
  return new te(o, this._parents, this._name, this._id);
}
function Nd(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function Rd(t, e, i) {
  var r, n, s = Nd(e) ? Kn : Ht;
  return function() {
    var o = s(this, t), a = o.on;
    a !== r && (n = (r = a).copy()).on(e, i), o.on = n;
  };
}
function Pd(t, e) {
  var i = this._id;
  return arguments.length < 2 ? Mt(this.node(), i).on.on(t) : this.each(Rd(i, t, e));
}
function qd(t) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition) if (+i !== t) return;
    e && e.removeChild(this);
  };
}
function zd() {
  return this.on("end.remove", qd(this._id));
}
function Wd(t) {
  var e = this._name, i = this._id;
  typeof t != "function" && (t = jn(t));
  for (var r = this._groups, n = r.length, s = new Array(n), o = 0; o < n; ++o)
    for (var a = r[o], l = a.length, c = s[o] = new Array(l), h, d, u = 0; u < l; ++u)
      (h = a[u]) && (d = t.call(h, h.__data__, u, a)) && ("__data__" in h && (d.__data__ = h.__data__), c[u] = d, Ir(c[u], e, i, u, c, Mt(h, i)));
  return new te(s, this._parents, e, i);
}
function Yd(t) {
  var e = this._name, i = this._id;
  typeof t != "function" && (t = _a(t));
  for (var r = this._groups, n = r.length, s = [], o = [], a = 0; a < n; ++a)
    for (var l = r[a], c = l.length, h, d = 0; d < c; ++d)
      if (h = l[d]) {
        for (var u = t.call(h, h.__data__, d, l), f, m = Mt(h, i), y = 0, b = u.length; y < b; ++y)
          (f = u[y]) && Ir(f, e, i, y, u, m);
        s.push(u), o.push(h);
      }
  return new te(s, o, e, i);
}
var Hd = Ii.prototype.constructor;
function jd() {
  return new Hd(this._groups, this._parents);
}
function Ud(t, e) {
  var i, r, n;
  return function() {
    var s = qe(this, t), o = (this.style.removeProperty(t), qe(this, t));
    return s === o ? null : s === i && o === r ? n : n = e(i = s, r = o);
  };
}
function qa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Xd(t, e, i) {
  var r, n = i + "", s;
  return function() {
    var o = qe(this, t);
    return o === n ? null : o === r ? s : s = e(r = o, i);
  };
}
function Gd(t, e, i) {
  var r, n, s;
  return function() {
    var o = qe(this, t), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), qe(this, t))), o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a));
  };
}
function Vd(t, e) {
  var i, r, n, s = "style." + e, o = "end." + s, a;
  return function() {
    var l = Ht(this, t), c = l.on, h = l.value[s] == null ? a || (a = qa(e)) : void 0;
    (c !== i || n !== h) && (r = (i = c).copy()).on(o, n = h), l.on = r;
  };
}
function Kd(t, e, i) {
  var r = (t += "") == "transform" ? Qu : Pa;
  return e == null ? this.styleTween(t, Ud(t, r)).on("end.style." + t, qa(t)) : typeof e == "function" ? this.styleTween(t, Gd(t, r, Zn(this, "style." + t, e))).each(Vd(this._id, t)) : this.styleTween(t, Xd(t, r, e), i).on("end.style." + t, null);
}
function Zd(t, e, i) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), i);
  };
}
function Jd(t, e, i) {
  var r, n;
  function s() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && Zd(t, o, i)), r;
  }
  return s._value = e, s;
}
function Qd(t, e, i) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Jd(t, e, i ?? ""));
}
function tf(t) {
  return function() {
    this.textContent = t;
  };
}
function ef(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function rf(t) {
  return this.tween("text", typeof t == "function" ? ef(Zn(this, "text", t)) : tf(t == null ? "" : t + ""));
}
function nf(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function of(t) {
  var e, i;
  function r() {
    var n = t.apply(this, arguments);
    return n !== i && (e = (i = n) && nf(n)), e;
  }
  return r._value = t, r;
}
function sf(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, of(t));
}
function af() {
  for (var t = this._name, e = this._id, i = za(), r = this._groups, n = r.length, s = 0; s < n; ++s)
    for (var o = r[s], a = o.length, l, c = 0; c < a; ++c)
      if (l = o[c]) {
        var h = Mt(l, e);
        Ir(l, t, i, c, o, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new te(r, this._parents, t, i);
}
function lf() {
  var t, e, i = this, r = i._id, n = i.size();
  return new Promise(function(s, o) {
    var a = { value: o }, l = { value: function() {
      --n === 0 && s();
    } };
    i.each(function() {
      var c = Ht(this, r), h = c.on;
      h !== t && (e = (t = h).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), c.on = e;
    }), n === 0 && s();
  });
}
var cf = 0;
function te(t, e, i, r) {
  this._groups = t, this._parents = e, this._name = i, this._id = r;
}
function za() {
  return ++cf;
}
var Gt = Ii.prototype;
te.prototype = {
  constructor: te,
  select: Wd,
  selectAll: Yd,
  selectChild: Gt.selectChild,
  selectChildren: Gt.selectChildren,
  filter: $d,
  merge: Dd,
  selection: jd,
  transition: af,
  call: Gt.call,
  nodes: Gt.nodes,
  node: Gt.node,
  size: Gt.size,
  empty: Gt.empty,
  each: Gt.each,
  on: Pd,
  attr: Cd,
  attrTween: Sd,
  style: Kd,
  styleTween: Qd,
  text: rf,
  textTween: sf,
  remove: zd,
  tween: dd,
  delay: Ad,
  duration: Ld,
  ease: Od,
  easeVarying: Md,
  end: lf,
  [Symbol.iterator]: Gt[Symbol.iterator]
};
function hf(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var uf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: hf
};
function df(t, e) {
  for (var i; !(i = t.__transition) || !(i = i[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function ff(t) {
  var e, i;
  t instanceof te ? (e = t._id, t = t._name) : (e = za(), (i = uf).time = Vn(), t = t == null ? null : t + "");
  for (var r = this._groups, n = r.length, s = 0; s < n; ++s)
    for (var o = r[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && Ir(l, t, e, c, o, i || df(l, e));
  return new te(r, this._parents, t, e);
}
Ii.prototype.interrupt = cd;
Ii.prototype.transition = ff;
const R1 = Math.abs, P1 = Math.atan2, q1 = Math.cos, z1 = Math.max, W1 = Math.min, Y1 = Math.sin, H1 = Math.sqrt, us = 1e-12, Jn = Math.PI, ds = Jn / 2, j1 = 2 * Jn;
function U1(t) {
  return t > 1 ? 0 : t < -1 ? Jn : Math.acos(t);
}
function X1(t) {
  return t >= 1 ? ds : t <= -1 ? -ds : Math.asin(t);
}
function Wa(t) {
  this._context = t;
}
Wa.prototype = {
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
function pf(t) {
  return new Wa(t);
}
class Ya {
  constructor(e, i) {
    this._context = e, this._x = i;
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
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
}
function gf(t) {
  return new Ya(t, !0);
}
function mf(t) {
  return new Ya(t, !1);
}
function he() {
}
function pr(t, e, i) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + i) / 6
  );
}
function Mr(t) {
  this._context = t;
}
Mr.prototype = {
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
        pr(this, this._x1, this._y1);
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
        pr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function yf(t) {
  return new Mr(t);
}
function Ha(t) {
  this._context = t;
}
Ha.prototype = {
  areaStart: he,
  areaEnd: he,
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
        pr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function _f(t) {
  return new Ha(t);
}
function ja(t) {
  this._context = t;
}
ja.prototype = {
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
        var i = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        pr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
  }
};
function Cf(t) {
  return new ja(t);
}
function Ua(t, e) {
  this._basis = new Mr(t), this._beta = e;
}
Ua.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t = this._x, e = this._y, i = t.length - 1;
    if (i > 0)
      for (var r = t[0], n = e[0], s = t[i] - r, o = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t[a] + (1 - this._beta) * (r + l * s),
          this._beta * e[a] + (1 - this._beta) * (n + l * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
const xf = (function t(e) {
  function i(r) {
    return e === 1 ? new Mr(r) : new Ua(r, e);
  }
  return i.beta = function(r) {
    return t(+r);
  }, i;
})(0.85);
function gr(t, e, i) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - e),
    t._y2 + t._k * (t._y1 - i),
    t._x2,
    t._y2
  );
}
function Qn(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
Qn.prototype = {
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
        gr(this, this._x1, this._y1);
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
        gr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const bf = (function t(e) {
  function i(r) {
    return new Qn(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
})(0);
function to(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
to.prototype = {
  areaStart: he,
  areaEnd: he,
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
        gr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Tf = (function t(e) {
  function i(r) {
    return new to(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
})(0);
function eo(t, e) {
  this._context = t, this._k = (1 - e) / 6;
}
eo.prototype = {
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
        gr(this, t, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const vf = (function t(e) {
  function i(r) {
    return new eo(r, e);
  }
  return i.tension = function(r) {
    return t(+r);
  }, i;
})(0);
function io(t, e, i) {
  var r = t._x1, n = t._y1, s = t._x2, o = t._y2;
  if (t._l01_a > us) {
    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
    r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, n = (n * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
  }
  if (t._l23_a > us) {
    var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, h = 3 * t._l23_a * (t._l23_a + t._l12_a);
    s = (s * c + t._x1 * t._l23_2a - e * t._l12_2a) / h, o = (o * c + t._y1 * t._l23_2a - i * t._l12_2a) / h;
  }
  t._context.bezierCurveTo(r, n, s, o, t._x2, t._y2);
}
function Xa(t, e) {
  this._context = t, this._alpha = e;
}
Xa.prototype = {
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
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
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
        io(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const Sf = (function t(e) {
  function i(r) {
    return e ? new Xa(r, e) : new Qn(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
})(0.5);
function Ga(t, e) {
  this._context = t, this._alpha = e;
}
Ga.prototype = {
  areaStart: he,
  areaEnd: he,
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
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
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
        io(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const kf = (function t(e) {
  function i(r) {
    return e ? new Ga(r, e) : new to(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
})(0.5);
function Va(t, e) {
  this._context = t, this._alpha = e;
}
Va.prototype = {
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
      var i = this._x2 - t, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
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
        io(this, t, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
const wf = (function t(e) {
  function i(r) {
    return e ? new Va(r, e) : new eo(r, 0);
  }
  return i.alpha = function(r) {
    return t(+r);
  }, i;
})(0.5);
function Ka(t) {
  this._context = t;
}
Ka.prototype = {
  areaStart: he,
  areaEnd: he,
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
  return new Ka(t);
}
function fs(t) {
  return t < 0 ? -1 : 1;
}
function ps(t, e, i) {
  var r = t._x1 - t._x0, n = e - t._x1, s = (t._y1 - t._y0) / (r || n < 0 && -0), o = (i - t._y1) / (n || r < 0 && -0), a = (s * n + o * r) / (r + n);
  return (fs(s) + fs(o)) * Math.min(Math.abs(s), Math.abs(o), 0.5 * Math.abs(a)) || 0;
}
function gs(t, e) {
  var i = t._x1 - t._x0;
  return i ? (3 * (t._y1 - t._y0) / i - e) / 2 : e;
}
function an(t, e, i) {
  var r = t._x0, n = t._y0, s = t._x1, o = t._y1, a = (s - r) / 3;
  t._context.bezierCurveTo(r + a, n + a * e, s - a, o - a * i, s, o);
}
function mr(t) {
  this._context = t;
}
mr.prototype = {
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
        an(this, this._t0, gs(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    var i = NaN;
    if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, an(this, gs(this, i = ps(this, t, e)), i);
          break;
        default:
          an(this, this._t0, i = ps(this, t, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function Za(t) {
  this._context = new Ja(t);
}
(Za.prototype = Object.create(mr.prototype)).point = function(t, e) {
  mr.prototype.point.call(this, e, t);
};
function Ja(t) {
  this._context = t;
}
Ja.prototype = {
  moveTo: function(t, e) {
    this._context.moveTo(e, t);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t, e) {
    this._context.lineTo(e, t);
  },
  bezierCurveTo: function(t, e, i, r, n, s) {
    this._context.bezierCurveTo(e, t, r, i, s, n);
  }
};
function Bf(t) {
  return new mr(t);
}
function Ef(t) {
  return new Za(t);
}
function Qa(t) {
  this._context = t;
}
Qa.prototype = {
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
    var t = this._x, e = this._y, i = t.length;
    if (i)
      if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), i === 2)
        this._context.lineTo(t[1], e[1]);
      else
        for (var r = ms(t), n = ms(e), s = 0, o = 1; o < i; ++s, ++o)
          this._context.bezierCurveTo(r[0][s], n[0][s], r[1][s], n[1][s], t[o], e[o]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t, e) {
    this._x.push(+t), this._y.push(+e);
  }
};
function ms(t) {
  var e, i = t.length - 1, r, n = new Array(i), s = new Array(i), o = new Array(i);
  for (n[0] = 0, s[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e) n[e] = 1, s[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
  for (n[i - 1] = 2, s[i - 1] = 7, o[i - 1] = 8 * t[i - 1] + t[i], e = 1; e < i; ++e) r = n[e] / s[e - 1], s[e] -= r, o[e] -= r * o[e - 1];
  for (n[i - 1] = o[i - 1] / s[i - 1], e = i - 2; e >= 0; --e) n[e] = (o[e] - n[e + 1]) / s[e];
  for (s[i - 1] = (t[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e) s[e] = 2 * t[e + 1] - n[e + 1];
  return [n, s];
}
function Lf(t) {
  return new Qa(t);
}
function $r(t, e) {
  this._context = t, this._t = e;
}
$r.prototype = {
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
          var i = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function Ff(t) {
  return new $r(t, 0.5);
}
function Of(t) {
  return new $r(t, 0);
}
function If(t) {
  return new $r(t, 1);
}
function di(t, e, i) {
  this.k = t, this.x = e, this.y = i;
}
di.prototype = {
  constructor: di,
  scale: function(t) {
    return t === 1 ? this : new di(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new di(this.k, this.x + this.k * t, this.y + this.k * e);
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
di.prototype;
const rr = {
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
  hue2rgb: (t, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t),
  hsl2rgb: ({ h: t, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, s = 2 * i - n;
    switch (r) {
      case "r":
        return rr.hue2rgb(s, n, t + 1 / 3) * 255;
      case "g":
        return rr.hue2rgb(s, n, t) * 255;
      case "b":
        return rr.hue2rgb(s, n, t - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t, g: e, b: i }, r) => {
    t /= 255, e /= 255, i /= 255;
    const n = Math.max(t, e, i), s = Math.min(t, e, i), o = (n + s) / 2;
    if (r === "l")
      return o * 100;
    if (n === s)
      return 0;
    const a = n - s, l = o > 0.5 ? a / (2 - n - s) : a / (n + s);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t) / a + 2) * 60;
      case i:
        return ((t - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
}, Mf = {
  /* API */
  clamp: (t, e, i) => e > i ? Math.min(e, Math.max(i, t)) : Math.min(i, Math.max(e, t)),
  round: (t) => Math.round(t * 1e10) / 1e10
}, $f = {
  /* API */
  dec2hex: (t) => {
    const e = Math.round(t).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
}, q = {
  channel: rr,
  lang: Mf,
  unit: $f
}, se = {};
for (let t = 0; t <= 255; t++)
  se[t] = q.unit.dec2hex(t);
const st = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Df {
  constructor() {
    this.type = st.ALL;
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
    this.type = st.ALL;
  }
  is(e) {
    return this.type === e;
  }
}
class Nf {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = !1, this.data = e, this.type = new Df();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = !1, this.data = e, this.type.type = st.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = q.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = q.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = q.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = q.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = q.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = q.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(st.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(st.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(st.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(st.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(st.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(st.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(st.RGB), this.changed = !0, this.data.r = e;
  }
  set g(e) {
    this.type.set(st.RGB), this.changed = !0, this.data.g = e;
  }
  set b(e) {
    this.type.set(st.RGB), this.changed = !0, this.data.b = e;
  }
  set h(e) {
    this.type.set(st.HSL), this.changed = !0, this.data.h = e;
  }
  set s(e) {
    this.type.set(st.HSL), this.changed = !0, this.data.s = e;
  }
  set l(e) {
    this.type.set(st.HSL), this.changed = !0, this.data.l = e;
  }
  set a(e) {
    this.changed = !0, this.data.a = e;
  }
}
const Dr = new Nf({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Ne = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t) => {
    if (t.charCodeAt(0) !== 35)
      return;
    const e = t.match(Ne.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, s = n % 4 === 0, o = n > 4, a = o ? 1 : 17, l = o ? 8 : 4, c = s ? 0 : -1, h = o ? 255 : 15;
    return Dr.set({
      r: (r >> l * (c + 3) & h) * a,
      g: (r >> l * (c + 2) & h) * a,
      b: (r >> l * (c + 1) & h) * a,
      a: s ? (r & h) * a / 255 : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: i, b: r, a: n } = t;
    return n < 1 ? `#${se[Math.round(e)]}${se[Math.round(i)]}${se[Math.round(r)]}${se[Math.round(n * 255)]}` : `#${se[Math.round(e)]}${se[Math.round(i)]}${se[Math.round(r)]}`;
  }
}, _e = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t) => {
    const e = t.match(_e.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return q.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return q.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return q.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return q.channel.clamp.h(parseFloat(t));
  },
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t.match(_e.re);
    if (!i)
      return;
    const [, r, n, s, o, a] = i;
    return Dr.set({
      h: _e._hue2deg(r),
      s: q.channel.clamp.s(parseFloat(n)),
      l: q.channel.clamp.l(parseFloat(s)),
      a: o ? q.channel.clamp.a(a ? parseFloat(o) / 100 : parseFloat(o)) : 1
    }, t);
  },
  stringify: (t) => {
    const { h: e, s: i, l: r, a: n } = t;
    return n < 1 ? `hsla(${q.lang.round(e)}, ${q.lang.round(i)}%, ${q.lang.round(r)}%, ${n})` : `hsl(${q.lang.round(e)}, ${q.lang.round(i)}%, ${q.lang.round(r)}%)`;
  }
}, gi = {
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
    const e = gi.colors[t];
    if (e)
      return Ne.parse(e);
  },
  stringify: (t) => {
    const e = Ne.stringify(t);
    for (const i in gi.colors)
      if (gi.colors[i] === e)
        return i;
  }
}, fi = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t.match(fi.re);
    if (!i)
      return;
    const [, r, n, s, o, a, l, c, h] = i;
    return Dr.set({
      r: q.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: q.channel.clamp.g(o ? parseFloat(s) * 2.55 : parseFloat(s)),
      b: q.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: c ? q.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: i, b: r, a: n } = t;
    return n < 1 ? `rgba(${q.lang.round(e)}, ${q.lang.round(i)}, ${q.lang.round(r)}, ${q.lang.round(n)})` : `rgb(${q.lang.round(e)}, ${q.lang.round(i)}, ${q.lang.round(r)})`;
  }
}, zt = {
  /* VARIABLES */
  format: {
    keyword: gi,
    hex: Ne,
    rgb: fi,
    rgba: fi,
    hsl: _e,
    hsla: _e
  },
  /* API */
  parse: (t) => {
    if (typeof t != "string")
      return t;
    const e = Ne.parse(t) || fi.parse(t) || _e.parse(t) || gi.parse(t);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t}"`);
  },
  stringify: (t) => !t.changed && t.color ? t.color : t.type.is(st.HSL) || t.data.r === void 0 ? _e.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? fi.stringify(t) : Ne.stringify(t)
}, tl = (t, e) => {
  const i = zt.parse(t);
  for (const r in e)
    i[r] = q.channel.clamp[r](e[r]);
  return zt.stringify(i);
}, mi = (t, e, i = 0, r = 1) => {
  if (typeof t != "number")
    return tl(t, { a: e });
  const n = Dr.set({
    r: q.channel.clamp.r(t),
    g: q.channel.clamp.g(e),
    b: q.channel.clamp.b(i),
    a: q.channel.clamp.a(r)
  });
  return zt.stringify(n);
}, Rf = (t) => {
  const { r: e, g: i, b: r } = zt.parse(t), n = 0.2126 * q.channel.toLinear(e) + 0.7152 * q.channel.toLinear(i) + 0.0722 * q.channel.toLinear(r);
  return q.lang.round(n);
}, Pf = (t) => Rf(t) >= 0.5, $i = (t) => !Pf(t), el = (t, e, i) => {
  const r = zt.parse(t), n = r[e], s = q.channel.clamp[e](n + i);
  return n !== s && (r[e] = s), zt.stringify(r);
}, O = (t, e) => el(t, "l", e), D = (t, e) => el(t, "l", -e), g = (t, e) => {
  const i = zt.parse(t), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return tl(t, r);
}, qf = (t, e, i = 50) => {
  const { r, g: n, b: s, a: o } = zt.parse(t), { r: a, g: l, b: c, a: h } = zt.parse(e), d = i / 100, u = d * 2 - 1, f = o - h, y = ((u * f === -1 ? u : (u + f) / (1 + u * f)) + 1) / 2, b = 1 - y, E = r * y + a * b, T = n * y + l * b, _ = s * y + c * b, w = o * d + h * (1 - d);
  return mi(E, T, _, w);
}, v = (t, e = 100) => {
  const i = zt.parse(t);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, qf(i, t, e);
};
var il = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, zf = typeof self == "object" && self && self.Object === Object && self, jt = il || zf || Function("return this")(), yr = jt.Symbol, rl = Object.prototype, Wf = rl.hasOwnProperty, Yf = rl.toString, ri = yr ? yr.toStringTag : void 0;
function Hf(t) {
  var e = Wf.call(t, ri), i = t[ri];
  try {
    t[ri] = void 0;
    var r = !0;
  } catch {
  }
  var n = Yf.call(t);
  return r && (e ? t[ri] = i : delete t[ri]), n;
}
var jf = Object.prototype, Uf = jf.toString;
function Xf(t) {
  return Uf.call(t);
}
var Gf = "[object Null]", Vf = "[object Undefined]", ys = yr ? yr.toStringTag : void 0;
function Ve(t) {
  return t == null ? t === void 0 ? Vf : Gf : ys && ys in Object(t) ? Hf(t) : Xf(t);
}
function Se(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Kf = "[object AsyncFunction]", Zf = "[object Function]", Jf = "[object GeneratorFunction]", Qf = "[object Proxy]";
function ro(t) {
  if (!Se(t))
    return !1;
  var e = Ve(t);
  return e == Zf || e == Jf || e == Kf || e == Qf;
}
var ln = jt["__core-js_shared__"], _s = (function() {
  var t = /[^.]+$/.exec(ln && ln.keys && ln.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function tp(t) {
  return !!_s && _s in t;
}
var ep = Function.prototype, ip = ep.toString;
function ke(t) {
  if (t != null) {
    try {
      return ip.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var rp = /[\\^$.*+?()[\]{}|]/g, np = /^\[object .+?Constructor\]$/, op = Function.prototype, sp = Object.prototype, ap = op.toString, lp = sp.hasOwnProperty, cp = RegExp(
  "^" + ap.call(lp).replace(rp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hp(t) {
  if (!Se(t) || tp(t))
    return !1;
  var e = ro(t) ? cp : np;
  return e.test(ke(t));
}
function up(t, e) {
  return t?.[e];
}
function we(t, e) {
  var i = up(t, e);
  return hp(i) ? i : void 0;
}
var Ai = we(Object, "create");
function dp() {
  this.__data__ = Ai ? Ai(null) : {}, this.size = 0;
}
function fp(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var pp = "__lodash_hash_undefined__", gp = Object.prototype, mp = gp.hasOwnProperty;
function yp(t) {
  var e = this.__data__;
  if (Ai) {
    var i = e[t];
    return i === pp ? void 0 : i;
  }
  return mp.call(e, t) ? e[t] : void 0;
}
var _p = Object.prototype, Cp = _p.hasOwnProperty;
function xp(t) {
  var e = this.__data__;
  return Ai ? e[t] !== void 0 : Cp.call(e, t);
}
var bp = "__lodash_hash_undefined__";
function Tp(t, e) {
  var i = this.__data__;
  return this.size += this.has(t) ? 0 : 1, i[t] = Ai && e === void 0 ? bp : e, this;
}
function Te(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Te.prototype.clear = dp;
Te.prototype.delete = fp;
Te.prototype.get = yp;
Te.prototype.has = xp;
Te.prototype.set = Tp;
function vp() {
  this.__data__ = [], this.size = 0;
}
function Nr(t, e) {
  return t === e || t !== t && e !== e;
}
function Rr(t, e) {
  for (var i = t.length; i--; )
    if (Nr(t[i][0], e))
      return i;
  return -1;
}
var Sp = Array.prototype, kp = Sp.splice;
function wp(t) {
  var e = this.__data__, i = Rr(e, t);
  if (i < 0)
    return !1;
  var r = e.length - 1;
  return i == r ? e.pop() : kp.call(e, i, 1), --this.size, !0;
}
function Ap(t) {
  var e = this.__data__, i = Rr(e, t);
  return i < 0 ? void 0 : e[i][1];
}
function Bp(t) {
  return Rr(this.__data__, t) > -1;
}
function Ep(t, e) {
  var i = this.__data__, r = Rr(i, t);
  return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this;
}
function ee(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ee.prototype.clear = vp;
ee.prototype.delete = wp;
ee.prototype.get = Ap;
ee.prototype.has = Bp;
ee.prototype.set = Ep;
var Bi = we(jt, "Map");
function Lp() {
  this.size = 0, this.__data__ = {
    hash: new Te(),
    map: new (Bi || ee)(),
    string: new Te()
  };
}
function Fp(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Pr(t, e) {
  var i = t.__data__;
  return Fp(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function Op(t) {
  var e = Pr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Ip(t) {
  return Pr(this, t).get(t);
}
function Mp(t) {
  return Pr(this, t).has(t);
}
function $p(t, e) {
  var i = Pr(this, t), r = i.size;
  return i.set(t, e), this.size += i.size == r ? 0 : 1, this;
}
function de(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
de.prototype.clear = Lp;
de.prototype.delete = Op;
de.prototype.get = Ip;
de.prototype.has = Mp;
de.prototype.set = $p;
var Dp = "Expected a function";
function Di(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Dp);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], s = i.cache;
    if (s.has(n))
      return s.get(n);
    var o = t.apply(this, r);
    return i.cache = s.set(n, o) || s, o;
  };
  return i.cache = new (Di.Cache || de)(), i;
}
Di.Cache = de;
function Np() {
  this.__data__ = new ee(), this.size = 0;
}
function Rp(t) {
  var e = this.__data__, i = e.delete(t);
  return this.size = e.size, i;
}
function Pp(t) {
  return this.__data__.get(t);
}
function qp(t) {
  return this.__data__.has(t);
}
var zp = 200;
function Wp(t, e) {
  var i = this.__data__;
  if (i instanceof ee) {
    var r = i.__data__;
    if (!Bi || r.length < zp - 1)
      return r.push([t, e]), this.size = ++i.size, this;
    i = this.__data__ = new de(r);
  }
  return i.set(t, e), this.size = i.size, this;
}
function Ke(t) {
  var e = this.__data__ = new ee(t);
  this.size = e.size;
}
Ke.prototype.clear = Np;
Ke.prototype.delete = Rp;
Ke.prototype.get = Pp;
Ke.prototype.has = qp;
Ke.prototype.set = Wp;
var _r = (function() {
  try {
    var t = we(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})();
function no(t, e, i) {
  e == "__proto__" && _r ? _r(t, e, {
    configurable: !0,
    enumerable: !0,
    value: i,
    writable: !0
  }) : t[e] = i;
}
function Bn(t, e, i) {
  (i !== void 0 && !Nr(t[e], i) || i === void 0 && !(e in t)) && no(t, e, i);
}
function Yp(t) {
  return function(e, i, r) {
    for (var n = -1, s = Object(e), o = r(e), a = o.length; a--; ) {
      var l = o[++n];
      if (i(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var Hp = Yp(), nl = typeof exports == "object" && exports && !exports.nodeType && exports, Cs = nl && typeof module == "object" && module && !module.nodeType && module, jp = Cs && Cs.exports === nl, xs = jp ? jt.Buffer : void 0, bs = xs ? xs.allocUnsafe : void 0;
function Up(t, e) {
  if (e)
    return t.slice();
  var i = t.length, r = bs ? bs(i) : new t.constructor(i);
  return t.copy(r), r;
}
var Ts = jt.Uint8Array;
function Xp(t) {
  var e = new t.constructor(t.byteLength);
  return new Ts(e).set(new Ts(t)), e;
}
function Gp(t, e) {
  var i = e ? Xp(t.buffer) : t.buffer;
  return new t.constructor(i, t.byteOffset, t.length);
}
function Vp(t, e) {
  var i = -1, r = t.length;
  for (e || (e = Array(r)); ++i < r; )
    e[i] = t[i];
  return e;
}
var vs = Object.create, Kp = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!Se(e))
      return {};
    if (vs)
      return vs(e);
    t.prototype = e;
    var i = new t();
    return t.prototype = void 0, i;
  };
})();
function ol(t, e) {
  return function(i) {
    return t(e(i));
  };
}
var sl = ol(Object.getPrototypeOf, Object), Zp = Object.prototype;
function qr(t) {
  var e = t && t.constructor, i = typeof e == "function" && e.prototype || Zp;
  return t === i;
}
function Jp(t) {
  return typeof t.constructor == "function" && !qr(t) ? Kp(sl(t)) : {};
}
function Ni(t) {
  return t != null && typeof t == "object";
}
var Qp = "[object Arguments]";
function Ss(t) {
  return Ni(t) && Ve(t) == Qp;
}
var al = Object.prototype, tg = al.hasOwnProperty, eg = al.propertyIsEnumerable, Cr = Ss(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ss : function(t) {
  return Ni(t) && tg.call(t, "callee") && !eg.call(t, "callee");
}, xr = Array.isArray, ig = 9007199254740991;
function ll(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ig;
}
function zr(t) {
  return t != null && ll(t.length) && !ro(t);
}
function rg(t) {
  return Ni(t) && zr(t);
}
function ng() {
  return !1;
}
var cl = typeof exports == "object" && exports && !exports.nodeType && exports, ks = cl && typeof module == "object" && module && !module.nodeType && module, og = ks && ks.exports === cl, ws = og ? jt.Buffer : void 0, sg = ws ? ws.isBuffer : void 0, oo = sg || ng, ag = "[object Object]", lg = Function.prototype, cg = Object.prototype, hl = lg.toString, hg = cg.hasOwnProperty, ug = hl.call(Object);
function dg(t) {
  if (!Ni(t) || Ve(t) != ag)
    return !1;
  var e = sl(t);
  if (e === null)
    return !0;
  var i = hg.call(e, "constructor") && e.constructor;
  return typeof i == "function" && i instanceof i && hl.call(i) == ug;
}
var fg = "[object Arguments]", pg = "[object Array]", gg = "[object Boolean]", mg = "[object Date]", yg = "[object Error]", _g = "[object Function]", Cg = "[object Map]", xg = "[object Number]", bg = "[object Object]", Tg = "[object RegExp]", vg = "[object Set]", Sg = "[object String]", kg = "[object WeakMap]", wg = "[object ArrayBuffer]", Ag = "[object DataView]", Bg = "[object Float32Array]", Eg = "[object Float64Array]", Lg = "[object Int8Array]", Fg = "[object Int16Array]", Og = "[object Int32Array]", Ig = "[object Uint8Array]", Mg = "[object Uint8ClampedArray]", $g = "[object Uint16Array]", Dg = "[object Uint32Array]", Z = {};
Z[Bg] = Z[Eg] = Z[Lg] = Z[Fg] = Z[Og] = Z[Ig] = Z[Mg] = Z[$g] = Z[Dg] = !0;
Z[fg] = Z[pg] = Z[wg] = Z[gg] = Z[Ag] = Z[mg] = Z[yg] = Z[_g] = Z[Cg] = Z[xg] = Z[bg] = Z[Tg] = Z[vg] = Z[Sg] = Z[kg] = !1;
function Ng(t) {
  return Ni(t) && ll(t.length) && !!Z[Ve(t)];
}
function Rg(t) {
  return function(e) {
    return t(e);
  };
}
var ul = typeof exports == "object" && exports && !exports.nodeType && exports, yi = ul && typeof module == "object" && module && !module.nodeType && module, Pg = yi && yi.exports === ul, cn = Pg && il.process, As = (function() {
  try {
    var t = yi && yi.require && yi.require("util").types;
    return t || cn && cn.binding && cn.binding("util");
  } catch {
  }
})(), Bs = As && As.isTypedArray, so = Bs ? Rg(Bs) : Ng;
function En(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var qg = Object.prototype, zg = qg.hasOwnProperty;
function Wg(t, e, i) {
  var r = t[e];
  (!(zg.call(t, e) && Nr(r, i)) || i === void 0 && !(e in t)) && no(t, e, i);
}
function Yg(t, e, i, r) {
  var n = !i;
  i || (i = {});
  for (var s = -1, o = e.length; ++s < o; ) {
    var a = e[s], l = void 0;
    l === void 0 && (l = t[a]), n ? no(i, a, l) : Wg(i, a, l);
  }
  return i;
}
function Hg(t, e) {
  for (var i = -1, r = Array(t); ++i < t; )
    r[i] = e(i);
  return r;
}
var jg = 9007199254740991, Ug = /^(?:0|[1-9]\d*)$/;
function dl(t, e) {
  var i = typeof t;
  return e = e ?? jg, !!e && (i == "number" || i != "symbol" && Ug.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var Xg = Object.prototype, Gg = Xg.hasOwnProperty;
function Vg(t, e) {
  var i = xr(t), r = !i && Cr(t), n = !i && !r && oo(t), s = !i && !r && !n && so(t), o = i || r || n || s, a = o ? Hg(t.length, String) : [], l = a.length;
  for (var c in t)
    (e || Gg.call(t, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    dl(c, l))) && a.push(c);
  return a;
}
function Kg(t) {
  var e = [];
  if (t != null)
    for (var i in Object(t))
      e.push(i);
  return e;
}
var Zg = Object.prototype, Jg = Zg.hasOwnProperty;
function Qg(t) {
  if (!Se(t))
    return Kg(t);
  var e = qr(t), i = [];
  for (var r in t)
    r == "constructor" && (e || !Jg.call(t, r)) || i.push(r);
  return i;
}
function fl(t) {
  return zr(t) ? Vg(t, !0) : Qg(t);
}
function tm(t) {
  return Yg(t, fl(t));
}
function em(t, e, i, r, n, s, o) {
  var a = En(t, i), l = En(e, i), c = o.get(l);
  if (c) {
    Bn(t, i, c);
    return;
  }
  var h = s ? s(a, l, i + "", t, e, o) : void 0, d = h === void 0;
  if (d) {
    var u = xr(l), f = !u && oo(l), m = !u && !f && so(l);
    h = l, u || f || m ? xr(a) ? h = a : rg(a) ? h = Vp(a) : f ? (d = !1, h = Up(l, !0)) : m ? (d = !1, h = Gp(l, !0)) : h = [] : dg(l) || Cr(l) ? (h = a, Cr(a) ? h = tm(a) : (!Se(a) || ro(a)) && (h = Jp(l))) : d = !1;
  }
  d && (o.set(l, h), n(h, l, r, s, o), o.delete(l)), Bn(t, i, h);
}
function pl(t, e, i, r, n) {
  t !== e && Hp(e, function(s, o) {
    if (n || (n = new Ke()), Se(s))
      em(t, e, o, i, pl, r, n);
    else {
      var a = r ? r(En(t, o), s, o + "", t, e, n) : void 0;
      a === void 0 && (a = s), Bn(t, o, a);
    }
  }, fl);
}
function gl(t) {
  return t;
}
function im(t, e, i) {
  switch (i.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, i[0]);
    case 2:
      return t.call(e, i[0], i[1]);
    case 3:
      return t.call(e, i[0], i[1], i[2]);
  }
  return t.apply(e, i);
}
var Es = Math.max;
function rm(t, e, i) {
  return e = Es(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, s = Es(r.length - e, 0), o = Array(s); ++n < s; )
      o[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(o), im(t, this, a);
  };
}
function nm(t) {
  return function() {
    return t;
  };
}
var om = _r ? function(t, e) {
  return _r(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: nm(e),
    writable: !0
  });
} : gl, sm = 800, am = 16, lm = Date.now;
function cm(t) {
  var e = 0, i = 0;
  return function() {
    var r = lm(), n = am - (r - i);
    if (i = r, n > 0) {
      if (++e >= sm)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var hm = cm(om);
function um(t, e) {
  return hm(rm(t, e, gl), t + "");
}
function dm(t, e, i) {
  if (!Se(i))
    return !1;
  var r = typeof e;
  return (r == "number" ? zr(i) && dl(e, i.length) : r == "string" && e in i) ? Nr(i[e], t) : !1;
}
function fm(t) {
  return um(function(e, i) {
    var r = -1, n = i.length, s = n > 1 ? i[n - 1] : void 0, o = n > 2 ? i[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (n--, s) : void 0, o && dm(i[0], i[1], o) && (s = n < 3 ? void 0 : s, n = 1), e = Object(e); ++r < n; ) {
      var a = i[r];
      a && t(e, a, r, s);
    }
    return e;
  });
}
var pm = fm(function(t, e, i) {
  pl(t, e, i);
}), ml = "comm", yl = "rule", _l = "decl", gm = "@import", mm = "@namespace", ym = "@keyframes", _m = "@layer", Cm = Math.abs, _i = String.fromCharCode;
function Cl(t) {
  return t.trim();
}
function Ln(t, e, i) {
  return t.replace(e, i);
}
function Re(t, e) {
  return t.charCodeAt(e) | 0;
}
function We(t, e, i) {
  return t.slice(e, i);
}
function Rt(t) {
  return t.length;
}
function xm(t) {
  return t.length;
}
function Xi(t, e) {
  return e.push(t), t;
}
var Wr = 1, Ye = 1, xl = 0, kt = 0, Q = 0, Ze = "";
function ao(t, e, i, r, n, s, o, a) {
  return { value: t, root: e, parent: i, type: r, props: n, children: s, line: Wr, column: Ye, length: o, return: "", siblings: a };
}
function bm() {
  return Q;
}
function Tm() {
  return Q = kt > 0 ? Re(Ze, --kt) : 0, Ye--, Q === 10 && (Ye = 1, Wr--), Q;
}
function It() {
  return Q = kt < xl ? Re(Ze, kt++) : 0, Ye++, Q === 10 && (Ye = 1, Wr++), Q;
}
function le() {
  return Re(Ze, kt);
}
function nr() {
  return kt;
}
function Yr(t, e) {
  return We(Ze, t, e);
}
function Ei(t) {
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
function vm(t) {
  return Wr = Ye = 1, xl = Rt(Ze = t), kt = 0, [];
}
function Sm(t) {
  return Ze = "", t;
}
function hn(t) {
  return Cl(Yr(kt - 1, Fn(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function km(t) {
  for (; (Q = le()) && Q < 33; )
    It();
  return Ei(t) > 2 || Ei(Q) > 3 ? "" : " ";
}
function wm(t, e) {
  for (; --e && It() && !(Q < 48 || Q > 102 || Q > 57 && Q < 65 || Q > 70 && Q < 97); )
    ;
  return Yr(t, nr() + (e < 6 && le() == 32 && It() == 32));
}
function Fn(t) {
  for (; It(); )
    switch (Q) {
      // ] ) " '
      case t:
        return kt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Fn(Q);
        break;
      // (
      case 40:
        t === 41 && Fn(t);
        break;
      // \
      case 92:
        It();
        break;
    }
  return kt;
}
function Am(t, e) {
  for (; It() && t + Q !== 57; )
    if (t + Q === 84 && le() === 47)
      break;
  return "/*" + Yr(e, kt - 1) + "*" + _i(t === 47 ? t : It());
}
function Bm(t) {
  for (; !Ei(le()); )
    It();
  return Yr(t, kt);
}
function Em(t) {
  return Sm(or("", null, null, null, [""], t = vm(t), 0, [0], t));
}
function or(t, e, i, r, n, s, o, a, l) {
  for (var c = 0, h = 0, d = o, u = 0, f = 0, m = 0, y = 1, b = 1, E = 1, T = 0, _ = 0, w = "", A = n, Y = s, G = r, N = w; b; )
    switch (m = _, _ = It()) {
      // (
      case 40:
        m != 108 && Re(N, d - 1) == 58 ? (T++, N += "(") : N += hn(_);
        break;
      // )
      case 41:
        T--, N += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        N += hn(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (T > 0) {
          N += _i(_);
          break;
        }
        N += km(m);
        break;
      // \
      case 92:
        N += wm(nr() - 1, 7);
        continue;
      // /
      case 47:
        switch (le()) {
          case 42:
          case 47:
            Xi(Lm(Am(It(), nr()), e, i, l), l), (Ei(m || 1) == 5 || Ei(le() || 1) == 5) && Rt(N) && We(N, -1, void 0) !== " " && (N += " ");
            break;
          default:
            N += "/";
        }
        break;
      // {
      case 123 * y:
        a[c++] = Rt(N) * E;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        if (T > 0 && _) {
          N += _i(_);
          break;
        }
        switch (_) {
          // \0 }
          case 0:
          case 125:
            b = 0;
          // ;
          case 59 + h:
            E == -1 && (N = Ln(N, /\f/g, "")), f > 0 && (Rt(N) - d || y === 0) && Xi(f > 32 ? Fs(N + ";", r, i, d - 1, l) : Fs(Ln(N, " ", "") + ";", r, i, d - 2, l), l);
            break;
          // @ ;
          case 59:
            N += ";";
          // { rule/at-rule
          default:
            if (Xi(G = Ls(N, e, i, c, h, n, a, w, A = [], Y = [], d, s), s), _ === 123)
              if (h === 0)
                or(N, e, G, G, A, s, d, a, Y);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (Re(N, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Re(N, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? or(t, G, G, r && Xi(Ls(t, G, G, 0, 0, n, a, w, n, A = [], d, Y), Y), n, Y, d, a, r ? A : Y) : or(N, G, G, G, [""], Y, 0, a, Y);
              }
        }
        c = h = f = 0, y = E = 1, w = N = "", d = o;
        break;
      // :
      case 58:
        d = 1 + Rt(N), f = m;
      default:
        if (y < 1) {
          if (_ == 123)
            --y;
          else if (_ == 125 && y++ == 0 && Tm() == 125)
            continue;
        }
        switch (N += _i(_), _ * y) {
          // &
          case 38:
            E = h > 0 ? 1 : (N += "\f", -1);
            break;
          // ,
          case 44:
            if (T > 0) break;
            a[c++] = (Rt(N) - 1) * E, E = 1;
            break;
          // @
          case 64:
            le() === 45 && (N += hn(It())), u = le(), h = d = Rt(w = N += Bm(nr())), _++;
            break;
          // -
          case 45:
            m === 45 && Rt(N) == 2 && (y = 0);
        }
    }
  return s;
}
function Ls(t, e, i, r, n, s, o, a, l, c, h, d) {
  for (var u = n - 1, f = n === 0 ? s : [""], m = xm(f), y = 0, b = 0, E = 0; y < r; ++y)
    for (var T = 0, _ = We(t, u + 1, u = Cm(b = o[y])), w = t; T < m; ++T)
      (w = Cl(b > 0 ? f[T] + " " + _ : Ln(_, /&\f/g, f[T]))) && (l[E++] = w);
  return ao(t, e, i, n === 0 ? yl : a, l, c, h, d);
}
function Lm(t, e, i, r) {
  return ao(t, e, i, ml, _i(bm()), We(t, 2, -2), 0, r);
}
function Fs(t, e, i, r, n) {
  return ao(t, e, i, _l, We(t, 0, r), We(t, r + 1, -1), r, n);
}
function On(t, e) {
  for (var i = "", r = 0; r < t.length; r++)
    i += e(t[r], r, t, e) || "";
  return i;
}
function Fm(t, e, i, r) {
  switch (t.type) {
    case _m:
      if (t.children.length) break;
    case gm:
    case mm:
    case _l:
      return t.return = t.return || t.value;
    case ml:
      return "";
    case ym:
      return t.return = t.value + "{" + On(t.children, r) + "}";
    case yl:
      if (!Rt(t.value = t.props.join(","))) return "";
  }
  return Rt(i = On(t.children, r)) ? t.return = t.value + "{" + i + "}" : "";
}
var Om = ol(Object.keys, Object), Im = Object.prototype, Mm = Im.hasOwnProperty;
function $m(t) {
  if (!qr(t))
    return Om(t);
  var e = [];
  for (var i in Object(t))
    Mm.call(t, i) && i != "constructor" && e.push(i);
  return e;
}
var In = we(jt, "DataView"), Mn = we(jt, "Promise"), $n = we(jt, "Set"), Dn = we(jt, "WeakMap"), Os = "[object Map]", Dm = "[object Object]", Is = "[object Promise]", Ms = "[object Set]", $s = "[object WeakMap]", Ds = "[object DataView]", Nm = ke(In), Rm = ke(Bi), Pm = ke(Mn), qm = ke($n), zm = ke(Dn), pe = Ve;
(In && pe(new In(new ArrayBuffer(1))) != Ds || Bi && pe(new Bi()) != Os || Mn && pe(Mn.resolve()) != Is || $n && pe(new $n()) != Ms || Dn && pe(new Dn()) != $s) && (pe = function(t) {
  var e = Ve(t), i = e == Dm ? t.constructor : void 0, r = i ? ke(i) : "";
  if (r)
    switch (r) {
      case Nm:
        return Ds;
      case Rm:
        return Os;
      case Pm:
        return Is;
      case qm:
        return Ms;
      case zm:
        return $s;
    }
  return e;
});
var Wm = "[object Map]", Ym = "[object Set]", Hm = Object.prototype, jm = Hm.hasOwnProperty;
function un(t) {
  if (t == null)
    return !0;
  if (zr(t) && (xr(t) || typeof t == "string" || typeof t.splice == "function" || oo(t) || so(t) || Cr(t)))
    return !t.length;
  var e = pe(t);
  if (e == Wm || e == Ym)
    return !t.size;
  if (qr(t))
    return !$m(t).length;
  for (var i in t)
    if (jm.call(t, i))
      return !1;
  return !0;
}
const Hr = 20, Um = {
  rect: "rectangle",
  circle: "ellipse"
}, Ns = {
  startOnLoad: !1,
  flowchart: { curve: "linear" },
  themeVariables: {
    // Multiplying by 1.25 to increase the font size by 25% and render correctly in Excalidraw
    fontSize: `${Hr * 1.25}px`
  },
  maxEdges: 500,
  maxTextSize: 5e4
};
class jr {
  constructor({ converter: e }) {
    this.convert = (i, r) => this.converter(i, {
      ...r,
      fontSize: r.fontSize || Hr
    }), this.converter = e;
  }
}
var me;
(function(t) {
  t.ROUND = "round", t.STADIUM = "stadium", t.DOUBLECIRCLE = "doublecircle", t.CIRCLE = "circle", t.DIAMOND = "diamond";
})(me || (me = {}));
var Nn;
(function(t) {
  t.COLOR = "color";
})(Nn || (Nn = {}));
var Ie;
(function(t) {
  t.FILL = "fill", t.STROKE = "stroke", t.STROKE_WIDTH = "stroke-width", t.STROKE_DASHARRAY = "stroke-dasharray";
})(Ie || (Ie = {}));
var ni = {}, Rs;
function Xm() {
  if (Rs) return ni;
  Rs = 1, Object.defineProperty(ni, "__esModule", { value: !0 }), ni.removeMarkdown = void 0;
  var t = function(e, i) {
    i === void 0 && (i = {
      listUnicodeChar: ""
    }), i = i || {}, i.listUnicodeChar = i.hasOwnProperty("listUnicodeChar") ? i.listUnicodeChar : !1, i.stripListLeaders = i.hasOwnProperty("stripListLeaders") ? i.stripListLeaders : !0, i.gfm = i.hasOwnProperty("gfm") ? i.gfm : !0, i.useImgAltText = i.hasOwnProperty("useImgAltText") ? i.useImgAltText : !0, i.preserveLinks = i.hasOwnProperty("preserveLinks") ? i.preserveLinks : !1;
    var r = e || "";
    r = r.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
    try {
      i.stripListLeaders && (i.listUnicodeChar ? r = r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, i.listUnicodeChar + " $1") : r = r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")), i.gfm && (r = r.replace(/\n={2,}/g, `
`).replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "")), i.preserveLinks && (r = r.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")), r = r.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, i.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, `

`).replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, `

`);
    } catch (n) {
      return console.error(n), e;
    }
    return r;
  };
  return ni.removeMarkdown = t, ni;
}
var Gm = Xm();
const Vm = {
  arrow_circle: {
    endArrowhead: "dot"
  },
  arrow_cross: {
    endArrowhead: "bar"
  },
  arrow_open: {
    endArrowhead: null,
    startArrowhead: null
  },
  double_arrow_circle: {
    endArrowhead: "dot",
    startArrowhead: "dot"
  },
  double_arrow_cross: {
    endArrowhead: "bar",
    startArrowhead: "bar"
  },
  double_arrow_point: {
    endArrowhead: "arrow",
    startArrowhead: "arrow"
  }
}, Km = (t) => Vm[t], Gi = (t) => {
  let e = t.text;
  return t.labelType === "markdown" && (e = Gm.removeMarkdown(t.text)), Zm(e);
}, Zm = (t) => {
  const e = /\s?(fa|fab):[a-zA-Z0-9-]+/g;
  return t.replace(e, "");
}, Jm = (t) => {
  const e = {};
  return Object.keys(t).forEach((i) => {
    switch (i) {
      case Ie.FILL: {
        e.backgroundColor = t[i], e.fillStyle = "solid";
        break;
      }
      case Ie.STROKE: {
        e.strokeColor = t[i];
        break;
      }
      case Ie.STROKE_WIDTH: {
        e.strokeWidth = Number(t[i]?.split("px")[0]);
        break;
      }
      case Ie.STROKE_DASHARRAY: {
        e.strokeStyle = "dashed";
        break;
      }
    }
  }), e;
}, Qm = (t) => {
  const e = {};
  return Object.keys(t).forEach((i) => {
    i === Nn.COLOR && (e.strokeColor = t[i]);
  }), e;
}, t0 = (t) => {
  const e = {};
  t.subGraphs.map((r) => {
    r.nodeIds.forEach((n) => {
      e[r.id] = {
        id: r.id,
        parent: null,
        isLeaf: !1
      }, e[n] = {
        id: n,
        parent: r.id,
        isLeaf: t.vertices[n] !== void 0
      };
    });
  });
  const i = {};
  return [...Object.keys(t.vertices), ...t.subGraphs.map((r) => r.id)].forEach((r) => {
    if (!e[r])
      return;
    let n = e[r];
    const s = [];
    for (n.isLeaf || s.push(`subgraph_group_${n.id}`); n.parent; )
      s.push(`subgraph_group_${n.parent}`), n = e[n.parent];
    i[r] = s;
  }), {
    getGroupIds: (r) => i[r] || [],
    getParentId: (r) => e[r] ? e[r].parent : null
  };
}, e0 = new jr({
  converter: (t, e) => {
    const i = [], r = e.fontSize, { getGroupIds: n, getParentId: s } = t0(t);
    return t.subGraphs.reverse().forEach((o) => {
      const a = n(o.id), l = {
        id: o.id,
        type: "rectangle",
        groupIds: a,
        x: o.x,
        y: o.y,
        width: o.width,
        height: o.height,
        label: {
          groupIds: a,
          text: Gi(o),
          fontSize: r,
          verticalAlign: "top"
        }
      };
      i.push(l);
    }), Object.values(t.vertices).forEach((o) => {
      if (!o)
        return;
      const a = n(o.id), l = Jm(o.containerStyle), c = Qm(o.labelStyle);
      let h = {
        id: o.id,
        type: "rectangle",
        groupIds: a,
        x: o.x,
        y: o.y,
        width: o.width,
        height: o.height,
        strokeWidth: 2,
        label: {
          groupIds: a,
          text: Gi(o),
          fontSize: r,
          ...c
        },
        link: o.link || null,
        ...l
      };
      switch (o.type) {
        case me.STADIUM: {
          h = { ...h, roundness: { type: 3 } };
          break;
        }
        case me.ROUND: {
          h = { ...h, roundness: { type: 3 } };
          break;
        }
        case me.DOUBLECIRCLE: {
          a.push(`doublecircle_${o.id}}`);
          const u = {
            type: "ellipse",
            groupIds: a,
            x: o.x + 5,
            y: o.y + 5,
            width: o.width - 10,
            height: o.height - 10,
            strokeWidth: 2,
            roundness: { type: 3 },
            label: {
              groupIds: a,
              text: Gi(o),
              fontSize: r
            }
          };
          h = { ...h, groupIds: a, type: "ellipse" }, i.push(u);
          break;
        }
        case me.CIRCLE: {
          h.type = "ellipse";
          break;
        }
        case me.DIAMOND: {
          h.type = "diamond";
          break;
        }
      }
      i.push(h);
    }), t.edges.forEach((o) => {
      let a = [];
      const l = s(o.start), c = s(o.end);
      l && l === c && (a = n(l));
      const { startX: h, startY: d, reflectionPoints: u } = o, f = u.map((_) => [
        _.x - u[0].x,
        _.y - u[0].y
      ]), m = Km(o.type), b = {
        id: `${o.start}_${o.end}`,
        type: "arrow",
        groupIds: a,
        x: h,
        y: d,
        // 4 and 2 are the Excalidraw's stroke width of thick and thin respectively
        // TODO: use constant exported from Excalidraw package
        strokeWidth: o.stroke === "thick" ? 4 : 2,
        strokeStyle: o.stroke === "dotted" ? "dashed" : void 0,
        points: f,
        ...o.text ? { label: { text: Gi(o), fontSize: r, groupIds: a } } : {},
        roundness: {
          type: 2
        },
        ...m
      }, E = i.find((_) => _.id === o.start), T = i.find((_) => _.id === o.end);
      !E || !T || (b.start = {
        id: E.id || ""
      }, b.end = {
        id: T.id || ""
      }, i.push(b));
    }), {
      elements: i
    };
  }
});
let Jt = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, i) => (i &= 63, i < 36 ? e += i.toString(36) : i < 62 ? e += (i - 26).toString(36).toUpperCase() : i > 62 ? e += "-" : e += "_", e), "");
const i0 = new jr({
  converter: (t) => {
    const e = Jt(), { width: i, height: r } = t, n = {
      type: "image",
      x: 0,
      y: 0,
      width: i,
      height: r,
      status: "saved",
      fileId: e
    };
    return { files: {
      [e]: {
        id: e,
        mimeType: t.mimeType,
        dataURL: t.dataURL
      }
    }, elements: [n] };
  }
}), lo = (t) => t.replace(/\\n/g, `
`), Ci = (t) => {
  const e = {
    type: "line",
    x: t.startX,
    y: t.startY,
    points: [
      [0, 0],
      [t.endX - t.startX, t.endY - t.startY]
    ],
    width: t.endX - t.startX,
    height: t.endY - t.startY,
    strokeStyle: t.strokeStyle || "solid",
    strokeColor: t.strokeColor || "#000",
    strokeWidth: t.strokeWidth || 1
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), t.id && Object.assign(e, { id: t.id }), e;
}, br = (t) => {
  const e = {
    type: "text",
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height,
    text: lo(t.text) || "",
    fontSize: t.fontSize,
    verticalAlign: "middle"
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), t.id && Object.assign(e, { id: t.id }), e;
}, pi = (t) => {
  let e = {};
  t.type === "rectangle" && t.subtype === "activation" && (e = {
    backgroundColor: "#e9ecef",
    fillStyle: "solid"
  });
  const i = {
    id: t.id,
    type: t.type,
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height,
    label: {
      text: lo(t?.label?.text || ""),
      fontSize: t?.label?.fontSize,
      verticalAlign: t.label?.verticalAlign || "middle",
      strokeColor: t.label?.color || "#000",
      groupIds: t.groupId ? [t.groupId] : []
    },
    strokeStyle: t?.strokeStyle,
    strokeWidth: t?.strokeWidth,
    strokeColor: t?.strokeColor,
    backgroundColor: t?.bgColor,
    fillStyle: "solid",
    ...e
  };
  return t.groupId && Object.assign(i, { groupIds: [t.groupId] }), i;
}, bl = (t) => {
  const e = {
    type: "arrow",
    x: t.startX,
    y: t.startY,
    points: t.points || [
      [0, 0],
      [t.endX - t.startX, t.endY - t.startY]
    ],
    width: t.endX - t.startX,
    height: t.endY - t.startY,
    strokeStyle: t?.strokeStyle || "solid",
    endArrowhead: t?.endArrowhead || null,
    startArrowhead: t?.startArrowhead || null,
    label: {
      text: lo(t?.label?.text || ""),
      fontSize: 16
    },
    roundness: {
      type: 2
    },
    start: t.start,
    end: t.end
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), e;
}, r0 = new jr({
  converter: (t) => {
    const e = [], i = [];
    if (Object.values(t.nodes).forEach((r) => {
      !r || !r.length || r.forEach((n) => {
        let s;
        switch (n.type) {
          case "line":
            s = Ci(n);
            break;
          case "rectangle":
          case "ellipse":
            s = pi(n);
            break;
          case "text":
            s = br(n);
            break;
          default:
            throw `unknown type ${n.type}`;
        }
        n.type === "rectangle" && n?.subtype === "activation" ? i.push(s) : e.push(s);
      });
    }), Object.values(t.lines).forEach((r) => {
      r && e.push(Ci(r));
    }), Object.values(t.arrows).forEach((r) => {
      r && (e.push(bl(r)), r.sequenceNumber && e.push(pi(r.sequenceNumber)));
    }), e.push(...i), t.loops) {
      const { lines: r, texts: n, nodes: s } = t.loops;
      r.forEach((o) => {
        e.push(Ci(o));
      }), n.forEach((o) => {
        e.push(br(o));
      }), s.forEach((o) => {
        e.push(pi(o));
      });
    }
    return t.groups && t.groups.forEach((r) => {
      const { actorKeys: n, name: s } = r;
      let o = 1 / 0, a = 1 / 0, l = 0, c = 0;
      if (!n.length)
        return;
      e.filter((A) => {
        if (A.id) {
          const Y = A.id.indexOf("-"), G = A.id.substring(0, Y);
          return n.includes(G);
        }
      }).forEach((A) => {
        if (A.x === void 0 || A.y === void 0 || A.width === void 0 || A.height === void 0)
          throw new Error(`Actor attributes missing ${A}`);
        o = Math.min(o, A.x), a = Math.min(a, A.y), l = Math.max(l, A.x + A.width), c = Math.max(c, A.y + A.height);
      });
      const d = 10, u = o - d, f = a - d, m = l - o + d * 2, y = c - a + d * 2, b = Jt(), E = pi({
        type: "rectangle",
        x: u,
        y: f,
        width: m,
        height: y,
        bgColor: r.fill,
        id: b
      });
      e.unshift(E);
      const T = Jt(), _ = [b];
      e.forEach((A) => {
        if (A.type !== "frame") {
          if (A.x === void 0 || A.y === void 0 || A.width === void 0 || A.height === void 0)
            throw new Error(`Element attributes missing ${A}`);
          if (A.x >= o && A.x + A.width <= l && A.y >= a && A.y + A.height <= c) {
            const Y = A.id || Jt();
            A.id || Object.assign(A, { id: Y }), _.push(Y);
          }
        }
      });
      const w = {
        type: "frame",
        id: T,
        name: s,
        children: _
      };
      e.push(w);
    }), { elements: e };
  }
}), n0 = new jr({
  converter: (t) => {
    const e = [];
    return Object.values(t.nodes).forEach((i) => {
      !i || !i.length || i.forEach((r) => {
        let n;
        switch (r.type) {
          case "line":
            n = Ci(r);
            break;
          case "rectangle":
          case "ellipse":
            n = pi(r);
            break;
          case "text":
            n = br(r);
            break;
          default:
            throw `unknown type ${r.type}`;
        }
        e.push(n);
      });
    }), Object.values(t.lines).forEach((i) => {
      i && e.push(Ci(i));
    }), Object.values(t.arrows).forEach((i) => {
      if (!i)
        return;
      const r = bl(i);
      e.push(r);
    }), Object.values(t.text).forEach((i) => {
      const r = br(i);
      e.push(r);
    }), Object.values(t.namespaces).forEach((i) => {
      const r = Object.keys(i.classes), n = [...r], s = [...t.lines, ...t.arrows, ...t.text];
      r.forEach((a) => {
        const l = s.filter((c) => c.metadata && c.metadata.classId === a).map((c) => c.id);
        l.length && n.push(...l);
      });
      const o = {
        type: "frame",
        id: Jt(),
        name: i.id,
        children: n
      };
      e.push(o);
    }), { elements: e };
  }
}), o0 = (t, e = {}) => {
  switch (t.type) {
    case "graphImage":
      return i0.convert(t, e);
    case "flowchart":
      return e0.convert(t, e);
    case "sequence":
      return r0.convert(t, e);
    case "class":
      return n0.convert(t, e);
    default:
      throw new Error(`graphToExcalidraw: unknown graph type "${t.type}, only flowcharts are supported!"`);
  }
};
const {
  entries: Tl,
  setPrototypeOf: Ps,
  isFrozen: s0,
  getPrototypeOf: a0,
  getOwnPropertyDescriptor: l0
} = Object;
let {
  freeze: ft,
  seal: wt,
  create: vl
} = Object, {
  apply: Rn,
  construct: Pn
} = typeof Reflect < "u" && Reflect;
ft || (ft = function(e) {
  return e;
});
wt || (wt = function(e) {
  return e;
});
Rn || (Rn = function(e, i, r) {
  return e.apply(i, r);
});
Pn || (Pn = function(e, i) {
  return new e(...i);
});
const Vi = xt(Array.prototype.forEach), qs = xt(Array.prototype.pop), oi = xt(Array.prototype.push), sr = xt(String.prototype.toLowerCase), dn = xt(String.prototype.toString), zs = xt(String.prototype.match), si = xt(String.prototype.replace), c0 = xt(String.prototype.indexOf), h0 = xt(String.prototype.trim), Ft = xt(Object.prototype.hasOwnProperty), ht = xt(RegExp.prototype.test), ai = u0(TypeError);
function xt(t) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return Rn(t, e, r);
  };
}
function u0(t) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return Pn(t, i);
  };
}
function U(t, e) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sr;
  Ps && Ps(t, null);
  let r = e.length;
  for (; r--; ) {
    let n = e[r];
    if (typeof n == "string") {
      const s = i(n);
      s !== n && (s0(e) || (e[r] = s), n = s);
    }
    t[n] = !0;
  }
  return t;
}
function d0(t) {
  for (let e = 0; e < t.length; e++)
    Ft(t, e) || (t[e] = null);
  return t;
}
function ge(t) {
  const e = vl(null);
  for (const [i, r] of Tl(t))
    Ft(t, i) && (Array.isArray(r) ? e[i] = d0(r) : r && typeof r == "object" && r.constructor === Object ? e[i] = ge(r) : e[i] = r);
  return e;
}
function li(t, e) {
  for (; t !== null; ) {
    const r = l0(t, e);
    if (r) {
      if (r.get)
        return xt(r.get);
      if (typeof r.value == "function")
        return xt(r.value);
    }
    t = a0(t);
  }
  function i() {
    return null;
  }
  return i;
}
const Ws = ft(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fn = ft(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pn = ft(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), f0 = ft(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), gn = ft(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), p0 = ft(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ys = ft(["#text"]), Hs = ft(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), mn = ft(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), js = ft(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ki = ft(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), g0 = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), m0 = wt(/<%[\w\W]*|[\w\W]*%>/gm), y0 = wt(/\${[\w\W]*}/gm), _0 = wt(/^data-[\-\w.\u00B7-\uFFFF]/), C0 = wt(/^aria-[\-\w]+$/), Sl = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), x0 = wt(/^(?:\w+script|data):/i), b0 = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kl = wt(/^html$/i), T0 = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Us = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: g0,
  ERB_EXPR: m0,
  TMPLIT_EXPR: y0,
  DATA_ATTR: _0,
  ARIA_ATTR: C0,
  IS_ALLOWED_URI: Sl,
  IS_SCRIPT_OR_DATA: x0,
  ATTR_WHITESPACE: b0,
  DOCTYPE_NAME: kl,
  CUSTOM_ELEMENT: T0
});
const ci = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, v0 = function() {
  return typeof window > "u" ? null : window;
}, S0 = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function wl() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v0();
  const e = (F) => wl(F);
  if (e.version = "3.1.6", e.removed = [], !t || !t.document || t.document.nodeType !== ci.document)
    return e.isSupported = !1, e;
  let {
    document: i
  } = t;
  const r = i, n = r.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: o,
    Node: a,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: u,
    trustedTypes: f
  } = t, m = l.prototype, y = li(m, "cloneNode"), b = li(m, "remove"), E = li(m, "nextSibling"), T = li(m, "childNodes"), _ = li(m, "parentNode");
  if (typeof o == "function") {
    const F = i.createElement("template");
    F.content && F.content.ownerDocument && (i = F.content.ownerDocument);
  }
  let w, A = "";
  const {
    implementation: Y,
    createNodeIterator: G,
    createDocumentFragment: N,
    getElementsByTagName: K
  } = i, {
    importNode: H
  } = r;
  let P = {};
  e.isSupported = typeof Tl == "function" && typeof _ == "function" && Y && Y.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: At,
    ERB_EXPR: ie,
    TMPLIT_EXPR: R,
    DATA_ATTR: k,
    ARIA_ATTR: x,
    IS_SCRIPT_OR_DATA: L,
    ATTR_WHITESPACE: S,
    CUSTOM_ELEMENT: M
  } = Us;
  let {
    IS_ALLOWED_URI: W
  } = Us, z = null;
  const J = U({}, [...Ws, ...fn, ...pn, ...gn, ...Ys]);
  let j = null;
  const et = U({}, [...Hs, ...mn, ...js, ...Ki]);
  let X = Object.seal(vl(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), bt = null, Bt = null, re = !0, Et = !0, rt = !1, Lt = !0, Tt = !1, ne = !0, fe = !1, Zr = !1, Jr = !1, Ae = !1, Pi = !1, qi = !1, Ao = !0, Bo = !1;
  const Rc = "user-content-";
  let Qr = !0, Qe = !1, Be = {}, Ee = null;
  const Eo = U({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Lo = null;
  const Fo = U({}, ["audio", "video", "img", "source", "image", "track"]);
  let tn = null;
  const Oo = U({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zi = "http://www.w3.org/1998/Math/MathML", Wi = "http://www.w3.org/2000/svg", Ut = "http://www.w3.org/1999/xhtml";
  let Le = Ut, en = !1, rn = null;
  const Pc = U({}, [zi, Wi, Ut], dn);
  let ti = null;
  const qc = ["application/xhtml+xml", "text/html"], zc = "text/html";
  let it = null, Fe = null;
  const Wc = i.createElement("form"), Io = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, nn = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Fe && Fe === p)) {
      if ((!p || typeof p != "object") && (p = {}), p = ge(p), ti = // eslint-disable-next-line unicorn/prefer-includes
      qc.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? zc : p.PARSER_MEDIA_TYPE, it = ti === "application/xhtml+xml" ? dn : sr, z = Ft(p, "ALLOWED_TAGS") ? U({}, p.ALLOWED_TAGS, it) : J, j = Ft(p, "ALLOWED_ATTR") ? U({}, p.ALLOWED_ATTR, it) : et, rn = Ft(p, "ALLOWED_NAMESPACES") ? U({}, p.ALLOWED_NAMESPACES, dn) : Pc, tn = Ft(p, "ADD_URI_SAFE_ATTR") ? U(
        ge(Oo),
        // eslint-disable-line indent
        p.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        it
        // eslint-disable-line indent
      ) : Oo, Lo = Ft(p, "ADD_DATA_URI_TAGS") ? U(
        ge(Fo),
        // eslint-disable-line indent
        p.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        it
        // eslint-disable-line indent
      ) : Fo, Ee = Ft(p, "FORBID_CONTENTS") ? U({}, p.FORBID_CONTENTS, it) : Eo, bt = Ft(p, "FORBID_TAGS") ? U({}, p.FORBID_TAGS, it) : {}, Bt = Ft(p, "FORBID_ATTR") ? U({}, p.FORBID_ATTR, it) : {}, Be = Ft(p, "USE_PROFILES") ? p.USE_PROFILES : !1, re = p.ALLOW_ARIA_ATTR !== !1, Et = p.ALLOW_DATA_ATTR !== !1, rt = p.ALLOW_UNKNOWN_PROTOCOLS || !1, Lt = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Tt = p.SAFE_FOR_TEMPLATES || !1, ne = p.SAFE_FOR_XML !== !1, fe = p.WHOLE_DOCUMENT || !1, Ae = p.RETURN_DOM || !1, Pi = p.RETURN_DOM_FRAGMENT || !1, qi = p.RETURN_TRUSTED_TYPE || !1, Jr = p.FORCE_BODY || !1, Ao = p.SANITIZE_DOM !== !1, Bo = p.SANITIZE_NAMED_PROPS || !1, Qr = p.KEEP_CONTENT !== !1, Qe = p.IN_PLACE || !1, W = p.ALLOWED_URI_REGEXP || Sl, Le = p.NAMESPACE || Ut, X = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && Io(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && Io(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Tt && (Et = !1), Pi && (Ae = !0), Be && (z = U({}, Ys), j = [], Be.html === !0 && (U(z, Ws), U(j, Hs)), Be.svg === !0 && (U(z, fn), U(j, mn), U(j, Ki)), Be.svgFilters === !0 && (U(z, pn), U(j, mn), U(j, Ki)), Be.mathMl === !0 && (U(z, gn), U(j, js), U(j, Ki))), p.ADD_TAGS && (z === J && (z = ge(z)), U(z, p.ADD_TAGS, it)), p.ADD_ATTR && (j === et && (j = ge(j)), U(j, p.ADD_ATTR, it)), p.ADD_URI_SAFE_ATTR && U(tn, p.ADD_URI_SAFE_ATTR, it), p.FORBID_CONTENTS && (Ee === Eo && (Ee = ge(Ee)), U(Ee, p.FORBID_CONTENTS, it)), Qr && (z["#text"] = !0), fe && U(z, ["html", "head", "body"]), z.table && (U(z, ["tbody"]), delete bt.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ai('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ai('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = p.TRUSTED_TYPES_POLICY, A = w.createHTML("");
      } else
        w === void 0 && (w = S0(f, n)), w !== null && typeof A == "string" && (A = w.createHTML(""));
      ft && ft(p), Fe = p;
    }
  }, Mo = U({}, ["mi", "mo", "mn", "ms", "mtext"]), $o = U({}, ["foreignobject", "annotation-xml"]), Yc = U({}, ["title", "style", "font", "a", "script"]), Do = U({}, [...fn, ...pn, ...f0]), No = U({}, [...gn, ...p0]), Hc = function(p) {
    let C = _(p);
    (!C || !C.tagName) && (C = {
      namespaceURI: Le,
      tagName: "template"
    });
    const B = sr(p.tagName), V = sr(C.tagName);
    return rn[p.namespaceURI] ? p.namespaceURI === Wi ? C.namespaceURI === Ut ? B === "svg" : C.namespaceURI === zi ? B === "svg" && (V === "annotation-xml" || Mo[V]) : !!Do[B] : p.namespaceURI === zi ? C.namespaceURI === Ut ? B === "math" : C.namespaceURI === Wi ? B === "math" && $o[V] : !!No[B] : p.namespaceURI === Ut ? C.namespaceURI === Wi && !$o[V] || C.namespaceURI === zi && !Mo[V] ? !1 : !No[B] && (Yc[B] || !Do[B]) : !!(ti === "application/xhtml+xml" && rn[p.namespaceURI]) : !1;
  }, $t = function(p) {
    oi(e.removed, {
      element: p
    });
    try {
      _(p).removeChild(p);
    } catch {
      b(p);
    }
  }, Yi = function(p, C) {
    try {
      oi(e.removed, {
        attribute: C.getAttributeNode(p),
        from: C
      });
    } catch {
      oi(e.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(p), p === "is" && !j[p])
      if (Ae || Pi)
        try {
          $t(C);
        } catch {
        }
      else
        try {
          C.setAttribute(p, "");
        } catch {
        }
  }, Ro = function(p) {
    let C = null, B = null;
    if (Jr)
      p = "<remove></remove>" + p;
    else {
      const nt = zs(p, /^[\r\n\t ]+/);
      B = nt && nt[0];
    }
    ti === "application/xhtml+xml" && Le === Ut && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const V = w ? w.createHTML(p) : p;
    if (Le === Ut)
      try {
        C = new u().parseFromString(V, ti);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = Y.createDocument(Le, "template", null);
      try {
        C.documentElement.innerHTML = en ? A : V;
      } catch {
      }
    }
    const ot = C.body || C.documentElement;
    return p && B && ot.insertBefore(i.createTextNode(B), ot.childNodes[0] || null), Le === Ut ? K.call(C, fe ? "html" : "body")[0] : fe ? C.documentElement : ot;
  }, Po = function(p) {
    return G.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, qo = function(p) {
    return p instanceof d && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof h) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, zo = function(p) {
    return typeof a == "function" && p instanceof a;
  }, Xt = function(p, C, B) {
    P[p] && Vi(P[p], (V) => {
      V.call(e, C, B, Fe);
    });
  }, Wo = function(p) {
    let C = null;
    if (Xt("beforeSanitizeElements", p, null), qo(p))
      return $t(p), !0;
    const B = it(p.nodeName);
    if (Xt("uponSanitizeElement", p, {
      tagName: B,
      allowedTags: z
    }), p.hasChildNodes() && !zo(p.firstElementChild) && ht(/<[/\w]/g, p.innerHTML) && ht(/<[/\w]/g, p.textContent) || p.nodeType === ci.progressingInstruction || ne && p.nodeType === ci.comment && ht(/<[/\w]/g, p.data))
      return $t(p), !0;
    if (!z[B] || bt[B]) {
      if (!bt[B] && Ho(B) && (X.tagNameCheck instanceof RegExp && ht(X.tagNameCheck, B) || X.tagNameCheck instanceof Function && X.tagNameCheck(B)))
        return !1;
      if (Qr && !Ee[B]) {
        const V = _(p) || p.parentNode, ot = T(p) || p.childNodes;
        if (ot && V) {
          const nt = ot.length;
          for (let pt = nt - 1; pt >= 0; --pt) {
            const Dt = y(ot[pt], !0);
            Dt.__removalCount = (p.__removalCount || 0) + 1, V.insertBefore(Dt, E(p));
          }
        }
      }
      return $t(p), !0;
    }
    return p instanceof l && !Hc(p) || (B === "noscript" || B === "noembed" || B === "noframes") && ht(/<\/no(script|embed|frames)/i, p.innerHTML) ? ($t(p), !0) : (Tt && p.nodeType === ci.text && (C = p.textContent, Vi([At, ie, R], (V) => {
      C = si(C, V, " ");
    }), p.textContent !== C && (oi(e.removed, {
      element: p.cloneNode()
    }), p.textContent = C)), Xt("afterSanitizeElements", p, null), !1);
  }, Yo = function(p, C, B) {
    if (Ao && (C === "id" || C === "name") && (B in i || B in Wc))
      return !1;
    if (!(Et && !Bt[C] && ht(k, C))) {
      if (!(re && ht(x, C))) {
        if (!j[C] || Bt[C]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ho(p) && (X.tagNameCheck instanceof RegExp && ht(X.tagNameCheck, p) || X.tagNameCheck instanceof Function && X.tagNameCheck(p)) && (X.attributeNameCheck instanceof RegExp && ht(X.attributeNameCheck, C) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(C)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            C === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && ht(X.tagNameCheck, B) || X.tagNameCheck instanceof Function && X.tagNameCheck(B)))
          ) return !1;
        } else if (!tn[C]) {
          if (!ht(W, si(B, S, ""))) {
            if (!((C === "src" || C === "xlink:href" || C === "href") && p !== "script" && c0(B, "data:") === 0 && Lo[p])) {
              if (!(rt && !ht(L, si(B, S, "")))) {
                if (B)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ho = function(p) {
    return p !== "annotation-xml" && zs(p, M);
  }, jo = function(p) {
    Xt("beforeSanitizeAttributes", p, null);
    const {
      attributes: C
    } = p;
    if (!C)
      return;
    const B = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: j
    };
    let V = C.length;
    for (; V--; ) {
      const ot = C[V], {
        name: nt,
        namespaceURI: pt,
        value: Dt
      } = ot, ei = it(nt);
      let ct = nt === "value" ? Dt : h0(Dt);
      if (B.attrName = ei, B.attrValue = ct, B.keepAttr = !0, B.forceKeepAttr = void 0, Xt("uponSanitizeAttribute", p, B), ct = B.attrValue, ne && ht(/((--!?|])>)|<\/(style|title)/i, ct)) {
        Yi(nt, p);
        continue;
      }
      if (B.forceKeepAttr || (Yi(nt, p), !B.keepAttr))
        continue;
      if (!Lt && ht(/\/>/i, ct)) {
        Yi(nt, p);
        continue;
      }
      Tt && Vi([At, ie, R], (Xo) => {
        ct = si(ct, Xo, " ");
      });
      const Uo = it(p.nodeName);
      if (Yo(Uo, ei, ct)) {
        if (Bo && (ei === "id" || ei === "name") && (Yi(nt, p), ct = Rc + ct), w && typeof f == "object" && typeof f.getAttributeType == "function" && !pt)
          switch (f.getAttributeType(Uo, ei)) {
            case "TrustedHTML": {
              ct = w.createHTML(ct);
              break;
            }
            case "TrustedScriptURL": {
              ct = w.createScriptURL(ct);
              break;
            }
          }
        try {
          pt ? p.setAttributeNS(pt, nt, ct) : p.setAttribute(nt, ct), qo(p) ? $t(p) : qs(e.removed);
        } catch {
        }
      }
    }
    Xt("afterSanitizeAttributes", p, null);
  }, jc = function F(p) {
    let C = null;
    const B = Po(p);
    for (Xt("beforeSanitizeShadowDOM", p, null); C = B.nextNode(); )
      Xt("uponSanitizeShadowNode", C, null), !Wo(C) && (C.content instanceof s && F(C.content), jo(C));
    Xt("afterSanitizeShadowDOM", p, null);
  };
  return e.sanitize = function(F) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, B = null, V = null, ot = null;
    if (en = !F, en && (F = "<!-->"), typeof F != "string" && !zo(F))
      if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string")
          throw ai("dirty is not a string, aborting");
      } else
        throw ai("toString is not a function");
    if (!e.isSupported)
      return F;
    if (Zr || nn(p), e.removed = [], typeof F == "string" && (Qe = !1), Qe) {
      if (F.nodeName) {
        const Dt = it(F.nodeName);
        if (!z[Dt] || bt[Dt])
          throw ai("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (F instanceof a)
      C = Ro("<!---->"), B = C.ownerDocument.importNode(F, !0), B.nodeType === ci.element && B.nodeName === "BODY" || B.nodeName === "HTML" ? C = B : C.appendChild(B);
    else {
      if (!Ae && !Tt && !fe && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return w && qi ? w.createHTML(F) : F;
      if (C = Ro(F), !C)
        return Ae ? null : qi ? A : "";
    }
    C && Jr && $t(C.firstChild);
    const nt = Po(Qe ? F : C);
    for (; V = nt.nextNode(); )
      Wo(V) || (V.content instanceof s && jc(V.content), jo(V));
    if (Qe)
      return F;
    if (Ae) {
      if (Pi)
        for (ot = N.call(C.ownerDocument); C.firstChild; )
          ot.appendChild(C.firstChild);
      else
        ot = C;
      return (j.shadowroot || j.shadowrootmode) && (ot = H.call(r, ot, !0)), ot;
    }
    let pt = fe ? C.outerHTML : C.innerHTML;
    return fe && z["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && ht(kl, C.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + pt), Tt && Vi([At, ie, R], (Dt) => {
      pt = si(pt, Dt, " ");
    }), w && qi ? w.createHTML(pt) : pt;
  }, e.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    nn(F), Zr = !0;
  }, e.clearConfig = function() {
    Fe = null, Zr = !1;
  }, e.isValidAttribute = function(F, p, C) {
    Fe || nn({});
    const B = it(F), V = it(p);
    return Yo(B, V, C);
  }, e.addHook = function(F, p) {
    typeof p == "function" && (P[F] = P[F] || [], oi(P[F], p));
  }, e.removeHook = function(F) {
    if (P[F])
      return qs(P[F]);
  }, e.removeHooks = function(F) {
    P[F] && (P[F] = []);
  }, e.removeAllHooks = function() {
    P = {};
  }, e;
}
var He = wl();
const Vt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, $ = {
  trace: (...t) => {
  },
  debug: (...t) => {
  },
  info: (...t) => {
  },
  warn: (...t) => {
  },
  error: (...t) => {
  },
  fatal: (...t) => {
  }
}, co = function(t = "fatal") {
  let e = Vt.fatal;
  typeof t == "string" ? (t = t.toLowerCase(), t in Vt && (e = Vt[t])) : typeof t == "number" && (e = t), $.trace = () => {
  }, $.debug = () => {
  }, $.info = () => {
  }, $.warn = () => {
  }, $.error = () => {
  }, $.fatal = () => {
  }, e <= Vt.fatal && ($.fatal = console.error ? console.error.bind(console, vt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", vt("FATAL"))), e <= Vt.error && ($.error = console.error ? console.error.bind(console, vt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", vt("ERROR"))), e <= Vt.warn && ($.warn = console.warn ? console.warn.bind(console, vt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", vt("WARN"))), e <= Vt.info && ($.info = console.info ? console.info.bind(console, vt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", vt("INFO"))), e <= Vt.debug && ($.debug = console.debug ? console.debug.bind(console, vt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", vt("DEBUG"))), e <= Vt.trace && ($.trace = console.debug ? console.debug.bind(console, vt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", vt("TRACE")));
}, vt = (t) => `%c${Jc().format("ss.SSS")} : ${t} : `, Ri = /<br\s*\/?>/gi, k0 = (t) => t ? Bl(t).replace(/\\n/g, "#br#").split("#br#") : [""], w0 = /* @__PURE__ */ (() => {
  let t = !1;
  return () => {
    t || (A0(), t = !0);
  };
})();
function A0() {
  const t = "data-temp-href-target";
  He.addHook("beforeSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") || "");
  }), He.addHook("afterSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) || ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
  });
}
const Al = (t) => (w0(), He.sanitize(t)), Xs = (t, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== !1) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t = Al(t) : r !== "loose" && (t = Bl(t), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = t.replace(/=/g, "&equals;"), t = F0(t));
  }
  return t;
}, Li = (t, e) => t && (e.dompurifyConfig ? t = He.sanitize(Xs(t, e), e.dompurifyConfig).toString() : t = He.sanitize(Xs(t, e), {
  FORBID_TAGS: ["style"]
}).toString(), t), B0 = (t, e) => typeof t == "string" ? Li(t, e) : t.flat().map((i) => Li(i, e)), E0 = (t) => Ri.test(t), L0 = (t) => t.split(Ri), F0 = (t) => t.replace(/#br#/g, "<br/>"), Bl = (t) => t.replace(Ri, "#br#"), O0 = (t) => {
  let e = "";
  return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
}, El = (t) => !(t === !1 || ["false", "null", "0"].includes(String(t).trim().toLowerCase())), I0 = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.max(...e);
}, M0 = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.min(...e);
}, G1 = function(t) {
  const e = t.split(/(,)/), i = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n === "," && r > 0 && r + 1 < e.length) {
      const s = e[r - 1], o = e[r + 1];
      $0(s, o) && (n = s + "," + o, r++, i.pop());
    }
    i.push(D0(n));
  }
  return i.join("");
}, qn = (t, e) => Math.max(0, t.split(e).length - 1), $0 = (t, e) => {
  const i = qn(t, "~"), r = qn(e, "~");
  return i === 1 && r === 1;
}, D0 = (t) => {
  const e = qn(t, "~");
  let i = !1;
  if (e <= 1)
    return t;
  e % 2 !== 0 && t.startsWith("~") && (t = t.substring(1), i = !0);
  const r = [...t];
  let n = r.indexOf("~"), s = r.lastIndexOf("~");
  for (; n !== -1 && s !== -1 && n !== s; )
    r[n] = "<", r[s] = ">", n = r.indexOf("~"), s = r.lastIndexOf("~");
  return i && r.unshift("~"), r.join("");
}, Gs = () => window.MathMLElement !== void 0, zn = /\$\$(.*)\$\$/g, Vs = (t) => {
  var e;
  return (((e = t.match(zn)) == null ? void 0 : e.length) ?? 0) > 0;
}, V1 = async (t, e) => {
  t = await N0(t, e);
  const i = document.createElement("div");
  i.innerHTML = t, i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0";
  const r = document.querySelector("body");
  r?.insertAdjacentElement("beforeend", i);
  const n = { width: i.clientWidth, height: i.clientHeight };
  return i.remove(), n;
}, N0 = async (t, e) => {
  if (!Vs(t))
    return t;
  if (!Gs() && !e.legacyMathML)
    return t.replace(zn, "MathML is unsupported in this environment.");
  const { default: i } = await import("./katex-Bt22TY51.js");
  return t.split(Ri).map(
    (r) => Vs(r) ? `
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${r}
            </div>
          ` : `<div>${r}</div>`
  ).join("").replace(
    zn,
    (r, n) => i.renderToString(n, {
      throwOnError: !0,
      displayMode: !0,
      output: Gs() ? "mathml" : "htmlAndMathml"
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
  );
}, ho = {
  getRows: k0,
  sanitizeText: Li,
  sanitizeTextOrArray: B0,
  hasBreaks: E0,
  splitBreaks: L0,
  lineBreakRegex: Ri,
  removeScript: Al,
  getUrl: O0,
  evaluate: El,
  getMax: I0,
  getMin: M0
}, dt = (t, e) => e ? g(t, { s: -40, l: 10 }) : g(t, { s: -40, l: -10 }), Ur = "#ffffff", Xr = "#f2f2f2";
let R0 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || g(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || g(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || dt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || dt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || dt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || dt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || v(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || v(this.tertiaryColor), this.lineColor = this.lineColor || v(this.background), this.arrowheadColor = this.arrowheadColor || v(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || v(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || O(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.darkMode)
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
        this["cScale" + f] = D(this["cScale" + f], 75);
    else
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
        this["cScale" + f] = D(this["cScale" + f], 25);
    for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
      this["cScaleInv" + f] = this["cScaleInv" + f] || v(this["cScale" + f]);
    for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
      this.darkMode ? this["cScalePeer" + f] = this["cScalePeer" + f] || O(this["cScale" + f], 10) : this["cScalePeer" + f] = this["cScalePeer" + f] || D(this["cScale" + f], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let f = 0; f < this.THEME_COLOR_LIMIT; f++)
      this["cScaleLabel" + f] = this["cScaleLabel" + f] || this.scaleLabelColor;
    const u = this.darkMode ? -4 : -1;
    for (let f = 0; f < 5; f++)
      this["surface" + f] = this["surface" + f] || g(this.mainBkg, { h: 180, s: -15, l: u * (5 + f * 3) }), this["surfacePeer" + f] = this["surfacePeer" + f] || g(this.mainBkg, { h: 180, s: -15, l: u * (8 + f * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || g(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || g(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || g(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || g(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || g(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ur, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Xr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const P0 = (t) => {
  const e = new R0();
  return e.calculate(t), e;
};
let q0 = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = O(this.primaryColor, 16), this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = v(this.background), this.secondaryBorderColor = dt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = dt(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = O(v("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = mi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = D("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = D(this.sectionBkgColor, 10), this.taskBorderColor = mi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = mi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.secondBkg = O(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = O(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = O(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 });
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || v(this["cScale" + u]);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScalePeer" + u] = this["cScalePeer" + u] || O(this["cScale" + u], 10);
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(-10 + u * 4) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(-7 + u * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["pie" + u] = this["cScale" + u];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = O(this.secondaryColor, 20), this.git1 = O(this.pie2 || this.secondaryColor, 20), this.git2 = O(this.pie3 || this.tertiaryColor, 20), this.git3 = O(this.pie4 || g(this.primaryColor, { h: -30 }), 20), this.git4 = O(this.pie5 || g(this.primaryColor, { h: -60 }), 20), this.git5 = O(this.pie6 || g(this.primaryColor, { h: -90 }), 10), this.git6 = O(this.pie7 || g(this.primaryColor, { h: 60 }), 10), this.git7 = O(this.pie8 || g(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || O(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || O(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const z0 = (t) => {
  const e = new q0();
  return e.calculate(t), e;
};
let W0 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = g(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = dt(this.primaryColor, this.darkMode), this.secondaryBorderColor = dt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = dt(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = mi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || D(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || D(this.tertiaryColor, 40);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScale" + u] = D(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || D(this["cScale" + u], 25);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || g(this["cScale" + u], { h: 180 });
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { h: 30, l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { h: 30, l: -(7 + u * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || v(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || v(this.labelTextColor);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
        this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = O(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || g(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || D(v(this.git0), 25), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ur, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Xr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const Y0 = (t) => {
  const e = new W0();
  return e.calculate(t), e;
};
let H0 = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = O("#cde498", 10), this.primaryBorderColor = dt(this.primaryColor, this.darkMode), this.secondaryBorderColor = dt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = dt(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.primaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.actorBorder = D(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || D(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || D(this.tertiaryColor, 40);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScale" + u] = D(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || D(this["cScale" + u], 25);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || g(this["cScale" + u], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { h: 30, s: -30, l: -(8 + u * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ur, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Xr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
const j0 = (t) => {
  const e = new H0();
  return e.calculate(t), e;
};
class U0 {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = O(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = dt(this.primaryColor, this.darkMode), this.secondaryBorderColor = dt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = dt(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, s, o, a, l, c, h, d;
    this.secondBkg = O(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = O(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleInv" + u] = this["cScaleInv" + u] || v(this["cScale" + u]);
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || O(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || D(this["cScale" + u], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
    for (let u = 0; u < 5; u++)
      this["surface" + u] = this["surface" + u] || g(this.mainBkg, { l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, { l: -(8 + u * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = O(this.contrast, 30), this.sectionBkgColor2 = O(this.contrast, 30), this.taskBorderColor = D(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = O(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = D(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 });
    for (let u = 0; u < this.THEME_COLOR_LIMIT; u++)
      this["pie" + u] = this["cScale" + u];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = D(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || g(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || g(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || g(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || g(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || g(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ur, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Xr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
}
const X0 = (t) => {
  const e = new U0();
  return e.calculate(t), e;
}, Qt = {
  base: {
    getThemeVariables: P0
  },
  dark: {
    getThemeVariables: z0
  },
  default: {
    getThemeVariables: Y0
  },
  forest: {
    getThemeVariables: j0
  },
  neutral: {
    getThemeVariables: X0
  }
}, Kt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  theme: "default",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "maxEdges"
  ],
  legacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16
}, Ll = {
  ...Kt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Qt.default.getThemeVariables(),
  sequence: {
    ...Kt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...Kt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Kt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...Kt.pie,
    useWidth: 984
  },
  xyChart: {
    ...Kt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...Kt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...Kt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: !1
  },
  sankey: {
    ...Kt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: !1
  }
}, Fl = (t, e = "") => Object.keys(t).reduce((i, r) => Array.isArray(t[r]) ? i : typeof t[r] == "object" && t[r] !== null ? [...i, e + r, ...Fl(t[r], "")] : [...i, e + r], []), G0 = new Set(Fl(Ll, "")), V0 = Ll, Tr = (t) => {
  if ($.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
    if (Array.isArray(t)) {
      t.forEach((e) => Tr(e));
      return;
    }
    for (const e of Object.keys(t)) {
      if ($.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !G0.has(e) || t[e] == null) {
        $.debug("sanitize deleting key: ", e), delete t[e];
        continue;
      }
      if (typeof t[e] == "object") {
        $.debug("sanitizing object", e), Tr(t[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && ($.debug("sanitizing css option", e), t[e] = K0(t[e]));
    }
    if (t.themeVariables)
      for (const e of Object.keys(t.themeVariables)) {
        const i = t.themeVariables[e];
        i?.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
      }
    $.debug("After sanitization", t);
  }
}, K0 = (t) => {
  let e = 0, i = 0;
  for (const r of t) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, Ol = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, xi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Z0 = /\s*%%.*\n/gm;
class Il extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}
const je = {}, Gr = function(t, e) {
  t = t.replace(Ol, "").replace(xi, "").replace(Z0, `
`);
  for (const [i, { detector: r }] of Object.entries(je))
    if (r(t, e))
      return i;
  throw new Il(
    `No diagram type detected matching given configuration for text: ${t}`
  );
}, Ml = (...t) => {
  for (const { id: e, detector: i, loader: r } of t)
    $l(e, i, r);
}, $l = (t, e, i) => {
  je[t] ? $.error(`Detector with key ${t} already exists`) : je[t] = { detector: e, loader: i }, $.debug(`Detector with key ${t} added${i ? " with loader" : ""}`);
}, J0 = (t) => je[t].loader, Wn = (t, e, { depth: i = 2, clobber: r = !1 } = {}) => {
  const n = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((s) => Wn(t, s, n)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((s) => {
    t.includes(s) || t.push(s);
  }), t) : t === void 0 || i <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((s) => {
    typeof e[s] == "object" && (t[s] === void 0 || typeof t[s] == "object") ? (t[s] === void 0 && (t[s] = Array.isArray(e[s]) ? [] : {}), t[s] = Wn(t[s], e[s], { depth: i - 1, clobber: r })) : (r || typeof t[s] != "object" && typeof e[s] != "object") && (t[s] = e[s]);
  }), t);
}, at = Wn, Q0 = "​", ty = {
  curveBasis: yf,
  curveBasisClosed: _f,
  curveBasisOpen: Cf,
  curveBumpX: gf,
  curveBumpY: mf,
  curveBundle: xf,
  curveCardinalClosed: Tf,
  curveCardinalOpen: vf,
  curveCardinal: bf,
  curveCatmullRomClosed: kf,
  curveCatmullRomOpen: wf,
  curveCatmullRom: Sf,
  curveLinear: pf,
  curveLinearClosed: Af,
  curveMonotoneX: Bf,
  curveMonotoneY: Ef,
  curveNatural: Lf,
  curveStep: Ff,
  curveStepAfter: If,
  curveStepBefore: Of
}, ey = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, iy = function(t, e) {
  const i = Dl(t, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const o = i.map((a) => a.args);
    Tr(o), r = at(r, [...o]);
  } else
    r = i.args;
  if (!r)
    return;
  let n = Gr(t, e);
  const s = "config";
  return r[s] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[s], delete r[s]), r;
}, Dl = function(t, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${ey.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t = t.trim().replace(i, "").replace(/'/gm, '"'), $.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`
    );
    let r;
    const n = [];
    for (; (r = xi.exec(t)) !== null; )
      if (r.index === xi.lastIndex && xi.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const s = r[1] ? r[1] : r[2], o = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: s, args: o });
      }
    return n.length === 0 ? { type: t, args: null } : n.length === 1 ? n[0] : n;
  } catch (i) {
    return $.error(
      `ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`
    ), { type: void 0, args: null };
  }
}, ry = function(t) {
  return t.replace(xi, "");
}, ny = function(t, e) {
  for (const [i, r] of e.entries())
    if (r.match(t))
      return i;
  return -1;
};
function oy(t, e) {
  if (!t)
    return e;
  const i = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
  return ty[i] ?? e;
}
function sy(t, e) {
  const i = t.trim();
  if (i)
    return e.securityLevel !== "loose" ? Xc.sanitizeUrl(i) : i;
}
const ay = (t, ...e) => {
  const i = t.split("."), r = i.length - 1, n = i[r];
  let s = window;
  for (let o = 0; o < r; o++)
    if (s = s[i[o]], !s) {
      $.error(`Function name: ${t} not found in window`);
      return;
    }
  s[n](...e);
};
function Nl(t, e) {
  return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function ly(t) {
  let e, i = 0;
  t.forEach((n) => {
    i += Nl(n, e), e = n;
  });
  const r = i / 2;
  return uo(t, r);
}
function cy(t) {
  return t.length === 1 ? t[0] : ly(t);
}
const Ks = (t, e = 2) => {
  const i = Math.pow(10, e);
  return Math.round(t * i) / i;
}, uo = (t, e) => {
  let i, r = e;
  for (const n of t) {
    if (i) {
      const s = Nl(n, i);
      if (s < r)
        r -= s;
      else {
        const o = r / s;
        if (o <= 0)
          return i;
        if (o >= 1)
          return { x: n.x, y: n.y };
        if (o > 0 && o < 1)
          return {
            x: Ks((1 - o) * i.x + o * n.x, 5),
            y: Ks((1 - o) * i.y + o * n.y, 5)
          };
      }
    }
    i = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, hy = (t, e, i) => {
  $.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  const n = uo(e, 25), s = t ? 10 : 5, o = Math.atan2(e[0].y - n.y, e[0].x - n.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(o) * s + (e[0].x + n.x) / 2, a.y = -Math.cos(o) * s + (e[0].y + n.y) / 2, a;
};
function uy(t, e, i) {
  const r = structuredClone(i);
  $.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
  const n = 25 + t, s = uo(r, n), o = 10 + t * 0.5, a = Math.atan2(r[0].y - s.y, r[0].x - s.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * o + (r[0].x + s.x) / 2, l.y = -Math.cos(a + Math.PI) * o + (r[0].y + s.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * o + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * o + (r[0].y + s.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * o + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a) * o + (r[0].y + s.y) / 2 - 5) : (l.x = Math.sin(a) * o + (r[0].x + s.x) / 2, l.y = -Math.cos(a) * o + (r[0].y + s.y) / 2), l;
}
function dy(t) {
  let e = "", i = "";
  for (const r of t)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
let Zs = 0;
const fy = () => (Zs++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Zs);
function py(t) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
const gy = (t) => py(t.length), my = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, yy = function(t, e) {
  const i = e.text.replace(ho.lineBreakRegex, " "), [, r] = po(e.fontSize), n = t.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const s = n.append("tspan");
  return s.attr("x", e.x + e.textMargin * 2), s.attr("fill", e.fill), s.text(i), n;
}, _y = Di(
  (t, e, i) => {
    if (!t || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), ho.lineBreakRegex.test(t)))
      return t;
    const r = t.split(" "), n = [];
    let s = "";
    return r.forEach((o, a) => {
      const l = vr(`${o} `, i), c = vr(s, i);
      if (l > e) {
        const { hyphenatedStrings: u, remainingWord: f } = Cy(o, e, "-", i);
        n.push(s, ...u), s = f;
      } else c + l >= e ? (n.push(s), s = o) : s = [s, o].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(s);
    }), n.filter((o) => o !== "").join(i.joinWith);
  },
  (t, e, i) => `${t}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
), Cy = Di(
  (t, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t], s = [];
    let o = "";
    return n.forEach((a, l) => {
      const c = `${o}${a}`;
      if (vr(c, r) >= e) {
        const d = l + 1, u = n.length === d, f = `${c}${i}`;
        s.push(u ? c : f), o = "";
      } else
        o = c;
    }), { hyphenatedStrings: s, remainingWord: o };
  },
  (t, e, i = "-", r) => `${t}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function xy(t, e) {
  return fo(t, e).height;
}
function vr(t, e) {
  return fo(t, e).width;
}
const fo = Di(
  (t, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = e;
    if (!t)
      return { width: 0, height: 0 };
    const [, s] = po(i), o = ["sans-serif", r], a = t.split(ho.lineBreakRegex), l = [], c = St("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const u of o) {
      let f = 0;
      const m = { width: 0, height: 0, lineHeight: 0 };
      for (const y of a) {
        const b = my();
        b.text = y || Q0;
        const E = yy(h, b).style("font-size", s).style("font-weight", n).style("font-family", u), T = (E._groups || E)[0][0].getBBox();
        if (T.width === 0 && T.height === 0)
          throw new Error("svg element not in render tree");
        m.width = Math.round(Math.max(m.width, T.width)), f = Math.round(T.height), m.height += f, m.lineHeight = Math.round(Math.max(m.lineHeight, f));
      }
      l.push(m);
    }
    h.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  },
  (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
class by {
  constructor(e = !1, i) {
    this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
}
let Zi;
const Ty = function(t) {
  return Zi = Zi || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Zi.innerHTML = t, unescape(Zi.textContent);
};
function Rl(t) {
  return "str" in t;
}
const vy = (t, e, i, r) => {
  var n;
  if (!r)
    return;
  const s = (n = t.node()) == null ? void 0 : n.getBBox();
  s && t.append("text").text(r).attr("x", s.x + s.width / 2).attr("y", -i).attr("class", e);
}, po = (t) => {
  if (typeof t == "number")
    return [t, t + "px"];
  const e = parseInt(t ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t === String(e) ? [e, t + "px"] : [e, t];
};
function Pl(t, e) {
  return pm({}, t, e);
}
const bi = {
  assignWithDepth: at,
  wrapLabel: _y,
  calculateTextHeight: xy,
  calculateTextWidth: vr,
  calculateTextDimensions: fo,
  cleanAndMerge: Pl,
  detectInit: iy,
  detectDirective: Dl,
  isSubstringInArray: ny,
  interpolateToCurve: oy,
  calcLabelPosition: cy,
  calcCardinalityPosition: hy,
  calcTerminalLabelPosition: uy,
  formatUrl: sy,
  getStylesFromArray: dy,
  generateId: fy,
  random: gy,
  runFunc: ay,
  entityDecode: Ty,
  insertTitle: vy,
  parseFontSize: po,
  InitIDGenerator: by
}, Sy = function(t) {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
}, ky = function(t) {
  return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, Js = "10.9.3", Ue = Object.freeze(V0);
let gt = at({}, Ue), ql, Xe = [], Ti = at({}, Ue);
const Vr = (t, e) => {
  let i = at({}, t), r = {};
  for (const n of e)
    Yl(n), r = at(r, n);
  if (i = at(i, r), r.theme && r.theme in Qt) {
    const n = at({}, ql), s = at(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Qt && (i.themeVariables = Qt[i.theme].getThemeVariables(s));
  }
  return Ti = i, Hl(Ti), Ti;
}, wy = (t) => (gt = at({}, Ue), gt = at(gt, t), t.theme && Qt[t.theme] && (gt.themeVariables = Qt[t.theme].getThemeVariables(t.themeVariables)), Vr(gt, Xe), gt), Ay = (t) => {
  ql = at({}, t);
}, By = (t) => (gt = at(gt, t), Vr(gt, Xe), gt), zl = () => at({}, gt), Wl = (t) => (Hl(t), at(Ti, t), Wt()), Wt = () => at({}, Ti), Yl = (t) => {
  t && (["secure", ...gt.secure ?? []].forEach((e) => {
    Object.hasOwn(t, e) && ($.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
  }), Object.keys(t).forEach((e) => {
    e.startsWith("__") && delete t[e];
  }), Object.keys(t).forEach((e) => {
    typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && Yl(t[e]);
  }));
}, Ey = (t) => {
  Tr(t), t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily) && (t.themeVariables = { fontFamily: t.fontFamily }), Xe.push(t), Vr(gt, Xe);
}, Sr = (t = gt) => {
  Xe = [], Vr(t, Xe);
}, Ly = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, Qs = {}, Fy = (t) => {
  Qs[t] || ($.warn(Ly[t]), Qs[t] = !0);
}, Hl = (t) => {
  t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && Fy("LAZY_LOAD_DEPRECATED");
}, jl = "c4", Oy = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t), Iy = async () => {
  const { diagram: t } = await import("./c4Diagram-3d4e48cf-DiKIPLx6.js");
  return { id: jl, diagram: t };
}, My = {
  id: jl,
  detector: Oy,
  loader: Iy
}, $y = My, Ul = "flowchart", Dy = (t, e) => {
  var i, r;
  return ((i = e?.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e?.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t);
}, Ny = async () => {
  const { diagram: t } = await import("./flowDiagram-66a62f08-B07g1G60.js");
  return { id: Ul, diagram: t };
}, Ry = {
  id: Ul,
  detector: Dy,
  loader: Ny
}, Py = Ry, Xl = "flowchart-v2", qy = (t, e) => {
  var i, r, n;
  return ((i = e?.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e?.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t) && ((n = e?.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(t);
}, zy = async () => {
  const { diagram: t } = await import("./flowDiagram-v2-96b9c2cf-BCjqDv32.js");
  return { id: Xl, diagram: t };
}, Wy = {
  id: Xl,
  detector: qy,
  loader: zy
}, Yy = Wy, Gl = "er", Hy = (t) => /^\s*erDiagram/.test(t), jy = async () => {
  const { diagram: t } = await import("./erDiagram-9861fffd-3R1lhfwx.js");
  return { id: Gl, diagram: t };
}, Uy = {
  id: Gl,
  detector: Hy,
  loader: jy
}, Xy = Uy, Vl = "gitGraph", Gy = (t) => /^\s*gitGraph/.test(t), Vy = async () => {
  const { diagram: t } = await import("./gitGraphDiagram-72cf32ee-hwNkh7n7.js");
  return { id: Vl, diagram: t };
}, Ky = {
  id: Vl,
  detector: Gy,
  loader: Vy
}, Zy = Ky, Kl = "gantt", Jy = (t) => /^\s*gantt/.test(t), Qy = async () => {
  const { diagram: t } = await import("./ganttDiagram-c361ad54-B4PU-FCK.js");
  return { id: Kl, diagram: t };
}, t_ = {
  id: Kl,
  detector: Jy,
  loader: Qy
}, e_ = t_, Zl = "info", i_ = (t) => /^\s*info/.test(t), r_ = async () => {
  const { diagram: t } = await import("./infoDiagram-f8f76790-Car0nJRW.js");
  return { id: Zl, diagram: t };
}, n_ = {
  id: Zl,
  detector: i_,
  loader: r_
}, Jl = "pie", o_ = (t) => /^\s*pie/.test(t), s_ = async () => {
  const { diagram: t } = await import("./pieDiagram-8a3498a8-C3rV4EzI.js");
  return { id: Jl, diagram: t };
}, a_ = {
  id: Jl,
  detector: o_,
  loader: s_
}, Ql = "quadrantChart", l_ = (t) => /^\s*quadrantChart/.test(t), c_ = async () => {
  const { diagram: t } = await import("./quadrantDiagram-120e2f19-C1AmYUcp.js");
  return { id: Ql, diagram: t };
}, h_ = {
  id: Ql,
  detector: l_,
  loader: c_
}, u_ = h_, tc = "xychart", d_ = (t) => /^\s*xychart-beta/.test(t), f_ = async () => {
  const { diagram: t } = await import("./xychartDiagram-e933f94c-CQd-GxGl.js");
  return { id: tc, diagram: t };
}, p_ = {
  id: tc,
  detector: d_,
  loader: f_
}, g_ = p_, ec = "requirement", m_ = (t) => /^\s*requirement(Diagram)?/.test(t), y_ = async () => {
  const { diagram: t } = await import("./requirementDiagram-deff3bca-8Oe8_A2W.js");
  return { id: ec, diagram: t };
}, __ = {
  id: ec,
  detector: m_,
  loader: y_
}, C_ = __, ic = "sequence", x_ = (t) => /^\s*sequenceDiagram/.test(t), b_ = async () => {
  const { diagram: t } = await import("./sequenceDiagram-704730f1-CEJkdrih.js");
  return { id: ic, diagram: t };
}, T_ = {
  id: ic,
  detector: x_,
  loader: b_
}, v_ = T_, rc = "class", S_ = (t, e) => {
  var i;
  return ((i = e?.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(t);
}, k_ = async () => {
  const { diagram: t } = await import("./classDiagram-70f12bd4-Cm0pS0rh.js");
  return { id: rc, diagram: t };
}, w_ = {
  id: rc,
  detector: S_,
  loader: k_
}, A_ = w_, nc = "classDiagram", B_ = (t, e) => {
  var i;
  return /^\s*classDiagram/.test(t) && ((i = e?.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(t);
}, E_ = async () => {
  const { diagram: t } = await import("./classDiagram-v2-f2320105-BhyBEEGk.js");
  return { id: nc, diagram: t };
}, L_ = {
  id: nc,
  detector: B_,
  loader: E_
}, F_ = L_, oc = "state", O_ = (t, e) => {
  var i;
  return ((i = e?.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(t);
}, I_ = async () => {
  const { diagram: t } = await import("./stateDiagram-587899a1-DLsXqDdv.js");
  return { id: oc, diagram: t };
}, M_ = {
  id: oc,
  detector: O_,
  loader: I_
}, $_ = M_, sc = "stateDiagram", D_ = (t, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t) || /^\s*stateDiagram/.test(t) && ((i = e?.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
}, N_ = async () => {
  const { diagram: t } = await import("./stateDiagram-v2-d93cdb3a-BQppiBK4.js");
  return { id: sc, diagram: t };
}, R_ = {
  id: sc,
  detector: D_,
  loader: N_
}, P_ = R_, ac = "journey", q_ = (t) => /^\s*journey/.test(t), z_ = async () => {
  const { diagram: t } = await import("./journeyDiagram-49397b02-o6HeRglX.js");
  return { id: ac, diagram: t };
}, W_ = {
  id: ac,
  detector: q_,
  loader: z_
}, Y_ = W_, H_ = function(t, e) {
  for (let i of e)
    t.attr(i[0], i[1]);
}, j_ = function(t, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t), r.set("width", e)), r;
}, lc = function(t, e, i, r) {
  const n = j_(e, i, r);
  H_(t, n);
}, U_ = function(t, e, i, r) {
  const n = e.node().getBBox(), s = n.width, o = n.height;
  $.info(`SVG bounds: ${s}x${o}`, n);
  let a = 0, l = 0;
  $.info(`Graph bounds: ${a}x${l}`, t), a = s + i * 2, l = o + i * 2, $.info(`Calculated bounds: ${a}x${l}`), lc(e, l, a, r);
  const c = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", c);
}, ar = {}, X_ = (t, e, i) => {
  let r = "";
  return t in ar && ar[t] ? r = ar[t](i) : $.warn(`No theme found for ${t}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
}, G_ = (t, e) => {
  e !== void 0 && (ar[t] = e);
}, V_ = X_;
let go = "", mo = "", yo = "";
const _o = (t) => Li(t, Wt()), K_ = () => {
  go = "", yo = "", mo = "";
}, Z_ = (t) => {
  go = _o(t).replace(/^\s+/g, "");
}, J_ = () => go, Q_ = (t) => {
  yo = _o(t).replace(/\n\s+/g, `
`);
}, tC = () => yo, eC = (t) => {
  mo = _o(t);
}, iC = () => mo, rC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: K_,
  getAccDescription: tC,
  getAccTitle: J_,
  getDiagramTitle: iC,
  setAccDescription: Q_,
  setAccTitle: Z_,
  setDiagramTitle: eC
}, Symbol.toStringTag, { value: "Module" })), nC = $, oC = co, Co = Wt, tT = Wl, eT = Ue, sC = (t) => Li(t, Co()), aC = U_, lC = () => rC, kr = {}, wr = (t, e, i) => {
  var r;
  if (kr[t])
    throw new Error(`Diagram ${t} already registered.`);
  kr[t] = e, i && $l(t, i), G_(t, e.styles), (r = e.injectUtils) == null || r.call(
    e,
    nC,
    oC,
    Co,
    sC,
    aC,
    lC(),
    () => {
    }
  );
}, xo = (t) => {
  if (t in kr)
    return kr[t];
  throw new cC(t);
};
class cC extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}
const hC = (t) => {
  var e;
  const { securityLevel: i } = Co();
  let r = St("body");
  if (i === "sandbox") {
    const o = ((e = St(`#i${t}`).node()) == null ? void 0 : e.contentDocument) ?? document;
    r = St(o.body);
  }
  return r.select(`#${t}`);
}, uC = (t, e, i) => {
  $.debug(`rendering svg for syntax error
`);
  const r = hC(e), n = r.append("g");
  r.attr("viewBox", "0 0 2412 512"), lc(r, 100, 512, !0), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
}, cc = { draw: uC }, dC = cc, fC = {
  db: {},
  renderer: cc,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
}, pC = fC, hc = "flowchart-elk", gC = (t, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t) && ((i = e?.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
}, mC = async () => {
  const { diagram: t } = await import("./flowchart-elk-definition-4a651766-B9ZVcFGT.js");
  return { id: hc, diagram: t };
}, yC = {
  id: hc,
  detector: gC,
  loader: mC
}, _C = yC, uc = "timeline", CC = (t) => /^\s*timeline/.test(t), xC = async () => {
  const { diagram: t } = await import("./timeline-definition-85554ec2-Chil7bOT.js");
  return { id: uc, diagram: t };
}, bC = {
  id: uc,
  detector: CC,
  loader: xC
}, TC = bC, dc = "mindmap", vC = (t) => /^\s*mindmap/.test(t), SC = async () => {
  const { diagram: t } = await import("./mindmap-definition-fc14e90a-Bo9HRaZw.js");
  return { id: dc, diagram: t };
}, kC = {
  id: dc,
  detector: vC,
  loader: SC
}, wC = kC, fc = "sankey", AC = (t) => /^\s*sankey-beta/.test(t), BC = async () => {
  const { diagram: t } = await import("./sankeyDiagram-04a897e0-l5wIoU90.js");
  return { id: fc, diagram: t };
}, EC = {
  id: fc,
  detector: AC,
  loader: BC
}, LC = EC, pc = "block", FC = (t) => /^\s*block-beta/.test(t), OC = async () => {
  const { diagram: t } = await import("./blockDiagram-38ab4fdb-BPd-R3hj.js");
  return { id: pc, diagram: t };
}, IC = {
  id: pc,
  detector: FC,
  loader: OC
}, MC = IC;
let ta = !1;
const bo = () => {
  ta || (ta = !0, wr("error", pC, (t) => t.toLowerCase().trim() === "error"), wr(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t) => t.toLowerCase().trimStart().startsWith("---")
  ), Ml(
    $y,
    F_,
    A_,
    Xy,
    e_,
    n_,
    a_,
    C_,
    v_,
    _C,
    Yy,
    Py,
    wC,
    TC,
    Zy,
    P_,
    $_,
    Y_,
    u_,
    LC,
    g_,
    MC
  ));
};
class gc {
  constructor(e, i = {}) {
    this.text = e, this.metadata = i, this.type = "graph", this.text = Sy(e), this.text += `
`;
    const r = Wt();
    try {
      this.type = Gr(e, r);
    } catch (s) {
      this.type = "error", this.detectError = s;
    }
    const n = xo(this.type);
    $.debug("Type " + this.type), this.db = n.db, this.renderer = n.renderer, this.parser = n.parser, this.parser.parser.yy = this.db, this.init = n.init, this.parse();
  }
  parse() {
    var e, i, r, n, s;
    if (this.detectError)
      throw this.detectError;
    (i = (e = this.db).clear) == null || i.call(e);
    const o = Wt();
    (r = this.init) == null || r.call(this, o), this.metadata.title && ((s = (n = this.db).setDiagramTitle) == null || s.call(n, this.metadata.title)), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}
const $C = async (t, e = {}) => {
  const i = Gr(t, Wt());
  try {
    xo(i);
  } catch {
    const n = J0(i);
    if (!n)
      throw new Il(`Diagram ${i} not found.`);
    const { id: s, diagram: o } = await n();
    wr(s, o);
  }
  return new gc(t, e);
};
let ea = [];
const DC = () => {
  ea.forEach((t) => {
    t();
  }), ea = [];
}, NC = "graphics-document document";
function RC(t, e) {
  t.attr("role", NC), e !== "" && t.attr("aria-roledescription", e);
}
function PC(t, e, i, r) {
  if (t.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t.attr("aria-describedby", n), t.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t.attr("aria-labelledby", n), t.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
const qC = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
function mc(t) {
  return typeof t > "u" || t === null;
}
function zC(t) {
  return typeof t == "object" && t !== null;
}
function WC(t) {
  return Array.isArray(t) ? t : mc(t) ? [] : [t];
}
function YC(t, e) {
  var i, r, n, s;
  if (e)
    for (s = Object.keys(e), i = 0, r = s.length; i < r; i += 1)
      n = s[i], t[n] = e[n];
  return t;
}
function HC(t, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t;
  return i;
}
function jC(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var UC = mc, XC = zC, GC = WC, VC = HC, KC = jC, ZC = YC, ut = {
  isNothing: UC,
  isObject: XC,
  toArray: GC,
  repeat: VC,
  isNegativeZero: KC,
  extend: ZC
};
function yc(t, e) {
  var i = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (i += 'in "' + t.mark.name + '" '), i += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (i += `

` + t.mark.snippet), r + " " + i) : r;
}
function Fi(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = yc(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Fi.prototype = Object.create(Error.prototype);
Fi.prototype.constructor = Fi;
Fi.prototype.toString = function(e) {
  return this.name + ": " + yc(this, e);
};
var Zt = Fi;
function yn(t, e, i, r, n) {
  var s = "", o = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (s = " ... ", e = r - a + s.length), i - r > a && (o = " ...", i = r + a - o.length), {
    str: s + t.slice(e, i).replace(/\t/g, "→") + o,
    pos: r - e + s.length
    // relative position
  };
}
function _n(t, e) {
  return ut.repeat(" ", e - t.length) + t;
}
function JC(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], s, o = -1; s = i.exec(t.buffer); )
    n.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && o < 0 && (o = r.length - 2);
  o < 0 && (o = r.length - 1);
  var a = "", l, c, h = Math.min(t.line + e.linesAfter, n.length).toString().length, d = e.maxLength - (e.indent + h + 3);
  for (l = 1; l <= e.linesBefore && !(o - l < 0); l++)
    c = yn(
      t.buffer,
      r[o - l],
      n[o - l],
      t.position - (r[o] - r[o - l]),
      d
    ), a = ut.repeat(" ", e.indent) + _n((t.line - l + 1).toString(), h) + " | " + c.str + `
` + a;
  for (c = yn(t.buffer, r[o], n[o], t.position, d), a += ut.repeat(" ", e.indent) + _n((t.line + 1).toString(), h) + " | " + c.str + `
`, a += ut.repeat("-", e.indent + h + 3 + c.pos) + `^
`, l = 1; l <= e.linesAfter && !(o + l >= n.length); l++)
    c = yn(
      t.buffer,
      r[o + l],
      n[o + l],
      t.position - (r[o] - r[o + l]),
      d
    ), a += ut.repeat(" ", e.indent) + _n((t.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return a.replace(/\n$/, "");
}
var QC = JC, tx = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], ex = [
  "scalar",
  "sequence",
  "mapping"
];
function ix(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(i) {
    t[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function rx(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (tx.indexOf(i) === -1)
      throw new Zt('Unknown option "' + i + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = ix(e.styleAliases || null), ex.indexOf(this.kind) === -1)
    throw new Zt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var lt = rx;
function ia(t, e) {
  var i = [];
  return t[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(s, o) {
      s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (n = o);
    }), i[n] = r;
  }), i;
}
function nx() {
  var t = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t.multi[n.kind].push(n), t.multi.fallback.push(n)) : t[n.kind][n.tag] = t.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t;
}
function Yn(t) {
  return this.extend(t);
}
Yn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof lt)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Zt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(s) {
    if (!(s instanceof lt))
      throw new Zt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Zt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new Zt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(s) {
    if (!(s instanceof lt))
      throw new Zt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Yn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = ia(n, "implicit"), n.compiledExplicit = ia(n, "explicit"), n.compiledTypeMap = nx(n.compiledImplicit, n.compiledExplicit), n;
};
var ox = Yn, sx = new lt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), ax = new lt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), lx = new lt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), cx = new ox({
  explicit: [
    sx,
    ax,
    lx
  ]
});
function hx(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function ux() {
  return null;
}
function dx(t) {
  return t === null;
}
var fx = new lt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: hx,
  construct: ux,
  predicate: dx,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function px(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function gx(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function mx(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var yx = new lt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: px,
  construct: gx,
  predicate: mx,
  represent: {
    lowercase: function(t) {
      return t ? "true" : "false";
    },
    uppercase: function(t) {
      return t ? "TRUE" : "FALSE";
    },
    camelcase: function(t) {
      return t ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function _x(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Cx(t) {
  return 48 <= t && t <= 55;
}
function xx(t) {
  return 48 <= t && t <= 57;
}
function bx(t) {
  if (t === null)
    return !1;
  var e = t.length, i = 0, r = !1, n;
  if (!e)
    return !1;
  if (n = t[i], (n === "-" || n === "+") && (n = t[++i]), n === "0") {
    if (i + 1 === e)
      return !0;
    if (n = t[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (!_x(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t[i], n !== "_") {
          if (!Cx(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return !1;
  for (; i < e; i++)
    if (n = t[i], n !== "_") {
      if (!xx(t.charCodeAt(i)))
        return !1;
      r = !0;
    }
  return !(!r || n === "_");
}
function Tx(t) {
  var e = t, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function vx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !ut.isNegativeZero(t);
}
var Sx = new lt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: bx,
  construct: Tx,
  predicate: vx,
  represent: {
    binary: function(t) {
      return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
    },
    octal: function(t) {
      return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
    },
    decimal: function(t) {
      return t.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t) {
      return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), kx = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function wx(t) {
  return !(t === null || !kx.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function Ax(t) {
  var e, i;
  return e = t.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var Bx = /^[-+]?[0-9]+e/;
function Ex(t, e) {
  var i;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (ut.isNegativeZero(t))
    return "-0.0";
  return i = t.toString(10), Bx.test(i) ? i.replace("e", ".e") : i;
}
function Lx(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || ut.isNegativeZero(t));
}
var Fx = new lt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: wx,
  construct: Ax,
  predicate: Lx,
  represent: Ex,
  defaultStyle: "lowercase"
}), _c = cx.extend({
  implicit: [
    fx,
    yx,
    Sx,
    Fx
  ]
}), Ox = _c, Cc = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), xc = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Ix(t) {
  return t === null ? !1 : Cc.exec(t) !== null || xc.exec(t) !== null;
}
function Mx(t) {
  var e, i, r, n, s, o, a, l = 0, c = null, h, d, u;
  if (e = Cc.exec(t), e === null && (e = xc.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (s = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (h = +e[10], d = +(e[11] || 0), c = (h * 60 + d) * 6e4, e[9] === "-" && (c = -c)), u = new Date(Date.UTC(i, r, n, s, o, a, l)), c && u.setTime(u.getTime() - c), u;
}
function $x(t) {
  return t.toISOString();
}
var Dx = new lt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Ix,
  construct: Mx,
  instanceOf: Date,
  represent: $x
});
function Nx(t) {
  return t === "<<" || t === null;
}
var Rx = new lt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Nx
}), To = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Px(t) {
  if (t === null)
    return !1;
  var e, i, r = 0, n = t.length, s = To;
  for (i = 0; i < n; i++)
    if (e = s.indexOf(t.charAt(i)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function qx(t) {
  var e, i, r = t.replace(/[\r\n=]/g, ""), n = r.length, s = To, o = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : i === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : i === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function zx(t) {
  var e = "", i = 0, r, n, s = t.length, o = To;
  for (r = 0; r < s; r++)
    r % 3 === 0 && r && (e += o[i >> 18 & 63], e += o[i >> 12 & 63], e += o[i >> 6 & 63], e += o[i & 63]), i = (i << 8) + t[r];
  return n = s % 3, n === 0 ? (e += o[i >> 18 & 63], e += o[i >> 12 & 63], e += o[i >> 6 & 63], e += o[i & 63]) : n === 2 ? (e += o[i >> 10 & 63], e += o[i >> 4 & 63], e += o[i << 2 & 63], e += o[64]) : n === 1 && (e += o[i >> 2 & 63], e += o[i << 4 & 63], e += o[64], e += o[64]), e;
}
function Wx(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Yx = new lt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Px,
  construct: qx,
  predicate: Wx,
  represent: zx
}), Hx = Object.prototype.hasOwnProperty, jx = Object.prototype.toString;
function Ux(t) {
  if (t === null)
    return !0;
  var e = [], i, r, n, s, o, a = t;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], o = !1, jx.call(n) !== "[object Object]")
      return !1;
    for (s in n)
      if (Hx.call(n, s))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (e.indexOf(s) === -1)
      e.push(s);
    else
      return !1;
  }
  return !0;
}
function Xx(t) {
  return t !== null ? t : [];
}
var Gx = new lt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Ux,
  construct: Xx
}), Vx = Object.prototype.toString;
function Kx(t) {
  if (t === null)
    return !0;
  var e, i, r, n, s, o = t;
  for (s = new Array(o.length), e = 0, i = o.length; e < i; e += 1) {
    if (r = o[e], Vx.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return !1;
    s[e] = [n[0], r[n[0]]];
  }
  return !0;
}
function Zx(t) {
  if (t === null)
    return [];
  var e, i, r, n, s, o = t;
  for (s = new Array(o.length), e = 0, i = o.length; e < i; e += 1)
    r = o[e], n = Object.keys(r), s[e] = [n[0], r[n[0]]];
  return s;
}
var Jx = new lt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Kx,
  construct: Zx
}), Qx = Object.prototype.hasOwnProperty;
function tb(t) {
  if (t === null)
    return !0;
  var e, i = t;
  for (e in i)
    if (Qx.call(i, e) && i[e] !== null)
      return !1;
  return !0;
}
function eb(t) {
  return t !== null ? t : {};
}
var ib = new lt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: tb,
  construct: eb
}), rb = Ox.extend({
  implicit: [
    Dx,
    Rx
  ],
  explicit: [
    Yx,
    Gx,
    Jx,
    ib
  ]
}), ue = Object.prototype.hasOwnProperty, Ar = 1, bc = 2, Tc = 3, Br = 4, Cn = 1, nb = 2, ra = 3, ob = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, sb = /[\x85\u2028\u2029]/, ab = /[,\[\]\{\}]/, vc = /^(?:!|!!|![a-z\-]+!)$/i, Sc = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function na(t) {
  return Object.prototype.toString.call(t);
}
function qt(t) {
  return t === 10 || t === 13;
}
function xe(t) {
  return t === 9 || t === 32;
}
function yt(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Me(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function lb(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function cb(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function hb(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function oa(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function ub(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var kc = new Array(256), wc = new Array(256);
for (var Oe = 0; Oe < 256; Oe++)
  kc[Oe] = oa(Oe) ? 1 : 0, wc[Oe] = oa(Oe);
function db(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || rb, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Ac(t, e) {
  var i = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return i.snippet = QC(i), new Zt(e, i);
}
function I(t, e) {
  throw Ac(t, e);
}
function Er(t, e) {
  t.onWarning && t.onWarning.call(null, Ac(t, e));
}
var sa = {
  YAML: function(e, i, r) {
    var n, s, o;
    e.version !== null && I(e, "duplication of %YAML directive"), r.length !== 1 && I(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && I(e, "ill-formed argument of the YAML directive"), s = parseInt(n[1], 10), o = parseInt(n[2], 10), s !== 1 && I(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Er(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, s;
    r.length !== 2 && I(e, "TAG directive accepts exactly two arguments"), n = r[0], s = r[1], vc.test(n) || I(e, "ill-formed tag handle (first argument) of the TAG directive"), ue.call(e.tagMap, n) && I(e, 'there is a previously declared suffix for "' + n + '" tag handle'), Sc.test(s) || I(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      I(e, "tag prefix is malformed: " + s);
    }
    e.tagMap[n] = s;
  }
};
function ce(t, e, i, r) {
  var n, s, o, a;
  if (e < i) {
    if (a = t.input.slice(e, i), r)
      for (n = 0, s = a.length; n < s; n += 1)
        o = a.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || I(t, "expected valid JSON character");
    else ob.test(a) && I(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function aa(t, e, i, r) {
  var n, s, o, a;
  for (ut.isObject(i) || I(t, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), o = 0, a = n.length; o < a; o += 1)
    s = n[o], ue.call(e, s) || (e[s] = i[s], r[s] = !0);
}
function $e(t, e, i, r, n, s, o, a, l) {
  var c, h;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1)
      Array.isArray(n[c]) && I(t, "nested arrays are not supported inside keys"), typeof n == "object" && na(n[c]) === "[object Object]" && (n[c] = "[object Object]");
  if (typeof n == "object" && na(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (c = 0, h = s.length; c < h; c += 1)
        aa(t, e, s[c], i);
    else
      aa(t, e, s, i);
  else
    !t.json && !ue.call(i, n) && ue.call(e, n) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = l || t.position, I(t, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : e[n] = s, delete i[n];
  return e;
}
function vo(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : I(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function tt(t, e, i) {
  for (var r = 0, n = t.input.charCodeAt(t.position); n !== 0; ) {
    for (; xe(n); )
      n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && n === 35)
      do
        n = t.input.charCodeAt(++t.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (qt(n))
      for (vo(t), n = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; n === 32; )
        t.lineIndent++, n = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t.lineIndent < i && Er(t, "deficient indentation"), r;
}
function Kr(t) {
  var e = t.position, i;
  return i = t.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2) && (e += 3, i = t.input.charCodeAt(e), i === 0 || yt(i)));
}
function So(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += ut.repeat(`
`, e - 1));
}
function fb(t, e, i) {
  var r, n, s, o, a, l, c, h, d = t.kind, u = t.result, f;
  if (f = t.input.charCodeAt(t.position), yt(f) || Me(f) || f === 35 || f === 38 || f === 42 || f === 33 || f === 124 || f === 62 || f === 39 || f === 34 || f === 37 || f === 64 || f === 96 || (f === 63 || f === 45) && (n = t.input.charCodeAt(t.position + 1), yt(n) || i && Me(n)))
    return !1;
  for (t.kind = "scalar", t.result = "", s = o = t.position, a = !1; f !== 0; ) {
    if (f === 58) {
      if (n = t.input.charCodeAt(t.position + 1), yt(n) || i && Me(n))
        break;
    } else if (f === 35) {
      if (r = t.input.charCodeAt(t.position - 1), yt(r))
        break;
    } else {
      if (t.position === t.lineStart && Kr(t) || i && Me(f))
        break;
      if (qt(f))
        if (l = t.line, c = t.lineStart, h = t.lineIndent, tt(t, !1, -1), t.lineIndent >= e) {
          a = !0, f = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = l, t.lineStart = c, t.lineIndent = h;
          break;
        }
    }
    a && (ce(t, s, o, !1), So(t, t.line - l), s = o = t.position, a = !1), xe(f) || (o = t.position + 1), f = t.input.charCodeAt(++t.position);
  }
  return ce(t, s, o, !1), t.result ? !0 : (t.kind = d, t.result = u, !1);
}
function pb(t, e) {
  var i, r, n;
  if (i = t.input.charCodeAt(t.position), i !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (i = t.input.charCodeAt(t.position)) !== 0; )
    if (i === 39)
      if (ce(t, r, t.position, !0), i = t.input.charCodeAt(++t.position), i === 39)
        r = t.position, t.position++, n = t.position;
      else
        return !0;
    else qt(i) ? (ce(t, r, n, !0), So(t, tt(t, !1, e)), r = n = t.position) : t.position === t.lineStart && Kr(t) ? I(t, "unexpected end of the document within a single quoted scalar") : (t.position++, n = t.position);
  I(t, "unexpected end of the stream within a single quoted scalar");
}
function gb(t, e) {
  var i, r, n, s, o, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, i = r = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return ce(t, i, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (ce(t, i, t.position, !0), a = t.input.charCodeAt(++t.position), qt(a))
        tt(t, !1, e);
      else if (a < 256 && kc[a])
        t.result += wc[a], t.position++;
      else if ((o = cb(a)) > 0) {
        for (n = o, s = 0; n > 0; n--)
          a = t.input.charCodeAt(++t.position), (o = lb(a)) >= 0 ? s = (s << 4) + o : I(t, "expected hexadecimal character");
        t.result += ub(s), t.position++;
      } else
        I(t, "unknown escape sequence");
      i = r = t.position;
    } else qt(a) ? (ce(t, i, r, !0), So(t, tt(t, !1, e)), i = r = t.position) : t.position === t.lineStart && Kr(t) ? I(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  I(t, "unexpected end of the stream within a double quoted scalar");
}
function mb(t, e) {
  var i = !0, r, n, s, o = t.tag, a, l = t.anchor, c, h, d, u, f, m = /* @__PURE__ */ Object.create(null), y, b, E, T;
  if (T = t.input.charCodeAt(t.position), T === 91)
    h = 93, f = !1, a = [];
  else if (T === 123)
    h = 125, f = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), T = t.input.charCodeAt(++t.position); T !== 0; ) {
    if (tt(t, !0, e), T = t.input.charCodeAt(t.position), T === h)
      return t.position++, t.tag = o, t.anchor = l, t.kind = f ? "mapping" : "sequence", t.result = a, !0;
    i ? T === 44 && I(t, "expected the node content, but found ','") : I(t, "missed comma between flow collection entries"), b = y = E = null, d = u = !1, T === 63 && (c = t.input.charCodeAt(t.position + 1), yt(c) && (d = u = !0, t.position++, tt(t, !0, e))), r = t.line, n = t.lineStart, s = t.position, Ge(t, e, Ar, !1, !0), b = t.tag, y = t.result, tt(t, !0, e), T = t.input.charCodeAt(t.position), (u || t.line === r) && T === 58 && (d = !0, T = t.input.charCodeAt(++t.position), tt(t, !0, e), Ge(t, e, Ar, !1, !0), E = t.result), f ? $e(t, a, m, b, y, E, r, n, s) : d ? a.push($e(t, null, m, b, y, E, r, n, s)) : a.push(y), tt(t, !0, e), T = t.input.charCodeAt(t.position), T === 44 ? (i = !0, T = t.input.charCodeAt(++t.position)) : i = !1;
  }
  I(t, "unexpected end of the stream within a flow collection");
}
function yb(t, e) {
  var i, r, n = Cn, s = !1, o = !1, a = e, l = 0, c = !1, h, d;
  if (d = t.input.charCodeAt(t.position), d === 124)
    r = !1;
  else if (d === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; d !== 0; )
    if (d = t.input.charCodeAt(++t.position), d === 43 || d === 45)
      Cn === n ? n = d === 43 ? ra : nb : I(t, "repeat of a chomping mode identifier");
    else if ((h = hb(d)) >= 0)
      h === 0 ? I(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? I(t, "repeat of an indentation width identifier") : (a = e + h - 1, o = !0);
    else
      break;
  if (xe(d)) {
    do
      d = t.input.charCodeAt(++t.position);
    while (xe(d));
    if (d === 35)
      do
        d = t.input.charCodeAt(++t.position);
      while (!qt(d) && d !== 0);
  }
  for (; d !== 0; ) {
    for (vo(t), t.lineIndent = 0, d = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && d === 32; )
      t.lineIndent++, d = t.input.charCodeAt(++t.position);
    if (!o && t.lineIndent > a && (a = t.lineIndent), qt(d)) {
      l++;
      continue;
    }
    if (t.lineIndent < a) {
      n === ra ? t.result += ut.repeat(`
`, s ? 1 + l : l) : n === Cn && s && (t.result += `
`);
      break;
    }
    for (r ? xe(d) ? (c = !0, t.result += ut.repeat(`
`, s ? 1 + l : l)) : c ? (c = !1, t.result += ut.repeat(`
`, l + 1)) : l === 0 ? s && (t.result += " ") : t.result += ut.repeat(`
`, l) : t.result += ut.repeat(`
`, s ? 1 + l : l), s = !0, o = !0, l = 0, i = t.position; !qt(d) && d !== 0; )
      d = t.input.charCodeAt(++t.position);
    ce(t, i, t.position, !1);
  }
  return !0;
}
function la(t, e) {
  var i, r = t.tag, n = t.anchor, s = [], o, a = !1, l;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = s), l = t.input.charCodeAt(t.position); l !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, I(t, "tab characters must not be used in indentation")), !(l !== 45 || (o = t.input.charCodeAt(t.position + 1), !yt(o)))); ) {
    if (a = !0, t.position++, tt(t, !0, -1) && t.lineIndent <= e) {
      s.push(null), l = t.input.charCodeAt(t.position);
      continue;
    }
    if (i = t.line, Ge(t, e, Tc, !1, !0), s.push(t.result), tt(t, !0, -1), l = t.input.charCodeAt(t.position), (t.line === i || t.lineIndent > e) && l !== 0)
      I(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = r, t.anchor = n, t.kind = "sequence", t.result = s, !0) : !1;
}
function _b(t, e, i) {
  var r, n, s, o, a, l, c = t.tag, h = t.anchor, d = {}, u = /* @__PURE__ */ Object.create(null), f = null, m = null, y = null, b = !1, E = !1, T;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = d), T = t.input.charCodeAt(t.position); T !== 0; ) {
    if (!b && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, I(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), s = t.line, (T === 63 || T === 58) && yt(r))
      T === 63 ? (b && ($e(t, d, u, f, m, null, o, a, l), f = m = y = null), E = !0, b = !0, n = !0) : b ? (b = !1, n = !0) : I(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, T = r;
    else {
      if (o = t.line, a = t.lineStart, l = t.position, !Ge(t, i, bc, !1, !0))
        break;
      if (t.line === s) {
        for (T = t.input.charCodeAt(t.position); xe(T); )
          T = t.input.charCodeAt(++t.position);
        if (T === 58)
          T = t.input.charCodeAt(++t.position), yt(T) || I(t, "a whitespace character is expected after the key-value separator within a block mapping"), b && ($e(t, d, u, f, m, null, o, a, l), f = m = y = null), E = !0, b = !1, n = !1, f = t.tag, m = t.result;
        else if (E)
          I(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = c, t.anchor = h, !0;
      } else if (E)
        I(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = c, t.anchor = h, !0;
    }
    if ((t.line === s || t.lineIndent > e) && (b && (o = t.line, a = t.lineStart, l = t.position), Ge(t, e, Br, !0, n) && (b ? m = t.result : y = t.result), b || ($e(t, d, u, f, m, y, o, a, l), f = m = y = null), tt(t, !0, -1), T = t.input.charCodeAt(t.position)), (t.line === s || t.lineIndent > e) && T !== 0)
      I(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return b && $e(t, d, u, f, m, null, o, a, l), E && (t.tag = c, t.anchor = h, t.kind = "mapping", t.result = d), E;
}
function Cb(t) {
  var e, i = !1, r = !1, n, s, o;
  if (o = t.input.charCodeAt(t.position), o !== 33)
    return !1;
  if (t.tag !== null && I(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (i = !0, o = t.input.charCodeAt(++t.position)) : o === 33 ? (r = !0, n = "!!", o = t.input.charCodeAt(++t.position)) : n = "!", e = t.position, i) {
    do
      o = t.input.charCodeAt(++t.position);
    while (o !== 0 && o !== 62);
    t.position < t.length ? (s = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : I(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !yt(o); )
      o === 33 && (r ? I(t, "tag suffix cannot contain exclamation marks") : (n = t.input.slice(e - 1, t.position + 1), vc.test(n) || I(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
    s = t.input.slice(e, t.position), ab.test(s) && I(t, "tag suffix cannot contain flow indicator characters");
  }
  s && !Sc.test(s) && I(t, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    I(t, "tag name is malformed: " + s);
  }
  return i ? t.tag = s : ue.call(t.tagMap, n) ? t.tag = t.tagMap[n] + s : n === "!" ? t.tag = "!" + s : n === "!!" ? t.tag = "tag:yaml.org,2002:" + s : I(t, 'undeclared tag handle "' + n + '"'), !0;
}
function xb(t) {
  var e, i;
  if (i = t.input.charCodeAt(t.position), i !== 38)
    return !1;
  for (t.anchor !== null && I(t, "duplication of an anchor property"), i = t.input.charCodeAt(++t.position), e = t.position; i !== 0 && !yt(i) && !Me(i); )
    i = t.input.charCodeAt(++t.position);
  return t.position === e && I(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function bb(t) {
  var e, i, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !yt(r) && !Me(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && I(t, "name of an alias node must contain at least one character"), i = t.input.slice(e, t.position), ue.call(t.anchorMap, i) || I(t, 'unidentified alias "' + i + '"'), t.result = t.anchorMap[i], tt(t, !0, -1), !0;
}
function Ge(t, e, i, r, n) {
  var s, o, a, l = 1, c = !1, h = !1, d, u, f, m, y, b;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = o = a = Br === i || Tc === i, r && tt(t, !0, -1) && (c = !0, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)), l === 1)
    for (; Cb(t) || xb(t); )
      tt(t, !0, -1) ? (c = !0, a = s, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)) : a = !1;
  if (a && (a = c || n), (l === 1 || Br === i) && (Ar === i || bc === i ? y = e : y = e + 1, b = t.position - t.lineStart, l === 1 ? a && (la(t, b) || _b(t, b, y)) || mb(t, y) ? h = !0 : (o && yb(t, y) || pb(t, y) || gb(t, y) ? h = !0 : bb(t) ? (h = !0, (t.tag !== null || t.anchor !== null) && I(t, "alias node should not have any properties")) : fb(t, y, Ar === i) && (h = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : l === 0 && (h = a && la(t, b))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && I(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), d = 0, u = t.implicitTypes.length; d < u; d += 1)
      if (m = t.implicitTypes[d], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (ue.call(t.typeMap[t.kind || "fallback"], t.tag))
      m = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (m = null, f = t.typeMap.multi[t.kind || "fallback"], d = 0, u = f.length; d < u; d += 1)
        if (t.tag.slice(0, f[d].tag.length) === f[d].tag) {
          m = f[d];
          break;
        }
    m || I(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && I(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : I(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || h;
}
function Tb(t) {
  var e = t.position, i, r, n, s = !1, o;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (tt(t, !0, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = t.input.charCodeAt(++t.position), i = t.position; o !== 0 && !yt(o); )
      o = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(i, t.position), n = [], r.length < 1 && I(t, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; xe(o); )
        o = t.input.charCodeAt(++t.position);
      if (o === 35) {
        do
          o = t.input.charCodeAt(++t.position);
        while (o !== 0 && !qt(o));
        break;
      }
      if (qt(o))
        break;
      for (i = t.position; o !== 0 && !yt(o); )
        o = t.input.charCodeAt(++t.position);
      n.push(t.input.slice(i, t.position));
    }
    o !== 0 && vo(t), ue.call(sa, r) ? sa[r](t, r, n) : Er(t, 'unknown document directive "' + r + '"');
  }
  if (tt(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, tt(t, !0, -1)) : s && I(t, "directives end mark is expected"), Ge(t, t.lineIndent - 1, Br, !1, !0), tt(t, !0, -1), t.checkLineBreaks && sb.test(t.input.slice(e, t.position)) && Er(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Kr(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, tt(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    I(t, "end of the stream or a document separator is expected");
  else
    return;
}
function vb(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var i = new db(t, e), r = t.indexOf("\0");
  for (r !== -1 && (i.position = r, I(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    Tb(i);
  return i.documents;
}
function Sb(t, e) {
  var i = vb(t, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Zt("expected a single document in the stream, but found more");
  }
}
var kb = Sb, wb = {
  load: kb
}, Ab = _c, Bb = wb.load;
function Eb(t) {
  const e = t.match(Ol);
  if (!e)
    return {
      text: t,
      metadata: {}
    };
  let i = Bb(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: Ab
  }) ?? {};
  i = typeof i == "object" && !Array.isArray(i) ? i : {};
  const r = {};
  return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
    text: t.slice(e[0].length),
    metadata: r
  };
}
const Lb = (t) => t.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"
), Fb = (t) => {
  const { text: e, metadata: i } = Eb(t), { displayMode: r, title: n, config: s = {} } = i;
  return r && (s.gantt || (s.gantt = {}), s.gantt.displayMode = r), { title: n, config: s, text: e };
}, Ob = (t) => {
  const e = bi.detectInit(t) ?? {}, i = bi.detectDirective(t, "wrap");
  return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
  }) : i?.type === "wrap" && (e.wrap = !0), {
    text: ry(t),
    directive: e
  };
};
function Bc(t) {
  const e = Lb(t), i = Fb(e), r = Ob(i.text), n = Pl(i.config, r.directive);
  return t = qC(r.text), {
    code: t,
    title: i.title,
    config: n
  };
}
const Ib = 5e4, Mb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", $b = "sandbox", Db = "loose", Nb = "http://www.w3.org/2000/svg", Rb = "http://www.w3.org/1999/xlink", Pb = "http://www.w3.org/1999/xhtml", qb = "100%", zb = "100%", Wb = "border:0;margin:0;", Yb = "margin:0", Hb = "allow-top-navigation-by-user-activation allow-popups", jb = 'The "iframe" tag is not supported by your browser.', Ub = ["foreignobject"], Xb = ["dominant-baseline"];
function Ec(t) {
  const e = Bc(t);
  return Sr(), Ey(e.config ?? {}), e;
}
async function Gb(t, e) {
  bo(), t = Ec(t).code;
  try {
    await ko(t);
  } catch (i) {
    if (e?.suppressErrors)
      return !1;
    throw i;
  }
  return !0;
}
const ca = (t, e, i = []) => `
.${t} ${e} { ${i.join(" !important; ")} !important; }`, Vb = (t, e = {}) => {
  var i;
  let r = "";
  if (t.themeCSS !== void 0 && (r += `
${t.themeCSS}`), t.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !un(e)) {
    const a = t.htmlLabels || ((i = t.flowchart) == null ? void 0 : i.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const c = e[l];
      un(c.styles) || a.forEach((h) => {
        r += ca(c.id, h, c.styles);
      }), un(c.textStyles) || (r += ca(c.id, "tspan", c.textStyles));
    }
  }
  return r;
}, Kb = (t, e, i, r) => {
  const n = Vb(t, i), s = V_(e, n, t.themeVariables);
  return On(Em(`${r}{${s}}`), Fm);
}, Zb = (t = "", e, i) => {
  let r = t;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = ky(r), r = r.replace(/<br>/g, "<br/>"), r;
}, Jb = (t = "", e) => {
  var i, r;
  const n = (r = (i = e?.viewBox) == null ? void 0 : i.baseVal) != null && r.height ? e.viewBox.baseVal.height + "px" : zb, s = btoa('<body style="' + Yb + '">' + t + "</body>");
  return `<iframe style="width:${qb};height:${n};${Wb}" src="data:text/html;base64,${s}" sandbox="${Hb}">
  ${jb}
</iframe>`;
}, ha = (t, e, i, r, n) => {
  const s = t.append("div");
  s.attr("id", i), r && s.attr("style", r);
  const o = s.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", Nb);
  return n && o.attr("xmlns:xlink", n), o.append("g"), t;
};
function ua(t, e) {
  return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const Qb = (t, e, i, r) => {
  var n, s, o;
  (n = t.getElementById(e)) == null || n.remove(), (s = t.getElementById(i)) == null || s.remove(), (o = t.getElementById(r)) == null || o.remove();
}, t1 = async function(t, e, i) {
  var r, n, s, o, a, l;
  bo();
  const c = Ec(e);
  e = c.code;
  const h = Wt();
  $.debug(h), e.length > (h?.maxTextSize ?? Ib) && (e = Mb);
  const d = "#" + t, u = "i" + t, f = "#" + u, m = "d" + t, y = "#" + m;
  let b = St("body");
  const E = h.securityLevel === $b, T = h.securityLevel === Db, _ = h.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), E) {
      const M = ua(St(i), u);
      b = St(M.nodes()[0].contentDocument.body), b.node().style.margin = 0;
    } else
      b = St(i);
    ha(b, t, m, `font-family: ${_}`, Rb);
  } else {
    if (Qb(document, t, m, u), E) {
      const M = ua(St("body"), u);
      b = St(M.nodes()[0].contentDocument.body), b.node().style.margin = 0;
    } else
      b = St("body");
    ha(b, t, m);
  }
  let w, A;
  try {
    w = await ko(e, { title: c.title });
  } catch (M) {
    w = new gc("error"), A = M;
  }
  const Y = b.select(y).node(), G = w.type, N = Y.firstChild, K = N.firstChild, H = (n = (r = w.renderer).getClasses) == null ? void 0 : n.call(r, e, w), P = Kb(h, G, H, d), At = document.createElement("style");
  At.innerHTML = P, N.insertBefore(At, K);
  try {
    await w.renderer.draw(e, t, Js, w);
  } catch (M) {
    throw dC.draw(e, t, Js), M;
  }
  const ie = b.select(`${y} svg`), R = (o = (s = w.db).getAccTitle) == null ? void 0 : o.call(s), k = (l = (a = w.db).getAccDescription) == null ? void 0 : l.call(a);
  i1(G, ie, R, k), b.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Pb);
  let x = b.select(y).node().innerHTML;
  if ($.debug("config.arrowMarkerAbsolute", h.arrowMarkerAbsolute), x = Zb(x, E, El(h.arrowMarkerAbsolute)), E) {
    const M = b.select(y + " svg").node();
    x = Jb(x, M);
  } else T || (x = He.sanitize(x, {
    ADD_TAGS: Ub,
    ADD_ATTR: Xb
  }));
  if (DC(), A)
    throw A;
  const S = St(E ? f : y).node();
  return S && "remove" in S && S.remove(), {
    svg: x,
    bindFunctions: w.db.bindFunctions
  };
};
function e1(t = {}) {
  var e;
  t?.fontFamily && !((e = t.themeVariables) != null && e.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), Ay(t), t?.theme && t.theme in Qt ? t.themeVariables = Qt[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Qt.default.getThemeVariables(t.themeVariables));
  const i = typeof t == "object" ? wy(t) : zl();
  co(i.logLevel), bo();
}
const ko = (t, e = {}) => {
  const { code: i } = Bc(t);
  return $C(i, e);
};
function i1(t, e, i, r) {
  RC(e, t), PC(e, i, r, e.attr("id"));
}
const ve = Object.freeze({
  render: t1,
  parse: Gb,
  getDiagramFromText: ko,
  initialize: e1,
  getConfig: Wt,
  setConfig: Wl,
  getSiteConfig: zl,
  updateSiteConfig: By,
  reset: () => {
    Sr();
  },
  globalReset: () => {
    Sr(Ue);
  },
  defaultConfig: Ue
});
co(Wt().logLevel);
Sr(Wt());
const r1 = async () => {
  $.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(je).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          xo(i);
        } catch {
          try {
            const { diagram: o, id: a } = await n();
            wr(a, o, r);
          } catch (o) {
            throw $.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete je[i], o;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    $.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      $.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
}, n1 = (t, e, i) => {
  $.warn(t), Rl(t) ? (i && i(t.str, t.hash), e.push({ ...t, message: t.str, error: t })) : (i && i(t), t instanceof Error && e.push({
    str: t.message,
    message: t.message,
    hash: t.name,
    error: t
  }));
}, Lc = async function(t = {
  querySelector: ".mermaid"
}) {
  try {
    await o1(t);
  } catch (e) {
    if (Rl(e) && $.error(e.str), _t.parseError && _t.parseError(e), !t.suppressErrors)
      throw $.error("Use the suppressErrors option to suppress these errors"), e;
  }
}, o1 = async function({ postRenderCallback: t, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = ve.getConfig();
  $.debug(`${t ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  $.debug(`Found ${n.length} diagrams`), r?.startOnLoad !== void 0 && ($.debug("Start On Load: " + r?.startOnLoad), ve.updateSiteConfig({ startOnLoad: r?.startOnLoad }));
  const s = new bi.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
  let o;
  const a = [];
  for (const l of Array.from(n)) {
    $.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${s.next()}`;
    o = l.innerHTML, o = Gc(bi.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = bi.detectInit(o);
    h && $.debug("Detected early reinit: ", h);
    try {
      const { svg: d, bindFunctions: u } = await Mc(c, o, l);
      l.innerHTML = d, t && await t(c), u && u(l);
    } catch (d) {
      n1(d, a, _t.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
}, Fc = function(t) {
  ve.initialize(t);
}, s1 = async function(t, e, i) {
  $.warn("mermaid.init is deprecated. Please use run instead."), t && Fc(t);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await Lc(r);
}, a1 = async (t, {
  lazyLoad: e = !0
} = {}) => {
  Ml(...t), e === !1 && await r1();
}, Oc = function() {
  if (_t.startOnLoad) {
    const { startOnLoad: t } = ve.getConfig();
    t && _t.run().catch((e) => $.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", Oc, !1);
}
const l1 = function(t) {
  _t.parseError = t;
}, Lr = [];
let xn = !1;
const Ic = async () => {
  if (!xn) {
    for (xn = !0; Lr.length > 0; ) {
      const t = Lr.shift();
      if (t)
        try {
          await t();
        } catch (e) {
          $.error("Error executing queue", e);
        }
    }
    xn = !1;
  }
}, c1 = async (t, e) => new Promise((i, r) => {
  const n = () => new Promise((s, o) => {
    ve.parse(t, e).then(
      (a) => {
        s(a), i(a);
      },
      (a) => {
        var l;
        $.error("Error parsing", a), (l = _t.parseError) == null || l.call(_t, a), o(a), r(a);
      }
    );
  });
  Lr.push(n), Ic().catch(r);
}), Mc = (t, e, i) => new Promise((r, n) => {
  const s = () => new Promise((o, a) => {
    ve.render(t, e, i).then(
      (l) => {
        o(l), r(l);
      },
      (l) => {
        var c;
        $.error("Error parsing", l), (c = _t.parseError) == null || c.call(_t, l), a(l), n(l);
      }
    );
  });
  Lr.push(s), Ic().catch(n);
}), _t = {
  startOnLoad: !0,
  mermaidAPI: ve,
  parse: c1,
  render: Mc,
  init: s1,
  run: Lc,
  registerExternalDiagrams: a1,
  initialize: Fc,
  parseError: void 0,
  contentLoaded: Oc,
  setParseErrorHandler: l1,
  detectType: Gr
}, Je = (t) => {
  t = u1(t);
  const e = t.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), i = document.createElement("textarea");
  return i.innerHTML = e, i.value;
}, Pe = (t) => {
  const i = t.getAttribute("transform")?.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/);
  let r = 0, n = 0;
  return i && (r = Number(i[1]), n = Number(i[2])), { transformX: r, transformY: n };
}, h1 = (t) => {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/classDef.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/#\w+;/g, (i) => {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? `ﬂ°°${r}¶ß` : `ﬂ°${r}¶ß`;
  }), e;
}, u1 = function(t) {
  return t.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, $c = (t, e = { x: 0, y: 0 }) => {
  if (t.tagName.toLowerCase() !== "path")
    throw new Error(`Invalid input: Expected an HTMLElement of tag "path", got ${t.tagName}`);
  const i = t.getAttribute("d");
  if (!i)
    throw new Error('Path element does not contain a "d" attribute');
  const r = i.split(/(?=[LM])/), n = r[0].substring(1).split(",").map((a) => parseFloat(a)), s = r[r.length - 1].substring(1).split(",").map((a) => parseFloat(a)), o = r.map((a) => {
    const l = a.substring(1).split(",").map((c) => parseFloat(c));
    return { x: l[0], y: l[1] };
  }).filter((a, l, c) => {
    if (l === 0 || l === c.length - 1)
      return !0;
    if (a.x === c[l - 1].x && a.y === c[l - 1].y)
      return !1;
    if (l === c.length - 2 && (c[l - 1].x === a.x || c[l - 1].y === a.y)) {
      const h = c[c.length - 1];
      return Math.hypot(h.x - a.x, h.y - a.y) > 20;
    }
    return a.x !== c[l - 1].x || a.y !== c[l - 1].y;
  }).map((a) => ({
    x: a.x + e.x,
    y: a.y + e.y
  }));
  return {
    startX: n[0] + e.x,
    startY: n[1] + e.y,
    endX: s[0] + e.x,
    endY: s[1] + e.y,
    reflectionPoints: o
  };
}, d1 = (t, e) => {
  const i = t.nodes.map((a) => a.startsWith("flowchart-") ? a.split("-")[1] : a), r = e.querySelector(`[id='${t.id}']`);
  if (!r)
    throw new Error("SubGraph element not found");
  const n = wo(r, e), s = r.getBBox(), o = {
    width: s.width,
    height: s.height
  };
  return t.classes = void 0, t.dir = void 0, {
    ...t,
    nodeIds: i,
    ...n,
    ...o,
    text: Je(t.title)
  };
}, f1 = (t, e) => {
  const i = e.querySelector(`[id*="flowchart-${t.id}-"]`);
  if (!i)
    return;
  let r;
  i.parentElement?.tagName.toLowerCase() === "a" && (r = i.parentElement.getAttribute("xlink:href"));
  const n = wo(r ? i.parentElement : i, e), s = i.getBBox(), o = {
    width: s.width,
    height: s.height
  }, a = i.querySelector(".label-container")?.getAttribute("style"), l = i.querySelector(".label")?.getAttribute("style"), c = {};
  a?.split(";").forEach((d) => {
    if (!d)
      return;
    const u = d.split(":")[0].trim(), f = d.split(":")[1].trim();
    c[u] = f;
  });
  const h = {};
  return l?.split(";").forEach((d) => {
    if (!d)
      return;
    const u = d.split(":")[0].trim(), f = d.split(":")[1].trim();
    h[u] = f;
  }), {
    id: t.id,
    labelType: t.labelType,
    text: Je(t.text),
    type: t.type,
    link: r || void 0,
    ...n,
    ...o,
    containerStyle: c,
    labelStyle: h
  };
}, p1 = (t, e, i) => {
  const r = i.querySelector(`[id*="L-${t.start}-${t.end}-${e}"]`);
  if (!r)
    throw new Error("Edge element not found");
  const n = wo(r, i), s = $c(r, n);
  return t.length = void 0, {
    ...t,
    ...s,
    text: Je(t.text)
  };
}, wo = (t, e) => {
  if (!t)
    throw new Error("Element not found");
  let i = t.parentElement?.parentElement;
  const r = t.childNodes[0];
  let n = { x: 0, y: 0 };
  if (r) {
    const { transformX: l, transformY: c } = Pe(r), h = r.getBBox();
    n = {
      x: Number(r.getAttribute("x")) || l + h.x || 0,
      y: Number(r.getAttribute("y")) || c + h.y || 0
    };
  }
  const { transformX: s, transformY: o } = Pe(t), a = {
    x: s + n.x,
    y: o + n.y
  };
  for (; i && i.id !== e.id; ) {
    if (i.classList.value === "root" && i.hasAttribute("transform")) {
      const { transformX: l, transformY: c } = Pe(i);
      a.x += l, a.y += c;
    }
    i = i.parentElement;
  }
  return a;
}, g1 = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = i.getVertices();
  Object.keys(r).forEach((a) => {
    r[a] = f1(r[a], e);
  });
  const n = /* @__PURE__ */ new Map(), s = i.getEdges().filter((a) => e.querySelector(`[id*="L-${a.start}-${a.end}"]`)).map((a) => {
    const l = `${a.start}-${a.end}`, c = n.get(l) || 0;
    return n.set(l, c + 1), p1(a, c, e);
  });
  return {
    type: "flowchart",
    subGraphs: i.getSubGraphs().map((a) => d1(a, e)),
    vertices: r,
    edges: s
  };
}, m1 = (t, e) => {
  const i = {};
  e?.label && (i.label = { text: Je(e.label), fontSize: 16 });
  const r = t.tagName;
  if (r === "line")
    i.startX = Number(t.getAttribute("x1")), i.startY = Number(t.getAttribute("y1")), i.endX = Number(t.getAttribute("x2")), i.endY = Number(t.getAttribute("y2"));
  else if (r === "path") {
    const n = t.getAttribute("d");
    if (!n)
      throw new Error('Path element does not contain a "d" attribute');
    const s = n.split(/(?=[LC])/), o = s[0].substring(1).split(",").map((c) => parseFloat(c)), a = [];
    s.forEach((c) => {
      const h = c.substring(1).trim().split(" ").map((d) => {
        const [u, f] = d.split(",");
        return [
          parseFloat(u) - o[0],
          parseFloat(f) - o[1]
        ];
      });
      a.push(...h);
    });
    const l = a[a.length - 1];
    i.startX = o[0], i.startY = o[1], i.endX = l[0], i.endY = l[1], i.points = a;
  }
  return e?.label && (i.startY = i.startY - 10, i.endY = i.endY - 10), i.strokeColor = t.getAttribute("stroke"), i.strokeWidth = Number(t.getAttribute("stroke-width")), i.type = "arrow", i.strokeStyle = e?.strokeStyle || "solid", i.startArrowhead = e?.startArrowhead || null, i.endArrowhead = e?.endArrowhead || null, i;
}, Dc = (t, e, i, r, n) => {
  const s = {};
  return s.type = "arrow", s.startX = t, s.startY = e, s.endX = i, s.endY = r, Object.assign(s, { ...n }), s;
}, Hn = (t, e, i, r) => ({
  type: "text",
  x: t,
  y: e,
  text: i,
  width: r?.width || 20,
  height: r?.height || 20,
  fontSize: r?.fontSize || Hr,
  id: r?.id,
  groupId: r?.groupId,
  metadata: r?.metadata
}), Nc = (t, e, i) => {
  const r = {}, n = Number(t.getAttribute("x")), s = Number(t.getAttribute("y"));
  r.type = "text", r.text = Je(e), i?.id && (r.id = i.id), i?.groupId && (r.groupId = i.groupId);
  const o = t.getBBox();
  r.width = o.width, r.height = o.height, r.x = n - o.width / 2, r.y = s;
  const a = parseInt(getComputedStyle(t).fontSize);
  return r.fontSize = a, r;
}, Yt = (t, e, i = {}) => {
  const r = {};
  r.type = e;
  const { label: n, subtype: s, id: o, groupId: a } = i;
  r.id = o, a && (r.groupId = a), n && (r.label = {
    text: Je(n.text),
    fontSize: 16,
    verticalAlign: n?.verticalAlign
  });
  const l = t.getBBox();
  switch (r.x = l.x, r.y = l.y, r.width = l.width, r.height = l.height, r.subtype = s, s) {
    case "highlight":
      const c = t.getAttribute("fill");
      c && (r.bgColor = c);
      break;
    case "note":
      r.strokeStyle = "dashed";
      break;
  }
  return r;
}, Oi = (t, e, i, r, n, s) => {
  const o = {};
  return o.startX = e, o.startY = i, o.endX = r, s?.groupId && (o.groupId = s.groupId), s?.id && (o.id = s.id), o.endY = n, o.strokeColor = t.getAttribute("stroke"), o.strokeWidth = Number(t.getAttribute("stroke-width")), o.type = "line", o;
}, da = {
  0: "SOLID",
  1: "DOTTED",
  3: "SOLID_CROSS",
  4: "DOTTED_CROSS",
  5: "SOLID_OPEN",
  6: "DOTTED_OPEN",
  24: "SOLID_POINT",
  25: "DOTTED_POINT"
}, Nt = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  SOLID_POINT: 24,
  DOTTED_POINT: 25,
  CRITICAL_START: 27
}, y1 = (t) => {
  let e;
  switch (t) {
    case Nt.SOLID:
    case Nt.SOLID_CROSS:
    case Nt.SOLID_OPEN:
    case Nt.SOLID_POINT:
      e = "solid";
      break;
    case Nt.DOTTED:
    case Nt.DOTTED_CROSS:
    case Nt.DOTTED_OPEN:
    case Nt.DOTTED_POINT:
      e = "dotted";
      break;
    default:
      e = "solid";
      break;
  }
  return e;
}, _1 = (t, e) => {
  if (!!t.nextElementSibling?.classList.contains("sequenceNumber")) {
    const r = t.nextElementSibling?.textContent;
    if (!r)
      throw new Error("sequence number not present");
    const n = 30, s = n / 2, a = {
      type: "rectangle",
      x: e.startX - 10,
      y: e.startY - s,
      label: { text: r, fontSize: 14 },
      bgColor: "#e9ecef",
      height: n,
      subtype: "sequence"
    };
    Object.assign(e, { sequenceNumber: a });
  }
}, fa = (t, e, i) => {
  if (!t)
    throw "root node not found";
  const r = Jt(), n = Array.from(t.children), s = [];
  return n.forEach((o, a) => {
    const l = `${i?.id}-${a}`;
    let c;
    switch (o.tagName) {
      case "line":
        const h = Number(o.getAttribute("x1")), d = Number(o.getAttribute("y1")), u = Number(o.getAttribute("x2")), f = Number(o.getAttribute("y2"));
        c = Oi(o, h, d, u, f, { groupId: r, id: l });
        break;
      case "text":
        c = Nc(o, e, {
          groupId: r,
          id: l
        });
        break;
      case "circle":
        c = Yt(o, "ellipse", {
          label: o.textContent ? { text: o.textContent } : void 0,
          groupId: r,
          id: l
        });
      default:
        c = Yt(o, Um[o.tagName], {
          label: o.textContent ? { text: o.textContent } : void 0,
          groupId: r,
          id: l
        });
    }
    s.push(c);
  }), s;
}, C1 = (t, e) => {
  const i = Array.from(e.querySelectorAll(".actor-top")), r = Array.from(e.querySelectorAll(".actor-bottom")), n = [], s = [];
  return Object.values(t).forEach((o, a) => {
    const l = i.find((d) => d.getAttribute("name") === o.name), c = r.find((d) => d.getAttribute("name") === o.name);
    if (!l || !c)
      throw "root not found";
    const h = o.description;
    if (o.type === "participant") {
      const d = Yt(l, "rectangle", { id: `${o.name}-top`, label: { text: h }, subtype: "actor" });
      if (!d)
        throw "Top Node element not found!";
      n.push([d]);
      const u = Yt(c, "rectangle", { id: `${o.name}-bottom`, label: { text: h }, subtype: "actor" });
      n.push([u]);
      const f = l?.parentElement?.previousElementSibling;
      if (f?.tagName !== "line")
        throw "Line not found";
      const m = Number(f.getAttribute("x1"));
      if (!d.height)
        throw "Top node element height is null";
      const y = d.y + d.height, b = u.y, E = Number(f.getAttribute("x2")), T = Oi(f, m, y, E, b);
      s.push(T);
    } else if (o.type === "actor") {
      const d = fa(l, h, {
        id: `${o.name}-top`
      });
      n.push(d);
      const u = fa(c, h, {
        id: `${o.name}-bottom`
      });
      n.push(u);
      const f = l.previousElementSibling;
      if (f?.tagName !== "line")
        throw "Line not found";
      const m = Number(f.getAttribute("x1")), y = Number(f.getAttribute("y1")), b = Number(f.getAttribute("x2")), E = u.find((T) => T.type === "ellipse");
      if (E) {
        const T = E.y, _ = Oi(f, m, y, b, T);
        s.push(_);
      }
    }
  }), { nodes: n, lines: s };
}, x1 = (t, e) => {
  const i = [], r = Array.from(e.querySelectorAll('[class*="messageLine"]')), n = Object.keys(da), s = t.filter((o) => n.includes(o.type.toString()));
  return r.forEach((o, a) => {
    const l = s[a], c = da[l.type], h = m1(o, {
      label: l?.message,
      strokeStyle: y1(l.type),
      endArrowhead: c === "SOLID_OPEN" || c === "DOTTED_OPEN" ? null : "arrow"
    });
    _1(o, h), i.push(h);
  }), i;
}, b1 = (t, e) => {
  const i = Array.from(e.querySelectorAll(".note")).map((s) => s.parentElement), r = t.filter((s) => s.type === Nt.NOTE), n = [];
  return i.forEach((s, o) => {
    if (!s)
      return;
    const a = s.firstChild, l = r[o].message, c = Yt(a, "rectangle", {
      label: { text: l },
      subtype: "note"
    });
    n.push(c);
  }), n;
}, T1 = (t) => {
  const e = Array.from(t.querySelectorAll("[class*=activation]")), i = [];
  return e.forEach((r) => {
    const n = Yt(r, "rectangle", {
      label: { text: "" },
      subtype: "activation"
    });
    i.push(n);
  }), i;
}, v1 = (t, e) => {
  const i = Array.from(e.querySelectorAll(".loopLine")), r = [], n = [], s = [];
  i.forEach((h) => {
    const d = Number(h.getAttribute("x1")), u = Number(h.getAttribute("y1")), f = Number(h.getAttribute("x2")), m = Number(h.getAttribute("y2")), y = Oi(h, d, u, f, m);
    y.strokeStyle = "dotted", y.strokeColor = "#adb5bd", y.strokeWidth = 2, r.push(y);
  });
  const o = Array.from(e.querySelectorAll(".loopText")), a = t.filter((h) => h.type === Nt.CRITICAL_START).map((h) => h.message);
  o.forEach((h) => {
    const d = h.textContent || "", u = Nc(h, d), f = d.match(/\[(.*?)\]/)?.[1] || "";
    a.includes(f) && (u.x += 16), n.push(u);
  });
  const l = Array.from(e?.querySelectorAll(".labelBox")), c = Array.from(e?.querySelectorAll(".labelText"));
  return l.forEach((h, d) => {
    const u = c[d]?.textContent || "", f = Yt(h, "rectangle", {
      label: { text: u }
    });
    f.strokeColor = "#adb5bd", f.bgColor = "#e9ecef", f.width = void 0, s.push(f);
  }), { lines: r, texts: n, nodes: s };
}, S1 = (t) => {
  const e = Array.from(t.querySelectorAll(".rect")).filter((r) => r.parentElement?.tagName !== "g"), i = [];
  return e.forEach((r) => {
    const n = Yt(r, "rectangle", {
      label: { text: "" },
      subtype: "highlight"
    });
    i.push(n);
  }), i;
}, k1 = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = [], n = i.getBoxes(), s = S1(e), o = i.getActors(), { nodes: a, lines: l } = C1(o, e), c = i.getMessages(), h = x1(c, e), d = b1(c, e), u = T1(e), f = v1(c, e);
  return r.push(s), r.push(...a), r.push(d), r.push(u), { type: "sequence", lines: l, arrows: h, nodes: r, loops: f, groups: n };
}, Ji = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}, pa = {
  LINE: 0,
  DOTTED_LINE: 1
}, oe = 16, w1 = (t) => {
  let e;
  switch (t) {
    case pa.LINE:
      e = "solid";
      break;
    case pa.DOTTED_LINE:
      e = "dotted";
      break;
    default:
      e = "solid";
  }
  return e;
}, ga = (t) => {
  let e;
  switch (t) {
    case Ji.AGGREGATION:
      e = "diamond_outline";
      break;
    case Ji.COMPOSITION:
      e = "diamond";
      break;
    case Ji.EXTENSION:
      e = "triangle_outline";
      break;
    case "none":
      e = null;
      break;
    case Ji.DEPENDENCY:
    default:
      e = "arrow";
      break;
  }
  return e;
}, A1 = (t, e) => {
  const i = [], r = [], n = [];
  return Object.values(t).forEach((s) => {
    const { domId: o, id: a } = s, l = Jt(), c = e.querySelector(`[data-id=${a}]`);
    if (!c)
      throw Error(`DOM Node with id ${o} not found`);
    const { transformX: h, transformY: d } = Pe(c), u = Yt(c.firstChild, "rectangle", { id: a, groupId: l });
    u.x += h, u.y += d, u.metadata = { classId: a }, i.push(u), Array.from(c.querySelectorAll(".divider")).forEach((y) => {
      const b = Number(y.getAttribute("x1")), E = Number(y.getAttribute("y1")), T = Number(y.getAttribute("x2")), _ = Number(y.getAttribute("y2")), w = Oi(y, b, E, T, _, {
        groupId: l,
        id: Jt()
      });
      w.startX += h, w.startY += d, w.endX += h, w.endY += d, w.metadata = { classId: a }, r.push(w);
    });
    const m = c.querySelector(".label")?.children;
    if (!m)
      throw "label nodes not found";
    Array.from(m).forEach((y) => {
      const b = y.textContent;
      if (!b)
        return;
      const E = Jt(), { transformX: T, transformY: _ } = Pe(y), w = y.getBBox(), Y = Hn(h + T, d + _ + 10, b, {
        width: w.width,
        height: w.height,
        id: E,
        groupId: l,
        metadata: { classId: a }
      });
      n.push(Y);
    });
  }), { nodes: i, lines: r, text: n };
}, B1 = (t, e) => {
  const i = ["triangle_outline", "diamond", "diamond_outline"], r = e.startArrowhead && i.includes(e.startArrowhead), n = e.endArrowhead && i.includes(e.endArrowhead);
  return !n && !r || (r && (t === "LR" ? e.startX -= oe : t === "RL" ? e.startX += oe : t === "TB" ? e.startY -= oe : t === "BT" && (e.startY += oe)), n && (t === "LR" ? e.endX += oe : t === "RL" ? e.endX -= oe : t === "TB" ? e.endY += oe : t === "BT" && (e.endY -= oe))), e;
}, E1 = (t, e, i, r) => {
  const n = i.querySelector(".edgePaths")?.children;
  if (!n)
    throw new Error("No Edges found!");
  const s = [], o = [];
  return t.forEach((a, l) => {
    const { id1: c, id2: h, relation: d } = a, u = e.find((P) => P.id === c), f = e.find((P) => P.id === h), m = w1(d.lineType), y = ga(d.type1), b = ga(d.type2), E = $c(n[l]), T = Dc(E.startX, E.startY, E.endX, E.endY, {
      strokeStyle: m,
      startArrowhead: y,
      endArrowhead: b,
      label: a.title ? { text: a.title } : void 0,
      start: { type: "rectangle", id: u.id },
      end: { type: "rectangle", id: f.id }
    }), _ = B1(r, T);
    s.push(_);
    const { relationTitle1: w, relationTitle2: A } = a, Y = 20, G = 15, N = 15;
    let K, H;
    if (w && w !== "none") {
      switch (r) {
        case "TB":
          K = _.startX - Y, _.endX < _.startX && (K -= N), H = _.startY + G;
          break;
        case "BT":
          K = _.startX + Y, _.endX > _.startX && (K += N), H = _.startY - G;
          break;
        case "LR":
          K = _.startX + Y, H = _.startY + G, _.endY > _.startY && (H += N);
          break;
        case "RL":
          K = _.startX - Y, H = _.startY - G, _.startY > _.endY && (H -= N);
          break;
        default:
          K = _.startX - Y, H = _.startY + G;
      }
      const P = Hn(K, H, w, {
        fontSize: 16
      });
      o.push(P);
    }
    if (A && A !== "none") {
      switch (r) {
        case "TB":
          K = _.endX + Y, _.endX < _.startX && (K += N), H = _.endY - G;
          break;
        case "BT":
          K = _.endX - Y, _.endX > _.startX && (K -= N), H = _.endY + G;
          break;
        case "LR":
          K = _.endX - Y, H = _.endY - G, _.endY > _.startY && (H -= N);
          break;
        case "RL":
          K = _.endX + Y, H = _.endY + G, _.startY > _.endY && (H += N);
          break;
        default:
          K = _.endX + Y, H = _.endY - G;
      }
      const P = Hn(K, H, A, {
        fontSize: 16
      });
      o.push(P);
    }
  }), { arrows: s, text: o };
}, L1 = (t, e, i) => {
  const r = [], n = [];
  return t.forEach((s) => {
    const { id: o, text: a, class: l } = s, c = e.querySelector(`#${o}`);
    if (!c)
      throw new Error(`Node with id ${o} not found!`);
    const { transformX: h, transformY: d } = Pe(c), u = c.firstChild, f = Yt(u, "rectangle", {
      id: o,
      subtype: "note",
      label: { text: a }
    });
    if (Object.assign(f, {
      x: f.x + h,
      y: f.y + d
    }), r.push(f), l) {
      const m = i.find((w) => w.id === l);
      if (!m)
        throw new Error(`class node with id ${l} not found!`);
      const y = f.x + (f.width || 0) / 2, b = f.y + (f.height || 0), E = y, T = m.y, _ = Dc(y, b, E, T, {
        strokeStyle: "dotted",
        startArrowhead: null,
        endArrowhead: null,
        start: { id: f.id, type: "rectangle" },
        end: { id: m.id, type: "rectangle" }
      });
      n.push(_);
    }
  }), { notes: r, connectors: n };
}, F1 = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = i.getDirection(), n = [], s = [], o = [], a = [], l = i.getNamespaces(), c = i.getClasses();
  if (Object.keys(c).length) {
    const y = A1(c, e);
    n.push(y.nodes), s.push(...y.lines), o.push(...y.text), a.push(...y.nodes);
  }
  const h = i.getRelations(), { arrows: d, text: u } = E1(h, a, e, r), { notes: f, connectors: m } = L1(i.getNotes(), e, a);
  return n.push(f), d.push(...m), o.push(...u), { type: "class", nodes: n, lines: s, arrows: d, text: o, namespaces: l };
}, O1 = (t) => {
  const e = t.querySelector("svg");
  if (!e)
    throw new Error("SVG element not found");
  const i = e.getBoundingClientRect(), r = i.width, n = i.height;
  e.setAttribute("width", `${r}`), e.setAttribute("height", `${n}`);
  const s = "image/svg+xml", o = unescape(encodeURIComponent(e.outerHTML)), l = `data:image/svg+xml;base64,${btoa(o)}`;
  return {
    type: "graphImage",
    mimeType: s,
    dataURL: l,
    width: r,
    height: n
  };
}, I1 = async (t, e = Ns) => {
  _t.initialize({ ...Ns, ...e });
  const i = await _t.mermaidAPI.getDiagramFromText(h1(t)), { svg: r } = await _t.render("mermaid-to-excalidraw", t), n = document.createElement("div");
  n.setAttribute("style", "opacity: 0; position: relative; z-index: -1;"), n.innerHTML = r, n.id = "mermaid-diagram", document.body.appendChild(n);
  let s;
  switch (i.type) {
    case "flowchart-v2": {
      s = g1(i, n);
      break;
    }
    case "sequence": {
      s = k1(i, n);
      break;
    }
    case "classDiagram": {
      s = F1(i, n);
      break;
    }
    // fallback to image if diagram type not-supported
    default:
      s = O1(n);
  }
  return n.remove(), s;
}, M1 = async (t, e) => {
  const i = e || {}, r = parseInt(i.themeVariables?.fontSize ?? "") || Hr, n = await I1(t, {
    ...i,
    themeVariables: {
      ...i.themeVariables,
      // Multiplying by 1.25 to increase the font size by 25% and render correctly in Excalidraw
      fontSize: `${r * 1.25}px`
    }
  });
  return o0(n, {
    fontSize: r
  });
}, iT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseMermaidToExcalidraw: M1
}, Symbol.toStringTag, { value: "Module" }));
export {
  oy as $,
  hC as A,
  Jn as B,
  zt as C,
  q1 as D,
  Y1 as E,
  ds as F,
  us as G,
  j1 as H,
  H1 as I,
  W1 as J,
  R1 as K,
  P1 as L,
  z1 as M,
  X1 as N,
  U1 as O,
  V0 as P,
  Y0 as Q,
  Vs as R,
  V1 as S,
  po as T,
  q as U,
  N0 as V,
  Wt as W,
  G1 as X,
  U_ as Y,
  Q0 as Z,
  dy as _,
  J_ as a,
  Ts as a$,
  pf as a0,
  fy as a1,
  rC as a2,
  $i as a3,
  O as a4,
  D as a5,
  mi as a6,
  Pl as a7,
  Ct as a8,
  Ba as a9,
  Hp as aA,
  no as aB,
  gl as aC,
  dl as aD,
  Wg as aE,
  Rg as aF,
  nm as aG,
  pm as aH,
  Ni as aI,
  Ve as aJ,
  yr as aK,
  Vg as aL,
  $m as aM,
  Di as aN,
  Cr as aO,
  Yg as aP,
  sl as aQ,
  Xp as aR,
  Gp as aS,
  pe as aT,
  As as aU,
  Vp as aV,
  oo as aW,
  Up as aX,
  Jp as aY,
  Ke as aZ,
  de as a_,
  sh as aa,
  dg as ab,
  ro as ac,
  mt as ad,
  Yu as ae,
  Xn as af,
  Ea as ag,
  Mi as ah,
  Oa as ai,
  N1 as aj,
  Jc as ak,
  Gn as al,
  ae as am,
  ki as an,
  os as ao,
  Ku as ap,
  Gc as aq,
  Se as ar,
  hm as as,
  rm as at,
  um as au,
  dm as av,
  fl as aw,
  Nr as ax,
  zr as ay,
  xr as az,
  Z_ as b,
  so as b0,
  ll as b1,
  $n as b2,
  rg as b3,
  un as b4,
  iT as b5,
  Co as c,
  St as d,
  lc as e,
  at as f,
  tC as g,
  vr as h,
  Li as i,
  ho as j,
  xy as k,
  $ as l,
  Ri as m,
  iC as n,
  eC as o,
  eT as p,
  K_ as q,
  yf as r,
  Q_ as s,
  El as t,
  bi as u,
  ky as v,
  _y as w,
  tT as x,
  aC as y,
  gy as z
};
