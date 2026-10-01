import type {HTMLAttributes} from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({className = "", children, ...props}: ContainerProps) {
    return (
        <div
            className={[
                "mx-auto min-w-0 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8",
                className,
            ].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </div>
    );
}