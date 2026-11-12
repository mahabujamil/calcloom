// Second batch: VAT, average, calorie and date-add calculators, plus currency pair pages.
import type { Tool } from './tools';
import { currencies } from './currencies';

type Text = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'tableTitle' | 'table' | 'about'>;

const vatEn: Text = {
  name: 'VAT Calculator',
  title: 'VAT Calculator: Add or Remove Tax From Any Price',
  description: 'Free VAT and sales tax calculator. Add tax to a price or work out the tax hidden inside a total, with any rate such as 5%, 10%, 15% or 20%.',
  h1: 'VAT Calculator',
  intro: 'Add VAT to a price, or take it out of a total that already includes it. Works with any tax rate.',
  steps: ['Enter the amount and the tax rate.', 'Choose whether to add the tax or remove it from a total.', 'Read the amount without tax, the tax and the total.'],
  faq: [
    { q: 'How do I add VAT to a price?', a: 'Multiply the price by (1 + rate ÷ 100). At 15%, 100 becomes 100 × 1.15 = 115.' },
    { q: 'How do I remove VAT from a total?', a: 'Divide the total by (1 + rate ÷ 100). At 15%, a total of 115 gives 115 ÷ 1.15 = 100, so the tax is 15.' },
    { q: 'Why not just subtract 15% from the total?', a: 'Because the tax was added to the price, not to the total. Subtracting 15% of 115 gives 97.75, which is wrong. Dividing by 1.15 gives the correct 100.' },
  ],
};
const vatAr: Text = {
  name: 'حاسبة ضريبة القيمة المضافة',
  title: 'حاسبة ضريبة القيمة المضافة: إضافة الضريبة أو استخراجها',
  description: 'حاسبة ضريبة القيمة المضافة وضريبة المبيعات المجانية. أضف الضريبة إلى السعر أو استخرجها من مبلغ شامل، بأي نسبة مثل 5% و10% و15%.',
  h1: 'حاسبة ضريبة القيمة المضافة',
  intro: 'أضف الضريبة إلى سعر، أو استخرجها من مبلغ شامل لها. تعمل مع أي نسبة ضريبة.',
  steps: ['أدخل المبلغ ونسبة الضريبة.', 'اختر إضافة الضريبة أو استخراجها من مبلغ شامل.', 'اقرأ المبلغ بدون ضريبة وقيمة الضريبة والإجمالي.'],
  faq: [
    { q: 'كيف أضيف الضريبة إلى السعر؟', a: 'اضرب السعر في (1 + النسبة ÷ 100). عند 15% يصبح 100 مساوياً 100 × 1.15 = 115.' },
    { q: 'كيف أستخرج الضريبة من مبلغ شامل؟', a: 'اقسم المبلغ على (1 + النسبة ÷ 100). عند 15% المبلغ 115 يعطي 115 ÷ 1.15 = 100، فتكون الضريبة 15.' },
    { q: 'لماذا لا أطرح 15% من المبلغ الشامل مباشرة؟', a: 'لأن الضريبة أُضيفت إلى السعر وليس إلى الإجمالي. طرح 15% من 115 يعطي 97.75 وهو خطأ، أما القسمة على 1.15 فتعطي 100 الصحيح.' },
  ],
};

