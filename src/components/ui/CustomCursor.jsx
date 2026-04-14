import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleOver = (e) => {
      const el = e.target;
      if (
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("a") ||
        el.closest("button") ||
        el.dataset.cursor === "pointer"
      ) {
        isHovering.current = true;
        cursorRef.current?.classList.add("is-pointer");
      }
    };

    const handleOut = () => {
      isHovering.current = false;
      cursorRef.current?.classList.remove("is-pointer");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        style={{ x: smoothX, y: smoothY }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-400/60 pointer-events-none z-[9999] mix-blend-difference transition-all duration-150"
        id="cursor-ring"
      />
      {/* Inner dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-sky-400 pointer-events-none z-[9999]"
      />

      <style>{`
        #cursor-ring.is-pointer {
          width: 48px;
          height: 48px;
          margin-left: -8px;
          margin-top: -8px;
          border-color: rgba(14,165,233,0.8);
          background: rgba(14,165,233,0.08);
        }
      `}</style>
    </>
  );
}
