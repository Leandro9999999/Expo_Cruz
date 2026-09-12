export interface Producto {
  id: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagenes: string[];
  manualPdf1?: string;
  manualPdf2?: string;
  videoYoutube?: string;
}

export const LISTA_PRODUCTOS: Producto[] = [
  {
    id: "BT-CONTROLLER",
    titulo: "BT CONTROLLER",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga:
      "Es una herramienta profesional diseñada para controlar módulos de hardware mediante Bluetooth (HC-05/06). Permite enviar valores de velocidad precisos con una interfaz visual intuitiva y fluida.",
    imagenes: ["/img/bt3.png", "/img/bt2.png", "/img/bt4.png", "/img/bt1.png"],
    manualPdf1: "/pdf/BT-Controller-Manual.pdf",
    manualPdf2: "/pdf/SIMULADOR-VELOCIDAD.pdf",
    videoYoutube: "https://www.youtube.com/watch?v=TU_LINK",
  },

  {
    id: "PROBADOR-VEB-EPG",
    titulo: "PROBADOR VEB EPG",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga:
      "Es una herramienta profesional diseñada para controlar módulos de hardware mediante Bluetooth (HC-05/06). Permite enviar valores de velocidad precisos con una interfaz visual intuitiva y fluida.",
    imagenes: [
      "/img/PROBADOR DE VEB -EPG.png",
      "/img/PANEL DE CONTROL.png",
      "/img/Cable para la válvula AVU.png",
      "/img/Cable de alimentación.png",
      "/img/CAÑERIAS DE AIRE.png",
      "/img/NIPLES DE ACOPLE.png",
    ],
    manualPdf1: "/pdf/PROBADOR VEB EPG.pdf",
    manualPdf2: "/pdf/",
    videoYoutube: "https://www.youtube.com/watch?v=TU_LINK",
  },

  {
    id: "Vocom-II-Plus",
    titulo: "Vocom II Plus",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga:
      "La herramienta de diagnóstico de camiones Volvo Vocom 88894000 es la herramienta de diagnóstico OEM más reciente, genuina y única fabricada por Movimento en Suecia y diseñada para el mantenimiento de Volvo, MACK, Penta (motores marinos), UD, camiones Renault EURO 6, autobuses, máquinas de construcción y otros vehículos pesados que cubren todo el proceso de reparación mediante el uso de una computadora portátil de diagnóstico especial con software de diagnóstico configurado. Fue desarrollado para hacer las tareas del taller de reparaciones más fáciles y más eficientes.",
    imagenes: ["/img/vocom2.PNG"],
  },

  {
    id: "VOLVO-IMPACT",
    titulo: "Software de diagnóstico VOLVO IMPACT",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga:
      "Volvo Impact es la plataforma integral para Windows (online/offline) que reúne todo lo necesario para el mantenimiento de camiones y autobuses Volvo (1975–2025): catálogo completo de piezas y repuestos estándar, manuales paso a paso con lista de herramientas, diagramas eléctricos y boletines técnicos por cada sistema, y el módulo TRD para el cálculo de tiempos estándar en la gestión de órdenes de trabajo.",
    imagenes: ["/img/volvo-impac.PNG"],
  },

  {
    id: "VOLVO-IMPACT",
    titulo: "Software de diagnóstico VOLVO IMPACT",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga:
      "Volvo Impact es la plataforma integral para Windows (online/offline) que reúne todo lo necesario para el mantenimiento de camiones y autobuses Volvo (1975–2025): catálogo completo de piezas y repuestos estándar, manuales paso a paso con lista de herramientas, diagramas eléctricos y boletines técnicos por cada sistema, y el módulo TRD para el cálculo de tiempos estándar en la gestión de órdenes de trabajo.",
    imagenes: ["/img/Getac S410 DUAL BATTERY.PNG"],
  },
];
