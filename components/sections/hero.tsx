'use client'

import {motion} from 'framer-motion';
import {Button} from '@/components/ui';

type HeroProps = { dict: { eyebrow: string; title: string; description: string; explore: string; components: string } };

export default function Hero({ dict }: HeroProps) {
    return (
        // <div className="relative min-h-screen w-full md:bg-[url('/images/banner.png')] bg-[url('/images/banner.png')] bg-cover bg-no-repeat flex md:justify-start justify-center items-center">
        // <div className="relative min-h-screen w-full bg-white bg-cover bg-no-repeat flex md:justify-start justify-center items-center">
        <div className="relative min-h-screen w-full overflow-hidden flex justify-center items-center">
            <div className="absolute inset-0 h-full w-full bg-white/50"/>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/videos/hero2.mp4" type="video/mp4"/>
            </video>
            <div className="text-center bg-none lg:mx-30 md:mx-10">
                <motion.div
                    initial={{y: 150, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + 0.1}}
                    className={`relative p-6`}
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
                    </div>
                        {/*<Link*/}
                        {/*    href="#"*/}
                        {/*    className="rounded-xl px-15 bg-black py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                        {/*>*/}
                        {/*    About US*/}
                        {/*</Link>*/}
                        {/*<div*/}
                        {/*    className="rainbow relative z-0 bg-black overflow-hidden p-0.5 flex items-center justify-center rounded-full transition duration-300 active:scale-100">*/}
                        {/*    <button*/}
                        {/*        className="px-15 text-sm py-3 text-white rounded-full font-medium bg-black backdrop-blur cursor-pointer">*/}
                        {/*        About Us*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className="rainbow relative z-0 bg-black/30 overflow-hidden p-0.5 flex items-center justify-center rounded-full transition duration-300 active:scale-100">*/}
                        {/*    <button*/}
                        {/*        className="px-15 text-sm py-3 text-black rounded-full font-medium bg-white backdrop-blur cursor-pointer">*/}
                        {/*        About Us*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    {/*    <button*/}
                    {/*        className="md:px-15 px-5 mx-5 text-sm font-semibold p-1 tracking-tight text-balance py-3 text-white rounded-xl border-2 border-black bg-black cursor-pointer">*/}
                    {/*        Explore Kits*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        className="md:px-15 px-5 mx-5 text-sm font-semibold p-1 tracking-tight text-balance py-3 text-white rounded-xl border-2 border-black bg-black cursor-pointer">*/}
                    {/*        View Components*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </motion.div>
            </div>
        </div>
    )
}