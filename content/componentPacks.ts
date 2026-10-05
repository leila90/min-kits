export type ComponentPack = {
    slug: string;
    category: string;
    name: string;
    description: string;
    price: string;
    status: "early-access" | "available";
    image: string;
    stats: Array<{label: string; value: string}>;
    features: string[];
    includes: string[];
};

export const componentPacks: Record<"en" | "fa", ComponentPack[]> = {
    en: [
        {
            slug: "saas-marketing-pack",
            category: "Marketing",
            name: "SaaS Marketing Pack",
            description: "A focused collection of production-ready landing sections for SaaS products, developer tools, and modern startup websites.",
            price: "$29",
            status: "early-access",
            image: "/images/blog/2.jpg",
            stats: [
                {label: "Blocks", value: "18"},
                {label: "Responsive", value: "100%"},
                {label: "Stack", value: "React + Tailwind"}
            ],
            features: [
                "18 responsive sections",
                "Light and dark surface variants",
                "RTL-ready structure",
                "Typed React source code",
                "Tailwind CSS v4 classes",
                "No runtime dependency on MinKits"
            ],
            includes: [
                "Hero sections",
                "Logo clouds",
                "Feature grids",
                "Pricing tables",
                "Testimonials",
                "FAQ sections",
                "CTA sections",
                "Footer variants"
            ]
        }
    ],
    fa: [
        {
            slug: "saas-marketing-pack",
            category: "مارکتینگ",
            name: "پک مارکتینگ SaaS",
            description: "مجموعه‌ای متمرکز از سکشن‌های آماده تولید برای محصولات SaaS، ابزارهای توسعه‌دهندگان و وب‌سایت‌های استارتاپی مدرن.",
            price: "۲۹ دلار",
            status: "early-access",
            image: "/images/blog/2.jpg",
            stats: [
                {label: "بلاک", value: "۱۸"},
                {label: "واکنش‌گرا", value: "۱۰۰٪"},
                {label: "استک", value: "React + Tailwind"}
            ],
            features: [
                "۱۸ سکشن واکنش‌گرا",
                "واریانت‌های سطح روشن و تیره",
                "ساختار آماده RTL",
                "کد منبع Typed React",
                "کلاس‌های Tailwind CSS v4",
                "بدون وابستگی runtime به MinKits"
            ],
            includes: [
                "سکشن Hero",
                "نمایش لوگوها",
                "شبکه قابلیت‌ها",
                "جداول قیمت‌گذاری",
                "Testimonials",
                "سکشن FAQ",
                "سکشن‌های CTA",
                "واریانت‌های Footer"
            ]
        }
    ]
};

export function getComponentPacks(lang: "en" | "fa") {
    return componentPacks[lang];
}

export function getComponentPack(lang: "en" | "fa", slug: string) {
    return componentPacks[lang].find((pack) => pack.slug === slug);
}
