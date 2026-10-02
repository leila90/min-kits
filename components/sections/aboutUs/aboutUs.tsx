import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";
import Image from "next/image";
import {CloudArrowUpIcon, LockClosedIcon} from "@heroicons/react/16/solid";
import {ServerIcon} from "@heroicons/react/24/outline";

type Props = {
    lang: "fa" | "en";
    dict: { title: string; subtitle: string; intro: string; items: { title: string; text: string }[] };
};

export default function AboutUs({lang, dict}: Props) {
    return (
        <section id="aboutUs" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <SectionTitle brand="MinKits Team" title={dict.title} subTitle={dict.subtitle} lang={lang}/>

                <div className="relative flex flex-col justify-center gap-10 bg-[url('/images/background.svg')] bg-cover bg-no-repeat px-4 lg:flex-row">
                    <div className="basis-1/2">
                        <div className="text-base/7 text-justify text-about-text">
                            <p>{dict.intro}</p>

                            <ul role="list" className="mt-8 space-y-8 text-about-list">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-about-icon"/>
                                    <span>
                                        <strong className="font-semibold text-about-heading">{dict.items[0].title}.</strong> {dict.items[0].text}
                                    </span>
                                </li>

                                <li className="flex gap-x-3">
                                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-about-icon"/>
                                    <span>
                                        <strong className="font-semibold text-about-heading">{dict.items[1].title}.</strong> {dict.items[1].text}
                                    </span>
                                </li>

                                <li className="flex gap-x-3">
                                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-about-icon"/>
                                    <span>
                                        <strong className="font-semibold text-about-heading">{dict.items[2].title}.</strong> {dict.items[2].text}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="basis-1/2">
                        <Image
                            src="/images/about1.jpg"
                            className="w-full rounded-4xl shadow-2xl"
                            width={200}
                            height={40}
                            alt="about us"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}