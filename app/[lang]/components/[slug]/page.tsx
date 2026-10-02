import Link from "next/link";
import {notFound} from "next/navigation";
import Container from "../../../../components/ui/container";
import ComponentCatalogSidebar from "../../../../components/sections/componentCatalog/componentCatalogSidebar";
import ComponentPreview from "../../../../components/sections/componentCatalog/componentPreview";
import ComponentDemoTabs from "../../../../components/sections/componentCatalog/componentDemoTabs";
import {getComponentSource} from "../../../../components/registry/source";
import {getDictionary, isLang, type Lang} from "../../../i18n";
import {componentRegistry} from "../../../../components/registry";

type ComponentDetailPageProps = {
    params: Promise<{lang: string; slug: string}>;
};

export function generateStaticParams() {
    return ["en", "fa"].flatMap((lang) =>
        componentRegistry.map((component) => ({
            lang,
            slug: component.slug,
        })),
    );
}

export async function generateMetadata({params}: ComponentDetailPageProps) {
    const {lang: rawLang, slug} = await params;

    if (!isLang(rawLang)) {
        return {};
    }

    const component = componentRegistry.find((item) => item.slug === slug);

    if (!component) {
        return {};
    }

    const lang = rawLang as Lang;

    return {
        title: `${component.name[lang]} — MinKits`,
        description: component.description[lang],
        alternates: {
            canonical: `/${lang}/components/${slug}`,
        },
        openGraph: {
            title: `${component.name[lang]} — MinKits`,
            description: component.description[lang],
            url: `/${lang}/components/${slug}`,
        },
    };
}

export default async function ComponentDetailPage({params}: ComponentDetailPageProps) {
    const {lang: rawLang, slug} = await params;

    if (!isLang(rawLang)) {
        notFound();
    }

    const lang = rawLang as Lang;
    const component = componentRegistry.find((item) => item.slug === slug);

    if (!component) {
        notFound();
    }

    const copy = (await getDictionary(lang)).componentsCatalog;
    const source = getComponentSource(component);
    const categoryLabel = {
        form: lang === "fa" ? "فرم" : "Form",
        layout: lang === "fa" ? "چیدمان" : "Layout",
        feedback: lang === "fa" ? "بازخورد" : "Feedback",
    }[component.category];

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <section className="border-b border-zinc-200 py-16 md:py-24">
                <Container>
                    <Link
                        href={`/${lang}/components`}
                        className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
                    >
                        {copy.backToCatalog}
                    </Link>

                    <div className="mt-10 max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                            {component.category}
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                            {component.name[lang]}
                        </h1>
                        <p className="mt-5 text-base leading-7 text-zinc-600 md:text-lg">
                            {component.description[lang]}
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-16">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-12">
                        <ComponentCatalogSidebar
                            lang={lang}
                            activeSlug={component.slug}
                            registry={componentRegistry}
                        />

                        <div className="min-w-0">
                            <ComponentDemoTabs
                                preview={
                                    <ComponentPreview
                                        slug={component.slug}
                                        lang={lang}
                                    />
                                }
                                source={source}
                                previewLabel={copy.preview}
                                sourceLabel={copy.source}
                                copyLabel={copy.copy}
                                copiedLabel={copy.copied}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
