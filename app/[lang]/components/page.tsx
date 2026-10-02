import {notFound} from "next/navigation";
import Container from "../../../components/ui/container";
import FooterHeader from "../../../components/layout/footerHeader";
import SectionTitle from "../../../components/common/sectionTitle";
import ComponentCatalogBrowser from "../../../components/sections/componentCatalog/componentCatalogBrowser";
import {getDictionary, isLang, type Lang} from "../../i18n";
import {componentRegistry} from "../../../components/registry";

type ComponentsPageProps = {
    params: Promise<{lang: string}>;
};

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

    return (
        <main className="min-h-screen bg-zinc-100 text-zinc-900">
            <section className="border-b border-zinc-200 bg-zinc-100 py-20 md:py-28">
                <Container>
                    <SectionTitle
                        brand="MinKits"
                        title={copy.title}
                        subTitle={copy.subtitle}
                        lang={lang}
                    />
                </Container>
            </section>

            <section className="pb-32 pt-12 md:pb-40 md:pt-16">
                <Container>
                    <ComponentCatalogBrowser
                        lang={lang}
                        registry={componentRegistry}
                        copy={{
                            viewComponent: copy.viewComponent,
                            searchPlaceholder: copy.searchPlaceholder,
                            allCategories: copy.allCategories,
                            noResults: copy.noResults,
                        }}
                    />
                </Container>
            </section>
            <FooterHeader />
        </main>
    );
}
