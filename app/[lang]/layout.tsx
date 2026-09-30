import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { getContent, hasLocale, locales, type Locale } from "@/content/site";
import { siteFont } from "@/app/fonts";

const siteUrl = "https://minkits.com";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const content = getContent(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: content.site.name, template: `%s | ${content.site.name}` },
    description: content.site.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
    },
    openGraph: {
      type: "website",
      siteName: content.site.name,
      title: content.site.name,
      description: content.site.description,
      url: `/${lang}`,
      locale: lang === "fa" ? "fa_IR" : "en_US",
    },
    twitter: { card: "summary_large_image", title: content.site.name, description: content.site.description },
  };
}

export default async function RootLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const content = getContent(lang as Locale);
  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body className={siteFont.variable}>
        <LenisScroll />
        <NextTopLoader color="#000" initialPosition={0.08} crawlSpeed={200} height={3} crawl showSpinner={false} speed={200} />
        <Navbar lang={lang} content={content} />
        {children}
        <Footer lang={lang} content={content} />
      </body>
    </html>
  );
}
