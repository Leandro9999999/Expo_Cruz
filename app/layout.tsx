import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo_Black, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackToHome from "./Components/BackToHome";

// Local Font
const volvoFont = localFont({
  src: "./fonts/beaver.ttf",
  variable: "--font-volvo",
  weight: "900",
  display: "swap",
  preload: false, // Evita forzar preload si la fuente solo se usa en secciones específicas
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

// Montserrat: Deja solo los pesos que utilizas activamente en el proyecto
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Reducido a los pesos realmente utilizados
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dieselsoft",
  description: "Gestión de flota vehicular",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${volvoFont.variable} ${archivo.variable} ${montserrat.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TX18REQB8E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TX18REQB8E');
          `}
        </Script>

        <BackToHome />
        {children}
      </body>
    </html>
  );
}
