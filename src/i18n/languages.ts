export const defaultLang = 'en';

export const languages = [
  { code: 'de', label: 'DE', name: 'Deutsch', hreflang: 'de' },
  { code: 'en', label: 'EN', name: 'English', hreflang: 'en' },
  { code: 'pl', label: 'PL', name: 'Polski', hreflang: 'pl' },
  { code: 'cz', label: 'CZ', name: 'Čeština', hreflang: 'cs' },
  { code: 'sk', label: 'SK', name: 'Slovenčina', hreflang: 'sk' },
];

export const languageMap = Object.fromEntries(languages.map((lang) => [lang.code, lang]));

export const getLangTag = (code: string) => languageMap[code]?.hreflang ?? code;

export const isSupportedLang = (code: string) => Boolean(languageMap[code]);
