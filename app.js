"use strict";
/* ========== helpers ========== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const DAY = 864e5;
const dayStr = t => { const d = new Date(t); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); };
const today = () => dayStr(Date.now());
const norm = s => String(s).toLowerCase().replace(/[’`´]/g, "'").replace(/[.,!?;:«»"()]/g, " ").replace(/\s+/g, " ").trim();
function lev(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}

/* ========== course data ========== */
const UNITS = COURSE.map((u, n) => ({
  ...u, n,
  words: (u.words || []).map(s => { const [en, ipa, ru] = s.split("|"); return { k: "w:" + en.toLowerCase(), t: "w", en, ipa, ru, u: u.id }; }),
  phrases: (u.phrases || []).map(s => { const [en, ru] = s.split("|"); return { k: "p:" + en.toLowerCase(), t: "p", en, ru, u: u.id }; }),
  gaps: (u.gaps || []).map(s => { const [q, a, w, ru] = s.split("|"); return { q, a, wrong: (w || "").split(",").filter(Boolean), ru: ru || "", u: u.id }; })
}));
const UNIT = Object.fromEntries(UNITS.map(u => [u.id, u]));
const ITEMS = new Map();
UNITS.forEach(u => [...u.words, ...u.phrases].forEach(it => { if (!ITEMS.has(it.k)) ITEMS.set(it.k, it); }));
const ALL_WORDS = [...ITEMS.values()].filter(i => i.t === "w");
const ALL_PHRASES = [...ITEMS.values()].filter(i => i.t === "p");
const CORE = UNITS.filter(u => !u.life && !u.final);

function lessonsOf(u) {
  if (u.final) return [{ id: "final-x", kind: "test", title: "Экзамен", icon: "🏆", u }];
  const h = Math.ceil(u.words.length / 2);
  return [
    { id: u.id + "-t", kind: "theory", title: "Правило", icon: "📘", u },
    { id: u.id + "-w1", kind: "words", title: "Слова 1", icon: "🔤", u, words: u.words.slice(0, h) },
    { id: u.id + "-w2", kind: "words", title: "Слова 2", icon: "🔤", u, words: u.words.slice(h) },
    { id: u.id + "-p", kind: "phrases", title: "Фразы", icon: "💬", u },
    { id: u.id + "-g", kind: "grammar", title: "Практика", icon: "✍️", u },
    { id: u.id + "-x", kind: "test", title: "Тест темы", icon: "🏁", u }
  ];
}
UNITS.forEach(u => { u.lessons = lessonsOf(u); });
const LESSONS = UNITS.flatMap(u => u.lessons);
const LESSON = Object.fromEntries(LESSONS.map(l => [l.id, l]));

/* ========== state ========== */
const KEY = "a1_course_v1";
const DEF = { done: {}, srs: {}, xp: 0, streak: 0, lastDay: "", day: "", dayXp: 0, goal: 50, rate: 0.9, voice: "",
  auto: true, sound: true, speakEx: true, unlockAll: false, seenIntro: false, tab: "home", open: "" };
let S = load();
function load() {
  try { const raw = localStorage.getItem(KEY); if (raw) return Object.assign(JSON.parse(JSON.stringify(DEF)), JSON.parse(raw)); } catch (e) {}
  return JSON.parse(JSON.stringify(DEF));
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

function streakNow() {
  if (!S.lastDay) return 0;
  return (S.lastDay === today() || S.lastDay === dayStr(Date.now() - DAY)) ? S.streak : 0;
}
function dayXp() { return S.day === today() ? S.dayXp : 0; }
function addXp(n) {
  const t = today();
  if (S.day !== t) { S.day = t; S.dayXp = 0; }
  S.dayXp += n; S.xp += n;
  if (S.lastDay !== t) { S.streak = S.lastDay === dayStr(Date.now() - DAY) ? S.streak + 1 : 1; S.lastDay = t; }
  save();
}

/* ========== spaced repetition ========== */
const STEPS = [1, 3, 7, 16, 35, 80, 180];
function seed(items) { items.forEach(it => { if (!S.srs[it.k]) S.srs[it.k] = { s: 0, due: Date.now() + DAY * 0.7, l: 0 }; }); }
function grade(k, ok) {
  const r = S.srs[k]; if (!r) return;
  if (ok) { r.due = Date.now() + STEPS[Math.min(r.s, STEPS.length - 1)] * DAY * 0.95; r.s++; }
  else { r.s = 0; r.l = (r.l || 0) + 1; r.due = Date.now() + DAY * 0.4; }
}
function dueItems() {
  const n = Date.now();
  return Object.entries(S.srs).filter(([k, r]) => r.due <= n && ITEMS.has(k)).sort((a, b) => a[1].due - b[1].due).map(([k]) => ITEMS.get(k));
}
const learnedCount = t => Object.entries(S.srs).filter(([k, r]) => k[0] === t && r.s >= 2).length;
const seenCount = t => Object.keys(S.srs).filter(k => k[0] === t).length;

/* ========== unlocking ========== */
const isDone = id => !!S.done[id];
function unlocked(l) {
  if (S.unlockAll) return true;
  const u = l.u, i = u.lessons.indexOf(l);
  if (i > 0) return isDone(u.lessons[i - 1].id);
  if (u.n === 0) return true;
  if (u.life) return isDone("u05-x");
  if (u.final) return isDone(CORE[CORE.length - 1].id + "-x");
  return isDone(UNITS[u.n - 1].id + "-x");
}
const nextLesson = () => LESSONS.find(l => unlocked(l) && !isDone(l.id));
const unitDone = u => u.lessons.filter(l => isDone(l.id)).length;

/* ========== speech ========== */
const TTS = "speechSynthesis" in window;
let VOICES = [];
function loadVoices() { if (TTS) VOICES = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang)); }
if (TTS) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function pickVoice() {
  if (!VOICES.length) return null;
  return VOICES.find(v => v.name === S.voice)
    || VOICES.find(v => /en[-_]US/i.test(v.lang) && /Google|Samantha|Natural|Aria|Jenny|Ava/i.test(v.name))
    || VOICES.find(v => /en[-_]US/i.test(v.lang)) || VOICES[0];
}
function say(text, slow) {
  if (!TTS || !text) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/_{2,}/g, " ... ").replace(/[—–]/g, ","));
    const v = pickVoice(); u.lang = v ? v.lang : "en-US"; if (v) u.voice = v;
    u.rate = slow ? 0.55 : S.rate;
    setTimeout(() => speechSynthesis.speak(u), 40);
  } catch (e) {}
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const canSpeak = () => !!SR && S.speakEx;

