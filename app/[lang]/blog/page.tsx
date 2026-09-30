import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import SectionTitle from "../components/sectionTitle";
import BlogCard from "../components/blogCard";
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
        {posts.map((post) => <BlogCard key={post.slug} post={post} lang={locale} readMore={content.blog.readMore} />)}
      </div>
    </main>
  );
}
