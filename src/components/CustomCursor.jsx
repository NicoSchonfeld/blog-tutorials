"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

const CustomCursor = () => {
  const style =
    "w-4 h-4 rounded-full bg-white fixed top-0 left-0 pointer-events-none";

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window?.addEventListener("mousemove", mouseMove);

    return () => {
      window?.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },

    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-5xl text-white"
      >
        This is a title
      </h1>

      <motion.div
        variants={variants}
        initial={false}
        animate={cursorVariant}
        className={style}
      ></motion.div>
    </>
  );
};

export default CustomCursor;
