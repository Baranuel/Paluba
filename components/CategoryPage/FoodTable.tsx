import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Filterbar from "./Filterbar";
import FoodItem from "./FoodItem";
import Prilohy from "./Prilohy";

interface FoodTableProps {
  seeVegetarian: boolean;
  setSeeVegetarian: React.Dispatch<React.SetStateAction<boolean>>;
  food: any;
  seePrilohy: boolean;
  setSeePrilohy: React.Dispatch<React.SetStateAction<boolean>>;
  prilohy: any;
}

function FoodTable({
  seeVegetarian,
  setSeeVegetarian,
  food,
  seePrilohy,
  setSeePrilohy,
  prilohy,
}: FoodTableProps) {
  const menuTable = useRef<HTMLDivElement | null>(null);
  const [displayFood, setDisplayFood] = useState(food);

  const masoveIngrediencie = [
    "sunka",
    "tuniak",
    "kuracie maso",
    "kuracie prsia",
    "salama",
    "slanina",
    "klobasa",
    "kuracie",
    "bolonska zmes",
  ];

  const sortArray = useCallback((array: any) => {
    return array.sort((a: any, b: any) => {
      return a.fields.id - b.fields.id;
    });
  }, []);

  const replaceSpecialChars = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const vegetarianOnly = food.filter((item: any) => {
    return !item.fields?.ingrediencie?.some((ing: any) => {
      const strippedIngredient = replaceSpecialChars(ing);
      return masoveIngrediencie.includes(strippedIngredient);
    });
  });

  useEffect(() => {
    setDisplayFood(sortArray(seeVegetarian ? vegetarianOnly : food));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeVegetarian, food]);

  return (
    <div
      ref={menuTable}
      className={`mt-12 flex  relative flex-col items-center h-fit min-h-screen w-full px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2 `}
    >
      <Filterbar
        menuTable={menuTable}
        seeVegetarian={seeVegetarian}
        setSeeVegetarian={setSeeVegetarian}
        setSeePrilohy={setSeePrilohy}
        seePrilohy={seePrilohy}
      />

      <AnimatePresence initial={false}>
        {seePrilohy && (
          <Prilohy
            prilohy={prilohy}
            setSeePrilohy={setSeePrilohy}
            seePrilohy={seePrilohy}
          />
        )}
      </AnimatePresence>

      <ul
        className={` h-fit w-screen px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2`}
      >
        {displayFood.map((item: any, index: number) => {
          console.log(item);
          return <FoodItem key={index} {...item.fields} />;
        })}
      </ul>
    </div>
  );
}

export default FoodTable;
