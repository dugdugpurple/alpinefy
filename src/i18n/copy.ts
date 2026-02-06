import type { languages } from './languages';

export const navItems = [
  { key: 'services', route: 'services' },
  { key: 'process', route: 'process' },
  { key: 'references', route: 'references' },
  { key: 'about', route: 'about' },
  { key: 'blog', route: 'blog' },
  { key: 'contact', route: 'contact' },
];

type Lang = 'en' | 'de' | 'pl' | 'cz' | 'sk';

type Copy = {
  site: { tagline: string; description: string };
  nav: Record<string, string>;
  menu: {
    openLabel: string;
    closeLabel: string;
  };
  footer: {
    navigation: string;
    socials: string;
    rights: string;
  };
  accessibility: {
    skipToContent: string;
  };
  sections: {
    heroStats: { value: string; label: string }[];
    heroSide: {
      eyebrow: string;
      title: string;
      subtitle: string;
      badges: string[];
      cards: { label: string; value: string }[];
    };
    valueProps: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string }[];
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string; tags: string[] }[];
    };
    process: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: { title: string; description: string }[];
    };
    socialProof: {
      eyebrow: string;
      title: string;
      subtitle: string;
      testimonials: { quote: string; name: string; role: string }[];
    };
    faq: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { question: string; answer: string }[];
    };
    cta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primaryLabel: string;
      secondaryLabel: string;
      note: string;
    };
    trustBadges: {
      items: { title: string; description: string }[];
    };
    crypto: {
      eyebrow: string;
      title: string;
      subtitle: string;
      note: string;
    };
    partners: {
      eyebrow: string;
      title: string;
      subtitle: string;
      notes: Record<string, string>;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: string[];
    };
  };
  pages: {
    home: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
    };
    services: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
    };
    process: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
    };
    references: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
      caseStudiesHeading: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      caseStudies: { name: string; summary: string; result: string; stack: string }[];
      reviews: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: { quote: string; name: string; role: string }[];
        moreItems: { quote: string; name: string; role: string }[];
        actions: { more: string; add: string };
        modalMore: { title: string; subtitle: string };
        modalAdd: { title: string; subtitle: string };
        form: {
          name: string;
          company: string;
          rating: string;
          message: string;
          namePlaceholder: string;
          companyPlaceholder: string;
          messagePlaceholder: string;
          submit: string;
          consent: string;
          success: string;
        };
      };
    };
    about: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
      values: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: { title: string; description: string }[];
      };
      team: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: { label: string; title: string; description: string }[];
      };
    };
    blog: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
      listHeading: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      backLabel: string;
      readMoreLabel: string;
    };
    contact: {
      meta: { title: string; description: string };
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryLabel: string;
        secondaryLabel: string;
      };
      formHeading: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      formLabels: {
        name: string;
        email: string;
        message: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        submit: string;
        consent: string;
      };
      directHeading: {
        eyebrow: string;
        title: string;
        subtitle: string;
      };
      directLabels: {
        email: string;
        phone: string;
        location: string;
        scope: string;
        scopeText: string;
      };
    };
  };
};

