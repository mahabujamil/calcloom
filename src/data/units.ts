// Unit data for the converters. f = how many base units one of this unit equals.
export interface Unit {
  id: string;
  w: string; // word used in URLs, e.g. "miles"
  sym: string;
  en: string; // plural display name
  en1: string; // singular
  ar: string;
  fr: string;
  fr1: string;
  es: string;
  es1: string;
  f: number;
}

export interface UCat {
  id: string;
  slug: string;
  en: string;
  ar: string;
  fr: string;
  es: string;
  from: string; // default units on the category page
  to: string;
  units: Unit[];
}

const u = (id: string, w: string, sym: string, en: string, en1: string, ar: string, f: number): Unit => ({ id, w, sym, en, en1, ar, fr: '', fr1: '', es: '', es1: '', f });

export const ucats: UCat[] = [
  {
    id: 'length', slug: 'length-converter', en: 'Length', ar: 'الطول', from: 'km', to: 'mi',
    units: [
      u('m', 'meters', 'm', 'Metres', 'metre', 'متر', 1),
      u('km', 'km', 'km', 'Kilometres', 'kilometre', 'كيلومتر', 1000),
      u('cm', 'cm', 'cm', 'Centimetres', 'centimetre', 'سنتيمتر', 0.01),
      u('mm', 'mm', 'mm', 'Millimetres', 'millimetre', 'ملليمتر', 0.001),
      u('mi', 'miles', 'mi', 'Miles', 'mile', 'ميل', 1609.344),
      u('yd', 'yards', 'yd', 'Yards', 'yard', 'ياردة', 0.9144),
      u('ft', 'feet', 'ft', 'Feet', 'foot', 'قدم', 0.3048),
      u('in', 'inches', 'in', 'Inches', 'inch', 'إنش', 0.0254),
      u('nmi', 'nautical-miles', 'nmi', 'Nautical miles', 'nautical mile', 'ميل بحري', 1852),
    ],
  },
  {
    id: 'weight', slug: 'weight-converter', en: 'Weight', ar: 'الوزن', from: 'kg', to: 'lb',
    units: [
      u('kg', 'kg', 'kg', 'Kilograms', 'kilogram', 'كيلوغرام', 1),
      u('g', 'grams', 'g', 'Grams', 'gram', 'غرام', 0.001),
      u('mg', 'mg', 'mg', 'Milligrams', 'milligram', 'ملليغرام', 0.000001),
      u('t', 'tonnes', 't', 'Tonnes', 'tonne', 'طن', 1000),
      u('lb', 'pounds', 'lb', 'Pounds', 'pound', 'رطل', 0.45359237),
      u('oz', 'ounces', 'oz', 'Ounces', 'ounce', 'أونصة', 0.028349523125),
      u('st', 'stone', 'st', 'Stone', 'stone', 'ستون', 6.35029318),
    ],
  },
  {
    id: 'volume', slug: 'volume-converter', en: 'Volume', ar: 'الحجم', from: 'l', to: 'gal',
    units: [
      u('l', 'liters', 'L', 'Litres', 'litre', 'لتر', 1),
      u('ml', 'ml', 'mL', 'Millilitres', 'millilitre', 'ملليلتر', 0.001),
      u('m3', 'cubic-meters', 'm³', 'Cubic metres', 'cubic metre', 'متر مكعب', 1000),
      u('gal', 'gallons', 'gal', 'US gallons', 'US gallon', 'غالون أمريكي', 3.785411784),
      u('galuk', 'uk-gallons', 'gal UK', 'UK gallons', 'UK gallon', 'غالون بريطاني', 4.54609),
      u('qt', 'quarts', 'qt', 'US quarts', 'US quart', 'كوارت', 0.946352946),
      u('pt', 'pints', 'pt', 'US pints', 'US pint', 'باينت', 0.473176473),
      u('cup', 'cups', 'cup', 'US cups', 'US cup', 'كوب', 0.2365882365),
      u('floz', 'fluid-ounces', 'fl oz', 'US fluid ounces', 'US fluid ounce', 'أونصة سائلة', 0.0295735295625),
      u('tbsp', 'tablespoons', 'tbsp', 'Tablespoons', 'tablespoon', 'ملعقة كبيرة', 0.01478676478125),
      u('tsp', 'teaspoons', 'tsp', 'Teaspoons', 'teaspoon', 'ملعقة صغيرة', 0.00492892159375),
    ],
  },
  {
    id: 'area', slug: 'area-converter', en: 'Area', ar: 'المساحة', from: 'm2', to: 'ft2',
    units: [
      u('m2', 'square-meters', 'm²', 'Square metres', 'square metre', 'متر مربع', 1),
      u('km2', 'square-km', 'km²', 'Square kilometres', 'square kilometre', 'كيلومتر مربع', 1000000),
      u('cm2', 'square-cm', 'cm²', 'Square centimetres', 'square centimetre', 'سنتيمتر مربع', 0.0001),
      u('ha', 'hectares', 'ha', 'Hectares', 'hectare', 'هكتار', 10000),
      u('acre', 'acres', 'ac', 'Acres', 'acre', 'أكر', 4046.8564224),
      u('ft2', 'square-feet', 'ft²', 'Square feet', 'square foot', 'قدم مربعة', 0.09290304),
      u('in2', 'square-inches', 'in²', 'Square inches', 'square inch', 'إنش مربع', 0.00064516),
      u('yd2', 'square-yards', 'yd²', 'Square yards', 'square yard', 'ياردة مربعة', 0.83612736),
      u('mi2', 'square-miles', 'mi²', 'Square miles', 'square mile', 'ميل مربع', 2589988.110336),
    ],
  },
  {
    id: 'speed', slug: 'speed-converter', en: 'Speed', ar: 'السرعة', from: 'kmh', to: 'mph',
    units: [
      u('ms', 'ms', 'm/s', 'Metres per second', 'metre per second', 'متر/ثانية', 1),
      u('kmh', 'kmh', 'km/h', 'Kilometres per hour', 'kilometre per hour', 'كم/ساعة', 1 / 3.6),
      u('mph', 'mph', 'mph', 'Miles per hour', 'mile per hour', 'ميل/ساعة', 0.44704),
      u('kn', 'knots', 'kn', 'Knots', 'knot', 'عقدة', 0.514444444),
      u('fps', 'fps', 'ft/s', 'Feet per second', 'foot per second', 'قدم/ثانية', 0.3048),
    ],
  },
  {
    id: 'time', slug: 'time-converter', en: 'Time', ar: 'الوقت', from: 'h', to: 'min',
    units: [
      u('s', 'seconds', 's', 'Seconds', 'second', 'ثانية', 1),
      u('min', 'minutes', 'min', 'Minutes', 'minute', 'دقيقة', 60),
      u('h', 'hours', 'h', 'Hours', 'hour', 'ساعة', 3600),
      u('d', 'days', 'd', 'Days', 'day', 'يوم', 86400),
      u('wk', 'weeks', 'wk', 'Weeks', 'week', 'أسبوع', 604800),
      u('mo', 'months', 'mo', 'Months', 'month', 'شهر', 2629800),
      u('y', 'years', 'yr', 'Years', 'year', 'سنة', 31557600),
    ],
  },
  {
    id: 'data', slug: 'data-storage-converter', en: 'Data storage', ar: 'التخزين الرقمي', from: 'gb', to: 'mb',
    units: [
      u('bit', 'bits', 'bit', 'Bits', 'bit', 'بت', 0.125),
      u('byte', 'bytes', 'B', 'Bytes', 'byte', 'بايت', 1),
      u('kb', 'kb', 'KB', 'Kilobytes', 'kilobyte', 'كيلوبايت', 1e3),
      u('mb', 'mb', 'MB', 'Megabytes', 'megabyte', 'ميغابايت', 1e6),
      u('gb', 'gb', 'GB', 'Gigabytes', 'gigabyte', 'غيغابايت', 1e9),
      u('tb', 'tb', 'TB', 'Terabytes', 'terabyte', 'تيرابايت', 1e12),
      u('pb', 'pb', 'PB', 'Petabytes', 'petabyte', 'بيتابايت', 1e15),
    ],
  },
  {
    id: 'pressure', slug: 'pressure-converter', en: 'Pressure', ar: 'الضغط', from: 'psi', to: 'bar',
    units: [
      u('pa', 'pascals', 'Pa', 'Pascals', 'pascal', 'باسكال', 1),
      u('kpa', 'kpa', 'kPa', 'Kilopascals', 'kilopascal', 'كيلوباسكال', 1000),
      u('bar', 'bar', 'bar', 'Bar', 'bar', 'بار', 100000),
      u('psi', 'psi', 'psi', 'Pounds per square inch', 'pound per square inch', 'رطل/إنش مربع (psi)', 6894.757293168),
      u('atm', 'atm', 'atm', 'Atmospheres', 'atmosphere', 'ضغط جوي', 101325),
      u('mmhg', 'mmhg', 'mmHg', 'Millimetres of mercury', 'millimetre of mercury', 'ملم زئبق', 133.322387415),
    ],
  },
  {
    id: 'energy', slug: 'energy-converter', en: 'Energy', ar: 'الطاقة', from: 'kcal', to: 'kj',
    units: [
      u('j', 'joules', 'J', 'Joules', 'joule', 'جول', 1),
      u('kj', 'kj', 'kJ', 'Kilojoules', 'kilojoule', 'كيلوجول', 1000),
      u('cal', 'calories', 'cal', 'Calories', 'calorie', 'سعرة (cal)', 4.184),
      u('kcal', 'kcal', 'kcal', 'Kilocalories', 'kilocalorie', 'كيلوكالوري (kcal)', 4184),
      u('wh', 'wh', 'Wh', 'Watt-hours', 'watt-hour', 'واط ساعة', 3600),
      u('kwh', 'kwh', 'kWh', 'Kilowatt-hours', 'kilowatt-hour', 'كيلوواط ساعة', 3600000),
      u('btu', 'btu', 'BTU', 'BTU', 'BTU', 'وحدة حرارية بريطانية', 1055.05585262),
    ],
  },
];

