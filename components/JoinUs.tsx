"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

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

        {/* First Section - Offline Wish Trees (Image Left, Text Right) */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
          }}
        >
          {/* Image Container with Decorations */}
          <div
            style={{
              position: "relative",
              flex: "1 1 400px",
              minWidth: "300px",
              maxWidth: "500px",
              marginBottom: "0",
            }}
          >
            {/* Star Decoration - Top Left */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "5%",
                width: "80px",
                height: "80px",
                zIndex: 2,
              }}
            >
              <Image
                unoptimized
                src="/Joinus-star.png"
                alt="star"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Main Image with Golden Border */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "60px",
                border: "6px solid #D4AF37",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                background: "#000",
              }}
            >
              <Image
                unoptimized
                src="/Joinus-image1.png"
                alt="Offline Wish Trees"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Bell Decoration - Bottom Center */}
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "140px",
                height: "140px",
                zIndex: 2,
              }}
              className="hidden md:flex"
            >
              <Image
                unoptimized
                src="/Joinus-bell.png"
                alt="decoration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              flex: "1 1 400px",
              color: "white",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-lobster)",
                fontWeight: "400",
                margin: "0 0 1.5rem 0",
                color: "#FFD700",
              }}
              className="text-4xl"
            >
              Offline - Wish Trees
            </h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontFamily: "var(--font-be-vietnam)",
                margin: "0 0 2rem 0",
              }}
              className="text-lg"
            >
              <li style={{ marginBottom: "0.75rem" }}>
                🌟 Visit our partner restaurants, cafés, hotels and spas across
                Ho Chi Minh City.
              </li>
              <li>
                🌟 Choose a child&apos;s wish from the tree, buy the gift, wrap
                it, attach the wish card and return it before December 20.
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
                fontFamily: "var(--font-be-vietnam)",
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
            >
              See All Locations
            </button>
          </div>
        </div>

        {/* Second Section - Online Donations (Text Left, Image Right) */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            marginTop: "6rem",
          }}
        >
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
                color: "#FFD700",
              }}
              className="text-4xl"
            >
              Online - Donations
            </h2>

            <div
              style={{
                fontFamily: "var(--font-be-vietnam)",
                margin: "0 0 2rem 0",
              }}
              className="text-lg"
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
                fontFamily: "var(--font-be-vietnam)",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => window.open("https://www.cncf.org", "_blank")}
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
            >
              Visit Our Website
            </button>
          </div>

          {/* Image Container with Decorations */}
          <div
            style={{
              position: "relative",
              flex: "1 1 400px",
              minWidth: "300px",
              maxWidth: "500px",
              order: 2,
            }}
          >
            {/* Bell Decoration - Top Right */}
            <div
              style={{
                position: "absolute",
                top: "-30px",
                left: "5%",
                width: "100px",
                height: "100px",
                zIndex: 2,
              }}
            >
              <Image
                unoptimized
                src="/Joinus-bell.png"
                alt="bell"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Main Image with Blue/Cyan Border */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "60px",
                border: "6px solid #06B6D4",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                background: "#000",
              }}
            >
              <Image
                unoptimized
                src="/Joinus-image2.png"
                alt="Online Donations"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Star Decoration - Bottom Left */}
            <div
              style={{
                position: "absolute",
                bottom: "-40px",
                right: "10%",
                width: "90px",
                height: "90px",
                zIndex: 2,
              }}
            >
              <Image
                unoptimized
                src="/Joinus-star.png"
                alt="star"
                fill
                style={{ objectFit: "contain" }}
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
          section > div > div:nth-child(3) > div:last-child > div:nth-child(1) {
            display: none !important;
          }
        }
      `}</style>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="All Locations"
      >
        <p>This is a placeholder for the locations list. Coming soon!</p>
      </Modal>
    </section>
  );
}
