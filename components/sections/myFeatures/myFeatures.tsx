import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";
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
];

type Props = {
    lang: "fa" | "en";
    dict: { title: string; subtitle: string; items: { title: string; desc: string }[] };
};

export default function MyFeatures({lang, dict}: Props) {
    return (
        <section id="features" className="scroll-mt-36 pt-16 pb-8 md:scroll-mt-44 md:pt-20 md:pb-10">
            <Container>
                <SectionTitle brand="MinKits Team" title={dict.title} subTitle={dict.subtitle} lang={lang}/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className={[
                                "cursor-pointer px-10 py-14 text-center hover:animate-pulse",
                                "md:[&:nth-child(even)]:border-s",
                                "lg:[&:nth-child(3n+2)]:border-s lg:[&:nth-child(3n)]:border-s",
                                "md:[&:nth-child(n+3)]:border-t",
                                "lg:[&:nth-child(n+4)]:border-t",
                                "border-features-grid-border",
                            ].join(" ")}
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={item.icon}
                                    width={200}
                                    height={200}
                                    alt={item.title}
                                    className="h-20 w-20"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-features-heading">
                                {dict.items[i]?.title ?? item.title}
                            </h3>

                            <div className="my-5 h-px w-full bg-linear-to-r from-features-divider/25 via-features-divider to-features-divider/25"/>

                            <p className="text-sm leading-relaxed text-features-text">
                                {dict.items[i]?.desc ?? item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}