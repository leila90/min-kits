import Image from "next/image";
import Link from "next/link";
import type {BlogPost} from "@/content/blog";

type Props = {
    readMore: string;
    lang: "fa" | "en";
    post: BlogPost;
};

export default function BlogFeaturedCard({readMore, lang, post}: Props) {
    const href = `/${lang}/blog/${post.slug}`;

    return (
        <article className="row-span-2 min-w-0 rounded-2xl bg-blog-featured-background py-5 lg:basis-2/6">
            <div className="mx-6 mb-5 min-w-0">
                <div className="mb-5 flex min-w-0 items-center justify-between text-blog-featured-text">
                    <div className="flex min-w-0 items-center gap-x-4">
                        <Image src="/images/avatar2.jpg" alt="" width={40} height={40} className="size-10 rounded-full bg-blog-avatar-background"/>
                        <p className="min-w-0 text-sm font-semibold text-blog-featured-text">{post.author}</p>
                    </div>
                    <time dateTime={post.publishedAt} className="text-xs text-blog-featured-text">{post.publishedAt}</time>
                </div>
                <Image width={900} height={600} alt={post.imageAlt} src={post.image} className="my-5 aspect-[3/2] w-full rounded-2xl object-cover"/>
                <h2 className={`mb-2 border-blog-featured-text text-2xl font-bold tracking-tight text-blog-featured-text ${lang === "fa" ? "border-r-10 pr-2" : "border-l-10 pl-2"}`}>
                    <Link href={href}>{post.title}</Link>
                </h2>
                <p className="mb-5 font-light text-blog-featured-text">{post.description}</p>
                <div className="flex items-center justify-end">
                    <Link href={href} className="inline-flex items-center font-medium text-blog-featured-text hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">
                        {readMore}<span aria-hidden="true" className={lang === "fa" ? "mr-2" : "ml-2"}>{lang === "fa" ? "←" : "→"}</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
