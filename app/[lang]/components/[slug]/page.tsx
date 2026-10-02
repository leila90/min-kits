import Link from "next/link";
import {notFound} from "next/navigation";
import Container from "../../../../components/ui/container";
import ComponentDemoTabs from "../../../../components/sections/componentCatalog/componentDemoTabs";
import {getComponentSource} from "../../../../components/registry/source";
import {Button, Divider, FormField, Input, Textarea} from "../../../../components/ui";
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

            <section className="py-16 md:py-20">
                <Container>
                    <ComponentDemoTabs
                        preview={
                            <>
                                {component.slug === "button" && (
                                    <Button size="lg" radius="full">
                                        {lang === "fa" ? "ادامه" : "Continue"}
                                    </Button>
                                )}

                                {component.slug === "input" && (
                                    <div className="w-full max-w-md">
                                        <Input
                                            type="text"
                                            placeholder={lang === "fa" ? "متن را وارد کنید" : "Enter text"}
                                            aria-label={lang === "fa" ? "نمونه ورودی" : "Input example"}
                                        />
                                    </div>
                                )}

                                {component.slug === "textarea" && (
                                    <div className="w-full max-w-md">
                                        <Textarea
                                            placeholder={lang === "fa" ? "متن خود را وارد کنید" : "Enter your message"}
                                            aria-label={lang === "fa" ? "نمونه ناحیه متن" : "Textarea example"}
                                        />
                                    </div>
                                )}

                                {component.slug === "form-field" && (
                                    <div className="w-full max-w-md">
                                        <FormField
                                            label={lang === "fa" ? "نام" : "Name"}
                                            htmlFor="component-form-field-preview"
                                        >
                                            <Input
                                                id="component-form-field-preview"
                                                type="text"
                                                placeholder={lang === "fa" ? "نام خود را وارد کنید" : "Enter your name"}
                                            />
                                        </FormField>
                                    </div>
                                )}

                                {component.slug === "divider" && (
                                    <div className="w-full max-w-md">
                                        <Divider />
                                    </div>
                                )}
                            </>
                        }
                        source={source}
                        previewLabel={copy.preview}
                        sourceLabel={copy.source}
                        copyLabel={copy.copy}
                        copiedLabel={copy.copied}
                    />
                </Container>
            </section>
        </main>
    );
}
