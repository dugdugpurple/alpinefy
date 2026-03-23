import type { Lang } from './languages';

type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  sections: BlogSection[];
};

export const blogPosts: Record<Lang, BlogPost[]> = {
  en: [
    {
      id: 'lighthouse-95',
      slug: 'lighthouse-95-astro',
      title: 'How to get Lighthouse above 95 without compromises',
      excerpt:
        'A practical checklist for fast Astro sites. No bloat, just measurable performance.',
      date: '2026-01-16',
      readingTime: '6 min',
      category: 'Performance',
      sections: [
        {
          heading: '1. Clean output is the foundation',
          paragraphs: [
            'Astro generates clean HTML without runtime overhead. That is the fastest way to improve FCP and LCP.',
            'Minimize JavaScript, avoid large bundles and keep interactivity only where it matters.',
          ],
        },
        {
          heading: '2. Media optimization',
          paragraphs: [
            'Use modern formats (AVIF, WebP) and proper sizes. Every extra kilobyte slows down the load.',
          ],
          list: [
            'Resize hero images to real display sizes.',
            'Lazy-load everything below the first viewport.',
            'Load fonts once and use `display=swap`.',
          ],
        },
        {
          heading: '3. Measure and iterate',
          paragraphs: [
            'Lighthouse is a baseline, but real-user data matters. Track Core Web Vitals and optimize gradually.',
          ],
        },
      ],
    },
    {
      id: 'technical-seo',
      slug: 'technical-seo-astro',
      title: 'Technical SEO for modern Astro sites',
      excerpt:
        'How to set up your site so Google can understand and reward it. Meta, sitemap, structure.',
      date: '2026-01-22',
      readingTime: '5 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Clean structure and meta',
          paragraphs: [
            'Consistency in headings, meta description and correct canonical URLs are the basics.',
          ],
          list: ['One H1 per page.', 'Short meta description with clear value.', 'Canonical URL per page.'],
        },
        {
          heading: '2. Sitemap and robots',
          paragraphs: [
            'Astro sitemap plugin generates sitemap-index automatically. Don’t forget robots.txt.',
          ],
        },
        {
          heading: '3. Speed equals SEO',
          paragraphs: [
            'Core Web Vitals are an official ranking factor. Faster sites win in search and conversions.',
          ],
        },
      ],
    },
    {
      id: 'typography-hierarchy',
      slug: 'typography-hierarchy',
      title: 'Typography and hierarchy for corporate websites',
      excerpt:
        'Clear typography is the difference between chaos and clarity. How to set it up.',
      date: '2026-01-28',
      readingTime: '4 min',
      category: 'Design',
      sections: [
        {
          heading: '1. One display and one text family',
          paragraphs: [
            'Two font families are enough. Consistency and clear weights create hierarchy.',
          ],
        },
        {
          heading: '2. Spacing as a system',
          paragraphs: [
            'Use a 4–8px rhythm. It gives order without constant decisions.',
          ],
        },
        {
          heading: '3. Short copy, clear message',
          paragraphs: [
            'A corporate website must explain value quickly. Each block should have a single goal.',
          ],
        },
      ],
    },
  ],
  de: [
    {
      id: 'lighthouse-95',
      slug: 'lighthouse-95-astro',
      title: 'So erreichst du Lighthouse 95+ ohne Kompromisse',
      excerpt:
        'Praktische Checkliste für schnelle Astro‑Websites. Kein Ballast, nur messbare Performance.',
      date: '2026-01-16',
      readingTime: '6 min',
      category: 'Performance',
      sections: [
        {
          heading: '1. Sauberer Output als Basis',
          paragraphs: [
            'Astro liefert sauberes HTML ohne Runtime‑Overhead. Das verbessert FCP und LCP am schnellsten.',
            'Minimiere JavaScript, vermeide große Bundles und nutze Interaktivität nur dort, wo es nötig ist.',
          ],
        },
        {
          heading: '2. Medien optimieren',
          paragraphs: [
            'Nutze moderne Formate (AVIF, WebP) und korrekte Größen. Jeder Kilobyte zählt.',
          ],
          list: [
            'Hero‑Bilder auf reale Größen skalieren.',
            'Alles unterhalb des ersten Viewports lazy‑laden.',
            'Fonts nur einmal laden und `display=swap` nutzen.',
          ],
        },
        {
          heading: '3. Messen und iterieren',
          paragraphs: [
            'Lighthouse ist die Basis, echte Nutzerdaten sind entscheidend. Core Web Vitals tracken.',
          ],
        },
      ],
    },
    {
      id: 'technical-seo',
      slug: 'technisches-seo-astro',
      title: 'Technisches SEO für moderne Astro‑Websites',
      excerpt:
        'So richtest du deine Website ein, damit Google sie versteht: Meta, Sitemap, Struktur.',
      date: '2026-01-22',
      readingTime: '5 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Saubere Struktur und Meta',
          paragraphs: [
            'Konsistente Überschriften, Meta‑Description und korrekte Canonicals sind Pflicht.',
          ],
          list: ['Ein H1 pro Seite.', 'Kurze Meta‑Description mit Mehrwert.', 'Canonical URL pro Seite.'],
        },
        {
          heading: '2. Sitemap und robots',
          paragraphs: [
            'Astro erstellt eine sitemap‑index automatisch. robots.txt nicht vergessen.',
          ],
        },
        {
          heading: '3. Geschwindigkeit = SEO',
          paragraphs: [
            'Core Web Vitals sind ein Rankingfaktor. Schnellere Websites gewinnen.',
          ],
        },
      ],
    },
    {
      id: 'typography-hierarchy',
      slug: 'typografie-hierarchie',
      title: 'Typografie und Hierarchie für Unternehmenswebsites',
      excerpt:
        'Klare Typografie ist der Unterschied zwischen Chaos und Klarheit.',
      date: '2026-01-28',
      readingTime: '4 min',
      category: 'Design',
      sections: [
        {
          heading: '1. Eine Display‑ und eine Text‑Schrift',
          paragraphs: [
            'Zwei Schriftfamilien reichen. Konsistenz und klare Gewichtungen schaffen Hierarchie.',
          ],
        },
        {
          heading: '2. Spacing als System',
          paragraphs: [
            'Nutze 4–8px Rhythmus. Er bringt Ordnung ohne ständige Entscheidungen.',
          ],
        },
        {
          heading: '3. Kurze Texte, klare Aussage',
          paragraphs: [
            'Eine Unternehmensseite muss Wert schnell vermitteln. Jeder Block hat ein Ziel.',
          ],
        },
      ],
    },
  ],
  pl: [
    {
      id: 'lighthouse-95',
      slug: 'lighthouse-95-astro',
      title: 'Jak osiągnąć Lighthouse 95+ bez kompromisów',
      excerpt:
        'Praktyczna lista dla szybkich stron Astro. Bez balastu, tylko mierzalna wydajność.',
      date: '2026-01-16',
      readingTime: '6 min',
      category: 'Wydajność',
      sections: [
        {
          heading: '1. Czysty output to podstawa',
          paragraphs: [
            'Astro generuje czysty HTML bez runtime. To najszybsza droga do lepszego FCP i LCP.',
            'Minimalizuj JS i zostaw interaktywność tylko tam, gdzie jest potrzebna.',
          ],
        },
        {
          heading: '2. Optymalizacja mediów',
          paragraphs: [
            'Używaj nowoczesnych formatów (AVIF, WebP) i prawidłowych rozmiarów.',
          ],
          list: [
            'Dopasuj hero obrazy do realnych wymiarów.',
            'Lazy‑load wszystkiego poniżej pierwszego viewportu.',
            'Ładuj fonty raz i używaj `display=swap`.',
          ],
        },
        {
          heading: '3. Mierz i iteruj',
          paragraphs: [
            'Lighthouse to podstawa, ale liczą się dane rzeczywiste. Monitoruj Core Web Vitals.',
          ],
        },
      ],
    },
    {
      id: 'technical-seo',
      slug: 'techniczne-seo-astro',
      title: 'Techniczne SEO dla nowoczesnych stron Astro',
      excerpt:
        'Jak ustawić stronę, aby Google ją rozumiało: meta, sitemap, struktura.',
      date: '2026-01-22',
      readingTime: '5 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Struktura i meta',
          paragraphs: [
            'Spójna hierarchia nagłówków, meta description i canonical URL to podstawa.',
          ],
          list: ['Jedno H1 na stronę.', 'Krótki meta opis z wartością.', 'Canonical URL na każdej stronie.'],
        },
        {
          heading: '2. Sitemap i robots',
          paragraphs: [
            'Plugin Astro generuje sitemap‑index automatycznie. Nie zapomnij o robots.txt.',
          ],
        },
        {
          heading: '3. Szybkość = SEO',
          paragraphs: [
            'Core Web Vitals to czynnik rankingowy. Szybkie strony wygrywają.',
          ],
        },
      ],
    },
    {
      id: 'typography-hierarchy',
      slug: 'typografia-hierarchia',
      title: 'Typografia i hierarchia dla stron firmowych',
      excerpt:
        'Czytelna typografia to różnica między chaosem a klarownością.',
      date: '2026-01-28',
      readingTime: '4 min',
      category: 'Design',
      sections: [
        {
          heading: '1. Jedna display i jedna tekstowa',
          paragraphs: [
            'Dwie rodziny fontów wystarczą. Spójność daje hierarchię.',
          ],
        },
        {
          heading: '2. Spacing jako system',
          paragraphs: [
            'Stosuj rytm 4–8px. To porządek bez zbędnych decyzji.',
          ],
        },
        {
          heading: '3. Krótkie teksty, jasny przekaz',
          paragraphs: [
            'Strona firmowa musi szybko wyjaśnić wartość. Każdy blok ma jeden cel.',
          ],
        },
      ],
    },
  ],
  cz: [
    {
      id: 'lighthouse-95',
      slug: 'lighthouse-95-astro',
      title: 'Jak dostat Lighthouse nad 95 bez kompromisů',
      excerpt:
        'Praktický checklist pro rychlé weby v Astro. Bez balastu, jen výkon.',
      date: '2026-01-16',
      readingTime: '6 min',
      category: 'Výkon',
      sections: [
        {
          heading: '1. Čistý output je základ',
          paragraphs: [
            'Astro generuje čistý HTML bez runtime. To nejrychleji zlepší FCP a LCP.',
            'Minimalizujte JS a nechte interaktivitu jen tam, kde má smysl.',
          ],
        },
        {
          heading: '2. Optimalizace médií',
          paragraphs: [
            'Používejte moderní formáty (AVIF, WebP) a správné rozměry.',
          ],
          list: [
            'Zmenšete hero obrázky na reálné rozměry.',
            'Lazy‑loadujte vše pod prvním viewportem.',
            'Fonty načítejte jednou a s `display=swap`.',
          ],
        },
        {
          heading: '3. Měřte a iterujte',
          paragraphs: [
            'Lighthouse je základ, ale důležitá jsou reálná data. Sledujte Core Web Vitals.',
          ],
        },
      ],
    },
    {
      id: 'technical-seo',
      slug: 'technicke-seo-astro',
      title: 'Technické SEO pro moderní weby v Astro',
      excerpt:
        'Jak nastavit web, aby ho Google pochopil: meta, sitemap, struktura.',
      date: '2026-01-22',
      readingTime: '5 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Čistá struktura a meta',
          paragraphs: [
            'Konzistentní hierarchie nadpisů, meta description a canonical URL.',
          ],
          list: ['Jedno H1 na stránku.', 'Stručný meta popis s hodnotou.', 'Canonical URL pro každou stránku.'],
        },
        {
          heading: '2. Sitemap a robots',
          paragraphs: [
            'Astro sitemap plugin generuje sitemap‑index automaticky. Nezapomeňte na robots.txt.',
          ],
        },
        {
          heading: '3. Rychlost = SEO',
          paragraphs: [
            'Core Web Vitals jsou ranking faktor. Rychlé weby vyhrávají.',
          ],
        },
      ],
    },
    {
      id: 'typography-hierarchy',
      slug: 'typografie-hierarchie',
      title: 'Typografie a hierarchie pro firemní weby',
      excerpt:
        'Srozumitelná typografie je rozdíl mezi chaosem a jasným poselstvím.',
      date: '2026-01-28',
      readingTime: '4 min',
      category: 'Design',
      sections: [
        {
          heading: '1. Jedna display a jedna textová rodina',
          paragraphs: [
            'Dvě rodiny fontů stačí. Konzistence a jasné váhy vytváří hierarchii.',
          ],
        },
        {
          heading: '2. Spacing jako systém',
          paragraphs: [
            'Zvolte 4–8px rytmus. Získáte pořádek bez zbytečných rozhodnutí.',
          ],
        },
        {
          heading: '3. Krátké texty, jasná informace',
          paragraphs: [
            'Firemní web musí rychle vysvětlit hodnotu. Každý blok má jeden cíl.',
          ],
        },
      ],
    },
  ],
  sk: [
    {
      id: 'lighthouse-95',
      slug: 'lighthouse-95-astro',
      title: 'Ako dostať Lighthouse nad 95 bez kompromisov',
      excerpt:
        'Praktický checklist pre rýchly web v Astro. Bez zbytočných knižníc, s dôrazom na výkon.',
      date: '2026-01-16',
      readingTime: '6 min',
      category: 'Výkon',
      sections: [
        {
          heading: '1. Základ je čistý výstup',
          paragraphs: [
            'Astro umožňuje generovať čistý HTML bez runtime záťaže. To je najrýchlejší spôsob, ako zlepšiť FCP a LCP.',
            'Minimalizujte JavaScript, vyhnite sa veľkým bundlom a nechajte interaktivitu iba tam, kde má zmysel.',
          ],
        },
        {
          heading: '2. Optimalizácia médií',
          paragraphs: [
            'Používajte moderné formáty (AVIF, WebP) a správne rozmery. Každý zbytočný kilobajt predlžuje načítanie.',
          ],
          list: [
            'Zmenšite hero obrázky na reálne rozmery.',
            'Lazy-load všetko mimo prvý viewport.',
            'Písma načítajte iba raz a s `display=swap`.',
          ],
        },
        {
          heading: '3. Merajte a iterujte',
          paragraphs: [
            'Lighthouse je základ, ale dôležité sú aj reálne dáta. Sledujte Core Web Vitals a optimalizujte postupne.',
          ],
        },
      ],
    },
    {
      id: 'technical-seo',
      slug: 'technicke-seo-astro',
      title: 'Technické SEO pre moderné weby v Astro',
      excerpt:
        'Ako nastaviť web tak, aby ho Google vedel prečítať, pochopiť a odmeniť.',
      date: '2026-01-22',
      readingTime: '5 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Čistá štruktúra a meta',
          paragraphs: [
            'Základ je konzistentná hierarchia nadpisov, meta description a správne canonical URL.',
          ],
          list: ['Jedno H1 na stránku.', 'Stručný meta popis s hodnotou.', 'Canonical URL pre každú stránku.'],
        },
        {
          heading: '2. Sitemap a robots',
          paragraphs: [
            'Astro sitemap plugin automaticky generuje sitemap-index. Nezabudnite na robots.txt.',
          ],
        },
        {
          heading: '3. Rýchlosť = SEO',
          paragraphs: [
            'Core Web Vitals sú oficiálny ranking faktor. Rýchly web znamená lepšie pozície aj konverzie.',
          ],
        },
      ],
    },
    {
      id: 'typography-hierarchy',
      slug: 'typografia-a-hierarchia',
      title: 'Typografia a hierarchia pre firemné weby',
      excerpt:
        'Zrozumiteľná typografia je rozdiel medzi chaosom a jasným posolstvom.',
      date: '2026-01-28',
      readingTime: '4 min',
      category: 'Dizajn',
      sections: [
        {
          heading: '1. Jedna display a jedna textová rodina',
          paragraphs: [
            'Stačia dve font family. Dôležitá je konzistencia a jasné váhy pre hierarchiu.',
          ],
        },
        {
          heading: '2. Spacing ako systém',
          paragraphs: [
            'Zvoľte 4–8px systém. Tým získate rytmus a vizuálny poriadok.',
          ],
        },
        {
          heading: '3. Krátke texty, jasná informácia',
          paragraphs: [
            'Firemný web má vysvetliť hodnotu rýchlo. Každý blok musí mať jeden cieľ.',
          ],
        },
      ],
    },
  ],
};

