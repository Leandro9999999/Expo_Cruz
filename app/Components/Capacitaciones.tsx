"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Sliders,
  BookOpen,
  Network,
  Truck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Wrench,
  Sparkles,
} from "lucide-react";

const modulosJaltest = [
  {
    id: "01",
    titulo: "Diagnóstico de Sistemas y Fallas",
    descripcion:
      "Detección y borrado de códigos de error (DTC), lectura de parámetros en tiempo real en motor, frenos ABS/EBS y transmisión.",
    icono: Activity,
  },
  {
    id: "02",
    titulo: "Calibraciones y Ajustes",
    descripcion:
      "Configuración de componentes, reseteo de mantenimientos, calibración de embragues, inyectores y actuadores.",
    icono: Sliders,
  },
  {
    id: "03",
    titulo: "Información Técnica y Guías",
    descripcion:
      "Acceso a esquemas de fusibles, pares de apriete, datos técnicos del fabricante y procedimientos guiados paso a paso.",
    icono: BookOpen,
  },
  {
    id: "04",
    titulo: "Diagramas Eléctricos y Funcionales",
    descripcion:
      "Interpretación interactiva de diagramas eléctricos originales para localización rápida de cables cortados o fallas en sensores.",
    icono: Network,
  },
  {
    id: "05",
    titulo: "Alcance Multimarca Pesado",
    descripcion:
      "Cobertura completa para las principales marcas del mercado: Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco, entre otros.",
    icono: Truck,
  },
];

const imagenesCarrusel = [
  { src: "/img/KITJALTEST/1.png", alt: "Capacitación Diagnóstico Jaltest" },
  {
    src: "/img/KITJALTEST/2.png",
    alt: "Pruebas de diagnóstico en vivo en camiones",
  },
  { src: "/img/KITJALTEST/3.png", alt: "Uso de software Jaltest Cojali" },
  { src: "/img/KITJALTEST/4.png", alt: "Uso de software Jaltest Cojali" },
  { src: "/img/KITJALTEST/5.png", alt: "Uso de software Jaltest Cojali" },
  { src: "/img/KITJALTEST/6.png", alt: "Uso de software Jaltest Cojali" },
  { src: "/img/KITJALTEST/7.png", alt: "Uso de software Jaltest Cojali" },
];

const beneficiosRapidos = [
  { icon: Wrench, texto: "100% Práctico con Equipos Reales" },
  { icon: Award, texto: "Certificado de Participación" },
  { icon: ShieldCheck, texto: "Soporte Técnico Posterior" },
];

