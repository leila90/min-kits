import Link from "next/link";
import type {Lang} from "@/app/i18n/config";
import type {Messages} from "@/app/i18n/messages";
import Container from "@/components/ui/container";

type Props = {
    lang: Lang;
    dict: Messages["breadcrumbs"];
    page: "about" | "blog" | "components";
    currentLabel?: string;
};

export default function Breadcrumb({lang, dict, page, currentLabel}: Props) {
    const pageLabel = page === "about"
        ? dict.about
        : page === "blog"
            ? dict.blog
            : dict.components;

    return (
        <section className="mt-3 mb-8 scroll-mt-36 md:mt-4 md:mb-10 md:scroll-mt-44">
            <Container>
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 whitespace-nowrap border-y border-breadcrumb-border py-2">
                        <li>
                            <Link href={"/" + lang} className="text-sm text-breadcrumb-muted">
                                {dict.home}
                            </Link>
                        </li>
                        <li aria-hidden>›</li>
                        <li>
                            <Link
                                href={"/" + lang + "/" + page}
                                className="text-sm text-breadcrumb-muted transition-colors hover:text-breadcrumb-text"
                            >
                                {pageLabel}
                            </Link>
                        </li>
                        {currentLabel && (
                            <>
                                <li aria-hidden>›</li>
                                <li aria-current="page" className="min-w-0 truncate text-sm font-semibold text-breadcrumb-text">
                                    {currentLabel}
                                </li>
                            </>
                        )}
                    </ol>
                </nav>
            </Container>
        </section>
    );
}
