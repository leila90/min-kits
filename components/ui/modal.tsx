"use client";

import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import type {ReactNode} from "react";

export type ModalProps = {
    open: boolean;
    onClose: (open: boolean) => void;
    title?: ReactNode;
    children: ReactNode;
    className?: string;
};

export default function Modal({open, onClose, title, children, className = ""}: ModalProps) {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-[100]">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true"/>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl ${className}`}>
                    {title && (
                        <DialogTitle className="text-lg font-semibold text-zinc-950">
                            {title}
                        </DialogTitle>
                    )}
                    <div className={title ? "mt-4" : ""}>{children}</div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
