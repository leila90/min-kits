"use client";

import { motion } from "framer-motion";

type Props = {
  brand: string;
  title: string;
  subTitle: string;
  lang: "fa" | "en";
};

export default function SectionTitle({ brand, title, subTitle, lang }: Props) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      className="mt-20"
    >
      <div className="mb-4 text-2xl font-bold lg:text-3xl">
        <div className="flex items-center gap-2 overflow-visible text-base font-light">
          <span className="text-base font-extralight text-black lg:text-[28px]">{title}</span>
          <div className="relative flex h-full w-[70px] flex-col items-end lg:w-[240px]">
            <div className={`h-px w-full bg-linear-to-r ${lang === "fa" ? "from-white/25 via-black/50 to-black/25" : "from-black via-black/50 to-white/25"}`} />
            <p className="absolute bottom-1 m-0 text-[7px] font-bold lg:text-[9px]">{brand}</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 overflow-visible text-base font-light">
          <div aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="0" fill="#000">
                <animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="0;11" />
                <animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0" />
              </circle>
            </svg>
          </div>
          <span className="text-base text-[#939393] lg:text-[15px]">{subTitle}</span>
        </div>
      </div>
    </motion.div>
  );
}
