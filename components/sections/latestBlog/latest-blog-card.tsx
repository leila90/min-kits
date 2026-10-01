import Image from "next/image";

type Props = {
    title: string;
    desc: string;
    image: string;
    readMore: string;
};

export default function LatestBlogCard({title, desc, image, readMore}: Props) {
    return (
        <article className="group min-w-0">
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="mb-8 aspect-3/2 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <h3 className="mb-4 text-xl font-medium text-latest-blog-heading transition-colors group-hover:text-latest-blog-accent">
                {title}
            </h3>

            <p className="mb-6 text-latest-blog-muted">
                {desc}
            </p>

            <a
                href="#"
                className="inline-flex min-w-0 items-center gap-2 font-semibold text-latest-blog-accent"
            >
                {readMore}
                <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M1.25 6h12M9.5 10.5l3.97-3.97c.25-.25.375-.375.375-.53 0-.155-.125-.28-.375-.53L9.5 1.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
        </article>
    );
}
