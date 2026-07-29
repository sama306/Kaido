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
      <div className="relative w-full lg:w-[60%] h-[45vh] lg:h-full overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: 'url(/images/pexels-barista-modern-coffee-shop.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Texto que aparece progresivamente con el scroll */}
      <div className="flex-1 flex items-center px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
        <div className="max-w-xl">
          <svg viewBox="0 0 80 28" fill="none" className="w-14 h-auto opacity-50 mb-3 hidden lg:block" aria-hidden="true">
            <path d="M 0,24 Q 15,20 30,18 Q 45,16 60,18 Q 70,20 80,24" stroke="#1F5C52" stroke-width="0.8" stroke-linecap="round"/>
            <path d="M 12,21 Q 10,14 16,10 Q 18,15 12,21" stroke="#1F5C52" stroke-width="0.6" stroke-linecap="round"/>
            <path d="M 28,18 Q 32,10 36,8 Q 34,14 28,18" stroke="#6A1D2A" stroke-width="0.6" stroke-linecap="round"/>
            <path d="M 46,17 Q 44,10 48,7 Q 50,12 46,17" stroke="#1F5C52" stroke-width="0.6" stroke-linecap="round"/>
            <path d="M 64,19 Q 68,12 72,9 Q 70,16 64,19" stroke="#6A1D2A" stroke-width="0.6" stroke-linecap="round"/>
          </svg>
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
