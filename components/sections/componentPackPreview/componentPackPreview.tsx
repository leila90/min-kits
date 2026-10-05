"use client";

import {useState} from "react";

type Props = {
    lang: "fa" | "en";
    copy: {
        previewLabel: string;
        previewTitle: string;
        previewDescription: string;
        previewTabs: string[];
        previewHint: string;
    };
};

const previewContent = [
    {
        title: "Hero",
        eyebrow: "Launch faster",
        heading: "Build a sharper SaaS experience.",
        body: "A structured hero composition designed for product-focused landing pages.",
        action: "Start building",
        kind: "hero",
    },
    {
        title: "Pricing",
        eyebrow: "Plans",
        heading: "Choose the right plan.",
        body: "Clear hierarchy, responsive cards, and a focused conversion path.",
        action: "View plans",
        kind: "pricing",
    },
    {
        title: "Features",
        eyebrow: "Product",
        heading: "Everything your team needs.",
        body: "Reusable feature blocks with a deliberate visual rhythm.",
        action: "Explore features",
        kind: "features",
    },
] as const;

function PreviewVisual({kind}: {kind: (typeof previewContent)[number]["kind"]}) {
    if (kind === "pricing") {
        return (
            <div className="grid grid-cols-2 gap-3">
                <div className="border border-zinc-300 bg-white p-4">
                    <span className="block h-2 w-14 bg-zinc-200"/>
                    <span className="mt-5 block h-6 w-20 bg-zinc-900"/>
                    <span className="mt-5 block h-2 w-full bg-zinc-200"/>
                    <span className="mt-2 block h-2 w-4/5 bg-zinc-200"/>
                    <span className="mt-5 block h-8 w-full bg-zinc-950"/>
                </div>
                <div className="border-2 border-zinc-900 bg-zinc-950 p-4 text-white">
                    <span className="block h-2 w-14 bg-zinc-500"/>
                    <span className="mt-5 block h-6 w-20 bg-white"/>
                    <span className="mt-5 block h-2 w-full bg-zinc-700"/>
                    <span className="mt-2 block h-2 w-4/5 bg-zinc-700"/>
                    <span className="mt-5 block h-8 w-full bg-white"/>
                </div>
            </div>
        );
    }

    if (kind === "features") {
        return (
            <div className="grid grid-cols-2 gap-3">
                {["A", "B", "C", "D"].map((item, index) => (
                    <div key={item} className="border border-zinc-300 bg-white p-4">
                        <span className="flex size-7 items-center justify-center bg-zinc-950 font-mono text-[10px] text-white">{item}</span>
                        <span className="mt-5 block h-2 w-3/4 bg-zinc-900"/>
                        <span className="mt-3 block h-2 w-full bg-zinc-200"/>
                        <span className="mt-2 block h-2 w-4/5 bg-zinc-200"/>
                        <span className={`mt-5 block h-1.5 ${index % 2 === 0 ? "w-1/2" : "w-2/3"} bg-zinc-300`}/>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="aspect-square border border-zinc-200 bg-zinc-100 p-4">
            <div className="grid h-full grid-cols-3 gap-2">
                <div className="col-span-2 bg-zinc-900"/>
                <div className="bg-zinc-300"/>
                <div className="bg-zinc-200"/>
                <div className="col-span-2 bg-zinc-300"/>
                <div className="bg-zinc-900"/>
                <div className="col-span-2 bg-zinc-200"/>
                <div className="bg-zinc-300"/>
            </div>
        </div>
    );
}

function PreviewCanvas({index, lang}: {index: number; lang: "fa" | "en"}) {
    const item = previewContent[index];

    return (
        <div className="relative min-h-[430px] overflow-hidden bg-[#f5f5f4] p-4 sm:p-7">
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(24,24,27,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.05)_1px,transparent_1px)] [background-size:32px_32px]"/>
            <div className="relative mx-auto max-w-3xl overflow-hidden border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(24,24,27,0.12)]">
                <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-zinc-200"/>
                        <span className="size-2 rounded-full bg-zinc-200"/>
                        <span className="size-2 rounded-full bg-zinc-200"/>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                        {String(index + 1).padStart(2, "0")} / {item.title}
                    </span>
                </div>

                <div className={lang === "fa" ? "text-right" : "text-left"}>
                    <div className="border-b border-zinc-100 px-6 py-5 sm:px-10">
                        <div className="flex items-center justify-between gap-6">
                            <div className="h-2 w-20 bg-zinc-900"/>
                            <div className="hidden gap-4 sm:flex">
                                <span className="h-1.5 w-10 bg-zinc-200"/>
                                <span className="h-1.5 w-10 bg-zinc-200"/>
                                <span className="h-1.5 w-10 bg-zinc-200"/>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{item.eyebrow}</span>
                            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl">{item.heading}</h3>
                            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">{item.body}</p>
                            <button type="button" className="mt-7 bg-zinc-950 px-5 py-2.5 text-xs font-semibold text-white">{item.action}</button>
                        </div>
                        <div className="relative mx-auto w-full max-w-xs">
                            <PreviewVisual kind={item.kind}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ComponentPackPreview({lang, copy}: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="border-y border-zinc-200 bg-zinc-50 py-16 md:py-24">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className={lang === "fa" ? "text-right" : "text-left"}>
                    <div className="flex flex-col gap-5 border-b border-zinc-200 pb-7 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{copy.previewLabel}</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-4xl">{copy.previewTitle}</h2>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">{copy.previewDescription}</p>
                        </div>
                        <p className="max-w-xs text-xs leading-5 text-zinc-400">{copy.previewHint}</p>
                    </div>

                    <div className="mt-8 overflow-hidden border border-zinc-200 bg-white shadow-sm">
                        <div className="grid border-b border-zinc-200 sm:grid-cols-3" role="tablist" aria-label={copy.previewLabel}>
                            {copy.previewTabs.map((tab, index) => {
                                const active = activeIndex === index;

                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => setActiveIndex(index)}
                                        className={`border-zinc-200 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-zinc-950 ${active ? "bg-zinc-950 text-white" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 sm:border-s"}`}
                                    >
                                        <span className="me-2 font-mono opacity-50">{String(index + 1).padStart(2, "0")}</span>
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>
                        <div role="tabpanel" aria-live="polite">
                            <PreviewCanvas index={activeIndex} lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
