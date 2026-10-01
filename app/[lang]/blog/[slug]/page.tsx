import {notFound} from "next/navigation";
import {hasLocale} from "../../../dictionaries";
import Header from "../../components/header";
import FooterHeader from "../../components/footerHeader";
import Breadcrumb from "@/app/[lang]/components/breadcrumb";
import {MagazineEditorialColumns} from "@/app/[lang]/components/magazine-editorial-columns";


export function generateStaticParams() {
    // TODO: replace with real post slugs once posts live in a data source
    return ["en", "fa"].flatMap((lang) => ["1","2","3","4","5"].map((slug) => ({lang, slug})));
}

export default async function Page({params}: {params: Promise<{lang: string; slug: string}>}) {
    const {lang} = await params
    if (!hasLocale(lang)) notFound();
    return (
        <>
            {/*<PageHeader />*/}
            <Header/>
            <Breadcrumb lang={lang}/>
            <MagazineEditorialColumns />
            <FooterHeader/>
        </>
    )
}