"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const pinetreeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up intersection observer to detect when pine tree is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShownWelcome) {
            setShowWelcomeModal(true);
            setHasShownWelcome(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the pine tree is visible
      }
    );

    if (pinetreeRef.current) {
      observer.observe(pinetreeRef.current);
    }

    return () => observer.disconnect();
  }, [hasShownWelcome]);

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "url('/Background.svg')" }}
    >
      {/* Horizontal Line */}
      <div className="absolute inset-0 flex">
        <div className="w-full border-t-50 border-white mt-12" />
      </div>
      {/* TOP WHITE HEADER BAR */}
      <div className="bg-transparent relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start">
            <Image
              unoptimized
              src="/Header-logo.svg"
              alt="A Thousand Wishes"
              width={180}
              height={60}
              className="h-40 w-auto"
            />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 hidden md:flex">
            {/* Gift $10 Button (image) */}
            <button className="relative transition-transform hover:scale-105">
              <Image
                unoptimized
                src="/Gift-10-button.png"
                alt="Gift a $10 Gift"
                width={150}
                height={50}
                className="h-11 sm:h-12 w-auto"
              />
            </button>

            {/* Make a Wish Come True Button */}
            <button 
              onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
              className=" inline-flex items-center justify-center bg-[#009c8a] hover:bg-[#008272] text-white font-be-vietnam font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition-transform hover:scale-105"
            >
              Make a Wish Come True
            </button>
          </div>
        </div>
      </div>

      {/* HERO AREA WITH GRADIENT BACKGROUND */}
      <div className="relative bg-cover bg-top bg-no-repeat overflow-hidden">
        {/* Snowflakes/Sparkle Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-snowfall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            >
              <div
                className="w-1 h-1 bg-white rounded-full opacity-80"
                style={{
                  boxShadow: "0 0 3px rgba(255, 255, 255, 0.8)",
                }}
              />
            </div>
          ))}
        </div>

        {/* HERO CONTENT */}
        <div className="relative w-full pt-5 md:pt-0 pb-0">
          {/* Main Heading */}
          <div className="text-center mb-6">
            <h1
              className="font-lobster text-5xl md:text-6xl lg:text-7xl leading-tight mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to bottom, #FBE67B, #FCFBE7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Help a Child&apos;s Wish
            </h1>

            <h1
              className="font-lobster text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to bottom, #F7D14E, #D4A041)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Sparkle This Christmas.
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="font-be-vietnam px-5 text-white text-lg leading-relaxed">
              &quot;For 12 beautiful years, A Thousand Wishes has brought
              Christmas magic to vulnerable children across Vietnam.
              <br />
              This year, you can help make their Christmas dreams come
              true.&quot;
            </p>
          </div>

          {/* CTA Buttons in Hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D62828] hover:bg-[#b91c1c] text-white font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-2 border-[#F2CC8F]"
            >
              Make A Wish Come True
            </button>
            <button 
              onClick={() => document.getElementById('pinetree')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F2CC8F] hover:bg-[#e0bd84] text-white font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Discover the Wishes
            </button>
          </div>

          {/* Hero Characters and Scene */}
          <div id="pinetree" ref={pinetreeRef} className="relative w-full mt-20 md:mt-40">
            {/* Pinetree - Full Width, determines container height */}
            <div className="relative w-full z-5">
              <Image
                unoptimized
                src="/Hero-pinetree.png"
                alt="Pine Tree"
                width={1920}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Santa - Positioned on top of pinetree */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10 animate-float -mt-24 md:-mt-30"
              style={{ animationDelay: "0s" }}
            >
              <Image
                unoptimized
                src="/Hero-character.svg"
                alt="Santa and Snow Globe"
                width={300}
                height={300}
                className="w-auto h-48 md:h-64 lg:h-80"
              />
            </div>

            {/* Kid 1 (left) */}
            <div
              className="absolute left-4 md:left-1/9 top-0 md:-top-1/2 z-0 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <Image
                unoptimized
                src="/Hero-kid1.png"
                alt="Child 1"
                width={120}
                height={150}
                className="w-auto h-32 md:h-64 lg:h-90"
              />
            </div>

            {/* Kid 2 (right) */}
            <div
              className="absolute right-4 md:right-1/9 top-0 md:-top-1/3 z-0 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Image
                unoptimized
                src="/Hero-kid2.png"
                alt="Child 2"
                width={120}
                height={150}
                className="w-auto h-32 md:h-64 lg:h-90"
              />
            </div>

            {/* Interactive Stars - Left Side */}
            <div className="absolute left-[3%] top-[12%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "0.8s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            <div className="absolute left-[11%] top-[38%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "0.3s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.1s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.2s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            <div className="absolute left-[6%] top-[58%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "0.6s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.4s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.4s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            <div className="absolute left-[14%] top-[82%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "0.9s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.7s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.6s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            {/* Interactive Stars - Right Side */}
            <div className="absolute right-[4%] top-[18%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "0.2s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.0s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.1s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            <div className="absolute right-[13%] top-[44%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.3s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.3s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            <div className="absolute right-[7%] top-[65%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "0.7s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.5s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.5s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>

            <div className="absolute right-[16%] top-[85%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand" style={{ animationDelay: "1.0s" }}></div>
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand" style={{ animationDelay: "1.8s" }}></div>
                </div>
                {/* Star */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer transition-transform hover:scale-110 animate-swing"
                  style={{ animationDelay: "0.7s" }}
                  aria-label="Click to view wish"
                >
                  <Image
                    unoptimized
                    src="/Hero-star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className="w-15 h-15 md:w-18 md:h-18"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content - Placeholder */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Wish Details
                </h2>
                <p className="text-gray-600">
                  Content will be added here later...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Welcome Modal - First Visit Only */}
        {showWelcomeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
            onClick={closeWelcomeModal}
          >
            <div
              className="relative bg-gradient-to-br from-red-50 via-white to-green-50 rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-10 animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Stars */}
              <div className="absolute -top-4 -left-4 text-yellow-400 text-4xl animate-spin-slow">
                ⭐
              </div>
              <div className="absolute -top-2 -right-2 text-yellow-300 text-3xl animate-spin-slow" style={{ animationDelay: "0.5s" }}>
                ✨
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-yellow-400 text-3xl animate-bounce">
                🌟
              </div>

              {/* Close Button */}
              <button
                onClick={closeWelcomeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="text-center">
                <h2 className="font-lobster text-3xl md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-green-600 to-red-600">
                  ✨ Welcome to the Wishing Tree! ✨
                </h2>
                <p className="font-be-vietnam text-gray-700 text-lg leading-relaxed mb-6">
                  Every sparkling ornament on this magical tree holds a child&apos;s heartfelt Christmas wish.
                  <br />
                  <br />
                  <span className="text-red-600 font-semibold">Click on the golden stars</span> to discover their dreams and help make this Christmas truly special! 🎄💫
                </p>
                <button
                  onClick={closeWelcomeModal}
                  className="bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Let&apos;s Explore! 🎁
                </button>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes snowfall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes swing {
            0%, 100% {
              transform: rotate(-10deg);
            }
            50% {
              transform: rotate(10deg);
            }
          }

          @keyframes aura-expand {
            0% {
              transform: scale(1);
              opacity: 0.4;
            }
            50% {
              transform: scale(2);
              opacity: 0.2;
            }
            100% {
              transform: scale(3);
              opacity: 0;
            }
          }

          .animate-snowfall {
            animation: snowfall linear infinite;
          }

          .animate-swing {
            animation: swing 2s ease-in-out infinite;
          }

          .animate-aura-expand {
            animation: aura-expand 2.5s ease-out infinite;
          }

          @keyframes zoom-in {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-zoom-in {
            animation: zoom-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }

          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
