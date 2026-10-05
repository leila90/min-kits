import type { MetadataRoute } from "next";
import { componentRegistry } from "@/components/registry";
import { locales } from "./i18n";
import { getBlogPosts } from "@/content/blog";
import { getComponentPacks } from "@/content/componentPacks";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minkits.com";

const blogPaths = getBlogPosts("en").map((post) => `/blog/${post.slug}`);
const componentPaths = componentRegistry.map((component) => `/components/${component.slug}`);
const componentPackPaths = getComponentPacks("en").map((pack) => `/components/component-packs/${pack.slug}`);

const paths = [
    "",
    "/about",
    "/blog",
    ...blogPaths,
    "/components",
    ...componentPaths,
    "/components/component-packs",
    ...componentPackPaths,
    "/components/page-kits",
    "/components/ui-kits",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return locales.flatMap((lang) =>
        paths.map((path) => ({
            url: `${siteUrl}/${lang}${path}`,
            alternates: {
                languages: Object.fromEntries(
                    locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`])
                ),
            },
        }))
    );
}
