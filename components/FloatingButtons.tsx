"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FloatingButtonsProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export default function FloatingButtons({ isMusicPlaying, onToggleMusic }: FloatingButtonsProps) {
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
        className={`floating-button scroll-top-button ${showScrollTop ? "visible" : ""}`}
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
        className="floating-button sound-button relative"
        aria-label={isMusicPlaying ? "Mute music" : "Play music"}
      >
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
          background: linear-gradient(135deg, #FBE67B 0%, #F7D14E 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px #D4A041;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .floating-button::before {
          content: "";
          position: absolute;   
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #FBE67B 0%, #F7D14E 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .floating-button:hover::before {
          opacity: 1;
        }

        .floating-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px #D4A041;
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

        .sound-button {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px #D4A041;
          }
          50% {
            box-shadow: 0 4px 30px #D4A041;
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
