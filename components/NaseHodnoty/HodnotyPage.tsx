import React from "react";
import Heading from "../Heading";
import HodnotaCard from "./HodnotaCard";
import hodinyImg from "../../assets/hodiny.svg";
import chefImg from "../../assets/chef.svg";
import saladImg from "../../assets/salat.svg";
import trofejImg from "../../assets/trofej.svg";
import Image from "next/image";
import bgPic from "../../assets/backgroundPizza.svg";

interface HodnotyPageProps {
  isMobile: boolean;
}

function HodnotyPage({ isMobile }: HodnotyPageProps) {
  return (
    <div className="bg-bgSecondary z-1 overflow-hidden relative min-h-content pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 ">
      <Heading title="Hodnoty" />
      <Image
        className="sm:m-auto absolute -right-40 top-8 sm:inset-0 w-1/3 sm:top-0 h-content sm:w-full sm:h-1/2 object sm:object-center z-0"
        src={bgPic}
        alt="backgorund pizza image"
      />
      <div className="mt-12 flex relative sm:flex-wrap gap-2 z-1">
        <HodnotaCard
          isMobile={isMobile}
          image={hodinyImg}
          title="Donaska"
          text="30 min"
        />
        <HodnotaCard
          isMobile={isMobile}
          image={chefImg}
          title="Skvela Chut"
          text="Domace recepty"
        />
        <HodnotaCard
          isMobile={isMobile}
          image={saladImg}
          title="Kvalita"
          text="Vzdy Fresh"
        />
        <HodnotaCard
          isMobile={isMobile}
          image={trofejImg}
          title="Super Pizza"
          text="Jednotka v okoli"
        />
      </div>
      <div className="relative mt-16 flex flex-col items-start sm:items-center">
        <h2 className="sm:text-2xl text-3xl font-semibold text-center">
          Fungujeme uz vyse 15 rokov
        </h2>
        <p className=" w-[52ch] sm:w-fit z-1 text-start sm:text-center w-10/12 mt-2 text-2xl sm:text-xl">
          Vzdy sa snazime dorucit najvyssiu spokojnost. Vazime si hodnoty ktore
          nas odlisili od zvysku restauracii.
        </p>
        <button className="text-white text-2xl sm:text-xl mt-6 py-3 px-8 sm:py-3 sm:px-6 rounded-md bg-primaryRed">
          Prehliadat Menu
        </button>
      </div>
    </div>
  );
}

export default HodnotyPage;
