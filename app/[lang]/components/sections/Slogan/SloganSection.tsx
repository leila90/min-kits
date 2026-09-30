import type { SiteContent } from "@/content/site";

type Props = { content: SiteContent["home"] };

export default function MySlogan({ content }: Props) {
  return (
    <section className="-mt-10 px-5 relative z-10 md:-mt-14">
      <div className="mx-auto max-w-6xl rounded-2xl bg-black px-6 py-8 text-center text-white shadow-2xl md:py-10">
        <p className="text-sm md:text-base">{content.slogan}</p>
      </div>
    </section>
  );
}
