import type { Tool } from './tools';

type ArTool = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'about' | 'tableTitle' | 'table'>;

export const coreEs: Record<string, ArTool> = {
  'percentage-calculator': {
    name: 'Calculadora de porcentaje',
    title: 'Calculadora de porcentaje: calcula el % de un número',
    description:
      'Calculadora de porcentaje gratis. Halla el X % de un número, qué porcentaje es un número de otro y el aumento o la disminución porcentual en segundos.',
    h1: 'Calculadora de porcentaje',
    intro:
      'Calcula un porcentaje de cualquier número, halla qué porcentaje es un valor de otro o mide el cambio porcentual entre dos valores.',
    steps: [
      'Elige el tipo de cálculo que necesitas.',
      'Introduce los dos números.',
      'Lee el resultado al instante. No se envía nada a ningún servidor.',
    ],
    faq: [
      { q: '¿Cómo se calcula el porcentaje de un número?', a: 'Multiplica el número por el porcentaje y divide entre 100. Por ejemplo, el 15 % de 200 es 200 × 15 ÷ 100 = 30.' },
      { q: '¿Cómo se calcula el aumento porcentual?', a: 'Resta el valor antiguo al nuevo, divide entre el valor antiguo y multiplica por 100. Pasar de 50 a 65 es (65 − 50) ÷ 50 × 100 = 30 % de aumento.' },
      { q: '¿Cuál es la diferencia entre porcentaje y puntos porcentuales?', a: 'El porcentaje describe un cambio relativo. Los puntos porcentuales describen la diferencia simple entre dos porcentajes: pasar del 10 % al 12 % son +2 puntos porcentuales, pero un aumento del 20 %.' },
    ],
  },
  'loan-calculator': {
    name: 'Calculadora de préstamos',
    title: 'Calculadora de préstamos: cuota mensual e intereses',
    description:
      'Calculadora de préstamos gratis. Introduce el importe, el tipo de interés y el plazo para ver tu cuota mensual, el total de intereses y el coste total de cualquier préstamo.',
    h1: 'Calculadora de cuota de préstamo',
    intro:
      'Estima la cuota mensual, el total de intereses y el pago total de un préstamo de coche, personal, estudiantil o una hipoteca.',
    steps: [
      'Introduce el importe del préstamo.',
      'Introduce el tipo de interés anual y el plazo en años.',
      'Consulta la cuota mensual, el total de intereses y el coste total.',
    ],
    faq: [
      { q: '¿Cómo se calcula la cuota mensual de un préstamo?', a: 'Se usa la fórmula de amortización: cuota = P × r ÷ (1 − (1 + r)^−n), donde P es el importe, r el tipo mensual y n el número de cuotas mensuales.' },
      { q: '¿Un plazo más largo cuesta más?', a: 'Un plazo más largo reduce la cuota mensual, pero aumenta el total de intereses que pagas durante la vida del préstamo.' },
      { q: '¿Esta calculadora es exacta para mi banco?', a: 'Es una estimación muy cercana. Las comisiones, los seguros y las distintas reglas de capitalización pueden cambiar la cifra final, así que confírmala con tu prestamista.' },
    ],
  },
  'compound-interest-calculator': {
    name: 'Calculadora de interés compuesto',
    title: 'Calculadora de interés compuesto con aportes mensuales',
    description:
      'Calculadora de interés compuesto gratis. Mira cómo crecen tus ahorros con aportes regulares, distintos tipos de interés y periodos de capitalización a lo largo del tiempo.',
    h1: 'Calculadora de interés compuesto',
    intro:
      'Mira cómo crece con el tiempo un importe inicial más aportes mensuales regulares a un tipo de interés dado.',
    steps: [
      'Introduce tu saldo inicial y tu aporte mensual.',
      'Introduce el tipo anual y el número de años.',
      'Consulta el saldo final y cuánto proviene de los intereses.',
    ],
    faq: [
      { q: '¿Qué es el interés compuesto?', a: 'Es el interés que se gana tanto sobre tu dinero original como sobre los intereses ya añadidos, de modo que el crecimiento se acelera con el tiempo.' },
      { q: '¿Cuál es la fórmula del interés compuesto?', a: 'A = P(1 + r/n)^(nt), donde P es el capital, r el tipo anual, n los periodos de capitalización por año y t los años.' },
      { q: '¿Esto garantiza rendimientos?', a: 'No. Es una proyección a tipo fijo. Los rendimientos reales de una inversión varían y pueden ser negativos.' },
    ],
  },
  'age-calculator': {
    name: 'Calculadora de edad',
    title: 'Calculadora de edad: edad exacta en años, meses y días',
    description:
      'Calculadora de edad gratis. Introduce tu fecha de nacimiento para obtener tu edad exacta en años, meses y días, los días vividos y los días que faltan para tu cumpleaños.',
    h1: 'Calculadora de edad',
    intro:
      'Descubre tu edad exacta en años, meses y días, el total de días que has vivido y cuánto falta para tu próximo cumpleaños.',
    steps: [
      'Introduce la fecha de nacimiento.',
      'Si quieres, cambia la fecha «edad a».',
      'Lee tu edad exacta y la cuenta atrás de tu cumpleaños.',
    ],
    faq: [
      { q: '¿Cómo se calcula la edad exactamente?', a: 'Contamos los años completos desde la fecha de nacimiento, luego los meses completos restantes y los días, teniendo en cuenta la distinta duración de los meses.' },
      { q: '¿Puedo calcular la edad en una fecha pasada o futura?', a: 'Sí. Cambia la fecha «edad a» por cualquier día para ver la edad en esa fecha.' },
      { q: '¿Se guarda mi fecha de nacimiento?', a: 'No. El cálculo se hace en tu navegador y no se envía ni se guarda nada.' },
    ],
  },
  'bmi-calculator': {
    name: 'Calculadora de IMC',
    title: 'Calculadora de IMC: índice de masa corporal en adultos',
    description:
      'Calculadora de IMC gratis para adultos. Introduce la estatura y el peso en unidades métricas o imperiales para obtener tu índice de masa corporal y tu categoría de peso.',
    h1: 'Calculadora de IMC',
    intro:
      'Calcula tu índice de masa corporal a partir de la estatura y el peso, en unidades métricas o imperiales, y mira en qué categoría estándar se encuentra.',
    steps: [
      'Elige unidades métricas o imperiales.',
      'Introduce tu estatura y tu peso.',
      'Consulta tu IMC y la categoría de la OMS.',
    ],
    faq: [
      { q: '¿Cómo se calcula el IMC?', a: 'IMC = peso en kg ÷ (estatura en metros)². En unidades imperiales: 703 × peso en lb ÷ (estatura en pulgadas)².' },
      { q: '¿Cuál es un rango de IMC saludable?', a: 'La OMS define de 18,5 a 24,9 como el rango normal en adultos. Por debajo de 18,5 es bajo peso, de 25 a 29,9 sobrepeso y 30 o más obesidad.' },
      { q: '¿El IMC es preciso para todos?', a: 'No. No distingue el músculo de la grasa y no está pensado para niños, embarazadas o deportistas. Es una herramienta de cribado, no un diagnóstico. Habla con un médico sobre tu salud.' },
    ],
  },
  'tip-calculator': {
    name: 'Calculadora de propinas',
    title: 'Calculadora de propinas: divide la cuenta por persona',
    description:
      'Calculadora de propinas gratis. Introduce la cuenta y el porcentaje de propina para obtener la propina, el total y lo que paga cada persona al dividir la cuenta.',
    h1: 'Calculadora de propinas',
    intro: 'Calcula la propina y el total de la cuenta de un restaurante y divídela de forma justa entre cualquier número de personas.',
    steps: ['Introduce el importe de la cuenta.', 'Elige el porcentaje de propina.', 'Introduce cuántas personas la comparten.'],
    faq: [
      { q: '¿Cuánta propina debo dejar?', a: 'En Estados Unidos lo habitual en restaurantes es del 15 % al 20 %. Las costumbres cambian según el país y en muchos lugares el servicio ya está incluido, así que revisa tu cuenta.' },
      { q: '¿Debo calcular la propina antes o después de impuestos?', a: 'Muchas personas la calculan sobre el subtotal sin impuestos y otras sobre el total. Ambas opciones son comunes, usa la que prefieras.' },
      { q: '¿Cómo divido una cuenta con propina?', a: 'Suma la propina a la cuenta y divide el total entre el número de personas. La calculadora lo hace por ti.' },
    ],
  },
  'discount-calculator': {
    name: 'Calculadora de descuentos',
    title: 'Calculadora de descuentos: precio final y ahorro',
    description:
      'Calculadora de descuentos gratis. Introduce el precio original y el porcentaje de descuento para ver el precio rebajado y cuánto ahorras, incluso con un segundo descuento.',
    h1: 'Calculadora de descuentos',
    intro: 'Halla el precio final tras un descuento porcentual, mira cuánto ahorras y añade un descuento extra encima.',
    steps: ['Introduce el precio original.', 'Introduce el porcentaje de descuento.', 'Si quieres, añade un descuento adicional.'],
    faq: [
      { q: '¿Cómo se calcula un descuento?', a: 'Multiplica el precio por el porcentaje de descuento y divide entre 100 para obtener el ahorro; luego réstalo del precio. Un 20 % de descuento sobre 80 ahorra 16, así que el precio es 64.' },
      { q: '¿Qué pasa cuando se acumulan dos descuentos?', a: 'Se aplican uno tras otro, no se suman. Un 20 % y luego un 10 % de descuento dan un 28 % de descuento total, no un 30 %.' },
      { q: '¿Cómo encuentro el precio original a partir del precio rebajado?', a: 'Divide el precio rebajado entre (1 − descuento ÷ 100). Si 64 es el precio tras un 20 % de descuento, el original es 64 ÷ 0,8 = 80.' },
    ],
  },
  'days-between-dates-calculator': {
    name: 'Calculadora de días entre fechas',
    title: 'Días entre dos fechas: calcula días, semanas y meses',
    description:
      'Calculadora de días entre fechas gratis. Cuenta el número exacto de días, semanas, meses y años entre dos fechas cualesquiera, con la opción de incluir el día final.',
    h1: 'Calculadora de días entre fechas',
    intro: 'Cuenta cuántos días, semanas, meses y años hay entre dos fechas.',
    steps: ['Introduce la fecha de inicio.', 'Introduce la fecha de fin.', 'Lee la diferencia en días, semanas y meses.'],
    faq: [
      { q: '¿Cómo cuento los días entre dos fechas?', a: 'Resta la fecha anterior a la posterior. La calculadora tiene en cuenta los meses de distinta duración y los años bisiestos.' },
      { q: '¿Se incluye el día final?', a: 'De forma predeterminada no se cuenta el día final. Marca la opción para incluirlo, lo que suma un día.' },
      { q: '¿Incluye los fines de semana?', a: 'Sí, cuenta todos los días del calendario. El resultado también muestra el número de días laborables.' },
    ],
  },
  'hourly-to-salary-calculator': {
    name: 'Calculadora de salario por hora a sueldo',
    title: 'Del salario por hora al sueldo mensual y anual',
    description:
      'Calculadora gratis para convertir el salario por hora en pago diario, semanal, mensual y anual según tus horas por semana y las semanas trabajadas.',
    h1: 'Calculadora de salario por hora a sueldo',
    intro: 'Convierte tu salario por hora en pago semanal, mensual y anual, antes de impuestos.',
    steps: ['Introduce tu tarifa por hora.', 'Introduce las horas por semana y las semanas por año.', 'Consulta tu pago en cada periodo.'],
    faq: [
      { q: '¿Cómo convierto el pago por hora en un sueldo anual?', a: 'Multiplica la tarifa por hora por las horas por semana y por las semanas por año. A 20 por hora, 40 horas y 52 semanas, son 41.600 al año.' },
      { q: '¿El resultado es antes o después de impuestos?', a: 'Antes de impuestos. Tu sueldo neto depende de los impuestos y deducciones locales.' },
      { q: '¿Cómo tengo en cuenta las vacaciones no remuneradas?', a: 'Reduce las semanas por año. Por ejemplo, usa 50 semanas si te tomas dos semanas libres sin sueldo.' },
    ],
  },
  'word-counter': {
    name: 'Contador de palabras',
    title: 'Contador de palabras: palabras, caracteres y lectura',
    description:
      'Contador de palabras gratis. Pega tu texto para contar palabras, caracteres, frases y párrafos y estimar al instante el tiempo de lectura.',
    h1: 'Contador de palabras',
    intro: 'Pega o escribe tu texto para contar palabras, caracteres, frases y párrafos y ver el tiempo de lectura estimado.',
    steps: ['Pega o escribe tu texto en el cuadro.', 'Los recuentos se actualizan mientras escribes.', 'Consulta el tiempo de lectura y de locución.'],
    faq: [
      { q: '¿Cómo se cuentan las palabras?', a: 'Cualquier serie de caracteres separada por espacios o saltos de línea cuenta como una palabra.' },
      { q: '¿Cómo se estima el tiempo de lectura?', a: 'Suponemos unas 238 palabras por minuto en lectura silenciosa y 150 al hablar en voz alta.' },
      { q: '¿Se guarda mi texto?', a: 'No. El recuento se hace en tu navegador y tu texto nunca sale de tu dispositivo.' },
    ],
  },
  'temperature-converter': {
    name: 'Conversor de temperatura',
    title: 'Conversor de temperatura: Celsius, Fahrenheit y Kelvin',
    description:
      'Conversor de temperatura gratis. Convierte al instante entre Celsius, Fahrenheit y Kelvin, con las fórmulas y los puntos de referencia habituales explicados.',
    h1: 'Conversor de temperatura',
    intro: 'Convierte cualquier temperatura entre Celsius, Fahrenheit y Kelvin en un solo paso.',
    steps: ['Introduce la temperatura.', 'Elige la unidad de origen.', 'Lee las tres unidades a la vez.'],
    faq: [
      { q: '¿Cómo se convierte de Celsius a Fahrenheit?', a: 'Multiplica por 9/5 y suma 32. Por ejemplo, 25 °C × 1,8 + 32 = 77 °F.' },
      { q: '¿Cómo se convierte de Fahrenheit a Celsius?', a: 'Resta 32 y multiplica por 5/9. Por ejemplo, (68 − 32) × 5/9 = 20 °C.' },
      { q: '¿Qué es el cero absoluto?', a: 'El cero absoluto es 0 K, que equivale a −273,15 °C o −459,67 °F. Nada puede estar más frío.' },
    ],
  },
  'password-generator': {
    name: 'Generador de contraseñas',
    title: 'Generador de contraseñas seguras y aleatorias, gratis',
    description:
      'Generador de contraseñas seguras gratis. Crea contraseñas aleatorias y seguras de cualquier longitud con letras, números y símbolos, generadas en tu navegador y nunca almacenadas.',
    h1: 'Generador de contraseñas seguras',
    intro: 'Crea una contraseña aleatoria segura en tu navegador. No se envía ni se almacena nada en ningún sitio.',
    steps: ['Elige la longitud.', 'Selecciona qué tipos de caracteres incluir.', 'Pulsa Generar y copia la contraseña.'],
    faq: [
      { q: '¿Qué longitud debe tener una contraseña?', a: 'Al menos 12 caracteres, y 16 o más para cuentas importantes como el correo y la banca. La longitud importa más que la complejidad.' },
      { q: '¿Es seguro este generador?', a: 'Sí. Usa el generador aleatorio criptográfico de tu navegador y la contraseña nunca sale de tu dispositivo.' },
      { q: '¿Debo reutilizar contraseñas?', a: 'No. Usa una contraseña distinta para cada cuenta y guárdalas en un gestor de contraseñas.' },
    ],
  },
  'savings-goal-calculator': {
    name: 'Calculadora de meta de ahorro',
    title: 'Meta de ahorro: cuánto tardas en alcanzar tu objetivo',
    description:
      'Calculadora de meta de ahorro gratis. Mira en cuántos años y meses alcanzas tu objetivo de ahorro con aportes mensuales e intereses.',
    h1: 'Calculadora de meta de ahorro',
    intro: 'Descubre cuánto tiempo tardarás en alcanzar un objetivo de ahorro con aportes mensuales regulares e intereses opcionales.',
    steps: ['Introduce tu meta y lo que llevas ahorrado.', 'Introduce tu aporte mensual y el interés anual esperado.', 'Consulta cuánto tiempo hace falta.'],
    faq: [
      { q: '¿Cómo calculo cuánto tardo en alcanzar una meta de ahorro?', a: 'Suma al saldo tu aporte mensual y los intereses de cada mes hasta llegar a la meta. La calculadora lo hace mes a mes.' },
      { q: '¿Debo contar los intereses?', a: 'Si tus ahorros generan intereses, sí. Introduce 0 para ver el resultado sin intereses.' },
      { q: '¿Cómo puedo alcanzar mi meta antes?', a: 'Sube el aporte mensual o reduce el objetivo. Incluso un pequeño aumento del aporte puede acortar bastante el plazo.' },
    ],
  },
  'kg-to-liters-converter': {
    name: 'Conversor de kilogramos a litros',
    title: 'Conversor de kg a litros (kg a L) según la densidad',
    description:
      'Conversor de kg a litros gratis. Convierte kilogramos en litros y litros en kilogramos para agua, leche, aceite, gasolina, miel y más con densidades reales.',
    h1: 'Conversor de kilogramos a litros',
    intro: 'El kilogramo mide masa y el litro mide volumen, así que la conversión depende de la densidad del líquido. Elige la sustancia y convierte en ambos sentidos.',
    steps: ['Elige la sustancia (agua, leche, aceite, gasolina y más).', 'Introduce kilogramos o litros.', 'Lee la cantidad convertida.'],
    faq: [
      { q: '¿Cómo se convierten kg a litros?', a: 'Divide la masa en kilogramos entre la densidad en kg por litro. Para el agua (1 kg/L), 1 kg es 1 litro. Para el aceite de oliva (0,91 kg/L), 1 kg son unos 1,1 litros.' },
      { q: '¿1 kg siempre es 1 litro?', a: 'Solo en el caso del agua a unos 4 °C. Otras sustancias son más ligeras o más pesadas, así que 1 kg equivale a más o menos litros.' },
      { q: '¿Cómo convierto litros a kg?', a: 'Multiplica los litros por la densidad. Para la gasolina (unos 0,745 kg/L), 10 litros pesan unos 7,45 kg.' },
    ],
  },
  'fuel-economy-converter': {
    name: 'Conversor de consumo de combustible',
    title: 'Consumo de combustible: MPG a L/100 km y km/L',
    description:
      'Conversor de consumo de combustible gratis. Convierte al instante millas por galón (EE. UU. y Reino Unido) a litros por 100 km y kilómetros por litro.',
    h1: 'Conversor de consumo de combustible',
    intro: 'Convierte el consumo de combustible entre MPG (EE. UU.), MPG (Reino Unido), litros por 100 km y kilómetros por litro.',
    steps: ['Introduce el valor.', 'Elige la unidad que tienes.', 'Lee todas las demás unidades a la vez.'],
    faq: [
      { q: '¿Cómo convierto MPG a L/100 km?', a: 'Divide 235,215 entre los MPG (EE. UU.). Por ejemplo, 30 MPG son 235,215 ÷ 30 = 7,84 L/100 km.' },
      { q: '¿Por qué es mejor un L/100 km más bajo?', a: 'L/100 km mide el combustible usado por distancia, así que un número menor significa que el coche gasta menos. Con los MPG es al revés: cuanto más alto, mejor.' },
      { q: '¿Cuál es la diferencia entre MPG de EE. UU. y del Reino Unido?', a: 'Un galón británico (imperial) es un 20 % más grande que un galón estadounidense, así que el mismo coche muestra más MPG en unidades británicas.' },
    ],
  },
  'fuel-cost-calculator': {
    name: 'Calculadora de costo de combustible',
    title: 'Costo de combustible: precio de un viaje según distancia',
    description:
      'Calculadora de costo de combustible gratis. Introduce la distancia, el consumo y el precio del combustible para ver cuánto combustible y dinero necesita tu viaje.',
    h1: 'Calculadora de costo de combustible',
    intro: 'Estima el combustible que usarás y el costo de un viaje a partir de la distancia, el consumo de tu coche y el precio por litro.',
    steps: ['Introduce la distancia del viaje en kilómetros.', 'Introduce el consumo en litros por 100 km.', 'Introduce el precio del combustible por litro.'],
    faq: [
      { q: '¿Cómo calculo el costo de combustible de un viaje?', a: 'Combustible usado = distancia ÷ 100 × litros por 100 km. Costo = combustible usado × precio por litro.' },
      { q: '¿Dónde encuentro el consumo de mi coche?', a: 'Consulta el manual del coche o el ordenador de a bordo. Un coche de gasolina típico gasta de 6 a 9 litros por 100 km.' },
      { q: '¿El estilo de conducción cambia el resultado?', a: 'Sí. La velocidad, el tráfico, el aire acondicionado y la carga cambian el consumo, así que toma el resultado como una estimación.' },
    ],
  },
};
