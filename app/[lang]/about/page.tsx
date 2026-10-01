import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {hasLocale} from "../../dictionaries";
import Header from "../components/header";
import FooterHeader from "../components/footerHeader";
import Breadcrumb from "@/app/[lang]/components/breadcrumb";
import SectionTitle from "@/app/[lang]/components/sectionTitle";
import Content1 from "@/app/[lang]/components/content1";

const posts = [

    {
        id: 1,
        title: 'اساس و عملکرد کمپرسورها',
        imageUrl: '/images/blog/1.jpg',
        href: '#',
        description:
            'در دنیای مدرن پنوماتیک و دوره تجهیزات دوار، کمپرسورهای هوا از اساسی ترین تجهیزات مورد نیاز برای عملکرد کارخانه‌ها و کارگاه‌ها در سراسر جهان هستند. قبل از کمپرسورهای هوا، بسیاری از صنایع این قدرت خود را از سیستم های پیچیده با تسمه، چرخ و سایر اجزای بزرگ می گرفتند. این ماشین آلات عظیم، سنگین و پرهزینه بود و معمولاً برای بسیاری از عملیات های کوچک دور از دسترس بود. امروزه کمپرسورهای هوا در اشکال و اندازه‌های مختلفی وجود دارند و می‌توانید آن‌ها را در طبقات مغازه‌های بزرگ، کارگاه‌های خودرو و حتی گاراژ همسایه‌تان پیدا کنید.',

        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'علی عباسی',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/images/avatar2.jpg',
        },
    },
    {
        id: 2,
        title: 'محاسبات ترمودینامیکی',
        imageUrl: '/images/blog/2.jpg',
        href: '#',
        description:
            'ترمودینامیک رشته‌ای از فیزیک است که به مطالعه گرما، کار و دما و همچنین روابط آنها با انرژی، تابش و ویژگی‌های فیزیکی ماده می‌پردازد. این برای انواع علوم و موضوعات مهندسی مانند مهندسی شیمی، آموزش تاسیسات و مکانیک کاربرد دارد. این شاخه اساساً به دلیل تمایل به بهبود کارایی موتورهای بخار ایجاد شد.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'علی عباسی',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/images/avatar2.jpg',
        },
    },
    {
        id: 3,
        title: 'مبدل های حرارتیکولر های هوایی',
        imageUrl: '/images/blog/3.jpg',
        href: '#',
        description:
            'کمبود آب و افزایش هزینه ها، همراه با نگرانی های اخیر در مورد آلودگی آب و ستون های برج خنک کننده، استفاده صنعت از کندانسور را تا حد زیادی کاهش داده است. در نتیجه، زمانی که ادغام بیشتر گرما در نیروگاه امکان پذیر نباشد، معمولاً گرما را توسط مبدل های حرارتی کولر هوا مستقیماً به اتمسفر دفع می کنند و بخش زیادی از فرآیند خنک سازی در پالایشگاه ها و کارخانه های شیمیایی در این تجهیزات آموزشگاه فنی انجام می شود.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'علی عباسی',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/images/avatar2.jpg',
        },
    },
    {
        id: 4,
        title: 'مبدل های حرارتیکولر های هوایی',
        imageUrl: '/images/blog/3.jpg',
        href: '#',
        description:
            'کمبود آب و افزایش هزینه ها، همراه با نگرانی های اخیر در مورد آلودگی آب و ستون های برج خنک کننده، استفاده صنعت از کندانسور را تا حد زیادی کاهش داده است. در نتیجه، زمانی که ادغام بیشتر گرما در نیروگاه امکان پذیر نباشد، معمولاً گرما را توسط مبدل های حرارتی کولر هوا مستقیماً به اتمسفر دفع می کنند و بخش زیادی از فرآیند خنک سازی در پالایشگاه ها و کارخانه های شیمیایی در این تجهیزات آموزشگاه فنی انجام می شود.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'علی عباسی',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/images/avatar2.jpg',
        },
    },
    {
        id: 5,
        title: 'مبدل های حرارتیکولر های هوایی',
        imageUrl: '/images/blog/3.jpg',
        href: '#',
        description:
            'کمبود آب و افزایش هزینه ها، همراه با نگرانی های اخیر در مورد آلودگی آب و ستون های برج خنک کننده، استفاده صنعت از کندانسور را تا حد زیادی کاهش داده است. در نتیجه، زمانی که ادغام بیشتر گرما در نیروگاه امکان پذیر نباشد، معمولاً گرما را توسط مبدل های حرارتی کولر هوا مستقیماً به اتمسفر دفع می کنند و بخش زیادی از فرآیند خنک سازی در پالایشگاه ها و کارخانه های شیمیایی در این تجهیزات آموزشگاه فنی انجام می شود.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'علی عباسی',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                '/images/avatar2.jpg',
        },
    }
    // More posts...

]
export const metadata: Metadata = {title: "About"};

export default async function Page({params}: {params: Promise<{lang: string}>}) {
    const {lang} = await params
    if (!hasLocale(lang)) notFound();
    return (
        <>
            {/*<PageHeader />*/}
            <Header/>
            <Breadcrumb lang={lang}/>
            <section className="md:mx-30 mx-5 bg-transparent">
                <SectionTitle brand='MinKits Team'
                              title={lang === "en" ? " About Us" : "درباره ما"}
                              subTitle=' Simple Yet Effective Strategies for Financial Success..' marginTop={"16"}
                              lang={lang}/>
                <div className="text-base/7 text-zinc-700 text-justify mx-5">
                    <p className="text-zinc-500 leading-relaxed mb-8 justify-text">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                        semper sed amet vitae sed turpis id.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                        semper sed amet vitae sed turpis id.
                    </p>
                </div>
                <Content1 lang={lang}/>
                <div className="text-base/7 text-zinc-700 text-justify mx-5">
                    <p className="text-zinc-500 leading-relaxed mb-8 justify-text">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                        semper sed amet vitae sed turpis id.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                        semper sed amet vitae sed turpis id.
                    </p>
                    <button
                        className="w-fit rounded-lg mb-20 bg-zinc-900 px-6 py-3 text-white font-medium transition hover:bg-zinc-800">
                        Get Started
                    </button>
                </div>
            </section>
            <FooterHeader/>
        </>
    )
}