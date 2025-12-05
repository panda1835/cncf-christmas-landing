"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { wishes } from "@/lib/wishes";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [showLetterPopup, setShowLetterPopup] = useState(false);
  const [hasShownLetter, setHasShownLetter] = useState(false);
  const [isLetterClosed, setIsLetterClosed] = useState(false);
  const [currentWish, setCurrentWish] = useState(wishes[0]);
  const [currentStamp, setCurrentStamp] = useState("stamps-01.png");
  const [sprinkles, setSprinkles] = useState<
    Array<{
      id: string;
      left: number;
      top: number;
      delay: number;
      duration: number;
      rotation: number;
    }>
  >([]);
  const pinetreeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate sprinkles once on mount - across entire page
    const allSprinkles = [...Array(80)].map((_, i) => ({
      id: `sprinkle-${i}`,
      left: Math.random() * 100,
      top: -(Math.random() * 20),
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8,
      rotation: Math.random() * 45,
    }));

    setSprinkles(allSprinkles);
  }, []);

  useEffect(() => {
    // Show Letter popup 2 seconds after page load
    const timer = setTimeout(() => {
      if (!hasShownLetter) {
        setShowLetterPopup(true);
        setHasShownLetter(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasShownLetter]);

  useEffect(() => {
    // Set up intersection observer to detect when pine tree is in view
    // Only show welcome modal if letter popup has been closed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShownWelcome && isLetterClosed) {
            setShowWelcomeModal(true);
            setHasShownWelcome(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the pine tree is visible
      }
    );

    if (pinetreeRef.current && isLetterClosed) {
      observer.observe(pinetreeRef.current);
    }

    return () => observer.disconnect();
  }, [hasShownWelcome, isLetterClosed]);

  const openModalWithRandomWish = () => {
    // Get random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setCurrentWish(randomWish);

    // Get random stamp (1, 2, or 3)
    const stampOptions = ["stamps-01.png", "stamps-02.png", "stamps-03.jpg"];
    const randomStamp =
      stampOptions[Math.floor(Math.random() * stampOptions.length)];
    setCurrentStamp(randomStamp);

    setIsModalOpen(true);
  };

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "url('/Background.svg')" }}
    >
      {/* Snowflakes/Sparkle Effect - At section level */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-snowfall animate-snowfall-mobile md:animate-snowfall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <div
              className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full opacity-80"
              style={{
                boxShadow: "0 0 3px rgba(255, 255, 255, 0.8)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Yellow Sprinkles - At section level */}
      <div className="absolute hidden sm:flex inset-0 pointer-events-none z-0">
        {sprinkles.map((s) => (
          <div
            key={s.id}
            className="absolute animate-sprinkle-fall"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          >
            <div
              className="w-2 h-0.5 md:w-3 md:h-1 bg-yellow-300 rounded-full opacity-70"
              style={{
                boxShadow: "0 0 4px rgba(255, 235, 59, 0.8)",
                transform: `rotate(${s.rotation}deg)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="absolute inset-0 flex">
        <div className="w-full border-t-50 border-white mt-12" />
      </div>
      {/* TOP WHITE HEADER BAR */}
      <div className="bg-transparent relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-row items-center justify-between gap-3 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start">
            <Image
              unoptimized
              src="/Header-logo.svg"
              alt="A Thousand Wishes"
              width={300}
              height={300}
              className="h-40 w-auto"
            />
          </div>

          {/* Right Buttons */}
          <div className="items-center gap-3 sm:gap-4 md:flex">
            {/* Gift $10 Button (image) */}
            <button
              onClick={() =>
                window.open("https://www.cncf.org/donate", "_blank")
              }
              className="relative -top-5 transition-transform hover:scale-105"
            >
              <Image
                unoptimized
                src="/Gift-10-button.new.svg"
                alt="Gift a $10 Gift"
                width={150}
                height={100}
                className="h-28 w-auto cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {/* HERO AREA WITH GRADIENT BACKGROUND */}
      <div className="relative bg-cover bg-top bg-no-repeat overflow-hidden">
        {/* HERO CONTENT */}
        <div className="relative w-full pt-5 md:pt-0 pb-0">
          {/* Main Heading */}
          <div className="z-10 text-center mb-6">
            <h1
              className="relative z-10 font-lobster text-5xl md:text-6xl lg:text-7xl leading-tight mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to bottom, #FBE67B, #FCFBE7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Help a Child&apos;s Wish
            </h1>

            <h1
              className="relative z-10 font-lobster text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to bottom, #F7D14E, #D4A041)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Sparkle This Christmas
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-8 max-w-7xl mx-auto">
            <p className="relative z-10 font-be-vietnam px-5 text-white text-lg leading-relaxed">
              For 36 years, the Christina Noble Children's Foundation (CNCF) has
              helped create Christmas miracles for vulnerable children across
              Vietnam and Mongolia.
              <br />
              This year, you can be part of that miracle. Just one gift from you
              can turn a difficult childhood into a Christmas they will remember
              forever
            </p>
          </div>

          {/* CTA Buttons in Hero - Above kids */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("join-us")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer bg-[#D62828] hover:bg-[#b91c1c] font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-4 border-[#F2CC8F]"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #FCFBE7, #F7D14E)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Make A Wish Come True
              </span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("pinetree")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer bg-[#C69E47] hover:bg-[#C69E47] text-white font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-[#F2CC8F] border-4"
            >
              Discover the Wishes
            </button>
          </div>

          {/* Hero Characters and Scene */}
          <div
            id="pinetree"
            ref={pinetreeRef}
            className="relative w-full mt-20 md:mt-40"
          >
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
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10 animate-float-slow -mt-24 md:-mt-30">
              <Image
                unoptimized
                src="/Hero-character.svg"
                alt="Santa and Snow Globe"
                width={300}
                height={300}
                className="w-auto h-48 md:h-64 lg:h-80"
              />
            </div>

            {/* Kid 1 (left) - Below buttons */}
            <div className="absolute opacity-20 left-2 md:left-1/9 -top-4/3 md:-top-1/4 z-5 animate-float-long">
              <Image
                unoptimized
                src="/Hero-kid1.png"
                alt="Child 1"
                width={120}
                height={150}
                className="w-auto h-40 md:h-64 lg:h-90"
              />
            </div>

            {/* Kid 2 (right) - Below buttons */}
            <div
              className="absolute opacity-20 right-4 md:right-1/9 -top-8/9 md:-top-1/3 z-5 animate-float-long"
              style={{ animationDelay: "1s" }}
            >
              <Image
                unoptimized
                src="/Hero-kid2.png"
                alt="Child 2"
                width={120}
                height={150}
                className="w-auto h-40 md:h-64 lg:h-90"
              />
            </div>

            {/* Interactive Stars - Left Side */}
            <div className="absolute left-[3%] top-[12%] z-20">
              <div className="relative">
                {/* Expanding Aura Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "0.8s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.1s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.4s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "0.9s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.7s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.0s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.3s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "0.7s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                    style={{ animationDelay: "1.0s" }}
                  ></div>
                  <div
                    className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                    style={{ animationDelay: "1.8s" }}
                  ></div>
                </div>
                {/* Star */}
                <button
                  onClick={openModalWithRandomWish}
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
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer hover:bg-emerald-900 absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors bg-white rounded-full p-1 shadow-md"
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
              <div className="relative p-8 pt-12">
                {/* Logo/Badge at top center */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-auto">
                    <Image
                      unoptimized
                      src={`/letter/${currentStamp}`}
                      alt="Stamp"
                      width={96}
                      height={96}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Letter Content */}
                <div className="space-y-4 font-montserrat">
                  {/* Greeting */}
                  <div className="">
                    <p className="font-medium italic text-gray-600 mb-1">
                      Dear Santa,
                    </p>
                  </div>

                  {/* From Section */}

                  <div className="space-y-2 pt-2">
                    <div className="pb-2">
                      <p className="text-base italic text-gray-600 font-medium  leading-relaxed">
                        {currentWish.message}
                      </p>
                    </div>
                  </div>

                  {/* Wish Section */}
                  <div className="space-y-2 pt-2">
                    <div className="min-h-[60px] pb-2">
                      <p className="text-base italic text-gray-600 font-medium  leading-relaxed">
                        {currentWish.wish}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 flex justify-center">
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        document
                          .getElementById("join-us")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="cursor-pointer bg-[#D62828] hover:bg-[#b91c1c] text-white font-montserrat font-bold px-8 py-3 rounded-full text-base shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-4 border-[#F2CC8F]"
                    >
                      Make This Wish Come True
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Letter Popup - First Visit Only */}
        {showLetterPopup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-fade-in p-4"
            onClick={() => {
              setShowLetterPopup(false);
              setIsLetterClosed(true);
            }}
          >
            <div
              className="relative max-w-2xl w-full max-h-[90vh] animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowLetterPopup(false);
                  setIsLetterClosed(true);
                }}
                className="cursor-pointer hover:bg-red-700 absolute top-1 right-1 md:top-4 md:right-4 z-20 text-gray-400 hover:text-white transition-colors bg-white rounded-full p-2 shadow-md"
                aria-label="Close popup"
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

              {/* Letter Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  unoptimized
                  src="/Letter-letter.svg"
                  alt="Christmas Letter"
                  width={600}
                  height={300}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Welcome Modal - First Visit Only */}
        {showWelcomeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-fade-in"
            onClick={closeWelcomeModal}
          >
            <div
              className="relative max-w-lg w-full mx-4 px-4 animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeWelcomeModal}
                className="cursor-pointer hover:bg-emerald-900 absolute top-2 right-6 md:top-4 md:right-6 z-20 text-gray-400 hover:text-white transition-colors bg-white rounded-full p-1 shadow-md"
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
              <div className="relative">
                {/* Garland Frame - Full image display */}
                <div className="relative w-full">
                  <Image
                    unoptimized
                    src="/Hero-modal.svg"
                    alt="Christmas Garland Frame"
                    width={666}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-between px-4 py-8 md:px-8 md:py-12">
                  <div>
                    {/* Welcome Heading */}
                    <h2 className="font-lobster text-xl sm:text-3xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-500 text-center ">
                      Welcome to Christmas Miracles!
                    </h2>

                    {/* Description */}
                    <p className="font-be-vietnam text-black italic text-xs sm:text-xs md:text-sm text-center mb-4 md:mb-6 max-w-md ">
                      Each twinkling star holds a child&apos;s precious wish,
                      waiting for a kind heart to make it real.
                      <br className="" />
                      Tap a star to discover their wish!
                    </p>
                  </div>

                  {/* Instructions Flow */}
                  <div className="relative flex flex-col items-center md:space-y-2 mb-3">
                    {/* Left Star */}
                    <div className="absolute left-0 md:left-1/9 top-1/3 -translate-y-1/2 md:-translate-x-12">
                      <div className="relative">
                        {/* Expanding Aura Circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"></div>
                          <div
                            className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                            style={{ animationDelay: "0.8s" }}
                          ></div>
                        </div>
                        {/* Star */}
                        <Image
                          unoptimized
                          src="/Hero-star.svg"
                          alt="Star"
                          width={40}
                          height={40}
                          className="relative w-8 h-8 md:w-12 md:h-12 animate-swing"
                        />
                      </div>
                    </div>

                    {/* Right Star */}
                    <div className="absolute right-0 md:right-1/9 top-1/3 -translate-y-1/2 md:translate-x-12">
                      <div className="relative">
                        {/* Expanding Aura Circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-300 opacity-40 animate-aura-expand"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                          <div
                            className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-200 opacity-30 animate-aura-expand"
                            style={{ animationDelay: "1.2s" }}
                          ></div>
                        </div>
                        {/* Star */}
                        <Image
                          unoptimized
                          src="/Hero-star.svg"
                          alt="Star"
                          width={40}
                          height={40}
                          className="relative w-8 h-8 md:w-12 md:h-12 animate-swing"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>

                    {/* Touch a Star */}
                    <div className="flex flex-row gap-1.25 items-center">
                      <p className="font-be-vietnam text-sm md:text-base lg:text-lg text-gray-800">
                        Tap
                      </p>
                      <p
                        className="font-be-vietnam text-base md:text-lg lg:text-xl font-bold underline decoration-2"
                        style={{
                          WebkitTextStroke: "2px #F2CC8F",
                          color: "#D80000",
                          paintOrder: "stroke fill",
                        }}
                      >
                        a Star
                      </p>
                    </div>

                    {/* Down Arrow */}
                    <div className="text-2xl md:text-4xl text-gray-800">↓</div>

                    {/* See A Wish */}
                    <div className="flex flex-row gap-1.25 items-center">
                      <p className="font-be-vietnam text-sm md:text-base lg:text-lg text-gray-800">
                        See
                      </p>
                      <p
                        className="font-be-vietnam text-base md:text-lg lg:text-xl font-bold underline decoration-2"
                        style={{
                          WebkitTextStroke: "2px #F2CC8F",
                          color: "#D80000",
                          paintOrder: "stroke fill",
                        }}
                      >
                        a Wish
                      </p>
                    </div>

                    {/* Down Arrow */}
                    <div className="text-2xl md:text-4xl text-gray-800">↓</div>

                    {/* Make Wish Come True */}
                    <div className="flex flex-row gap-1.25 items-center">
                      <p className="font-be-vietnam text-sm md:text-base lg:text-lg text-gray-800">
                        Make
                      </p>
                      <p
                        className="font-be-vietnam text-base md:text-lg lg:text-xl font-bold underline decoration-2"
                        style={{
                          WebkitTextStroke: "2px #F2CC8F",
                          color: "#D80000",
                          paintOrder: "stroke fill",
                        }}
                      >
                        Wish Come True
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        closeWelcomeModal();
                        document
                          .getElementById("pinetree")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="cursor-pointer mt-5 bg-emerald-800 hover:bg-emerald-900 text-white font-be-vietnam font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-5 border-amber-200"
                    >
                      Let's Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
