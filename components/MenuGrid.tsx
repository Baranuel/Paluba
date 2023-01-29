import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import desertsIcon from "../assets/deserts.svg";
import mainCourseIcon from "../assets/maincourse.svg";
import Image from "next/image";
// Default theme
import "@splidejs/splide/css";

interface menuProps {
  categories: any[];
}

function MenuGrid({ categories }: menuProps) {
  const sweetFood = categories.filter((item) =>
    ["Palacinky", "Tvarohova Pizza"].includes(item.fields.title_id)
  );
  const foods = categories.filter(
    (item) => !["Palacinky", "Tvarohova Pizza"].includes(item.fields.title_id)
  );

  const deserts = sweetFood.map((item) => item.fields);
  const mainCourse = foods.map((item) => {
    return item.fields;
  });

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="mt-6 mx-24 2xl:mx-64 xl:mx-42 md:mx-4 sm:mx-4 flex flex-col items-center ">
        <div className="self-start  flex mt-24 sm:mt-8 mb-2 font-semibold sm:text-2xl text-4xl text-primaryRed">
          <Image
            className="mr-2"
            src={mainCourseIcon}
            alt="main course"
            width={25}
            height={25}
          />
          <h3>Hlavne Chody</h3>
        </div>
        {!isMobile && (
          <div className=" grid grid-cols-3 gid-rows-2 gap-4 w-full h-80 mt-4">
            {mainCourse
              .sort()
              .reverse()
              .map((item, index) => {
                return (
                  <div key={index + "div"} className=" col-span-1">
                    <ItemCard
                      key={index + "Item-Card"}
                      title={item.title_id}
                      image={item.image}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {isMobile && (
        <>
          <Splide
            options={{
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
              gap: "0.5rem",
            }}
            aria-label="My Favorite Images"
          >
            {mainCourse
              .sort()
              .reverse()
              .map((item, index) => {
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
          <hr className="mx-12 mb-4" />

          <div className="self-start  ml-4 items-center flex mt-24 sm:mt-8 mb-2 font-semibold sm:text-2xl text-4xl text-primaryRed">
            <Image
              className="mr-2"
              src={desertsIcon}
              alt="main course"
              width={25}
              height={25}
            />
            <h3>Dezerty</h3>
          </div>
          <Splide
            options={{
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
              gap: "0.5rem",
            }}
            aria-label="My Favorite Images"
          >
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
        </>
      )}
    </>
  );
}

export default MenuGrid;
