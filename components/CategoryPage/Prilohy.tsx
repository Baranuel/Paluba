import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
import PrilohaItem from "./PrilohaItem";

interface PrilohyProps {
  seePrilohy: boolean;
  setSeePrilohy: (value: any) => void;
  prilohy: any;
}

function Prilohy({ seePrilohy, setSeePrilohy, prilohy }: PrilohyProps) {
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

  const getByTag = (arr: any[], tag: string) => {
    return arr.filter((priloha: any) => {
      return priloha.metadata.tags[0].sys.id === tag;
    });
  };
  console.log(prilohy);
  const basicPrilohy = getByTag(prilohy, "prilohy");
  const prilohyKJedlam = getByTag(prilohy, "prilohyKJedlam");

  const prilohyKJedlamSorted = prilohyKJedlam.sort((a: any, b: any) => {
    return b.fields.cena - a.fields.cena;
  });

  const basicPrilohySorted = basicPrilohy.sort((a: any, b: any) => {
    return b.fields.cena - a.fields.cena;
  });

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
      className="h-screen fixed z-50 top-0  -right-1  bg-whiteBg p-2 flex flex-col  items-center right-0  w-[95%] shadow-xl"
    >
      <div className="flex w-full items-center p-2 ">
        <FaTimes
          onClick={() => setSeePrilohy(false)}
          className="text-2xl font-light mt-2"
        />
      </div>
      <div className=" w-full  min-h-1/3 p-2 max-h-screen  rounded-md">
        <Tabs>
          <TabList className="flex items-center mb-4  ">
            <Tab
              tabIndex="1"
              className=" p-2  mr-2"
              selectedClassName="text-primaryRed border rounded-md border-primaryRed"
            >
              Prílohy
            </Tab>
            <Tab
              tabIndex="2"
              className="p-2  mr-2"
              selectedClassName="text-primaryRed border rounded-md border-primaryRed"
            >
              Prílohy k jedlám
            </Tab>
          </TabList>

          <TabPanel>
            <ul className="">
              {basicPrilohySorted.map((priloha: any, index: number) => {
                const item = priloha.fields;

                return (
                  <PrilohaItem
                    variants={item.variants}
                    nazov={item.title}
                    weight={item.weight}
                    cena={item.cena}
                    key={index}
                  />
                );
              })}
            </ul>
          </TabPanel>

          <TabPanel>
            <ul className="">
              {prilohyKJedlamSorted.map((priloha: any, index: number) => {
                const item = priloha.fields;

                return (
                  <PrilohaItem
                    variants={item.variants}
                    nazov={item.title}
                    weight={item.weight}
                    cena={item.cena}
                    key={index}
                  />
                );
              })}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Prilohy;
