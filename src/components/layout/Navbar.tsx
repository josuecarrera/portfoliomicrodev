"use client";

import Link from 'next/link';
import LanguageSwitcher from '@/src/components/ui/LanguageSwitcher';
import { usePathname } from 'next/navigation';

// 1. Definimos la estructura del diccionario para evitar el "any"
interface NavDict {
    services: string;
    projects: string;
    contact: string;
}

// 2. Aplicamos el tipo a las props del componente
interface NavbarProps {
    dict: NavDict;
}


// Como este es un Client Component, podemos pasarle los textos traducidos como props
export default function Navbar({ dict } : NavbarProps ) {
    const pathName = usePathname();
    // Extraemos el idioma actual para construir los enlaces correctos
    const currentLang = pathName.split('/')[1] || 'es';

    if (!dict) return null;

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo que siempre redirige a la página principal en el idioma actual */}
                <Link href={`/${currentLang}`} className="text-xl font-bold tracking-tighter text-cyan-400">
                    Dev<span className="text-slate-100">Ops</span>Sec.
                </Link>

                {/* Enlaces de navegación */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                    <Link href={`/${currentLang}#servicios`} className="hover:text-cyan-400 transition-colors">
                        {dict.services}
                    </Link>
                    <Link href={`/${currentLang}/proyectos`} className="hover:text-cyan-400 transition-colors">
                        {dict.projects}
                    </Link>
                    <Link href={`/${currentLang}/inscription`} className="hover:text-cyan-400 transition-colors">
                        {dict.contact}
                    </Link>

                    {/* El botón de cambio de idioma */}
                    <div className="ml-4 border-l border-slate-700 pl-6">
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* Aquí podrías agregar un menú hamburguesa para móviles después */}
            </div>
        </header>
    );
}