// French and Spanish text for the converter pages (category pages and popular pairs).
import type { Tool } from './tools';
import { ucats, pairs, ucat, unit, pairSlug, type Unit } from './units';

type Text = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'tableTitle' | 'table' | 'about'>;
type L = 'fr' | 'es';

const LOC: Record<L, string> = { fr: 'fr-FR', es: 'es-ES' };
const ratio = (a: Unit, b: Unit) => a.f / b.f;
const de = (x: string) => (/^[aeiouhéèêîôâ]/i.test(x) ? `d’${x}` : `de ${x}`);
const cap = (x: string) => x.charAt(0).toUpperCase() + x.slice(1);

function pairText(cat: string, fromId: string, toId: string, lang: L): Text {
  const a = unit(cat, fromId), b = unit(cat, toId);
  const num = (n: number) => Number(n.toPrecision(7)).toLocaleString(LOC[lang], { maximumFractionDigits: 10 });
  const rows = [1, 2, 5, 10, 20, 50, 100, 500, 1000].map((v) => [num(v), num(v * ratio(a, b))]);
  const r = ratio(a, b), inv = 1 / r;
  const A = lang === 'fr' ? a.fr : a.es, A1 = lang === 'fr' ? a.fr1 : a.es1;
  const B = lang === 'fr' ? b.fr : b.es, B1 = lang === 'fr' ? b.fr1 : b.es1;
  const sa = a.sym, sb = b.sym;
  if (lang === 'fr') {
    return {
      name: `${cap(A)} en ${B}`,
      title: [`Convertir des ${A} en ${B} (${sa} en ${sb}) + tableau`, `Convertir des ${A} en ${B} (${sa} en ${sb})`, `${cap(A)} en ${B} : convertisseur`, `${cap(A)} en ${B}`].find((x) => x.length <= 62)!,
      description: `Convertisseur gratuit : ${A} en ${B}. Convertissez ${sa} en ${sb} instantanément avec la formule (1 ${sa} = ${num(r)} ${sb}) et un tableau de conversion rapide.`,
      h1: `Convertir des ${A} en ${B}`,
      intro: `Convertissez des ${A} en ${B} instantanément. 1 ${A1} = ${num(r)} ${num(r) === '1' ? B1 : B}.`,
      steps: [`Saisissez la valeur en ${A}.`, 'Utilisez le bouton d’inversion pour convertir dans l’autre sens.', `Lisez aussitôt le résultat en ${B}.`],
      faq: [
        { q: `1 ${A1} équivaut à combien en ${B} ?`, a: `1 ${A1} (${sa}) équivaut à ${num(r)} ${B} (${sb}).` },
        { q: `Comment convertir des ${A} en ${B} ?`, a: `Multipliez la valeur en ${sa} par ${num(r)}. Par exemple, 10 ${sa} × ${num(r)} = ${num(10 * r)} ${sb}.` },
        { q: `Comment convertir des ${B} en ${A} ?`, a: `Multipliez la valeur en ${sb} par ${num(inv)}, ou divisez-la par ${num(r)}.` },
      ],
      about: {
        title: `Comment convertir des ${A} en ${B}`,
        paras: [
          `Pour convertir des ${A} (${sa}) en ${B} (${sb}), multipliez la valeur par ${num(r)}. En formule : ${sb} = ${sa} × ${num(r)}.`,
          `Pour convertir dans l’autre sens, multipliez par ${num(inv)}. Exemple : 25 ${sa} font ${num(25 * r)} ${sb}, et 25 ${sb} font ${num(25 * inv)} ${sa}.`,
        ],
      },
      tableTitle: `Tableau de conversion : ${A} en ${B}`,
      table: { head: [sa, sb], rows },
    };
  }
  return {
    name: `${cap(A)} a ${B}`,
    title: [`Convertir ${A} a ${B} (${sa} a ${sb}) + tabla`, `Convertir ${A} a ${B} (${sa} a ${sb})`, `Conversor de ${A} a ${B}`, `${cap(A)} a ${B}`].find((x) => x.length <= 62)!,
    description: `Conversor gratuito: ${A} a ${B}. Convierte ${sa} a ${sb} al instante con la fórmula (1 ${sa} = ${num(r)} ${sb}) y una tabla de conversión rápida.`,
    h1: `Convertir ${A} a ${B}`,
    intro: `Convierte ${A} a ${B} al instante. 1 ${A1} = ${num(r)} ${num(r) === '1' ? B1 : B}.`,
    steps: [`Escribe el valor en ${A}.`, 'Usa el botón de intercambio para convertir en sentido contrario.', `Lee el resultado en ${B} al momento.`],
    faq: [
      { q: `¿Cuánto es 1 ${A1} en ${B}?`, a: `1 ${A1} (${sa}) equivale a ${num(r)} ${B} (${sb}).` },
      { q: `¿Cómo convertir ${A} a ${B}?`, a: `Multiplica el valor en ${sa} por ${num(r)}. Por ejemplo, 10 ${sa} × ${num(r)} = ${num(10 * r)} ${sb}.` },
      { q: `¿Cómo convertir ${B} a ${A}?`, a: `Multiplica el valor en ${sb} por ${num(inv)}, o divídelo entre ${num(r)}.` },
    ],
    about: {
      title: `Cómo convertir ${A} a ${B}`,
      paras: [
        `Para convertir ${A} (${sa}) a ${B} (${sb}), multiplica el valor por ${num(r)}. En fórmula: ${sb} = ${sa} × ${num(r)}.`,
        `Para convertir en sentido contrario, multiplica por ${num(inv)}. Ejemplo: 25 ${sa} son ${num(25 * r)} ${sb}, y 25 ${sb} son ${num(25 * inv)} ${sa}.`,
      ],
    },
    tableTitle: `Tabla de conversión: ${A} a ${B}`,
    table: { head: [sa, sb], rows },
  };
}

