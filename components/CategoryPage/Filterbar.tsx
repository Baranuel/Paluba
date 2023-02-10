import React, { Ref, RefObject, useState } from "react";
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
  const handleSeeVegetarian = () => {
    setSeeVegetarian(!seeVegetarian);
    if (!menuTable?.current) return;
    menuTable?.current?.scrollIntoView({});
  };
  return (
    <div className="flex sticky top-0 z-10 bg-whiteBg justify-between w-full items-center py-2">
      <ToggleChip
        text="Vegetarian"
        active={seeVegetarian}
        onClick={() => handleSeeVegetarian()}
      />
      <div
        onClick={() => setSeePrilohy(true)}
        className="flex items-center text-primaryRed "
      >
        <FaEye className="text-md mr-1" />
        <p className="">Prilohy</p>
      </div>
    </div>
  );
}

export default Filterbar;
