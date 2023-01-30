import React, { useEffect, useState } from "react";

// Default theme
import "@splidejs/splide/css";
import DesktopGrid from "./DesktopGrid";
import MobileGrid from "./MobileGrid";
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
      {!isMobile && (
        <div className="mt-6 mx-24 2xl:mx-64 xl:mx-42 md:mx-4 sm:mx-4 flex flex-col min-h-screen items-center ">
          <DesktopGrid mainCourse={mainCourse} deserts={deserts} />
        </div>
      )}

      {isMobile && (
        <MobileGrid
          windowWidth={windowWidth}
          mainCourse={mainCourse}
          deserts={deserts}
        />
      )}
    </>
  );
}

export default MenuGrid;