function catText(catId: string, lang: L): Text {
  const c = ucat(catId);
  const C = lang === 'fr' ? c.fr : c.es;
  const list = c.units.map((x) => `${lang === 'fr' ? x.fr : x.es} (${x.sym})`).join(', ');
  const short = c.units.slice(0, 4).map((x) => x.sym).join(', ');
  if (lang === 'fr') {
    return {
      name: `Convertisseur ${de(C)}`,
      title: [`Convertisseur ${de(C)} : toutes les unités (${short})`, `Convertisseur ${de(C)} : toutes les unités`, `Convertisseur ${de(C)}`].find((x) => x.length <= 62)!,
      description: `Convertisseur ${de(C)} gratuit et instantané. Convertissez entre ${c.units.length} unités comme ${short} avec précision, avec des liens vers les conversions les plus courantes.`,
      h1: `Convertisseur d’unités ${de(C)}`,
      intro: `Convertissez entre différentes unités ${de(C)} en une seule étape.`,
      steps: ['Saisissez la valeur.', 'Choisissez l’unité de départ et l’unité d’arrivée.', 'Lisez le résultat aussitôt, ou utilisez le bouton d’inversion.'],
      faq: [
        { q: `Quelles unités le convertisseur ${de(C)} prend-il en charge ?`, a: `${list}.` },
        { q: 'Comment la conversion fonctionne-t-elle ?', a: 'La valeur est d’abord convertie dans une unité de base, puis dans l’unité cible : le résultat est exact entre n’importe quelles deux unités.' },
        { q: 'Les résultats sont-ils précis ?', a: 'Nous utilisons les facteurs de conversion officiels. Les résultats sont arrondis à 7 chiffres significatifs.' },
      ],
    };
  }
  return {
    name: `Conversor de ${C}`,
    title: [`Conversor de ${C}: todas las unidades (${short})`, `Conversor de ${C}: todas las unidades`, `Conversor de ${C}`].find((x) => x.length <= 62)!,
    description: `Conversor de ${C} gratuito e instantáneo. Convierte entre ${c.units.length} unidades como ${short} con precisión, con enlaces a las conversiones más populares.`,
    h1: `Conversor de unidades de ${C}`,
    intro: `Convierte entre distintas unidades de ${C} en un solo paso.`,
    steps: ['Escribe el valor.', 'Elige la unidad de origen y la unidad de destino.', 'Lee el resultado al instante o usa el botón de intercambio.'],
    faq: [
      { q: `¿Qué unidades admite el conversor de ${C}?`, a: `${list}.` },
      { q: '¿Cómo funciona la conversión?', a: 'El valor se convierte primero a una unidad base y después a la unidad de destino, así el resultado es exacto entre cualquier par de unidades.' },
      { q: '¿Qué tan precisos son los resultados?', a: 'Usamos los factores de conversión oficiales. Los resultados se redondean a 7 cifras significativas.' },
    ],
  };
}

const build = (lang: L) => {
  const out: Record<string, Text> = {};
  for (const c of ucats) out[c.slug] = catText(c.id, lang);
  for (const [cat, f, t] of pairs) out[pairSlug(cat, f, t)] = pairText(cat, f, t, lang);
  return out;
};

export const converterFr = build('fr');
export const converterEs = build('es');
