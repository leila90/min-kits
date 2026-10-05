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
        <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-3 p-6"><div className="flex flex-col justify-center gap-3"><span className="h-2 w-20 bg-zinc-900/80" /><span className="h-2 w-32 bg-zinc-400/60" /><span className="mt-2 h-7 w-20 bg-zinc-900" /></div><div className="border border-zinc-300 bg-white shadow-sm" /></div>,
        <div className="flex h-full flex-col justify-center gap-5 p-8"><span className="mx-auto h-2 w-24 bg-zinc-900/80" /><span className="mx-auto h-2 w-40 bg-zinc-400/60" /><div className="grid grid-cols-3 gap-3 pt-2"><i className="h-14 border border-zinc-300 bg-white" /><i className="h-14 border border-zinc-300 bg-white" /><i className="h-14 border border-zinc-300 bg-white" /></div></div>,
        <div className="grid h-full grid-cols-3 items-end gap-3 p-6"><i className="h-20 border border-zinc-300 bg-white" /><i className="h-28 border-2 border-zinc-900 bg-white shadow-sm" /><i className="h-24 border border-zinc-300 bg-white" /></div>,
        <div className="flex h-full items-center justify-center p-6"><div className="w-full border border-zinc-300 bg-white p-4 shadow-sm"><div className="flex gap-2 border-b border-zinc-200 pb-3"><i className="h-2 w-16 bg-zinc-900/70" /><i className="h-2 w-10 bg-zinc-300" /></div><div className="grid grid-cols-3 gap-2 pt-4"><i className="h-16 bg-zinc-100" /><i className="h-16 bg-zinc-100" /><i className="h-16 bg-zinc-100" /></div></div></div>,
        <div className="flex h-full gap-4 p-6"><div className="w-16 border border-zinc-300 bg-zinc-900/90" /><div className="flex flex-1 flex-col gap-3 pt-2"><i className="h-2 w-28 bg-zinc-900/70" /><i className="h-2 w-20 bg-zinc-300" /><i className="mt-4 h-20 border border-zinc-300 bg-white" /></div></div>,
        <div className="h-full p-6"><div className="border border-zinc-300 bg-white"><div className="grid grid-cols-4 border-b border-zinc-200 p-3"><i className="h-2 bg-zinc-300" /><i className="h-2 bg-zinc-300" /><i className="h-2 bg-zinc-300" /><i className="h-2 bg-zinc-900/70" /></div>{[1, 2, 3].map((row) => <div key={row} className="grid grid-cols-4 gap-3 border-b border-zinc-100 p-3"><i className="h-2 bg-zinc-200" /><i className="h-2 bg-zinc-200" /><i className="h-2 bg-zinc-200" /><i className="h-2 bg-zinc-300" /></div>)}</div></div>
    ];

    return <div className="h-full overflow-hidden bg-[#eeece7]">{variants[index % variants.length]}</div>;
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
            <div className="border-y border-zinc-200 bg-white">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_auto]">
                    <label className="flex min-h-16 items-center gap-4 border-b border-zinc-200 px-5 md:px-7 lg:border-b-0 lg:border-e">
                        <span className="text-zinc-400" aria-hidden="true">⌕</span>
                        <span className="sr-only">{searchPlaceholder}</span>
                        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={searchPlaceholder} className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400" />
                        {query && <button type="button" onClick={() => setQuery("")} className="text-xs font-semibold text-zinc-400 hover:text-zinc-950">Esc</button>}
                    </label>
                    <div className="flex min-h-16 items-center gap-2 overflow-x-auto px-5 md:px-7">
                        {[allLabel, ...categories].map((item) => {
                            const active = category === item;
                            return (
                                <button key={item} type="button" onClick={() => setCategory(item)} className={"shrink-0 border px-3.5 py-2 text-xs font-semibold transition-colors " + (active ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-400 hover:text-zinc-950")}>
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
                <div className="grid gap-5 py-6 md:grid-cols-2">
                    {filteredBlocks.map((block, index) => (
                        <article key={block.number} className="group overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-[0_24px_60px_rgb(0_0_0_/0.07)]">
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200">
                                <BlockVisual index={index} />
                                <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.16em]">
                                    <span className="bg-white/90 px-2.5 py-1.5 text-zinc-500 backdrop-blur">{block.tag}</span>
                                    <span className="border border-white/60 bg-zinc-950/90 px-2.5 py-1.5 text-white">{block.number}</span>
                                </div>
                            </div>
                            <div className="p-6 md:p-7">
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-[-0.035em]">{block.title}</h3>
                                        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">{block.description}</p>
                                    </div>
                                    <span className="hidden text-zinc-300 transition-colors group-hover:text-zinc-950 sm:block">↗</span>
                                </div>
                                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                                    <span>{featuredLabel}</span>
                                    <span>React / Tailwind</span>
                                </div>
                            </div>
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
