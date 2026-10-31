# Frontend Design Engineering Rules (Score 98/100 Pipeline)

1. DESIGN SYSTEM GROUNDING (Awesome DESIGN.md):
   - Always read `./DESIGN.md` before creating or modifying any UI component.
   - Strictly enforce the exact hex colors, typography scale, spacing tokens, border radius, and shadow tokens defined in `./DESIGN.md`.

2. ANTI-SLOP GOVERNANCE (Impeccable & Taste-Skill):
   - Never use generic purple-to-blue gradient text headlines.
   - Never place emoji icon tiles above feature headings; use clean SVG icons instead.
   - Run `/impeccable audit` and `/impeccable polish` across COMPONENTS, TYPOGRAPHY, and BACKGROUND layers.
   - Respect calibrated Taste parameters: BOLD (Design Variance), MOTION (Motion Intensity), and DENSITY (Visual Density).

3. UX & ACCESSIBILITY AUDIT (Vercel Web Design Guidelines):
   - Every interactive button or close icon must have a minimum hit target of 24x24px (44x44px on mobile touch targets).
   - Never disable browser zoom (`user-scalable=no` or `maximum-scale=1` is strictly forbidden).
   - Every async form submission or action button must display an explicit `<Spinner />` loading state while pending.

4. CLOSED-LOOP BROWSER QA (Microsoft Playwright MCP):
   - After building or updating any page, open the live localhost URL using Playwright MCP.
   - Click interactive buttons, take a real browser screenshot (`take_screenshot`), verify that no close (`X`) button or CTA overflows its card or overlaps text, and fix all visual bugs before completing the task.

## Project-specific integration (applies to Antigravity and other agents)

- Read `README.md`, `DESIGN.md`, `docs/ANTIGRAVITY_INSTRUCTIONS.md`, and `docs/research/ORIGINAL_DEEP_RESEARCH_REPORT.md` before implementation.
- Build one Next.js App Router + TypeScript + Tailwind + shadcn/ui platform. Do not substitute unrelated frameworks or alter approved UI during refactors.
- Read `docs/FRONTEND_DESIGN_SKILLS.md` for tool setup and portability caveats.
- The original user-supplied prompt above is retained faithfully; the named slash commands and MCP actions only work when their tools are installed and supported by the current coding agent. Do not claim they ran without evidence.
- Use Playwright MCP when available; otherwise report the missing integration and use a verified equivalent browser QA workflow with actual screenshots and interaction checks.
- Run typecheck, lint, tests and visual QA when the implementation exists; document outcomes and any skipped checks.
- No fake finance data, fabricated source attribution or unsupported product claims.
