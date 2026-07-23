import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  "Kaido nació de una idea simple:",
  "un espacio donde el café de especialidad",
  "se tome con calma.",
  "Donde cada taza cuente una historia.",
];

export default function Historia() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = linesRef.current.filter(Boolean);

      gsap.set(lines, { autoAlpha: 0, y: 32 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=120%",
          scrub: 1.5,
        },
      });

      lines.forEach((line, i) => {
        tl.to(line, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }, i * 0.35);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="relative h-screen flex flex-col lg:flex-row bg-crema overflow-hidden"
    >
      {/*
        ─── Imagen protagonista ───
        TODO: Reemplazar este div por <img> con la foto real del local.
        Mantener la estructura: absolute inset-0, object-cover, will-change-transform.
        Ejemplo:
          <img src="/assets/foto-local.jpg" alt="Nuestra historia" className="absolute inset-0 w-full h-full object-cover will-change-transform" />
      */}
      <div className="relative w-full lg:w-[60%] h-[45vh] lg:h-full overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            background: "linear-gradient(135deg, #1F5C52 0%, #6A1D2A 45%, #B8935F 75%, #1F2421 100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Texto que aparece progresivamente con el scroll */}
      <div className="flex-1 flex items-center px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-bordo/40" />
            <span className="text-small font-contenido font-medium uppercase tracking-[0.15em] text-dorado">EL LUGAR</span>
          </div>
          {LINES.map((line, i) => (
            <p
              key={i}
              ref={(el) => { linesRef.current[i] = el; }}
              className="font-titulo text-h3 lg:text-h2 leading-snug text-verde-oscuro mb-5 last:mb-0"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
