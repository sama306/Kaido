export interface Horario {
  dias: string;
  horas: string;
}

export interface RedSocial {
  nombre: string;
  url: string;
  label: string;
}

export interface UbicacionData {
  direccion: string;
  direccionCompleta: string;
  telefono: string;
  email: string;
  horarios: Horario[];
  googleMapsEmbedUrl: string;
  googleMapsNavUrl: string;
  wazeNavUrl: string;
  redesSociales: RedSocial[];
}

export const ubicacion: UbicacionData = {
  direccion: "Gurruchaga 2150, Palermo",
  direccionCompleta: "Gurruchaga 2150, Palermo Soho, CABA",
  telefono: "+54 11 4832-4500",
  email: "hola@kaido.cafe",
  horarios: [
    { dias: "Lunes a viernes", horas: "8:00 — 19:00" },
    { dias: "Sábados", horas: "9:00 — 20:00" },
    { dias: "Domingos", horas: "10:00 — 18:00" },
  ],
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5372!2d-58.4274!3d-34.5879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sGurruchaga+2150%2C+CABA!5e0!3m2!1ses!2sar!4v1",
  googleMapsNavUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Gurruchaga+2150,+Palermo,+CABA",
  wazeNavUrl: "https://waze.com/ul?ll=-34.5879,-58.4274&navigate=yes",
  redesSociales: [
    { nombre: "Instagram", url: "https://instagram.com/kaido", label: "@kaido" },
    { nombre: "Facebook", url: "https://facebook.com/kaido", label: "/kaido" },
    { nombre: "Twitter", url: "https://twitter.com/kaido", label: "@kaido" },
  ],
};
