import React from "react";
import Heading from "../Heading";
import HodnotaCard from "./HodnotaCard";
import hodinyImg from "../../assets/hodiny.svg";
import chefImg from "../../assets/chef.svg";
import saladImg from "../../assets/salat.svg";
import trofejImg from "../../assets/trofej.svg";

function HodnotyPage() {
  return (
    <div className="bg-bgSecondary min-h-screen px-4">
      <Heading title="Hodnoty" />
      <div className="mt-4 flex flex-wrap gap-2">
        <HodnotaCard image={hodinyImg} title="Donaska" text="30 min" />
        <HodnotaCard
          image={chefImg}
          title="Skvela Chut"
          text="Domace recepty"
        />
        <HodnotaCard image={saladImg} title="Kvalita" text="Vzdy Fresh" />
        <HodnotaCard
          image={trofejImg}
          title="Uzasna Pizza"
          text="Jednotka v okoli"
        />
      </div>
    </div>
  );
}

export default HodnotyPage;
