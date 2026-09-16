import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo_Black } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <body className={`${volvoFont.variable} ${archivo.variable} antialiased`}>
        {/* Scripts de Google Analytics */}
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

        {children}
      </body>
    </html>
  );
}
