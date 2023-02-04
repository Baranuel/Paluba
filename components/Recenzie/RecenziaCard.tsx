import React from "react";

interface RecenziaCardProps {
  text: string;
  author: string;
}

function RecenziaCard({ text, author }: RecenziaCardProps) {
  return (
    <div className=" first:self-start last:self-end mt-12 sm:mt-4 p-6 sm:p-4 bg-[#FFF2EC] border-2 rounded-xl flex flex-col border-primaryRed">
      <h1 className="font-rye text-8xl sm:text-5xl self-center flex  text-primaryRed">
        {'"'}
      </h1>
      <p className=" px-16 md:px-4 sm:px-2 sm:text-sm md:text-lg text-xl text-center font-quicksand font-medium">
        {" "}
        {text}
      </p>
      <h3 className="self-center mt-12 sm:mt-8 text-4xl sm:text-2xl  font-medium font-sacramento text-primaryRed">
        - {author}
      </h3>
    </div>
  );
}

export default RecenziaCard;
