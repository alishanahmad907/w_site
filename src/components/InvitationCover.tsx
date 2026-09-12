import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../config/wedding";

interface InvitationCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

/* ── Floating Petal ──────────────────────────────────────── */
function FloatingPetal({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, top: "-5%" }}
      initial={{ y: "-10%", x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: "110vh",
        x: [0, 30, -20, 40, 0],
        rotate: [0, 90, 180, 270, 360],
        opacity: [0, 0.25, 0.2, 0.15, 0],
      }}
      transition={{
        duration: 14 + Math.random() * 6,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
        <ellipse
          cx="7"
          cy="9"
          rx="6"
          ry="8"
          fill="var(--color-cream)"
          opacity="0.2"
        />
      </svg>
    </motion.div>
  );
}

/* ── Ornamental Vine Border ─────────────────────────────── */
function VineBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floral vine pattern as background — subtle burgundy-on-burgundy */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 700" preserveAspectRatio="none" fill="none">
        {/* Left vine */}
        <path
          d="M30 0 Q25 50 35 100 Q45 150 25 200 Q15 250 35 300 Q45 350 25 400 Q15 450 35 500 Q45 550 25 600 Q15 650 30 700"
          stroke="var(--color-burgundy-light)"
          strokeWidth="1.2"
          opacity="0.3"
          fill="none"
        />
        {/* Left leaves */}
        <ellipse cx="20" cy="80" rx="12" ry="5" fill="var(--color-burgundy-light)" opacity="0.12" transform="rotate(-30, 20, 80)" />
        <ellipse cx="40" cy="160" rx="10" ry="4" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(25, 40, 160)" />
        <ellipse cx="18" cy="260" rx="11" ry="4.5" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(-20, 18, 260)" />
        <ellipse cx="38" cy="380" rx="10" ry="4" fill="var(--color-burgundy-light)" opacity="0.12" transform="rotate(30, 38, 380)" />
        <ellipse cx="20" cy="480" rx="12" ry="5" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(-25, 20, 480)" />
        <ellipse cx="35" cy="580" rx="10" ry="4" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(20, 35, 580)" />

        {/* Right vine */}
        <path
          d="M370 0 Q375 50 365 100 Q355 150 375 200 Q385 250 365 300 Q355 350 375 400 Q385 450 365 500 Q355 550 375 600 Q385 650 370 700"
          stroke="var(--color-burgundy-light)"
          strokeWidth="1.2"
          opacity="0.3"
          fill="none"
        />
        {/* Right leaves */}
        <ellipse cx="380" cy="120" rx="12" ry="5" fill="var(--color-burgundy-light)" opacity="0.12" transform="rotate(30, 380, 120)" />
        <ellipse cx="360" cy="220" rx="10" ry="4" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(-25, 360, 220)" />
        <ellipse cx="382" cy="340" rx="11" ry="4.5" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(20, 382, 340)" />
        <ellipse cx="358" cy="440" rx="10" ry="4" fill="var(--color-burgundy-light)" opacity="0.12" transform="rotate(-30, 358, 440)" />
        <ellipse cx="378" cy="540" rx="12" ry="5" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(25, 378, 540)" />
        <ellipse cx="362" cy="640" rx="10" ry="4" fill="var(--color-burgundy-light)" opacity="0.1" transform="rotate(-20, 362, 640)" />

        {/* Top vine */}
        <path
          d="M0 30 Q50 25 100 35 Q150 45 200 25 Q250 15 300 35 Q350 45 400 30"
          stroke="var(--color-burgundy-light)"
          strokeWidth="1"
          opacity="0.25"
          fill="none"
        />
        {/* Bottom vine */}
        <path
          d="M0 670 Q50 675 100 665 Q150 655 200 675 Q250 685 300 665 Q350 655 400 670"
          stroke="var(--color-burgundy-light)"
          strokeWidth="1"
          opacity="0.25"
          fill="none"
        />

        {/* Corner ornamental flourishes */}
        {/* Top-left */}
        <path d="M15 15 Q15 45 30 60" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <path d="M15 15 Q45 15 60 30" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <circle cx="15" cy="15" r="2" fill="var(--color-burgundy-light)" opacity="0.2" />

        {/* Top-right */}
        <path d="M385 15 Q385 45 370 60" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <path d="M385 15 Q355 15 340 30" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <circle cx="385" cy="15" r="2" fill="var(--color-burgundy-light)" opacity="0.2" />

        {/* Bottom-left */}
        <path d="M15 685 Q15 655 30 640" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <path d="M15 685 Q45 685 60 670" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <circle cx="15" cy="685" r="2" fill="var(--color-burgundy-light)" opacity="0.2" />

        {/* Bottom-right */}
        <path d="M385 685 Q385 655 370 640" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <path d="M385 685 Q355 685 340 670" stroke="var(--color-burgundy-light)" strokeWidth="0.8" opacity="0.25" fill="none" />
        <circle cx="385" cy="685" r="2" fill="var(--color-burgundy-light)" opacity="0.2" />
      </svg>
    </div>
  );
}

