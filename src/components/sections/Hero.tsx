import Link from "next/link";

// 1. Definimos la forma exacta de los datos que recibirá el componente
type HeroProps = {
  dict: {
    title1: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
  };
};

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-extrabold text-slate-50 mb-6">
        {dict.title1} <span className="text-cyan-400">{dict.titleHighlight}</span>
      </h1>
      <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
        {dict.subtitle}
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/inscription" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
          {dict.cta}
        </Link>
      </div>
    </section>
  );
}