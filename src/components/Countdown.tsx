import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

const countdownUnits = ["days", "hours", "minutes", "seconds"] as const;

export default function Countdown() {
  const countdown = useCountdown(wedding.date);

  return (
    <section className="relative py-16 sm:py-24 px-4 bg-cream bg-pattern-subtle overflow-hidden">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory pointer-events-none" />
      <div className="absolute inset-0 bg-paper-texture pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          className="text-taupe-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Counting down to forever
        </motion.p>

        <DecorativeDivider variant="simple" />

        {countdown.isExpired ? (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy">
              The celebration has begun
            </p>
            <span className="inline-block mt-3 text-2xl">❤️</span>
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-center items-stretch gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {countdownUnits.map((unit, index) => (
              <motion.div
                key={unit}
                className="flex-1 max-w-[90px] sm:max-w-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="relative bg-ivory/80 border border-burgundy/15 py-4 sm:py-5 md:py-6 px-2 backdrop-blur-sm">
                  {/* Corner accents */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/30" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/30" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30" />

                  <motion.span
                    className="block font-display text-3xl sm:text-4xl md:text-5xl text-burgundy leading-none"
                    key={countdown[unit]}
                    initial={{ opacity: 0.5, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(countdown[unit]).padStart(2, "0")}
                  </motion.span>
                  <span className="block mt-2 text-[10px] sm:text-xs text-taupe-light tracking-[0.2em] uppercase">
                    {unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.p
          className="mt-8 sm:mt-10 font-heading text-base sm:text-lg text-taupe tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {wedding.displayDay} · {wedding.displayDate}
        </motion.p>
      </div>
    </section>
  );
}
