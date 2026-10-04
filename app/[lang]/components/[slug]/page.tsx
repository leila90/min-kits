import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getDictionary, getDirection, isLang, locales, type Lang} from "@/app/i18n";
import Breadcrumb from "@/components/common/breadcrumb";
import {FooterHeader, Header} from "@/components/layout";
import {componentRegistry} from "@/components/registry";
import {getComponentSource} from "@/components/registry/source";
import ComponentCatalogSidebar from "@/components/sections/componentCatalog/componentCatalogSidebar";
import ComponentDemoTabs from "@/components/sections/componentCatalog/componentDemoTabs";
import {ComponentPreview} from "@/components/sections/componentCatalog/previews";
import Container from "@/components/ui/container";

type ComponentDetailPageProps = {
    params: Promise<{lang: string; slug: string}>;
};

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
    return locales.flatMap((lang) =>
        componentRegistry.map((component) => ({
            lang,
            slug: component.slug,
        })),
    );
}

export async function generateMetadata({params}: ComponentDetailPageProps): Promise<Metadata> {
    const {lang, slug} = await params;

    if (!isLang(lang)) {
        return {};
    }

    const component = componentRegistry.find((item) => item.slug === slug);

    if (!component) {
        return {};
    }

    const title = component.name[lang];
    const description = component.description[lang];
    const path = `/${lang}/components/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
            languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/components/${slug}`])),
        },
        openGraph: {title: `${title} | MinKits`, description, url: path},
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

    const dictionary = await getDictionary(lang);
    const copy = dictionary.componentsCatalog;
    const source = await getComponentSource(component);
    const componentIndex = componentRegistry.findIndex((item) => item.slug === component.slug);
    const categoryLabel = copy.categories[component.category];
    const previousComponent = componentRegistry[componentIndex - 1];
    const nextComponent = componentRegistry[componentIndex + 1];

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <section className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-40">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            {categoryLabel}
                        </span>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-200 md:text-5xl">
                            {component.name[lang]}
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                            {component.description[lang]}
                        </p>
                    </div>
                </Container>
            </section>

            <Header />

            <section className="pb-8 md:pb-10">
                <Breadcrumb
                    lang={lang}
                    dict={dictionary.breadcrumbs}
                    page="components"
                    currentLabel={component.name[lang]}
                />

                <Container>
                    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-8">
                        <ComponentCatalogSidebar
                            lang={lang}
                            activeSlug={component.slug}
                            registry={componentRegistry}
                            copy={copy}
                        />

                        <div className="min-w-0 lg:col-start-2">
                            <div className="mb-3 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900">
                                        {copy.interactiveDemo}
                                    </p>
                                </div>
                            </div>

                            <ComponentDemoTabs
                                preview={
                                    <ComponentPreview slug={component.slug} copy={copy.demo} dir={getDirection(lang)} />
                                }
                                source={source}
                                previewLabel={copy.preview}
                                sourceLabel={copy.source}
                                copyLabel={copy.copy}
                                copiedLabel={copy.copied}
                            />
                        </div>

                        <div className="space-y-6 lg:col-start-2">
                            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50" aria-labelledby="component-usage">
                                <div className="flex flex-col gap-4 border-b border-zinc-200 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{copy.usage}</p>
                                        <h2 id="component-usage" className="mt-1.5 text-xl font-bold tracking-tight text-zinc-900">
                                            {copy.startHere}
                                        </h2>
                                    </div>
                                    <span className="text-sm text-zinc-500">
                                        {component.examples.length} {component.examples.length === 1 ? copy.example : copy.examples}
                                    </span>
                                </div>

                                <div className="divide-y divide-zinc-200 bg-white">
                                    {component.examples.map((example, index) => (
                                        <div key={`${index}-${example.title.en}`} className="p-5 md:p-6">
                                            <div className="mb-3 flex items-center gap-3">
                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-white">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-semibold text-zinc-900">{example.title[lang]}</h3>
                                            </div>
                                            <pre dir="ltr" className="overflow-x-auto rounded-2xl bg-zinc-800 p-4 text-sm leading-7 text-zinc-100 shadow-sm">
                                                <code>{example.code}</code>
                                            </pre>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50" aria-labelledby="component-api">
                                <div className="border-b border-zinc-200 px-5 py-4 md:px-6">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{copy.api}</p>
                                            <h2 id="component-api" className="mt-1.5 text-xl font-bold tracking-tight text-zinc-900">{copy.props}</h2>
                                        </div>
                                        <span className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500 ring-1 ring-inset ring-zinc-200">
                                            {component.props.length} {copy.documentedProps}
                                        </span>
                                    </div>
                                </div>

                                <div className="divide-y divide-zinc-200 bg-white">
                                    {component.props.map((prop) => (
                                        <article key={prop.name} className="p-6 md:p-7" dir={getDirection(lang)}>
                                            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                                                <div className="min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <code className="rounded-lg bg-zinc-100 px-2.5 py-1 text-sm font-semibold text-zinc-900">
                                                            {prop.name}
                                                        </code>
                                                        <code className="text-xs text-zinc-500">{prop.type}</code>
                                                        <span className={prop.required
                                                            ? "rounded-full bg-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
                                                            : "rounded-full border border-zinc-200 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
                                                        }>
                                                            {prop.required ? copy.required : copy.optional}
                                                        </span>
                                                    </div>
                                                    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                                                        {prop.description[lang]}
                                                    </p>
                                                </div>

                                                <div className="flex shrink-0 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-100 px-3 py-2 text-xs text-zinc-500">
                                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                                                        {copy.defaultValue}
                                                    </span>
                                                    <code className="text-zinc-700">{prop.defaultValue ?? "—"}</code>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    <nav
                        aria-label={copy.browseAllComponents}
                        className="mb-8 mt-8 grid grid-cols-1 gap-3 border-t border-zinc-200 pt-6 md:mt-10 md:grid-cols-2 md:gap-4 md:pt-8"
                    >
                        <Link
                            href={previousComponent ? `/${lang}/components/${previousComponent.slug}` : `/${lang}/components`}
                            className="group flex min-h-24 flex-col justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-start transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 md:px-6"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                                ← {copy.previousComponent}
                            </span>
                            <span className="mt-2 text-sm font-semibold text-zinc-700 group-hover:text-zinc-950">
                                {previousComponent ? previousComponent.name[lang] : copy.browseAllComponents}
                            </span>
                        </Link>

                        <Link
                            href={nextComponent ? `/${lang}/components/${nextComponent.slug}` : `/${lang}/components`}
                            className="group flex min-h-24 flex-col justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-end transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 md:px-6"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                                {copy.nextComponent} →
                            </span>
                            <span className="mt-2 text-sm font-semibold text-zinc-700 group-hover:text-zinc-950">
                                {nextComponent ? nextComponent.name[lang] : copy.browseAllComponents}
                            </span>
                        </Link>
                    </nav>
                </Container>
            </section>

            <FooterHeader />
        </main>
    );
}
