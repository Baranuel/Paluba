import { useRouter } from "next/router";
import { getCategories, getFoodItems } from "../helpers/getFoodItems";
import Image from "next/image";
import React, { useCallback, useEffect, useState, useRef } from "react";
import HeroSection from "../components/CategoryPage/HeroSection";
import FoodItem from "../components/CategoryPage/FoodItem";
import Filterbar from "../components/CategoryPage/Filterbar";
import MobileGrid from "@/components/MenuGrid/MobileGrid";
import MenuGrid from "@/components/MenuGrid/MenuGrid";

interface CategoryProps {
  foodItems: any;
  linkedTo: any;
  categories: any;
  isMobile: boolean;
  windowWidth: number;
}

function Category({ linkedTo, foodItems, categories, isMobile, windowWidth }: CategoryProps) {
  const [seeVegetarian, setSeeVegetarian] = useState(false);
  const menuTable = useRef<HTMLDivElement | null>(null);
  const categoryImage = `https:${linkedTo.Asset[0].fields.file.url}`;
  const foodType = linkedTo.Asset[0].fields.title;


  const sweetFood = categories.filter((item:any) =>
  ["Palacinky", "Tvarohova Pizza"].includes(item.fields.title_id)
);
const foods = categories.filter(
  (item:any) => !["Palacinky", "Tvarohova Pizza"].includes(item.fields.title_id)
);

const deserts = sweetFood.map((item:any) => item.fields);
const mainCourse = foods.map((item:any) => {
  return item.fields;
});

  const masoveIngrediencie = [
    "sunka",
    "tuniak",
    "kuracie maso",
    "salama",
    "bolonska zmes",
  ];



  const replaceSpecialChars = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const sortArray = useCallback((array: any) => {
    return array.sort((a: any, b: any) => {
      return a.fields.id - b.fields.id;
    });
  }, []);

  const vegetarianOnly = foodItems.filter((item: any) => {
    return !item.fields.ingrediencie.some((ing: any) => {
      const strippedIngredient = replaceSpecialChars(ing);
      return masoveIngrediencie.includes(strippedIngredient);
    });
  });
  const displayFood = sortArray(seeVegetarian ? vegetarianOnly : foodItems);

  return (
    <div className="bg-whiteBg ">
      <HeroSection url={categoryImage} foodType={foodType} />
      <div
        ref={menuTable}
        className="mt-12 flex flex-col items-center h-fit w-full px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2 "
      >
        <Filterbar
        menu={menuTable}
          seeVegetarian={seeVegetarian}
          setSeeVegetarian={setSeeVegetarian}
        />
        <div
          className={` h-fit  w-screen px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2`}
        >
          {displayFood.map((item: any, index: number) => (
            <FoodItem key={index} {...item.fields} />
          ))}
        </div>
      </div>
        <MenuGrid isMobile={isMobile} windowWidth={windowWidth} categories={categories} />
    </div>
  );
}

export default Category;

export async function getServerSideProps({ params }: any) {
  const category = params.category;
  const foodItems = await getFoodItems(category);
  const categories = await getCategories()

  return {
    props: {
      categories: categories.items,
      linkedTo: foodItems.includes,
      foodItems: foodItems.items,
    },
  };
}
