"use client";
import { motion } from "framer-motion";
type Props = { brand: string; title: string; subTitle: string; marginTop?: string; lang: "fa" | "en" };
export default function SectionTitle({ brand, title, subTitle, marginTop, lang }: Props) {
  const marginClass = marginTop === "16" ? "mt-16" : "mt-20";
  return <motion.div initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70 }}>
    <div className={"text-2xl lg:text-3xl font-bold mb-10 md:mb-12 " + marginClass}>
      <div className="min-w-0 font-light text-base flex items-center gap-2">
        <span className="min-w-0 shrink break-words text-black lg:text-[28px] text-base font-extralight">{title}</span>
        <div className="relative flex shrink-0 flex-col items-end w-[70px] lg:w-[240px]">
          <div className={"w-full h-px bg-linear-to-r " + (lang === "fa" ? "from-white/25 via-black/50 to-black/25" : "from-black via-black/50 to-white/25")} />
          <p className="m-0 lg:text-[9px] text-[7px] font-bold absolute bottom-1">{brand}</p>
        </div>
      </div>
      <div className="mt-5 flex min-w-0 items-center gap-2 text-base text-section-title-subtitle">
        <div className="icon-display shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="0" fill="currentColor">
              <animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="0;11" />
              <animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0" />
            </circle>
          </svg>
        </div>
        <span className="min-w-0 break-words">{subTitle}</span>
      </div>
    </div>
  </motion.div>;
}
