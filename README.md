# Bangladesh Finance Map

**An all-in-one, research-driven financial and geographic decision-intelligence platform for Bangladesh.**

> Status: research preserved; architecture and implementation planning initiated. The application is not yet implemented.

## Vision

Build one cohesive Next.js application that helps Bangladesh's urban middle-income, upper-middle-income, and affluent users make better location, housing, tax, spending, and financial decisions. Do **not** build a generic map directory, property listing marketplace, or collection of disconnected calculators. The differentiator is **trusted data + personalized decisions + interactive geographic exploration + shareable results**.

## Source of truth

**Read the entire [Original Deep Research Report](docs/research/ORIGINAL_DEEP_RESEARCH_REPORT.md) before designing or implementing features.** That file is a verbatim archival copy of the original research, not a summary. Preserve it unchanged. Its recommendations, figures, dates, citations, limitations and assumptions are research inputs, not automatically verified live facts.

## Ten research concepts

| Priority | Module | Purpose |
|---|---|---|
| 1 | বাসাIQ / Dhaka Decision Map | Neighborhood financial and lifestyle decision engine |
| 2 | TaxLens BD | Salary, tax, rebate, and financial scenario modeling |
| 3 | CardMap BD | Location-aware card-benefit comparisons |
| 4 | NRB Money Route | Remittance and FX route planning |
| 5 | Property Due-Diligence Map | Property risk and document-checking guidance |
| 6 | Salary Reality Index BD | Compensation and purchasing-power comparisons |
| 7 | Commute Cost Map | Travel time and true commute cost |
| 8 | Home-Loan Affordability Map | Home-finance affordability by area |
| 9 | Entrepreneur Cashflow & Tax Scenario Lab | Business cash-flow and tax scenarios |
| 10 | Bangladesh Safe-Yield Radar | Source-attributed savings/yield comparisons |

**Product strategy:** One app, shared design system and infrastructure, independent modules. Start with **বাসাIQ** as the flagship MVP, then small acquisition tools such as TaxLens Job Offer and Commute Cost, then other modules according to source readiness and validation. All ten concepts remain documented; listing a module does not imply it has been built.

## Documentation

- [Original research (verbatim)](docs/research/ORIGINAL_DEEP_RESEARCH_REPORT.md)
- [All-in-one product specification](docs/PRODUCT_SPECIFICATION.md)
- [Architecture and technical decisions](docs/ARCHITECTURE.md)
- [Antigravity implementation instructions](docs/ANTIGRAVITY_INSTRUCTIONS.md)
- [Module inventory and phased delivery](docs/MODULES_AND_ROADMAP.md)

## Proposed technology

- Next.js App Router, TypeScript, Tailwind CSS
- MapLibre GL JS with a licensed map tile/style provider (evaluate MapTiler, Mapbox, or other appropriate providers)
- PostgreSQL with PostGIS when spatial persistence and spatial queries become necessary
- Accessible, mobile-first Bangla/English-ready interface
- Server-side data ingestion, source provenance, timestamps, validation, caching and rate limits
- Shareable URLs and server-generated Open Graph previews

**Map licensing and coverage must be validated** before choosing production tiles. OpenStreetMap attribution and downstream data licenses must be respected. No fabricated rent, valuation, financial, tax, or card-offer data.

## Repository collaboration workflow

1. Discuss and agree on a change in ChatGPT.
2. Update the corresponding documentation file in this repository and commit the change.
3. Antigravity pulls the latest `main`, reads the README and relevant documentation, and implements on a feature branch.
4. Review tests, data provenance, design consistency and changed files before merging.
5. Keep the original research report unchanged. Add amendments as separate dated documents.

Changes in chat are **not automatically synced** to GitHub; a repository write and commit are required.

## Current phase

Documentation foundation only. No functional website, database, deployed API or production map is claimed at this stage.
