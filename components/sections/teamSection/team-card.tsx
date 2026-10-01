import Image from "next/image";

type Props = {
    name: string;
    role: string;
    image: string;
};

export default function TeamCard({name, role, image}: Props) {
    return (
        <article className="group relative my-5 overflow-hidden rounded-xl border-2 border-team-card-border bg-team-card-background/70 px-6 text-center shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-team-card-hover-border hover:shadow-[0_0_35px_var(--team-card-glow)]">
            <div className="pointer-events-none absolute inset-y-0 -start-1/2 w-1/3 -skew-x-12 bg-team-card-shine/30 opacity-0 blur-xl transition-all duration-700 group-hover:start-[130%] group-hover:opacity-100"/>
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-b from-team-avatar-start to-team-avatar-end p-0.5 transition-transform duration-500 group-hover:scale-105">
                <div className="rounded-full bg-team-avatar-background p-2">
                    <Image
                        src={image}
                        alt={name}
                        className="h-20 w-20 rounded-full object-cover"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className="relative mt-14">
                <h3 className="text-sm font-semibold text-team-card-heading">{name}</h3>
                <p className="text-sm text-team-card-role">{role}</p>
            </div>
        </article>
    );
}
