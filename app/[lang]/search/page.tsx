import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getDictionary, isLang} from "@/app/i18n";
import {componentRegistry} from "@/components/registry";
import {Header, FooterHeader} from "@/components/layout";
import Container from "@/components/ui/container";
import Badge from "@/components/ui/badge";

type SearchPageProps = {
    params: Promise<{lang: string}>;
    searchParams: Promise<{q?: string}>;
};

export async function generateMetadata({params}: SearchPageProps): Promise<Metadata> {
    const {lang} = await params;
    if (!isLang(lang)) return {};
    const dictionary = await getDictionary(lang);
    return {
        title: dictionary.search.title,
        description: dictionary.search.description,
        alternates: {
            canonical: `/${lang}/search`,
            languages: {en: "/en/search", fa: "/fa/search"},
        },
        robots: {index: false, follow: true},
    };
}

export default async function SearchPage({params, searchParams}: SearchPageProps) {
    const {lang} = await params;
    if (!isLang(lang)) notFound();

    const dictionary = await getDictionary(lang);
    const {q = ""} = await searchParams;
    const query = q.trim().toLocaleLowerCase();

    const componentResults = query
        ? componentRegistry.filter((item) =>
            [item.slug, item.name.en, item.name.fa, item.description.en, item.description.fa]
                .some((value) => value.toLocaleLowerCase().includes(query)),
        )
        : [];

    const blogResults = query
        ? dictionary.blog.posts
            .map((post, index) => ({post, index}))
            .filter(({post}) =>
                [post.title, post.description, post.category].some((value) =>
                    value.toLocaleLowerCase().includes(query),
                ),
            )
        : [];

    const packResults = query
        ? dictionary.componentPacks.blocks.filter((block) =>
            [block.title, block.description, block.tag].some((value) =>
                value.toLocaleLowerCase().includes(query),
            ),
        )
        : [];

    const hasResults = componentResults.length + blogResults.length + packResults.length > 0;

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <section className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-20 md:pt-40">
                <Container>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        MinKits
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                        {dictionary.search.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                        {dictionary.search.description}
                    </p>
                </Container>
            </section>

            <Header/>

            <section className="py-12 md:py-16">
                <Container>
                    <form method="get" className="mx-auto flex max-w-3xl gap-3">
                        <label htmlFor="site-search" className="sr-only">{dictionary.search.inputLabel}</label>
                        <input
                            id="site-search"
                            name="q"
                            defaultValue={q}
                            placeholder={dictionary.search.placeholder}
                            className="min-w-0 flex-1 rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
                        />
                        <button
                            type="submit"
                            className="shrink-0 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                        >
                            {dictionary.search.submit}
                        </button>
                    </form>

                    {query && (
                        <div className="mt-12">
                            <p className="text-sm text-zinc-500">
                                {hasResults ? dictionary.search.resultsFor.replace("{query}", q) : dictionary.search.noResults.replace("{query}", q)}
                            </p>

                            {hasResults && (
                                <div className="mt-8 space-y-10">
                                    {componentResults.length > 0 && (
                                        <section>
                                            <h2 className="text-xl font-semibold">{dictionary.search.components}</h2>
                                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                                {componentResults.map((item) => (
                                                    <Link key={item.slug} href={`/${lang}/components/${item.slug}`} className="rounded-2xl border border-zinc-200 p-5 transition-shadow hover:shadow-md">
                                                        <Badge>{item.category}</Badge>
                                                        <h3 className="mt-3 font-semibold">{item.name[lang]}</h3>
                                                        <p className="mt-2 text-sm leading-6 text-zinc-500">{item.description[lang]}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {packResults.length > 0 && (
                                        <section>
                                            <h2 className="text-xl font-semibold">{dictionary.search.packs}</h2>
                                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                                {packResults.map((block) => (
                                                    <Link key={block.number} href={`/${lang}/components/component-packs`} className="rounded-2xl border border-zinc-200 p-5 transition-shadow hover:shadow-md">
                                                        <Badge>{block.tag}</Badge>
                                                        <h3 className="mt-3 font-semibold">{block.title}</h3>
                                                        <p className="mt-2 text-sm leading-6 text-zinc-500">{block.description}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {blogResults.length > 0 && (
                                        <section>
                                            <h2 className="text-xl font-semibold">{dictionary.search.blog}</h2>
                                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                                {blogResults.map(({post, index}) => (
                                                    <Link key={index} href={`/${lang}/blog/${index + 1}`} className="rounded-2xl border border-zinc-200 p-5 transition-shadow hover:shadow-md">
                                                        <Badge>{post.category}</Badge>
                                                        <h3 className="mt-3 font-semibold">{post.title}</h3>
                                                        <p className="mt-2 text-sm leading-6 text-zinc-500">{post.description}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </Container>
            </section>
            <FooterHeader/>
        </main>
    );
}
