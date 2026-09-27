import { f as o, p as t } from "./flowDb-956e92f1-HuEkpwlE.js";
import { f as a, a as e } from "./styles-c10674c1-C2iXZvX4.js";
import { t as s } from "./index-Br2V5_Xn.js";
import "./isEmpty-BO6FiAO3.js";
import "./graph-CnW6WZz6.js";
import "./layout-NVkx3S15.js";
import "./percentages-BXMCSKIN-Ba7xEDnP.js";
const h = {
  parser: t,
  db: o,
  renderer: e,
  styles: a,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), e.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  h as diagram
};
