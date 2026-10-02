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

export type ComponentUsageExample = {\n    title: {\n        en: string;\n        fa: string;\n    };\n    code: string;\n};\n\nexport type ComponentRegistryItem = {
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
};

export type ComponentRegistry = readonly ComponentRegistryItem[];
