import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang} from "@/app/i18n";
import {Header, FooterHeader} from "@/components/layout";
import {Breadcrumb, SectionTitle} from "@/components/common";
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
            <section className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-30">
            </section>

            <Header/>

            <section className="-mt-10">
                <Breadcrumb
                    lang={lang}
                    dict={d.breadcrumbs}
                    page="blog"
                    currentLabel={d.blog.title}
                />
            </section>
            <section className="pb-8 md:pb-10">

                {/*<Container>*/}
                {/*    <div className="max-w-full">*/}
                {/*            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">*/}
                {/*                {d.blog.title}*/}
                {/*            </span>*/}
                {/*        <h1 className="mt-2 text-xl font-bold tracking-tight text-zinc-900 md:text-2xl">*/}
                {/*            {d.blog.subtitle}*/}
                {/*        </h1>*/}
                {/*    </div>*/}
                {/*</Container>*/}
                <Container>
                    <BlogBrowser lang={lang} blog={d.blog} />
                </Container>
            </section>

            <FooterHeader />
        </main>
    );
}
