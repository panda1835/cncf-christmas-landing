"use client";

import { useState } from "react";
import Image from "next/image";

// Simple mock data
const wishes = [
  {
    id: 1,
    childName: "Minh (8)",
    location: "Dak Lak, Viet Nam",
    story:
      "Minh lives with his grandmother in a small village. His dream is to have a warm jacket so he can walk to school on cold mornings.",
    wishlist: [
      "Warm winter jacket",
      "Woolen hat and scarf",
      "Storybook in Vietnamese",
      "A small soccer ball",
      "Color pencils and sketchbook",
    ],
  },
  {
    id: 2,
    childName: "Lan (6)",
    location: "Thai Binh, Viet Nam",
    story:
      "Lan loves drawing stars and Christmas trees. She has never received a wrapped present with her name on it.",
    wishlist: [
      "Drawing set with markers",
      "Soft toy (any animal)",
      "Red backpack for school",
      "Glitter stickers",
      "Warm pajamas with stars",
    ],
  },
  {
    id: 3,
    childName: "Tu (10)",
    location: "Kon Tum, Viet Nam",
    story:
      "Tu wants to become a science teacher. He walks 4km to school every day and often studies by candlelight.",
    wishlist: [
      "School supplies (notebooks & pens)",
      "Small rechargeable desk lamp",
      "Math puzzle book",
      "Second-hand science encyclopedia",
      "A pair of sturdy sandals",
    ],
  },
];

// Past events images (using placeholder images - replace with actual event photos)
const pastEvents = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=800&h=600&fit=crop",
    caption: "Christmas 2023 - Over 800 children received gifts",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=800&h=600&fit=crop",
    caption: "Volunteers wrapping presents for children",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=600&fit=crop",
    caption: "Christmas celebration 2022 with local communities",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=600&fit=crop",
    caption: "Children opening their Christmas gifts",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop",
    caption: "CNCF Christmas tree with hundreds of wishes",
  },
];

// Partner organizations (placeholder logos - replace with actual partner logos)
const partners = [
  {
    id: 1,
    name: "Pendolasco",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRMkVWP2iAWMSX9CIf5CVTMnTLxgSlMEK8g&s",
  },

  {
    id: 3,
    name: "The Deck Saigon",
    logo: "https://hotelcareer.vn/uploads/1695870371606-938556b9-6338-4dea-8f17-2890c39d5458.png",
  },
  {
    id: 4,
    name: "Lubu Mediterranean Food & Wine",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqpbP9MC3ZHWppBxgijNn4ynHS8r3BzjvOg&s",
  },
  {
    id: 5,
    name: "Westcoast International Clinic",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqpbP9MC3ZHWppBxgijNn4ynHS8r3BzjvOg&s",
  },
  {
    id: 6,
    name: "The Snap Cafe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqpbP9MC3ZHWppBxgijNn4ynHS8r3BzjvOg&s",
  },
];

