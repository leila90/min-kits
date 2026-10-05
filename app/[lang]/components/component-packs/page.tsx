import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Container from "@/components/ui/container";
import {FooterHeader,Header} from "@/components/layout";
import {getDictionary,isLang} from "../../../i18n";
import {getComponentPacks} from "@/content/componentPacks";
import ComponentPacksExplorer from "@/components/sections/componentPacksExplorer/componentPacksExplorer";

type Props={params:Promise<{lang:string}>};

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {lang}=await params;
 if(!isLang(lang)) return {};
 const copy=(await getDictionary(lang)).componentPacks;
 return {title:copy.title,description:copy.subtitle,alternates:{canonical:"/"+lang+"/components/component-packs",languages:{en:"/en/components/component-packs",fa:"/fa/components/component-packs"}}};
}

export default async function ComponentPacksPage({params}:Props){
 const {lang}=await params;
 if(!isLang(lang)) notFound();
 const copy=(await getDictionary(lang)).componentPacks;
 const packs=getComponentPacks(lang);
 const featured=packs[0];
 const rtl=lang==="fa";
 return <main className="min-h-screen bg-[#f8f7f4] text-zinc-950">
  <Header/>
  <section className="px-5 pb-10 pt-32 md:px-10 md:pb-16 md:pt-36">
   <Container>
    <div className={rtl?"text-right":"text-left"}>
     <div className="flex items-center justify-between border-b border-zinc-200 pb-4 font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400"><span>MINKITS / SOURCE SHOP</span><span>REACT + TAILWIND</span></div>
     <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
      <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-400">{rtl?"کد آماده برای محصول واقعی":"Ready-made source for real products"}</p><h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[.88] tracking-[-.08em] md:text-8xl">{copy.title}</h1></div>
      <div><p className="text-sm leading-7 text-zinc-500">{copy.subtitle}</p><div className="mt-6 flex gap-6 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-400"><span>{String(packs.length).padStart(2,"0")} {rtl?"پک":"PACKS"}</span><span>{featured.stats[0]?.value ?? "18"} {rtl?"بلاک":"BLOCKS"}</span></div></div>
     </div>
    </div>
   </Container>
  </section>
  <section className="pb-20 md:pb-28">
   <Container>
    <div className={rtl?"mb-6 text-right":"mb-6 text-left"}><p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-400">PRODUCT / {featured.category.toUpperCase()}</p><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">{rtl?"محصول را قبل از خرید ورق بزنید؛ بلاک‌ها، ساختار و ارزش سورس را همین‌جا ببینید.":"Flip through the product before buying it: blocks, structure, and source value in one place."}</p><div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-200 pt-4 font-mono text-[9px] uppercase tracking-[.15em] text-zinc-400">{featured.stats.map((stat)=><span key={stat.label}>{stat.value} {stat.label}</span>)}</div></div>
    <ComponentPacksExplorer lang={lang} packs={packs} blocks={copy.blocks} categories={copy.categories.slice(1)} allLabel={copy.categories[0]} viewPack={copy.viewPack}/>
   </Container>
  </section>
  <section className="border-t border-zinc-950 bg-zinc-950 px-5 py-14 text-white md:px-10 md:py-20">
   <Container><div className={rtl?"text-right":"text-left"}><div className="flex flex-wrap items-end justify-between gap-8"><div><p className="font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">THE PROMISE</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-.06em] md:text-5xl">{rtl?"کمتر ساختن از صفر، بیشتر ساختن برای محصول.":"Less rebuilding from zero. More building for the product."}</h2></div><Link href={"/"+lang+"/components/component-packs/"+featured.slug} className="border border-white/15 px-5 py-3 text-xs font-semibold hover:bg-white hover:text-zinc-950">{copy.viewPack} ↗</Link></div></div></Container>
  </section>
  <FooterHeader/>
 </main>;
}
