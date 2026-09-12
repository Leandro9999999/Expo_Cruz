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
      "Es una herramienta profesional diseñada para controlar módulos de hardware mediante Bluetooth (HC-05/06). Permite enviar valores de velocidad precisos con una interfaz visual intuitiva y fluida.",
    imagenes: ["/img/vocom2.png"],
    manualPdf1: "/pdf/PROBADOR VEB EPG.pdf",
    manualPdf2: "/pdf/",
    videoYoutube: "https://www.youtube.com/watch?v=TU_LINK",
  },
];
