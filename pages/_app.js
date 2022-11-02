import "../src/scss/style.scss";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Многоуровневая интеллектуальная система автоматического обмена
                решениями, новыми технологиями, информационными ресурсами"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
