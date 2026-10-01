"use client";
import { motion } from "framer-motion";
import type { Messages } from "@/app/i18n/messages";
type Props = { dict: Messages["hero"] };
export default function Hero({ dict }: Props) {
 return <section className="relative min-h-screen w-full overflow-hidden flex justify-center items-center">
  <div className="absolute inset-0 bg-white/50"/>
  <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-bg.jpg" className="absolute inset-0 w-full h-full object-cover -z-10"><source src="/videos/hero2.mp4" type="video/mp4"/></video>
  <div className="text-center lg:mx-30 md:mx-10"><motion.div initial={{y:150,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{type:"spring",stiffness:250,damping:70}} className="relative p-6">
   <p className="font-thin p-1 text-zinc-600">{dict.eyebrow}</p><h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-black">{dict.title}</h1>
   <p className="text-sm md:text-base lg:text-xl font-light text-zinc-600 mt-3">{dict.description}</p>
   <div className="mt-8 flex flex-wrap justify-center gap-4"><button className="px-6 py-3 rounded-xl bg-black text-white text-sm font-semibold">{dict.explore}</button><button className="px-6 py-3 rounded-xl border border-black text-black text-sm font-semibold">{dict.components}</button></div>
  </motion.div></div>
 </section>;
}