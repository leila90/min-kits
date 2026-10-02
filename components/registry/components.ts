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
    },
    {
        slug: "input",
        category: "form",
        name: {en: "Input", fa: "ورودی"},
        description: {
            en: "A reusable text input with consistent sizing, borders, and interaction states.",
            fa: "ورودی متنی قابل استفاده مجدد با اندازه، حاشیه و حالت‌های تعاملی یکپارچه.",
        },
    },
    {
        slug: "textarea",
        category: "form",
        name: {en: "Textarea", fa: "ناحیه متن"},
        description: {
            en: "A reusable multiline field for longer user input.",
            fa: "فیلد چندخطی قابل استفاده مجدد برای ورود متن‌های طولانی‌تر.",
        },
    },
    {
        slug: "form-field",
        category: "form",
        name: {en: "Form Field", fa: "فیلد فرم"},
        description: {
            en: "A semantic label wrapper for consistent form field structure.",
            fa: "یک wrapper معنایی برای ساختار یکپارچه فیلدهای فرم.",
        },
    },
    {
        slug: "divider",
        category: "layout",
        name: {en: "Divider", fa: "جداکننده"},
        description: {
            en: "A lightweight visual separator with solid and directional gradient variants.",
            fa: "جداکننده‌ای سبک با حالت ساده و گرادیان جهت‌دار.",
        },
    },
] satisfies ComponentRegistry;
