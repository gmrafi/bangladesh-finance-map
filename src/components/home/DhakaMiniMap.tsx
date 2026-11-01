"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus, MapPin } from "lucide-react";

interface Pin {
  id: string;
  name: string;
  x: number;
  y: number;
  pinColor: string;
  badgeBg: string;
  badgeText: string;
  isKeyZone?: boolean;
}

const DHAKA_PINS: Pin[] = [
  {
    id: "uttara",
    name: "Uttara",
    x: 260,
    y: 70,
    pinColor: "#059669", // Vibrant Emerald Green
    badgeBg: "#ECFDF5",
    badgeText: "#065F46",
    isKeyZone: true,
  },
  {
    id: "mirpur",
    name: "Mirpur",
    x: 188,
    y: 120,
    pinColor: "#2563EB", // Royal Blue
    badgeBg: "#EFF6FF",
    badgeText: "#1E40AF",
  },
  {
    id: "bashundhara",
    name: "Bashundhara",
    x: 312,
    y: 105,
    pinColor: "#0D9488", // Teal
    badgeBg: "#F0FDFA",
    badgeText: "#115E59",
  },
  {
    id: "gulshan",
    name: "Gulshan",
    x: 280,
    y: 145,
    pinColor: "#7C3AED", // Royal Violet
    badgeBg: "#F5F3FF",
    badgeText: "#5B21B6",
    isKeyZone: true,
  },
  {
    id: "dhanmondi",
    name: "Dhanmondi",
    x: 198,
    y: 175,
    pinColor: "#D97706", // Warm Amber
    badgeBg: "#FFFBEB",
    badgeText: "#92400E",
  },
  {
    id: "motijheel",
    name: "Motijheel",
    x: 255,
    y: 205,
    pinColor: "#DC2626", // Crimson Red
    badgeBg: "#FEF2F2",
    badgeText: "#991B1B",
  },
];

export function DhakaMiniMap({
  selectedAreaId,
  onSelectArea,
}: {
  selectedAreaId: string;
  onSelectArea: (id: string) => void;
}) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  return (
    <div className="relative rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-3 shadow-xs flex flex-col justify-between h-full min-h-[300px] overflow-hidden">
      {/* Map Header Dropdown */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-800 shadow-xs border border-slate-200/80">
          <MapPin className="h-3.5 w-3.5 text-emerald-700" />
          <span>Dhaka, Bangladesh</span>
          <ChevronDown className="h-3 w-3 text-slate-400" />
        </div>

        {/* Legend pills */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-medium">
          <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span> Uttara
          </span>
          <span className="flex items-center gap-1 text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200/60">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600"></span> Gulshan
          </span>
        </div>
      </div>

      {/* SVG Map Canvas */}
      <div className="relative flex-1 w-full flex items-center justify-center my-1 select-none">
        <svg
          viewBox="140 40 220 190"
          className="w-full h-full max-h-[240px]"
          style={{ transform: `scale(${zoomLevel})`, transition: "transform 0.2s ease" }}
        >
          {/* Subtle Base Landmass & Grid */}
          <rect x="140" y="40" width="220" height="190" fill="#f8fafc" rx="8" />

          {/* Road Network Lines (Major highways, Airport Road, Mirpur Road) */}
          <path
            d="M 260 40 L 260 90 L 250 140 L 255 210"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 260 90 L 280 140 L 290 180"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 180 100 L 210 130 L 250 145"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 170 170 L 220 175 L 255 195 L 320 200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Elevated Metro Rail MRT Line-6 track in bright neon emerald */}
          <path
            d="M 260 55 L 230 90 L 210 130 L 210 170 L 250 195 L 255 205"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            opacity="0.9"
          />

          {/* Water Bodies: Buriganga, Turag, Balu, Hatirjheel in shimmering Sky Blue */}
          <path
            d="M 155 50 Q 170 130 160 180 T 210 230 T 290 230"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 330 60 Q 320 120 340 180"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Hatirjheel Promenade Lake */}
          <path
            d="M 245 155 Q 265 145 285 155"
            fill="none"
            stroke="#0284C7"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <text x="255" y="152" fill="#0284C7" fontSize="4.5" fontWeight="bold">
            Hatirjheel
          </text>

          {/* Shaded District Zone: Uttara (North) in Rich Emerald */}
          <path
            d="M 245 55 Q 275 50 280 75 Q 275 90 250 85 Z"
            fill="#D1FAE5"
            stroke="#059669"
            strokeWidth="1.2"
            opacity="0.9"
          />

          {/* Shaded District Zone: Gulshan (Central East) in Royal Purple */}
          <path
            d="M 268 135 Q 295 130 295 155 Q 285 165 270 160 Z"
            fill="#EDE9FE"
            stroke="#7C3AED"
            strokeWidth="1.2"
            opacity="0.9"
          />

          {/* Shaded District Zone: Dhanmondi in Warm Amber */}
          <path
            d="M 188 165 Q 208 160 210 182 Q 195 188 185 178 Z"
            fill="#FEF3C7"
            stroke="#D97706"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Central Dhaka Typography */}
          <text
            x="245"
            y="136"
            fill="#475569"
            fontSize="7"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            Dhaka
          </text>

          {/* Multi-Colored Neighborhood Pins */}
          {DHAKA_PINS.map((pin) => {
            const isSelected = selectedAreaId === pin.id;
            return (
              <g
                key={pin.id}
                onClick={() => onSelectArea(pin.id)}
                className="cursor-pointer group"
              >
                {/* Outer shadow / active pulse halo */}
                {isSelected && (
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="9"
                    fill={pin.pinColor}
                    opacity="0.3"
                    className="animate-ping"
                  />
                )}
                
                {/* Pin Base Circle */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={pin.isKeyZone ? "5" : "3.8"}
                  fill={pin.pinColor}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:scale-125"
                />

                {/* Pin Text Label Badge */}
                <rect
                  x={pin.x - (pin.name.length * 2.3 + 5)}
                  y={pin.y - 13}
                  width={pin.name.length * 4.6 + 10}
                  height="9"
                  rx="4.5"
                  fill={pin.badgeBg}
                  stroke={pin.pinColor}
                  strokeWidth="0.8"
                />
                <text
                  x={pin.x}
                  y={pin.y - 6.5}
                  textAnchor="middle"
                  fill={pin.badgeText}
                  fontSize="4.8"
                  fontWeight="bold"
                >
                  {pin.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Zoom Controls (+ / -) in bottom-right */}
      <div className="absolute bottom-3 right-3 flex flex-col gap-1 z-10">
        <button
          type="button"
          onClick={() => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45))}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-white border border-slate-200 shadow-xs text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Zoom In"
        >
          <Plus className="h-3 w-3" />
        </button>
        <button
          type="button"
          onClick={() => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85))}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-white border border-slate-200 shadow-xs text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Zoom Out"
        >
          <Minus className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
