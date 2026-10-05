"use client";

import {useState} from "react";
import Link from "next/link";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories, type ComponentCategory, type ComponentRegistryItem} from "@/components/registry";
import {ComponentCardPreview} from "./previews";

type ComponentCatalogBrowserProps = {
    lang: Lang;
    registry: readonly ComponentRegistryItem[];
    copy: Messages["componentsCatalog"];
};

const categoryMeta: Record<
    ComponentCategory,
    {en: {index: string; description: string}; fa: {index: string; description: string}}
> = {
    form: {
        en: {index: "01", description: "Inputs, fields and controls for clear, reliable product flows."},
        fa: {index: "۰۱", description: "ورودی‌ها، فیلدها و کنترل‌های دقیق برای جریان‌های واقعی محصول."},
    },
    layout: {
        en: {index: "02", description: "Structural primitives for rhythm, spacing and reusable page composition."},
        fa: {index: "۰۲", description: "الگوهای ساختاری برای فاصله‌گذاری، ریتم و ترکیب دوباره صفحات."},
    },
    feedback: {
        en: {index: "03", description: "States and messages that make product interactions understandable."},
        fa: {index: "۰۳", description: "وضعیت‌ها و پیام‌هایی برای تجربه‌ای واضح‌تر و قابل فهم‌تر."},
    },
    navigation: {
        en: {index: "04", description: "Navigation patterns for moving through interfaces with confidence."},
        fa: {index: "۰۴", description: "الگوهای ناوبری برای حرکت شفاف و مطمئن در رابط کاربری."},
    },
};

const categoryMarks: Record<ComponentCategory, string> = {
    form: "F",
    layout: "L",
    feedback: "↗",
    navigation: "N",
};

export default function ComponentCatalogBrowser({
    lang,
    registry,
    copy,
}: ComponentCatalogBrowserProps) {
    const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | null>(null);

    const selectedItems = selectedCategory
        ? registry.filter((component) => component.category === selectedCategory)
        : [];

    const selectedLabel = selectedCategory ? copy.categories[selectedCategory] : "";

    return (
        <div className="space-y-16 md:space-y-24">
            <section aria-labelledby="component-categories-heading">
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-zinc-200 pb-5">
                    <div>
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400">
                            {lang === "fa" ? "کتابخانه / دسته‌بندی" : "Library / Categories"}
                        </p>
                        <h2
                            id="component-categories-heading"
                            className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-3xl"
                        >
                            {lang === "fa" ? "از الگو شروع کنید." : "Start with a pattern."}
                        </h2>
                    </div>
                    <span className="hidden text-xs font-medium tabular-nums text-zinc-400 sm:block">
                        {String(componentCategories.length).padStart(2, "0")} {lang === "fa" ? "دسته" : "categories"}
                    </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {componentCategories.map((category) => {
                        const count = registry.filter((item) => item.category === category).length;
                        const active = selectedCategory === category;
                        const meta = categoryMeta[category][lang];

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setSelectedCategory(active ? null : category)}
                                aria-expanded={active}
                                className={[
                                    "group relative min-h-56 overflow-hidden border p-6 text-start transition-all duration-300 md:p-8",
                                    active
                                        ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_24px_70px_rgb(0_0_0_/0.16)]"
                                        : "border-zinc-200 bg-white text-zinc-950 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_24px_70px_rgb(0_0_0_/0.08)]",
                                ].join(" ")}
                            >
                                <span
                                    aria-hidden="true"
                                    className={[
                                        "absolute -end-8 -top-10 select-none text-[180px] font-black leading-none tracking-[-0.12em] transition-transform duration-500 group-hover:scale-105",
                                        active ? "text-white/[0.045]" : "text-zinc-950/[0.035]",
                                    ].join(" ")}
                                >
                                    {categoryMarks[category]}
                                </span>

                                <div className="relative flex h-full min-h-40 flex-col justify-between">
                                    <div className="flex items-start justify-between gap-6">
                                        <span
                                            className={[
                                                "text-[10px] font-bold tracking-[0.22em]",
                                                active ? "text-zinc-500" : "text-zinc-400",
                                            ].join(" ")}
                                        >
                                            {meta.index}
                                        </span>
                                        <span
                                            className={[
                                                "border px-2.5 py-1 text-[10px] font-semibold tabular-nums",
                                                active ? "border-white/15 text-zinc-300" : "border-zinc-200 text-zinc-500",
                                            ].join(" ")}
                                        >
                                            {String(count).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold tracking-[-0.04em]">{copy.categories[category]}</h3>
                                        <p
                                            className={[
                                                "mt-3 max-w-md text-sm leading-6",
                                                active ? "text-zinc-400" : "text-zinc-500",
                                            ].join(" ")}
                                        >
                                            {meta.description}
                                        </p>
                                    </div>

                                    <div className="mt-7 flex items-center justify-between border-t border-current/10 pt-4 text-xs font-semibold">
                                        <span>{active ? (lang === "fa" ? "بستن دسته" : "Close category") : (lang === "fa" ? "مشاهده کامپوننت‌ها" : "Explore components")}</span>
                                        <span aria-hidden="true" className="text-base">
                                            {lang === "fa" ? "←" : "→"}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {selectedCategory && (
                <section
                    aria-labelledby="selected-component-category"
                    className="scroll-mt-32 border-t border-zinc-200 pt-10 md:pt-14"
                >
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
                        <div>
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                                {lang === "fa" ? "دسته انتخاب‌شده" : "Selected category"}
                            </p>
                            <h2
                                id="selected-component-category"
                                className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950"
                            >
                                {selectedLabel}
                            </h2>
                        </div>
                        <span className="text-xs font-semibold tabular-nums text-zinc-400">
                            {String(selectedItems.length).padStart(2, "0")} {lang === "fa" ? "کامپوننت" : "components"}
                        </span>
                    </div>

                    <div className="divide-y divide-zinc-200 border-y border-zinc-200">
                        {selectedItems.map((component, index) => (
                            <article
                                key={component.slug}
                                className="grid gap-7 py-7 md:grid-cols-[56px_minmax(220px,0.8fr)_minmax(260px,1fr)_auto] md:items-center md:gap-8"
                            >
                                <span className="text-xs font-semibold tabular-nums text-zinc-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div>
                                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-950">
                                        {component.name[lang]}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                                        {component.description[lang]}
                                    </p>
                                </div>

                                <div className="flex min-h-24 items-center justify-center border border-zinc-100 bg-zinc-50 p-5">
                                    <div className="w-full max-w-52">
                                        <ComponentCardPreview
                                            slug={component.slug}
                                            copy={copy.demo}
                                            dir={lang === "fa" ? "rtl" : "ltr"}
                                        />
                                    </div>
                                </div>

                                <Link
                                    href={`/${lang}/components/${component.slug}`}
                                    className="inline-flex items-center justify-between gap-4 border-b border-zinc-900 pb-1 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
                                >
                                    {copy.viewComponent}
                                    <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
