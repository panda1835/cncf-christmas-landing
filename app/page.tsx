"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Mock data for children's wishes
const wishes = [
  {
    id: 1,
    childName: "Minh",
    age: 8,
    location: "Dak Lak, Viet Nam",
    story:
      "Minh lives with his grandmother in a small village. His dream is to have a warm jacket so he can walk to school on cold mornings.",
    wish: "A warm winter jacket",
  },
  {
    id: 2,
    childName: "Lan",
    age: 6,
    location: "Thai Binh, Viet Nam",
    story:
      "Lan loves drawing stars and Christmas trees. She has never received a wrapped present with her name on it.",
    wish: "Drawing set with markers",
  },
  {
    id: 3,
    childName: "Tu",
    age: 10,
    location: "Kon Tum, Viet Nam",
    story:
      "Tu wants to become a science teacher. He walks 4km to school every day and often studies by candlelight.",
    wish: "A rechargeable desk lamp",
  },
  {
    id: 4,
    childName: "Hoa",
    age: 7,
    location: "Ha Giang, Viet Nam",
    story:
      "Hoa helps her mother sell vegetables at the market before school every day.",
    wish: "A warm blanket and pillow",
  },
  {
    id: 5,
    childName: "Binh",
    age: 9,
    location: "Quang Tri, Viet Nam",
    story:
      "Binh dreams of playing football but has never owned a ball of his own.",
    wish: "A soccer ball",
  },
  {
    id: 6,
    childName: "Mai",
    age: 5,
    location: "Lao Cai, Viet Nam",
    story:
      "Mai loves listening to stories but has no books at home to read.",
    wish: "A collection of storybooks",
  },
];

// Partner organizations
const partners = [
  {
    id: 1,
    name: "Pendolasco",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRMkVWP2iAWMSX9CIf5CVTMnTLxgSlMEK8g&s",
  },
  {
    id: 2,
    name: "The Deck Saigon",
    logo: "https://hotelcareer.vn/uploads/1695870371606-938556b9-6338-4dea-8f17-2890c39d5458.png",
  },
  {
    id: 3,
    name: "Lubu Mediterranean Food & Wine",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqpbP9MC3ZHWppBxgijNn4ynHS8r3BzjvOg&s",
  },
  {
    id: 4,
    name: "Westcoast International Clinic",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqpbP9MC3ZHWppBxgijNn4ynHS8r3BzjvOg&s",
  },
];

