import type {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://vira-co.com"),
    title: "MinKits Team",
    description: "",
    alternates: {
        canonical: "/",
    },
};

export default function BlogLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}