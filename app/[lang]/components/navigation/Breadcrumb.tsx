"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import { getBlogPost, getContent, type Locale } from "@/content/site";

type Props = {
    lang: Locale
}
export default function Breadcrumb({lang}: Props) {
    const pathname = usePathname();
    const content = getContent(lang);
    const labels: Record<string, string> = {
        about: content.navigation.about,
        blog: content.navigation.blog,
    };
    // مسیر را جدا می‌کنیم
    const [, ...segments] = pathname.split("/").filter(Boolean);
    return (

        <section className="mt-20 md:mx-30 mx-5 bg-transparent">
            <nav className="mb-4">
                <ol className="flex items-center whitespace-nowrap py-2 border-y border-zinc-400 dark:border-neutral-700">
                    <li className="inline-flex items-center">
                        <Link className="flex items-center text-sm text-zinc-500 dark:text-neutral-400 hover:text-zinc-900 dark:hover:text-neutral-300 focus:outline-hidden focus:text-zinc-900 dark:focus:text-neutral-300"
                           href={`/${lang}`}>
                            <svg className="shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                            {content.navigation.home}
                        </Link>
                    </li>
                    {segments.map((segment, index) => {
                        const href = `/${lang}/${segments.slice(0, index + 1).join("/")}`;
                        return (
                            <li key={href} className="flex items-center">
                                <svg className={`shrink-0 mx-2 size-4 text-zinc-400 dark:text-neutral-500 ${ lang === "en" ? "" :" rotate-180"}`}
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                                <Link href={href} className={`${index+1 < segments.length ? "flex items-center text-sm text-zinc-500 dark:text-neutral-400 hover:text-zinc-900 dark:hover:text-neutral-300 focus:outline-hidden focus:text-zinc-900 dark:focus:text-neutral-300" :  "inline-flex items-center text-sm font-semibold text-zinc-800 dark:text-neutral-200 truncate" }`}>
                                    {labels[segment] ?? getBlogPost(lang, segment)?.title ?? decodeURIComponent(segment)}
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </section>
    );
}
