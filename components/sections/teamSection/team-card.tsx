import Image from "next/image";

type Props = {
    name: string;
    role: string;
    image: string;
};

export default function TeamCard({name, role, image}: Props) {
    return (
        <article className="relative my-5 rounded-xl border-2 border-zinc-200 bg-white px-6 text-center shadow-xl transition hover:border-zinc-500">
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-b from-white to-zinc-500 p-0.5">
                <div className="rounded-full bg-white p-2">
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
                <h3 className="text-sm font-semibold text-zinc-900">{name}</h3>
                <p className="text-sm text-zinc-500">{role}</p>
            </div>
        </article>
    );
}
