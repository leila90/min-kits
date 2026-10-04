import type {InputHTMLAttributes} from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function Checkbox({className = "", ...props}: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={`size-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900 focus:ring-2 focus:ring-zinc-400 ${className}`}
            {...props}
        />
    );
}
