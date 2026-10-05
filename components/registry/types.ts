export const componentCategories = ["form", "layout", "feedback", "navigation"] as const;

export type ComponentCategory = (typeof componentCategories)[number];

export const componentSlugs = ["button", "input", "textarea", "form-field", "divider", "badge", "card", "alert", "checkbox", "radio", "select", "switch", "tabs", "tooltip", "modal"] as const;

export type ComponentSlug = (typeof componentSlugs)[number];

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
    slug: ComponentSlug;
    /** Path of the real component file, relative to the project root. */
    sourceFile: string;
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
