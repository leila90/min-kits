import {existsSync} from "node:fs";
import path from "node:path";
import {describe, expect, it} from "vitest";
import {componentCategories, componentRegistry, componentSlugs} from "@/components/registry";
import {getComponentSource} from "@/components/registry/source";
import {cardPreviews, demoPreviews} from "@/components/sections/componentCatalog/previews";

describe("component registry", () => {
    it("has unique slugs that match the declared slug list", () => {
        const slugs = componentRegistry.map((item) => item.slug);

        expect(new Set(slugs).size).toBe(slugs.length);
        expect([...slugs].sort()).toEqual([...componentSlugs].sort());
    });

    it("uses only declared categories and has no empty category", () => {
        for (const item of componentRegistry) {
            expect(componentCategories).toContain(item.category);
        }
        for (const category of componentCategories) {
            expect(componentRegistry.some((item) => item.category === category)).toBe(true);
        }
    });

    it.each(componentRegistry.map((item) => [item.slug, item] as const))(
        "%s has complete en/fa content",
        (_slug, item) => {
            for (const lang of ["en", "fa"] as const) {
                expect(item.name[lang].trim()).not.toBe("");
                expect(item.description[lang].trim()).not.toBe("");
                expect(item.props.length).toBeGreaterThan(0);
                expect(item.examples.length).toBeGreaterThan(0);

                for (const prop of item.props) {
                    expect(prop.description[lang].trim()).not.toBe("");
                }
                for (const example of item.examples) {
                    expect(example.title[lang].trim()).not.toBe("");
                }
            }

            const propNames = item.props.map((prop) => prop.name);
            expect(new Set(propNames).size).toBe(propNames.length);
        },
    );

    it.each(componentRegistry.map((item) => [item.slug, item] as const))(
        "%s reads its source from the real component file",
        async (_slug, item) => {
            expect(existsSync(path.join(process.cwd(), item.sourceFile))).toBe(true);

            const source = await getComponentSource(item);
            expect(source).toContain("export default function");
        },
    );

    it("has a demo and a card preview for every component", () => {
        expect(Object.keys(demoPreviews).sort()).toEqual([...componentSlugs].sort());
        expect(Object.keys(cardPreviews).sort()).toEqual([...componentSlugs].sort());
    });
});
