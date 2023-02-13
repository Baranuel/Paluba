import Head from "next/head";
import Hero from "../components/Hero";
import { createClient } from "contentful";
import MenuGrid from "../components/MenuGrid/MenuGrid";
import HodnotyPage from "../components/NaseHodnoty/HodnotyPage";
import RecenziePage from "../components/Recenzie/RecenziePage";
import ContactPage from "../components/Kdenasnajdete/ContactPage";

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

export async function getServerSideProps(props: any) {
  const client = createClient({
    space: "xx2dzasjcpic",
    accessToken: "Shkp5PbccjOlxcv1F0xI-ZfxwZ0i2lN9lv_6hC8eS4s",
  });

  const categories = await client.getEntries({
    content_type: "category",
    include: 10,
  });

  return {
    props: {
      categories: categories.items,
    }, // will be passed to the page component as props
  };
}
