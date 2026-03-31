import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDictionary } from "@/src/lib/dictionaries";
import Navbar from "@/src/components/layout/Navbar";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function RootLayout({ children, params }: Props) {

  const { lang } = await params;

  const dict = await getDictionary(lang)

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
