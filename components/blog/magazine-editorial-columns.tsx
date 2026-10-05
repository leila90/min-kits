import type {BlogPost} from "@/content/blog";

type Props = {
    lang: "en" | "fa";
    post: BlogPost;
};

export function MagazineEditorialColumns({lang, post}: Props) {
    return (
        <section dir={lang === "fa" ? "rtl" : "ltr"} className="mb-16 bg-white">
            <div className="mx-auto w-full max-w-[980px] px-0 sm:px-4">
                <div className="relative mb-8 overflow-hidden">
                    <p className="mt-3 text-sm text-neutral-500">{post.author} &nbsp;·&nbsp; {post.role}</p>
                </div>

                <figure className="mx-auto max-w-4xl px-2 pb-10 text-center sm:px-10">
                    <svg className="mx-auto mb-4 h-11 w-11 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>
                    </svg>
                    <blockquote>
                        <p className="text-2xl font-semibold italic tracking-tight text-heading md:text-3xl">{post.quote}</p>
                    </blockquote>
                </figure>

                <div className="space-y-12">
                    {post.sections.map((section, index) => (
                        <section key={section.heading} className="grid gap-7 md:grid-cols-[120px_minmax(0,1fr)]">
                            <div className="font-mono text-xs font-semibold tracking-[0.18em] text-neutral-400">{String(index + 1).padStart(2, "0")}</div>
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight text-heading">{section.heading}</h2>
                                <div className="mt-5 space-y-5 text-base leading-8 text-neutral-600">
                                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-12 border-t border-neutral-200 pt-4">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                        <span>{post.category}</span>
                        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                        <span>{post.readTime} min read</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
