import SectionTitle from "@/components/common/sectionTitle";
import Image from "next/image";
import Container from "@/components/ui/container";

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
type Props = { lang: "fa" | "en"; dict: { title: string; subtitle: string; readMore: string; viewAll: string } }

export default function BlogSection({lang, dict}: Props) {
    return (
        <section id="blogSection" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <SectionTitle brand="MinKits Team" title={dict.title} subTitle={dict.subtitle} lang={lang}/>
                <div
                className="grid min-w-0 gap-4 text-justify lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
                {posts
                    .filter(post => post.id === 1)
                    .map(post => (<div key={post.id}
                                       className="min-w-0 bg-zinc-800 rounded-2xl py-5 row-span-2 lg:basis-2/6">
                            <div
                                className="mx-6 mb-5 min-w-0 dark:bg-zinc-800 dark:border-zinc-700">
                                <div className="flex min-w-0 justify-between items-center mb-5 text-zinc-100">
                                    <div className="col-span-2">
                                        <div className="relative flex min-w-0 items-center gap-x-4">
                                            <Image src="/images/avatar2.jpg" alt={""} width={10} height={10}
                                                   className="size-10 rounded-full bg-zinc-50"/>
                                            <div className="min-w-0 text-sm/6">
                                                <p className="font-semibold text-zinc-100">
                                                    <a href={""}>
                                                        <span className="absolute inset-0"/>
                                                        Jese Leos
                                                    </a>
                                                </p>
                                                {/*<p className="text-zinc-100">Co-Founder / CTO</p>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex items-center ${lang === "fa" ? "justify-end" : "justify-start"} text-xs`}>
                                        <time dateTime={"2020-03-16"} className="text-white">
                                            {"Mar 16, 2020"}
                                        </time>
                                    </div>
                                </div>
                                <Image width={200} height={200} alt={"blog"} src="/images/blog/blog.png"
                                       className="rounded-2xl my-5 w-full"/>
                                <h2 className={`mb-2 text-2xl font-bold tracking-tight text-white dark:text-white ${lang === "fa" ? "border-r-10 pr-2" : "border-l-10 pl-2" } border-white`}>
                                    <a
                                        href="#">How to quickly deploy a static website</a></h2>
                                <p className="mb-5 font-light text-zinc-100 dark:text-zinc-100">Static websites are now
                                    used
                                    to
                                    bootstrap lots of websites and are becoming the basis for a variety of tools that
                                    even
                                    influence both web designers and developers influence both web designers and
                                    developers.</p>
                                <div className="flex justify-end items-center">
                                    <a href="#"
                                       className="inline-flex items-center font-medium  text-white dark:text-primary-500 hover:underline">
                                        {dict.readMore}
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                {posts
                    .filter(post => post.id !== 1)
                    .map(post => (
                        <div key={post.id} className={`min-w-0 lg:basis-1/6 ${lang === "fa" ? "border-r" : "border-l"} border-zinc-900/20 my-5`}>
                            <div
                                className="mx-6 mb-5  dark:bg-zinc-800 dark:border-zinc-700">
                                <div className="flex min-w-0 justify-between items-center mb-5 text-zinc-900">
                                    <div className="col-span-2">
                                        <div className="relative flex items-center gap-x-4">
                                            <Image src="/images/avatar2.jpg" alt={""} width={10} height={10}
                                                   className="size-10 rounded-full bg-zinc-50"/>
                                            <div className="text-sm/6">
                                                <p className="font-semibold text-zinc-900">
                                                    <a href={""}>
                                                        <span className="absolute inset-0"/>
                                                        Jese Leos
                                                    </a>
                                                </p>
                                                {/*<p className="text-zinc-100">Co-Founder / CTO</p>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex items-center ${lang === "fa" ? "justify-end" : "justify-start"} text-xs`}>
                                        <time dateTime={"2020-03-16"} className="text-zinc-900">
                                            {"Mar 16, 2020"}
                                        </time>
                                    </div>
                                </div>
                                <h2 className={`mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white ${lang === "fa" ? "border-r-10 pr-2" : "border-l-10 pl-2" } border-gray-900`}>
                                    <a
                                        href="#">How to quickly deploy a static website</a></h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-3">Static
                                    websites are
                                    now used
                                    to
                                    bootstrap lots of websites and are becoming the basis for a variety of tools
                                    that even
                                    influence both web designers and developers influence both web designers and
                                    developers.</p>
                                <div className="flex justify-end items-center">
                                    <a href="#"
                                       className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        {dict.readMore}
                                        <svg className={`${lang === "fa" ? "mr-2 rotate-180" : "ml-2" } w-4 h-4`} fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}