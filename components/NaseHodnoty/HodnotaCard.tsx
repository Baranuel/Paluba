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
    <div className=" p-4 sm:p-2 flex sm:min-w-[48%] sm:max-w-[48%] w-1/4 grow border rounded-lg border-primaryRed items-center">
      <Image
        className="mr-2"
        src={image}
        alt="hodnota image"
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
      />
      <div className="min-w-fit  p-2 sm:p-0">
        <h3 className="font-semibold text-2xl lg:text-xl sm:text-[1rem] md:text-[1.25rem] sm:leading-[1.5rem] text-primaryRed">
          {title}
        </h3>
        <p className="font-medium text-bluntGrey text-xl lg:text-xl  md:text-[1rem] sm:text-[0.85rem] sm:leading-[1.5rem]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default HodnotaCard;
