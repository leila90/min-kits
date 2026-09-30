import { notFound } from "next/navigation";
import Hero from "./components/hero";
import MySlogan from "./components/mySlogan";
import AboutUs from "./components/aboutUs";
import MyFeatures from "./components/myFeatures";
import BlogSection from "./components/blogSection";
import ContactUs from "./components/contactUs";
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
