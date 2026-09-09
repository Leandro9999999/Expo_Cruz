"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Nosotros = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-7xl w-full mx-auto bg-black/10 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 text-left">
          <div className="space-y-6">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-['Montserrat'] leading-relaxed tracking-wider uppercase opacity-90">
              EN DIESELSOFT, CREEMOS QUE LA DIGITALIZACIÓN NO DEBE DETENERSE EN
              LAS PUERTAS DE LOS HANGARES DE SERVICIO. NACIMOS DE LA FUSIÓN DE
              INGENIEROS MECÁNICOS VETERANOS EN EQUIPO PESADO Y DESARROLLADORES
              DE SOFTWARE ENFOCADOS EN SISTEMAS CRÍTICOS DE TELEMETRÍA.
            </p>

            <p className="text-[14px] md:text-[16px] lg:text-[18px]  font-['Montserrat']  leading-relaxed tracking-wider uppercase opacity-90">
              NO SOMOS SOLO PROGRAMADORES DE PANTALLAS; NOS LLENAMOS LAS MANOS
              DE GRASA CONOCIENDO CADA SENSOR DE TEMPERATURA, INYECTOR Y CAJA DE
              VELOCIDADES, PARA LUEGO DISEÑAR LA LÓGICA DIGITAL QUE LOS OPTIMIZA
              EN TIEMPO REAL.
            </p>
          </div>

          <div className="h-[2px] w-24 bg-white/40" />
        </div>

        <div className="flex-1 w-full h-[300px] md:h-[450px] relative">
          <div className="absolute inset-0 border-4 border-white/5 rounded-[2rem] z-10 pointer-events-none" />
          <Image
            src="/img/2.png"
            alt="Dieselsoft Team Work"
            fill
            className="object-cover rounded-[2rem] shadow-2xl"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Nosotros;
