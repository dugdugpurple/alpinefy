import type { Lang } from './languages';

export const navItems = [
  { key: 'services', route: 'services' },
  { key: 'process', route: 'process' },
  { key: 'references', route: 'references' },
  { key: 'career', route: 'career' },
  { key: 'about', route: 'about' },
  { key: 'blog', route: 'blog' },
  { key: 'contact', route: 'contact' },
];

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
      tagline: 'AI & Web Studio for growth-focused companies',
      description:
        'We do not just build websites. We create digital solutions for businesses that want to grow faster, more efficiently and based on data.',
    },
    nav: {
      services: 'Services',
      process: 'Process',
      references: 'References',
      career: 'Career',
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
        { value: '< 1.2 s', label: 'Loads before visitors leave' },
        { value: '24 h', label: 'We reply within' },
        { value: 'Days', label: 'To launch — not months' },
      ],
      heroSide: {
        eyebrow: 'What you get',
        title: 'A website that sells for you',
        subtitle: 'Fast, easy to manage and built to turn visitors into customers — with a smooth handover to your team.',
        badges: ['Found on Google', 'Loads instantly', 'Easy to edit'],
        cards: [
          { label: 'Clear reporting', value: 'You see what works' },
          { label: 'Ongoing care', value: 'Fast & always online' },
        ],
      },
      valueProps: {
        eyebrow: 'Why Alpinefy',
        title: 'Websites that look great and actually sell',
        subtitle: 'We build sites that load fast, say the right thing and grow with your business.',
        items: [
          {
            title: 'Speed that keeps visitors',
            description: 'Your pages open in about a second, so people stay instead of leaving.',
          },
          {
            title: 'More inquiries',
            description: 'Clear structure and strong calls-to-action turn visitors into leads.',
          },
          {
            title: 'Easy to manage',
            description: 'Update text, images and prices yourself — no developer needed.',
          },
          {
            title: 'Room to grow',
            description: 'Add campaigns, pages and new features as your business grows.',
          },
        ],
      },
      services: {
        eyebrow: 'Services',
        title: 'What we build for you',
        subtitle: 'From landing pages to full websites, Shopify stores and smart automation.',
        items: [
          {
            title: 'Lead websites',
            description: 'Landing pages that convert — built to bring you inquiries from day one.',
            tags: ['Campaigns', 'Conversions', 'Fast launch'],
          },
          {
            title: 'Corporate websites',
            description: 'Complete company presence built for trust and longevity.',
            tags: ['Strategy', 'SEO', 'Modular system'],
          },
          {
            title: 'E-shops (Shopify)',
            description: 'Shopify stores with a clean catalog, conversion-focused checkout and everything ready to sell.',
            tags: ['Shopify', 'E-commerce', 'Payments'],
          },
          {
            title: 'Automation & AI workflows',
            description: 'Automations, AI assistants and dashboards that save your team time and cut busywork.',
            tags: ['Automation', 'AI assistants', 'Dashboards'],
          },
        ],
      },
      process: {
        eyebrow: 'Process',
        title: 'Clear steps. Predictable outcome.',
        subtitle: 'A transparent process that saves you time and removes surprises.',
        steps: [
          {
            title: 'Analysis',
            description: 'We get to know your goals, audience and competitors — and define what success looks like.',
          },
          {
            title: 'Design & build',
            description: 'We design, prototype and build — fast, clean and made to convert.',
          },
          {
            title: 'Launch',
            description: 'We go live, connect your tools and check SEO and analytics.',
          },
          {
            title: 'Optimization',
            description: 'We keep improving with real data: speed, tests and new sections.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Client stories',
        title: 'What clients say',
        subtitle: 'A few words from teams we have helped grow.',
        testimonials: [
          {
            quote: 'Alpinefy helped me build a fast and beautiful website that actively supports my business.',
            name: 'Ondro',
            role: 'Founder, Tresoro GmbH',
          },
          {
            quote: 'They helped us migrate from our old and inefficient solution. We value the long-term cooperation, language support and SEO help.',
            name: 'NEBBIA Team',
            role: 'NEBBIA',
          },
          {
            quote: 'I wanted a clean and trustworthy website for my studio. The result is clear, fast and easy to manage.',
            name: 'Oľga Chochúľová',
            role: 'PedikuraOlga.cz',
          },
          {
            quote: 'Whenever we could not find the right technical approach, we turned to Alpinefy and always got a strong solution.',
            name: 'Peter Kováčik',
            role: 'SOELWE SOLUTIONS',
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
              'Lead websites start from €900, corporate websites from €1,900 and Shopify stores from €4,000. The exact price depends on scope — the calculator on the Services page gives you a quick estimate, and after a free intro call you get a fixed, transparent quote.',
          },
          {
            question: 'How quickly can you deliver a website?',
            answer:
              'Lead and marketing websites are typically live within a few days to one week. For larger projects the timeline depends on scope, integrations and how ready your materials are — you always get a concrete launch date in the proposal.',
          },
          {
            question: 'Can I edit the content myself?',
            answer:
              'Yes. The websites we deliver are fully customizable, and you get a simple admin interface plus a short guide. At the start, we define together what should be editable so you have full control without touching code. You can update text, headings, subheadings, images, banners, icons and meta SEO settings without a developer. The goal is simple management with technical speed, stability and performance.',
          },
          {
            question: 'Why not just use a WordPress template?',
            answer:
              'Templates often come loaded with extra code and plugins that slow your site down and cause update headaches later. We build only what your goals need, so you get a faster, safer website that ranks better on Google and stays easy to run as you grow.',
          },
          {
            question: 'Can you take over an existing website?',
            answer:
              'Yes. We can fully take over your existing website, run a technical and content audit, and prepare a safe migration plan step by step. We handle the process so you do not lose SEO rankings, data or traffic, and we launch with minimal downtime risk. After launch, we fine-tune based on real data to keep the transition smooth for your team.',
          },
          {
            question: 'Can you set up measurement, analytics and AI solutions for us?',
            answer:
              'Yes. We can set up your website so you have precise data and practical AI solutions in one place. We typically connect GA4 and Microsoft Clarity, so you can see traffic, user behavior and conversions clearly. Based on that data, we then design and deploy AI solutions aligned with your project goals, so the website is not only visually strong but also more effective and performance-driven in practice.',
          },
        ],
      },
      cta: {
        eyebrow: 'Next step',
        title: 'Let’s talk about your website',
        subtitle: 'No long presentations. 30‑minute call and a clear next step proposal.',
        primaryLabel: 'Book a free consultation',
        secondaryLabel: 'Email us',
        note: 'During business days, we reply within 24 hours.',
      },
      trustBadges: {
        items: [
          {
            title: 'Fast on every device',
            description: 'Pages load quickly, so visitors stay instead of leaving.',
          },
          {
            title: 'Found on Google',
            description: 'Built to rank and get discovered by the right people.',
          },
          {
            title: 'Yours to keep',
            description: 'You own the website, content and hosting — no lock-in.',
          },
          {
            title: 'Clear, no surprises',
            description: 'Fixed scope, honest updates and one point of contact.',
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
        eyebrow: 'Built on reliable tools',
        title: 'Technology you can trust',
        subtitle: 'Proven tools behind your website — fast, secure and easy to maintain.',
        notes: {
          astro: 'Fast pages',
          tailwind: 'UI system',
          netlify: 'Hosting',
          next: 'Automation',
          react: 'Interactive',
          figma: 'Design',
          ga: 'Analytics',
          vercel: 'Backup hosting',
        },
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Everything you need to launch and grow online, in one place',
        subtitle: 'One team for the whole journey — from strategy and design to your Shopify store, findability and long-term care. No juggling five vendors.',
        items: [
          'Strategy, UX & content structure',
          'Copywriting that converts',
          'Custom design in Figma',
          'Fast, modern & secure development',
          'Multilingual sites & self-editable CMS',
          'Shopify online store — built end to end',
          'Products, checkout & secure payments',
          'Shipping, taxes, invoicing & migrations',
          'Speed & Core Web Vitals tuning',
          'SEO so you rank on Google',
          'Rich Google results (structured data)',
          'Get found in AI assistants (ChatGPT & co.)',
          'Forms, CRM & AI automation',
          'Analytics & conversion tracking',
          'Hosting, maintenance & long-term support',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Websites that turn visitors into customers',
          description:
            'Alpinefy is an AI & Web Studio that designs fast, clear websites and online stores built to turn visitors into customers — more inquiries, more sales.',
        },
        hero: {
          eyebrow: 'Alpinefy — AI & Web Studio',
          title: 'Websites that turn visitors into customers',
          subtitle:
            'We design and build fast, clear websites and online stores that bring you more inquiries and sales — and you work directly with the person doing the work.',
          primaryLabel: 'Get a free consultation',
          secondaryLabel: 'View services',
        },
      },
      services: {
        meta: {
          title: 'Services',
          description:
            'We design lead and corporate websites, Shopify stores, analytics, automation and AI workflows so your website generates more inquiries and supports growth.',
        },
        hero: {
          eyebrow: 'Services',
          title: 'Solutions for companies that want to grow',
          subtitle: 'We pick the right approach for your goal — more inquiries, more sales and a website that is easy to run.',
          primaryLabel: 'Get a quote',
          secondaryLabel: 'View process',
        },
      },
      process: {
        meta: {
          title: 'Process',
          description:
            'From initial analysis through structure design, UI, development and launch to measurement and optimization, we work transparently and without unnecessary delays.',
        },
        hero: {
          eyebrow: 'Process',
          title: 'A defined process without chaos',
          subtitle: 'You know what happens in each step. From analysis to optimization.',
          primaryLabel: 'Schedule a free intro call',
          secondaryLabel: 'View services',
        },
      },
      references: {
        meta: {
          title: 'References',
          description:
            'Explore real projects, concrete results and client feedback from teams we helped speed up their websites, improve conversions and work with data more effectively.',
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
              quote: 'Alpinefy helped me build a fast and beautiful website that actively supports my business.',
              name: 'Ondro',
              role: 'Founder, Tresoro GmbH',
            },
            {
              quote: 'They helped us migrate from our old and inefficient solution. We value the long-term cooperation, language support and SEO help.',
              name: 'NEBBIA Team',
              role: 'NEBBIA',
            },
            {
              quote: 'I wanted a clean and trustworthy website for my studio. The result is clear, fast and easy to manage.',
              name: 'Oľga Chochúľová',
              role: 'PedikuraOlga.cz',
            },
            {
              quote: 'Whenever we could not find the right technical approach, we turned to Alpinefy and always got a strong solution.',
              name: 'Peter Kováčik',
              role: 'SOELWE SOLUTIONS',
            },
          ],
          moreItems: [],
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
          description:
            'I am an independent web studio combining strategy, design, development and analytics into practical digital solutions for companies that want to grow faster and more efficiently.',
        },
        hero: {
          eyebrow: 'About',
          title: 'An independent studio for performance-focused websites',
          subtitle:
            'I design and build fast, aesthetic and maintainable websites — and you work directly with the person doing the work.',
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
          subtitle: 'You work directly with me — no handoffs, no junior experiments.',
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
          description:
            'In our blog, we share practical know-how on web performance, SEO, analytics and AI solutions that help teams make better data-driven decisions.',
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
          description:
            'Tell us your goal, project or challenge and we will propose next steps, scope estimate and a solution that makes sense both commercially and technically.',
        },
        hero: {
          eyebrow: 'Contact',
          title: 'Tell us what you need',
          subtitle: 'We reply within 24 hours. First call is short and to the point.',
          primaryLabel: 'Fill in the brief (2 min)',
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
          submit: 'Send — reply within 24h',
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
            'From one-page lead sites to complete websites and Shopify stores — most projects start with a free intro call.',
        },
      },
    },
  },
  de: {
    site: {
      tagline: 'AI & Web Studio für wachsende Unternehmen',
      description:
        'Wir bauen nicht nur Websites. Wir entwickeln digitale Lösungen für Unternehmen, die schneller, effizienter und datenbasiert wachsen wollen.',
    },
    nav: {
      services: 'Leistungen',
      process: 'Prozess',
      references: 'Referenzen',
      career: 'Karriere',
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
        { value: '< 1.2 s', label: 'Geladen, bevor Besucher abspringen' },
        { value: '24 h', label: 'Wir antworten innerhalb von' },
        { value: 'Tage', label: 'Bis zum Launch — keine Monate' },
      ],
      heroSide: {
        eyebrow: 'Das bekommen Sie',
        title: 'Eine Website, die für Sie verkauft',
        subtitle: 'Schnell, einfach zu pflegen und darauf ausgelegt, aus Besuchern Kunden zu machen — mit reibungsloser Übergabe an Ihr Team.',
        badges: ['Bei Google gefunden', 'Lädt sofort', 'Einfach zu bearbeiten'],
        cards: [
          { label: 'Klares Reporting', value: 'Sie sehen, was funktioniert' },
          { label: 'Laufende Betreuung', value: 'Schnell & immer online' },
        ],
      },
      valueProps: {
        eyebrow: 'Warum Alpinefy',
        title: 'Websites, die gut aussehen und wirklich verkaufen',
        subtitle: 'Wir bauen Websites, die schnell laden, das Richtige sagen und mit Ihrem Unternehmen wachsen.',
        items: [
          {
            title: 'Tempo, das Besucher hält',
            description: 'Ihre Seiten öffnen in etwa einer Sekunde, damit Besucher bleiben statt abzuspringen.',
          },
          {
            title: 'Mehr Anfragen',
            description: 'Klare Struktur und starke Handlungsaufforderungen machen aus Besuchern Anfragen.',
          },
          {
            title: 'Einfach zu pflegen',
            description: 'Texte, Bilder und Preise ändern Sie selbst — ganz ohne Entwickler.',
          },
          {
            title: 'Raum zum Wachsen',
            description: 'Ergänzen Sie Kampagnen, Seiten und neue Funktionen, wenn Ihr Unternehmen wächst.',
          },
        ],
      },
      services: {
        eyebrow: 'Leistungen',
        title: 'Was wir für Sie bauen',
        subtitle: 'Von Landingpages über komplette Websites und Shopify-Shops bis zu smarter Automatisierung.',
        items: [
          {
            title: 'Lead-Websites',
            description: 'Landingpages, die konvertieren — gebaut, um vom ersten Tag an Anfragen zu bringen.',
            tags: ['Kampagnen', 'Conversion', 'Schneller Launch'],
          },
          {
            title: 'Unternehmenswebsites',
            description: 'Kompletter Auftritt mit Fokus auf Vertrauen und Langlebigkeit.',
            tags: ['Strategie', 'SEO', 'Modulares System'],
          },
          {
            title: 'E-Shops (Shopify)',
            description: 'Shopify‑Shops mit sauberer Struktur, Payments und Conversion‑Fokus — bereit zum Verkaufen.',
            tags: ['Shopify', 'E-Commerce', 'Payments'],
          },
          {
            title: 'Automatisierung & KI-Workflows',
            description: 'Automatisierungen, KI-Assistenten und Dashboards, die Ihrem Team Zeit sparen und Routinearbeit reduzieren.',
            tags: ['Automatisierung', 'KI-Assistenten', 'Dashboards'],
          },
        ],
      },
      process: {
        eyebrow: 'Prozess',
        title: 'Klare Schritte. Vorhersehbares Ergebnis.',
        subtitle: 'Ein transparenter Ablauf, der Ihnen Zeit spart und Überraschungen vermeidet.',
        steps: [
          {
            title: 'Analyse',
            description: 'Wir lernen Ihre Ziele, Zielgruppe und Wettbewerber kennen — und definieren, wie Erfolg aussieht.',
          },
          {
            title: 'Design & Build',
            description: 'Wir gestalten, prototypen und entwickeln — schnell, sauber und auf Conversion ausgelegt.',
          },
          {
            title: 'Launch',
            description: 'Wir gehen live, verbinden Ihre Tools und prüfen SEO und Analytics.',
          },
          {
            title: 'Optimierung',
            description: 'Wir verbessern kontinuierlich mit echten Daten: Tempo, Tests und neue Sektionen.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Kundenstimmen',
        title: 'Was Kunden sagen',
        subtitle: 'Ein paar Worte von Teams, denen wir beim Wachsen geholfen haben.',
        testimonials: [
          {
            quote: 'Alpinefy hat mir geholfen, eine schnelle und schöne Website zu bauen, die mein Business aktiv unterstützt.',
            name: 'Ondro',
            role: 'Founder, Tresoro GmbH',
          },
          {
            quote: 'Sie haben uns bei der Migration von unserer alten, ineffizienten Lösung geholfen. Wir schätzen die langfristige Zusammenarbeit, Sprachunterstützung und SEO-Hilfe.',
            name: 'NEBBIA Team',
            role: 'NEBBIA',
          },
          {
            quote: 'Ich wollte eine saubere und vertrauenswürdige Website für mein Studio. Das Ergebnis ist klar, schnell und leicht zu verwalten.',
            name: 'Oľga Chochúľová',
            role: 'PedikuraOlga.cz',
          },
          {
            quote: 'Wenn wir keinen passenden technischen Weg gefunden haben, haben wir uns an Alpinefy gewandt und immer eine starke Lösung bekommen.',
            name: 'Peter Kováčik',
            role: 'SOELWE SOLUTIONS',
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
              'Lead‑Websites starten ab €900, Unternehmenswebsites ab €1.900 und Shopify‑Shops ab €4.000. Der genaue Preis hängt vom Umfang ab — der Rechner auf der Leistungsseite liefert eine schnelle Schätzung, und nach einem kostenlosen Erstgespräch erhalten Sie ein fixes, transparentes Angebot.',
          },
          {
            question: 'Wie schnell könnt ihr eine Website liefern?',
            answer:
              'Lead- und Marketing-Websites sind in der Regel innerhalb weniger Tage bis etwa einer Woche live. Bei größeren Projekten hängt der Zeitplan von Umfang, Integrationen und der Bereitschaft Ihrer Unterlagen ab — im Angebot erhalten Sie immer einen konkreten Launch-Termin.',
          },
          {
            question: 'Kann ich Inhalte selbst bearbeiten?',
            answer:
              'Ja. Unsere Websites sind vollständig anpassbar, und Sie erhalten eine einfache Admin-Oberfläche plus eine kurze Anleitung. Zu Beginn definieren wir gemeinsam, welche Bereiche bearbeitbar sein sollen, damit Sie in der Praxis volle Kontrolle ohne Code-Eingriffe haben. Texte, Überschriften, Untertitel, Bilder, Banner, Icons und Meta-SEO-Einstellungen können Sie ohne Entwickler anpassen. Ziel ist eine einfache Pflege bei gleichzeitig hoher technischer Performance und Stabilität.',
          },
          {
            question: 'Warum nicht einfach ein WordPress-Template nutzen?',
            answer:
              'Templates bringen oft viel zusätzlichen Code und viele Plugins mit, die Ihre Website ausbremsen und später bei Updates Probleme verursachen. Wir bauen nur das, was Ihre Ziele brauchen, damit Sie eine schnellere, sicherere Website erhalten, die bei Google besser rankt und auch beim Wachsen einfach zu betreiben bleibt.',
          },
          {
            question: 'Übernehmt ihr bestehende Websites?',
            answer:
              'Ja. Wir übernehmen bestehende Websites vollständig, führen einen technischen und inhaltlichen Audit durch und erstellen einen sicheren Migrationsplan Schritt für Schritt. Dabei achten wir darauf, dass Sie keine SEO-Sichtbarkeit, Daten oder Traffic verlieren, und launchen mit minimalem Ausfallrisiko. Nach dem Go-live optimieren wir auf Basis realer Daten weiter, damit der Übergang für Ihr Team reibungslos bleibt.',
          },
          {
            question: 'Könnt ihr für uns Tracking, Analytics und AI-Lösungen einrichten?',
            answer:
              'Ja. Wir richten Ihre Website so ein, dass Sie präzise Daten und praxistaugliche AI-Lösungen an einem Ort haben. Standardmäßig binden wir GA4 und Microsoft Clarity an, damit Sie Traffic, Nutzerverhalten und Conversions klar sehen. Auf dieser Datengrundlage entwerfen und implementieren wir anschließend AI-Lösungen passend zu Ihren Zielen, damit die Website nicht nur visuell stark ist, sondern in der Praxis auch effizienter und leistungsfähiger arbeitet.',
          },
        ],
      },
      cta: {
        eyebrow: 'Nächster Schritt',
        title: 'Lassen Sie uns über Ihre Website sprechen',
        subtitle: '30‑Minuten‑Call und ein klarer Vorschlag für die nächsten Schritte.',
        primaryLabel: 'Kostenlose Beratung buchen',
        secondaryLabel: 'E‑Mail schreiben',
        note: 'An Werktagen antworten wir innerhalb von 24 Stunden.',
      },
      trustBadges: {
        items: [
          {
            title: 'Schnell auf jedem Gerät',
            description: 'Seiten laden schnell, damit Besucher bleiben statt abzuspringen.',
          },
          {
            title: 'Bei Google gefunden',
            description: 'Gebaut, um zu ranken und von den richtigen Menschen gefunden zu werden.',
          },
          {
            title: 'Bleibt Ihr Eigentum',
            description: 'Website, Inhalte und Hosting gehören Ihnen — kein Lock-in.',
          },
          {
            title: 'Klar, ohne Überraschungen',
            description: 'Fester Umfang, ehrliche Updates und ein Ansprechpartner.',
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
        eyebrow: 'Auf zuverlässigen Tools gebaut',
        title: 'Technologie, der Sie vertrauen können',
        subtitle: 'Bewährte Tools hinter Ihrer Website — schnell, sicher und einfach zu pflegen.',
        notes: {
          astro: 'Schnelle Seiten',
          tailwind: 'UI-System',
          netlify: 'Hosting',
          next: 'Automatisierung',
          react: 'Interaktiv',
          figma: 'Design',
          ga: 'Analytics',
          vercel: 'Backup-Hosting',
        },
      },
      capabilities: {
        eyebrow: 'Kompetenzen',
        title: 'Alles für Start und Wachstum online — an einem Ort',
        subtitle: 'Ein Team für die ganze Reise — von Strategie und Design über Ihren Shopify-Store bis zu Auffindbarkeit und langfristiger Betreuung. Kein Jonglieren mit fünf Dienstleistern.',
        items: [
          'Strategie, UX & Content-Struktur',
          'Copywriting, das verkauft',
          'Individuelles Design in Figma',
          'Schnelle, moderne & sichere Entwicklung',
          'Mehrsprachige Websites & selbst editierbares CMS',
          'Shopify-Onlineshop — komplett umgesetzt',
          'Produkte, Checkout & sichere Zahlungen',
          'Versand, Steuern, Rechnungen & Migrationen',
          'Speed- & Core-Web-Vitals-Optimierung',
          'SEO, damit Sie bei Google ranken',
          'Rich-Ergebnisse bei Google (strukturierte Daten)',
          'Gefunden werden in KI-Assistenten (ChatGPT & Co.)',
          'Formulare, CRM & KI-Automatisierung',
          'Analytics & Conversion-Tracking',
          'Hosting, Wartung & langfristiger Support',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Websites, die Besucher zu Kunden machen',
          description:
            'Alpinefy ist ein AI & Web Studio, das schnelle, klare Websites und Onlineshops gestaltet, die aus Besuchern Kunden machen — mehr Anfragen, mehr Umsatz.',
        },
        hero: {
          eyebrow: 'Alpinefy — AI & Web Studio',
          title: 'Websites, die Besucher zu Kunden machen',
          subtitle:
            'Wir gestalten und entwickeln schnelle, klare Websites und Onlineshops, die Ihnen mehr Anfragen und Umsatz bringen — und Sie arbeiten direkt mit der Person, die die Arbeit macht.',
          primaryLabel: 'Kostenlose Beratung anfragen',
          secondaryLabel: 'Leistungen ansehen',
        },
      },
      services: {
        meta: {
          title: 'Leistungen',
          description:
            'Wir entwickeln Lead- und Unternehmenswebsites, Shopify-Shops, Analytics, Automatisierungen und KI-Workflows, damit Ihre Website mehr Anfragen bringt und Wachstum unterstützt.',
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
          description:
            'Von der initialen Analyse über Struktur, Design und Entwicklung bis zu Launch, Messung und Optimierung arbeiten wir transparent und ohne unnötige Verzögerungen.',
        },
        hero: {
          eyebrow: 'Prozess',
          title: 'Ein definierter Prozess ohne Chaos',
          subtitle: 'Sie wissen, was in jedem Schritt passiert.',
          primaryLabel: 'Kostenlosen Intro‑Call buchen',
          secondaryLabel: 'Leistungen ansehen',
        },
      },
      references: {
        meta: {
          title: 'Referenzen',
          description:
            'Sehen Sie reale Projekte, konkrete Ergebnisse und Kundenfeedback von Teams, denen wir geholfen haben, Websites zu beschleunigen, Conversions zu steigern und datenbasierter zu arbeiten.',
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
              quote: 'Alpinefy hat mir geholfen, eine schnelle und schöne Website zu bauen, die mein Business aktiv unterstützt.',
              name: 'Ondro',
              role: 'Founder, Tresoro GmbH',
            },
            {
              quote: 'Sie haben uns bei der Migration von unserer alten, ineffizienten Lösung geholfen. Wir schätzen die langfristige Zusammenarbeit, Sprachunterstützung und SEO-Hilfe.',
              name: 'NEBBIA Team',
              role: 'NEBBIA',
            },
            {
              quote: 'Ich wollte eine saubere und vertrauenswürdige Website für mein Studio. Das Ergebnis ist klar, schnell und leicht zu verwalten.',
              name: 'Oľga Chochúľová',
              role: 'PedikuraOlga.cz',
            },
            {
              quote: 'Wenn wir keinen passenden technischen Weg gefunden haben, haben wir uns an Alpinefy gewandt und immer eine starke Lösung bekommen.',
              name: 'Peter Kováčik',
              role: 'SOELWE SOLUTIONS',
            },
          ],
          moreItems: [],
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
            subtitle: 'Teilen Sie Ihre Erfahrung in wenigen Sätzen.',
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
          description:
            'Ich bin ein unabhängiges Web-Studio und verbinde Strategie, Design, Entwicklung und Analytics zu funktionalen digitalen Lösungen für Unternehmen, die schneller und effizienter wachsen wollen.',
        },
        hero: {
          eyebrow: 'Über uns',
          title: 'Ein unabhängiges Studio für performante Websites',
          subtitle: 'Ich gestalte und entwickle schnelle, ästhetische und wartbare Websites — Sie arbeiten direkt mit der Person, die die Arbeit macht.',
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
          subtitle: 'Sie arbeiten direkt mit mir — keine Übergaben, keine Junior‑Experimente.',
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
          description:
            'Im Blog teilen wir praxisnahes Know-how zu Web-Performance, SEO, Analytics und KI-Lösungen, die bessere Entscheidungen auf Basis von Daten ermöglichen.',
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
          description:
            'Schreiben Sie uns Ihr Ziel, Projekt oder Problem und wir schlagen die nächsten Schritte, einen realistischen Umfang und eine Lösung vor, die fachlich und wirtschaftlich passt.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Sagen Sie uns, was Sie brauchen',
          subtitle: 'Antwort innerhalb von 24 Stunden. Kurzer, klarer Erst‑Call.',
          primaryLabel: 'Formular ausfüllen (2 Min.)',
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
          submit: 'Senden — Antwort in 24 h',
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
          scope: 'Umfang',
          scopeText: 'Von der Lead‑Seite bis zur kompletten Website oder dem Shopify‑Shop — die meisten Projekte starten mit einem kostenlosen Erstgespräch.',
        },
      },
    },
  },
  pl: {
    site: {
      tagline: 'AI & Web Studio dla rosnących firm',
      description:
        'Nie tworzymy tylko stron. Budujemy cyfrowe rozwiązania dla firm, które chcą rosnąć szybciej, efektywniej i w oparciu o dane.',
    },
    nav: {
      services: 'Usługi',
      process: 'Proces',
      references: 'Referencje',
      career: 'Kariera',
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
        { value: '< 1.2 s', label: 'Ładuje się, zanim odwiedzający wyjdą' },
        { value: '24 h', label: 'Odpowiadamy w ciągu' },
        { value: 'Dni', label: 'Do wdrożenia — nie miesiące' },
      ],
      heroSide: {
        eyebrow: 'Co otrzymujesz',
        title: 'Strona, która sprzedaje za Ciebie',
        subtitle: 'Szybka, łatwa w zarządzaniu i stworzona, by zamieniać odwiedzających w klientów — z płynnym przekazaniem Twojemu zespołowi.',
        badges: ['Widoczna w Google', 'Ładuje się natychmiast', 'Łatwa w edycji'],
        cards: [
          { label: 'Przejrzyste raporty', value: 'Widzisz, co działa' },
          { label: 'Stała opieka', value: 'Szybka i zawsze online' },
        ],
      },
      valueProps: {
        eyebrow: 'Dlaczego Alpinefy',
        title: 'Strony, które świetnie wyglądają i naprawdę sprzedają',
        subtitle: 'Budujemy strony, które szybko się ładują, mówią to, co trzeba, i rosną razem z Twoim biznesem.',
        items: [
          {
            title: 'Szybkość, która zatrzymuje odwiedzających',
            description: 'Twoje strony otwierają się w około sekundę, więc ludzie zostają, zamiast wychodzić.',
          },
          {
            title: 'Więcej zapytań',
            description: 'Przejrzysta struktura i mocne wezwania do działania zamieniają odwiedzających w kontakty.',
          },
          {
            title: 'Łatwe zarządzanie',
            description: 'Teksty, zdjęcia i ceny zmieniasz samodzielnie — bez programisty.',
          },
          {
            title: 'Przestrzeń do wzrostu',
            description: 'Dodawaj kampanie, strony i nowe funkcje, gdy Twój biznes rośnie.',
          },
        ],
      },
      services: {
        eyebrow: 'Usługi',
        title: 'Co dla Ciebie budujemy',
        subtitle: 'Od landing page po pełne strony, sklepy Shopify i inteligentną automatyzację.',
        items: [
          {
            title: 'Strony leadowe',
            description: 'Landing page, które konwertują — zbudowane tak, by przynosić zapytania od pierwszego dnia.',
            tags: ['Kampanie', 'Konwersje', 'Szybki start'],
          },
          {
            title: 'Strony firmowe',
            description: 'Kompletny wizerunek firmy z naciskiem na zaufanie i trwałość.',
            tags: ['Strategia', 'SEO', 'System modułowy'],
          },
          {
            title: 'Sklepy (Shopify)',
            description: 'Sklepy Shopify z czystą strukturą, płatnościami i naciskiem na konwersję — gotowe do sprzedaży.',
            tags: ['Shopify', 'E-commerce', 'Płatności'],
          },
          {
            title: 'Automatyzacje i workflow AI',
            description: 'Automatyzacje, asystenci AI i dashboardy, które oszczędzają czas Twojego zespołu i ograniczają rutynową pracę.',
            tags: ['Automatyzacja', 'Asystenci AI', 'Dashboardy'],
          },
        ],
      },
      process: {
        eyebrow: 'Proces',
        title: 'Jasne kroki. Przewidywalny efekt.',
        subtitle: 'Przejrzysty proces, który oszczędza Twój czas i eliminuje niespodzianki.',
        steps: [
          {
            title: 'Analiza',
            description: 'Poznajemy Twoje cele, odbiorców i konkurencję — i ustalamy, jak wygląda sukces.',
          },
          {
            title: 'Design & build',
            description: 'Projektujemy, prototypujemy i budujemy — szybko, czysto i pod konwersję.',
          },
          {
            title: 'Launch',
            description: 'Uruchamiamy stronę, podpinamy Twoje narzędzia i sprawdzamy SEO oraz analitykę.',
          },
          {
            title: 'Optymalizacja',
            description: 'Stale ulepszamy na podstawie realnych danych: szybkość, testy i nowe sekcje.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Historie klientów',
        title: 'Co mówią klienci',
        subtitle: 'Kilka słów od zespołów, którym pomogliśmy rosnąć.',
        testimonials: [
          {
            quote: 'Alpinefy pomogli mi stworzyć szybki i estetyczny web, który realnie wspiera mój biznes.',
            name: 'Ondro',
            role: 'Founder, Tresoro GmbH',
          },
          {
            quote: 'Pomogli nam w migracji ze starego i nieefektywnego rozwiązania. Doceniamy długofalową współpracę, wsparcie językowe i SEO.',
            name: 'NEBBIA Team',
            role: 'NEBBIA',
          },
          {
            quote: 'Chciałam czystej i wiarygodnej strony dla mojego studia. Efekt jest przejrzysty, szybki i łatwy w obsłudze.',
            name: 'Oľga Chochúľová',
            role: 'PedikuraOlga.cz',
          },
          {
            quote: 'Zawsze zwracaliśmy się do Alpinefy, gdy brakowało nam dobrego rozwiązania technicznego i zawsze dostawaliśmy mocne wsparcie.',
            name: 'Peter Kováčik',
            role: 'SOELWE SOLUTIONS',
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
              'Strony leadowe zaczynają się od €900, strony firmowe od €1 900, a sklepy Shopify od €4 000. Dokładna cena zależy od zakresu — kalkulator na stronie Usług da Ci szybki szacunek, a po bezpłatnej rozmowie wstępnej otrzymasz stałą, transparentną ofertę.',
          },
          {
            question: 'Jak szybko możecie dostarczyć stronę?',
            answer:
              'Strony leadowe i marketingowe są zwykle gotowe w kilka dni do tygodnia. Przy większych projektach termin zależy od zakresu, integracji i gotowości materiałów — w ofercie zawsze otrzymujesz konkretną datę startu.',
          },
          {
            question: 'Czy mogę edytować treści?',
            answer:
              'Tak. Strony, które realizujemy, są w pełni konfigurowalne, a klient otrzymuje proste panelowe środowisko i krótki instruktaż. Na starcie wspólnie definiujemy, które elementy mają być edytowalne, aby mieć pełną kontrolę nad stroną bez ingerencji w kod. Możesz samodzielnie zmieniać teksty, nagłówki, podnagłówki, zdjęcia, bannery, ikony oraz ustawienia meta SEO. Efekt: łatwe zarządzanie i jednocześnie wysoka wydajność oraz stabilność.',
          },
          {
            question: 'Dlaczego nie użyć po prostu szablonu WordPress?',
            answer:
              'Szablony często są przeładowane dodatkowym kodem i wtyczkami, które spowalniają stronę i później powodują problemy przy aktualizacjach. Budujemy tylko to, czego wymagają Twoje cele, więc otrzymujesz szybszą, bezpieczniejszą stronę, która lepiej pozycjonuje się w Google i pozostaje łatwa w obsłudze, gdy rośniesz.',
          },
          {
            question: 'Czy przejmujecie istniejące strony?',
            answer:
              'Tak. Możemy kompleksowo przejąć istniejącą stronę, wykonać audyt techniczny i contentowy oraz przygotować bezpieczny plan migracji krok po kroku. Prowadzimy proces tak, aby nie stracić pozycji SEO, danych ani ruchu, a wdrożenie robimy z minimalnym ryzykiem przestoju. Po uruchomieniu dopracowujemy detale na podstawie realnych danych, aby przejście było płynne dla Twojego zespołu.',
          },
          {
            question: 'Czy możecie ustawić dla nas pomiar, analitykę i rozwiązania AI?',
            answer:
              'Tak. Stronę możemy skonfigurować tak, aby mieć precyzyjne dane i praktyczne rozwiązania AI w jednym miejscu. Standardowo podpinamy GA4 i Microsoft Clarity, dzięki czemu widzisz ruch, zachowanie użytkowników i konwersje. Na podstawie tych danych projektujemy i wdrażamy rozwiązania AI dopasowane do celów projektu, aby strona była nie tylko atrakcyjna wizualnie, ale też skuteczniejsza i bardziej wydajna w praktyce.',
          },
        ],
      },
      cta: {
        eyebrow: 'Następny krok',
        title: 'Porozmawiajmy o Twojej stronie',
        subtitle: '30‑min call i jasny plan kolejnych kroków.',
        primaryLabel: 'Umów bezpłatną konsultację',
        secondaryLabel: 'Napisz do nas',
        note: 'W dni robocze odpowiadamy w ciągu 24 godzin.',
      },
      trustBadges: {
        items: [
          {
            title: 'Szybka na każdym urządzeniu',
            description: 'Strony ładują się szybko, więc odwiedzający zostają, zamiast wychodzić.',
          },
          {
            title: 'Widoczna w Google',
            description: 'Zbudowana tak, by pozycjonować się i docierać do właściwych osób.',
          },
          {
            title: 'Zostaje Twoja',
            description: 'Strona, treści i hosting należą do Ciebie — bez uzależnienia od dostawcy.',
          },
          {
            title: 'Jasno, bez niespodzianek',
            description: 'Ustalony zakres, uczciwe aktualizacje i jeden punkt kontaktu.',
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
        eyebrow: 'Zbudowane na niezawodnych narzędziach',
        title: 'Technologia, której możesz zaufać',
        subtitle: 'Sprawdzone narzędzia stojące za Twoją stroną — szybkie, bezpieczne i łatwe w utrzymaniu.',
        notes: {
          astro: 'Szybkie strony',
          tailwind: 'System UI',
          netlify: 'Hosting',
          next: 'Automatyzacja',
          react: 'Interaktywność',
          figma: 'Design',
          ga: 'Analityka',
          vercel: 'Hosting zapasowy',
        },
      },
      capabilities: {
        eyebrow: 'Możliwości',
        title: 'Wszystko, czego potrzebujesz, by ruszyć i rosnąć online — w jednym miejscu',
        subtitle: 'Jeden zespół na całą drogę — od strategii i projektu, przez sklep Shopify, po widoczność i długoterminową opiekę. Bez żonglowania pięcioma wykonawcami.',
        items: [
          'Strategia, UX i struktura treści',
          'Copywriting, który sprzedaje',
          'Indywidualny projekt w Figmie',
          'Szybki, nowoczesny i bezpieczny development',
          'Wielojęzyczne strony i samodzielnie edytowalny CMS',
          'Sklep Shopify — wdrożony od A do Z',
          'Produkty, checkout i bezpieczne płatności',
          'Wysyłka, podatki, faktury i migracje',
          'Optymalizacja szybkości i Core Web Vitals',
          'SEO, dzięki któremu jesteś w Google',
          'Rozszerzone wyniki Google (dane strukturalne)',
          'Widoczność w asystentach AI (ChatGPT i inne)',
          'Formularze, CRM i automatyzacja AI',
          'Analityka i śledzenie konwersji',
          'Hosting, utrzymanie i długoterminowe wsparcie',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Strony, które zamieniają odwiedzających w klientów',
          description:
            'Alpinefy to AI & Web Studio, które projektuje szybkie, przejrzyste strony i sklepy internetowe stworzone po to, by zamieniać odwiedzających w klientów — więcej zapytań, więcej sprzedaży.',
        },
        hero: {
          eyebrow: 'Alpinefy — AI & Web Studio',
          title: 'Strony, które zamieniają odwiedzających w klientów',
          subtitle:
            'Projektujemy i budujemy szybkie, przejrzyste strony i sklepy internetowe, które przynoszą Ci więcej zapytań i sprzedaży — a pracujesz bezpośrednio z osobą, która wykonuje pracę.',
          primaryLabel: 'Umów bezpłatną konsultację',
          secondaryLabel: 'Zobacz usługi',
        },
      },
      services: {
        meta: {
          title: 'Usługi',
          description:
            'Projektujemy strony leadowe i firmowe, sklepy Shopify, analitykę, automatyzacje i workflow AI tak, aby strona generowała więcej zapytań i realnie wspierała wzrost.',
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
          description:
            'Od analizy wstępnej przez strukturę, design i development aż po wdrożenie, pomiar i optymalizację działamy transparentnie i bez zbędnych opóźnień.',
        },
        hero: {
          eyebrow: 'Proces',
          title: 'Jasno zdefiniowany proces, bez chaosu',
          subtitle: 'Wiesz, co się dzieje na każdym etapie.',
          primaryLabel: 'Umów bezpłatny intro call',
          secondaryLabel: 'Zobacz usługi',
        },
      },
      references: {
        meta: {
          title: 'Referencje',
          description:
            'Zobacz realne projekty, konkretne wyniki i opinie klientów, którym pomogliśmy przyspieszyć stronę, poprawić konwersje i lepiej pracować z danymi.',
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
              quote: 'Alpinefy pomogli mi stworzyć szybki i estetyczny web, który realnie wspiera mój biznes.',
              name: 'Ondro',
              role: 'Founder, Tresoro GmbH',
            },
            {
              quote: 'Pomogli nam w migracji ze starego i nieefektywnego rozwiązania. Doceniamy długofalową współpracę, wsparcie językowe i SEO.',
              name: 'NEBBIA Team',
              role: 'NEBBIA',
            },
            {
              quote: 'Chciałam czystej i wiarygodnej strony dla mojego studia. Efekt jest przejrzysty, szybki i łatwy w obsłudze.',
              name: 'Oľga Chochúľová',
              role: 'PedikuraOlga.cz',
            },
            {
              quote: 'Zawsze zwracaliśmy się do Alpinefy, gdy brakowało nam dobrego rozwiązania technicznego i zawsze dostawaliśmy mocne wsparcie.',
              name: 'Peter Kováčik',
              role: 'SOELWE SOLUTIONS',
            },
          ],
          moreItems: [],
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
          description:
            'Jestem niezależnym studiem, które łączy strategię, design, development i analitykę w skuteczne rozwiązania cyfrowe dla firm chcących rosnąć szybciej i efektywniej.',
        },
        hero: {
          eyebrow: 'O nas',
          title: 'Niezależne studio dla wydajnych stron',
          subtitle: 'Projektuję i buduję szybkie, estetyczne i łatwe w utrzymaniu strony — pracujesz bezpośrednio z osobą, która wykonuje pracę.',
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
          subtitle: 'Pracujesz bezpośrednio ze mną — bez przekazywania, bez juniorskich eksperymentów.',
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
          description:
            'Na blogu dzielimy się praktycznym know-how o wydajności strony, SEO, analityce i rozwiązaniach AI, które pomagają podejmować lepsze decyzje na podstawie danych.',
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
          description:
            'Napisz nam swój cel, projekt lub problem, a zaproponujemy kolejne kroki, szacowany zakres i rozwiązanie, które ma sens biznesowo i technicznie.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Powiedz, czego potrzebujesz',
          subtitle: 'Odpowiadamy w 24h. Pierwszy call jest krótki i rzeczowy.',
          primaryLabel: 'Wypełnij brief (2 min)',
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
          submit: 'Wyślij — odpowiedź w 24 h',
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
            'Od prostych stron leadowych po kompletne strony i sklepy Shopify — większość projektów zaczyna się od bezpłatnej rozmowy.',
        },
      },
    },
  },
  cz: {
    site: {
      tagline: 'AI & Web Studio pro rostoucí firmy',
      description:
        'Nestavíme jen weby. Tvoříme digitální řešení pro firmy, které chtějí růst rychleji, efektivněji a na základě dat.',
    },
    nav: {
      services: 'Služby',
      process: 'Proces',
      references: 'Reference',
      career: 'Kariéra',
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
        { value: '< 1.2 s', label: 'Načte se dřív, než návštěvník odejde' },
        { value: '24 h', label: 'Odpovídáme do' },
        { value: 'Dny', label: 'Do spuštění — ne měsíce' },
      ],
      heroSide: {
        eyebrow: 'Co získáte',
        title: 'Web, který prodává za vás',
        subtitle: 'Rychlý, snadno spravovatelný a stavěný tak, aby měnil návštěvníky v zákazníky — s hladkým předáním vašemu týmu.',
        badges: ['Vidět v Google', 'Načte se okamžitě', 'Snadná úprava'],
        cards: [
          { label: 'Přehledný reporting', value: 'Vidíte, co funguje' },
          { label: 'Průběžná péče', value: 'Rychlý a stále online' },
        ],
      },
      valueProps: {
        eyebrow: 'Proč Alpinefy',
        title: 'Weby, které skvěle vypadají a opravdu prodávají',
        subtitle: 'Stavíme weby, které se rychle načítají, říkají to podstatné a rostou s vaším podnikáním.',
        items: [
          {
            title: 'Rychlost, která udrží návštěvníky',
            description: 'Vaše stránky se otevřou přibližně za sekundu, takže lidé zůstanou místo odchodu.',
          },
          {
            title: 'Více poptávek',
            description: 'Jasná struktura a silné výzvy k akci mění návštěvníky v poptávky.',
          },
          {
            title: 'Snadná správa',
            description: 'Texty, obrázky i ceny si upravíte sami — bez developera.',
          },
          {
            title: 'Prostor pro růst',
            description: 'Přidávejte kampaně, stránky a nové funkce, jak vaše podnikání roste.',
          },
        ],
      },
      services: {
        eyebrow: 'Služby',
        title: 'Co pro vás stavíme',
        subtitle: 'Od landing stránek po kompletní weby, Shopify e-shopy a chytrou automatizaci.',
        items: [
          {
            title: 'Lead weby',
            description: 'Landing stránky, které konvertují — postavené tak, aby přinášely poptávky od prvního dne.',
            tags: ['Kampaně', 'Konverze', 'Rychlé nasazení'],
          },
          {
            title: 'Firemní weby',
            description: 'Kompletní prezentace s důrazem na důvěryhodnost.',
            tags: ['Strategie', 'SEO', 'Modulární systém'],
          },
          {
            title: 'E-shopy (Shopify)',
            description: 'Shopify e-shopy s čistou strukturou, platbami a důrazem na konverze — připravené prodávat.',
            tags: ['Shopify', 'E-commerce', 'Platby'],
          },
          {
            title: 'Automatizace a AI workflow',
            description: 'Automatizace, AI asistenti a dashboardy, které vašemu týmu šetří čas a snižují rutinní práci.',
            tags: ['Automatizace', 'AI asistenti', 'Dashboardy'],
          },
        ],
      },
      process: {
        eyebrow: 'Proces',
        title: 'Jasné kroky. Předvídatelný výsledek.',
        subtitle: 'Transparentní postup, který vám šetří čas a odstraňuje překvapení.',
        steps: [
          {
            title: 'Analýza',
            description: 'Poznáme vaše cíle, publikum a konkurenci — a určíme, jak vypadá úspěch.',
          },
          {
            title: 'Design & build',
            description: 'Navrhujeme, prototypujeme a stavíme — rychle, čistě a s cílem konvertovat.',
          },
          {
            title: 'Launch',
            description: 'Spustíme web, propojíme vaše nástroje a zkontrolujeme SEO a analytiku.',
          },
          {
            title: 'Optimalizace',
            description: 'Průběžně vylepšujeme podle reálných dat: rychlost, testy a nové sekce.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Příběhy klientů',
        title: 'Co říkají klienti',
        subtitle: 'Pár slov od týmů, kterým jsme pomohli růst.',
        testimonials: [
          {
            quote: 'Alpinefy mi pomohli vytvořit rychlý a krásný web, který reálně podporuje moje podnikání.',
            name: 'Ondro',
            role: 'Founder, Tresoro GmbH',
          },
          {
            quote: 'Pomohli nám s migrací ze starého a neefektivního řešení. Oceňujeme dlouhodobou spolupráci, pomoc s jazykovými překlady i SEO.',
            name: 'NEBBIA Team',
            role: 'NEBBIA',
          },
          {
            quote: 'Chtěla jsem čistý a důvěryhodný web pro své studio. Výsledek je přehledný, rychlý a snadno spravovatelný.',
            name: 'Oľga Chochúľová',
            role: 'PedikuraOlga.cz',
          },
          {
            quote: 'Kdykoliv jsme nevěděli najít správné řešení, obrátili jsme se na Alpinefy a vždy nám výrazně pomohli.',
            name: 'Peter Kováčik',
            role: 'SOELWE SOLUTIONS',
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
              'Lead weby začínají od €900, firemní weby od €1 900 a Shopify e-shopy od €4 000. Přesná cena závisí na rozsahu — kalkulačka na stránce Služby vám dá rychlý odhad a po nezávazném úvodním callu dostanete pevnou, transparentní nabídku.',
          },
          {
            question: 'Jak rychle dodáte web?',
            answer:
              'Lead a marketing weby jsou obvykle hotové během několika dnů až jednoho týdne. U větších projektů závisí termín na rozsahu, integracích a připravenosti podkladů — v nabídce vždy dostanete konkrétní datum spuštění.',
          },
          {
            question: 'Budu si umět upravovat obsah?',
            answer:
              'Ano. Weby, které děláme, jsou plně přizpůsobitelné a klient dostane jednoduché administrační rozhraní i krátký návod. Na začátku si společně definujeme, které části mají být upravitelné, abyste měli v praxi plnou kontrolu nad webem i bez zásahu do kódu. Bez developera si můžete upravovat texty, nadpisy, podnadpisy, fotky, bannery, ikony i meta SEO nastavení. Cíl je jednoduchá správa při zachování vysoké rychlosti, stability a výkonu.',
          },
          {
            question: 'Proč nepoužít prostě WordPress šablonu?',
            answer:
              'Šablony často obsahují spoustu kódu navíc a pluginů, které web zpomalují a později dělají problémy při aktualizacích. Stavíme jen to, co vaše cíle potřebují, takže získáte rychlejší a bezpečnější web, který se lépe umísťuje v Google a zůstává snadno spravovatelný, i když rostete.',
          },
          {
            question: 'Převezmete existující web?',
            answer:
              'Ano. Existující web umíme kompletně převzít, udělat technický i obsahový audit a připravit bezpečný plán migrace krok za krokem. Postupujeme tak, abyste nepřišli o SEO pozice, data ani návštěvnost, a nový web nasazujeme s minimálním rizikem výpadku. Po spuštění ještě doladíme detaily podle reálných dat, aby byl přechod plynulý i pro váš tým.',
          },
          {
            question: 'Umíte nám nastavit měření, analytiku a AI řešení?',
            answer:
              'Ano. Web umíme nastavit tak, abyste měli přesná data i praktická AI řešení na jednom místě. Standardně napojujeme GA4 a Microsoft Clarity, takže vidíte návštěvnost, chování uživatelů i konverze. Na základě dat potom navrhujeme a nasazujeme AI řešení podle cílů projektu, aby web nebyl jen vizuálně kvalitní, ale i výkonnější a efektivnější v praxi.',
          },
        ],
      },
      cta: {
        eyebrow: 'Další krok',
        title: 'Pojďme probrat váš web',
        subtitle: '30min call a jasný návrh dalších kroků.',
        primaryLabel: 'Rezervovat konzultaci zdarma',
        secondaryLabel: 'Napsat email',
        note: 'V pracovních dnech odpovídáme do 24 hodin.',
      },
      trustBadges: {
        items: [
          {
            title: 'Rychlý na každém zařízení',
            description: 'Stránky se načítají rychle, takže návštěvníci zůstanou místo odchodu.',
          },
          {
            title: 'Vidět v Google',
            description: 'Postavený tak, aby se umísťoval a našli ho ti správní lidé.',
          },
          {
            title: 'Zůstává vám',
            description: 'Web, obsah i hosting patří vám — žádný lock-in.',
          },
          {
            title: 'Jasně, bez překvapení',
            description: 'Pevný rozsah, poctivé aktualizace a jedno kontaktní místo.',
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
        eyebrow: 'Postaveno na spolehlivých nástrojích',
        title: 'Technologie, které můžete věřit',
        subtitle: 'Ověřené nástroje za vaším webem — rychlé, bezpečné a snadno udržovatelné.',
        notes: {
          astro: 'Rychlé stránky',
          tailwind: 'UI systém',
          netlify: 'Hosting',
          next: 'Automatizace',
          react: 'Interaktivní',
          figma: 'Design',
          ga: 'Analytika',
          vercel: 'Záložní hosting',
        },
      },
      capabilities: {
        eyebrow: 'Možnosti',
        title: 'Vše, co potřebujete pro spuštění a růst online — na jednom místě',
        subtitle: 'Jeden tým na celou cestu — od strategie a designu přes váš Shopify e-shop až po dohledatelnost a dlouhodobou péči. Bez žonglování s pěti dodavateli.',
        items: [
          'Strategie, UX a struktura obsahu',
          'Copywriting, který prodává',
          'Design na míru ve Figmě',
          'Rychlý, moderní a bezpečný vývoj',
          'Vícejazyčné weby a CMS, který si upravíte sami',
          'Shopify e-shop — kompletně na klíč',
          'Produkty, košík a bezpečné platby',
          'Doprava, daně, fakturace a migrace',
          'Optimalizace rychlosti a Core Web Vitals',
          'SEO, abyste byli v Googlu vidět',
          'Bohaté výsledky v Google (strukturovaná data)',
          'Viditelnost v AI asistentech (ChatGPT a další)',
          'Formuláře, CRM a AI automatizace',
          'Analytika a měření konverzí',
          'Hosting, údržba a dlouhodobá podpora',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Weby, které mění návštěvníky v zákazníky',
          description:
            'Alpinefy je AI & Web Studio, které navrhuje rychlé a přehledné weby a e-shopy stavěné tak, aby měnily návštěvníky v zákazníky — více poptávek, více prodejů.',
        },
        hero: {
          eyebrow: 'Alpinefy — AI & Web Studio',
          title: 'Weby, které mění návštěvníky v zákazníky',
          subtitle:
            'Navrhujeme a stavíme rychlé a přehledné weby a e-shopy, které vám přinášejí více poptávek a prodejů — a pracujete přímo s člověkem, který dělá práci.',
          primaryLabel: 'Získat konzultaci zdarma',
          secondaryLabel: 'Zobrazit služby',
        },
      },
      services: {
        meta: {
          title: 'Služby',
          description:
            'Navrhujeme lead i firemní weby, Shopify e-shopy, analytiku, automatizace i AI workflow tak, aby web přinášel více poptávek a podporoval růst.',
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
          description:
            'Od úvodní analýzy přes návrh struktury, design a vývoj až po nasazení, měření a optimalizaci postupujeme transparentně a bez zbytečných průtahů.',
        },
        hero: {
          eyebrow: 'Proces',
          title: 'Jasně definovaný postup bez chaosu',
          subtitle: 'Víte, co se děje v každém kroku.',
          primaryLabel: 'Naplánovat intro call zdarma',
          secondaryLabel: 'Zobrazit služby',
        },
      },
      references: {
        meta: {
          title: 'Reference',
          description:
            'Podívejte se na reálné projekty, konkrétní výsledky a zpětnou vazbu klientů, kterým jsme pomohli zrychlit web, zlepšit konverze a lépe pracovat s daty.',
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
              quote: 'Alpinefy mi pomohli vytvořit rychlý a krásný web, který reálně podporuje moje podnikání.',
              name: 'Ondro',
              role: 'Founder, Tresoro GmbH',
            },
            {
              quote: 'Pomohli nám s migrací ze starého a neefektivního řešení. Oceňujeme dlouhodobou spolupráci, pomoc s jazykovými překlady i SEO.',
              name: 'NEBBIA Team',
              role: 'NEBBIA',
            },
            {
              quote: 'Chtěla jsem čistý a důvěryhodný web pro své studio. Výsledek je přehledný, rychlý a snadno spravovatelný.',
              name: 'Oľga Chochúľová',
              role: 'PedikuraOlga.cz',
            },
            {
              quote: 'Kdykoliv jsme nevěděli najít správné řešení, obrátili jsme se na Alpinefy a vždy nám výrazně pomohli.',
              name: 'Peter Kováčik',
              role: 'SOELWE SOLUTIONS',
            },
          ],
          moreItems: [],
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
          description:
            'Jsem nezávislé studio, které spojuje strategii, design, vývoj a analytiku do funkčních digitálních řešení pro firmy, které chtějí růst rychleji a efektivněji.',
        },
        hero: {
          eyebrow: 'O nás',
          title: 'Nezávislé studio pro weby s výkonem',
          subtitle: 'Navrhuji a stavím rychlé, estetické a udržitelné weby — pracujete přímo s člověkem, který dělá práci.',
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
          subtitle: 'Pracujete přímo se mnou — žádné předávání, žádné juniorní experimenty.',
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
          description:
            'Na blogu sdílíme praktické know-how o výkonu webu, SEO, analytice a AI řešeních, která pomáhají dělat lepší rozhodnutí na základě dat.',
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
          description:
            'Napište nám svůj cíl, projekt nebo problém a navrhneme vám další kroky, odhad rozsahu i řešení, které bude dávat smysl obchodně i technicky.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Řekněte nám, co potřebujete',
          subtitle: 'Odpovídáme do 24 hodin. První call je krátký a věcný.',
          primaryLabel: 'Vyplnit brief (2 min)',
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
          submit: 'Odeslat — odpověď do 24 h',
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
          scope: 'Rozsah',
          scopeText:
            'Od jednoduchých lead stránek po kompletní weby a Shopify e-shopy — většina projektů začíná nezávazným úvodním callem.',
        },
      },
    },
  },
  sk: {
    site: {
      tagline: 'AI & Web Studio pre rastové firmy',
      description:
        'Nestaviame len weby. Tvoríme digitálne riešenia pre biznisy, ktoré chcú rásť rýchlejšie, efektívnejšie a na základe dát.',
    },
    nav: {
      services: 'Služby',
      process: 'Proces',
      references: 'Referencie',
      career: 'Kariéra',
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
        { value: '< 1.2 s', label: 'Načíta sa skôr, než návštevník odíde' },
        { value: '24 h', label: 'Odpovedáme do' },
        { value: 'Dni', label: 'Do spustenia — nie mesiace' },
      ],
      heroSide: {
        eyebrow: 'Čo získate',
        title: 'Web, ktorý predáva za vás',
        subtitle: 'Rýchly, jednoducho spravovateľný a stavaný tak, aby menil návštevníkov na zákazníkov — s hladkým odovzdaním vášmu tímu.',
        badges: ['Nájdený v Google', 'Načíta sa okamžite', 'Ľahká úprava'],
        cards: [
          { label: 'Prehľadný reporting', value: 'Vidíte, čo funguje' },
          { label: 'Priebežná starostlivosť', value: 'Rýchly a stále online' },
        ],
      },
      valueProps: {
        eyebrow: 'Prečo Alpinefy',
        title: 'Weby, ktoré skvele vyzerajú a naozaj predávajú',
        subtitle: 'Staviame weby, ktoré sa rýchlo načítajú, povedia to podstatné a rastú s vaším biznisom.',
        items: [
          {
            title: 'Rýchlosť, ktorá udrží návštevníkov',
            description: 'Vaše stránky sa otvoria približne za sekundu, takže ľudia zostanú namiesto odchodu.',
          },
          {
            title: 'Viac dopytov',
            description: 'Jasná štruktúra a silné výzvy na akciu menia návštevníkov na dopyty.',
          },
          {
            title: 'Jednoduchá správa',
            description: 'Texty, obrázky aj ceny si upravíte sami — bez developera.',
          },
          {
            title: 'Priestor na rast',
            description: 'Pridávajte kampane, stránky a nové funkcie, ako váš biznis rastie.',
          },
        ],
      },
      services: {
        eyebrow: 'Služby',
        title: 'Čo pre vás staviame',
        subtitle: 'Od landing stránok po kompletné weby, Shopify e-shopy a šikovnú automatizáciu.',
        items: [
          {
            title: 'Lead weby',
            description: 'Landing stránky, ktoré konvertujú — postavené tak, aby prinášali dopyty od prvého dňa.',
            tags: ['Kampane', 'Konverzie', 'Rýchle nasadenie'],
          },
          {
            title: 'Firemné weby',
            description: 'Komplexná prezentácia firmy s dôrazom na dôveryhodnosť.',
            tags: ['Stratégia', 'SEO', 'Modulárny systém'],
          },
          {
            title: 'E-shopy (Shopify)',
            description: 'Shopify e-shopy s čistou štruktúrou katalógu, platbami a dôrazom na konverzie — pripravené predávať.',
            tags: ['Shopify', 'E-commerce', 'Platby'],
          },
          {
            title: 'Automatizácie a AI workflow',
            description: 'Automatizácie, AI asistenti a dashboardy, ktoré vášmu tímu šetria čas a znižujú rutinnú prácu.',
            tags: ['Automatizácia', 'AI asistenti', 'Dashboardy'],
          },
        ],
      },
      process: {
        eyebrow: 'Proces',
        title: 'Jasné kroky. Predvídateľný výsledok.',
        subtitle: 'Transparentný postup, ktorý vám šetrí čas a odstraňuje prekvapenia.',
        steps: [
          {
            title: 'Analýza',
            description: 'Spoznáme vaše ciele, publikum a konkurenciu — a určíme, ako vyzerá úspech.',
          },
          {
            title: 'Dizajn & build',
            description: 'Navrhujeme, prototypujeme a staviame — rýchlo, čisto a s cieľom konvertovať.',
          },
          {
            title: 'Launch',
            description: 'Spustíme web, prepojíme vaše nástroje a skontrolujeme SEO a analytiku.',
          },
          {
            title: 'Optimalizácia',
            description: 'Priebežne vylepšujeme podľa reálnych dát: rýchlosť, testy a nové sekcie.',
          },
        ],
      },
      socialProof: {
        eyebrow: 'Príbehy klientov',
        title: 'Čo hovoria klienti',
        subtitle: 'Pár slov od tímov, ktorým sme pomohli rásť.',
        testimonials: [
          {
            quote: 'Alpinefy mi pomohli vytvoriť rýchly a krásny web, ktorý mi pomáha s mojím podnikaním.',
            name: 'Ondro',
            role: 'Founder, Tresoro GmbH',
          },
          {
            quote: 'Pomohli nám s migráciou zo starého a neefektívneho riešenia. Oceňujeme dlhodobú spoluprácu, pomoc s jazykovými prekladmi aj SEO.',
            name: 'NEBBIA Team',
            role: 'NEBBIA',
          },
          {
            quote: 'Chcela som čistý a dôveryhodný web pre svoje štúdio. Výsledok je prehľadný, rýchly a ľahko spravovateľný.',
            name: 'Oľga Chochúľová',
            role: 'PedikuraOlga.cz',
          },
          {
            quote: 'Vždy keď sme nevedeli nájsť správne riešenie, obrátili sme sa na Alpinefy a výrazne nám pomohli.',
            name: 'Peter Kováčik',
            role: 'SOELWE SOLUTIONS',
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
              'Lead weby začínajú od €900, firemné weby od €1 900 a Shopify e-shopy od €4 000. Presná cena závisí od rozsahu — kalkulačka na stránke Služby vám dá rýchly odhad a po nezáväznom úvodnom calle dostanete pevnú, transparentnú ponuku.',
          },
          {
            question: 'Ako rýchlo viete dodať web?',
            answer:
              'Lead a marketing weby sú zvyčajne hotové v priebehu pár dní až jedného týždňa. Pri väčších projektoch závisí termín od rozsahu, integrácií a pripravenosti podkladov — v ponuke vždy dostanete konkrétny dátum spustenia.',
          },
          {
            question: 'Budem si vedieť upravovať obsah?',
            answer:
              'Áno. Weby, ktoré robíme, sú plne customizovateľné a klient dostane jednoduché administračné rozhranie aj krátky návod. Na začiatku si spolu vždy definujeme, ktoré časti majú byť upravovateľné, aby ste mali v praxi plnú kontrolu nad webstránkou aj bez zásahu do kódu. Bez developera si viete upravovať texty, nadpisy, podnadpisy, fotky, bannery, ikony aj meta SEO nastavenia. Cieľ je, aby správa bola pre vás jednoduchá, ale technicky stále rýchla, stabilná a výkonná.',
          },
          {
            question: 'Prečo nepoužiť jednoducho WordPress šablónu?',
            answer:
              'Šablóny často obsahujú množstvo kódu navyše a pluginov, ktoré web spomaľujú a neskôr robia problémy pri aktualizáciách. Staviame len to, čo vaše ciele potrebujú, takže získate rýchlejší a bezpečnejší web, ktorý sa lepšie umiestňuje v Google a zostáva jednoducho spravovateľný, aj keď rastiete.',
          },
          {
            question: 'Viete prebrať existujúci web?',
            answer:
              'Áno. Existujúci web vieme kompletne prebrať, spraviť technický a obsahový audit a pripraviť bezpečný plán migrácie krok za krokom. Postupujeme tak, aby ste neprišli o SEO pozície, dáta ani návštevnosť, a nový web nasadzujeme s minimálnym rizikom výpadku. Po spustení ešte doladíme detaily podľa reálnych dát, aby bol prechod plynulý aj pre váš tím.',
          },
          {
            question: 'Viete nám nastaviť meranie, analytiku a AI riešenia?',
            answer:
              'Áno. Web vieme nastaviť tak, aby ste mali presné dáta aj praktické AI riešenia na jednom mieste. Štandardne prepájame GA4 a Microsoft Clarity, takže vidíte návštevnosť, správanie používateľov aj konverzie. Na základe dát potom navrhujeme a nasadzujeme AI riešenia podľa cieľov projektu, aby web nebol len vizuálne kvalitný, ale aj výkonnejší a efektívnejší v praxi.',
          },
        ],
      },
      cta: {
        eyebrow: 'Ďalší krok',
        title: 'Poďme sa porozprávať o vašom webe',
        subtitle: '30-minútový call a rýchly návrh ďalších krokov.',
        primaryLabel: 'Rezervovať konzultáciu zadarmo',
        secondaryLabel: 'Napísať email',
        note: 'Počas pracovných dní odpovedáme do 24 hodín.',
      },
      trustBadges: {
        items: [
          {
            title: 'Rýchly na každom zariadení',
            description: 'Stránky sa načítajú rýchlo, takže návštevníci zostanú namiesto odchodu.',
          },
          {
            title: 'Nájdený v Google',
            description: 'Postavený tak, aby sa umiestňoval a našli ho tí správni ľudia.',
          },
          {
            title: 'Zostáva vám',
            description: 'Web, obsah aj hosting patria vám — žiadny lock-in.',
          },
          {
            title: 'Jasne, bez prekvapení',
            description: 'Pevný rozsah, poctivé aktualizácie a jedno kontaktné miesto.',
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
        eyebrow: 'Postavené na spoľahlivých nástrojoch',
        title: 'Technológia, ktorej môžete veriť',
        subtitle: 'Overené nástroje za vaším webom — rýchle, bezpečné a jednoducho udržiavateľné.',
        notes: {
          astro: 'Rýchle stránky',
          tailwind: 'UI systém',
          netlify: 'Hosting',
          next: 'Automatizácia',
          react: 'Interaktívne',
          figma: 'Dizajn',
          ga: 'Analytika',
          vercel: 'Záložný hosting',
        },
      },
      capabilities: {
        eyebrow: 'Možnosti',
        title: 'Všetko, čo potrebujete na spustenie a rast online — na jednom mieste',
        subtitle: 'Jeden tím na celú cestu — od stratégie a dizajnu cez váš Shopify e-shop až po dohľadateľnosť a dlhodobú starostlivosť. Bez žonglovania s piatimi dodávateľmi.',
        items: [
          'Stratégia, UX a štruktúra obsahu',
          'Copywriting, ktorý predáva',
          'Dizajn na mieru vo Figme',
          'Rýchly, moderný a bezpečný vývoj',
          'Viacjazyčné weby a CMS, ktorý si upravíte sami',
          'Shopify e-shop — kompletne na kľúč',
          'Produkty, košík a bezpečné platby',
          'Doprava, dane, fakturácia a migrácie',
          'Optimalizácia rýchlosti a Core Web Vitals',
          'SEO, aby vás bolo v Google vidieť',
          'Bohaté výsledky v Google (štruktúrované dáta)',
          'Viditeľnosť v AI asistentoch (ChatGPT a ďalšie)',
          'Formuláre, CRM a AI automatizácia',
          'Analytika a meranie konverzií',
          'Hosting, údržba a dlhodobá podpora',
        ],
      },
    },
    pages: {
      home: {
        meta: {
          title: 'Weby, ktoré menia návštevníkov na zákazníkov',
          description:
            'Alpinefy je AI & Web Studio, ktoré navrhuje rýchle a prehľadné weby a e-shopy stavané tak, aby menili návštevníkov na zákazníkov — viac dopytov, viac predajov.',
        },
        hero: {
          eyebrow: 'Alpinefy — AI & Web Studio',
          title: 'Weby, ktoré menia návštevníkov na zákazníkov',
          subtitle:
            'Navrhujeme a staviame rýchle a prehľadné weby a e-shopy, ktoré vám prinášajú viac dopytov a predajov — a pracujete priamo s človekom, ktorý robí prácu.',
          primaryLabel: 'Získať konzultáciu zadarmo',
          secondaryLabel: 'Pozrieť služby',
        },
      },
      services: {
        meta: {
          title: 'Služby',
          description:
            'Navrhujeme lead a firemné weby, Shopify e-shopy, analytiku, automatizácie aj AI workflow tak, aby web prinášal viac dopytov a podporoval rast.',
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
          description:
            'Od úvodnej analýzy cez návrh štruktúry, dizajn a vývoj až po nasadenie, meranie a optimalizáciu postupujeme transparentne a bez zbytočných prieťahov.',
        },
        hero: {
          eyebrow: 'Proces',
          title: 'Jasne definovaný postup, bez chaosu',
          subtitle: 'Viete, čo sa bude diať v každom kroku.',
          primaryLabel: 'Naplánovať úvodný call zadarmo',
          secondaryLabel: 'Pozrieť služby',
        },
      },
      references: {
        meta: {
          title: 'Referencie',
          description:
            'Pozrite si reálne projekty, konkrétne výsledky a spätnú väzbu klientov, ktorým sme pomohli zrýchliť web, zlepšiť konverzie a lepšie pracovať s dátami.',
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
              quote: 'Alpinefy mi pomohli vytvoriť rýchly a krásny web, ktorý mi pomáha s mojím podnikaním.',
              name: 'Ondro',
              role: 'Founder, Tresoro GmbH',
            },
            {
              quote: 'Pomohli nám s migráciou zo starého a neefektívneho riešenia. Oceňujeme dlhodobú spoluprácu, pomoc s jazykovými prekladmi aj SEO.',
              name: 'NEBBIA Team',
              role: 'NEBBIA',
            },
            {
              quote: 'Chcela som čistý a dôveryhodný web pre svoje štúdio. Výsledok je prehľadný, rýchly a ľahko spravovateľný.',
              name: 'Oľga Chochúľová',
              role: 'PedikuraOlga.cz',
            },
            {
              quote: 'Vždy keď sme nevedeli nájsť správne riešenie, obrátili sme sa na Alpinefy a výrazne nám pomohli.',
              name: 'Peter Kováčik',
              role: 'SOELWE SOLUTIONS',
            },
          ],
          moreItems: [],
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
          description:
            'Som nezávislé štúdio, ktoré spája stratégiu, dizajn, vývoj a analytiku do funkčných digitálnych riešení pre firmy, ktoré chcú rásť rýchlejšie a efektívnejšie.',
        },
        hero: {
          eyebrow: 'O nás',
          title: 'Nezávislé štúdio pre weby, ktoré majú výkon',
          subtitle: 'Navrhujem a staviam rýchle, estetické a udržateľné weby — pracujete priamo s človekom, ktorý robí prácu.',
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
          subtitle: 'Pracujete priamo so mnou — žiadne odovzdávania, žiadne juniorné experimenty.',
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
          description:
            'V blogu zdieľame praktické know-how o výkone webu, SEO, analytike a AI riešeniach, ktoré pomáhajú robiť lepšie rozhodnutia na základe dát.',
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
          description:
            'Napíšte nám svoj cieľ, projekt alebo problém a navrhneme vám najbližšie kroky, odhad rozsahu aj riešenie, ktoré bude dávať zmysel obchodne aj technicky.',
        },
        hero: {
          eyebrow: 'Kontakt',
          title: 'Povedzte nám, čo potrebujete',
          subtitle: 'Odpovedáme do 24 hodín. Prvý call je krátky a vecný.',
          primaryLabel: 'Vyplniť brief (2 min)',
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
          submit: 'Odoslať — odpoveď do 24 h',
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
          scope: 'Rozsah',
          scopeText:
            'Od jednoduchých lead stránok po kompletné weby a Shopify e-shopy — väčšina projektov začína nezáväzným úvodným callom.',
        },
      },
    },
  },
};

export const getCopy = (lang: Lang) => copy[lang] ?? copy.en;
