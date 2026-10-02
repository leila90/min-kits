    if (!component) {
        notFound();
    }

    const copy = (await getDictionary(lang)).componentsCatalog;
    const source = getComponentSource(component);
    const componentIndex = componentRegistry.findIndex((item) => item.slug === component.slug);
    const categoryLabel = {
        form: lang === "fa" ? "فرم" : "Form",
        layout: lang === "fa" ? "چیدمان" : "Layout",
        feedback: lang === "fa" ? "بازخورد" : "Feedback",
    }[component.category];

    return (