export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lastModified: string;
  category: string;
  image: string;
  author: string;
  content: string[];
};

const en = {
  site: {
    name: "MinKits",
    url: "https://minkits.com",
    description: "Production-ready UI components and kits for React, Next.js and Tailwind.",
  },
  navigation: {
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
  },
  home: {
    heroEyebrow: "Production-ready UI kits for developers",
    heroTitle: "Ship production-ready UI faster with MinKits",
    heroDescription: "Reusable React, Next.js and Tailwind components built to help developers ship faster, cleaner and more consistent products.",
    heroPrimary: "Explore kits",
    heroSecondary: "View components",
    slogan: "Simplicity is the power.",
    aboutTitle: "About MinKits",
    aboutSubtitle: "Simple, reusable building blocks for modern web products.",
    aboutText: "MinKits is a growing collection of practical UI components and sections for developers who want a clean starting point without unnecessary complexity. The goal is simple: reusable source code that you can understand, adapt and ship.",
    aboutBullets: ["Readable, adaptable source code", "Modern React and Next.js", "Simple reusable patterns"],
    featuresTitle: "Why MinKits?",
    featuresSubtitle: "Build faster, stay consistent, and keep control of your code.",
    features: [
      { title: "Build faster", description: "Start from reusable patterns instead of rebuilding common UI from scratch.", icon: "/images/icons/featuresIcons/technology-integrated-circuits.svg" },
      { title: "Production ready", description: "Components are designed around real Next.js, React and Tailwind projects.", icon: "/images/icons/featuresIcons/command-window-line.svg" },
      { title: "Clean & consistent", description: "Keep your interface coherent while retaining full control over the source code.", icon: "/images/icons/featuresIcons/developer.svg" },
    ],
    blogTitle: "From the MinKits blog",
    blogSubtitle: "Practical notes about UI architecture, Next.js and frontend performance.",
    contactTitle: "Let's build something useful",
    contactSubtitle: "Have a question or an idea for a component? Send a message.",
    contactForm: { name: "Name", email: "Email", message: "Message", submit: "Send message" },
  },
  about: {
    title: "About MinKits",
    subtitle: "A simple source-code-first approach to reusable UI.",
    paragraphs: [
      "MinKits exists to make the repetitive parts of frontend development easier without hiding the implementation behind a black box.",
      "The project focuses on readable React and Next.js source code, sensible Tailwind styling, accessibility and performance. Components should be useful on their own and easy to adapt to a real product.",
    ],
    principlesTitle: "Our principles",
    principles: [
      "Readable source code",
      "Reusable components",
      "Modern Next.js architecture",
      "Performance and accessibility",
    ],
  },
  blog: {
    title: "MinKits Blog",
    description: "Practical articles about reusable UI, Next.js architecture and frontend performance.",
    empty: "No posts published yet.",
    readMore: "Read article",
  },
  footer: {
    description: "Production-ready UI components and kits for modern React and Next.js projects.",
    links: "Explore",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    copyright: "© 2026 MinKits. All rights reserved.",
  },
};

