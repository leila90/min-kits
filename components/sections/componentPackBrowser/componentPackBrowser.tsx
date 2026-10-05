"use client";

import {useMemo, useState} from "react";
import type {Lang} from "@/app/i18n";

type PackCopy = {
    includedLabel: string;
    includedTitle: string;
    previewLabel: string;
    previewTitle: string;
    previewDescription: string;
    previewTabs: string[];
    previewHint: string;
    accessLabel: string;
    accessTitle: string;
};

type Props = {
    lang: Lang;
    copy: PackCopy;
    sourceUnlocked: boolean;
};

type Block = {
    category: string;
    name: string;
    description: string;
    source: string;
    variant: "split" | "center" | "dark" | "minimal";
};

const blocks: Block[] = [
    {
        category: "Hero",
        name: "Hero / Split",
        description: "A focused two-column hero for SaaS and product launches.",
        variant: "split",
        source: `export function HeroSplit() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl
        gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium">Built for teams</p>
          <h1 className="mt-4 text-6xl font-semibold">
            Ship your next idea faster.
          </h1>
          <p className="mt-6 text-zinc-500">
            A production-ready hero for modern products.
          </p>
          <Button className="mt-8">Get started</Button>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}`,
    },
    {
        category: "Hero",
        name: "Hero / Center",
        description: "A centered composition for landing pages with a strong first impression.",
        variant: "center",
        source: `export function HeroCenter() {
  return (
    <section className="py-28 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <Badge>New release</Badge>
        <h1 className="mt-6 text-6xl font-semibold">
          A better way to build.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-500">
          Everything your team needs to move from idea to launch.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button>Start building</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </section>
  );
}`,
    },
    {
        category: "Hero",
        name: "Hero / Dark",
        description: "A high-contrast hero for developer tools and technical products.",
        variant: "dark",
        source: `export function HeroDark() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-mono text-xs">/ PRODUCT</span>
        <h1 className="mt-6 max-w-3xl text-6xl font-semibold">
          Infrastructure for ambitious teams.
        </h1>
        <p className="mt-6 max-w-xl text-zinc-400">
          Powerful tools with a simple developer experience.
        </p>
        <Button className="mt-8">Explore the platform</Button>
      </div>
    </section>
  );
}`,
    },
    {
        category: "Hero",
        name: "Hero / Minimal",
        description: "A restrained editorial hero for clean product and company pages.",
        variant: "minimal",
        source: `export function HeroMinimal() {
  return (
    <section className="border-y py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-widest">
          MinKits
        </p>
        <h1 className="mt-5 text-5xl font-medium">
          Simple interfaces. Serious products.
        </h1>
        <a className="mt-8 inline-flex underline">
          Explore components →
        </a>
      </div>
    </section>
  );
}`,
    },
];

