"use client";

import {useState} from "react";
import {Button, Divider, FormField, Input, Textarea} from "../../ui";

type ComponentPreviewProps = {
    slug: string;
    lang: "en" | "fa";
};

const copy = {
    en: {
        click: "Click me",
        done: "Done ✓",
        buttonHint: "Try the variants and sizes below.",
        email: "you@example.com",
        emailLabel: "Email",
        disabled: "Disabled input",
        message: "Write your message...",
        messageLabel: "Message",
        required: "Required field",
        dividerHint: "Solid and directional gradient variants.",
    },
    fa: {
        click: "کلیک کنید",
        done: "انجام شد ✓",
        buttonHint: "واریانت‌ها و اندازه‌های زیر را امتحان کنید.",
        email: "you@example.com",
        emailLabel: "ایمیل",
        disabled: "ورودی غیرفعال",
        message: "پیام خود را بنویسید...",
        messageLabel: "پیام",
        required: "فیلد الزامی",
        dividerHint: "حالت ساده و گرادیان جهت‌دار.",
    },
} as const;

export default function ComponentPreview({slug, lang}: ComponentPreviewProps) {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);

    const labels = copy[lang];

    if (slug === "button") {
        return (
            <div className="w-full max-w-xl space-y-6">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                        size="sm"
                        onClick={() => setClicked((current) => !current)}
                    >
                        {clicked ? labels.done : labels.click}
                    </Button>
                    <Button
                        variant="secondary"
                        size="md"
                        onClick={() => setClicked((current) => !current)}
                    >
                        {lang === "fa" ? "ثانویه" : "Secondary"}
                    </Button>
                    <Button
                        variant="form"
                        size="lg"
                        radius="full"
                        onClick={() => setClicked((current) => !current)}
                    >
                        {lang === "fa" ? "فرم" : "Form"}
                    </Button>
                </div>
                <p className="text-center text-xs text-zinc-500" aria-live="polite">
                    {clicked
                        ? (lang === "fa" ? "تعامل با دکمه فعال است." : "Button interaction is active.")
                        : labels.buttonHint}
                </p>
            </div>
        );
    }

    if (slug === "input") {
        return (
            <div className="w-full max-w-md space-y-3">
                <Input
                    type="email"
                    name="email"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder={labels.email}
                    aria-label={labels.emailLabel}
                />
                <div className="grid gap-3 sm:grid-cols-2">
                    <Input
                        type="password"
                        placeholder={lang === "fa" ? "رمز عبور" : "Password"}
                        aria-label={lang === "fa" ? "رمز عبور" : "Password"}
                    />
                    <Input
                        placeholder={labels.disabled}
                        disabled
                        aria-label={labels.disabled}
                    />
                </div>
                <p className="text-xs text-zinc-500">
                    {value
                        ? (lang === "fa" ? `مقدار: ${value}` : `Value: ${value}`)
                        : (lang === "fa" ? "برای تست تایپ کنید." : "Type to test the input.")}
                </p>
            </div>
        );
    }

    if (slug === "textarea") {
        return (
            <div className="w-full max-w-md space-y-3">
                <Textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={labels.message}
                    aria-label={labels.messageLabel}
                    required
                />
                <div className="flex items-center justify-between gap-4 text-xs text-zinc-500">
                    <span>{labels.required}</span>
                    <span>{message.length} {lang === "fa" ? "کاراکتر" : "characters"}</span>
                </div>
            </div>
        );
    }

    if (slug === "form-field") {
        return (
            <div className="w-full max-w-md space-y-5">
                <FormField
                    label={labels.emailLabel}
                    htmlFor="component-form-field-preview-email"
                >
                    <Input
                        id="component-form-field-preview-email"
                        type="email"
                        name="email"
                        placeholder={labels.email}
                    />
                </FormField>
                <FormField
                    label={labels.messageLabel}
                    htmlFor="component-form-field-preview-message"
                >
                    <Textarea
                        id="component-form-field-preview-message"
                        name="message"
                        rows={4}
                        placeholder={labels.message}
                    />
                </FormField>
            </div>
        );
    }

    if (slug === "divider") {
        return (
            <div className="w-full max-w-xl space-y-5">
                <Divider />
                <Divider variant="gradient" direction="ltr" />
                <Divider variant="gradient" direction="rtl" />
                <p className="text-center text-xs text-zinc-500">{labels.dividerHint}</p>
            </div>
        );
    }

    return null;
}
