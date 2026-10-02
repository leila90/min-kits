import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLang, locales } from "@/app/i18n";
import { Header, FooterHeader } from "@/components/layout";
import { Breadcrumb } from "@/components/common";
import { MagazineEditorialColumns } from "@/components/blog";
import Container from "@/components/ui/container";

export function generateStaticParams() {
    return locales.flatMap((lang) =>
        ["1", "2", "3"].map((slug) => ({ lang, slug }))
    );
}

function getPostIndex(slug: string, postCount: number) {
    const index = Number.parseInt(slug, 10) - 1;

    if (!Number.isInteger(index) || index < 0 || index >= postCount) {
        return null;
    }

    return index;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
    const { lang, slug } = await params;

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
    const { lang, slug } = await params;

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
        <>
            <Header />
            <Breadcrumb lang={lang} dict={d.breadcrumbs} page="blog" />
            <Container>
                <section className="py-10">
                    <h2 className="text-3xl font-bold">{post.title}</h2>
                    <p className="mt-5 text-blog-card-muted">{post.description}</p>
                </section>
            </Container>
            <MagazineEditorialColumns lang={lang} title={post.title} description={post.description} />
            <FooterHeader />
        </>
    );
}
