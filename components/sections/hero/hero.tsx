'use client'

import {motion} from 'framer-motion';
import {Button, Container} from '@/components/ui';

type HeroProps = { dict: { eyebrow: string; title: string; description: string; explore: string; components: string } };

export default function Hero({ dict }: HeroProps) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden flex justify-center items-center">
            <div className="absolute inset-0 z-10 bg-white/50"/>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-bg.jpg"
                className="absolute inset-0 z-0 object-cover"
            >
                <source src="/videos/hero2.mp4" type="video/mp4"/>
            </video>
            <Container className="relative z-20 text-center">
                <motion.div
                    initial={{y: 150, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + 0.1}}
                    className="p-6"
                >
                    <h6 className="font-thin p-1 text-zinc-600"> {dict.eyebrow} </h6>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-black">
                        {dict.title}{" "}
                        <span className="font-bold">MinKits</span>
                    </h1>

                    <h4 className="text-sm md:text-base lg:text-xl font-light text-zinc-600 mt-3">
                        {dict.description}
                    </h4>

                    <div className="mt-8 flex items-center gap-4">
                        <Button variant="primary">
                            {dict.explore}
                        </Button>

                        <Button variant="secondary">
                            {dict.components}
                        </Button>
                    </div>                    {/*        className="md:px-15 px-5 mx-5 text-sm font-semibold p-1 tracking-tight text-balance py-3 text-white rounded-xl border-2 border-black bg-black cursor-pointer">*/}                    {/*    </button>*/}                    {/*        className="md:px-15 px-5 mx-5 text-sm font-semibold p-1 tracking-tight text-balance py-3 text-white rounded-xl border-2 border-black bg-black cursor-pointer">*/}                    {/*    </button>*/}                </motion.div>
            </Container>
        </div>
    )
}