const fa = {
  site: {
    name: "MinKits",
    url: "https://minkits.com",
    description: "کامپوننت‌ها و کیت‌های آماده برای React، Next.js و Tailwind.",
  },
  navigation: {
    home: "خانه",
    about: "درباره ما",
    blog: "بلاگ",
    contact: "تماس با ما",
  },
  home: {
    heroEyebrow: "کیت‌های آماده برای توسعه‌دهندگان",
    heroTitle: "با MinKits رابط کاربری آماده تولید را سریع‌تر بسازید",
    heroDescription: "کامپوننت‌های قابل استفاده مجدد برای React، Next.js و Tailwind؛ برای توسعه سریع‌تر، تمیزتر و یکپارچه‌تر.",
    heroPrimary: "مشاهده کیت‌ها",
    heroSecondary: "مشاهده کامپوننت‌ها",
    slogan: "سادگی، قدرت است.",
    aboutTitle: "درباره MinKits",
    aboutSubtitle: "بلوک‌های ساده و قابل استفاده مجدد برای محصولات مدرن وب.",
    aboutText: "MinKits مجموعه‌ای از کامپوننت‌ها و سکشن‌های کاربردی برای توسعه‌دهندگانی است که یک نقطه شروع تمیز و بدون پیچیدگی اضافی می‌خواهند. هدف ساده است: کد قابل فهم، قابل تغییر و آماده استفاده.",
    aboutBullets: ["سورس‌کد خوانا و قابل تغییر", "تمرکز بر React و Next.js مدرن", "طراحی ساده و قابل استفاده مجدد"],
    featuresTitle: "چرا MinKits؟",
    featuresSubtitle: "سریع‌تر بسازید، یکپارچگی را حفظ کنید و کنترل کد را در دست داشته باشید.",
    features: [
      { title: "توسعه سریع‌تر", description: "به‌جای ساخت دوباره رابط‌های رایج، از الگوهای قابل استفاده مجدد شروع کنید.", icon: "/images/icons/featuresIcons/technology-integrated-circuits.svg" },
      { title: "آماده استفاده", description: "کامپوننت‌ها بر پایه پروژه‌های واقعی Next.js، React و Tailwind طراحی شده‌اند.", icon: "/images/icons/featuresIcons/command-window-line.svg" },
      { title: "تمیز و یکپارچه", description: "رابط کاربری منسجم داشته باشید و در عین حال کنترل کامل سورس‌کد را حفظ کنید.", icon: "/images/icons/featuresIcons/developer.svg" },
    ],
    blogTitle: "از بلاگ MinKits",
    blogSubtitle: "یادداشت‌های کاربردی درباره معماری UI، Next.js و بهینه‌سازی فرانت‌اند.",
    contactTitle: "بیایید چیزی کاربردی بسازیم",
    contactSubtitle: "سؤال یا ایده‌ای برای یک کامپوننت دارید؟ پیام بفرستید.",
    contactForm: { name: "نام", email: "ایمیل", message: "پیام", submit: "ارسال پیام" },
  },
  about: {
    title: "درباره MinKits",
    subtitle: "رویکردی ساده و مبتنی بر سورس‌کد برای رابط‌های قابل استفاده مجدد.",
    paragraphs: [
      "هدف MinKits ساده‌تر کردن بخش‌های تکراری توسعه فرانت‌اند است؛ بدون اینکه پیاده‌سازی را پشت یک جعبه سیاه پنهان کند.",
      "تمرکز پروژه روی کد خوانا در React و Next.js، استایل منطقی با Tailwind، دسترس‌پذیری و عملکرد مناسب است. هر کامپوننت باید به‌تنهایی مفید و برای یک محصول واقعی قابل تغییر باشد.",
    ],
    principlesTitle: "اصول ما",
    principles: [
      "سورس‌کد خوانا",
      "کامپوننت‌های قابل استفاده مجدد",
      "معماری مدرن Next.js",
      "عملکرد و دسترس‌پذیری",
    ],
  },
  blog: {
    title: "بلاگ MinKits",
    description: "مطالب کاربردی درباره UI قابل استفاده مجدد، معماری Next.js و عملکرد فرانت‌اند.",
    empty: "هنوز مطلبی منتشر نشده است.",
    readMore: "ادامه مطلب",
  },
  footer: {
    description: "کامپوننت‌ها و کیت‌های آماده برای پروژه‌های مدرن React و Next.js.",
    links: "دسترسی سریع",
    legal: "قوانین",
    privacy: "حریم خصوصی",
    terms: "شرایط استفاده",
    copyright: "© ۲۰۲۶ MinKits. تمامی حقوق محفوظ است.",
  },
};

