# Tracking Queue (Alpinefy)

Aktualizované: 24. 03. 2026

## Hotové

- GTM container nasadený na webe.
- GA4 base tag beží cez GTM.
- Microsoft Clarity beží cez GTM.
- Search Console property overená + sitemap odoslaná.
- Kontakt formulár rozšírený o kvalifikačné polia (`service_interest`, `budget_range`, `timeline_preference`).
- Lead atribúcia pripravená v formulároch (`utm_*`, `gclid`, `fbclid`, `msclkid`, `landing_page`, `referrer`).
- Event do dataLayer pri odoslaní kvalifikovaného formulára: `contact_form_intent_submit`.

## Najbližšie kroky (zajtra)

- Dokončiť lead tracking v GTM + GA4:
  - Trigger `Custom Event`: `contact_form_success`
  - Trigger `Custom Event`: `newsletter_signup_success`
  - GA4 Event tag: `generate_lead` (na `contact_form_success`)
  - GA4 Event tag: `sign_up` (na `newsletter_signup_success`)
  - Publikovať v GTM
  - V GA4 označiť `generate_lead` a `sign_up` ako Key events

- Cookie lišta tracking (dopĺňame do merania):
  - `consent_banner_view`
  - `consent_accept_all`
  - `consent_reject_all`
  - `consent_save_custom`
  - `consent_reopen`
  - `cookie_consent_update` (už je v kóde; overiť mapovanie v GTM/GA4)

## Ďalšie (po lead trackingu)

- AI chat bubble výber + nasadenie
  - porovnanie 2-3 nástrojov (cena/funkcie/GDPR/integrácie)
  - eventy pre meranie: otvorenie widgetu, prvá správa, odoslanie leadu z chatu
