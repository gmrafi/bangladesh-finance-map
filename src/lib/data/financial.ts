export interface CardOffer {
  id: string;
  bank: string;
  cardName: string;
  network: "Visa" | "Mastercard" | "Amex";
  tier: "Signature" | "Platinum" | "Titanium" | "Gold";
  category: "Dining / BOGO" | "Grocery / Retail" | "Airport Lounge" | "Travel / Flight";
  headline: string;
  details: string;
  participatingVenues: string[];
  capPerMonth: string;
  validityUntil: string;
  verifiedSource: string;
}

export const CARD_OFFERS: CardOffer[] = [
  {
    id: "scb-dining-signature",
    bank: "Standard Chartered Bangladesh",
    cardName: "Visa Signature Credit Card",
    network: "Visa",
    tier: "Signature",
    category: "Dining / BOGO",
    headline: "Buy 1 Get 1 Buffet at 5-Star Hotels",
    details: "Complimentary companion buffet round the year at The Westin Dhaka, Sheraton Dhaka, and Radisson Blu Water Garden.",
    participatingVenues: ["The Westin Dhaka (Seasonal Tastes)", "Sheraton Dhaka (The Garden Kitchen)", "Radisson Blu Dhaka"],
    capPerMonth: "1 complimentary buffet per card per day",
    validityUntil: "December 31, 2025",
    verifiedSource: "Standard Chartered Bangladesh Rewards Schedule 2024-2025",
  },
  {
    id: "city-amex-grocery",
    bank: "City Bank",
    cardName: "American Express Platinum Credit Card",
    network: "Amex",
    tier: "Platinum",
    category: "Grocery / Retail",
    headline: "Up to 10% Savings & Membership Rewards at Superstores",
    details: "Earn 10X Membership Rewards points or flat cashback on grocery purchases at Shwapno, Agora, Meena Bazar, and Unimart.",
    participatingVenues: ["Shwapno", "Agora Superstores", "Unimart", "Meena Bazar"],
    capPerMonth: "Max ৳2,000 cash equivalent points/mo",
    validityUntil: "Ongoing 2025 Program",
    verifiedSource: "City Bank Amex Retail Privileges Portal",
  },
  {
    id: "ebl-skybanking-lounge",
    bank: "Eastern Bank PLC (EBL)",
    cardName: "Visa Platinum & Signature",
    network: "Visa",
    tier: "Signature",
    category: "Airport Lounge",
    headline: "Complimentary Balaka Executive Lounge Access",
    details: "Free access with companion at Balaka Lounge (Hazrat Shahjalal International Airport, Dhaka) & domestic airport lounges (Cox's Bazar, Chattogram, Sylhet).",
    participatingVenues: ["Balaka Lounge Terminal 1/2", "Shah Amanat Domestic Lounge"],
    capPerMonth: "Up to 4 international visits + domestic unlimited",
    validityUntil: "December 31, 2025",
    verifiedSource: "EBL Skylounge Schedule 2024-2025",
  },
  {
    id: "brac-aeroplan-dining",
    bank: "BRAC Bank PLC",
    cardName: "BRAC Bank Visa Signature",
    network: "Visa",
    tier: "Signature",
    category: "Dining / BOGO",
    headline: "Buy-1-Get-1 & Buy-1-Get-2 Dining Privileges",
    details: "Exclusive BOGO dining at InterContinental Dhaka, Le Méridien Dhaka, Amari Dhaka, and Renaissance Dhaka Gulshan.",
    participatingVenues: ["InterContinental Dhaka", "Le Méridien Latest Recipe", "Renaissance BAHAR"],
    capPerMonth: "Subject to restaurant terms & prior reservation",
    validityUntil: "Ongoing 2025",
    verifiedSource: "BRAC Bank Tara & Signature Lifestyle Privileges",
  },
];

