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
    foto: "linear-gradient(135deg, #1F5C52 0%, #2A7A6E 40%, #3D2C2E 80%, #1F2421 100%)",
  },
  {
    nombre: "Espresso",
    descripcion: "Single shot intenso de nuestra casa de tostado medio oscuro.",
    precio: "$2.000",
    categoria: "Café",
    foto: "linear-gradient(135deg, #3D2C2E 0%, #1F2421 40%, #2E2A27 80%, #1F5C52 100%)",
  },
  {
    nombre: "Cappuccino",
    descripcion: "Clásico italiano con espuma firme y cacao amargo rallado.",
    precio: "$3.000",
    categoria: "Café",
    foto: "linear-gradient(135deg, #B8935F 0%, #6A1D2A 30%, #3D2C2E 70%, #1F2421 100%)",
  },
  {
    nombre: "Matcha Latte",
    descripcion: "Matcha ceremonial japonés batido a mano con leche vegetal.",
    precio: "$3.800",
    categoria: "Café",
    foto: "linear-gradient(135deg, #5B7B4A 0%, #3D5A2E 40%, #1F2421 80%, #2E2A27 100%)",
  },
  {
    nombre: "Cold Brew",
    descripcion: "Extracción en frío durante 16 horas. Suave, dulce naturalmente.",
    precio: "$3.500",
    categoria: "Café",
    foto: "linear-gradient(135deg, #4A3B2C 0%, #6A1D2A 40%, #1F2421 80%, #1F5C52 100%)",
  },
  {
    nombre: "Affogato",
    descripcion: "Espresso recién hecho sobre helado artesanal de vainilla.",
    precio: "$4.000",
    categoria: "Café",
    foto: "linear-gradient(135deg, #B8935F 0%, #6A1D2A 35%, #1F5C52 70%, #1F2421 100%)",
  },
  {
    nombre: "Croissant de Manteca",
    descripcion: "Laminado artesanal, 24 horas de reposo. Hojaldre dorado y aireado.",
    precio: "$2.800",
    categoria: "Pastelería",
    foto: "linear-gradient(135deg, #B8935F 0%, #F6F2EC 30%, #D4A76A 60%, #B8935F 100%)",
  },
  {
    nombre: "Pain au Chocolat",
    descripcion: "Croissant con barra de chocolate semiamargo. Horneado cada mañana.",
    precio: "$3.200",
    categoria: "Pastelería",
    foto: "linear-gradient(135deg, #6A1D2A 0%, #3D2C2E 30%, #B8935F 70%, #F6F2EC 100%)",
  },
  {
    nombre: "Cookie de Chocolate",
    descripcion: "Con chips de chocolate belga y un toque de sal marina. Masticable por dentro, crocante por fuera.",
    precio: "$2.500",
    categoria: "Pastelería",
    foto: "linear-gradient(135deg, #6A1D2A 0%, #4A3B2C 40%, #B8935F 80%, #F6F2EC 100%)",
  },
  {
    nombre: "Tarta de Limón",
    descripcion: "Base de masa sablée, crema de limón, merengue italiano tostado.",
    precio: "$3.500",
    categoria: "Pastelería",
    foto: "linear-gradient(135deg, #B8935F 0%, #F6F2EC 35%, #5B7B4A 70%, #1F5C52 100%)",
  },
  {
    nombre: "Scone de Arándanos",
    descripcion: "Scone horneado al momento, arándanos frescos, crema ácida. Acompaña mantequilla casera.",
    precio: "$2.800",
    categoria: "Pastelería",
    foto: "linear-gradient(135deg, #5B7B4A 0%, #B8935F 30%, #F6F2EC 65%, #6A1D2A 100%)",
  },
  {
    nombre: "Tostada con Palta",
    descripcion: "Pan de masa madre, palta fresca aplastada, escamas de sal, limón, y un toque de chili.",
    precio: "$4.200",
    categoria: "Brunch",
    foto: "linear-gradient(135deg, #5B7B4A 0%, #3D5A2E 30%, #B8935F 65%, #F6F2EC 100%)",
  },
  {
    nombre: "Sandwich de Pastrami",
    descripcion: "Pastrami de ternera, pepinillos encurtidos, mostaza antigua, pan de centeno prensado.",
    precio: "$5.500",
    categoria: "Brunch",
    foto: "linear-gradient(135deg, #6A1D2A 0%, #3D2C2E 35%, #B8935F 70%, #1F2421 100%)",
  },
  {
    nombre: "Bowl de Açaí",
    descripcion: "Açaí con banana, granola crocante, semillas de chía, y miel de montaña.",
    precio: "$4.800",
    categoria: "Brunch",
    foto: "linear-gradient(135deg, #6A1D2A 0%, #5B7B4A 30%, #1F5C52 60%, #B8935F 100%)",
  },
  {
    nombre: "Huevos Benedictinos",
    descripcion: "Dos huevos pochados sobre pan brioche, jamón serrano, salsa holandesa casera.",
    precio: "$5.800",
    categoria: "Brunch",
    foto: "linear-gradient(135deg, #B8935F 0%, #F6F2EC 30%, #6A1D2A 65%, #1F2421 100%)",
  },
  {
    nombre: "Granola Casera",
    descripcion: "Granola horneada con frutos secos y miel, servida con yogurt natural y frutas de estación.",
    precio: "$3.800",
    categoria: "Brunch",
    foto: "linear-gradient(135deg, #B8935F 0%, #5B7B4A 35%, #F6F2EC 70%, #1F5C52 100%)",
  },
  {
    nombre: "Café Helado con Mascarpone",
    descripcion: "Cold brew con crema de mascarpone batida y cacao amargo. Nuestra firma.",
    precio: "$4.500",
    categoria: "Especiales",
    foto: "linear-gradient(135deg, #1F5C52 0%, #3D2C2E 30%, #6A1D2A 60%, #B8935F 100%)",
  },
  {
    nombre: "Latte de Lavanda",
    descripcion: "Espresso con leche vaporizada, jarabe de lavanda artesanal y pétalos secos.",
    precio: "$4.200",
    categoria: "Especiales",
    foto: "linear-gradient(135deg, #5B7B4A 0%, #B8935F 30%, #6A1D2A 65%, #1F2421 100%)",
  },
  {
    nombre: "Chocolate Caliente Artesanal",
    descripcion: "Chocolate belga derretido con leche entera, canela y un toque de cayena.",
    precio: "$3.800",
    categoria: "Especiales",
    foto: "linear-gradient(135deg, #6A1D2A 0%, #3D2C2E 35%, #B8935F 70%, #1F2421 100%)",
  },
  {
    nombre: "Affogato con Dulce de Leche",
    descripcion: "Espresso sobre helado de dulce de leche artesanal, almendras tostadas y caramelo.",
    precio: "$4.800",
    categoria: "Especiales",
    foto: "linear-gradient(135deg, #B8935F 0%, #6A1D2A 30%, #1F5C52 65%, #F6F2EC 100%)",
  },
  {
    nombre: "Té Chai Casero",
    descripcion: "Mezcla de especias molida a mano, jengibre fresco, leche cremosa y miel.",
    precio: "$3.500",
    categoria: "Especiales",
    foto: "linear-gradient(135deg, #1F5C52 0%, #B8935F 30%, #6A1D2A 65%, #3D2C2E 100%)",
  },
];

export default menu;
