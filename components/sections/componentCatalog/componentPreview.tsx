"use client";

import {useState} from "react";
import {Button, Divider, FormField, Input, Textarea} from "../../ui";

type ComponentPreviewProps = {
    slug: string;
    lang: "en" | "fa";
};

export default function ComponentPreview({slug, lang}: ComponentPreviewProps) {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);

    if (slug === "button") {
        return (
            <div className="flex flex-col items-center gap-4">
                <Button
                    size="lg"
                    radius="full"
                    onClick={() => setClicked((current) => !current)}
                >
                    {clicked
                        ? (lang === "fa" ? "انجام شد ✓" : "Done ✓")
                        : (lang === "fa" ? "کلیک کنید" : "Click me")}
                </Button>
                <p className="text-xs text-zinc-500" aria-live="polite">
                    {clicked
                        ? (lang === "fa" ? "تعامل با کامپوننت فعال است." : "The component is interactive.")
                        : (lang === "fa" ? "برای تست روی دکمه کلیک کنید." : "Click the button to test it.")}
                </p>
            </div>
        );
    }

    if (slug === "input") {
        return (
            <div className="w-full max-w-md">
                <Input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder={lang === "fa" ? "اینجا تایپ کنید..." : "Type something..."}
                    aria-label={lang === "fa" ? "نمونه ورودی" : "Input example"}
                />
                <p className="mt-3 text-xs text-zinc-500">
                    {value
                        ? (lang === "fa" ? `مقدار: ${value}` : `Value: ${value}`)
                        : (lang === "fa" ? "ورودی تعاملی" : "Interactive input")}
                </p>
            </div>
        );
    }

    if (slug === "textarea") {
        return (
            <div className="w-full max-w-md">
                <Textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={lang === "fa" ? "پیام خود را بنویسید..." : "Write your message..."}
                    aria-label={lang === "fa" ? "نمونه ناحیه متن" : "Textarea example"}
                />
                <p className="mt-3 text-xs text-zinc-500">
                    {message.length} {lang === "fa" ? "کاراکتر" : "characters"}
                </p>
            </div>
        );
    }

    if (slug === "form-field") {
        return (
            <div className="w-full max-w-md">
                <FormField
                    label={lang === "fa" ? "نام" : "Name"}
                    htmlFor="component-form-field-preview"
                >
                    <Input
                        id="component-form-field-preview"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder={lang === "fa" ? "نام خود را وارد کنید" : "Enter your name"}
                    />
                </FormField>
            </div>
        );
    }

    if (slug === "divider") {
        return (
            <div className="w-full max-w-md space-y-5">
                <Divider />
                <Divider variant="gradient" direction={lang === "fa" ? "rtl" : "ltr"} />
            </div>
        );
    }

    return null;
}
