import { Variants, motion } from "framer-motion";
import React from "react";

const childrenVariant: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { ease: "linear" },
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

function AnimatedComponent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={childrenVariant}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedComponent;
