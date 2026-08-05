import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solenestudio.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/journal",
    "/results",
    "/treatments",
    "/treatments/injectables",
    "/treatments/collagen",
    "/treatments/laser",
    "/treatments/hydration",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/treatments") ? 0.9 : 0.8,
  }));
}
