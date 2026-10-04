"use client";

import Link from "next/link";
import {useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories, type ComponentCategory, type ComponentRegistryItem} from "@/components/registry";

type ComponentCatalogSidebarProps = {
    lang: Lang;
    activeSlug?: string;
    registry: readonly ComponentRegistryItem[];
    copy: Messages["componentsCatalog"];
};

export default function ComponentCatalogSidebar({
    lang,
    activeSlug,
    registry,
    copy,
}: ComponentCatalogSidebarProps) {
    const activeCategory = registry.find((item) => item.slug === activeSlug)?.category;
    const [openCategories, setOpenCategories] = useState<Record<ComponentCategory, boolean>>(() =>
        Object.fromEntries(
            componentCategories.map((category) => [
                category,
                activeCategory === undefined ? category === componentCategories[0] : category === activeCategory,
            ]),
        ) as Record<ComponentCategory, boolean>,
    );

    const toggleCategory = (category: ComponentCategory) => {
        setOpenCategories((current) => ({
            ...current,
            [category]: !current[category],
        }));
    };

    return (
        <aside className="lg:sticky lg:top-40 lg:self-start">
            <nav aria-label={copy.title} className="rounded-2xl border border-zinc-300 bg-white">
                <div className="mb-2 rounded-t-2xl bg-black px-3 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                    {copy.title}
                </div>

                <div className="space-y-1 p-3">
                    {componentCategories.map((category) => {
                        const items = registry.filter((item) => item.category === category);
                        if (items.length === 0) return null;

                        const isOpen = openCategories[category];
                        const panelId = `catalog-category-${category}`;
                        const categoryLabel = copy.categories[category];

                        return (
                            <div key={category}>
                                <button
                                    type="button"
                                    onClick={() => toggleCategory(category)}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    aria-label={`${isOpen ? copy.sidebar.collapse : copy.sidebar.expand} ${categoryLabel}`}
                                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-start text-xs font-semibold text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                                >
                                    <span className="flex items-center gap-2">
                                        <span
                                            aria-hidden="true"
                                            className={[
                                                "inline-block text-[10px] transition-transform duration-200",
                                                isOpen ? (lang === "fa" ? "-rotate-90" : "rotate-90") : "",
                                            ].join(" ")}
                                        >
                                            {lang === "fa" ? "‹" : "›"}
                                        </span>
                                        <span>{categoryLabel}</span>
                                    </span>
                                    <span className="text-[10px] font-semibold tabular-nums text-zinc-300">
                                        {String(items.length).padStart(2, "0")}
                                    </span>
                                </button>

                                <div id={panelId} hidden={!isOpen} className="space-y-0.5">
                                    {items.map((item) => {
                                        const active = item.slug === activeSlug;

                                        return (
                                            <Link
                                                key={item.slug}
                                                href={`/${lang}/components/${item.slug}`}
                                                aria-current={active ? "page" : undefined}
                                                className={[
                                                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                                                    lang === "fa" ? "pr-7" : "pl-7",
                                                    active
                                                        ? "bg-zinc-900 text-white"
                                                        : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950",
                                                ].join(" ")}
                                            >
                                                <span>{item.name[lang]}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
