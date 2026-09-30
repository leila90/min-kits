import type { MetadataRoute } from "next";
import { locales } from "./dictionaries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vira-co.com";
const paths = ["", "/about", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
    return locales.flatMap((lang) =>
        paths.map((path) => ({
            url: `${siteUrl}/${lang}${path}`,
            lastModified: new Date(),
            alternates: {
                languages: Object.fromEntries(
                    locales.map((l) => [l, `${siteUrl}/${l}${path}`])
                ),
            },
        }))
    );
}
