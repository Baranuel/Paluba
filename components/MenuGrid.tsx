import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

interface menuProps {
  categories: any[];
}

function MenuGrid({ categories }: menuProps) {
  const foodCategories = categories.find((category) =>
    category.fields.title_id === "Palacinky" || "Tvarohova Pizza"
      ? category
      : null
  );
  console.log(foodCategories);
  const fields = categories.map((item) => {
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
      <div className=" mx-24  2xl:mx-64 xl:mx-42 md:mx-4 sm:mx-4 flex flex-col items-center ">
        <h3 className="self-start mt-24 sm:mt-12 mb-4 sm:text-2xl text-4xl text-primaryRed">
          Hlavne Chody
        </h3>
        {!isMobile && (
          <div className=" grid grid-cols-3 gid-rows-2 gap-4 w-full h-80 mt-4">
            {fields
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
              height: 225,
              fixedWidth: windowWidth - 80,
              flickPower: 300,
              gap: "0.5rem",
            }}
            aria-label="My Favorite Images"
          >
            {fields
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
          <h3 className="self-start  ml-4  mb-4 sm:text-2xl text-4xl text-primaryRed">
            Dezerty
          </h3>
          <Splide
            options={{
              drag: "free",
              focus: "center",
              snap: true,
              pagination: false,
              arrows: false,
              rewind: false,
              width: "100%",
              height: 250,
              fixedWidth: windowWidth - 80,
              flickPower: 300,
              gap: "0.5rem",
            }}
            aria-label="My Favorite Images"
          >
            {fields
              .sort()

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
        </>
      )}
    </>
  );
}

export default MenuGrid;
