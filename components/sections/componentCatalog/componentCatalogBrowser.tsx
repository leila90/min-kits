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

const categoryMeta: Record<ComponentCategory, {en: {index: string; description: string}; fa: {index: string; description: string}}> = {
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

export default function ComponentCatalogBrowser({lang, registry, copy}: ComponentCatalogBrowserProps) {
    const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | null>(null);
    const selectedItems = selectedCategory ? registry.filter((component) => component.category === selectedCategory) : [];
    const selectedLabel = selectedCategory ? copy.categories[selectedCategory] : "";

    return (
        <div className={lang === "fa" ? "text-right" : "text-left"}>
            <section aria-labelledby="component-categories-heading">
                <div className="divide-y divide-zinc-200 border-y border-zinc-200">
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
                                    "group relative block w-full overflow-hidden px-1 py-7 text-start transition-all duration-300 md:py-9",
                                    active ? "bg-zinc-950 text-white" : "bg-transparent text-zinc-950 hover:bg-white",
                                ].join(" ")}
                            >
                                <span
                                    aria-hidden="true"
                                    className={[
                                        "pointer-events-none absolute end-0 top-1/2 -translate-y-1/2 select-none text-[150px] font-black leading-none tracking-[-0.14em] transition-all duration-500 md:text-[190px]",
                                        active ? "text-white/[0.045] group-hover:text-[#c6922b]/[0.08]" : "text-zinc-950/[0.025] group-hover:text-[#c6922b]/[0.07]",
                                    ].join(" ")}
                                >
                                    {categoryMarks[category]}
                                </span>

                                <div className="relative grid gap-5 md:grid-cols-[72px_minmax(220px,0.7fr)_minmax(260px,1fr)_auto] md:items-center md:gap-8">
                                    <span className={`font-mono text-xs font-semibold tabular-nums ${active ? "text-zinc-500" : "text-zinc-300"}`}>
                                        {meta.index}
                                    </span>

                                    <div>
                                        <h2 id={category === componentCategories[0] ? "component-categories-heading" : undefined} className="text-2xl font-semibold tracking-[-0.045em] md:text-3xl">
                                            {copy.categories[category]}
                                        </h2>
                                        <p className={`mt-2 max-w-md text-sm leading-6 ${active ? "text-zinc-400" : "text-zinc-500"}`}>
                                            {meta.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 md:justify-self-end">
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${active ? "text-zinc-500" : "text-zinc-400"}`}>
                                            {String(count).padStart(2, "0")} {lang === "fa" ? "کامپوننت" : "components"}
                                        </span>
                                        <span className={`flex h-9 w-9 items-center justify-center border text-sm transition-all duration-300 ${active ? "border-white/15 text-white" : "border-zinc-200 text-zinc-400 group-hover:border-zinc-950 group-hover:text-zinc-950"}`} aria-hidden="true">
                                            {active ? "−" : lang === "fa" ? "←" : "→"}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {selectedCategory && (
                <section aria-labelledby="selected-component-category" className="mt-12 border border-zinc-200 bg-white p-5 shadow-[0_24px_70px_rgba(24,24,27,0.06)] md:p-8">
                    <div className="mb-7 flex flex-wrap items-end justify-between gap-5 border-b border-zinc-200 pb-5">
                        <div>
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                                {lang === "fa" ? "کتابخانه / دسته انتخاب‌شده" : "Library / Selected category"}
                            </p>
                            <h2 id="selected-component-category" className="text-3xl font-semibold tracking-[-0.05em] text-zinc-950">
                                {selectedLabel}
                            </h2>
                        </div>
                        <span className="text-xs font-semibold tabular-nums text-zinc-400">
                            {String(selectedItems.length).padStart(2, "0")} {lang === "fa" ? "کامپوننت" : "components"}
                        </span>
                    </div>

                    <div className="divide-y divide-zinc-200">
                        {selectedItems.map((component, index) => (
                            <article key={component.slug} className="grid gap-6 py-6 md:grid-cols-[48px_minmax(190px,0.75fr)_minmax(250px,1fr)_auto] md:items-center md:gap-8">
                                <span className="font-mono text-xs font-semibold tabular-nums text-zinc-300">{String(index + 1).padStart(2, "0")}</span>

                                <div>
                                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-zinc-950">{component.name[lang]}</h3>
                                    <p className="mt-2 text-sm leading-6 text-zinc-500">{component.description[lang]}</p>
                                </div>

                                <div className="flex min-h-28 items-center justify-center border border-zinc-100 bg-[#f3f1ec] p-5">
                                    <div className="w-full max-w-56">
                                        <ComponentCardPreview slug={component.slug} copy={copy.demo} dir={lang === "fa" ? "rtl" : "ltr"} />
                                    </div>
                                </div>

                                <Link
                                    href={`/${lang}/components/${component.slug}`}
                                    className="inline-flex items-center justify-between gap-4 border-b border-zinc-950 pb-1 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
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
