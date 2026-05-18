export const navigationItems = [
  { href: "#studio", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#lookbook", label: "Frames" }
] as const;

export const mobileNavigationItems = [
  ...navigationItems,
  { href: "#book", label: "Book a Shoot" }
] as const;

export const marqueeItems = [
  "Cinematic visuals",
  "Promotional videos / aftermovies / concerts",
  "DJ shoots / Automotive / brand films",
  "Book your next visual story",
  "Cinematic visuals",
  "Promotional videos / aftermovies / concerts"
] as const;

export const tapeRows = [
  {
    className: "tape-lime",
    items: ["Promos", "Aftermovies", "Concerts", "DJ shoots", "Automotive", "Brand films"]
  },
  {
    className: "tape-blue",
    items: ["Every frame has a frequency", "Where motion meets mood", "Built for replay"]
  }
] as const;

export const services = [
  {
    title: "Promotional Films",
    description:
      "High-energy visuals for brands, creators, launches, campaigns, and social-first storytelling."
  },
  {
    title: "Concert Coverage",
    description:
      "Crowd energy, stage atmosphere, artist moments, lighting, motion, and cinematic live experiences."
  },
  {
    title: "Nightlife & DJ Visuals",
    description:
      "Fast-paced edits, booth angles, crowd reactions, transitions, and nightlife-focused content."
  },
  {
    title: "Automotive Films",
    description:
      "Rolling shots, cinematic reveals, delivery moments, detail captures, and premium car storytelling."
  },
  {
  title: "Restaurants & Foods",
  description:
    "Cinematic content for cafés, restaurants, nightlife spaces, menus, interiors, signature dishes, and brand atmosphere."
},
  {
    title: "Creative Direction",
    description:
      "Concept development, visual mood planning, cinematic shot design, and social content direction."
  }
] as const;

export const featuredProjects = [
  {
    title: "Club Night Aftermovie",
    meta: "Nightlife / Event Recap",
    description: "A placeholder for a high-energy aftermovie with crowd movement, strobes, and drops."
  },
  {
    title: "Performance Promo",
    meta: "DJ / Artist Reel",
    description: "A cinematic social cut for performers, lineups, and event announcements."
  },
  {
    title: "Premium Car Delivery",
    meta: "Automotive / Handover Film",
    description: "A sleek delivery story built around reveal, detail, ignition, and owner emotion."
  }
] as const;

type LookbookImage = {
  src: string;
  alt: string;
  variant?: "tall" | "wide";
};

export const lookbookImages: LookbookImage[] = [
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85",
    alt: "Concert crowd under dramatic stage lights",
    variant: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85",
    alt: "Live music stage with warm lights"
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85",
    alt: "Large concert crowd facing a lit stage",
    variant: "wide"
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    alt: "DJ stage lighting and performance energy",
    variant: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    alt: "Audience with hands raised at a show"
  },
  {
    src: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=900&q=85",
    alt: "Musician performing into a microphone",
    variant: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=85",
    alt: "Festival lighting over a large crowd"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    alt: "Car on a cinematic road at sunset",
    variant: "wide"
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
    alt: "Luxury car detail in low light",
    variant: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=85",
    alt: "Sports car photographed with cinematic contrast"
  },
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
    alt: "Person filming with a professional camera"
  },
  {
    src: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=900&q=85",
    alt: "Camera operator portrait in available light",
    variant: "tall"
  }
] as const;

export const imageUrls = {
  about:
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1100&q=85",
  booking:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85"
} as const;
