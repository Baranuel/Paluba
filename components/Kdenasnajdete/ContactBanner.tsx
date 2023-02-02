import Image from "next/image";
import React from "react";
import hodinyThick from "../../assets/hodinyThick.svg";
import pin from "../../assets/pin.svg";
import phone from "../../assets/phone.svg";
function ContactBanner() {
  return (
    <div className="flex mt-12 justify-center items-center sm:flex-col gap-4">
      <div className="flex gap-4 sm:gap-1 bg-bgSecondary h-32 rounded-md border border-primaryRed font-quicksand text-primaryRed font-semibold sm:w-full w-1/4 justify-between items-center">
        <div className="flex flex-col items-center p-4 sm:p-2 sm:w-1/3 h-full w-full gap-2 ">
          <Image
            className="justify-self-start"
            src={phone}
            alt="hodiny image"
            width={20}
            height={20}
          />

          <div className="h-full flex justify=center items-center">
            <p className="text-xl sm:text-sm">0905 880 900</p>
          </div>
        </div>
        <div className="flex flex-col  items-center p-4 sm:p-2 sm:px-0 sm:w-1/3  h-full w-full gap-2 ">
          <Image
            className="justify-self-start"
            src={hodinyThick}
            alt="hodiny image"
            width={20}
            height={20}
          />
          <div className="h-full flex flex-col border-x-2 border-primaryRed text-xl sm:text-sm justify-center  w-full items-center text-center">
            <p className="sm:text-xs">Po-Pia</p>
            <h4>09:30 - 21:30</h4>
            <p className="sm:text-xs">Po-Pia</p>
            <h4>09:30 - 21:30</h4>
          </div>
        </div>
        <div className="flex flex-col  items-center p-4 sm:p-2 sm:w-1/3  h-full w-full gap-2">
          <Image
            className="justify-self-start"
            src={pin}
            alt="hodiny image"
            width={20}
            height={20}
          />
          <div className="h-full flex justify=center items-center">
            <p className="text-xl sm:text-xs text-center font-quicksand text-primaryRed font-semibold">
              Jilemnického 1130 965 01 Žiar nad Hronom
            </p>
          </div>
        </div>
      </div>
      <div className="h-80 bg-primaryRed w-full"></div>
    </div>
  );
}

export default ContactBanner;
