import type {HTMLAttributes} from "react";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: "neutral" | "dark" | "accent";
};

const variants = {
    neutral: "border-zinc-200 bg-zinc-50 text-zinc-700",
    dark: "border-zinc-800 bg-zinc-900 text-white",
    accent: "border-amber-200 bg-amber-50 text-amber-800",
} as const;

export default function Badge({variant = "neutral", className = "", ...props}: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
