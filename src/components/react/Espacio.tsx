import { useState, useEffect, useCallback } from "react";
import imagenesEspacio from "../../data/espacio";
import type { EspacioImagen } from "../../data/espacio";

export default function Espacio() {
  const [selected, setSelected] = useState<EspacioImagen | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <>
      <section id="espacio" className="py-section px-6 bg-crema">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 text-verde-oscuro text-center mb-section-inner">
            Nuestro Espacio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
            {imagenesEspacio.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelected(img)}
                className={`
                  group relative overflow-hidden cursor-pointer border-0 p-0 bg-transparent text-left
                  transition-transform duration-[800ms] ease-out
                  hover:scale-[1.03] hover:rotate-[1.5deg]
                  focus-visible:outline-2 focus-visible:outline-verde-oscuro focus-visible:outline-offset-2
                  ${img.span}
                `}
              >
                <div
                  className="absolute inset-0 will-change-transform transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  style={{ background: img.gradiente }}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-[800ms] ease-out group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center text-crema/70 hover:text-crema transition-colors duration-300 z-10 text-h3 leading-none"
            aria-label="Cerrar"
          >
            &#x2715;
          </button>
          <div
            className="relative w-full max-w-5xl h-[50vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-full rounded-sm"
              style={{ background: selected.gradiente }}
            />
          </div>
        </div>
      )}
    </>
  );
}
