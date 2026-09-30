import type { MetadataRoute } from "next";
import { getBlogPosts, locales } from "@/content/site";

const siteUrl = "https://minkits.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/blog"];
  const pages = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((other) => [other, `${siteUrl}/${other}${path}`])),
      },
    })),
  );

  const posts = locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.lastModified),
      alternates: {
        languages: Object.fromEntries(locales.map((other) => [other, `${siteUrl}/${other}/blog/${post.slug}`])),
      },
    })),
  );

  return [...pages, ...posts];
}
