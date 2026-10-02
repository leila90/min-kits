"use client";

import Link from "next/link";
import {useState} from "react";
import type {Lang} from "../../../app/i18n";
import type {ComponentRegistryItem, ComponentCategory} from "../../registry/types";

type ComponentCatalogSidebarProps = {
    lang: Lang;
    activeSlug: string;
    registry: readonly ComponentRegistryItem[];
};

const labels = {
    en: {
        form: "Form",
        layout: "Layout",
        feedback: "Feedback",
        catalog: "Components",
        expand: "Expand",
        collapse: "Collapse",
    },
    fa: {
        form: "فرم",
        layout: "چیدمان",
        feedback: "بازخورد",
        catalog: "کامپوننت‌ها",
        expand: "باز کردن",
        collapse: "بستن",
    },
} as const;

const categoryOrder: ComponentCategory[] = ["form", "layout", "feedback"];

export default function ComponentCatalogSidebar({
    lang,
    activeSlug,
    registry,
}: ComponentCatalogSidebarProps) {
    const activeCategory = registry.find((item) => item.slug === activeSlug)?.category;
    const [openCategories, setOpenCategories] = useState<Record<ComponentCategory, boolean>>({
        form: activeCategory === "form" || activeCategory === undefined,
        layout: activeCategory === "layout",
        feedback: activeCategory === "feedback",
    });

    const toggleCategory = (category: ComponentCategory) => {
        setOpenCategories((current) => ({
            ...current,
            [category]: !current[category],
        }));
    };

    return (
        <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
                aria-label={labels[lang].catalog}
                className="rounded-2xl border border-zinc-200 bg-white p-3"
            >
                <div className="mb-2 px-2 py-1 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {labels[lang].catalog}
                </div>

                <div className="space-y-1">
                    {categoryOrder.map((category) => {
                        const items = registry.filter((item) => item.category === category);
                        if (items.length === 0) return null;

                        const isOpen = openCategories[category];
                        const panelId = `catalog-category-${category}`;

                        return (
                            <div key={category}>
                                <button
                                    type="button"
                                    onClick={() => toggleCategory(category)}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    aria-label={`${isOpen ? labels[lang].collapse : labels[lang].expand} ${labels[lang][category]}`}
                                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-start text-xs font-semibold text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                                >
                                    <span className="flex items-center gap-2">
                                        <span
                                            aria-hidden="true"
                                            className={[
                                                "inline-block text-[10px] transition-transform duration-200",
                                                isOpen
                                                    ? lang === "fa"
                                                        ? "-rotate-90"
                                                        : "rotate-90"
                                                    : "",
                                            ].join(" ")}
                                        >
                                            {lang === "fa" ? "‹" : "›"}
                                        </span>
                                        <span>{labels[lang][category]}</span>
                                    </span>
                                    <span className="text-[10px] font-semibold tabular-nums text-zinc-300">
                                        {String(items.length).padStart(2, "0")}
                                    </span>
                                </button>

                                <div
                                    id={panelId}
                                    hidden={!isOpen}
                                    className="space-y-0.5"
                                >
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
                                                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
                                                ].join(" ")}
                                            >
                                                <span>{item.name[lang]}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={active ? "text-zinc-400" : "text-zinc-300"}
                                                >
                                                    {lang === "fa" ? "←" : "→"}
                                                </span>
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
