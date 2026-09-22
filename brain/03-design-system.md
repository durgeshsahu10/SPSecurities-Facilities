# Project Brain — Design System

Source of truth: `src/styles.css`. **Never hardcode colors in components.**

## Brand rationale

The simplified logo is a gold crest with “SP Securities” on black. The site keeps that identity on
a **light** base: ivory background, near-black ink text, and gold accents. The full header, hero
overlays, CTA bands and footer use black.

## Colour tokens (oklch)

| Token                                  | Purpose                                     |
| -------------------------------------- | ------------------------------------------- |
| `--background` `oklch(0.995 0.004 95)` | Warm ivory page background                  |
| `--foreground` / `--ink`               | Near-black body and heading text            |
| `--ink-soft`                           | Secondary text, nav links                   |
| `--gold` `oklch(0.78 0.132 86)`        | Primary brand gold (accent)                 |
| `--gold-soft`                          | Highlight inside gradients                  |
| `--gold-deep`                          | Readable gold for small text/icons on light |
| `--sand`                               | Alternate section background                |
| `--muted-foreground`                   | Body copy                                   |
| `--border`, `--input`, `--ring`        | Hairlines and focus rings                   |

Tailwind classes: `bg-background`, `text-ink`, `text-gold-deep`, `bg-sand`, `text-accent`, etc.

## Composed effects

| Variable / utility                      | Use                                           |
| --------------------------------------- | --------------------------------------------- |
| `--gradient-gold` / `.bg-gradient-gold` | Buttons, icon chips, category pills           |
| `.text-gradient-gold`                   | Gold gradient headline words and stat numbers |
| `--gradient-ink` / `.bg-gradient-ink`   | Topbar, CTA band, footer, page-hero backdrop  |
| `.shadow-gold`                          | Glow under gold buttons                       |
| `.shadow-card`                          | Soft elevation for cards                      |
| `.eyebrow`                              | Uppercase gold kicker label above headings    |
| `.gold-rule`                            | 72px gold gradient underline under headings   |

## Typography

- Headings: **Playfair Display** (500/600/700) — echoes the serif wordmark in the logo.
- Body/UI: **Plus Jakarta Sans** (400–700) — modern geometric sans.
- Loaded via `<link>` in `src/routes/__root.tsx` (never `@import` in CSS on Tailwind v4).
- Tokens: `--font-display`, `--font-sans`.

## Layout conventions

- Page container: `mx-auto max-w-7xl px-4`; section rhythm `py-20`.
- Alternating section backgrounds: `background` → `sand` → `gradient-ink`.
- Cards: `rounded-xl border border-border bg-card p-7 shadow-card`, hover `-translate-y-1`.
- Page heroes: dark image backdrop at 30% opacity + eyebrow, H1, gold rule, lead paragraph.
- Light theme only — no dark-mode toggle by design.

## Shared components

| Component                               | File                                                                             |
| --------------------------------------- | -------------------------------------------------------------------------------- |
| `SiteHeader`                            | `src/components/site-header.tsx` (topbar, logo, services dropdown, mobile menu)  |
| `SiteFooter`                            | `src/components/site-footer.tsx` (services, areas, contact, legal + admin links) |
| `PageHero`, `SectionHeading`, `CtaBand` | `src/components/page-hero.tsx`                                                   |
| `LegalPage`                             | `src/components/legal-page.tsx` (privacy / terms / cookies layout)               |
