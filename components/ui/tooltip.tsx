import type {ReactNode} from "react";

export type TooltipProps = {
    content: ReactNode;
    children: ReactNode;
};

export default function Tooltip({content, children}: TooltipProps) {
    return (
        <span className="group relative inline-flex">
            {children}
            <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full start-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
            >
                {content}
            </span>
        </span>
    );
}
