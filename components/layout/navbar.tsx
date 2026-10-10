'use client'

import {useEffect, useState} from "react"
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react"
import {Bars3Icon, MoonIcon, SunIcon, XMarkIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import LanguageDropdown from "@/components/common/languageDropdown"

type NavbarProps = {
    lang: "fa" | "en";
    dict: {
        nav: {
            home: string;
            about: string;
            blog: string;
            components: string;
            componentPacks: string;
            companies: string;
            contact: string;
            careers: string;
        };
    };
};

export default function Navbar({lang, dict}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        let savedTheme: string | null = null;
        try {
            savedTheme = window.localStorage.getItem("theme");
        } catch {
            // Fall back to the current document theme when storage is unavailable.
        }
        const initialTheme = savedTheme === "dark" || document.documentElement.dataset.theme === "dark" ? "dark" : "light";
        document.documentElement.dataset.theme = initialTheme;
        setDarkMode(initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const nextTheme = darkMode ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        try {
            window.localStorage.setItem("theme", nextTheme);
        } catch {
            // Theme still works for this session when storage is unavailable.
        }
        setDarkMode(nextTheme === "dark");
    };

    const closeMobileMenu = () => setMobileMenuOpen(false);
    const links = [
        {href: "/" + lang + "/components", label: dict.nav.components},
        {href: "/" + lang + "/components/component-packs", label: dict.nav.componentPacks},
        {href: "/" + lang + "/blog", label: dict.nav.blog},
        {href: "/" + lang + "/about", label: dict.nav.about},
    ];

    return (
        <>
        <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-[1240px] -translate-x-1/2 rounded-2xl border border-navbar-border bg-navbar-background/90 text-navbar-text shadow-sm backdrop-blur-xl">
            <nav aria-label={lang === "fa" ? "ناوبری اصلی" : "Main navigation"} className="mx-auto flex min-w-0 items-center justify-between gap-4 px-4 sm:px-6">
                <Link href={"/" + lang} aria-label="MinKits home" className="shrink-0 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500">
                    <Image alt="MinKits" src="/logo-ww.png" width={150} height={60} priority className="my-2 h-10 w-auto sm:h-11"/>
                </Link>
                <div className="hidden items-center gap-6 lg:flex xl:gap-8">
                    {links.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm font-medium text-navbar-text/80 transition-colors hover:text-navbar-text focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500">
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden shrink-0 items-center gap-2 lg:flex">
                    <button type="button" onClick={toggleTheme} aria-label={lang === "fa" ? "تغییر تم" : "Toggle color theme"} title={lang === "fa" ? "تغییر تم" : "Toggle color theme"} className="inline-flex size-10 items-center justify-center rounded-full border border-navbar-border transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:hover:bg-white/10">
                        {darkMode ? <SunIcon aria-hidden="true" className="size-4"/> : <MoonIcon aria-hidden="true" className="size-4"/>}
                    </button>
                    <LanguageDropdown/>
                </div>
                <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex items-center justify-center rounded-xl p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 lg:hidden">
                    <span className="sr-only">{lang === "fa" ? "باز کردن منوی اصلی" : "Open main menu"}</span>
                    <Bars3Icon aria-hidden="true" className="size-6"/>
                </button>
            </nav>
        </header>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"/>
                <DialogPanel className="fixed inset-y-0 end-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 text-zinc-950 shadow-2xl dark:bg-zinc-950 dark:text-white sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-sm font-semibold">MinKits</DialogTitle>
                        <button type="button" onClick={closeMobileMenu} className="rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500">
                            <span className="sr-only">{lang === "fa" ? "بستن منو" : "Close menu"}</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((item) => (
                            <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="rounded-xl px-3 py-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-900">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
                        <button type="button" onClick={toggleTheme} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2.5 text-sm font-medium dark:border-zinc-700" aria-label={lang === "fa" ? "تغییر تم" : "Toggle color theme"}>
                            {darkMode ? <SunIcon aria-hidden="true" className="size-4"/> : <MoonIcon aria-hidden="true" className="size-4"/>}
                            {lang === "fa" ? (darkMode ? "تم روشن" : "تم تیره") : (darkMode ? "Light theme" : "Dark theme")}
                        </button>
                        <LanguageDropdown/>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}
