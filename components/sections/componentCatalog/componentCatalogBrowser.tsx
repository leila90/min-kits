"use client";

import Link from "next/link";
import {useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories, type ComponentCategory, type ComponentRegistryItem} from "@/components/registry";
import {ComponentCardPreview} from "./previews";

type Props = {
    lang: Lang;
    registry: readonly ComponentRegistryItem[];
    copy: Messages["componentsCatalog"];
};

const meta: Record<ComponentCategory, {en: string; fa: string; mark: string}> = {
    form: {mark: "01", en: "Inputs, fields and controls.", fa: "ورودی‌ها، فیلدها و کنترل‌ها."},
    layout: {mark: "02", en: "Structure, surfaces and composition.", fa: "ساختار، سطوح و ترکیب‌بندی."},
    feedback: {mark: "03", en: "States, alerts and interaction feedback.", fa: "وضعیت‌ها، هشدارها و بازخورد تعامل."},
    navigation: {mark: "04", en: "Ways to move through a product.", fa: "الگوهای حرکت در محصول."},
};

function CollectionMark({category}: {category: ComponentCategory}) {
    const bars: Record<ComponentCategory, string[]> = {
        form: ["w-2/3", "w-full", "w-1/2"],
        layout: ["w-full", "w-1/2", "w-3/4"],
        feedback: ["w-1/2", "w-full", "w-2/3"],
        navigation: ["w-full", "w-3/4", "w-1/3"],
    };
    return (
        <div className="flex h-28 flex-col justify-end gap-2 p-6">
            {bars[category].map((width, index) => (
                <span key={index} className={"block h-px bg-zinc-950 " + width}/>
            ))}
            <span className="mt-2 block h-2 w-2 bg-[#c6922b]"/>
        </div>
    );
}

export default function ComponentCatalogBrowser({lang, registry, copy}: Props) {
    const [selected, setSelected] = useState<ComponentCategory | null>(null);
    const selectedItems = selected ? registry.filter((item) => item.category === selected) : [];

    return (
        <div className={lang === "fa" ? "text-right" : "text-left"}>
            <div className="border-y border-zinc-200 bg-white">
                <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
                    <aside className="border-b border-zinc-200 bg-zinc-950 p-5 text-white lg:border-b-0 lg:border-e lg:p-7">
                        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600">INDEX / 01</p>
                        <h2 className="mt-8 text-2xl font-semibold tracking-[-0.05em]">{lang === "fa" ? "کتابخانه" : "Library"}</h2>
                        <p className="mt-3 text-xs leading-6 text-zinc-500">
                            {lang === "fa" ? "یک دسته را انتخاب کنید و مستقیماً وارد نمونه‌های آن شوید." : "Choose a family and jump directly into its specimens."}
                        </p>
                        <div className="mt-10 border-t border-white/10 pt-5">
                            <p className="font-mono text-3xl tracking-[-0.06em]">{String(registry.length).padStart(2, "0")}</p>
                            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-600">{lang === "fa" ? "کامپوننت" : "components"}</p>
                        </div>
                    </aside>

                    <div className="divide-y divide-zinc-200">
                        {componentCategories.map((category) => {
                            const count = registry.filter((item) => item.category === category).length;
                            const active = selected === category;
                            const info = meta[category];
                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelected(active ? null : category)}
                                    aria-expanded={active}
                                    className="group grid w-full grid-cols-[56px_minmax(0,1fr)_110px_44px] items-center gap-4 p-5 text-start transition-colors hover:bg-[#f8f7f4] md:grid-cols-[72px_minmax(0,1fr)_150px_52px] md:p-7"
                                >
                                    <span className="font-mono text-[10px] text-zinc-300">{info.mark}</span>
                                    <span>
                                        <span className="block text-xl font-semibold tracking-[-0.045em] text-zinc-950 md:text-2xl">{copy.categories[category]}</span>
                                        <span className="mt-1 block text-xs text-zinc-500">{info[lang]}</span>
                                    </span>
                                    <span className="text-end font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">{String(count).padStart(2, "0")} / {lang === "fa" ? "نمونه" : "specimens"}</span>
                                    <span className={"flex h-9 w-9 items-center justify-center border transition-all " + (active ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 text-zinc-400 group-hover:border-zinc-950 group-hover:text-zinc-950")}>{active ? "−" : "↗"}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {selected && (
                <section className="mt-8 overflow-hidden border border-zinc-200 bg-white" aria-label={copy.categories[selected]}>
                    <header className="grid gap-5 border-b border-zinc-200 p-5 md:grid-cols-[1fr_auto] md:items-end md:p-7">
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-400">COLLECTION / {meta[selected].mark}</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em]">{copy.categories[selected]}</h2>
                        </div>
                        <p className="font-mono text-xs text-zinc-400">{selectedItems.length} {lang === "fa" ? "کامپوننت" : "components"}</p>
                    </header>

                    <div className="divide-y divide-zinc-200">
                        {selectedItems.map((component, index) => (
                            <article key={component.slug} className="grid gap-6 p-5 md:grid-cols-[44px_minmax(180px,.7fr)_minmax(280px,1.3fr)_auto] md:items-center md:p-7">
                                <span className="font-mono text-xs text-zinc-300">{String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <h3 className="font-semibold tracking-[-0.025em]">{component.name[lang]}</h3>
                                    <p className="mt-2 text-xs leading-6 text-zinc-500">{component.description[lang]}</p>
                                </div>
                                <div className="min-h-28 overflow-hidden border border-zinc-100 bg-[#f3f1ec] p-4">
                                    <ComponentCardPreview slug={component.slug} copy={copy.demo} dir={lang === "fa" ? "rtl" : "ltr"}/>
                                </div>
                                <Link href={"/" + lang + "/components/" + component.slug} className="whitespace-nowrap text-sm font-semibold underline decoration-zinc-300 underline-offset-8 transition-colors hover:decoration-zinc-950">
                                    {copy.viewComponent} <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {!selected && (
                <div className="mt-8 grid gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
                    {["React", "TypeScript", "Tailwind v4"].map((item, index) => (
                        <div key={item} className="bg-white p-5 md:p-6">
                            <p className="font-mono text-[9px] text-zinc-300">0{index + 1}</p>
                            <p className="mt-5 font-semibold tracking-[-0.02em]">{item}</p>
                            <p className="mt-1 text-xs text-zinc-500">{lang === "fa" ? "ساختار آماده استفاده در پروژه‌های واقعی" : "Built around practical product work."}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
