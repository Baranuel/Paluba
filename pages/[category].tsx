import { useRouter } from "next/router";
import { getFoodItems } from "../helpers/getFoodItems";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import HeroSection from "../components/CategoryPage/HeroSection";
import FoodItem from "../components/CategoryPage/FoodItem";
import ToggleChip from "../components/ToggleChip";
import Filterbar from "../components/CategoryPage/Filterbar";

interface CategoryProps {
  foodItems: any;
  linkedTo?: any;
}

function Category({ linkedTo, foodItems }: CategoryProps) {
  const [seeVegetarian, setSeeVegetarian] = useState(false);

  const categoryImage = `https:${linkedTo.Asset[0].fields.file.url}`;
  const foodType = linkedTo.Asset[0].fields.title;

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
      <div className="mt-12 flex flex-col items-center w-full px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2 ">
        <Filterbar
          seeVegetarian={seeVegetarian}
          setSeeVegetarian={setSeeVegetarian}
        />
        <div className="min-h-screen w-full">
          {displayFood.map((item: any, index: number) => (
            <FoodItem key={index} {...item.fields} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;

export async function getServerSideProps({ params }: any) {
  const category = params.category;
  const foodItems = await getFoodItems(category);

  return {
    props: {
      linkedTo: foodItems.includes,
      foodItems: foodItems.items,
    },
  };
}
