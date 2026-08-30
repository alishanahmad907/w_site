import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

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
      <div className="relative bg-ivory/60 border border-gold/15 p-6 sm:p-8">
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/25" />
        <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/25" />
        <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/25" />
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/25" />

        <p className="text-charcoal-light text-xs tracking-[0.25em] uppercase mb-5">
          {side}'s Family
        </p>

        <div className="space-y-3">
          <div>
            <p className="font-display text-lg sm:text-xl text-burgundy">
              {father}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-px bg-gold/30" />
            <span className="text-gold text-xs">&amp;</span>
            <div className="w-6 h-px bg-gold/30" />
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

export default function Family() {
  return (
    <section className="relative py-16 sm:py-24 px-4 bg-ivory bg-texture overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-charcoal-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
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