let AC;
function beep(ok) {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const t = AC.currentTime;
    (ok ? [660, 990] : [260, 200]).forEach((f, i) => {
      const o = AC.createOscillator(), g = AC.createGain(), s = t + i * 0.09;
      o.type = ok ? "sine" : "triangle"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.14, s + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.2);
      o.connect(g).connect(AC.destination); o.start(s); o.stop(s + 0.22);
    });
  } catch (e) {}
  if (!ok && navigator.vibrate) try { navigator.vibrate(60); } catch (e) {}
}

/* ========== exercise builders ========== */
function distract(item, field, pool, n = 3) {
  const out = [];
  for (const c of shuffle(pool)) {
    if (c.k === item.k || c.ru === item.ru || norm(c.en) === norm(item.en)) continue;
    const v = c[field];
    if (v !== item[field] && !out.includes(v)) out.push(v);
    if (out.length === n) break;
  }
  return out;
}
function mkChoice(item, mode) {
  const field = mode === "ru2en" ? "en" : "ru";
  const pool = item.t === "w" ? ALL_WORDS : ALL_PHRASES;
  let d = distract(item, field, pool.filter(x => x.u === item.u));
  if (d.length < 3) d = d.concat(distract(item, field, pool).filter(v => !d.includes(v))).slice(0, 3);
  return { type: "choice", mode, item, options: shuffle([item[field], ...d]), answer: item[field] };
}
const tokens = s => s.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
function mkTiles(item, mode) {
  const toks = tokens(item.en), low = toks.map(t => t.toLowerCase());
  const extra = [];
  for (const p of shuffle(ALL_PHRASES)) {
    for (let w of tokens(p.en)) {
      if (!/^I('|$)/.test(w)) w = w.toLowerCase();
      if (!low.includes(w.toLowerCase()) && !extra.some(e => e.toLowerCase() === w.toLowerCase())) { extra.push(w); break; }
    }
    if (extra.length >= (toks.length > 6 ? 2 : 3)) break;
  }
  return { type: "tiles", mode, item, bank: shuffle([...toks, ...extra]) };
}
const mkGap = g => ({ type: "gap", gap: g, options: shuffle([g.a, ...g.wrong]) });
const mkType = item => ({ type: "type", item });
const mkIntro = item => ({ type: "intro", item });
const mkMatch = items => ({ type: "match", items });
const mkSpeak = item => ({ type: "speak", item });
const fillGap = g => g.q.replace("___", g.a === "—" ? "" : g.a).replace(/\s+/g, " ").trim();
const reshuffle = st => {
  if (st.type === "choice" || st.type === "gap") return { ...st, options: shuffle(st.options) };
  if (st.type === "tiles") return { ...st, bank: shuffle(st.bank) };
  return { ...st };
};

function buildLesson(l) {
  const u = l.u, steps = [];
  if (l.kind === "theory") {
    (u.theory || []).forEach(b => steps.push({ type: "theory", block: b }));
    pick(u.gaps, 3).forEach(g => steps.push(mkGap(g)));
  } else if (l.kind === "words") {
    const ws = l.words;
    for (let i = 0; i < ws.length; i += 3) {
      const chunk = ws.slice(i, i + 3);
      chunk.forEach(w => steps.push(mkIntro(w)));
      shuffle(chunk).forEach(w => steps.push(mkChoice(w, "en2ru")));
    }
    if (ws.length >= 4) steps.push(mkMatch(pick(ws, 5)));
    shuffle(ws).forEach((w, i) => steps.push(i % 3 === 0 ? mkType(w) : i % 3 === 1 ? mkChoice(w, "audio") : mkChoice(w, "ru2en")));
  } else if (l.kind === "phrases") {
    const ps = u.phrases;
    for (let i = 0; i < ps.length; i += 2) {
      ps.slice(i, i + 2).forEach(p => steps.push(mkIntro(p)));
      ps.slice(i, i + 2).forEach(p => steps.push(mkChoice(p, "en2ru")));
    }
    shuffle(ps).forEach(p => steps.push(mkTiles(p, "ru")));
    pick(ps, 2).forEach(p => steps.push(mkTiles(p, "audio")));
    if (canSpeak()) pick(ps, 2).forEach(p => steps.push(mkSpeak(p)));
  } else if (l.kind === "grammar") {
    shuffle(u.gaps).forEach(g => steps.push(mkGap(g)));
    pick(u.phrases, 3).forEach(p => steps.push(mkTiles(p, "ru")));
    pick(u.phrases, 2).forEach(p => steps.push(mkChoice(p, "ru2en")));
  } else if (l.kind === "test") {
    if (u.final) {
      pick(CORE.flatMap(x => x.gaps), 16).forEach(g => steps.push(mkGap(g)));
      const ws = pick(CORE.flatMap(x => x.words), 10);
      ws.forEach((w, i) => steps.push(i < 4 ? mkType(w) : i < 7 ? mkChoice(w, "ru2en") : mkChoice(w, "audio")));
      const ps = pick(CORE.flatMap(x => x.phrases), 14);
      ps.slice(0, 10).forEach(p => steps.push(mkTiles(p, "ru")));
      ps.slice(10).forEach(p => steps.push(mkChoice(p, "audio")));
    } else {
      pick(u.gaps, 6).forEach(g => steps.push(mkGap(g)));
      pick(u.words, 5).forEach((w, i) => steps.push(i < 2 ? mkType(w) : mkChoice(w, i < 4 ? "ru2en" : "audio")));
      pick(u.phrases, 4).forEach((p, i) => steps.push(i < 3 ? mkTiles(p, "ru") : mkChoice(p, "audio")));
    }
    return shuffle(steps);
  }
  return steps;
}
function buildReview(items) {
  return items.map(it => {
    const r = S.srs[it.k] || { s: 0 };
    let st;
    if (it.t === "w") st = r.s <= 1 ? mkChoice(it, Math.random() < 0.5 ? "en2ru" : "audio") : r.s <= 3 ? (Math.random() < 0.5 ? mkChoice(it, "ru2en") : mkType(it)) : mkType(it);
    else st = r.s <= 1 ? mkChoice(it, Math.random() < 0.5 ? "en2ru" : "audio") : r.s <= 3 ? mkTiles(it, "ru") : mkTiles(it, "audio");
    st.srsKey = it.k;
    return st;
  });
}

/* ========== player ========== */
let P = null;
const PRAISE = ["Верно!", "Отлично!", "Супер!", "Так держать!", "Правильно!", "Великолепно!"];
function startLesson(l) {
  P = { mode: l.kind === "test" ? "test" : "lesson", lesson: l, steps: buildLesson(l), i: 0, correct: 0, total: 0 };
  openPlayer();
}
function startReview(force) {
  let items = dueItems();
  if (!items.length && force) items = Object.entries(S.srs).filter(([k]) => ITEMS.has(k)).sort((a, b) => a[1].due - b[1].due).map(([k]) => ITEMS.get(k));
  items = items.slice(0, 15);
  if (!items.length) return;
  P = { mode: "review", steps: buildReview(shuffle(items)), i: 0, correct: 0, total: 0 };
  openPlayer();
}
function openPlayer() {
  $("#player").hidden = false; document.body.classList.add("in-player");
  $("#go").onclick = goClick; $("#pAlt").hidden = true;
  renderStep();
}
function closePlayer() {
  $("#player").hidden = true; $("#pAlt").hidden = true; document.body.classList.remove("in-player");
  if (TTS) speechSynthesis.cancel();
  P = null; render();
}
function setGo(text, enabled) { const g = $("#go"); g.textContent = text; g.disabled = !enabled; }
function audioBtns(text) {
  return `<div class="aud"><button class="round" data-say="${esc(text)}" aria-label="Слушать">🔊</button><button class="round sm" data-slow="${esc(text)}" aria-label="Медленно">🐢</button></div>`;
}

function renderStep() {
  const st = P.steps[P.i], body = $("#pBody");
  P.answered = false; P.sel = null; P.ans = []; P.miss = 0;
  $("#sheet").className = "sheet"; $("#sheet").innerHTML = "";
  $("#pFill").style.transform = `scaleX(${P.i / P.steps.length})`;
  $("#pTag").textContent = P.mode === "review" ? "Повторение" : P.lesson.u.title + " · " + P.lesson.title;
  setGo("Проверить", false);
  let h = "";
  const it = st.item;
  switch (st.type) {
    case "theory": {
      const b = st.block;
      h = `<div class="kicker">Правило</div><h2 class="p-h">${esc(b.h)}</h2><div class="theory">${b.t}</div>
        <div class="exs">${(b.ex || []).map(e => `<button class="ex" data-say="${esc(e[0])}"><span class="ex-ic">🔊</span><span><b>${esc(e[0])}</b><small>${esc(e[1])}</small></span></button>`).join("")}</div>`;
      setGo("Понятно", true); break;
    }
    case "intro":
      h = `<div class="kicker">${it.t === "w" ? "Новое слово" : "Новая фраза"}</div>
        <div class="intro"><div class="${it.t === "w" ? "big-en" : "big-ph"}">${esc(it.en)}</div>
        ${it.ipa ? `<div class="ipa">[${esc(it.ipa)}]</div>` : ""}<div class="big-ru">${esc(it.ru)}</div>${audioBtns(it.en)}</div>
        <p class="hint">Послушайте и повторите вслух 2–3 раза</p>`;
      setGo("Дальше", true); if (S.auto) say(it.en); break;
    case "choice": {
      const top = st.mode === "en2ru" ? `<div class="kicker">Выберите перевод</div><div class="q-en">${esc(it.en)}</div>${audioBtns(it.en)}`
        : st.mode === "ru2en" ? `<div class="kicker">Как сказать по-английски?</div><div class="q-ru">${esc(it.ru)}</div>`
        : `<div class="kicker">Что вы услышали?</div><div class="listen">${audioBtns(it.en)}</div>`;
      h = `${top}<div class="opts">${st.options.map((o, i) => `<button class="opt" data-opt="${i}"><span class="num">${i + 1}</span>${esc(o)}</button>`).join("")}</div>`;
      if (S.auto && st.mode !== "ru2en") say(it.en);
      break;
    }
    case "type":
      h = `<div class="kicker">Напишите по-английски</div><div class="q-ru">${esc(it.ru)}</div>
        <input id="typeIn" class="type-in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Введите ответ">
        <button class="link" id="hintBtn">💡 Подсказка</button><div id="hintOut" class="hint-out"></div>`;
      break;
    case "tiles":
      h = `<div class="kicker">${st.mode === "ru" ? "Соберите фразу по-английски" : "Соберите то, что услышали"}</div>
        ${st.mode === "ru" ? `<div class="q-ru">${esc(it.ru)}</div>` : `<div class="listen">${audioBtns(it.en)}</div>`}
        <div class="tiles-ans" id="tAns"></div><div class="tiles-bank" id="tBank"></div>`;
      if (st.mode === "audio") say(it.en);
      break;
    case "gap": {
      const g = st.gap, parts = g.q.split("___");
      h = `<div class="kicker">Вставьте пропущенное</div><div class="gap-q">${esc(parts[0])}<span class="blank" id="blank">&nbsp;</span>${esc(parts[1] || "")}</div>
        ${g.ru ? `<div class="gap-ru">${esc(g.ru)}</div>` : ""}
        <div class="chips">${st.options.map((o, i) => `<button class="chip" data-opt="${i}">${esc(o)}</button>`).join("")}</div>`;
      break;
    }
    case "match": {
      const L = shuffle(st.items), R = shuffle(st.items);
      h = `<div class="kicker">Найдите пары</div><div class="match">
        <div>${L.map(x => `<button class="mt" data-side="L" data-k="${esc(x.k)}">${esc(x.en)}</button>`).join("")}</div>
        <div>${R.map(x => `<button class="mt" data-side="R" data-k="${esc(x.k)}">${esc(x.ru)}</button>`).join("")}</div></div>`;
      P.matched = 0; P.pick = { L: null, R: null };
      setGo("Найдите все пары", false); break;
    }
    case "speak":
      h = `<div class="kicker">Скажите вслух</div><div class="q-en">${esc(it.en)}</div><div class="gap-ru">${esc(it.ru)}</div>${audioBtns(it.en)}
        <button class="mic" id="mic">🎤</button><div class="mic-out" id="micOut">Нажмите на микрофон и произнесите фразу</div>`;
      setGo("Пропустить", true); break;
  }
  body.innerHTML = h;
  body.scrollTop = 0;
  bindStep(st);
}

function bindStep(st) {
  const body = $("#pBody");
  if (st.type === "choice") $$(".opt", body).forEach(b => b.onclick = () => {
    if (P.answered) return;
    $$(".opt", body).forEach(x => x.classList.remove("sel")); b.classList.add("sel");
    P.sel = st.options[+b.dataset.opt]; setGo("Проверить", true);
  });
  if (st.type === "gap") $$(".chip", body).forEach(b => b.onclick = () => {
    if (P.answered) return;
    $$(".chip", body).forEach(x => x.classList.remove("sel")); b.classList.add("sel");
    P.sel = st.options[+b.dataset.opt]; $("#blank").textContent = P.sel === "—" ? "∅" : P.sel; $("#blank").classList.add("filled");
    setGo("Проверить", true);
  });
  if (st.type === "type") {
    const inp = $("#typeIn"); setTimeout(() => inp.focus(), 60);
    inp.oninput = () => setGo("Проверить", inp.value.trim().length > 0);
    let hints = 0;
    $("#hintBtn").onclick = () => { hints = Math.min(hints + 1, st.item.en.length); $("#hintOut").textContent = st.item.en.slice(0, hints) + "…"; P.hinted = true; };
    P.hinted = false;
  }
  if (st.type === "tiles") drawTiles(st);
  if (st.type === "match") $$(".mt", body).forEach(b => b.onclick = () => matchTap(st, b));
  if (st.type === "speak") $("#mic").onclick = () => listenSpeak(st);
}

function drawTiles(st) {
  const ans = $("#tAns"), bank = $("#tBank");
  ans.innerHTML = P.ans.map((bi, pos) => `<button class="tile" data-pos="${pos}">${esc(st.bank[bi])}</button>`).join("") || `<span class="placeholder">Нажимайте на слова ниже</span>`;
  bank.innerHTML = st.bank.map((w, bi) => `<button class="tile ${P.ans.includes(bi) ? "used" : ""}" data-bi="${bi}">${esc(w)}</button>`).join("");
  $$(".tile[data-pos]", ans).forEach(b => b.onclick = () => { if (P.answered) return; P.ans.splice(+b.dataset.pos, 1); drawTiles(st); });
  $$(".tile[data-bi]", bank).forEach(b => b.onclick = () => {
    if (P.answered || P.ans.includes(+b.dataset.bi)) return;
    P.ans.push(+b.dataset.bi); say(st.bank[+b.dataset.bi]); drawTiles(st);
  });
  setGo("Проверить", P.ans.length > 0);
}

function matchTap(st, b) {
  if (b.classList.contains("done")) return;
  const side = b.dataset.side;
  $$(`.mt[data-side="${side}"]`).forEach(x => x.classList.remove("sel"));
  b.classList.add("sel"); P.pick[side] = b;
  if (side === "L") say(ITEMS.get(b.dataset.k)?.en || b.textContent);
  const { L, R } = P.pick;
  if (L && R) {
    if (L.dataset.k === R.dataset.k) {
      [L, R].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); });
      P.matched++;
      if (P.matched === st.items.length) {
        P.answered = true; beep(true); record(st, P.miss <= 1);
        setGo("Дальше", true);
      }
    } else {
      P.miss++; beep(false);
      [L, R].forEach(x => { x.classList.remove("sel"); x.classList.add("wrong"); setTimeout(() => x.classList.remove("wrong"), 450); });
    }
    P.pick = { L: null, R: null };
  }
}

