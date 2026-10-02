import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/container";
import { FooterHeader, Header } from "@/components/layout";
import { getDictionary, isLang } from "../../../../i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const copy = (await getDictionary(lang)).uiKits;
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${lang}/components/ui-kits` },
  };
}

export default async function UiKitsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = (await getDictionary(lang)).uiKits;

  return (
    <>
      <main className="min-h-screen bg-white text-zinc-900">
        <section className="border-b border-black/8 bg-[#f7f6f2] py-40 md:py-52">
          <Container>
            <div className={lang === "fa" ? "mx-auto max-w-3xl text-right" : "mx-auto max-w-3xl text-left"}>
              <Link href={`/${lang}/#component-store`} className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 transition-colors hover:text-zinc-950">
                <span aria-hidden="true">{lang === "fa" ? "→" : "←"}</span> {copy.back}
              </Link>
              <span className="mt-10 inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600">{copy.badge}</span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">{copy.title}</h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-600 md:text-lg">{copy.description}</p>
              <Link href={`/${lang}/#contactUs`} className="mt-9 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
                {copy.cta}<span aria-hidden="true">{lang === "fa" ? "←" : "→"}</span>
              </Link>
            </div>
          </Container>
        </section>
        <Header />
      </main>
      <FooterHeader />
    </>
  );
}