const seoGrowthPosts: Record<Lang, BlogPost[]> = {
  en: [
    {
      id: 'international-seo-hreflang',
      slug: 'international-seo-hreflang-astro',
      title: 'International SEO for DACH and CEE: hreflang that works',
      excerpt:
        'Scale one website across multiple markets without keyword cannibalization. URL strategy, hreflang and x-default.',
      date: '2026-02-03',
      readingTime: '7 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Decide URL architecture before translation',
          paragraphs: [
            'Choose a stable language URL structure first (`/de`, `/pl`, `/cz`, `/sk`). Translation comes after technical structure.',
            'Avoid forced IP redirects. Users and crawlers must be able to access any language version directly.',
          ],
          list: [
            'One indexable URL per language version.',
            'Self-referencing canonical on every localized page.',
            'Language switcher with crawlable links.',
          ],
        },
        {
          heading: '2. Implement hreflang and x-default correctly',
          paragraphs: [
            'Every language page should reference all alternates, including itself. Missing reciprocal tags break hreflang clusters.',
            'Use `x-default` for the fallback page to help Google choose the right result when language is ambiguous.',
          ],
        },
        {
          heading: '3. Localize titles, H1 and anchor text',
          paragraphs: [
            'Do not reuse English titles for all locales. Local SERPs reward native phrasing and search intent.',
            'Internal links should also use localized anchors, not generic “read more” patterns everywhere.',
          ],
        },
        {
          heading: '4. Validate in Search Console and logs',
          paragraphs: [
            'Check indexing and international targeting issues by market. Use server logs to verify crawler access to every language path.',
          ],
        },
      ],
    },
    {
      id: 'schema-ai-search',
      slug: 'schema-ai-search-astro',
      title: 'Schema markup for service websites in Google and AI search',
      excerpt:
        'A practical JSON-LD setup for service pages and blog content: clean entities, consistent data and fewer indexing ambiguities.',
      date: '2026-02-05',
      readingTime: '6 min',
      category: 'AI SEO',
      sections: [
        {
          heading: '1. Start with entities search engines can verify',
          paragraphs: [
            'Implement Organization and WebSite schema globally, then extend with Service and Article where relevant.',
          ],
          list: [
            'Organization with `sameAs`, contact and location.',
            'Service schema for core offer pages.',
            'Article schema for blog detail pages.',
            'FAQPage only when questions and answers are visible on page.',
          ],
        },
        {
          heading: '2. Keep structured data aligned with visible content',
          paragraphs: [
            'Schema must match what users can see. Mismatched fields reduce trust and can invalidate rich-result eligibility.',
            'Treat JSON-LD as part of content QA, not as a one-time technical task.',
          ],
        },
        {
          heading: '3. Connect topical pages with internal links',
          paragraphs: [
            'Support schema with strong internal linking between services, case studies and educational blog posts.',
            'This helps crawlers understand topical clusters and improves contextual relevance.',
          ],
        },
        {
          heading: '4. Test continuously after each release',
          paragraphs: [
            'Validate templates with Rich Results Test and monitor structured data reports in Search Console after deployments.',
          ],
        },
      ],
    },
    {
      id: 'seo-content-clusters',
      slug: 'seo-content-clusters-dach-cee',
      title: 'SEO content clusters for agency websites: topics that convert',
      excerpt:
        'How to build a multilingual content plan that brings qualified leads from DACH and CEE markets.',
      date: '2026-02-07',
      readingTime: '8 min',
      category: 'Content SEO',
      sections: [
        {
          heading: '1. Build intent maps for each market',
          paragraphs: [
            'Group topics by intent: service intent, comparison intent and educational intent.',
          ],
          list: [
            'DACH: technical and reliability-driven phrasing.',
            'PL/CZ/SK: practical execution and value clarity.',
            'One intent map per language, not direct translation only.',
          ],
        },
        {
          heading: '2. Use pillar + support article structure',
          paragraphs: [
            'Create one pillar page per service and attach 3–5 support posts answering concrete buyer questions.',
            'This builds topical depth and increases long-tail visibility over time.',
          ],
        },
        {
          heading: '3. Standardize internal linking',
          paragraphs: [
            'Every blog post should link to one relevant service page, one related case/reference and two related articles.',
          ],
          list: [
            'Use descriptive anchor text, not generic labels.',
            'Link from new posts to existing high-value pages.',
            'Refresh older posts with links to new content.',
          ],
        },
        {
          heading: '4. Refresh based on real Search Console data',
          paragraphs: [
            'Review impressions, CTR and queries monthly. Update titles, intros and FAQ blocks where click-through is weak.',
          ],
        },
      ],
    },
  ],
  de: [
    {
      id: 'international-seo-hreflang',
      slug: 'internationales-seo-hreflang-astro',
      title: 'Internationales SEO für DACH und CEE: hreflang, das funktioniert',
      excerpt:
        'Eine Website für mehrere Märkte ohne Kannibalisierung. URL-Strategie, hreflang und x-default.',
      date: '2026-02-03',
      readingTime: '7 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. URL-Architektur vor der Übersetzung festlegen',
          paragraphs: [
            'Definiere zuerst eine stabile Sprachstruktur (`/de`, `/pl`, `/cz`, `/sk`). Übersetzung folgt nach der technischen Basis.',
            'Erzwinge keine IP-Weiterleitungen. Nutzer und Crawler müssen jede Sprachversion direkt erreichen können.',
          ],
          list: [
            'Eine indexierbare URL pro Sprachversion.',
            'Self-canonical auf jeder lokalisierten Seite.',
            'Sprachwechsler mit crawlbaren Links.',
          ],
        },
        {
          heading: '2. hreflang und x-default korrekt umsetzen',
          paragraphs: [
            'Jede Seite muss alle Alternates referenzieren, inklusive sich selbst. Ohne Gegenseitigkeit bricht das Cluster.',
            'Setze `x-default` als Fallback-Seite für unklare Sprachsignale.',
          ],
        },
        {
          heading: '3. Titel, H1 und Anchors lokalisieren',
          paragraphs: [
            'Nicht nur Übersetzen, sondern Suchintention je Markt treffen. Das wirkt direkt auf CTR und Relevanz.',
            'Auch interne Links sollten lokal formulierte Anchors verwenden.',
          ],
        },
        {
          heading: '4. In Search Console und Logs prüfen',
          paragraphs: [
            'Prüfe Indexierung pro Markt und kontrolliere in Logs, ob Crawler alle Sprachpfade sauber abrufen.',
          ],
        },
      ],
    },
    {
      id: 'schema-ai-search',
      slug: 'schema-markup-ki-suche',
      title: 'Schema-Markup für Service-Websites in Google und KI-Suche',
      excerpt:
        'Praktisches JSON-LD für Service-Seiten und Blog-Artikel: klare Entitäten, konsistente Daten, weniger SEO-Risiko.',
      date: '2026-02-05',
      readingTime: '6 min',
      category: 'AI SEO',
      sections: [
        {
          heading: '1. Mit prüfbaren Entitäten starten',
          paragraphs: [
            'Global mit Organization und WebSite starten, danach Service- und Article-Schema je Seitentyp ergänzen.',
          ],
          list: [
            'Organization mit `sameAs`, Kontakt und Standort.',
            'Service-Schema auf Leistungsseiten.',
            'Article-Schema auf Blog-Detailseiten.',
            'FAQPage nur bei sichtbaren Fragen und Antworten.',
          ],
        },
        {
          heading: '2. Strukturierte Daten müssen sichtbaren Inhalt spiegeln',
          paragraphs: [
            'Schema ohne passenden sichtbaren Inhalt ist fehleranfällig und schwächt Vertrauen.',
            'JSON-LD gehört in die reguläre QA nach jedem Content-Update.',
          ],
        },
        {
          heading: '3. Themencluster intern sauber verlinken',
          paragraphs: [
            'Verknüpfe Services, Referenzen und Fachartikel systematisch. Das stärkt thematische Relevanz.',
          ],
        },
        {
          heading: '4. Nach jedem Release testen',
          paragraphs: [
            'Mit Rich Results Test prüfen und Berichte in Search Console nach Deploys überwachen.',
          ],
        },
      ],
    },
    {
      id: 'seo-content-clusters',
      slug: 'seo-content-cluster-agentur',
      title: 'SEO-Content-Cluster für Agentur-Websites: Themen mit Anfragepotenzial',
      excerpt:
        'So baust du einen mehrsprachigen Content-Plan, der in DACH und CEE qualifizierte Leads bringt.',
      date: '2026-02-07',
      readingTime: '8 min',
      category: 'Content SEO',
      sections: [
        {
          heading: '1. Suchintention je Markt mappen',
          paragraphs: [
            'Themen nach Intention ordnen: Leistungsintention, Vergleichsintention, Informationsintention.',
          ],
          list: [
            'DACH: technischer Fokus und Verlässlichkeit.',
            'PL/CZ/SK: klare Umsetzung und konkreter Nutzen.',
            'Pro Sprache eigene Intent-Map statt 1:1 Übersetzung.',
          ],
        },
        {
          heading: '2. Pillar + Support-Artikel aufbauen',
          paragraphs: [
            'Pro Kernleistung eine Pillar-Seite plus 3–5 Support-Artikel mit konkreten Entscheidungsfragen.',
            'Das erhöht Topical Authority und Sichtbarkeit im Long Tail.',
          ],
        },
        {
          heading: '3. Internes Linking standardisieren',
          paragraphs: [
            'Jeder Artikel sollte auf eine Service-Seite, eine Referenz und mindestens zwei thematisch passende Artikel verlinken.',
          ],
          list: [
            'Beschreibende Anchor-Texte statt generischer Links.',
            'Neue Artikel auf bestehende Money-Pages verlinken.',
            'Ältere Beiträge bei neuen Publikationen aktualisieren.',
          ],
        },
        {
          heading: '4. Monatlich per Search Console nachschärfen',
          paragraphs: [
            'Impressionen, CTR und Suchanfragen je Cluster auswerten und Titel/Intros gezielt verbessern.',
          ],
        },
      ],
    },
  ],
  pl: [
    {
      id: 'international-seo-hreflang',
      slug: 'miedzynarodowe-seo-hreflang-astro',
      title: 'Międzynarodowe SEO dla DACH i CEE: hreflang, które działa',
      excerpt:
        'Jedna strona na wiele rynków bez kanibalizacji. Struktura URL, hreflang i x-default w praktyce.',
      date: '2026-02-03',
      readingTime: '7 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Najpierw architektura URL, potem tłumaczenia',
          paragraphs: [
            'Najpierw ustal stabilną strukturę językową (`/de`, `/pl`, `/cz`, `/sk`), a dopiero potem rozbudowuj treści.',
            'Unikaj wymuszonych przekierowań po IP. Użytkownik i crawler muszą wejść na każdą wersję bez blokad.',
          ],
          list: [
            'Jeden indeksowalny URL na wersję językową.',
            'Self-canonical na każdej stronie lokalnej.',
            'Przełącznik języka z normalnymi linkami HTML.',
          ],
        },
        {
          heading: '2. Poprawna implementacja hreflang i x-default',
          paragraphs: [
            'Każda wersja musi wskazywać wszystkie alternatywy, również samą siebie. Brak wzajemności psuje klaster hreflang.',
            '`x-default` ustaw jako fallback dla niejednoznacznych sygnałów językowych.',
          ],
        },
        {
          heading: '3. Lokalizuj tytuły, H1 i anchory',
          paragraphs: [
            'Sama translacja nie wystarczy. Potrzebne są lokalne frazy zgodne z intencją danego rynku.',
            'Wewnętrzne linki też powinny mieć lokalne anchor texty.',
          ],
        },
        {
          heading: '4. Weryfikuj w Search Console i logach',
          paragraphs: [
            'Sprawdzaj indeksację per rynek i monitoruj logi, czy roboty regularnie odwiedzają wszystkie ścieżki językowe.',
          ],
        },
      ],
    },
    {
      id: 'schema-ai-search',
      slug: 'schema-markup-ai-seo',
      title: 'Schema markup dla stron usługowych w Google i wyszukiwaniu AI',
      excerpt:
        'Praktyczny model JSON-LD dla usług i bloga: spójne encje, czytelna struktura i mniej błędów indeksacji.',
      date: '2026-02-05',
      readingTime: '6 min',
      category: 'AI SEO',
      sections: [
        {
          heading: '1. Zacznij od podstawowych encji',
          paragraphs: [
            'Najpierw globalne Organization i WebSite, potem Service oraz Article zgodnie z typem podstrony.',
          ],
          list: [
            'Organization z `sameAs`, kontaktem i lokalizacją.',
            'Service na stronach ofertowych.',
            'Article na stronach wpisów blogowych.',
            'FAQPage tylko gdy pytania i odpowiedzi są widoczne dla użytkownika.',
          ],
        },
        {
          heading: '2. Dane strukturalne muszą zgadzać się z treścią',
          paragraphs: [
            'JSON-LD powinien odzwierciedlać realny content. Rozjazdy obniżają wiarygodność i mogą blokować rich results.',
            'Traktuj schema jako część QA po każdej publikacji.',
          ],
        },
        {
          heading: '3. Łącz usługi, case’y i artykuły',
          paragraphs: [
            'Mocne linkowanie wewnętrzne między ofertą, referencjami i blogiem wzmacnia kontekst tematyczny.',
          ],
        },
        {
          heading: '4. Testuj po każdym wdrożeniu',
          paragraphs: [
            'Używaj Rich Results Test i raportów Search Console, żeby szybko wychwycić błędy po deployu.',
          ],
        },
      ],
    },
    {
      id: 'seo-content-clusters',
      slug: 'klastry-tresci-seo-agencja',
      title: 'Klastry treści SEO dla agencji: tematy, które generują zapytania',
      excerpt:
        'Jak zbudować wielojęzyczny plan contentu, który przynosi jakościowe leady z rynków DACH i CEE.',
      date: '2026-02-07',
      readingTime: '8 min',
      category: 'Content SEO',
      sections: [
        {
          heading: '1. Rozpisz intencje osobno dla każdego rynku',
          paragraphs: [
            'Podziel tematy według intencji: oferta, porównanie i edukacja.',
          ],
          list: [
            'DACH: frazy techniczne i nacisk na niezawodność.',
            'PL/CZ/SK: konkretny efekt i czytelna realizacja.',
            'Oddzielny plan fraz dla każdego języka.',
          ],
        },
        {
          heading: '2. Model pillar + artykuły wspierające',
          paragraphs: [
            'Dla każdej kluczowej usługi stwórz stronę pillar oraz 3–5 artykułów odpowiadających na pytania decyzyjne.',
            'To buduje topical authority i zwiększa widoczność na długi ogon.',
          ],
        },
        {
          heading: '3. Ustandaryzuj linkowanie wewnętrzne',
          paragraphs: [
            'Każdy wpis powinien linkować do jednej strony usługi, jednej referencji i min. dwóch powiązanych artykułów.',
          ],
          list: [
            'Anchor text opisowy, nie generyczny.',
            'Nowe wpisy wspierają istniejące strony ofertowe.',
            'Starsze wpisy regularnie aktualizuj o nowe linki.',
          ],
        },
        {
          heading: '4. Optymalizuj cyklicznie na podstawie danych',
          paragraphs: [
            'Raz w miesiącu analizuj CTR i zapytania w Search Console, a następnie poprawiaj tytuły oraz leady.',
          ],
        },
      ],
    },
  ],
  cz: [
    {
      id: 'international-seo-hreflang',
      slug: 'mezinarodni-seo-hreflang-astro',
      title: 'Mezinárodní SEO pro DACH a CEE: hreflang, které funguje',
      excerpt:
        'Jeden web pro více trhů bez kanibalizace. URL struktura, hreflang a x-default v praxi.',
      date: '2026-02-03',
      readingTime: '7 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Nejprve URL architektura, potom překlad',
          paragraphs: [
            'Nejdřív nastav stabilní jazykovou strukturu (`/de`, `/pl`, `/cz`, `/sk`), až potom rozšiřuj obsah.',
            'Nevynucuj IP přesměrování. Uživatel i crawler musí otevřít každou jazykovou verzi přímo.',
          ],
          list: [
            'Jedna indexovatelná URL pro každý jazyk.',
            'Self-canonical na každé lokalizované stránce.',
            'Jazykový přepínač s normálními HTML odkazy.',
          ],
        },
        {
          heading: '2. Správná implementace hreflang a x-default',
          paragraphs: [
            'Každá verze musí odkazovat na všechny alternates včetně sebe. Bez reciprocity hreflang nefunguje spolehlivě.',
            '`x-default` nastav jako fallback pro nejednoznačný jazyk uživatele.',
          ],
        },
        {
          heading: '3. Lokalizuj title, H1 i interní anchory',
          paragraphs: [
            'Nepoužívej jen doslovný překlad. Lokální SERP odměňuje přirozené formulace a lokální intent.',
            'Stejnou logiku drž i u anchor textů v interním linkování.',
          ],
        },
        {
          heading: '4. Kontroluj výsledky v Search Console a logách',
          paragraphs: [
            'Sleduj indexaci podle trhu a v logách ověř, že roboti pravidelně procházejí všechny jazykové cesty.',
          ],
        },
      ],
    },
    {
      id: 'schema-ai-search',
      slug: 'schema-markup-ai-vyhledavani',
      title: 'Schema markup pro servisní weby v Google a AI vyhledávání',
      excerpt:
        'Praktické JSON-LD pro služby a blog: konzistentní data, jasné entity a lepší srozumitelnost pro vyhledávače.',
      date: '2026-02-05',
      readingTime: '6 min',
      category: 'AI SEO',
      sections: [
        {
          heading: '1. Začni ověřitelnými entitami',
          paragraphs: [
            'Globálně nasaď Organization a WebSite, potom přidej Service a Article podle typu stránky.',
          ],
          list: [
            'Organization s `sameAs`, kontaktem a lokalitou.',
            'Service schema na stránkách služeb.',
            'Article schema na detailech článků.',
            'FAQPage jen pokud je FAQ viditelné na stránce.',
          ],
        },
        {
          heading: '2. Structured data musí odpovídat viditelnému obsahu',
          paragraphs: [
            'Rozpor mezi JSON-LD a reálným obsahem snižuje důvěru a může zrušit způsobilost pro rich result.',
            'Schema kontroluj při každém release stejně jako výkon a UX.',
          ],
        },
        {
          heading: '3. Propoj služby, reference a články',
          paragraphs: [
            'Silné interní prolinkování mezi službami, referencemi a edukativním obsahem posiluje topical relevance.',
          ],
        },
        {
          heading: '4. Průběžně testuj',
          paragraphs: [
            'Po deployi ověř data přes Rich Results Test a reporty v Search Console.',
          ],
        },
      ],
    },
    {
      id: 'seo-content-clusters',
      slug: 'seo-content-clustery-agentura',
      title: 'SEO content clustery pro agenturní weby: témata, která přivádí poptávky',
      excerpt:
        'Jak postavit vícejazyčný content plán, který přináší kvalitní leady z DACH a CEE.',
      date: '2026-02-07',
      readingTime: '8 min',
      category: 'Content SEO',
      sections: [
        {
          heading: '1. Intent mapa pro každý trh zvlášť',
          paragraphs: [
            'Témata rozděl podle intentu: služba, porovnání, edukace.',
          ],
          list: [
            'DACH: technický slovník a důraz na spolehlivost.',
            'CZ/SK/PL: jasná realizace a praktická hodnota.',
            'Samostatná mapa dotazů pro každý jazyk.',
          ],
        },
        {
          heading: '2. Model pillar + podpůrné články',
          paragraphs: [
            'Ke každé hlavní službě vytvoř pillar stránku a 3–5 článků s konkrétními rozhodovacími otázkami.',
            'Tím roste topical authority i long-tail návštěvnost.',
          ],
        },
        {
          heading: '3. Zaveď interní prolinkovací pravidla',
          paragraphs: [
            'Každý článek má odkazovat na jednu službu, jednu referenci a minimálně dva související články.',
          ],
          list: [
            'Používej popisné anchor texty.',
            'Nový obsah prolinkuj na existující money pages.',
            'Starší články pravidelně aktualizuj o nové odkazy.',
          ],
        },
        {
          heading: '4. Měsíční refresh podle dat',
          paragraphs: [
            'Sleduj CTR a dotazy v Search Console a iteruj titulky, úvody i FAQ bloky.',
          ],
        },
      ],
    },
  ],
  sk: [
    {
      id: 'international-seo-hreflang',
      slug: 'medzinarodne-seo-hreflang-astro',
      title: 'Medzinárodné SEO pre DACH a CEE: hreflang, ktoré funguje',
      excerpt:
        'Jeden web pre viac trhov bez kanibalizácie. URL stratégia, hreflang a x-default v praxi.',
      date: '2026-02-03',
      readingTime: '7 min',
      category: 'SEO',
      sections: [
        {
          heading: '1. Najprv URL architektúra, potom preklad',
          paragraphs: [
            'Najskôr nastav stabilnú jazykovú štruktúru (`/de`, `/pl`, `/cz`, `/sk`) a až potom rozširuj obsah.',
            'Nevynucuj IP presmerovania. Používateľ aj crawler sa musia dostať na každú jazykovú verziu priamo.',
          ],
          list: [
            'Jedna indexovateľná URL pre každý jazyk.',
            'Self-canonical na každej lokalizovanej stránke.',
            'Jazykový prepínač s crawlovateľnými HTML odkazmi.',
          ],
        },
        {
          heading: '2. Korektné nasadenie hreflang a x-default',
          paragraphs: [
            'Každá verzia musí odkazovať na všetky alternatívy vrátane seba. Bez reciprocity sa hreflang rozpadá.',
            '`x-default` použi ako fallback pre nejednoznačné jazykové signály.',
          ],
        },
        {
          heading: '3. Lokalizuj title, H1 aj interné anchory',
          paragraphs: [
            'Nestačí iba preklad. Potrebné sú lokálne formulácie podľa intentu daného trhu.',
            'Rovnakú logiku drž aj pri anchor textoch v internom prelinkovaní.',
          ],
        },
        {
          heading: '4. Validuj cez Search Console a logy',
          paragraphs: [
            'Sleduj indexáciu podľa trhu a v logoch over, že roboti pravidelne prechádzajú všetky jazykové cesty.',
          ],
        },
      ],
    },
    {
      id: 'schema-ai-search',
      slug: 'schema-markup-ai-vyhladavanie',
      title: 'Schema markup pre servisné weby v Google a AI vyhľadávaní',
      excerpt:
        'Praktický JSON-LD setup pre služby a blog: konzistentné entity, čitateľné dáta a lepšia interpretácia obsahu.',
      date: '2026-02-05',
      readingTime: '6 min',
      category: 'AI SEO',
      sections: [
        {
          heading: '1. Začni overiteľnými entitami',
          paragraphs: [
            'Globálne nasaď Organization a WebSite, potom pridaj Service a Article podľa typu stránky.',
          ],
          list: [
            'Organization s `sameAs`, kontaktom a lokalitou.',
            'Service schema na stránkach služieb.',
            'Article schema na detailoch blogu.',
            'FAQPage len vtedy, keď je FAQ reálne viditeľné na stránke.',
          ],
        },
        {
          heading: '2. Structured data musí sedieť s viditeľným obsahom',
          paragraphs: [
            'Ak JSON-LD nesedí s obsahom stránky, klesá dôveryhodnosť a riskuješ stratu rich results.',
            'Schema ber ako súčasť release QA, nie jednorazovú úlohu.',
          ],
        },
        {
          heading: '3. Prepoj služby, referencie a články',
          paragraphs: [
            'Silné interné prelinkovanie medzi službami, referenciami a edukatívnym obsahom zlepšuje tematický kontext.',
          ],
        },
        {
          heading: '4. Testuj po každom deployi',
          paragraphs: [
            'Overuj šablóny cez Rich Results Test a reporty Search Console po každom nasadení.',
          ],
        },
      ],
    },
    {
      id: 'seo-content-clusters',
      slug: 'seo-obsahove-klastre-agentura',
      title: 'SEO obsahové klastre pre agentúrne weby: témy, ktoré prinášajú dopyty',
      excerpt:
        'Ako postaviť viacjazyčný content plán, ktorý prináša kvalitné leady z DACH a CEE trhov.',
      date: '2026-02-07',
      readingTime: '8 min',
      category: 'Content SEO',
      sections: [
        {
          heading: '1. Intent mapa pre každý trh samostatne',
          paragraphs: [
            'Témy rozdeľ podľa intentu: služba, porovnanie, edukácia.',
          ],
          list: [
            'DACH: technickejší slovník a dôraz na spoľahlivosť.',
            'SK/CZ/PL: praktická realizácia a jasná hodnota.',
            'Samostatný plán tém pre každý jazyk.',
          ],
        },
        {
          heading: '2. Model pillar + podporné články',
          paragraphs: [
            'Pre každú hlavnú službu vytvor pillar stránku a 3–5 článkov s konkrétnymi rozhodovacími otázkami.',
            'Takto buduješ topical authority aj long-tail návštevnosť.',
          ],
        },
        {
          heading: '3. Zaveď interné pravidlá prelinkovania',
          paragraphs: [
            'Každý článok by mal odkazovať na jednu službu, jednu referenciu a minimálne dva súvisiace články.',
          ],
          list: [
            'Používaj popisné anchor texty.',
            'Nové články prepájaj na existujúce money pages.',
            'Staršie články priebežne aktualizuj o nové odkazy.',
          ],
        },
        {
          heading: '4. Mesačný refresh podľa dát',
          paragraphs: [
            'Raz mesačne vyhodnoť CTR a dotazy v Search Console a uprav titulky, úvody aj FAQ sekcie.',
          ],
        },
      ],
    },
  ],
};

export const getBlogPosts = (lang: Lang) =>
  [...(blogPosts[lang] ?? blogPosts.en), ...(seoGrowthPosts[lang] ?? seoGrowthPosts.en)].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const getBlogPost = (lang: Lang, slug: string) =>
  getBlogPosts(lang).find((post) => post.slug === slug);

export const getBlogPostById = (lang: Lang, id: string) =>
  getBlogPosts(lang).find((post) => post.id === id);

export const getBlogIdBySlug = (lang: Lang, slug: string) =>
  getBlogPosts(lang).find((post) => post.slug === slug)?.id ?? null;

export const getBlogSlugForLang = (lang: Lang, id: string) =>
  getBlogPostById(lang, id)?.slug ?? null;