function listenSpeak(st) {
  const out = $("#micOut"), mic = $("#mic");
  try {
    const r = new SR(); r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 3;
    mic.classList.add("on"); out.textContent = "Слушаю…";
    r.onresult = e => {
      const alts = [...e.results[0]].map(a => a.transcript);
      const target = norm(st.item.en).split(" ");
      let best = 0, heard = alts[0] || "";
      alts.forEach(a => { const w = norm(a).split(" "); const sc = target.filter(t => w.includes(t)).length / target.length; if (sc > best) { best = sc; heard = a; } });
      if (best >= 0.7) { beep(true); out.innerHTML = `✅ Отлично! Услышал: «${esc(heard)}»`; out.className = "mic-out good"; setGo("Дальше", true); P.answered = true; addXp(2); }
      else { out.innerHTML = `Услышал: «${esc(heard)}». Попробуйте ещё раз — медленнее и чётче.`; out.className = "mic-out"; }
    };
    r.onerror = e => { out.textContent = e.error === "not-allowed" ? "Нет доступа к микрофону. Разрешите его в браузере или пропустите." : "Не расслышал. Попробуйте ещё раз."; };
    r.onend = () => mic.classList.remove("on");
    r.start();
  } catch (e) { out.textContent = "Распознавание речи недоступно в этом браузере."; }
}

