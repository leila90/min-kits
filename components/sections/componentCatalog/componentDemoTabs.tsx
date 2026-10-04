"use client";

import {useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode} from "react";
import {Highlight, themes} from "prism-react-renderer";

type ComponentDemoTabsProps = {
    preview: ReactNode;
    source: string;
    previewLabel: string;
    sourceLabel: string;
    copyLabel: string;
    copiedLabel: string;
};

type TabId = "preview" | "source";

const tabs: readonly TabId[] = ["preview", "source"];

function SourceCode({source}: {source: string}) {
    return (
        <div className="overflow-x-auto bg-zinc-800">
            <Highlight theme={themes.vsDark} code={source} language="tsx">
                {({tokens, getLineProps, getTokenProps}) => (
                    <pre dir="ltr" className="min-w-max text-left font-mono text-[13px] leading-6">
                        <code>
                            {tokens.map((line, index) => (
                                <div key={index} {...getLineProps({line, className: "flex min-h-6"})}>
                                    <span className="sticky left-0 w-12 shrink-0 select-none border-r border-zinc-400 bg-zinc-800 pr-4 text-right text-zinc-500">
                                        {index + 1}
                                    </span>
                                    <span className="pl-5">
                                        {line.map((token, tokenIndex) => (
                                            <span key={tokenIndex} {...getTokenProps({token})} />
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </code>
                    </pre>
                )}
            </Highlight>
        </div>
    );
}

export default function ComponentDemoTabs({
    preview,
    source,
    previewLabel,
    sourceLabel,
    copyLabel,
    copiedLabel,
}: ComponentDemoTabsProps) {
    const baseId = useId();
    const [activeTab, setActiveTab] = useState<TabId>("preview");
    const [copied, setCopied] = useState(false);
    const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({preview: null, source: null});
    const resetTimer = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(resetTimer.current), []);

    const tabId = (tab: TabId) => `${baseId}-tab-${tab}`;
    const panelId = (tab: TabId) => `${baseId}-panel-${tab}`;
    const labels: Record<TabId, string> = {preview: previewLabel, source: sourceLabel};

    function selectTab(tab: TabId) {
        setActiveTab(tab);
        tabRefs.current[tab]?.focus();
    }

    function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
        const current = tabs.indexOf(activeTab);

        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            selectTab(tabs[(current + 1) % tabs.length]);
        } else if (event.key === "Home") {
            event.preventDefault();
            selectTab(tabs[0]);
        } else if (event.key === "End") {
            event.preventDefault();
            selectTab(tabs[tabs.length - 1]);
        }
    }

    async function copySource() {
        try {
            await navigator.clipboard.writeText(source);
            setCopied(true);
            window.clearTimeout(resetTimer.current);
            resetTimer.current = window.setTimeout(() => setCopied(false), 1600);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-transparent">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 md:px-5">
                <div
                    className="flex items-center gap-1 rounded-xl border border-zinc-400 p-1"
                    role="tablist"
                    aria-label={`${previewLabel} / ${sourceLabel}`}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            ref={(node) => {
                                tabRefs.current[tab] = node;
                            }}
                            type="button"
                            role="tab"
                            id={tabId(tab)}
                            aria-selected={activeTab === tab}
                            aria-controls={panelId(tab)}
                            tabIndex={activeTab === tab ? 0 : -1}
                            onClick={() => setActiveTab(tab)}
                            onKeyDown={handleKeyDown}
                            className={[
                                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
                                activeTab === tab ? "bg-zinc-900 text-zinc-50 shadow-sm" : "text-zinc-500 hover:text-zinc-900",
                            ].join(" ")}
                        >
                            {labels[tab]}
                        </button>
                    ))}
                </div>

                {activeTab === "source" && (
                    <button
                        type="button"
                        onClick={copySource}
                        className="rounded-2xl border border-zinc-400 px-3 py-1.5 text-xs font-semibold text-zinc-900 transition-colors hover:border-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                    >
                        {copied ? copiedLabel : copyLabel}
                    </button>
                )}
                <span role="status" className="sr-only">
                    {copied ? copiedLabel : ""}
                </span>
            </div>

            {activeTab === "preview" ? (
                <div
                    id={panelId("preview")}
                    role="tabpanel"
                    aria-labelledby={tabId("preview")}
                    className="flex min-h-64 min-w-0 items-center justify-center overflow-hidden p-6 md:min-h-72"
                >
                    {preview}
                </div>
            ) : (
                <div id={panelId("source")} role="tabpanel" aria-labelledby={tabId("source")} className="min-w-0 p-0">
                    <SourceCode source={source} />
                </div>
            )}
        </div>
    );
}
