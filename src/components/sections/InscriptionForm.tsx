"use client";

import { useState } from "react";
import type { ContactFormData } from "@/src/types";

export default function InscriptionForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({ type: "", text: "" });

        // Capturar los datos del formulario
        const formData = new FormData(e.currentTarget);
        const data: ContactFormData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            serviceOfInterest: formData.get("serviceOfInterest") as string,
            message: formData.get("message") as string,
        };

        try {
            // Enviar los datos a nuestra API route
            const response = await fetch("/api/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage({ type: "success", text: "¡Datos enviados correctamente! Me pondré en contacto contigo pronto." });
                // Limpiar el formulario
                (e.target as HTMLFormElement).reset();
            } else {
                setStatusMessage({ type: "error", text: result.error || "Ocurrió un error al enviar los datos." });
            }
        } catch (error) {
            setStatusMessage({ type: "error", text: "Error de conexión con el servidor." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 gap-6">

                {/* Nombre */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Ej. Juan Pérez"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="tu@email.com"
                    />
                </div>

                {/* Servicio de Interés */}
                <div>
                    <label htmlFor="serviceOfInterest" className="block text-sm font-medium text-slate-300 mb-2">Servicio de interés</label>
                    <select
                        id="serviceOfInterest"
                        name="serviceOfInterest"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                        <option value="">Selecciona un servicio...</option>
                        <option value="DevOps & Cloud">DevOps & Cloud</option>
                        <option value="Desarrollo Web">Desarrollo Web</option>
                        <option value="Ciberseguridad">Ciberseguridad</option>
                        <option value="Automatización">Automatización</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                {/* Mensaje */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Cuéntame sobre tu proyecto</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                        placeholder="Detalles sobre lo que necesitas..."
                    ></textarea>
                </div>

                {/* Botón de Enviar */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                    {isSubmitting ? "Enviando datos..." : "Enviar Solicitud"}
                </button>

                {/* Mensajes de feedback */}
                {statusMessage.text && (
                    <div className={`p-4 rounded-lg mt-4 text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-red-900/30 text-red-400 border border-red-800'}`}>
                        {statusMessage.text}
                    </div>
                )}
            </div>
        </form>
    );
}