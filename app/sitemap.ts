

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""; 

  const staticPages = [
    "/seo-tips",
    "/technology",
    "/tips-and-tricks",
    "/photo-gallery",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return [
    ...pages,
    {
      url: `${baseUrl}`,
      lastModified: "2021-01-01",
      changeFrequency: "weekly",
      priority: 0.5,
      
    },
  ];
}
