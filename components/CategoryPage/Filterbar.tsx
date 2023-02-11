import React, { Ref, RefObject, useCallback, useState } from "react";
import ToggleChip from "../ToggleChip";
import { FaEye } from "react-icons/fa";

interface FilterbarProps {
  seeVegetarian: boolean;
  setSeeVegetarian: (value: any) => void;
  setSeePrilohy: (value: any) => void;
  seePrilohy: boolean;
  menuTable: RefObject<HTMLDivElement>;
}

function Filterbar({
  seeVegetarian,
  setSeeVegetarian,
  setSeePrilohy,
  menuTable,
}: FilterbarProps) {
  const handleSeeVegetarian = useCallback(() => {
    if (!menuTable?.current) return;
    menuTable?.current?.scrollIntoView();

    setSeeVegetarian(!seeVegetarian);
  }, [menuTable, setSeeVegetarian, seeVegetarian]);

  return (
    <div className="flex sticky -top-1 z-10 bg-whiteBg justify-between w-screen  items-center py-3 px-6">
      <ToggleChip
        text="Bez mäsa"
        active={seeVegetarian}
        onClick={() => handleSeeVegetarian()}
      />
      <div
        onClick={() => setSeePrilohy(true)}
        className="flex items-center text-primaryRed "
      >
        <FaEye className="text-md mr-1" />
        <p className=" font-quicksand font-bold">Prílohy</p>
      </div>
    </div>
  );
}

export default Filterbar;
