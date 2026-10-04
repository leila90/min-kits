"use client";

import Link from "next/link";
import {useMemo, useState} from "react";
import type {Lang} from "@/app/i18n";
import type {Messages} from "@/app/i18n/messages";
import BlogSidebar from "./blogSidebar";

type Category = "all" | "components" | "react" | "tailwind";
type SortMode = "newest" | "oldest" | "titleAsc" | "titleDesc";

type BlogBrowserProps = {
    lang: Lang;
    blog: Messages["blog"];
};

const categoryOrder: Exclude<Category, "all">[] = ["components", "react", "tailwind"];

export default function BlogBrowser({lang, blog}: BlogBrowserProps) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<Category>("all");
    const [sort, setSort] = useState<SortMode>("newest");

    const categories = blog.categories as Record<Exclude<Category, "all">, string>;
    const counts = useMemo<Record<Category, number>>(() => ({
        all: blog.posts.length,
        components: blog.posts.filter((post) => post.category === "components").length,
        react: blog.posts.filter((post) => post.category === "react").length,
        tailwind: blog.posts.filter((post) => post.category === "tailwind").length,
    }), [blog.posts]);

    const posts = useMemo(() => {
        const normalizedQuery = query.trim().toLocaleLowerCase();
        const filtered = blog.posts.map((post, index) => ({post, index})).filter(({post}) => {
            if (category !== "all" && post.category !== category) return false;
            if (!normalizedQuery) return true;
            return [post.title, post.description].some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
        });

        return filtered.sort((a, b) => {
            if (sort === "oldest") return a.index - b.index;
            if (sort === "titleAsc") return a.post.title.localeCompare(b.post.title, lang === "fa" ? "fa" : "en");
            if (sort === "titleDesc") return b.post.title.localeCompare(a.post.title, lang === "fa" ? "fa" : "en");
            return b.index - a.index;
        });
    }, [blog.posts, category, lang, query, sort]);

    return (
        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
            <BlogSidebar lang={lang} activeCategory={category} categories={categories} counts={counts} allLabel={blog.allCategories} onCategoryChange={setCategory} />

            <div className="min-w-0">
                <div className="mb-10 grid gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
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
                    <div className="grid gap-5 md:grid-cols-2">
                        {posts.map(({post, index}) => {
                            const postId = blog.posts.indexOf(post) + 1;
                            return (
                                <article key={post.category + "-" + index} className="group flex min-w-0 flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_18px_45px_rgb(0_0_0_/0.07)]">
                                    <div className="mb-8 flex items-center justify-between gap-4">
                                        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
                                            {categories[post.category as Exclude<Category, "all">]}
                                        </span>
                                        <span className="text-xs font-medium text-zinc-400">{String(postId).padStart(2, "0")}</span>
                                    </div>
                                    <div className="mb-8 flex min-h-36 items-end rounded-xl bg-zinc-100 p-5">
                                        <span className="text-5xl font-bold tracking-[-0.06em] text-zinc-300">{String(postId).padStart(2, "0")}</span>
                                    </div>
                                    <h2 className="text-xl font-bold leading-8 tracking-tight text-zinc-900">
                                        <Link href={"/" + lang + "/blog/" + postId} className="transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{post.description}</p>
                                    <Link href={"/" + lang + "/blog/" + postId} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-transform duration-200 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 rtl:hover:-translate-x-1">
                                        {blog.readMore}
                                        <span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
