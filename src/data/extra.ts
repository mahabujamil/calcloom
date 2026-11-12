// Template-driven pages: temperature pairs, event countdowns and the GPA calculator,
// in English and Arabic. Text is generated here so every page has real, specific content.
import type { Tool } from './tools';

type Text = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'tableTitle' | 'table' | 'about'>;
type L = 'en' | 'ar';

const n2 = (n: number) => String(Number(n.toFixed(2)));

/* ---------- Temperature pairs ---------- */
type TU = 'c' | 'f' | 'k';
const TN: Record<TU, { en: string; ar: string; sym: string; word: string }> = {
  c: { en: 'Celsius', ar: 'مئوي (سيلسيوس)', sym: '°C', word: 'celsius' },
  f: { en: 'Fahrenheit', ar: 'فهرنهايت', sym: '°F', word: 'fahrenheit' },
  k: { en: 'Kelvin', ar: 'كلفن', sym: 'K', word: 'kelvin' },
};
const toC = (u: TU, v: number) => (u === 'c' ? v : u === 'f' ? ((v - 32) * 5) / 9 : v - 273.15);
const fromC = (u: TU, c: number) => (u === 'c' ? c : u === 'f' ? (c * 9) / 5 + 32 : c + 273.15);
const tconv = (a: TU, b: TU, v: number) => fromC(b, toC(a, v));
const formula: Record<string, string> = {
  cf: 'F = C × 9/5 + 32', fc: 'C = (F − 32) × 5/9', ck: 'K = C + 273.15',
  kc: 'C = K − 273.15', fk: 'K = (F − 32) × 5/9 + 273.15', kf: 'F = (K − 273.15) × 9/5 + 32',
};
const sample: Record<TU, number[]> = {
  c: [-40, -10, 0, 10, 20, 25, 30, 37, 50, 100],
  f: [-40, 0, 32, 50, 68, 77, 86, 98.6, 100, 212],
  k: [0, 100, 200, 250, 273.15, 293.15, 300, 310, 373.15],
};
const exampleVal: Record<TU, number> = { c: 20, f: 68, k: 300 };
export const tempPairs: [TU, TU][] = [['c', 'f'], ['f', 'c'], ['c', 'k'], ['k', 'c'], ['f', 'k'], ['k', 'f']];
export const tempSlug = (a: TU, b: TU) => `${TN[a].word}-to-${TN[b].word}`;

