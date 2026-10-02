import Link from "next/link";
import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";

type Product = {
    title: string;
    description: string;
    badge: string;
    action: string;
    href: string;
    features: string[];
};

type Props = {
    lang: "fa" | "en";
    dict: {
        title: string;
        subtitle: string;
        badge: string;
        intro: string;
        cta: string;
        products: Product[];
    };
};

const stageLabels = [
    ["Button", "Input", "Badge"],
    ["Hero", "Pricing", "FAQ"],
    ["Sidebar", "Cards", "Table"],
];

function ComponentStage({index}: {index: number}) {
    if (index === 0) {
        return (
            <div className="relative h-64 overflow-hidden rounded-[2rem] border border-component-store-stage-border bg-component-store-stage p-5 md:h-72 md:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0_/_5%)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0_/_5%)_1px,transparent_1px)] bg-size-[24px_24px]" />
                <div className="relative flex h-full items-center justify-center">
                    <div className="relative w-full max-w-md">
                        <div className="absolute -start-2 top-8 h-20 w-20 rounded-2xl border border-component-store-stage-line bg-component-store-stage-shape-surface [animation:component-store-float_5s_ease-in-out_infinite] md:-start-5">
                            <span className="absolute inset-x-4 top-4 h-2 rounded-full bg-component-store-stage-shape" />
                            <span className="absolute inset-x-4 top-9 h-2 w-8 rounded-full bg-component-store-stage-soft" />
                        </div>
                        <div className="relative mx-auto w-52 rounded-2xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-4 shadow-[0_20px_50px_rgb(0_0_0_/_10%)] [animation:component-store-float_6s_ease-in-out_infinite] md:w-60">
                            <div className="flex items-center justify-between">
                                <span className="h-2 w-16 rounded-full bg-component-store-stage-shape" />
                                <span className="h-6 w-6 rounded-full border border-component-store-stage-line" />
                            </div>
                            <div className="mt-5 h-9 rounded-lg border border-component-store-stage-line bg-component-store-stage-soft" />
                            <div className="mt-3 flex gap-2">
                                <span className="h-9 flex-1 rounded-lg bg-component-store-stage-shape" />
                                <span className="h-9 w-16 rounded-lg border border-component-store-stage-line" />
                            </div>
                        </div>
                        <div className="absolute -end-1 bottom-4 flex h-16 w-24 items-end gap-1 rounded-2xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-3 [animation:component-store-float_4s_ease-in-out_1s_infinite] md:-end-6">
                            <span className="h-5 w-2 rounded-full bg-component-store-stage-soft" />
                            <span className="h-8 w-2 rounded-full bg-component-store-stage-shape" />
                            <span className="h-4 w-2 rounded-full bg-component-store-stage-soft" />
                            <span className="h-10 w-2 rounded-full bg-component-store-stage-shape" />
                        </div>
                    </div>
                </div>
                <span className="absolute end-5 top-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-component-store-stage-muted">
                    {stageLabels[0].join(" · ")}
                </span>
            </div>
        );
    }

    if (index === 1) {
        return (
            <div className="relative h-64 overflow-hidden rounded-[2rem] border border-component-store-stage-border bg-component-store-stage p-5 md:h-72 md:p-7">
                <div className="absolute inset-x-0 top-1/2 h-px bg-component-store-stage-line" />
                <div className="absolute start-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-component-store-stage-line [animation:component-store-spin_18s_linear_infinite]" />
                <div className="absolute start-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-component-store-stage-line [animation:component-store-spin_12s_linear_infinite_reverse]" />
                <div className="relative flex h-full items-center justify-center">
                    <div className="w-full max-w-md rounded-2xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-4 shadow-[0_20px_50px_rgb(0_0_0_/_9%)]">
                        <div className="flex gap-2 border-b border-component-store-stage-line pb-3">
                            <span className="h-2 w-12 rounded-full bg-component-store-stage-shape" />
                            <span className="h-2 w-16 rounded-full bg-component-store-stage-soft" />
                            <span className="ms-auto h-2 w-8 rounded-full bg-component-store-stage-soft" />
                        </div>
                        <div className="grid grid-cols-[1.25fr_0.75fr] gap-3 pt-4">
                            <div className="space-y-3">
                                <div className="h-12 rounded-xl bg-component-store-stage-soft" />
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-20 rounded-xl border border-component-store-stage-line" />
                                    <div className="h-20 rounded-xl border border-component-store-stage-line" />
                                </div>
                            </div>
                            <div className="rounded-xl border border-component-store-stage-line p-3">
                                <span className="block h-2 w-12 rounded-full bg-component-store-stage-shape" />
                                <span className="mt-4 block h-16 rounded-lg bg-component-store-stage-soft" />
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute end-5 top-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-component-store-stage-muted">
                    {stageLabels[1].join(" · ")}
                </span>
            </div>
        );
    }

    return (
        <div className="relative h-64 overflow-hidden rounded-[2rem] border border-component-store-stage-border bg-component-store-stage p-5 md:h-72 md:p-7">
            <div className="absolute inset-y-0 start-1/3 w-px bg-component-store-stage-line" />
            <div className="absolute inset-x-0 top-1/3 h-px bg-component-store-stage-line" />
            <div className="relative grid h-full grid-cols-[0.35fr_0.65fr] gap-3">
                <div className="rounded-xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-3">
                    <span className="block h-2 w-10 rounded-full bg-component-store-stage-shape" />
                    <div className="mt-6 space-y-3">
                        <span className="block h-7 rounded-lg bg-component-store-stage-soft" />
                        <span className="block h-7 rounded-lg border border-component-store-stage-line" />
                        <span className="block h-7 rounded-lg border border-component-store-stage-line" />
                        <span className="block h-7 w-3/4 rounded-lg border border-component-store-stage-line" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-3 [animation:component-store-pulse_5s_ease-in-out_infinite]">
                        <span className="block h-2 w-10 rounded-full bg-component-store-stage-shape" />
                        <span className="mt-5 block h-12 rounded-lg bg-component-store-stage-soft" />
                    </div>
                    <div className="rounded-xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-3 [animation:component-store-pulse_5s_ease-in-out_1s_infinite]">
                        <span className="block h-2 w-8 rounded-full bg-component-store-stage-shape" />
                        <span className="mt-5 block h-12 rounded-lg border border-component-store-stage-line" />
                    </div>
                    <div className="col-span-2 rounded-xl border border-component-store-stage-line bg-component-store-stage-shape-surface p-3 [animation:component-store-float_6s_ease-in-out_0.5s_infinite]">
                        <div className="flex items-end gap-1">
                            <span className="h-8 w-1/6 rounded-t bg-component-store-stage-soft" />
                            <span className="h-12 w-1/6 rounded-t bg-component-store-stage-shape" />
                            <span className="h-10 w-1/6 rounded-t bg-component-store-stage-soft" />
                            <span className="h-16 w-1/6 rounded-t bg-component-store-stage-shape" />
                            <span className="h-11 w-1/6 rounded-t bg-component-store-stage-soft" />
                            <span className="h-14 w-1/6 rounded-t bg-component-store-stage-shape" />
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute end-5 top-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-component-store-stage-muted">
                {stageLabels[2].join(" · ")}
            </span>
        </div>
    );
}

