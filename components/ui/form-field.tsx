import type {LabelHTMLAttributes, ReactNode} from "react";

export type FormFieldProps = LabelHTMLAttributes<HTMLLabelElement> & {
    label: ReactNode;
    children: ReactNode;
};

export default function FormField({
    label,
    children,
    className = "",
    ...props
}: FormFieldProps) {
    return (
        <label className={["block min-w-0", className].filter(Boolean).join(" ")} {...props}>
            <span className="mb-2 block text-sm text-form-label">{label}</span>
            {children}
        </label>
    );
}
