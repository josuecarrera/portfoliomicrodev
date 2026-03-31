"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
    const pathName = usePathname();
    const searchParams = useSearchParams();

    // Extraemos si estamos en /es o /en
    const currentLang = pathName.split('/')[1] === 'en' ? 'en' : 'es';
    const targetLang = currentLang === 'es' ? 'en' : 'es';

    // Construimos la nueva URL reemplazando el idioma
    const redirectTarget = () => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = targetLang;
        // return segments.join('/');
        if (segments[1] === 'es' || segments[1] === 'en') {
            segments[1] = targetLang;
        } else {
            segments.splice(1, 0, targetLang)
        }

        let newUrl = segments.join('/');

        const search = searchParams.toString();
        if (search) {
            newUrl += `?${search}`
        }
        return newUrl;
    };

    return (
        <Link
            href={redirectTarget()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-colors text-sm font-bold text-slate-300"
            aria-label={`Cambiar idioma a ${targetLang.toUpperCase()}`}
        >
            {targetLang.toUpperCase()}
        </Link>
    );
}