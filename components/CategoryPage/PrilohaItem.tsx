import React from "react";

function PrilohaItem() {
  return (
    <li className="w-full min-h-[55px] flex items-center justify-between">
      <p className="text-md font-semibold font-quicksand">
        Title of ingredient
      </p>
      <h3 className="font-bold text-lg font-quicksand text-primaryRed">cena</h3>
    </li>
  );
}

export default PrilohaItem;
