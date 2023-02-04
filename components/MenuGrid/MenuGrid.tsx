import React, { useEffect, useState } from "react";

// Default theme
import "@splidejs/splide/css";
import DesktopGrid from "./DesktopGrid";
import MobileGrid from "./MobileGrid";
import Heading from "../Heading";
interface menuProps {
  windowWidth: number;
  isMobile: boolean;
  categories: any[];
}

function MenuGrid({ categories, windowWidth, isMobile }: menuProps) {
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

  return (
    <>
      {!isMobile && (
        <div className="mt-6 pb-12 mx-24 2xl:mx-64 xl:mx-42 md:mx-4 sm:mx-4 flex flex-col min-h-screen  items-center ">
          <Heading title="Ponuka" id="Ponuka" />
          <DesktopGrid mainCourse={mainCourse} deserts={deserts} />
        </div>
      )}

      {isMobile && (
        <>
          <Heading title="Ponuka" id="Ponuka" />
          <MobileGrid
            windowWidth={windowWidth}
            mainCourse={mainCourse}
            deserts={deserts}
          />
        </>
      )}
    </>
  );
}

export default MenuGrid;
