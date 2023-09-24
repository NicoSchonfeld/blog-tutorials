"use client";

import React from "react";
import { BiLoader } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const ButtonSendForm = () => {
  const [state, setState] = React.useState(false);
  const [state2, setState2] = React.useState(false);

  const style = `relative overflow-hidden w-auto h-10 flex items-end justify-center transition-all bg-sky-500 text-white px-3 py-2.5 border border-sky-500 rounded-md active:scale-[0.9] hover:bg-sky-600 hover:scale-1 hover:border-sky-600 transition-all font-medium`;

  const toggle = () => {
    setTimeout(() => {
      setState(true);
    }, 100);

    setTimeout(() => {
      setState(false);
      setState2(true);
    }, 3000);

    setTimeout(() => {
      setState2(false);
    }, 6000);
  };

  return (
    <AnimatePresence>
      <button className={style} onClick={toggle}>
        {state2 ? (
          <motion.span
            initial={{ y: 50 }}
            animate={{ y: 2 }}
            exit={{ opacity: 0 }}
          >
            ¡Enviado!
          </motion.span>
        ) : (
          <motion.div
            initial={{ y: 2 }}
            animate={state ? { y: 43 } : { y: 2 }}
            className="flex items-center justify-center flex-col"
          >
            <BiLoader className="animate-spin" />

            <span className="mt-5">Enviar</span>
          </motion.div>
        )}
      </button>
    </AnimatePresence>
  );
};

export default ButtonSendForm;
