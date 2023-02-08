import React, { useState } from "react";
import ToggleChip from "../ToggleChip";
import { FaEye } from "react-icons/fa";

interface FilterbarProps {
  seeVegetarian: boolean;
  setSeeVegetarian: (value: any) => void;
  menu: React.RefObject<HTMLDivElement>;
}

function Filterbar({ seeVegetarian, setSeeVegetarian, menu }: FilterbarProps) {
  const handleFilterClick = () => {
    setSeeVegetarian(!seeVegetarian);
    menu.current?.scrollIntoView({  behavior: "auto"});
  }
  return (
    <div className="flex sticky top-0 z-10 bg-whiteBg justify-between w-full items-center py-2">
      <ToggleChip
        text="Vegetarian"
        active={seeVegetarian}
        onClick={() => handleFilterClick()}
      />
      <div className="flex items-center text-primaryRed ">
        <FaEye className="text-md mr-1" />
        <p className="">Prilohy</p>
      </div>
    </div>
  );
}

export default Filterbar;
