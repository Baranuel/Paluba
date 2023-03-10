import React from "react";
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import ItemCard from "../ItemCard";
import Image from "next/image";
import desertsIcon from "../../assets/deserts.svg";
import mainCourseIcon from "../../assets/maincourse.svg";

interface MobileGridProps {
  windowWidth: number;
  mainCourse: any[];
  deserts: any[];
}

function MobileGrid({ windowWidth, mainCourse, deserts }: MobileGridProps) {
  const settings: Options = {
    drag: "free",
    focus: "center",
    snap: true,
    pagination: false,
    arrows: false,
    rewind: false,
    width: "100%",
    height: 210,
    fixedWidth: windowWidth - 80,
    flickPower: 300,
    slideFocus: true,
    focusableNodes: "img",
    gap: "0.5rem",
  };

  return (
    <div className="min-h-fit ">
      <div className=" self-start ml-4 items-center flex mt-24 sm:mt-8 mb-2 font-semibold sm:text-2xl text-4xl text-primaryRed">
        <Image
          className="mr-2"
          src={mainCourseIcon}
          alt="main course"
          width={25}
          height={25}
        />
        <p>Hlavné Chody</p>
      </div>

      <Splide
        options={settings}
        className="fixed relative -z-1"
        aria-label="My Favorite Images"
      >
        {mainCourse
          .sort()
          .reverse()
          .map((item, index) => {
            return (
              <SplideSlide
                className="py-1  first:pl-4 last:pr-4"
                key={index + "slide"}
              >
                <ItemCard
                  key={index + "item"}
                  title={item.title_id}
                  image={item.image}
                />
              </SplideSlide>
            );
          })}
      </Splide>

      <hr className="mx-12 mb-4 border-t-1 border-bgSecondary" />
      <div className="self-start  ml-4 items-center flex mt-24 sm:mt-8 mb-2 font-semibold sm:text-2xl text-4xl text-primaryRed">
        <Image
          className="mr-2"
          src={desertsIcon}
          alt="main course"
          width={25}
          height={25}
          sizes="(max-width: 900px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        />
        <p>Dezerty</p>
      </div>

      <Splide options={settings} aria-label="My Favorite Images">
        {deserts.sort().map((item, index) => {
          return (
            <SplideSlide
              className="py-1 first:pl-4 last:pr-4"
              key={index + "slide"}
            >
              <ItemCard
                key={index + "item"}
                title={item.title_id}
                image={item.image}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      <hr className="mx-12 mb-4 border-t-1 border-bgSecondary" />
    </div>
  );
}

export default MobileGrid;
