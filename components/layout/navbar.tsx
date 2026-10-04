'use client'

import {useState} from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "@/components/common/languageDropdown";


type NavbarProps = {
    lang: "fa" | "en",
    dict: {
        nav: { home: string; about: string; blog: string; componentPacks: string; companies: string; contact: string; careers: string }
    }
}

export default function Navbar({ lang, dict }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const closeMobileMenu = () => setMobileMenuOpen(false)
    return (
        <header
            className={`fixed top-5 left-1/2 z-50 w-full max-w-[1440px] md:top-10 -translate-x-1/2 rounded-2xl border-1 border-navbar-border bg-navbar-background text-navbar-text shadow-md backdrop-blur duration-300 ${mobileMenuOpen ? "lg:block hidden" : ""}`}>
            <nav aria-label={lang === "fa" ? "ناوبری اصلی" : "Main navigation"} className="mx-auto flex min-w-0 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href={`/${lang}`} className="justify-items-center">
                        <Image
                            alt="MinKits"
                            src="/logo-ww.png"
                            width={150}
                            height={150}
                            className="md:h-16 h-16 w-auto m-2"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">{lang === "fa" ? "باز کردن منوی اصلی" : "Open main menu"}</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <Link href={`/${lang}/about`} className="text-sm/6 font-semibold">
                        {dict.nav.about}
                    </Link>
                    <Link href={`/${lang}/blog`} className="text-sm/6 font-semibold">
                        {dict.nav.blog}
                    </Link>
                    <Link href={`/${lang}/components/component-packs`} className="text-sm/6 font-semibold">
                        {dict.nav.componentPacks}
                    </Link>
                    <span className="text-sm/6 font-semibold">
                        {dict.nav.companies}
                    </span>
                    <Link href={`/${lang}#contactUs`} className="text-sm/6 font-semibold">
                        {dict.nav.contact}
                    </Link>
                    <span className="text-sm/6 font-semibold">
                        {dict.nav.careers}
                    </span>
                </PopoverGroup>


                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                    <LanguageDropdown/>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-navbar-mobile-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-navbar-mobile-ring">
                    <div className="flex items-center justify-between">
                        <Link href={`/${lang}`} className="justify-items-center" aria-label="MinKits">
                            <Image
                                alt="MinKits"
                                src="/logo-bb.png"
                                width={250}
                                height={250}
                                className="h-20 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-navbar-mobile-muted"
                        >
                            <span className="sr-only">{lang === "fa" ? "بستن منو" : "Close menu"}</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-navbar-mobile-divider">
                            <div className="space-y-2 py-6">

                                <Link
                                    href={`/${lang}/about`}
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-mobile-text hover:bg-navbar-mobile-hover"
                                >
                                    {dict.nav.about}
                                </Link>

                                <Link
                                    href={`/${lang}/blog`}
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-mobile-text hover:bg-navbar-mobile-hover"
                                >
                                    {dict.nav.blog}
                                </Link>
                                <Link
                                    href={`/${lang}/components/component-packs`}
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-mobile-text hover:bg-navbar-mobile-hover"
                                >
                                    {dict.nav.componentPacks}
                                </Link>

                                <span
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-mobile-text"
                                >
                                    {dict.nav.companies}
                                </span>
                                <Link
                                    href={`/${lang}#contactUs`}
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-mobile-text hover:bg-navbar-mobile-hover"
                                >
                                    {dict.nav.contact}
                                </Link>
                                <span
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-navbar-mobile-text"
                                >
                                    {dict.nav.careers}
                                </span>
                            </div>
                            <div className="py-6">

                                <LanguageDropdown/>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}