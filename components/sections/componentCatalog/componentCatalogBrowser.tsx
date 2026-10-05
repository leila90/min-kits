"use client";

import Link from "next/link";
import {useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories,type ComponentCategory,type ComponentRegistryItem} from "@/components/registry";
import {ComponentCardPreview} from "./previews";

type Props={lang:Lang;registry:readonly ComponentRegistryItem[];copy:Messages["componentsCatalog"]};

const labels:Record<ComponentCategory,{en:string;fa:string;code:string}>={
    form:{en:"Fields & controls",fa:"فیلد و کنترل",code:"FORM"},
    layout:{en:"Layout & surfaces",fa:"چیدمان و سطح",code:"LAYOUT"},
    feedback:{en:"Feedback & states",fa:"بازخورد و وضعیت",code:"STATE"},
    navigation:{en:"Navigation",fa:"ناوبری",code:"NAV"}
};

export default function ComponentCatalogBrowser({lang,registry,copy}:Props){
    const [selected,setSelected]=useState<ComponentCategory>(componentCategories[0]);
    const items=registry.filter((item)=>item.category===selected);
    const selectedIndex=componentCategories.indexOf(selected);

    return (
        <div className={lang==="fa"?"text-right":"text-left"}>
            <div className="flex gap-2 overflow-x-auto border-b border-zinc-200 py-3 [scrollbar-width:none]">
                {componentCategories.map((category,index)=>{
                    const active=selected===category;
                    return <button key={category} type="button" onClick={()=>setSelected(category)} aria-pressed={active} className={"shrink-0 border px-4 py-2.5 text-[10px] font-semibold transition-all "+(active?"border-zinc-950 bg-zinc-950 text-white":"border-transparent text-zinc-500 hover:border-zinc-200 hover:bg-white hover:text-zinc-950")}>
                        <span className="me-2 font-mono text-[9px] opacity-50">0{index+1}</span>{copy.categories[category]}
                    </button>;
                })}
            </div>

            <div className="grid min-h-[520px] lg:grid-cols-[minmax(0,1fr)_230px]">
                <div className="min-w-0 border-b border-zinc-200 lg:border-b-0 lg:border-e">
                    <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 md:px-8">
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400">{labels[selected].code} / 0{selectedIndex+1}</p>
                            <h2 className="mt-1 text-xl font-semibold tracking-[-.04em]">{copy.categories[selected]}</h2>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400">{String(items.length).padStart(2,"0")} / {lang==="fa"?"نمونه":"items"}</span>
                    </div>

                    <div className="divide-y divide-zinc-200">
                        {items.map((item,index)=>(
                            <article key={item.slug} className="group grid gap-5 p-5 md:grid-cols-[38px_minmax(170px,.55fr)_minmax(260px,1fr)_auto] md:items-center md:px-8 md:py-7">
                                <span className="font-mono text-[10px] text-zinc-300">{String(index+1).padStart(2,"0")}</span>
                                <div>
                                    <h3 className="font-semibold tracking-[-.025em]">{item.name[lang]}</h3>
                                    <p className="mt-2 text-xs leading-5 text-zinc-500">{item.description[lang]}</p>
                                </div>
                                <div className="min-h-28 overflow-hidden border border-zinc-200 bg-[#ece9e2] p-4 transition-transform duration-300 group-hover:translate-x-1">
                                    <ComponentCardPreview slug={item.slug} copy={copy.demo} dir={lang==="fa"?"rtl":"ltr"}/>
                                </div>
                                <Link href={"/"+lang+"/components/"+item.slug} className="whitespace-nowrap text-xs font-semibold underline decoration-zinc-300 underline-offset-8 hover:decoration-zinc-950">{copy.viewComponent} <span aria-hidden="true">{lang==="fa"?"←":"→"}</span></Link>
                            </article>
                        ))}
                    </div>
                </div>

                <aside className={"bg-zinc-950 p-5 text-white md:p-7 "+(lang==="fa"?"text-right":"text-left")}>
                    <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">SPECIMEN NOTE</p>
                    <div className="mt-12">
                        <span className="font-mono text-6xl tracking-[-.08em] text-zinc-700">{String(selectedIndex+1).padStart(2,"0")}</span>
                        <h3 className="mt-5 text-2xl font-semibold tracking-[-.05em]">{labels[selected][lang]}</h3>
                        <p className="mt-4 text-xs leading-6 text-zinc-500">{lang==="fa"?"نمونه‌ها برای استفاده مستقیم در پروژه ساخته شده‌اند؛ برای جزئیات و سورس، هر مورد را باز کنید.":"Every specimen is built for direct product use. Open an item for its full details and source."}</p>
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-5">
                        <p className="font-mono text-3xl tracking-[-.06em]">{String(registry.length).padStart(2,"0")}</p>
                        <p className="mt-1 text-[9px] uppercase tracking-[.18em] text-zinc-600">{lang==="fa"?"در کتابخانه":"in library"}</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}