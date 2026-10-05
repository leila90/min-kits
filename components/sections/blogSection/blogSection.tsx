import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";
import BlogCard from "./blog-card";
import BlogFeaturedCard from "./blog-featured-card";
import {getBlogPosts} from "@/content/blog";

type Props = {
    lang: "fa" | "en";
    dict: {title: string; subtitle: string; readMore: string; viewAll: string};
};

export default function BlogSection({lang, dict}: Props) {
    const posts = getBlogPosts(lang);

    return (
        <section id="blogSection" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <SectionTitle brand="MinKits Team" title={dict.title} subTitle={dict.subtitle} lang={lang}/>
                <div className="grid min-w-0 gap-4 text-justify md:grid-flow-col md:grid-cols-2 md:grid-rows-3 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2">
                    <BlogFeaturedCard post={posts[0]} readMore={dict.readMore} lang={lang}/>
                    {posts.slice(1, 5).map((post) => <BlogCard key={post.slug} post={post} readMore={dict.readMore} lang={lang}/>)}
                </div>
            </Container>
        </section>
    );
}
