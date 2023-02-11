import React from "react";

function PrilohaItem() {
  return (
    <li className="w-full min-h-[50px] flex items-center justify-between">
      <p className="text-xl font-semibold font-quicksand">
        Title of ingredient
      </p>
      <h3 className="font-bold text-xl font-quicksand">cena</h3>
    </li>
  );
}

export default PrilohaItem;
