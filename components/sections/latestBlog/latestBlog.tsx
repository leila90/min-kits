"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import Link from "next/link"
import Container from "@/components/ui/container"
import LatestBlogCard from "./latest-blog-card"
import {getBlogPosts} from "@/content/blog"



type LatestBlogProps = {
    lang: "fa" | "en";
    dict: {title: string; subtitle: string; viewAll: string; readMore: string};
};

export default function LatestBlog({lang, dict}: LatestBlogProps) {
    const blogs = getBlogPosts(lang).slice(0, 3)

    return (
        <section id="latestBlog" dir={lang === "fa" ? "rtl" : "ltr"} className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <div className="min-w-0 rounded-2xl bg-latest-blog-background p-6 sm:p-8 lg:p-10">
                    <div className="grid min-w-0 gap-10 lg:grid-cols-[2fr_3fr] lg:items-stretch">
                        <div className="flex min-w-0 flex-col justify-between">
                            <div className="text-center lg:text-start">
                                <h2 className="mb-5 text-3xl font-bold text-latest-blog-muted md:text-4xl">
                                    {dict.title}
                                </h2>
                                <p className="mx-auto mb-10 max-w-xl text-latest-blog-muted lg:mx-0">
                                    {dict.subtitle}
                                </p>

                                <Link
                                    href={`/${lang}/blog`}
                                    className="inline-flex w-52 items-center justify-center rounded-full border border-latest-blog-view-all-border px-7 py-3.5 font-semibold text-latest-blog-heading transition-colors hover:bg-latest-blog-view-all-hover"
                                >
                                    {dict.viewAll}
                                </Link>
                            </div>

                            <div className="mt-10 flex justify-center gap-6 lg:justify-start">
                                <button
                                    type="button"
                                    aria-label={lang === "fa" ? "مقاله قبلی" : "Previous blog"}
                                    className="blog-prev group flex h-11 w-11 items-center justify-center rounded-full border border-latest-blog-button-border transition-colors hover:bg-latest-blog-button-hover"
                                >
                                    <svg
                                        className="h-6 w-6 text-latest-blog-button-text group-hover:text-latest-blog-button-hover-text"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M21 12H5M10 6L5 11.293c-.333.333-.5.5-.5.707 0 .207.167.374.5.707L10 18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    aria-label={lang === "fa" ? "مقاله بعدی" : "Next blog"}
                                    className="blog-next group flex h-11 w-11 items-center justify-center rounded-full border border-latest-blog-button-border transition-colors hover:bg-latest-blog-button-hover"
                                >
                                    <svg
                                        className="h-6 w-6 text-latest-blog-button-text group-hover:text-latest-blog-button-hover-text"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 12h16M14 18l5.293-5.293c.333-.333.5-.375-.5-.707L14 6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="min-w-0 overflow-hidden">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: ".blog-next",
                                    prevEl: ".blog-prev",
                                }}
                                loop
                                spaceBetween={28}
                                breakpoints={{
                                    0: {slidesPerView: 1},
                                    640: {slidesPerView: 2},
                                }}
                            >
                                {blogs.map((blog, i) => (
                                    <SwiperSlide key={i} className="min-w-0">
                                        <LatestBlogCard
                                            title={blog.title}
                                            desc={blog.description}
                                            image={blog.image}
                                            readMore={dict.readMore}
                                            href={`/${lang}/blog/${blog.slug}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
