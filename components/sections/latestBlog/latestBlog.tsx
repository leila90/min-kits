"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"

const blogs = [
    {
        title: "Clever ways to invest in product to organize your portfolio",
        desc: "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...",
        image: "/images/blog/1.png",
    },
    {
        title: "How to grow your profit through systematic investment with us",
        desc: "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..",
        image: "/images/blog/2.png",
    },
    {
        title: "Clever ways to invest in product to organize your portfolio",
        desc: "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...",
        image: "/images/blog/1.png",
    },
    {
        title: "How to grow your profit through systematic investment with us",
        desc: "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..",
        image: "/images/blog/2.png",
    },
]

type LatestBlogProps = { dict: { title: string; subtitle: string; viewAll: string; readMore: string } };

export default function LatestBlog({ dict }: LatestBlogProps) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-zinc-300 p-10">
                <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-between">

                    {/* Left content */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-between">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl font-bold text-zinc-500 mb-5">{dict.title}</h2>
                            <p className="text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0">{dict.subtitle}</p>

                            <a
                                href="#"
                                className="inline-flex justify-center items-center w-52 rounded-full border border-zinc-300 py-3.5 px-7 font-semibold text-zinc-900 transition hover:bg-zinc-100"
                            >
                                {dict.viewAll}
                            </a>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-6 justify-center lg:justify-start mt-10">
                            <button className="blog-prev group flex h-11 w-11 items-center justify-center rounded-full border border-indigo-600 transition hover:bg-indigo-600">
                                <svg
                                    className="h-6 w-6 text-indigo-600 group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
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

                            <button className="blog-next group flex h-11 w-11 items-center justify-center rounded-full border border-indigo-600 transition hover:bg-indigo-600">
                                <svg
                                    className="h-6 w-6 text-indigo-600 group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M3 12h16M14 18l5.293-5.293c.333-.333.5-.5.5-.707 0-.207-.167-.374-.5-.707L14 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="w-full lg:w-3/5">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".blog-next",
                                prevEl: ".blog-prev",
                            }}
                            loop
                            spaceBetween={28}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                            }}
                        >
                            {blogs.map((blog, i) => (
                                <SwiperSlide key={i}>
                                    <div className="group">
                                        <Image src={blog.image} alt={blog.title} width={600} height={400} className="mb-8 rounded-2xl w-full object-cover" />

                                        <h3 className="mb-4 text-xl font-medium text-zinc-900 group-hover:text-indigo-600 transition">
                                            {blog.title}
                                        </h3>

                                        <p className="mb-6 text-zinc-500">
                                            {blog.desc}
                                        </p>

                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-indigo-700 font-semibold"
                                        >
                                            {dict.readMore}
                                            <svg
                                                width="15"
                                                height="12"
                                                viewBox="0 0 15 12"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1.25 6h12M9.5 10.5l3.97-3.97c.25-.25.375-.375.375-.53 0-.155-.125-.28-.375-.53L9.5 1.5"
                                                    stroke="#4338CA"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    )
}
