export interface EspacioImagen {
  id: number;
  gradiente: string;
  alt: string;
  span: string;
}

const imagenesEspacio: EspacioImagen[] = [
  {
    id: 1,
    gradiente: "linear-gradient(135deg, #1F5C52 0%, #2A7A6E 45%, #1F2421 100%)",
    alt: "Vista general del salón principal",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    gradiente: "linear-gradient(135deg, #6A1D2A 0%, #8A2D3A 45%, #1F2421 100%)",
    alt: "Barra de espresso",
    span: "",
  },
  {
    id: 3,
    gradiente: "linear-gradient(135deg, #B8935F 0%, #8A7040 45%, #1F2421 100%)",
    alt: "Estantería con granos de café",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    gradiente: "linear-gradient(135deg, #3D5A2E 0%, #5B7B4A 45%, #1F2421 100%)",
    alt: "Rincón de lectura",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    gradiente: "linear-gradient(135deg, #2E2A27 0%, #4A403C 45%, #1F5C52 100%)",
    alt: "Mesa de trabajo comunitaria",
    span: "",
  },
  {
    id: 6,
    gradiente: "linear-gradient(135deg, #1F2421 0%, #3D2C2E 45%, #6A1D2A 100%)",
    alt: "Detalle de taza artesanal",
    span: "",
  },
  {
    id: 7,
    gradiente: "linear-gradient(135deg, #5B7B4A 0%, #3D5A2E 45%, #1F5C52 100%)",
    alt: "Zona de ventana con luz natural",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 8,
    gradiente: "linear-gradient(135deg, #8A7040 0%, #B8935F 45%, #6A1D2A 100%)",
    alt: "Máquina de espresso profesional",
    span: "md:col-span-1 md:row-span-2",
  },
];

export default imagenesEspacio;
