import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/site";

type Props = { lang: Locale; content: SiteContent };

export default function Footer({ lang, content }: Props) {
  return (
    <footer className="bg-black px-5 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image src="/logo-ww.png" alt={content.site.name} width={130} height={70} className="h-16 w-auto object-contain" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{content.footer.description}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">{content.footer.links}</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href={`/${lang}`}>{content.navigation.home}</Link>
              <Link href={`/${lang}/about`}>{content.navigation.about}</Link>
              <Link href={`/${lang}/blog`}>{content.navigation.blog}</Link>
              <Link href={`/${lang}#contact`}>{content.navigation.contact}</Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold">{content.footer.legal}</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <span>{content.footer.privacy}</span>
              <span>{content.footer.terms}</span>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/20 pt-5 text-xs text-white/50">{content.footer.copyright}</div>
      </div>
    </footer>
  );
}
