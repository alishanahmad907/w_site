import { motion } from "framer-motion";
import { Palette, Sun, Music, Heart, Sparkles, Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { wedding, type WeddingEvent } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

const iconMap: Record<string, React.ElementType> = {
  palette: Palette,
  sun: Sun,
  music: Music,
  heart: Heart,
  sparkles: Sparkles,
};

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const Icon = iconMap[event.icon] || Heart;

  return (
    <motion.div
      className={`relative flex items-start gap-4 sm:gap-6 md:gap-8 ${
        /* On desktop, alternate sides */
        ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Timeline node — visible on all sizes */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gold/40 bg-ivory flex items-center justify-center">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 pb-10 sm:pb-12">
        <div className="relative bg-ivory/80 border border-gold/15 p-5 sm:p-6 md:p-7 group hover:border-gold/30 transition-colors duration-500">
          {/* Corner filigree */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/25 transition-all duration-500 group-hover:w-6 group-hover:h-6" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/25 transition-all duration-500 group-hover:w-6 group-hover:h-6" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/25 transition-all duration-500 group-hover:w-6 group-hover:h-6" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/25 transition-all duration-500 group-hover:w-6 group-hover:h-6" />

          {/* Event name */}
          <h3 className="font-display text-2xl sm:text-3xl text-burgundy mb-3">
            {event.name}
          </h3>

          {/* Description */}
          <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-4">
            {event.description}
          </p>

          {/* Details */}
          <div className="space-y-2 text-sm text-charcoal-light">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
              <span>{event.venue}</span>
            </div>
            {event.dressCode && (
              <div className="flex items-center gap-2">
                <Shirt className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
                <span className="italic">{event.dressCode}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section id="events" className="relative py-16 sm:py-24 px-4 bg-ivory bg-texture overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-charcoal-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            Join us for
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy">
            Wedding Celebrations
          </h2>
          <DecorativeDivider variant="ornate" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-transparent" />

          {/* Event cards */}
          {wedding.events.map((event, index) => (
            <EventCard key={event.name} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
