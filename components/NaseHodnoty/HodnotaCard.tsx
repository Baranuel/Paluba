import React from "react";
import Image from "next/image";

interface HodnotaCardProps {
  image: string;
  title: string;
  text: string;
}

function HodnotaCard({ image, title, text }: HodnotaCardProps) {
  return (
    <div className="p-2 flex min-w-[48%] max-w-[48%] grow border rounded-lg border-primaryRed items-center">
      <Image
        className=""
        src={image}
        alt="hodnota image"
        width={40}
        height={40}
      />
      <div className="min-w-fit  p-2 leading-3">
        <h3 className="font-semibold text-lg text-primaryRed">{title}</h3>
        <p className="font-medium text-bluntGrey text-sm">{text}</p>
      </div>
    </div>
  );
}

export default HodnotaCard;
