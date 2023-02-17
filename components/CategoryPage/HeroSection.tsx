import React from "react";
import Image from "next/image";
import truck from "../../assets/truck.svg";
import hodinyThick from "../../assets/hodinyThick.svg";

interface HeroSectionProps {
  url: string;
  foodTitle: string;
  isMobile: boolean;
}
function HeroSection({ url, foodTitle, isMobile }: HeroSectionProps) {
  return (
    <div className=" relative sm:h-5/10 h-[40vh] w-full">
      <div className="w-full relative h-full">
        <Image
          priority
          src={url}
          alt="hero image"
          fill
          className="object-cover"
        />
        <div className="absolute h-full w-full bg-[rgba(74,1,9,0.4)]"></div>
      </div>
      <div
        className="absolute flex flex-col justify-center sm:min-h-[125px] w-[40vw] h-fit bg-white p-10 sm:p-6 mx-auto bottom-0 left-0 right-0 
      sm:w-[95vw] md:w-[90vw] lg:w-[70vw] shadow-md rounded-md translate-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="sm:text-4xl md:text-4xl text-5xl font-sahitya">
            {foodTitle}
          </h1>
          <h3 className="text-primaryRed font-bold sm:text-md  md:text-xl text-2xl font-quicksand">
            0905 880 900
          </h3>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex items-center mt-1">
            <Image
              style={{
                width: isMobile ? "16px" : "24px",
                height: isMobile ? "16px" : "24px",
              }}
              src={truck}
              alt="truck"
            />
            <p className="sm:text-sm text-xl md:text-md font-quicksand ml-2 font-medium">
              Donaska nad 5 eur
            </p>
          </div>
          <div className="flex items-center mt-1">
            <Image
              src={hodinyThick}
              style={{
                width: isMobile ? "16px" : "24px",
                height: isMobile ? "16px" : "24px",
              }}
              alt="truck"
            />
            <p className="sm:text-sm text-xl md:text-md  font-quicksand ml-2 font-medium">
              Medzi 12:00 - 14:00 Polievka zdarma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
