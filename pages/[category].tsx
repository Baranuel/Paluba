import { useRouter } from "next/router";
import { getCategories, getFoodItems } from "../helpers/getFoodItems";

import React, { useCallback, useEffect, useState, useRef } from "react";
import HeroSection from "../components/CategoryPage/HeroSection";

import MenuGrid from "@/components/MenuGrid/MenuGrid";
import FoodTable from "@/components/CategoryPage/FoodTable";
import { AnimatePresence } from "framer-motion";
import Prilohy from "@/components/CategoryPage/Prilohy";

interface CategoryProps {
  foodItems: any;
  linkedTo: any;
  categories: any;
  isMobile: boolean;
  windowWidth: number;
}

function Category({ linkedTo, foodItems, categories, isMobile, windowWidth }: CategoryProps) {
  const router = useRouter()
  const [seeVegetarian, setSeeVegetarian] = useState(false);
  const categoryImage = `https:${linkedTo.Asset[0].fields.file.url}`;
  const foodType = linkedTo.Asset[0].fields.title;
  const possibleCategories = categories.filter((category:any) => category.fields.title_id !== router.query.category )
  const [seePrilohy, setSeePrilohy] = useState(false);
  return (
    <div className="bg-whiteBg relative ">
        <HeroSection url={categoryImage} foodType={foodType} />
            <FoodTable seePrilohy={seePrilohy} setSeePrilohy={setSeePrilohy} food={foodItems} seeVegetarian={seeVegetarian} setSeeVegetarian={setSeeVegetarian} />
           <MenuGrid  hasHeading={false} isMobile={isMobile} windowWidth={windowWidth} categories={possibleCategories} />
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
