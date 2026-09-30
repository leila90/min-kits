import { notFound } from "next/navigation";
import Hero from "./components/sections/Hero/HeroSection";
import MySlogan from "./components/sections/Slogan/SloganSection";
import AboutUs from "./components/sections/About/AboutSection";
import MyFeatures from "./components/sections/Features/FeaturesSection";
import BlogSection from "./components/sections/Blog/BlogSection";
import ContactUs from "./components/sections/Contact/ContactSection";
import { getContent, hasLocale, type Locale } from "@/content/site";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const content = getContent(locale);
  return (
    <>
      <Hero content={content.home} />
      <MySlogan content={content.home} />
      <AboutUs lang={locale} content={content.home} />
      <MyFeatures lang={locale} content={content.home} />
      <BlogSection lang={locale} content={content} />
      <ContactUs lang={locale} content={content.home} />
    </>
  );
}
