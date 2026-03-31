import { ServiceItem } from '@/src/types';
import Link from 'next/link';

type ServicesProps = {
  lang: 'es' | 'en';
  dict: {
    title: string;
    viewProjectsLabel: string; // Coincide con el JSON
    items: ServiceItem[];
  };
};

export default function ServicesSection({ lang, dict }: ServicesProps) {
  // SALVAGUARDA: Si dict es undefined, no rompe la página
  if (!dict) return null;

  return (
    <section id="servicios" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título dinámico desde JSON */}
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-50">
          {dict.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {dict.items?.map((srv) => (
            <div key={srv.id} className="p-6 bg-slate-950 rounded-xl border border-slate-800 flex flex-col h-full">
              <div className="text-4xl mb-4">{srv.icon}</div>
              <h3 className="text-xl font-bold text-slate-50 mb-2">{srv.title}</h3>
              <p className="text-slate-400 text-sm mb-4 grow">{srv.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {srv.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className='mt-auto flex justify-center w-full'>
                <Link
                  href={`/${lang}/proyectos?categoria=${srv.id}`}
                  className="w-full text-center bg-slate-800 hover:bg-cyan-600 text-white py-2 rounded-lg transition-colors font-medium text-sm border border-slate-700 hover:border-cyan-500"
                >
                  {dict.viewProjectsLabel} {srv.title.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}