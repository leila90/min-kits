import type {ComponentRegistry} from "./types";

export const componentRegistry: ComponentRegistry = [
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
            {name: "type", type: '"button" | "submit" | "reset"', required: false, defaultValue: '"button"', description: {en: "Native button type.", fa: "نوع استاندارد دکمه در HTML."}},
            {name: "disabled", type: "boolean", required: false, defaultValue: "false", description: {en: "Disables interaction with the button.", fa: "تعامل با دکمه را غیرفعال می‌کند."}},
            {name: "className", type: "string", required: false, description: {en: "Additional CSS classes.", fa: "کلاس‌های CSS اضافی."}},
            {name: "children", type: "ReactNode", required: false, description: {en: "Button content.", fa: "محتوای دکمه."}},
        ],
        examples: [
            {title: {en: "Primary action", fa: "عمل اصلی"}, code: `<Button>Continue</Button>`},
            {title: {en: "Secondary action", fa: "عمل ثانویه"}, code: `<Button variant="secondary" size="sm">Cancel</Button>`},
            {title: {en: "Form submit", fa: "ارسال فرم"}, code: `<Button variant="form" type="submit">Send message</Button>`},
            {title: {en: "Full radius", fa: "گوشه کاملاً گرد"}, code: `<Button radius="full">Get started</Button>`},
        ],
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
            {name: "type", type: "string", required: false, defaultValue: '"text"', description: {en: "Native HTML input type such as text, email, or password.", fa: "نوع استاندارد ورودی مانند text، email یا password."}},
            {name: "placeholder", type: "string", required: false, description: {en: "Placeholder text shown when the field is empty.", fa: "متن راهنما هنگام خالی بودن فیلد."}},
            {name: "name", type: "string", required: false, description: {en: "Form field name.", fa: "نام فیلد برای فرم."}},
            {name: "id", type: "string", required: false, description: {en: "Input id, useful for associating a FormField label.", fa: "شناسه ورودی، برای اتصال به برچسب FormField کاربرد دارد."}},
            {name: "value", type: "string | number | readonly string[]", required: false, description: {en: "Controlled input value.", fa: "مقدار کنترل‌شده ورودی."}},
            {name: "defaultValue", type: "string | number | readonly string[]", required: false, description: {en: "Initial uncontrolled value.", fa: "مقدار اولیه در حالت کنترل‌نشده."}},
            {name: "required", type: "boolean", required: false, defaultValue: "false", description: {en: "Marks the input as required for native form validation.", fa: "فیلد را برای اعتبارسنجی استاندارد فرم الزامی می‌کند."}},
            {name: "disabled", type: "boolean", required: false, defaultValue: "false", description: {en: "Disables the input.", fa: "ورودی را غیرفعال می‌کند."}},
            {name: "className", type: "string", required: false, description: {en: "Additional CSS classes.", fa: "کلاس‌های CSS اضافی."}},
        ],
        examples: [
            {title: {en: "Email input", fa: "ورودی ایمیل"}, code: `<Input type="email" name="email" placeholder="you@example.com" />`},
            {title: {en: "Required field", fa: "فیلد الزامی"}, code: `<Input id="email" type="email" required placeholder="Your email" />`},
            {title: {en: "Password input", fa: "ورودی رمز عبور"}, code: `<Input type="password" placeholder="Your password" />`},
            {title: {en: "Disabled state", fa: "حالت غیرفعال"}, code: `<Input placeholder="Unavailable" disabled />`},
        ],
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
            {name: "placeholder", type: "string", required: false, description: {en: "Placeholder text shown when the field is empty.", fa: "متن راهنما هنگام خالی بودن فیلد."}},
            {name: "rows", type: "number", required: false, description: {en: "Suggested visible text rows.", fa: "تعداد پیشنهادی ردیف‌های قابل مشاهده."}},
            {name: "name", type: "string", required: false, description: {en: "Form field name.", fa: "نام فیلد برای فرم."}},
            {name: "id", type: "string", required: false, description: {en: "Textarea id, useful for associating a FormField label.", fa: "شناسه textarea، برای اتصال به برچسب FormField کاربرد دارد."}},
            {name: "value", type: "string | number | readonly string[]", required: false, description: {en: "Controlled textarea value.", fa: "مقدار کنترل‌شده textarea."}},
            {name: "defaultValue", type: "string | number | readonly string[]", required: false, description: {en: "Initial uncontrolled value.", fa: "مقدار اولیه در حالت کنترل‌نشده."}},
            {name: "required", type: "boolean", required: false, defaultValue: "false", description: {en: "Marks the field as required for native form validation.", fa: "فیلد را برای اعتبارسنجی استاندارد فرم الزامی می‌کند."}},
            {name: "disabled", type: "boolean", required: false, defaultValue: "false", description: {en: "Disables the textarea.", fa: "textarea را غیرفعال می‌کند."}},
            {name: "className", type: "string", required: false, description: {en: "Additional CSS classes.", fa: "کلاس‌های CSS اضافی."}},
        ],
        examples: [
            {title: {en: "Message field", fa: "فیلد پیام"}, code: `<Textarea name="message" placeholder="Write a message..." rows={5} />`},
            {title: {en: "Required message", fa: "پیام الزامی"}, code: `<Textarea id="message" required rows={5} placeholder="Your message" />`},
            {title: {en: "Compact note", fa: "یادداشت کوتاه"}, code: `<Textarea rows={3} placeholder="Add a note..." />`},
        ],
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
            {name: "label", type: "ReactNode", required: true, description: {en: "Visible field label.", fa: "برچسب قابل مشاهده فیلد."}},
            {name: "children", type: "ReactNode", required: true, description: {en: "Form control rendered below the label.", fa: "کنترل فرم که زیر برچسب نمایش داده می‌شود."}},
            {name: "htmlFor", type: "string", required: false, description: {en: "Id of the associated form control.", fa: "شناسه کنترل فرم مرتبط."}},
            {name: "className", type: "string", required: false, description: {en: "Additional CSS classes for the label.", fa: "کلاس‌های CSS اضافی برای برچسب."}},
        ],
        examples: [
            {title: {en: "Labeled email field", fa: "فیلد ایمیل دارای برچسب"}, code: `<FormField label="Email" htmlFor="email"><Input id="email" type="email" /></FormField>`},
            {title: {en: "Labeled message field", fa: "فیلد پیام دارای برچسب"}, code: `<FormField label="Message" htmlFor="message"><Textarea id="message" rows={5} /></FormField>`},
        ],
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
            {name: "variant", type: '"solid" | "gradient"', required: false, defaultValue: '"solid"', description: {en: "Divider visual style.", fa: "سبک ظاهری جداکننده."}},
            {name: "direction", type: '"ltr" | "rtl"', required: false, defaultValue: '"ltr"', description: {en: "Gradient direction when using the gradient variant.", fa: "جهت گرادیان هنگام استفاده از حالت gradient."}},
            {name: "className", type: "string", required: false, description: {en: "Additional CSS classes.", fa: "کلاس‌های CSS اضافی."}},
        ],
        examples: [
            {title: {en: "Solid divider", fa: "جداکننده ساده"}, code: `<Divider />`},
            {title: {en: "Gradient divider", fa: "جداکننده گرادیانی"}, code: `<Divider variant="gradient" />`},
            {title: {en: "RTL gradient", fa: "گرادیان راست به چپ"}, code: `<Divider variant="gradient" direction="rtl" />`},
        ],
    },
 ];
