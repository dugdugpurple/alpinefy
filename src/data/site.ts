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
  { label: 'GitHub', href: `https://github.com/${handle}` },
];

export const getSocials = (lang: Lang = defaultLang): SocialLink[] => {
  const handle = socialHandleByLang[lang] ?? socialHandleByLang[defaultLang];
  return buildSocials(handle);
};

export const site = {
  name: 'Alpinefy',
  url: 'https://alpinefy.com',
  email: 'hello@alpinefy.com',
  phone: '0903 473 335',
  address: 'Žilina, Slovensko',
  socials: getSocials(defaultLang),
};
