import type { Lang } from "./config";

export type Messages = typeof messages.en;

export const messages = {
  en: {
    nav: { home: "Home", about: "About Us", blog: "Blog", componentPacks: "Component Packs", companies: "Group Companies", contact: "Contact Us", careers: "Career Opportunities" },
    hero: { eyebrow: "Production-ready UI kits for developers", title: "Ship production-ready UI faster with", description: "Premium React, Next.js and Tailwind UI kits built to help developers ship faster, cleaner and better products.", explore: "Explore Kits", components: "View Components" },
    slogan: { text: "We are here to create new ideas together and move forward faster than ever with innovation; because we believe:", value: "simplicity is the power." },
    about: { title: "About Us", subtitle: "Simple tools, thoughtful interfaces, and production-ready code.", intro: "MinKits is a growing collection of practical UI components and kits for developers who want to build polished products without starting every interface from scratch.", items: [{ title: "Build with confidence", text: "Reusable components help teams move from idea to implementation with less repetition." }, { title: "Keep interfaces consistent", text: "Clear patterns and focused components make design systems easier to maintain." }, { title: "Ship faster", text: "Start from production-ready building blocks and spend more time on product decisions." }], cta: "Get Started" },
    featuredComponents: { title: "Featured components", subtitle: "Start with focused building blocks that are ready to explore and reuse.", viewAll: "Browse all components" },
    features: { title: "Why MinKits?", subtitle: "Build faster, stay consistent, and focus on creating better products.", items: [{ title: "Build Faster", desc: "Skip repetitive UI work and spend more time building the features your users need." }, { title: "Production Ready", desc: "Professionally crafted components built for real-world projects and scalable applications." }, { title: "Clean & Consistent", desc: "Keep your design system unified and deliver a more polished user experience." }] },
    componentStore: { title: "Component Store", subtitle: "Reusable UI building blocks, packaged for your next project.", badge: "Coming soon", intro: "Build your interface faster with focused component collections and complete UI kits.", cta: "Request early access", products: [{ title: "Component Packs", description: "Focused collections for common interface patterns and product screens.", badge: "Coming soon", action: "View collection", href: "/components/component-packs", features: ["Reusable source code", "React & Tailwind ready", "Built for real projects"] }, { title: "Page Kits", description: "Complete page sections that help you move from layout to implementation faster.", badge: "Coming soon", action: "View collection", href: "/components/page-kits", features: ["Responsive layouts", "Consistent design patterns", "Easy to customize"] }, { title: "UI Kits", description: "Larger collections for teams that want a consistent starting point across a product.", badge: "Coming soon", action: "View collection", href: "/components/ui-kits", features: ["Systematic components", "Production-focused structure", "Designed to scale"] }] },
    componentPacks: {
      eyebrow: "Component Packs",
      title: "Build faster with production-ready blocks.",
      subtitle: "A focused collection of reusable interface blocks for dashboards, SaaS products, marketing pages, and real-world product flows.",
      back: "Back to component store",
      browse: "Browse packs",
      viewPack: "View pack",
      badge: "Coming soon",
      stats: [{ value: "24+", label: "UI blocks" }, { value: "React", label: "Source code" }, { value: "Tailwind", label: "Styling" }],
      categories: ["All blocks", "Marketing", "Dashboard", "Application"],
      blocks: [
        { title: "Hero Sections", description: "Flexible hero compositions for product launches, SaaS pages, and focused landing experiences.", tag: "Marketing", number: "01" },
        { title: "Feature Grids", description: "Structured feature layouts with clear hierarchy, responsive columns, and reusable content patterns.", tag: "Marketing", number: "02" },
        { title: "Pricing Tables", description: "Conversion-focused pricing layouts with plan hierarchy, comparison details, and responsive behavior.", tag: "Marketing", number: "03" },
        { title: "Dashboard Panels", description: "Clean data surfaces for metrics, activity, analytics, and operational product interfaces.", tag: "Dashboard", number: "04" },
        { title: "Navigation Blocks", description: "Application navigation patterns designed for clear information architecture and scalable products.", tag: "Application", number: "05" },
        { title: "Data Tables", description: "Dense but readable table patterns for admin panels, management tools, and product workflows.", tag: "Application", number: "06" }
      ],
      principleTitle: "Designed as building blocks, not decoration.",
      principleText: "Every block is created around a practical implementation problem: hierarchy, spacing, responsiveness, and reuse. Start from a solid structure and make it yours.",
      ctaTitle: "Get early access to the first collection.",
      ctaText: "The Component Packs collection is coming soon. Join the early-access list to be notified when the first blocks are released.",
      cta: "Request early access",
      collectionLabel: "Collection", philosophyLabel: "Philosophy", earlyAccessLabel: "Early access", previewLabel: "MINKITS / BLOCKS"
    },
    pageKits: { title: "Page Kits", description: "Complete page sections and layouts for faster product assembly.", back: "Back to component store", badge: "Coming soon", cta: "Request early access" },
    componentsCatalog: { previousComponent: "Previous component", nextComponent: "Next component", browseAllComponents: "Browse all components", title: "Components", subtitle: "Production-ready building blocks you can explore, reuse, and adapt.", viewComponent: "View component", metaTitle: "Components", metaDescription: "Explore reusable, production-ready UI components from MinKits.", backToCatalog: "Back to components", preview: "Preview", source: "Source code", copy: "Copy", copied: "Copied", searchPlaceholder: "Search components...", allCategories: "All", noResults: "No components match your search.", usage: "Usage", startHere: "Start here", interactiveDemo: "Interactive demo", example: "example", examples: "examples", documentedProps: "documented props", api: "API", props: "Props", propName: "Name", propType: "Type", required: "Required", optional: "Optional", defaultValue: "Default",
      categories: { form: "Form", layout: "Layout", feedback: "Feedback", navigation: "Navigation" },
      sidebar: { expand: "Expand", collapse: "Collapse" },
      demo: {
        click: "Click me", done: "Done ✓", secondary: "Secondary", formButton: "Form",
        buttonHint: "Try the variants and sizes below.", buttonActive: "Button interaction is active.", continueAction: "Continue",
        emailPlaceholder: "you@example.com", emailLabel: "Email", passwordLabel: "Password", disabledInput: "Disabled input",
        typeToTest: "Type to test the input.", valuePrefix: "Value:", messagePlaceholder: "Write your message...", messageLabel: "Message",
        requiredField: "Required field", characters: "characters", dividerHint: "Solid and directional gradient variants.",
        inputSample: "Input", textareaSample: "Your message...", nameLabel: "Name"
      }
    },
    search: { title: "Search MinKits", description: "Search components, component packs, and articles from one place.", placeholder: "Search MinKits...", inputLabel: "Search query", submit: "Search", resultsFor: "Results for \"{query}\"", noResults: "No results found for \"{query}\".", components: "Components", packs: "Component Packs", blog: "Blog" },
    uiKits: { title: "UI Kits", description: "Larger UI collections for consistent product interfaces.", back: "Back to component store", badge: "Coming soon", cta: "Request early access" },
    blog: {
      title: "Blog",
      subtitle: "Practical articles and resources for modern UI development.",
      readMore: "Read article",
      viewAll: "View all articles",
      searchPlaceholder: "Search articles...",
      allCategories: "All topics",
      noResults: "No articles match your filters.",
      filters: "Filters",
      sort: "Sort by",
      sortNewest: "Newest",
      sortOldest: "Oldest",
      sortTitleAsc: "Title A–Z",
      sortTitleDesc: "Title Z–A",
      categories: { components: "Components", react: "React", tailwind: "Tailwind CSS" },
      posts: [
        { title: "Building better interfaces with reusable components", description: "A practical look at structuring reusable UI without losing flexibility.", category: "components" },
        { title: "A cleaner approach to Tailwind CSS", description: "Patterns that keep utility-first interfaces readable and maintainable.", category: "tailwind" },
        { title: "Designing production-ready React components", description: "What to consider when turning a visual idea into a reusable component.", category: "react" }
      ]
    },
    team: { title: "Our Team", subtitle: "A small team focused on making frontend development simpler." },
    contact: { title: "Contact Us", subtitle: "Have a question or an idea? Send us a message.", name: "Name", email: "Email", message: "Message", namePlaceholder: "Your name", emailPlaceholder: "you@example.com", messagePlaceholder: "Write your message here...", legal: "By submitting, you agree to our Terms and Privacy Policy.", submit: "Submit", brandDescription: "MinKits is a growing collection of practical, production-ready UI components and kits for modern web development." },
    footer: { search: "Search", description: "MinKits is a growing collection of practical, production-ready UI components and kits for modern web development.", important: "Important Links", social: "Social Links", subscribe: "Subscribe for news", emailPlaceholder: "Enter your email..", button: "Subscribe", home: "Home", about: "About", componentPacks: "Component Packs", portfolio: "Portfolio", contact: "Contact", faq: "FAQ", terms: "Terms & Conditions", privacy: "Privacy Policy", copyright: "© 2026 MinKits" },
    breadcrumbs: { home: "Home", about: "About Us", blog: "Blog", components: "Components" },
  },
  fa: {
    nav: { home: "خانه", about: "درباره ما", blog: "بلاگ", componentPacks: "پک‌های کامپوننت", companies: "شرکت‌های گروه", contact: "ارتباط با ما", careers: "فرصت‌های شغلی" },
    hero: { eyebrow: "کیت‌های رابط کاربری آماده تولید برای توسعه‌دهندگان", title: "با سرعت بیشتری رابط کاربری آماده تولید با", description: "کیت‌ها و کامپوننت‌های حرفه‌ای React، Next.js و Tailwind برای ساخت محصولاتی سریع‌تر، تمیزتر و بهتر.", explore: "مشاهده کیت‌ها", components: "مشاهده کامپوننت‌ها" },
    slogan: { text: "اینجا هستیم تا با هم ایده‌های نو خلق کنیم و با نوآوری سریع‌تر از همیشه پیش برویم؛ چون باور داریم:", value: "سادگی، قدرت است." },
    about: { title: "درباره ما", subtitle: "ابزارهای ساده، رابط‌های فکرشده و کد آماده تولید.", intro: "MinKits مجموعه‌ای رو‌به‌رشد از کامپوننت‌ها و کیت‌های کاربردی رابط کاربری است؛ برای توسعه‌دهندگانی که می‌خواهند بدون شروع دوباره از صفر، محصولات حرفه‌ای بسازند.", items: [{ title: "با اطمینان بسازید", text: "کامپوننت‌های قابل استفاده مجدد، مسیر ایده تا پیاده‌سازی را با تکرار کمتر کوتاه می‌کنند." }, { title: "رابطی یکپارچه داشته باشید", text: "الگوهای روشن و کامپوننت‌های متمرکز، نگهداری سیستم طراحی را ساده‌تر می‌کنند." }, { title: "سریع‌تر منتشر کنید", text: "از بلوک‌های آماده تولید شروع کنید و زمان بیشتری برای تصمیم‌های محصول داشته باشید." }], cta: "شروع کنید" },
    featuredComponents: { title: "کامپوننت‌های منتخب", subtitle: "با بلوک‌های کاربردی و آماده استفاده، سریع‌تر شروع کنید.", viewAll: "مشاهده همه کامپوننت‌ها" },
    features: { title: "چرا MinKits؟", subtitle: "سریع‌تر بسازید، یکپارچگی را حفظ کنید و روی ساخت محصول بهتر تمرکز کنید.", items: [{ title: "ساخت سریع‌تر", desc: "کارهای تکراری رابط کاربری را کنار بگذارید و زمان بیشتری برای قابلیت‌های موردنیاز کاربران صرف کنید." }, { title: "آماده تولید", desc: "کامپوننت‌هایی حرفه‌ای برای پروژه‌های واقعی و برنامه‌های قابل توسعه." }, { title: "تمیز و یکپارچه", desc: "سیستم طراحی خود را منسجم نگه دارید و تجربه‌ای حرفه‌ای‌تر ارائه دهید." }] },
    componentStore: { title: "فروشگاه کامپوننت", subtitle: "بلوک‌های رابط کاربری قابل استفاده مجدد، آماده برای پروژه بعدی شما.", badge: "به‌زودی", intro: "با مجموعه‌های تخصصی کامپوننت و کیت‌های کامل، رابط کاربری خود را سریع‌تر بسازید.", cta: "درخواست دسترسی زودهنگام", products: [{ title: "پک‌های کامپوننت", description: "مجموعه‌هایی متمرکز برای الگوهای رایج رابط کاربری و صفحات محصول.", badge: "به‌زودی", action: "مشاهده مجموعه", href: "/components/component-packs", features: ["کد منبع قابل استفاده مجدد", "آماده برای React و Tailwind", "مناسب پروژه‌های واقعی"] }, { title: "کیت صفحات", description: "بخش‌ها و صفحات کامل برای عبور سریع‌تر از طراحی به پیاده‌سازی.", badge: "به‌زودی", action: "مشاهده مجموعه", href: "/components/page-kits", features: ["چیدمان‌های واکنش‌گرا", "الگوهای طراحی یکپارچه", "قابل شخصی‌سازی"] }, { title: "کیت‌های UI", description: "مجموعه‌های بزرگ‌تر برای تیم‌هایی که یک نقطه شروع منسجم برای محصول می‌خواهند.", badge: "به‌زودی", action: "مشاهده مجموعه", href: "/components/ui-kits", features: ["کامپوننت‌های سیستماتیک", "ساختار با تمرکز بر تولید", "قابل توسعه"] }] },
    componentPacks: {
      eyebrow: "پک‌های کامپوننت",
      title: "سریع‌تر بسازید، با بلاک‌های آماده تولید.",
      subtitle: "مجموعه‌ای متمرکز از بلاک‌های رابط کاربری قابل استفاده مجدد برای داشبوردها، محصولات SaaS، صفحات مارکتینگ و جریان‌های واقعی محصول.",
      back: "بازگشت به فروشگاه کامپوننت",
      browse: "مشاهده پک‌ها",
      viewPack: "مشاهده پک",
      badge: "به‌زودی",
      stats: [{ value: "۲۴+", label: "بلاک رابط کاربری" }, { value: "React", label: "کد منبع" }, { value: "Tailwind", label: "استایل‌دهی" }],
      categories: ["همه بلاک‌ها", "مارکتینگ", "داشبورد", "اپلیکیشن"],
      blocks: [
        { title: "بخش‌های Hero", description: "ترکیب‌های منعطف برای معرفی محصول، صفحات SaaS و تجربه‌های متمرکز فرود.", tag: "مارکتینگ", number: "۰۱" },
        { title: "شبکه قابلیت‌ها", description: "چیدمان‌های ساختاریافته برای نمایش قابلیت‌ها با سلسله‌مراتب روشن و واکنش‌گرایی مناسب.", tag: "مارکتینگ", number: "۰۲" },
        { title: "جداول قیمت‌گذاری", description: "الگوهای قیمت‌گذاری با تمرکز بر مقایسه، سلسله‌مراتب پلن‌ها و تجربه کاربری واکنش‌گرا.", tag: "مارکتینگ", number: "۰۳" },
        { title: "پنل‌های داشبورد", description: "سطوح تمیز برای نمایش شاخص‌ها، فعالیت‌ها، تحلیل‌ها و رابط‌های عملیاتی محصول.", tag: "داشبورد", number: "۰۴" },
        { title: "بلوک‌های ناوبری", description: "الگوهای ناوبری برای معماری اطلاعات شفاف و محصولاتی که قابلیت توسعه دارند.", tag: "اپلیکیشن", number: "۰۵" },
        { title: "جداول داده", description: "الگوهای متراکم اما خوانا برای پنل‌های مدیریت، ابزارهای سازمانی و جریان‌های محصول.", tag: "اپلیکیشن", number: "۰۶" }
      ],
      principleTitle: "بلاک‌هایی برای ساخت، نه فقط برای نمایش.",
      principleText: "هر بلاک حول یک مسئله واقعی پیاده‌سازی طراحی شده است: سلسله‌مراتب، فاصله‌گذاری، واکنش‌گرایی و استفاده مجدد. از یک ساختار محکم شروع کنید و آن را برای محصول خودتان تغییر دهید.",
      ctaTitle: "برای دسترسی زودهنگام به اولین مجموعه آماده شوید.",
      ctaText: "مجموعه Component Packs به‌زودی منتشر می‌شود. برای دریافت اطلاع‌رسانی زمان انتشار اولین بلاک‌ها، به فهرست دسترسی زودهنگام بپیوندید.",
      cta: "درخواست دسترسی زودهنگام",
      collectionLabel: "مجموعه", philosophyLabel: "رویکرد", earlyAccessLabel: "دسترسی زودهنگام", previewLabel: "MINKITS / BLOCKS"
    },
    pageKits: { title: "کیت صفحات", description: "صفحات و بخش‌های کامل برای ساخت سریع‌تر محصولات.", back: "بازگشت به فروشگاه کامپوننت", badge: "به‌زودی", cta: "درخواست دسترسی زودهنگام" },
    componentsCatalog: { previousComponent: "کامپوننت قبلی", nextComponent: "کامپوننت بعدی", browseAllComponents: "مشاهده همه کامپوننت‌ها", title: "کامپوننت‌ها", subtitle: "بلوک‌های رابط کاربری آماده تولید برای مشاهده، استفاده مجدد و شخصی‌سازی.", viewComponent: "مشاهده کامپوننت", metaTitle: "کامپوننت‌ها", metaDescription: "مجموعه‌ای از کامپوننت‌های رابط کاربری آماده تولید و قابل استفاده مجدد در MinKits.", backToCatalog: "بازگشت به کامپوننت‌ها", preview: "پیش‌نمایش", source: "سورس کد", copy: "کپی", copied: "کپی شد", searchPlaceholder: "جستجوی کامپوننت‌ها...", allCategories: "همه", noResults: "کامپوننتی با این جستجو پیدا نشد.", usage: "نحوه استفاده", startHere: "از اینجا شروع کنید", interactiveDemo: "دموی تعاملی", example: "مثال", examples: "مثال", documentedProps: "پراپ مستند", api: "API", props: "پراپ‌ها", propName: "نام", propType: "نوع", required: "الزامی", optional: "اختیاری", defaultValue: "پیش‌فرض",
      categories: { form: "فرم", layout: "چیدمان", feedback: "بازخورد", navigation: "ناوبری" },
      sidebar: { expand: "باز کردن", collapse: "بستن" },
      demo: {
        click: "کلیک کنید", done: "انجام شد ✓", secondary: "ثانویه", formButton: "فرم",
        buttonHint: "واریانت‌ها و اندازه‌های زیر را امتحان کنید.", buttonActive: "تعامل با دکمه فعال است.", continueAction: "ادامه",
        emailPlaceholder: "you@example.com", emailLabel: "ایمیل", passwordLabel: "رمز عبور", disabledInput: "ورودی غیرفعال",
        typeToTest: "برای تست تایپ کنید.", valuePrefix: "مقدار:", messagePlaceholder: "پیام خود را بنویسید...", messageLabel: "پیام",
        requiredField: "فیلد الزامی", characters: "کاراکتر", dividerHint: "حالت ساده و گرادیان جهت‌دار.",
        inputSample: "ورودی", textareaSample: "پیام شما...", nameLabel: "نام"
      }
    },
    search: { title: "جست‌وجوی MinKits", description: "کامپوننت‌ها، پک‌های کامپوننت و مقالات را از یکجا جست‌وجو کنید.", placeholder: "جست‌وجو در MinKits...", inputLabel: "عبارت جست‌وجو", submit: "جست‌وجو", resultsFor: "نتایج برای «{query}»", noResults: "نتیجه‌ای برای «{query}» پیدا نشد.", components: "کامپوننت‌ها", packs: "پک‌های کامپوننت", blog: "بلاگ" },
    uiKits: { title: "کیت‌های UI", description: "مجموعه‌های بزرگ‌تر برای ساخت رابط‌های یکپارچه در محصول.", back: "بازگشت به فروشگاه کامپوننت", badge: "به‌زودی", cta: "درخواست دسترسی زودهنگام" },
    blog: {
      title: "بلاگ",
      subtitle: "مقالات و منابع کاربردی برای توسعه رابط‌های کاربری مدرن.",
      readMore: "مشاهده مقاله",
      viewAll: "مشاهده همه مقالات",
      searchPlaceholder: "جستجوی مقالات...",
      allCategories: "همه موضوعات",
      noResults: "مقاله‌ای با این فیلترها پیدا نشد.",
      filters: "فیلترها",
      sort: "مرتب‌سازی",
      sortNewest: "جدیدترین",
      sortOldest: "قدیمی‌ترین",
      sortTitleAsc: "عنوان، الف تا ی",
      sortTitleDesc: "عنوان، ی تا الف",
      categories: { components: "کامپوننت‌ها", react: "React", tailwind: "Tailwind CSS" },
      posts: [
        { title: "ساخت رابط‌های بهتر با کامپوننت‌های قابل استفاده مجدد", description: "نگاهی کاربردی به ساختاردهی UI قابل استفاده مجدد بدون از دست دادن انعطاف‌پذیری.", category: "components" },
        { title: "رویکردی تمیزتر به Tailwind CSS", description: "الگوهایی برای خواناتر و قابل نگهداری‌تر کردن رابط‌های مبتنی بر utility.", category: "tailwind" },
        { title: "طراحی کامپوننت‌های React آماده تولید", description: "نکاتی که هنگام تبدیل یک ایده بصری به یک کامپوننت قابل استفاده مجدد باید در نظر گرفت.", category: "react" }
      ]
    },
    team: { title: "تیم ما", subtitle: "تیمی کوچک که روی ساده‌تر کردن توسعه فرانت‌اند تمرکز دارد." },
    contact: { title: "ارتباط با ما", subtitle: "سؤال یا ایده‌ای دارید؟ برای ما پیام بفرستید.", name: "نام", email: "ایمیل", message: "پیام", namePlaceholder: "نام شما", emailPlaceholder: "you@example.com", messagePlaceholder: "پیام خود را بنویسید...", legal: "با ارسال فرم، با شرایط استفاده و سیاست حریم خصوصی موافقت می‌کنید.", submit: "ارسال", brandDescription: "MinKits مجموعه‌ای رو‌به‌رشد از کامپوننت‌ها و کیت‌های کاربردی و آماده تولید برای توسعه وب مدرن است." },
    footer: { search: "جست‌وجو", description: "کامپوننت‌ها و کیت‌های آماده تولید برای توسعه‌دهندگان وب مدرن.", important: "لینک‌های مهم", social: "شبکه‌های اجتماعی", subscribe: "عضویت در خبرنامه", emailPlaceholder: "ایمیل خود را وارد کنید...", button: "عضویت", home: "خانه", about: "درباره ما", componentPacks: "پک‌های کامپوننت", portfolio: "نمونه‌کارها", contact: "ارتباط با ما", faq: "سؤالات متداول", terms: "شرایط استفاده", privacy: "حریم خصوصی", copyright: "© ۲۰۲۶ MinKits" },
    breadcrumbs: { home: "خانه", about: "درباره ما", blog: "بلاگ", components: "کامپوننت‌ها" },
  },
} satisfies Record<Lang, unknown>;

export function getMessages(lang: Lang) { return messages[lang]; }
