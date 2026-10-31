# DESIGN.md — Bangladesh Finance Map

## Purpose and authority
This is the project's design-system contract for Next.js + Tailwind CSS + **shadcn/ui**. All design agents must read it before UI changes. The five third-party skill references are documented in `docs/FRONTEND_DESIGN_SKILLS.md`. The original user-provided pack is preserved in `docs/references/FRONTEND_DESIGN_PACK_ORIGINAL.txt`.

## Brand direction
A premium, credible, restrained, modern financial intelligence interface for Bangladesh's urban professional and affluent audiences. Editorial clarity over gimmicks. Avoid generic AI dashboard appearance, excessive gradients, heavy decorative cards, and emoji-as-feature-icons.

## Provisional design tokens (require visual approval before declaring final brand identity)
These are **initial project tokens**, not copied from Stripe, Linear or another brand. Do not claim that a third-party DESIGN.md has already been adopted.

| Token | Hex / value |
|---|---|
| --background | #F8FAFC |
| --foreground | #111827 |
| --card | #FFFFFF |
| --card-foreground | #111827 |
| --primary | #0F766E |
| --primary-foreground | #FFFFFF |
| --secondary | #EEF4F3 |
| --secondary-foreground | #164E49 |
| --muted | #F1F5F9 |
| --muted-foreground | #475569 |
| --border | #DDE5E9 |
| --destructive | #B42318 |
| --ring | #0F766E |

Typography: readable sans-serif, favor Roboto for Latin text and an appropriate well-rendered Bengali font for Bangla; load fonts responsibly. Base body 16px; headings 32/28/24/20px; supporting text 14px minimum when feasible. Do not use italic as the default presentation style.

Spacing: 4px base; 4/8/12/16/24/32/48/64px scale. Radius: 8px inputs, 12px cards, 16px large surfaces. Shadows: subtle only; prefer borders and whitespace.

## shadcn/ui implementation
Use shadcn/ui as the accessible component foundation, with centralized theme tokens and project-owned wrappers where useful. Avoid arbitrary one-off color literals and inconsistent component variants. Keep map legends, comparisons, tables, forms, charts and share cards visually cohesive.

## Taste calibration (initial defaults, tune with review)
- BOLD: 35/100 — understated premium visual identity, not sterile.
- MOTION: 20/100 — functional transitions; respect reduced-motion.
- DENSITY: 55/100 — information-rich, not cluttered.

These are conceptual parameters; do not assume a particular tool accepts this exact syntax.

## Non-negotiable UI/UX
- No generic purple-to-blue gradient headline.
- No decorative emoji tiles above feature headings; use SVG iconography.
- Responsive mobile-first layouts and touch targets of at least 44×44px on mobile where feasible.
- Keyboard accessibility, visible focus, semantic headings and labels, meaningful error messages, contrast checks.
- Never disable browser zoom.
- Explicit pending/loading feedback for async actions; prevent accidental duplicate submissions.
- Real source labels, observation dates, uncertainty and clear estimated/demo indicators for financial data.
- Map controls must not obscure attribution; provide non-map accessible alternatives.
- Every page requires screenshot review at mobile and desktop breakpoints before sign-off.

## Change control
Do not silently replace the entire palette or redesign existing approved UI. Changes to core tokens require an explicit documented decision and visual regression review. Any inspiration from a third-party design system must be adapted, not misrepresented as original or copied wholesale.
