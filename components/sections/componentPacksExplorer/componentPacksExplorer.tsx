"use client";

import Link from "next/link";
import {useState} from "react";
import type {ComponentPack} from "@/content/componentPacks";

type Block={title:string;description:string;tag:string;number:string};
type Props={lang:"en"|"fa";packs:ComponentPack[];blocks:Block[];categories:string[];allLabel:string;viewPack:string};

function BlockCanvas({index}:{index:number}){
    const variant=index%4;
    if(variant===0)return <div className="grid h-full grid-cols-[1.15fr_.85fr] gap-3 bg-[#ebe7df] p-4 md:gap-5 md:p-7"><div className="flex flex-col justify-center bg-white p-5 md:p-8"><span className="h-2 w-24 bg-zinc-950"/><span className="mt-4 h-8 w-full max-w-sm bg-zinc-950"/><span className="mt-2 h-8 w-4/5 max-w-xs bg-zinc-200"/><span className="mt-7 h-9 w-28 bg-zinc-950"/></div><div className="bg-zinc-200 p-3"><div className="grid h-full grid-cols-2 gap-2"><span className="bg-zinc-950"/><span className="bg-white"/><span className="col-span-2 bg-white"/></div></div></div>;
    if(variant===1)return <div className="h-full bg-zinc-950 p-5 text-white md:p-8"><div className="mx-auto flex h-full max-w-lg flex-col justify-center text-center"><span className="mx-auto h-2 w-28 bg-white"/><span className="mx-auto mt-5 h-9 w-4/5 bg-white"/><span className="mx-auto mt-2 h-9 w-3/5 bg-zinc-700"/><div className="mx-auto mt-7 flex gap-2"><span className="h-9 w-24 bg-white"/><span className="h-9 w-20 border border-white/20"/></div></div></div>;
    if(variant===2)return <div className="h-full bg-[#ebe7df] p-4 md:p-7"><div className="h-full border border-zinc-200 bg-white p-5 md:p-7"><div className="flex justify-between border-b border-zinc-200 pb-4"><span className="h-2 w-24 bg-zinc-950"/><span className="h-2 w-10 bg-zinc-200"/></div><div className="mt-7 grid grid-cols-3 gap-2"><span className="h-24 bg-zinc-950 md:h-32"/><span className="h-24 bg-zinc-100 md:h-32"/><span className="h-24 bg-zinc-200 md:h-32"/></div></div></div>;
    return <div className="h-full bg-[#ebe7df] p-4 md:p-7"><div className="flex h-full border border-zinc-200 bg-white"><span className="w-12 bg-zinc-950 md:w-16"/><div className="flex flex-1 flex-col justify-center p-5 md:p-8"><span className="h-2 w-28 bg-zinc-950"/><span className="mt-4 h-2 w-20 bg-zinc-200"/><span className="mt-8 h-24 border border-zinc-200 bg-zinc-50 md:h-32"/></div></div></div>;
}

export default function ComponentPacksExplorer({lang,packs,blocks,categories,allLabel,viewPack}:Props){
    const [selected,setSelected]=useState(0);
    const [category,setCategory]=useState(allLabel);
    const featured=packs[0];
    const filtered=blocks.filter((block)=>category===allLabel||block.tag===category);
    const active=filtered[Math.min(selected,Math.max(filtered.length-1,0))]??blocks[0];
    const activeIndex=Math.max(0,blocks.findIndex((block)=>block.number===active?.number));
    const isRtl=lang==="fa";

    return (
        <div className={isRtl?"text-right":"text-left"}>
            <div className="grid border-y border-zinc-200 lg:grid-cols-[210px_minmax(0,1fr)_250px]">
                <aside className="border-b border-zinc-200 lg:border-b-0 lg:border-e">
                    <div className="p-5 md:p-6">
                        <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">COLLECTION / 01</p>
                        <h2 className="mt-4 text-xl font-semibold tracking-[-.04em]">{featured.name}</h2>
                        <p className="mt-3 text-xs leading-6 text-zinc-500">{isRtl?"یک مجموعه فشرده از بلاک‌های آماده برای ساخت سریع صفحات واقعی.":"A focused collection of production-ready blocks for real product pages."}</p>
                    </div>
                    <div className="border-t border-zinc-200">
                        {[allLabel,...categories].map((item)=>(
                            <button key={item} type="button" onClick={()=>{setCategory(item);setSelected(0);}} aria-pressed={category===item} className={"flex w-full items-center justify-between border-b border-zinc-200 px-5 py-3.5 text-xs font-semibold "+(category===item?"bg-zinc-950 text-white":"text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950")}>
                                <span>{item}</span><span className="font-mono text-[9px] opacity-50">{category===item?"●":"○"}</span>
                            </button>
                        ))}
                    </div>
                </aside>

                <section className="min-w-0 bg-[#f1eee8]">
                    <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-5 py-4 md:px-7">
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">{active?.number??"01"} / SELECTED BLOCK</p>
                            <h3 className="mt-1 text-lg font-semibold tracking-[-.03em]">{active?.title}</h3>
                        </div>
                        <Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="hidden text-[10px] font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 sm:block">{viewPack} →</Link>
                    </div>
                    <div className="min-h-[390px] p-4 md:min-h-[500px] md:p-7">
                        <div className="h-full min-h-[360px] overflow-hidden border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,.06)]">
                            <BlockCanvas index={activeIndex}/>
                        </div>
                    </div>
                    <div className="border-t border-zinc-200 bg-white">
                        <div className="flex gap-0 overflow-x-auto [scrollbar-width:none]">
                            {filtered.map((block,index)=>(
                                <button key={block.number} type="button" onClick={()=>setSelected(index)} aria-pressed={active?.number===block.number} className={"min-w-[170px] flex-1 border-e border-zinc-200 px-4 py-4 text-start transition-colors last:border-e-0 "+(active?.number===block.number?"bg-zinc-950 text-white":"hover:bg-zinc-50")}>
                                    <span className="font-mono text-[9px] opacity-40">{block.number}</span>
                                    <span className="mt-2 block text-xs font-semibold">{block.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="border-t border-zinc-200 bg-zinc-950 p-6 text-white lg:border-t-0 md:p-7">
                    <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">{isRtl?"چرا این پک؟":"WHY THIS COLLECTION"}</p>
                    <div className="mt-10">
                        <p className="text-5xl font-semibold tracking-[-.08em] text-zinc-700">{featured.price}</p>
                        <p className="mt-3 text-xs leading-6 text-zinc-500">{isRtl?"کد منبع React و Tailwind برای استفاده مستقیم در پروژه.":"React + Tailwind source designed to leave the library and ship inside your product."}</p>
                        <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                            {(featured.features??[]).slice(0,4).map((feature)=>(<div key={feature} className="flex gap-3 text-xs text-zinc-400"><span className="text-zinc-600">+</span><span>{feature}</span></div>))}
                        </div>
                    </div>
                    <Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="mt-10 flex items-center justify-between border border-white/15 px-4 py-3 text-xs font-semibold text-white hover:bg-white hover:text-zinc-950"><span>{viewPack}</span><span aria-hidden="true">{isRtl?"←":"→"}</span></Link>
                </aside>
            </div>
        </div>
    );
}
