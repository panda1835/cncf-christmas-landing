"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
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
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "2rem",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          animation: "scaleIn 0.3s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "var(--font-be-vietnam)",
              color: "#173f35",
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#666",
              padding: 0,
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            fontFamily: "var(--font-be-vietnam)",
            color: "#333",
            lineHeight: "1.6",
          }}
        >
          {children || (
            <p style={{ margin: "1rem 0" }}>
              This is a placeholder modal. Content will be added here.
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "#f0f0f0",
              border: "none",
              borderRadius: "12px",
              padding: "0.75rem 1.5rem",
              fontSize: "14px",
              fontFamily: "var(--font-be-vietnam)",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.3s ease",
              color: "#333",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0e0e0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f0f0")}
          >
            Close
          </button>
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
      `}</style>
    </div>
  );
}
