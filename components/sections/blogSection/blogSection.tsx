import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";
import BlogCard from "./blog-card";
import BlogFeaturedCard from "./blog-featured-card";

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
            imageUrl: '/images/avatar2.jpg',
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
            imageUrl: '/images/avatar2.jpg',
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
            imageUrl: '/images/avatar2.jpg',
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
            imageUrl: '/images/avatar2.jpg',
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
            imageUrl: '/images/avatar2.jpg',
        },
    }
];

type Props = {
    lang: "fa" | "en";
    dict: { title: string; subtitle: string; readMore: string; viewAll: string };
};

export default function BlogSection({lang, dict}: Props) {
    return (
        <section id="blogSection" className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20">
            <Container>
                <SectionTitle brand="MinKits Team" title={dict.title} subTitle={dict.subtitle} lang={lang}/>
                <div className="grid min-w-0 gap-4 text-justify md:grid-flow-col md:grid-cols-2 md:grid-rows-3 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2">
                    {posts.filter(post => post.id === 1).map(post => (
                        <BlogFeaturedCard key={post.id} postId={post.id} readMore={dict.readMore} lang={lang}/>
                    ))}
                    {posts.filter(post => post.id !== 1).map(post => (
                        <BlogCard key={post.id} postId={post.id} readMore={dict.readMore} lang={lang}/>
                    ))}
                </div>
            </Container>
        </section>
    );
}
