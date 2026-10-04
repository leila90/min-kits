"use client";

import {cloneElement, useId, type ReactElement, type ReactNode} from "react";

export type TooltipProps = {
    content: ReactNode;
    children: ReactElement;
};

export default function Tooltip({content, children}: TooltipProps) {
    const tooltipId = useId();

    return (
        <span className="group relative inline-flex">
            {cloneElement(children, {"aria-describedby": tooltipId})}
            <span
                id={tooltipId}
                role="tooltip"
                className="pointer-events-none absolute bottom-full start-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
            >
                {content}
            </span>
        </span>
    );
}
