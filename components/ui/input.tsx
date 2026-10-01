import type {InputHTMLAttributes} from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({className = "", ...props}: InputProps) {
    return (
        <input
            className={[
                "h-13 w-full min-w-0 rounded-xl border border-input-border bg-input-background px-4 text-sm text-input-text outline-none transition-colors",
                "placeholder:text-input-placeholder focus:border-input-border-focus",
                "disabled:pointer-events-none disabled:opacity-50",
                className,
            ].filter(Boolean).join(" ")}
            {...props}
        />
    );
}