const avEn: Text = {
  name: 'Average Calculator',
  title: 'Average Calculator: Mean, Median and Mode',
  description: 'Free average calculator. Paste a list of numbers to get the mean, median, mode, sum, count, smallest, largest and range instantly.',
  h1: 'Average Calculator',
  intro: 'Paste or type a list of numbers to get their mean, median, mode, sum and range at once.',
  steps: ['Type or paste your numbers, separated by commas, spaces or new lines.', 'The results update as you type.', 'Read the mean, median, mode and the other statistics.'],
  faq: [
    { q: 'How do you calculate an average?', a: 'Add all the numbers and divide by how many there are. The average of 12, 7, 9, 15 and 7 is 50 ÷ 5 = 10.' },
    { q: 'What is the difference between mean, median and mode?', a: 'The mean is the usual average. The median is the middle value when the numbers are sorted. The mode is the value that appears most often.' },
    { q: 'When should I use the median instead of the mean?', a: 'When a few very large or very small values would distort the mean, such as salaries or house prices. The median ignores extremes.' },
  ],
};
const avAr: Text = {
  name: 'حاسبة المتوسط الحسابي',
  title: 'حاسبة المتوسط الحسابي: المتوسط والوسيط والمنوال',
  description: 'حاسبة متوسط مجانية. الصق قائمة أرقام لتحصل فوراً على المتوسط الحسابي والوسيط والمنوال والمجموع والعدد والأصغر والأكبر والمدى.',
  h1: 'حاسبة المتوسط الحسابي',
  intro: 'اكتب أو الصق قائمة أرقام لتحصل على المتوسط والوسيط والمنوال والمجموع والمدى دفعة واحدة.',
  steps: ['اكتب أرقامك أو الصقها مفصولة بفواصل أو مسافات أو أسطر.', 'تتحدث النتائج أثناء الكتابة.', 'اقرأ المتوسط والوسيط والمنوال وبقية الإحصاءات.'],
  faq: [
    { q: 'كيف أحسب المتوسط الحسابي؟', a: 'اجمع كل الأرقام واقسم على عددها. متوسط 12 و7 و9 و15 و7 هو 50 ÷ 5 = 10.' },
    { q: 'ما الفرق بين المتوسط والوسيط والمنوال؟', a: 'المتوسط هو المعدل المعتاد. الوسيط هو القيمة الوسطى بعد ترتيب الأرقام. المنوال هو القيمة الأكثر تكراراً.' },
    { q: 'متى أستخدم الوسيط بدل المتوسط؟', a: 'عندما تشوّه قيم كبيرة أو صغيرة جداً المتوسط، كالرواتب وأسعار العقارات. الوسيط لا يتأثر بالقيم المتطرفة.' },
  ],
};

const clEn: Text = {
  name: 'Calorie Calculator',
  title: 'Calorie Calculator: Daily Calories to Lose or Gain Weight',
  description: 'Free calorie calculator. Enter age, weight, height and activity to get your BMR and the daily calories to maintain, lose or gain weight.',
  h1: 'Daily Calorie Calculator',
  intro: 'Estimate how many calories you burn each day and how many to eat to maintain, lose or gain weight.',
  steps: ['Enter your sex, age, weight and height.', 'Choose your activity level.', 'Read your maintenance calories and the targets for losing or gaining weight.'],
  faq: [
    { q: 'How are daily calories calculated?', a: 'The calculator uses the Mifflin-St Jeor equation for your basal metabolic rate (BMR), then multiplies it by an activity factor from 1.2 to 1.9.' },
    { q: 'How many calories should I cut to lose weight?', a: 'A deficit of about 500 calories a day usually means losing around 0.5 kg a week. Avoid going far below your BMR without medical advice.' },
    { q: 'Is the result exact?', a: 'No. It is an estimate. Muscle mass, genetics and health conditions change real needs. Talk to a doctor or dietitian for personal advice.' },
  ],
};
const clAr: Text = {
  name: 'حاسبة السعرات الحرارية',
  title: 'حاسبة السعرات الحرارية: احتياجك اليومي للحفاظ على وزنك أو إنقاصه',
  description: 'حاسبة سعرات حرارية مجانية. أدخل عمرك ووزنك وطولك ونشاطك لتعرف معدل الحرق BMR والسعرات اليومية للحفاظ على الوزن أو إنقاصه أو زيادته.',
  h1: 'حاسبة السعرات الحرارية اليومية',
  intro: 'قدّر كم سعرة تحرق يومياً وكم تحتاج لتحافظ على وزنك أو تنقصه أو تزيده.',
  steps: ['أدخل جنسك وعمرك ووزنك وطولك.', 'اختر مستوى نشاطك.', 'اقرأ سعرات الحفاظ على الوزن وأهداف الإنقاص أو الزيادة.'],
  faq: [
    { q: 'كيف تُحسب السعرات اليومية؟', a: 'تستخدم الحاسبة معادلة ميفلين سانت جيور لمعدل الحرق الأساسي (BMR)، ثم تضربه في معامل نشاط من 1.2 إلى 1.9.' },
    { q: 'كم سعرة أنقص لأخسر وزناً؟', a: 'عجز بنحو 500 سعرة يومياً يعني عادة خسارة نحو نصف كيلو أسبوعياً. تجنب النزول كثيراً تحت معدل الحرق الأساسي دون استشارة طبية.' },
    { q: 'هل النتيجة دقيقة تماماً؟', a: 'لا، هي تقدير. الكتلة العضلية والوراثة والحالة الصحية تغيّر الاحتياج الفعلي. استشر طبيباً أو أخصائي تغذية لنصيحة شخصية.' },
  ],
};

