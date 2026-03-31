"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Base de datos simulada de tus proyectos (puedes mover esto a tu base de datos después)
const allProjects = [
    { id: 1, title: 'Portal Corporativo', category: 'webdev', desc: 'Desarrollo Full-Stack con Next.js, Vercel, Supabase y Prisma.', tags: ['Next.js', 'Supabase', 'React'] },
    { id: 2, title: 'Pipeline CI/CD', category: 'devops', desc: 'Automatización de despliegues con Docker y Kubernetes en entornos de producción.', tags: ['Docker', 'Kubernetes', 'CI/CD'] },
    { id: 3, title: 'Monitorización SIEM', category: 'cybersec', desc: 'Implementación de Security Onion y Wazuh para análisis de vulnerabilidades.', tags: ['Wazuh', 'Security Onion', 'Linux'] },
    { id: 4, title: 'Motor de Web Scraping', category: 'webdev', desc: 'Extracción de datos automatizada para inteligencia de negocios.', tags: ['Scraping', 'Python', 'Next.js'] },
    { id: 5, title: 'Infraestructura Cloud', category: 'devops', desc: 'Aprovisionamiento de servidores utilizando Terraform y AWS.', tags: ['Terraform', 'AWS', 'IaC'] },
    { id: 6, title: 'Dashboard de BI', category: 'webdev', desc: 'Integración de SQL Server y PowerBI para visualización de datos.', tags: ['SQL Server', 'PowerBI', 'Data'] },
    { id: 7, title: 'Auditoría de Redes', category: 'cybersec', desc: 'Análisis de tráfico, configuración de VLANs y hardening de routers Cisco.', tags: ['Cisco', 'VLAN', 'Networking'] },
];

const ITEMS_PER_PAGE = 5;

export default function ProjectsGallery() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('categoria');

    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(categoryQuery || 'todos');
    const [currentPage, setCurrentPage] = useState(1);

    // Lógica de filtrado y búsqueda
    const filteredProjects = allProjects.filter((project) => {
        const matchesCategory = activeCategory === 'todos' || project.category === activeCategory;
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = project.title.toLowerCase().includes(searchLower) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
            project.desc.toLowerCase().includes(searchLower);

        return matchesCategory && matchesSearch;
    });

    // Lógica de paginación
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Funciones de control
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(1); // Resetear a la página 1 al cambiar categoría
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Buscador y Filtros */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                <input
                    type="text"
                    placeholder="Buscar por tecnología, nombre..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    className="w-full md:w-96 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500"
                />

                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {['todos', 'webdev', 'devops', 'cybersec'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat
                                    ? 'bg-cyan-600 text-white'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1).replace('webdev', 'Desarrollo').replace('devops', 'DevOps').replace('cybersec', 'Ciberseguridad')}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid de Proyectos */}
            {currentProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {currentProjects.map((project) => (
                        <div key={project.id} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
                            <div className="h-40 bg-slate-950 rounded-lg mb-4 flex items-center justify-center border border-slate-800">
                                <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">Vista Previa</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-50 mb-2">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-900 rounded-xl border border-slate-800 mb-10">
                    <p className="text-slate-400 text-lg">No se encontraron proyectos con esos criterios.</p>
                </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700"
                    >
                        Anterior
                    </button>
                    <span className="text-slate-400 text-sm">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700"
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}