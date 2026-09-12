import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

export default function Closing() {
  return (
    <section
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-burgundy)" }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Wedding message — ivory on burgundy */}
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
              className="font-heading text-base sm:text-lg md:text-xl text-cream/90 leading-relaxed mb-4 last:mb-0 italic"
            >
              "{paragraph}"
            </p>
          ))}
        </motion.div>

        <DecorativeDivider variant="ornate" theme="ivory" />

        {/* Final couple names — ivory */}
        <motion.div
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-tight">
            {wedding.bride.name}
          </h2>
          <span className="inline-block font-script text-3xl sm:text-4xl text-cream/40 my-2">
            &amp;
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-tight">
            {wedding.groom.name}
          </h2>
        </motion.div>

        {/* Date & venue — cream */}
        <motion.div
          className="mt-6 sm:mt-8 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-heading text-base sm:text-lg text-cream/80 tracking-wider">
            {wedding.displayDate}
          </p>
          <p className="text-cream/50 text-sm sm:text-base">
            {wedding.venue.name} · {wedding.venue.city}
          </p>
        </motion.div>

        <DecorativeDivider variant="simple" theme="ivory" />

        {/* Closing message */}
        <motion.p
          className="mt-6 font-heading text-base sm:text-lg text-cream/80 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {wedding.invitation.closingMessage}
        </motion.p>

        {/* RSVP Contact Panel */}
        <motion.div
          className="mt-10 sm:mt-14 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="relative px-8 py-6 sm:py-8"
            style={{ backgroundColor: "var(--color-burgundy-dark)" }}
          >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cream/15" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cream/15" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cream/15" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cream/15" />

            <p className="font-display text-xl sm:text-2xl text-cream/90 mb-3">
              RSVP
            </p>
            <p className="text-cream/70 text-sm sm:text-base mb-1">
              {wedding.rsvp.contactName}
            </p>
            <p className="text-cream/60 text-sm sm:text-base mb-4">
              {wedding.rsvp.contactPhone}
            </p>
            <motion.a
              href={wedding.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 font-heading text-[10px] sm:text-xs tracking-[0.2em] uppercase text-cream/80 border border-cream/20 hover:border-cream/40 hover:bg-cream/5 transition-all duration-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Venue
            </motion.a>
          </div>
        </motion.div>

        {/* Closing Arabic blessing — muted cream */}
        {wedding.invitation.closingBlessing && (
          <motion.div
            className="mt-10 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className="font-arabic text-cream/40 text-sm sm:text-base mb-1">
              {wedding.invitation.closingBlessing}
            </p>
            <p className="text-cream/25 text-[10px] sm:text-xs italic tracking-wide">
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
          <DecorativeDivider variant="lotus" theme="ivory" />
        </motion.div>

        {/* Made with love */}
        <motion.p
          className="mt-8 text-cream/15 text-[10px] tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Made with love by
        </motion.p>
        <motion.p
          className="text-cream/15 text-[10px] tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          alishanahmad907@gmail.com
        </motion.p>
      </div>
    </section>
  );
}
