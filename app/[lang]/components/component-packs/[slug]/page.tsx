import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Container from "@/components/ui/container";
import {FooterHeader, Header} from "@/components/layout";
import {getDictionary, isLang, locales} from "../../../../i18n";
import {getComponentPack, getComponentPacks} from "@/content/componentPacks";
import ComponentPackPreview from "@/components/sections/componentPackPreview/componentPackPreview";
import ComponentPackSourceVault from "@/components/sections/componentPackSourceVault/componentPackSourceVault";

type Props = {params: Promise<{lang: string; slug: string}>};

export async function generateStaticParams() {
    return locales.flatMap((lang) => getComponentPacks(lang).map((pack) => ({lang, slug: pack.slug})));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {lang, slug} = await params;
    if (!isLang(lang)) return {};
    const pack = getComponentPack(lang, slug);
    if (!pack) return {};

    return {
        title: pack.name,
        description: pack.description,
        alternates: {
            canonical: `/${lang}/components/component-packs/${slug}`,
            languages: {
                en: `/en/components/component-packs/${slug}`,
                fa: `/fa/components/component-packs/${slug}`,
            },
        },
        openGraph: {title: pack.name, description: pack.description},
    };
}

export default async function ComponentPackDetailPage({params}: Props) {
    const {lang, slug} = await params;
    if (!isLang(lang)) notFound();

    const copy = (await getDictionary(lang)).componentPacks;
    const pack = getComponentPack(lang, slug);
    if (!pack) notFound();

    return (
        <>
            <Header/>
            <main className="min-h-screen bg-white text-zinc-900">
                <section className="border-b border-zinc-200 bg-white">
                    <Container>
                        <div className={`py-14 md:py-20 ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <Link href={`/${lang}/components/component-packs`} className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
                                <span aria-hidden="true">{lang === "fa" ? "→" : "←"}</span> {copy.browse}
                            </Link>

                            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{pack.category}</p>
                                        <span className="h-1 w-1 rounded-full bg-zinc-300"/>
                                        <span className="text-xs font-medium text-zinc-500">{copy.badge}</span>
                                    </div>
                                    <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl">{pack.name}</h1>
                                    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">{pack.description}</p>
                                </div>
                                <div className={lang === "fa" ? "lg:text-left" : "lg:text-right"}>
                                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">{copy.earlyAccessLabel}</p>
                                    <p className="mt-2 text-3xl font-semibold">{pack.price}</p>
                                </div>
                            </div>

                            <div className="mt-8 grid max-w-3xl grid-cols-2 border-y border-zinc-200 py-5 sm:grid-cols-4">
                                {pack.stats.map((stat) => (
                                    <div key={stat.label} className="border-zinc-200 px-4 first:ps-0 last:pe-0 sm:border-s first:border-s-0">
                                        <p className="text-sm font-semibold">{stat.value}</p>
                                        <p className="mt-1 text-[11px] text-zinc-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
                    <Container>
                        <div className={lang === "fa" ? "text-right" : "text-left"}>
                            <div className="max-w-3xl">
                                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">01 / {copy.contentsLabel}</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-5xl">{copy.contentsTitle}</h2>
                            </div>

                            <div className="mt-10 grid border-y border-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
                                {pack.includes.map((item, index) => (
                                    <div key={item} className="border-b border-zinc-200 px-5 py-6 sm:nth-[odd]:border-e lg:border-e lg:nth-[4n]:border-e-0">
                                        <p className="font-mono text-[10px] text-zinc-400">{String(index + 1).padStart(2, "0")}</p>
                                        <p className="mt-8 text-sm font-semibold">{item}</p>
                                        <div className="mt-5 h-16 border border-zinc-200 bg-white p-2">
                                            <div className="grid h-full grid-cols-4 gap-1.5">
                                                <span className="col-span-2 bg-zinc-900"/>
                                                <span className="bg-zinc-200"/>
                                                <span className="bg-zinc-300"/>
                                                <span className="bg-zinc-200"/>
                                                <span className="col-span-3 bg-zinc-100"/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                <ComponentPackPreview lang={lang} copy={{
                    previewLabel: copy.previewSectionLabel,
                    previewTitle: copy.previewSectionTitle,
                    previewDescription: copy.previewDescription,
                    previewTabs: copy.previewTabs,
                    previewHint: copy.previewHint,
                }}/>

                <section className="border-b border-zinc-200 py-16 md:py-24">
                    <Container>
                        <div className={lang === "fa" ? "text-right" : "text-left"}>
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">03 / {copy.accessLabel}</p>
                            <div className="mt-4 grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-start">
                                <div>
                                    <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] md:text-5xl">{copy.accessTitle}</h2>
                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {pack.features.map((feature, index) => (
                                            <div key={feature} className="border border-zinc-200 p-5">
                                                <span className="font-mono text-[10px] text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                                                <p className="mt-8 text-sm font-semibold leading-6">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <aside className="border border-zinc-900 bg-zinc-950 p-7 text-white lg:sticky lg:top-28">
                                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{copy.earlyAccessLabel}</p>
                                    <p className="mt-4 text-4xl font-semibold">{pack.price}</p>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400">{copy.sourceDescription}</p>
                                    <Link href={`/${lang}/#contactUs`} className="mt-7 flex w-full items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                        {copy.cta}
                                    </Link>
                                </aside>
                            </div>
                        </div>
                    </Container>
                </section>

                <ComponentPackSourceVault lang={lang} dict={copy}/>
            </main>
            <FooterHeader/>
        </>
    );
}
