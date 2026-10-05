import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang, locales, type Lang} from "@/app/i18n";
import {Breadcrumb} from "@/components/common";
import {FooterHeader, Header} from "@/components/layout";
import {componentRegistry} from "@/components/registry";
import ComponentCatalogBrowser from "@/components/sections/componentCatalog/componentCatalogBrowser";
import Container from "@/components/ui/container";

type ComponentsPageProps = {params: Promise<{lang: string}>};

export async function generateMetadata({params}: ComponentsPageProps): Promise<Metadata> {
    const {lang} = await params;
    if (!isLang(lang)) return {};
    const copy = (await getDictionary(lang)).componentsCatalog;
    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        alternates: {
            canonical: "/" + lang + "/components",
            languages: Object.fromEntries(locales.map((locale) => [locale, "/" + locale + "/components"])),
        },
        openGraph: {title: copy.metaTitle + " | MinKits", description: copy.metaDescription, url: "/" + lang + "/components"},
    };
}

export default async function ComponentsPage({params}: ComponentsPageProps) {
    const {lang: rawLang} = await params;
    if (!isLang(rawLang)) notFound();

    const lang = rawLang as Lang;
    const dictionary = await getDictionary(lang);
    const copy = dictionary.componentsCatalog;
    const categories = new Set(componentRegistry.map((item) => item.category)).size;

    return (
        <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
            <Header/>

            <section className="border-b border-white/10 bg-zinc-950 text-white">
                <Container>
                    <div className={"grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:py-32 " + (lang === "fa" ? "text-right" : "text-left")}>
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">MINKITS / COMPONENTS</p>
                            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[92px]">
                                {copy.title}
                            </h1>
                            <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">{copy.subtitle}</p>
                        </div>
                        <div className="border-t border-white/10 pt-5">
                            <div className="flex items-end justify-between">
                                <div><p className="font-mono text-5xl tracking-[-0.07em]">{String(componentRegistry.length).padStart(2, "0")}</p><p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-600">{lang === "fa" ? "کامپوننت" : "components"}</p></div>
                                <div className="text-end"><p className="font-mono text-3xl tracking-[-0.06em]">{String(categories).padStart(2, "0")}</p><p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-600">{lang === "fa" ? "دسته" : "families"}</p></div>
                            </div>
                            <div className="mt-7 h-px bg-white/10"><div className="h-px w-1/3 bg-[#c6922b]"/></div>
                        </div>
                    </div>
                </Container>
            </section>

            <Breadcrumb lang={lang} dict={dictionary.breadcrumbs} page="components" currentLabel={copy.title}/>

            <section className="py-12 md:py-20">
                <Container>
                    <div className={"mb-8 flex flex-col gap-3 border-b border-zinc-200 pb-6 md:flex-row md:items-end md:justify-between " + (lang === "fa" ? "text-right" : "text-left")}>
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400">01 / INDEX</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.055em]">{lang === "fa" ? "خانواده‌های رابط" : "Interface families"}</h2>
                        </div>
                        <p className="max-w-lg text-xs leading-6 text-zinc-500">{lang === "fa" ? "کامپوننت‌ها بر اساس نقش‌شان در محصول مرتب شده‌اند؛ یک خانواده را باز کنید و نمونه‌ها را همان‌جا بررسی کنید." : "Components are organized by their role in a product. Open a family and inspect its specimens in place."}</p>
                    </div>
                    <ComponentCatalogBrowser lang={lang} registry={componentRegistry} copy={copy}/>
                </Container>
            </section>

            <FooterHeader/>
        </main>
    );
}
