"use client";
import { motion } from "framer-motion";
type Props = { brand: string; title: string; subTitle: string; marginTop?: string; lang: "fa" | "en" };
export default function SectionTitle({ brand, title, subTitle, marginTop, lang }: Props) {
  const marginClass = marginTop === "16" ? "mt-16" : "mt-20";
  return <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70 }}>
    <div className={"text-2xl lg:text-3xl font-bold mb-4 " + marginClass}>
      <div className="font-light text-base flex items-center gap-2">
        <span className="text-black lg:text-[28px] text-base font-extralight">{title}</span>
        <div className="relative flex flex-col items-end w-[70px] lg:w-[240px]">
          <div className={"w-full h-px bg-linear-to-r " + (lang === "fa" ? "from-white/25 via-black/50 to-black/25" : "from-black via-black/50 to-white/25")} />
          <p className="m-0 lg:text-[9px] text-[7px] font-bold absolute bottom-1">{brand}</p>
        </div>
      </div>
      <div className="mt-5 text-base text-[#939393]">{subTitle}</div>
    </div>
  </motion.div>;
}
