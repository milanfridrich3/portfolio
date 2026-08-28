import { motion, useReducedMotion } from "framer-motion";

/**
 * Project Pilot visual — a minimal workspace made of staggered task cards
 * with progress bars, a workflow timeline, and small collaboration avatars.
 * Communicates "project management, tasks, organization" without using
 * any real screenshot.
 */
export default function ProjectPilotVisual() {
  const prefersReducedMotion = useReducedMotion();
  const drift = !prefersReducedMotion;

  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="pilot-bg" cx="28%" cy="18%" r="70%">
          <stop offset="0%" stopColor="#2c5aa8" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#16294d" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#16294d" stopOpacity="0" />
        </radialGradient>
        <filter id="pilot-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#pilot-bg)" />

      {/* Collaboration avatars, top-right */}
      <g opacity="0.92">
        <circle cx="592" cy="150" r="16" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.2" />
        <circle cx="614" cy="150" r="16" fill="#16294d" stroke="#f4f2ec" strokeOpacity="0.2" />
        <circle cx="636" cy="150" r="16" fill="#2c5aa8" stroke="#f4f2ec" strokeOpacity="0.35" />
      </g>

      {/* Workflow timeline */}
      <g>
        <line x1="220" y1="440" x2="600" y2="440" stroke="#f4f2ec" strokeOpacity="0.14" strokeWidth="2" />
        <circle cx="220" cy="440" r="7" fill="#6fa3e0" />
        <circle cx="350" cy="440" r="7" fill="#6fa3e0" />
        <circle cx="480" cy="440" r="6" fill="none" stroke="#f4f2ec" strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="600" cy="440" r="6" fill="none" stroke="#f4f2ec" strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="350" cy="440" r="11" fill="none" stroke="#6fa3e0" strokeOpacity="0.5" strokeWidth="1.5" filter="url(#pilot-glow)" />
      </g>

      {/* Task cards, staggered */}
      {[
        { x: 190, y: 176, w: 210, h: 130, rot: -4, progress: 0.35 },
        { x: 330, y: 214, w: 210, h: 130, rot: 2.5, progress: 0.68 },
        { x: 470, y: 190, w: 210, h: 130, rot: -1.5, progress: 0.92 },
      ].map((card, i) => (
        <motion.g
          key={i}
          initial={false}
          animate={drift ? { y: [0, i % 2 === 0 ? -5 : 5, 0] } : undefined}
          transition={drift ? { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 } : undefined}
          style={{ transformOrigin: `${card.x + card.w / 2}px ${card.y + card.h / 2}px` }}
          transform={`rotate(${card.rot} ${card.x + card.w / 2} ${card.y + card.h / 2})`}
        >
          <rect
            x={card.x}
            y={card.y}
            width={card.w}
            height={card.h}
            rx="14"
            fill="#0e1626"
            stroke="#f4f2ec"
            strokeOpacity="0.16"
            strokeWidth="1.5"
          />
          {/* title line */}
          <rect x={card.x + 20} y={card.y + 24} width={card.w - 100} height="8" rx="4" fill="#f4f2ec" opacity="0.5" />
          {/* subtext lines */}
          <rect x={card.x + 20} y={card.y + 44} width={card.w - 60} height="5" rx="2.5" fill="#f4f2ec" opacity="0.16" />
          <rect x={card.x + 20} y={card.y + 56} width={card.w - 90} height="5" rx="2.5" fill="#f4f2ec" opacity="0.16" />
          {/* status chip */}
          <rect x={card.x + card.w - 64} y={card.y + 20} width="44" height="16" rx="8" fill="#6fa3e0" opacity="0.16" />
          {/* progress bar */}
          <rect x={card.x + 20} y={card.y + card.h - 26} width={card.w - 40} height="6" rx="3" fill="#f4f2ec" opacity="0.12" />
          <rect
            x={card.x + 20}
            y={card.y + card.h - 26}
            width={(card.w - 40) * card.progress}
            height="6"
            rx="3"
            fill="#6fa3e0"
            opacity="0.9"
          />
        </motion.g>
      ))}
    </svg>
  );
}