export default function Capacitaciones() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play que se pausa al pasar el cursor
  useEffect(() => {
    if (isHovered) return;
    const intervalo = setInterval(() => {
      siguiente();
    }, 5000);
    return () => clearInterval(intervalo);
  }, [indiceActual, isHovered]);

  const anterior = () => {
    setIndiceActual((prev) =>
      prev === 0 ? imagenesCarrusel.length - 1 : prev - 1,
    );
  };

  const siguiente = () => {
    setIndiceActual((prev) =>
      prev === imagenesCarrusel.length - 1 ? 0 : prev + 1,
    );
  };

  const WHATSAPP_NUMERO = "59178361900";
  const WHATSAPP_MENSAJE = encodeURIComponent(
    "Hola Diesel Soft, deseo obtener más información e inscribirme a la Capacitación de Diagnóstico con Jaltest.",
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto mt-16 max-w-7xl w-full rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/90 via-black/80 to-zinc-950/95 p-6 backdrop-blur-2xl md:p-10 lg:p-12 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.85)]"
    >
      {/* Resplandores ambientales decorativos */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      {/* ENCABEZADO */}
      <div className="relative z-10 mb-10 flex flex-col items-start gap-4">
        <h2 className="font-['Montserrat'] text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl leading-tight">
          Diagnóstico de Camiones con{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Jaltest by Cojali
          </span>
        </h2>

        <p className="font-['Montserrat'] max-w-3xl text-sm leading-relaxed text-zinc-300/90 md:text-base">
          Domina a nivel experto el scanner líder en el sector automotriz
          pesado. Aprende a diagnosticar fallas electrónicas complejas,
          reprogramar parámetros y calibrar componentes de fábrica con casos y
          unidades reales.
        </p>

        {/* Cinta de beneficios clave */}
        <div className="mt-2 flex flex-wrap items-center gap-3 pt-2">
          {beneficiosRapidos.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-blue-400" />
                <span>{b.texto}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL: 2 COLUMNAS */}
      <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        {/* COLUMNA IZQUIERDA: CARRUSEL HIGH-TECH */}
        <div
          className="lg:col-span-5 w-full flex flex-col items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="group relative w-full aspect-[4/5] sm:max-w-md lg:max-w-none overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-900 to-black shadow-2xl">
            {/* Efecto de marco reflectante superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent z-20" />

            {/* Contador de Slide estilo HUD */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-semibold tracking-wider text-zinc-300 backdrop-blur-md">
              <span className="text-blue-400">
                {String(indiceActual + 1).padStart(2, "0")}
              </span>
              <span className="text-zinc-600">/</span>
              <span>{String(imagenesCarrusel.length).padStart(2, "0")}</span>
            </div>

            {/* Transición de Imagen */}
            <AnimatePresence mode="wait">
              <motion.img
                key={indiceActual}
                src={imagenesCarrusel[indiceActual].src}
                alt={imagenesCarrusel[indiceActual].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full h-full object-cover select-none"
              />
            </AnimatePresence>

            {/* Sombra interna inferior para realce */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />

            {/* Flechas de Navegación */}
            <button
              onClick={anterior}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2.5 text-white/90 backdrop-blur-md transition-all hover:scale-110 hover:border-blue-400 hover:bg-black/80 active:scale-95 shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={siguiente}
              aria-label="Siguiente imagen"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2.5 text-white/90 backdrop-blur-md transition-all hover:scale-110 hover:border-blue-400 hover:bg-black/80 active:scale-95 shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Indicadores Pill en la parte inferior */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
              {imagenesCarrusel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndiceActual(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    indiceActual === i
                      ? "w-7 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: MÓDULOS DE APRENDIZAJE & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {modulosJaltest.map((item, index) => {
              const Icono = item.icono;
              const isLast = index === modulosJaltest.length - 1;

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-white/[0.09] hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] ${
                    isLast ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Luz sutil en hover */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-500/10 blur-xl transition-all duration-300 group-hover:bg-blue-500/20" />

                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 p-2.5 text-blue-400 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                      <Icono className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-blue-400/80 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="font-['Montserrat'] mb-1.5 text-sm md:text-base font-bold text-white transition-colors duration-200 group-hover:text-blue-300">
                    {item.titulo}
                  </h3>

                  <p className="font-['Montserrat'] text-xs leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {item.descripcion}
                  </p>
                </div>
              );
            })}
          </div>

          {/* BOTÓN WHATSAPP MEJORADO (CTA) */}
          <div className="pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-600/20 via-zinc-900 to-blue-600/20 p-4 transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:scale-[1.01] active:scale-[0.99]"
            >
              {/* Reflejo brillante animado */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

              <div className="flex items-center gap-3.5">
                {/* Icono con halo pulsante */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 shadow-md">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-emerald-400 opacity-20" />
                  <img
                    src="/icon/whatsapp.png"
                    alt="WhatsApp"
                    className="relative w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Inscripciones Abiertas · Cupos Limitados
                  </div>
                  <div className="text-sm md:text-base font-bold text-white tracking-wide">
                    Inscribirme o Consultar por WhatsApp
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black transition-all">
                <svg
                  className="w-4 h-4 text-zinc-300 group-hover:text-black group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
