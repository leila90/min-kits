"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

const TABS = [
    {
        id: 1,
        title: "Advanced tools",
        description:
            "Use Preline thoroughly thought and automated libraries to manage your businesses.",
        image: "/images/features1.avif",
        icon: (
            <>
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            </>
        ),
    },
    {
        id: 2,
        title: "Smart dashboards",
        description:
            "Quickly sample components, copy-paste codes, and start right off.",
        image: "/images/features2.avif",
        icon: (
            <>
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </>
        ),
    },
    {
        id: 3,
        title: "Powerful features",
        description:
            "Reduce time and effort on building modern look design.",
        image: "/images/features3.avif",
        icon: (
            <>
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
            </>
        ),
    },
];

export default function FeaturesNavs() {
    const [activeTab, setActiveTab] = useState(1);
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const onKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            buttonsRef.current[(index + 1) % TABS.length]?.focus();
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            buttonsRef.current[(index - 1 + TABS.length) % TABS.length]?.focus();
        }
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActiveTab(TABS[index].id);
        }
    };

    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="relative p-6 md:p-16">
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

                        {/* Tabs */}
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <h2 className="text-2xl font-bold sm:text-3xl text-zinc-800 dark:text-neutral-200">
                                Fully customizable rules to match your unique needs
                            </h2>

                            <nav
                                role="tablist"
                                aria-orientation="vertical"
                                className="grid gap-4 mt-5 md:mt-10"
                            >
                                {TABS.map((tab, i) => {
                                    const active = activeTab === tab.id;

                                    return (
                                        <button
                                            key={tab.id}
                                            ref={(el) => {
                                                buttonsRef.current[i] = el;
                                            }}                                            role="tab"
                                            aria-selected={active}
                                            aria-controls={`panel-${tab.id}`}
                                            tabIndex={active ? 0 : -1}
                                            onClick={() => setActiveTab(tab.id)}
                                            onKeyDown={(e) => onKeyDown(e, i)}
                                            className={clsx(
                                                "text-start p-4 md:p-5 rounded-xl transition-all outline-none",
                                                "hover:bg-zinc-200 focus:bg-zinc-200",
                                                "dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
                                                active && "bg-white shadow-md dark:bg-neutral-700"
                                            )}
                                        >
                      <span className="flex gap-x-6">
                        <svg
                            className={clsx(
                                "mt-2 size-6 md:size-7",
                                active
                                    ? "text-blue-600 dark:text-blue-500"
                                    : "text-zinc-800 dark:text-neutral-200"
                            )}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                          {tab.icon}
                        </svg>

                        <span className="grow">
                          <span
                              className={clsx(
                                  "block text-lg font-semibold",
                                  active
                                      ? "text-blue-600 dark:text-blue-500"
                                      : "text-zinc-800 dark:text-neutral-200"
                              )}
                          >
                            {tab.title}
                          </span>
                          <span className="block mt-1 text-zinc-800 dark:text-neutral-200">
                            {tab.description}
                          </span>
                        </span>
                      </span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Panels */}
                        <div className="lg:col-span-6">
                            <div className="relative h-[720px]">
                                {TABS.map((tab) => {
                                    const active = activeTab === tab.id;

                                    return (
                                        <div
                                            key={tab.id}
                                            id={`panel-${tab.id}`}
                                            role="tabpanel"
                                            aria-hidden={!active}
                                            className={clsx(
                                                "absolute inset-0 transition-all duration-500",
                                                active
                                                    ? "opacity-100 translate-y-0 z-10"
                                                    : "opacity-0 translate-y-6 pointer-events-none"
                                            )}
                                        >
                                            <Image
                                                src={tab.image}
                                                width={500}
                                                height={720}
                                                alt={tab.title}
                                                className="rounded-xl shadow-xl shadow-zinc-200 dark:shadow-zinc-900/20"
                                            />
                                        </div>
                                    );
                                })}

                                {/* SVG Decoration */}
                                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                                    <svg className="w-16 h-auto text-orange-500" viewBox="0 0 121 135" fill="none">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background */}
                    <div className="absolute inset-0 grid grid-cols-12">
                        <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-zinc-100 h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800" />
                    </div>
                </div>
            </div>
        </section>
    );
}
