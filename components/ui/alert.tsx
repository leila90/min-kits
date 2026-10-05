import type {HTMLAttributes} from "react";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
    variant?: "info" | "success" | "warning" | "danger";
};

const variants = {
    info: "border-sky-200 bg-sky-50 text-sky-950",
    success: "border-emerald-200 bg-emerald-50 text-emerald-950",
    warning: "border-amber-200 bg-amber-50 text-amber-950",
    danger: "border-red-200 bg-red-50 text-red-950",
} as const;

export default function Alert({variant = "info", className = "", role = "status", ...props}: AlertProps) {
    return (
        <div
            role={role}
            className={`rounded-xl border px-4 py-3 text-sm leading-6 ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
