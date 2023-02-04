import Image from "next/image";
import React from "react";
import Heading from "../Heading";
import RecenziaCard from "./RecenziaCard";
import externalLink from "../../assets/externalLink.svg";

function RecenziePage() {
  return (
    <div className="min-h-fit  flex flex-col bg-[#FFF9F6]  pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2">
      <Heading title="Co o nas hovoria" />
      <div className="grid grid-cols-6 grid-rows-2 ">
        <div className="col-start-1  md:col-start-1 md:col-span-4 sm:col-span-6 sm:col-start-1 sm:row-start-1 xs:col-start-1 xs:col-span-6 xs:row-start-1 col-span-3 lg:col-span-4 self-end p-2">
          <RecenziaCard />
        </div>
        <div className="col-start-4 lg:col-start-3 md:col-start-3 sm:col-span-6 sm:col-start-1 sm:row-start-2 md:col-span-4 xs:col-start-1 xs:col-span-6 xs:row-start-2 row-start-2 col-span-3 lg:col-span-4   p-2">
          <RecenziaCard />
        </div>
      </div>
      <a
        href="#"
        className="flex mt-6 sm:justify-center justify-end items-center"
      >
        <h1 className=" mr-2 text-2xl sm:text-xl text-primaryRed underline">
          Viac Recenzii
        </h1>
        <Image
          src={externalLink}
          alt="external link icon"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
}

export default RecenziePage;
