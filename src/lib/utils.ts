import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBDT(amount: number): string {
  if (isNaN(amount)) return "৳ 0";
  return `৳ ${Math.round(amount).toLocaleString("en-IN")}`;
}

export function formatLakhCrore(amount: number): string {
  if (amount >= 10000000) {
    const crore = (amount / 10000000).toFixed(2);
    return `৳ ${crore} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `৳ ${lakh} L`;
  }
  return formatBDT(amount);
}