function record(st, ok) {
  if (!st.retry) { P.total++; if (ok) P.correct++; if (st.srsKey) grade(st.srsKey, ok); }
  if (!ok && P.mode !== "test" && !st.retry) P.steps.push({ ...reshuffle(st), retry: true });
}

function check() {
  const st = P.steps[P.i];
  let ok = false, right = "", note = "", sayText = "";
  $$(".opt.sel, .chip.sel").forEach(b => b.classList.remove("sel"));
  if (st.type === "choice") {
    ok = P.sel === st.answer; right = st.answer; sayText = st.item.en;
    note = st.mode === "ru2en" ? st.item.ru : st.item.en + " — " + st.item.ru;
    $$(".opt").forEach(b => { const v = st.options[+b.dataset.opt]; if (v === st.answer) b.classList.add("right"); else if (v === P.sel) b.classList.add("bad"); });
  } else if (st.type === "type") {
    const v = norm($("#typeIn").value), a = norm(st.item.en);
    ok = v === a; right = st.item.en; sayText = st.item.en; note = st.item.ru;
    if (!ok && a.length >= 4 && lev(v, a) <= 1) { ok = true; note = "Небольшая опечатка — пишется: " + st.item.en; }
    if (ok && P.hinted) note = (note ? note + " · " : "") + "с подсказкой";
    $("#typeIn").disabled = true; $("#typeIn").classList.add(ok ? "right" : "bad");
  } else if (st.type === "tiles") {
    const v = P.ans.map(i => st.bank[i]).join(" ");
    ok = norm(v) === norm(st.item.en); right = st.item.en; sayText = st.item.en; note = st.item.ru;
    $("#tAns").classList.add(ok ? "right" : "bad");
  } else if (st.type === "gap") {
    ok = P.sel === st.gap.a; right = fillGap(st.gap); sayText = right; note = st.gap.ru;
    $("#blank").classList.add(ok ? "right" : "bad");
    $$(".chip").forEach(b => { const v = st.options[+b.dataset.opt]; if (v === st.gap.a) b.classList.add("right"); else if (v === P.sel) b.classList.add("bad"); });
  }
  P.answered = true;
  record(st, ok); beep(ok);
  const sh = $("#sheet");
  sh.className = "sheet show " + (ok ? "ok" : "bad");
  sh.innerHTML = `<div class="sh-t">${ok ? "✓ " + PRAISE[Math.random() * PRAISE.length | 0] : "✗ Правильный ответ:"}</div>
    ${ok && st.type === "choice" && st.mode !== "ru2en" ? "" : `<button class="sh-a" data-say="${esc(sayText)}">🔊 ${esc(right)}</button>`}
    ${note ? `<div class="sh-n">${esc(note)}</div>` : ""}
    ${!ok && P.mode !== "test" ? `<div class="sh-n dim">Это задание вернётся в конце урока</div>` : ""}`;
  if (S.auto && sayText) say(sayText);
  setGo("Дальше", true);
}

