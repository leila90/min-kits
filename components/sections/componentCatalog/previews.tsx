"use client";

import {useId, useState, type ComponentType} from "react";
import type {Messages} from "@/app/i18n/messages";
import type {ComponentSlug} from "@/components/registry";
import {Button, Divider, FormField, Input, Textarea} from "@/components/ui";

export type DemoCopy = Messages["componentsCatalog"]["demo"];

export type PreviewProps = {
    copy: DemoCopy;
    /** Text direction of the current locale, used for the directional divider. */
    dir: "ltr" | "rtl";
};

function ButtonDemo({copy}: PreviewProps) {
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked((current) => !current);

    return (
        <div className="w-full max-w-xl space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Button size="sm" onClick={toggle}>
                    {clicked ? copy.done : copy.click}
                </Button>
                <Button variant="secondary" size="md" onClick={toggle}>
                    {copy.secondary}
                </Button>
                <Button variant="form" size="lg" radius="full" onClick={toggle}>
                    {copy.formButton}
                </Button>
            </div>
            <p className="text-center text-xs text-zinc-500" aria-live="polite">
                {clicked ? copy.buttonActive : copy.buttonHint}
            </p>
        </div>
    );
}

function InputDemo({copy}: PreviewProps) {
    const [value, setValue] = useState("");

    return (
        <div className="w-full max-w-md space-y-3">
            <Input
                type="email"
                name="email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={copy.emailPlaceholder}
                aria-label={copy.emailLabel}
            />
            <div className="grid gap-3 sm:grid-cols-2">
                <Input type="password" placeholder={copy.passwordLabel} aria-label={copy.passwordLabel} />
                <Input placeholder={copy.disabledInput} disabled aria-label={copy.disabledInput} />
            </div>
            <p className="text-xs text-zinc-500">
                {value ? `${copy.valuePrefix} ${value}` : copy.typeToTest}
            </p>
        </div>
    );
}

function TextareaDemo({copy}: PreviewProps) {
    const [message, setMessage] = useState("");

    return (
        <div className="w-full max-w-md space-y-3">
            <Textarea
                name="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={copy.messagePlaceholder}
                aria-label={copy.messageLabel}
                required
            />
            <div className="flex items-center justify-between gap-4 text-xs text-zinc-500">
                <span>{copy.requiredField}</span>
                <span>
                    {message.length} {copy.characters}
                </span>
            </div>
        </div>
    );
}

function FormFieldDemo({copy}: PreviewProps) {
    const id = useId();
    const emailId = `${id}-email`;
    const messageId = `${id}-message`;

    return (
        <div className="w-full max-w-md space-y-5">
            <FormField label={copy.emailLabel} htmlFor={emailId}>
                <Input id={emailId} type="email" name="email" placeholder={copy.emailPlaceholder} />
            </FormField>
            <FormField label={copy.messageLabel} htmlFor={messageId}>
                <Textarea id={messageId} name="message" rows={4} placeholder={copy.messagePlaceholder} />
            </FormField>
        </div>
    );
}

function DividerDemo({copy}: PreviewProps) {
    return (
        <div className="w-full max-w-xl space-y-5">
            <Divider />
            <Divider variant="gradient" direction="ltr" />
            <Divider variant="gradient" direction="rtl" />
            <p className="text-center text-xs text-zinc-500">{copy.dividerHint}</p>
        </div>
    );
}

/** Full interactive demo shown on the component detail page. */
export const demoPreviews: Record<ComponentSlug, ComponentType<PreviewProps>> = {
    button: ButtonDemo,
    input: InputDemo,
    textarea: TextareaDemo,
    "form-field": FormFieldDemo,
    divider: DividerDemo,
};

/** Small static thumbnails shown on the catalog cards. */
export const cardPreviews: Record<ComponentSlug, ComponentType<PreviewProps>> = {
    button: ({copy}) => (
        <Button size="sm" radius="full" tabIndex={-1}>
            {copy.continueAction}
        </Button>
    ),
    input: ({copy}) => <Input tabIndex={-1} aria-hidden="true" placeholder={copy.inputSample} />,
    textarea: ({copy}) => <Textarea tabIndex={-1} aria-hidden="true" placeholder={copy.textareaSample} />,
    "form-field": ({copy}) => (
        <FormField label={copy.nameLabel}>
            <Input tabIndex={-1} aria-hidden="true" />
        </FormField>
    ),
    divider: ({dir}) => <Divider variant="gradient" direction={dir} />,
};

type ComponentPreviewProps = PreviewProps & {slug: ComponentSlug};

export function ComponentPreview({slug, ...props}: ComponentPreviewProps) {
    const Demo = demoPreviews[slug];

    return <Demo {...props} />;
}

export function ComponentCardPreview({slug, ...props}: ComponentPreviewProps) {
    const Preview = cardPreviews[slug];

    return <Preview {...props} />;
}
