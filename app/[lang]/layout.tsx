import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import LenisScroll from "@/components/layout/lenis";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import {getDictionary, getDirection, isLang, locales} from "../i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minkits.com";

export const dynamicParams = false;

export function generateStaticParams() {
    return locales.map((lang) => ({lang}));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{lang: string}>;
}): Promise<Metadata> {
    const {lang} = await params;

    if (!isLang(lang)) {
        return {};
    }

    const isFa = lang === "fa";

    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: "MinKits",
            template: "%s | MinKits",
        },
        description: isFa
            ? "کیت‌ها و کامپوننت‌های رابط کاربری آماده استفاده برای React، Next.js و Tailwind CSS."
            : "Production-ready UI kits and components for React, Next.js and Tailwind CSS.",
        alternates: {
            canonical: `/${lang}`,
            languages: {en: "/en", fa: "/fa"},
        },
        openGraph: {
            type: "website",
            siteName: "MinKits",
            locale: isFa ? "fa_IR" : "en_US",
            url: `/${lang}`,
        },
        twitter: {
            card: "summary_large_image",
            title: "MinKits",
            description: isFa
                ? "کیت‌ها و کامپوننت‌های رابط کاربری آماده استفاده برای React، Next.js و Tailwind CSS."
                : "Production-ready UI kits and components for React, Next.js and Tailwind CSS.",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{lang: string}>;
}) {
    const {lang} = await params;

    if (!isLang(lang)) {
        notFound();
    }

    const dict = await getDictionary(lang);

    return (
        <html lang={lang} dir={getDirection(lang)}>
            <body>
                <LenisScroll/>
                <NextTopLoader
                    color="var(--loader-color)"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl
                    showSpinner={false}
                    speed={200}
                    easing="ease"
                />
                <Navbar lang={lang} dict={dict}/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "MinKits",
                            url: siteUrl,
                            inLanguage: lang,
                        }),
                    }}
                />
                {children}
                <Footer lang={lang} dict={dict.footer}/>
            </body>
        </html>
    );
}
