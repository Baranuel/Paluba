import Image from "next/image";
import React from "react";
import hodinyThick from "../../assets/hodinyThick.svg";
import pin from "../../assets/pin.svg";
import phone from "../../assets/phone.svg";
function ContactBanner() {
  return (
    <div className="flex mt-12 justify-center items-center sm:flex-col gap-2">
      <div className="flex gap-4 sm:gap-4 bg-bgSecondary h-36 py-4 px-4 rounded-md border border-primaryRed font-quicksand text-primaryRed font-semibold sm:w-full w-1/4 justify-between items-center">
        <div className="flex flex-col items-center justify-around p-4 sm:p-0 sm:w-1/3 h-full w-full gap-2 ">
          <Image
            className="justify-self-start"
            src={phone}
            alt="hodiny image"
            width={25}
            height={25}
          />

          <div className="h-full text-center flex justify-center items-center">
            <p className="text-xl sm:text-sm">0905 880 900</p>
          </div>
        </div>
        <div className="flex flex-col  items-center p-4 sm:p-0 sm:px-0 sm:w-1/3  h-full w-full gap-2 ">
          <Image
            className="justify-self-start"
            src={hodinyThick}
            alt="hodiny image"
            width={25}
            height={25}
          />
          <div className="h-full flex flex-col border-x-2 border-hrColor text-xl sm:text-sm justify-center sm:min-w-[110px]  w-full items-center text-center">
            <p className="sm:text-xs">Po-Pia</p>
            <h4>09:30 - 21:30</h4>
            <p className="sm:text-xs">Po-Pia</p>
            <h4>09:30 - 21:30</h4>
          </div>
        </div>
        <div className="flex flex-col  items-center p-4 sm:p-0 sm:w-1/3  h-full w-full gap-2">
          <Image
            className="justify-self-start"
            src={pin}
            alt="hodiny image"
            width={25}
            height={25}
          />
          <div className="h-full flex justify=center items-center">
            <p className="text-xl sm:text-xs text-center font-quicksand text-primaryRed font-semibold">
              Jilemnického 1130 965 01 Žiar nad Hronom
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-primaryRed rounded-md w-full">
        <div className="google-map-code rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285.198010906577!2d18.842784874975468!3d48.588966667619644!2m3!1f0!2f39.07368641868923!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x47152f3ecb252311%3A0x515b05e1214a0c91!2sRozvoz%20Paluba!5e1!3m2!1ssk!2sus!4v1675495771854!5m2!1ssk!2sus"
            className="w-full h-80 rounded-md"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
