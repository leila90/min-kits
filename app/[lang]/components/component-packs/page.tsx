import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Container from "@/components/ui/container";
import {FooterHeader,Header} from "@/components/layout";
import {getDictionary,isLang} from "../../../i18n";
import {getComponentPacks} from "@/content/componentPacks";
import ComponentPacksExplorer from "@/components/sections/componentPacksExplorer/componentPacksExplorer";

type Props={params:Promise<{lang:string}>};

export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {lang}=await params;
    if(!isLang(lang)) return {};
    const copy=(await getDictionary(lang)).componentPacks;
    return {title:copy.title,description:copy.subtitle,alternates:{canonical:"/"+lang+"/components/component-packs",languages:{en:"/en/components/component-packs",fa:"/fa/components/component-packs"}}};
}

export default async function ComponentPacksPage({params}:Props){
    const {lang}=await params;
    if(!isLang(lang)) notFound();
    const copy=(await getDictionary(lang)).componentPacks;
    const packs=getComponentPacks(lang);
    const featured=packs[0];

    return (
        <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
            <Header/>
            <section className="border-b border-zinc-200 bg-[#f8f7f4] pt-32 md:pt-36">
                <Container>
                    <div className={lang==="fa"?"text-right":"text-left"}>
                        <div className="flex flex-wrap items-center justify-between gap-5 font-mono text-[9px] uppercase tracking-[.25em] text-zinc-400">
                            <span>MINKITS / SOURCE COLLECTIONS</span>
                            <span>REACT / TAILWIND / READY TO SHIP</span>
                        </div>
                        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-400">{lang==="fa"?"محصولات کدنویسی آماده":"Source products for frontend teams"}</p>
                                <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.9] tracking-[-.075em] md:text-8xl">{copy.title}</h1>
                            </div>
                            <div>
                                <p className="text-sm leading-7 text-zinc-500">{copy.subtitle}</p>
                                <div className="mt-7 flex gap-8 border-t border-zinc-200 pt-4 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-400">
                                    <span>{String(packs.length).padStart(2,"0")} {lang==="fa"?"مجموعه":"collection"}</span>
                                    <span>{copy.blocks.length} {lang==="fa"?"بلاک":"blocks"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-10 md:py-16">
                <Container>
                    <div className={lang==="fa"?"mb-8 text-right":"mb-8 text-left"}>
                        <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">THE COLLECTION / 01</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-[-.05em] md:text-4xl">{lang==="fa"?"قبل از خرید، داخل محصول را ببینید.":"See the product before you buy the product."}</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">{lang==="fa"?"بلاک‌ها را انتخاب کنید، ساختار هرکدام را ببینید و بعد وارد صفحه پک شوید تا پیش‌نمایش و سورس هر بلاک را همان‌جا بررسی کنید.":"Select a block, inspect its shape, then enter the pack for the full inline preview/source experience."}</p>
                    </div>
                    <ComponentPacksExplorer lang={lang} packs={packs} blocks={copy.blocks} categories={copy.categories.slice(1)} searchPlaceholder={lang==="fa"?"جستجوی بلاک...":"Search blocks..."} allLabel={copy.categories[0]} resultsLabel={lang==="fa"?"بلاک":"BLOCKS"} noResults={lang==="fa"?"بلاکی پیدا نشد.":"No blocks found."} viewPack={copy.viewPack} featuredLabel={copy.includedLabel}/>
                </Container>
            </section>

            <section className="bg-zinc-950 text-white">
                <Container>
                    <div className={"grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_320px] lg:items-end "+(lang==="fa"?"text-right":"text-left")}>
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">WHY MIN KITS PACKS</p>
                            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-.06em] md:text-5xl">{lang==="fa"?"کد آماده‌ای که قرار است واقعاً وارد محصول شما شود.":"Source that is meant to leave the library and become your product."}</h2>
                            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500">{copy.principleText}</p>
                        </div>
                        <div className="border-t border-white/10 pt-5">
                            <p className="font-mono text-4xl tracking-[-.06em]">{featured.price}</p>
                            <p className="mt-2 text-xs leading-5 text-zinc-600">{lang==="fa"?"برای پک منتخب":"for the featured collection"}</p>
                            <Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="mt-6 flex items-center justify-between border border-white/15 px-4 py-3 text-xs font-semibold hover:bg-white hover:text-zinc-950">
                                <span>{copy.viewPack}</span><span aria-hidden="true">{lang==="fa"?"←":"→"}</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <FooterHeader/>
        </main>
    );
}
