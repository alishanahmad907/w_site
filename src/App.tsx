import { useState, useCallback } from "react";
import InvitationCover from "./components/InvitationCover";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Couple from "./components/Couple";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import Family from "./components/Family";
import Closing from "./components/Closing";
import MusicPlayer from "./components/MusicPlayer";
import Navigation from "./components/Navigation";
import DecorativeDivider from "./components/DecorativeDivider";

/* ── Section Transition — burgundy ornament between ivory sections */
function SectionTransition({ variant = "simple" }: { variant?: "simple" | "floral" | "vine" }) {
  return (
    <div className="bg-ivory py-2 sm:py-4">
      <DecorativeDivider variant={variant} color="var(--color-burgundy)" />
    </div>
  );
}

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = useCallback(() => {
    setIsInvitationOpen(true);
    // Scroll to top of main content after a brief delay for the exit animation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 100);
  }, []);

  return (
    <>
      {/* Cover */}
      <InvitationCover
        isOpen={isInvitationOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main invitation content — only rendered after cover opens */}
      {isInvitationOpen && (
        <main className="overflow-hidden">
          <Hero />
          <SectionTransition variant="vine" />
          <Countdown />
          <SectionTransition variant="simple" />
          <Events />
          <SectionTransition variant="floral" />
          <Couple />
          {/* Venue has burgundy bg — no ivory transition needed */}
          <Venue />
          {/* <Gallery /> */}
          <Family />
          {/* Closing has burgundy bg */}
          <Closing />
        </main>
      )}

      {/* Floating UI */}
      {/* <MusicPlayer shouldPlay={isInvitationOpen} /> */}
      <Navigation isVisible={isInvitationOpen} />
    </>
  );
}
