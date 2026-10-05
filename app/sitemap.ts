import type { MetadataRoute } from "next";
import { componentRegistry } from "@/components/registry";
import { locales } from "./i18n";
import { messages } from "./i18n/messages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minkits.com";

const blogPaths = messages.en.blog.posts.map((_, index) => `/blog/${index + 1}`);
const componentPaths = componentRegistry.map((component) => `/components/${component.slug}`);

const paths = [
    "",
    "/about",
    "/blog",
    ...blogPaths,
    "/components",
    ...componentPaths,
    "/components/component-packs",
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
