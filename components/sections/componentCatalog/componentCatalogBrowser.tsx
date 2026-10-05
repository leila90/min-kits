"use client";

import Link from "next/link";
import {useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories,type ComponentCategory,type ComponentRegistryItem} from "@/components/registry";
import {ComponentCardPreview} from "./previews";

type Props={lang:Lang;registry:readonly ComponentRegistryItem[];copy:Messages["componentsCatalog"]};

const accents:Record<ComponentCategory,{en:string;fa:string;number:string}>={
    form:{en:"INPUT",fa:"ورودی",number:"01"},
    layout:{en:"STRUCTURE",fa:"ساختار",number:"02"},
    feedback:{en:"RESPONSE",fa:"بازخورد",number:"03"},
    navigation:{en:"MOVEMENT",fa:"حرکت",number:"04"},
};

export default function ComponentCatalogBrowser({lang,registry,copy}:Props){
    const [selected,setSelected]=useState<ComponentCategory>(componentCategories[0]);
    const [hovered,setHovered]=useState<string|null>(null);
    const items=registry.filter((item)=>item.category===selected);
    const rtl=lang==="fa";
    const selectedMeta=accents[selected];
    const featured=registry.find((item)=>item.slug===hovered)??items[0];

    return (
        <div className={rtl?"text-right":"text-left"}>
            <div className="overflow-hidden border-y border-zinc-950 bg-[#f8f7f4]">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
                    <div className="relative min-h-[560px] border-b border-zinc-950 lg:border-b-0 lg:border-e">
                        <div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] [background-size:48px_48px]"/>
                        <div className="relative flex min-h-[560px] flex-col justify-between p-6 md:p-10">
                            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">
                                <span>COMPONENT INDEX / {selectedMeta.number}</span>
                                <span>{String(items.length).padStart(2,"0")} {rtl?"آیتم":"items"}</span>
                            </div>
                            <div className="relative max-w-3xl">
                                <p className="font-mono text-xs text-zinc-400">{selectedMeta.number} / {selectedMeta[rtl?"fa":"en"]}</p>
                                <h2 className="mt-4 text-6xl font-semibold leading-[.82] tracking-[-.08em] md:text-8xl">{copy.categories[selected]}</h2>
                                <p className="mt-6 max-w-md text-sm leading-6 text-zinc-500">{rtl?"یک انتخاب را نگه دارید و نمونه‌های واقعی این خانواده را بررسی کنید.":"A focused index of real interface primitives. Move through the family and inspect the specimens."}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="bg-zinc-950 text-white">
                        <div className="p-6 md:p-8">
                            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">CHOOSE A SYSTEM</p>
                            <div className="mt-7 space-y-1">
                                {componentCategories.map((category,index)=>{
                                    const active=category===selected;
                                    return <button key={category} type="button" onClick={()=>setSelected(category)} aria-pressed={active} className={"group flex w-full items-baseline justify-between border-b border-white/10 py-4 text-start transition-colors "+(active?"text-white":"text-zinc-600 hover:text-zinc-300")}>
                                        <span className="flex items-baseline gap-3"><span className="font-mono text-[9px] text-zinc-700">0{index+1}</span><span className="text-sm font-semibold">{copy.categories[category]}</span></span>
                                        <span className="text-xs">{active?"↗":"→"}</span>
                                    </button>;
                                })}
                            </div>
                        </div>
                        <div className="mt-8 border-t border-white/10 p-6 md:p-8">
                            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">MINKITS / PROMISE</p>
                            <p className="mt-5 text-lg font-medium leading-7 tracking-[-.03em]">{rtl?"کامپوننت خوب باید قبل از کپی شدن، قابل فهم باشد.":"A good component should make sense before it gets copied."}</p>
                        </div>
                    </aside>
                </div>

                <div className="border-t border-zinc-950">
                    {items.map((item,index)=>{
                        const active=featured?.slug===item.slug;
                        return (
                            <Link key={item.slug} href={"/"+lang+"/components/"+item.slug} onMouseEnter={()=>setHovered(item.slug)} onFocus={()=>setHovered(item.slug)} className={"group grid min-h-[112px] grid-cols-[58px_minmax(0,1fr)_170px_24px] items-center gap-4 border-b border-zinc-300 px-5 text-start transition-colors last:border-b-0 md:grid-cols-[82px_minmax(0,1fr)_260px_30px] md:px-8 "+(active?"bg-white":"hover:bg-white")}>
                                <span className="font-mono text-[10px] text-zinc-400">0{index+1}</span>
                                <span>
                                    <span className="block text-base font-semibold tracking-[-.025em]">{item.name[lang]}</span>
                                    <span className="mt-1 block max-w-lg text-xs text-zinc-500">{rtl?"برای مشاهده دمو، API و سورس وارد شوید.":"Open for demo, API, examples, and source."}</span>
                                </span>
                                <span className="hidden md:block">
                                    <span className="block h-1 w-full overflow-hidden bg-zinc-200"><span className={"block h-full bg-zinc-950 transition-all duration-500 "+(active?"w-full":"w-1/4 group-hover:w-3/4")}/></span>
                                    <span className="mt-2 block font-mono text-[8px] uppercase tracking-[.18em] text-zinc-400">{copy.viewComponent}</span>
                                </span>
                                <span className="text-lg text-zinc-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">{rtl?"←":"↗"}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {featured&&<div className="pointer-events-none fixed bottom-6 z-30 hidden w-[280px] overflow-hidden border border-zinc-200 bg-white p-3 shadow-2xl ltr:right-6 rtl:left-6 lg:block" aria-hidden="true">
                <div className="mb-2 flex items-center justify-between font-mono text-[8px] uppercase tracking-[.16em] text-zinc-400"><span>LIVE SPECIMEN</span><span>{featured.name[lang]}</span></div>
                <div className="flex h-36 items-center justify-center overflow-hidden border border-zinc-200 bg-[#f1eee8] p-4"><ComponentCardPreview slug={featured.slug} copy={copy.demo} dir={rtl?"rtl":"ltr"}/></div>
            </div>}
        </div>
    );
}
