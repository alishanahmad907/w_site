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
    fullName: "Faraz Ahmar Khan",
    description:
      "Kind, compassionate and full of life — Faraz's smile is his greatest charm.",
    image: "/images/groom.png",
  },

  // ── Date & Time ──────────────────────────────────────────
  date: "2026-11-15T19:30:00",
  displayDate: "15 November 2026",
  displayDay: "Sunday",
  displayTime: "7:30 PM",

  // ── Invitation Text ──────────────────────────────────────
  invitation: {
    openingBlessing: "﷽",
    openingBlessingTranslation: "In the name of God, the Most Gracious, the Most Merciful",
    openingText: "Together with their families,",
    familyInviteText: "invite you to celebrate the Wedding Ceremony of their Daughter",
    groomIntro: "S/O",
    coupleIntro: "request the pleasure of your company",
    heroSubtitle: "Together with their families",
    heroInvite: "invite you to celebrate their union",
    message:
      "Two hearts, two families, one beautiful beginning.\n\nWe would be honoured to have you with us as we begin this beautiful journey together.",
    closingMessage: "Your presence is the greatest gift.",
    closingPhrase: "Kindly grace the gathering with your delightful presence",
    closingPhrase2: "We would be honoured to share this special day with you.",
    closingBlessing: "بَارَكَ اللهُ لَكُماَ وَبَارَكَ عَلَيْكُماَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    closingBlessingTranslation: "May Allah bless you both and shower His blessings upon you",
    image:"/images/hero.png"
  },

  // ── Family Letter ────────────────────────────────────────
  familyLetter: {
    title: "An Ode to My Family",
    body: `It's more than a big moment,
it's a promise of lifetime but before this promise
it was you (all).
And somewhere in a very safe space of my heart
you will always be there.
I opened my eyes in your arms as you held me,
and ever since then I've been there.
Ever since then you never left me to my own.
Today, as I walk into this journey of forever
I will carry what you have given me.
The warmth, the love, the care, and the ethos to live by.
No matter where life takes us I will always
remember where my roots are.
With you.
No combination of words could ever express
the love and gratitude in my heart.
Putting all my sweat and blood, head to toe
I would still never be able to give back what you
have given to me.
But -
I would choose you to be my family in every
universe.

For every beginning, every quiet sacrifice, and
all the unconditional love -
This is my ode to you.
My family. My home. My heart.`,
    signature: "Yours,\nKashish Fazal",
  },

  // ── Venue ────────────────────────────────────────────────
  venue: {
    name: "The Wedding House",
    address: "Ring Road",
    city: "Varanasi",
    mapsUrl:
      "https://maps.app.goo.gl/usYGDveF66LMxUwb9",
    // image: "/images/venue.jpg",
    image: "/images/venue-1.jpg",
  },

  // ── Music ────────────────────────────────────────────────
  music: {
    enabled: true,
    url: "/music/wedding.mp3",
  },

  // ── Events ───────────────────────────────────────────────
  events: [
    {
      name: "Haldi",
      date: "13 November 2026",
      time: "2:00 PM",
      venue: "Our Home, Varanasi",
      description:
        "A morning filled with turmeric, blessings, and joyous celebration.",
      icon: "sun" as const,
      dressCode: "Traditional Yellow",
    },
    {
      name: "Mehendi",
      date: "13 November 2026",
      time: "6:00 PM onwards",
      venue: "Our Home, Varanasi",
      description:
        "An evening of colour, laughter, and beautiful mehendi artistry.",
      icon: "palette" as const,
      dressCode: "Festive Indian — Greens & Yellows",
    },
    {
      name: "Wedding",
      date: "15 November 2026",
      time: "7:30 PM",
      venue: "The Wedding House, Ring Road",
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
      mother: "Mrs. Dilruba Khan",
    },
    groom: {
      father: "Mr. Mushtaq Ullah Khan",
      mother: "Mrs. Yasmeen Begum",
    },
  },

  // ── RSVP ─────────────────────────────────────────────────
  rsvp: {
    contactName: "Sayeed Ahmad",
    contactPhone: "+91 8953292366",
  },

  // ── SEO / Sharing ────────────────────────────────────────
  seo: {
    title: "Kashish & Faraz — Wedding Invitation",
    description:
      "You are cordially invited to celebrate the wedding of Kashish & Faraz on 15 November 2026.",
    ogImage: "https://lh3.googleusercontent.com/gpms-cs-s/AFP8RcP02jl2nnCfvyNQNqEaXlJSs1HvSlLaqD9XIs72Tm2RHOWezOZJCkSgGY5zEdZTsBoV08ausD8KGgvj3n9oSFu1GRO_TqqkmpLfBVGYXGWbq_n9tSq3XY_vkPj_Yr3tzcviJ1ySVa_qXUpL=s2048-v1",
  },
};

// ── Type exports ─────────────────────────────────────────
export type WeddingConfig = typeof wedding;
export type WeddingEvent = (typeof wedding.events)[number];
