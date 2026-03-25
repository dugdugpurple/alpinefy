import { defaultLang, type Lang } from '../i18n/languages';

export const serviceOrder = ['lead', 'corporate', 'shopify', 'automation'] as const;
export type ServiceKey = (typeof serviceOrder)[number];

export type ServiceAnchorConfig = {
  id: string;
  aliases: string[];
};

export type ServiceFunnelOption = {
  value: string;
  label: string;
};

export type ServiceQuestionConfig = {
  label: string;
  placeholder: string;
  options: ServiceFunnelOption[];
};

export type ServiceFunnelCopy = {
  homeCardCta: string;
  servicesCardCta: string;
  highlights: Record<ServiceKey, string[]>;
  inquiry: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    titlePrefix: string;
    subtitle: string;
    serviceSummaryLabel: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    focusLabel: string;
    websiteLabel: string;
    websitePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    consent: string;
    backLabel: string;
    serviceQuestion: Record<ServiceKey, ServiceQuestionConfig>;
  };
};

export const serviceAnchors: Record<ServiceKey, ServiceAnchorConfig> = {
  lead: { id: 'service-lead', aliases: ['focus-design'] },
  corporate: { id: 'service-corporate', aliases: ['focus-seo', 'focus-content'] },
  shopify: { id: 'service-shopify', aliases: ['focus-shopify', 'focus-ecommerce'] },
  automation: { id: 'service-apps', aliases: ['focus-performance', 'focus-ai', 'focus-apps'] },
};

const serviceIndexMap: Record<ServiceKey, number> = {
  lead: 0,
  corporate: 1,
  shopify: 2,
  automation: 3,
};

