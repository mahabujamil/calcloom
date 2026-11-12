// Visual metadata for each tool: category and a 24x24 stroke icon.
export const cats = {
  money: { hue: 165, en: 'Money', ar: 'المال' },
  health: { hue: 345, en: 'Health', ar: 'الصحة' },
  time: { hue: 215, en: 'Dates & time', ar: 'التواريخ والوقت' },
  daily: { hue: 35, en: 'Everyday', ar: 'الحياة اليومية' },
  convert: { hue: 215, en: 'Converters', ar: 'المحوّلات' },
  tools: { hue: 265, en: 'Handy tools', ar: 'أدوات مفيدة' },
} as const;

export type Cat = keyof typeof cats;

export const meta: Record<string, { cat: Cat; icon: string }> = {
  'percentage-calculator': { cat: 'money', icon: '<path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>' },
  'loan-calculator': { cat: 'money', icon: '<path d="M3 10l9-6 9 6"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/><path d="M3 20h18"/>' },
  'compound-interest-calculator': { cat: 'money', icon: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>' },
  'savings-goal-calculator': { cat: 'money', icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>' },
  'hourly-to-salary-calculator': { cat: 'money', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
  'bmi-calculator': { cat: 'health', icon: '<path d="M3 12h4l2-5 4 10 2-5h6"/>' },
  'age-calculator': { cat: 'time', icon: '<path d="M4 20h16v-6a2 2 0 00-2-2H6a2 2 0 00-2 2z"/><path d="M12 12V8"/><path d="M12 5.5c.8-.8.8-1.7 0-2.5-.8.8-.8 1.7 0 2.5z"/>' },
  'days-between-dates-calculator': { cat: 'time', icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>' },
  'tip-calculator': { cat: 'daily', icon: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>' },
  'discount-calculator': { cat: 'daily', icon: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>' },
  'fuel-cost-calculator': { cat: 'daily', icon: '<path d="M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16"/><path d="M3 21h12"/><path d="M14 9h2a2 2 0 012 2v6a1.5 1.5 0 003 0V9l-3-3"/>' },
  'temperature-converter': { cat: 'convert', icon: '<path d="M14 14.8V5a2 2 0 10-4 0v9.8a4 4 0 104 0z"/>' },
  'password-generator': { cat: 'tools', icon: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 118 0v3"/>' },
  'word-counter': { cat: 'tools', icon: '<path d="M4 6h16M4 12h16M4 18h10"/>' },
};

// Converters: one icon per unit category, shared by the category page and its pair pages.
import { ucats, pairs, pairSlug } from './units';

const catIcons: Record<string, string> = {
  length: '<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
  weight: '<path d="M6 7h12l2 13H4z"/><circle cx="12" cy="4.5" r="1.8"/>',
  volume: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>',
  area: '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 12h16M12 4v16"/>',
  speed: '<path d="M4 17a8 8 0 1116 0"/><path d="M12 17l4-5"/>',
  time: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  data: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  pressure: '<circle cx="12" cy="12" r="9"/><path d="M12 12l4-4M7 12h1M12 7v1M17 12h-1"/>',
  energy: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
};
const swap = '<path d="M7 7h13M16 3l4 4-4 4"/><path d="M17 17H4M8 13l-4 4 4 4"/>';

for (const c of ucats) meta[c.slug] = { cat: 'convert', icon: catIcons[c.id] ?? swap };
for (const p of pairs) meta[pairSlug(...p)] = { cat: 'convert', icon: catIcons[p[0]] ?? swap };
meta['kg-to-liters-converter'] = { cat: 'convert', icon: catIcons.volume };
meta['fuel-economy-converter'] = { cat: 'convert', icon: '<path d="M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16"/><path d="M3 21h12"/><path d="M14 9h2a2 2 0 012 2v6a1.5 1.5 0 003 0V9l-3-3"/>' };

import { extraTools } from './extra';
const thermo = '<path d="M14 14.8V5a2 2 0 10-4 0v9.8a4 4 0 104 0z"/>';
const calClock = '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><circle cx="12" cy="15.5" r="2.5"/>';
for (const x of extraTools) {
  if (x.temp) meta[x.slug] = { cat: 'convert', icon: thermo };
  else if (x.countdown) meta[x.slug] = { cat: 'time', icon: calClock };
}
meta['gpa-calculator'] = { cat: 'daily', icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>' };

meta['currency-converter'] = { cat: 'convert', icon: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.7-2.5 1.8 0 2.6 5 1.2 5 3.8 0 1.1-1.1 1.9-2.5 1.9-1.1 0-2.1-.5-2.6-1.3M12 6.5V8m0 8v1.5"/>' };

import { fxPairs, fxSlug } from './extra2';
const coin = meta['currency-converter'].icon;
for (const [a, b] of fxPairs) meta[fxSlug(a, b)] = { cat: 'convert', icon: coin };
meta['vat-calculator'] = { cat: 'money', icon: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8l6 6M9.5 13.5h.01M14.5 8.5h.01"/>' };
meta['average-calculator'] = { cat: 'tools', icon: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>' };
meta['calorie-calculator'] = { cat: 'health', icon: '<path d="M12 3c1 3 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>' };
meta['date-calculator'] = { cat: 'time', icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5"/>' };
