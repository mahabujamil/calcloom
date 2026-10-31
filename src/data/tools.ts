export interface Tool {
  slug: string;
  name: string;
  title: string; // <title>, ~60 chars
  description: string; // meta description, 120-160 chars
  h1: string;
  intro: string;
  steps: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const tools: Tool[] = [
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    title: 'Percentage Calculator: Find Percent of a Number Fast',
    description:
      'Free percentage calculator. Find X% of a number, what percent one number is of another, and percentage increase or decrease in seconds.',
    h1: 'Percentage Calculator',
    intro:
      'Work out a percentage of any number, find what percent one value is of another, or measure the percentage change between two values.',
    steps: [
      'Pick the type of calculation you need.',
      'Enter the two numbers.',
      'Read the result instantly. Nothing is sent to a server.',
    ],
    faq: [
      { q: 'How do you calculate a percentage of a number?', a: 'Multiply the number by the percentage and divide by 100. For example, 15% of 200 is 200 × 15 ÷ 100 = 30.' },
      { q: 'How do you calculate percentage increase?', a: 'Subtract the old value from the new value, divide by the old value, then multiply by 100. Going from 50 to 65 is (65 − 50) ÷ 50 × 100 = 30% increase.' },
      { q: 'What is the difference between percent and percentage points?', a: 'Percent describes a relative change. Percentage points describe the plain difference between two percentages: moving from 10% to 12% is +2 percentage points, but a 20% increase.' },
    ],
    related: ['loan-calculator', 'compound-interest-calculator', 'bmi-calculator'],
  },
  {
    slug: 'loan-calculator',
    name: 'Loan Calculator',
    title: 'Loan Calculator: Monthly Payment, Interest & Total Cost',
    description:
      'Free loan calculator. Enter the amount, interest rate and term to see your monthly payment, total interest and total cost of any loan.',
    h1: 'Loan Payment Calculator',
    intro:
      'Estimate the monthly payment, total interest and total repayment for a car loan, personal loan, student loan or mortgage.',
    steps: [
      'Enter the loan amount.',
      'Enter the yearly interest rate and the term in years.',
      'See the monthly payment, total interest and total cost.',
    ],
    faq: [
      { q: 'How is a monthly loan payment calculated?', a: 'It uses the amortization formula: payment = P × r ÷ (1 − (1 + r)^−n), where P is the amount, r the monthly rate and n the number of monthly payments.' },
      { q: 'Does a longer loan term cost more?', a: 'A longer term lowers the monthly payment but increases the total interest you pay over the life of the loan.' },
      { q: 'Is this calculator exact for my bank?', a: 'It is a close estimate. Fees, insurance and different compounding rules can change the final figure, so confirm with your lender.' },
    ],
    related: ['compound-interest-calculator', 'percentage-calculator', 'age-calculator'],
  },
  {
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    title: 'Compound Interest Calculator with Monthly Deposits',
    description:
      'Free compound interest calculator. See how savings grow with regular deposits, different rates and compounding periods over time.',
    h1: 'Compound Interest Calculator',
    intro:
      'See how an initial amount plus regular monthly deposits grows over time at a given interest rate.',
    steps: [
      'Enter your starting balance and monthly deposit.',
      'Enter the yearly rate and number of years.',
      'Check the final balance and how much came from interest.',
    ],
    faq: [
      { q: 'What is compound interest?', a: 'Interest earned on both your original money and on the interest already added, so growth speeds up over time.' },
      { q: 'What is the compound interest formula?', a: 'A = P(1 + r/n)^(nt), where P is the principal, r the yearly rate, n the compounding periods per year and t the years.' },
      { q: 'Does this guarantee returns?', a: 'No. It is a projection at a fixed rate. Real investment returns vary and can be negative.' },
    ],
    related: ['loan-calculator', 'percentage-calculator', 'bmi-calculator'],
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    title: 'Age Calculator: Exact Age in Years, Months and Days',
    description:
      'Free age calculator. Enter a birth date to get your exact age in years, months and days, total days lived and days until your next birthday.',
    h1: 'Age Calculator',
    intro:
      'Find your exact age in years, months and days, the total days you have lived, and how long until your next birthday.',
    steps: [
      'Enter the date of birth.',
      'Optionally change the "age at" date.',
      'Read your exact age and next birthday countdown.',
    ],
    faq: [
      { q: 'How is age calculated exactly?', a: 'We count full years from the birth date, then the remaining full months and days, accounting for the different lengths of months.' },
      { q: 'Can I calculate age on a past or future date?', a: 'Yes. Change the "age at" date to any date to see the age on that day.' },
      { q: 'Is my birth date stored?', a: 'No. The calculation runs in your browser and nothing is sent or saved.' },
    ],
    related: ['percentage-calculator', 'bmi-calculator', 'loan-calculator'],
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    title: 'BMI Calculator: Body Mass Index for Adults (kg/cm, lb/in)',
    description:
      'Free BMI calculator for adults. Enter height and weight in metric or imperial units to get your body mass index and weight category.',
    h1: 'BMI Calculator',
    intro:
      'Calculate your body mass index from height and weight, in metric or imperial units, and see which standard category it falls in.',
    steps: [
      'Choose metric or imperial units.',
      'Enter your height and weight.',
      'See your BMI and the WHO category.',
    ],
    faq: [
      { q: 'How is BMI calculated?', a: 'BMI = weight in kg ÷ (height in metres)². In imperial units: 703 × weight in lb ÷ (height in inches)².' },
      { q: 'What is a healthy BMI range?', a: 'The WHO defines 18.5 to 24.9 as the normal range for adults. Below 18.5 is underweight, 25 to 29.9 overweight, and 30 or more obese.' },
      { q: 'Is BMI accurate for everyone?', a: 'No. It does not separate muscle from fat and is not meant for children, pregnancy or athletes. It is a screening tool, not a diagnosis. Talk to a doctor about your health.' },
    ],
    related: ['age-calculator', 'percentage-calculator', 'compound-interest-calculator'],
  },
  {
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    title: 'Tip Calculator: Split the Bill and Tip Per Person',
    description:
      'Free tip calculator. Enter the bill and tip percentage to get the tip, the total and the amount each person pays when splitting the check.',
    h1: 'Tip Calculator',
    intro: 'Work out the tip and total for a restaurant bill and split it fairly between any number of people.',
    steps: ['Enter the bill amount.', 'Choose the tip percentage.', 'Enter how many people are sharing.'],
    faq: [
      { q: 'How much should I tip?', a: 'In the US, 15% to 20% is typical at restaurants. Customs differ by country, and in many places a service charge is already included, so check your bill.' },
      { q: 'Should I tip on the pre-tax or post-tax amount?', a: 'Many people tip on the pre-tax subtotal, while others tip on the total. Both are common, so use whichever you prefer.' },
      { q: 'How do I split a bill with a tip?', a: 'Add the tip to the bill, then divide the total by the number of people. The calculator does this for you.' },
    ],
    related: ['discount-calculator', 'percentage-calculator', 'loan-calculator'],
  },
  {
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    title: 'Discount Calculator: Sale Price and Amount Saved',
    description:
      'Free discount calculator. Enter the original price and the percent off to see the sale price and how much you save, including a second discount.',
    h1: 'Discount Calculator',
    intro: 'Find the final price after a percentage discount, see how much you save, and add an extra discount on top.',
    steps: ['Enter the original price.', 'Enter the discount percentage.', 'Optionally add an extra discount.'],
    faq: [
      { q: 'How do you calculate a discount?', a: 'Multiply the price by the discount percent and divide by 100 to get the saving, then subtract it from the price. 20% off 80 saves 16, so the price is 64.' },
      { q: 'What happens when two discounts stack?', a: 'They apply one after the other, not added together. 20% then 10% off is a 28% total discount, not 30%.' },
      { q: 'How do I find the original price from the sale price?', a: 'Divide the sale price by (1 − discount ÷ 100). If 64 is after 20% off, the original is 64 ÷ 0.8 = 80.' },
    ],
    related: ['percentage-calculator', 'tip-calculator', 'compound-interest-calculator'],
  },
  {
    slug: 'days-between-dates-calculator',
    name: 'Days Between Dates Calculator',
    title: 'Days Between Dates Calculator: Count Days, Weeks, Months',
    description:
      'Free days between dates calculator. Count the exact number of days, weeks, months and years between any two dates, optionally including the end date.',
    h1: 'Days Between Dates Calculator',
    intro: 'Count how many days, weeks, months and years there are between two dates.',
    steps: ['Enter the start date.', 'Enter the end date.', 'Read the difference in days, weeks and months.'],
    faq: [
      { q: 'How do I count the days between two dates?', a: 'Subtract the earlier date from the later one. The calculator accounts for months of different lengths and leap years.' },
      { q: 'Is the end date included?', a: 'By default the end date is not counted. Tick the option to include it, which adds one day.' },
      { q: 'Does it include weekends?', a: 'Yes, it counts every calendar day. The result also shows the number of weekdays.' },
    ],
    related: ['age-calculator', 'percentage-calculator', 'hourly-to-salary-calculator'],
  },
  {
    slug: 'hourly-to-salary-calculator',
    name: 'Hourly to Salary Calculator',
    title: 'Hourly to Salary Calculator: Hourly Wage to Annual Pay',
    description:
      'Free hourly to salary calculator. Convert an hourly wage to daily, weekly, monthly and yearly pay based on your hours per week and weeks worked.',
    h1: 'Hourly to Salary Calculator',
    intro: 'Convert your hourly wage into weekly, monthly and annual pay, before tax.',
    steps: ['Enter your hourly rate.', 'Enter hours per week and weeks per year.', 'See your pay for each period.'],
    faq: [
      { q: 'How do I convert hourly pay to an annual salary?', a: 'Multiply the hourly rate by hours per week and by weeks per year. At 20 an hour, 40 hours and 52 weeks, that is 41,600 a year.' },
      { q: 'Is the result before or after tax?', a: 'Before tax. Your take-home pay depends on local taxes and deductions.' },
      { q: 'How do I account for unpaid holidays?', a: 'Lower the weeks per year. For example, use 50 weeks if you take two unpaid weeks off.' },
    ],
    related: ['days-between-dates-calculator', 'percentage-calculator', 'loan-calculator'],
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    title: 'Word Counter: Count Words, Characters and Reading Time',
    description:
      'Free word counter. Paste your text to count words, characters, sentences and paragraphs and estimate the reading time instantly.',
    h1: 'Word Counter',
    intro: 'Paste or type your text to count words, characters, sentences and paragraphs and see the estimated reading time.',
    steps: ['Paste or type your text in the box.', 'The counts update as you type.', 'Check reading and speaking time.'],
    faq: [
      { q: 'How are words counted?', a: 'Any run of characters separated by spaces or line breaks counts as one word.' },
      { q: 'How is reading time estimated?', a: 'We assume about 238 words per minute for silent reading and 150 for speaking aloud.' },
      { q: 'Is my text saved?', a: 'No. Counting happens in your browser and your text never leaves your device.' },
    ],
    related: ['age-calculator', 'percentage-calculator', 'tip-calculator'],
  },
];

export const bySlug = (s: string) => tools.find((t) => t.slug === s)!;