export default function ChristmasWishLandingV2() {
  const [selectedWish, setSelectedWish] = useState<
    (typeof wishes)[number] | null
  >(null);
  const [showWishModal, setShowWishModal] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [wishesGranted, setWishesGranted] = useState(732);
  const [activeOrnament, setActiveOrnament] = useState(0);

  // Auto-reveal ornaments every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrnament((prev) => (prev + 1) % wishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenWish = (wishId: number) => {
    const wish = wishes.find((w) => w.id === wishId) || null;
    setSelectedWish(wish);
    setShowWishModal(true);
  };

  const handleDonateClick = () => {
    setShowWishModal(false);
    setShowDonate(true);
  };

  const handleConfirmDonation = () => {
    setWishesGranted((prev) => prev + 1);
    setShowDonate(false);
  };

  const progressPercentage = (wishesGranted / 1000) * 100;

  return (
    <>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Enhanced snowfall animation */
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(100px) rotate(360deg);
            opacity: 0.3;
          }
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: white;
          font-size: 1em;
          opacity: 0.9;
          animation: snowfall linear infinite;
          pointer-events: none;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .snowflake:nth-child(1) {
          left: 5%;
          animation-duration: 11s;
          animation-delay: 0s;
        }
        .snowflake:nth-child(2) {
          left: 15%;
          animation-duration: 13s;
          animation-delay: 2s;
          font-size: 0.8em;
        }
        .snowflake:nth-child(3) {
          left: 25%;
          animation-duration: 15s;
          animation-delay: 4s;
          font-size: 1.3em;
        }
        .snowflake:nth-child(4) {
          left: 35%;
          animation-duration: 12s;
          animation-delay: 1s;
        }
        .snowflake:nth-child(5) {
          left: 45%;
          animation-duration: 14s;
          animation-delay: 3s;
          font-size: 0.9em;
        }
        .snowflake:nth-child(6) {
          left: 55%;
          animation-duration: 16s;
          animation-delay: 5s;
          font-size: 1.1em;
        }
        .snowflake:nth-child(7) {
          left: 65%;
          animation-duration: 11s;
          animation-delay: 2.5s;
        }
        .snowflake:nth-child(8) {
          left: 75%;
          animation-duration: 13s;
          animation-delay: 0.5s;
          font-size: 0.85em;
        }
        .snowflake:nth-child(9) {
          left: 85%;
          animation-duration: 12s;
          animation-delay: 4.5s;
        }
        .snowflake:nth-child(10) {
          left: 95%;
          animation-duration: 14s;
          animation-delay: 1.5s;
          font-size: 1.2em;
        }
        .snowflake:nth-child(11) {
          left: 10%;
          animation-duration: 16s;
          animation-delay: 3.5s;
        }
        .snowflake:nth-child(12) {
          left: 20%;
          animation-duration: 11s;
          animation-delay: 2s;
          font-size: 0.95em;
        }
        .snowflake:nth-child(13) {
          left: 30%;
          animation-duration: 13s;
          animation-delay: 0s;
        }
        .snowflake:nth-child(14) {
          left: 40%;
          animation-duration: 15s;
          animation-delay: 4s;
          font-size: 1.05em;
        }
        .snowflake:nth-child(15) {
          left: 50%;
          animation-duration: 12s;
          animation-delay: 1s;
        }
        .snowflake:nth-child(16) {
          left: 60%;
          animation-duration: 14s;
          animation-delay: 3s;
          font-size: 0.88em;
        }
        .snowflake:nth-child(17) {
          left: 70%;
          animation-duration: 11s;
          animation-delay: 5s;
        }
        .snowflake:nth-child(18) {
          left: 80%;
          animation-duration: 13s;
          animation-delay: 2.5s;
          font-size: 1.15em;
        }
        .snowflake:nth-child(19) {
          left: 90%;
          animation-duration: 16s;
          animation-delay: 1.5s;
        }
        .snowflake:nth-child(20) {
          left: 8%;
          animation-duration: 12s;
          animation-delay: 4.5s;
        }

        /* Golden sparkle animation */
        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffd700;
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
          box-shadow: 0 0 10px #ffd700;
        }

        /* Glow animation for ornaments */
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.8),
              0 0 40px rgba(255, 215, 0, 0.6);
          }
        }

        .ornament-glow {
          animation: glow 2s ease-in-out infinite;
        }

        /* Float animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        /* Bokeh lights effect */
        @keyframes bokeh {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .bokeh {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.4) 0%,
            transparent 70%
          );
          animation: bokeh 4s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 text-white">
        {/* HERO SECTION - Snow Globe */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Snowflakes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="snowflake">
                ❄
              </div>
            ))}
          </div>

          {/* Bokeh lights background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="bokeh"
              style={{
                width: "150px",
                height: "150px",
                top: "10%",
                left: "10%",
                animationDelay: "0s",
              }}
            />
            <div
              className="bokeh"
              style={{
                width: "200px",
                height: "200px",
                top: "20%",
                right: "15%",
                animationDelay: "1s",
              }}
            />
            <div
              className="bokeh"
              style={{
                width: "120px",
                height: "120px",
                bottom: "15%",
                left: "20%",
                animationDelay: "2s",
              }}
            />
            <div
              className="bokeh"
              style={{
                width: "180px",
                height: "180px",
                bottom: "20%",
                right: "10%",
                animationDelay: "3s",
              }}
            />
          </div>

          <div className="relative z-20 flex flex-col items-center gap-8 px-4 py-16 w-full max-w-7xl mx-auto">
            {/* Header */}
            <header className="text-center max-w-4xl space-y-4 animate-fade-in">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">
                A Thousand Wishes — CNCF Christmas Campaign
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
                Help a Child&apos;s Wish <br />
                <span className="text-yellow-300">Sparkle This Christmas</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                For 12 beautiful years, A Thousand Wishes has brought Christmas
                magic to vulnerable children across Vietnam. This year, you can
                help make their Christmas dreams come true.
              </p>
            </header>

            {/* Snow Globe */}
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center my-8">
              {/* Globe outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-300/20 via-transparent to-transparent blur-3xl" />

              {/* Globe container */}
              <div className="relative w-full h-full rounded-full border-8 border-white/30 bg-gradient-to-b from-blue-900/20 via-red-900/10 to-red-950/30 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Inner sparkles */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="sparkle"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}

                {/* Christmas tree inside globe */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full h-full flex flex-col items-center justify-end">
                    {/* Tree trunk */}
                    <div className="absolute bottom-8 w-12 h-16 bg-gradient-to-b from-yellow-900 to-yellow-950 rounded-t-lg" />

                    {/* Tree layers */}
                    <div className="relative w-full h-[80%] flex flex-col items-center justify-between pb-8">
                      {[1, 2, 3, 4].map((layer) => (
                        <div
                          key={layer}
                          className="relative w-full flex justify-center"
                          style={{
                            transform: `scale(${0.25 + layer * 0.2})`,
                          }}
                        >
                          <div className="w-full aspect-[6/2] rounded-[999px] bg-gradient-to-b from-green-600 to-green-800 shadow-2xl" />
                        </div>
                      ))}

                      {/* Star on top */}
                      <div className="absolute -top-4 text-4xl animate-pulse">
                        ⭐
                      </div>

                      {/* Ornaments with wishes */}
                      <div className="absolute inset-[10%]">
                        {wishes.slice(0, 6).map((wish, index) => {
                          const positions = [
                            "top-[5%] left-[15%]",
                            "top-[15%] right-[18%]",
                            "top-[35%] left-[10%]",
                            "top-[35%] right-[12%]",
                            "bottom-[25%] left-[20%]",
                            "bottom-[25%] right-[20%]",
                          ];
                          const isActive = activeOrnament === index;

                          return (
                            <button
                              key={wish.id}
                              onClick={() => handleOpenWish(wish.id)}
                              className={`absolute ${positions[index]} float group cursor-pointer transition-all duration-500`}
                              style={{
                                animationDelay: `${index * 0.5}s`,
                              }}
                            >
                              <div
                                className={`relative w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                                  isActive
                                    ? "ornament-glow scale-110"
                                    : "hover:scale-110"
                                }`}
                                style={{
                                  background: isActive
                                    ? "radial-gradient(circle, #ffd700, #ff8c00)"
                                    : "radial-gradient(circle, #ff4444, #cc0000)",
                                  boxShadow: isActive
                                    ? "0 0 30px rgba(255, 215, 0, 0.8)"
                                    : "0 4px 15px rgba(0, 0, 0, 0.3)",
                                }}
                              >
                                {isActive ? "✨" : "🎁"}
                              </div>

                              {/* Wish preview on hover or when active */}
                              <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white text-slate-900 rounded-lg shadow-xl p-3 text-xs transition-all duration-300 ${
                                  isActive
                                    ? "opacity-100 visible"
                                    : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                                }`}
                              >
                                <p className="font-bold text-red-700">
                                  {wish.childName}, {wish.age}
                                </p>
                                <p className="text-[10px] text-slate-600 mt-1">
                                  &ldquo;{wish.wish}&rdquo;
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Gifts under tree */}
                      <div className="absolute -bottom-4 flex gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-md shadow-lg" />
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md shadow-lg" />
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-md shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Globe base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-gradient-to-b from-yellow-800 to-yellow-950 rounded-t-full" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center z-20">
              <button
                onClick={() => setShowDonate(true)}
                className="btn-primary px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-yellow-500/75 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                Make a Wish Come True
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("wishes-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-semibold text-lg rounded-full hover:bg-white/40 hover:border-white/80 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                Discover the Wishes
              </button>
            </div>

            <p className="text-xs text-white/70 text-center max-w-xl mt-4">
              Every ornament holds a child&apos;s Christmas wish. Touch a star.
              Make a wish come true.
            </p>
          </div>
        </section>

        {/* INTERACTIVE SECTION - Tree of Wishes */}
        <section
          id="wishes-section"
          className="relative bg-gradient-to-b from-red-900 to-red-950 py-20 border-t border-yellow-400/30"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold mb-3">
                The Tree of a Thousand Wishes
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Every ornament holds a <br />
                <span className="text-yellow-300">child&apos;s Christmas wish</span>
              </h2>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                Touch a star. Make a wish come true. These children are waiting
                for someone like you to bring magic to their Christmas.
              </p>
            </div>

            {/* Wishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishes.map((wish, index) => (
                <div
                  key={wish.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/20 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
                  onClick={() => handleOpenWish(wish.id)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Ornament icon */}
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                    🎁
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {wish.childName}, {wish.age}
                      </h3>
                      <p className="text-xs text-yellow-300">
                        {wish.location}
                      </p>
                    </div>

                    <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                      {wish.story}
                    </p>

                    <div className="pt-2 border-t border-white/20">
                      <p className="text-xs text-white/60 mb-1">Wishes for:</p>
                      <p className="text-sm font-semibold text-yellow-300">
                        &ldquo;{wish.wish}&rdquo;
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-sm text-yellow-300 group-hover:gap-3 transition-all">
                        Grant this wish
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY SECTION - Programme History */}
        <section className="relative bg-gradient-to-b from-red-950 to-red-900 py-20 border-t border-yellow-400/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                12 Years. Nearly 5,000 Wishes. <br />
                <span className="text-yellow-300">
                  One Message: Every Child Matters.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-white/90 leading-relaxed">
              <p>
                For over 12 wonderful years, A Thousand Wishes has brought the
                magic of Christmas to children in need across Vietnam. Since
                2013, the campaign has fulfilled nearly 5,000 heartfelt wishes,
                each one carrying the message that every child deserves to feel
                loved, protected, and remembered.
              </p>
              <p>
                This year, we continue this beautiful tradition — inviting
                individuals, families, and organizations to join hands in making
                dreams come true.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO JOIN */}
        <section className="relative bg-gradient-to-b from-red-900 to-red-950 py-20 border-t border-yellow-400/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How You Can <span className="text-yellow-300">Help</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offline Option */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">🎄</div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                  Wish Trees (Offline in Vietnam)
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Visit our partner restaurants, cafés, hotels and spas across
                  Ho Chi Minh City. Choose a child&apos;s wish from the tree,
                  buy the gift, wrap it, attach the wish card and return it
                  before December 20.
                </p>
                <button className="btn-link text-yellow-300 font-semibold hover:text-yellow-400 transition-colors inline-flex items-center gap-2">
                  Find a Wish Tree near you
                  <span>→</span>
                </button>
              </div>

              {/* Online Option */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">💝</div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                  Online Donations
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Even from miles away, you can light up a child&apos;s world.
                  Your online gift wraps a child in joy, love and the hope of a
                  brighter tomorrow.
                </p>
                <p className="text-sm text-white/70 mb-4">
                  Visit{" "}
                  <a
                    href="https://www.cncf.org/donate"
                    className="text-yellow-300 underline hover:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.cncf.org/donate
                  </a>{" "}
                  to explore CNCF&apos;s work and help us bring brighter futures
                  to the children we serve.
                </p>
                <button
                  onClick={() => setShowDonate(true)}
                  className="btn-primary px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-full hover:shadow-lg hover:shadow-yellow-500/75 hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  Give a $5 Gift
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE WISH COUNTER */}
        <section className="relative bg-gradient-to-b from-red-950 to-red-900 py-20 border-t border-yellow-400/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold mb-3">
                  A Thousand Wishes, One Beating Heart
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Together, we&apos;re bringing Christmas joy
                </h2>
                <p className="text-lg text-white/80">to 1,000 children</p>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-yellow-300">
                    🎁 {wishesGranted}
                  </span>
                  <span className="text-2xl font-bold text-white/60">
                    / 1,000
                  </span>
                </div>

                <div className="relative h-8 bg-white/20 rounded-full overflow-hidden border-2 border-yellow-400/30">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-white rounded-full sparkle"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 mt-4">
                  {(1000 - wishesGranted).toLocaleString()} more wishes waiting
                  to come true
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative bg-gradient-to-b from-red-900 to-red-950 py-24 border-t border-yellow-400/30">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Be Someone&apos;s <br />
                  <span className="text-yellow-300">Christmas Miracle</span>
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  This Christmas, let your kindness shine brighter than ever.
                  No matter where you are, you can make a child feel seen,
                  loved and remembered.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
                <button
                  onClick={() => setShowDonate(true)}
                  className="btn-primary px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold text-xl rounded-full shadow-2xl hover:shadow-yellow-500/75 hover:scale-110 active:scale-95 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>🎁</span>
                  Make a Wish Come True
                </button>
                <button
                  onClick={() => setShowDonate(true)}
                  className="btn-secondary px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-semibold text-xl rounded-full hover:bg-white/40 hover:border-white/80 hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  Give a $5 Gift
                </button>
              </div>

              <button className="btn-link text-yellow-300 font-semibold hover:text-yellow-400 transition-colors inline-flex items-center gap-2 text-lg">
                Share the Magic
                <span>→</span>
              </button>
            </div>

            {/* Partners */}
            <div className="mt-20 pt-12 border-t border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Our Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <Image
                      unoptimized
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-950 border-t border-yellow-400/30 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-white/60">
              A Thousand Wishes • CNCF Christmas Campaign 2025
            </p>
            
          </div>
        </footer>

        {/* MODALS */}
        {/* Wish Detail Modal */}
        {showWishModal && selectedWish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative animate-fade-in">
              <button
                onClick={() => setShowWishModal(false)}
                className="absolute right-6 top-6 text-slate-400 hover:text-slate-900 text-2xl"
              >
                ✕
              </button>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    🎁
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {selectedWish.childName}, {selectedWish.age}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {selectedWish.location}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedWish.story}
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-4">
                  <p className="text-xs font-semibold text-slate-600 mb-2">
                    Christmas Wish:
                  </p>
                  <p className="text-lg font-bold text-red-700">
                    &ldquo;{selectedWish.wish}&rdquo;
                  </p>
                </div>

                <button
                  onClick={handleDonateClick}
                  className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Grant this wish 🎁
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Your donation helps us purchase and deliver this gift with
                  love
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Donation Modal */}
        {showDonate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative animate-fade-in">
              <button
                onClick={() => setShowDonate(false)}
                className="absolute right-6 top-6 text-slate-400 hover:text-slate-900 text-2xl"
              >
                ✕
              </button>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎄</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Send Christmas Magic
                  </h3>
                  <p className="text-sm text-slate-600">
                    Your gift brings hope, warmth, and joy to a child in need
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleConfirmDonation();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Select amount
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[5, 15, 30].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className="py-3 px-4 border-2 border-red-200 rounded-xl font-bold text-red-700 hover:bg-red-50 hover:border-red-400 transition-all"
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="custom-amount"
                      className="text-sm font-semibold text-slate-700 mb-2 block"
                    >
                      Custom amount (USD)
                    </label>
                    <input
                      id="custom-amount"
                      type="number"
                      min={5}
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="donor-name"
                      className="text-sm font-semibold text-slate-700 mb-2 block"
                    >
                      Your name (optional)
                    </label>
                    <input
                      id="donor-name"
                      type="text"
                      placeholder="Anonymous"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Complete Demo Donation
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    This is a prototype. In production, this connects to your
                    payment gateway.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
