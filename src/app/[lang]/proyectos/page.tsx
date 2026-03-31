import { Suspense } from 'react';
import ProjectsGallery from '@/src/components/sections/ProjectsGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portafolio de Proyectos | DevOpsSec',
    description: 'Explora mis últimos proyectos de desarrollo web, automatización DevOps y ciberseguridad.',
};

export default function ProyectosPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-50 mb-4">
                    Mis <span className="text-cyan-400">Proyectos</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Explora implementaciones reales, arquitecturas y soluciones de software escalables.
                </p>
            </div>

            {/* Suspense es necesario porque ProjectsGallery lee parámetros de la URL */}
            <Suspense fallback={<div className="text-center text-cyan-400">Cargando proyectos...</div>}>
                <ProjectsGallery />
            </Suspense>
        </main>
    );
}