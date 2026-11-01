"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Calculator,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  FileCheck,
  Building,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { formatBDT } from "@/lib/utils";
import { calculateBangladeshIncomeTax } from "@/lib/calculations/tax";

export function TaxQuickWidget() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [quickSalary, setQuickSalary] = useState<number>(850000);

  const quickTax = calculateBangladeshIncomeTax({
    annualGrossIncome: quickSalary,
    category: "general",
    cityArea: "dhaka_chattogram",
    actualInvestment: 100000,
  });

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-5 flex flex-col justify-between h-full">
      {/* Widget Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 text-emerald-800 border border-emerald-200/80 shadow-xs">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Tax & e-TIN in Bangladesh
              </h3>
              <p className="text-xs text-slate-500">
                Get your e-TIN, estimate tax, and stay compliant.
              </p>
            </div>
          </div>
          <Link
            href="/tax"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1"
          >
            <span>Go to Tax & e-TIN</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* 3 Step Multi-Color Tabs */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {/* Tab 1: Emerald Green */}
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
              activeStep === 1
                ? "bg-emerald-700 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                activeStep === 1 ? "bg-white text-emerald-700 font-bold" : "bg-slate-200 text-slate-700"
              }`}
            >
              1
            </span>
            <span className="truncate">Get e-TIN</span>
          </button>

          {/* Tab 2: Royal Indigo */}
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
              activeStep === 2
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                activeStep === 2 ? "bg-white text-indigo-700 font-bold" : "bg-slate-200 text-slate-700"
              }`}
            >
              2
            </span>
            <span className="truncate">Estimate Tax</span>
          </button>

          {/* Tab 3: Warm Amber */}
          <button
            type="button"
            onClick={() => setActiveStep(3)}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
              activeStep === 3
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                activeStep === 3 ? "bg-white text-amber-700 font-bold" : "bg-slate-200 text-slate-700"
              }`}
            >
              3
            </span>
            <span className="truncate">File & Track</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content Card */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 space-y-4">
        {activeStep === 1 && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200/60 shadow-2xs">
                <FileText className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-900">
                  Step 1: Get your e-TIN
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apply for an e-TIN online, a required first step for individual taxation in Bangladesh.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://secure.incometax.gov.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-emerald-800 transition-colors"
              >
                <span>Start e-TIN Application</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/tax#etin-guide"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Read Checklist
              </Link>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800 flex items-center gap-1 text-indigo-900">
                <Calculator className="h-3.5 w-3.5 text-indigo-600" />
                Annual Gross Salary:
              </span>
              <span className="font-mono font-bold text-indigo-700">{formatBDT(quickSalary)}</span>
            </div>
            <input
              type="range"
              min={300000}
              max={3000000}
              step={50000}
              value={quickSalary}
              onChange={(e) => setQuickSalary(Number(e.target.value))}
              className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="rounded-lg bg-indigo-50/50 p-2 border border-indigo-100">
                <div className="text-[10px] text-slate-500">Net Tax Payable</div>
                <div className="font-bold text-indigo-700 text-xs font-mono">
                  {formatBDT(quickTax.netTaxPayable)}
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 border border-slate-200">
                <div className="text-[10px] text-slate-500">Monthly Deduction</div>
                <div className="font-bold text-slate-900 text-xs font-mono">
                  {formatBDT(quickTax.monthlyTaxDeduction)}
                </div>
              </div>
            </div>
            <Link
              href={`/tax?salary=${quickSalary}`}
              className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              <span>Calculate Full Slabs in TaxLens</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {activeStep === 3 && (
          <div className="space-y-3 animate-in fade-in">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2 text-amber-900">
              <FileCheck className="h-4 w-4 text-amber-600" />
              <span>Step 3: Online e-Return Submission</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submit your annual return on the official NBR e-Return system (etaxnbr.gov.bd) and
              receive your instant Proof of Submission of Return (PSR).
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://etaxnbr.gov.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-amber-700 transition-colors"
              >
                <span>NBR e-Return Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/tax#return-checklist"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Document Checklist
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info Links matching Screenshot 2 */}
      <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
        <Link href="/tax#etin-guide" className="hover:text-emerald-700 hover:underline flex items-center gap-1">
          <HelpCircle className="h-3 w-3 text-slate-400" />
          <span>What is e-TIN?</span>
        </Link>
        <span className="text-slate-300">·</span>
        <Link href="/tax#etin-guide" className="hover:text-emerald-700 hover:underline">
          Who needs it?
        </Link>
        <span className="text-slate-300">·</span>
        <Link href="/tax#etin-guide" className="hover:text-emerald-700 hover:underline">
          Required documents
        </Link>
      </div>
    </div>
  );
}
