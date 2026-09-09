export interface Producto {
  id: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagen: string;
  manualPdf1?: string;
  manualPdf2?: string;
  videoYoutube?: string;
}

export const LISTA_PRODUCTOS: Producto[] = [
  {
    id: "BT CONTROLLER",
    titulo: "BT CONTROLLER",
    descripcionCorta: "NUESTRA SUITE INSIGNIA PARA CONTROL OPERACIONAL.",
    descripcionLarga:
      " Es una herramienta profesional diseñada para controlar módulos de hardware mediante Bluetooth (HC-05/06). Permite enviar valores de velocidad precisos con una interfaz visual intuitiva y fluida.",
    imagen: "/img/bt.png",
    manualPdf1: "/pdf/BT-Controller-Manual.pdf",
    manualPdf2: "/pdf/SIMULADOR-VELOCIDAD.pdf",
    videoYoutube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "diesellink",
    titulo: "DIESELLINK IOT BOX",
    descripcionCorta:
      "HARDWARE PROPIETARIO CONECTADO DIRECTO AL PUERTO OBD-II.",
    descripcionLarga:
      "HARDWARE PROPIETARIO CONECTADO DIRECTO AL PUERTO OBD-II / J1939 DEL MOTOR DEL CAMIÓN. TRANSMITE DIAGNÓSTICO PREVENTIVO A LA NUBE.",
    imagen: "/img/producto2.png",
    manualPdf1: "/manuales/guia-rapida.pdf",
    manualPdf2: "/manuales/manual-tecnico.pdf",
    videoYoutube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "simulador",
    titulo: "SIMULADOR DE VELOCIDAD",
    descripcionCorta: "DISPOSITIVO DE DIAGNÓSTICO E INGENIERÍA.",
    descripcionLarga:
      "DISPOSITIVO DE DIAGNÓSTICO E INGENIERÍA PARA CAMIONES QUE PERMITE SIMULAR SEÑALES DE VELOCIDAD EN TIEMPO REAL DESDE TU SMARTPHONE. IDEAL PARA PRUEBAS DE TALLER, VERIFICACIÓN DE TABLEROS Y TAXÍMETROS.",
    imagen: "/img/producto3.png",
    manualPdf1: "/manuales/guia-rapida.pdf",
    manualPdf2: "/manuales/manual-tecnico.pdf",
    videoYoutube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
