// French and Spanish text for the template pages: temperature pairs, countdowns, GPA, currency
// converter, VAT, average, calorie and date calculators, and currency pair pages.
import type { Tool } from './tools';
import { currencies } from './currencies';
import { TN, formula, sample, exampleVal, n2, tconv, fromC, tempPairs, tempSlug, EVENTS, countdownSlug, dateIn, gradeScale, type Ev } from './extra';
import { fxPairs, fxSlug } from './extra2';

type Text = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'tableTitle' | 'table' | 'about'>;
type L = 'fr' | 'es';
const cap = (x: string) => x.charAt(0).toUpperCase() + x.slice(1);
const LOC: Record<L, string> = { fr: 'fr-FR', es: 'es-ES' };

/* ---------- temperature ---------- */
const TNm: Record<string, { fr: string; es: string }> = { c: { fr: 'degrés Celsius', es: 'grados Celsius' }, f: { fr: 'degrés Fahrenheit', es: 'grados Fahrenheit' }, k: { fr: 'kelvins', es: 'kelvin' } };
function tempText(a: 'c' | 'f' | 'k', b: 'c' | 'f' | 'k', lang: L): Text {
  const A = TNm[a][lang], B = TNm[b][lang], sa = TN[a].sym, sb = TN[b].sym, fm = formula[a + b];
  const ex = exampleVal[a], exr = n2(tconv(a, b, ex));
  const rows = sample[a].map((v) => [`${n2(v)} ${sa}`, `${n2(tconv(a, b, v))} ${sb}`]);
  const cf = (a === 'c' && b === 'f') || (a === 'f' && b === 'c');
  const abs = n2(fromC(b, -273.15));
  if (lang === 'fr') {
    return {
      name: `${cap(A)} en ${B}`,
      title: `Convertir des ${A} en ${B} (${sa} en ${sb})`,
      description: `Convertisseur gratuit : ${A} en ${B}. Convertissez ${sa} en ${sb} instantanément avec la formule ${fm}, un tableau de conversion et des exemples.`,
      h1: `Convertir des ${A} en ${B}`,
      intro: `Convertissez des ${A} en ${B} instantanément. Formule : ${fm}.`,
      steps: [`Saisissez la température en ${A}.`, 'Utilisez le bouton d’inversion pour convertir dans l’autre sens.', `Lisez aussitôt le résultat en ${B}.`],
      faq: [
        { q: `Comment convertir des ${A} en ${B} ?`, a: `Utilisez la formule ${fm}. Par exemple, ${n2(ex)} ${sa} font ${exr} ${sb}.` },
        { q: `Combien font ${n2(ex)} ${sa} en ${B} ?`, a: `${n2(ex)} ${sa} = ${exr} ${sb}.` },
        cf ? { q: 'À quelle température Celsius et Fahrenheit sont-ils égaux ?', a: 'À −40 degrés. −40 °C correspondent exactement à −40 °F.' } : { q: `Combien vaut le zéro absolu en ${B} ?`, a: `Le zéro absolu (0 K) vaut ${abs} ${sb}.` },
      ],
      about: { title: `Formule : ${A} en ${B}`, paras: [`Pour convertir une température de ${A} (${sa}) en ${B} (${sb}), utilisez la formule : ${fm}.`, `Exemple : pour convertir ${n2(ex)} ${sa}, appliquez la formule et vous obtenez ${exr} ${sb}.`] },
      tableTitle: `Tableau de conversion : ${A} en ${B}`,
      table: { head: [sa, sb], rows },
    };
  }
  return {
    name: `${cap(A)} a ${B}`,
    title: `Convertir ${A} a ${B} (${sa} a ${sb}) + tabla`,
    description: `Conversor gratuito: ${A} a ${B}. Convierte ${sa} a ${sb} al instante con la fórmula ${fm}, una tabla de conversión y ejemplos resueltos.`,
    h1: `Convertir ${A} a ${B}`,
    intro: `Convierte ${A} a ${B} al instante. Fórmula: ${fm}.`,
    steps: [`Escribe la temperatura en ${A}.`, 'Usa el botón de intercambio para convertir en sentido contrario.', `Lee el resultado en ${B} al momento.`],
    faq: [
      { q: `¿Cómo se convierten ${A} a ${B}?`, a: `Usa la fórmula ${fm}. Por ejemplo, ${n2(ex)} ${sa} son ${exr} ${sb}.` },
      { q: `¿Cuántos ${B} son ${n2(ex)} ${sa}?`, a: `${n2(ex)} ${sa} = ${exr} ${sb}.` },
      cf ? { q: '¿A qué temperatura coinciden Celsius y Fahrenheit?', a: 'A −40 grados. −40 °C son exactamente −40 °F.' } : { q: `¿Cuánto es el cero absoluto en ${B}?`, a: `El cero absoluto (0 K) es ${abs} ${sb}.` },
    ],
    about: { title: `Fórmula: ${A} a ${B}`, paras: [`Para convertir una temperatura de ${A} (${sa}) a ${B} (${sb}), usa la fórmula: ${fm}.`, `Ejemplo: para convertir ${n2(ex)} ${sa}, aplica la fórmula y obtienes ${exr} ${sb}.`] },
    tableTitle: `Tabla de conversión: ${A} a ${B}`,
    table: { head: [sa, sb], rows },
  };
}

