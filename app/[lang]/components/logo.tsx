"use client";
import { motion } from 'framer-motion';
export default function Logo(){
    const trustedLogosText = [
        'Startups',
        'Scale-ups',
        'Founders',
        'Global teams',
        'Creative brands'
    ];

    return (
         <section className="md:my-20 md:mx-30 my-20 mx-5 relative z-4 cursor-pointer">
            {/* LOGO MARQUEE */}
            <motion.div className="bg-white/50 max-md:mt-10 z-4"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-6 text-sm md:text-base font-semibold text-zinc-500 hover:text-zinc-300 tracking-wide transition-colors"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}