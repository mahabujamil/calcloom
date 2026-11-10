// Generates the converter tools (one page per category and one per popular pair)
// in English and Arabic from the unit data.
import type { Tool } from './tools';
import { ucats, pairs, ucat, unit, pairSlug, type Unit } from './units';

type Text = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'tableTitle' | 'table' | 'about'>;

const num = (n: number) =>
  Number(n.toPrecision(7)).toLocaleString('en-US', { maximumFractionDigits: 10 });
const ratio = (a: Unit, b: Unit) => a.f / b.f;
const rows = (a: Unit, b: Unit) =>
  [1, 2, 5, 10, 20, 50, 100, 500, 1000].map((v) => [num(v), num(v * ratio(a, b))]);

function pairText(cat: string, fromId: string, toId: string, lang: 'en' | 'ar'): Text {
  const a = unit(cat, fromId), b = unit(cat, toId);
  const r = ratio(a, b), inv = 1 / r;
  if (lang === 'ar') {
    return {
      name: `${a.ar} إلى ${b.ar}`,
      title: (/[/(]/.test(a.ar + b.ar) ? ([] as string[]) : [`${a.ar} كم ${b.ar}؟ تحويل ${a.ar} إلى ${b.ar} (${a.sym} إلى ${b.sym})`, `${a.ar} كم ${b.ar}؟ تحويل ${a.ar} إلى ${b.ar} مع الجدول`]).concat([`تحويل ${a.ar} إلى ${b.ar} (${a.sym} إلى ${b.sym}) مع الجدول`]).find((x) => x.length <= 62) ?? `تحويل ${a.ar} إلى ${b.ar}`,
      description: `محوّل ${a.ar} إلى ${b.ar} مجاني وفوري. حوّل ${a.sym} إلى ${b.sym} بدقة، مع المعادلة (1 ${a.sym} = ${num(r)} ${b.sym}) وجدول تحويل سريع.`,
      h1: `محوّل ${a.ar} إلى ${b.ar}`,
      intro: `حوّل ${a.ar} إلى ${b.ar} فوراً. 1 ${a.sym} = ${num(r)} ${b.sym}.`,
      steps: [`أدخل القيمة بوحدة ${a.ar}.`, `اضغط زر التبديل إذا أردت التحويل بالاتجاه المعاكس.`, `اقرأ النتيجة بوحدة ${b.ar} فوراً.`],
      faq: [
        { q: `كم ${b.ar} في 1 ${a.ar}؟`, a: `1 ${a.ar} (${a.sym}) يساوي ${num(r)} ${b.ar} (${b.sym}).` },
        { q: `كيف أحوّل ${a.ar} إلى ${b.ar}؟`, a: `اضرب القيمة بوحدة ${a.sym} في ${num(r)}. مثلاً 10 ${a.sym} × ${num(r)} = ${num(10 * r)} ${b.sym}.` },
        { q: `كيف أحوّل ${b.ar} إلى ${a.ar}؟`, a: `اضرب القيمة بوحدة ${b.sym} في ${num(inv)}، أو اقسمها على ${num(r)}.` },
      ],
      about: {
        title: `طريقة تحويل ${a.ar} إلى ${b.ar}`,
        paras: [
          `لتحويل ${a.ar} (${a.sym}) إلى ${b.ar} (${b.sym}) اضرب القيمة في ${num(r)}. بالمعادلة: ${b.sym} = ${a.sym} × ${num(r)}.`,
          `وللتحويل بالاتجاه المعاكس اضرب في ${num(inv)}. مثال: 25 ${a.sym} تساوي ${num(25 * r)} ${b.sym}، و25 ${b.sym} تساوي ${num(25 * inv)} ${a.sym}.`,
        ],
      },
      tableTitle: `جدول تحويل ${a.ar} إلى ${b.ar}`,
      table: { head: [a.sym, b.sym], rows: rows(a, b) },
    };
  }
  return {
    name: `${a.en} to ${b.en}`,
    title: [`${a.en} to ${b.en} Converter (${a.sym} to ${b.sym}) + Table`, `${a.en} to ${b.en} Converter (${a.sym} to ${b.sym})`, `${a.en} to ${b.en} Converter`].find((x) => x.length <= 62)!,
    description: `Free ${a.en.toLowerCase()} to ${b.en.toLowerCase()} converter. Convert ${a.sym} to ${b.sym} instantly with the formula (1 ${a.sym} = ${num(r)} ${b.sym}) and a quick conversion table.`,
    h1: `${a.en} to ${b.en} Converter`,
    intro: `Convert ${a.en.toLowerCase()} to ${b.en.toLowerCase()} instantly. 1 ${a.en1} = ${num(r)} ${b.en.toLowerCase()}.`,
    steps: [`Enter the value in ${a.en.toLowerCase()}.`, 'Use the swap button to convert the other way.', `Read the result in ${b.en.toLowerCase()} right away.`],
    faq: [
      { q: `How many ${b.en.toLowerCase()} are in 1 ${a.en1}?`, a: `1 ${a.en1} (${a.sym}) equals ${num(r)} ${b.en.toLowerCase()} (${b.sym}).` },
      { q: `How do I convert ${a.en.toLowerCase()} to ${b.en.toLowerCase()}?`, a: `Multiply the value in ${a.sym} by ${num(r)}. For example, 10 ${a.sym} × ${num(r)} = ${num(10 * r)} ${b.sym}.` },
      { q: `How do I convert ${b.en.toLowerCase()} back to ${a.en.toLowerCase()}?`, a: `Multiply the value in ${b.sym} by ${num(inv)}, or divide it by ${num(r)}.` },
    ],
    about: {
      title: `How to convert ${a.en.toLowerCase()} to ${b.en.toLowerCase()}`,
      paras: [
        `To convert ${a.en.toLowerCase()} (${a.sym}) to ${b.en.toLowerCase()} (${b.sym}), multiply the value by ${num(r)}. As a formula: ${b.sym} = ${a.sym} × ${num(r)}.`,
        `To convert the other way, multiply by ${num(inv)}. Example: 25 ${a.sym} is ${num(25 * r)} ${b.sym}, and 25 ${b.sym} is ${num(25 * inv)} ${a.sym}.`,
      ],
    },
    tableTitle: `${a.en} to ${b.en} conversion table`,
    table: { head: [a.sym, b.sym], rows: rows(a, b) },
  };
}

function catText(catId: string, lang: 'en' | 'ar'): Text {
  const c = ucat(catId);
  const list = c.units.map((x) => (lang === 'ar' ? `${x.ar} (${x.sym})` : `${x.en.toLowerCase()} (${x.sym})`)).join(lang === 'ar' ? '، ' : ', ');
  const short = c.units.slice(0, 4).map((x) => x.sym).join(', ');
  if (lang === 'ar') {
    return {
      name: `محوّل ${c.ar}`,
      title: `محوّل ${c.ar}: حوّل بين كل الوحدات (${short})`,
      description: `محوّل ${c.ar} مجاني وفوري. حوّل بين ${c.units.length} وحدات مثل ${short} بدقة عالية، مع روابط لأشهر التحويلات.`,
      h1: `محوّل وحدات ${c.ar}`,
      intro: `حوّل بين وحدات ${c.ar} المختلفة بخطوة واحدة.`,
      steps: ['أدخل القيمة.', 'اختر الوحدة التي تحوّل منها والوحدة التي تحوّل إليها.', 'اقرأ النتيجة فوراً، أو استخدم زر التبديل.'],
      faq: [
        { q: `ما الوحدات المتاحة في محوّل ${c.ar}؟`, a: `${list}.` },
        { q: 'كيف يتم التحويل؟', a: 'تُحوَّل القيمة أولاً إلى وحدة أساسية ثم إلى الوحدة المطلوبة، فتكون النتيجة دقيقة بين أي وحدتين.' },
        { q: 'هل النتائج دقيقة؟', a: 'نعم، نستخدم المعاملات الرسمية المعتمدة. تُقرَّب النتيجة إلى 7 أرقام معنوية.' },
      ],
    };
  }
  return {
    name: `${c.en} Converter`,
    title: [`${c.en} Converter: Convert Between All Units (${short})`, `${c.en} Converter: Convert All Units (${short})`, `${c.en} Converter`].find((x) => x.length <= 62)!,
    description: `Free instant ${c.en.toLowerCase()} converter. Convert between ${c.units.length} units such as ${short} accurately, with links to the most popular conversions.`,
    h1: `${c.en} Unit Converter`,
    intro: `Convert between different ${c.en.toLowerCase()} units in one step.`,
    steps: ['Enter the value.', 'Pick the unit you convert from and the unit you convert to.', 'Read the result instantly, or use the swap button.'],
    faq: [
      { q: `Which units does the ${c.en.toLowerCase()} converter support?`, a: `${list}.` },
      { q: 'How does the conversion work?', a: 'The value is converted to a base unit first and then to the target unit, so results are accurate between any two units.' },
      { q: 'How accurate are the results?', a: 'We use the official conversion factors. Results are rounded to 7 significant digits.' },
    ],
  };
}

const build = (lang: 'en' | 'ar') => {
  const out: Record<string, Text> = {};
  for (const c of ucats) out[c.slug] = catText(c.id, lang);
  for (const [cat, f, t] of pairs) out[pairSlug(cat, f, t)] = pairText(cat, f, t, lang);
  return out;
};

const en = build('en');
const ar = build('ar');

const catTools: Tool[] = ucats.map((c) => ({
  slug: c.slug,
  kind: 'tool',
  conv: { cat: c.id, from: c.from, to: c.to },
  ...en[c.slug],
  related: pairs.filter((p) => p[0] === c.id).slice(0, 6).map((p) => pairSlug(...p)),
})) as Tool[];

const pairTools: Tool[] = pairs.map(([cat, f, t]) => {
  const slug = pairSlug(cat, f, t);
  const sameCat = pairs.filter((p) => p[0] === cat && pairSlug(...p) !== slug);
  const reverse = sameCat.find((p) => p[1] === t && p[2] === f);
  const others = sameCat.filter((p) => p !== reverse).slice(0, reverse ? 1 : 2);
  return {
    slug,
    kind: 'pair',
    conv: { cat, from: f, to: t },
    ...en[slug],
    related: [...(reverse ? [pairSlug(...reverse)] : []), ...others.map((p) => pairSlug(...p)), ucat(cat).slug],
  } as Tool;
});

export const converterTools: Tool[] = [...catTools, ...pairTools];
export const converterAr: Record<string, Text> = ar;
