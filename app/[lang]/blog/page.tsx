import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang} from "@/app/i18n";
import {Header, FooterHeader} from "@/components/layout";
import {Breadcrumb} from "@/components/common";
import {BlogSection} from "@/components/sections";
import Container from "../../../components/ui/container";

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const {lang} = await params;
    if (!isLang(lang)) return {};
    const d = await getDictionary(lang);
    return {
        title: d.blog.title,
        description: d.blog.subtitle,
        alternates: {canonical: `/${lang}/blog`, languages: {en: "/en/blog", fa: "/fa/blog"}},
        openGraph: {url: `/${lang}/blog`}
    };
}

export default async function Page({params}: { params: Promise<{ lang: string }> }) {
    const {lang} = await params;
    if (!isLang(lang)) notFound();
    const d = await getDictionary(lang);
    return (
    <main className="min-h-screen bg-white text-zinc-900">
        <section className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-40">
            <Container>
                {/*<Link*/}
                {/*    href={`/${lang}/components`}*/}
                {/*    className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"*/}
                {/*>*/}
                {/*    {copy.backToCatalog}*/}
                {/*</Link>*/}

                <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            {d.blog.title}
                        </span>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl text-zinc-200">
                        {d.blog.title}
                    </h1>
                    {/*<p className="mt-3 text-base leading-7 text-zinc-500 md:text-lg">*/}
                    {/*    {component.description[lang]}*/}
                    {/*</p>*/}
                </div>
            </Container>
        </section>
        <Header/>
        <Breadcrumb lang={lang} dict={d.breadcrumbs} page="blog"/>
        <BlogSection lang={lang} dict={d.blog}/>
        <FooterHeader/>
    </main>
    )
}