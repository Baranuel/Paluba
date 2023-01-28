import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

function MenuGrid() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
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

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h3 className="self-start mt-14 mb-4 text-2xl text-primaryRed">
        Hlavne Chody
      </h3>
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
            drag: "free",
            focus: "center",
            pagination: false,
            arrows: false,
            rewind: false,
            width: "100%",
            fixedWidth: window.innerWidth - 80,
            gap: "0.5rem",
          }}
          aria-label="My Favorite Images"
        >
          {arr.map((item) => {
            return (
              <SplideSlide className="py-1" key={item}>
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
