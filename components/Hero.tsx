import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import HeroPicture from "../assets/hero-picture.jpg";
import { gsap } from "gsap";

function Hero() {
  const title = useRef(null);
  const div = useRef(null);
  const text = useRef(null);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      tl.to(title.current, { width: "100%", duration: 0.3, ease: "in-out" });
      tl.to(div.current, { justifyContent: "end" }, ">");
      tl.to(title.current, { width: "0%", duration: 0.3, ease: "in-out" });
      tl.to(text.current, { opacity: 1, ease: "none" }, "-=0.5");
    });

    return window.removeEventListener("load", () => {
      tl.to(title.current, { width: "100%", duration: 0.3, ease: "in-out" });
      tl.to(div.current, { justifyContent: "end" }, ">");
      tl.to(title.current, { width: "0%", duration: 0.3, ease: "in-out" });
      tl.to(text.current, { opacity: 1, ease: "none" }, "-=0.5");
    });
  }, [tl]);

  return (
    <>
      <div className="min-w-fit w-full h-9/10 flex justify-start items-start">
        <div className="w-full flex justify-center items-center absolute h-9/10 bg-heroPattern">
          <Image
            src={HeroPicture}
            alt="hero picture"
            className="w-full h-full absolute z-0 object-cover"
          />
          <div className="relative w-full h-full flex flex-col justify-center items-center bg-heroFilter/50">
            <div ref={div} className="relative flex">
              <h1
                ref={text}
                className=" opacity-0 mt-12 text-8xl sm:text-7xl text-white font-rye flex before:content-['Vita_vas'] before:absolute before:text-4xl before:sm:text-3xl before:-translate-y-12 before:-translate-x-14 before:font-sacramento"
              >
                Paluba
              </h1>
              <div
                ref={title}
                className="absolute w-0 z-2 h-full bg-primaryRed"
              ></div>
            </div>
            <p className="text-white text-2xl my-4">Dobre jedlo, Dobri ludia</p>
            <button className="text-white text-2xl sm:text-xl  py-3 px-8 sm:py-3 sm:px-6 rounded-md bg-primaryRed">
              Prehliadat Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
