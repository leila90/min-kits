import type {TextareaHTMLAttributes} from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({className = "", ...props}: TextareaProps) {
    return (
        <textarea
            className={[
                "min-h-32 w-full min-w-0 resize-y rounded-xl border border-input-border bg-input-background px-4 py-3 text-sm text-input-text outline-none transition-colors",
                "placeholder:text-input-placeholder focus:border-input-border-focus",
                "disabled:pointer-events-none disabled:opacity-50",
                className,
            ].filter(Boolean).join(" ")}
            {...props}
        />
    );
}
