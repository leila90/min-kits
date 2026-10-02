import type {ComponentRegistry} from "./types";

export const componentRegistry = [
    {
        slug: "button",
        category: "form",
        name: {en: "Button", fa: "دکمه"},
        description: {
            en: "A flexible action button with consistent variants, sizes, and focus states.",
            fa: "دکمه‌ای منعطف با واریانت‌ها، اندازه‌ها و حالت‌های فوکوس یکپارچه.",
        },
        props: [
            {name: "variant", type: '"primary" | "secondary" | "form"', required: false, defaultValue: '"primary"', description: {en: "Visual button style.", fa: "سبک ظاهری دکمه."}},
            {name: "size", type: '"sm" | "md" | "lg"', required: false, defaultValue: '"md"', description: {en: "Button size.", fa: "اندازه دکمه."}},
            {name: "radius", type: '"default" | "full"', required: false, defaultValue: '"default"', description: {en: "Corner radius.", fa: "گردی گوشه‌ها."}},
        ],
        examples: [{title: {en: "Primary button", fa: "دکمه اصلی"}, code: `<Button>Continue</Button>`}],
    },
    {
        slug: "input",
        category: "form",
        name: {en: "Input", fa: "ورودی"},
        description: {
            en: "A reusable text input with consistent sizing, borders, and interaction states.",
            fa: "ورودی متنی قابل استفاده مجدد با اندازه، حاشیه و حالت‌های تعاملی یکپارچه.",
        },
        props: [
            {name: "placeholder", type: "string", required: false, description: {en: "Placeholder text.", fa: "متن راهنما."}},
            {name: "disabled", type: "boolean", required: false, defaultValue: "false", description: {en: "Disables the field.", fa: "فیلد را غیرفعال می‌کند."}},
        ],
        examples: [{title: {en: "Text input", fa: "ورودی متنی"}, code: `<Input placeholder="Your email" />`}],
    },
    {
        slug: "textarea",
        category: "form",
        name: {en: "Textarea", fa: "ناحیه متن"},
        description: {
            en: "A reusable multiline field for longer user input.",
            fa: "فیلد چندخطی قابل استفاده مجدد برای ورود متن‌های طولانی‌تر.",
        },
        props: [
            {name: "placeholder", type: "string", required: false, description: {en: "Placeholder text.", fa: "متن راهنما."}},
            {name: "rows", type: "number", required: false, description: {en: "Visible text rows.", fa: "تعداد ردیف‌های قابل مشاهده."}},
        ],
        examples: [{title: {en: "Multiline input", fa: "ورودی چندخطی"}, code: `<Textarea placeholder="Write a message..." rows={5} />`}],
    },
    {
        slug: "form-field",
        category: "form",
        name: {en: "Form Field", fa: "فیلد فرم"},
        description: {
            en: "A semantic label wrapper for consistent form field structure.",
            fa: "یک wrapper معنایی برای ساختار یکپارچه فیلدهای فرم.",
        },
        props: [
            {name: "label", type: "ReactNode", required: true, description: {en: "Field label.", fa: "برچسب فیلد."}},
            {name: "htmlFor", type: "string", required: false, description: {en: "Associated control id.", fa: "شناسه کنترل مرتبط."}},
        ],
        examples: [{title: {en: "Labeled field", fa: "فیلد دارای برچسب"}, code: `<FormField label="Email" htmlFor="email"><Input id="email" /></FormField>`}],
    },
    {
        slug: "divider",
        category: "layout",
        name: {en: "Divider", fa: "جداکننده"},
        description: {
            en: "A lightweight visual separator with solid and directional gradient variants.",
            fa: "جداکننده‌ای سبک با حالت ساده و گرادیان جهت‌دار.",
        },
        props: [
            {name: "variant", type: '"solid" | "gradient"', required: false, defaultValue: '"solid"', description: {en: "Divider style.", fa: "سبک جداکننده."}},
            {name: "direction", type: '"ltr" | "rtl"', required: false, defaultValue: '"ltr"', description: {en: "Gradient direction.", fa: "جهت گرادیان."}},
        ],
        examples: [{title: {en: "Gradient divider", fa: "جداکننده گرادیانی"}, code: `<Divider variant="gradient" direction="ltr" />`}],
    },
] satisfies ComponentRegistry;
