"use client";
import {motion} from "framer-motion";
import type {Messages} from "@/app/i18n/messages";
type Props={dict:Messages["team"]};
export default function Logo({dict}:Props){const items=[dict.title,dict.subtitle,"MinKits","React","Next.js"];return <section className="md:my-20 md:mx-30 my-20 mx-5 relative z-4"><motion.div initial={{y:60,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} className="bg-white/50"><div className="max-w-6xl mx-auto px-6 overflow-hidden py-6"><div className="flex gap-14 justify-center whitespace-nowrap animate-marquee">{items.concat(items).map((item,i)=><span key={i} className="mx-6 text-sm md:text-base font-semibold text-zinc-500">{item}</span>)}</div></div></motion.div></section>}