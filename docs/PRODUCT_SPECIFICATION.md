# All-in-One Product Specification

## Core thesis

A single coherent Bangladesh finance + geography decision-intelligence application, not ten independent websites. The original research remains the authoritative record of the research findings: [verbatim report](research/ORIGINAL_DEEP_RESEARCH_REPORT.md). This document is an **implementation interpretation**, not a replacement.

## Intended users

Bangladesh's urban middle-income, upper-middle-income and affluent users, especially households, salaried professionals, housing decision-makers, and financially engaged consumers. Avoid defaulting to student exam tools, generic expense tracking, generic commodity-price pages, or a simple business directory.

## Unified user experience

- Home: clear value proposition, flagship neighborhood comparison, entry points to other modules.
- Explore: interactive Bangladesh/Dhaka map, filterable data layers, visible source and freshness indicators.
- Compare: side-by-side alternatives with transparent assumptions, sensitivity controls, uncertainty, and shareable URLs.
- Scenario Lab: salary, tax, housing, commute, borrowing, benefits, and other financial what-if analyses.
- Insights: source-attributed explainers and data visualizations; no unsupported financial claims.
- Saved scenarios: optional account feature later; anonymous use should be possible for the flagship MVP.
- Share: attractive, accessible result cards, stable URLs, Open Graph metadata, and privacy-safe defaults.

## Information architecture

```text
/
├── /explore
├── /basa-iq
│   ├── /compare
│   └── /area/[slug]
├── /taxlens
├── /cardmap
├── /nrb-money-route
├── /property-due-diligence
├── /salary-reality
├── /commute-cost
├── /home-loan
├── /entrepreneur-lab
├── /safe-yield
├── /methodology
└── /sources
```

Paths are proposals and may be adjusted after UX testing.

## Cross-module journeys

1. Housing: choose work location and household budget → map candidate neighborhoods → compare estimated rent, commute and true monthly cost → share comparison.
2. Employment: enter salary offer → model tax/net-pay assumptions → evaluate commute and location → share privacy-safe summary.
3. Spending: select venue/area and card types → compare currently verified offers, caps, terms and validity windows.
4. Property: explore area → examine sourced contextual layers → run due-diligence checklist → understand what must be independently verified.

## Data integrity requirements

Every material numeric claim needs a source, observation or effective date, geographical coverage, calculation method, and confidence/uncertainty label. Distinguish official records, user-submitted observations, modeled estimates, and illustrative demo data. Do not silently replace missing data with plausible invented values. Tax calculations must be versioned by applicable tax year and verified against official law and NBR guidance. Financial outputs are informational, not personalized regulated advice.

## MVP acceptance criteria

- Users can explore a curated, source-attributed set of Dhaka neighborhoods on mobile.
- Users can set budget and workplace/commute preferences and compare at least two areas.
- The app shows calculation assumptions, uncertainty, source dates, and missing-data states.
- Shareable comparison pages do not expose sensitive user inputs by default.
- Interactive map has usable keyboard and non-map list alternatives.
- No account required for basic use.
- End-to-end smoke tests and data validation tests pass.

## Design direction

Premium, restrained, institutional, data-first and trustworthy. Light surfaces, dark readable text, purposeful accent colors, uncluttered charts, clear Bengali/English copy, consistent map symbology, responsive layouts. Do not introduce random redesigns between modules.
