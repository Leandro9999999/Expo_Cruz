"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviciosDieselsoft, Servicio, VideoItem } from "../data/servicios";

export default function Servicios() {
  const [selectedServicio, setSelectedServicio] = useState<Servicio | null>(
    null,
  );
  const [videoActivo, setVideoActivo] = useState<VideoItem | null>(null);

  function getYoutubeEmbedUrl(url: string): string | null {
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regExp);
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1`
      : null;
  }
  const handleOpenServicio = (item: Servicio) => {
    setSelectedServicio(item);
    if (item.videos && item.videos.length > 0) {
      setVideoActivo(item.videos[0]);
    }
  };

  const handleClose = () => {
    setSelectedServicio(null);
    setVideoActivo(null);
  };

  return (
    <>
      {/* CUADROS ORIGINALES (Se mantienen idénticos) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 py-4 font-montserrat"
      >
        {serviciosDieselsoft.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenServicio(item)}
            className="cursor-pointer relative p-6 sm:p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition">
                  {item.id}
                </span>
                {/* Categoría */}
              </div>

              <h3 className="text-2xl tracking-[0.1em] text-white mb-1 group-hover:text-gray-200 transition font-extrabold">
                {item.titulo}
              </h3>
              <p className="text-xs font-extrabold text-white/50 mb-4 tracking-[0.1em]">
                {item.subtitulo}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {item.descripcion}
              </p>

              <div className="border-t border-white/10 pt-4 mb-6">
                <p className="text-xs text-white/80 uppercase tracking-[0.1em] mb-3 font-extrabold">
                  Capacidades clave:
                </p>
                <ul className="space-y-2">
                  {item.puntos.map((punto, index) => (
                    <li
                      key={index}
                      className="flex items-center text-xs text-gray-300 tracking-[0.1em] font-extrabold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white mr-2.5 shrink-0" />
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white/40 group-hover:text-white transition">
              <span>Ver mas informacion ({item.videos?.length || 0})</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* MODAL DETALLADO CON LISTA DE VIDEOS */}
      <AnimatePresence>
        {selectedServicio && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            {/* Fondo oscuro para cerrar */}
            <div className="absolute inset-0" onClick={handleClose} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl font-montserrat flex flex-col max-h-[92vh]"
            >
              {/* Header del Modal */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-widest font-bold">
                    {selectedServicio.categoria}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    {selectedServicio.titulo}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Contenido: Video + Lista */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-y-auto">
                {/* Reproductor y detalle del video actual */}
                <div className="lg:col-span-2 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
                  {videoActivo ? (
                    <div>
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 mb-4 shadow-lg">
                        {getYoutubeEmbedUrl(videoActivo.videoUrl) ? (
                          // Si es un link de YouTube, usa iframe
                          <iframe
                            key={videoActivo.videoUrl}
                            src={getYoutubeEmbedUrl(videoActivo.videoUrl)!}
                            title={videoActivo.titulo}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          // Si es un link a un archivo directo .mp4
                          <video
                            key={videoActivo.videoUrl}
                            src={videoActivo.videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {videoActivo.titulo}
                          </h3>

                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {videoActivo.descripcion}
                          </p>
                        </div>
                        {videoActivo.duracion && (
                          <span className="shrink-0 text-xs px-2 py-1 bg-white/10 rounded font-mono text-white/80">
                            {videoActivo.duracion}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-64 flex items-center justify-center text-white/40 text-sm">
                      No hay videos disponibles
                    </div>
                  )}
                </div>

                {/* Lista lateral de videos */}
                <div className="p-4 sm:p-6 bg-white/[0.01]">
                  <p className="text-xs font-black uppercase tracking-wider text-white/60 mb-4">
                    Contenido de trabajos ({selectedServicio.videos.length})
                  </p>

                  <div className="space-y-3">
                    {selectedServicio.videos.map((vid) => {
                      const isActivo = videoActivo?.id === vid.id;
                      return (
                        <div
                          key={vid.id}
                          onClick={() => setVideoActivo(vid)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            isActivo
                              ? "bg-white/15 border-white text-white"
                              : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold">
                              {vid.titulo}
                            </span>
                            {vid.duracion && (
                              <span className="text-[10px] text-white/40 font-mono">
                                {vid.duracion}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
