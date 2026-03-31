import InscriptionForm from "@/src/components/sections/InscriptionForm";
import type { Metadata } from "next";

// Metadatos específicos para esta página (SEO)
export const metadata: Metadata = {
    title: "Inscripción y Contacto | DevOpsSec",
    description: "Agenda una asesoría para servicios de DevOps, Ciberseguridad y Desarrollo Web.",
};

export default function InscriptionPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-50 py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Comencemos a trabajar <span className="text-cyan-400">juntos</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Completa el formulario a continuación y me pondré en contacto contigo lo antes posible para analizar tu proyecto.
                    </p>
                </div>

                {/* Aquí insertamos el componente cliente que creamos arriba */}
                <InscriptionForm />
            </div>
        </main>
    );
}