import React, { useState } from "react";
import ToggleChip from "../ToggleChip";
import { FaEye } from "react-icons/fa";

interface FilterbarProps {
  seeVegetarian: boolean;
  setSeeVegetarian: (value: any) => void;
}

function Filterbar({ seeVegetarian, setSeeVegetarian }: FilterbarProps) {
  return (
    <div className="flex sticky top-0 bg-whiteBg justify-between w-full items-center p-2">
      <ToggleChip
        text="Vegetarian"
        active={seeVegetarian}
        onClick={() => setSeeVegetarian(!seeVegetarian)}
      />
      <div className="flex items-center text-primaryRed ">
        <FaEye className="text-md mr-1" />
        <p className="">Prilohy</p>
      </div>
    </div>
  );
}

export default Filterbar;
