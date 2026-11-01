export type TaxpayerCategory =
  | "general"
  | "female_senior"
  | "disabled"
  | "freedom_fighter";

export type CityCorporationArea =
  | "dhaka_chattogram"
  | "other_city_corporation"
  | "other_areas";

export interface TaxCalculationInput {
  annualGrossIncome: number;
  category: TaxpayerCategory;
  hasDisabledChild?: boolean;
  cityArea: CityCorporationArea;
  actualInvestment?: number; // DPS, insurance, stocks, sanchayapatra
}

export interface TaxSlabBreakdown {
  slabName: string;
  taxableInSlab: number;
  ratePercent: number;
  taxAmount: number;
}

export interface TaxCalculationResult {
  taxableIncome: number;
  exemptThreshold: number;
  grossTax: number;
  slabs: TaxSlabBreakdown[];
  maxAllowableInvestment: number;
  eligibleInvestment: number;
  investmentRebate: number;
  taxAfterRebate: number;
  minimumTax: number;
  netTaxPayable: number;
  effectiveTaxRate: number;
  monthlyTaxDeduction: number;
}

export function getExemptionThreshold(
  category: TaxpayerCategory,
  hasDisabledChild = false
): number {
  let base = 350000;
  if (category === "female_senior") base = 400000;
  else if (category === "disabled") base = 475000;
  else if (category === "freedom_fighter") base = 500000;

  if (hasDisabledChild) {
    base += 50000;
  }
  return base;
}

export function getMinimumTax(area: CityCorporationArea): number {
  switch (area) {
    case "dhaka_chattogram":
      return 5000;
    case "other_city_corporation":
      return 4000;
    case "other_areas":
      return 3000;
  }
}

export function calculateBangladeshIncomeTax(
  input: TaxCalculationInput
): TaxCalculationResult {
  const taxableIncome = Math.max(0, input.annualGrossIncome);
  const threshold = getExemptionThreshold(
    input.category,
    input.hasDisabledChild
  );
  const minTax = getMinimumTax(input.cityArea);

  if (taxableIncome <= threshold) {
    return {
      taxableIncome,
      exemptThreshold: threshold,
      grossTax: 0,
      slabs: [
        {
          slabName: `First ৳${threshold.toLocaleString("en-IN")} (Exempt)`,
          taxableInSlab: taxableIncome,
          ratePercent: 0,
          taxAmount: 0,
        },
      ],
      maxAllowableInvestment: 0,
      eligibleInvestment: 0,
      investmentRebate: 0,
      taxAfterRebate: 0,
      minimumTax: minTax,
      netTaxPayable: 0,
      effectiveTaxRate: 0,
      monthlyTaxDeduction: 0,
    };
  }

  const slabs: TaxSlabBreakdown[] = [];
  let remaining = taxableIncome;

  // First slab (0%)
  const firstSlabAmount = Math.min(remaining, threshold);
  slabs.push({
    slabName: `First ৳${threshold.toLocaleString("en-IN")}`,
    taxableInSlab: firstSlabAmount,
    ratePercent: 0,
    taxAmount: 0,
  });
  remaining -= firstSlabAmount;

  // Slab definition after threshold
  const slabTiers = [
    { limit: 100000, rate: 5, name: "Next ৳1,00,000" },
    { limit: 300000, rate: 10, name: "Next ৳3,00,000" },
    { limit: 400000, rate: 15, name: "Next ৳4,00,000" },
    { limit: 500000, rate: 20, name: "Next ৳5,00,000" },
    { limit: Infinity, rate: 25, name: "Remainder Balance" },
  ];

  let grossTax = 0;

  for (const tier of slabTiers) {
    if (remaining <= 0) break;
    const taxableHere = Math.min(remaining, tier.limit);
    const taxInTier = (taxableHere * tier.rate) / 100;
    grossTax += taxInTier;
    slabs.push({
      slabName: tier.name,
      taxableInSlab: taxableHere,
      ratePercent: tier.rate,
      taxAmount: taxInTier,
    });
    remaining -= taxableHere;
  }

  // Investment rebate calculation
  // Statutory limit: 20% of taxable income or 10,00,000 BDT or actual investment (whichever is lowest)
  const maxAllowableInvestment = Math.min(taxableIncome * 0.2, 1000000);
  const actualInv = input.actualInvestment || 0;
  const eligibleInvestment = Math.min(actualInv, maxAllowableInvestment);
  const investmentRebate = eligibleInvestment * 0.15; // 15% rebate

  const taxAfterRebate = Math.max(0, grossTax - investmentRebate);

  // If gross tax > 0, net tax payable cannot be less than minimum tax
  const netTaxPayable =
    grossTax > 0 ? Math.max(minTax, taxAfterRebate) : 0;

  const effectiveTaxRate =
    taxableIncome > 0
      ? Number(((netTaxPayable / taxableIncome) * 100).toFixed(2))
      : 0;

  const monthlyTaxDeduction = Math.round(netTaxPayable / 12);

  return {
    taxableIncome,
    exemptThreshold: threshold,
    grossTax: Math.round(grossTax),
    slabs,
    maxAllowableInvestment: Math.round(maxAllowableInvestment),
    eligibleInvestment: Math.round(eligibleInvestment),
    investmentRebate: Math.round(investmentRebate),
    taxAfterRebate: Math.round(taxAfterRebate),
    minimumTax: minTax,
    netTaxPayable: Math.round(netTaxPayable),
    effectiveTaxRate,
    monthlyTaxDeduction,
  };
}
