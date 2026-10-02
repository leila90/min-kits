import type { MetadataRoute } from "next";
import { locales } from "./i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minkits.com";

const paths = ["", "/about", "/blog", "/blog/1", "/blog/2", "/blog/3"];

export default function sitemap(): MetadataRoute.Sitemap {
    return locales.flatMap((lang) =>
        paths.map((path) => ({
            url: `${siteUrl}/${lang}${path}`,
            alternates: {
                languages: Object.fromEntries(
                    locales.map((locale) => [
                        locale,
                        `${siteUrl}/${locale}${path}`,
                    ])
                ),
            },
        }))
    );
}