function tempText(a: TU, b: TU, lang: L): Text {
  const A = TN[a], B = TN[b], key = a + b, fm = formula[key];
  const ex = exampleVal[a], exr = n2(tconv(a, b, ex));
  const rows = sample[a].map((v) => [`${n2(v)} ${A.sym}`, `${n2(tconv(a, b, v))} ${B.sym}`]);
  const cfPair = (a === 'c' && b === 'f') || (a === 'f' && b === 'c');
  const absZero = n2(fromC(b, -273.15));
  if (lang === 'ar') {
    return {
      name: `${A.ar} إلى ${B.ar}`,
      title: `تحويل ${A.ar} إلى ${B.ar} (${A.sym} إلى ${B.sym}) مع الجدول`,
      description: `محوّل ${A.ar} إلى ${B.ar} مجاني وفوري. حوّل ${A.sym} إلى ${B.sym} بالمعادلة ${fm} مع جدول درجات شائعة وأمثلة محلولة.`,
      h1: `محوّل ${A.ar} إلى ${B.ar}`,
      intro: `حوّل درجة الحرارة من ${A.ar} إلى ${B.ar} فوراً. المعادلة: ${fm}.`,
      steps: [`أدخل درجة الحرارة بوحدة ${A.ar}.`, 'اضغط زر التبديل إذا أردت التحويل بالاتجاه المعاكس.', `اقرأ النتيجة بوحدة ${B.ar} فوراً.`],
      faq: [
        { q: `كيف أحوّل ${A.ar} إلى ${B.ar}؟`, a: `استخدم المعادلة ${fm}. مثلاً ${n2(ex)} ${A.sym} تساوي ${exr} ${B.sym}.` },
        { q: `كم تساوي ${n2(ex)} ${A.sym} بوحدة ${B.ar}؟`, a: `${n2(ex)} ${A.sym} = ${exr} ${B.sym}.` },
        cfPair
          ? { q: 'متى تتساوى قراءة المئوي والفهرنهايت؟', a: 'عند −40 درجة. −40°م تساوي −40°ف تماماً.' }
          : { q: `كم يساوي الصفر المطلق بوحدة ${B.ar}؟`, a: `الصفر المطلق (0 كلفن) يساوي ${absZero} ${B.sym}.` },
      ],
      about: {
        title: `معادلة تحويل ${A.ar} إلى ${B.ar}`,
        paras: [
          `لتحويل درجة الحرارة من ${A.ar} (${A.sym}) إلى ${B.ar} (${B.sym}) استخدم المعادلة: ${fm}.`,
          `مثال محلول: لتحويل ${n2(ex)} ${A.sym}، طبّق المعادلة فتحصل على ${exr} ${B.sym}.`,
        ],
      },
      tableTitle: `جدول تحويل ${A.ar} إلى ${B.ar}`,
      table: { head: [A.sym, B.sym], rows },
    };
  }
  return {
    name: `${A.en} to ${B.en}`,
    title: `${A.en} to ${B.en} Converter (${A.sym} to ${B.sym}) + Table`,
    description: `Free ${A.en} to ${B.en} converter. Convert ${A.sym} to ${B.sym} instantly with the formula ${fm}, a quick conversion table and worked examples.`,
    h1: `${A.en} to ${B.en} Converter`,
    intro: `Convert ${A.en} to ${B.en} instantly. Formula: ${fm}.`,
    steps: [`Enter the temperature in ${A.en}.`, 'Use the swap button to convert the other way.', `Read the result in ${B.en} right away.`],
    faq: [
      { q: `How do you convert ${A.en} to ${B.en}?`, a: `Use the formula ${fm}. For example, ${n2(ex)} ${A.sym} is ${exr} ${B.sym}.` },
      { q: `What is ${n2(ex)} ${A.sym} in ${B.en}?`, a: `${n2(ex)} ${A.sym} = ${exr} ${B.sym}.` },
      cfPair
        ? { q: 'At what temperature are Celsius and Fahrenheit equal?', a: 'At −40 degrees. −40°C is exactly −40°F.' }
        : { q: `What is absolute zero in ${B.en}?`, a: `Absolute zero (0 K) is ${absZero} ${B.sym}.` },
    ],
    about: {
      title: `${A.en} to ${B.en} formula`,
      paras: [
        `To convert a temperature from ${A.en} (${A.sym}) to ${B.en} (${B.sym}), use the formula: ${fm}.`,
        `Worked example: to convert ${n2(ex)} ${A.sym}, apply the formula and you get ${exr} ${B.sym}.`,
      ],
    },
    tableTitle: `${A.en} to ${B.en} conversion table`,
    table: { head: [A.sym, B.sym], rows },
  };
}

/* ---------- Event countdowns ---------- */
export type CountdownSpec =
  | { kind: 'fixed'; m: number; d: number }
  | { kind: 'nth'; m: number; wd: number; n: number }
  | { kind: 'black' }
  | { kind: 'list'; dates: string[] };

