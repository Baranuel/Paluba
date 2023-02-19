import Image from "next/image";
import React from "react";
import Heading from "../Heading";
import RecenziaCard from "./RecenziaCard";
import externalLink from "../../assets/externalLink.svg";
import Link from "next/link";

function RecenziePage() {
  return (
    <div className="min-h-fit  flex flex-col bg-[#FFF9F6]  pb-12 px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2">
      <Heading title="Čo o nás hovoria" />
      <div className="grid grid-cols-6 grid-rows-2 ">
        <div className="col-start-1  md:col-start-1 md:col-span-4 sm:col-span-6 sm:col-start-1 sm:row-start-1 xs:col-start-1 xs:col-span-6 xs:row-start-1 col-span-3 lg:col-span-4 self-end p-2">
          <RecenziaCard
            author="Lucia Nováková"
            text="Ich trvanlivosť a popularita svedčia o kvalite ich pizzy, ktorá si
        získala srdcia miestnych obyvateľov. Ak hľadáte tradičnú a chutnú pizzu,
        Pizza Paluba je tým správnym miestom."
          />
        </div>
        <div className="col-start-4 lg:col-start-3 md:col-start-3 sm:col-span-6 sm:col-start-1 sm:row-start-2 md:col-span-4 xs:col-start-1 xs:col-span-6 xs:row-start-2 row-start-2 col-span-3 lg:col-span-4   p-2">
          <RecenziaCard
            author="Peter Kováč"
            text="Paluba je už dlho najoblúbenejším miestom na objednávanie jedla a je jasné, že dôvodom je ich vynikajúce jedlo a spoľahlivá donáška. Sú skutočne profesionálni a robia všetko pre to, aby zákazníci boli spokojní. Určite odporúčam"
          />
        </div>
      </div>
      <Link
        target="blank"
        href="https://www.google.com/search?q=palubarroz&oq=pal&aqs=chrome.3.69i60j46i39i175i199j69i57j69i59j0i512j69i60l3.1969j0j4&sourceid=chrome&ie=UTF-8#lrd=0x47152f3ecb252311:0x515b05e1214a0c91,1,,,,"
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
      </Link>
    </div>
  );
}

export default RecenziePage;
