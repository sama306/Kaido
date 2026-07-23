export interface InstagramPost {
  id: number;
  imagen: string;
  alt: string;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    imagen: "linear-gradient(135deg, #1F5C52 0%, #2A7A6E 40%, #3D2C2E 80%, #1F2421 100%)",
    alt: "Flat White recién servido con arte latte",
    link: "https://instagram.com/p/ejemplo1",
  },
  {
    id: 2,
    imagen: "linear-gradient(135deg, #6A1D2A 0%, #8A2D3A 40%, #B8935F 80%, #1F2421 100%)",
    alt: "Nuestro rincón de lectura favorito",
    link: "https://instagram.com/p/ejemplo2",
  },
  {
    id: 3,
    imagen: "linear-gradient(135deg, #B8935F 0%, #D4A76A 40%, #F6F2EC 80%, #1F2421 100%)",
    alt: "Croissant recién horneado de la mañana",
    link: "https://instagram.com/p/ejemplo3",
  },
  {
    id: 4,
    imagen: "linear-gradient(135deg, #5B7B4A 0%, #3D5A2E 40%, #1F5C52 80%, #2E2A27 100%)",
    alt: "Detalle de nuestra estación de Matcha",
    link: "https://instagram.com/p/ejemplo4",
  },
  {
    id: 5,
    imagen: "linear-gradient(135deg, #3D2C2E 0%, #6A1D2A 40%, #1F2421 80%, #2E2A27 100%)",
    alt: "Máquina de espresso en acción",
    link: "https://instagram.com/p/ejemplo5",
  },
  {
    id: 6,
    imagen: "linear-gradient(135deg, #1F2421 0%, #3D5A2E 40%, #5B7B4A 80%, #1F5C52 100%)",
    alt: "Vista del atardecer desde nuestra ventana",
    link: "https://instagram.com/p/ejemplo6",
  },
];

export default instagramPosts;
