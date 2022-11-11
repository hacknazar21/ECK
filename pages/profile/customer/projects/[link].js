import Head from "next/head";
import HFLayout from "../../../../layouts/HFLayout";
import Header from "../../../../components/common/Header";
import Footer from "../../../../components/common/Footer";
import PageLayout from "../../../../layouts/PageLayout";
import PagesLayout from "../../../../layouts/PagesLayout";
import Project from "../../../../components/profile/customer/Projects/single/Project";

export default function TeamLinkPage() {
  return (
    <>
      <Head>
        <title>Название проекта</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Project />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
