import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Container from "@/components/ui/container";
import {FooterHeader, Header} from "@/components/layout";
import {getDictionary, isLang} from "../../../i18n";
import {getComponentPacks} from "@/content/componentPacks";
import ComponentPacksExplorer from "@/components/sections/componentPacksExplorer/componentPacksExplorer";

type Props = {params: Promise<{lang: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {lang}=await params;
    if (!isLang(lang)) return {};
    const copy=(await getDictionary(lang)).componentPacks;
    return {title:copy.title,description:copy.subtitle,alternates:{canonical:"/"+lang+"/components/component-packs",languages:{en:"/en/components/component-packs",fa:"/fa/components/component-packs"}}};
}

export default async function ComponentPacksPage({params}: Props) {
    const {lang}=await params;
    if (!isLang(lang)) notFound();

    const copy=(await getDictionary(lang)).componentPacks;
    const packs=getComponentPacks(lang);
    const featured=packs[0];

    return (
        <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
            <Header/>

            <section className="border-b border-zinc-200 bg-zinc-950 text-white">
                <Container>
                    <div className={"grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:py-32 "+(lang==="fa" ? "text-right" : "text-left")}>
                        <div>
                            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.25em] text-zinc-600">
                                <span>MINKITS / BLOCKS</span><span className="h-px w-12 bg-zinc-700"/><span>01 / {featured.category}</span>
                            </div>
                            <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-.075em] md:text-8xl lg:text-[112px]">BLOCKS</h1>
                            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">{copy.subtitle}</p>
                        </div>
                        <div className="border-t border-white/10 pt-5">
                            <p className="font-mono text-3xl tracking-[-.06em]">{featured.name}</p>
                            <p className="mt-3 text-xs leading-6 text-zinc-500">{featured.description}</p>
                            <div className="mt-7 flex items-end justify-between gap-5">
                                <span className="text-4xl font-semibold tracking-[-.06em]">{featured.price}</span>
                                <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#c6922b]">{copy.earlyAccessLabel}</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="border-b border-zinc-200 bg-[#f8f7f4]">
                <Container>
                    <div className={"flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between "+(lang==="fa" ? "text-right" : "text-left")}>
                        <div><p className="font-mono text-[9px] uppercase tracking-[.24em] text-zinc-400">01 / COLLECTION</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.05em]">{featured.name}</h2></div>
                        <div className="flex flex-wrap gap-2">{featured.stats.map((stat)=><span key={stat.label} className="border border-zinc-200 bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[.12em] text-zinc-500">{stat.value} · {stat.label}</span>)}</div>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-20">
                <Container>
                    <div className="mb-8 flex items-end justify-between gap-6 border-b border-zinc-200 pb-6">
                        <div className={lang==="fa" ? "text-right" : "text-left"}>
                            <p className="font-mono text-[9px] uppercase tracking-[.24em] text-zinc-400">02 / EXPLORER</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-[-.055em]">{copy.contentsTitle}</h2>
                        </div>
                        <Link href={"/"+lang+"/components"} className="hidden text-xs font-semibold underline decoration-zinc-300 underline-offset-8 hover:decoration-zinc-950 sm:block">{lang==="fa" ? "کتابخانه کامپوننت‌ها ←" : "Component library →"}</Link>
                    </div>
                    <ComponentPacksExplorer lang={lang} packs={packs} blocks={copy.blocks} categories={copy.categories.slice(1)} searchPlaceholder={copy.previewSectionTitle} allLabel={copy.categories[0]} resultsLabel={lang==="fa" ? "نتایج" : "RESULTS"} noResults={lang==="fa" ? "بلاکی با این مشخصات پیدا نشد." : "No blocks match this filter."} viewPack={copy.viewPack} featuredLabel={copy.includedLabel}/>
                </Container>
            </section>

            <section className="border-y border-zinc-200 bg-white">
                <Container>
                    <div className={"grid gap-12 py-16 md:py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-start "+(lang==="fa" ? "text-right" : "text-left")}>
                        <div><p className="font-mono text-[9px] uppercase tracking-[.24em] text-zinc-400">03 / APPROACH</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.06em]">{copy.principleTitle}</h2></div>
                        <p className="max-w-2xl text-base leading-8 text-zinc-500">{copy.principleText}</p>
                    </div>
                </Container>
            </section>

            <FooterHeader/>
        </main>
    );
}
