export const blogPosts = [
  {
    slug: 'lighthouse-95-astro',
    title: 'Ako dostať Lighthouse nad 95 bez kompromisov',
    excerpt:
      'Praktický checklist pre rýchly web v Astro. Bez zbytočných knižníc, s dôrazom na merateľný výkon.',
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
    slug: 'technicke-seo-astro',
    title: 'Technické SEO pre moderné weby v Astro',
    excerpt:
      'Ako nastaviť web tak, aby ho Google vedel prečítať, pochopiť a odmeniť. Meta, sitemap, štruktúra.',
    date: '2026-01-22',
    readingTime: '5 min',
    category: 'SEO',
    sections: [
      {
        heading: '1. Čistá štruktúra a meta',
        paragraphs: [
          'Základ je konzistentná hierarchia nadpisov, meta description a správne canonical URL.',
        ],
        list: [
          'Jedno H1 na stránku.',
          'Stručný meta popis s konkrétnou hodnotou.',
          'Canonical URL pre každú stránku.',
        ],
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
    slug: 'typografia-a-hierarchia',
    title: 'Typografia a hierarchia pre firemné weby',
    excerpt:
      'Zrozumiteľná typografia je rozdiel medzi chaosom a jasným posolstvom. Ako ju nastaviť prakticky.',
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
          'Zvoľte 4–8px systém. Tým získate rytmus a vizuálny poriadok bez zbytočných rozhodnutí.',
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
];
