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
    id: "Getac",
    titulo: "Getac S410 DUAL BATTERY",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga: "Excelente durabilidad, gran autonomía de batería, 16 GB de RAM y pantalla Full HD. Ideal para diagnósticos automotrices, logística o trabajo técnico al aire libre.A considerar: El procesador (i5-6300U) es de 6ta generación (lanzado originalmente alrededor de 2015-2016), por lo que no cumple de forma oficial los requisitos de Windows 11. Es una máquina enfocada en resistencia física más que en potencia de cálculo moderna.",
    
    imagenes: ["/img/Getac S410 DUAL BATTERY.PNG"],
  },
    {
    id: "INTERFAZ SCANIA VCI3",
    titulo: "INTERFAZ SCANIA VCI3",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga: "El Scania VCI3 es un adaptador de diagnóstico profesional diseñado para camiones, autobuses y vehículos pesados de la marca SCANIA fabricados a partir del año 2004. Su función principal es conectarse a la red CAN BUS del vehículo (con un rango de voltaje de 7 a 40V DC) y comunicarse directamente con el software de diagnóstico especializado Scania SDP3 (versión 2.42 o superior).Su característica más destacada es la conectividad inalámbrica por Wi-Fi (802.11b/g con cifrados WPA2, WPA y WEP), lo que permite a los técnicos trabajar sin depender de cables de datos que puedan dañarse en el taller. Para mayor flexibilidad, también incluye una opción de conexión física mediante un puerto USB 2.0.",
    
    imagenes: ["/img/1.png"],
  },

    {
    id: "Protector OBD II - 16 PINES",
    titulo: "Protector OBD II - 16 PINES",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga: " El Protector OBD II de 16 pines es un cable de extensión de 36 cm diseñado para proteger los conectores originales de interfaces de diagnóstico como VOCOM I, VOCOM II y otros equipos universales. Su función principal es evitar el desgaste, rotura o doblado de los pines de la herramienta principal durante el uso continuo.Gracias a su estructura flexible y moldeable fabricada en ABS y metal de alta resistencia, permite acceder fácilmente a tomas OBD2 ubicadas en posiciones incómodas dentro del vehículo. Mantiene el paso directo en sus 16 pines, garantizando compatibilidad total con todos los protocolos OBD2 estándar y resistiendo impactos y condiciones de taller.",
    imagenes: ["/img/2.png"],
  },

      {
    id: "TechTool",
    titulo: "TechTool",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga: "TechTool es una plataforma integral de software de diagnóstico y mantenimiento para camiones ofrecida por Dieselsoft, estructurada en distintas versiones según la generación del vehículo. Las versiones TechTool 1.12 y TechTool 2.8 se especializan en vehículos con sistemas eléctricos versión 2 y versión 4 respectivamente, permitiendo realizar lecturas de errores, calibraciones y pruebas integrales de parámetros como compresión, consumo, desgaste y temperatura en tiempo real. Por su parte, PTT 2.7 y la versión actualizada PTT 2.8.301 (2025) ofrecen análisis precisos para detectar fallas críticas y generar reportes exhaustivos en unidades de última generación, optimizando la eficiencia operativa de la flota.",
    imagenes: ["/img/3.png"],
  },

  {
    id: "Anulación de AdBlue DAF",
    titulo: "Anulación de AdBlue DAF",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga: "¿Problemas con la válvula EGR o el límite de velocidad? En Dieselsoft optimizamos tu unidad por software: desactivamos la EGR para extender la vida útil del motor con aire limpio, liberamos la velocidad máxima y eliminamos códigos de error. Rendimiento al máximo sin piezas dañadas.",
    imagenes: ["/img/4.png"],
  },



];
