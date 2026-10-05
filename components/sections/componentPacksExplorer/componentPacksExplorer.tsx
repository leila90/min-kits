"use client";

import Link from "next/link";
import {useMemo,useState} from "react";
import type {ComponentPack} from "@/content/componentPacks";

type Block={title:string;description:string;tag:string;number:string};
type Props={lang:"en"|"fa";packs:ComponentPack[];blocks:Block[];categories:string[];searchPlaceholder:string;allLabel:string;resultsLabel:string;noResults:string;viewPack:string;featuredLabel:string};

function Preview({index}:{index:number}){
    const variant=index%4;
    if(variant===0)return <div className="grid h-full grid-cols-[1.15fr_.85fr] bg-[#ebe7df] p-4 md:p-7"><div className="flex flex-col justify-center bg-white p-5 md:p-8"><i className="block h-2 w-28 bg-zinc-950"/><i className="mt-3 block h-1.5 w-40 bg-zinc-200"/><i className="mt-7 block h-10 w-28 bg-zinc-950"/><i className="mt-2 block h-10 w-20 border border-zinc-200"/></div><div className="m-2 bg-zinc-100 md:m-4"/></div>;
    if(variant===1)return <div className="h-full bg-zinc-950 p-5 md:p-8"><div className="mx-auto flex h-full max-w-xl flex-col justify-center"><i className="mx-auto block h-2 w-32 bg-white"/><i className="mx-auto mt-3 block h-1.5 w-44 bg-white/20"/><div className="mt-8 grid grid-cols-3 gap-2 md:gap-3">{[1,2,3].map((item)=><i key={item} className="h-20 border border-white/10 bg-white/[.04] md:h-28"/>)}</div></div></div>;
    if(variant===2)return <div className="h-full bg-[#ebe7df] p-4 md:p-7"><div className="h-full border border-zinc-200 bg-white p-5 md:p-7"><div className="flex items-center justify-between border-b border-zinc-200 pb-4"><i className="h-2 w-24 bg-zinc-950"/><i className="h-2 w-12 bg-zinc-200"/></div><div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">{[1,2,3].map((item)=><i key={item} className="h-24 border border-zinc-200 bg-zinc-50 md:h-32"/>)}</div></div></div>;
    return <div className="h-full bg-[#ebe7df] p-4 md:p-7"><div className="flex h-full border border-zinc-200 bg-white"><div className="w-12 bg-zinc-950 md:w-16"/><div className="flex flex-1 flex-col justify-center p-5 md:p-8"><i className="block h-2 w-28 bg-zinc-950"/><i className="mt-3 block h-1.5 w-20 bg-zinc-200"/><i className="mt-8 block h-24 border border-zinc-200 bg-zinc-50 md:h-32"/></div></div></div>;
}

export default function ComponentPacksExplorer({lang,packs,blocks,categories,searchPlaceholder,allLabel,resultsLabel,noResults,viewPack}:Props){
    const [query,setQuery]=useState("");
    const [category,setCategory]=useState(allLabel);
    const featured=packs[0];
    const filtered=useMemo(()=>{
        const q=query.trim().toLowerCase();
        return blocks.filter((block)=>{
            const matchCategory=category===allLabel||block.tag===category;
            const text=(block.title+" "+block.description+" "+block.tag).toLowerCase();
            return matchCategory&&(!q||text.includes(q));
        });
    },[allLabel,blocks,category,query]);

    return <div className={lang==="fa"?"text-right":"text-left"}>
        <div className="min-w-0">
            <div className="border-b border-zinc-200 p-4 md:p-6">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400">BLOCK INDEX</p><p className="mt-2 text-xs leading-5 text-zinc-500">{lang==="fa"?"بلاک‌ها را بر اساس نقش پیدا کنید یا مستقیماً جستجو کنید.":"Browse by role or search directly through the collection."}</p></div>
                    <label className="flex h-10 w-full max-w-sm items-center border border-zinc-200 bg-white px-3"><span className="me-2 text-zinc-400" aria-hidden="true">⌕</span><span className="sr-only">{searchPlaceholder}</span><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder={searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-zinc-400"/></label>
                </div>
                <div className="mt-5 flex gap-1.5 overflow-x-auto [scrollbar-width:none]">{[allLabel,...categories].map((item)=>{const active=category===item;return <button key={item} type="button" onClick={()=>setCategory(item)} aria-pressed={active} className={"shrink-0 px-3 py-2 text-[10px] font-semibold "+(active?"bg-zinc-950 text-white":"bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-950")}>{item}</button>;})}</div>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 font-mono text-[9px] uppercase tracking-[.15em] text-zinc-400 md:px-6"><span>{resultsLabel} / {String(filtered.length).padStart(2,"0")}</span><span>React · Tailwind · RTL</span></div>
            {filtered.length?<div className="divide-y divide-zinc-200">{filtered.map((block,index)=><article key={block.number} className="group"><div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(210px,.55fr)]"><div className="aspect-[1.6] min-h-56 overflow-hidden border-b border-zinc-200 bg-[#ebe7df] lg:aspect-auto lg:min-h-72 lg:border-b-0 lg:border-e"><Preview index={index}/></div><div className="flex flex-col justify-between p-5 md:p-6"><div><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-zinc-300">{block.number}</span><span className="font-mono text-[9px] text-zinc-400">{block.tag}</span></div><h3 className="mt-8 text-xl font-semibold tracking-[-.04em]">{block.title}</h3><p className="mt-2 text-xs leading-6 text-zinc-500">{block.description}</p></div><Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="mt-8 border-t border-zinc-100 pt-4 text-xs font-semibold">{viewPack} <span aria-hidden="true">{lang==="fa"?"←":"→"}</span></Link></div></div></article>)}</div>:<div className="px-6 py-24 text-center text-sm text-zinc-500">{noResults}</div>}
        </div>
    </div>;
}