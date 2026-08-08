import { siShopify, siClaude } from 'simple-icons';

// Zdieľané SVG glyphy (viewBox 0 0 24 24) — renderujú sa cez set:html.
// fill: true = brand mark vyplnený currentColor, false = čiarová ikona.
export type IconGlyph = { fill: boolean; inner: string };

// Ikony 4 služieb v poradí lead / corporate / shopify / automation.
export const serviceIcons: IconGlyph[] = [
  // Lead weby — terč / mierenie na konverzie
  { fill: false, inner: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>' },
  // Firemné weby — budova
  { fill: false, inner: '<path d="M4 21V8l6-4 6 4v13"/><path d="M2 21h20"/><path d="M9 21v-5h2v5"/><path d="M8 9h.5M13 9h.5M8 12.5h.5M13 12.5h.5"/>' },
  // E-shopy — Shopify brand mark
  { fill: true, inner: `<path d="${siShopify.path}"/>` },
  // Automatizácie & AI — Claude brand mark
  { fill: true, inner: `<path d="${siClaude.path}"/>` },
];

// Ikony pre ďalšie odkazy v mega-menu (druhý stĺpec).
export const megaMenuLinkIcons: Record<'calculator' | 'process' | 'references', IconGlyph> = {
  // Kalkulačka
  calculator: { fill: false, inner: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 7h7"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h.01M15.5 18h.01"/>' },
  // Proces — kroky za sebou
  process: { fill: false, inner: '<path d="M4 17V7"/><path d="M4 7h9"/><path d="M13 7v10"/><path d="M13 17h7"/><path d="M17 14l3 3-3 3"/>' },
  // Referencie — hviezda
  references: { fill: false, inner: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z"/>' },
};
