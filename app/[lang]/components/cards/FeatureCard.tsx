import Image from "next/image";
import type { SiteContent } from "@/content/site";

type Feature = SiteContent["home"]["features"][number];

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="border-zinc-200 px-8 py-12 text-center md:border-l first:md:border-l-0">
      <Image src={feature.icon} width={80} height={80} alt="" className="mx-auto h-16 w-16" />
      <h3 className="mt-5 text-lg font-semibold text-zinc-900">{feature.title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-500">{feature.description}</p>
    </article>
  );
}
