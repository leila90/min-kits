import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary,isLang} from "@/app/i18n";
import {Header,FooterHeader} from "@/components/layout";
import {Breadcrumb} from "@/components/common";
import {AboutUs} from "@/components/sections";
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params;if(!isLang(lang))return{};const d=await getDictionary(lang);return{title:d.about.title,description:d.about.subtitle,alternates:{canonical:`/${lang}/about`,languages:{en:"/en/about",fa:"/fa/about"}},openGraph:{url:`/${lang}/about`}};}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!isLang(lang))notFound();const d=await getDictionary(lang);return <><Header/><Breadcrumb lang={lang} dict={d.breadcrumbs} page="about"/><AboutUs lang={lang} dict={d.about}/><FooterHeader/></>}