function goClick() {
  if (!P) return;
  const st = P.steps[P.i];
  const passive = st.type === "theory" || st.type === "intro" || st.type === "speak" || st.type === "match";
  if (passive || P.answered) { P.i++; return P.i >= P.steps.length ? finish() : renderStep(); }
  check();
}

function finish() {
  const pct = P.total ? Math.round(P.correct / P.total * 100) : 100;
  let xp = 5 + P.correct + (pct === 100 && P.total >= 5 ? 10 : 0);
  let title, sub, passed = true;
  if (P.mode === "review") {
    title = "Повторение завершено"; sub = `Правильно с первого раза: ${P.correct} из ${P.total}. Слова, которые вы помните, вернутся реже, а забытые — завтра.`;
  } else {
    const l = P.lesson;
    if (l.kind === "test") {
      passed = pct >= 80;
      if (passed) { xp += l.u.final ? 100 : 20; seed([...(l.u.final ? [] : l.u.words), ...(l.u.final ? [] : l.u.phrases)]); }
      title = passed ? (l.u.final ? "🏆 Уровень A1 пройден!" : "Тест сдан!") : "Почти! Нужно 80 %";
      sub = passed ? (l.u.final ? "Вы прошли весь курс. Это настоящий уровень A1 — можно объясняться в магазине, кафе, на работе и в дороге. Продолжайте повторять слова каждый день." : "Следующая тема открыта.")
        : "Повторите слова и правило этой темы и попробуйте снова — каждый раз вопросы новые.";
    } else {
      if (l.kind === "words") seed(l.words);
      if (l.kind === "phrases") seed(l.u.phrases);
      title = pct >= 90 ? "Превосходно!" : pct >= 70 ? "Хорошая работа!" : "Урок пройден";
      sub = l.kind === "words" || l.kind === "phrases" ? "Новые слова добавлены в повторение — они вернутся завтра." : "Продолжайте в том же духе.";
    }
    if (passed) { const prev = S.done[l.id]; S.done[l.id] = { best: Math.max(pct, prev ? prev.best : 0), at: Date.now() }; }
  }
  addXp(xp); save();
  const nl = nextLesson();
  $("#pFill").style.transform = "scaleX(1)";
  $("#sheet").className = "sheet";
  $("#pBody").innerHTML = `<div class="result">
    <div class="res-ring" style="--p:${pct}"><span>${pct}%</span></div>
    <h2>${title}</h2><p>${sub}</p>
    <div class="res-stats"><div><b>+${xp}</b>опыта</div><div><b>${P.correct}/${P.total}</b>с первого раза</div><div><b>🔥 ${streakNow()}</b>дней подряд</div></div>
  </div>`;
  const g = $("#go");
  if (P.mode === "lesson" || P.mode === "test") {
    if (!passed) { g.textContent = "Попробовать снова"; g.disabled = false; const l = P.lesson; g.onclick = () => { g.onclick = goClick; startLesson(l); }; }
    else if (nl) { g.textContent = "Дальше: " + nl.title; g.disabled = false; g.onclick = () => { g.onclick = goClick; startLesson(nl); }; }
    else { g.textContent = "К курсу"; g.disabled = false; g.onclick = () => { g.onclick = goClick; closePlayer(); }; }
  } else { g.textContent = "Готово"; g.disabled = false; g.onclick = () => { g.onclick = goClick; closePlayer(); }; }
  $("#pAlt").hidden = false;
  P.finished = true;
}

