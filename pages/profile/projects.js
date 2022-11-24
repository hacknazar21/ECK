import Head from "next/head";
import HFLayout from "../../layouts/HFLayout";
import Header from "../../components/common/Header";
import PageLayout from "../../layouts/PageLayout";
import PagesLayout from "../../layouts/PagesLayout";
import Footer from "../../components/common/Footer";
import Projects from "../../components/profile/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Личный кабинет - Мои проекты</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <Projects />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
