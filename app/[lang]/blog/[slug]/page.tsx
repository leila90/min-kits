import {getDictionary} from "../../../dictionaries";
import Header from "../../components/header";
import FooterHeader from "../../components/footerHeader";
import Breadcrumb from "@/app/[lang]/components/breadcrumb";
import {MagazineEditorialColumns} from "@/app/[lang]/components/magazine-editorial-columns";


type PageProps = {
    params: {
        lang: "fa" | "en";
        slug: string;
    };
};
export default async function Page({params}: PageProps) {
    const {lang} = await params
    const {slug} = await params
    const dict = await getDictionary(lang);
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