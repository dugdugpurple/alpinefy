import { defaultLang, languages, type Lang } from './languages';

export type RouteKey =
  | 'home'
  | 'services'
  | 'process'
  | 'references'
  | 'about'
  | 'blog'
  | 'contact'
  | 'thankYou';

export const routeMap: Record<Lang, Record<RouteKey, string>> = {
  en: {
    home: '/',
    services: '/services',
    process: '/process',
    references: '/references',
    about: '/about',
    blog: '/blog',
    contact: '/contact',
    thankYou: '/thank-you',
  },
  de: {
    home: '/de',
    services: '/de/leistungen',
    process: '/de/prozess',
    references: '/de/referenzen',
    about: '/de/ueber-uns',
    blog: '/de/blog',
    contact: '/de/kontakt',
    thankYou: '/de/danke',
  },
  pl: {
    home: '/pl',
    services: '/pl/uslugi',
    process: '/pl/proces',
    references: '/pl/referencje',
    about: '/pl/o-nas',
    blog: '/pl/blog',
    contact: '/pl/kontakt',
    thankYou: '/pl/dziekujemy',
  },
  cz: {
    home: '/cz',
    services: '/cz/sluzby',
    process: '/cz/proces',
    references: '/cz/reference',
    about: '/cz/o-nas',
    blog: '/cz/blog',
    contact: '/cz/kontakt',
    thankYou: '/cz/dekujeme',
  },
  sk: {
    home: '/sk',
    services: '/sk/sluzby',
    process: '/sk/proces',
    references: '/sk/referencie',
    about: '/sk/o-nas',
    blog: '/sk/blog',
    contact: '/sk/kontakt',
    thankYou: '/sk/dakujeme',
  },
};

export const pageKeys: RouteKey[] = ['services', 'process', 'references', 'about', 'contact'];

export const normalizePath = (pathname: string) => {
  if (!pathname) return '/';
  const stripped = pathname.split('?')[0]?.split('#')[0] ?? '/';
  if (stripped === '/') return '/';
  const withSlash = stripped.startsWith('/') ? stripped : `/${stripped}`;
  return withSlash.endsWith('/') ? withSlash.slice(0, -1) : withSlash;
};

const routeKeyByPath = new Map<string, RouteKey>();
Object.values(routeMap).forEach((map) => {
  (Object.keys(map) as RouteKey[]).forEach((key) => {
    routeKeyByPath.set(normalizePath(map[key]), key);
  });
});

export const getRoutePath = (key: RouteKey, lang: Lang) => {
  const map = routeMap[lang] ?? routeMap[defaultLang];
  return map?.[key] ?? routeMap[defaultLang][key];
};

export const getRouteKeyFromPath = (pathname: string) =>
  routeKeyByPath.get(normalizePath(pathname)) ?? null;

export const getBlogPathInfo = (pathname: string) => {
  const normalized = normalizePath(pathname);
  for (const language of languages) {
    const prefix = normalizePath(routeMap[language.code]?.blog ?? '/blog');
    if (normalized === prefix) {
      return { lang: language.code as Lang, slugPath: '' };
    }
    if (normalized.startsWith(`${prefix}/`)) {
      return { lang: language.code as Lang, slugPath: normalized.slice(prefix.length) };
    }
  }
  return null;
};
