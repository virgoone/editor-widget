import { G as xe, y as we } from "./NV4XNBIS-DGeSrbpm.js";
import { g as Ae, E as ve, o as Ie, s as $e } from "./HWDLEDTA-Ctstf22F.js";
import { f as Fe, x as ot } from "./RZSVICHU-DoNHkG46.js";
var ke = 34, Te = 24, We = 8, He = 2e4, oe = 1e4, Qt = 2e6, he = 4, Ge = 3, fe = 8, jt = 20, ie = 20, se = 14, _e = 3;
function Se(n, y, A, Y, N = Te) {
  let G = n.length;
  if (G === 0) return { width: 0, height: 0 };
  let k = A === "LR" || A === "RL", dt = A === "BT" || A === "RL", X = [];
  for (let s = G - 1; s >= 0; s--) n[s].parent < 0 && n[s].isGroup && X.push(s);
  let C = Math.max(1, X.length), lt = new Int32Array(G).fill(-1);
  X.forEach((s, T) => lt[s] = T);
  let vt = new Uint8Array(G);
  for (let s = 0; s < G; s++) n[s].parent >= 0 && (vt[n[s].parent] = 1);
  let bt = new Float64Array(C).fill(N), Ft = N, de = (s) => {
    let T = s, c = N;
    for (let j = 0; n[T].parent >= 0 && j < oe; j++) T = n[T].parent, lt[T] < 0 && (c += Math.max(n[T].padX, n[T].padTop, n[T].padBottom));
    let _ = Math.max(0, lt[T]);
    return c > bt[_] && (bt[_] = c), c > Ft && (Ft = c), _;
  }, kt = new Int32Array(G).fill(-1), O = [];
  for (let s = 0; s < G; s++) lt[s] >= 0 || (!n[s].isGroup || !vt[s]) && (kt[s] = O.length, O.push(s));
  let be = (s) => k ? s.w : s.h, me = (s) => k ? s.h : s.w, mt = O.map((s) => Ae(me(n[s]), be(n[s]))), rt = [], St = [], Mt = 1;
  {
    let s = /* @__PURE__ */ new Set();
    for (let T = 0; T < y.length; T++) {
      let c = y[T], _ = kt[c.src], j = kt[c.dst];
      if (_ < 0 || j < 0 || _ === j) continue;
      let q = Math.min(_, j) * O.length + Math.max(_, j);
      (c.labelW > 0 || s.has(q)) && (Mt = 2), s.add(q), rt.push(ve(_, j, c.minlen, k ? c.labelH : c.labelW, k ? c.labelW : c.labelH)), St.push(T);
    }
  }
  Ie(mt, rt), $e(mt, rt, Mt);
  let Q = rt.length, Me = Int32Array.from(O, de), Ut = (s, T) => {
    let c = bt.map((t, e) => T[e] ? Math.max(t, ie) : t), _ = new Uint8Array(C), j = 0, q = new Int32Array(Q);
    for (let t = 0; t < Q; t++) q[t] = Math.abs(mt[rt[t].head].rank - mt[rt[t].tail].rank), s[t] || (j += q[t] - 1);
    let qt = j > He, E = O.length + (qt ? 0 : j), x = new Int32Array(E), v = new Int32Array(E), U = new Float64Array(E), tt = new Float64Array(E), Lt = new Uint8Array(E), B = 0;
    for (let t = 0; t < O.length; t++) x[t] = mt[t].rank, v[t] = Me[t], U[t] = mt[t].w, tt[t] = mt[t].h, x[t] > B && (B = x[t]);
    let Yt = new Int32Array(Q).fill(-1), zt = new Int32Array(Q).fill(-1), V = [];
    {
      let t = O.length;
      for (let e = 0; e < Q; e++) {
        let l = rt[e], o = l.reversed ? l.head : l.tail, p = l.reversed ? l.tail : l.head;
        if (qt || q[e] < 2 || s[e]) {
          V.push(o, p);
          continue;
        }
        let u = x[o], i = x[p], r = -1;
        l.labelW > 0 && (r = u + (i - u >> 1), Mt === 2 && (r & 1) === 0 && r--), Yt[e] = t;
        let d = o;
        for (let a = u + 1; a < i; a++) {
          let m = t++;
          x[m] = a, v[m] = v[o] + Math.round((v[p] - v[o]) * (a - u) / (i - u)), Lt[m] = 1, a === r && (U[m] = l.labelW, tt[m] = l.labelH, zt[e] = m), V.push(d, m), d = m;
        }
        V.push(d, p);
      }
    }
    let yt = new Int32Array(E + 1), ct = new Int32Array(E + 1);
    for (let t = 0; t < V.length; t += 2) ct[V[t] + 1]++, yt[V[t + 1] + 1]++;
    for (let t = 0; t < E; t++) yt[t + 1] += yt[t], ct[t + 1] += ct[t];
    let Et = new Int32Array(V.length / 2), Rt = new Int32Array(V.length / 2);
    {
      let t = yt.slice(0, E), e = ct.slice(0, E);
      for (let l = 0; l < V.length; l += 2) Rt[e[V[l]]++] = V[l + 1], Et[t[V[l + 1]]++] = V[l];
    }
    let it = [];
    for (let t = 0; t <= B; t++) it.push([]);
    for (let t = 0; t < E; t++) it[x[t]].push(t);
    let Xt = new Float64Array(E), Wt = new Float64Array(E), Pt = (t) => {
      t.sort((e, l) => v[e] - v[l] || Wt[e] - Wt[l] || e - l);
      for (let e = 0; e < t.length; e++) Xt[t[e]] = e;
    };
    for (let t of it) {
      for (let e = 0; e < t.length; e++) Wt[t[e]] = e;
      Pt(t);
    }
    for (let t = 0; t < We && B > 0; t++) {
      let e = (t & 1) === 0;
      for (let l = 1; l <= B; l++) {
        let o = it[e ? l : B - l], p = e ? yt : ct, u = e ? Et : Rt;
        for (let i of o) {
          let r = 0, d = p[i + 1] - p[i];
          for (let a = p[i]; a < p[i + 1]; a++) r += Xt[u[a]];
          Wt[i] = d > 0 ? r / d : Xt[i];
        }
        Pt(o);
      }
    }
    let Ht = (t, e) => Lt[t] || Lt[e] ? Y.edgeSep : Y.nodeSep, Ct = (t, e) => {
      let l = 0;
      for (; l < t.length; ) {
        let o = l;
        for (; o + 1 < t.length && v[t[o + 1]] === v[t[l]]; ) o++;
        e(t, l, o), l = o + 1;
      }
    }, Zt = (t, e, l) => {
      let o = U[t[e]];
      for (let p = e; p < l; p++) o += Ht(t[p], t[p + 1]) + U[t[p + 1]];
      return o;
    }, Gt = new Float64Array(C), It = X.length > 0 ? ke : 0;
    for (let t = 0; t < X.length; t++) {
      let e = n[X[t]];
      Gt[t] = Math.max(0, e.minW - 2 * c[t]), e.padTop > It && (It = e.padTop);
    }
    for (let t of it) Ct(t, (e, l, o) => {
      let p = Zt(t, l, o);
      p > Gt[v[t[l]]] && (Gt[v[t[l]]] = p);
    });
    let K = new Float64Array(C + 1);
    for (let t = 0; t < C; t++) K[t + 1] = K[t] + Gt[t] + 2 * c[t];
    let I = new Float64Array(E), Jt = new Float64Array(E), ge = (t, e, l) => {
      let o = v[t[e]], p = (K[o] + c[o] + (K[o + 1] - c[o]) - Zt(t, e, l)) / 2;
      for (let u = e; u <= l; u++) I[t[u]] = p + U[t[u]] / 2, u < l && (p += U[t[u]] + Ht(t[u], t[u + 1]));
    }, ye = (t, e, l) => {
      let o = v[t[e]], p = K[o] + c[o];
      for (let i = e; i <= l; i++) {
        let r = t[i];
        I[r] = Math.max(Jt[r], p + U[r] / 2), i < l && (p = I[r] + U[r] / 2 + Ht(r, t[i + 1]));
      }
      let u = K[o + 1] - c[o];
      for (let i = l; i >= e; i--) {
        let r = t[i];
        I[r] = Math.min(I[r], u - U[r] / 2), i > e && (u = I[r] - U[r] / 2 - Ht(t[i - 1], r));
      }
    };
    for (let t of it) Ct(t, ge);
    for (let t = 0; t < 4 && B > 0; t++) {
      let e = (t & 1) === 0;
      for (let l = 1; l <= B; l++) {
        let o = it[e ? l : B - l], p = e ? yt : ct, u = e ? Et : Rt;
        for (let i of o) {
          let r = 0, d = 0;
          for (let a = p[i]; a < p[i + 1]; a++) v[u[a]] === v[i] && (r += I[u[a]], d++);
          Jt[i] = d > 0 ? r / d : I[i];
        }
        Ct(o, ye);
      }
    }
    let ht = new Float64Array(B + 1), ft = new Float64Array(B + 1), xt = new Float64Array(B + 1).fill(Y.rankSep / Mt);
    if (s.some((t) => t === 1)) {
      let t = Y.rankSep / Mt;
      xt.fill(t / _e);
      for (let e = 0; e < Q; e++) {
        let l = rt[e], o = l.reversed ? l.head : l.tail, p = l.reversed ? l.tail : l.head;
        if (s[e]) {
          if (l.labelH <= 0 || q[e] > Mt) continue;
          let i = Math.min(t, (l.labelH + 2 * jt - Math.min(tt[o], tt[p]) / 2) / q[e]);
          for (let r = x[o]; r < x[p]; r++) i > xt[r] && (xt[r] = i);
          continue;
        }
        let u = Yt[e];
        if (u < 0 || q[e] <= Mt * l.minlen) {
          for (let i = x[o]; i < x[p]; i++) xt[i] = t;
          continue;
        }
        for (let i = u - 1; i < u + q[e] - 1; i++) {
          let r = i < u ? o : i, d = i + 1 < u + q[e] - 1 ? i + 1 : p;
          (v[r] !== v[d] || Math.abs(I[r] - I[d]) >= 0.5) && (xt[x[r]] = t);
        }
      }
    }
    let _t = It + Ft;
    for (let t = 0; t <= B; t++) {
      let e = 0;
      for (let l of it[t]) tt[l] > e && (e = tt[l]);
      ht[t] = _t, ft[t] = _t + e, _t += e + (t === B ? 0 : xt[t]);
    }
    let st = _t + Ft, Bt = K[C], Dt = (t) => dt ? It + st - t : t, z = (t, e) => k ? Dt(e) : t, P = (t, e) => k ? t : Dt(e), Nt = k ? 1 : 0;
    for (let t = 0; t < O.length; t++) {
      let e = n[O[t]], l = (ht[x[t]] + ft[x[t]]) / 2;
      e.x = z(I[t], l), e.y = P(I[t], l);
    }
    for (let t = 0; t < X.length; t++) {
      let e = n[X[t]], l = (K[t] + K[t + 1]) / 2, o = K[t + 1] - K[t];
      e.x = k ? st / 2 : l, e.y = k ? l : st / 2, e.w = k ? st : o, e.h = k ? o : st, e.padTop = It;
    }
    let Ot = new Int32Array(G), Vt = [];
    for (let t = 0; t < G; t++) {
      if (!n[t].isGroup || lt[t] >= 0 || kt[t] >= 0) continue;
      let e = 0;
      for (let l = n[t].parent; l >= 0 && e < oe; l = n[l].parent) e++;
      Ot[t] = e, Vt.push(t);
    }
    Vt.sort((t, e) => Ot[e] - Ot[t] || t - e);
    let H = new Float64Array(G * 4);
    for (let t = 0; t < G; t++) H[t * 4] = 1 / 0, H[t * 4 + 1] = 1 / 0, H[t * 4 + 2] = -1 / 0, H[t * 4 + 3] = -1 / 0;
    let te = (t, e) => {
      e.x - e.w / 2 < H[t * 4] && (H[t * 4] = e.x - e.w / 2), e.y - e.h / 2 < H[t * 4 + 1] && (H[t * 4 + 1] = e.y - e.h / 2), e.x + e.w / 2 > H[t * 4 + 2] && (H[t * 4 + 2] = e.x + e.w / 2), e.y + e.h / 2 > H[t * 4 + 3] && (H[t * 4 + 3] = e.y + e.h / 2);
    };
    for (let t of O) n[t].parent >= 0 && lt[n[t].parent] < 0 && te(n[t].parent, n[t]);
    for (let t of Vt) {
      let e = n[t];
      if (H[t * 4] === 1 / 0) continue;
      let l = Math.max(H[t * 4 + 2] - H[t * 4] + 2 * e.padX, e.minW);
      e.x = (H[t * 4] + H[t * 4 + 2]) / 2, e.w = l, e.y = (H[t * 4 + 1] - e.padTop + H[t * 4 + 3] + e.padBottom) / 2, e.h = H[t * 4 + 3] - H[t * 4 + 1] + e.padTop + e.padBottom, e.parent >= 0 && lt[e.parent] < 0 && te(e.parent, e);
    }
    for (let t of y) t.route = [];
    for (let t = 0; t < Q; t++) {
      let e = rt[t], l = y[St[t]], o = e.reversed ? e.head : e.tail, p = e.reversed ? e.tail : e.head, u = [I[o], ft[x[o]] - (ft[x[o]] - ht[x[o]] - tt[o]) / 2], i = Yt[t];
      if (i >= 0) for (let a = i; a < i + q[t] - 1; a++) u.push(I[a], ht[x[a]]), ft[x[a]] > ht[x[a]] && u.push(I[a], ft[x[a]]);
      u.push(I[p], ht[x[p]] + (ft[x[p]] - ht[x[p]] - tt[p]) / 2);
      let r = [];
      for (let a = 0; a < u.length; a += 2) r.push(z(u[a], u[a + 1]), P(u[a], u[a + 1]), Nt);
      if (e.reversed) for (let a = 0, m = r.length - 3; a < m; a += 3, m -= 3) for (let g = 0; g < 2; g++) {
        let M = r[a + g];
        r[a + g] = r[m + g], r[m + g] = M;
      }
      l.route = r;
      let d = zt[t];
      if (d >= 0) {
        let a = (ht[x[d]] + ft[x[d]]) / 2;
        l.labelX = z(I[d], a), l.labelY = P(I[d], a);
      } else l.labelX = (r[0] + r[r.length - 3]) / 2, l.labelY = (r[1] + r[r.length - 2]) / 2;
    }
    for (let t of y) {
      if (t.route.length > 0 || t.src === t.dst) continue;
      let e = n[t.src], l = n[t.dst], [o, p] = pe(e, l), [u, i] = pe(l, e), r = Math.abs(u - o) > Math.abs(i - p) ? 1 : 0;
      t.route = [o, p, r, u, i, r], t.labelX = (o + u) / 2, t.labelY = (p + i) / 2;
    }
    let ee = new Uint8Array(Q), ce = y.reduce((t, e) => t + e.route.length / 3, 0), Kt = Q * (O.length + y.length + ce);
    if (Kt <= Qt) {
      let t = (r) => (ht[x[r]] + ft[x[r]]) / 2, e = y.map((r) => [k ? r.labelY : r.labelX, Dt(k ? r.labelX : r.labelY)]), l = (r, d, a, m, g, M, W, b) => a > g - W / 2 && r < g + W / 2 && m > M - b / 2 && d < M + b / 2, o = (r, d, a, m, g, M, W) => {
        for (let b = 0; b < O.length; b++) if (b !== g && b !== M && l(r, d, a, m, I[b], t(b), U[b] + 8, tt[b] + 8)) return !1;
        for (let b = 0; b < y.length; b++) {
          let w = y[b];
          if (b !== W && w.labelW > 0 && w.src !== w.dst && l(r, d, a, m, e[b][0], e[b][1], k ? w.labelH : w.labelW, k ? w.labelW : w.labelH)) return !1;
        }
        return !0;
      }, p = (r, d, a, m, g) => {
        let M = 0;
        for (let W = 0; W < y.length; W++) {
          if (W === g) continue;
          let b = y[W].route;
          for (let w = 3; w < b.length; w += 3) if (Math.max(b[w - 3], b[w]) > r && Math.min(b[w - 3], b[w]) < a && Math.max(b[w - 2], b[w + 1]) > d && Math.min(b[w - 2], b[w + 1]) < m) {
            M++;
            break;
          }
        }
        return M;
      }, u = (r, d, a) => {
        let m = 0;
        for (let g = 0; g < y.length; g++) {
          let M = y[g].route;
          if (g === a || M.length === 0) continue;
          let W = M.length - 3;
          (Math.abs(M[0] - r) < 1 && Math.abs(M[1] - d) < 1 || Math.abs(M[W] - r) < 1 && Math.abs(M[W + 1] - d) < 1) && m++;
        }
        return m;
      }, i = (r, d, a, m, g) => {
        let M = Math.abs(a - r) < 0.5, W = M ? Math.min(d, m) : Math.min(r, a), b = M ? Math.max(d, m) : Math.max(r, a), w = M ? r : d;
        for (let et = 0; et < y.length; et++) {
          let wt = y[et];
          if (et === g || wt.src === y[g].src || wt.dst === y[g].dst) continue;
          let pt = wt.route;
          for (let nt = 3; nt < pt.length; nt += 3) {
            let $t = pt[nt - 3 + (M ? 0 : 1)], h = pt[nt + (M ? 0 : 1)];
            if (Math.abs($t - w) >= he || Math.abs(h - w) >= he) continue;
            let Z = pt[nt - 3 + (M ? 1 : 0)], D = pt[nt + (M ? 1 : 0)];
            if (Math.min(b, Math.max(Z, D)) - Math.max(W, Math.min(Z, D)) > 1) return !0;
          }
        }
        return !1;
      };
      for (let r = 0; r < Q; r++) {
        let d = rt[r], a = St[r], m = y[a], g = d.tail, M = d.head;
        if (v[g] === v[M] || Math.abs(I[M] - I[g]) < 1) continue;
        let W = I[g], b = I[M], w = t(g), et = t(M), wt = Math.sign(b - W), pt = Math.sign(et - w), nt = (h, Z) => {
          for (let f = 2; f < h.length; f += 2) if (!o(Math.min(h[f - 2], h[f]) - Z, Math.min(h[f - 1], h[f + 1]) - Z, Math.max(h[f - 2], h[f]) + Z, Math.max(h[f - 1], h[f + 1]) + Z, g, M, a) || i(z(h[f - 2], h[f - 1]), P(h[f - 2], h[f - 1]), z(h[f], h[f + 1]), P(h[f], h[f + 1]), a)) return !1;
          let D = 0, $ = 0, At = -1;
          if (m.labelW > 0) {
            let f = d.labelW, R = d.labelH;
            for (let S = 2; S < h.length; S += 2) {
              let L = (h[S - 2] + h[S]) / 2, J = (h[S - 1] + h[S + 1]) / 2, ut = Math.abs(h[S] - h[S - 2]), le = Math.abs(h[S + 1] - h[S - 1]), re = ut + le;
              if (re <= At || (ut > 0 ? ut < f + 8 : le < R + 8) || L - f / 2 < 0 || L + f / 2 > Bt || J - R / 2 < 0 || J + R / 2 > st || !o(L - f / 2, J - R / 2, L + f / 2, J + R / 2, -1, -1, a)) continue;
              let ae = z(L, J), ne = P(L, J);
              p(ae - m.labelW / 2, ne - m.labelH / 2, ae + m.labelW / 2, ne + m.labelH / 2, a) > 0 || (D = L, $ = J, At = re);
            }
            if (At < 0) return !1;
          }
          let F = [h[0], h[1]];
          for (let f = 2; f < h.length; f += 2) {
            let R = h[f] - h[f - 2], S = h[f + 1] - h[f - 1], L = Math.abs(R) + Math.abs(S), J = f > 2 ? jt : 0, ut = f + 2 < h.length ? jt : 0;
            L > J + ut + 1 && (J && F.push(h[f - 2] + R / L * J, h[f - 1] + S / L * J), ut && F.push(h[f] - R / L * ut, h[f + 1] - S / L * ut)), F.push(h[f], h[f + 1]);
          }
          m.route = [];
          for (let f = 0; f < F.length; f += 2) {
            let R = f === 0 ? F[0] !== F[2] : F[f] !== F[f - 2];
            m.route.push(z(F[f], F[f + 1]), P(F[f], F[f + 1]), R ? 1 - Nt : Nt);
          }
          return m.labelW > 0 && (m.labelX = z(D, $), m.labelY = P(D, $), e[a] = [D, $]), ee[r] = 1, !0;
        };
        if (nt([W + wt * U[g] / 2, w, b, w, b, et - pt * tt[M] / 2], 2) || nt([W, w + pt * tt[g] / 2, W, et, b - wt * U[M] / 2, et], 2) || Kt > Qt / fe) continue;
        let $t = [];
        for (let h of v[g] < v[M] ? [v[M], v[g]] : [v[g], v[M]]) {
          let Z = Math.max(c[h] - se, Math.min(c[h] / 2, ie - se));
          for (let D of [K[h] + Z, K[h + 1] - Z]) {
            if (Math.abs(D - W) < U[g] / 2 + 4 || Math.abs(D - b) < U[M] / 2 + 4) continue;
            let $ = [W + Math.sign(D - W) * U[g] / 2, w, D, w, D, et, b + Math.sign(D - b) * U[M] / 2, et], At = (u(z($[0], $[1]), P($[0], $[1]), a) + u(z($[6], $[7]), P($[6], $[7]), a)) * 1e6;
            for (let F = 2; F < $.length; F += 2) {
              let f = z($[F - 2], $[F - 1]), R = P($[F - 2], $[F - 1]), S = z($[F], $[F + 1]), L = P($[F], $[F + 1]);
              At += p(Math.min(f, S), Math.min(R, L), Math.max(f, S), Math.max(R, L), a) * 1e6 + Math.abs(S - f) + Math.abs(L - R);
            }
            $t.push({ pts: $, cost: At, lane: h });
          }
        }
        $t.sort((h, Z) => h.cost - Z.cost);
        for (let h of $t) if (nt(h.pts, 1)) {
          _[h.lane] = 1;
          break;
        }
      }
    }
    return { width: k ? st : Bt, height: k ? Bt : st, routed: ee, margins: _, work: Kt };
  }, gt = new Uint8Array(Q), Tt = new Uint8Array(C), at = Ut(gt, Tt);
  for (let s = 0; s < Ge && at.work <= Qt / fe; s++) {
    let T = s === 0 ? at.routed : gt.map((c, _) => c & at.routed[_]);
    if (T.every((c, _) => c === gt[_]) && at.margins.every((c, _) => c === Tt[_])) break;
    gt = T, Tt = at.margins, at = Ut(gt, Tt);
  }
  return gt.some((s, T) => s && !at.routed[T]) && (at = Ut(new Uint8Array(Q), new Uint8Array(C))), { width: at.width, height: at.height };
}
function pe(n, y) {
  let A = y.x - n.x, Y = y.y - n.y, N = Math.max(n.w / 2, 0.5), G = Math.max(n.h / 2, 0.5);
  if (Math.abs(A) < N && Math.abs(Y) < G) {
    let dt = N - Math.abs(A), X = G - Math.abs(Y);
    return dt < X ? [n.x + (A < 0 ? -N : N), y.y] : [y.x, n.y + (Y < 0 ? -G : G)];
  }
  let k = Math.min(A !== 0 ? N / Math.abs(A) : 1 / 0, Y !== 0 ? G / Math.abs(Y) : 1 / 0);
  return [n.x + A * k, n.y + Y * k];
}
var ue = "__swimlane_default__";
function Ue(n) {
  let y = !1;
  for (let A of n.nodes) A.isGroup ? A.dir = void 0 : A.parentId === void 0 && (y = !0);
  if (y) {
    for (let A of n.nodes) !A.isGroup && A.parentId === void 0 && (A.parentId = ue);
    n.nodes.push({ id: ue, label: void 0, labelType: "text", shape: "rect", isGroup: !0, parentId: void 0, cssStyles: [], cssCompiledStyles: [], cssClasses: "", dir: void 0 });
  }
}
function Le(n, y, A, Y, N, G, k) {
  let dt = n.x - n.w / 2, X = n.y - n.h / 2, C = G === "LR" || G === "RL", lt = C ? dt + n.padTop / 2 : n.x, vt = C ? n.y : X + n.padTop / 2, bt = Fe(y, lt, vt, ` class="pele-cluster-label" fill="var(--_m)"${A.text}`, k);
  return `<g class="pele-cluster pele-lane${Y}" data-id="${N}"><rect x="${ot(dt)}" y="${ot(X)}" width="${ot(n.w)}" height="${ot(n.h)}" fill="none" stroke="var(--_b)"/><rect x="${ot(dt)}" y="${ot(X)}" width="${ot(C ? n.padTop : n.w)}" height="${ot(C ? n.h : n.padTop)}" fill="var(--_a)" stroke="var(--_b)"${A.shape}/>` + (C && bt ? `<g transform="rotate(-90 ${ot(lt)} ${ot(vt)})">${bt}</g>` : bt) + "</g>";
}
var Ye = { type: "swimlane", prepare: Ue, layout: (n, y, A, Y, N) => Se(n, y, A, Y, N ? 12 : void 0), drawGroup: Le }, Ce = { type: "swimlane", parse: xe.parse, render: (n, y, A) => we(n, y, A, Ye) };
export {
  Ce as swimlane
};
