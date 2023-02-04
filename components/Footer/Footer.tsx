import React from "react";
import Image from "next/image";
import logo from "../../assets/PalubaLogo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className="h-44 bg-primaryRed flex justify-between items-center w-full">
      <a href="#">
        <Image src={logo} alt="logo" width={150} height={150} />
      </a>
      <div className="h-full flex flex-col text-xl sm:text-sm justify-center items-center w-1/3 text-white">
        <p className="sm:text-sm">Po-Pia</p>
        <h4 className="font-semibold">09:30 - 21:30</h4>
        <p className="sm:text-sm">Sob-Ned</p>
        <h4 className="font-semibold">09:30 - 21:30</h4>
      </div>
      <div className="w-1/3 flex gap-4 justify-center items-center">
        <Image src={instagram} alt="instagram" width={25} height={25} />
        <Image src={facebook} alt="facebook" width={15} height={20} />
      </div>
    </footer>
  );
}

export default Footer;
