import { MetadataRoute } from "next";
import { productsData, therapyAreasData, healthConditionsData, insightsData } from "@/data/siteData";
import { getPublishedBlogs } from "@/data/blogsData";

// Revalidate sitemap periodically so new posts are included on their Tuesday/Friday schedule
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://icondrugs.com";
  const buildDate = new Date();

  const coreRoutes = [
    { route: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { route: "/pharmaceutical-company-in-nagpur", changeFrequency: "weekly" as const, priority: 0.95 },
    { route: "/pharmaceutical-manufacturing-maharashtra", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/pharmaceutical-products-formulations", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/pharmaceutical-distribution-supply", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/corporate-information", changeFrequency: "monthly" as const, priority: 0.85 },
    { route: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/quality", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/therapeutic-areas", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/healthcare-professionals", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/business-enquiry", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/health", changeFrequency: "monthly" as const, priority: 0.7 },
    { route: "/insights", changeFrequency: "weekly" as const, priority: 0.7 },
    { route: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/sitemap", changeFrequency: "monthly" as const, priority: 0.5 },
    { route: "/disclaimer", changeFrequency: "yearly" as const, priority: 0.4 },
    { route: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { route: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: buildDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const therapyRoutes = therapyAreasData.map((t) => ({
    url: `${baseUrl}/therapeutic-areas/${t.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const healthRoutes = healthConditionsData.map((c) => ({
    url: `${baseUrl}/health/${c.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const insightRoutes = insightsData.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Only currently published blogs (released on the 2-per-week schedule) are exposed to crawlers in XML sitemap
  const publishedBlogs = getPublishedBlogs();
  const blogRoutes = publishedBlogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.publishDate),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    ...coreRoutes,
    ...therapyRoutes,
    ...productRoutes,
    ...healthRoutes,
    ...insightRoutes,
    ...blogRoutes,
  ];
}
