import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import Hero from "@/components/sections/hero/hero";
import FeaturedComponents from "@/components/sections/featuredComponents/featuredComponents";
import MyFeatures from "@/components/sections/myFeatures/myFeatures";
import ComponentStore from "@/components/sections/componentStore/componentStore";
import LatestBlog from "@/components/sections/latestBlog/latestBlog";
import Container from "@/components/ui/container";
import {getDictionary, isLang} from "../i18n";

export const metadata: Metadata = {
    title: {absolute: "MinKits | UI components for modern product teams"},
};

export default async function Home({params}: {params: Promise<{lang: string}>}) {
    const {lang} = await params;

    if (!isLang(lang)) {
        notFound();
    }

    const dict = await getDictionary(lang);

    return (
        <main>
            <Hero lang={lang} dict={dict.hero}/>
            <FeaturedComponents lang={lang} dict={dict.featuredComponents}/>
            <MyFeatures lang={lang} dict={dict.features}/>
            <ComponentStore lang={lang} dict={dict.componentStore}/>
            <LatestBlog
                lang={lang}
                dict={{
                    title: dict.blog.title,
                    subtitle: dict.blog.subtitle,
                    viewAll: dict.blog.viewAll,
                    readMore: dict.blog.readMore,
                }}
            />
            <section className="px-4 pb-20 pt-8 md:pb-28 md:pt-12">
                <Container>
                    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 px-6 py-12 text-white shadow-sm dark:border-zinc-800 sm:px-10 md:px-16 md:py-16">
                        <div aria-hidden="true" className="pointer-events-none absolute -end-16 -top-24 size-72 rounded-full border border-white/10 sm:size-96"/>
                        <div aria-hidden="true" className="pointer-events-none absolute -end-4 -top-12 size-52 rounded-full border border-white/10 sm:size-72"/>
                        <div className={lang === "fa" ? "relative max-w-2xl text-right" : "relative max-w-2xl text-left"}>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">MinKits / Start building</p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{dict.homeCta.title}</h2>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">{dict.homeCta.description}</p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link href={"/" + lang + "/components"} className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                    {dict.homeCta.components}
                                </Link>
                                <Link href={"/" + lang + "/components/component-packs"} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                    {dict.homeCta.packs}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
