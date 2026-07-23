export type TipoEvento = "Todos" | "Degustación" | "Taller" | "Especial";

export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  descripcion: string;
  tipo: TipoEvento;
  destacado?: boolean;
}

const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Cata de Orígenes",
    fecha: "Sáb 2 Ago",
    hora: "17:00 — 19:00",
    descripcion: "Recorrido por tres perfiles de Etiopía, Colombia y Brasil. Incluye ficha técnica y granos para llevar.",
    tipo: "Degustación",
    destacado: true,
  },
  {
    id: 2,
    titulo: "Taller de Latte Art",
    fecha: "Dom 10 Ago",
    hora: "10:00 — 13:00",
    descripcion: "Aprendé las técnicas básicas de vertido libre: corazón, rosetta y tulipán. Práctica con leche entera y vegetal.",
    tipo: "Taller",
  },
  {
    id: 3,
    titulo: "Noche de Jazz",
    fecha: "Vie 15 Ago",
    hora: "20:00 — 23:00",
    descripcion: "Trío en vivo con piano, contrabajo y batería. Entrada libre con consumición mínima.",
    tipo: "Especial",
    destacado: true,
  },
  {
    id: 4,
    titulo: "Degustación de Especiales",
    fecha: "Sáb 23 Ago",
    hora: "16:00 — 18:00",
    descripcion: "Probá nuestra nueva línea de cafés de fermentación natural. Maridaje con chocolates artesanales.",
    tipo: "Degustación",
  },
  {
    id: 5,
    titulo: "Taller de Pastelería",
    fecha: "Dom 24 Ago",
    hora: "09:30 — 12:30",
    descripcion: "Hacé croissants y pain au chocolat desde cero. Masa laminada, plegados y horneado.",
    tipo: "Taller",
  },
  {
    id: 6,
    titulo: "Mercado de Productores",
    fecha: "Sáb 30 Ago",
    hora: "10:00 — 16:00",
    descripcion: "Feria de pequeños productores: miel, pan de masa madre, fermentados y café en grano.",
    tipo: "Especial",
  },
];

export default eventos;
