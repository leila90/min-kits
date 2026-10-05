"use client";

import Link from "next/link";
import {useMemo, useState} from "react";
import type {ComponentPack} from "@/content/componentPacks";

type Block = {
    title: string;
    description: string;
    tag: string;
    number: string;
};

type Props = {
    lang: "en" | "fa";
    packs: ComponentPack[];
    blocks: Block[];
    categories: string[];
    searchPlaceholder: string;
    allLabel: string;
    resultsLabel: string;
    noResults: string;
    viewPack: string;
    featuredLabel: string;
};

function BlockVisual({index}: {index: number}) {
    const variants = [
        <div className="h-full bg-[#f0eee9] p-4">
            <div className="flex h-full overflow-hidden border border-zinc-200 bg-white shadow-sm">
                <div className="flex w-[44%] flex-col justify-center p-4">
                    <span className="h-1.5 w-16 bg-zinc-900" />
                    <span className="mt-2 h-1 w-24 bg-zinc-300" />
                    <span className="mt-4 h-5 w-14 bg-zinc-900" />
                </div>
                <div className="m-3 flex-1 border border-zinc-200 bg-zinc-100" />
            </div>
        </div>,
        <div className="h-full bg-[#f0eee9] p-4">
            <div className="flex h-full flex-col items-center justify-center border border-zinc-200 bg-white px-5 shadow-sm">
                <span className="h-1.5 w-20 bg-zinc-900" />
                <span className="mt-2 h-1 w-28 bg-zinc-300" />
                <div className="mt-5 grid w-full grid-cols-3 gap-2">
                    {[1,2,3].map((item) => <span key={item} className="h-12 border border-zinc-200 bg-zinc-50" />)}
                </div>
            </div>
        </div>,
        <div className="h-full bg-zinc-950 p-4">
            <div className="flex h-full flex-col justify-center">
                <span className="h-1.5 w-20 bg-white/90" />
                <span className="mt-2 h-1 w-28 bg-white/25" />
                <div className="mt-5 flex gap-2">
                    <span className="h-7 w-16 bg-white" />
                    <span className="h-7 w-16 border border-white/20" />
                </div>
            </div>
        </div>,
        <div className="h-full bg-[#f0eee9] p-4">
            <div className="h-full border border-zinc-200 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                    <span className="h-1.5 w-14 bg-zinc-900" />
                    <span className="h-1.5 w-8 bg-zinc-300" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-4">
                    {[1,2,3].map((item) => <span key={item} className="h-14 border border-zinc-200 bg-zinc-50" />)}
                </div>
            </div>
        </div>,
        <div className="h-full bg-[#f0eee9] p-4">
            <div className="flex h-full gap-3 border border-zinc-200 bg-white p-3 shadow-sm">
                <div className="w-12 border border-zinc-200 bg-zinc-900" />
                <div className="flex flex-1 flex-col justify-center">
                    <span className="h-1.5 w-20 bg-zinc-900" />
                    <span className="mt-2 h-1 w-16 bg-zinc-300" />
                    <span className="mt-4 h-12 border border-zinc-200 bg-zinc-50" />
                </div>
            </div>
        </div>,
        <div className="h-full bg-[#f0eee9] p-4">
            <div className="h-full border border-zinc-200 bg-white shadow-sm">
                <div className="grid grid-cols-4 gap-2 border-b border-zinc-200 p-3">
                    {[1,2,3,4].map((item) => <span key={item} className="h-1.5 bg-zinc-300" />)}
                </div>
                {[1,2,3].map((row) => (
                    <div key={row} className="grid grid-cols-4 gap-2 border-b border-zinc-100 p-3">
                        {[1,2,3,4].map((item) => <span key={item} className="h-1.5 bg-zinc-200" />)}
                    </div>
                ))}
            </div>
        </div>
    ];
    return <div className="h-full overflow-hidden">{variants[index % variants.length]}</div>;
}

