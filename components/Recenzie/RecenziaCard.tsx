import React from "react";

function RecenziaCard() {
  return (
    <div className=" first:self-start last:self-end mt-12 sm:mt-4 p-8 sm:p-4 bg-[#FFF2EC] border-2 rounded-xl flex flex-col border-primaryRed">
      <h1 className="font-rye text-8xl sm:text-6xl self-center flex  text-primaryRed">
        {'"'}
      </h1>
      <p className=" px-16 md:px-4 sm:px-2 sm:text-sm md:text-lg text-xl text-center font-quicksand font-medium">
        {" "}
        Ich trvanlivosť a popularita svedčia o kvalite ich pizzy, ktorá si
        získala srdcia miestnych obyvateľov. Ak hľadáte tradičnú a chutnú pizzu,
        Pizza Paluba je tým správnym miestom.
      </p>
      <h3 className="self-center mt-12 sm:mt-8 text-4xl sm:text-2xl  font-medium font-sacramento">
        - Reka Forgo
      </h3>
    </div>
  );
}

export default RecenziaCard;
