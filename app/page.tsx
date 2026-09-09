"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Nosotros from "./Components/Nosotros";
import Productos from "./Components/Productos";
export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio");
  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-[14vw] md:text-[12rem] regular leading-[0.85] tracking-[-1 em] mb-6 drop-shadow-2xl">
              DIESELSOFT
            </h1>
            <p className=" font-['Montserrat'] max-w-3xl text-[10px] md:text-[13px] tracking-[0.15em] leading-relaxed uppercase opacity-85 px-4">
              En Dieselsoft, integramos el desarrollo de hardware y software de
              vanguardia con la ingeniería mecánica pesada para optimizar,
              diagnosticar y transformar la gestión de tu flota vehicular.
            </p>
            <button
              onClick={() => setActiveTab("servicios")}
              className="mt-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-12 py-4 rounded-xl text-[12px] tracking-[0.2em] font-bold transition-all uppercase"
            >
              Más información
            </button>
          </motion.div>
        );

      case "nosotros":
        return <Nosotros />;

      case "servicios":
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10"
          >
            {["Diagnóstico", "Software", "Hardware"].map((item) => (
              <div
                key={item}
                className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-bold mb-4">{item}</h3>
                <p className="text-sm opacity-70">
                  Soluciones avanzadas para el rendimiento de motores diesel.
                </p>
              </div>
            ))}
          </motion.div>
        );

      case "productos":
        return <Productos />;

      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col text-white overflow-hidden font-[family-name:var(--font-volvo)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/img/3.png"
          alt="Dieselsoft"
          fill
          className="object-cover"
          priority
        />
      </div>

      <nav className="relative z-20 flex justify-between items-center px-10 py-8 md:px-16">
        <div
          className="text-3xl regular tracking-[0.1em] cursor-pointer"
          onClick={() => setActiveTab("inicio")}
        >
          DIESELSOFT
        </div>
        <div className="hidden md:flex space-x-10 text-[15px] tracking-[0.1em] font-bold">
          <button
            onClick={() => setActiveTab("nosotros")}
            className={`hover:opacity-60 transition ${activeTab === "nosotros" ? "border-b border-white" : ""}`}
          >
            SOBRE NOSOTROS
          </button>
          <button
            onClick={() => setActiveTab("servicios")}
            className={`hover:opacity-60 transition ${activeTab === "servicios" ? "border-b border-white" : ""}`}
          >
            SERVICIOS
          </button>
          <button
            onClick={() => setActiveTab("productos")}
            className={`hover:opacity-60 transition ${activeTab === "productos" ? "border-b border-white" : ""}`}
          >
            PRODUCTOS
          </button>
          <button className="hover:opacity-60 transition">CONTACTO</button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10 relative z-20">
        <AnimatePresence mode="wait">
          <div key={activeTab}>{renderContent()}</div>
        </AnimatePresence>
      </div>
    </main>
  );
}
