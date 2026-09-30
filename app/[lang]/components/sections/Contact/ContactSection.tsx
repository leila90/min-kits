import type { Locale, SiteContent } from "@/content/site";
import SectionTitle from "@/app/[lang]/components/ui/SectionTitle";
import ContactForm from "@/app/[lang]/components/sections/Contact/ContactForm";
import ContactPanel from "@/app/[lang]/components/sections/Contact/ContactPanel";

type Props = { lang: Locale; content: SiteContent["home"] };

export default function ContactUs({ lang, content }: Props) {
  return (
    <section id="contact" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.contactTitle} subTitle={content.contactSubtitle} lang={lang} />
      <div className="mx-auto mt-10 grid max-w-5xl gap-10 rounded-3xl bg-zinc-100 p-6 md:p-10 lg:grid-cols-2">
        <ContactForm labels={content.contactForm} />
        <ContactPanel text={content.contactSubtitle} />
      </div>
    </section>
  );
}
