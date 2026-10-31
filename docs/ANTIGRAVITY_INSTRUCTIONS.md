# Instructions for Google Antigravity

## Mission

Implement the **Bangladesh Finance Map** all-in-one Next.js application in this repository. Do not substitute generic calculators, directories, copied competitor pages or a set of unrelated websites.

## Required reading order

1. `README.md`
2. `docs/research/ORIGINAL_DEEP_RESEARCH_REPORT.md` — read **in full**, including sources, caveats, tables and roadmap.
3. `docs/PRODUCT_SPECIFICATION.md`
4. `docs/ARCHITECTURE.md`
5. `docs/MODULES_AND_ROADMAP.md`

## Non-negotiable constraints

- **Preserve the original research file verbatim.** Never rewrite, condense or overwrite it. Add corrections in a separate dated amendment with supporting sources.
- Build **one** Next.js App Router application with TypeScript and shared visual/data architecture.
- Preserve any existing approved visual design when refactoring; no unrequested changes to spacing, color, typography, layout or front-end behavior.
- No invented financial data, map measurements, rent prices, property valuations, offers, tax rules or sources. Missing values must appear as missing, estimated, or demo, as appropriate.
- Use official or licensed sources; record URL, date, scope, update schedule, license and limitations.
- No deceptive precision: explicitly show methodology, data coverage and confidence.
- Do not introduce mandatory login for first-use neighborhood comparisons.
- Never commit credentials, personal data, API secrets or proprietary datasets.
- Never mark an unbuilt module as complete.
- Build mobile-first, accessible, performant and with Bengali/English-ready copy.

## First implementation task

1. Inspect the repository and produce a concise implementation plan, referencing the research.
2. Bootstrap Next.js App Router + TypeScript + Tailwind with strict lint/type checking, without deleting or overwriting docs.
3. Implement reusable layout, navigation, typography, tokens, buttons, inputs, cards, source labels, empty/loading/error states.
4. Create a working **বাসাIQ** vertical slice with explicitly labeled fixture/demo data if no licensed validated dataset exists.
5. Add MapLibre GL JS as a client-side map module with configurable tiles and correct attribution; avoid hard-coded paid tokens.
6. Add a neighborhood comparison flow, scenario assumptions and privacy-safe share link.
7. Add tests for calculations, validation, missing-data handling, and at least one mobile user journey.
8. Document setup, commands, environment variables, provider decisions and limitations in README or dedicated docs.

## Working protocol

- Work in small, reviewable commits or pull requests.
- For every task report: files changed, behavior implemented, tests run, open questions and source provenance.
- Prefer a vertical slice that actually works to ten polished but empty pages.
- Ask for a decision only when genuinely blocked by product or source ambiguity.
- Keep the existing README, full original research and planning docs intact.
- Synchronize from the remote repository before making edits, and check for conflicting changes.
- After a decision is made in ChatGPT and committed, pull it before implementing.

## Definition of done

The feature runs, handles missing data, has traceable inputs/outputs, works on mobile, does not leak secrets, includes appropriate tests and updates documentation. A mock/demo screen is **not** a production-ready finance or map service.
