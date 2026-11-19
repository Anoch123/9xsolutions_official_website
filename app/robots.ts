import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://9xsolutionsit.com/sitemap.xml",
    host: "https://9xsolutionsit.com",
  };
}
