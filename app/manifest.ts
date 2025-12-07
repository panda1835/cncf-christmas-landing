import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A Thousand Wishes - CNCF",
    short_name: "Thousand Wishes",
    description:
      "Join CNCF's A Thousand Wishes campaign to bring Christmas Magic to children in Vietnam and Mongolia",
    start_url: "/",
    display: "standalone",
    background_color: "#1a472a",
    theme_color: "#1a472a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
