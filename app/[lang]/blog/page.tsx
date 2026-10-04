import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang} from "@/app/i18n";
import {Header, FooterHeader} from "@/components/layout";
import {Breadcrumb} from "@/components/common";
import BlogBrowser from "@/components/sections/blogCatalog/blogBrowser";
import Container from "@/components/ui/container";

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const {lang} = await params;
    if (!isLang(lang)) return {};
    const d = await getDictionary(lang);
    return {
        title: d.blog.title,
        description: d.blog.subtitle,
        alternates: {canonical: `/${lang}/blog`, languages: {en: "/en/blog", fa: "/fa/blog"}},
        openGraph: {url: `/${lang}/blog`},
    };
}

export default async function Page({params}: { params: Promise<{ lang: string }> }) {
    const {lang} = await params;
    if (!isLang(lang)) notFound();
    const d = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <div className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-30"/>
            <Header />
            <Breadcrumb
                lang={lang}
                dict={d.breadcrumbs}
                page="blog"
                currentLabel={d.blog.title}
            />

            <section className="pb-8 md:pb-10">

                <Container>
                    <BlogBrowser lang={lang} blog={d.blog} />
                </Container>
            </section>

            <FooterHeader />
        </main>
    );
}
