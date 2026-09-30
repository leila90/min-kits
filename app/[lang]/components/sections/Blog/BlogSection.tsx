import { getBlogPosts, type Locale, type SiteContent } from "@/content/site";
import SectionTitle from "@/app/[lang]/components/ui/SectionTitle";
import BlogCard from "@/app/[lang]/components/cards/BlogCard";

type Props = { lang: Locale; content: SiteContent };

export default function BlogSection({ lang, content }: Props) {
  const items = getBlogPosts(lang);

  return (
    <section id="blog" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.home.blogTitle} subTitle={content.home.blogSubtitle} lang={lang} />
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-3">
        {items.map((post) => <BlogCard key={post.slug} post={post} lang={lang} readMore={content.blog.readMore} />)}
      </div>
    </section>
  );
}
