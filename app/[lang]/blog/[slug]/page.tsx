import Image from "next/image";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang, locales} from "@/app/i18n";
import {Header, FooterHeader} from "@/components/layout";
import {Breadcrumb} from "@/components/common";
import {MagazineEditorialColumns} from "@/components/blog";
import Container from "@/components/ui/container";
import {getBlogPost, getBlogPosts} from "@/content/blog";

export async function generateStaticParams() {
    return locales.flatMap((lang) => getBlogPosts(lang).map((post) => ({lang, slug: post.slug})));
}

type BlogDetailPageProps = {
    params: Promise<{lang: string; slug: string}>;
};

export async function generateMetadata({params}: BlogDetailPageProps): Promise<Metadata> {
    const {lang, slug} = await params;
    if (!isLang(lang)) return {};

    const post = getBlogPost(lang, slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `/${lang}/blog/${slug}`,
            languages: {
                en: `/en/blog/${slug}`,
                fa: `/fa/blog/${slug}`,
            },
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/${lang}/blog/${slug}`,
            images: [{url: post.image, alt: post.imageAlt}],
        },
    };
}

export default async function Page({params}: BlogDetailPageProps) {
    const {lang, slug} = await params;
    if (!isLang(lang)) notFound();

    const d = await getDictionary(lang);
    const post = getBlogPost(lang, slug);
    if (!post) notFound();

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <div className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-30"/>
            <Header/>
            <Breadcrumb lang={lang} dict={d.breadcrumbs} page="blog" currentLabel={post.title}/>

            <section className="pb-8 md:pb-10">
                <Container>
                    <div className={`max-w-4xl ${lang === "fa" ? "text-right" : "text-left"}`}>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
                            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">{d.blog.categories[post.category]}</span>
                            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                            <span>{post.readTime} min</span>
                        </div>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl md:leading-tight">{post.title}</h1>
                        <p className="mt-5 text-base leading-8 text-zinc-500 md:text-lg">{post.description}</p>
                        <p className="mt-5 text-sm text-zinc-400">{post.author} · {post.role}</p>
                    </div>

                    <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[2rem]">
                        <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="object-cover"/>
                    </div>

                    <MagazineEditorialColumns lang={lang} post={post}/>
                </Container>
            </section>

            <FooterHeader/>
        </main>
    );
}
