import type {HTMLAttributes} from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
    interactive?: boolean;
};

export default function Card({interactive = false, className = "", ...props}: CardProps) {
    return (
        <div
            className={[
                "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                interactive && "transition-shadow hover:shadow-md",
                className,
            ].filter(Boolean).join(" ")}
            {...props}
        />
    );
}
