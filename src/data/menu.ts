export type CategoriaMenu = "Café" | "Pastelería" | "Brunch" | "Especiales";

export interface MenuItem {
  foto: string;
  nombre: string;
  descripcion: string;
  precio: string;
  categoria: CategoriaMenu;
}

const menu: MenuItem[] = [
  {
    nombre: "Flat White",
    descripcion: "Doble shot de espresso con textura sedosa de leche. Nuestro más pedido.",
    precio: "$3.200",
    categoria: "Café",
    foto: "/images/pexels-flat-white-coffee.jpg",
  },
  {
    nombre: "Espresso",
    descripcion: "Single shot intenso de nuestra casa de tostado medio oscuro.",
    precio: "$2.000",
    categoria: "Café",
    foto: "/images/pexels-coffee-arda.jpg",
  },
  {
    nombre: "Cappuccino",
    descripcion: "Clásico italiano con espuma firme y cacao amargo rallado.",
    precio: "$3.000",
    categoria: "Café",
    foto: "/images/pexels-cappuccino-cup.jpg",
  },
  {
    nombre: "Matcha Latte",
    descripcion: "Matcha ceremonial japonés batido a mano con leche vegetal.",
    precio: "$3.800",
    categoria: "Café",
    foto: "/images/pexels-matcha-latte.jpg",
  },
  {
    nombre: "Cold Brew",
    descripcion: "Extracción en frío durante 16 horas. Suave, dulce naturalmente.",
    precio: "$3.500",
    categoria: "Café",
    foto: "/images/pexels-coffee-cup-close.jpg",
  },
  {
    nombre: "Affogato",
    descripcion: "Espresso recién hecho sobre helado artesanal de vainilla.",
    precio: "$4.000",
    categoria: "Café",
    foto: "/images/pexels-latte-beans.jpg",
  },
  {
    nombre: "Croissant de Manteca",
    descripcion: "Laminado artesanal, 24 horas de reposo. Hojaldre dorado y aireado.",
    precio: "$2.800",
    categoria: "Pastelería",
    foto: "/images/pexels-croissants-sunlight.jpg",
  },
  {
    nombre: "Pain au Chocolat",
    descripcion: "Croissant con barra de chocolate semiamargo. Horneado cada mañana.",
    precio: "$3.200",
    categoria: "Pastelería",
    foto: "/images/pexels-croissants-bakery.jpg",
  },
  {
    nombre: "Cookie de Chocolate",
    descripcion: "Con chips de chocolate belga y un toque de sal marina. Masticable por dentro, crocante por fuera.",
    precio: "$2.500",
    categoria: "Pastelería",
    foto: "/images/pexels-coffee-beans-close.jpg",
  },
  {
    nombre: "Tarta de Limón",
    descripcion: "Base de masa sablée, crema de limón, merengue italiano tostado.",
    precio: "$3.500",
    categoria: "Pastelería",
    foto: "/images/pexels-latte-minimal.jpg",
  },
  {
    nombre: "Scone de Arándanos",
    descripcion: "Scone horneado al momento, arándanos frescos, crema ácida. Acompaña mantequilla casera.",
    precio: "$2.800",
    categoria: "Pastelería",
    foto: "/images/pexels-croissants-display.jpg",
  },
  {
    nombre: "Tostada con Palta",
    descripcion: "Pan de masa madre, palta fresca aplastada, escamas de sal, limón, y un toque de chili.",
    precio: "$4.200",
    categoria: "Brunch",
    foto: "/images/pexels-croissants-berries.jpg",
  },
  {
    nombre: "Sandwich de Pastrami",
    descripcion: "Pastrami de ternera, pepinillos encurtidos, mostaza antigua, pan de centeno prensado.",
    precio: "$5.500",
    categoria: "Brunch",
    foto: "/images/pexels-coffee-beans-texture.jpg",
  },
  {
    nombre: "Bowl de Açaí",
    descripcion: "Açaí con banana, granola crocante, semillas de chía, y miel de montaña.",
    precio: "$4.800",
    categoria: "Brunch",
    foto: "/images/pexels-matcha-green-tea.jpg",
  },
  {
    nombre: "Huevos Benedictinos",
    descripcion: "Dos huevos pochados sobre pan brioche, jamón serrano, salsa holandesa casera.",
    precio: "$5.800",
    categoria: "Brunch",
    foto: "/images/pexels-coffee-beans-macro.jpg",
  },
  {
    nombre: "Granola Casera",
    descripcion: "Granola horneada con frutos secos y miel, servida con yogurt natural y frutas de estación.",
    precio: "$3.800",
    categoria: "Brunch",
    foto: "/images/pexels-coffee-beans-macro2.jpg",
  },
  {
    nombre: "Café Helado con Mascarpone",
    descripcion: "Cold brew con crema de mascarpone batida y cacao amargo. Nuestra firma.",
    precio: "$4.500",
    categoria: "Especiales",
    foto: "/images/pexels-coffee-rustic.jpg",
  },
  {
    nombre: "Latte de Lavanda",
    descripcion: "Espresso con leche vaporizada, jarabe de lavanda artesanal y pétalos secos.",
    precio: "$4.200",
    categoria: "Especiales",
    foto: "/images/pexels-coffee-art.jpg",
  },
  {
    nombre: "Chocolate Caliente Artesanal",
    descripcion: "Chocolate belga derretido con leche entera, canela y un toque de cayena.",
    precio: "$3.800",
    categoria: "Especiales",
    foto: "/images/pexels-coffee-zeynep.jpg",
  },
  {
    nombre: "Affogato con Dulce de Leche",
    descripcion: "Espresso sobre helado de dulce de leche artesanal, almendras tostadas y caramelo.",
    precio: "$4.800",
    categoria: "Especiales",
    foto: "/images/pexels-latte-flowers.jpg",
  },
  {
    nombre: "Té Chai Casero",
    descripcion: "Mezcla de especias molida a mano, jengibre fresco, leche cremosa y miel.",
    precio: "$3.500",
    categoria: "Especiales",
    foto: "/images/pexels-latte-blue-cup.jpg",
  },
];

export default menu;
