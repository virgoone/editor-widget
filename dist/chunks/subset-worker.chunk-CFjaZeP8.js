import { Commands as e, subsetToBinary as t } from "./subset-shared.chunk-B5cCwdnW.js";
import "./percentages-BXMCSKIN-BkyJl3sn.js";
var m = import.meta.url ? new URL(import.meta.url) : void 0;
typeof window > "u" && typeof self < "u" && (self.onmessage = async (a) => {
  if (a.data.command === e.Subset) {
    let s = await t(a.data.arrayBuffer, a.data.codePoints);
    self.postMessage(s, { transfer: [s] });
  }
});
export {
  m as WorkerUrl
};
