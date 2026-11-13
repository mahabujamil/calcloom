import { tools, bySlug, type Tool } from './tools';
import { toolsAr } from './tools-ar';
import { coreFr } from './tools-fr';
import { coreEs } from './tools-es';
import { converterFr, converterEs } from './converters-i18n';
import { extraFr, extraEs } from './extra-i18n';
import type { Lang } from '../i18n';

const text: Record<Lang, Record<string, Partial<Tool>>> = {
  en: {},
  ar: toolsAr,
  fr: { ...coreFr, ...converterFr, ...extraFr },
  es: { ...coreEs, ...converterEs, ...extraEs },
};

// Keep meta descriptions under ~160 characters: cut at the last full sentence or word.
const trim = (d: string, max: number) => {
  if (d.length <= max) return d;
  const cut = d.slice(0, max);
  const dot = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
  if (dot > 90) return cut.slice(0, dot + 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:]$/, '') + '…';
};

// A tool with its text in the requested language (slug and related stay shared).
export const getTool = (slug: string, lang: Lang): Tool => {
  const base = bySlug(slug);
  if (lang === 'en') return base;
  const t = { ...base, ...text[lang][slug] };
  if (lang !== 'ar') t.description = trim(t.description, 160);
  return t;
};

export const allTools = (lang: Lang) => tools.map((t) => getTool(t.slug, lang));
