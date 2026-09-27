import { a3 as Sn, s as st, a4 as _n, a5 as Bn, a6 as An, a7 as Ln, a8 as Fn, a9 as En, aa as vn, x as wn, ab as In, ac as On, ad as Mn, ae as Dn, af as Nn, ag as Rn, ah as qn, ai as Pn, aj as zn, ak as $n, al as Wn, k as Yn, am as jn, an as _i, ao as Hn, ap as Un, aq as Xn, u as B, ar as u, as as C, v as F, q as Ce, r as Ee, w as Gn, o as si } from "./isEmpty-BO6FiAO3.js";
import { d as Vn } from "./percentages-BXMCSKIN-Ba7xEDnP.js";
const We = 20, Kn = {
  rect: "rectangle",
  circle: "ellipse"
}, Cr = {
  startOnLoad: !1,
  flowchart: { curve: "linear" },
  themeVariables: {
    // Multiplying by 1.25 to increase the font size by 25% and render correctly in Excalidraw
    fontSize: `${We * 1.25}px`
  },
  maxEdges: 500,
  maxTextSize: 5e4
};
class Ye {
  constructor({ converter: e }) {
    this.convert = (i, r) => this.converter(i, {
      ...r,
      fontSize: r.fontSize || We
    }), this.converter = e;
  }
}
var Et;
(function(t) {
  t.ROUND = "round", t.STADIUM = "stadium", t.DOUBLECIRCLE = "doublecircle", t.CIRCLE = "circle", t.DIAMOND = "diamond";
})(Et || (Et = {}));
var mi;
(function(t) {
  t.COLOR = "color";
})(mi || (mi = {}));
var $t;
(function(t) {
  t.FILL = "fill", t.STROKE = "stroke", t.STROKE_WIDTH = "stroke-width", t.STROKE_DASHARRAY = "stroke-dasharray";
})($t || ($t = {}));
var re = {}, yr;
function Zn() {
  if (yr) return re;
  yr = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.removeMarkdown = void 0;
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
    } catch (o) {
      return console.error(o), e;
    }
    return r;
  };
  return re.removeMarkdown = t, re;
}
var Qn = Zn();
const Jn = {
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
}, ts = (t) => Jn[t], _e = (t) => {
  let e = t.text;
  return t.labelType === "markdown" && (e = Qn.removeMarkdown(t.text)), es(e);
}, es = (t) => {
  const e = /\s?(fa|fab):[a-zA-Z0-9-]+/g;
  return t.replace(e, "");
}, is = (t) => {
  const e = {};
  return Object.keys(t).forEach((i) => {
    switch (i) {
      case $t.FILL: {
        e.backgroundColor = t[i], e.fillStyle = "solid";
        break;
      }
      case $t.STROKE: {
        e.strokeColor = t[i];
        break;
      }
      case $t.STROKE_WIDTH: {
        e.strokeWidth = Number(t[i]?.split("px")[0]);
        break;
      }
      case $t.STROKE_DASHARRAY: {
        e.strokeStyle = "dashed";
        break;
      }
    }
  }), e;
}, rs = (t) => {
  const e = {};
  return Object.keys(t).forEach((i) => {
    i === mi.COLOR && (e.strokeColor = t[i]);
  }), e;
}, os = (t) => {
  const e = {};
  t.subGraphs.map((r) => {
    r.nodeIds.forEach((o) => {
      e[r.id] = {
        id: r.id,
        parent: null,
        isLeaf: !1
      }, e[o] = {
        id: o,
        parent: r.id,
        isLeaf: t.vertices[o] !== void 0
      };
    });
  });
  const i = {};
  return [...Object.keys(t.vertices), ...t.subGraphs.map((r) => r.id)].forEach((r) => {
    if (!e[r])
      return;
    let o = e[r];
    const s = [];
    for (o.isLeaf || s.push(`subgraph_group_${o.id}`); o.parent; )
      s.push(`subgraph_group_${o.parent}`), o = e[o.parent];
    i[r] = s;
  }), {
    getGroupIds: (r) => i[r] || [],
    getParentId: (r) => e[r] ? e[r].parent : null
  };
}, ns = new Ye({
  converter: (t, e) => {
    const i = [], r = e.fontSize, { getGroupIds: o, getParentId: s } = os(t);
    return t.subGraphs.reverse().forEach((n) => {
      const a = o(n.id), l = {
        id: n.id,
        type: "rectangle",
        groupIds: a,
        x: n.x,
        y: n.y,
        width: n.width,
        height: n.height,
        label: {
          groupIds: a,
          text: _e(n),
          fontSize: r,
          verticalAlign: "top"
        }
      };
      i.push(l);
    }), Object.values(t.vertices).forEach((n) => {
      if (!n)
        return;
      const a = o(n.id), l = is(n.containerStyle), d = rs(n.labelStyle);
      let p = {
        id: n.id,
        type: "rectangle",
        groupIds: a,
        x: n.x,
        y: n.y,
        width: n.width,
        height: n.height,
        strokeWidth: 2,
        label: {
          groupIds: a,
          text: _e(n),
          fontSize: r,
          ...d
        },
        link: n.link || null,
        ...l
      };
      switch (n.type) {
        case Et.STADIUM: {
          p = { ...p, roundness: { type: 3 } };
          break;
        }
        case Et.ROUND: {
          p = { ...p, roundness: { type: 3 } };
          break;
        }
        case Et.DOUBLECIRCLE: {
          a.push(`doublecircle_${n.id}}`);
          const c = {
            type: "ellipse",
            groupIds: a,
            x: n.x + 5,
            y: n.y + 5,
            width: n.width - 10,
            height: n.height - 10,
            strokeWidth: 2,
            roundness: { type: 3 },
            label: {
              groupIds: a,
              text: _e(n),
              fontSize: r
            }
          };
          p = { ...p, groupIds: a, type: "ellipse" }, i.push(c);
          break;
        }
        case Et.CIRCLE: {
          p.type = "ellipse";
          break;
        }
        case Et.DIAMOND: {
          p.type = "diamond";
          break;
        }
      }
      i.push(p);
    }), t.edges.forEach((n) => {
      let a = [];
      const l = s(n.start), d = s(n.end);
      l && l === d && (a = o(l));
      const { startX: p, startY: f, reflectionPoints: c } = n, g = c.map((b) => [
        b.x - c[0].x,
        b.y - c[0].y
      ]), y = ts(n.type), T = {
        id: `${n.start}_${n.end}`,
        type: "arrow",
        groupIds: a,
        x: p,
        y: f,
        // 4 and 2 are the Excalidraw's stroke width of thick and thin respectively
        // TODO: use constant exported from Excalidraw package
        strokeWidth: n.stroke === "thick" ? 4 : 2,
        strokeStyle: n.stroke === "dotted" ? "dashed" : void 0,
        points: g,
        ...n.text ? { label: { text: _e(n), fontSize: r, groupIds: a } } : {},
        roundness: {
          type: 2
        },
        ...y
      }, w = i.find((b) => b.id === n.start), S = i.find((b) => b.id === n.end);
      !w || !S || (T.start = {
        id: w.id || ""
      }, T.end = {
        id: S.id || ""
      }, i.push(T));
    }), {
      elements: i
    };
  }
});
let kt = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, i) => (i &= 63, i < 36 ? e += i.toString(36) : i < 62 ? e += (i - 26).toString(36).toUpperCase() : i > 62 ? e += "-" : e += "_", e), "");
const ss = new Ye({
  converter: (t) => {
    const e = kt(), { width: i, height: r } = t, o = {
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
    }, elements: [o] };
  }
}), Bi = (t) => t.replace(/\\n/g, `
`), he = (t) => {
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
}, Ie = (t) => {
  const e = {
    type: "text",
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height,
    text: Bi(t.text) || "",
    fontSize: t.fontSize,
    verticalAlign: "middle"
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), t.id && Object.assign(e, { id: t.id }), e;
}, ce = (t) => {
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
      text: Bi(t?.label?.text || ""),
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
}, Kr = (t) => {
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
      text: Bi(t?.label?.text || ""),
      fontSize: 16
    },
    roundness: {
      type: 2
    },
    start: t.start,
    end: t.end
  };
  return t.groupId && Object.assign(e, { groupIds: [t.groupId] }), e;
}, as = new Ye({
  converter: (t) => {
    const e = [], i = [];
    if (Object.values(t.nodes).forEach((r) => {
      !r || !r.length || r.forEach((o) => {
        let s;
        switch (o.type) {
          case "line":
            s = he(o);
            break;
          case "rectangle":
          case "ellipse":
            s = ce(o);
            break;
          case "text":
            s = Ie(o);
            break;
          default:
            throw `unknown type ${o.type}`;
        }
        o.type === "rectangle" && o?.subtype === "activation" ? i.push(s) : e.push(s);
      });
    }), Object.values(t.lines).forEach((r) => {
      r && e.push(he(r));
    }), Object.values(t.arrows).forEach((r) => {
      r && (e.push(Kr(r)), r.sequenceNumber && e.push(ce(r.sequenceNumber)));
    }), e.push(...i), t.loops) {
      const { lines: r, texts: o, nodes: s } = t.loops;
      r.forEach((n) => {
        e.push(he(n));
      }), o.forEach((n) => {
        e.push(Ie(n));
      }), s.forEach((n) => {
        e.push(ce(n));
      });
    }
    return t.groups && t.groups.forEach((r) => {
      const { actorKeys: o, name: s } = r;
      let n = 1 / 0, a = 1 / 0, l = 0, d = 0;
      if (!o.length)
        return;
      e.filter((E) => {
        if (E.id) {
          const M = E.id.indexOf("-"), Y = E.id.substring(0, M);
          return o.includes(Y);
        }
      }).forEach((E) => {
        if (E.x === void 0 || E.y === void 0 || E.width === void 0 || E.height === void 0)
          throw new Error(`Actor attributes missing ${E}`);
        n = Math.min(n, E.x), a = Math.min(a, E.y), l = Math.max(l, E.x + E.width), d = Math.max(d, E.y + E.height);
      });
      const f = 10, c = n - f, g = a - f, y = l - n + f * 2, x = d - a + f * 2, T = kt(), w = ce({
        type: "rectangle",
        x: c,
        y: g,
        width: y,
        height: x,
        bgColor: r.fill,
        id: T
      });
      e.unshift(w);
      const S = kt(), b = [T];
      e.forEach((E) => {
        if (E.type !== "frame") {
          if (E.x === void 0 || E.y === void 0 || E.width === void 0 || E.height === void 0)
            throw new Error(`Element attributes missing ${E}`);
          if (E.x >= n && E.x + E.width <= l && E.y >= a && E.y + E.height <= d) {
            const M = E.id || kt();
            E.id || Object.assign(E, { id: M }), b.push(M);
          }
        }
      });
      const v = {
        type: "frame",
        id: S,
        name: s,
        children: b
      };
      e.push(v);
    }), { elements: e };
  }
}), ls = new Ye({
  converter: (t) => {
    const e = [];
    return Object.values(t.nodes).forEach((i) => {
      !i || !i.length || i.forEach((r) => {
        let o;
        switch (r.type) {
          case "line":
            o = he(r);
            break;
          case "rectangle":
          case "ellipse":
            o = ce(r);
            break;
          case "text":
            o = Ie(r);
            break;
          default:
            throw `unknown type ${r.type}`;
        }
        e.push(o);
      });
    }), Object.values(t.lines).forEach((i) => {
      i && e.push(he(i));
    }), Object.values(t.arrows).forEach((i) => {
      if (!i)
        return;
      const r = Kr(i);
      e.push(r);
    }), Object.values(t.text).forEach((i) => {
      const r = Ie(i);
      e.push(r);
    }), Object.values(t.namespaces).forEach((i) => {
      const r = Object.keys(i.classes), o = [...r], s = [...t.lines, ...t.arrows, ...t.text];
      r.forEach((a) => {
        const l = s.filter((d) => d.metadata && d.metadata.classId === a).map((d) => d.id);
        l.length && o.push(...l);
      });
      const n = {
        type: "frame",
        id: kt(),
        name: i.id,
        children: o
      };
      e.push(n);
    }), { elements: e };
  }
}), cs = (t, e = {}) => {
  switch (t.type) {
    case "graphImage":
      return ss.convert(t, e);
    case "flowchart":
      return ns.convert(t, e);
    case "sequence":
      return as.convert(t, e);
    case "class":
      return ls.convert(t, e);
    default:
      throw new Error(`graphToExcalidraw: unknown graph type "${t.type}, only flowcharts are supported!"`);
  }
};
const {
  entries: Zr,
  setPrototypeOf: xr,
  isFrozen: hs,
  getPrototypeOf: ds,
  getOwnPropertyDescriptor: us
} = Object;
let {
  freeze: Q,
  seal: at,
  create: Qr
} = Object, {
  apply: Ci,
  construct: yi
} = typeof Reflect < "u" && Reflect;
Q || (Q = function(e) {
  return e;
});
at || (at = function(e) {
  return e;
});
Ci || (Ci = function(e, i, r) {
  return e.apply(i, r);
});
yi || (yi = function(e, i) {
  return new e(...i);
});
const Be = ot(Array.prototype.forEach), br = ot(Array.prototype.pop), oe = ot(Array.prototype.push), ve = ot(String.prototype.toLowerCase), ai = ot(String.prototype.toString), Tr = ot(String.prototype.match), ne = ot(String.prototype.replace), gs = ot(String.prototype.indexOf), fs = ot(String.prototype.trim), ct = ot(Object.prototype.hasOwnProperty), V = ot(RegExp.prototype.test), se = ps(TypeError);
function ot(t) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      r[o - 1] = arguments[o];
    return Ci(t, e, r);
  };
}
function ps(t) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return yi(t, i);
  };
}
function I(t, e) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ve;
  xr && xr(t, null);
  let r = e.length;
  for (; r--; ) {
    let o = e[r];
    if (typeof o == "string") {
      const s = i(o);
      s !== o && (hs(e) || (e[r] = s), o = s);
    }
    t[o] = !0;
  }
  return t;
}
function ms(t) {
  for (let e = 0; e < t.length; e++)
    ct(t, e) || (t[e] = null);
  return t;
}
function Ft(t) {
  const e = Qr(null);
  for (const [i, r] of Zr(t))
    ct(t, i) && (Array.isArray(r) ? e[i] = ms(r) : r && typeof r == "object" && r.constructor === Object ? e[i] = Ft(r) : e[i] = r);
  return e;
}
function ae(t, e) {
  for (; t !== null; ) {
    const r = us(t, e);
    if (r) {
      if (r.get)
        return ot(r.get);
      if (typeof r.value == "function")
        return ot(r.value);
    }
    t = ds(t);
  }
  function i() {
    return null;
  }
  return i;
}
const kr = Q(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), li = Q(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ci = Q(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Cs = Q(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hi = Q(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ys = Q(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sr = Q(["#text"]), _r = Q(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), di = Q(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Br = Q(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ae = Q(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xs = at(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bs = at(/<%[\w\W]*|[\w\W]*%>/gm), Ts = at(/\${[\w\W]*}/gm), ks = at(/^data-[\-\w.\u00B7-\uFFFF]/), Ss = at(/^aria-[\-\w]+$/), Jr = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), _s = at(/^(?:\w+script|data):/i), Bs = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), to = at(/^html$/i), As = at(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: xs,
  ERB_EXPR: bs,
  TMPLIT_EXPR: Ts,
  DATA_ATTR: ks,
  ARIA_ATTR: Ss,
  IS_ALLOWED_URI: Jr,
  IS_SCRIPT_OR_DATA: _s,
  ATTR_WHITESPACE: Bs,
  DOCTYPE_NAME: to,
  CUSTOM_ELEMENT: As
});
const le = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Ls = function() {
  return typeof window > "u" ? null : window;
}, Fs = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  i && i.hasAttribute(o) && (r = i.getAttribute(o));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(s, {
      createHTML(n) {
        return n;
      },
      createScriptURL(n) {
        return n;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function eo() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ls();
  const e = (_) => eo(_);
  if (e.version = "3.1.6", e.removed = [], !t || !t.document || t.document.nodeType !== le.document)
    return e.isSupported = !1, e;
  let {
    document: i
  } = t;
  const r = i, o = r.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: n,
    Node: a,
    Element: l,
    NodeFilter: d,
    NamedNodeMap: p = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: c,
    trustedTypes: g
  } = t, y = l.prototype, x = ae(y, "cloneNode"), T = ae(y, "remove"), w = ae(y, "nextSibling"), S = ae(y, "childNodes"), b = ae(y, "parentNode");
  if (typeof n == "function") {
    const _ = i.createElement("template");
    _.content && _.content.ownerDocument && (i = _.content.ownerDocument);
  }
  let v, E = "";
  const {
    implementation: M,
    createNodeIterator: Y,
    createDocumentFragment: it,
    getElementsByTagName: N
  } = i, {
    importNode: R
  } = r;
  let q = {};
  e.isSupported = typeof Zr == "function" && typeof b == "function" && M && M.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: It,
    ERB_EXPR: Zt,
    TMPLIT_EXPR: Qt,
    DATA_ATTR: Ve,
    ARIA_ATTR: mt,
    IS_SCRIPT_OR_DATA: Yi,
    ATTR_WHITESPACE: Ot,
    CUSTOM_ELEMENT: lt
  } = Ar;
  let {
    IS_ALLOWED_URI: ji
  } = Ar, z = null;
  const Hi = I({}, [...kr, ...li, ...ci, ...hi, ...Sr]);
  let $ = null;
  const Ui = I({}, [..._r, ...di, ...Br, ...Ae]);
  let D = Object.seal(Qr(null, {
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
  })), Jt = null, Ke = null, Xi = !0, Ze = !0, Gi = !1, Vi = !0, Mt = !1, Qe = !0, Lt = !1, Je = !1, ti = !1, Dt = !1, xe = !1, be = !1, Ki = !0, Zi = !1;
  const pn = "user-content-";
  let ei = !0, te = !1, Nt = {}, Rt = null;
  const Qi = I({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ji = null;
  const tr = I({}, ["audio", "video", "img", "source", "image", "track"]);
  let ii = null;
  const er = I({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Te = "http://www.w3.org/1998/Math/MathML", ke = "http://www.w3.org/2000/svg", Ct = "http://www.w3.org/1999/xhtml";
  let qt = Ct, ri = !1, oi = null;
  const mn = I({}, [Te, ke, Ct], ai);
  let ee = null;
  const Cn = ["application/xhtml+xml", "text/html"], yn = "text/html";
  let W = null, Pt = null;
  const xn = i.createElement("form"), ir = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, ni = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Pt && Pt === h)) {
      if ((!h || typeof h != "object") && (h = {}), h = Ft(h), ee = // eslint-disable-next-line unicorn/prefer-includes
      Cn.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? yn : h.PARSER_MEDIA_TYPE, W = ee === "application/xhtml+xml" ? ai : ve, z = ct(h, "ALLOWED_TAGS") ? I({}, h.ALLOWED_TAGS, W) : Hi, $ = ct(h, "ALLOWED_ATTR") ? I({}, h.ALLOWED_ATTR, W) : Ui, oi = ct(h, "ALLOWED_NAMESPACES") ? I({}, h.ALLOWED_NAMESPACES, ai) : mn, ii = ct(h, "ADD_URI_SAFE_ATTR") ? I(
        Ft(er),
        // eslint-disable-line indent
        h.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        W
        // eslint-disable-line indent
      ) : er, Ji = ct(h, "ADD_DATA_URI_TAGS") ? I(
        Ft(tr),
        // eslint-disable-line indent
        h.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        W
        // eslint-disable-line indent
      ) : tr, Rt = ct(h, "FORBID_CONTENTS") ? I({}, h.FORBID_CONTENTS, W) : Qi, Jt = ct(h, "FORBID_TAGS") ? I({}, h.FORBID_TAGS, W) : {}, Ke = ct(h, "FORBID_ATTR") ? I({}, h.FORBID_ATTR, W) : {}, Nt = ct(h, "USE_PROFILES") ? h.USE_PROFILES : !1, Xi = h.ALLOW_ARIA_ATTR !== !1, Ze = h.ALLOW_DATA_ATTR !== !1, Gi = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Vi = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Mt = h.SAFE_FOR_TEMPLATES || !1, Qe = h.SAFE_FOR_XML !== !1, Lt = h.WHOLE_DOCUMENT || !1, Dt = h.RETURN_DOM || !1, xe = h.RETURN_DOM_FRAGMENT || !1, be = h.RETURN_TRUSTED_TYPE || !1, ti = h.FORCE_BODY || !1, Ki = h.SANITIZE_DOM !== !1, Zi = h.SANITIZE_NAMED_PROPS || !1, ei = h.KEEP_CONTENT !== !1, te = h.IN_PLACE || !1, ji = h.ALLOWED_URI_REGEXP || Jr, qt = h.NAMESPACE || Ct, D = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && ir(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && ir(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Mt && (Ze = !1), xe && (Dt = !0), Nt && (z = I({}, Sr), $ = [], Nt.html === !0 && (I(z, kr), I($, _r)), Nt.svg === !0 && (I(z, li), I($, di), I($, Ae)), Nt.svgFilters === !0 && (I(z, ci), I($, di), I($, Ae)), Nt.mathMl === !0 && (I(z, hi), I($, Br), I($, Ae))), h.ADD_TAGS && (z === Hi && (z = Ft(z)), I(z, h.ADD_TAGS, W)), h.ADD_ATTR && ($ === Ui && ($ = Ft($)), I($, h.ADD_ATTR, W)), h.ADD_URI_SAFE_ATTR && I(ii, h.ADD_URI_SAFE_ATTR, W), h.FORBID_CONTENTS && (Rt === Qi && (Rt = Ft(Rt)), I(Rt, h.FORBID_CONTENTS, W)), ei && (z["#text"] = !0), Lt && I(z, ["html", "head", "body"]), z.table && (I(z, ["tbody"]), delete Jt.tbody), h.TRUSTED_TYPES_POLICY) {
        if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw se('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw se('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = h.TRUSTED_TYPES_POLICY, E = v.createHTML("");
      } else
        v === void 0 && (v = Fs(g, o)), v !== null && typeof E == "string" && (E = v.createHTML(""));
      Q && Q(h), Pt = h;
    }
  }, rr = I({}, ["mi", "mo", "mn", "ms", "mtext"]), or = I({}, ["foreignobject", "annotation-xml"]), bn = I({}, ["title", "style", "font", "a", "script"]), nr = I({}, [...li, ...ci, ...Cs]), sr = I({}, [...hi, ...ys]), Tn = function(h) {
    let m = b(h);
    (!m || !m.tagName) && (m = {
      namespaceURI: qt,
      tagName: "template"
    });
    const k = ve(h.tagName), O = ve(m.tagName);
    return oi[h.namespaceURI] ? h.namespaceURI === ke ? m.namespaceURI === Ct ? k === "svg" : m.namespaceURI === Te ? k === "svg" && (O === "annotation-xml" || rr[O]) : !!nr[k] : h.namespaceURI === Te ? m.namespaceURI === Ct ? k === "math" : m.namespaceURI === ke ? k === "math" && or[O] : !!sr[k] : h.namespaceURI === Ct ? m.namespaceURI === ke && !or[O] || m.namespaceURI === Te && !rr[O] ? !1 : !sr[k] && (bn[k] || !nr[k]) : !!(ee === "application/xhtml+xml" && oi[h.namespaceURI]) : !1;
  }, ht = function(h) {
    oe(e.removed, {
      element: h
    });
    try {
      b(h).removeChild(h);
    } catch {
      T(h);
    }
  }, Se = function(h, m) {
    try {
      oe(e.removed, {
        attribute: m.getAttributeNode(h),
        from: m
      });
    } catch {
      oe(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(h), h === "is" && !$[h])
      if (Dt || xe)
        try {
          ht(m);
        } catch {
        }
      else
        try {
          m.setAttribute(h, "");
        } catch {
        }
  }, ar = function(h) {
    let m = null, k = null;
    if (ti)
      h = "<remove></remove>" + h;
    else {
      const j = Tr(h, /^[\r\n\t ]+/);
      k = j && j[0];
    }
    ee === "application/xhtml+xml" && qt === Ct && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const O = v ? v.createHTML(h) : h;
    if (qt === Ct)
      try {
        m = new c().parseFromString(O, ee);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = M.createDocument(qt, "template", null);
      try {
        m.documentElement.innerHTML = ri ? E : O;
      } catch {
      }
    }
    const H = m.body || m.documentElement;
    return h && k && H.insertBefore(i.createTextNode(k), H.childNodes[0] || null), qt === Ct ? N.call(m, Lt ? "html" : "body")[0] : Lt ? m.documentElement : H;
  }, lr = function(h) {
    return Y.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, cr = function(h) {
    return h instanceof f && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof p) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, hr = function(h) {
    return typeof a == "function" && h instanceof a;
  }, yt = function(h, m, k) {
    q[h] && Be(q[h], (O) => {
      O.call(e, m, k, Pt);
    });
  }, dr = function(h) {
    let m = null;
    if (yt("beforeSanitizeElements", h, null), cr(h))
      return ht(h), !0;
    const k = W(h.nodeName);
    if (yt("uponSanitizeElement", h, {
      tagName: k,
      allowedTags: z
    }), h.hasChildNodes() && !hr(h.firstElementChild) && V(/<[/\w]/g, h.innerHTML) && V(/<[/\w]/g, h.textContent) || h.nodeType === le.progressingInstruction || Qe && h.nodeType === le.comment && V(/<[/\w]/g, h.data))
      return ht(h), !0;
    if (!z[k] || Jt[k]) {
      if (!Jt[k] && gr(k) && (D.tagNameCheck instanceof RegExp && V(D.tagNameCheck, k) || D.tagNameCheck instanceof Function && D.tagNameCheck(k)))
        return !1;
      if (ei && !Rt[k]) {
        const O = b(h) || h.parentNode, H = S(h) || h.childNodes;
        if (H && O) {
          const j = H.length;
          for (let J = j - 1; J >= 0; --J) {
            const dt = x(H[J], !0);
            dt.__removalCount = (h.__removalCount || 0) + 1, O.insertBefore(dt, w(h));
          }
        }
      }
      return ht(h), !0;
    }
    return h instanceof l && !Tn(h) || (k === "noscript" || k === "noembed" || k === "noframes") && V(/<\/no(script|embed|frames)/i, h.innerHTML) ? (ht(h), !0) : (Mt && h.nodeType === le.text && (m = h.textContent, Be([It, Zt, Qt], (O) => {
      m = ne(m, O, " ");
    }), h.textContent !== m && (oe(e.removed, {
      element: h.cloneNode()
    }), h.textContent = m)), yt("afterSanitizeElements", h, null), !1);
  }, ur = function(h, m, k) {
    if (Ki && (m === "id" || m === "name") && (k in i || k in xn))
      return !1;
    if (!(Ze && !Ke[m] && V(Ve, m))) {
      if (!(Xi && V(mt, m))) {
        if (!$[m] || Ke[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(gr(h) && (D.tagNameCheck instanceof RegExp && V(D.tagNameCheck, h) || D.tagNameCheck instanceof Function && D.tagNameCheck(h)) && (D.attributeNameCheck instanceof RegExp && V(D.attributeNameCheck, m) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && V(D.tagNameCheck, k) || D.tagNameCheck instanceof Function && D.tagNameCheck(k)))
          ) return !1;
        } else if (!ii[m]) {
          if (!V(ji, ne(k, Ot, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && h !== "script" && gs(k, "data:") === 0 && Ji[h])) {
              if (!(Gi && !V(Yi, ne(k, Ot, "")))) {
                if (k)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, gr = function(h) {
    return h !== "annotation-xml" && Tr(h, lt);
  }, fr = function(h) {
    yt("beforeSanitizeAttributes", h, null);
    const {
      attributes: m
    } = h;
    if (!m)
      return;
    const k = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: $
    };
    let O = m.length;
    for (; O--; ) {
      const H = m[O], {
        name: j,
        namespaceURI: J,
        value: dt
      } = H, ie = W(j);
      let G = j === "value" ? dt : fs(dt);
      if (k.attrName = ie, k.attrValue = G, k.keepAttr = !0, k.forceKeepAttr = void 0, yt("uponSanitizeAttribute", h, k), G = k.attrValue, Qe && V(/((--!?|])>)|<\/(style|title)/i, G)) {
        Se(j, h);
        continue;
      }
      if (k.forceKeepAttr || (Se(j, h), !k.keepAttr))
        continue;
      if (!Vi && V(/\/>/i, G)) {
        Se(j, h);
        continue;
      }
      Mt && Be([It, Zt, Qt], (mr) => {
        G = ne(G, mr, " ");
      });
      const pr = W(h.nodeName);
      if (ur(pr, ie, G)) {
        if (Zi && (ie === "id" || ie === "name") && (Se(j, h), G = pn + G), v && typeof g == "object" && typeof g.getAttributeType == "function" && !J)
          switch (g.getAttributeType(pr, ie)) {
            case "TrustedHTML": {
              G = v.createHTML(G);
              break;
            }
            case "TrustedScriptURL": {
              G = v.createScriptURL(G);
              break;
            }
          }
        try {
          J ? h.setAttributeNS(J, j, G) : h.setAttribute(j, G), cr(h) ? ht(h) : br(e.removed);
        } catch {
        }
      }
    }
    yt("afterSanitizeAttributes", h, null);
  }, kn = function _(h) {
    let m = null;
    const k = lr(h);
    for (yt("beforeSanitizeShadowDOM", h, null); m = k.nextNode(); )
      yt("uponSanitizeShadowNode", m, null), !dr(m) && (m.content instanceof s && _(m.content), fr(m));
    yt("afterSanitizeShadowDOM", h, null);
  };
  return e.sanitize = function(_) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = null, k = null, O = null, H = null;
    if (ri = !_, ri && (_ = "<!-->"), typeof _ != "string" && !hr(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw se("dirty is not a string, aborting");
      } else
        throw se("toString is not a function");
    if (!e.isSupported)
      return _;
    if (Je || ni(h), e.removed = [], typeof _ == "string" && (te = !1), te) {
      if (_.nodeName) {
        const dt = W(_.nodeName);
        if (!z[dt] || Jt[dt])
          throw se("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof a)
      m = ar("<!---->"), k = m.ownerDocument.importNode(_, !0), k.nodeType === le.element && k.nodeName === "BODY" || k.nodeName === "HTML" ? m = k : m.appendChild(k);
    else {
      if (!Dt && !Mt && !Lt && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return v && be ? v.createHTML(_) : _;
      if (m = ar(_), !m)
        return Dt ? null : be ? E : "";
    }
    m && ti && ht(m.firstChild);
    const j = lr(te ? _ : m);
    for (; O = j.nextNode(); )
      dr(O) || (O.content instanceof s && kn(O.content), fr(O));
    if (te)
      return _;
    if (Dt) {
      if (xe)
        for (H = it.call(m.ownerDocument); m.firstChild; )
          H.appendChild(m.firstChild);
      else
        H = m;
      return ($.shadowroot || $.shadowrootmode) && (H = R.call(r, H, !0)), H;
    }
    let J = Lt ? m.outerHTML : m.innerHTML;
    return Lt && z["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && V(to, m.ownerDocument.doctype.name) && (J = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + J), Mt && Be([It, Zt, Qt], (dt) => {
      J = ne(J, dt, " ");
    }), v && be ? v.createHTML(J) : J;
  }, e.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ni(_), Je = !0;
  }, e.clearConfig = function() {
    Pt = null, Je = !1;
  }, e.isValidAttribute = function(_, h, m) {
    Pt || ni({});
    const k = W(_), O = W(h);
    return ur(k, O, m);
  }, e.addHook = function(_, h) {
    typeof h == "function" && (q[_] = q[_] || [], oe(q[_], h));
  }, e.removeHook = function(_) {
    if (q[_])
      return br(q[_]);
  }, e.removeHooks = function(_) {
    q[_] && (q[_] = []);
  }, e.removeAllHooks = function() {
    q = {};
  }, e;
}
var Ht = eo();
const xt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, L = {
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
}, Ai = function(t = "fatal") {
  let e = xt.fatal;
  typeof t == "string" ? (t = t.toLowerCase(), t in xt && (e = xt[t])) : typeof t == "number" && (e = t), L.trace = () => {
  }, L.debug = () => {
  }, L.info = () => {
  }, L.warn = () => {
  }, L.error = () => {
  }, L.fatal = () => {
  }, e <= xt.fatal && (L.fatal = console.error ? console.error.bind(console, nt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", nt("FATAL"))), e <= xt.error && (L.error = console.error ? console.error.bind(console, nt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", nt("ERROR"))), e <= xt.warn && (L.warn = console.warn ? console.warn.bind(console, nt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", nt("WARN"))), e <= xt.info && (L.info = console.info ? console.info.bind(console, nt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", nt("INFO"))), e <= xt.debug && (L.debug = console.debug ? console.debug.bind(console, nt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", nt("DEBUG"))), e <= xt.trace && (L.trace = console.debug ? console.debug.bind(console, nt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", nt("TRACE")));
}, nt = (t) => `%c${Gn().format("ss.SSS")} : ${t} : `, ye = /<br\s*\/?>/gi, Es = (t) => t ? ro(t).replace(/\\n/g, "#br#").split("#br#") : [""], vs = /* @__PURE__ */ (() => {
  let t = !1;
  return () => {
    t || (ws(), t = !0);
  };
})();
function ws() {
  const t = "data-temp-href-target";
  Ht.addHook("beforeSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") || "");
  }), Ht.addHook("afterSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) || ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
  });
}
const io = (t) => (vs(), Ht.sanitize(t)), Lr = (t, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== !1) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t = io(t) : r !== "loose" && (t = ro(t), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = t.replace(/=/g, "&equals;"), t = Ds(t));
  }
  return t;
}, fe = (t, e) => t && (e.dompurifyConfig ? t = Ht.sanitize(Lr(t, e), e.dompurifyConfig).toString() : t = Ht.sanitize(Lr(t, e), {
  FORBID_TAGS: ["style"]
}).toString(), t), Is = (t, e) => typeof t == "string" ? fe(t, e) : t.flat().map((i) => fe(i, e)), Os = (t) => ye.test(t), Ms = (t) => t.split(ye), Ds = (t) => t.replace(/#br#/g, "<br/>"), ro = (t) => t.replace(ye, "#br#"), Ns = (t) => {
  let e = "";
  return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
}, oo = (t) => !(t === !1 || ["false", "null", "0"].includes(String(t).trim().toLowerCase())), Rs = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.max(...e);
}, qs = function(...t) {
  const e = t.filter((i) => !isNaN(i));
  return Math.min(...e);
}, $u = function(t) {
  const e = t.split(/(,)/), i = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "," && r > 0 && r + 1 < e.length) {
      const s = e[r - 1], n = e[r + 1];
      Ps(s, n) && (o = s + "," + n, r++, i.pop());
    }
    i.push(zs(o));
  }
  return i.join("");
}, xi = (t, e) => Math.max(0, t.split(e).length - 1), Ps = (t, e) => {
  const i = xi(t, "~"), r = xi(e, "~");
  return i === 1 && r === 1;
}, zs = (t) => {
  const e = xi(t, "~");
  let i = !1;
  if (e <= 1)
    return t;
  e % 2 !== 0 && t.startsWith("~") && (t = t.substring(1), i = !0);
  const r = [...t];
  let o = r.indexOf("~"), s = r.lastIndexOf("~");
  for (; o !== -1 && s !== -1 && o !== s; )
    r[o] = "<", r[s] = ">", o = r.indexOf("~"), s = r.lastIndexOf("~");
  return i && r.unshift("~"), r.join("");
}, Fr = () => window.MathMLElement !== void 0, bi = /\$\$(.*)\$\$/g, Er = (t) => {
  var e;
  return (((e = t.match(bi)) == null ? void 0 : e.length) ?? 0) > 0;
}, Wu = async (t, e) => {
  t = await $s(t, e);
  const i = document.createElement("div");
  i.innerHTML = t, i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0";
  const r = document.querySelector("body");
  r?.insertAdjacentElement("beforeend", i);
  const o = { width: i.clientWidth, height: i.clientHeight };
  return i.remove(), o;
}, $s = async (t, e) => {
  if (!Er(t))
    return t;
  if (!Fr() && !e.legacyMathML)
    return t.replace(bi, "MathML is unsupported in this environment.");
  const { default: i } = await import("./katex-Bt22TY51.js");
  return t.split(ye).map(
    (r) => Er(r) ? `
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${r}
            </div>
          ` : `<div>${r}</div>`
  ).join("").replace(
    bi,
    (r, o) => i.renderToString(o, {
      throwOnError: !0,
      displayMode: !0,
      output: Fr() ? "mathml" : "htmlAndMathml"
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
  );
}, Li = {
  getRows: Es,
  sanitizeText: fe,
  sanitizeTextOrArray: Is,
  hasBreaks: Os,
  splitBreaks: Ms,
  lineBreakRegex: ye,
  removeScript: io,
  getUrl: Ns,
  evaluate: oo,
  getMax: Rs,
  getMin: qs
}, Z = (t, e) => e ? u(t, { s: -40, l: 10 }) : u(t, { s: -40, l: -10 }), je = "#ffffff", He = "#f2f2f2";
let Ws = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var e, i, r, o, s, n, a, l, d, p, f;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || u(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || u(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || C(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || C(this.tertiaryColor), this.lineColor = this.lineColor || C(this.background), this.arrowheadColor = this.arrowheadColor || C(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? F(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || F(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || C(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || B(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || u(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || u(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || u(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || u(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || u(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || u(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || u(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || u(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || u(this.primaryColor, { h: 330 }), this.darkMode)
      for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
        this["cScale" + g] = F(this["cScale" + g], 75);
    else
      for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
        this["cScale" + g] = F(this["cScale" + g], 25);
    for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
      this["cScaleInv" + g] = this["cScaleInv" + g] || C(this["cScale" + g]);
    for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
      this.darkMode ? this["cScalePeer" + g] = this["cScalePeer" + g] || B(this["cScale" + g], 10) : this["cScalePeer" + g] = this["cScalePeer" + g] || F(this["cScale" + g], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
      this["cScaleLabel" + g] = this["cScaleLabel" + g] || this.scaleLabelColor;
    const c = this.darkMode ? -4 : -1;
    for (let g = 0; g < 5; g++)
      this["surface" + g] = this["surface" + g] || u(this.mainBkg, { h: 180, s: -15, l: c * (5 + g * 3) }), this["surfacePeer" + g] = this["surfacePeer" + g] || u(this.mainBkg, { h: 180, s: -15, l: c * (8 + g * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || u(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || u(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || u(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || u(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || u(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || u(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || u(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || u(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || u(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || u(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || u(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || u(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || u(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || u(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || u(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || u(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || u(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || u(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || u(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || u(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || u(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ce(this.quadrant1Fill) ? B(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((p = this.xyChart) == null ? void 0 : p.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? F(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || u(this.primaryColor, { h: -30 }), this.git4 = this.git4 || u(this.primaryColor, { h: -60 }), this.git5 = this.git5 || u(this.primaryColor, { h: -90 }), this.git6 = this.git6 || u(this.primaryColor, { h: 60 }), this.git7 = this.git7 || u(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || je, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || He;
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
const Ys = (t) => {
  const e = new Ws();
  return e.calculate(t), e;
};
let js = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = B(this.primaryColor, 16), this.tertiaryColor = u(this.primaryColor, { h: -160 }), this.primaryBorderColor = C(this.background), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = B(C("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = Ee(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = F("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = F(this.sectionBkgColor, 10), this.taskBorderColor = Ee(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Ee(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var e, i, r, o, s, n, a, l, d, p, f;
    this.secondBkg = B(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = B(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = B(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = u(this.primaryColor, { h: 64 }), this.fillType3 = u(this.secondaryColor, { h: 64 }), this.fillType4 = u(this.primaryColor, { h: -64 }), this.fillType5 = u(this.secondaryColor, { h: -64 }), this.fillType6 = u(this.primaryColor, { h: 128 }), this.fillType7 = u(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || u(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || u(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || u(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || u(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || u(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || u(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || u(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || u(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || u(this.primaryColor, { h: 330 });
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || C(this["cScale" + c]);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScalePeer" + c] = this["cScalePeer" + c] || B(this["cScale" + c], 10);
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || u(this.mainBkg, { h: 30, s: -30, l: -(-10 + c * 4) }), this["surfacePeer" + c] = this["surfacePeer" + c] || u(this.mainBkg, { h: 30, s: -30, l: -(-7 + c * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["pie" + c] = this["cScale" + c];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || u(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || u(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || u(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || u(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || u(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || u(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ce(this.quadrant1Fill) ? B(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((p = this.xyChart) == null ? void 0 : p.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? F(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = B(this.secondaryColor, 20), this.git1 = B(this.pie2 || this.secondaryColor, 20), this.git2 = B(this.pie3 || this.tertiaryColor, 20), this.git3 = B(this.pie4 || u(this.primaryColor, { h: -30 }), 20), this.git4 = B(this.pie5 || u(this.primaryColor, { h: -60 }), 20), this.git5 = B(this.pie6 || u(this.primaryColor, { h: -90 }), 10), this.git6 = B(this.pie7 || u(this.primaryColor, { h: 60 }), 10), this.git7 = B(this.pie8 || u(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || B(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || B(this.background, 2);
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
const Hs = (t) => {
  const e = new js();
  return e.calculate(t), e;
};
let Us = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = u(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = u(this.primaryColor, { h: -160 }), this.primaryBorderColor = Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = Ee(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var e, i, r, o, s, n, a, l, d, p, f;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || u(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || u(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || u(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || u(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || u(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || u(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || u(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || u(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || u(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || F(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || F(this.tertiaryColor, 40);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScale" + c] = F(this["cScale" + c], 10), this["cScalePeer" + c] = this["cScalePeer" + c] || F(this["cScale" + c], 25);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || u(this["cScale" + c], { h: 180 });
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || u(this.mainBkg, { h: 30, l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || u(this.mainBkg, { h: 30, l: -(7 + c * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || C(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || C(this.labelTextColor);
      for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
        this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = B(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = u(this.primaryColor, { h: 64 }), this.fillType3 = u(this.secondaryColor, { h: 64 }), this.fillType4 = u(this.primaryColor, { h: -64 }), this.fillType5 = u(this.secondaryColor, { h: -64 }), this.fillType6 = u(this.primaryColor, { h: 128 }), this.fillType7 = u(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || u(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || u(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || u(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || u(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || u(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || u(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || u(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || u(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || u(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || u(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || u(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || u(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || u(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || u(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || u(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || u(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ce(this.quadrant1Fill) ? B(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((p = this.xyChart) == null ? void 0 : p.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || u(this.primaryColor, { h: -30 }), this.git4 = this.git4 || u(this.primaryColor, { h: -60 }), this.git5 = this.git5 || u(this.primaryColor, { h: -90 }), this.git6 = this.git6 || u(this.primaryColor, { h: 60 }), this.git7 = this.git7 || u(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(C(this.git0), 25), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || je, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || He;
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
const Xs = (t) => {
  const e = new Us();
  return e.calculate(t), e;
};
let Gs = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = B("#cde498", 10), this.primaryBorderColor = Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.primaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, o, s, n, a, l, d, p, f;
    this.actorBorder = F(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || u(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || u(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || u(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || u(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || u(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || u(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || u(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || u(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || u(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || F(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || F(this.tertiaryColor, 40);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScale" + c] = F(this["cScale" + c], 10), this["cScalePeer" + c] = this["cScalePeer" + c] || F(this["cScale" + c], 25);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || u(this["cScale" + c], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || u(this.mainBkg, { h: 30, s: -30, l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || u(this.mainBkg, { h: 30, s: -30, l: -(8 + c * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = u(this.primaryColor, { h: 64 }), this.fillType3 = u(this.secondaryColor, { h: 64 }), this.fillType4 = u(this.primaryColor, { h: -64 }), this.fillType5 = u(this.secondaryColor, { h: -64 }), this.fillType6 = u(this.primaryColor, { h: 128 }), this.fillType7 = u(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || u(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || u(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || u(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || u(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || u(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || u(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || u(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || u(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || u(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || u(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || u(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || u(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || u(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || u(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || u(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ce(this.quadrant1Fill) ? B(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((p = this.xyChart) == null ? void 0 : p.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || u(this.primaryColor, { h: -30 }), this.git4 = this.git4 || u(this.primaryColor, { h: -60 }), this.git5 = this.git5 || u(this.primaryColor, { h: -90 }), this.git6 = this.git6 || u(this.primaryColor, { h: 60 }), this.git7 = this.git7 || u(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || je, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || He;
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
const Vs = (t) => {
  const e = new Gs();
  return e.calculate(t), e;
};
class Ks {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = B(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = u(this.primaryColor, { h: -160 }), this.primaryBorderColor = Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, o, s, n, a, l, d, p, f;
    this.secondBkg = B(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = B(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || C(this["cScale" + c]);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this.darkMode ? this["cScalePeer" + c] = this["cScalePeer" + c] || B(this["cScale" + c], 10) : this["cScalePeer" + c] = this["cScalePeer" + c] || F(this["cScale" + c], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || u(this.mainBkg, { l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || u(this.mainBkg, { l: -(8 + c * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = B(this.contrast, 30), this.sectionBkgColor2 = B(this.contrast, 30), this.taskBorderColor = F(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = B(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = F(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = u(this.primaryColor, { h: 64 }), this.fillType3 = u(this.secondaryColor, { h: 64 }), this.fillType4 = u(this.primaryColor, { h: -64 }), this.fillType5 = u(this.secondaryColor, { h: -64 }), this.fillType6 = u(this.primaryColor, { h: 128 }), this.fillType7 = u(this.secondaryColor, { h: 128 });
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["pie" + c] = this["cScale" + c];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || u(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || u(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || u(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || u(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || u(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || u(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Ce(this.quadrant1Fill) ? B(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((d = this.xyChart) == null ? void 0 : d.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((p = this.xyChart) == null ? void 0 : p.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = F(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || u(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || u(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || u(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || u(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || u(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || je, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || He;
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
const Zs = (t) => {
  const e = new Ks();
  return e.calculate(t), e;
}, St = {
  base: {
    getThemeVariables: Ys
  },
  dark: {
    getThemeVariables: Hs
  },
  default: {
    getThemeVariables: Xs
  },
  forest: {
    getThemeVariables: Vs
  },
  neutral: {
    getThemeVariables: Zs
  }
}, bt = {
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
}, no = {
  ...bt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: St.default.getThemeVariables(),
  sequence: {
    ...bt.sequence,
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
    ...bt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...bt.c4,
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
    ...bt.pie,
    useWidth: 984
  },
  xyChart: {
    ...bt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...bt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...bt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: !1
  },
  sankey: {
    ...bt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: !1
  }
}, so = (t, e = "") => Object.keys(t).reduce((i, r) => Array.isArray(t[r]) ? i : typeof t[r] == "object" && t[r] !== null ? [...i, e + r, ...so(t[r], "")] : [...i, e + r], []), Qs = new Set(so(no, "")), Js = no, Oe = (t) => {
  if (L.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
    if (Array.isArray(t)) {
      t.forEach((e) => Oe(e));
      return;
    }
    for (const e of Object.keys(t)) {
      if (L.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !Qs.has(e) || t[e] == null) {
        L.debug("sanitize deleting key: ", e), delete t[e];
        continue;
      }
      if (typeof t[e] == "object") {
        L.debug("sanitizing object", e), Oe(t[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && (L.debug("sanitizing css option", e), t[e] = ta(t[e]));
    }
    if (t.themeVariables)
      for (const e of Object.keys(t.themeVariables)) {
        const i = t.themeVariables[e];
        i?.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
      }
    L.debug("After sanitization", t);
  }
}, ta = (t) => {
  let e = 0, i = 0;
  for (const r of t) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, ao = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, de = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ea = /\s*%%.*\n/gm;
class lo extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}
const Ut = {}, Ue = function(t, e) {
  t = t.replace(ao, "").replace(de, "").replace(ea, `
`);
  for (const [i, { detector: r }] of Object.entries(Ut))
    if (r(t, e))
      return i;
  throw new lo(
    `No diagram type detected matching given configuration for text: ${t}`
  );
}, co = (...t) => {
  for (const { id: e, detector: i, loader: r } of t)
    ho(e, i, r);
}, ho = (t, e, i) => {
  Ut[t] ? L.error(`Detector with key ${t} already exists`) : Ut[t] = { detector: e, loader: i }, L.debug(`Detector with key ${t} added${i ? " with loader" : ""}`);
}, ia = (t) => Ut[t].loader, Ti = (t, e, { depth: i = 2, clobber: r = !1 } = {}) => {
  const o = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((s) => Ti(t, s, o)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((s) => {
    t.includes(s) || t.push(s);
  }), t) : t === void 0 || i <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((s) => {
    typeof e[s] == "object" && (t[s] === void 0 || typeof t[s] == "object") ? (t[s] === void 0 && (t[s] = Array.isArray(e[s]) ? [] : {}), t[s] = Ti(t[s], e[s], { depth: i - 1, clobber: r })) : (r || typeof t[s] != "object" && typeof e[s] != "object") && (t[s] = e[s]);
  }), t);
}, U = Ti, ra = "​", oa = {
  curveBasis: Yn,
  curveBasisClosed: Wn,
  curveBasisOpen: $n,
  curveBumpX: zn,
  curveBumpY: Pn,
  curveBundle: qn,
  curveCardinalClosed: Rn,
  curveCardinalOpen: Nn,
  curveCardinal: Dn,
  curveCatmullRomClosed: Mn,
  curveCatmullRomOpen: On,
  curveCatmullRom: In,
  curveLinear: wn,
  curveLinearClosed: vn,
  curveMonotoneX: En,
  curveMonotoneY: Fn,
  curveNatural: Ln,
  curveStep: An,
  curveStepAfter: Bn,
  curveStepBefore: _n
}, na = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, sa = function(t, e) {
  const i = uo(t, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const n = i.map((a) => a.args);
    Oe(n), r = U(r, [...n]);
  } else
    r = i.args;
  if (!r)
    return;
  let o = Ue(t, e);
  const s = "config";
  return r[s] !== void 0 && (o === "flowchart-v2" && (o = "flowchart"), r[o] = r[s], delete r[s]), r;
}, uo = function(t, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${na.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t = t.trim().replace(i, "").replace(/'/gm, '"'), L.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`
    );
    let r;
    const o = [];
    for (; (r = de.exec(t)) !== null; )
      if (r.index === de.lastIndex && de.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const s = r[1] ? r[1] : r[2], n = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        o.push({ type: s, args: n });
      }
    return o.length === 0 ? { type: t, args: null } : o.length === 1 ? o[0] : o;
  } catch (i) {
    return L.error(
      `ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`
    ), { type: void 0, args: null };
  }
}, aa = function(t) {
  return t.replace(de, "");
}, la = function(t, e) {
  for (const [i, r] of e.entries())
    if (r.match(t))
      return i;
  return -1;
};
function ca(t, e) {
  if (!t)
    return e;
  const i = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
  return oa[i] ?? e;
}
function ha(t, e) {
  const i = t.trim();
  if (i)
    return e.securityLevel !== "loose" ? Vn.sanitizeUrl(i) : i;
}
const da = (t, ...e) => {
  const i = t.split("."), r = i.length - 1, o = i[r];
  let s = window;
  for (let n = 0; n < r; n++)
    if (s = s[i[n]], !s) {
      L.error(`Function name: ${t} not found in window`);
      return;
    }
  s[o](...e);
};
function go(t, e) {
  return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function ua(t) {
  let e, i = 0;
  t.forEach((o) => {
    i += go(o, e), e = o;
  });
  const r = i / 2;
  return Fi(t, r);
}
function ga(t) {
  return t.length === 1 ? t[0] : ua(t);
}
const vr = (t, e = 2) => {
  const i = Math.pow(10, e);
  return Math.round(t * i) / i;
}, Fi = (t, e) => {
  let i, r = e;
  for (const o of t) {
    if (i) {
      const s = go(o, i);
      if (s < r)
        r -= s;
      else {
        const n = r / s;
        if (n <= 0)
          return i;
        if (n >= 1)
          return { x: o.x, y: o.y };
        if (n > 0 && n < 1)
          return {
            x: vr((1 - n) * i.x + n * o.x, 5),
            y: vr((1 - n) * i.y + n * o.y, 5)
          };
      }
    }
    i = o;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, fa = (t, e, i) => {
  L.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  const o = Fi(e, 25), s = t ? 10 : 5, n = Math.atan2(e[0].y - o.y, e[0].x - o.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(n) * s + (e[0].x + o.x) / 2, a.y = -Math.cos(n) * s + (e[0].y + o.y) / 2, a;
};
function pa(t, e, i) {
  const r = structuredClone(i);
  L.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
  const o = 25 + t, s = Fi(r, o), n = 10 + t * 0.5, a = Math.atan2(r[0].y - s.y, r[0].x - s.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * n + (r[0].x + s.x) / 2, l.y = -Math.cos(a + Math.PI) * n + (r[0].y + s.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * n + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * n + (r[0].y + s.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * n + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a) * n + (r[0].y + s.y) / 2 - 5) : (l.x = Math.sin(a) * n + (r[0].x + s.x) / 2, l.y = -Math.cos(a) * n + (r[0].y + s.y) / 2), l;
}
function ma(t) {
  let e = "", i = "";
  for (const r of t)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
let wr = 0;
const Ca = () => (wr++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + wr);
function ya(t) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let o = 0; o < t; o++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
const xa = (t) => ya(t.length), ba = function() {
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
}, Ta = function(t, e) {
  const i = e.text.replace(Li.lineBreakRegex, " "), [, r] = vi(e.fontSize), o = t.append("text");
  o.attr("x", e.x), o.attr("y", e.y), o.style("text-anchor", e.anchor), o.style("font-family", e.fontFamily), o.style("font-size", r), o.style("font-weight", e.fontWeight), o.attr("fill", e.fill), e.class !== void 0 && o.attr("class", e.class);
  const s = o.append("tspan");
  return s.attr("x", e.x + e.textMargin * 2), s.attr("fill", e.fill), s.text(i), o;
}, ka = _i(
  (t, e, i) => {
    if (!t || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), Li.lineBreakRegex.test(t)))
      return t;
    const r = t.split(" "), o = [];
    let s = "";
    return r.forEach((n, a) => {
      const l = Me(`${n} `, i), d = Me(s, i);
      if (l > e) {
        const { hyphenatedStrings: c, remainingWord: g } = Sa(n, e, "-", i);
        o.push(s, ...c), s = g;
      } else d + l >= e ? (o.push(s), s = n) : s = [s, n].filter(Boolean).join(" ");
      a + 1 === r.length && o.push(s);
    }), o.filter((n) => n !== "").join(i.joinWith);
  },
  (t, e, i) => `${t}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
), Sa = _i(
  (t, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const o = [...t], s = [];
    let n = "";
    return o.forEach((a, l) => {
      const d = `${n}${a}`;
      if (Me(d, r) >= e) {
        const f = l + 1, c = o.length === f, g = `${d}${i}`;
        s.push(c ? d : g), n = "";
      } else
        n = d;
    }), { hyphenatedStrings: s, remainingWord: n };
  },
  (t, e, i = "-", r) => `${t}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function _a(t, e) {
  return Ei(t, e).height;
}
function Me(t, e) {
  return Ei(t, e).width;
}
const Ei = _i(
  (t, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: o = 400 } = e;
    if (!t)
      return { width: 0, height: 0 };
    const [, s] = vi(i), n = ["sans-serif", r], a = t.split(Li.lineBreakRegex), l = [], d = st("body");
    if (!d.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const p = d.append("svg");
    for (const c of n) {
      let g = 0;
      const y = { width: 0, height: 0, lineHeight: 0 };
      for (const x of a) {
        const T = ba();
        T.text = x || ra;
        const w = Ta(p, T).style("font-size", s).style("font-weight", o).style("font-family", c), S = (w._groups || w)[0][0].getBBox();
        if (S.width === 0 && S.height === 0)
          throw new Error("svg element not in render tree");
        y.width = Math.round(Math.max(y.width, S.width)), g = Math.round(S.height), y.height += g, y.lineHeight = Math.round(Math.max(y.lineHeight, g));
      }
      l.push(y);
    }
    p.remove();
    const f = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[f];
  },
  (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
class Ba {
  constructor(e = !1, i) {
    this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
}
let Le;
const Aa = function(t) {
  return Le = Le || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Le.innerHTML = t, unescape(Le.textContent);
};
function fo(t) {
  return "str" in t;
}
const La = (t, e, i, r) => {
  var o;
  if (!r)
    return;
  const s = (o = t.node()) == null ? void 0 : o.getBBox();
  s && t.append("text").text(r).attr("x", s.x + s.width / 2).attr("y", -i).attr("class", e);
}, vi = (t) => {
  if (typeof t == "number")
    return [t, t + "px"];
  const e = parseInt(t ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t === String(e) ? [e, t + "px"] : [e, t];
};
function po(t, e) {
  return jn({}, t, e);
}
const ue = {
  assignWithDepth: U,
  wrapLabel: ka,
  calculateTextHeight: _a,
  calculateTextWidth: Me,
  calculateTextDimensions: Ei,
  cleanAndMerge: po,
  detectInit: sa,
  detectDirective: uo,
  isSubstringInArray: la,
  interpolateToCurve: ca,
  calcLabelPosition: ga,
  calcCardinalityPosition: fa,
  calcTerminalLabelPosition: pa,
  formatUrl: ha,
  getStylesFromArray: ma,
  generateId: Ca,
  random: xa,
  runFunc: da,
  entityDecode: Aa,
  insertTitle: La,
  parseFontSize: vi,
  InitIDGenerator: Ba
}, Fa = function(t) {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
}, Ea = function(t) {
  return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, Ir = "10.9.3", Xt = Object.freeze(Js);
let tt = U({}, Xt), mo, Gt = [], ge = U({}, Xt);
const Xe = (t, e) => {
  let i = U({}, t), r = {};
  for (const o of e)
    xo(o), r = U(r, o);
  if (i = U(i, r), r.theme && r.theme in St) {
    const o = U({}, mo), s = U(
      o.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in St && (i.themeVariables = St[i.theme].getThemeVariables(s));
  }
  return ge = i, bo(ge), ge;
}, va = (t) => (tt = U({}, Xt), tt = U(tt, t), t.theme && St[t.theme] && (tt.themeVariables = St[t.theme].getThemeVariables(t.themeVariables)), Xe(tt, Gt), tt), wa = (t) => {
  mo = U({}, t);
}, Ia = (t) => (tt = U(tt, t), Xe(tt, Gt), tt), Co = () => U({}, tt), yo = (t) => (bo(t), U(ge, t), ft()), ft = () => U({}, ge), xo = (t) => {
  t && (["secure", ...tt.secure ?? []].forEach((e) => {
    Object.hasOwn(t, e) && (L.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
  }), Object.keys(t).forEach((e) => {
    e.startsWith("__") && delete t[e];
  }), Object.keys(t).forEach((e) => {
    typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && xo(t[e]);
  }));
}, Oa = (t) => {
  Oe(t), t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily) && (t.themeVariables = { fontFamily: t.fontFamily }), Gt.push(t), Xe(tt, Gt);
}, De = (t = tt) => {
  Gt = [], Xe(t, Gt);
}, Ma = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, Or = {}, Da = (t) => {
  Or[t] || (L.warn(Ma[t]), Or[t] = !0);
}, bo = (t) => {
  t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && Da("LAZY_LOAD_DEPRECATED");
}, To = "c4", Na = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t), Ra = async () => {
  const { diagram: t } = await import("./c4Diagram-3d4e48cf-B0Hh3MMi.js");
  return { id: To, diagram: t };
}, qa = {
  id: To,
  detector: Na,
  loader: Ra
}, Pa = qa, ko = "flowchart", za = (t, e) => {
  var i, r;
  return ((i = e?.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e?.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t);
}, $a = async () => {
  const { diagram: t } = await import("./flowDiagram-66a62f08-CoY8Hk_f.js");
  return { id: ko, diagram: t };
}, Wa = {
  id: ko,
  detector: za,
  loader: $a
}, Ya = Wa, So = "flowchart-v2", ja = (t, e) => {
  var i, r, o;
  return ((i = e?.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e?.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t) && ((o = e?.flowchart) == null ? void 0 : o.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(t);
}, Ha = async () => {
  const { diagram: t } = await import("./flowDiagram-v2-96b9c2cf-D69OC5Ws.js");
  return { id: So, diagram: t };
}, Ua = {
  id: So,
  detector: ja,
  loader: Ha
}, Xa = Ua, _o = "er", Ga = (t) => /^\s*erDiagram/.test(t), Va = async () => {
  const { diagram: t } = await import("./erDiagram-9861fffd-BahGtaHC.js");
  return { id: _o, diagram: t };
}, Ka = {
  id: _o,
  detector: Ga,
  loader: Va
}, Za = Ka, Bo = "gitGraph", Qa = (t) => /^\s*gitGraph/.test(t), Ja = async () => {
  const { diagram: t } = await import("./gitGraphDiagram-72cf32ee-CCsna65a.js");
  return { id: Bo, diagram: t };
}, tl = {
  id: Bo,
  detector: Qa,
  loader: Ja
}, el = tl, Ao = "gantt", il = (t) => /^\s*gantt/.test(t), rl = async () => {
  const { diagram: t } = await import("./ganttDiagram-c361ad54-lLApz3bE.js");
  return { id: Ao, diagram: t };
}, ol = {
  id: Ao,
  detector: il,
  loader: rl
}, nl = ol, Lo = "info", sl = (t) => /^\s*info/.test(t), al = async () => {
  const { diagram: t } = await import("./infoDiagram-f8f76790-C6lk2Vi5.js");
  return { id: Lo, diagram: t };
}, ll = {
  id: Lo,
  detector: sl,
  loader: al
}, Fo = "pie", cl = (t) => /^\s*pie/.test(t), hl = async () => {
  const { diagram: t } = await import("./pieDiagram-8a3498a8-68hAwWws.js");
  return { id: Fo, diagram: t };
}, dl = {
  id: Fo,
  detector: cl,
  loader: hl
}, Eo = "quadrantChart", ul = (t) => /^\s*quadrantChart/.test(t), gl = async () => {
  const { diagram: t } = await import("./quadrantDiagram-120e2f19-NbB5zdYO.js");
  return { id: Eo, diagram: t };
}, fl = {
  id: Eo,
  detector: ul,
  loader: gl
}, pl = fl, vo = "xychart", ml = (t) => /^\s*xychart-beta/.test(t), Cl = async () => {
  const { diagram: t } = await import("./xychartDiagram-e933f94c-9aEjNLFB.js");
  return { id: vo, diagram: t };
}, yl = {
  id: vo,
  detector: ml,
  loader: Cl
}, xl = yl, wo = "requirement", bl = (t) => /^\s*requirement(Diagram)?/.test(t), Tl = async () => {
  const { diagram: t } = await import("./requirementDiagram-deff3bca-GC1YJhL6.js");
  return { id: wo, diagram: t };
}, kl = {
  id: wo,
  detector: bl,
  loader: Tl
}, Sl = kl, Io = "sequence", _l = (t) => /^\s*sequenceDiagram/.test(t), Bl = async () => {
  const { diagram: t } = await import("./sequenceDiagram-704730f1-u4e2r6MU.js");
  return { id: Io, diagram: t };
}, Al = {
  id: Io,
  detector: _l,
  loader: Bl
}, Ll = Al, Oo = "class", Fl = (t, e) => {
  var i;
  return ((i = e?.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(t);
}, El = async () => {
  const { diagram: t } = await import("./classDiagram-70f12bd4-BGwT9YfG.js");
  return { id: Oo, diagram: t };
}, vl = {
  id: Oo,
  detector: Fl,
  loader: El
}, wl = vl, Mo = "classDiagram", Il = (t, e) => {
  var i;
  return /^\s*classDiagram/.test(t) && ((i = e?.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(t);
}, Ol = async () => {
  const { diagram: t } = await import("./classDiagram-v2-f2320105-BrJZ0H5T.js");
  return { id: Mo, diagram: t };
}, Ml = {
  id: Mo,
  detector: Il,
  loader: Ol
}, Dl = Ml, Do = "state", Nl = (t, e) => {
  var i;
  return ((i = e?.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(t);
}, Rl = async () => {
  const { diagram: t } = await import("./stateDiagram-587899a1-D3kjOYBj.js");
  return { id: Do, diagram: t };
}, ql = {
  id: Do,
  detector: Nl,
  loader: Rl
}, Pl = ql, No = "stateDiagram", zl = (t, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t) || /^\s*stateDiagram/.test(t) && ((i = e?.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
}, $l = async () => {
  const { diagram: t } = await import("./stateDiagram-v2-d93cdb3a-Bd_gDKYF.js");
  return { id: No, diagram: t };
}, Wl = {
  id: No,
  detector: zl,
  loader: $l
}, Yl = Wl, Ro = "journey", jl = (t) => /^\s*journey/.test(t), Hl = async () => {
  const { diagram: t } = await import("./journeyDiagram-49397b02-7zLwGryu.js");
  return { id: Ro, diagram: t };
}, Ul = {
  id: Ro,
  detector: jl,
  loader: Hl
}, Xl = Ul, Gl = function(t, e) {
  for (let i of e)
    t.attr(i[0], i[1]);
}, Vl = function(t, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t), r.set("width", e)), r;
}, qo = function(t, e, i, r) {
  const o = Vl(e, i, r);
  Gl(t, o);
}, Kl = function(t, e, i, r) {
  const o = e.node().getBBox(), s = o.width, n = o.height;
  L.info(`SVG bounds: ${s}x${n}`, o);
  let a = 0, l = 0;
  L.info(`Graph bounds: ${a}x${l}`, t), a = s + i * 2, l = n + i * 2, L.info(`Calculated bounds: ${a}x${l}`), qo(e, l, a, r);
  const d = `${o.x - i} ${o.y - i} ${o.width + 2 * i} ${o.height + 2 * i}`;
  e.attr("viewBox", d);
}, we = {}, Zl = (t, e, i) => {
  let r = "";
  return t in we && we[t] ? r = we[t](i) : L.warn(`No theme found for ${t}`), ` & {
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
}, Ql = (t, e) => {
  e !== void 0 && (we[t] = e);
}, Jl = Zl;
let wi = "", Ii = "", Oi = "";
const Mi = (t) => fe(t, ft()), tc = () => {
  wi = "", Oi = "", Ii = "";
}, ec = (t) => {
  wi = Mi(t).replace(/^\s+/g, "");
}, ic = () => wi, rc = (t) => {
  Oi = Mi(t).replace(/\n\s+/g, `
`);
}, oc = () => Oi, nc = (t) => {
  Ii = Mi(t);
}, sc = () => Ii, ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: tc,
  getAccDescription: oc,
  getAccTitle: ic,
  getDiagramTitle: sc,
  setAccDescription: rc,
  setAccTitle: ec,
  setDiagramTitle: nc
}, Symbol.toStringTag, { value: "Module" })), lc = L, cc = Ai, Di = ft, Xu = yo, Gu = Xt, hc = (t) => fe(t, Di()), dc = Kl, uc = () => ac, Ne = {}, Re = (t, e, i) => {
  var r;
  if (Ne[t])
    throw new Error(`Diagram ${t} already registered.`);
  Ne[t] = e, i && ho(t, i), Ql(t, e.styles), (r = e.injectUtils) == null || r.call(
    e,
    lc,
    cc,
    Di,
    hc,
    dc,
    uc(),
    () => {
    }
  );
}, Ni = (t) => {
  if (t in Ne)
    return Ne[t];
  throw new gc(t);
};
class gc extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}
const fc = (t) => {
  var e;
  const { securityLevel: i } = Di();
  let r = st("body");
  if (i === "sandbox") {
    const n = ((e = st(`#i${t}`).node()) == null ? void 0 : e.contentDocument) ?? document;
    r = st(n.body);
  }
  return r.select(`#${t}`);
}, pc = (t, e, i) => {
  L.debug(`rendering svg for syntax error
`);
  const r = fc(e), o = r.append("g");
  r.attr("viewBox", "0 0 2412 512"), qo(r, 100, 512, !0), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), o.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), o.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
}, Po = { draw: pc }, mc = Po, Cc = {
  db: {},
  renderer: Po,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
}, yc = Cc, zo = "flowchart-elk", xc = (t, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t) && ((i = e?.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
}, bc = async () => {
  const { diagram: t } = await import("./flowchart-elk-definition-4a651766-Cs3aMkI9.js");
  return { id: zo, diagram: t };
}, Tc = {
  id: zo,
  detector: xc,
  loader: bc
}, kc = Tc, $o = "timeline", Sc = (t) => /^\s*timeline/.test(t), _c = async () => {
  const { diagram: t } = await import("./timeline-definition-85554ec2-b5eVJure.js");
  return { id: $o, diagram: t };
}, Bc = {
  id: $o,
  detector: Sc,
  loader: _c
}, Ac = Bc, Wo = "mindmap", Lc = (t) => /^\s*mindmap/.test(t), Fc = async () => {
  const { diagram: t } = await import("./mindmap-definition-fc14e90a-DoQcEKdq.js");
  return { id: Wo, diagram: t };
}, Ec = {
  id: Wo,
  detector: Lc,
  loader: Fc
}, vc = Ec, Yo = "sankey", wc = (t) => /^\s*sankey-beta/.test(t), Ic = async () => {
  const { diagram: t } = await import("./sankeyDiagram-04a897e0-DwfBjTD8.js");
  return { id: Yo, diagram: t };
}, Oc = {
  id: Yo,
  detector: wc,
  loader: Ic
}, Mc = Oc, jo = "block", Dc = (t) => /^\s*block-beta/.test(t), Nc = async () => {
  const { diagram: t } = await import("./blockDiagram-38ab4fdb-pSOh61rk.js");
  return { id: jo, diagram: t };
}, Rc = {
  id: jo,
  detector: Dc,
  loader: Nc
}, qc = Rc;
let Mr = !1;
const Ri = () => {
  Mr || (Mr = !0, Re("error", yc, (t) => t.toLowerCase().trim() === "error"), Re(
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
  ), co(
    Pa,
    Dl,
    wl,
    Za,
    nl,
    ll,
    dl,
    Sl,
    Ll,
    kc,
    Xa,
    Ya,
    vc,
    Ac,
    el,
    Yl,
    Pl,
    Xl,
    pl,
    Mc,
    xl,
    qc
  ));
};
class Ho {
  constructor(e, i = {}) {
    this.text = e, this.metadata = i, this.type = "graph", this.text = Fa(e), this.text += `
`;
    const r = ft();
    try {
      this.type = Ue(e, r);
    } catch (s) {
      this.type = "error", this.detectError = s;
    }
    const o = Ni(this.type);
    L.debug("Type " + this.type), this.db = o.db, this.renderer = o.renderer, this.parser = o.parser, this.parser.parser.yy = this.db, this.init = o.init, this.parse();
  }
  parse() {
    var e, i, r, o, s;
    if (this.detectError)
      throw this.detectError;
    (i = (e = this.db).clear) == null || i.call(e);
    const n = ft();
    (r = this.init) == null || r.call(this, n), this.metadata.title && ((s = (o = this.db).setDiagramTitle) == null || s.call(o, this.metadata.title)), this.parser.parse(this.text);
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
const Pc = async (t, e = {}) => {
  const i = Ue(t, ft());
  try {
    Ni(i);
  } catch {
    const o = ia(i);
    if (!o)
      throw new lo(`Diagram ${i} not found.`);
    const { id: s, diagram: n } = await o();
    Re(s, n);
  }
  return new Ho(t, e);
};
let Dr = [];
const zc = () => {
  Dr.forEach((t) => {
    t();
  }), Dr = [];
}, $c = "graphics-document document";
function Wc(t, e) {
  t.attr("role", $c), e !== "" && t.attr("aria-roledescription", e);
}
function Yc(t, e, i, r) {
  if (t.insert !== void 0) {
    if (i) {
      const o = `chart-desc-${r}`;
      t.attr("aria-describedby", o), t.insert("desc", ":first-child").attr("id", o).text(i);
    }
    if (e) {
      const o = `chart-title-${r}`;
      t.attr("aria-labelledby", o), t.insert("title", ":first-child").attr("id", o).text(e);
    }
  }
}
const jc = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
function Uo(t) {
  return typeof t > "u" || t === null;
}
function Hc(t) {
  return typeof t == "object" && t !== null;
}
function Uc(t) {
  return Array.isArray(t) ? t : Uo(t) ? [] : [t];
}
function Xc(t, e) {
  var i, r, o, s;
  if (e)
    for (s = Object.keys(e), i = 0, r = s.length; i < r; i += 1)
      o = s[i], t[o] = e[o];
  return t;
}
function Gc(t, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t;
  return i;
}
function Vc(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var Kc = Uo, Zc = Hc, Qc = Uc, Jc = Gc, th = Vc, eh = Xc, K = {
  isNothing: Kc,
  isObject: Zc,
  toArray: Qc,
  repeat: Jc,
  isNegativeZero: th,
  extend: eh
};
function Xo(t, e) {
  var i = "", r = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (i += 'in "' + t.mark.name + '" '), i += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (i += `

` + t.mark.snippet), r + " " + i) : r;
}
function pe(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Xo(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
pe.prototype = Object.create(Error.prototype);
pe.prototype.constructor = pe;
pe.prototype.toString = function(e) {
  return this.name + ": " + Xo(this, e);
};
var Tt = pe;
function ui(t, e, i, r, o) {
  var s = "", n = "", a = Math.floor(o / 2) - 1;
  return r - e > a && (s = " ... ", e = r - a + s.length), i - r > a && (n = " ...", i = r + a - n.length), {
    str: s + t.slice(e, i).replace(/\t/g, "→") + n,
    pos: r - e + s.length
    // relative position
  };
}
function gi(t, e) {
  return K.repeat(" ", e - t.length) + t;
}
function ih(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], o = [], s, n = -1; s = i.exec(t.buffer); )
    o.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && n < 0 && (n = r.length - 2);
  n < 0 && (n = r.length - 1);
  var a = "", l, d, p = Math.min(t.line + e.linesAfter, o.length).toString().length, f = e.maxLength - (e.indent + p + 3);
  for (l = 1; l <= e.linesBefore && !(n - l < 0); l++)
    d = ui(
      t.buffer,
      r[n - l],
      o[n - l],
      t.position - (r[n] - r[n - l]),
      f
    ), a = K.repeat(" ", e.indent) + gi((t.line - l + 1).toString(), p) + " | " + d.str + `
` + a;
  for (d = ui(t.buffer, r[n], o[n], t.position, f), a += K.repeat(" ", e.indent) + gi((t.line + 1).toString(), p) + " | " + d.str + `
`, a += K.repeat("-", e.indent + p + 3 + d.pos) + `^
`, l = 1; l <= e.linesAfter && !(n + l >= o.length); l++)
    d = ui(
      t.buffer,
      r[n + l],
      o[n + l],
      t.position - (r[n] - r[n + l]),
      f
    ), a += K.repeat(" ", e.indent) + gi((t.line + l + 1).toString(), p) + " | " + d.str + `
`;
  return a.replace(/\n$/, "");
}
var rh = ih, oh = [
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
], nh = [
  "scalar",
  "sequence",
  "mapping"
];
function sh(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(i) {
    t[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function ah(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (oh.indexOf(i) === -1)
      throw new Tt('Unknown option "' + i + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = sh(e.styleAliases || null), nh.indexOf(this.kind) === -1)
    throw new Tt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var X = ah;
function Nr(t, e) {
  var i = [];
  return t[e].forEach(function(r) {
    var o = i.length;
    i.forEach(function(s, n) {
      s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (o = n);
    }), i[o] = r;
  }), i;
}
function lh() {
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
  function r(o) {
    o.multi ? (t.multi[o.kind].push(o), t.multi.fallback.push(o)) : t[o.kind][o.tag] = t.fallback[o.tag] = o;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t;
}
function ki(t) {
  return this.extend(t);
}
ki.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof X)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Tt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(s) {
    if (!(s instanceof X))
      throw new Tt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Tt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new Tt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(s) {
    if (!(s instanceof X))
      throw new Tt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var o = Object.create(ki.prototype);
  return o.implicit = (this.implicit || []).concat(i), o.explicit = (this.explicit || []).concat(r), o.compiledImplicit = Nr(o, "implicit"), o.compiledExplicit = Nr(o, "explicit"), o.compiledTypeMap = lh(o.compiledImplicit, o.compiledExplicit), o;
};
var ch = ki, hh = new X("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), dh = new X("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), uh = new X("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), gh = new ch({
  explicit: [
    hh,
    dh,
    uh
  ]
});
function fh(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function ph() {
  return null;
}
function mh(t) {
  return t === null;
}
var Ch = new X("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: fh,
  construct: ph,
  predicate: mh,
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
function yh(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function xh(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function bh(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Th = new X("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: yh,
  construct: xh,
  predicate: bh,
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
function kh(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Sh(t) {
  return 48 <= t && t <= 55;
}
function _h(t) {
  return 48 <= t && t <= 57;
}
function Bh(t) {
  if (t === null)
    return !1;
  var e = t.length, i = 0, r = !1, o;
  if (!e)
    return !1;
  if (o = t[i], (o === "-" || o === "+") && (o = t[++i]), o === "0") {
    if (i + 1 === e)
      return !0;
    if (o = t[++i], o === "b") {
      for (i++; i < e; i++)
        if (o = t[i], o !== "_") {
          if (o !== "0" && o !== "1")
            return !1;
          r = !0;
        }
      return r && o !== "_";
    }
    if (o === "x") {
      for (i++; i < e; i++)
        if (o = t[i], o !== "_") {
          if (!kh(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && o !== "_";
    }
    if (o === "o") {
      for (i++; i < e; i++)
        if (o = t[i], o !== "_") {
          if (!Sh(t.charCodeAt(i)))
            return !1;
          r = !0;
        }
      return r && o !== "_";
    }
  }
  if (o === "_")
    return !1;
  for (; i < e; i++)
    if (o = t[i], o !== "_") {
      if (!_h(t.charCodeAt(i)))
        return !1;
      r = !0;
    }
  return !(!r || o === "_");
}
function Ah(t) {
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
function Lh(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !K.isNegativeZero(t);
}
var Fh = new X("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Bh,
  construct: Ah,
  predicate: Lh,
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
}), Eh = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function vh(t) {
  return !(t === null || !Eh.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function wh(t) {
  var e, i;
  return e = t.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var Ih = /^[-+]?[0-9]+e/;
function Oh(t, e) {
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
  else if (K.isNegativeZero(t))
    return "-0.0";
  return i = t.toString(10), Ih.test(i) ? i.replace("e", ".e") : i;
}
function Mh(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || K.isNegativeZero(t));
}
var Dh = new X("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: vh,
  construct: wh,
  predicate: Mh,
  represent: Oh,
  defaultStyle: "lowercase"
}), Go = gh.extend({
  implicit: [
    Ch,
    Th,
    Fh,
    Dh
  ]
}), Nh = Go, Vo = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), Ko = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Rh(t) {
  return t === null ? !1 : Vo.exec(t) !== null || Ko.exec(t) !== null;
}
function qh(t) {
  var e, i, r, o, s, n, a, l = 0, d = null, p, f, c;
  if (e = Vo.exec(t), e === null && (e = Ko.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, o = +e[3], !e[4])
    return new Date(Date.UTC(i, r, o));
  if (s = +e[4], n = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (p = +e[10], f = +(e[11] || 0), d = (p * 60 + f) * 6e4, e[9] === "-" && (d = -d)), c = new Date(Date.UTC(i, r, o, s, n, a, l)), d && c.setTime(c.getTime() - d), c;
}
function Ph(t) {
  return t.toISOString();
}
var zh = new X("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Rh,
  construct: qh,
  instanceOf: Date,
  represent: Ph
});
function $h(t) {
  return t === "<<" || t === null;
}
var Wh = new X("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: $h
}), qi = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Yh(t) {
  if (t === null)
    return !1;
  var e, i, r = 0, o = t.length, s = qi;
  for (i = 0; i < o; i++)
    if (e = s.indexOf(t.charAt(i)), !(e > 64)) {
      if (e < 0)
        return !1;
      r += 6;
    }
  return r % 8 === 0;
}
function jh(t) {
  var e, i, r = t.replace(/[\r\n=]/g, ""), o = r.length, s = qi, n = 0, a = [];
  for (e = 0; e < o; e++)
    e % 4 === 0 && e && (a.push(n >> 16 & 255), a.push(n >> 8 & 255), a.push(n & 255)), n = n << 6 | s.indexOf(r.charAt(e));
  return i = o % 4 * 6, i === 0 ? (a.push(n >> 16 & 255), a.push(n >> 8 & 255), a.push(n & 255)) : i === 18 ? (a.push(n >> 10 & 255), a.push(n >> 2 & 255)) : i === 12 && a.push(n >> 4 & 255), new Uint8Array(a);
}
function Hh(t) {
  var e = "", i = 0, r, o, s = t.length, n = qi;
  for (r = 0; r < s; r++)
    r % 3 === 0 && r && (e += n[i >> 18 & 63], e += n[i >> 12 & 63], e += n[i >> 6 & 63], e += n[i & 63]), i = (i << 8) + t[r];
  return o = s % 3, o === 0 ? (e += n[i >> 18 & 63], e += n[i >> 12 & 63], e += n[i >> 6 & 63], e += n[i & 63]) : o === 2 ? (e += n[i >> 10 & 63], e += n[i >> 4 & 63], e += n[i << 2 & 63], e += n[64]) : o === 1 && (e += n[i >> 2 & 63], e += n[i << 4 & 63], e += n[64], e += n[64]), e;
}
function Uh(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var Xh = new X("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Yh,
  construct: jh,
  predicate: Uh,
  represent: Hh
}), Gh = Object.prototype.hasOwnProperty, Vh = Object.prototype.toString;
function Kh(t) {
  if (t === null)
    return !0;
  var e = [], i, r, o, s, n, a = t;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (o = a[i], n = !1, Vh.call(o) !== "[object Object]")
      return !1;
    for (s in o)
      if (Gh.call(o, s))
        if (!n)
          n = !0;
        else
          return !1;
    if (!n)
      return !1;
    if (e.indexOf(s) === -1)
      e.push(s);
    else
      return !1;
  }
  return !0;
}
function Zh(t) {
  return t !== null ? t : [];
}
var Qh = new X("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Kh,
  construct: Zh
}), Jh = Object.prototype.toString;
function td(t) {
  if (t === null)
    return !0;
  var e, i, r, o, s, n = t;
  for (s = new Array(n.length), e = 0, i = n.length; e < i; e += 1) {
    if (r = n[e], Jh.call(r) !== "[object Object]" || (o = Object.keys(r), o.length !== 1))
      return !1;
    s[e] = [o[0], r[o[0]]];
  }
  return !0;
}
function ed(t) {
  if (t === null)
    return [];
  var e, i, r, o, s, n = t;
  for (s = new Array(n.length), e = 0, i = n.length; e < i; e += 1)
    r = n[e], o = Object.keys(r), s[e] = [o[0], r[o[0]]];
  return s;
}
var id = new X("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: td,
  construct: ed
}), rd = Object.prototype.hasOwnProperty;
function od(t) {
  if (t === null)
    return !0;
  var e, i = t;
  for (e in i)
    if (rd.call(i, e) && i[e] !== null)
      return !1;
  return !0;
}
function nd(t) {
  return t !== null ? t : {};
}
var sd = new X("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: od,
  construct: nd
}), ad = Nh.extend({
  implicit: [
    zh,
    Wh
  ],
  explicit: [
    Xh,
    Qh,
    id,
    sd
  ]
}), At = Object.prototype.hasOwnProperty, qe = 1, Zo = 2, Qo = 3, Pe = 4, fi = 1, ld = 2, Rr = 3, cd = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, hd = /[\x85\u2028\u2029]/, dd = /[,\[\]\{\}]/, Jo = /^(?:!|!!|![a-z\-]+!)$/i, tn = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function qr(t) {
  return Object.prototype.toString.call(t);
}
function gt(t) {
  return t === 10 || t === 13;
}
function vt(t) {
  return t === 9 || t === 32;
}
function et(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Wt(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function ud(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function gd(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function fd(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function Pr(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function pd(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var en = new Array(256), rn = new Array(256);
for (var zt = 0; zt < 256; zt++)
  en[zt] = Pr(zt) ? 1 : 0, rn[zt] = Pr(zt);
function md(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || ad, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function on(t, e) {
  var i = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return i.snippet = rh(i), new Tt(e, i);
}
function A(t, e) {
  throw on(t, e);
}
function ze(t, e) {
  t.onWarning && t.onWarning.call(null, on(t, e));
}
var zr = {
  YAML: function(e, i, r) {
    var o, s, n;
    e.version !== null && A(e, "duplication of %YAML directive"), r.length !== 1 && A(e, "YAML directive accepts exactly one argument"), o = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), o === null && A(e, "ill-formed argument of the YAML directive"), s = parseInt(o[1], 10), n = parseInt(o[2], 10), s !== 1 && A(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = n < 2, n !== 1 && n !== 2 && ze(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var o, s;
    r.length !== 2 && A(e, "TAG directive accepts exactly two arguments"), o = r[0], s = r[1], Jo.test(o) || A(e, "ill-formed tag handle (first argument) of the TAG directive"), At.call(e.tagMap, o) && A(e, 'there is a previously declared suffix for "' + o + '" tag handle'), tn.test(s) || A(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      A(e, "tag prefix is malformed: " + s);
    }
    e.tagMap[o] = s;
  }
};
function Bt(t, e, i, r) {
  var o, s, n, a;
  if (e < i) {
    if (a = t.input.slice(e, i), r)
      for (o = 0, s = a.length; o < s; o += 1)
        n = a.charCodeAt(o), n === 9 || 32 <= n && n <= 1114111 || A(t, "expected valid JSON character");
    else cd.test(a) && A(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function $r(t, e, i, r) {
  var o, s, n, a;
  for (K.isObject(i) || A(t, "cannot merge mappings; the provided source object is unacceptable"), o = Object.keys(i), n = 0, a = o.length; n < a; n += 1)
    s = o[n], At.call(e, s) || (e[s] = i[s], r[s] = !0);
}
function Yt(t, e, i, r, o, s, n, a, l) {
  var d, p;
  if (Array.isArray(o))
    for (o = Array.prototype.slice.call(o), d = 0, p = o.length; d < p; d += 1)
      Array.isArray(o[d]) && A(t, "nested arrays are not supported inside keys"), typeof o == "object" && qr(o[d]) === "[object Object]" && (o[d] = "[object Object]");
  if (typeof o == "object" && qr(o) === "[object Object]" && (o = "[object Object]"), o = String(o), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (d = 0, p = s.length; d < p; d += 1)
        $r(t, e, s[d], i);
    else
      $r(t, e, s, i);
  else
    !t.json && !At.call(i, o) && At.call(e, o) && (t.line = n || t.line, t.lineStart = a || t.lineStart, t.position = l || t.position, A(t, "duplicated mapping key")), o === "__proto__" ? Object.defineProperty(e, o, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : e[o] = s, delete i[o];
  return e;
}
function Pi(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : A(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function P(t, e, i) {
  for (var r = 0, o = t.input.charCodeAt(t.position); o !== 0; ) {
    for (; vt(o); )
      o === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), o = t.input.charCodeAt(++t.position);
    if (e && o === 35)
      do
        o = t.input.charCodeAt(++t.position);
      while (o !== 10 && o !== 13 && o !== 0);
    if (gt(o))
      for (Pi(t), o = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; o === 32; )
        t.lineIndent++, o = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t.lineIndent < i && ze(t, "deficient indentation"), r;
}
function Ge(t) {
  var e = t.position, i;
  return i = t.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2) && (e += 3, i = t.input.charCodeAt(e), i === 0 || et(i)));
}
function zi(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += K.repeat(`
`, e - 1));
}
function Cd(t, e, i) {
  var r, o, s, n, a, l, d, p, f = t.kind, c = t.result, g;
  if (g = t.input.charCodeAt(t.position), et(g) || Wt(g) || g === 35 || g === 38 || g === 42 || g === 33 || g === 124 || g === 62 || g === 39 || g === 34 || g === 37 || g === 64 || g === 96 || (g === 63 || g === 45) && (o = t.input.charCodeAt(t.position + 1), et(o) || i && Wt(o)))
    return !1;
  for (t.kind = "scalar", t.result = "", s = n = t.position, a = !1; g !== 0; ) {
    if (g === 58) {
      if (o = t.input.charCodeAt(t.position + 1), et(o) || i && Wt(o))
        break;
    } else if (g === 35) {
      if (r = t.input.charCodeAt(t.position - 1), et(r))
        break;
    } else {
      if (t.position === t.lineStart && Ge(t) || i && Wt(g))
        break;
      if (gt(g))
        if (l = t.line, d = t.lineStart, p = t.lineIndent, P(t, !1, -1), t.lineIndent >= e) {
          a = !0, g = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = n, t.line = l, t.lineStart = d, t.lineIndent = p;
          break;
        }
    }
    a && (Bt(t, s, n, !1), zi(t, t.line - l), s = n = t.position, a = !1), vt(g) || (n = t.position + 1), g = t.input.charCodeAt(++t.position);
  }
  return Bt(t, s, n, !1), t.result ? !0 : (t.kind = f, t.result = c, !1);
}
function yd(t, e) {
  var i, r, o;
  if (i = t.input.charCodeAt(t.position), i !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = o = t.position; (i = t.input.charCodeAt(t.position)) !== 0; )
    if (i === 39)
      if (Bt(t, r, t.position, !0), i = t.input.charCodeAt(++t.position), i === 39)
        r = t.position, t.position++, o = t.position;
      else
        return !0;
    else gt(i) ? (Bt(t, r, o, !0), zi(t, P(t, !1, e)), r = o = t.position) : t.position === t.lineStart && Ge(t) ? A(t, "unexpected end of the document within a single quoted scalar") : (t.position++, o = t.position);
  A(t, "unexpected end of the stream within a single quoted scalar");
}
function xd(t, e) {
  var i, r, o, s, n, a;
  if (a = t.input.charCodeAt(t.position), a !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, i = r = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
    if (a === 34)
      return Bt(t, i, t.position, !0), t.position++, !0;
    if (a === 92) {
      if (Bt(t, i, t.position, !0), a = t.input.charCodeAt(++t.position), gt(a))
        P(t, !1, e);
      else if (a < 256 && en[a])
        t.result += rn[a], t.position++;
      else if ((n = gd(a)) > 0) {
        for (o = n, s = 0; o > 0; o--)
          a = t.input.charCodeAt(++t.position), (n = ud(a)) >= 0 ? s = (s << 4) + n : A(t, "expected hexadecimal character");
        t.result += pd(s), t.position++;
      } else
        A(t, "unknown escape sequence");
      i = r = t.position;
    } else gt(a) ? (Bt(t, i, r, !0), zi(t, P(t, !1, e)), i = r = t.position) : t.position === t.lineStart && Ge(t) ? A(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
  }
  A(t, "unexpected end of the stream within a double quoted scalar");
}
function bd(t, e) {
  var i = !0, r, o, s, n = t.tag, a, l = t.anchor, d, p, f, c, g, y = /* @__PURE__ */ Object.create(null), x, T, w, S;
  if (S = t.input.charCodeAt(t.position), S === 91)
    p = 93, g = !1, a = [];
  else if (S === 123)
    p = 125, g = !0, a = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = a), S = t.input.charCodeAt(++t.position); S !== 0; ) {
    if (P(t, !0, e), S = t.input.charCodeAt(t.position), S === p)
      return t.position++, t.tag = n, t.anchor = l, t.kind = g ? "mapping" : "sequence", t.result = a, !0;
    i ? S === 44 && A(t, "expected the node content, but found ','") : A(t, "missed comma between flow collection entries"), T = x = w = null, f = c = !1, S === 63 && (d = t.input.charCodeAt(t.position + 1), et(d) && (f = c = !0, t.position++, P(t, !0, e))), r = t.line, o = t.lineStart, s = t.position, Vt(t, e, qe, !1, !0), T = t.tag, x = t.result, P(t, !0, e), S = t.input.charCodeAt(t.position), (c || t.line === r) && S === 58 && (f = !0, S = t.input.charCodeAt(++t.position), P(t, !0, e), Vt(t, e, qe, !1, !0), w = t.result), g ? Yt(t, a, y, T, x, w, r, o, s) : f ? a.push(Yt(t, null, y, T, x, w, r, o, s)) : a.push(x), P(t, !0, e), S = t.input.charCodeAt(t.position), S === 44 ? (i = !0, S = t.input.charCodeAt(++t.position)) : i = !1;
  }
  A(t, "unexpected end of the stream within a flow collection");
}
function Td(t, e) {
  var i, r, o = fi, s = !1, n = !1, a = e, l = 0, d = !1, p, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    r = !1;
  else if (f === 62)
    r = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      fi === o ? o = f === 43 ? Rr : ld : A(t, "repeat of a chomping mode identifier");
    else if ((p = fd(f)) >= 0)
      p === 0 ? A(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : n ? A(t, "repeat of an indentation width identifier") : (a = e + p - 1, n = !0);
    else
      break;
  if (vt(f)) {
    do
      f = t.input.charCodeAt(++t.position);
    while (vt(f));
    if (f === 35)
      do
        f = t.input.charCodeAt(++t.position);
      while (!gt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (Pi(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!n || t.lineIndent < a) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!n && t.lineIndent > a && (a = t.lineIndent), gt(f)) {
      l++;
      continue;
    }
    if (t.lineIndent < a) {
      o === Rr ? t.result += K.repeat(`
`, s ? 1 + l : l) : o === fi && s && (t.result += `
`);
      break;
    }
    for (r ? vt(f) ? (d = !0, t.result += K.repeat(`
`, s ? 1 + l : l)) : d ? (d = !1, t.result += K.repeat(`
`, l + 1)) : l === 0 ? s && (t.result += " ") : t.result += K.repeat(`
`, l) : t.result += K.repeat(`
`, s ? 1 + l : l), s = !0, n = !0, l = 0, i = t.position; !gt(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    Bt(t, i, t.position, !1);
  }
  return !0;
}
function Wr(t, e) {
  var i, r = t.tag, o = t.anchor, s = [], n, a = !1, l;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = s), l = t.input.charCodeAt(t.position); l !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, A(t, "tab characters must not be used in indentation")), !(l !== 45 || (n = t.input.charCodeAt(t.position + 1), !et(n)))); ) {
    if (a = !0, t.position++, P(t, !0, -1) && t.lineIndent <= e) {
      s.push(null), l = t.input.charCodeAt(t.position);
      continue;
    }
    if (i = t.line, Vt(t, e, Qo, !1, !0), s.push(t.result), P(t, !0, -1), l = t.input.charCodeAt(t.position), (t.line === i || t.lineIndent > e) && l !== 0)
      A(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return a ? (t.tag = r, t.anchor = o, t.kind = "sequence", t.result = s, !0) : !1;
}
function kd(t, e, i) {
  var r, o, s, n, a, l, d = t.tag, p = t.anchor, f = {}, c = /* @__PURE__ */ Object.create(null), g = null, y = null, x = null, T = !1, w = !1, S;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), S = t.input.charCodeAt(t.position); S !== 0; ) {
    if (!T && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, A(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), s = t.line, (S === 63 || S === 58) && et(r))
      S === 63 ? (T && (Yt(t, f, c, g, y, null, n, a, l), g = y = x = null), w = !0, T = !0, o = !0) : T ? (T = !1, o = !0) : A(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, S = r;
    else {
      if (n = t.line, a = t.lineStart, l = t.position, !Vt(t, i, Zo, !1, !0))
        break;
      if (t.line === s) {
        for (S = t.input.charCodeAt(t.position); vt(S); )
          S = t.input.charCodeAt(++t.position);
        if (S === 58)
          S = t.input.charCodeAt(++t.position), et(S) || A(t, "a whitespace character is expected after the key-value separator within a block mapping"), T && (Yt(t, f, c, g, y, null, n, a, l), g = y = x = null), w = !0, T = !1, o = !1, g = t.tag, y = t.result;
        else if (w)
          A(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = d, t.anchor = p, !0;
      } else if (w)
        A(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = d, t.anchor = p, !0;
    }
    if ((t.line === s || t.lineIndent > e) && (T && (n = t.line, a = t.lineStart, l = t.position), Vt(t, e, Pe, !0, o) && (T ? y = t.result : x = t.result), T || (Yt(t, f, c, g, y, x, n, a, l), g = y = x = null), P(t, !0, -1), S = t.input.charCodeAt(t.position)), (t.line === s || t.lineIndent > e) && S !== 0)
      A(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return T && Yt(t, f, c, g, y, null, n, a, l), w && (t.tag = d, t.anchor = p, t.kind = "mapping", t.result = f), w;
}
function Sd(t) {
  var e, i = !1, r = !1, o, s, n;
  if (n = t.input.charCodeAt(t.position), n !== 33)
    return !1;
  if (t.tag !== null && A(t, "duplication of a tag property"), n = t.input.charCodeAt(++t.position), n === 60 ? (i = !0, n = t.input.charCodeAt(++t.position)) : n === 33 ? (r = !0, o = "!!", n = t.input.charCodeAt(++t.position)) : o = "!", e = t.position, i) {
    do
      n = t.input.charCodeAt(++t.position);
    while (n !== 0 && n !== 62);
    t.position < t.length ? (s = t.input.slice(e, t.position), n = t.input.charCodeAt(++t.position)) : A(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; n !== 0 && !et(n); )
      n === 33 && (r ? A(t, "tag suffix cannot contain exclamation marks") : (o = t.input.slice(e - 1, t.position + 1), Jo.test(o) || A(t, "named tag handle cannot contain such characters"), r = !0, e = t.position + 1)), n = t.input.charCodeAt(++t.position);
    s = t.input.slice(e, t.position), dd.test(s) && A(t, "tag suffix cannot contain flow indicator characters");
  }
  s && !tn.test(s) && A(t, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    A(t, "tag name is malformed: " + s);
  }
  return i ? t.tag = s : At.call(t.tagMap, o) ? t.tag = t.tagMap[o] + s : o === "!" ? t.tag = "!" + s : o === "!!" ? t.tag = "tag:yaml.org,2002:" + s : A(t, 'undeclared tag handle "' + o + '"'), !0;
}
function _d(t) {
  var e, i;
  if (i = t.input.charCodeAt(t.position), i !== 38)
    return !1;
  for (t.anchor !== null && A(t, "duplication of an anchor property"), i = t.input.charCodeAt(++t.position), e = t.position; i !== 0 && !et(i) && !Wt(i); )
    i = t.input.charCodeAt(++t.position);
  return t.position === e && A(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function Bd(t) {
  var e, i, r;
  if (r = t.input.charCodeAt(t.position), r !== 42)
    return !1;
  for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !et(r) && !Wt(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && A(t, "name of an alias node must contain at least one character"), i = t.input.slice(e, t.position), At.call(t.anchorMap, i) || A(t, 'unidentified alias "' + i + '"'), t.result = t.anchorMap[i], P(t, !0, -1), !0;
}
function Vt(t, e, i, r, o) {
  var s, n, a, l = 1, d = !1, p = !1, f, c, g, y, x, T;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = n = a = Pe === i || Qo === i, r && P(t, !0, -1) && (d = !0, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)), l === 1)
    for (; Sd(t) || _d(t); )
      P(t, !0, -1) ? (d = !0, a = s, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)) : a = !1;
  if (a && (a = d || o), (l === 1 || Pe === i) && (qe === i || Zo === i ? x = e : x = e + 1, T = t.position - t.lineStart, l === 1 ? a && (Wr(t, T) || kd(t, T, x)) || bd(t, x) ? p = !0 : (n && Td(t, x) || yd(t, x) || xd(t, x) ? p = !0 : Bd(t) ? (p = !0, (t.tag !== null || t.anchor !== null) && A(t, "alias node should not have any properties")) : Cd(t, x, qe === i) && (p = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : l === 0 && (p = a && Wr(t, T))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && A(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, c = t.implicitTypes.length; f < c; f += 1)
      if (y = t.implicitTypes[f], y.resolve(t.result)) {
        t.result = y.construct(t.result), t.tag = y.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (At.call(t.typeMap[t.kind || "fallback"], t.tag))
      y = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (y = null, g = t.typeMap.multi[t.kind || "fallback"], f = 0, c = g.length; f < c; f += 1)
        if (t.tag.slice(0, g[f].tag.length) === g[f].tag) {
          y = g[f];
          break;
        }
    y || A(t, "unknown tag !<" + t.tag + ">"), t.result !== null && y.kind !== t.kind && A(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + y.kind + '", not "' + t.kind + '"'), y.resolve(t.result, t.tag) ? (t.result = y.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : A(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || p;
}
function Ad(t) {
  var e = t.position, i, r, o, s = !1, n;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (n = t.input.charCodeAt(t.position)) !== 0 && (P(t, !0, -1), n = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || n !== 37)); ) {
    for (s = !0, n = t.input.charCodeAt(++t.position), i = t.position; n !== 0 && !et(n); )
      n = t.input.charCodeAt(++t.position);
    for (r = t.input.slice(i, t.position), o = [], r.length < 1 && A(t, "directive name must not be less than one character in length"); n !== 0; ) {
      for (; vt(n); )
        n = t.input.charCodeAt(++t.position);
      if (n === 35) {
        do
          n = t.input.charCodeAt(++t.position);
        while (n !== 0 && !gt(n));
        break;
      }
      if (gt(n))
        break;
      for (i = t.position; n !== 0 && !et(n); )
        n = t.input.charCodeAt(++t.position);
      o.push(t.input.slice(i, t.position));
    }
    n !== 0 && Pi(t), At.call(zr, r) ? zr[r](t, r, o) : ze(t, 'unknown document directive "' + r + '"');
  }
  if (P(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, P(t, !0, -1)) : s && A(t, "directives end mark is expected"), Vt(t, t.lineIndent - 1, Pe, !1, !0), P(t, !0, -1), t.checkLineBreaks && hd.test(t.input.slice(e, t.position)) && ze(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Ge(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, P(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    A(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Ld(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var i = new md(t, e), r = t.indexOf("\0");
  for (r !== -1 && (i.position = r, A(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    Ad(i);
  return i.documents;
}
function Fd(t, e) {
  var i = Ld(t, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Tt("expected a single document in the stream, but found more");
  }
}
var Ed = Fd, vd = {
  load: Ed
}, wd = Go, Id = vd.load;
function Od(t) {
  const e = t.match(ao);
  if (!e)
    return {
      text: t,
      metadata: {}
    };
  let i = Id(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: wd
  }) ?? {};
  i = typeof i == "object" && !Array.isArray(i) ? i : {};
  const r = {};
  return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
    text: t.slice(e[0].length),
    metadata: r
  };
}
const Md = (t) => t.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"
), Dd = (t) => {
  const { text: e, metadata: i } = Od(t), { displayMode: r, title: o, config: s = {} } = i;
  return r && (s.gantt || (s.gantt = {}), s.gantt.displayMode = r), { title: o, config: s, text: e };
}, Nd = (t) => {
  const e = ue.detectInit(t) ?? {}, i = ue.detectDirective(t, "wrap");
  return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
  }) : i?.type === "wrap" && (e.wrap = !0), {
    text: aa(t),
    directive: e
  };
};
function nn(t) {
  const e = Md(t), i = Dd(e), r = Nd(i.text), o = po(i.config, r.directive);
  return t = jc(r.text), {
    code: t,
    title: i.title,
    config: o
  };
}
const Rd = 5e4, qd = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", Pd = "sandbox", zd = "loose", $d = "http://www.w3.org/2000/svg", Wd = "http://www.w3.org/1999/xlink", Yd = "http://www.w3.org/1999/xhtml", jd = "100%", Hd = "100%", Ud = "border:0;margin:0;", Xd = "margin:0", Gd = "allow-top-navigation-by-user-activation allow-popups", Vd = 'The "iframe" tag is not supported by your browser.', Kd = ["foreignobject"], Zd = ["dominant-baseline"];
function sn(t) {
  const e = nn(t);
  return De(), Oa(e.config ?? {}), e;
}
async function Qd(t, e) {
  Ri(), t = sn(t).code;
  try {
    await $i(t);
  } catch (i) {
    if (e?.suppressErrors)
      return !1;
    throw i;
  }
  return !0;
}
const Yr = (t, e, i = []) => `
.${t} ${e} { ${i.join(" !important; ")} !important; }`, Jd = (t, e = {}) => {
  var i;
  let r = "";
  if (t.themeCSS !== void 0 && (r += `
${t.themeCSS}`), t.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !si(e)) {
    const a = t.htmlLabels || ((i = t.flowchart) == null ? void 0 : i.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const d = e[l];
      si(d.styles) || a.forEach((p) => {
        r += Yr(d.id, p, d.styles);
      }), si(d.textStyles) || (r += Yr(d.id, "tspan", d.textStyles));
    }
  }
  return r;
}, tu = (t, e, i, r) => {
  const o = Jd(t, i), s = Jl(e, o, t.themeVariables);
  return Hn(Xn(`${r}{${s}}`), Un);
}, eu = (t = "", e, i) => {
  let r = t;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = Ea(r), r = r.replace(/<br>/g, "<br/>"), r;
}, iu = (t = "", e) => {
  var i, r;
  const o = (r = (i = e?.viewBox) == null ? void 0 : i.baseVal) != null && r.height ? e.viewBox.baseVal.height + "px" : Hd, s = btoa('<body style="' + Xd + '">' + t + "</body>");
  return `<iframe style="width:${jd};height:${o};${Ud}" src="data:text/html;base64,${s}" sandbox="${Gd}">
  ${Vd}
</iframe>`;
}, jr = (t, e, i, r, o) => {
  const s = t.append("div");
  s.attr("id", i), r && s.attr("style", r);
  const n = s.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", $d);
  return o && n.attr("xmlns:xlink", o), n.append("g"), t;
};
function Hr(t, e) {
  return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const ru = (t, e, i, r) => {
  var o, s, n;
  (o = t.getElementById(e)) == null || o.remove(), (s = t.getElementById(i)) == null || s.remove(), (n = t.getElementById(r)) == null || n.remove();
}, ou = async function(t, e, i) {
  var r, o, s, n, a, l;
  Ri();
  const d = sn(e);
  e = d.code;
  const p = ft();
  L.debug(p), e.length > (p?.maxTextSize ?? Rd) && (e = qd);
  const f = "#" + t, c = "i" + t, g = "#" + c, y = "d" + t, x = "#" + y;
  let T = st("body");
  const w = p.securityLevel === Pd, S = p.securityLevel === zd, b = p.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), w) {
      const lt = Hr(st(i), c);
      T = st(lt.nodes()[0].contentDocument.body), T.node().style.margin = 0;
    } else
      T = st(i);
    jr(T, t, y, `font-family: ${b}`, Wd);
  } else {
    if (ru(document, t, y, c), w) {
      const lt = Hr(st("body"), c);
      T = st(lt.nodes()[0].contentDocument.body), T.node().style.margin = 0;
    } else
      T = st("body");
    jr(T, t, y);
  }
  let v, E;
  try {
    v = await $i(e, { title: d.title });
  } catch (lt) {
    v = new Ho("error"), E = lt;
  }
  const M = T.select(x).node(), Y = v.type, it = M.firstChild, N = it.firstChild, R = (o = (r = v.renderer).getClasses) == null ? void 0 : o.call(r, e, v), q = tu(p, Y, R, f), It = document.createElement("style");
  It.innerHTML = q, it.insertBefore(It, N);
  try {
    await v.renderer.draw(e, t, Ir, v);
  } catch (lt) {
    throw mc.draw(e, t, Ir), lt;
  }
  const Zt = T.select(`${x} svg`), Qt = (n = (s = v.db).getAccTitle) == null ? void 0 : n.call(s), Ve = (l = (a = v.db).getAccDescription) == null ? void 0 : l.call(a);
  su(Y, Zt, Qt, Ve), T.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Yd);
  let mt = T.select(x).node().innerHTML;
  if (L.debug("config.arrowMarkerAbsolute", p.arrowMarkerAbsolute), mt = eu(mt, w, oo(p.arrowMarkerAbsolute)), w) {
    const lt = T.select(x + " svg").node();
    mt = iu(mt, lt);
  } else S || (mt = Ht.sanitize(mt, {
    ADD_TAGS: Kd,
    ADD_ATTR: Zd
  }));
  if (zc(), E)
    throw E;
  const Ot = st(w ? g : x).node();
  return Ot && "remove" in Ot && Ot.remove(), {
    svg: mt,
    bindFunctions: v.db.bindFunctions
  };
};
function nu(t = {}) {
  var e;
  t?.fontFamily && !((e = t.themeVariables) != null && e.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), wa(t), t?.theme && t.theme in St ? t.themeVariables = St[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = St.default.getThemeVariables(t.themeVariables));
  const i = typeof t == "object" ? va(t) : Co();
  Ai(i.logLevel), Ri();
}
const $i = (t, e = {}) => {
  const { code: i } = nn(t);
  return Pc(i, e);
};
function su(t, e, i, r) {
  Wc(e, t), Yc(e, i, r, e.attr("id"));
}
const wt = Object.freeze({
  render: ou,
  parse: Qd,
  getDiagramFromText: $i,
  initialize: nu,
  getConfig: ft,
  setConfig: yo,
  getSiteConfig: Co,
  updateSiteConfig: Ia,
  reset: () => {
    De();
  },
  globalReset: () => {
    De(Xt);
  },
  defaultConfig: Xt
});
Ai(ft().logLevel);
De(ft());
const au = async () => {
  L.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(Ut).map(async ([i, { detector: r, loader: o }]) => {
      if (o)
        try {
          Ni(i);
        } catch {
          try {
            const { diagram: n, id: a } = await o();
            Re(a, n, r);
          } catch (n) {
            throw L.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete Ut[i], n;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    L.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      L.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
}, lu = (t, e, i) => {
  L.warn(t), fo(t) ? (i && i(t.str, t.hash), e.push({ ...t, message: t.str, error: t })) : (i && i(t), t instanceof Error && e.push({
    str: t.message,
    message: t.message,
    hash: t.name,
    error: t
  }));
}, an = async function(t = {
  querySelector: ".mermaid"
}) {
  try {
    await cu(t);
  } catch (e) {
    if (fo(e) && L.error(e.str), rt.parseError && rt.parseError(e), !t.suppressErrors)
      throw L.error("Use the suppressErrors option to suppress these errors"), e;
  }
}, cu = async function({ postRenderCallback: t, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = wt.getConfig();
  L.debug(`${t ? "" : "No "}Callback function found`);
  let o;
  if (i)
    o = i;
  else if (e)
    o = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  L.debug(`Found ${o.length} diagrams`), r?.startOnLoad !== void 0 && (L.debug("Start On Load: " + r?.startOnLoad), wt.updateSiteConfig({ startOnLoad: r?.startOnLoad }));
  const s = new ue.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
  let n;
  const a = [];
  for (const l of Array.from(o)) {
    L.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const d = `mermaid-${s.next()}`;
    n = l.innerHTML, n = Sn(ue.entityDecode(n)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const p = ue.detectInit(n);
    p && L.debug("Detected early reinit: ", p);
    try {
      const { svg: f, bindFunctions: c } = await dn(d, n, l);
      l.innerHTML = f, t && await t(d), c && c(l);
    } catch (f) {
      lu(f, a, rt.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
}, ln = function(t) {
  wt.initialize(t);
}, hu = async function(t, e, i) {
  L.warn("mermaid.init is deprecated. Please use run instead."), t && ln(t);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await an(r);
}, du = async (t, {
  lazyLoad: e = !0
} = {}) => {
  co(...t), e === !1 && await au();
}, cn = function() {
  if (rt.startOnLoad) {
    const { startOnLoad: t } = wt.getConfig();
    t && rt.run().catch((e) => L.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", cn, !1);
}
const uu = function(t) {
  rt.parseError = t;
}, $e = [];
let pi = !1;
const hn = async () => {
  if (!pi) {
    for (pi = !0; $e.length > 0; ) {
      const t = $e.shift();
      if (t)
        try {
          await t();
        } catch (e) {
          L.error("Error executing queue", e);
        }
    }
    pi = !1;
  }
}, gu = async (t, e) => new Promise((i, r) => {
  const o = () => new Promise((s, n) => {
    wt.parse(t, e).then(
      (a) => {
        s(a), i(a);
      },
      (a) => {
        var l;
        L.error("Error parsing", a), (l = rt.parseError) == null || l.call(rt, a), n(a), r(a);
      }
    );
  });
  $e.push(o), hn().catch(r);
}), dn = (t, e, i) => new Promise((r, o) => {
  const s = () => new Promise((n, a) => {
    wt.render(t, e, i).then(
      (l) => {
        n(l), r(l);
      },
      (l) => {
        var d;
        L.error("Error parsing", l), (d = rt.parseError) == null || d.call(rt, l), a(l), o(l);
      }
    );
  });
  $e.push(s), hn().catch(o);
}), rt = {
  startOnLoad: !0,
  mermaidAPI: wt,
  parse: gu,
  render: dn,
  init: hu,
  run: an,
  registerExternalDiagrams: du,
  initialize: ln,
  parseError: void 0,
  contentLoaded: cn,
  setParseErrorHandler: uu,
  detectType: Ue
}, Kt = (t) => {
  t = pu(t);
  const e = t.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), i = document.createElement("textarea");
  return i.innerHTML = e, i.value;
}, jt = (t) => {
  const i = t.getAttribute("transform")?.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/);
  let r = 0, o = 0;
  return i && (r = Number(i[1]), o = Number(i[2])), { transformX: r, transformY: o };
}, fu = (t) => {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/classDef.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/#\w+;/g, (i) => {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? `ﬂ°°${r}¶ß` : `ﬂ°${r}¶ß`;
  }), e;
}, pu = function(t) {
  return t.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, un = (t, e = { x: 0, y: 0 }) => {
  if (t.tagName.toLowerCase() !== "path")
    throw new Error(`Invalid input: Expected an HTMLElement of tag "path", got ${t.tagName}`);
  const i = t.getAttribute("d");
  if (!i)
    throw new Error('Path element does not contain a "d" attribute');
  const r = i.split(/(?=[LM])/), o = r[0].substring(1).split(",").map((a) => parseFloat(a)), s = r[r.length - 1].substring(1).split(",").map((a) => parseFloat(a)), n = r.map((a) => {
    const l = a.substring(1).split(",").map((d) => parseFloat(d));
    return { x: l[0], y: l[1] };
  }).filter((a, l, d) => {
    if (l === 0 || l === d.length - 1)
      return !0;
    if (a.x === d[l - 1].x && a.y === d[l - 1].y)
      return !1;
    if (l === d.length - 2 && (d[l - 1].x === a.x || d[l - 1].y === a.y)) {
      const p = d[d.length - 1];
      return Math.hypot(p.x - a.x, p.y - a.y) > 20;
    }
    return a.x !== d[l - 1].x || a.y !== d[l - 1].y;
  }).map((a) => ({
    x: a.x + e.x,
    y: a.y + e.y
  }));
  return {
    startX: o[0] + e.x,
    startY: o[1] + e.y,
    endX: s[0] + e.x,
    endY: s[1] + e.y,
    reflectionPoints: n
  };
}, mu = (t, e) => {
  const i = t.nodes.map((a) => a.startsWith("flowchart-") ? a.split("-")[1] : a), r = e.querySelector(`[id='${t.id}']`);
  if (!r)
    throw new Error("SubGraph element not found");
  const o = Wi(r, e), s = r.getBBox(), n = {
    width: s.width,
    height: s.height
  };
  return t.classes = void 0, t.dir = void 0, {
    ...t,
    nodeIds: i,
    ...o,
    ...n,
    text: Kt(t.title)
  };
}, Cu = (t, e) => {
  const i = e.querySelector(`[id*="flowchart-${t.id}-"]`);
  if (!i)
    return;
  let r;
  i.parentElement?.tagName.toLowerCase() === "a" && (r = i.parentElement.getAttribute("xlink:href"));
  const o = Wi(r ? i.parentElement : i, e), s = i.getBBox(), n = {
    width: s.width,
    height: s.height
  }, a = i.querySelector(".label-container")?.getAttribute("style"), l = i.querySelector(".label")?.getAttribute("style"), d = {};
  a?.split(";").forEach((f) => {
    if (!f)
      return;
    const c = f.split(":")[0].trim(), g = f.split(":")[1].trim();
    d[c] = g;
  });
  const p = {};
  return l?.split(";").forEach((f) => {
    if (!f)
      return;
    const c = f.split(":")[0].trim(), g = f.split(":")[1].trim();
    p[c] = g;
  }), {
    id: t.id,
    labelType: t.labelType,
    text: Kt(t.text),
    type: t.type,
    link: r || void 0,
    ...o,
    ...n,
    containerStyle: d,
    labelStyle: p
  };
}, yu = (t, e, i) => {
  const r = i.querySelector(`[id*="L-${t.start}-${t.end}-${e}"]`);
  if (!r)
    throw new Error("Edge element not found");
  const o = Wi(r, i), s = un(r, o);
  return t.length = void 0, {
    ...t,
    ...s,
    text: Kt(t.text)
  };
}, Wi = (t, e) => {
  if (!t)
    throw new Error("Element not found");
  let i = t.parentElement?.parentElement;
  const r = t.childNodes[0];
  let o = { x: 0, y: 0 };
  if (r) {
    const { transformX: l, transformY: d } = jt(r), p = r.getBBox();
    o = {
      x: Number(r.getAttribute("x")) || l + p.x || 0,
      y: Number(r.getAttribute("y")) || d + p.y || 0
    };
  }
  const { transformX: s, transformY: n } = jt(t), a = {
    x: s + o.x,
    y: n + o.y
  };
  for (; i && i.id !== e.id; ) {
    if (i.classList.value === "root" && i.hasAttribute("transform")) {
      const { transformX: l, transformY: d } = jt(i);
      a.x += l, a.y += d;
    }
    i = i.parentElement;
  }
  return a;
}, xu = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = i.getVertices();
  Object.keys(r).forEach((a) => {
    r[a] = Cu(r[a], e);
  });
  const o = /* @__PURE__ */ new Map(), s = i.getEdges().filter((a) => e.querySelector(`[id*="L-${a.start}-${a.end}"]`)).map((a) => {
    const l = `${a.start}-${a.end}`, d = o.get(l) || 0;
    return o.set(l, d + 1), yu(a, d, e);
  });
  return {
    type: "flowchart",
    subGraphs: i.getSubGraphs().map((a) => mu(a, e)),
    vertices: r,
    edges: s
  };
}, bu = (t, e) => {
  const i = {};
  e?.label && (i.label = { text: Kt(e.label), fontSize: 16 });
  const r = t.tagName;
  if (r === "line")
    i.startX = Number(t.getAttribute("x1")), i.startY = Number(t.getAttribute("y1")), i.endX = Number(t.getAttribute("x2")), i.endY = Number(t.getAttribute("y2"));
  else if (r === "path") {
    const o = t.getAttribute("d");
    if (!o)
      throw new Error('Path element does not contain a "d" attribute');
    const s = o.split(/(?=[LC])/), n = s[0].substring(1).split(",").map((d) => parseFloat(d)), a = [];
    s.forEach((d) => {
      const p = d.substring(1).trim().split(" ").map((f) => {
        const [c, g] = f.split(",");
        return [
          parseFloat(c) - n[0],
          parseFloat(g) - n[1]
        ];
      });
      a.push(...p);
    });
    const l = a[a.length - 1];
    i.startX = n[0], i.startY = n[1], i.endX = l[0], i.endY = l[1], i.points = a;
  }
  return e?.label && (i.startY = i.startY - 10, i.endY = i.endY - 10), i.strokeColor = t.getAttribute("stroke"), i.strokeWidth = Number(t.getAttribute("stroke-width")), i.type = "arrow", i.strokeStyle = e?.strokeStyle || "solid", i.startArrowhead = e?.startArrowhead || null, i.endArrowhead = e?.endArrowhead || null, i;
}, gn = (t, e, i, r, o) => {
  const s = {};
  return s.type = "arrow", s.startX = t, s.startY = e, s.endX = i, s.endY = r, Object.assign(s, { ...o }), s;
}, Si = (t, e, i, r) => ({
  type: "text",
  x: t,
  y: e,
  text: i,
  width: r?.width || 20,
  height: r?.height || 20,
  fontSize: r?.fontSize || We,
  id: r?.id,
  groupId: r?.groupId,
  metadata: r?.metadata
}), fn = (t, e, i) => {
  const r = {}, o = Number(t.getAttribute("x")), s = Number(t.getAttribute("y"));
  r.type = "text", r.text = Kt(e), i?.id && (r.id = i.id), i?.groupId && (r.groupId = i.groupId);
  const n = t.getBBox();
  r.width = n.width, r.height = n.height, r.x = o - n.width / 2, r.y = s;
  const a = parseInt(getComputedStyle(t).fontSize);
  return r.fontSize = a, r;
}, pt = (t, e, i = {}) => {
  const r = {};
  r.type = e;
  const { label: o, subtype: s, id: n, groupId: a } = i;
  r.id = n, a && (r.groupId = a), o && (r.label = {
    text: Kt(o.text),
    fontSize: 16,
    verticalAlign: o?.verticalAlign
  });
  const l = t.getBBox();
  switch (r.x = l.x, r.y = l.y, r.width = l.width, r.height = l.height, r.subtype = s, s) {
    case "highlight":
      const d = t.getAttribute("fill");
      d && (r.bgColor = d);
      break;
    case "note":
      r.strokeStyle = "dashed";
      break;
  }
  return r;
}, me = (t, e, i, r, o, s) => {
  const n = {};
  return n.startX = e, n.startY = i, n.endX = r, s?.groupId && (n.groupId = s.groupId), s?.id && (n.id = s.id), n.endY = o, n.strokeColor = t.getAttribute("stroke"), n.strokeWidth = Number(t.getAttribute("stroke-width")), n.type = "line", n;
}, Ur = {
  0: "SOLID",
  1: "DOTTED",
  3: "SOLID_CROSS",
  4: "DOTTED_CROSS",
  5: "SOLID_OPEN",
  6: "DOTTED_OPEN",
  24: "SOLID_POINT",
  25: "DOTTED_POINT"
}, ut = {
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
}, Tu = (t) => {
  let e;
  switch (t) {
    case ut.SOLID:
    case ut.SOLID_CROSS:
    case ut.SOLID_OPEN:
    case ut.SOLID_POINT:
      e = "solid";
      break;
    case ut.DOTTED:
    case ut.DOTTED_CROSS:
    case ut.DOTTED_OPEN:
    case ut.DOTTED_POINT:
      e = "dotted";
      break;
    default:
      e = "solid";
      break;
  }
  return e;
}, ku = (t, e) => {
  if (!!t.nextElementSibling?.classList.contains("sequenceNumber")) {
    const r = t.nextElementSibling?.textContent;
    if (!r)
      throw new Error("sequence number not present");
    const o = 30, s = o / 2, a = {
      type: "rectangle",
      x: e.startX - 10,
      y: e.startY - s,
      label: { text: r, fontSize: 14 },
      bgColor: "#e9ecef",
      height: o,
      subtype: "sequence"
    };
    Object.assign(e, { sequenceNumber: a });
  }
}, Xr = (t, e, i) => {
  if (!t)
    throw "root node not found";
  const r = kt(), o = Array.from(t.children), s = [];
  return o.forEach((n, a) => {
    const l = `${i?.id}-${a}`;
    let d;
    switch (n.tagName) {
      case "line":
        const p = Number(n.getAttribute("x1")), f = Number(n.getAttribute("y1")), c = Number(n.getAttribute("x2")), g = Number(n.getAttribute("y2"));
        d = me(n, p, f, c, g, { groupId: r, id: l });
        break;
      case "text":
        d = fn(n, e, {
          groupId: r,
          id: l
        });
        break;
      case "circle":
        d = pt(n, "ellipse", {
          label: n.textContent ? { text: n.textContent } : void 0,
          groupId: r,
          id: l
        });
      default:
        d = pt(n, Kn[n.tagName], {
          label: n.textContent ? { text: n.textContent } : void 0,
          groupId: r,
          id: l
        });
    }
    s.push(d);
  }), s;
}, Su = (t, e) => {
  const i = Array.from(e.querySelectorAll(".actor-top")), r = Array.from(e.querySelectorAll(".actor-bottom")), o = [], s = [];
  return Object.values(t).forEach((n, a) => {
    const l = i.find((f) => f.getAttribute("name") === n.name), d = r.find((f) => f.getAttribute("name") === n.name);
    if (!l || !d)
      throw "root not found";
    const p = n.description;
    if (n.type === "participant") {
      const f = pt(l, "rectangle", { id: `${n.name}-top`, label: { text: p }, subtype: "actor" });
      if (!f)
        throw "Top Node element not found!";
      o.push([f]);
      const c = pt(d, "rectangle", { id: `${n.name}-bottom`, label: { text: p }, subtype: "actor" });
      o.push([c]);
      const g = l?.parentElement?.previousElementSibling;
      if (g?.tagName !== "line")
        throw "Line not found";
      const y = Number(g.getAttribute("x1"));
      if (!f.height)
        throw "Top node element height is null";
      const x = f.y + f.height, T = c.y, w = Number(g.getAttribute("x2")), S = me(g, y, x, w, T);
      s.push(S);
    } else if (n.type === "actor") {
      const f = Xr(l, p, {
        id: `${n.name}-top`
      });
      o.push(f);
      const c = Xr(d, p, {
        id: `${n.name}-bottom`
      });
      o.push(c);
      const g = l.previousElementSibling;
      if (g?.tagName !== "line")
        throw "Line not found";
      const y = Number(g.getAttribute("x1")), x = Number(g.getAttribute("y1")), T = Number(g.getAttribute("x2")), w = c.find((S) => S.type === "ellipse");
      if (w) {
        const S = w.y, b = me(g, y, x, T, S);
        s.push(b);
      }
    }
  }), { nodes: o, lines: s };
}, _u = (t, e) => {
  const i = [], r = Array.from(e.querySelectorAll('[class*="messageLine"]')), o = Object.keys(Ur), s = t.filter((n) => o.includes(n.type.toString()));
  return r.forEach((n, a) => {
    const l = s[a], d = Ur[l.type], p = bu(n, {
      label: l?.message,
      strokeStyle: Tu(l.type),
      endArrowhead: d === "SOLID_OPEN" || d === "DOTTED_OPEN" ? null : "arrow"
    });
    ku(n, p), i.push(p);
  }), i;
}, Bu = (t, e) => {
  const i = Array.from(e.querySelectorAll(".note")).map((s) => s.parentElement), r = t.filter((s) => s.type === ut.NOTE), o = [];
  return i.forEach((s, n) => {
    if (!s)
      return;
    const a = s.firstChild, l = r[n].message, d = pt(a, "rectangle", {
      label: { text: l },
      subtype: "note"
    });
    o.push(d);
  }), o;
}, Au = (t) => {
  const e = Array.from(t.querySelectorAll("[class*=activation]")), i = [];
  return e.forEach((r) => {
    const o = pt(r, "rectangle", {
      label: { text: "" },
      subtype: "activation"
    });
    i.push(o);
  }), i;
}, Lu = (t, e) => {
  const i = Array.from(e.querySelectorAll(".loopLine")), r = [], o = [], s = [];
  i.forEach((p) => {
    const f = Number(p.getAttribute("x1")), c = Number(p.getAttribute("y1")), g = Number(p.getAttribute("x2")), y = Number(p.getAttribute("y2")), x = me(p, f, c, g, y);
    x.strokeStyle = "dotted", x.strokeColor = "#adb5bd", x.strokeWidth = 2, r.push(x);
  });
  const n = Array.from(e.querySelectorAll(".loopText")), a = t.filter((p) => p.type === ut.CRITICAL_START).map((p) => p.message);
  n.forEach((p) => {
    const f = p.textContent || "", c = fn(p, f), g = f.match(/\[(.*?)\]/)?.[1] || "";
    a.includes(g) && (c.x += 16), o.push(c);
  });
  const l = Array.from(e?.querySelectorAll(".labelBox")), d = Array.from(e?.querySelectorAll(".labelText"));
  return l.forEach((p, f) => {
    const c = d[f]?.textContent || "", g = pt(p, "rectangle", {
      label: { text: c }
    });
    g.strokeColor = "#adb5bd", g.bgColor = "#e9ecef", g.width = void 0, s.push(g);
  }), { lines: r, texts: o, nodes: s };
}, Fu = (t) => {
  const e = Array.from(t.querySelectorAll(".rect")).filter((r) => r.parentElement?.tagName !== "g"), i = [];
  return e.forEach((r) => {
    const o = pt(r, "rectangle", {
      label: { text: "" },
      subtype: "highlight"
    });
    i.push(o);
  }), i;
}, Eu = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = [], o = i.getBoxes(), s = Fu(e), n = i.getActors(), { nodes: a, lines: l } = Su(n, e), d = i.getMessages(), p = _u(d, e), f = Bu(d, e), c = Au(e), g = Lu(d, e);
  return r.push(s), r.push(...a), r.push(f), r.push(c), { type: "sequence", lines: l, arrows: p, nodes: r, loops: g, groups: o };
}, Fe = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}, Gr = {
  LINE: 0,
  DOTTED_LINE: 1
}, _t = 16, vu = (t) => {
  let e;
  switch (t) {
    case Gr.LINE:
      e = "solid";
      break;
    case Gr.DOTTED_LINE:
      e = "dotted";
      break;
    default:
      e = "solid";
  }
  return e;
}, Vr = (t) => {
  let e;
  switch (t) {
    case Fe.AGGREGATION:
      e = "diamond_outline";
      break;
    case Fe.COMPOSITION:
      e = "diamond";
      break;
    case Fe.EXTENSION:
      e = "triangle_outline";
      break;
    case "none":
      e = null;
      break;
    case Fe.DEPENDENCY:
    default:
      e = "arrow";
      break;
  }
  return e;
}, wu = (t, e) => {
  const i = [], r = [], o = [];
  return Object.values(t).forEach((s) => {
    const { domId: n, id: a } = s, l = kt(), d = e.querySelector(`[data-id=${a}]`);
    if (!d)
      throw Error(`DOM Node with id ${n} not found`);
    const { transformX: p, transformY: f } = jt(d), c = pt(d.firstChild, "rectangle", { id: a, groupId: l });
    c.x += p, c.y += f, c.metadata = { classId: a }, i.push(c), Array.from(d.querySelectorAll(".divider")).forEach((x) => {
      const T = Number(x.getAttribute("x1")), w = Number(x.getAttribute("y1")), S = Number(x.getAttribute("x2")), b = Number(x.getAttribute("y2")), v = me(x, T, w, S, b, {
        groupId: l,
        id: kt()
      });
      v.startX += p, v.startY += f, v.endX += p, v.endY += f, v.metadata = { classId: a }, r.push(v);
    });
    const y = d.querySelector(".label")?.children;
    if (!y)
      throw "label nodes not found";
    Array.from(y).forEach((x) => {
      const T = x.textContent;
      if (!T)
        return;
      const w = kt(), { transformX: S, transformY: b } = jt(x), v = x.getBBox(), M = Si(p + S, f + b + 10, T, {
        width: v.width,
        height: v.height,
        id: w,
        groupId: l,
        metadata: { classId: a }
      });
      o.push(M);
    });
  }), { nodes: i, lines: r, text: o };
}, Iu = (t, e) => {
  const i = ["triangle_outline", "diamond", "diamond_outline"], r = e.startArrowhead && i.includes(e.startArrowhead), o = e.endArrowhead && i.includes(e.endArrowhead);
  return !o && !r || (r && (t === "LR" ? e.startX -= _t : t === "RL" ? e.startX += _t : t === "TB" ? e.startY -= _t : t === "BT" && (e.startY += _t)), o && (t === "LR" ? e.endX += _t : t === "RL" ? e.endX -= _t : t === "TB" ? e.endY += _t : t === "BT" && (e.endY -= _t))), e;
}, Ou = (t, e, i, r) => {
  const o = i.querySelector(".edgePaths")?.children;
  if (!o)
    throw new Error("No Edges found!");
  const s = [], n = [];
  return t.forEach((a, l) => {
    const { id1: d, id2: p, relation: f } = a, c = e.find((q) => q.id === d), g = e.find((q) => q.id === p), y = vu(f.lineType), x = Vr(f.type1), T = Vr(f.type2), w = un(o[l]), S = gn(w.startX, w.startY, w.endX, w.endY, {
      strokeStyle: y,
      startArrowhead: x,
      endArrowhead: T,
      label: a.title ? { text: a.title } : void 0,
      start: { type: "rectangle", id: c.id },
      end: { type: "rectangle", id: g.id }
    }), b = Iu(r, S);
    s.push(b);
    const { relationTitle1: v, relationTitle2: E } = a, M = 20, Y = 15, it = 15;
    let N, R;
    if (v && v !== "none") {
      switch (r) {
        case "TB":
          N = b.startX - M, b.endX < b.startX && (N -= it), R = b.startY + Y;
          break;
        case "BT":
          N = b.startX + M, b.endX > b.startX && (N += it), R = b.startY - Y;
          break;
        case "LR":
          N = b.startX + M, R = b.startY + Y, b.endY > b.startY && (R += it);
          break;
        case "RL":
          N = b.startX - M, R = b.startY - Y, b.startY > b.endY && (R -= it);
          break;
        default:
          N = b.startX - M, R = b.startY + Y;
      }
      const q = Si(N, R, v, {
        fontSize: 16
      });
      n.push(q);
    }
    if (E && E !== "none") {
      switch (r) {
        case "TB":
          N = b.endX + M, b.endX < b.startX && (N += it), R = b.endY - Y;
          break;
        case "BT":
          N = b.endX - M, b.endX > b.startX && (N -= it), R = b.endY + Y;
          break;
        case "LR":
          N = b.endX - M, R = b.endY - Y, b.endY > b.startY && (R -= it);
          break;
        case "RL":
          N = b.endX + M, R = b.endY + Y, b.startY > b.endY && (R += it);
          break;
        default:
          N = b.endX + M, R = b.endY - Y;
      }
      const q = Si(N, R, E, {
        fontSize: 16
      });
      n.push(q);
    }
  }), { arrows: s, text: n };
}, Mu = (t, e, i) => {
  const r = [], o = [];
  return t.forEach((s) => {
    const { id: n, text: a, class: l } = s, d = e.querySelector(`#${n}`);
    if (!d)
      throw new Error(`Node with id ${n} not found!`);
    const { transformX: p, transformY: f } = jt(d), c = d.firstChild, g = pt(c, "rectangle", {
      id: n,
      subtype: "note",
      label: { text: a }
    });
    if (Object.assign(g, {
      x: g.x + p,
      y: g.y + f
    }), r.push(g), l) {
      const y = i.find((v) => v.id === l);
      if (!y)
        throw new Error(`class node with id ${l} not found!`);
      const x = g.x + (g.width || 0) / 2, T = g.y + (g.height || 0), w = x, S = y.y, b = gn(x, T, w, S, {
        strokeStyle: "dotted",
        startArrowhead: null,
        endArrowhead: null,
        start: { id: g.id, type: "rectangle" },
        end: { id: y.id, type: "rectangle" }
      });
      o.push(b);
    }
  }), { notes: r, connectors: o };
}, Du = (t, e) => {
  t.parse();
  const i = t.parser.yy, r = i.getDirection(), o = [], s = [], n = [], a = [], l = i.getNamespaces(), d = i.getClasses();
  if (Object.keys(d).length) {
    const x = wu(d, e);
    o.push(x.nodes), s.push(...x.lines), n.push(...x.text), a.push(...x.nodes);
  }
  const p = i.getRelations(), { arrows: f, text: c } = Ou(p, a, e, r), { notes: g, connectors: y } = Mu(i.getNotes(), e, a);
  return o.push(g), f.push(...y), n.push(...c), { type: "class", nodes: o, lines: s, arrows: f, text: n, namespaces: l };
}, Nu = (t) => {
  const e = t.querySelector("svg");
  if (!e)
    throw new Error("SVG element not found");
  const i = e.getBoundingClientRect(), r = i.width, o = i.height;
  e.setAttribute("width", `${r}`), e.setAttribute("height", `${o}`);
  const s = "image/svg+xml", n = unescape(encodeURIComponent(e.outerHTML)), l = `data:image/svg+xml;base64,${btoa(n)}`;
  return {
    type: "graphImage",
    mimeType: s,
    dataURL: l,
    width: r,
    height: o
  };
}, Ru = async (t, e = Cr) => {
  rt.initialize({ ...Cr, ...e });
  const i = await rt.mermaidAPI.getDiagramFromText(fu(t)), { svg: r } = await rt.render("mermaid-to-excalidraw", t), o = document.createElement("div");
  o.setAttribute("style", "opacity: 0; position: relative; z-index: -1;"), o.innerHTML = r, o.id = "mermaid-diagram", document.body.appendChild(o);
  let s;
  switch (i.type) {
    case "flowchart-v2": {
      s = xu(i, o);
      break;
    }
    case "sequence": {
      s = Eu(i, o);
      break;
    }
    case "classDiagram": {
      s = Du(i, o);
      break;
    }
    // fallback to image if diagram type not-supported
    default:
      s = Nu(o);
  }
  return o.remove(), s;
}, qu = async (t, e) => {
  const i = e || {}, r = parseInt(i.themeVariables?.fontSize ?? "") || We, o = await Ru(t, {
    ...i,
    themeVariables: {
      ...i.themeVariables,
      // Multiplying by 1.25 to increase the font size by 25% and render correctly in Excalidraw
      fontSize: `${r * 1.25}px`
    }
  });
  return cs(o, {
    fontSize: r
  });
}, Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseMermaidToExcalidraw: qu
}, Symbol.toStringTag, { value: "Module" }));
export {
  vi as A,
  Js as B,
  Xs as C,
  ft as D,
  Er as E,
  Wu as F,
  $s as G,
  $u as H,
  Kl as I,
  ma as J,
  ca as K,
  Ca as L,
  ac as M,
  Vu as N,
  ra as Z,
  ic as a,
  ec as b,
  Di as c,
  qo as d,
  U as e,
  Me as f,
  oc as g,
  fe as h,
  Li as i,
  _a as j,
  ye as k,
  L as l,
  sc as m,
  nc as n,
  Gu as o,
  tc as p,
  oo as q,
  Ea as r,
  rc as s,
  Xu as t,
  ue as u,
  dc as v,
  ka as w,
  xa as x,
  fc as y,
  po as z
};
