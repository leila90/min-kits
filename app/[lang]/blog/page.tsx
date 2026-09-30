import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import SectionTitle from "../components/sectionTitle";
import { getBlogPosts, getContent, hasLocale, type Locale } from "@/content/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const content = getContent(lang);
  return { title: content.blog.title, description: content.blog.description };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const content = getContent(locale);
  const posts = getBlogPosts(locale);
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-24">
      <Breadcrumb lang={locale} />
      <SectionTitle brand="MinKits" title={content.blog.title} subTitle={content.blog.description} lang={locale} />
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <Image src={post.image} alt="" width={800} height={450} className="aspect-video w-full object-cover" />
            <div className="p-6">
              <p className="text-xs text-zinc-500">{post.category} · {post.date}</p>
              <h2 className="mt-3 text-xl font-semibold text-zinc-900">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
              <Link href={`/${locale}/blog/${post.slug}`} className="mt-5 inline-flex font-semibold text-zinc-900 underline underline-offset-4">
                {locale === "fa" ? "ادامه مطلب" : "Read article"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
