"use client";

import {useId, useState, type ComponentType} from "react";
import type {Messages} from "@/app/i18n/messages";
import type {ComponentSlug} from "@/components/registry";
import {Alert, Badge, Button, Card, Checkbox, Divider, FormField, Input, Modal, Radio, Select, Switch, Tabs, Textarea, Tooltip} from "@/components/ui";

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

function BadgeDemo() {
    return <div className="flex flex-wrap items-center justify-center gap-3"><Badge>New</Badge><Badge variant="dark">Stable</Badge><Badge variant="accent">Coming soon</Badge></div>;
}
function CardDemo({copy}: PreviewProps) {
    return <Card className="w-full max-w-sm"><p className="font-semibold text-zinc-900">{copy.buttonHint}</p><p className="mt-2 text-sm text-zinc-500">{copy.buttonHint}</p></Card>;
}
function AlertDemo() {
    return <div className="w-full max-w-md space-y-3"><Alert variant="info">This is an informational message.</Alert><Alert variant="success">Saved successfully.</Alert></div>;
}
function CheckboxDemo() {
    return <label className="flex items-center gap-3 text-sm text-zinc-700"><Checkbox defaultChecked /> Accept terms</label>;
}
function RadioDemo() {
    return <div className="space-y-3 text-sm text-zinc-700"><label className="flex items-center gap-3"><Radio name="demo-plan" value="starter" defaultChecked /> Starter</label><label className="flex items-center gap-3"><Radio name="demo-plan" value="pro" /> Pro</label></div>;
}
function SelectDemo() {
    return <Select className="max-w-xs" defaultValue="react" aria-label="Technology"><option value="react">React</option><option value="next">Next.js</option><option value="tailwind">Tailwind CSS</option></Select>;
}
function SwitchDemo() {
    const [enabled, setEnabled] = useState(true);
    return <div className="flex items-center gap-3 text-sm text-zinc-700"><Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Enable feature" /><span>{enabled ? "Enabled" : "Disabled"}</span></div>;
}
function TabsDemo() {
    return <Tabs items={[{id: "preview", label: "Preview", content: <p className="text-sm text-zinc-600">Preview content.</p>}, {id: "code", label: "Code", content: <p className="text-sm text-zinc-600">Source content.</p>}]} />;
}
function TooltipDemo() {
    return <Tooltip content="More information"><Button variant="secondary" aria-label="More information">?</Button></Tooltip>;
}
function ModalDemo() {
    const [open, setOpen] = useState(false);
    return <><Button onClick={() => setOpen(true)}>Open dialog</Button><Modal open={open} onClose={setOpen} title="MinKits dialog"><p className="text-sm text-zinc-600">Accessible dialog content.</p><Button className="mt-5" onClick={() => setOpen(false)}>Close</Button></Modal></>;
}

/** Full interactive demo shown on the component detail page. */
export const demoPreviews: Record<ComponentSlug, ComponentType<PreviewProps>> = {
    button: ButtonDemo,
    input: InputDemo,
    textarea: TextareaDemo,
    "form-field": FormFieldDemo,
    divider: DividerDemo,
    badge: BadgeDemo,
    card: CardDemo,
    alert: AlertDemo,
    checkbox: CheckboxDemo,
    radio: RadioDemo,
    select: SelectDemo,
    switch: SwitchDemo,
    tabs: TabsDemo,
    tooltip: TooltipDemo,
    modal: ModalDemo,
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
    badge: () => <Badge>Badge</Badge>,
    card: () => <Card className="w-full"><div className="h-10 rounded-lg bg-zinc-100" /></Card>,
    alert: () => <Alert>Notice</Alert>,
    checkbox: () => <Checkbox tabIndex={-1} aria-hidden="true" defaultChecked />,
    radio: () => <Radio tabIndex={-1} aria-hidden="true" defaultChecked />,
    select: () => <Select tabIndex={-1} aria-hidden="true" defaultValue="one"><option value="one">Select</option></Select>,
    switch: () => <Switch tabIndex={-1} aria-hidden="true" defaultChecked />,
    tabs: () => <Tabs items={[{id: "one", label: "One", content: <span />}, {id: "two", label: "Two", content: <span />}]} />,
    tooltip: () => <Tooltip content="Hint"><Button size="sm" tabIndex={-1}>?</Button></Tooltip>,
    modal: () => <Button size="sm" tabIndex={-1}>Open</Button>,
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
