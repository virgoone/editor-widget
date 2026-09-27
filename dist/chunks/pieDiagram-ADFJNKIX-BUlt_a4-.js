import { g as U, s as H, a as V, b as Z, p as j, o as q, _ as s, l as w, c as J, B as K, F as Q, H as X, d as Y, x as ee, C as te } from "./mermaid.core-BgJgbWyA.js";
import { p as ae } from "./chunk-4BX2VUAB-BznwJhea.js";
import { p as re } from "./treemap-KMMF4GRG-D3qAjUb6.js";
import "./isEmpty-BO6FiAO3.js";
import { a as G } from "./arc-BiIxRh2A.js";
import { o as ie } from "./ordinal-B6-f3MAq.js";
import { p as se } from "./pie-BUhaizKs.js";
var oe = te.pie, C = {
  sections: /* @__PURE__ */ new Map(),
  showData: !1
}, g = C.sections, D = C.showData, le = structuredClone(oe), ne = /* @__PURE__ */ s(() => structuredClone(le), "getConfig"), ce = /* @__PURE__ */ s(() => {
  g = /* @__PURE__ */ new Map(), D = C.showData, ee();
}, "clear"), pe = /* @__PURE__ */ s(({ label: e, value: a }) => {
  if (a < 0)
    throw new Error(
      `"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`
    );
  g.has(e) || (g.set(e, a), w.debug(`added new section: ${e}, with value: ${a}`));
}, "addSection"), de = /* @__PURE__ */ s(() => g, "getSections"), ge = /* @__PURE__ */ s((e) => {
  D = e;
}, "setShowData"), ue = /* @__PURE__ */ s(() => D, "getShowData"), W = {
  getConfig: ne,
  clear: ce,
  setDiagramTitle: q,
  getDiagramTitle: j,
  setAccTitle: Z,
  getAccTitle: V,
  setAccDescription: H,
  getAccDescription: U,
  addSection: pe,
  getSections: de,
  setShowData: ge,
  getShowData: ue
}, fe = /* @__PURE__ */ s((e, a) => {
  ae(e, a), a.setShowData(e.showData), e.sections.map(a.addSection);
}, "populateDb"), me = {
  parse: /* @__PURE__ */ s(async (e) => {
    const a = await re("pie", e);
    w.debug(a), fe(a, W);
  }, "parse")
}, he = /* @__PURE__ */ s((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles"), ve = he, Se = /* @__PURE__ */ s((e) => {
  const a = [...e.values()].reduce((r, o) => r + o, 0), $ = [...e.entries()].map(([r, o]) => ({ label: r, value: o })).filter((r) => r.value / a * 100 >= 1).sort((r, o) => o.value - r.value);
  return se().value((r) => r.value)($);
}, "createPieArcs"), xe = /* @__PURE__ */ s((e, a, $, y) => {
  w.debug(`rendering pie chart
` + e);
  const r = y.db, o = J(), T = K(r.getConfig(), o.pie), A = 40, l = 18, p = 4, c = 450, u = c, f = Q(a), n = f.append("g");
  n.attr("transform", "translate(" + u / 2 + "," + c / 2 + ")");
  const { themeVariables: i } = o;
  let [b] = X(i.pieOuterStrokeWidth);
  b ?? (b = 2);
  const _ = T.textPosition, d = Math.min(u, c) / 2 - A, M = G().innerRadius(0).outerRadius(d), O = G().innerRadius(d * _).outerRadius(d * _);
  n.append("circle").attr("cx", 0).attr("cy", 0).attr("r", d + b / 2).attr("class", "pieOuterCircle");
  const m = r.getSections(), P = Se(m), R = [
    i.pie1,
    i.pie2,
    i.pie3,
    i.pie4,
    i.pie5,
    i.pie6,
    i.pie7,
    i.pie8,
    i.pie9,
    i.pie10,
    i.pie11,
    i.pie12
  ];
  let h = 0;
  m.forEach((t) => {
    h += t;
  });
  const E = P.filter((t) => (t.data.value / h * 100).toFixed(0) !== "0"), v = ie(R);
  n.selectAll("mySlices").data(E).enter().append("path").attr("d", M).attr("fill", (t) => v(t.data.label)).attr("class", "pieCircle"), n.selectAll("mySlices").data(E).enter().append("text").text((t) => (t.data.value / h * 100).toFixed(0) + "%").attr("transform", (t) => "translate(" + O.centroid(t) + ")").style("text-anchor", "middle").attr("class", "slice"), n.append("text").text(r.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText");
  const k = [...m.entries()].map(([t, x]) => ({
    label: t,
    value: x
  })), S = n.selectAll(".legend").data(k).enter().append("g").attr("class", "legend").attr("transform", (t, x) => {
    const z = l + p, L = z * k.length / 2, N = 12 * l, B = x * z - L;
    return "translate(" + N + "," + B + ")";
  });
  S.append("rect").attr("width", l).attr("height", l).style("fill", (t) => v(t.label)).style("stroke", (t) => v(t.label)), S.append("text").attr("x", l + p).attr("y", l - p).text((t) => r.getShowData() ? `${t.label} [${t.value}]` : t.label);
  const I = Math.max(
    ...S.selectAll("text").nodes().map((t) => t?.getBoundingClientRect().width ?? 0)
  ), F = u + A + l + p + I;
  f.attr("viewBox", `0 0 ${F} ${c}`), Y(f, c, F, T.useMaxWidth);
}, "draw"), we = { draw: xe }, _e = {
  parser: me,
  db: W,
  renderer: we,
  styles: ve
};
export {
  _e as diagram
};
