import Image from "next/image";
import Container from "@/components/ui/container";

export default function Ctr() {
    return (
        <section id="ctr" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <div className="relative flex flex-col bg-ctr-background rounded-tl-4xl rounded-br-4xl">
                    <div className="flex items-center justify-center px-10">
                        <Image src={'/images/circle-temp-ww.png'} alt={'logo'} height={400} width={400}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};