export interface Especialidad {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

const especialidades: Especialidad[] = [
  {
    nombre: "Flat White",
    descripcion: "Doble shot de espresso con textura sedosa de leche. Nuestro más pedido.",
    precio: "$3.200",
    imagen: "/images/pexels-flat-white-coffee.jpg",
  },
  {
    nombre: "Matcha Latte",
    descripcion: "Matcha ceremonial japonés batido a mano con leche vegetal.",
    precio: "$3.800",
    imagen: "/images/pexels-matcha-latte.jpg",
  },
  {
    nombre: "Cold Brew",
    descripcion: "Extracción en frío durante 16 horas. Suave, dulce naturalmente.",
    precio: "$3.500",
    imagen: "/images/pexels-coffee-cup.jpg",
  },
  {
    nombre: "Affogato",
    descripcion: "Espresso recién hecho sobre helado artesanal de vainilla.",
    precio: "$4.000",
    imagen: "/images/pexels-latte-beans.jpg",
  },
];

export default especialidades;
