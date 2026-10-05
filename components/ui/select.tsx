import type {SelectHTMLAttributes} from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({className = "", ...props}: SelectProps) {
    return (
        <select
            className={`h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 disabled:cursor-not-allowed disabled:bg-zinc-100 ${className}`}
            {...props}
        />
    );
}
