import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative py-16 sm:py-24 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-burgundy)" }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header — ivory text on burgundy */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cream/60 text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            The Celebration Awaits At
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream">
            Venue
          </h2>
          <DecorativeDivider variant="ornate" theme="ivory" />
        </motion.div>

        {/* Venue card */}
        <motion.div
          className="relative max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Venue image */}
          <div className="relative overflow-hidden mb-8">
            <div className="relative p-2 sm:p-3">
              <div className="absolute inset-0 border border-gold/20" />
              <img
                src={wedding.venue.image}
                alt={wedding.venue.name}
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-2 sm:inset-3 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Venue details — ivory on burgundy */}
          <div className="text-center space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream">
              {wedding.venue.name}
            </h3>

            <div className="flex items-center justify-center gap-2 text-cream/70">
              <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0" />
              <p className="text-sm sm:text-base">{wedding.venue.address}</p>
            </div>

            <p className="text-cream/60 text-sm sm:text-base">
              {wedding.venue.city}
            </p>

            <DecorativeDivider variant="simple" theme="ivory" />

            {/* Maps button — ivory on burgundy */}
            <motion.a
              href={wedding.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 font-heading text-xs sm:text-sm tracking-[0.15em] uppercase text-cream border border-cream/30 hover:border-cream/60 hover:bg-cream/5 transition-all duration-500 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="w-4 h-4 text-gold/70 transition-transform duration-300 group-hover:scale-110" />
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-cream/40" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
