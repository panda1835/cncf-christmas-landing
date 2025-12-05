"use client";
import React from "react";
import Image from "next/image";

export default function Letter() {
  return (
    <section
      style={{
        position: "relative",
        // padding: "4rem 2rem 5rem",
        backgroundImage: "url('/Background.svg')",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        zIndex: 10,
      }}
      className="pt-8 md:pt-16 min-h-[600px] md:min-h-screen"
    >
      {/* Bokeh Background Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Large bokeh circles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`bokeh-${i}`}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 192, 203, 0.2) 40%, transparent 70%)",
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(3px)",
              opacity: 0.4,
              animation: `float ${
                Math.random() * 15 + 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Small sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `twinkle ${
                Math.random() * 3 + 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Yellow Confetti - Kim Tuyến */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            style={{
              position: "absolute",
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 12 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(180deg, #FFD700 0%, #FFA500 100%)`,
              opacity: Math.random() * 0.6 + 0.4,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `confettiFall ${
                Math.random() * 8 + 6
              }s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 4px rgba(255, 215, 0, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        {/* Top Section - Title and Letter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            zIndex: 2,
          }}
        >
          {/* "Our Story" Title Banner */}
          <div
            className="mb-4 md:mb-8 px-2"
            style={{
              animation: "fadeInDown 1s ease-out",
            }}
          >
            <Image
              unoptimized
              src="/Letter-title.svg"
              alt="Our Story"
              width={780}
              height={200}
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
                animation: "gentle-sway 3s ease-in-out infinite",
              }}
            />
          </div>

          {/* Letter Content */}
          <div
            style={{
              animation: "letterSlideIn 1.2s ease-out 0.6s backwards",
            }}
            className="pt-5 w-full max-w-[800px] md:max-w-[600px]"
          >
            <Image
              unoptimized
              src="/Letter-letter.svg"
              alt="Letter Content"
              width={800}
              height={640}
              style={{
                width: "100%",
                height: "auto",
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))",
              }}
              className="px-5 md:px-0"
            />
          </div>
        </div>

        {/* Envelope Background - Positioned at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            animation: "fadeInUp 1s ease-out 0.3s backwards",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            zIndex: 1,
          }}
          className="w-full"
        >
          <div className="relative w-full flex flex-col filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            {/* Desktop Background 1 */}
            <Image
              unoptimized
              src="/Letter-background1.png"
              alt="Christmas Envelope Background 1"
              width={1200}
              height={180}
              className="hidden md:block w-full h-auto object-cover"
            />
            {/* Mobile Background 1 */}
            <Image
              unoptimized
              src="/Letter-background1-mobile.png"
              alt="Christmas Envelope Background 1"
              width={1200}
              height={180}
              className="block md:hidden w-full h-auto object-cover"
            />
            {/* Desktop Background 2 */}
            <Image
              unoptimized
              src="/Letter-background2.png"
              alt="Christmas Envelope Background 2"
              width={1200}
              height={180}
              className="hidden md:block w-full h-auto object-cover"
            />
            {/* Mobile Background 2 */}
            <Image
              unoptimized
              src="/Letter-background2-mobile.png"
              alt="Christmas Envelope Background 2"
              width={1200}
              height={180}
              className="block md:hidden w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
          }
          75% {
            transform: translateY(-40px) translateX(10px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes letterSlideIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes gentle-sway {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
