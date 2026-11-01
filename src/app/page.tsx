"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  FileText,
  CreditCard,
  Building2,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Scale,
  Sparkles,
  RefreshCw,
  BarChart2,
  LayoutGrid,
  Check,
  ChevronRight,
  Calculator,
  Compass,
} from "lucide-react";
import { DHAKA_NEIGHBORHOODS } from "@/lib/data/neighborhoods";
import { formatBDT } from "@/lib/utils";
import { DhakaMiniMap } from "@/components/home/DhakaMiniMap";
import { TaxQuickWidget } from "@/components/home/TaxQuickWidget";
import {
  NBRLogo,
  BBSLogo,
  RAJUKLogo,
  GoogleMapsLogo,
} from "@/components/shared/OfficialLogos";

export default function HomePage() {
  const [selectedArea1, setSelectedArea1] = useState<string>("gulshan");
  const [selectedArea2, setSelectedArea2] = useState<string>("uttara");

  const area1 = DHAKA_NEIGHBORHOODS.find((a) => a.id === selectedArea1) || DHAKA_NEIGHBORHOODS[0];
  const area2 = DHAKA_NEIGHBORHOODS.find((a) => a.id === selectedArea2) || DHAKA_NEIGHBORHOODS[3];

  return (
    <div className="space-y-12 pb-20 bg-slate-100/80">
      {/* 3-Column Hero Section with Rich Surface Elevation */}
      <section className="border-b border-slate-200 bg-white pt-8 pb-12 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Hero Column: Value Proposition & CTAs */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Multi-color gradient badge tag */}
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-300/80 px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-xs">
                  <BarChart2 className="h-4 w-4 text-emerald-700" />
                  <span>Financial Intelligence for Bangladesh</span>
                </div>

                {/* Bold Headline with Curved Underline Accent */}
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
                  Your Money. <br />
                  Your City. <br />
                  <span className="relative inline-block text-slate-900">
                    Better Decisions.
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-emerald-600"
                      viewBox="0 0 240 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9C60 3 180 3 237 9"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md pt-1 font-medium">
                  Make smarter financial and location decisions in Bangladesh — from choosing the
                  right neighborhood and managing taxes to planning your income, cards, home loan, and
                  long-term goals.
                </p>
              </div>

              {/* Action Buttons with Rich Visual Depth */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:from-emerald-800 hover:to-teal-900 hover:shadow-lg transition-all"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Explore Map</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/finance?tab=scenarios"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <LayoutGrid className="h-4 w-4 text-slate-500" />
                  <span>Open Dashboard</span>
                </Link>
              </div>
            </div>

            {/* Middle Column: Neighborhood Comparison Card */}
            <div className="lg:col-span-4 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xs">
                    <Scale className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Neighborhood Comparison</h2>
                    <p className="text-[11px] text-slate-500">
                      A quick look at cost and commute in Dhaka
                    </p>
                  </div>
                </div>

                {/* Table comparing Gulshan vs Uttara */}
                <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden text-xs shadow-xs">
                  <div className="grid grid-cols-2 bg-gradient-to-r from-purple-100/70 via-slate-50 to-emerald-100/70 p-3 border-b border-slate-200 font-extrabold text-center">
                    <div>
                      <div className="text-purple-950 font-extrabold text-sm">{area1.name}</div>
                      <div className="text-[10px] font-semibold text-purple-700">North Central Dhaka</div>
                    </div>
                    <div className="border-l border-slate-200">
                      <div className="text-emerald-950 font-extrabold text-sm">{area2.name}</div>
                      <div className="text-[10px] font-semibold text-emerald-700">North Sector Hub</div>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-3 bg-white">
                    {/* Estimated Cost */}
                    <div>
                      <div className="text-[11px] text-slate-500 mb-1 flex items-center justify-between font-medium">
                        <span>Estimated monthly cost</span>
                        <span className="text-[10px] text-slate-400">(2BHK, family of 4)</span>
                      </div>
                      <div className="grid grid-cols-2 text-center font-mono font-bold text-sm sm:text-base">
                        <span className="text-purple-900">
                          {formatBDT(area1.metrics.rent2BHK + 97000)}
                        </span>
                        <span className="text-emerald-700 border-l border-slate-100">
                          {formatBDT(area2.metrics.rent2BHK + 84000)}
                        </span>
                      </div>
                    </div>

                    {/* Motijheel commute */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[11px] text-slate-500 mb-1 font-medium">
                        Avg. commute to Motijheel (peak)
                      </div>
                      <div className="grid grid-cols-2 text-center font-mono font-bold text-sm sm:text-base">
                        <span className="text-slate-800">
                          {area1.commuteTimes[0]?.typicalRushHourMin ?? 42} min
                        </span>
                        <span className="text-emerald-700 border-l border-slate-100">
                          {area2.commuteTimes[0]?.typicalRushHourMin ?? 28} min
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights tag badges with distinct saturated colors */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 border-t border-slate-100 text-[10px] text-center font-bold">
                    <span className="rounded-md bg-purple-100 text-purple-900 py-1 px-1.5 border border-purple-300">
                      More premium, convenient
                    </span>
                    <span className="rounded-md bg-emerald-100 text-emerald-900 py-1 px-1.5 border border-emerald-300">
                      More affordable, connected
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={`/explore?area=${area1.id}&compareWith=${area2.id}`}
                className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                <span>View detailed comparison</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right Column: Mini Map Widget with multi-colored districts */}
            <div className="lg:col-span-4 h-full">
              <DhakaMiniMap
                selectedAreaId={selectedArea1}
                onSelectArea={(id) => {
                  setSelectedArea1(id);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Friendly Category Grid (Screenshot 1: 4 Colored Pillars) */}
      <section className="lg:hidden mx-auto max-w-7xl px-4 sm:px-6 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-900">
          <span>Explore Key Decisions</span>
          <span className="text-emerald-700 font-mono">4 Core Domains</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Places & Living: Sky Blue */}
          <Link
            href="/explore"
            className="rounded-2xl border-2 border-sky-300 bg-white p-4 shadow-sm space-y-1 hover:border-sky-500 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-sky-900 font-bold text-sm">
              <div className="p-2 rounded-xl bg-sky-100 text-sky-700">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Places & Living</span>
            </div>
            <p className="text-xs text-slate-600 pl-10 font-medium">Neighborhoods, property, commute</p>
          </Link>

          {/* Tax & Income: Emerald Green */}
          <Link
            href="/tax"
            className="rounded-2xl border-2 border-emerald-300 bg-white p-4 shadow-sm space-y-1 hover:border-emerald-500 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <FileText className="h-4 w-4" />
              </div>
              <span>Tax & Income</span>
            </div>
            <p className="text-xs text-slate-600 pl-10 font-medium">e-TIN, returns, salary, rebates</p>
          </Link>

          {/* Banking & Wealth: Warm Amber */}
          <Link
            href="/finance?tab=cards"
            className="rounded-2xl border-2 border-amber-300 bg-white p-4 shadow-sm space-y-1 hover:border-amber-500 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                <CreditCard className="h-4 w-4" />
              </div>
              <span>Banking & Wealth</span>
            </div>
            <p className="text-xs text-slate-600 pl-10 font-medium">Cards, loans, savings, yield</p>
          </Link>

          {/* Business & Planning: Royal Purple */}
          <Link
            href="/finance?tab=scenarios"
            className="rounded-2xl border-2 border-purple-300 bg-white p-4 shadow-sm space-y-1 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-purple-900 font-bold text-sm">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span>Business & Planning</span>
            </div>
            <p className="text-xs text-slate-600 pl-10 font-medium">Cashflow, scenarios, insights</p>
          </Link>
        </div>
      </section>

      {/* Section 2: "Everything you need for smarter financial & location decisions" matching Screenshot 2 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
            Everything you need for smarter financial & location decisions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 6 Decision Cards (2x3 Grid) with DISTINCT VIBRANT MULTI-COLORS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Neighborhood Intelligence -> SKY BLUE */}
            <Link
              href="/explore"
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-sky-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center justify-between">
                    <span>Neighborhood Intelligence</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                    Explore areas, living costs, rent, lifestyle, and key amenities across Dhaka.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2: Tax & e-TIN -> EMERALD GREEN */}
            <Link
              href="/tax"
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xs">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>Tax & e-TIN</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                    Get e-TIN, understand your tax obligations, and file with confidence.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3: Salary & Net Income -> ROYAL INDIGO */}
            <Link
              href="/tax?salary=1200000"
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-700 text-white shadow-xs">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors flex items-center justify-between">
                    <span>Salary & Net Income</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                    Calculate net salary, tax, and plan your take-home pay.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 4: CardMap Offers -> WARM AMBER */}
            <Link
              href="/finance?tab=cards"
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-amber-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-xs">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors flex items-center justify-between">
                    <span>CardMap Offers</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                    Find and compare credit card offers, rewards, and lifestyle benefits in BD.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 5: Home Loan Affordability -> CORAL / ROSE */}
            <Link
              href="/finance?tab=loan"
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-rose-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-700 text-white shadow-xs">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-rose-700 transition-colors flex items-center justify-between">
                    <span>Home Loan Affordability</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                    Check your home loan eligibility, EMI, and budget for your next home.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 6: Financial Scenario Lab -> ELECTRIC PURPLE */}
            <Link
              href="/finance?tab=scenarios"
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:border-purple-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-700 text-white shadow-xs">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors flex items-center justify-between">
                    <span>Financial Scenario Lab</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-medium">
                    Model life decisions — e.g., new city, home loan, salary change, or major
                    purchase.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Tax & e-TIN in Bangladesh Interactive Multi-Color Widget */}
          <div className="lg:col-span-5 h-full">
            <TaxQuickWidget />
          </div>
        </div>
      </section>

      {/* Section 3: Trusted Sources Bar with AUTHENTIC OFFICIAL EMBLEMS matching Screenshot 2 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Trust Headline */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shrink-0 border border-emerald-300 shadow-2xs">
              <Check className="h-5 w-5 stroke-[3]" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">
                Trusted sources, always up to date
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Data from official and reliable sources, regularly updated for Bangladesh.
              </div>
            </div>
          </div>

          {/* Official Government & Provider Badges */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs text-slate-600 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-6 w-full lg:w-auto justify-between lg:justify-start">
            {/* NBR Official Seal */}
            <div className="flex items-center gap-2.5">
              <NBRLogo className="h-8 w-8 shrink-0 drop-shadow-xs" />
              <div>
                <div className="font-extrabold text-slate-900 text-xs">NBR</div>
                <div className="text-[10px] text-slate-500 font-medium">National Board of Revenue</div>
              </div>
            </div>

            {/* BBS Official Seal */}
            <div className="flex items-center gap-2.5">
              <BBSLogo className="h-8 w-8 shrink-0 drop-shadow-xs" />
              <div>
                <div className="font-extrabold text-slate-900 text-xs">BBS</div>
                <div className="text-[10px] text-slate-500 font-medium">Bureau of Statistics</div>
              </div>
            </div>

            {/* RAJUK Official Seal */}
            <div className="flex items-center gap-2.5">
              <RAJUKLogo className="h-8 w-8 shrink-0 drop-shadow-xs" />
              <div>
                <div className="font-extrabold text-slate-900 text-xs">RAJUK</div>
                <div className="text-[10px] text-slate-500 font-medium">Dhaka City Dev</div>
              </div>
            </div>

            {/* Google Maps Authentic Pin */}
            <div className="flex items-center gap-2.5">
              <GoogleMapsLogo className="h-8 w-8 shrink-0 drop-shadow-xs" />
              <div>
                <div className="font-extrabold text-slate-900 text-xs">Google Maps</div>
                <div className="text-[10px] text-slate-500 font-medium">Location & Commute</div>
              </div>
            </div>
          </div>

          {/* Last updated timestamp */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 shrink-0 font-mono font-semibold">
            <RefreshCw className="h-3 w-3 text-slate-400" />
            <span>Last updated: 24 Jan 2025, 10:42 AM</span>
          </div>
        </div>
      </section>
    </div>
  );
}
