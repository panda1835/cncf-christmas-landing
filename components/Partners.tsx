import React from "react";
import Image from "next/image";

export default function Partners() {
  const partners = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

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
        <div className="relative">
          {/* Left chain decoration */}
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-8 h-32 md:w-40 md:h-40 -ml-4 md:-ml-28">
            <Image
              unoptimized
              src="/Partner-chainleft.svg"
              alt="chain left"
              fill
              className="object-contain"
            />
          </div>

          {/* Right chain decoration */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 md:w-40 md:h-40 -mr-4 md:-mr-28">
            <Image
              unoptimized
              src="/Partner-chainright.svg"
              alt="chain right"
              fill
              className="object-contain"
            />
          </div>

          {/* Partners grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-8 md:px-16">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center"
              >
                {/* Partner card */}
                <div className="relative w-full aspect-square max-w-xs">
                  <Image
                    unoptimized
                    src="/Partner-frame.svg"
                    alt={`Partner ${partner.id}`}
                    fill
                    className="object-contain"
                  />
                  {/* Partner logo placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-24 h-24 md:w-28 md:h-28">
                      <Image
                        unoptimized
                        src="/Partner-p1.png"
                        alt={`Partner logo ${partner.id}`}
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
    </section>
  );
}
