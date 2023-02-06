import { useRouter } from "next/router";
import { getFoodItems } from "../helpers/getFoodItems";
import Image from "next/image";
import React from "react";
import HeroSection from "../components/CategoryPage/HeroSection";
import FoodItem from "../components/CategoryPage/FoodItem";

interface CategoryProps {
  foodItems: any;
  linkedTo?: any;
}

function Category({ linkedTo, foodItems }: CategoryProps) {
  const categoryImage = `https:${linkedTo.Asset[0].fields.file.url}`;
  const foodType = linkedTo.Asset[0].fields.title;

  const sortedFoodItems = foodItems.sort((a: any, b: any) => {
    console.log(a);
    return a.fields.id - b.fields.id;
  });

  return (
    <div className="bg-whiteBg ">
      <HeroSection url={categoryImage} foodType={foodType} />
      <div className="mt-12 flex flex-col items-center w-full px-24 2xl:px-64 xl:px-42 md:px-4 sm:px-4 xs:p-2   ">
        {sortedFoodItems.map((item: any, index: number) => (
          <FoodItem key={index} {...item.fields} />
        ))}
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
