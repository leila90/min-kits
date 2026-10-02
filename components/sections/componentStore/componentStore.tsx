import Link from "next/link";
import SectionTitle from "@/components/common/sectionTitle";
import Container from "@/components/ui/container";

type Product = {
    title: string;
    description: string;
    badge: string;
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

                <div className="overflow-hidden rounded-tl-4xl rounded-br-4xl bg-component-store-background">
                    <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="flex min-w-0 flex-col justify-between gap-8 border-b border-component-store-border p-8 md:p-12 lg:border-b-0 lg:border-e">
                            <div className="space-y-6">
                                <span className="inline-flex rounded-full border border-component-store-badge-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-component-store-badge">
                                    {dict.badge}
                                </span>

                                <h3 className="text-2xl font-semibold leading-tight text-component-store-heading md:text-3xl">
                                    {dict.intro}
                                </h3>
                            </div>

                            <Link
                                href={"/" + lang + "#contactUs"}
                                className="inline-flex w-fit items-center justify-center rounded-xl border border-component-store-cta-border px-6 py-3 text-sm font-semibold text-component-store-cta transition-colors duration-200 hover:bg-component-store-cta-hover hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-component-store-focus"
                            >
                                {dict.cta}
                            </Link>
                        </div>

                        <div className="grid min-w-0 md:grid-cols-3">
                            {dict.products.map((product, index) => (
                                <article
                                    key={product.title}
                                    className={[
                                        "flex min-w-0 flex-col p-6 md:p-8",
                                        index > 0 ? "border-t border-component-store-border md:border-t-0 md:border-s" : "",
                                    ].filter(Boolean).join(" ")}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-component-store-muted">
                                            0{index + 1}
                                        </span>
                                        <span className="rounded-full bg-component-store-badge-background px-3 py-1 text-xs font-medium text-component-store-badge">
                                            {product.badge}
                                        </span>
                                    </div>

                                    <div className="mt-10">
                                        <h4 className="text-xl font-semibold text-component-store-heading">
                                            {product.title}
                                        </h4>
                                        <p className="mt-3 text-sm leading-relaxed text-component-store-muted">
                                            {product.description}
                                        </p>
                                    </div>

                                    <ul className="mt-8 space-y-3 border-t border-component-store-border pt-6">
                                        {product.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-sm text-component-store-text"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-component-store-dot"
                                                />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
