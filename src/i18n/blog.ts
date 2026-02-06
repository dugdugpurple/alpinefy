type Lang = 'en' | 'de' | 'pl' | 'cz' | 'sk';

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

export const getBlogPosts = (lang: Lang) => blogPosts[lang] ?? blogPosts.en;

export const getBlogPost = (lang: Lang, slug: string) =>
  getBlogPosts(lang).find((post) => post.slug === slug);

export const getBlogPostById = (lang: Lang, id: string) =>
  getBlogPosts(lang).find((post) => post.id === id);

export const getBlogIdBySlug = (lang: Lang, slug: string) =>
  getBlogPosts(lang).find((post) => post.slug === slug)?.id ?? null;

export const getBlogSlugForLang = (lang: Lang, id: string) =>
  getBlogPostById(lang, id)?.slug ?? null;
