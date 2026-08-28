import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "../data/content";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "AI & Tech", href: "#ai" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Vision", href: "#vision" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    const wasOpen = open;
    setOpen(false);

    if (wasOpen) {
      // The mobile menu's collapse animation (height: auto -> 0) changes
      // page layout while it runs. If we call scrollIntoView at the same
      // time, that ongoing layout shift interrupts the native smooth
      // scroll before it can move at all. Wait for the collapse to finish
      // (matches the AnimatePresence transition duration below) before
      // scrolling, so the scroll runs against stable layout.
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-[760px] rounded-[28px] border border-line backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? "bg-abyss/85" : "bg-abyss/50"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line-bright"
            aria-label="Milan Fridrich — home"
          >
            <img src="/icon-192.png" alt="" className="h-full w-full object-cover" />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.href);
                }}
                className="group relative text-[0.86rem] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-glow transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              href="/milan-fridrich-portfolio.pdf"
              download
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-line-bright px-4 py-2 text-[0.82rem] text-ink-soft transition-colors hover:text-ink hover:border-line-bright/80"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              PDF
            </motion.a>

            <motion.a
              whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[0.82rem] font-medium text-void"
            >
              Say hi
            </motion.a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-line-bright text-ink"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="relative h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-px w-4 bg-current transition-transform ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 px-4 pb-4 pt-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(l.href);
                    }}
                    className="rounded-lg px-2 py-2.5 text-sm text-ink-soft hover:text-ink"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("#contact");
                  }}
                  className="mt-1 rounded-lg bg-ink px-2 py-2.5 text-center text-sm font-medium text-void"
                >
                  Say hi
                </a>
                <a
                  href="/milan-fridrich-portfolio.pdf"
                  download
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-line px-2 py-2.5 text-center text-sm text-ink-soft"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v12" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-xs text-ink-faint"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
