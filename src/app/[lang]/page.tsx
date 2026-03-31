import Link from 'next/link';
import Hero from '@/src/components/sections/Hero';
import ServicesSection from '@/src/components/sections/Services';
import { getDictionary } from '@/src/lib/dictionaries';
import MyWorkYT from '@/src/components/sections/MyWorkYT';

type Props = {
  params: Promise<{ lang: 'es' | 'en' }>;
};

export default async function Portfolio({ params }: Props) {

  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500 selection:text-white">

      {/* HERO SECTION */}
      <Hero dict={dict.hero} />

      {/* SERVICIOS SECTION */}
      <ServicesSection lang={lang} dict={dict.servicesSection} />

      {/* VIDEO / MEDIA SECTION */}
      <MyWorkYT dict={dict.home} />

      {/* FOOTER & SOCIALS */}
      <footer id="contacto" className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-bold tracking-tighter text-cyan-400 mb-2">
              DevOpsSec.
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} - {dict.home.footerTagline}</p>
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

          <a href="mailto:josuecarrera05@outlook.com" className="text-slate-300 hover:text-cyan-400 underline decoration-cyan-500/30 underline-offset-4 transition-colors">
            josuecarrera05@outlook.com
          </a>
        </div>
      </footer>

    </main>
  );
}