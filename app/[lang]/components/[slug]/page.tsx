import Link from "next/link";
import {notFound} from "next/navigation";
import Container from "../../../../components/ui/container";
import FooterHeader from "../../../../components/layout/footerHeader";
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
    const componentIndex = componentRegistry.findIndex((item) => item.slug === component.slug);
    const componentIndex = componentRegistry.findIndex((item) => item.slug === component.slug);
    const categoryLabel = {
        form: lang === "fa" ? "فرم" : "Form",
        layout: lang === "fa" ? "چیدمان" : "Layout",
        feedback: lang === "fa" ? "بازخورد" : "Feedback",
    }[component.category];

    return (
        <main className="min-h-screen bg-zinc-50 pt-20 text-zinc-900 md:pt-24">
            <section className="border-b border-zinc-200 py-8 md:py-10">
                <Container>
                    <Link
                        href={`/${lang}/components`}
                        className="text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
                    >
                        {copy.backToCatalog}
                    </Link>

                    <div className="mt-7 max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            {categoryLabel}
                        </span>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
                            {component.name[lang]}
                        </h1>
                        <p className="mt-3 text-base leading-7 text-zinc-500 md:text-lg">
                            {component.description[lang]}
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-8 md:py-10">
                <Container>
                    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-8">
                        <ComponentCatalogSidebar
                            lang={lang}
                            activeSlug={component.slug}
                            registry={componentRegistry}
                        />

                        <div className="min-w-0 lg:col-start-2">
                            <div className="mb-3 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                                        {copy.interactiveDemo}
                                    </p>
                                </div>
                                <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500">
                                    {categoryLabel}
                                </span>
                            </div>

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

                        <div className="space-y-6 lg:col-start-2">
                            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100" aria-labelledby="component-usage">
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

                                <div className="divide-y divide-zinc-200">
                                    {component.examples.map((example, index) => (
                                        <div key={example.code} className="p-5 md:p-6">
                                            <div className="mb-3 flex items-center gap-3">
                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-white">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-semibold text-zinc-900">{example.title[lang]}</h3>
                                            </div>
                                            <pre dir="ltr" className="overflow-x-auto rounded-2xl bg-zinc-900 p-4 text-sm leading-7 text-zinc-100 shadow-sm">
                                                <code>{example.code}</code>
                                            </pre>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50" aria-labelledby="component-api">
                                <div className="border-b border-zinc-200 bg-zinc-100 px-5 py-4 md:px-6">
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

                                <div className="divide-y divide-zinc-100">
                                    {component.props.map((prop) => (
                                        <article key={prop.name} className="p-6 md:p-7" dir={lang === "fa" ? "rtl" : "ltr"}>
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                <div className="min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <code className="rounded-lg bg-zinc-100 px-2.5 py-1 text-sm font-semibold text-zinc-900">
                                                            {prop.name}
                                                        </code>
                                                        <code className="text-xs text-zinc-500">{prop.type}</code>
                                                        {prop.required && (
                                                            <span className="rounded-full bg-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                                                                {copy.required}
                                                            </span>
                                                        )}
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
                        className="mt-8 border-t border-zinc-200 pt-6 md:mt-10 md:pt-8"
                    >
                        <div className="flex items-center justify-between gap-6">
                            <Link
                                href={componentIndex > 0 ? `/${lang}/components/${componentRegistry[componentIndex - 1].slug}` : `/${lang}/components`}
                                className="text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
                            >
                                ← {copy.previousComponent}
                            </Link>
                            <Link
                                href={componentIndex < componentRegistry.length - 1 ? `/${lang}/components/${componentRegistry[componentIndex + 1].slug}` : `/${lang}/components`}
                                className="text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
                            >
                                {copy.nextComponent} →
                            </Link>
                        </div>
                    </nav>

                </Container>
            </section>
            <FooterHeader />
        </main>
    );
}
