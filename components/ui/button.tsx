import type {ButtonHTMLAttributes} from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
    primary: "bg-button-primary text-white border border-button-primary hover:bg-button-primary-hover",
    secondary: "bg-button-secondary text-button-text border border-button-text hover:bg-button-secondary-hover hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
};

export default function Button({
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={[
                "inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-focus",
                "disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className,
            ].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </button>
    );
}
