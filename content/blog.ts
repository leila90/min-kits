export type BlogCategory = "components" | "react" | "tailwind";

export type BlogPost = {
    slug: string;
    category: BlogCategory;
    title: string;
    description: string;
    publishedAt: string;
    readTime: number;
    author: string;
    role: string;
    image: string;
    imageAlt: string;
    quote: string;
    sections: Array<{heading: string; paragraphs: string[]}>;
};

export const blogPosts: Record<"en" | "fa", BlogPost[]> = {
    en: [
        {
            slug: "designing-reusable-react-components",
            category: "components",
            title: "Designing reusable React components that stay flexible",
            description: "A practical way to define component boundaries, variants, and APIs without turning a small UI library into a maintenance problem.",
            publishedAt: "2026-09-28",
            readTime: 7,
            author: "MinKits Editorial",
            role: "Frontend Engineering",
            image: "/images/blog/1.jpg",
            imageAlt: "Developer workspace with a screen full of code",
            quote: "The best reusable component is not the one with the most options; it is the one with the clearest boundary.",
            sections: [
                {
                    heading: "Start with the user-facing states",
                    paragraphs: [
                        "A reusable component should begin with the states users actually encounter: default, hover, focus, disabled, loading, error, and any meaningful validation state. Designing the API after these states are clear keeps implementation details from leaking into every consuming page.",
                        "For MinKits, that means a Button or Input should expose a small set of deliberate variants instead of accepting dozens of styling escape hatches."
                    ]
                },
                {
                    heading: "Keep the API smaller than the implementation",
                    paragraphs: [
                        "Internal markup can be complex while the public API remains simple. A good component absorbs accessibility attributes, responsive behavior, and visual consistency so product pages do not have to repeat them.",
                        "When a new requirement appears, first ask whether it belongs to the component contract or to the composition around it. That distinction is what keeps a library maintainable as it grows."
                    ]
                }
            ]
        },
        {
            slug: "nextjs-16-app-router",
            category: "react",
            title: "What Next.js 16 changes for an App Router project",
            description: "A practical overview of the routing, caching, Turbopack, and React 19.2 changes that matter when building a modern Next.js application.",
            publishedAt: "2026-09-22",
            readTime: 8,
            author: "MinKits Editorial",
            role: "Web Platform",
            image: "/images/blog/2.jpg",
            imageAlt: "Laptop displaying a modern web development workspace",
            quote: "Modern framework features are most useful when they reduce application complexity rather than adding another layer to manage.",
            sections: [
                {
                    heading: "Routing is becoming more deliberate",
                    paragraphs: [
                        "Next.js 16 continues the App Router direction with improved navigation and layout reuse. The practical takeaway is to keep shared UI in layouts and let individual routes own only the data and interface they actually need.",
                        "The release also formalized proxy.ts as the network boundary in place of middleware.ts, which makes the role of that file clearer in new projects."
                    ]
                },
                {
                    heading: "Performance should be designed into the route",
                    paragraphs: [
                        "Turbopack is the default bundler, while newer caching capabilities make it possible to choose more deliberately what should be cached. These features work best when the application is already organized around server-first rendering and small client islands.",
                        "The goal is not to use every new feature. The goal is to make the common path—render, navigate, cache, and update—predictable."
                    ]
                }
            ]
        },
        {
            slug: "tailwind-component-architecture",
            category: "tailwind",
            title: "A cleaner Tailwind architecture for component libraries",
            description: "How to keep utility classes readable while preserving design consistency across a growing collection of React components.",
            publishedAt: "2026-09-15",
            readTime: 6,
            author: "MinKits Editorial",
            role: "Design Systems",
            image: "/images/blog/3.jpg",
            imageAlt: "Interface design and layout references on a desk",
            quote: "Consistency comes from shared decisions, not from making every class identical.",
            sections: [
                {
                    heading: "Separate structure from visual tokens",
                    paragraphs: [
                        "Utility-first CSS becomes easier to maintain when component structure is predictable and repeated visual decisions are represented by shared tokens. This makes it easier to adjust spacing, surfaces, borders, and typography without rewriting every component.",
                        "Tailwind v4 makes this approach especially useful because theme values can live close to the project’s CSS architecture while components remain explicit about their layout."
                    ]
                },
                {
                    heading: "Use composition before overrides",
                    paragraphs: [
                        "If a component needs a radically different layout, composition is often a better answer than another conditional class branch. Small primitives can stay stable while page sections decide how those primitives work together.",
                        "This is one of the principles behind the MinKits registry: reusable pieces should be easy to understand in isolation and easy to compose in real interfaces."
                    ]
                }
            ]
        },
        {
            slug: "accessible-ui-from-the-start",
            category: "components",
            title: "Building accessible UI from the first component",
            description: "Keyboard behavior, focus states, labels, dialogs, and direction-aware navigation are easier to get right when accessibility is part of the component contract.",
            publishedAt: "2026-09-08",
            readTime: 7,
            author: "MinKits Editorial",
            role: "Accessibility",
            image: "/images/blog/1.png",
            imageAlt: "Clean product interface displayed on a monitor",
            quote: "Accessibility is not a final polish pass; it is part of the component API.",
            sections: [
                {
                    heading: "Make keyboard behavior explicit",
                    paragraphs: [
                        "Interactive controls need more than a visible focus ring. Tabs, dialogs, menus, and navigation controls should expose predictable keyboard behavior and retain focus in a way users can understand.",
                        "For RTL interfaces, directional keys can also need different semantics. Treat direction as part of the interaction model rather than only a visual setting."
                    ]
                },
                {
                    heading: "Prefer semantic HTML before ARIA",
                    paragraphs: [
                        "A native button, label, input, heading, and landmark often provides a better foundation than recreating the same behavior with generic elements and extra ARIA attributes.",
                        "ARIA should clarify semantics when native HTML cannot express the interaction, not become a substitute for it."
                    ]
                }
            ]
        }
    ],
    fa: [
        {
            slug: "designing-reusable-react-components",
            category: "components",
            title: "چطور کامپوننت‌های React قابل استفاده مجدد و منعطف بسازیم",
            description: "روشی کاربردی برای تعریف مرز، واریانت و API کامپوننت‌ها بدون اینکه یک کتابخانه کوچک UI به مشکل نگهداری تبدیل شود.",
            publishedAt: "2026-09-28",
            readTime: 7,
            author: "تحریریه MinKits",
            role: "مهندسی فرانت‌اند",
            image: "/images/blog/1.jpg",
            imageAlt: "محیط کاری توسعه‌دهنده با صفحه‌ای پر از کد",
            quote: "بهترین کامپوننت قابل استفاده مجدد، کامپوننتی نیست که بیشترین گزینه را دارد؛ کامپوننتی است که مرز روشن‌تری دارد.",
            sections: [
                {
                    heading: "از وضعیت‌های واقعی کاربر شروع کنید",
                    paragraphs: [
                        "کامپوننت قابل استفاده مجدد باید از وضعیت‌هایی شروع شود که کاربر واقعاً می‌بیند: حالت عادی، hover، focus، غیرفعال، loading، خطا و وضعیت‌های اعتبارسنجی. وقتی این وضعیت‌ها مشخص باشند، API کامپوننت کمتر تحت تأثیر جزئیات داخلی قرار می‌گیرد.",
                        "در MinKits این یعنی Button یا Input باید چند واریانت مشخص داشته باشد، نه ده‌ها راه فرار برای تغییر استایل."
                    ]
                },
                {
                    heading: "API را کوچک‌تر از پیاده‌سازی نگه دارید",
                    paragraphs: [
                        "ممکن است مارک‌آپ داخلی یک کامپوننت پیچیده باشد اما API عمومی آن ساده بماند. یک کامپوننت خوب ویژگی‌های دسترسی‌پذیری، رفتار واکنش‌گرا و یکپارچگی بصری را جذب می‌کند تا صفحات مجبور به تکرار آن‌ها نباشند.",
                        "هر نیاز جدید باید ابتدا از این فیلتر عبور کند که بخشی از قرارداد کامپوننت است یا مربوط به ترکیب آن در صفحه."
                    ]
                }
            ]
        },
        {
            slug: "nextjs-16-app-router",
            category: "react",
            title: "Next.js 16 برای پروژه‌های App Router چه تغییری ایجاد می‌کند؟",
            description: "مروری کاربردی بر تغییرات routing، caching، Turbopack و React 19.2 که برای یک پروژه مدرن Next.js اهمیت دارند.",
            publishedAt: "2026-09-22",
            readTime: 8,
            author: "تحریریه MinKits",
            role: "پلتفرم وب",
            image: "/images/blog/2.jpg",
            imageAlt: "لپ‌تاپ با محیط توسعه وب مدرن",
            quote: "قابلیت‌های جدید فریم‌ورک زمانی ارزشمندند که پیچیدگی برنامه را کم کنند، نه اینکه لایه دیگری برای مدیریت اضافه کنند.",
            sections: [
                {
                    heading: "Routing آگاهانه‌تر شده است",
                    paragraphs: [
                        "Next.js 16 مسیر App Router را با بهبود navigation و استفاده مجدد از layoutها ادامه می‌دهد. نتیجه عملی این است که UI مشترک در layout بماند و هر route فقط مالک داده و رابط مورد نیاز خودش باشد.",
                        "در این نسخه همچنین proxy.ts جای middleware.ts را گرفته تا نقش آن فایل به‌عنوان مرز شبکه روشن‌تر باشد."
                    ]
                },
                {
                    heading: "Performance باید از خود route شروع شود",
                    paragraphs: [
                        "Turbopack bundler پیش‌فرض است و قابلیت‌های جدید caching امکان انتخاب آگاهانه‌تر بخش‌های قابل cache را می‌دهند. این قابلیت‌ها زمانی بیشترین ارزش را دارند که معماری پروژه server-first و client islandها کوچک باشد.",
                        "هدف استفاده از همه قابلیت‌های جدید نیست؛ هدف این است که مسیر render، navigation، cache و update قابل پیش‌بینی باشد."
                    ]
                }
            ]
        },
        {
            slug: "tailwind-component-architecture",
            category: "tailwind",
            title: "معماری تمیزتر Tailwind برای کتابخانه کامپوننت",
            description: "چطور utilityها را خوانا نگه داریم و هم‌زمان یکپارچگی طراحی را در مجموعه‌ای رو‌به‌رشد از کامپوننت‌های React حفظ کنیم.",
            publishedAt: "2026-09-15",
            readTime: 6,
            author: "تحریریه MinKits",
            role: "Design Systems",
            image: "/images/blog/3.jpg",
            imageAlt: "مرجع‌های طراحی رابط کاربری روی میز",
            quote: "یکپارچگی از تصمیم‌های مشترک می‌آید، نه از یکسان کردن تک‌تک کلاس‌ها.",
            sections: [
                {
                    heading: "ساختار را از توکن‌های بصری جدا کنید",
                    paragraphs: [
                        "وقتی ساختار کامپوننت قابل پیش‌بینی باشد و تصمیم‌های تکرارشونده بصری در توکن‌های مشترک قرار بگیرند، نگهداری utility-first CSS ساده‌تر می‌شود.",
                        "Tailwind v4 این رویکرد را کاربردی‌تر کرده چون مقادیر theme می‌توانند نزدیک معماری CSS پروژه قرار بگیرند و کامپوننت‌ها همچنان صریح باقی بمانند."
                    ]
                },
                {
                    heading: "قبل از override به composition فکر کنید",
                    paragraphs: [
                        "اگر کامپوننتی به layout کاملاً متفاوتی نیاز دارد، composition معمولاً بهتر از اضافه کردن شاخه‌های شرطی کلاس‌هاست. primitiveهای کوچک ثابت می‌مانند و section تصمیم می‌گیرد چگونه کنار هم قرار بگیرند.",
                        "این دقیقاً یکی از اصول registry در MinKits است: قطعه باید به‌تنهایی قابل فهم و در رابط واقعی قابل ترکیب باشد."
                    ]
                }
            ]
        },
        {
            slug: "accessible-ui-from-the-start",
            category: "components",
            title: "ساخت UI دسترس‌پذیر از همان اولین کامپوننت",
            description: "رفتار کیبورد، focus، label، dialog و navigation جهت‌محور زمانی بهتر حل می‌شوند که accessibility بخشی از قرارداد کامپوننت باشد.",
            publishedAt: "2026-09-08",
            readTime: 7,
            author: "تحریریه MinKits",
            role: "دسترس‌پذیری",
            image: "/images/blog/1.png",
            imageAlt: "رابط محصولی تمیز روی مانیتور",
            quote: "دسترس‌پذیری مرحله آخر نیست؛ بخشی از API کامپوننت است.",
            sections: [
                {
                    heading: "رفتار کیبورد را صریح طراحی کنید",
                    paragraphs: [
                        "کنترل‌های تعاملی فقط به focus ring نیاز ندارند. tabs، dialogها، menuها و navigation باید رفتار قابل پیش‌بینی با کیبورد داشته باشند و focus را به شکلی قابل فهم مدیریت کنند.",
                        "در رابط RTL حتی کلیدهای جهت‌دار می‌توانند معنای متفاوتی داشته باشند؛ بنابراین direction بخشی از مدل تعامل است، نه فقط یک ویژگی بصری."
                    ]
                },
                {
                    heading: "قبل از ARIA سراغ HTML معنایی بروید",
                    paragraphs: [
                        "button، label، input، heading و landmarkهای native اغلب پایه بهتری از بازسازی همان رفتار با عناصر عمومی و ARIA هستند.",
                        "ARIA باید زمانی به معنا کمک کند که HTML native کافی نیست، نه اینکه جایگزین HTML معنایی شود."
                    ]
                }
            ]
        }
    ]
};

export function getBlogPosts(lang: "en" | "fa") {
    return blogPosts[lang];
}

export function getBlogPost(lang: "en" | "fa", slug: string) {
    return blogPosts[lang].find((post) => post.slug === slug);
}
