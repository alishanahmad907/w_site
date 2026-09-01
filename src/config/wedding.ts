// ============================================================
// Wedding Configuration
// ============================================================
// Edit this file to personalize the entire invitation.
// Replace placeholder names, dates, venues, and images.
// ============================================================

export const wedding = {
  // ── Couple ───────────────────────────────────────────────
  bride: {
    name: "Kashish",
    fullName: "Kashish Fazal",
    description:
      "A dreamer with a golden heart, Kashish lights up every room she enters with her warmth and grace.",
    image: "/images/bride.png",
  },
  groom: {
    name: "Faraz",
    fullName: "Faraz Khan",
    description:
      "Kind, compassionate and full of life — Faraz's smile is his greatest charm.",
    image: "/images/groom.png",
  },

  // ── Date & Time ──────────────────────────────────────────
  date: "2026-11-15T18:30:00",
  displayDate: "15 November 2026",
  displayDay: "Sunday",

  // ── Invitation Text ──────────────────────────────────────
  invitation: {
    // openingBlessing: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    openingBlessing: "﷽",
    openingBlessingTranslation: "In the name of God, the Most Gracious, the Most Merciful",
    openingText: "With the blessings of our families",
    coupleIntro: "request the pleasure of your company",
    heroSubtitle: "Together with their families",
    heroInvite: "invite you to celebrate their union",
    message:
      "Two hearts, two families, one beautiful beginning.\n\nWe would be honoured to have you with us as we begin this beautiful journey together.",
    closingMessage: "Your presence is the greatest gift.",
    // closingBlessing: "بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا",
    closingBlessing: "بَارَكَ اللهُ لَكُماَ وَبَارَكَ عَلَيْكُماَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    closingBlessingTranslation: "May Allah bless you both and shower His blessings upon you",
    image:"/images/hero.png"
  },

  // ── Venue ────────────────────────────────────────────────
  venue: {
    name: "The Grand Imperial Palace",
    address: "42, Maharaja Road, Civil Lines",
    city: "Jaipur, Rajasthan",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Grand+Imperial+Palace+Jaipur",
    // image: "/images/venue.jpg",
    image: "/images/venue-2.png",
  },

  // ── Music ────────────────────────────────────────────────
  music: {
    enabled: true,
    url: "/music/wedding.mp3",
  },

  // ── Events ───────────────────────────────────────────────
  events: [
    {
      name: "Mehendi",
      date: "13 November 2026",
      time: "4:00 PM onwards",
      venue: "The Grand Imperial Palace — Garden Lawn",
      description:
        "An evening of colour, laughter, and beautiful mehendi artistry.",
      icon: "palette" as const,
      dressCode: "Festive Indian — Greens & Yellows",
    },
    {
      name: "Haldi",
      date: "13 November 2026",
      time: "10:00 AM",
      venue: "The Grand Imperial Palace — Courtyard",
      description:
        "A morning filled with turmeric, blessings, and joyous celebration.",
      icon: "sun" as const,
      dressCode: "Traditional Yellow",
    },
    {
      name: "Wedding",
      date: "15 November 2026",
      time: "6:30 PM",
      venue: "The Grand Imperial Palace — Main Lawns",
      description:
        "The auspicious ceremony where two souls become one.",
      icon: "heart" as const,
      dressCode: "Royal Indian Formal",
    },
    // {
    //   name: "Reception",
    //   date: "16 November 2026",
    //   time: "7:30 PM",
    //   venue: "The Grand Imperial Palace — Grand Ballroom",
    //   description:
    //     "An evening of celebration, fine dining, and warm company.",
    //   icon: "sparkles" as const,
    //   dressCode: "Elegant Formal",
    // },
  ],

  // ── Gallery ──────────────────────────────────────────────
  gallery: [
    "/images/gallery/photo-1.jpg",
    "/images/gallery/photo-2.jpg",
    "/images/gallery/photo-3.jpg",
    "/images/gallery/photo-4.jpg",
    "/images/gallery/photo-5.jpg",
    "/images/gallery/photo-6.jpg",
  ],

  // ── Family ───────────────────────────────────────────────
  family: {
    bride: {
      father: "Mr. Sayeed Ahmad",
      mother: "Mrs. Dilruba Ahmad",
    },
    groom: {
      father: "Mr. Papu",
      mother: "Mrs. Papu",
    },
  },

  // ── SEO / Sharing ────────────────────────────────────────
  seo: {
    title: "Kashish & Faraz — Wedding Invitation",
    description:
      "You are cordially invited to celebrate the wedding of Kashish & Faraz on 15 November 2026.",
    ogImage: "/images/venue-2.png",
  },
};

// ── Type exports ─────────────────────────────────────────
export type WeddingConfig = typeof wedding;
export type WeddingEvent = (typeof wedding.events)[number];
