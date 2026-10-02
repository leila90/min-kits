import type {LabelHTMLAttributes, ReactNode} from "react";

export type FormFieldProps = LabelHTMLAttributes<HTMLLabelElement> & {
    label: ReactNode;
    children: ReactNode;
};

export default function FormField({
    label,
    children,
    className = "",
    htmlFor,
    ...props
}: FormFieldProps) {
    return (
        <div className="min-w-0">
            <label
                htmlFor={htmlFor}
                className={["mb-2 block text-sm text-form-label", className].filter(Boolean).join(" ")}
                {...props}
            >
                {label}
            </label>
            {children}
        </div>
    );
}
