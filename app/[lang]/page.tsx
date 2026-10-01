import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "./components/sections/hero";
import Header from "./components/layout/header";
import MySlogan from "./components/sections/mySlogan";
import ContactUs from "./components/sections/contactUs";
import Logo from "./components/layout/logo";
import AboutUs from "./components/sections/aboutUs";
import FooterHeader from "./components/layout/footerHeader";
import MyFeatures from "./components/sections/myFeatures";
import LatestBlog from "./components/sections/latestBlog";
import TeamSection from "./components/sections/teamSection";
import BlogSection from "./components/sections/blogSection";
import Ctr from "./components/sections/ctr";
import { getDictionary, isLang } from "../i18n";

export const metadata: Metadata = {
    title: { absolute: "MinKits | Production-ready UI kits" },
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    if (!isLang(lang)) notFound();
    const dict = await getDictionary(lang);

    return (
        <>
            <Hero dict={dict.hero} />
            <Header />
            <MySlogan dict={{ slogan: dict.slogan.text, mainSlogan: dict.slogan.value }} />
            <AboutUs lang={lang} dict={dict.about} />
            <MyFeatures lang={lang} dict={dict.features} />
            <Ctr />
            <BlogSection lang={lang} dict={dict.blog} />
            <TeamSection lang={lang} dict={dict.team} />
            <LatestBlog dict={{ title: dict.blog.title, subtitle: dict.blog.subtitle, viewAll: dict.blog.viewAll, readMore: dict.blog.readMore }} />
            <ContactUs lang={lang} dict={dict.contact} />
            <Logo />
            <FooterHeader />
        </>
    );
}
