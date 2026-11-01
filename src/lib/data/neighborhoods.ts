export interface CommuteDestination {
  destination: string;
  distanceKm: number;
  typicalRushHourMin: number;
  mrtOption: boolean;
}

export interface Neighborhood {
  id: string;
  name: string;
  banglaName: string;
  zone: string;
  tagline: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
    svgX: number; // for SVG interactive map positioning
    svgY: number;
  };
  metrics: {
    rent2BHK: number; // Monthly BDT
    rent3BHK: number; // Monthly BDT
    sqftPrice: number; // BDT per sqft
    serviceChargeAvg: number; // Monthly building maintenance
    lifestyleScore: number; // out of 10
    greeneryScore: number; // out of 10
    walkabilityScore: number; // out of 10
    safetyScore: number; // out of 10
    waterReliability: "High" | "Medium" | "Variable";
    gasSupply: "Direct Pipeline" | "LPG / Cylinder" | "Mixed";
    waterloggingRisk: "Low" | "Moderate" | "Localized";
  };
  amenities: {
    schools: string[];
    hospitals: string[];
    parks: string[];
    groceryMalls: string[];
  };
  commuteTimes: CommuteDestination[];
  verifiedSourceDate: string;
  dataConfidence: "Modeled Benchmark" | "Survey Estimate";
}

