export interface Producto {
  id: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  descripcionLarga2?: string;
  imagenes: string[];
  manualPdf1?: string;
  manualPdf2?: string;
  videoYoutube?: string;
}

export const LISTA_PRODUCTOS: Producto[] = [
  {
    id: "BT-CONTROLLER",
    titulo: "BT CONTROLLER",
    descripcionCorta: "Más información",
    descripcionLarga:
      "Es una herramienta profesional diseñada para controlar módulos de hardware mediante Bluetooth (HC-05/06). Permite enviar valores de velocidad precisos con una interfaz visual intuitiva y fluida.",
    imagenes: ["/img/bt3.png", "/img/bt2.png", "/img/bt4.png", "/img/bt1.png"],
    manualPdf1: "/pdf/BT-Controller-Manual.pdf",
    manualPdf2: "/pdf/SIMULADOR-VELOCIDAD.pdf",
    videoYoutube: "https://www.youtube.com/watch?v=TU_LINK",
  },
  {
    id: "Truck Link",
    titulo: "Truck Link",
    descripcionCorta: "Más información",
    descripcionLarga:
      "TruckLink es un dispositivo de redque establece la comunicación entre los sistemas centrales y el equipo del cliente, gestionando el direccionamiento y latransferencia de paquetes de datos hacia la computadora delusuario.",
    descripcionLarga2:
      "A quién está dirigido: Clientes de DieselSoft Requisitos previos: computadora donde instalar y configurar el TruckLink",
    imagenes: ["/img/trucklink/1.png", "/img/trucklink/2.png"],
    manualPdf1: "/pdf/Manual_TruckLink.pdf",
  },

  {
    id: "PROBADOR-VEB-EPG",
    titulo: "PROBADOR VEB EPG",
    descripcionCorta: "Más información",
    descripcionLarga:
      "Tester para diagnóstico de actuadores EPG, WasteGate y Válvula AVU en sistemas diésel (12V/24V), con pantalla digital para lecturas de voltaje/corriente en tiempo real, modo de prueba automático y control de frecuencia PWM.",
    imagenes: [
      "/img/PROBADOR DE VEB -EPG.png",
      "/img/PANEL DE CONTROL.png",
      "/img/Cable para la válvula AVU.png",
      "/img/Cable de alimentación.png",
      "/img/CAÑERIAS DE AIRE.png",
      "/img/NIPLES DE ACOPLE.png",
    ],
    manualPdf1: "/pdf/PROBADOR VEB EPG.pdf",

    videoYoutube: "https://www.youtube.com/watch?v=TU_LINK",
  },
  {
    id: "FH-4 Expert",
    titulo: "FH-4 Expert",
    descripcionCorta: "Más información",
    descripcionLarga:
      "FH-4 Expert es una aplicación móvil desarrollada por DieselSoft, orientada a brindar soporte técnico a profesionales y técnicos de talleres especializados en diagnóstico y reparación de vehículos. La aplicación proporciona acceso a información técnica, parámetros de configuración y diagramas de referencia, permitiendo identificar y solucionar incidencias de manera más eficiente.",
    imagenes: ["/img/celular.png"],
    manualPdf1: "/pdf/Manual-FH4-Expert.pdf",
  },
  {
    id: "Ecu Repair-1.",
    titulo: "Ecu Repair-1.",
    descripcionCorta: "Más información",
    descripcionLarga:
      "Ecu Repair transforma imágenes técnicas en una experiencia interactiva. Permite localizar componentes, revisar conexiones, consultar esquemáticos y organizar información técnica en un solo lugar.",
    imagenes: ["/img/ecurepair.png"],
    manualPdf1: "/pdf/Manual Ecu Repair-1.pdf",
  },

  {
    id: "DevTool-FH5",
    titulo: "DevTool-FH5",
    descripcionCorta: "Más información",
    descripcionLarga:
      "DevTool-FH5 es una aplicación de escritorio desarrollada por DieselSoft, diseñada específicamente para facilitar el trabajo de los técnicos. Su propósito es agilizar y simplificar la habilitación de parámetros, permitiendo realizar estos procesos de forma más rápida, sencilla y eficiente.",
    imagenes: ["/img/DevToolFH5.png", "/img/im65.png"],
    manualPdf1: "/pdf/Manual-DevTool-FH-5.pdf",
  },

  {
    id: "TechTool",
    titulo: "TechTool",
    descripcionCorta: "Más información",
    descripcionLarga:
      "TechTool es una plataforma integral de software de diagnóstico y mantenimiento para camiones ofrecida por Dieselsoft, diseñada para optimizar la eficiencia operativa de las flotas según la generación del vehículo.",
    descripcionLarga2:
      "Verciones disponibles: TechTool 1.12, TechTool 2.7, TechTool 2.8.175 y TechTool 2.8.360.",
    imagenes: [
      "/img/software/TECHTOOL1.12.png",
      "/img/software/TECHTOOL 2.7.png",

      "/img/software/TECHTOOL 2.8.175.png",
      "/img/software/TECHTOOL 2.8.360.png",
    ],
  },

  {
    id: "Vocom-II-Plus",
    titulo: "Vocom II Plus",
    descripcionCorta: "Más información",
    descripcionLarga:
      "La herramienta de diagnóstico de camiones Volvo Vocom 88894000 es la herramienta de diagnóstico OEM más reciente, genuina y única fabricada por Movimento en Suecia y diseñada para el mantenimiento de Volvo, MACK, Penta (motores marinos), UD, camiones Renault EURO 6, autobuses, máquinas de construcción y otros vehículos pesados que cubren todo el proceso de reparación mediante el uso de una computadora portátil de diagnóstico especial con software de diagnóstico configurado. Fue desarrollado para hacer las tareas del taller de reparaciones más fáciles y más eficientes.",
    imagenes: [
      "/img/Vocom II plus/1.png",
      "/img/Vocom II plus/2.png",
      "/img/Vocom II plus/0.png",
      "/img/Vocom II plus/3.png",
      "/img/Vocom II plus/4.png",
    ],
  },
  {
    id: "VOCOM-1",
    titulo: "VOCOM 1",
    descripcionCorta: "Más información",
    descripcionLarga:
      "La herramienta de diagnóstico de camiones Volvo Vocom 88890300 es la herramienta de diagnóstico OEM más reciente, genuina y única fabricada por Movimento en Suecia y diseñada para el mantenimiento de Volvo, MACK, Penta (motores marinos), UD, camiones Renault EURO 6, autobuses, máquinas de construcción y otros vehículos pesados que cubren todo el proceso de reparación mediante el uso de una computadora portátil de diagnóstico especial con software de diagnóstico configurado. Fue desarrollado para hacer las tareas del taller de reparaciones más fáciles y más eficientes.",
    imagenes: [
      "/img/vocom/1.png",
      "/img/vocom/2.png",
      "/img/vocom/3.png",
      "/img/vocom/4.png",
    ],
  },
  {
    id: "VOLVO-IMPACT",
    titulo: "Software de diagnóstico VOLVO IMPACT",
    descripcionCorta: "Más información",
    descripcionLarga:
      "Volvo Impact es la plataforma integral para Windows (online/offline) que reúne todo lo necesario para el mantenimiento de camiones y autobuses Volvo (1975–2025): catálogo completo de piezas y repuestos estándar, manuales paso a paso con lista de herramientas, diagramas eléctricos y boletines técnicos por cada sistema, y el módulo TRD para el cálculo de tiempos estándar en la gestión de órdenes de trabajo.",
    imagenes: ["/img/software/volvo impact.png"],
  },

  {
    id: "Getac",
    titulo: "Getac S410 DUAL BATTERY",
    descripcionCorta: "Más información",
    descripcionLarga:
      "Excelente durabilidad, gran autonomía de batería, 16 GB de RAM y pantalla Full HD. Ideal para diagnósticos automotrices, logística o trabajo técnico al aire libre.A considerar: El procesador (i5-6300U) es de 6ta generación (lanzado originalmente alrededor de 2015-2016), por lo que no cumple de forma oficial los requisitos de Windows 11. Es una máquina enfocada en resistencia física más que en potencia de cálculo moderna.",

    imagenes: [
      "/img/getac/2.png",
      "/img/getac/1.png",
      "/img/getac/0.png",
      "/img/getac/3.png",
      "/img/getac/4.png",
    ],
  },
  {
    id: "INTERFAZ SCANIA VCI3",
    titulo: "INTERFAZ SCANIA VCI3",
    descripcionCorta: "Más información",
    descripcionLarga:
      "El Scania VCI3 es un adaptador de diagnóstico profesional diseñado para camiones, autobuses y vehículos pesados de la marca SCANIA fabricados a partir del año 2004. Su función principal es conectarse a la red CAN BUS del vehículo (con un rango de voltaje de 7 a 40V DC) y comunicarse directamente con el software de diagnóstico especializado Scania SDP3 (versión 2.42 o superior).Su característica más destacada es la conectividad inalámbrica por Wi-Fi (802.11b/g con cifrados WPA2, WPA y WEP), lo que permite a los técnicos trabajar sin depender de cables de datos que puedan dañarse en el taller. Para mayor flexibilidad, también incluye una opción de conexión física mediante un puerto USB 2.0.",

    imagenes: ["/img/SCANIA VCI3/1.png", "/img/SCANIA VCI3/2.png"],
  },

  {
    id: "Protector OBD II - 16 PINES",
    titulo: "Protector OBD II - 16 PINES",
    descripcionCorta: "Más información",
    descripcionLarga:
      " El Protector OBD II de 16 pines es un cable de extensión de 36 cm diseñado para proteger los conectores originales de interfaces de diagnóstico como VOCOM I, VOCOM II y otros equipos universales. Su función principal es evitar el desgaste, rotura o doblado de los pines de la herramienta principal durante el uso continuo.Gracias a su estructura flexible y moldeable fabricada en ABS y metal de alta resistencia, permite acceder fácilmente a tomas OBD2 ubicadas en posiciones incómodas dentro del vehículo. Mantiene el paso directo en sus 16 pines, garantizando compatibilidad total con todos los protocolos OBD2 estándar y resistiendo impactos y condiciones de taller.",
    imagenes: [
      "/img/PROTECTOR/1.jpeg",
      "/img/PROTECTOR/2.jpeg",
      "/img/PROTECTOR/3.jpeg",
      "/img/PROTECTOR/4.png",
      "/img/PROTECTOR/5.png",
      "/img/PROTECTOR/6.png",
      "/img/PROTECTOR/7.png",
    ],
  },
];
