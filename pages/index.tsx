import Head from "next/head";
import Hero from "../components/Hero";
import { createClient } from "contentful";
import MenuGrid from "../components/MenuGrid/MenuGrid";
import Heading from "../components/Heading";
import NaseHodnotyPage from "../components/NaseHodnoty/HodnotyPage";
import HodnotyPage from "../components/NaseHodnoty/HodnotyPage";

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Paluba Rozvoz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-whiteBg">
        <Hero />
        <Heading title="Ponuka" />
        <MenuGrid categories={props.categories} />
        <HodnotyPage />
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
