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
 return {title:copy.metaTitle,description:copy.metaDescription,alternates:{canonical:"/"+lang+"/components",languages:Object.fromEntries(locales.map((locale)=>[locale,"/"+locale+"/components"]))}};
}

export default async function ComponentsPage({params}:Props){
 const {lang:raw}=await params;
 if(!isLang(raw)) notFound();
 const lang=raw as Lang;
 const dictionary=await getDictionary(lang);
 const copy=dictionary.componentsCatalog;
 const rtl=lang==="fa";
 return <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
  <Header/>
  <section className="px-5 pb-10 pt-32 md:px-10 md:pb-16 md:pt-36">
   <Container>
    <div className={rtl?"text-right":"text-left"}>
     <div className="flex items-center justify-between border-b border-zinc-200 pb-4 font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400"><span>MINKITS / COMPONENTS</span><span>{String(componentRegistry.length).padStart(2,"0")} ITEMS</span></div>
     <div className="grid gap-8 pt-10 md:grid-cols-[1fr_260px] md:items-end">
      <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-400">{rtl?"کتابخانه رابط":"Interface library"}</p><h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[.88] tracking-[-.08em] md:text-8xl">{copy.title}</h1></div>
      <p className="text-sm leading-7 text-zinc-500">{copy.subtitle}</p>
     </div>
    </div>
   </Container>
  </section>
  <Breadcrumb lang={lang} dict={dictionary.breadcrumbs} page="components" currentLabel={copy.title}/>
  <section className="pb-16 md:pb-24">
   <Container>
    <div className={rtl?"mb-6 text-right":"mb-6 text-left"}><p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">BROWSE / BY BEHAVIOR</p><p className="mt-2 text-sm text-zinc-500">{rtl?"یک خانواده را انتخاب کنید و در فهرست زنده حرکت کنید.":"Choose a behavior, then move through the live index."}</p></div>
    <ComponentCatalogBrowser lang={lang} registry={componentRegistry} copy={copy}/>
   </Container>
  </section>
  <FooterHeader/>
 </main>;
}
