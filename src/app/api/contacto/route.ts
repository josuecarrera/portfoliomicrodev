import { NextResponse } from "next/server";
import type { ContactFormData } from "@/src/types";
import { Resend } from "resend";
import { supabase } from "@/src/lib/supabase";

// Inicializamos Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();

        // Validación inicial
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: "Faltan campos obligatorios en el formulario" },
                { status: 400 }
            );
        }

        console.log("Nuevo prospecto recibido de:", body.name);

        // 1. GUARDAR EN SUPABASE
        const { error: dbError } = await supabase
            .from('prospectos')
            .insert([
                {
                    name: body.name,
                    email: body.email,
                    message: body.message,
                    service_interest: body.serviceOfInterest || 'General'
                }
            ]);

        if (dbError) {
            console.error("Error guardando en Supabase:", dbError);
            return NextResponse.json(
                { error: "Error al guardar el contacto en la base de datos" },
                { status: 500 }
            );
        }

        // 2. ENVIAR CORREO CON RESEND
        const { error: emailError } = await resend.emails.send({
            // Recuerda cambiar 'onboarding@resend.dev' por 'contacto@tudominio.com' cuando verifiques tu dominio
            from: 'Portfolio <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL as string],
            subject: `Nuevo lead de ${body.name} - Interés: ${body.serviceOfInterest || 'General'}`,
            html: `
                <h2>Nuevo contacto desde tu Portfolio</h2>
                <p><strong>Nombre:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Servicio de interés:</strong> ${body.serviceOfInterest || 'No especificado'}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${body.message}</p>
            `,
        });

        if (emailError) {
            console.error("Error enviando correo con Resend:", emailError);
            // Nota: No retornamos error 500 aquí para que el frontend muestre éxito, 
            // ya que lo más importante (guardar en la base de datos) sí funcionó.
        }

        // 3. RESPUESTA DE ÉXITO AL FRONTEND
        return NextResponse.json(
            { message: "Mensaje recibido. Me pondré en contacto pronto" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error en el endpoint de contacto", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}