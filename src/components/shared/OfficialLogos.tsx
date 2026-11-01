import React from "react";

// Official National Board of Revenue (NBR) Seal
export function NBRLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Crimson Ring */}
      <circle cx="50" cy="50" r="48" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="2,2" />
      <circle cx="50" cy="50" r="40" fill="#991B1B" />
      
      {/* Inner Gold Ring with Crest */}
      <circle cx="50" cy="50" r="28" fill="#FEE2E2" stroke="#FBBF24" strokeWidth="1.5" />
      
      {/* National Water Lily (Shapla) Stylized in Red/Gold */}
      <path
        d="M 50 32 C 46 40 42 46 50 56 C 58 46 54 40 50 32 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="0.8"
      />
      <path
        d="M 50 44 C 40 42 36 50 44 56 C 48 53 50 47 50 44 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="0.8"
      />
      <path
        d="M 50 44 C 60 42 64 50 56 56 C 52 53 50 47 50 44 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="0.8"
      />
      
      {/* 4 Golden Stars representing Constitution */}
      <polygon points="50,22 51.5,25.5 55,25.5 52,27.5 53.5,31 50,29 46.5,31 48,27.5 45,25.5 48.5,25.5" fill="#FBBF24" />
      <circle cx="34" cy="28" r="1.8" fill="#FBBF24" />
      <circle cx="66" cy="28" r="1.8" fill="#FBBF24" />
      
      {/* Circular text banner simulation */}
      <path id="nbr-text-path" d="M 20,50 A 30,30 0 1,1 80,50" fill="none" />
      <text fill="#FEF08A" fontSize="7.5" fontWeight="bold" textAnchor="middle">
        <textPath href="#nbr-text-path" startOffset="50%">
          জাতীয় রাজস্ব বোর্ড
        </textPath>
      </text>
      
      <text x="50" y="72" fill="#FEF08A" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        NBR · BD
      </text>
    </svg>
  );
}

// Official Bangladesh Bureau of Statistics (BBS) Seal
export function BBSLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Forest Green Ring */}
      <circle cx="50" cy="50" r="48" fill="#047857" stroke="#065F46" strokeWidth="2" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="#A7F3D0" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" fill="#065F46" />
      
      {/* White center with statistical chart / graph symbol */}
      <circle cx="50" cy="50" r="28" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" />
      
      {/* Bar Chart / Statistics Icon in BBS */}
      <rect x="36" y="52" width="5.5" height="12" rx="1" fill="#047857" />
      <rect x="44" y="44" width="5.5" height="20" rx="1" fill="#059669" />
      <rect x="52" y="38" width="5.5" height="26" rx="1" fill="#10B981" />
      <rect x="60" y="48" width="5.5" height="16" rx="1" fill="#34D399" />
      
      {/* Trend upward polyline */}
      <polyline points="37,50 45,41 53,34 62,44" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      <circle cx="62" cy="44" r="2" fill="#DC2626" />
      
      {/* Text Banner */}
      <path id="bbs-text-path" d="M 18,50 A 32,32 0 1,1 82,50" fill="none" />
      <text fill="#A7F3D0" fontSize="7" fontWeight="bold" textAnchor="middle">
        <textPath href="#bbs-text-path" startOffset="50%">
          পরিসংখ্যান ব্যুরো
        </textPath>
      </text>
      
      <text x="50" y="80" fill="#FDE047" fontSize="8" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">
        BBS
      </text>
    </svg>
  );
}

// Official Rajdhani Unnayan Kartripakkha (RAJUK) Emblem
export function RAJUKLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Circular Emblem */}
      <circle cx="50" cy="50" r="48" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
      <circle cx="50" cy="50" r="44" fill="#F8FAFC" />
      
      {/* Geometric Architecture / Planned City Icon */}
      {/* Modern High-Rise City Skyline in Navy/Teal */}
      <polygon points="50,22 66,36 66,74 34,74 34,36" fill="#0369A1" />
      <polygon points="50,22 60,34 60,74 40,74 40,34" fill="#0284C7" />
      <polygon points="50,25 50,74 42,74 42,37" fill="#38BDF8" opacity="0.6" />
      
      {/* Windows grid in building */}
      <rect x="45" y="42" width="3" height="4" fill="#FFFFFF" />
      <rect x="52" y="42" width="3" height="4" fill="#FFFFFF" />
      <rect x="45" y="50" width="3" height="4" fill="#FFFFFF" />
      <rect x="52" y="50" width="3" height="4" fill="#FFFFFF" />
      <rect x="45" y="58" width="3" height="4" fill="#FFFFFF" />
      <rect x="52" y="58" width="3" height="4" fill="#FFFFFF" />
      
      {/* Planned road base curve */}
      <path d="M 24 74 Q 50 64 76 74" fill="none" stroke="#DC2626" strokeWidth="3" />
      <path d="M 20 80 Q 50 68 80 80" fill="none" stroke="#16A34A" strokeWidth="2.5" />
      
      {/* RAJUK Text */}
      <text x="50" y="91" fill="#0F172A" fontSize="7" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">
        RAJUK · রাজউক
      </text>
    </svg>
  );
}

// Official Google Maps 4-Color Pin Logo
export function GoogleMapsLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Glow / Soft Card Background */}
      <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      
      {/* Standard Google Maps 4-color Pin */}
      {/* Green Top-Left quadrant */}
      <path
        d="M 50 18 C 36 18 25 29 25 43 C 25 52 30 61 38 72 L 50 86 L 50 43 Z"
        fill="#34A853"
      />
      {/* Red Top-Right quadrant */}
      <path
        d="M 50 18 C 64 18 75 29 75 43 C 75 52 70 61 62 72 L 50 86 L 50 43 Z"
        fill="#EA4335"
      />
      {/* Yellow Accent arc */}
      <path
        d="M 50 18 C 58 18 66 22 71 28 L 50 43 Z"
        fill="#FBBC04"
      />
      {/* Blue Base Core */}
      <path
        d="M 50 43 L 38 72 L 50 86 L 62 72 Z"
        fill="#4285F4"
      />
      {/* White Center Hole */}
      <circle cx="50" cy="42" r="10" fill="#FFFFFF" />
    </svg>
  );
}

// Bangladesh Bank Logo (Central Bank)
export function BangladeshBankLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#14532D" stroke="#166534" strokeWidth="2" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="30" fill="#15803D" />
      {/* Golden Bengal Tiger / Bank Crest Symbol */}
      <path
        d="M 40 40 Q 50 32 60 40 Q 64 52 50 62 Q 36 52 40 40 Z"
        fill="#FBBF24"
        stroke="#D97706"
        strokeWidth="1"
      />
      <circle cx="46" cy="44" r="1.5" fill="#14532D" />
      <circle cx="54" cy="44" r="1.5" fill="#14532D" />
      <text x="50" y="82" fill="#FEF08A" fontSize="7" fontWeight="bold" textAnchor="middle">
        বাংলাদেশ ব্যাংক
      </text>
    </svg>
  );
}
