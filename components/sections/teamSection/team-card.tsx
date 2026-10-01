import Image from "next/image";

type Props = {
    name: string;
    role: string;
    image: string;
};

export default function TeamCard({name, role, image}: Props) {
    return (
        <article className="relative my-5 rounded-xl border-2 border-team-card-border bg-team-card-background px-6 text-center shadow-xl transition hover:border-team-card-hover-border">
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-b from-team-avatar-start to-team-avatar-end p-0.5">
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
            <div className="mt-14">
                <h3 className="text-sm font-semibold text-team-card-heading">{name}</h3>
                <p className="text-sm text-team-card-role">{role}</p>
            </div>
        </article>
    );
}
