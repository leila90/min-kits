"use client";

import Link from "next/link";
import {useState} from "react";
import type {ComponentPack} from "@/content/componentPacks";

type Block={title:string;description:string;tag:string;number:string};
type Props={lang:"en"|"fa";packs:ComponentPack[];blocks:Block[];categories:string[];allLabel:string;viewPack:string};

function Preview({index}:{index:number}){
    const n=index%4;
    return <div className={"relative h-full min-h-[380px] overflow-hidden "+(n===1?"bg-zinc-950":"bg-[#ebe7df]")}>
        <div className={"absolute left-[8%] right-[8%] top-[9%] bottom-[9%] border "+(n===1?"border-white/10 bg-zinc-900":"border-zinc-200 bg-white")}>
            {n===0&&<div className="grid h-full grid-cols-[1.1fr_.9fr] gap-4 p-6"><div className="flex flex-col justify-center"><span className="h-2 w-20 bg-zinc-950"/><span className="mt-5 h-10 w-full bg-zinc-950"/><span className="mt-2 h-8 w-3/4 bg-zinc-200"/><span className="mt-8 h-9 w-24 bg-zinc-950"/></div><div className="grid grid-cols-2 gap-2 bg-zinc-100 p-3"><span className="bg-zinc-950"/><span className="bg-white"/><span className="col-span-2 bg-white"/></div></div>}
            {n===1&&<div className="flex h-full flex-col items-center justify-center text-center"><span className="h-2 w-24 bg-white"/><span className="mt-6 h-11 w-4/5 bg-white"/><span className="mt-2 h-8 w-3/5 bg-zinc-700"/><div className="mt-8 flex gap-2"><span className="h-10 w-24 bg-white"/><span className="h-10 w-20 border border-white/20"/></div></div>}
            {n===2&&<div className="p-6"><div className="flex justify-between border-b border-zinc-200 pb-4"><span className="h-2 w-24 bg-zinc-950"/><span className="h-2 w-8 bg-zinc-200"/></div><div className="mt-8 grid grid-cols-3 gap-3"><span className="h-32 bg-zinc-950"/><span className="h-32 bg-zinc-100"/><span className="h-32 bg-zinc-200"/></div></div>}
            {n===3&&<div className="flex h-full"><div className="w-14 bg-zinc-950"/><div className="flex flex-1 flex-col justify-center p-8"><span className="h-2 w-28 bg-zinc-950"/><span className="mt-3 h-2 w-16 bg-zinc-200"/><span className="mt-8 h-28 border border-zinc-200 bg-zinc-50"/></div></div>}
        </div>
        <span className="absolute bottom-4 left-5 font-mono text-[9px] tracking-[.2em] text-zinc-400">MINKITS / BLOCK {String(index+1).padStart(2,"0")}</span>
    </div>;
}

export default function ComponentPacksExplorer({lang,packs,blocks,categories,allLabel,viewPack}:Props){
    const [active,setActive]=useState(0);
    const [filter,setFilter]=useState(allLabel);
    const pack=packs[0];
    const list=blocks.filter((b)=>filter===allLabel||b.tag===filter);
    const current=list[active]??list[0]??blocks[0];
    const currentIndex=Math.max(0,blocks.findIndex((b)=>b.number===current?.number));
    const rtl=lang==="fa";

    return <div className={rtl?"text-right":"text-left"}>
        <div className="grid border-y border-zinc-950 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,.7fr)]">
            <div className="relative min-h-[620px] bg-[#ebe7df] p-4 md:p-7">
                <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400">
                    <span>PACK / 01 — {pack.category}</span><span>{current?.number} / {blocks.length.toString().padStart(2,"0")}</span>
                </div>
                <div className="h-[500px] border border-zinc-300 bg-white p-2 md:p-3"><Preview index={currentIndex}/></div>
            </div>

            <aside className="flex flex-col bg-zinc-950 text-white">
                <div className="flex-1 p-6 md:p-9">
                    <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">THE PRODUCT</p>
                    <h2 className="mt-8 text-4xl font-semibold leading-[.9] tracking-[-.065em] md:text-5xl">{pack.name}</h2>
                    <p className="mt-5 text-sm leading-7 text-zinc-500">{pack.description}</p>
                    <div className="mt-9 border-y border-white/10 py-5">
                        <p className="font-mono text-4xl tracking-[-.06em]">{pack.price}</p>
                        <p className="mt-1 text-[9px] uppercase tracking-[.18em] text-zinc-600">{rtl?"دسترسی به سورس":"source access"}</p>
                    </div>
                    <div className="mt-7 space-y-3">
                        {(pack.features??[]).slice(0,5).map((feature)=><p key={feature} className="flex gap-3 text-xs leading-5 text-zinc-400"><span className="text-zinc-700">+</span>{feature}</p>)}
                    </div>
                </div>
                <Link href={"/"+lang+"/components/component-packs/"+pack.slug} className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-xs font-semibold hover:bg-white hover:text-zinc-950 md:px-9"><span>{viewPack}</span><span>{rtl?"←":"↗"}</span></Link>
            </aside>
        </div>

        <div className="mt-10 border-y border-zinc-950 bg-white">
            <div className="flex items-end justify-between gap-6 border-b border-zinc-200 px-5 py-6 md:px-8">
                <div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400">WHAT'S INSIDE</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.05em]">{rtl?"فهرست بلاک‌ها":"The block index"}</h3></div>
                <div className="flex max-w-[55%] gap-1 overflow-x-auto">{[allLabel,...categories].map((item)=><button key={item} type="button" onClick={()=>{setFilter(item);setActive(0);}} className={"whitespace-nowrap px-3 py-2 text-[10px] font-semibold "+(filter===item?"bg-zinc-950 text-white":"bg-zinc-100 text-zinc-500 hover:bg-zinc-200")}>{item}</button>)}</div>
            </div>
            {list.map((block,index)=><button key={block.number} type="button" onClick={()=>setActive(index)} aria-pressed={current?.number===block.number} className={"grid w-full grid-cols-[55px_minmax(0,1fr)_100px_20px] items-center gap-4 border-b border-zinc-200 px-5 py-5 text-start last:border-0 md:grid-cols-[80px_minmax(0,1fr)_160px_30px] md:px-8 "+(current?.number===block.number?"bg-[#f1eee8]":"hover:bg-[#f8f7f4]")}>
                <span className="font-mono text-[10px] text-zinc-400">{block.number}</span>
                <span><span className="block text-sm font-semibold">{block.title}</span><span className="mt-1 block text-xs text-zinc-500">{block.description}</span></span>
                <span className="hidden text-[9px] uppercase tracking-[.16em] text-zinc-400 md:block">{block.tag}</span>
                <span className="text-zinc-300">{current?.number===block.number?"●":"○"}</span>
            </button>)}
        </div>
    </div>;
}
