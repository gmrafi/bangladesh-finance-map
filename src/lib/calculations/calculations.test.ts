import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateBangladeshIncomeTax,
  getExemptionThreshold,
} from "./tax";
import { calculateHomeLoan } from "./loan";

test("Tax Exemption Thresholds match Bangladesh Finance Act provisions", () => {
  assert.equal(getExemptionThreshold("general"), 350000);
  assert.equal(getExemptionThreshold("female_senior"), 400000);
  assert.equal(getExemptionThreshold("disabled"), 475000);
  assert.equal(getExemptionThreshold("freedom_fighter"), 500000);
  assert.equal(getExemptionThreshold("general", true), 400000);
});

test("Income under threshold results in zero tax payable", () => {
  const result = calculateBangladeshIncomeTax({
    annualGrossIncome: 300000,
    category: "general",
    cityArea: "dhaka_chattogram",
  });
  assert.equal(result.grossTax, 0);
  assert.equal(result.netTaxPayable, 0);
  assert.equal(result.effectiveTaxRate, 0);
});

test("Progressive slabs calculate correctly above threshold", () => {
  // Income 500,000 for general category:
  // First 350,000 @ 0% = 0
  // Next 100,000 @ 5% = 5,000
  // Next 50,000 @ 10% = 5,000
  // Gross tax = 10,000
  const result = calculateBangladeshIncomeTax({
    annualGrossIncome: 500000,
    category: "general",
    cityArea: "dhaka_chattogram",
  });
  assert.equal(result.grossTax, 10000);
  assert.equal(result.netTaxPayable, 10000);
  assert.equal(result.slabs.length, 3);
});

test("Minimum tax is enforced when gross tax after rebate is less than city minimum", () => {
  // Income 360,000:
  // First 350,000 @ 0%
  // Next 10,000 @ 5% = 500 BDT
  // Minimum tax in Dhaka is 5,000 BDT
  const result = calculateBangladeshIncomeTax({
    annualGrossIncome: 360000,
    category: "general",
    cityArea: "dhaka_chattogram",
  });
  assert.equal(result.grossTax, 500);
  assert.equal(result.netTaxPayable, 5000);
});

test("Investment rebate properly reduces tax down to minimum tax boundary", () => {
  // Income 800,000:
  // 350,000 @ 0% = 0
  // 100,000 @ 5% = 5,000
  // 300,000 @ 10% = 30,000
  // 50,000 @ 15% = 7,500
  // Gross tax = 42,500
  // Investment = 100,000
  // Rebate = 15,000
  // Tax after rebate = 27,500
  const result = calculateBangladeshIncomeTax({
    annualGrossIncome: 800000,
    category: "general",
    cityArea: "dhaka_chattogram",
    actualInvestment: 100000,
  });
  assert.equal(result.grossTax, 42500);
  assert.equal(result.investmentRebate, 15000);
  assert.equal(result.netTaxPayable, 27500);
});

test("Home Loan EMI and DTI metrics compute accurately", () => {
  // 1 Crore apartment with 20% down payment = 80 Lakhs loan
  // 15 years tenure at 9% interest rate
  const loan = calculateHomeLoan({
    propertyPrice: 10000000,
    downPaymentPercent: 20,
    tenureYears: 15,
    annualInterestRate: 9,
    monthlyNetIncome: 250000,
  });

  assert.equal(loan.propertyPrice, 10000000);
  assert.equal(loan.downPaymentAmount, 2000000);
  assert.equal(loan.loanAmount, 8000000);
  assert.ok(loan.monthlyEMI > 75000 && loan.monthlyEMI < 85000);
  assert.ok(loan.totalRepayment > loan.loanAmount);
  assert.ok(loan.dtiRatio !== null && loan.dtiRatio > 25 && loan.dtiRatio < 35);
  assert.equal(loan.dtiRiskLevel, "manageable");
  assert.equal(loan.yearlySchedule.length, 15);
});
