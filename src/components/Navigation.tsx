import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Couple", href: "#couple" },
  { label: "Venue", href: "#venue" },
  // { label: "Gallery", href: "#gallery" },
];

interface NavigationProps {
  isVisible: boolean;
}

export default function Navigation({ isVisible }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isVisible) return null;

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Menu toggle button — burgundy with ivory icon */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 sm:top-5 sm:right-5 z-[60] w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 cursor-pointer"
        style={{
          backgroundColor: "var(--color-burgundy)",
          border: "1px solid rgba(255, 248, 240, 0.2)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 25 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="w-4 h-4 text-cream" />
        ) : (
          <Menu className="w-4 h-4 text-cream" />
        )}
      </motion.button>

      {/* Navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-center justify-center bg-ivory/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="text-center">
              <ul className="space-y-6 sm:space-y-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="font-display text-2xl sm:text-3xl text-taupe hover:text-burgundy tracking-wider transition-colors duration-300 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative line */}
              <motion.div
                className="mt-8 w-16 h-px bg-burgundy/20 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              {/* <p className="mt-10 text-[10px] tracking-[0.3em] uppercase">
                Made by
              </p>
              <p className="mt-2 text-[10px] tracking-[0.3em] uppercase">
                alishanahmad907@gmail.com
              </p> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
