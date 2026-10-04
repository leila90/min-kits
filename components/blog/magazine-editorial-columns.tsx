import Image from "next/image";

type Props = {
    lang: "fa" | "en";
    description: string;
};

const editorialCopy = {
    en: {
        byline: "By MinKits Editorial",
        photography: "Photography: MinKits",
        quote: "Good interfaces use proportion, rhythm, and hierarchy to guide attention.",
        footerLeft: "Arts & Letters",
        footerRight: "The Editorial Review",
        page: "Page 14 of 48",
        imageAlt: "MinKits editorial illustration",
        intro:
            "Good interface design is not only about individual elements. Proportion, rhythm, spacing, and typography work together to create a page that feels balanced and easy to follow.",
        col1:
            "Reusable components give designers and developers a consistent visual vocabulary. Clear spacing and deliberate proportions help readers understand relationships between sections without having to decode every element independently.",
        col2:
            "Typography adds another layer of hierarchy. Size, weight, and line length create a path through the content, while generous whitespace gives important ideas room to breathe. The result is an interface that feels considered rather than crowded.",
    },
    fa: {
        byline: "نوشته تحریریه MinKits",
        photography: "تصویر: MinKits",
        quote: "رابط‌های خوب با استفاده از تناسب، ریتم و سلسله‌مراتب، توجه کاربر را هدایت می‌کنند.",
        footerLeft: "هنر و نوشته",
        footerRight: "مرور تحریریه",
        page: "صفحه ۱۴ از ۴۸",
        imageAlt: "تصویر تحریریه MinKits",
        intro:
            "طراحی خوب رابط کاربری فقط به عناصر جداگانه محدود نمی‌شود. تناسب، ریتم، فاصله‌گذاری و تایپوگرافی در کنار هم صفحه‌ای متعادل و قابل دنبال‌کردن می‌سازند.",
        col1:
            "کامپوننت‌های قابل استفاده مجدد، زبان بصری یکپارچه‌ای در اختیار طراحان و توسعه‌دهندگان قرار می‌دهند. فاصله‌گذاری روشن و تناسب‌های حساب‌شده کمک می‌کنند کاربر رابطه میان بخش‌های مختلف را بدون سردرگمی درک کند.",
        col2:
            "تایپوگرافی نیز لایه دیگری از سلسله‌مراتب را ایجاد می‌کند. اندازه، وزن و طول خطوط مسیر حرکت چشم را مشخص می‌کنند و فضای خالی کافی باعث می‌شود ایده‌های مهم فرصت دیده‌شدن داشته باشند. نتیجه، رابطی سنجیده و خلوت است.",
    },
} as const;

export function MagazineEditorialColumns({lang, description}: Props) {
    const copy = editorialCopy[lang];

    return (
        <section dir={lang === "fa" ? "rtl" : "ltr"} className="mb-16 bg-white">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="relative mb-8 overflow-hidden">
                    <div className="relative">
                        <p className="mt-3 font-sans text-sm text-neutral-500">
                            {copy.byline} &nbsp;·&nbsp; {copy.photography}
                        </p>
                    </div>
                </div>

                <figure className="max-w-full mx-auto text-center pb-10 px-20">
                    <svg className="w-11 h-11 text-heading mb-4 mx-auto" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>
                    </svg>
                    <blockquote>
                        <p className="text-2xl italic font-semibold tracking-tight text-heading">
                            {description} {copy.intro}
                        </p>
                    </blockquote>
                </figure>

                <div className="mb-8 py-2">
                    <div className="flex flex-col">
                            <p>{copy.col1}</p>
                            <div className="flex items-center justify-center px-4 py-6 sm:px-10">
                                <Image
                                    src="/images/about11.jpg"
                                    alt={copy.imageAlt}
                                    className="pointer-events-none h-auto w-full max-w-[400px]"
                                    width={400}
                                    height={200}
                                />
                            </div>
                        <p>{copy.col2}</p>
                    </div>
                </div>

                <div className="mt-10 border-t border-neutral-200 pt-4 font-sans">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                        <span className="tracking-widest uppercase">{copy.footerLeft}</span>
                        <span>{copy.page}</span>
                        <span className="tracking-widest uppercase">{copy.footerRight}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
