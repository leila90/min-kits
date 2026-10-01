import SectionTitle from "@/app/[lang]/components/common/sectionTitle";
import Image from "next/image";
import {CloudArrowUpIcon, LockClosedIcon} from "@heroicons/react/16/solid";
import {ServerIcon} from "@heroicons/react/24/outline";
type Props = {
    lang: "fa" | "en";
    dict: { title: string; subtitle: string; intro: string; items: { title: string; text: string }[] };
}
export default function AboutUs({lang, dict}: Props) {
    return (
        <section id={"aboutUs"} className="md:my-10 md:mx-30 my-5 mx-5 bg-transparent">
            <SectionTitle brand='MinKits Team' title={dict.title} subTitle={dict.subtitle} lang={lang}/>
            <div className="relative bg-[url('/images/background.svg')] bg-cover bg-no-repeat flex flex-col gap-10 lg:flex-row md:flex-col justify-center px-4">
                <div className="items-start basis-1/2 relative">
                    {/*<div className="lg:max-w-lg">*/}
                    {/*    /!*<p className="text-base/7 font-semibold text-black/50">Deploy faster</p>*!/*/}
                    {/*    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-zinc-900 sm:text-5xl">*/}
                    {/*        About Us*/}
                    {/*    </h1>*/}
                    {/*</div>*/}
                    <div className="text-base/7 text-zinc-700 text-justify">
                        <p>
                            {dict.intro}
                        </p>
                        <ul role="list" className="mt-8 space-y-8 text-zinc-600">
                            <li className="flex gap-x-3">
                                <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-black/50" />
                                <span>
                    <strong className="font-semibold text-zinc-900">{dict.items[0].title}.</strong> {dict.items[0].text}
                  </span>
                            </li>
                            <li className="flex gap-x-3">
                                <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-black/50" />
                                <span>
                    <strong className="font-semibold text-zinc-900">{dict.items[1].title}.</strong> {dict.items[1].text}
                  </span>
                            </li>
                            <li className="flex gap-x-3">
                                <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-black/50" />
                                <span>
                    <strong className="font-semibold text-zinc-900">{dict.items[2].title}.</strong> {dict.items[2].text}
                  </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items-start basis-1/2 justify-items-center">
                    <Image src={"/images/about1.jpg"} className={"w-full rounded-4xl shadow-2xl"} width={200}
                           height={40}
                           alt={'about us'}/>
                    {/*<div className="w-full lg:justify-start justify-center items-start flex">*/}
                    {/*    <div*/}
                    {/*        className="sm:w-[564px] w-full sm:h-[446px] h-full sm:bg-black/30 rounded-3xl sm:border border-gray-200 relative">*/}
                    {/*        <Image width={200} height={50} className={`sm:mt-5 ${lang === "en" ? "sm:ml-5" : "sm:mr-5"} w-full h-full rounded-3xl object-cover`}*/}
                    {/*             src="/images/about1.jpg" alt="about Us image"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}