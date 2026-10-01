import {
    ChartPieIcon,
    HandThumbUpIcon,
    PauseCircleIcon,
    ChartBarIcon,
    GiftTopIcon,
    HeartIcon
} from "@heroicons/react/24/outline"
import SectionTitle from "@/app/[lang]/components/sectionTitle";
import Image from "next/image";

const features = [
    {
        title: "Build Faster",
        desc: "Skip repetitive UI work and spend more time building the features your users need.",
        icon: "/images/icons/featuresIcons/technology-integrated-circuits.svg",
    },
    {
        title: "Production Ready",
        desc: "Professionally crafted components built for real-world projects and scalable applications.",
        icon: "/images/icons/featuresIcons/command-window-line.svg",
    },
    {
        title: "Clean & Consistent",
        desc: "Keep your design system unified and deliver a more polished user experience.",
        icon: "/images/icons/featuresIcons/developer.svg",
    },
    // {
    //     title: "Sales",
    //     desc: "Experience the difference of our personalized sales approach, where you are always our top priority.",
    //     icon: "/images/icons/featuresIcons/responsive.svg",
    // },
    // {
    //     title: "Onboarding",
    //     desc: "Our onboarding process is designed to be simple and intuitive, so you can start using our platform right away",
    //     icon: "/images/icons/featuresIcons/repository.svg",
    // },
    // {
    //     title: "Support",
    //     desc: "Our commitment to exceptional support ensures that you receive the assistance you need, whenever you need it",
    //     icon: "/images/icons/featuresIcons/interface-settings.svg",
    // },
]
type Props = { lang: "fa" | "en"; dict: { title: string; subtitle: string; items: { title: string; desc: string }[] } }

export default function MyFeatures({lang, dict}: Props) {
    return (
        <section id={"aboutUs"} className="md:my-10 md:mx-30 my-5 mx-5 bg-transparent">
            <SectionTitle brand='MinKits Team' title={dict.title} subTitle={dict.subtitle} lang={lang}/>
            <div className="max-w-7xl mx-auto px-6">

                {/*/!* Header *!/*/}
                {/*<div className="text-center max-w-3xl mx-auto mb-20">*/}
                {/*    <h2 className="text-4xl font-bold text-zinc-900 mb-4">*/}
                {/*        Every feature designed for the user*/}
                {/*    </h2>*/}
                {/*    <p className="text-zinc-500 text-lg">*/}
                {/*        At every step of our process, we prioritize the user, ensuring that our*/}
                {/*        products and services are designed with their needs in mind.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={i}
                                className={` hover:animate-pulse cursor-pointer
                  px-10 py-14 text-center
                  border-white
                  ${i % 3 !== 0 ? "md:border-l" : ""}
                  ${i >= 3 ? "border-t" : ""}
                `}
                            >
                                <div className="flex justify-center">
                                    <Image src={item.icon} width={200} height={200} alt={"features"} className="w-20 h-20"/>
                                </div>

                                <h3 className="text-lg font-semibold text-zinc-900">
                                    {dict.items[i]?.title ?? item.title}
                                </h3>
                                <div
                                    className='w-full h-px my-5 bg-linear-to-r from-white/25 via-zinc-500 to-white/25'></div>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {dict.items[i]?.desc ?? item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
