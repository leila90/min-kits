"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import type {Lang} from "../../../app/i18n";
import type {ComponentCategory, ComponentRegistryItem} from "../../registry/types";
import ComponentCatalogSidebar from "./componentCatalogSidebar";
import {Button, Divider, FormField, Input, Textarea} from "../../ui";

type ComponentCatalogBrowserProps = {
    lang: Lang;
    registry: readonly ComponentRegistryItem[];
    copy: {
        viewComponent: string;
        searchPlaceholder: string;
        allCategories: string;
        noResults: string;
    };
};

const categoryLabels = {
    en: {form: "Form", layout: "Layout", feedback: "Feedback"},
    fa: {form: "فرم", layout: "چیدمان", feedback: "بازخورد"},
} as const;

const categoryOrder: ComponentCategory[] = ["form", "layout", "feedback"];

function CatalogPreview({slug, lang}: {slug: string; lang: Lang}) {
    if (slug === "button") {
        return <Button size="sm" radius="full" tabIndex={-1}>{lang === "fa" ? "ادامه" : "Continue"}</Button>;
    }

    if (slug === "input") {
        return <Input tabIndex={-1} aria-hidden="true" placeholder={lang === "fa" ? "ورودی" : "Input"} />;
    }

    if (slug === "textarea") {
        return <Textarea tabIndex={-1} aria-hidden="true" placeholder={lang === "fa" ? "پیام شما..." : "Your message..."} />;
    }

    if (slug === "form-field") {
        return (
            <FormField label={lang === "fa" ? "نام" : "Name"}>
                <Input tabIndex={-1} aria-hidden="true" />
            </FormField>
        );
    }

    if (slug === "divider") {
        return <Divider variant="gradient" direction={lang === "fa" ? "rtl" : "ltr"} />;
    }

    return null;
}

export default function ComponentCatalogBrowser({
    lang,
    registry,
    copy,
}: ComponentCatalogBrowserProps) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<ComponentCategory | "all">("all");

    const filtered = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase();

        return registry.filter((component) => {
            if (category !== "all" && component.category !== category) return false;
            if (!normalizedQuery) return true;

            return [
                component.slug,
                component.name.en,
                component.name.fa,
                component.description.en,
                component.description.fa,
            ].some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
        });
    }, [category, query, registry]);

    const grouped = useMemo(
        () =>
            categoryOrder
                .map((currentCategory) => ({
                    category: currentCategory,
                    items: filtered.filter((component) => component.category === currentCategory),
                }))
                .filter((group) => group.items.length > 0),
        [filtered],
    );

    return (
        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-12">
            <ComponentCatalogSidebar lang={lang} activeSlug="" registry={registry} />

            <div className="min-w-0">
                <div className="mb-10 grid gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <label className="min-w-0">
                        <span className="sr-only">{copy.searchPlaceholder}</span>
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={copy.searchPlaceholder}
                            className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900"
                        />
                    </label>

                    <div className="flex min-w-0 flex-wrap gap-2" role="group" aria-label={copy.allCategories}>
                        <button
                            type="button"
                            onClick={() => setCategory("all")}
                            aria-pressed={category === "all"}
                            className={[
                                "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                                category === "all"
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-950",
                            ].join(" ")}
                        >
                            {copy.allCategories}
                        </button>

                        {categoryOrder.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setCategory(item)}
                                aria-pressed={category === item}
                                className={[
                                    "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                                    category === item
                                        ? "border-zinc-900 bg-zinc-900 text-white"
                                        : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-950",
                                ].join(" ")}
                            >
                                {categoryLabels[lang][item]}
                            </button>
                        ))}
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-zinc-300 px-6 py-16 text-center text-sm text-zinc-500">
                        {copy.noResults}
                    </div>
                ) : (
                    <div className="space-y-16">
                        {grouped.map(({category: currentCategory, items}) => (
                            <section key={currentCategory} aria-labelledby={`components-${currentCategory}`}>
                                <div className="mb-6 flex items-end justify-between gap-6 border-b border-zinc-200 pb-4">
                                    <h2
                                        id={`components-${currentCategory}`}
                                        className="text-xl font-bold tracking-tight text-zinc-900"
                                    >
                                        {categoryLabels[lang][currentCategory]}
                                    </h2>
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                        {String(items.length).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                                    {items.map((component) => (
                                        <Link
                                            key={component.slug}
                                            href={`/${lang}/components/${component.slug}`}
                                            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_18px_45px_rgb(0_0_0_/0.07)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
                                        >
                                            <div className="mb-10 flex items-center justify-between gap-4">
                                                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
                                                    {categoryLabels[lang][component.category]}
                                                </span>
                                                <span className="text-xs font-medium text-zinc-400">{component.slug}</span>
                                            </div>

                                            <div className="mb-6 flex min-h-28 items-center justify-center rounded-xl bg-zinc-50 p-6">
                                                <div className="w-full max-w-48">
                                                    <CatalogPreview slug={component.slug} lang={lang} />
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold tracking-tight text-zinc-900">{component.name[lang]}</h3>
                                            <p className="mt-2 text-sm leading-6 text-zinc-600">{component.description[lang]}</p>

                                            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                                                {copy.viewComponent}
                                                <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
