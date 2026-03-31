import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['es', 'en'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Ignorar las rutas de la API, archivos estáticos o imágenes
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Comprobar si la URL ya tiene un idioma (ej: /es/proyectos)
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // 3. Redirigir si no hay idioma
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    // Este matcher es el estándar recomendado por Vercel para i18n
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};