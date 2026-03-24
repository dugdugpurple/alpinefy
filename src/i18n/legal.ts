import type { Lang } from './languages';

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  meta: { title: string; description: string };
  heading: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  sections: LegalSection[];
  contactCard: {
    title: string;
    description: string;
  };
};

type LegalCopy = {
  footer: {
    privacy: string;
    cookies: string;
  };
  privacy: LegalPageContent;
  cookies: LegalPageContent;
};

export const legalCopy: Record<Lang, LegalCopy> = {
  en: {
    footer: {
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
    },
    privacy: {
      meta: {
        title: 'Privacy Policy',
        description:
          'How Alpinefy processes personal data, for what purposes, with which legal basis and what rights you have under GDPR.',
      },
      heading: {
        eyebrow: 'Legal',
        title: 'Privacy Policy',
        subtitle:
          'This page explains how we process personal data when you browse the website, submit forms or contact us.',
      },
      lastUpdatedLabel: 'Last updated',
      lastUpdatedDate: '24 March 2026',
      sections: [
        {
          title: 'Data controller',
          paragraphs: [
            'Controller: Alpinefy',
            'Contact email: hello@alpinefy.com',
            'We process personal data in accordance with Regulation (EU) 2016/679 (GDPR) and applicable local law.',
          ],
        },
        {
          title: 'What data we process',
          paragraphs: ['Depending on interaction, we may process:'],
          bullets: [
            'Contact and inquiry data (name, email, message, company details).',
            'Newsletter subscription data (email and source context).',
            'Technical and usage data from analytics tools only after consent.',
          ],
        },
        {
          title: 'Purpose and legal basis',
          paragraphs: ['We process data only for legitimate, specific purposes:'],
          bullets: [
            'Responding to inquiries and pre-contract communication (Art. 6(1)(b) GDPR).',
            'Handling service requests and business communication (Art. 6(1)(b) and Art. 6(1)(f) GDPR).',
            'Analytics and UX improvement via GA4 and Clarity, based on consent (Art. 6(1)(a) GDPR).',
            'Security, abuse prevention and service continuity (Art. 6(1)(f) GDPR).',
          ],
        },
        {
          title: 'Retention period',
          paragraphs: [
            'We retain personal data only as long as necessary for the original purpose or legal obligations.',
            'Inquiry and project communication is usually retained up to 24 months unless a longer period is required by law or contract.',
          ],
        },
        {
          title: 'Recipients and processors',
          paragraphs: ['We use trusted processors that support our service delivery:'],
          bullets: [
            'Netlify (hosting and form delivery).',
            'Google (Google Tag Manager and Google Analytics 4, consent-based).',
            'Microsoft (Clarity, consent-based).',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: ['Under GDPR, you may request:'],
          bullets: [
            'Access to your data.',
            'Correction or completion of inaccurate data.',
            'Deletion or restriction of processing where applicable.',
            'Data portability where technically feasible.',
            'Withdrawal of consent at any time (for consent-based processing).',
            'Objection to processing based on legitimate interest.',
          ],
        },
      ],
      contactCard: {
        title: 'Data protection contact',
        description:
          'For any privacy request, write to hello@alpinefy.com. If you believe your rights were violated, you can also contact your local supervisory authority.',
      },
    },
    cookies: {
      meta: {
        title: 'Cookie Policy',
        description:
          'What cookies Alpinefy uses, how consent works and how you can manage analytics cookies on our website.',
      },
      heading: {
        eyebrow: 'Legal',
        title: 'Cookie Policy',
        subtitle:
          'This policy explains what cookies are used on the website and how you can control them.',
      },
      lastUpdatedLabel: 'Last updated',
      lastUpdatedDate: '24 March 2026',
      sections: [
        {
          title: 'How we use cookies',
          paragraphs: [
            'We use cookies to ensure core website operation and, with your permission, to measure performance and improve user experience.',
          ],
        },
        {
          title: 'Cookie categories',
          paragraphs: ['We use two categories:'],
          bullets: [
            'Necessary cookies: required for technical functionality and security. These are always active.',
            'Analytics cookies: GA4 and Microsoft Clarity for traffic and behavior insights. Activated only after consent.',
          ],
        },
        {
          title: 'Consent and control',
          paragraphs: [
            'When you visit the site, you can accept analytics, reject analytics or save a custom selection.',
            'You can reopen cookie settings at any time and change your preference. If analytics are turned off, related tracking cookies are removed.',
          ],
        },
        {
          title: 'Third-party services',
          paragraphs: ['When analytics consent is granted, data may be processed by:'],
          bullets: ['Google Analytics 4 (via Google Tag Manager).', 'Microsoft Clarity.'],
        },
        {
          title: 'Cookie lifetime',
          paragraphs: [
            'Some cookies are session-based and expire automatically when the browser is closed.',
            'Persistent cookies remain for a defined period or until deleted by the user/browser settings.',
          ],
        },
      ],
      contactCard: {
        title: 'Questions about cookies',
        description:
          'If you need more details about cookie usage, contact us at hello@alpinefy.com and we will provide the current list and context of use.',
      },
    },
  },
  de: {
    footer: {
      privacy: 'Datenschutz',
      cookies: 'Cookie-Richtlinie',
    },
    privacy: {
      meta: {
        title: 'Datenschutzerklärung',
        description:
          'Wie Alpinefy personenbezogene Daten verarbeitet, auf welcher Rechtsgrundlage und welche Rechte Sie nach DSGVO haben.',
      },
      heading: {
        eyebrow: 'Rechtliches',
        title: 'Datenschutzerklärung',
        subtitle:
          'Diese Seite erklärt, wie wir personenbezogene Daten verarbeiten, wenn Sie die Website nutzen oder uns kontaktieren.',
      },
      lastUpdatedLabel: 'Zuletzt aktualisiert',
      lastUpdatedDate: '24. März 2026',
      sections: [
        {
          title: 'Verantwortlicher',
          paragraphs: [
            'Verantwortlicher: Alpinefy',
            'Kontakt: hello@alpinefy.com',
            'Die Verarbeitung erfolgt gemäß DSGVO (EU) 2016/679 und geltendem nationalem Recht.',
          ],
        },
        {
          title: 'Welche Daten wir verarbeiten',
          paragraphs: ['Je nach Nutzung verarbeiten wir:'],
          bullets: [
            'Kontakt- und Anfragedaten (Name, E-Mail, Nachricht, Unternehmensangaben).',
            'Newsletter-Daten (E-Mail und Quellkontext).',
            'Technische Nutzungsdaten aus Analyse-Tools nur nach Einwilligung.',
          ],
        },
        {
          title: 'Zweck und Rechtsgrundlage',
          paragraphs: ['Wir verarbeiten Daten nur für klar definierte Zwecke:'],
          bullets: [
            'Beantwortung von Anfragen und vorvertragliche Kommunikation (Art. 6 Abs. 1 lit. b DSGVO).',
            'Leistungsbezogene Kommunikation und Projektabwicklung (Art. 6 Abs. 1 lit. b und f DSGVO).',
            'Analyse und UX-Optimierung via GA4 und Clarity mit Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
            'Sicherheit, Missbrauchsprävention und Systemstabilität (Art. 6 Abs. 1 lit. f DSGVO).',
          ],
        },
        {
          title: 'Speicherdauer',
          paragraphs: [
            'Wir speichern Daten nur so lange, wie es für den jeweiligen Zweck oder gesetzliche Pflichten erforderlich ist.',
            'Anfrage- und Projektkommunikation speichern wir in der Regel bis zu 24 Monate, sofern keine längere Aufbewahrung notwendig ist.',
          ],
        },
        {
          title: 'Empfänger und Auftragsverarbeiter',
          paragraphs: ['Zur Leistungserbringung nutzen wir ausgewählte Dienstleister:'],
          bullets: [
            'Netlify (Hosting und Formularverarbeitung).',
            'Google (Google Tag Manager und Google Analytics 4, einwilligungsbasiert).',
            'Microsoft (Clarity, einwilligungsbasiert).',
          ],
        },
        {
          title: 'Ihre Rechte',
          paragraphs: ['Nach DSGVO haben Sie insbesondere folgende Rechte:'],
          bullets: [
            'Auskunft über gespeicherte Daten.',
            'Berichtigung unrichtiger Daten.',
            'Löschung oder Einschränkung der Verarbeitung.',
            'Datenübertragbarkeit, soweit technisch möglich.',
            'Widerruf einer Einwilligung mit Wirkung für die Zukunft.',
            'Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen.',
          ],
        },
      ],
      contactCard: {
        title: 'Datenschutzkontakt',
        description:
          'Für Datenschutzanfragen schreiben Sie an hello@alpinefy.com. Zusätzlich können Sie sich an die zuständige Aufsichtsbehörde wenden.',
      },
    },
    cookies: {
      meta: {
        title: 'Cookie-Richtlinie',
        description:
          'Welche Cookies Alpinefy verwendet, wie Einwilligung funktioniert und wie Sie Analyse-Cookies steuern können.',
      },
      heading: {
        eyebrow: 'Rechtliches',
        title: 'Cookie-Richtlinie',
        subtitle: 'Diese Richtlinie beschreibt den Einsatz von Cookies auf dieser Website.',
      },
      lastUpdatedLabel: 'Zuletzt aktualisiert',
      lastUpdatedDate: '24. März 2026',
      sections: [
        {
          title: 'Einsatz von Cookies',
          paragraphs: [
            'Cookies sorgen für die technische Funktion der Website und helfen uns mit Ihrer Zustimmung bei Analyse und Optimierung.',
          ],
        },
        {
          title: 'Kategorien',
          paragraphs: ['Wir verwenden zwei Kategorien:'],
          bullets: [
            'Notwendige Cookies: für Funktion und Sicherheit, immer aktiv.',
            'Analyse-Cookies: GA4 und Microsoft Clarity, nur nach Einwilligung aktiv.',
          ],
        },
        {
          title: 'Einwilligung und Steuerung',
          paragraphs: [
            'Beim ersten Besuch können Sie Analyse akzeptieren, ablehnen oder Ihre Auswahl speichern.',
            'Die Einstellungen können jederzeit erneut geöffnet und geändert werden. Bei Ablehnung werden Analyse-Cookies entfernt.',
          ],
        },
        {
          title: 'Drittdienste',
          paragraphs: ['Bei erteilter Einwilligung können Daten von folgenden Diensten verarbeitet werden:'],
          bullets: ['Google Analytics 4 (über Google Tag Manager).', 'Microsoft Clarity.'],
        },
        {
          title: 'Speicherdauer von Cookies',
          paragraphs: [
            'Session-Cookies werden nach dem Schließen des Browsers gelöscht.',
            'Persistente Cookies bleiben bis zum Ablauf oder bis zur manuellen Löschung im Browser bestehen.',
          ],
        },
      ],
      contactCard: {
        title: 'Fragen zu Cookies',
        description:
          'Wenn Sie Details zur aktuellen Cookie-Nutzung benötigen, schreiben Sie uns an hello@alpinefy.com.',
      },
    },
  },
  pl: {
    footer: {
      privacy: 'Polityka prywatności',
      cookies: 'Polityka cookies',
    },
    privacy: {
      meta: {
        title: 'Polityka prywatności',
        description:
          'Jak Alpinefy przetwarza dane osobowe, na jakiej podstawie prawnej i jakie prawa przysługują Ci zgodnie z RODO.',
      },
      heading: {
        eyebrow: 'Informacje prawne',
        title: 'Polityka prywatności',
        subtitle:
          'Ta strona wyjaśnia, jak przetwarzamy dane osobowe podczas korzystania z witryny i formularzy kontaktowych.',
      },
      lastUpdatedLabel: 'Ostatnia aktualizacja',
      lastUpdatedDate: '24 marca 2026',
      sections: [
        {
          title: 'Administrator danych',
          paragraphs: [
            'Administrator: Alpinefy',
            'Kontakt: hello@alpinefy.com',
            'Dane przetwarzamy zgodnie z RODO (UE) 2016/679 oraz właściwymi przepisami krajowymi.',
          ],
        },
        {
          title: 'Zakres przetwarzanych danych',
          paragraphs: ['W zależności od interakcji możemy przetwarzać:'],
          bullets: [
            'Dane z formularza kontaktowego (imię, e-mail, wiadomość, dane firmy).',
            'Dane newslettera (adres e-mail i kontekst źródła).',
            'Dane techniczne i behawioralne z narzędzi analitycznych tylko po zgodzie.',
          ],
        },
        {
          title: 'Cele i podstawa prawna',
          paragraphs: ['Przetwarzamy dane wyłącznie w uzasadnionych celach:'],
          bullets: [
            'Obsługa zapytań i komunikacji przed zawarciem umowy (art. 6 ust. 1 lit. b RODO).',
            'Realizacja współpracy i komunikacja operacyjna (art. 6 ust. 1 lit. b i f RODO).',
            'Analityka i ulepszanie UX przez GA4 i Clarity na podstawie zgody (art. 6 ust. 1 lit. a RODO).',
            'Bezpieczeństwo, przeciwdziałanie nadużyciom i ciągłość działania (art. 6 ust. 1 lit. f RODO).',
          ],
        },
        {
          title: 'Okres przechowywania',
          paragraphs: [
            'Dane przechowujemy tylko przez okres niezbędny do realizacji celu lub obowiązków prawnych.',
            'Komunikację ofertową/projektową przechowujemy zwykle do 24 miesięcy, chyba że przepisy lub umowa wymagają dłuższego okresu.',
          ],
        },
        {
          title: 'Odbiorcy i podmioty przetwarzające',
          paragraphs: ['Korzystamy ze sprawdzonych partnerów technologicznych:'],
          bullets: [
            'Netlify (hosting i obsługa formularzy).',
            'Google (Google Tag Manager i Google Analytics 4, po zgodzie).',
            'Microsoft (Clarity, po zgodzie).',
          ],
        },
        {
          title: 'Twoje prawa',
          paragraphs: ['Na mocy RODO masz prawo do:'],
          bullets: [
            'Dostępu do swoich danych.',
            'Sprostowania nieprawidłowych danych.',
            'Usunięcia lub ograniczenia przetwarzania w uzasadnionych przypadkach.',
            'Przenoszenia danych tam, gdzie jest to technicznie możliwe.',
            'Wycofania zgody w dowolnym momencie.',
            'Wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie.',
          ],
        },
      ],
      contactCard: {
        title: 'Kontakt w sprawach danych',
        description:
          'W sprawach prywatności napisz na hello@alpinefy.com. Możesz też skontaktować się z właściwym organem nadzorczym.',
      },
    },
    cookies: {
      meta: {
        title: 'Polityka cookies',
        description:
          'Jakie cookies wykorzystuje Alpinefy, jak działa zgoda i jak zarządzać analityką na stronie.',
      },
      heading: {
        eyebrow: 'Informacje prawne',
        title: 'Polityka cookies',
        subtitle: 'Ta polityka opisuje zasady użycia plików cookies w serwisie.',
      },
      lastUpdatedLabel: 'Ostatnia aktualizacja',
      lastUpdatedDate: '24 marca 2026',
      sections: [
        {
          title: 'Wykorzystanie cookies',
          paragraphs: [
            'Cookies umożliwiają prawidłowe działanie strony oraz, po Twojej zgodzie, analizę ruchu i ulepszanie doświadczenia użytkownika.',
          ],
        },
        {
          title: 'Kategorie cookies',
          paragraphs: ['W serwisie używamy dwóch kategorii:'],
          bullets: [
            'Niezbędne cookies: wymagane do działania i bezpieczeństwa strony, zawsze aktywne.',
            'Analityczne cookies: GA4 i Microsoft Clarity, aktywowane dopiero po zgodzie.',
          ],
        },
        {
          title: 'Zgoda i zmiana decyzji',
          paragraphs: [
            'Przy pierwszej wizycie możesz zaakceptować analitykę, odrzucić ją lub zapisać własny wybór.',
            'Ustawienia cookies możesz otworzyć ponownie i zmienić decyzję w dowolnym momencie.',
          ],
        },
        {
          title: 'Usługi zewnętrzne',
          paragraphs: ['Po wyrażeniu zgody dane analityczne mogą być przetwarzane przez:'],
          bullets: ['Google Analytics 4 (przez Google Tag Manager).', 'Microsoft Clarity.'],
        },
        {
          title: 'Okres działania cookies',
          paragraphs: [
            'Część cookies działa tylko w trakcie sesji i znika po zamknięciu przeglądarki.',
            'Cookies trwałe pozostają przez określony czas lub do ręcznego usunięcia.',
          ],
        },
      ],
      contactCard: {
        title: 'Pytania o cookies',
        description:
          'Jeśli potrzebujesz szczegółów o aktualnym wykorzystaniu cookies, napisz do nas: hello@alpinefy.com.',
      },
    },
  },
  cz: {
    footer: {
      privacy: 'Zásady ochrany soukromí',
      cookies: 'Zásady cookies',
    },
    privacy: {
      meta: {
        title: 'Zásady ochrany soukromí',
        description:
          'Jak Alpinefy zpracovává osobní údaje, na jakém právním základě a jaká máte práva podle GDPR.',
      },
      heading: {
        eyebrow: 'Právní informace',
        title: 'Zásady ochrany soukromí',
        subtitle:
          'Na této stránce najdete, jak zpracováváme osobní údaje při návštěvě webu a při kontaktu přes formuláře.',
      },
      lastUpdatedLabel: 'Poslední aktualizace',
      lastUpdatedDate: '24. března 2026',
      sections: [
        {
          title: 'Správce údajů',
          paragraphs: [
            'Správce: Alpinefy',
            'Kontakt: hello@alpinefy.com',
            'Údaje zpracováváme v souladu s GDPR (EU) 2016/679 a platnou legislativou.',
          ],
        },
        {
          title: 'Jaké údaje zpracováváme',
          paragraphs: ['Podle typu interakce můžeme zpracovávat:'],
          bullets: [
            'Údaje z kontaktního formuláře (jméno, e-mail, zpráva, firemní údaje).',
            'Údaje pro newsletter (e-mail a kontext zdroje).',
            'Technická a behaviorální data z analytiky pouze po souhlasu.',
          ],
        },
        {
          title: 'Účel a právní základ',
          paragraphs: ['Osobní údaje zpracováváme pouze pro jasně vymezené účely:'],
          bullets: [
            'Vyřízení poptávky a před-smluvní komunikace (čl. 6 odst. 1 písm. b GDPR).',
            'Projektová komunikace a plnění služeb (čl. 6 odst. 1 písm. b a f GDPR).',
            'Analytika a zlepšování UX pomocí GA4 a Clarity na základě souhlasu (čl. 6 odst. 1 písm. a GDPR).',
            'Bezpečnost, prevence zneužití a stabilita provozu (čl. 6 odst. 1 písm. f GDPR).',
          ],
        },
        {
          title: 'Doba uchování',
          paragraphs: [
            'Údaje uchováváme jen po dobu nutnou pro daný účel nebo zákonnou povinnost.',
            'Komunikaci k poptávce/projektu obvykle uchováváme maximálně 24 měsíců, pokud není vyžadována delší doba.',
          ],
        },
        {
          title: 'Příjemci a zpracovatelé',
          paragraphs: ['Pro provoz využíváme ověřené partnery:'],
          bullets: [
            'Netlify (hosting a doručování formulářů).',
            'Google (Google Tag Manager a Google Analytics 4, po souhlasu).',
            'Microsoft (Clarity, po souhlasu).',
          ],
        },
        {
          title: 'Vaše práva',
          paragraphs: ['Podle GDPR máte zejména právo na:'],
          bullets: [
            'Přístup k osobním údajům.',
            'Opravu nepřesných údajů.',
            'Výmaz nebo omezení zpracování v relevantních případech.',
            'Přenositelnost údajů, pokud je technicky možná.',
            'Odvolání souhlasu kdykoliv.',
            'Námitku proti zpracování na základě oprávněného zájmu.',
          ],
        },
      ],
      contactCard: {
        title: 'Kontakt pro ochranu údajů',
        description:
          'V případě dotazů k ochraně údajů nás kontaktujte na hello@alpinefy.com. Můžete se také obrátit na příslušný dozorový úřad.',
      },
    },
    cookies: {
      meta: {
        title: 'Zásady cookies',
        description:
          'Jaké cookies Alpinefy používá, jak funguje souhlas a jak můžete spravovat analytická data.',
      },
      heading: {
        eyebrow: 'Právní informace',
        title: 'Zásady cookies',
        subtitle: 'Tato stránka popisuje použití cookies na webu Alpinefy.',
      },
      lastUpdatedLabel: 'Poslední aktualizace',
      lastUpdatedDate: '24. března 2026',
      sections: [
        {
          title: 'Jak cookies používáme',
          paragraphs: [
            'Cookies používáme pro technické fungování webu a po vašem souhlasu také pro analytiku a zlepšování UX.',
          ],
        },
        {
          title: 'Kategorie cookies',
          paragraphs: ['Používáme dvě kategorie:'],
          bullets: [
            'Nezbytné cookies: nutné pro funkci a bezpečnost webu, vždy aktivní.',
            'Analytické cookies: GA4 a Microsoft Clarity, aktivní pouze po souhlasu.',
          ],
        },
        {
          title: 'Souhlas a změna nastavení',
          paragraphs: [
            'Při první návštěvě můžete analytiku přijmout, odmítnout nebo uložit vlastní výběr.',
            'Nastavení cookies lze kdykoliv znovu otevřít a změnit.',
          ],
        },
        {
          title: 'Služby třetích stran',
          paragraphs: ['Po udělení souhlasu mohou být data zpracována nástroji:'],
          bullets: ['Google Analytics 4 (přes Google Tag Manager).', 'Microsoft Clarity.'],
        },
        {
          title: 'Doba platnosti cookies',
          paragraphs: [
            'Session cookies se mažou po zavření prohlížeče.',
            'Trvalé cookies zůstávají po definovanou dobu nebo do ručního smazání.',
          ],
        },
      ],
      contactCard: {
        title: 'Dotazy ke cookies',
        description:
          'Pokud potřebujete detailní informace o aktuálním použití cookies, napište nám na hello@alpinefy.com.',
      },
    },
  },
  sk: {
    footer: {
      privacy: 'Ochrana súkromia',
      cookies: 'Zásady cookies',
    },
    privacy: {
      meta: {
        title: 'Zásady ochrany súkromia',
        description:
          'Ako Alpinefy spracúva osobné údaje, na akom právnom základe a aké práva máte podľa GDPR.',
      },
      heading: {
        eyebrow: 'Právne informácie',
        title: 'Zásady ochrany súkromia',
        subtitle:
          'Na tejto stránke nájdete, ako spracúvame osobné údaje pri návšteve webu a pri komunikácii cez formuláre.',
      },
      lastUpdatedLabel: 'Posledná aktualizácia',
      lastUpdatedDate: '24. marca 2026',
      sections: [
        {
          title: 'Prevádzkovateľ',
          paragraphs: [
            'Prevádzkovateľ: Alpinefy',
            'Kontakt: hello@alpinefy.com',
            'Osobné údaje spracúvame v súlade s GDPR (EÚ) 2016/679 a príslušnými právnymi predpismi.',
          ],
        },
        {
          title: 'Aké údaje spracúvame',
          paragraphs: ['Podľa typu interakcie môžeme spracúvať:'],
          bullets: [
            'Kontaktné údaje z formulárov (meno, e-mail, správa, firemné údaje).',
            'Údaje pre newsletter (e-mail a kontext zdroja).',
            'Technické a behaviorálne údaje z analytiky iba po udelení súhlasu.',
          ],
        },
        {
          title: 'Účel a právny základ',
          paragraphs: ['Údaje spracúvame len na jasne určené účely:'],
          bullets: [
            'Vybavenie dopytu a predzmluvná komunikácia (čl. 6 ods. 1 písm. b GDPR).',
            'Projektová komunikácia a poskytovanie služieb (čl. 6 ods. 1 písm. b a f GDPR).',
            'Analytika a zlepšovanie UX cez GA4 a Clarity na základe súhlasu (čl. 6 ods. 1 písm. a GDPR).',
            'Bezpečnosť, prevencia zneužitia a stabilita systému (čl. 6 ods. 1 písm. f GDPR).',
          ],
        },
        {
          title: 'Doba uchovávania',
          paragraphs: [
            'Údaje uchovávame iba po dobu nevyhnutnú na naplnenie účelu alebo zákonnej povinnosti.',
            'Komunikáciu k dopytu/projektu uchovávame spravidla do 24 mesiacov, ak právny alebo zmluvný rámec nevyžaduje dlhšie obdobie.',
          ],
        },
        {
          title: 'Príjemcovia a sprostredkovatelia',
          paragraphs: ['Na poskytovanie služieb využívame overených partnerov:'],
          bullets: [
            'Netlify (hosting a doručovanie formulárov).',
            'Google (Google Tag Manager a Google Analytics 4, na základe súhlasu).',
            'Microsoft (Clarity, na základe súhlasu).',
          ],
        },
        {
          title: 'Vaše práva',
          paragraphs: ['Podľa GDPR máte najmä právo na:'],
          bullets: [
            'Prístup k osobným údajom.',
            'Opravu nepresných údajov.',
            'Výmaz alebo obmedzenie spracúvania v relevantných prípadoch.',
            'Prenositeľnosť údajov, ak je technicky možná.',
            'Odvolanie súhlasu kedykoľvek.',
            'Namietanie spracúvania na základe oprávneného záujmu.',
          ],
        },
      ],
      contactCard: {
        title: 'Kontakt pre ochranu údajov',
        description:
          'Ak máte otázky k ochrane súkromia, napíšte na hello@alpinefy.com. Môžete sa obrátiť aj na príslušný dozorný orgán.',
      },
    },
    cookies: {
      meta: {
        title: 'Zásady používania cookies',
        description:
          'Aké cookies Alpinefy používa, ako funguje súhlas a ako viete spravovať analytické cookies.',
      },
      heading: {
        eyebrow: 'Právne informácie',
        title: 'Zásady používania cookies',
        subtitle: 'Táto stránka vysvetľuje použitie cookies na webe Alpinefy.',
      },
      lastUpdatedLabel: 'Posledná aktualizácia',
      lastUpdatedDate: '24. marca 2026',
      sections: [
        {
          title: 'Ako používame cookies',
          paragraphs: [
            'Cookies používame na technické fungovanie webu a po vašom súhlase aj na analytiku a zlepšovanie používateľského zážitku.',
          ],
        },
        {
          title: 'Kategórie cookies',
          paragraphs: ['Používame dve kategórie:'],
          bullets: [
            'Nevyhnutné cookies: potrebné pre funkčnosť a bezpečnosť webu, vždy aktívne.',
            'Analytické cookies: GA4 a Microsoft Clarity, aktívne iba po udelení súhlasu.',
          ],
        },
        {
          title: 'Súhlas a zmena nastavení',
          paragraphs: [
            'Pri prvej návšteve môžete analytiku prijať, odmietnuť alebo uložiť vlastný výber.',
            'Nastavenia cookies je možné kedykoľvek znovu otvoriť a upraviť.',
          ],
        },
        {
          title: 'Služby tretích strán',
          paragraphs: ['Po udelení súhlasu môžu byť údaje spracúvané nástrojmi:'],
          bullets: ['Google Analytics 4 (cez Google Tag Manager).', 'Microsoft Clarity.'],
        },
        {
          title: 'Doba platnosti cookies',
          paragraphs: [
            'Session cookies sa vymažú po zatvorení prehliadača.',
            'Trvalé cookies zostávajú počas definovaného obdobia alebo do manuálneho zmazania.',
          ],
        },
      ],
      contactCard: {
        title: 'Otázky ku cookies',
        description:
          'Ak potrebujete detailnejšie informácie o aktuálnom používaní cookies, napíšte nám na hello@alpinefy.com.',
      },
    },
  },
};

export const getLegalCopy = (lang: Lang) => legalCopy[lang] ?? legalCopy.en;
