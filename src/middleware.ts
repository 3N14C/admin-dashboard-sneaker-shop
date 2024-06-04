import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("admin-dashboard-token")?.value;

  if (!token && req.nextUrl.pathname.includes("/profile"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/users"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/leaderboard"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/order"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/products"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/sales-report"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/message"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/settings"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/favourite"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  if (!token && req.nextUrl.pathname.includes("/history"))
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));

  return NextResponse.next();
};

export const config = {
  //   matcher: ["/:path*"],
};
