import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

/* ── Floral Corner Ornament ─────────────────────────────── */
function FloralCorner({ position }: { position: "top-right" | "bottom-left" | "top-left" | "bottom-right" }) {
  const positionClasses: Record<string, string> = {
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0 rotate-180",
    "top-left": "top-0 left-0 -scale-x-100",
    "bottom-right": "bottom-0 right-0 scale-x-100 rotate-180 -scale-x-100",
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none opacity-[0.12] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Main flower cluster */}
        <g transform="translate(160, 40)">
          {/* Large flower */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-14"
              rx="7"
              ry="14"
              fill="var(--color-dusty-rose)"
              opacity="0.6"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="5" fill="var(--color-blush)" opacity="0.7" />
        </g>
        {/* Smaller flower */}
        <g transform="translate(120, 80)">
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-8"
              rx="4"
              ry="8"
              fill="var(--color-blush)"
              opacity="0.5"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="var(--color-dusty-rose)" opacity="0.6" />
        </g>
        {/* Leaves */}
        <ellipse cx="140" cy="90" rx="18" ry="6" fill="var(--color-taupe-light)" opacity="0.25" transform="rotate(-45, 140, 90)" />
        <ellipse cx="170" cy="75" rx="15" ry="5" fill="var(--color-taupe-light)" opacity="0.2" transform="rotate(-30, 170, 75)" />
        <ellipse cx="100" cy="110" rx="14" ry="5" fill="var(--color-taupe-light)" opacity="0.2" transform="rotate(-55, 100, 110)" />
        {/* Stem curves */}
        <path d="M160 55 Q130 100 80 140" stroke="var(--color-taupe-light)" strokeWidth="0.8" opacity="0.2" fill="none" />
        <path d="M120 85 Q90 120 60 150" stroke="var(--color-taupe-light)" strokeWidth="0.6" opacity="0.15" fill="none" />
        {/* Tiny buds */}
        <circle cx="80" cy="140" r="3" fill="var(--color-blush-light)" opacity="0.4" />
        <circle cx="60" cy="150" r="2" fill="var(--color-blush-light)" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-ivory bg-texture overflow-hidden py-16 sm:py-20 px-4"
    >
      {/* Subtle paper texture */}
      <div className="absolute inset-0 bg-paper-texture pointer-events-none" />

      {/* Soft background radial — very subtle warm tones */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blush/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-champagne/10 blur-[100px]" />
      </div>

      {/* Floral corner decorations — watercolour-style */}
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Bismillah — warm brown like the physical card */}
        <motion.p
          className="font-arabic text-xl sm:text-2xl md:text-3xl mb-2 leading-relaxed"
          style={{ color: "var(--color-taupe)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {wedding.invitation.openingBlessing}
        </motion.p>

        {/* Translation */}
        <motion.p
          className="text-taupe-light text-[10px] sm:text-xs italic tracking-wide mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {wedding.invitation.openingBlessingTranslation}
        </motion.p>

        {/* "Together with their families," */}
        <motion.p
          className="text-taupe-light text-xs sm:text-sm tracking-[0.15em] mb-8 sm:mb-10 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {wedding.invitation.openingText}
        </motion.p>

        {/* Bride's parents */}
        <motion.div
          className="mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-display text-lg sm:text-xl md:text-2xl tracking-[0.1em] text-taupe" style={{ fontWeight: 500 }}>
            {wedding.family.bride.father.toUpperCase().replace("MR. ", "MR ")} &amp; {wedding.family.bride.mother.toUpperCase().replace("MRS. ", "MRS ")}
          </p>
        </motion.div>

        {/* "invite you to celebrate..." */}
        <motion.p
          className="text-taupe-light text-xs sm:text-sm italic tracking-wide mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {wedding.invitation.familyInviteText}
        </motion.p>

        {/* Couple names — the visual centerpiece */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Watermark date numbers — behind the names */}
          {/* <div className="absolute inset-0 flex flex-col items-end justify-center pointer-events-none pr-4 sm:pr-8 -z-10 select-none">
            <span className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.75] text-taupe/[0.04]">15</span>
            <span className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.75] text-taupe/[0.04]">11</span>
            <span className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.75] text-taupe/[0.04]">26</span>
          </div> */}

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-taupe leading-[1.1] tracking-[0.06em]" style={{ fontWeight: 500 }}>
            {wedding.bride.fullName.toUpperCase()}
          </h2>
          <p className="font-heading text-sm sm:text-base text-taupe-light tracking-[0.3em] uppercase my-3 sm:my-4">
            with
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-taupe leading-[1.1] tracking-[0.06em]" style={{ fontWeight: 500 }}>
            {wedding.groom.fullName.toUpperCase()}
          </h2>
        </motion.div>

        {/* Groom's parents */}
        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-taupe-light text-xs sm:text-sm tracking-[0.1em] mb-1">
            {wedding.invitation.groomIntro}
          </p>
          <p className="font-display text-base sm:text-lg md:text-xl tracking-[0.08em] text-taupe" style={{ fontWeight: 500 }}>
            {wedding.family.groom.father.toUpperCase().replace("MR. ", "MR ")} &amp;
          </p>
          <p className="font-display text-base sm:text-lg md:text-xl tracking-[0.08em] text-taupe" style={{ fontWeight: 500 }}>
            {wedding.family.groom.mother.toUpperCase().replace("MRS. ", "MRS ")}
          </p>
        </motion.div>

        <DecorativeDivider variant="simple" />

        {/* Date, time, venue */}
        <motion.div
          className="space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="font-heading text-sm sm:text-base text-taupe tracking-wider">
            {wedding.displayDay}, {wedding.displayDate} | {wedding.displayTime}
          </p>
          <p className="text-taupe-light text-xs sm:text-sm italic tracking-wide">
            Location
          </p>
          <p className="font-heading text-sm sm:text-base text-taupe tracking-wide">
            {wedding.venue.name}, {wedding.venue.address}
          </p>
        </motion.div>

        {/* Closing phrases — in script font, matching the physical card */}
        <motion.div
          className="mt-8 sm:mt-10 space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="font-script font-semibold text-lg sm:text-xl md:text-2xl text-taupe-light leading-relaxed">
            {wedding.invitation.closingPhrase}
          </p>
          <p className="font-script font-semibold text-base sm:text-lg md:text-xl text-taupe-light leading-relaxed">
            {wedding.invitation.closingPhrase2}
          </p>
        </motion.div>

        {/* Hero image frame */}
        <motion.div
          className="mt-10 sm:mt-14 relative mx-auto max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          {/* Ornamental frame around image */}
          <div className="relative p-3 sm:p-4">
            {/* Burgundy border frame */}
            <div className="absolute inset-0 border border-burgundy/20 rounded-sm" />
            <div className="absolute inset-2 border border-burgundy/10 rounded-sm" />

            <img
              src={wedding.invitation.image}
              alt={`${wedding.bride.name} & ${wedding.groom.name}`}
              className="w-full aspect-[3/4] object-cover rounded-sm"
              loading="eager"
            />

            {/* Subtle overlay gradient */}
            {/* <div className="absolute inset-3 sm:inset-4 rounded-sm bg-gradient-to-t from-burgundy/10 via-transparent to-transparent pointer-events-none" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
