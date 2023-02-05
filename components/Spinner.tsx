import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpinnerProps {
  loading: boolean;
}

function Spinner({ loading }: SpinnerProps) {
  return (
    loading && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="fixed flex top-10 z-10 w-full"
        >
          <div className="bg-white mx-auto p-3 rounded-md ">
            <div className="border-t-transparent border-solid animate-spin mx-auto rounded-full border-primaryRed border-2 h-6 w-6"></div>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  );
}

export default Spinner;
