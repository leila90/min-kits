import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/content/site";

function getLocale(request: NextRequest): string {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
        return cookieLocale;
    }

    const accept = request.headers.get("accept-language") ?? "";
    const preferred = accept
        .split(",")
        .map((part) => part.trim().split(";")[0].slice(0, 2).toLowerCase());

    return preferred.find((l) => (locales as readonly string[]).includes(l)) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // bypass for certbot
    if (pathname.startsWith("/.well-known")) {
        return NextResponse.next();
    }

    const pathnameHasLocale = locales.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    );

    if (!pathnameHasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${getLocale(request)}${pathname === "/" ? "" : pathname}`;
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