export const DHAKA_NEIGHBORHOODS: Neighborhood[] = [
  {
    id: "gulshan",
    name: "Gulshan",
    banglaName: "গুলশান",
    zone: "North Central",
    tagline: "Diplomatic enclave, multinational headquarters & fine dining",
    description:
      "Premier residential and commercial district with highest security perimeters, diplomatic missions, elite international schools, and premium retail avenues.",
    coordinates: { lat: 23.7925, lng: 90.4152, svgX: 520, svgY: 280 },
    metrics: {
      rent2BHK: 85000,
      rent3BHK: 155000,
      sqftPrice: 22000,
      serviceChargeAvg: 12000,
      lifestyleScore: 9.6,
      greeneryScore: 7.2,
      walkabilityScore: 8.5,
      safetyScore: 9.8,
      waterReliability: "High",
      gasSupply: "Direct Pipeline",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["American Standard School", "AISD", "Scholastica Senior"],
      hospitals: ["United Hospital", "Glace Hospital", "Square Clinic"],
      parks: ["Gulshan Lake Park", "Justice Shahabuddin Ahmed Park"],
      groceryMalls: ["Unimart Gulshan-2", "Police Plaza Concord", "Pink City"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 9.8, typicalRushHourMin: 48, mrtOption: false },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 6.2, typicalRushHourMin: 30, mrtOption: false },
      { destination: "Tejgaon Industrial Hub", distanceKm: 3.5, typicalRushHourMin: 18, mrtOption: false },
      { destination: "Uttara / Airport", distanceKm: 11.0, typicalRushHourMin: 32, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "banani",
    name: "Banani",
    banglaName: "বনানী",
    zone: "North Central",
    tagline: "Vibrant culinary strip, corporate offices & boutique living",
    description:
      "A fast-paced urban center featuring Road 11 dining boulevard, tech startup headquarters, and compact luxury apartment complexes.",
    coordinates: { lat: 23.7937, lng: 90.4043, svgX: 470, svgY: 285 },
    metrics: {
      rent2BHK: 68000,
      rent3BHK: 115000,
      sqftPrice: 18500,
      serviceChargeAvg: 9000,
      lifestyleScore: 9.4,
      greeneryScore: 6.5,
      walkabilityScore: 8.8,
      safetyScore: 9.0,
      waterReliability: "High",
      gasSupply: "Mixed",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["Canadian International", "Sunbeams Senior Campus"],
      hospitals: ["Prescription Point", "Farazy Hospital Banani"],
      parks: ["Banani Block D Park", "Road 11 Promenade"],
      groceryMalls: ["Shwapno Super Shop", "Bengal Meat Outlet", "Banani Super Market"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 10.2, typicalRushHourMin: 50, mrtOption: false },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 6.0, typicalRushHourMin: 28, mrtOption: false },
      { destination: "Tejgaon Industrial Hub", distanceKm: 3.8, typicalRushHourMin: 18, mrtOption: false },
      { destination: "Uttara / Airport", distanceKm: 10.5, typicalRushHourMin: 28, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "dhanmondi",
    name: "Dhanmondi",
    banglaName: "ধানমন্ডি",
    zone: "South Central",
    tagline: "Cultural heartbeat, Dhanmondi Lake, medical institutions & heritage",
    description:
      "Historic planned residential community with Dhanmondi Lake recreational strip, dozens of premier educational institutions, specialized diagnostic centers, and culinary streets.",
    coordinates: { lat: 23.7461, lng: 90.3742, svgX: 380, svgY: 480 },
    metrics: {
      rent2BHK: 48000,
      rent3BHK: 78000,
      sqftPrice: 14500,
      serviceChargeAvg: 7000,
      lifestyleScore: 9.1,
      greeneryScore: 8.4,
      walkabilityScore: 8.0,
      safetyScore: 8.8,
      waterReliability: "High",
      gasSupply: "Direct Pipeline",
      waterloggingRisk: "Moderate",
    },
    amenities: {
      schools: ["Mastermind School", "Maple Leaf", "Sunnydale", "St. Joseph"],
      hospitals: ["Square Hospital", "Bangladesh Medical College", "Ibn Sina"],
      parks: ["Dhanmondi Lake Walkway", "Rabindra Sarobar Amphitheatre"],
      groceryMalls: ["Shimanto Square", "Rapa Plaza", "Agora Road 27"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 7.2, typicalRushHourMin: 38, mrtOption: false },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 3.4, typicalRushHourMin: 20, mrtOption: false },
      { destination: "Tejgaon Industrial Hub", distanceKm: 5.5, typicalRushHourMin: 32, mrtOption: false },
      { destination: "Uttara / Airport", distanceKm: 16.5, typicalRushHourMin: 65, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "uttara",
    name: "Uttara (Sectors 1-14)",
    banglaName: "উত্তরা",
    zone: "North",
    tagline: "Modern planned grid, MRT Line-6 stations, airport access & calm parks",
    description:
      "A serene grid layout with broad avenues, multiple metro stations connecting directly to Motijheel in 38 minutes, proximity to Shahjalal International Airport, and organized residential sectors.",
    coordinates: { lat: 23.8759, lng: 90.3795, svgX: 390, svgY: 100 },
    metrics: {
      rent2BHK: 34000,
      rent3BHK: 55000,
      sqftPrice: 10500,
      serviceChargeAvg: 5500,
      lifestyleScore: 8.5,
      greeneryScore: 8.2,
      walkabilityScore: 8.6,
      safetyScore: 8.7,
      waterReliability: "High",
      gasSupply: "Direct Pipeline",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["Scholastica Junior/Senior", "Mastermind Uttara", "DPS STS"],
      hospitals: ["Kuwait Bangladesh Friendship Hospital", "Uttara Crescent"],
      parks: ["Sector 3 Park", "Sector 7 Lake Park", "Sector 11 Lake Walk"],
      groceryMalls: ["Aarong Center", "Zamzam Tower", "Mascot Plaza"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 21.0, typicalRushHourMin: 40, mrtOption: true },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 15.0, typicalRushHourMin: 28, mrtOption: true },
      { destination: "Tejgaon Industrial Hub", distanceKm: 14.0, typicalRushHourMin: 35, mrtOption: false },
      { destination: "Gulshan / Banani", distanceKm: 11.5, typicalRushHourMin: 30, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "bashundhara",
    name: "Bashundhara R/A",
    banglaName: "বসুন্ধরা আ/এ",
    zone: "North East",
    tagline: "Organized private township, wide boulevards & educational campuses",
    description:
      "Large-scale private residential township featuring prominent private universities, comprehensive healthcare complexes, gated sector security, and modern family apartments.",
    coordinates: { lat: 23.8151, lng: 90.4357, svgX: 570, svgY: 220 },
    metrics: {
      rent2BHK: 38000,
      rent3BHK: 62000,
      sqftPrice: 11200,
      serviceChargeAvg: 5000,
      lifestyleScore: 8.6,
      greeneryScore: 7.9,
      walkabilityScore: 7.5,
      safetyScore: 9.1,
      waterReliability: "High",
      gasSupply: "LPG / Cylinder",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["Hurdco International", "Playpen School", "Viquarunnisa Branch"],
      hospitals: ["Evercare Hospital Dhaka", "Bashundhara Eye Hospital"],
      parks: ["Central Playground Block D", "Mehedi Mart Lake Side"],
      groceryMalls: ["Jamuna Future Park (Adjacent)", "Mehedi Mart", "Bazar 365"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 13.5, typicalRushHourMin: 55, mrtOption: false },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 10.0, typicalRushHourMin: 42, mrtOption: false },
      { destination: "Tejgaon Industrial Hub", distanceKm: 7.8, typicalRushHourMin: 30, mrtOption: false },
      { destination: "Gulshan / Banani", distanceKm: 4.8, typicalRushHourMin: 18, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "mirpur_dohs",
    name: "Mirpur DOHS",
    banglaName: "মিরপুর ডিওএইচএস",
    zone: "North West",
    tagline: "Gated tranquil security, immaculate cleanliness & community living",
    description:
      "Strictly maintained Defence Officers Housing Society offering tranquil streets, manicured community parks, high surveillance security, and nearby MRT connectivity at Mirpur 12.",
    coordinates: { lat: 23.8341, lng: 90.3662, svgX: 350, svgY: 180 },
    metrics: {
      rent2BHK: 32000,
      rent3BHK: 52000,
      sqftPrice: 9800,
      serviceChargeAvg: 6000,
      lifestyleScore: 8.2,
      greeneryScore: 8.7,
      walkabilityScore: 9.2,
      safetyScore: 9.8,
      waterReliability: "High",
      gasSupply: "Direct Pipeline",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["BUP Campus (Adjacent)", "Cantonment Public"],
      hospitals: ["CMH (Accessible)", "Al Helal Specialized"],
      parks: ["DOHS Central Lake & Jogging Track", "Block Grounds"],
      groceryMalls: ["DOHS Shopping Complex", "Canteen Store Dept (CSD)"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 16.0, typicalRushHourMin: 36, mrtOption: true },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 11.0, typicalRushHourMin: 22, mrtOption: true },
      { destination: "Tejgaon Industrial Hub", distanceKm: 10.2, typicalRushHourMin: 32, mrtOption: false },
      { destination: "Gulshan / Banani", distanceKm: 9.5, typicalRushHourMin: 30, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "lalmatia",
    name: "Lalmatia",
    banglaName: "লালমাটিয়া",
    zone: "South Central",
    tagline: "Peaceful residential blocks, tree-lined lanes & proximity to Dhanmondi",
    description:
      "A quiet residential community adjacent to Dhanmondi and Mohammadpur, celebrated for literary cafes, publishing houses, serene residential streets, and lower traffic congestion.",
    coordinates: { lat: 23.7562, lng: 90.3708, svgX: 360, svgY: 450 },
    metrics: {
      rent2BHK: 38000,
      rent3BHK: 62000,
      sqftPrice: 12800,
      serviceChargeAvg: 6000,
      lifestyleScore: 8.7,
      greeneryScore: 7.8,
      walkabilityScore: 8.4,
      safetyScore: 8.9,
      waterReliability: "High",
      gasSupply: "Direct Pipeline",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["Lalmatia Girls College", "St. Joseph Higher Secondary"],
      hospitals: ["Care Medical College", "Al-Markazul Islami"],
      parks: ["Lalmatia Block B Park", "Block G Playground"],
      groceryMalls: ["Meena Bazar Mohammadpur", "Town Hall Market"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 8.5, typicalRushHourMin: 42, mrtOption: false },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 4.2, typicalRushHourMin: 24, mrtOption: false },
      { destination: "Tejgaon Industrial Hub", distanceKm: 6.0, typicalRushHourMin: 32, mrtOption: false },
      { destination: "Gulshan / Banani", distanceKm: 10.5, typicalRushHourMin: 45, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
  {
    id: "baridhara",
    name: "Baridhara Diplomatic",
    banglaName: "বারিধারা ডিপ্লোম্যাটিক",
    zone: "North Central",
    tagline: "Ultra-luxury diplomatic enclave with guarded perimeters",
    description:
      "Dhaka's most exclusive, ultra-high security neighborhood housing foreign ambassadors, multinational leadership, and ultra-high-net-worth families.",
    coordinates: { lat: 23.8016, lng: 90.4243, svgX: 540, svgY: 260 },
    metrics: {
      rent2BHK: 120000,
      rent3BHK: 240000,
      sqftPrice: 28000,
      serviceChargeAvg: 18000,
      lifestyleScore: 9.8,
      greeneryScore: 8.8,
      walkabilityScore: 9.5,
      safetyScore: 9.9,
      waterReliability: "High",
      gasSupply: "Direct Pipeline",
      waterloggingRisk: "Low",
    },
    amenities: {
      schools: ["American International School Dhaka (AISD)"],
      hospitals: ["United Hospital (5 min)", "Evercare (10 min)"],
      parks: ["Baridhara Lakeside Park", "Diplomatic Perimeter Green"],
      groceryMalls: ["Diplomatic Canteen", "Unimart Gulshan"],
    },
    commuteTimes: [
      { destination: "Motijheel / Dilkusha", distanceKm: 11.2, typicalRushHourMin: 50, mrtOption: false },
      { destination: "Kawran Bazar / Farmgate", distanceKm: 7.5, typicalRushHourMin: 35, mrtOption: false },
      { destination: "Tejgaon Industrial Hub", distanceKm: 4.8, typicalRushHourMin: 22, mrtOption: false },
      { destination: "Uttara / Airport", distanceKm: 9.8, typicalRushHourMin: 24, mrtOption: false },
    ],
    verifiedSourceDate: "Q3 2024 Market Survey",
    dataConfidence: "Modeled Benchmark",
  },
];
