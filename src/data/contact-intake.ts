import { defaultLang, type Lang } from '../i18n/languages';

export type IntakeOption = {
  value: string;
  label: string;
};

export type ContactIntakeCopy = {
  serviceLabel: string;
  servicePlaceholder: string;
  serviceOptions: IntakeOption[];
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetOptions: IntakeOption[];
  timelineLabel: string;
  timelinePlaceholder: string;
  timelineOptions: IntakeOption[];
  websiteLabel: string;
  websitePlaceholder: string;
};

const intakeByLang: Record<Lang, ContactIntakeCopy> = {
  en: {
    serviceLabel: 'Primary goal',
    servicePlaceholder: 'Select priority',
    serviceOptions: [
      { value: 'lead_web', label: 'Lead / marketing website' },
      { value: 'corporate_web', label: 'Corporate website' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'seo_analytics_ai', label: 'SEO / analytics / AI automation' },
      { value: 'not_sure', label: 'Not sure yet' },
    ],
    budgetLabel: 'Budget range',
    budgetPlaceholder: 'Select range',
    budgetOptions: [
      { value: '3k_5k', label: '€3k - €5k' },
      { value: '5k_10k', label: '€5k - €10k' },
      { value: '10k_20k', label: '€10k - €20k' },
      { value: '20k_plus', label: '€20k+' },
      { value: 'to_be_defined', label: 'To be defined after call' },
    ],
    timelineLabel: 'Preferred timeline',
    timelinePlaceholder: 'Select timeline',
    timelineOptions: [
      { value: 'asap', label: 'ASAP (2-4 weeks)' },
      { value: 'one_month', label: 'Within 1 month' },
      { value: 'two_three_months', label: 'Within 2-3 months' },
      { value: 'flexible', label: 'Flexible timeline' },
    ],
    websiteLabel: 'Current website (optional)',
    websitePlaceholder: 'https://yourdomain.com',
  },
  de: {
    serviceLabel: 'Hauptziel',
    servicePlaceholder: 'Priorität auswählen',
    serviceOptions: [
      { value: 'lead_web', label: 'Lead-/Marketing-Website' },
      { value: 'corporate_web', label: 'Unternehmenswebsite' },
      { value: 'ecommerce', label: 'E-Commerce' },
      { value: 'seo_analytics_ai', label: 'SEO / Analytics / AI-Automation' },
      { value: 'not_sure', label: 'Noch nicht sicher' },
    ],
    budgetLabel: 'Budgetrahmen',
    budgetPlaceholder: 'Rahmen auswählen',
    budgetOptions: [
      { value: '3k_5k', label: '€3k - €5k' },
      { value: '5k_10k', label: '€5k - €10k' },
      { value: '10k_20k', label: '€10k - €20k' },
      { value: '20k_plus', label: '€20k+' },
      { value: 'to_be_defined', label: 'Nach Erstgespräch festlegen' },
    ],
    timelineLabel: 'Gewünschter Zeitrahmen',
    timelinePlaceholder: 'Zeitrahmen auswählen',
    timelineOptions: [
      { value: 'asap', label: 'ASAP (2-4 Wochen)' },
      { value: 'one_month', label: 'Innerhalb von 1 Monat' },
      { value: 'two_three_months', label: 'Innerhalb von 2-3 Monaten' },
      { value: 'flexible', label: 'Flexibel' },
    ],
    websiteLabel: 'Aktuelle Website (optional)',
    websitePlaceholder: 'https://ihredomain.de',
  },
  pl: {
    serviceLabel: 'Główny cel',
    servicePlaceholder: 'Wybierz priorytet',
    serviceOptions: [
      { value: 'lead_web', label: 'Strona lead / marketing' },
      { value: 'corporate_web', label: 'Strona firmowa' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'seo_analytics_ai', label: 'SEO / analityka / automatyzacje AI' },
      { value: 'not_sure', label: 'Jeszcze nie wiem' },
    ],
    budgetLabel: 'Budżet',
    budgetPlaceholder: 'Wybierz zakres',
    budgetOptions: [
      { value: '3k_5k', label: '€3k - €5k' },
      { value: '5k_10k', label: '€5k - €10k' },
      { value: '10k_20k', label: '€10k - €20k' },
      { value: '20k_plus', label: '€20k+' },
      { value: 'to_be_defined', label: 'Do ustalenia po rozmowie' },
    ],
    timelineLabel: 'Preferowany termin',
    timelinePlaceholder: 'Wybierz termin',
    timelineOptions: [
      { value: 'asap', label: 'ASAP (2-4 tygodnie)' },
      { value: 'one_month', label: 'W ciągu 1 miesiąca' },
      { value: 'two_three_months', label: 'W ciągu 2-3 miesięcy' },
      { value: 'flexible', label: 'Elastycznie' },
    ],
    websiteLabel: 'Obecna strona (opcjonalnie)',
    websitePlaceholder: 'https://twojadomena.pl',
  },
  cz: {
    serviceLabel: 'Hlavní cíl',
    servicePlaceholder: 'Vyberte prioritu',
    serviceOptions: [
      { value: 'lead_web', label: 'Lead / marketing web' },
      { value: 'corporate_web', label: 'Firemní web' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'seo_analytics_ai', label: 'SEO / analytika / AI automatizace' },
      { value: 'not_sure', label: 'Ještě si nejsem jistý' },
    ],
    budgetLabel: 'Rozpočet',
    budgetPlaceholder: 'Vyberte rozsah',
    budgetOptions: [
      { value: '3k_5k', label: '€3k - €5k' },
      { value: '5k_10k', label: '€5k - €10k' },
      { value: '10k_20k', label: '€10k - €20k' },
      { value: '20k_plus', label: '€20k+' },
      { value: 'to_be_defined', label: 'Upřesníme po úvodním callu' },
    ],
    timelineLabel: 'Preferovaný termín',
    timelinePlaceholder: 'Vyberte termín',
    timelineOptions: [
      { value: 'asap', label: 'ASAP (2-4 týdny)' },
      { value: 'one_month', label: 'Do 1 měsíce' },
      { value: 'two_three_months', label: 'Do 2-3 měsíců' },
      { value: 'flexible', label: 'Flexibilní' },
    ],
    websiteLabel: 'Současný web (volitelné)',
    websitePlaceholder: 'https://vasedomena.cz',
  },
  sk: {
    serviceLabel: 'Hlavný cieľ',
    servicePlaceholder: 'Vyberte prioritu',
    serviceOptions: [
      { value: 'lead_web', label: 'Lead / marketing web' },
      { value: 'corporate_web', label: 'Firemný web' },
      { value: 'ecommerce', label: 'E-commerce' },
      { value: 'seo_analytics_ai', label: 'SEO / analytika / AI automatizácie' },
      { value: 'not_sure', label: 'Zatiaľ si nie som istý' },
    ],
    budgetLabel: 'Rozpočet',
    budgetPlaceholder: 'Vyberte rozsah',
    budgetOptions: [
      { value: '3k_5k', label: '€3k - €5k' },
      { value: '5k_10k', label: '€5k - €10k' },
      { value: '10k_20k', label: '€10k - €20k' },
      { value: '20k_plus', label: '€20k+' },
      { value: 'to_be_defined', label: 'Upresníme po úvodnom calle' },
    ],
    timelineLabel: 'Preferovaný termín',
    timelinePlaceholder: 'Vyberte termín',
    timelineOptions: [
      { value: 'asap', label: 'ASAP (2-4 týždne)' },
      { value: 'one_month', label: 'Do 1 mesiaca' },
      { value: 'two_three_months', label: 'Do 2-3 mesiacov' },
      { value: 'flexible', label: 'Flexibilný' },
    ],
    websiteLabel: 'Aktuálny web (voliteľné)',
    websitePlaceholder: 'https://vasadomena.sk',
  },
};

export const attributionFieldNames = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'msclkid',
  'landing_page',
  'referrer',
] as const;

export const getContactIntakeCopy = (lang: Lang = defaultLang) =>
  intakeByLang[lang] ?? intakeByLang[defaultLang];
