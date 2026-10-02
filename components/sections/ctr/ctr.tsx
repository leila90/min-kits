import Image from "next/image";
import Container from "@/components/ui/container";

export default function Ctr() {
    return (
        <section id="ctr" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
                        {/*<div className="relative flex flex-col md:flex-row justify-center">*/}
            <Container>
                <div className="relative flex flex-col bg-ctr-background rounded-tl-4xl rounded-br-4xl">
                    <div className="flex items-center justify-center px-10">
                        <Image src={'/images/circle-temp-ww.png'} alt={'logo'} height={400} width={400}/>
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
            </Container>
            {/*</div>*/}
        </section>
    );
};