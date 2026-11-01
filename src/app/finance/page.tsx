"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CreditCard,
  Building2,
  TrendingUp,
  Sparkles,
  Sliders,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  ShieldCheck,
  Search,
  Filter,
  ExternalLink,
  ArrowRight,
  Scale,
} from "lucide-react";
import { calculateHomeLoan } from "@/lib/calculations/loan";
import { CARD_OFFERS, YIELD_BENCHMARKS, CardOffer } from "@/lib/data/financial";
import { DHAKA_NEIGHBORHOODS } from "@/lib/data/neighborhoods";
import { formatBDT, formatLakhCrore } from "@/lib/utils";

function FinanceHubContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "loan";

  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // Home Loan State
  const initialPropPrice = Number(searchParams.get("propertyPrice")) || 12000000; // 1.2 Crore BDT
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPropPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(15);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(9.5);
  const [monthlyNetIncome, setMonthlyNetIncome] = useState<number>(220000);

  const loanResult = calculateHomeLoan({
    propertyPrice,
    downPaymentPercent,
    tenureYears,
    annualInterestRate,
    monthlyNetIncome,
  });

  // CardMap State
  const [cardCategoryFilter, setCardCategoryFilter] = useState<string>("all");
  const [cardBankFilter, setCardBankFilter] = useState<string>("all");

  const filteredCards = useMemo(() => {
    return CARD_OFFERS.filter((card) => {
      if (cardCategoryFilter !== "all" && !card.category.includes(cardCategoryFilter)) {
        return false;
      }
      if (cardBankFilter !== "all" && card.bank !== cardBankFilter) {
        return false;
      }
      return true;
    });
  }, [cardCategoryFilter, cardBankFilter]);

  // Scenario Lab State
  const [scenarioGrossSalary, setScenarioGrossSalary] = useState<number>(180000); // 1.8 Lakh/mo
  const [scenarioAreaId, setScenarioAreaId] = useState<string>("dhanmondi");
  const [scenarioBedroom, setScenarioBedroom] = useState<"2BHK" | "3BHK">("2BHK");

  const scenarioArea =
    DHAKA_NEIGHBORHOODS.find((a) => a.id === scenarioAreaId) || DHAKA_NEIGHBORHOODS[0];

  const estimatedRent =
    scenarioBedroom === "2BHK"
      ? scenarioArea.metrics.rent2BHK
      : scenarioArea.metrics.rent3BHK;

  // Approximate tax at 1.8L monthly (~2.16M annual = ~15% tax)
  const approxTaxMonthly = Math.round((scenarioGrossSalary * 12 * 0.12) / 12);
  const estimatedCommuteMonthly = 7500;
  const estimatedUtilitiesFood = 35000;
  const netTakeHome = scenarioGrossSalary - approxTaxMonthly;
  const totalLivingCost =
    estimatedRent +
    scenarioArea.metrics.serviceChargeAvg +
    estimatedCommuteMonthly +
    estimatedUtilitiesFood;
  const discretionarySavings = netTakeHome - totalLivingCost;
  const savingsRate = Number(((discretionarySavings / netTakeHome) * 100).toFixed(1));

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-secondary/30 border-b border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Financial Decision Intelligence
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Banking, Loans & Scenario Lab
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Simulate apartment mortgages, compare verified card dining/lounge offers, explore
                Sanchayapatra yield radars, and model household budgets.
              </p>
            </div>

            {/* Segmented Tab Controls */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-border shadow-xs self-start lg:self-auto overflow-x-auto max-w-full shrink-0">
              {[
                { id: "loan", label: "Home Loan Lab", icon: Building2 },
                { id: "cards", label: "CardMap BD", icon: CreditCard },
                { id: "yields", label: "Safe-Yield Radar", icon: TrendingUp },
                { id: "scenarios", label: "Scenario Lab", icon: Sparkles },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-primary text-white font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TAB 1: HOME LOAN AFFORDABILITY */}
        {activeTab === "loan" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 rounded-2xl border border-border bg-white p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>Mortgage Input Parameters</span>
                </h2>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Bangladesh Bank Limits
                </span>
              </div>

              {/* Property Price */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-700">Property Purchase Price</label>
                  <span className="font-mono font-bold text-primary">
                    {formatLakhCrore(propertyPrice)} ({formatBDT(propertyPrice)})
                  </span>
                </div>
                <input
                  type="number"
                  min={3000000}
                  step={500000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-sm font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className="flex gap-2 text-[11px] text-muted-foreground">
                  <button
                    onClick={() => setPropertyPrice(7500000)}
                    className="hover:underline text-primary"
                  >
                    ৳75L (Mirpur)
                  </button>
                  <span>·</span>
                  <button
                    onClick={() => setPropertyPrice(14000000)}
                    className="hover:underline text-primary"
                  >
                    ৳1.4Cr (Dhanmondi)
                  </button>
                  <span>·</span>
                  <button
                    onClick={() => setPropertyPrice(25000000)}
                    className="hover:underline text-primary"
                  >
                    ৳2.5Cr (Gulshan)
                  </button>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-700">Down Payment Ratio</label>
                  <span className="font-mono font-bold text-slate-900">
                    {downPaymentPercent}% ({formatLakhCrore(loanResult.downPaymentAmount)})
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>10% (Min)</span>
                  <span>20% (Standard)</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Tenure Years */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-700">Tenure (Years)</label>
                  <span className="font-mono font-bold text-slate-900">
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={25}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>5 Yrs</span>
                  <span>15 Yrs (Average)</span>
                  <span>25 Yrs (Max)</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-700">Annual Interest Rate</label>
                  <span className="font-mono font-bold text-slate-900">
                    {annualInterestRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={13.5}
                  step={0.25}
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>7.5%</span>
                  <span>9.5% (Market Avg)</span>
                  <span>13.5%</span>
                </div>
              </div>

              {/* Net Income for DTI */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-700">Household Net Monthly Income</label>
                  <span className="font-mono font-bold text-primary">
                    {formatBDT(monthlyNetIncome)}
                  </span>
                </div>
                <input
                  type="number"
                  min={50000}
                  step={10000}
                  value={monthlyNetIncome}
                  onChange={(e) => setMonthlyNetIncome(Math.max(1, Number(e.target.value)))}
                  className="w-full rounded-lg border border-border bg-slate-50 p-2 text-xs font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <p className="text-[11px] text-muted-foreground">
                  Used to evaluate your Debt-to-Income (DTI) banking approval safety margin.
                </p>
              </div>
            </div>

            {/* Results Output */}
            <div className="lg:col-span-7 space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Monthly EMI</span>
                  <div className="text-2xl font-extrabold text-primary font-mono mt-1">
                    {formatBDT(loanResult.monthlyEMI)}
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-1 block">
                    Fixed monthly installment
                  </span>
                </div>

                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">Total Interest Burden</span>
                  <div className="text-2xl font-extrabold text-amber-700 font-mono mt-1">
                    {formatLakhCrore(loanResult.totalInterest)}
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-1 block">
                    {loanResult.interestToPrincipalRatio}% of loan principal
                  </span>
                </div>

                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <span className="text-xs font-medium text-slate-500">DTI Safety Index</span>
                  <div
                    className={`text-2xl font-extrabold font-mono mt-1 ${
                      loanResult.dtiRiskLevel === "comfortable"
                        ? "text-emerald-600"
                        : loanResult.dtiRiskLevel === "manageable"
                        ? "text-blue-600"
                        : loanResult.dtiRiskLevel === "stretched"
                        ? "text-amber-600"
                        : "text-rose-600"
                    }`}
                  >
                    {loanResult.dtiRatio}%
                  </div>
                  <span className="text-[11px] capitalize font-medium text-slate-700 mt-1 block">
                    {loanResult.dtiRiskLevel} risk tier
                  </span>
                </div>
              </div>

              {/* Repayment Breakdown Table */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-foreground">
                    Comprehensive Mortgage Breakdown
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">
                    Equal Monthly Installment
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Property Valuation</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {formatBDT(loanResult.propertyPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Required Down Payment ({downPaymentPercent}%)</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {formatBDT(loanResult.downPaymentAmount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Sanctioned Loan Principal</span>
                    <span className="font-mono font-semibold text-primary">
                      {formatBDT(loanResult.loanAmount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Total Cumulative Interest ({tenureYears} Years)</span>
                    <span className="font-mono font-semibold text-amber-700">
                      {formatBDT(loanResult.totalInterest)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-sm font-bold">
                    <span className="text-slate-800">Total Amount Repaid to Bank</span>
                    <span className="font-mono text-foreground">
                      {formatBDT(loanResult.totalRepayment)}
                    </span>
                  </div>
                </div>

                {loanResult.dtiRiskLevel === "stretched" || loanResult.dtiRiskLevel === "critical" ? (
                  <div className="rounded-lg bg-rose-50 p-3 text-xs text-rose-800 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    <span>
                      Caution: At <strong>{loanResult.dtiRatio}%</strong> of your monthly income, this
                      EMI exceeds the prudent 35%-40% threshold recommended by Bangladesh commercial
                      banks. Consider increasing your down payment or extending the tenure.
                    </span>
                  </div>
                ) : (
                  <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800 flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>
                      Optimal range: Your EMI is <strong>{loanResult.dtiRatio}%</strong> of monthly net
                      income, satisfying standard Bangladesh Bank affordability guidelines.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CARDMAP BD */}
        {activeTab === "cards" && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-700 mr-2 flex items-center gap-1.5">
                  <Filter className="h-3.5 w-3.5 text-primary" />
                  Category:
                </span>
                {["all", "Dining / BOGO", "Grocery / Retail", "Airport Lounge"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCardCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      cardCategoryFilter === cat
                        ? "bg-primary text-white font-semibold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat === "all" ? "All Privileges" : cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">Issuing Bank:</span>
                <select
                  value={cardBankFilter}
                  onChange={(e) => setCardBankFilter(e.target.value)}
                  className="rounded-lg border border-border bg-slate-50 px-2.5 py-1.5 font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="all">All Participating Banks</option>
                  <option value="Standard Chartered Bangladesh">Standard Chartered</option>
                  <option value="City Bank">City Bank (Amex)</option>
                  <option value="Eastern Bank PLC (EBL)">Eastern Bank (EBL)</option>
                  <option value="BRAC Bank PLC">BRAC Bank</option>
                </select>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCards.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-primary">{offer.bank}</span>
                      <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                        {offer.tier} · {offer.network}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground">{offer.headline}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{offer.details}</p>

                    <div className="rounded-xl bg-slate-50 p-3 space-y-1.5 border border-slate-100 text-xs">
                      <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wide">
                        Participating Venues:
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                        {offer.participatingVenues.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>Valid until {offer.validityUntil}</span>
                    </div>
                    <span className="font-medium text-slate-700">{offer.capPerMonth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SAFE-YIELD RADAR */}
        {activeTab === "yields" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Bangladesh Safe-Yield Radar (Government & Bank Benchmarks)
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Statutory interest rates, tax deduction at source (TDS), and investment ceilings
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg font-semibold">
                  Active 2024–2025 Rates
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                      <th className="pb-3">Yield Instrument</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3 text-right">Annual Return</th>
                      <th className="pb-3 text-right">Tenure</th>
                      <th className="pb-3">Tax Deduction (TDS)</th>
                      <th className="pb-3">Statutory Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {YIELD_BENCHMARKS.map((inst) => (
                      <tr key={inst.id} className="hover:bg-slate-50">
                        <td className="py-3 font-semibold text-foreground">
                          <div>{inst.name}</div>
                          <div className="text-[10px] text-muted-foreground font-bengali">
                            {inst.banglaName}
                          </div>
                        </td>
                        <td className="py-3 text-slate-600">{inst.category}</td>
                        <td className="py-3 text-right font-mono font-bold text-primary text-sm">
                          {inst.annualYieldPercent}%
                        </td>
                        <td className="py-3 text-right font-mono text-slate-700">
                          {inst.tenureYears} Yrs
                        </td>
                        <td className="py-3 text-slate-600 text-[11px]">
                          {inst.taxDeductionAtSource}
                        </td>
                        <td className="py-3 text-slate-600 text-[11px] max-w-xs">
                          {inst.investmentCap}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Remittance Incentive Note */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>NRB Inward Remittance Incentive Scheme</span>
              </div>
              <h4 className="text-base font-bold text-foreground">
                2.5% Direct Bangladesh Bank Cash Incentive
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Under existing central bank guidelines, all formal inward remittances sent by
                Non-Resident Bangladeshis (NRBs) through authorized banking channels receive a flat
                2.5% direct government cash subsidy, with top commercial banks offering an additional
                1.5% to 2.5% promotional matching bonus.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: CROSS-MODULE SCENARIO LAB */}
        {activeTab === "scenarios" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 rounded-2xl border border-border bg-white p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Household What-If Parameters</span>
                </h3>
              </div>

              {/* Monthly Gross Salary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-700">Monthly Gross Salary Offer</label>
                  <span className="font-mono font-bold text-primary">
                    {formatBDT(scenarioGrossSalary)}
                  </span>
                </div>
                <input
                  type="number"
                  min={50000}
                  step={10000}
                  value={scenarioGrossSalary}
                  onChange={(e) => setScenarioGrossSalary(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-sm font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Target Neighborhood */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Candidate Living Neighborhood
                </label>
                <select
                  value={scenarioAreaId}
                  onChange={(e) => setScenarioAreaId(e.target.value)}
                  className="w-full rounded-lg border border-border bg-slate-50 p-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {DHAKA_NEIGHBORHOODS.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.name} ({n.zone})
                    </option>
                  ))}
                </select>
              </div>

              {/* Layout */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">Apartment Size</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setScenarioBedroom("2BHK")}
                    className={`py-2 text-xs font-medium rounded-lg border ${
                      scenarioBedroom === "2BHK"
                        ? "border-primary bg-secondary text-primary font-bold"
                        : "border-border bg-white"
                    }`}
                  >
                    2 Bedrooms
                  </button>
                  <button
                    type="button"
                    onClick={() => setScenarioBedroom("3BHK")}
                    className={`py-2 text-xs font-medium rounded-lg border ${
                      scenarioBedroom === "3BHK"
                        ? "border-primary bg-secondary text-primary font-bold"
                        : "border-border bg-white"
                    }`}
                  >
                    3 Bedrooms
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-white p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-foreground">
                  Monthly Cash Flow Projection: {scenarioArea.name}
                </h3>
                <span className="text-xs font-mono text-muted-foreground">Scenario Modeling</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Gross Monthly Earnings</span>
                  <span className="font-mono font-semibold text-slate-900">
                    + {formatBDT(scenarioGrossSalary)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-rose-700">
                  <span>Estimated Monthly Income Tax (NBR Slabs)</span>
                  <span className="font-mono font-semibold">- {formatBDT(approxTaxMonthly)}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 font-semibold text-slate-800">
                  <span>Net Take-Home Pay</span>
                  <span className="font-mono font-bold text-emerald-700">
                    = {formatBDT(netTakeHome)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>
                    Apartment Rent ({scenarioBedroom} in {scenarioArea.name})
                  </span>
                  <span className="font-mono font-semibold text-slate-900">
                    - {formatBDT(estimatedRent)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Building Service & Security Charges</span>
                  <span className="font-mono font-semibold text-slate-900">
                    - {formatBDT(scenarioArea.metrics.serviceChargeAvg)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Commute & Transit Fuel/Ride Expenses</span>
                  <span className="font-mono font-semibold text-slate-900">
                    - {formatBDT(estimatedCommuteMonthly)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Food, Utilities, & Household Essentials</span>
                  <span className="font-mono font-semibold text-slate-900">
                    - {formatBDT(estimatedUtilitiesFood)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm font-bold bg-secondary/40 p-3 rounded-xl">
                  <span className="text-foreground">Discretionary Monthly Savings</span>
                  <span
                    className={`font-mono text-base ${
                      discretionarySavings > 0 ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {formatBDT(discretionarySavings)} ({savingsRate}%)
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-border p-4 bg-slate-50 text-xs text-muted-foreground leading-relaxed">
                <strong>Financial Insight:</strong> At this salary level in {scenarioArea.name}, your
                housing commitment represents{" "}
                <strong>{((estimatedRent / netTakeHome) * 100).toFixed(0)}%</strong> of your take-home
                pay. Financial planners typically advise keeping shelter expenses below 35% of net
                income.
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default function FinanceHubPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center p-8 text-sm text-muted-foreground">
          Loading Financial Decision Models...
        </div>
      }
    >
      <FinanceHubContent />
    </Suspense>
  );
}