/* ── Inner Card Border ──────────────────────────────────── */
function InnerCardBorder() {
  return (
    <div className="absolute inset-6 sm:inset-10 md:inset-16 lg:inset-20 pointer-events-none">
      {/* Dotted outer border */}
      <div
        className="absolute inset-0"
        style={{
          border: "1px dotted rgba(255, 248, 240, 0.15)",
        }}
      />
      {/* Inner solid border */}
      <div
        className="absolute inset-2 sm:inset-3"
        style={{
          border: "1px solid rgba(255, 248, 240, 0.08)",
        }}
      />
      {/* Corner ornaments for inner border */}
      <svg className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none">
        <path d="M0 0 Q0 15 8 22 Q4 12 0 0Z" fill="var(--color-cream)" opacity="0.12" />
        <path d="M0 0 C3 10 10 18 20 20" stroke="var(--color-cream)" strokeWidth="0.5" opacity="0.15" fill="none" />
        <path d="M0 0 C5 5 8 12 10 25" stroke="var(--color-cream)" strokeWidth="0.4" opacity="0.1" fill="none" />
      </svg>
      <svg className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" style={{ transform: "scaleX(-1)" }}>
        <path d="M0 0 Q0 15 8 22 Q4 12 0 0Z" fill="var(--color-cream)" opacity="0.12" />
        <path d="M0 0 C3 10 10 18 20 20" stroke="var(--color-cream)" strokeWidth="0.5" opacity="0.15" fill="none" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" style={{ transform: "scaleY(-1)" }}>
        <path d="M0 0 Q0 15 8 22 Q4 12 0 0Z" fill="var(--color-cream)" opacity="0.12" />
        <path d="M0 0 C3 10 10 18 20 20" stroke="var(--color-cream)" strokeWidth="0.5" opacity="0.15" fill="none" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none" style={{ transform: "scale(-1)" }}>
        <path d="M0 0 Q0 15 8 22 Q4 12 0 0Z" fill="var(--color-cream)" opacity="0.12" />
        <path d="M0 0 C3 10 10 18 20 20" stroke="var(--color-cream)" strokeWidth="0.5" opacity="0.15" fill="none" />
      </svg>
    </div>
  );
}

/* ── Main Cover ──────────────────────────────────────────── */
export default function InvitationCover({ isOpen, onOpen }: InvitationCoverProps) {
  const petalPositions = ["10%", "25%", "45%", "65%", "80%", "90%"];

  return (
    <AnimatePresence mode="wait">
      {!isOpen && (
        <motion.div
          key="cover"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--color-burgundy)" }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
        >
          {/* Vine border background */}
          <VineBorder />

          {/* Inner card border */}
          <InnerCardBorder />

          {/* Floating petals — subtle cream on burgundy */}
          {petalPositions.map((left, i) => (
            <FloatingPetal key={i} delay={i * 2.5} left={left} />
          ))}

          {/* Center content — couple names */}
          <motion.div
            className="relative z-10 text-center px-6 max-w-lg mx-auto flex-1 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {/* Bride name */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] leading-tight"
              style={{ color: "var(--color-cream)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {wedding.bride.name.toUpperCase()}
            </motion.h1>

            {/* Calligraphic ampersand */}
            <motion.span
              className="font-script block my-2 sm:my-4"
              style={{
                color: "rgba(255, 248, 240, 0.35)",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              &amp;
            </motion.span>

            {/* Groom name */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] leading-tight"
              style={{ color: "var(--color-cream)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {wedding.groom.name.toUpperCase()}
            </motion.h1>
          </motion.div>

          {/* Bottom "To," panel — warm ivory rounded rectangle */}
          <motion.div
            className="relative z-10 mb-8 sm:mb-12 w-full max-w-sm mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <button
              onClick={onOpen}
              className="w-full py-4 sm:py-5 rounded-2xl cursor-pointer group transition-all duration-500 hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-cream)",
                border: "1px solid rgba(184, 151, 106, 0.2)",
              }}
            >
              <span
                className="font-heading text-sm sm:text-base tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ color: "var(--color-taupe)" }}
              >
                Open Invitation
              </span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
