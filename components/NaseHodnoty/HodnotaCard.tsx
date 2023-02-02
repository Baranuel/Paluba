import React from "react";
import Image from "next/image";

interface HodnotaCardProps {
  isMobile: boolean;
  image: string;
  title: string;
  text: string;
}

function HodnotaCard({ image, title, text, isMobile }: HodnotaCardProps) {
  return (
    <div className=" bg-bgSecondary z-1 p-4 md:p-2 sm:p-3 flex sm:min-w-[40%] sm:max-w-[48%] w-1/4 grow border rounded-lg border-primaryRed items-center">
      <Image
        className="mr-2"
        src={image}
        alt="hodnota image"
        width={isMobile ? 35 : 50}
        height={isMobile ? 30 : 50}
      />
      <div className="min-w-fit flex flex-col  p-2 sm:p-0">
        <h3 className="font-semibold text-xl lg:text-xl sm:text-[17px] md:text-md sm:leading-[1rem] text-primaryRed">
          {title}
        </h3>
        <p className="font-medium text-bluntGrey text-xl lg:text-lg  md:text-sm sm:text-[14px] sm:leading-[1.5rem]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default HodnotaCard;
