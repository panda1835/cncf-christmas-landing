"use client";

import React from "react";
import Image from "next/image";

export default function Partners() {
  // Generate array of 20 partner logos
  const partnerLogos = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(5, "0");
    // Determine file extension based on the actual files
    const extensions = [
      "png", "jpg", "jpg", "jpg", "png", "png", "jpg", "jpg", "jpg", "jpg",
      "jpg", "jpg", "jpg", "png", "png", "png", "jpg", "jpg", "png", "png"
    ];
    return `/partners/Partners-logo-${num}.${extensions[i]}`;
  });

  // Duplicate logos many times for seamless infinite loop (6x for smooth scrolling)
  const duplicatedLogos = [
    ...partnerLogos, 
    ...partnerLogos, 
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos
  ];
  
  // Split logos into two rows for mobile (10 logos each)
  const firstRowLogos = partnerLogos.slice(0, 10);
  const secondRowLogos = partnerLogos.slice(10, 20);
  const duplicatedFirstRow = [
    ...firstRowLogos,
    ...firstRowLogos,
    ...firstRowLogos,
    ...firstRowLogos,
    ...firstRowLogos,
    ...firstRowLogos
  ];
  const duplicatedSecondRow = [
    ...secondRowLogos,
    ...secondRowLogos,
    ...secondRowLogos,
    ...secondRowLogos,
    ...secondRowLogos,
    ...secondRowLogos
  ];

  return (
    <section
      className="w-full pb-16 px-4 md:px-8 bg-[#FFF3F3] relative overflow-hidden"
      style={{
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title with Santa */}
        <div className="flex flex-col items-center">
          {/* Decorative mistletoe above title */}
          <div className="relative w-96 h-20 md:w-80 md:h-20">
            <Image
              unoptimized
              src="/Partner-mistletoe.svg"
              alt="mistletoe"
              fill
              className="object-contain"
            />
          </div>

          {/* Title and Santa row */}
          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            <h2
              style={{
                textAlign: "center",
                color: "#7A0010",
                fontSize: "clamp(36px, 8vw, 64px)",
                fontFamily: "Lobster",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Our Partner
            </h2>
            {/* Santa illustration */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
              <Image
                unoptimized
                src="/Partner-santa.png"
                alt="santa"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Partners section with decorative elements */}
        <div className="relative mt-8">
          {/* Left chain decoration */}
          {/* <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-8 h-32 md:w-40 md:h-40 -ml-4 md:-ml-28">
            <Image
              unoptimized
              src="/Partner-chainleft.svg"
              alt="chain left"
              fill
              className="object-contain"
            />
          </div> */}

          {/* Right chain decoration */}
          {/* <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 md:w-40 md:h-40 -mr-4 md:-mr-28">
            <Image
              unoptimized
              src="/Partner-chainright.svg"
              alt="chain right"
              fill
              className="object-contain"
            />
          </div> */}

          {/* Desktop: Horizontal carousel - 2/3 size (w-32 instead of w-48) */}
          <div className="hidden md:block overflow-hidden px-8 md:px-16">
            <div className="flex">
              <div className="animate-scroll-horizontal flex gap-6 flex-shrink-0">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40"
                  >
                    {/* Partner card */}
                    <div className="relative w-full aspect-square">
                      <Image
                        unoptimized
                        src="/Partner-frame.svg"
                        alt={`Partner frame ${index}`}
                        fill
                        className="object-contain"
                      />
                      {/* Partner logo */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="relative w-5/6 h-5/6">
                          <Image
                            unoptimized
                            src={logo}
                            alt={`Partner logo ${index + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: 2 horizontal rows scrolling */}
          <div className="md:hidden overflow-hidden px-8">
            <div className="flex flex-col gap-4">
              {/* First row - scrolls left */}
              <div className="overflow-hidden">
                <div className="flex">
                  <div className="animate-scroll-horizontal-mobile flex gap-4 flex-shrink-0">
                    {duplicatedFirstRow.map((logo, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-24"
                      >
                        {/* Partner card */}
                        <div className="relative w-full aspect-square">
                          <Image
                            unoptimized
                            src="/Partner-frame.svg"
                            alt={`Partner frame ${index}`}
                            fill
                            className="object-contain"
                          />
                          {/* Partner logo */}
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="relative w-4/5 h-4/5">
                              <Image
                                unoptimized
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second row - scrolls left (slightly different speed for visual interest) */}
              <div className="overflow-hidden">
                <div className="flex">
                  <div className="animate-scroll-horizontal-mobile-slow flex gap-4 flex-shrink-0">
                    {duplicatedSecondRow.map((logo, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-24"
                      >
                        {/* Partner card */}
                        <div className="relative w-full aspect-square">
                          <Image
                            unoptimized
                            src="/Partner-frame.svg"
                            alt={`Partner frame ${index}`}
                            fill
                            className="object-contain"
                          />
                          {/* Partner logo */}
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="relative w-4/5 h-4/5">
                              <Image
                                unoptimized
                                src={logo}
                                alt={`Partner logo ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-horizontal-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 180s linear infinite;
        }

        .animate-scroll-horizontal-mobile {
          animation: scroll-horizontal-mobile 70s linear infinite;
        }

        .animate-scroll-horizontal-mobile-slow {
          animation: scroll-horizontal-mobile 70s linear infinite;
        }

        .animate-scroll-horizontal:hover,
        .animate-scroll-horizontal-mobile:hover,
        .animate-scroll-horizontal-mobile-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
