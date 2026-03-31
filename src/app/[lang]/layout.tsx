import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDictionary } from "@/src/lib/dictionaries";
import Navbar from "@/src/components/layout/Navbar";

// 1. DEFINIMOS EL TIPO AQUÍ (Esto soluciona el error "Cannot find name 'Locale'")
type Locale = "es" | "en";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOpsSec Portfolio",
  description: "Portafolio profesional de Ingeniería de Software, DevOps y Ciberseguridad",
};

// 2. Mantenemos string aquí para que Next.js no dé error en el build de Vercel
type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  // 3. Usamos "as Locale" para decirle a TS que confíe en que el string es válido
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 
          text-slate-50`}
      >
        <Navbar dict={dict.navigation} />
        {children}
      </body>
    </html>
  );
}