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
    titulo: "Diagnóstico Electrónico & ECM",
    subtitulo: "Ingeniería de Motor & Telemetría",
    descripcion:
      "Soporte especializado en la lectura, interpretación y resolución de códigos de falla (DTC) en unidades de control electrónico. Realizamos reconfiguración de parámetros de inyección, pruebas de rendimiento en tiempo real y diagnóstico integral para flotas de carga pesada y maquinaria diésel.",
    puntos: [
      "Ajuste de parámetros ECM/EDC",
      "Lectura de sensores en vivo",
      "Análisis de fallas intermitentes",
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
    categoria: "Equipamiento & Taller",
    titulo: "Hardware & Equipamiento de Taller",
    subtitulo: "Intersoluciones Multimarca",
    descripcion:
      "Suministro, calibración y puesta en marcha de interfaces de diagnóstico profesional, reprogramadores de centralitas y herramientas físicas multimarca. Proveemos infraestructura tecnológica a talleres mecánicos y empresas con flota propia para autonomía en sus reparaciones.",
    puntos: [
      "Equipos e interfaces Jaltest & Dimsport",
      "Conectores y arneses industriales",
      "Capacitación en uso de herramientas",
    ],
    videos: [],
  },
];
