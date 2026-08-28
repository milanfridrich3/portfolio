import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = "";
    }, 850);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
        >
          <motion.img
            src="/icon-192.png"
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-14 w-14 rounded-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
