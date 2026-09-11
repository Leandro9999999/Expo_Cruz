"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Nosotros from "./Components/Nosotros";
import Productos from "./Components/Productos";

export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

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
              DIESELSOFT<span className="text-[0.25em] align-right">.srl</span>
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
        const serviciosDieselsoft = [
          {
            id: "01",
            titulo: "Diagnóstico Electrónico & ECM",
            subtitulo: "Ingeniería de Motor & Telemetría",
            descripcion:
              "Soporte especializado en la lectura, interpretación y resolución de códigos de falla (DTC) en unidades de control electrónico. Realizamos reconfiguración de parámetros de inyección, pruebas de rendimiento en tiempo real y diagnóstico integral para flotas de carga pesada y maquinaria diésel.",
            puntos: [
              "Ajuste de parámetros ECM/EDC",
              "Lectura de sensores en vivo",
              "Análisis de fallas intermitentes",
            ],
            tag: "Soporte Técnico Especializado",
          },
          {
            id: "02",
            titulo: "Software & Soluciones Digitales",
            subtitulo: "Ecosistema Propietario para Flotas",
            descripcion:
              "Desarrollo e integración de herramientas informáticas diseñadas exclusivamente para la industria del transporte. Implementamos plataformas de gestión de mantenimiento, catálogo y cotización de repuestos mediante código/chasis (DieselParts) y guías técnicas avanzadas para asistencia en ruta.",
            puntos: [
              "Gestión de flota y mantenimiento",
              "Telemetría y control de repuestos",
              "Apps especializadas (FH-4 Expert)",
            ],
            tag: "Desarrollo Tecnológico",
          },
          {
            id: "03",
            titulo: "Hardware & Equipamiento de Taller",
            subtitulo: "Intersoluciones Multimarca",
            descripcion:
              "Suministro, calibración y puesta en marcha de interfaces de diagnóstico profesional, reprogramadores de centralitas y herramientas físicas multimarca. Proveemos infraestructura tecnológica a talleres mecánicos y empresas con flota propia para autonomía en sus reparaciones.",
            puntos: [
              "Equipos e interfaces Jaltest & Dimsport",
              "Conectores y arneses industriales",
              "Capacitación en uso de herramientas",
            ],
            tag: "Equipamiento Pro",
          },
        ];

        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-10 py-4"
          >
            {serviciosDieselsoft.map((item) => (
              <div
                key={item.id}
                className="relative p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-white-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-black text-white/20 group-hover:text-white-500/40 transition">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-2xl tracking-[0.1em] text-white mb-1 group-hover:text-white-400 transition">
                    {item.titulo}
                  </h3>
                  <p className="text-xs font-semibold text-white/50 mb-4 tracking-[0.1em]">
                    {item.subtitulo}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6 font-['Montserrat']">
                    {item.descripcion}
                  </p>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <p className="text-xs font-bold text-white/80 uppercase tracking-[0.1em] mb-3">
                      Capacidades clave:
                    </p>
                    <ul className="space-y-2">
                      {item.puntos.map((punto, index) => (
                        <li
                          key={index}
                          className="flex items-center text-xs text-gray-300 tracking-[0.1em]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 shrink-0" />
                          {punto}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between"></div>
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
          src="/img/camion1.png"
          alt="Dieselsoft"
          fill
          className="object-cover"
          priority
        />
      </div>

      <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-16">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 focus:outline-none z-50 cursor-pointer"
            aria-label="Menú"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <div
            className="text-2xl md:text-3xl regular tracking-[0.1em] cursor-pointer"
            onClick={() => handleTabChange("inicio")}
          >
            DIESELSOFT<span className="text-sm align-right">.srl</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-10 text-[15px] tracking-[0.1em] font-bold">
          <button
            onClick={() => setActiveTab("nosotros")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "nosotros" ? "border-b border-white" : ""
            }`}
          >
            SOBRE NOSOTROS
          </button>
          <button
            onClick={() => setActiveTab("servicios")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "servicios" ? "border-b border-white" : ""
            }`}
          >
            SERVICIOS
          </button>
          <button
            onClick={() => setActiveTab("productos")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "productos" ? "border-b border-white" : ""
            }`}
          >
            PRODUCTOS
          </button>
          <button className="hover:opacity-60 transition cursor-pointer">
            CONTACTO
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-black/90 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col p-8 md:hidden"
            >
              <div className="text-xl font-bold tracking-widest mb-12 border-b border-white/10 pb-4">
                MENÚ
              </div>

              <div className="flex flex-col space-y-6 text-left text-sm tracking-widest font-bold">
                <button
                  type="button"
                  onClick={() => handleTabChange("inicio")}
                  className={`text-left transition uppercase py-2 cursor-pointer ${
                    activeTab === "inicio"
                      ? "text-red-500 border-l-2 border-red-500 pl-3"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  INICIO
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("nosotros")}
                  className={`text-left transition uppercase py-2 cursor-pointer ${
                    activeTab === "nosotros"
                      ? "text-red-500 border-l-2 border-red-500 pl-3"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  SOBRE NOSOTROS
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("servicios")}
                  className={`text-left transition uppercase py-2 cursor-pointer ${
                    activeTab === "servicios"
                      ? "text-red-500 border-l-2 border-red-500 pl-3"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  SERVICIOS
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("productos")}
                  className={`text-left transition uppercase py-2 cursor-pointer ${
                    activeTab === "productos"
                      ? "text-red-500 border-l-2 border-red-500 pl-3"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  PRODUCTOS
                </button>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-left text-white/80 hover:text-white transition uppercase py-2 cursor-pointer"
                >
                  CONTACTO
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 -mt-10 relative z-20">
        <AnimatePresence mode="wait">
          <div key={activeTab}>{renderContent()}</div>
        </AnimatePresence>
      </div>
    </main>
  );
}
