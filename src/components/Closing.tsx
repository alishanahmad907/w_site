import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

export default function Closing() {
  return (
    <section className="relative py-20 sm:py-28 px-4 bg-ivory bg-texture overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-blush/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Wedding message */}
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {wedding.invitation.message.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="font-heading text-base sm:text-lg md:text-xl text-charcoal leading-relaxed mb-4 last:mb-0 italic"
            >
              "{paragraph}"
            </p>
          ))}
        </motion.div>

        <DecorativeDivider variant="ornate" />

        {/* Final couple names */}
        <motion.div
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-burgundy leading-tight">
            {wedding.bride.name}
          </h2>
          <span className="inline-block font-display text-2xl sm:text-3xl gold-text-gradient my-2">
            &amp;
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-burgundy leading-tight">
            {wedding.groom.name}
          </h2>
        </motion.div>

        {/* Date & venue */}
        <motion.div
          className="mt-6 sm:mt-8 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading text-base sm:text-lg text-charcoal tracking-wider">
            {wedding.displayDate}
          </p>
          <p className="text-charcoal-light text-sm sm:text-base">
            {wedding.venue.name} · {wedding.venue.city}
          </p>
        </motion.div>

        <DecorativeDivider variant="simple" />

        {/* Closing message */}
        <motion.p
          className="mt-6 font-heading text-base sm:text-lg text-charcoal italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {wedding.invitation.closingMessage}
        </motion.p>

        {/* Subtle closing Arabic blessing */}
        {wedding.invitation.closingBlessing && (
          <motion.div
            className="mt-10 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="font-arabic text-gold/60 text-sm sm:text-base mb-1">
              {wedding.invitation.closingBlessing}
            </p>
            <p className="text-charcoal-light/50 text-[10px] sm:text-xs italic tracking-wide">
              {wedding.invitation.closingBlessingTranslation}
            </p>
          </motion.div>
        )}

        {/* Final ornament */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <DecorativeDivider variant="lotus" />
        </motion.div>

        {/* Made with love */}
        <motion.p
          className="mt-8 text-charcoal-light/30 text-[10px] tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Made with love
        </motion.p>
      </div>
    </section>
  );
}
