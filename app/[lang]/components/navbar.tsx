'use client'

import {useState, useEffect} from 'react'
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
import LanguageDropdown from "../components/languageDropdown";


type NavbarProps = {
    lang: "fa" | "en",
    dict: {
        mainMenus: {
            "About Us": string,
            "Blogs": string,
            "Group Companies": string,
            "Contact Us": string,
            "Career Opportunities": string
        }
    }
}

export default function Navbar({ lang, dict }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        function handleScroll() {
            // اگر صفحه بیشتر از 50 پیکسل اسکرول شد
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        // تمیز کردن event listener هنگام unmount شدن
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`fixed md:my-10 md:mx-20 my-5 mx-5 rounded-2xl border-1 backdrop-blur border-black top-0 left-0 right-0 z-50 duration-300 ${scrolled ? "bg-black/80 shadow-md  text-white" : "bg-black/80 shadow-md text-white"}  ${mobileMenuOpen ? "lg:block hidden" : ""}`}>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
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
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <Link href={`/${lang}/about`} className="text-sm/6 font-semibold">
                        {dict.mainMenus?.["About Us"] ?? 'No translation'}
                    </Link>
                    <Link href={`/${lang}/blog`} className="text-sm/6 font-semibold">
                        {dict.mainMenus?.["Blogs"] ?? 'No translation'}
                    </Link>
                    <Link href="#" className="text-sm/6 font-semibold">
                        {dict.mainMenus?.["Group Companies"] ?? 'No translation'}
                    </Link>
                    <Link href={`/${lang}#contactUs`} className="text-sm/6 font-semibold">
                        {dict.mainMenus?.["Contact Us"] ?? 'No translation'}
                    </Link>
                    <Link href={`/${lang}`} className="text-sm/6 font-semibold">
                        {dict.mainMenus?.["Career Opportunities"]?? 'No translation'}
                    </Link>
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
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
                    <div className="flex items-center justify-between">
                        <Link href={`/${lang}`} className="justify-items-center">
                            <Image
                                alt=""
                                src="/logo-bb.png"
                                width={250}
                                height={250}
                                className="h-20 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-zinc-500/10">
                            <div className="space-y-2 py-6">

                                <Link
                                    href={`/${lang}/about`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
                                >
                                    {dict.mainMenus?.["About Us"] ?? 'No translation'}
                                </Link>

                                <Link
                                    href={`/${lang}/blog`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
                                >
                                    {dict.mainMenus?.["Blogs"] ?? 'No translation'}
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
                                >
                                    {dict.mainMenus?.["Group Companies"] ?? 'No translation'}
                                </Link>
                                <Link
                                    href={`/${lang}#contactUs`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
                                >
                                    {dict.mainMenus?.["Contact Us"] ?? 'No translation'}
                                </Link>
                                <Link
                                    href={`/${lang}`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-gray-50"
                                >
                                    {dict.mainMenus?.["Career Opportunities"] ?? 'No translation'}
                                </Link>
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