export type Lang = 'en' | 'ar' | 'fr' | 'es';
export const LANGS: Lang[] = ['en', 'ar', 'fr', 'es'];
export const LANG_NAME: Record<Lang, string> = { en: 'English', ar: 'العربية', fr: 'Français', es: 'Español' };

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
  fr: {
    dir: 'ltr',
    allTools: 'Tous les outils',
    about: 'À propos',
    privacy: 'Confidentialité',
    switchLabel: 'English',
    home: 'Accueil',
    footer:
      '© Calcloom. Des calculateurs gratuits pour les décisions du quotidien. Les résultats sont des estimations à titre informatif, et non des conseils financiers ou médicaux.',
    howTo: (n: string) => `Comment utiliser : ${n.charAt(0).toLowerCase() + n.slice(1)}`,
    faq: 'Questions fréquentes',
    more: 'Autres calculateurs',
    allCalcs: 'Tous les calculateurs',
    homeTitle: 'Calcloom : calculateurs et convertisseurs gratuits en ligne',
    homeDesc:
      'Calculateurs et convertisseurs gratuits : km en miles, kg en livres, prêt, IMC, pourcentage et plus. Rapides, privés, sans inscription.',
    homeH1: 'Des calculateurs en ligne gratuits qui marchent',
    homeLead:
      'Rapide, privé et simple. Choisissez un outil, saisissez vos chiffres, obtenez la réponse. Sans inscription, rien n’est enregistré.',
  },
  es: {
    dir: 'ltr',
    allTools: 'Todas las herramientas',
    about: 'Acerca de',
    privacy: 'Privacidad',
    switchLabel: 'English',
    home: 'Inicio',
    footer:
      '© Calcloom. Calculadoras gratuitas para las decisiones del día a día. Los resultados son estimaciones informativas, no asesoramiento financiero ni médico.',
    howTo: (n: string) => `Cómo usar: ${n.charAt(0).toLowerCase() + n.slice(1)}`,
    faq: 'Preguntas frecuentes',
    more: 'Más calculadoras',
    allCalcs: 'Todas las calculadoras',
    homeTitle: 'Calcloom: calculadoras y conversores de unidades gratis en línea',
    homeDesc:
      'Calculadoras y conversores gratuitos: km a millas, kg a libras, préstamos, IMC, porcentajes y más. Rápidos, privados y sin registro.',
    homeH1: 'Calculadoras en línea gratuitas que funcionan',
    homeLead:
      'Rápido, privado y sencillo. Elige una herramienta, escribe tus números y obtén la respuesta. Sin registro y sin guardar nada.',
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
  `${BASE}${lang === 'en' ? '' : '/' + lang}${path}`;
