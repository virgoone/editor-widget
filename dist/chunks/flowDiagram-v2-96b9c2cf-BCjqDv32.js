import { f as o, p as a } from "./flowDb-956e92f1-CXyaiu2P.js";
import { f as t, a as e } from "./styles-c10674c1-D3oT0_B1.js";
import { x as s } from "./index-CIJqdh0V.js";
import "./graph-DwPYkr30.js";
import "./layout-BfTbwG6Q.js";
import "./percentages-BXMCSKIN-w8KgaW-L.js";
const b = {
  parser: a,
  db: o,
  renderer: e,
  styles: t,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), e.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  b as diagram
};
