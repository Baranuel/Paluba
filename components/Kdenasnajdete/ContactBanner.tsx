import Image from "next/image";
import React from "react";
import hodinyThick from "../../assets/hodinyThick.svg";
import pin from "../../assets/pin.svg";
import phone from "../../assets/phone.svg";

interface ContactBannerProps {
  isMobile: boolean;
}

function ContactBanner({ isMobile }: ContactBannerProps) {
  return (
    <div className="flex h-[800px] lg:h-[700px] md:h-[700px] sm:h-[500px] h-full mt-12 justify-center items-center md:flex-col sm:flex-col gap-2">
      <div className="flex gap-4 sm:gap-4 bg-bgSecondary flex-col sm:flex-row md:flex-row sm:h-36 md:h-fit min-h-fit h-full py-4 px-4 rounded-md border border-primaryRed font-quicksand text-primaryRed font-semibold sm:w-full md:w-full w-1/4 justify-between items-center">
        <div className="flex flex-col sm:items-center justify-around p-4 sm:p-0 sm:w-1/3 h-full w-full gap-2 ">
          <Image
            className="justify-self-start"
            src={phone}
            alt="hodiny image"
            width={isMobile ? 25 : 30}
            height={isMobile ? 25 : 30}
          />

          <div className="h-full text-center flex justify-center items-center">
            <p className="text-2xl md:text-xl sm:text-sm">0905 880 900</p>
          </div>
        </div>
        <div className="flex flex-col  border-y-2 border-hrColor sm:border-y-0 md:border-y-0 sm:border-x-2 md:border-x-2 border-hrColor sm:items-center p-4 sm:p-0 sm:px-0 sm:w-1/3  h-full w-full gap-2 ">
          <Image
            className="justify-self-start"
            src={hodinyThick}
            alt="hodiny image"
            width={isMobile ? 25 : 30}
            height={isMobile ? 25 : 30}
          />
          <div className="h-full flex gap-4 sm:gap-0 flex-col  text-2xl md:text-xl sm:text-sm justify-center sm:min-w-[110px] w-full items-center text-center">
            <div>
              <p className="sm:text-xs">Po-Pia</p>
              <h4>09:30 - 21:30</h4>
            </div>
            <div>
              <p className="sm:text-xs">Po-Pia</p>
              <h4>09:30 - 21:30</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:items-center p-4 md:p-2 sm:p-0 sm:w-1/3  h-full w-full gap-2">
          <Image
            className="justify-self-start"
            src={pin}
            alt="hodiny image"
            width={isMobile ? 25 : 30}
            height={isMobile ? 25 : 30}
          />
          <div className="h-full flex justify-center items-center">
            <p className="text-2xl lg:text-md md:text-xl sm:text-xs text-center font-quicksand text-primaryRed font-semibold">
              Jilemnického 1130 965 01 Žiar nad Hronom
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-primaryRed rounded-md w-full h-full border border-primaryRed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285.198010906577!2d18.842784874975468!3d48.588966667619644!2m3!1f0!2f39.07368641868923!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x47152f3ecb252311%3A0x515b05e1214a0c91!2sRozvoz%20Paluba!5e1!3m2!1ssk!2sus!4v1675495771854!5m2!1ssk!2sus"
          className="w-full h-full rounded-md "
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactBanner;
