import Head from "next/head";
import HFLayout from "../../../layouts/HFLayout";
import Header from "../../../components/common/Header";
import PageLayout from "../../../layouts/PageLayout";
import PagesLayout from "../../../layouts/PagesLayout";
import Footer from "../../../components/common/Footer";
import SingleTeam from "../../../components/profile/Team/SingleTeam";

export default function SingleTeamPage() {
  return (
    <>
      <Head>
        <title>Личный кабинет - Мои команды</title>
      </Head>
      <HFLayout>
        <Header />
        <PagesLayout>
          <PageLayout>
            <SingleTeam />
          </PageLayout>
        </PagesLayout>
        <Footer />
      </HFLayout>
    </>
  );
}
