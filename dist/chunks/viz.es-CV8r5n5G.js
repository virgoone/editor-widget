var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
  return typeof t;
} : function(t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, y = function(t, i) {
  if (!(t instanceof i))
    throw new TypeError("Cannot call a class as a function");
}, E = /* @__PURE__ */ (function() {
  function t(i, r) {
    for (var e = 0; e < r.length; e++) {
      var n = r[e];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
    }
  }
  return function(i, r, e) {
    return r && t(i.prototype, r), e && t(i, e), i;
  };
})(), w = Object.assign || function(t) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i];
    for (var e in r)
      Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
  }
  return t;
}, b = (function() {
  function t(i) {
    var r = this;
    y(this, t), this.worker = i, this.listeners = [], this.nextId = 0, this.worker.addEventListener("message", function(e) {
      var n = e.data.id, a = e.data.error, o = e.data.result;
      r.listeners[n](a, o), delete r.listeners[n];
    });
  }
  return E(t, [{
    key: "render",
    value: function(r, e) {
      var n = this;
      return new Promise(function(a, o) {
        var f = n.nextId++;
        n.listeners[f] = function(d, g) {
          if (d) {
            o(new Error(d.message, d.fileName, d.lineNumber));
            return;
          }
          a(g);
        }, n.worker.postMessage({ id: f, src: r, options: e });
      });
    }
  }]), t;
})(), S = function t(i, r) {
  y(this, t);
  var e = i();
  this.render = function(n, a) {
    return new Promise(function(o, f) {
      try {
        o(r(e, n, a));
      } catch (d) {
        f(d);
      }
    });
  };
};
function I(t) {
  return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(i, r) {
    return String.fromCharCode("0x" + r);
  }));
}
function _() {
  return "devicePixelRatio" in window && window.devicePixelRatio > 1 ? window.devicePixelRatio : 1;
}
function T(t) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.scale, e = r === void 0 ? _() : r, n = i.mimeType, a = n === void 0 ? "image/png" : n, o = i.quality, f = o === void 0 ? 1 : o;
  return new Promise(function(d, g) {
    var s = new Image();
    s.onload = function() {
      var u = document.createElement("canvas");
      u.width = s.width * e, u.height = s.height * e;
      var l = u.getContext("2d");
      l.drawImage(s, 0, 0, u.width, u.height), u.toBlob(function(c) {
        var m = new Image();
        m.src = URL.createObjectURL(c), m.width = s.width, m.height = s.height, d(m);
      }, a, f);
    }, s.onerror = function(u) {
      var l;
      "error" in u ? l = u.error : l = new Error("Error loading SVG"), g(l);
    }, s.src = "data:image/svg+xml;base64," + I(t);
  });
}
function x(t) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.scale, e = r === void 0 ? _() : r, n = i.mimeType, a = n === void 0 ? "image/png" : n, o = i.quality, f = o === void 0 ? 1 : o, d = e, g = void 0;
  return a == "image/jpeg" ? g = "jpeg" : a == "image/png" && (g = "png"), new Promise(function(s, u) {
    fabric.loadSVGFromString(t, function(l, c) {
      l.length == 0 && u(new Error("Error loading SVG with Fabric"));
      var m = document.createElement("canvas");
      m.width = c.width, m.height = c.height;
      var v = new fabric.Canvas(m, { enableRetinaScaling: !1 }), h = fabric.util.groupSVGElements(l, c);
      v.add(h).renderAll();
      var p = new Image();
      p.src = v.toDataURL({ format: g, multiplier: d, quality: f }), p.width = c.width, p.height = c.height, s(p);
    });
  });
}
var j = (function() {
  function t() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = i.workerURL, e = i.worker, n = i.Module, a = i.render;
    if (y(this, t), typeof r < "u")
      this.wrapper = new b(new Worker(r));
    else if (typeof e < "u")
      this.wrapper = new b(e);
    else if (typeof n < "u" && typeof a < "u")
      this.wrapper = new S(n, a);
    else if (typeof t.Module < "u" && typeof t.render < "u")
      this.wrapper = new S(t.Module, t.render);
    else
      throw new Error("Must specify workerURL or worker option, Module and render options, or include one of full.render.js or lite.render.js after viz.js.");
  }
  return E(t, [{
    key: "renderString",
    value: function(r) {
      for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.format, a = n === void 0 ? "svg" : n, o = e.engine, f = o === void 0 ? "dot" : o, d = e.files, g = d === void 0 ? [] : d, s = e.images, u = s === void 0 ? [] : s, l = e.yInvert, c = l === void 0 ? !1 : l, m = e.nop, v = m === void 0 ? 0 : m, h = 0; h < u.length; h++)
        g.push({
          path: u[h].path,
          data: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="` + u[h].width + '" height="' + u[h].height + '"></svg>'
        });
      return this.wrapper.render(r, { format: a, engine: f, files: g, images: u, yInvert: c, nop: v });
    }
  }, {
    key: "renderSVGElement",
    value: function(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.renderString(r, w({}, e, { format: "svg" })).then(function(n) {
        var a = new DOMParser();
        return a.parseFromString(n, "image/svg+xml").documentElement;
      });
    }
  }, {
    key: "renderImageElement",
    value: function(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.scale, a = e.mimeType, o = e.quality;
      return this.renderString(r, w({}, e, { format: "svg" })).then(function(f) {
        return (typeof fabric > "u" ? "undefined" : k(fabric)) === "object" && fabric.loadSVGFromString ? x(f, { scale: n, mimeType: a, quality: o }) : T(f, { scale: n, mimeType: a, quality: o });
      });
    }
  }, {
    key: "renderJSONObject",
    value: function(r) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.format;
      return (n !== "json" || n !== "json0") && (n = "json"), this.renderString(r, w({}, e, { format: n })).then(function(a) {
        return JSON.parse(a);
      });
    }
  }]), t;
})();
export {
  j as default
};
