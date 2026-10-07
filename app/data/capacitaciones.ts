export interface Producto {
  id: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  descripcionLarga2?: string;
  imagenes: string[];
  videoYoutube?: string;
}
