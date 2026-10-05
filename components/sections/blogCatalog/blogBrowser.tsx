"use client";

import Image from "next/image";
import Link from "next/link";
import {useMemo, useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import type {BlogPost, BlogCategory} from "@/content/blog";
import BlogSidebar from "./blogSidebar";

type Category = "all" | BlogCategory;
type SortMode = "newest" | "oldest" | "titleAsc" | "titleDesc";

type BlogBrowserProps = {
    lang: Lang;
    blog: Messages["blog"];
    posts: BlogPost[];
};

export default function BlogBrowser({lang, blog, posts: sourcePosts}: BlogBrowserProps) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<Category>("all");
    const [sort, setSort] = useState<SortMode>("newest");

    const categories = blog.categories as Record<BlogCategory, string>;
    const counts = useMemo<Record<Category, number>>(() => ({
        all: sourcePosts.length,
        components: sourcePosts.filter((post) => post.category === "components").length,
        react: sourcePosts.filter((post) => post.category === "react").length,
        tailwind: sourcePosts.filter((post) => post.category === "tailwind").length,
    }), [sourcePosts]);

    const posts = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase();
        const filtered = sourcePosts.filter((post) => {
            if (category !== "all" && post.category !== category) return false;
            if (!normalizedQuery) return true;
            return [post.title, post.description, post.author]
                .some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
        });

        return [...filtered].sort((a, b) => {
            if (sort === "oldest") return a.publishedAt.localeCompare(b.publishedAt);
            if (sort === "titleAsc") return a.title.localeCompare(b.title, lang === "fa" ? "fa" : "en");
            if (sort === "titleDesc") return b.title.localeCompare(a.title, lang === "fa" ? "fa" : "en");
            return b.publishedAt.localeCompare(a.publishedAt);
        });
    }, [category, lang, query, sort, sourcePosts]);

    return (
        <div className="mb-30 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
            <BlogSidebar lang={lang} activeCategory={category} categories={categories} counts={counts}
                         allLabel={blog.allCategories} onCategoryChange={setCategory}/>

            <div className="min-w-0">
                <div className="mb-10 grid gap-4 rounded-2xl border border-zinc-200 bg-zinc-100 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <label className="min-w-0">
                        <span className="sr-only">{blog.searchPlaceholder}</span>
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={blog.searchPlaceholder}
                            className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900"
                        />
                    </label>
                    <label className="flex items-center gap-3 text-xs font-semibold text-zinc-500">
                        <span>{blog.sort}</span>
                        <select
                            value={sort}
                            onChange={(event) => setSort(event.target.value as SortMode)}
                            className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 outline-none focus:border-zinc-900"
                        >
                            <option value="newest">{blog.sortNewest}</option>
                            <option value="oldest">{blog.sortOldest}</option>
                            <option value="titleAsc">{blog.sortTitleAsc}</option>
                            <option value="titleDesc">{blog.sortTitleDesc}</option>
                        </select>
                    </label>
                </div>

                {posts.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-zinc-300 px-6 py-16 text-center text-sm text-zinc-500">{blog.noResults}</div>
                ) : (
                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <article key={post.slug} className="group overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_18px_45px_rgb(0_0_0_/0.07)]">
                                <div className="grid md:grid-cols-[280px_minmax(0,1fr)]">
                                    <Link href={`/${lang}/blog/${post.slug}`} className="relative block min-h-56 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-zinc-950">
                                        <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 768px) 280px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>
                                    </Link>
                                    <div className={`flex min-w-0 flex-col p-6 md:p-7 ${lang === "fa" ? "text-right" : "text-left"}`}>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">{categories[post.category]}</span>
                                            <time dateTime={post.publishedAt} className="text-xs font-medium text-zinc-400">{post.publishedAt}</time>
                                        </div>
                                        <h2 className="mt-5 text-xl font-bold tracking-tight text-zinc-900 md:text-2xl">
                                            <Link href={`/${lang}/blog/${post.slug}`} className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">{post.title}</Link>
                                        </h2>
                                        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{post.description}</p>
                                        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                                            <span className="text-xs text-zinc-400">{post.author} · {post.readTime} min</span>
                                            <Link href={`/${lang}/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">
                                                {blog.readMore}<span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
