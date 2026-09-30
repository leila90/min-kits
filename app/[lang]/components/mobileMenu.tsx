"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./languageDropdown";

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
  homeHref: string;
  siteName: string;
  links: readonly (readonly [string, string])[];
  closeLabel: string;
};

export default function MobileMenu({ open, onClose, homeHref, siteName, links, closeLabel }: Props) {
  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 text-zinc-900 shadow-xl">
        <div className="flex items-center justify-between">
          <Link href={homeHref} onClick={() => onClose(false)}>
            <Image src="/logo-bb.png" alt={siteName} width={140} height={70} className="h-16 w-auto object-contain" />
          </Link>
          <button type="button" onClick={() => onClose(false)} aria-label={closeLabel} className="p-2">
            <XMarkIcon className="size-6" />
          </button>
        </div>
        <div className="mt-8 space-y-2">
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => onClose(false)} className="block rounded-lg px-3 py-3 font-semibold hover:bg-zinc-100">
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-6 border-t pt-6"><LanguageDropdown /></div>
      </DialogPanel>
    </Dialog>
  );
}
