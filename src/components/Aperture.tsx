import { motion, useReducedMotion } from "framer-motion";

type ApertureProps = {
  size?: number;
  accent?: "blue" | "sage";
  className?: string;
  animate?: boolean;
  idle?: boolean;
};

const accentColors: Record<string, { core: string; mid: string; ring: string }> = {
  blue: { core: "#8fbdec", mid: "#2c5aa8", ring: "#6fa3e0" },
  sage: { core: "#a8ddb4", mid: "#3f7350", ring: "#7fc491" },
};

/**
 * The Aperture — this site's signature device. A layered radial glow
 * with a faint concentric ring, echoing the idea of a system's single
 * point of focus: the thing everything else orbits around.
 *
 * Sizing is viewport-aware (min(size, 90vw)) so it never overflows or
 * gets harshly clipped on narrow screens.
 */
export default function Aperture({
  size = 480,
  accent = "blue",
  className = "",
  animate = true,
  idle = false,
}: ApertureProps) {
  const c = accentColors[accent];
  const id = `aperture-${accent}-${Math.round(size)}`;
  const prefersReducedMotion = useReducedMotion();
  const shouldIdle = idle && !prefersReducedMotion;

  return (
    <motion.svg
      viewBox="0 0 600 600"
      className={className}
      style={{ width: `min(${size}px, 90vw)`, height: `min(${size}px, 90vw)` }}
      initial={animate ? { opacity: 0, scale: 0.92 } : undefined}
      whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
      viewport={{ once: true, margin: "-10%" }}
      animate={shouldIdle ? { scale: [1, 1.035, 1], rotate: [0, 1.2, 0] } : undefined}
      transition={
        shouldIdle
          ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
          : { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
      }
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-core`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor={c.core} stopOpacity="0.9" />
          <stop offset="35%" stopColor={c.mid} stopOpacity="0.55" />
          <stop offset="70%" stopColor={c.mid} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c.mid} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-halo`} cx="50%" cy="42%" r="50%">
          <stop offset="0%" stopColor={c.ring} stopOpacity="0" />
          <stop offset="82%" stopColor={c.ring} stopOpacity="0" />
          <stop offset="92%" stopColor={c.ring} stopOpacity="0.35" />
          <stop offset="100%" stopColor={c.ring} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <circle cx="300" cy="252" r="230" fill={`url(#${id}-core)`} filter={`url(#${id}-blur)`} />
      <circle cx="300" cy="252" r="260" fill={`url(#${id}-halo)`} />
      <circle
        cx="300"
        cy="252"
        r="180"
        fill="none"
        stroke={c.ring}
        strokeOpacity="0.18"
        strokeWidth="0.75"
      />
      <circle
        cx="300"
        cy="252"
        r="140"
        fill="none"
        stroke={c.ring}
        strokeOpacity="0.12"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
}
