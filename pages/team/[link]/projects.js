import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import SingleTeamProjects from "../../../components/team/SingleTeamProjects";

export default function SingleTeamProjectsPage() {
  return (
    <>
      <Head>
        <title>Команды</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <SingleTeamProjects />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
