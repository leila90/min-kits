import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "./components/hero";
import Header from "./components/header";
import MySlogan from "./components/mySlogan";
import ContactUs from "./components/contactUs";
import Logo from "./components/logo";
import AboutUs from "./components/aboutUs";
import FooterHeader from "./components/footerHeader";
import MyFeatures from "./components/myFeatures";
import LatestBlog from "./components/latestBlog";
import TeamSection from "./components/teamSection";
import BlogSection from "./components/blogSection";
import Ctr from "./components/ctr";
import { getDictionary, hasLocale } from "../dictionaries";

export const metadata: Metadata = {
    title: { absolute: "MinKits | Production-ready UI kits" },
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();
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
