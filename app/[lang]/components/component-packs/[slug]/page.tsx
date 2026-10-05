import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Container from "@/components/ui/container";
import {FooterHeader, Header} from "@/components/layout";
import {getDictionary, isLang, locales} from "../../../../i18n";
import {getComponentPack, getComponentPacks} from "@/content/componentPacks";
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
            <main className="min-h-screen bg-white text-zinc-900">
                <section className="border-b border-black/8 bg-zinc-950 text-white">
                    <Container>
                        <div className={`py-28 md:py-36 ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <Link href={`/${lang}/components/component-packs`} className="text-sm font-semibold text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                <span aria-hidden="true">{lang === "fa" ? "→" : "←"}</span> {copy.browse}
                            </Link>
                            <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{pack.category}</p>
                                    <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{pack.name}</h1>
                                    <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">{pack.description}</p>
                                    <div className="mt-8 flex flex-wrap items-center gap-4">
                                        <span className="text-2xl font-semibold">{pack.price}</span>
                                        <Link href={`/${lang}/#contactUs`} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                            {copy.cta}
                                        </Link>
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                                    <Image src={pack.image} alt={pack.name} width={1000} height={700} className="aspect-[4/3] w-full object-cover"/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <Header/>

                <ComponentPackSourceVault lang={lang} dict={copy}/>

                <section className="py-20 md:py-28">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
                            <div className={lang === "fa" ? "text-right" : "text-left"}>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">01 / {copy.includedLabel}</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{copy.includedTitle}</h2>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {pack.includes.map((item, index) => (
                                        <div key={item} className="rounded-2xl border border-black/8 bg-zinc-50 p-5">
                                            <span className="font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                                            <p className="mt-3 font-semibold">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <aside className="h-fit rounded-[2rem] border border-black/10 bg-zinc-950 p-7 text-white lg:sticky lg:top-28">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{copy.earlyAccessLabel}</p>
                                <div className="mt-4 flex items-end justify-between gap-4">
                                    <p className="text-4xl font-semibold">{pack.price}</p>
                                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-zinc-300">{copy.badge}</span>
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
                                <Link href={`/${lang}/#contactUs`} className="mt-8 flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                    {copy.cta}
                                </Link>
                            </aside>
                        </div>
                    </Container>
                </section>
            </main>
            <FooterHeader/>
        </>
    );
}
