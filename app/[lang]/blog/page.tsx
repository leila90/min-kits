import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang} from "@/app/i18n";
import {Header, FooterHeader} from "@/components/layout";
import {Breadcrumb, SectionTitle} from "@/components/common";
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
            <section className="border-b border-zinc-200 bg-zinc-200 py-20 md:py-28">
                <Container>
                    <Breadcrumb lang={lang} dict={d.breadcrumbs} page="blog" />
                    <div className="mt-8">
                        <SectionTitle
                            brand="MinKits"
                            title={d.blog.title}
                            subTitle={d.blog.subtitle}
                            lang={lang}
                        />
                    </div>
                </Container>
            </section>

            <Header />
            <BlogSection lang={lang} dict={d.blog} />
            <FooterHeader />
        </main>
    )
}