// Visual metadata for each tool: category and a 24x24 stroke icon.
export const cats = {
  money: { hue: 165, en: 'Money', ar: 'المال' },
  health: { hue: 345, en: 'Health', ar: 'الصحة' },
  time: { hue: 215, en: 'Dates & time', ar: 'التواريخ والوقت' },
  daily: { hue: 35, en: 'Everyday', ar: 'الحياة اليومية' },
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
  'unit-converter': { cat: 'tools', icon: '<path d="M7 7h13M16 3l4 4-4 4"/><path d="M17 17H4M8 13l-4 4 4 4"/>' },
  'temperature-converter': { cat: 'tools', icon: '<path d="M14 14.8V5a2 2 0 10-4 0v9.8a4 4 0 104 0z"/>' },
  'password-generator': { cat: 'tools', icon: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 118 0v3"/>' },
  'word-counter': { cat: 'tools', icon: '<path d="M4 6h16M4 12h16M4 18h10"/>' },
};
