import React from "react";

interface FoodItemProps {
  id: string;
  cena: number;
  nazov: string;
  ingrediencie: string[];
  alergeny: string[];
}

function FoodItem({ id, cena, nazov, ingrediencie, alergeny }: FoodItemProps) {
  return (
    <li className="min-h-[85px] flex flex-col justify-center p-2 w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 ">
          <p className="font-medium text-md text-bluntGrey font-quicksand">
            {id}.
          </p>
          <p className="text-md font-semibold font-quicksand">{nazov}</p>
        </div>
        <h3 className="text-lg text-primaryRed font-medium">
          €{cena.toFixed(2)}
        </h3>
      </div>
      <div className="flex flex-wrap gap-x-[0.2rem] ">
        {ingrediencie.map((ingredienca, index) => {
          const separator = index === ingrediencie.length - 1 ? "." : ", ";
          return (
            <p key={index} className=" min-w-content text-sm text-bluntGrey">
              {ingredienca.toLowerCase().trim()}
              {separator}
            </p>
          );
        })}
      </div>
    </li>
  );
}

export default FoodItem;