/* ---------- countdowns ---------- */
const EVN: Record<string, { fr: string; es: string }> = {
  christmas: { fr: 'Noël', es: 'la Navidad' },
  'new-year': { fr: 'le Nouvel An', es: 'Año Nuevo' },
  halloween: { fr: 'Halloween', es: 'Halloween' },
  'valentines-day': { fr: 'la Saint-Valentin', es: 'San Valentín' },
  thanksgiving: { fr: 'Thanksgiving', es: 'Acción de Gracias' },
  'black-friday': { fr: 'le Black Friday', es: 'el Black Friday' },
  easter: { fr: 'Pâques', es: 'la Pascua' },
  ramadan: { fr: 'le Ramadan', es: 'el Ramadán' },
  'eid-al-fitr': { fr: 'l’Aïd el-Fitr', es: 'el Eid al-Fitr' },
  'eid-al-adha': { fr: 'l’Aïd el-Adha', es: 'el Eid al-Adha' },
};
const WD = { fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'], es: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'] };
const MN = {
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
};
const fmtDate = (d: Date, lang: L) =>
  lang === 'fr' ? `${WD.fr[d.getUTCDay()]} ${d.getUTCDate()} ${MN.fr[d.getUTCMonth()]} ${d.getUTCFullYear()}` : `${WD.es[d.getUTCDay()]}, ${d.getUTCDate()} de ${MN.es[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
const rule = (e: Ev, lang: L) => {
  const s = e.spec;
  if (lang === 'fr') {
    if (s.kind === 'fixed') return `Tombe le ${s.d} ${MN.fr[s.m - 1]} chaque année`;
    if (s.kind === 'nth') return 'Tombe le quatrième jeudi de novembre chaque année';
    if (s.kind === 'black') return 'C’est le vendredi qui suit Thanksgiving, fin novembre';
    return e.note ? 'Dépend de l’observation de la lune : les dates indiquées sont prévisionnelles et peuvent varier d’un jour' : 'Sa date change chaque année';
  }
  if (s.kind === 'fixed') return `Cae el ${s.d} de ${MN.es[s.m - 1]} cada año`;
  if (s.kind === 'nth') return 'Cae el cuarto jueves de noviembre cada año';
  if (s.kind === 'black') return 'Es el viernes siguiente a Acción de Gracias, a finales de noviembre';
  return e.note ? 'Depende de la observación de la luna: las fechas indicadas son previstas y pueden variar un día' : 'Su fecha cambia cada año';
};
function countdownText(e: Ev, lang: L): Text {
  const x = EVN[e.id][lang];
  const years = e.spec.kind === 'list' ? e.spec.dates.map((s) => +s.slice(0, 4)) : [2027, 2028, 2029, 2030, 2031];
  const rows = years.map((y) => {
    const d = dateIn(e.spec, y)!;
    return lang === 'fr' ? [String(y), `${d.getUTCDate()} ${MN.fr[d.getUTCMonth()]}`, WD.fr[d.getUTCDay()]] : [String(y), `${d.getUTCDate()} de ${MN.es[d.getUTCMonth()]}`, WD.es[d.getUTCDay()]];
  });
  const first = dateIn(e.spec, years[0])!, second = dateIn(e.spec, years[1])!;
  if (lang === 'fr') {
    return {
      name: `Jours avant ${x}`,
      title: `Combien de jours avant ${x} ? Compte à rebours`,
      description: `Compte à rebours en direct avant ${x} : jours, heures, minutes et secondes restantes, avec la date des prochaines années. Mise à jour automatique.`,
      h1: `Combien de jours avant ${x} ?`,
      intro: `Un compte à rebours en direct qui affiche le temps restant avant ${x} en jours, heures, minutes et secondes.`,
      steps: ['Ouvrez la page : le compte à rebours démarre tout seul.', 'Lisez les jours restants, avec les semaines, heures et minutes en dessous.', 'Consultez le tableau des dates pour les prochaines années.'],
      faq: [
        { q: `Quand a lieu ${x} ?`, a: `${rule(e, 'fr')}. En ${years[0]} : ${fmtDate(first, 'fr')} ; en ${years[1]} : ${fmtDate(second, 'fr')}.` },
        { q: `Combien de semaines avant ${x} ?`, a: 'Le compte à rebours affiche les semaines et jours restants sous le nombre de jours. À la main, divisez le nombre de jours par 7.' },
        { q: 'Le compte à rebours est-il précis ?', a: 'Il utilise l’horloge et la date de votre appareil, et compte jusqu’au début de la journée dans votre fuseau horaire.' },
      ],
      about: { title: `Quand a lieu ${x} ?`, paras: [`${rule(e, 'fr')}. Le tableau ci-dessous indique sa date pour les prochaines années, avec le jour de la semaine.`] },
      tableTitle: `${cap(x)} : dates des prochaines années`,
      table: { head: ['Année', 'Date', 'Jour'], rows },
    };
  }
  return {
    name: `Días para ${x}`,
    title: `¿Cuántos días faltan para ${x}? Cuenta atrás`,
    description: `Cuenta atrás en directo para ${x}: días, horas, minutos y segundos que faltan, con su fecha en los próximos años. Se actualiza solo.`,
    h1: `¿Cuántos días faltan para ${x}?`,
    intro: `Una cuenta atrás en directo que muestra el tiempo que falta para ${x} en días, horas, minutos y segundos.`,
    steps: ['Abre la página y la cuenta atrás empieza sola.', 'Lee los días que faltan, con semanas, horas y minutos debajo.', 'Usa la tabla de fechas para ver cuándo cae en los próximos años.'],
    faq: [
      { q: `¿Cuándo es ${x}?`, a: `${rule(e, 'es')}. En ${years[0]}: ${fmtDate(first, 'es')}; en ${years[1]}: ${fmtDate(second, 'es')}.` },
      { q: `¿Cuántas semanas faltan para ${x}?`, a: 'La cuenta atrás muestra las semanas y los días restantes bajo el número de días. A mano, divide los días entre 7.' },
      { q: '¿Qué tan precisa es la cuenta atrás?', a: 'Usa el reloj y la fecha de tu dispositivo y cuenta hasta el inicio del día en tu zona horaria.' },
    ],
    about: { title: `¿Cuándo es ${x}?`, paras: [`${rule(e, 'es')}. La tabla siguiente muestra su fecha en los próximos años, con el día de la semana.`] },
    tableTitle: `${cap(x)}: fechas de los próximos años`,
    table: { head: ['Año', 'Fecha', 'Día'], rows },
  };
}

/* ---------- GPA ---------- */
const gpaFr: Text = {
  name: 'Calculateur de moyenne GPA',
  title: 'Calculateur de GPA : moyenne semestrielle et cumulée (4,0)',
  description: 'Calculateur de GPA gratuit. Ajoutez vos matières, notes et crédits pour obtenir votre moyenne du semestre, ou votre GPA cumulé sur l’échelle de 4,0.',
  h1: 'Calculateur de GPA',
  intro: 'Ajoutez chaque matière avec sa note en lettre et ses crédits pour voir votre GPA sur l’échelle de 4,0. Ajoutez votre GPA actuel pour obtenir le cumul.',
  steps: ['Choisissez la note en lettre et saisissez les crédits de chaque matière.', 'Ajoutez ou supprimez des lignes selon votre semestre.', 'Facultatif : saisissez votre GPA actuel et vos crédits validés pour obtenir votre GPA cumulé.'],
  faq: [
    { q: 'Comment calcule-t-on le GPA ?', a: 'Multipliez les points de chaque matière par ses crédits, additionnez, puis divisez par le total des crédits. Par exemple, un A (4,0) sur 3 crédits et un B (3,0) sur 4 crédits donnent (4,0 × 3 + 3,0 × 4) ÷ 7 = 3,43.' },
    { q: 'Comment calculer mon GPA cumulé ?', a: 'Additionnez vos points précédents (GPA actuel × crédits validés) et ceux du nouveau semestre, puis divisez par le total des crédits. Saisissez votre GPA et vos crédits dans les champs facultatifs.' },
    { q: 'Un A+ vaut-il 4,0 ou 4,3 ?', a: 'La plupart des universités américaines comptent A+ comme 4,0, comme ce calculateur. Quelques-unes utilisent 4,3 : vérifiez le règlement de votre établissement.' },
    { q: 'Est-ce un GPA pondéré ?', a: 'Non. Il utilise l’échelle standard non pondérée de 4,0. Certains établissements ajoutent des points pour les cours avancés, votre GPA officiel peut donc être plus élevé.' },
  ],
  about: { title: 'Comment le GPA est calculé', paras: ['Le GPA (grade point average) transforme les notes en lettres en chiffres et en fait la moyenne, chaque matière étant pondérée par ses crédits. Une matière de 4 crédits compte plus qu’une de 2.', 'Formule : GPA = somme (points × crédits) ÷ somme des crédits. Le tableau ci-dessous donne les points utilisés par ce calculateur.'] },
  tableTitle: 'Note en lettre et points (échelle de 4,0)',
  table: { head: ['Note', 'Points'], rows: gradeScale.map(([g, p]) => [g, p.toFixed(1).replace('.', ',')]) },
};
const gpaEs: Text = {
  name: 'Calculadora de promedio GPA',
  title: 'Calculadora de GPA: promedio semestral y acumulado (4.0)',
  description: 'Calculadora de GPA gratuita. Añade tus materias, notas y créditos para obtener tu promedio del semestre o tu GPA acumulado en la escala de 4.0.',
  h1: 'Calculadora de GPA',
  intro: 'Añade cada materia con su nota en letra y sus créditos para ver tu GPA en la escala de 4.0. Añade tu GPA actual para obtener el acumulado.',
  steps: ['Elige la nota en letra y escribe los créditos de cada materia.', 'Añade o quita filas según tu semestre.', 'Opcional: escribe tu GPA actual y tus créditos cursados para obtener tu GPA acumulado.'],
  faq: [
    { q: '¿Cómo se calcula el GPA?', a: 'Multiplica los puntos de cada materia por sus créditos, suma y divide entre el total de créditos. Por ejemplo, una A (4.0) en 3 créditos y una B (3.0) en 4 créditos dan (4.0 × 3 + 3.0 × 4) ÷ 7 = 3.43.' },
    { q: '¿Cómo calculo mi GPA acumulado?', a: 'Suma tus puntos anteriores (GPA actual × créditos cursados) y los del nuevo semestre, y divide entre el total de créditos. Escribe tu GPA y tus créditos en los campos opcionales.' },
    { q: '¿Una A+ vale 4.0 o 4.3?', a: 'La mayoría de las universidades de EE. UU. cuentan A+ como 4.0, igual que esta calculadora. Algunas usan 4.3: consulta la normativa de tu centro.' },
    { q: '¿Es un GPA ponderado?', a: 'No. Usa la escala estándar sin ponderar de 4.0. Algunos centros añaden puntos por cursos avanzados, así que tu GPA oficial puede ser mayor.' },
  ],
  about: { title: 'Cómo se calcula el GPA', paras: ['El GPA (grade point average) convierte las notas en letras en números y los promedia, ponderando cada materia por sus créditos. Una materia de 4 créditos pesa más que una de 2.', 'Fórmula: GPA = suma (puntos × créditos) ÷ suma de créditos. La tabla siguiente muestra los puntos que usa esta calculadora.'] },
  tableTitle: 'Nota en letra y puntos (escala de 4.0)',
  table: { head: ['Nota', 'Puntos'], rows: gradeScale.map(([g, p]) => [g, p.toFixed(1)]) },
};

/* ---------- currency converter ---------- */
const fxFr: Text = {
  name: 'Convertisseur de devises',
  title: 'Convertisseur de devises : taux de change en direct (37 devises)',
  description: 'Convertisseur de devises gratuit avec taux de change actuels. Convertissez dollars, euros, livres, livres égyptiennes, riyals saoudiens, dinars jordaniens et 30 autres devises.',
  h1: 'Convertisseur de devises',
  intro: 'Convertissez entre 37 devises mondiales avec les taux de change actuels. Les taux sont rechargés à chaque ouverture de la page.',
  steps: ['Saisissez le montant.', 'Choisissez la devise de départ et celle d’arrivée.', 'Lisez le résultat et le taux utilisé. Le bouton d’inversion permet de convertir dans l’autre sens.'],
  faq: [
    { q: 'D’où viennent les taux de change ?', a: 'Les taux proviennent d’un service public de données de change, mis à jour une fois par jour. La date de la dernière mise à jour s’affiche sous chaque résultat.' },
    { q: 'Est-ce le taux que ma banque ou mon bureau de change m’appliquera ?', a: 'Non. Ce sont des taux de référence du marché. Les banques, cartes et bureaux de change ajoutent une marge ou des frais : le montant réel est généralement un peu inférieur.' },
    { q: 'Comment convertir des dollars américains en une autre devise ?', a: 'Saisissez le montant en dollars, choisissez USD comme devise de départ et la devise voulue comme devise d’arrivée. Le convertisseur multiplie le montant par le taux actuel.' },
    { q: 'Pourquoi le résultat change-t-il avec le temps ?', a: 'Les taux de change évoluent avec le marché. Rouvrez la page plus tard pour voir le dernier taux.' },
  ],
  about: { title: 'Comment fonctionne la conversion de devises', paras: ['Pour convertir un montant d’une devise à une autre, multipliez-le par le taux de change : montant dans la devise d’arrivée = montant × taux. Le taux indique combien d’unités de la devise d’arrivée une unité de la devise de départ permet d’obtenir.', 'Ce convertisseur utilise le dollar américain comme base commune. Il divise le taux de la devise d’arrivée par celui de la devise de départ ; il fonctionne donc entre deux des 37 devises prises en charge.'] },
};
const fxEs: Text = {
  name: 'Conversor de divisas',
  title: 'Conversor de divisas: tipos de cambio en directo (37 monedas)',
  description: 'Conversor de divisas gratuito con tipos de cambio actuales. Convierte dólares, euros, libras, libras egipcias, riyales saudíes, dinares jordanos y 30 monedas más.',
  h1: 'Conversor de divisas',
  intro: 'Convierte entre 37 monedas del mundo con los tipos de cambio actuales. Los tipos se cargan de nuevo cada vez que abres la página.',
  steps: ['Escribe la cantidad.', 'Elige la moneda de origen y la de destino.', 'Lee el resultado y el tipo de cambio usado. El botón de intercambio invierte la conversión.'],
  faq: [
    { q: '¿De dónde salen los tipos de cambio?', a: 'Los tipos proceden de un servicio público de datos de cambio que se actualiza una vez al día. La fecha de la última actualización aparece bajo cada resultado.' },
    { q: '¿Es el tipo que me dará mi banco o casa de cambio?', a: 'No. Son tipos de referencia del mercado. Bancos, tarjetas y casas de cambio añaden un margen o comisión, así que lo que recibes suele ser algo menos.' },
    { q: '¿Cómo convierto dólares estadounidenses a otra moneda?', a: 'Escribe la cantidad en dólares, elige USD como moneda de origen y la moneda deseada como destino. El conversor multiplica la cantidad por el tipo actual.' },
    { q: '¿Por qué cambia el resultado con el tiempo?', a: 'Los tipos de cambio se mueven con el mercado. Vuelve a abrir la página más tarde para ver el último tipo.' },
  ],
  about: { title: 'Cómo funciona la conversión de divisas', paras: ['Para convertir una cantidad entre dos monedas, multiplícala por el tipo de cambio: cantidad en la moneda de destino = cantidad × tipo. El tipo indica cuántas unidades de la moneda de destino se obtienen por una unidad de la moneda de origen.', 'Este conversor usa el dólar estadounidense como base común. Divide el tipo de la moneda de destino entre el de la moneda de origen, por lo que funciona entre cualquier par de las 37 monedas admitidas.'] },
};

/* ---------- VAT / average / calories / date ---------- */
const vat: Record<L, Text> = {
  fr: {
    name: 'Calculateur de TVA', title: 'Calculateur de TVA : ajouter ou retirer la taxe d’un prix',
    description: 'Calculateur de TVA et de taxe de vente gratuit. Ajoutez la taxe à un prix ou retrouvez la taxe contenue dans un total, avec n’importe quel taux : 5 %, 10 %, 20 %.',
    h1: 'Calculateur de TVA', intro: 'Ajoutez la TVA à un prix, ou retirez-la d’un total qui la contient déjà. Fonctionne avec tous les taux.',
    steps: ['Saisissez le montant et le taux de taxe.', 'Choisissez d’ajouter la taxe ou de la retirer d’un total.', 'Lisez le montant hors taxe, la taxe et le total.'],
    faq: [
      { q: 'Comment ajouter la TVA à un prix ?', a: 'Multipliez le prix par (1 + taux ÷ 100). À 20 %, 100 devient 100 × 1,20 = 120.' },
      { q: 'Comment retirer la TVA d’un total ?', a: 'Divisez le total par (1 + taux ÷ 100). À 20 %, un total de 120 donne 120 ÷ 1,20 = 100, donc 20 de taxe.' },
      { q: 'Pourquoi ne pas simplement retirer 20 % du total ?', a: 'Parce que la taxe a été ajoutée au prix, pas au total. Retirer 20 % de 120 donne 96, ce qui est faux. Diviser par 1,20 donne le bon montant : 100.' },
    ],
  },
  es: {
    name: 'Calculadora de IVA', title: 'Calculadora de IVA: añadir o quitar el impuesto de un precio',
    description: 'Calculadora de IVA e impuestos de venta gratuita. Añade el impuesto a un precio o halla el impuesto incluido en un total, con cualquier tasa: 5 %, 10 %, 21 %.',
    h1: 'Calculadora de IVA', intro: 'Añade el IVA a un precio o quítalo de un total que ya lo incluye. Funciona con cualquier tasa.',
    steps: ['Escribe el importe y la tasa de impuesto.', 'Elige si añadir el impuesto o quitarlo de un total.', 'Lee el importe sin impuesto, el impuesto y el total.'],
    faq: [
      { q: '¿Cómo añado el IVA a un precio?', a: 'Multiplica el precio por (1 + tasa ÷ 100). Al 21 %, 100 pasa a ser 100 × 1.21 = 121.' },
      { q: '¿Cómo quito el IVA de un total?', a: 'Divide el total entre (1 + tasa ÷ 100). Al 21 %, un total de 121 da 121 ÷ 1.21 = 100, así que el impuesto es 21.' },
      { q: '¿Por qué no restar simplemente el 21 % del total?', a: 'Porque el impuesto se añadió al precio, no al total. Restar el 21 % de 121 da 95.59, que es incorrecto. Dividir entre 1.21 da el 100 correcto.' },
    ],
  },
};
const avg: Record<L, Text> = {
  fr: {
    name: 'Calculateur de moyenne', title: 'Calculateur de moyenne : moyenne, médiane et mode',
    description: 'Calculateur de moyenne gratuit. Collez une liste de nombres pour obtenir moyenne, médiane, mode, somme, nombre, minimum, maximum et étendue instantanément.',
    h1: 'Calculateur de moyenne', intro: 'Collez ou saisissez une liste de nombres pour obtenir d’un coup moyenne, médiane, mode, somme et étendue.',
    steps: ['Saisissez ou collez vos nombres, séparés par des virgules, espaces ou retours à la ligne.', 'Les résultats se mettent à jour pendant la saisie.', 'Lisez la moyenne, la médiane, le mode et les autres statistiques.'],
    faq: [
      { q: 'Comment calculer une moyenne ?', a: 'Additionnez tous les nombres et divisez par leur quantité. La moyenne de 12, 7, 9, 15 et 7 est 50 ÷ 5 = 10.' },
      { q: 'Quelle différence entre moyenne, médiane et mode ?', a: 'La moyenne est la valeur moyenne habituelle. La médiane est la valeur du milieu une fois les nombres triés. Le mode est la valeur la plus fréquente.' },
      { q: 'Quand utiliser la médiane plutôt que la moyenne ?', a: 'Quand quelques valeurs très grandes ou très petites faussent la moyenne, comme les salaires ou les prix de l’immobilier. La médiane ignore les extrêmes.' },
    ],
  },
  es: {
    name: 'Calculadora de promedio', title: 'Calculadora de promedio: media, mediana y moda',
    description: 'Calculadora de promedio gratuita. Pega una lista de números y obtén al instante la media, mediana, moda, suma, cantidad, mínimo, máximo y rango.',
    h1: 'Calculadora de promedio', intro: 'Pega o escribe una lista de números para obtener de una vez la media, mediana, moda, suma y rango.',
    steps: ['Escribe o pega tus números, separados por comas, espacios o saltos de línea.', 'Los resultados se actualizan mientras escribes.', 'Lee la media, la mediana, la moda y el resto de estadísticas.'],
    faq: [
      { q: '¿Cómo se calcula un promedio?', a: 'Suma todos los números y divide entre cuántos hay. El promedio de 12, 7, 9, 15 y 7 es 50 ÷ 5 = 10.' },
      { q: '¿Qué diferencia hay entre media, mediana y moda?', a: 'La media es el promedio habitual. La mediana es el valor central al ordenar los números. La moda es el valor que más se repite.' },
      { q: '¿Cuándo usar la mediana en lugar de la media?', a: 'Cuando unos pocos valores muy grandes o muy pequeños distorsionan la media, como sueldos o precios de viviendas. La mediana ignora los extremos.' },
    ],
  },
};
const cal: Record<L, Text> = {
  fr: {
    name: 'Calculateur de calories', title: 'Calculateur de calories : besoins pour perdre ou prendre du poids',
    description: 'Calculateur de calories gratuit. Saisissez âge, poids, taille et activité pour obtenir votre métabolisme de base et les calories à consommer pour maintenir, perdre ou prendre du poids.',
    h1: 'Calculateur de calories quotidiennes', intro: 'Estimez combien de calories vous brûlez chaque jour et combien consommer pour maintenir, perdre ou prendre du poids.',
    steps: ['Saisissez votre sexe, âge, poids et taille.', 'Choisissez votre niveau d’activité.', 'Lisez vos calories de maintien et les objectifs pour perdre ou prendre du poids.'],
    faq: [
      { q: 'Comment calcule-t-on les calories quotidiennes ?', a: 'Le calculateur utilise l’équation de Mifflin-St Jeor pour le métabolisme de base (MB), puis le multiplie par un facteur d’activité de 1,2 à 1,9.' },
      { q: 'De combien de calories réduire pour perdre du poids ?', a: 'Un déficit d’environ 500 calories par jour correspond en général à une perte d’environ 0,5 kg par semaine. Évitez de descendre très en dessous de votre MB sans avis médical.' },
      { q: 'Le résultat est-il exact ?', a: 'Non, c’est une estimation. Masse musculaire, génétique et état de santé modifient les besoins réels. Consultez un médecin ou un diététicien pour un avis personnalisé.' },
    ],
  },
  es: {
    name: 'Calculadora de calorías', title: 'Calculadora de calorías: necesidades para bajar o subir de peso',
    description: 'Calculadora de calorías gratuita. Introduce edad, peso, altura y actividad para obtener tu metabolismo basal y las calorías diarias para mantener, perder o ganar peso.',
    h1: 'Calculadora de calorías diarias', intro: 'Estima cuántas calorías quemas al día y cuántas comer para mantener, perder o ganar peso.',
    steps: ['Introduce tu sexo, edad, peso y altura.', 'Elige tu nivel de actividad.', 'Lee tus calorías de mantenimiento y los objetivos para perder o ganar peso.'],
    faq: [
      { q: '¿Cómo se calculan las calorías diarias?', a: 'La calculadora usa la ecuación de Mifflin-St Jeor para la tasa metabólica basal (TMB) y la multiplica por un factor de actividad de 1.2 a 1.9.' },
      { q: '¿Cuántas calorías reducir para perder peso?', a: 'Un déficit de unas 500 calorías al día suele suponer perder cerca de 0.5 kg por semana. Evita bajar mucho de tu TMB sin consejo médico.' },
      { q: '¿Es exacto el resultado?', a: 'No, es una estimación. La masa muscular, la genética y las condiciones de salud cambian las necesidades reales. Consulta a un médico o dietista para un consejo personal.' },
    ],
  },
};
const dat: Record<L, Text> = {
  fr: {
    name: 'Calculateur de date', title: 'Calculateur de date : quelle date dans X jours ?',
    description: 'Calculateur de date gratuit. Ajoutez ou retirez des jours à n’importe quelle date, y compris aujourd’hui, et obtenez la date résultante avec le jour de la semaine.',
    h1: 'Ajouter ou retirer des jours à une date', intro: 'Trouvez la date située un certain nombre de jours après ou avant n’importe quelle date. Pratique pour échéances et délais de 30, 60 ou 90 jours.',
    steps: ['Choisissez la date de départ (aujourd’hui par défaut).', 'Saisissez le nombre de jours et choisissez ajouter ou retirer.', 'Lisez la date résultante et le jour de la semaine.'],
    faq: [
      { q: 'Quelle date dans 30 jours ?', a: 'Laissez la date de départ sur aujourd’hui, saisissez 30 et choisissez « Ajouter des jours ». Le calculateur affiche la date et le jour.' },
      { q: 'Gère-t-il les mois de longueurs différentes et les années bissextiles ?', a: 'Oui. Il compte de vrais jours calendaires, donc la longueur des mois et les années bissextiles sont bien prises en compte.' },
      { q: 'Le jour de départ est-il compté ?', a: 'Non. Ajouter 1 jour à un lundi donne mardi. La date de départ est le jour zéro.' },
    ],
  },
  es: {
    name: 'Calculadora de fechas', title: 'Calculadora de fechas: ¿qué fecha será dentro de X días?',
    description: 'Calculadora de fechas gratuita. Suma o resta días a cualquier fecha, incluido hoy, y obtén la fecha resultante con el día de la semana.',
    h1: 'Sumar o restar días a una fecha', intro: 'Halla la fecha que queda un número de días después o antes de cualquier fecha. Útil para plazos, vencimientos y periodos de 30, 60 o 90 días.',
    steps: ['Elige la fecha de inicio (hoy por defecto).', 'Escribe el número de días y elige sumar o restar.', 'Lee la fecha resultante y el día de la semana.'],
    faq: [
      { q: '¿Qué fecha será dentro de 30 días?', a: 'Deja la fecha de inicio en hoy, escribe 30 y elige «Sumar días». La calculadora muestra la fecha y el día.' },
      { q: '¿Tiene en cuenta meses de distinta duración y años bisiestos?', a: 'Sí. Cuenta días de calendario reales, así que la duración de los meses y los años bisiestos se tratan bien.' },
      { q: '¿Se cuenta el día de inicio?', a: 'No. Sumar 1 día a un lunes da martes. La fecha de inicio es el día cero.' },
    ],
  },
};

/* ---------- currency pair pages ---------- */
const cname = new Map(currencies.map(([c, , , fr, es]) => [c, { fr, es }]));
function fxPairText(a: string, b: string, lang: L): Text {
  const A = cname.get(a)![lang], B = cname.get(b)![lang];
  if (lang === 'fr') {
    return {
      name: `${a} en ${b}`,
      title: `${a} en ${b} : convertisseur de devises en direct`,
      description: `Convertissez ${a} en ${b} (${A} en ${B}) au taux de change actuel. Gratuit, avec inversion et date de mise à jour du taux.`,
      h1: `${cap(A)} en ${B} (${a} en ${b})`,
      intro: `Convertissez des ${A} en ${B} au taux de change actuel. Le taux est rechargé à chaque ouverture de la page.`,
      steps: [`Saisissez le montant en ${a}.`, `Le résultat en ${b} s’affiche avec le taux utilisé.`, 'Utilisez le bouton d’inversion pour convertir dans l’autre sens.'],
      faq: [
        { q: `Combien vaut 1 ${a} en ${b} ?`, a: `Ouvrez cette page et lisez la ligne du taux sous le résultat : elle indique la valeur du jour de 1 ${a} en ${b}.` },
        { q: `Comment convertir des ${a} en ${b} ?`, a: `Multipliez le montant en ${a} par le taux ${a} en ${b} actuel. Ce convertisseur le fait pour vous et met à jour le taux à chaque chargement.` },
        { q: 'Est-ce le taux obtenu en banque ?', a: 'Non. C’est le taux de référence du marché. Banques et bureaux de change ajoutent une marge ou des frais ; le taux réel est en général légèrement moins favorable.' },
      ],
      about: { title: `À propos de ${a} et ${b}`, paras: [`${a} est le code de la devise « ${A} » et ${b} celui de « ${B} ». Le taux de change entre les deux évolue avec le marché : vérifiez-le à nouveau avant un virement ou un achat.`] },
    };
  }
  return {
    name: `${a} a ${b}`,
    title: `${a} a ${b}: conversor de divisas en directo`,
    description: `Convierte ${a} a ${b} (${A} a ${B}) con el tipo de cambio actual. Gratis, con intercambio y fecha de actualización del tipo.`,
    h1: `${cap(A)} a ${B} (${a} a ${b})`,
    intro: `Convierte ${A} a ${B} con el tipo de cambio actual. El tipo se carga de nuevo cada vez que abres la página.`,
    steps: [`Escribe la cantidad en ${a}.`, `El resultado en ${b} aparece con el tipo usado.`, 'Usa el botón de intercambio para convertir en sentido contrario.'],
    faq: [
      { q: `¿Cuánto es 1 ${a} en ${b}?`, a: `Abre esta página y lee la línea del tipo bajo el resultado: muestra el valor de hoy de 1 ${a} en ${b}.` },
      { q: `¿Cómo convierto ${a} a ${b}?`, a: `Multiplica la cantidad en ${a} por el tipo ${a} a ${b} actual. Este conversor lo hace por ti y actualiza el tipo cada vez que carga la página.` },
      { q: '¿Es el tipo que me darán en el banco?', a: 'No. Es el tipo de referencia del mercado. Bancos y casas de cambio añaden un margen o comisión; el tipo real suele ser algo peor.' },
    ],
    about: { title: `Sobre ${a} y ${b}`, paras: [`${a} es el código de «${A}» y ${b} el de «${B}». El tipo de cambio entre ambas varía con el mercado: compruébalo de nuevo antes de una transferencia o una compra.`] },
  };
}

const build = (lang: L): Record<string, Text> => ({
  'gpa-calculator': lang === 'fr' ? gpaFr : gpaEs,
  'currency-converter': lang === 'fr' ? fxFr : fxEs,
  'vat-calculator': vat[lang],
  'average-calculator': avg[lang],
  'calorie-calculator': cal[lang],
  'date-calculator': dat[lang],
  ...Object.fromEntries(tempPairs.map(([a, b]) => [tempSlug(a, b), tempText(a, b, lang)])),
  ...Object.fromEntries(EVENTS.map((e) => [countdownSlug(e.id), countdownText(e, lang)])),
  ...Object.fromEntries(fxPairs.map(([a, b]) => [fxSlug(a, b), fxPairText(a, b, lang)])),
});
export const extraFr = build('fr');
export const extraEs = build('es');
void LOC;
