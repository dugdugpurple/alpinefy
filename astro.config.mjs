// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const EXCLUDED_SITEMAP_PATHS = [
  '/thank-you',
  '/sk/dakujeme',
  '/de/danke',
  '/pl/dziekujemy',
  '/cz/dekujeme',
];

const EXCLUDED_SITEMAP_PREFIXES = ['/service-inquiry/', '/career-inquiry'];

const shouldIncludeInSitemap = (pageUrl) => {
  const normalized = String(pageUrl).replace(/\/+$/, '');

  if (EXCLUDED_SITEMAP_PREFIXES.some((prefix) => normalized.includes(prefix))) return false;
  if (EXCLUDED_SITEMAP_PATHS.some((path) => normalized.endsWith(path))) return false;
  return true;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://alpinefy.com',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: shouldIncludeInSitemap,
    }),
  ],
});
