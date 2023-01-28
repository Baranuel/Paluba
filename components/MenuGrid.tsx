import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

function MenuGrid() {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const settings = {
    perPage: 2,
    drag: "free",
    pagination: false,
    arrows: false,
    rewind: true,
    width: 800,
    gap: "1rem",
  };
  return (
    <>
      <h3 className="self-start">Hlavne Chody</h3>
      {!isMobile && (
        <div className="grid grid-cols-3 gid-rows-2 gap-4 w-full h-80 mt-24">
          <div className=" col-span-1">
            <ItemCard />
          </div>
          <div className="col-span-1">
            <ItemCard />
          </div>
          <div className="col-span-1">
            <ItemCard />
          </div>
          <div className="col-span-1">
            <ItemCard />
          </div>
          <div className="col-span-1">
            <ItemCard />
          </div>
          <div className="col-span-1">
            <ItemCard />
          </div>
        </div>
      )}

      {isMobile && (
        <Splide
          options={{
            perPage: 2,
            drag: "free",
            pagination: false,
            arrows: false,
            rewind: false,
            width: "100%",
            fixedWidth: 325,

            gap: "0.5rem",
          }}
          aria-label="My Favorite Images"
        >
          {arr.map((item) => {
            return (
              <SplideSlide className="py-1 w-80" key={item}>
                <ItemCard key={item} />
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </>
  );
}

export default MenuGrid;