export default function ComponentStore({lang, dict}: Props) {
    return (
        <section
            id="component-store"
            className="scroll-mt-36 py-16 md:scroll-mt-44 md:py-20"
        >
            <Container>
                <SectionTitle
                    brand="MinKits Store"
                    title={dict.title}
                    subTitle={dict.subtitle}
                    lang={lang}
                />

                <div className="mt-12">
                    <p className="max-w-2xl text-base leading-7 text-component-store-intro md:text-lg">
                        {dict.intro}
                    </p>

                    <div className="mt-10 divide-y divide-component-store-divider border-y border-component-store-divider">
                        {dict.products.map((product, index) => (
                            <article
                                key={product.title}
                                className="group grid min-w-0 gap-8 py-10 md:py-12 lg:grid-cols-2 lg:items-center lg:gap-14"
                            >
                                <div className={lang === "fa" ? "flex h-full flex-col lg:order-1 lg:text-right" : "flex h-full flex-col lg:order-2 lg:text-left"}>
                                    <div className="flex items-center gap-4 lg:justify-start">
                                        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-component-store-index">
                                            0{index + 1}
                                        </span>
                                        <span className="h-px w-12 bg-component-store-index-line transition-all duration-500 group-hover:w-20" />
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-component-store-badge">
                                            {product.badge}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-component-store-heading md:text-3xl">
                                        {product.title}
                                    </h3>

                                    <p className="mt-4 max-w-lg text-base font-medium leading-7 text-component-store-muted md:text-[17px]">
                                        {product.description}
                                    </p>

                                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                                        {product.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-xs font-medium text-component-store-text md:text-sm"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-component-store-dot" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/${lang}${product.href}`}
                                        aria-label={product.action}
                                        className="group/button mt-auto inline-flex w-fit self-end items-center gap-3 border-b-2 border-component-store-cta pb-2 pt-7 text-sm font-semibold text-component-store-cta transition-all duration-200 hover:gap-4 hover:text-component-store-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-component-store-focus"
                                    >
                                        <span>{product.action}</span>
                                        <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                                            {lang === "fa" ? "←" : "→"}
                                        </span>
                                    </Link>
                                </div>

                                <div className={lang === "fa" ? "lg:order-2" : "lg:order-1"}>
                                    <ComponentStage index={index} />
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-5 border-b border-component-store-divider pb-8 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm text-component-store-muted">
                            {dict.badge}
                        </span>
                        <Link
                            href={"/" + lang + "#contactUs"}
                            className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-component-store-cta transition-colors duration-200 hover:text-component-store-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-component-store-focus"
                        >
                            <span>{dict.cta}</span>
                            <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                {lang === "fa" ? "←" : "→"}
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
