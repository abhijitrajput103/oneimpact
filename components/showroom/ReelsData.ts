export interface ReelItem {
  id: number;
  reelId: string;
  label: string;
  title: string;
  thumbnail: string;
  rotation: number;
  offsetY: number;
  serviceTag: string;
  serviceLabel: string;
  serviceHref: string;
  format: string;
  summary: string;
  highlights: string[];
}

export const SHOWREEL_REELS: ReelItem[] = [
  {
    id: 1,
    reelId: "DZFZYEasxaC",
    label: "Spatial Design",
    title: "Sanjay Puri Interiors",
    thumbnail: "/images/reels/reel-1.webp",
    rotation: -8,
    offsetY: 20,
    serviceTag: "Brand Storytelling & Reels",
    serviceLabel: "Social Media Marketing",
    serviceHref: "/social-media-marketing",
    format: "9:16 Vertical Reel",
    summary:
      "A crisp architectural walkthrough reel crafted to showcase material depth, spatial flow, and studio expertise in under 45 seconds.",
    highlights: [
      "Hook-first visual pacing for high retention",
      "Color-graded interior storytelling",
      "Platform-native vertical framing",
    ],
  },
  {
    id: 2,
    reelId: "C5a7zP5LDvg",
    label: "Architecture Series",
    title: "Dialogues Directory",
    thumbnail: "/images/reels/reel-2.webp",
    rotation: 4,
    offsetY: -10,
    serviceTag: "Creator & Thought Leadership",
    serviceLabel: "Influencer Marketing",
    serviceHref: "/influencer-marketing",
    format: "9:16 Vertical Reel",
    summary:
      "Conversational founder-led reel series turning complex architecture insights into shareable short-form episodes.",
    highlights: [
      "Editorial interview & kinetic subtitles",
      "High-save educational content format",
      "Consistent visual series identity",
    ],
  },
  {
    id: 3,
    reelId: "DSRk3L1kS23",
    label: "Brand Film",
    title: "Cafe Pibatie",
    thumbnail: "/images/reels/reel-3.webp",
    rotation: -3,
    offsetY: 15,
    serviceTag: "Commercial Film & Production",
    serviceLabel: "Branding Services",
    serviceHref: "/branding-services",
    format: "9:16 Vertical Reel",
    summary:
      "Sensory food & beverage reel highlighting texture, pour choreography, and warm brand atmosphere to drive café footfall.",
    highlights: [
      "Macro culinary cinematography & sound design",
      "Warm, tactile brand aesthetic",
      "Designed for organic discovery & local reach",
    ],
  },
  {
    id: 4,
    reelId: "DGCm30TqayX",
    label: "Campaign Film",
    title: "Sweet Bengal",
    thumbnail: "/images/reels/reel-4.webp",
    rotation: 6,
    offsetY: -15,
    serviceTag: "Seasonal Social Campaign",
    serviceLabel: "Social Media Marketing",
    serviceHref: "/social-media-marketing",
    format: "9:16 Vertical Reel",
    summary:
      "Festive product-launch reel blending heritage confectionery craft with modern celebratory gifting storytelling.",
    highlights: [
      "Occasion-led campaign narrative",
      "Dynamic product reveal & motion graphics",
      "Built for cross-channel social amplification",
    ],
  },
  {
    id: 5,
    reelId: "DPa2vfZk71z",
    label: "Luxury Storytelling",
    title: "Vinanti Manji",
    thumbnail: "/images/reels/reel-5.webp",
    rotation: -5,
    offsetY: 10,
    serviceTag: "Creator-Led Brand Showcase",
    serviceLabel: "Influencer Marketing",
    serviceHref: "/influencer-marketing",
    format: "9:16 Vertical Reel",
    summary:
      "Intimate creator-led showcase highlighting craftsmanship, styling details, and authentic founder voice for luxury audiences.",
    highlights: [
      "Creator-first authentic delivery",
      "Close-up detail & styling transitions",
      "High-trust luxury brand positioning",
    ],
  },
];

