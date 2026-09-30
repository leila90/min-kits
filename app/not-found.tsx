import Link from "next/link";
import { defaultLocale, getContent } from "@/content/site";

export default function NotFound() {
  const content = getContent(defaultLocale);

  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-bold text-zinc-950">{content.errors.notFoundTitle}</h1>
        <p className="mt-4 text-zinc-600">{content.errors.notFoundText}</p>
        <Link href={`/${defaultLocale}`} className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
          {content.errors.notFoundHome}
        </Link>
      </div>
    </main>
  );
}
