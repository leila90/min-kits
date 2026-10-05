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
            <section className="pt-28 md:pt-36">
                <Container>
                    <div className={"grid gap-10 border-b border-zinc-200 pb-10 md:pb-14 lg:grid-cols-[1fr_320px] "+(lang==="fa"?"text-right":"text-left")}>
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[.3em] text-zinc-400">MINKITS / SHOP / BLOCKS</p>
                            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">{copy.title}</h1>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-sm leading-7 text-zinc-500">{copy.subtitle}</p>
                            <div className="mt-7 flex items-center justify-between border-t border-zinc-200 pt-4 font-mono text-[9px] uppercase tracking-[.15em] text-zinc-400">
                                <span>{packs.length} {lang==="fa"?"پک":"packs"}</span><span>React / Tailwind</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-8 md:py-12">
                <Container>
                    <div className="grid gap-0 border-y border-zinc-200 lg:grid-cols-[220px_minmax(0,1fr)]">
                        <aside className={"border-b border-zinc-200 py-7 lg:border-b-0 lg:border-e lg:py-9 "+(lang==="fa"?"text-right":"text-left")}>
                            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400">PRODUCT / 01</p>
                            <h2 className="mt-5 text-2xl font-semibold tracking-[-.05em]">{featured.name}</h2>
                            <p className="mt-3 text-xs leading-6 text-zinc-500">{featured.description}</p>
                            <div className="mt-8 border-y border-zinc-200 py-4">
                                <div className="flex items-end justify-between"><span className="text-xs text-zinc-400">{lang==="fa"?"قیمت":"Price"}</span><strong className="text-2xl tracking-[-.05em]">{featured.price}</strong></div>
                            </div>
                            <Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="mt-6 flex items-center justify-between bg-zinc-950 px-4 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5">
                                <span>{lang==="fa"?"مشاهده پک":"View pack"}</span><span aria-hidden="true">{lang==="fa"?"←":"→"}</span>
                            </Link>
                        </aside>
                        <ComponentPacksExplorer lang={lang} packs={packs} blocks={copy.blocks} categories={copy.categories.slice(1)} searchPlaceholder={lang==="fa"?"جستجوی بلاک...":"Search blocks..."} allLabel={copy.categories[0]} resultsLabel={lang==="fa"?"بلاک":"BLOCKS"} noResults={lang==="fa"?"بلاکی با این مشخصات پیدا نشد.":"No blocks match this filter."} viewPack={lang==="fa"?"مشاهده پک":"View pack"} featuredLabel={copy.includedLabel}/>
                    </div>
                </Container>
            </section>

            <section className="border-y border-zinc-200 bg-zinc-950 text-white">
                <Container>
                    <div className={"grid gap-10 py-14 md:py-20 lg:grid-cols-[220px_1fr] "+(lang==="fa"?"text-right":"text-left")}>
                        <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">WHY PACKS</p>
                        <div>
                            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-.055em] md:text-5xl">{copy.principleTitle}</h2>
                            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500">{copy.principleText}</p>
                        </div>
                    </div>
                </Container>
            </section>
            <FooterHeader/>
        </main>
    );
}