export interface MetodosPago {
  bolivia?: string[];
  peru?: string[];
  chile?: string[];
  internacional?: string[];
}

export interface Capacitacion {
  id: number;
  titulo: string;
  subtitulo: string;
  modalidad: "Virtual" | "Presencial";
  lugar?: string;
  fechaInicio: string;
  horario: string;
  duracion: string;
  precioTotal: number; // En USD
  reserva: number; // En USD
  estado: "disponible" | "terminado";
  imagen: string;
  contenido: string[];
  incluye?: string[];
  metodosPago: MetodosPago;
}

export const LISTA_CAPACITACIONES: Capacitacion[] = [
  {
    id: 1,
    titulo: "Programaciones y Anulaciones VOLVO Versión 2",
    subtitulo: "DieselSoft ",
    modalidad: "Virtual",
    fechaInicio: "Lunes 12 de Octubre",
    horario: "20:30 a 22:00",
    duracion: "2 semanas Lunes, Miércoles y Viernes",
    precioTotal: 350,
    reserva: 100,
    estado: "disponible",
    imagen: "/img/software/comp1.png",
    contenido: [
      "Manejo de archivos de programación con VISFED y TechTool.",
      "Programación de módulos: motor, caja, frenos EBS, suspensión, VECU, APM y tablero.",
      "Conversiones de suspensión, caja I-Shift y freno de motor; repotenciación de motores.",
      "Cambio de idioma del tablero y configuración para transmisión mecánica o automática.",
      "Identificación de DataSet 2 y anulación de AdBlue en FH13 V2.",
    ],
    incluye: [
      "Certificación oficial.",
      "Material didáctico.",
      "Instalación de VISFED.",
      "Base de datos de archivos para programación.",
    ],
    metodosPago: {
      peru: ["Interbank"],
      chile: ["Banco Falabella"],
      internacional: ["Binance", "PayPal", "Meru"],
    },
  },
  {
    id: 2,
    titulo: "Curso de Especialización VOLVO Versión 5",
    subtitulo: "DieselSoft ",
    modalidad: "Presencial",
    lugar: "Cochabamba, Bolivia",
    fechaInicio: "Del 26 al 30 de Octubre de 2026",
    horario: "08:30 a 17:30",
    duracion: "5 días (Prácticas en unidades y sistemas reales)",
    precioTotal: 500,
    reserva: 200,
    estado: "disponible",
    imagen: "/img/software/comp3.png",
    contenido: [
      "Electricidad, electrónica y diagnóstico con osciloscopio, TechTool y JALTEST.",
      "Arquitectura electrónica FH4 y FH5, Ethernet y telemetría.",
      "Calibraciones de suspensión, dirección, freno de motor y cajas I-Shift.",
      "Configuración y análisis de parámetros con DevTool.",
      "Introducción a ECU Tuning con WinOLS, The Genius y herramientas DieselSoft.",
    ],
    incluye: [
      "Prácticas en unidades reales.",
      "Certificación y material de estudio.",
      "Acceso a herramientas de diagnóstico.",
    ],
    metodosPago: {
      bolivia: ["QR Simple / Transferencia"],
      peru: ["Interbank"],
      chile: ["Banco Falabella"],
      internacional: ["Binance", "PayPal", "Meru"],
    },
  },
];
