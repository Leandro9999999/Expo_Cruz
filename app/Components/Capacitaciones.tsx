"use client";

import { motion } from "framer-motion";

import { Wrench, ShieldCheck, MonitorCheck, Cpu } from "lucide-react";

const módulos = [
  {
    titulo: "Sistemas de Telemetría y Monitoreo",

    descripcion:
      "Interpretación de datos provenientes de sensores de temperatura, presión y consumo de combustible para la toma de decisiones informadas.",

    icono: Cpu,
  },

  {
    titulo: "Uso y Manejo del Software de Gestión",

    descripcion:
      "Capacitación en la plataforma digital para el registro de rutas, reportes de estado y control de unidades en tiempo real.",

    icono: MonitorCheck,
  },

  {
    titulo: "Buenas Prácticas e Inspección Operativa",

    descripcion:
      "Procedimientos estandarizados para la revisión previa a la ruta, detección temprana de anomalías en pantalla y protocolos de seguridad.",

    icono: ShieldCheck,
  },

  {
    titulo: "Gestión Eficiente de Flotas",

    descripcion:
      "Estrategias operativas para la optimización de tiempos de traslado, reducción del desgaste de componentes y control de costos de operación.",

    icono: Wrench,
  },
];

export default function Capacitaciones() {
  const WHATSAPP_NUMERO = "59178361900";

  const WHATSAPP_MENSAJE = encodeURIComponent(
    "Hola Dieselsoft, me gustaría mas información de los cursos de capacitación.",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      exit={{ opacity: 0, y: -20 }}

      transition={{ duration: 0.6, ease: "easeOut" }}

      className="relative mx-auto mt-16 max-w-5xl w-full rounded-3xl border border-white/10 bg-black/10 p-6 backdrop-blur-xl md:p-8 lg:p-10 overflow-hidden"
    >
      <div className="space-y-6">
        <div className="space-y-3 text-left">
          <h2 className=" font-['Montserrat'] text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl">
            Capacitación Operativa y Digital para Flotas
          </h2>

          <p className=" font-['Montserrat'] max-w-2xl text-xs leading-relaxed tracking-wide text-white/90 md:text-sm lg:text-base">
            Formación técnica orientada a la digitalización, uso de herramientas
            de telemetría y optimización de procesos operativos en vehículos de
            transporte pesado.
          </p>

          <div className="h-0.5 w-16 bg-white/40" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {módulos.map((item, index) => {
            const Icono = item.icono;

            return (
              <div
                key={index}

                className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10 md:p-5"
              >
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/10 p-2.5 text-white">
                  <Icono className="h-5 w-5" />
                </div>

                <h3 className=" font-['Montserrat'] mb-1.5 text-base font-semibold text-white md:text-lg">
                  {item.titulo}
                </h3>

                <p className=" font-['Montserrat'] text-xs leading-relaxed text-white/80 md:text-sm">
                  {item.descripcion}
                </p>
              </div>
            );
          })}
        </div>

        <div className="pt-1">
          <a
            href={`https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`}

            target="_blank"

            rel="noopener noreferrer"

            className="group relative inline-flex items-center justify-between w-full sm:w-auto gap-3.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold shadow-lg hover:border-white/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center p-1 group-hover:bg-white/20 transition-colors">
                <img
                  src="/icon/whatsapp.png"

                  alt="WhatsApp"

                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>

              <div className="text-left">
                <div className="text-[10px] text-zinc-400 font-medium leading-none">
                  Canal directo
                </div>

                <div className="text-sm font-bold text-white">
                  Contactar por WhatsApp
                </div>
              </div>
            </div>

            <svg
              className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all"

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
          </a>
        </div>
      </div>
    </motion.div>
  );
}
