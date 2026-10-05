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
        <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
            <Header />

            <section className="relative overflow-hidden bg-zinc-950 text-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -start-40 top-[-260px] h-[760px] w-[760px] rounded-full border border-white/[0.07]" />
                    <div className="absolute -start-12 top-[-190px] h-[560px] w-[560px] rounded-full border border-white/[0.05]" />
                    <div className="absolute end-[-180px] bottom-[-420px] h-[760px] w-[760px] rounded-full border border-[#c6922b]/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(198,146,43,0.10),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.02),transparent_45%)]" />
                </div>

                <Container>
                    <div className={`relative py-24 md:py-32 lg:py-36 ${lang === "fa" ? "text-right" : "text-left"}`}>
                        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end lg:gap-20">
                            <div>
                                <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                                    <span>MinKits / UI Library</span>
                                    <span className="h-px w-12 bg-zinc-700" />
                                    <span>{String(componentCount).padStart(2, "0")} {lang === "fa" ? "کامپوننت آماده" : "ready components"}</span>
                                </div>

                                <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[88px]">
                                    {copy.title}
                                    <span className="mt-2 block text-zinc-600">
                                        {lang === "fa" ? "کتابخانه‌ای برای ساختن، نه فقط دیدن." : "a library built for shipping."}
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                                    {copy.subtitle}
                                </p>

                                <div className="mt-9 flex flex-wrap gap-2">
                                    {[
                                        lang === "fa" ? "React + TypeScript" : "React + TypeScript",
                                        lang === "fa" ? "Tailwind v4" : "Tailwind v4",
                                        lang === "fa" ? "RTL Ready" : "RTL Ready",
                                    ].map((item) => (
                                        <span key={item} className="border border-white/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-5">
                                <div className="flex items-end justify-between gap-8">
                                    <div>
                                        <p className="text-6xl font-semibold tracking-[-0.07em]">{String(componentCount).padStart(2, "0")}</p>
                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                                            {lang === "fa" ? "کامپوننت در کتابخانه" : "components in library"}
                                        </p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-3xl font-semibold tracking-[-0.05em]">{String(categoryCount).padStart(2, "0")}</p>
                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                                            {lang === "fa" ? "دسته" : "categories"}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-7 h-px bg-white/10">
                                    <div className="h-px w-1/3 bg-[#c6922b]" />
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

            <section className="pb-28 pt-12 md:pb-40 md:pt-20">
                <Container>
                    <div className={`mb-10 flex flex-col gap-4 border-b border-zinc-200 pb-6 md:flex-row md:items-end md:justify-between ${lang === "fa" ? "text-right" : "text-left"}`}>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-400">
                                01 / {lang === "fa" ? "کتابخانه" : "Library"}
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
                                {lang === "fa" ? "یک دسته را انتخاب کنید." : "Choose a category."}
                            </h2>
                        </div>
                        <p className="max-w-xl text-sm leading-7 text-zinc-500">
                            {lang === "fa"
                                ? "دسته‌ها را باز کنید و کامپوننت‌ها را قبل از ورود به صفحه جزئیات مرور کنید."
                                : "Open a category and browse the components before entering a dedicated detail view."}
                        </p>
                    </div>

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
