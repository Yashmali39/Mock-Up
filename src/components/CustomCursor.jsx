import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 md:w-10 md:h-10 rounded-full bg-orange-500 pointer-events-none mix-blend-difference z-50"
      animate={{
        x: position.x - 12, 
        y: position.y - 12,
        scale: hovered ? 2 : 1, 
        opacity: hovered ? 0.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
};

export default CustomCursor;
