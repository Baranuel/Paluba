import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

interface menuProps {
  categories: any[];
}

function MenuGrid({ categories }: menuProps) {
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
<<<<<<< HEAD
      <div className=" w-full">
        <h3 className="self-start  ml-52 xl:ml-24 lg:ml-24 md:ml-4 sm:ml-4 mt-24 mb-4 ml-4 sm:text-2xl text-4xl text-primaryRed">
          Hlavne Chody
        </h3>
        {!isMobile && (
          <div className=" mx-52 xl:mx-24 lg:mx-24 md:mx-4 sm:mx-4 grid grid-cols-3 gid-rows-2 gap-4  h-80 mt-4">
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
=======
      <h3 className="self-start mt-24 mb-4 sm:text-2xl text-4xl text-primaryRed">
        Hlavne Chody
      </h3>
      {!isMobile && (
        <div className="grid grid-cols-3 gid-rows-2 gap-4 w-full h-80 mt-4">
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
>>>>>>> parent of 5c050d7 (sides of the slider , padding)

      {isMobile && (
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
<<<<<<< HEAD

            fixedWidth: windowWidth - 80,
=======
            fixedWidth: window.innerWidth - 80,
>>>>>>> parent of 5c050d7 (sides of the slider , padding)
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
                <SplideSlide className="py-1" key={index + "slide"}>
                  <ItemCard
                    key={index + "item"}
                    title={item.title_id}
                    image={item.image}
                  />
                </SplideSlide>
              );
            })}
        </Splide>
      )}
    </>
  );
}

export default MenuGrid;
