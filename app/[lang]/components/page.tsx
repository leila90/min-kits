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

    const dictionary = await getDictionary(lang);
    const copy = dictionary.componentsCatalog;

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
    const dictionary = await getDictionary(lang);
    const copy = dictionary.componentsCatalog;

    const categoryCount = new Set(componentRegistry.map((item) => item.category)).size;
    const componentCount = componentRegistry.length;

    return (
        <main className="min-h-screen bg-[#f8f7f4] text-zinc-900">
            <Header />

            <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950 text-white">
                <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute -start-24 top-16 h-72 w-72 rounded-full border border-white/10" />
                    <div className="absolute -start-10 top-30 h-52 w-52 rounded-full border border-white/5" />
                    <div className="absolute end-[-8%] top-[-30%] h-[520px] w-[520px] rounded-full border border-white/10" />
                    <div className="absolute end-[4%] top-[-18%] h-[390px] w-[390px] rounded-full border border-white/5" />
                </div>

                <Container>
                    <div className="relative py-28 md:py-36">
                        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.25fr)_320px] lg:items-end lg:gap-20">
                            <div>
                                <div className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                                    <span>MinKits / UI Library</span>
                                    <span className="h-px w-10 bg-zinc-700" />
                                    <span>{String(componentCount).padStart(2, "0")} {lang === "fa" ? "کامپوننت" : "components"}</span>
                                </div>

                                <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-white md:text-7xl lg:text-[88px] lg:leading-[0.95]">
                                    {copy.title}
                                    <span className="block text-zinc-600">{lang === "fa" ? "برای ساخت، نه فقط نمایش." : "for building, not just browsing."}</span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                                    {copy.subtitle}
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-5 lg:border-s-0 lg:border-t-0 lg:border-e-0">
                                <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                                    <div className="bg-zinc-950 p-5">
                                        <p className="text-3xl font-semibold tracking-[-0.04em]">{String(categoryCount).padStart(2, "0")}</p>
                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                            {lang === "fa" ? "دسته‌بندی" : "categories"}
                                        </p>
                                    </div>
                                    <div className="bg-zinc-950 p-5">
                                        <p className="text-3xl font-semibold tracking-[-0.04em]">{String(componentCount).padStart(2, "0")}</p>
                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                            {lang === "fa" ? "کامپوننت" : "components"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Breadcrumb
                lang={lang}
                dict={dictionary.breadcrumbs}
                page="components"
                currentLabel={copy.title}
            />

            <section className="pb-28 pt-16 md:pb-40 md:pt-24">
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
