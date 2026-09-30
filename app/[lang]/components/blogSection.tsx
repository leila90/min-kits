import Image from "next/image";
import Link from "next/link";
import { getBlogPosts, type Locale, type SiteContent } from "@/content/site";
import SectionTitle from "./sectionTitle";

type Props = { lang: Locale; content: SiteContent };

export default function BlogSection({ lang, content }: Props) {
  const items = getBlogPosts(lang);

  return (
    <section id="blog" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.home.blogTitle} subTitle={content.home.blogSubtitle} lang={lang} />
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-3">
        {items.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <Image src={post.image} alt="" width={800} height={450} className="aspect-video w-full object-cover" />
            <div className="p-6">
              <p className="text-xs text-zinc-500">{post.category} · {post.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
              <Link href={`/${lang}/blog/${post.slug}`} className="mt-5 inline-block font-semibold underline underline-offset-4">
                {lang === "fa" ? "ادامه مطلب" : "Read article"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
