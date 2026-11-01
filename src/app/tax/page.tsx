"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Info,
  ExternalLink,
  ChevronDown,
  Building,
  HelpCircle,
  AlertCircle,
  Download,
  Percent,
} from "lucide-react";
import {
  calculateBangladeshIncomeTax,
  TaxpayerCategory,
  CityCorporationArea,
} from "@/lib/calculations/tax";
import { formatBDT } from "@/lib/utils";

export default function TaxPage() {
  // Calculator Form State
  const [annualSalary, setAnnualSalary] = useState<number>(900000); // 75,000 BDT/month
  const [category, setCategory] = useState<TaxpayerCategory>("general");
  const [hasDisabledChild, setHasDisabledChild] = useState<boolean>(false);
  const [cityArea, setCityArea] = useState<CityCorporationArea>("dhaka_chattogram");
  const [actualInvestment, setActualInvestment] = useState<number>(120000); // DPS / Insurance / Bonds

  // Checklist state for return preparation
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    item1: true,
    item2: true,
    item3: false,
    item4: false,
    item5: false,
  });

  const toggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const calculation = calculateBangladeshIncomeTax({
    annualGrossIncome: annualSalary,
    category,
    hasDisabledChild,
    cityArea,
    actualInvestment,
  });

  const monthlyGross = Math.round(annualSalary / 12);
  const monthlyTakeHome = monthlyGross - calculation.monthlyTaxDeduction;

  return (
    <div className="space-y-12 pb-16">
      {/* Module Header */}
      <section className="bg-secondary/30 border-b border-border py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <FileText className="h-4 w-4" />
              <span>TaxLens BD · Statutory Tax Intelligence</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Bangladesh Income Tax & e-TIN Intelligence Hub
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calibrated strictly to the Finance Act 2024 and National Board of Revenue (NBR)
              directives. Compute your tax liability, simulate investment rebates, and understand
              e-TIN filing obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Dual-Column Workspace */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tax Inputs Form */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-white p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Taxpayer Profile & Income
                </h2>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground">
                Tax Year 2024–2025
              </span>
            </div>

            {/* Annual Gross Income */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700">
                  Annual Gross Taxable Income
                </label>
                <span className="text-xs font-mono font-bold text-primary">
                  {formatBDT(annualSalary)}
                </span>
              </div>
              <input
                type="number"
                min={0}
                step={25000}
                value={annualSalary}
                onChange={(e) => setAnnualSalary(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-sm font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Equivalent monthly: ~{formatBDT(monthlyGross)}</span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setAnnualSalary(600000)}
                    className="hover:underline text-primary"
                  >
                    6L
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setAnnualSalary(1200000)}
                    className="hover:underline text-primary"
                  >
                    12L
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setAnnualSalary(2400000)}
                    className="hover:underline text-primary"
                  >
                    24L
                  </button>
                </div>
              </div>
            </div>

            {/* Taxpayer Category */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 block">
                Taxpayer Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TaxpayerCategory)}
                className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="general">General Individual (Exemption: ৳3,50,000)</option>
                <option value="female_senior">Female or Senior 65+ (Exemption: ৳4,00,000)</option>
                <option value="disabled">Third Gender / Specially-abled (Exemption: ৳4,75,000)</option>
                <option value="freedom_fighter">
                  Gazetted War-Wounded Freedom Fighter (Exemption: ৳5,00,000)
                </option>
              </select>
            </div>

            {/* City Area (Determines Minimum Tax) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 block">
                Location (Minimum Statutory Tax)
              </label>
              <select
                value={cityArea}
                onChange={(e) => setCityArea(e.target.value as CityCorporationArea)}
                className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="dhaka_chattogram">
                  Dhaka or Chattogram City Corporation (Min ৳5,000)
                </option>
                <option value="other_city_corporation">
                  Other City Corporations (e.g. Rajshahi, Sylhet) (Min ৳4,000)
                </option>
                <option value="other_areas">Non-City Corporation / Municipal (Min ৳3,000)</option>
              </select>
            </div>

            {/* Eligible Investments */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700">
                  Annual Eligible Investments (DPS, Insurance, Stocks)
                </label>
                <span className="text-xs font-mono font-bold text-primary">
                  {formatBDT(actualInvestment)}
                </span>
              </div>
              <input
                type="number"
                min={0}
                step={10000}
                value={actualInvestment}
                onChange={(e) => setActualInvestment(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-sm font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <p className="text-[11px] text-muted-foreground">
                Qualifies for 15% statutory rebate up to statutory ceiling (max 20% of taxable income
                or ৳10 Lakh).
              </p>
            </div>

            {/* Special Exemption Toggle */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasDisabledChild}
                  onChange={(e) => setHasDisabledChild(e.target.checked)}
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                />
                <span className="text-xs text-slate-700">
                  Parent / Legal Guardian of disabled person (+৳50,000 exempt threshold)
                </span>
              </label>
            </div>
          </div>

          {/* Right Column: Calculated Results & Slab Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            {/* High-Level Financial Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-slate-500">Net Tax Payable (Annual)</span>
                <div className="text-2xl font-extrabold text-primary font-mono mt-1">
                  {formatBDT(calculation.netTaxPayable)}
                </div>
                <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                  <span>Effective rate:</span>
                  <span className="font-semibold text-slate-700">
                    {calculation.effectiveTaxRate}%
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-slate-500">Monthly TDS Deduction</span>
                <div className="text-2xl font-extrabold text-foreground font-mono mt-1">
                  {formatBDT(calculation.monthlyTaxDeduction)}
                </div>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Payroll salary deduction
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <span className="text-xs font-medium text-slate-500">Monthly Take-Home</span>
                <div className="text-2xl font-extrabold text-emerald-700 font-mono mt-1">
                  {formatBDT(monthlyTakeHome)}
                </div>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Estimated disposable cash
                </span>
              </div>
            </div>

            {/* Progressive Slab Breakdown Table */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-foreground">
                  Statutory Slab Calculation Breakdown
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  NBR General Tax Schedule
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                      <th className="pb-2">Tax Slab Tier</th>
                      <th className="pb-2 text-right">Taxable Amount</th>
                      <th className="pb-2 text-right">Tax Rate</th>
                      <th className="pb-2 text-right">Tax Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {calculation.slabs.map((slab, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2.5 text-slate-700 font-sans">{slab.slabName}</td>
                        <td className="py-2.5 text-right text-slate-900">
                          {formatBDT(slab.taxableInSlab)}
                        </td>
                        <td className="py-2.5 text-right font-semibold text-slate-700">
                          {slab.ratePercent}%
                        </td>
                        <td className="py-2.5 text-right font-bold text-foreground">
                          {formatBDT(slab.taxAmount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-200 font-semibold text-xs">
                      <td className="pt-3 text-slate-800">Gross Income Tax Liability</td>
                      <td colSpan={2}></td>
                      <td className="pt-3 text-right font-mono font-bold text-slate-900">
                        {formatBDT(calculation.grossTax)}
                      </td>
                    </tr>
                    {calculation.investmentRebate > 0 && (
                      <tr className="text-emerald-700 text-xs">
                        <td className="py-1">
                          Less: Investment Rebate (15% of {formatBDT(calculation.eligibleInvestment)})
                        </td>
                        <td colSpan={2}></td>
                        <td className="py-1 text-right font-mono font-bold">
                          - {formatBDT(calculation.investmentRebate)}
                        </td>
                      </tr>
                    )}
                    <tr className="border-t border-slate-200 text-primary text-sm font-bold">
                      <td className="pt-2">Final Net Tax Payable</td>
                      <td colSpan={2}></td>
                      <td className="pt-2 text-right font-mono">
                        {formatBDT(calculation.netTaxPayable)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {calculation.netTaxPayable === calculation.minimumTax && calculation.grossTax > 0 && (
                <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800 flex items-start gap-2">
                  <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" />
                  <span>
                    Note: Your calculated tax after rebate is lower than the statutory minimum tax
                    for your city jurisdiction (<strong>{formatBDT(calculation.minimumTax)}</strong>).
                    By law, the minimum tax applies.
                  </span>
                </div>
              )}
            </div>

            {/* Cross-Link to Housing Lab */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-5 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  Connect Take-Home Pay with Dhaka Rent
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  See how your monthly disposable cash of {formatBDT(monthlyTakeHome)} compares against
                  Dhaka area rents.
                </p>
              </div>
              <Link
                href={`/explore?maxRent=${Math.round(monthlyTakeHome * 0.35)}`}
                className="shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Match Neighborhoods →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official e-TIN Guideline & Return Preparation Section */}
      <section id="etin-guide" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-t border-border pt-10">
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Official Regulatory Guidance
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Official e-TIN & Tax Return Submission Guide
            </h2>
            <p className="text-sm text-muted-foreground">
              Step-by-step verified instructions for taxpayer registration and annual return
              compliance under the National Board of Revenue (NBR).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* e-TIN Registration Steps */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">
                  1
                </span>
                <span>How to Obtain an Official e-TIN</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="rounded-lg bg-slate-50 p-3 space-y-1">
                  <strong className="text-slate-900 block font-semibold">
                    Prerequisites Checklist:
                  </strong>
                  <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                    <li>Valid National Identity (NID) Card number (10 or 17 digit)</li>
                    <li>Date of Birth matching election commission NID database</li>
                    <li>Active Bangladeshi mobile phone number registered under same NID</li>
                  </ul>
                </div>

                <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                  <li>
                    Visit the official NBR tax portal at{" "}
                    <a
                      href="https://secure.incometax.gov.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
                    >
                      secure.incometax.gov.bd <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>Click on &quot;Register&quot; and enter your username, password, and mobile number.</li>
                  <li>Verify your mobile number via the 6-digit OTP SMS code.</li>
                  <li>
                    Navigate to &quot;TIN Application&quot;, select &quot;Individual Bangladeshi (Having NID)&quot;.
                  </li>
                  <li>Input your NID and Date of Birth. The NBR system auto-verifies via EC server.</li>
                  <li>Generate and download your instant 12-digit e-TIN Certificate PDF.</li>
                </ol>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-[11px] text-amber-900 flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                  <span>
                    <strong>Important Compliance Notice:</strong> Obtaining an e-TIN creates a
                    mandatory statutory requirement to submit an annual tax return under Section 166
                    of the Income Tax Act 2023, even if your income is below taxable threshold, unless
                    expressly exempted.
                  </span>
                </div>
              </div>
            </div>

            {/* Return Preparation Checklist */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">
                  2
                </span>
                <span>Annual Tax Return Documents Checklist</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Check off items you have assembled for filing on the official e-Return portal
                (etaxnbr.gov.bd):
              </p>

              <div className="space-y-2.5">
                {[
                  {
                    id: "item1",
                    label: "Salary Certificate & Tax Deducted at Source (TDS) Certificate from employer",
                  },
                  {
                    id: "item2",
                    label: "Bank Account Statements for all active bank accounts (July 1 to June 30)",
                  },
                  {
                    id: "item3",
                    label: "Investment proof: DPS deposit statements, life insurance receipts, or Sanchayapatra certificates",
                  },
                  {
                    id: "item4",
                    label: "Statement of Assets & Liabilities (Form IT-10B mandatory if gross wealth > ৳40 Lakh)",
                  },
                  {
                    id: "item5",
                    label: "Rental income agreements and municipal tax receipts (if owning rental property)",
                  },
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                      checkedItems[item.id]
                        ? "border-primary bg-secondary/40 text-slate-900"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100/60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedItems[item.id]}
                      onChange={() => {}}
                      className="mt-0.5 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  Checklist progress:{" "}
                  <strong>
                    {Object.values(checkedItems).filter(Boolean).length} of 5 items ready
                  </strong>
                </span>
                <a
                  href="https://etaxnbr.gov.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Go to NBR e-Return <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
