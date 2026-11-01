# Phase 0: Baseline Safety & Master Implementation Plan
## FinanceMap Bangladesh — All-in-One Financial & Geographic Decision Intelligence Platform

### 1. Repository Safety Baseline & Protected Files Inventory
As mandated by the Master Development Directive, all baseline files in this repository are strictly **READ-ONLY REFERENCE DOCUMENTS**. No baseline files will be modified, overwritten, or deleted.

#### Protected Baseline Documents:
- `/README.md`
- `/DESIGN.md`
- `/CLAUDE.md`
- `/docs/ANTIGRAVITY_INSTRUCTIONS.md`
- `/docs/ARCHITECTURE.md`
- `/docs/FRONTEND_DESIGN_SKILLS.md`
- `/docs/MODULES_AND_ROADMAP.md`
- `/docs/PRODUCT_SPECIFICATION.md`
- `/docs/references/FRONTEND_DESIGN_PACK_ORIGINAL.txt`
- `/docs/research/ORIGINAL_DEEP_RESEARCH_REPORT.md`
- `/public/assets/aistudio`

All development proceeds strictly through **newly created files** in `src/`, `docs/implementation/`, and configuration files that did not previously exist.

---

### 2. Design System & Tokens Contract (from DESIGN.md)
- **Background**: `#F8FAFC`
- **Surface / Card**: `#FFFFFF`
- **Foreground / Text**: `#111827`
- **Primary / Brand**: `#0F766E` (Deep Teal)
- **Primary Foreground**: `#FFFFFF`
- **Secondary / Soft Accent**: `#EEF4F3` (Pale Sage/Teal tint)
- **Secondary Foreground**: `#164E49`
- **Muted Background**: `#F1F5F9`
- **Muted Foreground**: `#475569`
- **Border**: `#DDE5E9`
- **Destructive**: `#B42318`
- **Accent Ring**: `#0F766E`
- **Radius**: Inputs 8px (`rounded-lg`), Cards 12px (`rounded-xl`), Modals 16px (`rounded-2xl`).
- **Typography**: Clean sans-serif, Roboto / Inter with Noto Sans Bengali compatibility.
- **Iconography**: Lucide React SVGs, 16px–20px sizing, never emoji badges.

---

### 3. Architecture & Unified Module Organization
Rather than 10 disconnected mini-apps, FinanceMap Bangladesh unifies all research capabilities into a single integrated platform:

1. **Explore Map & বাসাIQ (Dhaka Decision Map)**:
   - Interactive district & neighborhood decision engine (Gulshan, Banani, Dhanmondi, Uttara, Mirpur, Bashundhara, Mohakhali, Lalmatia, etc.).
   - Multi-parameter live filtering: Rent budget, office commute destination, lifestyle preferences, noise/density, power/water reliability indicators.
   - Dual-area side-by-side comparison with cost-of-living & commute time modeling.
   - Interactive SVG/MapLibre visualization with accessible fallback list view and mobile bottom sheet.

2. **Tax & e-TIN Intelligence (TaxLens BD)**:
   - Comprehensive Bangladesh Income Tax Estimator for Tax Year 2024-2025 / 2025-2026.
   - Individual taxpayer tiers (General, Female & 65+, Specially-abled, Gazetted Freedom Fighters).
   - Progressive tax slab calculations (0%, 5%, 10%, 15%, 20%, 25%).
   - Investment rebate calculations (DPS, Life Insurance, Stocks, Sanchayapatra under statutory limits).
   - Official e-TIN step-by-step guidance, registration prerequisites, verification boundaries, and return preparation checklist.
   - Honest labeling: Clear disclaimers that calculations are educational decision intelligence, not formal NBR submissions.

3. **Finance & Decision Dashboard**:
   - **Home Loan & Affordability**: Down payment, tenure, interest rate sensitivity, EMI calculation, DTI (Debt-to-Income) ratio test against Dhaka salary benchmarks.
   - **CardMap BD**: Credit card dining, grocery, lounge, and cashback offer comparisons (Standard Chartered, City Bank Amex, EBL, BRAC Bank) with validity dates and caps.
   - **Household Scenario Lab**: Cross-module scenario linking salary, rent from বাসাIQ, tax from TaxLens, and commute costs into true disposable monthly income.
   - **Safe-Yield Radar & Remittance (NRB)**: Sanchayapatra yield slabs, treasury bond benchmarks, bank FDR rates, and official remittance incentive rates (2.5% government subsidy).

---

### 4. Implementation Phasing
- **Phase 1**: Core Next.js, Tailwind CSS, TypeScript, and Lucide package initialization and design token setup.
- **Phase 2**: Navigation shell (SiteHeader with search dialog, responsive mobile navigation, footer, breadcrumbs).
- **Phase 3**: Flagship Homepage featuring Dhaka exploration preview, live quick-compare, key modules discovery, and data transparency notices.
- **Phase 4**: Explore & বাসাIQ Interactive Map experience with dual-area comparison and mobile sheet.
- **Phase 5**: Tax & e-TIN Intelligence suite (e-TIN Guide, Income Tax Calculator, Salary breakdown, Return checklist).
- **Phase 6**: Finance Hub (Home Loan Affordability, CardMap offer finder, Safe-Yield radar).
- **Phase 7**: Automated unit tests for tax and loan math via `node:test`, plus browser verification via Playwright CLI.
