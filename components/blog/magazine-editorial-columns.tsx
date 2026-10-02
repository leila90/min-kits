import Image from "next/image";

type Props = {
    lang: "fa" | "en";
    title: string;
    description: string;
};

const editorialCopy = {
    en: {
        masthead: "The Editorial Review",
        season: "Spring 2026",
        label: "Essay",
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
        masthead: "مرور تحریریه",
        season: "بهار ۲۰۲۶",
        label: "مقاله",
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

export function MagazineEditorialColumns({lang, title, description}: Props) {
    const copy = editorialCopy[lang];

    return (
        <section dir={lang === "fa" ? "rtl" : "ltr"} className="mb-16 bg-white py-16">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between border-y border-black py-2">
                    <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase">
                        {copy.masthead}
                    </span>
                    <span className="font-sans text-xs tracking-widest text-neutral-500 uppercase">
                        {copy.season}
                    </span>
                </div>

                <div className="relative mb-8 overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 flex items-end select-none" aria-hidden="true">
                        <span className="block font-sans text-[clamp(4rem,15vw,10rem)] leading-none font-black tracking-tighter text-black/[0.05]">
                            MinKits
                        </span>
                    </div>

                    <div className="relative">
                        <h2 className="mb-2 font-sans text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase">
                            {copy.label}
                        </h2>
                        <h1 className="font-serif text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] font-bold text-black">
                            {title}
                        </h1>
                        <p className="mt-3 font-sans text-sm text-neutral-500">
                            {copy.byline} &nbsp;·&nbsp; {copy.photography}
                        </p>
                    </div>
                </div>

                <div className="mb-8 border-t-4 border-black" />

                <div className="mb-8 font-serif text-lg leading-relaxed text-neutral-800 text-justify">
                    <span className={(lang === "fa" ? "float-right ml-2" : "float-left mr-2") + " mt-1 font-serif text-[4.5rem] leading-[0.75] font-black text-black"}>
                        {lang === "fa" ? "ر" : "G"}
                    </span>
                    {description} {copy.intro}
                </div>

                <div className="mb-8 border-t-2 border-black py-2">
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-1/2 px-5 text-justify">
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
                        </div>
                        <div className="basis-1/2 px-5 text-justify">
                            <p>{copy.col2}</p>
                        </div>
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
