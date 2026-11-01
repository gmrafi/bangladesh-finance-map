# FinanceMap Bangladesh — Build & Verification Log

### Baseline Safety Check
- Protected baseline files: Intact, zero modifications to original documents (`CLAUDE.md`, `DESIGN.md`, `README.md`, `docs/*`).
- New application code paths created cleanly under `src/`, configuration files, and `docs/implementation/`.

### Completed Modules & Layers
1. **Design System & Tokens (Layer 1)**:
   - Configured Tailwind CSS with DESIGN.md color tokens (`#0F766E` deep teal primary, `#EEF4F3` secondary, `#F8FAFC` background, `#111827` foreground).
   - Custom typography tokens and standard BDT currency formatting utilities (`৳` with lakh/crore support).

2. **Core Logic Engine & Fast-Feedback Unit Tests (Layer 3)**:
   - `src/lib/calculations/tax.ts`: Progressive income tax slabs (0%, 5%, 10%, 15%, 20%, 25%), statutory exemption thresholds (General ৳3.5L, Female/Senior ৳4.0L, Specially-abled ৳4.75L, Freedom Fighter ৳5.0L), 15% investment rebate formula, and city corporation minimum tax enforcement.
   - `src/lib/calculations/loan.ts`: Reducing-balance Equal Monthly Installment (EMI) engine, amortization schedules, and Debt-to-Income (DTI) risk tier classifications.
   - `src/lib/calculations/calculations.test.ts`: Automated unit test suite executed via `npx --yes tsx --test`. **Result: 6/6 tests passing in 539ms**.

3. **Curated Datasets (Layer 4)**:
   - `src/lib/data/neighborhoods.ts`: 8 curated Dhaka sectors (Gulshan, Banani, Dhanmondi, Uttara, Bashundhara, Mirpur DOHS, Lalmatia, Baridhara) with rental benchmarks, sqft purchase values, MRT-6 travel times, and utility reliability indicators.
   - `src/lib/data/financial.ts`: Verified CardMap offers (Standard Chartered, City Bank Amex, EBL, BRAC Bank) and Safe-Yield benchmarks (Sanchayapatra, 10-Yr Treasury Bonds, Bank FDR).

4. **Frontend Architecture & Navigation (Layer 2)**:
   - `SiteHeader`: Accessible navigation bar with mobile responsive menu drawer and quick command search dialog (`⌘K`).
   - `SiteFooter`: Institutional source links to NBR, Bangladesh Bank, REHAB, and methodology disclosures.
   - Flagship `HomePage` (`/`): Dynamic quick-compare area preview, 6-module intelligence grid, and data transparency notices.
   - `ExploreMapPage` (`/explore`): বাসাIQ interactive SVG spatial Dhaka map, multi-parameter filtering (budget, layout, commute destination, MRT connectivity), and dual-area comparative benchmarking.
   - `TaxPage` (`/tax`): TaxLens BD progressive tax calculator, investment rebate simulation, official e-TIN step-by-step registration guide, and return document checklist.
   - `FinanceHubPage` (`/finance`): Home Loan Affordability with DTI traffic light, CardMap BD dining/lounge privileges, Safe-Yield Radar, and Household Scenario Lab.
   - `MethodologyPage` (`/methodology`): Rigorous statutory citations and client-side zero-knowledge privacy guarantee.
