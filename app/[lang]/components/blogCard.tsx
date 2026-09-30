import Image from "next/image";
import Link from "next/link";
import type { BlogPost, Locale } from "@/content/site";

type Props = { post: BlogPost; lang: Locale; readMore: string };

export default function BlogCard({ post, lang, readMore }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <Image src={post.image} alt="" width={800} height={450} className="aspect-video w-full object-cover" />
      <div className="p-6">
        <p className="text-xs text-zinc-500">{post.category} · {post.date}</p>
        <h3 className="mt-3 text-lg font-semibold text-zinc-900">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
        <Link href={`/${lang}/blog/${post.slug}`} className="mt-5 inline-block font-semibold underline underline-offset-4">
          {readMore}
        </Link>
      </div>
    </article>
  );
}
