import { useState } from "react";
import eventos from "../../data/eventos";
import type { TipoEvento } from "../../data/eventos";

const tipos: { id: TipoEvento; label: string }[] = [
  { id: "Todos", label: "Todos" },
  { id: "Degustación", label: "Degustaciones" },
  { id: "Taller", label: "Talleres" },
  { id: "Especial", label: "Especiales" },
];

export default function Eventos() {
  const [tipo, setTipo] = useState<TipoEvento>("Todos");

  const filtrados =
    tipo === "Todos"
      ? eventos
      : eventos.filter((e) => e.tipo === tipo);

  return (
    <section id="eventos" className="py-section px-6 bg-crema">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-h2 text-verde-oscuro text-center mb-section-inner">
          Eventos
        </h2>

        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-2 mb-contenido">
          {tipos.map((t) => {
            const activo = tipo === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTipo(t.id)}
                className={`
                  pb-2.5 text-body font-contenido font-medium tracking-wide
                  transition-colors duration-300 ease-out cursor-pointer
                  border-b-2
                  ${activo
                    ? "text-verde-oscuro border-dorado"
                    : "text-texto-muted border-transparent hover:text-texto"
                  }
                `}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {filtrados.length === 0 && (
            <p className="text-center text-texto-muted font-contenido py-12">
              No hay eventos de esta categoría por ahora.
            </p>
          )}

          {filtrados.map((evento) => (
            <article
              key={evento.id}
              className={`relative p-5 md:p-6 ${
                evento.destacado
                  ? "bg-verde-oscuro text-crema"
                  : "bg-white/70 backdrop-blur-sm"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`text-h3 md:text-h4 font-titulo ${
                        evento.destacado ? "text-crema" : "text-verde-oscuro"
                      }`}
                    >
                      {evento.titulo}
                    </h3>
                    {evento.destacado && (
                      <span className="shrink-0 text-small font-contenido font-medium px-2.5 py-0.5 border border-crema/40 text-crema/80">
                        Destacado
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-small font-contenido mt-2 leading-relaxed ${
                      evento.destacado ? "text-crema/80" : "text-texto-muted"
                    }`}
                  >
                    {evento.descripcion}
                  </p>
                </div>

                <div
                  className={`shrink-0 text-right ${
                    evento.destacado ? "text-crema" : "text-verde-oscuro"
                  }`}
                >
                  <p className="text-h4 font-titulo">{evento.fecha}</p>
                  <p
                    className={`text-small font-contenido mt-0.5 ${
                      evento.destacado ? "text-crema/70" : "text-texto-muted"
                    }`}
                  >
                    {evento.hora}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
