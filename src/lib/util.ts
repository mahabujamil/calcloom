// Browser-side helpers shared by the calculator scripts.
export const $ = (id: string) => document.getElementById(id) as HTMLInputElement;
// Number locale from the page language: French and Spanish use a decimal comma.
export const LOC = () => {
  const l = document.documentElement.lang;
  return l === 'fr' ? 'fr-FR' : l === 'es' ? 'es-ES' : 'en-US';
};
// Swap the decimal point of an already formatted number for a comma (French, Spanish)
export const dec = (s: string) => (['fr', 'es'].includes(document.documentElement.lang) ? s.replace('.', ',') : s);
export const money = (n: number) =>
  n.toLocaleString(LOC(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const num = (n: number) => n.toLocaleString(LOC());
export const fill = (t: string, ...v: (string | number)[]) =>
  t.replace(/\{(\d)\}/g, (_, i) => String(v[+i]));
export const strings = (id: string) => JSON.parse(document.getElementById(id)!.dataset.s!);
