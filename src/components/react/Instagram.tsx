import instagramPosts from "../../data/instagram";

export default function Instagram() {
  return (
    <section id="instagram" className="pt-section px-6 bg-crema">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className="w-8 h-px bg-bordo/40" />
          <span className="text-small font-contenido font-medium uppercase tracking-[0.15em] text-dorado">SEGUINOS</span>
          <span className="w-8 h-px bg-bordo/40" />
        </div>
        <h2 className="text-h2 text-verde-oscuro text-center mb-section-inner">
          Instagram
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block cursor-pointer"
            >
              <div
                className="absolute inset-0 will-change-transform transition-transform duration-[800ms] ease-out group-hover:scale-105"
                style={{ background: post.imagen }}
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-[800ms] ease-out group-hover:bg-black/50" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,transform] duration-[800ms] ease-out group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md"
                  aria-hidden="true"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-contenido">
          <a
            href="https://instagram.com/kaido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body font-contenido text-texto-muted hover:text-verde-oscuro transition-colors duration-300 no-underline"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
            @kaido
          </a>
        </div>
      </div>
    </section>
  );
}
