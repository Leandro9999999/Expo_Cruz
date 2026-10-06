import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo_Black, Montserrat } from "next/font/google"; // 1. Importas Montserrat
import Script from "next/script";
import "./globals.css";
import BackToHome from "./Components/BackToHome";

const volvoFont = localFont({
  src: "./fonts/beaver.ttf",
  variable: "--font-volvo",
  weight: "900",
  display: "swap",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

// 2. Configuras Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
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
      {/* 3. Inyectas ${montserrat.variable} en el body */}
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
