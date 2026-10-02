import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLang, locales } from "@/app/i18n/config";

function getLocale(request: NextRequest) {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

    if (cookieLocale && isLang(cookieLocale)) {
        return cookieLocale;
    }

    const accept = request.headers.get("accept-language") ?? "";
    const preferred = accept
        .split(",")
        .map((part) => part.trim().split(";")[0].slice(0, 2).toLowerCase());

    return preferred.find(isLang) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // bypass for certbot
    if (pathname.startsWith("/.well-known")) {
        return NextResponse.next();
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
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
