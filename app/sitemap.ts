import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kunalzaveri.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add additional static or dynamic routes here
    // {
    //   url: "https://kunalzaveri.dev/resume",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
