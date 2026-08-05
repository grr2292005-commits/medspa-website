import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Solène Aesthetic Medicine Studio",
    short_name: "Solène Studio",
    description:
      "Bespoke non-invasive medical aesthetics and facial architecture in Beverly Hills.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#1F221B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
