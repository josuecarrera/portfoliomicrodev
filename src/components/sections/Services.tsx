import { ServiceItem } from '@/src/types';

// Tus datos estructurados
const services: ServiceItem[] = [
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Arquitectura escalable, despliegues automatizados y orquestación de contenedores.',
    icon: '⚙️',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    id: 'cybersec',
    title: 'Ciberseguridad',
    description: 'Auditorías, monitorización y fortificación de infraestructuras IT.',
    icon: '🛡️',
    technologies: ['Wazuh', 'Security Onion', 'Pentesting']
  },
  {
    id: 'webdev',
    title: 'Desarrollo Web Full-Stack',
    description: 'Aplicaciones modernas, rápidas y conectadas a bases de datos robustas.',
    icon: '💻',
    technologies: ['Next.js', 'TypeScript', 'SQL Server', 'MySQL']
  }
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-50">Mis Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div key={srv.id} className="p-6 bg-slate-950 rounded-xl border border-slate-800">
              <div className="text-4xl mb-4">{srv.icon}</div>
              <h3 className="text-xl font-bold text-slate-50 mb-2">{srv.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{srv.description}</p>
              <div className="flex flex-wrap gap-2">
                {srv.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}