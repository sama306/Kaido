export interface EspacioImagen {
  id: number;
  imagen: string;
  alt: string;
  span: string;
}

const imagenesEspacio: EspacioImagen[] = [
  {
    id: 1,
    imagen: "/images/pexels-cafe-interior.jpg",
    alt: "Vista general del salón principal",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    imagen: "/images/pexels-coffee-shop-interior-barista.jpg",
    alt: "Barra de espresso",
    span: "",
  },
  {
    id: 3,
    imagen: "/images/pexels-coffee-shop-interior-2.jpg",
    alt: "Estantería con granos de café",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    imagen: "/images/pexels-coffee-shop-interior-3.jpg",
    alt: "Rincón de lectura",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    imagen: "/images/pexels-coffee-shop-wooden.jpg",
    alt: "Mesa de trabajo comunitaria",
    span: "",
  },
  {
    id: 6,
    imagen: "/images/pexels-woman-counter-cafe.jpg",
    alt: "Detalle de taza artesanal",
    span: "",
  },
  {
    id: 7,
    imagen: "/images/pexels-barista-modern-coffee-shop.jpg",
    alt: "Zona de ventana con luz natural",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 8,
    imagen: "/images/pexels-coffee-shop-daria.jpg",
    alt: "Máquina de espresso profesional",
    span: "md:col-span-1 md:row-span-2",
  },
];

export default imagenesEspacio;
