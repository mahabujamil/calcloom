import { tools, bySlug, type Tool } from './tools';
import { toolsAr } from './tools-ar';
import type { Lang } from '../i18n';

// A tool with its text in the requested language (slug and related stay shared).
export const getTool = (slug: string, lang: Lang): Tool => {
  const base = bySlug(slug);
  return lang === 'ar' ? { ...base, ...toolsAr[slug] } : base;
};

export const allTools = (lang: Lang) => tools.map((t) => getTool(t.slug, lang));
