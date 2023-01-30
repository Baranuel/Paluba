import React from "react";

interface HeadingProps {
  title: string;
}

function Heading({ title }: HeadingProps) {
  return (
    <div className=" flex flex-col items-center ">
      <h1 className="self-start sm:self-center mt-24 sm:mt-12 text-6xl sm:text-4xl font-bold text-primaryRed font-sahitya">
        {title}
      </h1>
    </div>
  );
}

export default Heading;
