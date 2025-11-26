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
        minHeight: "100vh",
        zIndex: 10,
      }}
      className="pt-16"
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
          // maxWidth: "900px",
          width: "100%",
          height: "100%",
        }}
        // className="h-full flex flex-col justify-end"
      >
        {/* "Our Story" Title Banner */}
        <div
          style={{
            marginBottom: "2rem",
            animation: "fadeInDown 1s ease-out",
          }}
        >
          <Image
            src="/Letter-title.svg"
            alt="Our Story"
            width={280}
            height={80}
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
              animation: "gentle-sway 3s ease-in-out infinite",
            }}
          />
        </div>
        <div className="h-full"></div>
        {/* Envelope Container */}
        <div
          style={{
            position: "relative",

            animation: "fadeInUp 1s ease-out 0.3s backwards",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02) translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
          }}
          className="w-full"
        >
          {/* Envelope Background */}
          <div className="relative w-full h-[280px] overflow-hidden filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <Image
              src="/Letter-background.png"
              alt="Christmas Envelope"
              width={1200}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Letter Content Overlay */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              maxWidth: "500px",
              animation: "letterSlideIn 1.2s ease-out 0.6s backwards",
            }}
          >
            <Image
              src="/Letter-letter.svg"
              alt="Letter Content"
              width={500}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))",
              }}
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
