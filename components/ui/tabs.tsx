"use client";

import {useId, useState, type ReactNode} from "react";

export type TabItem = {
    id: string;
    label: ReactNode;
    content: ReactNode;
};

export type TabsProps = {
    items: readonly TabItem[];
    defaultValue?: string;
    ariaLabel?: string;
    className?: string;
};

export default function Tabs({items, defaultValue, ariaLabel = "Tabs", className = ""}: TabsProps) {
    const baseId = useId();
    const initial = defaultValue && items.some((item) => item.id === defaultValue)
        ? defaultValue
        : items[0]?.id;
    const [active, setActive] = useState(initial);

    const selectByOffset = (currentId: string, offset: number) => {
        const index = items.findIndex((item) => item.id === currentId);
        if (index < 0) return;
        const nextIndex = (index + offset + items.length) % items.length;
        setActive(items[nextIndex].id);
    };

    if (!items.length) return null;

    const activeItem = items.find((item) => item.id === active) ?? items[0];

    return (
        <div className={`w-full ${className}`}>
            <div role="tablist" aria-label={ariaLabel} className="flex gap-1 border-b border-zinc-200">
                {items.map((item) => {
                    const selected = item.id === active;
                    return (
                        <button
                            key={item.id}
                            id={`${baseId}-tab-${item.id}`}
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            aria-controls={`${baseId}-panel-${item.id}`}
                            tabIndex={selected ? 0 : -1}
                            onClick={() => setActive(item.id)}
                            onKeyDown={(event) => {
                                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                                    event.preventDefault();
                                    selectByOffset(item.id, 1);
                                } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                                    event.preventDefault();
                                    selectByOffset(item.id, -1);
                                } else if (event.key === "Home") {
                                    event.preventDefault();
                                    setActive(items[0].id);
                                } else if (event.key === "End") {
                                    event.preventDefault();
                                    setActive(items[items.length - 1].id);
                                }
                            }}
                            className={[
                                "border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors",
                                selected
                                    ? "border-zinc-900 text-zinc-950"
                                    : "border-transparent text-zinc-500 hover:text-zinc-900",
                            ].join(" ")}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
            <div
                id={`${baseId}-panel-${activeItem.id}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${activeItem.id}`}
                className="pt-5"
            >
                {activeItem.content}
            </div>
        </div>
    );
}
