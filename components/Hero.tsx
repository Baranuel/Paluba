import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import HeroPicture from "../assets/hero-picture.jpg";
import { gsap } from "gsap";

function Hero() {
  const bigStripe = useRef(null);
  const smallStripe = useRef(null);
  const div = useRef(null);
  const textDiv = useRef(null);
  const text = useRef(null);
  const smallText = useRef(null);
  const img = useRef(null);
  const filter = useRef(null);
  const button = useRef(null);

  const tl = gsap.timeline({ ease: "power3.inOut" });

  useLayoutEffect(() => {
    tl.to([bigStripe.current, smallStripe.current], {
      width: "100%",
      duration: 0.4,
      ease: "in-out",
      stagger: 0.25,
    });
    tl.to(img.current, { opacity: 1, duration: 0.5 }, ">");
    tl.to(
      filter.current,
      {
        backgroundColor: "rgba(74,1,9,0.5)",
      },
      "<"
    );
    tl.to([div.current, textDiv.current], { justifyContent: "end" }, ">");
    tl.to([bigStripe.current, smallStripe.current], {
      width: "0%",
      duration: 0.3,
      stagger: 0.25,
    });
    tl.to(button.current, { opacity: 1, translateY: 0, duration: 0.3 }, "<");
    tl.to(
      [text.current, smallText.current],
      { opacity: 1, ease: "none" },
      "-=0.5"
    );
  }, [tl]);

  return (
    <>
      <div className="min-w-fit w-full h-9/10 flex justify-start items-start">
        <div className="w-full flex justify-center items-center absolute h-9/10 bg-heroPattern">
          <Image
            ref={img}
            src={HeroPicture}
            alt="hero picture"
            className="w-full h-full absolute opacity-0 z-0 object-cover"
            priority
          />
          <div
            ref={filter}
            className="relative w-full h-full flex flex-col justify-center items-center  "
          >
            <div ref={div} className="relative flex mb-4">
              <h1
                ref={text}
                className=" opacity-0 mt-12 text-8xl sm:text-7xl text-white font-rye flex before:content-['Vita_vas'] before:absolute before:text-4xl before:sm:text-3xl before:-translate-y-12 before:-translate-x-14 before:font-sacramento"
              >
                Paluba
              </h1>
              <div
                ref={bigStripe}
                className="absolute w-0 z-2 h-full bg-primaryRed"
              ></div>
            </div>
            <div ref={textDiv} className="flex relative mb-4">
              <div
                ref={smallStripe}
                className="absolute w-0 z-2 h-full bg-primaryRed"
              ></div>
              <p ref={smallText} className="text-white text-2xl">
                Dobre jedlo, Dobri ludia
              </p>
            </div>
            <button
              ref={button}
              className="text-white text-2xl sm:text-xl opacity-0 translate-y-96 py-3 px-8 sm:py-3 sm:px-6 rounded-md bg-primaryRed"
            >
              Prehliadat Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
