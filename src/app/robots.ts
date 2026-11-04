import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/search", "/api/"],
      },
      {
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended"],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/search", "/api/"],
      },
    ],
    sitemap: "https://icondrugs.com/sitemap.xml",
    host: "https://icondrugs.com",
  };
}
