import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

function PersonCard({
  label,
  name,
  description,
  image,
  delay,
}: {
  label: string;
  name: string;
  description: string;
  image: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex-1 text-center max-w-sm mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Label */}
      <p className="text-taupe-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-5 sm:mb-6">
        {label}
      </p>

      {/* Photo with ornamental frame */}
      <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mb-6">
        {/* Outer decorative ring — burgundy */}
        <div className="absolute inset-0 rounded-full border border-burgundy/20" />
        <div className="absolute inset-1.5 rounded-full border border-gold/15" />

        {/* Corner accent dots */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-burgundy/25" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-burgundy/25" />

        {/* Image container */}
        <div className="absolute inset-3 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Subtle overlay */}
          {/* <div className="absolute inset-0 rounded-full bg-gradient-to-t from-burgundy/5 to-transparent" /> */}
        </div>
      </div>

      {/* Name */}
      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-burgundy mb-3">
        {name}
      </h3>

      {/* Description */}
      <p className="text-taupe-light text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </motion.div>
  );
}

export default function Couple() {
  return (
    <section
      id="couple"
      className="relative py-16 sm:py-24 px-4 bg-cream bg-pattern-subtle overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory pointer-events-none" />
      <div className="absolute inset-0 bg-paper-texture pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-taupe-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy">
            The Couple
          </h2>
          <DecorativeDivider variant="floral" />
        </motion.div>

        {/* Couple cards */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-16">
          <PersonCard
            label="The Bride"
            name={wedding.bride.fullName}
            description={wedding.bride.description}
            image={wedding.bride.image}
            delay={0.2}
          />

          {/* Decorative ampersand between cards */}
          <motion.div
            className="hidden md:flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-burgundy/20 to-transparent" />
            <span className="font-script text-5xl text-burgundy/40">&amp;</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-burgundy/20 to-transparent" />
          </motion.div>

          {/* Mobile divider */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DecorativeDivider variant="simple" />
          </motion.div>

          <PersonCard
            label="The Groom"
            name={wedding.groom.fullName}
            description={wedding.groom.description}
            image={wedding.groom.image}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
