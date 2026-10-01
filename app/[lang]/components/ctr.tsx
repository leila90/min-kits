import Image from "next/image";
import type { Messages } from "@/app/i18n/messages";
type Props = { dict: Messages["hero"] };

export default function Ctr({dict}: Props) {
    return (
        <section id="ctr" className="md:my-10 md:mx-30 my-5 mx-5">
                        {/*<div className="relative flex flex-col md:flex-row justify-center">*/}
                <div className="relative flex flex-col bg-black rounded-tl-4xl rounded-br-4xl">
                    <div className="flex items-center justify-center px-10">
                        <Image src={'/images/circle-temp-ww.png'} alt={dict.title} height={400} width={400}/>
                    </div>
                    {/*<div className="flex flex-col items-center justify-center px-10 basis-1/4">*/}
                    {/*    <div*/}
                    {/*        className='w-full h-px mt-8 bg-linear-to-r from-black via-white to-black'></div>*/}
                    {/*    <p className='text-sm text-white/60 mt-6 leading-relaxed'>*/}
                    {/*        PrebuiltUI is a growing collection of beautifully designed, production-ready Tailwind*/}
                    {/*        CSS UI components.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            {/*</div>*/}

        </section>
    );
};