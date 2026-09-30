import Hero from "../[lang]/components/hero";
import Header from "../[lang]/components/header";
import MySlogan from "./components/mySlogan";
import AnimatedGallery from "../[lang]/components/animatedGallery";
import AppStore from "../[lang]/components/appStore/appStore";
import ContactUs from "../[lang]/components/contactUs";
import Logo from "../[lang]/components/logo";
import {getDictionary} from "../dictionaries";
import Content from "./components/content";
import FormBlog from "../[lang]/components/formBlog";
import AboutUs from "../[lang]/components/aboutUs";
import FooterHeader from "./components/footerHeader";
import Card from "@/app/[lang]/components/card";
import MyFeatures from "@/app/[lang]/components/myFeatures";
import LatestBlog from "@/app/[lang]/components/latestBlog";
import FeaturesNavs from "@/app/[lang]/components/featuresNavs";
import TeamSection from "@/app/[lang]/components/teamSection";
import BlogSection from "@/app/[lang]/components/blogSection";
import Ctr from "@/app/[lang]/components/ctr";

type PageProps = {
    params: {
        lang: "fa" | "en";
    };
};
export default async function Home({params}: PageProps) {
    const {lang} = await params
    const dict = await getDictionary(lang);
console.log("page =>", lang);
    return (
        <>
            <Hero />
            <Header />
            <MySlogan lang={lang} dict={dict}/>
            <AboutUs lang={lang}/>
            <MyFeatures lang={lang}/>
            <Ctr lang={lang}/>
            <BlogSection lang={lang}/>
            {/*<FeaturesNavs />*/}
            {/*<Content lang={lang}/>*/}
            {/*<LatestBlog />*/}
            {/*<FormBlog lang={lang}/>*/}
            <TeamSection lang={lang}/>
            <LatestBlog />
            {/*<AnimatedGallery />*/}
            {/*<AppStore />*/}
            <ContactUs lang={lang}/>
            {/*<Card />*/}
            <Logo />
            <FooterHeader />
        </>
    )
}