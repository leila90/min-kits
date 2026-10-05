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
    const {lang} = await params;
    if (!isLang(lang)) return {};
    const copy = (await getDictionary(lang)).componentPacks;

    return {
        title: copy.title,
        description: copy.subtitle,
        alternates: {
            canonical: "/" + lang + "/components/component-packs",
            languages: {en: "/en/components/component-packs", fa: "/fa/components/component-packs"},
        },
    };
}

export default async function ComponentPacksPage({params}: Props) {
    const {lang} = await params;
    if (!isLang(lang)) notFound();

    const copy = (await getDictionary(lang)).componentPacks;
    const packs = getComponentPacks(lang);
    const featured = packs[0];

    return (
        <>
            <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
                <section className="relative overflow-hidden bg-zinc-950 text-white">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -start-56 -top-72 h-[900px] w-[900px] rounded-full border border-white/[0.06]" />
                        <div className="absolute -start-16 -top-32 h-[650px] w-[650px] rounded-full border border-white/[0.05]" />
                        <div className="absolute end-[-240px] top-[-260px] h-[720px] w-[720px] rounded-full border border-[#c6922b]/15" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(198,146,43,0.12),transparent_28%),linear-gradient(110deg,rgba(255,255,255,0.015),transparent_48%)]" />
                    </div>

                    <Container>
                        <div className={`relative py-24 md:py-32 lg:py-36 ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5 text-[10px] font-bold uppercase tracking-[0.26em] text-zinc-600">
                                <span>MinKits / Blocks</span>
                                <Link href={"/" + lang + "/components"} className="hidden text-zinc-500 transition-colors hover:text-white sm:block">
                                    {lang === "fa" ? "کتابخانه کامپوننت‌ها ←" : "Component library →"}
                                </Link>
                            </div>

                            <div className="grid gap-14 pt-14 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-end lg:gap-20 lg:pt-20">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="border border-[#c6922b]/30 bg-[#c6922b]/[0.08] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d7b36b]">
                                            {copy.eyebrow}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600">
                                            {lang === "fa" ? "بلوک‌های آماده برای محصول" : "Production-ready blocks"}
                                        </span>
                                    </div>

                                    <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-[94px]">
                                        {copy.title}
                                    </h1>

                                    <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                                        {copy.subtitle}
                                    </p>

                                    <div className="mt-9 flex flex-wrap gap-2">
                                        {["React", "Tailwind CSS", "RTL ready", "Typed source"].map((item) => (
                                            <span key={item} className="border border-white/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative border border-white/10 bg-white/[0.025] p-5">
                                    <div className="mb-5 flex items-end justify-between border-b border-white/10 pb-4">
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">{copy.collectionLabel}</p>
                                            <p className="mt-1 text-sm font-semibold">{featured.name}</p>
                                        </div>
                                        <span className="text-sm font-semibold">{featured.price}</span>
                                    </div>

                                    <div className="grid grid-cols-6 gap-2">
                                        {Array.from({length: 12}, (_, index) => (
                                            <div key={index} className={`relative overflow-hidden border border-white/10 bg-zinc-900 ${index % 5 === 0 ? "col-span-2 row-span-2 min-h-24" : "min-h-11"}`}>
                                                <div className="absolute inset-x-2 top-2 h-1 bg-white/50" />
                                                <div className="absolute inset-x-2 top-5 h-1 bg-white/10" />
                                                <div className="absolute inset-x-2 bottom-2 h-3 border border-white/10 bg-white/[0.03]" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
                                        {copy.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <p className="text-xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                                                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <Header />

                <section className="border-b border-zinc-200 bg-[#f8f7f4]">
                    <Container>
                        <div className="py-16 md:py-24">
                            <div className={`mb-10 grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end ${lang === "fa" ? "text-right" : "text-left"}`}>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400">01 / {copy.collectionLabel}</p>
                                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] md:text-5xl">{copy.contentsTitle}</h2>
                                </div>
                                <p className="max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">{copy.principleText}</p>
                            </div>

                            <ComponentPacksExplorer
                                lang={lang}
                                packs={packs}
                                blocks={copy.blocks}
                                categories={copy.categories.slice(1)}
                                searchPlaceholder={lang === "fa" ? "جستجو در بلاک‌ها..." : "Search blocks..."}
                                allLabel={copy.categories[0]}
                                resultsLabel={lang === "fa" ? "نمایش" : "Showing"}
                                noResults={lang === "fa" ? "بلاکی با این فیلتر پیدا نشد." : "No blocks match your filters."}
                                viewPack={copy.viewPack}
                                featuredLabel={lang === "fa" ? "پک منتخب" : "Featured pack"}
                            />
                        </div>
                    </Container>
                </section>

                <section className="bg-zinc-950 py-20 text-white md:py-28">
                    <Container>
                        <div className={`grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-end ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-600">02 / {copy.philosophyLabel}</p>
                                <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-5xl">{copy.principleTitle}</h2>
                            </div>
                            <div>
                                <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">{copy.principleText}</p>
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {featured.includes.slice(0, 6).map((item) => (
                                        <span key={item} className="border border-white/10 px-3 py-2 text-[10px] font-medium text-zinc-500">{item}</span>
                                    ))}
                                </div>
                                <Link href={"/" + lang + "/components/component-packs/" + featured.slug} className="mt-9 inline-flex items-center gap-10 bg-white px-6 py-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200">
                                    {copy.viewPack}
                                    <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <FooterHeader />
        </>
    );
}
