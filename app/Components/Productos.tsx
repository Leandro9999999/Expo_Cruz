"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LISTA_PRODUCTOS, Producto } from "../data/productos";

const Productos = () => {
  const [seleccionado, setSeleccionado] = useState<Producto | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <AnimatePresence mode="wait">
        {!seleccionado ? (
          <motion.div
            key="grilla"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
              PRODUCTOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {LISTA_PRODUCTOS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => setSeleccionado(prod)}
                  className="group cursor-pointer bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all flex flex-col items-center text-center"
                >
                  <div className="relative w-full h-48 mb-6 bg-white rounded-2xl overflow-hidden p-4">
                    <Image
                      src={prod.imagen}
                      alt={prod.titulo}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-wider">
                    {prod.titulo}
                  </h3>
                  <p className=" font-sans text-xs opacity-70 leading-relaxed uppercase tracking-widest">
                    {prod.descripcionCorta}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detalle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center w-full"
          >
            <button
              onClick={() => setSeleccionado(null)}
              className="mb-8 text-sm font-bold tracking-widest hover:text-white/60 transition uppercase self-start md:self-center"
            >
              ← VOLVER A PRODUCTOS
            </button>

            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-[0.1em] uppercase text-center">
              {seleccionado.titulo}
            </h2>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl shadow-2xl">
              <div className="flex-1 text-left space-y-6">
                <p className="  font-['Montserrat'] text-sm md:text-base  leading-relaxed tracking-wider uppercase opacity-90">
                  {seleccionado.descripcionLarga}
                </p>

                <div className="h-[2px] w-20 bg-white/20 my-6" />

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                  {seleccionado.manualPdf1 && (
                    <a
                      href={seleccionado.manualPdf1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm"
                    >
                      📄 Manual Tecnico
                    </a>
                  )}

                  {seleccionado.manualPdf2 && (
                    <a
                      href={seleccionado.manualPdf2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm"
                    >
                      📄 Manual de Usuario
                    </a>
                  )}

                  {seleccionado.videoYoutube && (
                    <a
                      href={seleccionado.videoYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-red-600/80 hover:bg-red-600 border border-red-500 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm"
                    >
                      ▶ Ver tutorial en YouTube
                    </a>
                  )}
                </div>
              </div>

              {/* Lado Derecho: Imagen del Producto */}
              <div className="flex-1 relative w-full h-[280px] md:h-[350px] bg-white rounded-[2rem] shadow-inner">
                <Image
                  src={seleccionado.imagen}
                  alt={seleccionado.titulo}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Productos;
