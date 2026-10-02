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

type Token = {
    value: string;
    kind: "plain" | "keyword" | "string" | "comment" | "type" | "number" | "tag";
};

const tokenPattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|\`(?:\\.|[^\`\\])*\`|\b(?:import|from|export|default|type|const|return|if|else|async|await|function|true|false|null|undefined)\b|\b(?:string|number|boolean|ReactNode|Record|ButtonProps|InputProps|TextareaProps|FormFieldProps)\b|\b\d+(?:\.\d+)?\b|<\/?[A-Za-z][^>]*>)/g;

function tokenizeLine(line: string): Token[] {
    const tokens: Token[] = [];
    let lastIndex = 0;

    for (const match of line.matchAll(tokenPattern)) {
        const value = match[0];
        const index = match.index ?? 0;

        if (index > lastIndex) {
            tokens.push({value: line.slice(lastIndex, index), kind: "plain"});
        }

        let kind: Token["kind"] = "plain";
        if (value.startsWith("//") || value.startsWith("/*")) kind = "comment";
        else if (value.startsWith("'") || value.startsWith('"') || value.startsWith("\`")) kind = "string";
        else if (/^\d/.test(value)) kind = "number";
        else if (value.startsWith("<")) kind = "tag";
        else if (/^(string|number|boolean|ReactNode|Record|.*Props)$/.test(value)) kind = "type";
        else kind = "keyword";

        tokens.push({value, kind});
        lastIndex = index + value.length;
    }

    if (lastIndex < line.length) {
        tokens.push({value: line.slice(lastIndex), kind: "plain"});
    }

    return tokens;
}

const tokenClasses: Record<Token["kind"], string> = {
    plain: "text-zinc-300",
    keyword: "text-zinc-200",
    string: "text-zinc-300",
    comment: "text-zinc-500",
    type: "text-zinc-300",
    number: "text-zinc-200",
    tag: "text-zinc-300",
};

function SourceCode({source}: {source: string}) {
    return (
        <div className="overflow-x-auto bg-zinc-950">
            <pre dir="ltr" className="min-w-max text-left font-mono text-[13px] leading-6">
                <code>
                    {source.split("\n").map((line, index) => (
                        <div key={index} className="flex min-h-6">
                            <span className="sticky left-0 w-12 shrink-0 select-none border-r border-zinc-800 bg-zinc-950 pr-4 text-right text-zinc-500">
                                {index + 1}
                            </span>
                            <span className="pl-5">
                                {tokenizeLine(line).map((token, tokenIndex) => (
                                    <span key={tokenIndex} className={tokenClasses[token.kind]}>
                                        {token.value}
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}
                </code>
            </pre>
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
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 md:px-5">
                <div className="flex items-center gap-1 rounded-xl bg-zinc-100 p-1" role="tablist" aria-label={`${previewLabel} / ${sourceLabel}`}>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "preview"}
                        aria-controls="component-demo-preview"
                        id="component-demo-tab-preview"
                        onClick={() => setActiveTab("preview")}
                        className={[
                            "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                            activeTab === "preview" ? "bg-zinc-50 text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900",
                        ].join(" ")}
                    >
                        {previewLabel}
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "source"}
                        aria-controls="component-demo-source"
                        id="component-demo-tab-source"
                        onClick={() => setActiveTab("source")}
                        className={[
                            "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                            activeTab === "source" ? "bg-zinc-50 text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900",
                        ].join(" ")}
                    >
                        {sourceLabel}
                    </button>
                </div>

                {activeTab === "source" && (
                    <button
                        type="button"
                        onClick={copySource}
                        className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                    >
                        {copied ? copiedLabel : copyLabel}
                    </button>
                )}
            </div>

            {activeTab === "preview" ? (
                <div id="component-demo-preview" role="tabpanel" aria-labelledby="component-demo-tab-preview" className="flex min-h-64 min-w-0 items-center justify-center overflow-hidden p-6 md:min-h-72 md:p-6">
                    {preview}
                </div>
            ) : (
                <div id="component-demo-source" role="tabpanel" aria-labelledby="component-demo-tab-source" className="min-w-0 p-0">
                    <SourceCode source={source} />
                </div>
            )}
        </div>
    );
}
