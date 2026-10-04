"use client";

import {useId, useState} from "react";
import type {ComponentPropsWithoutRef, MouseEvent} from "react";

export type SwitchProps = Omit<ComponentPropsWithoutRef<"button">, "onChange"> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
};

export default function Switch({
    checked,
    defaultChecked = false,
    onCheckedChange,
    onClick,
    className = "",
    ...props
}: SwitchProps) {
    const id = useId();
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checked !== undefined;
    const value = isControlled ? checked : internalChecked;

    const toggle = () => {
        const next = !value;
        if (!isControlled) setInternalChecked(next);
        onCheckedChange?.(next);
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        toggle();
        onClick?.(event);
    };

    return (
        <button
            id={id}
            type="button"
            role="switch"
            aria-checked={value}
            onClick={handleClick}
            className={[
                "inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
                value ? "bg-zinc-900" : "bg-zinc-300",
                className,
            ].join(" ")}
            {...props}
        >
            <span
                aria-hidden="true"
                className={[
                    "size-5 rounded-full bg-white shadow-sm transition-transform",
                    value ? "translate-x-5" : "translate-x-0",
                ].join(" ")}
            />
        </button>
    );
}
