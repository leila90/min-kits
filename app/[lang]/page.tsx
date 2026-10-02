import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/hero/hero";
import Header from "@/components/layout/header";
import MySlogan from "@/components/sections/mySlogan/mySlogan";
import ContactUs from "@/components/sections/contactUs/contactUs";
import Logo from "@/components/layout/logo";
import AboutUs from "@/components/sections/aboutUs/aboutUs";
import FooterHeader from "@/components/layout/footerHeader";
import MyFeatures from "@/components/sections/myFeatures/myFeatures";
import ComponentStore from "@/components/sections/componentStore/componentStore";
import LatestBlog from "@/components/sections/latestBlog/latestBlog";
import TeamSection from "@/components/sections/teamSection/teamSection";
import TeamContact from "@/components/sections/teamContact/teamContact";
import BlogSection from "@/components/sections/blogSection/blogSection";
import Ctr from "@/components/sections/ctr/ctr";
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
            <ComponentStore lang={lang} dict={dict.componentStore} />
            <Ctr />
            <BlogSection lang={lang} dict={dict.blog} />
            <TeamSection lang={lang} dict={dict.team} />
            <TeamContact lang={lang} dict={dict.contact} />
            <LatestBlog lang={lang} dict={{ title: dict.blog.title, subtitle: dict.blog.subtitle, viewAll: dict.blog.viewAll, readMore: dict.blog.readMore }} />
            <ContactUs lang={lang} dict={dict.contact} />
            <Logo />
            <FooterHeader />
        </>
    );
}
