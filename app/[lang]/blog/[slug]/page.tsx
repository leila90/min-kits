import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang, locales} from "@/app/i18n";
import {Header, FooterHeader} from "@/components/layout";
import {Breadcrumb} from "@/components/common";
import {MagazineEditorialColumns} from "@/components/blog";
import Container from "@/components/ui/container";

export function generateStaticParams() {
    return locales.flatMap((lang) =>
        ["1", "2", "3"].map((slug) => ({lang, slug}))
    );
}

function getPostIndex(slug: string, postCount: number) {
    const index = Number.parseInt(slug, 10) - 1;

    if (!Number.isInteger(index) || index < 0 || index >= postCount) {
        return null;
    }

    return index;
}

type BlogDetailPageProps = {
    params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({
                                           params,
                                       }: BlogDetailPageProps): Promise<Metadata> {
    const {lang, slug} = await params;

    if (!isLang(lang)) {
        return {};
    }

    const d = await getDictionary(lang);
    const postIndex = getPostIndex(slug, d.blog.posts.length);

    if (postIndex === null) {
        return {};
    }

    const post = d.blog.posts[postIndex];

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
            url: `/${lang}/blog/${slug}`,
        },
    };
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const {lang, slug} = await params;

    if (!isLang(lang)) {
        notFound();
    }

    const d = await getDictionary(lang);
    const postIndex = getPostIndex(slug, d.blog.posts.length);

    if (postIndex === null) {
        notFound();
    }

    const post = d.blog.posts[postIndex];

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <section className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-40">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            {d.blog.title}
                        </span>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-200 md:text-5xl">
                            {post.title}
                        </h1>
                        <p className="mt-3 text-base leading-7 text-zinc-500 md:text-lg">
                            {post.description}
                        </p>
                    </div>
                </Container>
            </section>

            <Header />

            <section className="pb-8 md:pb-10">
                <Breadcrumb
                    lang={lang}
                    dict={d.breadcrumbs}
                    page="blog"
                    currentLabel={post.title}
                />

                <MagazineEditorialColumns
                    lang={lang}
                    title={post.title}
                    description={post.description}
                />
            </section>

            <FooterHeader />
        </main>
    );
}