export default function ComponentPacksExplorer({
    lang,
    packs,
    blocks,
    categories,
    searchPlaceholder,
    allLabel,
    resultsLabel,
    noResults,
    viewPack,
    featuredLabel,
}: Props) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(allLabel);

    const filteredBlocks = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        return blocks.filter((block) => {
            const matchesCategory = category === allLabel || block.tag === category;
            const haystack = (block.title + " " + block.description + " " + block.tag).toLowerCase();
            return matchesCategory && (!normalized || haystack.includes(normalized));
        });
    }, [allLabel, blocks, category, query]);

    const featured = packs[0];

    return (
        <div className={lang === "fa" ? "text-right" : "text-left"}>
            <div className="overflow-hidden border border-zinc-200 bg-white/75 shadow-[0_18px_50px_rgba(24,24,27,0.055)] backdrop-blur-xl">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)]">
                    <div className="flex min-h-16 items-center gap-4 border-b border-zinc-200 px-5 md:px-7 lg:border-b-0 lg:border-e">
                        <label className="flex min-w-0 flex-1 items-center gap-3">
                            <span className="text-lg leading-none text-zinc-400" aria-hidden="true">⌕</span>
                            <span className="sr-only">{searchPlaceholder}</span>
                            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={searchPlaceholder} className="min-w-0 w-full bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400" />
                        </label>
                        {query && <button type="button" onClick={() => setQuery("")} className="shrink-0 border border-zinc-200 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-950">{lang === "fa" ? "پاک کردن" : "Clear"}</button>}
                    </div>
                    <div className="flex min-h-16 items-center gap-2 overflow-x-auto px-5 py-3 md:px-7">
                        <span className="me-1 shrink-0 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">{lang === "fa" ? "دسته‌بندی" : "Category"}</span>
                        {[allLabel, ...categories].map((item) => {
                            const active = category === item;
                            return (
                                <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={active} className={"shrink-0 border px-3.5 py-2 text-xs font-semibold transition-all duration-200 " + (active ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_8px_20px_rgba(24,24,27,0.14)]" : "border-zinc-200 bg-white/70 text-zinc-500 hover:-translate-y-px hover:border-zinc-400 hover:bg-white hover:text-zinc-950")}>
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-200 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                <span>{resultsLabel}: {filteredBlocks.length.toString().padStart(2, "0")}</span>
                <span>{featured.stats.map((stat) => stat.value).join(" · ")}</span>
            </div>

            {filteredBlocks.length > 0 ? (
                <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredBlocks.map((block, index) => (
                        <article key={block.number} className="group overflow-hidden border border-zinc-200/80 bg-white/70 shadow-[0_14px_40px_rgba(24,24,27,0.045)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white/85 hover:shadow-[0_24px_60px_rgba(24,24,27,0.09)]">
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200/80">
                                <BlockVisual index={index} />
                                <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.16em]">
                                    <span className="border border-white/70 bg-white/60 px-2.5 py-1.5 text-zinc-500 shadow-sm backdrop-blur-xl">{block.tag}</span>
                                    <span className="border border-white/60 bg-zinc-950/90 px-2.5 py-1.5 text-white">{block.number}</span>
                                </div>
                            </div>
                            <Link href={"/" + lang + "/components/component-packs/" + featured.slug} className="block p-5 md:p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-base font-semibold tracking-[-0.03em] transition-colors group-hover:text-zinc-600">{block.title}</h3>
                                        <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-zinc-500">{block.description}</p>
                                    </div>
                                    <span className="text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-950" aria-hidden="true">↗</span>
                                </div>
                                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                                    <span>{block.tag}</span>
                                    <span>View source →</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="border-b border-zinc-200 py-20 text-center text-sm text-zinc-500">{noResults}</div>
            )}

            <article className="grid overflow-hidden border border-zinc-200 bg-zinc-950 text-white lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-72 overflow-hidden border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-e">
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute -end-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                        <div className="absolute end-10 top-10 h-44 w-44 rounded-full border border-white/10" />
                    </div>
                    <div className="relative flex h-full flex-col justify-between">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">{featured.category}</p>
                            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.045em] md:text-5xl">{featured.name}</h3>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{featured.description}</p>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-2">
                            {featured.includes.slice(0, 6).map((item) => <span key={item} className="border border-white/10 px-3 py-1.5 text-[10px] font-medium text-zinc-400">{item}</span>)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-7 md:p-10">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">{featuredLabel}</p>
                        <p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{featured.price}</p>
                        <div className="mt-7 space-y-3 border-y border-white/10 py-5">
                            {featured.features.slice(0, 4).map((feature) => <div key={feature} className="flex gap-3 text-sm text-zinc-300"><span className="text-zinc-600">+</span><span>{feature}</span></div>)}
                        </div>
                    </div>
                    <Link href={"/" + lang + "/components/component-packs/" + featured.slug} className="mt-8 inline-flex items-center justify-between gap-8 bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">
                        {viewPack}<span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                    </Link>
                </div>
            </article>
        </div>
    );
}
