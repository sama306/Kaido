import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  items: NavItem[];
}

export default function MobileMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        onClick={toggle}
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1 relative z-50"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <span
          className={`block h-px w-5 bg-texto transition-all duration-500 ease-out ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-texto transition-all duration-500 ease-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-texto transition-all duration-500 ease-out ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="fixed inset-0 z-[60] bg-crema flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={close}
            >
              <motion.nav
                className="flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                onClick={(e) => e.stopPropagation()}
              >
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="text-h2 font-titulo text-texto-muted no-underline transition-colors duration-300 hover:text-verde-oscuro"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
