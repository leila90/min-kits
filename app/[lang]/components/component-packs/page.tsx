import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Container from "@/components/ui/container";
import {FooterHeader, Header} from "@/components/layout";
import {getDictionary, isLang} from "../../../i18n";
import {getComponentPacks} from "@/content/componentPacks";

type Props = {params: Promise<{lang: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {lang} = await params;
    if (!isLang(lang)) return {};
    const copy = (await getDictionary(lang)).componentPacks;
    return {
        title: copy.title,
        description: copy.subtitle,
        alternates: {
            canonical: `/${lang}/components/component-packs`,
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
            <main className="min-h-screen bg-white text-zinc-900">
                <section className="relative overflow-hidden border-b border-black/8 bg-zinc-950 text-white">
                    <Container>
                        <div className={`grid min-h-[680px] items-center gap-14 py-28 md:py-36 lg:grid-cols-[1.05fr_.95fr] ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{copy.eyebrow}</p>
                                <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{copy.title}</h1>
                                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">{copy.subtitle}</p>
                                <div className="mt-9 flex flex-wrap gap-3">
                                    <Link href="#packs" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                        {copy.browse}
                                    </Link>
                                    <Link href={`/${lang}/#contactUs`} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                        {copy.cta}
                                    </Link>
                                </div>
                                <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">
                                    {copy.stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className="text-xl font-semibold">{stat.value}</p>
                                            <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-8 rounded-[3rem] bg-white/10 blur-3xl" />
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
                                    <Image
                                        src={packs[0].image}
                                        alt={packs[0].name}
                                        width={1000}
                                        height={700}
                                        className="aspect-[4/3] w-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-zinc-950 via-zinc-950/70 to-transparent p-7 pt-28">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{packs[0].category}</p>
                                        <p className="mt-2 text-2xl font-semibold">{packs[0].name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <Header />

                <section id="packs" className="scroll-mt-28 py-20 md:py-28">
                    <Container>
                        <div className={`border-b border-black/10 pb-8 ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">01 / {copy.collectionLabel}</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{copy.browse}</h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">{copy.principleText}</p>
                        </div>

                        <div className="grid gap-6 pt-10 lg:grid-cols-2">
                            {packs.map((pack) => (
                                <article key={pack.slug} className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                                        <Image src={pack.image} alt={pack.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <span className="absolute start-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-700 backdrop-blur">{pack.status === "early-access" ? copy.badge : "Available"}</span>
                                    </div>
                                    <div className={`p-7 md:p-8 ${lang === "fa" ? "text-right" : "text-left"}`}>
                                        <div className="flex items-start justify-between gap-5">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{pack.category}</p>
                                                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{pack.name}</h3>
                                            </div>
                                            <p className="text-xl font-semibold">{pack.price}</p>
                                        </div>
                                        <p className="mt-4 text-sm leading-7 text-zinc-500">{pack.description}</p>
                                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                                            {pack.features.slice(0, 4).map((feature) => (
                                                <li key={feature} className="text-sm text-zinc-600">✓ {feature}</li>
                                            ))}
                                        </ul>
                                        <Link href={`/${lang}/components/component-packs/${pack.slug}`} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
                                            {copy.viewPack}
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Container>
                </section>

                <section className="border-y border-black/8 bg-zinc-50 py-20 md:py-28">
                    <Container>
                        <div className={`max-w-3xl ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">02 / {copy.philosophyLabel}</p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{copy.principleTitle}</h2>
                            <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">{copy.principleText}</p>
                        </div>
                    </Container>
                </section>
            </main>
            <FooterHeader/>
        </>
    );
}
