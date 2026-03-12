import Link from 'next/link';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500 selection:text-white">

      {/* HEADER / NAVEGACIÓN */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-cyan-400">
            Dev<span className="text-slate-100">Ops</span>Sec.
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#media" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Ingeniería de Software <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Segura y Escalable
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          Impulso la transformación digital de las empresas mediante desarrollo web de vanguardia, automatización de procesos (DevOps) y auditorías de ciberseguridad.
        </p>
        <div className="flex gap-4">
          <a href="#contacto" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
            Agendar Asesoría
          </a>
          <a href="#servicios" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
            Ver Servicios
          </a>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="bg-slate-900 py-24 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Soluciones Tecnológicas Integrales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Tarjeta de Servicio */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">DevOps & Cloud</h3>
              <p className="text-slate-400 text-sm">Despliegues automatizados (CI/CD), contenedores (Docker/Kubernetes) y gestión de infraestructura en AWS/GCP.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Desarrollo Web</h3>
              <p className="text-slate-400 text-sm">Creación de plataformas modernas, rápidas y optimizadas para SEO utilizando Next.js, React y arquitecturas Serverless.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Ciberseguridad</h3>
              <p className="text-slate-400 text-sm">Auditorías de código, pentesting de aplicaciones web y fortificación de servidores para proteger tus datos empresariales.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Automatización</h3>
              <p className="text-slate-400 text-sm">Scripts a medida (Python/Bash) para reducir tareas manuales, optimizando tiempo y recursos de tu equipo.</p>
            </div>

          </div>
        </div>
      </section>

      {/* VIDEO / MEDIA SECTION */}
      <section id="media" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6 text-center">Conoce Mi Trabajo</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Descubre cómo aplico las últimas tendencias en tecnología y marketing digital para escalar negocios reales.
        </p>

        {/* Contenedor de Video Responsivo */}
        <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/TU_ID_DE_VIDEO?si=TU_CODIGO"
            title="Presentación de Servicios"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </section>

      {/* FOOTER & SOCIALS */}
      <footer id="contacto" className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-bold tracking-tighter text-cyan-400 mb-2">
              DevOpsSec.
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} - Impulsando el futuro digital.</p>
          </div>

          <div className="flex gap-4">
            {/* Reemplaza '#' con tus enlaces reales */}
            <Link href="#" className="p-3 bg-slate-900 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all border border-slate-800">
              <span className="sr-only">LinkedIn</span>
              💼
            </Link>
            <Link href="#" className="p-3 bg-slate-900 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all border border-slate-800">
              <span className="sr-only">GitHub</span>
              🐙
            </Link>
            <Link href="#" className="p-3 bg-slate-900 rounded-full hover:bg-cyan-900 hover:text-cyan-400 transition-all border border-slate-800">
              <span className="sr-only">Twitter / X</span>
              🐦
            </Link>
          </div>

          <a href="mailto:tuemail@ejemplo.com" className="text-slate-300 hover:text-cyan-400 underline decoration-cyan-500/30 underline-offset-4 transition-colors">
            tuemail@ejemplo.com
          </a>
        </div>
      </footer>

    </main>
  );
}