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

    return (
        <>
            <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
                <section className="relative overflow-hidden border-b border-zinc-200 bg-[#f8f7f4]">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -start-40 -top-44 h-[620px] w-[620px] rounded-full border border-zinc-200/70" />
                        <div className="absolute -start-20 -top-24 h-[430px] w-[430px] rounded-full border border-zinc-200/60" />
                        <div className="absolute end-[-8%] top-[-24%] h-[620px] w-[620px] rounded-full border border-zinc-300/60" />
                        <div className="absolute end-[6%] top-[-10%] h-[390px] w-[390px] rounded-full border border-zinc-200/70" />
                        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_72%_20%,rgba(255,255,255,0.9),transparent_58%)]" />
                    </div>
                    <Container>
                        <div className={"relative " + (lang === "fa" ? "text-right" : "text-left")}>
                            <div className="flex items-center justify-between gap-6 border-b border-zinc-200 py-5 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                                <span>MinKits / Blocks</span>
                                <Link href={"/" + lang + "/components"} className="hidden text-zinc-500 transition-colors hover:text-zinc-950 sm:block">
                                    {lang === "fa" ? "کتابخانه کامپوننت‌ها ←" : "Component library →"}
                                </Link>
                            </div>
                            <div className="grid gap-12 py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.48fr)] lg:gap-20 lg:py-28">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="inline-flex items-center gap-2 border border-white/80 bg-white/55 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-500 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
                                            MinKits / Blocks
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400">{copy.eyebrow}</span>
                                    </div>
                                    <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-[92px]">{copy.title}</h1>
                                    <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">{copy.subtitle}</p>
                                    <div className="mt-9 flex flex-wrap gap-2">
                                        {["React", "Tailwind CSS", "RTL ready", "Production UI"].map((item) => (
                                            <span key={item} className="border border-white/80 bg-white/45 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-zinc-500 shadow-[0_10px_30px_rgba(0,0,0,0.035)] backdrop-blur-xl">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative self-end overflow-hidden border border-white/80 bg-white/45 p-5 shadow-[0_24px_70px_rgba(24,24,27,0.07)] backdrop-blur-xl">
                                    <div className="absolute -end-20 -top-20 h-48 w-48 rounded-full border border-zinc-200/80" />
                                    <div className="relative">
                                        <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4">
                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">{copy.collectionLabel}</p>
                                                <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">{packs[0].name}</p>
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">{packs[0].price}</span>
                                        </div>
                                        <div className="mt-5 grid grid-cols-3 gap-2">
                                            {["h-24", "h-16", "h-20", "h-14", "h-20", "h-16"].map((height, index) => (
                                                <div key={index} className={"relative overflow-hidden border border-zinc-200 bg-[#eeece7] " + height}>
                                                    <div className="absolute inset-x-2 top-2 h-1.5 bg-zinc-900/75" />
                                                    <div className="absolute inset-x-2 top-6 h-1 bg-zinc-300" />
                                                    <div className="absolute inset-x-2 bottom-2 h-5 border border-zinc-200 bg-white" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-zinc-200/80 pt-4">
                                            {copy.stats.map((stat) => (
                                                <div key={stat.label}>
                                                    <p className="text-lg font-semibold tracking-[-0.04em]">{stat.value}</p>
                                                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-400">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <Header />
                <section className="border-b border-zinc-200 bg-white">
                    <Container>
                        <div className="py-8 md:py-10">
                            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                                <div className={lang === "fa" ? "text-right" : "text-left"}>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-zinc-400">01 / {copy.collectionLabel}</p>
                                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{copy.contentsTitle}</h2>
                                </div>
                                <p className="max-w-lg text-sm leading-6 text-zinc-500 md:text-right">{copy.principleText}</p>
                            </div>
                            <ComponentPacksExplorer
                                lang={lang}
                                packs={packs}
                                blocks={copy.blocks}
                                categories={copy.categories.slice(1)}
                                searchPlaceholder={lang === "fa" ? "جستجو در بلاک‌ها..." : "Search block sections..."}
                                allLabel={copy.categories[0]}
                                resultsLabel={lang === "fa" ? "نتایج" : "Showing"}
                                noResults={lang === "fa" ? "بلاکی با این فیلتر پیدا نشد." : "No blocks match your filters."}
                                viewPack={copy.viewPack}
                                featuredLabel={lang === "fa" ? "پک منتخب" : "Featured pack"}
                            />
                        </div>
                    </Container>
                </section>
                <section className="bg-zinc-950 py-20 text-white md:py-24">
                    <Container>
                        <div className={"grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end " + (lang === "fa" ? "text-right" : "text-left")}>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-600">02 / {copy.philosophyLabel}</p>
                                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">{copy.principleTitle}</h2>
                            </div>
                            <div className="max-w-3xl">
                                <p className="text-base leading-8 text-zinc-400 md:text-lg">{copy.principleText}</p>
                                <Link href={"/" + lang + "/components/component-packs/" + packs[0].slug} className="mt-8 inline-flex bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200">
                                    {copy.viewPack} <span className="ms-6" aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
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
