"use client";

import type {Lang} from "@/app/i18n";

type Category = "all" | "components" | "react" | "tailwind";

type BlogSidebarProps = {
    lang: Lang;
    activeCategory: Category;
    categories: Record<Exclude<Category, "all">, string>;
    counts: Record<Category, number>;
    allLabel: string;
    onCategoryChange: (category: Category) => void;
};

export default function BlogSidebar({lang, activeCategory, categories, counts, allLabel, onCategoryChange}: BlogSidebarProps) {
    const items: {key: Category; label: string}[] = [
        {key: "all", label: allLabel},
        ...Object.entries(categories).map(([key, label]) => ({key: key as Exclude<Category, "all">, label})),
    ];

    return (
        <aside className="lg:sticky lg:top-40 lg:self-start">
            <nav aria-label={allLabel} className="rounded-2xl border border-zinc-300 bg-white">
                <div className="rounded-t-2xl bg-black px-4 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                    {lang === "fa" ? "موضوعات" : "Topics"}
                </div>
                <div className="space-y-1 p-3">
                    {items.map((item) => {
                        const active = activeCategory === item.key;
                        return (
                            <button
                                key={item.key}
                                type="button"
                                onClick={() => onCategoryChange(item.key)}
                                aria-pressed={active}
                                className={[
                                    "flex w-full items-center justify-between rounded-xl px-3 py-3 text-start text-sm font-medium transition-colors",
                                    active ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
                                ].join(" ")}
                            >
                                <span>{item.label}</span>
                                <span className={active ? "text-zinc-400" : "text-zinc-300"}>{String(counts[item.key]).padStart(2, "0")}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
