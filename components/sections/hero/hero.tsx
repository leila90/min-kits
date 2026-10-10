import Link from "next/link";
import Container from "@/components/ui/container";

type HeroProps = {
    lang: "fa" | "en";
    dict: {
        eyebrow: string;
        title: string;
        description: string;
        explore: string;
        components: string;
    };
};

function InterfacePreview({lang}: {lang: "fa" | "en"}) {
    const isFa = lang === "fa";

    return (
        <div aria-label={isFa ? "پیش‌نمایش رابط کاربری" : "UI component preview"} className="relative mx-auto w-full max-w-xl" dir="ltr">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-zinc-200/70 blur-2xl dark:bg-zinc-800/50"/>
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3 dark:border-zinc-800 sm:px-5">
                    <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>
                        <span className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>
                        <span className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600"/>
                    </div>
                    <span className="text-[11px] font-medium tracking-wide text-zinc-400">MINKITS / UI LIBRARY</span>
                </div>
                <div className="grid gap-5 p-5 sm:grid-cols-[0.9fr_1.1fr] sm:gap-7 sm:p-7">
                    <div className="flex flex-col justify-between gap-6">
                        <div>
                            <span className="inline-flex rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-semibold text-zinc-500 dark:border-zinc-700 dark:text-zinc-300">COMPONENT PREVIEW</span>
                            <div className="mt-4 space-y-2">
                                <div className="h-3 w-4/5 rounded-full bg-zinc-900 dark:bg-zinc-100"/>
                                <div className="h-3 w-3/5 rounded-full bg-zinc-200 dark:bg-zinc-700"/>
                                <div className="h-3 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-700"/>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-lg bg-zinc-900 px-3 py-2 text-[10px] font-semibold text-white dark:bg-white dark:text-zinc-900">{isFa ? "شروع کنید" : "Get started"}</span>
                                <span className="rounded-lg border border-zinc-200 px-3 py-2 text-[10px] font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">{isFa ? "جزئیات" : "Learn more"}</span>
                            </div>
                        </div>
                        <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-medium text-zinc-500">{isFa ? "وضعیت کامپوننت" : "Component status"}</span>
                                <span className="size-2 rounded-full bg-emerald-500"/>
                            </div>
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                                <div className="h-full w-4/5 rounded-full bg-zinc-800 dark:bg-zinc-200"/>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950 sm:p-4">
                        <div className="flex items-center justify-between">
                            <div className="h-2.5 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700"/>
                            <span className="rounded-md bg-white px-2 py-1 text-[9px] text-zinc-500 shadow-sm dark:bg-zinc-800 dark:text-zinc-300">Preview</span>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="size-7 rounded-lg bg-zinc-900 dark:bg-zinc-100"/>
                                <div className="mt-4 h-2 w-4/5 rounded-full bg-zinc-300 dark:bg-zinc-700"/>
                                <div className="mt-2 h-2 w-3/5 rounded-full bg-zinc-200 dark:bg-zinc-800"/>
                            </div>
                            <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="flex h-7 items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-emerald-500"/>
                                    <span className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700"/>
                                </div>
                                <div className="mt-4 h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800"/>
                                <div className="mt-2 h-2 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800"/>
                            </div>
                        </div>
                        <div className="mt-3 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-700"/>
                                <div className="flex-1">
                                    <div className="h-2 w-2/5 rounded-full bg-zinc-300 dark:bg-zinc-700"/>
                                    <div className="mt-2 h-2 w-3/5 rounded-full bg-zinc-200 dark:bg-zinc-800"/>
                                </div>
                                <div className="h-7 w-16 rounded-lg bg-zinc-900 dark:bg-zinc-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-4 -start-2 hidden items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 sm:flex">
                <span className="flex size-9 items-center justify-center rounded-lg bg-zinc-100 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">{"</>"}</span>
                <span>
                    <span className="block text-xs font-semibold text-zinc-900 dark:text-zinc-100">React + Tailwind</span>
                    <span className="mt-1 block text-[10px] text-zinc-500 dark:text-zinc-400">{isFa ? "قابل استفاده مجدد" : "Reusable building blocks"}</span>
                </span>
            </div>
        </div>
    );
}

export default function Hero({lang, dict}: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-zinc-50 pb-20 pt-32 dark:bg-zinc-950 md:pb-28 md:pt-40">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black"/>
            <Container className="relative">
                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                    <div className={lang === "fa" ? "text-right" : "text-left"}>
                        <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300">
                            <span className="size-1.5 rounded-full bg-emerald-500"/>
                            {dict.eyebrow}
                        </p>
                        <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
                            {dict.title}
                            <span className="mt-2 block text-zinc-500 dark:text-zinc-400">MinKits.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">{dict.description}</p>
                        <div className="mt-8 flex flex-wrap justify-start gap-3">
                            <Link href={"/" + lang + "/components"} className="inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
                                {dict.components}
                            </Link>
                            <Link href={"/" + lang + "/components/component-packs"} className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500">
                                {dict.explore}
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            <span>React</span><span aria-hidden="true">·</span><span>Next.js</span><span aria-hidden="true">·</span><span>Tailwind CSS</span>
                        </div>
                    </div>
                    <InterfacePreview lang={lang}/>
                </div>
            </Container>
        </section>
    );
}
