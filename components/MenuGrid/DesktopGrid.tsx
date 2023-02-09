import React from "react";
import ItemCard from "../ItemCard";
import Image from "next/image";
import mainCourseIcon from "../../assets/maincourse.svg";
import desertsIcon from "../../assets/deserts.svg";

function DesktopGrid(props: any) {
  const { mainCourse, deserts } = props;
  return (
    <>
      <div className="self-start  flex mt-24 sm:mt-8 mb-2 font-semibold sm:text-2xl text-4xl text-primaryRed">
        <Image
          className="mr-2"
          src={mainCourseIcon}
          alt="main course"
          style={{ width: "25px", height: "25px"}}

        />
        <h3>Hlavné Chody</h3>
      </div>
      <div className=" grid grid-cols-3 gid-rows-2 gap-4 w-full mt-4">
        {mainCourse
          .sort()
          .reverse()
          .map((item: any, index: number) => {
            return (
              <div key={index + "div"} className=" relative col-span-1">
                <ItemCard
                  key={index + "Item-Card"}
                  title={item.title_id}
                  image={item.image}
                />
              </div>
            );
          })}
      </div>

      <div className="self-start  flex mt-24 sm:mt-8 mb-2 font-semibold sm:text-2xl text-4xl text-primaryRed">
        <Image
          className="mr-2"
          src={desertsIcon}
          alt="main course"
          style={{ width: "25px", height: "25px"}}

        />
        <h3>Dezerty</h3>
      </div>

      <div className=" grid grid-cols-3 gid-rows-2 gap-4 w-full h-80 mt-4">
        {deserts
          .sort()
          .reverse()
          .map((item: any, index: number) => {
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
    </>
  );
}

export default DesktopGrid;
