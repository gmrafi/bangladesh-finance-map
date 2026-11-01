export interface HomeLoanInput {
  propertyPrice: number;
  downPaymentPercent: number; // e.g. 20 for 20%
  tenureYears: number; // e.g. 15
  annualInterestRate: number; // e.g. 9.5%
  monthlyNetIncome?: number; // e.g. 150000 BDT
}

export interface AmortizationYearItem {
  year: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

export interface HomeLoanResult {
  propertyPrice: number;
  downPaymentAmount: number;
  loanAmount: number;
  monthlyEMI: number;
  totalRepayment: number;
  totalInterest: number;
  interestToPrincipalRatio: number;
  dtiRatio: number | null;
  dtiRiskLevel: "comfortable" | "manageable" | "stretched" | "critical" | null;
  yearlySchedule: AmortizationYearItem[];
}

export function calculateHomeLoan(input: HomeLoanInput): HomeLoanResult {
  const propertyPrice = Math.max(0, input.propertyPrice);
  const downPaymentPercent = Math.min(Math.max(input.downPaymentPercent, 10), 90);
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, propertyPrice - downPaymentAmount);

  const tenureMonths = Math.max(12, input.tenureYears * 12);
  const monthlyRate = input.annualInterestRate / 100 / 12;

  let monthlyEMI = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, tenureMonths);
    monthlyEMI = (loanAmount * monthlyRate * factor) / (factor - 1);
  } else if (loanAmount > 0 && monthlyRate === 0) {
    monthlyEMI = loanAmount / tenureMonths;
  }

  const roundedEMI = Math.round(monthlyEMI);
  const totalRepayment = Math.round(roundedEMI * tenureMonths);
  const totalInterest = Math.max(0, totalRepayment - loanAmount);
  const interestToPrincipalRatio =
    loanAmount > 0 ? Number(((totalInterest / loanAmount) * 100).toFixed(1)) : 0;

  // DTI calculation
  let dtiRatio: number | null = null;
  let dtiRiskLevel: "comfortable" | "manageable" | "stretched" | "critical" | null = null;

  if (input.monthlyNetIncome && input.monthlyNetIncome > 0) {
    dtiRatio = Number(((roundedEMI / input.monthlyNetIncome) * 100).toFixed(1));
    if (dtiRatio <= 30) {
      dtiRiskLevel = "comfortable";
    } else if (dtiRatio <= 40) {
      dtiRiskLevel = "manageable";
    } else if (dtiRatio <= 50) {
      dtiRiskLevel = "stretched";
    } else {
      dtiRiskLevel = "critical";
    }
  }

  // Yearly schedule breakdown
  const yearlySchedule: AmortizationYearItem[] = [];
  let balance = loanAmount;
  let currentYearPrincipal = 0;
  let currentYearInterest = 0;

  for (let month = 1; month <= tenureMonths; month++) {
    const interestForMonth = balance * monthlyRate;
    const principalForMonth = monthlyEMI - interestForMonth;
    balance = Math.max(0, balance - principalForMonth);

    currentYearPrincipal += principalForMonth;
    currentYearInterest += interestForMonth;

    if (month % 12 === 0 || month === tenureMonths) {
      yearlySchedule.push({
        year: Math.ceil(month / 12),
        principalPaid: Math.round(currentYearPrincipal),
        interestPaid: Math.round(currentYearInterest),
        remainingBalance: Math.round(balance),
      });
      currentYearPrincipal = 0;
      currentYearInterest = 0;
    }
  }

  return {
    propertyPrice: Math.round(propertyPrice),
    downPaymentAmount: Math.round(downPaymentAmount),
    loanAmount: Math.round(loanAmount),
    monthlyEMI: roundedEMI,
    totalRepayment,
    totalInterest,
    interestToPrincipalRatio,
    dtiRatio,
    dtiRiskLevel,
    yearlySchedule,
  };
}
