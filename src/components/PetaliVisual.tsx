import { motion, useReducedMotion } from "framer-motion";

/**
 * Petali visual — a small monitoring dashboard (CPU / TEMP / RAM / GPU
 * cards + a growth timeline) built around a flat, vector illustration of
 * a plant. Communicates "computer + monitoring + living digital plant"
 * without using any real screenshot or photorealistic rendering.
 */
export default function PetaliVisual() {
  const prefersReducedMotion = useReducedMotion();
  const sway = !prefersReducedMotion;

  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="petali-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#3f7350" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#1c3324" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1c3324" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petali-leaf" x1="0%" y1="100%" x2="30%" y2="0%">
          <stop offset="0%" stopColor="#3f7350" />
          <stop offset="100%" stopColor="#8fd19f" />
        </linearGradient>
        <filter id="petali-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#petali-bg)" />

      {/* faint Aperture-motif rings behind the plant */}
      <circle cx="400" cy="300" r="150" fill="none" stroke="#f4f2ec" strokeOpacity="0.06" />
      <circle cx="400" cy="300" r="105" fill="none" stroke="#f4f2ec" strokeOpacity="0.08" />

      {/* status dots, top right */}
      <g opacity="0.95">
        <circle cx="606" cy="146" r="15" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.2" />
        <circle cx="627" cy="146" r="15" fill="#1c3324" stroke="#f4f2ec" strokeOpacity="0.2" />
        <circle cx="648" cy="146" r="15" fill="#7fc491" stroke="#f4f2ec" strokeOpacity="0.3" />
      </g>

      {/* CPU card */}
      <g>
        <rect x="150" y="176" width="150" height="80" rx="14" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.14" strokeWidth="1.5" />
        <text x="170" y="206" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1" fill="#c9cfda" opacity="0.8">CPU</text>
        <polyline points="248,198 254,202 260,194 266,206 272,198" fill="none" stroke="#7fc491" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="170" y="230" fontFamily="Inter, sans-serif" fontSize="17" fill="#8fd19f">18%</text>
        <rect x="170" y="240" width="110" height="5" rx="2.5" fill="#f4f2ec" opacity="0.12" />
        <rect x="170" y="240" width="20" height="5" rx="2.5" fill="#7fc491" />
      </g>

      {/* TEMP card */}
      <g>
        <rect x="500" y="200" width="150" height="80" rx="14" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.14" strokeWidth="1.5" />
        <text x="520" y="230" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1" fill="#c9cfda" opacity="0.8">TEMP</text>
        <rect x="614" y="216" width="7" height="18" rx="3.5" fill="none" stroke="#7fc491" strokeOpacity="0.7" strokeWidth="1.4" />
        <circle cx="617.5" cy="238" r="5" fill="none" stroke="#7fc491" strokeOpacity="0.7" strokeWidth="1.4" />
        <text x="520" y="254" fontFamily="Inter, sans-serif" fontSize="17" fill="#8fd19f">34°C</text>
        <rect x="520" y="264" width="110" height="5" rx="2.5" fill="#f4f2ec" opacity="0.12" />
        <rect x="520" y="264" width="42" height="5" rx="2.5" fill="#7fc491" />
      </g>

      {/* RAM card */}
      <g>
        <rect x="140" y="366" width="150" height="80" rx="14" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.14" strokeWidth="1.5" />
        <text x="160" y="396" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1" fill="#c9cfda" opacity="0.8">RAM</text>
        <rect x="240" y="388" width="20" height="12" rx="2.5" fill="none" stroke="#7fc491" strokeOpacity="0.7" strokeWidth="1.3" />
        <text x="160" y="420" fontFamily="Inter, sans-serif" fontSize="17" fill="#8fd19f">62%</text>
        <rect x="160" y="430" width="110" height="5" rx="2.5" fill="#f4f2ec" opacity="0.12" />
        <rect x="160" y="430" width="68" height="5" rx="2.5" fill="#7fc491" />
      </g>

      {/* GPU card */}
      <g>
        <rect x="510" y="366" width="150" height="80" rx="14" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.14" strokeWidth="1.5" />
        <text x="530" y="396" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1" fill="#c9cfda" opacity="0.8">GPU</text>
        <polyline points="608,388 614,392 620,384 626,396 632,388" fill="none" stroke="#7fc491" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="530" y="420" fontFamily="Inter, sans-serif" fontSize="17" fill="#8fd19f">24%</text>
        <rect x="530" y="430" width="110" height="5" rx="2.5" fill="#f4f2ec" opacity="0.12" />
        <rect x="530" y="430" width="26" height="5" rx="2.5" fill="#7fc491" />
      </g>

      {/* the plant — flat vector illustration, gently swaying */}
      <motion.g
        animate={sway ? { rotate: [-1, 1, -1] } : undefined}
        transition={sway ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
        style={{ transformOrigin: "400px 460px" }}
        filter="url(#petali-glow)"
      >
        {/* pot */}
        <path d="M366 460 L372 502 C372 508 377 512 383 512 L417 512 C423 512 428 508 428 502 L434 460 Z" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.18" strokeWidth="1.5" />
        <rect x="360" y="448" width="80" height="16" rx="8" fill="#0e1626" stroke="#f4f2ec" strokeOpacity="0.18" strokeWidth="1.5" />

        {/* stem */}
        <path d="M400 460 C400 420 400 380 400 340" fill="none" stroke="#3f7350" strokeWidth="4" strokeLinecap="round" />

        {/* lower leaves */}
        <path d="M400 420 C370 414 340 424 316 448 C344 434 372 430 400 434 Z" fill="url(#petali-leaf)" />
        <path d="M400 420 C430 414 460 424 484 448 C456 434 428 430 400 434 Z" fill="url(#petali-leaf)" />

        {/* mid leaves */}
        <path d="M400 372 C366 362 334 368 306 388 C338 378 370 378 400 386 Z" fill="url(#petali-leaf)" />
        <path d="M400 372 C434 362 466 368 494 388 C462 378 430 378 400 386 Z" fill="url(#petali-leaf)" />

        {/* top leaf */}
        <path d="M400 340 C382 300 386 258 400 224 C414 258 418 300 400 340 Z" fill="url(#petali-leaf)" />
        <line x1="400" y1="330" x2="400" y2="240" stroke="#0a0f1a" strokeOpacity="0.25" strokeWidth="1.2" />
      </motion.g>

      {/* growth timeline, same language as the Project Pilot visual */}
      <line x1="220" y1="520" x2="580" y2="520" stroke="#f4f2ec" strokeOpacity="0.14" strokeWidth="2" />
      <circle cx="220" cy="520" r="6" fill="#7fc491" />
      <circle cx="330" cy="520" r="7" fill="#7fc491" />
      <circle cx="330" cy="520" r="11" fill="none" stroke="#7fc491" strokeOpacity="0.5" strokeWidth="1.5" filter="url(#petali-glow)" />
      <circle cx="470" cy="520" r="6" fill="none" stroke="#f4f2ec" strokeOpacity="0.35" strokeWidth="2" />
      <circle cx="580" cy="520" r="6" fill="none" stroke="#f4f2ec" strokeOpacity="0.35" strokeWidth="2" />
    </svg>
  );
}
