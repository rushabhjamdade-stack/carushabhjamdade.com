import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// While the site is in "Coming Soon" mode, redirect every route back to "/".
// Static assets, Next internals, and the favicon are allowed through.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAllowed =
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    /\.(png|jpg|jpeg|svg|webp|gif|ico|woff2?|ttf|otf|css|js|map|txt|xml)$/i.test(
      pathname
    );

  if (isAllowed) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
