import { defaultLang, type Lang } from '../i18n/languages';

const socialHandleByLang: Record<Lang, string> = {
  sk: 'alpinefysk',
  cz: 'alpinefycs',
  de: 'alpinefyde',
  pl: 'alpinefypl',
  en: 'alpinefycom',
};

export type SocialLink = {
  label: 'LinkedIn' | 'Threads' | 'Instagram' | 'GitHub';
  href: string;
};

const buildSocials = (handle: string): SocialLink[] => [
  { label: 'LinkedIn', href: `https://www.linkedin.com/company/${handle}/` },
  { label: 'Threads', href: `https://www.threads.net/@${handle}` },
  { label: 'Instagram', href: `https://www.instagram.com/${handle}/` },
  { label: 'GitHub', href: 'https://github.com/alpinefy' },
];

export const getSocials = (lang: Lang = defaultLang): SocialLink[] => {
  const handle = socialHandleByLang[lang] ?? socialHandleByLang[defaultLang];
  return buildSocials(handle);
};

const phoneLocal = '0903 473 335';
const phoneInternational = '+421 903 473 335';
const phoneDialValue = '+421903473335';

export const getDisplayPhone = (lang: Lang = defaultLang) =>
  lang === 'sk' ? phoneLocal : phoneInternational;

export const getPhoneDialValue = () => phoneDialValue;

export const site = {
  name: 'Alpinefy',
  url: 'https://alpinefy.com',
  email: 'hello@alpinefy.com',
  phone: phoneLocal,
  phoneIntl: phoneInternational,
  phoneDial: phoneDialValue,
  address: 'Žilina, Slovensko',
  socials: getSocials(defaultLang),
};
