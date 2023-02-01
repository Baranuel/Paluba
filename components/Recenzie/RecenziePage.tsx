import React from "react";
import Heading from "../Heading";
import RecenziaCard from "./RecenziaCard";

function RecenziePage() {
  return (
    <div className="min-h-screen  flex flex-col bg-[#FFF9F6]  pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4">
      <Heading title="Co o nas hovoria" />
      <div className="grid grid-cols-6 mt-16 grid-rows-2 ">
        <div className="col-start-1  md:col-start-1 md:col-span-4 sm:col-span-6 sm:col-start-1 sm:row-start-1 col-span-3 lg:col-span-4 self-end p-2">
          <RecenziaCard />
        </div>
        <div className="col-start-4 lg:col-start-3 md:col-start-3 sm:col-span-6 sm:col-start-1 sm:row-start-2 md:col-span-4 row-start-2 col-span-3 lg:col-span-4   p-2">
          <RecenziaCard />
        </div>
      </div>
      <h1 className="self-end sm:self-center mt-4 text-2xl text-primaryRed underline">
        Viac Recenzii
      </h1>
    </div>
  );
}

export default RecenziePage;
