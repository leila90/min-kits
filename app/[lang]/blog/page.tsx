import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getDictionary, hasLocale} from "../../dictionaries";
import Header from "../components/header";
import FooterHeader from "../components/footerHeader";
import Breadcrumb from "@/app/[lang]/components/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/app/[lang]/components/sectionTitle";

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
export const metadata: Metadata = {title: "Blog"};

export default async function Page({params}: {params: Promise<{lang: string}>}) {
    const {lang} = await params
    if (!hasLocale(lang)) notFound();
    const dict = await getDictionary(lang);
    return (
        <>
            {/*<PageHeader />*/}
            <Header/>
            <Breadcrumb lang={lang}/>
            <section className="md:mx-30 mx-5 bg-transparent">
                <div className="w-full">
                    <section className="w-full relative overflow-hidden lg:py-16 py-8 text-justify">
                        <div className="flex flex-col md:flex-row w-full gap-8">
                            <div
                                className={`md:basis-1/4`}>
                                <ul className="tab-nav flex flex-col md:items-start items-center lg:gap-10 gap-6">
                                    <li className="w-full px-2">

                                        <form>
                                            <label htmlFor="search"
                                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div className="relative">
                                                <div
                                                    className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-body" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                              strokeWidth="2"
                                                              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                                    </svg>
                                                </div>
                                                <input type="search" id="search"
                                                       className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                                                       placeholder="Search" required/>
                                                <button type="button"
                                                        className="absolute end-1.5 bottom-1.5 text-white bg-zinc-900 hover:bg-zinc-800 border border-transparent shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5">Search
                                                </button>
                                            </div>
                                        </form>

                                    </li>

                                    <li className="w-full px-2">
                                        <div className="flex flex-col w-full rounded-md bg-zinc-900 py-5">

                                            <h3 className='text-sm text-white font-medium text-center'>
                                                Most Popular Blog Posts
                                            </h3>
                                            <div
                                                className='h-px m-5 bg-linear-to-r from-white/10 via-white/80 to-white/10'></div>

                                            <div className="p-2">

                                                <Link href="#"
                                                      className="flex flex-col items-center hover:bg-white/10 rounded-md md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
                                                    <Image
                                                        className="object-cover w-full rounded-base h-20 md:h-auto md:w-20 rounded-md ml-2"
                                                        src="/images/blog/1.jpg" alt=""
                                                        width={100}
                                                        height={100}/>
                                                    <div
                                                        className="flex flex-col justify-between md:p-4 leading-normal">
                                                        <h5 className="text-xs text-white font-normal line-clamp-2">
                                                            Streamlining your design process today.
                                                        </h5>
                                                    </div>
                                                </Link>

                                                <Link href="#"
                                                      className="flex flex-col items-center hover:bg-white/10 rounded-md md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
                                                    <Image
                                                        className="object-cover w-full rounded-base h-20 md:h-auto md:w-20 rounded-md ml-2"
                                                        src="/images/blog/2.jpg" alt=""
                                                        width={100}
                                                        height={100}/>
                                                    <div
                                                        className="flex flex-col justify-between md:p-4">
                                                        <h5 className="text-xs text-white font-normal line-clamp-2">
                                                            How to quickly deploy a static website.
                                                        </h5>
                                                    </div>
                                                </Link>

                                                <Link href="#"
                                                      className="flex flex-col items-center hover:bg-white/10 rounded-md md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
                                                    <Image
                                                        className="object-cover w-full rounded-base h-20 md:h-auto md:w-20 rounded-md ml-2"
                                                        src="/images/blog/3.jpg" alt=""
                                                        width={100}
                                                        height={100}/>
                                                    <div
                                                        className="flex flex-col justify-between md:p-4">
                                                        <h5 className="text-xs text-white font-normal line-clamp-2">
                                                            Streamlining your design process today.
                                                        </h5>
                                                    </div>
                                                </Link>


                                                <Link href="#"
                                                      className="flex flex-col items-center hover:bg-white/10 rounded-md md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
                                                    <Image
                                                        className="object-cover w-full rounded-base h-20 md:h-auto md:w-20 rounded-md ml-2"
                                                        src="/images/blog/1.jpg" alt=""
                                                        width={100}
                                                        height={100}/>
                                                    <div
                                                        className="flex flex-col justify-between md:p-4 leading-normal">
                                                        <h5 className="text-xs text-white font-normal line-clamp-2">
                                                            Streamlining your design process today.
                                                        </h5>
                                                    </div>
                                                </Link>

                                                <Link href="#"
                                                      className="flex flex-col items-center hover:bg-white/10 rounded-md md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
                                                    <Image
                                                        className="object-cover w-full rounded-base h-20 md:h-auto md:w-20 rounded-md ml-2"
                                                        src="/images/blog/2.jpg" alt=""
                                                        width={100}
                                                        height={100}/>
                                                    <div
                                                        className="flex flex-col justify-between md:p-4">
                                                        <h5 className="text-xs text-white font-normal line-clamp-2">
                                                            How to quickly deploy a static website.
                                                        </h5>
                                                    </div>
                                                </Link>

                                                <Link href="#"
                                                      className="flex flex-col items-center hover:bg-white/10 rounded-md md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
                                                    <Image
                                                        className="object-cover w-full rounded-base h-20 md:h-auto md:w-20 rounded-md ml-2"
                                                        src="/images/blog/3.jpg" alt=""
                                                        width={100}
                                                        height={100}/>
                                                    <div
                                                        className="flex flex-col justify-between md:p-4">
                                                        <h5 className="text-xs text-white font-normal line-clamp-2">
                                                            Streamlining your design process today.
                                                        </h5>
                                                    </div>
                                                </Link>

                                                <div
                                                    className='h-px m-5 bg-linear-to-r from-white/10 via-white/80 to-white/10'></div>
                                                <h3 className='text-xs text-white font-medium text-center mb-5'>
                                                    Follow me in socials:
                                                </h3>
                                                <div className="flex justify-center gap-5">
                            <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                            </span>
                                                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 512">
                                    <path
                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                </svg>
                            </span>
                                                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                            </span>
                                                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                                </svg>
                            </span>
                                                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#fff]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                </svg>
                            </span>


                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="flex flex-col basis-3/4">
                                <SectionTitle brand='MinKits Team'
                                              title={lang === "en" ? " Latest On The Blog" : "آخرین مطالب وبلاگ"}
                                              subTitle='We use an agile approach to
                        test assumptions and connect with the needs of your audience early and often.' marginTop={"0"}
                                              lang={lang}/>

                               {posts.map(post => (
                                        <div key={post.id} className={`flex bg-zinc-100 rounded-md py-5 px-2 flex-col lg:flex-row lg:basis-1/6 md:1/2 my-5`}>
                                            <div className="flex basis-1/3 justify-center items-center">
                                                <Image
                                                    className="rounded-md w-full"
                                                    src={post.imageUrl} alt=""
                                                    width={100}
                                                    height={100}/>
                                            </div>

                                            <div
                                                className=" basis-2/3 mx-6 mb-5 dark:bg-zinc-800 dark:border-zinc-700">
                                                <div className="flex justify-between items-center mb-5 text-zinc-900">
                                                    <div className="col-span-2">
                                                        <div className="relative flex items-center gap-x-4">
                                                            {/*<Image src="/images/avatar2.jpg" alt={""} width={10} height={10}*/}
                                                            {/*       className="size-10 rounded-full bg-zinc-50"/>*/}
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
                                                <h3 className={`mb-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white ${lang === "fa" ? "border-r-10 pr-2" : "border-l-10 pl-2" } border-gray-900`}>
                                                    <Link
                                                        href="#">How to quickly deploy a static website</Link></h3>
                                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-2">
                                                    Static
                                                    websites are
                                                    now used
                                                    to
                                                    bootstrap lots of websites and are becoming the basis for a variety of tools
                                                    that even
                                                    influence both web designers and developers influence both web designers and
                                                    developers.
                                                </p>
                                                <div className="flex justify-end items-center">
                                                    <Link href={'/blog/'+post.id}
                                                       className="inline-flex text-sm items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                                        Read more
                                                        <svg className={`${lang === "fa" ? "mr-2 rotate-180" : "ml-2" } w-4 h-4`} fill="currentColor" viewBox="0 0 20 20"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd"
                                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                  clipRule="evenodd"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <FooterHeader/>
        </>
    )
}