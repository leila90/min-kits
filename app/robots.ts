import type { MetadataRoute } from "next";
import { defaultLocale, getContent } from "@/content/site";


export default function robots(): MetadataRoute.Robots {
  const siteUrl = getContent(defaultLocale).site.url;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
