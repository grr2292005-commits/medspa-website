"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // Observe interactive elements
    const observer = new MutationObserver(() => {
      document
        .querySelectorAll("a, button, [role='button'], input, select, textarea, .cursor-pointer")
        .forEach((el) => {
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial pass
    document
      .querySelectorAll("a, button, [role='button'], input, select, textarea, .cursor-pointer")
      .forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 10,
            height: isHovering ? 48 : 10,
            opacity: isHovering ? 0.4 : 0.9,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-white"
        />
      </motion.div>
    </>
  );
};
