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
    <li className="min-h-[65px] h-content flex gap-2  p-2 w-full">
      <div className="flex-1">
        <div className="flex gap-x-1">
          <p className="font-medium sm:text-md text-lg text-bluntGrey font-quicksand  ">
            {id}.
          </p>
          <p className="sm:text-md text-lg font-semibold font-quicksand">
            {nazov}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-[0.1rem] ">
          {ingrediencie?.map((ingredienca, index) => {
            const separator = index === ingrediencie.length - 1 ? "." : ", ";
            return (
              <p
                key={index}
                className=" min-w-content text-[14px]  text-bluntGrey"
              >
                {ingredienca.toLowerCase().trim()}
                {separator}
              </p>
            );
          })}
        </div>
      </div>
      <h3 className="sm:text-md text-lg text-primaryRed font-medium">
        €{cena.toFixed(2)}
      </h3>
    </li>
  );
}

export default FoodItem;
