import React, { useState } from "react";
import ToggleChip from "../ToggleChip";
import { FaEye } from "react-icons/fa";

interface FilterbarProps {
  seeVegetarian: boolean;
  setSeeVegetarian: (value: any) => void;
  setSeePrilohy: (value: any) => void;
  menu: React.RefObject<HTMLDivElement>;
  seePrilohy: boolean;
}

function Filterbar({ seeVegetarian, setSeeVegetarian, menu, setSeePrilohy, seePrilohy}: FilterbarProps) {
  const handleFilterClick = () => {
    setSeeVegetarian(!seeVegetarian);
    menu.current?.scrollIntoView({  behavior: "auto"});
  }

  const togglePrilohy = () => {
    setSeePrilohy(!seePrilohy);
  }
  return (
    <div className="flex sticky top-0 z-12 bg-whiteBg justify-between w-full items-center py-2">
      <ToggleChip
        text="Vegetarian"
        active={seeVegetarian}
        onClick={() => handleFilterClick()}
      />
      <div onClick={() => togglePrilohy()} className="flex items-center text-primaryRed ">
        <FaEye className="text-md mr-1" />
        <p className="">Prilohy</p>
      </div>
    </div>
  );
}

export default Filterbar;
