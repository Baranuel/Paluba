import React from "react";
import Heading from "../Heading";
import HodnotaCard from "./HodnotaCard";
import hodinyImg from "../../assets/hodiny.svg";
import chefImg from "../../assets/chef.svg";
import saladImg from "../../assets/salat.svg";
import trofejImg from "../../assets/trofej.svg";
import Image from "next/image";
import bgPic from "../../assets/backgroundPizza.svg";
import Link from "next/link";

interface HodnotyPageProps {
  isMobile: boolean;
}

function HodnotyPage({ isMobile }: HodnotyPageProps) {
  return (
    <div className="bg-bgSecondary z-1 overflow-hidden relative min-h-content pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2 ">
      <Heading title="Hodnoty" />
      <Image
        className="sm:m-auto xs:m-auto absolute -right-40 top-8 sm:inset-0 xs:inset-0 w-1/3 sm:top-0 xs:top-0 h-content xs:w-full xs:h-1/2 sm:w-full sm:h-1/2 object xs:object-center sm:object-center z-0"
        src={bgPic}
        alt="backgorund pizza image"
      />
      <div className="mt-12 flex relative sm:flex-wrap xs:flex-wrap gap-2 z-1">
        <HodnotaCard
          isMobile={isMobile}
          image={hodinyImg}
          title="Donáška"
          text="30 min"
        />
        <HodnotaCard
          isMobile={isMobile}
          image={chefImg}
          title="Skvelá Chuť"
          text="Domáce recepty"
        />
        <HodnotaCard
          isMobile={isMobile}
          image={saladImg}
          title="Kvalita"
          text="Vždy Fresh"
        />
        <HodnotaCard
          isMobile={isMobile}
          image={trofejImg}
          title="Super Pizza"
          text="Jednotka v okolí"
        />
      </div>
      <div className="relative mt-16 flex flex-col items-start sm:items-center">
        <h2 className="sm:text-2xl text-3xl font-semibold text-center">
          Fungujeme už vyše 15 rokov
        </h2>
        <p className=" w-[74ch] mb-4 sm:w-fit z-1 text-start sm:text-center mt-2 text-lg sm:text-sm">
          V Palube vieme, že nič neprekoná chuť čerstvo upečenej pizze s
          kvalitnými surovinami, preto používame len tie najlepšie a
          najčerstvejšie. Veríme, že dobrá pizza nie je len o jedle, ale aj o
          skúsenosti. Do každej objednávky z našej pizzérie dávame srdce a dušu,
          aby bola nezabudnuteľná.
        </p>
        <Link
          href="#Ponuka"
          scroll={false}
          className="text-white text-2xl sm:text-xl mt-6 py-3 px-8 sm:py-3 sm:px-6 rounded-md bg-primaryRed"
        >
          Prehliadať Menu
        </Link>
      </div>
    </div>
  );
}

export default HodnotyPage;
