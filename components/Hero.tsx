import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroPicture from "../assets/hero-picture.jpeg";
import { gsap } from "gsap";

function Hero() {
  // const bigStripe = useRef(null);
  // const smallStripe = useRef(null);
  // const div = useRef(null);
  // const textDiv = useRef(null);
  // const text = useRef(null);
  // const smallText = useRef(null);
  // const img = useRef(null);
  // const filter = useRef(null);
  // const button = useRef(null);

  // const tl = gsap.timeline({
  //   ease: "power3.inOut",
  //   delay: 0.2,
  //   saveStyle: true,
  // });

  // const animate = useCallback(() => {
  //   tl.to([bigStripe.current, smallStripe.current], {
  //     width: "100%",
  //     duration: 0.4,
  //     ease: "in-out",
  //     stagger: 0.25,
  //   });
  //   tl.to(img.current, { opacity: 1, duration: 1 }, ">");
  //   tl.to(
  //     filter.current,
  //     {
  //       backgroundColor: "rgba(74,1,9,0.5)",
  //     },
  //     "<"
  //   );
  //   tl.to([div.current, textDiv.current], { justifyContent: "end" }, "<");
  //   tl.to(
  //     [bigStripe.current, smallStripe.current],
  //     {
  //       width: "0%",
  //       duration: 0.3,
  //       stagger: 0.25,
  //     },
  //     "-=0.5"
  //   );
  //   tl.to(
  //     button.current,
  //     { opacity: 1, translateY: 0, duration: 0.3 },
  //     "-=0.5"
  //   );
  //   tl.to(
  //     [text.current, smallText.current],
  //     { opacity: 1, ease: "none" },
  //     "-=0.5"
  //   );
  // }, [tl]);

  // useEffect(() => {
  //   animate();
  // }, [animate]);

  return (
    <>
      <div className="min-w-fit w-full h-screen flex justify-start items-start">
        <div className="w-full flex justify-center items-center absolute h-screen bg-heroPattern">
          <Image
            src={HeroPicture}
            fill
            alt="hero picture"
            className="w-full h-full absolute  z-0 object-cover"
            priority
          />
          <div className="relative w-full h-full bg-[rgba(74,1,9,0.4)] flex flex-col justify-center items-center  ">
            <div className="relative flex mb-4">
              <h1 className="  mt-12 text-8xl sm:text-7xl xs:text-6xl text-white font-rye flex before:content-['Víta_vás'] before:absolute before:text-4xl before:sm:text-3xl before:-translate-y-10 before:-translate-x-8 before:font-sacramento">
                Paluba
              </h1>
              <div className="absolute w-0 z-2 h-full rounded-md bg-primaryRed"></div>
            </div>
            <div className="flex relative mb-4">
              <div className="absolute w-0 z-2 h-full rounded-md bg-primaryRed"></div>
              <p className="text-white text-xl">Dobré jedlo, Dobrí ľudia</p>
            </div>
            <Link
              className="text-white text-2xl sm:text-xl  py-3 px-8 sm:py-3 sm:px-6 rounded-md bg-primaryRed"
              href="#Ponuka"
            >
              Vybrať Jedlo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
