import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibecoders Anónimos — Centro de Rehabilitación para Programadores",
  description:
    "¿Usas IA para programar sin entender lo que hace? No estás solo. Vibecoders Anónimos es tu camino a la sobriedad del código. Reuniones todos los jueves.",
  keywords: ["vibecoding", "programación", "IA", "rehabilitación", "humor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col paper-texture">{children}</body>
    </html>
  );
}
