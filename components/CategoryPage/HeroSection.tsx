import React from "react";
import Image from "next/image";
import truck from "../../assets/truck.svg";
import hodinyThick from "../../assets/hodinyThick.svg";

interface HeroSectionProps {
  url: string;
  foodType: string;
}
function HeroSection({ url, foodType }: HeroSectionProps) {
  return (
    <div className="  relative h-5/10 w-full">
      <div>
        <Image src={url} alt="hero image" fill className="object-cover" />
        <div className="absolute h-full w-full bg-[rgba(74,1,9,0.4)]"></div>
      </div>
      <div className="absolute flex flex-col justify-center min-h-[125px] h-fit bg-white p-6 bottom-0 left-0 right-0 mx-auto w-[95vw] shadow-md rounded-md translate-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-sahitya">{foodType}</h1>
          <h3 className="text-primaryRed font-bold text-xl font-quicksand">
            0905 880 900
          </h3>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex mt-1">
            <Image src={truck} alt="truck" width={15} height={15} />
            <p className="text-sm font-quicksand ml-2 font-medium">
              Donaska nad 5 eur
            </p>
          </div>
          <div className="flex mt-1">
            <Image src={hodinyThick} alt="truck" width={15} height={15} />
            <p className="text-sm font-quicksand ml-2 font-medium">
              Medzi 12:00 - 14:00 Polievka zdarma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
