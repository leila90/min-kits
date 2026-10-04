'use client'

import {motion} from 'framer-motion';
import Link from 'next/link';
import {Button, Container} from '@/components/ui';

type HeroProps = {
    lang: "fa" | "en";
    dict: {
        eyebrow: string;
        title: string;
        description: string;
        explore: string;
        components: string;
    };
};

export default function Hero({lang, dict}: HeroProps) {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-10 bg-hero-overlay"/>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-bg.jpg"
                aria-hidden="true"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            >
                <source src="/videos/hero2.mp4" type="video/mp4"/>
            </video>
            <Container className="relative z-20 text-center">
                <motion.div
                    initial={{y: 150, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2}}
                    className="p-6"
                >
                    <p className="p-1 font-thin text-hero-muted-text">{dict.eyebrow}</p>
                    <h1 className="text-2xl tracking-tight text-hero-text md:text-3xl lg:text-4xl">
                        {dict.title}{" "}
                        <span className="font-bold">MinKits</span>
                    </h1>

                    <p className="mt-3 text-sm font-light text-hero-muted-text md:text-base lg:text-xl">
                        {dict.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link href={`/${lang}/components/component-packs`}>
                            <Button variant="primary">
                                {dict.explore}
                            </Button>
                        </Link>
                        <Link href={`/${lang}/components`}>
                            <Button variant="secondary">
                                {dict.components}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
