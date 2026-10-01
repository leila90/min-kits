"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";
export default function Logo(){
    const trustedLogosText = [
        'Startups',
        'Scale-ups',
        'Founders',
        'Global teams',
        'Creative brands'
    ];

    return (
        <section className="relative z-4 my-20 cursor-pointer">
            {/* LOGO MARQUEE */}
            <motion.div className="z-4 bg-logo-background/50 max-md:mt-10"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Container>
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-6 text-sm font-semibold tracking-wide text-logo-text transition-colors hover:text-logo-text-hover md:text-base"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </motion.div>
        </section>
    )
}