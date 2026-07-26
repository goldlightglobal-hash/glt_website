import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about/",
    "/services/",
    "/research/",
    "/portfolio/",
    "/training/",
    "/careers/",
    "/blog/",
    "/contact/",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog/" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact/" ? 0.9 : 0.8,
  }));
}
