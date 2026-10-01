import Image from "next/image";

type Props = {
    readMore: string;
    lang: "fa" | "en";
};

export default function BlogCard({readMore, lang}: Props) {
    return (
        <article className={`min-w-0 my-5 border-blog-card-border lg:basis-1/6 ${lang === "fa" ? "border-r" : "border-l"}`}>
            <div className="mx-6 mb-5 min-w-0">
                <div className="mb-5 flex min-w-0 items-center justify-between text-blog-card-text">
                    <div>
                        <div className="relative flex items-center gap-x-4">
                            <Image src="/images/avatar2.jpg" alt="" width={10} height={10} className="size-10 rounded-full bg-zinc-50"/>
                            <div className="text-sm/6">
                                <p className="font-semibold text-zinc-900">
                                    <a href="">
                                        <span className="absolute inset-0"/>
                                        Jese Leos
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`flex items-center ${lang === "fa" ? "justify-end" : "justify-start"} text-xs`}>
                        <time dateTime="2020-03-16" className="text-zinc-900">Mar 16, 2020</time>
                    </div>
                </div>
                <h2 className={`mb-2 border-blog-card-text ${lang === "fa" ? "border-r-10 pr-2" : "border-l-10 pl-2"} text-2xl font-bold tracking-tight text-zinc-900 dark:text-white`}>
                    <a href="#">How to quickly deploy a static website</a>
                </h2>
                <p className="mb-5 line-clamp-3 font-light text-blog-card-muted">
                    Static websites are now used
                    to bootstrap lots of websites and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both web designers and developers.
                </p>
                <div className="flex items-center justify-end">
                    <a href="#" className="inline-flex items-center font-medium text-blog-card-accent hover:underline">
                        {readMore}
                        <svg className={`h-4 w-4 ${lang === "fa" ? "mr-2 rotate-180" : "ml-2"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
}
