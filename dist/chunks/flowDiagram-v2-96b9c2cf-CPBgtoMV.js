import { f as o, p as t } from "./flowDb-956e92f1-C6BpCiHl.js";
import { f as a, a as e } from "./styles-c10674c1-BJsAmRC-.js";
import { t as s } from "./index-B-uOydxF.js";
import "./isEmpty-BO6FiAO3.js";
import "./graph-CnW6WZz6.js";
import "./layout-NVkx3S15.js";
import "./percentages-BXMCSKIN-BkyJl3sn.js";
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
