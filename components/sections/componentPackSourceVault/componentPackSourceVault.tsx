type Props = {
    lang: "fa" | "en";
    dict: {
        sourceEyebrow: string;
        sourceTitle: string;
        sourceDescription: string;
        lockedLabel: string;
        lockedDescription: string;
        unlockTitle: string;
        unlockItems: string[];
        unlockCta: string;
    };
};

const codeLines = [
    "export function HeroSection({ title, cta }) {",
    "  return (",
    "    <section className=\"relative overflow-hidden\">",
    "      <div className=\"mx-auto max-w-7xl px-6\">",
    "        <div className=\"grid gap-12 lg:grid-cols-2\">",
    "          <div className=\"max-w-2xl\">",
    "            <h1>{title}</h1>",
    "            <p>Build faster with MinKits.</p>",
    "            <Button>{cta}</Button>",
    "          </div>",
    "        </div>",
    "      </div>",
    "    </section>",
    "  );",
    "}",
];

export default function ComponentPackSourceVault({lang, dict}: Props) {
    const isLocked = process.env.MIN_KITS_SOURCE_LOCKED !== "false";

    return (
        <section className="border-y border-zinc-200 bg-zinc-950 py-20 text-white md:py-28">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className={lang === "fa" ? "text-right" : "text-left"}>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                            <span aria-hidden="true" className="text-[10px]">⌘</span>
                            {dict.sourceEyebrow}
                        </span>
                        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                            <span aria-hidden="true" className="text-[10px]">✦</span>
                            {isLocked ? dict.lockedLabel : "Source code unlocked"}
                        </span>
                    </div>

                    <div className="mt-7 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">{dict.sourceTitle}</h2>
                            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">{dict.sourceDescription}</p>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111113] shadow-2xl">
                            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-zinc-700"/>
                                    <span className="size-2 rounded-full bg-zinc-700"/>
                                    <span className="size-2 rounded-full bg-zinc-700"/>
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">HeroSection.tsx</span>
                            </div>

                            <div className="relative min-h-[360px] overflow-hidden p-5 font-mono text-xs leading-7 text-zinc-500 md:p-7">
                                <div className="space-y-0 blur-[3px] select-none opacity-70" aria-hidden="true">
                                    {codeLines.map((line, index) => (
                                        <div key={index} className="flex gap-5">
                                            <span className="w-5 shrink-0 text-right text-zinc-700">{index + 1}</span>
                                            <code>{line}</code>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/55 p-6 backdrop-blur-[2px]">
                                    <div className="max-w-sm rounded-3xl border border-white/10 bg-zinc-900/90 p-6 text-center shadow-2xl">
                                        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                                            <span aria-hidden="true" className="text-lg">⌑</span>
                                        </div>
                                        <p className="mt-4 text-base font-semibold">{dict.lockedLabel}</p>
                                        <p className="mt-2 text-sm leading-6 text-zinc-500">{dict.lockedDescription}</p>
                                        <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                                            <span className="h-px w-8 bg-zinc-700"/>
                                            MinKits Source Vault
                                            <span className="h-px w-8 bg-zinc-700"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_.9fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{dict.unlockTitle}</p>
                            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                {dict.unlockItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/8 text-[10px]">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={lang === "fa" ? "lg:text-left" : "lg:text-right"}>
                            <p className="text-sm leading-6 text-zinc-500">{dict.unlockCta}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
