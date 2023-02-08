import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpinnerProps {}

function Spinner() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="fixed flex top-10 z-20 w-full"
      >
        <div className="bg-white mx-auto p-3 rounded-md shadow-md ">
          <div className="border-t-transparent border-solid animate-spin mx-auto rounded-full border-primaryRed border-2 h-6 w-6"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Spinner;
