"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const size = 700; // diameter of the blur

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
    >
      <motion.div
        className="absolute"
        animate={{
          x: position.x - size / 2,
          y: position.y - size / 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div
          className="rounded-full opacity-60"
          style={{
            width: size,
            height: size,
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CursorSpotlight;

