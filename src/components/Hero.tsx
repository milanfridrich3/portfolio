import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Aperture from "./Aperture";
import { profile, intro } from "../data/content";

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 140]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 0.25]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28"
    >
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-[6%] -translate-x-1/2"
      >
        <Aperture size={720} accent="blue" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,transparent_0%,#05070c_78%)]" />

      <div className="container-edit relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-6"
        >
          {profile.role}
        </motion.span>

        <h1 className="font-display italic font-light text-[clamp(3rem,10vw,7.5rem)] leading-[0.98] text-ink">
          {profile.name.split(" ").map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.35 + i * 0.14, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.28ch]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-md text-balance font-display italic text-[1.15rem] text-blue-glow"
        >
          {profile.motto}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-lg text-balance text-sm leading-relaxed text-ink-soft"
        >
          {intro.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.035, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => scrollTo("#projects")}
            className="rounded-full border border-line-bright bg-ink px-6 py-3 text-sm font-medium text-void"
          >
            See projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.035, y: -2, borderColor: "rgba(111,163,224,0.6)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => scrollTo("#contact")}
            className="rounded-full border border-line-bright px-6 py-3 text-sm text-ink"
          >
            Say hi
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
