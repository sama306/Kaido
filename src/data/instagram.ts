export interface InstagramPost {
  id: number;
  imagen: string;
  alt: string;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    imagen: "/images/pexels-creamy-flat-white.jpg",
    alt: "Flat White recién servido con arte latte",
    link: "https://instagram.com/p/ejemplo1",
  },
  {
    id: 2,
    imagen: "/images/pexels-coffee-shop-amar.jpg",
    alt: "Nuestro rincón de lectura favorito",
    link: "https://instagram.com/p/ejemplo2",
  },
  {
    id: 3,
    imagen: "/images/pexels-croissants-board.jpg",
    alt: "Croissant recién horneado de la mañana",
    link: "https://instagram.com/p/ejemplo3",
  },
  {
    id: 4,
    imagen: "/images/pexels-matcha-green-tea.jpg",
    alt: "Detalle de nuestra estación de Matcha",
    link: "https://instagram.com/p/ejemplo4",
  },
  {
    id: 5,
    imagen: "/images/pexels-coffee-shop-interior-barista.jpg",
    alt: "Máquina de espresso en acción",
    link: "https://instagram.com/p/ejemplo5",
  },
  {
    id: 6,
    imagen: "/images/pexels-latte-warm.jpg",
    alt: "Vista del atardecer desde nuestra ventana",
    link: "https://instagram.com/p/ejemplo6",
  },
];

export default instagramPosts;
