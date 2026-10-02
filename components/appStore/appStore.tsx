"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cards, type Card } from "./data";
import AppStoreCard from "@/components/appStore/appStoreCard";
import ExpandedCard from "@/components/appStore/expandedCard";

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
                    <Image src="/authors/matt-perry.png" alt="" width={40} height={40} />
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
