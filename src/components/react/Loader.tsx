import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tazaPathRef = useRef<SVGPathElement>(null);
  const asaRef = useRef<SVGPathElement>(null);
  const liquidoRef = useRef<SVGPathElement>(null);
  const vapor1Ref = useRef<SVGPathElement>(null);
  const vapor2Ref = useRef<SVGPathElement>(null);
  const vapor3Ref = useRef<SVGPathElement>(null);
  const isotipoGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const audioCtxRef: { current: AudioContext | null } = { current: null };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
              if (containerRef.current) {
                containerRef.current.style.display = "none";
              }
            },
          });
        },
      });

      tl.set(
        [tazaPathRef.current, asaRef.current, liquidoRef.current],
        { opacity: 0 },
      )
        .set(
          [vapor1Ref.current, vapor2Ref.current, vapor3Ref.current],
          { opacity: 0 },
        )
        .set(isotipoGroupRef.current, { opacity: 0, scale: 0.8 })

        .to([tazaPathRef.current, asaRef.current], {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          liquidoRef.current,
          { opacity: 1, duration: 0.5, ease: "power1.in" },
          "-=0.1",
        )
        .to(
          [vapor1Ref.current, vapor2Ref.current, vapor3Ref.current],
          { opacity: 0.6, y: -8, duration: 0.6, ease: "power1.out" },
          "-=0.2",
        )
        .to(
          [tazaPathRef.current, asaRef.current, liquidoRef.current],
          { opacity: 0, duration: 0.3, ease: "power2.in" },
          "-=0.2",
        )
        .to(
          [vapor1Ref.current, vapor2Ref.current, vapor3Ref.current],
          { opacity: 0, duration: 0.2, ease: "power2.in" },
          "-=0.1",
        )
        .to(
          isotipoGroupRef.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.1",
        )
        .to({}, { duration: 0.4 });
    });

    /* Audio: fallback silencioso por defecto.
       Solo intenta reproducir si hubo interacción previa del usuario. */
    try {
      const hasInteracted =
        typeof sessionStorage !== "undefined" &&
        sessionStorage.getItem("kaido_user_interacted");

      if (hasInteracted) {
        audioCtxRef.current = new AudioContext();
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(180, audioCtxRef.current.currentTime);
        osc.frequency.linearRampToValueAtTime(
          220,
          audioCtxRef.current.currentTime + 0.6,
        );
        gain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          audioCtxRef.current.currentTime + 0.8,
        );
        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 0.8);
      }
    } catch {
      /* fallback silencioso — si el navegador bloquea el audio, no hace nada */
    }

    /* Registra la primera interacción del usuario para futuras cargas */
    const recordInteraction = () => {
      try {
        sessionStorage.setItem("kaido_user_interacted", "true");
      } catch {
        /* ignorar si sessionStorage no está disponible */
      }
      document.removeEventListener("pointerdown", recordInteraction);
      document.removeEventListener("keydown", recordInteraction);
    };
    document.addEventListener("pointerdown", recordInteraction, { once: true });
    document.addEventListener("keydown", recordInteraction, { once: true });

    return () => {
      ctx.revert();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
      document.removeEventListener("pointerdown", recordInteraction);
      document.removeEventListener("keydown", recordInteraction);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-crema, #F6F2EC)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        style={{ width: "clamp(80px, 20vw, 160px)", height: "auto" }}
        fill="none"
      >
        <g>
          <path
            ref={tazaPathRef}
            d="M30 45 L30 80 Q30 95 45 95 L75 95 Q90 95 90 80 L90 45"
            stroke="#1F5C52"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={asaRef}
            d="M90 55 Q105 55 105 70 Q105 85 90 85"
            stroke="#1F5C52"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            ref={liquidoRef}
            d="M33 80 L33 80 Q33 92 45 92 L75 92 Q87 92 87 80"
            stroke="#6A1D2A"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            ref={vapor1Ref}
            d="M50 40 Q48 30 52 22 Q56 14 50 6"
            stroke="#B8935F"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            ref={vapor2Ref}
            d="M60 38 Q62 28 58 18 Q54 8 60 2"
            stroke="#B8935F"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            ref={vapor3Ref}
            d="M70 40 Q68 30 72 22 Q76 14 70 6"
            stroke="#B8935F"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <g ref={isotipoGroupRef}>
          <circle cx="60" cy="60" r="28" stroke="#1F5C52" strokeWidth="1.5" fill="none" />
          <path
            d="M60 32 C72 32 80 40 80 55 C80 70 72 78 60 78"
            stroke="#6A1D2A"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M40 55 C40 70 48 78 60 78"
            stroke="#B8935F"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
}
