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
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-['Montserrat'] leading-relaxed tracking-wider opacity-90">
  En Dieselsoft, creemos que la digitalización no debe detenerse en
  las puertas de los hangares de servicio. Nacimos de la fusión de
  ingenieros mecánicos veteranos en equipo pesado y desarrolladores
  de software enfocados en sistemas críticos de telemetría.
</p>

<p className="text-[14px] md:text-[16px] lg:text-[18px] font-['Montserrat'] leading-relaxed tracking-wider opacity-90">
  No somos solo programadores de pantallas; nos llenamos las manos
  de grasa conociendo cada sensor de temperatura, inyector y caja de
  velocidades, para luego diseñar la lógica digital que los optimiza
  en tiempo real.
</p>
          </div>

          <div className="h-[2px] w-24 bg-white/40" />
        </div>

        <div className="flex-1 w-full h-[300px] md:h-[450px] relative">
          <div className="absolute inset-0 border-4 border-white/5 rounded-[2rem] z-10 pointer-events-none" />
          <Image
            src="/img/camion2.png"
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