interface Ev { id: string; en: string; ar: string; spec: CountdownSpec; note?: boolean }
const EVENTS: Ev[] = [
  { id: 'christmas', en: 'Christmas', ar: 'الكريسماس (عيد الميلاد المجيد)', spec: { kind: 'fixed', m: 12, d: 25 } },
  { id: 'new-year', en: 'New Year', ar: 'رأس السنة الميلادية', spec: { kind: 'fixed', m: 1, d: 1 } },
  { id: 'halloween', en: 'Halloween', ar: 'الهالوين', spec: { kind: 'fixed', m: 10, d: 31 } },
  { id: 'valentines-day', en: "Valentine's Day", ar: 'عيد الحب', spec: { kind: 'fixed', m: 2, d: 14 } },
  { id: 'thanksgiving', en: 'Thanksgiving', ar: 'عيد الشكر (الولايات المتحدة)', spec: { kind: 'nth', m: 11, wd: 4, n: 4 } },
  { id: 'black-friday', en: 'Black Friday', ar: 'الجمعة السوداء', spec: { kind: 'black' } },
  { id: 'easter', en: 'Easter', ar: 'عيد الفصح', spec: { kind: 'list', dates: ['2027-03-28', '2028-04-16', '2029-04-01', '2030-04-21'] } },
  { id: 'ramadan', en: 'Ramadan', ar: 'رمضان', spec: { kind: 'list', dates: ['2027-02-08', '2028-01-28', '2029-01-16'] }, note: true },
  { id: 'eid-al-fitr', en: 'Eid al-Fitr', ar: 'عيد الفطر', spec: { kind: 'list', dates: ['2027-03-09', '2028-02-26', '2029-02-14'] }, note: true },
  { id: 'eid-al-adha', en: 'Eid al-Adha', ar: 'عيد الأضحى', spec: { kind: 'list', dates: ['2027-05-16', '2028-05-05', '2029-04-24'] }, note: true },
];
export const countdownSlug = (id: string) => `days-until-${id}`;