/* ========== screens ========== */
function render() {
  $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === S.tab));
  ({ home: homeView, review: reviewView, dict: dictView, me: meView })[S.tab]();
  window.scrollTo(0, 0);
}
function go(tab) { S.tab = tab; save(); render(); }

function topBar() {
  const dx = dayXp(), pct = Math.min(100, Math.round(dx / S.goal * 100));
  return `<div class="topbar"><div class="tb-item" title="Дней подряд">🔥 <b>${streakNow()}</b></div>
    <div class="tb-item" title="Опыт">⭐ <b>${S.xp}</b></div>
    <div class="tb-goal" title="Цель дня"><div class="goal-ring" style="--p:${pct}"></div><span>${dx}/${S.goal}</span></div></div>`;
}

function homeView() {
  const nl = nextLesson(), due = dueItems().length;
  const doneAll = LESSONS.filter(l => isDone(l.id)).length;
  const corePct = Math.round(CORE.flatMap(u => u.lessons).filter(l => isDone(l.id)).length / (CORE.length * 6) * 100);
  const sect = (title, list) => `<h3 class="sec">${title}</h3>` + list.map(unitCard).join("");
  $("#app").innerHTML = topBar() + `
    ${!S.seenIntro ? `<div class="card tutor"><div class="tutor-h">👨‍🏫 Как пройти курс с нуля до A1</div>
      <ol><li><b>15–20 минут каждый день</b> лучше, чем 3 часа раз в неделю. Держите огонёк 🔥.</li>
      <li><b>Говорите вслух всё</b>: каждое слово и фразу повторяйте за диктором.</li>
      <li>Сначала <b>«Повторение»</b>, потом новый урок. Повторение — это 70 % успеха.</li>
      <li>Ошибки — нормально: задание вернётся в конце урока, а слово — в повторении.</li>
      <li>Тему закрывает тест на 80 %. Не сдали — повторите и попробуйте снова.</li></ol>
      <button class="btn" id="introOk">Понятно, начинаем</button></div>` : ""}
    <div class="card hero">
      <div class="hero-top"><div><div class="kicker">Уровень A1</div><div class="hero-pct">${corePct}%</div></div>
      <div class="hero-meta">${doneAll} из ${LESSONS.length} уроков<br>${learnedCount("w")} слов выучено</div></div>
      <div class="track"><i style="transform:scaleX(${corePct / 100})"></i></div>
      ${nl ? `<button class="btn primary big" id="cont">${doneAll ? "Продолжить" : "Начать"} · ${esc(nl.u.title)} — ${esc(nl.title)}</button>` : `<div class="hero-done">Все уроки пройдены 🎉</div>`}
    </div>
    ${seenCount("w") ? `<div class="card rev-mini" id="revMini"><div><b>${due ? due + " на повторение" : "Повторение сделано ✓"}</b><small>${due ? "Сначала повторите — так слова не забываются" : "Новые слова для повторения появятся завтра"}</small></div><span class="arrow">›</span></div>` : ""}
    ${sect("Основной курс", CORE)}${sect("Моя жизнь — бонусные темы", UNITS.filter(u => u.life))}${sect("Финал", UNITS.filter(u => u.final))}`;
  const io = $("#introOk"); if (io) io.onclick = () => { S.seenIntro = true; save(); render(); };
  const c = $("#cont"); if (c) c.onclick = () => startLesson(nl);
  const rm = $("#revMini"); if (rm) rm.onclick = () => go("review");
  $$(".unit-h").forEach(h => h.onclick = () => { S.open = S.open === h.dataset.u ? "" : h.dataset.u; save(); homeView(); setTimeout(() => { const el = document.getElementById("unit-" + h.dataset.u); if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, 10); });
  $$(".les").forEach(b => b.onclick = () => { const l = LESSON[b.dataset.l]; if (unlocked(l)) startLesson(l); else toast("Сначала пройдите предыдущий урок"); });
  $$(".cheat").forEach(b => b.onclick = e => { e.stopPropagation(); cheatSheet(UNIT[b.dataset.u]); });
}

function unitCard(u) {
  const d = unitDone(u), total = u.lessons.length, open = S.open === u.id || (!S.open && nextLesson() && nextLesson().u === u);
  const firstOpen = unlocked(u.lessons[0]);
  const num = u.final ? "" : u.life ? "Бонус" : "Тема " + (u.n + 1);
  return `<div class="card unit ${d === total ? "complete" : ""} ${firstOpen ? "" : "locked"}" id="unit-${u.id}">
    <div class="unit-h" data-u="${u.id}"><div class="u-ic">${firstOpen ? u.icon : "🔒"}</div>
      <div class="u-txt">${num ? `<div class="kicker">${num}</div>` : ""}<div class="u-t">${esc(u.title)}</div><div class="u-g">${esc(u.goal)}</div></div>
      <div class="u-p">${d === total ? "✓" : d + "/" + total}</div></div>
    ${open ? `<div class="les-list">${u.lessons.map(l => {
      const st = isDone(l.id) ? "done" : unlocked(l) ? "avail" : "lock";
      return `<button class="les ${st}" data-l="${l.id}"><span class="les-ic">${st === "lock" ? "🔒" : st === "done" ? "✓" : l.icon}</span><span>${esc(l.title)}</span>${isDone(l.id) && S.done[l.id].best != null ? `<small>${S.done[l.id].best}%</small>` : ""}</button>`;
    }).join("")}</div>${u.theory ? `<button class="link cheat" data-u="${u.id}">📘 Шпаргалка по теме</button>` : ""}` : ""}
  </div>`;
}

function cheatSheet(u) {
  modal(`<div class="kicker">${u.icon} Шпаргалка</div><h2 class="p-h">${esc(u.title)}</h2>` + u.theory.map(b => `<h3 class="m-h">${esc(b.h)}</h3><div class="theory">${b.t}</div>
    <div class="exs">${(b.ex || []).map(e => `<button class="ex" data-say="${esc(e[0])}"><span class="ex-ic">🔊</span><span><b>${esc(e[0])}</b><small>${esc(e[1])}</small></span></button>`).join("")}</div>`).join("")
    + `<h3 class="m-h">Слова темы</h3><div class="wlist">${u.words.map(wordRow).join("")}</div>`);
}

function reviewView() {
  const due = dueItems(), seen = seenCount("w") + seenCount("p");
  const hard = Object.entries(S.srs).filter(([k, r]) => r.l > 0 && ITEMS.has(k)).sort((a, b) => b[1].l - a[1].l).slice(0, 12).map(([k]) => ITEMS.get(k));
  $("#app").innerHTML = topBar() + `<div class="card hero">
    <div class="kicker">Интервальное повторение</div>
    <div class="hero-pct">${due.length}</div><div class="hero-meta-l">${due.length ? "слов и фраз ждут повторения" : seen ? "на сегодня всё повторено" : "пока нечего повторять — пройдите первый урок"}</div>
    ${due.length ? `<button class="btn primary big" id="revGo">Повторить (${Math.min(15, due.length)})</button>` : seen ? `<button class="btn big" id="revForce">Дополнительная тренировка</button>` : ""}
    </div>
    <div class="card"><p class="muted">Каждое слово возвращается тогда, когда вы начинаете его забывать: через 1 день, 3, 7, 16, 35 дней… Если ошиблись — слово начинает путь заново. Так слова переходят в долгую память.</p>
    <div class="stats3"><div><b>${seen}</b>в работе</div><div><b>${learnedCount("w") + learnedCount("p")}</b>закреплено</div><div><b>${Object.values(S.srs).filter(r => r.s >= 4).length}</b>в долгой памяти</div></div></div>
    ${hard.length ? `<h3 class="sec">Трудные слова</h3><div class="card wlist">${hard.map(wordRow).join("")}</div>` : ""}`;
  const g = $("#revGo"); if (g) g.onclick = () => startReview(false);
  const f = $("#revForce"); if (f) f.onclick = () => startReview(true);
}

function wordRow(it) {
  const r = S.srs[it.k];
  const lvl = r ? Math.min(r.s, 5) : -1;
  return `<button class="wrow" data-say="${esc(it.en)}"><span class="w-en">${esc(it.en)}${it.ipa ? ` <i>[${esc(it.ipa)}]</i>` : ""}</span><span class="w-ru">${esc(it.ru)}</span>
    <span class="dots" title="Сила запоминания">${[0, 1, 2, 3, 4].map(i => `<i class="${i < lvl ? "on" : ""}"></i>`).join("")}</span></button>`;
}

let dictQ = "", dictAll = false;
function dictView() {
  $("#app").innerHTML = topBar() + `<div class="card"><input id="dq" class="type-in" placeholder="Поиск: по-английски или по-русски" value="${esc(dictQ)}">
    <div class="seg"><button data-f="0" class="${dictAll ? "" : "on"}">Мои слова (${seenCount("w") + seenCount("p")})</button><button data-f="1" class="${dictAll ? "on" : ""}">Весь курс (${ITEMS.size})</button></div></div>
    <div id="dlist"></div>`;
  const draw = () => {
    const q = norm(dictQ);
    const out = UNITS.filter(u => !u.final).map(u => {
      const list = [...u.words, ...u.phrases].filter(it => ITEMS.get(it.k) === it && (dictAll || S.srs[it.k]) && (!q || norm(it.en).includes(q) || norm(it.ru).includes(q)));
      return list.length ? `<h3 class="sec">${u.icon} ${esc(u.title)}</h3><div class="card wlist">${list.map(wordRow).join("")}</div>` : "";
    }).join("");
    $("#dlist").innerHTML = out || `<div class="card muted center">${dictAll || q ? "Ничего не найдено" : "Здесь появятся слова из пройденных уроков"}</div>`;
  };
  draw();
  $("#dq").oninput = e => { dictQ = e.target.value; draw(); };
  $$(".seg button").forEach(b => b.onclick = () => { dictAll = b.dataset.f === "1"; dictView(); });
}

function meView() {
  const passed = UNITS.filter(u => isDone(u.lessons[u.lessons.length - 1].id)).length;
  $("#app").innerHTML = topBar() + `<div class="card">
    <div class="stats3"><div><b>${S.xp}</b>опыта</div><div><b>${streakNow()}</b>дней подряд</div><div><b>${passed}</b>тем сдано</div></div>
    <div class="stats3"><div><b>${learnedCount("w")}</b>слов выучено</div><div><b>${learnedCount("p")}</b>фраз</div><div><b>${LESSONS.filter(l => isDone(l.id)).length}</b>уроков</div></div></div>
    <h3 class="sec">Настройки</h3><div class="card set">
    <label>Цель дня<select id="sGoal">${[20, 50, 100, 150].map(v => `<option value="${v}" ${S.goal === v ? "selected" : ""}>${v} опыта ≈ ${Math.round(v / 3)} мин</option>`).join("")}</select></label>
    <label>Скорость речи <span id="rateV">${S.rate.toFixed(2)}</span><input type="range" id="sRate" min="0.5" max="1.2" step="0.05" value="${S.rate}"></label>
    <label>Голос<select id="sVoice"><option value="">Автоматически</option>${VOICES.map(v => `<option ${S.voice === v.name ? "selected" : ""}>${esc(v.name)}</option>`).join("")}</select></label>
    <button class="btn" id="sTest">🔊 Проверить голос</button>
    ${toggle("auto", "Автоозвучка слов")}${toggle("sound", "Звуки ответов")}${SR ? toggle("speakEx", "Задания на произношение (микрофон)") : ""}${toggle("unlockAll", "Открыть все уроки (для тех, кто уже знает основы)")}
    </div>
    <h3 class="sec">Прогресс</h3><div class="card set">
    <p class="muted">Прогресс хранится в этом браузере. Сделайте копию, чтобы перенести на другой телефон или не потерять.</p>
    <button class="btn" id="bExp">⬇ Сохранить копию прогресса</button>
    <label class="btn file">⬆ Загрузить копию<input type="file" id="bImp" accept="application/json,.json" hidden></label>
    <button class="btn danger" id="bReset">Сбросить весь прогресс</button></div>
    ${!TTS ? `<div class="card warn">Этот браузер не умеет озвучивать текст. Откройте сайт в Chrome или Safari.</div>` : ""}
    <p class="muted center small">Курс «С нуля до A1» · ${UNITS.length - 1} тем · ${ITEMS.size} слов и фраз</p>`;
  $("#sGoal").onchange = e => { S.goal = +e.target.value; save(); };
  $("#sRate").oninput = e => { S.rate = +e.target.value; $("#rateV").textContent = S.rate.toFixed(2); save(); };
  $("#sVoice").onchange = e => { S.voice = e.target.value; save(); say("Hello! Nice to meet you."); };
  $("#sTest").onclick = () => say("Hello! My name is Anna. Nice to meet you.");
  $$(".tg input").forEach(i => i.onchange = () => { S[i.dataset.k] = i.checked; save(); });
  $("#bExp").onclick = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: "application/json" }));
    a.download = "english-a1-progress-" + today() + ".json"; a.click();
  };
  $("#bImp").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => { const d = JSON.parse(t); if (!d || typeof d.srs !== "object") throw 0; S = Object.assign(JSON.parse(JSON.stringify(DEF)), d); save(); toast("Прогресс загружен"); render(); })
      .catch(() => toast("Не удалось прочитать файл"));
  };
  $("#bReset").onclick = () => { if (confirm("Удалить весь прогресс? Это нельзя отменить.")) { S = JSON.parse(JSON.stringify(DEF)); save(); render(); } };
}
const toggle = (k, label) => `<label class="tg"><span>${label}</span><input type="checkbox" data-k="${k}" ${S[k] ? "checked" : ""}><i></i></label>`;

