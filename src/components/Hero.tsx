import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-ivory bg-texture overflow-hidden py-16 sm:py-20 px-4"
    >
      {/* Subtle background radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blush/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-champagne/20 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Bismillah — subtle repeat for the main page */}
        <motion.p
          className="font-arabic text-gold/70 text-sm sm:text-base mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {wedding.invitation.openingBlessing}
        </motion.p>

        {/* Top text */}
        <motion.p
          className="text-charcoal-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {wedding.invitation.heroSubtitle}
        </motion.p>

        {/* Couple names — the most prominent element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-burgundy leading-[1.1]">
            {wedding.bride.name}
          </h2>
          <motion.span
            className="inline-block font-display text-3xl sm:text-4xl md:text-5xl gold-text-gradient my-3 sm:my-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            &amp;
          </motion.span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-burgundy leading-[1.1]">
            {wedding.groom.name}
          </h2>
        </motion.div>

        <DecorativeDivider variant="floral" />

        {/* Invite text */}
        <motion.p
          className="text-charcoal-light text-xs sm:text-sm tracking-[0.2em] uppercase mt-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {wedding.invitation.heroInvite}
        </motion.p>

        {/* Date and location */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="font-heading text-lg sm:text-xl md:text-2xl text-charcoal tracking-wider">
            {wedding.displayDay}, {wedding.displayDate}
          </p>
          <p className="text-charcoal-light text-sm sm:text-base tracking-wide">
            {wedding.venue.name} · {wedding.venue.city}
          </p>
        </motion.div>

        {/* Hero image frame */}
        <motion.div
          className="mt-10 sm:mt-14 relative mx-auto max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Ornamental frame around image */}
          <div className="relative p-3 sm:p-4">
            {/* Gold border frame */}
            <div className="absolute inset-0 border border-gold/30 rounded-sm" />
            <div className="absolute inset-2 border border-gold/15 rounded-sm" />

            <img
              src={wedding.bride.image.replace("bride", "hero")}
              alt={`${wedding.bride.name} & ${wedding.groom.name}`}
              className="w-full aspect-[3/4] object-cover rounded-sm"
              loading="eager"
            />

            {/* Subtle overlay gradient */}
            <div className="absolute inset-3 sm:inset-4 rounded-sm bg-gradient-to-t from-burgundy/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
