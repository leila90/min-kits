import Image from "next/image";
import type { SiteContent } from "@/content/site";
import SectionTitle from "./sectionTitle";

type Props = { lang: "fa" | "en"; content: SiteContent["home"] };

export default function MyFeatures({ lang, content }: Props) {
  return (
    <section id="components" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.featuresTitle} subTitle={content.featuresSubtitle} lang={lang} />
      <div id="kits" className="mx-auto mt-10 grid max-w-6xl grid-cols-1 md:grid-cols-3">
        {content.features.map((item) => (
          <article key={item.title} className="border-zinc-200 px-8 py-12 text-center md:border-l first:md:border-l-0">
            <Image src={item.icon} width={80} height={80} alt="" className="mx-auto h-16 w-16" />
            <h3 className="mt-5 text-lg font-semibold text-zinc-900">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-500">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
