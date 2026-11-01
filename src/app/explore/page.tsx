"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  SlidersHorizontal,
  Scale,
  Train,
  Shield,
  Droplets,
  Flame,
  Waves,
  ArrowRight,
  Info,
  CheckCircle,
  X,
  ExternalLink,
  ChevronRight,
  Bus,
} from "lucide-react";
import { DHAKA_NEIGHBORHOODS, Neighborhood } from "@/lib/data/neighborhoods";
import { formatBDT } from "@/lib/utils";

function ExploreMapContent() {
  const searchParams = useSearchParams();
  const initialAreaId = searchParams.get("area") || "gulshan";
  const initialCompareId = searchParams.get("compareWith") || null;

  const [selectedId, setSelectedId] = useState<string>(initialAreaId);
  const [compareId, setCompareId] = useState<string | null>(initialCompareId);
  const [bedroomType, setBedroomType] = useState<"2BHK" | "3BHK">("2BHK");
  const [maxBudget, setMaxBudget] = useState<number>(100000);
  const [commuteDestination, setCommuteDestination] = useState<string>("Motijheel / Dilkusha");
  const [mrtOnly, setMrtOnly] = useState<boolean>(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState<boolean>(true);

  // Sync from URL if query params change
  useEffect(() => {
    const area = searchParams.get("area");
    if (area && DHAKA_NEIGHBORHOODS.some((n) => n.id === area)) {
      setSelectedId(area);
    }
  }, [searchParams]);

  const selectedArea =
    DHAKA_NEIGHBORHOODS.find((n) => n.id === selectedId) || DHAKA_NEIGHBORHOODS[0];

  const compareArea = compareId
    ? DHAKA_NEIGHBORHOODS.find((n) => n.id === compareId) || null
    : null;

  // Filtered neighborhoods
  const filteredNeighborhoods = useMemo(() => {
    return DHAKA_NEIGHBORHOODS.filter((n) => {
      const rent = bedroomType === "2BHK" ? n.metrics.rent2BHK : n.metrics.rent3BHK;
      if (rent > maxBudget) return false;
      if (mrtOnly) {
        const hasMrt = n.commuteTimes.some((c) => c.mrtOption);
        if (!hasMrt) return false;
      }
      return true;
    });
  }, [bedroomType, maxBudget, mrtOnly]);

  const commuteInfo = selectedArea.commuteTimes.find(
    (c) => c.destination === commuteDestination
  );

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background">
      {/* Top Action Bar */}
      <div className="border-b border-border bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-foreground">
                  বাসাIQ · Dhaka Neighborhood Intelligence
                </h1>
                <span className="hidden sm:inline-block rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground font-mono">
                  8 Curated Sectors
                </span>
              </div>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Interactive spatial decision model calibrated for rental affordability and transit
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Compare toggle button */}
            <button
              onClick={() => {
                if (compareId) {
                  setCompareId(null);
                } else {
                  // pick a different area for comparison
                  const candidate = DHAKA_NEIGHBORHOODS.find((n) => n.id !== selectedArea.id);
                  if (candidate) setCompareId(candidate.id);
                }
              }}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all border ${
                compareId
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-slate-700 border-border hover:bg-slate-50"
              }`}
            >
              <Scale className="h-3.5 w-3.5" />
              <span>{compareId ? "Exit Compare Mode" : "Compare 2 Areas"}</span>
            </button>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Column Dashboard Body */}
      <div className="mx-auto flex-1 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 p-0 lg:py-6 lg:px-6">
        {/* Left Column: Filter & Preference Panel (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-5">
          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Filter Preferences
              </span>
              <button
                onClick={() => {
                  setMaxBudget(120000);
                  setBedroomType("2BHK");
                  setMrtOnly(false);
                }}
                className="text-[11px] text-primary hover:underline font-medium"
              >
                Reset
              </button>
            </div>

            {/* Bedroom configuration */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                Apartment Layout
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setBedroomType("2BHK")}
                  className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                    bedroomType === "2BHK"
                      ? "border-primary bg-secondary/80 text-primary font-bold shadow-xs"
                      : "border-border bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  2 Bedrooms
                </button>
                <button
                  type="button"
                  onClick={() => setBedroomType("3BHK")}
                  className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                    bedroomType === "3BHK"
                      ? "border-primary bg-secondary/80 text-primary font-bold shadow-xs"
                      : "border-border bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  3 Bedrooms
                </button>
              </div>
            </div>

            {/* Max Budget Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Max Monthly Rent</span>
                <span className="font-mono font-bold text-primary">{formatBDT(maxBudget)}</span>
              </div>
              <input
                type="range"
                min={25000}
                max={250000}
                step={5000}
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-primary h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>৳25K</span>
                <span>৳100K</span>
                <span>৳250K</span>
              </div>
            </div>

            {/* Commute Office Target */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 block">
                Primary Office Destination
              </label>
              <select
                value={commuteDestination}
                onChange={(e) => setCommuteDestination(e.target.value)}
                className="w-full rounded-lg border border-border bg-slate-50 p-2 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="Motijheel / Dilkusha">Motijheel / Dilkusha (Financial Hub)</option>
                <option value="Kawran Bazar / Farmgate">Kawran Bazar / Farmgate</option>
                <option value="Tejgaon Industrial Hub">Tejgaon Commercial District</option>
                <option value="Gulshan / Banani">Gulshan / Banani Corporate Center</option>
                <option value="Uttara / Airport">Uttara / Airport Zone</option>
              </select>
            </div>

            {/* Transit Filter */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={mrtOnly}
                  onChange={(e) => setMrtOnly(e.target.checked)}
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                />
                <span className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <Train className="h-3.5 w-3.5 text-primary" />
                  MRT Line-6 Connected Only
                </span>
              </label>
            </div>
          </div>

          {/* Matching Neighborhoods List */}
          <div className="rounded-2xl border border-border bg-white p-4 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
              <span>Matching Sectors</span>
              <span className="font-mono text-muted-foreground">
                ({filteredNeighborhoods.length})
              </span>
            </div>
            <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
              {filteredNeighborhoods.map((n) => {
                const rent = bedroomType === "2BHK" ? n.metrics.rent2BHK : n.metrics.rent3BHK;
                const isSelected = n.id === selectedArea.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => setSelectedId(n.id)}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      isSelected
                        ? "bg-secondary text-primary font-bold border border-primary/20"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div>
                      <div>{n.name}</div>
                      <div className="text-[10px] text-muted-foreground">{n.zone}</div>
                    </div>
                    <div className="text-right font-mono font-medium text-slate-900">
                      {formatBDT(rent)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Center Column: Interactive Spatial Visualization */}
        <section className="col-span-1 lg:col-span-5 flex flex-col space-y-3">
          <div className="relative rounded-2xl border border-border bg-slate-900 text-white overflow-hidden shadow-md flex-1 min-h-[460px] flex flex-col">
            {/* Map Header Overlay */}
            <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
              <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200 pointer-events-auto">
                <span className="font-semibold text-white">Dhaka Metropolitan Grid</span>
                <span className="text-[10px] text-slate-400 ml-2">Click an area node</span>
              </div>
              <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-[11px] font-mono text-emerald-400 pointer-events-auto flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Model</span>
              </div>
            </div>

            {/* Interactive SVG Dhaka Spatial Canvas */}
            <div className="relative flex-1 w-full h-full flex items-center justify-center p-4 bg-slate-950">
              <svg
                viewBox="250 80 400 440"
                className="w-full h-full max-h-[500px] select-none"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" }}
              >
                {/* River background curves (Buriganga / Turag / Balu) */}
                <path
                  d="M 280,100 Q 290,260 270,380 T 320,520"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 620,120 Q 610,280 630,420"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Hatirjheel Lake representation */}
                <path
                  d="M 450,330 Q 510,310 540,340"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <text x="490" y="325" fill="#38bdf8" fontSize="8" opacity="0.7">
                  Hatirjheel
                </text>

                {/* MRT Line 6 Route Indicator (Uttara to Motijheel) */}
                <path
                  d="M 390,100 L 350,180 L 360,280 L 380,360 L 380,480"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeDasharray="4 3"
                  opacity="0.8"
                />
                <text x="310" y="140" fill="#10b981" fontSize="8" fontWeight="bold">
                  MRT Line-6
                </text>

                {/* Area Nodes */}
                {DHAKA_NEIGHBORHOODS.map((n) => {
                  const isSelected = n.id === selectedArea.id;
                  const isCompare = n.id === compareArea?.id;
                  const rent =
                    bedroomType === "2BHK" ? n.metrics.rent2BHK : n.metrics.rent3BHK;
                  const inFilter = filteredNeighborhoods.some((fn) => fn.id === n.id);

                  return (
                    <g
                      key={n.id}
                      onClick={() => {
                        if (compareId && compareId !== n.id && n.id !== selectedArea.id) {
                          setCompareId(n.id);
                        } else {
                          setSelectedId(n.id);
                        }
                      }}
                      className="cursor-pointer transition-all duration-200"
                      opacity={inFilter ? 1 : 0.35}
                    >
                      {/* Pulse circle for selected */}
                      {isSelected && (
                        <circle
                          cx={n.coordinates.svgX}
                          cy={n.coordinates.svgY}
                          r="24"
                          fill="#0F766E"
                          opacity="0.25"
                          className="animate-ping"
                        />
                      )}
                      {/* Main Node Circle */}
                      <circle
                        cx={n.coordinates.svgX}
                        cy={n.coordinates.svgY}
                        r={isSelected ? "14" : isCompare ? "12" : "10"}
                        fill={
                          isSelected
                            ? "#0F766E"
                            : isCompare
                            ? "#d97706"
                            : inFilter
                            ? "#334155"
                            : "#1e293b"
                        }
                        stroke={isSelected ? "#ffffff" : isCompare ? "#ffffff" : "#64748b"}
                        strokeWidth={isSelected || isCompare ? "2.5" : "1.5"}
                      />
                      {/* Node Label */}
                      <text
                        x={n.coordinates.svgX}
                        y={n.coordinates.svgY - 15}
                        textAnchor="middle"
                        fill={isSelected ? "#5eead4" : isCompare ? "#fde68a" : "#cbd5e1"}
                        fontSize={isSelected ? "11" : "9"}
                        fontWeight={isSelected || isCompare ? "bold" : "normal"}
                      >
                        {n.name}
                      </text>
                      {/* Price pill under node */}
                      <text
                        x={n.coordinates.svgX}
                        y={n.coordinates.svgY + 20}
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="8"
                        fontFamily="monospace"
                      >
                        {formatBDT(rent)}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend Footer */}
            <div className="bg-slate-950 border-t border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary border border-white"></span>
                  <span>Primary Selected</span>
                </div>
                {compareArea && (
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-600 border border-white"></span>
                    <span>Comparison Area</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-4 bg-emerald-500 rounded"></span>
                  <span>MRT-6 Metro Line</span>
                </div>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">
                Source: GIS Survey 2024
              </span>
            </div>
          </div>
        </section>

        {/* Right Column: Area Intelligence & Decision Card (Desktop & Tablet) */}
        <aside className="col-span-1 lg:col-span-4 space-y-4">
          {/* Main Area Profile */}
          <div className="rounded-2xl border border-border bg-white p-5 shadow-sm space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {selectedArea.zone} Zone · Dhaka
                </div>
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span>{selectedArea.name}</span>
                  <span className="text-sm font-normal text-muted-foreground font-bengali">
                    ({selectedArea.banglaName})
                  </span>
                </h2>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {selectedArea.tagline}
                </p>
              </div>
            </div>

            {/* Rent & Purchase Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">Avg Rent (2 BHK)</span>
                <div className="text-base font-bold text-foreground font-mono mt-0.5">
                  {formatBDT(selectedArea.metrics.rent2BHK)}
                </div>
                <span className="text-[10px] text-muted-foreground">Monthly benchmark</span>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">Avg Rent (3 BHK)</span>
                <div className="text-base font-bold text-foreground font-mono mt-0.5">
                  {formatBDT(selectedArea.metrics.rent3BHK)}
                </div>
                <span className="text-[10px] text-muted-foreground">Monthly benchmark</span>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">Square Feet Price</span>
                <div className="text-base font-bold text-foreground font-mono mt-0.5">
                  {formatBDT(selectedArea.metrics.sqftPrice)}
                </div>
                <span className="text-[10px] text-muted-foreground">Apartment purchase / sqft</span>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">Service Charge</span>
                <div className="text-base font-bold text-foreground font-mono mt-0.5">
                  ~{formatBDT(selectedArea.metrics.serviceChargeAvg)}
                </div>
                <span className="text-[10px] text-muted-foreground">Building upkeep avg</span>
              </div>
            </div>

            {/* Commute Rush Hour Indicator */}
            <div className="rounded-xl border border-border p-3.5 space-y-2 bg-secondary/20">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Bus className="h-4 w-4 text-primary" />
                  <span>Commute to {commuteDestination.split(" ")[0]}</span>
                </div>
                <span className="font-mono font-bold text-primary text-sm">
                  {commuteInfo?.typicalRushHourMin ?? "--"} mins
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Distance: ~{commuteInfo?.distanceKm ?? "--"} km</span>
                {commuteInfo?.mrtOption ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Train className="h-3 w-3" />
                    MRT-6 Line Available
                  </span>
                ) : (
                  <span>Surface Road Transit</span>
                )}
              </div>
            </div>

            {/* Civic Infrastructure Scores */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Utility & Infrastructure Profile
              </span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg border border-slate-100 p-2 bg-slate-50">
                  <div className="flex items-center justify-center text-slate-600 mb-1">
                    <Droplets className="h-3.5 w-3.5 text-blue-500" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">Water Supply</div>
                  <div className="font-semibold text-foreground text-xs mt-0.5">
                    {selectedArea.metrics.waterReliability}
                  </div>
                </div>
                <div className="rounded-lg border border-slate-100 p-2 bg-slate-50">
                  <div className="flex items-center justify-center text-slate-600 mb-1">
                    <Flame className="h-3.5 w-3.5 text-amber-500" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">Gas Source</div>
                  <div className="font-semibold text-foreground text-xs mt-0.5">
                    {selectedArea.metrics.gasSupply.split(" ")[0]}
                  </div>
                </div>
                <div className="rounded-lg border border-slate-100 p-2 bg-slate-50">
                  <div className="flex items-center justify-center text-slate-600 mb-1">
                    <Waves className="h-3.5 w-3.5 text-cyan-600" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">Waterlogging</div>
                  <div className="font-semibold text-foreground text-xs mt-0.5">
                    {selectedArea.metrics.waterloggingRisk}
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhood Amenities */}
            <div className="space-y-1.5 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                Notable Institutions
              </span>
              <div className="text-[11px] text-slate-600 space-y-1">
                <div>
                  <strong className="text-slate-800">Schools:</strong>{" "}
                  {selectedArea.amenities.schools.join(", ")}
                </div>
                <div>
                  <strong className="text-slate-800">Healthcare:</strong>{" "}
                  {selectedArea.amenities.hospitals.join(", ")}
                </div>
                <div>
                  <strong className="text-slate-800">Recreation:</strong>{" "}
                  {selectedArea.amenities.parks.join(", ")}
                </div>
              </div>
            </div>

            {/* Cross-module action buttons */}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href={`/finance?tab=loan&propertyPrice=${
                  selectedArea.metrics.sqftPrice * 1250
                }`}
                className="flex items-center justify-center gap-1.5 w-full rounded-lg bg-primary py-2.5 text-xs font-semibold text-white hover:bg-primary-dark transition-colors shadow-xs"
              >
                <span>Calculate Home Loan for {selectedArea.name}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Comparison Panel if active */}
          {compareArea && (
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/40 p-5 shadow-sm space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-amber-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Side-by-Side: {selectedArea.name} vs {compareArea.name}
                  </span>
                </div>
                <button
                  onClick={() => setCompareId(null)}
                  className="text-xs text-amber-800 hover:text-amber-950 font-semibold"
                >
                  Close
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-amber-200/40">
                  <span className="text-slate-600 font-medium">Rent (2 BHK)</span>
                  <div className="font-mono font-semibold">
                    <span>{formatBDT(selectedArea.metrics.rent2BHK)}</span>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="text-amber-800">{formatBDT(compareArea.metrics.rent2BHK)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-amber-200/40">
                  <span className="text-slate-600 font-medium">Purchase / sqft</span>
                  <div className="font-mono font-semibold">
                    <span>{formatBDT(selectedArea.metrics.sqftPrice)}</span>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="text-amber-800">{formatBDT(compareArea.metrics.sqftPrice)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-amber-200/40">
                  <span className="text-slate-600 font-medium">Safety Score</span>
                  <div className="font-mono font-semibold">
                    <span>{selectedArea.metrics.safetyScore}/10</span>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="text-amber-800">{compareArea.metrics.safetyScore}/10</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-600 font-medium">Waterlogging</span>
                  <div className="font-semibold">
                    <span>{selectedArea.metrics.waterloggingRisk}</span>
                    <span className="mx-2 text-slate-400">vs</span>
                    <span className="text-amber-800">{compareArea.metrics.waterloggingRisk}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs p-0 lg:hidden"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="w-full max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl space-y-5 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-sm font-bold text-foreground">Filter Neighborhoods</span>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Layout */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700">Layout</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setBedroomType("2BHK")}
                  className={`py-2 text-xs font-medium rounded-lg border ${
                    bedroomType === "2BHK"
                      ? "border-primary bg-secondary text-primary font-bold"
                      : "border-border bg-white"
                  }`}
                >
                  2 Bedrooms
                </button>
                <button
                  type="button"
                  onClick={() => setBedroomType("3BHK")}
                  className={`py-2 text-xs font-medium rounded-lg border ${
                    bedroomType === "3BHK"
                      ? "border-primary bg-secondary text-primary font-bold"
                      : "border-border bg-white"
                  }`}
                >
                  3 Bedrooms
                </button>
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Max Budget</span>
                <span className="font-mono font-bold text-primary">{formatBDT(maxBudget)}</span>
              </div>
              <input
                type="range"
                min={25000}
                max={250000}
                step={5000}
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white"
            >
              Apply Filters ({filteredNeighborhoods.length} Areas)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExploreMapPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center p-8 text-sm text-muted-foreground">
          Loading Dhaka Spatial Intelligence Model...
        </div>
      }
    >
      <ExploreMapContent />
    </Suspense>
  );
}
