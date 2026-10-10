import Link from "next/link";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import {componentRegistry} from "@/components/registry";
import type {Lang} from "@/app/i18n/config";

type Props = {
    lang: Lang;
    dict: {
        title: string;
        subtitle: string;
        viewAll: string;
    };
};


function ComponentPreview({slug, lang}: {slug: string; lang: Lang}) {
    const isFa = lang === "fa";
    return (
        <div aria-hidden="true" className="flex h-36 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
            {slug === "button" ? (
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900">{isFa ? "ادامه" : "Continue"}</span>
                    <span className="rounded-lg border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">{isFa ? "لغو" : "Cancel"}</span>
                </div>
            ) : slug === "input" || slug === "textarea" ? (
                <div className="w-full max-w-xs rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="mb-2 h-2 w-16 rounded-full bg-zinc-400"/>
                    <div className={slug === "textarea" ? "h-14 rounded-lg border border-zinc-200 dark:border-zinc-700" : "rounded-lg border border-zinc-200 px-3 py-2.5 text-left text-xs text-zinc-400 dark:border-zinc-700"}>{slug === "input" ? "name@example.com" : null}</div>
                </div>
            ) : slug === "badge" ? (
                <div className="flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-zinc-900 px-3 py-1.5 text-[11px] font-semibold text-white dark:bg-white dark:text-zinc-900">Default</span>
                    <span className="rounded-full border border-zinc-300 px-3 py-1.5 text-[11px] font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">Outline</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-[11px] font-semibold text-emerald-800">Success</span>
                </div>
            ) : (
                <div className="w-full max-w-xs rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="h-2 w-1/3 rounded-full bg-zinc-300 dark:bg-zinc-700"/>
                    <div className="mt-4 h-px w-full bg-zinc-200 dark:bg-zinc-800"/>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800"/>
                        <div className="h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800"/>
                        <div className="h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800"/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function FeaturedComponents({lang, dict}: Props) {
    const items = componentRegistry.slice(0, 6);

    return (
        <section className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-24">
            <Container>
                <div className={lang === "fa" ? "text-right" : "text-left"}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">MinKits / Components</p>
                    <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-4xl">{dict.title}</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400 md:text-lg">{dict.subtitle}</p>
                        </div>
                        <Link href={`/${lang}/components`} className="shrink-0 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:text-zinc-100 dark:hover:decoration-zinc-100">
                            {dict.viewAll}
                        </Link>
                    </div>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <Link key={item.slug} href={`/${lang}/components/${item.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500">
                            <Card interactive className="h-full p-4 transition duration-200 group-hover:-translate-y-1 sm:p-5">
                                <ComponentPreview slug={item.slug} lang={lang}/>
                                <div className="flex items-center justify-between gap-3">
                                    <Badge>{item.category === "form" ? (lang === "fa" ? "فرم" : "Form") : item.category === "layout" ? (lang === "fa" ? "چیدمان" : "Layout") : item.category === "feedback" ? (lang === "fa" ? "بازخورد" : "Feedback") : (lang === "fa" ? "ناوبری" : "Navigation")}</Badge>
                                    <span aria-hidden="true" className="text-zinc-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">{item.name[lang]}</h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{item.description[lang]}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