const copyByLang: Record<Lang, ServiceFunnelCopy> = {
  en: {
    homeCardCta: 'See solution',
    servicesCardCta: 'I am interested',
    highlights: {
      lead: [
        'Structure and messaging focused on one clear conversion goal.',
        'Fast launch cycles with measurable campaign iterations.',
        'Built-in tracking readiness for paid traffic and lead quality.',
      ],
      corporate: [
        'Information architecture that supports trust and sales conversations.',
        'Scalable page system for services, team and content growth.',
        'Technical SEO and performance foundation from day one.',
      ],
      shopify: [
        'Catalog and collection structure built for easier product discovery.',
        'Checkout, payment and shipping flows configured for lower friction.',
        'Measurement setup for revenue, funnel drop-offs and retention signals.',
      ],
      automation: [
        'Automation of repetitive internal and client-facing workflows.',
        'AI-assisted handling for leads, support and reporting routines.',
        'Connected dashboards so decisions are based on real-time data.',
      ],
    },
    inquiry: {
      metaTitle: 'Service inquiry',
      metaDescription: 'Quick service questionnaire so we can prepare relevant next steps for your project.',
      eyebrow: 'Quick intake',
      titlePrefix: 'Interest in',
      subtitle: 'Answer a few practical questions and we will come back with clear next steps.',
      serviceSummaryLabel: 'What this service focuses on',
      formTitle: 'Project questionnaire',
      formSubtitle: 'Short input helps us prepare a practical and relevant response.',
      nameLabel: 'Name and company',
      namePlaceholder: 'Your name, company',
      emailLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      companyLabel: 'Role or team (optional)',
      companyPlaceholder: 'Marketing lead, founder, product team...',
      focusLabel: 'Main priority',
      websiteLabel: 'Current website (optional)',
      websitePlaceholder: 'https://yourdomain.com',
      messageLabel: 'Context and expectations',
      messagePlaceholder: 'What should this service improve in your business in the next months?',
      submitLabel: 'Send inquiry',
      consent: 'During business days, we reply within 24 hours.',
      backLabel: 'Back to services',
      serviceQuestion: {
        lead: {
          label: 'What matters most for your lead page?',
          placeholder: 'Select priority',
          options: [
            { value: 'launch_speed', label: 'Fast launch for active campaign' },
            { value: 'conversion_rate', label: 'Higher conversion rate' },
            { value: 'messaging', label: 'Clear positioning and offer messaging' },
            { value: 'crm_tracking', label: 'Tracking and CRM handover' },
          ],
        },
        corporate: {
          label: 'What is the biggest gap in your current corporate web?',
          placeholder: 'Select priority',
          options: [
            { value: 'trust_positioning', label: 'Trust and positioning are weak' },
            { value: 'service_structure', label: 'Service structure is unclear' },
            { value: 'multilingual_growth', label: 'Need scalable multilingual setup' },
            { value: 'seo_visibility', label: 'Low visibility in search' },
          ],
        },
        shopify: {
          label: 'What is the main e-commerce priority now?',
          placeholder: 'Select priority',
          options: [
            { value: 'migration', label: 'Migration from current solution' },
            { value: 'checkout', label: 'Checkout and payment optimization' },
            { value: 'catalog_ux', label: 'Catalog UX and filtering' },
            { value: 'analytics_retention', label: 'Revenue tracking and retention' },
          ],
        },
        automation: {
          label: 'Which workflow do you want to automate first?',
          placeholder: 'Select priority',
          options: [
            { value: 'lead_routing', label: 'Lead routing and qualification' },
            { value: 'reporting', label: 'Reporting and KPI dashboards' },
            { value: 'email_ops', label: 'Email and operational routines' },
            { value: 'ai_assistant', label: 'AI assistant for repetitive tasks' },
          ],
        },
      },
    },
  },
  de: {
    homeCardCta: 'Lösung ansehen',
    servicesCardCta: 'Ich habe Interesse',
    highlights: {
      lead: [
        'Struktur und Messaging mit klarem Fokus auf eine Conversion.',
        'Schnelle Go-live-Zyklen mit messbaren Iterationen.',
        'Tracking-ready für Performance-Kampagnen und Lead-Qualität.',
      ],
      corporate: [
        'Informationsarchitektur für Vertrauen und bessere Sales-Gespräche.',
        'Skalierbares Seitensystem für Leistungen, Team und Content.',
        'Technisches SEO- und Performance-Fundament von Anfang an.',
      ],
      shopify: [
        'Saubere Katalog- und Kategorie-Struktur für bessere Orientierung.',
        'Checkout-, Zahlungs- und Versandfluss mit minimaler Reibung.',
        'Messsetup für Umsatz, Funnel-Abbrüche und Retention-Signale.',
      ],
      automation: [
        'Automatisierung repetitiver interner und kundenbezogener Prozesse.',
        'AI-gestützte Routinen für Leads, Support und Reporting.',
        'Verbundene Dashboards für Entscheidungen auf echter Datengrundlage.',
      ],
    },
    inquiry: {
      metaTitle: 'Leistungsanfrage',
      metaDescription: 'Kurzer Fragenkatalog, damit wir konkrete nächste Schritte für Ihr Projekt vorbereiten können.',
      eyebrow: 'Kurzes Intake',
      titlePrefix: 'Interesse an',
      subtitle: 'Beantworten Sie ein paar Fragen, damit wir mit einem klaren Vorschlag zurückkommen.',
      serviceSummaryLabel: 'Worauf diese Leistung fokussiert ist',
      formTitle: 'Projekt-Fragebogen',
      formSubtitle: 'Kurze Angaben helfen uns, Ihnen eine relevante Antwort vorzubereiten.',
      nameLabel: 'Name und Firma',
      namePlaceholder: 'Ihr Name, Firma',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'sie@firma.de',
      companyLabel: 'Rolle oder Team (optional)',
      companyPlaceholder: 'Marketing Lead, Founder, Produktteam...',
      focusLabel: 'Hauptpriorität',
      websiteLabel: 'Aktuelle Website (optional)',
      websitePlaceholder: 'https://ihredomain.de',
      messageLabel: 'Kontext und Erwartung',
      messagePlaceholder: 'Was soll diese Leistung in den nächsten Monaten konkret verbessern?',
      submitLabel: 'Anfrage senden',
      consent: 'An Werktagen antworten wir innerhalb von 24 Stunden.',
      backLabel: 'Zurück zu Leistungen',
      serviceQuestion: {
        lead: {
          label: 'Was ist bei Ihrer Lead-Page aktuell am wichtigsten?',
          placeholder: 'Priorität auswählen',
          options: [
            { value: 'launch_speed', label: 'Schneller Start für laufende Kampagne' },
            { value: 'conversion_rate', label: 'Höhere Conversion-Rate' },
            { value: 'messaging', label: 'Klareres Positioning und Angebot' },
            { value: 'crm_tracking', label: 'Tracking und CRM-Übergabe' },
          ],
        },
        corporate: {
          label: 'Wo liegt die größte Lücke Ihrer aktuellen Unternehmensseite?',
          placeholder: 'Priorität auswählen',
          options: [
            { value: 'trust_positioning', label: 'Zu wenig Vertrauen/Positionierung' },
            { value: 'service_structure', label: 'Unklare Leistungsstruktur' },
            { value: 'multilingual_growth', label: 'Skalierbares Mehrsprach-Setup fehlt' },
            { value: 'seo_visibility', label: 'Niedrige Sichtbarkeit in Suche' },
          ],
        },
        shopify: {
          label: 'Was ist derzeit die wichtigste E-Commerce-Priorität?',
          placeholder: 'Priorität auswählen',
          options: [
            { value: 'migration', label: 'Migration vom aktuellen System' },
            { value: 'checkout', label: 'Checkout- und Payment-Optimierung' },
            { value: 'catalog_ux', label: 'Katalog-UX und Filterlogik' },
            { value: 'analytics_retention', label: 'Umsatztracking und Retention' },
          ],
        },
        automation: {
          label: 'Welchen Prozess möchten Sie zuerst automatisieren?',
          placeholder: 'Priorität auswählen',
          options: [
            { value: 'lead_routing', label: 'Lead-Routing und Vorqualifizierung' },
            { value: 'reporting', label: 'Reporting und KPI-Dashboards' },
            { value: 'email_ops', label: 'E-Mail- und operative Routinen' },
            { value: 'ai_assistant', label: 'AI-Assistent für repetitive Aufgaben' },
          ],
        },
      },
    },
  },
  pl: {
    homeCardCta: 'Zobacz rozwiązanie',
    servicesCardCta: 'Jestem zainteresowany',
    highlights: {
      lead: [
        'Struktura i komunikat nastawione na jeden, jasny cel konwersji.',
        'Szybkie wdrożenie i iteracje oparte na wynikach kampanii.',
        'Gotowe pod tracking jakości leadów i skuteczności reklam.',
      ],
      corporate: [
        'Architektura informacji budująca zaufanie i rozmowy sprzedażowe.',
        'Skalowalny system stron dla usług, zespołu i treści.',
        'Mocna baza technicznego SEO i wydajności od startu.',
      ],
      shopify: [
        'Przejrzysta struktura katalogu i kolekcji dla łatwiejszych zakupów.',
        'Checkout, płatności i dostawa skonfigurowane pod mniejszy opór.',
        'Pomiar przychodu, spadków w lejku i sygnałów retencyjnych.',
      ],
      automation: [
        'Automatyzacja powtarzalnych procesów wewnętrznych i sprzedażowych.',
        'Workflow AI dla leadów, wsparcia i raportowania.',
        'Połączone dashboardy do decyzji opartych na danych.',
      ],
    },
    inquiry: {
      metaTitle: 'Zapytanie o usługę',
      metaDescription: 'Krótki formularz, dzięki któremu przygotujemy konkretne kolejne kroki dla Twojego projektu.',
      eyebrow: 'Krótki formularz',
      titlePrefix: 'Zainteresowanie usługą',
      subtitle: 'Odpowiedz na kilka pytań, a wrócimy z konkretną propozycją kolejnych kroków.',
      serviceSummaryLabel: 'Na czym koncentruje się ta usługa',
      formTitle: 'Kwestionariusz projektu',
      formSubtitle: 'Krótki kontekst pozwala nam przygotować trafną odpowiedź.',
      nameLabel: 'Imię i firma',
      namePlaceholder: 'Twoje imię, firma',
      emailLabel: 'E-mail',
      emailPlaceholder: 'ty@firma.pl',
      companyLabel: 'Rola lub zespół (opcjonalnie)',
      companyPlaceholder: 'Marketing lead, founder, zespół produktowy...',
      focusLabel: 'Główny priorytet',
      websiteLabel: 'Obecna strona (opcjonalnie)',
      websitePlaceholder: 'https://twojadomena.pl',
      messageLabel: 'Kontekst i oczekiwania',
      messagePlaceholder: 'Co ta usługa ma realnie poprawić w najbliższych miesiącach?',
      submitLabel: 'Wyślij zapytanie',
      consent: 'W dni robocze odpowiadamy w ciągu 24 godzin.',
      backLabel: 'Powrót do usług',
      serviceQuestion: {
        lead: {
          label: 'Co jest teraz najważniejsze dla strony leadowej?',
          placeholder: 'Wybierz priorytet',
          options: [
            { value: 'launch_speed', label: 'Szybki start kampanii' },
            { value: 'conversion_rate', label: 'Wyższa konwersja' },
            { value: 'messaging', label: 'Lepszy komunikat i pozycjonowanie' },
            { value: 'crm_tracking', label: 'Tracking i przekazanie do CRM' },
          ],
        },
        corporate: {
          label: 'Jaki jest największy problem obecnej strony firmowej?',
          placeholder: 'Wybierz priorytet',
          options: [
            { value: 'trust_positioning', label: 'Niski poziom zaufania / pozycjonowania' },
            { value: 'service_structure', label: 'Nieczytelna struktura usług' },
            { value: 'multilingual_growth', label: 'Brak skalowalnej wersji wielojęzycznej' },
            { value: 'seo_visibility', label: 'Słaba widoczność w wyszukiwarce' },
          ],
        },
        shopify: {
          label: 'Jaki jest dziś główny priorytet e-commerce?',
          placeholder: 'Wybierz priorytet',
          options: [
            { value: 'migration', label: 'Migracja z obecnego rozwiązania' },
            { value: 'checkout', label: 'Optymalizacja checkoutu i płatności' },
            { value: 'catalog_ux', label: 'UX katalogu i filtrowanie produktów' },
            { value: 'analytics_retention', label: 'Pomiar przychodu i retencji' },
          ],
        },
        automation: {
          label: 'Który proces chcesz zautomatyzować jako pierwszy?',
          placeholder: 'Wybierz priorytet',
          options: [
            { value: 'lead_routing', label: 'Routing i kwalifikacja leadów' },
            { value: 'reporting', label: 'Raportowanie i dashboardy KPI' },
            { value: 'email_ops', label: 'E-maile i rutyny operacyjne' },
            { value: 'ai_assistant', label: 'Asystent AI do zadań powtarzalnych' },
          ],
        },
      },
    },
  },
  cz: {
    homeCardCta: 'Zobrazit řešení',
    servicesCardCta: 'Mám zájem',
    highlights: {
      lead: [
        'Struktura a messaging postavené na jednom jasném konverzním cíli.',
        'Rychlé spuštění a iterace podle výsledků kampaní.',
        'Připravené měření kvality leadů i výkonnosti reklamy.',
      ],
      corporate: [
        'Informační architektura, která buduje důvěru a podporuje obchod.',
        'Škálovatelný systém stránek pro služby, tým a obsah.',
        'Technické SEO a výkon jako pevný základ od začátku.',
      ],
      shopify: [
        'Čistá struktura katalogu a kolekcí pro lepší orientaci v nabídce.',
        'Checkout, platby a doprava nastavené pro nižší tření.',
        'Měření tržeb, propadů ve funnelu i retence zákazníků.',
      ],
      automation: [
        'Automatizace opakovaných interních i klientských procesů.',
        'AI workflow pro leady, podporu a reporting.',
        'Napojené dashboardy pro rozhodování podle dat v reálném čase.',
      ],
    },
    inquiry: {
      metaTitle: 'Poptávka služby',
      metaDescription: 'Krátký dotazník, díky kterému připravíme konkrétní další kroky pro váš projekt.',
      eyebrow: 'Rychlý dotazník',
      titlePrefix: 'Zájem o službu',
      subtitle: 'Odpovězte na pár praktických otázek a vrátíme se s konkrétním postupem.',
      serviceSummaryLabel: 'Na co se služba zaměřuje',
      formTitle: 'Projektový dotazník',
      formSubtitle: 'Krátký kontext nám pomůže připravit relevantní odpověď.',
      nameLabel: 'Jméno a firma',
      namePlaceholder: 'Vaše jméno, firma',
      emailLabel: 'E-mail',
      emailPlaceholder: 'vy@firma.cz',
      companyLabel: 'Role nebo tým (volitelné)',
      companyPlaceholder: 'Marketing lead, founder, produktový tým...',
      focusLabel: 'Hlavní priorita',
      websiteLabel: 'Současný web (volitelné)',
      websitePlaceholder: 'https://vasedomena.cz',
      messageLabel: 'Kontext a očekávání',
      messagePlaceholder: 'Co má tato služba zlepšit během nejbližších měsíců?',
      submitLabel: 'Odeslat poptávku',
      consent: 'V pracovních dnech odpovídáme do 24 hodin.',
      backLabel: 'Zpět na služby',
      serviceQuestion: {
        lead: {
          label: 'Co je teď pro váš lead web nejdůležitější?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'launch_speed', label: 'Rychlé spuštění kampaně' },
            { value: 'conversion_rate', label: 'Vyšší konverzní poměr' },
            { value: 'messaging', label: 'Lepší messaging a pozicování' },
            { value: 'crm_tracking', label: 'Měření a předání do CRM' },
          ],
        },
        corporate: {
          label: 'Jaká je největší slabina současného firemního webu?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'trust_positioning', label: 'Nízká důvěryhodnost / pozice značky' },
            { value: 'service_structure', label: 'Nejasná struktura služeb' },
            { value: 'multilingual_growth', label: 'Chybí škálovatelná vícejazyčnost' },
            { value: 'seo_visibility', label: 'Nízká viditelnost ve vyhledávání' },
          ],
        },
        shopify: {
          label: 'Jaká je hlavní priorita e-shopu právě teď?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'migration', label: 'Migrace ze současného řešení' },
            { value: 'checkout', label: 'Optimalizace checkoutu a plateb' },
            { value: 'catalog_ux', label: 'UX katalogu a filtrování' },
            { value: 'analytics_retention', label: 'Měření tržeb a retence' },
          ],
        },
        automation: {
          label: 'Který proces chcete automatizovat jako první?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'lead_routing', label: 'Routing a kvalifikace leadů' },
            { value: 'reporting', label: 'Reporting a KPI dashboardy' },
            { value: 'email_ops', label: 'E-mailové a operativní rutiny' },
            { value: 'ai_assistant', label: 'AI asistent pro opakované úkoly' },
          ],
        },
      },
    },
  },
  sk: {
    homeCardCta: 'Pozrieť riešenie',
    servicesCardCta: 'Mám záujem',
    highlights: {
      lead: [
        'Stratégia a štruktúra postavená na jednom jasnom konverznom cieli.',
        'Rýchle nasadenie a iterácie podľa reálnych výsledkov kampaní.',
        'Pripravené meranie kvality leadov aj výkonnosti reklamy.',
      ],
      corporate: [
        'Informačná architektúra, ktorá buduje dôveryhodnosť a obchodný kontext.',
        'Škálovateľný systém stránok pre služby, tím a obsah firmy.',
        'Technické SEO a výkon ako pevný základ od začiatku.',
      ],
      shopify: [
        'Čistá štruktúra katalógu a kolekcií pre lepšiu orientáciu zákazníka.',
        'Checkout, platby a doprava nastavené na čo najnižšie trenie.',
        'Meranie tržieb, poklesov vo funneli a retencie zákazníkov.',
      ],
      automation: [
        'Automatizácia opakovaných procesov v predaji, podpore aj interných tímoch.',
        'AI workflow pre leady, reporting a operatívne rutiny.',
        'Napojené dashboardy pre rozhodovanie na základe dát v reálnom čase.',
      ],
    },
    inquiry: {
      metaTitle: 'Dopyt služby',
      metaDescription: 'Krátky dotazník, vďaka ktorému pripravíme konkrétne ďalšie kroky pre váš projekt.',
      eyebrow: 'Rýchly dotazník',
      titlePrefix: 'Záujem o službu',
      subtitle: 'Odpovedzte na pár praktických otázok a ozveme sa s konkrétnym návrhom ďalších krokov.',
      serviceSummaryLabel: 'Na čo je táto služba zameraná',
      formTitle: 'Projektový dotazník',
      formSubtitle: 'Krátky kontext nám pomôže pripraviť relevantnú a vecnú odpoveď.',
      nameLabel: 'Meno a firma',
      namePlaceholder: 'Vaše meno, firma',
      emailLabel: 'E-mail',
      emailPlaceholder: 'vas@firma.sk',
      companyLabel: 'Rola alebo tím (voliteľné)',
      companyPlaceholder: 'Marketing lead, founder, produktový tím...',
      focusLabel: 'Hlavná priorita',
      websiteLabel: 'Aktuálny web (voliteľné)',
      websitePlaceholder: 'https://vasadomena.sk',
      messageLabel: 'Kontext a očakávania',
      messagePlaceholder: 'Čo má táto služba v najbližších mesiacoch zlepšiť vo vašom biznise?',
      submitLabel: 'Odoslať dopyt',
      consent: 'Počas pracovných dní odpovedáme do 24 hodín.',
      backLabel: 'Späť na služby',
      serviceQuestion: {
        lead: {
          label: 'Čo je pre vás pri lead webe teraz najdôležitejšie?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'launch_speed', label: 'Rýchle spustenie kampane' },
            { value: 'conversion_rate', label: 'Vyššia konverzia' },
            { value: 'messaging', label: 'Lepšie pozicionovanie a messaging' },
            { value: 'crm_tracking', label: 'Meranie a odovzdanie do CRM' },
          ],
        },
        corporate: {
          label: 'Aká je najväčšia slabina vášho súčasného firemného webu?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'trust_positioning', label: 'Nízka dôveryhodnosť / pozícia značky' },
            { value: 'service_structure', label: 'Nejasná štruktúra služieb' },
            { value: 'multilingual_growth', label: 'Chýba škálovateľná viacjazyčnosť' },
            { value: 'seo_visibility', label: 'Nízka viditeľnosť vo vyhľadávaní' },
          ],
        },
        shopify: {
          label: 'Aká je hlavná priorita e-shopu práve teraz?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'migration', label: 'Migrácia z aktuálneho riešenia' },
            { value: 'checkout', label: 'Optimalizácia checkoutu a platieb' },
            { value: 'catalog_ux', label: 'UX katalógu a filtrovanie' },
            { value: 'analytics_retention', label: 'Meranie tržieb a retencie' },
          ],
        },
        automation: {
          label: 'Ktorý proces chcete automatizovať ako prvý?',
          placeholder: 'Vyberte prioritu',
          options: [
            { value: 'lead_routing', label: 'Routing a predkvalifikácia leadov' },
            { value: 'reporting', label: 'Reporting a KPI dashboardy' },
            { value: 'email_ops', label: 'E-mailové a operatívne rutiny' },
            { value: 'ai_assistant', label: 'AI asistent na opakované úlohy' },
          ],
        },
      },
    },
  },
};

export const isServiceKey = (value: string): value is ServiceKey =>
  (serviceOrder as readonly string[]).includes(value);

export const getServiceKeyByIndex = (index: number): ServiceKey =>
  serviceOrder[index] ?? serviceOrder[0];

export const getServiceIndexByKey = (service: ServiceKey): number => serviceIndexMap[service] ?? 0;

export const getServiceAnchor = (service: ServiceKey): ServiceAnchorConfig => serviceAnchors[service];

export const getServiceFunnelCopy = (lang: Lang = defaultLang): ServiceFunnelCopy =>
  copyByLang[lang] ?? copyByLang[defaultLang];

export const getServiceInquiryPath = (lang: Lang, service: ServiceKey): string =>
  lang === defaultLang ? `/service-inquiry/${service}` : `/${lang}/service-inquiry/${service}`;
