import React from "react";
import Heading from "../Heading";
import HodnotaCard from "./HodnotaCard";
import hodinyImg from "../../assets/hodiny.svg";
import chefImg from "../../assets/chef.svg";
import saladImg from "../../assets/salat.svg";
import trofejImg from "../../assets/trofej.svg";

interface HodnotyPageProps {
  isMobile: boolean;
}

function HodnotyPage({ isMobile }: HodnotyPageProps) {
  return (
    <div className="bg-bgSecondary min-h-screen px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4">
      <Heading title="Hodnoty" />
      <div className="mt-4 flex sm:flex-wrap gap-2">
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
    </div>
  );
}

export default HodnotyPage;
