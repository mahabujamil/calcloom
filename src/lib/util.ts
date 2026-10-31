// Browser-side helpers shared by the calculator scripts.
export const $ = (id: string) => document.getElementById(id) as HTMLInputElement;
export const money = (n: number) =>
  n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const num = (n: number) => n.toLocaleString('en-US');
export const fill = (t: string, ...v: (string | number)[]) =>
  t.replace(/\{(\d)\}/g, (_, i) => String(v[+i]));
export const strings = (id: string) => JSON.parse(document.getElementById(id)!.dataset.s!);
