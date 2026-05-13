import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const mouse = useMousePosition();

  // Dot follows instantly
  const dotX = useSpring(mouse.x, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouse.y, { stiffness: 1000, damping: 50 });

  // Ring follows with lag
  const ringX = useSpring(mouse.x, { stiffness: 120, damping: 22 });
  const ringY = useSpring(mouse.y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    dotX.set(mouse.x);
    dotY.set(mouse.y);
    ringX.set(mouse.x);
    ringY.set(mouse.y);
  }, [mouse.x, mouse.y, dotX, dotY, ringX, ringY]);

  useEffect(() => {
    const check = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "var(--brand)",
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1.5px solid rgba(245,166,35,0.55)",
        }}
      />
    </>
  );
}
