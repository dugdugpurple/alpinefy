export type BlogImageMeta = {
  src: string;
  width: number;
  height: number;
  type: string;
};

const fallbackImage: BlogImageMeta = {
  src: '/og-image.png',
  width: 1200,
  height: 630,
  type: 'image/png',
};

const postImageMap: Record<string, BlogImageMeta> = {
  'lighthouse-95': {
    src: '/blog-images/performance-lighthouse-core-web-vitals.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
  'technical-seo': {
    src: '/blog-images/technical-seo-architecture-schema.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
  'typography-hierarchy': {
    src: '/blog-images/web-design-typography-hierarchy.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
  'international-seo-hreflang': {
    src: '/blog-images/international-seo-hreflang-market-localization.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
  'schema-ai-search': {
    src: '/blog-images/schema-markup-ai-search-optimization.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
  'seo-content-clusters': {
    src: '/blog-images/content-seo-clusters-internal-linking.jpg',
    width: 1200,
    height: 630,
    type: 'image/jpeg',
  },
};

export const getBlogImageMeta = (postId: string): BlogImageMeta => postImageMap[postId] ?? fallbackImage;
