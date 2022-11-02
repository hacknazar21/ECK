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
import Support from "../components/techinal-support/support";

export default function TechnicalSupport() {
  return (
    <>
      <Head>
        <title>Тех-поддержка</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Support />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
