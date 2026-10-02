export type ComponentCategory = "form" | "layout" | "feedback";

export type ComponentProp = {
    name: string;
    type: string;
    required: boolean;
    defaultValue?: string;
    description: {
        en: string;
        fa: string;
    };
};

export type ComponentUsageExample = {
    title: {
        en: string;
        fa: string;
    };
    code: string;
};

export type ComponentRegistryItem = {
    slug: string;
    category: ComponentCategory;
    name: {
        en: string;
        fa: string;
    };
    description: {
        en: string;
        fa: string;
    };
    props: readonly ComponentProp[];
    examples: readonly ComponentUsageExample[];
};

export type ComponentRegistry = readonly ComponentRegistryItem[];
