import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
import PrilohaItem from "./PrilohaItem";

interface PrilohyProps {
  seePrilohy: boolean;
  setSeePrilohy: (value: any) => void;
}

function Prilohy({ seePrilohy, setSeePrilohy }: PrilohyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const vw = window.innerWidth;

  const handleDrag = (e: Event) => {
    if (!ref.current) return;

    const { x } = ref.current.getBoundingClientRect();
    const ONE_EIGHT_OF_VW = vw / 8;
    if (x > ONE_EIGHT_OF_VW) {
      setSeePrilohy(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      onDragEnd={(e) => handleDrag(e)}
      drag="x"
      dragDirectionLock
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={{ top: 0, right: 0.4, bottom: 0, left: 0 }}
      key="prilohy"
      initial={{ translateX: "100%" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100%" }}
      transition={{ duration: 0.45, ease: [0.06, 0.975, 0.195, 0.985] }}
      className="h-full fixed z-50 top-0  -right-1  right-0  w-9/10 shadow-xl"
    >
      <div className=" w-full  p-6 h-full bg-whiteBg">
        <div className="flex w-full items-center gap-2">
          <FaTimes
            onClick={() => setSeePrilohy(false)}
            className="text-2xl font-bold"
          />
          <h1 className="text-3xl font-semibold font-quicksand ">Prílohy</h1>
        </div>
        <ul className=" mt-8">
          <PrilohaItem />
          <PrilohaItem />
          <PrilohaItem />
          <PrilohaItem />
          <PrilohaItem />
          <PrilohaItem />
          <PrilohaItem />
          <PrilohaItem />
        </ul>
      </div>
    </motion.div>
  );
}

export default Prilohy;
