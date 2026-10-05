import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, isLang, locales, type Lang} from "@/app/i18n";
import {Breadcrumb} from "@/components/common";
import {FooterHeader, Header} from "@/components/layout";
import {componentRegistry} from "@/components/registry";
import ComponentCatalogBrowser from "@/components/sections/componentCatalog/componentCatalogBrowser";
import Container from "@/components/ui/container";

type Props={params:Promise<{lang:string}>};

export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {lang}=await params;
    if(!isLang(lang)) return {};
    const copy=(await getDictionary(lang)).componentsCatalog;
    return {title:copy.metaTitle,description:copy.metaDescription,alternates:{canonical:"/"+lang+"/components",languages:Object.fromEntries(locales.map((locale)=>[locale,"/"+locale+"/components"]))},openGraph:{title:copy.metaTitle+" | MinKits",description:copy.metaDescription,url:"/"+lang+"/components"}};
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
            <section className="pt-28 md:pt-36">
                <Container>
                    <div className={"border-b border-zinc-200 pb-10 md:pb-14 "+(lang==="fa"?"text-right":"text-left")}>
                        <p className="font-mono text-[9px] uppercase tracking-[.3em] text-zinc-400">MINKITS / LIBRARY</p>
                        <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                            <h1 className="max-w-4xl text-5xl font-semibold leading-[.92] tracking-[-.065em] md:text-7xl">{copy.title}</h1>
                            <p className="max-w-md text-sm leading-7 text-zinc-500">{copy.subtitle}</p>
                        </div>
                    </div>
                </Container>
            </section>

            <Breadcrumb lang={lang} dict={dictionary.breadcrumbs} page="components" currentLabel={copy.title}/>

            <section className="py-8 md:py-12">
                <Container>
                    <div className="grid gap-0 border-y border-zinc-200 lg:grid-cols-[190px_minmax(0,1fr)]">
                        <aside className={"border-b border-zinc-200 py-6 lg:border-b-0 lg:border-e lg:py-8 "+(lang==="fa"?"text-right":"text-left")}>
                            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400">WORKBENCH</p>
                            <p className="mt-3 max-w-[150px] text-xs leading-5 text-zinc-500">{lang==="fa"?"کامپوننت را انتخاب کنید و همان‌جا بررسی‌اش کنید.":"Pick a component and inspect it without leaving the workbench."}</p>
                        </aside>
                        <ComponentCatalogBrowser lang={lang} registry={componentRegistry} copy={copy}/>
                    </div>
                </Container>
            </section>
            <FooterHeader/>
        </main>
    );
}