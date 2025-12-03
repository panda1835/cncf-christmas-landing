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
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/audio.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    const handleFirstInteraction = async () => {
      try {
        await audioRef.current?.play();
        setIsMusicPlaying(true);
        // Remove listeners after first successful play
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
      } catch (error) {
        console.log("Play failed:", error);
      }
    };

    // Try autoplay first
    audioRef.current
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => {
        // If autoplay fails, wait for user interaction
        setIsMusicPlaying(false);
        document.addEventListener("click", handleFirstInteraction);
        document.addEventListener("keydown", handleFirstInteraction);
      });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
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
      <FloatingButtons
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={toggleMusic}
      />
    </div>
  );
}