export default function ChristmasWishLanding() {
  const [selectedWish, setSelectedWish] = useState<
    (typeof wishes)[number] | null
  >(null);
  const [showWishModal, setShowWishModal] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [physicalGifts, setPhysicalGifts] = useState(312);
  const [onlineGifts, setOnlineGifts] = useState(487);
  const [pendingGiftCount, setPendingGiftCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenWish = (wishId: number) => {
    const wish = wishes.find((w) => w.id === wishId) || null;
    setSelectedWish(wish);
    setShowWishModal(true);
  };

  const handleDonateClick = () => {
    // Open donate modal from the wish modal
    setShowWishModal(false);
    setShowDonate(true);
  };

  const handleConfirmDonation = () => {
    // Demo: just increment counts locally
    setOnlineGifts((prev) => prev + 1);
    setPendingGiftCount((prev) => prev + 1);
    setShowDonate(false);
  };

  const handleCloseDonateModal = () => {
    setShowDonate(false);
  };

  const handleCloseWishModal = () => {
    setShowWishModal(false);
  };

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

        /* Snowflakes animation */
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px);
            opacity: 0.3;
          }
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: white;
          font-size: 1em;
          opacity: 0.8;
          animation: snowfall linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        .snowflake:nth-child(1) {
          left: 10%;
          animation-duration: 10s;
          animation-delay: 0s;
        }
        .snowflake:nth-child(2) {
          left: 20%;
          animation-duration: 12s;
          animation-delay: 2s;
          font-size: 0.8em;
        }
        .snowflake:nth-child(3) {
          left: 30%;
          animation-duration: 15s;
          animation-delay: 4s;
          font-size: 1.2em;
        }
        .snowflake:nth-child(4) {
          left: 40%;
          animation-duration: 11s;
          animation-delay: 1s;
        }
        .snowflake:nth-child(5) {
          left: 50%;
          animation-duration: 13s;
          animation-delay: 3s;
          font-size: 0.9em;
        }
        .snowflake:nth-child(6) {
          left: 60%;
          animation-duration: 14s;
          animation-delay: 5s;
        }
        .snowflake:nth-child(7) {
          left: 70%;
          animation-duration: 10s;
          animation-delay: 2.5s;
          font-size: 1.1em;
        }
        .snowflake:nth-child(8) {
          left: 80%;
          animation-duration: 12s;
          animation-delay: 0.5s;
        }
        .snowflake:nth-child(9) {
          left: 90%;
          animation-duration: 11s;
          animation-delay: 4.5s;
          font-size: 0.85em;
        }
        .snowflake:nth-child(10) {
          left: 15%;
          animation-duration: 13s;
          animation-delay: 1.5s;
        }
        .snowflake:nth-child(11) {
          left: 25%;
          animation-duration: 15s;
          animation-delay: 3.5s;
          font-size: 1.15em;
        }
        .snowflake:nth-child(12) {
          left: 35%;
          animation-duration: 10s;
          animation-delay: 2s;
        }
        .snowflake:nth-child(13) {
          left: 45%;
          animation-duration: 12s;
          animation-delay: 0s;
          font-size: 0.95em;
        }
        .snowflake:nth-child(14) {
          left: 55%;
          animation-duration: 14s;
          animation-delay: 4s;
        }
        .snowflake:nth-child(15) {
          left: 65%;
          animation-duration: 11s;
          animation-delay: 1s;
          font-size: 1.05em;
        }
        .snowflake:nth-child(16) {
          left: 75%;
          animation-duration: 13s;
          animation-delay: 3s;
        }
        .snowflake:nth-child(17) {
          left: 85%;
          animation-duration: 10s;
          animation-delay: 5s;
          font-size: 0.9em;
        }
        .snowflake:nth-child(18) {
          left: 95%;
          animation-duration: 12s;
          animation-delay: 2.5s;
        }
        .snowflake:nth-child(19) {
          left: 5%;
          animation-duration: 15s;
          animation-delay: 1.5s;
          font-size: 1.1em;
        }
        .snowflake:nth-child(20) {
          left: 12%;
          animation-duration: 11s;
          animation-delay: 4.5s;
        }
      `}</style>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        {/* Hero / Tree section */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, #B91C1C 0%, #DC2626 50%, #B91C1C 100%)",
          }}
        >
          {/* Snowflakes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="snowflake">
                ❄
              </div>
            ))}
          </div>

          {/* Decorative overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.3)_0,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2)_0,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.25)_0,transparent_50%)]" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-4 pt-16 pb-10 w-full mx-auto">
            <header className="text-center max-w-4xl mb-2 md:mb-4">
              <p className="text-xs uppercase tracking-[0.2em] mb-2 text-white/90">
                CNCF 1000 Christmas Wishes
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 text-white drop-shadow-lg">
                Hang a wish. Wrap a present. <br className="hidden md:block" />
                <span className="text-yellow-200">
                  Light up a child&apos;s Christmas.
                </span>
              </h1>
              <p className="text-sm md:text-base text-white/90 drop-shadow">
                Each postcard on this tree holds the Christmas wish of a child
                in need. Choose a wish, send a gift, and watch this tree fill
                with presents from around the world.
              </p>
            </header>

            {/* Centered tree */}
            <div className="flex w-full items-center justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] flex items-center justify-center">
                {/* Tree trunk */}
                <div
                  className="absolute bottom-0 w-16 h-20 rounded-t-md"
                  style={{
                    background: "linear-gradient(to bottom, #8B4513, #654321)",
                  }}
                />

                {/* Tree body */}
                <div className="relative w-[80%] h-[85%] flex flex-col items-center justify-between">
                  {/* Layers */}
                  {[1, 2, 3, 4].map((layer) => (
                    <div
                      key={layer}
                      className="relative w-full flex justify-center"
                      style={{
                        transform: `scale(${0.3 + layer * 0.18}) translateY(${
                          layer * 4
                        }px)`,
                      }}
                    >
                      <div
                        className="w-full aspect-[6/2] rounded-[999px] shadow-xl"
                        style={{
                          background:
                            "linear-gradient(to bottom, #248C43, #1a6b32)",
                          boxShadow:
                            "0 20px 25px -5px rgba(36, 140, 67, 0.5), 0 10px 10px -5px rgba(36, 140, 67, 0.3)",
                        }}
                      />
                    </div>
                  ))}

                  {/* Star */}
                  <div className="absolute -top-6 w-10 h-10 rotate-12 flex items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-full blur-[2px] opacity-80"
                      style={{ backgroundColor: "#FFCE33" }}
                    />
                    <div
                      className="absolute w-7 h-7 rounded-full shadow-lg"
                      style={{
                        backgroundColor: "#FFCE33",
                        boxShadow: "0 10px 15px -3px rgba(255, 206, 51, 0.7)",
                      }}
                    />
                  </div>

                  {/* Postcards */}
                  <div className="absolute inset-[15%]">
                    <div className="relative w-full h-full">
                      {wishes.map((wish, index) => {
                        const positions = [
                          "top-[8%] left-[12%] -rotate-6",
                          "top-[30%] right-[10%] rotate-4",
                          "bottom-[18%] left-[20%] rotate-3",
                        ];
                        return (
                          <button
                            key={wish.id}
                            type="button"
                            onClick={() => handleOpenWish(wish.id)}
                            className={`group absolute ${positions[index]} bg-white text-slate-800 rounded-lg shadow-lg px-3 py-2 border hover:-translate-y-1 hover:shadow-xl transition-transform text-left w-32`}
                            style={{
                              borderColor: "#FFCE33",
                              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <p
                              className="text-[10px] uppercase tracking-[0.14em] font-semibold mb-1"
                              style={{ color: "#ED1C24" }}
                            >
                              Christmas wish
                            </p>
                            <p className="text-xs font-semibold">
                              {wish.childName}
                            </p>
                            <p className="text-[10px] text-slate-500 leading-snug">
                              &ldquo;{wish.wishlist[0]}&rdquo;
                            </p>
                            <span
                              className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium"
                              style={{ color: "#248C43" }}
                            >
                              Open wish
                              <span className="translate-y-[0.5px]">↗</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Presents under tree */}
                  <div className="absolute -bottom-6 w-full flex items-end justify-center gap-2">
                    {/* Static presents */}
                    <div
                      className="w-12 h-10 rounded-md shadow-md flex items-end justify-center relative overflow-hidden"
                      style={{ backgroundColor: "#ED1C24" }}
                    >
                      <div
                        className="absolute inset-0 border-2 rounded-md"
                        style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                      />
                      <div
                        className="w-2 h-full"
                        style={{ backgroundColor: "#FFCE33" }}
                      />
                    </div>
                    <div
                      className="w-16 h-12 rounded-md shadow-md flex items-end justify-center relative overflow-hidden"
                      style={{ backgroundColor: "#FFCE33" }}
                    >
                      <div
                        className="absolute inset-0 border-2 rounded-md"
                        style={{ borderColor: "rgba(255, 255, 255, 0.6)" }}
                      />
                      <div
                        className="w-3 h-full"
                        style={{ backgroundColor: "#ED1C24" }}
                      />
                    </div>
                    {/* Dynamic gifts added */}
                    {Array.from({ length: pendingGiftCount }).map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-9 rounded-md shadow-md flex items-end justify-center relative overflow-hidden animate-bounce"
                        style={{
                          animationDelay: `${i * 120}ms`,
                          backgroundColor: "#248C43",
                        }}
                      >
                        <div
                          className="absolute inset-0 border-2 rounded-md"
                          style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                        />
                        <div
                          className="w-2 h-full"
                          style={{ backgroundColor: "#373795" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-white/80 text-center max-w-md drop-shadow">
              Tap any postcard on the tree to read a child&apos;s Christmas
              wish. From there, you can choose to send a gift and help place
              another present under the tree.
            </p>
          </div>

          {/* Wish content modal */}
          {showWishModal && selectedWish && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div
                className="w-full max-w-lg mx-4 rounded-2xl bg-white shadow-2xl p-6 relative"
                style={{ border: "2px solid #373795" }}
              >
                <button
                  type="button"
                  onClick={handleCloseWishModal}
                  className="absolute right-4 top-3 text-slate-400 hover:text-slate-900 text-sm"
                >
                  ✕
                </button>

                <p
                  className="text-xs uppercase tracking-[0.2em] mb-2"
                  style={{ color: "#373795" }}
                >
                  Christmas wish
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        {selectedWish.childName}&apos;s Christmas wish
                      </h2>
                      <p className="text-xs text-slate-600">
                        {selectedWish.location}
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium text-white"
                      style={{
                        backgroundColor: "#248C43",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      1 of 1000 wishes
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedWish.story}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-slate-800 mb-1.5">
                      Wishlist
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-slate-700">
                      {selectedWish.wishlist.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 rounded-full px-3 py-1"
                          style={{ backgroundColor: "#f3f4f6" }}
                        >
                          <span className="text-[10px]">🎁</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleDonateClick}
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
                      style={
                        {
                          backgroundColor: "#248C43",
                          boxShadow: "0 10px 15px -3px rgba(36, 140, 67, 0.4)",
                          "--tw-ring-color": "#248C43",
                        } as React.CSSProperties
                      }
                    >
                      Buy{" "}
                      {selectedWish.childName.includes("(")
                        ? "them"
                        : "him/her"}{" "}
                      a gift
                    </button>
                    <p className="text-[11px] text-slate-600 max-w-xs">
                      Your donation will be pooled with others to purchase and
                      deliver a carefully selected Christmas gift.
                    </p>
                  </div>

                  <p className="text-[10px] text-slate-500 pt-1">
                    This is a UX demo only — no real payment is processed on
                    this page.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Donation modal */}
          {showDonate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div
                className="w-full max-w-md mx-4 rounded-2xl bg-white shadow-2xl p-6 relative"
                style={{ border: "2px solid #373795" }}
              >
                <button
                  type="button"
                  onClick={handleCloseDonateModal}
                  className="absolute right-4 top-3 text-slate-400 hover:text-slate-900 text-sm"
                >
                  ✕
                </button>
                <h3 className="text-lg font-semibold mb-1 text-slate-900">
                  Send a Christmas gift
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Your contribution will help CNCF and its partners purchase,
                  wrap, and deliver a Christmas present to this child, together
                  with winter essentials where needed.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleConfirmDonation();
                  }}
                  className="space-y-3"
                >
                  <div className="flex gap-2 text-xs">
                    {[15, 30, 50].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="flex-1 rounded-full border px-3 py-2 hover:brightness-90 transition"
                        style={{
                          borderColor: "#373795",
                          backgroundColor: "white",
                          color: "#373795",
                        }}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-700" htmlFor="amount">
                      Custom amount (USD)
                    </label>
                    <input
                      id="amount"
                      type="number"
                      min={5}
                      step={1}
                      placeholder="25"
                      className="w-full rounded-xl border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent"
                      style={
                        {
                          borderColor: "#d1d5db",
                          "--tw-ring-color": "#373795",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-700" htmlFor="name">
                      Your name (optional)
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="You can leave this blank"
                      className="w-full rounded-xl border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent"
                      style={
                        {
                          borderColor: "#d1d5db",
                          "--tw-ring-color": "#373795",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
                    style={
                      {
                        backgroundColor: "#248C43",
                        boxShadow: "0 10px 15px -3px rgba(36, 140, 67, 0.4)",
                        "--tw-ring-color": "#248C43",
                      } as React.CSSProperties
                    }
                  >
                    Complete demo donation
                  </button>

                  <p className="text-[10px] text-slate-500 mt-1">
                    This is a prototype interface. In a real deployment, this
                    step would connect to your payment gateway (Stripe, PayPal,
                    local provider, etc.).
                  </p>
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Stats & campaign story */}
        <section
          className="relative z-20 bg-white border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <div className="space-y-8">
              {/* Stats */}
              <div className="space-y-4">
                <p
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#373795" }}
                >
                  This year&apos;s giving tree
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-slate-900">
                  Every present carries a story of hope.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="rounded-2xl border p-4 flex flex-col gap-2"
                    style={{
                      borderColor: "#248C43",
                      backgroundColor: "#f9fafb",
                    }}
                  >
                    <p className="text-xs text-slate-700">Physical presents</p>
                    <p
                      className="text-3xl font-semibold"
                      style={{ color: "#248C43" }}
                    >
                      {physicalGifts}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      Gifts wrapped and delivered by our on-site community
                      partners.
                    </p>
                  </div>
                  <div
                    className="rounded-2xl border p-4 flex flex-col gap-2"
                    style={{
                      borderColor: "#FFCE33",
                      backgroundColor: "#f9fafb",
                    }}
                  >
                    <p className="text-xs text-slate-700">
                      Online gifts pledged
                    </p>
                    <p
                      className="text-3xl font-semibold"
                      style={{ color: "#FFCE33" }}
                    >
                      {onlineGifts}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      Donations made through the online campaign across the
                      globe.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-1">
                  Numbers are for demonstration only and can be wired to live
                  data from your CRM or donation platform.
                </p>
              </div>

              {/* Campaign story now below stats */}
              <div className="space-y-5 text-sm md:text-[15px] text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-slate-900">
                    About A Thousand Wishes
                  </h3>
                  <p className="mb-4">
                    For over 12 wonderful years, the A Thousand Wishes campaign
                    has brought the magic of Christmas to children in need
                    across Vietnam. Since its beginning in 2013, the campaign
                    has fulfilled nearly 5,000 heartfelt wishes, each one
                    carrying the message that every child deserves to feel
                    loved, protected and remembered.
                  </p>
                  <p>
                    This year, A Thousand Wishes continues its beautiful
                    tradition, inviting individuals and organizations to join
                    hands in making dreams come true.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <span className="text-lg">🎄</span> Wish Trees
                    </h4>
                    <p>
                      Visit our partner restaurants, hotels and spas in Ho Chi
                      Minh City, select a child&apos;s wish from the tree, buy
                      the gift, wrap it up, attach the wish cards to the gifts
                      and return it before December 20.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-slate-900 flex items-center gap-2">
                      <span className="text-lg">💝</span> Online Donations
                    </h4>
                    <p>
                      Even from miles away, you can light up a child&apos;s
                      world, wrapping them in love, joy, and the hope of a
                      brighter tomorrow. Visit{" "}
                      <a
                        href="https://www.cncf.org/donate"
                        className="underline"
                        style={{ color: "#373795" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.cncf.org/donate
                      </a>{" "}
                      to share your $5 Christmas gift, because every act of
                      kindness makes the season shine a little brighter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Carousel */}
        <section
          className="relative bg-white py-12 md:py-16 border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-6">
              <div className="text-center">
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-2"
                  style={{ color: "#373795" }}
                >
                  Our Impact
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                  Moments from past Christmas celebrations
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                  See the joy and smiles we&apos;ve brought to children over the
                  years through your generous support.
                </p>
              </div>

              {/* Carousel */}
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
                  {pastEvents.map((event) => (
                    <div
                      key={event.id}
                      className="shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-center"
                    >
                      <div
                        className="rounded-2xl overflow-hidden shadow-lg border transition-transform hover:scale-105 hover:shadow-xl"
                        style={{ borderColor: "#e5e7eb" }}
                      >
                        <div className="relative aspect-4/3 bg-gray-200">
                          <Image
                            unoptimized
                            src={event.url}
                            alt={event.caption}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {event.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {pastEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        backgroundColor:
                          currentImageIndex === index ? "#248C43" : "#d1d5db",
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section
          className="relative bg-white py-12 md:py-16 border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3">
                  Ready to make a child&apos;s Christmas dream come true?
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                  Every gift brings hope, warmth, and a smile. Join hundreds of
                  supporters worldwide in spreading Christmas joy to children in
                  need.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  type="button"
                  onClick={() => {
                    // Scroll to tree section
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 transition transform hover:scale-105"
                  style={
                    {
                      backgroundColor: "#248C43",
                      boxShadow: "0 10px 15px -3px rgba(36, 140, 67, 0.4)",
                      "--tw-ring-color": "#248C43",
                    } as React.CSSProperties
                  }
                >
                  <span className="mr-2">🎁</span>
                  Buy them a gift
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition transform hover:scale-105 border-2"
                  style={{
                    borderColor: "#373795",
                    color: "#373795",
                    backgroundColor: "white",
                  }}
                >
                  Learn more about CNCF
                </button>
              </div>

              {/* Partner Carousel */}
              <div
                className="mt-12 pt-8 border-t"
                style={{ borderColor: "#f3f4f6" }}
              >
                <h3 className="text-xl font-semibold text-center mb-6 text-slate-900">
                  Our Trusted Partners
                </h3>
                <p className="text-sm text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                  We&apos;re grateful to our partner restaurants, hotels, and
                  spas across Ho Chi Minh City for hosting Wish Trees and
                  supporting this campaign.
                </p>

                <div className="relative">
                  <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
                    {partners.map((partner) => (
                      <div
                        key={partner.id}
                        className="shrink-0 w-[200px] snap-center"
                      >
                        <div
                          className="h-[100px] rounded-xl border bg-white flex items-center justify-center p-4 transition-all hover:shadow-lg hover:scale-105"
                          style={{ borderColor: "#e5e7eb" }}
                        >
                          <Image
                            unoptimized
                            src={partner.logo}
                            alt={partner.name}
                            width={200}
                            height={100}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                        <p className="text-xs text-center mt-2 text-slate-600 font-medium">
                          {partner.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          className="border-t bg-gray-50"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
            <p>
              UX demo • CNCF 1000 Christmas Wishes • Built with Next.js &
              Tailwind CSS
            </p>
            <p className="text-slate-500">
              Replace this footer with your organization&apos;s branding,
              partners, and legal information.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