function BlockPreview({block}: {block: Block}) {
    if (block.variant === "dark") {
        return (
            <div className="min-h-[310px] bg-zinc-950 p-7 text-white sm:p-10">
                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500">/ PRODUCT</span>
                <div className="mt-8 max-w-xl">
                    <div className="h-3 w-24 bg-zinc-700"/>
                    <div className="mt-5 h-10 w-full max-w-md bg-white"/>
                    <div className="mt-2 h-10 w-4/5 max-w-sm bg-zinc-700"/>
                    <div className="mt-6 h-3 w-full max-w-sm bg-zinc-800"/>
                    <div className="mt-2 h-3 w-3/4 max-w-xs bg-zinc-800"/>
                    <div className="mt-7 h-10 w-32 bg-white"/>
                </div>
            </div>
        );
    }

    if (block.variant === "center") {
        return (
            <div className="min-h-[310px] bg-white px-6 py-12 text-center sm:px-12">
                <div className="mx-auto h-5 w-20 border border-zinc-200"/>
                <div className="mx-auto mt-7 h-9 w-4/5 max-w-lg bg-zinc-900"/>
                <div className="mx-auto mt-2 h-9 w-3/5 max-w-md bg-zinc-200"/>
                <div className="mx-auto mt-6 h-3 w-4/5 max-w-sm bg-zinc-200"/>
                <div className="mx-auto mt-2 h-3 w-3/5 max-w-xs bg-zinc-200"/>
                <div className="mx-auto mt-7 h-10 w-32 bg-zinc-950"/>
            </div>
        );
    }

    if (block.variant === "minimal") {
        return (
            <div className="min-h-[310px] border-y border-zinc-200 bg-white p-8 sm:p-12">
                <div className="h-2 w-16 bg-zinc-900"/>
                <div className="mt-10 h-10 w-full max-w-xl bg-zinc-900"/>
                <div className="mt-2 h-10 w-4/5 max-w-lg bg-zinc-200"/>
                <div className="mt-8 h-px w-24 bg-zinc-900"/>
                <div className="mt-3 h-2 w-28 bg-zinc-300"/>
            </div>
        );
    }

    return (
        <div className="min-h-[310px] bg-white p-7 sm:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_.75fr] md:items-center">
                <div>
                    <div className="h-2 w-24 bg-zinc-900"/>
                    <div className="mt-6 h-9 w-full max-w-md bg-zinc-900"/>
                    <div className="mt-2 h-9 w-4/5 max-w-sm bg-zinc-200"/>
                    <div className="mt-6 h-3 w-full max-w-sm bg-zinc-200"/>
                    <div className="mt-2 h-3 w-3/4 max-w-xs bg-zinc-200"/>
                    <div className="mt-7 h-10 w-32 bg-zinc-950"/>
                </div>
                <div className="aspect-[4/3] border border-zinc-200 bg-zinc-50 p-3">
                    <div className="grid h-full grid-cols-3 gap-2">
                        <span className="col-span-2 bg-zinc-900"/>
                        <span className="bg-zinc-200"/>
                        <span className="bg-zinc-300"/>
                        <span className="bg-zinc-200"/>
                        <span className="col-span-2 bg-zinc-300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ComponentPackBrowser({lang, copy, sourceUnlocked}: Props) {
    const [category, setCategory] = useState("Hero");
    const [openSource, setOpenSource] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);
    const categories = ["Hero", "Content", "Contact Form", "Pricing", "Testimonials", "FAQ", "CTA", "Footer"];
    const filtered = useMemo(() => blocks.filter((block) => block.category === category), [category]);
    const isRtl = lang === "fa";

    return (
        <section className="border-b border-zinc-200 bg-white py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className={isRtl ? "text-right" : "text-left"}>
                    <div className="border-b border-zinc-200 pb-8">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">{copy.includedLabel}</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-5xl">{copy.includedTitle}</h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">{copy.previewDescription}</p>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)]">
                        <aside className="lg:sticky lg:top-28 lg:h-fit">
                            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">{isRtl ? "دسته‌بندی" : "Categories"}</p>
                            <nav className="border-y border-zinc-200">
                                {categories.map((item) => {
                                    const active = category === item;
                                    const available = item === "Hero";

                                    return (
                                        <button
                                            key={item}
                                            type="button"
                                            disabled={!available}
                                            onClick={() => { setCategory(item); setOpenSource(null); }}
                                            className={`flex w-full items-center justify-between border-b border-zinc-100 px-3 py-3 text-sm last:border-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-zinc-900 ${active ? "bg-zinc-950 font-semibold text-white" : available ? "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950" : "cursor-default text-zinc-300"}`}
                                        >
                                            <span>{isRtl ? ({Hero:"هیرو","Content":"محتوا","Contact Form":"فرم تماس",Pricing:"قیمت‌گذاری",Testimonials:"نظرات",FAQ:"سؤالات متداول",CTA:"CTA",Footer:"فوتر"} as Record<string,string>)[item] : item}</span>
                                            <span className="font-mono text-[9px] opacity-50">{item === "Hero" ? "04" : "—"}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                            <p className="mt-4 text-[11px] leading-5 text-zinc-400">{isRtl ? "دسته‌های بیشتر با اضافه شدن بلاک‌های جدید فعال می‌شوند." : "More categories will become active as new blocks are added to the pack."}</p>
                        </aside>

                        <div className="min-w-0 space-y-8">
                            {filtered.map((block, index) => {
                                const sourceOpen = openSource === index;
                                return (
                                    <article key={block.name} className="overflow-hidden border border-zinc-200 bg-zinc-50">
                                        <div className="flex flex-col gap-4 border-b border-zinc-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-mono text-[10px] text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                                                    <h3 className="text-sm font-semibold text-zinc-950">{block.name}</h3>
                                                </div>
                                                <p className="mt-1 ps-7 text-xs leading-5 text-zinc-500">{block.description}</p>
                                            </div>
                                            <div className="flex shrink-0 border border-zinc-200 bg-zinc-50 p-1" role="tablist">
                                                <button type="button" onClick={() => { setOpenSource(null); setCopied(false); }} aria-selected={!sourceOpen} role="tab" className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${!sourceOpen ? "bg-zinc-950 text-white" : "text-zinc-500 hover:text-zinc-950"}`}>
                                                    {isRtl ? "پیش‌نمایش" : "Preview"}
                                                </button>
                                                <button type="button" onClick={() => { setOpenSource(index); setCopied(false); }} aria-selected={sourceOpen} role="tab" className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${sourceOpen ? "bg-zinc-950 text-white" : "text-zinc-500 hover:text-zinc-950"}`}>
                                                    {isRtl ? "سورس کد" : "Source"}
                                                </button>
                                            </div>
                                        </div>

                                        {sourceOpen ? (
                                            <div className="relative bg-zinc-950 p-5 text-left sm:p-7" dir="ltr">
                                                <div className="mb-4 flex items-center justify-between gap-4">
                                                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">HeroSection.tsx</span>
                                                    {sourceUnlocked ? <button type="button" onClick={async () => { await navigator.clipboard.writeText(block.source); setCopied(true); }} className="border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-300 hover:bg-white/5">{copied ? (isRtl ? "کپی شد" : "Copied") : (isRtl ? "کپی سورس" : "Copy source")}</button> : null}
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600">{sourceUnlocked ? (isRtl ? "اشتراک فعال" : "Subscription active") : (isRtl ? "قفل شده" : "Locked")}</span>
                                                </div>
                                                <pre className={`overflow-x-auto text-xs leading-6 text-zinc-300 ${sourceUnlocked ? "" : "select-none blur-[3px] opacity-60"}`}><code>{block.source}</code></pre>{!sourceUnlocked ? <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/55 p-5"><div className="max-w-sm border border-white/10 bg-zinc-900 p-6 text-center shadow-2xl"><p className="text-sm font-semibold text-white">{isRtl ? "سورس با اشتراک فعال باز می‌شود" : "Source unlocks with an active subscription"}</p><p className="mt-2 text-xs leading-5 text-zinc-500">{isRtl ? "پیش‌نمایش آزاد است؛ برای کپی کردن کد، دسترسی سورس را فعال کنید." : "Preview is open. Activate source access to copy the implementation."}</p></div></div> : null}
                                            </div>
                                        ) : (
                                            <BlockPreview block={block}/>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
