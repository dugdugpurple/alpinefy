export type BlogCtaTopic = 'performance' | 'seo' | 'design' | 'shopify' | 'apps' | 'general';

type BlogCtaInput = {
  category?: string;
  title?: string;
  excerpt?: string;
};

const topicAnchors: Record<BlogCtaTopic, string> = {
  performance: '#focus-performance',
  seo: '#focus-seo',
  design: '#focus-design',
  shopify: '#focus-shopify',
  apps: '#focus-apps',
  general: '#sluzby',
};

const normalizeText = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const includesAny = (haystack: string, needles: string[]) => needles.some((needle) => haystack.includes(needle));

const categoryToTopic = (rawCategory: string): BlogCtaTopic | null => {
  const category = normalizeText(rawCategory);
  if (!category) return null;
  if (includesAny(category, ['shopify', 'e-shop', 'eshop', 'e-commerce'])) return 'shopify';
  if (includesAny(category, ['design', 'dizajn', 'typografi'])) return 'design';
  if (category.includes('ai seo') || (category.includes('ai') && category.includes('seo'))) return 'apps';
  if (category.includes('content seo')) return 'seo';
  if (category.includes('seo')) return 'seo';
  if (includesAny(category, ['performance', 'vykon', 'wydajnosc'])) return 'performance';
  if (includesAny(category, ['app', 'aplikac'])) return 'apps';
  return null;
};

const bodyToTopic = (rawBody: string): BlogCtaTopic => {
  const body = normalizeText(rawBody);
  if (!body) return 'general';

  if (includesAny(body, ['shopify', 'e-shop', 'eshop', 'e-commerce', 'sklep'])) return 'shopify';
  if (includesAny(body, ['ai seo', 'ai-ready', 'llm', 'artificial intelligence'])) return 'apps';
  if (includesAny(body, ['performance', 'core web vitals', 'lighthouse', 'speed', 'rychlost', 'vykon', 'wydajnosc'])) {
    return 'performance';
  }
  if (includesAny(body, ['seo', 'hreflang', 'schema', 'indexac', 'indexierung', 'crawl', 'on-page'])) return 'seo';
  if (includesAny(body, ['design', 'dizajn', 'typography', 'typografia', 'typografie', 'hierarch'])) return 'design';
  if (includesAny(body, ['app', 'aplikac', 'dashboard', 'mobile app', 'web app'])) return 'apps';

  return 'general';
};

export const getBlogCtaTarget = (input: BlogCtaInput) => {
  const topicFromCategory = categoryToTopic(input.category ?? '');
  const topic = topicFromCategory ?? bodyToTopic(`${input.title ?? ''} ${input.excerpt ?? ''}`);
  return {
    topic,
    anchor: topicAnchors[topic],
  };
};

const servicesLabelByLang: Record<string, Record<BlogCtaTopic, string>> = {
  en: {
    performance: 'Performance setup',
    seo: 'Technical SEO',
    design: 'Lead websites',
    shopify: 'Shopify e-shops',
    apps: 'Web & mobile apps',
    general: 'View services',
  },
  de: {
    performance: 'Performance',
    seo: 'Technisches SEO',
    design: 'Lead-Websites',
    shopify: 'Shopify-Shops',
    apps: 'Applikationen',
    general: 'Leistungen',
  },
  pl: {
    performance: 'Wydajność',
    seo: 'SEO techniczne',
    design: 'Strony leadowe',
    shopify: 'Sklepy Shopify',
    apps: 'Aplikacje',
    general: 'Usługi',
  },
  cz: {
    performance: 'Výkon',
    seo: 'Technické SEO',
    design: 'Lead weby',
    shopify: 'Shopify e-shopy',
    apps: 'Aplikace',
    general: 'Služby',
  },
  sk: {
    performance: 'Výkon',
    seo: 'Technické SEO',
    design: 'Lead weby',
    shopify: 'Shopify e-shopy',
    apps: 'Aplikácie',
    general: 'Služby',
  },
};

export const getBlogServicesLabel = (lang: string, topic: BlogCtaTopic) => {
  const labels = servicesLabelByLang[lang] ?? servicesLabelByLang.en;
  return labels[topic] ?? labels.general;
};
