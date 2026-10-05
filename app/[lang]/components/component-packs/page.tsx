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
            <Header />
            <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-zinc-950">
                <section className="relative border-b border-zinc-800 bg-zinc-950 text-white">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute -start-32 top-20 h-80 w-80 rounded-full border border-white/10" />
                        <div className="absolute -start-12 top-40 h-56 w-56 rounded-full border border-white/5" />
                        <div className="absolute end-[-12%] top-[-35%] h-[720px] w-[720px] rounded-full border border-white/[0.07]" />
                        <div className="absolute end-[4%] top-[-18%] h-[500px] w-[500px] rounded-full border border-white/[0.05]" />
                    </div>
                    <Container>
                        <div className={`relative py-20 md:py-28 lg:py-32 ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <div className="mb-14 flex items-center justify-between gap-6 border-b border-white/10 pb-5">
                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                                    <span>MinKits / Blocks</span><span className="h-px w-10 bg-zinc-700" />
                                    <span>{String(packs.length).padStart(2, "0")} {lang === "fa" ? "پک" : "packs"}</span>
                                </div>
                                <Link href={"/" + lang + "/components"} className="hidden text-xs font-semibold text-zinc-400 hover:text-white sm:block">
                                    {lang === "fa" ? "مشاهده کتابخانه کامپوننت‌ها ←" : "Explore component library →"}
                                </Link>
                            </div>

                            <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:items-center lg:gap-20">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">{copy.eyebrow}</p>
                                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.065em] md:text-7xl lg:text-[92px] lg:leading-[0.92]">{copy.title}</h1>
                                    <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">{copy.subtitle}</p>
                                    <div className="mt-10 flex flex-wrap gap-3">
                                        <Link href="#packs" className="bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 hover:-translate-y-0.5"> {copy.browse} </Link>
                                        <Link href={"/" + lang + "/#contactUs"} className="border border-white/15 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5">{copy.cta}</Link>
                                    </div>
                                    <div className="mt-14 grid max-w-2xl grid-cols-3 border-y border-white/10">
                                        {copy.stats.map((stat, index) => (
                                            <div key={stat.label} className={"py-5 " + (index > 0 ? "border-s border-white/10 ps-5" : "")}>
                                                <p className="text-xl font-semibold md:text-2xl">{stat.value}</p>
                                                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -inset-8 bg-white/[0.045] blur-3xl" />
                                    <div className="relative border border-white/10 bg-zinc-900 p-2 shadow-[0_40px_100px_rgb(0_0_0_/0.35)]">
                                        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                                            <Image src={featured.image} alt={featured.name} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-75" />
                                            <div className="absolute inset-0 bg-linear-to-tr from-zinc-950/90 via-transparent to-white/5" />
                                            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                                                <div className="flex items-end justify-between gap-5">
                                                    <div>
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">{featured.category}</p>
                                                        <p className="mt-2 text-2xl font-semibold md:text-3xl">{featured.name}</p>
                                                    </div>
                                                    <span className="border border-white/15 bg-black/20 px-3 py-1.5 text-xs font-semibold backdrop-blur">{featured.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                                            <span>Preview / Source / React</span><span>{featured.stats[0]?.value} blocks</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section id="packs" className="scroll-mt-28 border-b border-zinc-200 py-20 md:py-28">
                    <Container>
                        <div className={`mb-12 flex flex-col justify-between gap-6 border-b border-zinc-200 pb-7 md:flex-row md:items-end ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400">01 / {copy.collectionLabel}</p>
                                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">{copy.browse}</h2>
                            </div>
                            <p className="max-w-xl text-sm leading-7 text-zinc-500">{copy.principleText}</p>
                        </div>

                        <div className="space-y-5">
                            {packs.map((pack, index) => (
                                <article key={pack.slug} className="group grid overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-[0_28px_80px_rgb(0_0_0_/0.08)] lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
                                    <div className="relative min-h-72 overflow-hidden bg-zinc-100 lg:min-h-[420px]">
                                        <Image src={pack.image} alt={pack.name} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover grayscale-[0.15] transition-transform duration-700 group-hover:scale-[1.025]" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{String(index + 1).padStart(2, "0")} / {pack.category}</span>
                                                <p className="mt-2 text-xl font-semibold">{pack.name}</p>
                                            </div>
                                            <span className="border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-semibold backdrop-blur">{pack.price}</span>
                                        </div>
                                    </div>

                                    <div className={`flex flex-col justify-between p-7 md:p-10 ${lang === "fa" ? "text-right" : "text-left"}`}>
                                        <div>
                                            <div className="flex items-center justify-between gap-5 border-b border-zinc-100 pb-5">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">{pack.status === "early-access" ? copy.badge : "Available"}</span>
                                                <span className="text-xs font-medium text-zinc-400">{pack.stats.map((stat) => stat.value).join(" · ")}</span>
                                            </div>
                                            <h3 className="mt-7 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">{pack.name}</h3>
                                            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">{pack.description}</p>
                                            <div className="mt-8 grid gap-x-8 gap-y-3 border-y border-zinc-100 py-6 sm:grid-cols-2">
                                                {pack.features.map((feature) => (
                                                    <div key={feature} className="flex items-start gap-3 text-sm text-zinc-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-zinc-900" /><span>{feature}</span></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-3 text-xs text-zinc-400"><span className="font-mono">{pack.includes.length.toString().padStart(2, "0")}</span><span>{lang === "fa" ? "دسته محتوایی" : "content groups"}</span></div>
                                            <Link href={"/" + lang + "/components/component-packs/" + pack.slug} className="inline-flex items-center justify-between gap-8 bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5">
                                                {copy.viewPack}<span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Container>
                </section>

                <section className="relative overflow-hidden bg-zinc-950 py-20 text-white md:py-28">
                    <div className="pointer-events-none absolute end-[-10%] top-[-60%] h-[700px] w-[700px] rounded-full border border-white/[0.06]" />
                    <Container>
                        <div className={`relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end ${lang === "fa" ? "text-right" : "text-left"}`}>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-600">02 / {copy.philosophyLabel}</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">{copy.principleTitle}</h2>
                            </div>
                            <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">{copy.principleText}</p>
                        </div>
                    </Container>
                </section>
            </main>
            <FooterHeader />
        </>
    );
}