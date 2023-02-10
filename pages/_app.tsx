import "@/styles/global.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      {loading && <Spinner />}
      <Component
        {...pageProps}
        appLoaded={appLoaded}
        setAppLoaded={setAppLoaded}
        isMobile={isMobile}
        windowWidth={windowWidth}
      />
      <Footer />
    </>
  );
}
