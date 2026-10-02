import Link from "next/link";
import {notFound} from "next/navigation";
import Container from "../../../components/ui/container";
import SectionTitle from "../../../components/common/sectionTitle";
import ComponentCatalogSidebar from "../../../components/sections/componentCatalog/componentCatalogSidebar";
import {getDictionary, isLang, type Lang} from "../../i18n";
import {componentRegistry} from "../../../components/registry";

type ComponentsPageProps = {
    params: Promise<{lang: string}>;
};

const categoryLabels = {
    en: {
        form: "Form",
        layout: "Layout",
        feedback: "Feedback",
    },
    fa: {
        form: "فرم",
        layout: "چیدمان",
        feedback: "بازخورد",
    },
} as const;

export async function generateMetadata({params}: ComponentsPageProps) {
    const {lang} = await params;

    if (!isLang(lang)) {
        return {};
    }

    const copy = (await getDictionary(lang)).componentsCatalog;

    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        alternates: {
            canonical: `/${lang}/components`,
        },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: `/${lang}/components`,
        },
    };
}

export default async function ComponentsPage({params}: ComponentsPageProps) {
    const {lang: rawLang} = await params;

    if (!isLang(rawLang)) {
        notFound();
    }

    const lang = rawLang as Lang;
    const copy = (await getDictionary(lang)).componentsCatalog;
    const categories = [...new Set(componentRegistry.map((component) => component.category))];

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <section className="border-b border-zinc-200 bg-white py-20 md:py-28">
                <Container>
                    <SectionTitle
                        brand="MinKits"
                        title={copy.title}
                        subTitle={copy.subtitle}
                        lang={lang}
                    />
                </Container>
            </section>

            <section className="py-12 md:py-16">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start lg:gap-12">
                        <ComponentCatalogSidebar
                            lang={lang}
                            activeSlug=""
                            registry={componentRegistry}
                        />

                        <div className="min-w-0 space-y-16">
                            {categories.map((category) => {
                                const items = componentRegistry.filter((component) => component.category === category);

                                return (
                                    <section key={category} aria-labelledby={`components-${category}`}>
                                        <div className="mb-6 flex items-end justify-between gap-6 border-b border-zinc-200 pb-4">
                                            <h2
                                                id={`components-${category}`}
                                                className="text-xl font-bold tracking-tight text-zinc-900"
                                            >
                                                {categoryLabels[lang][category]}
                                            </h2>
                                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                                {String(items.length).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                                            {items.map((component) => (
                                                <Link
                                                    key={component.slug}
                                                    href={`/${lang}/components/${component.slug}`}
                                                    className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-[0_18px_45px_rgb(0_0_0_/0.07)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
                                                >
                                                    <div className="mb-10 flex items-center justify-between gap-4">
                                                        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
                                                            {categoryLabels[lang][component.category]}
                                                        </span>
                                                        <span className="text-xs font-medium text-zinc-400">
                                                            {component.slug}
                                                        </span>
                                                    </div>

                                                    <div className="mb-6 flex min-h-28 items-center justify-center rounded-xl bg-zinc-50 p-6">
                                                        <div className="w-full max-w-48">
                                                            {component.slug === "button" && (
                                                                <div className="mx-auto flex justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">
                                                                    {lang === "fa" ? "ادامه" : "Continue"}
                                                                </div>
                                                            )}
                                                            {component.slug === "input" && (
                                                                <div className="h-11 rounded-xl border border-zinc-300 bg-white" />
                                                            )}
                                                            {component.slug === "textarea" && (
                                                                <div className="h-20 rounded-xl border border-zinc-300 bg-white" />
                                                            )}
                                                            {component.slug === "form-field" && (
                                                                <div>
                                                                    <div className="mb-2 h-3 w-20 rounded bg-zinc-300" />
                                                                    <div className="h-11 rounded-xl border border-zinc-300 bg-white" />
                                                                </div>
                                                            )}
                                                            {component.slug === "divider" && (
                                                                <div className="h-px w-full bg-zinc-300" />
                                                            )}
                                                        </div>
                                                    </div>

                                                    <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                                                        {component.name[lang]}
                                                    </h3>
                                                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                                                        {component.description[lang]}
                                                    </p>

                                                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                                                        {copy.viewComponent}
                                                        <span aria-hidden="true">→</span>
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
