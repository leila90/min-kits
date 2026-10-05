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

            <section className="pb-10 md:pb-14">
                <Container>
                    <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50">
                        <div className="grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,.95fr)]">
                            <div className={`flex min-w-0 flex-col justify-center p-7 sm:p-10 lg:p-12 ${lang === "fa" ? "text-right" : "text-left"}`}>
                                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-500">
                                    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1">{d.blog.categories[post.category]}</span>
                                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                                    <span>{post.readTime} min</span>
                                </div>
                                <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl md:leading-[1.12]">{post.title}</h1>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">{post.description}</p>
                                <div className="mt-7 flex items-center gap-3 text-sm text-zinc-500">
                                    <Image src="/images/avatar2.jpg" alt="" width={40} height={40} className="size-10 rounded-full object-cover"/>
                                    <div>
                                        <p className="font-semibold text-zinc-800">{post.author}</p>
                                        <p>{post.role}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative min-h-[280px] overflow-hidden bg-zinc-200 lg:min-h-[420px]">
                                <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover"/>
                            </div>
                        </div>
                    </div>

                    <MagazineEditorialColumns lang={lang} post={post}/>
                </Container>
            </section>

            <FooterHeader/>
        </main>
    );
}
