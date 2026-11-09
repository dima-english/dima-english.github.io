/**
 * Сервер курса «English A1»: вход по PIN, прогресс и соревнование Ани и Димы.
 * Скрипт привязан к Google-таблице «English A1 — соревнование» на аккаунте Димы.
 * Листы создаются сами при первом обращении:
 *   «Ученики»  — сводка: опыт, слова, темы, огонёк (её видно в соревновании)
 *   «Недели»   — опыт каждого за каждую неделю (для кубков)
 *   «Прогресс» — полный прогресс приложения (служебные данные, не редактировать)
 *   «Доступ»   — зашифрованные PIN-коды. Чтобы сбросить PIN, очистите ячейку PIN
 *                у нужного человека — при следующем входе он придумает новый.
 * Развёртывание: Развернуть → Новое развёртывание → Веб-приложение,
 *   «Выполнять как: Я», «У кого есть доступ: Все».
 */
const USERS = { dima: "Дима", anya: "Аня" };
const SALT = "english-a1-pin";
const MAX_FAILS = 5;
const LOCK_MINUTES = 15;
const CHUNK = 40000;

const ACCESS_HEAD = ["Имя", "PIN (зашифрован) — очистите, чтобы сбросить", "Входы (служебное)", "Ошибок подряд", "Блок до"];
const STUDENT_HEAD = ["Имя", "Опыт", "Опыт за неделю", "Неделя", "Слов выучено", "Фраз выучено", "Тем сдано", "Огонёк", "Рекорд огонька", "Сейчас учит", "Обновлено", "Сводка (служебное)"];
const WEEK_HEAD = ["Неделя", "Дима (опыт)", "Аня (опыт)", "Дима (дней с целью)", "Аня (дней с целью)"];
const STATE_HEAD = ["Имя", "Обновлено", "Данные (служебное, не редактировать)"];

function doGet() { return out({ ok: true, service: "english-a1" }); }

function doPost(e) {
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: "bad_request" }); }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return out({ ok: false, error: "busy" });
  try {
    if (req.action === "ping") return out({ ok: true });
    if (!USERS[req.name]) return out({ ok: false, error: "unknown_user" });
    if (req.action === "status") return out({ ok: true, hasPin: !!access(req.name).hash });
    if (req.action === "login") return out(login(req));
    if (!checkToken(req.name, req.token)) return out({ ok: false, error: "auth" });
    if (req.action === "load") return out({ ok: true, state: loadState(req.name), board: board() });
    if (req.action === "save") return out(save(req));
    if (req.action === "board") return out({ ok: true, board: board() });
    return out({ ok: false, error: "unknown_action" });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  } finally {
    lock.releaseLock();
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ---------- листы ---------- */
function sheet(name, head) {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight("bold");
    sh.setFrozenRows(1);
    sh.getRange("A:A").setNumberFormat("@");
  } else if (sh.getLastColumn() < head.length) {
    // лист от прошлой версии — дописываем новые столбцы в шапку
    sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight("bold");
  }
  return sh;
}
function rowOf(sh, key) {
  const last = sh.getLastRow();
  if (last < 2) return 0;
  const vals = sh.getRange(2, 1, last - 1, 1).getValues();
  for (let i = 0; i < vals.length; i++) if (String(vals[i][0]) === key) return i + 2;
  return 0;
}
function ensureRow(sh, key) {
  let r = rowOf(sh, key);
  if (!r) { sh.appendRow([key]); r = sh.getLastRow(); }
  return r;
}
const num = v => Math.max(0, Math.round(Number(v) || 0));

/* ---------- PIN и вход ---------- */
function access(name) {
  const sh = sheet("Доступ", ACCESS_HEAD);
  const r = ensureRow(sh, USERS[name]);
  const v = sh.getRange(r, 1, 1, 5).getValues()[0];
  return { sh, r, hash: String(v[1] || ""), tokens: String(v[2] || "").split(",").filter(Boolean), fails: Number(v[3]) || 0, until: Number(v[4]) || 0 };
}
function hashPin(name, pin) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, SALT + ":" + name + ":" + pin, Utilities.Charset.UTF_8);
  return bytes.map(b => ((b + 256) % 256).toString(16).padStart(2, "0")).join("");
}
function login(req) {
  const pin = String(req.pin || "");
  if (!/^\d{4}$/.test(pin)) return { ok: false, error: "bad_pin_format" };
  const a = access(req.name), now = Date.now();
  if (a.until > now) return { ok: false, error: "locked", minutes: Math.ceil((a.until - now) / 60000) };
  const h = hashPin(req.name, pin);
  let created = false;
  if (!a.hash) {
    if (!req.create) return { ok: false, error: "no_pin" };
    a.sh.getRange(a.r, 2).setValue(h);
    a.hash = h; created = true;
  }
  if (a.hash !== h) {
    const fails = a.fails + 1;
    if (fails >= MAX_FAILS) {
      a.sh.getRange(a.r, 4, 1, 2).setValues([[0, now + LOCK_MINUTES * 60000]]);
      return { ok: false, error: "locked", minutes: LOCK_MINUTES };
    }
    a.sh.getRange(a.r, 4, 1, 2).setValues([[fails, ""]]);
    return { ok: false, error: "wrong_pin", left: MAX_FAILS - fails };
  }
  const token = Utilities.getUuid();
  a.sh.getRange(a.r, 3, 1, 3).setValues([[[token].concat(a.tokens).slice(0, 6).join(","), 0, ""]]);
  return { ok: true, token, created, state: loadState(req.name), board: board() };
}
function checkToken(name, token) {
  return !!token && access(name).tokens.indexOf(String(token)) >= 0;
}

