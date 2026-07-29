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
    <section id="eventos" className="relative overflow-hidden pt-section px-6 bg-crema">
<div className="pointer-events-none absolute bottom-6 right-6 z-0 opacity-25 hidden lg:block" aria-hidden="true">
          <svg viewBox="0 0 40 72" className="w-20 h-auto" fill="none">
            <path d="M 20,72 Q 14,56 16,44 Q 18,32 26,26 Q 34,20 30,12 Q 26,4 20,0" stroke="#1F5C52" stroke-width="0.9" stroke-linecap="round"/>
            <path d="M 20,72 Q 28,56 24,44 Q 20,32 14,26 Q 8,20 12,12 Q 16,4 20,0" stroke="#6A1D2A" stroke-width="0.6" stroke-linecap="round"/>
            <path d="M 16,44 Q 8,42 4,44" stroke="#1F5C52" stroke-width="0.4" stroke-linecap="round"/>
            <path d="M 26,26 Q 34,22 38,26" stroke="#6A1D2A" stroke-width="0.4" stroke-linecap="round"/>
            <path d="M 14,26 Q 6,24 2,26" stroke="#1F5C52" stroke-width="0.4" stroke-linecap="round"/>
            <path d="M 20,12 Q 18,8 20,4" stroke="#B8935F" stroke-width="0.4" stroke-linecap="round"/>
            <path d="M 30,12 Q 32,8 30,4" stroke="#B8935F" stroke-width="0.4" stroke-linecap="round"/>
          </svg>
        </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className="w-8 h-px bg-bordo/40" />
          <span className="text-small font-contenido font-medium uppercase tracking-[0.15em] text-dorado">AGENDA</span>
          <span className="w-8 h-px bg-bordo/40" />
        </div>
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
