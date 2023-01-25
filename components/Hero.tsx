import React from "react";
import Image from "next/image";
import HeroPicture from "../assets/hero-picture.jpg";
function Hero() {
  return (
    <>
      <div className="w-full h-screen flex justify-start items-start">
        <div className="w-full flex justify-center items-center absolute h-5/6 bg-heroPattern">
          <Image
            src={HeroPicture}
            alt="hero picture"
            className="w-full h-full absolute z-0 object-cover"
          />
          <div className="relative w-full h-full flex flex-col justify-center items-center bg-heroFilter/50">
            <h1 className=" text-8xl relative text-white font-rye flex before:content-['Vita_vas'] before:absolute before:text-4xl before:-translate-y-14 before:-translate-x-16 before:font-sacramento">
              Paluba
            </h1>
            <p className="text-white text-2xl mt-4">Dobre jedlo, Dobri ludia</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