const daEn: Text = {
  name: 'Date Calculator',
  title: 'Date Calculator: What Date Is X Days From Today?',
  description: 'Free date calculator. Add or subtract days from any date, including today, and see the resulting date with the day of the week.',
  h1: 'Add or Subtract Days From a Date',
  intro: 'Find the date that is a number of days after or before any date. Handy for deadlines, due dates and 30, 60 or 90 day periods.',
  steps: ['Pick the start date. It defaults to today.', 'Enter the number of days and choose add or subtract.', 'Read the resulting date and weekday.'],
  faq: [
    { q: 'What date is 30 days from today?', a: 'Leave the start date as today, enter 30 and choose Add days. The calculator shows the date and weekday.' },
    { q: 'Does it handle months of different lengths and leap years?', a: 'Yes. It counts real calendar days, so month lengths and leap years are handled correctly.' },
    { q: 'Is the start day counted?', a: 'No. Adding 1 day to Monday gives Tuesday. The start date itself is day zero.' },
  ],
};
const daAr: Text = {
  name: 'حاسبة التاريخ',
  title: 'حاسبة التاريخ: كم يكون التاريخ بعد X يوماً من اليوم؟',
  description: 'حاسبة تاريخ مجانية. أضف أياماً إلى أي تاريخ أو اطرحها منه، بما في ذلك اليوم، واعرف التاريخ الناتج مع اسم اليوم.',
  h1: 'إضافة أيام إلى تاريخ أو طرحها منه',
  intro: 'اعرف التاريخ الذي يأتي بعد عدد من الأيام أو قبلها من أي تاريخ. مفيدة للمواعيد النهائية وتواريخ الاستحقاق وفترات 30 و60 و90 يوماً.',
  steps: ['اختر تاريخ البداية، وهو افتراضياً اليوم.', 'أدخل عدد الأيام واختر إضافة أو طرح.', 'اقرأ التاريخ الناتج واسم اليوم.'],
  faq: [
    { q: 'كم يكون التاريخ بعد 30 يوماً من اليوم؟', a: 'اترك تاريخ البداية على اليوم، وأدخل 30 واختر إضافة أيام. ستعرض الحاسبة التاريخ واسم اليوم.' },
    { q: 'هل تراعي اختلاف أطوال الشهور والسنة الكبيسة؟', a: 'نعم. تحسب أياماً تقويمية فعلية، فتُعالَج أطوال الشهور والسنوات الكبيسة بشكل صحيح.' },
    { q: 'هل يُحسب يوم البداية؟', a: 'لا. إضافة يوم واحد إلى الاثنين تعطي الثلاثاء. تاريخ البداية نفسه هو اليوم صفر.' },
  ],
};

const mk = (slug: string, en: Text, related: string[]): Tool => ({ slug, kind: 'tool', ...en, related });

const base: Tool[] = [
  mk('vat-calculator', vatEn, ['percentage-calculator', 'discount-calculator', 'tip-calculator']),
  mk('average-calculator', avEn, ['percentage-calculator', 'gpa-calculator', 'word-counter']),
  mk('calorie-calculator', clEn, ['bmi-calculator', 'age-calculator', 'weight-converter']),
  mk('date-calculator', daEn, ['days-between-dates-calculator', 'age-calculator', 'days-until-new-year']),
];

/* ---------- Currency pair pages ---------- */
const cname = new Map(currencies.map(([c, en, ar]) => [c, { en, ar }]));
export const fxPairs: [string, string][] = [
  ['USD', 'EGP'], ['EGP', 'USD'], ['USD', 'SAR'], ['SAR', 'USD'], ['USD', 'JOD'], ['USD', 'KWD'], ['USD', 'EUR'], ['EUR', 'USD'],
  ['GBP', 'USD'], ['USD', 'GBP'], ['EUR', 'EGP'], ['SAR', 'EGP'], ['USD', 'TRY'], ['USD', 'INR'], ['USD', 'CAD'], ['EUR', 'GBP'],
  ['USD', 'IQD'], ['USD', 'LBP'],
];
export const fxSlug = (a: string, b: string) => `${a.toLowerCase()}-to-${b.toLowerCase()}`;

