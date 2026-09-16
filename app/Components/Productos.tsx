"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LISTA_PRODUCTOS, Producto } from "../data/productos";

const WHATSAPP_NUMERO = "59178361900";

const Productos = () => {
  const [seleccionado, setSeleccionado] = useState<Producto | null>(null);
  const [indiceImagen, setIndiceImagen] = useState<number>(0);
  const [modalAbierto, setModalAbierto] = useState<boolean>(false);

  const abrirDetalle = (prod: Producto) => {
    setSeleccionado(prod);
    setIndiceImagen(0);
  };

  const siguienteImagen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!seleccionado) return;
    setIndiceImagen((prev) => (prev + 1) % seleccionado.imagenes.length);
  };

  const anteriorImagen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!seleccionado) return;
    setIndiceImagen((prev) =>
      prev === 0 ? seleccionado.imagenes.length - 1 : prev - 1,
    );
  };

  // Navegación mediante teclado en el modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalAbierto) return;
      if (e.key === "Escape") setModalAbierto(false);
      if (e.key === "ArrowRight") siguienteImagen();
      if (e.key === "ArrowLeft") anteriorImagen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalAbierto, seleccionado]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 font-['Montserrat']">
      <AnimatePresence mode="wait">
        {!seleccionado ? (
          
          <motion.div
            key="grilla"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-['Montserrat'] font-extrabold mb-12 tracking-[0.1em] text-white">
              PRODUCTOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {LISTA_PRODUCTOS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => abrirDetalle(prod)}
                  className="group cursor-pointer bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all flex flex-col items-center text-center"
                >
                  <div className="relative w-full h-48 mb-6 bg-white rounded-2xl overflow-hidden p-4">
                    <Image
                      src={prod.imagenes[0]}
                      alt={prod.titulo}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-['Montserrat'] font-extrabold mb-4 tracking-wider text-white">
                    {prod.titulo}
                  </h3>
                  <p className="text-xs opacity-70 leading-relaxed font-['Montserrat'] tracking-widest text-zinc-300">
                    {prod.descripcionCorta}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* ================= VISTA DETALLE ================= */
          <motion.div
            key="detalle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center w-full"
          >
            <button
              onClick={() => setSeleccionado(null)}
              className="mb-6 text-sm font-bold tracking-[0.1em] hover:text-white/60 transition uppercase self-start md:self-right text-white"
            >
              ← VOLVER A PRODUCTOS
            </button>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 w-full max-w-5xl shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start w-full">
                {/* Columna Izquierda */}
                <div className="flex flex-col text-left space-y-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-['Montserrat'] font-extrabold tracking-wide uppercase leading-tight text-white">
                      {seleccionado.titulo}
                    </h2>
                    <div className="h-[2px] w-20 bg-white/20 mt-4" />
                  </div>

                  <p className="text-sm md:text-base font-['Montserrat'] leading-relaxed tracking-wider opacity-90 text-zinc-200">
                    {seleccionado.descripcionLarga}
                    {seleccionado.descripcionLarga2 && (
                      <span className="block mt-2">
                        {seleccionado.descripcionLarga2}
                      </span>
                    )}
                  </p>

                  {/* Botón WhatsApp con ID dinámico */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
                        `Hola Dieselsoft, me interesa cotizar el producto: ${seleccionado.titulo} (ID: ${seleccionado.id}).`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl text-xs font-['Montserrat'] font-extrabold tracking-widest uppercase transition-all shadow-lg shadow-emerald-950/40"
                    >
                      <img
                        src="/icon/whatsapp.png"
                        alt="WhatsApp"
                        className="w-5 h-5 object-contain brightness-0 invert"
                      />
                      <span>Cotizar por WhatsApp</span>
                    </a>
                  </div>

                  {/* Manuales y Video */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                    {seleccionado.manualPdf1 && (
                      <a
                        href={seleccionado.manualPdf1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm text-white"
                      >
                        <img
                          src="/icon/pdf.png"
                          alt=""
                          className="w-4 h-4 object-contain"
                        />
                        <span>Manual 1</span>
                      </a>
                    )}

                    {seleccionado.manualPdf2 && (
                      <a
                        href={seleccionado.manualPdf2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm text-white"
                      >
                        <img
                          src="/icon/pdf.png"
                          alt=""
                          className="w-4 h-4 object-contain"
                        />
                        <span>Manual 2</span>
                      </a>
                    )}

                    {seleccionado.videoYoutube && (
                      <a
                        href={seleccionado.videoYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm text-white"
                      >
                        <img
                          src="/icon/youtube.png"
                          alt=""
                          className="w-4 h-4 object-contain"
                        />
                        <span>Ver Video</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Columna Derecha: Visor de Imagen y Flechas */}
                <div className="flex flex-col items-center w-full gap-4">
                  <div
                    onClick={() => setModalAbierto(true)}
                    className="group relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-[2rem] shadow-inner overflow-hidden cursor-zoom-in"
                  >
                    <Image
                      key={seleccionado.imagenes[indiceImagen]}
                      src={seleccionado.imagenes[indiceImagen]}
                      alt={seleccionado.titulo}
                      fill
                      className="object-contain p-6 transition-all duration-300"
                    />

                    {/* Indicador de Zoom */}
                    <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                      Ver más grande
                    </div>

                    {seleccionado.imagenes.length > 1 && (
                      <>
                        <button
                          onClick={anteriorImagen}
                          aria-label="Imagen anterior"
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center text-lg font-bold transition-all"
                        >
                          ‹
                        </button>
                        <button
                          onClick={siguienteImagen}
                          aria-label="Siguiente imagen"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center text-lg font-bold transition-all"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {seleccionado.imagenes.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto p-2 w-full justify-center">
                      {seleccionado.imagenes.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setIndiceImagen(idx)}
                          className={`relative w-16 h-16 rounded-xl bg-white overflow-hidden border-2 transition-all shrink-0 ${
                            indiceImagen === idx
                              ? "border-white scale-105 shadow-md shadow-white/30"
                              : "border-transparent opacity-50 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img}
                            alt="miniatura"
                            fill
                            className="object-contain p-1"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalAbierto && seleccionado && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalAbierto(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 font-['Montserrat']"
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setModalAbierto(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 text-3xl font-bold z-10 transition-colors"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Flecha Izquierda Modal */}
            {seleccionado.imagenes.length > 1 && (
              <button
                onClick={anteriorImagen}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-sm z-10 text-xl font-bold transition-all"
                aria-label="Anterior"
              >
                ❮
              </button>
            )}

            {/* Contenedor de la Imagen Grande */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl flex items-center justify-center"
            >
              <Image
                src={seleccionado.imagenes[indiceImagen]}
                alt={seleccionado.titulo}
                fill
                className="object-contain p-4"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono font-bold tracking-widest bg-black/75 text-white px-3 py-1 rounded-full">
                {indiceImagen + 1} / {seleccionado.imagenes.length}
              </div>
            </div>

            {/* Flecha Derecha Modal */}
            {seleccionado.imagenes.length > 1 && (
              <button
                onClick={siguienteImagen}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-sm z-10 text-xl font-bold transition-all"
                aria-label="Siguiente"
              >
                ❯
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Productos;
