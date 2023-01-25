import React from "react";
import Image from "next/image";
import myImage from "../assets/hero-pic.jpg";

function ImageComp() {
  return (
    <Image src={myImage} alt="Picture of the author" width={500} height={500} />
  );
}

export default ImageComp;
