"use client";
import {motion} from 'framer-motion';

type SectionTitleProps = {
    brand: string,
    title: string,
    subTitle: string,
    marginTop?: string,
    lang: "fa" | "en"
}

export default function SectionTitle(props: SectionTitleProps
) {
    const {brand, title, subTitle, marginTop, lang} = props
    return (
        <motion.div
            initial={{y: 150, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + 0.1}}
        >
            <div
                className={`text-2xl lg:text-3xl font-bold mb-4 ${marginTop ? "mt-"+marginTop : "mt-20"}`}
                style={{opacity: 1, transform: 'none'}}
            >
                {/* Top small label */}
                <div className="font-light text-base flex items-center gap-2 overflow-visible">

                    <span className="text-black lg:text-[28px] text-base font-extralight">
                        {title}
                    </span>
                    <div className="relative flex flex-col items-end w-[70px] lg:w-[240px] h-full">
                        <div
                            className={`w-full h-px bg-linear-to-r ${lang === "fa" ? "from-white/25 via-black/50 to-black/25" : "from-black via-black/50 to-white/25"}`}>
                        </div>

                        {/* Divider SVG */}
                        {/*<svg*/}
                        {/*    width="144"*/}
                        {/*    height="6"*/}
                        {/*    viewBox="0 0 144 6"*/}
                        {/*    fill="none"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*    className="block"*/}
                        {/*>*/}
                        {/*    <path*/}
                        {/*        d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM143 3.50001L143.5 3.50001L143.5 2.50001L143 2.50001L143 3.50001ZM3 3L3 3.5L143 3.50001L143 3.00001L143 2.50001L3 2.5L3 3Z"*/}
                        {/*        fill="#939393"*/}
                        {/*    />*/}
                        {/*</svg>*/}

                        <p className="m-0 lg:text-[9px] text-[7px] font-bold absolute bottom-1">
                            {brand}
                        </p>
                    </div>
                </div>
                <div className="font-light text-base flex items-center gap-2 overflow-visible mt-5">
                    {/* Divider SVG */}
                    <div className="icon-display">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="0" fill="#000000">
                                <animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99"
                                         repeatCount="indefinite" values="0;11"></animate>
                                <animate attributeName="opacity" calcMode="spline" dur="1.2s"
                                         keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0"></animate>
                            </circle>
                        </svg>
                    </div>
                    <span className="text-[#939393] lg:text-[15px] text-base">
                    {subTitle}
                </span>
                </div>
            </div>
        </motion.div>
    )
}
