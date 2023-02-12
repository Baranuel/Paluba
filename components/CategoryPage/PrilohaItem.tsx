import React from "react";

interface PrilohaItemProps {
  cena: number;
  nazov: string;
  weight: number;
  variants: string[];
}

function PrilohaItem({ cena, nazov, variants }: PrilohaItemProps) {
  return (
    <li className="w-full min-h-[25px]  flex gap-x-4 mb-2  items-start justify-between">
      <div className="flex flex-col ">
        <p className="text-sm font-medium font-quicksand">{nazov}</p>
        <div className="flex flex-wrap gap-x-1 ">
          {variants?.map((variant, index) => {
            const separator = index === variants.length - 1 ? "." : ", ";
            return (
              <p key={index} className="text-xs text-bluntGrey font-quicksand">
                {variant?.toLowerCase().trim()}
                {separator}
              </p>
            );
          })}
        </div>
      </div>
      <h3 className="font-bold text-sm font-quicksand text-primaryRed">
        €{cena.toFixed(2)}
      </h3>
    </li>
  );
}

export default PrilohaItem;
