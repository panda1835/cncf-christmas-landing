"use client";
import React from "react";

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const locations = [
  { name: "Al Fresco", address: "92 Xuân Thủy, Thảo Điền, Thủ Đức" },
  { name: "Pendolasco", address: "30 Tống Hữu Định, Thảo Điền, Thủ Đức" },
  { name: "Ciao Bella", address: "39 Võ Trường Toản, An Phú, Thủ Đức" },
  { name: "El Gaucho", address: "77 Xuân Thủy, Thảo Điền, Thủ Đức" },
  { name: "Jaspas", address: "15 Tống Hữu Định, Thảo Điền, Thủ Đức" },
  { name: "District Federal", address: "84 Xuân Thủy, Thảo Điền, Thủ Đức" },
  { name: "Union Jack’s", address: "10 Nguyễn Bá Lân, Thảo Điền, Thủ Đức" },
  {
    name: "MAD Wine Bar & Eatery",
    address: "63 Xuân Thủy, Thảo Điền, Thủ Đức",
  },
  { name: "The Deck", address: "38 Nguyễn Ư Dĩ, Phường An Khánh, Thủ Đức" },
  { name: "Mekong Merchant", address: "23 Thảo Điền, Thủ Đức" },

  { name: "Lubu Restaurant", address: "97b Thảo Điền, Thủ Đức" },
  { name: "Snap Café", address: "32 Trần Ngọc Diện, Thảo Điền, Thủ Đức" },
  {
    name: "West Coast Dental",
    address: "27 Nguyễn Bá Lân, Thảo Điền, Thủ Đức",
  },
  { name: "Mia Hotel", address: "02–04 Đường số 10, Phường An Khánh, Thủ Đức" },
  { name: "Jasmine Spa", address: "14E1 Đường số 38, Thảo Điền, Thủ Đức" },
  { name: "Soma Saigon", address: "6 Lê Văn Miến, Thảo Điền, Thủ Đức" },
  { name: "KEPI Toy Shop", address: "63 Thảo Điền, Thủ Đức" },
  {
    name: "MiTek Vietnam",
    address: "A5 Building E - Office Park Road, Tân Thuận, Đường Sáng Tạo",
  },
  {
    name: "Pullman Saigon Hotel",
    address: "148 Trần Hưng Đạo, Boulevard, Quận 1",
  },
  { name: "Family Medical", address: "95 Thảo Điền, Thủ Đức" },
  {
    name: "Moc Huong Gallery Wellness Spa",
    address: "61 Xuân Thủy, Thảo Điền, Thủ Đức",
  },
];

export default function LocationsModal({
  isOpen,
  onClose,
}: LocationsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "1rem",
      }}
      onClick={onClose}
      className="backdrop-blur-md animate-fade-in"
    >
      <div
        style={{
          position: "relative",
          backgroundImage: "url('/Background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          padding: "2rem",
          maxWidth: "900px",
          width: "100%",
          maxHeight: "80vh",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          animation: "scaleIn 0.3s ease-out",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Bubbles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              style={{
                position: "absolute",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 192, 203, 0.3) 40%, transparent 70%)",
                width: `${Math.random() * 60 + 30}px`,
                height: `${Math.random() * 60 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(2px)",
                opacity: 0.5,
                animation: `floatBubble ${
                  Math.random() * 8 + 8
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "700",
              fontFamily: "var(--font-be-vietnam)",
              color: "#FFD700",
              background:
                "linear-gradient(to bottom, #FBE67B 0%, #FCFBE7 50%, #F7D14E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            All Locations
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "2px ",
              borderRadius: "50%",
              fontSize: "24px",
              cursor: "pointer",
              color: "#173f35",
              padding: 0,
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#173f35";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
              e.currentTarget.style.color = "#173f35";
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxHeight: "calc(80vh - 120px)",
            overflowY: "auto",
            paddingRight: "0.5rem",
          }}
          className="custom-scrollbar"
        >
          <div
            style={
              {
                // display: "flex",
                // flexDirection: "column",
                // gap: "1rem",
              }
            }
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {locations.map((location, index) => (
              <div
                key={`location-${index}`}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "15px",
                  padding: "1.25rem",
                  fontFamily: "var(--font-be-vietnam)",
                  border: "3px solid #D4A574",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#173f35",
                    marginBottom: "0.5rem",
                  }}
                >
                  {location.name}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#173f35",
                  }}
                >
                  {location.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatBubble {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) translateX(-20px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-40px) translateX(10px) scale(1.05);
            opacity: 0.6;
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4a574;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c49563;
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
