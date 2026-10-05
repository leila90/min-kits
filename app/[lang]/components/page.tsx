import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary,isLang,locales,type Lang} from "@/app/i18n";
import {Breadcrumb} from "@/components/common";
import {FooterHeader,Header} from "@/components/layout";
import {componentRegistry} from "@/components/registry";
import ComponentCatalogBrowser from "@/components/sections/componentCatalog/componentCatalogBrowser";
import Container from "@/components/ui/container";

type Props={params:Promise<{lang:string}>};

export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {lang}=await params;
    if(!isLang(lang)) return {};
    const copy=(await getDictionary(lang)).componentsCatalog;
    return {
        title:copy.metaTitle,
        description:copy.metaDescription,
        alternates:{canonical:"/"+lang+"/components",languages:Object.fromEntries(locales.map((locale)=>[locale,"/"+locale+"/components"]))},
        openGraph:{title:copy.metaTitle+" | MinKits",description:copy.metaDescription,url:"/"+lang+"/components"},
    };
}

export default async function ComponentsPage({params}:Props){
    const {lang:rawLang}=await params;
    if(!isLang(rawLang)) notFound();
    const lang=rawLang as Lang;
    const dictionary=await getDictionary(lang);
    const copy=dictionary.componentsCatalog;

    return (
        <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
            <Header/>
            <section className="border-b border-zinc-900 bg-zinc-950 pb-14 pt-32 text-white md:pb-20 md:pt-36">
                <Container>
                    <div className={lang==="fa"?"text-right":"text-left"}>
                        <div className="flex flex-wrap items-center justify-between gap-5 font-mono text-[9px] uppercase tracking-[.25em] text-zinc-600">
                            <span>MINKITS / UI SYSTEM</span>
                            <span>{String(componentRegistry.length).padStart(2,"0")} {lang==="fa"?"کامپوننت آماده":"production-ready components"}</span>
                        </div>
                        <div className="mt-16 max-w-5xl">
                            <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">{lang==="fa"?"کتابخانه رابط کاربری":"A production UI library"}</p>
                            <h1 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">{copy.title}</h1>
                            <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">{copy.subtitle}</p>
                        </div>
                        <div className="mt-14 grid max-w-3xl grid-cols-3 border-t border-white/10 pt-5">
                            <div><p className="font-mono text-xl text-white">{String(componentRegistry.length).padStart(2,"0")}</p><p className="mt-1 text-[9px] uppercase tracking-[.16em] text-zinc-600">{lang==="fa"?"کامپوننت":"components"}</p></div>
                            <div><p className="font-mono text-xl text-white">04</p><p className="mt-1 text-[9px] uppercase tracking-[.16em] text-zinc-600">{lang==="fa"?"خانواده":"families"}</p></div>
                            <div><p className="font-mono text-xl text-white">React / TS</p><p className="mt-1 text-[9px] uppercase tracking-[.16em] text-zinc-600">{lang==="fa"?"استک":"stack"}</p></div>
                        </div>
                    </div>
                </Container>
            </section>

            <Breadcrumb lang={lang} dict={dictionary.breadcrumbs} page="components" currentLabel={copy.title}/>

            <section className="py-10 md:py-16">
                <Container>
                    <div className={lang==="fa"?"mb-8 text-right":"mb-8 text-left"}>
                        <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">THE LIBRARY / 01</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-[-.05em] md:text-4xl">{lang==="fa"?"ساخته شده برای استفاده، نه فقط تماشا.":"Made to ship, not just to showcase."}</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">{lang==="fa"?"هر خانواده را باز کنید، نمونه‌های واقعی را ببینید و برای دمو، API و سورس وارد صفحه کامپوننت شوید.":"Explore a family, inspect real specimens, then open a component for its demo, API, examples, and source."}</p>
                    </div>
                    <ComponentCatalogBrowser lang={lang} registry={componentRegistry} copy={copy}/>
                </Container>
            </section>

            <section className="border-y border-zinc-200 bg-white">
                <Container>
                    <div className={"grid gap-8 py-12 md:py-16 lg:grid-cols-[1fr_auto] lg:items-end "+(lang==="fa"?"text-right":"text-left")}>
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">FROM IDEA TO INTERFACE</p>
                            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-.055em] md:text-5xl">{lang==="fa"?"شروع را ساده کنید؛ جزئیات را برای محصول خود نگه دارید.":"Start with a strong primitive. Keep the product decisions yours."}</h2>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-zinc-500">{lang==="fa"?"MinKits قرار نیست جای طراحی محصول را بگیرد؛ قرار است بخش تکراری ساخت رابط را کوتاه‌تر کند.":"MinKits does not replace product design. It removes the repetitive UI work between an idea and a polished interface."}</p>
                    </div>
                </Container>
            </section>
            <FooterHeader/>
        </main>
    );
}
