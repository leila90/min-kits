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
        <main className="min-h-screen bg-[#F8F7F4] text-[#2B2B2B]">
            <section className="border-b border-[#E4E0D7] py-16 md:py-24">
                <Container>
                    <Link
                        href={`/${lang}/components`}
                        className="text-sm font-semibold text-[#6D6A62] transition-colors hover:text-[#2B2B2B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#56624A]"
                    >
                        {copy.backToCatalog}
                    </Link>

                    <div className="mt-10 max-w-3xl">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918C80]">
                            {categoryLabel}
                        </span>
                        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                            {component.name[lang]}
                        </h1>
                        <p className="mt-5 text-base leading-7 text-[#6D6A62] md:text-lg">
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
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918C80]">
                                        {lang === "fa" ? "Interactive demo" : "Interactive demo"}
                                    </p>
                                </div>
                                <span className="rounded-full border border-[#E4E0D7] bg-[#EFECE6] px-3 py-1 text-xs font-medium text-[#7A766C]">
                                    {component.category}
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

                        <div className="mt-8 space-y-8 lg:col-start-2">
                            <section className="overflow-hidden rounded-3xl border border-[#E4E0D7] bg-[#EFECE6]" aria-labelledby="component-usage">
                                <div className="flex flex-col gap-4 border-b border-[#E4E0D7] px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918C80]">{copy.usage}</p>
                                        <h2 id="component-usage" className="mt-2 text-xl font-bold tracking-tight text-[#2B2B2B]">
                                            {lang === "fa" ? "از اینجا شروع کنید" : "Start here"}
                                        </h2>
                                    </div>
                                    <span className="text-sm text-[#7A766C]">
                                        {component.examples.length} {lang === "fa" ? "مثال" : "example"}
                                    </span>
                                </div>

                                <div className="divide-y divide-[#E4E0D7]">
                                    {component.examples.map((example, index) => (
                                        <div key={example.code} className="p-6 md:p-8">
                                            <div className="mb-4 flex items-center gap-3">
                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-semibold text-[#2B2B2B]">{example.title[lang]}</h3>
                                            </div>
                                            <pre dir="ltr" className="overflow-x-auto rounded-2xl bg-[#1F1F1F] p-5 text-sm leading-7 text-[#F8F7F4] shadow-sm">
                                                <code>{example.code}</code>
                                            </pre>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="overflow-hidden rounded-3xl border border-[#E4E0D7] bg-[#F8F7F4]" aria-labelledby="component-api">
                                <div className="border-b border-[#E4E0D7] bg-[#EFECE6] px-6 py-5 md:px-8">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918C80]">{copy.api}</p>
                                            <h2 id="component-api" className="mt-2 text-xl font-bold tracking-tight text-[#2B2B2B]">{copy.props}</h2>
                                        </div>
                                        <span className="rounded-full bg-[#F8F7F4] px-3 py-1 text-xs font-medium text-[#7A766C] ring-1 ring-inset ring-[#E4E0D7]">
                                            {component.props.length} {lang === "fa" ? "پراپ مستند" : "documented props"}
                                        </span>
                                    </div>
                                </div>

                                <div className="divide-y divide-[#EAE6DE]">
                                    {component.props.map((prop) => (
                                        <article key={prop.name} className="p-6 md:p-7" dir={lang === "fa" ? "rtl" : "ltr"}>
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                <div className="min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <code className="rounded-lg bg-[#E9E5DC] px-2.5 py-1 text-sm font-semibold text-[#2B2B2B]">
                                                            {prop.name}
                                                        </code>
                                                        <code className="text-xs text-[#7A766C]">{prop.type}</code>
                                                        {prop.required && (
                                                            <span className="rounded-full bg-zinc-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                                                                {copy.required}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6D6A62]">
                                                        {prop.description[lang]}
                                                    </p>
                                                </div>

                                                <div className="shrink-0 rounded-xl border border-[#E4E0D7] bg-[#EFECE6] px-3 py-2 text-xs text-[#7A766C]">
                                                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#918C80]">
                                                        {copy.defaultValue}
                                                    </span>
                                                    <code className="mt-1 block text-[#4F4B43]">{prop.defaultValue ?? "—"}</code>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
