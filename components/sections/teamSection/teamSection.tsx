import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";
import TeamCard from "./team-card";

type Props = {
    lang: "fa" | "en";
    dict: { title: string; subtitle: string };
};

const team = [
    {name: "Priya Bhatt", role: "Owner", image: "/images/avatar2.jpg"},
    {name: "Kiran Saxena", role: "Founder", image: "/images/avatar2.jpg"},
    {name: "Rajesh Dixit", role: "HR", image: "/images/avatar2.jpg"},
];

export default function TeamSection({lang, dict}: Props) {
    return (
        <section id="team" className="scroll-mt-36 pt-4 pb-16 md:scroll-mt-44 md:pt-8 md:pb-20">
            <Container>
                <SectionTitle brand="MinKits Team" title={dict.title} subTitle={dict.subtitle} marginTop="16" lang={lang}/>
                <div className="my-20 grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <TeamCard key={member.name} {...member}/>
                    ))}
                </div>
            </Container>
        </section>
    );
}
