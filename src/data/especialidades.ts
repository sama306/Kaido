export interface Especialidad {
  nombre: string;
  descripcion: string;
  precio: string;
  gradiente: string;
}

const especialidades: Especialidad[] = [
  {
    nombre: "Flat White",
    descripcion: "Doble shot de espresso con textura sedosa de leche. Nuestro más pedido.",
    precio: "$3.200",
    gradiente: "linear-gradient(135deg, #1F5C52 0%, #2A7A6E 40%, #3D2C2E 80%, #1F2421 100%)",
  },
  {
    nombre: "Matcha Latte",
    descripcion: "Matcha ceremonial japonés batido a mano con leche vegetal.",
    precio: "$3.800",
    gradiente: "linear-gradient(135deg, #5B7B4A 0%, #3D5A2E 40%, #1F2421 80%, #2E2A27 100%)",
  },
  {
    nombre: "Cold Brew",
    descripcion: "Extracción en frío durante 16 horas. Suave, dulce naturalmente.",
    precio: "$3.500",
    gradiente: "linear-gradient(135deg, #4A3B2C 0%, #6A1D2A 40%, #1F2421 80%, #1F5C52 100%)",
  },
  {
    nombre: "Affogato",
    descripcion: "Espresso recién hecho sobre helado artesanal de vainilla.",
    precio: "$4.000",
    gradiente: "linear-gradient(135deg, #B8935F 0%, #6A1D2A 35%, #1F5C52 70%, #1F2421 100%)",
  },
];

export default especialidades;