function fxText(a: string, b: string, lang: 'en' | 'ar'): Text {
  const A = cname.get(a)![lang], B = cname.get(b)![lang];
  if (lang === 'en') {
    return {
      name: `${a} to ${b}`,
      title: `${a} to ${b}: Convert ${A} to ${B} (Live Rate)`,
      description: `Convert ${A} (${a}) to ${B} (${b}) with the current exchange rate. Free ${a} to ${b} converter with a swap button and the date of the last rate update.`,
      h1: `${A} to ${B} (${a} to ${b})`,
      intro: `Convert ${A} to ${B} using the current exchange rate. The rate loads fresh each time you open the page.`,
      steps: [`Enter the amount in ${a}.`, `The result in ${b} appears with the rate used.`, 'Use the swap button to convert the other way.'],
      faq: [
        { q: `How much is 1 ${a} in ${b}?`, a: `Open this page and read the rate line under the result. It shows today's value of 1 ${a} in ${b}.` },
        { q: `How do I convert ${a} to ${b}?`, a: `Multiply the amount in ${a} by the current ${a} to ${b} rate. This converter does it for you and updates the rate every time the page loads.` },
        { q: `Is this the rate I will get at a bank?`, a: `No. It is the mid-market reference rate. Banks and exchange offices add a margin or fee, so the real rate is usually slightly worse.` },
      ],
      about: {
        title: `About ${a} and ${b}`,
        paras: [`${a} is the code for the ${A} and ${b} is the code for the ${B}. The exchange rate between them changes with the market, so check it again before a transfer or a purchase.`],
      },
    };
  }
  return {
    name: `${A} إلى ${B}`,
    title: `${A} إلى ${B} (${a} إلى ${b}): تحويل بالسعر الحالي`,
    description: `حوّل ${A} (${a}) إلى ${B} (${b}) بسعر الصرف الحالي. محوّل ${a} إلى ${b} مجاني مع زر تبديل وتاريخ آخر تحديث للسعر.`,
    h1: `${A} إلى ${B} (${a} إلى ${b})`,
    intro: `حوّل ${A} إلى ${B} بسعر الصرف الحالي. يُحمَّل السعر من جديد كلما فتحت الصفحة.`,
    steps: [`أدخل المبلغ بعملة ${a}.`, `تظهر النتيجة بعملة ${b} مع السعر المستخدم.`, 'استخدم زر التبديل للتحويل في الاتجاه المعاكس.'],
    faq: [
      { q: `كم يساوي 1 ${a} بعملة ${b}؟`, a: `افتح هذه الصفحة واقرأ سطر السعر تحت النتيجة. يعرض قيمة 1 ${a} بعملة ${b} اليوم.` },
      { q: `كيف أحوّل ${a} إلى ${b}؟`, a: `اضرب المبلغ بعملة ${a} في سعر ${a} إلى ${b} الحالي. يفعل المحوّل ذلك عنك ويحدّث السعر كلما تحمّلت الصفحة.` },
      { q: 'هل هذا هو السعر الذي سأحصل عليه في البنك؟', a: 'لا. هذا هو سعر السوق المرجعي المتوسط. البنوك ومكاتب الصرافة تضيف هامشاً أو رسوماً، فالسعر الفعلي عادة أسوأ قليلاً.' },
    ],
    about: {
      title: `نبذة عن ${a} و${b}`,
      paras: [`${a} رمز ${A}، و${b} رمز ${B}. يتغير سعر الصرف بينهما مع السوق، فتحقق منه من جديد قبل أي تحويل أو شراء.`],
    },
  };
}

const fxTools: Tool[] = fxPairs.map(([a, b], i) => {
  const near = fxPairs.filter((_, j) => j !== i);
  return {
    slug: fxSlug(a, b),
    kind: 'pair',
    fx: { from: a, to: b },
    ...fxText(a, b, 'en'),
    related: [near[i % near.length], near[(i + 3) % near.length]].map((p) => fxSlug(p[0], p[1])).concat('currency-converter'),
  } as Tool;
});

export const extra2Tools: Tool[] = [...base, ...fxTools];
export const extra2Ar: Record<string, Text> = {
  'vat-calculator': vatAr,
  'average-calculator': avAr,
  'calorie-calculator': clAr,
  'date-calculator': daAr,
  ...Object.fromEntries(fxPairs.map(([a, b]) => [fxSlug(a, b), fxText(a, b, 'ar')])),
};
