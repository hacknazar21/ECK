import Head from "next/head";
import HFLayout from "../layouts/HFLayout";
import Header from "../components/common/Header";
import Offer from "../components/home/Offer";
import Categories from "../components/home/Categories";
import PageLayout from "../layouts/PageLayout";
import PagesLayout from "../layouts/PagesLayout";
import Footer from "../components/common/Footer";
import News from "../components/home/News";
import Partners from "../components/home/Partners";
import { useEffect } from "react";

export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>{content.title || "Главная"}</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Offer content={content.blocks[0]} />
            <Categories content={content.blocks[1]} />
          </PageLayout>
          <PageLayout>
            <News content={content.blocks[2]} />
            <Partners content={content.blocks[3]} />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch(
      process.env.API_HOST + "/api/content/find/main_page/"
    );
    const data = await res.json();
    return {
      props: {
        content: data,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: {
        content: {},
      },
    };
  }
}
