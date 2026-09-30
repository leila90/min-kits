import type { SiteContent } from "@/content/site";

type Props = { labels: SiteContent["home"]["contactForm"] };

export default function ContactForm({ labels }: Props) {
  return (
    <form className="space-y-5" action="#">
      <label className="block text-sm font-medium text-zinc-800">
        {labels.name}
        <input name="name" required className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-zinc-900" />
      </label>
      <label className="block text-sm font-medium text-zinc-800">
        {labels.email}
        <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-zinc-900" />
      </label>
      <label className="block text-sm font-medium text-zinc-800">
        {labels.message}
        <textarea name="message" required rows={5} className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-zinc-900" />
      </label>
      <button type="submit" className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white">
        {labels.submit}
      </button>
    </form>
  );
}
