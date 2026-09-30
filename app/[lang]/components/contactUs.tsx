import type { Locale, SiteContent } from "@/content/site";
import SectionTitle from "./sectionTitle";

type Props = { lang: Locale; content: SiteContent["home"] };

export default function ContactUs({ lang, content }: Props) {
  return (
    <section id="contact" className="mx-5 my-20 md:mx-10 lg:mx-20">
      <SectionTitle brand="MinKits" title={content.contactTitle} subTitle={content.contactSubtitle} lang={lang} />
      <div className="mx-auto mt-10 grid max-w-5xl gap-10 rounded-3xl bg-zinc-100 p-6 md:p-10 lg:grid-cols-2">
        <form className="space-y-5" action="#">
          <label className="block text-sm font-medium text-zinc-800">
            {lang === "fa" ? "نام" : "Name"}
            <input name="name" required className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-zinc-900" />
          </label>
          <label className="block text-sm font-medium text-zinc-800">
            {lang === "fa" ? "ایمیل" : "Email"}
            <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-zinc-900" />
          </label>
          <label className="block text-sm font-medium text-zinc-800">
            {lang === "fa" ? "پیام" : "Message"}
            <textarea name="message" required rows={5} className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-zinc-900" />
          </label>
          <button type="submit" className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white">
            {lang === "fa" ? "ارسال پیام" : "Send message"}
          </button>
        </form>
        <div className="flex items-center justify-center rounded-2xl bg-black p-10 text-center text-white">
          <p className="max-w-sm text-lg leading-8 text-white/75">{content.contactSubtitle}</p>
        </div>
      </div>
    </section>
  );
}
