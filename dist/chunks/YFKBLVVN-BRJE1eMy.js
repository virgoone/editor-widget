var Vt = Object.defineProperty;
var jt = (e, t, a) => t in e ? Vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var M = (e, t, a) => jt(e, typeof t != "symbol" ? t + "" : t, a);
import { N as qt, A as Jt } from "./JZWSX6AR-CTa5XBC9.js";
import { H as Ut, x as J, e as ge, L as Bt } from "./lazy-CehDEl4q.js";
import { l as Rt } from "./DKTLEL5E-BCFlW8pF.js";
import { _ as Qe, f as re, $ as ct, b as Kt, y as ye, x as u, u as ea, a as ta, g as aa } from "./RZSVICHU-DoNHkG46.js";
var R = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Q = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function ie(e) {
  return !Number.isNaN(e.getTime());
}
function S(e, t) {
  let a = String(e);
  return a.length >= t ? a : "0".repeat(t - a.length) + a;
}
function vt(e) {
  let t = ["th", "st", "nd", "rd"], a = e % 100;
  return e + (t[(a - 20) % 10] || t[a] || t[0]);
}
function Ve(e) {
  let t = -Math.round(e.getTimezoneOffset() / 15) * 15;
  return t === 0 ? 0 : t;
}
function ut(e) {
  let t = Ve(e), a = Math.abs(t);
  return (t >= 0 ? "+" : "-") + S(Math.floor(a / 60), 2) + ":" + S(a % 60, 2);
}
function $t(e) {
  return e.getDay() || 7;
}
function Z(e, t) {
  let a = new Date(e);
  return a.setDate(a.getDate() + t), a;
}
function ra(e) {
  let t = new Date(e.getFullYear(), e.getMonth() + 1, 0);
  return t.setHours(23, 59, 59, 999), t.getDate();
}
function ht(e, t) {
  let a = new Date(e);
  return a.setDate(1), t(a), a.setDate(Math.min(e.getDate(), ra(a))), a;
}
function Tt(e, t, a) {
  switch (a) {
    case "M":
      return ht(e, (r) => r.setMonth(e.getMonth() + t));
    case "y":
      return ht(e, (r) => r.setFullYear(e.getFullYear() + t));
    case "d":
      return Z(e, Math.round(t));
    case "w":
      return Z(e, Math.round(7 * t));
    case "h":
      return new Date(e.getTime() + t * 36e5);
    case "m":
      return new Date(e.getTime() + t * 6e4);
    case "s":
      return new Date(e.getTime() + t * 1e3);
    default:
      return new Date(e.getTime() + t);
  }
}
function St(e) {
  return Z(e, 4 - $t(e));
}
function ft(e) {
  let t = St(e), a = new Date(t.getFullYear(), 0, 1), r = $t(a), n = Z(a, 4 - r + (r > 4 ? 7 : 0)), i = (Ve(n) - Ve(t)) * 6e4, s = (t.getTime() - n.getTime() - i) / 6048e5;
  return (s < 0 ? Math.ceil(s) || 0 : Math.floor(s)) + 1;
}
var sa = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, na = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ia = "YYYY-MM-DDTHH:mm:ssZ";
function Yt(e, t) {
  if (!ie(e)) return "Invalid Date";
  let a = t || ia;
  if (a === "YYYY-MM-DD") return _t(e);
  let r = !1, n = a.replace(sa, (s) => {
    switch (s) {
      case "Q":
        return String(Math.ceil((e.getMonth() + 1) / 3));
      case "Do":
        return "[" + vt(e.getDate()) + "]";
      case "GGGG":
        return String(St(e).getFullYear());
      case "W":
        return String(ft(e));
      case "WW":
        return S(ft(e), 2);
      case "k":
        return String(e.getHours() || 24);
      case "kk":
        return S(e.getHours() || 24, 2);
      case "X":
        return String(Math.floor(e.getTime() / 1e3));
      case "x":
        return String(e.getTime());
      case "gggg":
      case "wo":
      case "w":
      case "ww":
      case "z":
      case "zzz":
        return r = !0, s;
      default:
        return s;
    }
  });
  if (r) return;
  let i = e.getHours();
  return n.replace(na, (s, l) => {
    if (l) return l;
    switch (s) {
      case "YY":
        return String(e.getFullYear()).slice(-2);
      case "YYYY":
        return S(e.getFullYear(), 4);
      case "M":
        return String(e.getMonth() + 1);
      case "MM":
        return S(e.getMonth() + 1, 2);
      case "MMM":
        return R[e.getMonth()].slice(0, 3);
      case "MMMM":
        return R[e.getMonth()];
      case "D":
        return String(e.getDate());
      case "DD":
        return S(e.getDate(), 2);
      case "d":
        return String(e.getDay());
      case "dd":
        return Q[e.getDay()].slice(0, 2);
      case "ddd":
        return Q[e.getDay()].slice(0, 3);
      case "dddd":
        return Q[e.getDay()];
      case "H":
        return String(i);
      case "HH":
        return S(i, 2);
      case "h":
        return String(i % 12 || 12);
      case "hh":
        return S(i % 12 || 12, 2);
      case "a":
        return i < 12 ? "am" : "pm";
      case "A":
        return i < 12 ? "AM" : "PM";
      case "m":
        return String(e.getMinutes());
      case "mm":
        return S(e.getMinutes(), 2);
      case "s":
        return String(e.getSeconds());
      case "ss":
        return S(e.getSeconds(), 2);
      case "SSS":
        return S(e.getMilliseconds(), 3);
      case "Z":
        return ut(e);
      default:
        return ut(e).replace(":", "");
    }
  });
}
function _t(e) {
  let t = e.getFullYear(), a = e.getMonth() + 1, r = e.getDate();
  return (t >= 1e3 && t <= 9999 ? t : S(t, 4)) + (a < 10 ? "-0" : "-") + a + (r < 10 ? "-0" : "-") + r;
}
var la = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, oa = /\[[^\]]+]/g, mt = /\d/, se = /\d\d/, da = /\d{3}/, ca = /\d{4}/, F = /\d\d?/, ua = /[+-]?\d+/, gt = /[+-]\d\d:?(\d\d)?|Z/, ne = /\d*[^-_:/,()\s\d]+/;
function b(e) {
  return (t, a) => (t[e] = +a, !0);
}
var yt = (e, t) => {
  if (t === "Z") return e.offset = 0, !0;
  let a = t.match(/([+-]|\d\d)/g), r = +a[1] * 60 + (+a[2] || 0);
  return e.offset = r === 0 ? 0 : a[0] === "+" ? -r : r, !0;
};
function kt(e) {
  return (t, a) => {
    let r = e.indexOf(a) + 1;
    return r < 1 ? !1 : (t.month = r % 12 || r, !0);
  };
}
var ha = /* @__PURE__ */ new Map([["A", { re: ne, read: (e, t) => (e.afternoon = t === "PM", !0) }], ["a", { re: ne, read: (e, t) => (e.afternoon = t === "pm", !0) }], ["Q", { re: mt, read: (e, t) => (e.month = (+t - 1) * 3 + 1, !0) }], ["S", { re: mt, read: (e, t) => (e.milliseconds = +t * 100, !0) }], ["SS", { re: se, read: (e, t) => (e.milliseconds = +t * 10, !0) }], ["SSS", { re: da, read: (e, t) => (e.milliseconds = +t, !0) }], ["s", { re: F, read: b("seconds") }], ["ss", { re: F, read: b("seconds") }], ["m", { re: F, read: b("minutes") }], ["mm", { re: F, read: b("minutes") }], ["H", { re: F, read: b("hours") }], ["h", { re: F, read: b("hours") }], ["HH", { re: F, read: b("hours") }], ["hh", { re: F, read: b("hours") }], ["D", { re: F, read: b("day") }], ["DD", { re: se, read: b("day") }], ["Do", { re: ne, read: (e, t) => {
  let a = t.match(/\d+/);
  if (!a) return !1;
  e.day = +a[0], e.dayGiven = !0;
  for (let r = 1; r <= 31; r++) vt(r) === t && (e.day = r);
  return !0;
} }], ["w", { re: F, read: b("week") }], ["ww", { re: se, read: b("week") }], ["M", { re: F, read: b("month") }], ["MM", { re: se, read: b("month") }], ["MMM", { re: ne, read: kt(R.map((e) => e.slice(0, 3))) }], ["MMMM", { re: ne, read: kt(R) }], ["Y", { re: ua, read: b("year") }], ["YY", { re: se, read: (e, t) => (e.year = +t + (+t > 68 ? 1900 : 2e3), !0) }], ["YYYY", { re: ca, read: b("year") }], ["Z", { re: gt, read: yt }], ["ZZ", { re: gt, read: yt }]]), wt, ke = null;
function fa(e) {
  if (e === wt) return ke;
  if (wt = e, ke = null, /[Ll]/.test(e.replace(oa, ""))) return null;
  let t = e.match(la);
  return t ? (ke = t.map((a) => ha.get(a) ?? a.replace(/^\[|\]$/g, "")), ke) : null;
}
function ma(e, t, a) {
  if (t === "x" || t === "X") return new Date((t === "X" ? 1e3 : 1) * Number(e));
  let r = fa(t);
  if (!r) return;
  let n = {}, i = e, s = 0;
  for (let D of r) {
    if (typeof D == "string") {
      s += D.length;
      continue;
    }
    let N = D.re.exec(i.slice(s));
    if (!N || !D.read(n, N[0])) return;
    i = i.replace(N[0], "");
  }
  n.afternoon !== void 0 && n.hours !== void 0 && (n.afternoon ? n.hours < 12 && (n.hours += 12) : n.hours === 12 && (n.hours = 0));
  let l = n.dayGiven || n.day ? n.day : !n.year && !n.month ? a.getDate() : 1, h = n.year || a.getFullYear(), g = 0;
  n.year && !n.month || (g = n.month > 0 ? n.month - 1 : a.getMonth());
  let p = n.hours || 0, y = n.minutes || 0, c = n.seconds || 0, k = n.milliseconds || 0;
  if (n.offset !== void 0) return new Date(Date.UTC(h, g, l, p, y, c, k + n.offset * 6e4));
  if (!n.week) return new Date(h, g, l, p, y, c, k);
}
function ga(e, t, a) {
  let r = ma(e, t, a);
  return r && ie(r) && Yt(r, t) === e ? r : void 0;
}
var ya = /^[YMDHhmsSZXx\-/.:, T]*$/, ka = /^\s*(active|done|crit|milestone|vert)\s*$/, wa = /^after\s+([\d\w- ]+)/, Ma = /^until\s+([\d\w- ]+)/, pa = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/, Da = /[\s,]+/, xa = /^\d+$/, ba = new Set(Q.map((e) => e.toLowerCase())), va = 4e8, $a = 400, Ta = 200, Sa = 400;
function Ft(e) {
  let t = e === void 0 ? NaN : +e;
  return Number.isFinite(t) ? t : Date.now();
}
function Ya(e) {
  let t = pa.exec(e.trim());
  return t ? [Number.parseFloat(t[1]), t[2]] : [NaN, "ms"];
}
function Mt(e, t) {
  let a = new Set(e);
  for (let r of t.toLowerCase().split(Da)) r !== "" && a.add(r);
  return [...a];
}
var _a = class {
  constructor(e = {}) {
    M(this, "type", "gantt");
    M(this, "title");
    M(this, "accTitle");
    M(this, "accDescr");
    M(this, "dateFormat", "");
    M(this, "axisFormat", "");
    M(this, "tickInterval");
    M(this, "todayMarker", "");
    M(this, "includes", []);
    M(this, "excludes", []);
    M(this, "inclusiveEndDates", !1);
    M(this, "topAxis", !1);
    M(this, "displayMode", "");
    M(this, "weekday");
    M(this, "weekend", "saturday");
    M(this, "sections", []);
    M(this, "links", /* @__PURE__ */ new Map());
    M(this, "tasks", []);
    M(this, "byId", /* @__PURE__ */ new Map());
    M(this, "currentSection", "");
    M(this, "taskCount", 0);
    M(this, "lastOrder", 0);
    M(this, "lastTaskId");
    M(this, "options");
    M(this, "now", 0);
    M(this, "work", 0);
    M(this, "includeSet", /* @__PURE__ */ new Set());
    M(this, "excludeSet", /* @__PURE__ */ new Set());
    M(this, "excludedDays", []);
    M(this, "datedTokens", !1);
    this.options = e;
  }
  setDateFormat(e) {
    this.dateFormat = e;
  }
  enableInclusiveEndDates() {
    this.inclusiveEndDates = !0;
  }
  TopAxis() {
    this.topAxis = !0;
  }
  setAxisFormat(e) {
    this.axisFormat = e;
  }
  setTickInterval(e) {
    this.tickInterval = e;
  }
  setTodayMarker(e) {
    this.todayMarker = e;
  }
  setIncludes(e) {
    this.includes = Mt(this.includes, e);
  }
  setExcludes(e) {
    this.excludes = Mt(this.excludes, e);
  }
  setWeekday(e) {
    this.weekday = e;
  }
  setWeekend(e) {
    this.weekend = e;
  }
  setDiagramTitle(e) {
    this.title = e;
  }
  setAccTitle(e) {
    this.accTitle = e.replace(/^\s+/g, "");
  }
  setAccDescription(e) {
    this.accDescr = e.replace(/\n\s+/g, `
`);
  }
  addSection(e) {
    this.currentSection = e, this.sections.push(e);
  }
  addTask(e, t) {
    let a = (t.startsWith(":") ? t.slice(1) : t).split(","), r = { id: "", task: e, section: this.currentSection, startTime: void 0, endTime: void 0, renderEndTime: null, manualEndTime: !1, processed: !1, active: !1, done: !1, crit: !1, milestone: !1, vert: !1, order: -1, classes: [], prevTaskId: this.lastTaskId, raw: { data: t, start: void 0, end: "" } }, n;
    for (; a.length > 0 && (n = ka.exec(a[0])) !== null; ) r[n[1]] = !0, a.shift();
    if (a.length === 0) throw new J(`Task "${e.trim()}" needs a duration or an end date.`, "semantic", { type: "gantt" });
    if (a.length > 3) throw new J(`Task "${e.trim()}" has too many fields. A task takes an id, a start, and an end or duration.`, "semantic", { type: "gantt" });
    for (let i = 0; i < a.length; i++) a[i] = a[i].trim();
    a.length === 3 ? r.id = a[0] : (this.taskCount++, r.id = "task" + this.taskCount), a.length > 1 && (r.raw.start = a[a.length - 2]), r.raw.end = a[a.length - 1], r.vert || (r.order = this.lastOrder++), this.tasks.push(r), this.lastTaskId = r.id, this.byId.set(r.id, r);
  }
  setLink(e, t) {
    let a = Jt(t);
    for (let r of e.split(",")) this.byId.has(r) && this.links.set(r, a);
    this.setClass(e, "clickable");
  }
  setClickEvent(e, t, a) {
    this.setClass(e, "clickable");
  }
  setClass(e, t) {
    for (let a of e.split(",")) this.byId.get(a)?.classes.push(t);
  }
  getTasks(e) {
    this.now = Ft(e), this.work = 0, this.includeSet = new Set(this.includes), this.excludeSet = new Set(this.excludes);
    let t = this.weekend === "friday" ? 5 : this.weekend === "saturday" ? 6 : NaN, a = this.excludeSet.has("weekends");
    this.excludedDays = Q.map((n, i) => {
      let s = i || 7;
      return a && (s === t || s === t + 1) || this.excludeSet.has(n.toLowerCase());
    }), this.datedTokens = this.includes.length > 0 || !ya.test(this.dateFormat.trim());
    for (let n of this.excludes) n !== "weekends" && !ba.has(n) && (this.datedTokens = !0);
    for (let n of this.tasks) n.startTime = n.endTime = void 0, n.renderEndTime = null, n.processed = n.manualEndTime = !1;
    let r = this.compileTasks();
    for (let n = 0; !r && n < 10; n++) r = this.compileTasks();
    return this.tasks;
  }
  isInvalidDate(e) {
    let t = this.excludedDays[e.getDay()];
    if (!this.datedTokens) return t;
    let a = this.dateFormat.trim(), r = _t(e), n = r;
    this.spend(Ta), a !== "YYYY-MM-DD" && (this.spend(Sa + a.length * 8), n = Yt(e, a));
    let i = (s) => s.has(r) || n !== void 0 && s.has(n);
    return i(this.includeSet) ? !1 : t || i(this.excludeSet);
  }
  spend(e) {
    if (this.work += e, this.work > va) throw new J("The gantt chart takes too much work to schedule.", "limit", { type: "gantt" });
  }
  parse(e, t) {
    return this.spend((t.length + 1) * (e.length + 1)), ga(e, t, new Date(this.now));
  }
  today() {
    let e = new Date(this.now);
    return e.setHours(0, 0, 0, 0), e;
  }
  warn(e) {
    this.options.warn && this.options.warn(e());
  }
  compileTasks() {
    let e = !0;
    for (let t of this.tasks) this.compileTask(t), e = e && t.processed;
    return e;
  }
  compileTask(e) {
    let t = e.raw.start;
    if (t === void 0) {
      let a = e.prevTaskId === void 0 ? void 0 : this.byId.get(e.prevTaskId);
      e.startTime = a ? a.endTime : this.today();
    } else {
      let a = this.getStartDate(t);
      a && (e.startTime = a);
    }
    e.startTime && (e.endTime = this.getEndDate(e.startTime, e.raw.end), e.endTime && (e.processed = !0, e.manualEndTime = this.parse(e.raw.end, "YYYY-MM-DD") !== void 0, this.checkTaskDates(e)));
  }
  references(e, t) {
    let a = [], r;
    for (let n of t.split(" ")) {
      if (n === "") continue;
      let i = this.byId.get(n);
      i ? a.push(i) : (r ?? (r = [])).push(n);
    }
    if (r) {
      let n = r;
      this.warn(() => `Gantt: "${e}" refers to task ids that do not exist: ${n.join(", ")}.`);
    }
    return a;
  }
  getStartDate(e) {
    let t = e.trim(), a = this.dateFormat.trim();
    if ((a === "x" || a === "X") && xa.test(t)) return this.checked(new Date(Number(t)), t);
    let r = wa.exec(t);
    if (r !== null) {
      let s = this.references("after", r[1]), l;
      for (let h of s) (!l || h.endTime > l.endTime) && (l = h);
      return l ? l.endTime : this.today();
    }
    let n = this.parse(t, a);
    if (n) return n;
    let i = new Date(t);
    if (!ie(i) || i.getFullYear() < -1e4 || i.getFullYear() > 1e4) throw new J("Invalid date:" + t, "semantic", { type: "gantt" });
    return i;
  }
  checked(e, t) {
    if (!ie(e)) throw new J("Invalid date:" + t, "semantic", { type: "gantt" });
    return e;
  }
  getEndDate(e, t) {
    let a = t.trim(), r = Ma.exec(a);
    if (r !== null) {
      let g = this.references("until", r[1]), p;
      for (let y of g) (!p || y.startTime < p.startTime) && (p = y);
      return p ? p.startTime : this.today();
    }
    let n = this.dateFormat.trim(), i = this.parse(a, n);
    if (i) return this.inclusiveEndDates ? Z(i, 1) : i;
    let [s, l] = Ya(a);
    if (Number.isNaN(s)) return this.warn(() => `Gantt: "${a}" is neither a date in the "${n}" format nor a duration such as "3d", so the task gets no duration.`), new Date(e);
    let h = Tt(e, s, l);
    return ie(h) ? h : new Date(e);
  }
  checkTaskDates(e) {
    if (this.excludes.length === 0 || e.manualEndTime) return;
    let t = Z(e.startTime, 1), a = new Date(e.endTime), r = +Z(a, 1e4), n = !1, i = null;
    for (; +t <= +a; ) {
      if (this.spend($a), n || (i = +a), n = this.isInvalidDate(t), n && (a.setDate(a.getDate() + 1), +a > r)) throw new J("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.", "semantic", { type: "gantt" });
      t.setDate(t.getDate() + 1);
    }
    e.endTime = a, e.renderEndTime = i === null ? null : new Date(i);
  }
}, Fa = ["$end", "INVALID", "open_directive", "acc_title", "acc_title_value", "acc_descr", "acc_descr_value", "acc_descr_multiline_value", "NL", "href", "callbackname", "callbackargs", "click", "gantt", "dateFormat", "inclusiveEndDates", "topAxis", "axisFormat", "tickInterval", "includes", "excludes", "todayMarker", "weekday_monday", "weekday_tuesday", "weekday_wednesday", "weekday_thursday", "weekday_friday", "weekday_saturday", "weekday_sunday", "weekend_friday", "weekend_saturday", "date", "title", "accDescription", "section", "taskTxt", "taskData", ":", "EOF"], Aa = /accTitle\s*:\s*/iy, Ia = /accDescr\s*:\s*/iy, Na = /accDescr\s*\{\s*/iy, Ha = /href\s+"/iy, Ea = /call\s+/iy, Ca = /click\s+/iy, za = /\(\s*\)/y, Ze = /weekday\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/iy, La = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Oe = /weekend\s+(?:(friday)|saturday)\b/iy, Wa = /\d\d\d\d-\d\d-\d\d\b/y, Ga = /* @__PURE__ */ new Map([[97, [[/axisFormat\s[^#\n;]+/iy, 17], [/accDescription\s[^#\n;]+/iy, 33]]], [103, [[/gantt\b/iy, 13]]], [100, [[/dateFormat\s[^#\n;]+/iy, 14]]], [105, [[/inclusiveEndDates\b/iy, 15], [/includes\s[^#\n;]+/iy, 19]]], [116, [[/topAxis\b/iy, 16], [/tickInterval\s[^#\n;]+/iy, 18], [/todayMarker\s[^\n;]+/iy, 21], [/title\s[^\n]+/iy, 32]]], [101, [[/excludes\s[^#\n;]+/iy, 20]]], [115, [[/section\s[^\n]+/iy, 34]]]]);
function Za(e) {
  let t = e.length, a = [], r = [], n = [], i = 0, s = 0, l = (y, c, k) => {
    a.push(y), r.push(e.slice(c, k)), n.push(c), s = k;
  }, h = (y) => (y.lastIndex = s, y.test(e) ? y.lastIndex : -1), g = (y, c) => {
    let k = e.indexOf(y, c);
    return k === -1 ? t : k;
  }, p = (y) => {
    let c;
    switch (y | 32) {
      case 97:
        if ((c = h(Aa)) >= 0) return i = 1, l(3, s, c), !0;
        if ((c = h(Ia)) >= 0) return i = 2, l(5, s, c), !0;
        if ((c = h(Na)) >= 0) return i = 3, s = c, !0;
        break;
      case 104:
        if ((c = h(Ha)) >= 0) return i = 4, s = c, !0;
        break;
      case 99:
        if ((c = h(Ea)) >= 0) return i = 5, s = c, !0;
        if ((c = h(Ca)) >= 0) return i = 7, s = c, !0;
        break;
      case 119: {
        Ze.lastIndex = s;
        let D = Ze.exec(e);
        if (D) return l(22 + La.indexOf(D[1].toLowerCase()), s, Ze.lastIndex), !0;
        if (Oe.lastIndex = s, D = Oe.exec(e), D) return l(D[1] !== void 0 ? 29 : 30, s, Oe.lastIndex), !0;
        break;
      }
    }
    let k = Ga.get(y | 32);
    if (k) {
      for (let [D, N] of k) if ((c = h(D)) >= 0) return l(N, s, c), !0;
    }
    return !1;
  };
  for (; ; ) {
    if (s >= t) {
      let c = 38;
      switch (i) {
        case 1:
          c = 4;
          break;
        case 2:
          c = 6;
          break;
        case 3:
          c = 7;
          break;
        case 4:
          c = 9;
          break;
        case 5:
          c = 10;
          break;
        case 6:
          c = 11;
          break;
        case 7:
          c = 12;
          break;
      }
      l(c, t, t);
      break;
    }
    let y = e.charCodeAt(s);
    switch (i) {
      case 0: {
        let c = e.charCodeAt(s + 1);
        if (y === 37) if (c !== 37) {
          let k = g(`
`, s + 1);
          for (; e.charCodeAt(k) === 10; ) k++;
          s = k;
        } else {
          if (e.charCodeAt(s + 2) === 123) return l(2, s, s + 3), l(1, s, s), { types: a, texts: r, starts: n };
          s = g(`
`, s + 2);
        }
        else if (y !== 125 && c === 37) s = g(`
`, s + 2);
        else if (y === 10) {
          let k = s + 1;
          for (; e.charCodeAt(k) === 10; ) k++;
          l(8, s, k);
        } else if (ge(y)) for (s++; s < t && ge(e.charCodeAt(s)); ) s++;
        else {
          if (p(y)) break;
          if (y >= 48 && y <= 57 && h(Wa) >= 0) l(31, s, s + 10);
          else if (y !== 58) {
            let k = s + 1;
            for (; k < t; ) {
              let D = e.charCodeAt(k);
              if (D === 58 || D === 10) break;
              k++;
            }
            l(35, s, k);
          } else {
            let k = s + 1;
            for (; k < t; ) {
              let D = e.charCodeAt(k);
              if (D === 35 || D === 10 || D === 59) break;
              k++;
            }
            l(k > s + 1 ? 36 : 37, s, k);
          }
        }
        break;
      }
      case 1:
      case 2: {
        let c = i === 1 ? 4 : 6;
        i = 0, l(c, s, g(`
`, s));
        break;
      }
      case 3:
        y === 125 ? (i = 0, s++) : l(7, s, g("}", s));
        break;
      case 4:
        y === 34 ? (i = 0, s++) : l(9, s, g('"', s));
        break;
      case 5:
        if (y === 40) {
          let c = h(za);
          c >= 0 ? (i = 0, s = c) : (i = 6, s++);
        } else l(10, s, g("(", s));
        break;
      case 6:
        y === 41 ? (i = 0, s++) : l(11, s, g(")", s));
        break;
      case 7:
        if (ge(y)) i = 0, s++;
        else {
          let c = s + 1;
          for (; c < t && !ge(e.charCodeAt(c)); ) c++;
          l(12, s, c);
        }
        break;
    }
  }
  return a.push(0), r.push(""), n.push(t), { types: a, texts: r, starts: n };
}
var Oa = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], pt = "'EOF', 'SPACE', 'NL', 'weekday_monday', 'weekday_tuesday', 'weekday_wednesday', 'weekday_thursday', 'weekday_friday', 'weekday_saturday', 'weekday_sunday', 'weekend_friday', 'weekend_saturday', 'dateFormat', 'inclusiveEndDates', 'topAxis', 'axisFormat', 'tickInterval', 'excludes', 'includes', 'todayMarker', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'taskTxt', 'click'", xe = new Uint8Array(39);
for (let e = 22; e <= 30; e++) xe[e] = 1;
for (let e of [38, 8, 14, 15, 16, 17, 18, 20, 19, 21, 32, 3, 5, 7, 34, 35, 12]) xe[e] = 1;
function Xa(e, t) {
  let { types: a, texts: r, starts: n } = Za(e), i = 0, s = (h) => {
    let g = a[i];
    throw Bt("gantt", e, n[i], `Expecting ${h}, got '${g === 0 ? "1" : Fa[g]}'`);
  }, l = (h = "") => {
    xe[a[i]] !== 1 && s(pt + h);
  };
  for (a[i] !== 13 && s("'gantt'"), i++; ; ) {
    let h = a[i], g = r[i];
    switch (xe[h] !== 1 && s(pt), i++, h) {
      case 38:
        if (a[i] === 0) return;
        l();
        break;
      case 8:
        break;
      case 14:
        l(), t.setDateFormat(g.slice(11));
        break;
      case 15:
        l(), t.enableInclusiveEndDates();
        break;
      case 16:
        l(), t.TopAxis();
        break;
      case 17:
        l(), t.setAxisFormat(g.slice(11));
        break;
      case 18:
        l(), t.setTickInterval(g.slice(13));
        break;
      case 20:
        l(), t.setExcludes(g.slice(9));
        break;
      case 19:
        l(), t.setIncludes(g.slice(9));
        break;
      case 21:
        l(), t.setTodayMarker(g.slice(12));
        break;
      case 29:
        l(), t.setWeekend("friday");
        break;
      case 30:
        l(), t.setWeekend("saturday");
        break;
      case 32:
        l(), t.setDiagramTitle(g.slice(6));
        break;
      case 3: {
        a[i] !== 4 && s("'acc_title_value'");
        let p = r[i++];
        l(), t.setAccTitle(p.trim());
        break;
      }
      case 5: {
        a[i] !== 6 && s("'acc_descr_value'");
        let p = r[i++];
        l(), t.setAccDescription(p.trim());
        break;
      }
      case 7:
        l(), t.setAccDescription(g.trim());
        break;
      case 34:
        l(), t.addSection(g.slice(8));
        break;
      case 35: {
        a[i] !== 36 && s("'taskData'");
        let p = r[i++];
        l(), t.addTask(g, p);
        break;
      }
      case 12: {
        let p, y = null, c;
        a[i] === 10 ? (p = r[i++], a[i] === 11 && (y = r[i++]), a[i] === 9 ? (c = r[i++], l()) : l(y === null ? ", 'callbackargs', 'href'" : ", 'href'")) : a[i] === 9 ? (c = r[i++], a[i] === 10 ? (p = r[i++], a[i] === 11 ? (y = r[i++], l()) : l(", 'callbackargs'")) : l(", 'callbackname'")) : s("'callbackname', 'href'"), p !== void 0 && t.setClickEvent(g, p, y), c !== void 0 && t.setLink(g, c);
        break;
      }
      default:
        l(), t.setWeekday(Oa[h - 22]);
    }
  }
}
var z = 1e3, L = 60 * z, P = 60 * L, V = 24 * P, oe = 7 * V, je = 30 * V, be = 365 * V;
function we(e) {
  e.setHours(0, 0, 0, 0);
}
function $e(e) {
  return { floor(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), we(t);
  }, offset: (t, a) => t.setDate(t.getDate() + a * 7), cycle: 1 / 0, ms: oe };
}
var le = { millisecond: { floor: () => {
}, offset: (e, t) => e.setTime(+e + t), cycle: 1 / 0, ms: 1 }, second: { floor: (e) => e.setTime(+e - e.getMilliseconds()), offset: (e, t) => e.setTime(+e + t * z), field: (e) => e.getUTCSeconds(), cycle: 60, ms: z }, minute: { floor: (e) => e.setTime(+e - e.getMilliseconds() - e.getSeconds() * z), offset: (e, t) => e.setTime(+e + t * L), field: (e) => e.getMinutes(), cycle: 60, ms: L }, hour: { floor: (e) => e.setTime(+e - e.getMilliseconds() - e.getSeconds() * z - e.getMinutes() * L), offset: (e, t) => e.setTime(+e + t * P), field: (e) => e.getHours(), cycle: 24, ms: P }, day: { floor: we, offset: (e, t) => e.setDate(e.getDate() + t), field: (e) => e.getDate() - 1, cycle: 31, ms: V }, month: { floor(e) {
  e.setDate(1), we(e);
}, offset: (e, t) => e.setMonth(e.getMonth() + t), field: (e) => e.getMonth(), cycle: 12, ms: je }, year: { floor(e) {
  e.setMonth(0, 1), we(e);
}, offset: (e, t) => e.setFullYear(e.getFullYear() + t), cycle: 1 / 0, ms: be } };
function ve(e, t, a) {
  return Math.floor((+t - +e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * L) / a);
}
function Pa(e, t) {
  return (e % t + t) % t;
}
function Me(e, t, a) {
  let r = e === "week" ? $e(a) : le[e];
  if (t <= 1) return r;
  if (e === "millisecond") return { ...r, floor: (s) => s.setTime(Math.floor(+s / t) * t), offset: (s, l) => s.setTime(+s + l * t) };
  if (e === "year") return { ...r, floor(s) {
    s.setFullYear(Math.floor(s.getFullYear() / t) * t), r.floor(s);
  }, offset: (s, l) => s.setFullYear(s.getFullYear() + l * t) };
  if (e === "week") {
    let s = /* @__PURE__ */ new Date(0);
    return r.floor(s), { ...r, floor(l) {
      r.floor(l), r.offset(l, -Pa(ve(s, l, oe), t));
    }, offset: (l, h) => r.offset(l, h * t) };
  }
  let n = r.field, i = (s) => n(s) % t === 0;
  return { ...r, floor(s) {
    for (r.floor(s); Number.isFinite(+s) && !i(s); r.floor(s)) s.setTime(+s - 1);
  }, offset(s, l) {
    for (let h = 0; h < l && Number.isFinite(+s); h++) do
      r.offset(s, 1);
    while (Number.isFinite(+s) && !i(s));
  } };
}
function At(e, t, a, r) {
  let n = new Date(t - 1);
  e.floor(n), e.offset(n, 1), e.floor(n);
  let i = [], s = -1 / 0;
  for (; +n <= a && +n > s; ) {
    if (i.length >= r) return;
    s = +n, i.push(s), e.offset(n, 1), e.floor(n);
  }
  return i;
}
function Dt(e, t, a) {
  let r = (t - e) / Math.max(0, a), n = Math.floor(Math.log10(r)), i = r / Math.pow(10, n), s = i >= Math.sqrt(50) ? 10 : i >= Math.sqrt(10) ? 5 : i >= Math.SQRT2 ? 2 : 1;
  return Math.pow(10, n) * s;
}
var U = [["second", 1, z], ["second", 5, 5 * z], ["second", 15, 15 * z], ["second", 30, 30 * z], ["minute", 1, L], ["minute", 5, 5 * L], ["minute", 15, 15 * L], ["minute", 30, 30 * L], ["hour", 1, P], ["hour", 3, 3 * P], ["hour", 6, 6 * P], ["hour", 12, 12 * P], ["day", 1, V], ["day", 2, 2 * V], ["week", 1, oe], ["month", 1, je], ["month", 3, 3 * je], ["year", 1, be]];
function Qa(e, t, a) {
  let r = (t - e) / a, n = 0;
  for (; n < U.length && U[n][2] <= r; ) n++;
  let i;
  if (n === U.length) i = Me("year", Math.max(1, Dt(e / be, t / be, a)), 0);
  else if (n === 0) i = Me("millisecond", Math.max(Dt(e, t, a), 1), 0);
  else {
    let [s, l] = U[r / U[n - 1][2] < U[n][2] / r ? n - 1 : n];
    i = Me(s, l, 0);
  }
  return At(i, e, t, 4 * a + 8) ?? [];
}
var Va = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/, ja = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
function qa(e, t, a, r, n) {
  let i = Va.exec(e);
  if (!i) return;
  let s = parseInt(i[1], 10), l = i[2], h = Me(l, s, Math.max(0, ja.indexOf(t)));
  if (!((r - a) / (Math.min(s, h.cycle) * h.ms) > n)) return At(h, a, r, n);
}
function x(e, t, a) {
  let r = e < 0 ? "-" : "", n = String(r ? -e : e);
  return r + (n.length < a ? t.repeat(a - n.length) + n : n);
}
function G(e, t) {
  let a = /* @__PURE__ */ new Date(+e);
  return t.floor(a), a;
}
function xt(e, t) {
  let a = $e(t), r = G(e, le.year);
  return ve(G(new Date(+r - 1), a), G(e, a), oe);
}
function Xe(e) {
  let t = $e(4), a = e.getDay(), r = G(a >= 4 || a === 0 ? e : new Date(+e - 1), t);
  return a >= 4 || a === 0 || (t.offset(r, 1), t.floor(r)), r;
}
var Ja = /* @__PURE__ */ new Map([["-", ""], ["_", " "], ["0", "0"]]);
function pe(e, t) {
  let a = "", r = 0, n = e.length;
  for (let i = 0; i < n; i++) {
    if (e.charCodeAt(i) !== 37) continue;
    a += e.slice(r, i);
    let s = e.charAt(++i), l = Ja.get(s);
    l !== void 0 ? s = e.charAt(++i) : l = s === "e" ? " " : "0", a += Ua(s, t, l), r = i + 1;
  }
  return a + e.slice(r);
}
function Ua(e, t, a) {
  switch (e) {
    case "a":
      return Q[t.getDay()].slice(0, 3);
    case "A":
      return Q[t.getDay()];
    case "b":
      return R[t.getMonth()].slice(0, 3);
    case "B":
      return R[t.getMonth()];
    case "c":
      return pe("%x, %X", t);
    case "d":
    case "e":
      return x(t.getDate(), a, 2);
    case "f":
      return x(t.getMilliseconds(), a, 3) + "000";
    case "g":
      return x(Xe(t).getFullYear() % 100, a, 2);
    case "G":
      return x(Xe(t).getFullYear() % 1e4, a, 4);
    case "H":
      return x(t.getHours(), a, 2);
    case "I":
      return x(t.getHours() % 12 || 12, a, 2);
    case "j":
      return x(1 + ve(G(t, le.year), G(t, le.day), V), a, 3);
    case "L":
      return x(t.getMilliseconds(), a, 3);
    case "m":
      return x(t.getMonth() + 1, a, 2);
    case "M":
      return x(t.getMinutes(), a, 2);
    case "p":
      return t.getHours() >= 12 ? "PM" : "AM";
    case "q":
      return String(1 + Math.floor(t.getMonth() / 3));
    case "Q":
      return String(+t);
    case "s":
      return String(Math.floor(+t / 1e3));
    case "S":
      return x(t.getSeconds(), a, 2);
    case "u":
      return String(t.getDay() || 7);
    case "U":
      return x(xt(t, 0), a, 2);
    case "V": {
      let r = Xe(t), n = G(r, le.year), i = G(n, $e(4));
      return x(ve(i, r, oe) + (n.getDay() === 4 ? 1 : 0), a, 2);
    }
    case "w":
      return String(t.getDay());
    case "W":
      return x(xt(t, 1), a, 2);
    case "x":
      return pe("%-m/%-d/%Y", t);
    case "X":
      return pe("%-I:%M:%S %p", t);
    case "y":
      return x(t.getFullYear() % 100, a, 2);
    case "Y":
      return x(t.getFullYear() % 1e4, a, 4);
    case "Z": {
      let r = t.getTimezoneOffset(), n = Math.abs(r);
      return (r > 0 ? "-" : "+") + x(Math.floor(n / 60), "0", 2) + x(n % 60, "0", 2);
    }
    case "%":
      return "%";
    default:
      return e;
  }
}
var Ba = 800, Ra = 240, B = 8, Ka = /<br\s*\/?>/gi;
function I(e, t, a, r) {
  let n = e.gantt?.[t];
  return typeof n == "number" && Number.isFinite(n) ? Math.min(r, Math.max(a, n)) : void 0;
}
function Pe(e, t) {
  let a = e.gantt?.[t];
  return typeof a == "string" ? a : void 0;
}
function er(e, t) {
  return e.gantt?.[t] === !0;
}
function bt(e, t, a) {
  let r = Qe(e.replace(Ka, " "), !1, t, a, 4e3);
  return r.lines.length <= 1 ? r : { ...r, lines: [r.lines[0]], widths: [r.widths[0]], width: r.widths[0], height: r.lineHeight };
}
function De(e) {
  return Number.isFinite(+e.startTime) && Number.isFinite(+e.endTime);
}
function tr(e, t, a) {
  let r = e.filter(De).sort((s, l) => +s.startTime - +l.startTime || s.order - l.order), n = [];
  for (let s of r) {
    let l = +s.startTime, h = 0;
    for (; h < n.length && l < n[h]; ) h++;
    n[h] = +s.endTime, a.set(s, t + h);
  }
  let i = n.length;
  for (let s of e) a.has(s) || a.set(s, t + i++);
  return Math.max(i, 1);
}
function ar(e, t, a) {
  let r = a.fontSize ?? 16, n = a.measurer ?? Ut(a.fontFamily), i = a.padding ?? 8, s = Ft(a.now), l = I(t, "fontSize", 4, 72) ?? Math.round(r * 0.8125), h = I(t, "sectionFontSize", 4, 72) ?? l, g = Math.round(r * 0.75), p = I(t, "barHeight", 4, 400) ?? Math.round(l * 1.85), y = I(t, "barGap", 0, 400) ?? Math.round(p / 4), c = p + y, k = Math.round(I(t, "numberSectionStyles", 1, 1e3) ?? 4), D = e.displayMode === "compact", N = e.topAxis || er(t, "topAxis"), Te = e.getTasks(s), de = Te.filter((o) => !o.vert), It = Te.filter((o) => o.vert && De(o)), j = /* @__PURE__ */ new Map();
  for (let o of de) j.has(o.section) || j.set(o.section, j.size);
  let Se = /* @__PURE__ */ new Map(), O = [];
  if (D) {
    let o = /* @__PURE__ */ new Map();
    for (let d of de) {
      let f = o.get(d.section);
      f ? f.push(d) : o.set(d.section, [d]);
    }
    for (let [d, f] of o) {
      let m = tr(f, O.length, Se);
      for (let w = 0; w < m; w++) O.push(d);
    }
  } else for (let o of de) Se.set(o, O.length), O.push(o.section);
  let Ye = O.length, $ = 1 / 0, Y = -1 / 0;
  for (let o of Te) De(o) && ($ = Math.min($, +o.startTime), Y = Math.max(Y, +o.endTime));
  let Nt = $ <= Y, H = Qe(e.title, !1, n, r, 4e3, 1), Ht = H.height > 0 ? H.height + 16 : 0;
  if (!Nt) {
    let o = Math.ceil(Math.max(H.width, 1) + 2 * i), d = Math.ceil(Math.max(H.height, 1) + 2 * i), f = re(H, o / 2, i + H.height / 2, ' class="pele-title" font-weight="var(--_tw)"');
    return { svg: ct("gantt", o, d, r, a, e, f), width: o, height: d, links: [] };
  }
  let qe = /* @__PURE__ */ new Map(), ce = 0;
  for (let o of j.keys()) {
    let d = Qe(o, !1, n, h, 180);
    qe.set(o, d), ce = Math.max(ce, d.width);
  }
  let Et = e.axisFormat || (e.dateFormat === "D" ? "%d" : Pe(t, "axisFormat") ?? "%Y-%m-%d"), _e = (o) => pe(Et, new Date(o)), Fe = Math.max(n.width(_e($), g, 0), n.width(_e(Y), g, 0)), E = i + (I(t, "leftPadding", 0, 2e3) ?? Math.max(ce > 0 ? ce + 24 : 0, Fe / 2)), Ae = I(t, "rightPadding", 0, 2e3) ?? Math.max(16, Fe / 2), Ct = Rt(a, I(t, "useWidth", 100, 2e4) ?? Ba, 280), K = Math.max(Ra, Ct - E - Ae - i), ee = E + K, Je = Y > $ ? K / (Y - $) : 0, W = (o) => Je === 0 ? E + K / 2 : E + (o - $) * Je, te = Math.round(g * 1.75), Ie = I(t, "topPadding", 0, 2e3), Ue = I(t, "gridLineStartPadding", 0, 2e3), Be = i + Ht + (N ? te : 0), A = Math.max(Be, Ie ?? 0), ae = Ie !== void 0 && Ue !== void 0 ? Math.max(0, Math.min(Ie - Ue, A - Be)) : 0, Re = Math.max(Ye, 1) * c, X = A + Re, Ne = [], C = ee + Ae;
  for (let o of de) {
    let d = bt(o.task, n, l), f = Se.get(o);
    if (!De(o)) {
      let _ = E + B + d.width / 2;
      C = Math.max(C, _ + d.width / 2), Ne.push({ task: o, label: d, row: f, x0: NaN, x1: NaN, labelX: _, inside: !1 });
      continue;
    }
    let m = W(+o.startTime), w = Math.max(W(+(o.renderEndTime ?? o.endTime)), m + (o.milestone ? 0 : 2));
    if (o.milestone) {
      let _ = m + (W(+o.endTime) - m) / 2;
      m = _ - p / 2, w = _ + p / 2;
    }
    let T = !o.milestone && d.width + 2 * B <= w - m, v = (m + w) / 2;
    if (!T) {
      let _ = w + B + d.width <= ee + Ae, he = m - B - d.width >= E;
      v = _ || !he ? w + B + d.width / 2 : m - B - d.width / 2, C = Math.max(C, v + d.width / 2);
    }
    Ne.push({ task: o, label: d, row: f, x0: m, x1: w, labelX: v, inside: T });
  }
  let zt = e.tickInterval || Pe(t, "tickInterval") || "", Lt = e.weekday ?? Pe(t, "weekday") ?? "sunday", Wt = Math.max(2, Math.min(10, Math.floor(K / (Fe + 24)))), Gt = qa(zt, Lt, $, Y, Math.ceil(K / 3)) ?? Qa($, Y, Wt), Ke = "", et = "", tt = "", He = -1 / 0, at = "", Zt = X + te / 2 + 2, Ot = A - ae - te / 2 - 2;
  for (let o of Gt) {
    let d = W(o);
    Ke += `M${u(d)},${u(A - ae)}V${u(X)}`;
    let f = _e(o), m = n.width(f, g, 0);
    if (d - m / 2 < He + 8 || f === at) continue;
    He = d + m / 2, at = f, C = Math.max(C, He);
    let w = `text-anchor="middle">${Kt(f)}</text>`;
    et += `<text x="${u(d)}" y="${u(Zt + g * 0.35)}" ${w}`, N && (tt += `<text x="${u(d)}" y="${u(Ot + g * 0.35)}" ${w}`);
  }
  let Ee = "", Ce = "", q = [], Xt = X + te + 4, ze = Math.round(l * 1.5);
  for (let o of [...It].sort((d, f) => +d.startTime - +f.startTime)) {
    let d = W(+o.startTime), f = bt(o.task, n, l), m = Math.max(i + f.width / 2, d), w = 0;
    for (; w < q.length && m - f.width / 2 < q[w] + 8; ) w++;
    q[w] = m + f.width / 2, C = Math.max(C, q[w]), Ee += `<path class="pele-vert" data-id="${ye(o.id)}" d="M${u(d)},${u(A - ae)}V${u(X)}"/>`, Ce += re(f, m, Xt + w * ze + ze / 2, ` class="pele-vert-label" data-id="${ye(o.id)}"`);
  }
  let ue = Math.ceil(Math.max(C, i + H.width) + i), rt = Math.ceil(X + te + (q.length > 0 ? 4 + q.length * ze : 0) + i), Le = "", st = "";
  for (let o = 0; o < Ye; ) {
    let d = O[o], f = o + 1;
    for (; f < Ye && O[f] === d; ) f++;
    let m = j.get(d) % k, w = A + o * c, T = (f - o) * c;
    (j.size > 1 || d !== "") && (Le += `<rect class="pele-section pele-section-${m}" x="0" y="${u(w)}" width="${ue}" height="${u(T)}" fill="${m % 2 === 0 ? "var(--_s)" : "none"}"/>`);
    let v = qe.get(d);
    st += re(v, i + 8 + v.width / 2, w + T / 2, ` class="pele-section-label" data-id="${ye(d)}"`, a.icons), o = f;
  }
  let We = "";
  if ((e.excludes.length > 0 || e.includes.length > 0) && +Tt(new Date($), 6, "y") > Y) {
    let o, d, f = () => {
      if (!o || !d) return;
      let m = new Date(o);
      m.setHours(0, 0, 0, 0);
      let w = new Date(d);
      w.setHours(23, 59, 59, 999);
      let T = Math.max(E, W(+m)), v = Math.min(ee, W(+w));
      v > T && (We += `<rect x="${u(T)}" y="${u(A)}" width="${u(v - T)}" height="${u(Re)}"/>`), o = d = void 0;
    };
    for (let m = new Date($); +m <= Y; m = Z(m, 1)) e.isInvalidDate(m) ? (o ?? (o = m), d = m) : f();
    f();
  }
  let nt = [], it = "";
  for (let o of Ne) {
    let d = o.task, f = A + o.row * c + c / 2, m = d.active ? "active" : d.done ? "done" : "", w = "pele-task";
    m && (w += " pele-" + m), d.crit && (w += " pele-crit"), d.milestone && (w += " pele-milestone"), d.classes.includes("clickable") && (w += " pele-clickable");
    let T = "", v = "";
    if (Number.isNaN(o.x0)) w += " pele-unscheduled", v = ' fill="var(--_m)"';
    else {
      let Ge = d.crit ? ea : "var(--_c)", ot = m === "done" ? 'fill="var(--_a)"' : m === "active" ? `fill="${Ge}" fill-opacity="0.25"` : `fill="${Ge}"`, dt = `stroke="${m === "done" && !d.crit ? "var(--_b)" : Ge}"`;
      if (d.milestone) {
        let fe = (o.x0 + o.x1) / 2, me = p / 2;
        T = `<path d="M${u(fe)},${u(f - me)}L${u(fe + me)},${u(f)}L${u(fe)},${u(f + me)}L${u(fe - me)},${u(f)}Z" ${ot} ${dt} stroke-linejoin="round"/>`;
      } else T = `<rect x="${u(o.x0)}" y="${u(f - p / 2)}" width="${u(o.x1 - o.x0)}" height="${u(p)}" rx="${ta}" ${ot} ${dt}/>`;
      o.inside ? v = m === "" ? ' fill="var(--_bg)"' : "" : m === "done" && (v = ' fill="var(--_m)"');
    }
    let _ = T + re(o.label, o.labelX, f, ` class="pele-label"${v}`), he = e.links.get(d.id);
    he !== void 0 && (_ = qt(_, he, d.id, nt, a)), it += `<g class="${w}" data-id="${ye(d.id)}">${_}</g>`;
  }
  let lt = "";
  if (e.todayMarker !== "off" && s >= $ && s <= Y && Y > $) {
    let o = W(s), d = A - ae, f = e.todayMarker ? aa(e.todayMarker.split(",")).line : "";
    lt = `<g class="pele-today"><path d="M${u(o)},${u(d)}V${u(X)}" fill="none" stroke="var(--_c)" stroke-width="2"${f}/>` + (f ? "" : `<path d="M${u(o - 4)},${u(d - 5)}H${u(o + 4)}L${u(o)},${u(d + 1)}Z" fill="var(--_c)"/>`) + "</g>";
  }
  let Pt = `M${u(E)},${u(X)}H${u(ee)}` + (N ? `M${u(E)},${u(A - ae)}H${u(ee)}` : ""), Qt = re(H, ue / 2, i + H.height / 2, ' class="pele-title" font-weight="var(--_tw)"') + (Le ? `<g class="pele-sections">${Le}</g>` : "") + (We ? `<g class="pele-excluded" fill="var(--_a)">${We}</g>` : "") + `<g class="pele-grid" fill="none"><path d="${Ke}" stroke="var(--_b)" stroke-dasharray="1 3"/><path d="${Pt}" stroke="var(--_b)"/></g>` + (Ee ? `<g class="pele-verts" fill="none" stroke="var(--_l)" stroke-width="1.5" stroke-dasharray="4 3">${Ee}</g>` : "") + lt + `<g class="pele-tasks" font-size="${u(l)}">${it}</g><g class="pele-section-labels" font-size="${u(h)}">${st}</g><g class="pele-axis" font-size="${g}" fill="var(--_m)">${et}${tt}</g>` + (Ce ? `<g class="pele-vert-labels" font-size="${u(l)}">${Ce}</g>` : "");
  return { svg: ct("gantt", ue, rt, r, a, e, Qt), width: ue, height: rt, links: nt };
}
var or = { type: "gantt", parse(e, t, a) {
  let r = new _a();
  a && (r.title = a);
  let n = t.gantt?.displayMode;
  return typeof n == "string" && (r.displayMode = n), Xa(e, r), r;
}, render: ar };
export {
  or as gantt
};
