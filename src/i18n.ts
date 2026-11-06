export type Lang = 'en' | 'ar';

export const ui = {
  en: {
    dir: 'ltr',
    allTools: 'All tools',
    about: 'About',
    privacy: 'Privacy',
    switchLabel: 'العربية',
    home: 'Home',
    footer:
      '© Calcloom. Free calculators for everyday decisions. Results are estimates for information only, not financial or medical advice.',
    howTo: (n: string) => `How to use the ${n.toLowerCase()}`,
    faq: 'Frequently asked questions',
    more: 'More calculators',
    allCalcs: 'All calculators',
    homeTitle: 'Calcloom: Free Online Calculators and Unit Converters',
    homeDesc:
      'Free online calculators and unit converters: km to miles, kg to lb, loan, BMI, percentage and more. Fast, private, no sign-up.',
    homeH1: 'Free online calculators that just work',
    homeLead:
      'Fast, private and simple. Pick a tool, type your numbers, get the answer. No sign-up, nothing is stored.',
  },
  ar: {
    dir: 'rtl',
    allTools: 'كل الأدوات',
    about: 'من نحن',
    privacy: 'الخصوصية',
    switchLabel: 'English',
    home: 'الرئيسية',
    footer:
      '© Calcloom. حاسبات مجانية لقرارات الحياة اليومية. النتائج تقديرية للاطلاع فقط وليست نصيحة مالية أو طبية.',
    howTo: (n: string) => `طريقة استخدام ${n}`,
    faq: 'الأسئلة الشائعة',
    more: 'حاسبات أخرى',
    allCalcs: 'كل الحاسبات',
    homeTitle: 'Calcloom: حاسبات ومحوّلات وحدات أونلاين مجانية',
    homeDesc:
      'حاسبات ومحوّلات وحدات مجانية: كم إلى ميل، كيلو إلى رطل، القروض، BMI، النسبة المئوية وأكثر. سريعة وخاصة وبدون تسجيل.',
    homeH1: 'حاسبات أونلاين مجانية تعمل بسهولة',
    homeLead:
      'سريعة وخاصة وبسيطة. اختر الأداة، اكتب أرقامك، واحصل على الجواب. بدون تسجيل ولا تخزين لبياناتك.',
  },
} as const;

// URL for a page in a language. path is the English path, e.g. "/loan-calculator/".
// Includes the site base path (e.g. /calcloom on the free GitHub address, empty on a custom domain).
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const localePath = (lang: Lang, path: string) =>
  `${BASE}${lang === 'ar' ? '/ar' : ''}${path}`;