/* ---------- прогресс ---------- */
function loadState(name) {
  const sh = sheet("Прогресс", STATE_HEAD);
  const r = rowOf(sh, USERS[name]);
  if (!r) return null;
  const cols = sh.getLastColumn() - 2;
  if (cols < 1) return null;
  const json = sh.getRange(r, 3, 1, cols).getValues()[0].map(c => String(c || "").replace(/^~/, "")).join("");
  if (!json) return null;
  try { return JSON.parse(json); } catch (e) { return null; }
}
function saveState(name, json) {
  const sh = sheet("Прогресс", STATE_HEAD);
  const r = ensureRow(sh, USERS[name]);
  const parts = [];
  for (let i = 0; i < json.length; i += CHUNK) parts.push("~" + json.slice(i, i + CHUNK));
  const last = sh.getLastColumn();
  if (last > 2) sh.getRange(r, 3, 1, last - 2).clearContent();
  const range = sh.getRange(r, 1, 1, 2 + parts.length);
  range.setNumberFormat("@");
  range.setValues([[USERS[name], new Date().toISOString()].concat(parts)]);
}
function save(req) {
  const s = req.summary || {};
  const st = sheet("Ученики", STUDENT_HEAD);
  const r = ensureRow(st, USERS[req.name]);
  st.getRange(r, 1, 1, STUDENT_HEAD.length).setValues([[
    USERS[req.name], num(s.xp), num(s.wkXp), String(s.wk || ""), num(s.words), num(s.phrases), num(s.units),
    num(s.streak), num(s.best), String(s.current || "").slice(0, 120), new Date(),
    "~" + JSON.stringify(s).slice(0, 4000)
  ]]);
  if (/^\d{4}-W\d{2}$/.test(String(s.wk || ""))) {
    const wk = sheet("Недели", WEEK_HEAD);
    const wr = ensureRow(wk, s.wk);
    const dima = req.name === "dima";
    wk.getRange(wr, dima ? 2 : 3).setValue(num(s.wkXp));
    wk.getRange(wr, dima ? 4 : 5).setValue(num(s.daysMet));
  }
  if (req.state) {
    const json = JSON.stringify(req.state);
    if (json.length < 600000) saveState(req.name, json);
  }
  return { ok: true, board: board() };
}

/* ---------- соревнование ---------- */
function board() {
  const st = sheet("Ученики", STUDENT_HEAD);
  const rows = st.getLastRow() > 1 ? st.getRange(2, 1, st.getLastRow() - 1, STUDENT_HEAD.length).getValues() : [];
  const users = {};
  Object.keys(USERS).forEach(k => {
    const v = rows.find(x => x[0] === USERS[k]) || [];
    let s = null;
    try { s = v[11] ? JSON.parse(String(v[11]).replace(/^~/, "")) : null; } catch (e) {}
    users[k] = {
      name: USERS[k], xp: num(v[1]), wkXp: num(v[2]), wk: String(v[3] || ""), words: num(v[4]), phrases: num(v[5]),
      units: num(v[6]), streak: num(v[7]), best: num(v[8]), current: String(v[9] || ""),
      updated: v[10] instanceof Date ? v[10].getTime() : 0, s
    };
  });
  const wk = sheet("Недели", WEEK_HEAD);
  const weeks = wk.getLastRow() > 1
    ? wk.getRange(2, 1, wk.getLastRow() - 1, 5).getValues().map(v => ({ wk: String(v[0]), dima: num(v[1]), anya: num(v[2]), dimaDays: num(v[3]), anyaDays: num(v[4]) }))
    : [];
  return { users, weeks };
}
