import React from "react";
import Image from "next/image";
import logo from "../../assets/PalubaLogo.svg";

function Footer() {
  return (
    <footer className="h-44 bg-primaryRed flex">
      <Image src={logo} alt="logo" width={150} height={150} />
    </footer>
  );
}

export default Footer;
