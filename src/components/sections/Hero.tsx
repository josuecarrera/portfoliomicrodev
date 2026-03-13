import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-extrabold text-slate-50 mb-6">
        Ingeniería de Software y <span className="text-cyan-400">DevOps</span>
      </h1>
      <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
        Especialista en automatización, infraestructura cloud y ciberseguridad para escalar tu negocio de forma segura.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/inscription" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
          Agendar Asesoria
        </Link>
      </div>
    </section>
  );
}