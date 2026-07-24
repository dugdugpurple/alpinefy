import { getCopy } from '../i18n/copy';
import { getLangTag, type Lang } from '../i18n/languages';

// FAQPage JSON-LD built from the localized FAQ copy. Google no longer shows FAQ
// rich results for most sites, but the markup still feeds AI/answer engines.
export const buildFaqSchema = (lang: Lang) => {
  const faq = getCopy(lang).sections.faq;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: getLangTag(lang),
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};
