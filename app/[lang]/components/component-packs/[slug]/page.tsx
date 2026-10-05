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
                                <div className={`lg:text-${lang === "fa" ? "left" : "right"}`}>
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

                <ComponentPackPreview lang={lang} copy={{
                    previewLabel: copy.previewLabel,
                    previewTitle: copy.previewTitle,
                    previewDescription: copy.previewDescription,
                    previewTabs: copy.previewTabs,
                    previewHint: copy.previewHint,
                }}/>

                <section className="py-20 md:py-28">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
                            <div className={lang === "fa" ? "text-right" : "text-left"}>
                                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">02 / {copy.includedLabel}</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{copy.includedTitle}</h2>
                                <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
                                    {pack.includes.map((item, index) => (
                                        <div key={item} className="grid grid-cols-[48px_1fr] gap-4 py-5">
                                            <span className="font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                                            <p className="font-semibold">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <aside className="h-fit border border-zinc-200 bg-zinc-950 p-7 text-white lg:sticky lg:top-28">
                                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{copy.earlyAccessLabel}</p>
                                <div className="mt-4 flex items-end justify-between gap-4">
                                    <p className="text-4xl font-semibold">{pack.price}</p>
                                    <span className="border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">{copy.badge}</span>
                                </div>
                                <div className="mt-7 grid grid-cols-3 border-y border-white/10 py-5">
                                    {pack.stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className="text-lg font-semibold">{stat.value}</p>
                                            <p className="mt-1 text-[11px] text-zinc-500">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <ul className="mt-6 space-y-3">
                                    {pack.features.map((feature) => <li key={feature} className="text-sm leading-6 text-zinc-300">✓ {feature}</li>)}
                                </ul>
                                <Link href={`/${lang}/#contactUs`} className="mt-8 flex w-full items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                    {copy.cta}
                                </Link>
                            </aside>
                        </div>
                    </Container>
                </section>

                <ComponentPackSourceVault lang={lang} dict={copy}/>
            </main>
            <FooterHeader/>
        </>
    );
}