function modal(html) {
  const m = $("#modal"); $("#mBody").innerHTML = html; m.hidden = false; $("#mBody").scrollTop = 0;
}
let toastT;
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("show"), 2200); }

/* ========== global events ========== */
document.addEventListener("click", e => {
  const s = e.target.closest("[data-say]"); if (s) { say(s.dataset.say); }
  const sl = e.target.closest("[data-slow]"); if (sl) { say(sl.dataset.slow, true); }
});
$("#tabs").onclick = e => { const b = e.target.closest("button"); if (b) go(b.dataset.tab); };
$("#go").onclick = goClick;
$("#pClose").onclick = () => { if (!P || P.finished || P.i < 2 || confirm("Выйти из урока? Прогресс этого урока не сохранится.")) closePlayer(); };
$("#pAlt").onclick = () => closePlayer();
$("#mClose").onclick = () => { $("#modal").hidden = true; };
$("#modal").onclick = e => { if (e.target.id === "modal") $("#modal").hidden = true; };
document.addEventListener("keydown", e => {
  if (!P) return;
  if (e.key === "Enter" && !$("#go").disabled) { e.preventDefault(); $("#go").click(); return; }
  const st = P.steps[P.i];
  if (st && !P.answered && /^[1-4]$/.test(e.key) && (st.type === "choice" || st.type === "gap") && document.activeElement.tagName !== "INPUT") {
    const b = $$(st.type === "choice" ? ".opt" : ".chip")[+e.key - 1]; if (b) b.click();
  }
});
render();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
