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

function Preview({index}: {index: number}) {
    const variant = index % 4;
    if (variant === 0) return <div className="grid h-full grid-cols-[1.1fr_.9fr] bg-[#ece9e2] p-5"><div className="flex flex-col justify-center bg-white p-7"><i className="block h-2 w-28 bg-zinc-950"/><i className="mt-3 block h-1.5 w-40 bg-zinc-200"/><div className="mt-7 flex gap-2"><i className="h-9 w-20 bg-zinc-950"/><i className="h-9 w-20 border border-zinc-200"/></div></div><div className="m-3 bg-zinc-100"/></div>;
    if (variant === 1) return <div className="h-full bg-zinc-950 p-6"><div className="flex h-full flex-col justify-center"><i className="block h-2 w-32 bg-white"/><i className="mt-3 block h-1.5 w-44 bg-white/20"/><div className="mt-8 grid grid-cols-3 gap-3">{[1,2,3].map((item)=><i key={item} className="h-20 border border-white/10 bg-white/[.04]" />)}</div></div></div>;
    if (variant === 2) return <div className="h-full bg-[#ece9e2] p-5"><div className="h-full border border-zinc-200 bg-white p-6"><div className="flex items-center justify-between border-b border-zinc-200 pb-4"><i className="h-2 w-24 bg-zinc-950"/><i className="h-2 w-12 bg-zinc-200"/></div><div className="mt-6 grid grid-cols-3 gap-3">{[1,2,3].map((item)=><i key={item} className="h-24 border border-zinc-200 bg-zinc-50" />)}</div></div></div>;
    return <div className="h-full bg-[#ece9e2] p-5"><div className="flex h-full border border-zinc-200 bg-white"><div className="w-16 bg-zinc-950"/><div className="flex flex-1 flex-col justify-center p-7"><i className="block h-2 w-28 bg-zinc-950"/><i className="mt-3 block h-1.5 w-20 bg-zinc-200"/><i className="mt-8 block h-24 border border-zinc-200 bg-zinc-50"/></div></div></div>;
}

export default function ComponentPacksExplorer({lang,packs,blocks,categories,searchPlaceholder,allLabel,resultsLabel,noResults,viewPack,featuredLabel}: Props) {
    const [query,setQuery]=useState("");
    const [category,setCategory]=useState(allLabel);
    const featured=packs[0];

    const filtered=useMemo(()=>{
        const q=query.trim().toLowerCase();
        return blocks.filter((block)=>{
            const categoryMatch=category===allLabel || block.tag===category;
            const text=(block.title+" "+block.description+" "+block.tag).toLowerCase();
            return categoryMatch && (!q || text.includes(q));
        });
    },[allLabel,blocks,category,query]);

    return (
        <div className={lang==="fa" ? "text-right" : "text-left"}>
            <div className="grid border border-zinc-200 bg-white lg:grid-cols-[260px_minmax(0,1fr)]">
                <aside className="border-b border-zinc-200 bg-zinc-950 p-6 text-white lg:sticky lg:top-24 lg:self-start lg:border-b-0 lg:border-e lg:p-7">
                    <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">PACK / 01</p>
                    <h2 className="mt-7 text-2xl font-semibold tracking-[-.05em]">{featured.name}</h2>
                    <p className="mt-3 text-xs leading-6 text-zinc-500">{featured.description}</p>
                    <div className="mt-8 border-y border-white/10 py-5">
                        {featured.stats.map((stat)=><div key={stat.label} className="flex items-center justify-between border-b border-white/5 py-2 last:border-0"><span className="text-[9px] uppercase tracking-[.14em] text-zinc-600">{stat.label}</span><span className="font-mono text-xs text-zinc-300">{stat.value}</span></div>)}
                    </div>
                    <Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="mt-7 flex items-center justify-between border border-white/10 px-4 py-3 text-xs font-semibold transition-colors hover:border-white hover:bg-white hover:text-zinc-950">
                        {viewPack}<span aria-hidden="true">{lang==="fa" ? "←" : "→"}</span>
                    </Link>
                </aside>

                <div>
                    <div className="border-b border-zinc-200 p-5 md:p-7">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">BLOCK MANIFEST</p>
                                <p className="mt-2 text-sm text-zinc-500">{lang==="fa" ? "بلاک را انتخاب کنید؛ خروجی و ساختار آن را قبل از ورود به پک ببینید." : "Inspect each block as a specimen before opening the full pack."}</p>
                            </div>
                            <label className="flex h-11 w-full max-w-sm items-center border border-zinc-200 bg-[#f8f7f4] px-3">
                                <span className="me-2 text-zinc-400" aria-hidden="true">⌕</span>
                                <span className="sr-only">{searchPlaceholder}</span>
                                <input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder={searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-zinc-400"/>
                            </label>
                        </div>
                        <div className="mt-6 flex gap-2 overflow-x-auto border-t border-zinc-100 pt-5">
                            {[allLabel,...categories].map((item)=>{
                                const active=category===item;
                                return <button key={item} type="button" onClick={()=>setCategory(item)} aria-pressed={active} className={"shrink-0 border px-3 py-2 text-[10px] font-semibold transition-colors "+(active ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 text-zinc-500 hover:border-zinc-950 hover:text-zinc-950")}>{item}</button>;
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-400 md:px-7">
                        <span>{resultsLabel} / {String(filtered.length).padStart(2,"0")}</span>
                        <span>React · Tailwind · RTL</span>
                    </div>

                    {filtered.length ? <div className="divide-y divide-zinc-200">
                        {filtered.map((block,index)=><article key={block.number} className="group grid lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,.75fr)]">
                            <div className="aspect-[1.65] min-h-56 overflow-hidden border-b border-zinc-200 bg-[#ece9e2] lg:aspect-auto lg:min-h-80 lg:border-b-0 lg:border-e"><Preview index={index}/></div>
                            <div className="flex flex-col justify-between p-5 md:p-7">
                                <div>
                                    <div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] text-zinc-300">{block.number}</span><span className="text-[9px] font-bold uppercase tracking-[.16em] text-zinc-400">{block.tag}</span></div>
                                    <h3 className="mt-10 text-2xl font-semibold tracking-[-.05em]">{block.title}</h3>
                                    <p className="mt-3 text-xs leading-6 text-zinc-500">{block.description}</p>
                                </div>
                                <Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="mt-10 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs font-semibold">
                                    <span>{lang==="fa" ? "ورود به پک" : "Open in pack"}</span><span className="transition-transform group-hover:translate-x-1" aria-hidden="true">{lang==="fa" ? "←" : "→"}</span>
                                </Link>
                            </div>
                        </article>)}
                    </div> : <div className="px-6 py-24 text-center text-sm text-zinc-500">{noResults}</div>}
                </div>
            </div>

            <div className="mt-8 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3">
                {featured.includes.slice(0,3).map((item,index)=><div key={item} className="bg-white p-5 md:p-6"><p className="font-mono text-[9px] text-zinc-300">0{index+1}</p><p className="mt-5 text-sm font-semibold">{item}</p><p className="mt-2 text-xs leading-5 text-zinc-500">{lang==="fa" ? "ساختار آماده و قابل شخصی‌سازی." : "A reusable surface ready to customize."}</p></div>)}
            </div>
        </div>
    );
}
