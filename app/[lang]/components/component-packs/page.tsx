import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/container";
import { Header, FooterHeader } from "@/components/layout";
import { getDictionary, isLang } from "../../../i18n";

type Props = { params: Promise<{ lang: string }> };

function BlockPreview({ index }: { index: number }) {
  if (index === 0) return <div className="relative h-full min-h-52 overflow-hidden rounded-[1.75rem] border border-black/8 bg-linear-to-br from-zinc-100 via-zinc-50 to-zinc-200 p-5"><div className="absolute end-6 top-6 h-20 w-20 rounded-full border border-black/8 bg-white/70" /><div className="absolute inset-x-6 bottom-6"><div className="h-2 w-20 rounded-full bg-zinc-400/70" /><div className="mt-3 h-4 w-4/5 rounded-full bg-zinc-800/80" /><div className="mt-2 h-3 w-3/5 rounded-full bg-zinc-400/50" /><div className="mt-5 h-9 w-28 rounded-full bg-zinc-900" /></div></div>;
  if (index === 1) return <div className="grid h-full min-h-52 grid-cols-2 gap-3 rounded-[1.75rem] border border-black/8 bg-zinc-50 p-5">{[0,1,2,3].map((item)=><div key={item} className="rounded-2xl border border-black/7 bg-white p-3"><div className="h-7 w-7 rounded-lg bg-zinc-200" /><div className="mt-4 h-2 w-3/4 rounded-full bg-zinc-700/70" /><div className="mt-2 h-2 w-full rounded-full bg-zinc-200" /></div>)}</div>;
  if (index === 2) return <div className="flex h-full min-h-52 items-end gap-3 rounded-[1.75rem] border border-black/8 bg-zinc-50 p-5">{[40,65,50].map((height,item)=><div key={item} className="flex flex-1 flex-col justify-end gap-3"><div className="h-3 w-full rounded-full bg-zinc-300" /><div style={{height}} className="rounded-t-2xl bg-zinc-800" /></div>)}</div>;
  if (index === 3) return <div className="relative h-full min-h-52 overflow-hidden rounded-[1.75rem] border border-black/8 bg-zinc-950 p-5"><div className="absolute inset-5 rounded-2xl border border-white/10" /><div className="relative grid grid-cols-2 gap-3"><div className="h-24 rounded-2xl bg-white/10" /><div className="h-24 rounded-2xl bg-white/5" /><div className="col-span-2 h-16 rounded-2xl bg-white/10" /></div></div>;
  if (index === 4) return <div className="relative h-full min-h-52 rounded-[1.75rem] border border-black/8 bg-white p-5"><div className="flex items-center justify-between border-b border-black/8 pb-4"><div className="h-3 w-24 rounded-full bg-zinc-800/80" /><div className="h-8 w-8 rounded-full bg-zinc-100" /></div><div className="mt-5 space-y-3">{[0,1,2].map((item)=><div key={item} className="flex items-center gap-3"><div className="h-8 w-8 rounded-xl bg-zinc-100" /><div className="h-2 flex-1 rounded-full bg-zinc-200" /><div className="h-2 w-10 rounded-full bg-zinc-300" /></div>)}</div></div>;
  return <div className="h-full min-h-52 overflow-hidden rounded-[1.75rem] border border-black/8 bg-zinc-50 p-5"><div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-black/8 bg-white"><div className="h-9 bg-zinc-100" /><div className="h-9 bg-zinc-100" /><div className="h-9 bg-zinc-100" /><div className="h-9 bg-zinc-100" />{[0,1,2,3,4,5,6,7].map((item)=><div key={item} className="h-10 border-t border-black/6 bg-white" />)}</div></div>;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang}=await params;
  if(!isLang(lang)) return {};
  const title = lang === "fa" ? "پک‌های کامپوننت" : "Component Packs";
  const description = lang === "fa" ? "مجموعه‌ای از بلاک‌های رابط کاربری آماده تولید برای پروژه‌های مدرن." : "Production-ready UI blocks for modern web projects.";
  return {
    title,
    description,
    alternates: { canonical: `/${lang}/components/component-packs` },
    openGraph: { title, description, url: `/${lang}/components/component-packs` },
  };
}

