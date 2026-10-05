import Image from "next/image";
import Link from "next/link";
import type {BlogPost} from "@/content/blog";

type Props = {
    readMore: string;
    lang: "fa" | "en";
    post: BlogPost;
};

export default function BlogCard({readMore, lang, post}: Props) {
    const href = `/${lang}/blog/${post.slug}`;

    return (
        <article className={`my-5 min-w-0 border-blog-card-border lg:basis-1/6 ${lang === "fa" ? "border-r" : "border-l"}`}>
            <div className="mx-6 mb-5 min-w-0">
                <div className="mb-5 flex min-w-0 items-center justify-between text-blog-card-text">
                    <div className="flex min-w-0 items-center gap-x-4">
                        <Image src="/images/avatar2.jpg" alt="" width={40} height={40} className="size-10 rounded-full bg-blog-avatar-background"/>
                        <div className="min-w-0 text-sm/6">
                            <p className="font-semibold text-blog-card-text">{post.author}</p>
                        </div>
                    </div>
                    <time dateTime={post.publishedAt} className="text-xs text-blog-card-text">{post.publishedAt}</time>
                </div>
                <Image src={post.image} alt={post.imageAlt} width={600} height={380} className="mb-5 aspect-[3/2] w-full rounded-2xl object-cover"/>
                <h2 className={`mb-2 border-blog-card-text ${lang === "fa" ? "border-r-10 pr-2" : "border-l-10 pl-2"} text-2xl font-bold tracking-tight text-blog-card-text`}>
                    <Link href={href}>{post.title}</Link>
                </h2>
                <p className="mb-5 line-clamp-3 font-light text-blog-card-muted">{post.description}</p>
                <div className="flex items-center justify-end">
                    <Link href={href} className="inline-flex items-center font-medium text-blog-card-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">
                        {readMore}
                        <span aria-hidden="true" className={lang === "fa" ? "mr-2" : "ml-2"}>{lang === "fa" ? "←" : "→"}</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