export const copy: Record<Lang, Copy> = {
  en: {
    site: {
      tagline: 'Premium websites for growth-focused companies',
      description:
        'We build fast corporate and lead websites with measurable performance, SEO and clean design.',
    },
    nav: {
      services: 'Services',
      process: 'Process',
      references: 'References',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    menu: {
      openLabel: 'Open menu',
      closeLabel: 'Close',
    },
    footer: {
      navigation: 'Navigation',
      socials: 'Socials',
      rights: 'All rights reserved.',
    },
    accessibility: {
      skipToContent: 'Skip to content',
    },
    sections: {
      heroStats: [
        { value: '95+', label: 'Lighthouse score' },
        { value: '< 1.2 s', label: 'First load' },
        { value: '0', label: 'Unnecessary JS' },
      ],
      heroSide: {
        eyebrow: 'Premium agency vibe',
        title: 'Modern stack. Fast delivery.',
        subtitle: 'Built for speed, reliability and smooth handover to your team.',
        badges: ['SEO-ready', 'SSR/SSG', 'Minimal JS'],
        cards: [
          { label: 'Weekly reporting', value: 'Clear KPI' },
          { label: 'Technical oversight', value: 'Performance monitoring' },
        ],
      },
      valueProps: {
        eyebrow: 'Why Alpinefy',
        title: 'Performance, simplicity, long-term sustainability',
        subtitle: 'We build websites that load fast, communicate clearly and scale with your business.',
        items: [
          {
            title: 'Speed',
            description: 'Static generation, optimized assets and minimal JS for instant load.',
          },
          {
            title: 'Performance',
            description: 'Core Web Vitals above 95 without compromising design or content.',
          },
          {
            title: 'Simplicity',
            description: 'Clean component system your team can extend quickly.',
          },
          {
            title: 'Scalability',
            description: 'Architecture ready for campaigns, new sections and CMS.',
          },
        ],
      },
      services: {
        eyebrow: 'Services',
        title: 'Solutions that work in practice',
        subtitle: 'From lead pages to corporate websites, Shopify e-shops and custom apps.',
        items: [
          {
            title: 'Lead websites',
            description: 'Landing pages that convert. Clear structure and fast iterations.',
            tags: ['Campaigns', 'Conversions', 'Fast launch'],
          },
          {
            title: 'Corporate websites',
            description: 'Complete company presence built for trust and longevity.',
            tags: ['Strategy', 'SEO', 'Modular system'],
          },
          {
            title: 'E-shops (Shopify)',
            description: 'Shopify e-commerce stores with clean catalog structure, conversion-focused checkout and basic invoicing setup.',
            tags: ['Shopify', 'E-commerce', 'Payments'],
          },
          {
            title: 'Applications',
            description: 'Web and mobile applications, dashboards and product interfaces with SEO and performance support.',
            tags: ['Web apps', 'Mobile apps', 'SEO + AI + performance'],
          },
        ],
      },
      process: {
        eyebrow: 'Process',
        title: 'Clear steps. Predictable outcome.',
        subtitle: 'Transparent process that saves time and removes surprises.',
        steps: [
          {
            title: 'Analysis',
            description: 'Workshop, goals, competition. We define content, conversions and KPIs.',
          },
          {
            title: 'Design & build',
            description: 'Wireframes, visual, prototype. Then component build focused on speed.',
          },
          {
            title: 'Launch',
            description: 'Deploy to Netlify, integrations, SEO check, analytics.',
          },
          {
            title: 'Optimization',
            description: 'Iterate by data: speed, tests and new sections.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Trust',
        title: 'What clients say',
        subtitle: 'Short testimonials from teams that wanted speed and clarity.',
        testimonials: [
          {
            quote: 'Alpinefy pushed our Lighthouse from 48 to 96 and conversions grew by 22%.',
            name: 'Marek Kováč',
            role: 'CEO, Brightline Logistics',
          },
          {
            quote: 'Straightforward collaboration. We got a site we can expand without friction.',
            name: 'Lucia Vargová',
            role: 'Marketing Lead, NovaCare',
          },
          {
            quote: 'Technical approach, zero bloat. Netlify deploy was done in a day.',
            name: 'Tomáš Hronec',
            role: 'Product Manager, Polar Analytics',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Most common questions',
        subtitle: 'Short answers to what clients ask most often.',
        items: [
          {
            question: 'How much does a corporate website cost?',
            answer:
              'Depends on scope. Typically 2,500–12,000 EUR. We send a precise quote after the intro call.',
          },
          {
            question: 'How fast can you deliver?',
            answer:
              'Standard sites in 4–8 weeks. Lead sites can be delivered in 2 weeks.',
          },
          {
            question: 'Can I edit the content myself?',
            answer:
              'Yes. We prepare Decap CMS or a simple Git-based workflow.',
          },
          {
            question: 'Why this modern stack instead of a WordPress template?',
            answer:
              'Because we prioritize speed, security and long-term maintainability over plugin-heavy setups.',
          },
          {
            question: 'Can you take over an existing website?',
            answer:
              'Yes. We start with an audit, propose migration and deliver without downtime.',
          },
        ],
      },
      cta: {
        eyebrow: 'CTA',
        title: 'Let’s talk about your website',
        subtitle: 'No long presentations. 30‑minute call and a clear next step proposal.',
        primaryLabel: 'Book a consultation',
        secondaryLabel: 'Email us',
        note: 'We reply within 24 hours on business days.',
      },
      trustBadges: {
        items: [
          {
            title: 'Core Web Vitals focus',
            description: 'Measured performance and stability from day one.',
          },
          {
            title: 'SEO-ready structure',
            description: 'Clean HTML output, meta and optimized content.',
          },
          {
            title: 'No vendor lock‑in',
            description: 'Components and infra you can extend freely.',
          },
          {
            title: 'Transparent process',
            description: 'Clear milestones, reporting and ownership.',
          },
        ],
      },
      crypto: {
        eyebrow: 'Payments',
        title: 'We accept crypto payments',
        subtitle: 'Card payments and bank transfer are standard. Crypto is available when preferred.',
        note: 'Primary: BTC, ETH, USDT, SOL. Also available on request: other major coins.',
      },
      partners: {
        eyebrow: 'Partners & Stack',
        title: 'Tech stack we know deeply',
        subtitle: 'Main stack, analytics and technical SEO/AI optimization tools we use in production.',
        notes: {
          astro: 'SSG/SSR',
          tailwind: 'UI system',
          netlify: 'Deploy',
          next: 'Apps',
          react: 'Islands',
          figma: 'Design',
          ga: 'Analytics',
          vercel: 'Alt hosting',
        },
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Full coverage from web to technical growth',
        subtitle: 'We build the website foundation, then improve visibility in Google and AI assistants.',
        items: [
          'Website strategy & structure',
          'Website design & development',
          'Technical SEO (crawlability, indexation, on-page)',
          'AI discoverability optimization (LLM/AI answers)',
          'Structured data (Schema.org) implementation',
          'Analytics & conversion tracking',
          'Core Web Vitals & speed optimization',
          'Forms, CRM and automation',
          'Payment and invoicing setup (Shopify)',
          'Hosting, maintenance and support',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Fast websites that deliver results',
          description:
            'Premium agency focused on performance, clean design and sustainable delivery.',
        },
        hero: {
          eyebrow: 'Alpinefy / Web Agency',
          title: 'Fast websites that deliver results',
          subtitle:
            'Premium agency focused on performance, clean design and sustainable solutions. We build corporate and lead websites with a modern stack.',
          primaryLabel: 'Get a consultation',
          secondaryLabel: 'View services',
        },
      },
      services: {
        meta: {
          title: 'Services',
          description: 'Lead websites, corporate websites, Shopify e-shops and custom apps.',
        },
        hero: {
          eyebrow: 'Services',
          title: 'Solutions for companies that want to grow',
          subtitle: 'We choose technology by goals: performance, technical SEO and AI visibility.',
          primaryLabel: 'Get a quote',
          secondaryLabel: 'View process',
        },
      },
      process: {
        meta: {
          title: 'Process',
          description: 'Transparent steps from analysis to launch and optimization.',
        },
        hero: {
          eyebrow: 'Process',
          title: 'A defined process without chaos',
          subtitle: 'You know what happens in each step. From analysis to optimization.',
          primaryLabel: 'Schedule intro call',
          secondaryLabel: 'View services',
        },
      },
      references: {
        meta: {
          title: 'References',
          description: 'Projects, results and measurable impact.',
        },
        hero: {
          eyebrow: 'References',
          title: 'Results you can measure',
          subtitle: 'Every site is built to improve performance, trust and conversions.',
          primaryLabel: 'I want a similar site',
          secondaryLabel: 'View process',
        },
        caseStudiesHeading: {
          eyebrow: 'Case studies',
          title: 'Concrete projects and impact',
          subtitle: 'We focus on outcomes. What changed after launch?',
        },
        caseStudies: [
          {
            name: 'Brightline Logistics',
            summary: 'Corporate site redesign with a focus on B2B lead generation.',
            result: 'Lighthouse 97, +22% conversions',
            stack: 'Astro, Tailwind, Netlify',
          },
          {
            name: 'NovaCare Clinics',
            summary: 'New website for a clinic network with clear service structure.',
            result: 'Bounce rate -18%, +35% inquiries',
            stack: 'Astro, Tailwind, Decap-ready',
          },
          {
            name: 'Polar Analytics',
            summary: 'Lead site for a SaaS product focused on performance and clarity.',
            result: 'FCP 0.9 s, +41% demo requests',
            stack: 'Astro, Tailwind, Netlify',
          },
        ],
        reviews: {
          eyebrow: 'Reviews',
          title: 'Ratings backed by results',
          subtitle: 'Short feedback from teams that needed speed and clarity.',
          items: [
            {
              quote: 'Launch went smooth and the site is finally fast on mobile.',
              name: 'Anna Weiss',
              role: 'Marketing Manager, Northwind',
            },
            {
              quote: 'Performance jumped above 95 and the CMS handoff was clean.',
              name: 'Filip Novotny',
              role: 'Head of Growth, Helio',
            },
            {
              quote: 'Clear process, no chaos. Exactly what a B2B brand needs.',
              name: 'Sarah Klein',
              role: 'COO, Matrix Labs',
            },
            {
              quote: 'We got a scalable design system we can expand internally.',
              name: 'Martin Polak',
              role: 'Product Lead, Qube',
            },
            {
              quote: 'SEO and analytics were ready on day one.',
              name: 'Elena Roth',
              role: 'CMO, NovaCare',
            },
            {
              quote: 'Fast, precise, no unnecessary JS. That was the brief.',
              name: 'Jakub Horak',
              role: 'CTO, Brightline',
            },
          ],
          moreItems: [
            {
              quote: 'Great collaboration and realistic timelines.',
              name: 'Peter Lang',
              role: 'CEO, Axion',
            },
            {
              quote: 'The team optimized our legacy site without downtime.',
              name: 'Mila Petrova',
              role: 'Operations, Synapse',
            },
            {
              quote: 'Our organic and direct traffic finally lands on pages that convert.',
              name: 'Nina Grof',
              role: 'Performance Lead, Lumen',
            },
            {
              quote: 'The site is fast, clean and easy to maintain.',
              name: 'Daniel Ortiz',
              role: 'Founder, ClearPath',
            },
          ],
          actions: {
            more: 'Show more',
            add: 'Add review',
          },
          modalMore: {
            title: 'More client reviews',
            subtitle: 'Additional feedback from teams we delivered for.',
          },
          modalAdd: {
            title: 'Add a review',
            subtitle: 'Share your experience in a few sentences.',
          },
          form: {
            name: 'Name',
            company: 'Company',
            rating: 'Rating',
            message: 'Review',
            namePlaceholder: 'Your name',
            companyPlaceholder: 'Company',
            messagePlaceholder: 'What stood out?',
            submit: 'Submit review',
            consent: 'By submitting you agree to publish the review after approval.',
            success: 'Submitted for approval.',
          },
        },
      },
      about: {
        meta: {
          title: 'About',
          description: 'Senior team focused on performance and clean product design.',
        },
        hero: {
          eyebrow: 'About',
          title: 'Senior team for performance-focused websites',
          subtitle:
            'We are a small, efficient team of designers and developers. We build fast, aesthetic and maintainable websites.',
          primaryLabel: 'Let’s talk',
          secondaryLabel: 'View references',
        },
        values: {
          eyebrow: 'Values',
          title: 'No fluff. Precise work only.',
          subtitle: 'We focus on outcomes, not complex processes.',
          items: [
            {
              title: 'Technical precision',
              description: 'Every component has a purpose. No unnecessary libraries.',
            },
            {
              title: 'Design with outcome',
              description: 'Visuals support conversions, not just effects.',
            },
            {
              title: 'Long-term sustainability',
              description: 'Architecture ready for growth and easy maintenance.',
            },
          ],
        },
        team: {
          eyebrow: 'Team',
          title: 'Experience from agencies and products',
          subtitle: 'No junior experiments. You work with seniors.',
          items: [
            {
              label: 'Design',
              title: 'UI/UX Lead',
              description: 'Visual systems, prototypes and clear content hierarchy.',
            },
            {
              label: 'Frontend',
              title: 'Modern frontend engineering',
              description: 'Performance-first architecture and clean component code.',
            },
            {
              label: 'Strategy',
              title: 'Project lead',
              description: 'Coordination, reporting and delivery without delays.',
            },
          ],
        },
      },
      blog: {
        meta: {
          title: 'Blog',
          description: 'Insights on performance, design and modern web development.',
        },
        hero: {
          eyebrow: 'Blog',
          title: 'Practical insights on performance and design',
          subtitle: 'Concrete guides from practice: speed, SEO, design and decisions.',
          primaryLabel: 'Subscribe',
          secondaryLabel: 'View services',
        },
        listHeading: {
          eyebrow: 'Articles',
          title: 'Latest posts',
          subtitle: 'Short, practical text without marketing fluff.',
        },
        backLabel: 'Back to blog',
        readMoreLabel: 'Read article',
      },
      contact: {
        meta: {
          title: 'Contact',
          description: 'Write us, schedule a consult and we will propose next steps.',
        },
        hero: {
          eyebrow: 'Contact',
          title: 'Tell us what you need',
          subtitle: 'We reply within 24 hours. First call is short and to the point.',
          primaryLabel: 'Send email',
          secondaryLabel: 'View services',
        },
        formHeading: {
          eyebrow: 'Form',
          title: 'A short brief is enough',
          subtitle: 'Share a few points. We’ll reply with questions and next steps.',
        },
        formLabels: {
          name: 'Name & company',
          email: 'Email',
          message: 'What do you need?',
          namePlaceholder: 'Your name, company',
          emailPlaceholder: 'you@email.com',
          messagePlaceholder: 'Briefly describe the project, goal and timeline.',
          submit: 'Send',
          consent: 'By submitting you agree to processing of data for contact purposes.',
        },
        directHeading: {
          eyebrow: 'Contact',
          title: 'Direct contact',
          subtitle: 'Prefer email or a quick call? Reach out directly.',
        },
        directLabels: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          scope: 'Scope',
          scopeText:
            'Minimum scope: a simple corporate site or lead page. Larger projects by request.',
        },
      },
    },
  },
  de: {
    site: {
      tagline: 'Premium-Websites für wachsende Unternehmen',
      description:
        'Wir bauen schnelle Unternehmens- und Lead-Websites in Astro. Fokus auf Performance, SEO und klares Design ohne unnötiges JavaScript.',
    },
    nav: {
      services: 'Leistungen',
      process: 'Prozess',
      references: 'Referenzen',
      about: 'Über uns',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    menu: {
      openLabel: 'Menü öffnen',
      closeLabel: 'Schließen',
    },
    footer: {
      navigation: 'Navigation',
      socials: 'Social Media',
      rights: 'Alle Rechte vorbehalten.',
    },
    accessibility: {
      skipToContent: 'Zum Inhalt springen',
    },
    sections: {
      heroStats: [
        { value: '95+', label: 'Lighthouse-Score' },
        { value: '< 1,2 s', label: 'Erstes Laden' },
        { value: '0', label: 'Unnötiges JS' },
      ],
      heroSide: {
        eyebrow: 'Premium Agency Vibe',
        title: 'Astro. Tailwind. Netlify.',
        subtitle: 'Stack mit Sinn: Speed, Stabilität, einfacher Deploy.',
        badges: ['SEO-ready', 'SSR/SSG', 'Minimal JS'],
        cards: [
          { label: 'Wöchentliches Reporting', value: 'Klare KPI' },
          { label: 'Technischer Fokus', value: 'Performance-Monitoring' },
        ],
      },
      valueProps: {
        eyebrow: 'Warum Alpinefy',
        title: 'Performance, Einfachheit, langfristige Nachhaltigkeit',
        subtitle: 'Websites, die schnell laden, klar kommunizieren und skalieren.',
        items: [
          {
            title: 'Speed',
            description: 'Statische Generierung, optimierte Assets und minimales JS.',
          },
          {
            title: 'Performance',
            description: 'Core Web Vitals über 95 ohne Design‑Kompromisse.',
          },
          {
            title: 'Einfachheit',
            description: 'Sauberes Komponentensystem, leicht erweiterbar.',
          },
          {
            title: 'Skalierbarkeit',
            description: 'Architektur bereit für Kampagnen, neue Sektionen und CMS.',
          },
        ],
      },
      services: {
        eyebrow: 'Leistungen',
        title: 'Lösungen, die in der Praxis funktionieren',
        subtitle: 'Von Lead-Seiten bis zu Unternehmenswebsites, Shopify-Shops und individuellen Apps.',
        items: [
          {
            title: 'Lead-Websites',
            description: 'Landingpages, die konvertieren. Klare Struktur, schnelle Iteration.',
            tags: ['Kampagnen', 'Conversion', 'Schneller Launch'],
          },
          {
            title: 'Unternehmenswebsites',
            description: 'Kompletter Auftritt mit Fokus auf Vertrauen und Langlebigkeit.',
            tags: ['Strategie', 'SEO', 'Modulares System'],
          },
          {
            title: 'E-Shops (Shopify)',
            description: 'Shopify-Shops mit sauberer Struktur, Payments, Basis-Fakturierung und Conversion-Fokus.',
            tags: ['Shopify', 'E-Commerce', 'Payments'],
          },
          {
            title: 'Applikationen',
            description: 'Web- und Mobile-Apps, Dashboards und Produkt-Interfaces inkl. SEO- und Performance-Support.',
            tags: ['Web-Apps', 'Mobile-Apps', 'SEO + AI + Performance'],
          },
        ],
      },
      process: {
        eyebrow: 'Prozess',
        title: 'Klare Schritte. Vorhersehbares Ergebnis.',
        subtitle: 'Transparenter Ablauf, der Zeit spart und Überraschungen reduziert.',
        steps: [
          {
            title: 'Analyse',
            description: 'Workshop, Ziele, Wettbewerb. Wir definieren Inhalte und KPIs.',
          },
          {
            title: 'Design & Build',
            description: 'Wireframes, Visuals, Prototyp. Danach Build in Astro.',
          },
          {
            title: 'Launch',
            description: 'Deploy auf Netlify, Integrationen, SEO‑Check, Analytics.',
          },
          {
            title: 'Optimierung',
            description: 'Iterationen nach Daten: Speed, Tests, neue Sektionen.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Vertrauen',
        title: 'Was Kunden sagen',
        subtitle: 'Kurzfeedback von Teams, die Geschwindigkeit und Klarheit wollten.',
        testimonials: [
          {
            quote: 'Lighthouse von 48 auf 96 und +22 % Conversions.',
            name: 'Marek Kováč',
            role: 'CEO, Brightline Logistics',
          },
          {
            quote: 'Direkte Zusammenarbeit. Website, die wir einfach erweitern können.',
            name: 'Lucia Vargová',
            role: 'Marketing Lead, NovaCare',
          },
          {
            quote: 'Technisch sauber, kein Ballast. Netlify‑Deploy in einem Tag.',
            name: 'Tomáš Hronec',
            role: 'Product Manager, Polar Analytics',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Häufige Fragen',
        subtitle: 'Kurze Antworten auf typische Fragen.',
        items: [
          {
            question: 'Was kostet eine Unternehmenswebsite?',
            answer:
              'Je nach Umfang. Typisch 2.500–12.000 EUR. Nach dem Erstgespräch senden wir ein Angebot.',
          },
          {
            question: 'Wie schnell liefert ihr?',
            answer: 'Standard 4–8 Wochen. Lead-Seiten auch in 2 Wochen möglich.',
          },
          {
            question: 'Kann ich Inhalte selbst bearbeiten?',
            answer: 'Ja. Wir bereiten Decap CMS oder Git‑Workflow vor.',
          },
          {
            question: 'Warum Astro statt WordPress?',
            answer: 'Astro ist schnell, sicher und mit minimalem JS – ideal für SEO.',
          },
          {
            question: 'Übernehmt ihr bestehende Websites?',
            answer: 'Ja. Audit, Migrationsplan und Launch ohne Downtime.',
          },
        ],
      },
      cta: {
        eyebrow: 'CTA',
        title: 'Lassen Sie uns über Ihre Website sprechen',
        subtitle: '30‑Minuten‑Call und ein klarer Vorschlag für die nächsten Schritte.',
        primaryLabel: 'Beratung buchen',
        secondaryLabel: 'E‑Mail schreiben',
        note: 'Antwort innerhalb von 24 Stunden an Werktagen.',
      },
      trustBadges: {
        items: [
          {
            title: 'Core Web Vitals Fokus',
            description: 'Messbare Performance und Stabilität ab Tag 1.',
          },
          {
            title: 'SEO‑ready Struktur',
            description: 'Sauberes HTML, Meta und optimierte Inhalte.',
          },
          {
            title: 'Kein Vendor‑Lock‑in',
            description: 'Komponenten und Infrastruktur frei erweiterbar.',
          },
          {
            title: 'Transparenter Prozess',
            description: 'Klare Meilensteine, Reporting und Ownership.',
          },
        ],
      },
      crypto: {
        eyebrow: 'Zahlungen',
        title: 'Wir akzeptieren Krypto-Zahlungen',
        subtitle: 'Rechnungen können in BTC, ETH oder Stablecoins bezahlt werden. Klare Abrechnung, On-Chain-Bestätigung.',
        note: 'Unterstützt: Bitcoin, Ethereum, USDT, Cardano, Solana, Litecoin.',
      },
      partners: {
        eyebrow: 'Partner & Stack',
        title: 'Tech‑Stack, den wir beherrschen',
        subtitle: 'Bewährte Tools für Performance, Design, technisches SEO und AI‑Optimierung.',
        notes: {
          astro: 'SSG/SSR',
          tailwind: 'UI‑System',
          netlify: 'Deploy',
          next: 'Apps',
          react: 'Islands',
          figma: 'Design',
          ga: 'Analytics',
          vercel: 'Alt Hosting',
        },
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Vom Web bis zum technischen Wachstum',
        subtitle: 'Wir bauen die Web‑Basis und optimieren Sichtbarkeit in Google und AI‑Systemen.',
        items: [
          'Webstrategie & Struktur',
          'Design und Entwicklung von Websites',
          'Technisches SEO (Crawlbarkeit, Indexierung, On‑Page)',
          'AI‑Discoverability‑Optimierung (LLM/AI‑Antworten)',
          'Strukturierte Daten (Schema.org)',
          'Analytics und Conversion‑Tracking',
          'Core Web Vitals und Speed‑Optimierung',
          'Formulare, CRM und Automatisierung',
          'Payments und Basis‑Fakturierung (Shopify)',
          'Hosting, Wartung und Support',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Schnelle Websites, die Ergebnisse liefern',
          description: 'Premium‑Agentur für Performance, Design und nachhaltige Umsetzung.',
        },
        hero: {
          eyebrow: 'Alpinefy / Webagentur',
          title: 'Schnelle Websites, die Ergebnisse liefern',
          subtitle:
            'Premium‑Agentur für Performance, klares Design und nachhaltige Lösungen in Astro und Next.js.',
          primaryLabel: 'Beratung anfragen',
          secondaryLabel: 'Leistungen ansehen',
        },
      },
      services: {
        meta: {
          title: 'Leistungen',
          description: 'Lead‑Websites, Unternehmensseiten, Shopify‑Shops und individuelle Apps.',
        },
        hero: {
          eyebrow: 'Leistungen',
          title: 'Lösungen für Unternehmen mit Wachstum',
          subtitle: 'Technologie nach Ziel: Performance, technisches SEO und AI-Sichtbarkeit.',
          primaryLabel: 'Angebot erhalten',
          secondaryLabel: 'Prozess ansehen',
        },
      },
      process: {
        meta: {
          title: 'Prozess',
          description: 'Transparente Schritte von Analyse bis Launch und Optimierung.',
        },
        hero: {
          eyebrow: 'Prozess',
          title: 'Ein definierter Prozess ohne Chaos',
          subtitle: 'Sie wissen, was in jedem Schritt passiert.',
          primaryLabel: 'Intro‑Call buchen',
          secondaryLabel: 'Leistungen ansehen',
        },
      },
      references: {
        meta: {
          title: 'Referenzen',
          description: 'Projekte, Ergebnisse und messbarer Impact.',
        },
        hero: {
          eyebrow: 'Referenzen',
          title: 'Ergebnisse, die messbar sind',
          subtitle: 'Jede Website verbessert Performance, Vertrauen und Conversions.',
          primaryLabel: 'Ähnliches Projekt',
          secondaryLabel: 'Prozess ansehen',
        },
        caseStudiesHeading: {
          eyebrow: 'Case Studies',
          title: 'Konkrete Projekte und Wirkung',
          subtitle: 'Wir fokussieren Resultate. Was hat sich nach Launch geändert?',
        },
        caseStudies: [
          {
            name: 'Brightline Logistics',
            summary: 'Redesign der Unternehmensseite mit Fokus auf B2B‑Leads.',
            result: 'Lighthouse 97, +22 % Conversions',
            stack: 'Astro, Tailwind, Netlify',
          },
          {
            name: 'NovaCare Clinics',
            summary: 'Neuer Webauftritt für Klinikkette mit klarer Struktur.',
            result: 'Bounce Rate -18 %, +35 % Anfragen',
            stack: 'Astro, Tailwind, Decap-ready',
          },
          {
            name: 'Polar Analytics',
            summary: 'Lead‑Website für SaaS mit Fokus auf Performance und Klarheit.',
            result: 'FCP 0,9 s, +41 % Demo‑Requests',
            stack: 'Astro, Tailwind, Netlify',
          },
        ],
        reviews: {
          eyebrow: 'Bewertungen',
          title: 'Bewertungen, die zu den Ergebnissen passen',
          subtitle: 'Kurzfeedback von Teams, die Tempo und Klarheit wollten.',
          items: [
            {
              quote: 'Launch lief sauber und die Seite ist endlich schnell auf Mobile.',
              name: 'Anna Weiss',
              role: 'Marketing Managerin, Northwind',
            },
            {
              quote: 'Performance sprang über 95 und die CMS‑Übergabe war sauber.',
              name: 'Filip Novotny',
              role: 'Head of Growth, Helio',
            },
            {
              quote: 'Klarer Prozess, kein Chaos. Genau das, was eine B2B‑Marke braucht.',
              name: 'Sarah Klein',
              role: 'COO, Matrix Labs',
            },
            {
              quote: 'Wir haben ein skalierbares Designsystem, das wir intern erweitern.',
              name: 'Martin Polak',
              role: 'Product Lead, Qube',
            },
            {
              quote: 'SEO und Analytics waren ab Tag eins bereit.',
              name: 'Elena Roth',
              role: 'CMO, NovaCare',
            },
            {
              quote: 'Schnell, präzise, kein unnötiges JS. Genau das Briefing.',
              name: 'Jakub Horak',
              role: 'CTO, Brightline',
            },
          ],
          moreItems: [
            {
              quote: 'Starke Zusammenarbeit und realistische Timelines.',
              name: 'Peter Lang',
              role: 'CEO, Axion',
            },
            {
              quote: 'Team hat unsere Legacy‑Seite ohne Downtime optimiert.',
              name: 'Mila Petrova',
              role: 'Operations, Synapse',
            },
            {
              quote: 'Unsere Paid‑Kampagnen haben endlich Landingpages, die konvertieren.',
              name: 'Nina Grof',
              role: 'Performance Lead, Lumen',
            },
            {
              quote: 'Die Seite ist schnell, clean und leicht zu warten.',
              name: 'Daniel Ortiz',
              role: 'Founder, ClearPath',
            },
          ],
          actions: {
            more: 'Mehr anzeigen',
            add: 'Bewertung hinzufügen',
          },
          modalMore: {
            title: 'Weitere Kundenbewertungen',
            subtitle: 'Zusätzliches Feedback von Teams, die wir betreut haben.',
          },
          modalAdd: {
            title: 'Bewertung hinzufügen',
            subtitle: 'Teile deine Erfahrung in wenigen Sätzen.',
          },
          form: {
            name: 'Name',
            company: 'Firma',
            rating: 'Bewertung',
            message: 'Feedback',
            namePlaceholder: 'Ihr Name',
            companyPlaceholder: 'Firma',
            messagePlaceholder: 'Was war besonders?',
            submit: 'Bewertung senden',
            consent: 'Mit dem Absenden stimmen Sie der Veröffentlichung nach Freigabe zu.',
            success: 'Zur Freigabe eingereicht.',
          },
        },
      },
      about: {
        meta: {
          title: 'Über uns',
          description: 'Senior‑Team mit Fokus auf Performance und klares Produktdesign.',
        },
        hero: {
          eyebrow: 'Über uns',
          title: 'Senior‑Team für performante Websites',
          subtitle: 'Kleines, effizientes Team. Schnelle, ästhetische, wartbare Websites.',
          primaryLabel: 'Kontakt aufnehmen',
          secondaryLabel: 'Referenzen ansehen',
        },
        values: {
          eyebrow: 'Werte',
          title: 'Kein Blabla. Nur präzise Arbeit.',
          subtitle: 'Fokus auf Ergebnis statt komplexe Prozesse.',
          items: [
            {
              title: 'Technische Präzision',
              description: 'Jede Komponente hat Zweck. Keine unnötigen Libraries.',
            },
            {
              title: 'Design mit Wirkung',
              description: 'Visuell für Conversions, nicht nur Effekte.',
            },
            {
              title: 'Langfristige Wartbarkeit',
              description: 'Architektur bereit für Wachstum und einfache Pflege.',
            },
          ],
        },
        team: {
          eyebrow: 'Team',
          title: 'Erfahrung aus Agenturen und Produkten',
          subtitle: 'Keine Junior‑Experimente. Direkter Kontakt mit Seniors.',
          items: [
            {
              label: 'Design',
              title: 'UI/UX Lead',
              description: 'Designsysteme, Prototypen, klare Hierarchie.',
            },
            {
              label: 'Frontend',
              title: 'Astro & Next.js',
              description: 'Performance, SSR/SSG und saubere Komponenten.',
            },
            {
              label: 'Strategie',
              title: 'Projektlead',
              description: 'Koordination, Reporting und termingerechte Lieferung.',
            },
          ],
        },
      },
      blog: {
        meta: {
          title: 'Blog',
          description: 'Insights zu Performance, Design und Web‑Entwicklung in Astro.',
        },
        hero: {
          eyebrow: 'Blog',
          title: 'Praxis‑Insights zu Performance und Design',
          subtitle: 'Konkrete Guides: Speed, SEO, Design und technische Entscheidungen.',
          primaryLabel: 'Updates erhalten',
          secondaryLabel: 'Leistungen ansehen',
        },
        listHeading: {
          eyebrow: 'Artikel',
          title: 'Neueste Beiträge',
          subtitle: 'Kurz, praktisch und ohne Marketing‑Blabla.',
        },
        backLabel: 'Zurück zum Blog',
        readMoreLabel: 'Artikel lesen',
      },
      contact: {
        meta: {
          title: 'Kontakt',
          description: 'Schreiben Sie uns – wir schlagen die nächsten Schritte vor.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Sagen Sie uns, was Sie brauchen',
          subtitle: 'Antwort innerhalb von 24 Stunden. Kurzer, klarer Erst‑Call.',
          primaryLabel: 'E‑Mail schreiben',
          secondaryLabel: 'Leistungen ansehen',
        },
        formHeading: {
          eyebrow: 'Formular',
          title: 'Kurzer Brief reicht',
          subtitle: 'Ein paar Punkte genügen. Wir melden uns mit Fragen.',
        },
        formLabels: {
          name: 'Name & Firma',
          email: 'E‑Mail',
          message: 'Was benötigen Sie?',
          namePlaceholder: 'Ihr Name, Firma',
          emailPlaceholder: 'sie@email.com',
          messagePlaceholder: 'Kurz Projekt, Ziel und Zeitplan.',
          submit: 'Senden',
          consent: 'Mit dem Absenden stimmen Sie der Datenverarbeitung zu.',
        },
        directHeading: {
          eyebrow: 'Kontakt',
          title: 'Direkter Kontakt',
          subtitle: 'Lieber E‑Mail oder kurzer Call? Schreiben Sie uns.',
        },
        directLabels: {
          email: 'E‑Mail',
          phone: 'Telefon',
          location: 'Standort',
          scope: 'Scope',
          scopeText: 'Minimum: einfache Firmenwebsite oder Lead‑Seite. Größere Projekte nach Absprache.',
        },
      },
    },
  },
  pl: {
    site: {
      tagline: 'Premium strony dla rosnących firm',
      description:
        'Tworzymy szybkie strony firmowe i leady w Astro. Wydajność, SEO i czysty design bez zbędnego JS.',
    },
    nav: {
      services: 'Usługi',
      process: 'Proces',
      references: 'Referencje',
      about: 'O nas',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    menu: {
      openLabel: 'Otwórz menu',
      closeLabel: 'Zamknij',
    },
    footer: {
      navigation: 'Nawigacja',
      socials: 'Social media',
      rights: 'Wszelkie prawa zastrzeżone.',
    },
    accessibility: {
      skipToContent: 'Przejdź do treści',
    },
    sections: {
      heroStats: [
        { value: '95+', label: 'Wynik Lighthouse' },
        { value: '< 1,2 s', label: 'Pierwsze ładowanie' },
        { value: '0', label: 'Zbędny JS' },
      ],
      heroSide: {
        eyebrow: 'Premium agency vibe',
        title: 'Astro. Tailwind. Netlify.',
        subtitle: 'Stack, który ma sens: szybkość, stabilność, prosty deploy.',
        badges: ['SEO-ready', 'SSR/SSG', 'Minimal JS'],
        cards: [
          { label: 'Tygodniowy reporting', value: 'Jasne KPI' },
          { label: 'Nadzór techniczny', value: 'Monitoring wydajności' },
        ],
      },
      valueProps: {
        eyebrow: 'Dlaczego Alpinefy',
        title: 'Wydajność, prostota, długoterminowość',
        subtitle: 'Strony, które ładują się szybko, komunikują jasno i skalują się.',
        items: [
          {
            title: 'Szybkość',
            description: 'Statyczne generowanie, zoptymalizowane zasoby i minimalny JS.',
          },
          {
            title: 'Wydajność',
            description: 'Core Web Vitals powyżej 95 bez kompromisów.',
          },
          {
            title: 'Prostota',
            description: 'Czysty system komponentów, łatwy do rozbudowy.',
          },
          {
            title: 'Skalowalność',
            description: 'Architektura gotowa na kampanie i CMS.',
          },
        ],
      },
      services: {
        eyebrow: 'Usługi',
        title: 'Rozwiązania, które działają w praktyce',
        subtitle: 'Od leadów po strony firmowe, sklepy Shopify i aplikacje.',
        items: [
          {
            title: 'Strony leadowe',
            description: 'Landing page, które konwertują. Jasna struktura i szybkie iteracje.',
            tags: ['Kampanie', 'Konwersje', 'Szybki start'],
          },
          {
            title: 'Strony firmowe',
            description: 'Kompletny wizerunek firmy z naciskiem na zaufanie i trwałość.',
            tags: ['Strategia', 'SEO', 'System modułowy'],
          },
          {
            title: 'Sklepy (Shopify)',
            description: 'Sklepy Shopify z czystą strukturą, płatnościami, podstawową fakturacją i naciskiem na konwersję.',
            tags: ['Shopify', 'E-commerce', 'Płatności'],
          },
          {
            title: 'Aplikacje',
            description: 'Aplikacje webowe i mobilne, dashboardy i interfejsy produktowe ze wsparciem SEO i wydajności.',
            tags: ['Web apps', 'Mobile apps', 'SEO + AI + wydajność'],
          },
        ],
      },
      process: {
        eyebrow: 'Proces',
        title: 'Jasne kroki. Przewidywalny efekt.',
        subtitle: 'Transparentny proces oszczędza czas i eliminuje niespodzianki.',
        steps: [
          {
            title: 'Analiza',
            description: 'Warsztat, cele, konkurencja. Definiujemy treść i KPI.',
          },
          {
            title: 'Design & build',
            description: 'Wireframy, wizual i prototyp. Potem build w Astro.',
          },
          {
            title: 'Launch',
            description: 'Deploy na Netlify, integracje, SEO check, analityka.',
          },
          {
            title: 'Optymalizacja',
            description: 'Iteracje na podstawie danych: szybkość, testy, nowe sekcje.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Zaufanie',
        title: 'Co mówią klienci',
        subtitle: 'Krótkie opinie zespołów, które chciały szybkości i jasności.',
        testimonials: [
          {
            quote: 'Lighthouse z 48 na 96 i +22% konwersji.',
            name: 'Marek Kováč',
            role: 'CEO, Brightline Logistics',
          },
          {
            quote: 'Bezpośrednia współpraca. Strona, którą łatwo rozbudować.',
            name: 'Lucia Vargová',
            role: 'Marketing Lead, NovaCare',
          },
          {
            quote: 'Techniczne podejście, zero balastu. Deploy w jeden dzień.',
            name: 'Tomáš Hronec',
            role: 'Product Manager, Polar Analytics',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Najczęstsze pytania',
        subtitle: 'Krótkie odpowiedzi na to, co klienci pytają najczęściej.',
        items: [
          {
            question: 'Ile kosztuje strona firmowa?',
            answer:
              'Zależy od zakresu. Zwykle 2 500–12 000 EUR. Po callu wysyłamy ofertę.',
          },
          {
            question: 'Jak szybko możecie dostarczyć?',
            answer: 'Standard 4–8 tygodni. Lead strony nawet 2 tygodnie.',
          },
          {
            question: 'Czy mogę edytować treści?',
            answer: 'Tak. Przygotowujemy Decap CMS lub prosty workflow Git.',
          },
          {
            question: 'Dlaczego Astro zamiast WordPress?',
            answer: 'Astro jest szybkie, bezpieczne i minimalne w JS. Idealne dla SEO.',
          },
          {
            question: 'Czy przejmujecie istniejące strony?',
            answer: 'Tak. Audyt, plan migracji i wdrożenie bez przerwy.',
          },
        ],
      },
      cta: {
        eyebrow: 'CTA',
        title: 'Porozmawiajmy o Twojej stronie',
        subtitle: '30‑min call i jasny plan kolejnych kroków.',
        primaryLabel: 'Umów konsultację',
        secondaryLabel: 'Napisz do nas',
        note: 'Odpowiadamy w 24h w dni robocze.',
      },
      trustBadges: {
        items: [
          {
            title: 'Fokus na Core Web Vitals',
            description: 'Mierzalna wydajność i stabilność od startu.',
          },
          {
            title: 'Struktura SEO‑ready',
            description: 'Czysty HTML, meta i zoptymalizowana treść.',
          },
          {
            title: 'Bez vendor lock‑in',
            description: 'Komponenty i infra do swobodnej rozbudowy.',
          },
          {
            title: 'Transparentny proces',
            description: 'Jasne kamienie milowe, raporty i odpowiedzialność.',
          },
        ],
      },
      crypto: {
        eyebrow: 'Płatności',
        title: 'Akceptujemy płatności krypto',
        subtitle: 'Faktury możesz opłacić w BTC, ETH lub stablecoinach. Jasne rozliczenia, potwierdzenie on-chain.',
        note: 'Obsługujemy: Bitcoin, Ethereum, USDT, Cardano, Solana, Litecoin.',
      },
      partners: {
        eyebrow: 'Partnerzy & Stack',
        title: 'Stack, który znamy dogłębnie',
        subtitle: 'Sprawdzone narzędzia dla wydajności, designu, SEO technicznego i optymalizacji AI.',
        notes: {
          astro: 'SSG/SSR',
          tailwind: 'System UI',
          netlify: 'Deploy',
          next: 'Aplikacje',
          react: 'Islands',
          figma: 'Design',
          ga: 'Analityka',
          vercel: 'Hosting',
        },
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Od webu po wzrost techniczny',
        subtitle: 'Budujemy bazę strony i poprawiamy widoczność w Google oraz odpowiedziach AI.',
        items: [
          'Strategia i struktura strony',
          'Projektowanie i development stron',
          'SEO techniczne (crawlowanie, indeksacja, on-page)',
          'Optymalizacja pod widoczność AI (LLM/AI answers)',
          'Dane strukturalne (Schema.org)',
          'Analityka i pomiar konwersji',
          'Core Web Vitals i optymalizacja szybkości',
          'Formularze, CRM i automatyzacje',
          'Płatności i podstawowa fakturacja (Shopify)',
          'Hosting, utrzymanie i wsparcie',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Szybkie strony, które dają wyniki',
          description: 'Agencja premium skupiona na wydajności i czystym designie.',
        },
        hero: {
          eyebrow: 'Alpinefy / Web Agency',
          title: 'Szybkie strony, które dają wyniki',
          subtitle:
            'Agencja premium skupiona na wydajności, czystym designie i trwałych rozwiązaniach.',
          primaryLabel: 'Umów konsultację',
          secondaryLabel: 'Zobacz usługi',
        },
      },
      services: {
        meta: {
          title: 'Usługi',
          description: 'Strony leadowe, firmowe, sklepy Shopify i aplikacje.',
        },
        hero: {
          eyebrow: 'Usługi',
          title: 'Rozwiązania dla firm, które chcą rosnąć',
          subtitle: 'Technologia pod cel: wydajność, SEO techniczne i widoczność AI.',
          primaryLabel: 'Poproś o ofertę',
          secondaryLabel: 'Zobacz proces',
        },
      },
      process: {
        meta: {
          title: 'Proces',
          description: 'Transparentne kroki od analizy po launch i optymalizację.',
        },
        hero: {
          eyebrow: 'Proces',
          title: 'Jasno zdefiniowany proces, bez chaosu',
          subtitle: 'Wiesz, co się dzieje na każdym etapie.',
          primaryLabel: 'Umów intro call',
          secondaryLabel: 'Zobacz usługi',
        },
      },
      references: {
        meta: {
          title: 'Referencje',
          description: 'Projekty, wyniki i mierzalny wpływ.',
        },
        hero: {
          eyebrow: 'Referencje',
          title: 'Wyniki, które da się zmierzyć',
          subtitle: 'Każda strona poprawia wydajność, zaufanie i konwersje.',
          primaryLabel: 'Chcę podobną stronę',
          secondaryLabel: 'Zobacz proces',
        },
        caseStudiesHeading: {
          eyebrow: 'Case studies',
          title: 'Konkretne projekty i wpływ',
          subtitle: 'Skupiamy się na wyniku. Co się zmieniło po starcie?',
        },
        caseStudies: [
          {
            name: 'Brightline Logistics',
            summary: 'Redesign strony firmowej z naciskiem na leady B2B.',
            result: 'Lighthouse 97, +22% konwersji',
            stack: 'Astro, Tailwind, Netlify',
          },
          {
            name: 'NovaCare Clinics',
            summary: 'Nowa strona dla sieci klinik z czytelną strukturą usług.',
            result: 'Bounce rate -18%, +35% zapytań',
            stack: 'Astro, Tailwind, Decap-ready',
          },
          {
            name: 'Polar Analytics',
            summary: 'Lead site dla SaaS z naciskiem na wydajność i jasny przekaz.',
            result: 'FCP 0,9 s, +41% demo requestów',
            stack: 'Astro, Tailwind, Netlify',
          },
        ],
        reviews: {
          eyebrow: 'Opinie',
          title: 'Oceny poparte wynikami',
          subtitle: 'Krótkie feedbacki od zespołów, które chciały szybkości i jasności.',
          items: [
            {
              quote: 'Start przebiegł sprawnie, a strona w końcu jest szybka na mobile.',
              name: 'Anna Weiss',
              role: 'Marketing Manager, Northwind',
            },
            {
              quote: 'Wydajność skoczyła powyżej 95, a przekazanie CMS było bezproblemowe.',
              name: 'Filip Novotny',
              role: 'Head of Growth, Helio',
            },
            {
              quote: 'Jasny proces, zero chaosu. Dokładnie tego potrzebuje B2B.',
              name: 'Sarah Klein',
              role: 'COO, Matrix Labs',
            },
            {
              quote: 'Dostaliśmy skalowalny system designu do dalszej rozbudowy.',
              name: 'Martin Polak',
              role: 'Product Lead, Qube',
            },
            {
              quote: 'SEO i analityka były gotowe od pierwszego dnia.',
              name: 'Elena Roth',
              role: 'CMO, NovaCare',
            },
            {
              quote: 'Szybko, precyzyjnie, bez zbędnego JS. Taki był brief.',
              name: 'Jakub Horak',
              role: 'CTO, Brightline',
            },
          ],
          moreItems: [
            {
              quote: 'Świetna współpraca i realistyczne terminy.',
              name: 'Peter Lang',
              role: 'CEO, Axion',
            },
            {
              quote: 'Zoptymalizowali naszą starą stronę bez downtime.',
              name: 'Mila Petrova',
              role: 'Operations, Synapse',
            },
            {
              quote: 'Kampanie płatne wreszcie mają landing pages, które konwertują.',
              name: 'Nina Grof',
              role: 'Performance Lead, Lumen',
            },
            {
              quote: 'Strona jest szybka, czysta i łatwa w utrzymaniu.',
              name: 'Daniel Ortiz',
              role: 'Founder, ClearPath',
            },
          ],
          actions: {
            more: 'Zobacz więcej',
            add: 'Dodaj opinię',
          },
          modalMore: {
            title: 'Więcej opinii klientów',
            subtitle: 'Dodatkowe feedbacki od zespołów, którym pomogliśmy.',
          },
          modalAdd: {
            title: 'Dodaj opinię',
            subtitle: 'Podziel się doświadczeniem w kilku zdaniach.',
          },
          form: {
            name: 'Imię i nazwisko',
            company: 'Firma',
            rating: 'Ocena',
            message: 'Opinia',
            namePlaceholder: 'Twoje imię',
            companyPlaceholder: 'Firma',
            messagePlaceholder: 'Co było najważniejsze?',
            submit: 'Wyślij opinię',
            consent: 'Wysyłając zgadzasz się na publikację po akceptacji.',
            success: 'Wysłane do akceptacji.',
          },
        },
      },
      about: {
        meta: {
          title: 'O nas',
          description: 'Senior team skupiony na wydajności i czystym designie.',
        },
        hero: {
          eyebrow: 'O nas',
          title: 'Senior team dla stron z wydajnością',
          subtitle: 'Mały, efektywny zespół. Szybkie i estetyczne strony.',
          primaryLabel: 'Poznajmy się',
          secondaryLabel: 'Zobacz referencje',
        },
        values: {
          eyebrow: 'Wartości',
          title: 'Bez ozdobników. Tylko precyzyjna praca.',
          subtitle: 'Skupiamy się na wyniku, nie na złożonych procesach.',
          items: [
            {
              title: 'Precyzja techniczna',
              description: 'Każdy komponent ma cel. Zero zbędnych bibliotek.',
            },
            {
              title: 'Design z wynikiem',
              description: 'Wizual wspiera konwersje, nie tylko efekt.',
            },
            {
              title: 'Długoterminowa utrzymalność',
              description: 'Architektura gotowa na rozwój i łatwą administrację.',
            },
          ],
        },
        team: {
          eyebrow: 'Zespół',
          title: 'Doświadczenie z agencji i produktów',
          subtitle: 'Bez juniornych eksperymentów. Pracujesz z seniorami.',
          items: [
            {
              label: 'Design',
              title: 'UI/UX Lead',
              description: 'Systemy wizualne, prototypy, hierarchia treści.',
            },
            {
              label: 'Frontend',
              title: 'Astro & Next.js',
              description: 'Wydajność, SSR/SSG i czysty kod komponentów.',
            },
            {
              label: 'Strategia',
              title: 'Project lead',
              description: 'Koordynacja, raporty i dostarczenie bez opóźnień.',
            },
          ],
        },
      },
      blog: {
        meta: {
          title: 'Blog',
          description: 'Wskazówki o wydajności, designie i web dev w Astro.',
        },
        hero: {
          eyebrow: 'Blog',
          title: 'Praktyczne wskazówki o wydajności i designie',
          subtitle: 'Konkretne poradniki: speed, SEO, design i decyzje techniczne.',
          primaryLabel: 'Subskrybuj',
          secondaryLabel: 'Zobacz usługi',
        },
        listHeading: {
          eyebrow: 'Artykuły',
          title: 'Najnowsze wpisy',
          subtitle: 'Krótkie, praktyczne teksty bez marketingu.',
        },
        backLabel: 'Powrót do bloga',
        readMoreLabel: 'Czytaj artykuł',
      },
      contact: {
        meta: {
          title: 'Kontakt',
          description: 'Napisz do nas, ustalmy konsultację i kolejne kroki.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Powiedz, czego potrzebujesz',
          subtitle: 'Odpowiadamy w 24h. Pierwszy call jest krótki i rzeczowy.',
          primaryLabel: 'Napisz email',
          secondaryLabel: 'Zobacz usługi',
        },
        formHeading: {
          eyebrow: 'Formularz',
          title: 'Wystarczy krótki brief',
          subtitle: 'Wypełnij kilka punktów. Odezwemy się z pytaniami.',
        },
        formLabels: {
          name: 'Imię i firma',
          email: 'Email',
          message: 'Czego potrzebujesz?',
          namePlaceholder: 'Twoje imię, firma',
          emailPlaceholder: 'ty@email.com',
          messagePlaceholder: 'Krótko opisz projekt, cel i termin.',
          submit: 'Wyślij',
          consent: 'Wysyłając zgadzasz się na przetwarzanie danych.',
        },
        directHeading: {
          eyebrow: 'Kontakt',
          title: 'Kontakt bezpośredni',
          subtitle: 'Wolisz email czy krótki call? Napisz do nas.',
        },
        directLabels: {
          email: 'Email',
          phone: 'Telefon',
          location: 'Lokalizacja',
          scope: 'Zakres',
          scopeText:
            'Min. zakres: prosta strona firmowa lub lead. Większe projekty wg ustaleń.',
        },
      },
    },
  },
  cz: {
    site: {
      tagline: 'Prémiové weby pro rostoucí firmy',
      description:
        'Stavíme rychlé firemní a lead weby v Astro. Výkon, SEO a čistý design bez zbytečného JS.',
    },
    nav: {
      services: 'Služby',
      process: 'Proces',
      references: 'Reference',
      about: 'O nás',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    menu: {
      openLabel: 'Otevřít menu',
      closeLabel: 'Zavřít',
    },
    footer: {
      navigation: 'Navigace',
      socials: 'Sociální sítě',
      rights: 'Všechna práva vyhrazena.',
    },
    accessibility: {
      skipToContent: 'Přeskočit na obsah',
    },
    sections: {
      heroStats: [
        { value: '95+', label: 'Lighthouse skóre' },
        { value: '< 1,2 s', label: 'První načtení' },
        { value: '0', label: 'Zbytečný JS' },
      ],
      heroSide: {
        eyebrow: 'Premium agency vibe',
        title: 'Astro. Tailwind. Netlify.',
        subtitle: 'Stack, který dává smysl: rychlost, stabilita, jednoduchý deploy.',
        badges: ['SEO-ready', 'SSR/SSG', 'Minimal JS'],
        cards: [
          { label: 'Týdenní reporting', value: 'Jasné KPI' },
          { label: 'Technický dohled', value: 'Monitoring výkonu' },
        ],
      },
      valueProps: {
        eyebrow: 'Proč Alpinefy',
        title: 'Výkon, jednoduchost, dlouhodobá udržitelnost',
        subtitle: 'Weby, které načítají rychle, komunikují jasně a škálují.',
        items: [
          {
            title: 'Rychlost',
            description: 'Statické generování, optimalizovaná aktiva a minimum JS.',
          },
          {
            title: 'Výkon',
            description: 'Core Web Vitals nad 95 bez kompromisů.',
          },
          {
            title: 'Jednoduchost',
            description: 'Čistý systém komponent, snadno rozšiřitelný.',
          },
          {
            title: 'Škálovatelnost',
            description: 'Architektura připravená na kampaně a CMS.',
          },
        ],
      },
      services: {
        eyebrow: 'Služby',
        title: 'Řešení, která fungují v praxi',
        subtitle: 'Od lead webů po firemní weby, Shopify e-shopy a vlastní appky.',
        items: [
          {
            title: 'Lead weby',
            description: 'Landing stránky, které konvertují. Jasná struktura.',
            tags: ['Kampaně', 'Konverze', 'Rychlé nasazení'],
          },
          {
            title: 'Firemní weby',
            description: 'Kompletní prezentace s důrazem na důvěryhodnost.',
            tags: ['Strategie', 'SEO', 'Modulární systém'],
          },
          {
            title: 'E-shopy (Shopify)',
            description: 'Shopify e-shopy s čistou strukturou, platbami, základní fakturací a důrazem na konverze.',
            tags: ['Shopify', 'E-commerce', 'Platby'],
          },
          {
            title: 'Aplikace',
            description: 'Webové i mobilní aplikace, dashboardy a produktová rozhraní s SEO a výkonnostní podporou.',
            tags: ['Web apps', 'Mobile apps', 'SEO + AI + výkon'],
          },
        ],
      },
      process: {
        eyebrow: 'Proces',
        title: 'Jasné kroky. Předvídatelný výsledek.',
        subtitle: 'Transparentní postup šetří čas a minimalizuje překvapení.',
        steps: [
          {
            title: 'Analýza',
            description: 'Workshop, cíle, konkurence. Definujeme obsah a KPI.',
          },
          {
            title: 'Design & build',
            description: 'Wireframy, vizuál, prototyp. Poté build v Astro.',
          },
          {
            title: 'Launch',
            description: 'Nasazení na Netlify, integrace, SEO kontrola, analytika.',
          },
          {
            title: 'Optimalizace',
            description: 'Iterace podle dat: rychlost, testy, nové sekce.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Důvěra',
        title: 'Co říkají klienti',
        subtitle: 'Krátké reference od týmů, které chtěly rychlost a jasno.',
        testimonials: [
          {
            quote: 'Lighthouse z 48 na 96 a +22 % konverzí.',
            name: 'Marek Kováč',
            role: 'CEO, Brightline Logistics',
          },
          {
            quote: 'Přímá spolupráce. Web, který umíme rozvíjet bez složitostí.',
            name: 'Lucia Vargová',
            role: 'Marketing Lead, NovaCare',
          },
          {
            quote: 'Technický přístup, žádné zbytečnosti. Deploy za den.',
            name: 'Tomáš Hronec',
            role: 'Product Manager, Polar Analytics',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Nejčastější otázky',
        subtitle: 'Krátké odpovědi na to, co řeší klienti nejčastěji.',
        items: [
          {
            question: 'Kolik stojí firemní web?',
            answer:
              'Záleží na rozsahu. Typicky 2 500–12 000 EUR. Po callu pošleme nabídku.',
          },
          {
            question: 'Jak rychle dodáte web?',
            answer: 'Standard 4–8 týdnů. Lead weby i do 2 týdnů.',
          },
          {
            question: 'Budu si umět upravovat obsah?',
            answer: 'Ano. Připravíme Decap CMS nebo Git workflow.',
          },
          {
            question: 'Proč Astro místo WordPressu?',
            answer: 'Astro je extrémně rychlé a bezpečné. Ideální pro výkon a SEO.',
          },
          {
            question: 'Převezmete existující web?',
            answer: 'Ano. Audit, plán migrace a nasazení bez výpadků.',
          },
        ],
      },
      cta: {
        eyebrow: 'CTA',
        title: 'Pojďme probrat váš web',
        subtitle: '30min call a jasný návrh dalších kroků.',
        primaryLabel: 'Rezervovat konzultaci',
        secondaryLabel: 'Napsat email',
        note: 'Odpovídáme do 24 hodin v pracovních dnech.',
      },
      trustBadges: {
        items: [
          {
            title: 'Core Web Vitals fokus',
            description: 'Měřitelný výkon a stabilita od začátku.',
          },
          {
            title: 'SEO‑ready struktura',
            description: 'Čistý HTML výstup, meta a optimalizovaný obsah.',
          },
          {
            title: 'Bez vendor lock‑in',
            description: 'Komponenty a infra, které lze rozšiřovat.',
          },
          {
            title: 'Transparentní proces',
            description: 'Jasné milníky, reporting a zodpovědnosti.',
          },
        ],
      },
      crypto: {
        eyebrow: 'Platby',
        title: 'Přijímáme krypto platby',
        subtitle: 'Faktury lze platit v BTC, ETH nebo stablecoinech. Jasné účtování, on‑chain potvrzení.',
        note: 'Podporujeme: Bitcoin, Ethereum, USDT, Cardano, Solana, Litecoin.',
      },
      partners: {
        eyebrow: 'Partneři & Stack',
        title: 'Tech stack, který známe do hloubky',
        subtitle: 'Ověřené nástroje pro výkon, design, technické SEO a AI optimalizaci.',
        notes: {
          astro: 'SSG/SSR',
          tailwind: 'UI systém',
          netlify: 'Deploy',
          next: 'Apps',
          react: 'Islands',
          figma: 'Design',
          ga: 'Analytika',
          vercel: 'Hosting',
        },
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Kompletní pokrytí od webu po technický růst',
        subtitle: 'Stavíme webový základ a zvyšujeme viditelnost v Google i AI systémech.',
        items: [
          'Webová strategie a struktura',
          'Design a vývoj webů',
          'Technické SEO (crawlování, indexace, on-page)',
          'AI discoverability optimalizace (LLM/AI odpovědi)',
          'Strukturovaná data (Schema.org)',
          'Analytika a měření konverzí',
          'Core Web Vitals a rychlost',
          'Formuláře, CRM a automatizace',
          'Platby a základní fakturace (Shopify)',
          'Hosting, údržba a podpora',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Rychlé weby, které přinášejí výsledky',
          description: 'Prémiová agentura se zaměřením na výkon a čistý design.',
        },
        hero: {
          eyebrow: 'Alpinefy / Web Agency',
          title: 'Rychlé weby, které přinášejí výsledky',
          subtitle:
            'Prémiová agentura zaměřená na výkon, čistý design a udržitelná řešení.',
          primaryLabel: 'Získat konzultaci',
          secondaryLabel: 'Zobrazit služby',
        },
      },
      services: {
        meta: {
          title: 'Služby',
          description: 'Lead weby, firemní weby, Shopify e-shopy a vlastní appky.',
        },
        hero: {
          eyebrow: 'Služby',
          title: 'Řešení pro firmy, které chtějí růst',
          subtitle: 'Technologie podle cíle: výkon, technické SEO a AI viditelnost.',
          primaryLabel: 'Získat nabídku',
          secondaryLabel: 'Zobrazit proces',
        },
      },
      process: {
        meta: {
          title: 'Proces',
          description: 'Transparentní kroky od analýzy po launch a optimalizaci.',
        },
        hero: {
          eyebrow: 'Proces',
          title: 'Jasně definovaný postup bez chaosu',
          subtitle: 'Víte, co se děje v každém kroku.',
          primaryLabel: 'Naplánovat intro call',
          secondaryLabel: 'Zobrazit služby',
        },
      },
      references: {
        meta: {
          title: 'Reference',
          description: 'Projekty, výsledky a měřitelný dopad.',
        },
        hero: {
          eyebrow: 'Reference',
          title: 'Výsledky, které lze měřit',
          subtitle: 'Každý web zlepšuje výkon, důvěryhodnost a konverze.',
          primaryLabel: 'Chci podobný web',
          secondaryLabel: 'Zobrazit proces',
        },
        caseStudiesHeading: {
          eyebrow: 'Case studies',
          title: 'Konkrétní projekty a dopad',
          subtitle: 'Zaměřujeme se na výsledek. Co se změnilo po spuštění?',
        },
        caseStudies: [
          {
            name: 'Brightline Logistics',
            summary: 'Redesign firemního webu s důrazem na B2B leady.',
            result: 'Lighthouse 97, +22 % konverzí',
            stack: 'Astro, Tailwind, Netlify',
          },
          {
            name: 'NovaCare Clinics',
            summary: 'Nový web pro síť klinik s jasnou strukturou služeb.',
            result: 'Bounce rate -18 %, +35 % poptávek',
            stack: 'Astro, Tailwind, Decap-ready',
          },
          {
            name: 'Polar Analytics',
            summary: 'Lead web pro SaaS s důrazem na výkon a jasnou komunikaci.',
            result: 'FCP 0,9 s, +41 % demo requestů',
            stack: 'Astro, Tailwind, Netlify',
          },
        ],
        reviews: {
          eyebrow: 'Hodnocení',
          title: 'Hodnocení podložená výsledky',
          subtitle: 'Krátké feedbacky od týmů, které chtěly rychlost a jasnost.',
          items: [
            {
              quote: 'Launch proběhl hladce a web je konečně rychlý na mobile.',
              name: 'Anna Weiss',
              role: 'Marketing Manager, Northwind',
            },
            {
              quote: 'Výkon skočil nad 95 a předání CMS bylo čisté.',
              name: 'Filip Novotny',
              role: 'Head of Growth, Helio',
            },
            {
              quote: 'Jasný proces, žádný chaos. Přesně to, co B2B značka potřebuje.',
              name: 'Sarah Klein',
              role: 'COO, Matrix Labs',
            },
            {
              quote: 'Dostali jsme škálovatelný design systém, který můžeme dál rozvíjet.',
              name: 'Martin Polak',
              role: 'Product Lead, Qube',
            },
            {
              quote: 'SEO i analytika byly připravené od prvního dne.',
              name: 'Elena Roth',
              role: 'CMO, NovaCare',
            },
            {
              quote: 'Rychle, přesně, bez zbytečného JS. To byl brief.',
              name: 'Jakub Horak',
              role: 'CTO, Brightline',
            },
          ],
          moreItems: [
            {
              quote: 'Skvělá spolupráce a realistické termíny.',
              name: 'Peter Lang',
              role: 'CEO, Axion',
            },
            {
              quote: 'Tým optimalizoval náš legacy web bez výpadků.',
              name: 'Mila Petrova',
              role: 'Operations, Synapse',
            },
            {
              quote: 'Náš organický i přímý traffic konečně chodí na landing pages, které konvertují.',
              name: 'Nina Grof',
              role: 'Performance Lead, Lumen',
            },
            {
              quote: 'Web je rychlý, čistý a snadno udržitelný.',
              name: 'Daniel Ortiz',
              role: 'Founder, ClearPath',
            },
          ],
          actions: {
            more: 'Zobrazit více',
            add: 'Přidat recenzi',
          },
          modalMore: {
            title: 'Více recenzí klientů',
            subtitle: 'Další feedbacky od týmů, se kterými jsme pracovali.',
          },
          modalAdd: {
            title: 'Přidat recenzi',
            subtitle: 'Sdílejte zkušenost v několika větách.',
          },
          form: {
            name: 'Jméno',
            company: 'Firma',
            rating: 'Hodnocení',
            message: 'Recenze',
            namePlaceholder: 'Vaše jméno',
            companyPlaceholder: 'Firma',
            messagePlaceholder: 'Co bylo nejdůležitější?',
            submit: 'Odeslat recenzi',
            consent: 'Odesláním souhlasíte se zveřejněním po schválení.',
            success: 'Odesláno ke schválení.',
          },
        },
      },
      about: {
        meta: {
          title: 'O nás',
          description: 'Senior tým zaměřený na výkon a čistý design.',
        },
        hero: {
          eyebrow: 'O nás',
          title: 'Seniorní tým pro weby s výkonem',
          subtitle: 'Malý, efektivní tým. Rychlé, estetické a udržitelné weby.',
          primaryLabel: 'Poznejme se',
          secondaryLabel: 'Zobrazit reference',
        },
        values: {
          eyebrow: 'Hodnoty',
          title: 'Žádné pozlátko. Jen přesná práce.',
          subtitle: 'Zaměřujeme se na výsledek, ne na složité procesy.',
          items: [
            {
              title: 'Technická preciznost',
              description: 'Každý komponent má účel. Žádné zbytečné knihovny.',
            },
            {
              title: 'Design s výsledkem',
              description: 'Vizuál podporuje konverze, ne jen efekty.',
            },
            {
              title: 'Dlouhodobá udržitelnost',
              description: 'Architektura připravená na růst a snadnou správu.',
            },
          ],
        },
        team: {
          eyebrow: 'Tým',
          title: 'Zkušenosti z agentur i produktů',
          subtitle: 'Žádné juniorní experimenty. Pracujete se seniory.',
          items: [
            {
              label: 'Design',
              title: 'UI/UX Lead',
              description: 'Vizuální systémy, prototypy, jasná hierarchie.',
            },
            {
              label: 'Frontend',
              title: 'Moderný frontend engineering',
              description: 'Výkonovo orientovaná architektúra a čistý komponentový kód.',
            },
            {
              label: 'Strategie',
              title: 'Projektový lead',
              description: 'Koordinace, reporting a dodání bez skluzu.',
            },
          ],
        },
      },
      blog: {
        meta: {
          title: 'Blog',
          description: 'Poznatky z výkonu, designu a vývoje webů v Astro.',
        },
        hero: {
          eyebrow: 'Blog',
          title: 'Praktické poznatky z výkonu a designu',
          subtitle: 'Konkrétní návody: rychlost, SEO, design a technická rozhodnutí.',
          primaryLabel: 'Odebírat novinky',
          secondaryLabel: 'Zobrazit služby',
        },
        listHeading: {
          eyebrow: 'Články',
          title: 'Nejnovější články',
          subtitle: 'Krátké a praktické texty bez marketingu.',
        },
        backLabel: 'Zpět na blog',
        readMoreLabel: 'Číst článek',
      },
      contact: {
        meta: {
          title: 'Kontakt',
          description: 'Napište nám a domluvme konzultaci.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Řekněte nám, co potřebujete',
          subtitle: 'Odpovídáme do 24 hodin. První call je krátký a věcný.',
          primaryLabel: 'Napsat email',
          secondaryLabel: 'Zobrazit služby',
        },
        formHeading: {
          eyebrow: 'Formulář',
          title: 'Stačí stručný brief',
          subtitle: 'Vyplňte pár bodů. Ozveme se s otázkami.',
        },
        formLabels: {
          name: 'Jméno a firma',
          email: 'Email',
          message: 'Co potřebujete?',
          namePlaceholder: 'Vaše jméno, firma',
          emailPlaceholder: 'vas@email.cz',
          messagePlaceholder: 'Stručně popište projekt, cíl a termín.',
          submit: 'Odeslat',
          consent: 'Odesláním souhlasíte se zpracováním údajů.',
        },
        directHeading: {
          eyebrow: 'Kontakt',
          title: 'Přímý kontakt',
          subtitle: 'Preferujete email nebo krátký call? Ozvěte se.',
        },
        directLabels: {
          email: 'Email',
          phone: 'Telefon',
          location: 'Lokalita',
          scope: 'Scope',
          scopeText:
            'Min. rozsah: jednoduchý firemní web nebo lead stránka. Větší projekty dle zadání.',
        },
      },
    },
  },
  sk: {
    site: {
      tagline: 'Prémiové weby pre rastové firmy',
      description:
        'Staviame rýchle firemné a lead weby s dôrazom na výkon, SEO a čistý dizajn.',
    },
    nav: {
      services: 'Služby',
      process: 'Proces',
      references: 'Referencie',
      about: 'O nás',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    menu: {
      openLabel: 'Otvoriť menu',
      closeLabel: 'Zatvoriť',
    },
    footer: {
      navigation: 'Navigácia',
      socials: 'Sociálne siete',
      rights: 'Všetky práva vyhradené.',
    },
    accessibility: {
      skipToContent: 'Preskočiť na obsah',
    },
    sections: {
      heroStats: [
        { value: '95+', label: 'Lighthouse skóre' },
        { value: '< 1.2 s', label: 'Prvé načítanie' },
        { value: '0', label: 'Zbytočný JS' },
      ],
      heroSide: {
        eyebrow: 'Premium agency vibe',
        title: 'Moderný stack. Rýchle doručenie.',
        subtitle: 'Stabilné riešenie postavené na rýchlosti, kvalite a jednoduchej správe.',
        badges: ['SEO-ready', 'SSR/SSG', 'Minimal JS'],
        cards: [
          { label: 'Týždenný reporting', value: 'Jasné KPI' },
          { label: 'Technický dohľad', value: 'Monitoring výkonu' },
        ],
      },
      valueProps: {
        eyebrow: 'Prečo Alpinefy',
        title: 'Výkon, jednoduchosť, dlhodobá udržateľnosť',
        subtitle: 'Staviame weby, ktoré rýchlo načítajú, jasne komunikujú a vedia rásť.',
        items: [
          {
            title: 'Rýchlosť',
            description: 'Statické generovanie, optimalizované assets a minimálny JS.',
          },
          {
            title: 'Výkon',
            description: 'Core Web Vitals držíme nad 95 bez kompromisov.',
          },
          {
            title: 'Jednoduchosť',
            description: 'Čistý systém komponentov, ktorý vie tím rýchlo rozširovať.',
          },
          {
            title: 'Škálovateľnosť',
            description: 'Architektúra pripravená na kampane, nové sekcie aj CMS.',
          },
        ],
      },
      services: {
        eyebrow: 'Služby',
        title: 'Riešenia, ktoré fungujú v praxi',
        subtitle: 'Od lead webov po firemné weby, Shopify e-shopy a vlastné appky.',
        items: [
          {
            title: 'Lead weby',
            description: 'Landing stránky, ktoré konvertujú. Jasná štruktúra, rýchle iterácie.',
            tags: ['Kampane', 'Konverzie', 'Rýchle nasadenie'],
          },
          {
            title: 'Firemné weby',
            description: 'Komplexná prezentácia firmy s dôrazom na dôveryhodnosť.',
            tags: ['Stratégia', 'SEO', 'Modulárny systém'],
          },
          {
            title: 'E-shopy (Shopify)',
            description: 'Shopify e-shopy s čistou štruktúrou katalógu, platbami, základnou fakturáciou a dôrazom na konverzie.',
            tags: ['Shopify', 'E-commerce', 'Platby'],
          },
          {
            title: 'Aplikácie',
            description: 'Webové aj mobilné aplikácie, dashboardy a produktové rozhrania s SEO a výkonovou podporou.',
            tags: ['Web apps', 'Mobile apps', 'SEO + AI + výkon'],
          },
        ],
      },
      process: {
        eyebrow: 'Proces',
        title: 'Jasné kroky. Predvídateľný výsledok.',
        subtitle: 'Transparentný postup, ktorý šetrí čas a minimalizuje prekvapenia.',
        steps: [
          {
            title: 'Analýza',
            description: 'Workshop, ciele, konkurencia. Definujeme obsah a KPI.',
          },
          {
            title: 'Dizajn & build',
            description: 'Wireframy, vizuál, prototyp. Následne implementácia s dôrazom na výkon.',
          },
          {
            title: 'Launch',
            description: 'Nasadenie na Netlify, prepojenia, SEO kontrola, analytika.',
          },
          {
            title: 'Optimalizácia',
            description: 'Iterácie podľa dát: rýchlosť, testy a nové sekcie.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Dôvera',
        title: 'Čo hovoria klienti',
        subtitle: 'Krátke referencie od tímov, ktoré chceli rýchlosť a jasný proces.',
        testimonials: [
          {
            quote: 'Alpinefy nám zrýchlilo web z 48 na 96 a konverzie narástli o 22 %.',
            name: 'Marek Kováč',
            role: 'CEO, Brightline Logistics',
          },
          {
            quote: 'Spolupráca bola priamočiara. Web vieme rozširovať bez zložitostí.',
            name: 'Lucia Vargová',
            role: 'Marketing Lead, NovaCare',
          },
          {
            quote: 'Technický prístup, nulové zbytočnosti. Deploy na Netlify bol hotový za deň.',
            name: 'Tomáš Hronec',
            role: 'Product Manager, Polar Analytics',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Najčastejšie otázky',
        subtitle: 'Krátke odpovede na to, čo klienti riešia najčastejšie.',
        items: [
          {
            question: 'Koľko stojí firemný web?',
            answer:
              'Závisí od rozsahu. Typicky 2 500 – 12 000 EUR. Po úvodnom call-e posielame ponuku.',
          },
          {
            question: 'Ako rýchlo viete web dodať?',
            answer:
              'Štandardný web doručíme za 4 – 8 týždňov. Lead weby vieme dodať aj do 2 týždňov.',
          },
          {
            question: 'Budem si vedieť upravovať obsah?',
            answer: 'Áno. Pripravujeme Decap CMS alebo Git-based workflow.',
          },
          {
            question: 'Prečo moderný stack namiesto WordPress šablóny?',
            answer: 'Preferujeme rýchlosť, bezpečnosť a dlhodobú udržateľnosť bez pluginového balastu.',
          },
          {
            question: 'Viete prebrať existujúci web?',
            answer: 'Áno. Audit, postup migrácie a nový web bez výpadkov.',
          },
        ],
      },
      cta: {
        eyebrow: 'CTA',
        title: 'Poďme sa porozprávať o vašom webe',
        subtitle: '30-minútový call a rýchly návrh ďalších krokov.',
        primaryLabel: 'Rezervovať konzultáciu',
        secondaryLabel: 'Napísať email',
        note: 'Odpovedáme do 24 hodín v pracovné dni.',
      },
      trustBadges: {
        items: [
          {
            title: 'Core Web Vitals fokus',
            description: 'Merateľný výkon a stabilita od začiatku.',
          },
          {
            title: 'SEO-ready štruktúra',
            description: 'Čistý HTML výstup, meta a optimalizovaný obsah.',
          },
          {
            title: 'Bez vendor lock‑in',
            description: 'Komponenty a infra na slobodné rozširovanie.',
          },
          {
            title: 'Transparentný proces',
            description: 'Jasné míľniky, reporting a zodpovednosti.',
          },
        ],
      },
      crypto: {
        eyebrow: 'Platby',
        title: 'Prijímame krypto platby',
        subtitle: 'Štandard je karta a bankový prevod, krypto vieme zapnúť podľa preferencie klienta.',
        note: 'Primárne: BTC, ETH, USDT, SOL. Vieme spracovať aj ďalšie hlavné meny.',
      },
      partners: {
        eyebrow: 'Partneri & Stack',
        title: 'Tech stack, ktorý poznáme do hĺbky',
        subtitle: 'Hlavný stack, analytika a nástroje pre technické SEO a AI optimalizáciu v produkcii.',
        notes: {
          astro: 'SSG/SSR',
          tailwind: 'UI systém',
          netlify: 'Deploy',
          next: 'Apps',
          react: 'Islands',
          figma: 'Dizajn',
          ga: 'Analytika',
          vercel: 'Hosting',
        },
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Kompletné pokrytie od webu po technický rast',
        subtitle: 'Budujeme webový základ a zvyšujeme viditeľnosť v Google aj AI odpovediach.',
        items: [
          'Webová stratégia a štruktúra',
          'Dizajn a vývoj webstránok',
          'Technické SEO (crawlovanie, indexácia, on-page)',
          'AI discoverability optimalizácia (LLM/AI odpovede)',
          'Štruktúrované dáta (Schema.org)',
          'Analytika a meranie konverzií',
          'Core Web Vitals a optimalizácia rýchlosti',
          'Formuláre, CRM a automatizácie',
          'Nastavenie platieb a základnej fakturácie (Shopify)',
          'Hosting, údržba a podpora',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Rýchle weby, ktoré prinášajú výsledky',
          description: 'Premium agency zameraná na výkon, dizajn a udržateľné riešenia.',
        },
        hero: {
          eyebrow: 'Alpinefy / Web Agency',
          title: 'Rýchle weby, ktoré prinášajú výsledky',
          subtitle:
            'Premium agency zameraná na výkon, čistý dizajn a technicky udržateľné riešenia.',
          primaryLabel: 'Získať konzultáciu',
          secondaryLabel: 'Pozrieť služby',
        },
      },
      services: {
        meta: {
          title: 'Služby',
          description: 'Lead weby, firemné weby, Shopify e-shopy a vlastné appky.',
        },
        hero: {
          eyebrow: 'Služby',
          title: 'Riešenia pre firmy, ktoré chcú rásť',
          subtitle: 'Technológie podľa cieľa: výkon, technické SEO a AI viditeľnosť.',
          primaryLabel: 'Získať ponuku',
          secondaryLabel: 'Pozrieť proces',
        },
      },
      process: {
        meta: {
          title: 'Proces',
          description: 'Transparentný postup od analýzy cez dizajn až po launch.',
        },
        hero: {
          eyebrow: 'Proces',
          title: 'Jasne definovaný postup, bez chaosu',
          subtitle: 'Viete, čo sa bude diať v každom kroku.',
          primaryLabel: 'Naplánovať úvodný call',
          secondaryLabel: 'Pozrieť služby',
        },
      },
      references: {
        meta: {
          title: 'Referencie',
          description: 'Ukážky projektov, výsledky a konkrétne metriky.',
        },
        hero: {
          eyebrow: 'Referencie',
          title: 'Výsledky, ktoré sa dajú zmerať',
          subtitle: 'Každý web staviame s cieľom zlepšiť výkon a konverzie.',
          primaryLabel: 'Chcem podobný web',
          secondaryLabel: 'Pozrieť proces',
        },
        caseStudiesHeading: {
          eyebrow: 'Case studies',
          title: 'Konkrétne projekty a dopad',
          subtitle: 'Zameriavame sa na výsledok. Čo sa zmenilo po spustení?',
        },
        caseStudies: [
          {
            name: 'Brightline Logistics',
            summary: 'Redesign firemného webu s dôrazom na lead generation pre B2B.',
            result: 'Lighthouse 97, +22 % konverzie',
            stack: 'Astro, Tailwind, Netlify',
          },
          {
            name: 'NovaCare Clinics',
            summary: 'Kompletný web pre sieť kliník s prehľadnou štruktúrou služieb.',
            result: 'Bounce rate -18 %, +35 % dopytov',
            stack: 'Astro, Tailwind, Decap-ready',
          },
          {
            name: 'Polar Analytics',
            summary: 'Lead web pre SaaS produkt s dôrazom na výkon a komunikáciu.',
            result: 'FCP 0.9 s, +41 % demo requestov',
            stack: 'Astro, Tailwind, Netlify',
          },
        ],
        reviews: {
          eyebrow: 'Hodnotenia',
          title: 'Hodnotenia, ktoré sedia na výsledky',
          subtitle: 'Krátke feedbacky od tímov, ktoré chceli rýchlosť a jasnosť.',
          items: [
            {
              quote: 'Launch prebehol hladko a web je konečne rýchly na mobile.',
              name: 'Anna Weiss',
              role: 'Marketing Manager, Northwind',
            },
            {
              quote: 'Výkon vyskočil nad 95 a odovzdanie CMS bolo čisté.',
              name: 'Filip Novotny',
              role: 'Head of Growth, Helio',
            },
            {
              quote: 'Jasný proces, žiadny chaos. Presne to, čo B2B značka potrebuje.',
              name: 'Sarah Klein',
              role: 'COO, Matrix Labs',
            },
            {
              quote: 'Dostali sme škálovateľný dizajn systém, ktorý vieme ďalej rozvíjať.',
              name: 'Martin Polak',
              role: 'Product Lead, Qube',
            },
            {
              quote: 'SEO aj analytika boli pripravené od prvého dňa.',
              name: 'Elena Roth',
              role: 'CMO, NovaCare',
            },
            {
              quote: 'Rýchlo, presne, bez zbytočného JS. Taký bol brief.',
              name: 'Jakub Horak',
              role: 'CTO, Brightline',
            },
          ],
          moreItems: [
            {
              quote: 'Skvelá spolupráca a realistické termíny.',
              name: 'Peter Lang',
              role: 'CEO, Axion',
            },
            {
              quote: 'Tím optimalizoval náš legacy web bez výpadku.',
              name: 'Mila Petrova',
              role: 'Operations, Synapse',
            },
            {
              quote: 'Náš organický aj priamy traffic konečne smeruje na landingy, ktoré konvertujú.',
              name: 'Nina Grof',
              role: 'Performance Lead, Lumen',
            },
            {
              quote: 'Web je rýchly, čistý a ľahko udržiavateľný.',
              name: 'Daniel Ortiz',
              role: 'Founder, ClearPath',
            },
          ],
          actions: {
            more: 'Zobraziť viac',
            add: 'Pridať recenziu',
          },
          modalMore: {
            title: 'Viac recenzií klientov',
            subtitle: 'Ďalšie feedbacky od tímov, ktorým sme pomohli.',
          },
          modalAdd: {
            title: 'Pridať recenziu',
            subtitle: 'Zdieľajte skúsenosť v pár vetách.',
          },
          form: {
            name: 'Meno',
            company: 'Firma',
            rating: 'Hodnotenie',
            message: 'Recenzia',
            namePlaceholder: 'Vaše meno',
            companyPlaceholder: 'Firma',
            messagePlaceholder: 'Čo bolo najdôležitejšie?',
            submit: 'Odoslať recenziu',
            consent: 'Odoslaním súhlasíte so zverejnením po schválení.',
            success: 'Odoslané na schválenie.',
          },
        },
      },
      about: {
        meta: {
          title: 'O nás',
          description: 'Seniorný tím zameraný na výkon a čistý produktový dizajn.',
        },
        hero: {
          eyebrow: 'O nás',
          title: 'Seniorný tím pre weby, ktoré majú výkon',
          subtitle: 'Malý, efektívny tím dizajnérov a developerov.',
          primaryLabel: 'Spoznajme sa',
          secondaryLabel: 'Pozrieť referencie',
        },
        values: {
          eyebrow: 'Hodnoty',
          title: 'Žiadne pozlátko. Len presná práca.',
          subtitle: 'Zameriavame sa na výsledok, nie na komplikované procesy.',
          items: [
            {
              title: 'Technická precíznosť',
              description: 'Každý komponent má účel. Žiadne zbytočné knižnice.',
            },
            {
              title: 'Dizajn s výsledkom',
              description: 'Vizuál podporuje konverzie, nie len efekty.',
            },
            {
              title: 'Dlhodobá udržateľnosť',
              description: 'Architektúra pripravená na rast a jednoduchú správu.',
            },
          ],
        },
        team: {
          eyebrow: 'Tím',
          title: 'Skúsenosti z agentúr aj produktov',
          subtitle: 'Neriešime juniorné experimenty. Pracujete so seniornými ľuďmi.',
          items: [
            {
              label: 'Dizajn',
              title: 'UI/UX Lead',
              description: 'Vizuálne systémy, prototypy a jasná hierarchia obsahu.',
            },
            {
              label: 'Frontend',
              title: 'Astro & Next.js',
              description: 'Výkon, SSR/SSG a čistý komponentový kód.',
            },
            {
              label: 'Strategický dohľad',
              title: 'Projektový lead',
              description: 'Koordinácia, reporting a doručenie bez sklzu.',
            },
          ],
        },
      },
      blog: {
        meta: {
          title: 'Blog',
          description: 'Poznatky z výkonu, dizajnu a moderného vývoja webov.',
        },
        hero: {
          eyebrow: 'Blog',
          title: 'Praktické poznatky z výkonu a dizajnu',
          subtitle: 'Konkrétne návody z praxe: rýchlosť, SEO, dizajn a technika.',
          primaryLabel: 'Odoberať novinky',
          secondaryLabel: 'Pozrieť služby',
        },
        listHeading: {
          eyebrow: 'Články',
          title: 'Najnovšie články',
          subtitle: 'Krátke a praktické texty bez marketingových omáčok.',
        },
        backLabel: 'Späť na blog',
        readMoreLabel: 'Čítať článok',
      },
      contact: {
        meta: {
          title: 'Kontakt',
          description: 'Napíšte nám, dohodnime si konzultáciu.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Povedzte nám, čo potrebujete',
          subtitle: 'Odpovedáme do 24 hodín. Prvý call je krátky a vecný.',
          primaryLabel: 'Napísať email',
          secondaryLabel: 'Pozrieť služby',
        },
        formHeading: {
          eyebrow: 'Formulár',
          title: 'Stručný brief nám stačí',
          subtitle: 'Vyplňte pár bodov. Ozveme sa s otázkami.',
        },
        formLabels: {
          name: 'Meno a firma',
          email: 'Email',
          message: 'Čo potrebujete?',
          namePlaceholder: 'Vaše meno, firma',
          emailPlaceholder: 'vas@email.sk',
          messagePlaceholder: 'Stručne popíšte projekt, cieľ a termín.',
          submit: 'Odoslať',
          consent: 'Odoslaním súhlasíte so spracovaním údajov.',
        },
        directHeading: {
          eyebrow: 'Kontakt',
          title: 'Priamy kontakt',
          subtitle: 'Preferujete email alebo krátky call? Ozvite sa priamo.',
        },
        directLabels: {
          email: 'Email',
          phone: 'Telefón',
          location: 'Lokalita',
          scope: 'Scope',
          scopeText:
            'Min. rozsah: jednoduchý firemný web alebo lead stránka. Väčšie projekty podľa zadania.',
        },
      },
    },
  },
};

export const getCopy = (lang: Lang) => copy[lang] ?? copy.en;
