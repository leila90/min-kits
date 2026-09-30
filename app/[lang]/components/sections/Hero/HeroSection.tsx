"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { SiteContent } from "@/content/site";

type Props = { content: SiteContent["home"] };

export default function Hero({ content }: Props) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-bg.jpg" className="absolute inset-0 -z-10 h-full w-full object-cover">
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/65" />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70 }}
        className="relative z-10 mx-5 max-w-4xl text-center"
      >
        <p className="text-sm font-medium text-zinc-600">{content.heroEyebrow}</p>
        <h1 className="mt-3 text-3xl tracking-tight text-zinc-950 md:text-5xl lg:text-6xl">{content.heroTitle}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">{content.heroDescription}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="#kits" className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white">{content.heroPrimary}</Link>
          <Link href="#components" className="rounded-xl border border-black px-6 py-3 text-sm font-semibold text-black">{content.heroSecondary}</Link>
        </div>
      </motion.div>
    </section>
  );
}