export interface YieldInstrument {
  id: string;
  name: string;
  banglaName: string;
  category: "National Savings (Sanchayapatra)" | "Government Treasury Bond" | "Bank Fixed Deposit";
  annualYieldPercent: number;
  tenureYears: number;
  taxDeductionAtSource: string;
  eligibility: string;
  investmentCap: string;
  statutoryRulesRef: string;
}

export const YIELD_BENCHMARKS: YieldInstrument[] = [
  {
    id: "paribar-sanchayapatra",
    name: "Family Savings Certificate (Paribar Sanchayapatra)",
    banglaName: "পরিবার সঞ্চয়পত্র",
    category: "National Savings (Sanchayapatra)",
    annualYieldPercent: 11.52,
    tenureYears: 5,
    taxDeductionAtSource: "5% TDS up to ৳5 Lakh; 10% TDS above ৳5 Lakh",
    eligibility: "Any Bangladeshi female citizen (18+), specially-abled, or male (65+)",
    investmentCap: "Individual: ৳45 Lakh (tiered interest rates apply beyond ৳15L/৳30L)",
    statutoryRulesRef: "National Savings Directorate (NSD) Rate Card 2024",
  },
  {
    id: "pensioner-sanchayapatra",
    name: "Pensioner Savings Certificate",
    banglaName: "পেনশনার সঞ্চয়পত্র",
    category: "National Savings (Sanchayapatra)",
    annualYieldPercent: 11.76,
    tenureYears: 5,
    taxDeductionAtSource: "5% TDS up to ৳5 Lakh; 10% TDS above ৳5 Lakh",
    eligibility: "Retired government, semi-government, autonomous body employees & armed forces",
    investmentCap: "Up to 100% of net retirement gratuity/provident fund",
    statutoryRulesRef: "National Savings Directorate Rules",
  },
  {
    id: "5yr-bangladesh-sanchayapatra",
    name: "5-Year Bangladesh Sanchayapatra",
    banglaName: "৫ বছর মেয়াদী বাংলাদেশ সঞ্চয়পত্র",
    category: "National Savings (Sanchayapatra)",
    annualYieldPercent: 11.28,
    tenureYears: 5,
    taxDeductionAtSource: "5% TDS up to ৳5 Lakh; 10% TDS above ৳5 Lakh",
    eligibility: "All Bangladeshi citizens (individuals, joint names)",
    investmentCap: "Single: ৳30 Lakh; Joint: ৳60 Lakh",
    statutoryRulesRef: "National Savings Directorate Rate Slabs",
  },
  {
    id: "treasury-bond-10yr",
    name: "10-Year Bangladesh Government Treasury Bond (BGTB)",
    banglaName: "১০ বছর মেয়াদী ট্রেজারি বন্ড",
    category: "Government Treasury Bond",
    annualYieldPercent: 12.15,
    tenureYears: 10,
    taxDeductionAtSource: "5% TDS on interest coupons",
    eligibility: "Individuals, institutional investors, NRBs via primary dealer banks",
    investmentCap: "No upper ceiling; minimum auction lot ৳1 Lakh",
    statutoryRulesRef: "Bangladesh Bank Public Debt Management Department Auction Results",
  },
  {
    id: "fdr-top-commercial-banks",
    name: "1-Year Fixed Deposit Receipt (Top Rated Private Banks)",
    banglaName: "১ বছর মেয়াদী এফডিআর (প্রথম সারির ব্যাংক)",
    category: "Bank Fixed Deposit",
    annualYieldPercent: 9.75,
    tenureYears: 1,
    taxDeductionAtSource: "10% TDS for e-TIN return submitters; 15% for non-filers",
    eligibility: "Any individual or joint account holder",
    investmentCap: "Insured up to ৳2 Lakh under Bangladesh Bank Deposit Insurance Scheme",
    statutoryRulesRef: "Bangladesh Bank Weighted Average Deposit Rates 2024-2025",
  },
];
