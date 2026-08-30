import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { wedding } from "../config/wedding";
import DecorativeDivider from "./DecorativeDivider";

/* ── Lightbox ────────────────────────────────────────────── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-ivory/80 hover:text-ivory transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-4 z-10 w-10 h-10 flex items-center justify-center text-ivory/60 hover:text-ivory transition-colors cursor-pointer"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-4 z-10 w-10 h-10 flex items-center justify-center text-ivory/60 hover:text-ivory transition-colors cursor-pointer"
        aria-label="Next photo"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Gallery photo ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[85vh] object-contain"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ivory/60 text-sm font-heading tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

/* ── Gallery ─────────────────────────────────────────────── */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + wedding.gallery.length) % wedding.gallery.length : null
    );
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % wedding.gallery.length : null
    );
  }, []);

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 px-4 bg-cream bg-pattern-subtle overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-charcoal-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">
            Moments to Cherish
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy">
            Our Gallery
          </h2>
          <DecorativeDivider variant="floral" />
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {wedding.gallery.map((src, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
            >
              {/* Image frame */}
              <div className="relative p-1.5 sm:p-2 border border-gold/10 group-hover:border-gold/30 transition-colors duration-500">
                <div className="overflow-hidden">
                  <img
                    src={src}
                    alt={`Wedding gallery photo ${index + 1}`}
                    className="w-full aspect-[4/5] object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay — desktop */}
                <div className="absolute inset-1.5 sm:inset-2 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-500 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-ivory text-xs sm:text-sm tracking-[0.2em] uppercase">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={wedding.gallery}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
