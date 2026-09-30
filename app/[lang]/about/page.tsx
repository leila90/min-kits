import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import SectionTitle from "../components/sectionTitle";
import { getContent, hasLocale, type Locale } from "@/content/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const content = getContent(lang);
  return { title: content.about.title, description: content.about.subtitle };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const content = getContent(locale);
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-24">
      <Breadcrumb lang={locale} />
      <SectionTitle brand="MinKits" title={content.about.title} subTitle={content.about.subtitle} lang={locale} />
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-8 text-zinc-600">
          {content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="rounded-3xl bg-zinc-950 p-8 text-white">
          <h2 className="text-xl font-semibold">{content.about.principlesTitle}</h2>
          <ul className="mt-6 space-y-4 text-white/70">
            {content.about.principles.map((item) => <li key={item}>— {item}</li>)}
          </ul>
        </div>
      </div>
    </main>
  );
}
