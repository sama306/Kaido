import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bgRef.current, { scale: 1.1 });

      gsap.to(bgRef.current, {
        y: -48,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/*
        ─── Fondo: placeholder visual ───
        TODO: Reemplazar este div por <video> o <img> con la foto/video real del local.
        Mantener la estructura: absolute inset-0, object-cover, y el overlay negro.
        Ejemplo con imagen:
          <img src="/assets/foto-local.jpg" alt="" className="absolute inset-0 w-full h-full object-cover will-change-transform" ref={bgRef} />
        Ejemplo con video:
          <video src="/assets/video-cafe.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover will-change-transform" ref={bgRef} />
      */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          background: "linear-gradient(160deg, #1F2421 0%, #1F5C52 25%, #6A1D2A 55%, #1F2421 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-display text-crema mb-4">
          Café de especialidad.
        </h1>
        <p className="text-h3 text-crema/80 font-contenido font-light mb-10 max-w-2xl mx-auto leading-snug">
          Un lugar para bajar el ritmo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-dorado text-fondo-oscuro font-contenido font-medium text-body rounded-none transition-all duration-300 hover:bg-dorado/85 hover:scale-[1.02] no-underline"
          >
            Ver Menú
          </a>
          <a
            href="#reservas"
            className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-crema text-crema font-contenido font-medium text-body rounded-none transition-all duration-300 hover:bg-crema hover:text-fondo-oscuro no-underline"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </section>
  );
}