const nthWeekday = (y: number, m: number, wd: number, n: number) => {
  const first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
  return new Date(Date.UTC(y, m - 1, 1 + ((wd - first + 7) % 7) + (n - 1) * 7));
};
function dateIn(spec: CountdownSpec, y: number): Date | null {
  if (spec.kind === 'fixed') return new Date(Date.UTC(y, spec.m - 1, spec.d));
  if (spec.kind === 'nth') return nthWeekday(y, spec.m, spec.wd, spec.n);
  if (spec.kind === 'black') {
    const t = nthWeekday(y, 11, 4, 4);
    return new Date(t.getTime() + 86400000);
  }
  const hit = spec.dates.find((s) => s.startsWith(String(y)));
  return hit ? new Date(hit + 'T00:00:00Z') : null;
}
const WD = { en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], ar: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'] };
const MN = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};
const fmtDate = (d: Date, lang: L) =>
  lang === 'ar'
    ? `${WD.ar[d.getUTCDay()]} ${d.getUTCDate()} ${MN.ar[d.getUTCMonth()]} ${d.getUTCFullYear()}`
    : `${WD.en[d.getUTCDay()]}, ${MN.en[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;

const rule = (e: Ev, lang: L) => {
  const s = e.spec;
  if (lang === 'ar') {
    if (s.kind === 'fixed') return `يصادف ${s.d} ${MN.ar[s.m - 1]} من كل عام`;
    if (s.kind === 'nth') return 'يصادف الخميس الرابع من نوفمبر كل عام';
    if (s.kind === 'black') return 'يصادف الجمعة التي تلي عيد الشكر، أي الجمعة الأخيرة تقريباً من نوفمبر';
    return e.note ? 'يعتمد على رؤية الهلال، لذلك التواريخ المذكورة متوقعة وقد تختلف بيوم' : 'يتغير تاريخه كل عام';
  }
  if (s.kind === 'fixed') return `It falls on ${MN.en[s.m - 1]} ${s.d} every year`;
  if (s.kind === 'nth') return 'It falls on the fourth Thursday of November every year';
  if (s.kind === 'black') return 'It is the Friday after Thanksgiving, in late November';
  return e.note ? 'It depends on the moon sighting, so the dates shown are expected dates and can differ by a day' : 'Its date changes every year';
};

function countdownText(e: Ev, lang: L): Text {
  const years = e.spec.kind === 'list' ? e.spec.dates.map((s) => +s.slice(0, 4)) : [2027, 2028, 2029, 2030, 2031];
  const rows = years.map((y) => {
    const d = dateIn(e.spec, y)!;
    return lang === 'ar'
      ? [String(y), `${d.getUTCDate()} ${MN.ar[d.getUTCMonth()]}`, WD.ar[d.getUTCDay()]]
      : [String(y), `${MN.en[d.getUTCMonth()]} ${d.getUTCDate()}`, WD.en[d.getUTCDay()]];
  });
  const first = dateIn(e.spec, years[0])!;
  const second = dateIn(e.spec, years[1])!;
  if (lang === 'ar') {
    return {
      name: `كم باقي على ${e.ar}`,
      title: [`كم باقي على ${e.ar}؟ عدّاد تنازلي مباشر`, `كم باقي على ${e.ar}؟ عدّاد تنازلي`].find((x) => x.length <= 60) ?? `كم باقي على ${e.ar}؟`,
      description: `عدّاد تنازلي مباشر لـ${e.ar}: الأيام والساعات والدقائق والثواني المتبقية، مع تاريخه في السنوات القادمة. يتحدّث تلقائياً.`,
      h1: `كم باقي على ${e.ar}؟`,
      intro: `عدّاد مباشر يُظهر الوقت المتبقي حتى ${e.ar} بالأيام والساعات والدقائق والثواني.`,
      steps: ['افتح الصفحة وسيبدأ العدّاد تلقائياً.', 'اقرأ عدد الأيام المتبقية، وتحته الأسابيع والساعات والدقائق.', 'استخدم جدول التواريخ لمعرفة موعده في السنوات القادمة.'],
      faq: [
        { q: `متى ${e.ar}؟`, a: `${rule(e, 'ar')}. في ${years[0]} يصادف ${fmtDate(first, 'ar')}، وفي ${years[1]} يصادف ${fmtDate(second, 'ar')}.` },
        { q: `كم أسبوعاً باقي على ${e.ar}؟`, a: 'يعرض العدّاد الأسابيع والأيام المتبقية تحت عدد الأيام. للحساب اليدوي اقسم عدد الأيام على 7.' },
        { q: 'هل العدّاد دقيق؟', a: 'يعتمد على ساعة جهازك وتاريخه، ويحسب حتى بداية يوم المناسبة بتوقيتك المحلي.' },
      ],
      about: {
        title: `متى يصادف ${e.ar}؟`,
        paras: [`${rule(e, 'ar')}. أدناه جدول بتواريخه في السنوات القادمة مع اليوم من الأسبوع.`],
      },
      tableTitle: `تاريخ ${e.ar} في السنوات القادمة`,
      table: { head: ['السنة', 'التاريخ', 'اليوم'], rows },
    };
  }
  return {
    name: `Days Until ${e.en}`,
    title: `How Many Days Until ${e.en}? Live Countdown`,
    description: `Live countdown to ${e.en}: days, hours, minutes and seconds left, plus the date of ${e.en} for the next few years. Updates automatically.`,
    h1: `How Many Days Until ${e.en}?`,
    intro: `A live countdown showing the time left until ${e.en} in days, hours, minutes and seconds.`,
    steps: ['Open the page and the countdown starts by itself.', 'Read the days left, with weeks, hours and minutes below.', 'Use the date table to see when it falls in the coming years.'],
    faq: [
      { q: `When is ${e.en}?`, a: `${rule(e, 'en')}. In ${years[0]} it is ${fmtDate(first, 'en')}, and in ${years[1]} it is ${fmtDate(second, 'en')}.` },
      { q: `How many weeks until ${e.en}?`, a: 'The countdown shows the weeks and days left under the day count. To work it out by hand, divide the number of days by 7.' },
      { q: 'How accurate is the countdown?', a: 'It uses your device clock and date, and counts to the start of the day in your local time zone.' },
    ],
    about: {
      title: `When is ${e.en}?`,
      paras: [`${rule(e, 'en')}. The table below lists its date for the coming years, with the day of the week.`],
    },
    tableTitle: `Date of ${e.en} in the coming years`,
    table: { head: ['Year', 'Date', 'Weekday'], rows },
  };
}

/* ---------- GPA calculator ---------- */
const GRADES: [string, number][] = [['A+', 4], ['A', 4], ['A-', 3.7], ['B+', 3.3], ['B', 3], ['B-', 2.7], ['C+', 2.3], ['C', 2], ['C-', 1.7], ['D+', 1.3], ['D', 1], ['D-', 0.7], ['F', 0]];
export const gradeScale = GRADES;
const gpaEn: Text = {
  name: 'GPA Calculator',
  title: 'GPA Calculator: Semester and Cumulative GPA (4.0 Scale)',
  description: 'Free GPA calculator. Add your courses, grades and credits to get your semester GPA, or add your current GPA to find your new cumulative GPA on the 4.0 scale.',
  h1: 'GPA Calculator',
  intro: 'Add each course with its letter grade and credit hours to see your GPA on the 4.0 scale. Add your current GPA to get a cumulative result.',
  steps: ['Pick a letter grade and enter the credit hours for each course.', 'Add or remove rows to match your semester.', 'Optional: enter your current GPA and completed credits to get your cumulative GPA.'],
  faq: [
    { q: 'How do you calculate GPA?', a: 'Multiply each course grade points by its credit hours, add them up, then divide by the total credit hours. For example, an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course give (4.0 × 3 + 3.0 × 4) ÷ 7 = 3.43.' },
    { q: 'How do I calculate my cumulative GPA?', a: 'Combine your earlier quality points (current GPA × completed credits) with the new semester quality points, then divide by the total credits. Enter your current GPA and credits in the optional fields and the calculator does it for you.' },
    { q: 'Does an A+ count as 4.0 or 4.3?', a: 'Most US schools count A+ as 4.0, and this calculator does the same. A few schools use 4.3, so check your school grading policy.' },
    { q: 'Is this a weighted GPA calculator?', a: 'No. It uses the standard unweighted 4.0 scale. Some schools add extra points for honors or AP courses, so your official GPA can be higher.' },
  ],
  about: {
    title: 'How GPA is calculated',
    paras: [
      'GPA, or grade point average, turns letter grades into numbers and averages them, weighting each course by its credit hours. A 4-credit course counts more than a 2-credit one.',
      'The formula is: GPA = sum of (grade points × credits) ÷ sum of credits. The table below shows the grade points used by this calculator.',
    ],
  },
  tableTitle: 'Letter grade to grade points (4.0 scale)',
  table: { head: ['Letter grade', 'Grade points'], rows: GRADES.map(([g, p]) => [g, p.toFixed(1)]) },
};
const gpaAr: Text = {
  name: 'حاسبة المعدل التراكمي GPA',
  title: 'حساب المعدل التراكمي GPA: الفصلي والتراكمي (من 4.0)',
  description: 'حاسبة معدل GPA مجانية. أضف موادك ودرجاتها وساعاتها لتعرف معدلك الفصلي، أو أضف معدلك الحالي لتحسب معدلك التراكمي الجديد على مقياس 4.0.',
  h1: 'حاسبة المعدل التراكمي GPA',
  intro: 'أضف كل مادة مع تقديرها وساعاتها المعتمدة لتعرف معدلك على مقياس 4.0. وأضف معدلك الحالي لتحصل على المعدل التراكمي.',
  steps: ['اختر تقدير كل مادة وأدخل ساعاتها المعتمدة.', 'أضف صفوفاً أو احذفها بحسب موادك.', 'اختياري: أدخل معدلك الحالي وساعاتك المنجزة لتحصل على المعدل التراكمي.'],
  faq: [
    { q: 'كيف يُحسب معدل GPA؟', a: 'اضرب نقاط كل مادة في ساعاتها المعتمدة، اجمعها، ثم اقسم على مجموع الساعات. مثلاً تقدير A (4.0) في مادة 3 ساعات وتقدير B (3.0) في مادة 4 ساعات يعطي (4.0 × 3 + 3.0 × 4) ÷ 7 = 3.43.' },
    { q: 'كيف أحسب المعدل التراكمي؟', a: 'اجمع نقاطك السابقة (معدلك الحالي × ساعاتك المنجزة) مع نقاط الفصل الجديد، ثم اقسم على مجموع الساعات. أدخل معدلك وساعاتك في الخانتين الاختياريتين وستحسبها الحاسبة.' },
    { q: 'هل تقدير A+ يساوي 4.0 أم 4.3؟', a: 'تعتمد أغلب الجامعات الأمريكية 4.0 لتقدير A+، وهذا ما تستخدمه الحاسبة. بعض الجامعات تعتمد 4.3، فراجع نظام جامعتك.' },
    { q: 'هل هذه حاسبة معدل موزون؟', a: 'لا. تستخدم المقياس القياسي 4.0 دون أوزان إضافية. بعض المدارس تمنح نقاطاً إضافية لمواد الشرف، فقد يكون معدلك الرسمي أعلى.' },
  ],
  about: {
    title: 'كيف يُحسب المعدل GPA',
    paras: [
      'المعدل التراكمي (GPA) يحوّل التقديرات الحرفية إلى أرقام ويحسب متوسطها مع ترجيح كل مادة بساعاتها المعتمدة، فمادة من 4 ساعات تؤثر أكثر من مادة من ساعتين.',
      'المعادلة: GPA = مجموع (نقاط التقدير × الساعات) ÷ مجموع الساعات. يبيّن الجدول التالي النقاط التي تعتمدها الحاسبة.',
    ],
  },
  tableTitle: 'التقدير الحرفي ونقاطه (مقياس 4.0)',
  table: { head: ['التقدير', 'النقاط'], rows: GRADES.map(([g, p]) => [g, p.toFixed(1)]) },
};


/* ---------- Currency converter ---------- */
const fxEn: Text = {
  name: 'Currency Converter',
  title: 'Currency Converter: Live Exchange Rates for 37 Currencies',
  description: 'Free currency converter with current exchange rates. Convert US dollars, euros, pounds, Egyptian pounds, Saudi riyals, Jordanian dinars and 30 more currencies.',
  h1: 'Currency Converter',
  intro: 'Convert between 37 world currencies using current exchange rates. Rates load fresh each time you open the page.',
  steps: ['Enter the amount.', 'Pick the currency you convert from and the one you convert to.', 'Read the result and the exchange rate used. Use the swap button to reverse.'],
  faq: [
    { q: 'Where do the exchange rates come from?', a: 'The rates come from a public exchange-rate data service that updates once a day. The date of the last update is shown under every result.' },
    { q: 'Are these the rates my bank or exchange office will give me?', a: 'No. These are mid-market reference rates. Banks, cards and exchange offices add a margin or a fee, so the amount you actually get is usually a little lower.' },
    { q: 'How do I convert US dollars to another currency?', a: 'Enter the amount in US dollars, pick USD as the From currency and the target currency as To. The converter multiplies the amount by the current rate.' },
    { q: 'Why does the result change over time?', a: 'Exchange rates move with the market. Open the page again later to see the latest rate.' },
  ],
  about: {
    title: 'How currency conversion works',
    paras: [
      'To convert between two currencies, multiply the amount by the exchange rate: amount in the target currency = amount × rate. The rate tells you how many units of the target currency one unit of the source currency buys.',
      'This converter uses US dollars as a common base. It divides the target currency rate by the source currency rate, so it works between any two of the 37 supported currencies.',
    ],
  },
};
const fxAr: Text = {
  name: 'محوّل العملات',
  title: 'محوّل العملات: أسعار صرف حالية لـ37 عملة',
  description: 'محوّل عملات مجاني بأسعار صرف حالية. حوّل الدولار واليورو والجنيه الإسترليني والجنيه المصري والريال السعودي والدينار الأردني و30 عملة أخرى.',
  h1: 'محوّل العملات',
  intro: 'حوّل بين 37 عملة عالمية بأسعار الصرف الحالية. تُحمَّل الأسعار من جديد كلما فتحت الصفحة.',
  steps: ['أدخل المبلغ.', 'اختر العملة التي تحوّل منها والعملة التي تحوّل إليها.', 'اقرأ النتيجة وسعر الصرف المستخدم، واستخدم زر التبديل للعكس.'],
  faq: [
    { q: 'من أين تأتي أسعار الصرف؟', a: 'تأتي الأسعار من خدمة بيانات عامة لأسعار الصرف تُحدَّث مرة كل يوم. يظهر تاريخ آخر تحديث تحت كل نتيجة.' },
    { q: 'هل هذه الأسعار هي ما سيعطيني إياه البنك أو الصرّاف؟', a: 'لا. هذه أسعار مرجعية متوسطة للسوق. البنوك والبطاقات ومكاتب الصرافة تضيف هامشاً أو رسوماً، فالمبلغ الذي تحصل عليه فعلاً يكون أقل قليلاً عادة.' },
    { q: 'كيف أحوّل الدولار إلى عملة أخرى؟', a: 'أدخل المبلغ بالدولار، واختر USD في خانة «من» والعملة المطلوبة في خانة «إلى». يضرب المحوّل المبلغ في سعر الصرف الحالي.' },
    { q: 'لماذا تتغير النتيجة مع الوقت؟', a: 'أسعار الصرف تتحرك مع السوق. افتح الصفحة لاحقاً لترى أحدث سعر.' },
  ],
  about: {
    title: 'كيف يعمل تحويل العملات',
    paras: [
      'لتحويل مبلغ بين عملتين اضرب المبلغ في سعر الصرف: المبلغ بالعملة المطلوبة = المبلغ × السعر. السعر يخبرك كم وحدة من العملة المطلوبة تشتريها وحدة واحدة من العملة الأصلية.',
      'يستخدم المحوّل الدولار الأمريكي أساساً مشتركاً، فيقسم سعر العملة المطلوبة على سعر العملة الأصلية، ولذلك يعمل بين أي عملتين من العملات الـ37.',
    ],
  },
};

/* ---------- exports ---------- */
const tempSlugs = tempPairs.map(([a, b]) => tempSlug(a, b));
const evSlugs = EVENTS.map((e) => countdownSlug(e.id));

const tempTools: Tool[] = tempPairs.map(([a, b]) => ({
  slug: tempSlug(a, b),
  kind: 'pair',
  temp: { from: a, to: b },
  ...tempText(a, b, 'en'),
  related: [...tempSlugs.filter((s) => s !== tempSlug(a, b)).slice(0, 2), 'temperature-converter'],
})) as Tool[];

const cdTools: Tool[] = EVENTS.map((e) => {
  const slug = countdownSlug(e.id);
  const near = evSlugs.filter((s) => s !== slug);
  const i = EVENTS.findIndex((x) => x.id === e.id);
  return {
    slug,
    kind: 'pair',
    countdown: e.spec,
    ...countdownText(e, 'en'),
    related: [near[i % near.length], near[(i + 1) % near.length], 'days-between-dates-calculator'],
  } as Tool;
});

const fxTool: Tool = {
  slug: 'currency-converter',
  kind: 'tool',
  ...fxEn,
  related: ['percentage-calculator', 'length-converter', 'weight-converter'],
};

const gpaTool: Tool = {
  slug: 'gpa-calculator',
  kind: 'tool',
  ...gpaEn,
  related: ['percentage-calculator', 'age-calculator', 'discount-calculator'],
};

export const extraTools: Tool[] = [fxTool, gpaTool, ...tempTools, ...cdTools];
export const extraAr: Record<string, Text> = {
  'gpa-calculator': gpaAr,
  'currency-converter': fxAr,
  ...Object.fromEntries(tempPairs.map(([a, b]) => [tempSlug(a, b), tempText(a, b, 'ar')])),
  ...Object.fromEntries(EVENTS.map((e) => [countdownSlug(e.id), countdownText(e, 'ar')])),
};
export const extraSlugs = { temp: tempSlugs, countdown: evSlugs };
