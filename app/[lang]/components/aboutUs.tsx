import Image from "next/image";
import type { SiteContent } from "@/content/site";
import SectionTitle from "./sectionTitle";

type Props = { lang: "fa" | "en"; content: SiteContent["home"] };

export default function AboutUs({ lang, content }: Props) {
  return (
    <section id="aboutUs" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.aboutTitle} subTitle={content.aboutSubtitle} lang={lang} />
      <div className="mx-auto mt-10 grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-base leading-8 text-zinc-600">
          <p>{content.aboutText}</p>
          <ul className="space-y-4 text-zinc-700">
            <li>— {lang === "fa" ? "سورس‌کد خوانا و قابل تغییر" : "Readable, adaptable source code"}</li>
            <li>— {lang === "fa" ? "تمرکز بر React و Next.js مدرن" : "Modern React and Next.js"}</li>
            <li>— {lang === "fa" ? "طراحی ساده و قابل استفاده مجدد" : "Simple reusable patterns"}</li>
          </ul>
        </div>
        <Image src="/images/about1.jpg" alt={content.aboutTitle} width={900} height={650} className="w-full rounded-3xl object-cover shadow-xl" />
      </div>
    </section>
  );
}
