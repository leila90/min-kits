import type {InputHTMLAttributes} from "react";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function Radio({className = "", ...props}: RadioProps) {
    return (
        <input
            type="radio"
            className={`size-4 border-zinc-300 text-zinc-900 accent-zinc-900 focus:ring-2 focus:ring-zinc-400 ${className}`}
            {...props}
        />
    );
}
