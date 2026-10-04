import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {getDictionary, isLang, locales, type Lang} from "@/app/i18n";
import {Breadcrumb} from "@/components/common";
import {FooterHeader, Header} from "@/components/layout";
import {componentRegistry} from "@/components/registry";
import ComponentCatalogBrowser from "@/components/sections/componentCatalog/componentCatalogBrowser";
import Container from "@/components/ui/container";

type ComponentsPageProps = {
    params: Promise<{lang: string}>;
};

export async function generateMetadata({params}: ComponentsPageProps): Promise<Metadata> {
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
            languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/components`])),
        },
        openGraph: {
            title: `${copy.metaTitle} | MinKits`,
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

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <div className="border-b border-zinc-900 bg-zinc-900 pb-12 pt-32 md:pb-30 md:pt-30"/>
            <Header />
            <Breadcrumb
                lang={lang}
                dict={(await getDictionary(lang)).breadcrumbs}
                page="components"
                currentLabel={copy.title}
            />
            <section className="pb-32 pt-12 md:pb-40 md:pt-16">
                <Container>
                    <ComponentCatalogBrowser
                        lang={lang}
                        registry={componentRegistry}
                        copy={copy}
                    />
                </Container>
            </section>
            <FooterHeader />
        </main>
    );
}
