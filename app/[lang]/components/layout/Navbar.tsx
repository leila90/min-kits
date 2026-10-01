"use client";

import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageSwitcher";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
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
          <NavbarLinks links={links} />
          <LanguageDropdown languageNames={content.navigation.languageNames} />
        </div>

        <button type="button" onClick={() => setMobileMenuOpen(true)} className="p-2 lg:hidden" aria-label={content.navigation.openMenu}>
          <Bars3Icon className="size-6" />
        </button>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        homeHref={`/${lang}`}
        siteName={content.site.name}
        links={links}
        closeLabel={content.navigation.closeMenu}
      />
    </header>
  );
}
