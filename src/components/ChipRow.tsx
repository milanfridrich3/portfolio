import { motion } from "framer-motion";

type ChipRowProps = {
  items: string[];
  className?: string;
  delay?: number;
};

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const chip = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function ChipRow({ items, className = "", delay = 0 }: ChipRowProps) {
  return (
    <motion.div
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={`flex flex-wrap gap-2.5 ${className}`}
    >
      {items.map((item) => (
        <motion.span
          key={item}
          variants={chip}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2, borderColor: "rgba(244,242,236,0.35)" }}
          className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-ink-soft"
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}
