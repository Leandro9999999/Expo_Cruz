"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Nosotros from "./Components/Nosotros";
import Productos from "./Components/Productos";
import Contacto from "./Components/Contacto";
import Capacitaciones from "./Components/Capacitaciones";
import Repuestos from "./Components/Repuestos";
import Servicios from "./Components/Servicios";

export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (activeTab !== "inicio" || menuOpen) {
      window.history.pushState({ tab: activeTab, menuOpen }, "");
    }

    const handlePopState = () => {
      if (menuOpen) {
        setMenuOpen(false);
      } else if (activeTab !== "inicio") {
        setActiveTab("inicio");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [activeTab, menuOpen]);

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
            <p className="font-montserrat max-w-3xl text-[10px] md:text-[13px] tracking-[0.15em] leading-relaxed uppercase opacity-85 px-4">
              En Dieselsoft, integramos el desarrollo de hardware y software de
              vanguardia con la ingeniería mecánica pesada para optimizar,
              diagnosticar y transformar la gestión de tu flota vehicular.
            </p>
            <button
              onClick={() => handleTabChange("servicios")}
              className="mt-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-12 py-4 rounded-xl text-[12px] tracking-[0.2em] font-bold transition-all uppercase cursor-pointer"
            >
              Más información
            </button>
          </motion.div>
        );

      case "nosotros":
        return <Nosotros />;

      case "servicios":
        return <Servicios />;

      case "productos":
        return <Productos />;
      case "capacitaciones":
        return <Capacitaciones />;
      case "repuestos":
        return <Repuestos />;

      case "contacto":
        return <Contacto />;

      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col text-white overflow-x-hidden font-[family-name:var(--font-volvo)]">
      {/* Fondo fijo adaptable a móvil y escritorio */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <Image
          src="/img/green.png"
          alt="Dieselsoft"
          fill
          className="object-cover object-[25%_center] md:object-center"
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
            onClick={() => handleTabChange("nosotros")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "nosotros" ? "border-b border-white" : ""
            }`}
          >
            SOBRE NOSOTROS
          </button>
          <button
            onClick={() => handleTabChange("servicios")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "servicios" ? "border-b border-white" : ""
            }`}
          >
            SERVICIOS
          </button>
          <button
            onClick={() => handleTabChange("productos")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "productos" ? "border-b border-white" : ""
            }`}
          >
            PRODUCTOS
          </button>
          <button
            onClick={() => handleTabChange("capacitaciones")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "capacitaciones" ? "border-b border-white" : ""
            }`}
          >
            Capacitaciones
          </button>
          <button
            onClick={() => handleTabChange("repuestos")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "repuestos" ? "border-b border-white" : ""
            }`}
          >
            Venta de repuestos
          </button>
          <button
            onClick={() => handleTabChange("contacto")}
            className={`hover:opacity-60 transition cursor-pointer ${
              activeTab === "contacto" ? "border-b border-white" : ""
            }`}
          >
            CONTACTO
          </button>
        </div>
      </nav>

      {/* Menú móvil lateral */}
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
              className="fixed top-0 left-0 bottom-0 w-72 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col p-8 md:hidden"
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
                  onClick={() => handleTabChange("capacitaciones")}
                  className={`text-left transition uppercase py-2 cursor-pointer ${
                    activeTab === "capacitaciones"
                      ? "text-red-500 border-l-2 border-red-500 pl-3"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Capacitaciones
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("contacto")}
                  className={`text-left transition uppercase py-2 cursor-pointer ${
                    activeTab === "contacto"
                      ? "text-red-500 border-l-2 border-red-500 pl-3"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  CONTACTO
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 md:py-0 md:-mt-10 relative z-20">
        <AnimatePresence mode="wait">
          <div key={activeTab}>{renderContent()}</div>
        </AnimatePresence>
      </div>
    </main>
  );
}
