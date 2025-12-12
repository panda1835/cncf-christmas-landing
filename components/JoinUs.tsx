"use client";
import React, { useState } from "react";
import Image from "next/image";
import LocationsModal from "./LocationsModal";

export default function JoinUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="join-us"
      style={{
        backgroundImage: "url('/Background.svg')",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Enhanced Bokeh Effect - Multiple Layers */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Large bokeh circles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`bokeh-${i}`}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 192, 203, 0.5) 0%, rgba(255, 255, 255, 0.25) 40%, transparent 70%)",
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(2px)",
              opacity: 0.4,
              animation: `float ${
                Math.random() * 10 + 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Small bokeh circles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={`bokeh-small-${i}`}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 192, 203, 0.35) 50%, transparent 70%)",
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
              opacity: 0.5,
              animation: `float ${Math.random() * 8 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Header Banner */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <div style={{ position: "relative", width: "280px", height: "80px" }}>
            <Image
              unoptimized
              src="/Joinus-header.svg"
              alt="Join With Us"
              fill
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
                animation: "gentle-sway 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* First Section - Online Wish Trees (Image Left, Text Right) */}
        <div className="flex flex-col sm:flex-row items-center gap-12 mb-12">
          {/* Image Container with Decorations */}
          <div className="relative flex-1 min-w-[300px] max-w-[500px] mb-0">
            <div className="relative rounded-[60px] overflow-hidden inline-block">
              <Image
                unoptimized
                src="/Joinus-image2.png"
                alt="Offline Wish Trees"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              flex: "1 1 400px",
              color: "white",
              textAlign: "left",
              order: 1,
            }}
            className=""
          >
            <h2
              style={{
                fontFamily: "var(--font-lobster)",
                fontWeight: "400",
                margin: "0 0 1.5rem 0",
                background:
                  "linear-gradient(to bottom, #FBE67B 0%, #FCFBE7 50%, #F7D14E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-4xl"
            >
              Online - Donations
            </h2>

            <div
              style={{
                margin: "0 0 2rem 0",
              }}
              className="text-lg font-be-vietnam"
            >
              <p style={{ marginBottom: "1rem" }}>
                🌟 Even from miles away, you can light up a child&apos;s world.
                Your online gift wraps a child in joy, love and the hope of a
                brighter tomorrow.
              </p>
              <p style={{ marginBottom: "0" }}>
                🌟 Visit{" "}
                <a
                  style={{ color: "#FFD700" }}
                  href="https://www.cncf.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  www.cncf.org
                </a>{" "}
                to explore CNCF&apos;s work and help us bring brighter futures
                to the children we serve in Vietnam and Mongolia.
              </p>
            </div>

            <button
              style={{
                width: "350px",
                height: "64px",
                background:
                  "linear-gradient(to bottom, #EF4444 0%, #B91C1C 100%)",
                borderRadius: "20px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                border: "4px solid transparent",
                backgroundImage:
                  "linear-gradient(to bottom, #EF4444 0%, #B91C1C 100%), linear-gradient(to bottom, #8C421D 0%, #FBE67B 25%, #FCFBE7 50%, #F7D14E 75%, #D4A041 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "Donate button click", {
                    event_category: "Engagement",
                    event_label:
                      "Join Us Section - Donate Your Christmas Gift Here",
                  });
                }
                window.open("https://www.cncf.org/donate", "_blank");
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px 0px rgba(0, 0, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
              }}
              className="font-be-vietnam"
            >
              Donate Your Christmas Gift Here
            </button>
          </div>
        </div>

        {/* Second Section - Offline Donations (Text Left, Image Right) */}
        <div className="flex flex-col sm:flex-row items-center gap-12">
          {/* Content */}
          <div
            style={{
              flex: "1 1 400px",
              color: "white",
              textAlign: "left",
            }}
            className=""
          >
            <h2
              style={{
                fontFamily: "var(--font-lobster)",
                fontWeight: "400",
                margin: "0 0 1.5rem 0",
                background:
                  "linear-gradient(to bottom, #FBE67B 0%, #FCFBE7 50%, #F7D14E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-4xl pb-1"
            >
              Offline - Wishing Trees Campaign only in Ho Chi Minh City, Vietnam
            </h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 2rem 0",
              }}
              className="text-lg font-be-vietnam"
            >
              <li style={{ marginBottom: "0.75rem" }}>
                🌟 Visit our partner restaurants, cafés, hotels and spas across
                Ho Chi Minh City, Vietnam.
              </li>
              <li>
                🌟 Choose a child’s wish from the Christmas trees, buy the gift,
                wrap it up, attach the wishing card and return it to the venues
                before December 20, 2025.
              </li>
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                width: "288px",
                height: "64px",
                background:
                  "linear-gradient(to bottom, #EF4444 0%, #B91C1C 100%)",
                borderRadius: "20px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                border: "4px solid transparent",
                backgroundImage:
                  "linear-gradient(to bottom, #EF4444 0%, #B91C1C 100%), linear-gradient(to bottom, #8C421D 0%, #FBE67B 25%, #FCFBE7 50%, #F7D14E 75%, #D4A041 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                color: "white",
                fontSize: "20px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px 0px rgba(0, 0, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
              }}
              className="font-be-vietnam"
            >
              See All Locations
            </button>
          </div>

          {/* Image Container with Decorations */}
          <div className="relative mt-15 md:mt-0 flex-1 min-w-[300px] max-w-[500px] mb-0">
            <div className="relative overflow-hidden inline-block">
              <Image
                unoptimized
                src="/Joinus-image1.png"
                alt="Offline Wish Trees"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes for bokeh animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @media (max-width: 768px) {
          section > div > div:nth-child(2) {
            flex-direction: column !important;
            gap: 0.5rem !important;
            margin-bottom: 1rem !important;
          }
          section > div > div:nth-child(2) > div:first-child {
            max-width: 100% !important;
            margin-bottom: 0 !important;
            flex: 1 1 100% !important;
          }
          section
            > div
            > div:nth-child(2)
            > div:first-child
            > div:nth-child(3) {
            display: none !important;
          }
          section > div > div:nth-child(2) > div:last-child {
            margin-top: 0 !important;
          }
          section > div > div:nth-child(3) {
            flex-direction: column !important;
            gap: 0.5rem !important;
            margin-top: 1rem !important;
          }
          section > div > div:nth-child(3) > div:first-child {
            order: 2 !important;
            margin-top: 0 !important;
          }
          section > div > div:nth-child(3) > div:last-child {
            order: 1 !important;
            max-width: 100% !important;
            margin-bottom: 0 !important;
            flex: 1 1 100% !important;
          }
        }
      `}</style>

      <LocationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
