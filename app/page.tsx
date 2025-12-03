"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Letter from "../components/OurStory";
import JoinUs from "../components/JoinUs";
import CTA from "../components/CTA";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Page() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/sound/audio.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set volume to 30% for background music

    // Try to autoplay (may be blocked by browser policies)
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsMusicPlaying(true);
      } catch (error) {
        // Autoplay was prevented, user will need to click the sound button
        console.log("Autoplay prevented, user interaction required");
        setIsMusicPlaying(false);
      }
    };

    playAudio();

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  return (
    <div className="">
      <main>
        <Hero />
        <Letter />
        <JoinUs />
        <CTA />
        <Partners />
      </main>
      <Footer />
      <FloatingButtons isMusicPlaying={isMusicPlaying} onToggleMusic={toggleMusic} />
    </div>
  );
}
