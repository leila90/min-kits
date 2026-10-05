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

export default function FeaturedComponents({lang, dict}: Props) {
    const items = componentRegistry.slice(0, 6);

    return (
        <section className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-24">
            <Container>
                <div className={lang === "fa" ? "text-right" : "text-left"}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">MinKits / Components</p>
                    <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">{dict.title}</h2>
                            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">{dict.subtitle}</p>
                        </div>
                        <Link href={`/${lang}/components`} className="shrink-0 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500">
                            {dict.viewAll}
                        </Link>
                    </div>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <Link key={item.slug} href={`/${lang}/components/${item.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500">
                            <Card interactive className="h-full p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <Badge>{item.category === "form" ? (lang === "fa" ? "فرم" : "Form") : item.category === "layout" ? (lang === "fa" ? "چیدمان" : "Layout") : item.category === "feedback" ? (lang === "fa" ? "بازخورد" : "Feedback") : (lang === "fa" ? "ناوبری" : "Navigation")}</Badge>
                                    <span aria-hidden="true" className="text-zinc-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-zinc-950">{item.name[lang]}</h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-500">{item.description[lang]}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
