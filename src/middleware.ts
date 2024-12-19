import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protection des routes backoffice
  if (pathname.startsWith("/backoffice")) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/adminAuth/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      // Vérifier si c'est bien un admin
      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/adminAuth/login", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/adminAuth/login", request.url));
    }
  }

  // Protection des routes utilisateur (si vous en avez qui nécessitent une authentification)
  if (pathname.startsWith("/mon-compte")) {
    const token = request.cookies.get("user_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      // Vérifier si c'est bien un utilisateur
      if (payload.role !== "user") {
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // Redirection des utilisateurs déjà connectés
  if (pathname === "/auth/login" || pathname === "/auth/register") {
    const token = request.cookies.get("user_token")?.value;
    if (token) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {
        // Token invalide, on laisse l'accès aux pages de connexion/inscription
      }
    }
  }

  // Redirection des admins déjà connectés
  if (pathname === "/adminAuth/login" || pathname === "/adminAuth/register") {
    const token = request.cookies.get("token")?.value;
    if (token) {
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        if (payload.role === "admin") {
          return NextResponse.redirect(new URL("/backoffice", request.url));
        }
      } catch (error) {
        // Token invalide, on laisse l'accès aux pages de connexion/inscription
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/backoffice/:path*",
    "/mon-compte/:path*",
    "/auth/login",
    "/auth/register",
    "/adminAuth/login",
    "/adminAuth/register",
  ],
};
