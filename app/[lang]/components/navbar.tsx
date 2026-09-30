`use client`;

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "./languageDropdown";
import type { Locale, SiteContent } from "@/content/site";

type Props = { lang: Locale; content: SiteContent };

export default function Navbar({ lang, content }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    [`/${lang}/about`, content.navigation.about],
    [`/${lang}/blog`, content.navigation.blog],
    [`/${lang}#contact`, content.navigation.contact],
  ] as const;

  return (
    <header className={`fixed left-5 right-5 top-5 z-50 rounded-2xl border border-white/20 bg-black/85 text-white shadow-md backdrop-blur transition md:left-10 md:right-10 md:top-8 ${scrolled ? "shadow-xl" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href={`/${lang}`} aria-label={content.site.name}>
          <Image src="/logo-ww.png" alt={content.site.name} width={120} height={60} className="h-14 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => <Link key={href} href={href} className="text-sm font-semibold hover:text-white/70">{label}</Link>)}
          <LanguageDropdown />
        </div>

        <button type="button" onClick={() => setMobileMenuOpen(true)} className="p-2 lg:hidden" aria-label="Open menu">
          <Bars3Icon className="size-6" />
        </button>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 text-zinc-900 shadow-xl">
          <div className="flex items-center justify-between">
            <Link href={`/${lang}`} onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo-bb.png" alt={content.site.name} width={140} height={70} className="h-16 w-auto object-contain" />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-2">
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="mt-8 space-y-2">
            {links.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 font-semibold hover:bg-zinc-100">
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-6 border-t pt-6"><LanguageDropdown /></div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
