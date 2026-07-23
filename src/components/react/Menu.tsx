import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../../data/menu";
import type { MenuItem, CategoriaMenu } from "../../data/menu";

const categorias: { id: CategoriaMenu; label: string; emoji: string }[] = [
  { id: "Café", label: "Café", emoji: "☕" },
  { id: "Pastelería", label: "Pastelería", emoji: "🥐" },
  { id: "Brunch", label: "Brunch", emoji: "🥪" },
  { id: "Especiales", label: "Especiales", emoji: "🍔" },
];

export default function Menu() {
  const [categoria, setCategoria] = useState<CategoriaMenu>("Café");

  const filtrados = menu.filter((item) => item.categoria === categoria);

  return (
    <section id="menu" className="py-section px-6 bg-crema">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-h2 text-verde-oscuro text-center mb-section-inner">
          Menú
        </h2>

        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-2 mb-contenido">
          {categorias.map((cat) => {
            const activa = categoria === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategoria(cat.id)}
                className={`
                  pb-2.5 text-body font-contenido font-medium tracking-wide
                  transition-colors duration-300 ease-out cursor-pointer
                  border-b-2
                  ${activa
                    ? "text-verde-oscuro border-dorado"
                    : "text-texto-muted border-transparent hover:text-texto"
                  }
                `}
              >
                <span className="mr-1.5">{cat.emoji}</span>
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={categoria}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {filtrados.map((item) => (
                <MenuItemCard key={item.nombre} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-white/70 backdrop-blur-sm overflow-hidden"
    >
      <div
        className="aspect-[4/3] w-full will-change-transform transition-transform duration-[800ms] ease-out group-hover:scale-105"
        style={{ background: item.foto }}
      />

      <div className="p-5 md:p-6">
        <h3 className="text-h3 md:text-h4 font-titulo text-verde-oscuro mb-2">
          {item.nombre}
        </h3>
        <p className="text-small font-contenido text-texto-muted leading-relaxed mb-3 line-clamp-2">
          {item.descripcion}
        </p>
        <p className="text-h4 font-titulo text-dorado">{item.precio}</p>
      </div>
    </motion.div>
  );
}