import { UN, CN } from './units-i18n';
for (const c of ucats) {
  [c.fr, c.es] = CN[c.id];
  for (const x of c.units) [x.fr, x.fr1, x.es, x.es1] = UN[x.id];
}

// Popular conversions that get their own landing page: [category, from, to]
export const pairs: [string, string, string][] = [
  ['length', 'km', 'mi'], ['length', 'mi', 'km'], ['length', 'm', 'ft'], ['length', 'ft', 'm'],
  ['length', 'cm', 'in'], ['length', 'in', 'cm'], ['length', 'mm', 'in'], ['length', 'in', 'mm'],
  ['length', 'yd', 'm'], ['length', 'ft', 'cm'], ['length', 'cm', 'ft'],
  ['weight', 'kg', 'lb'], ['weight', 'lb', 'kg'], ['weight', 'g', 'oz'], ['weight', 'oz', 'g'],
  ['weight', 'kg', 'st'], ['weight', 'st', 'kg'], ['weight', 'kg', 'oz'], ['weight', 't', 'kg'],
  ['volume', 'l', 'gal'], ['volume', 'gal', 'l'], ['volume', 'ml', 'floz'], ['volume', 'floz', 'ml'],
  ['volume', 'cup', 'ml'], ['volume', 'ml', 'cup'], ['volume', 'tbsp', 'ml'], ['volume', 'tsp', 'ml'], ['volume', 'l', 'ml'],
  ['area', 'm2', 'ft2'], ['area', 'ft2', 'm2'], ['area', 'acre', 'ha'], ['area', 'ha', 'acre'], ['area', 'km2', 'mi2'],
  ['speed', 'kmh', 'mph'], ['speed', 'mph', 'kmh'], ['speed', 'ms', 'kmh'], ['speed', 'kn', 'kmh'],
  ['time', 'h', 'min'], ['time', 'd', 'h'], ['time', 'min', 's'], ['time', 'wk', 'd'], ['time', 'y', 'd'],
  ['data', 'mb', 'gb'], ['data', 'gb', 'mb'], ['data', 'gb', 'tb'], ['data', 'tb', 'gb'],
  ['pressure', 'psi', 'bar'], ['pressure', 'bar', 'psi'], ['pressure', 'kpa', 'psi'],
  ['energy', 'kcal', 'kj'], ['energy', 'kj', 'kcal'], ['energy', 'kwh', 'kcal'],
];

export const ucat = (id: string) => ucats.find((c) => c.id === id)!;
export const unit = (cat: string, id: string) => ucat(cat).units.find((x) => x.id === id)!;
export const pairSlug = (cat: string, from: string, to: string) =>
  `${unit(cat, from).w}-to-${unit(cat, to).w}`;
