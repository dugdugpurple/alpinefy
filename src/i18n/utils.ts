import { languages, defaultLang, type Lang } from './languages';
import { getBlogIdBySlug, getBlogSlugForLang } from './blog';
import {
  getBlogPathInfo,
  getRouteKeyFromPath,
  getRoutePath,
  normalizePath,
} from './routes';

const langCodes = new Set<string>(languages.map((lang) => lang.code));

export { normalizePath } from './routes';

export const stripLangPrefix = (pathname: string) => {
  const normalized = normalizePath(pathname);
  const segments = normalized.split('/').filter(Boolean);
  const [first, ...rest] = segments;
  if (first && langCodes.has(first)) {
    const restPath = `/${rest.join('/')}`;
    return restPath === '/' ? '/' : restPath;
  }
  return normalized;
};

export const localizePath = (pathname: string, lang: Lang) => {
  const normalized = normalizePath(pathname);
  if (normalized === '' || normalized === '/') {
    return getRoutePath('home', lang);
  }

  const resolveBlogPath = (sourceLang: Lang, slugPath: string) => {
    const base = getRoutePath('blog', lang);
    if (!slugPath) return base;
    const slug = slugPath.replace(/^\//, '');
    const id = getBlogIdBySlug(sourceLang, slug);
    const targetSlug = id ? getBlogSlugForLang(lang, id) : slug;
    return `${base}/${targetSlug}`;
  };

  const blogInfo = getBlogPathInfo(normalized);
  if (blogInfo) {
    return resolveBlogPath(blogInfo.lang, blogInfo.slugPath);
  }

  const key = getRouteKeyFromPath(normalized);
  if (key) {
    return getRoutePath(key, lang);
  }

  const stripped = stripLangPrefix(normalized);
  if (stripped !== normalized) {
    const strippedBlog = getBlogPathInfo(stripped);
    if (strippedBlog) {
      return resolveBlogPath(strippedBlog.lang, strippedBlog.slugPath);
    }
    const strippedKey = getRouteKeyFromPath(stripped);
    if (strippedKey) {
      return getRoutePath(strippedKey, lang);
    }
  }

  return normalized;
};

export const getLangFromPath = (pathname: string) => {
  const normalized = normalizePath(pathname);
  const segments = normalized.split('/').filter(Boolean);
  const [first] = segments;
  if (first && langCodes.has(first)) return first as Lang;
  return defaultLang;
};
