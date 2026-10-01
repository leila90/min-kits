import Image from "next/image";
import Link from "next/link";
import type { Messages } from "@/app/i18n/messages";
import SectionTitle from "@/components/common/sectionTitle";

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
    }
    // More posts...

]
type props = { lang: "fa" | "en"; dict: Messages["blog"] }
export default function FormBlog({lang, dict}: props  ) {
    return (
        <section id={"blog"} className="md:my-10 md:mx-30 my-5 mx-5 ">

            <SectionTitle brand='MinKits' title={dict.title} subTitle={dict.subtitle} lang={lang}/>
            {/*<div className="text-center" dir={"rtl"}>*/}
            {/*    <p className="lg:mt-10 md:mt-10 mt-20 text-sm text-zinc-700">*/}
            {/*        همراه با مجله دات وان، همیشه به روز باشید.*/}
            {/*    </p>*/}
            {/*</div>*/}

            <div
                className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
                {posts.map((post) => (
                    <article key={post.id}
                             className={`flex max-w-xl flex-col items-start justify-between ${lang === "fa" ? "pr-5 border-r" : "pl-5 border-l"} border-black`}>
                        <Image src={post.imageUrl} alt={""} width={200} height={200}
                               className="w-full rounded-xl bg-zinc-50"/>

                        <div className="w-full mt-4 grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                                <div className="relative flex items-center gap-x-4">
                                    <Image src={post.author.imageUrl} alt={""} width={10} height={10}
                                           className="size-10 rounded-full bg-zinc-50"/>
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-zinc-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0"/>
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-zinc-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex items-center ${lang === "fa" ? "justify-end" : "justify-start"} text-xs`}>
                                <time dateTime={post.datetime} className="text-zinc-500">
                                    {post.date}
                                </time>
                            </div>
                        </div>
                        {/*<div className="flex items-center gap-x-4 text-xs">*/}
                        {/*    <time dateTime={post.datetime} className="text-zinc-500">*/}
                        {/*        {post.date}*/}
                        {/*    </time>*/}
                        {/*    <a*/}
                        {/*        href={post.category.href}*/}
                        {/*        className="relative z-10 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-zinc-600 hover:bg-zinc-100"*/}
                        {/*    >*/}
                        {/*        {post.category.title}*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        <div className="group relative">
                            <h3 className={`mt-3 font-semibold text-zinc-900 ${lang === "fa" ? "border-r-4 pr-2" : "border-l-4 pl-2"} border-black`}>
                                <a href={post.href}>
                                    <span className="absolute inset-0"/>
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm/6 text-zinc-600 text-justify">{post.description}</p>
                        </div>
                        <div className="w-full mt-8 grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                {/*<div className="relative flex items-center gap-x-4">*/}
                                {/*    <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-zinc-50"/>*/}
                                {/*    <div className="text-sm/6">*/}
                                {/*        <p className="font-semibold text-zinc-900">*/}
                                {/*            <a href={post.author.href}>*/}
                                {/*                <span className="absolute inset-0"/>*/}
                                {/*                {post.author.name}*/}
                                {/*            </a>*/}
                                {/*        </p>*/}
                                {/*        <p className="text-zinc-600">{post.author.role}</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <div className="flex items-center justify-end">
                                <Link href={`/${lang}/blog`}
                                      className="text-xs text-white border-black border rounded-md p-2 cursor-pointer bg-black hover:bg-white hover:text-black">{dict.readMore}</Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="flex items-center justify-end pt-15">
                <Link href={`/${lang}/blog`}
                      className="text-sm text-white border-zinc-900 border rounded-md p-2 cursor-pointer bg-zinc-900 hover:bg-gray-700">{dict.viewAll}</Link>
            </div>

        </section>
    )
}