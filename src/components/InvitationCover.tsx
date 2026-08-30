import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

interface InvitationCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

/* ── Petal component ─────────────────────────────────────── */
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
        opacity: [0, 0.5, 0.4, 0.3, 0],
      }}
      transition={{
        duration: 14 + Math.random() * 6,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
        <ellipse
          cx="6"
          cy="8"
          rx="5"
          ry="7"
          fill="var(--color-blush)"
          opacity="0.35"
        />
      </svg>
    </motion.div>
  );
}

/* ── Corner Ornament ─────────────────────────────────────── */
function CornerOrnament({ position }: { position: string }) {
  const rotations: Record<string, string> = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(270deg)",
  };

  const positions: Record<string, string> = {
    "top-left": "top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8",
    "top-right": "top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8",
    "bottom-right": "bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8",
    "bottom-left": "bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8",
  };

  return (
    <div
      className={`absolute ${positions[position]} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20`}
      style={{ transform: rotations[position] }}
    >
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <path
          d="M0 0 Q0 30 15 45 Q5 25 0 0Z"
          fill="var(--color-gold)"
          opacity="0.25"
        />
        <path
          d="M0 0 C5 20 20 35 40 40"
          stroke="var(--color-gold)"
          strokeWidth="0.8"
          opacity="0.35"
          fill="none"
        />
        <path
          d="M0 0 C10 10 15 25 18 50"
          stroke="var(--color-gold)"
          strokeWidth="0.5"
          opacity="0.25"
          fill="none"
        />
        <circle cx="40" cy="40" r="1.5" fill="var(--color-gold)" opacity="0.3" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-ivory bg-texture overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
        >
          {/* Floating petals */}
          {petalPositions.map((left, i) => (
            <FloatingPetal key={i} delay={i * 2.5} left={left} />
          ))}

          {/* Corner ornaments */}
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-right" />
          <CornerOrnament position="bottom-left" />

          {/* Center content */}
          <motion.div
            className="relative z-10 text-center px-6 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {/* Top ornament */}
            <DecorativeDivider variant="lotus" />

            {/* Bismillah */}
            <motion.p
              className="font-arabic text-gold text-lg sm:text-xl md:text-2xl mt-4 mb-2 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              {wedding.invitation.openingBlessing}
            </motion.p>

            {/* Opening text */}
            <motion.p
              className="text-charcoal-light text-xs sm:text-sm tracking-[0.2em] uppercase mt-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {wedding.invitation.openingText}
            </motion.p>

            {/* Couple names */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-burgundy leading-tight">
                {wedding.bride.name}
              </h1>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold my-2 sm:my-3">
                &amp;
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-burgundy leading-tight">
                {wedding.groom.name}
              </h1>
            </motion.div>

            {/* Invitation phrase */}
            <motion.p
              className="text-charcoal-light text-xs sm:text-sm tracking-[0.15em] uppercase mt-6 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {wedding.invitation.coupleIntro}
            </motion.p>

            {/* Date */}
            <motion.p
              className="font-heading text-base sm:text-lg md:text-xl text-charcoal tracking-wider mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              {wedding.displayDate}
            </motion.p>

            {/* Divider */}
            <DecorativeDivider variant="simple" />

            {/* Open button */}
            <motion.button
              onClick={onOpen}
              className="group relative mt-4 px-8 sm:px-10 py-3 sm:py-3.5 font-heading text-sm sm:text-base tracking-[0.2em] uppercase text-burgundy border border-gold/60 hover:border-gold bg-transparent hover:bg-gold/5 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
              <span className="relative">Open Invitation</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
