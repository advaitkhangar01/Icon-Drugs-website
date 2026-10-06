import { MetadataRoute } from "next";
import { productsData, therapyAreasData, healthConditionsData, insightsData } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://icondrugs.com";

  const staticRoutes = [
    "",
    "/therapeutic-areas",
    "/products",
    "/health",
    "/healthcare-professionals",
    "/insights",
    "/business-enquiry",
    "/search",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const therapyRoutes = therapyAreasData.map((t) => ({
    url: `${baseUrl}/therapeutic-areas/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const healthRoutes = healthConditionsData.map((c) => ({
    url: `${baseUrl}/health/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightRoutes = insightsData.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...therapyRoutes,
    ...productRoutes,
    ...healthRoutes,
    ...insightRoutes,
  ];
}
