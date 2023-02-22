import Head from "next/head";
import Hero from "../components/Hero";
import { createClient } from "contentful";
import MenuGrid from "../components/MenuGrid/MenuGrid";
import HodnotyPage from "../components/NaseHodnoty/HodnotyPage";
import RecenziePage from "../components/Recenzie/RecenziePage";
import ContactPage from "../components/Kdenasnajdete/ContactPage";
import { getCategories } from "@/helpers/getFoodItems";

interface homeProps {
  isMobile: boolean;
  windowWidth: number;
  categories: any;
}

export default function Home({ isMobile, windowWidth, ...props }: homeProps) {
  return (
    <>
      <Head>
        <title>Paluba Rozvoz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Sme pizzéria s jedinečnou ponukou jedál. Okrem tradičnej pizzy ponúkame aj rôzne mäsové, rybie a vegánske jedlá, ako aj šaláty a prílohy. Navštívte nás a vyskúšajte náš široký výber jedál pre všetky chute."
        />
        <meta name="robots" content="index" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
      </Head>

      <main className="bg-whiteBg">
        <Hero />
        <MenuGrid
          hasHeading
          isMobile={isMobile}
          windowWidth={windowWidth}
          categories={props.categories}
        />
        <HodnotyPage isMobile={isMobile} />
        <RecenziePage />
        <ContactPage isMobile={isMobile} />
      </main>
    </>
  );
}

export async function getStaticProps(props: any) {

  const categories = await getCategories()

  return {
    props: {
      categories: categories.items,
    }, // will be passed to the page component as props
  };
}
