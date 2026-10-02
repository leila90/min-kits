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
        nav: { home: string; about: string; blog: string; companies: string; contact: string; careers: string }
    }
}

export default function Navbar({ lang, dict }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const closeMobileMenu = () => setMobileMenuOpen(false)
    return (
        <header
            className={`fixed md:my-10 md:mx-20 my-5 mx-5 rounded-2xl border-1 backdrop-blur border-navbar-border top-0 left-0 right-0 z-50 duration-300 bg-navbar-background shadow-md text-navbar-text  ${mobileMenuOpen ? "lg:block hidden" : ""}`}>
            <nav aria-label={lang === "fa" ? "ناوبری اصلی" : "Main navigation"} className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href={`/${lang}`} className="justify-items-center">
                        <Image
                            alt="MinKits"
                            src="/logo-ww.png"
                            width={150}
                            height={150}
                            className="md:h-16 h-16 w-auto m-2"
                        />
                        {/*<span className="flex"><h2 className="text-xs text-zinc-900 pt-2 px-1">شرکت تهویه تاسیسات</h2><h2 className="text-xs text-sky-800 pt-2">ویرا</h2></span>*/}
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
                    {/*<Link href="/#" className="text-sm/6 text-sky-800 font-semibold border border-b-sky-800 rounded-sm px-4 py-1 bg-white hover:bg-sky-50">*/}
                    {/*    دعوت به همکاری*/}
                    {/*</Link>*/}
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

                                {/*<Link href="/#" className="text-sm/6 text-sky-800 font-semibold border border-b-sky-800 rounded-sm px-4 py-1 bg-white hover:bg-sky-50">*/}
                                {/*    دعوت به همکاری*/}
                                {/*</Link>*/}

                                <LanguageDropdown/>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}