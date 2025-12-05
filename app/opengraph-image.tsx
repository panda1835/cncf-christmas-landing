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
          background: "linear-gradient(to bottom, #1a472a, #2d5a3d)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/CNCF-noel-logo.png"
          alt="CNCF Noel Logo"
          width="400"
          height="400"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
