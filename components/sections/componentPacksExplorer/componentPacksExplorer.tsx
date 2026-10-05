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
        <div key="split" className="h-full bg-[#ebe8e1] p-4">
            <div className="grid h-full grid-cols-[1fr_0.82fr] overflow-hidden border border-zinc-200 bg-white">
                <div className="flex flex-col justify-center p-5">
                    <span className="h-1.5 w-20 bg-zinc-950" />
                    <span className="mt-2 h-1 w-28 bg-zinc-300" />
                    <div className="mt-5 flex gap-2"><span className="h-7 w-16 bg-zinc-950" /><span className="h-7 w-12 border border-zinc-200" /></div>
                </div>
                <div className="m-3 bg-zinc-100" />
            </div>
        </div>,
        <div key="center" className="h-full bg-[#ebe8e1] p-4">
            <div className="flex h-full flex-col items-center justify-center border border-zinc-200 bg-white px-7">
                <span className="h-1.5 w-24 bg-zinc-950" />
                <span className="mt-2 h-1 w-32 bg-zinc-300" />
                <div className="mt-6 grid w-full grid-cols-3 gap-2">
                    {[1,2,3].map((item) => <span key={item} className="h-16 border border-zinc-200 bg-zinc-50" />)}
                </div>
            </div>
        </div>,
        <div key="dark" className="h-full bg-zinc-950 p-5">
            <div className="flex h-full flex-col justify-center">
                <span className="h-1.5 w-24 bg-white" />
                <span className="mt-2 h-1 w-32 bg-white/20" />
                <div className="mt-6 flex gap-2"><span className="h-8 w-20 bg-white" /><span className="h-8 w-20 border border-white/20" /></div>
            </div>
        </div>,
        <div key="minimal" className="h-full bg-[#ebe8e1] p-4">
            <div className="h-full border border-zinc-200 bg-white p-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3"><span className="h-1.5 w-16 bg-zinc-950" /><span className="h-1.5 w-9 bg-zinc-300" /></div>
                <div className="grid grid-cols-3 gap-2 pt-5">{[1,2,3].map((item) => <span key={item} className="h-16 border border-zinc-200 bg-zinc-50" />)}</div>
            </div>
        </div>,
        <div key="sidebar" className="h-full bg-[#ebe8e1] p-4">
            <div className="flex h-full gap-3 border border-zinc-200 bg-white p-3"><div className="w-12 bg-zinc-950" /><div className="flex flex-1 flex-col justify-center"><span className="h-1.5 w-24 bg-zinc-950" /><span className="mt-2 h-1 w-16 bg-zinc-300" /><span className="mt-5 h-14 border border-zinc-200 bg-zinc-50" /></div></div>
        </div>,
        <div key="table" className="h-full bg-[#ebe8e1] p-4">
            <div className="h-full border border-zinc-200 bg-white"><div className="grid grid-cols-4 gap-2 border-b border-zinc-200 p-3">{[1,2,3,4].map((item) => <span key={item} className="h-1.5 bg-zinc-300" />)}</div>{[1,2,3].map((row) => <div key={row} className="grid grid-cols-4 gap-2 border-b border-zinc-100 p-3">{[1,2,3,4].map((item) => <span key={item} className="h-1.5 bg-zinc-200" />)}</div>)}</div>
        </div>,
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
            <div className="mb-10">
                <div className="mb-5 flex items-end justify-between border-b border-zinc-200 pb-4">
                    <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">MinKits / Collections</p>
                        <p className="mt-2 text-sm text-zinc-500">{lang === "fa" ? "بلاک‌ها را بر اساس کاربرد مرور کنید." : "Explore organized collections of production-ready blocks."}</p>
                    </div>
                    <span className="hidden font-mono text-[10px] text-zinc-400 sm:block">{blocks.length} blocks</span>
                </div>
                <div className="grid gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                    {[allLabel, ...categories].map((item, index) => {
                        const count = item === allLabel ? blocks.length : blocks.filter((block) => block.tag === item).length;
                        const active = category === item;
                        return (
                            <button key={item} type="button" onClick={() => setCategory(item)} className={"group bg-white p-5 text-start transition-colors hover:bg-[#fcfbf8] md:p-6 " + (active ? "ring-1 ring-inset ring-zinc-950" : "")}>
                                <div className="flex items-start justify-between gap-4">
                                    <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-zinc-400">{String(index + 1).padStart(2, "0")} / COLLECTION</span>
                                    <span className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 transition-colors group-hover:border-zinc-950 group-hover:text-zinc-950">{active ? "−" : "↗"}</span>
                                </div>
                                <h3 className="mt-8 text-xl font-semibold tracking-[-0.04em]">{item}</h3>
                                <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-3">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">{String(count).padStart(2, "0")} blocks</span>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">{active ? "Selected" : "Browse"} →</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="border-y border-zinc-200 bg-white">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)]">
                    <div className="border-b border-zinc-200 p-4 md:p-5 lg:border-b-0 lg:border-e">
                        <label className="flex min-h-14 items-center gap-3 border border-zinc-200 bg-[#f8f7f4] px-4 transition-all focus-within:border-zinc-950 focus-within:shadow-[0_10px_30px_rgba(24,24,27,0.06)]">
                            <span className="text-base text-zinc-400" aria-hidden="true">⌕</span>
                            <span className="sr-only">{searchPlaceholder}</span>
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder={searchPlaceholder}
                                className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    aria-label={lang === "fa" ? "پاک کردن جستجو" : "Clear search"}
                                    className="flex h-7 w-7 items-center justify-center border border-zinc-200 text-xs text-zinc-400 transition-colors hover:border-zinc-950 hover:text-zinc-950"
                                >
                                    ×
                                </button>
                            )}
                        </label>
                    </div>

                    <div className="flex min-h-20 items-center gap-2 overflow-x-auto px-4 py-4 md:px-5">
                        <div className="me-3 hidden shrink-0 sm:block">
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">{lang === "fa" ? "فیلتر" : "Filter"}</p>
                            <p className="mt-1 text-[10px] tabular-nums text-zinc-400">{filteredBlocks.length} {lang === "fa" ? "بلاک" : "blocks"}</p>
                        </div>

                        {[allLabel, ...categories].map((item) => {
                            const active = category === item;
                            const count = item === allLabel ? blocks.length : blocks.filter((block) => block.tag === item).length;

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setCategory(item)}
                                    aria-pressed={active}
                                    className={"group flex shrink-0 items-center gap-3 border px-4 py-3 text-xs font-semibold transition-all " + (active ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_10px_25px_rgba(24,24,27,0.12)]" : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-400 hover:text-zinc-950")}
                                >
                                    <span>{item}</span>
                                    <span className={"font-mono text-[9px] tabular-nums " + (active ? "text-zinc-500" : "text-zinc-300")}>{String(count).padStart(2, "0")}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-200 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                <span>{resultsLabel}: {filteredBlocks.length.toString().padStart(2, "0")}</span>
                <span>{lang === "fa" ? "React · Tailwind · Responsive" : "React · Tailwind · Responsive"}</span>
            </div>

            {filteredBlocks.length > 0 ? (
                <div className="grid gap-px border-x border-b border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredBlocks.map((block, index) => (
                        <article key={block.number} className="group relative bg-white transition-colors duration-300 hover:bg-[#fcfbf8]">
                            <div className="absolute inset-x-0 top-0 z-10 h-px origin-center scale-x-0 bg-[#c6922b] transition-transform duration-300 group-hover:scale-x-100" />
                            <div className="relative aspect-[1.45] overflow-hidden border-b border-zinc-200 bg-[#ebe8e1]">
                                <BlockVisual index={index} />
                                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                                    <span className="border border-white/80 bg-white/80 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-500 backdrop-blur-md">{block.tag}</span>
                                    <span className="font-mono text-[9px] font-semibold tabular-nums text-zinc-400">{block.number}</span>
                                </div>
                            </div>

                            <Link href={"/" + lang + "/components/component-packs/" + featured.slug} className="block p-5 md:p-6">
                                <div className="flex min-h-32 flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-lg font-semibold tracking-[-0.035em] text-zinc-950 transition-colors group-hover:text-zinc-600">{block.title}</h3>
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-zinc-200 text-zinc-300 transition-all group-hover:border-zinc-950 group-hover:text-zinc-950" aria-hidden="true">↗</span>
                                        </div>
                                        <p className="mt-2 line-clamp-2 text-xs leading-6 text-zinc-500">{block.description}</p>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3">
                                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-400">MinKits Block</span>
                                        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-zinc-400 group-hover:text-zinc-950">{lang === "fa" ? "مشاهده پک" : "View pack"} →</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="border-b border-zinc-200 py-24 text-center text-sm text-zinc-500">{noResults}</div>
            )}

            <article className="mt-12 overflow-hidden bg-zinc-950 text-white">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative min-h-80 overflow-hidden border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-e">
                        <div className="pointer-events-none absolute -end-28 -top-32 h-80 w-80 rounded-full border border-white/10" />
                        <div className="pointer-events-none absolute end-12 top-20 h-44 w-44 rounded-full border border-[#c6922b]/20" />
                        <div className="relative flex h-full flex-col justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-600">{featured.category}</p>
                                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.055em] md:text-5xl">{featured.name}</h3>
                                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{featured.description}</p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-2">
                                {featured.includes.slice(0, 6).map((item) => (
                                    <span key={item} className="border border-white/10 px-3 py-1.5 text-[10px] font-medium text-zinc-500">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between p-7 md:p-10">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600">{featuredLabel}</p>
                            <div className="mt-3 flex items-end justify-between gap-5">
                                <p className="text-5xl font-semibold tracking-[-0.06em]">{featured.price}</p>
                                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#c6922b]">{lang === "fa" ? "دسترسی کامل" : "Full access"}</span>
                            </div>
                            <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                                {featured.features.slice(0, 4).map((feature) => (
                                    <div key={feature} className="flex gap-3 py-3 text-sm text-zinc-300">
                                        <span className="text-[#c6922b]">+</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link href={"/" + lang + "/components/component-packs/" + featured.slug} className="mt-8 inline-flex items-center justify-between gap-8 bg-white px-5 py-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200">
                            {viewPack}
                            <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
