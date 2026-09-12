import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

/* ── Floral Corner for the letter ────────────────────────── */
function LetterFloral({ position }: { position: "top-right" | "bottom-left" }) {
  const isTopRight = position === "top-right";

  return (
    <div
      className={`absolute pointer-events-none ${
        isTopRight
          ? "top-0 right-0"
          : "bottom-0 left-0 rotate-180"
      } w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 opacity-[0.14]`}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Main flower */}
        <g transform="translate(155, 45)">
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="6"
              ry="12"
              fill="var(--color-dusty-rose)"
              opacity="0.6"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="4" fill="var(--color-blush)" opacity="0.7" />
        </g>
        {/* Secondary flower */}
        <g transform="translate(120, 90)">
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-7"
              rx="3.5"
              ry="7"
              fill="var(--color-blush-light)"
              opacity="0.5"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="2.5" fill="var(--color-dusty-rose)" opacity="0.5" />
        </g>
        {/* Small bud */}
        <g transform="translate(170, 100)">
          {[0, 90, 180, 270].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-5"
              rx="2.5"
              ry="5"
              fill="var(--color-blush)"
              opacity="0.4"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
        {/* Leaves */}
        <ellipse cx="135" cy="100" rx="16" ry="5" fill="var(--color-taupe-light)" opacity="0.2" transform="rotate(-45, 135, 100)" />
        <ellipse cx="165" cy="80" rx="12" ry="4" fill="var(--color-taupe-light)" opacity="0.15" transform="rotate(-25, 165, 80)" />
        <ellipse cx="100" cy="115" rx="14" ry="4.5" fill="var(--color-taupe-light)" opacity="0.15" transform="rotate(-55, 100, 115)" />
        {/* Stems */}
        <path d="M155 55 Q120 100 80 145" stroke="var(--color-taupe-light)" strokeWidth="0.7" opacity="0.15" fill="none" />
        <path d="M120 95 Q95 120 70 150" stroke="var(--color-taupe-light)" strokeWidth="0.5" opacity="0.12" fill="none" />
        {/* Tiny buds at stem ends */}
        <circle cx="80" cy="145" r="2.5" fill="var(--color-blush-light)" opacity="0.35" />
        <circle cx="70" cy="150" r="1.5" fill="var(--color-blush-light)" opacity="0.25" />
      </svg>
    </div>
  );
}

/* ── Family Card ─────────────────────────────────────────── */
function FamilyCard({
  side,
  father,
  mother,
  delay,
}: {
  side: string;
  father: string;
  mother: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex-1 text-center max-w-sm mx-auto"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="relative bg-ivory/60 border border-burgundy/10 p-6 sm:p-8">
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/20" />
        <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/20" />
        <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/20" />
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/20" />

        <p className="text-taupe-light text-xs tracking-[0.25em] uppercase mb-5">
          {side}'s Family
        </p>

        <div className="space-y-3">
          <div>
            <p className="font-display text-lg sm:text-xl text-burgundy">
              {father}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-px bg-burgundy/20" />
            <span className="text-burgundy/40 text-xs">&amp;</span>
            <div className="w-6 h-px bg-burgundy/20" />
          </div>
          <div>
            <p className="font-display text-lg sm:text-xl text-burgundy">
              {mother}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Family Section ─────────────────────────────────── */
export default function Family() {
  return (
    <section className="relative py-16 sm:py-24 px-4 bg-ivory bg-texture overflow-hidden">
      <div className="absolute inset-0 bg-paper-texture pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* ─── "An Ode to My Family" Letter ───────────────── */}
        <motion.div
          className="relative mb-16 sm:mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Floral corners */}
          <LetterFloral position="top-right" />
          <LetterFloral position="bottom-left" />

          {/* Letter content */}
          <div className="relative px-6 sm:px-10 md:px-16 py-8 sm:py-12">
            {/* Title in script font */}
            <motion.h2
              className="font-script text-3xl sm:text-4xl md:text-5xl text-taupe text-center mb-10 sm:mb-14"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {wedding.familyLetter.title}
            </motion.h2>

            {/* Letter body — left-aligned, like printed stationery */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {wedding.familyLetter.body.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-taupe text-sm sm:text-base leading-[1.9] sm:leading-[2] mb-5 last:mb-0"
                  style={{ fontWeight: 500 }}
                >
                  {paragraph.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < paragraph.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </motion.div>

            {/* Signature — right-aligned */}
            <motion.div
              className="mt-10 sm:mt-14 text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {wedding.familyLetter.signature.split("\n").map((line, i) => (
                <p
                  key={i}
                  className="font-heading text-xs sm:text-sm tracking-[0.15em] uppercase text-taupe"
                >
                  {line}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Family Cards ───────────────────────────────── */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-taupe-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            With love &amp; blessings from
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy">
            Our Families
          </h2>
          <DecorativeDivider variant="lotus" />
        </motion.div>

        {/* Family cards */}
        <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8">
          <FamilyCard
            side="Bride"
            father={wedding.family.bride.father}
            mother={wedding.family.bride.mother}
            delay={0.2}
          />
          <FamilyCard
            side="Groom"
            father={wedding.family.groom.father}
            mother={wedding.family.groom.mother}
            delay={0.35}
          />
        </div>
      </div>
    </section>
  );
}
