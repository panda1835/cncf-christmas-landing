"use client";

import Image from "next/image";

export default function Hero() {
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
              src="/Header-logo.svg"
              alt="A Thousand Wishes"
              width={180}
              height={60}
              className="h-40 w-auto"
            />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Gift $10 Button (image) */}
            <button className="relative transition-transform hover:scale-105">
              <Image
                src="/Gift-10-button.png"
                alt="Gift a $10 Gift"
                width={150}
                height={50}
                className="h-11 sm:h-12 w-auto"
              />
            </button>

            {/* Make a Wish Come True Button */}
            <button className="inline-flex items-center justify-center bg-[#009c8a] hover:bg-[#008272] text-white font-be-vietnam font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition-transform hover:scale-105">
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

        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-red-900 blur-3xl transform -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-red-900 blur-3xl transform -translate-y-1/2" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-0">
          {/* Main Heading */}
          <div className="text-center mb-6">
            <h1 className="font-lobster text-5xl md:text-6xl lg:text-7xl text-yellow-300 leading-tight mb-4">
              Help a Child&apos;s Wish
              <br />
              <span className="text-yellow-400">Sparkle This Christmas.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="font-be-vietnam text-white text-lg leading-relaxed">
              &quot;For 12 beautiful years, A Thousand Wishes has brought
              Christmas magic to vulnerable children across Vietnam.
              <br />
              This year, you can help make their Christmas dreams come
              true.&quot;
            </p>
          </div>

          {/* CTA Buttons in Hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-[#D62828] hover:bg-[#b91c1c] text-white font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl border-2 border-[#F2CC8F]">
              Make A Wish Come True
            </button>
            <button className="bg-[#F2CC8F] hover:bg-[#e0bd84] text-white font-be-vietnam font-bold px-8 py-3 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
              Discover the Wishes
            </button>
          </div>

          {/* Hero Characters and Scene */}
          <div className="relative h-[300px] md:h-[300px]">
            {/* Main Character - Santa and Kids */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl flex justify-center items-end">
              {/* Kid 1 (left) */}
              <div
                className="absolute bottom-0 left-0 z-10 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Image
                  src="/Hero-kid1.png"
                  alt="Child 1"
                  width={120}
                  height={150}
                  className="w-auto h-40 md:h-48"
                />
              </div>

              {/* Santa */}
              <div
                className="relative z-10 animate-float"
                style={{ animationDelay: "0s" }}
              >
                <Image
                  src="/Hero-character.svg"
                  alt="Santa and Snow Globe"
                  width={300}
                  height={300}
                  className="w-auto h-64 md:h-80"
                />
              </div>

              {/* Kid 2 (right) */}
              <div
                className="absolute bottom-0 right-0 z-10 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Image
                  src="/Hero-kid2.png"
                  alt="Child 2"
                  width={120}
                  height={150}
                  className="w-auto h-40 md:h-48"
                />
              </div>
            </div>
          </div>
        </div>

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

          .animate-snowfall {
            animation: snowfall linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
