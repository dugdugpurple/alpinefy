export type BlogCtaTopic =
  | 'performance'
  | 'seo'
  | 'content'
  | 'ai'
  | 'design'
  | 'shopify'
  | 'apps'
  | 'general';

type BlogCtaInput = {
  category?: string;
  title?: string;
  excerpt?: string;
};

const topicAnchors: Record<BlogCtaTopic, string> = {
  performance: '#focus-performance',
  seo: '#focus-seo',
  content: '#focus-seo',
  ai: '#focus-apps',
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
  if (includesAny(category, ['content seo', 'content'])) return 'content';
  if (includesAny(category, ['ai seo', 'ai-seo'])) return 'ai';
  if (includesAny(category, ['shopify', 'e-shop', 'eshop', 'e-commerce'])) return 'shopify';
  if (includesAny(category, ['design', 'dizajn', 'typografi'])) return 'design';
  if (category.includes('seo')) return 'seo';
  if (includesAny(category, ['performance', 'vykon', 'wydajnosc', 'vydajnost'])) return 'performance';
  if (includesAny(category, ['app', 'aplikac'])) return 'apps';
  return null;
};

const bodyToTopic = (rawBody: string): BlogCtaTopic => {
  const body = normalizeText(rawBody);
  if (!body) return 'general';

  if (includesAny(body, ['content seo', 'content cluster', 'obsahove klastre', 'klastry tresci'])) return 'content';
  if (includesAny(body, ['ai seo', 'ai-ready', 'llm', 'artificial intelligence', 'ai odpoved', 'ai answers'])) {
    return 'ai';
  }
  if (includesAny(body, ['shopify', 'e-shop', 'eshop', 'e-commerce', 'sklep'])) return 'shopify';
  if (
    includesAny(body, ['performance', 'core web vitals', 'lighthouse', 'speed', 'rychlost', 'vykon', 'wydajnosc', 'vydajnost'])
  ) {
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
    content: 'Content + SEO strategy',
    ai: 'AI + SEO setup',
    design: 'Lead websites',
    shopify: 'Shopify e-shops',
    apps: 'Automation & AI workflows',
    general: 'View services',
  },
  de: {
    performance: 'Performance',
    seo: 'Technisches SEO',
    content: 'Content + SEO Strategie',
    ai: 'AI + SEO Setup',
    design: 'Lead-Websites',
    shopify: 'Shopify-Shops',
    apps: 'Automatisierung & KI-Workflows',
    general: 'Leistungen',
  },
  pl: {
    performance: 'Wydajność',
    seo: 'SEO techniczne',
    content: 'Content + SEO',
    ai: 'AI + SEO',
    design: 'Strony leadowe',
    shopify: 'Sklepy Shopify',
    apps: 'Automatyzacje i workflow AI',
    general: 'Usługi',
  },
  cz: {
    performance: 'Výkon',
    seo: 'Technické SEO',
    content: 'Content + SEO',
    ai: 'AI + SEO',
    design: 'Lead weby',
    shopify: 'Shopify e-shopy',
    apps: 'Automatizace a AI workflow',
    general: 'Služby',
  },
  sk: {
    performance: 'Výkon',
    seo: 'Technické SEO',
    content: 'Content + SEO',
    ai: 'AI + SEO',
    design: 'Lead weby',
    shopify: 'Shopify e-shopy',
    apps: 'Automatizácie a AI workflow',
    general: 'Služby',
  },
};

export const getBlogServicesLabel = (lang: string, topic: BlogCtaTopic) => {
  const labels = servicesLabelByLang[lang] ?? servicesLabelByLang.en;
  return labels[topic] ?? labels.general;
};
