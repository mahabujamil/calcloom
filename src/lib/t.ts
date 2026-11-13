// Pick the string for a language: tr(lang, english, arabic, french, spanish)
import type { Lang } from '../i18n';
export const tr = <T>(lang: Lang, en: T, ar: T, fr: T, es: T): T => (lang === 'ar' ? ar : lang === 'fr' ? fr : lang === 'es' ? es : en);
// Number/date locale per language (Latin digits for Arabic)
export const locale = (lang: Lang) => tr(lang, 'en-US', 'ar-u-nu-latn', 'fr-FR', 'es-ES');
