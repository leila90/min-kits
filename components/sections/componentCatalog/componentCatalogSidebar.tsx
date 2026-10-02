import Link from "next/link";
import type {Lang} from "../../../app/i18n";
import type {ComponentRegistryItem, ComponentCategory} from "../../registry/types";

type ComponentCatalogSidebarProps = {
    lang: Lang;
    activeSlug: string;
    registry: readonly ComponentRegistryItem[];
};

const labels = {
    en: {form: "Form", layout: "Layout", feedback: "Feedback", catalog: "Components"},
    fa: {form: "فرم", layout: "چیدمان", feedback: "بازخورد", catalog: "کامپوننت‌ها"},
} as const;

const categoryOrder: ComponentCategory[] = ["form", "layout", "feedback"];

export default function ComponentCatalogSidebar({
    lang,
    activeSlug,
    registry,
}: ComponentCatalogSidebarProps) {
    return (
        <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
                aria-label={labels[lang].catalog}
                className="rounded-2xl border border-zinc-200 bg-white p-4"
            >
                <div className="mb-4 px-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {labels[lang].catalog}
                </div>

                <div className="space-y-4">
                    {categoryOrder.map((category) => {
                        const items = registry.filter((item) => item.category === category);
                        if (items.length === 0) return null;

                        return (
                            <div key={category}>
                                <div className="mb-1 px-2 text-xs font-semibold text-zinc-400">
                                    {labels[lang][category]}
                                </div>
                                <div className="space-y-0.5">
                                    {items.map((item) => {
                                        const active = item.slug === activeSlug;

                                        return (
                                            <Link
                                                key={item.slug}
                                                href={`/${lang}/components/${item.slug}`}
                                                aria-current={active ? "page" : undefined}
                                                className={[
                                                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                                                    active
                                                        ? "bg-zinc-900 text-white"
                                                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
                                                ].join(" ")}
                                            >
                                                <span>{item.name[lang]}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={active ? "text-zinc-400" : "text-zinc-300"}
                                                >
                                                    →
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
