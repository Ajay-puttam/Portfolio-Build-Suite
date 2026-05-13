import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ backgroundColor: "var(--surface)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--app-font-display)",
              fontWeight: 800,
              fontSize: "clamp(4rem, 12vw, 8rem)",
              color: "var(--brand)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            A.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
