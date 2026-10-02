export type ComponentCategory = "form" | "layout" | "feedback";

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
};

export type ComponentRegistry = readonly ComponentRegistryItem[];
