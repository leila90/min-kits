import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary,isLang} from "@/app/i18n";
import {Header,FooterHeader} from "../../components/layout";
import {Breadcrumb} from "../../components/common";
import {MagazineEditorialColumns} from "../../components/blog";
export function generateStaticParams(){return ["en","fa"].flatMap(lang=>["1","2","3"].map(slug=>({lang,slug})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug:string}>}):Promise<Metadata>{const {lang,slug}=await params;if(!isLang(lang))return{};const d=await getDictionary(lang);const post=d.blog.posts[(Number(slug)-1)%d.blog.posts.length];return{title:post.title,description:post.description};}
export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}){const {lang,slug}=await params;if(!isLang(lang))notFound();const d=await getDictionary(lang);return <><Header/><Breadcrumb lang={lang} dict={d.breadcrumbs}/><section className="mx-5 md:mx-30"><h1 className="mt-10 text-3xl font-bold">{d.blog.posts[(Number(slug)-1)%d.blog.posts.length].title}</h1><p className="mt-5 text-zinc-600">{d.blog.posts[(Number(slug)-1)%d.blog.posts.length].description}</p></section><MagazineEditorialColumns/><FooterHeader/></>}