const posts = {
  en: [
    {
      slug: "building-reusable-ui-components",
      title: "Building reusable UI components without over-engineering",
      excerpt: "A practical approach to deciding what should become a component and what should stay local.",
      date: "2026-09-20",
      lastModified: "2026-09-20",
      category: "UI Architecture",
      image: "/images/blog/1.png",
      author: "MinKits",
      content: [
        "Good component architecture starts with reuse that is real, not reuse that is imagined. Extract a component when a pattern has a clear API and appears in more than one meaningful place.",
        "Keep page-specific markup local when extracting it would only add indirection. A small component tree is usually easier to maintain than a directory full of one-off wrappers.",
      ],
    },
    {
      slug: "nextjs-content-layer-before-api",
      title: "Why a local content layer is a useful step before an API",
      excerpt: "Keep content separate from presentation today so an API can replace the source later.",
      date: "2026-09-18",
      lastModified: "2026-09-18",
      category: "Next.js",
      image: "/images/blog/2.png",
      author: "MinKits",
      content: [
        "A typed local content module gives a project a stable contract between data and UI. Pages can consume that contract without caring whether the data comes from a TypeScript object, a database or an API.",
        "This makes a future migration smaller: replace the content provider instead of rewriting every page and component that renders the content.",
      ],
    },
    {
      slug: "nextjs-performance-basics",
      title: "Next.js performance basics for a component library",
      excerpt: "A few architecture decisions that keep a growing UI site fast and maintainable.",
      date: "2026-09-15",
      lastModified: "2026-09-15",
      category: "Performance",
      image: "/images/blog/3.png",
      author: "MinKits",
      content: [
        "Prefer Server Components for static content and move only interactive behavior to Client Components. This keeps the client bundle focused on actual interaction.",
        "Optimize images, avoid duplicate layout rendering, and keep metadata and sitemap generation based on the same content source used by the pages.",
      ],
    },
  ] satisfies BlogPost[],
  fa: [
    {
      slug: "building-reusable-ui-components",
      title: "ساخت کامپوننت‌های UI قابل استفاده مجدد بدون پیچیده‌سازی",
      excerpt: "یک روش عملی برای تشخیص اینکه چه بخشی باید کامپوننت شود و چه بخشی بهتر است محلی بماند.",
      date: "2026-09-20",
      lastModified: "2026-09-20",
      category: "معماری UI",
      image: "/images/blog/1.png",
      author: "MinKits",
      content: [
        "معماری خوب کامپوننت از استفاده مجدد واقعی شروع می‌شود، نه از حدس زدن نیازهای آینده. وقتی یک الگو واقعاً در چند جای مهم تکرار می‌شود و API مشخصی دارد، استخراج آن به کامپوننت منطقی است.",
        "اگر یک بخش فقط مخصوص یک صفحه است، محلی نگه‌داشتن آن معمولاً خوانایی بیشتری دارد و از ایجاد wrapperهای یک‌بارمصرف جلوگیری می‌کند.",
      ],
    },
    {
      slug: "nextjs-content-layer-before-api",
      title: "چرا قبل از API داشتن یک لایه محتوای محلی مفید است",
      excerpt: "امروز محتوا را از UI جدا کنید تا بعداً بتوانید منبع آن را با API جایگزین کنید.",
      date: "2026-09-18",
      lastModified: "2026-09-18",
      category: "Next.js",
      image: "/images/blog/2.png",
      author: "MinKits",
      content: [
        "یک ماژول محتوای تایپ‌شده، قرارداد پایداری بین داده و UI ایجاد می‌کند. صفحات لازم نیست بدانند داده از فایل TypeScript می‌آید یا دیتابیس و API.",
        "در نتیجه مهاجرت آینده کوچک‌تر می‌شود: فقط provider محتوا را تغییر می‌دهید، نه تمام صفحه‌ها و کامپوننت‌هایی که محتوا را نمایش می‌دهند.",
      ],
    },
    {
      slug: "nextjs-performance-basics",
      title: "اصول عملکرد Next.js برای یک کتابخانه کامپوننت",
      excerpt: "چند تصمیم معماری که یک سایت UI در حال رشد را سریع و قابل نگهداری نگه می‌دارد.",
      date: "2026-09-15",
      lastModified: "2026-09-15",
      category: "Performance",
      image: "/images/blog/3.png",
      author: "MinKits",
      content: [
        "برای محتوای ثابت تا جای ممکن از Server Component استفاده کنید و فقط رفتار تعاملی را به Client Component منتقل کنید.",
        "تصاویر را بهینه کنید، از رندر دوباره layout جلوگیری کنید و metadata و sitemap را از همان منبع محتوایی تولید کنید که صفحات استفاده می‌کنند.",
      ],
    },
  ] satisfies BlogPost[],
};

export type SiteContent = typeof en;

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getContent(locale: Locale): SiteContent {
  return locale === "fa" ? fa : en;
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return posts[locale];
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | undefined {
  return posts[locale].find((post) => post.slug === slug);
}
