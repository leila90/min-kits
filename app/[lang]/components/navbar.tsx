"use client";
import {useEffect,useState} from "react";
import {Dialog,DialogPanel,PopoverGroup} from "@headlessui/react";
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "./languageDropdown";
import type {Lang} from "@/app/i18n/config";
import type {Messages} from "@/app/i18n/messages";
type Props={lang:Lang;dict:Messages};
export default function Navbar({lang,dict}:Props){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>50);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn)},[]);
 const links=[["about",dict.nav.about],["blog",dict.nav.blog],["companies",dict.nav.companies],["contact",dict.nav.contact],["careers",dict.nav.careers]] as const;
 return <header className={"fixed md:my-10 md:mx-20 my-5 mx-5 rounded-2xl border backdrop-blur top-0 left-0 right-0 z-50 "+(scrolled?"bg-black/90":"bg-black/80")+" text-white "+(open?"lg:block hidden":"")}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
   <Link href={"/"+lang}><Image alt="MinKits" src="/logo-ww.png" width={150} height={150} className="md:h-16 h-16 w-auto m-2"/></Link>
   <div className="flex lg:hidden"><button type="button" onClick={()=>setOpen(true)} className="-m-2.5 p-2.5"><span className="sr-only">{dict.nav.home}</span><Bars3Icon aria-hidden className="size-6"/></button></div>
   <PopoverGroup className="hidden lg:flex lg:gap-x-12">{links.map(([href,label])=><Link key={href} href={href==="contact"?"/"+lang+"#contactUs":href==="about"?"/"+lang+"/about":href==="blog"?"/"+lang+"/blog":"/"+lang} className="text-sm/6 font-semibold">{label}</Link>)}</PopoverGroup>
   <div className="hidden lg:flex lg:flex-1 lg:justify-end"><LanguageDropdown/></div>
  </nav>
  <Dialog open={open} onClose={setOpen} className="lg:hidden"><DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"><div className="flex items-center justify-between"><Link href={"/"+lang}><Image alt="MinKits" src="/logo-bb.png" width={250} height={250} className="h-20 w-auto"/></Link><button type="button" onClick={()=>setOpen(false)} className="p-2.5 text-zinc-700"><span className="sr-only">Close</span><XMarkIcon aria-hidden className="size-6"/></button></div><div className="mt-6 space-y-2 py-6">{links.map(([href,label])=><Link key={href} href={href==="contact"?"/"+lang+"#contactUs":href==="about"?"/"+lang+"/about":href==="blog"?"/"+lang+"/blog":"/"+lang} onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900">{label}</Link>)}<div className="pt-4"><LanguageDropdown/></div></div></DialogPanel></Dialog>
 </header>
}