import { type NextRequest, NextResponse } from "next/server";

const lang = ["fa", "en"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 🚨 مهم: bypass برای certbot
    if (pathname.startsWith("/.well-known")) {
        return NextResponse.next();
    }

    const pathnameHasLocale = lang.some(l =>
        pathname.startsWith(`/${l}`)
    );

    if (!pathnameHasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${defaultLocale}${pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};