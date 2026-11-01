import React from "react";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  ExternalLink,
  Scale,
  Calculator,
  MapPin,
  Lock,
} from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-secondary/30 border-b border-border py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <BookOpen className="h-4 w-4" />
              <span>Research Rigor & Statutory Citations</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Calculation Methodology & Data Citations
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              FinanceMap Bangladesh operates on principles of radical transparency. We document the
              statutory foundation, calculation logic, update cadence, and limitations of every model
              on this platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section 1: TaxLens Methodology */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <Calculator className="h-5 w-5" />
            <h2>1. Bangladesh Income Tax (TaxLens BD)</h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            All progressive income tax calculations are based strictly on the{" "}
            <strong>Finance Act 2024 (অর্থ আইন ২০২৪)</strong> and the{" "}
            <strong>Income Tax Act 2023 (আয়কর আইন ২০২৩)</strong> promulgated by the Parliament of
            Bangladesh and administered by the National Board of Revenue (NBR).
          </p>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-xs space-y-2">
            <h4 className="font-semibold text-slate-900">Key Statutory Constants Enforced:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>
                <strong>Exemption Thresholds:</strong> General (৳3,50,000), Female & Senior 65+
                (৳4,00,000), Third Gender & Specially-abled (৳4,75,000), Gazetted War-Wounded Freedom
                Fighters (৳5,00,000). Parents of disabled persons receive an additional ৳50,000
                allowance.
              </li>
              <li>
                <strong>Progressive Slabs:</strong> Next ৳1 Lakh @ 5%, Next ৳3 Lakh @ 10%, Next ৳4
                Lakh @ 15%, Next ৳5 Lakh @ 20%, Balance @ 25%.
              </li>
              <li>
                <strong>Minimum Tax:</strong> Dhaka/Chattogram City Corporations (৳5,000), Other City
                Corporations (৳4,000), Other Non-City Corporation areas (৳3,000).
              </li>
              <li>
                <strong>Investment Rebate:</strong> 15% of eligible investments up to a statutory ceiling
                of 20% of taxable income or ৳10,00,000, whichever is lowest.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: বাসাIQ Neighborhood Intelligence */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <MapPin className="h-5 w-5" />
            <h2>2. Spatial & Neighborhood Intelligence (বাসাIQ)</h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Neighborhood metrics are synthesized from field surveys, real estate transaction data
            published by the Real Estate & Housing Association of Bangladesh (REHAB), and transit
            schedules published by Dhaka Mass Transit Company Limited (DMTCL).
          </p>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-xs space-y-2">
            <h4 className="font-semibold text-slate-900">Interpretation Guidelines:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>
                <strong>Rental Benchmarks:</strong> Figures represent typical median ranges for standard
                multistory residential buildings (1,000–1,250 sqft for 2BHK, 1,400–1,800 sqft for
                3BHK) in central residential roads. Rents on primary avenues or ultra-luxury complexes
                may exceed these medians.
              </li>
              <li>
                <strong>Commute Times:</strong> Model combines DMTCL MRT-6 published headways (8–10
                minutes) with peak-hour (8:30 AM – 10:00 AM) vehicular speed estimates on primary
                arterial corridors (Mirpur Road, Airport Road, Pragati Sarani, Kazi Nazrul Islam
                Avenue).
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Mortgages & Banking */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <Scale className="h-5 w-5" />
            <h2>3. Mortgage & Safe-Yield Benchmarks</h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Home loan formulas use standard reducing-balance Equal Monthly Installment (EMI)
            mathematics. The Debt-to-Income (DTI) risk classification applies Bangladesh Bank Prudential
            Regulations for Consumer Financing, recommending a maximum debt service ratio of 40%–50% of
            verified monthly disposable income.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            National Savings Certificate (Sanchayapatra) return rates and Tax Deducted at Source (TDS)
            provisions mirror official rate schedules published by the Internal Resources Division (IRD)
            and the Directorate of National Savings.
          </p>
        </div>

        {/* Section 4: Privacy & Zero-Knowledge Architecture */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <Lock className="h-5 w-5" />
            <h2>4. Client-Side Privacy Guarantee</h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            FinanceMap Bangladesh is engineered with zero-knowledge privacy. All salary inputs, tax
            simulations, mortgage calculations, and scenario what-if inputs are computed entirely inside
            your web browser. No personal financial figures or taxpayer identification credentials are
            transmitted to or stored on our servers.
          </p>
        </div>
      </section>
    </div>
  );
}
