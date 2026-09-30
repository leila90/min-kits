import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/breadcrumb";
import { getBlogPost, getBlogPosts, hasLocale, locales, type Locale } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => getBlogPosts(lang).map((post) => ({ lang, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const post = getBlogPost(lang as Locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${lang}/blog/${slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/${lang}/blog/${slug}`, publishedTime: post.date, modifiedTime: post.lastModified, authors: [post.author] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-24">
      <Breadcrumb lang={locale} />
      <article className="mt-10">
        <p className="text-sm text-zinc-500">{post.category} · {post.date}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600">{post.excerpt}</p>
        <div className="mt-10 space-y-6 text-base leading-8 text-zinc-700">
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="mt-10 text-sm text-zinc-500">{post.author}</p>
      </article>
    </main>
  );
}
