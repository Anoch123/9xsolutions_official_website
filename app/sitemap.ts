import { MetadataRoute } from "next";
import { pageSEO } from "@/lib/constants/helper-constants";

const baseUrl = "https://9xsolutionsit.com";

const routes = [
  "/",
  "/our-services",
  "/our-story",
  "/work-we-have-done",
  "/ai-business-solutions",
  "/talk-to-us",
  // "/company/careers",
  // "/legal/privacy-policy",
  // "/legal/terms-and-conditions",
  "/technologies-we-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: pageSEO[route]?.canonical ?? `${baseUrl}${route}`,
    lastModified: new Date("2026-11-19"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
