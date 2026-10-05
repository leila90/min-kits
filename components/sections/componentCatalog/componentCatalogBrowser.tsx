"use client";

import {useState} from "react";
import Link from "next/link";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories, type ComponentCategory, type ComponentRegistryItem} from "@/components/registry";
import {ComponentCardPreview} from "./previews";

type Props = {lang: Lang; registry: readonly ComponentRegistryItem[]; copy: Messages["componentsCatalog"]};

const meta: Record<ComponentCategory, {en: string; fa: string; mark: string}> = {
    form: {mark: "01", en: "Inputs, fields and controls for product flows.", fa: "ورودی‌ها، فیلدها و کنترل‌های موردنیاز جریان‌های محصول."},
    layout: {mark: "02", en: "Structural pieces for clean, reusable composition.", fa: "الگوهای ساختاری برای ترکیب تمیز و قابل استفاده مجدد."},
    feedback: {mark: "03", en: "States and messages for clearer interactions.", fa: "وضعیت‌ها و پیام‌ها برای تعاملات واضح‌تر."},
    navigation: {mark: "04", en: "Navigation patterns for confident product journeys.", fa: "الگوهای ناوبری برای مسیرهای مطمئن در محصول."},
};

function CollectionPreview({category}: {category: ComponentCategory}) {
    const variants: Record<ComponentCategory, React.ReactNode> = {
        form: <div className="grid h-full grid-cols-2 gap-2 p-5"><div className="space-y-2"><span className="block h-2 w-16 bg-zinc-900"/><span className="block h-7 border border-zinc-200 bg-white"/><span className="block h-7 border border-zinc-200 bg-white"/></div><div className="mt-5 space-y-2"><span className="block h-9 bg-zinc-950"/><span className="block h-9 border border-zinc-200"/></div></div>,
        layout: <div className="grid h-full grid-cols-3 gap-2 p-5"><span className="col-span-2 bg-white"/><span className="bg-zinc-900"/><span className="bg-zinc-100"/><span className="bg-white"/><span className="bg-zinc-200"/></div>,
        feedback: <div className="flex h-full items-center justify-center p-5"><div className="w-full border border-zinc-200 bg-white p-4"><span className="block h-2 w-20 bg-zinc-900"/><span className="mt-3 block h-1 w-full bg-zinc-200"/><div className="mt-5 flex justify-end gap-2"><span className="h-7 w-16 bg-zinc-950"/><span className="h-7 w-12 border border-zinc-200"/></div></div></div>,
        navigation: <div className="flex h-full items-center gap-4 bg-white p-5"><span className="h-full w-12 bg-zinc-950"/><div className="flex flex-1 flex-col gap-3"><span className="h-2 w-20 bg-zinc-900"/><span className="h-10 w-full border border-zinc-200"/><span className="h-10 w-3/4 border border-zinc-200"/></div></div>,
    };
    return <div className="h-full overflow-hidden bg-[#ebe8e1]">{variants[category]}</div>;
}

export default function ComponentCatalogBrowser({lang, registry, copy}: Props) {
    const [selected, setSelected] = useState<ComponentCategory | null>(null);
    const selectedItems = selected ? registry.filter((item) => item.category === selected) : [];
    return (
        <div className={lang === "fa" ? "text-right" : "text-left"}>
            <div className="mb-5 flex items-end justify-between border-b border-zinc-200 pb-4">
                <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">MinKits / Collections</p>
                    <p className="mt-2 text-sm text-zinc-500">{lang === "fa" ? "کتابخانه را بر اساس نوع کامپوننت مرور کنید." : "Browse the library by component collection."}</p>
                </div>
                <span className="hidden font-mono text-[10px] text-zinc-400 sm:block">{String(registry.length).padStart(2,"0")} components</span>
            </div>

            <div className="grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-2">
                {componentCategories.map((category) => {
                    const count = registry.filter((item) => item.category === category).length;
                    const active = selected === category;
                    const info = meta[category];
                    return (
                        <button key={category} type="button" onClick={() => setSelected(active ? null : category)} aria-expanded={active}
                            className={"group text-start bg-white transition-all duration-300 hover:bg-[#fcfbf8] " + (active ? "ring-1 ring-inset ring-zinc-950" : "")}>
                            <div className="aspect-[1.7] overflow-hidden border-b border-zinc-200"><CollectionPreview category={category}/></div>
                            <div className="p-5 md:p-6">
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <p className="font-mono text-[9px] font-semibold tracking-[0.18em] text-zinc-400">{info.mark} / COLLECTION</p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-950">{copy.categories[category]}</h2>
                                        <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">{info[lang]}</p>
                                    </div>
                                    <span className={"flex h-9 w-9 shrink-0 items-center justify-center border text-sm transition-all " + (active ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 text-zinc-400 group-hover:border-zinc-950 group-hover:text-zinc-950")}>{active ? "−" : "↗"}</span>
                                </div>
                                <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-4">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">{String(count).padStart(2,"0")} {lang === "fa" ? "کامپوننت" : "components"}</span>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">{active ? (lang === "fa" ? "بستن" : "Close") : (lang === "fa" ? "مرور" : "Browse")} →</span>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {selected && (
                <section className="mt-10 border border-zinc-200 bg-white" aria-label={copy.categories[selected]}>
                    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200 p-5 md:p-7">
                        <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Collection / {meta[selected].mark}</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">{copy.categories[selected]}</h2></div>
                        <span className="font-mono text-xs text-zinc-400">{selectedItems.length} components</span>
                    </div>
                    <div className="divide-y divide-zinc-200">
                        {selectedItems.map((component, index) => (
                            <article key={component.slug} className="grid gap-5 p-5 md:grid-cols-[42px_minmax(180px,.7fr)_minmax(240px,1fr)_auto] md:items-center md:p-7">
                                <span className="font-mono text-xs text-zinc-300">{String(index + 1).padStart(2,"0")}</span>
                                <div><h3 className="font-semibold tracking-[-0.025em]">{component.name[lang]}</h3><p className="mt-1 text-xs leading-5 text-zinc-500">{component.description[lang]}</p></div>
                                <div className="flex min-h-24 items-center justify-center border border-zinc-100 bg-[#f3f1ec] p-4"><div className="w-full max-w-56"><ComponentCardPreview slug={component.slug} copy={copy.demo} dir={lang === "fa" ? "rtl" : "ltr"}/></div></div>
                                <Link href={"/" + lang + "/components/" + component.slug} className="text-sm font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-8 hover:decoration-zinc-950">{copy.viewComponent} <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span></Link>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
