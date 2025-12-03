"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FloatingButtonsProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export default function FloatingButtons({
  isMusicPlaying,
  onToggleMusic,
}: FloatingButtonsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`floating-button scroll-top-button ${
          showScrollTop ? "visible" : ""
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>

      {/* Sound Toggle Button */}
      <button
        onClick={onToggleMusic}
        className={`floating-button sound-button relative ${
          isMusicPlaying ? "playing" : ""
        }`}
        aria-label={isMusicPlaying ? "Mute music" : "Play music"}
      >
        {/* Sound waves animation */}
        {isMusicPlaying && (
          <>
            <span className="sound-wave wave-1"></span>
            <span className="sound-wave wave-2"></span>
            <span className="sound-wave wave-3"></span>
          </>
        )}

        <Image
          src={"/sound/sound-on.png"}
          alt={isMusicPlaying ? "Sound on" : "Sound off"}
          width={32}
          height={32}
          className="sound-icon"
        />

        {/* X overlay when muted */}
        {!isMusicPlaying && (
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              strokeWidth={3}
              stroke="white"
              className="w-8 h-8"
            >
              <line x1="4" y1="4" x2="28" y2="28" strokeLinecap="round" />
              <line x1="28" y1="4" x2="4" y2="28" strokeLinecap="round" />
            </svg>
          </span>
        )}
      </button>

      <style jsx>{`
        .floating-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbe67b 0%, #f7d14e 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          position: relative;
          overflow: visible;
        }

        .floating-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #fbe67b 0%, #f7d14e 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
          z-index: 0;
        }

        .floating-button:hover::before {
          opacity: 1;
        }

        .floating-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px #d4a041;
        }

        .floating-button:active {
          transform: translateY(-2px);
        }

        .floating-button svg,
        .floating-button :global(.sound-icon) {
          position: relative;
          z-index: 1;
        }

        .scroll-top-button {
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px);
        }

        .scroll-top-button.visible {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }

        .sound-button.playing {
          animation: pulse 2s ease-in-out infinite;
        }

        .sound-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 3px solid rgba(251, 230, 123, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
        }

        .wave-1 {
          animation: soundWave 2.5s ease-out infinite;
        }

        .wave-2 {
          animation: soundWave 2.5s ease-out infinite 0.5s;
        }

        .wave-3 {
          animation: soundWave 2.5s ease-out infinite 1s;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 4px 20px #d4a041;
          }
          50% {
            box-shadow: 0 4px 30px #d4a041;
          }
        }

        @keyframes soundWave {
          0% {
            width: 100%;
            height: 100%;
            opacity: 1;
          }
          100% {
            width: 220%;
            height: 220%;
            opacity: 0;
          }
        }

        @keyframes vibrate {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-1px) rotate(-0.5deg);
          }
          75% {
            transform: translateY(1px) rotate(0.5deg);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-button {
            width: 48px;
            height: 48px;
          }

          .floating-button svg {
            width: 20px;
            height: 20px;
          }

          .floating-button :global(.sound-icon) {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
}
