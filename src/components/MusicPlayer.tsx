import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { wedding } from "../config/wedding";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

export default function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(() => {
    return sessionStorage.getItem("wedding-music-muted") === "true";
  });
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio
  useEffect(() => {
    if (!wedding.music.enabled) return;

    const audio = new Audio(wedding.music.url);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("play", () => setIsPlaying(true));
      audio.removeEventListener("pause", () => setIsPlaying(false));
    };
  }, []);

  // Start playing when invitation opens
  useEffect(() => {
    if (!shouldPlay || !audioRef.current || isMuted) return;

    const playPromise = audioRef.current.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Browser blocked autoplay — that's okay
      });
    }
  }, [shouldPlay, isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const newVal = !prev;
      sessionStorage.setItem("wedding-music-muted", String(newVal));

      if (audioRef.current) {
        if (newVal) {
          audioRef.current.pause();
        } else {
          audioRef.current.play().catch(() => {});
        }
      }

      return newVal;
    });
  }, []);

  if (!wedding.music.enabled) return null;

  return (
    <AnimatePresence>
      {shouldPlay && (
        <motion.button
          onClick={toggleMute}
          className="fixed bottom-5 right-5 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gold/30 bg-ivory/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:border-gold/60 transition-colors duration-300 group cursor-pointer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal-light" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
          )}

          {/* Animated rings when playing */}
          {isPlaying && !isMuted && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border border-gold/20"
                animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-gold/15"
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
            </>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
