"use client";

import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

const ButtonLike = () => {
  const [state, setState] = React.useState(false);

  const toggle = () => {
    setState(!state);
  };

  const styleDiv =
    "relative w-8 h-8 flex items-center justify-center cursor-pointer";
  const styleCircle = `w-full h-full bg-red-100 absolute top-0 left-0 rounded-full`;
  const styleCircle2 = `w-full h-full bg-red-100/50 absolute top-0 left-0 rounded-full`;
  const styleHeart = "text-red-400 text-2xl z-[1]";

  return (
    <>
      <div className={styleDiv} onClick={toggle}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={state ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            delay: 0.1,
          }}
          className={styleCircle}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            state ? { opacity: 1, scale: 1.2 } : { opacity: 1, scale: 0 }
          }
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className={styleCircle2}
        ></motion.div>
        <motion.span
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
          className={styleHeart}
        >
          {state ? <AiFillHeart /> : <AiOutlineHeart />}
        </motion.span>
      </div>
    </>
  );
};

export default ButtonLike;
