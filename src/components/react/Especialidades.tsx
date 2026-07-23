import type { Especialidad } from "../../data/especialidades";
import especialidades from "../../data/especialidades";

interface Props {
  items?: Especialidad[];
}

export default function Especialidades({ items }: Props) {
  const data = items ?? especialidades;

  return (
    <section id="especialidades">
      {data.map((item, i) => (
        <article
          key={i}
          className="group relative h-screen w-full overflow-hidden"
        >
          {/*
            ─── Fondo: placeholder visual ───
            TODO: Reemplazar este div por <img> con la foto real del producto.
            Mantener la estructura: absolute inset-0, object-cover, will-change-transform,
            y la transición scale en hover.
            Ejemplo:
              <img
                src="/assets/especialidades/{item.nombre}.jpg"
                alt={item.nombre}
                className="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
          */}
          <div
            className="absolute inset-0 will-change-transform transition-transform duration-[800ms] ease-out group-hover:scale-105"
            style={{ background: item.gradiente }}
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-[800ms] ease-out group-hover:bg-black/50" />

          {/*
            ─── Contenido ───
            Desktop: oculto por defecto, aparece en hover con fade + slide-up.
            Mobile/touch: siempre visible (fallback sin hover).
          */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
              className="text-center max-w-xl transition-[opacity,transform] duration-[800ms] ease-out
                opacity-100 translate-y-0
                lg:opacity-0 lg:translate-y-6
                lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
            >
              <h2 className="text-h1 lg:text-display font-titulo text-crema mb-4">
                {item.nombre}
              </h2>
              <p className="text-body font-contenido text-crema/80 mb-5 max-w-lg mx-auto leading-relaxed">
                {item.descripcion}
              </p>
              <p className="text-h3 lg:text-h2 font-titulo text-dorado mb-8">
                {item.precio}
              </p>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-crema text-crema font-contenido font-medium text-body rounded-none transition-all duration-300 hover:bg-crema hover:text-fondo-oscuro no-underline"
              >
                Ver en menú
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
