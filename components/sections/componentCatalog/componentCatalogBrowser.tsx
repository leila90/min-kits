"use client";

import Link from "next/link";
import {useMemo,useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import {componentCategories,type ComponentCategory,type ComponentRegistryItem} from "@/components/registry";
import {ComponentCardPreview} from "./previews";

type Props={lang:Lang;registry:readonly ComponentRegistryItem[];copy:Messages["componentsCatalog"]};

const categoryMeta:Record<ComponentCategory,{en:string;fa:string;index:string;signal:string;description:{en:string;fa:string}}>={
    form:{en:"FORM SYSTEMS",fa:"سیستم فرم",index:"01",signal:"INPUT → ACTION",description:{en:"Controls that turn product intent into usable flows.",fa:"کنترل‌هایی که ایده محصول را به جریان‌های قابل استفاده تبدیل می‌کنند."}},
    layout:{en:"LAYOUT SYSTEMS",fa:"سیستم چیدمان",index:"02",signal:"SPACE → STRUCTURE",description:{en:"Surfaces and structure for clear, scalable interfaces.",fa:"سطح‌ها و ساختارهایی برای رابط‌های شفاف و قابل توسعه."}},
    feedback:{en:"FEEDBACK SYSTEMS",fa:"سیستم بازخورد",index:"03",signal:"STATE → RESPONSE",description:{en:"Signals that tell users what changed, worked, or needs attention.",fa:"نشانه‌هایی برای نمایش تغییر، موفقیت یا نیاز به توجه."}},
    navigation:{en:"NAVIGATION SYSTEMS",fa:"سیستم ناوبری",index:"04",signal:"DISCOVER → MOVE",description:{en:"Patterns that keep product journeys predictable and accessible.",fa:"الگوهایی که مسیر حرکت در محصول را روشن و دسترس‌پذیر نگه می‌دارند."}},
};

export default function ComponentCatalogBrowser({lang,registry,copy}:Props){
    const [selected,setSelected]=useState<ComponentCategory>(componentCategories[0]);
    const items=useMemo(()=>registry.filter((item)=>item.category===selected),[registry,selected]);
    const meta=categoryMeta[selected];
    const isRtl=lang==="fa";

    return (
        <div className={isRtl?"text-right":"text-left"}>
            <div className="grid border-b border-zinc-200 lg:grid-cols-[180px_minmax(0,1fr)_210px]">
                <aside className="border-b border-zinc-200 lg:border-b-0 lg:border-e">
                    <div className="p-5">
                        <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">01 / 04</p>
                        <p className="mt-3 text-xs leading-5 text-zinc-500">{isRtl?"چهار خانواده اصلی برای ساخت رابط‌های واقعی.":"Four families. One focused UI system."}</p>
                    </div>
                    <nav className="border-t border-zinc-200">
                        {componentCategories.map((category,index)=>{
                            const active=selected===category;
                            return (
                                <button key={category} type="button" onClick={()=>setSelected(category)} aria-pressed={active} className={"group flex w-full items-center justify-between border-b border-zinc-200 px-5 py-4 text-start transition-colors "+(active?"bg-zinc-950 text-white":"text-zinc-500 hover:bg-white hover:text-zinc-950")}>
                                    <span className="flex items-center gap-3"><span className={"font-mono text-[9px] "+(active?"text-zinc-500":"text-zinc-300")}>0{index+1}</span><span className="text-xs font-semibold">{copy.categories[category]}</span></span>
                                    <span className={"text-xs transition-transform "+(active?(isRtl?"-translate-x-1":"translate-x-1"):"")}>{isRtl?"←":"→"}</span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                <section className="min-w-0 bg-[#f1eee8]">
                    <div className="flex items-end justify-between gap-5 border-b border-zinc-200 px-5 py-5 md:px-8">
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">{meta.index} / {meta.signal}</p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-[-.055em] md:text-3xl">{meta[isRtl?"fa":"en"]}</h2>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400">{String(items.length).padStart(2,"0")} {isRtl?"کامپوننت":"components"}</span>
                    </div>

                    <div className="grid gap-px bg-zinc-300 md:grid-cols-2">
                        {items.slice(0,4).map((item,index)=>(
                            <article key={item.slug} className={"group relative min-h-[235px] overflow-hidden bg-[#f8f7f4] p-5 md:p-7 "+(index===0?"md:col-span-2 md:min-h-[290px]":"")}>
                                <div className="relative z-10 flex items-start justify-between gap-4">
                                    <div>
                                        <span className="font-mono text-[9px] text-zinc-400">{String(index+1).padStart(2,"0")}</span>
                                        <h3 className="mt-2 text-sm font-semibold tracking-[-.02em]">{item.name[lang]}</h3>
                                    </div>
                                    <Link href={"/"+lang+"/components/"+item.slug} className="text-[10px] font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950">{copy.viewComponent}</Link>
                                </div>
                                <div className={"absolute inset-x-5 bottom-5 top-[92px] flex items-center justify-center border border-zinc-200 bg-white p-5 transition-transform duration-300 group-hover:-translate-y-1 md:inset-x-7 md:bottom-7 md:top-[96px] "+(index===0?"md:inset-x-14":"")}>
                                    <ComponentCardPreview slug={item.slug} copy={copy.demo} dir={isRtl?"rtl":"ltr"}/>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <aside className="flex flex-col justify-between border-t border-zinc-200 bg-zinc-950 p-5 text-white md:p-7 lg:border-t-0">
                    <div>
                        <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">THE MINKITS METHOD</p>
                        <p className="mt-10 text-5xl font-semibold tracking-[-.08em] text-zinc-700">{meta.index}</p>
                        <p className="mt-4 text-sm font-semibold">{meta[isRtl?"fa":"en"]}</p>
                        <p className="mt-3 text-xs leading-6 text-zinc-500">{meta.description[isRtl?"fa":"en"]}</p>
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-5">
                        <p className="text-xs leading-5 text-zinc-500">{isRtl?"برای دیدن جزئیات، دمو و سورس هر کامپوننت وارد صفحه آن شوید.":"Open any specimen for its live demo, API, examples, and source."}</p>
                        <Link href={"/"+lang+"/components/"+items[0]?.slug} className="mt-5 inline-flex items-center gap-3 text-xs font-semibold text-white underline decoration-zinc-700 underline-offset-8 hover:decoration-white">{isRtl?"اولین کامپوننت":"Open first component"} <span aria-hidden="true">{isRtl?"←":"→"}</span></Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
