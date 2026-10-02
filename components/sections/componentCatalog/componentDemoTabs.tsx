"use client";

import {useState, type ReactNode} from "react";

type ComponentDemoTabsProps = {
    preview: ReactNode;
    source: string;
    previewLabel: string;
    sourceLabel: string;
    copyLabel: string;
    copiedLabel: string;
};

export default function ComponentDemoTabs({
    preview,
    source,
    previewLabel,
    sourceLabel,
    copyLabel,
    copiedLabel,
}: ComponentDemoTabsProps) {
    const [activeTab, setActiveTab] = useState<"preview" | "source">("preview");
    const [copied, setCopied] = useState(false);

    async function copySource() {
        try {
            await navigator.clipboard.writeText(source);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
            <div className="flex items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-3 md:px-5">
                <div className="flex items-center gap-1 rounded-xl bg-zinc-100 p-1" role="tablist">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "preview"}
                        onClick={() => setActiveTab("preview")}
                        className={[
                            "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                            activeTab === "preview" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500 hover:text-zinc-900",
                        ].join(" ")}
                    >
                        {previewLabel}
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "source"}
                        onClick={() => setActiveTab("source")}
                        className={[
                            "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                            activeTab === "source" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500 hover:text-zinc-900",
                        ].join(" ")}
                    >
                        {sourceLabel}
                    </button>
                </div>

                {activeTab === "source" && (
                    <button
                        type="button"
                        onClick={copySource}
                        className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-950"
                    >
                        {copied ? copiedLabel : copyLabel}
                    </button>
                )}
            </div>

            {activeTab === "preview" ? (
                <div role="tabpanel" className="flex min-h-80 items-center justify-center p-8 md:min-h-96">
                    {preview}
                </div>
            ) : (
                <div role="tabpanel" className="overflow-x-auto bg-zinc-950 p-5 md:p-7">
                    <pre dir="ltr" className="min-w-max text-left font-mono text-[13px] leading-6 text-zinc-100">
                        <code>{source}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}
