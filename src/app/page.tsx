import Link from 'next/link';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/Services';

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
      <Hero/>

      {/* SERVICIOS SECTION */}
      <ServicesSection/>

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