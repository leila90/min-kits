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
                            {categoryLabel}
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

                        <div className="mt-8 space-y-8 lg:col-start-2">
                            <section className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8" aria-labelledby="component-usage">
                                <div className="mb-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{copy.usage}</p>
                                    <h2 id="component-usage" className="mt-2 text-xl font-bold tracking-tight text-zinc-900">{component.examples[0]?.title[lang] ?? component.name[lang]}</h2>
                                </div>
                                <pre dir="ltr" className="overflow-x-auto rounded-2xl bg-zinc-950 p-5 text-sm leading-7 text-zinc-100"><code>{component.examples[0]?.code ?? ""}</code></pre>
                            </section>

                            <section className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8" aria-labelledby="component-api">
                                <div className="mb-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{copy.api}</p>
                                    <h2 id="component-api" className="mt-2 text-xl font-bold tracking-tight text-zinc-900">{copy.props}</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[720px] text-sm" dir={lang === "fa" ? "rtl" : "ltr"}>
                                        <thead className="border-b border-zinc-200 text-zinc-500">
                                            <tr>
                                                <th className="px-3 py-3 font-semibold">{copy.propName}</th>
                                                <th className="px-3 py-3 font-semibold">{copy.propType}</th>
                                                <th className="px-3 py-3 font-semibold">{lang === "fa" ? "توضیحات" : "Description"}</th>
                                                <th className="px-3 py-3 font-semibold">{copy.required}</th>
                                                <th className="px-3 py-3 font-semibold">{copy.defaultValue}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {component.props.map((prop) => (
                                                <tr key={prop.name} className="border-b border-zinc-100 last:border-0">
                                                    <td className="px-3 py-4 font-mono text-xs font-semibold text-zinc-900">{prop.name}</td>
                                                    <td className="px-3 py-4 font-mono text-xs text-zinc-600">{prop.type}</td>
                                                    <td className="px-3 py-4 text-zinc-600">{prop.description[lang]}</td>
                                                    <td className="px-3 py-4 text-zinc-600">{prop.required ? copy.required : copy.optional}</td>
                                                    <td className="px-3 py-4 font-mono text-xs text-zinc-600">{prop.defaultValue ?? "—"}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
