import {describe, expect, it} from "vitest";
import sitemap from "@/app/sitemap";
import {locales} from "@/app/i18n";
import {componentRegistry} from "@/components/registry";

describe("sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);

    it("lists the catalog and every component page for every locale", () => {
        for (const lang of locales) {
            expect(urls.some((url) => url.endsWith(`/${lang}/components`))).toBe(true);

            for (const component of componentRegistry) {
                expect(urls.some((url) => url.endsWith(`/${lang}/components/${component.slug}`))).toBe(true);
            }
        }
    });

    it("has no duplicate urls", () => {
        expect(new Set(urls).size).toBe(urls.length);
    });
});
