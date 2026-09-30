import type { SiteContent } from "@/content/site";
import SectionTitle from "@/app/[lang]/components/ui/SectionTitle";
import FeatureCard from "@/app/[lang]/components/cards/FeatureCard";

type Props = { lang: "fa" | "en"; content: SiteContent["home"] };

export default function MyFeatures({ lang, content }: Props) {
  return (
    <section id="components" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.featuresTitle} subTitle={content.featuresSubtitle} lang={lang} />
      <div id="kits" className="mx-auto mt-10 grid max-w-6xl grid-cols-1 md:grid-cols-3">
        {content.features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
      </div>
    </section>
  );
}
