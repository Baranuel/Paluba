import { useRouter } from "next/router";
import {
  getCategories,
  getFoodItems,
  getPrilohy,
} from "../helpers/getFoodItems";
import React, { useState } from "react";
import HeroSection from "../components/CategoryPage/HeroSection";

import MenuGrid from "@/components/MenuGrid/MenuGrid";
import FoodTable from "@/components/CategoryPage/FoodTable";
import Head from "next/head";

interface CategoryProps {
  foodItems: any;
  linkedTo: any;
  prilohy: any;
  categories: any;
  isMobile: boolean;
  windowWidth: number;
}

function Category({
  prilohy,
  linkedTo,
  foodItems,
  categories,
  isMobile,
  windowWidth,
}: CategoryProps) {
  const router = useRouter();
  const [seeVegetarian, setSeeVegetarian] = useState(false);
  const categoryImage = `https:${linkedTo.Asset[0].fields.file.url}`;

  const foodTitle = router.query.category as string;
  const possibleCategories = categories.filter(
    (category: any) =>
      category.fields.title_id !== router.query.category &&
      category.fields.title_id !== "Prílohy"
  );

  const [seePrilohy, setSeePrilohy] = useState(false);
  return (
    <>
      <Head>
        <title>Kategórie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Paluba Rozvoz"
          content="Sme pizzéria s jedinečnou ponukou jedál. Okrem tradičnej pizzy ponúkame aj rôzne mäsové, rybie a vegánske jedlá, ako aj šaláty a prílohy. Navštívte nás a vyskúšajte náš široký výber jedál pre všetky chute."
        />
      </Head>

      <main className="bg-whiteBg">
        <HeroSection url={categoryImage} foodTitle={foodTitle} />
        <FoodTable
          prilohy={prilohy}
          seePrilohy={seePrilohy}
          setSeePrilohy={setSeePrilohy}
          food={foodItems}
          seeVegetarian={seeVegetarian}
          setSeeVegetarian={setSeeVegetarian}
        />
        <MenuGrid
          hasHeading={false}
          isMobile={isMobile}
          windowWidth={windowWidth}
          categories={possibleCategories}
        />
      </main>
    </>
  );
}

export default Category;

export async function getServerSideProps({ params }: any) {
  const category = params.category;
  const foodItems = await getFoodItems(category);
  const prilohy = await getPrilohy();
  const categories = await getCategories();

  return {
    props: {
      categories: categories.items,
      linkedTo: foodItems.includes,
      foodItems: foodItems.items,
      prilohy: prilohy.items,
    },
  };
}
