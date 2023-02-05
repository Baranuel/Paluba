import "@/styles/global.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <div>Hello</div>
  ) : (
    <Component {...pageProps} setLoading={setLoading} loading={loading} />
  );
}
