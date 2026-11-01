"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Menu,
  X,
  Search,
  Bell,
  User,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  MapPin,
  FileText,
  CreditCard,
  Scale,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [financeDropdownOpen, setFinanceDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = [
    { title: "Gulshan vs Uttara Comparison", category: "Explore Map", href: "/explore?area=gulshan&compareWith=uttara" },
    { title: "Dhanmondi Neighborhood Intelligence", category: "Explore Map", href: "/explore?area=dhanmondi" },
    { title: "Bangladesh Income Tax Calculator 2024–2025", category: "Tax & e-TIN", href: "/tax" },
    { title: "Step 1: Get your e-TIN Application Guide", category: "Tax & e-TIN", href: "/tax#etin-guide" },
    { title: "Home Loan Affordability & EMI Simulator", category: "Finance Tools", href: "/finance?tab=loan" },
    { title: "CardMap BD: 5-Star Hotel BOGO Buffet", category: "Finance Tools", href: "/finance?tab=cards" },
    { title: "Safe-Yield Radar: Sanchayapatra & Treasury Bonds", category: "Finance Tools", href: "/finance?tab=yields" },
    { title: "Salary & Net Income Reality Index", category: "Finance Tools", href: "/finance?tab=scenarios" },
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Identity matching Screenshot */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-slate-900">
                  FinanceMap
                </span>
                <span className="text-lg font-bold tracking-tight text-emerald-700">
                  Bangladesh
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links matching Screenshot 2 */}
            <nav className="hidden lg:flex items-center gap-1 border-l border-slate-200 pl-6" aria-label="Main Navigation">
              <Link
                href="/"
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-md transition-colors",
                  pathname === "/"
                    ? "bg-emerald-50 text-emerald-800 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                Home
              </Link>
              <Link
                href="/explore"
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-md transition-colors",
                  pathname === "/explore"
                    ? "bg-emerald-50 text-emerald-800 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                Explore Map
              </Link>
              <Link
                href="/tax"
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-md transition-colors",
                  pathname === "/tax"
                    ? "bg-emerald-50 text-emerald-800 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                Tax & e-TIN
              </Link>

              {/* Finance Tools Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setFinanceDropdownOpen(!financeDropdownOpen)}
                  onBlur={() => setTimeout(() => setFinanceDropdownOpen(false), 200)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors",
                    pathname.startsWith("/finance")
                      ? "bg-emerald-50 text-emerald-800 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  <span>Finance Tools</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>
                {financeDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg z-50">
                    <Link
                      href="/finance?tab=loan"
                      className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                    >
                      Home Loan Affordability
                    </Link>
                    <Link
                      href="/finance?tab=cards"
                      className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                    >
                      CardMap BD Privileges
                    </Link>
                    <Link
                      href="/finance?tab=yields"
                      className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                    >
                      Safe-Yield Radar (Bonds & NSD)
                    </Link>
                    <Link
                      href="/finance?tab=scenarios"
                      className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                    >
                      Salary & Scenario Lab
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/methodology"
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-md transition-colors",
                  pathname === "/methodology"
                    ? "bg-emerald-50 text-emerald-800 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                Insights
              </Link>
              <Link
                href="/explore?area=gulshan&compareWith=uttara"
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              >
                Compare Areas
              </Link>
            </nav>
          </div>

          {/* Right Header Controls matching Screenshot 2 */}
          <div className="flex items-center gap-3">
            {/* Search Input Box: Icon only on small mobile, expanded bar on tablet/desktop */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="sm:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <div
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-500 hover:border-slate-300 hover:bg-white cursor-pointer transition-all w-52 lg:w-72"
            >
              <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="truncate">Search areas, tools, or topics...</span>
              <kbd className="ml-auto shrink-0 inline-flex items-center rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400 font-mono whitespace-nowrap">
                Ctrl K
              </kbd>
            </div>

            {/* Notification & User Avatar icons */}
            <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="Account"
              >
                <User className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 pb-3 mb-3 border-b border-slate-100">
              <Link
                href="/explore"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/80 text-emerald-800 text-xs font-semibold"
              >
                <MapPin className="h-4 w-4 text-emerald-700" />
                <span>Explore Map</span>
              </Link>
              <Link
                href="/tax"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-slate-800 text-xs font-semibold hover:bg-slate-100"
              >
                <FileText className="h-4 w-4 text-emerald-700" />
                <span>Tax & e-TIN</span>
              </Link>
              <Link
                href="/finance?tab=loan"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-slate-800 text-xs font-semibold hover:bg-slate-100"
              >
                <CreditCard className="h-4 w-4 text-emerald-700" />
                <span>Finance Tools</span>
              </Link>
              <Link
                href="/explore?area=gulshan&compareWith=uttara"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-slate-800 text-xs font-semibold hover:bg-slate-100"
              >
                <Scale className="h-4 w-4 text-emerald-700" />
                <span>Compare Areas</span>
              </Link>
            </div>
            <div className="space-y-1 text-xs">
              <Link
                href="/methodology"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900"
              >
                Insights & Methodology
              </Link>
              <Link
                href="/tax#etin-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-slate-600 hover:text-slate-900"
              >
                Step 1: Get your e-TIN
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Command / Search Dialog */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-xs p-4 pt-20"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-slate-200 px-4 py-3">
              <Search className="h-5 w-5 text-slate-400 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search Dhaka areas, income tax rules, home loans, card offers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs text-slate-400 hover:text-slate-700 px-1.5 py-1 rounded border border-slate-200"
              >
                ESC
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto p-2 divide-y divide-slate-100">
              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-500">
                  No decision tools or areas found matching &quot;{searchQuery}&quot;.
                </div>
              ) : (
                searchResults.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-sm group"
                  >
                    <div>
                      <div className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500">{item.category}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-700 transition-colors" />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
