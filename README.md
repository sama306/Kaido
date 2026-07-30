# Kaidō — Landing Page para Cafetería de Especialidad

> Café de especialidad. Un lugar para bajar el ritmo.

Landing page premium diseñada para transmitir la experiencia de una cafetería de especialidad de inspiración japonesa: minimalismo cálido, ritmo lento y atención al detalle en cada interacción.

<!-- 
Capturas de pantalla sugeridas: Hero, Menú interactivo, Galería, Ubicación.
![Hero](./docs/screenshots/hero.png)
-->

---

## ⚠️ Nota importante

Este proyecto es una **propuesta comercial de diseño**, no el sitio web oficial de ninguna cafetería. Los colores y la estética están inspirados en una identidad visual real, pero:

- No utiliza el logo oficial de ningún negocio.
- Las fotografías provienen de bancos de imágenes de uso libre (Pexels/Unsplash), no del local real.
- El contenido (menú, eventos, dirección) es de ejemplo, con fines de demostración.

Este repositorio también sirve como **plantilla reutilizable** para futuras cafeterías, adaptando únicamente identidad visual y contenido.

---

## ✨ Características

- **Loader inicial animado** — secuencia de taza, líquido y vapor transformándose en isotipo, con audio opcional (respeta las políticas de autoplay del navegador).
- **Hero con parallax suave** a pantalla completa.
- **Menú interactivo** filtrable por categoría (Café, Pastelería, Brunch, Especiales), sin PDF.
- **Galería en collage** con visor fullscreen (sin carrusel).
- **Especialidades** con cards de revelado progresivo por scroll.
- **Sección de eventos** filtrable con próximas fechas y talleres.
- **Ubicación** con mapa embebido e ilustración propia del frente del local.
- **Menú mobile** a pantalla completa con cierre por click afuera, tecla Escape o navegación.
- **Elementos decorativos de línea fina** (motivo "camino" y "rama/vid") que recorren varias secciones, en línea con el significado de *kaidō* ("camino/ruta" en japonés).
- **Diseño responsive** con atención especial a mobile.
- **SEO completo**: meta tags, Open Graph, Twitter Card, sitemap y robots.txt.

---

## 🧱 Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) |
| Componentes interactivos | [React](https://react.dev) (islands) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Animación | [GSAP](https://gsap.com) (scroll-trigger, timelines) · [Framer Motion](https://www.framer.com/motion/) (micro-interacciones React) |
| Package manager | [pnpm](https://pnpm.io) |

---

## 📁 Estructura del proyecto

```
web/
├── src/
│   ├── components/
│   │   ├── astro/         # Componentes estáticos (.astro)
│   │   └── react/         # Islands interactivas de React
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css     # Design tokens: colores, tipografía, spacing
│   ├── data/               # Contenido: menú, especialidades, eventos, ubicación
│   └── assets/images/
├── public/
├── astro.config.mjs
└── package.json
```

---

## 🚀 Instalación y desarrollo

Requiere [pnpm](https://pnpm.io/installation).

```bash
# Instalar dependencias
pnpm install

# Levantar entorno de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Previsualizar el build de producción
pnpm preview
```

El sitio queda disponible en `http://localhost:4321`.

---

## 🎨 Sistema de diseño

| Uso | Color |
|---|---|
| Principal | Verde oscuro `#1F5C52` |
| Secundario | Bordó vino `#6A1D2A` |
| Fondo | Crema `#F6F2EC` |
| Detalle | Dorado (uso decorativo, moderado) |

Tipografías: **Cormorant Garamond** (títulos) e **Inter** (contenido).

---

## 🗺️ Roadmap

Implementado en esta versión: setup, sistema de diseño, todas las secciones de contenido, SEO y QA final.

Pendiente / fuera de esta versión (ver `docs/05-scope-mvp-vs-futuro.md` para el detalle completo):

- Sistema de reservas, gift cards, newsletter y fidelización con backend real.
- Integración de pagos (Mercado Pago).
- Integración con WhatsApp y notificaciones por email.
- Panel administrativo y login de usuarios.
- Auditoría completa de accesibilidad (`prefers-reduced-motion`, navegación por teclado en modales).

---

## 📄 Licencia

Proyecto de portfolio personal. El código es de uso libre como referencia; las fotografías utilizadas provienen de bancos de imágenes de uso libre para fines comerciales (Pexels/Unsplash) y mantienen sus licencias originales.
