import { useRouter } from "next/router";
import { getFoodItems } from "../helpers/getFoodItems";
import Image from "next/image";
import React from "react";
import HeroSection from "../components/CategoryPage/HeroSection";

interface CategoryProps {
  foodItems: any;
  linkedTo?: any;
}

function Category({ linkedTo, foodItems }: CategoryProps) {
  const categoryImage = `https:${linkedTo.Asset[0].fields.file.url}`;
  const foodType = linkedTo.Asset[0].fields.title;
  console.log(linkedTo, foodItems);

  return (
    <div>
      <HeroSection url={categoryImage} foodType={foodType} />
      <div className="mt-12">
        {foodItems.map((item: any, index: number) => (
          <h1 key={index + "yyo"}>{item.fields.nazov}</h1>
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
