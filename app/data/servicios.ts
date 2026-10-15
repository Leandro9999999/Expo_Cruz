export interface VideoItem {
  id: string;
  titulo: string;
  descripcion: string;
  videoUrl: string;
  duracion?: string;
}

export interface Servicio {
  id: string;
  categoria: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  puntos: string[];
  videos: VideoItem[];
}

export const serviciosDieselsoft: Servicio[] = [
  {
    id: "01",
    categoria: "Diagnóstico & Electrónica",
    titulo: "Diagnóstico  & Sincronización",
    subtitulo: "Calibración de Sistemas & Puesta a Punto",
    descripcion:
      "Servicio especializado en la sincronización de sistemas electrónicos, calibración de componentes de motor y diagnóstico profundo de centralitas. Aseguramos la correcta comunicación entre módulos, la sincronización precisa de inyección y la puesta a punto general para optimizar el rendimiento y la eficiencia.",
    puntos: [
      "Sincronización de sistemas y módulos electrónicos",
      "Calibración y puesta a punto de inyección",
      "Verificación de parámetros y tiempos de respuesta",
    ],
    videos: [
      {
        id: "v-01",
        titulo: "Codificación de Control Volvo",

        descripcion:
          "Programación y vinculación de controles remotos al módulo electrónico del camión Volvo para restablecer la apertura de puertas sin fallas.",
        videoUrl: "https://youtu.be/kJrxzntoyTU?si=9zgwfV9DRmHueo4v",
      },
    ],
  },
  {
    id: "02",
    categoria: "Software & Telemetría",

    titulo: "Software & Soluciones Digitales",
    subtitulo: "Ecosistema Propietario para Flotas",
    descripcion:
      "Desarrollo e integración de herramientas informáticas diseñadas exclusivamente para la industria del transporte. Implementamos plataformas de gestión de mantenimiento, catálogo y cotización de repuestos mediante código/chasis (DieselParts) y guías técnicas avanzadas para asistencia en ruta.",
    puntos: [
      "Gestión de flota y mantenimiento",
      "Telemetría y control de repuestos",
      "Apps especializadas (FH-4 Expert)",
    ],
    videos: [
      {
        id: "v-01",
        titulo: "Anulación de AdBlue Vía Software",

        descripcion:
          "Desactivación por software en la ECM para eliminar fallas de AdBlue, liberar potencia y mantener tu camión operando sin interrupciones.",
        videoUrl: "https://youtu.be/--Z6Zgz9kNc?si=C6rUre_L1ycS5R86",
      },
    ],
  },
  {
    id: "03",
    categoria: "Servicios de Taller",
    titulo: "Servicios & Trabajo de Taller",
    subtitulo: "Mantenimiento y Reparación Especializada",
    descripcion:
      "Servicios integrales de mantenimiento preventivo, correctivo y reparación especializada para vehículos pesados y flotas. Ejecutamos diagnósticos avanzados, reparación de componentes e intervenciones técnicas directas en instalaciones equipadas para garantizar la máxima operatividad.",
    puntos: [
      "Mantenimiento preventivo y correctivo de flotas",
      "Reparación electromecánica y diagnóstico de fallas",
      "Puesta a punto y mantenimiento de componentes críticos",
    ],
    videos: [
      {
        id: "v-01",
        titulo: "Reparación de Cajas Volvo I-Shift",

        descripcion:
          "¿Problemas con el cambio de marchas o ruidos en la transmisión? Recupera la potencia y eficiencia de tu camión Volvo con nuestro servicio técnico experto en cajas I-Shift. ¡Agenda tu evaluación hoy mismo!",
        videoUrl: "https://youtu.be/88J5StTdehg?si=9NW5MLMcPKez4_Ng",
      },
    ],
  },
];
