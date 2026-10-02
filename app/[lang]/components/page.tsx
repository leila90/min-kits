import Link from "next/link";
import {notFound} from "next/navigation";
import Container from "../../../components/ui/container";
import SectionTitle from "../../../components/common/sectionTitle";
import ComponentCatalogBrowser from "../../../components/sections/componentCatalog/componentCatalogBrowser";
import {getDictionary, isLang, type Lang} from "../../i18n";
import {componentRegistry} from "../../../components/registry";

type ComponentsPageProps = {
    params: Promise<{lang: string}>;
};

export async function generateMetadata({params}: ComponentsPageProps) {
    const {lang} = await params;

    if (!isLang(lang)) {
        return {};
    }

    const copy = (await getDictionary(lang)).componentsCatalog;                    <ComponentCatalogBrowser
                        lang={lang}
                        registry={componentRegistry}
                        copy={{
                            viewComponent: copy.viewComponent,
                            searchPlaceholder: copy.searchPlaceholder,
                            allCategories: copy.allCategories,
                            noResults: copy.noResults,
                        }}
                    />nk";
import {notFound} from "next/navigation";
import Container from "../../../components/ui/container";
import SectionTitle from "../../../components/common/sectionTitle";
import ComponentCatalogBrowser from "../../../components/sections/componentCatalog/componentCatalogBrowser";
import {getDictionary, isLang, type Lang} from "../../i18n";
import {componentRegistry} from "../../../components/registry";

type ComponentsPageProps = {
    params: Promise<{lang: string}>;
};

export async function generateMetadata({params}: ComponentsPageProps) {
    const {lang} = await params;

    if (!isLang(lang)) {
        return {};
    }

    const copy = (await getDictionary(lang)).componentsCatalog;
