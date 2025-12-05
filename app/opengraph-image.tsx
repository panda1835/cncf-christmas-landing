import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "A Thousand Wishes - Christina Noble Children's Foundation Christmas Campaign";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(to bottom, #1a472a, #2d5a3d)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: "bold",
              margin: 0,
              textAlign: "center",
            }}
          >
            A Thousand Wishes
          </h1>
          <p
            style={{
              fontSize: 36,
              margin: 0,
              textAlign: "center",
              opacity: 0.9,
            }}
          >
            Bringing Joy to Children in Vietnam and Mongolia
          </p>
          <p
            style={{
              fontSize: 28,
              margin: 0,
              marginTop: "40px",
              opacity: 0.8,
            }}
          >
            Christina Noble Children&apos;s Foundation Christmas Campaign 2025
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
