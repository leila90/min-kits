"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cards, type Card } from "./data";
import AppStoreCard from "../appStore/appStoreCard";
import ExpandedCard from "../appStore/expandedCard";

export default function AppStore() {
    const [active, setActive] = useState<Card | null>(null);

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "auto";
    }, [active]);

    return (
        <div className="max-w-[990px] mx-auto py-[150px]">
            {/* Header */}
            <header className="flex justify-between items-center mb-5">
                <h2 className="text-[34px] font-semibold tracking-tight">
                    Today
                </h2>
                <div className="w-10 h-10 rounded-full overflow-hidden border">
                    <img src="/authors/matt-perry.png" alt="" />
                </div>
            </header>

            {/* Cards */}
            <ul className="flex flex-wrap gap-5">
                {cards.map((card) => (
                    <AppStoreCard
                        key={card.id}
                        card={card}
                        onClick={() => setActive(card)}
                    />
                ))}
            </ul>

            {/* Expanded */}
            <AnimatePresence>
                {active && (
                    <ExpandedCard
                        card={active}
                        onClose={() => setActive(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