export default async function ComponentPacksPage({params}: Props) {
  const {lang}=await params;
  if(!isLang(lang)) notFound();
  const dict=await getDictionary(lang);
  const copy=dict.componentPacks;
  return <>
    <main className="min-h-screen bg-white text-zinc-900">
    <section className="relative overflow-hidden border-b border-black/8 bg-zinc-50">
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(0,0,0,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.045)_1px,transparent_1px)] [background-size:48px_48px]" />
      <Container className="relative"><div className="flex min-h-[700px] flex-col justify-center pb-20 pt-40 md:min-h-[760px] md:pb-28 md:pt-48">
        <Link href={`/${lang}/#component-store`} className="mb-10 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 hover:text-zinc-950"><span aria-hidden="true">{lang==="fa" ? "→" : "←"}</span>{copy.back}</Link>
        <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-xs font-semibold text-zinc-600">{copy.badge}</span>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-zinc-950 md:text-6xl md:leading-[1.05]">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-600 md:text-lg">{copy.subtitle}</p>
            <Link href="#blocks" className="mt-9 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-black">{copy.browse}<span aria-hidden="true">↓</span></Link>
          </div>
          <div className="relative mx-auto w-full max-w-xl"><div className="absolute -inset-8 rounded-[3rem] bg-white/70 blur-3xl" /><div className="relative rounded-[2.5rem] border border-black/10 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,.12)]">
            <div className="flex items-center justify-between border-b border-black/8 px-3 pb-4"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-zinc-300" /><span className="h-2 w-2 rounded-full bg-zinc-200" /><span className="h-2 w-2 rounded-full bg-zinc-100" /></div><span className="font-mono text-[10px] tracking-[0.18em] text-zinc-400">{copy.previewLabel}</span></div>
            <div className="grid gap-3 p-3 sm:grid-cols-2"><div className="rounded-2xl bg-zinc-950 p-5 text-white sm:row-span-2"><div className="h-2 w-14 rounded-full bg-white/30" /><div className="mt-16 h-3 w-4/5 rounded-full bg-white/80" /><div className="mt-2 h-2 w-3/5 rounded-full bg-white/25" /><div className="mt-7 h-9 w-24 rounded-full bg-white/15" /></div><div className="rounded-2xl border border-black/8 bg-zinc-50 p-4"><div className="grid grid-cols-3 gap-2"><span className="h-12 rounded-xl bg-zinc-200" /><span className="h-12 rounded-xl bg-zinc-300/70" /><span className="h-12 rounded-xl bg-zinc-100" /></div></div><div className="rounded-2xl border border-black/8 bg-zinc-50 p-4"><div className="flex items-end gap-2"><span className="h-8 flex-1 rounded-t-lg bg-zinc-200" /><span className="h-14 flex-1 rounded-t-lg bg-zinc-700" /><span className="h-10 flex-1 rounded-t-lg bg-zinc-300" /><span className="h-16 flex-1 rounded-t-lg bg-zinc-900" /></div></div></div>
          </div></div>
        </div>
        <div className="mt-16 grid max-w-3xl grid-cols-3 border-t border-black/10 pt-6">{copy.stats.map((stat)=><div key={stat.label} className="text-center"><p className="text-xl font-semibold text-zinc-950 md:text-2xl">{stat.value}</p><p className="mt-1 text-xs font-medium text-zinc-500 md:text-sm">{stat.label}</p></div>)}</div>
      </div></Container>
    </section>

    <Header />

    <section id="blocks" className="scroll-mt-28 py-20 md:py-28"><Container>
      <div className="flex flex-col gap-7 border-b border-black/10 pb-10 md:flex-row md:items-end md:justify-between"><div className={`${lang==="fa" ? "text-right" : "text-left"}`}><p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">01 / {copy.collectionLabel}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">{copy.browse}</h2></div><div className="flex flex-wrap gap-2">{copy.categories.map((category,index)=><span key={category} className={`rounded-full border px-4 py-2 text-xs font-semibold ${index===0 ? "border-zinc-900 bg-zinc-900 text-white" : "border-black/10 bg-white text-zinc-500"}`}>{category}</span>)}</div></div>
      <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">{copy.blocks.map((block,index)=><article key={block.title} className="group flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_24px_60px_rgba(0,0,0,.09)]"><div className="p-3"><BlockPreview index={index}/></div><div className={`flex flex-1 flex-col p-6 pt-4 ${lang==="fa" ? "text-right" : "text-left"}`}><div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-zinc-400">{block.number}</span><span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-semibold text-zinc-500">{block.tag}</span></div><h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">{block.title}</h3><p className="mt-3 text-sm font-medium leading-7 text-zinc-500">{block.description}</p><div className="mt-7 h-px w-full bg-linear-to-r from-transparent via-black/10 to-transparent" /><div className="mt-4 flex items-center justify-between text-xs font-semibold text-zinc-400"><span>React / Tailwind</span><span>↗</span></div></div></article>)}</div>
    </Container></section>

    <section className="border-y border-black/8 bg-zinc-50 py-20 md:py-24"><Container><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div className={`${lang==="fa" ? "text-right" : "text-left"}`}><p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">02 / {copy.philosophyLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">{copy.principleTitle}</h2></div><p className={`max-w-2xl text-base font-medium leading-8 text-zinc-600 md:text-lg ${lang==="fa" ? "lg:ms-auto lg:text-right" : "lg:ms-auto"}`}>{copy.principleText}</p></div></Container></section>

    <section className="pb-32 pt-20 md:pb-40 md:pt-28"><Container><div className={`${lang==="fa" ? "text-right" : "text-left"} relative overflow-hidden rounded-[2.5rem] bg-zinc-950 px-7 py-12 text-white md:px-12 md:py-16`}><div className="absolute -end-24 -top-24 h-72 w-72 rounded-full border border-white/10" /><div className="absolute -end-10 -top-10 h-44 w-44 rounded-full border border-white/10" /><div className="relative max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">03 / {copy.earlyAccessLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{copy.ctaTitle}</h2><p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/60 md:text-base">{copy.ctaText}</p><Link href={`/${lang}/#contactUs`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:-translate-y-0.5">{copy.cta}<span aria-hidden="true">{lang==="fa" ? "←" : "→"}</span></Link></div></div></Container></section>
    </main>
    <FooterHeader />
  </>;
}
