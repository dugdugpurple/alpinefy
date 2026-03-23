export const languages = [
  { code: 'de', label: 'DE', name: 'Deutsch', hreflang: 'de' },
  { code: 'en', label: 'EN', name: 'English', hreflang: 'en' },
  { code: 'pl', label: 'PL', name: 'Polski', hreflang: 'pl' },
  { code: 'cz', label: 'CZ', name: 'Čeština', hreflang: 'cs' },
  { code: 'sk', label: 'SK', name: 'Slovenčina', hreflang: 'sk' },
] as const;

export type Lang = (typeof languages)[number]['code'];

export const defaultLang: Lang = 'en';

export const languageMap = Object.fromEntries(
  languages.map((lang) => [lang.code, lang])
) as Record<Lang, (typeof languages)[number]>;

export const getLangTag = (code: string) =>
  (languageMap as Record<string, (typeof languages)[number]>)[code]?.hreflang ?? code;

export const isSupportedLang = (code: string): code is Lang =>
  Object.prototype.hasOwnProperty.call(languageMap, code);
