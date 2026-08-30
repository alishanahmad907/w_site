# Kashish & Arjun — Wedding Invitation 💍

A premium, single-page digital wedding invitation website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Elegant Invitation Cover** — Bismillah blessing, couple names, animated "Open Invitation" experience
- **Cinematic Hero Section** — Large typography, decorative elements, hero image
- **Live Countdown Timer** — Auto-updating countdown to the wedding day
- **Wedding Events Timeline** — Mehendi, Haldi, Sangeet, Wedding, Reception with vertical timeline
- **Couple Section** — Circular photo frames with gold ornamental borders
- **Venue Section** — Location details with Google Maps link
- **Photo Gallery** — Responsive grid with lightbox viewer
- **Family Blessings** — Traditional parents section
- **Closing Invitation** — Final invitation page with Arabic blessing
- **Background Music** — Floating player with mute/unmute toggle
- **Minimal Navigation** — Floating hamburger with fullscreen overlay
- **Smooth Animations** — Framer Motion scroll reveals, transitions, floating petals
- **Mobile-First Design** — Optimized for WhatsApp sharing
- **SEO & Social Sharing** — Open Graph metadata for WhatsApp/social preview

## 🎨 Design

- **Color Palette**: Warm ivory, blush pink, antique gold, muted burgundy
- **Typography**: Cormorant Garamond (display), Playfair Display (headings), Lora (body), Amiri (Arabic)
- **Decorative Elements**: SVG ornamental dividers, corner filigree, floral motifs

## 🛠 Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

## ⚙️ Personalization

Edit **`src/config/wedding.ts`** to customize:

- Bride & Groom names, descriptions, photos
- Wedding date
- Invitation text (opening, closing, blessings)
- Venue details & Google Maps URL
- Events (add/remove/edit)
- Gallery images
- Family names
- Music file
- SEO metadata

### Replacing Images

Place your images in `public/images/`:

| File | Purpose |
|------|---------|
| `hero.jpg` | Hero section couple photo |
| `bride.jpg` | Bride portrait (circular frame) |
| `groom.jpg` | Groom portrait (circular frame) |
| `venue.jpg` | Venue photo |
| `og-image.jpg` | WhatsApp/social sharing preview |
| `gallery/photo-1.jpg` to `photo-6.jpg` | Gallery photos |

### Adding Music

Place your music file at `public/music/wedding.mp3` (or update the path in `wedding.ts`).

## 📱 Responsive Breakpoints

| Width | Target |
|-------|--------|
| < 640px | Mobile phones (primary) |
| 640–768px | Large phones |
| 768–1024px | Tablets |
| 1024–1440px | Desktop |
| > 1440px | Large screens |

## 📂 Project Structure

```
src/
├── components/
│   ├── InvitationCover.tsx    # Opening cover with Bismillah
│   ├── Hero.tsx               # Cinematic hero section
│   ├── Countdown.tsx          # Live countdown timer
│   ├── Events.tsx             # Wedding events timeline
│   ├── Couple.tsx             # Bride & Groom profiles
│   ├── Venue.tsx              # Venue with Maps link
│   ├── Gallery.tsx            # Photo gallery + lightbox
│   ├── Family.tsx             # Family blessings
│   ├── Closing.tsx            # Final invitation page
│   ├── MusicPlayer.tsx        # Floating music control
│   ├── Navigation.tsx         # Minimal floating nav
│   └── DecorativeDivider.tsx  # Reusable SVG dividers
├── config/
│   └── wedding.ts             # ← ALL wedding details here
├── hooks/
│   ├── useCountdown.ts
│   └── useReducedMotion.ts
├── App.tsx
├── main.tsx
└── index.css                  # Design system & theme
```
